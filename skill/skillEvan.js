const ske = {};

ske.getskillEvan = function (skillname){
    var eret = -1;
    switch(skillname){
        case "엘리멘탈 블래스트":
        case "엘리멘탈블래스트":
        case "블래스트":
        case "엘블":
            eret = 0;
            break;
        case "드래곤 브레이크":
        case "드래곤브레이크":
        case "드브":
            eret = 1;
            break;
        case "브레이크-돌아와!":
        case "브레이크돌아와!":
        case "브레이크-돌아와":
        case "브레이크돌아와":
        case "브돌":
            eret = 2;
            break;
        case "임페리얼 브레스":
        case "임페리얼브레스":
        case "브레스":
        case "임브":
            eret = 3;
            break;
        case "조디악 레이":
        case "조디악레이":
        case "조디악":
        case "조레":
            eret = 4;
            break;
        case "스파이럴 오브 마나":
        case "스파이럴오브마나":
        case "스오마":
        case "스파이럴":
            eret = 5;
            break;
        /*case "":
            eret = 6;
            break;
        case "":
            eret = 7;
            break;
        case "":
            eret = 8;
            break;
        case "":
            eret = 9;
            break;
        case "":
            eret = 10;
            break;
        case "":
            eret = 11;
            break;
        case "":
            eret = 12;
            break;
        case "":
            eret = 13;
            break;
        case "":
            eret = 14;
            break;
        case "":
            eret = 15;
            break;
        case "":
            eret = 16;
            break;
        case "":
            eret = 17;
            break;
        case "":
            eret = 18;
            break;
        case "":
            eret = 19;
            break;*/
    }
    return eret;
};
ske.getskillnameEvan = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "엘리멘탈 블래스트";
            break;
        case 1:
            rep = "드래곤 브레이크";
            break;
        case 2:
            rep = "브레이크-돌아와!";
            break;
        case 3:
            rep = "임페리얼 브레스";
            break;
        case 4:
            rep = "조디악 레이";
            break;
        case 5:
            rep = "스파이럴 오브 마나";
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
ske.getskilldesc1Evan = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "15명,1650%,6번 마법 4연속사용/ 크확100%/ 쿨60초";
            break;
        case 1:
            rep = "12명,990%,7번 공격, 2.5초간 지속/ 쿨 20초";
            break;
        case 2:
            rep = "12명,330%,3번 공격 무의영역생성/ 5초 지속";
            break;
        case 3:
            rep = "12명,1100%,7번 공격/ 4초 지속";
            break;
        case 4:
            rep = "하단 참조";
            break;
        case 5:
            rep = "7초간 일정간격마다 6명,265%,6번 공격/ 쿨3.5초";
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
ske.getskilldesc2Evan = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "명중한 속성마다 10초간 최종뎀5%";
            break;
        case 1:
            rep = "다이브와 달리 지형에 구애받지 않는다";
            break;
        case 2:
            rep = "드래곤 브레이크, 임페리얼 브레스 도중 돌아와!를 사용할 시 발동";
            break;
        case 3:
            rep = "드래곤 브레이크 사용중 엘리멘탈 블래스트 사용하면 발동";
            break;
        case 4:
            rep = "이 스킬은 소환수로 취급되어 오버로드 마나의 효과를 받지 않음";
            break;
        case 5:
            rep = "[패시브: 마력35]/ 서클오브마나Ⅳ 사용시 1초간 공격횟수 3번감소";
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
ske.getskilldesc3Evan = function (skillcode){
    rep = "";
    switch(skillcode){
        case 4:
            rep = "마력을 충전하여 성좌의 힘을 해방시키는 마법진을 설치한다. 스파이럴 오브 마나를 제외한 에반의 마법을 적중시키면 마법진에 마력이 충전되고 가득 차면 기동한다. 공격 반사 상태의 적을 공격해도 피해를 입지 않는다. 엘리멘탈 블래스트는 첫 공격만 속성이 적용된다.\n\nMP 1000 소비, 17초 동안 마법진 설치, 마력이 25 충전되면 해방이 시작되어 남는 시간 동안 최대 12명의 적을 880%의 데미지로 6번 지속 공격, 몬스터 방어율 100% 추가 무시\n\n속성이 있는 스킬 적중 시 마력이 3 충전되지만 스킬당 1회만 충전 가능, 속성이 없는 스킬 적중 시 마력이 1 충전되고 제한 없음\n\n재사용 대기시간 180초\n\n서클 오브 마나 : 1, 2타가 전부 적중해야 1충전\n스위프트, 다이브, 브레이크 : 1타당 1씩 충전\n마법 잔해 : 잔해 생성 위치에서 타겟과의 거리가 다를 경우 개당 1씩 충전\n브레스, 윈드, 썬더, 어스, 다크 포그, 드래곤 마스터, 모든 융합 스킬 : 스킬 최초 적중 1회에 한해 3충전\n브레스-돌아와 : 1회에 한해 3 충전\n엘리멘탈 블래스트 : 순서대로 3, 1, 1, 1 충전\n서먼 오닉스 드래곤, 드래곤 스파킹 : 충전 불가\n\n가장 많이 쓰이는 방법은 드래곤 브레스(3/3) → 서클 오브 윈드(3/6) → 브레스 오브 윈드(3/9) → 브레스-돌아와(3/12) → 드래곤 브레이크 → 서클 오브 어스 → 마법 잔해 → 엘리멘탈 블래스트(출처:나무위키)";
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
ske.getskillimage1Evan = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "https://i.imgur.com/O5VKtcw.png";
            break;
        case 1:
            rep = "https://i.imgur.com/IlP7USt.png";
            break;
        case 2:
            rep = "https://i.imgur.com/GtWAbDh.png";
            break;
        case 3:
            rep = "https://i.imgur.com/IsEcTgq.png";
            break;
        case 4:
            rep = "https://i.imgur.com/SXOSwmD.png";
            break;
        case 5:
            rep = "https://i.imgur.com/Ko2ovGO.png";
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
ske.getskillimage2Evan = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "https://i.imgur.com/NNbG0wS.png";
            break;
        case 1:
            rep = "https://i.imgur.com/aw505X4.png";
            break;
        case 2:
            rep = "https://i.imgur.com/sJ06nCD.png";
            break;
        case 3:
            rep = "https://i.imgur.com/dFSxw30.png";
            break;
        case 4:
            rep = "https://i.imgur.com/YpX4JYl.png";
            break;
        case 5:
            rep = "https://i.imgur.com/3yKTGFO.png";
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

module.exports = ske;