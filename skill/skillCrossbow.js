const skcb = {};

skcb.getskillCrossbow = function (skillname){
    var cbret = -1;
    switch(skillname){
        case "트루 스나이핑":
        case "트루스나이핑":
        case "트스나":
            cbret = 0;
            break;
        case "스플릿 애로우":
        case "스플릿애로우":
        case "스플릿":
            cbret = 1;
            break;
        case "차지드 애로우":
        case "차지드애로우":
        case "차지드":
            cbret = 2;
            break;
        case "리피팅 크로스보우 카트리지":
        case "리피팅크로스보우카트리지":
        case "리피팅":
        case "카트리지":
        case "리크카":
            cbret = 3;
            break;
        /*case "":
            cbret = 4;
            break;
        case "":
            cbret = 5;
            break;
        case "":
            cbret = 6;
            break;
        case "":
            cbret = 7;
            break;
        case "":
            cbret = 8;
            break;
        case "":
            cbret = 9;
            break;*/
    }
    return cbret;
};
skcb.getskillnameCrossbow = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "트루 스나이핑";
            break;
        case 1:
            rep = "스플릿 애로우";
            break;
        case 2:
            rep = "차지드 애로우";
            break;
        case 3:
            rep = "리피팅 크로스보우 카트리지";
            break;
        /*case 4:
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
            break;*/
    }
    return rep;
};
skcb.getskilldesc1Crossbow = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "12명,1850%,14번,7번발사/ 12초조준/ 해당시간및종료후 2초간무적";
            break;
        case 1:
            rep = "60초간 화살이 갈라져 10명,1320%,5번 추가공격 / 쿨120초";
            break;
        case 2:
            rep = "10명,1100%,10번공격, 집중완료시 1650%/ 방무50%, 추가크확100%";
            break;
        case 3:
            rep = "풀버스트샷:카트리지1개당 660%, 9번공격,4개/ 방무25%, 크확100%";
            break;
        /*case 4:
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
            break;*/
    }
    return rep;
};
skcb.getskilldesc2Crossbow = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "중앙가까울수록 데미지 15%씩증가, 최대100%/ 방무100%추가 / 쿨180초";
            break;
        case 1:
            rep = "피어싱, 스나이핑, 리피팅크로스보우 카트리지 사용후 풀버스트샷 적중시";
            break;
        case 2:
            rep = "키다운시 집중/ 최대집중 유지시간 10초/ 쿨10초/ 파이널어택X";
            break;
        case 3:
            rep = " 60초동안 카트리지 8개 사용 가능/ 쿨120초";
            break;
        /*case 4:
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
            break;*/
    }
    return rep;
};
skcb.getskillimage1Crossbow = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "https://i.imgur.com/HStGiTR.png";
            break;
        case 1:
            rep = "https://i.imgur.com/f7qPnKH.png";
            break;
        case 2:
            rep = "https://i.imgur.com/PK2Gh9F.png";
            break;
        case 3:
            rep = "https://i.imgur.com/5Ow3SIm.png";
            break;
        /*case 4:
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
            break;*/
    }
    return rep;
};
skcb.getskillimage2Crossbow = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "https://i.imgur.com/KJ5DMgf.png";
            break;
        case 1:
            rep = "https://i.imgur.com/mAoZvBr.png";
            break;
        case 2:
            rep = "https://i.imgur.com/wJooKTL.png";
            break;
        case 3:
            rep = "https://i.imgur.com/26YYmR8.png";
            break;
        /*case 4:
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
            break;*/
    }
    return rep;
};

module.exports = skcb;