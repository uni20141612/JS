const skm = {};

skm.getskillMechanic = function (skillname){
    var mret = -1;
    switch(skillname){
        case "멀티플 옵션 : M-FL":
        case "멀티플옵션 : M-FL":
        case "멀티플옵션:M-FL":
        case "멀티플옵션MFL":
        case "멀티플옵션":
        case "멀티플":
        case "멀옵":
            mret = 0;
            break;
        case "마이크로 미사일 컨테이너":
        case "마이크로미사일컨테이너":
        case "마이크로미사일":
        case "컨테이너":
        case "마미컨":
            mret = 1;
            break;
        case "메탈아머 전탄발사":
        case "메탈아머전탄발사":
        case "전탄발사":
        case "메전":
            mret = 2;
            break;
        case "메카 캐리어":
        case "메카캐리어":
        case "캐리어":
        case "메캐":
            mret = 3;
            break;
        case "제트 부스터":
        case "제트부스터":
        case "대쉬":
        case "대시":
        case "이동기":
        case "윗점":
            mret = 4;
            break;
        case "히든 피스":
        case "히든피스":
        case "염색":
            mret = 5;
            break;
        case "메탈아머 : 휴먼":
        case "메탈아머:휴먼":
        case "메탈아머 휴먼":
        case "메탈아머휴먼":
        case "휴먼":
            mret = 6;
            break;
        case "드릴 러쉬":
        case "드릴러쉬":
        case "드릴":
        case "밀격기":
        case "밀격":
            mret = 7;
            break;
        case "로켓 부스터":
        case "로켓부스터":
            mret = 8;
            break;
        case "호밍 미사일":
        case "호밍미사일":
        case "호밍":
            mret = 9;
            break;
        case "오픈 게이트 : GX-9":
        case "오픈게이트 : GX-9":
        case "오픈게이트:GX-9":
        case "오픈 게이트 GX-9":
        case "오픈게이트 GX-9":
        case "오픈게이트GX-9":
        case "오픈 게이트":
        case "오픈게이트":
        case "게이트":
            mret = 10;
            break;
        case "로봇 런처 : RM7":
        case "로봇런처 : RM7":
        case "로봇런처:RM7":
        case "로봇 런처 RM7":
        case "로봇런처 RM7":
        case "로봇런처RM7":
        case "로봇 런처":
        case "로봇런처":
            mret = 11;
            break;
        case "메탈아머 : 탱크":
        case "메탈아머:탱크":
        case "메탈아머 탱크":
        case "메탈아머탱크":
        case "탱크":
            mret = 12;
            break;
        case "서포트 웨이버 : H-EX":
        case "서포트웨이버 : H-EX":
        case "서포트웨이버:H-EX":
        case "서포트 웨이버 H-EX":
        case "서포트웨이버 H-EX":
        case "서포트웨이버H-EX":
        case "서포트 웨이버":
        case "서포트웨이버":
        case "웨이버":
            mret = 13;
            break;
        case "로켓 펀치":
        case "로켓펀치":
        case "펀치":
        case "밀격기2":
        case "밀격2":
            mret = 14;
            break;
        case "오버 튜닝":
        case "오버튜닝":
            mret = 15;
            break;
        case "럭키 다이스":
        case "럭키다이스":
        case "럭다":
        case "다이스":
            mret = 16;
            break;
        case "마그네틱 필드":
        case "마그네틱필드":
        case "마그네틱":
        case "마필":
            mret = 17;
            break;
        case "어드밴스드 호밍 미사일":
        case "어드밴스드 호밍미사일":
        case "어드밴스드호밍미사일":
        case "어호미":
        case "어호밍":
            mret = 18;
            break;
        case "메카닉 디펜스 시스템":
        case "메카닉디펜스 시스템":
        case "메카닉디펜스시스템":
            mret = 19;
            break;
        case "전투 프로그램 셋업":
        case "전투프로그램 셋업":
        case "전투프로그램셋업":
        case "셋업":
            mret = 20;
            break;
        case "매시브 파이어 : SPLASH-F":
        case "매시브파이어 : SPLASH-F":
        case "매시브파이어:SPLASH-F":
        case "매시브 파이어 SPLASH-F":
        case "매시브파이어 SPLASH-F":
        case "매시브파이어SPLASH-F":
        case "매시브 파이어 다수기":
        case "매시브파이어 다수기":
        case "매시브파이어다수기":
        case "다수기":
            mret = 21;
            break;
        case "매시브 파이어 : IRON-B":
        case "매시브파이어 : IRON-B":
        case "매시브파이어:IRON-B":
        case "매시브 파이어 IRON-B":
        case "매시브파이어 IRON-B":
        case "매시브파이어IRON-B":
        case "매시브 파이어 단일기":
        case "매시브파이어 단일기":
        case "매시브파이어단일기":
        case "단일기":
            mret = 22;
            break;
        case "워머신 : 타이탄":
        case "워머신:타이탄":
        case "워머신 타이탄":
        case "워머신타이탄":
        case "타이탄":
            mret = 23;
            break;
        case "서포트 웨이버 강화":
        case "서포트웨이버 강화":
        case "서포트웨이버강화":
        case "웨이버 강화":
        case "웨이버강화":
        case "서웨강":
            mret = 24;
            break;
        case "로봇 팩토리 : RM1":
        case "로봇팩토리 : RM1":
        case "로봇팩토리:RM1":
        case "로봇 팩토리 RM1":
        case "로봇팩토리 RM1":
        case "로봇팩토리RM1":
        case "로봇 팩토리":
        case "로봇팩토리":
            mret = 25;
            break;
        case "호밍 미사일 시스템 연구":
        case "호밍미사일 시스템 연구":
        case "호밍미사일 시스템연구":
        case "호밍미사일시스템연구":
            mret = 26;
            break;
        case "로봇 마스터리":
        case "로봇마스터리":
            mret = 27;
            break;
        case "더블 럭키 다이스":
        case "더블 럭키다이스":
        case "더블럭키다이스":
        case "더럭다":
            mret = 28;
            break;
        case "메탈아머 합금 연구":
        case "메탈아머 합금연구":
        case "메탈아머합금연구":
            mret = 29;
            break;
        case "봄버 타임":
        case "봄버타임":
            mret = 30;
            break;
        case "디스토션 필드":
        case "디스토션필드":
        case "디스토션":
        case "디필":
            mret = 31;
            break;
        case "":
            mret = 32;
            break;
        case "":
            mret = 33;
            break;
    }
    return mret;
};
skm.getskillnameMechanic = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "멀티플 옵션 : M-FL";
            break;
        case 1:
            rep = "마이크로 미사일 컨테이너";
            break;
        case 2:
            rep = "메탈아머 전탄발사";
            break;
        case 3:
            rep = "메카 캐리어";
            break;
        case 4:
            rep = "제트 부스터";
            break;
        case 5:
            rep = "히든 피스";
            break;
        case 6:
            rep = "메탈아머 : 휴먼";
            break;
        case 7:
            rep = "드릴 러쉬";
            break;
        case 8:
            rep = "로켓 부스터";
            break;
        case 9:
            rep = "호밍 미사일";
            break;
        case 10:
            rep = "오픈 게이트 : GX-9";
            break;
        case 11:
            rep = "로봇 런처 : RM7";
            break;
        case 12:
            rep = "메탈아머 : 탱크";
            break;
        case 13:
            rep = "서포트 웨이버 : H-EX";
            break;
        case 14:
            rep = "로켓 펀치";
            break;
        case 15:
            rep = "오버 튜닝";
            break;
        case 16:
            rep = "럭키 다이스";
            break;
        case 17:
            rep = "마그네틱 필드";
            break;
        case 18:
            rep = "어드밴스드 호밍 미사일";
            break;
        case 19:
            rep = "메카닉 디펜스 시스템";
            break;
        case 20:
            rep = "전투 프로그램 셋업";
            break;
        case 21:
            rep = "매시브 파이어 : SPLASH-F";
            break;
        case 22:
            rep = "매시브 파이어 : IRON-B";
            break;
        case 23:
            rep = "워머신 : 타이탄";
            break;
        case 24:
            rep = "서포트 웨이버 강화";
            break;
        case 25:
            rep = "로봇 팩토리 : RM1";
            break;
        case 26:
            rep = "호밍 미사일 시스템 연구";
            break;
        case 27:
            rep = "로봇 마스터리";
            break;
        case 28:
            rep = "더블 럭키 다이스";
            break;
        case 29:
            rep = "메탈아머 합금 연구";
            break;
        case 30:
            rep = "봄버 타임";
            break;
        case 31:
            rep = "디스토션 필드";
            break;
        case 32:
            rep = "";
            break;
        case 33:
            rep = "";
            break;
    }
    return rep;
};
skm.getskilldesc1Mechanic = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "135초간 개틀링포 : 8명,440%,6번 공격, 재발동1.5초/ 쿨200초";
            break;
        case 1:
            rep = "하단 참조";
            break;
        case 2:
            rep = "하단 참조";
            break;
        case 3:
            rep = "70초간 소환/ 최초 함재기 9기 출격, 이후 1기씩 최대 16기";
            break;
        case 4:
            rep = "하단 참조";
            break;
        case 5:
            rep = "영구적으로 메탈아머에 위장색을 입히고, 능력을 강화한다.";
            break;
        case 6:
            rep = "탑승 시 최대 이동속도 20, 공격력 40, 방어력 300 증가";
            break;
        case 7:
            rep = "최대 10명의 적을 150%의 데미지로 공격하며 밀어냄";
            break;
        case 8:
            rep = "착지 시 최대 6명의 적에게 300% 데미지";
            break;
        case 9:
            rep = "하단 참조";
            break;
        case 10:
            rep = "하단 참조";
            break;
        case 11:
            rep = "60초 동안 로봇 런처 설치, 250% 데미지의 포탄 발사";
            break;
        case 12:
            rep = "하단 참조";
            break;
        case 13:
            rep = "하단 참조";
            break;
        case 14:
            rep = "최대 10명의 적을 200%의 데미지로 1번 공격하며 밀어낸다.";
            break;
        case 15:
            rep = "최종 데미지 34%, 크리티컬 확률 20%";
            break;
        case 16:
            rep = "하단 참조";
            break;
        case 17:
            rep = "하단 참조";
            break;
        case 18:
            rep = "호밍 미사일 데미지 500%의 데미지로 증가";
            break;
        case 19:
            rep = "최대 HP 30%, 최대 MP 30%";
            break;
        case 20:
            rep = "<메탈아머 : 휴먼> 이동속도 10 증가";
            break;
        case 21:
            rep = "최대 8명의 적을 390%의 데미지로 4번 공격";
            break;
        case 22:
            rep = "1차 타격 : 6명의 적을 285%의 데미지로 6번 공격";
            break;
        case 23:
            rep = "하단 참조";
            break;
        case 24:
            rep = "나를 포함한 파티원들의 최종 데미지 10% 증가";
            break;
        case 25:
            rep = "하단 참조";
            break;
        case 26:
            rep = "호밍 미사일을 5개 추가 발사";
            break;
        case 27:
            rep = "하단 참조";
            break;
        case 28:
            rep = "하단 참조";
            break;
        case 29:
            rep = "15%로 적의 공격 회피, 회피 실패 시 적 데미지 30% 감소";
            break;
        case 30:
            rep = "하단 참조";
            break;
        case 31:
            rep = "4초 동안 최대 8명의 적을 350% 데미지로 2번 공격";
            break;
        case 32:
            rep = "";
            break;
        case 33:
            rep = "";
            break;
    }
    return rep;
};
skm.getskilldesc2Mechanic = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "미사일 : 8명,650%,8번 미사일 3연속 발사/ 재발동8초";
            break;
        case 1:
            rep = "-";
            break;
        case 2:
            rep = "시전 중에는 감정 표현 중 하나를 한다";
            break;
        case 3:
            rep = "함재기 : 550%,4번 공격후 귀환/ 쿨200초";
            break;
        case 4:
            rep = "메카닉 대쉬 커맨드 잠금 : 마우스 우클릭";
            break;
        case 5:
            rep = "데미지 10% 증가";
            break;
        case 6:
            rep = "최대 HP와 최대 MP 1500 증가, 스탠스 100%";
            break;
        case 7:
            rep = "탱크 모드 사용 불가";
            break;
        case 8:
            rep = "위 방향키와 공격키를 함께 눌러서도 사용할 수 있다.";
            break;
        case 9:
            rep = "호밍 미사일 연기 이펙트 온오프 : 마우스 우클릭";
            break;
        case 10:
            rep = "파티원 이용 가능 모드 온오프 : 마우스 우클릭";
            break;
        case 11:
            rep = "지속시간 경과 시 400%의 데미지로 자폭";
            break;
        case 12:
            rep = "-";
            break;
        case 13:
            rep = "방깎 제외 효과는 범위 근처에 있어야 발동";
            break;
        case 14:
            rep = "밀격기";
            break;
        case 15:
            rep = "몬스터의 방어율 무시 30% 증가";
            break;
        case 16:
            rep = "모험가 해적 제외 유일하게 보유";
            break;
        case 17:
            rep = "설치형 소환수 스킬";
            break;
        case 18:
            rep = "탱크 모드에서는 300%";
            break;
        case 19:
            rep = "방어력 750 증가, 15% 확률로 피해를 무시";
            break;
        case 20:
            rep = "로켓 부스터 반동 거리 감소, 대쉬 지면 상 이동 거리 증가";
            break;
        case 21:
            rep = "탱크 모드에선 해당 스킬키로 탱크에 내장된 무기를 사용 가능하다.";
            break;
        case 22:
            rep = "2차 폭발 : 4명의 적을 350% 데미지로 1번 공격";
            break;
        case 23:
            rep = "무적 겸 광범위 공격기";
            break;
        case 24:
            rep = "자폭 데미지 1100%로 증가, 자동회복 범위 증가.";
            break;
        case 25:
            rep = "공장형 소환수 스킬";
            break;
        case 26:
            rep = "패시브 레벨 1 증가 시 6개";
            break;
        case 27:
            rep = "소환수 강화 패시브";
            break;
        case 28:
            rep = "럭키 다이스 강화 패시브";
            break;
        case 29:
            rep = "영구히 최대 HP 40%와 최대 MP 10% 증가";
            break;
        case 30:
            rep = "호밍 미사일 강화 액티브 버프";
            break;
        case 31:
            rep = "재사용 대기시간 8초";
            break;
        case 32:
            rep = "";
            break;
        case 33:
            rep = "";
            break;
    }
    return rep;
};
skm.getskilldesc3Mechanic = function (skillcode){
    rep = "";
    switch(skillcode){
        case 1:
            rep = "다수의 마이크로 미사일을 발사하는 컨테이너를 사출한다. 마이크로 미사일은 최대 HP가 높은 보스 몬스터를 우선 추적한다.\n\nMP 1000 소비, 최대 15명의 적에게 40발의 마이크로 미사일을 발사하는 컨테이너 사출\n마이크로 미사일은 935%의 데미지로 5번 공격\n\n재사용 대기시간 25초";
            break;
        case 2:
            rep = "메탈 아머의 모든 병기를 사용해 보유 탄환을 모두 한 번에 쏟아 붓는다. 시전 동작 중 무적이지만 이동 및 방향 전환이 불가능하다.\n\n시전 중 호밍 미사일을 사용할 수 있고 멀티 타겟팅이 가능하며 최종 데미지 감소가 없다.\n스킬 종료 후 호밍 미사일을 모두 소모하여 재장전이 필요해 일정 시간 사용할 수 없다.\n\nMP 1500 소비, 최대 10초 동안 키다운 가능하며 전방 15명의 적에게 880%의 데미지로 11번 연속 공격\n\n시전 중 호밍 미사일 사용 시 7개 추가 발사, 봄버 타임과 중첩 가능\n스킬 종료 후 2초 동안 호밍 미사일 사용 불가\n\n재사용 대기시간 200초";
            break;
        case 3:
            rep = "";
            break;
        case 4:
            rep = "부스터를 가동하여 빠르게 이동한다. 공중에서 사용하는 스킬은 부스터 게이지를 사용하며 부스터 게이지는 지상에 착지하면 즉시 회복된다. 제트 부스터는 스킬 매크로에 등록할 수 없다.\n\n부스터 최대치 100, 모든 스킬은 발동 시 MP 8 소비\n더블 액셀레이션 : 부스터 25 소비하며 한번 더 점프, 공중에서 점프키 혹은 스킬키로 사용, 위 방향키와 함께 사용 시 윗 방향으로 점프, 메탈아머를 탑승하지 않은 상태에서도 사용 가능하고 이때는 부스터를 소모하지 않음\n부스터 전개 : 초당 부스터 25 소비하며 일정 시간 체공, 공중에서 아래 방향키와 함께 스킬이나 점프키를 키다운하여 사용\n메카닉 대쉬 : 지상에서도 사용 가능하며 공중에서 사용할 경우 부스터 25 소비, 직선으로 이동, 좌우 방향키를 연속 2번 사용하거나 좌우 방향키와 함께 스킬 사용, 지상에서는 스킬키만 입력하여 사용 가능, 재사용 대기시간 0.3초";            
            break;
        case 9:
            rep = "다수 공격용 호밍 미사일을 발사한다. 호밍 미사일은 조준된 적을 끝까지 따라가서 타격하도록 프로그래밍 되어있다.\n호밍 미사일은 공격 반사 상태의 적을 공격해도 피해를 입지 않고 탱크 모드에서 사용 시 최대 HP가 높은 보스 몬스터를 우선 추적한다.\n호밍 미사일은 다른 스킬로 공격 중에도 함께 사용할 수 있다.\n\nMP 65 소비, 350% 데미지로 최대 4명의 적을 동시 조준 및 타격";
            break;
        case 10:
            rep = "오픈게이트 <GX-9>을 설치한다. 게이트는 동시에 2개까지 설치할 수 있으며, 게이트와 게이트를 통해 자신 및 파티원이 자유롭게 이동할 수 있다. 단, 게이트 간 거리가 너무 멀 경우에는 작동하지 않으며 1회 이용 후 다시 이용하기 위해서 충전 시간이 필요하다.\n\nMP 50 소비, 300초 동안 지속되는 오픈게이트 소환, 1회 이용 후 2초 동안 이용 불가.";
            break;
        case 12:
            rep = "<메탈아머 : 탱크>를 소환하여 탑승한다.\n<메탈아머 : 탱크> 상태에서는 호밍 미사일의 멀티 타겟팅이 가능하나 최종 데미지가 감소한다.\n스킬키를 누르면 탑승하고, 탑승 중 스킬키를 다시 누르면 내릴 수 있다. <메탈아머 : 휴먼>을 탄 상태로 스킬키를 누르면 <메탈아머 : 탱크>로 메탈아머가 전환된다.\n\nMP 50 소비하여 탱크 모드로 전환, 5초당 10의 MP 추가 소비, 일반 공격 100% 데미지\n일반 공격 시 MP 20 소비, 추가 크리티컬 확률 30%\n호밍 미사일의 최종 데미지가 기존의 60%로 감소.";
            break;
        case 13:
            rep = "고정형 다기능 전투 서포트용 로봇 <H-EX>를 소환한다. <H-EX>는 특수한 파동을 이용하여 적의 방어율을 낮추고, 자신을 포함한 주변 파티원의 HP를 회복시킨다. 추가로, 모든 속성 및 상태 이상 내성이 증가한다.\n\nMP 100 소비, 80초 동안 서포트 웨이버 설치, 지속 시간 동안 설치된 맵의 몬스터 방어율 10% 감소, 서포트 웨이버 주변의 자신을 포함한 파티원의 HP 8%를 5초 주기로 자동회복, 지속시간 경과 시 500%의 데미지로 자폭\n\n[패시브 효과 : 상태 이상 내성 40, 모든 속성 내성 40% 증가]";
            break;
        case 16:
            rep = "주사위를 던져 자신의 행운을 시험한다. 주사위의 결과에 따라 일정 시간 동안 랜덤 버프를 획득할 수 있지만, 1이 나올 경우에는 버프를 획득할 수 없고 럭키 다이스의 재사용 대기시간이 감소한다.\n\nMP 60 소비, 주사위 버프 지속시간 180초, 재사용 대기시간 60초\n\n1 : 럭키 다이스 재사용 대기시간 50% 감소\n2 : 방어력 30% 증가\n3 : 공격력 15 증가\n4 : 크리티컬 확률 15% 증가\n5 : 데미지 20% 증가\n6 : 획득 경험치 30% 증가";
            break;
        case 17:
            rep = "3개의 자기장 코일을 설치하여 지속적으로 적을 공격할 수 있는 <마그네틱 필드>를 생성한다. 자기장 코일은 지속시간이 경과하면 스스로 폭발한다.\n자기장 코일이 1개도 설치되어 있지 않고 3개가 한번에 설치되기에 충분한 공간이 있다면 아래 방향키와 함께 사용하여 3개의 자기장 코일을 한 번에 설치할 수 있다.\n마그네틱 필드는 공격 반사 상태의 적을 공격해도 피해를 입지 않고 로봇 마스터리와 마그네틱 필드-퍼시스트를 제외한 소환 지속시간 증가의 효과를 받지 않는다.\n\nMP 75 소비, 자기장 코일을 3개 설치했을 경우 80초 동안 마그네틱 필드 생성, 범위 내 10명의 적들에게 200% 데미지와 함께 기절 효과 적용, 지속시간 경과 시 550%의 데미지로 자폭";
            break;
        case 23:
            rep = "거대로봇 <타이탄>을 소환하여 보다 많은 적이 있는 곳에 미사일 폭격을 가한다. 타이탄을 소환하면 일정 시간 동안 활성화 게이지가 나타나는데, 일반 공격 키를 연타하여 게이지를 충전하면 데미지를 최대 2배까지 증폭시킬 수 있다. 스킬 사용 중에는 무적이다.\n\nMP 400 소비, 최대 15명의 적에게 500% 데미지로 8번 공격. 타이탄에게 근접한 적에게 초당 1300%의 데미지로 2번 공격, 사용 중 무적\n\n재사용 대기시간 60초";
            break;
        case 25:
            rep = "일정 주기로 토이 로봇을 소환하는 로봇 팩토리 <RM1>을 설치한다. 소환된 토이 로봇들은 RM1 주변에서 적을 발견하거나 일정 시간이 경과하면 자폭하여 데미지를 주며, 로봇 팩토리 또한 지속시간이 경과하면 스스로 폭발한다.\n<로봇 팩토리 : RM1>은 공격 반사 상태의 적을 공격해도 피해를 입지 않는다.\n\nMP 100 소비, 60초 동안 로봇 팩토리 설치. 3초마다 500% 데미지의 토이 로봇 3개 소환, 지속시간 경과 시 1000%의 데미지로 자폭";
            break;
        case 27:
            rep = "소환된 로봇의 수에 비례해 데미지가 증가하고 모든 소환 로봇의 공격력과 자폭 데미지, 소환 지속시간이 증가한다. <마그네틱 필드>와 <오픈게이트 : GX-9>는 모두 소환되어야 1대로 취급되며 <로봇 팩토리 : RM1>으로 소환되는 토이 로봇과 <메탈아머>는 해당되지 않는다. 추가로 <로봇 런처 : RM7>의 데미지가 증가한다. 커스텀 모드를 사용하면 로봇 마스터리를 적용 받는 로봇 중 <워머신:타이탄>, <메카 캐리어>를 제외한 로봇이 스킬 이펙트 투명도가 적용되지 않는다.\n\n소환된 로봇 1대당 데미지 5% 증가, 증가하는 데미지 간에는 합적용\n로봇의 최종 데미지와 자폭의 최종 데미지 105% 증가, 5차 스킬을 제외한 스킬의 소환 지속시간 40% 증가\n<로봇 런처 : RM7>의 데미지 135%p 증가";
            break;
        case 28:
            rep = "일정 확률로 주사위 2개를 동시에 던져 자신의 행운을 시험한다. 주사위의 눈이 같을 경우에는 보다 강력한 버프 효과가 적용된다.\n\nMP 60 소비, 50% 확률로 럭키 다이스 사용 시, 더블 럭키 다이스 발동, 주사위 버프 지속시간 180초\n재사용 대기시간 60초\n\n1,1 : 럭키 다이스 재사용 대기시간 50% 감소\n2,2 : 방어력 40% 증가\n3,3 : 공격력 25 증가\n4,4 : 크리티컬 확률 25% 증가\n5,5 : 데미지 30% 증가\n6,6 : 획득 경험치 40% 증가";
            break;
        case 30:
            rep = "메탈아머 에너지 코어의 힘을 순간적으로 집중시켜, 호밍 미사일 순환 체계를 비약적으로 강화시킨다. 이에 따라 발사 범위는 확장되고, 메탈아머 모드에 상관없이 멀티 타겟팅이 가능해지나 데미지가 감소한다.\n\nMP 200 소비, 10초 동안 호밍 미사일 6발 추가 발사\n호밍 미사일의 데미지가 기존의 60%로 감소, <메탈아머 : 탱크>의 데미지 감소와 중첩되지 않음.\n\n재사용 대기시간 100초";
            break;
        case 32:
            rep = "";
            break;
        case 33:
            rep = "";
            break;
    }
    return rep;
};
skm.getskillimage1Mechanic = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "https://i.imgur.com/QomrpRE.png";
            break;
        case 1:
            rep = "https://i.imgur.com/ozsb3WM.png";
            break;
        case 2:
            rep = "https://i.imgur.com/uPUTCYG.png";
            break;
        case 3:
            rep = "https://i.imgur.com/5OxLedW.png";
            break;
        case 4:
            rep = "https://i.imgur.com/XCb60yw.png";
            break;
        case 5:
            rep = "";
            break;
        case 6:
            rep = "";
            break;
        case 7:
            rep = "https://i.imgur.com/cOrdUL8.png";
            break;
        case 8:
            rep = "https://i.imgur.com/rAiSB7C.png";
            break;
        case 9:
            rep = "https://i.imgur.com/L29BupF.png";
            break;
        case 10:
            rep = "https://i.imgur.com/sI6T03T.png";
            break;
        case 11:
            rep = "https://i.imgur.com/yFPoTqY.png";
            break;
        case 12:
            rep = "";
            break;
        case 13:
            rep = "https://i.imgur.com/irlTHqy.png";
            break;
        case 14:
            rep = "https://i.imgur.com/JCiKj7H.png";
            break;
        case 15:
            rep = "";
            break;
        case 16:
            rep = "https://i.imgur.com/39Oyi1d.png";
            break;
        case 17:
            rep = "https://i.imgur.com/6qdNZyr.png";
            break;
        case 18:
            rep = "https://i.imgur.com/kHgYs5h.png";
            break;
        case 19:
            rep = "";
            break;
        case 20:
            rep = "";
            break;
        case 21:
            rep = "https://i.imgur.com/FQFWsp7.png";
            break;
        case 22:
            rep = "https://i.imgur.com/gJ64yEV.png";
            break;
        case 23:
            rep = "https://i.imgur.com/ymCEHEW.png";
            break;
        case 24:
            rep = "https://i.imgur.com/XLAVMqU.png";
            break;
        case 25:
            rep = "https://i.imgur.com/bzIaSsQ.png";
            break;
        case 26:
            rep = "";
            break;
        case 27:
            rep = "";
            break;
        case 28:
            rep = "https://i.imgur.com/ysi4ozS.png";
            break;
        case 29:
            rep = "https://i.imgur.com/0ys3Lw6.png";
            break;
        case 30:
            rep = "https://i.imgur.com/v6QyuVy.png";
            break;
        case 31:
            rep = "https://i.imgur.com/yYVoKWU.png";
            break;
        case 32:
            rep = "";
            break;
        case 33:
            rep = "";
            break;
    }
    return rep;
};
skm.getskillimage2Mechanic = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "https://i.imgur.com/oDEayVo.png";
            break;
        case 1:
            rep = "https://i.imgur.com/o1wzhGk.png";
            break;
        case 2:
            rep = "https://i.imgur.com/LMx40T8.png";
            break;
        case 3:
            rep = "https://i.imgur.com/fwiVR5r.png";
            break;
        case 4:
            rep = "https://i.imgur.com/pjx9M5X.png";
            break;
        case 5:
            rep = "https://i.imgur.com/xm5P4gW.png";
            break;
        case 6:
            rep = "https://i.imgur.com/4JOBWiH.png";
            break;
        case 7:
            rep = "https://i.imgur.com/hqpNDhM.png";
            break;
        case 8:
            rep = "https://i.imgur.com/jKcGRso.png";
            break;
        case 9:
            rep = "https://i.imgur.com/ZJuapHI.png";
            break;
        case 10:
            rep = "https://i.imgur.com/EkEgmXf.png";
            break;
        case 11:
            rep = "https://i.imgur.com/cjNZXw9.png";
            break;
        case 12:
            rep = "https://i.imgur.com/wbOG07U.png";
            break;
        case 13:
            rep = "https://i.imgur.com/URmL2UJ.png";
            break;
        case 14:
            rep = "https://i.imgur.com/XdDNruQ.png";
            break;
        case 15:
            rep = "https://i.imgur.com/Qvhk68T.png";
            break;
        case 16:
            rep = "https://i.imgur.com/xqrjIHX.png";
            break;
        case 17:
            rep = "https://i.imgur.com/W7VmMaA.png";
            break;
        case 18:
            rep = "https://i.imgur.com/WONg0xL.png";
            break;
        case 19:
            rep = "https://i.imgur.com/UffMY3r.png";
            break;
        case 20:
            rep = "https://i.imgur.com/TFujgTL.png";
            break;
        case 21:
            rep = "https://i.imgur.com/r5sRiYU.png";
            break;
        case 22:
            rep = "https://i.imgur.com/r3Nqs2X.png";
            break;
        case 23:
            rep = "https://i.imgur.com/6l0lRGT.png";
            break;
        case 24:
            rep = "https://i.imgur.com/KLrWZep.png";
            break;
        case 25:
            rep = "https://i.imgur.com/za2slXH.png";
            break;
        case 26:
            rep = "https://i.imgur.com/sa3PVki.png";
            break;
        case 27:
            rep = "https://i.imgur.com/oJi4v0m.png";
            break;
        case 28:
            rep = "https://i.imgur.com/KJQ7RlC.png";
            break;
        case 29:
            rep = "https://i.imgur.com/15SU0oE.png";
            break;
        case 30:
            rep = "https://i.imgur.com/xadjbx5.png";
            break;
        case 31:
            rep = "https://i.imgur.com/KXYOBL2.png";
            break;
        case 32:
            rep = "";
            break;
        case 33:
            rep = "";
            break;
    }
    return rep;
};

module.exports = skm;