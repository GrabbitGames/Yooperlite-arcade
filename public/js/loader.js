const gameframe = document.querySelector('.gameframe');
const gamename = document.getElementById('gamename');
const gameimage = document.querySelector('.game-image');

const params = new URLSearchParams(window.location.search);
const gameToLoad = params.get('game');

if (gameToLoad) {
  if (gameToLoad === 'little-alchemy-2') {
    gameframe.src = 'https://littlealchemy2.com';
    gamename.textContent = 'Little Alchemy 2';
    gameimage.src = '/public/assets/images/littlealchemy2.png';
  } else if (gameToLoad === 'flip-bros') {
    gameframe.src = '/public/assets/games/flip-bros/game.html';
    gamename.textContent = 'Flip Bros';
    gameimage.src = '/public/assets/images/flipbros.avif';
  } else if (gameToLoad === 'level-devil') {
    gameframe.src = '/public/assets/games/level-devil/game.html';
    gamename.textContent = 'Flip Bros';
    gameimage.src = '/public/assets/images/leveldevil.avif';
  } else {
    const imageName = gameToLoad.replace(/-/g, '');
    const imageSrcPng = `/public/assets/images/${imageName}.png`;
    const imageSrcAvif = `/public/assets/images/${imageName}.avif`;
    const imageSrcPNG = `/public/assets/images/${imageName}.PNG`;
    const imageSrcjpeg = `/public/assets/images/${imageName}.jpeg`;
    const imageSrcwebp = `/public/assets/images/${imageName}.webp`;
    const imageSrcWEBP = `/public/assets/images/${imageName}.WEBP`;
    const imageSrcJPG = `/public/assets/images/${imageName}.JPG`;
    const imageSrcjpg = `/public/assets/images/${imageName}.jpg`;
    
    const imageChecker = new Image();
    imageChecker.src = imageSrcPng;

    imageChecker.onload = function () {
      gameimage.src = imageSrcPng;
      loadGame();
    };

    imageChecker.onerror = function () {
      gameimage.src = imageSrcAvif;
      loadGame();
    };

    function loadGame() {
      const words = gameToLoad.split('-');
      const title = words.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

      gamename.textContent = title;
      gameframe.src = `/public/assets/fonts/${gameToLoad}`;

      gameframe.style.display = 'none';

      setTimeout(() => {
        gameframe.style.display = 'block';
      }, 300);
    }
  }
}



