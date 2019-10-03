document.querySelector("#bouton-burger").onclick = function() {
    if (window.getComputedStyle(document.querySelector('#menu-burger')).display === 'none') {
        document.querySelector('#menu-burger').style.display = 'block';
    } else {
        document.querySelector('#menu-burger').style.display = "none";
    }
}

const play = (idPlayer, control) => {
    const player = document.querySelector('#' + idPlayer);

    if (player.paused) {
        player.play();
        control.textContent = 'Pause';
    } else {
        player.pause();
        control.textContent = 'Play';
    }
}

const resume = (idPlayer) => {
    const player = document.querySelector('#' + idPlayer);

    player.currentTime = 0;
    player.pause();
}