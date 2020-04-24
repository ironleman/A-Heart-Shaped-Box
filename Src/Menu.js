class Menu extends Phaser.Scene {
    constructor(){
        super("menuScene"); 
    }




    preload(){

        this.load.image("nightroad", "./Assets/NightRoadTS.png");
        this.load.image("moon", "./Assets/Moon.png");
        
    }

    create(){

        this.backdrop= this.add.tileSprite(0, 0, 1500, 1700, "nightroad");

        this.add.image(660, 100, "moon");

        this.add.text(450, 480, "A Heart-Shaped Box", {fontFamily: "Times New Roman", fontSize: "52px", color: "#FF0000"}).setOrigin(0.5);

        this.add.text(centerX, 350, "Press Space to Continue", {fontFamily: "Times New Roman", fontSize: "32px", color: "#FF0000"}).setOrigin(0.5);



        let cursors= this.input.keyboard.createCursorKeys();
        let space= this.input.keyboard.addKey("SPACE");
        space.on('down', () => {
            this.scene.start("textScene");
        });
        
        

      
    }

    update(){
        this.backdrop.tilePositionX -= 6;

    }
}