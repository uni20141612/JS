const skx = {};

skx.getskillXenon = function (skillname){
    var xret = -1;
    switch(skillname){
        case "메가 스매셔":
        case "메가스매셔":
        case "메가":
        case "스매셔":
        case "메스":
            xret = 0;
            break;
        case "오버로드 모드":
        case "오버로드모드":
        case "오버로드":
        case "오버":
        case "오모":
            xret = 1;
            break;
        case "홀로그램 그래피티 : 융합":
        case "홀로그램그래피티 : 융합":
        case "홀로그램그래피티:융합":
        case "홀로그램그래피티융합":
        case "융합":
            xret = 2;
            break;
        case "포톤 레이":
        case "포톤레이":
        case "포톤":
        case "포레":
            xret = 3;
            break;
        case "서플러스 서플라이":
        case "서플러스서플라이":
        case "서플서플":
        case "서서플":
        case "서플":
        case "서서":
            xret = 4;
            break;
        case "멀티래터럴 I":
        case "멀티래터럴I":
        case "멀티래터럴 1":
        case "멀티래터럴1":
        case "멀티I":
        case "멀티1":
            xret = 5;
            break;
        case "멀티 모드 링커":
        case "멀티모드 링커":
        case "멀티모드링커":
        case "링커":
            xret = 6;
            break;
        case "에비에이션 리버티":
        case "에비에이션리버티":
        case "에비에이션":
        case "리버티":
        case "체공":
            xret = 7;
            break;
        case "카모플라쥬":
        case "카모플라주":
        case "카모":
            xret = 8;
            break;
        case "컨버전 스타포스":
        case "컨버전스타포스":
        case "컨버전":
        case "스타포스":
            xret = 9;
            break;
        case "서든 프로펠":
        case "서든프로펠":
        case "서든":
        case "서프":
        case "트리플 점프":
        case "트리플점프":
        case "트점":
            xret = 10;
            break;
        case "인클라인 파워":
        case "인클라인파워":
        case "인클라인":
            xret = 11;
            break;
        case "멀티래터럴 II":
        case "멀티래터럴II":
        case "멀티래터럴 2":
        case "멀티래터럴2":
        case "멀티II":
        case "멀티2":
            xret = 12;
            break;
        case "핀포인트 로켓":
        case "핀포인트로켓":
        case "핀포인트":
        case "핀포":
        case "핀로":
            xret = 13;
            break;
        case "퀵실버 소드 : 도약":
        case "퀵실버소드 : 도약":
        case "퀵실버소드:도약":
        case "퀵실버 소드 도약":
        case "퀵실버소드 도약":
        case "퀵실버소드도약":
        case "퀵실버 소드":
        case "퀵실버소드":
        case "퀵실버":
        case "도약":
            xret = 14;
            break;
        case "이온 쓰러스터":
        case "이온쓰러스터":
        case "쓰러스터":
        case "밀격기":
        case "밀격":
            xret = 15;
            break;
        case "리니어 퍼스펙티브":
        case "리니어퍼스펙티브":
        case "리퍼":
            xret = 16;
            break;
        case "마이너리티 서포트":
        case "마이너리티서포트":
        case "마이너리티":
        case "마서":
            xret = 17;
            break;
        case "멀티래터럴 III":
        case "멀티래터럴III":
        case "멀티래터럴 3":
        case "멀티래터럴3":
        case "멀티III":
        case "멀티3":
            xret = 18;
            break;
        case "컴뱃 스위칭 : 분열":
        case "컴뱃스위칭 : 분열":
        case "컴뱃스위칭:분열":
        case "컴뱃 스위칭 분열":
        case "컴뱃스위칭 분열":
        case "컴뱃스위칭분열":
        case "컴뱃스위칭":
        case "분열":
        case "윗점":
            xret = 19;
            break;
        case "다이아그널 체이스":
        case "다이아그널체이스":
        case "다이아그널":
        case "체이스":
        case "대각선":
        case "상향이동기":
            xret = 20;
            break;
        case "이지스 시스템":
        case "이지스시스템":
        case "이지스":
            xret = 21;
            break;
        case "트라이앵글 포메이션":
        case "트라이앵글포메이션":
        case "트라이앵글":
        case "트포":
            xret = 22;
            break;
        case "버추얼 프로젝션":
        case "버추얼프로젝션":
        case "버추얼":
        case "버프":
        case "쉐도우 파트너":
        case "쉐도우파트너":
        case "쉐파":
            xret = 23;
            break;
        case "멀티래터럴 IV":
        case "멀티래터럴IV":
        case "멀티래터럴 4":
        case "멀티래터럴4":
        case "멀티IV":
        case "멀티4":
            xret = 24;
            break;
        case "엑스트라 서플라이":
        case "엑스트라서플라이":
        case "엑스트라":
        case "엑서":
            xret = 25;
            break;
        case "블레이드 댄싱":
        case "블레이드댄싱":
        case "블댄":
            xret = 26;
            break;
        case "퍼지롭 매스커레이드 : 저격":
        case "퍼지롭매스커레이드 : 저격":
        case "퍼지롭매스커레이드:저격":
        case "퍼지롭 매스커레이드 저격":
        case "퍼지롭매스커레이드 저격":
        case "퍼지롭매스커레이드저격":
        case "저격":
            xret = 27;
            break;
        case "퍼지롭 매스커레이드 : 포격":
        case "퍼지롭매스커레이드 : 포격":
        case "퍼지롭매스커레이드:포격":
        case "퍼지롭 매스커레이드 포격":
        case "퍼지롭매스커레이드 포격":
        case "퍼지롭매스커레이드포격":
        case "포격":
            xret = 28;
            break;
        case "퍼지롭 매스커레이드 : 폭격":
        case "퍼지롭매스커레이드 : 폭격":
        case "퍼지롭매스커레이드:폭격":
        case "퍼지롭 매스커레이드 폭격":
        case "퍼지롭매스커레이드 폭격":
        case "퍼지롭매스커레이드폭격":
        case "폭격":
            xret = 29;
            break;
        case "홀로그램 그래피티 : 관통":
        case "홀로그램그래피티 : 관통":
        case "홀로그램그래피티:관통":
        case "홀로그램 그래피티 관통":
        case "홀로그램그래피티 관통":
        case "홀로그램그래피티관통":
        case "관통":
            xret = 30;
            break;
        case "홀로그램 그래피티 : 역장":
        case "홀로그램그래피티 : 역장":
        case "홀로그램그래피티:역장":
        case "홀로그램 그래피티 역장":
        case "홀로그램그래피티 역장":
        case "홀로그램그래피티역장":
        case "역장":
            xret = 31;
            break;
        case "홀로그램 그래피티 : 지원":
        case "홀로그램그래피티 : 지원":
        case "홀로그램그래피티:지원":
        case "홀로그램 그래피티 지원":
        case "홀로그램그래피티 지원":
        case "홀로그램그래피티지원":
        case "지원":
            xret = 32;
            break;
        case "오파츠 코드":
        case "오파츠코드":
        case "오파츠":
        case "오코":
            xret = 33;
            break;
        case "인스턴트 셔크":
        case "인스턴트셔크":
        case "셔크":
            xret = 34;
            break;
        case "타임 캡슐":
        case "타임캡슐":
            xret = 35;
            break;
        case "오펜시브 매트릭스":
        case "오펜시브매트릭스":
        case "오펜시브":
        case "오매":
            xret = 36;
            break;
        case "멀티래터럴 V":
        case "멀티래터럴V":
        case "멀티래터럴 5":
        case "멀티래터럴5":
        case "멀티V":
        case "멀티5":
            xret = 37;
            break;
        case "멀티래터럴 VI":
        case "멀티래터럴VI":
        case "멀티래터럴 6":
        case "멀티래터럴6":
        case "멀티VI":
        case "멀티6":
            xret = 38;
            break;
        case "아마란스 제네레이터":
        case "아마란스제네레이터":
        case "아마란스":
        case "제네레이터":
        case "아제":
            xret = 39;
            break;
        case "컨파인 인탱글":
        case "컨파인인탱글":
        case "컨파인":
        case "인탱글":
        case "컨인":
        case "바인드":
            xret = 40;
            break;
        case "멜트다운 익스플로젼":
        case "멜트다운익스플로젼":
        case "멜트다운":
        case "멜익":
        case "무적기":
            xret = 41;
            break;
        case "":
            xret = 42;
            break;
    }
    return xret;
};
skx.getskillnameXenon = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "메가 스매셔";
            break;
        case 1:
            rep = "오버로드 모드";
            break;
        case 2:
            rep = "홀로그램 그래피티 : 융합";
            break;
        case 3:
            rep = "포톤 레이";
            break;
        case 4:
            rep = "서플러스 서플라이";
            break;
        case 5:
            rep = "멀티래터럴 I";
            break;
        case 6:
            rep = "멀티 모드 링커";
            break;
        case 7:
            rep = "에비에이션 리버티";
            break;
        case 8:
            rep = "카모플라쥬";
            break;
        case 9:
            rep = "컨버전 스타포스";
            break;
        case 10:
            rep = "서든 프로펠";
            break;
        case 11:
            rep = "인클라인 파워";
            break;
        case 12:
            rep = "멀티래터럴 II";
            break;
        case 13:
            rep = "핀포인트 로켓";
            break;
        case 14:
            rep = "퀵실버 소드 : 도약";
            break;
        case 15:
            rep = "이온 쓰러스터";
            break;
        case 16:
            rep = "리니어 퍼스펙티브";
            break;
        case 17:
            rep = "마이너리티 서포트";
            break;
        case 18:
            rep = "멀티래터럴 III";
            break;
        case 19:
            rep = "컴뱃 스위칭 : 분열";
            break;
        case 20:
            rep = "다이아그널 체이스";
            break;
        case 21:
            rep = "이지스 시스템";
            break;
        case 22:
            rep = "트라이앵글 포메이션";
            break;
        case 23:
            rep = "버추얼 프로젝션";
            break;
        case 24:
            rep = "멀티래터럴 IV";
            break;
        case 25:
            rep = "엑스트라 서플라이";
            break;
        case 26:
            rep = "블레이드 댄싱";
            break;
        case 27:
            rep = "퍼지롭 매스커레이드 : 저격";
            break;
        case 28:
            rep = "퍼지롭 매스커레이드 : 포격";
            break;
        case 29:
            rep = "퍼지롭 매스커레이드 : 폭격";
            break;
        case 30:
            rep = "홀로그램 그래피티 : 관통";
            break;
        case 31:
            rep = "홀로그램 그래피티 : 역장";
            break;
        case 32:
            rep = "홀로그램 그래피티 : 지원";
            break;
        case 33:
            rep = "오파츠 코드";
            break;
        case 34:
            rep = "인스턴트 셔크";
            break;
        case 35:
            rep = "타임 캡슐";
            break;
        case 36:
            rep = "오펜시브 매트릭스";
            break;
        case 37:
            rep = "멀티래터럴 V";
            break;
        case 38:
            rep = "멀티래터럴 VI";
            break;
        case 39:
            rep = "아마란스 제네레이터";
            break;
        case 40:
            rep = "컨파인 인탱글";
            break;
        case 41:
            rep = "멜트다운 익스플로젼";
            break;
        case 42:
            rep = "";
            break;
    }
    return rep;
};
skx.getskilldesc1Xenon = function (skillcode){
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
            rep = "하단 참조";
            break;
        case 7:
            rep = "제트엔진 부스터를 가동하여 30초 동안 비행";
            break;
        case 8:
            rep = "장비 착용에 필요한 능력치를 무시";
            break;
        case 9:
            rep = "장비의 스타포스에 비례해 STR, DEX, LUK 증가";
            break;
        case 10:
            rep = "점프 상태에서 사용 시 전방으로 한 번 더 점프";
            break;
        case 11:
            rep = "에너지 3 소비, 240초 동안 공격력 30 증가";
            break;
        case 12:
            rep = "하단 참조";
            break;
        case 13:
            rep = "하단 참조";
            break;
        case 14:
            rep = "최대 8명의 적을 155%의 데미지로 2번 공격";
            break;
        case 15:
            rep = "에너지3, 최대 6명의 적을 60% 데미지로 밀어내며 공격";
            break;
        case 16:
            rep = "크리티컬 확률 40% 증가";
            break;
        case 17:
            rep = "모든 능력치 25 증가";
            break;
        case 18:
            rep = "하단 참조";
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
            rep = "";
            break;
        case 23:
            rep = "";
            break;
        case 24:
            rep = "";
            break;
        case 25:
            rep = "";
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
            rep = "";
            break;
        case 31:
            rep = "";
            break;
        case 32:
            rep = "";
            break;
        case 33:
            rep = "";
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
        case 40:
            rep = "";
            break;
        case 41:
            rep = "";
            break;
        case 42:
            rep = "";
            break;
    }
    return rep;
};
skx.getskilldesc2Xenon = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "차지 중에는 무적이 아님";
            break;
        case 1:
            rep = "어떤 수단으로도 MP를 회복시키지 못한다";
            break;
        case 2:
            rep = "모든 홀로그램 그래피티의 기능들을 하나로 집약한 것";
            break;
        case 3:
            rep = "자동 대상 지정형 서브 극딜기";
            break;
        case 4:
            rep = "게이지";
            break;
        case 5:
            rep = "전직마다 습득";
            break;
        case 6:
            rep = "";
            break;
        case 7:
            rep = "재사용 대기시간 30초/ 비행중 버프만 사용가능";
            break;
        case 8:
            rep = "도적과 해적의 방어구 착용 가능";
            break;
        case 9:
            rep = "스타포스는 최대 100성으로 제한, 훈장,칭호,길드스킬 미적용";
            break;
        case 10:
            rep = "2회 연속 사용 가능";
            break;
        case 11:
            rep = "[서플라이]";
            break;
        case 12:
            rep = "1차 강화";
            break;
        case 13:
            rep = "대상 처치시 체공하지않고 사라짐";
            break;
        case 14:
            rep = "이온 쓰러스터와 연계 가능/ 서든프로펠 후 사용가능";
            break;
        case 15:
            rep = "8초지속/ 소환할때만 에너지 소비";
            break;
        case 16:
            rep = "-";
            break;
        case 17:
            rep = "-";
            break;
        case 18:
            rep = "2차 강화";
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
            rep = "";
            break;
        case 23:
            rep = "";
            break;
        case 24:
            rep = "";
            break;
        case 25:
            rep = "";
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
            rep = "";
            break;
        case 31:
            rep = "";
            break;
        case 32:
            rep = "";
            break;
        case 33:
            rep = "";
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
        case 40:
            rep = "";
            break;
        case 41:
            rep = "";
            break;
        case 42:
            rep = "";
            break;
    }
    return rep;
};
skx.getskilldesc3Xenon = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "에너지를 모아 강력한 광선을 발사한다.\n\nMP 1000 소비, 최대 6초 동안 최대 15명의 적을 575%의 데미지로 6번 연속 공격, 공격 중 무적\n\n키다운을 통해 최대 90초까지 차지가 가능하며, 차지한 시간 3초마다 공격 시간이 1초씩 증가하여 최대 6초까지 증가, 최대 차지 시간을 넘어서면 차지 취소\n공격 중 스킬을 다시 사용하여 즉시 취소 가능\n\n재사용 대기시간 : 165초, 공격 시작 후 적용";
            break;
        case 1:
            rep = "에너지 코어를 과부하시켜 최대치를 초과하여 에너지를 모을 수 있게 한다. 코어가 과부하되었기 때문에 MP를 회복할 수 없게 되나 스킬 사용으로 에너지를 소모하지 않게 되고 과부하에 의해 발생한 플라즈마 전류가 주변 적을 공격한다. 플라즈마 전류는 공격 반사 상태의 적을 공격해도 피해를 입지 않는다. 최대치를 초과한 에너지는 아마란스 제너레이터로 충전시킬 수 없다.\n\nMP 250 소비, 초당 MP 최대 MP의 1% + 180 소비, 초과 에너지 20 충전 가능, 에너지 충전 시간 절반으로 감소\n초과 충전한 에너지 당 최종 데미지 1% 증가\n\n재사용 시 스킬 비활성화, 비활성화 시 초과 충전된 에너지 즉시 소멸\n\n플라즈마 전류는 랜덤한 주기로 발생하여 최대 12명의 적을 390%의 데미지로 6번 공격하는 전격 4번 발동\n\n재사용 대기시간 : 180초";
            break;
        case 2:
            rep = "모든 홀로그램 그래피티의 기능을 통합한 최신예 홀로그램 필드를 전개한다. 공격 반사 상태의 적을 공격해도 피해를 입지 않는다.\n\nMP 1000 소비, 30초 동안 홀로그램 필드 생성\n\n볼이 홀로그램 필드에 닿을 때마다 최대 10명의 적에게 550%로 5번 공격, 볼에 몬스터가 닿을 때에도 동일한 데미지를 줌\n홀로그램 필드 안의 파티원 데미지 20% 증가, 필드 안의 파티원이 회피 시 서플러스 에너지 1개 충전\n제논이 홀로그램 필드 안에 있을 경우 이지스 시스템으로 발사되는 미사일 8개 증가\n\n재사용 대기시간 100초";
            break;
        case 3:
            rep = "적을 끝까지 추적하여 공격하는 광자 캐논을 사용한다.\n\n스킬 사용 시 일정 시간 조준 모드가 되어 수발씩 조준하기 시작하며 조준이 완료되면 다음 조준이 시작된다. 스킬을 다시 사용하면 현재 조준이 완료된 적에게 광자 캐논을 발사한다.\n정해진 수의 초기 조준은 매우 빠르게 완료되고 추가 조준은 1발씩 조준되며 조준 속도가 느리다. 추가 조준은 조준 범위 안의 최대 HP가 가장 높은 보스 몬스터를 우선해서 조준하고 조준 중인 적을 공격하면 조준이 더 빨리 완료된다.\n조준 중 혹은 완료된 적으로부터 멀리 떨어지면 조준이 해제되고 발사하기 전 조준 모드 지속시간이 종료되면 모든 조준이 해제된다.\n\n포톤 레이는 공격 반사 상태의 적을 공격해도 피해를 입지 않고 버추얼 프로젝션이 적용되지 않으며 퍼지롭 매스커레이드, 멜트다운 익스플로젼, 메가 스매셔 사용 중에는 발사 동작없이 발사할 수 있다.\n\nMP 150 소비, 20초 동안 조준 모드 발동, 발사 시 MP 350 추가 소비\n초기 조준은 3발씩 조준되고 15발 조준 완료 후 추가 조준 15발까지 가능\n광자 캐논은 1발 당 770%의 데미지로 4번 공격\n\n재사용 대기시간 : 35초";
            break;
        case 4:
            rep = "일정 시간마다 전력 1개 충전, 피격/회피 시 일정 확률로 1개 충전하며 충전된 에너지에 따라 모든 능력치가 증가한다. 충전된 에너지는 스킬로 소비될 수 있다. 추가로 안드로이드 하트를 파워 소스 슬롯에 장착할 수 있게 된다.\n\n4초마다 1개 충전, 추가로 피격/회피 시 60% 확률로 1개 충전. 서플러스 에너지 1개 당 모든 능력치 1%만큼 증가";
            break;
        case 5:
            rep = "직접 AP를 투자한 능력치를 일정 수치 이상 달성하면 능력치 별로 특징적인 보너스를 얻는다.\n\nSTR 20 이상 시 : 스탠스 확률 3%\nDEX 20 이상 시 : 모든 속성 내성 3%, 상태 이상 내성 3\nLUK 20 이상 시 : 회피율 3%\nSTR/DEX/LUK 20 이상 시 : 데미지 3%";
            break;
        case 6:
            rep = "상황에 따라 현재 차수의 스킬을 변경하는 멀티 모드 링커를 오픈할 수 있다. 한 번 더 누르면 변경할 스킬을 바꿀 수 있다.\n\n멀티 모드 링커를 오픈한다. 멀티 모드 링커가 오픈 된 상태에서 반복해서 누르면 변경할 스킬이 바뀐다. 변경할 스킬 키와 동시에 누르면 해당 스킬의 멀티 모드 링커를 바로 오픈할 수 있다.\n\n퀵실버 소드, 컴뱃 스위칭, 홀로그램 그래피티, 퍼지롭 매스커레이드의 모드를 변경";
            break;
        case 12:
            rep = "STR 40 이상 시 : 스탠스 확률 5%\nDEX 40 이상 시 : 모든 속성 내성 5%, 상태 이상 내성 5\nLUK 40 이상 시 : 회피율 5%\nSTR/DEX/LUK 40 이상 시 : 데미지 5% 증가, 최대 HP/최대 MP 5% 증가\n\n총 스탠스 8%, 모든 속성 내성 8%, 상태 이상 내성 8, 회피율 8%, 데미지 8%, 최대 HP/MP 5%";
            break;
        case 13:
            rep = "자신의 공격 스킬 사용 시 사정 거리 내의 적들에게 다수의 미사일을 발사한다.\n공격 반사 상태의 적을 공격해도 피해를 입지 않는다.\n발동시 짧은 시간 동안 발사 준비 시간이 필요하고 스킬 사용 시 효과가 활성화되고 재사용 시 비활성화되는 온오프 스킬\n\n일정 범위 내 적에게 50%의 미사일 4개 발사. 일반 몬스터 공격 시 데미지 150% 증가\n재발동 대기시간 2초\n\n핀포인트 로켓 1차 강화 : 핀포인트 로켓 데미지 40%p 증가\n핀포인트 로켓 2차 강화 : 핀포인트 로켓 데미지 40%p 증가. 1차 강화와 중첩된다.\n핀포인트 로켓 최종 강화 : 핀포인트 로켓 데미지 100%p 증가. 1차, 2차 강화와 중첩된다.";
            break;
        case 18:
            rep = "STR 90 이상 시 : 스탠스 확률 7%\nDEX 90 이상 시 : 모든 속성 내성 7%, 상태 이상 내성 7\nLUK 90 이상 시 : 회피율 7%\nSTR/DEX/LUK 모두 90 이상 시 : 데미지 7% 증가, 최대 HP/최대 MP 5% 증가\n\n총 스탠스 15%, 모든 속성 내성 15%, 상태 이상 내성 15, 회피율 15%, 데미지 15%, 최대 HP/MP 10%";
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
            rep = "";
            break;
        case 24:
            rep = "";
            break;
        case 25:
            rep = "";
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
            rep = "";
            break;
        case 31:
            rep = "";
            break;
        case 32:
            rep = "";
            break;
        case 33:
            rep = "";
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
        case 40:
            rep = "";
            break;
        case 41:
            rep = "";
            break;
        case 42:
            rep = "";
            break;
    }
    return rep;
};
skx.getskillimage1Xenon = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "https://i.imgur.com/fPdudWT.png";
            break;
        case 1:
            rep = "https://i.imgur.com/k7p2iKp.png";
            break;
        case 2:
            rep = "https://i.imgur.com/erUi0Ho.png";
            break;
        case 3:
            rep = "https://i.imgur.com/Q5qLbnR.png";
            break;
        case 4:
            rep = "";
            break;
        case 5:
            rep = "";
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
            rep = "";
            break;
        case 10:
            rep = "";
            break;
        case 11:
            rep = "";
            break;
        case 12:
            rep = "";
            break;
        case 13:
            rep = "";
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
            rep = "";
            break;
        case 23:
            rep = "";
            break;
        case 24:
            rep = "";
            break;
        case 25:
            rep = "";
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
            rep = "";
            break;
        case 31:
            rep = "";
            break;
        case 32:
            rep = "";
            break;
        case 33:
            rep = "";
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
        case 40:
            rep = "";
            break;
        case 41:
            rep = "";
            break;
        case 42:
            rep = "";
            break;
    }
    return rep;
};
skx.getskillimage2Xenon = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "https://i.imgur.com/Xf6gwmK.png";
            break;
        case 1:
            rep = "https://i.imgur.com/79UuhlV.png";
            break;
        case 2:
            rep = "https://i.imgur.com/Z6ft26J.png";
            break;
        case 3:
            rep = "https://i.imgur.com/3dnNtaZ.png";
            break;
        case 4:
            rep = "";
            break;
        case 5:
            rep = "";
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
            rep = "";
            break;
        case 10:
            rep = "";
            break;
        case 11:
            rep = "";
            break;
        case 12:
            rep = "";
            break;
        case 13:
            rep = "";
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
            rep = "";
            break;
        case 23:
            rep = "";
            break;
        case 24:
            rep = "";
            break;
        case 25:
            rep = "";
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
            rep = "";
            break;
        case 31:
            rep = "";
            break;
        case 32:
            rep = "";
            break;
        case 33:
            rep = "";
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
        case 40:
            rep = "";
            break;
        case 41:
            rep = "";
            break;
        case 42:
            rep = "";
            break;
    }
    return rep;
};

module.exports = skx;