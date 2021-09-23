const skp = {};

skp.getskillPaladin = function (skillname){
    var pret = -1;
    switch(skillname){
        case "홀리 유니티":
        case "홀리유니티":
        case "홀유":
        case "유니티":
        case "결속":
            pret = 0;
            break;
        case "블래스드 해머":
        case "블래스드해머":
        case "블해":
        case "해머":
            pret = 1;
            break;
        case "그랜드 크로스":
        case "그랜드크로스":
        case "그크":
        case "크로스":
            pret = 2;
            break;
        case "마이티 묠니르":
        case "마이티묠니르":
        case "묠니르":
        case "마묠":
            pret = 3;
            break;
        /*case "":
            pret = 4;
            break;
        case "":
            pret = 5;
            break;
        case "":
            pret = 6;
            break;
        case "":
            pret = 7;
            break;
        case "":
            pret = 8;
            break;
        case "":
            pret = 9;
            break;
        case "":
            pret = 10;
            break;
        case "":
            pret = 11;
            break;
        case "":
            pret = 12;
            break;
        case "":
            pret = 13;
            break;
        case "":
            pret = 14;
            break;
        case "":
            pret = 15;
            break;
        case "":
            pret = 16;
            break;
        case "":
            pret = 17;
            break;
        case "":
            pret = 18;
            break;
        case "":
            pret = 19;
            break;*/
    }
    return pret;
};
skp.getskillnamePaladin = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "홀리 유니티";
            break;
        case 1:
            rep = "블래스드 해머";
            break;
        case 2:
            rep = "그랜드 크로스";
            break;
        case 3:
            rep = "마이티 묠니르";
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
skp.getskilldesc1Paladin = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "70초간 최종뎀 50%/ 파티원 결속 : 공격스킬 최종데미지 40%";
            break;
        case 1:
            rep = "하단 참조";
            break;
        case 2:
            rep = "키다운, 12명,385% 12번 공격-> 660%/ 최대10초/ 크확,방무 100%";
            break;
        case 3:
            rep = "목표 1명,495%,6번 공격, 추가크확 50%/ 첫공격 포함 4명 추적";
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
skp.getskilldesc2Paladin = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "버프 스킬의 지속시간 65%/ 힘 1000당 1%/ 쿨120초";
            break;
        case 1:
            rep = "차지스택이 사라지면 활성화여부 무관 망치가 바로 사라진다";
            break;
        case 2:
            rep = "초당 HP 1.5%/ 피격뎀 50%감소/ 쿨 150초";
            break;
        case 3:
            rep = "충격파 발생, 6명,550%,9번 추가 공격/ 15초마다 1개, 최대 2개";
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
skp.getskilldesc3Paladin = function (skillcode){
    rep = "";
    switch(skillcode){
        case 1:
            rep = "패시브 효과 : 엘리멘탈 차지가 충전될 때마다 30초 동안 팔라딘 주위를 회전하는 망치 1개 자동 생성, 최대 5개까지 생성 가능하나 엘리멘탈 차지가 사라지면 함께 사라짐\n망치는 주변에 있는 최대 4명의 적들을 550%의 데미지로 2번 자동 공격, 망치의 수가 늘어날 때마다 공격 속도 증가\n\n액티브 효과 : MP 1000 소비, 30초 동안 망치가 강화되어 더 넓은 범위에 있는 최대 8명의 적을 1155%의 데미지로 3번 공격\n\n재사용 대기시간 60초";
            break;
    }
    return rep;
};
skp.getskillimage1Paladin = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "https://i.imgur.com/wqIs1kM.png";
            break;
        case 1:
            rep = "https://i.imgur.com/4ll8NzB.png";
            break;
        case 2:
            rep = "https://i.imgur.com/gO30Zox.png";
            break;
        case 3:
            rep = "https://i.imgur.com/aY05a8B.png";
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
skp.getskillimage2Paladin = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "https://i.imgur.com/D6F2axJ.png";
            break;
        case 1:
            rep = "https://i.imgur.com/milUjVm.png";
            break;
        case 2:
            rep = "https://i.imgur.com/fRUrPtZ.png";
            break;
        case 3:
            rep = "https://i.imgur.com/PuFMzlb.png";
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

module.exports = skp;