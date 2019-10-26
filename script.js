const player = document.querySelector('.player');
const planet = document.querySelector('.planet');
let state = 'motionless'
let testJump = true

window.addEventListener('keydown',
    function (event) {
    console.log(event.code)
        if(event.code == "ArrowRight")
        {
            player.classList.remove('run-pause')
            planet.classList.remove('run-pause')
            state = 'run-pause'
        }
        else if(event.code == "Space" && testJump)
        {
            testJump = false
            player.classList.add('jump');
            let inter = setInterval(function () {
                console.log('gdfs')
                player.classList.remove('jump')
                testJump = true
                clearInterval(inter)
            },1000)

        }

});

window.addEventListener('keyup',
    function (event) {
        if(state != 'motionless' && event.code != 'Space')
        {
            player.classList.add(state)
            planet.classList.add(state)
        }

        state = 'motionless'
    });
