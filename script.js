// CONSTANTES

    //contant of the world
const player = document.querySelector('.js-player');
const planet = document.querySelector('.js-flowers');
const road = document.querySelector('.js-road');
const trees = document.querySelectorAll('.js-tree')
const houses = document.querySelectorAll('.js-house')
const buildings = document.querySelectorAll('.js-building')
const eiffelTower = document.querySelector('.js-eiffel-tower')
const treesDeg =
    {
        '-356' : 0,
        '-358' : 0,
        '-0'   : 0,
        '-2'   : 0,
        '-4'   : 0,
        '-110' : 2,
        '-112' : 2,
        '-114' : 2,
        '-116' : 2,
        '-192' : 4,
        '-194' : 4,
        '-196' : 4,
        '-198' : 4
    }

    // constant of the menu

const menuButton = document.querySelector('.js-button-open')
const menuElement = document.querySelector('.js-menu')
const sadButton = document.querySelector('#sad')
const danceButton = document.querySelector('#dance')
const treeButton = document.querySelector('#tree')
const houseButton = document.querySelector('#house')
const roadButton = document.querySelector('#road')
const buildingButton = document.querySelector('#building')
const eiffelButton = document.querySelector('#eiffel-tower')
const speedButton = document.querySelector('#speed-player')

// VARIABLES

let earthDeg = 0;
let step = 0;
let direction = true;
let playerStep = 0
let speedPlayer = 2
let unCheck = false


    // function

/*
    function movePlayer
    param :
    descrip :
        Move the player and the planet in function of which direction it go
*/


const movePlayer = () =>
{
    playerStep++

    if(direction)
    {
        player.style.transform = "rotateY(0deg)"
        earthDeg -= speedPlayer
    }
    else
    {
        player.style.transform = "rotateY(180deg)"
        earthDeg += speedPlayer
    }
    player.classList.remove('run-pause')
    planet.style.transform = "rotate(" + earthDeg + "deg)"

    if(playerStep >= 50)
    {
        if(direction)
        {
            step++
            if(step>5)step=5
        }
        else
        {
            step--
            if(step<0)step=0
        }
        unCheck = false
        playerStep = 0
    }

    modifyWorld()
}

/*
    function stopMovePlayer
    param :
    descrip :
        Stop the animation of run of the player
*/


const stopMovePlayer = () =>
{
    player.classList.add('run-pause')
}

/*
    function modifyWorld
    param :
    descrip :
        appear or disapear element about the step of the player
*/

const modifyWorld = ()=>
{
    switch (step)
    {
        case 0:
            if(!unCheck)
                appearElement(treeButton,trees,true)
            break;
        case  1:
            if(!unCheck)
             appearElement(treeButton,trees)
            appearElement(houseButton,houses,true)
            break;
        case  2:
            if(!unCheck)
                appearElement(houseButton,houses)
            appearElement(roadButton,road,true)
            break;
        case  3:
            if(!unCheck)
                appearElement(roadButton,road)
            appearElement(buildingButton,buildings,true)
            break;
        case  4:
            if(!unCheck)
                appearElement(buildingButton,buildings)
            appearElement(eiffelButton,eiffelTower,true)
            break;
        case  5:
            if(!unCheck)
                appearElement(eiffelButton,eiffelTower)
            break;
    }
}

/*
    function appearElement
    param :
            button => DOM => button on click
            element => DOM => element affect
            disapear => boolean => if is appear (false) or disapear (true)
    descrip :
            appear or disapear element, and checked the checkbox
 */
const appearElement = (button,element,disapear) =>
{
    if(!button.checked)
    {
        if(element.length > 1)
        {
            for(let i = 0; i < element.length; i++ )
            {
                if(disapear)
                    element[i].classList.remove('appear')
                else
                    element[i].classList.add('appear')

            }
        }
        else
        {
            if(disapear)
                element.classList.remove('appear')
            else
                element.classList.add('appear')
        }
    }
    button.checked = !disapear
}


/*
    function jump
    param:
    description : make the player jump and test if he jump on apple
 */

const jump = () =>
{
    if(treeButton.checked)
    {
        for(var key in treesDeg)
        {
            if(key == earthDeg%360)
            {
                let apples = trees[treesDeg[key]].querySelectorAll('.apple:not(.fall)')
                if(apples.length>0)
                {
                   let rand = Math.floor(Math.random()*apples.length)
                    apples[rand].classList.add('fall')
                    let top = apples[rand].offsetTop - 3
                   apples[rand].style.transform = 'translateY(-'+ top +'px)'
                }
            }
        }
    }



    player.classList.add('jump');
    let inter = setInterval(function () {
        player.classList.remove('jump')
        clearInterval(inter)
    },1000)
}


/* MENU */

menuButton.addEventListener(
    'click',
     () =>
    {
    menuElement.classList.toggle('open')
    }
)



// TOGGLE sad class to the head of the player
sadButton.addEventListener(
    'click', () => {player.querySelector('.head .mouth').classList.toggle('sad')}
)

speedButton.addEventListener(
    'click', () => {speedPlayer = parseInt(speedButton.value)}
)

// TOGGLE dance class to the head of the player

danceButton.addEventListener(
    'click', () => {player.classList.toggle('dance')}
)

// Show the road on the world via the menu button

roadButton.addEventListener(
    'click', () =>
    {
        if(step == 3 )unCheck = true
        road.classList.toggle('appear')
    }
)

// Show the Eiffel Tower on the world via the menu button

eiffelButton.addEventListener(
    'click', () =>
    {
        if(step == 5 )unCheck = true
        eiffelTower.classList.toggle('appear')
    }
)



// Show the trees on the world via the menu button

treeButton.addEventListener(
    'click', () =>
    {
        if(step == 1 )unCheck = true
        for(let i = 0; i < trees.length; i++ )
        {
            trees[i].classList.toggle('appear')
        }
    }
)

// Show the house on the world via the menu button

houseButton.addEventListener(
    'click', () =>
    {
        if(step == 2 )unCheck = true
        for(let i = 0; i < houses.length; i++ )
        {
            houses[i].classList.toggle('appear')
        }
    }
)

// Show the building on the world via the menu button

buildingButton.addEventListener(
    'click', () =>
    {
        if(step == 4 )unCheck = true
        for(let i = 0; i < buildings.length; i++ )
        {
            buildings[i].classList.toggle('appear')
        }
    }
)


/* INTERACTION WORLD */

    // player action with keyboard

window.addEventListener(
    'keydown', (event) =>
    {
        if(event.code === "ArrowRight")
        {
            direction = true
            movePlayer()
        }
        else if(event.code === "ArrowLeft")
        {
            direction = false
           movePlayer()
        }
        else if (event.code === "Space")
        {
            jump()
        }
    }
);

// Stop animation when player don't move
window.addEventListener(
    'keyup', (event) =>
    {
        stopMovePlayer()

    }
);
