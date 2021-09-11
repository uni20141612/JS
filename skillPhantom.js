const skpt = {};

skpt.getskillPhantom = function (skillname){
    var ptret = -1;
    switch(skillname){
        case "팬텀 슈라우드":
        case "팬텀슈라우드":
        case "슈라우드":
        case "텔레포트":
        case "텔포":
            ptret = 0;
            break;
        case "하이 덱스터러티":
        case "하이 덱스터리티":
        case "하이덱스터러티":
        case "하이덱스터리티":
            ptret = 1;
            break;
        case "스틸 스킬":
        case "스틸스킬":
        case "스틸":
        case "훔치기":
        case "도둑질":
            ptret = 2;
            break;
        case "스킬 매니지먼트":
        case "스킬매니지먼트":
        case "스킬관리":
        case "매니지먼트":
            ptret = 3;
            break;
        case "저지먼트":
            ptret = 4;
            break;
        case "데들리 인스팅트":
        case "데들리인스팅트":
        case "링크스킬":
        case "링크":
            ptret = 5;
            break;
        case "탤런트 오브 팬텀시프I":
        case "탤런트오브팬텀시프I":
        case "탤런트 오브 팬텀시프1":
        case "탤런트오브팬텀시프1":
        case "탤오팬I":
        case "탤오팬1":
        case "탤런트I":
        case "탤런트1":
            ptret = 6;
            break;
        case "스위프트 팬텀":
        case "스위프트팬텀":
        case "스위프트":
        case "트리플 점프":
        case "트리플점프":
        case "트점":
            ptret = 7;
            break;
        case "퀵 이베이젼":
        case "퀵이베이젼":
            ptret = 8;
            break;
        case "탤런트 오브 팬텀시프II":
        case "탤런트오브팬텀시프II":
        case "탤런트 오브 팬텀시프2":
        case "탤런트오브팬텀시프2":
        case "탤오팬II":
        case "탤오팬2":
        case "탤런트II":
        case "탤런트2":
            ptret = 9;
            break;
        case "브리즈 카르트":
        case "브리즈카르트":
        case "브리즈":
        case "밀격기":
        case "밀격":
            ptret = 10;
            break;
        case "럭 모노폴리":
        case "럭모노폴리":
        case "모노폴리":
            ptret = 11;
            break;
        case "코트 오브 암즈":
        case "코트오브암즈":
        case "코오암":
        case "암즈":
            ptret = 12;
            break;
        case "탤런트 오브 팬텀시프III":
        case "탤런트오브팬텀시프III":
        case "탤런트 오브 팬텀시프3":
        case "탤런트오브팬텀시프3":
        case "탤오팬III":
        case "탤오팬3":
        case "탤런트III":
        case "탤런트3":
            ptret = 13;
            break;
        case "럭 오브 팬텀시프":
        case "럭오브팬텀시프":
        case "럭오팬":
            ptret = 14;
            break;
        case "미스포츈 프로텍션":
        case "미스포츈프로텍션":
        case "미스포츈":
        case "미포":
        case "미프":
            ptret = 15;
            break;
        case "문 라이트":
        case "문라이트":
        case "문라":
            ptret = 16;
            break;
        case "플래시 앤 플리":
        case "플래시앤플리":
        case "플래시":
            ptret = 17;
            break;
        case "어큐트 센스":
        case "어큐트센스":
        case "어큐트":
            ptret = 18;
            break;
        case "얼티밋 드라이브":
        case "얼티밋드라이브":
        case "얼티밋":
        case "얼드":
            ptret = 19;
            break;
        case "탤런트 오브 팬텀시프IV":
        case "탤런트오브팬텀시프IV":
        case "탤런트 오브 팬텀시프4":
        case "탤런트오브팬텀시프4":
        case "탤오팬IV":
        case "탤오팬4":
        case "탤런트IV":
        case "탤런트4":
            ptret = 20;
            break;
        case "템페스트 오브 카드":
        case "템페스트오브카드":
        case "템페스트":
        case "템오카":
            ptret = 21;
            break;
        case "트와일라이트":
        case "트와일":
            ptret = 22;
            break;
        case "느와르 카르트":
        case "느와르카르트":
        case "느와르":
            ptret = 23;
            break;
        case "소울 스틸":
        case "소울스틸":
        case "소울":
            ptret = 24;
            break;
        case "프레이 오브 아리아":
        case "프레이오브아리아":
        case "프레이":
        case "프오아":
        case "아리아":
            ptret = 25;
            break;
        case "탤런트 오브 팬텀시프H":
        case "탤런트 오브 팬텀시프5":
        case "탤런트오브팬텀시프H":
        case "탤런트오브팬텀시프5":
        case "탤오팬H":
        case "탤오팬5":
        case "탤런트H":
        case "탤런트5":
            ptret = 26;
            break;
        case "로즈 카르트 피날레":
        case "로즈카르트피날레":
        case "로즈":
        case "피날레":
        case "로카피":
            ptret = 27;
            break;
        case "조커":
            ptret = 28;
            break;
        case "블랙잭":
            ptret = 29;
            break;
        case "마크 오브 팬텀":
        case "마크오브팬텀":
        case "마오팬":
            ptret = 30;
            break;
        case "리프트 브레이크":
        case "리프트브레이크":
        case "리프트":
        case "브레이크":
        case "리브":
            ptret = 31;
            break;
    }
    return ptret;
};
skpt.getskillnamePhantom = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "팬텀 슈라우드";
            break;
        case 1:
            rep = "하이 덱스터러티";
            break;
        case 2:
            rep = "스틸 스킬";
            break;
        case 3:
            rep = "스킬 매니지먼트";
            break;
        case 4:
            rep = "저지먼트";
            break;
        case 5:
            rep = "데들리 인스팅트";
            break;
        case 6:
            rep = "탤런트 오브 팬텀시프I";
            break;
        case 7:
            rep = "스위프트 팬텀";
            break;
        case 8:
            rep = "퀵 이베이젼";
            break;
        case 9:
            rep = "탤런트 오브 팬텀시프II";
            break;
        case 10:
            rep = "브리즈 카르트";
            break;
        case 11:
            rep = "럭 모노폴리";
            break;
        case 12:
            rep = "코트 오브 암즈";
            break;
        case 13:
            rep = "탤런트 오브 팬텀시프III";
            break;
        case 14:
            rep = "럭 오브 팬텀시프";
            break;
        case 15:
            rep = "미스포츈 프로텍션";
            break;
        case 16:
            rep = "문 라이트";
            break;
        case 17:
            rep = "플래시 앤 플리";
            break;
        case 18:
            rep = "어큐트 센스";
            break;
        case 19:
            rep = "얼티밋 드라이브";
            break;
        case 20:
            rep = "탤런트 오브 팬텀시프IV";
            break;
        case 21:
            rep = "템페스트 오브 카드";
            break;
        case 22:
            rep = "트와일라이트";
            break;
        case 23:
            rep = "느와르 카르트";
            break;
        case 24:
            rep = "소울 스틸";
            break;
        case 25:
            rep = "프레이 오브 아리아";
            break;
        case 26:
            rep = "탤런트 오브 팬텀시프H";
            break;
        case 27:
            rep = "로즈 카르트 피날레";
            break;
        case 28:
            rep = "조커";
            break;
        case 29:
            rep = "블랙잭";
            break;
        case 30:
            rep = "마크 오브 팬텀";
            break;
        case 31:
            rep = "리프트 브레이크";
            break;
    }
    return rep;
};
skpt.getskilldesc1Phantom = function (skillcode){
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
        case 30:
            rep = "";
            break;
        case 31:
            rep = "";
            break;
    }
    return rep;
};
skpt.getskilldesc2Phantom = function (skillcode){
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
        case 30:
            rep = "";
            break;
        case 31:
            rep = "";
            break;
    }
    return rep;
};
skpt.getskilldesc3Phantom = function (skillcode){
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
        case 30:
            rep = "";
            break;
        case 31:
            rep = "";
            break;
    }
    return rep;
};
skpt.getskillimage1Phantom = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "https://i.imgur.com/m9MY6vU.png";
            break;
        case 1:
            rep = "";
            break;
        case 2:
            rep = "https://i.imgur.com/qvgsX6G.png";
            break;
        case 3:
            rep = "https://i.imgur.com/drwWF7h.png";
            break;
        case 4:
            rep = "https://i.imgur.com/TFSMLOK.png";
            break;
        case 5:
            rep = "";
            break;
        case 6:
            rep = "";
            break;
        case 7:
            rep = "https://i.imgur.com/i8SmOMT.png";
            break;
        case 8:
            rep = "";
            break;
        case 9:
            rep = "";
            break;
        case 10:
            rep = "https://i.imgur.com/DHFlyyh.png";
            break;
        case 11:
            rep = "";
            break;
        case 12:
            rep = "https://i.imgur.com/PT1cWSF.png";
            break;
        case 13:
            rep = "";
            break;
        case 14:
            rep = "https://i.imgur.com/N1fwwcd.png";
            break;
        case 15:
            rep = "";
            break;
        case 16:
            rep = "";
            break;
        case 17:
            rep = "https://i.imgur.com/z5ozXk4.png";
            break;
        case 18:
            rep = "";
            break;
        case 19:
            rep = "https://i.imgur.com/FREcTmr.png";
            break;
        case 20:
            rep = "";
            break;
        case 21:
            rep = "https://i.imgur.com/lG8bOiq.png";
            break;
        case 22:
            rep = "https://i.imgur.com/PotGpGz.png";
            break;
        case 23:
            rep = "https://i.imgur.com/9TEe8Ke.png";
            break;
        case 24:
            rep = "https://i.imgur.com/1Hxnb6G.png";
            break;
        case 25:
            rep = "https://i.imgur.com/khDSELn.png";
            break;
        case 26:
            rep = "";
            break;
        case 27:
            rep = "https://i.imgur.com/wnZpCts.png";
            break;
        case 28:
            rep = "https://i.imgur.com/oJT3uYZ.png";
            break;
        case 29:
            rep = "https://i.imgur.com/FutqS6Y.png";
            break;
        case 30:
            rep = "https://i.imgur.com/CEqHpPA.png";
            break;
        case 31:
            rep = "https://i.imgur.com/v7DQNVN.png";
            break;
    }
    return rep;
};
skpt.getskillimage2Phantom = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "https://i.imgur.com/XKXwdzt.png";
            break;
        case 1:
            rep = "https://i.imgur.com/AmkXo0F.png";
            break;
        case 2:
            rep = "https://i.imgur.com/64p7AlX.png";
            break;
        case 3:
            rep = "https://i.imgur.com/wbP5U3h.png";
            break;
        case 4:
            rep = "https://i.imgur.com/PzOTQA8.png";
            break;
        case 5:
            rep = "https://i.imgur.com/SiVSNSE.png";
            break;
        case 6:
            rep = "https://i.imgur.com/IHL1AE9.png";
            break;
        case 7:
            rep = "https://i.imgur.com/9F134IH.png";
            break;
        case 8:
            rep = "https://i.imgur.com/77xd7QF.png";
            break;
        case 9:
            rep = "https://i.imgur.com/MyagjYV.png";
            break;
        case 10:
            rep = "https://i.imgur.com/yiCY16M.png";
            break;
        case 11:
            rep = "https://i.imgur.com/La6Xwjr.png";
            break;
        case 12:
            rep = "https://i.imgur.com/GzM9hwt.png";
            break;
        case 13:
            rep = "https://i.imgur.com/ylIsiDC.png";
            break;
        case 14:
            rep = "https://i.imgur.com/wUcIj6H.png";
            break;
        case 15:
            rep = "https://i.imgur.com/jyVv00L.png";
            break;
        case 16:
            rep = "https://i.imgur.com/8LkKnZV.png";
            break;
        case 17:
            rep = "https://i.imgur.com/vwLK7hF.png";
            break;
        case 18:
            rep = "https://i.imgur.com/aInPKvu.png";
            break;
        case 19:
            rep = "https://i.imgur.com/48p1JWN.png";
            break;
        case 20:
            rep = "https://i.imgur.com/0Xsx0IT.png";
            break;
        case 21:
            rep = "https://i.imgur.com/2GUAExp.png";
            break;
        case 22:
            rep = "https://i.imgur.com/PkYLgv1.png";
            break;
        case 23:
            rep = "https://i.imgur.com/HlNo1vj.png";
            break;
        case 24:
            rep = "https://i.imgur.com/llQCPrX.png";
            break;
        case 25:
            rep = "https://i.imgur.com/UCVWBUw.png";
            break;
        case 26:
            rep = "https://i.imgur.com/g86i52h.png";
            break;
        case 27:
            rep = "https://i.imgur.com/EAUXOeu.png";
            break;
        case 28:
            rep = "https://i.imgur.com/LeUOLWZ.png";
            break;
        case 29:
            rep = "https://i.imgur.com/Ak6cI6B.png";
            break;
        case 30:
            rep = "https://i.imgur.com/xnJRfgk.png";
            break;
        case 31:
            rep = "https://i.imgur.com/00Ezb4j.png";
            break;
    }
    return rep;
};

module.exports = skpt;