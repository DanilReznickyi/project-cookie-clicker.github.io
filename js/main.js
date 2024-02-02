// let clicks = 1; // начинаем с 1, чтобы учесть первое нажатие
// let point = 0; // точки начинаются с 0


// const image = document.getElementById('game-img');
// const score = document.getElementById('score');
// const buyBat = document.getElementById('buy-bat');
// const buyAxe = document.getElementById('buy-axe');
// const buyMace = document.getElementById('buy-mace');
// const card = document.getElementById('card');
// let points = document.getElementById('points')
// price ={
//     bat: 10,
//     axe: 300,
//     mace: 800
// }
// let originalWidth = image.width;
// image.addEventListener("mousedown", function() {
//     image.style.width = (originalWidth * 0.9) + "px";
// });
// image.addEventListener("mouseup", function() {
//     image.style.width = originalWidth + "px";
// });

// function clicker(){
//     score.textContent = clicks++;
//     points.textContent = point++;

// }
// function clickerWithBat(){
//     score.textContent = clicks+=2;
//     points.textContent = point+=2;
// }
// function clickerWithAxe(){
//     score.textContent = clicks+=4;
//     points.textContent = point+=4;
// }
// function clickerWithMace(){
//     score.textContent = clicks+=7;
//     points.textContent = point+=7;
// }



// image.addEventListener('click', function() {
//     clicker();
// });
// buyBat.addEventListener('click', function() {
//     if (point >= price.bat) {
//         point -= price.bat;
//         points.textContent = point
//         card.classList.add('grayscale'); // добавляем класс grayscale
//         card.parentNode.classList.toggle('grayscale');
//         image.removeEventListener('click', clicker); // Видаляємо старий обробник
//         image.addEventListener('click', clickerWithBat); // Додаємо новий обробник
//     }
// });
// buyAxe.addEventListener('click', function() {
//     if (point >= price.axe) {
//         point -= price.axe;
//         points.textContent = point
//         card.parentNode.classList.toggle('grayscale');
//         image.removeEventListener('click', clickerWithBat); // Видаляємо старий обробник
//         image.addEventListener('click', clickerWithAxe); // Додаємо новий обробник
//     }
// });
// buyMace.addEventListener('click', function() {
//     if (point >= price.mace) {
//         point -= price.mace;
//         points.textContent = point
//         card.parentNode.classList.toggle('grayscale');
//         image.removeEventListener('click', clickerWithAxe); // Видаляємо старий обробник
//         image.addEventListener('click', clickerWithMace); // Додаємо новий обробник
//     }
// });






let clicks = 1;
let point = 0;

let batBought = false;
let axeBought = false;
let maceBought = false;
const image = document.getElementById('game-img');
const score = document.getElementById('score');
const buyBat = document.getElementById('buy-bat');
const buyAxe = document.getElementById('buy-axe');
const buyMace = document.getElementById('buy-mace');
const cardBat = document.getElementById('card-bat');
const cardAxe = document.getElementById('card-axe');
const cardMace = document.getElementById('card-mace');
let points = document.getElementById('points');

price = {
    bat: 100,
    axe: 500,
    mace: 1000
};

let originalWidth = image.width;

image.addEventListener("mousedown", function() {
    image.style.width = (originalWidth * 0.9) + "px";
});

image.addEventListener("mouseup", function() {
    image.style.width = originalWidth + "px";
});

function updatePoints() {
    points.textContent = point;
}

function clicker() {
    score.textContent = clicks++;
    point++;
    updatePoints();
}

function clickerWithBat() {

    point += 2;
    updatePoints();
}

function clickerWithAxe() {

    point += 4;
    updatePoints();
}

function clickerWithMace() {

    point += 7;
    updatePoints();
}

image.addEventListener('click', function() {
    clicker();
});

buyBat.addEventListener('click', function() {
    if (!batBought && point >= price.bat) {
        point -= price.bat;
        updatePoints();
        cardBat.classList.add('grayscale');
        image.removeEventListener('click', clicker);
        image.addEventListener('click', clickerWithBat);
        batBought = true
    }
});

buyAxe.addEventListener('click', function() {
    if (!axeBought && point >= price.axe) {
        point -= price.axe;
        updatePoints();
        cardAxe.classList.add('grayscale');
        image.removeEventListener('click', clickerWithBat);
        image.addEventListener('click', clickerWithAxe);
        axeBought = true
    }
});

buyMace.addEventListener('click', function() {
    if (!maceBought && point >= price.mace) {
        point -= price.mace;
        updatePoints();
        cardMace.classList.add('grayscale');
        image.removeEventListener('click', clickerWithAxe);
        image.addEventListener('click', clickerWithMace);
        maceBought = true
    }
});

