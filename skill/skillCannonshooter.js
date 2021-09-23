const skcs = {};

skcs.getskillCannonshooter = function (skillname){
    var csret = -1;
    switch(skillname){
        case "빅 휴즈 기간틱 캐논볼":
        case "빅휴즈기간틱캐논볼":
        case "빅휴즈":
        case "기간틱캐논볼":
        case "빅휴":
        case "기간틱":
        case "캐논볼":
            csret = 0;
            break;
        case "ICBM":
        case "icbm":
        case "아씨비엠":
        case "아이씨비엠":
            csret = 1;
            break;
        case "스페셜 몽키 에스코트":
        case "스페셜몽키에스코트":
        case "스페셜몽키":
        case "에스코트":
        case "스몽에":
        case "스몽":
            csret = 2;
            break;
        case "풀 메이커":
        case "풀메이커":
        case "풀메":
            csret = 3;
            break;
        /*case "":
            csret = 4;
            break;
        case "":
            csret = 5;
            break;
        case "":
            csret = 6;
            break;
        case "":
            csret = 7;
            break;
        case "":
            csret = 8;
            break;
        case "":
            csret = 9;
            break;
        case "":
            csret = 10;
            break;
        case "":
            csret = 11;
            break;
        case "":
            csret = 12;
            break;
        case "":
            csret = 13;
            break;
        case "":
            csret = 14;
            break;
        case "":
            csret = 15;
            break;
        case "":
            csret = 16;
            break;
        case "":
            csret = 17;
            break;
        case "":
            csret = 18;
            break;
        case "":
            csret = 19;
            break;*/
    }
    return csret;
};
skcs.getskillnameCannonshooter = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "빅 휴즈 기간틱 캐논볼";
            break;
        case 1:
            rep = "ICBM";
            break;
        case 2:
            rep = "스페셜 몽키 에스코트";
            break;
        case 3:
            rep = "풀 메이커";
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
skcs.getskilldesc1Cannonshooter = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "일정시간마다 15명,900%,4번 거대포탄 발사/ 쿨3초";
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
skcs.getskilldesc2Cannonshooter = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "한명당 최대 40번충돌/ 25초마다 1개씩 최대 3개";
            break;
        case 1:
            rep = "포탄의 공격 판정은 1초에 걸쳐 6회 연속으로 발생한다";
            break;
        case 2:
            rep = "-";
            break;
        case 3:
            rep = "보급품은 같은 필드에 셋 이상 놓일 수 없음";
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
skcs.getskilldesc3Cannonshooter = function (skillcode){
    rep = "";
    switch(skillcode){
        case 1:
            rep = "탄도 미사일을 곡사로 발사하여 넓은 범위의 적을 공격한다. 스킬 키를 누른 상태에서 ↑, ↓ 화살표 키를 이용해 발사 각도를 조절한 후 스킬 키를 놓으면 발사된다. 미사일은 적을 직접 공격하지 않으며 떨어지면서 발판에 부딪혀야 폭발하여 피해를 준다. 조준하는 동안 적의 어떠한 공격에도 밀려나지 않고 준비 동작과 발사 후 동작은 무적이다.\n\nMP 1000 소비, 최대 5초 동안 조준 가능, 조준 가능 시간을 초과하면 스킬 취소, 미사일이 발판에 부딪히면 1초 동안 일정 간격으로 최대 15명의 적을 1760%의 데미지로 5번 공격하는 폭발 발생\n\n폭발한 후 공격범위 안의 가장 낮은 곳에 있는 발판에 최대 10명의 적에게 1100%의 데미지로 공격하는 오염 지역을 15초 동안 생성\n\n재사용 대기시간 30초";
            break;
        case 2:
            rep = "MP 1000 소비, 45초 동안 몽키 캐논과 몽키 봄을 사용하는 챔피언 몽키 소대 소환\n\n몽키 캐논 : 최대 3명의 적을 660%로 4번 공격\n몽키 봄 : 최대 12명의 적을 990%의 데미지로 7번 공격, 몬스터 방어율 100% 추가 무시\n기본의 로이 : 1초마다 몽키 캐논, 6초마다 몽키 봄 사용\n속사의 맥시 : 0.7초마다 몽키 캐논, 30초마다 몽키 봄 사용\n폭발의 카키 : 2.5초마다 몽키 캐논, 3초마다 몽키 봄 사용\n\n재사용 대기시간 120초";
            break;
        case 3:
            rep = "지형에 다수의 크레이터를 만들 만한 포격을 연사한다. 포격은 잠시 후 캐논슈터 주위의 적에게 떨어지며 최대 HP가 가장 높은 보스 몬스터 및 이전 포격에서 살아남은 적에게 우선적으로 떨어진다. 적이 없다면 자신을 포함한 파티원이 사용할 수 있는 보급품이 투하된다.\n\n포격이 떨어질 발판이 없거나 매달리면 떨어지지 않고 포격 발생 횟수가 남아있는 상태에서 맵을 이동하거나 재사용 대기시간이 초기화되면 스킬이 종료된다.\n\n포격은 공격 반사 상태의 적을 공격해도 피해를 입지 않고 보급품에 다가가서 위쪽 화살표 키를 누르면 사용할 수 있다.\n\nMP 1000 소비, 최대 8명의 적을 1540%의 데미지로 3번 공격하는 포격 최대 20회 발생\n\n보급품 : 20초 동안 유지, 사용 시 최대 HP의 20% 회복 후 20초 동안 유지되는 데미지 30% 증가 버프 획득, 보급품은 맵 상에 2개까지만 존재 가능\n\n재사용 대기시간 : 60초";
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
skcs.getskillimage1Cannonshooter = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "https://i.imgur.com/IeybJwL.png";
            break;
        case 1:
            rep = "https://i.imgur.com/D7ng08O.png";
            break;
        case 2:
            rep = "https://i.imgur.com/tN4DbSU.png";
            break;
        case 3:
            rep = "https://i.imgur.com/MOF5jRS.png";
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
skcs.getskillimage2Cannonshooter = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "https://i.imgur.com/9H1lkqM.png";
            break;
        case 1:
            rep = "https://i.imgur.com/JyaeyMg.png";
            break;
        case 2:
            rep = "https://i.imgur.com/xlRyayT.png";
            break;
        case 3:
            rep = "https://i.imgur.com/Tg2uuZd.png";
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

module.exports = skcs;