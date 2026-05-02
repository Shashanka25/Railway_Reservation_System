const fs = require('fs');

function convertHtmlToJsx(inputFile, outputFile, mainWrapper = true) {
  let html = fs.readFileSync(inputFile, 'utf8');
  
  // Extract main block and any script/style if necessary.
  let match = html.match(/<main[^>]*>([\s\S]*?)<\/main>/i);
  if (!match) return;
  
  let mainContent = match[0];
  
  // replace class= with className=
  let jsx = mainContent.replace(/class=/g, 'className=');
  // replace unclosed tags like img/input/hr/br
  jsx = jsx.replace(/<(img|input|hr|br|meta|link)([^>]*?)(?<!\/)>/g, '<$1$2/>');
  // replace inline styles if any (convert style="..." to style={{...}}) - basic regex only handles none or simple
  jsx = jsx.replace(/style="([^"]*)"/g, (match, styles) => {
     let obj = {};
     styles.split(';').forEach(s => {
         if(!s.trim()) return;
         let [k,v] = s.split(':');
         if(k && v) {
             k = k.trim().replace(/-([a-z])/g, g => g[1].toUpperCase());
             obj[k] = v.trim();
         }
     });
     return `style={${JSON.stringify(obj)}}`;
  });
  // handle raw characters like &nbsp; or replace specific things
  jsx = jsx.replace(/selected>/g, 'defaultValue>');
  // add next/link instead of a
  jsx = jsx.replace(/<a([^>]*?)href="([^"]*)"([^>]*)>/g, '<Link$1href="$2"$3>');
  jsx = jsx.replace(/<\/a>/g, '</Link>');
  // replace <!-- with {/* and --> with */}
  jsx = jsx.replace(/<!--/g, '{/*').replace(/-->/g, '*/}');
  
  // Search page has some specific things, but we'll manually patch them later if needed.
  
  let outputJsx = `import Link from 'next/link';
import Image from 'next/image';

export default function Page() {
  return (
    ${jsx}
  );
}`;
  fs.writeFileSync(outputFile, outputJsx);
}

convertHtmlToJsx('stitch_screens/home.html', 'src/app/page.tsx');
convertHtmlToJsx('stitch_screens/search.html', 'src/app/search/page.tsx');
convertHtmlToJsx('stitch_screens/seat_selection.html', 'src/app/seat-selection/page.tsx');
convertHtmlToJsx('stitch_screens/review_payment.html', 'src/app/review/page.tsx');
convertHtmlToJsx('stitch_screens/ticket.html', 'src/app/ticket/page.tsx');
