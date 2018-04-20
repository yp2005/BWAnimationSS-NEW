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
var Animal = /** @class */ (function (_super) {
    __extends(Animal, _super);
    function Animal(num) {
        if (num === void 0) { num = 1; }
        var _this = _super.call(this) || this;
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
    // 晃动
    Animal.prototype.shake1 = function () {
        if (!this.clicked) {
            this.initX = this.x;
            this.initY = this.y;
            var _x = (Math.random() - 0.5) * 20;
            var _y = (Math.random() - 0.5) * 20;
            this.curAni = Laya.Tween.to(this, { x: this.initX + _x, y: this.initY + _y }, 1000, null, Laya.Handler.create(this, this.shake2));
        }
    };
    Animal.prototype.shake2 = function () {
        if (!this.clicked) {
            var _x = (Math.random() - 0.5) * 20;
            var _y = (Math.random() - 0.5) * 20;
            this.curAni = Laya.Tween.to(this, { x: this.initX + _x, y: this.initY + _y }, 1000, null, Laya.Handler.create(this, this.shake1));
        }
    };
    return Animal;
}(Laya.Sprite));
//# sourceMappingURL=Animal.js.map