// 砸蛋游戏
import Stage = Laya.Stage;
import WebGL   = Laya.WebGL;
import Sprite = Laya.Sprite;
class RunRaceMain extends ui.RunRaceUI {
    public speed: number = 50; 
    public isGo: boolean = false;

    constructor() {
        super(); 
        this.restart();
        for(var i = 1;i<6;i++){
            let btn1 = this.btnbox.getChildByName("btn-player"+i) as Laya.Image;
            btn1.on(Laya.Event.CLICK,this,this.btnCLick,[i]);
        }

        this.replayon.on(Laya.Event.CLICK,this,this.restart);
    }

    // 游戏开始
    private restart() {
        this.init();
        this.bg.on(Laya.Event.CLICK,this,this.start);
    }

    public init(){
        this.speed = 50;
        this.isGo = false;
        this.readygo.visible = false;
        this.winner.visible = false;
        Laya.timer.clear(this,this.onLoop);

        for(var i = 1;i<6;i++){
            let player = this.getChildByName("player"+i) as Laya.Image;
            player.x = 0;

            let btn1 = this.btnbox.getChildByName("btn-player"+i) as Laya.Image;
            let btn2 = this.btnbox.getChildByName("btn2-player"+i) as Laya.Image;
            btn1.visible = false;
            btn2.visible = true;
        }

        this.replaydown.visible = true;
        this.replayon.visible = false;
    }

    public start(){
        this.readygo.visible = true;
        this.bg.off(Laya.Event.CLICK,this,this.restart);
        Laya.SoundManager.playMusic("res/audio/19-readygo.wav",1);
        Laya.timer.once(2000,this,function(){
            this.readygo.visible = false;
            this.resetLoop();
            this.isGo = true;

            for(var i = 1;i<6;i++){
                let btn1 = this.btnbox.getChildByName("btn-player"+i) as Laya.Image;
                let btn2 = this.btnbox.getChildByName("btn2-player"+i) as Laya.Image;
                btn1.visible = true;
                btn2.visible = false;
            }
        });

        this.replaydown.visible = true;
        this.replayon.visible = false;
    }

    public onLoop(){
        for(var i = 1;i<7;i++){
            let fans = this.getChildByName("fans"+i) as Laya.Image;
            let skin = fans.skin;
            if(skin.indexOf("1.png") != -1){
                skin = skin.replace("1.png","2.png");
            }else{
                skin = skin.replace("2.png","1.png");
            }
            fans.skin = skin;
        }
    }

    public btnCLick(num:number){
        // if(this.isGo)

        Laya.SoundManager.playMusic("res/audio/19-run.mp3",1);
        let btn1 = this.btnbox.getChildByName("btn-player"+num) as Laya.Image;
        let btn2 = this.btnbox.getChildByName("btn2-player"+num) as Laya.Image;
        let player = this.getChildByName("player"+num) as Laya.Image;
            btn1.visible = false;
            btn2.visible = true;
            player.x = player.x+90;
            // console.log(player.x+"--"+(player.x > 850));
            if(player.x > 850){
                this.winner.y = player.y-20;
                this.winner.visible = true;
                this.wingame();
                return;
            }

        Laya.timer.once(100,this,function(){
            btn1.visible = true;
            btn2.visible = false;
        });
    }

    public wingame(){
        this.speed = 25;
        this.resetLoop();
        Laya.SoundManager.playMusic("res/audio/19-fans.mp3",1);

        for(var i = 1;i<6;i++){
            let player = this.getChildByName("player"+i) as Laya.Image;
            // let winner = player.getChildByName("winner") as Laya.Image;
            //     winner.visible = false;

            let btn1 = this.btnbox.getChildByName("btn-player"+i) as Laya.Image;
            let btn2 = this.btnbox.getChildByName("btn2-player"+i) as Laya.Image;
            btn1.visible = false;
            btn2.visible = true;
        }

        this.replaydown.visible = false;
        this.replayon.visible = true;
    }

    public resetLoop(){
        Laya.timer.clear(this,this.onLoop);
        Laya.timer.frameLoop(this.speed,this,this.onLoop);
    }
}
