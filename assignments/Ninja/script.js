class Ninja {
    constructor(name) {
        this.name = name;
        this.health = 90;
        this.speed = 3;
        this.strength = 3;
    }

    sayName() {
        console.log(this.name);
    }

    showStats() {
        console.log("Name: ", this.name)
        console.log("HP: ", this.health)
        console.log("Speed: ", this.speed)
        console.log("Strength: ", this.strength)
    }
    drinkSake() {
        this.health += 10;
    }
}


const ninja1 = new Ninja("Austin");
ninja1.sayName();
ninja1.drinkSake();
ninja1.showStats();
