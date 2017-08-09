function bumpCounter() {
    let counter = 0;

    function addBump() {
        counter++
    }

    function getBumps() {
        return counter
    }

    return {
        addBump,
        getBumps
    };
}

function createAnimal(animalType) {
    return (deadlyDevice) => {
        let animal = {}
        animal.animalType = animalType
        animal.deadlyDevice = deadlyDevice
        return animal
    }
}

let sharkCreator = createAnimal('Shark')
let sharkWithFrickinLaserbeam = sharkCreator('Laserbeam')
let sharkWithFrickinCannon = sharkCreator('Cannon')
