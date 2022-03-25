const qz = {};

qz.getQuiz = function(msg, room, sender){
    var quizrep = "";
    var quizInfo = FileStream.read('sdcard/kakao/Bots/보마봇/' + "Quiz.txt");
    var quizNum = 1, isQsolving = 0;

    if(quizInfo.indexOf(room) == -1){
        var quizwrite = quizInfo + room + "/" + quizNum + "/x\n";
        FileStream.write('sdcard/kakao/Bots/보마봇/' + "Quiz.txt", quizwrite);
    }
    else{
        var quizNumstr = quizInfo.split(room)[1].split("/")[1];
        quizNum = parseInt(quizNumstr);
        if(quizInfo.split(room)[1].split("/")[2].split("\n")[0] == "x"){
            isQsolving = 1;
        }
        else{
            var quizerase = room + "/" + quizNum + "/o\n";
            quizNum = parseInt(quizNumstr) + 1;
            if(quizNum > 5){ quizNum = 1; }
            
            quizInfo = quizInfo.replace(quizerase, '');
            quizInfo += room + "/" + quizNum + "/x\n";
            FileStream.write('sdcard/kakao/Bots/보마봇/' + "Quiz.txt", quizInfo);
        }
    }

    if(isQsolving == 0){
        quizrep = "☆";
        quizrep += this.ManQuizImage[quizNum];
        quizrep += "☆" + quizNum;
    }
    else{
        var quizAnswer = msg.split(" ")[1];
        if(quizAnswer == undefined){
            quizrep = "이 방에서는 퀴즈가 진행중입니다.";
        }
        else{
            if(quizAnswer == this.ManQuizAnswer[quizNum]){
                quizrep = sender + "님 정답입니다!! 정답은 " + quizAnswer + " 입니다!";
                quizerase = room + "/" + quizNum + "/x\n";
                quizInfo = quizInfo.replace(quizerase, '');
                quizInfo += room + "/" + quizNum + "/o\n";
                FileStream.write('sdcard/kakao/Bots/보마봇/' + "Quiz.txt", quizInfo);
            }
            else{
                quizrep = "아쉽지만 오답입니다...ㅠㅠ";
            }
        }
    }
    return quizrep;
};

qz.ManQuizImage = [
    "", //0
    "https://i.imgur.com/VoY3QCb.jpeg", //1
    "https://i.imgur.com/vi6uQYx.jpeg", //2
    "https://i.imgur.com/lkNQxSZ.jpeg", //3
    "https://i.imgur.com/kEUnkNX.jpeg", //4
    "https://i.imgur.com/Eo9sULM.jpeg", //5
    "", //6
    "", //7
    "", //8
    "", //9
    "", //10
    "", //11
    "", //12
    "", //13
    "", //14
    "", //15
    "", //16
    "", //17
    "", //18
    "", //19
];

qz.ManQuizAnswer = [
    "", //0
    "김수현", //1
    "이병헌", //2
    "황정민", //3
    "주지훈", //4
    "유해진", //5
    "", //6
    "", //7
    "", //8
    "", //9
    "", //10
    "", //11
    "", //12
    "", //13
    "", //14
    "", //15
    "", //16
    "", //17
    "", //18
    "", //19
];

module.exports = qz;