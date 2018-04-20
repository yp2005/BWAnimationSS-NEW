// 程序入口，本工程仅用于切换各个动画进行测试

// 游戏名称，修改这个变量值来切换不同游戏
let gameName = "dragAnimal"; 

if(gameName == "spotlight") {
    // 聚光灯游戏
    new SpotlightShowPicture();
}
else if(gameName == "runrace") {
    //赛跑游戏
    new RunRace();
}
else if(gameName == "bubbleanimal") {
    //泡泡游戏
    new BubbleAnimal();
}
else if(gameName == "dragAnimal") {
    //拖拽游戏
    new DragAnimal();
}