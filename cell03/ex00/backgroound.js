const changeColorBtn = document.getElementById('color-change-btn');
const body = document.body;

function getRandomHexColor() {
  const hexChars = '0123456789abcdef';
  let color = '#'; 

  for (let i = 0; i < 6; i++) {
    const randomIndex = Math.floor(Math.random() * 16);
    color += hexChars[randomIndex];
  }

  return color;
}

changeColorBtn.addEventListener('click', function() {
  const newColor = getRandomHexColor();
  body.style.backgroundColor = newColor;
});