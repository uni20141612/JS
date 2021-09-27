const skb = {};

skb.getskillBeginner = function (skillname){
    var bret = -1;
    switch(skillname){
        case "달팽이 세마리":
        case "달팽이세마리":
        case "달팽이":
        case "세마리":
        case "달세":
            bret = 0;
            break;
        case "회복":
            bret = 1;
            break;
        case "민첩한 몸놀림":
        case "민첩한몸놀림":
        case "민첩":
        case "민몸":
        case "깃털":
            bret = 2;
            break;
        case "리턴 투 메이플":
        case "리턴투메이플":
        case "리턴":
        case "메이플":
            bret = 3;
            break;
    }
    return bret;
};
skb.getskillnameBeginner = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "달팽이 세마리";
            break;
        case 1:
            rep = "회복";
            break;
        case 2:
            rep = "민첩한 몸놀림";
            break;
        case 3:
            rep = "리턴 투 메이플";
            break;
    }
    return rep;
};
skb.getskilldesc1Beginner = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "달팽이의 껍질을 던져 원거리의 적을 공격한다.";
            break;
        case 1:
            rep = "자신의 HP를 30초 동안 지속적으로 회복시킨다.";
            break;
        case 2:
            rep = "순간적으로 빠르게 이동한다./ 쿨1분";
            break;
        case 3:
            rep = "메이플 아일랜드로 돌아간다./ 쿨600초";
            break;
    }
    return rep;
};
skb.getskilldesc2Beginner = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "MP 7 소비하여 데미지 40";
            break;
        case 1:
            rep = "MP 15 소비하여 30초 동안 HP 72 회복/ 쿨2분";
            break;
        case 2:
            rep = "MP 10 소비하여 12초 동안 이동속도 20 증가";
            break;
        case 3:
            rep = "사용 시 메이플 아일랜드의 사우스페리 항구로 귀환.";
            break;
    }
    return rep;
};
skb.getskilldesc3Beginner = function (skillcode){
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
skb.getskillimage1Beginner = function (skillcode){
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
            rep = "https://i.imgur.com/akJCf80.png";
            break;
    }
    return rep;
};
skb.getskillimage2Beginner = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "https://i.imgur.com/MxGXhR7.png";
            break;
        case 1:
            rep = "https://i.imgur.com/162jmqV.png";
            break;
        case 2:
            rep = "https://i.imgur.com/ER0UJgH.png";
            break;
        case 3:
            rep = "https://i.imgur.com/tEmZJV0.png";
            break;
    }
    return rep;
};

module.exports = skb;