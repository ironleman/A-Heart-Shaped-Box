class Load extends Phaser.Scene {
    constructor(){
        super("loadScene"); 
    }

    preload(){
        this.load.video("timelapse", "Timelapse.mp4", "loadeddata", false, true);

    }

    create(){

        this.vid= this.add.video(centerX, centerY, "timelapse");
        this.vid.play(true);
        //this.scene.start("menuScene");



    }
}