// 游戏主界面
class DragAnimalMain extends ui.DragAnimalUI {
    private animals: Laya.Image[] = new Array<Laya.Image>(); // 所有动物图片
    private animalPos: any = {}; // 所有动物的初始位置
    private dragedNumber: number = 0; // 拖拽完成的动物数量
    private curAnimal: string = null; // 当前匹配的动物
    constructor() {
        super(); 
        this.hideSmallPic();
    }   

    // 重置游戏为初始状态
    public reset() {
        this.dragedNumber = 0;
        this.curAnimal = null;
        this.hideSmallPic();
        for(let animal of this.animals) {
            animal.pos(this.animalPos[animal.skin].x, this.animalPos[animal.skin].y);
            animal.width = this.animalPos[animal.skin].width;
            animal.height = this.animalPos[animal.skin].height;
            animal.visible = true;
            animal.on(Laya.Event.CLICK, this, this.match, [animal]);
        }
    }

    // 初始化
    public init() {
        this.animals.push(this.elephant1);
        this.animals.push(this.elephant2);
        this.animals.push(this.snake1);
        this.animals.push(this.snake2);
        this.animals.push(this.snake3);
        this.animals.push(this.spider1);
        this.animals.push(this.spider2);
        this.animals.push(this.tiger1);
        this.animals.push(this.tiger2);
        
        for(let animal of this.animals) { // 记录每个动物的初始位置，初始化动物点击事件
            this.animalPos[animal.skin] = {x: animal.x, y: animal.y, width: animal.width, height: animal.height};
            animal.on(Laya.Event.CLICK, this, this.match, [animal]);
        }

        // 初始化声音
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
    }

    private match(animal: Laya.Image) { // 点击声音和图片后进行匹配
        animal.off(Laya.Event.CLICK, this, this.match);
        if(this.curAnimal != null && animal.skin.indexOf(this.curAnimal) != -1) { // 根据图片名称和动物名称进行匹配
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
            Laya.timer.once(300, this, function() {
                animal.on(Laya.Event.CLICK, this, this.match, [animal]);
            });
        }
        if(this.dragedNumber == 9) { // 如果动物全部匹配完成，播放完成音效结束游戏
            Laya.timer.once(800, this, function() {
                this.replayBtn.skin = "common/replay-abled.png";
                Laya.SoundManager.playSound("res/audio/drag-all-success.mp3", 1);
            });
        }
    }

    // 隐藏动物小图片
    private hideSmallPic() {
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
}