const skar = {};

skar.getskillAran = function (skillname){
    var arret = -1;
    switch(skillname){
        case "컴뱃 스탭":
        case "컴뱃스탭":
        case "스탭":
        case "이동기":
            arret = 0;
            break;
        case "되찾은 기억":
        case "되찾은기억":
        case "기억":
            arret = 1;
            break;
        case "콤보킬 어드밴티지":
        case "콤보킬어드밴티지":
        case "콤보킬":
        case "링크스킬":
        case "링크":
            arret = 2;
            break;
        case "콤보 어빌리티":
        case "콤보어빌리티":
        case "어빌리티":
            arret = 3;
            break;
        case "스매시 스윙":
        case "스매시스윙":
            arret = 4;
            break;
        case "스매시 웨이브":
        case "스매시웨이브":
        case "웨이브":
            arret = 5;
            break;
        case "바디 프레셔":
        case "바디프레셔":
        case "바프":
        case "프레셔":
            arret = 6;
            break;
        case "파이널 차지":
        case "파이널차지":
        case "파차":
            arret = 7;
            break;
        case "파이널 토스":
        case "파이널토스":
        case "파토":
        case "토스":
            arret = 8;
            break;
        case "롤링 스핀":
        case "롤링스핀":
        case "롤링":
        case "스핀":
            arret = 9;
            break;
        case "드레인":
        case "피흡":
            arret = 10;
            break;
        case "스노우 차지":
        case "스노우차지":
        case "스차":
            arret = 11;
            break;
        case "다이나믹 마스터리 I":
        case "다이나믹 마스터리 1":
        case "다이나믹마스터리I":
        case "다이나믹마스터리1":
        case "다이나믹I":
        case "다이나믹1":
        case "마스터리I":
        case "마스터리1":
            arret = 12;
            break;
        case "스윙 연구 I":
        case "스윙 연구 1":
        case "스윙연구I":
        case "스윙연구1":
        case "스윙I":
        case "스윙1":
            arret = 13;
            break;
        case "피지컬 트레이닝":
        case "피지컬트레이닝":
        case "피지컬":
        case "트레이닝":
            arret = 14;
            break;
        case "어드밴스드 콤보 어빌리티":
        case "어드밴스드콤보어빌리티":
        case "어드밴스드콤보":
        case "어콤어":
        case "어콤":
            arret = 15;
            break;
        case "에어로 스윙":
        case "에어로스윙":
        case "에어로":
        case "에스":
            arret = 16;
            break;
        case "아드레날린 부스트 액티베이트":
        case "아드레날린부스트 액티베이트":
        case "아드레날린부스트액티베이트":
        case "부스트액티베이트":
        case "액티베이트":
        case "분노조절":
        case "아부액":
            arret = 17;
            break;
        case "아드레날린 부스트":
        case "아드레날린부스트":
        case "아드레날린":
        case "아드":
        case "부스트":
        case "아부":
            arret = 18;
            break;
        case "파이널 블로우":
        case "파이널블로우":
        case "파블":
        case "곰돌이":
        case "곰발바닥":
            arret = 19;
            break;
        case "저지먼트":
        case "저지":
            arret = 20;
            break;
        case "게더링 캐쳐":
        case "게더링캐쳐":
        case "게더링":
        case "캐쳐":
            arret = 21;
            break;
        case "블레싱 마하":
        case "블레싱마하":
        case "블레싱":
        case "블마":
            arret = 22;
            break;
        case "마이트":
            arret = 23;
            break;
        case "클리빙 어택":
        case "클리빙어택":
        case "클리빙":
        case "클어":
            arret = 24;
            break;
        case "비욘더":
            arret = 25;
            break;
        case "부스트 엔드-스톰 오브 피어":
        case "부스트엔드 스톰오브피어":
        case "부스트엔드스톰오브피어":
        case "스톰오브피어":
        case "스톰":
            arret = 26;
            break;
        case "부스트 엔드-헌터즈 타겟팅":
        case "부스트엔드 헌터즈타겟팅":
        case "부스트엔드헌터즈타겟팅":
        case "헌터즈타겟팅":
        case "헌터즈":
        case "헌터":
        case "헌타":
            arret = 27;
            break;
        case "하이 디펜스":
        case "하이디펜스":
        case "디펜스":
        case "하디":
            arret = 28;
            break;
        case "스위프트 무브":
        case "스위프트무브":
        case "스위프트":
        case "스무":
            arret = 29;
            break;
        case "다이나믹 마스터리 II":
        case "다이나믹 마스터리 2":
        case "다이나믹마스터리II":
        case "다이나믹마스터리2":
        case "다이나믹II":
        case "다이나믹2":
        case "마스터리II":
        case "마스터리2":
            arret = 30;
            break;
        case "스윙 연구 II":
        case "스윙 연구 2":
        case "스윙연구II":
        case "스윙연구2":
        case "스윙II":
        case "스윙2":
            arret = 31;
            break;
        case "아드레날린 제네레이터":
        case "아드레날린제네레이터":
        case "제네레이터":
        case "아제":
        case "분노조절장애":
        case "분조장":
            arret = 32;
            break;
        case "마하의 영역":
        case "마하의영역":
        case "영역":
        case "마영":
            arret = 33;
            break;
        case "인스톨 마하":
        case "인스톨마하":
        case "인스톨":
        case "인마":
            arret = 34;
            break;
        case "브랜디쉬 마하":
        case "브랜디쉬마하":
        case "브랜디쉬":
        case "브마":
            arret = 35;
            break;
        case "펜릴 크래시":
        case "펜릴크래시":
        case "크래시":
        case "펜크":
            arret = 36;
            break;
        case "블리자드 템페스트":
        case "블리자드템페스트":
        case "블리자드":
        case "템페스트":
        case "블템":
            arret = 37;
            break;
    }
    return arret;
};
skar.getskillnameAran = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "컴뱃 스탭";
            break;
        case 1:
            rep = "되찾은 기억";
            break;
        case 2:
            rep = "콤보킬 어드밴티지";
            break;
        case 3:
            rep = "콤보 어빌리티";
            break;
        case 4:
            rep = "스매시 스윙";
            break;
        case 5:
            rep = "스매시 웨이브";
            break;
        case 6:
            rep = "바디 프레셔";
            break;
        case 7:
            rep = "파이널 차지";
            break;
        case 8:
            rep = "파이널 토스";
            break;
        case 9:
            rep = "롤링 스핀";
            break;
        case 10:
            rep = "드레인";
            break;
        case 11:
            rep = "스노우 차지";
            break;
        case 12:
            rep = "다이나믹 마스터리 I";
            break;
        case 13:
            rep = "스윙 연구 I";
            break;
        case 14:
            rep = "피지컬 트레이닝";
            break;
        case 15:
            rep = "어드밴스드 콤보 어빌리티";
            break;
        case 16:
            rep = "에어로 스윙";
            break;
        case 17:
            rep = "아드레날린 부스트 액티베이트";
            break;
        case 18:
            rep = "아드레날린 부스트";
            break;
        case 19:
            rep = "파이널 블로우";
            break;
        case 20:
            rep = "저지먼트";
            break;
        case 21:
            rep = "게더링 캐쳐";
            break;
        case 22:
            rep = "블레싱 마하";
            break;
        case 23:
            rep = "마이트";
            break;
        case 24:
            rep = "클리빙 어택";
            break;
        case 25:
            rep = "비욘더";
            break;
        case 26:
            rep = "부스트 앤드-스톰 오브 피어";
            break;
        case 27:
            rep = "부스트 엔드-헌터즈 타겟팅";
            break;
        case 28:
            rep = "하이 디펜스";
            break;
        case 29:
            rep = "스위프트 무브";
            break;
        case 30:
            rep = "다이나믹 마스터리 II";
            break;
        case 31:
            rep = "스윙 연구 II";
            break;
        case 32:
            rep = "아드레날린 제네레이터";
            break;
        case 33:
            rep = "마하의 영역";
            break;
        case 34:
            rep = "인스톨 마하";
            break;
        case 35:
            rep = "브랜디쉬 마하";
            break;
        case 36:
            rep = "펜릴 크래시";
            break;
        case 37:
            rep = "블리자드 템페스트";
            break;
    }
    return rep;
};
skar.getskilldesc1Aran = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "짧은 거리 이동/ 이동속도15, 최대이동속도상한 20";
            break;
        case 1:
            rep = "공격력 5%, 방어력 300, 이동속도 10 증가";
            break;
        case 2:
            rep = "콤보킬 구슬 경험치 획득량 650% 추가 획득";
            break;
        case 3:
            rep = "스탠스 50%/ 콤보 카운트 50당 공2, 방20, 이속3";
            break;
        case 4:
            rep = "최대 6명의 적을 150% 데미지로 2번 공격";
            break;
        case 5:
            rep = "500% 데미지로 최대 6명의 적을 1번 공격/ 쿨3초";
            break;
        case 6:
            rep = "500%의 반사 데미지";
            break;
        case 7:
            rep = "10명,300% 공격, 전방이동/ 커맨드사용시 10초 기절";
            break;
        case 8:
            rep = "10명 띄우며 550% 공격/ 직접 띄운상대 공격시 100%p";
            break;
        case 9:
            rep = "10명,555%,3번 공격/ 커맨드사용시 5초 기절";
            break;
        case 10:
            rep = "적공격시 HP 1% 회복/ 최대HP 10% 증가";
            break;
        case 11:
            rep = "하단 참조";
            break;
        case 12:
            rep = "커맨드 입력 시 해당 스킬 데미지 5%p 증가";
            break;
        case 13:
            rep = "스매쉬스윙 데미지 200%p/ 이후 12초간 스킬 최종뎀 10%";
            break;
        case 14:
            rep = "힘 30, 민첩성 30 증가";
            break;
        case 15:
            rep = "스탠스 50%, 공10, 내성40, 크확20%, 크뎀10%";
            break;
        case 16:
            rep = "스매쉬 스윙 공중 사용 가능";
            break;
        case 17:
            rep = "1,000 콤보 도달 후 300초 동안 사용 가능";
            break;
        case 18:
            rep = "하단 참조";
            break;
        case 19:
            rep = "6명,285%,5번 공격/ 방무15%";
            break;
        case 20:
            rep = "10명,380%,4번 공격/ 10초긴 빙결/ 6초간 초당 200% 도트뎀";
            break;
        case 21:
            rep = "10명 끌어당기며 170%,2번 공격/ 쿨5초";
            break;
        case 22:
            rep = "200초 동안 파티원의 공격력 30, 마력 30 증가";
            break;
        case 23:
            rep = "공40, 방215/ 넉백 필요 데미지 10%로 감소";
            break;
        case 24:
            rep = "몬스터의 물리 방어율 40% 무시, 데미지 10% 증가";
            break;
        case 25:
            rep = "하단 참조";
            break;
        case 26:
            rep = "10초간 키다운가능, 12명,650%,1번 공격.";
            break;
        case 27:
            rep = "키다운 및 타겟선택. 종료시 1명,1070%,15번 참격 7번발동";
            break;
        case 28:
            rep = "적에게 입는 데미지 40% 감소, HP 20%, 방어력 300 증가";
            break;
        case 29:
            rep = "스매쉬웨이브, 파이널차지, 파이널토스, 롤링스핀, 저지먼트";
            break;
        case 30:
            rep = "커맨드를 입력하여 스킬 공격 시 해당 스킬 데미지 20%p 증가";
            break;
        case 31:
            rep = "스매쉬스윙 데미지 250%p/ 이후 20초간 스킬 최종뎀 15%";
            break;
        case 32:
            rep = "즉시 아드레날린 부스트 상태가 된다.";
            break;
        case 33:
            rep = "하단 참조";
            break;
        case 34:
            rep = "하단 참조";
            break;
        case 35:
            rep = "15명,1320%,15번 참격 2회발동/ 쿨20초 (인스톨시 50%감소)";
            break;
        case 36:
            rep = "10명,650%,7번 공격/ 추가크확 100%, 방무50%/ 비욘더3타 이후";
            break;
        case 37:
            rep = "하단 참조";
            break;
    }
    return rep;
};
skar.getskilldesc2Aran = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "[→→ 또는 점프 중 점프키나 →→ 입력]";
            break;
        case 1:
            rep = "잠재능력의 공격력%와는 궁합이 좋지 않다.";
            break;
        case 2:
            rep = "아란의 링크 스킬";
            break;
        case 3:
            rep = "최대 10회까지 중첩/ 최대 콤보 누적량 1000";
            break;
        case 4:
            rep = "[공격키 연타]";
            break;
        case 5:
            rep = "[↓ → + 공격키]/ 발동효과 : 발사거리 증가";
            break;
        case 6:
            rep = "온오프 스킬";
            break;
        case 7:
            rep = "[← ↓ → + 공격키] (반대쪽은 역순)";
            break;
        case 8:
            rep = "[↑ + 공격키]/ 발동효과 : 점프 높이증가";
            break;
        case 9:
            rep = "[ ↓ ↑ + 공격]";
            break;
        case 10:
            rep = "온오프 스킬";
            break;
        case 11:
            rep = "온오프 스킬";
            break;
        case 12:
            rep = "스킬의 타수마다 적용";
            break;
        case 13:
            rep = "스매쉬스윙 이후 스킬사용시 4명,100%,2번 공격 잔상생성";
            break;
        case 14:
            rep = "-";
            break;
        case 15:
            rep = "콤보카운트 50당 크확3%, 공2 추가증가, 10회까지 중첩";
            break;
        case 16:
            rep = "스매쉬 스윙 데미지 100%p 증가";
            break;
        case 17:
            rep = "부스트 시간내 미발동시 부스트 비활성화, 콤보 800으로 감소";
            break;
        case 18:
            rep = "상태가 종료되면 콤보가 500으로 감소한다.";
            break;
        case 19:
            rep = "[↓ + 공격키]/ 발동효과 : 슈퍼스탠스";
            break;
        case 20:
            rep = "[↑ ↓ / ↑ → / ↑ ← + 공격키]/ 발동효과 : 빙결";
            break;
        case 21:
            rep = "[↑ ↑ + 공격키]/ 발동효과 : 스킬사용중 사용가능";
            break;
        case 22:
            rep = "마하!";
            break;
        case 23:
            rep = "보스 몬스터에게는 적용되지 않는다";
            break;
        case 24:
            rep = "-";
            break;
        case 25:
            rep = "파이널 블로우를 사용한 이후에 사용 가능";
            break;
        case 26:
            rep = "[↓ ← → + 공격키 키다운]/ 부스트 상태당 1회만 사용가능";
            break;
        case 27:
            rep = "[↓→↓ & ↓←↓ + 공격키 키다운]/ 차지 초당 데미지 100%p, 최대5초";
            break;
        case 28:
            rep = "패시브 스킬 레벨 1 증가 효과와의 궁합이 좋다.";
            break;
        case 29:
            rep = "파이널블로우의 데미지 60%p 증가";
            break;
        case 30:
            rep = "-";
            break;
        case 31:
            rep = "스매쉬스윙 이후 스킬사용시 6명,280%,5번 공격 잔상생성";
            break;
        case 32:
            rep = "재사용 대기시간 240초";
            break;
        case 33:
            rep = "유일한 능동적인 무적기";
            break;
        case 34:
            rep = "지속 시간 동안 플레이어가 장착한 장비 아이템이 마하로 바뀜";
            break;
        case 35:
            rep = "[↓↓ + 공격키]/ 발동효과: 슈퍼스탠스, 공무공반무시/ 보뎀 20%";
            break;
        case 36:
            rep = "스킬의 최대공격몹수보다 적을때 1명당 뎀6%, 곱 적용";
            break;
        case 37:
            rep = "모두 상대해 주지!";
            break;    
    }
    return rep;
};
skar.getskilldesc3Aran = function (skillcode){
    rep = "";
    switch(skillcode){   
        case 11:
            rep = "데미지를 영구적으로 증가시키며, 스킬 사용 시 일정 시간 동안 폴암에 얼음 정령의 힘을 불어넣는다.\n\nMP 33을 소비, 공격 시 20초 동안 적의 이동속도 40 감소, 이동속도가 감소된 적을 공격했을 때 데미지 10% 증가, 보스에게도 적용되나 이동속도 감소 효과와 지속시간이 절반으로 감소\n[패시브 효과 : 데미지 10% 증가]";
            break;     
        case 18:
            rep = "1000콤보 도달 후 일정 시간 안에 아드레날린 부스트 액티베이트를 사용해 진입 : 15초 동안 부스트 엔드/소환수/추가 타격 스킬을 제외한 아란의 공격 스킬 데미지 150%p, 공격 횟수 2회, 최대 공격 가능한 몬스터 수 5 증가\n영구적으로 아란의 공격 스킬 데미지 100%p 증가\n\n스매쉬 스윙(1타) : 950% 데미지로 4번 공격\n스매쉬 웨이브 : 늑대 모양의 발사체로 변경되며, 전방, 위아래 대각선으로 투사체가 각 1개씩 날아간다. 810%의 데미지로 3번 공격\n파이널 차지 : 돌진 거리만큼 빙결지대 생성. 피격당한 적은 빙결 상태 이상에 걸린다. 610%의 데미지로 3번 공격\n파이널 토스 : 860%의 데미지로 3번 공격하면서 점프\n롤링 스핀 : 865%의 데미지로 5번 공격\n파이널 블로우 : 350%로 4번 공격하는 파동 발사, 595%의 데미지로 7번 공격\n게더링 캐쳐 : 420%의 데미지로 4번 공격\n저지먼트 : 720%의 데미지로 6번 공격\n비욘더 : 1타 535%, 2타 550%, 3타 565%의 데미지로 8번 공격, 전후방에 400%로 5번 공격하는 파동 방출\n마하의 영역 : 폴암이 떨어질 때 1050%의 데미지로 7번 타격, 폴암 설치 이후 10초 동안 750%의 데미지로 3번 지속 타격";
            break;
        case 25:
            rep = "MP 40 소비, 6명의 적에게 285% 데미지로 5번 공격. 이후 스킬키 연타를 통한 추가 조작으로 최대 3타까지 공격 가능.\n\n2타 : 300% 데미지로 5번 공격\n3타 : 315% 데미지로 5번 공격.\n\n단, 스킬 사용 시 공격 받는 적이 스킬의 최대 공격 가능한 몬스터 수보다 적을 때 1명 당 데미지 6%씩 증가, 증가되는 데미지 간에는 곱 적용\n추가 크리티컬 확률 100%, 몬스터 방어율 30% 추가 무시";
            break;
        case 33:
            rep = "리엔에 잠들어 있는 거대 폴암 마하를 소환한다. 소환한 마하는 지상에 떨어지며 넓은 영역에 피해를 준다. 소환되어 있는 시간 동안 근처 적에게 지속적으로 피해를 입히고, 주변 파티원의 상태 이상을 해제하며 HP, MP를 회복시켜준다.\n\nMP 500 소비, 시전 후 2초 동안 무적, 최대 15명의 적을 800% 데미지로 5번 공격. 이후 8초 동안 범위 내의 적을 500% 데미지로 3번 공격, 1초마다 파티원의 일부 상태 이상 해제 및 HP/MP를 20% 회복\n\n재사용 대기시간 90초";
            break;
        case 34:
            rep = "폴암 마하의 힘이 깃들어 강력한 힘을 발휘한다.\n\nMP 1000 소비, 사용 즉시 80콤보 증가, 40초 동안 마하의 힘이 깃들어 공격력 35% 증가, 공격 스킬 사용 시 3초마다 최대 10명의 적을 990%의 데미지로 5번 공격하는 눈보라 발생\n\n재사용 대기시간 : 90초";
            break;
        case 37:
            rep = "MP 1200 소비, 최대 12명의 적을 1760%의 데미지로 8번 공격 후 10초 동안 행동 불가 상태 적용, 해당 공격으로 준 데미지에 따라 행동 불가 지속시간 최대 100% 증가, 이후 20초 동안 일정 시간마다 최대 10명의 적에게 다이어 울프의 저주를 거는 오라 발동, 스킬 재사용하여 즉시 종료 가능\n\n다이어 울프의 저주 : 10초 동안 지속, 공격 적중 시 저주에 걸린 적 최대 15명에게 1045%의 데미지의 얼음덩어리로 4번 공격, 저주는 최대 6번까지 누적 가능하고 그에 비례해 얼음덩어리 1개씩 증가\n\n재사용 대기시간 : 180초";
            break;
    }
    return rep;
};
skar.getskillimage1Aran = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "https://i.imgur.com/DGe3V66.png";
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
            rep = "https://i.imgur.com/grjvxws.png";
            break;
        case 5:
            rep = "https://i.imgur.com/KTyXlyA.png";
            break;
        case 6:
            rep = "https://i.imgur.com/PnD1LXo.png";
            break;
        case 7:
            rep = "https://i.imgur.com/a29FKre.png";
            break;
        case 8:
            rep = "https://i.imgur.com/3oreAB4.png";
            break;
        case 9:
            rep = "https://i.imgur.com/Cew2pwK.png";
            break;
        case 10:
            rep = "https://i.imgur.com/CCmJiKC.png";
            break;
        case 11:
            rep = "https://i.imgur.com/hnod5io.png";
            break;
        case 12:
            rep = "";
            break;
        case 13:
            rep = "https://i.imgur.com/l7QY6Q5.png";
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
            rep = "https://i.imgur.com/JuQAns5.png";
            break;
        case 19:
            rep = "https://i.imgur.com/7Ne4Rab.png";
            break;
        case 20:
            rep = "https://i.imgur.com/IfVMgmB.png";
            break;
        case 21:
            rep = "https://i.imgur.com/koKwvS5.png";
            break;
        case 22:
            rep = "https://i.imgur.com/3lW72Pk.png";
            break;
        case 23:
            rep = "";
            break;
        case 24:
            rep = "";
            break;
        case 25:
            rep = "https://i.imgur.com/WCpb3vA.png";
            break;
        case 26:
            rep = "https://i.imgur.com/Dxt2TBE.png";
            break;
        case 27:
            rep = "https://i.imgur.com/FjK2jpv.png";
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
            rep = "https://i.imgur.com/GMFpAFg.png";
            break;
        case 32:
            rep = "";
            break;
        case 33:
            rep = "https://i.imgur.com/XwyI0mo.png";
            break;
        case 34:
            rep = "https://i.imgur.com/VbUvkzB.png";
            break;
        case 35:
            rep = "https://i.imgur.com/PRzj4pa.png";
            break;
        case 36:
            rep = "https://i.imgur.com/q3au7Cx.png";
            break;
        case 37:
            rep = "https://i.imgur.com/aIAzFK5.png";
            break;
    }
    return rep;
};
skar.getskillimage2Aran = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "https://i.imgur.com/SaLkKlp.png";
            break;
        case 1:
            rep = "https://i.imgur.com/QVoXWIs.png";
            break;
        case 2:
            rep = "https://i.imgur.com/KxbHLnL.png";
            break;
        case 3:
            rep = "https://i.imgur.com/zpNehEc.png";
            break;
        case 4:
            rep = "https://i.imgur.com/6a7fWVi.png";
            break;
        case 5:
            rep = "https://i.imgur.com/VVn5vgG.png";
            break;
        case 6:
            rep = "https://i.imgur.com/xmAgjd9.png";
            break;
        case 7:
            rep = "https://i.imgur.com/jOBQdpn.png";
            break;
        case 8:
            rep = "https://i.imgur.com/l5QNFcC.png";
            break;
        case 9:
            rep = "https://i.imgur.com/sphoyeO.png";
            break;
        case 10:
            rep = "https://i.imgur.com/I8u0u2n.png";
            break;
        case 11:
            rep = "https://i.imgur.com/5iz5jwU.png";
            break;
        case 12:
            rep = "https://i.imgur.com/ZJOaBxS.png";
            break;
        case 13:
            rep = "https://i.imgur.com/FQjcpBj.png";
            break;
        case 14:
            rep = "https://i.imgur.com/AixTSOw.png";
            break;
        case 15:
            rep = "https://i.imgur.com/AmNfWCA.png";
            break;
        case 16:
            rep = "https://i.imgur.com/Z5fUNQO.png";
            break;
        case 17:
            rep = "https://i.imgur.com/MI32mhp.png";
            break;
        case 18:
            rep = "https://i.imgur.com/4NVRdyY.png";
            break;
        case 19:
            rep = "https://i.imgur.com/opaUQxJ.png";
            break;
        case 20:
            rep = "https://i.imgur.com/uG8OSY2.png";
            break;
        case 21:
            rep = "https://i.imgur.com/QG3VpBX.png";
            break;
        case 22:
            rep = "https://i.imgur.com/Scd2A4Q.png";
            break;
        case 23:
            rep = "https://i.imgur.com/j8teivN.png";
            break;
        case 24:
            rep = "https://i.imgur.com/HzAe644.png";
            break;
        case 25:
            rep = "https://i.imgur.com/zBJRo2A.png";
            break;
        case 26:
            rep = "https://i.imgur.com/k2erje8.png";
            break;
        case 27:
            rep = "https://i.imgur.com/7uWEhvR.png";
            break;
        case 28:
            rep = "https://i.imgur.com/GPCabTM.png";
            break;
        case 29:
            rep = "https://i.imgur.com/geDofCz.png";
            break;
        case 30:
            rep = "https://i.imgur.com/DD4wkXE.png";
            break;
        case 31:
            rep = "https://i.imgur.com/WAnMDcE.png";
            break;
        case 32:
            rep = "https://i.imgur.com/sqPdxAa.png";
            break;
        case 33:
            rep = "https://i.imgur.com/Ii3ea79.png";
            break;
        case 34:
            rep = "https://i.imgur.com/qnOYHo6.png";
            break;
        case 35:
            rep = "https://i.imgur.com/iflb6db.png";
            break;
        case 36:
            rep = "https://i.imgur.com/tIBhF7c.png";
            break;
        case 37:
            rep = "https://i.imgur.com/xFcjO5J.png";
            break;
    }
    return rep;
};

module.exports = skar;