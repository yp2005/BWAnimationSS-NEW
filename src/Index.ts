// 程序入口，本工程仅用于切换各个动画进行测试

// 游戏名称，修改这个变量值来切换不同游戏，mole：打地鼠，fish：拍鱼，balloon：拍气球，spider：蜘蛛和单词
let gameName = "spider"; 

// if(gameName == "mole") {
//     //打地鼠游戏
//     let config: any = {
//         gameModel: false, // 是否游戏模式，游戏模式不显示配置按钮
//         game: "word", // word 地鼠单词，picture 图片
//         words: ["red", "pink", "orange", "green", "black", "white"],
//         pictures: ["picture1.png", "picture1.png", "picture1.png"],
//     };
//     new HitMole(config);
// }
// else if(gameName == "spider") {
//     // 蜘蛛游戏
//     let config: any = {
//         gameModel: false, // 是否游戏模式，游戏模式不显示配置按钮
//         word: "happy",
//         wordNum: 3
//     };
//     new SpiderAndWord(config);
// }