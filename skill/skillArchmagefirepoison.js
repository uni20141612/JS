const skfp = {};

skfp.getskillArchmagefirepoison = function (skillname){
    var fpret = -1;
    switch(skillname){
        case "도트 퍼니셔":
        case "도트퍼니셔":
        case "퍼니셔":
        case "도퍼":
            fpret = 0;
            break;
        case "포이즌 노바":
        case "포이즌노바":
        case "포노":
        case "노바":
            fpret = 1;
            break;
        case "퓨리 오브 이프리트":
        case "퓨리오브이프리트":
        case "퓨오이":
        case "퓨리":
            fpret = 2;
            break;
        case "포이즌 체인":
        case "포이즌체인":
        case "체인":
        case "포체":
            fpret = 3;
            break;
        /*case "":
            fpret = 4;
            break;
        case "":
            fpret = 5;
            break;
        case "":
            fpret = 6;
            break;
        case "":
            fpret = 7;
            break;
        case "":
            fpret = 8;
            break;
        case "":
            fpret = 9;
            break;
        case "":
            fpret = 10;
            break;
        case "":
            fpret = 11;
            break;
        case "":
            fpret = 12;
            break;
        case "":
            fpret = 13;
            break;
        case "":
            fpret = 14;
            break;
        case "":
            fpret = 15;
            break;
        case "":
            fpret = 16;
            break;
        case "":
            fpret = 17;
            break;
        case "":
            fpret = 18;
            break;
        case "":
            fpret = 19;
            break;*/
    }
    return fpret;
};
skfp.getskillnameArchmagefirepoison = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "도트 퍼니셔";
            break;
        case 1:
            rep = "포이즌 노바";
            break;
        case 2:
            rep = "퓨리 오브 이프리트";
            break;
        case 3:
            rep = "포이즌 체인";
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
skfp.getskilldesc1Archmagefirepoison = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "하단 참조";
            break;
        case 1:
            rep = "하단 참조";
            break;
        case 2:
            rep = "3초간 12명,440%,6번 지속 공격/ 쿨75초";
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
skfp.getskilldesc2Archmagefirepoison = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "잡몹 소환이나 공격 분산 패턴에 취약";
            break;
        case 1:
            rep = "크기가 큰 보스가 아니면 효율이 상당히 떨어진다";
            break;
        case 2:
            rep = "퍼번트 드레인 1개 당 0.6초 증가/ 이프리트 소환상태에서만";
            break;
        case 3:
            rep = "포이즌 체인은 엘리멘탈 드레인을 활성화시키지 않음";
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
skfp.getskilldesc3Archmagefirepoison = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "MP 500 소비, 20초 동안 적을 찾아 850% 데미지로 5번 공격하는 화염구 15개 생성\n\n일정 범위 내에 적이 입고 있는 지속 피해 중첩 1당 1개 추가 소환, 화염구는 최대 25개까지 소환 가능\n\n여러 개의 화염구가 하나의 몬스터를 공격하면 2번째 화염구부터 최종 데미지 35% 감소\n\n화염구에 공격당한 적은 8초 동안 1초당 290%의 지속 피해\n\n재사용 대기시간 : 25초";
            break;
        case 1:
            rep = "MP 500 소비, 독구름 수개 생성, 독구름은 닿은 적에게 550%의 데미지로 12번 공격 후 10초 동안 1초 간격으로 660%의 지속 데미지를 줌\n\n하나의 독구름에게 피해를 받은 적은 다른 독구름에 닿더라도 피해를 받지 않음\n\n독구름이 생성된 후 2초가 지나면 미스트 이럽션을 사용하여 독구름을 폭발시킬 수 있고 폭파 시 최대 12명의 적에게 495%의 데미지로 12번 공격, 폭파 데미지는 여러 개의 독구름이 중첩되어 적용될 수 있으나 하나의 적에게 3개를 초과하여 적용될 경우 초과한 폭파의 최종 데미지 50% 감소\n\n재사용 대기시간 25초";
            break;
        case 3:
            rep = "MP 1000 소비, 1명의 적을 550%의 데미지로 4번 공격한 후 최대 20초 동안 지속되는 독에 중독시킴, 중독된 적에게서 일정 시간마다 330%의 데미지로 5번 공격하는 폭발 발생 후 주변의 중독되지 않은 적 2명에게 전염\n\n독은 최대 5번까지 축적 가능, 축적된 독에 비례해 폭발의 데미지 60%p씩 증가\n\n1명의 적에게 최대 9번, 모든 적을 합하여 최대 22번까지 폭발 발동 가능\n\n폭발 발동 가능 횟수 소모로 인해 종료되었다면 모든 독이 제거되며 폭발 1회 추가 발생\n\n재사용 대기시간 : 25초";
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
skfp.getskillimage1Archmagefirepoison = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "https://i.imgur.com/dPZx8du.png";
            break;
        case 1:
            rep = "https://i.imgur.com/S0HJlla.png";
            break;
        case 2:
            rep = "https://i.imgur.com/FSXi0Tk.png";
            break;
        case 3:
            rep = "https://i.imgur.com/b7qLYID.png";
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
skfp.getskillimage2Archmagefirepoison = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "https://i.imgur.com/VBoYZtn.png";
            break;
        case 1:
            rep = "https://i.imgur.com/rjryqvp.png";
            break;
        case 2:
            rep = "https://i.imgur.com/ohUVIN3.png";
            break;
        case 3:
            rep = "https://i.imgur.com/nDdJyc0.png";
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

module.exports = skfp;