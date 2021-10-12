const ska = {};

ska.getskillAdventurer = function (skillname){
    var aret = -1;
    switch(skillname){
        case "메이플월드 여신의 축복":
        case "메이플월드여신의 축복":
        case "메이플월드여신의축복":
        case "메용2":
        case "메여축":
            aret = 0;
            break;
    }
    return aret;
};
ska.getskillnameAdventurer = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "메이플월드 여신의 축복";
            break;
    }
    return rep;
};
ska.getskilldesc1Adventurer = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "60초간 용사류스킬로 증가하는 능력치 400%증가/ 데미지20%";
            break;
    }
    return rep;
};
ska.getskilldesc2Adventurer = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "용사류스킬 적용중에만 가능/ 쿨180초";
            break;
    }
    return rep;
};
ska.getskillimage1Adventurer = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "https://i.imgur.com/ZNybeyO.png";
            break;
    }
    return rep;
};
ska.getskillimage2Adventurer = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "https://i.imgur.com/M7Mi9Nr.png";
            break;
    }
    return rep;
};

module.exports = ska;