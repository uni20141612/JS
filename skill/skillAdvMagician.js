const skam = {};

skam.getskillAdvMagician = function (skillname){
    var smret = -1;
    switch(skillname){
        case "임피리컬 널리지":
        case "임피리컬널리지":
        case "임피리컬":
        case "널리지":
        case "링크":
        case "모법링크":
            smret = 0;
            break;
        case "매직 가드":
        case "매직가드":
        case "가드":
            smret = 1;
            break;
        case "텔레포트":
        case "텔포":
            smret = 2;
            break;
        case "매직 아머":
        case "매직아머":
        case "아머":
            smret = 3;
            break;
        case "MP 증가":
        case "MP증가":
        case "MP":
        case "엠피 증가":
        case "엠피증가":
        case "엠피":
            smret = 4;
            break;
        case "매직 부스터":
        case "매직부스터":
        case "부스터":
            smret = 5;
            break;
        case "스펠 마스터리":
        case "스펠마스터리":
        case "스펠":
            smret = 6;
            break;
        case "하이 위즈덤":
        case "하이위즈덤":
        case "하이":
        case "위즈덤":
            smret = 7;
            break;
        case "MP 이터":
        case "MP이터":
        case "이터":
        case "엠피 이터":
        case "엠피이터":
            smret = 8;
            break;
        case "텔레포트 마스터리":
        case "텔레포트마스터리":
        case "텔포마스터리":
        case "텔포마":
        case "텔마":
            smret = 9;
            break;
        case "매직 크리티컬":
        case "매직크리티컬":
        case "크리티컬":
        case "크리":
            smret = 10;
            break;
        case "아케인 에임":
        case "아케인에임":
        case "아케인":
        case "에임":
            smret = 11;
            break;
        case "마스터 매직":
        case "마스터매직":
            smret = 12;
            break;
        case "에픽 어드벤쳐":
        case "에픽어드벤쳐":
        case "에픽":
            smret = 13;
            break;
        case "언스태이블 메모라이즈":
        case "언스테이블 메모라이즈":
        case "언스태이블메모라이즈":
        case "언스테이블메모라이즈":
        case "언스":
        case "메모라이즈":
            smret = 14;
            break;        
        case "인피니티":
        case "인피":
            smret = 15;
            break;
    }
    return smret;
};
skam.getskillnameAdvMagician = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "임피리컬 널리지";
            break;
        case 1:
            rep = "매직 가드";
            break;
        case 2:
            rep = "텔레포트";
            break;
        case 3:
            rep = "매직 아머";
            break;
        case 4:
            rep = "MP 증가";
            break;
        case 5:
            rep = "매직 부스터";
            break;
        case 6:
            rep = "스펠 마스터리";
            break;
        case 7:
            rep = "하이 위즈덤";
            break;
        case 8:
            rep = "MP 이터";
            break;
        case 9:
            rep = "텔레포트 마스터리";
            break;
        case 10:
            rep = "매직 크리티컬";
            break;
        case 11:
            rep = "아케인 에임";
            break;
        case 12:
            rep = "마스터 매직";
            break;
        case 13:
            rep = "에픽 어드벤쳐";
            break;
        case 14:
            rep = "언스태이블 메모라이즈";
            break;
        case 15:
            rep = "인피니티";
            break;
    }
    return rep;
};
skam.getskilldesc1AdvMagician = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "HP가장높은적 25%확률, 10초지속, 3회까지 중첩당 뎀3%, 방무3%";
            break;
        case 1:
            rep = "받는 데미지의 85%를 MP로 대신함";
            break;
        case 2:
            rep = "좌우 170만큼, 상하 275만큼 순간이동";
            break;
        case 3:
            rep = "방어력 100 증가";
            break;
        case 4:
            rep = "MP20% 증가, 공속 1단계 증가, 레벨당 MP 120만큼 증가";
            break;
        case 5:
            rep = "240초 동안 마법 공격 속도 증가";
            break;
        case 6:
            rep = "마법 숙련도 50%, 마력 10 증가";
            break;
        case 7:
            rep = "영구적으로 지력 40 증가";
            break;
        case 8:
            rep = "마법 공격 시 20% 확률로 적의 최대 MP의 10% 흡수";
            break;
        case 9:
            rep = "썬콜,비숍: 6명,340%/ 80%확률 4초간 기절/ 이동거리 20 증가";
            break;
        case 10:
            rep = "크리티컬 확률 30%, 크리티컬 데미지 13% 증가";
            break;
        case 11:
            rep = "방무20%, 적중시 80%확률 5초긴 뎀8%, 최대5번 중첩가능";
            break;
        case 12:
            rep = "영구적으로 마력 30 증가, 버프 지속시간 50% 증가";
            break;
        case 13:
            rep = "60초 동안 데미지 10% 증가/ 쿨120초";
            break;
        case 14:
            rep = "특정1~4차, 하이퍼액티브 스킬중 하나 사용/ 쿨9초";
            break;
        case 15:
            rep = "최종뎀 70%/ 일정시간당 HP,MP 10%회복, 최종뎀 3%(합)";
            break;
    }
    return rep;
};
skam.getskilldesc2AdvMagician = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "6레벨 기준/ 상태이상으로 간주";
            break;
        case 1:
            rep = "온오프 스킬/ 최대 HP 비례 공격에는 적용되지 않음";
            break;
        case 2:
            rep = "썬콜은 비숍/불독보다 좌우, 상하거리가 100 더 길다.";
            break;
        case 3:
            rep = "갑옷에 마력을 응집시켜 방어력을 증가시킨다.";
            break;
        case 4:
            rep = "완드 착용 시 크리티컬 확률 5% 추가 증가";
            break;
        case 5:
            rep = "마법 공격 속도 2단계 증가";
            break;
        case 6:
            rep = "마법 숙련도와 마력을 증가시킨다.";
            break;
        case 7:
            rep = "정신 수양을 통해 영구적으로 지력을 증가시킨다.";
            break;
        case 8:
            rep = "대상이 보스 몬스터이거나 MP가 0이라면 더 이상 흡수할 수 없다.";
            break;
        case 9:
            rep = "불독 : 6명,272%/ 80%확률 4초간 기절/ 4초간 2초마다 98%데미지";
            break;
        case 10:
            rep = "영구적으로 크리티컬 확률과 크리티컬 데미지가 증가한다.";
            break;
        case 11:
            rep = "DoT에는 발동하지 않는다.";
            break;
        case 12:
            rep = "-";
            break;
        case 13:
            rep = "파티원 중 모험가 직업군에만 효과";
            break;
        case 14:
            rep = "[패시브: INT 30]/ MP소비 및 쿨타임 무시/ 메용,의지제외";
            break;
        case 15:
            rep = "스탠스 70% 증가/ 40초간 지속/  마나소모량 제거/ 쿨180초";
            break;
    }
    return rep;
};
skam.getskillimage1AdvMagician = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "https://i.imgur.com/6MC0LL6.png";
            break;
        case 1:
            rep = "https://i.imgur.com/LcOSwHK.png";
            break;
        case 2:
            rep = "https://i.imgur.com/s3TUXlT.png";
            break;
        case 3:
            rep = "";
            break;
        case 4:
            rep = "";
            break;
        case 5:
            rep = "https://i.imgur.com/rDZ1NYX.png";
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
            rep = "https://i.imgur.com/ZaRuuBb.png";
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
            rep = "https://i.imgur.com/Gex9hzq.png";
            break;
        case 14:
            rep = "https://i.imgur.com/lrG5vB4.png";
            break;
        case 15:
            rep = "https://i.imgur.com/uahjBF8.png";
            break;
    }
    return rep;
};
skam.getskillimage2AdvMagician = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "https://i.imgur.com/rzrk2OK.png";
            break;
        case 1:
            rep = "https://i.imgur.com/4TWgkED.png";
            break;
        case 2:
            rep = "https://i.imgur.com/5Rt3cyM.png";
            break;
        case 3:
            rep = "https://i.imgur.com/dhJ7jiX.png";
            break;
        case 4:
            rep = "https://i.imgur.com/kDQEa5v.png";
            break;
        case 5:
            rep = "https://i.imgur.com/pU8SRX0.png";
            break;
        case 6:
            rep = "https://i.imgur.com/EwZT5BD.png";
            break;
        case 7:
            rep = "https://i.imgur.com/okUxBHh.png";
            break;
        case 8:
            rep = "https://i.imgur.com/5fapl67.png";
            break;
        case 9:
            rep = "https://i.imgur.com/uBuWCDq.png";
            break;
        case 10:
            rep = "https://i.imgur.com/ZNVcMu4.png";
            break;
        case 11:
            rep = "https://i.imgur.com/D8TB0ky.png";
            break;
        case 12:
            rep = "https://i.imgur.com/sjJZJqF.png";
            break;
        case 13:
            rep = "https://i.imgur.com/gfmmil0.png";
            break;
        case 14:
            rep = "https://i.imgur.com/r94C1di.png";
            break;
        case 15:
            rep = "https://i.imgur.com/CL5Ok5M.png";
            break;
    }
    return rep;
};

module.exports = skam;