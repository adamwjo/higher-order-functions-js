
let avengers = [
    {
        name: "Iron-Man",
        powerLevel: 500,
        talent: "tech",
        isDead: false
    },
    {
        name: "Black-Widow",
        powerLevel: 200,
        talent: "stealth",
        isDead: false
    },
    {
        name: "Black-Panther",
        powerLevel: 423,
        talent: "stealth",
        isDead: true
    },
    {
        name: "Spider-Man",
        powerLevel: 700,
        talent: "tech",
        isDead: true
    },
    {
        name: "Thor",
        powerLevel: 1000,
        talent: "strength",
        isDead: false
    },
    {
        name: "hulk",
        powerLevel: 1200,
        talent: "tech",
        isDead: false
    }
];

const infinitySnap = function() {
   avengers.forEach((avenger) => {
       if (avenger.isDead == true) {
           avenger.isDead = false   
       }
   });
   console.log(avengers)
};

document.addEventListener('DOMContentLoaded', () => {
    console.log("were in")
    let button = document.getElementById('avengers-button')
    button.addEventListener('click', () => {
        console.log('click')
        infinitySnap()
    });
    
})