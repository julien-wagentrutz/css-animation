const player = document.querySelector('.player');
const planet = document.querySelector('.planet .flowers');
let state = 'motionless'
let testJump = true
let degEarth = 0
let dir = true
step = 0

window.addEventListener('keydown',
    function (event) {
        if(step >= 1)
        {
            step = 0
            if (dir) {
                degEarth += 5
            }
            else {
                degEarth -= 5
            }
            planet.style.transform = "rotate(" + degEarth + "deg)"
        }
        step++
        if(event.code == "ArrowRight")
        {
            player.classList.remove('run-pause')
            dir = false
            state = 'run-pause'
            player.style.transform = "rotateY(0deg)"
        }
        else if(event.code == "ArrowLeft")
        {
            player.classList.remove('run-pause')
            dir = true
            state = 'run-pause'
            player.style.transform = "rotateY(180deg)"
        }
        else if(event.code == "Space" && testJump)
        {
            testJump = false
            player.classList.add('jump');
            let inter = setInterval(function () {
                player.classList.remove('jump')
                testJump = true
                clearInterval(inter)
            },1000)
        }
        else
        {
            if(state != 'motionless' )
            {
                player.classList.add(state)

            }
            state = 'motionless'
        }

});




window.addEventListener('keyup',
    function (event) {
        if(state != 'motionless' && event.code != 'Space')
        {
            player.classList.add(state)
            planet.classList.add(state)
        }
 });
