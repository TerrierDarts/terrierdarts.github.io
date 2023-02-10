---
title: "Heat - Test"
description: "Test Your Heat Streamer.bot Actions"
code: "1.4"
pubDate: "Feb 10 2023"
setUpDifficulty: "4/5"
heroImage: "../../heroImages/heat_ws5.png"
---
```html
import Script from '../../obs_links/heat_offline/script.js';
import Style from '../../obs_links/heat_offline/style.css';
---

<div id="textBoxes">
User ID : <input type="text" id="user" value="535833752"><br>
SB WS Address : <input type="text" id="url" value="ws://127.0.0.1:8080/"><br>
Canvas Width : <input type="number" id="width" value="1920"><br>
Canvas Height :  <input type="number" id="height" value="1080"><br> 
Modifiers: <br>
 - Alt : <input type="checkbox" id="alt" value="false"><br>
  - Shift : <input type="checkbox" id="shift" value="false"><br>
  - Ctrl : <input type="checkbox" id="ctrl" value="false"><br>
Ensure Data is Correct above and press Open Click Map: <br>
<button onclick="updateCanvas()"> Open Click Map </button>
</div>
<div id="contentContainer">
  <div id="thing">
  </div>
</div>
```