// 泡泡游戏
import Stage = Laya.Stage;
import WebGL   = Laya.WebGL;
import Sprite = Laya.Sprite;
class BubbleAnimalMain extends ui.BubbleAnimalUI {
    public clickNum: number = 0; //泡泡爆了数量
    public goneNum: number = 0; //动物离开的数量
    private positionArr: Array<any>; //动物地上位置数组

    constructor() {
        super(); 
        // this.positionArr = [
        //     {x:42,y:421},
        //     {x:216,y:459},
        //     {x:419,y:498},
        //     {x:602,y:495},
        //     {x:721,y:382}
        // ]
        this.positionArr = [
            {x:82,y:171},
            {x:441,y:132},
            {x:259,y:238},
            {x:682,y:205}
        ]
        this.restart();

        this.replayon.on(Laya.Event.CLICK,this,this.restart);
    }

    // 游戏重新开始
    private restart() {
        this.init();
        for(var i = 1;i<5;i++){
            let btn1 = this.getChildByName("ani"+i+"-2") as Laya.Image;
            btn1.on(Laya.Event.CLICK,this,this.btnCLick,[i]);
        }
    }

    //初始化
    public init(){
        this.clickNum = 0;
        this.goneNum = 0;
        let ranArr1 = this.getRandomArr(4);
        let ranArr2 = this.getRandomArr(4);

        //生成10个泡泡
        for(var i = 1;i<5;i++){
            let ani = new Animal(ranArr1[i-1]);
            ani.x = 150+(i-1)*150;
            ani.y = 500;
            ani.image.on(Laya.Event.CLICK,this,this.click,[ani]);
            ani.shake1();
            this.addChild(ani);

            let ani2= new Animal(ranArr2[i-1]);
            ani2.x = 150+(i-1)*150;
            ani2.y = 650;
            ani2.image.on(Laya.Event.CLICK,this,this.click,[ani2]);
            ani2.shake1();
            this.addChild(ani2);

            let btn2 = this.getChildByName("ani"+i+"-2") as Laya.Image;
            let btn1 = this.getChildByName("ani"+i+"-1") as Laya.Image;
            btn1.visible = false;
            btn2.visible = false;
            btn2.scale(1,1);
            btn2.pos(this.positionArr[i-1].x,this.positionArr[i-1].y);
        }

        //鹦鹉归位
        this.polly.scale(1,1);
        this.polly.pos(936,52);
        this.polly.visible = true;

        this.replaydown.visible = true;
        this.replayon.visible = false;
    }

    //泡泡爆破
    public click(ani:Animal){
        this.clickNum++;
        ani.image.off(Laya.Event.CLICK,this,this.click);
        Laya.SoundManager.playMusic("res/audio/21-anidown.mp3",1);
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

    //更新地上动物
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

    //地上动物离开
    public btnCLick(num:number){
        if(this.clickNum < 8) return;
        let btn1 = this.getChildByName("ani"+num+"-2") as Laya.Image;
            btn1.off(Laya.Event.CLICK,this,this.btnCLick);
        Laya.SoundManager.playMusic("res/audio/21-aniout.mp3",1);
        Laya.Tween.to(btn1,{x:500,y:250,scaleX:.3,scaleY:.3},2000,Laya.Ease.linearIn,null,100);
        
        Laya.timer.once(2000,this,function(){
            this.goneNum++;
            btn1.visible =false;
            if(this.goneNum > 3){
                this.wingame();
            }
        });
    }

    //游戏结束
    public wingame(){
        Laya.SoundManager.playMusic("res/audio/21-aniout.mp3",1);
        // this.polly.visible = false;
        Laya.timer.frameLoop(5,this,this.onLoop);
        Laya.Tween.to(this.polly,{x:430,y:50,scaleX:.2,scaleY:.2},2000,Laya.Ease.linearIn,null,100);
        
        Laya.timer.once(2000,this,function(){
            this.polly.visible =false;
            Laya.timer.clear(this,this.onLoop);
            this.replaydown.visible = false;
            this.replayon.visible = true;
        });

    }

    //鹦鹉飞走动画loop
    public onLoop(){
        let skin = (this.polly.skin == "BubbleAnimal/polly2.png") ? "BubbleAnimal/polly3.png" : "BubbleAnimal/polly2.png";
        this.polly.skin = skin;
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
