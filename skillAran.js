const skar = {};

skar.getskillAran = function (skillname){
    var arret = -1;
    switch(skillname){
        case "컴뱃 스탭":
        case "컴뱃스탭":
        case "스탭":
        case "이동기":
            arret = 0;
            break;
        case "되찾은 기억":
        case "되찾은기억":
        case "기억":
            arret = 1;
            break;
        case "콤보킬 어드밴티지":
        case "콤보킬어드밴티지":
        case "콤보킬":
        case "링크스킬":
        case "링크":
            arret = 2;
            break;
        case "콤보 어빌리티":
        case "콤보어빌리티":
        case "어빌리티":
            arret = 3;
            break;
        case "스매시 스윙":
        case "스매시스윙":
            arret = 4;
            break;
        case "스매시 웨이브":
        case "스매시웨이브":
        case "웨이브":
            arret = 5;
            break;
        case "바디 프레셔":
        case "바디프레셔":
        case "바프":
        case "프레셔":
            arret = 6;
            break;
        case "파이널 차지":
        case "파이널차지":
        case "파차":
            arret = 7;
            break;
        case "파이널 토스":
        case "파이널토스":
        case "파토":
        case "토스":
            arret = 8;
            break;
        case "롤링 스핀":
        case "롤링스핀":
        case "롤링":
        case "스핀":
            arret = 9;
            break;
        case "드레인":
        case "피흡":
            arret = 10;
            break;
        case "스노우 차지":
        case "스노우차지":
        case "스차":
            arret = 11;
            break;
        case "다이나믹 마스터리 I":
        case "다이나믹 마스터리 1":
        case "다이나믹마스터리I":
        case "다이나믹마스터리1":
        case "다이나믹I":
        case "다이나믹1":
        case "마스터리I":
        case "마스터리1":
            arret = 12;
            break;
        case "스윙 연구 I":
        case "스윙 연구 1":
        case "스윙연구I":
        case "스윙연구1":
        case "스윙I":
        case "스윙1":
            arret = 13;
            break;
        case "피지컬 트레이닝":
        case "피지컬트레이닝":
        case "피지컬":
        case "트레이닝":
            arret = 14;
            break;
        case "어드밴스드 콤보 어빌리티":
        case "어드밴스드콤보어빌리티":
        case "어드밴스드콤보":
        case "어콤어":
        case "어콤":
            arret = 15;
            break;
        case "에어로 스윙":
        case "에어로스윙":
        case "에어로":
        case "에스":
            arret = 16;
            break;
        case "아드레날린 부스트 액티베이트":
        case "아드레날린부스트 액티베이트":
        case "아드레날린부스트액티베이트":
        case "부스트액티베이트":
        case "액티베이트":
        case "분노조절":
        case "아부액":
            arret = 17;
            break;
        case "아드레날린 부스트":
        case "아드레날린부스트":
        case "아드레날린":
        case "아드":
        case "부스트":
            arret = 18;
            break;
        case "파이널 블로우":
        case "파이널블로우":
        case "파블":
        case "곰돌이":
        case "곰발바닥":
            arret = 19;
            break;
        case "저지먼트":
        case "저지":
            arret = 20;
            break;
        case "게더링 캐쳐":
        case "게더링캐쳐":
        case "게더링":
        case "캐쳐":
            arret = 21;
            break;
        case "블레싱 마하":
        case "블레싱마하":
        case "블레싱":
        case "블마":
            arret = 22;
            break;
        case "마이트":
            arret = 23;
            break;
        case "클리빙 어택":
        case "클리빙어택":
        case "클리빙":
        case "클어":
            arret = 24;
            break;
        case "비욘더":
            arret = 25;
            break;
        case "부스트 엔드-스톰 오브 피어":
        case "부스트엔드 스톰오브피어":
        case "부스트엔드스톰오브피어":
        case "스톰오브피어":
        case "스톰":
            arret = 26;
            break;
        case "부스트 엔드-헌터즈 타겟팅":
        case "부스트엔드 헌터즈타겟팅":
        case "부스트엔드헌터즈타겟팅":
        case "헌터즈타겟팅":
        case "헌터즈":
        case "헌터":
        case "헌타":
            arret = 27;
            break;
        case "하이 디펜스":
        case "하이디펜스":
        case "디펜스":
        case "하디":
            arret = 28;
            break;
        case "스위프트 무브":
        case "스위프트무브":
        case "스위프트":
        case "스무":
            arret = 29;
            break;
        case "다이나믹 마스터리 II":
        case "다이나믹 마스터리 2":
        case "다이나믹마스터리II":
        case "다이나믹마스터리2":
        case "다이나믹II":
        case "다이나믹2":
        case "마스터리II":
        case "마스터리2":
            arret = 30;
            break;
        case "스윙 연구 II":
        case "스윙 연구 2":
        case "스윙연구II":
        case "스윙연구2":
        case "스윙II":
        case "스윙2":
            arret = 31;
            break;
        case "아드레날린 제네레이터":
        case "아드레날린제네레이터":
        case "제네레이터":
        case "아제":
        case "분노조절장애":
        case "분조장":
            arret = 32;
            break;
        case "마하의 영역":
        case "마하의영역":
        case "영역":
        case "마영":
            arret = 33;
            break;
        case "인스톨 마하":
        case "인스톨마하":
        case "인스톨":
        case "인마":
            arret = 34;
            break;
        case "브랜디쉬 마하":
        case "브랜디쉬마하":
        case "브랜디쉬":
        case "브마":
            arret = 35;
            break;
        case "펜릴 크래시":
        case "펜릴크래시":
        case "크래시":
        case "펜크":
            arret = 36;
            break;
        case "블리자드 템페스트":
        case "블리자드템페스트":
        case "블리자드":
        case "템페스트":
        case "블템":
            arret = 37;
            break;
    }
    return arret;
};
skar.getskillnameAran = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "컴뱃 스탭";
            break;
        case 1:
            rep = "되찾은 기억";
            break;
        case 2:
            rep = "콤보킬 어드밴티지";
            break;
        case 3:
            rep = "콤보 어빌리티";
            break;
        case 4:
            rep = "스매시 스윙";
            break;
        case 5:
            rep = "스매시 웨이브";
            break;
        case 6:
            rep = "바디 프레셔";
            break;
        case 7:
            rep = "파이널 차지";
            break;
        case 8:
            rep = "파이널 토스";
            break;
        case 9:
            rep = "롤링 스핀";
            break;
        case 10:
            rep = "드레인";
            break;
        case 11:
            rep = "스노우 차지";
            break;
        case 12:
            rep = "다이나믹 마스터리 I";
            break;
        case 13:
            rep = "스윙 연구 I";
            break;
        case 14:
            rep = "피지컬 트레이닝";
            break;
        case 15:
            rep = "어드밴스드 콤보 어빌리티";
            break;
        case 16:
            rep = "에어로 스윙";
            break;
        case 17:
            rep = "아드레날린 부스트 액티베이트";
            break;
        case 18:
            rep = "아드레날린 부스트";
            break;
        case 19:
            rep = "파이널 블로우";
            break;
        case 20:
            rep = "저지먼트";
            break;
        case 21:
            rep = "게더링 캐쳐";
            break;
        case 22:
            rep = "블레싱 마하";
            break;
        case 23:
            rep = "마이트";
            break;
        case 24:
            rep = "클리빙 어택";
            break;
        case 25:
            rep = "비욘더";
            break;
        case 26:
            rep = "부스트 앤드-스톰 오브 피어";
            break;
        case 27:
            rep = "부스트 엔드-헌터즈 타겟팅";
            break;
        case 28:
            rep = "하이 디펜스";
            break;
        case 29:
            rep = "스위프트 무브";
            break;
        case 30:
            rep = "다이나믹 마스터리 II";
            break;
        case 31:
            rep = "스윙 연구 II";
            break;
        case 32:
            rep = "아드레날린 제네레이터";
            break;
        case 33:
            rep = "마하의 영역";
            break;
        case 34:
            rep = "인스톨 마하";
            break;
        case 35:
            rep = "브랜디쉬 마하";
            break;
        case 36:
            rep = "펜릴 크래시";
            break;
        case 37:
            rep = "블리자드 템페스트";
            break;
    }
    return rep;
};
skar.getskilldesc1Aran = function (skillcode){
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
        case 36:
            rep = "";
            break;
        case 37:
            rep = "";
            break;
    }
    return rep;
};
skar.getskilldesc2Aran = function (skillcode){
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
        case 36:
            rep = "";
            break;
        case 37:
            rep = "";
            break;    
    }
    return rep;
};
skar.getskilldesc3Aran = function (skillcode){
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
        case 36:
            rep = "";
            break;
        case 37:
            rep = "";
            break;
    }
    return rep;
};
skar.getskillimage1Aran = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "https://i.imgur.com/DGe3V66.png";
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
            rep = "https://i.imgur.com/grjvxws.png";
            break;
        case 5:
            rep = "https://i.imgur.com/KTyXlyA.png";
            break;
        case 6:
            rep = "https://i.imgur.com/PnD1LXo.png";
            break;
        case 7:
            rep = "https://i.imgur.com/a29FKre.png";
            break;
        case 8:
            rep = "https://i.imgur.com/3oreAB4.png";
            break;
        case 9:
            rep = "https://i.imgur.com/Cew2pwK.png";
            break;
        case 10:
            rep = "https://i.imgur.com/CCmJiKC.png";
            break;
        case 11:
            rep = "https://i.imgur.com/hnod5io.png";
            break;
        case 12:
            rep = "";
            break;
        case 13:
            rep = "https://i.imgur.com/l7QY6Q5.png";
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
            rep = "https://i.imgur.com/JuQAns5.png";
            break;
        case 19:
            rep = "https://i.imgur.com/7Ne4Rab.png";
            break;
        case 20:
            rep = "https://i.imgur.com/IfVMgmB.png";
            break;
        case 21:
            rep = "https://i.imgur.com/koKwvS5.png";
            break;
        case 22:
            rep = "https://i.imgur.com/3lW72Pk.png";
            break;
        case 23:
            rep = "";
            break;
        case 24:
            rep = "";
            break;
        case 25:
            rep = "https://i.imgur.com/WCpb3vA.png";
            break;
        case 26:
            rep = "https://i.imgur.com/Dxt2TBE.png";
            break;
        case 27:
            rep = "https://i.imgur.com/FjK2jpv.png";
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
            rep = "https://i.imgur.com/GMFpAFg.png";
            break;
        case 32:
            rep = "";
            break;
        case 33:
            rep = "https://i.imgur.com/XwyI0mo.png";
            break;
        case 34:
            rep = "https://i.imgur.com/VbUvkzB.png";
            break;
        case 35:
            rep = "https://i.imgur.com/PRzj4pa.png";
            break;
        case 36:
            rep = "https://i.imgur.com/q3au7Cx.png";
            break;
        case 37:
            rep = "https://i.imgur.com/aIAzFK5.png";
            break;
    }
    return rep;
};
skar.getskillimage2Aran = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "https://i.imgur.com/SaLkKlp.png";
            break;
        case 1:
            rep = "https://i.imgur.com/QVoXWIs.png";
            break;
        case 2:
            rep = "https://i.imgur.com/KxbHLnL.png";
            break;
        case 3:
            rep = "https://i.imgur.com/zpNehEc.png";
            break;
        case 4:
            rep = "https://i.imgur.com/6a7fWVi.png";
            break;
        case 5:
            rep = "https://i.imgur.com/VVn5vgG.png";
            break;
        case 6:
            rep = "https://i.imgur.com/xmAgjd9.png";
            break;
        case 7:
            rep = "https://i.imgur.com/jOBQdpn.png";
            break;
        case 8:
            rep = "https://i.imgur.com/l5QNFcC.png";
            break;
        case 9:
            rep = "https://i.imgur.com/sphoyeO.png";
            break;
        case 10:
            rep = "https://i.imgur.com/I8u0u2n.png";
            break;
        case 11:
            rep = "https://i.imgur.com/5iz5jwU.png";
            break;
        case 12:
            rep = "https://i.imgur.com/ZJOaBxS.png";
            break;
        case 13:
            rep = "https://i.imgur.com/FQjcpBj.png";
            break;
        case 14:
            rep = "https://i.imgur.com/AixTSOw.png";
            break;
        case 15:
            rep = "https://i.imgur.com/AmNfWCA.png";
            break;
        case 16:
            rep = "https://i.imgur.com/Z5fUNQO.png";
            break;
        case 17:
            rep = "https://i.imgur.com/MI32mhp.png";
            break;
        case 18:
            rep = "https://i.imgur.com/4NVRdyY.png";
            break;
        case 19:
            rep = "https://i.imgur.com/opaUQxJ.png";
            break;
        case 20:
            rep = "https://i.imgur.com/uG8OSY2.png";
            break;
        case 21:
            rep = "https://i.imgur.com/QG3VpBX.png";
            break;
        case 22:
            rep = "https://i.imgur.com/Scd2A4Q.png";
            break;
        case 23:
            rep = "https://i.imgur.com/j8teivN.png";
            break;
        case 24:
            rep = "https://i.imgur.com/HzAe644.png";
            break;
        case 25:
            rep = "https://i.imgur.com/zBJRo2A.png";
            break;
        case 26:
            rep = "https://i.imgur.com/k2erje8.png";
            break;
        case 27:
            rep = "https://i.imgur.com/7uWEhvR.png";
            break;
        case 28:
            rep = "https://i.imgur.com/GPCabTM.png";
            break;
        case 29:
            rep = "https://i.imgur.com/geDofCz.png";
            break;
        case 30:
            rep = "https://i.imgur.com/DD4wkXE.png";
            break;
        case 31:
            rep = "https://i.imgur.com/WAnMDcE.png";
            break;
        case 32:
            rep = "https://i.imgur.com/sqPdxAa.png";
            break;
        case 33:
            rep = "https://i.imgur.com/Ii3ea79.png";
            break;
        case 34:
            rep = "https://i.imgur.com/qnOYHo6.png";
            break;
        case 35:
            rep = "https://i.imgur.com/iflb6db.png";
            break;
        case 36:
            rep = "https://i.imgur.com/tIBhF7c.png";
            break;
        case 37:
            rep = "https://i.imgur.com/xFcjO5J.png";
            break;
    }
    return rep;
};

module.exports = skar;