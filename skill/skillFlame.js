const skf = {};

skf.getskillFlame = function (skillname){
    var fret = -1;
    switch(skillname){
        case "블레이징 오비탈 플레임":
        case "블레이징오비탈플레임":
        case "블레이징":
        case "오비탈플레임5":
        case "오비탈플레임V":
        case "블오플":            
            fret = 0;
            break;
        case "플레임 디스차지":
        case "플레임디스차지":
        case "디스차지":
        case "플디":
            fret = 1;
            break;
        case "인피니티 플레임 서클":
        case "인피니티플레임서클":
        case "인플서":
        case "서클":
            fret = 2;
            break;
        case "샐리맨더 미스칩":
        case "샐리맨더미스칩":
        case "샐리맨더":
        case "미스칩":
        case "샐미":
            fret = 3;
            break;
        case "오비탈 플레임":
        case "오비탈플레임":
        case "오비탈":
        case "오비탈 플레임 1":
        case "오비탈플레임 1":
        case "오비탈플레임1":
        case "오비탈 1":
        case "오비탈1":
            fret = 4;
            break;
        case "파이어워크":
        case "윗점":
        case "덥점":
        case "더블점프":
            fret = 5;
            break;
        case "엘리멘트 : 플레임":
        case "엘리멘트:플레임":
        case "엘리멘트 플레임":
        case "엘리멘트플레임":
            fret = 6;
            break;
        case "불의 반발력":
        case "불의반발력":
            fret = 7;
            break;
        case "오비탈 플레임 II":
        case "오비탈플레임 II":
        case "오비탈플레임II":
        case "오비탈 II":
        case "오비탈II":
        case "오비탈 플레임 2":
        case "오비탈플레임 2":
        case "오비탈플레임2":
        case "오비탈 2":
        case "오비탈2":
            fret = 8;
            break;
        case "플레임 볼텍스":
        case "플레임볼텍스":
        case "볼텍스":
        case "플볼":
            fret = 9;
            break;
        case "오비탈 익스플로전":
        case "오비탈익스플로전":
        case "익스플로전":
        case "익플":
        case "오익플":
            fret = 10;
            break;
        case "파이어 블링크":
        case "파이어블링크":
        case "블링크":
            fret = 11;
            break;
        case "번 앤 레스트":
        case "번앤 레스트":
        case "번앤레스트":
        case "번앤레":
        case "엠피회복":
        case "회복":
            fret = 12;
            break;
        case "엘리멘트 : 플레임 II":
        case "엘리멘트:플레임 II":
        case "엘리멘트:플레임II":
        case "엘리멘트 플레임 II":
        case "엘리멘트플레임 II":
        case "엘리멘트플레임II":
        case "엘리멘트 : 플레임 2":
        case "엘리멘트:플레임 2":
        case "엘리멘트:플레임2":
        case "엘리멘트 플레임 2":
        case "엘리멘트플레임 2":
        case "엘리멘트플레임2":
            fret = 13;
            break;
        case "오비탈 플레임 III":
        case "오비탈플레임 III":
        case "오비탈플레임III":
        case "오비탈 III":
        case "오비탈III":
        case "오비탈 플레임 3":
        case "오비탈플레임 3":
        case "오비탈플레임3":
        case "오비탈 3":
        case "오비탈3":
            fret = 14;
            break;
        case "플레임 템페스타":
        case "플레임템페스타":
        case "템페스타":
        case "플템":
        case "밀격":
            fret = 15;
            break;
        case "마엘스트롬":
        case "마엘":
        case "바인드":
            fret = 16;
            break;
        case "본 피닉스":
        case "본피닉스":
        case "피닉스":
        case "부활":
        case "헤도":
            fret = 17;
            break;
        case "엘리멘트 : 플레임 III":
        case "엘리멘트:플레임 III":
        case "엘리멘트:플레임III":
        case "엘리멘트 플레임 III":
        case "엘리멘트플레임 III":
        case "엘리멘트플레임III":
        case "엘리멘트 : 플레임 3":
        case "엘리멘트:플레임 3":
        case "엘리멘트:플레임3":
        case "엘리멘트 플레임 3":
        case "엘리멘트플레임 3":
        case "엘리멘트플레임3":
            fret = 18;
            break;
        case "해방된 마력":
        case "해방된마력":
            fret = 19;
            break;
        case "약점 분석":
        case "약점분석":
            fret = 20;
            break;
        case "번뜩이는 깨달음":
        case "번뜩이는깨달음":
            fret = 21;
            break;
        case "오비탈 플레임 IV":
        case "오비탈플레임 IV":
        case "오비탈플레임IV":
        case "오비탈 IV":
        case "오비탈IV":
        case "오비탈 플레임 4":
        case "오비탈플레임 4":
        case "오비탈플레임4":
        case "오비탈 4":
        case "오비탈4":
        case "오비탈 사자":
        case "오비탈사자":
            fret = 22;
            break;
        case "오피탈 플레임 IV (여우)":
        case "오피탈플레임 IV (여우)":
        case "오피탈플레임IV (여우)":
        case "오피탈플레임IV(여우)":
        case "오피탈 플레임 4 (여우)":
        case "오피탈플레임 4 (여우)":
        case "오피탈플레임4 (여우)":
        case "오피탈플레임4(여우)":
        case "오피탈 4 (여우)":
        case "오피탈4 (여우)":
        case "오피탈4(여우)":
        case "오피탈 (여우)":
        case "오피탈(여우)":
        case "오피탈 여우":
        case "오피탈여우":
            fret = 23;
            break;
        case "블레이징 익스팅션":
        case "블레이징익스팅션":
        case "익스팅션":
        case "블익":
            fret = 24;
            break;
        case "인페르노라이즈 사자":
        case "인페르노라이즈사자":
            fret = 25;
            break;
        case "인페르노라이즈 여우":
        case "인페르노라이즈여우":
            fret = 26;
            break;
        case "스피릿 오브 플레임":
        case "스피릿오브 플레임":
        case "스피릿오브플레임":
        case "스오플":
        case "소환수":
        case "사자":
        case "여우":
            fret = 27;
            break;
        case "버닝 리젼":
        case "버닝리젼":
        case "리젼":
        case "장판":
            fret = 28;
            break;
        case "플레임 배리어":
        case "플레임배리어":
        case "배리어":
        case "이뮨":
            fret = 29;
            break;
        case "엘리멘트 : 플레임 IV":
        case "엘리멘트:플레임 IV":
        case "엘리멘트:플레임IV":
        case "엘리멘트 플레임 IV":
        case "엘리멘트플레임 IV":
        case "엘리멘트플레임IV":
        case "엘리멘트 : 플레임 4":
        case "엘리멘트:플레임 4":
        case "엘리멘트:플레임4":
        case "엘리멘트 플레임 4":
        case "엘리멘트플레임 4":
        case "엘리멘트플레임4":
            fret = 30;
            break;
        case "꺼지지 않는 화염":
        case "꺼지지않는 화염":
        case "꺼지지않는화염":
            fret = 31;
            break;
        case "피닉스 드라이브":
        case "피닉스드라이브":
            fret = 32;
            break;
        case "카타클리즘":
            fret = 33;
            break;
        case "":
            fret = 34;
            break;
    }
    return fret;
};
skf.getskillnameFlame = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "블레이징 오비탈 플레임";
            break;
        case 1:
            rep = "플레임 디스차지";
            break;
        case 2:
            rep = "인피니티 플레임 서클";
            break;
        case 3:
            rep = "샐리맨더 미스칩";
            break;
        case 4:
            rep = "오비탈 플레임";
            break;
        case 5:
            rep = "파이어워크";
            break;
        case 6:
            rep = "엘리멘트 : 플레임";
            break;
        case 7:
            rep = "불의 반발력";
            break;
        case 8:
            rep = "오비탈 플레임 II";
            break;
        case 9:
            rep = "플레임 볼텍스";
            break;
        case 10:
            rep = "오비탈 익스플로전";
            break;
        case 11:
            rep = "파이어 블링크";
            break;
        case 12:
            rep = "번 앤 레스트";
            break;
        case 13:
            rep = "엘리멘트 : 플레임 II";
            break;
        case 14:
            rep = "오비탈 플레임 III";
            break;
        case 15:
            rep = "플레임 템페스타";
            break;
        case 16:
            rep = "마엘스트롬";
            break;
        case 17:
            rep = "본 피닉스";
            break;
        case 18:
            rep = "엘리멘트 : 플레임 III";
            break;
        case 19:
            rep = "해방된 마력";
            break;
        case 20:
            rep = "약점 분석";
            break;
        case 21:
            rep = "번뜩이는 깨달음";
            break;
        case 22:
            rep = "오비탈 플레임 IV(사자)";
            break;
        case 23:
            rep = "오비탈 플레임 IV(여우)";
            break;
        case 24:
            rep = "블레이징 익스팅션";
            break;
        case 25:
            rep = "인페르노라이즈(사자)";
            break;
        case 26:
            rep = "인페르노라이즈(여우)";
            break;
        case 27:
            rep = "스피릿 오브 플레임";
            break;
        case 28:
            rep = "버닝 리젼";
            break;
        case 29:
            rep = "플레임 배리어";
            break;
        case 30:
            rep = "엘리멘트 : 플레임 IV";
            break;
        case 31:
            rep = "꺼지지 않는 화염";
            break;
        case 32:
            rep = "피닉스 드라이브";
            break;
        case 33:
            rep = "카타클리즘";
            break;
        case 34:
            rep = "";
            break;
    }
    return rep;
};
skf.getskilldesc1Flame = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "일정시간마다 12명,720%,6번 공격/ 방무50%/ 쿨5초";
            break;
        case 1:
            rep = "하단 참조";
            break;
        case 2:
            rep = "일정시간마다 12명,1100%,7번 공격/ 크확50%, 방무50%/ 쿨2.5초";
            break;
        case 3:
            rep = "하단 참조";
            break;
        case 4:
            rep = "하단 참조";
            break;
        case 5:
            rep = "해당 방향으로 일정 거리 점프";
            break;
        case 6:
            rep = "8초 동안 마력 10 증가";
            break;
        case 7:
            rep = "받는 데미지 85%만큼 MP로 대체";
            break;
        case 8:
            rep = "최대 8명의 적을 250%의 데미지로 1번 공격";
            break;
        case 9:
            rep = "최대 6명의 적을 210%의 데미지로 2번 공격하며 밀어냄";
            break;
        case 10:
            rep = "하단 참조";
            break;
        case 11:
            rep = "하단 참조";
            break;
        case 12:
            rep = "하단 참조";
            break;
        case 13:
            rep = "8초 동안 마력 20 증가";
            break;
        case 14:
            rep = "하단 참조";
            break;
        case 15:
            rep = "최대 8명의 적을 405%의 데미지로 2번 공격하며 밀어냄";
            break;
        case 16:
            rep = "최대 6명의 적을 300%의 데미지로 12번 공격 / 쿨180초";
            break;
        case 17:
            rep = "하단 참조";
            break;
        case 18:
            rep = "8초 동안 마력 30 증가";
            break;
        case 19:
            rep = "스킬 사용 시 소비되는 MP가 130%가 되는 대신";
            break;
        case 20:
            rep = "크리티컬 확률 30% 증가";
            break;
        case 21:
            rep = "영구적으로 지능 60 증가";
            break;
        case 22:
            rep = "하단 참조";
            break;
        case 23:
            rep = "하단 참조";
            break;
        case 24:
            rep = "10초 동안 구체 주위 8명의 적을 310%로 4번 공격";
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
            rep = "15초 동안 치명적인 상태 이상 최대 10회 방어";
            break;
        case 30:
            rep = "8초 동안 마력 40 증가";
            break;
        case 31:
            rep = "상태 이상 내성 30, 모든 속성 내성 30%";
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
skf.getskilldesc2Flame = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "덩치가 큰 적일수록 피해량이 크다";
            break;
        case 1:
            rep = "-";
            break;
        case 2:
            rep = "초당 불사조의 깃털 1개 소비/ 12초마다 1개씩 최대15개";
            break;
        case 3:
            rep = "30레벨 기준 최대 마력수치 105";
            break;
        case 4:
            rep = "매 차수마다 강화";
            break;
        case 5:
            rep = "[패시브 효과 : 방어력 100 증가]";
            break;
        case 6:
            rep = "플레임위자드의 직접 공격 스킬 사용 시 엘리멘트 : 플레임이 소환된다.";
            break;
        case 7:
            rep = "-";
            break;
        case 8:
            rep = "최대 2개까지 사용할 수 있게 된다";
            break;
        case 9:
            rep = "밀격기";
            break;
        case 10:
            rep = "온오프 스킬";
            break;
        case 11:
            rep = "순간 이동기";
            break;
        case 12:
            rep = "MP 회복기";
            break;
        case 13:
            rep = "-";
            break;
        case 14:
            rep = "2차 강화";
            break;
        case 15:
            rep = "밀격기";
            break;
        case 16:
            rep = "대상은 10초 동안 행동 불가 상태";
            break;
        case 17:
            rep = "사망 방지 버프";
            break;
        case 18:
            rep = "-";
            break;
        case 19:
            rep = "최종 데미지 30% 증가";
            break;
        case 20:
            rep = "크리티컬 데미지 20% 증가";
            break;
        case 21:
            rep = "스탠스 40% 증가";
            break;
        case 22:
            rep = "최종 강화 패시브";
            break;
        case 23:
            rep = "플레임 폭스 활성화 시";
            break;
        case 24:
            rep = "재사용 대기시간 5초";
            break;
        case 25:
            rep = "광범위 공격기";
            break;
        case 26:
            rep = "여우 스택 중첩 시 큰 데미지";
            break;
        case 27:
            rep = "소환수 / 스킬 변환";
            break;
        case 28:
            rep = "장판형 파티 버프";
            break;
        case 29:
            rep = "재사용 대기시간 180초";
            break;
        case 30:
            rep = "최종 강화 패시브";
            break;
        case 31:
            rep = "스탠스 60% 증가";
            break;
        case 32:
            rep = "극딜용 액티브 버프";
            break;
        case 33:
            rep = "무적기 겸 광범위 공격기";
            break;
        case 34:
            rep = "";
            break;
    }
    return rep;
};
skf.getskilldesc3Flame = function (skillcode){
    rep = "";
    switch(skillcode){
        case 1:
            rep = "불꽃을 모아 화염의 화신을 해방시킨다. 스피릿 오브 플레임이 소환되었을 때만 사용 가능하고 소환한 화신의 종류에 따라 다른 공격이 발동된다. 아래 방향키를 누르면서 사용하면 소환중이지 않은 화신에 맞는 공격이 발동된다.\n사용 시 모든 불꽃을 소모하며 소모한 불꽃의 수에 비례해 공격이 강화된다. 불 속성의 공격이다.\n공격 반사 상태의 적을 공격해도 피해를 입지 않는다.\n\n패시브 효과 : 플레임위자드의 직접 공격 스킬이 일반 몬스터에게 1회 적중, 보스 몬스터에게 25회 적중 혹은 보스 몬스터를 1회 처치했다면 불꽃을 하나 획득하며 최대 6개까지 획득 가능\n액티브 효과 : MP 500 소비, 불꽃 최소 2개 필요, 재사용 대기시간 20초\n\n[파이어 라이온] : 최대 15명의 적을 440%의 데미지로 12번 공격하는 폭발 5번 발동, 사용에 필요한 불꽃을 초과한 불꽃 1개마다 최종 데미지 35% 증가\n[플레임 폭스] : 최대 5초 동안 유지되며 최대 HP가 높은 보스 몬스터를 우선 추적하는 8개의 여우불을 생성하여 범위 내 8명의 적을 타격, 각 여우불 당 550%의 데미지로 공격하고 최대 7번 재생성. 사용에 필요한 불꽃을 초과한 불꽃 1개마다 2번 추가 재생성";
            break;
        case 3:
            rep = "장난기 넘치는 화염의 정령 샐리맨더를 소환하여 도움을 받는다.\n\n샐리맨더는 플레임위자드의 공격 스킬이 적중하면 주변의 적을 추적하여 공격하고 1회 행동에서 공격 횟수를 모두 소모하거나 소환자와 거리가 멀어지면 소환자의 위치로 돌아온다.\n\n샐리맨더의 공격이 적중할 때마다 불씨를 얻고 그에 비례해 샐리맨더가 하는 공격의 위력이 강해진다. 샐리맨더가 소멸할 때 불씨에 대한 보답으로 마력 증가 버프를 받을 수 있고 해당 버프는 버프 프리져의 효과를 받지 않는다.\n\n샐리맨더의 공격은 공격 반사 상태의 적을 공격해도 피해를 입지 않고 최대 HP가 가장 높은 보스 몬스터를 우선하나 이그니션 효과를 적용시킬 수 없다.\n\nMP 250 소비, 60초 동안 330%의 데미지로 1명의 적을 7번 공격하는 샐리맨더 소환, 1회 행동에서 MP 100 소모하고 최대 12번까지 튕기며 공격\n\n샐리맨더의 공격이 적중할 때마다 불씨를 얻고 불씨 1개마다 샐리맨더 공격의 최종 데미지 1% 증가, 불씨는 최대 45개까지 획득 가능\n\n샐리맨더 소멸 시 30초 동안 마력 15 증가, 불씨 1개마다 마력 2 추가 증가\n\n재사용 대기시간 : 90초";
            break;
        case 4:
            rep = "전방으로 일정 거리를 날아간 뒤 다시 시전자에게 돌아오는 화염을 날려 적들을 불태운다. 상하좌우 방향키 입력과 함께 사용하여 원하는 방향으로 날려 보낼 수 있다. 불 속성의 공격이다.\n\nMP 24 소비, 최대 4명의 적을 200%의 데미지로 1번 공격";
            break;
        case 10:
            rep = "화염의 본질을 이해하고 해방한다.\n일정 횟수 이상 오비탈 플레임, 블레이징 오비탈 플레임, 인피니티 플레임 서클 적중 시 다음 공격에 불 속성의 화염의 기운 추가타가 발생한다.\n\nMP 13 소비\n오비탈 플레임, 피닉스 드라이브, 블레이징 오비탈 플레임, 인피니티 플레임 서클 10회 적중 시 다음 오비탈 플레임류 스킬에 55%의 데미지로 3번 공격하는 추가타 발생";
            break;
        case 11:
            rep = "현재 자신이 있는 위치에 화염의 흔적을 남긴다. 흔적이 유지되는 시간 동안 같은 맵에 있을 때 스킬 재사용 시 자신을 원소화 하여 이전에 흔적을 남긴 위치로 텔레포트한다.\n\nMP 45 소비, 100초 동안 지속되는 화염의 흔적을 남기며 스킬을 재사용하여 해당 위치로 이동";
            break;
        case 12:
            rep = "잠시 전투의 열기에서 벗어나 시전자 내부의 화염의 흐름을 MP로 변환 시킨다.\n화염의 기운으로 마법 공격 시 일정 확률로 적에게서 MP를 흡수한다. 보스 몬스터에게는 흡수 효율이 떨어져 더 적은 양을 흡수한다.\n\n시전 즉시 MP를 100% 회복\n\n재사용 대기시간 60초\n\n[패시브 효과: 마법 공격 시 30%의 확률로 최대 MP의 10% 흡수\n보스 몬스터에게는 최대 MP의 5% 흡수]";
            break;
        case 14:
            rep = "오비탈 플레임의 데미지를 강화시키고 동시에 최대 3개까지 사용할 수 있게 된다.\n화염 마법에 익숙해져 일정 횟수 사용 시 강화된 오비탈 플레임을 사용할 수 있게 된다. 불 속성의 공격이다.\n\nMP 36 소비, 최대 8명의 적을 275%의 데미지로 2번 공격, 일반 몬스터 공격 시 데미지 20% 증가\n3회 사용 시 다음 공격 강화 오비탈 플레임 III 발동\n\n화염 마법에 익숙해져 강화된 오비탈 플레임을 발사한다.\n\nMP 36 소비, 최대 8명의 적을 330%의 데미지로 2번 공격, 일반 몬스터 공격 시 데미지 20% 증가";
            break;
        case 17:
            rep = "화염의 가호로 죽음에 이르는 공격을 받을 때 후방으로 이동하며 죽음을 면하고 일정량의 HP를 회복한다.\n재사용 대기시간 초기화의 효과를 받지 않는다.\n\nMP 300 소비, 1800초 안에 죽음에 이르는 공격을 받았을 때 뒤로 텔레포트하며 HP를 50% 회복하고 3초 동안 피해 무시\n재사용 대기시간 1800초";
            break;
        case 22:
            rep = "오비탈 플레임의 데미지를 강화시키고 동시에 최대 4개까지 사용할 수 있게 한다.\n화염 마법에 통달하여 일정 횟수 사용 시 강화된 오비탈 플레임을 사용할 수 있게 된다. 불 속성의 공격이다.\n\nMP 43 소비, 최대 8명의 적을 330%의 데미지로 2번 공격, 일반 몬스터 공격 시 데미지 40% 증가\n3회 사용 시 다음 공격 강화 오비탈 플레임 IV 발동\n\n화염 마법에 통달하여 강화된 오비탈 플레임을 발사한다.\n\nMP 43 소비, 전방의 8명의 적에게 430% 데미지로 2번 공격, 일반 몬스터 공격 시 데미지 40% 증가";
            break;
        case 23:
            rep = "장난기 많은 플레임 폭스의 힘을 빌려 전방에 돌아오지 않는 화염을 발사한다. 화염은 동시에 최대 4개까지 사용할 수 있으며 일정 횟수 사용 시 강화된 오비탈 플레임을 사용할 수 있다. 상하좌우 방향키 입력과 함께 사용하여 원하는 방향으로 날려 보낼 수 있다.\n화신의 가호로 일정 횟수 적중 시 여우의 장난 디버프가 발동하고, 속성 내성을 감소시킨다.\n여우의 장난은 5번 중첩 시 인페르노라이즈-폭스를 적중시켜 폭발시킬 수 있다. 속성 내성 감소의 경우 파티원은 소울마스터의 <트루 사이트-인핸스>, 배틀메이지의 <디버프 오라-엘리멘탈 리셋>으로 인한 속성 내성 감소와 중복 적용이 되지 않지만 플레임위자드 자신은 중복 적용된다. 불 속성의 공격이다.\n\nMP 43 소비, 최대 8명의 적을 570%의 데미지로 2번 공격\n적중 시 공격 속성 내성 10% 감소, 10회 적중 시 20초 동안 여우의 장난 디버프 발동\n\n장난기 많은 플레임 폭스의 힘을 빌려 전방에 돌아오지 않는 좀 더 강력한 화염을 발사한다. 화염은 동시에 최대 4개까지 사용할 수 있다. 상하좌우 방향키 입력과 함께 사용하여 원하는 방향으로 날려 보낼 수 있다.\n\nMP 43 소비, 최대 8명의 적을 630%의 데미지로 2번 공격";
            break;
        case 25:
            rep = "주변에 화염의 흐름을 한 군데로 모아 지면에 거대한 화염을 솟구치게 한다. 아래 방향키를 누르면서 사용하면 인페르노라이즈 폭스 모드가 발동된다. 불 속성의 공격이다. 파이어 라이온 소환 중에만 사용할 수 있다.\n\nMP 115 소비, 최대 15명의 적을 350%의 데미지로 10번 공격\n재사용 대기시간 30초";
            break;
        case 26:
            rep = "플레임 폭스가 순수한 화염으로 잠시 돌아가 전방으로 날아간다. 여우의 장난이 5번 중첩된 적에게는 화염을 폭주시켜 큰 데미지로 불태운다.\n아래 방향키를 누르면서 사용하면 인페르노라이즈 라이온 모드가 발동된다. 불 속성의 공격이다. 플레임 폭스 소환 중에만 사용할 수 있다\n\nMP 22 소비, 최대 15명의 적을 340%의 데미지로 4번 공격\n여우의 장난이 5번 중첩된 적에게 적중 시 1800%의 데미지로 5번 추가 공격 발생\n\n재사용 대기시간 30초";
            break;
        case 27:
            rep = "엘리멘트를 매개체로 화염의 화신을 소환한다. 스킬을 사용하면 파이어 라이온이 소환되고, 아래 방향키를 누르면서 사용하면 플레임 폭스가 소환된다.\n화신의 가호가 더해져 일정 시간 동안 MP 소비가 증가하는 대신 자신의 모든 공격이 방어를 일정수준 무시한다.\n소환된 화신의 종류에 따라 오비탈 플레임, 인페르노라이즈 사용 시 다른 공격이 발동된다.\n\nMP 115 소비, 300초 동안 MP 소비량 105%로 증가, 방어율 무시 30% 증가";
            break;
        case 28:
            rep = "화염의 마법진을 지면에 설치하여 자신을 포함한 파티원이 해당 마법진 위에 있을 때 데미지와 공격 속도를 증가 시킨다.\n자신은 마법진 밖에 있어도 마법진의 효과를 얻을 수 있다. 해당 효과는 처음 효과를 얻은 버닝 리젼에 의해서는 갱신되지 않는다.\n\nMP 115 소비, 30초 동안 지속되는 마법진 위에 있을 때 데미지 60% 증가, 공격 속도 1단계 증가\n자신은 마법진 밖에 있어도 동일한 효과 획득, 파티원은 마법진 위에서만 효과 적용\n재사용 대기시간 45초, 마법진이 지속 가능한 시간보다 먼저 사라졌을 때 남은 지속 시간 1초당 재사용 대기시간 1초 감소, 최대 15초 감소 가능";
            break;
        case 32:
            rep = "불사조의 현신으로 화염의 흐름을 극한까지 개방하여 오비탈 플레임을 강화시킨다. 지속 중 오비탈 플레임 사용 시 화염의 기운이 넘쳐흘러 무차별적인 화염 폭격이 이루어진다.\n소환한 화신의 종류에 따라 다른 공격이 발동된다.\n\nMP 300 소비, 15초 동안 오비탈 플레임 강화\n[파이어 라이온] : 최대 8명의 적을 315%의 데미지로 2번 공격하는 불꽃 3개 발사, 여러 개의 불꽃이 하나의 몬스터를 공격하면 2번째 불꽃부터 최종 데미지 50% 감소, 일반 몬스터 공격 시 데미지 40% 증가\n[플레임 폭스] : 최대 8명의 적을 450%의 데미지로 2번 공격하는 불꽃 4개 발사, 여러 개의 불꽃이 하나의 몬스터를 공격하면 2번째 불꽃부터 최종 데미지 50% 감소\n\n재사용 대기시간 90초";
            break;
        case 33:
            rep = "원소계로부터 거대한 화염 소환체를 낙하시킨다. 지면과 닿는 즉시 화염은 폭발하여 적을 모조리 불태운다. 불 속성의 공격이다.\n\nMP 350 소비, 최대 15명의 적을 860%의 데미지로 7번 공격, 시전 동작 중 무적\n\n재사용 대기시간 100초";
            break;
        case 34:
            rep = "";
            break;
    }
    return rep;
};
skf.getskillimage1Flame = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "https://i.imgur.com/pGC9Ans.png";
            break;
        case 1:
            rep = "https://i.imgur.com/s2k7JLr.png";
            break;
        case 2:
            rep = "https://i.imgur.com/EXlenby.png";
            break;
        case 3:
            rep = "https://i.imgur.com/GL3uosN.png";
            break;
        case 4:
            rep = "https://i.imgur.com/uZnfHx9.png";
            break;
        case 5:
            rep = "https://i.imgur.com/nvpMFfr.png";
            break;
        case 6:
            rep = "https://i.imgur.com/YVnBFQv.png";
            break;
        case 7:
            rep = "";
            break;
        case 8:
            rep = "https://i.imgur.com/WuoHJYM.png";
            break;
        case 9:
            rep = "https://i.imgur.com/0H9tlPr.png";
            break;
        case 10:
            rep = "https://i.imgur.com/FthyOO9.png";
            break;
        case 11:
            rep = "https://i.imgur.com/0ijLl6S.png";
            break;
        case 12:
            rep = "https://i.imgur.com/URfRqRp.png";
            break;
        case 13:
            rep = "";
            break;
        case 14:
            rep = "https://i.imgur.com/JTggnu7.png";
            break;
        case 15:
            rep = "https://i.imgur.com/GS2MOC7.png";
            break;
        case 16:
            rep = "https://i.imgur.com/J40rFuv.png";
            break;
        case 17:
            rep = "https://i.imgur.com/XOTRUFC.png";
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
            rep = "https://i.imgur.com/UKadYfT.png";
            break;
        case 23:
            rep = "https://i.imgur.com/KUa1HI1.png";
            break;
        case 24:
            rep = "https://i.imgur.com/Yjm67Ch.png";
            break;
        case 25:
            rep = "https://i.imgur.com/FuVX2Ds.png";
            break;
        case 26:
            rep = "https://i.imgur.com/MggbOhV.png";
            break;
        case 27:
            rep = "https://i.imgur.com/4h5SWa2.png";
            break;
        case 28:
            rep = "https://i.imgur.com/6VLnadu.png";
            break;
        case 29:
            rep = "https://i.imgur.com/Y0igA2e.png";
            break;
        case 30:
            rep = "";
            break;
        case 31:
            rep = "";
            break;
        case 32:
            rep = "https://i.imgur.com/H8GHcMt.png";
            break;
        case 33:
            rep = "https://i.imgur.com/xLoXzzi.png";
            break;
        case 34:
            rep = "";
            break;
    }
    return rep;
};
skf.getskillimage2Flame = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "https://i.imgur.com/71Pu6B7.png";
            break;
        case 1:
            rep = "https://i.imgur.com/Eh95YUL.png";
            break;
        case 2:
            rep = "https://i.imgur.com/RosFWRd.png";
            break;
        case 3:
            rep = "https://i.imgur.com/QhRTYxe.png";
            break;
        case 4:
            rep = "https://i.imgur.com/uzuub6g.png";
            break;
        case 5:
            rep = "https://i.imgur.com/kjxkBi8.png";
            break;
        case 6:
            rep = "https://i.imgur.com/cGbfTv2.png";
            break;
        case 7:
            rep = "https://i.imgur.com/BwGSO69.png";
            break;
        case 8:
            rep = "https://i.imgur.com/h2vuX4u.png";
            break;
        case 9:
            rep = "https://i.imgur.com/arpH5A2.png";
            break;
        case 10:
            rep = "https://i.imgur.com/rJd9HFD.png";
            break;
        case 11:
            rep = "https://i.imgur.com/Y2baHy4.png";
            break;
        case 12:
            rep = "https://i.imgur.com/Kg8aAcS.png";
            break;
        case 13:
            rep = "https://i.imgur.com/0BLs7U0.png";
            break;
        case 14:
            rep = "https://i.imgur.com/Oqgj9mi.png";
            break;
        case 15:
            rep = "https://i.imgur.com/aYdPNIr.png";
            break;
        case 16:
            rep = "https://i.imgur.com/LJDPkAJ.png";
            break;
        case 17:
            rep = "https://i.imgur.com/AgFscvu.png";
            break;
        case 18:
            rep = "https://i.imgur.com/vjqJyn5.png";
            break;
        case 19:
            rep = "https://i.imgur.com/tdns44p.png";
            break;
        case 20:
            rep = "https://i.imgur.com/8hAUXIc.png";
            break;
        case 21:
            rep = "https://i.imgur.com/TPM4fue.png";
            break;
        case 22:
            rep = "https://i.imgur.com/RDkI3Vr.png";
            break;
        case 23:
            rep = "https://i.imgur.com/Qf7nY1Y.png";
            break;
        case 24:
            rep = "https://i.imgur.com/Mr30Bn0.png";
            break;
        case 25:
            rep = "https://i.imgur.com/GdetfpT.png";
            break;
        case 26:
            rep = "https://i.imgur.com/xouHLp3.png";
            break;
        case 27:
            rep = "https://i.imgur.com/oWDjekh.png";
            break;
        case 28:
            rep = "https://i.imgur.com/0sEt617.png";
            break;
        case 29:
            rep = "https://i.imgur.com/z2fn7jk.png";
            break;
        case 30:
            rep = "https://i.imgur.com/j0QX73u.png";
            break;
        case 31:
            rep = "https://i.imgur.com/q0YfaUP.png";
            break;
        case 32:
            rep = "https://i.imgur.com/yjp6kyl.png";
            break;
        case 33:
            rep = "https://i.imgur.com/I11qMeU.png";
            break;
        case 34:
            rep = "";
            break;
    }
    return rep;
};

module.exports = skf;