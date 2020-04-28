class Play extends Phaser.Scene {
    constructor(){
        super("playScene"); 
    }

    preload(){
        this.load.image("nightroad", "./Assets/NightRoad.png");
        this.load.image("heart", "./Assets/Hbox.png");
        this.load.image("craddock", "./Assets/Craddock.png");
    }

    create(){

        this.road= this.add.tileSprite(0, 0, 1500, 1700, "nightroad");

        degree= 0;


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

        this.jude = this.physics.add.sprite(game.config.width/2, game.config.height/2, 'jude_atlas', 'Jude1');

        this.obstacle = this.add.sprite(game.config.width, game.config.height/2 + 100, 'heart');

        this.instructions= this.add.text(centerX, 150, "Press Space to Jump", {fontFamily: "Times New Roman", fontSize: "32px", color: "#FF0000"}).setOrigin(0.5);

        this.moon = this.add.image(660, 30, "moon").setScale(0.5, 0.5);

        this.enemy = this.add.image(game.config.width/5, game.config.height/2, 'craddock').setScale(0.5, 0.5);

        this.run = this.anims.create({ 
            key: 'run', 
            frames: this.anims.generateFrameNames('jude_atlas', {      
                prefix: 'Jude',
                start: 1,
                end: 3,
                suffix: '',
                zeroPad: 4 
            }), 
            frameRate: 30,
            repeat: -1 
        });
        
        this.delayText= this.add.text(0, 100);  
        this.difficultyTimer = this.time.addEvent({
            delay: 1000,
            callback: this.degreeBump,
            callbackScope: this,
            loop: true
        });


    }

    update(){

        this.road.tilePositionX +=6;

        //to do: update animation so that it plays every frame
        //this.run.anims.play('run', true);

        this.delayText.setText('Time: ' + Math.floor(degree) + "s");



        // heart movement / resetting
        this.num = Math.floor(Math.random() * Math.floor(150));

        this.obstacle.x -= 6;

        if (this.obstacle.x <= 0) {
            if(this.num == 10){
                this.obstacle.x = game.config.width;
           }
        }
    }

    degreeBump(){
        degree++;
    }
}
