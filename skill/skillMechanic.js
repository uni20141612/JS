const skm = {};

skm.getskillMechanic = function (skillname){
    var mret = -1;
    switch(skillname){
        case "멀티플 옵션 : M-FL":
        case "멀티플옵션 : M-FL":
        case "멀티플옵션:M-FL":
        case "멀티플옵션MFL":
        case "멀티플옵션":
        case "멀티플":
        case "멀옵":
            mret = 0;
            break;
        case "마이크로 미사일 컨테이너":
        case "마이크로미사일컨테이너":
        case "마이크로미사일":
        case "컨테이너":
        case "마미컨":
            mret = 1;
            break;
        case "메탈아머 전탄발사":
        case "메탈아머전탄발사":
        case "전탄발사":
        case "메전":
            mret = 2;
            break;
        case "메카 캐리어":
        case "메카캐리어":
        case "캐리어":
        case "메캐":
            mret = 3;
            break;
        /*case "":
            mret = 4;
            break;
        case "":
            mret = 5;
            break;
        case "":
            mret = 6;
            break;
        case "":
            mret = 7;
            break;
        case "":
            mret = 8;
            break;
        case "":
            mret = 9;
            break;
        case "":
            mret = 10;
            break;
        case "":
            mret = 11;
            break;
        case "":
            mret = 12;
            break;
        case "":
            mret = 13;
            break;
        case "":
            mret = 14;
            break;
        case "":
            mret = 15;
            break;
        case "":
            mret = 16;
            break;
        case "":
            mret = 17;
            break;
        case "":
            mret = 18;
            break;
        case "":
            mret = 19;
            break;*/
    }
    return mret;
};
skm.getskillnameMechanic = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "멀티플 옵션 : M-FL";
            break;
        case 1:
            rep = "마이크로 미사일 컨테이너";
            break;
        case 2:
            rep = "메탈아머 전탄발사";
            break;
        case 3:
            rep = "메카 캐리어";
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
skm.getskilldesc1Mechanic = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "135초간 개틀링포 : 8명,440%,6번 공격, 재발동1.5초/ 쿨200초";
            break;
        case 1:
            rep = "15명,40발 마이크로미사일 발사하는 컨테이너 사출/ 쿨25초";
            break;
        case 2:
            rep = "하단 참조";
            break;
        case 3:
            rep = "70초간 소환/ 최초 함재기 9기 출격, 이후 1기씩 최대 16기";
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
skm.getskilldesc2Mechanic = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "미사일 : 8명,650%,8번 미사일 3연속 발사/ 재발동8초";
            break;
        case 1:
            rep = "마이크로 미사일은 935%의 데미지로 5번 공격";
            break;
        case 2:
            rep = "시전 중에는 감정 표현 중 하나를 한다";
            break;
        case 3:
            rep = "함재기 : 550%,4번 공격후 귀환/ 쿨200초";
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
skm.getskilldesc3Mechanic = function (skillcode){
    rep = "";
    switch(skillcode){
        case 2:
            rep = "메탈 아머의 모든 병기를 사용해 보유 탄환을 모두 한 번에 쏟아 붓는다. 시전 동작 중 무적이지만 이동 및 방향 전환이 불가능하다.\n\n시전 중 호밍 미사일을 사용할 수 있고 멀티 타겟팅이 가능하며 최종 데미지 감소가 없다.\n스킬 종료 후 호밍 미사일을 모두 소모하여 재장전이 필요해 일정 시간 사용할 수 없다.\n\nMP 1500 소비, 최대 10초 동안 키다운 가능하며 전방 15명의 적에게 880%의 데미지로 11번 연속 공격\n\n시전 중 호밍 미사일 사용 시 7개 추가 발사, 봄버 타임과 중첩 가능\n스킬 종료 후 2초 동안 호밍 미사일 사용 불가\n\n재사용 대기시간 200초";
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
skm.getskillimage1Mechanic = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "https://i.imgur.com/QomrpRE.png";
            break;
        case 1:
            rep = "https://i.imgur.com/ozsb3WM.png";
            break;
        case 2:
            rep = "https://i.imgur.com/uPUTCYG.png";
            break;
        case 3:
            rep = "https://i.imgur.com/5OxLedW.png";
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
skm.getskillimage2Mechanic = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "https://i.imgur.com/oDEayVo.png";
            break;
        case 1:
            rep = "https://i.imgur.com/o1wzhGk.png";
            break;
        case 2:
            rep = "https://i.imgur.com/LMx40T8.png";
            break;
        case 3:
            rep = "https://i.imgur.com/fwiVR5r.png";
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

module.exports = skm;