const skv = {};

skv.getskillViper = function (skillname){
    var vret = -1;
    switch(skillname){
        case "트랜스 폼":
        case "트랜스폼":
        case "트폼":
        case "초사이어인":
        case "라이트닝 폼":
        case "라이트닝폼":
        case "라폼":
            vret = 0;
            break;
        case "서펜트 스크류":
        case "서펜트스크류":
        case "서펜트":
        case "서스":
            vret = 1;
            break;
        case "퓨리어스 차지":
        case "퓨리어스차지":
        case "퓨리어스":
        case "퓨차":
            vret = 2;
            break;
        case "하울링 피스트":
        case "하울링피스트":
        case "하울링":
        case "하피":
            vret = 3;
            break;
        case "파이렛 리프":
        case "파이렛리프":
        case "더블 점프":
        case "더블점프":
            vret = 4;
            break;
        case "대쉬":
            vret = 5;
            break;
        case "볼텍스 점프":
        case "볼텍스점프":
        case "볼텍스":
        case "윗점":
            vret = 6;
            break;
        case "씨 서펜트":
        case "씨서펜트":
        case "서펜트":
            vret = 7;
            break;
        case "씨 서펜트 버스트":
        case "씨서펜트 버스트":
        case "씨서펜트버스트":
        case "서펜트 버스트":
        case "서펜트버스트":
        case "버스트":
            vret = 8;
            break;
        case "어드밴스드 대쉬":
        case "어드밴스드대쉬":
        case "어대쉬":
        case "방구점프":
        case "슈퍼 점프":
        case "슈퍼점프":
        case "슈점":
            vret = 9;
            break;
        case "멘탈 클리어리티":
        case "멘탈클리어리티":
        case "멘탈":
        case "클리어리티":
            vret = 10;
            break;
        case "HP 증가":
        case "HP증가":
        case "피 증가":
        case "피증가":
            vret = 11;
            break;
        case "스크류 펀치":
        case "스크류펀치":
        case "스크류":
        case "스펀":
        case "밀격기":
        case "밀격":
            vret = 12;
            break;
        case "씨 서펜트 강화 I":
        case "씨서펜트 강화 I":
        case "씨서펜트강화 I":
        case "씨서펜트강화I":
        case "씨 서펜트 강화 1":
        case "씨서펜트 강화 1":
        case "씨서펜트강화 1":
        case "씨서펜트강화1":
        case "서펜트 강화 I":
        case "서펜트강화 I":
        case "서펜트강화I":
        case "서펜트 강화 1":
        case "서펜트강화 1":
        case "서펜트강화1":
            vret = 13;
            break;
        case "럭키 다이스":
        case "럭키다이스":
        case "다이스":
        case "럭다":
            vret = 14;
            break;
        case "서펜트 스톤":
        case "서펜트스톤":
        case "스톤":
            vret = 15;
            break;
        case "서펜트 어썰트":
        case "서펜트어썰트":
        case "어썰트":
            vret = 16;
            break;
        case "윌로우 디펜시브":
        case "윌로우디펜시브":
        case "윌로우":
        case "디펜시브":
            vret = 17;
            break;
        case "크리티컬 레이지":
        case "크리티컬레이지":
        case "레이지":
            vret = 18;
            break;
        case "그로기 마스터리":
        case "그로기마스터리":
        case "그로기":
            vret = 19;
            break;
        case "피스트 인레이지":
        case "피스트인레이지":
        case "피스트":
        case "인레이지":
            vret = 20;
            break;
        case "훅 봄버":
        case "훅봄버":
            vret = 21;
            break;
        case "씨 써펜트 강화 II":
        case "씨써펜트 강화 II":
        case "씨써펜트강화 II":
        case "씨써펜트강화II":
        case "씨 써펜트 강화 2":
        case "씨써펜트 강화 2":
        case "씨써펜트강화 2":
        case "씨써펜트강화2":
        case "써펜트 강화 II":
        case "써펜트강화 II":
        case "써펜트강화II":
        case "써펜트 강화 2":
        case "써펜트강화 2":
        case "써펜트강화2":
            vret = 22;
            break;
        case "씨 서펜트 버스트 II":
        case "씨서펜트 버스트 II":
        case "씨서펜트버스트 II":
        case "씨서펜트버스트II":
        case "씨 서펜트 버스트 2":
        case "씨서펜트 버스트 2":
        case "씨서펜트버스트 2":
        case "씨서펜트버스트2":
        case "서펜트 버스트 II":
        case "서펜트버스트 II":
        case "서펜트버스트II":
        case "서펜트 버스트 2":
        case "서펜트버스트 2":
        case "서펜트버스트2":
        case "버스트 II":
        case "버스트II":
        case "버스트 2":
        case "버스트2":
            vret = 23;
            break;
        case "씨 서펜트 인레이지":
        case "씨서펜트 인레이지":
        case "씨서펜트인레이지":
        case "서펜트 인레이지":
        case "서펜트인레이지":
            vret = 24;
            break;
        case "서펜트 어썰트 인레이지":
        case "서펜트 어썰트인레이지":
        case "서펜트어썰트 인레이지":
        case "서펜트어썰트인레이지":
        case "어썰트 인레이지":
        case "어썰트인레이지":
        case "씨어인":
            vret = 25;
            break;
        case "전함 노틸러스":
        case "전함노틸러스":
        case "노틸러스":
        case "전노":
            vret = 26;
            break;
        case "바이퍼지션":
            vret = 27;
            break;
        case "타임리프":
        case "리프":
            vret = 28;
            break;
        case "윈드 부스터":
        case "윈드부스터":
        case "윈부":
            vret = 29;
            break;
        case "더블 럭키 다이스":
        case "더블 럭키다이스":
        case "더블럭키다이스":
        case "더럭다":
            vret = 30;
            break;
        case "디펜스 폼":
        case "디펜스폼":
            vret = 31;
            break;
        case "오펜스 폼":
        case "오펜스폼":
            vret = 32;
            break;
        case "가드 크러쉬":
        case "가드크러쉬":
            vret = 33;
            break;
        case "스티뮬레이트":
        case "스티뮬":
        case "스팀":
            vret = 34;
            break;
        case "서펜트 스피릿":
        case "서펜트스피릿":
        case "스피릿":
            vret = 35;
            break;
        case "":
            vret = 36;
            break;
    }
    return vret;
};
skv.getskillnameViper = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "라이트닝 폼";
            break;
        case 1:
            rep = "서펜트 스크류";
            break;
        case 2:
            rep = "퓨리어스 차지";
            break;
        case 3:
            rep = "하울링 피스트";
            break;
        case 4:
            rep = "파이렛 리프";
            break;
        case 5:
            rep = "대쉬";
            break;
        case 6:
            rep = "볼텍스 점프";
            break;
        case 7:
            rep = "씨 서펜트";
            break;
        case 8:
            rep = "씨 서펜트 버스트";
            break;
        case 9:
            rep = "어드밴스드 대쉬";
            break;
        case 10:
            rep = "멘탈 클리어리티";
            break;
        case 11:
            rep = "HP 증가";
            break;
        case 12:
            rep = "스크류 펀치";
            break;
        case 13:
            rep = "씨 서펜트 강화 I";
            break;
        case 14:
            rep = "럭키 다이스";
            break;
        case 15:
            rep = "서펜트 스톤";
            break;
        case 16:
            rep = "서펜트 어썰트";
            break;
        case 17:
            rep = "윌로우 디펜시브";
            break;
        case 18:
            rep = "크리티컬 레이지";
            break;
        case 19:
            rep = "그로기 마스터리";
            break;
        case 20:
            rep = "피스트 인레이지";
            break;
        case 21:
            rep = "훅 봄버";
            break;
        case 22:
            rep = "씨 서펜트 강화 II";
            break;
        case 23:
            rep = "씨 서펜트 버스트 II";
            break;
        case 24:
            rep = "씨 서펜트 인레이지";
            break;
        case 25:
            rep = "서펜트 어썰트 인레이지";
            break;
        case 26:
            rep = "전함 노틸러스";
            break;
        case 27:
            rep = "바이퍼지션";
            break;
        case 28:
            rep = "타임리프";
            break;
        case 29:
            rep = "윈드 부스터";
            break;
        case 30:
            rep = "더블 럭키 다이스";
            break;
        case 31:
            rep = "디펜스 폼";
            break;
        case 32:
            rep = "오펜스 폼";
            break;
        case 33:
            rep = "가드 크러쉬";
            break;
        case 34:
            rep = "스티뮬레이트";
            break;
        case 35:
            rep = "서펜트 스피릿";
            break;
        case 36:
            rep = "";
            break;
    }
    return rep;
};
skv.getskilldesc1Viper = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "하단 참조";
            break;
        case 1:
            rep = "하단 참조";
            break;
        case 2:
            rep = "하단 참조";
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
    }
    return rep;
};
skv.getskilldesc2Viper = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "변신형 액티브 버프";
            break;
        case 1:
            rep = "다수 자동 공격기 / 온오프 스킬";
            break;
        case 2:
            rep = "고속이동형 광범위 공격기";
            break;
        case 3:
            rep = "무적 기능 극딜기";
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
    }
    return rep;
};
skv.getskilldesc3Viper = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "바다의 힘을 받아 변신해 강력한 힘을 발취한다. 변신 상태에서는 방향키를 한쪽으로 2번 연속 입력하여 순간적으로 이동할 수 있게 되고 스킬을 한 번 더 사용하여 주변 적을 공격하는 에너지 오브를 사용할 수 있다. 에너지 오브는 공격 반사 상태의 적을 공격해도 피해를 입지 않고 시전 동작 중 무적이다.\n\nMP 1000 소비\n80초 동안 최종 데미지 26% 증가\n에너지 오브 최대 3회까지 사용 가능, 에너지 오브는 일정 시간마다 최대 10명의 적을 780%의 데미지로 5번 공격, 추가 크리티컬 확률 50%, 몬스터 방어율 50% 추가 무시\n\n재사용 대기시간 180초";
            break;
        case 1:
            rep = "거친 바다에 잠들어 있던 수룡의 기운을 몸에 둘러 주변의 적을 공격한다. 수룡은 공격 반사 상태의 적을 공격해도 피해를 입지 않는다.\n활성화 시 일정 횟수 공격 가능하며 지속 중 재사용 대기시간이 종료되면 공격 횟수와 재사용 대기시간이 자동으로 갱신된다. 스킬 재사용 시 즉시 종료되며 남은 타격 횟수에 비례해 재사용 대기시간이 감소한다.\n\nMP 300 소비, 활성화 시 100회 공격 가능, 보스 몬스터 공격 시 3회 공격 시 1회 카운트\n일정 주기마다 주변에 있는 최대 10명의 적을 780%의 데미지로 3번 자동 공격\n일반 몬스터 40마리 처치 시마다 재사용 대기시간 10초 감소, 스킬 종료 시 남은 공격 횟수 10회마다 재사용 대기시간 6초 감소\n\n재사용 대기시간 60초";
            break;
        case 2:
            rep = "바다의 기운을 분출하며 힘차게 돌진한다.\n함께 사용한 방향키에 따라 위와 아래를 제외한 6방향으로 돌진할 수 있다.\n\nMP 350, 바다의 기운 1개 소비\n최대 8명의 적을 1320%의 데미지로 10번 공격, 보스 몬스터 공격 시 데미지 30% 증가\n바다의 기운은 8초마다 1개씩 준비되며 최대 6개까지 소지 가능\n\n재사용 대기시간 0.5초";
            break;
        case 3:
            rep = "거친 바다의 힘을 모아 강렬한 정권을 내지른다. 힘을 다 모은 후 정권을 내지르는 동작 중에는 무적이다. 힘을 모으는 중 스킬 재사용으로 즉시 정권을 내지를 수 있다.\n\nMP 1200 소비\n힘을 모으며 일정 간격마다 최대 8명의 적을 935%의 데미지로 6번 공격\n정권을 내지르며 최대 15명의 적을 1505%의 데미지로 10번 공격하는 충격이 14번 발동\n\n재사용 대기시간 : 90초";
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
    }
    return rep;
};
skv.getskillimage1Viper = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "https://i.imgur.com/HbeIzzI.png";
            break;
        case 1:
            rep = "https://i.imgur.com/kbXPeYW.png";
            break;
        case 2:
            rep = "https://i.imgur.com/vQvvFES.png";
            break;
        case 3:
            rep = "https://i.imgur.com/9btOYhS.png";
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
    }
    return rep;
};
skv.getskillimage2Viper = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "https://i.imgur.com/Cytm5VL.png";
            break;
        case 1:
            rep = "https://i.imgur.com/aPp15sn.png";
            break;
        case 2:
            rep = "https://i.imgur.com/bn6xt24.png";
            break;
        case 3:
            rep = "https://i.imgur.com/YkNHcyc.png";
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
    }
    return rep;
};

module.exports = skv;