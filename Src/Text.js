class Text extends Phaser.Scene {
    constructor(){
        super("textScene"); 
    }

   

    create(){

        this.text= this.add.text(centerX, 100, "Story Text", {fontFamily: "Times New Roman", fontSize: "32px", color: "#FFFFFF"}).setOrigin(0.5);
       
        this.add.text(centerX, 650, "Press any key to continue", {fontFamily: "Times New Roman", fontSize: "28px", color: "#FF0000"}).setOrigin(0.5);

        this.bgm= this.sound.add("moan");

        let musicConfig= {
            mute: false,
            volume: 0.4,
            rate: 1,
            detune: 0,
            seek: 0,
            loop: true,
            delay: 0
        }
        
        this.bgm.play(musicConfig);
        
        this.input.keyboard.on('keydown', () => {
            this.bgm.stop();
            this.scene.start("playScene");  
        }, this);
    }

   
}
