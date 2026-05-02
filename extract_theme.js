const fs = require('fs');

const html = fs.readFileSync('stitch_screens/home.html', 'utf8');
const match = html.match(/tailwind.config = (\{[\s\S]*?\})\s*<\/script>/);

if (match) {
  let configStr = match[1];
  // the string has unquoted trailing commas or whatever that makes JSON.parse fail, 
  // Let's execute it in a safer context or evaluate it
  let configVars = [];
  
  const fn = new Function('return ' + configStr);
  const config = fn();
  
  if (config?.theme?.extend?.colors) {
     for (const [key, value] of Object.entries(config.theme.extend.colors)) {
        configVars.push(`  --color-${key}: ${value};`);
     }
  }
  if (config?.theme?.extend?.fontFamily) {
     for (const [key, value] of Object.entries(config.theme.extend.fontFamily)) {
        configVars.push(`  --font-${key}: ${value.map(v => `"${v}"`).join(', ')};`);
     }
  }
  if (config?.theme?.extend?.borderRadius) {
     for (const [key, value] of Object.entries(config.theme.extend.borderRadius)) {
        configVars.push(`  --radius-${key === 'DEFAULT' ? 'DEFAULT' : key}: ${value};`);
     }
  }

  console.log(`@import "tailwindcss";
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap');

@theme {
` + configVars.join('\n') + `
}

.material-symbols-outlined {
    font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
}

.glass-nav {
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
}
`);
}
