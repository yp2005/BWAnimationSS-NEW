
import View=laya.ui.View;
import Dialog=laya.ui.Dialog;
module ui {
    export class BubbleAnimalUI extends View {
		public bg:Laya.Image;
		public replayon:Laya.Image;
		public replaydown:Laya.Image;
		public polly:Laya.Image;

        public static  uiView:any ={"type":"View","props":{"width":1024,"height":768},"child":[{"type":"Image","props":{"width":1024,"var":"bg","skin":"BubbleAnimal/bg1.png","height":768}},{"type":"Image","props":{"y":700,"x":845,"var":"replayon","skin":"BubbleAnimal/replay-abled.png"}},{"type":"Image","props":{"y":700,"x":845,"var":"replaydown","skin":"BubbleAnimal/replay-disabled.png"}},{"type":"Image","props":{"y":52,"x":868,"var":"polly","skin":"BubbleAnimal/polly2.png"}},{"type":"Image","props":{"y":421,"x":42,"skin":"BubbleAnimal/ani1-2.png","name":"ani1-2"}},{"type":"Image","props":{"y":459,"x":216,"skin":"BubbleAnimal/ani2-2.png","name":"ani2-2"}},{"type":"Image","props":{"y":498,"x":419,"skin":"BubbleAnimal/ani3-2.png","name":"ani3-2"}},{"type":"Image","props":{"y":495,"x":602,"skin":"BubbleAnimal/ani4-2.png","name":"ani4-2"}},{"type":"Image","props":{"y":382,"x":721,"skin":"BubbleAnimal/ani5-2.png","name":"ani5-2"}},{"type":"Image","props":{"y":453,"x":762,"skin":"BubbleAnimal/ani5-1.png","name":"ani5-1"}},{"type":"Image","props":{"y":482,"x":53,"skin":"BubbleAnimal/ani1-1.png","name":"ani1-1"}},{"type":"Image","props":{"y":505,"x":262,"skin":"BubbleAnimal/ani2-1.png","name":"ani2-1"}},{"type":"Image","props":{"y":565,"x":419,"skin":"BubbleAnimal/ani3-1.png","name":"ani3-1"}},{"type":"Image","props":{"y":559,"x":602,"skin":"BubbleAnimal/ani4-1.png","name":"ani4-1"}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.BubbleAnimalUI.uiView);

        }

    }
}

module ui {
    export class DragAnimalUI extends View {

        public static  uiView:any ={"type":"View","props":{"width":1024,"height":768}};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.DragAnimalUI.uiView);

        }

    }
}

module ui {
    export class RunRaceUI extends View {
		public bg:Laya.Image;
		public readygo:Laya.Image;
		public winner:Laya.Image;
		public btnbox:Laya.Box;
		public replayon:Laya.Image;
		public replaydown:Laya.Image;

        public static  uiView:any ={"type":"View","props":{"width":1024,"height":768},"child":[{"type":"Image","props":{"width":1024,"var":"bg","skin":"RunRace/bg.png","height":768}},{"type":"Image","props":{"var":"readygo","skin":"RunRace/start.png","centerY":0,"centerX":0}},{"type":"Image","props":{"y":126,"x":106,"skin":"RunRace/fans-robbit-1.png","name":"fans1"}},{"type":"Image","props":{"y":146,"x":241,"skin":"RunRace/fans-cat-1.png","name":"fans2"}},{"type":"Image","props":{"y":124,"x":390,"skin":"RunRace/fans-robbit-1.png","name":"fans3"}},{"type":"Image","props":{"y":122,"x":684,"skin":"RunRace/fans-robbit-1.png","name":"fans4"}},{"type":"Image","props":{"y":146,"x":528,"skin":"RunRace/fans-cat-1.png","name":"fans5"}},{"type":"Image","props":{"y":148,"x":830,"skin":"RunRace/fans-cat-1.png","name":"fans6"}},{"type":"Image","props":{"y":367,"x":5,"skin":"RunRace/player1.png","pivotY":20,"pivotX":-30,"name":"player1"}},{"type":"Image","props":{"y":589,"x":4,"skin":"RunRace/player2.png","pivotY":20,"pivotX":-30,"name":"player2"}},{"type":"Image","props":{"y":293,"x":3,"skin":"RunRace/player3.png","pivotY":15,"pivotX":-40,"name":"player3"}},{"type":"Image","props":{"y":441,"x":3,"skin":"RunRace/player4.png","pivotY":20,"pivotX":-40,"name":"player4"}},{"type":"Image","props":{"y":516,"x":6,"skin":"RunRace/player5.png","pivotX":-5,"name":"player5"}},{"type":"Image","props":{"y":280,"x":920,"visible":false,"var":"winner","skin":"RunRace/winner.png"}},{"type":"Box","props":{"y":657,"x":0,"width":1024,"var":"btnbox","height":105},"child":[{"type":"Image","props":{"y":-7,"x":540,"skin":"RunRace/player1-btn1.png","name":"btn-player1"}},{"type":"Image","props":{"y":-10,"x":32,"skin":"RunRace/player2-btn1.png","name":"btn-player2"}},{"type":"Image","props":{"y":8,"x":710,"skin":"RunRace/player3-btn1.png","name":"btn-player3"}},{"type":"Image","props":{"y":5,"x":370,"skin":"RunRace/player4-btn1.png","name":"btn-player4"}},{"type":"Image","props":{"y":9,"x":200,"skin":"RunRace/player5-btn1.png","name":"btn-player5"}},{"type":"Image","props":{"y":11,"x":540,"skin":"RunRace/player1-btn2.png","name":"btn2-player1"}},{"type":"Image","props":{"y":6,"x":32,"skin":"RunRace/player2-btn2.png","name":"btn2-player2"}},{"type":"Image","props":{"y":23,"x":710,"skin":"RunRace/player3-btn2.png","name":"btn2-player3"}},{"type":"Image","props":{"y":19,"x":370,"skin":"RunRace/player4-btn2.png","name":"btn2-player4"}},{"type":"Image","props":{"y":23,"x":200,"skin":"RunRace/player5-btn2.png","name":"btn2-player5"}},{"type":"Image","props":{"y":34,"x":891,"visible":false,"var":"replayon","skin":"RunRace/replay1.png"}},{"type":"Image","props":{"y":51,"x":891,"var":"replaydown","skin":"RunRace/replay2.png"}}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.RunRaceUI.uiView);

        }

    }
}

module ui {
    export class SpotlightShowPictureUI extends View {
		public spotlight:Laya.Image;
		public animals:Laya.Box;
		public wellDone:laya.display.Text;
		public replayBtn:Laya.Image;

        public static  uiView:any ={"type":"View","props":{"width":1024,"height":768},"child":[{"type":"Image","props":{"y":0,"x":0,"skin":"SpotlightShowPicture/mainBG.png"}},{"type":"Image","props":{"y":30,"x":220,"var":"spotlight","skin":"SpotlightShowPicture/spotlight.png"}},{"type":"Box","props":{"y":155,"x":194,"var":"animals"},"child":[{"type":"Image","props":{"y":440,"x":424,"skin":"SpotlightShowPicture/crocodile.png","name":"item0"}},{"type":"Image","props":{"y":379,"x":590,"skin":"SpotlightShowPicture/crocodile.png","name":"item1"}},{"type":"Image","props":{"y":316,"x":17,"skin":"SpotlightShowPicture/elephant.png","name":"item2"}},{"type":"Image","props":{"y":121,"x":91,"skin":"SpotlightShowPicture/elephant.png","name":"item3"}},{"type":"Image","props":{"y":142,"x":497,"skin":"SpotlightShowPicture/snake.png","name":"item4"}},{"type":"Image","props":{"y":460,"skin":"SpotlightShowPicture/snake.png","name":"item5"}},{"type":"Image","props":{"y":96,"x":700,"skin":"SpotlightShowPicture/spider.png","name":"item6"}},{"type":"Image","props":{"y":96,"x":704,"skin":"SpotlightShowPicture/spider.png","name":"item7"}},{"type":"Image","props":{"y":53,"x":293,"skin":"SpotlightShowPicture/tiger.png","name":"item8"}},{"type":"Image","props":{"y":322,"x":178,"skin":"SpotlightShowPicture/tiger.png","name":"item9"}}]},{"type":"Text","props":{"y":341,"x":454,"wordWrap":true,"width":116,"var":"wellDone","valign":"top","text":"Well Done","strokeColor":"#5CB6CB","stroke":5,"height":85,"fontSize":40,"font":"FF","color":"#FFC82C","bold":false,"align":"center"}},{"type":"Image","props":{"y":698,"x":841,"var":"replayBtn","skin":"common/replay-disabled.png"}}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("Text",laya.display.Text);

            super.createChildren();
            this.createView(ui.SpotlightShowPictureUI.uiView);

        }

    }
}
