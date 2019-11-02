const player = document.querySelector('.player');
const planet = document.querySelector('.planet .flowers');
const road = document.querySelector('.planet .road');
const lines = document.querySelectorAll('.planet .line');
const trees = document.querySelectorAll('.tree')
const houses = document.querySelectorAll('.house')
const menuButton = document.querySelector('.button-open')
const menuElement = document.querySelector('.menu')
const sadButton = document.querySelector('.button-sad')
let state = 'motionless'
let testJump = true
let degEarth = 0
let dir = true
let step = 1

/* MENU */

menuButton.addEventListener('click',
    function () {
    menuElement.classList.toggle('open')
    })


/* INTERACTION */

window.addEventListener('keydown',
    function (event) {

        if(event.code == "ArrowRight")
        {
            player.classList.remove('run-pause')
            dir = false
            state = 'run-pause'
            player.style.transform = "rotateY(0deg)"
            step++
            if(step%2 == 0)
            {
                if (dir) {
                    degEarth += 5
                }
                else {
                    degEarth -= 5
                }
                planet.style.transform = "rotate(" + degEarth + "deg)"
                road.style.transform = "rotate(" + degEarth + "deg)"
            }

        }
        else if(event.code == "ArrowLeft")
        {
            player.classList.remove('run-pause')
            dir = true
            state = 'run-pause'
            player.style.transform = "rotateY(180deg)"
            step--
            if(step%2 == 0)
            {
                if (dir) {
                    degEarth += 5
                }
                else {
                    degEarth -= 5
                }
                planet.style.transform = "rotate(" + degEarth + "deg)"
                road.style.transform = "rotate(" + degEarth + "deg)"
            }
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


        if(step >= 100)
        {
            for (let i = 0; i < trees.length;i++)
            {
                trees[i].classList.add('appear')
            }
        }
        else if(step < 100)
        {
            for (let i = 0; i < trees.length;i++)
            {
                trees[i].classList.remove('appear')
            }
        }

        if(step >= 200)
        {
            for (let i = 0; i < houses.length;i++)
            {
                houses[i].classList.add('appear')
            }
        }
        else if(step < 200)
        {
            for (let i = 0; i < houses.length;i++)
            {
                houses[i].classList.remove('appear')
            }
        }
        if(step >= 250)
        {
            road.classList.add('appear')
            for (let i = 0; i < lines.length;i++)
            {
                lines[i].classList.add('appear')
            }
        }
        else if(step < 250)
        {
            road.classList.remove('appear')
            for (let i = 0; i < lines.length;i++)
            {
                lines[i].classList.remove('appear')
            }
        }
});




window.addEventListener('keyup',
    function (event) {
        if(state != 'motionless' && event.code != 'Space')
        {
            player.classList.add(state)
        }
 });
