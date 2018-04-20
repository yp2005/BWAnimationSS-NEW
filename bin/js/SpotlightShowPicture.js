// 聚光灯游戏
var Stage = Laya.Stage;
var WebGL = Laya.WebGL;
var Sprite = Laya.Sprite;
var SpotlightShowPicture = /** @class */ (function () {
    function SpotlightShowPicture() {
        // 初始化舞台设置
        Laya.init(1024, 768, WebGL);
        Laya.stage.alignV = Stage.ALIGN_MIDDLE;
        Laya.stage.alignH = Stage.ALIGN_CENTER;
        Laya.stage.scaleMode = "showall";
        Laya.stage.bgColor = "#FFFFFF";
        // 加载游戏资源
        var resArray = [
            { url: "res/atlas/common.atlas", type: Laya.Loader.ATLAS },
            { url: "res/atlas/SpotlightShowPicture.atlas", type: Laya.Loader.ATLAS },
        ];
        Laya.loader.load(resArray, Laya.Handler.create(this, this.onload));
    }
    // 游戏资源加载完成进行游戏初始化设置
    SpotlightShowPicture.prototype.onload = function () {
        var text = new Laya.Text();
        text.text = "fffff";
        text.font = "ff";
        Laya.SoundManager.playSound("res/audio/spotlight-bg.wav", 0);
        // ff字体加载完再加载主页面
        Laya.timer.once(100, this, function () {
            SpotlightShowPicture.spotlightShowPictureMain = new SpotlightShowPictureMain();
            SpotlightShowPicture.spotlightShowPictureMain.replayBtn.on(Laya.Event.CLICK, this, this.restart);
            Laya.stage.addChild(SpotlightShowPicture.spotlightShowPictureMain);
            SpotlightShowPicture.spotlightShowPictureMain.on(Laya.Event.CLICK, this, this.start);
        });
    };
    // 游戏开始
    SpotlightShowPicture.prototype.start = function () {
        SpotlightShowPicture.spotlightShowPictureMain.off(Laya.Event.CLICK, this, this.start);
        SpotlightShowPicture.spotlightShowPictureMain.spotlight.visible = true;
        SpotlightShowPicture.spotlightShowPictureMain.init();
    };
    // 游戏重新开始
    SpotlightShowPicture.prototype.restart = function () {
        if (SpotlightShowPicture.spotlightShowPictureMain.replayBtn.skin.indexOf("disabled") != -1) {
            return;
        }
        SpotlightShowPicture.spotlightShowPictureMain.replayBtn.skin = "common/replay-disabled.png";
        SpotlightShowPicture.spotlightShowPictureMain.reset();
        SpotlightShowPicture.spotlightShowPictureMain.init();
    };
    return SpotlightShowPicture;
}());
//# sourceMappingURL=SpotlightShowPicture.js.map