const ska = {};

ska.getskillAdele = function (skillname){
    var aret = -1;
    switch(skillname){
        case "루인":
            aret = 0;
            break;
        case "인피니트":
        case "인피니티":
        case "인피":
            aret = 1;
            break;
        case "리스토어":
        case "리스":
            aret = 2;
            break;
        case "스톰":
            aret = 3;
            break;
        case "디바이드":
        case "디바":
        case "그 스킬":
        case "그스킬":
            aret = 4;
            break;
        /*case "":
            aret = 5;
            break;
        case "":
            aret = 6;
            break;
        case "":
            aret = 7;
            break;
        case "":
            aret = 8;
            break;
        case "":
            aret = 9;
            break;
        case "":
            aret = 10;
            break;
        case "":
            aret = 11;
            break;
        case "":
            aret = 12;
            break;
        case "":
            aret = 13;
            break;
        case "":
            aret = 14;
            break;
        case "":
            aret = 15;
            break;
        case "":
            aret = 16;
            break;
        case "":
            aret = 17;
            break;
        case "":
            aret = 18;
            break;
        case "":
            aret = 19;
            break;*/
    }
    return aret;
};
ska.getskillnameAdele = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "루인";
            break;
        case 1:
            rep = "인피니트";
            break;
        case 2:
            rep = "리스토어";
            break;
        case 3:
            rep = "스톰";
            break;
        case 4:
            rep = "디바이드";
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
ska.getskilldesc1Adele = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "15명 공격/ 소환중 일정시간마다 550%,6번 공격 12번 발동";
            break;
        case 1:
            rep = "30초간 770%,2번 공격 18자루 에테르소드 창조/ 쿨180초";
            break;
        case 2:
            rep = "하단 참조";
            break;
        case 3:
            rep = "14초간 일정주기마다 주변 7명,550%,2번 자동 공격/ 쿨90초";
            break;
        case 4:
            rep = "MP 40 소비, 최대 7명의 적을 375% 데미지로 6번 공격";
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
ska.getskilldesc2Adele = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "소환후 990%,9번 공격 8번 발동/ 쿨60초";
            break;
        case 1:
            rep = "시전 및 해제 동작 중 무적/ 5%확률 에테르결정 생성";
            break;
        case 2:
            rep = "아델 극딜의 핵심 버프";
            break;
        case 3:
            rep = "소멸된 에테르소드 1쌍초과시 1쌍당 공격횟수 2번 증가";
            break;
        case 4:
            rep = "[트리거 스킬] 거대한 대검을 생성하여 전방의 적을 절단한다.";
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
ska.getskilldesc3Adele = function (skillcode){
    rep = "";
    switch(skillcode){
        case 2:
            rep = "타버린 마력 회로를 일시적으로 복원해 과거의 마력 날개를 부활시킨다.\n리스토어의 공격은 공격 무시 및 공격 반사 상태의 적에게도 피해를 입힐 수 있고 스킬을 다시 사용하면 즉시 종료된다.\n\n시전 및 시전 후 초당 최대 MP의 2% 소비\n\n30초 동안 데미지 45%, 에테르 획득량 80%, 오더로 명령할 수 있는 에테르 소드 2개 증가\n\n일정 시간마다 마력 날개를 펼쳐 최대 6명의 적을 1980%의 데미지로 3번 공격하고 자신을 포함한 파티원 최대 HP의 10.5% 회복\n\n재사용 대기시간 180초";
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
ska.getskillimage1Adele = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "https://i.imgur.com/c6J2rXF.png";
            break;
        case 1:
            rep = "https://i.imgur.com/gCthhiE.png";
            break;
        case 2:
            rep = "https://i.imgur.com/mfsvc2Y.png";
            break;
        case 3:
            rep = "https://i.imgur.com/21l8iX3.png";
            break;
        case 4:
            rep = "https://i.imgur.com/iKKAZIz.png";
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
ska.getskillimage2Adele = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "https://i.imgur.com/1kjQWSo.png";
            break;
        case 1:
            rep = "https://i.imgur.com/mmH1xqc.png";
            break;
        case 2:
            rep = "https://i.imgur.com/9IYKPJk.png";
            break;
        case 3:
            rep = "https://i.imgur.com/kUTj5Cg.png";
            break;
        case 4:
            rep = "https://i.imgur.com/H4HBSeR.png";
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

module.exports = ska;