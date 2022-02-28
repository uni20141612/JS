const skdk = {};

skdk.getskillDarkknight = function (skillname){
    var dret = -1;
    switch(skillname){
        case "다크 스피어":
        case "다크스피어":
            dret = 0;
            break;
        case "비홀더 임팩트":
        case "비홀더임팩트":
        case "임팩트":
        case "비임":
            dret = 1;
            break;
        case "피어스 사이클론":
        case "피어스사이클론":
        case "사이클론":
        case "피사":
            dret = 2;
            break;
        case "다크니스 오라":
        case "다크니스오라":
        case "오라":
        case "눈나":
            dret = 3;
            break;
        case "어퍼 차지":
        case "어퍼차지":
        case "어퍼":
        case "어차":
        case "윗점":
            dret = 4;
            break;
        case "리프 어택":
        case "리프어택":
        case "하강":
            dret = 5;
            break;
        case "스피어 풀링":
        case "스피어풀링":
        case "풀링":
        case "끌격":
            dret = 6;
            break;
        case "비홀더":
        case "소환수":
            dret = 7;
            break;
        case "비홀더 쇼크":
        case "비홀더쇼크":
        case "쇼크":
            dret = 8;
            break;
        case "하이퍼 바디":
        case "하이퍼바디":
        case "하바":
        case "뻥":
        case "찐뻥":
            dret = 9;
            break;
        case "돌진":
        case "밀격":
            dret = 10;
            break;
        case "크로스 오버 체인":
        case "크로스오버체인":
        case "크오체":
            dret = 11;
            break;
        case "비홀더 도미넌트":
        case "비홀더도미넌트":
        case "도미넌트":
            dret = 12;
            break;
        case "비홀더 쇼크 II":
        case "비홀더쇼크 II":
        case "비홀더쇼크II":
        case "비홀더 쇼크 2":
        case "비홀더쇼크 2":
        case "비홀더쇼크2":
        case "쇼크 2":
        case "쇼크2":
        case "쇼크 II":
        case "쇼크II":
            dret = 13;
            break;
        case "비홀더스 버프":
        case "비홀더스버프":
        case "비홀더 버프":
        case "비홀더버프":
            dret = 14;
            break;
        case "로드 오브 다크니스":
        case "로드오브 다크니스":
        case "로드오브다크니스":
        case "다크니스":
        case "로오다":
            dret = 15;
            break;
        case "인듀어":
            dret = 16;
            break;
        case "궁니르 디센트":
        case "궁니르디센트":
        case "궁니르":
        case "궁디":
        case "보스기":
            dret = 17;
            break;
        case "다크 임페일":
        case "다크임페일":
        case "임페일":
        case "사냥기":
            dret = 18;
            break;
        case "리인카네이션 액셉트":
        case "리인카네이션액셉트":
        case "리인카 액셉트":
        case "리인카액셉트":
        case "액셉트":
            dret = 19;
            break;
        case "리인카네이션":
        case "리인카":
            dret = 20;
            break;
        case "리인카네이션 쿼터":
        case "리인카네이션쿼터":
        case "리인카 쿼터":
        case "리인카쿼터":
        case "쿼터":
            dret = 21;
            break;
        case "리인카네이션 하프":
        case "리인카네이션하프":
        case "리인카 하프":
        case "리인카하프":
        case "하프":
            dret = 22;
            break;
        case "리인카네이션 풀":
        case "리인카네이션풀":
        case "리인카 풀":
        case "리인카풀":
        case "풀":
            dret = 23;
            break;
        case "다크 레조넌스":
        case "다크레조넌스":
        case "레조넌스":
            dret = 24;
            break;
        case "매직 크래쉬":
        case "매직크래쉬":
        case "매직 크래시":
        case "매직크래시":
        case "크래쉬":
        case "크래시":
            dret = 25;
            break;
        case "비홀더스 리벤지":
        case "비홀더스리벤지":
        case "비홀더 리벤지":
        case "비홀더리벤지":
        case "리벤지":
            dret = 26;
            break;
        case "어드밴스드 웨폰 마스터리":
        case "어드밴스드 웨폰마스터리":
        case "어드밴스드웨폰마스터리":
        case "웨폰 마스터리":
        case "웨폰마스터리":
        case "마스터리":
        case "어웨마":
            dret = 27;
            break;
        case "스탠스":
            dret = 28;
            break;
        case "다크 서스트":
        case "다크서스트":
        case "서스트":
        case "닼서":
        case "다서":
            dret = 29;
            break;
        case "다크 신서시스":
        case "다크신서시스":
        case "신서시스":
        case "닼신":
        case "다신":
            dret = 30;
            break;
    }
    return dret;
};
skdk.getskillnameDarkknight = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "다크 스피어";
            break;
        case 1:
            rep = "비홀더 임팩트";
            break;
        case 2:
            rep = "피어스 사이클론";
            break;
        case 3:
            rep = "다크니스 오라";
            break;
        case 4:
            rep = "어퍼 차지";
            break;
        case 5:
            rep = "리프 어택";
            break;
        case 6:
            rep = "스피어 풀링";
            break;
        case 7:
            rep = "비홀더";
            break;
        case 8:
            rep = "비홀더 쇼크";
            break;
        case 9:
            rep = "하이퍼 바디";
            break;
        case 10:
            rep = "돌진";
            break;
        case 11:
            rep = "크로스 오버 체인";
            break;
        case 12:
            rep = "비홀더 도미넌트";
            break;
        case 13:
            rep = "비홀더 쇼크 II";
            break;
        case 14:
            rep = "비홀더스 버프";
            break;
        case 15:
            rep = "로드 오브 다크니스";
            break;
        case 16:
            rep = "인듀어";
            break;
        case 17:
            rep = "궁니르 디센트";
            break;
        case 18:
            rep = "다크 임페일";
            break;
        case 19:
            rep = "리인카네이션 액셉트";
            break;
        case 20:
            rep = "리인카네이션";
            break;
        case 21:
            rep = "리인카네이션 쿼터";
            break;
        case 22:
            rep = "리인카네이션 하프";
            break;
        case 23:
            rep = "리인카네이션 풀";
            break;
        case 24:
            rep = "다크 레조넌스";
            break;
        case 25:
            rep = "매직 크래쉬";
            break;
        case 26:
            rep = "비홀더스 리벤지";
            break;
        case 27:
            rep = "어드밴스드 웨폰 마스터리";
            break;
        case 28:
            rep = "스탠스";
            break;
        case 29:
            rep = "다크 서스트";
            break;
        case 30:
            rep = "다크 신서시스";
            break;
        case 31:
            rep = "";
            break;
        case 32:
            rep = "";
            break;
    }
    return rep;
};
skdk.getskilldesc1Darkknight = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "12명,715%,7번 공격 창 생성/ 동작중 피격 데미지 10% 감소";
            break;
        case 1:
            rep = "3초간 10명,260%,6번 지속 공격/ 방무 20%/ 쿨 20초";
            break;
        case 2:
            rep = "하단 참조";
            break;
        case 3:
            rep = "하단 참조";
            break;
        case 4:
            rep = "최대 5명의 적을 304% 데미지로 공격";
            break;
        case 5:
            rep = "최대 4명의 적에게 90%의 데미지로 2번 공격";
            break;
        case 6:
            rep = "최대 8명의 적을 105%의 데미지로 4번 공격";
            break;
        case 7:
            rep = "24초마다 회복력 20의 힐 시전";
            break;
        case 8:
            rep = "10명, 150%, 6번 공격하고 45% 확률로 5초 동안 기절";
            break;
        case 9:
            rep = "MP 40 소비, 200초 동안 최대 HP와 최대 MP 60% 증가";
            break;
        case 10:
            rep = "305% 데미지로 최대 12명의 적을 공격하며 이동";
            break;
        case 11:
            rep = "하단 참조";
            break;
        case 12:
            rep = "비홀더가 자유롭게 날아다니며 210%의 데미지로 공격";
            break;
        case 13:
            rep = "10명, 215%, 6번 공격하고 90% 확률로 5초 동안 기절";
            break;
        case 14:
            rep = "공/마 40, 방어력 500, 크리티컬 확률 10% 증가 버프 시전";
            break;
        case 15:
            rep = "크리티컬 확률 30%, 크리티컬 데미지 8% 증가";
            break;
        case 16:
            rep = "상태 이상 내성 20, 모든 속성 내성 20% 증가";
            break;
        case 17:
            rep = "최대 3명의 적을 225% 데미지로 12번 공격/ 방무 30%";
            break;
        case 18:
            rep = "최대 8명의 적을 280% 데미지로 6번 공격";
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
            rep = "100% 확률로 일부 버프 해제, 22초 동안 버프 효과 제한";
            break;
        case 26:
            rep = "하단 참조";
            break;
        case 27:
            rep = "창, 폴암 계열 무기 숙련도 증가량 70%로 증가";
            break;
        case 28:
            rep = "스탠스 확률 60% 증가";
            break;
        case 29:
            rep = "30초 동안 공격력 80 증가, 공격 시 최대 HP 9%의 회복";
            break;
        case 30:
            rep = "주위의 10명의 적에게 330% 데미지로 10번 공격";
            break;
        case 31:
            rep = "";
            break;
        case 32:
            rep = "";
            break;
    }
    return rep;
};
skdk.getskilldesc2Darkknight = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "추가크확 100%, 방무 50%/ 쿨10초";
            break;
        case 1:
            rep = "비홀더가 다크나이트 앞으로 이동";
            break;
        case 2:
            rep = "키다운 극딜기";
            break;
        case 3:
            rep = "스킬 이펙트가 리모델링 되었음";
            break;
        case 4:
            rep = "위 방향키와 공격키를 함께 눌러서도 사용가능하다.";
            break;
        case 5:
            rep = "아래 방향키/앞 방향키와 공격키를 같이 눌러서도 사용 가능";
            break;
        case 6:
            rep = "적중한 적을 끌어당기며 기절시킴";
            break;
        case 7:
            rep = "온오프 스킬";
            break;
        case 8:
            rep = "재사용 대기시간 12초";
            break;
        case 9:
            rep = "현재 HP/MP는 그대로 둔 채 최대치만 증가";
            break;
        case 10:
            rep = "모험가 전사 공통 돌진형 밀격기";
            break;
        case 11:
            rep = "피해량 감소 최댓값 4000";
            break;
        case 12:
            rep = "비홀더류 스킬 사용시 캐릭터 앞에 즉시 소환";
            break;
        case 13:
            rep = "재사용 대기시간 12초";
            break;
        case 14:
            rep = "4초마다 지속시간이 100초, 파티원은 절반";
            break;
        case 15:
            rep = "공격 시 100% 확률로 최대 HP의 2% 회복";
            break;
        case 16:
            rep = "전직업 평균치인 40의 절반 정도";
            break;
        case 17:
            rep = "공격 시 최대 HP의 110%만큼의 데미지가 공격마다 증가";
            break;
        case 18:
            rep = "팔라딘의 컴뱃 오더스를 받으면 1타가 추가된다.";
            break;
        case 19:
            rep = "좌에서 우로 쿼터, 하프, 풀 순서이다.";
            break;
        case 20:
            rep = "사망 방지 및 부활 패시브";
            break;
        case 21:
            rep = "Quater";
            break;
        case 22:
            rep = "Half";
            break;
        case 23:
            rep = "Full";
            break;
        case 24:
            rep = "펫 버프 자동스킬 등록 가능";
            break;
        case 25:
            rep = "재사용 대기시간 60초";
            break;
        case 26:
            rep = "비홀더 쇼크 강화, 반격 패시브";
            break;
        case 27:
            rep = "공격력 30, 크리티컬 데미지 15% 증가";
            break;
        case 28:
            rep = "모전 공통 스탠스 패시브";
            break;
        case 29:
            rep = "재사용 대기시간 120초";
            break;
        case 30:
            rep = "재사용 대기시간 10초";
            break;
        case 31:
            rep = "";
            break;
        case 32:
            rep = "";
            break;
    }
    return rep;
};
skdk.getskilldesc3Darkknight = function (skillcode){
    rep = "";
    switch(skillcode){
        case 2:
            rep = "검은 폭풍이 보일 정도로 창을 빠르게 휘둘러 전방을 초토화시킨다. 마무리 공격은 공격 무시 및 공격 반사 상태의 적에게도 피해를 입힌다.\n\nMP 100 소비, 최대 4.5초 동안 전방 12명의 적을 1040%의 데미지로 연속해서 12번 공격, 공격 적중 시 최대 HP의 1% 회복\n키다운 종료 시 최대 12명의 적에게 780%의 데미지로 15번 공격하는 충격파가 5번 발동하는 마무리 공격, 마무리 공격 적중 시 최대 HP의 10% 회복\n피어스 사이클론의 모든 공격은 추가 크리티컬 확률 100%, 몬스터 방어율 50% 추가 무시\n\n재사용 대기시간 180초";
            break;
        case 3:
            rep = "MP 1000 소비, 40초 동안 일정 간격마다 최대 3명의 적을 880%의 데미지로 5번 공격 후 최대 HP의 3% 회복하며 생명력 1 획득, HP가 최대치라면 회복량의 75%에 해당하는 보호막 생성, 생명력 최대치 15, 보호막 최대치 최대 HP의 30%\n\n하이퍼 바디 적용 중 일정 간격으로 보호막의 최대치 만큼 생성\n아이언 월 적용 중 최대 HP의 일정 비율로 피해를 입히는 공격을 포함한 피격 데미지 10% 감소\n\n스킬을 재사용하여 종료 시 최대 8명의 적을 1455% 데미지로 13번 공격하는 어둠의 참격 발동, 획득한 생명력 3마다 참격 1번 추가 발동\n\n재사용 대기시간 : 180초";
            break;
        case 11:
            rep = "일정 시간 동안 현재 HP 비율에 따라 데미지가 증가하고 감소한 HP의 일정 비율만큼 받는 피해가 절대값으로 감소한다.\n\nMP 20 소비, 200초 동안 20%만큼 최종 데미지 증가, 현재 HP가 최대 HP의 50% 이하일 경우 비율에 비례해 최종 데미지 증가량 감소\n감소한 HP의 8%만큼 받는 피해가 절대값으로 감소\n단, 감소량의 최대치 4000\n\n[패시브 효과 : 최종 데미지 50% 증가]";
            break;
        case 19:
            rep = "어둠과의 계약을 수락한다. 액셉트 타입을 선택하여 계약을 수락한 상태에서만 HP가 0이 될 경우 리인카네이션이 발동된다. 단 한번 사용 후 리인카네이션이 재사용 대기시간 상태면 발동되지 않는다. 리인카네이션의 스킬 레벨이 1 이상일 때만 사용할 수 있다. 사용 시 방향키로 타입 선택 시 효과가 활성화되고 재사용 시 비활성화되는 온오프 스킬\n\n스킬 사용 후 5초 이내에 방향키를 입력하여 액셉트의 타입을 선택\n재사용 대기시간 1초";
            break;
        case 20:
            rep = "HP가 0이 되면 어둠과의 계약에 의해 죽지 않고 리인카네이션 액셉트에 선택된 타입에 따라 무적 상태가 된다. 단, 무적 후 일정 시간 동안 계약된 수의 몬스터를 처치 및 공격에 성공하면 다음 계약까지 재사용 대기시간이 감소한다.\n리인카네이션은 재사용 대기시간 초기화의 효과를 받지 않는다. 추가로 HP가 일정 이상일 때 영구히 최종 데미지, 이동속도, 크리티컬 확률, 크리티컬 데미지가 증가한다.\n\n효과 발동 시 HP 및 MP 완전 회복, 리인카네이션 액셉트 선택 타입에 따라 무적 효과 발동\n리인카네이션 쿼터 : 2초 동안 무적, 무적 발동 후 10초 동안 24명의 적을 처치하거나 보스 몬스터를 공격하면 재사용 대기시간 70초 감소\n재사용 대기시간 180초\n\n리인카네이션 하프 : 8초 동안 무적, 무적 발동 후 20초 동안 44명의 적을 처치하거나 보스 몬스터를 공격하면 재사용 대기시간 80초 감소\n재사용 대기시간 260초\n\n리인카네이션 풀 : 40초 동안 무적, 무적 발동 후 40초 동안 52명의 적을 처치하거나 보스 몬스터를 공격하면 재사용 대기시간 300초 감소\n재사용 대기시간 900초\n\n[패시브 효과 : HP가 20% 이상일 때 최종 데미지 +30%, 이동속도 +20, 크리티컬 확률 10% 증가, 크리티컬 데미지 15% 증가]";
            break;
        case 21:
            rep = "HP가 0이 되면 어둠과의 계약에 의해 힘을 조금 사용하여 죽지 않고 무적 상태가 된다. 단, 무적 후 일정 시간 동안 계약된 수의 몬스터를 처치 및 공격에 성공하면 다음 계약까지 재사용 대기시간이 감소한다.\n리인카네이션은 재사용 대기시간 초기화의 효과를 받지 않는다.\n\n효과 발동 시 HP 및 MP 완전 회복, 2초 동안 무적, 무적 발동 후 10초 동안 24명의 적을 처치하거나 보스 몬스터를 공격하면 재사용 대기시간 70초 감소\n재사용 대기시간 180초";
            break;
        case 22:
            rep = "HP가 0이 되면 어둠과의 계약에 의해 힘을 조금 사용하여 죽지 않고 무적 상태가 된다. 단, 무적 후 일정 시간 동안 계약된 수의 몬스터를 처치 및 공격에 성공하면 다음 계약까지 재사용 대기시간이 감소한다.\n리인카네이션은 재사용 대기시간 초기화의 효과를 받지 않는다.\n\n효과 발동 시 HP 및 MP 완전 회복, 8초 동안 무적, 무적 발동 후 20초 동안 44명의 적을 처치하거나 보스 몬스터를 공격하면 재사용 대기시간 80초 감소\n재사용 대기시간 260초";
            break;
        case 23:
            rep = "HP가 0이 되면 어둠과의 계약에 의해 힘을 조금 사용하여 죽지 않고 무적 상태가 된다. 단, 무적 후 일정 시간 동안 계약된 수의 몬스터를 처치 및 공격에 성공하면 다음 계약까지 재사용 대기시간이 감소한다.\n리인카네이션은 재사용 대기시간 초기화의 효과를 받지 않는다.\n\n효과 발동 시 HP 및 MP 완전 회복, 40초 동안 무적, 무적 발동 후 40초 동안 52명의 적을 처치하거나 보스 몬스터를 공격하면 재사용 대기시간 300초 감소\n재사용 대기시간 900초";
            break;
        case 24:
            rep = "비홀더와 공명하여 순수한 어둠의 힘을 개방한다. 스킬 사용 시 HP를 즉시 회복하고 일정 시간 동안 최종 데미지, 방어율 무시, 보스 몬스터 공격 시 데미지 증가 효과를 얻고 추가로 영구히 방어율 무시가 증가한다.\n\nMP 85 소비, 시전 즉시 최대 HP의 100% 회복, 30초 동안 최종 데미지 10% 증가, 적의 방어 10% 무시, 보스 몬스터 공격 시 데미지 15% 증가\n재사용 대기시간 70초, 자신이 직접 공격하는 공격 적중 시 재사용 대기시간 0.35초 감소\n\n[패시브 효과 : 몬스터의 방어율 30% 무시]";
            break;
        case 26:
            rep = "비홀더가 적에게 반격한다. 비홀더가 일정 시간마다 다크나이트가 직접 공격한 적에 복수의 낙인을 새겨 피해를 입힌다. 또한 비홀더와 더 깊게 연결되어 비홀더 쇼크가 강화된다.\n비홀더의 공격은 반사 상태의 적을 공격해도 피해를 입지 않는다.\n\n다크나이트가 직접 공격한 최대 10명의 적을 255%의 데미지로 5번 공격\n재사용 대기시간 5초\n\n비홀더 쇼크 III : 최대 10명의 적을 370%의 데미지로 6번 공격 후 응축된 암흑투기를 4개 발사하여 최대 3명의 적을 350%의 데미지로 3번 추가 공격\n재사용 대기시간 10초";
            break;
        case 9:
            rep = "";
            break;
    }
    return rep;
};
skdk.getskillimage1Darkknight = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "https://i.imgur.com/mf9Bnmh.png";
            break;
        case 1:
            rep = "https://i.imgur.com/miwLzzQ.png";
            break;
        case 2:
            rep = "https://i.imgur.com/RkaGzWC.png";
            break;
        case 3:
            rep = "https://i.imgur.com/PrHO61l.png";
            break;
        case 4:
            rep = "https://i.imgur.com/m4E6I8Q.png";
            break;
        case 5:
            rep = "https://i.imgur.com/y7nOjOw.png";
            break;
        case 6:
            rep = "https://i.imgur.com/drv2tFN.png";
            break;
        case 7:
            rep = "https://i.imgur.com/awV8Ra1.png";
            break;
        case 8:
            rep = "https://i.imgur.com/EUiqG9W.png";
            break;
        case 9:
            rep = "https://i.imgur.com/uGqmm1Z.png";
            break;
        case 10:
            rep = "https://i.imgur.com/YB35WtH.png";
            break;
        case 11:
            rep = "https://i.imgur.com/t6D3Seg.png";
            break;
        case 12:
            rep = "";
            break;
        case 13:
            rep = "https://i.imgur.com/1vN9rDh.png";
            break;
        case 14:
            rep = "https://i.imgur.com/wKqOYUa.png";
            break;
        case 15:
            rep = "";
            break;
        case 16:
            rep = "";
            break;
        case 17:
            rep = "https://i.imgur.com/61OZBrD.png";
            break;
        case 18:
            rep = "https://i.imgur.com/KrrN3yv.png";
            break;
        case 19:
            rep = "https://i.imgur.com/NI3Ba0D.png";
            break;
        case 20:
            rep = "";
            break;
        case 21:
            rep = "https://i.imgur.com/FAl7IIE.png";
            break;
        case 22:
            rep = "https://i.imgur.com/1WkWqNw.png";
            break;
        case 23:
            rep = "https://i.imgur.com/HWPOa0W.png";
            break;
        case 24:
            rep = "https://i.imgur.com/8V3RLR7.png";
            break;
        case 25:
            rep = "https://i.imgur.com/uGGaU3C.png";
            break;
        case 26:
            rep = "https://i.imgur.com/noJImim.png";
            break;
        case 27:
            rep = "";
            break;
        case 28:
            rep = "";
            break;
        case 29:
            rep = "https://i.imgur.com/v9EfvgS.png";
            break;
        case 30:
            rep = "https://i.imgur.com/uskJUml.png";
            break;
        case 31:
            rep = "";
            break;
        case 32:
            rep = "";
            break;
    }
    return rep;
};
skdk.getskillimage2Darkknight = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "https://i.imgur.com/2q991yy.png";
            break;
        case 1:
            rep = "https://i.imgur.com/6PqmsGt.png";
            break;
        case 2:
            rep = "https://i.imgur.com/pT0C34l.png";
            break;
        case 3:
            rep = "https://i.imgur.com/Z5mtHoH.png";
            break;
        case 4:
            rep = "https://i.imgur.com/Gr5Jsig.png";
            break;
        case 5:
            rep = "https://i.imgur.com/FQY2NJ1.png";
            break;
        case 6:
            rep = "https://i.imgur.com/4wq8pSs.png";
            break;
        case 7:
            rep = "https://i.imgur.com/MBkLBBn.png";
            break;
        case 8:
            rep = "https://i.imgur.com/R7xza2S.png";
            break;
        case 9:
            rep = "https://i.imgur.com/wzaPNYc.png";
            break;
        case 10:
            rep = "https://i.imgur.com/C5qCr42.png";
            break;
        case 11:
            rep = "https://i.imgur.com/dBfZjz7.png";
            break;
        case 12:
            rep = "https://i.imgur.com/V2QiRP4.png";
            break;
        case 13:
            rep = "https://i.imgur.com/qxkRPTF.png";
            break;
        case 14:
            rep = "https://i.imgur.com/nE753lz.png";
            break;
        case 15:
            rep = "https://i.imgur.com/CFLH23n.png";
            break;
        case 16:
            rep = "https://i.imgur.com/2SUPVc7.png";
            break;
        case 17:
            rep = "https://i.imgur.com/4zPTZ3T.png";
            break;
        case 18:
            rep = "https://i.imgur.com/wpKVoIt.png";
            break;
        case 19:
            rep = "https://i.imgur.com/w2DUwsJ.png";
            break;
        case 20:
            rep = "https://i.imgur.com/WXQALL8.png";
            break;
        case 21:
            rep = "https://i.imgur.com/NGOTtc4.png";
            break;
        case 22:
            rep = "https://i.imgur.com/aF8Usyy.png";
            break;
        case 23:
            rep = "https://i.imgur.com/Xvv8G0X.png";
            break;
        case 24:
            rep = "https://i.imgur.com/mBb039m.png";
            break;
        case 25:
            rep = "https://i.imgur.com/OrLJVAw.png";
            break;
        case 26:
            rep = "https://i.imgur.com/h6iVvii.png";
            break;
        case 27:
            rep = "https://i.imgur.com/EGEi36V.png";
            break;
        case 28:
            rep = "https://i.imgur.com/Vgrr7O2.png";
            break;
        case 29:
            rep = "https://i.imgur.com/GIqwN5T.png";
            break;
        case 30:
            rep = "https://i.imgur.com/GiIQfFD.png";
            break;
        case 31:
            rep = "";
            break;
        case 32:
            rep = "";
            break;
    }
    return rep;
};

module.exports = skdk;