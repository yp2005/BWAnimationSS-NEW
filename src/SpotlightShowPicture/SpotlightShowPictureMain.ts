// 游戏主界面
class SpotlightShowPictureMain extends ui.SpotlightShowPictureUI {
    private animalImgs: Laya.Image[] = new Array<Laya.Image>(); // 所有动物图片
    private curAnimalImg: Laya.Image; // 当前显示的动物
    private indexes: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]; // 动物图片序号
    constructor() {
        super(); 
        for(let i = 0; i < 10; i++) { // 获取所有动物图片
            let animal = this.animals.getChildByName("item" + i) as Laya.Image;
            animal.visible = false;
            this.animalImgs.push(animal);
        }
        this.spotlight.visible = false;
        this.wellDone.visible = false;
    }

    // 重置游戏为初始状态
    public reset() {
        this.wellDone.visible = false;
        this.wellDone.color = "#FFC82C";
        Laya.Tween.to(this.spotlight, {x: 220, y: 30}, 500);
        // 打乱动物图片显示顺序
        let indexesTmp: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
        for(let i = 0; i < 10; i ++) {
            let index: number = Math.floor(Math.random() * indexesTmp.length);
            this.indexes.push(indexesTmp[index]);
            indexesTmp.splice(index, 1);
        }
    }

    // 初始化
    public init() {
        Laya.timer.once(100, this, function() {
            this.on(Laya.Event.CLICK, this, this.showAnimal);
        });
    }

    // 显示动物
    private showAnimal() {
        this.off(Laya.Event.CLICK, this, this.showAnimal);
        if(this.curAnimalImg) {
            this.curAnimalImg.visible = false;
        }
        if(this.indexes.length == 0) { // 都已显示，结束游戏，显示welldone
            this.wellDone.visible = true;
            Laya.Tween.to(this.spotlight, {x: (1024 - this.spotlight.width) / 2, y: (768 - this.spotlight.height) / 2}, 500, null, Laya.Handler.create(this, function() {
                this.wellDone.color = "#2534e8";
                this.replayBtn.skin = "SpotlightShowPicture/replay-abled.png";
            }));
            return;
        }
        else {
            let index = this.indexes[0];
            this.indexes.splice(0, 1);
            this.curAnimalImg = this.animalImgs[index];
        }
        let moveTimes:number = Math.floor(Math.random() * 8) + 1;
        let oneMoveTime:number = 1500 / moveTimes;
        Laya.SoundManager.playSound("res/audio/spotlight-show-picture.mp3", 1);
        this.spotlightMove(moveTimes, oneMoveTime);
    }

    // 聚光灯移动
    private spotlightMove(moveTimes, oneMoveTime) {
        let x: number = Math.floor(Math.random() * 944);
        x = x < 80 ? 80 : x;
        let y: number = Math.floor(Math.random() * 688);
        y = y < 80 ? 80 : y;
        if(moveTimes == 1) {
            x = Math.floor(this.animals.x + this.curAnimalImg.x + (this.curAnimalImg.width - this.spotlight.width) / 2);
            y = Math.floor(this.animals.y + this.curAnimalImg.y + (this.curAnimalImg.height - this.spotlight.height) / 2);
        }
        
        Laya.Tween.to(this.spotlight, {x: x, y: y}, oneMoveTime, null, Laya.Handler.create(this, function() {
            this.spotlight.x = x;
            this.spotlight.y = y;
            moveTimes--;
            if(moveTimes > 0) {
                this.spotlightMove(moveTimes, oneMoveTime);
            }
            else {
                this.curAnimalImg.visible = true;
                this.on(Laya.Event.CLICK, this, this.showAnimal);
            }
        }));
    }    
}