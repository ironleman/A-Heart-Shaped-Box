class GameOver extends Phaser.Scene{

create(){

    if(localStorage.getItem("hiscore") !=null){
        let storedScore= parseInt(localStorage.getItem('hiscore'));

        if(degree > storedScore){
            localStorage.setItem('hiscore', degree.toString());
            highScore= degree;
            newHighScore= true;

        }

        else{
            highScore= parseInt(localStorage.getItem('hiscore'));
            newHighScore= false;
        }

    }
    else{
        highScore= degree;
        localStorage.setItem('hiscore', highScore.toString());
        newHighScore= true;
    }

    if(newHighScore){
        this.add.text(centerX, centerY - textSpacer, 'New Best!', { fontFamily: 'Times New Roman', fontSize: '32px', color: '#FF0000' }).setOrigin(0.5);
    }

    let space= this.input.keyboard.addKey("SPACE");
        space.on('down', () => {

            this.scene.start("playScene");
        });
    

}

update(){

}











}