// 游戏主界面
class DragAnimalMain extends ui.DragAnimalUI {
    private animals: Laya.Image[] = new Array<Laya.Image>(); // 所有动物图片
    private animalPos: any = {}; // 所有动物的初始位置
    private dragedNumber: number = 0; // 拖拽完成的动物数量
    // private curAnimal: Laya.Image; // 正在拖动的动物
    private curAnimal: string;
    constructor() {
        super(); 
        this.hideSmallPic();
    }   

    // 重置游戏为初始状态
    public reset() {
        this.dragedNumber = 0;
        this.hideSmallPic();
        for(let animal of this.animals) {
            animal.pos(this.animalPos[animal.skin].x, this.animalPos[animal.skin].y);
            animal.width = this.animalPos[animal.skin].width;
            animal.height = this.animalPos[animal.skin].height;
            animal.visible = true;
            // animal.on(Laya.Event.MOUSE_DOWN, this, this.startDragAnimal, [animal]);
            // animal.on(Laya.Event.MOUSE_UP, this, this.stopDragAnimal, [animal]);
            animal.on(Laya.Event.CLICK, this, this.match, [animal]);
        }
    }

    // 初始化
    public init() {
        this.animals.push(this.crocodile1);
        this.animals.push(this.crocodile2);
        this.animals.push(this.elephant1);
        this.animals.push(this.elephant2);
        this.animals.push(this.snake1);
        this.animals.push(this.snake2);
        this.animals.push(this.snake3);
        this.animals.push(this.spider1);
        this.animals.push(this.spider2);
        this.animals.push(this.tiger1);
        this.animals.push(this.tiger2);
        
        for(let animal of this.animals) {
            this.animalPos[animal.skin] = {x: animal.x, y: animal.y, width: animal.width, height: animal.height};
            // animal.on(Laya.Event.MOUSE_DOWN, this, this.startDragAnimal, [animal]);
            // animal.on(Laya.Event.MOUSE_UP, this, this.stopDragAnimal, [animal]);
            animal.on(Laya.Event.CLICK, this, this.match, [animal]);
        }
        this.crocodileAudio.on(Laya.Event.CLICK, this, function() {
            Laya.SoundManager.playSound("res/audio/crocodile.mp3", 1);
            this.curAnimal = "crocodile";
        });
        this.elephantAudio.on(Laya.Event.CLICK, this, function() {
            Laya.SoundManager.playSound("res/audio/elephant.mp3", 1);
            this.curAnimal = "elephant";
        });
        this.snakeAudio.on(Laya.Event.CLICK, this, function() {
            Laya.SoundManager.playSound("res/audio/snake.mp3", 1);
            this.curAnimal = "snake";
        });
        this.spiderAudio.on(Laya.Event.CLICK, this, function() {
            Laya.SoundManager.playSound("res/audio/spider.mp3", 1);
            this.curAnimal = "spider";
        });
        this.tigerAudio.on(Laya.Event.CLICK, this, function() {
            Laya.SoundManager.playSound("res/audio/tiger.mp3", 1);
            this.curAnimal = "tiger";
        });
        // Laya.stage.on(Laya.Event.MOUSE_OUT, this, function() {
        //    if(this.curAnimal) {
        //        this.stopDragAnimal(this.curAnimal);
        //    } 
        // });
    }

    private match(animal: Laya.Image) {
        if(animal.skin.indexOf(this.curAnimal) != -1) {
            Laya.SoundManager.playSound("res/audio/" + this.curAnimal + ".mp3", 1);
            this.dragedNumber++;
            let animalName = animal.skin.substring(animal.skin.lastIndexOf("/") + 1, animal.skin.lastIndexOf("."))
            let smallAnimal: Laya.Image = this[animalName + "Small"];
            Laya.Tween.to(animal, {width: animal.width * 1.2, height: animal.height * 1.2, x: animal.x - animal.width * 0.1, y: animal.y - animal.height * 0.1}, 200, null, Laya.Handler.create(this, function() {
                Laya.Tween.to(animal, {width: smallAnimal.width, height: smallAnimal.height, x: smallAnimal.x, y: smallAnimal.y}, 200, null, Laya.Handler.create(this, function() {
                    animal.visible = false;
                    smallAnimal.visible = true;
                }));
            }));
        }
        else {
            Laya.SoundManager.playSound("res/audio/drag-fail.mp3", 1);
            // 抖动
            let initX: number = animal.x;
            Laya.Tween.to(animal, {x: initX - 10}, 50, null, Laya.Handler.create(animal, function() {
                Laya.Tween.to(animal, {x: initX}, 50, null, Laya.Handler.create(animal, function() {
                    Laya.Tween.to(animal, {x: initX - 10}, 50, null, Laya.Handler.create(animal, function() {
                        Laya.Tween.to(animal, {x: initX}, 50, null, Laya.Handler.create(animal, function() {
                            Laya.Tween.to(animal, {x: initX - 10},50, null, Laya.Handler.create(animal, function() {
                                Laya.Tween.to(animal, {x: initX}, 50);
                            }));
                        }));
                    }));
                }));
            }));

        }
        if(this.dragedNumber == 11) {
            Laya.timer.once(800, this, function() {
                this.replayBtn.skin = "common/replay-abled.png";
                Laya.SoundManager.playSound("res/audio/drag-all-success.mp3", 1);
            });
        }
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

    // // 开始拖拽动物
    // private startDragAnimal(animal: Laya.Image) {
    //     animal.removeSelf();
    //     this.addChild(animal);
    //     animal.startDrag();
    //     this.curAnimal = animal;
    // }

    // 拖拽动物结束
    // private stopDragAnimal(animal: Laya.Image) {
    //     this.curAnimal = null;
    //     animal.stopDrag();
    //     let x: number = animal.x;
    //     let y: number = animal.y;
    //     if(animal.skin.indexOf("crocodile") != -1 && x + animal.width > 40 && x < 195 && y + animal.height > 676 && y < 733) {
    //         animal.visible = false;
    //         if(animal.skin.indexOf("crocodile1") != -1) {
    //             this.crocodile1Small.removeSelf();
    //             this.addChild(this.crocodile1Small);
    //             this.crocodile1Small.visible = true;
    //         }
    //         else if(animal.skin.indexOf("crocodile2") != -1) {
    //             this.crocodile2Small.removeSelf();
    //             this.addChild(this.crocodile2Small);
    //             this.crocodile2Small.visible = true;
    //         }
    //         this.dragedNumber++;
    //         if(this.dragedNumber < 11 && this.crocodile1.visible == false && this.crocodile2.visible == false) {
    //             Laya.SoundManager.playSound("res/audio/drag-success.mp3", 1);
    //         }
    //     }
    //     else if(animal.skin.indexOf("elephant") != -1 && x + animal.width > 237 && x < 392 && y + animal.height > 676 && y < 733) {
    //         animal.visible = false;
    //         if(animal.skin.indexOf("elephant1") != -1) {
    //             this.elephant1Small.removeSelf();
    //             this.addChild(this.elephant1Small);
    //             this.elephant1Small.visible = true;
    //         }
    //         else if(animal.skin.indexOf("elephant2") != -1) {
    //             this.elephant2Small.removeSelf();
    //             this.addChild(this.elephant2Small);
    //             this.elephant2Small.visible = true;
    //         }
    //         this.dragedNumber++;
    //         if(this.dragedNumber < 11 && this.elephant1.visible == false && this.elephant2.visible == false) {
    //             Laya.SoundManager.playSound("res/audio/drag-success.mp3", 1);
    //         }
    //     }
    //     else if(animal.skin.indexOf("snake") != -1 && x + animal.width > 437 && x < 592 && y + animal.height > 676 && y < 733) {
    //         animal.visible = false;
    //         if(animal.skin.indexOf("snake1") != -1) {
    //             this.snake1Small.removeSelf();
    //             this.addChild(this.snake1Small);
    //             this.snake1Small.visible = true;
    //         }
    //         else if(animal.skin.indexOf("snake2") != -1) {
    //             this.snake2Small.removeSelf();
    //             this.addChild(this.snake2Small);
    //             this.snake2Small.visible = true;
    //         }
    //         else if(animal.skin.indexOf("snake3") != -1) {
    //             this.snake3Small.removeSelf();
    //             this.addChild(this.snake3Small);
    //             this.snake3Small.visible = true;
    //         }
    //         this.dragedNumber++;
    //         if(this.dragedNumber < 11 && this.snake1.visible == false && this.snake2.visible == false && this.snake3.visible == false) {
    //             Laya.SoundManager.playSound("res/audio/drag-success.mp3", 1);
    //         }
    //     }
    //     else if(animal.skin.indexOf("spider") != -1 && x + animal.width > 625 && x < 790 && y + animal.height > 676 && y < 733) {
    //         animal.visible = false;
    //         if(animal.skin.indexOf("spider1") != -1) {
    //             this.spider1Small.removeSelf();
    //             this.addChild(this.spider1Small);
    //             this.spider1Small.visible = true;
    //         }
    //         else if(animal.skin.indexOf("spider2") != -1) {
    //             this.spider2Small.removeSelf();
    //             this.addChild(this.spider2Small);
    //             this.spider2Small.visible = true;
    //         }
    //         this.dragedNumber++;
    //         if(this.dragedNumber < 11 && this.spider1.visible == false && this.spider2.visible == false) {
    //             Laya.SoundManager.playSound("res/audio/drag-success.mp3", 1);
    //         }
    //     }
    //     else if(animal.skin.indexOf("tiger") != -1 && x + animal.width > 833 && x < 988 && y + animal.height > 676 && y < 733) {
    //         animal.visible = false;
    //         if(animal.skin.indexOf("tiger1") != -1) {
    //             this.tiger1Small.removeSelf();
    //             this.addChild(this.tiger1Small);
    //             this.tiger1Small.visible = true;
    //         }
    //         else if(animal.skin.indexOf("tiger2") != -1) {
    //             this.tiger2Small.removeSelf();
    //             this.addChild(this.tiger2Small);
    //             this.tiger2Small.visible = true;
    //         }
    //         this.dragedNumber++;
    //         if(this.dragedNumber < 11 && this.tiger1.visible == false && this.tiger2.visible == false) {
    //             Laya.SoundManager.playSound("res/audio/drag-success.mp3", 1);
    //         }
    //     }
    //     else {
    //         Laya.Tween.to(animal, {x: this.animalPos[animal.skin].x, y: this.animalPos[animal.skin].y}, 200);
    //         Laya.SoundManager.playSound("res/audio/drag-fail.mp3", 1);
    //     }
    //     if(this.dragedNumber == 11) {
    //         this.replayBtn.skin = "common/replay-abled.png";
    //         Laya.SoundManager.playSound("res/audio/drag-all-success.mp3", 1);
    //     }
    // }
      
}