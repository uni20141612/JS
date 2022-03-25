const skk = {};

skk.getskillKinesis = function (skillname){
    var kret = -1;
    switch(skillname){
        case "싸이킥 토네이도":
        case "싸이킥토네이도":
        case "토네이도":
        case "싸토":
            kret = 0;
            break;
        case "얼티메이트-무빙 매터":
        case "얼티메이트-무빙매터":
        case "얼티메이트무빙매터":
        case "무빙매터":
        case "얼무매":
        case "무매":
            kret = 1;
            break;
        case "얼티메이트-싸이킥 불릿":
        case "얼티메이트-싸이킥불릿":
        case "얼티메이트싸이킥불릿":
        case "싸이킥불릿":
        case "불릿":
        case "싸불":
            kret = 2;
            break;
        case "로 오브 그라비티":
        case "로오브그라비티":
        case "로오그":
        case "로그":
            kret = 3;
            break;
        case "초감각":
            kret = 4;
            break;
        case "싸이킥 포스":
        case "싸이킥포스":
        case "포스":
        case "싸포":
            kret = 5;
            break;
        case "싸이킥 인스팅트":
        case "싸이킥인스팅트":
        case "인스팅트":
        case "싸인팅":
        case "싸인":
            kret = 6;
            break;
        case "싸이킥 워크":
        case "싸이킥워크":
        case "워크":
        case "싸워":
        case "트리플 점프":
        case "트리플점프":
        case "트점":
        case "방구 점프":
        case "방구점프":
        case "윗점":
            kret = 7;
            break;
        case "내재1":
            kret = 8;
            break;
        case "매드 크래시":
        case "매드크래시":
        case "매드":
        case "매크":
            kret = 9;
            break;
        case "싸이킥 포스2":
        case "싸이킥포스2":
        case "포스2":
        case "싸포2":
            kret = 10;
            break;
        case "싸이킥 드레인":
        case "싸이킥드레인":
        case "드레인":
        case "싸드":
            kret = 11;
            break;
        case "얼티메이트-딥 임팩트":
        case "얼티메이트-딥임팩트":
        case "얼티메이트 딥 임팩트":
        case "얼티메이트 딥임팩트":
        case "얼티메이트딥임팩트":
        case "딥 임팩트":
        case "딥임팩트":
        case "딥임":
        case "얼딥임":
        case "얼딥":
            kret = 12;
            break;
        case "싸이킥 실드":
        case "싸이킥실드":
        case "실드":
        case "싸실":
            kret = 13;
            break;
        case "순수한 힘":
        case "순수한힘":
            kret = 14;
            break;
        case "내재2":
            kret = 15;
            break;
        case "싸이킥 그랩":
        case "싸이킥그랩":
        case "그랩":
        case "싸그":
            kret = 16;
            break;
        case "싸이킥 포스3":
        case "싸이킥포스3":
        case "포스3":
        case "싸포3":
            kret = 17;
            break;
        case "싸이킥 그라운드":
        case "싸이킥그라운드":
        case "그라운드":
            kret = 18;
            break;
        case "얼티메이트-트레인":
        case "얼티메이트 트레인":
        case "얼티메이트트레인":
        case "트레인":
        case "얼트":
            kret = 19;
            break;
        case "텔레키네시스":
        case "텔레":
        case "텔키":
            kret = 20;
            break;
        case "싸이킥 실드2(왜곡)":
        case "싸이킥실드2(왜곡)":
        case "싸이킥 실드2 왜곡":
        case "싸이킥실드2 왜곡":
        case "싸이킥실드2왜곡":
        case "실드2 왜곡":
        case "실드2왜곡":
        case "실드2":
        case "왜곡":
            kret = 21;
            break;
        case "싸이킥 무브":
        case "싸이킥무브":
        case "무브":
        case "싸무":
        case "근두운":
            kret = 22;
            break;
        case "정신강화":
        case "정강":
            kret = 23;
            break;
        case "정교":
            kret = 24;
            break;
        case "초월":
            kret = 25;
            break;
        case "완화":
            kret = 26;
            break;
        case "싸이킥 그랩2":
        case "싸이킥그랩2":
        case "그랩2":
        case "싸그2":
            kret = 27;
            break;
        case "얼티메이트-싸이킥 샷":
        case "얼티메이트-싸이킥샷":
        case "얼티메이트 싸이킥 샷":
        case "얼티메이트 싸이킥샷":
        case "얼티메이트싸이킥샷":
        case "싸이킥 샷":
        case "싸이킥샷":
        case "얼싸샷":
        case "얼싸":
        case "얼샷":
            kret = 28;
            break;
        case "얼티메이트-B.P.M":
        case "얼티메이트B.P.M":
        case "얼티메이트 B.P.M":
        case "얼티메이트-BPM":
        case "얼티메이트 BPM":
        case "얼티메이트BPM":
        case "B.P.M":
        case "BPM":
        case "얼티메이트-비피엠":
        case "얼티메이트 비피엠":
        case "얼티메이트비피엠":
        case "비피엠":
            kret = 29;
            break;
        case "싸이킥 그라운드2":
        case "싸이킥그라운드2":
        case "그라운드2":
            kret = 30;
            break;
        case "싸이코 브레이크":
        case "싸이코브레이크":
        case "브레이크":
        case "싸브":
            kret = 31;
            break;
        case "싸이킥 차징":
        case "싸이킥차징":
        case "차징":
        case "싸차":
            kret = 32;
            break;
        case "ESP 배틀 오더":
        case "ESP 배틀오더":
        case "ESP배틀오더":
        case "배틀 오더":
        case "배틀오더":
            kret = 33;
            break;
        case "각성":
            kret = 34;
            break;
        case "정신집중-유지":
        case "정신집중 유지":
        case "정신집중유지":
            kret = 35;
            break;
        case "임계":
            kret = 36;
            break;
        case "전달":
            kret = 37;
            break;
        case "숙달":
            kret = 38;
            break;
        case "에버싸이킥":
        case "에싸":
        case "에버":
            kret = 39;
            break;
        case "싸이코 메트리":
        case "싸이코메트리":
        case "메트리":
        case "싸메":
        case "바인드":
            kret = 40;
            break;
        case "싸이킥 오버":
        case "싸이킥오버":
        case "오버":
        case "싸오":
            kret = 41;
            break;
        case "":
            kret = 42;
            break;
    }
    return kret;
};
skk.getskillnameKinesis = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "싸이킥 토네이도";
            break;
        case 1:
            rep = "얼티메이트-무빙 매터";
            break;
        case 2:
            rep = "얼티메이트-싸이킥 불릿";
            break;
        case 3:
            rep = "로 오브 그라비티";
            break;
        case 4:
            rep = "초감각";
            break;
        case 5:
            rep = "싸이킥 포스";
            break;
        case 6:
            rep = "싸이킥 인스팅트";
            break;
        case 7:
            rep = "싸이킥 워크";
            break;
        case 8:
            rep = "내재1";
            break;
        case 9:
            rep = "매드 크래시";
            break;
        case 10:
            rep = "싸이킥 포스2";
            break;
        case 11:
            rep = "싸이킥 드레인";
            break;
        case 12:
            rep = "얼티메이트-딥 임팩트";
            break;
        case 13:
            rep = "싸이킥 실드";
            break;
        case 14:
            rep = "순수한 힘";
            break;
        case 15:
            rep = "내재2";
            break;
        case 16:
            rep = "싸이킥 그랩";
            break;
        case 17:
            rep = "싸이킥 포스3";
            break;
        case 18:
            rep = "싸이킥 그라운드";
            break;
        case 19:
            rep = "얼티메이트-트레인";
            break;
        case 20:
            rep = "텔레키네시스";
            break;
        case 21:
            rep = "싸이킥 실드2(왜곡)";
            break;
        case 22:
            rep = "싸이킥 무브";
            break;
        case 23:
            rep = "정신강화";
            break;
        case 24:
            rep = "정교";
            break;
        case 25:
            rep = "초월";
            break;
        case 26:
            rep = "완화";
            break;
        case 27:
            rep = "싸이킥 그랩2";
            break;
        case 28:
            rep = "얼티메이트-싸이킥 샷";
            break;
        case 29:
            rep = "얼티메이트-B.P.M";
            break;
        case 30:
            rep = "싸이킥 그라운드2";
            break;
        case 31:
            rep = "싸이코 브레이크";
            break;
        case 32:
            rep = "싸이킥 차징";
            break;
        case 33:
            rep = "ESP 배틀 오더";
            break;
        case 34:
            rep = "각성";
            break;
        case 35:
            rep = "정신집중-유지";
            break;
        case 36:
            rep = "임계";
            break;
        case 37:
            rep = "전달";
            break;
        case 38:
            rep = "숙달";
            break;
        case 39:
            rep = "에버싸이킥";
            break;
        case 40:
            rep = "싸이코 메트리";
            break;
        case 41:
            rep = "싸이킥 오버";
            break;
        case 42:
            rep = "";
            break;
        case 43:
            rep = "";
            break;
    }
    return rep;
};
skk.getskilldesc1Kinesis = function (skillcode){
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
            rep = "크리티컬 확률 10%, 회피율 12%";
            break;
        case 5:
            rep = "하단 참조";
            break;
        case 6:
            rep = "싸이킥 포인트를 1칸 소비하여 받는 피해의 60%를 상쇄";
            break;
        case 7:
            rep = "점프 중 사용하면 진행 방향으로 연속 두 번 점프";
            break;
        case 8:
            rep = "최대 HP 30%, 마력 10, 점프력 10";
            break;
        case 9:
            rep = "최대 8명의 적을 280%의 데미지로 2번 공격/ 1칸충전";
            break;
        case 10:
            rep = "하단 참조";
            break;
        case 11:
            rep = "최대 5명의 적을 150%의 데미지로 지속 공격, 30초 동안 지속";
            break;
        case 12:
            rep = "하단 참조";
            break;
        case 13:
            rep = "방어력 300, 회피율 20% 증가";
            break;
        case 14:
            rep = "데미지 20%, 공격 속도 1단계 증가";
            break;
        case 15:
            rep = "최대 HP 20%, 마력 10, 점프력 10";
            break;
        case 16:
            rep = "하단 참조";
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
            rep = "공격성공시 70%확률 350%의 데미지로 1번 자동 공격한다.";
            break;
        case 21:
            rep = "방어력 200, 스탠스 확률 100% 증가";
            break;
        case 22:
            rep = "상향으로 빠르게 이동, 방향 조정 가능";
            break;
        case 23:
            rep = "마력 10% 증가";
            break;
        case 24:
            rep = "크리티컬 확률 20%";
            break;
        case 25:
            rep = "상태 이상 내성 20";
            break;
        case 26:
            rep = "받는 피해 15% 감소";
            break;
        case 27:
            rep = "하단 참조";
            break;
        case 28:
            rep = "싸이킥 포인트 5칸 소비/ 30초 동안 방어율 15% 감소";
            break;
        case 29:
            rep = "하단 참조";
            break;
        case 30:
            rep = "하단 참조";
            break;
        case 31:
            rep = "하단 참조";
            break;
        case 32:
            rep = "싸이킥 포인트가 최대치로 되기 위해 최대 포인트의 50% 충전";
            break;
        case 33:
            rep = "마력 50, 데미지 20% 증가";
            break;
        case 34:
            rep = "최종 데미지 40% 증가";
            break;
        case 35:
            rep = "버프 지속시간 20% 증가";
            break;
        case 36:
            rep = "30콤보킬을 달성할 때마다 최소 데미지와 최대 데미지의";
            break;
        case 37:
            rep = "공격 시 몬스터의 방어율 25% 무시";
            break;
        case 38:
            rep = "무기의 숙련도 증가량 70%로 증가";
            break;
        case 39:
            rep = "하단 참조";
            break;
        case 40:
            rep = "하단 참조";
            break;
        case 41:
            rep = "26초 동안 싸이킥 포인트 소비량 절반 감소";
            break;
        case 42:
            rep = "";
            break;
        case 43:
            rep = "";
            break;
    }
    return rep;
};
skk.getskilldesc2Kinesis = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "자동 공격형 광범위 공격기";
            break;
        case 1:
            rep = "30초 동안 검은색 정이십면체를 소환한다";
            break;
        case 2:
            rep = "재사용 대기시간이 없다";
            break;
        case 3:
            rep = "주변 잡몹 소수만 있어도 중력장의 공격 속도가 급격히 느려짐";
            break;
        case 4:
            rep = "이동속도 10 증가";
            break;
        case 5:
            rep = "이동기 봉인시 사용 불가";
            break;
        case 6:
            rep = "온오프 스킬";
            break;
        case 7:
            rep = "↑ 키와 함께 사용해 상향으로도 이동할 수 있다";
            break;
        case 8:
            rep = "이동속도 10, 최대 이동속도 10 증가";
            break;
        case 9:
            rep = "사용 중 슈퍼 스탠스";
            break;
        case 10:
            rep = "상하차 알바 가능";
            break;
        case 11:
            rep = "발동 시마다 싸이킥 포인트 1칸 회복/ 쿨 3초";
            break;
        case 12:
            rep = "실질적인 쿨타임 120초";
            break;
        case 13:
            rep = "-";
            break;
        case 14:
            rep = "-";
            break;
        case 15:
            rep = "이동속도 10, 최대 이동속도 10 증가";
            break;
        case 16:
            rep = "주력 공격기";
            break;
        case 17:
            rep = "2차 강화 패시브";
            break;
        case 18:
            rep = "설치형 디버프기";
            break;
        case 19:
            rep = "고정된 지점 공격하는 것이 단점";
            break;
        case 20:
            rep = "얼티메이트류, 싸이킥포스, 싸이킥샷, 싸이킥드레인, 에버싸이킥 제외";
            break;
        case 21:
            rep = "-";
            break;
        case 22:
            rep = "스킬 사용 중 이동하면 싸이킥 포인트 2칸 소비/ 쿨10초";
            break;
        case 23:
            rep = "-";
            break;
        case 24:
            rep = "크리티컬 데미지 20% 증가";
            break;
        case 25:
            rep = "모든 속성 내성 30% 증가";
            break;
        case 26:
            rep = "-";
            break;
        case 27:
            rep = "강화 패시브";
            break;
        case 28:
            rep = "탄환 하나당 300%의 데미지로 3번 공격";
            break;
        case 29:
            rep = "온오프 스킬";
            break;
        case 30:
            rep = "강화 패시브";
            break;
        case 31:
            rep = "사냥용으로는 범위가 좁아 쓰기 애매함";
            break;
        case 32:
            rep = "쿨 45초 / [패시브: 보공 30% 증가]";
            break;
        case 33:
            rep = "최종 데미지 20% 증가";
            break;
        case 34:
            rep = "얼티메이트 스킬의 크리티컬 데미지 20% 증가";
            break;
        case 35:
            rep = "-";
            break;
        case 36:
            rep = "격차가 일정량(숙련도 1%씩) 감소된다.";
            break;
        case 37:
            rep = "-";
            break;
        case 38:
            rep = "크리티컬 데미지 10% 증가";
            break;
        case 39:
            rep = "남/녀 일러스트 다름";
            break;
        case 40:
            rep = "바인드";
            break;
        case 41:
            rep = "싸이킥 포인트 지속적으로 증가/ 쿨 180초";
            break;
        case 42:
            rep = "";
            break;
        case 43:
            rep = "";
            break;
    }
    return rep;
};
skk.getskilldesc3Kinesis = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "염동력을 해방하여 주변 물체를 모아 공격하는 회오리를 만든다. 공격 반사 상태의 적을 공격해도 피해를 입지 않는다.\n\n싸이킥 포인트 15칸 소비, 20초 동안 일정 시간마다 15명의 적을 1650%로 4번 공격\n\n일정 시간이 지날 때마다 물체가 점점 커지며 스킬이 종료되거나 스킬을 다시 사용하면 전방으로 던져 공격\n던진 물체는 일정 시간마다 최대 10명의 적을 433%로 2번 이동하며 공격한 후 최대 10명의 적을 975%로 10번 공격하는 폭발이 3회 발생, 물체 크기에 비례하여 공격의 최종 데미지 3배까지 증가\n\n재사용 대기시간 : 180초";
            break;
        case 1:
            rep = "염동력으로 움직일 수 있는 물질을 생성한다. 싸이킥 포스로 물질을 움직일 수 있으며 이동 속도에 비례하여 물질의 공격 속도가 증가한다. 스킬을 다시 사용하면 물체를 키네시스 쪽으로 움직일 수 있지만 속도가 감소한다.\n아래 방향으로 싸이킥 포스를 사용했을 때는 이동 방향은 바뀌지만 이동 속도가 빨라지지 않는다. 공격 반사 상태의 적을 공격해도 피해를 입지 않는다.\n\n싸이킥 포인트 10칸 소비, 일정 주기마다 접촉한 최대 10명의 적을 1100%의 데미지로 5번 공격하는 물질 생성, 물질의 이동속도에 비례해 공격 속도 증가\n\n키네시스 쪽으로 물질을 움직일 때 현재 속도의 75%만 반영\n물질 소멸 시 최대 12명의 적을 1540% 데미지로 12번 추가 공격\n\n재사용 대기시간 90초";
            break;
        case 2:
            rep = "염동력으로 지배하던 몬스터와 사물을 하나로 뭉쳐 전방으로 쏘아낸다. 사정거리 끝에서 마이크로 블랙홀이 잠시 발생해 주위의 적을 추가 공격한다. 단, 마이크로 블랙홀은 동시에 2개 이상 존재할 수 없다.\n\n마이크로 블랙홀은 공격 반사 상태의 적을 공격해도 피해를 입지 않는다.\n몬스터를 들고 있는 상태에서 ↓+ [싸이킥 그랩]을 입력해서도 사용할 수 있다.\n\n싸이킥 포인트 3칸 소비, 들고 있던 적과 전방에 있는 최대 8명의 적을 1210%의 데미지로 6번 공격, 보스 몬스터에게 스킬 적중 시 싸이킥 포인트 1칸 충전\n\n마이크로 블랙홀 : 일정 시간마다 최대 8명의 적을 1070%의 데미지로 3번 공격하는 블랙홀이 4번 발동, 스킬 적중 시 싸이킥 포인트 1칸 충전";
            break;
        case 3:
            rep = "물체가 서로를 끌어당기는 만유인력의 법칙을 극대화한다.\n최대 HP가 가장 높은 적을 목표로 공격하고 디버프를 부여한다. 디버프가 있는 적이 주변 적이나 물체를 서로 끌어당겨 공격하며 당겨진 적이나 물체가 많아질수록 간격이 감소하고 위력이 증가한다.\n\n디버프가 있는 적 아래로 당겨질 수 있는 발판이 있어야 당겨지고 날아다니는 적에게 디버프가 걸렸다면 적을 당기지 않는다.\n디버프가 있는 적이 사라지면 중력구가 나타나 대신 법칙을 실현한다. 로 오브 그라비티의 처음 공격을 제외한 모든 공격은 공격 반사 상태의 적을 공격해도 피해를 입지 않고 스킬을 재사용하면 디버프 혹은 중력구를 즉시 종료시킬 수 있다.\n\n싸이킥 포인트 5칸 소비, 1명의 적을 440%의 데미지로 6번 공격 후 해당 적에게 22초 동안 디버프 부여\n\n일정 간격마다 최대 6명의 적을 1100%의 데미지로 8번 공격하며 끌어당기고 현재까지 당겨진 적의 수에 비례해 공격 간격 최대 3배까지 감소 및 공격의 최종 데미지 40%까지 증가, 당겨질 적이 없을 경우 물체가 대신 끌어당겨지고 최대 공격 가능한 적과 동일한 수의 적을 당긴 것으로 취급\n\n종료 시 폭발하여 최대 10명의 적을 1320%의 데미지로 15번 공격\n\n재사용 대기시간 : 60초";
            break;
        case 5:
            rep = "전방에 있는 다수의 적을 밀쳐내며, 적에게 어긋난 염동력의 힘을 심어 피해를 입힌다. 일부 몬스터는 저항하여 밀리지 않는다.\n\n4명의 적을 밀어냄, 30초 동안 20%의 도트 데미지, 도트 데미지는 초당 10%씩 최종 데미지 증폭되고 최대 200%까지 증폭\n재사용 대기시간 1초\n\n[패시브 효과 : 마력 10 증가]\n[스킬 사용 시 싸이킥 포인트 1칸 충전]";
            break;
        case 10:
            rep = "전방에 있는 다수의 적을 밀쳐내거나 ↓ 방향키와 함께 사용하여 끌어내리며, 적에게 어긋난 염동력의 힘을 심어 지속적인 피해를 입힌다. 일부 몬스터는 저항하여 밀리거나 끌려오지 않는다.\n\n6명의 적을 밀어냄, 30초 동안 40%의 도트 데미지, 도트 데미지는 초당 25%씩 최종 데미지 증폭되고 최대 400%까지 증폭\n재사용 대기시간 1초\n\n[패시브 효과 : 마력 10 증가]\n[스킬 사용 시 싸이킥 포인트 1칸 충전]";
            break;
        case 12:
            rep = "염동력으로 들어올린 거대한 바위를 전방에 초고속으로 충돌시켜 모든 것을 분해한다. 충돌한 적의 모든 버프를 해제하며 버프가 해제된 적은 120초 동안 키네시스의 버프 해제에 대해 내성을 갖는다. 얼티메이트-딥 임팩트는 공격 반사 상태의 적을 공격해도 피해를 입지 않는다.\n\n싸이킥 포인트 5칸 소비, 최대 4명의 적을 170%의 데미지로 7번 공격, 피격된 대상에게 적용된 모든 버프 해제\n[얼티메이트-메테리얼]의 데미지가 130%p만큼 증가";
            break;
        case 16:
            rep = "염동력의 힘으로 전방의 몬스터나 사물을 들어 올린다. 보스 몬스터 및 고정형 몬스터나 자신보다 레벨이 11레벨 이상 높은 적은 들어올릴 수 없다. 그랩이 유지된 상태에서 추가 조작을 통해 다음의 행동이 가능하다.\n\n[싸이킥 스매싱] : 몬스터를 들고 있는 상태에서 [싸이킥 그랩] 스킬을 재사용 시 들고있는 적을 전방에 내리꽂아 주변 적을 타격한다.\n\n3명의 적을 들어 올려 염동력의 힘으로 지배한다.\n[싸이킥 스매싱] : 그랩하고 있는 적을 포함 최대 8명의 적을 340%의 데미지로 3번 공격, 스킬 사용 시 싸이킥 포인트 1칸 충전";
            break;
        case 17:
            rep = "싸이킥 포스의 최종 형태. 전방에 있는 다수의 적을 밀쳐내거나 ↓방향키와 함께 사용하여 끌어내리며, 적에게 어긋난 염동력의 힘을 실어 지속적인 피해를 입힌다. 일부 몬스터는 저항하여 밀리거나 끌려오지 않는다.\n\n8명의 적을 밀어냄, 30초 동안 75%의 도트 데미지, 도트 데미지는 초당 50%씩 최종 데미지 증폭되고 최대 700%까지 증폭\n재사용 대기시간 1초\n\n[패시브 효과 : 마력 10 증가]\n[스킬 사용 시 싸이킥 포인트 1칸 충전]";
            break;
        case 18:
            rep = "싸이킥 포스를 응용하여 염동력이 회오리치는 싸이킥 영역을 생성한다. ↑+[싸이킥 포스]로 시전이 가능하다. 영역이 생성되는 당시 범위 내의 몬스터의 수에 따라 몬스터의 방어력과 이동속도를 감소시키고 싸이킥 공격의 데미지를 증가시킨다.\n\n영역 내 최대 5명의 적의 이동속도 감소, 10%만큼 키네시스의 공격에 해당 적의 방어율 감소 및 받는 최종 데미지 증가\n영역 내에서 효과를 받는 몬스터 수의 두 배만큼 방어율 감소량과 최종 데미지 증폭량이 증가\n30초 동안 지속, 영역에 들어왔다가 나간 적에게도 영역의 남은 지속 시간만큼 디버프 적용\n\n[스킬 사용 시 싸이킥 포인트 1칸 충전]\n재사용 대기시간 : 30초";
            break;
        case 19:
            rep = "무인의 기차를 들어올려 자신의 전방에 고속으로 연속 충돌시킨다. 얼티메이트-트레인은 공격 반사 상태의 적을 공격해도 피해를 입지 않는다.\n\n싸이킥 포인트 15칸 소비, 최대 5명의 적에게 120% 데미지로 6번 공격하며 12초 동안 지속, 공격이 지속될 때마다 얼티메이트-트레인의 데미지 5%씩 감소\n\n[얼티메이트-메테리얼]의 데미지가 140%p만큼 증가\n[얼티메이트-딥 임팩트]의 데미지가 100%p만큼 증가";
            break;
        case 27:
            rep = "더욱 강력한 염동력의 힘으로 전방에 몬스터나 사물을 들어올린다. 보스 몬스터 및 고정형 몬스터나 자신보다 레벨이 11레벨 이상 높은 적은 들어올릴 수 없다. 그랩이 유지된 상태에서 추가 조작을 통해 다음의 행동이 가능하다. 공격에 적중한 적들은 일정 시간 방어율이 감소한다. 방어율 감소 효과는 얼티메이트-메테리얼 및 얼티메이트-싸이킥 샷에 의한 효과와 중첩되지 않는다.\n\n[싸이킥 스매싱] : 몬스터를 들고 있는 상태에서 [싸이킥 그랩] 스킬을 재사용 시 들고있는 적을 전방에 내리꽂아 주변 적을 타격한다.\n[얼티메이트-싸이킥 샷] : 몬스터를 들고 있는 상태에서 ↑+[싸이킥 그랩]을 입력 시 몬스터를 바라보고 있는 방향으로 강하게 집어 던진다.\n\n5명의 적을 들어 올려 염동력의 힘으로 지배한다.\n[싸이킥 스매싱] : 그랩하고 있는 적을 포함 최대 8명의 적을 470%의 데미지로 5번 공격, 스킬 사용 시 싸이킥 포인트 1칸 충전, 공격을 받은 적은 30초 동안 방어율 15% 감소";
            break;
        case 29:
            rep = "시간의 간격보다 빠른 속도로 압축된 염동력을 전방에 쏟아낸다. 얼티메이트-B.P.M은 공격 반사 상태의 적을 공격해도 피해를 입지 않는다.\n\n3명의 적에게 175% 데미지로 7번 공격, 1회 발동시 싸이킥 포인트 1칸 소비. 온오프 스킬\n재사용 대기시간 : 0.5초\n\n[얼티메이트-메테리얼]의 데미지가 310%p만큼 증가\n[얼티메이트-딥 임팩트]의 데미지가 270%p만큼 증가\n[얼티메이트-트레인]의 데미지가 100%p만큼 증가";
            break;
        case 30:
            rep = "더욱 강력하고 넓은 싸이킥 영역을 생성한다. 생성 시 1회에 한해 적을 끌어 당긴다. ↑+[싸이킥 포스]로 시전이 가능하다. 영역이 생성되는 당시 범위 내의 몬스터에 수에 따라 몬스터의 방어력과 이동속도를 감소시키고 싸이킥 공격의 데미지를 증가시킨다.\n\n최초 1회 5명의 적에게 500% 데미지로 1번 공격\n영역 내 적에게 10% 만큼의 이동속도 감소 및 키네시스의 공격에 해당 적의 방어율 무시와 받는 최종 데미지 증가 디버프 부여\n영역 내에서 효과를 받는 몬스터 수마다 이동속도 감소 효과 6%씩 증가하여 최대 40%까지 증가\n영역 내에서 효과를 받는 몬스터 수의 세 배만큼 방어율 감소량과 최종 데미지 증폭량 증가\n30초 동안 지속, 영역에 들어왔다가 나간 적에게도 영역의 남은 지속 시간만큼 디버프 적용\n\n[스킬 사용 시 싸이킥 포인트 1칸 충전]\n재사용 대기시간 : 30초";
            break;
        case 31:
            rep = "정신 파동을 일으켜 순간적으로 적들의 정신을 붕괴시킨다. 정신 파동과 공명하여 일정 시간 자신의 데미지가 증가한다.\n\n최대 15명의 적을 1000% 데미지로 4번 공격\n45초 동안 공격을 받은 적 1명당 최종 데미지가 2% 증가하여 최대 15%까지 증가, 보스 몬스터는 5명으로 취급\n\n[스킬 사용 시 싸이킥 포인트 1칸 충전]\n재사용 대기시간 : 30초";
            break;
        case 39:
            rep = "폭주하는 염동력을 일순간에 해방시켜 모든 물질에 간섭한다.\n\n최대 15명의 적에게 400%의 데미지로 최대 16번 공격 후 1500%의 데미지로 마무리 일격, 마무리 일격은 반드시 크리티컬이 발동하며 방어율 50% 추가 무시\n시전 즉시 싸이킥 포인트가 최대치까지 증가하고 시전 동작 중 무적\n\n재사용 대기시간 : 120초";
            break;
        case 40:
            rep = "적의 기억을 더듬어 거친 충격과 함께 가장 고통스러운 순간 속에 머물게 한다. 일정 시간 적을 행동 불가 상태로 만든다.\n공격을 받은 적은 90초 동안 행동 불가 상태 이상에 저항하여 싸이코 메트리 및 다른 스킬로 인한 행동 불가 상태 이상에 걸리지 않는다.\n\n최대 15명의 적에게 1800%의 데미지로 1번 공격. 공격 당한 적은 10초 간 행동 불가.\n싸이코 메트리로 적에게 준 데미지에 따라 행동 불가 지속시간 최대 100% 증가\n\n재사용 대기시간: 180초";
            break;
        case 41:
            rep = "";
            break;
    }
    return rep;
};
skk.getskillimage1Kinesis = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "https://i.imgur.com/ogIw8FH.png";
            break;
        case 1:
            rep = "https://i.imgur.com/hlZI3fg.png";
            break;
        case 2:
            rep = "https://i.imgur.com/t2SueQn.png";
            break;
        case 3:
            rep = "https://i.imgur.com/v16PMLI.png";
            break;
        case 4:
            rep = "";
            break;
        case 5:
            rep = "https://i.imgur.com/nThIx2Q.png";
            break;
        case 6:
            rep = "https://i.imgur.com/TccnBYG.png";
            break;
        case 7:
            rep = "https://i.imgur.com/7gymyqd.png";
            break;
        case 8:
            rep = "";
            break;
        case 9:
            rep = "https://i.imgur.com/la6iM4d.png";
            break;
        case 10:
            rep = "https://i.imgur.com/MiRHf0A.png";
            break;
        case 11:
            rep = "https://i.imgur.com/n1a2r0E.png";
            break;
        case 12:
            rep = "https://i.imgur.com/BkgdDbe.png";
            break;
        case 13:
            rep = "https://i.imgur.com/kDpnLhC.png";
            break;
        case 14:
            rep = "";
            break;
        case 15:
            rep = "";
            break;
        case 16:
            rep = "https://i.imgur.com/k95iWyO.png";
            break;
        case 17:
            rep = "https://i.imgur.com/qp111p6.png";
            break;
        case 18:
            rep = "https://i.imgur.com/f1rehCv.png";
            break;
        case 19:
            rep = "https://i.imgur.com/SUOYDe0.png";
            break;
        case 20:
            rep = "https://i.imgur.com/c92A11w.png";
            break;
        case 21:
            rep = "https://i.imgur.com/T174Rio.png";
            break;
        case 22:
            rep = "https://i.imgur.com/ys37XN9.png";
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
            rep = "https://i.imgur.com/tDaiC9N.png";
            break;
        case 28:
            rep = "https://i.imgur.com/RcDKxUM.png";
            break;
        case 29:
            rep = "https://i.imgur.com/bPF46Zl.png";
            break;
        case 30:
            rep = "https://i.imgur.com/Q9bTjzH.png";
            break;
        case 31:
            rep = "https://i.imgur.com/h0ED2pn.png";
            break;
        case 32:
            rep = "https://i.imgur.com/DRhTWGh.png";
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
        case 38:
            rep = "";
            break;
        case 39:
            rep = "https://i.imgur.com/fcffvt4.png";
            break;
        case 40:
            rep = "https://i.imgur.com/2RowbVB.png";
            break;
        case 41:
            rep = "https://i.imgur.com/QpXBxZs.png";
            break;
        case 42:
            rep = "";
            break;
        case 43:
            rep = "";
            break;
    }
    return rep;
};
skk.getskillimage2Kinesis = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "https://i.imgur.com/Q560Du4.png";
            break;
        case 1:
            rep = "https://i.imgur.com/6RsCUmR.png";
            break;
        case 2:
            rep = "https://i.imgur.com/mbs1xCG.png";
            break;
        case 3:
            rep = "https://i.imgur.com/6unGzVj.png";
            break;
        case 4:
            rep = "https://i.imgur.com/VV6Zq26.png";
            break;
        case 5:
            rep = "https://i.imgur.com/oi1Z20S.png";
            break;
        case 6:
            rep = "https://i.imgur.com/BbNTLk0.png";
            break;
        case 7:
            rep = "https://i.imgur.com/bu4ce8b.png";
            break;
        case 8:
            rep = "https://i.imgur.com/yZUrReH.png";
            break;
        case 9:
            rep = "https://i.imgur.com/9rkragw.png";
            break;
        case 10:
            rep = "https://i.imgur.com/AsJqgST.png";
            break;
        case 11:
            rep = "https://i.imgur.com/BCZsdvW.png";
            break;
        case 12:
            rep = "https://i.imgur.com/3CyCIHI.png";
            break;
        case 13:
            rep = "https://i.imgur.com/e7VHFtj.png";
            break;
        case 14:
            rep = "https://i.imgur.com/BU6nhHf.png";
            break;
        case 15:
            rep = "https://i.imgur.com/38emiKk.png";
            break;
        case 16:
            rep = "https://i.imgur.com/iO3f8Mb.png";
            break;
        case 17:
            rep = "https://i.imgur.com/DMFhE8p.png";
            break;
        case 18:
            rep = "https://i.imgur.com/oiG9nuQ.png";
            break;
        case 19:
            rep = "https://i.imgur.com/ksMGrxL.png";
            break;
        case 20:
            rep = "https://i.imgur.com/6F0D1au.png";
            break;
        case 21:
            rep = "https://i.imgur.com/KNxExh1.png";
            break;
        case 22:
            rep = "https://i.imgur.com/MYqnPNS.png";
            break;
        case 23:
            rep = "https://i.imgur.com/uYmMACe.png";
            break;
        case 24:
            rep = "https://i.imgur.com/yTZmm6X.png";
            break;
        case 25:
            rep = "https://i.imgur.com/A02J5UG.png";
            break;
        case 26:
            rep = "https://i.imgur.com/EHij4E8.png";
            break;
        case 27:
            rep = "https://i.imgur.com/lIFu0Ie.png";
            break;
        case 28:
            rep = "https://i.imgur.com/Q9BiJoH.png";
            break;
        case 29:
            rep = "https://i.imgur.com/GCmidWF.png";
            break;
        case 30:
            rep = "https://i.imgur.com/3J02ha9.png";
            break;
        case 31:
            rep = "https://i.imgur.com/jPA2MGY.png";
            break;
        case 32:
            rep = "https://i.imgur.com/cljJyis.png";
            break;
        case 33:
            rep = "https://i.imgur.com/zC1QnOl.png";
            break;
        case 34:
            rep = "https://i.imgur.com/s864rzb.png";
            break;
        case 35:
            rep = "https://i.imgur.com/Uxv7xfb.png";
            break;
        case 36:
            rep = "https://i.imgur.com/jn2yApE.png";
            break;
        case 37:
            rep = "https://i.imgur.com/qeZNwmT.png";
            break;
        case 38:
            rep = "https://i.imgur.com/Em1J8xA.png";
            break;
        case 39:
            rep = "https://i.imgur.com/g9PvzHy.png";
            break;
        case 40:
            rep = "https://i.imgur.com/QJaLKIM.png";
            break;
        case 41:
            rep = "https://i.imgur.com/rkKOKeo.png";
            break;
        case 42:
            rep = "";
            break;
        case 43:
            rep = "";
            break;
    }
    return rep;
};

module.exports = skk;