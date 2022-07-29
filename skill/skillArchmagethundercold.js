const sktc = {};

sktc.getskillArchmagethundercold = function (skillname){
    var tcret = -1;
    switch(skillname){
        case "아이스 에이지":
        case "아이스에이지":
        case "아에":
        case "아오키지":
            tcret = 0;
            break;
        case "썬더 브레이크":
        case "썬더브레이크":
        case "썬브":
        case "브레이크":
            tcret = 1;
            break;
        case "스피릿 오브 스노우":
        case "스피릿오브스노우":
        case "스피릿":
        case "스오스":
            tcret = 2;
            break;
        case "주피터 썬더":
        case "주피터썬더":
        case "주피터":
        case "주썬":
            tcret = 3;
            break;
        case "마나 웨이브":
        case "마나웨이브":
        case "마웨":
        case "윗점":
        case "체공":
            tcret = 4;
            break;
        case "프리징 이펙트":
        case "프리징이펙트":
        case "스택":
            tcret = 5;
            break;
        case "칠링 스텝":
        case "칠링스텝":
        case "칠링":
        case "칠스":
            tcret = 6;
            break;
        case "메디테이션":
        case "메디":
            tcret = 7;
            break;
        case "MP 이터":
        case "MP이터":
        case "엠피 이터":
        case "엠피이터":
            tcret = 8;
            break;
        case "엘리멘탈 어뎁팅":
        case "엘리멘탈어뎁팅":
        case "어뎁팅":
            tcret = 9;
            break;
        case "썬더 스피어":
        case "썬더스피어":
        case "썬스피":
        case "썬스":
            tcret = 10;
            break;
        case "텔레포트 마스터리":
        case "텔레포트마스터리":
        case "텔마":
            tcret = 11;
            break;
        case "텔레포트 부스트":
        case "텔레포트부스트":
        case "텔포부스트":
        case "텔부":
            tcret = 12;
            break;
        case "프로즌 브레이크":
        case "프로즌브레이크":
        case "프브":
            tcret = 13;
            break;
        case "엘리멘탈 리셋":
        case "엘리멘탈리셋":
        case "리셋":
            tcret = 14;
            break;
        case "익스트림 매직(썬,콜)":
        case "익스트림매직(썬,콜)":
        case "익스트림매직썬콜":
        case "익스트림 매직":
        case "익스트림매직":
            tcret = 15;
            break;
        case "엘리먼트 앰플리피케이션":
        case "엘리먼트앰플리피케이션":
        case "앰플리피케이션":
        case "앰플":
            tcret = 16;
            break;
        case "체인 라이트닝":
        case "체인라이트닝":
        case "체라":
            tcret = 17;
            break;
        case "프리징 브레스":
        case "프리징브레스":
        case "프브":
        case "프리징":
        case "바인드":
            tcret = 18;
            break;
        case "블리자드":
        case "블자":
            tcret = 19;
            break;
        case "프로즌 오브":
        case "프로즌오브":
        case "오브":
        case "프오":
            tcret = 20;
            break;
        case "인피니티":
        case "인피니트":
        case "인피":
            tcret = 21;
            break;
        case "엘퀴네스":
        case "엘퀴":
        case "소환수":
            tcret = 22;
            break;
        case "프로스트 이펙트":
        case "프로스트이펙트":
        case "이펙트":
            tcret = 23;
            break;
        case "아이스 오라":
        case "아이스오라":
        case "오라":
            tcret = 24;
            break;
        case "라이트닝 스피어":
        case "라이트닝스피어":
        case "라스피":
        case "라스":
            tcret = 25;
            break;
        case "아이스 스트라이크":
        case "아이스스트라이크":
        case "아스":
            tcret = 26;
            break;
        case "":
            tcret = 27;
            break;
        case "":
            tcret = 28;
            break;
        case "":
            tcret = 29;
            break;
    }
    return tcret;
};
sktc.getskillnameArchmagethundercold = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "아이스 에이지";
            break;
        case 1:
            rep = "썬더 브레이크";
            break;
        case 2:
            rep = "스피릿 오브 스노우";
            break;
        case 3:
            rep = "주피터 썬더";
            break;
        case 4:
            rep = "마나 웨이브";
            break;
        case 5:
            rep = "프리징 이펙트";
            break;
        case 6:
            rep = "칠링 스텝";
            break;
        case 7:
            rep = "메디테이션";
            break;
        case 8:
            rep = "MP 이터";
            break;
        case 9:
            rep = "엘리멘탈 어뎁팅";
            break;
        case 10:
            rep = "썬더 스피어";
            break;
        case 11:
            rep = "텔레포트 마스터리";
            break;
        case 12:
            rep = "텔레포트 부스트";
            break;
        case 13:
            rep = "프로즌 브레이크";
            break;
        case 14:
            rep = "엘리멘탈 리셋";
            break;
        case 15:
            rep = "익스트림 매직(썬,콜)";
            break;
        case 16:
            rep = "엘리먼트 앰플리피케이션";
            break;
        case 17:
            rep = "체인 라이트닝";
            break;
        case 18:
            rep = "프리징 브레스";
            break;
        case 19:
            rep = "블리자드";
            break;
        case 20:
            rep = "프로즌 오브";
            break;
        case 21:
            rep = "인피니티";
            break;
        case 22:
            rep = "엘퀴네스";
            break;
        case 23:
            rep = "프로스트 이펙트";
            break;
        case 24:
            rep = "아이스 오라";
            break;
        case 25:
            rep = "라이트닝 스피어";
            break;
        case 26:
            rep = "아이스 스트라이크";
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
    }
    return rep;
};
sktc.getskilldesc1Archmagethundercold = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "15명,1100%,10번 공격/ 해당 범위를 15초간 얼림/ 쿨60초";
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
            rep = "사용후 키다운시 느리게 하강가능, 최대 5초까지 하강";
            break;
        case 5:
            rep = "빙결 중첩당 크리티컬 데미지 2% 증가/ 최대중첩 5회";
            break;
        case 6:
            rep = "텔레포트 스킬 시전 시 60% 확률로 지면 동결";
            break;
        case 7:
            rep = "MP 16 소비, 240초 동안 파티원의 마력 30 증가";
            break;
        case 8:
            rep = "마법 공격 시 20% 확률로 적의 최대 MP의 10% 흡수";
            break;
        case 9:
            rep = "상태이상 방어시 30초간 모든 상태이상 막는 보호막 발동";
            break;
        case 10:
            rep = "하단 참조";
            break;
        case 11:
            rep = "최대 6명의 적에게 340% 데미지, 80%확률 4초간 기절";
            break;
        case 12:
            rep = "텔레포트 이동 거리 좌우 65, 상하 25 증가";
            break;
        case 13:
            rep = "빙결상태 적 공격시 100% 확률로 빙결 중첩당 방어율 2% 무시";
            break;
        case 14:
            rep = "공격 속성 내성 10% 감소, 최종 데미지 50% 증가";
            break;
        case 15:
            rep = "도트 데미지, 기절, 빙결, 암흑, 마비 상태의 적 공격 시";
            break;
        case 16:
            rep = "소비 MP 50% 증가, 공격 마법의 데미지 50% 증가";
            break;
        case 17:
            rep = "최대 6명의 적을 200% 데미지로 10번 공격";
            break;
        case 18:
            rep = "하단 참조";
            break;
        case 19:
            rep = "하단 참조";
            break;
        case 20:
            rep = "8명, 220% 데미지의 얼음 파편을 뿌리는 프로즌 오브 생성";
            break;
        case 21:
            rep = "하단 참조";
            break;
        case 22:
            rep = "260초 동안 엘퀴네스 소환, 127%,3명의 적을 3번 공격";
            break;
        case 23:
            rep = "빙결 중첩당 크리티컬 데미지 3%로 증가";
            break;
        case 24:
            rep = "하단 참조";
            break;
        case 25:
            rep = "하단 참조";
            break;
        case 26:
            rep = "최대 8명의 적에게 335% 데미지로 4번 공격";
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
    }
    return rep;
};
sktc.getskilldesc2Archmagethundercold = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "지면 위의 적 일정 시간마다 275%,3번 공격, 빙결 중첩";
            break;
        case 1:
            rep = "다른스킬 사용도중 사용 가능";
            break;
        case 2:
            rep = "설치형 소환수 스킬";
            break;
        case 3:
            rep = "공격 5회당 빙결 1중첩씩 소모";
            break;
        case 4:
            rep = "모험가 마법사 공통 상향 및 완강 이동기";
            break;
        case 5:
            rep = "번개속성 공격시 중첩당 데미지 9% 추가 증가 후 중첩감소";
            break;
        case 6:
            rep = "지면 위의 적 2%의 데미지를 입히며 빙결 중첩/ 6초 유지";
            break;
        case 7:
            rep = "마력을 증가시키는 액티브 파티 버프";
            break;
        case 8:
            rep = "보스 몬스터에게는 최대 MP의 5% 흡수";
            break;
        case 9:
            rep = "보호막 발동 시 쿨240초 / [패시브: 모든속성, 상태이상내성 20% 증가]";
            break;
        case 10:
            rep = "설치형 소환수 스킬";
            break;
        case 11:
            rep = "[패시브 효과 : 스탠스 40% 증가]";
            break;
        case 12:
            rep = "텔레포트 마스터리-애드 레인지와 동시에 활성화할 수는 없다.";
            break;
        case 13:
            rep = "5중첩 기준으로 방무 10%";
            break;
        case 14:
            rep = "-";
            break;
        case 15:
            rep = "최종 데미지 20% 증가";
            break;
        case 16:
            rep = "공격 스킬 이외의 스킬의 MP 소모량도 증가";
            break;
        case 17:
            rep = "90% 확률로 4초 동안 기절, 추가 크리티컬 확률 25%";
            break;
        case 18:
            rep = "전직업 유일 13초 바인드";
            break;
        case 19:
            rep = "파이널 어택 겸 광범위 공격기";
            break;
        case 20:
            rep = "재사용 대기시간 5초 / 적을 만나면 느려짐";
            break;
        case 21:
            rep = "모법 공통 점진적 최종데미지 증가 버프";
            break;
        case 22:
            rep = "영구적으로 숙련도 증가량 70%로 증가";
            break;
        case 23:
            rep = "번개속성 공격시 중첩당 데미지 12% 추가 증가 후 중첩감소";
            break;
        case 24:
            rep = "온오프형 액티브 버프";
            break;
        case 25:
            rep = "다단히트형 극딜기";
            break;
        case 26:
            rep = "8초 동안 빙결 / 복층 사냥터에서 애용";
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
    }
    return rep;
};
sktc.getskilldesc3Archmagethundercold = function (skillcode){
    rep = "";
    switch(skillcode){
        case 1:
            rep = "전진하는 번개의 벽으로 전방의 적을 공격한다. 번개는 공격 반사 상태의 적을 공격해도 피해를 입지 않는다.\n\nMP 1000 소비, 최대 12명의 적에게 2065%의 데미지로 12번 공격하는 번개를 8번 사용\n번개는 점차 전방으로 전진하며 떨어지나 전진할 수 없다면 이전 공격했던 위치에 떨어짐\n적이 중첩해서 번개를 맞을 때마다 번개의 최종 데미지 20% 감소\n\n재사용 대기시간 40초";
            break;
        case 2:
            rep = "엘나스 산맥의 고고한 눈의 정령을 소환한다. 공격반사 상태의 적을 공격해도 피해를 입지 않는다.\n\nMP 1000 소비, 30초 동안 최대 10명의 적을 880%의 데미지로 9번 공격하고 빙결 중첩\n1명을 공격할 경우 1870%로 공격하고 빙결 3번 중첩\n\n재사용 대기시간 120초";
            break;
        case 3:
            rep = "MP 750 소비, 오브에 닿은 적에 일정 간격마다 660%의 데미지로 8번 공격하는 감전 발생, 최대 감전 횟수 30회, 감전 5회마다 빙결 중첩 감소\n\n감전된 적은 주피터 썬더를 제외한 번개 속성 공격에 최종 데미지 12% 증가된 피해 받음\n\n감전된 적 주위에 전류가 흘러 일정 간격마다 2명의 적을 440%의 데미지로 4번 공격\n\n재사용 대기시간 : 120초, 오브 소멸 시 발동되지 못한 감전 횟수당 재사용 대기시간 3.4초 감소";
            break;
        case 10:
            rep = "번개가 응집된 구체를 소환한다. 구체는 주변의 적에게 고압의 전류를 뿜어 번개 속성으로 공격한다. 아래 방향키와 함께 스킬을 재사용하면 구체를 제자리에 고정할 수 있다. 제자리에 고정된 구체는 일정 시간 동안 소환되어 더 넓은 범위의 적을 공격한다. 구체의 공격은 빙결 중첩을 감소시키지 않는다.\n\nMP 55 소비, 120초 지속되는 번개 구체 소환, 번개 구체는 최대 5명의 적을 370%의 데미지로 1번 공격\n아래 방향키와 함께 재사용 시 50초 동안 구체를 제자리에 고정, 고정된 구체는 최대 6명의 적을 370%의 데미지로 3번 공격\n일반 몬스터 공격 시 데미지 170%p 증가\n\n구체 고정 재사용 대기시간 30초";
            break;
        case 18:
            rep = "강력한 냉기로 적들과 자신을 얼려 행동 불가 상태로 만들며 지속적으로 적의 방어율을 감소시킨다.\n공격을 받은 적은 90초 동안 행동 불가 상태 이상에 저항하여 프리징 브레스 및 다른 스킬로 인한 행동 불가 상태 이상에 걸리지 않는다. 얼음 속성의 공격이다.\n\nMP 22 소비, 자신은 무적이 되며 최대 8명의 적을 80%의 데미지로 4번 공격 후 13초 동안 행동 불가 상태로 만들고 마법 방어율 30%, 물리 방어율 15% 감소시킴\n프리징 브레스로 적에게 준 데미지에 따라 행동 불가 지속시간 최대 100% 증가\n적이 행동 불가 상태에 걸리지 않으면 데미지를 받지 않음\n\n키다운 지속 시 최대 13초 동안 유지. 재사용 대기시간 180초";
            break;
        case 19:
            rep = "하늘로부터 얼음의 창을 떨어뜨려 다수의 적에게 강력한 얼음 속성 공격을 가해 빙결시킨다. 또한 영구히 공격 시 일정 확률로 단일 적에게 블리자드가 떨어져 피해를 입힌다.\n\nMP 300 소비, 최대 15명의 적에게 301% 데미지로 12번 공격, 재사용 대기시간 45초\n[패시브 효과 : [파이널 어택류 스킬] 직접 공격하는 공격 스킬 사용 시 60% 확률로 단일 적에게 220%의 데미지로 공격하는 블리자드를 떨어뜨림]";
            break;
        case 21:
            rep = "정신을 집중하여 무한한 마나를 이끌어내 일정 시간 동안 MP 소비없이 스킬을 사용할 수 있게 된다. 또한 지속적으로 자신의 HP와 MP가 회복되고 모든 공격 마법의 피해가 증가한다.\n재사용 대기시간 초기화의 효과를 받지 않는다.\n\nMP 80 소비, 40초 동안 지속, 일정 시간마다 순수 HP와 MP 10%씩 회복\n버프 지속 중 최종 데미지 70% 증가, 일정 시간마다 최종 데미지 3% 추가 증가, 인피니티로 증가하는 최종 데미지는 합 적용\n버프 지속 시간 증가량을 반영한 지속 시간 기준 지속 시간이 30% 남았을 때 캐릭터 주위로 마나가 휘몰아침\n\n재사용 대기시간 180초";
            break;
        case 24:
            rep = "파티원을 깨지지 않는 냉기로 감싸는 오라를 발생시킨다. 아이스 오라 지속 중 아래 방향키와 함께 재사용 시 냉기가 빠르게 휘몰아치는 소용돌이를 생성한다. 소용돌이 내부의 적은 더 빠르게 빙결된다.\n스킬 사용 시 효과가 활성화되고 재사용 시 비활성화 되는 온오프 스킬\n\n초당 MP 60 소비, 자신을 포함한 주위 파티원에게 상태 이상 내성 20, 모든 속성 내성 20% 증가\n피격 데미지 20% 감소\n일정 주기마다 최대 15명의 적에게 빙결을 중첩시킴\n소용돌이 : 15초 동안 지속, 소용돌이 내에 있는 아군에게 아이스 오라와 같은 효과를 적용시키며 적은 더 빠르게 빙결시킴\n소용돌이 생성 재사용 대기시간 60초";
            break;
        case 25:
            rep = "전방에 거대한 전기의 구를 발생시켜 몬스터를 지속적으로 타격한다. 공격 반사 상태의 적을 공격해도 피해를 입지 않는다.\n키다운 스킬, 공격당 MP 30 소비, 최대 15명의 적을 일정 간격마다 150% 데미지로 15번 공격, 최대 3.6초 동안 키다운 가능, 키다운 시간에 비례하여 최대 780%의 데미지로 15번 공격하는 피니시 공격 발동\n\n재사용 대기시간 60초";
            break;
    }
    return rep;
};
sktc.getskillimage1Archmagethundercold = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "https://i.imgur.com/Bx8Gpjs.png";
            break;
        case 1:
            rep = "https://i.imgur.com/Q1ZJUg2.png";
            break;
        case 2:
            rep = "https://i.imgur.com/DiI46FH.png";
            break;
        case 3:
            rep = "https://i.imgur.com/1p4HNlf.png";
            break;
        case 4:
            rep = "https://i.imgur.com/yB6dUnB.png";
            break;
        case 5:
            rep = "https://i.imgur.com/zuXYtKd.png";
            break;
        case 6:
            rep = "https://i.imgur.com/lXrrXaz.png";
            break;
        case 7:
            rep = "https://i.imgur.com/TvRUaML.png";
            break;
        case 8:
            rep = "";
            break;
        case 9:
            rep = "";
            break;
        case 10:
            rep = "https://i.imgur.com/Nv6liwQ.png";
            break;
        case 11:
            rep = "https://i.imgur.com/OZd9SAL.png";
            break;
        case 12:
            rep = "https://i.imgur.com/RpiBIvk.png";
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
            rep = "https://i.imgur.com/FgVo4wI.png";
            break;
        case 18:
            rep = "https://i.imgur.com/LqEyh93.png";
            break;
        case 19:
            rep = "https://i.imgur.com/9XmjJb0.png";
            break;
        case 20:
            rep = "https://i.imgur.com/rewu1mi.png";
            break;
        case 21:
            rep = "https://i.imgur.com/Pw1qtBX.png";
            break;
        case 22:
            rep = "https://i.imgur.com/NiuQDo1.png";
            break;
        case 23:
            rep = "";
            break;
        case 24:
            rep = "https://i.imgur.com/FrKwHlb.png";
            break;
        case 25:
            rep = "https://i.imgur.com/RcFbQzu.png";
            break;
        case 26:
            rep = "https://i.imgur.com/EGaDEre.png";
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
    }
    return rep;
};
sktc.getskillimage2Archmagethundercold = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "https://i.imgur.com/YEM7Xfi.png";
            break;
        case 1:
            rep = "https://i.imgur.com/Ee8HqHH.png";
            break;
        case 2:
            rep = "https://i.imgur.com/5euZcnt.png";
            break;
        case 3:
            rep = "https://i.imgur.com/PCO38gp.png";
            break;
        case 4:
            rep = "https://i.imgur.com/PXYFGc2.png";
            break;
        case 5:
            rep = "https://i.imgur.com/3ljTcuX.png";
            break;
        case 6:
            rep = "https://i.imgur.com/cUJ6qr0.png";
            break;
        case 7:
            rep = "https://i.imgur.com/RBmpUJB.png";
            break;
        case 8:
            rep = "https://i.imgur.com/CyrVg6r.png";
            break;
        case 9:
            rep = "https://i.imgur.com/HfBpFTI.png";
            break;
        case 10:
            rep = "https://i.imgur.com/BYc5sLd.png";
            break;
        case 11:
            rep = "https://i.imgur.com/rHPh3tn.png";
            break;
        case 12:
            rep = "https://i.imgur.com/KtvyASw.png";
            break;
        case 13:
            rep = "https://i.imgur.com/4jf7JoP.png";
            break;
        case 14:
            rep = "https://i.imgur.com/2jA2zTi.png";
            break;
        case 15:
            rep = "https://i.imgur.com/D0SfS7t.png";
            break;
        case 16:
            rep = "https://i.imgur.com/SOHn5sq.png";
            break;
        case 17:
            rep = "https://i.imgur.com/MmjBhIm.png";
            break;
        case 18:
            rep = "https://i.imgur.com/hKOSWjt.png";
            break;
        case 19:
            rep = "https://i.imgur.com/6Ap4Mb9.png";
            break;
        case 20:
            rep = "https://i.imgur.com/blzHsQP.png";
            break;
        case 21:
            rep = "https://i.imgur.com/MkECjD9.png";
            break;
        case 22:
            rep = "https://i.imgur.com/3RchFr2.png";
            break;
        case 23:
            rep = "https://i.imgur.com/zyogic1.png";
            break;
        case 24:
            rep = "https://i.imgur.com/5w1pz3T.png";
            break;
        case 25:
            rep = "https://i.imgur.com/VyA1wIR.png";
            break;
        case 26:
            rep = "https://i.imgur.com/MFNxbKA.png";
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
    }
    return rep;
};

module.exports = sktc;