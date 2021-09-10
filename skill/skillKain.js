const skk = {};

skk.getskillKain = function (skillname){
    var kret = -1;
    switch(skillname){
        case "[발현] 드래곤 버스트":
        case "[발현]드래곤버스트":
        case "드래곤버스트":
        case "드버":
        case "발현5차":
            kret = 0;
            break;
        case "[처형] 페이탈 블리츠":
        case "[처형]페이탈블리츠":
        case "페이탈블리츠":
        case "페이탈":
        case "블리츠":
        case "페블":
        case "처형5차":
            kret = 1;
            break;
        case "타나토스디센트":
        case "타나토스":
        case "디센트":
        case "타디":
            kret = 2;
            break;
        case "그립 오브 애거니":
        case "그립오브애거니":
        case "그립":
        case "애거니":
        case "예거니":
            kret = 3;
            break;
        /*case "":
            kret = 4;
            break;
        case "":
            kret = 5;
            break;
        case "":
            kret = 6;
            break;
        case "":
            kret = 7;
            break;
        case "":
            kret = 8;
            break;
        case "":
            kret = 9;
            break;*/
    }
    return kret;
};
skk.getskillnameKain = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "[발현] 드래곤 버스트";
            break;
        case 1:
            rep = "[처형] 페이탈 블리츠";
            break;
        case 2:
            rep = "타나토스 디센트";
            break;
        case 3:
            rep = "그립 오브 애거니";
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
skk.getskilldesc1Kain = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "5초간 키다운가능, 12명,880%,12번 연속공격, 최대15회까지 공격가능";
            break;
        case 1:
            rep = "2초간 8명,660%,12번 연속공격, 최대14회까지 공격가능";
            break;
        case 2:
            rep = "35초간 뎀45%/ 스킬적중시 715%,3번,6개/ 일몹뎀25%증가/쿨3초";
            break;
        case 3:
            rep = "[패]30명처치 혹은 보스25번공격시 단말마1개수확,최대5개/ 쿨90초";
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
skk.getskilldesc2Kain = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "횟수소모시 즉시종료/ 방향전환가능, 0.5초뒤에 재전환가능/ 쿨90초";
            break;
        case 1:
            rep = "횟수소모시 즉시종료/ 쿨90초";
            break;
        case 2:
            rep = "재사용시 즉시종료/ 15명,1430%,15번 연속공격/ 시전동작중 무적";
            break;
        case 3:
            rep = "[액]단말마모두소모 5초간12명, 1320%,6번지속공격, 1개당 1초증가";
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
skk.getskillimage1Kain = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "https://i.imgur.com/cv6PzfR.png";
            break;
        case 1:
            rep = "https://i.imgur.com/Vitr0kx.png";
            break;
        case 2:
            rep = "https://i.imgur.com/zaUqVun.png";
            break;
        case 3:
            rep = "https://i.imgur.com/8M3LTMa.png";
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
skk.getskillimage2Kain = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "https://i.imgur.com/ckgvfKo.png";
            break;
        case 1:
            rep = "https://i.imgur.com/f9ipVcS.png";
            break;
        case 2:
            rep = "https://i.imgur.com/930dsZ7.png";
            break;
        case 3:
            rep = "https://i.imgur.com/0AIT3Es.png";
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

module.exports = skk;