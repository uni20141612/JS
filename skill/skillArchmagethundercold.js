const sktc = {};

sktc.getskillArchmagethundercold = function (skillname){
    var tcret = -1;
    switch(skillname){
        case "아이스 에이지":
        case "아이스에이지":
        case "아에":
        case "아오키지":
            tcret = 0;
            break;
        case "썬더 브레이크":
        case "썬더브레이크":
        case "썬브":
        case "브레이크":
            tcret = 1;
            break;
        case "스피릿 오브 스노우":
        case "스피릿오브스노우":
        case "스피릿":
        case "스오스":
            tcret = 2;
            break;
        case "주피터 썬더":
        case "주피터썬더":
        case "주피터":
        case "주썬":
            tcret = 3;
            break;
        /*case "":
            tcret = 4;
            break;
        case "":
            tcret = 5;
            break;
        case "":
            tcret = 6;
            break;
        case "":
            tcret = 7;
            break;
        case "":
            tcret = 8;
            break;
        case "":
            tcret = 9;
            break;
        case "":
            tcret = 10;
            break;
        case "":
            tcret = 11;
            break;
        case "":
            tcret = 12;
            break;
        case "":
            tcret = 13;
            break;
        case "":
            tcret = 14;
            break;
        case "":
            tcret = 15;
            break;
        case "":
            tcret = 16;
            break;
        case "":
            tcret = 17;
            break;
        case "":
            tcret = 18;
            break;
        case "":
            tcret = 19;
            break;*/
    }
    return tcret;
};
sktc.getskillnameArchmagethundercold = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "아이스 에이지";
            break;
        case 1:
            rep = "썬더 브레이크";
            break;
        case 2:
            rep = "스피릿 오브 스노우";
            break;
        case 3:
            rep = "주피터 썬더";
            break;
        case 4:
            rep = "";
            break;
        case 5:
            rep = "";
            break;
        case 6:
            rep = "";
            break;
        case 7:
            rep = "";
            break;
        case 8:
            rep = "";
            break;
        case 9:
            rep = "";
            break;
        case 10:
            rep = "";
            break;
        case 11:
            rep = "";
            break;
        case 12:
            rep = "";
            break;
        case 13:
            rep = "";
            break;
        case 14:
            rep = "";
            break;
        case 15:
            rep = "";
            break;
        case 16:
            rep = "";
            break;
        case 17:
            rep = "";
            break;
        case 18:
            rep = "";
            break;
        case 19:
            rep = "";
            break;
    }
    return rep;
};
sktc.getskilldesc1Archmagethundercold = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "15명,1100%,10번 공격/ 해당 범위를 15초간 얼림/ 쿨60초";
            break;
        case 1:
            rep = "12명,1760%,12번 번개 8번/ 전방으로 전진/ 쿨40초";
            break;
        case 2:
            rep = "30초간 10명,880%,9번 공격/ 빙결 중첩/ 쿨120초";
            break;
        case 3:
            rep = "하단 참조";
            break;
        case 4:
            rep = "";
            break;
        case 5:
            rep = "";
            break;
        case 6:
            rep = "";
            break;
        case 7:
            rep = "";
            break;
        case 8:
            rep = "";
            break;
        case 9:
            rep = "";
            break;
        case 10:
            rep = "";
            break;
        case 11:
            rep = "";
            break;
        case 12:
            rep = "";
            break;
        case 13:
            rep = "";
            break;
        case 14:
            rep = "";
            break;
        case 15:
            rep = "";
            break;
        case 16:
            rep = "";
            break;
        case 17:
            rep = "";
            break;
        case 18:
            rep = "";
            break;
        case 19:
            rep = "";
            break;
    }
    return rep;
};
sktc.getskilldesc2Archmagethundercold = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "지면 위의 적 일정 시간마다 275%,3번 공격, 빙결 중첩";
            break;
        case 1:
            rep = "중첩해서 번개를 맞을 때마다 번개의 최종데미지 20% 감소";
            break;
        case 2:
            rep = "1명 공격시 1870%로 공격/ 빙결 3번 중첩";
            break;
        case 3:
            rep = "공격 5회당 빙결 1중첩씩 소모";
            break;
        case 4:
            rep = "";
            break;
        case 5:
            rep = "";
            break;
        case 6:
            rep = "";
            break;
        case 7:
            rep = "";
            break;
        case 8:
            rep = "";
            break;
        case 9:
            rep = "";
            break;
        case 10:
            rep = "";
            break;
        case 11:
            rep = "";
            break;
        case 12:
            rep = "";
            break;
        case 13:
            rep = "";
            break;
        case 14:
            rep = "";
            break;
        case 15:
            rep = "";
            break;
        case 16:
            rep = "";
            break;
        case 17:
            rep = "";
            break;
        case 18:
            rep = "";
            break;
        case 19:
            rep = "";
            break;
    }
    return rep;
};
sktc.getskilldesc3Archmagethundercold = function (skillcode){
    rep = "";
    switch(skillcode){
        case 3:
            rep = "MP 750 소비, 오브에 닿은 적에 일정 간격마다 660%의 데미지로 8번 공격하는 감전 발생, 최대 감전 횟수 30회, 감전 5회마다 빙결 중첩 감소\n\n감전된 적은 주피터 썬더를 제외한 번개 속성 공격에 최종 데미지 12% 증가된 피해 받음\n\n감전된 적 주위에 전류가 흘러 일정 간격마다 2명의 적을 440%의 데미지로 4번 공격\n\n재사용 대기시간 : 120초, 오브 소멸 시 발동되지 못한 감전 횟수당 재사용 대기시간 3.4초 감소";
            break;
        case 4:
            rep = "";
            break;
        case 5:
            rep = "";
            break;
        case 6:
            rep = "";
            break;
        case 7:
            rep = "";
            break;
        case 8:
            rep = "";
            break;
        case 9:
            rep = "";
            break;
    }
    return rep;
};
sktc.getskillimage1Archmagethundercold = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "https://i.imgur.com/Bx8Gpjs.png";
            break;
        case 1:
            rep = "https://i.imgur.com/Q1ZJUg2.png";
            break;
        case 2:
            rep = "https://i.imgur.com/DiI46FH.png";
            break;
        case 3:
            rep = "https://i.imgur.com/1p4HNlf.png";
            break;
        case 4:
            rep = "";
            break;
        case 5:
            rep = "";
            break;
        case 6:
            rep = "";
            break;
        case 7:
            rep = "";
            break;
        case 8:
            rep = "";
            break;
        case 9:
            rep = "";
            break;
        case 10:
            rep = "";
            break;
        case 11:
            rep = "";
            break;
        case 12:
            rep = "";
            break;
        case 13:
            rep = "";
            break;
        case 14:
            rep = "";
            break;
        case 15:
            rep = "";
            break;
        case 16:
            rep = "";
            break;
        case 17:
            rep = "";
            break;
        case 18:
            rep = "";
            break;
        case 19:
            rep = "";
            break;
    }
    return rep;
};
sktc.getskillimage2Archmagethundercold = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "https://i.imgur.com/YEM7Xfi.png";
            break;
        case 1:
            rep = "https://i.imgur.com/Ee8HqHH.png";
            break;
        case 2:
            rep = "https://i.imgur.com/5euZcnt.png";
            break;
        case 3:
            rep = "https://i.imgur.com/PCO38gp.png";
            break;
        case 4:
            rep = "";
            break;
        case 5:
            rep = "";
            break;
        case 6:
            rep = "";
            break;
        case 7:
            rep = "";
            break;
        case 8:
            rep = "";
            break;
        case 9:
            rep = "";
            break;
        case 10:
            rep = "";
            break;
        case 11:
            rep = "";
            break;
        case 12:
            rep = "";
            break;
        case 13:
            rep = "";
            break;
        case 14:
            rep = "";
            break;
        case 15:
            rep = "";
            break;
        case 16:
            rep = "";
            break;
        case 17:
            rep = "";
            break;
        case 18:
            rep = "";
            break;
        case 19:
            rep = "";
            break;
    }
    return rep;
};

module.exports = sktc;