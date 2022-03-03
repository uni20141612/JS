const skc = {};

skc.getskillCadena = function (skillname){
    var cret = -1;
    switch(skillname){
        case "체인아츠:퓨리":
        case "체인아츠퓨리":
        case "체인아츠 퓨리":
        case "퓨리":
        case "체퓨":
            cret = 0;
            break;
        case "A.D 오드넌스":
        case "A.D오드넌스":
        case "AD 오드넌스":
        case "AD오드넌스":
        case "오드넌스":
        case "에이디 오드넌스":
        case "에이디오드넌스":
        case "에오":
            cret = 1;
            break;
        case "체인아츠:메일스트롬":
        case "체인아츠메일스트롬":
        case "체인아츠 메일스트롬":
        case "메일스트롬":
        case "메일":
        case "체메":
            cret = 2;
            break;
        case "웨폰 버라이어티 피날레":
        case "웨폰버라이어티 피날레":
        case "웨폰버라이어티피날레":
        case "웨버피":
        case "피날레":
            cret = 3;
            break;
        case "흥정":
            cret = 4;
            break;
        case "체인아츠:체이스":
        case "체인아츠 체이스":
        case "체인아츠체이스":
        case "체이스":
            cret = 5;
            break;
        case "체인아츠:스트로크":
        case "체인아츠 스트로크":
        case "체인아츠스트로크":
        case "스트로크":
        case "평타":
            cret = 6;
            break;
        case "서먼 커팅 시미터":
        case "서먼 커팅시미터":
        case "서먼커팅시미터":
        case "커팅 시미터":
        case "커팅시미터":
        case "커시":
        case "시미터":
            cret = 7;
            break;
        case "에이전트 시프트":
        case "에이전트시프트":
        case "더블점프":
        case "윗점":
            cret = 8;
            break;
        case "에이전트 스텝":
        case "에이전트스텝":
            cret = 9;
            break;
        case "콜렉팅 포리프":
        case "콜렉팅포리프":
        case "콜렉팅":
        case "포리프":
        case "네잎클로버":
            cret = 10;
            break;
        case "체인아츠:스트로크 1차 강화":
        case "체인아츠:스트로크 1차강화":
        case "체인아츠:스트로크1차강화":
        case "체인아츠 스트로크 1차 강화":
        case "체인아츠 스트로크 1차강화":
        case "체인아츠 스트로크1차강화":
        case "체인아츠스트로크 1차강화":
        case "체인아츠스트로크1차강화":
        case "스트로크 1차 강화":
        case "스트로크 1차강화":
        case "스트로크1차강화":
        case "평타1차강화":
        case "스트로크 2":
        case "스트로크2":
            cret = 11;
            break;
        case "서먼 스크래칭 클로":
        case "서먼 스크래칭클로":
        case "서먼스크래칭클로":
        case "스크래칭 클로":
        case "스크래칭클로":
        case "스클":
        case "클로":
            cret = 12;
            break;
        case "서먼 스로잉 윙대거":
        case "서먼 스로잉윙대거":
        case "서먼스로잉윙대거":
        case "스로잉 윙대거":
        case "스로잉윙대거":
        case "스윙":
        case "윙대거":
            cret = 13;
            break;
        case "웨폰 버라이어티 I":
        case "웨폰버라이어티 I":
        case "웨폰버라이어티I":
        case "웨폰 버라이어티 1":
        case "웨폰버라이어티 1":
        case "웨폰버라이어티1":
            cret = 14;
            break;
        case "퀵서비스 마인드 I":
        case "퀵서비스마인드 I":
        case "퀵서비스마인드I":
        case "퀵서비스 마인드 1":
        case "퀵서비스마인드 1":
        case "퀵서비스마인드1":
            cret = 15;
            break;
        case "체인아츠:스트로크 2차 강화":
        case "체인아츠:스트로크 2차강화":
        case "체인아츠:스트로크2차강화":
        case "체인아츠 스트로크 2차 강화":
        case "체인아츠 스트로크 2차강화":
        case "체인아츠 스트로크2차강화":
        case "체인아츠스트로크 2차강화":
        case "체인아츠스트로크2차강화":
        case "스트로크 2차 강화":
        case "스트로크 2차강화":
        case "스트로크2차강화":
        case "평타2차강화":
        case "스트로크 3":
        case "스트로크3":
            cret = 16;
            break;
        case "서먼 슈팅 샷건":
        case "서먼 슈팅샷건":
        case "서먼슈팅샷건":
        case "슈팅 샷건":
        case "슈팅샷건":
        case "샷건":
            cret = 17;
            break;
        case "서먼 슬래싱 나이프":
        case "서먼 슬래싱나이프":
        case "서먼슬래싱나이프":
        case "슬래싱 나이프":
        case "슬래싱나이프":
        case "슬래싱":
        case "나이프":
        case "슬나":
            cret = 18;
            break;
        case "서먼 릴리싱 봄":
        case "서먼 릴리싱봄":
        case "서먼릴리싱봄":
        case "릴리싱 봄":
        case "릴리싱봄":
        case "릴봄":
            cret = 19;
            break;
        case "웨폰 버라이어티 II":
        case "웨폰버라이어티 II":
        case "웨폰버라이어티II":
        case "웨폰 버라이어티 2":
        case "웨폰버라이어티 2":
        case "웨폰버라이어티2":
            cret = 20;
            break;
        case "템퍼":
            cret = 21;
            break;
        case "위크포인트 어택":
        case "위크포인트어택":
            cret = 22;
            break;
        case "베이직 디텍션":
        case "베이직디텍션":
            cret = 23;
            break;
        case "체인아츠:스트로크 최종 강화":
        case "체인아츠:스트로크 최종강화":
        case "체인아츠:스트로크최종강화":
        case "체인아츠 스트로크 최종 강화":
        case "체인아츠 스트로크 최종강화":
        case "체인아츠 스트로크최종강화":
        case "체인아츠스트로크 최종강화":
        case "체인아츠스트로크최종강화":
        case "스트로크 최종 강화":
        case "스트로크 최종강화":
        case "스트로크최종강화":
        case "평타최종강화":
        case "스트로크 4":
        case "스트로크4":
            cret = 24;
            break;
        case "서먼 스트라이킹 브릭":
        case "서먼 스트라이킹브릭":
        case "서먼스트라이킹브릭":
        case "스트라이킹 브릭":
        case "스트라이킹브릭":
        case "브릭":
        case "스브":
            cret = 25;
            break;
        case "서먼 비팅 니들배트":
        case "서먼 비팅니들배트":
        case "서먼비팅니들배트":
        case "비팅 니들배트":
        case "비팅니들배트":
        case "니들배트":
        case "비니":
        case "빠따":
            cret = 26;
            break;
        case "체인아츠:터프 허슬":
        case "체인아츠:터프허슬":
        case "체인아츠 터프 허슬":
        case "체인아츠 터프허슬":
        case "체인아츠터프허슬":
        case "터프 허슬":
        case "터프허슬":
            cret = 27;
            break;
        case "체인아츠:테이크다운":
        case "체인아츠 테이크다운":
        case "체인아츠테이크다운":
        case "테이크다운":
        case "바인드":
        case "셀프바인드":
            cret = 28;
            break;
        case "웨폰 버라이어티 III":
        case "웨폰버라이어티 III":
        case "웨폰버라이어티III":
        case "웨폰 버라이어티 3":
        case "웨폰버라이어티 3":
        case "웨폰버라이어티3":
            cret = 29;
            break;
        case "위크포인트 컨버징 어택":
        case "위크포인트 컨버징어택":
        case "위크포인트컨버징어택":
            cret = 30;
            break;
        case "퀵서비스 마인드 II":
        case "퀵서비스마인드 II":
        case "퀵서비스마인드II":
        case "퀵서비스 마인드 2":
        case "퀵서비스마인드 2":
        case "퀵서비스마인드2":
            cret = 31;
            break;
        case "프로페셔널 에이전트":
        case "프로페셔널에이전트":
        case "프로페셔널":
        case "프로":
            cret = 32;
            break;
        case "체인아츠:크러시":
        case "체인아츠 크러시":
        case "체인아츠크러시":
        case "크러시":
            cret = 33;
            break;
        case "상인단 특제 비약":
        case "상인단 특제비약":
        case "상인단특제비약":
        case "특제 비약":
        case "특제비약":
        case "비약":
        case "상특비":
            cret = 34;
            break;
        case "":
            cret = 35;
            break;
    }
    return cret;
};
skc.getskillnameCadena = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "체인아츠:퓨리";
            break;
        case 1:
            rep = "A.D 오드넌스";
            break;
        case 2:
            rep = "체인아츠:메일스트롬";
            break;
        case 3:
            rep = "웨폰 버라이어티 피날레";
            break;
        case 4:
            rep = "흥정";
            break;
        case 5:
            rep = "체인아츠:체이스";
            break;
        case 6:
            rep = "체인아츠:스트로크";
            break;
        case 7:
            rep = "서먼 커팅 시미터";
            break;
        case 8:
            rep = "에이전트 시프트";
            break;
        case 9:
            rep = "에이전트 스텝";
            break;
        case 10:
            rep = "콜렉팅 포리프";
            break;
        case 11:
            rep = "체인아츠:스트로크 1차 강화";
            break;
        case 12:
            rep = "서먼 스크래칭 클로";
            break;
        case 13:
            rep = "서먼 스로잉 윙대거";
            break;
        case 14:
            rep = "웨폰 버라이어티 I";
            break;
        case 15:
            rep = "퀵서비스 마인드 I";
            break;
        case 16:
            rep = "체인아치:스트로크 2차 강화";
            break;
        case 17:
            rep = "서먼 슈팅 샷건";
            break;
        case 18:
            rep = "서먼 슬래싱 나이프";
            break;
        case 19:
            rep = "서먼 릴리싱 봄";
            break;
        case 20:
            rep = "웨폰 버라이어티 II";
            break;
        case 21:
            rep = "템퍼";
            break;
        case 22:
            rep = "위크포인트 어택";
            break;
        case 23:
            rep = "베이직 디텍션";
            break;
        case 24:
            rep = "체인아츠:스트로크 최종 강화";
            break;
        case 25:
            rep = "서먼 스트라이킹 브릭";
            break;
        case 26:
            rep = "서먼 비팅 니들배트";
            break;
        case 27:
            rep = "체인아츠:터프 허슬";
            break;
        case 28:
            rep = "체인아츠:테이크다운";
            break;
        case 29:
            rep = "웨폰 버라이어티 III";
            break;
        case 30:
            rep = "위크포인트 컨버징 어택";
            break;
        case 31:
            rep = "퀵서비스 마인드 II";
            break;
        case 32:
            rep = "프로페셔널 에이전트";
            break;
        case 33:
            rep = "체인아츠:크러시";
            break;
        case 34:
            rep = "상인단 특제 비약";
            break;
        case 35:
            rep = "";
            break;
    }
    return rep;
};
skc.getskilldesc1Cadena = function (skillcode){
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
            rep = "상점에서 물건 구매 시 4% 싸게 구매 가능";
            break;
        case 5:
            rep = "하단 참조";
            break;
        case 6:
            rep = "하단 참조";
            break;
        case 7:
            rep = "125%의 데미지로 최대 6명의 적을 5번 공격";
            break;
        case 8:
            rep = "점프 중 사용하면 진행 방향으로 연속 두 번 점프한다";
            break;
        case 9:
            rep = "회피율 15% 증가";
            break;
        case 10:
            rep = "영구적으로 행운 50 증가";
            break;
        case 11:
            rep = "200%의 데미지로 최대 6명의 적을 3번 공격";
            break;
        case 12:
            rep = "235%의 데미지로 최대 10명의 적을 4번 공격";
            break;
        case 13:
            rep = "하단 참조";
            break;
        case 14:
            rep = "하단 참조";
            break;
        case 15:
            rep = "공격력 10, 크리티컬 데미지 5%";
            break;
        case 16:
            rep = "300%의 데미지로 최대 7명의 적을 4번 공격";
            break;
        case 17:
            rep = "하단 참조";
            break;
        case 18:
            rep = "하단 참조";
            break;
        case 19:
            rep = "415%, 최대 8명의 적을 6번 공격하는 폭탄 설치";
            break;
        case 20:
            rep = "하단 참조";
            break;
        case 21:
            rep = "최대 HP 20%, 상태 이상 내성 30";
            break;
        case 22:
            rep = "상태 이상에 걸린 적 공격 시 크리티컬 확률 1%";
            break;
        case 23:
            rep = "적 방어율 무시 20% 증가";
            break;
        case 24:
            rep = "400%의 데미지로 최대 7명의 적을 5번 공격";
            break;
        case 25:
            rep = "535%의 데미지로 최대 7명의 적을 7번 공격";
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
            rep = "공격력 30, 크리티컬데미지 10%, 크확 10%";
            break;
        case 32:
            rep = "하단 참조";
            break;
        case 33:
            rep = "510% 데미지로 최대 15명의 적을 15번 공격";
            break;
        case 34:
            rep = "60초 동안 데미지 10%, 크리티컬 확률 10% 증가";
            break;
        case 35:
            rep = "";
            break;
    }
    return rep;
};
skc.getskilldesc2Cadena = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "버프형 다수 공격기";
            break;
        case 1:
            rep = "지속형 소환수 공격기";
            break;
        case 2:
            rep = "설치형 보조 공격기";
            break;
        case 3:
            rep = "웨폰 버라이어티의 강화판";
            break;
        case 4:
            rep = "길드 스킬 중 장사꾼 효과와 중첩 시 높은 수치 우선 적용";
            break;
        case 5:
            rep = "카데나 유틸리티의 핵심";
            break;
        case 6:
            rep = "일반 공격 대응";
            break;
        case 7:
            rep = "자신의 스킬 사용 중에도 사용할 수 있다. / 쿨 4초";
            break;
        case 8:
            rep = "위 방향키와 함께 사용해 위 방향으로도 이동할 수 있다.";
            break;
        case 9:
            rep = "최대 이동속도 20 만큼 증가";
            break;
        case 10:
            rep = "-";
            break;
        case 11:
            rep = "하는 체인아츠:스트로크 2타 사용";
            break;
        case 12:
            rep = "자신의 스킬 사용 중에도 사용할 수 있다. / 쿨 3초";
            break;
        case 13:
            rep = "전진형 오브젝트 소환 스킬";
            break;
        case 14:
            rep = "논체인아츠 스킬 가짓수 비례";
            break;
        case 15:
            rep = "크리티컬 확률 10%, 회피율 20% 증가";
            break;
        case 16:
            rep = "하는 체인아츠:스트로크 2타 사용";
            break;
        case 17:
            rep = "체이스로 체공 캔슬 가능";
            break;
        case 18:
            rep = "공중에서 사용 시 체공";
            break;
        case 19:
            rep = "1초 후 폭발 / 재사용 대기시간 8초";
            break;
        case 20:
            rep = "논체인아츠 스킬 총 6개 (3차까지)";
            break;
        case 21:
            rep = "모든 속성 내성 30% 증가, 스탠스 40% 증가";
            break;
        case 22:
            rep = "크리티컬데미지 5% 증가, 상태이상 최대 5개까지 적용";
            break;
        case 23:
            rep = "40% 확률로 추가 회피";
            break;
        case 24:
            rep = "하는 체인아츠:스트로크 2타 사용";
            break;
        case 25:
            rep = "쿨 8초 / 위방향키 입력시 더 멀리 점프";
            break;
        case 26:
            rep = "공깎스킬";
            break;
        case 27:
            rep = "키다운형 광범위 공격기";
            break;
        case 28:
            rep = "무적 겸 바인드";
            break;
        case 29:
            rep = "최종데미지 최대 88%";
            break;
        case 30:
            rep = "카데나 자체 디버프 최대 7개";
            break;
        case 31:
            rep = "회피율 15% 증가, 스탠스 60% 증가";
            break;
        case 32:
            rep = "최종 데미지 최대 176%";
            break;
        case 33:
            rep = "재사용 대기시간 : 30초";
            break;
        case 34:
            rep = "재사용 대기시간 : 120초";
            break;
        case 35:
            rep = "";
            break;
    }
    return rep;
};
skc.getskilldesc3Cadena = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "무수히 많은 체인을 방사하여 공간 자체를 결박시킨다. 체인아츠:퓨리는 공격 무시 및 공격 반사 상태의 적에게도 피해를 입힐 수 있다.\n회색 연출 온오프 : 마우스 우클릭\n\nMP 1000 소비, 65초 동안 공격 시 임의의 경로를 지나며 550%의 데미지로 최대 10명의 적을 6번 공격하는 거대 체인 생성\n거대 체인 재생성 대기시간 : 0.6초\n재사용 대기시간 : 150초";
            break;
        case 1:
            rep = "고대 노바 병기인 창룡포의 메커니즘과 그림자 상인단의 기술력을 합쳐 탄생한 현대식 대포를 호출한다. 호출된 대포는 주변의 에너지를 끌어와 응집시켜 발사한다. A.D 오드넌스의 공격은 공격 반사 상태의 적을 공격해도 피해를 입지 않는다\n\nMP 1000 소비, 10초 동안 에너지를 응집하여 일정 간격으로 구체 주위를 495% 데미지로 최대 8명의 적을 5번 공격\n응집은 최대 38회까지만 발생하며, 최대 응집 횟수를 채우지 않았다면 대포의 지속 시간 증가\n응집 완료 시 1650% 데미지로 최대 15명의 적을 8번 공격하는 구체 발사\n\n재사용 대기시간 : 25초";
            break;
        case 2:
            rep = "휘두른 체인을 빠르게 회전시켜 소용돌이를 만들어 낸다. 소용돌이는 1개만 존재할 수 있고 공격 반사 상태의 적을 공격해도 피해를 입지 않는다.\n체인아츠:스트로크 2타를 사용한 후 연계로만 사용할 수 있으며 ↓+[공격키] 를 입력해서도 사용할 수 있다.\n\nMP 250 소비, 8초 동안 일정 시간마다 660%의 데미지로 최대 8명의 적을 4번 공격, 공격 시 100% 확률로 6초 동안 슬로우\n\n공격 속도가 시간에 따라 점차 감소";
            break;
        case 3:
            rep = "무기 사용 숙련도가 극한에 도달해 더 강화된 추가타를 사용할 수 있게 된다. 웨폰 버라이어티 피날레는 공격 반사 상태의 적을 공격해도 피해를 입지 않으며 특정 공격 스킬 적중 시 준비 시간이 감소된다.\n\nMP 450 소비, 웨폰 버라이어티 추가타 4회 적중 시 주변 적 위치에서 발동\n\n최대 7명의 적을 550%의 데미지로 7번 공격하는 추가타 4번 발동\n웨폰 버라이어티 피날레는 11초마다 1개씩 준비되며 최대 3개까지 준비 가능\n\n체인아츠:터프 허슬/체인아츠:테이크다운/체인아츠:크러시 적중 시 준비 시간 2초 감소, 체인아츠:퓨리 적중 시 1초 감소";
            break;
        case 5:
            rep = "체인을 발사한 뒤 연결하여 적에게 순식간에 다가간다. 키다운을 통해 체인을 발사하며 키다운 종료 시의 체인 끝부분 지면이나 몬스터에 연결된다.\n전방 발사는 몬스터에만, 상향 및 하향 발사는 지면에만 연결되며, 일정 근접 거리까지는 연결하지 않는다. 하향 발사는 공중에서만 사용 가능하며 공중에서 발사 시 발사 방향에 상관없이 낙하가 일시적으로 느려진다.\n연결되어 있는 동안 스킬키를 재입력 시 해당 지점으로 빠르게 이동한다.\n체인이 연결된 상태나 이동 중에는 일시적으로 다크 사이트 상태가 되어 적에게 부딪히지 않지만 공격을 하거나 스킬을 사용하면 해제된다.\n체인에 걸린 적은 일정시간 동안 슬로우 상태 이상에 걸린다. 자신의 스킬 사용 중에도 사용할 수 있다.\n\n[↑+스킬키] : 상향 45° 발사\n[↓+스킬키] : 하향 45° 발사\n\nMP 10 소비, 100%의 데미지로 최대 1명의 적을 1번 공격, 공격 시 100%의 확률로 5초 동안 슬로우, 이동 시작부터 2초 동안 다크 사이트 상태가 되어 적과 부딪히지 않음\n이동 시 다크 사이트로 최대 HP의 일정 비율로 피해를 입히는 공격을 회피하였을 경우 다크 사이트의 남은 지속 시간이 최대치의 20% 만큼 감소\n재사용 대기시간 : 0.2초";
            break;
        case 6:
            rep = "공격키를 입력하여 2연속 공격을 가한다. 체인을 채찍처럼 움켜진 뒤, 한 차례 돌린 후 휘둘러 내려치는 연속 공격은 적을 순식간에 휩쓸고 지나간다. 2타째인 휘둘러 내려치는 공격에 맞은 적은 뒤로 밀려나며 체인에 닿은 적은 일정 시간 동안 슬로우 상태 이상에 걸린다.\n체인을 돌릴 때의 원심력을 이용하여 1타와 2타 사이에 다른 공격으로 연계가 가능하다. 이때의 원심력은 연계된 공격 스킬의 데미지를 더 강하게 만든다.\n자신의 스킬 사용 중에도 사용할 수 있다.\n\nMP 13 소비,\n1타 : 150%의 데미지로 최대 4명의 적을 2번 공격\n2타 : 150%의 데미지로 최대 6명의 적을 2번 공격,\n공격 시 100% 확률로 5초 동안 슬로우\n체인아츠:스트로크를 제외한 1타 직후 사용하는 스킬의 최종 데미지 10% 증가";
            break;
        case 13:
            rep = "일정 시간 후 폭발하는 수리검을 소환하여 지면에 낮게 깔아 던진다. 수리검은 적을 밀어내며 공격한다. 일부 몬스터는 저항하여 밀리지 않는다.\n\nMP 28 소비, 7초 동안 205%의 데미지로 총 40번 공격, 공격 횟수를 모두 채우거나 일정 시간이 지난 경우 자동 폭발하며, 폭발 시 450%의 데미지로 최대 8명의 적을 3번 공격,\n스킬키를 재입력하여 수동 폭발 가능.\n\n재사용 대기시간 : 10초";
            break;
        case 14:
            rep = "다양한 무기를 효율적으로 사용하는 법을 익혀서 모든 공격의 데미지를 증가시킨다. 무기를 바꿔서 사용할 때마다 추가 공격이 발생하며 버프 효과가 발동된다. 추가 공격은 공격 반사 상태의 적을 공격해도 피해를 입지 않는다.\n버프는 체인아츠를 제외한 무기의 수만큼 효과가 중첩된다. 이미 중첩 효과를 준 무기끼리 교체 사용 시 버프 잔여 시간이 초기화된다.\n웨폰 버라이어티는 버프 지속시간 증가의 영향을 받지 않는다.\n\n무기 교체 시 30초 동안 버프 1스택당 모든 공격 스킬의 최종 데미지 3% 증가, 체인아츠를 제외한 사용 가능 소환 무기 스킬 최대 개수만큼 중첩 가능\n버프 중첩 및 갱신 시 100%의 데미지로 최대 5명의 적을 2번 공격하는 추가타 발생,\n추가타 재발동 대기시간 : 0.25초\n\n[패시브 효과 : 커팅 시미터 데미지 80%p 증가]";
            break;
        case 17:
            rep = "샷건을 소환하여 전방 부채꼴 범위의 적에게 산탄을 발사한다. 가까운 적일수록 큰 피해를 입는다. 발사 시의 역추진력을 이용해 후방으로 뛰어오르며 이동한다.\n\nMP 30 소비, 최대 6명의 적을 7번 공격\n가까운 거리 : 390%의 데미지\n중간 거리 : 320%의 데미지\n먼 거리 : 275%의 데미지\n\n재사용 대기시간 : 5초";
            break;
        case 18:
            rep = "2개의 단도를 소환하여 전후방을 순식간에 베어낸다. 공중에서 사용 시 베어내는 시간 동안 공중에 머문다. 단도에 닿은 적은 일정 시간 동안 공포 상태 이상에 걸린다.\n\nMP 35 소비, 315%의 데미지로 최대 4명의 적을 8번 공격, 공격 시 100% 확률로 10초 동안 공포에 빠지게 하여 적의 방어율 30% 감소\n재사용 대기시간 : 10초";
            break;
        case 20:
            rep = "무기 간의 흐름을 깨우쳐 웨폰 버라이어티의 효과를 증가시킨다. 웨폰 버라이어티 I의 증가량을 덮어쓴다. 단, 소환 무기 사용 스킬의 데미지 증가 패시브 효과는 덮어쓰지 않고 중첩된다.\n\n무기 교체 시 30초 동안 버프 1스택당 모든 공격 스킬의 최종 데미지 7% 증가, 체인아츠를 제외한 사용 가능 소환 무기 스킬 최대 개수만큼 중첩 가능\n버프 중첩 및 갱신 시 200%의 데미지로 최대 6명의 적을 3번 공격하는 추가타 발생,\n추가타 재발동 대기시간 : 0.25초\n\n[패시브 효과 : 커팅 시미터, 스크래칭 클로, 스로잉 윙대거 데미지 100%p 증가]";
            break;
        case 26:
            rep = "가시 박힌 방망이를 소환하여 머리 위로 가차 없이 내리꽂는다. 3번 연속해서 사용할 수 있으며 방향키와 함께 사용하면 앞으로 전진하며 사용한다. 연속 사용 중 공격 스킬을 사용하면 다음 타수를 사용할 수 없다. 3타째에 맞은 적은 일정시간 동안 혼미 상태 이상에 걸린다.\n\nMP 40 소비,\n1타 : 490%의 데미지로 최대 8명의 적을 6번 공격\n2타 : 610%의 데미지로 최대 8명의 적을 7번 공격\n3타 : 790%의 데미지로 최대 10명의 적을 8번 공격\n단, 공격 받는 적이 스킬의 최대 공격 가능한 몬스터 수보다 적을 때 1명당 데미지 5%[16] 증가, 3타 공격 시 100% 확률로 15초 동안 혼미 상태 이상 효과가 적용되어 적의 공격력 20% 감소\n\n재사용 대기시간 : 12초";
            break;
        case 27:
            rep = "체인을 길게 뽑아 주변에 무한대를 그리며 사정없이 휘두른다. 주변의 적은 체인 채찍이 만들어내는 소용돌이에 빨려 들어와 산산이 부서진다. 공격 적중 시 웨폰 버라이어티의 스택 중첩이 최대치로 고정된다.\n\n공격당 MP 25 소비, 600%의 데미지로 최대 12명의 적을 2번 공격, 최대 6초 동안 지속\n키다운 중에 이동키로 이동 가능\n재사용 대기시간 : 50초";
            break;
        case 28:
            rep = "체인을 순식간에 길게 뽑아 휘둘러 급습한다. 범위 내의 적 중 최대 HP가 가장 높은 적을 급습하여 체인에 결박하고 무자비하게 난타한다. 난타 중에는 웨폰 버라이어티 중첩이 최대치로 유지된다.\n발동 및 공격 도중 무적 상태이나 적이 행동 불가 상태가 되지 않았다면 무적 시간이 감소된다.\n재사용 대기시간 초기화의 효과를 받지 않고 공격을 받은 적은 90초 동안 행동 불가 상태 이상에 저항하여 체인아츠:테이크다운 및 다른 스킬로 인한 행동 불가 상태 이상에 걸리지 않는다.\n\nMP 255 소비, 1명의 적을 300%의 데미지로 2번 공격하며 10초 동안 행동 불가 상태로 만듦, 해당 공격으로 적에게 준 데미지에 따라 행동 불가 지속시간 최대 100% 증가, 적이 행동 불가 상태에 걸리지 않았을 경우 무적 5초 적용\n이후 스킬키 연타 횟수에 따라 공격 강도가 3단계로 나뉘고 각각 묶은 적을 770%/880%/990%의 데미지로 15번 공격 후 최대 10명의 적을 250%/350%/500%의 데미지로 10번 공격하는 마무리 발동\n연속 공격 중 타격에 따라 최대 10명의 적을 600%의 데미지로 4번 공격하는 충격파 발생, 모든 공격은 방어율 80% 추가 무시\n\n재사용 대기시간 : 120초";
            break;
        case 29:
            rep = "무기 간의 흐름을 완전히 깨우쳐 웨폰 버라이어티의 효과를 완성시킨다. 웨폰 버라이어티 II의 증가량을 덮어쓴다. 단, 소환 무기 사용 스킬의 데미지 증가 패시브 효과는 덮어쓰지 않고 중첩된다.\n\n무기 교체 시 30초 동안 버프 1스택당 모든 공격 스킬의 최종 데미지 11% 증가, 체인아츠를 제외한 사용 가능 소환 무기 스킬 최대 개수만큼 중첩 가능, 중첩되는 최종 데미지 간에는 합 적용\n버프 중첩 및 갱신 시 350%의 데미지로 최대 7명의 적을 4번 공격하는 추가타 발생\n추가타 재발동 대기시간 : 0.25초\n\n[패시브 효과 : 커팅 시미터, 스크래칭 클로, 스로잉 윙대거, 슈팅 샷건, 슬래싱 나이프, 릴리싱 봄 데미지 170%p 증가]";
            break;
        case 30:
            rep = "상태 이상에 걸린 적에 대해 연구를 통해 더 치명적인 집중 공격을 가한다. 상태 이상에 빠진 적을 공격 시 일정 확률로 출혈 상태 이상을 건다. 위크포인트 어택의 증가량을 덮어쓴다.\n\n일반 몬스터 공격 시 데미지 10% 증가\n상태 이상에 걸린 적 공격 시 크리티컬 확률 2%, 크리티컬 데미지 10% 증가, 상태 이상 최대 10개까지 적용\n50% 확률로 10초 동안 1초당 110% 데미지의 출혈 상태 이상을 걺";
            break;
        case 32:
            rep = "다양한 무기를 다룰 수 있는 진정한 프로페셔널의 모습을 보여준다. 웨폰 버라이어티 효과가 증가하며, 공격 스킬이 사용된 후 추가 타격이 발동된다.\n재사용 대기시간 초기화의 효과를 받지 않는다.\n\nMP 500 소비, 30초 동안 웨폰 버라이어티의 최종 데미지 증가량 2배로 적용\n소환 무기 교체 사용 및 공격 적중 시 255% 데미지로 최대 6명의 적을 3번 공격하는 폭발 생성\n\n재사용 대기시간 : 180초";
            break;
        case 33:
            rep = "";
            break;
    }
    return rep;
};
skc.getskillimage1Cadena = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "https://i.imgur.com/EuHZcud.png";
            break;
        case 1:
            rep = "https://i.imgur.com/0Y7kDcn.png";
            break;
        case 2:
            rep = "https://i.imgur.com/NoklUuw.png";
            break;
        case 3:
            rep = "https://i.imgur.com/Oih1sfL.png";
            break;
        case 4:
            rep = "";
            break;
        case 5:
            rep = "https://i.imgur.com/CTJCRcC.png";
            break;
        case 6:
            rep = "https://i.imgur.com/Oa9PpMz.png";
            break;
        case 7:
            rep = "https://i.imgur.com/NN2gsyF.png";
            break;
        case 8:
            rep = "https://i.imgur.com/WtHxRNm.png";
            break;
        case 9:
            rep = "";
            break;
        case 10:
            rep = "";
            break;
        case 11:
            rep = "https://i.imgur.com/bYKwsH1.png";
            break;
        case 12:
            rep = "https://i.imgur.com/K8NBEpa.png";
            break;
        case 13:
            rep = "https://i.imgur.com/3T6998l.png";
            break;
        case 14:
            rep = "https://i.imgur.com/JoGeTPp.png";
            break;
        case 15:
            rep = "";
            break;
        case 16:
            rep = "https://i.imgur.com/CTBRR7V.png";
            break;
        case 17:
            rep = "https://i.imgur.com/JJIuBYv.png";
            break;
        case 18:
            rep = "https://i.imgur.com/cVguLmP.png";
            break;
        case 19:
            rep = "https://i.imgur.com/vzM5rVd.png";
            break;
        case 20:
            rep = "https://i.imgur.com/HtQmpBj.png";
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
            rep = "https://i.imgur.com/MPL6diV.png";
            break;
        case 25:
            rep = "https://i.imgur.com/lNySmxB.png";
            break;
        case 26:
            rep = "https://i.imgur.com/Ja7d99p.png";
            break;
        case 27:
            rep = "https://i.imgur.com/VcA9BBI.png";
            break;
        case 28:
            rep = "https://i.imgur.com/kQmPNbP.png";
            break;
        case 29:
            rep = "https://i.imgur.com/SjxazQr.png";
            break;
        case 30:
            rep = "https://i.imgur.com/LkGW7z4.png";
            break;
        case 31:
            rep = "";
            break;
        case 32:
            rep = "https://i.imgur.com/rgFuX5K.png";
            break;
        case 33:
            rep = "https://i.imgur.com/WrgKmmg.png";
            break;
        case 34:
            rep = "https://i.imgur.com/XYnjAUg.png";
            break;
        case 35:
            rep = "";
            break;
    }
    return rep;
};
skc.getskillimage2Cadena = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "https://i.imgur.com/iaJukbX.png";
            break;
        case 1:
            rep = "https://i.imgur.com/agbqM0J.png";
            break;
        case 2:
            rep = "https://i.imgur.com/RFKF7Eb.png";
            break;
        case 3:
            rep = "https://i.imgur.com/0mSoDyY.png";
            break;
        case 4:
            rep = "https://i.imgur.com/ZmapOKf.png";
            break;
        case 5:
            rep = "https://i.imgur.com/gcB6nvN.png";
            break;
        case 6:
            rep = "https://i.imgur.com/F7gh2yh.png";
            break;
        case 7:
            rep = "https://i.imgur.com/fNLGb0I.png";
            break;
        case 8:
            rep = "https://i.imgur.com/W3fJElR.png";
            break;
        case 9:
            rep = "https://i.imgur.com/zu17YnT.png";
            break;
        case 10:
            rep = "https://i.imgur.com/ae1Qi8Q.png";
            break;
        case 11:
            rep = "https://i.imgur.com/UmjUeml.png";
            break;
        case 12:
            rep = "https://i.imgur.com/Ikt8NfP.png";
            break;
        case 13:
            rep = "https://i.imgur.com/sPMZM8H.png";
            break;
        case 14:
            rep = "https://i.imgur.com/RrBNMZs.png";
            break;
        case 15:
            rep = "https://i.imgur.com/dTMdIQN.png";
            break;
        case 16:
            rep = "https://i.imgur.com/FTWV8yt.png";
            break;
        case 17:
            rep = "https://i.imgur.com/EUqIGGl.png";
            break;
        case 18:
            rep = "https://i.imgur.com/dePsYyZ.png";
            break;
        case 19:
            rep = "https://i.imgur.com/jCowaNw.png";
            break;
        case 20:
            rep = "https://i.imgur.com/klx9RMp.png";
            break;
        case 21:
            rep = "https://i.imgur.com/jiXqzIn.png";
            break;
        case 22:
            rep = "https://i.imgur.com/Z8XnQH8.png";
            break;
        case 23:
            rep = "https://i.imgur.com/UZY8ywv.png";
            break;
        case 24:
            rep = "https://i.imgur.com/B71to3i.png";
            break;
        case 25:
            rep = "https://i.imgur.com/N047AJe.png";
            break;
        case 26:
            rep = "https://i.imgur.com/zLb2kgn.png";
            break;
        case 27:
            rep = "https://i.imgur.com/vuZ3O7w.png";
            break;
        case 28:
            rep = "https://i.imgur.com/i6KKKF1.png";
            break;
        case 29:
            rep = "https://i.imgur.com/Q4jxxlR.png";
            break;
        case 30:
            rep = "https://i.imgur.com/hlO4zim.png";
            break;
        case 31:
            rep = "https://i.imgur.com/xgTnTEC.png";
            break;
        case 32:
            rep = "https://i.imgur.com/QVjLuDI.png";
            break;
        case 33:
            rep = "https://i.imgur.com/g5cjlwn.png";
            break;
        case 34:
            rep = "https://i.imgur.com/EwJIlid.png";
            break;
        case 35:
            rep = "";
            break;
    }
    return rep;
};

module.exports = skc;