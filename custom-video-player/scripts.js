// Selecionando os elementos

const player = document.querySelector('.player');
const video = document.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipbuttons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');



// Funções

function togglePlay() {

/*    if(video.paused) {
        video.play();
    } else {
        video.pause();
    }*/

    // refatorando
    const method = video.paused ? 'play' : 'pause';
    video[method]();
}

// Event Listners

video.addEventListener('click', togglePlay);