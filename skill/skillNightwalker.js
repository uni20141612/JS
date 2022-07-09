const sknw = {};

sknw.getskillNightwalker = function (skillname){
    var nwret = -1;
    switch(skillname){
        case "쉐도우 스피어":
        case "쉐도우스피어":
        case "스피어":
        case "쉐스":
            nwret = 0;
            break;
        case "쉐도우 서번트 익스텐드":
        case "쉐도우서번트익스텐드":
        case "서번트 익스텐드":
        case "서번트익스텐드":
        case "서번트":
        case "익스텐드":
        case "쉐서익":
            nwret = 1;
            break;
        case "쉐도우 바이트":
        case "쉐도우바이트":
        case "바이트":
        case "쉐바":
            nwret = 2;
            break;
        case "래피드 스로우":
        case "래피드스로우":
        case "래피드":
        case "래스":
            nwret = 3;
            break;
        case "":
            nwret = 4;
            break;
        case "":
            nwret = 5;
            break;
        case "":
            nwret = 6;
            break;
        case "":
            nwret = 7;
            break;
        case "":
            nwret = 8;
            break;
        case "":
            nwret = 9;
            break;
        case "":
            nwret = 10;
            break;
        case "":
            nwret = 11;
            break;
        case "":
            nwret = 12;
            break;
        case "":
            nwret = 13;
            break;
        case "":
            nwret = 14;
            break;
        case "":
            nwret = 15;
            break;
        case "":
            nwret = 16;
            break;
        case "":
            nwret = 17;
            break;
        case "":
            nwret = 18;
            break;
        case "":
            nwret = 19;
            break;
        case "":
            nwret = 20;
            break;
        case "":
            nwret = 21;
            break;
        case "":
            nwret = 22;
            break;
        case "":
            nwret = 23;
            break;
        case "":
            nwret = 24;
            break;
        case "":
            nwret = 25;
            break;
        case "":
            nwret = 26;
            break;
        case "":
            nwret = 27;
            break;
        case "":
            nwret = 28;
            break;
        case "":
            nwret = 29;
            break;
        case "":
            nwret = 30;
            break;
        case "":
            nwret = 31;
            break;
        case "":
            nwret = 32;
            break;
    }
    return nwret;
};
sknw.getskillnameNightwalker = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "쉐도우 스피어";
            break;
        case 1:
            rep = "쉐도우 서번트 익스텐드";
            break;
        case 2:
            rep = "쉐도우 바이트";
            break;
        case 3:
            rep = "래피드 스로우";
            break;
        case 4:
            rep = "엘리멘트 : 다크니스";
            break;
        case 5:
            rep = "쉐도우 배트";
            break;
        case 6:
            rep = "쉐도우 점프";
            break;
        case 7:
            rep = "다크 사이트";
            break;
        case 8:
            rep = "래피드 이베이젼";
            break;
        case 9:
            rep = "헤이스트";
            break;
        case 10:
            rep = "스타더스트";
            break;
        case 11:
            rep = "배트 커뮤니온";
            break;
        case 12:
            rep = "다크니스 어뎁팅";
            break;
        case 13:
            rep = "쉐도우 서번트";
            break;
        case 14:
            rep = "다크니스 어센션";
            break;
        case 15:
            rep = "쉐도우 모멘텀";
            break;
        case 16:
            rep = "배트 커뮤니온 II";
            break;
        case 17:
            rep = "다크니스 어뎁팅 II";
            break;
        case 18:
            rep = "스피릿 스로잉";
            break;
        case 19:
            rep = "래디컬 다크니스";
            break;
        case 20:
            rep = "아드레날린";
            break;
        case 21:
            rep = "퀸터플 스로우";
            break;
        case 22:
            rep = "다크니스 오멘";
            break;
        case 23:
            rep = "쉐도우 스티치";
            break;
        case 24:
            rep = "래버너스 배트";
            break;
        case 25:
            rep = "배트 커뮤니온 III";
            break;
        case 26:
            rep = "다크니스 어뎁팅 III";
            break;
        case 27:
            rep = "사이펀 바이탈리티";
            break;
        case 28:
            rep = "다크니스 블레싱";
            break;
        case 29:
            rep = "쉐도우 어시밀레이션";
            break;
        case 30:
            rep = "쉐도우 일루전";
            break;
        case 31:
            rep = "도미니언";
            break;
        case 32:
            rep = "";
            break;
    }
    return rep;
};
sknw.getskilldesc1Nightwalker = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "하단 참조";
            break;
        case 1:
            rep = "45초간 고정되어 표창스킬에 최종뎀 55% 추가타격 그림자소환";
            break;
        case 2:
            rep = "하단 참조";
            break;
        case 3:
            rep = "1045%,5번 표창 1.8초간 연속 투척후 10명,1870%,13번 거대표창 마무리";
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
        case 20:
            rep = "";
            break;
        case 21:
            rep = "";
            break;
        case 22:
            rep = "";
            break;
        case 23:
            rep = "";
            break;
        case 24:
            rep = "";
            break;
        case 25:
            rep = "";
            break;
        case 26:
            rep = "";
            break;
        case 27:
            rep = "";
            break;
        case 28:
            rep = "";
            break;
        case 29:
            rep = "";
            break;
        case 30:
            rep = "";
            break;
        case 31:
            rep = "";
            break;
        case 32:
            rep = "";
            break;
    }
    return rep;
};
sknw.getskilldesc2Nightwalker = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "거대 그림자 창이 안나오는 버그가 있음";
            break;
        case 1:
            rep = "최대 3회까지 자리 변경 가능/ 쿨60초/ 최대HP높은적 우선";
            break;
        case 2:
            rep = "적 처치/보스타격 3~4초후에 버프 발동";
            break;
        case 3:
            rep = "스킬연타시 연속투척시간 최대3초 증가/ 쿨90초";
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
        case 20:
            rep = "";
            break;
        case 21:
            rep = "";
            break;
        case 22:
            rep = "";
            break;
        case 23:
            rep = "";
            break;
        case 24:
            rep = "";
            break;
        case 25:
            rep = "";
            break;
        case 26:
            rep = "";
            break;
        case 27:
            rep = "";
            break;
        case 28:
            rep = "";
            break;
        case 29:
            rep = "";
            break;
        case 30:
            rep = "";
            break;
        case 31:
            rep = "";
            break;
        case 32:
            rep = "";
            break;
    }
    return rep;
};
sknw.getskilldesc3Nightwalker = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "땅에 스며든 그림자가 창으로 변하여 적을 찌른다. 공격 반사 상태의 적을 공격해도 피해를 입지 않고 마을에서는 그림자 창이 발동되지 않는다.\n\nMP 1000 소비, 80초 동안 쉐도우 스피어 및 소환수를 제외한 어둠 속성 공격 시 100% 확률로 바닥에 그림자 조각 생성\n\n그림자 조각은 잠시 후 그림자 창으로 변해 최대 8명의 적에게 220% 데미지로 4번 공격\n\n그림자 창이 발동될 때 주변에 다른 그림자 조각이 일정 수 이상 있다면 거대한 그림자 창으로 변해 최대 12명의 적을 880%로 6번 공격, 거대 그림자 창 재발동 대기시간 3초\n\n쉐도우 스피어의 모든 공격은 일반 몬스터 공격 시 데미지 25% 증가\n\n재사용 대기시간 165초";
            break;
        case 2:
            rep = "MP 1500 소비, 최대 15명의 적을 880%의 데미지로 14번 공격, 보스 몬스터에게는 1320%의 데미지로 공격, 쉐도우 배트가 소환 가능한 상태라면 적이 공격받은 위치에서 쉐도우 배트 생성\n\n쉐도우 바이트로 쓰러뜨린 적이 있다면 20초 동안 1명 당 최종 데미지 2% 증가, 보스 몬스터를 공격했을 경우 최종 데미지 18% 증가, 쉐도우 바이트로 증가하는 최종 데미지는 최대 20%까지 적용\n\n재사용 대기시간 15초";
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
        case 20:
            rep = "";
            break;
        case 21:
            rep = "";
            break;
        case 22:
            rep = "";
            break;
        case 23:
            rep = "";
            break;
        case 24:
            rep = "";
            break;
        case 25:
            rep = "";
            break;
        case 26:
            rep = "";
            break;
        case 27:
            rep = "";
            break;
        case 28:
            rep = "";
            break;
        case 29:
            rep = "";
            break;
        case 30:
            rep = "";
            break;
        case 31:
            rep = "";
            break;
        case 32:
            rep = "";
            break;
    }
    return rep;
};
sknw.getskillimage1Nightwalker = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "https://i.imgur.com/w7c4qGS.png";
            break;
        case 1:
            rep = "https://i.imgur.com/2ncDMlY.png";
            break;
        case 2:
            rep = "https://i.imgur.com/om2AYUF.png";
            break;
        case 3:
            rep = "https://i.imgur.com/hgTJtwk.png";
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
        case 20:
            rep = "";
            break;
        case 21:
            rep = "";
            break;
        case 22:
            rep = "";
            break;
        case 23:
            rep = "";
            break;
        case 24:
            rep = "";
            break;
        case 25:
            rep = "";
            break;
        case 26:
            rep = "";
            break;
        case 27:
            rep = "";
            break;
        case 28:
            rep = "";
            break;
        case 29:
            rep = "";
            break;
        case 30:
            rep = "";
            break;
        case 31:
            rep = "";
            break;
        case 32:
            rep = "";
            break;
    }
    return rep;
};
sknw.getskillimage2Nightwalker = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "https://i.imgur.com/1Ag3TcO.png";
            break;
        case 1:
            rep = "https://i.imgur.com/yq74KR1.png";
            break;
        case 2:
            rep = "https://i.imgur.com/NRyKISN.png";
            break;
        case 3:
            rep = "https://i.imgur.com/AHvcbxj.png";
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
        case 20:
            rep = "";
            break;
        case 21:
            rep = "";
            break;
        case 22:
            rep = "";
            break;
        case 23:
            rep = "";
            break;
        case 24:
            rep = "";
            break;
        case 25:
            rep = "";
            break;
        case 26:
            rep = "";
            break;
        case 27:
            rep = "";
            break;
        case 28:
            rep = "";
            break;
        case 29:
            rep = "";
            break;
        case 30:
            rep = "";
            break;
        case 31:
            rep = "";
            break;
        case 32:
            rep = "";
            break;
    }
    return rep;
};

module.exports = sknw;