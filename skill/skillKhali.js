const skk = {};

skk.getskillKhali = function (skillname){
    var xxret = -1;
    switch(skillname){
        case "헥스 : 판데모니움":
        case "헥스:판데모니움":
        case "헥스 판데모니움":
        case "헥스판데모니움":
        case "판데모니움":
        case "판대모니움":
        case "판데":
            xxret = 0;
            break;
        case "보이드 버스트":
        case "보이드버스트":
        case "버스트":
        case "보버":
            xxret = 1;
            break;
        case "아츠 : 아스트라":
        case "아츠:아스트라":
        case "아츠 아스트라":
        case "아츠아스트라":
        case "아스트라":
            xxret = 2;
            break;
        case "레조네이트 : 얼티메이텀":
        case "레조네이트:얼티메이텀":
        case "레조네이트 얼티메이텀":
        case "레조네이트얼티메이텀":
        case "얼티메이텀":
        case "레얼":
            xxret = 3;
            break;
        case "매직 서킷":
        case "매직서킷":
        case "서킷":
        case "매서":
            xxret = 4;
            break;
        case "이네이트 기프트":
        case "이네이트기프트":
        case "이네이트":
        case "기프트":
        case "링크 스킬":
        case "링크스킬":
        case "링크":
            xxret = 5;
            break;
        case "아츠 : 크로스 컷":
        case "아츠:크로스 컷":
        case "아츠:크로스컷":
        case "아츠 크로스 컷":
        case "아츠 크로스컷":
        case "아츠크로스컷":
        case "크로스 컷":
        case "크로스컷":
        case "1차":
            xxret = 6;
            break;
        case "스파크":
        case "더블 점프":
        case "더블점프":
        case "덥점":
        case "윗점":
            xxret = 7;
            break;
        case "보이드 러쉬":
        case "보이드러쉬":
        case "보이드 러시":
        case "보이드러시":
        case "러쉬":
        case "러시":
        case "보러":
            xxret = 8;
            break;
        case "플레어":
            xxret = 9;
            break;
        case "패이션스":
        case "페이션스":
            xxret = 10;
            break;
        case "아츠 : 듀얼 엣지":
        case "아츠 : 듀얼엣지":
        case "아츠:듀얼엣지":
        case "아츠 듀얼 엣지":
        case "아츠 듀얼엣지":
        case "아츠듀얼엣지":
        case "듀얼 엣지":
        case "듀얼엣지":
        case "듀엣":
        case "듀얼":
        case "2차":
            xxret = 11;
            break;
        case "아츠 : 크레센텀":
        case "아츠:크레센텀":
        case "아츠 크레센텀":
        case "아츠크레센텀":
        case "크레센텀":
        case "크센":
        case "쿨초":
            xxret = 12;
            break;
        case "인새니티 I":
        case "인새니티I":
        case "인새니티 1":
        case "인새니티1":
            xxret = 13;
            break;
        case "임펄스":
            xxret = 14;
            break;
        case "아츠 : 트리플 배쉬":
        case "아츠 : 트리플배쉬":
        case "아츠:트리플배쉬":
        case "아츠 트리플 배쉬":
        case "아츠 트리플배쉬":
        case "아츠트리플배쉬":
        case "트리플 배쉬":
        case "트리플배쉬":
        case "트배":
        case "배쉬":
        case "3차":
            xxret = 15;
            break;
        case "헥스 : 차크람 스윕":
        case "헥스 : 차크람스윕":
        case "헥스:차크람스윕":
        case "헥스 차크람 스윕":
        case "헥스 차크람스윕":
        case "헥스차크람스윕":
        case "차크람 스윕":
        case "차크람스윕":
        case "스윕":
        case "헥스 3차":
        case "헥스3차":
            xxret = 16;
            break;
        case "서먼 차크리":
        case "서먼차크리":
        case "서먼":
        case "서차":
            xxret = 17;
            break;
        case "레조네이트":
        case "레조":
            xxret = 18;
            break;
        case "인새니티 II":
        case "인새니티II":
        case "인새니티 2":
        case "인새니티2":
            xxret = 19;
            break;
        case "보이드 인핸스":
        case "보이드인핸스":
        case "인핸스":
            xxret = 20;
            break;
        case "디서빙 블레이드":
        case "디서빙블레이드":
            xxret = 21;
            break;
        case "인투이션":
            xxret = 22;
            break;
        case "비질런스":
            xxret = 23;
            break;
        case "아츠 : 플러리":
        case "아츠:플러리":
        case "아츠 플러리":
        case "아츠플러리":
        case "플러리":
        case "4차":
            xxret = 24;
            break;
        case "헥스 : 차크람 스플릿":
        case "헥스 : 차크람스플릿":
        case "헥스:차크람스플릿":
        case "헥스 차크람 스플릿":
        case "헥스 차크람스플릿":
        case "헥스차크람스플릿":
        case "차크람 스플릿":
        case "차크람스플릿":
        case "스플릿":
        case "차스":
            xxret = 25;
            break;
        case "헥스 : 차크람 퓨리":
        case "헥스 : 차크람퓨리":
        case "헥스:차크람퓨리":
        case "헥스 차크람 퓨리":
        case "헥스 차크람퓨리":
        case "헥스차크람퓨리":
        case "차크람 퓨리":
        case "차크람퓨리":
        case "퓨리":
        case "차퓨":
            xxret = 26;
            break;
        case "보이드 블리츠":
        case "보이드블리츠":
        case "블리츠":
            xxret = 27;
            break;
        case "데저트 베일":
        case "데저트베일":
        case "데베":
        case "베일":
        case "무적기":
        case "무적":
            xxret = 28;
            break;
        case "인새니티 III":
        case "인새니티III":
        case "인새니티 3":
        case "인새니티3":
            xxret = 29;
            break;
        case "어센드":
            xxret = 30;
            break;
        case "리뎀션":
            xxret = 31;
            break;
        case "오블리비온":
        case "오블":
            xxret = 32;
            break;
        case "데스 블로섬":
        case "데스블로섬":
        case "블로섬":
        case "데블":
        case "장미":
            xxret = 33;
            break;
        case "":
            xxret = 34;
            break;
    }
    return xxret;
};
skk.getskillnameKhali = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "헥스 : 판데모니움";
            break;
        case 1:
            rep = "보이드 버스트";
            break;
        case 2:
            rep = "아츠 : 아스트라";
            break;
        case 3:
            rep = "레조네이트 : 얼티메이텀";
            break;
        case 4:
            rep = "매직 서킷";
            break;
        case 5:
            rep = "이네이트 기프트";
            break;
        case 6:
            rep = "아츠 : 크로스 컷";
            break;
        case 7:
            rep = "스파크";
            break;
        case 8:
            rep = "보이드 러쉬";
            break;
        case 9:
            rep = "플레어";
            break;
        case 10:
            rep = "패이션스";
            break;
        case 11:
            rep = "아츠 : 듀얼 엣지";
            break;
        case 12:
            rep = "아츠 : 크레센텀";
            break;
        case 13:
            rep = "인새니티 I";
            break;
        case 14:
            rep = "임펄스";
            break;
        case 15:
            rep = "아츠 : 트리플 배쉬";
            break;
        case 16:
            rep = "헥스 : 차크람 스윕";
            break;
        case 17:
            rep = "서먼 차크리";
            break;
        case 18:
            rep = "레조네이트";
            break;
        case 19:
            rep = "인새니티 II";
            break;
        case 20:
            rep = "보이드 인핸스";
            break;
        case 21:
            rep = "디서빙 블레이드";
            break;
        case 22:
            rep = "인투이션";
            break;
        case 23:
            rep = "비질런스";
            break;
        case 24:
            rep = "아츠 : 플러리";
            break;
        case 25:
            rep = "헥스 : 차크람 스플릿";
            break;
        case 26:
            rep = "헥스 : 차크람 퓨리";
            break;
        case 27:
            rep = "보이드 블리츠";
            break;
        case 28:
            rep = "데저트 베일";
            break;
        case 29:
            rep = "인새니티 III";
            break;
        case 30:
            rep = "어센드";
            break;
        case 31:
            rep = "리뎀션";
            break;
        case 32:
            rep = "오블리비온";
            break;
        case 33:
            rep = "데스 블로섬";
            break;
        case 34:
            rep = "";
            break;
    }
    return rep;
};
skk.getskilldesc1Khali = function (skillcode){
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
            rep = "무기를 제외한 착용 중인 장비의 마력 중 50%를 공격력으로 전환";
            break;
        case 5:
            rep = "데미지 5% 증가, 쿨 30초";
            break;
        case 6:
            rep = "[아츠] 최대 5명의 적을 120% 데미지로 3번 공격";
            break;
        case 7:
            rep = "위 방향키와 함께 사용해 위 방향으로도 이동할 수 있다.";
            break;
        case 8:
            rep = "[보이드] 입력한 방향으로 빠르게 이동 / 쿨 5초";
            break;
        case 9:
            rep = "공격력 30, 방어력 150, 최대 HP 500";
            break;
        case 10:
            rep = "이동속도 40, 점프력 20";
            break;
        case 11:
            rep = "[아츠] 최대 6명의 적을 160% 데미지로 4번 공격";
            break;
        case 12:
            rep = "[아츠] 최대 8명, 230% 데미지로 4번 공격 / 쿨 5초";
            break;
        case 13:
            rep = "하단 참조";
            break;
        case 14:
            rep = "크리티컬 확률 35%, 크리티컬 데미지 20% 증가";
            break;
        case 15:
            rep = "[아츠] 최대 6명의 적을 220% 데미지로 5번 공격";
            break;
        case 16:
            rep = "[헥스] 최대 8명, 300%로 7번 공격하는 거대 차크람 투척";
            break;
        case 17:
            rep = "하단 참조";
            break;
        case 18:
            rep = "하단 참조";
            break;
        case 19:
            rep = "하단 참조";
            break;
        case 20:
            rep = "보이드 러쉬의 이동 거리 증가";
            break;
        case 21:
            rep = "하단 참조";
            break;
        case 22:
            rep = "하단 참조";
            break;
        case 23:
            rep = "최대 HP 15%, 최대 MP 15%, 상태 이상 내성 30";
            break;
        case 24:
            rep = "[아츠] 최대 7명의 적을 290% 데미지로 7번 공격";
            break;
        case 25:
            rep = "하단 참조";
            break;
        case 26:
            rep = "[헥스] 최대 10명, 일정시간마다 550%로 10번 공격";
            break;
        case 27:
            rep = "하단 참조";
            break;
        case 28:
            rep = "3초 동안 무적, 재사용시 해제";
            break;
        case 29:
            rep = "하단 참조";
            break;
        case 30:
            rep = "하단 참조";
            break;
        case 31:
            rep = "최종 데미지 30%, 몬스터 방어율 무시 20%";
            break;
        case 32:
            rep = "하단 참조";
            break;
        case 33:
            rep = "하단 참조";
            break;
        case 34:
            rep = "";
            break;
    }
    return rep;
};
skk.getskilldesc2Khali = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "[헥스]";
            break;
        case 1:
            rep = "[보이드]";
            break;
        case 2:
            rep = "-";
            break;
        case 3:
            rep = "-";
            break;
        case 4:
            rep = "세트X, 무기 순수 공격력의 20%까지 전환 가능";
            break;
        case 5:
            rep = "공격 시 100% 확률로 5초 동안 매초 최대 HP/MP의 2% 회복";
            break;
        case 6:
            rep = "공격 적중 시 보이드 러쉬/보이드 블리츠의 재사용 대기시간 1초 감소";
            break;
        case 7:
            rep = "MP 5 소비, 일정 거리 점프";
            break;
        case 8:
            rep = "재사용 대기시간 초기화의 영향을 받지 않는다.";
            break;
        case 9:
            rep = "최대 MP 500, 스탠스 확률 40% 증가";
            break;
        case 10:
            rep = "최대 이동속도 20, 회피율 30% 증가";
            break;
        case 11:
            rep = "공격 적중 시 보이드 러쉬/보이드 블리츠의 재사용 대기시간 1초 감소";
            break;
        case 12:
            rep = "공격 적중 시 보이드 러쉬/보이드 블리츠의 재사용 대기시간 5초 감소";
            break;
        case 13:
            rep = "보이드 러쉬 강화";
            break;
        case 14:
            rep = "-";
            break;
        case 15:
            rep = "공격 적중 시 보이드 러쉬/보이드 블리츠의 재사용 대기시간 1초 감소";
            break;
        case 16:
            rep = "재사용 대기시간 6초";
            break;
        case 17:
            rep = "온오프 스킬";
            break;
        case 18:
            rep = "패시브";
            break;
        case 19:
            rep = "보이드 러쉬 추가 강화";
            break;
        case 20:
            rep = "온오프 스킬";
            break;
        case 21:
            rep = "보이드 계열 스킬 추가타";
            break;
        case 22:
            rep = "-";
            break;
        case 23:
            rep = "모든 속성 내성 30%, 스탠스 확률 60% 증가, 피격 데미지 30% 감소";
            break;
        case 24:
            rep = "공격 적중 시 보이드 러쉬/보이드 블리츠의 재사용 대기시간 1초 감소";
            break;
        case 25:
            rep = "[헥스]";
            break;
        case 26:
            rep = "재사용 대기시간 12초";
            break;
        case 27:
            rep = "[보이드]";
            break;
        case 28:
            rep = "재사용 대기시간 75초";
            break;
        case 29:
            rep = "보이드 러쉬 최종 강화";
            break;
        case 30:
            rep = "스킬 강화";
            break;
        case 31:
            rep = "보스 몬스터 공격 시 데미지 30% 증가";
            break;
        case 32:
            rep = "극딜 버프";
            break;
        case 33:
            rep = "설치기";
            break;
        case 34:
            rep = "";
            break;
    }
    return rep;
};
skk.getskilldesc3Khali = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "혼돈의 영역을 펼친다. 헥스 : 판데모니움은 공격 반사 상태의 적을 공격해도 피해를 입지 않는다.\n\nMP 700 소비, 3초 동안 최대 10명의 적을 일정 시간마다 715% 데미지로 4번 공격하는 혼돈의 영역 소환\n혼돈의 영역의 지속 시간에 따라 공격 속도 증가, 최대 3단계까지 증가\n지속 시간 종료 시 최대 12명의 적을 1375% 데미지로 10번 공격하는 폭발이 5번 발동\n\n재사용 대기시간 30초";
            break;
        case 1:
            rep = "수의 바람으로 강림하여 잔상조차 스치는 모든 적을 섬멸한다. 일정 시간 동안 무적 상태가 되며 스킬 재사용 시 범위 내 대상 하나를 추적하는 연격을 수회 발동 시킬 수 있다. 연격 종료 혹은 지속 시간 종료 시 강력한 마무리 일격이 발동한다. 보이드 버스트의 연격과 마무리 일격은 차크리를 발현시킨다. 연격은 최대 HP가 높은 보스 몬스터를 우선 추적한다. 연격이 추적할 대상이 없는 경우 시전자를 추적 대상으로 삼아 발동한다.\n\nMP 1000 소비, 4.3초 동안 복수의 바람으로 강림, 복수의 바람 중 무적\n복수의 바람 중 스킬 재사용 시 주변 대상 하나를 추적하여 최대 12명의 적을 2200% 데미지로 12번 공격하는 연격 발생\n연격 5회 혹은 지속 시간 종료 시 최대 15명의 적을 2310% 데미지로 15번 공격하는 참격 6번 발동 후 3.5초 동안 무적\n\n재사용 대기시간 180초";
            break;
        case 2:
            rep = "고대의 차크람을 불러낸다. 아츠 스킬 적중 시 자동으로 발동된다. 아츠 : 아스트라는 공격 반사 상태의 적을 공격해도 피해를 입지 않는다.\n\nMP 500 소비, 최대 8명의 적을 660% 데미지로 6번 공격하는 고대의 차크람 3개 소환\n일정 시간 후 소멸하며 최대 10명의 적을 880% 데미지로 8번 공격\n\n재발동 대기시간 14초";
            break;
        case 3:
            rep = "내재된 마력을 극대화하여 서먼 차크리와 레조네이트를 각성시킨다. 레조네이트 : 얼티메이텀은 공격 반사 상태의 적을 공격해도 피해를 입지 않는다.\n\nMP 1000 소비, 30초 동안 지속\n지속 중 각성 차크리 최대 8개까지 생성 가능\n헥스 계열 스킬 사용 시 일정 범위 내 소환된 각성 차크리가 레조네이트 2개로 분열하며 발현\n각성 레조네이트는 315% 데미지로 3번 공격, 최대 4회 튕긴 후 소멸\n 일반 몬스터 공격 시 데미지 150%p 증가\n하나의 대상에게 반복해서 적중 시 최종 데미지 30% 감소\n\n재사용 대기시간 180초";
            break;
        case 13:
            rep = "잔상에 칼날을 덧대어 보이드 러쉬를 강화한다. 보이드 러쉬가 8방향으로 사용할 수 있게 강화되며 이동 경로 상의 적에게 데미지를 입힐 수 있게 된다. 또한 사용 시 짧은 시간 동안 다크 사이트 상태가 되며 이동 종료 시 짧은 시간 동안 체공한다. 아츠 및 헥스 계열 스킬 사용 중에 사용할 수 있으며 이동 중 점프키를 입력하여 즉시 정지할 수 있다. 보이드 러쉬는 공격 반사 상태의 적을 공격해도 피해를 입지 않으며 재사용 대기시간 초기화의 효과를 받지 않는다.\n\nMP 30 소비, 입력한 방향으로 빠르게 이동하며 최대 6명의 적을 120% 데미지로 2번 공격\n일반 몬스터 공격 시 데미지 180%p 증가\n사용 시 2초 동안 다크 사이트\n\n재사용 대기시간 5초";
            break;
        case 17:
            rep = "넘쳐흐르는 마력으로 빚어낸 무기의 형상인 차크리를 남길 수 있게 된다. 소환된 차크리는 헥스 계열 스킬 사용을 통해 레조네이트로 발현시킬 수 있다.\n\n보이드 계열로 몬스터 처지 혹은 보스 몬스터 공격 시 30% 확률로 차크리 생성\n아츠/헥스 계열 스킬을 보이드 계열 스킬로 취소 시 100% 확률로 차크리 생성\n생성된 차크리는 30초 동안 지속, 최대 6개 생성 가능";
            break;
        case 18:
            rep = "강력한 마력으로 소환된 차크리를 발현시켜 자유자재로 움직일 수 있게 된다. 헥스 계열 스킬 사용 시 일정 범위 내의 차크리가 레조네이트로 발현되며, 발현된 레조네이트는 발현 지점 주변의 적을 추적하여 공격한다. 레조네이트는 공격 반사 상태의 적을 공격해도 피해를 입지 않는다.\n\n헥스 계열 스킬 사용 시 일정 범위 내 소환된 차크리를 레조네이트로 발현\n발현된 레조네이트는 165% 데미지로 3번 공격, 최대 3회 튕긴 후 소멸\n하나의 대상에게 반복해서 적중 시 최종 데미지 30% 감소";
            break;
        case 19:
            rep = "더욱 강력한 잔상으로 보이드 러쉬를 추가로 강화한다. 보이드 러쉬의 공격 범위가 증가하며 연속으로 사용할 수 있게 되며 헥스 계열 스킬로 연계할 수 있다. 단, 상단을 포함한 방향으로는 일정 횟수 이상 연속 사용할 수 없으며 스파크 및 헥스 계열 스킬을 제외한 스킬 사용 시 연속 사용 가능 상태가 해제된다. 보이드 러쉬 이동 중에도 보이드 러쉬를 재입력하여 다음 이동을 즉시 시작할 수 있다. 보이드 러쉬는 공격 반사 상태의 적을 공격해도 피해를 입지 않으며 재사용 대기시간 초기화의 효과를 받지 않는다. 인새니티 Ⅰ의 효과를 덮어쓴다.\n\nMP 40 소비, 입력한 방향으로 빠르게 이동하며 최대 6명의 적을 180% 데미지로 3번 공격\n일반 몬스터 공격 시 데미지 210%p 증가\n사용 시 2초 동안 다크 사이트\n최대 2회 연속 사용 가능\n\n재사용 대기시간 5초";
            break;
        case 21:
            rep = "적의 그림자를 흡수하여 자신의 힘으로 만든다. 보이드 계열 스킬 명중 시 일정 시간 동안 보이드 계열 스킬을 제외한 직접 사용하는 스킬 명중 시 추가타가 발생한다. 디시빙 블레이드는 공격 반사 상태의 적을 공격해도 피해를 입지 않으며 버프 지속시간 증가의 효과를 받지 않는다.\n\n보이드 계열 스킬 명중 시 10초 동안 지속되는 버프 발생\n버프 중 직접 사용한 공격 명중 시 370% 데미지로 2번 공격하는 추가타 발생\n\n추가타 재발동 대기시간 0.5초";
            break;
        case 22:
            rep = "전투의 본질을 이해한다.\n\n최종 데미지 25%, 몬스터 방어율 무시 20%, 공격력 30 증가\n아츠 : 크레센텀의 데미지 120%p 증가";
            break;
        case 25:
            rep = "적들을 수회 공격하는 다수의 거대한 차크람을 전방에 던진다. 던진 차크람은 최대 사거리에서 도달 시 짧은 시간 회전하며 공격한 후, 회전 공격 종료 시 캐릭터의 위치로 회수되며 경로 상의 적을 공격한다. 단, 회수 중인 차크람은 일정 거리 이동 시 즉시 소멸한다. 헥스 : 차크람 스플릿은 공격 반사 상태의 적을 공격해도 피해를 입지 않는다.\n\nMP 75 소비, 최대 10명의 적을 일정 시간마다 245% 데미지로 5번 공격하는 거대 차크람 4개 투척\n각 차크람은 대상을 최대 4회까지 타격 가능\n\n재사용 대기시간 14초";
            break;
        case 27:
            rep = "잔상의 힘을 증폭시켜 전방에 잔상을 수개 쏟아낸다. 각 잔상은 별개의 공격으로 취급되어 서먼 차크리의 효과가 각각 적용된다. 사용 시 일정 시간 동안 다크 사이트 상태가 된다. 보이드 블리츠는 재사용 대기시간 초기화의 효과를 받지 않는다. 커스텀 커맨드를 사용하면 방향키와 조합하지 않은 보이드 러쉬 사용으로 보이드 블리츠를 발동할 수 있다.\n\n커스텀 커맨드 온오프 : 마우스 우클릭\n\nMP 40 소비, 최대 6명의 적을 210% 데미지로 4번 공격하는 잔상이 4회 발동\n사용 시 2초 동안 다크 사이트\n\n재사용 대기시간 6초";
            break;
        case 29:
            rep = "잔상과 하나가 되어 움직임을 완성한다. 보이드 러쉬는 공격 반사 상태의 적을 공격해도 피해를 입지 않으며 재사용 대기시간 초기화의 효과를 받지 않는다. 인새니티 Ⅱ의 효과를 덮어쓴다.\n\nMP 50 소비, 입력한 방향으로 빠르게 이동하며 최대 7명의 적을 210% 데미지로 4번 공격\n일반 몬스터 공격 시 데미지 350%p 증가\n사용 시 2초 동안 다크 사이트\n최대 3회 연속 사용 가능\n\n재사용 대기시간 5초";
            break;
        case 30:
            rep = "끝없이 높은 곳을 향하고자 하는 의지로 단련하여 전투 능력을 향상시킨다. 어센드는 레조네이트 : 얼티메이텀에는 적용되지 않는다.\n\n레조네이트의 데미지 200%p 증가\n레조네이트의 튕기는 횟수 1회 증가\n서먼 차크리의 생성 확률 45% 증가\n헥스 : 차크람 스윕의 데미지 400%p 증가\n아츠 : 크레센텀의 데미지 130% 증가";
            break;
        case 32:
            rep = "순간적으로 마력을 응집시켜 무아의 경지에 다다른다. 일정 시간 동안 보이드 및 헥스 계열 스킬의 효과를 크게 강화한다.\n\nMP 250 소비, 30초 동안 지속\n사용 시 보이드 러쉬, 보이드 블리츠 스킬의 재사용 대기시간 초기화\n지속 중 4차 이하 헥스 계열 스킬의 재사용 대기시간 50% 감소\n보이드/헥스 계열 스킬의 최종 데미지 30% 증가\n\n재사용 대기시간 180초";
            break;
        case 33:
            rep = "모래로 빚은 절망의 장미를 개화한다. 검은 장미는 일정 시간 동안 주변의 적을 공격하며 공격한 위치에 일정 확률로 서먼 차크리가 생성된다. 공격한 대상 수가 최대 공격 가능한 대상 수보다 적을 경우 추가로 서먼 차크리가 생성된다. 데스 블로섬은 공격 반사 상태의 적을 공격해도 피해를 입지 않는다.\n\nMP 300 소비, 30초 동안 소환\n일정 시간마다 최대 10명의 적을 700% 데미지로 6번 공격\n공격한 위치에 100% 확률로 서먼 차크리 생성\n공격한 대상 수가 최대 공격 가능한 대상 수보다 적다면 그 차이만큼 임의 위치에 서먼 차크리 추가 생성\n추가 생성되는 서먼 차크리는 최대 2개까지 생성\n\n재사용 대기시간 90초";
            break;
        case 34:
            rep = "";
            break;
    }
    return rep;
};
skk.getskillimage1Khali = function (skillcode){
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
    }
    return rep;
};
skk.getskillimage2Khali = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "https://i.imgur.com/nphHzo9.png";
            break;
        case 1:
            rep = "https://i.imgur.com/LCcFs7p.png";
            break;
        case 2:
            rep = "https://i.imgur.com/gns3C5g.png";
            break;
        case 3:
            rep = "https://i.imgur.com/DV2AbNC.png";
            break;
        case 4:
            rep = "https://i.imgur.com/Ic08xsR.png";
            break;
        case 5:
            rep = "https://i.imgur.com/p5UDEyo.png";
            break;
        case 6:
            rep = "https://i.imgur.com/nU34rhb.png";
            break;
        case 7:
            rep = "https://i.imgur.com/JQF2gon.png";
            break;
        case 8:
            rep = "https://i.imgur.com/3zbH8rZ.png";
            break;
        case 9:
            rep = "https://i.imgur.com/6Pr9FPu.png";
            break;
        case 10:
            rep = "https://i.imgur.com/f07Khro.png";
            break;
        case 11:
            rep = "https://i.imgur.com/GxYH1KG.png";
            break;
        case 12:
            rep = "https://i.imgur.com/9tKDeBg.png";
            break;
        case 13:
            rep = "https://i.imgur.com/gEmUSIH.png";
            break;
        case 14:
            rep = "https://i.imgur.com/z3vnyRF.png";
            break;
        case 15:
            rep = "https://i.imgur.com/oK9EoTP.png";
            break;
        case 16:
            rep = "https://i.imgur.com/zd0Jpl2.png";
            break;
        case 17:
            rep = "https://i.imgur.com/mhJbM6a.png";
            break;
        case 18:
            rep = "https://i.imgur.com/t66Dbx7.png";
            break;
        case 19:
            rep = "https://i.imgur.com/NpPU2oo.png";
            break;
        case 20:
            rep = "https://i.imgur.com/WY68dC5.png";
            break;
        case 21:
            rep = "https://i.imgur.com/sZ6oIxe.png";
            break;
        case 22:
            rep = "https://i.imgur.com/W78IiGO.png";
            break;
        case 23:
            rep = "https://i.imgur.com/Kz4xeVl.png";
            break;
        case 24:
            rep = "https://i.imgur.com/FTbjnIr.png";
            break;
        case 25:
            rep = "https://i.imgur.com/mp5yCMu.png";
            break;
        case 26:
            rep = "https://i.imgur.com/oV92lfT.png";
            break;
        case 27:
            rep = "https://i.imgur.com/XPcqi6R.png";
            break;
        case 28:
            rep = "https://i.imgur.com/iMAbQfo.png";
            break;
        case 29:
            rep = "https://i.imgur.com/YXeoIfv.png";
            break;
        case 30:
            rep = "https://i.imgur.com/7rmFdcz.png";
            break;
        case 31:
            rep = "https://i.imgur.com/KM2FKVT.png";
            break;
        case 32:
            rep = "https://i.imgur.com/xtrblsV.png";
            break;
        case 33:
            rep = "https://i.imgur.com/GU3y76s.png";
            break;
        case 34:
            rep = "";
            break;
    }
    return rep;
};

module.exports = skk;