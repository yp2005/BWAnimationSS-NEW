// 游戏主界面
class DragAnimalMain extends ui.DragAnimalUI {
    private animals: Laya.Image[] = new Array<Laya.Image>(); // 所有动物图片
    private partAnimals: Laya.Image[] = new Array<Laya.Image>(); // 可以交换位置的动物图片
    private partAnimalsPos: any[] = new Array<any>(); // 可以交换位置的动物图片的坐标
    private otherAnimalsPos: any[] = new Array<any>(); // 不可以交换位置的动物图片的坐标
    private curAnimal: Laya.Image; // 当前拖动的动物
    private curAnimalXY: any; // 当前拖拽的动物的原始坐标
    private dragedNumber: number = 0; // 拖拽完成的动物数量
    constructor() {
        super(); 
        this.hideSmallPic();
    }

    // 重置游戏为初始状态
    public reset() {
        this.dragedNumber = 0;
        this.curAnimal = null;
        this.hideSmallPic();
        // 动物回到原位
        this.crocodile1.pos(this.otherAnimalsPos[0].x, this.otherAnimalsPos[0].y);
        this.crocodile2.pos(this.otherAnimalsPos[1].x, this.otherAnimalsPos[1].y);
        this.spider1.pos(this.otherAnimalsPos[2].x, this.otherAnimalsPos[2].y);
        this.spider2.pos(this.otherAnimalsPos[3].x, this.otherAnimalsPos[3].y);
        for(let i: number = 0; i < 7; i++) {
            this.partAnimals[i].pos(this.partAnimalsPos[i].x, this.partAnimalsPos[i].y);
        }
        for(let animal of this.animals) {
            animal.visible = true;
        }
    }

    // 初始化
    public init() {
        this.animals.push(this.crocodile1);
        this.otherAnimalsPos.push({x: this.crocodile1.x, y: this.crocodile1.y});
        this.animals.push(this.crocodile2);
        this.otherAnimalsPos.push({x: this.crocodile2.x, y: this.crocodile2.y});
        this.animals.push(this.elephant1);
        this.partAnimals.push(this.elephant1);
        this.partAnimalsPos.push({x: this.elephant1.x, y: this.elephant1.y});
        this.animals.push(this.elephant2);
        this.partAnimals.push(this.elephant2);
        this.partAnimalsPos.push({x: this.elephant2.x, y: this.elephant2.y});
        this.animals.push(this.snake1);
        this.partAnimals.push(this.snake1);
        this.partAnimalsPos.push({x: this.snake1.x, y: this.snake1.y});
        this.animals.push(this.snake2);
        this.partAnimals.push(this.snake2);
        this.partAnimalsPos.push({x: this.snake2.x, y: this.snake1.y});
        this.animals.push(this.snake3);
        this.partAnimals.push(this.snake3);
        this.partAnimalsPos.push({x: this.snake3.x, y: this.snake3.y});
        this.animals.push(this.spider1);
        this.otherAnimalsPos.push({x: this.spider1.x, y: this.spider1.y});
        this.animals.push(this.spider2);
        this.otherAnimalsPos.push({x: this.spider2.x, y: this.spider2.y});
        this.animals.push(this.tiger1);
        this.partAnimals.push(this.tiger1);
        this.partAnimalsPos.push({x: this.tiger1.x, y: this.tiger1.y});
        this.animals.push(this.tiger2);
        this.partAnimals.push(this.tiger2);
        this.partAnimalsPos.push({x: this.tiger2.x, y: this.tiger2.y});
        
        for(let animal of this.animals) {
            animal.on(Laya.Event.MOUSE_DOWN, this, this.startDragAnimal, [animal]);
            animal.on(Laya.Event.MOUSE_UP, this, this.stopDragAnimal, [animal]);
        }
        this.crocodileAudio.on(Laya.Event.CLICK, this, function() {
            Laya.SoundManager.playSound("res/audio/crocodile.wav", 1);
        });
        this.elephantAudio.on(Laya.Event.CLICK, this, function() {
            Laya.SoundManager.playSound("res/audio/elephant.wav", 1);
        });
        this.snakeAudio.on(Laya.Event.CLICK, this, function() {
            Laya.SoundManager.playSound("res/audio/snake.wav", 1);
        });
        this.spiderAudio.on(Laya.Event.CLICK, this, function() {
            Laya.SoundManager.playSound("res/audio/spider.wav", 1);
        });
        this.tigerAudio.on(Laya.Event.CLICK, this, function() {
            Laya.SoundManager.playSound("res/audio/tiger.wav", 1);
        });
        Laya.stage.on(Laya.Event.MOUSE_OUT, this, function() {
           if(this.curAnimal) {
               this.stopDragAnimal(this.curAnimal);
           } 
        });
    }

    // 隐藏动物小图片
    private hideSmallPic() {
        this.crocodile1Small.visible = false;
        this.crocodile2Small.visible = false;
        this.elephant1Small.visible = false;
        this.elephant2Small.visible = false;
        this.snake1Small.visible = false;
        this.snake2Small.visible = false;
        this.snake3Small.visible = false;
        this.spider1Small.visible = false;
        this.spider2Small.visible = false;
        this.tiger1Small.visible = false;
        this.tiger2Small.visible = false;
    }

    // 开始拖拽动物
    private startDragAnimal(animal: Laya.Image) {
        animal.removeSelf();
        this.addChild(animal);
        this.curAnimal = animal;
        this.curAnimalXY = {x: animal.x, y: animal.y};
        animal.startDrag();
    }

    // 拖拽动物结束
    private stopDragAnimal(animal: Laya.Image) {
        this.curAnimal = null;
        animal.stopDrag();
        let x: number = animal.x;
        let y: number = animal.y;
        if(animal.skin.indexOf("crocodile") != -1 && x + animal.width > 40 && x < 195 && y + animal.height > 676 && y < 733) {
            animal.visible = false;
            if(animal.skin.indexOf("crocodile1") != -1) {
                this.crocodile1Small.removeSelf();
                this.addChild(this.crocodile1Small);
                this.crocodile1Small.visible = true;
            }
            else if(animal.skin.indexOf("crocodile2") != -1) {
                this.crocodile2Small.removeSelf();
                this.addChild(this.crocodile2Small);
                this.crocodile2Small.visible = true;
            }
            this.dragedNumber++;
            if(this.dragedNumber < 11 && this.crocodile1.visible == false && this.crocodile2.visible == false) {
                Laya.SoundManager.playSound("res/audio/drag-success.mp3", 1);
            }
        }
        else if(animal.skin.indexOf("elephant") != -1 && x + animal.width > 237 && x < 392 && y + animal.height > 676 && y < 733) {
            animal.visible = false;
            if(animal.skin.indexOf("elephant1") != -1) {
                this.elephant1Small.removeSelf();
                this.addChild(this.elephant1Small);
                this.elephant1Small.visible = true;
            }
            else if(animal.skin.indexOf("elephant2") != -1) {
                this.elephant2Small.removeSelf();
                this.addChild(this.elephant2Small);
                this.elephant2Small.visible = true;
            }
            this.dragedNumber++;
            if(this.dragedNumber < 11 && this.elephant1.visible == false && this.elephant2.visible == false) {
                Laya.SoundManager.playSound("res/audio/drag-success.mp3", 1);
            }
        }
        else if(animal.skin.indexOf("snake") != -1 && x + animal.width > 437 && x < 592 && y + animal.height > 676 && y < 733) {
            animal.visible = false;
            if(animal.skin.indexOf("snake1") != -1) {
                this.snake1Small.removeSelf();
                this.addChild(this.snake1Small);
                this.snake1Small.visible = true;
            }
            else if(animal.skin.indexOf("snake2") != -1) {
                this.snake2Small.removeSelf();
                this.addChild(this.snake2Small);
                this.snake2Small.visible = true;
            }
            else if(animal.skin.indexOf("snake3") != -1) {
                this.snake3Small.removeSelf();
                this.addChild(this.snake3Small);
                this.snake3Small.visible = true;
            }
            this.dragedNumber++;
            if(this.dragedNumber < 11 && this.snake1.visible == false && this.snake2.visible == false && this.snake3.visible == false) {
                Laya.SoundManager.playSound("res/audio/drag-success.mp3", 1);
            }
        }
        else if(animal.skin.indexOf("spider") != -1 && x + animal.width > 625 && x < 790 && y + animal.height > 676 && y < 733) {
            animal.visible = false;
            if(animal.skin.indexOf("spider1") != -1) {
                this.spider1Small.removeSelf();
                this.addChild(this.spider1Small);
                this.spider1Small.visible = true;
            }
            else if(animal.skin.indexOf("spider2") != -1) {
                this.spider2Small.removeSelf();
                this.addChild(this.spider2Small);
                this.spider2Small.visible = true;
            }
            this.dragedNumber++;
            if(this.dragedNumber < 11 && this.spider1.visible == false && this.spider2.visible == false) {
                Laya.SoundManager.playSound("res/audio/drag-success.mp3", 1);
            }
        }
        else if(animal.skin.indexOf("tiger") != -1 && x + animal.width > 833 && x < 988 && y + animal.height > 676 && y < 733) {
            animal.visible = false;
            if(animal.skin.indexOf("tiger1") != -1) {
                this.tiger1Small.removeSelf();
                this.addChild(this.tiger1Small);
                this.tiger1Small.visible = true;
            }
            else if(animal.skin.indexOf("tiger2") != -1) {
                this.tiger2Small.removeSelf();
                this.addChild(this.tiger2Small);
                this.tiger2Small.visible = true;
            }
            this.dragedNumber++;
            if(this.dragedNumber < 11 && this.tiger1.visible == false && this.tiger2.visible == false) {
                Laya.SoundManager.playSound("res/audio/drag-success.mp3", 1);
            }
        }
        else {
            Laya.Tween.to(animal, {x: this.curAnimalXY.x, y: this.curAnimalXY.y}, 200);
            Laya.SoundManager.playSound("res/audio/drag-fail.mp3", 1);
        }
        if(this.dragedNumber == 11) {
            this.replayBtn.skin = "common/replay-abled.png";
            Laya.SoundManager.playSound("res/audio/drag-all-success.mp3", 1);
        }
    }
      
}