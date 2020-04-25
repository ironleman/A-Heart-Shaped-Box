class Load extends Phaser.Scene {
    constructor(){
        super("loadScene"); 
    }

    preload(){
        this.load.audio("death", "./Assets/416838__alineaudio__grunt2-death-pain.mp3");
        this.load.audio("ominous", "./Assets/508622__timbre__ominous-remix-of-excerpt-of-dirktjantele-s-freesound-508186.mp3");
        this.load.audio("moan", "./Assets/413150__inspectorj__moaning-of-the-dead-a.mp3");
        this.load.audio("guitar", "./Assets/434953__mr-guitarra__guitar-riff.mp3");
        this.load.video("cars", "./Assets/Cars on the Road Night time lapse - No Copyright Video - 4K [720p]_Trim.mp4", "loadeddata", false, true);
        this.load.atlas("jude_atlas", "./Assets/judesheet.png", "./Assets/jude.json");
    }

    create(){

        this.bgm= this.sound.add("guitar");

       

        let musicConfig= {
            mute: false,
            volume: 1,
            rate: 1,
            detune: 0,
            seek: 0,
            loop: true,
            delay: 0
        }
        
        this.bgm.play(musicConfig);

        this.add.video(centerX, centerY, "cars");
        this.add.text(140, 310, "SJD L.L.C.", {fontFamily: "Broadway" , fontSize: "100px", color: "#FF0000"});

        this.clock= this.time.delayedCall(15000, () => {
           
            this.scene.start("menuScene");
            this.bgm.stop();
        }, null, this);
        



    }
}