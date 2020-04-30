class GameOver extends Phaser.Scene{

    constructor(){
        super("endScene"); 
    }

create(){

    if(localStorage.getItem("hiscore") !=null){
        let storedScore= parseInt(localStorage.getItem("hiscore"));

        if(degree > storedScore){
            localStorage.setItem("hiscore", degree.toString());
            highScore= degree;
            newHighScore= true;

        }

        else{
            highScore= parseInt(localStorage.getItem("hiscore"));
            newHighScore= false;
        }

    }
    else{
        highScore= degree;
        localStorage.setItem("hiscore", highScore.toString());
        newHighScore= true;
    }

    if(newHighScore){
        this.add.text(centerX, 70, 'New Best!', { fontFamily: 'Times New Roman', fontSize: '32px', color: '#FF0000' }).setOrigin(0.5);
    }

    this.add.text(centerX, 380, 'You avoided Craddock for ' + degree + 's', { fontFamily: 'Times New Roman', fontSize: '48px', color: '#FF0000' }).setOrigin(0.5);
    this.add.text(centerX, 500 , 'Your Best: ' + highScore, { fontFamily: 'Times New Roman', fontSize: '32px', color: '#FF0000' }).setOrigin(0.5);
    this.add.text(centerX, 650, 'Press Space to Restart', { fontFamily: 'Times New Roman', fontSize: '24px', color: '#FF0000' }).setOrigin(0.5);

    this.add.image(centerX, 132, "cradface");
    this.add.image(140, 500, "heart");
    this.add.image(640, 500, "heart");

    let space= this.input.keyboard.addKey("SPACE");
        space.on('down', () => {

            this.scene.start("playScene");
        });
    

}

}