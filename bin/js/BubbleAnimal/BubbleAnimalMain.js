var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// 泡泡游戏
var Stage = Laya.Stage;
var WebGL = Laya.WebGL;
var Sprite = Laya.Sprite;
var BubbleAnimalMain = /** @class */ (function (_super) {
    __extends(BubbleAnimalMain, _super);
    function BubbleAnimalMain() {
        var _this = _super.call(this) || this;
        _this.clickNum = 0; //泡泡爆了数量
        _this.goneNum = 0; //动物离开的数量
        _this.positionArr = [
            { x: 42, y: 421 },
            { x: 216, y: 459 },
            { x: 419, y: 498 },
            { x: 602, y: 495 },
            { x: 721, y: 382 }
        ];
        _this.restart();
        for (var i = 1; i < 6; i++) {
            var btn1 = _this.getChildByName("ani" + i + "-2");
            btn1.on(Laya.Event.CLICK, _this, _this.btnCLick, [i]);
        }
        _this.replayon.on(Laya.Event.CLICK, _this, _this.restart);
        return _this;
    }
    // 游戏重新开始
    BubbleAnimalMain.prototype.restart = function () {
        this.init();
    };
    //初始化
    BubbleAnimalMain.prototype.init = function () {
        this.clickNum = 0;
        this.goneNum = 0;
        var ranArr1 = this.getRandomArr(5);
        var ranArr2 = this.getRandomArr(5);
        //生成10个泡泡
        for (var i = 1; i < 6; i++) {
            var ani = new Animal(ranArr1[i - 1]);
            ani.x = 150 + (i - 1) * 150;
            ani.y = 150;
            ani.image.on(Laya.Event.CLICK, this, this.click, [ani]);
            ani.shake1();
            this.addChild(ani);
            var ani2 = new Animal(ranArr2[i - 1]);
            ani2.x = 150 + (i - 1) * 150;
            ani2.y = 300;
            ani2.image.on(Laya.Event.CLICK, this, this.click, [ani2]);
            ani2.shake1();
            this.addChild(ani2);
            var btn2 = this.getChildByName("ani" + i + "-2");
            var btn1 = this.getChildByName("ani" + i + "-1");
            btn1.visible = false;
            btn2.visible = false;
            btn2.scale(1, 1);
            btn2.pos(this.positionArr[i - 1].x, this.positionArr[i - 1].y);
        }
        //鹦鹉归位
        this.polly.scale(1, 1);
        this.polly.pos(936, 52);
        this.polly.visible = true;
        this.replaydown.visible = true;
        this.replayon.visible = false;
    };
    //泡泡爆破
    BubbleAnimalMain.prototype.click = function (ani) {
        this.clickNum++;
        Laya.SoundManager.playMusic("res/audio/21-anidown.mp3", 1);
        ani.image.skin = "BubbleAnimal/ani" + ani.num + "-in1.png";
        ani.brokenBubble.visible = true;
        Laya.timer.once(200, this, function () {
            ani.brokenBubble.visible = false;
            Laya.timer.once(300, this, function () {
                ani.image.visible = false;
                ani.isBroken = true;
                this.update(ani.num);
            });
        });
    };
    //更新地上动物
    BubbleAnimalMain.prototype.update = function (num) {
        var ani = this.getChildByName("ani" + num + "-1");
        if (ani.visible) {
            var ani2 = this.getChildByName("ani" + num + "-2");
            ani2.visible = true;
            ani.visible = false;
        }
        else {
            ani.visible = true;
        }
    };
    //地上动物离开
    BubbleAnimalMain.prototype.btnCLick = function (num) {
        if (this.clickNum < 10)
            return;
        var btn1 = this.getChildByName("ani" + num + "-2");
        Laya.SoundManager.playMusic("res/audio/21-aniout.mp3", 1);
        Laya.Tween.to(btn1, { x: 500, y: 250, scaleX: .3, scaleY: .3 }, 2000, Laya.Ease.linearIn, null, 100);
        Laya.timer.once(2000, this, function () {
            this.goneNum++;
            btn1.visible = false;
            if (this.goneNum > 4) {
                this.wingame();
            }
        });
    };
    //游戏结束
    BubbleAnimalMain.prototype.wingame = function () {
        Laya.SoundManager.playMusic("res/audio/21-aniout.mp3", 1);
        // this.polly.visible = false;
        Laya.timer.frameLoop(5, this, this.onLoop);
        Laya.Tween.to(this.polly, { x: 430, y: 50, scaleX: .2, scaleY: .2 }, 2000, Laya.Ease.linearIn, null, 100);
        Laya.timer.once(2000, this, function () {
            this.polly.visible = false;
            Laya.timer.clear(this, this.onLoop);
        });
        this.replaydown.visible = false;
        this.replayon.visible = true;
    };
    //鹦鹉飞走动画loop
    BubbleAnimalMain.prototype.onLoop = function () {
        var skin = (this.polly.skin == "BubbleAnimal/polly2.png") ? "BubbleAnimal/polly3.png" : "BubbleAnimal/polly2.png";
        this.polly.skin = skin;
    };
    // 返回随机数组
    BubbleAnimalMain.prototype.getRandomArr = function (length) {
        if (length === void 0) { length = 0; }
        var arr = [];
        for (var i = 0; i < length; i++) {
            arr.push(i + 1);
        }
        return arr.sort(function (a, b) {
            return Math.random() > .5 ? -1 : 1;
        });
    };
    return BubbleAnimalMain;
}(ui.BubbleAnimalUI));
//# sourceMappingURL=BubbleAnimalMain.js.map