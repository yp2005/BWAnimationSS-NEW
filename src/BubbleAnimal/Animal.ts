class Animal extends Laya.Sprite {
    public image:Laya.Image;
    public brokenBubble:Laya.Image;
    public num: number;
    public isBroken:boolean;

    constructor(num:number = 1) {
        super(); 
        this.num = num;
        this.isBroken = false;

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
    }

    public click(){
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

}
