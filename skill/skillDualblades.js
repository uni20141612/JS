const skdb = {};

skdb.getskillDualblades = function (skillname){
    var dbret = -1;
    switch(skillname){
        case "블레이드 스톰":
        case "블레이드스톰":
        case "블스":
            dbret = 0;
            break;
        case "카르마 퓨리":
        case "카르마퓨리":
        case "카르마":
        case "퓨리":
        case "카퓨":
            dbret = 1;
            break;
        case "블레이드 토네이도":
        case "블레이드토네이도":
        case "블토":
            dbret = 2;
            break;
        case "헌티드 엣지":
        case "헌티드엣지":
        case "헌티드":
        case "엣지":
            dbret = 3;
            break;
        /*case "":
            dbret = 4;
            break;
        case "":
            dbret = 5;
            break;
        case "":
            dbret = 6;
            break;
        case "":
            dbret = 7;
            break;
        case "":
            dbret = 8;
            break;
        case "":
            dbret = 9;
            break;
        case "":
            dbret = 10;
            break;
        case "":
            dbret = 11;
            break;
        case "":
            dbret = 12;
            break;
        case "":
            dbret = 13;
            break;
        case "":
            dbret = 14;
            break;
        case "":
            dbret = 15;
            break;
        case "":
            dbret = 16;
            break;
        case "":
            dbret = 17;
            break;
        case "":
            dbret = 18;
            break;
        case "":
            dbret = 19;
            break;*/
    }
    return dbret;
};
skdb.getskillnameDualblades = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "블레이드 스톰";
            break;
        case 1:
            rep = "카르마 퓨리";
            break;
        case 2:
            rep = "블레이드 토네이도";
            break;
        case 3:
            rep = "헌티드 엣지";
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
skdb.getskilldesc1Dualblades = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "10명,1270%,7번 공격후 10초간 전방 10명,650%,5번 공격";
            break;
        case 1:
            rep = "12명,880%,7번 참격 5번발동/ 방무30%";
            break;
        case 2:
            rep = "10명,1320%,7번 공격/ 10명,880%,6번 공격 회오리 발생";
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
skdb.getskilldesc2Dualblades = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "방무100%/ 쿨 90초";
            break;
        case 1:
            rep = "쿨 10초";
            break;
        case 2:
            rep = "방무100%/ 쿨12초";
            break;
        case 3:
            rep = "낮은 가동률, 낮은 퍼뎀, 느린 반응성, 부실한 편의성, 저조한 효율";
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
skdb.getskilldesc3Dualblades = function (skillcode){
    rep = "";
    switch(skillcode){
        case 3:
            rep = "검에 깃든 명계의 악령이 스스로 적을 공격한다. 블레이드 퓨리 혹은 팬텀 블로우 사용 시 자동 발동한다.\n\n블레이드 퓨리 사용 시 빠른 검격이 날카로운 검풍을 만들어 내는 헌티드 엣지-수라가, 팬텀 블로우 사용 시 격노하여 수없이 연속 공격하는 헌티드 엣지-나찰이 발동된다.\n\n헌티드 엣지는 공격 반사 상태의 적을 공격해도 피해를 입지 않고 헌티드 엣지-수라로 발생되는 검풍은 미러 이미징이 적용되지 않는다.\n\nMP 750 소비, 재발동 대기시간 : 14초, 헌티드 엣지의 모든 공격은 몬스터 방어율 30% 추가 무시\n\n헌티드 엣지-수라 : 최대 8명의 적을 605%의 데미지로 6번 공격하고, 825%의 데미지로 3번 공격하는 검풍 최대 6개 생성, 한명의 적이 여러 개의 검풍에 맞았을 경우 검풍의 최종 데미지 50% 감소\n\n헌티드 엣지-나찰 : 최대 2명의 적을 440%의 데미지로 4번 공격하는 참격이 5회 발생";
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
skdb.getskillimage1Dualblades = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "https://i.imgur.com/5YSZoTj.png";
            break;
        case 1:
            rep = "https://i.imgur.com/FeTQPEt.png";
            break;
        case 2:
            rep = "https://i.imgur.com/t7zdVLE.png";
            break;
        case 3:
            rep = "https://i.imgur.com/rnVB7zF.png";
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
skdb.getskillimage2Dualblades = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "https://i.imgur.com/RSSNveP.png";
            break;
        case 1:
            rep = "https://i.imgur.com/BUv2KIJ.png";
            break;
        case 2:
            rep = "https://i.imgur.com/ABbV2N3.png";
            break;
        case 3:
            rep = "https://i.imgur.com/C2t9KAW.png";
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

module.exports = skdb;