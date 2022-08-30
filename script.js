const DiceRoll = document.querySelector('.btn--roll');
const hold = document.querySelector('.btn--hold');
const newGame = document.querySelector('.btn--new');
const diceImg = document.querySelector('.dice');
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const p0Current = document.querySelector('#current--0');
const p1Current = document.querySelector('#current--1');
const p0Active = document.querySelector('.player--0');
const p1Active = document.querySelector('.player--1');
let active = 0;
let currentScore = 0;
let scores = [0, 0];
let playing = true;
// // starting condition
// score0El.textContent = 0;
// score1El.textContent = 0;
// diceImg.classList.add('hidden');

function initialCondition() {
  active = 0;
  currentScore = 0;
  scores = [0, 0];
  playing = true;
  // starting condition
  score0El.textContent = 0;
  score1El.textContent = 0;
  diceImg.classList.add('hidden');
}
initialCondition();

const switchPlayer = function () {
  document.getElementById(`current--${active}`).textContent = 0;
  active = active === 0 ? 1 : 0;
  currentScore = 0;

  p0Active.classList.toggle('player--active');
  p1Active.classList.toggle('player--active');
};
//Rolluing functionality
DiceRoll.addEventListener('click', function () {
  if (playing) {
    const randomNo = Math.trunc(Math.random() * 6) + 1;
    console.log(randomNo);
    diceImg.classList.remove('hidden');
    // 'img/dice-3.png';
    diceImg.src = `img/dice-${randomNo}.png`;
    if (randomNo !== 1) {
      currentScore += randomNo;
      document.getElementById(`current--${active}`).textContent = currentScore;
    }
    //switching player
    else {
      switchPlayer();
    }
  }
});

//hold functionality
hold.addEventListener('click', function () {
  if (playing) {
    scores[active] += currentScore;

    document.getElementById(`score--${active}`).textContent = scores[active];

    if (scores[active] >= 20) {
      document
        .querySelector(`.player--${active}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${active}`)
        .classList.remove('player--active');
      playing = false;
      diceImg.classList.add('hidden');
    } else {
      //switch player
      switchPlayer();
    }
  }
});

newGame.addEventListener('click', function () {
  document
    .querySelector(`.player--${active}`)
    .classList.remove('player--winner');
  document.querySelector('.player--0').classList.add('player--active');
  p0Current.textContent = 0;
  p1Current.textContent = 0;
  initialCondition();
});
