class Menu extends Phaser.Scene {
    constructor(){
        super("menuScene"); 
    }




    preload(){

        this.load.image("nightroad", "./Assets/NightRoadTS.png");
    }

    create(){

        this.backdrop= this.add.tileSprite(0, 0, 1500, 1700, "nightroad");

        this.add.text(450, 480, "A Heart-Shaped Box", {fontFamily: "Times New Roman", fontSize: "52px", color: "#FF0000"}).setOrigin(0.5);
    }

    update(){
        this.backdrop.tilePositionX -= 6;

    }
}