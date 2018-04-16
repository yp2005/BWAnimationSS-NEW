// 游戏主界面
class SpotlightShowPictureMain extends ui.SpotlightShowPictureUI {
    private animalImgs1: Laya.Image[] = new Array<Laya.Image>(); // 第一组动物图片
    private animalImgs2: Laya.Image[] = new Array<Laya.Image>(); // 第二组所有动物图片
    private curAnimalImg: Laya.Image; // 当前显示的动物
    private indexes1: number[] = [0, 1, 2, 3, 4]; // 动物图片序号1
    private indexes2: number[] = [0, 1, 2, 3, 4]; // 动物图片序号2
    private showedNumber: number = 0;
    constructor() {
        super(); 
        for(let i = 0; i < 10; i++) { // 获取所有动物图片
            let animal = this.animals.getChildByName("item" + i) as Laya.Image;
            animal.visible = false;
            if(i % 2 == 0) {
                this.animalImgs1.push(animal);
            }
            else {
                this.animalImgs2.push(animal);
            }       
        }
        this.spotlight.visible = false;
        this.wellDone.visible = false;
    }

    // 重置游戏为初始状态
    public reset() {
        this.wellDone.visible = false;
        this.wellDone.color = "#FFC82C";
        Laya.Tween.to(this.spotlight, {x: 220, y: 30}, 500);
        this.showedNumber = 0;
        // 打乱动物图片显示顺序
        this.getIndexes();
    }

    // 打乱动物图片显示顺序
    private getIndexes() {
        if(this.indexes1.length == 0) {
            let indexesTmp: number[] = [0, 1, 2, 3, 4];
            for(let i = 0; i < 5; i ++) {
                let index: number = Math.floor(Math.random() * indexesTmp.length);
                this.indexes1.push(indexesTmp[index]);
                indexesTmp.splice(index, 1);
            }
        }
        if(this.indexes2.length == 0) {
            let indexesTmp: number[] = [0, 1, 2, 3, 4];
            for(let i = 0; i < 5; i ++) {
                let index: number = Math.floor(Math.random() * indexesTmp.length);
                this.indexes2.push(indexesTmp[index]);
                indexesTmp.splice(index, 1);
            }
            if(this.indexes2[0] == this.indexes1[4]) {
                this.indexes2 = new Array<number>();
                this.getIndexes();
            }
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
        if(this.indexes1.length == 0 && this.indexes2.length == 0) { // 都已显示，结束游戏，显示welldone
            this.wellDone.visible = true;
            Laya.Tween.to(this.spotlight, {x: (1024 - this.spotlight.width) / 2, y: (768 - this.spotlight.height) / 2}, 500, null, Laya.Handler.create(this, function() {
                this.wellDone.color = "#2534e8";
                this.replayBtn.skin = "common/replay-abled.png";
            }));
            return;
        }
        else {
            if(this.indexes1.length > 0) {
                let index = this.indexes1[0];
                this.indexes1.splice(0, 1);
                this.curAnimalImg = this.animalImgs1[index];
            }
            else {
                let index = this.indexes2[0];
                this.indexes2.splice(0, 1);
                this.curAnimalImg = this.animalImgs2[index];
            }
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