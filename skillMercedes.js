const skmer = {};

skmer.getskillMercedes = function (skillname){
    var meret = -1;
    switch(skillname){
        case "엘리멘탈 고스트":
        case "엘리멘탈고스트":
        case "고스트":
        case "엘고":
            meret = 0;
            break;
        case "실피디아":
        case "실피":
        case "조랑말":
        case "말":
        case "라이딩":
            meret = 1;
            break;
        case "이르칼라의 숨결":
        case "이르칼라의숨결":
        case "이르칼라":
        case "이르":
        case "숨결":
        case "이숨":
            meret = 2;
            break;
        case "로얄 나이츠":
        case "로얄나이츠":
        case "로얄":
        case "로나":
            meret = 3;
            break;
        /*case "":
            meret = 4;
            break;
        case "":
            meret = 5;
            break;
        case "":
            meret = 6;
            break;
        case "":
            meret = 7;
            break;
        case "":
            meret = 8;
            break;
        case "":
            meret = 9;
            break;*/
    }
    return meret;
};
skmer.getskillnameMercedes = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "엘리멘탈 고스트";
            break;
        case 1:
            rep = "실피디아";
            break;
        case 2:
            rep = "이르칼라의 숨결";
            break;
        case 3:
            rep = "로얄 나이츠";
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
skmer.getskilldesc1Mercedes = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "70초간 3번추가공격 /발동확률90%, 추가공격부터 20%씩감소/쿨150초";
            break;
        case 1:
            rep = "45초간 탑승, 탑승중 스탠스100%, 공20%증가/ 피격뎀 25%감소";
            break;
        case 2:
            rep = "최대 8.5초간 키다운가능/ 10명,880%,8번 연속공격";
            break;
        case 3:
            rep = "30초동안 공격적중시 기사 4명 등장, 715%,4번 공격/ 재등장쿨1.4초";
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
skmer.getskilldesc2Mercedes = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "10초마다 10명,900%,8번공격 에우렐의형상발생,연계스킬사용시 쿨1초감소";
            break;
        case 1:
            rep = "돌진공격 12명,1425%,9번 공격/ 쿨150초";
            break;
        case 2:
            rep = "뒷걸음질 가능, 방향키를 두 번 입력하여 방향 전환 가능/ 쿨150초";
            break;
        case 3:
            rep = "시전 및 해제 동작 중 무적/ 쿨150초";
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
skmer.getskillimage1Mercedes = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "https://i.imgur.com/oe2ped4.png";
            break;
        case 1:
            rep = "https://i.imgur.com/ww5aoir.png";
            break;
        case 2:
            rep = "https://i.imgur.com/rZuZ2NT.png";
            break;
        case 3:
            rep = "https://i.imgur.com/3auXPC1.png";
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
skmer.getskillimage2Mercedes = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "https://i.imgur.com/5Cm9l4K.png";
            break;
        case 1:
            rep = "https://i.imgur.com/pUazQMa.png";
            break;
        case 2:
            rep = "https://i.imgur.com/SS9o38d.png";
            break;
        case 3:
            rep = "https://i.imgur.com/I35EXW9.png";
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

module.exports = skmer;