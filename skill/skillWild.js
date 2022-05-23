const skwd = {};

skwd.getskillWild = function (skillname){
    var wdret = -1;
    switch(skillname){
        case "재규어 스톰":
        case "재규어스톰":
        case "스톰":
        case "재스":
            wdret = 0;
            break;
        case "재규어 맥시멈":
        case "재규어맥시멈":
        case "맥시멈":
        case "재맥":
            wdret = 1;
            break;
        case "와일드 그레네이드":
        case "와일드 그리네이드":
        case "와일드그레네이드":
        case "와일드그리네이드":
        case "그레네이드":
        case "그리네이드":
        case "와그":
            wdret = 2;
            break;
        case "와일드 발칸 Type X":
        case "와일드발칸TypeX":
        case "TypeX":
        case "타입엑스":
        case "타입":
        case "엑스":
        case "와발엑":
            wdret = 3;
            break;
        case "포획":
            wdret = 4;
            break;
        case "헌터의 부름":
        case "헌터의부름":
        case "헌부":
            wdret = 5;
            break;
        case "더블 점프":
        case "더블점프":
        case "덥점":
        case "트리플 점프":
        case "트리플점프":
        case "트점":
            wdret = 6;
            break;
        case "재규어 라이딩":
        case "재규어라이딩":
        case "재규어 타기":
        case "재규어타기":
        case "라이딩":
            wdret = 7;
            break;
        case "서먼 재규어":
        case "서먼재규어":
        case "재규어 소환":
        case "재규어소환":
        case "서먼":
            wdret = 8;
            break;
        case "클로우 컷":
        case "클로우컷":
            wdret = 9;
            break;
        case "프로보크":
            wdret = 10;
            break;
        case "오토매틱 슈팅 디바이스":
        case "오토매틱 슈팅디바이스":
        case "오토매틱슈팅디바이스":
        case "오슈디":
            wdret = 11;
            break;
        case "재규어 매니지먼트":
        case "재규어매니지먼트":
        case "매니지먼트":
            wdret = 12;
            break;
        case "크로스 로드":
        case "크로스로드":
            wdret = 13;
            break;
        case "소울 애로우 : 석궁":
        case "소울애로우 : 석궁":
        case "소울애로우:석궁":
        case "소울 애로우 석궁":
        case "소울애로우 석궁":
        case "소울애로우석궁":
        case "소울 애로우":
        case "소울애로우":
            wdret = 14;
            break;
        case "하울링":
        case "와헌버프":
        case "버프":
            wdret = 15;
            break;
        case "소닉 붐":
        case "소닉붐":
            wdret = 16;
            break;
        case "화이트 히트 러쉬":
        case "화이트 히트러쉬":
        case "화이트히트러쉬":
        case "화히러":
            wdret = 17;
            break;
        case "어시스턴트 헌팅 유닛":
        case "어시스턴트 헌팅유닛":
        case "어시스턴트헌팅유닛":
        case "어헌유":
        case "설치기":
            wdret = 18;
            break;
        case "비스트 폼":
        case "비스트폼":
        case "날개":
            wdret = 19;
            break;
        case "드로우 백":
        case "드로우백":
        case "뒷걸음질":
        case "뒷걸음":
            wdret = 20;
            break;
        case "플러리":
            wdret = 21;
            break;
        case "재규어 링크":
        case "재규어링크":
        case "링크":
            wdret = 22;
            break;
        case "와일드 발칸":
        case "와일드발칸":
        case "와발":
            wdret = 23;
            break;
        case "와일드 발칸 Type-P":
        case "와일드발칸 Type-P":
        case "와일드발칸Type-P":
        case "와발P":
            wdret = 24;
            break;
        case "재규어 소울":
        case "재규어소울":
        case "소울":
            wdret = 25;
            break;
        case "드릴 컨테이너":
        case "드릴컨테이너":
        case "드컨":
            wdret = 26;
            break;
        case "익스텐트 매거진":
        case "익스텐트매거진":
        case "익스텐트":
        case "매거진":
        case "익매":
            wdret = 27;
            break;
        case "와일드 인스팅트":
        case "와일드인스팅트":
        case "인스팅트":
        case "와인":
            wdret = 28;
            break;
        case "네이처 포스":
        case "네이처포스":
            wdret = 29;
            break;
        case "사일런트 램피지":
        case "사일런트램피지":
        case "사램":
            wdret = 30;
            break;
        case "램피지 애즈 원":
        case "램피지 애즈원":
        case "램피지애즈원":
        case "램애원":
            wdret = 31;
            break;
        case "플래쉬 레인":
        case "플래쉬레인":
        case "플레":
            wdret = 32;
            break;
        case "":
            wdret = 33;
            break;
    }
    return wdret;
};
skwd.getskillnameWild = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "재규어 스톰";
            break;
        case 1:
            rep = "재규어 맥시멈";
            break;
        case 2:
            rep = "와일드 그레네이드";
            break;
        case 3:
            rep = "와일드 발칸 Type X";
            break;
        case 4:
            rep = "포획";
            break;
        case 5:
            rep = "헌터의 부름";
            break;
        case 6:
            rep = "더블 점프";
            break;
        case 7:
            rep = "재규어 라이딩";
            break;
        case 8:
            rep = "서먼 재규어";
            break;
        case 9:
            rep = "클로우 컷";
            break;
        case 10:
            rep = "프로보크";
            break;
        case 11:
            rep = "오토매틱 슈팅 디바이스";
            break;
        case 12:
            rep = "재규어 매니지먼트";
            break;
        case 13:
            rep = "크로스 로드";
            break;
        case 14:
            rep = "소울 애로우 : 석궁";
            break;
        case 15:
            rep = "하울링";
            break;
        case 16:
            rep = "소닉 붐";
            break;
        case 17:
            rep = "화이트 히트 러쉬";
            break;
        case 18:
            rep = "어시스턴트 헌팅 유닛";
            break;
        case 19:
            rep = "비스트 폼";
            break;
        case 20:
            rep = "드로우 백";
            break;
        case 21:
            rep = "플러리";
            break;
        case 22:
            rep = "재규어 링크";
            break;
        case 23:
            rep = "와일드 발칸";
            break;
        case 24:
            rep = "와일드 발칸 Type-P";
            break;
        case 25:
            rep = "재규어 소울";
            break;
        case 26:
            rep = "드릴 컨테이너";
            break;
        case 27:
            rep = "익스텐드 매거진";
            break;
        case 28:
            rep = "와일드 인스팅트";
            break;
        case 29:
            rep = "네이처 포스";
            break;
        case 30:
            rep = "사일런트 램피지";
            break;
        case 31:
            rep = "램피지 애즈 원";
            break;
        case 32:
            rep = "플래쉬 레인";
            break;
        case 33:
            rep = "";
            break;
    }
    return rep;
};
skwd.getskilldesc1Wild = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "40초간 7마리소환/최종뎀반영90%, 일몹뎀150%,바이트확률50%";
            break;
        case 1:
            rep = "11초간무적/15명,740%,12번,9회/990%,15번,4회마무리공격/크확,방무100%";
            break;
        case 2:
            rep = "폭발시 8명,1320%,5번 공격/ 4.5초당 1개준비,최대8개/ 쿨0.5초";
            break;
        case 3:
            rep = "7.2초간 키다운가능,8명,1260%,5번 공격/ 방무 20%추가/ 쿨120초";
            break;
        case 4:
            rep = "몬스터의 HP를 90% 이하로 떨어뜨린 후, 몬스터를 포획할 수 있다";
            break;
        case 5:
            rep = "하단 참조";
            break;
        case 6:
            rep = "재규어를 탑승한 상태일 경우 트리플 점프로 스킬이 변경된다";
            break;
        case 7:
            rep = "하단 참조";
            break;
        case 8:
            rep = "하단 참조";
            break;
        case 9:
            rep = "하단 참조";
            break;
        case 10:
            rep = "재규어가 최대 10명의 적을 10초 동안 도발 / 쿨20초";
            break;
        case 11:
            rep = "석궁 스킬의 공격 범위 50, 점프력 20, 이동속도 40 증가";
            break;
        case 12:
            rep = "포획한 재규어들을 마우스를 통해 관리.";
            break;
        case 13:
            rep = "하단 참조";
            break;
        case 14:
            rep = "300초 동안 공격력 20 증가";
            break;
        case 15:
            rep = "300초 동안 모든 파티원의 공격력과 마력 10% 증가";
            break;
        case 16:
            rep = "하단 참조";
            break;
        case 17:
            rep = "8명의 적에게 1200% 데미지로 공격";
            break;
        case 18:
            rep = "31초 동안 설치되어 3초 공격 후 4초 동안 장전을 반복, 쿨 8초";
            break;
        case 19:
            rep = "하단 참조";
            break;
        case 20:
            rep = "하단 참조";
            break;
        case 21:
            rep = "민첩 40 증가, 40% 확률로 회피";
            break;
        case 22:
            rep = "포획한 재규어 1마리당 크확 3%, 크뎀 2% 증가";
            break;
        case 23:
            rep = "하단 참조";
            break;
        case 24:
            rep = "하단 참조";
            break;
        case 25:
            rep = "하단 참조";
            break;
        case 26:
            rep = "하단 참조";
            break;
        case 27:
            rep = "최종 데미지 20%";
            break;
        case 28:
            rep = "방어력 50% 증가";
            break;
        case 29:
            rep = "모든 속성 내성 30%";
            break;
        case 30:
            rep = "40초 동안 데미지 40% 증가, 파이널 어택 발동 확률 100%";
            break;
        case 31:
            rep = "하단 참조";
            break;
        case 32:
            rep = "하단 참조";
            break;
        case 33:
            rep = "";
            break;
    }
    return rep;
};
skwd.getskilldesc2Wild = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "↓키함께사용시 재규어3마리소환/최종뎀반영률210%/[패시브:공65]/쿨120초";
            break;
        case 1:
            rep = "스킬다시사용시 마무리공격, 100%확률로 바이트최대중첩/ 쿨120초";
            break;
        case 2:
            rep = "와일드 발칸, 와일드 발칸 Type X 도중 사용 시 시전 동작 없음";
            break;
        case 3:
            rep = "초당 타수 45타";
            break;
        case 4:
            rep = "몬스터 포획. 최대 다섯 종류 포획 가능. / 쿨10초";
            break;
        case 5:
            rep = "투명도 영향 받지 않음";
            break;
        case 6:
            rep = "재규어를 탑승하지 않은 상태일 경우 더블 점프로 스킬이 변경된다.";
            break;
        case 7:
            rep = "온오프형 모드 전환기";
            break;
        case 8:
            rep = "온오프형 대인 모드 전환기";
            break;
        case 9:
            rep = "첫 번째 어나더 바이트 디버프공격기";
            break;
        case 10:
            rep = "[재규어 스킬] 보스에게는 지속시간이 절반으로 감소.";
            break;
        case 11:
            rep = "공격력 20 증가";
            break;
        case 12:
            rep = "스노우 화이트와 오닉스 재규어의 능력은 중복 적용되지 않는다.";
            break;
        case 13:
            rep = "탑승상태시 돌진형 밀격기";
            break;
        case 14:
            rep = "화살 소비 없이 공격 가능";
            break;
        case 15:
            rep = "[패시브효과: 피격데미지 15% 감소, 추가 회피 15%, 최대 MP 15%]";
            break;
        case 16:
            rep = "-";
            break;
        case 17:
            rep = "대각선 이동기";
            break;
        case 18:
            rep = "매 공격마다 8명의 적에게 150%의 데미지로 3번 공격";
            break;
        case 19:
            rep = "붉은 날개 이펙트 생성 스킬";
            break;
        case 20:
            rep = "방향 고정 온오프 스킬";
            break;
        case 21:
            rep = "회피 성공 후 1초 동안 이어지는 모든 공격은 크리티컬 판정";
            break;
        case 22:
            rep = "재규어 수는 최대 6마리까지 반영, 공격력 10 증가";
            break;
        case 23:
            rep = "주력 단일/다수 대상 공격기";
            break;
        case 24:
            rep = "즉발형 다수 공격기 모드";
            break;
        case 25:
            rep = "바인드";
            break;
        case 26:
            rep = "설치기";
            break;
        case 27:
            rep = "모든 능력치 60 증가";
            break;
        case 28:
            rep = "공격 시 몬스터의 물리 방어율 30% 무시";
            break;
        case 29:
            rep = "상태 이상 내성 15 증가, 스탠스 50% 증가";
            break;
        case 30:
            rep = "재사용 대기시간 120초";
            break;
        case 31:
            rep = "재규어 소환시";
            break;
        case 32:
            rep = "재규어 탑승시나 미소환시";
            break;
        case 33:
            rep = "";
            break;
    }
    return rep;
};
skwd.getskilldesc3Wild = function (skillcode){
    rep = "";
    switch(skillcode){
        case 5:
            rep = "자신이 포획한 몬스터 중 재규어를 제외한 몬스터를 랜덤으로 소환한다.\n재사용 대기시간 초기화의 효과를 받지 않고 몬스터의 공격은 공격 반사 상태의 적을 공격해도 피해를 입지 않는다.\n\nMP 10 소비, 60초 동안 몬스터 소환\n몬스터는 2초마다 200% + 몬스터 레벨당 1%의 데미지로 공격\n\n재사용 대기시간 : 30초";
            break;
        case 7:
            rep = "잘 길들여진 재규어를 소환하여 올라탄다. 재규어에 탑승 시 이동속도와 스탠스 확률이 증가한다. 서먼 재규어를 사용하거나 재규어 스킬을 사용하면 재규어에서 내려 같이 다닐 수 있다. 단, 재규어 스톰으로 소환된 재규어가 있다면 재규어 스킬 사용 시 재규어에서 내려지지 않고 재규어 스킬이 발동된다\n\nMP 20 소비, 탑승 시 이동속도 40, 스탠스 확률 50% 증가\n\n재사용 대기시간 1초";
            break;
        case 8:
            rep = "재규어를 소환하여 함께 싸운다. 재규어는 캐릭터가 공격하는 적을 우선해서 공격한다. 재규어에게 [재규어 스킬]을 사용하도록 지시할 수 있다. 재규어 스킬은 범위 내의 최대 HP가 높은 보스 몬스터를 우선 공격한다. 보스 몬스터가 없다면 캐릭터가 보는 방향으로 공격한다.\n재규어가 소환된 상태에서 아래 방향키와 함께 스킬을 재사용하여 메인 재규어를 해당 위치에 고정되어 전투하도록 지시할 수 있다. 고정된 재규어는 공격 범위 내의 최대 HP가 높은 보스 몬스터 쪽을 우선하여 공격하며 캐릭터와 일정 거리 이상 멀어지면 다시 캐릭터 위치로 이동한다.\n재규어 라이딩을 사용하면 재규어를 탑승할 수 있다.\n\nMP 20 소비, 최대 6명의 적을 140% + 자신의 레벨당 1% 데미지로 공격하는 재규어 소환.\n재규어가 공격 시 15% 확률로 최대 3회까지 중첩되고 15초 동안 지속되는 디버프 발생.\n\n어나더 바이트 : [파이널 어택류 스킬] 디버프에 걸린 적을 석궁을 사용하는 스킬로 공격하면 중첩당 60% + 자신의 레벨 3당 1% 데미지의 추가 공격.\n재규어 소환 시 크리티컬 데미지 8%, 상태 이상 내성 30 증가\n\n재사용 대기시간 1초";
            break;
        case 9:
            rep = "[재규어 스킬] 재규어의 앞발로 전방의 적 다수를 연속 공격한다. 클로우 컷은 적을 공격하면 HP를 회복하며 공격 반사 상태의 적을 공격해도 피해를 입지 않는다.\n\nMP 30 소비, 최대 8명의 적을 200% + 자신의 레벨당 1% 데미지로 4번 공격.\n어나더 바이트 디버프가 없는 적 공격 시 100% 확률로 디버프 발생, 이후 공격 시 30% 확률로 어나더 바이트 디버프 추가 발생.\n공격 시 최대 HP의 7% 회복.\n\n재사용 대기시간 5초";
            break;
        case 13:
            rep = "[재규어 스킬] 재규어가 전방으로 돌진하며 다수의 적을 밀어내고 피해를 입힌다. 아래 방향키와 함계 사용하면 캐릭터가 보는 방향과 반대 방향으로 돌진한다. 일부 몬스터는 저항하여 밀리지 않는다. 재규어 스킬로 사용했을 때는 공격 반사 상태의 적을 공격해도 피해를 입지 않는다.\n\nMP 45 소비, 최대 8명의 적을 225% + 자신의 레벨당 2% 데미지로 2번 공격하고 100% 확률로 3초 동안 기절시킴\n어나더 바이트 디버프가 없는 적 공격 시 100% 확률로 디버프 발생, 이후 공격 시 80% 확률로 어나더 바이트 디버프 추가 발생.\n\n재사용 대기시간 7초\n\n재규어가 전방으로 돌진하며 다수의 적을 공격한다. 재규어를 소환한 상태일 경우 재규어만 돌진한다.\n\nMP 45 소비, 최대 8명의 적을 225% + 자신의 레벨당 1% 데미지로 2번 공격하고 100% 확률로 3초 동안 기절시킴.";
            break;
        case 16:
            rep = "[재규어 스킬] 재규어가 날카롭게 포효한다. 포효는 강한 충격파를 일으켜 다수의 적들에게 피해를 입힌다. 소닉붐은 공격 반사 상태의 적을 공격해도 피해를 입지 않는다.\n\nMP 40 소비, 최대 8명의 적을 220% 자신의 레벨당 1% 데미지로 6번 공격.\n어나더 바이트 디버프가 없는 적 공격 시 100% 확률로 디버프 발생, 이후 공격 시 40% 확률로 어나더 바이트 디버프 추가 발생.\n\n재사용 대기시간 6초";
            break;
        case 19:
            rep = "야성의 힘으로 공격력, 최종 데미지, 이동속도, 공격 속도, 최대 HP가 증가한다. 스킬을 사용하면 일정 시간 동안 재규어의 몸에 야성을 상징하는 붉은 날개가 생긴다.\n\nMP 130 소비, 300초 동안 붉은 날개 생성\n\n[패시브 효과 : 공격력 20%, 최종 데미지 10%, 이동속도 15, 공격 속도 1단계, 최대 HP 50% 증가]";
            break;
        case 20:
            rep = "활성화 시 방향 전환을 하지 않고 뒷걸음질하며 공격할 수 있으며 재규어에 탑승하지 않은 상태에서도 적용된다. 추가로 영구히 받는 피해가 감소한다.\n\n활성화 시 뒤로 걸으며 공격 가능\n\n[패시브 효과 : 피격 데미지 20% 감소]";
            break;
        case 23:
            rep = "폭풍우가 몰아치듯 빠른 속도로 화살을 발사한다. 스킬 키를 누르고 있으면 지속적으로 화살이 발사되며, 사용 중 이동할 수 있다. 화살은 최대 HP가 가장 높은 보스를 우선 공격한다. 재규어를 탑승한 상태일 경우 재규어 포대를 사용하여 다수의 적을 공격할 수 있으나 공격력이 약해지고 사정거리가 감소한다.\n\n공격당 MP 13 소비, 발당 370% 데미지, 시전 중 140의 속도로 이동, 보스 몬스터 공격 시 데미지 10% 증가\n\n재규어 포대와 함께 화살과 탄을 폭풍우가 몰아치 듯 빠른 속도로 발사한다. 스킬 키를 누르고 있으면 지속적으로 화살과 탄이 발사된다. 사용 중 트리플 점프 사용 및 이동할 수 있으나 트리플 점프를 사용하면 공격 속도가 감소한다. 와일드 발칸 적중 시 추가 유탄이 발사되어 와일드 발칸이 공격하지 않은 적을 추가 공격한다.\n재규어를 소환한 상태일 경우 1명의 적만 공격할 수 있으나 보스 몬스터 공격 시 데미지와 사정거리가 증가한다.\n마우스 우클릭하면 와일드 발칸 대신 신형 프로토타입 발칸을 사용할 수 있다. 신형 발칸은 재규어에 탑승한 상태에서만 사용 가능하다.\n\n공격당 MP 13 소비, 발당 최대 8명의 적을 185%의 데미지로 2번 관통 공격하는 탄을 발사\n유탄 : 최대 3명의 적을 655%의 데미지로 2번 공격, 재발동 대기시간 3초";
            break;
        case 24:
            rep = "레지스탕스의 기술력으로 개발된 프로토타입 발칸으로 전방을 넓게 공격한다. 와일드 발칸보다 빠르지 않지만 넓은 범위를 한번에 공격할 수 있다. 발칸의 무게로 재규어에 탑승했을 때만 사용할 수 있다. 발칸 Type-P에도 유탄이 추가로 발사된다.\n\nMP 200 소비, 최대 8명의 적을 300%의 데미지로 4번 공격\n일반 몬스터 공격 시 데미지 120%p 증가";
            break;
        case 25:
            rep = "[재규어 스킬] 재규어의 영혼을 담은 울부짖음이 적의 모든 버프를 해제하고 행동 불가 상태로 만든다. 재규어 소울은 범위 내의 적 중 최대 HP가 가장 높은 적을 우선으로 공격하며 공격 반사 상태의 적을 공격해도 피해를 입지 않는다.\n공격을 받은 적은 90초 동안 행동 불가 상태 이상에 저항하여 재규어 소울 및 다른 스킬로 인한 행동 불가 상태 이상에 걸리지 않는다.\n\nMP 300 소비, 1명의 적을 270% + 자신의 레벨당 1% 데미지로 12번 공격. 대상은 100% 확률로 10초 동안 행동 불가 상태, 재규어 소울로 적에게 준 데미지에 따라 행동 불가 지속시간 최대 100% 증가\n100% 확률로 어나더 바이트 디버프 발생.\n\n재사용 대기시간 210초";
            break;
        case 26:
            rep = "레지스탕스의 기술을 빌려 거대한 드릴을 발사하는 유닛을 설치한다. 드릴 컨테이너는 공격 반사 상태의 적을 공격해도 피해를 입지 않는다.\n\nMP 50 소비, 15초 동안 매 공격마다 10명의 적에게 430% 데미지로 1번 공격\n\n재사용 대기시간 30초\n재규어를 탑승한 상태에서 사용하는 와일드 발칸/와일드 발칸 Type-P의 일반 몬스터 공격 시 데미지 40% 증가";
            break;
        case 31:
            rep = "[재규어 스킬] 재규어가 주위를 거대한 분노로 휩쓴다. 재규어를 소환했을 때만 사용할 수 있으며 공격 반사 상태의 적을 공격해도 피해를 입지 않는다. 재규어를 탑승하면 플래쉬 레인으로 대체되며 재사용 대기시간을 공유한다.\n\nMP 200 소비, 6명의 적을 500% + 자기 레벨당 데미지 1%씩 증가한 데미지로 9번 공격, 공격 시 100% 확률로 어나더 바이트 디버프 발생.\n\n재사용 대기시간 12초";
            break;
        case 32:
            rep = "레지스탕스 기술의 정수를 사용한다. 재규어를 탑승했거나 소환하지 않았을 때 사용할 수 있다. 재규어를 소환하면 램피지 애즈 원으로 대체되며 재사용 대기시간을 공유한다.\n\nMP 200 소비, 최대 15명의 적에게 380% 데미지로 11번 공격.\n\n재사용 대기시간 12초";
            break;
        case 33:
            rep = "";
            break;
    }
    return rep;
};
skwd.getskillimage1Wild = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "https://i.imgur.com/lRUeLkH.png";
            break;
        case 1:
            rep = "https://i.imgur.com/optOXWJ.png";
            break;
        case 2:
            rep = "https://i.imgur.com/c37k9kz.png";
            break;
        case 3:
            rep = "https://i.imgur.com/uTi22Hb.png";
            break;
        case 4:
            rep = "https://i.imgur.com/DlCBytW.png";
            break;
        case 5:
            rep = "https://i.imgur.com/nWnjsXV.png";
            break;
        case 6:
            rep = "https://i.imgur.com/CRvVZLC.png";
            break;
        case 7:
            rep = "";
            break;
        case 8:
            rep = "https://i.imgur.com/GVVQocb.png";
            break;
        case 9:
            rep = "https://i.imgur.com/tsLxXNf.png";
            break;
        case 10:
            rep = "https://i.imgur.com/XNITLgx.png";
            break;
        case 11:
            rep = "";
            break;
        case 12:
            rep = "https://i.imgur.com/7DINGaP.png";
            break;
        case 13:
            rep = "https://i.imgur.com/Mn4IMX6.png";
            break;
        case 14:
            rep = "";
            break;
        case 15:
            rep = "https://i.imgur.com/dvUQqpZ.png";
            break;
        case 16:
            rep = "https://i.imgur.com/5g9HfmU.png";
            break;
        case 17:
            rep = "https://i.imgur.com/i9ZGY5A.png";
            break;
        case 18:
            rep = "https://i.imgur.com/HXu0X3i.png";
            break;
        case 19:
            rep = "https://i.imgur.com/J3zTa82.png";
            break;
        case 20:
            rep = "";
            break;
        case 21:
            rep = "";
            break;
        case 22:
            rep = "";
            break;
        case 23:
            rep = "https://i.imgur.com/ZNCBC0D.png";
            break;
        case 24:
            rep = "https://i.imgur.com/Mty8DOL.png";
            break;
        case 25:
            rep = "https://i.imgur.com/QDHBeYt.png";
            break;
        case 26:
            rep = "https://i.imgur.com/F50PYgp.png";
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
        case 30:
            rep = "https://i.imgur.com/uPCklZb.png";
            break;
        case 31:
            rep = "https://i.imgur.com/dZTIxvl.png";
            break;
        case 32:
            rep = "https://i.imgur.com/FLlSLLT.png";
            break;
        case 33:
            rep = "";
            break;
    }
    return rep;
};
skwd.getskillimage2Wild = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "https://i.imgur.com/iTeujsw.png";
            break;
        case 1:
            rep = "https://i.imgur.com/3pNoT0X.png";
            break;
        case 2:
            rep = "https://i.imgur.com/gavX7n4.png";
            break;
        case 3:
            rep = "https://i.imgur.com/VG22it3.png";
            break;
        case 4:
            rep = "https://i.imgur.com/Psa4m67.png";
            break;
        case 5:
            rep = "https://i.imgur.com/jpIJHVj.png";
            break;
        case 6:
            rep = "https://i.imgur.com/dRAtaY9.png";
            break;
        case 7:
            rep = "https://i.imgur.com/AiysxcX.png";
            break;
        case 8:
            rep = "https://i.imgur.com/SN7B9VT.png";
            break;
        case 9:
            rep = "https://i.imgur.com/8hKNXf8.png";
            break;
        case 10:
            rep = "https://i.imgur.com/8YcxZQO.png";
            break;
        case 11:
            rep = "https://i.imgur.com/1Tx2gw6.png";
            break;
        case 12:
            rep = "https://i.imgur.com/R8iTBt6.png";
            break;
        case 13:
            rep = "https://i.imgur.com/7y9bM9O.png";
            break;
        case 14:
            rep = "https://i.imgur.com/HcYRIcJ.png";
            break;
        case 15:
            rep = "https://i.imgur.com/Qi4cjph.png";
            break;
        case 16:
            rep = "https://i.imgur.com/kcWYS4a.png";
            break;
        case 17:
            rep = "https://i.imgur.com/WOYRFcV.png";
            break;
        case 18:
            rep = "https://i.imgur.com/i6AC5SA.png";
            break;
        case 19:
            rep = "https://i.imgur.com/iE5Sb0T.png";
            break;
        case 20:
            rep = "https://i.imgur.com/dGy3UaC.png";
            break;
        case 21:
            rep = "https://i.imgur.com/U30IsH2.png";
            break;
        case 22:
            rep = "https://i.imgur.com/72AnTyL.png";
            break;
        case 23:
            rep = "https://i.imgur.com/2z43L9E.png";
            break;
        case 24:
            rep = "https://i.imgur.com/HyRGaZw.png";
            break;
        case 25:
            rep = "https://i.imgur.com/7cSYLcB.png";
            break;
        case 26:
            rep = "https://i.imgur.com/SYUh6VN.png";
            break;
        case 27:
            rep = "https://i.imgur.com/HtOLD3n.png";
            break;
        case 28:
            rep = "https://i.imgur.com/3nPG6Gg.png";
            break;
        case 29:
            rep = "https://i.imgur.com/WA1VtYR.png";
            break;
        case 30:
            rep = "https://i.imgur.com/FUCGmy4.png";
            break;
        case 31:
            rep = "https://i.imgur.com/s18Z5rV.png";
            break;
        case 32:
            rep = "https://i.imgur.com/IQV1JKX.png";
            break;
        case 33:
            rep = "";
            break;
    }
    return rep;
};

module.exports = skwd;