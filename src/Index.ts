// 程序入口，本工程仅用于切换各个动画进行测试

// 游戏名称，修改这个变量值来切换不同游戏
let gameName = "spotlight"; 

 if(gameName == "spotlight") {
    // 聚光灯游戏
    new SpotlightShowPicture();
}
// else if(gameName == "spider") {
//     // 蜘蛛游戏
//     let config: any = {
//         gameModel: false, // 是否游戏模式，游戏模式不显示配置按钮
//         word: "happy",
//         wordNum: 3
//     };
//     new SpiderAndWord(config);
// }