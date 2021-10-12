const ski = {};

ski.getskillIllium = function (skillname){
    var iret = -1;
    switch(skillname){
        case "크리스탈 이그니션":
        case "크리스탈이그니션":
        case "이그니션":
        case "크이":
            iret = 0;
            break;
        case "리액션:스펙트럼":
        case "리액션 스펙트럼":
        case "스펙트럼":
        case "리스":
            iret = 1;
            break;
        case "그람홀더":
        case "그홀":
            iret = 2;
            break;
        case "소울 오브 크리스탈":
        case "소울오브 크리스탈":
        case "소울오브크리스탈":
        case "소오크":
        case "소크":
            iret = 3;
            break;
        case "크리스탈 게이트":
        case "크리스탈게이트":
        case "게이트":
        case "크게":
            iret = 4;
            break;
        /*case "":
            iret = 5;
            break;
        case "":
            iret = 6;
            break;
        case "":
            iret = 7;
            break;
        case "":
            iret = 8;
            break;
        case "":
            iret = 9;
            break;
        case "":
            iret = 10;
            break;
        case "":
            iret = 11;
            break;
        case "":
            iret = 12;
            break;
        case "":
            iret = 13;
            break;
        case "":
            iret = 14;
            break;
        case "":
            iret = 15;
            break;
        case "":
            iret = 16;
            break;
        case "":
            iret = 17;
            break;
        case "":
            iret = 18;
            break;
        case "":
            iret = 19;
            break;*/
    }
    return iret;
};
ski.getskillnameIllium = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "크리스탈 이그니션";
            break;
        case 1:
            rep = "리액션:스펙트럼";
            break;
        case 2:
            rep = "그람홀더";
            break;
        case 3:
            rep = "소울 오브 크리스탈";
            break;
        case 4:
            rep = "크리스탈 게이트";
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
ski.getskilldesc1Illium = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "일정간격 15명,1650%,4번 공격/ 보공 20%";
            break;
        case 1:
            rep = "15명,2200%,5번 공격/ 보공 20%/ 재발동대기시간 1초";
            break;
        case 2:
            rep = "하단 참조";
            break;
        case 3:
            rep = "하단 참조";
            break;
        case 4:
            rep = "하단 참조";
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
ski.getskilldesc2Illium = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "키다운스킬/ 쿨 180초/ 248타";
            break;
        case 1:
            rep = "크리스탈 이그니션의 리액션 스킬";
            break;
        case 2:
            rep = "4번째 소환수 스킬";
            break;
        case 3:
            rep = "버프 프리저가 적용되지 않는다.";
            break;
        case 4:
            rep = "3개까지 설치할 수 있고, 2개가 설치되면 작동하기 시작";
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
ski.getskilldesc3Illium = function (skillcode){
    rep = "";
    switch(skillcode){
        case 2:
            rep = "신계의 무기 그람을 사용하는 기계 전사를 소환한다. 그람홀더는 일리움이 있는 방향으로 공격을 준비하며, 공격할 때 까지 방향을 바꾸지 않는다. 공격을 준비하는 동안 크리스탈 차지가 일정 이상 이뤄지면 더 강력한 검기를 발사한다. 그림홀더는 공격 반사 상태의 적을 공격해도 피해를 입지 않는다.\n\nMP 200 소비, 40초 동안 일정 간격으로 최대 12명의 적을 1100%의 데미지로 12번 공격\n공격 준비 중 크리스탈 차지가 3 이상 충전되거나 글로리 윙 상태라면 최종 데미지 2배로 증가\n\n재사용 대기시간 180초";
            break;
        case 3:
            rep = "크리스탈의 힘을 모방하여 영혼의 크리스탈을 창조한다. 영혼의 크리스탈로 리액션 스킬을 발동시킬 수 있다.\n크래프트:자벨린이 닿았을 때 공격 가능한 적 수를 소모하지 않는다.\n글로리 윙 사용 중에는 사용할 수 없다.\n\nMP 500, 크리스탈 조각 1개 소비\n\n크리스탈이 있는 위치에 30초 동안 영혼의 크리스탈 창조\n영혼의 크리스탈로 발동되는 리액션 스킬의 최종 데미지는 80%만 반영. 단, 리액션 스킬이 5차 스킬일 경우 100% 반영\n영혼의 크리스탈로 발동되는 리액션 스킬은 재사용 대기시간 초기화의 효과를 받지 않음\n글로리 윙 사용 시 소환된 영혼의 크리스탈이 소멸하며 남은 지속시간 동안 소멸한 영혼의 크리스탈 1개당 데미지 35% 증가\n크리스탈 조각은 20초마다 1개씩 준비되며 최대 2개까지 준비 가능\n\n재사용 대기시간 2.5초\n[패시브 효과 : 마력 65 증가]";
            break;
        case 4:
            rep = "크리스탈 기술을 발전시켜 자유롭게 이동할 수 있는 통로를 설치한다.\n작동을 시작한 자신의 크리스탈 게이트에서 위쪽 방향키를 누르면 해당 크리스탈 다음에 설치한 크리스탈 게이트로 이동할 수 있고 마지막에 설치한 크리스탈 게이트를 사용하면 처음 설치한 크리스탈 게이트로 이동한다.\n1회 사용 후 다시 이용하기 위해 충전 시간이 필요하고 직접 사용한 크리스탈 게이트는 충전 시간이 더 길다. 크리스탈 게이트 주변에서 강화 및 공격 지원 버프를 받을 수 있고 공중에도 설치할 수 있다.\n크리스탈 게이트는 버프 프리저의 효과를 받지 않고 통로를 사용한 이동은 전투의 흐름 발동에 필요한 이동 거리에 포함된다.\n\nMP 500 소비, 160초 동안 최대 3개의 크리스탈 게이트 설치 가능, 2개 이상 설치 시 작동 시작, 설치 가능한 시간과 크리스탈 게이트의 지속 시간 동일\n1회 이용 후 모든 크리스탈 게이트 2초 이용 불가, 직접 사용한 크리스탈 게이트 5초 이용 불가\n크리스탈 게이트 주변에서 일정 간격으로 25초 동안 지속되는 마력 65 증가 버프 획득\n\n버프 지속 중 직접 공격하는 스킬 적중 시 크리스탈 게이트를 통해 최대 3명의 적을 990%의 데미지로 공격하는 폭격 5번 발생, 재발동 대기시간 1.5초\n\n재사용 대기시간 : 180초";
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
ski.getskillimage1Illium = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "https://i.imgur.com/3ec4v95.png";
            break;
        case 1:
            rep = "https://i.imgur.com/w6uKe3A.png";
            break;
        case 2:
            rep = "https://i.imgur.com/GPQT0OO.png";
            break;
        case 3:
            rep = "https://i.imgur.com/AoFlb9Q.png";
            break;
        case 4:
            rep = "https://i.imgur.com/ePeMChb.png";
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
ski.getskillimage2Illium = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "https://i.imgur.com/LFoAcTe.png";
            break;
        case 1:
            rep = "https://i.imgur.com/poKTMxD.png";
            break;
        case 2:
            rep = "https://i.imgur.com/mSYBezs.png";
            break;
        case 3:
            rep = "https://i.imgur.com/w7M53ms.png";
            break;
        case 4:
            rep = "https://i.imgur.com/5DE6bvt.png";
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

module.exports = ski;