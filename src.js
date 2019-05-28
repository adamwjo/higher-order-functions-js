
let avengers = [
    {
        name: "Iron-Man",
        powerLevel: 500,
        talent: "tech",
        isDead: false,
        img: 'https://upload.wikimedia.org/wikipedia/en/e/e0/Iron_Man_bleeding_edge.jpg'
    },
    {
        name: "Black-Widow",
        powerLevel: 200,
        talent: "stealth",
        isDead: false,
        img: 'https://upload.wikimedia.org/wikipedia/en/e/eb/Black_Widow_1.jpg'

    },
    {
        name: "Black-Panther",
        powerLevel: 423,
        talent: "stealth",
        isDead: true,
        img: 'https://upload.wikimedia.org/wikipedia/en/9/9f/Black_Panther_OS_Vol_1_2.png'
    },
    {
        name: "Spider-Man",
        powerLevel: 700,
        talent: "tech",
        isDead: true,
        img: 'https://upload.wikimedia.org/wikipedia/en/1/1f/Spider-Man_%28Miles_Morales%29.jpg'
    },
    {
        name: "Thor",
        powerLevel: 1000,
        talent: "strength",
        isDead: false,
        img: 'https://upload.wikimedia.org/wikipedia/en/4/41/Thor-272.jpg'
    },
    {
        name: "Hulk",
        powerLevel: 1200,
        talent: "tech",
        isDead: false,
        img: 'https://upload.wikimedia.org/wikipedia/en/5/59/Hulk_%28comics_character%29.png'
    }
];

let readyTeam = []

document.addEventListener('DOMContentLoaded', () => {
   avengers.forEach(avenger => renderAvenger(avenger))
    
});


const renderAvenger = (avenger) => {
   
    // console.log(avenger)
    
    //create the card in memory
    let avengerCard = document.createElement('div');
    avengerCard.classList.add('card')
    avengerCard.id = `${avenger.name}`

    let name = document.createElement('h1')
    name.innerText = avenger.name
    avengerCard.appendChild(name)

    avengerCard.innerHTML = 
        `<h2>${avenger.name}</h2>
            <img class="card-img" src="${avenger.img}">
                <br>
                <ul>
                    <li>Talent: ${avenger.talent}</li>
                    <li> Power level: ${avenger.powerLevel}</li>
                </ul>
            <button id=${avenger.name}-button>Assemble</button>`
    
        //Add the avenger card to the Team selection   
        document.querySelector('#avengers-container').appendChild(avengerCard)

        //add an event listener on each button that will add avenger to the roster
        avengerCard.querySelector('button').addEventListener('click', () => {
            assembleHandler(avenger)
        })
        //made some commentsß
        
    };

    const renderTeam = (member) => {
        console.log(member)
        let avengerCard = document.createElement('div');
        avengerCard.classList.add('card')
        avengerCard.id = `${member.name}`
        let name = document.createElement('h3')
        name.innerText = member.name
        avengerCard.appendChild(name)
        document.querySelector('#roster').appendChild(avengerCard)
    }

    const assembleHandler = (avenger) => {
        console.log(`you clicked ${avenger.name}`)
        readyTeam.push(avenger)
        document.querySelector(`#${avenger.name}`).remove()
        console.log(readyTeam)
        document.querySelector('#roster').innerHTML = ``
        readyTeam.forEach(member => renderTeam(member))
    }
    
 
