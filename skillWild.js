const skwd = {};

skwd.getskillWild = function (skillname){
    var wdret = -1;
    switch(skillname){
        case "재규어 스톰":
        case "재규어스톰":
        case "스톰":
        case "재스":
            wdret = 0;
            break;
        case "재규어 맥시멈":
        case "재규어맥시멈":
        case "맥시멈":
        case "재맥":
            wdret = 1;
            break;
        case "와일드 그레네이드":
        case "와일드 그리네이드":
        case "와일드그레네이드":
        case "와일드그리네이드":
        case "그레네이드":
        case "그리네이드":
        case "와그":
            wdret = 2;
            break;
        case "와일드 발칸 Type X":
        case "와일드발칸TypeX":
        case "TypeX":
        case "타입엑스":
        case "타입":
        case "엑스":
        case "와발엑":
            wdret = 3;
            break;
        /*case "":
            wdret = 4;
            break;
        case "":
            wdret = 5;
            break;
        case "":
            wdret = 6;
            break;
        case "":
            wdret = 7;
            break;
        case "":
            wdret = 8;
            break;
        case "":
            wdret = 9;
            break;*/
    }
    return wdret;
};
skwd.getskillnameWild = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "재규어 스톰";
            break;
        case 1:
            rep = "재규어 맥시멈";
            break;
        case 2:
            rep = "와일드 그레네이드";
            break;
        case 3:
            rep = "와일드 발칸 Type X";
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
skwd.getskilldesc1Wild = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "40초간 7마리소환/최종뎀반영90%, 일몹뎀150%,바이트확률50%";
            break;
        case 1:
            rep = "11초간무적/15명,740%,12번,9회/990%,15번,4회마무리공격/크확,방무100%";
            break;
        case 2:
            rep = "폭발시 8명,1320%,5번 공격/ 4.5초당 1개준비,최대8개/ 쿨0.5초";
            break;
        case 3:
            rep = "7.2초간 키다운가능,8명,1260%,5번 공격/ 방무 20%추가/ 쿨120초";
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
skwd.getskilldesc2Wild = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "↓키함께사용시 재규어3마리소환/최종뎀반영률210%/[패시브:공65]/쿨120초";
            break;
        case 1:
            rep = "스킬다시사용시 마무리공격, 100%확률로 바이트최대중첩/ 쿨120초";
            break;
        case 2:
            rep = "와일드 발칸, 와일드 발칸 Type X 도중 사용 시 시전 동작 없음";
            break;
        case 3:
            rep = "초당 타수 45타";
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
skwd.getskillimage1Wild = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "https://i.imgur.com/lRUeLkH.png";
            break;
        case 1:
            rep = "https://i.imgur.com/optOXWJ.png";
            break;
        case 2:
            rep = "https://i.imgur.com/c37k9kz.png";
            break;
        case 3:
            rep = "https://i.imgur.com/uTi22Hb.png";
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
skwd.getskillimage2Wild = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "https://i.imgur.com/iTeujsw.png";
            break;
        case 1:
            rep = "https://i.imgur.com/3pNoT0X.png";
            break;
        case 2:
            rep = "https://i.imgur.com/gavX7n4.png";
            break;
        case 3:
            rep = "https://i.imgur.com/VG22it3.png";
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

module.exports = skwd;