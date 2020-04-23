class Play extends Phaser.Scene {
    constructor(){
        super("playScene"); 
    }

    preload(){
        this.load.image("nightroad", "./Assets/NightRoad.png");

    }

    create(){

        this.road= this.add.tileSprite(0, 0, 1500, 1700, "nightroad");


    }

    update(){

        this.road.tilePositionX -=6;

    }


    
}