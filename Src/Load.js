class Load extends Phaser.Scene {
    constructor(){
        super("loadScene"); 
    }

    preload(){
        this.load.audio("death", "./Assets/416838__alineaudio__grunt2-death-pain.mp3");
        this.load.audio("ominous", "./Assets/508622__timbre__ominous-remix-of-excerpt-of-dirktjantele-s-freesound-508186.mp3");
        this.load.audio("moan", "./Assets/413150__inspectorj__moaning-of-the-dead-a.mp3");
        this.load.audio("guitar", "./Assets/434953__mr-guitarra__guitar-riff.mp3");
        this.load.video();
    }

    create(){
        
        //this.scene.start("menuScene");



    }
}