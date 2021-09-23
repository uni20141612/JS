const skdk = {};

skdk.getskillDarkknight = function (skillname){
    var dret = -1;
    switch(skillname){
        case "다크 스피어":
        case "다크스피어":
            dret = 0;
            break;
        case "비홀더 임팩트":
        case "비홀더임팩트":
        case "임팩트":
        case "비임":
            dret = 1;
            break;
        case "피어스 사이클론":
        case "피어스사이클론":
        case "사이클론":
        case "피사":
            dret = 2;
            break;
        case "다크니스 오라":
        case "다크니스오라":
        case "오라":
        case "눈나":
            dret = 3;
            break;
        /*case "":
            dret = 4;
            break;
        case "":
            dret = 5;
            break;
        case "":
            dret = 6;
            break;
        case "":
            dret = 7;
            break;
        case "":
            dret = 8;
            break;
        case "":
            dret = 9;
            break;
        case "":
            dret = 10;
            break;
        case "":
            dret = 11;
            break;
        case "":
            dret = 12;
            break;
        case "":
            dret = 13;
            break;
        case "":
            dret = 14;
            break;
        case "":
            dret = 15;
            break;
        case "":
            dret = 16;
            break;
        case "":
            dret = 17;
            break;
        case "":
            dret = 18;
            break;
        case "":
            dret = 19;
            break;*/
    }
    return dret;
};
skdk.getskillnameDarkknight = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "다크 스피어";
            break;
        case 1:
            rep = "비홀더 임팩트";
            break;
        case 2:
            rep = "피어스 사이클론";
            break;
        case 3:
            rep = "다크니스 오라";
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
skdk.getskilldesc1Darkknight = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "12명,715%,7번 공격 창 생성/ 동작중 피격 데미지 10% 감소";
            break;
        case 1:
            rep = "3초간 10명,130%,6번 지속 공격/ 방무 20%/ 쿨 20초";
            break;
        case 2:
            rep = "9초간 12명,880%,12번 공격/ 적중시 HP 1%회복/ 쿨180초";
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
skdk.getskilldesc2Darkknight = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "추가크확 100%, 방무 50%/ 쿨10초";
            break;
        case 1:
            rep = "비홀더가 다크나이트 앞으로 이동";
            break;
        case 2:
            rep = "종료시 12명,660%,15번 충격파 5번, HP10%회복/ 크확100%, 방무50%";
            break;
        case 3:
            rep = "스킬 이펙트가 리모델링 되었음";
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
skdk.getskilldesc3Darkknight = function (skillcode){
    rep = "";
    switch(skillcode){
        case 3:
            rep = "MP 1000 소비, 40초 동안 일정 간격마다 최대 3명의 적을 880%의 데미지로 5번 공격 후 최대 HP의 3% 회복하며 생명력 1 획득, HP가 최대치라면 회복량의 75%에 해당하는 보호막 생성, 생명력 최대치 15, 보호막 최대치 최대 HP의 30%\n\n하이퍼 바디 적용 중 일정 간격으로 보호막의 최대치 만큼 생성\n아이언 월 적용 중 최대 HP의 일정 비율로 피해를 입히는 공격을 포함한 피격 데미지 10% 감소\n\n스킬을 재사용하여 종료 시 최대 8명의 적을 1455% 데미지로 13번 공격하는 어둠의 참격 발동, 획득한 생명력 3마다 참격 1번 추가 발동\n\n재사용 대기시간 : 180초";
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
skdk.getskillimage1Darkknight = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "https://i.imgur.com/mf9Bnmh.png";
            break;
        case 1:
            rep = "https://i.imgur.com/miwLzzQ.png";
            break;
        case 2:
            rep = "https://i.imgur.com/RkaGzWC.png";
            break;
        case 3:
            rep = "https://i.imgur.com/PrHO61l.png";
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
skdk.getskillimage2Darkknight = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "https://i.imgur.com/2q991yy.png";
            break;
        case 1:
            rep = "https://i.imgur.com/6PqmsGt.png";
            break;
        case 2:
            rep = "https://i.imgur.com/pT0C34l.png";
            break;
        case 3:
            rep = "https://i.imgur.com/Z5mtHoH.png";
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

module.exports = skdk;