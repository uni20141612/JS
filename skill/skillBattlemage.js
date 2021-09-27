const skbm = {};

skbm.getskillBattlemage = function (skillname){
    var bmret = -1;
    switch(skillname){
        case "유니온 오라":
        case "유니온오라":
        case "유오라":
        case "유오":
            bmret = 0;
            break;
        case "블랙 매직 알터":
        case "블랙매직알터":
        case "블매알":
        case "알터":
            bmret = 1;
            break;
        case "그림 리퍼":
        case "그림리퍼":
        case "리퍼":
        case "그리":
            bmret = 2;
            break;
        case "어비셜 라이트닝":
        case "어비셜라이트닝":
        case "어비셜":
        case "어라":
            bmret = 3;
            break;
        /*case "":
            bmret = 4;
            break;
        case "":
            bmret = 5;
            break;
        case "":
            bmret = 6;
            break;
        case "":
            bmret = 7;
            break;
        case "":
            bmret = 8;
            break;
        case "":
            bmret = 9;
            break;
        case "":
            bmret = 10;
            break;
        case "":
            bmret = 11;
            break;
        case "":
            bmret = 12;
            break;
        case "":
            bmret = 13;
            break;
        case "":
            bmret = 14;
            break;
        case "":
            bmret = 15;
            break;
        case "":
            bmret = 16;
            break;
        case "":
            bmret = 17;
            break;
        case "":
            bmret = 18;
            break;
        case "":
            bmret = 19;
            break;*/
    }
    return bmret;
};
skbm.getskillnameBattlemage = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "유니온 오라";
            break;
        case 1:
            rep = "블랙 매직 알터";
            break;
        case 2:
            rep = "그림 리퍼";
            break;
        case 3:
            rep = "어비셜 라이트닝";
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
skbm.getskilldesc1Battlemage = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "40초간 모든오라효과 동시적용, 마력60/ 재사용시 비활성화/ 쿨100초";
            break;
        case 1:
            rep = "하단 참조";
            break;
        case 2:
            rep = "하단 참조";
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
skbm.getskilldesc2Battlemage = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "블로우류스킬이 10명,300%,12번 공격 사신의낫 강화/ 크확50%, 방무50%";
            break;
        case 1:
            rep = "설치형 자동 공격기";
            break;
        case 2:
            rep = "로브를 쓰고 눈만 번뜩이는 모습이 검은 마법사와 유사하다";
            break;
        case 3:
            rep = "스킬이 지속되는 동안 징표가 6번째 공격하기 전까지 유지";
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
skbm.getskilldesc3Battlemage = function (skillcode){
    rep = "";
    switch(skillcode){
        case 1:
            rep = "흑마술 제단을 설치한다. 2개 이상 설치되면 제단이 작동하여 저주를 발동한다.\n\n가장 먼저 설치된 제단에서 저주가 시작되어 그 다음 설치한 제단으로 차례차례 보내진다. 저주는 닿은 적을 공격하지만 1번 공격한 적은 다음 제단에 도착할 때까지는 다시 공격하지 않고 이동하는 시간은 제단 간의 거리와 상관없이 일정하다.\n추가 제단을 설치할 때 가장 최근에 설치한 제단의 일정 범위 안에만 설치할 수 있고 공격을 받은 적은 검은 징표가 새겨진다.\n\n제단이 1개라도 설치되어 있지 않을 때 아래 방향키와 함께 사용하면 현재 캐릭터가 있는 곳 및 캐릭터의 전방에 총 2개의 제단을 한번에 설치할 수 있다.\n블랙 매직 알터는 공격 반사 상태의 적을 공격해도 피해를 입지 않는다.\n\nMP 500 소비, 40초 동안 유지되는 흑마술 제단 설치, 저주는 최대 10명의 적을 1760%의 데미지로 4번 공격\n\n저주가 다음 제단까지 이동하는데 0.8초 걸리고 제단이 2개를 초과하여 설치되었다면 초과한 제단 1개마다 저주의 공격 횟수 2번 증가\n\n흑마술 제단은 25초마다 1개씩 준비되며 최대 4개까지 준비 가능\n재사용 대기시간 : 0.5초";
            break;
        case 2:
            rep = "흑마술의 새로운 경지에 도달해 진정한 모습의 사신을 강림시킨다. 제물이 될 영혼이 많다면 더 오래 강림시킬 수 있다. 사신의 공격은 공격 반사 상태의 적에게도 피해를 입힌다.\n\nMP 1000 소비, 30초 동안 4초마다 최대 10명의 적을 1760%의 데미지로 12번 공격하는 그림 리퍼 소환\n스킬을 한 번 더 사용하면 자신의 주위에서 재소환하며 10초마다 1번 사용가능\n\n그림 리퍼가 적을 쓰러뜨렸다면 1명 당 지속시간 0.2초, 보스 몬스터를 공격했다면 지속시간 2초 증가, 공격 1회당 지속시간 최대 3초까지 증가\n\n마스터 오브 데스 적용 중에는 공격 간격이 50%가 되지만 공격으로 지속시간이 증가하지 않음\n\n재사용 대기시간 100초";
            break;
        case 3:
            rep = "흑마술로 주변을 물들여 명계의 번개를 사용한다. 다크 라이트닝이 발동될 때, 검은 징표로 인한 공격이 발동될 때 명계의 번개가 주변을 공격한다.\n일정 시간마다 배틀메이지 주변으로 명계의 통로가 생성되고 방향키와 함께 스킬을 사용하면 해당 방향에 있는 가장 가까운 통로를 소멸시키며 해당 위치로 순간 이동한다. 순간 이동한 경로에 다크 라이트닝이 생성되어 공격한다.\n어비셜 라이트닝 중 검은 징표는 수회 공격해야 소비되어 사라진다.\n\nMP 500 소비, 시전 및 해제 동작 중 무적\n40초 동안 일반 몬스터 공격 시 데미지 30% 증가 및 일정 시간마다 명계의 통로 2개 생성, 통로는 15초 동안 유지되고 맵상에 최대 6개까지 존재 가능, 검은 징표의 공격 6번 발동돼야 징표 소비\n\n명계의 번개 : 최대 8명의 적을 1760%의 데미지로 6번 공격, 추가 크리티컬 확률 100%, 몬스터 방어율 20% 추가 무시, 재발동 대기시간 0.6초\n\n재사용 대기시간 : 200초";
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
skbm.getskillimage1Battlemage = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "https://i.imgur.com/ZMCcicF.png";
            break;
        case 1:
            rep = "https://i.imgur.com/taeWiCG.png";
            break;
        case 2:
            rep = "https://i.imgur.com/FyqV9Th.png";
            break;
        case 3:
            rep = "https://i.imgur.com/WAsIpBi.png";
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
skbm.getskillimage2Battlemage = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "https://i.imgur.com/TJz28rP.png";
            break;
        case 1:
            rep = "https://i.imgur.com/5QWzAPy.png";
            break;
        case 2:
            rep = "https://i.imgur.com/TbQPQb5.png";
            break;
        case 3:
            rep = "https://i.imgur.com/cvRP3nQ.png";
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

module.exports = skbm;