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
// 砸蛋游戏
var Stage = Laya.Stage;
var WebGL = Laya.WebGL;
var Sprite = Laya.Sprite;
var RunRaceMain = /** @class */ (function (_super) {
    __extends(RunRaceMain, _super);
    function RunRaceMain() {
        var _this = _super.call(this) || this;
        _this.speed = 50;
        _this.isGo = false;
        _this.restart();
        for (var i = 1; i < 6; i++) {
            var btn1 = _this.btnbox.getChildByName("btn-player" + i);
            btn1.on(Laya.Event.CLICK, _this, _this.btnCLick, [i]);
        }
        _this.replayon.on(Laya.Event.CLICK, _this, _this.restart);
        return _this;
    }
    // 游戏开始
    RunRaceMain.prototype.restart = function () {
        this.init();
        this.bg.on(Laya.Event.CLICK, this, this.start);
    };
    RunRaceMain.prototype.init = function () {
        this.speed = 50;
        this.isGo = false;
        this.readygo.visible = false;
        this.winner.visible = false;
        Laya.timer.clear(this, this.onLoop);
        for (var i = 1; i < 6; i++) {
            var player = this.getChildByName("player" + i);
            player.x = 0;
            var btn1 = this.btnbox.getChildByName("btn-player" + i);
            var btn2 = this.btnbox.getChildByName("btn2-player" + i);
            btn1.visible = false;
            btn2.visible = true;
        }
        this.replaydown.visible = true;
        this.replayon.visible = false;
    };
    RunRaceMain.prototype.start = function () {
        this.readygo.visible = true;
        this.bg.off(Laya.Event.CLICK, this, this.restart);
        Laya.SoundManager.playMusic("res/audio/19-readygo.wav", 1);
        Laya.timer.once(2000, this, function () {
            this.readygo.visible = false;
            this.resetLoop();
            this.isGo = true;
            for (var i = 1; i < 6; i++) {
                var btn1 = this.btnbox.getChildByName("btn-player" + i);
                var btn2 = this.btnbox.getChildByName("btn2-player" + i);
                btn1.visible = true;
                btn2.visible = false;
            }
        });
        this.replaydown.visible = true;
        this.replayon.visible = false;
    };
    RunRaceMain.prototype.onLoop = function () {
        for (var i = 1; i < 7; i++) {
            var fans = this.getChildByName("fans" + i);
            var skin = fans.skin;
            if (skin.indexOf("1.png") != -1) {
                skin = skin.replace("1.png", "2.png");
            }
            else {
                skin = skin.replace("2.png", "1.png");
            }
            fans.skin = skin;
        }
    };
    RunRaceMain.prototype.btnCLick = function (num) {
        // if(this.isGo)
        Laya.SoundManager.playMusic("res/audio/19-run.mp3", 1);
        var btn1 = this.btnbox.getChildByName("btn-player" + num);
        var btn2 = this.btnbox.getChildByName("btn2-player" + num);
        var player = this.getChildByName("player" + num);
        btn1.visible = false;
        btn2.visible = true;
        player.x = player.x + 90;
        // console.log(player.x+"--"+(player.x > 850));
        if (player.x > 850) {
            this.winner.y = player.y - 20;
            this.winner.visible = true;
            this.wingame();
            return;
        }
        Laya.timer.once(100, this, function () {
            btn1.visible = true;
            btn2.visible = false;
        });
    };
    RunRaceMain.prototype.wingame = function () {
        this.speed = 25;
        this.resetLoop();
        Laya.SoundManager.playMusic("res/audio/19-fans.mp3", 1);
        for (var i = 1; i < 6; i++) {
            var player = this.getChildByName("player" + i);
            // let winner = player.getChildByName("winner") as Laya.Image;
            //     winner.visible = false;
            var btn1 = this.btnbox.getChildByName("btn-player" + i);
            var btn2 = this.btnbox.getChildByName("btn2-player" + i);
            btn1.visible = false;
            btn2.visible = true;
        }
        this.replaydown.visible = false;
        this.replayon.visible = true;
    };
    RunRaceMain.prototype.resetLoop = function () {
        Laya.timer.clear(this, this.onLoop);
        Laya.timer.frameLoop(this.speed, this, this.onLoop);
    };
    return RunRaceMain;
}(ui.RunRaceUI));
//# sourceMappingURL=RunRaceMain.js.map