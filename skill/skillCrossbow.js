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
        case "피어싱":
            cbret = 4;
            break;
        case "리트리트 샷":
        case "리트리트샷":
        case "리트":
            cbret = 5;
            break;
        case "소울 애로우 : 석궁":
        case "소울 애로우 석궁":
        case "소울애로우 석궁":
        case "소울애로우석궁":
        case "소울 애로우":
        case "소울애로우":
            cbret = 6;
            break;
        case "인핸스 애로우":
        case "인핸스애로우":
        case "인핸스":
        case "베인":
            cbret = 7;
            break;
        case "프리져":
        case "프리저":
        case "소환수":
            cbret = 8;
            break;
        case "볼트 스위프트":
        case "볼트스위프트":
        case "스위프트":
        case "볼스":
            cbret = 9;
            break;
        case "볼트 플로우":
        case "볼트플로우":
        case "플로우":
        case "볼플":
        case "텔포":
            cbret = 10;
            break;
        case "페인 킬러":
        case "페인킬러":
        case "페인":
        case "만통":
        case "만병통치약":
            cbret = 11;
            break;
        case "익스트림 아쳐리 : 석궁":
        case "익스트림 아쳐리 석궁":
        case "익스트림아쳐리 석궁":
        case "익스트림아쳐리석궁":
        case "익스트림 아쳐리":
        case "익스트림아쳐리":
        case "익스트림 아처리":
        case "익스트림아처리":
            cbret = 12;
            break;
        case "모탈 블로우":
        case "모탈블로우":
        case "모탈":
            cbret = 13;
            break;
        case "데미지 리버싱":
        case "데미지리버싱":
        case "리버싱":
            cbret = 14;
            break;
        case "피어싱 II":
        case "피어싱II":
        case "피어싱 2":
        case "피어싱2":
            cbret = 15;
            break;
        case "스나이핑":
        case "스나":
            cbret = 16;
            break;
        case "어드밴스드 인핸스 애로우":
        case "어드밴스드 인핸스애로우":
        case "어드밴스드인핸스애로우":
        case "어드인핸스애로우":
        case "어인애":
            cbret = 17;
            break;
        case "애로우 일루전":
        case "애로우일루전":
        case "애일":
        case "일루전":
            cbret = 18;
            break;
        case "어디셔널 볼트":
        case "어디셔널볼트":
        case "어디셔널":
            cbret = 19;
            break;
        case "라스트맨 스탠딩":
        case "라스트맨스탠딩":
        case "라스트맨":
            cbret = 20;
            break;
        case "불스아이":
        case "불스":
            cbret = 21;
            break;
        case "롱 레인지 트루샷":
        case "롱레인지 트루샷":
        case "롱레인지트루샷":
        case "롱레트":
        case "트루샷":
            cbret = 22;
            break;
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
        case 4:
            rep = "피어싱";
            break;
        case 5:
            rep = "리트리트 샷";
            break;
        case 6:
            rep = "소울 애로우 : 석궁";
            break;
        case 7:
            rep = "인핸스 애로우";
            break;
        case 8:
            rep = "프리져";
            break;
        case 9:
            rep = "볼트 스위프트";
            break;
        case 10:
            rep = "볼트 플로우";
            break;
        case 11:
            rep = "페인 킬러";
            break;
        case 12:
            rep = "익스트림 아쳐리 : 석궁";
            break;
        case 13:
            rep = "모탈 블로우";
            break;
        case 14:
            rep = "데미지 리버싱";
            break;
        case 15:
            rep = "피어싱 II";
            break;
        case 16:
            rep = "스나이핑";
            break;
        case 17:
            rep = "어드밴스드 인핸스 애로우";
            break;
        case 18:
            rep = "애로우 일루전";
            break;
        case 19:
            rep = "어디셔널 볼트";
            break;
        case 20:
            rep = "라스트맨 스탠딩";
            break;
        case 21:
            rep = "불스아이";
            break;
        case 22:
            rep = "롱 레인지 트루샷";
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
    }
    return rep;
};
skcb.getskilldesc3Crossbow = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "";
            break;
        case 1:
            rep = "";
            break;
        case 2:
            rep = "";
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
        case 4:
            rep = "https://i.imgur.com/CNZV9Wx.png";
            break;
        case 5:
            rep = "https://i.imgur.com/WKJBJLQ.png";
            break;
        case 6:
            rep = "";
            break;
        case 7:
            rep = "https://i.imgur.com/ULhAOpq.png";
            break;
        case 8:
            rep = "https://i.imgur.com/bRBa8Cm.png";
            break;
        case 9:
            rep = "https://i.imgur.com/JpXa5QK.png";
            break;
        case 10:
            rep = "https://i.imgur.com/wYgifw7.png";
            break;
        case 11:
            rep = "https://i.imgur.com/D6fhLUi.png";
            break;
        case 12:
            rep = "";
            break;
        case 13:
            rep = "";
            break;
        case 14:
            rep = "https://i.imgur.com/FI09L1y.png";
            break;
        case 15:
            rep = "";
            break;
        case 16:
            rep = "https://i.imgur.com/8Ni2lS7.png";
            break;
        case 17:
            rep = "https://i.imgur.com/006V1vh.png";
            break;
        case 18:
            rep = "https://i.imgur.com/Saw3L0v.png";
            break;
        case 19:
            rep = "";
            break;
        case 20:
            rep = "";
            break;
        case 21:
            rep = "https://i.imgur.com/zXjeBpH.png";
            break;
        case 22:
            rep = "https://i.imgur.com/bcGBGxT.png";
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
        case 4:
            rep = "https://i.imgur.com/5zlGWJ5.png";
            break;
        case 5:
            rep = "https://i.imgur.com/QvpIAu1.png";
            break;
        case 6:
            rep = "https://i.imgur.com/L20raA7.png";
            break;
        case 7:
            rep = "https://i.imgur.com/zOJLr77.png";
            break;
        case 8:
            rep = "https://i.imgur.com/WLEirh5.png";
            break;
        case 9:
            rep = "https://i.imgur.com/V4z0ENf.png";
            break;
        case 10:
            rep = "https://i.imgur.com/9wBb0Iv.png";
            break;
        case 11:
            rep = "https://i.imgur.com/MAzY9TO.png";
            break;
        case 12:
            rep = "https://i.imgur.com/PltKjlr.png";
            break;
        case 13:
            rep = "https://i.imgur.com/HMbtQqJ.png";
            break;
        case 14:
            rep = "https://i.imgur.com/zKy1Y3F.png";
            break;
        case 15:
            rep = "https://i.imgur.com/Gbp5dhp.png";
            break;
        case 16:
            rep = "https://i.imgur.com/l8ifHA7.png";
            break;
        case 17:
            rep = "https://i.imgur.com/jPB7DgL.png";
            break;
        case 18:
            rep = "https://i.imgur.com/oUohXin.png";
            break;
        case 19:
            rep = "https://i.imgur.com/Ull9SUX.png";
            break;
        case 20:
            rep = "https://i.imgur.com/DsiA2ss.png";
            break;
        case 21:
            rep = "https://i.imgur.com/qNiMJ9g.png";
            break;
        case 22:
            rep = "https://i.imgur.com/GxO55Us.png";
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
    }
    return rep;
};

module.exports = skcb;