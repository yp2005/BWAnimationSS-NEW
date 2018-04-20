// 泡泡游戏泡泡类
class Animal extends Laya.Sprite {
    public image:Laya.Image; //主图
    public brokenBubble:Laya.Image; //泡泡爆破瞬间的图
    public num: number; //序号
    public isBroken:boolean; //已爆
    public clicked:boolean; //已点击
    public initX:number; //原来的x轴坐标
    public initY:number; //原来的y轴坐标
    private curAni: Laya.Tween; // 当前正在播放的动画

    constructor(num:number = 1) {
        super(); 
        this.num = num;
        this.isBroken = false;
        this.clicked = false;

        this.brokenBubble = new Laya.Image("BubbleAnimal/bubble2.png");
        this.brokenBubble.centerX = 0;
        this.brokenBubble.centerY = 0;
        this.brokenBubble.zOrder = 1;
        this.brokenBubble.visible = false;

        this.image = new Laya.Image("BubbleAnimal/ani"+num+"-in2.png");
        this.image.centerX = 0;
        this.image.centerY = 0;

        // this.image.on(Laya.Event.CLICK,this,this.click);

        this.addChild(this.brokenBubble);
        this.addChild(this.image);
        // this.shake1();
    }

    // 被点击
    public click(){
        this.clicked = true;
        if(this.curAni){
            this.curAni.clear();
        }
        this.image.skin = "BubbleAnimal/ani"+this.num+"-in1.png";
        this.brokenBubble.visible = true;
        Laya.timer.once(200,this,function(){
            this.brokenBubble.visible = false;
            Laya.timer.once(300,this,function(){
                this.image.visible = false;
                this.isBroken = true;
            });
        });
    }

    // 飘来
    public shake1() {
        if(!this.clicked) {
            this.initX = this.x;
            this.initY = this.y;
            let _x = (Math.random()-0.5)*20;
            let _y = (Math.random()-0.5)*20;
            this.curAni = Laya.Tween.to(this, {x:this.initX + _x,y: this.initY + _y}, 1000, null, Laya.Handler.create(this, this.shake2));
        }
    }

    // 飘去
    private shake2() {
        if(!this.clicked) {
            let _x = (Math.random()-0.5)*20;
            let _y = (Math.random()-0.5)*20;
            this.curAni = Laya.Tween.to(this, {x:this.initX + _x,y: this.initY + _y}, 1000, null, Laya.Handler.create(this, this.shake1));
        }
    }
}
