// 砸蛋游戏
import Stage = Laya.Stage;
import WebGL   = Laya.WebGL;
import Sprite = Laya.Sprite;
class BubbleAnimalMain extends ui.BubbleAnimalUI {
    public goneNum: number = 0;

    constructor() {
        super(); 
        this.restart();
        for(var i = 1;i<6;i++){
            let btn1 = this.getChildByName("ani"+i+"-2") as Laya.Image;
            btn1.on(Laya.Event.CLICK,this,this.btnCLick,[i]);
        }

        this.replayon.on(Laya.Event.CLICK,this,this.restart);
    }

    // 游戏开始
    private restart() {
        this.init();
    }

    public init(){
        this.goneNum = 0;
        let ranArr1 = this.getRandomArr(5);
        let ranArr2 = this.getRandomArr(5);

        for(var i = 1;i<6;i++){
            let ani = new Animal(ranArr1[i-1]);
            ani.x = 100+(i-1)*139;
            ani.y = 100;
            ani.image.on(Laya.Event.CLICK,this,this.click,[ani]);
            this.addChild(ani);

            let ani2= new Animal(ranArr2[i-1]);
            ani2.x = 100+(i-1)*139;
            ani2.y = 220;
            ani2.image.on(Laya.Event.CLICK,this,this.click,[ani2]);
            this.addChild(ani2);

            let btn2 = this.getChildByName("ani"+i+"-2") as Laya.Image;
            let btn1 = this.getChildByName("ani"+i+"-1") as Laya.Image;
            btn1.visible = false;
            btn2.visible = false;
        }

        this.replaydown.visible = true;
        this.replayon.visible = false;
    }

    public click(ani:Animal){
        ani.image.skin = "BubbleAnimal/ani"+ani.num+"-in1.png";
        ani.brokenBubble.visible = true;
        Laya.timer.once(200,this,function(){
            ani.brokenBubble.visible = false;
            Laya.timer.once(300,this,function(){
                ani.image.visible = false;
                ani.isBroken = true;
                this.update(ani.num);
            });
        });
    }

    public update(num:number){
        let ani = this.getChildByName("ani"+num+"-1") as Laya.Image;
        if(ani.visible){
            let ani2 = this.getChildByName("ani"+num+"-2") as Laya.Image;
            ani2.visible = true;
            ani.visible = false;
        }else{
            ani.visible = true;
        }
    }

    public btnCLick(num:number){
        Laya.SoundManager.playMusic("res/audio/21-aniout.mp3",1);
        let btn1 = this.getChildByName("ani"+num+"-2") as Laya.Image;
        btn1.visible =false;
        this.goneNum++;
        if(this.goneNum > 4){
            Laya.timer.once(200,this,function(){
                this.wingame();
            });
        }
    }

    public wingame(){
        Laya.SoundManager.playMusic("res/audio/21-pollyfly.mp3",1);
        this.polly.visible = false;

        this.replaydown.visible = false;
        this.replayon.visible = true;
    }

    // 返回随机数组
    public getRandomArr(length:number = 0){
        let arr = [];
        for(var i = 0;i<length;i++){
            arr.push(i+1);
        }
        return arr.sort((a,b)=>{
            return Math.random()>.5 ? -1 : 1
        });
    }
}
