const firstRandomNum = Math.floor(Math.random() * 6) + 1

const firstDiceImage = 'images/dice' + firstRandomNum + '.png';

document.querySelectorAll
('img')[0].setAttribute
('src', firstDiceImage)

const secondRandomNum = Math.floor(Math.random() * 6) + 1

const secondDiceImage = 'images/dice' + secondRandomNum + '.png';

document.querySelectorAll
('img')[1].setAttribute
('src', secondDiceImage)

if(firstRandomNum > secondRandomNum) {
document.querySelector
('h1').innerHTML = 'The Winner is User 1';

}else if (firstRandomNum < secondRandomNum){

    document.querySelector
('h1').innerHTML = ' Winner is Player 2';
}else {
    document.querySelector
('h1').innerHTML = "It's a Draw!";
}