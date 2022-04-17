let startWindow = document.querySelector('.startgame'),
    startBtn = document.querySelector('.startgame button'),
    yourName = prompt('Whats Your Name'),
    names = document.querySelector('.name'),
    wrongTitel = document.querySelector('.wrongTitel'),
    wrongCount = 0,
    parent = document.querySelector('.memory-game-blocks'),
    block = document.querySelectorAll('.memory-game-blocks .game-block'),
    wonsound = document.querySelector('.won'),
    tim = 0,
    later,
    newShuflArr = [],
    arrToTest = [],
    order = 0,
    rightCount = 0;
wrongTitel.innerHTML = `Wrong Tries : ${wrongCount}`;
names.innerHTML = `Hello : ${yourName}`

function shufleFun() {
    for (let i = 0; i < block.length; i++) {
        newShuflArr.push(Math.floor(Math.random() * 20))
    }
    for (let i = 0; i < block.length; i++) {
        block[i].style.order = `${newShuflArr[order]}`
        order++
    }
}
shufleFun();

function startWIndowClose() {
    startWindow.style.display = 'none'
}

function woonFun() {
    rightCount == 10 ? wonsound.play() : false;
}
block.forEach(e => {
    e.onclick = function() {
        arrToTest = [];
        this.classList.add('is-flipped');
        for (let i = 0; i < block.length; i++) {
            if (block[i].classList.contains('is-flipped')) {
                tim++
            }
        }
        if (tim > 2) {
            tim = 0;
            saveWon();
        }
    }
})

function closeFalese() {
    tim = 0;
    for (let i = 0; i < block.length; i++) {
        if (block[i].classList.contains('is-flipped')) {
            later = setTimeout(function() {
                block[i].classList.remove('is-flipped')
            }, 450)
        }
    }
}

function saveWon() {
    for (let i = 0; i < block.length; i++) {
        if (block[i].classList.contains('is-flipped')) {
            arrToTest.push(block[i]);
        }
    }
    if (arrToTest[0].getAttribute('data') == arrToTest[1].getAttribute('data')) {
        arrToTest[0].classList.remove('is-flipped')
        arrToTest[0].classList.add('is-flippedd')
        arrToTest[1].classList.remove('is-flipped')
        arrToTest[1].classList.add('is-flippedd')
        rightCount++;
        arrToTest = [];
        woonFun();
    } else {
        arrToTest = [];
        wrongCount++
        wrongTitel.innerHTML = `Wrong Tries : ${wrongCount}`;
        closeFalese()

    }
}