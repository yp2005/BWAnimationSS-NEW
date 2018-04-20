// 聚光灯游戏
var Stage = Laya.Stage;
var WebGL = Laya.WebGL;
var Sprite = Laya.Sprite;
var DragAnimal = /** @class */ (function () {
    function DragAnimal(config) {
        // // 如果没有传入配置，使用默认配置
        // if(!config) {
        //     config = {
        //     };
        // }
        // DragAnimal.gameConfig = config;
        // 初始化舞台设置
        Laya.init(1024, 768, WebGL);
        Laya.stage.alignV = Stage.ALIGN_MIDDLE;
        Laya.stage.alignH = Stage.ALIGN_CENTER;
        Laya.stage.scaleMode = "showall";
        Laya.stage.bgColor = "#FFFFFF";
        // 加载游戏资源
        var resArray = [
            { url: "res/atlas/common.atlas", type: Laya.Loader.ATLAS },
            { url: "res/atlas/DragAnimal.atlas", type: Laya.Loader.ATLAS },
        ];
        Laya.loader.load(resArray, Laya.Handler.create(this, this.onload));
    }
    // 游戏资源加载完成进行游戏初始化设置
    DragAnimal.prototype.onload = function () {
        var text = new Laya.Text();
        text.text = "fffff";
        text.font = "ff";
        Laya.SoundManager.playSound("res/audio/spotlight-bg.wav", 0);
        // ff字体加载完再加载主页面
        Laya.timer.once(100, this, function () {
            DragAnimal.dragAnimalMain = new DragAnimalMain();
            DragAnimal.dragAnimalMain.replayBtn.on(Laya.Event.CLICK, this, this.restart);
            Laya.stage.addChild(DragAnimal.dragAnimalMain);
            DragAnimal.dragAnimalMain.on(Laya.Event.CLICK, this, this.start);
        });
    };
    // 游戏开始
    DragAnimal.prototype.start = function () {
        DragAnimal.dragAnimalMain.off(Laya.Event.CLICK, this, this.start);
        DragAnimal.dragAnimalMain.spotlight.visible = true;
        DragAnimal.dragAnimalMain.init();
    };
    // 游戏重新开始
    DragAnimal.prototype.restart = function () {
        if (DragAnimal.dragAnimalMain.replayBtn.skin.indexOf("disabled") != -1) {
            return;
        }
        DragAnimal.dragAnimalMain.replayBtn.skin = "common/replay-disabled.png";
        DragAnimal.dragAnimalMain.reset();
        DragAnimal.dragAnimalMain.init();
    };
    return DragAnimal;
}());
//# sourceMappingURL=DragAnimal.js.map