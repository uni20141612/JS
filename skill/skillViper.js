const skv = {};

skv.getskillViper = function (skillname){
    var vret = -1;
    switch(skillname){
        case "트랜스 폼":
        case "트랜스폼":
        case "트폼":
        case "초사이어인":
            vret = 0;
            break;
        case "서펜트 스크류":
        case "서펜트스크류":
        case "서펜트":
        case "서스":
            vret = 1;
            break;
        case "퓨리어스 차지":
        case "퓨리어스차지":
        case "퓨리어스":
        case "퓨차":
            vret = 2;
            break;
        case "하울링 피스트":
        case "하울링피스트":
        case "하울링":
        case "하피":
            vret = 3;
            break;
        /*case "":
            vret = 4;
            break;
        case "":
            vret = 5;
            break;
        case "":
            vret = 6;
            break;
        case "":
            vret = 7;
            break;
        case "":
            vret = 8;
            break;
        case "":
            vret = 9;
            break;
        case "":
            vret = 10;
            break;
        case "":
            vret = 11;
            break;
        case "":
            vret = 12;
            break;
        case "":
            vret = 13;
            break;
        case "":
            vret = 14;
            break;
        case "":
            vret = 15;
            break;
        case "":
            vret = 16;
            break;
        case "":
            vret = 17;
            break;
        case "":
            vret = 18;
            break;
        case "":
            vret = 19;
            break;*/
    }
    return vret;
};
skv.getskillnameViper = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "트랜스 폼";
            break;
        case 1:
            rep = "서펜트 스크류";
            break;
        case 2:
            rep = "퓨리어스 차지";
            break;
        case 3:
            rep = "하울링 피스트";
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
skv.getskilldesc1Viper = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "하단 참조";
            break;
        case 1:
            rep = "초당 에너지 60, 공격마다 에너지 85/ 주변 10명,780%,3번 자동 공격";
            break;
        case 2:
            rep = "바다의 기운 1개/ 8명,1320%,10번 공격, 보뎀 30%/ 쿨0.5초";
            break;
        case 3:
            rep = "에너지 1250/ 일정간격마다 8명,935%,6번 공격/ 쿨90초";
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
skv.getskilldesc2Viper = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "에너지 오브 시전 동작 중 무적";
            break;
        case 1:
            rep = "보스 공격시 소모에너지 70% 감소/ 쿨3초";
            break;
        case 2:
            rep = "바다의 기운은 8초마다 1개씩 준비, 최대 6개";
            break;
        case 3:
            rep = "마무리 15명,1155%,10번 충격 14번 발동/ 동작중 무적";
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
skv.getskilldesc3Viper = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "MP 1000 소비, 에너지 완충\n80초 동안 최종 데미지 26% 증가\n\n에너지 오브 최대 3회까지 사용 가능, 에너지 오브는 일정 시간마다 최대 10명의 적을 990%로 3번 공격, 추가 크리티컬 확률 50%, 몬스터 방어율 50% 추가 무시\n\n재사용 대기시간 180초";
            break;
        case 1:
            rep = "";
            break;
        case 2:
            rep = "";
            break;
        case 3:
            rep = "";
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
skv.getskillimage1Viper = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "https://i.imgur.com/HbeIzzI.png";
            break;
        case 1:
            rep = "https://i.imgur.com/kbXPeYW.png";
            break;
        case 2:
            rep = "https://i.imgur.com/vQvvFES.png";
            break;
        case 3:
            rep = "https://i.imgur.com/9btOYhS.png";
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
skv.getskillimage2Viper = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "https://i.imgur.com/Cytm5VL.png";
            break;
        case 1:
            rep = "https://i.imgur.com/aPp15sn.png";
            break;
        case 2:
            rep = "https://i.imgur.com/bn6xt24.png";
            break;
        case 3:
            rep = "https://i.imgur.com/YkNHcyc.png";
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

module.exports = skv;