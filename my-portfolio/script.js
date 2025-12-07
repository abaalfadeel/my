// محاكاة كتابة الكود في شاشة setup
let codeText = document.getElementById('code-text');
let setupScreen = document.getElementById('setup-screen');
let mainSite = document.getElementById('main-site');

let code = `function hello() {
  console.log("مرحبا بك في محفظة خادم اباالفضل!");
}`;

let i = 0;
function typeCode() {
  if (i < code.length) {
    codeText.textContent += code[i];
    i++;
    setTimeout(typeCode, 80);
  } else {
    explodeScreen();
  }
}

function explodeScreen() {
  setupScreen.classList.add('explode');
  setTimeout(() => {
    setupScreen.classList.add('hidden');
    mainSite.classList.remove('hidden');
  }, 1000);
}

window.onload = () => {
  typeCode();
};
