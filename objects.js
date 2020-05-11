
class Plant {
    constructor(type, isPerennial, leafDescription,
        leafColor, flowerColor, flowerDescription,
        gallonsWaterPerWeek, amountOfSunNeeded) {
            this.type = type;
            this.isPerennial = isPerennial;
            this.leafDescription = leafDescription;
            this.leafColor = leafColor;
            this.flowerColor = flowerColor;
            this.flowerDescription = flowerDescription;
            this.gallonsWaterPerWeek = gallonsWaterPerWeek;
            this.amountOfSunNeeded = amountOfSunNeeded;
        }
    describe() {
        return `A ${this.type} which has a ${this.flowerColor} bloom, which appears as ${this.flowerDescription}. It's leaves look ${this.leafDescription} and are ${this.leafColor}. `
    }

    changeColor() {
        let newColors = ["Amber", "Crimson", "Aqua", "Cerulean Blue", "Flamingo", "Gun Smoke", "Jade", "Merigold", "Mustard", "Periwinkle"];
        // ~~ Magic Genetic Engineering ~~
        let randIndex = Math.floor(Math.random() * newColors.length);
    
        if (this.isFlawed) {
            this.flowerDescription = "wilted sad buds with no pedals.";
            this.flowerColor = null;
        } else {
            this.flowerColor = newColors[randIndex];
        }
    
        let randomChance = Math.floor(Math.random() * 3);
        if (randomChance < 1) {
            this.isFlawed = true;
        }
    }
    
    clone() {
        let clone = new Plant(this.type,
            this.isPerennial,
            this.leafDescription,
            this.leafColor,
            this.flowerColor,
            this.flowerDescription,
            this.gallonsWaterPerWeek,
            this.amountOfSunNeeded);
        this.changeColor();
        return clone;
    }

}

class Garden {
    constructor(name) {
        this.name = name;
        this.plants = [];
    }
    describe() {
        let description = "";
    
        let plantsLength = this.plants.length;
    
        description = `The ${this.name} has ${plantsLength} types of plants in it. `;
    
        for (let flower in this.plants) {
            let plant = `It has a ${this.plants[flower].type}. This plant is a ${this.plants[flower].describe()}`;
    
            description = description + plant;
        }
    
        return description;
    }
    addPlant(plant) {
        this.plants.push(plant);
    }
}

class Estate {
    constructor() {
        this.roseArbor = new Garden("Rose Arbor");
        this.perennialGarden = new Garden("Perennial Garden");
        this.slopePlanters = new Garden("Slope Planters");
    };
    addPlant(plant) {
        if (plant.type === "rose") {
            this.roseArbor.addPlant(plant);
        } else if (plant.type === "perennial") {
            this.perennialGarden.addPlant(plant);
        } else {
            this.slopePlanters.addPlant(plant);
        }
    }
    describe() {
        let estateLength = Object.keys(this).length;
    
        let description = `The estate has ${estateLength} gardens. `
    
        for (let gardenName in this) {
            description += this[gardenName].describe();
        }
        console.log(description);
    }
    calculateWaterUsagePerWeek() {
        let numGallons = 0;
    
        for (let gardenName in this) {

            for (let plant of this[gardenName].plants) {

                let addWater = plant.gallonsWaterPerWeek;

                numGallons += addWater;

                numGallons = numGallons;

            }
        }
        console.log(numGallons);
    }
    cloneAllTheRosesAndChangeTheirColors() {
        let cloneArray = [];
    
        for (let gardenName in this) {

            for (let plant of this[gardenName].plants) {

                if (plant.type === "rose" && plant.isFlawed !== true) {
                    let newRose = plant.clone();
                    cloneArray.push(newRose);
                }

            }

            for (let rose in cloneArray) {
                this[gardenName].addPlant(rose);
            }
    
        }
    
    }

}

/* TEST CODE */

let myEstate = new Estate();
 
let firstPlant = new Plant("rose", true, "rounded with a point", "green", "red", "concentric circles of pedals", 0.8, 4);
myEstate.addPlant(firstPlant);
 
let secondPlant = new Plant("orchid", true, "long and wide with a point at the end", "green", "fuscia", "pedals surrounding a central mouth", 1.2, 2);
myEstate.addPlant(secondPlant);
 
let thirdPlant = new Plant("marigold", false, "thin and jagged along branches", "green", "yellow and orange", "rounded pedals in groups of five with a darker orange center", 0.8, 4);
myEstate.addPlant(thirdPlant);
 
myEstate.describe(); // This should print the whole description of the estate.
 
myEstate.calculateWaterUsagePerWeek(); // This should print 2.8
 
myEstate.cloneAllTheRosesAndChangeTheirColors(); // This should clone the rose and make a second one.
console.log(myEstate.roseArbor.plants.length == 2);