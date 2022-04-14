const tiles = []
const plants = {
    "carrot": [
        "./seeds.png",
        "./carrot.png"
    ],
    "radish": [
        "./seeds.png",
        "./radish.png"
    ],
    "wheat": [
        "./seeds.png",
        "./wheat.png"
    ],
    "cabbage": [
        "./seeds.png",
        "./cabbage.png"
    ],
    "red-flower": [
        "./seeds.png",
        "./red-flower.png"
    ],
    "yellow-flower": [
        "./seeds.png",
        "./yellow-flower.png"
    ],
    "pink-flower": [
        "./seeds.png",
        "./pink-flower.png"
    ]
}
let plantsGrown = 0;
document.querySelectorAll(".tile").forEach((tile, i) => {
    tiles.push({element: tile, currentPlant: "", stage: 0, harvestable: false})
    tile.addEventListener("click", () => {
        console.log(tiles[i])
        if (tiles[i].currentPlant) {
            if(tiles[i].harvestable) {
                tiles[i].currentPlant = false;
                tiles[i].harvestable = false;
                tiles[i].stage = 0;
                console.log(tile.firstChild)
                tile.removeChild(tile.firstChild)
            }
            return
        }
        const plant = document.createElement("img")
        const plantList = Object.keys(plants)
        const plantIndex = Math.floor(Math.random() * plantList.length)
        const chosenPlant = plantList[plantIndex]
        plant.src = plants[chosenPlant][0]
        tiles[i].currentPlant = plants[chosenPlant]
        tile.appendChild(plant)
    })  
    setInterval(() => {
        const tile = tiles[i]
            if(tile.currentPlant) {
                if(tile.currentPlant[tile.stage + 1]) {
                    console.log(tile.currentPlant)
                    tile.element.childNodes[0].src = tile.currentPlant[tile.stage + 1]
                    tile.stage++
                }
                if(!tile.currentPlant[tile.stage + 1] && !tile.harvestable) {
                    plantsGrown++
                    tile.harvestable = true;
                    document.querySelector(".counter").innerHTML = `Plants grown : ${plantsGrown}`
                }
            }

    }, 20000 * Math.random())
})

