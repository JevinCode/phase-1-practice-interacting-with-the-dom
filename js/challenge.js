const counter = document.getElementById('counter');
let likesArr = [];
let paused = false;

setInterval(incrementCounter, 1000);

const minus = document.getElementById('minus');
const plus = document.getElementById('plus');

minus.addEventListener('click', decrementCounter);
plus.addEventListener('click', incrementCounter);

const heartButton = document.getElementById('heart');
heartButton.addEventListener('click', () => {
    if(!paused) {
        let counterVal = Number.parseInt(counter.textContent);
        let numLikes = likesArr[counterVal];
        if(numLikes === undefined) {
            numLikes = 0;
        }
        likesArr[counterVal] = numLikes + 1;
        const likesList = document.querySelector('.likes');
        if(numLikes > 0) {
            const li = likesList.lastChild;
            li.textContent = `${counterVal} has been liked ${numLikes + 1} times`;
        }
        else {
            const li = document.createElement('li');
            li.textContent = `${counterVal} has been liked ${numLikes + 1} times`;
            likesList.append(li);
        }
    }
});

const pauseButton = document.getElementById('pause');
pauseButton.addEventListener('click', e => {
    paused = !paused;
    e.target.textContent = paused ? 'resume' : 'pause';
});

const targetForm = document.querySelector('#comment-form');
const listDiv = document.querySelector('#list');

targetForm.addEventListener('submit', e => {
    e.preventDefault();
    const p = document.createElement('p');
    const commentText = document.querySelector('#comment-input').value;
    p.textContent = commentText;
    listDiv.append(p);
    e.target.reset();
});

function incrementCounter() {
    if(!paused) {
        let counterVal = Number.parseInt(counter.textContent);
        counterVal++;
        counter.textContent = counterVal.toString();
    }
}

function decrementCounter() {
    if(!paused) {
        let counterVal = Number.parseInt(counter.textContent);
        counterVal--;
        counter.textContent = counterVal.toString();
    }
}