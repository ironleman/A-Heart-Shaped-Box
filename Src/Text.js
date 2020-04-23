class Text extends Phaser.Scene {
    constructor(){
        super("textScene"); 
    }



    create(){

        this.add.text(centerX, centerY, "Hello Jude", {fontFamily: "Times New Roman", fontSize: "32px", color: "#FFFFFF"}).setOrigin(0.5);

        this.input.keyboard.on('keydown', () => {
            this.scene.start("playScene");  
        }, this);
        
        this.add.text(centerX, centerY, "Press any key to continue", {fontFamily: "Times New Roman", fontSize: "32px", color: "#FFFFFF"}).setOrigin(0.5);
    }
}
