class Text extends Phaser.Scene {
    constructor(){
        super("textScene"); 
    }



    create(){

        this.add.text(centerX, 250, "Story text", {fontFamily: "Times New Roman", fontSize: "32px", color: "#FFFFFF"}).setOrigin(0.5);
        
        this.add.text(centerX, 650, "Press any key to continue", {fontFamily: "Times New Roman", fontSize: "28px", color: "#FF0000"}).setOrigin(0.5);

        this.input.keyboard.on('keydown', () => {
            this.scene.start("playScene");  
        }, this);
    }
}
