const skn = {};

skn.getskillNightlord = function (skillname){
    var nret = -1;
    switch(skillname){
        case "스프레드 스로우":
        case "스프레드스로우":
        case "스프레드":
        case "스프":
            nret = 0;
            break;
        case "풍마수리검":
        case "풍마":
        case "풍수":
            nret = 1;
            break;
        case "다크로드의 비전서":
        case "다크로드의비전서":
        case "다크로드":
        case "비전서":
        case "비전":
            nret = 2;
            break;
        case "스로우 블래스팅":
        case "스로우블래스팅":
        case "블래스팅":
        case "스블":
            nret = 3;
            break;
        /*case "":
            nret = 4;
            break;
        case "":
            nret = 5;
            break;
        case "":
            nret = 6;
            break;
        case "":
            nret = 7;
            break;
        case "":
            nret = 8;
            break;
        case "":
            nret = 9;
            break;
        case "":
            nret = 10;
            break;
        case "":
            nret = 11;
            break;
        case "":
            nret = 12;
            break;
        case "":
            nret = 13;
            break;
        case "":
            nret = 14;
            break;
        case "":
            nret = 15;
            break;
        case "":
            nret = 16;
            break;
        case "":
            nret = 17;
            break;
        case "":
            nret = 18;
            break;
        case "":
            nret = 19;
            break;*/
    }
    return nret;
};
skn.getskillnameNightlord = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "스프레드 스로우";
            break;
        case 1:
            rep = "풍마수리검";
            break;
        case 2:
            rep = "다크로드의 비전서";
            break;
        case 3:
            rep = "스로우 블래스팅";
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
skn.getskilldesc1Nightlord = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "50초간 스로우류 스킬사용시 여러 방향으로 던짐/ 쿨180초";
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
skn.getskilldesc2Nightlord = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "쿼드러플 스로우 : 3방향 추가, 최종뎀 20%감소";
            break;
        case 1:
            rep = "멈추는 위치를 잘 조절하는 것이 중요";
            break;
        case 2:
            rep = "사출되는 표창의 수는 적의 수에 비례해 증가";
            break;
        case 3:
            rep = "투명도를 최대한 낮춰도 이펙트가 보스를 가림";
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
skn.getskilldesc3Nightlord = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "";
            break;
        case 1:
            rep = "MP 800 소비, 일정 주기마다 최대 6명의 적을 550%의 데미지로 5번 공격하는 거대 수리검 투척\n\n거대 수리검은 일정거리 날아간 후 제자리에 2초 동안 머물며 추가 공격하고 소멸, 수리검이 날아갈 때 스킬을 재사용하면 즉시 현재 자리에서 멈춤\n\n풍마수리검으로는 마크 오브 어쌔신 공격 발동 확률 기존의 40%만 적용\n\n재사용 대기시간 25초";
            break;
        case 2:
            rep = "MP 1000 소비, 12초 동안 최대 7명의 적에게 770%의 데미지를 주는 표창 적 1명 당 5개 사출\n\n표창 7개가 적의 수와 관계 없이 추가 사출\n\n보스 몬스터 공격 시 데미지 30% 증가\n\n지속 시간 종료 시 두루마리가 폭발하며 최대 12명의 적을 1980%의 데미지로 10번 추가 공격\n\n재사용 대기시간 60초";
            break;
        case 3:
            rep = "폭발 부적 : 수리검을 던지는 공격 스킬이 적중한 적 주위에서 최대 6명의 적을 1045%의 데미지로 5번 공격하는 폭발 발생\n\n패시브 효과 : 10초마다 폭발 부적이 1개 준비되고 발동, 액티브 효과와 패시브 효과는 동시에 발동되지 않음\n\n액티브 효과 : MP 1000 소비, 90초 동안 68개의 폭발 부적 사용 가능, 공격 스킬 1회당 최소 2개에서 최대 4개의 부적 사용, 재사용 대기시간 : 180초";
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
skn.getskillimage1Nightlord = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "https://i.imgur.com/gggwFLD.png";
            break;
        case 1:
            rep = "https://i.imgur.com/Q4hit45.png";
            break;
        case 2:
            rep = "https://i.imgur.com/O4KfPxS.png";
            break;
        case 3:
            rep = "https://i.imgur.com/zytyfO6.png";
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
skn.getskillimage2Nightlord = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "https://i.imgur.com/8zkgrAs.png";
            break;
        case 1:
            rep = "https://i.imgur.com/lysGbbK.png";
            break;
        case 2:
            rep = "https://i.imgur.com/JRSezkU.png";
            break;
        case 3:
            rep = "https://i.imgur.com/pmDKhbM.png";
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

module.exports = skn;