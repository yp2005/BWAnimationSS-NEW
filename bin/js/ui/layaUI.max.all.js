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
var View = laya.ui.View;
var Dialog = laya.ui.Dialog;
var ui;
(function (ui) {
    var BubbleAnimalUI = /** @class */ (function (_super) {
        __extends(BubbleAnimalUI, _super);
        function BubbleAnimalUI() {
            return _super.call(this) || this;
        }
        BubbleAnimalUI.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.createView(ui.BubbleAnimalUI.uiView);
        };
        BubbleAnimalUI.uiView = { "type": "View", "props": { "width": 1024, "height": 768 }, "child": [{ "type": "Image", "props": { "width": 1024, "var": "bg", "skin": "BubbleAnimal/bg1.png", "height": 768 } }, { "type": "Image", "props": { "y": 700, "x": 845, "var": "replayon", "skin": "BubbleAnimal/replayon.png" } }, { "type": "Image", "props": { "y": 700, "x": 845, "var": "replaydown", "skin": "BubbleAnimal/replaydown.png" } }, { "type": "Image", "props": { "y": 52, "x": 936, "var": "polly", "skin": "BubbleAnimal/polly3.png", "pivotX": 68 } }, { "type": "Image", "props": { "y": 171, "x": 82, "skin": "BubbleAnimal/ani1-2.png", "name": "ani1-2" } }, { "type": "Image", "props": { "y": 238, "x": 259, "skin": "BubbleAnimal/ani3-2.png", "name": "ani3-2" } }, { "type": "Image", "props": { "y": 205, "x": 682, "skin": "BubbleAnimal/ani4-2.png", "name": "ani4-2" } }, { "type": "Image", "props": { "y": 132, "x": 441, "skin": "BubbleAnimal/ani2-2.png", "name": "ani2-2" } }, { "type": "Image", "props": { "y": 203, "x": 481, "skin": "BubbleAnimal/ani2-1.png", "name": "ani2-1" } }, { "type": "Image", "props": { "y": 231, "x": 93, "skin": "BubbleAnimal/ani1-1.png", "name": "ani1-1" } }, { "type": "Image", "props": { "y": 305, "x": 259, "skin": "BubbleAnimal/ani3-1.png", "name": "ani3-1" } }, { "type": "Image", "props": { "y": 268, "x": 682, "skin": "BubbleAnimal/ani4-1.png", "name": "ani4-1" } }] };
        return BubbleAnimalUI;
    }(View));
    ui.BubbleAnimalUI = BubbleAnimalUI;
})(ui || (ui = {}));
(function (ui) {
    var DragAnimalUI = /** @class */ (function (_super) {
        __extends(DragAnimalUI, _super);
        function DragAnimalUI() {
            return _super.call(this) || this;
        }
        DragAnimalUI.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.createView(ui.DragAnimalUI.uiView);
        };
        DragAnimalUI.uiView = { "type": "View", "props": { "width": 1024, "height": 768 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "skin": "DragAnimal/main-bg.png" } }, { "type": "Image", "props": { "y": 666, "x": 67, "skin": "DragAnimal/bottom-bg.png" } }, { "type": "Image", "props": { "y": 666, "x": 306, "skin": "DragAnimal/bottom-bg.png" } }, { "type": "Image", "props": { "y": 666, "x": 545, "skin": "DragAnimal/bottom-bg.png" } }, { "type": "Image", "props": { "y": 666, "x": 784, "skin": "DragAnimal/bottom-bg.png" } }, { "type": "Image", "props": { "y": 672, "x": 73, "var": "elephantAudio", "skin": "DragAnimal/audio.png" } }, { "type": "Image", "props": { "y": 673, "x": 313, "var": "snakeAudio", "skin": "DragAnimal/audio.png" } }, { "type": "Image", "props": { "y": 673, "x": 553, "var": "spiderAudio", "skin": "DragAnimal/audio.png" } }, { "type": "Image", "props": { "y": 674, "x": 791, "var": "tigerAudio", "skin": "DragAnimal/audio.png" } }, { "type": "Image", "props": { "y": 570, "x": 858, "var": "replayBtn", "skin": "common/replay-disabled.png" } }, { "type": "Image", "props": { "y": 512, "x": 10, "var": "tiger1", "skin": "DragAnimal/tiger1.png" } }, { "type": "Image", "props": { "y": 453, "x": 611, "width": 46, "var": "snake2", "skin": "DragAnimal/snake2.png", "height": 54 } }, { "type": "Image", "props": { "y": 362, "x": 284, "var": "elephant1", "skin": "DragAnimal/elephant1.png" } }, { "type": "Image", "props": { "y": 376, "x": 69, "var": "elephant2", "skin": "DragAnimal/elephant2.png" } }, { "type": "Image", "props": { "y": 535, "x": 457, "var": "snake1", "skin": "DragAnimal/snake1.png" } }, { "type": "Image", "props": { "y": 569, "x": 244, "var": "snake3", "skin": "DragAnimal/snake3.png" } }, { "type": "Image", "props": { "y": 506, "x": 951, "var": "spider1", "skin": "DragAnimal/spider1.png" } }, { "type": "Image", "props": { "y": 341, "x": 907, "var": "spider2", "skin": "DragAnimal/spider2.png" } }, { "type": "Image", "props": { "y": 401, "x": 737, "var": "tiger2", "skin": "DragAnimal/tiger2.png" } }, { "type": "Image", "props": { "y": 674, "x": 97, "width": 72, "var": "elephant1Small", "skin": "DragAnimal/elephant1.png", "height": 52 } }, { "type": "Image", "props": { "y": 679, "x": 166, "width": 68, "var": "elephant2Small", "skin": "DragAnimal/elephant2.png", "height": 45 } }, { "type": "Image", "props": { "y": 690, "x": 388, "width": 40, "var": "snake1Small", "skin": "DragAnimal/snake1.png", "height": 45 } }, { "type": "Image", "props": { "y": 677, "x": 344, "width": 37, "var": "snake2Small", "skin": "DragAnimal/snake2.png", "height": 45 } }, { "type": "Image", "props": { "y": 669, "x": 403, "width": 71, "var": "snake3Small", "skin": "DragAnimal/snake3.png", "height": 41 } }, { "type": "Image", "props": { "y": 684, "x": 600, "width": 34, "var": "spider1Small", "skin": "DragAnimal/spider1.png", "height": 37 } }, { "type": "Image", "props": { "y": 658, "x": 639, "width": 68, "var": "spider2Small", "skin": "DragAnimal/spider2.png", "height": 71 } }, { "type": "Image", "props": { "y": 668, "x": 883, "width": 70, "var": "tiger1Small", "skin": "DragAnimal/tiger1.png", "height": 51 } }, { "type": "Image", "props": { "y": 686, "x": 821, "width": 64, "var": "tiger2Small", "skin": "DragAnimal/tiger2.png", "height": 50 } }] };
        return DragAnimalUI;
    }(View));
    ui.DragAnimalUI = DragAnimalUI;
})(ui || (ui = {}));
(function (ui) {
    var RunRaceUI = /** @class */ (function (_super) {
        __extends(RunRaceUI, _super);
        function RunRaceUI() {
            return _super.call(this) || this;
        }
        RunRaceUI.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.createView(ui.RunRaceUI.uiView);
        };
        RunRaceUI.uiView = { "type": "View", "props": { "width": 1024, "height": 768 }, "child": [{ "type": "Image", "props": { "width": 1024, "var": "bg", "skin": "RunRace/bg4.png", "height": 768 } }, { "type": "Image", "props": { "var": "readygo", "skin": "RunRace/start.png", "centerY": 0, "centerX": 0 } }, { "type": "Image", "props": { "y": 126, "x": 106, "skin": "RunRace/fans-robbit-1.png", "name": "fans1" } }, { "type": "Image", "props": { "y": 146, "x": 241, "skin": "RunRace/fans-cat-1.png", "name": "fans2" } }, { "type": "Image", "props": { "y": 124, "x": 390, "skin": "RunRace/fans-robbit-1.png", "name": "fans3" } }, { "type": "Image", "props": { "y": 122, "x": 684, "skin": "RunRace/fans-robbit-1.png", "name": "fans4" } }, { "type": "Image", "props": { "y": 146, "x": 528, "skin": "RunRace/fans-cat-1.png", "name": "fans5" } }, { "type": "Image", "props": { "y": 148, "x": 830, "skin": "RunRace/fans-cat-1.png", "name": "fans6" } }, { "type": "Image", "props": { "y": 390, "x": 5, "skin": "RunRace/player1.png", "pivotY": 20, "pivotX": -30, "name": "player1" } }, { "type": "Image", "props": { "y": 579, "x": 4, "skin": "RunRace/player2.png", "pivotY": 20, "pivotX": -30, "name": "player2" } }, { "type": "Image", "props": { "y": 303, "x": 3, "skin": "RunRace/player3.png", "pivotY": 15, "pivotX": -40, "name": "player3" } }, { "type": "Image", "props": { "y": 495, "x": 6, "skin": "RunRace/player4.png", "pivotX": -5, "name": "player4" } }, { "type": "Image", "props": { "y": 280, "x": 920, "visible": false, "var": "winner", "skin": "RunRace/winner.png" } }, { "type": "Box", "props": { "y": 657, "x": 0, "width": 1024, "var": "btnbox", "height": 105 }, "child": [{ "type": "Image", "props": { "y": -7, "x": 490, "skin": "RunRace/player1-btn1.png", "name": "btn-player1" } }, { "type": "Image", "props": { "y": -10, "x": 32, "skin": "RunRace/player2-btn1.png", "name": "btn-player2" } }, { "type": "Image", "props": { "y": 8, "x": 720, "skin": "RunRace/player3-btn1.png", "name": "btn-player3" } }, { "type": "Image", "props": { "y": 9, "x": 260, "skin": "RunRace/player4-btn1.png", "name": "btn-player4" } }, { "type": "Image", "props": { "y": 11, "x": 490, "skin": "RunRace/player1-btn2.png", "name": "btn2-player1" } }, { "type": "Image", "props": { "y": 6, "x": 32, "skin": "RunRace/player2-btn2.png", "name": "btn2-player2" } }, { "type": "Image", "props": { "y": 23, "x": 720, "skin": "RunRace/player3-btn2.png", "name": "btn2-player3" } }, { "type": "Image", "props": { "y": 23, "x": 260, "skin": "RunRace/player4-btn2.png", "name": "btn2-player4" } }, { "type": "Image", "props": { "y": 34, "x": 891, "visible": false, "var": "replayon", "skin": "RunRace/replay1.png" } }, { "type": "Image", "props": { "y": 51, "x": 891, "var": "replaydown", "skin": "RunRace/replay2.png" } }] }] };
        return RunRaceUI;
    }(View));
    ui.RunRaceUI = RunRaceUI;
})(ui || (ui = {}));
(function (ui) {
    var SpotlightShowPictureUI = /** @class */ (function (_super) {
        __extends(SpotlightShowPictureUI, _super);
        function SpotlightShowPictureUI() {
            return _super.call(this) || this;
        }
        SpotlightShowPictureUI.prototype.createChildren = function () {
            View.regComponent("Text", laya.display.Text);
            _super.prototype.createChildren.call(this);
            this.createView(ui.SpotlightShowPictureUI.uiView);
        };
        SpotlightShowPictureUI.uiView = { "type": "View", "props": { "width": 1024, "height": 768 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "skin": "SpotlightShowPicture/mainBG.png" } }, { "type": "Image", "props": { "y": 30, "x": 220, "var": "spotlight", "skin": "SpotlightShowPicture/spotlight.png" } }, { "type": "Box", "props": { "y": 155, "x": 194, "var": "animals" }, "child": [{ "type": "Image", "props": { "y": 440, "x": 424, "skin": "SpotlightShowPicture/crocodile.png", "name": "item0" } }, { "type": "Image", "props": { "y": 379, "x": 590, "skin": "SpotlightShowPicture/crocodile.png", "name": "item1" } }, { "type": "Image", "props": { "y": 316, "x": 17, "skin": "SpotlightShowPicture/elephant.png", "name": "item2" } }, { "type": "Image", "props": { "y": 121, "x": 91, "skin": "SpotlightShowPicture/elephant.png", "name": "item3" } }, { "type": "Image", "props": { "y": 142, "x": 497, "skin": "SpotlightShowPicture/snake.png", "name": "item4" } }, { "type": "Image", "props": { "y": 460, "skin": "SpotlightShowPicture/snake.png", "name": "item5" } }, { "type": "Image", "props": { "y": 96, "x": 700, "skin": "SpotlightShowPicture/spider.png", "name": "item6" } }, { "type": "Image", "props": { "y": 96, "x": 704, "skin": "SpotlightShowPicture/spider.png", "name": "item7" } }, { "type": "Image", "props": { "y": 53, "x": 293, "skin": "SpotlightShowPicture/tiger.png", "name": "item8" } }, { "type": "Image", "props": { "y": 322, "x": 178, "skin": "SpotlightShowPicture/tiger.png", "name": "item9" } }] }, { "type": "Text", "props": { "y": 341, "x": 454, "wordWrap": true, "width": 116, "var": "wellDone", "valign": "top", "text": "Well Done", "strokeColor": "#5CB6CB", "stroke": 5, "height": 85, "fontSize": 40, "font": "FF", "color": "#FFC82C", "bold": false, "align": "center" } }, { "type": "Image", "props": { "y": 698, "x": 841, "var": "replayBtn", "skin": "common/replay-disabled.png" } }] };
        return SpotlightShowPictureUI;
    }(View));
    ui.SpotlightShowPictureUI = SpotlightShowPictureUI;
})(ui || (ui = {}));
//# sourceMappingURL=layaUI.max.all.js.map