// 拖拽动物游戏
import Stage = Laya.Stage;
import WebGL   = Laya.WebGL;
import Sprite = Laya.Sprite;
class DragAnimal {
    public static dragAnimalMain: DragAnimalMain; // 主界面
    public static gameConfig: any; // 游戏配置
    constructor()
    {
        // 初始化舞台设置
		Laya.init(1024, 768, WebGL);
		Laya.stage.alignV = Stage.ALIGN_MIDDLE;
		Laya.stage.alignH = Stage.ALIGN_CENTER;
		Laya.stage.scaleMode = "showall";
		Laya.stage.bgColor = "#FFFFFF";
        
        // 加载游戏资源
        let resArray: any[] = [
            {url: "res/atlas/common.atlas", type: Laya.Loader.ATLAS},
            {url: "res/atlas/DragAnimal.atlas", type: Laya.Loader.ATLAS},
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
            DragAnimal.dragAnimalMain = new DragAnimalMain();
            DragAnimal.dragAnimalMain.replayBtn.on(Laya.Event.CLICK, this, this.restart);
            Laya.stage.addChild(DragAnimal.dragAnimalMain);
            DragAnimal.dragAnimalMain.init(); 
        });
    }

    // 游戏重新开始
    private restart() {
        if(DragAnimal.dragAnimalMain.replayBtn.skin.indexOf("disabled") != -1) {
            return;
        }
        DragAnimal.dragAnimalMain.replayBtn.skin = "common/replay-disabled.png";
        DragAnimal.dragAnimalMain.reset();       
    }
}
