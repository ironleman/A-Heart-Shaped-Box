class Play extends Phaser.Scene {
    constructor(){
        super("playScene"); 
    }

    preload(){
        this.load.image("road", "./Assets/NightRoad.png");

    }

    create(){

        this.road= this.add.tileSprite(0, 0, 1500, 1700, "road");


        this.bgm= this.sound.add("ominous");

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

    }

    update(){

        this.road.tilePositionX -=6;

    }


    
}