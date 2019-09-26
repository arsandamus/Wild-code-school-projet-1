function play(idPlayer, control) {
    const player = document.querySelector('#' + idPlayer);

    if (player.paused) {
        player.play();
        control.textContent = 'Pause';
    } else {
        player.pause();
        control.textContent = 'Play';
    }
}

function resume(idPlayer) {
    const player = document.querySelector('#' + idPlayer);

    player.currentTime = 0;
    player.pause();
}