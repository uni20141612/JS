const skwb = {};

skwb.getskillWind = function (skillname){
    var wbret = -1;
    switch(skillname){
        case "하울링 게일":
        case "하울링게일":
        case "하게":
        case "게일":
        case "하울링":
            wbret = 0;
            break;
        case "아이들 윔":
        case "아이들 웜":
        case "아이들윔":
        case "아이들웜":
        case "아이들":
            wbret = 1;
            break;
        case "윈드 월":
        case "윈드 윌":
        case "윈드월":
        case "윈드윌":
        case "월":
            wbret = 2;
            break;
        case "볼텍스 스피어":
        case "볼텍스스피어":
        case "볼텍스":
            wbret = 3;
            break;
        /*case "":
            wbret = 4;
            break;
        case "":
            wbret = 5;
            break;
        case "":
            wbret = 6;
            break;
        case "":
            wbret = 7;
            break;
        case "":
            wbret = 8;
            break;
        case "":
            wbret = 9;
            break;
        case "":
            wbret = 10;
            break;
        case "":
            wbret = 11;
            break;
        case "":
            wbret = 12;
            break;
        case "":
            wbret = 13;
            break;
        case "":
            wbret = 14;
            break;
        case "":
            wbret = 15;
            break;
        case "":
            wbret = 16;
            break;
        case "":
            wbret = 17;
            break;
        case "":
            wbret = 18;
            break;
        case "":
            wbret = 19;
            break;*/
    }
    return wbret;
};
skwb.getskillnameWind = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "하울링 게일";
            break;
        case 1:
            rep = "아이들 윔";
            break;
        case 2:
            rep = "윈드 월";
            break;
        case 3:
            rep = "볼텍스 스피어";
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
skwb.getskilldesc1Wind = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "기운은 20초마다1개,최대2개/1개,10초,10명,550%,3번/2개,10초,15명,1320%,3번";
            break;
        case 1:
            rep = "8초동안,1100%,3번공격 정령 10개생성, 9초동안 초당 1100%, 쿨10초";
            break;
        case 2:
            rep = "45초동안 300의 엘리멘트생성, 피격시 최대HP의 1%당 엘리멘트 1소모, 쿨90초";
            break;
        case 3:
            rep = "일정간격마다 10명,880%,6번 공격 충돌발생 볼텍스 스피어 생성, 쿨30초";
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
skwb.getskilldesc2Wind = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = " 소환시 바람의기운 1개소모, ↓키같이누르면 바람의기운 모두소모";
            break;
        case 1:
            rep = "하나의 몬스터를 공격하면 2번째 정령의 기운부터 최종 데미지 25% 감소";
            break;
        case 2:
            rep = "2초마다 1210%,5번 돌개바람 3개발사, 1명공격하면 최종데미지 50% 감소";
            break;
        case 3:
            rep = "보스몬스터 공격시 1초동안 이동속도 50% 감소, 한명에게 최대20번충돌";
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
skwb.getskillimage1Wind = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "https://i.imgur.com/kOEdetd.png";
            break;
        case 1:
            rep = "https://i.imgur.com/6BoK6S2.png";
            break;
        case 2:
            rep = "https://i.imgur.com/11VENWG.png";
            break;
        case 3:
            rep = "https://i.imgur.com/PDDKstL.png";
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
skwb.getskillimage2Wind = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "https://i.imgur.com/VzwBFsi.png";
            break;
        case 1:
            rep = "https://i.imgur.com/acEEiL6.png";
            break;
        case 2:
            rep = "https://i.imgur.com/4wNcpHR.png";
            break;
        case 3:
            rep = "https://i.imgur.com/4PwcStc.png";
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

module.exports = skwb;