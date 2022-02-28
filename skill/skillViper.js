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
            rep = "MP 10 소비, 일정 거리 점프";
            break;
        case 5:
            rep = "하단 참조";
            break;
        case 6:
            rep = "MP 5 소비, 일정 거리 점프";
            break;
        case 7:
            rep = "하단 참조";
            break;
        case 8:
            rep = "[수룡 스킬] 111% 데미지로 최대 8명의 적 4번 공격";
            break;
        case 9:
            rep = "하단 참조";
            break;
        case 10:
            rep = "공격력 30 증가";
            break;
        case 11:
            rep = "최대 HP 20% 증가";
            break;
        case 12:
            rep = "337% 데미지로 최대 8명의 적을 2번 공격하며 이동";
            break;
        case 13:
            rep = "[수룡 스킬] 173% 데미지로 최대 8명의 적 6번 공격";
            break;
        case 14:
            rep = "하단 참조";
            break;
        case 15:
            rep = "하단 참조";
            break;
        case 16:
            rep = "[어썰트 스킬] 15명, 423% 데미지로 6번 공격";
            break;
        case 17:
            rep = "받는 피해 20% 감소";
            break;
        case 18:
            rep = "공격력 30, 크리티컬 확률 15%, 크리티컬 데미지 10%";
            break;
        case 19:
            rep = "하단 참조";
            break;
        case 20:
            rep = "[격투 스킬] 3명의 적을 320%의 데미지로 10번 공격";
            break;
        case 21:
            rep = "[격투 스킬] 10명의 적을 565%의 데미지로 4번 공격";
            break;
        case 22:
            rep = "씨 서펜트 버스트를 씨 서펜트 버스트 II로 강화";
            break;
        case 23:
            rep = "[수룡 스킬] 425% 데미지로 최대 10명의 적 8번 공격";
            break;
        case 24:
            rep = "하단 참조";
            break;
        case 25:
            rep = "[어썰트 스킬] 최대5초간 240%, 6명, 4번 지속공격";
            break;
        case 26:
            rep = "하단 참조";
            break;
        case 27:
            rep = "180초 동안 공격력 30% 증가/ [패시브: 숙련도 70%,";
            break;
        case 28:
            rep = "하단 참조";
            break;
        case 29:
            rep = "하단 참조";
            break;
        case 30:
            rep = "하단 참조";
            break;
        case 31:
            rep = "피격 시 25% 확률로 피격 데미지 40% 감소";
            break;
        case 32:
            rep = "적중 시 10초 동안 데미지 25% 증가/ 지속중 갱신가능";
            break;
        case 33:
            rep = "방어율 40% 무시";
            break;
        case 34:
            rep = "하단 참조";
            break;
        case 35:
            rep = "하단 참조";
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
            rep = "파란색의 수룡 이펙트로 변한다.";
            break;
        case 5:
            rep = "커맨드 잠금 : 마우스 우클릭";
            break;
        case 6:
            rep = "점프 중 ↑ 방향키와 함께 점프키를 입력하면 사용";
            break;
        case 7:
            rep = "온오프 스킬";
            break;
        case 8:
            rep = "쿨 11초/ 인레이지 제외 격투 스킬 사용 시 발동";
            break;
        case 9:
            rep = "관성 적용";
            break;
        case 10:
            rep = "-";
            break;
        case 11:
            rep = "스탠스 확률 100% 증가";
            break;
        case 12:
            rep = "다른 공격 스킬 사용 중 사용하면 쿨 4초 적용";
            break;
        case 13:
            rep = "쿨 9초/ 인레이지 제외 격투 스킬 사용 시 발동";
            break;
        case 14:
            rep = "모험가 해적 공통 액티브 버프";
            break;
        case 15:
            rep = "자동 사용 모드 온오프 : 마우스 우클릭";
            break;
        case 16:
            rep = "Y축이 위로 높다";
            break;
        case 17:
            rep = "-";
            break;
        case 18:
            rep = "보스에게 추가 크리티컬 확률 20% 적용";
            break;
        case 19:
            rep = "-";
            break;
        case 20:
            rep = "인레이지가 붙은 수룡스킬 및 어썰트스킬만 발동시킴.";
            break;
        case 21:
            rep = "이펙트보다 범위가 좁음";
            break;
        case 22:
            rep = "씨 서펜트 인레이지 사용 가능";
            break;
        case 23:
            rep = "쿨 7초/ 인레이지 제외 격투 스킬 사용 시 발동";
            break;
        case 24:
            rep = "-";
            break;
        case 25:
            rep = "15번 후 소멸/ [패시브: 서펜트어썰트 데미지 100% 증가]";
            break;
        case 26:
            rep = "광범위 공격기";
            break;
        case 27:
            rep = "상태 이상 30, 모든 속성 내성 30% 증가]";
            break;
        case 28:
            rep = "0~4차 스킬 재사용 대기시간 초기화";
            break;
        case 29:
            rep = "중첩가능";
            break;
        case 30:
            rep = "럭키 다이스의 강화 패시브";
            break;
        case 31:
            rep = "최대 HP의 일정 비율로 피해를 입히는 공격에도 발동";
            break;
        case 32:
            rep = "[패시브 효과 : 스크류 펀치 데미지 100% 증가]";
            break;
        case 33:
            rep = "[패시브 효과 : 공격력 30 증가]";
            break;
        case 34:
            rep = "-";
            break;
        case 35:
            rep = "펫버프 사용불가";
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
            rep = "거친 바다의 힘을 모아 강렬한 정권을 내지른다. 힘을 다 모은 후 정권을 내지르는 동작 중에는 무적이다. 힘을 모으는 중 스킬 재사용으로 즉시 정권을 내지를 수 있다.\n\nMP 1200 소비\n힘을 모으며 일정 간격마다 최대 8명의 적을 935%의 데미지로 6번 공격\n정권을 내지르며 최대 15명의 적을 1505%의 데미지로 14번 공격하는 충격이 14번 발동\n\n재사용 대기시간 : 90초";
            break;
        case 5:
            rep = "좌우 방향키 중 하나를 두 번 연타한 후 키다운하여 사용한다. 사용 중 이동속도, 점프력, 스탠스 확률이 증가되며 해당 효과는 대쉬가 종료될 때 사라진다.\n버프 지속시간 증가의 효과를 받지 않지만 공중에서도 발동 시킬 수 있다.\n[대쉬 발동 : 방향키 →→ 또는 ←←]\n\nMP 1 소비, 최대 10초 동안 이동속도 50, 점프력 20, 스탠스 확률 100% 증가하며 대쉬";
            break;
        case 7:
            rep = "거친 바다에 잠들어있던 수룡에 대한 단서를 얻어 그 힘을 사용할 수 있게 된다.\n일정 시간마다 격투 스킬 발동 시 수룡의 힘이 주변의 적을 스스로 공격하고 공격반사 상태의 적을 공격해도 피해를 입지 않는다.\n\n활성화 시 격투 스킬 트리거로 수룡 스킬 사용 가능\n수룡 스킬 발동 시 MP 40 소비, 직전 사용한 수룡 스킬의 재사용 대기시간이 지나야 다음 수룡 스킬 발동 가능\n\n재사용 대기시간 3초";
            break;
        case 9:
            rep = "대쉬를 개량하여 지상에서 좌우 방향키 중 하나를 두 번 연타하면 짧은 거리를 신속하게 이동한다. 이후 키다운을 지속하면 대쉬가 발동된다.\n신속하게 이동하는 중 방향키 ↓를 입력하면 급정거 할 수 있다.\n사용 시 순간적으로 이동속도와 점프력이 증가하나 버프 지속시간 증가의 효과를 받지 않는다.\n어드밴스드 대쉬를 발동시킬 수 없을 때 커맨드를 입력하면 대쉬가 발동된다.\n[대쉬 발동 : 방향키 →→ 또는 ←←]\n\nMP 1 소비, 짧은 거리 이동, 최대 10초 동안 이동속도 50, 점프력 20 증가";
            break;
        case 15:
            rep = "주사위를 던져 자신의 행운을 시험한다. 주사위의 결과에 따라 일정 시간 동안 랜덤 버프를 획득할 수 있지만, 1이 나올 경우에는 버프를 획득할 수 없고 럭키 다이스의 재사용 대기시간이 감소한다.\n\nMP 60 소비, 주사위 버프 지속시간 180초, 재사용 대기시간 60초\n\n1 : 럭키 다이스 재사용 대기시간 50% 감소\n2 : 방어력 30% 증가\n3 : 공격력 15 증가\n4 : 크리티컬 확률 15% 증가\n5 : 데미지 20% 증가\n6 : 획득 경험치 30% 증가";
            break;
        case 16:
            rep = "수룡의 힘을 다루면서 힘에 대한 단서를 획득할 수 있고, 단서를 소모하여 강한 수룡의 힘을 사용할 수 있다.\n격투 스킬 트리거로 수룡 스킬 발동 시마다 힘의 단서인 서펜트 스톤을 하나씩 얻는다.\n서펜트 스톤 5개를 소모하면 강한 수룡의 힘을 다룰 수 있는 어썰트 상태가 된다. 어썰트 상태에서는 격투 스킬 트리거로 수룡 스킬 대신 어썰트 스킬이 발동되고, 어썰트 스킬 1회 사용 시 어썰트 상태는 해제된다. 어썰트 상태 지속시간은 버프 지속시간 증가 효과를 받지 않는다.\n자동 사용 모드에서는 서펜트 스톤을 5개 얻으면 자동으로 서펜트 스톤이 사용된다.\n\nMP 50 소비, 5개의 서펜트 스톤을 소모하여 15초 동안 어썰트 스킬 발동 가능\n수룡 스킬 발동 시 마다 서펜트 스톤 1개 획득, 서펜트 스톤은 최대 5개까지 소지 가능";
            break;
        case 20:
            rep = "기절 상태에서 빠르게 회복할 수 있게 되고 상태 이상에 걸린 적을 공격 시 크리티컬 확률과 크리티컬 데미지가 증가한다. 추가로 공격 성공 시 일정 확률로 적을 기절시킨다.\n\n기절 상태 이상에 대한 상태 이상 내성 35% 추가 증가, 공격 성공 시 20% 확률로 기절\n상태 이상에 걸린 적 공격 시 크리티컬 확률 60% 증가, 크리티컬 데미지 15% 증가";
            break;
        case 25:
            rep = "[수룡 스킬] 무투가의 기운에 반응한 수룡이 나타나 적을 물어 부순다. 피스트 인레이지 사용 시 발동하며 수룡에게 물린 적은 서펜트 마크가 일정 시간 남아 더욱 강한 피해를 입는다.\n재사용 대기시간 초기화의 효과를 받지 않는다.\nSP를 투자하지 않는 스킬이며 씨 서펜트 강화 II 스킬을 익히면 사용할 수 있다.\n\n430% 데미지로 최대 6명의 적 6번 공격, 서펜트 마크가 남은 적은 15초 동안 바이퍼의 공격에 받는 최종 데미지 20% 증가, 재사용 대기시간 4초";
            break;
        case 27:
            rep = "전함 노틸러스호에 공격 명령을 내려 적 다수를 동시에 공격한다. 노틸러스는 공격 반사 상태의 적을 공격해도 피해를 입지 않는다. 스킬 습득 후 자신이 직접 공격하는 스킬로 공격 시 추가 공격을 한다.\n\nMP 350 소비, 440% 데미지로 최대 15명의 적을 7번 공격\n[파이널 어택류 스킬] 써머솔트 킥, 스크류 펀치, 피스트 인레이지, 퓨리어스 차지, 하울링 피스트로 공격 시 단일 적에게 165% 데미지의 추가 공격 2번이 100% 확률로 발동\n\n재사용 대기시간 60초";
            break;
        case 28:
            rep = "자신을 포함한 파티 전원이 사용하는 스킬의 재사용 대기시간을 초기화한다.\n재사용 대기시간 초기화의 효과를 받지 않는 스킬에는 효과가 없다.\n타임 리프는 재사용 대기시간 초기화의 효과를 받지 않고 효과를 받은 파티원은 일정 시간 동안 타임 리프의 효과를 다시 받을 수 없다.\n\nMP 405 소비, 재사용 대기시간 180초\n효과를 받은 파티원은 180초 동안 타임 리프의 효과를 다시 받을 수 없음";
            break;
        case 29:
            rep = "HP, MP를 소비하여 일정 시간 동안 팀원 전원의 공격 속도를 2단계 증가시킨다. 기존 액셀레이션과 중복해서 사용할 수 있다.\n\nHP 40, MP 40 소비, 180초 동안 공격 속도 증가";
            break;
        case 30:
            rep = "일정 확률로 주사위 2개를 동시에 던져 자신의 행운을 시험한다. 주사위의 눈이 같을 경우에는 보다 강력한 버프 효과가 적용된다.\n\nMP 60 소비, 50% 확률로 럭키 다이스 사용 시, 더블 럭키 다이스 발동, 주사위 버프 지속시간 180초\n재사용 대기시간 60초\n\n1,1 : 럭키 다이스 재사용 대기시간 50% 감소\n2,2 : 방어력 40% 증가\n3,3 : 공격력 25 증가\n4,4 : 크리티컬 확률 25% 증가\n5,5 : 데미지 30% 증가\n6,6 : 획득 경험치 40% 증가";
            break;
        case 34:
            rep = "내부의 힘을 격발시켜 일정 시간 동안 데미지가 증가하고 수룡의 힘을 더 자주 사용할 수 있게 된다. 추가로 영구히 보스 몬스터 공격 시 데미지가 증가한다\n\nMP 300 소비, 90초 동안 데미지 20% 증가\n지속 중 씨 서펜트 버스트, 씨 서펜트 인레이지, 서펜트 스크류 재사용 대기시간 50% 감소\n재사용 대기시간 180초\n\n[패시브 효과 : 보스 몬스터 공격 시 데미지 20% 증가]";
            break;
        case 35:
            rep = "수룡의 혼이 강림하여 수룡이 남긴 상흔에 반응한다. 상흔이 남은 적을 공격하면 일정 시간 동안 강한 힘을 얻는다.\n\nMP 50 소비, 90초 동안 서펜트 마크가 남은 적 공격 시마다 수룡의 의지 획득, 수룡의 의지 최대 3개까지 중첩 가능\n수룡의 의지 1개 당 크리티컬 데미지 5% 증가\n수룡의 의지 효과 10초간 지속, 지속 중 중첩 갱신 가능\n\n재사용 대기시간 60초";
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
            rep = "https://i.imgur.com/FPxd4PS.png";
            break;
        case 5:
            rep = "https://i.imgur.com/siaVStd.png";
            break;
        case 6:
            rep = "https://i.imgur.com/uoSzcZn.png";
            break;
        case 7:
            rep = "https://i.imgur.com/A3rse2v.png";
            break;
        case 8:
            rep = "https://i.imgur.com/wSiGc0M.png";
            break;
        case 9:
            rep = "https://i.imgur.com/yYAYM7y.png";
            break;
        case 10:
            rep = "";
            break;
        case 11:
            rep = "";
            break;
        case 12:
            rep = "https://i.imgur.com/jJk8vtp.png";
            break;
        case 13:
            rep = "https://i.imgur.com/uuFIry7.png";
            break;
        case 14:
            rep = "https://i.imgur.com/JN9UIwt.png";
            break;
        case 15:
            rep = "https://i.imgur.com/ISJygiq.png";
            break;
        case 16:
            rep = "https://i.imgur.com/6AYvb3a.png";
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
            rep = "https://i.imgur.com/xjfjANH.png";
            break;
        case 21:
            rep = "https://i.imgur.com/u99oBCe.png";
            break;
        case 22:
            rep = "";
            break;
        case 23:
            rep = "https://i.imgur.com/NCRMgnz.png";
            break;
        case 24:
            rep = "https://i.imgur.com/jJYubHS.png";
            break;
        case 25:
            rep = "https://i.imgur.com/WZddJzX.png";
            break;
        case 26:
            rep = "https://i.imgur.com/4DmkoE8.png";
            break;
        case 27:
            rep = "https://i.imgur.com/L6lQjDM.png";
            break;
        case 28:
            rep = "https://i.imgur.com/dVHIE4H.png";
            break;
        case 29:
            rep = "https://i.imgur.com/YUsc2v4.png";
            break;
        case 30:
            rep = "https://i.imgur.com/fIt5xRm.png";
            break;
        case 31:
            rep = "https://i.imgur.com/hcv8kCR.png";
            break;
        case 32:
            rep = "";
            break;
        case 33:
            rep = "";
            break;
        case 34:
            rep = "https://i.imgur.com/7x1SJXz.png";
            break;
        case 35:
            rep = "https://i.imgur.com/yCd7HVV.png";
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
            rep = "https://i.imgur.com/cYF3pnH.png";
            break;
        case 5:
            rep = "https://i.imgur.com/FgjQMS4.png";
            break;
        case 6:
            rep = "https://i.imgur.com/UFCaWot.png";
            break;
        case 7:
            rep = "https://i.imgur.com/FQqFBub.png";
            break;
        case 8:
            rep = "https://i.imgur.com/2ipiUXA.png";
            break;
        case 9:
            rep = "https://i.imgur.com/EWQcRga.png";
            break;
        case 10:
            rep = "https://i.imgur.com/HrrCgjB.png";
            break;
        case 11:
            rep = "https://i.imgur.com/Z9yliSo.png";
            break;
        case 12:
            rep = "https://i.imgur.com/jOk633W.png";
            break;
        case 13:
            rep = "https://i.imgur.com/kJabDV2.png";
            break;
        case 14:
            rep = "https://i.imgur.com/WiQCH6e.png";
            break;
        case 15:
            rep = "https://i.imgur.com/BSxHBtG.png";
            break;
        case 16:
            rep = "https://i.imgur.com/DiLqLkg.png";
            break;
        case 17:
            rep = "https://i.imgur.com/vI1uooY.png";
            break;
        case 18:
            rep = "https://i.imgur.com/Lu7jJiH.png";
            break;
        case 19:
            rep = "https://i.imgur.com/dfiSOXD.png";
            break;
        case 20:
            rep = "https://i.imgur.com/pv2puUb.png";
            break;
        case 21:
            rep = "https://i.imgur.com/Un5Vdpk.png";
            break;
        case 22:
            rep = "https://i.imgur.com/XrNHEjx.png";
            break;
        case 23:
            rep = "https://i.imgur.com/PVhcDvd.png";
            break;
        case 24:
            rep = "https://i.imgur.com/FZLR8V6.png";
            break;
        case 25:
            rep = "https://i.imgur.com/ZxV2QfV.png";
            break;
        case 26:
            rep = "https://i.imgur.com/uORGWVs.png";
            break;
        case 27:
            rep = "https://i.imgur.com/wFmLXQz.png";
            break;
        case 28:
            rep = "https://i.imgur.com/Jb13C2u.png";
            break;
        case 29:
            rep = "https://i.imgur.com/Fg765D3.png";
            break;
        case 30:
            rep = "https://i.imgur.com/2O2bD6h.png";
            break;
        case 31:
            rep = "https://i.imgur.com/exB1hYu.png";
            break;
        case 32:
            rep = "https://i.imgur.com/i4ecuim.png";
            break;
        case 33:
            rep = "https://i.imgur.com/2YZR9Bc.png";
            break;
        case 34:
            rep = "https://i.imgur.com/Adpko4u.png";
            break;
        case 35:
            rep = "https://i.imgur.com/mcoJdyq.png";
            break;
        case 36:
            rep = "";
            break;
    }
    return rep;
};

module.exports = skv;