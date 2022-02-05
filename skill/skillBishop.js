const skb = {};

skb.getskillBishop = function (skillname){
    var bret = -1;
    switch(skillname){
        case "프레이":
        case "프":
            bret = 0;
            break;
        case "엔젤 오브 리브라":
        case "엔젤오브리브라":
        case "리브라":
        case "엔젤":
        case "엔오리":
            bret = 1;
            break;
        case "피스메이커":
        case "피메":
            bret = 2;
            break;
        case "디바인 퍼니시먼트":
        case "디바인퍼니시먼트":
        case "디바인":
        case "퍼니시먼트":
        case "디퍼":
            bret = 3;
            break;
        case "마나 웨이브":
        case "마나웨이브":
        case "마웨":
        case "웨이브":
        case "윗점":
        case "체공":
            bret = 4;
            break;
        case "블레싱 앙상블":
        case "블레싱앙상블":
        case "앙상블":
            bret = 5;
            break;
        case "힐":
            bret = 6;
            break;
        case "엔젤릭 터치":
        case "엔젤릭터치":
        case "터치":
            bret = 7;
            break;
        case "블레스":
            bret = 8;
            break;
        case "인빈서블":
        case "인빈":
            bret = 9;
            break;
        case "MP 이터":
        case "MP이터":
        case "엠피 이터":
        case "엠피이터":
            bret = 10;
            break;
        case "홀리 파운틴":
        case "홀리파운틴":
        case "파운틴":
        case "홀파":
            bret = 11;
            break;
        case "파운틴 포 엔젤":
        case "파운틴포 엔젤":
        case "파운틴포엔젤":
        case "설치기":
            bret = 12;
            break;
        case "디바인 프로텍션":
        case "디바인프로텍션":
        case "프로텍션":
            bret = 13;
            break;
        case "미스틱 도어":
        case "미스틱도어":
        case "미틱도어":
        case "도어":
            bret = 14;
            break;
        case "디스펠":
            bret = 15;
            break;
        case "트라이엄프 페더":
        case "트라이엄프페더":
        case "페더":
        case "트페":
        case "사출기":
            bret = 16;
            break;
        case "홀리 심볼":
        case "홀리심볼":
        case "홀심":
        case "심볼":
            bret = 17;
            break;
        case "텔레포트 마스터리":
        case "텔레포트마스터리":
        case "텔포 마스터리":
        case "텔포마스터리":
        case "텔마":
            bret = 18;
            break;
        case "텔레포트 부스트":
        case "텔레포트부스트":
        case "텔포 부스트":
        case "텔포부스트":
        case "부스트":
            bret = 19;
            break;
        case "홀리 매직쉘":
        case "홀리매직쉘":
        case "쉘":
            bret = 20;
            break;
        case "홀리 포커스":
        case "홀리포커스":
        case "포커스":
            bret = 21;
            break;
        case "엔젤레이":
        case "엔레":
            bret = 22;
            break;
        case "제네시스":
        case "제네":
        case "광역기":
            bret = 23;
            break;
        case "빅뱅":
            bret = 24;
            break;
        case "블레싱 하모니":
        case "블레싱하모니":
        case "하모니":
            bret = 25;
            break;
        case "홀리 워터":
        case "홀리워터":
        case "홀워":
        case "워터":
        case "포션":
            bret = 26;
            break;
        case "홀리 블러드":
        case "홀리블러드":
        case "블러드":
        case "홀블":
            bret = 27;
            break;
        case "리저렉션":
        case "리저":
        case "부활":
            bret = 28;
            break;
        case "인피니티":
        case "인피니트":
        case "인피":
            bret = 29;
            break;
        case "바하뮤트":
        case "바뮤":
        case "소환수":
            bret = 30;
            break;
        case "어드밴스드 블레스":
        case "어드밴스드블레스":
        case "어블":
            bret = 31;
            break;
        case "벤전스 오브 엔젤":
        case "벤전스오브 엔젤":
        case "벤전스오브엔젤":
        case "벤전스":
        case "벤전":
        case "벤오엔":
            bret = 32;
            break;
        case "헤븐즈 도어":
        case "헤븐즈도어":
        case "헤도":
            bret = 33;
            break;
        case "":
            bret = 34;
            break;
        case "":
            bret = 35;
            break;
        case "":
            bret = 36;
            break;
        case "":
            bret = 37;
            break;
        case "":
            bret = 38;
            break;
        case "":
            bret = 39;
            break;
    }
    return bret;
};
skb.getskillnameBishop = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "프레이";
            break;
        case 1:
            rep = "엔젤 오브 리브라";
            break;
        case 2:
            rep = "피스메이커";
            break;
        case 3:
            rep = "디바인 퍼니시먼트";
            break;
        case 4:
            rep = "마나 웨이브";
            break;
        case 5:
            rep = "블레싱 앙상블";
            break;
        case 6:
            rep = "힐";
            break;
        case 7:
            rep = "엔젤릭 터치";
            break;
        case 8:
            rep = "블레스";
            break;
        case 9:
            rep = "인빈서블";
            break;
        case 10:
            rep = "MP 이터";
            break;
        case 11:
            rep = "홀리 파운틴";
            break;
        case 12:
            rep = "파운틴 포 엔젤";
            break;
        case 13:
            rep = "디바인 프로텍션";
            break;
        case 14:
            rep = "미스틱 도어";
            break;
        case 15:
            rep = "디스펠";
            break;
        case 16:
            rep = "트라이엄프 페더";
            break;
        case 17:
            rep = "홀리 심볼";
            break;
        case 18:
            rep = "텔레포트 마스터리";
            break;
        case 19:
            rep = "텔레포트 부스트";
            break;
        case 20:
            rep = "홀리 매직쉘";
            break;
        case 21:
            rep = "홀리 포커스";
            break;
        case 22:
            rep = "엔젤레이";
            break;
        case 23:
            rep = "제네시스";
            break;
        case 24:
            rep = "빅뱅";
            break;
        case 25:
            rep = "블레싱 하모니";
            break;
        case 26:
            rep = "홀리 워터";
            break;
        case 27:
            rep = "홀리 블러드";
            break;
        case 28:
            rep = "리저렉션";
            break;
        case 29:
            rep = "인피니티";
            break;
        case 30:
            rep = "바하뮤트";
            break;
        case 31:
            rep = "어드밴스드 블레스";
            break;
        case 32:
            rep = "벤전스 오브 엔젤";
            break;
        case 33:
            rep = "헤븐즈 도어";
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
            rep = "";
            break;
    }
    return rep;
};
skb.getskilldesc1Bishop = function (skillcode){
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
            rep = "6명,495%,5번 연속 공격/ 벤전스오브엔젤 중 공격횟수 5 증가";
            break;
        case 4:
            rep = "사용후 키다운시 느리게 하강가능, 최대 5초까지 하강";
            break;
        case 5:
            rep = "하단 참조";
            break;
        case 6:
            rep = "[자애] 회복력 300%, 재사용 대기시간 4초";
            break;
        case 7:
            rep = "[복수] 최대 6명의 적을 350%의 데미지로 5번 공격, 쿨10초";
            break;
        case 8:
            rep = "240초 동안 공격력 15, 마력 15, 방어력 300 증가";
            break;
        case 9:
            rep = "받는 데미지 25% 감소";
            break;
        case 10:
            rep = "마법 공격 시 20% 확률로 적의 최대 MP의 10% 흡수";
            break;
        case 11:
            rep = "하단 참조";
            break;
        case 12:
            rep = "[복수] 60초 동안 지속, 재사용 대기시간 30초";
            break;
        case 13:
            rep = "1회 치명적인 상태 이상 저항. 재사용 대기시간 75초";
            break;
        case 14:
            rep = "MP 60, 200초 동안 포탈 지속";
            break;
        case 15:
            rep = "하단 참조";
            break;
        case 16:
            rep = "하단 참조";
            break;
        case 17:
            rep = "MP 300 소비, 240초 동안 파티 전원의 획득 경험치 50% 증가";
            break;
        case 18:
            rep = "최대 6명의 적에게 340% 데미지, 80% 확률로 4초 동안 기절";
            break;
        case 19:
            rep = "텔레포트 이동 거리 좌우 65, 상하 25 증가 / 온오프스킬";
            break;
        case 20:
            rep = "하단 참조";
            break;
        case 21:
            rep = "크리티컬 확률 40%, 마법 숙련도 증가량 70%로 증가";
            break;
        case 22:
            rep = "하단 참조";
            break;
        case 23:
            rep = "최대 15명의 적에게 405% 데미지로 12번 공격";
            break;
        case 24:
            rep = "MP 50 소비, 최대 10명의 적을 480% 데미지로 4번 공격";
            break;
        case 25:
            rep = "버프를 받고 있는 파티원 1명당 최종 데미지 3% 증가";
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
            rep = "260초간 바하뮤트 소환, 3명의 적을 170%로 3번 공격";
            break;
        case 31:
            rep = "240초 동안 공격력 30, 마력 30, 방어력 550 / 블레스제외 중첩가능";
            break;
        case 32:
            rep = "[자애] 스킬이 [복수] 스킬로 변환된다. / 쿨 0.5초";
            break;
        case 33:
            rep = "하단 참조";
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
            rep = "";
            break;
    }
    return rep;
};
skb.getskilldesc2Bishop = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "최대 효과 30레벨 기준 INT 112,500";
            break;
        case 1:
            rep = "천사는 바하뮤트와 동시에 사용할 수 없다.";
            break;
        case 2:
            rep = "5초 쿨감시 사냥터 리젠타이밍보다 빠름";
            break;
        case 3:
            rep = "8.5초마다 1개씩 준비, 최대 8개/ 쿨1.5초";
            break;
        case 4:
            rep = "모험가 마법사 공통 상향 및 완강 이동기";
            break;
        case 5:
            rep = "비숍의 특성화 스킬";
            break;
        case 6:
            rep = "회복시킨 파티원 1명마다 힐의 재사용 대기시간 2초 감소";
            break;
        case 7:
            rep = "공격 당한 적은 60초 동안 방어율 44% 감소";
            break;
        case 8:
            rep = "다른 모든 버프 스킬과 중복으로 사용할 수 있다.";
            break;
        case 9:
            rep = "자신이 받는 모든 데미지를 감소시킨다.";
            break;
        case 10:
            rep = "보스 몬스터에게는 최대 MP의 5% 흡수";
            break;
        case 11:
            rep = "제자리 설치형 회복 스킬";
            break;
        case 12:
            rep = "일정 시간마다 최대 8명의 적을 160%의 데미지로 5번 공격";
            break;
        case 13:
            rep = "[패시브 효과 : 상태 이상 및 모든 속성 내성 40 증가]";
            break;
        case 14:
            rep = "가장 가까운 마을로 통하는 포탈을 만든다.";
            break;
        case 15:
            rep = "\"정화의 빛으로!\"";
            break;
        case 16:
            rep = "\"놓치지 않아요!\"";
            break;
        case 17:
            rep = "단, 홀리 심볼을 시전한 캐릭터 근처를 벗어나면 효율이 반감된다";
            break;
        case 18:
            rep = "[패시브 효과 : 스탠스 40% 증가] / 온오프스킬";
            break;
        case 19:
            rep = "텔레포트의 이동 거리를 증가시키는 온오프 버프";
            break;
        case 20:
            rep = "\"지켜드릴게요.\"";
            break;
        case 21:
            rep = "마스터레벨 4";
            break;
        case 22:
            rep = "\"신성한 빛이여!\" / \"빛의 검으로!\"";
            break;
        case 23:
            rep = "추가 크리티컬 확률 20%, 재사용 대기시간 45초";
            break;
        case 24:
            rep = "불독, 썬콜과 다르게 점샷 가능";
            break;
        case 25:
            rep = "블레싱 앙상블의 효과를 증가시킨다.";
            break;
        case 26:
            rep = "설치형 회복스킬 / 모험가 리마스터 신규스킬";
            break;
        case 27:
            rep = "극딜용 액티브 버프 / 모험가 리마스터 신규스킬";
            break;
        case 28:
            rep = "되살린 파티원만 일정 시간 동안 무적 효과를 받는다";
            break;
        case 29:
            rep = "모법 공통 점진적 최종데미지 증가 버프";
            break;
        case 30:
            rep = "60초간 표식, 이후 1회 공격에 받는 최종 데미지 25% 증가.";
            break;
        case 31:
            rep = "최대 HP 750, 최대 MP 750 증가, MP 소비량 20% 감소";
            break;
        case 32:
            rep = "[패시브 효과] 마력 50, 최종뎀 30%, 방무 20%, 공격속성내성 10% 감소";
            break;
        case 33:
            rep = "광범위 공격기, 사망 방지용 버프";
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
            rep = "";
            break;
    }
    return rep;
};
skb.getskilldesc3Bishop = function (skillcode){
    rep = "";
    switch(skillcode){
        case 66:
            rep = "";
            break;
        case 0:
            rep = "MP 1000 소비, 45초 동안 영역 안의 자신을 포함한 파티원의 최종 데미지 5% 증가\n\n일정 주기마다 최대 HP/MP의 1% 회복 및 일부 상태 이상 해제, 공격 속도 증가\n\n지능 2500당 최종 데미지 증가량 1% 증가, 최대 45%까지 증가 가능\n지능 2000당 HP/MP 회복량 1% 증가, 최대 10%까지 증가 가능\n지능 10000당 공격 속도 1단계 증가, 최대 3단계까지 증가 가능\n\n재사용 시 스킬 비활성화\n재사용 대기시간 : 180초";
            break;
        case 1:
            rep = "MP 1000 소비, 30초 동안 균형의 천사 소환, 천사는 비숍의 벤전스 오브 엔젤 활성화 상태에 따라 다른 모습으로 보임\n\n비활성화 : 자애의 천사 형상을 하며 5초마다 파티원의 최대 HP를 16% 회복시키고 데미지를 4초 동안 5% + 지능 1250 당 1% 증가시키는 버프 사용, 데미지는 최대 100%까지 증가 가능\n\n활성화 : 복수의 천사 형상을 하며 최대 12명의 적을 1100% 데미지로 12번 공격, 공격 당한 적은 60초 동안 천사의 표식이 생기고 적이 성속성 공격을 당할 때 표식이 사라지며 받는 최종 데미지 50% 증가\n\n재사용 대기시간 120초";
            break;
        case 2:
            rep = "MP 350 소비, 일정 시간마다 최대 6명의 적을 770%의 데미지로 4번 공격하거나 오브제에 접촉한 자신을 포함한 파티원의 HP를 비숍 최대 HP의 45% 만큼 회복\n\n최대 접촉 횟수 12회, 공격과 회복 모두 접촉 횟수 소모\n\n신성한 빛 : 최대 15명의 적을 770%의 데미지로 12번 공격, 비숍과 빛에 닿은 파티원은 8초 동안 11% + 남은 접촉 횟수마다 1%의 데미지가 증가하는 버프를 받음\n\n재사용 대기시간 10초";
            break;
        case 5:
            rep = "주위에 자신의 버프 효과를 받고 있는 파티원의 수만큼 자신의 데미지가 증가하고 파티 구성 시 클레릭, 프리스트, 비숍 직업군 수에 따라 파티 보너스 경험치를 추가로 획득한다. 단, 보너스는 60%를 넘을 수 없으며 파티원간 레벨 차이[1]가 크면 적용되지 않고 자신의 효과는 자신에게 적용되지 않는다.\n\n자신을 포함해 주변 자신의 버프 효과를 받고 있는 파티원 수만큼 최종 데미지 2% 증가. 파티원 중 클레릭 계열 직업군 1명당 20%의 보너스 경험치 추가";
            break;
        case 10:
            rep = "[자애] 성스러운 분수를 소환하여 성스러운 힘으로 파티원의 HP를 회복시킨다. 언데드 상태의 파티원도 사용 가능하며 분수에 다가가서 위쪽 화살표 키를 누르면 회복할 수 있다. 재사용 대기시간 초기화, 회복 스킬 효율 증가의 영향을 받지 않고 포탈 가까이에는 소환할 수 없으며 소환수 지속시간 증가의 효과를 받지 않는다.\n\nMP 40 소비, 사용 시 HP 40% 회복, 총 20번 사용 가능, 유지 시간 60초, 재사용 대기시간 60초";
            break;
        case 15:
            rep = "[자애] 판정 범위 내에 적의 마법효과를 무효화함과 동시에 자신을 포함한 주변 파티원들의 일부 상태 이상을 치료하고 디스펠과 디바인 프로텍션의 재사용 대기시간을 감소시킨다. 디스펠은 기절과 매혹, 혼란과 언데드화를 포함하여 치명적인 상태 이상을 해제할 수 있다.\n\nMP 10 소비, 100% 확률로 마법 무효화 및 상태 이상 치료 후 치료한 파티원 1명마다 디스펠의 재사용 대기시간 4초 감소\n치료한 파티원이 1명이라도 있을 경우 디바인 프로텍션의 재사용 대기시간 8초 감소\n\n재사용 대기시간 8초";
            break;
        case 16:
            rep = "[복수] 승리의 천사의 힘을 강림시킨다. 승리의 힘이 지속 중일 때 스킬 적중 시 천사의 날개 깃털이 생성되어 주변의 적을 추적하여 공격한다.\n\nMP 150 소비, 120초 동안 지속, 자신이 직접 공격하는 스킬 적중 시 4초 동안 적을 찾아 200%의 데미지로 4번 공격하는 천사의 날개 깃털 4개 생성\n날개 깃털 재생성 대기시간 2초\n\n재사용 대기시간 60초";
            break;
        case 20:
            rep = "스킬 사용 시 자신을 포함한 파티원의 순수 HP를 100% 회복시켜주며 일정 시간 동안 모든 피해를 방어하는 성스러운 보호막을 걸어준다. 보호막은 일정 시간 동안 유지되나 버프 지속시간 증가의 효과를 받지 않는다. 한 번 발동되면 홀리 매직쉘 스킬을 사용해도 일정 시간 동안 재생성되지 않는다.\n\nMP 70 소비, 순수 HP 100% 회복, 15초 동안 마법의 보호막 생성. 보호막이 유지되는 동안 최대 15번의 피해를 방어\n최대 HP의 일정 비율로 피해를 입히는 공격에 피격 시 10% 피해 감소\n발동 시 80초 동안 보호막 재생성 및 홀리 매직쉘으로 회복 불가.\n\n재사용 대기시간 90초";
            break;
        case 22:
            rep = "성령의 기운으로 충만한 성검을 소환하여 전방을 향해 발사한다. 성검은 적을 최대 HP가 가장 높은 적을 향해 유도된다. 성검에 적중한 적은 공격에 취약해진다. 언데드나 악마 계열의 몬스터에게 큰 피해를 줄 수 있으며 파티원의 경우 HP를 회복시킨다. 언데드 상태의 파티원도 회복시킬 수 있다.\n\nMP 56 소비, 최대 1명의 적을 225% 데미지로 14번 공격하고 나를 포함한 파티원의 HP를 내 최대 HP의 10% 만큼 회복\n엔젤레이에 적중한 적에게 20초 동안 아군의 최종데미지 2% 증가하는 디버프 적용, 디버프는 최대 5번 중첩 가능하며 중첩된 최종 데미지끼리는 합적용";
            break;
        case 26:
            rep = "[자애] 엔젤레이를 적에 적중시킬 때마다 적의 피를 정화한 성수를 얻는다. 스킬을 사용하면 주변에 성수로 가득 찬 성배를 소환한다. 파티원이 성배에서 위 방향키를 사용하면 성수를 흡수하여 HP가 회복된다.\n\n패시브 효과 : 엔젤레이 7번 적중 시 성수 1개 획득, 성수는 최대 5개까지 획득 가능\n액티브 효과 : MP 100 소비, 성수 최소 1개 필요, 획득한 성수를 모두 소모하여 주변에 성수 생성, 성수를 소환할 공간이 충분하지 않으면 일부만 생성\n성수는 5초 동안 유지되며 지능 2500 당 지속시간 5초 증가\n성수에서 파티원이 위 방향키 사용 시 최대 HP의 5%를 회복하며 지능 2500 당 회복량 5% 증가, 회복량은 합 적용\n\n재사용 대기시간 10초";
            break;
        case 27:
            rep = "[복수] 성스러운 피를 흘려 일정 시간 동안 회복을 할 수 없는 대신 더욱 강한 힘을 발휘한다. 스킬을 재사용하여 종료할 수 있다.\n\nMP 300 소비, 10초 동안 피격 데미지 20% 증가, 스킬에 의한 HP 회복량 99% 감소, 아이템에 의한 회복은 영향 받지 않음\n최종 데미지 1% 증가, 지능 5000 당 최종 데미지 1% 증가, 증가된 최종 데미지끼리는 합적용\n\n재사용 대기시간 300초\n지능 5000 당 재사용 대기시간 10초 감소, 최대 120초까지 감소 가능";
            break;
        case 28:
            rep = "성스러운 빛으로 파티원을 되살린다. 부활 후 무적 및 데미지 증가 효과는 버프 지속시간 증가 효과가 적용되지 않는다.\n재사용 대기시간 초기화의 효과를 받지 않는다.\n\nMP 150 소비, 범위 내 사망한 파티원 전원 부활 후 8초 동안 무적\n데스 카운트가 있는 맵에서 리저렉션으로 부활한 경우 비숍과 부활한 파티원은 30초 동안 데미지 5% 증가, 지능 2500당 데미지 1% 증가, 최대 25%까지 증가 가능\n\n재사용 대기시간 300초";
            break;
        case 29:
            rep = "정신을 집중하여 무한한 마나를 이끌어내 일정 시간 동안 MP 소비없이 스킬을 사용할 수 있게 된다. 또한 지속적으로 자신의 HP와 MP가 회복되고 모든 공격 마법의 피해가 증가한다.\n재사용 대기시간 초기화의 효과를 받지 않는다.\n\nMP 80 소비, 40초 동안 지속, 일정 시간마다 순수 HP와 MP 10%씩 회복\n버프 지속 중 최종 데미지 70% 증가, 일정 시간마다 최종 데미지 3% 추가 증가, 인피니티로 증가하는 최종 데미지는 합 적용\n버프 지속 시간 증가량을 반영한 지속 시간 기준 지속 시간이 30% 남았을 때 캐릭터 주위로 마나가 휘몰아침\n\n재사용 대기시간 180초";
            break;
        case 33:
            rep = "천국의 문을 열어 적을 응징함과 동시에 파티원에게 생명의 축복을 내린다.\n효과를 받은 파티원은 일정 시간 동안 헤븐즈 도어의 효과를 다시 받을 수 없다.\n\nMP 500 소비. 최대 15명의 적을 1000% 데미지로 8번 공격함과 동시에 주위 파티원에게 HP가 0이 되는 것을 한 번 무시하는 버프 지급.\n재사용 대기시간 90초\n버프를 받은 파티원은 600초 동안 헤븐즈 도어의 버프를 다시 받을 수 없음.";
            break;
    }
    return rep;
};
skb.getskillimage1Bishop = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "https://i.imgur.com/qNmWEjY.png";
            break;
        case 1:
            rep = "https://i.imgur.com/2LDi5OH.png";
            break;
        case 2:
            rep = "https://i.imgur.com/EFr2kMe.png";
            break;
        case 3:
            rep = "https://i.imgur.com/TgQ0TjT.png";
            break;
        case 4:
            rep = "https://i.imgur.com/mNXaoyb.png";
            break;
        case 5:
            rep = "";
            break;
        case 6:
            rep = "https://i.imgur.com/957UHMT.png";
            break;
        case 7:
            rep = "https://i.imgur.com/kJg3BYg.png";
            break;
        case 8:
            rep = "https://i.imgur.com/cdzBdZi.png";
            break;
        case 9:
            rep = "";
            break;
        case 10:
            rep = "";
            break;
        case 11:
            rep = "https://i.imgur.com/qJ34II9.png";
            break;
        case 12:
            rep = "https://i.imgur.com/tOwCFxO.png";
            break;
        case 13:
            rep = "https://i.imgur.com/HIQS1x2.png";
            break;
        case 14:
            rep = "https://i.imgur.com/6xesG9b.png";
            break;
        case 15:
            rep = "https://i.imgur.com/KFBu3jW.png";
            break;
        case 16:
            rep = "https://i.imgur.com/Hwedmis.png";
            break;
        case 17:
            rep = "https://i.imgur.com/ppdRvtr.png";
            break;
        case 18:
            rep = "https://i.imgur.com/9N07nAw.png";
            break;
        case 19:
            rep = "https://i.imgur.com/0aQ0GVo.png";
            break;
        case 20:
            rep = "https://i.imgur.com/rOtdZB9.png";
            break;
        case 21:
            rep = "";
            break;
        case 22:
            rep = "https://i.imgur.com/jT54SzZ.png";
            break;
        case 23:
            rep = "https://i.imgur.com/bzBTF1z.png";
            break;
        case 24:
            rep = "https://i.imgur.com/ptiIPhu.png";
            break;
        case 25:
            rep = "";
            break;
        case 26:
            rep = "https://i.imgur.com/Zl7ITtx.png";
            break;
        case 27:
            rep = "https://i.imgur.com/iONsS9k.png";
            break;
        case 28:
            rep = "https://i.imgur.com/ntU2NO9.png";
            break;
        case 29:
            rep = "https://i.imgur.com/7wRnzZj.png";
            break;
        case 30:
            rep = "https://i.imgur.com/aoTWEAi.png";
            break;
        case 31:
            rep = "https://i.imgur.com/mL6bZc5.png";
            break;
        case 32:
            rep = "https://i.imgur.com/1qT5e29.png";
            break;
        case 33:
            rep = "https://i.imgur.com/gY6kLQe.png";
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
            rep = "";
            break;
    }
    return rep;
};
skb.getskillimage2Bishop = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "https://i.imgur.com/9jkGjJy.png";
            break;
        case 1:
            rep = "https://i.imgur.com/v6UhsZ8.png";
            break;
        case 2:
            rep = "https://i.imgur.com/PQjCxxB.png";
            break;
        case 3:
            rep = "https://i.imgur.com/HZBER6y.png";
            break;
        case 4:
            rep = "https://i.imgur.com/BBXrnql.png";
            break;
        case 5:
            rep = "https://i.imgur.com/pKqlpyQ.png";
            break;
        case 6:
            rep = "https://i.imgur.com/DiPyjEz.png";
            break;
        case 7:
            rep = "https://i.imgur.com/mvrlP5P.png";
            break;
        case 8:
            rep = "https://i.imgur.com/pSS2JLc.png";
            break;
        case 9:
            rep = "https://i.imgur.com/AiFFJCa.png";
            break;
        case 10:
            rep = "https://i.imgur.com/pP6VcCw.png";
            break;
        case 11:
            rep = "https://i.imgur.com/MiixGQg.png";
            break;
        case 12:
            rep = "https://i.imgur.com/7SNtnVw.png";
            break;
        case 13:
            rep = "https://i.imgur.com/9JdFkAo.png";
            break;
        case 14:
            rep = "https://i.imgur.com/9sRwnqv.png";
            break;
        case 15:
            rep = "https://i.imgur.com/rEOvyI6.png";
            break;
        case 16:
            rep = "https://i.imgur.com/Hqwzy2n.png";
            break;
        case 17:
            rep = "https://i.imgur.com/0VmUcJY.png";
            break;
        case 18:
            rep = "https://i.imgur.com/lIxLe2m.png";
            break;
        case 19:
            rep = "https://i.imgur.com/3d5rxif.png";
            break;
        case 20:
            rep = "https://i.imgur.com/DZXyAN5.png";
            break;
        case 21:
            rep = "https://i.imgur.com/F86VQXx.png";
            break;
        case 22:
            rep = "https://i.imgur.com/ukZ9Rhg.png";
            break;
        case 23:
            rep = "https://i.imgur.com/eOylsS6.png";
            break;
        case 24:
            rep = "https://i.imgur.com/opfZxX3.png";
            break;
        case 25:
            rep = "https://i.imgur.com/9lYjwKf.png";
            break;
        case 26:
            rep = "https://i.imgur.com/kbSTzDD.png";
            break;
        case 27:
            rep = "https://i.imgur.com/wQb3eDu.png";
            break;
        case 28:
            rep = "https://i.imgur.com/JZB4541.png";
            break;
        case 29:
            rep = "https://i.imgur.com/6Ap4Mb9.png";
            break;
        case 30:
            rep = "https://i.imgur.com/JiCFrfG.png";
            break;
        case 31:
            rep = "https://i.imgur.com/WYtnPBW.png";
            break;
        case 32:
            rep = "https://i.imgur.com/NWRkigF.png";
            break;
        case 33:
            rep = "https://i.imgur.com/59WX7v5.png";
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
            rep = "";
            break;
    }
    return rep;
};

module.exports = skb;