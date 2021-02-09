//var Player = require('./Player');
var readlineSync = require('readline-sync');

// Define Player object.
function Player(name, health, attkPower) {
    this.name = name;
    this.health = health;
    this.attkPower = attkPower;
}

// Get player's name.
var player = readlineSync.question('May I have your name? ');
console.log("Hello! " + player + " run for your life...");

const badGuys = ['Doom rat', 'Cyborg', 'Hell hound', 'Goon'];
const treasure = ['medKit', 'Security armor', 'Berserk pack', 'Health potion'];
var prize = [];

let pickUp = treasure[Math.floor(Math.random() * treasure.length)];

// Initialize player.
var player = new Player(player, 40, 0);
const options = ['Walk', 'Exit', 'Print'];

function game() {
    const badGuy = badGuys[Math.floor(Math.random() * badGuys.length)];
    let badGuyHealth = 40;
    let badGuyPower = 0;
    
    const userAction = readlineSync.keyIn("'w' to walk\n'e' to exit\n'p' to print\n"
    + "Haha! What are you going to do now? ", {limit: '$<e,p,w>'});
        
    if (userAction == 'e') {
        return player.health = 0;
    } else if (userAction == 'p') {
        console.log(player.name + ': \n' + player.health + '\nTreasure: ' + pickUp);
    } else if (userAction == 'w') {
        let key = Math.random();
        if (key <= .3) {
            console.log("Walking...");
        } else if (key >= .3) {
            console.log(badGuy + " showed up. ");
            while (badGuyHealth > 0 && player.health > 0) {
                const userChoice = readlineSync
                    .keyIn("What are you going to do now? Enter 'r' to run or 'a' to attack: ",
                    {limit: '$<r,a>'});

                if (userChoice == 'r') { // Try to run. 
                    const run = Math.random();
                    if (run < .5) {
                        let badGuyPower = getAttackPower();
                        player.health -= badGuyPower;
                        console.log("Befor you can run away " + badGuy
                            + ' attacks you with ' + badGuyPower);
                    } else {
                        console.log("Luckily! you got away alive this time...");
                    }
                } else if (userChoice == 'a') { // Combat situation.
                    player.attkPower = getAttackPower();
                    badGuyHealth -= player.attkPower;
                    console.log('You attacked ' + badGuy + ' with ' 
                    + player.attkPower + ' attack power');

                    badGuyPower = getAttackPower();
                    player.health -= badGuyPower;
                    console.log(badGuy + ' attacked with ' + badGuyPower + ' attack power');

                    if (badGuyHealth <= 0) {
                        console.log('You killed ' + badGuy + '\n' +
                        badGuy + ' dropped ' + pickUp + ' congrats!...');
                        let loot = Math.random();
                        if (loot <= .3) {
                            prize.push(pickUp);
                        }
                    } else if (player.health <= 0) {
                        console.log(player.name + ' got killed by ' + badGuy
                            + '. Better luck next time.');
                    }
                }
            }
        }
    }
}

// Have a random attack each time.
function getAttackPower() {
    return Math.floor(Math.random() * (5 - 4 + 3) + 5);
}

while (player.health > 0) {
    userRestore = function () {
        userActive = true;
        player.health = 40;
    };
    userRestore();
    game();
}