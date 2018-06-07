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
// 泡泡游戏泡泡类
var Animal = /** @class */ (function (_super) {
    __extends(Animal, _super);
    function Animal(num) {
        if (num === void 0) { num = 1; }
        var _this = _super.call(this) || this;
        _this.topY = 481; // 飘动的边界
        _this.bottomY = 700; // 飘动的边界
        _this.leftX = 70; // 飘动的边界
        _this.rightX = 940; // 飘动的边界
        _this.goNum = 200; // 飘动的幅度
        _this.num = num;
        _this.isBroken = false;
        _this.clicked = false;
        _this.brokenBubble = new Laya.Image("BubbleAnimal/bubble2.png");
        _this.brokenBubble.centerX = 0;
        _this.brokenBubble.centerY = 0;
        _this.brokenBubble.zOrder = 1;
        _this.brokenBubble.visible = false;
        _this.image = new Laya.Image("BubbleAnimal/ani" + num + "-in2.png");
        _this.image.centerX = 0;
        _this.image.centerY = 0;
        // this.image.on(Laya.Event.CLICK,this,this.click);
        _this.addChild(_this.brokenBubble);
        _this.addChild(_this.image);
        return _this;
        // this.shake1();
    }
    // 被点击
    Animal.prototype.click = function () {
        this.clicked = true;
        if (this.curAni) {
            this.curAni.clear();
        }
        this.image.skin = "BubbleAnimal/ani" + this.num + "-in1.png";
        this.brokenBubble.visible = true;
        Laya.timer.once(200, this, function () {
            this.brokenBubble.visible = false;
            Laya.timer.once(300, this, function () {
                this.image.visible = false;
                this.isBroken = true;
            });
        });
    };
    // 飘来
    Animal.prototype.shake1 = function () {
        //
        if (!this.clicked) {
            this.initX = this.x;
            this.initY = this.y;
            var _x = (Math.random() - 0.5) * this.goNum;
            var _y = (Math.random() - 0.5) * this.goNum;
            var goX = this.getLimitXY(true, _x);
            var goY = this.getLimitXY(false, _y);
            this.curAni = Laya.Tween.to(this, { x: goX, y: goY }, 4000, null, Laya.Handler.create(this, this.shake2));
        }
    };
    // 飘去
    Animal.prototype.shake2 = function () {
        if (!this.clicked) {
            var _x = (Math.random() - 0.5) * this.goNum;
            var _y = (Math.random() - 0.5) * this.goNum;
            var goX = this.getLimitXY(true, _x);
            var goY = this.getLimitXY(false, _y);
            this.curAni = Laya.Tween.to(this, { x: goX, y: goY }, 4000, null, Laya.Handler.create(this, this.shake1));
        }
    };
    Animal.prototype.getLimitXY = function (isX, xy) {
        var result = isX ? (this.initX + xy) : (this.initY + xy);
        if (isX) {
            result = Math.min(this.rightX, result);
            result = Math.max(this.leftX, result);
        }
        else {
            result = Math.min(this.bottomY, result);
            result = Math.max(this.topY, result);
        }
        return result;
    };
    return Animal;
}(Laya.Sprite));
//# sourceMappingURL=Animal.js.map