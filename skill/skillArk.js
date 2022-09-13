const ska = {};

ska.getskillArk = function (skillname){
    var aret = -1;
    switch(skillname){
        case "근원의 기억":
        case "근원의기억":
        case "근원":
        case "근기":
            aret = 0;
            break;
        case "인피니티 스펠":
        case "인피니티스펠":
        case "인스":
        case "인피니티":
            aret = 1;
            break;
        case "새어 나오는 악몽":
        case "새어나오는 악몽":
        case "새어나오는악몽":
        case "새나악":
            aret = 2;
            break;
        case "새어 나오는 흉몽":
        case "새어나오는 흉몽":
        case "새어나오는흉몽":
        case "새나흉":
            aret = 3;
            break;
        case "영원히 굶주리는 짐승":
        case "영원히굶주리는 짐승":
        case "영원히굶주리는짐승":
        case "영굶짐":
            aret = 4;
            break;
        case "컨택트 카라반":
        case "컨택트카라반":
        case "컨택트":
        case "카라반":
            aret = 5;
            break;
        case "매직 서킷":
        case "매직서킷":
        case "서킷":
            aret = 6;
            break;
        case "스펙터 잠식":
        case "스펙터잠식":
        case "잠식":
            aret = 7;
            break;
        case "정신력 고갈":
        case "정신력고갈":
        case "고갈":
            aret = 8;
            break;
        case "잊혀지지 않는 악몽":
        case "잊혀지지않는 악몽":
        case "잊혀지지않는악몽":
        case "잊않악":
        case "잊악몽":
        case "잊악":
            aret = 9;
            break;
        case "잊혀지지 않는 흉몽":
        case "잊혀지지않는 흉몽":
        case "잊혀지지않는흉몽":
        case "잊않흉":
        case "잊흉":
            aret = 10;
            break;
        case "플레인 차지드라이브":
        case "플레인차지드라이브":
        case "플레인":
        case "플차드":
        case "플차":
            aret = 11;
            break;
        case "스펠 불릿":
        case "스펠불릿":
        case "불릿":
            aret = 12;
            break;
        case "미스틱 리프":
        case "미스틱리프":
        case "리프":
        case "더블 점프":
        case "더블점프":
        case "윗점":
            aret = 13;
            break;
        case "인스팅트 리프":
        case "인스팅트리프":
        case "체공":
        case "근두운":
            aret = 14;
            break;
        case "미스틱 아츠 마스터리":
        case "미스틱아츠 마스터리":
        case "미스틱아츠마스터리":
            aret = 15;
            break;
        case "잠식 제어":
        case "잠식제어":
            aret = 16;
            break;
        case "스칼렛 차지드라이브":
        case "스칼렛차지드라이브":
        case "스칼렛":
        case "스차드":
        case "스차":
            aret = 17;
            break;
        case "지워지지 않는 상처":
        case "지워지지않는 상처":
        case "지워지지않는상처":
        case "지않상":
        case "지상":
        case "상처":
            aret = 18;
            break;
        case "멈출 수 없는 충동":
        case "멈출수 없는 충동":
        case "멈출수없는 충동":
        case "멈출수없는충동":
        case "멈없충":
        case "멈충":
        case "충동":
            aret = 19;
            break;
        case "멈출 수 없는 본능":
        case "멈출수 없는 본능":
        case "멈출수없는 본능":
        case "멈출수없는본능":
        case "멈없본":
        case "멈본":
        case "본능":
            aret = 20;
            break;
        case "다가오는 죽음":
        case "다가오는죽음":
        case "다죽":
        case "죽음":
            aret = 21;
            break;
        case "융합 개시":
        case "융합개시":
        case "개시":
            aret = 22;
            break;
        case "되살아나는 악몽":
        case "되살아나는악몽":
        case "되악":
            aret = 23;
            break;
        case "되살아나는 흉몽":
        case "되살아나는흉몽":
        case "되흉":
            aret = 24;
            break;
        case "거스트 차지드라이브":
        case "거스트차지드라이브":
        case "거스트":
        case "거차드":
        case "거차":
            aret = 25;
            break;
        case "채워지지 않는 굶주림":
        case "채워지지않는 굶주림":
        case "채워지지않는굶주림":
        case "채않굶":
        case "채굶":
            aret = 26;
            break;
        case "기어 다니는 공포":
        case "기어다니는 공포":
        case "기어다니는공포":
        case "기다공":
        case "기공":
            aret = 27;
            break;
        case "돌아오는 증오":
        case "돌아오는증오":
        case "돌증":
        case "증오":
            aret = 28;
            break;
        case "미스틱 아츠 트레이닝":
        case "미스틱아츠 트레이닝":
        case "미스틱아츠트레이닝":
            aret = 29;
            break;
        case "인스팅트 아츠 트레이닝":
        case "인스팅트아츠 트레이닝":
        case "인스팅트아츠트레이닝":
            aret = 30;
            break;
        case "융합 진행":
        case "융합진행":
        case "진행":
            aret = 31;
            break;
        case "끝나지 않는 악몽":
        case "끝나지않는 악몽":
        case "끝나지않는악몽":
        case "끝않악":
        case "끝악":
        case "악몽":
            aret = 32;
            break;
        case "끝나지 않는 흉몽":
        case "끝나지않는 흉몽":
        case "끝나지않는흉몽":
        case "끝않흉":
        case "끝흉":
        case "흉몽":
            aret = 33;
            break;
        case "어비스 차지드라이브":
        case "어비스차지드라이브":
        case "어비스":
        case "어차드":
        case "어차":
            aret = 34;
            break;
        case "걷잡을 수 없는 혼돈":
        case "걷잡을수 없는 혼돈":
        case "걷잡을수없는 혼돈":
        case "걷잡을수없는혼돈":
        case "걷없혼":
        case "걷혼":
        case "혼돈":
            aret = 35;
            break;
        case "황홀한 구속":
        case "황홀한구속":
        case "황구":
        case "구속":
        case "바인드":
            aret = 36;
            break;
        case "어드밴스드 미스틱 아츠":
        case "어드밴스드 미스틱아츠":
        case "어드밴스드미스틱아츠":
            aret = 37;
            break;
        case "어드밴스드 인스팅트 아츠":
        case "어드밴스드 인스팅트아츠":
        case "어드밴스드인스팅트아츠":
            aret = 38;
            break;
        case "융합 완성":
        case "융합완성":
        case "완성":
            aret = 39;
            break;
        case "전투 광란":
        case "전투광란":
        case "광란":
            aret = 40;
            break;
        case "차지 스펠 앰플리피케이션":
        case "차지스펠 앰플리피케이션":
        case "차지스펠앰플리피케이션":
        case "차지스펠앰플":
        case "차스앰":
            aret = 41;
            break;
        case "끝없는 고통":
        case "끝없는고통":
        case "끝없는고통레쓰고":
        case "끝고":
        case "고통":
        case "레쓰고":
            aret = 42;
            break;
    }
    return aret;
};
ska.getskillnameArk = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "근원의 기억";
            break;
        case 1:
            rep = "인피니티 스펠";
            break;
        case 2:
            rep = "새어 나오는 악몽";
            break;
        case 3:
            rep = "새어 나오는 흉몽";
            break;
        case 4:
            rep = "영원히 굶주리는 짐승";
            break;
        case 5:
            rep = "컨택트 카라반";
            break;
        case 6:
            rep = "매직 서킷";
            break;
        case 7:
            rep = "스펙터 잠식";
            break;
        case 8:
            rep = "정신력 고갈";
            break;
        case 9:
            rep = "잊혀지지 않는 악몽";
            break;
        case 10:
            rep = "잊혀지지 않는 흉몽";
            break;
        case 11:
            rep = "플레인 차지드라이브";
            break;
        case 12:
            rep = "스펠 불릿";
            break;
        case 13:
            rep = "미스틱 리프";
            break;
        case 14:
            rep = "인스팅트 리프";
            break;
        case 15:
            rep = "미스틱 아츠 마스터리";
            break;
        case 16:
            rep = "잠식 제어";
            break;
        case 17:
            rep = "스칼렛 차지드라이브";
            break;
        case 18:
            rep = "지워지지 않는 상처";
            break;
        case 19:
            rep = "멈출 수 없는 충동";
            break;
        case 20:
            rep = "멈출 수 없는 본능";
            break;
        case 21:
            rep = "다가오는 죽음";
            break;
        case 22:
            rep = "융합 개시";
            break;
        case 23:
            rep = "되살아나는 악몽";
            break;
        case 24:
            rep = "되살아나는 흉몽";
            break;
        case 25:
            rep = "거스트 차지드라이브";
            break;
        case 26:
            rep = "채워지지 않는 굶주림";
            break;
        case 27:
            rep = "기어 다니는 공포";
            break;
        case 28:
            rep = "돌아오는 증오";
            break;
        case 29:
            rep = "미스틱 아츠 트레이닝";
            break;
        case 30:
            rep = "인스팅트 아츠 트레이닝";
            break;
        case 31:
            rep = "융합 진행";
            break;
        case 32:
            rep = "끝나지 않는 악몽";
            break;
        case 33:
            rep = "끝나지 않는 흉몽";
            break;
        case 34:
            rep = "어비스 차지드라이브";
            break;
        case 35:
            rep = "걷잡을 수 없는 혼돈";
            break;
        case 36:
            rep = "황홀한 구속";
            break;
        case 37:
            rep = "어드밴스드 미스틱 아츠";
            break;
        case 38:
            rep = "어드밴스드 인스팅트 아츠";
            break;
        case 39:
            rep = "융합 완성";
            break;
        case 40:
            rep = "전투 광란";
            break;
        case 41:
            rep = "차지 스펠 앰플리피케이션";
            break;
        case 42:
            rep = "끝없는 고통";
            break;
    }
    return rep;
};
ska.getskilldesc1Ark = function (skillcode){
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
            rep = "하단 참조";
            break;
        case 5:
            rep = "하단 참조";
            break;
        case 6:
            rep = "무기를 제외한 착용 중인 장비의 마력 중 25%를 공격력으로 전환";
            break;
        case 7:
            rep = "하단 참조";
            break;
        case 8:
            rep = "스펙터 잠식 상태를 과도하게 사용하여 정신력이 고갈되었다.";
            break;
        case 9:
            rep = "90%의 데미지로 최대 6명의 적을 6번 공격";
            break;
        case 10:
            rep = "120%의 데미지로 최대 6명의 적을 6번 공격";
            break;
        case 11:
            rep = "하단 참조";
            break;
        case 12:
            rep = "하단 참조";
            break;
        case 13:
            rep = "MP 10 소비, 일정 거리 점프";
            break;
        case 14:
            rep = "부유 커맨드 잠금 : 마우스 우클릭";
            break;
        case 15:
            rep = "공격력 20, 이동속도 25, 최대 이동속도 25";
            break;
        case 16:
            rep = "스펙터 잠식 상태 변환 / 재사용 대기시간 3초";
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
            rep = "하단 참조";
            break;
        case 21:
            rep = "공격 시 190%, 2번 공격 심연의 기운 최대 6개 발생";
            break;
        case 22:
            rep = "최대 HP 20%, 최대 MP 20%";
            break;
        case 23:
            rep = "HP 50 소비, 270%의 데미지로 6명의 적을 6번 공격";
            break;
        case 24:
            rep = "280%의 데미지로 최대 6명의 적을 6번 공격";
            break;
        case 25:
            rep = "하단 참조";
            break;
        case 26:
            rep = "하단 참조";
            break;
        case 27:
            rep = "하단 참조";
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
            rep = "최종 데미지 5%, 크리티컬 확률 20%";
            break;
        case 32:
            rep = "HP 85 소비, 440%의 데미지로 최대 6명의 적을 6번 공격";
            break;
        case 33:
            rep = "445%의 데미지로 최대 6명의 적을 6번 공격";
            break;
        case 34:
            rep = "하단 참조";
            break;
        case 35:
            rep = "하단 참조";
            break;
        case 36:
            rep = "하단 참조";
            break;
        case 37:
            rep = "하단 참조";
            break;
        case 38:
            rep = "하단 참조";
            break;
        case 39:
            rep = "공격력 40, 크리티컬 확률 10%, 방어율 무시 30%, 보공 30%";
            break;
        case 40:
            rep = "하단 참조";
            break;
        case 41:
            rep = "하단 참조";
            break;
        case 42:
            rep = "하단 참조";
            break;
    }
    return rep;
};
ska.getskilldesc2Ark = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "광범위 공격기이자 무적기";
            break;
        case 1:
            rep = "스펠 불릿을 강화하는 액티브 버프";
            break;
        case 2:
            rep = "끝나지 않는 악몽을 일정 주기로 강화하는 패시브";
            break;
        case 3:
            rep = "끝나지 않는 흉몽을 일정 주기로 강화하는 패시브";
            break;
        case 4:
            rep = "설치형 극딜기";
            break;
        case 5:
            rep = "홈타운 귀환이 없다";
            break;
        case 6:
            rep = "무기 순수 공격력의 10%까지 전환 가능.";
            break;
        case 7:
            rep = "2차 전까지 제어 불가";
            break;
        case 8:
            rep = "잠시 정신력이 회복되지 않는다. (18초)";
            break;
        case 9:
            rep = "재사용 대기시간 2초";
            break;
        case 10:
            rep = "공격 적중 시 최대 HP의 1% 회복 / 쿨없음";
            break;
        case 11:
            rep = "사거리가 짧다";
            break;
        case 12:
            rep = "자동모드 사용시 A표시";
            break;
        case 13:
            rep = "위 방향키와 함께 사용해 위 방향으로도 이동할 수 있다.";
            break;
        case 14:
            rep = "공중에서 아래 방향키와 함께 키다운으로 사용하면 부유가능";
            break;
        case 15:
            rep = "점프력 20, 스탠스 확률 50%, 방어력 250 증가";
            break;
        case 16:
            rep = "스펙터 전용 스킬과 미스틱 아츠는 쿨타임을 공유하지 않는다.";
            break;
        case 17:
            rep = "공중에서 사용 시 텔레포트 판정";
            break;
        case 18:
            rep = "스칼렛과 동일하게 텔포판정";
            break;
        case 19:
            rep = "대각선 방향 이동기";
            break;
        case 20:
            rep = "대각선 방향 이동기";
            break;
        case 21:
            rep = "온오프 스킬, 주변 적 숫자에 비례";
            break;
        case 22:
            rep = "피격 데미지 30% 감소";
            break;
        case 23:
            rep = "재사용 대기시간 2초";
            break;
        case 24:
            rep = "공격 적중 시 최대 HP의 1% 회복 / 쿨없음";
            break;
        case 25:
            rep = "대각선 강하형 공격기";
            break;
        case 26:
            rep = "광범위 공격기";
            break;
        case 27:
            rep = "스펙터 강제 변신, 무적기";
            break;
        case 28:
            rep = "회수형 보조 공격기";
            break;
        case 29:
            rep = "3차 이전 미스틱 아츠 강화";
            break;
        case 30:
            rep = "3차 이전 인스팅트 아츠 강화";
            break;
        case 31:
            rep = "상태 이상 내성 40, 모든 속성 내성 16% 증가";
            break;
        case 32:
            rep = "재사용 대기시간 2초";
            break;
        case 33:
            rep = "공격 적중 시 최대 HP의 1% 회복 / 쿨없음";
            break;
        case 34:
            rep = "방향키 연계가 없음";
            break;
        case 35:
            rep = "포물선을 그리며 뛰어오름";
            break;
        case 36:
            rep = "스펙터 강제 변신 바인드 극딜기";
            break;
        case 37:
            rep = "-";
            break;
        case 38:
            rep = "-";
            break;
        case 39:
            rep = "피격 데미지 20% 감소, 스탠스 50% 증가";
            break;
        case 40:
            rep = "연계 보조 패시브";
            break;
        case 41:
            rep = "스펠 버프 파티원과 공유";
            break;
        case 42:
            rep = "스펙터 강제 변신 키다운형 극딜기";
            break;
    }
    return rep;
};
ska.getskilldesc3Ark = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "심연의 근원으로 이어진 통로를 열어 그 곳을 통과했을 때의 기억을 되살린다.\n스킬 사용 시 스펙터 잠식 상태가 되고 스킬 사용 도중 정신력을 소모하지 않지만 정신력이 고갈된 상태에서는 사용할 수 없다.\n스킬 시전 중 스킬을 다시 사용하여 공격을 즉시 종료할 수 있다. 근원의 기억은 공격 무시 및 공격 반사 상태의 적에게도 피해를 입힐 수 있지만 다가오는 죽음이 발생하지 않는다.\n\n시전 즉시 심연의 근원과 연결되어 스펙터 잠식 상태에서도 정신력이 18초 동안 소모되지 않음\n심연의 통로가 열린 동안 일정 간격으로 최대 10명의 적을 480%의 데미지로 6번 공격, 공격 중 무적\n공격 종료 시 최대 15명의 적을 1584%의 데미지로 12번 공격하는 폭발이 6번 발생\n\n재사용 대기시간 120초";
            break;
        case 1:
            rep = "생명력을 대가로 무한한 마력을 얻는다. 인피니티 스펠로 추가 생성된 심연의 기운은 공격한 대상 중 최대 HP가 높은 보스 몬스터를 우선 추적한다.\n\n최대 HP의 8% 소비\n50초 동안 지속\n레프 상태 : 스펠이 차지될 때 플레인 스펠이 남은 최대 스펠 차지 제한 만큼 차지\n스펙터 잠식 상태 : 다가오는 죽음 발동 시 심연의 기운 3개 추가 생성\n\n재사용 대기시간 120초";
            break;
        case 2:
            rep = "전투에 집중한 사이 새어나온 스펙터의 기운이 적들을 덮친다. 스펙터 잠식 상태에선 새어 나오는 흉몽으로 강화된다.\n공격 반사 상태의 적을 공격해도 피해를 입지 않는다.\n\n끝나지 않는 악몽 사용 시 최대 10명의 적을 1100%의 데미지로 9번 공격하는 스펙터의 기운 발동\n\n재발동 대기시간 10초\n플레인 차지드라이브를 제외한 차지드라이브류 스킬 적중 시 재발동 대기시간 1초 감소, 스킬 당 1회만 적용";
            break;
        case 3:
            rep = "전투에 집중한 사이 새어 나온 스펙터의 기운이 적들을 덮친다. 레프 상태에서는 새어 나오는 악몽으로 변경된다.\n공격 반사 상태의 적을 공격해도 피해를 입지 않는다.\n\n끝나지 않는 흉몽 사용 시 최대 12명의 적을 1320%의 데미지로 9번 공격하는 스펙터의 기운 발동\n\n재발동 대기시간 10초\n지워지지 않는 상처/멈출 수 없는 본능/채워지지 않는 굶주림/심연의 공포/걷잡을 수 없는 혼돈 적중 시 재발동 대기시간 1초 감소, 스킬 당 1회만 적용";
            break;
        case 4:
            rep = "심연의 깊은 곳과 연결된 통로를 뚫어 모든 것을 먹어 치우는 굶주린 짐승을 불러낸다. 짐승은 통로가 열린 후 일정 시간이 지나야 출현하며 스펙터의 힘을 사용하는 공격 스킬을 적중시키면 좀 더 빨리 출현시킬 수 있다. 영원히 굶주리는 짐승은 공격 무시 및 공격 반사 상태의 적에게도 피해를 입힐 수 있다.\n\nHP 500 소비, 사용 후 일정 시간 뒤 최대 12명의 적을 880%의 데미지로 12번 공격하는 충격이 20번 발동\n스펙터의 힘을 사용하는 공격 스킬 적중 시 0.6초 빠르게 공격 발생, 연타형 및 일부 스킬의 경우 30%만 적용\n\n재사용 대기시간 : 120초";
            break;
        case 5:
            rep = "카라반과 헤어지며 받은 전파장치로 연락을 취한다. 교신한 상대에 따라 다른 버프를 받는다. 버프 지속시간 증가와 재사용 대기시간 초기화의 효과를 받지 않는다.\n\nMP 100 소비, 300초 동안 지속되는 버프 획득\n웨이 : 재사용 대기시간 초기화의 효과를 받지 않는 스킬을 제외한 스킬의 재사용 대기시간이 10% 더 빠르게 감소\n바크바크 : 데미지 8% 증가\n마르 : 경험치 획득량 4% 증가\n니야 : 웨이, 바크바크, 마르의 버프를 절반의 효과로 동시에 적용\n\n재사용 대기시간 : 600초";
            break;
        case 7:
            rep = "신체의 일부가 스펙터화되어 심연과 연결되었다.\n스펙터의 힘을 사용하는 스킬은 강력하지만 일정 횟수 이상 사용하면 강제로 스펙터 잠식 상태가 되며 심연과 연결된 반동으로 영혼이 마모되어 정신력이 빠르게 소모된다.\n소모된 정신력은 레프 상태일 때 서서히 회복된다.\n캐시 장비가 아닌 무기는 장비해도 보이지 않으며 스펙터 잠식 상태에서는 망토가 보이지 않게 된다.\n\n스펙터의 힘을 사용하는 스킬을 일정 횟수 이상 사용 시 스펙터 잠식 상태로 전환\n스펙터 잠식 상태 과용으로 정신력이 고갈될 경우 레프 상태에서도 20초 동안 정신력 회복 정지\n스펙터 잠식 상태 : 스킬 변경 및 강화, 공격력 30, 스탠스 확률 100% 증가";
            break;
        case 11:
            rep = "마력으로 강화시킨 신체를 이용해 공격한다. 공격 적중 시 플레인 스펠이 차지된다.\n모든 스킬로 연계할 수 있고 플레인 차지드라이브에서 연계로 사용한 스킬은 이동하지 않고 제자리에서 사용한다. 단, 연계로 사용했더라도 방향키와 함께 사용하면 이동할 수 있다.\n레프 상태에서만 사용할 수 있다.\n\nMP 16 소비, 100%의 데미지로 최대 6명의 적을 3번 공격\n플레인 스펠 : 스펠 불릿 사용 시 50%의 데미지로 1번 공격하는 플레인 스펠 2개 생성\n플레인 버프 : 플레인 스펠 적중 시 60초 동안 이동속도 20, 스탠스 확률 50% 증가";
            break;
        case 12:
            rep = "차지된 모든 스펠을 사용한다. 플레인 스펠을 제외한 스펠은 1개씩만 차지할 수 있다.\n모든 스펠은 공격 반사 상태의 적을 공격해도 피해를 입지 않는다.\n자동 사용 모드에서는 공격할 때마다 자동으로 스펠 불릿이 사용된다.\n\nMP 10 소비, 차지된 모든 스펠 사용\n한번에 사용한 스펠이 1개보다 많을 때 초과한 스펠의 개수에 비례해 데미지 5%씩 증가\n최대 5개까지 스펠 차지 가능";
            break;
        case 17:
            rep = "화염의 마력을 몸에 깃들게 한 후 전방으로 돌진한다. 마력을 남기고 지나간 궤적에는 불길이 추가로 발생하고 공격 적중 시 스칼렛 스펠이 차지된다.\n스펙터 잠식 상태에서는 지워지지 않는 상처로 변경된다.\n\nMP 25 소비, 80%의 데미지로 최대 6명의 적을 3번 공격\n돌진 후 80%의 데미지로 최대 6명의 적을 3번 공격하는 불길 발생\n재사용 대기시간 3초\n\n스칼렛 스펠 : 스펠 불릿 사용 시 90%의 데미지로 최대 8명의 적을 5번 공격하는 스칼렛 스펠 생성\n스칼렛 버프 : 스칼렛 스펠 적중 시 60초 동안 공격력 30, 크리티컬 확률 20% 증가";
            break;
        case 18:
            rep = "신체를 창으로 변환하여 적을 꿰뚫고 지나간다.\n레프 상태에서는 스칼렛 차지드라이브로 변경된다.\n\n150%의 데미지로 최대 8명의 적을 6번 공격\n공격 적중 시 최대 HP의 2% 회복\n재사용 대기시간 3초";
            break;
        case 19:
            rep = "신체를 칼날로 변형하여 적을 베며 도약한다. 함께 사용한 방향키에 따라 위 혹은 아래로 도약할 수 있다.\n스펙터 잠식 상태에서는 멈출 수 없는 본능으로 변경되며 재사용 대기시간을 공유한다.\n\nHP 70 소비, 110%의 데미지로 최대 6명의 적을 5번 공격, 2회까지 연속 사용 가능\n재사용 대기시간 6초";
            break;
        case 20:
            rep = "신체를 칼날로 변형하여 적을 베며 도약한다. 함께 사용한 방향키에 따라 위 혹은 아래로 도약할 수 있다.\n레프 상태에서는 멈출 수 없는 충동으로 변경되며 재사용 대기시간을 공유한다.\n\n135%의 데미지로 최대 6명의 적을 6번 공격, 2회까지 연속 사용 가능\n재사용 대기시간 6초";
            break;
        case 25:
            rep = "공중에서 질풍의 마력을 몸에 깃들게 한 후 하강하며 공격한다. 공격 적중 시 거스트 스펠이 차지된다.\n스펙터 잠식 상태에서는 채워지지 않는 굶주림으로 변경된다.\n\nMP 40 소비, 205%의 데미지로 최대 6명의 적을 6번 공격\n재사용 대기시간 5초\n\n거스트 스펠 : 스펠 불릿 사용 시 주위의 적을 끌어들인 후 200%의 데미지로 최대 12명의 적을 4번 공격하는 거스트 스펠 생성\n거스트 버프 : 거스트 스펠 적중 시 60초 동안 공격 속도 1단계, 회피율 25% 증가";
            break;
        case 26:
            rep = "심연의 짐승을 불러내 적을 공격한다.\n레프 상태에서는 거스트 차지드라이브로 변경된다.\n\n300%의 데미지로 최대 8명의 적을 7번 공격\n공격 적중 시 최대 HP의 5% 회복\n재사용 대기시간 5초";
            break;
        case 27:
            rep = "심연으로 통하는 통로를 뚫어 적의 공격을 회피한다. 스킬 사용 시 스펙터 잠식 상태가 되고 스킬 사용 도중 정신력을 소모하지 않지만 정신력이 고갈된 상태에서는 사용할 수 없고 재사용 대기시간 초기화의 효과를 받지 않는다.\n스킬 사용 후 키다운을 유지해 일정 시간 상태를 유지하며 이동할 수 있다. 또한 공중에서도 사용 가능하다. 키다운 해제 시 주변의 적을 섬멸하는 심연의 공포가 발생한다.심연의 공포는 공격 무시 및 공격 반사 상태의 적에게도 피해를 입힐 수 있다.\n심연의 공포에서 모든 스킬로 연계할 수 있고 연계로 사용한 스킬은 이동하지 않고 제자리에서 사용한다.\n단 연계로 사용했더라도 방향키와 함께 사용하면 이동할 수 있다.\n\n키다운을 유지하는 동안 0.5초당 최대 HP의 2% 소비, 최대 5초 동안 키다운 유지 가능, 키다운 유지 중 무적\n심연의 공포 : 400%의 데미지로 최대 12명의 적을 15번 공격\n재사용 대기시간 60초";
            break;
        case 28:
            rep = "심연의 기운이 적을 베는 칼날로 형상화된다.\n다가오는 죽음이 적중한 위치에 심연의 징표를 남기고 스킬을 사용했을 때 활성화된 징표와 사용한 위치까지의 궤적을 공격한다.\n스펙터 잠식 상태에서만 사용할 수 있고 공격 반사 상태의 적을 공격해도 피해를 입지 않으며 재사용 대기시간 초기화의 효과를 받지 않는다.\n자동 사용 모드에서는 재사용 대기시간이 아닐 때 자동으로 돌아오는 증오가 사용된다.\n\n다가오는 죽음이 적중했을 때 20%의 확률로 심연의 징표를 남기고 스킬 사용 시 일정 범위 안의 징표를 활성화하여 징표마다 210%의 데미지로 최대 8명의 적을 6번 공격\n징표 최대 생성 제한 12개, 최대 유지 시간 20초, 자동 모드 시 활성화되는 최대 징표 제한 8개\n재사용 대기시간 12초";
            break;
        case 29:
            rep = "수련을 통해 미스틱 아츠를 강화한다.\n\n플레인 차지드라이브의 데미지 260%p, 플레임 스펠의 데미지 160%p, 스칼렛 차지드라이브와 불길의 데미지 100%p, 스칼렛 스펠의 데미지 90%p 증가";
            break;
        case 30:
            rep = "스펙터의 힘과 융합이 진행되어 신체 능력이 더욱 향상된다.\n\n최종 데미지 10%, 크리티컬 확률 20%, 상태 이상 내성 40, 모든 속성 내성 16% 증가";
            break;
        case 34:
            rep = "공격과 동시에 심연의 마력을 분출한다. 공격 적중 시 어비스 스펠이 차지된다. 시전하는 동안에는 적의 어떠한 공격에도 밀려나지 않는다.\n스펙터 잠식 상태에서는 겉잡을 수 없는 혼돈으로 변경된다.\n\nHP 95, MP 65 소비\n340%의 데미지로 최대 8명의 적을 4번 공격, 심연의 마력은 410%의 데미지로 최대 8명의 적을 6번 공격\n재사용 대기시간 9초\n\n어비스 스펠 : 스펠 불릿 사용 시 3초 동안 일정 간격으로 최대 8명의 적에게 70%의 데미지로 2번 공격하는 어비스 스펠 생성\n어비스 버프 : 어비스 스펠 적중 시 60초 동안 데미지 20%, 보스 몬스터 공격 시 데미지 30%, 방어율 무시 20% 증가";
            break;
        case 35:
            rep = "빠르게 이동하며 모든 방향의 공간을 할퀴어 가른다.\n레프 상태에서는 어비스 차지드라이브로 변경된다.\n\n440%의 데미지로 최대 12명의 적을 12번 공격\n공격 적중 시 최대 HP의 3% 회복\n재사용 대기시간 9초";
            break;
        case 36:
            rep = "전방으로 돌진한 후 심연의 감옥을 구현하여 적을 행동 불가 상태로 만들며 구속한다. 해당 적이 행동 불가 상태 동안 받은 데미지는 황홀한 구속이 종료될 때 적용된다. 스킬 사용시 스펙터 잠식 상태가 되고 정신력 고갈 상태에서는 사용할 수 없으며 재사용 대기시간 초기화의 효과를 받지 않는다.\n황홀한 구속은 범위 내의 적 중 최대 HP가 가장 높은 적을 우선으로 공격하고 공격 반사 상태의 적을 공격해도 피해를 입지 않으며 다가오는 죽음이 발생하지 않는다.\n공격을 받은 적은 90초 동안 행동 불가 상태 이상에 저항하여 황홀한 구속 및 다른 스킬로 인한 행동 불가 상태 이상에 걸리지 않는다.\n시전 중 몬스터에게 부딪히지 않는 상태가 된다.\n\nHP 1100 소비, 600%의 데미지로 1명의 적을 6번 공격, 대상은 10초 동안 행동 불가 상태, 해당 공격으로 적에게 준 데미지에 따라 행동 불가 지속시간 최대 100% 증가\n이후 9초 동안 일정 간격으로 최대 12명의 적에게 400%의 데미지로 3번 공격\n스킬 종료 시 1000%의 데미지로 최대 12명의 적을 8번 추가 공격\n\n재사용 대기시간 180초";
            break;
        case 37:
            rep = "수련을 통해 미스틱 아츠를 더욱 강화한다.\n\n플레인 차지드라이브의 데미지 250%p, 플레인 스펠의 데미지 160%p, 스칼렛 차지드라이브와 불길의 데미지 170%p, 스칼렛 스펠의 데미지 40%p, 거스트 차지드라이브의 데미지 195%p, 거스트 스펠의 데미지 30%p 증가";
            break;
        case 38:
            rep = "스펙터의 힘을 일부 통제하게 된다.\n\n지워지지 않는 상처의 데미지 180%p, 멈출 수 없는 충동과 멈출 수 없는 본능의 데미지 175%p, 다가오는 죽음의 데미지 115%p, 채워지지 않는 굶주림의 데미지 190%p, 심연의 공포의 데미지 890%p, 돌아오는 증오의 데미지 110%p 증가";
            break;
        case 40:
            rep = "쉬지 않고 공격을 하면 신체 능력이 한계를 초월하여 향상된다.\n추가로 최종 데미지가 증가한다.\n\n플레인 차지드라이브, 끝나지 않는 흉몽에서 다른 스킬을 연계로 사용했을 때 발동되며 최대 3단계까지 누적 가능, 지속시간 20초\n단계에 비례해 플레인 차지드라이브, 끝나지 않는 흉몽의 스킬 연계 속도 증가\n영구히 최종 데미지 20% 증가";
            break;
        case 41:
            rep = "차지 스펠을 증폭시켜 차지 스펠 버프의 효과가 파티원에게 적용되고 자신에게는 효과가 2배가 된다.\n\nMP 500 소비, 60초 동안 지속\n차지 스펠 버프가 발동될 때 일정 범위 안의 파티원에게 적용, 차지 스펠의 지속시간은 차지 스펠 앰플리피케이션의 남은 지속시간과 같음\n자신에게는 차지 스펠 앰플리피케이션의 지속시간 동안 효과 2배로 적용\n\n재사용 대기시간 120초";
            break;
        case 42:
            rep = "심연의 통로를 개방하여 전방을 짧은 시간 동안 난타한 후 심연의 파수꾼을 불러내 마무리 일격을 날린다. 스킬 사용 시 스펙터 잠식 상태가 되고 스킬 사용 도중 정신력을 소모하지 않지만 정신력이 고갈된 상태에서는 사용할 수 없으며 재사용 대기시간 초기화의 효과를 받지 않는다.\n끝없는 고통은 공격 반사 상태의 적을 공격해도 피해를 입지 않고 심연의 파수꾼의 공격은 공격 무시 및 공격 반사 상태의 적에게도 피해를 입힐 수 있다.\n마무리 일격에서 모든 스킬로 연계할 수 있고 연계로 사용한 스킬은 이동하지 않고 제자리에서 사용한다. 단, 끝없는 고통에서 연계로 사용했더라도 방향키와 함께 사용하면 이동할 수 있다.\n\n전방의 적 5명에게 키다운을 유지하여 최대 3초 동안 300%의 데미지로 3번 공격, 키다운 종료 혹은 최대 키다운 유지시간 경과 시 심연의 파수꾼 발동\n심연의 파수꾼 : 100%의 데미지로 최대 12명의 적을 12번 공격하는 참격이 5번 발동하고 공격 적중 시 최대 HP의 20% 회복, 키다운 유지시간에 따라 해당 공격의 최종 데미지 최대 250%까지 증가\n\n재사용 대기시간 60초";
            break;
    }
    return rep;
};
ska.getskillimage1Ark = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "https://i.imgur.com/IiMRpNY.png";
            break;
        case 1:
            rep = "https://i.imgur.com/bxxa065.png";
            break;
        case 2:
            rep = "https://i.imgur.com/vSXGPzf.png";
            break;
        case 3:
            rep = "https://i.imgur.com/iX0bkHv.png";
            break;
        case 4:
            rep = "https://i.imgur.com/ESbUGzA.png";
            break;
        case 5:
            rep = "https://i.imgur.com/eMNKhX5.png";
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
            rep = "https://i.imgur.com/n6z7KA4.png";
            break;
        case 10:
            rep = "https://i.imgur.com/Rsn8Xb0.png";
            break;
        case 11:
            rep = "https://i.imgur.com/CoKj1pR.png";
            break;
        case 12:
            rep = "";
            break;
        case 13:
            rep = "https://i.imgur.com/u2Z0f58.png";
            break;
        case 14:
            rep = "https://i.imgur.com/FtjnPt6.png";
            break;
        case 15:
            rep = "";
            break;
        case 16:
            rep = "https://i.imgur.com/zpe1xkB.png";
            break;
        case 17:
            rep = "https://i.imgur.com/VFF51Eu.png";
            break;
        case 18:
            rep = "https://i.imgur.com/y3P35wl.png";
            break;
        case 19:
            rep = "https://i.imgur.com/yjBrssX.png";
            break;
        case 20:
            rep = "https://i.imgur.com/fhateC3.png";
            break;
        case 21:
            rep = "https://i.imgur.com/3H4I0N4.png";
            break;
        case 22:
            rep = "";
            break;
        case 23:
            rep = "https://i.imgur.com/2kF9ylR.png";
            break;
        case 24:
            rep = "https://i.imgur.com/fnxU1ox.png";
            break;
        case 25:
            rep = "https://i.imgur.com/Pxp9QBP.png";
            break;
        case 26:
            rep = "https://i.imgur.com/HjT0bz1.png";
            break;
        case 27:
            rep = "https://i.imgur.com/zNzdfST.png";
            break;
        case 28:
            rep = "https://i.imgur.com/z15Ce2U.png";
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
            rep = "https://i.imgur.com/eb5nLNs.png";
            break;
        case 33:
            rep = "https://i.imgur.com/X7oDE5j.png";
            break;
        case 34:
            rep = "https://i.imgur.com/Uq2nzRr.png";
            break;
        case 35:
            rep = "https://i.imgur.com/ItyJvOK.png";
            break;
        case 36:
            rep = "https://i.imgur.com/nEPWFyI.png";
            break;
        case 37:
            rep = "";
            break;
        case 38:
            rep = "";
            break;
        case 39:
            rep = "";
            break;
        case 40:
            rep = "";
            break;
        case 41:
            rep = "https://i.imgur.com/zMhtDxg.png";
            break;
        case 42:
            rep = "https://i.imgur.com/Uv2BCbE.png";
            break;
    }
    return rep;
};
ska.getskillimage2Ark = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "https://i.imgur.com/ZVzXoE8.png";
            break;
        case 1:
            rep = "https://i.imgur.com/2eNYkTt.png";
            break;
        case 2:
            rep = "https://i.imgur.com/MI6khCt.png";
            break;
        case 3:
            rep = "https://i.imgur.com/NQ2IJ8f.png";
            break;
        case 4:
            rep = "https://i.imgur.com/Qo7w16V.png";
            break;
        case 5:
            rep = "https://i.imgur.com/v0INx2V.png";
            break;
        case 6:
            rep = "https://i.imgur.com/Nf2EDRl.png";
            break;
        case 7:
            rep = "https://i.imgur.com/cSP8cI1.png";
            break;
        case 8:
            rep = "https://i.imgur.com/Np6UsHu.png";
            break;
        case 9:
            rep = "https://i.imgur.com/Npoav5S.png";
            break;
        case 10:
            rep = "https://i.imgur.com/dm9t1Ig.png";
            break;
        case 11:
            rep = "https://i.imgur.com/nhzio2J.png";
            break;
        case 12:
            rep = "https://i.imgur.com/NxJVSh5.png";
            break;
        case 13:
            rep = "https://i.imgur.com/zlDMkK7.png";
            break;
        case 14:
            rep = "https://i.imgur.com/QB1jdgH.png";
            break;
        case 15:
            rep = "https://i.imgur.com/XLB5Wgp.png";
            break;
        case 16:
            rep = "https://i.imgur.com/EoKzlRO.png";
            break;
        case 17:
            rep = "https://i.imgur.com/cH0jEcP.png";
            break;
        case 18:
            rep = "https://i.imgur.com/RbEWTWZ.png";
            break;
        case 19:
            rep = "https://i.imgur.com/HA0rGPd.png";
            break;
        case 20:
            rep = "https://i.imgur.com/AMarUi6.png";
            break;
        case 21:
            rep = "https://i.imgur.com/Sy38y1m.png";
            break;
        case 22:
            rep = "https://i.imgur.com/UMxdynd.png";
            break;
        case 23:
            rep = "https://i.imgur.com/gfyF6qh.png";
            break;
        case 24:
            rep = "https://i.imgur.com/WiuxKQa.png";
            break;
        case 25:
            rep = "https://i.imgur.com/jMgSGtx.png";
            break;
        case 26:
            rep = "https://i.imgur.com/3TXRFPi.png";
            break;
        case 27:
            rep = "https://i.imgur.com/5bFPifv.png";
            break;
        case 28:
            rep = "https://i.imgur.com/ZojZoNl.png";
            break;
        case 29:
            rep = "https://i.imgur.com/4eJyYiu.png";
            break;
        case 30:
            rep = "https://i.imgur.com/OQefjCX.png";
            break;
        case 31:
            rep = "https://i.imgur.com/CVIsxIR.png";
            break;
        case 32:
            rep = "https://i.imgur.com/sn17D7f.png";
            break;
        case 33:
            rep = "https://i.imgur.com/4PgrPsG.png";
            break;
        case 34:
            rep = "https://i.imgur.com/9JWBRDV.png";
            break;
        case 35:
            rep = "https://i.imgur.com/ExRqoai.png";
            break;
        case 36:
            rep = "https://i.imgur.com/kt6niPP.png";
            break;
        case 37:
            rep = "https://i.imgur.com/iLLwZH3.png";
            break;
        case 38:
            rep = "https://i.imgur.com/iQk5slT.png";
            break;
        case 39:
            rep = "https://i.imgur.com/mfPUeXQ.png";
            break;
        case 40:
            rep = "https://i.imgur.com/Ya9k1m1.png";
            break;
        case 41:
            rep = "https://i.imgur.com/EmaZUvl.png";
            break;
        case 42:
            rep = "https://i.imgur.com/C76q7lg.png";
            break;
    }
    return rep;
};

module.exports = ska;