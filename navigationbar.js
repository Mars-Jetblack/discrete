const template = document.createElement('template');




template.innerHTML = `
      <!DOCTYPE html>
      <script src="downloadmanager.js"></script>
     <html style="style.css">
     <link rel="stylesheet" type="text/css" href="style.css">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Istok+Web&family=Ubuntu:wght@300;400;500&display=swap" rel="stylesheet">
     <div class="header__uptext__containter">

     <div class="header__uptext__menu-grid-container">
     <a href="home.html">
     <h1 class="header__uptext__menu-grid-item">DISCRETE</h1>
     </a>
     <a href="nitrostream.html">
     <h2 class="header__uptext__menu-grid-item">NitroStream</h2>
     </a>
      <a href="sabotage.html">
     <h2 class="header__uptext__menu-grid-item">Sabotage</h2>
     </a>
     <a href="sideattack.html">
     <h2 class="header__uptext__menu-grid-item">Sideattack</h2>
     </a>
     <a href="5a.html">
     <h2 class="header__uptext__menu-grid-item">5A</h2>
     </a>

     </div>
     </div>
     </html>
`;

document.body.appendChild(template.content);