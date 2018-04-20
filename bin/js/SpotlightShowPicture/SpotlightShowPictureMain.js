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
// 游戏主界面
var SpotlightShowPictureMain = /** @class */ (function (_super) {
    __extends(SpotlightShowPictureMain, _super);
    function SpotlightShowPictureMain() {
        var _this = _super.call(this) || this;
        _this.animalImgs1 = new Array(); // 第一组动物图片
        _this.animalImgs2 = new Array(); // 第二组所有动物图片
        _this.indexes1 = [0, 1, 2, 3, 4]; // 动物图片序号1
        _this.indexes2 = [0, 1, 2, 3, 4]; // 动物图片序号2
        _this.showedNumber = 0;
        for (var i = 0; i < 10; i++) {
            var animal = _this.animals.getChildByName("item" + i);
            animal.visible = false;
            if (i % 2 == 0) {
                _this.animalImgs1.push(animal);
            }
            else {
                _this.animalImgs2.push(animal);
            }
        }
        _this.spotlight.visible = false;
        _this.wellDone.visible = false;
        return _this;
    }
    // 重置游戏为初始状态
    SpotlightShowPictureMain.prototype.reset = function () {
        this.wellDone.visible = false;
        this.wellDone.color = "#FFC82C";
        Laya.Tween.to(this.spotlight, { x: 220, y: 30 }, 500);
        this.showedNumber = 0;
        // 打乱动物图片显示顺序
        this.getIndexes();
    };
    // 打乱动物图片显示顺序
    SpotlightShowPictureMain.prototype.getIndexes = function () {
        if (this.indexes1.length == 0) {
            var indexesTmp = [0, 1, 2, 3, 4];
            for (var i = 0; i < 5; i++) {
                var index = Math.floor(Math.random() * indexesTmp.length);
                this.indexes1.push(indexesTmp[index]);
                indexesTmp.splice(index, 1);
            }
        }
        if (this.indexes2.length == 0) {
            var indexesTmp = [0, 1, 2, 3, 4];
            for (var i = 0; i < 5; i++) {
                var index = Math.floor(Math.random() * indexesTmp.length);
                this.indexes2.push(indexesTmp[index]);
                indexesTmp.splice(index, 1);
            }
            if (this.indexes2[0] == this.indexes1[4]) {
                this.indexes2 = new Array();
                this.getIndexes();
            }
        }
    };
    // 初始化
    SpotlightShowPictureMain.prototype.init = function () {
        Laya.timer.once(100, this, function () {
            this.on(Laya.Event.CLICK, this, this.showAnimal);
        });
    };
    // 显示动物
    SpotlightShowPictureMain.prototype.showAnimal = function () {
        this.off(Laya.Event.CLICK, this, this.showAnimal);
        if (this.curAnimalImg) {
            this.curAnimalImg.visible = false;
        }
        if (this.indexes1.length == 0 && this.indexes2.length == 0) {
            this.wellDone.visible = true;
            Laya.Tween.to(this.spotlight, { x: (1024 - this.spotlight.width) / 2, y: (768 - this.spotlight.height) / 2 }, 500, null, Laya.Handler.create(this, function () {
                this.wellDone.color = "#2534e8";
                this.replayBtn.skin = "common/replay-abled.png";
            }));
            return;
        }
        else {
            if (this.indexes1.length > 0) {
                var index = this.indexes1[0];
                this.indexes1.splice(0, 1);
                this.curAnimalImg = this.animalImgs1[index];
            }
            else {
                var index = this.indexes2[0];
                this.indexes2.splice(0, 1);
                this.curAnimalImg = this.animalImgs2[index];
            }
        }
        var moveTimes = Math.floor(Math.random() * 8) + 1;
        var oneMoveTime = 1500 / moveTimes;
        Laya.SoundManager.playSound("res/audio/spotlight-show-picture.mp3", 1);
        this.spotlightMove(moveTimes, oneMoveTime);
    };
    // 聚光灯移动
    SpotlightShowPictureMain.prototype.spotlightMove = function (moveTimes, oneMoveTime) {
        var x = Math.floor(Math.random() * 944);
        x = x < 80 ? 80 : x;
        var y = Math.floor(Math.random() * 688);
        y = y < 80 ? 80 : y;
        if (moveTimes == 1) {
            x = Math.floor(this.animals.x + this.curAnimalImg.x + (this.curAnimalImg.width - this.spotlight.width) / 2);
            y = Math.floor(this.animals.y + this.curAnimalImg.y + (this.curAnimalImg.height - this.spotlight.height) / 2);
        }
        Laya.Tween.to(this.spotlight, { x: x, y: y }, oneMoveTime, null, Laya.Handler.create(this, function () {
            this.spotlight.x = x;
            this.spotlight.y = y;
            moveTimes--;
            if (moveTimes > 0) {
                this.spotlightMove(moveTimes, oneMoveTime);
            }
            else {
                this.curAnimalImg.visible = true;
                this.on(Laya.Event.CLICK, this, this.showAnimal);
            }
        }));
    };
    return SpotlightShowPictureMain;
}(ui.SpotlightShowPictureUI));
//# sourceMappingURL=SpotlightShowPictureMain.js.map