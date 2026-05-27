const fs = require('fs');
const text = `{
  "permissions": {
    "allow": [
      "Bash(sed 's/^export const gettingStarted = \\\\[/import type { UIItem } from \\"..\\\\\\\\/..\\\\\\\\/types\\";\\\\\\\\n\\\\\\\\nexport const gettingStarted: UIItem[] = [/' src/data/sections/gettingStarted.js)",
      "Bash(sed 's/^export const pageLayouts = \\\\[/import type { UIItem } from \\"..\\\\\\\\/..\\\\\\\\/types\\";\\\\\\\\n\\\\\\\\nexport const pageLayouts: UIItem[] = [/' src/data/sections/pageLayouts.js)"
    ]
  }
}`;
try {
  JSON.parse(text);
  console.log("JSON.parse OK");
} catch (e) {
  console.log("JSON.parse error:", e.message);
}
