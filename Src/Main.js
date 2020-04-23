//Configure game to browser and include menu and play core scenes
let config = {

    type: Phaser.CANVAS,
    width: 740,
    height: 700,
    scene: [Menu],
};

//apply configurations to new Phaser Game
let game = new Phaser.Game(config);
