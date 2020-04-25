class Play extends Phaser.Scene {
    constructor(){
        super("playScene"); 
    }

    preload(){
        this.load.image("nightroad", "./Assets/NightRoad.png");

    }

    create(){

        this.road= this.add.tileSprite(0, 0, 1500, 1700, "nightroad");


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

        //this.jude = this.add.sprite(120, game.config.height/2, 'jude_atlas').setScale(SCALE);


    }

    update(){

        this.road.tilePositionX -=6;

    }


    
}