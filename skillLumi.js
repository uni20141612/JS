const sklm = {};

sklm.getskillLumi = function (skillname){
    var lmret = -1;
    switch(skillname){
        case "파워 오브 라이트":
        case "파워오브라이트":
            lmret = 0;
            break;
        case "라이트 블링크":
        case "라이트블링크":
            lmret = 1;
            break;
        case "퍼미에이트":
        case "루미링크":
        case "링크":
            lmret = 2;
            break;
        case "선파이어":
        case "빛":
            lmret = 3;
            break;
        case "이클립스":
        case "어둠":
            lmret = 4;
            break;
        case "이퀄리브리엄":
        case "이퀼리브리엄":
        case "이퀄":
        case "이퀼":
            lmret = 5;
            break;
        case "라이트랜스포밍":
        case "텔레포트":
        case "텔포":
            lmret = 6;
            break;
        case "오디너리 매직가드":
        case "오디너리매직가드":
        case "매직가드":
            lmret = 7;
            break;
        case "익스텐드 마나":
        case "익스텐드마나":
            lmret = 8;
            break;
        case "빛 마법 강화":
        case "빛마법강화":
        case "빛강화":
            lmret = 9;
            break;
        case "어둠 마법 강화":
        case "어둠마법강화":
        case "어둠강화":
            lmret = 10;
            break;
        case "실피드 랜서":
        case "실피드랜서":
            lmret = 11;
            break;
        case "인바이러빌러티":
            lmret = 12;
            break;
        case "블레스 오브 다크니스":
        case "블레스오브다크니스":
            lmret = 13;
            break;
        case "스펠 마스터리":
        case "스펠마스터리":
            lmret = 14;
            break;
        case "하이 위즈덤":
        case "하이위즈덤":
            lmret = 15;
            break;
        case "샤인 리뎀션":
        case "샤인리뎀션":
            lmret = 16;
            break;
        case "데스 사이드":
        case "데스사이드":
            lmret = 17;
            break;
        case "안티 매직쉘":
        case "안티매직쉘":
            lmret = 18;
            break;
        case "포틱 메디테이션":
        case "포틱메디테이션":
        case "메디테이션":
            lmret = 19;
            break;
        case "라이트쉐도우 가드":
        case "라이트쉐도우가드":
            lmret = 20;
            break;
        case "라이프 타이달":
        case "라이프타이달":
            lmret = 21;
            break;
        case "운명의 갈림길":
        case "운명의갈림길":
        case "갈림길":
            lmret = 22;
            break;
        case "라이트 리플렉션":
        case "라이트리플렉션":
        case "라리플":
            lmret = 23;
            break;
        case "모닝 스타폴":
        case "모닝스타폴":
        case "메테오":
            lmret = 24;
            break;
        case "아포칼립스":
        case "아포":
            lmret = 25;
            break;
        case "앱솔루트 킬":
        case "앱솔루트킬":
        case "앱솔":
            lmret = 26;
            break;
        case "다크니스 소서러":
        case "다크니스소서러":
            lmret = 27;
            break;
        case "다크 크레센도":
        case "다크크레센도":
            lmret = 28;
            break;
        case "다크라이트 마스터리":
        case "다크라이트마스터리":
            lmret = 29;
            break;
        case "메모라이즈":
            lmret = 30;
            break;
        case "아마겟돈":
            lmret = 31;
            break;
        case "진리의 문":
        case "진리의문":
        case "진리":
            lmret = 32;
            break;
        case "퍼니싱 리조네이터":
        case "퍼니싱리조네이터":
        case "퍼니싱":
            lmret = 33;
            break;
        case "빛과 어둠의 세례":
        case "빛과어둠의세례":
        case "빛둠세":
            lmret = 34;
            break;
        case "리버레이션 오브":
        case "리버레이션오브":
            lmret = 35;
            break;
    }
    return lmret;
};
sklm.getskillnameLumi = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "파워 오브 라이트";
            break;
        case 1:
            rep = "라이트 블링크";
            break;
        case 2:
            rep = "퍼미에이트";
            break;
        case 3:
            rep = "선파이어";
            break;
        case 4:
            rep = "이클립스";
            break;
        case 5:
            rep = "이퀄리브리엄";
            break;
        case 6:
            rep = "라이트랜스포밍";
            break;
        case 7:
            rep = "오디너리 매직가드";
            break;
        case 8:
            rep = "익스텐드 마나";
            break;
        case 9:
            rep = "빛 마법 강화";
            break;
        case 10:
            rep = "어둠 마법 강화";
            break;
        case 11:
            rep = "실피드 랜서";
            break;
        case 12:
            rep = "인바이러빌러티";
            break;
        case 13:
            rep = "블레스 오브 다크니스";
            break;
        case 14:
            rep = "스펠 마스터리";
            break;
        case 15:
            rep = "하이 위즈덤";
            break;
        case 16:
            rep = "샤인 리뎀션";
            break;
        case 17:
            rep = "데스 사이드";
            break;
        case 18:
            rep = "안티 매직쉘";
            break;
        case 19:
            rep = "포틱 메디테이션";
            break;
        case 20:
            rep = "라이트쉐도우 가드";
            break;
        case 21:
            rep = "라이프 타이달";
            break;
        case 22:
            rep = "운명의 갈림길";
            break;
        case 23:
            rep = "라이트 리플렉션";
            break;
        case 24:
            rep = "모닝 스타폴";
            break;
        case 25:
            rep = "아포칼립스";
            break;
        case 26:
            rep = "앱솔루트 킬";
            break;
        case 27:
            rep = "다크니스 소서러";
            break;
        case 28:
            rep = "다크 크레센도";
            break;
        case 29:
            rep = "다크라이트 마스터리";
            break;
        case 30:
            rep = "메모라이즈";
            break;
        case 31:
            rep = "아마겟돈";
            break;
        case 32:
            rep = "진리의 문";
            break;
        case 33:
            rep = "퍼니싱 리조네이터";
            break;
        case 34:
            rep = "빛과 어둠의 세례";
            break;
        case 35:
            rep = "리버레이션 오브";
            break;
    }
    return rep;
};
sklm.getskilldesc1Lumi = function (skillcode){
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
        case 32:
            rep = "";
            break;
        case 33:
            rep = "";
            break;
        case 34:
            rep = "";
            break;
        case 35:
            rep = "";
            break;
    }
    return rep;
};
sklm.getskilldesc2Lumi = function (skillcode){
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
        case 32:
            rep = "";
            break;
        case 33:
            rep = "";
            break;
        case 34:
            rep = "";
            break;
        case 35:
            rep = "";
            break;
    }
    return rep;
};
sklm.getskillimage1Lumi = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "";
            break;
        case 1:
            rep = "https://i.imgur.com/ZGeW5Az.png";
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
            rep = "https://i.imgur.com/IjDtANY.png";
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
            rep = "https://i.imgur.com/B0JN4OR.png";
            break;
        case 12:
            rep = "https://i.imgur.com/fOMoNqN.png";
            break;
        case 13:
            rep = "https://i.imgur.com/zVEh6HR.png";
            break;
        case 14:
            rep = "";
            break;
        case 15:
            rep = "";
            break;
        case 16:
            rep = "https://i.imgur.com/Hxj5VTn.png";
            break;
        case 17:
            rep = "https://i.imgur.com/eLLbxuG.png";
            break;
        case 18:
            rep = "https://i.imgur.com/2GKfibe.png";
            break;
        case 19:
            rep = "https://i.imgur.com/KXDgg9O.png";
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
            rep = "https://i.imgur.com/oIJJ4k3.png";
            break;
        case 24:
            rep = "https://i.imgur.com/7dwy8Ki.png";
            break;
        case 25:
            rep = "https://i.imgur.com/iWHViqc.png";
            break;
        case 26:
            rep = "https://i.imgur.com/M4j6MEf.png";
            break;
        case 27:
            rep = "https://i.imgur.com/HyFV0mV.png";
            break;
        case 28:
            rep = "https://i.imgur.com/d6rJv8j.png";
            break;
        case 29:
            rep = "";
            break;
        case 30:
            rep = "https://i.imgur.com/HZx68PS.png";
            break;
        case 31:
            rep = "https://i.imgur.com/9dx9p15.png";
            break;
        case 32:
            rep = "https://i.imgur.com/hJ3J2AQ.png";
            break;
        case 33:
            rep = "https://i.imgur.com/fqcDQqb.png";
            break;
        case 34:
            rep = "https://i.imgur.com/ligV7to.png";
            break;
        case 35:
            rep = "https://i.imgur.com/CJwXO7W.png";
            break;
    }
    return rep;
};
sklm.getskillimage2Lumi = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "https://i.imgur.com/5PqbOfs.png";
            break;
        case 1:
            rep = "https://i.imgur.com/u1zNghX.png";
            break;
        case 2:
            rep = "https://i.imgur.com/DbbJ5Em.png";
            break;
        case 3:
            rep = "https://i.imgur.com/iKk7vWE.png";
            break;
        case 4:
            rep = "https://i.imgur.com/rTb5CDi.png";
            break;
        case 5:
            rep = "https://i.imgur.com/2i6XyBF.png";
            break;
        case 6:
            rep = "https://i.imgur.com/rojvK0K.png";
            break;
        case 7:
            rep = "https://i.imgur.com/ot0ADO8.png";
            break;
        case 8:
            rep = "https://i.imgur.com/EHZHZ8I.png";
            break;
        case 9:
            rep = "https://i.imgur.com/udpzg4F.png";
            break;
        case 10:
            rep = "https://i.imgur.com/nRqLNZH.png";
            break;
        case 11:
            rep = "https://i.imgur.com/Py75W9v.png";
            break;
        case 12:
            rep = "https://i.imgur.com/1YqQPDH.png";
            break;
        case 13:
            rep = "https://i.imgur.com/f6KmpIh.png";
            break;
        case 14:
            rep = "https://i.imgur.com/71gKsIe.png";
            break;
        case 15:
            rep = "https://i.imgur.com/HoIWneE.png";
            break;
        case 16:
            rep = "https://i.imgur.com/885v8Bi.png";
            break;
        case 17:
            rep = "https://i.imgur.com/XgCl7lH.png";
            break;
        case 18:
            rep = "https://i.imgur.com/8bhODKb.png";
            break;
        case 19:
            rep = "https://i.imgur.com/C3NbK8a.png";
            break;
        case 20:
            rep = "https://i.imgur.com/XwwfThv.png";
            break;
        case 21:
            rep = "https://i.imgur.com/BnkQmWt.png";
            break;
        case 22:
            rep = "https://i.imgur.com/NY6H0tp.png";
            break;
        case 23:
            rep = "https://i.imgur.com/oDkxBoB.png";
            break;
        case 24:
            rep = "https://i.imgur.com/PtNChRY.png";
            break;
        case 25:
            rep = "https://i.imgur.com/6AN1GHS.png";
            break;
        case 26:
            rep = "https://i.imgur.com/DfGpBtc.png";
            break;
        case 27:
            rep = "https://i.imgur.com/5WllJaq.png";
            break;
        case 28:
            rep = "https://i.imgur.com/THRyWE0.png";
            break;
        case 29:
            rep = "https://i.imgur.com/xxF7MhC.png";
            break;
        case 30:
            rep = "https://i.imgur.com/M2mEhWE.png";
            break;
        case 31:
            rep = "https://i.imgur.com/VHHSkPA.png";
            break;
        case 32:
            rep = "https://i.imgur.com/T7D1lT2.png";
            break;
        case 33:
            rep = "https://i.imgur.com/waRwKI9.png";
            break;
        case 34:
            rep = "https://i.imgur.com/sreZpnK.png";
            break;
        case 35:
            rep = "https://i.imgur.com/wxsfvMT.png";
            break;
    }
    return rep;
};

module.exports = sklm;