// 程序入口，本工程仅用于切换各个动画进行测试

// 游戏名称，修改这个变量值来切换不同游戏
let gameName = "runrace"; 

if(gameName == "spotlight") {
    // 聚光灯游戏
    new SpotlightShowPicture();
}
else if(gameName == "runrace") {
    new RunRace();
}