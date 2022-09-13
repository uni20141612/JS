const ska = {};

ska.getskillAdele = function (skillname){
    var aret = -1;
    switch(skillname){
        case "루인":
            aret = 0;
            break;
        case "인피니트":
        case "인피니티":
        case "인피":
            aret = 1;
            break;
        case "리스토어":
        case "리스":
            aret = 2;
            break;
        case "스톰":
            aret = 3;
            break;
        case "디바이드":
        case "디바":
        case "그 스킬":
        case "그스킬":
            aret = 4;
            break;
        case "매직 서킷":
        case "매직서킷":
            aret = 5;
            break;
        case "패이스":
        case "페이스":
            aret = 6;
            break;
        case "샤드":
        case "사출기":
            aret = 7;
            break;
        case "볼트":
            aret = 8;
            break;
        case "레비테이션":
        case "래비테이션":
            aret = 9;
            break;
        case "루디먼트":
        case "루디":
            aret = 10;
            break;
        case "에테르":
        case "게이지":
            aret = 11;
            break;
        case "에테르 결정":
        case "에테르결정":
        case "표식":
            aret = 12;
            break;
        case "크리에이션":
        case "크리":
        case "크툴루":
        case "주꾸미":
        case "쭈꾸미":
            aret = 13;
            break;
        case "임페일":
        case "임페":
            aret = 14;
            break;
        case "레조넌스":
        case "레조":
        case "돌진":
            aret = 15;
            break;
        case "원더":
        case "자동사출":
            aret = 16;
            break;
        case "오더":
        case "이기어검":
        case "가이디드":
            aret = 17;
            break;
        case "게더링":
        case "게더":
            aret = 18;
            break;
        case "테리토리":
        case "설치기":
            aret = 19;
            break;
        case "노빌리티":
        case "노빌":
            aret = 20;
            break;
        case "페더":
        case "후방이동":
        case "후방":
        case "텔포":
            aret = 21;
            break;
        case "어센트":
            aret = 22;
            break;
        case "톨러런스":
            aret = 23;
            break;
        case "하이 에테르":
        case "하이에테르":
            aret = 24;
            break;
        case "블로섬":
        case "블로썸":
            aret = 25;
            break;
        case "그레이브":
            aret = 26;
            break;
        case "다이크":
        case "무적기":
        case "로얄 가드":
        case "로얄가드":
        case "짭얄 가드":
        case "짭얄가드":
            aret = 27;
            break;
        case "트레드":
        case "하강 이동":
        case "하강이동":
        case "급강하":
            aret = 28;
            break;
        case "퍼펙션":
            aret = 29;
            break;
        case "데몰리션":
            aret = 30;
            break;
        case "어테인":
            aret = 31;
            break;
        case "마커":
            aret = 32;
            break;
        case "스콜":
        case "바인드":
            aret = 33;
            break;
        case "":
            aret = 34;
            break;
        case "":
            aret = 35;
            break;
    }
    return aret;
};
ska.getskillnameAdele = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "루인";
            break;
        case 1:
            rep = "인피니트";
            break;
        case 2:
            rep = "리스토어";
            break;
        case 3:
            rep = "스톰";
            break;
        case 4:
            rep = "디바이드";
            break;
        case 5:
            rep = "매직 서킷";
            break;
        case 6:
            rep = "패이스";
            break;
        case 7:
            rep = "샤드";
            break;
        case 8:
            rep = "볼트";
            break;
        case 9:
            rep = "레비테이션";
            break;
        case 10:
            rep = "루디먼트";
            break;
        case 11:
            rep = "에테르";
            break;
        case 12:
            rep = "에테르 결정";
            break;
        case 13:
            rep = "크리에이션";
            break;
        case 14:
            rep = "임페일";
            break;
        case 15:
            rep = "레조넌스";
            break;
        case 16:
            rep = "원더";
            break;
        case 17:
            rep = "오더";
            break;
        case 18:
            rep = "게더링";
            break;
        case 19:
            rep = "테리토리";
            break;
        case 20:
            rep = "노빌리티";
            break;
        case 21:
            rep = "페더";
            break;
        case 22:
            rep = "어센트";
            break;
        case 23:
            rep = "톨러런스";
            break;
        case 24:
            rep = "하이 에테르";
            break;
        case 25:
            rep = "블로섬";
            break;
        case 26:
            rep = "그레이브";
            break;
        case 27:
            rep = "다이크";
            break;
        case 28:
            rep = "트레드";
            break;
        case 29:
            rep = "퍼펙션";
            break;
        case 30:
            rep = "데몰리션";
            break;
        case 31:
            rep = "어테인";
            break;
        case 32:
            rep = "마커";
            break;
        case 33:
            rep = "스콜";
            break;
        case 34:
            rep = "";
            break;
    }
    return rep;
};
ska.getskilldesc1Adele = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "15명 공격/ 소환중 일정시간마다 550%,6번 공격 12번 발동";
            break;
        case 1:
            rep = "30초간 770%,2번 공격 18자루 에테르소드 창조/ 쿨180초";
            break;
        case 2:
            rep = "하단 참조";
            break;
        case 3:
            rep = "하단 참조";
            break;
        case 4:
            rep = "MP 40 소비, 최대 7명의 적을 375% 데미지로 6번 공격";
            break;
        case 5:
            rep = "무기 제외 장비의 마력 중 35%를 공격력으로 전환";
            break;
        case 6:
            rep = "크리티컬 데미지 10%, 공격력 10% 증가";
            break;
        case 7:
            rep = "80% 데미지로 3번 공격하는 마력 조각 5개 생성";
            break;
        case 8:
            rep = "MP 5 소비, 일정 거리 점프";
            break;
        case 9:
            rep = "MP 20 소비, 일정 시간 체공";
            break;
        case 10:
            rep = "공30, 방 200, 최대 HP 1000/ 피격데미지 10% 감소";
            break;
        case 11:
            rep = "하단 참조";
            break;
        case 12:
            rep = "하단 참조";
            break;
        case 13:
            rep = "하단 참조";
            break;
        case 14:
            rep = "하단 참조";
            break;
        case 15:
            rep = "하단 참조";
            break;
        case 16:
            rep = "샤드가 트리거 스킬 적중 시 8초마다 생성";
            break;
        case 17:
            rep = "하단 참조";
            break;
        case 18:
            rep = "하단 참조";
            break;
        case 19:
            rep = "7초간 주기적으로 8명, 100%, 4번 공격하는 영역 생성";
            break;
        case 20:
            rep = "20초 동안 영역 생성/ 파티원 피해 30% 대신받음/ 쿨180초";
            break;
        case 21:
            rep = "하단 참조";
            break;
        case 22:
            rep = "하단 참조";
            break;
        case 23:
            rep = "스탠스 확률 40%, 최대 HP 10%, 상태 이상 내성 30";
            break;
        case 24:
            rep = "에테르 최대 400까지 획득 가능";
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
            rep = "공중에서 사용 시 수직으로 하강/ 쿨 1.5초";
            break;
        case 29:
            rep = "하단 참조";
            break;
        case 30:
            rep = "최종 데미지 30%";
            break;
        case 31:
            rep = "공격력 30, 보스 공격 시 데미지 10%";
            break;
        case 32:
            rep = "하단 참조";
            break;
        case 33:
            rep = "최대 6명의 적을 1000% 데미지로 12번 공격";
            break;
        case 34:
            rep = "";
            break;
        case 35:
            rep = "";
            break;
    }
    return rep;
};
ska.getskilldesc2Adele = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "소환후 990%,9번 공격 8번 발동/ 쿨60초";
            break;
        case 1:
            rep = "시전 및 해제 동작 중 무적/ 5%확률 에테르결정 생성";
            break;
        case 2:
            rep = "아델 극딜의 핵심 버프";
            break;
        case 3:
            rep = "오더 연계형 다수 공격기";
            break;
        case 4:
            rep = "[트리거 스킬] 거대한 대검을 생성하여 전방의 적을 절단한다.";
            break;
        case 5:
            rep = "세트효과X, 무기 순수 공격력의 15%까지 전환 가능.";
            break;
        case 6:
            rep = "200레벨 찍어야 크뎀 상승";
            break;
        case 7:
            rep = "사출기, 재사용 대기시간 6초";
            break;
        case 8:
            rep = "위 방향키와 함께 사용해 위 방향으로도 이동할 수 있다.";
            break;
        case 9:
            rep = "커맨드 잠금: 마우스 우클릭";
            break;
        case 10:
            rep = "이동속도 10, 점프력 10, 스탠스 확률 60% 증가";
            break;
        case 11:
            rep = "전용 게이지";
            break;
        case 12:
            rep = "레조넌스 전용 표식";
            break;
        case 13:
            rep = "온오프 스킬";
            break;
        case 14:
            rep = "혼란 상태이상의 영향을 받지 않음";
            break;
        case 15:
            rep = "텔포판정 돌진기";
            break;
        case 16:
            rep = "샤드 데미지 30%p 증가/ 쿨0.5초/ 온오프스킬";
            break;
        case 17:
            rep = "사출기/ 크리에이션 활성화 상태에서만 사용가능";
            break;
        case 18:
            rep = "캐릭터의 약간 앞에 오더 집결";
            break;
        case 19:
            rep = "종료시 12명, 550%, 12번 추가 공격/ 쿨30초";
            break;
        case 20:
            rep = "해당 피해의 80%에 해당하는 실드 생성";
            break;
        case 21:
            rep = "후방 이동기";
            break;
        case 22:
            rep = "퍼펙션과는 합적용";
            break;
        case 23:
            rep = "모든 속성 내성 30% 증가, 피격 데미지 20% 감소";
            break;
        case 24:
            rep = "크리에이션, 오더 에테르 소드 최대 6자루로 증가";
            break;
        case 25:
            rep = "게더링과 연계 가능";
            break;
        case 26:
            rep = "오더 호밍 디버프기";
            break;
        case 27:
            rep = "재사용 대기시간 최솟값은 28.5초";
            break;
        case 28:
            rep = "최대 6명의 적을 550% 데미지로 6번 공격";
            break;
        case 29:
            rep = "어센트와는 합적용";
            break;
        case 30:
            rep = "방어율 무시 20% 증가";
            break;
        case 31:
            rep = "크리티컬 확률 20%, 최대 HP 15% 증가";
            break;
        case 32:
            rep = "범위와 피해량 불균일";
            break;
        case 33:
            rep = "10초간 바인드/ 쿨 180초";
            break;
        case 34:
            rep = "";
            break;
        case 35:
            rep = "";
            break;
    }
    return rep;
};
ska.getskilldesc3Adele = function (skillcode){
    rep = "";
    switch(skillcode){
        case 2:
            rep = "타버린 마력 회로를 일시적으로 복원해 과거의 마력 날개를 부활시킨다.\n리스토어의 공격은 공격 무시 및 공격 반사 상태의 적에게도 피해를 입힐 수 있고 스킬을 다시 사용하면 즉시 종료된다.\n\n시전 및 시전 후 초당 최대 MP의 2% 소비\n\n30초 동안 데미지 45%, 에테르 획득량 80%, 오더로 명령할 수 있는 에테르 소드 2개 증가\n\n일정 시간마다 마력 날개를 펼쳐 최대 6명의 적을 1980%의 데미지로 3번 공격하고 자신을 포함한 파티원 최대 HP의 10.5% 회복\n\n재사용 대기시간 180초";
            break;
        case 3:
            rep = "오더로 명령을 내린 모든 에테르 소드를 몸 주위에서 폭풍과 같이 움직이게 한다. 오더로 적을 추적 중인 에테르 소드에 비례한 수의 환영을 몸 주위에서 움직인다. 스톰은 공격 반사 상태의 적을 공격해도 피해를 입지 않고 스킬을 재사용하여 즉시 종료할 수 있다.\n\nMP 500 소비, 14초 동안 일정 주기마다 주변에 있는 최대 7명의 적을 550%의 데미지로 2번 자동 공격\n시전 시 명령을 내린 에테르 소드가 1쌍을 초과했을 때 초과한 에테르 소드 1쌍당 공격 횟수 2번 증가\n\n재사용 대기시간 90초";
            break;
        case 11:
            rep = "마력을 정제하여 특별한 에테르를 얻는다. 에테르로 의지를 가진 에테르 소드를 창조할 수 있다.\n에테르는 주변의 마력에서 일정 시간마다 소량 얻거나 적을 공격하여 얻을 수 있다.\n\n일정 시간마다 5의 에테르 획득, 트리거 스킬 적중 시 12의 에테르 획득, 최대 300까지 획득 가능\n크리에이션이 활성화되어 있다면 에테르 100마다 2자루의 에테르 소드를 창조할 수 있고 최대 4자루까지 창조 가능";
            break;
        case 12:
            rep = "에테르 소드가 적을 공격했을 때 가끔 흩어진 에테르가 모여 결정을 만든다. 레조넌스를 사용하면 공명하여 결정이 있는 곳으로 돌진할 수 있다.\n\n30초 동안 유지되며 맵에 최대 7개까지 존재 가능\n최대 존재 제한을 초과하여 생성될 때는 남은 지속시간이 가장 적은 결정이 소멸\n결정이 이미 있는 곳 근처와 특정 발판 및 갈 수 없는 발판 근처에는 결정 생성 불가\n\n재생성 대기시간 4초";
            break;
        case 13:
            rep = "현재 가진 에테르로 몸 주위에 에테르 소드를 창조하며 에테르의 증감에 따라 에테르 소드의 수가 저절로 조절된다.\n창조된 에테르 소드는 주변의 적을 스스로 공격하고 공격 반사 상태의 적을 공격해도 피해를 입지 않는다.\n\n트리거 스킬 적중 시 9.5초마다 최대 10명의 적을 200% 데미지로 공격, 3차/4차 전직 시 재공격 대기시간 4초씩 감소\n에테르 소드 1자루당 1번 공격\n공격 적중 시 30%의 확률로 에테르 결정 생성\n\n재사용 대기시간 0.5초";
            break;
        case 14:
            rep = "에테르 소드를 생성하여 강하게 날린다. 8방향으로 날릴 수 있어 방향키와 함께 사용하면 해당 방향으로 날린다.\n사정거리 끝에 도달하면 소멸하며 에테르 결정을 남긴다. 임페일로 에테르 결정이 생성될 때 이미 결정이 있는 곳이라면 이전 결정을 소멸시키고 새롭게 생성되며 재생성 대기시간을 무시한다.\n레조넌스로 연계할 수 있지만 연계하면 에테르 결정을 남길 수 없다.\n\nMP 45, 에테르 15 소비\n최대 6명의 적을 85% 데미지로 6번 공격\n재사용 대기시간 7초";
            break;
        case 15:
            rep = "마력으로 이루어진 대검을 생성하고 에테르 결정과 공명시켜 결정이 있는 곳으로 돌진한다. 8방향으로 사용할 수 있어 방향키와 함께 사용하면 해당 방향에 있는 가장 가까운 결정으로 돌진한다.\n사정거리 안에 에테르 결정이 있거나 임페일에서 연계해야만 사용할 수 있다.\n임페일에서 연계하여 사용하면 대검 생성시간이 단축되고 에테르 소드를 날린 방향으로 돌진한다.\n\n레조넌스와 공명한 에테르 결정 소멸\n최대 6명의 적을 502% 데미지로 6번 공격\n공격 적중 시 30초 동안 최종 데미지 5%, 방어율 무시 5%가 증가하는 버프가 발동하고 최대 2번까지 중첩";
            break;
        case 17:
            rep = "크리에이션으로 창조한 에테르 소드에 명령을 내려 적을 추적하게 한다. 크리에이션으로 창조한 에테르 소드가 있어야 사용할 수 있다.\n에테르 소드는 아델 근처에서만 움직이며 멀어지면 근처로 이동하여 새로운 적을 추적한다.\n공격 반사 상태의 적을 공격해도 피해를 입지 않고 아델이 전투 상태일 때만 적을 추적한다.\n추적 중인 에테르 소드가 소멸할 때 남은 지속시간에 비례해 에테르를 획득할 수 있다.\n\nMP 40, 에테르 100 소비\n각 에테르 소드는 40초 동안 존재하며 240%의 데미지로 2번 공격\n최대 4자루까지 명령 가능, 최대 개수를 초과해서 명령 시 지속시간이 가장 적게 남은 에테르 소드가 소멸\n공격 적중 시 15% 확률로 에테르 결정 생성\n\n재사용 대기시간 0.5초";
            break;
        case 18:
            rep = "오더로 명령을 내린 모든 에테르 소드를 되돌아오게 한다. 에테르 소드는 스킬을 사용한 곳까지 직선으로 돌아오며 경로 상의 적을 공격한 후 짧은 시간 이동한 자리에 머무른다. 오더로 적을 추적 중인 에테르 소드가 있어야 사용할 수 있다.\n게더링 중에는 에테르 소드의 지속시간이 경과하지 않는다. 게더링은 공격 반사 상태의 적을 공격해도 피해를 입지 않으며 재사용 대기시간 초기화의 효과를 받지 않는다.\n\nMP 50 소비, 최대 10명의 적을 260%의 데미지로 4번 공격\n공격을 받은 적은 30초 동안 디버프가 걸리고 해당 적에 대한 아델의 공격은 방어율 무시 10% 증가\n공격 적중 시 40% 확률로 에테르 결정 생성\n\n재사용 대기시간 12초";
            break;
        case 21:
            rep = "깃털과 같이 가볍게 후방으로 이동하여 공중에 잠시 체공한다.\n트레드를 제외한 트리거 스킬 사용 중에도 이동할 수 있다.\n\nMP 46 소비, 에테르 30 소비\n후방으로 일정 거리 이동\n재사용 대기시간 8초\n\n[패시브 효과 : 이동속도 5, 점프력 10, 최대 이동속도 10 증가]";
            break;
        case 22:
            rep = "끝없는 향상심으로 큰 진보를 이루어 낸다.\n\n공격력 30, 최종 데미지 15%, 크리티컬 확률 20% 증가\n샤드의 데미지 115%p 증가\n크리에이션의 데미지 240%p 증가\n임페일의 데미지 100%p 증가\n레조넌스의 데미지 125%p 증가";            
            break;
        case 25:
            rep = "오더로 명령을 내린 모든 에테르 소드를 회전시켜 마력을 개화시킨다. 오더로 적을 추적 중인 에테르 소드가 있어야 사용할 수 있다.\n블로섬 중에는 에테르 소드의 지속시간이 경과하지 않고 게더링으로 돌아오는 에테르 소드는 개화시킬 수 없다.\n공격 반사 상태의 적을 공격해도 피해를 입지 않고 재사용 대기시간 초기화의 효과를 받지 않는다.\n\nMP 80 소비, 각 에테르 소드가 최대 8명의 적을 650%의 데미지로 8번 공격\n한 명의 적이 복수의 블로섬에 적중당하면 해당 적에 대한 블로섬의 최종 데미지 25% 감소\n공격 적중 시 50% 확률로 에테르 결정 생성\n\n재사용 대기시간 20초";
            break;
        case 26:
            rep = "저주의 검으로 죽음의 표식을 새겨 적을 약화시키고 에테르 소드와 샤드의 목표로 삼는다.\n죽음의 표식이 새겨진 적이 있고 스킬이 재사용 대기시간 중일 때 다시 사용하거나 다른 적에게 죽음의 표식을 새기면 해당 적에게 새겨진 죽음의 표식이 소멸된다.\n그레이브는 범위 내의 적 중 최대 HP가 가장 높은 적을 우선으로 공격하고 재사용 대기시간 초기화의 효과를 받지 않는다.\n\nMP 150 소비, 1명의 적을 220%의 데미지로 10번 공격\n죽음의 표식이 있는 적에게 가하는 데미지 20% 증가, 방어율 10% 추가 무시\n오더로 명령을 내린 에테르 소드, 인피니트로 창조한 에테르 소드, 샤드의 공격 범위 안에 표식이 있는 적이 있다면 해당 적에게 공격 집중\n\n재사용 대기시간 10초";
            break;
        case 27:
            rep = "에테르 소드를 몸 주위에서 빠르게 회전시켜 적의 공격을 막고 피해를 줄인다. 재사용 대기시간 초기화의 효과를 받지 않는다.\n다이크 시전 중 치명적인 상태 이상에 걸리지 않고 시전 즉시 공격을 받으면 해당 공격의 피해를 무효화하고 이후 공격의 피해를 더욱 줄인다. 트레드를 제외한 트리거 스킬 사용 중에도 사용할 수 있다.\n\nMP 150 소비, 최대 8초 동안 키다운 가능하고 키다운 중 최대 HP의 일정 비율로 피해를 입히는 공격을 포함한 피격 데미지 40% 감소\n사용 즉시 적의 공격을 받으면 해당 공격의 피해를 무효화하고 이후 키다운 동안 피격 데미지 감소량 55%로 증가\n스킬 종료 시 남은 키다운 시간 1초마다 재사용 대기시간 3.5초 감소\n\n재사용 대기시간 60초";
            break;
        case 29:
            rep = "수련을 통해 가진 기술의 완성도를 완벽하게 끌어올린다.\n\n샤드의 데미지 225%p 증가\n크리에이션의 데미지 270%p 증가\n임페일의 데미지 200%p 증가\n레조넌스의 데미지 265%p 증가\n오더의 데미지 120%p 증가\n게더링의 데미지 300%p 증가\n테리토리의 데미지 300%p 증가";
            break;
        case 32:
            rep = "허공에 존재하는 작은 조각에 마력을 불어넣어 자라게 한 후 파쇄한다.\n파쇄된 위치에는 마력이 집중되어 에테르 결정이 생성되며 재생성 대기시간을 무시한다.\n\nMP 250 소비, 최대 7명의 적 위치에 조각 생성\n조각은 생성 및 파쇄될 때 각각 최대 7명의 적을 2000%의 데미지로 6번 공격\n공격할 수 있는 적이 최대 공격 가능한 적의 수보다 적다면 임의의 위치에 조각 5개까지 생성\n조각이 파쇄된 후 에테르 결정 최대 5개까지 생성\n\n재사용 대기시간 60초";
            break;
        case 33:
            rep = "";
            break;
    }
    return rep;
};
ska.getskillimage1Adele = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "https://i.imgur.com/c6J2rXF.png";
            break;
        case 1:
            rep = "https://i.imgur.com/gCthhiE.png";
            break;
        case 2:
            rep = "https://i.imgur.com/mfsvc2Y.png";
            break;
        case 3:
            rep = "https://i.imgur.com/21l8iX3.png";
            break;
        case 4:
            rep = "https://i.imgur.com/iKKAZIz.png";
            break;
        case 5:
            rep = "";
            break;
        case 6:
            rep = "";
            break;
        case 7:
            rep = "https://i.imgur.com/Zf8YqSr.png";
            break;
        case 8:
            rep = "https://i.imgur.com/1gKyYx7.png";
            break;
        case 9:
            rep = "https://i.imgur.com/mSC7tta.png";
            break;
        case 10:
            rep = "";
            break;
        case 11:
            rep = "";
            break;
        case 12:
            rep = "https://i.imgur.com/8zRwoE1.png";
            break;
        case 13:
            rep = "https://i.imgur.com/HSeV0XR.png";
            break;
        case 14:
            rep = "https://i.imgur.com/ha5FusS.png";
            break;
        case 15:
            rep = "https://i.imgur.com/DM56qyl.png";
            break;
        case 16:
            rep = "";
            break;
        case 17:
            rep = "https://i.imgur.com/DUWn1ea.png";
            break;
        case 18:
            rep = "https://i.imgur.com/pI8ipzg.png";
            break;
        case 19:
            rep = "https://i.imgur.com/WiJIyRz.png";
            break;
        case 20:
            rep = "https://i.imgur.com/jEBZwoy.png";
            break;
        case 21:
            rep = "https://i.imgur.com/9TSdkcb.png";
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
            rep = "https://i.imgur.com/Ok9gSCE.png";
            break;
        case 26:
            rep = "https://i.imgur.com/6xDa9UW.png";
            break;
        case 27:
            rep = "https://i.imgur.com/uSShKYn.png";
            break;
        case 28:
            rep = "https://i.imgur.com/Y0cyXWB.png";
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
            rep = "https://i.imgur.com/LECIlPU.png";
            break;
        case 33:
            rep = "https://i.imgur.com/pia5UW2.png";
            break;
        case 34:
            rep = "";
            break;
        case 35:
            rep = "";
            break;
    }
    return rep;
};
ska.getskillimage2Adele = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "https://i.imgur.com/1kjQWSo.png";
            break;
        case 1:
            rep = "https://i.imgur.com/mmH1xqc.png";
            break;
        case 2:
            rep = "https://i.imgur.com/9IYKPJk.png";
            break;
        case 3:
            rep = "https://i.imgur.com/kUTj5Cg.png";
            break;
        case 4:
            rep = "https://i.imgur.com/H4HBSeR.png";
            break;
        case 5:
            rep = "https://i.imgur.com/jvKkHzx.png";
            break;
        case 6:
            rep = "https://i.imgur.com/qIxBGDR.png";
            break;
        case 7:
            rep = "https://i.imgur.com/9ftANit.png";
            break;
        case 8:
            rep = "https://i.imgur.com/EHot66i.png";
            break;
        case 9:
            rep = "https://i.imgur.com/TFWlaS7.png";
            break;
        case 10:
            rep = "https://i.imgur.com/dYTaqsx.png";
            break;
        case 11:
            rep = "https://i.imgur.com/uNmTQ7z.png";
            break;
        case 12:
            rep = "https://i.imgur.com/QQoPeeV.png";
            break;
        case 13:
            rep = "https://i.imgur.com/jcY90Pt.png";
            break;
        case 14:
            rep = "https://i.imgur.com/Og7PkYG.png";
            break;
        case 15:
            rep = "https://i.imgur.com/szZescJ.png";
            break;
        case 16:
            rep = "https://i.imgur.com/6BlwVpD.png";
            break;
        case 17:
            rep = "https://i.imgur.com/q2eyKtq.png";
            break;
        case 18:
            rep = "https://i.imgur.com/06RK01M.png";
            break;
        case 19:
            rep = "https://i.imgur.com/LKlcGAQ.png";
            break;
        case 20:
            rep = "https://i.imgur.com/LBQCIdh.png";
            break;
        case 21:
            rep = "https://i.imgur.com/Aus4oIM.png";
            break;
        case 22:
            rep = "https://i.imgur.com/6TJyawQ.png";
            break;
        case 23:
            rep = "https://i.imgur.com/nIo5iC1.png";
            break;
        case 24:
            rep = "https://i.imgur.com/63muLkr.png";
            break;
        case 25:
            rep = "https://i.imgur.com/XzY3DIu.png";
            break;
        case 26:
            rep = "https://i.imgur.com/6hDcKGM.png";
            break;
        case 27:
            rep = "https://i.imgur.com/xNDX0uM.png";
            break;
        case 28:
            rep = "https://i.imgur.com/fivkwnY.png";
            break;
        case 29:
            rep = "https://i.imgur.com/3F7nJtb.png";
            break;
        case 30:
            rep = "https://i.imgur.com/CCr9NAO.png";
            break;
        case 31:
            rep = "https://i.imgur.com/l5UcSSF.png";
            break;
        case 32:
            rep = "https://i.imgur.com/5eh2oHq.png";
            break;
        case 33:
            rep = "https://i.imgur.com/SjPdH94.png";
            break;
        case 34:
            rep = "";
            break;
        case 35:
            rep = "";
            break;
    }
    return rep;
};

module.exports = ska;