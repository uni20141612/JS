const skb = {};

skb.getskillBlaster = function (skillname){
    var bret = -1;
    switch(skillname){
        case "벙커 버스터":
        case "벙커버스터":
        case "벙커":
        case "벙버":
            bret = 0;
            break;
        case "발칸 펀치":
        case "발칸펀치":
        case "발칸":
            bret = 1;
            break;
        case "버닝 브레이커":
        case "버닝브레이커":
        case "버브":
        case "버닝":
            bret = 2;
            break;
        case "애프터이미지 쇼크":
        case "애프터이미지쇼크":
        case "애프터이미지":
        case "애프터":
        case "애이쇼":
        case "애쇼":
            bret = 3;
            break;
        case "매그넘 펀치":
        case "매그넘펀치":
        case "매펀":
        case "펀치":
        case "매그넘":
            bret = 4;
            break;
        case "리볼빙 캐논":
        case "리볼빙캐논":
        case "리볼빙":
        case "리캐":
            bret = 5;
            break;
        case "릴리즈 파일 벙커":
        case "릴리즈 파일벙커":
        case "릴리즈파일 벙커":
        case "릴리즈파일벙커":
        case "릴파벙":
            bret = 6;
            break;
        case "더블 점프":
        case "더블점프":
        case "더점":
        case "덥점":
            bret = 7;
            break;
        case "익스플로젼 무브":
        case "익스플로젼무브":
        case "익스플로젼":
        case "윗점":
            bret = 8;
            break;
        case "인듀어런스 실드":
        case "인듀어런스실드":
        case "인듀어런스":
        case "인실":
        case "실드":
            bret = 9;
            break;
        case "더블 팡":
        case "더블팡":
        case "덥팡":
        case "팡":
            bret = 10;
            break;
        case "더킹":
        case "덬":
        case "덕":
            bret = 11;
            break;
        case "차지 마스터리":
        case "차지마스터리":
        case "차마":
            bret = 12;
            break;
        case "리볼빙 캐논 업그레이드":
        case "리볼빙캐논 업그레이드":
        case "리볼빙캐논업그레이드":
        case "리캐업":
            bret = 13;
            break;
        case "해머 스매시":
        case "해머스매시":
        case "해스":
        case "해머":
        case "스매시":
            bret = 14;
            break;
        case "스웨이":
            bret = 15;
            break;
        case "리프트 프레스":
        case "리프트프레스":
        case "리프트":
        case "프레스":
        case "잡기":
        case "돌진기":
        case "돌진":
            bret = 16;
            break;
        case "매그넘 캐논":
        case "매그넘캐논":
        case "매캐":
            bret = 17;
            break;
        case "리볼빙 캐논 업그레이드 II":
        case "리볼빙캐논 업그레이드 II":
        case "리볼빙캐논업그레이드 II":
        case "리볼빙캐논업그레이드II":
        case "리캐업II":
        case "리볼빙 캐논 업그레이드 2":
        case "리볼빙캐논 업그레이드 2":
        case "리볼빙캐논업그레이드 2":
        case "리볼빙캐논업그레이드2":
        case "리캐업2":
            bret = 18;
            break;
        case "인듀어런스 트레이닝":
        case "인듀어런스트레이닝":
        case "인트":
            bret = 19;
            break;
        case "콤비네이션 트레이닝":
        case "콤비네이션트레이닝":
        case "콤비네이션":
        case "콤트":
            bret = 20;
            break;
        case "쇼크 웨이브 펀치":
        case "쇼크웨이브 펀치":
        case "쇼크웨이브펀치":
        case "쇼웨펀":
        case "쇽웨펀":
        case "숔웨펀":
        case "숔펀":
        case "쇽펀":
            bret = 21;
            break;
        case "플래시 무브":
        case "플래시무브":
        case "플래시":
        case "무브":
            bret = 22;
            break;
        case "허리케인 믹서":
        case "허리케인믹서":
        case "허리케인":
        case "믹서":
        case "허믹":
            bret = 23;
            break;
        case "리볼빙 벙커":
        case "리볼빙벙커":
        case "리벙":
        case "바인드":
        case "셀프바인드":
            bret = 24;
            break;
        case "슈퍼 인듀어런스":
        case "슈퍼인듀어런스":
        case "슈인":
            bret = 25;
            break;
        case "리볼빙 캐논 업그레이드 III":
        case "리볼빙캐논 업그레이드 III":
        case "리볼빙캐논업그레이드 III":
        case "리볼빙캐논업그레이드III":
        case "리캐업III":
        case "리볼빙 캐논 업그레이드 3":
        case "리볼빙캐논 업그레이드 3":
        case "리볼빙캐논업그레이드 3":
        case "리볼빙캐논업그레이드3":
        case "리캐업3":
            bret = 26;
            break;
        case "인듀어런스 트레이닝 II":
        case "인듀어런스트레이닝 II":
        case "인듀어런스트레이닝II":
        case "인트II":
        case "인듀어런스 트레이닝 2":
        case "인듀어런스트레이닝 2":
        case "인듀어런스트레이닝2":
        case "인트2":
            bret = 27;
            break;
        case "어드밴스드 차지 마스터리":
        case "어드밴스드차지 마스터리":
        case "어드밴스드차지마스터리":
        case "어차마":
            bret = 28;
            break;
        case "콤비네이션 트레이닝 II":
        case "콤비네이션트레이닝 II":
        case "콤비네이션트레이닝II":
        case "콤트II":
        case "콤비네이션 트레이닝 2":
        case "콤비네이션트레이닝 2":
        case "콤비네이션트레이닝2":
        case "콤트2":
            bret = 29;
            break;
        case "맥시마이즈 캐논":
        case "맥시마이즈캐논":
        case "맥마캐":
        case "맥캐":
            bret = 30;
            break;
        case "하이퍼 매그넘 펀치":
        case "하이퍼 매그넘펀치":
        case "하이퍼매그넘펀치":
        case "하매펀":
            bret = 31;
            break;
        case "":
            bret = 32;
            break;
    }
    return bret;
};
skb.getskillnameBlaster = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "벙커 버스터";
            break;
        case 1:
            rep = "발칸 펀치";
            break;
        case 2:
            rep = "버닝 브레이커";
            break;
        case 3:
            rep = "애프터이미지 쇼크";
            break;
        case 4:
            rep = "매그넘 펀치";
            break;
        case 5:
            rep = "리볼빙 캐논";
            break;
        case 6:
            rep = "릴리즈 파일 벙커";
            break;
        case 7:
            rep = "더블 점프";
            break;
        case 8:
            rep = "익스플로젼 무브";
            break;
        case 9:
            rep = "인듀어런스 실드";
            break;
        case 10:
            rep = "더블 팡";
            break;
        case 11:
            rep = "더킹";
            break;
        case 12:
            rep = "차지 마스터리";
            break;
        case 13:
            rep = "리볼빙 캐논 업그레이드";
            break;
        case 14:
            rep = "해머 스매시";
            break;
        case 15:
            rep = "스웨이";
            break;
        case 16:
            rep = "리프트 프레스";
            break;
        case 17:
            rep = "매그넘 캐논";
            break;
        case 18:
            rep = "리볼빙 캐논 업그레이드 II";
            break;
        case 19:
            rep = "인듀어런스 트레이닝";
            break;
        case 20:
            rep = "콤비네이션 트레이닝";
            break;
        case 21:
            rep = "쇼크 웨이브 펀치";
            break;
        case 22:
            rep = "플래시 무브";
            break;
        case 23:
            rep = "허리케인 믹서";
            break;
        case 24:
            rep = "리볼빙 벙커";
            break;
        case 25:
            rep = "슈퍼 인듀어런스";
            break;
        case 26:
            rep = "리볼빙 캐논 업그레이드 III";
            break;
        case 27:
            rep = "인듀어런스 트레이닝 II";
            break;
        case 28:
            rep = "어드밴스드 차지 마스터리";
            break;
        case 29:
            rep = "콤비네이션 트레이닝 II";
            break;
        case 30:
            rep = "맥시마이즈 캐논";
            break;
        case 31:
            rep = "하이퍼 매그넘 펀치";
            break;
        case 32:
            rep = "";
            break;
    }
    return rep;
};
skb.getskilldesc1Blaster = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "45초간 5차스킬제외 직접공격에 리볼빙캐논 자동발동/ 쿨120초";
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
            rep = "하단 참조";
            break;
        case 7:
            rep = "MP 5 소비, 일정 거리 점프";
            break;
        case 8:
            rep = "하단 참조";
            break;
        case 9:
            rep = "하단 참조";
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
            rep = "하단 참조";
            break;
        case 14:
            rep = "하단 참조";
            break;
        case 15:
            rep = "하단 참조";
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
            rep = "하단 참조";
            break;
        case 21:
            rep = "하단 참조";
            break;
        case 22:
            rep = "하단 참조";
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
            rep = "하단 참조";
            break;
        case 32:
            rep = "";
            break;
    }
    return rep;
};
skb.getskilldesc2Blaster = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "강화된 공격은 10명,390%,8번 공격/ 방무100%";
            break;
        case 1:
            rep = "키다운을 유지할 시 30레벨 기준 192,720%";
            break;
        case 2:
            rep = "동작의 액션 딜레이가 굉장히 길다.";
            break;
        case 3:
            rep = "-";
            break;
        case 4:
            rep = "주력기";
            break;
        case 5:
            rep = "추가 공격기";
            break;
        case 6:
            rep = "광범위 공격기";
            break;
        case 7:
            rep = "더블 점프";
            break;
        case 8:
            rep = "상향 이동기";
            break;
        case 9:
            rep = "보호막 패시브";
            break;
        case 10:
            rep = "매그넘 펀치 연계";
            break;
        case 11:
            rep = "전진 이동기";
            break;
        case 12:
            rep = "차지 스킬 패시브";
            break;
        case 13:
            rep = "불릿 스킬 패시브";
            break;
        case 14:
            rep = "디버프기";
            break;
        case 15:
            rep = "후방 이동기";
            break;
        case 16:
            rep = "잡기형 돌진기";
            break;
        case 17:
            rep = "원거리 다수 공격기";
            break;
        case 18:
            rep = "불릿 강화 패시브";
            break;
        case 19:
            rep = "인듀어런스 실드 강화 패시브";
            break;
        case 20:
            rep = "차지 및 연계 패시브";
            break;
        case 21:
            rep = "다수 공격기";
            break;
        case 22:
            rep = "스웨이 후속 연계기";
            break;
        case 23:
            rep = "키다운형 광범위 공격기";
            break;
        case 24:
            rep = "바인드기";
            break;
        case 25:
            rep = "긴급 회복기";
            break;
        case 26:
            rep = "불릿 스킬 최종강화 패시브";
            break;
        case 27:
            rep = "인듀어런스 실드 강화 패시브";
            break;
        case 28:
            rep = "차지 마스터리 강화 패시브";
            break;
        case 29:
            rep = "콤비네이션 트레이닝 강화 패시브";
            break;
        case 30:
            rep = "극딜 버프";
            break;
        case 31:
            rep = "차지형 다수 공격기";
            break;
        case 32:
            rep = "";
            break;
    }
    return rep;
};
skb.getskilldesc3Blaster = function (skillcode){
    rep = "";
    switch(skillcode){
        case 1:
            rep = "전방으로 무수한 펀치를 빠르게 내지른다. 사용 중에는 가드 판정을 받고 적의 어떠한 공격에도 밀려나지 않으며 치명적인 상태 이상에 걸리지 않는다.\n\nMP 60 소비, 최대 10명의 적을 1100%의 데미지로 12번 공격, 키다운을 유지하면 최대 4초 동안 935%의 데미지로 연속해서 8번 공격\n사용 중 차지 마스터리 수치에 의한 가드 판정을 받고 공격 적중 시 콤비네이션 트레이닝 최대 단계로 유지\n\n재사용 대기시간 60초";
            break;
        case 2:
            rep = "불릿의 폭발력을 건틀렛 리볼버에 저장한 후 돌진하며 일시에 방출한다. 돌진 및 폭발은 공격 반사 상태의 적에게도 피해를 입힌다. 돌진 동작은 차지 스킬로 취소할 수 없지만 스킬을 다시 입력하여 즉시 폭발을 일으킬 수 있다. 키다운 종료 시 아래 방향키를 누르고 있으면 돌진하지 않고 제자리에서 공격한다.\n\nMP 1000 소비, 시전 시 불릿 모두 리로드 후 불릿 1개 소비\n최대 5초 동안 준비 가능하고 리볼빙 캐논을 사용하여 최대 5까지 불릿 추가 소모 가능\n키다운 종료 시 돌진하고 사용한 불릿 수에 비례한 폭발 방출, 돌진 중 스킬을 재사용하여 즉시 폭발 방출 가능\n\n준비 및 돌진 동작 중 무적, 즉시 폭발 시 1초 무적, 스킬 시전 동작 중 콤비네이션 트레이닝 최대 단계로 유지\n돌진 : 최대 12명의 적을 3300%의 데미지로 15번 공격\n폭발 : 최대 12명의 적을 2640%의 데미지로 15번 공격\n모든 공격은 추가 크리티컬 확률 100% , 몬스터 방어율 100% 추가 무시\n\n재사용 대기시간 100초";
            break;
        case 3:
            rep = "강렬한 공격이 잔상과 같은 파동을 만들어 적을 휩쓴다. 잔상의 공격은 공격 반사 상태의 적을 공격해도 피해를 입지 않는다. 액티브 효과 지속 중 스킬을 재사용하면 즉시 종료할 수 있다.\n\n액티브 효과 : MP 1000 소비, 100초 동안 건틀렛 리볼버를 이용한 직접 공격 적중 시 적중된 적에게 990% 데미지로 5번 추가 공격하는 잔상 발생, 잔상은 최대 49번까지 발생 가능, 재발생 대기시간 0.1초\n패시브 효과 : 애프터이미지 쇼크의 액티브 효과가 지속 중이지 않을 때 건틀렛 리볼버를 이용한 직접 공격 적중 시 주변의 공격받지 않은 최대 10명의 적을 1100%의 데미지로 3번 공격하는 잔상 발생, 액티브 효과와 패시브 효과는 동시에 발동되지 않음, 재발생 대기시간 4초\n\n재사용 대기시간 : 120초";
            break;
        case 4:
            rep = "건틀렛 리볼버의 폭발력을 이용하여 전방에 강력한 스트레이트 펀치를 내지른다. 해당 스킬을 사용하면서 리볼빙 캐논을 사용할 수 있다. 더블 팡과 버닝 브레이커로 연계가 가능하다.\n\nMP 12 소비, 최대 6명의 적을 75% 데미지로 3번 공격\n매그넘 펀치 사용 중 리볼빙 캐논을 사용하면 같은 수의 적을 40%의 데미지로 3번 추가 공격";
            break;
        case 5:
            rep = "건틀렛 리볼버에 내장된 캐논을 이용하여 추가 폭발을 일으켜 피해를 준다. 단독으로는 사용할 수 없으며 일부 공격 중에만 사용 가능하다.\n키다운을 통해 차지 시 불릿을 수동으로 리로드한다. 차지는 다른 스킬 사용 중에도 가능하며 한 번에 최대 2개의 스킬을 동시에 차지할 수 있다.\n리볼빙 캐논 사용 가능 스킬 : 매그넘 펀치, 더블 팡, 리볼빙 벙커\n\n불릿 1개 소비, 키다운 시 불릿 리로드";
            break;
        case 6:
            rep = "축적한 실린더를 한 번에 터뜨려 파일 벙커를 꽂아 넣는다. 파일 벙커는 폭발을 수반한 충격파를 발생시킨다. 파일 벙커를 이용한 직접 공격은 몬스터의 방어율을 추가로 무시한다.\n실린더 게이지는 일부 공격 스킬 사용 중 리볼빙 캐논을 사용하면 증가한다. 스킬 사용 시 실린더 게이지에 따라 다중 충격파가 발생하여 가까운 적일 수록 더 많은 피해를 입힌다. 일정 실린더 게이지가 쌓여야만 사용 가능하며 공격 반사 상태의 적을 공격해도 피해를 입지 않는다\n\n실린더 게이지 최소 3칸 필요, 최대 10명의 적을 100%의 데미지로 8번 공격, 해당 공격은 몬스터의 방어율을 80% 추가 무시\n이후 최대 10명의 적을 50%의 데미지로 6번 공격하는 충격파A 발생\n\n사용 후 7초 동안 과열되어 실린더 게이지가 최대치가 되며 해당 시간 동안 실린더 게이지 충전 및 릴리즈 파일 벙커 사용 불가, 이후 실린더 게이지 모두 소비.";
            break;
        case 8:
            rep = "전방을 향해 불릿을 폭발시켜 역추진력을 얻는다. 이에 따라 반동으로 후방으로 뛰어오르며 근처의 적에게 피해를 입힌다. ↑ 방향키를 누른 채 사용 시 지면 방향으로 폭발을 일으켜 위로 뛰어오른다. 공격 반사 상태의 적을 공격해도 피해를 입지 않으며 불릿을 리로드하는 중에는 사용할 수 없다.\n\n불릿 1개 소비, 최대 6명의 적을 155% 데미지로 2번 공격";
            break;
        case 9:
            rep = "적에게 공격을 당하면 끈기를 발휘하여 받은 피해에 비례해 보호막을 생성한다. 단, 보호막과 현재 HP의 합이 최대 HP를 넘을 수 없고 초과한 실드는 소멸한다. 또한 블래스터의 스킬 사용 중에는 적에게 공격 받아도 밀려나지 않는다.\n\n피격 시 피격 데미지의 30%를 보호막으로 전환, 초당 현재 보호막의 40% + 50씩 소멸, 보호막의 최대치는 최대 HP와 같음.\n블래스터의 스킬 사용 중에는 스탠스 확률이 100% 증가.\n\n영구히 밀리지 않을 확률 40%, 방어력 200, 최대 HP 20% 증가";
            break;
        case 10:
            rep = "건틀렛 리볼버의 추진력을 이용하여 전방에 강력한 2단 콤비네이션을 가한다. 스킬을 배운 뒤 매그넘 펀치 버튼을 연타해도 사용할 수 있다. 스킬을 사용하면서 리볼빙 캐논을 사용할 수 있다. 더킹, 해머 스매시, 스웨이, 쇼크 웨이브 펀치, 버닝 브레이커로 연계 가능하다.\n\nMP 20 소비, 최대 6명의 적을 130% 데미지로 4번 공격\n더블 팡 사용 중 리볼빙 캐논을 사용하면 같은 수의 적을 80%의 데미지로 3번 추가 공격";
            break;
        case 11:
            rep = "적의 공격을 회피하며 전방으로 이동한다. 점프 키를 입력하여 급정지 할 수 있다. 커스텀 커맨드를 사용하면 스킬을 재사용해 급정지할 수 있다.\n매그넘 펀치, 리프트 프레스, 버닝 브레이커로 연계 가능하다.\n키다운을 통해 차지가 가능하며, 차지 후 발동 시 자신의 다른 스킬 사용 중에도 해당 스킬을 취소하며 더킹이 발동된다. 차지는 더킹을 제외한 다른 스킬 사용 중에도 가능하며 한번에 최대 2개의 스킬을 동시에 차지할 수 있다. 추가로 영구히 매그넘 펀치의 데미지가 증가한다.\n\nMP 9 소비, 스킬 발동 후 1.5초 동안 추가 회피 35% 적용\n매그넘 펀치의 데미지 90%p 증가";
            break;
        case 12:
            rep = "힘의 완급 조절을 익혀 차지 스킬의 기능을 보완한다. 추가로 영구히 데미지가 증가한다.\n\n각 차지 스킬의 차지 시간 15% 감소, 차지 스킬 사용 시 불릿 1개 즉시 리로드, 공중에서 사용할 때와 자동 리로드 중에는 리로드 되지 않음.\n차지한 더킹과 스웨이의 시작 부분과 차지한 해머 스매시 사용 중 최대 HP의 일정 비율로 피해를 입히는 공격을 포함한 피해를 20% 감소시키는 가드 판정 발생\n영구히 데미지 20% 증가";
            break;
        case 13:
            rep = "건틀렛 리볼버에 내장된 리볼빙 캐논의 성능을 개선한다.\n\n릴리즈 파일 벙커 데미지 20%p , 충격파A의 데미지 40%p 증가\n과열로 인한 추가 타격 데미지 20%p, 매그넘 펀치 중 리볼빙 캐논 데미지 40%p 증가\n최대 실린더 게이지 4칸으로 확장, 최대 불릿 4개로 증가\n\n실린더 게이지 4칸 이상일 때 릴리즈 파일 벙커 사용 시 데미지 40%p 증가, 최대 10명의 적을 100%의 데미지로 6번 공격하는 충격파B 추가 발생";
            break;
        case 14:
            rep = "지면을 내려찍듯 강타하여 주변 적들에게 피해를 입히고 공중으로 띄운다. 공격 당한 적은 일정 시간 동안 블래스터의 공격에 받는 최종 데미지가 증가하는 디버프에 걸린다.\n매그넘 펀치, 버닝 브레이커로 연계 가능하다.\n키다운을 통해 차지가 가능하다. 차지 후 발동 시 자신의 다른 스킬 사용 중에도 해당 스킬을 취소하며 해머 스매시가 발동되고 스킬 사용 중 적의 어떤 공격을 받아도 밀려나지 않으며 스킬 종료 후 지면에 충격파를 남겨 추가 공격을 한다.\n\n차지는 해머 스매시를 제외한 다른 스킬 사용 중에도 가능하며 한번에 최대 2개의 스킬을 동시에 차지할 수 있다.\n충격파는 공격 반사 상태의 적을 공격해도 피해를 입지 않는다.\n추가로 영구히 더블 팡의 데미지가 증가한다.\n\nMP 25 소비, 최대 8명의 적을 200% 데미지로 6번 공격, 피격된 적은 30초 동안 블래스터의 공격에 받는 최종 데미지 10% 증가 디버프에 걸림.\n차지 후 사용 시 5초 동안 최대 8명을 150%로 2번 공격하는 충격파 설치, 충격파에 피격된 적도 최종 데미지 증가 디버프에 걸림\n더블 팡의 데미지 90%p 증가";
            break;
        case 15:
            rep = "적의 공격을 회피하며 후방 이동한다. 점프 키를 입력하여 급정지 할 수 있다. 커스텀 커맨드를 사용하면 스킬을 재사용 해 급정지 할 수 있다.\n리프트 프레스, 플래시 무브, 버닝 브레이커로 연계 가능하다.\n키다운을 통해 차지가 가능하며, 차지 후 발동 시 자신의 다른 스킬 사용 중에도 해당 스킬을 취소하며 스웨이가 발동된다. 차지는 스웨이를 제외한 다른 스킬 사용 시에도 가능하며 한번에 최대 2개의 스킬을 동시에 차지할 수 있다. 추가로 영구히 매그넘 펀치의 데미지가 증가한다.\n\nMP 9 소비, 스킬 발동 후 1.5초 동안 추가 회피 35% 적용\n매그넘 펀치의 데미지 105%p 증가";
            break;
        case 16:
            rep = "근처의 적을 움켜쥔 후에 전방으로 밀어내면서 끌고 간다. 밀어내는 중에 마주치는 적이 있다면 충돌하여 데미지를 받는다. 근처에 잡을 수 없는 적이 없으면 발동되지 않는다. 일부 몬스터는 저항하여 잡히거나 밀리지 않는다.\n\nMP 28 소비, 1명의 적을 100% 데미지로 공격하며 잡은 후 이동. 경로에 적이 있다면 최대 7명을 250%의 데미지로 4번 공격하며 함께 밀어냄, 일반 몬스터 공격 시 데미지 20% 증가";
            break;
        case 17:
            rep = "건틀렛 리볼버에 내장된 캐논으로 불릿을 전방으로 발사해 순수한 폭발력으로 적을 공격한다.\n\nMP 60, 불릿 1개 소비\n최대 6명의 적을 250% 데미지로 4번 공격, 일반 몬스터 공격 시 데미지 20% 증가\n\n재사용 대기시간 4초";
            break;
        case 18:
            rep = "건틀렛 리볼버에 내장된 리볼빙 캐논의 성능을 강화한다. 리볼빙 캐논 업그레이드의 증가량을 덮어 쓴다.\n\n릴리즈 파일 벙커 데미지 60%p, 충격파A의 데미지 80%p, 충격파B의 데미지 40%p 증가\n과열로 인한 추가 타격 데미지 60%p, 매그넘 펀치 중 리볼빙 캐논 데미지 60%p, 더블 팡 중 리볼빙 캐논 데미지 20%p 증가\n최대 실린더 게이지 5칸으로 확장, 최대 불릿 5개로 증가\n실린더 게이지 5칸 이상일 때 릴리즈 파일 벙커 사용 시 데미지 80%p 증가, 최대 10명의 적을 180%의 데미지로 6번 공격하는 충격파C 추가 발생";
            break;
        case 19:
            rep = "수련을 통해 인듀어런스 실드를 강화한다.\n\n피격 시 피격 데미지의 40%를 보호막으로 전환, 초당 현재 보호막의 40% + 50씩 소멸, 보호막의 최대치는 최대 HP와 같음.\n영구히 상태 이상 내성 20, 모든 속성 내성 20% 증가";
            break;
        case 20:
            rep = "전투에서 가장 효율적인 동선과 타격 패턴을 연구한다. 연계 스킬과 차지 스킬 사용 시 능력이 증가한다. 추가로 영구히 공격력이 증가한다.\n\n최대 10단계까지 누적 가능, 30초 동안 유지, 1단계 당 최종 데미지 3% 증가, 6단계 당 공격 속도 1단계 증가, 10단계 당 스킬 연계 속도 1단계 증가\n영구히 공격력 15% 증가";
            break;
        case 21:
            rep = "충격파를 수반한 스크류 블로를 내지른다. 공격 후 짧은 시간 동안 사용한 자리에 회오리치는 충격파가 남아 추가 피해를 입힌다. 더킹, 스웨이, 버닝 브레이커로 연계 가능하다. 추가로 영구히 더블 팡의 데미지가 증가한다.\n\nMP 70 소비, 최대 6명의 적을 265% 데미지로 6번 공격, 이후 충격파 발생\n충격파 : 최대 6명의 적을 140% 데미지로 4번 공격, 일반 몬스터 공격 시 데미지 350% 증가\n\n[패시브 효과 : 더블 팡의 데미지 180%p 증가]";
            break;
        case 22:
            rep = "스웨이 중 가까운 적에게 순간적으로 접근하여 일격을 날린다. 스웨이 중에만 사용할 수 있으며 스웨이의 커스텀 커맨드를 사용하지 않을 경우 스웨이를 다시 사용해 발동 시킬 수 있다. 사정거리 안에 적이 없으면 발동되지 않는다. 매그넘 펀치와 버닝 브레이커로 연계 가능하며 영구히 매그넘 펀치의 데미지가 증가한다.\n\nMP 25 소비, 최대 6명의 적을 500% 데미지로 3번 공격\n매그넘 펀치의 데미지 205%p 증가";
            break;
        case 23:
            rep = "위빙, 더킹, 스웨이를 활용하여 끊이지 않는 펀치의 원을 그린다. 빠르고 연속적인 펀치는 회오리를 일으키며 주변 적들을 끌어들인다. 일부 몬스터는 저항하여 끌려오지 않는다. 이동하며 계속해서 공격할 수 있다. 추가로 영구히 해머 스매시의 데미지가 증가한다.\n\nMP 26 소비, 최대 12명의 적을 1250% 데미지로 최대 6초 동안 공격 후 마지막으로 최대 12명의 적을 1250% 데미지로 5번 공격하며 날리는 점핑 어퍼컷 사용\n키다운 중에 이동키로 이동가능\n공격 적중 시 콤비네이션 트레이닝 최대 단계로 유지\n충격파를 제외한 해머 스매시의 데미지 195%p 증가\n\n재사용 대기시간 45초";
            break;
        case 24:
            rep = "불릿을 순간적으로 최대치로 리로드한 뒤, 전방의 적에게 빠르게 접근하여 적을 행동 불가 상태로 만들어 움켜쥔다. 범위 내의 적 중 최대 HP가 가장 높은 적을 우선으로 공격한다. 적을 움켜쥔 채로 리볼빙 캐논 사용을 가능하며, 리볼빙 캐논으로 6회 타격한 후 다시 입력하면 전방 일직선상에 파일 벙커를 사용해 추가 피해를 입힌다. 행동 불가 상태로 만들지 못하는 적을 공격해도 스킬이 발동되며 적을 움켜쥔 상태는 무적이다. 파일 벙커를 이용한 마지막 공격은 몬스터의 방어율을 추가로 무시한다. 근처에 적이 없으면 발동되지 않는다. 스킬을 재사용하면 움켜쥔 것을 풀 수 있다. 풀어도 행동 불가 상태는 유지된다.\n\nMP 200 소비, 적을 230% 데미지로 2번 공격하며 행동 불가 상태로 만듦, 이후 사용하는 리볼빙 캐논은 최대 10명의 적을 각각 200%, 220%, 240%, 260%, 280%, 300%로 4번씩 공격\n파일 벙커를 이용한 마지막 공격은 350%의 데미지로 8번 공격하며 몬스터 방어율 80% 추가 무시\n\n재사용 대기시간 120초";
            break;
        case 25:
            rep = "활성화된 인듀어런스 실드를 체력으로 전환한다. 인듀어런스 실드가 존재하지 않거나 체력이 가득 찬 경우에는 사용할 수 없다. 사용 후 일정 시간 최대 HP의 일정 비율로 피해를 입히는 공격을 포함한 피해를 감소시키는 가드 판정 발생하며, 피해 감소 수치는 차지 마스터리를 따른다. 해당 버프는 버프 지속시간 증가의 효과를 받지 않는다. 추가로 영구히 리프트 프레스와 매그넘 캐논의 데미지가 증가한다.\n\nMP 100 소비, 활성화된 인듀어런스 실드가 소멸하며 소멸한 실드량과 최대 HP의 50%를 합한 것 만큼 체력 회복, 15초 동안 가드 판정 유지\n리프트 프레스의 밀어내는 공격과 매그넘 캐논의 데미지 100%p 증가\n\n재사용 대기시간 200초";
            break;
        case 26:
            rep = "건틀렛 리볼버에 내장된 캐논의 성능을 최종 강화한다. 리볼빙 캐논 업그레이드Ⅱ의 증가량을 덮어쓴다.\n\n릴리즈 파일 벙커 데미지 160%, 충격파A의 데미지 225%p, 충격파B의 데미지 185%p, 충격파C의 데미지 155%p 증가\n과열로 인한 추가 타격 데미지 140%p, 매그넘 펀치 중 리볼빙 캐논 데미지 140%p 증가, 더블 팡 중 리볼빙 캐논 데미지 100%p 증가\n최대 실린더 게이지 6칸으로 확장, 최대 불릿 6개로 증가\n실린더 게이지 6칸 이상일 때 릴리즈 파일 벙커 사용 시 데미지 200%p 증가, 최대 10명의 적을 400% 데미지로 6번 공격하는 충격파D 추가 발생";
            break;
        case 27:
            rep = "혹독한 정신수양을 통해 궁극의 끈기를 길러 인듀어런스 실드를 강화한다. 추가로 영구히 리프트 프레스와 매그넘 캐논의 데미지가 증가한다.\n\n피격 시 피격 데미지의 50%를 보호막으로 전환, 초당 현재 보호막의 40% + 50씩 소멸, 보호막의 최대치는 최대 HP와 같음.\n영구히 상태 이상 내성 20%, 모든 속성 내성 20% 증가, 스탠스 60% 증가\n리프트 프레스의 밀어내는 공격과 매그넘 캐논의 데미지 80%p 증가";
            break;
        case 28:
            rep = "힘의 완급 조절을 완벽히 익혀 차지 스킬의 기능을 최적화한다. 차지 마스터리의 수치를 덮어 쓴다. 추가로 영구히 공격 시 적의 방어율을 일정량 무시하고 피격 데미지가 감소한다.\n\n각 차지 스킬의 차지 시간 40% 감소, 차지 스킬 사용 시 불릿 2개 즉시 리로드, 공중에서 사용할 때와 자동 리로드 중에는 리로드 되지 않음.\n차지한 더킹과 스웨이의 시작 부분과 차지한 해머 스매시 사용 중 최대 HP의 일정 비율로 피해를 입히는 공격을 포함한 피해를 35% 감소시키는 가드 판정 발생\n영구히 적의 방어율 35% 무시, 피격 데미지 15% 감소";
            break;
        case 29:
            rep = "전투에서 가장 이상적인 동선과 타격 패턴을 연구한다. 연계 스킬과 차지 스킬 사용 시 능력이 증가한다. 콤비네이션 트레이닝의 수치를 덮어쓴다. 추가로 공격력이 증가한다.\n\n최대 10단계까지 누적 가능, 30초 동안 유지, 1단계 당 최종 데미지 6% 및 크리티컬 확률 3% 증가, 6단계 당 공격 속도 1단계 증가, 5단계 당 스킬 연계 속도 1단계 증가\n영구히 공격력 40 증가";
            break;
        case 30:
            rep = "리볼빙 캐논을 한계까지 활성화하여 위력을 증가시키고 불릿 리로드 시간을 감소시키며 실린더의 냉각 속도를 증가시킨다.\n\nMP 200 소비, 35초 동안 불릿을 사용하는 스킬의 데미지 35% 증가, 불릿 자동 리로드 시간 70% 감소, 릴리즈 파일 벙커 사용 후 실린더 게이지 과열 시간 1초로 감소.\n\n재사용 대기시간 120초.";
            break;
        case 31:
            rep = "극한까지 힘을 모은 후 돌진하여 거대한 폭발을 일으키는 궁극의 펀치를 날린다.\n키다운을 통해 차지가 가능하며 차지를 지속한 시간에 비례해 충격파가 추가로 발생하여 가까운 적일 수록 더 많은 피해를 입힌다. 차지 중에는 가드 판정을 받고 스턴에 걸리지 않으며 상태 이상 내성이 증가 및 적의 어떠한 공격에도 밀려나지 않는다.\n차지 중 피격 횟수에 비례해 스킬의 최종 데미지가 증가한다.\n하이퍼 매그넘 펀치의 차지 시간은 차지 마스터리로 인한 차지 시간 감소의 효과를 받지 않는다.\n추가로 영구히 쇼크 웨이브 펀치의 충격파로 일반 몬스터를 공격했을 때 데미지가 증가한다.\n\nMP 400 소비, 최대 15명의 적을 500%의 데미지로 15번 공격\n이후 250%로 8번 공격하는 충격파 발생\n최대 3단계까지 차지로 강화 가능, 강화 단계마다 각각 350%, 450%, 550%로 8번 공격하는 충격파 추가로 발생.\n차지 중 차지 마스터리 수치에 의한 가드 판정을 받고 상태 이상 내성 100 증가.\n차지 중 피격 시 마다 스킬의 최종 데미지 5% 증가, 피격으로 인한 최종 데미지는 최대 50%까지 증가\n최대 4초 동안 차지 가능.\n\n재사용 대기시간 120초.";
            break;
        case 32:
            rep = "";
            break;
    }
    return rep;
};
skb.getskillimage1Blaster = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "https://i.imgur.com/1RiT1UQ.png";
            break;
        case 1:
            rep = "https://i.imgur.com/nlRgGY1.png";
            break;
        case 2:
            rep = "https://i.imgur.com/A1LPQpC.png";
            break;
        case 3:
            rep = "https://i.imgur.com/IDkM6vf.png";
            break;
        case 4:
            rep = "https://i.imgur.com/VlNTS6W.png";
            break;
        case 5:
            rep = "https://i.imgur.com/fGEW2nU.png";
            break;
        case 6:
            rep = "https://i.imgur.com/WpUHYMt.png";
            break;
        case 7:
            rep = "https://i.imgur.com/OXiP8EA.png";
            break;
        case 8:
            rep = "https://i.imgur.com/JVA7Fdk.png";
            break;
        case 9:
            rep = "https://i.imgur.com/18cJk7a.png";
            break;
        case 10:
            rep = "https://i.imgur.com/W7SenyC.png";
            break;
        case 11:
            rep = "https://i.imgur.com/iietuu0.png";
            break;
        case 12:
            rep = "";
            break;
        case 13:
            rep = "";
            break;
        case 14:
            rep = "https://i.imgur.com/jHScqYJ.png";
            break;
        case 15:
            rep = "https://i.imgur.com/xAEf9Wb.png";
            break;
        case 16:
            rep = "https://i.imgur.com/guFIJdl.png";
            break;
        case 17:
            rep = "https://i.imgur.com/UMXwsxX.png";
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
            rep = "https://i.imgur.com/y9BuZUU.png";
            break;
        case 22:
            rep = "https://i.imgur.com/gnOEh62.png";
            break;
        case 23:
            rep = "https://i.imgur.com/5LJYLFD.png";
            break;
        case 24:
            rep = "https://i.imgur.com/clbpQCk.png";
            break;
        case 25:
            rep = "https://i.imgur.com/QXi5txU.png";
            break;
        case 26:
            rep = "";
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
            rep = "https://i.imgur.com/lTqWExW.png";
            break;
        case 31:
            rep = "https://i.imgur.com/7mfqCEB.png";
            break;
        case 32:
            rep = "";
            break;
    }
    return rep;
};
skb.getskillimage2Blaster = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "https://i.imgur.com/aVTXEjJ.png";
            break;
        case 1:
            rep = "https://i.imgur.com/iNHzwVw.png";
            break;
        case 2:
            rep = "https://i.imgur.com/OK8REGm.png";
            break;
        case 3:
            rep = "https://i.imgur.com/vVXW0VR.png";
            break;
        case 4:
            rep = "https://i.imgur.com/SscvieM.png";
            break;
        case 5:
            rep = "https://i.imgur.com/ArI4uHD.png";
            break;
        case 6:
            rep = "https://i.imgur.com/rdkkWiT.png";
            break;
        case 7:
            rep = "https://i.imgur.com/6O87Gwi.png";
            break;
        case 8:
            rep = "https://i.imgur.com/DvTCfec.png";
            break;
        case 9:
            rep = "https://i.imgur.com/PQpW5Ez.png";
            break;
        case 10:
            rep = "https://i.imgur.com/hhQVY3f.png";
            break;
        case 11:
            rep = "https://i.imgur.com/GU53mkQ.png";
            break;
        case 12:
            rep = "https://i.imgur.com/41SvIqc.png";
            break;
        case 13:
            rep = "https://i.imgur.com/rvOt8Qb.png";
            break;
        case 14:
            rep = "https://i.imgur.com/iyxCq9e.png";
            break;
        case 15:
            rep = "https://i.imgur.com/IOH11Cy.png";
            break;
        case 16:
            rep = "https://i.imgur.com/n9sWhux.png";
            break;
        case 17:
            rep = "https://i.imgur.com/2qNRnTR.png";
            break;
        case 18:
            rep = "https://i.imgur.com/PzDXmjU.png";
            break;
        case 19:
            rep = "https://i.imgur.com/YDTq5t9.png";
            break;
        case 20:
            rep = "https://i.imgur.com/5UuR8pf.png";
            break;
        case 21:
            rep = "https://i.imgur.com/U9W147Q.png";
            break;
        case 22:
            rep = "https://i.imgur.com/EWyeViV.png";
            break;
        case 23:
            rep = "https://i.imgur.com/c5eCHJi.png";
            break;
        case 24:
            rep = "https://i.imgur.com/E5xiNcR.png";
            break;
        case 25:
            rep = "https://i.imgur.com/51ggxne.png";
            break;
        case 26:
            rep = "https://i.imgur.com/DrokZuQ.png";
            break;
        case 27:
            rep = "https://i.imgur.com/XAtfk1L.png";
            break;
        case 28:
            rep = "https://i.imgur.com/HLGSQsA.png";
            break;
        case 29:
            rep = "https://i.imgur.com/mwbQaal.png";
            break;
        case 30:
            rep = "https://i.imgur.com/mVqadkM.png";
            break;
        case 31:
            rep = "https://i.imgur.com/5A6JKmX.png";
            break;
        case 32:
            rep = "";
            break;
    }
    return rep;
};

module.exports = skb;