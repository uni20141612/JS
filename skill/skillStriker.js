const sks = {};

sks.getskillStriker = function (skillname){
    var sret = -1;
    switch(skillname){
        case "신뇌합일":
        case "신뇌":
        case "신":
            sret = 0;
            break;
        case "교아탄":
        case "교아":
        case "교":
            sret = 1;
            break;
        case "뇌신창격":
        case "뇌신":
        case "뇌":
            sret = 2;
            break;
        case "창뇌연격":
        case "창뇌":
        case "창":
            sret = 3;
            break;
        /*case "":
            sret = 4;
            break;
        case "":
            sret = 5;
            break;
        case "":
            sret = 6;
            break;
        case "":
            sret = 7;
            break;
        case "":
            sret = 8;
            break;
        case "":
            sret = 9;
            break;
        case "":
            sret = 10;
            break;
        case "":
            sret = 11;
            break;
        case "":
            sret = 12;
            break;
        case "":
            sret = 13;
            break;
        case "":
            sret = 14;
            break;
        case "":
            sret = 15;
            break;
        case "":
            sret = 16;
            break;
        case "":
            sret = 17;
            break;
        case "":
            sret = 18;
            break;
        case "":
            sret = 19;
            break;*/
    }
    return sret;
};
sks.getskillnameStriker = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "신뇌합일";
            break;
        case 1:
            rep = "교아탄";
            break;
        case 2:
            rep = "뇌신창격";
            break;
        case 3:
            rep = "창뇌연격";
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
sks.getskilldesc1Striker = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "하단 참조";
            break;
        case 1:
            rep = "뇌전버프 2개소비/ 15명,2200%,7번 공격 상어 생성";
            break;
        case 2:
            rep = "연계 8번 적중후 다음공격시 뇌신의창 소환/ 8명,330%,6번 공격";
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
sks.getskilldesc2Striker = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "보스 판정을 받는 적에게는 패시브 효과가 발동되지 않는다";
            break;
        case 1:
            rep = "쿨 8초";
            break;
        case 2:
            rep = "일정시간마다 8명,440%,7번 전격 4번 발동/ 쿨7초";
            break;
        case 3:
            rep = "공중에 떠오르는 동작도 있지만, 실제로는 체공 판정을 받지 않는다";
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
sks.getskilldesc3Striker = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "MP 900 소비, 45초 동안 최종 데미지 10% 증가, 공격 시 650% 데미지로 6번 공격하고 최대 5명까지 전이되는 번개 발동\n\n전이될 때마다 피해 점차 감소, 주변의 적 숫자에 따라 최대 4개까지 동시에 번개 발동 가능\n발동되는 번개가 1개일 경우 880%로 7번 공격하는 강력한 번개 발동\n번개의 재발동 대기시간 3초\n\n패시브 효과 : 신뇌합일의 재사용 대기시간 동안 공격 시 주변에 일반 몬스터가 있다면 번개 1개가 발동, 재발동 대기시간 6초, 액티브 효과와 패시브 효과는 동시에 발동되지 않음\n\n재사용 대기시간 : 105초";
            break;
        case 3:
            rep = "번개와 함께 끝없는 연계 공격을 구사한다. 스킬을 계속 사용하여 연계 공격을 발동할 수 있고 창뇌연격 중 뇌성을 제외한 모든 스킬과 연계 가능하다. 번개는 공격 반사 상태의 적을 공격해도 피해를 입지 않는다.\n\nMP 1000 소비, 60초 동안 최대 12번의 연계 공격 가능\n\n연계 공격 : 최대 4명의 적을 1100%의 데미지로 5번 공격, 적중 시 최대 3명의 적을 1210%의 데미지로 4번 공격하는 번개 최대 3개 발동, 번개는 서로 다른 곳에 발동\n\n마지막 연계는 최대 7명의 적을 1540%의 데미지로 7번 공격, 적중 시 최대 8명의 적을 1650%의 데미지로 6번 공격하는 거대 번개 3번 발동\n\n재사용 대기시간 : 120초";
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
sks.getskillimage1Striker = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "https://i.imgur.com/noNOKJU.png";
            break;
        case 1:
            rep = "https://i.imgur.com/bBlOvci.png";
            break;
        case 2:
            rep = "https://i.imgur.com/4IsAdcr.png";
            break;
        case 3:
            rep = "https://i.imgur.com/CIpJ6iI.png";
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
sks.getskillimage2Striker = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "https://i.imgur.com/pzeBEs1.png";
            break;
        case 1:
            rep = "https://i.imgur.com/WfA5gjR.png";
            break;
        case 2:
            rep = "https://i.imgur.com/yOzXLD8.png";
            break;
        case 3:
            rep = "https://i.imgur.com/IGiwdTw.png";
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

module.exports = sks;