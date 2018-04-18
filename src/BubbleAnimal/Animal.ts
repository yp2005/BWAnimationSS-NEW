class Animal extends Laya.Sprite {
    public image:Laya.Image;
    public brokenBubble:Laya.Image;
    public num: number;
    public isBroken:boolean;
    public clicked:boolean;
    public initY:number;
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

    // 晃动
    public shake1() {
        if(!this.clicked) {
            this.initY = this.y;
            this.curAni = Laya.Tween.to(this, {y: this.initY - 10}, 1000, null, Laya.Handler.create(this, this.shake2));
        }
    }

    private shake2() {
        if(!this.clicked) {
            this.curAni = Laya.Tween.to(this, {y: this.initY}, 1000, null, Laya.Handler.create(this, this.shake1));
        }
    }
}
