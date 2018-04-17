// 砸蛋游戏
import Stage = Laya.Stage;
import WebGL   = Laya.WebGL;
import Sprite = Laya.Sprite;
class RunRace {
    public static runRaceMain: RunRaceMain; // 主界面
    constructor()
    {
        // 初始化舞台设置
		Laya.init(1024, 768, WebGL);
		Laya.stage.alignV = Stage.ALIGN_MIDDLE;
		Laya.stage.alignH = Stage.ALIGN_CENTER;
		Laya.stage.scaleMode = "showall";
		Laya.stage.bgColor = "#000000";
        
        // 加载游戏资源
        let resArray: any[] = [
            {url: "res/atlas/common.atlas", type: Laya.Loader.ATLAS},
            {url: "res/atlas/RunRace.atlas", type: Laya.Loader.ATLAS},
            {url: "RunRace/bg.png", type: Laya.Loader.IMAGE},
            {url: "template/Text/TextBox.png", type: Laya.Loader.IMAGE},
            {url: "template/ButtonTab/btn_LargeTabButton_Middle.png", type: Laya.Loader.IMAGE}
        ];
        
        Laya.loader.load(resArray, Laya.Handler.create(this, this.onload));     
    }

    // 游戏资源加载完成进行游戏初始化设置
    private onload() {
        let text = new Laya.Text();
        text.text = "fffff";
        text.font = "ff";
        // ff字体加载完再加载主页面
        Laya.timer.once(100, this, function() {
            RunRace.runRaceMain = new RunRaceMain();
            // RunRace.runRaceMain.replayBtn.on(Laya.Event.CLICK, this, this.restart);
            Laya.stage.addChild(RunRace.runRaceMain);
            // RunRace.spotlightMain.initWords(); 
        });
    }
}
