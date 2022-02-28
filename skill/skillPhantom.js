const skpt = {};

skpt.getskillPhantom = function (skillname){
    var ptret = -1;
    switch(skillname){
        case "팬텀 슈라우드":
        case "팬텀슈라우드":
        case "슈라우드":
        case "텔레포트":
        case "텔포":
            ptret = 0;
            break;
        case "하이 덱스터러티":
        case "하이 덱스터리티":
        case "하이덱스터러티":
        case "하이덱스터리티":
            ptret = 1;
            break;
        case "스틸 스킬":
        case "스틸스킬":
        case "스틸":
        case "훔치기":
        case "도둑질":
            ptret = 2;
            break;
        case "스킬 매니지먼트":
        case "스킬매니지먼트":
        case "스킬관리":
        case "매니지먼트":
            ptret = 3;
            break;
        case "저지먼트":
            ptret = 4;
            break;
        case "데들리 인스팅트":
        case "데들리인스팅트":
        case "링크스킬":
        case "링크":
            ptret = 5;
            break;
        case "탤런트 오브 팬텀시프I":
        case "탤런트오브팬텀시프I":
        case "탤런트 오브 팬텀시프1":
        case "탤런트오브팬텀시프1":
        case "탤오팬I":
        case "탤오팬1":
        case "탤런트I":
        case "탤런트1":
        case "팬텀시프1":
        case "팬텀시프I":
            ptret = 6;
            break;
        case "스위프트 팬텀":
        case "스위프트팬텀":
        case "스위프트":
        case "트리플 점프":
        case "트리플점프":
        case "트점":
            ptret = 7;
            break;
        case "퀵 이베이젼":
        case "퀵이베이젼":
            ptret = 8;
            break;
        case "탤런트 오브 팬텀시프II":
        case "탤런트오브팬텀시프II":
        case "탤런트 오브 팬텀시프2":
        case "탤런트오브팬텀시프2":
        case "탤오팬II":
        case "탤오팬2":
        case "탤런트II":
        case "탤런트2":
        case "팬텀시프2":
        case "팬텀시프II":
            ptret = 9;
            break;
        case "브리즈 카르트":
        case "브리즈카르트":
        case "브리즈":
        case "밀격기":
        case "밀격":
            ptret = 10;
            break;
        case "럭 모노폴리":
        case "럭모노폴리":
        case "모노폴리":
            ptret = 11;
            break;
        case "코트 오브 암즈":
        case "코트오브암즈":
        case "코오암":
        case "암즈":
            ptret = 12;
            break;
        case "탤런트 오브 팬텀시프III":
        case "탤런트오브팬텀시프III":
        case "탤런트 오브 팬텀시프3":
        case "탤런트오브팬텀시프3":
        case "탤오팬III":
        case "탤오팬3":
        case "탤런트III":
        case "탤런트3":
        case "팬텀시프3":
        case "팬텀시프III":
            ptret = 13;
            break;
        case "럭 오브 팬텀시프":
        case "럭오브팬텀시프":
        case "럭오팬":
            ptret = 14;
            break;
        case "미스포츈 프로텍션":
        case "미스포츈프로텍션":
        case "미스포츈":
        case "미포":
        case "미프":
            ptret = 15;
            break;
        case "문 라이트":
        case "문라이트":
        case "문라":
            ptret = 16;
            break;
        case "플래시 앤 플리":
        case "플래시앤플리":
        case "플래시":
            ptret = 17;
            break;
        case "어큐트 센스":
        case "어큐트센스":
        case "어큐트":
            ptret = 18;
            break;
        case "얼티밋 드라이브":
        case "얼티밋드라이브":
        case "얼티밋":
        case "얼드":
            ptret = 19;
            break;
        case "탤런트 오브 팬텀시프IV":
        case "탤런트오브팬텀시프IV":
        case "탤런트 오브 팬텀시프4":
        case "탤런트오브팬텀시프4":
        case "탤오팬IV":
        case "탤오팬4":
        case "탤런트IV":
        case "탤런트4":
        case "팬텀시프4":
        case "팬텀시프IV":
            ptret = 20;
            break;
        case "템페스트 오브 카드":
        case "템페스트오브카드":
        case "템페스트":
        case "템오카":
            ptret = 21;
            break;
        case "트와일라이트":
        case "트와일":
            ptret = 22;
            break;
        case "느와르 카르트":
        case "느와르카르트":
        case "느와르":
            ptret = 23;
            break;
        case "소울 스틸":
        case "소울스틸":
        case "소울":
            ptret = 24;
            break;
        case "프레이 오브 아리아":
        case "프레이오브아리아":
        case "프레이":
        case "프오아":
        case "아리아":
            ptret = 25;
            break;
        case "탤런트 오브 팬텀시프H":
        case "탤런트 오브 팬텀시프5":
        case "탤런트오브팬텀시프H":
        case "탤런트오브팬텀시프5":
        case "탤오팬H":
        case "탤오팬5":
        case "탤런트H":
        case "탤런트5":
        case "팬텀시프5":
        case "팬텀시프H":
            ptret = 26;
            break;
        case "로즈 카르트 피날레":
        case "로즈카르트피날레":
        case "로즈":
        case "피날레":
        case "로카피":
            ptret = 27;
            break;
        case "조커":
            ptret = 28;
            break;
        case "블랙잭":
            ptret = 29;
            break;
        case "마크 오브 팬텀":
        case "마크오브팬텀":
        case "마오팬":
            ptret = 30;
            break;
        case "리프트 브레이크":
        case "리프트브레이크":
        case "리프트":
        case "브레이크":
        case "리브":
            ptret = 31;
            break;
    }
    return ptret;
};
skpt.getskillnamePhantom = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "팬텀 슈라우드";
            break;
        case 1:
            rep = "하이 덱스터러티";
            break;
        case 2:
            rep = "스틸 스킬";
            break;
        case 3:
            rep = "스킬 매니지먼트";
            break;
        case 4:
            rep = "저지먼트";
            break;
        case 5:
            rep = "데들리 인스팅트";
            break;
        case 6:
            rep = "탤런트 오브 팬텀시프I";
            break;
        case 7:
            rep = "스위프트 팬텀";
            break;
        case 8:
            rep = "퀵 이베이젼";
            break;
        case 9:
            rep = "탤런트 오브 팬텀시프II";
            break;
        case 10:
            rep = "브리즈 카르트";
            break;
        case 11:
            rep = "럭 모노폴리";
            break;
        case 12:
            rep = "코트 오브 암즈";
            break;
        case 13:
            rep = "탤런트 오브 팬텀시프III";
            break;
        case 14:
            rep = "럭 오브 팬텀시프";
            break;
        case 15:
            rep = "미스포츈 프로텍션";
            break;
        case 16:
            rep = "문 라이트";
            break;
        case 17:
            rep = "플래시 앤 플리";
            break;
        case 18:
            rep = "어큐트 센스";
            break;
        case 19:
            rep = "얼티밋 드라이브";
            break;
        case 20:
            rep = "탤런트 오브 팬텀시프IV";
            break;
        case 21:
            rep = "템페스트 오브 카드";
            break;
        case 22:
            rep = "트와일라이트";
            break;
        case 23:
            rep = "느와르 카르트";
            break;
        case 24:
            rep = "소울 스틸";
            break;
        case 25:
            rep = "프레이 오브 아리아";
            break;
        case 26:
            rep = "탤런트 오브 팬텀시프H";
            break;
        case 27:
            rep = "로즈 카르트 피날레";
            break;
        case 28:
            rep = "조커";
            break;
        case 29:
            rep = "블랙잭";
            break;
        case 30:
            rep = "마크 오브 팬텀";
            break;
        case 31:
            rep = "리프트 브레이크";
            break;
    }
    return rep;
};
skpt.getskilldesc1Phantom = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "사용시 방향키입력으로 순간이동/ 횟수제한 3번";
            break;
        case 1:
            rep = "민첩성 40 증가, 회피율 20% 증가";
            break;
        case 2:
            rep = "사용 시 스틸 모드로 전환";
            break;
        case 3:
            rep = "훔친 스킬들을 마우스를 통해 관리";
            break;
        case 4:
            rep = "하단 참조";
            break;
        case 5:
            rep = "크리티컬 확률 15% 증가";
            break;
        case 6:
            rep = "훔친 다른 모험가의 스킬 중 1차 이하의 것을 사용한다.";
            break;
        case 7:
            rep = "MP 20 소비, 일정 거리 트리플 점프/ 위 방향키와 함께 사용해 윗점가능";
            break;
        case 8:
            rep = "회피율 20% 증가";
            break;
        case 9:
            rep = "훔친 다른 모험가의 스킬 중 2차 이하의 것을 사용한다.";
            break;
        case 10:
            rep = "전방의 10명,320% 공격, 뒤로 밀쳐냄";
            break;
        case 11:
            rep = "영구적으로 행운 60 증가";
            break;
        case 12:
            rep = "8명의 적을 320%의 데미지로 4번 공격";
            break;
        case 13:
            rep = "훔친 다른 모험가의 스킬 중 3차 이하의 것을 사용한다.";
            break;
        case 14:
            rep = "사망방지, HP 100%회복. 부활시 4초간 무적/ 쿨1800초";
            break;
        case 15:
            rep = "최대 HP 30% 증가, 최대 MP 30% 증가, 스탠스 40% 증가";
            break;
        case 16:
            rep = "공격력 40 증가";
            break;
        case 17:
            rep = "30% 확률로 추가 회피";
            break;
        case 18:
            rep = "크리티컬 확률 35%, 최종 데미지 30% 증가";
            break;
        case 19:
            rep = "전방 6명의 적에게 140% 데미지로 연속해서 3번 공격";
            break;
        case 20:
            rep = "훔친 다른 모험가의 스킬 중 4차 이하의 것을 사용한다.";
            break;
        case 21:
            rep = "키다운 스킬/ 8명의 적을 200% 데미지로 3번 공격";
            break;
        case 22:
            rep = "후방이동, 10명,450%,3번 공격/ 15초간 방무20% 디버프";
            break;
        case 23:
            rep = "크리티컬시 카드가 주위 적 270% 자동 공격,카드스택 1증가";
            break;
        case 24:
            rep = "하단 참조";
            break;
        case 25:
            rep = "[패시브효과: 데미지 30%, 방무 30%]/ 액티브효과X";
            break;
        case 26:
            rep = "훔친 다른 모험가의 140레벨 하이퍼 버프스킬을 사용한다.";
            break;
        case 27:
            rep = "화면내 15명,700%,6번 공격/ 쿨 30초";
            break;
        case 28:
            rep = "하단 참조";
            break;
        case 29:
            rep = "카드3개가 1320%,6번 공격후 12명,1760%,6번 추가공격/ 쿨15초";
            break;
        case 30:
            rep = "하단 참조";
            break;
        case 31:
            rep = "10명,880%,7번 공격 참격 or 순간이동 7번까지 시행";
            break;
    }
    return rep;
};
skpt.getskilldesc2Phantom = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "스킬종료 후 이동1회마다 쿨1.5초 적용";
            break;
        case 1:
            rep = "손재주 20레벨, 통찰력 20레벨";
            break;
        case 2:
            rep = "마우스 커서를 이동하여 주변 모험가 캐릭터를 선택";
            break;
        case 3:
            rep = "스킬을 세팅 시에 해당 스킬은 30초간 사용할 수 없다.";
            break;
        case 4:
            rep = "-";
            break;
        case 5:
            rep = "팬텀의 링크 스킬.";
            break;
        case 6:
            rep = "추천: 카디널 디스차지, 다크 사이트";
            break;
        case 7:
            rep = "[패시브 효과 : 이속 35, 최대이속 20, 점프력 20]";
            break;
        case 8:
            rep = "영구적으로 회피율을 증가시킨다.";
            break;
        case 9:
            rep = "추천: 카디널 블래스트, 힐, 분노";
            break;
        case 10:
            rep = "일부 몬스터는 저항하여 밀리지 않는다.";
            break;
        case 11:
            rep = "영구적으로 행운을 증가시킨다.";
            break;
        case 12:
            rep = "-";
            break;
        case 13:
            rep = "추천: 홀리심볼, 크로스오버체인, 애로우플래터, 블레이드어센션";
            break;
        case 14:
            rep = "[패시브 효과 : 영구적으로 행운 60 증가]";
            break;
        case 15:
            rep = "속성 내성 45% 증가, 상태 이상 내성 45 증가";
            break;
        case 16:
            rep = "푸른 달의 힘을 받아 공격력이 증가한다.";
            break;
        case 17:
            rep = "발동 시 팬텀의 문양이 나타나며 피격을 회피한다.";
            break;
        case 18:
            rep = "-";
            break;
        case 19:
            rep = "키다운 중에 이동키로 이동이 가능/ 초당 6.66타";
            break;
        case 20:
            rep = "추천: 캐논바주카, 언카블, 퍼실, 생츄, 프로즌오브, 파이널컷";
            break;
        case 21:
            rep = "재사용 대기시간 18초/ 초당 5.55타";
            break;
        case 22:
            rep = "[패시브 효과 : 팬텀 차지의 데미지 50% 증가]";
            break;
        case 23:
            rep = "반전카드: 4명,900% 공격, 일몹뎀 100%, 쿨5초/ 추가회피20%";
            break;
        case 24:
            rep = "-";
            break;
        case 25:
            rep = "스탠스 60% / 아리아의 영혼 등장";
            break;
        case 26:
            rep = "추천: 새크로생티티, 불스아이, 프리퍼레이션";
            break;
        case 27:
            rep = "8초간 카드 주변 6명,200%,2번 공격";
            break;
        case 28:
            rep = "-";
            break;
        case 29:
            rep = "해방된카드: 10명,1540%,1번 공격 3회발동, 최대21회 공격발동";
            break;
        case 30:
            rep = "-";
            break;
        case 31:
            rep = "쿨30초/ 남은 순간이동 1회당 쿨 3.5초 감소";
            break;
    }
    return rep;
};
skpt.getskilldesc3Phantom = function (skillcode){
    rep = "";
    switch(skillcode){
        case 4:
            rep = "카드 스택이 가득 찼을 때, 스택을 모두 소비하면서 하나의 카드를 뽑는다. 뽑힌 카드에 따라 부가적인 효과를 받을 수 있으며, 추가 카드 공격이 이루어진다.\n\nMP 60 소비, 사용 시 전방의 적에게 10번 느와르 카르트 공격을 하고 30초 동안 다음 효과중에 하나를 받음.\n\n포츈 카드 : 크리티컬 확률 20% 증가\n미스포츈 카드 : 아이템 드롭률 10% 증가\n인듀어런스 카드 : 상태 이상 내성/속성 내성이 각각 20, 20% 증가\n드레인 카드 : 공격 시 최대 HP의 1%만큼 회복";
            break;        
        case 24:
            rep = "주변의 몬스터에게 걸린 버프를 훔친다. 훔친 버프의 종류가 다양할 경우 가장 효율이 좋은 버프 1종만 자신에게 적용하며, 버프에 걸린 몬스터가 없을 경우 아무런 효과도 받지 못한다.\n\nMP 60 소비, 최대 12명의 주변 몬스터에게 걸린 버프를 훔쳐서 자신에게 건다. 훔쳐서 적용되는 버프 내용은 아래와 같다.\n\n공격력 : 공격력 40 증가\n피해 무효화 : 받는 피해량 40% 감소\n공격반사 : 받는 데미지의 600%의 데미지 반사\n물리/마법무효, 하드스킨 : 일부 공격을 제외하고는 피해를 입지 않는 일시적 무적\n\n재사용 대기시간 120초";
            break;
        case 28:
            rep = "수많은 카드를 던진 후 마지막 카드 1장으로 운을 시험한다. 느린 속도로 이동하며 공격할 수 있고 범위 내의 적 중 최대 HP가 가장 높은 보스 몬스터를 우선으로 공격한다. 공격이 멈춘 후 카드를 뽑는 동안 무적이다.\n\nMP 1000 소비, 최대 7초 동안 전방으로 일정 시간마다 770%의 데미지로 1번 공격하는 카드를 다수 던져 공격, 공격 도중 최대 HP의 일정 비율로 피해를 입히는 공격을 포함한 피격 데미지 15% 감소\n공격을 멈춘 후 카드를 뽑아 30초 동안 파티원 전체가 버프를 받음\n\n적십자 : 일정 시간마다 최대 HP와 MP의 2% 회복\n생명의 나무 : 최대 HP의 일정 비율로 피해를 입히는 공격을 포함한 피격 데미지 8% 감소, 상태 이상 내성 25 증가\n모래시계 : 재사용 대기시간 초기화의 영향을 받지 않는 스킬을 제외한 스킬의 재사용 대기시간이 32% 더 빠르게 감소\n날카로운 검 : 최종 데미지 6% 증가\n조커 : 모든 효과를 한번에 받음\n\n재사용 대기시간 : 180초";
            break;
        case 30:
            rep = "표적의 위치로 순간 이동하여 괴도 팬텀의 표식을 그 몸에 새긴다.\n케인을 사용하는 스킬 및 템페스트 오브 카드 적중 시 괴도의 증표를 1개 획득할 수 있고 팬텀의 표적이 된 적이 있거나 괴도의 증표를 모두 모아야 사용 가능하다.\n표적으로 삼을 수 있는 적은 1명 뿐이며 범위 안의 최대 HP가 가장 높은 적이 우선된다. 팬텀의 표적이 된 적, 최대 HP가 가장 높은 보스 몬스터, 가장 먼 적 순으로 목표가 정해진다.\n\nMP 1000, 표적이 된 적이 없다면 괴도의 증표 7개 필요, 스킬 발동 시 모든 괴도의 증표 소비\n\n이동 시작부터 2초 동안 무적 상태\n\n660%로 6번 공격하는 궤적이 7번 발동한 후 1055%의 데미지로 15번 공격하는 괴도 팬텀의 표식이 2번 발동하며 마무리, 모든 공격은 최대 10명의 적을 공격하고 추가 크리티컬 확률 100%\n\n케인을 사용하는 스킬 및 템페스트 오브 카드를 적에게 적중시키면 30초 동안 디버프를 남기고 7번 중첩되면 해당 적을 표적으로 삼음\n\n얼티밋 드라이브, 템페스트 오브 카드, 리프트 브레이크는 적을 표적으로 삼거나 괴도의 증표를 모으기 위해 다른 스킬 대비 7배 적중 필요\n\n탤런트 오브 팬텀시프로 사용하는 공격 스킬은 5배 적중 필요\n\n재사용 대기시간 30초";
            break;
    }
    return rep;
};
skpt.getskillimage1Phantom = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "https://i.imgur.com/m9MY6vU.png";
            break;
        case 1:
            rep = "";
            break;
        case 2:
            rep = "https://i.imgur.com/qvgsX6G.png";
            break;
        case 3:
            rep = "https://i.imgur.com/drwWF7h.png";
            break;
        case 4:
            rep = "https://i.imgur.com/TFSMLOK.png";
            break;
        case 5:
            rep = "";
            break;
        case 6:
            rep = "";
            break;
        case 7:
            rep = "https://i.imgur.com/i8SmOMT.png";
            break;
        case 8:
            rep = "";
            break;
        case 9:
            rep = "";
            break;
        case 10:
            rep = "https://i.imgur.com/DHFlyyh.png";
            break;
        case 11:
            rep = "";
            break;
        case 12:
            rep = "https://i.imgur.com/PT1cWSF.png";
            break;
        case 13:
            rep = "";
            break;
        case 14:
            rep = "https://i.imgur.com/N1fwwcd.png";
            break;
        case 15:
            rep = "";
            break;
        case 16:
            rep = "";
            break;
        case 17:
            rep = "https://i.imgur.com/z5ozXk4.png";
            break;
        case 18:
            rep = "";
            break;
        case 19:
            rep = "https://i.imgur.com/FREcTmr.png";
            break;
        case 20:
            rep = "";
            break;
        case 21:
            rep = "https://i.imgur.com/lG8bOiq.png";
            break;
        case 22:
            rep = "https://i.imgur.com/PotGpGz.png";
            break;
        case 23:
            rep = "https://i.imgur.com/9TEe8Ke.png";
            break;
        case 24:
            rep = "https://i.imgur.com/1Hxnb6G.png";
            break;
        case 25:
            rep = "https://i.imgur.com/khDSELn.png";
            break;
        case 26:
            rep = "";
            break;
        case 27:
            rep = "https://i.imgur.com/wnZpCts.png";
            break;
        case 28:
            rep = "https://i.imgur.com/oJT3uYZ.png";
            break;
        case 29:
            rep = "https://i.imgur.com/FutqS6Y.png";
            break;
        case 30:
            rep = "https://i.imgur.com/CEqHpPA.png";
            break;
        case 31:
            rep = "https://i.imgur.com/v7DQNVN.png";
            break;
    }
    return rep;
};
skpt.getskillimage2Phantom = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "https://i.imgur.com/XKXwdzt.png";
            break;
        case 1:
            rep = "https://i.imgur.com/AmkXo0F.png";
            break;
        case 2:
            rep = "https://i.imgur.com/64p7AlX.png";
            break;
        case 3:
            rep = "https://i.imgur.com/wbP5U3h.png";
            break;
        case 4:
            rep = "https://i.imgur.com/PzOTQA8.png";
            break;
        case 5:
            rep = "https://i.imgur.com/SiVSNSE.png";
            break;
        case 6:
            rep = "https://i.imgur.com/IHL1AE9.png";
            break;
        case 7:
            rep = "https://i.imgur.com/9F134IH.png";
            break;
        case 8:
            rep = "https://i.imgur.com/77xd7QF.png";
            break;
        case 9:
            rep = "https://i.imgur.com/MyagjYV.png";
            break;
        case 10:
            rep = "https://i.imgur.com/yiCY16M.png";
            break;
        case 11:
            rep = "https://i.imgur.com/La6Xwjr.png";
            break;
        case 12:
            rep = "https://i.imgur.com/GzM9hwt.png";
            break;
        case 13:
            rep = "https://i.imgur.com/ylIsiDC.png";
            break;
        case 14:
            rep = "https://i.imgur.com/wUcIj6H.png";
            break;
        case 15:
            rep = "https://i.imgur.com/jyVv00L.png";
            break;
        case 16:
            rep = "https://i.imgur.com/8LkKnZV.png";
            break;
        case 17:
            rep = "https://i.imgur.com/vwLK7hF.png";
            break;
        case 18:
            rep = "https://i.imgur.com/aInPKvu.png";
            break;
        case 19:
            rep = "https://i.imgur.com/48p1JWN.png";
            break;
        case 20:
            rep = "https://i.imgur.com/0Xsx0IT.png";
            break;
        case 21:
            rep = "https://i.imgur.com/2GUAExp.png";
            break;
        case 22:
            rep = "https://i.imgur.com/PkYLgv1.png";
            break;
        case 23:
            rep = "https://i.imgur.com/HlNo1vj.png";
            break;
        case 24:
            rep = "https://i.imgur.com/llQCPrX.png";
            break;
        case 25:
            rep = "https://i.imgur.com/UCVWBUw.png";
            break;
        case 26:
            rep = "https://i.imgur.com/g86i52h.png";
            break;
        case 27:
            rep = "https://i.imgur.com/EAUXOeu.png";
            break;
        case 28:
            rep = "https://i.imgur.com/LeUOLWZ.png";
            break;
        case 29:
            rep = "https://i.imgur.com/Ak6cI6B.png";
            break;
        case 30:
            rep = "https://i.imgur.com/xnJRfgk.png";
            break;
        case 31:
            rep = "https://i.imgur.com/00Ezb4j.png";
            break;
    }
    return rep;
};

module.exports = skpt;