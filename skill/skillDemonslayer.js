const skds = {};

skds.getskillDemonslayer = function (skillname){
    var dsret = -1;
    switch(skillname){
        case "데몬 어웨이크닝":
        case "데몬어웨이크닝":
        case "어웨이크닝":
        case "데어":
            dsret = 0;
            break;
        case "요르문간드":
        case "요르문":
        case "요르":
            dsret = 1;
            break;
        case "오르트로스":
        case "오르트":
        case "오르":
            dsret = 2;
            break;
        case "데몬 베인":
        case "데몬베인":
        case "베인":
        case "데베":
            dsret = 3;
            break;
        case "데몬 점프":
        case "데몬점프":
        case "데점":
        case "더블 점프":
        case "더블점프":
        case "윗점":
        case "글라이드":
            dsret = 4;
            break;
        case "데모닉 블러드":
        case "데모닉블러드":
        case "데블":
            dsret = 5;
            break;
        case "데스 커스":
        case "데스커스":
        case "커스":
        case "데커":
            dsret = 6;
            break;
        case "데몬 슬래시":
        case "데몬슬래시":
        case "데몬 슬래시 1":
        case "데몬슬래시 1":
        case "데몬슬래시1":
        case "데슬":
        case "데슬1":
            dsret = 7;
            break;
        case "다크 어질리티":
        case "다크어질리티":
        case "어질리티":
            dsret = 8;
            break;
        case "데몬 슬래시 1차 강화":
        case "데몬슬래시 1차 강화":
        case "데몬슬래시 1차강화":
        case "데몬 슬래시 1차강화":
        case "데몬슬래시1차강화":
        case "데슬1차강화":
        case "데몬 슬래시 2":
        case "데몬슬래시 2":
        case "데몬슬래시2":
        case "데슬2":
            dsret = 9;
            break;
        case "소울 이터":
        case "소울이터":
        case "이터":
            dsret = 10;
            break;
        case "다크 쓰러스트":
        case "다크쓰러스트":
        case "쓰러스트":
        case "밀격기":
        case "밀격":
        case "돌진기":
        case "돌진":
            dsret = 11;
            break;
        case "데몬 트레이스":
        case "데몬트레이스":
        case "데트":
        case "트레이스":
        case "추적기":
        case "추적":
            dsret = 12;
            break;
        case "다크 리벤지":
        case "다크리벤지":
        case "닼리":
        case "다리":
        case "리벤지":
            dsret = 13;
            break;
        case "아웃레이지":
            dsret = 14;
            break;
        case "데몬 슬래시 2차 강화":
        case "데몬슬래시 2차 강화":
        case "데몬슬래시 2차강화":
        case "데몬 슬래시 2차강화":
        case "데몬슬래시2차강화":
        case "데슬2차강화":
        case "데몬 슬래시 3":
        case "데몬슬래시 3":
        case "데몬슬래시3":
        case "데슬3":
            dsret = 15;
            break;
        case "다크 저지먼트":
        case "다크저지먼트":
        case "저지먼트":
        case "닼저":
        case "다저":
            dsret = 16;
            break;
        case "데스 드로우":
        case "데스드로우":
        case "드로우":
        case "데드":
        case "끌격기":
        case "끌격":
            dsret = 17;
            break;
        case "블러디 레이븐":
        case "블러디레이븐":
        case "레이븐":
        case "회복기":
        case "회복":
            dsret = 18;
            break;
        case "데모닉 브레스":
        case "데모닉브레스":
        case "브레스":
        case "데브":
            dsret = 19;
            break;
        case "다크 인듀어":
        case "다크인듀어":
        case "인듀어":
            dsret = 20;
            break;
        case "이블 토쳐":
        case "이블토쳐":
        case "토쳐":
            dsret = 21;
            break;
        case "컨센트레이션":
            dsret = 22;
            break;
        case "포스 가드":
        case "포스가드":
        case "가드":
        case "포가":
            dsret = 23;
            break;
        case "맥스 포스":
        case "맥스포스":
        case "맥스":
        case "맥포":
            dsret = 24;
            break;
        case "데몬 슬래시 최종 강화":
        case "데몬슬래시 최종 강화":
        case "데몬슬래시 최종강화":
        case "데몬 슬래시 최종강화":
        case "데몬슬래시최종강화":
        case "데슬최종강화":
        case "데몬 슬래시 4":
        case "데몬슬래시 4":
        case "데몬슬래시4":
        case "데슬4":
            dsret = 25;
            break;
        case "데몬 익스플로젼":
        case "데몬익스플로젼":
        case "익스플로젼":
        case "데익":
            dsret = 26;
            break;
        case "데몬 임팩트":
        case "데몬임팩트":
        case "임팩트":
        case "데임":
            dsret = 27;
            break;
        case "데빌 크라이":
        case "데빌크라이":
        case "크라이":
        case "데크":
            dsret = 28;
            break;
        case "다크 바인드":
        case "다크바인드":
        case "바인드":
        case "닼바":
        case "다바":
            dsret = 29;
            break;
        case "메타모포시스":
        case "탈태":
            dsret = 30;
            break;
        case "인피니티 포스":
        case "인피니티포스":
        case "인피니티":
        case "인포":
            dsret = 31;
            break;
        case "뱀피릭 터치":
        case "뱀피릭터치":
        case "뱀피릭":
        case "뱀터":
            dsret = 32;
            break;
        case "하드 스킨":
        case "하드스킨":
            dsret = 33;
            break;
        case "블루 블러드":
        case "블루블러드":
        case "블블":
        case "블루":
            dsret = 34;
            break;
        case "서버러스":
        case "케르베로스":
            dsret = 35;
            break;
        case "":
            dsret = 36;
            break;
    }
    return dsret;
};
skds.getskillnameDemonslayer = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "데몬 어웨이크닝";
            break;
        case 1:
            rep = "요르문간드";
            break;
        case 2:
            rep = "오르트로스";
            break;
        case 3:
            rep = "데몬 베인";
            break;
        case 4:
            rep = "데몬 점프";
            break;
        case 5:
            rep = "데모닉 블러드";
            break;
        case 6:
            rep = "데스 커스";
            break;
        case 7:
            rep = "데몬 슬래시";
            break;
        case 8:
            rep = "다크 어질리티";
            break;
        case 9:
            rep = "데몬 슬래시 1차 강화";
            break;
        case 10:
            rep = "소울 이터";
            break;
        case 11:
            rep = "다크 쓰러스트";
            break;
        case 12:
            rep = "데몬 트레이스";
            break;
        case 13:
            rep = "다크 리벤지";
            break;
        case 14:
            rep = "아웃레이지";
            break;
        case 15:
            rep = "데몬 슬래시 2차 강화";
            break;
        case 16:
            rep = "다크 저지먼트";
            break;
        case 17:
            rep = "데스 드로우";
            break;
        case 18:
            rep = "블러디 레이븐";
            break;
        case 19:
            rep = "데모닉 브레스";
            break;
        case 20:
            rep = "다크 인듀어";
            break;
        case 21:
            rep = "이블 토쳐";
            break;
        case 22:
            rep = "컨센트레이션";
            break;
        case 23:
            rep = "포스 가드";
            break;
        case 24:
            rep = "맥스 포스";
            break;
        case 25:
            rep = "데몬 슬래시 최종 강화";
            break;
        case 26:
            rep = "데몬 익스플로젼";
            break;
        case 27:
            rep = "데몬 임팩트";
            break;
        case 28:
            rep = "데빌 크라이";
            break;
        case 29:
            rep = "다크 바인드";
            break;
        case 30:
            rep = "메타모포시스";
            break;
        case 31:
            rep = "인피니티 포스";
            break;
        case 32:
            rep = "뱀피릭 터치";
            break;
        case 33:
            rep = "하드 스킨";
            break;
        case 34:
            rep = "블루 블러드";
            break;
        case 35:
            rep = "서버러스";
            break;
        case 36:
            rep = "";
            break;
    }
    return rep;
};
skds.getskilldesc1Demonslayer = function (skillcode){
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
            rep = "의지 20레벨, 카리스마 20레벨";
            break;
        case 6:
            rep = "공격 시 1% 확률로 데미지 100% 증가";
            break;
        case 7:
            rep = "하단 참조";
            break;
        case 8:
            rep = "이동속도 25, 점프력 20 증가";
            break;
        case 9:
            rep = "데몬 슬래시의 데미지 80%p 증가";
            break;
        case 10:
            rep = "최대 8명의 적을 끌어당기며 120% 데미지로 5번 공격";
            break;
        case 11:
            rep = "최대 8명의 적을 105% 데미지로 3번 공격하며 이동";
            break;
        case 12:
            rep = "하단 참조";
            break;
        case 13:
            rep = "180초 동안 받은 피해의 400%만큼 적에게 되돌려 줌";
            break;
        case 14:
            rep = "공격력 50, 크리티컬 확률 20% 증가";
            break;
        case 15:
            rep = "데몬 슬래시의 데미지 30% 증가";
            break;
        case 16:
            rep = "최대 10명의 적을 200% 데미지로 5번 공격 / 크확20%";
            break;
        case 17:
            rep = "포스 10 / 최대 10명의 적에게 190% 데미지로 3번 공격";
            break;
        case 18:
            rep = "포스 10 / 최대 8명의 적에게 170% 데미지로 5번 공격";
            break;
        case 19:
            rep = "하단 참조";
            break;
        case 20:
            rep = "방어력 100%, 상태 이상 내성 60";
            break;
        case 21:
            rep = "기절,암흑,결빙,슬로우,행동 불가에 걸린 적 공격 시";
            break;
        case 22:
            rep = "최종 데미지 30% 증가";
            break;
        case 23:
            rep = "피격 시 30% 확률로 가드";
            break;
        case 24:
            rep = "데몬 슬래시 사용 시 75%의 확률로 포스 추가 흡수";
            break;
        case 25:
            rep = "데몬 슬래시의 데미지 30%";
            break;
        case 26:
            rep = "10명, 400% 공격 후, 320%, 5번 크리티컬 공격";
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
            rep = "포스 100 / 50초간 포스 제한없이 스킬 사용 가능";
            break;
        case 32:
            rep = "180초 동안 공격 데미지의 3%를 파티원의 HP로 회복시킴";
            break;
        case 33:
            rep = "영구적으로 20% 피해 감소";
            break;
        case 34:
            rep = "하단 참조";
            break;
        case 35:
            rep = "하단 참조";
            break;
        case 36:
            rep = "";
            break;
    }
    return rep;
};
skds.getskilldesc2Demonslayer = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "모든 데몬 슬래시 강화 효과 적용(패시브, 코강 하이퍼 등)";
            break;
        case 1:
            rep = "고정형 소환수 스킬";
            break;
        case 2:
            rep = "캐릭터의 공격에 반응";
            break;
        case 3:
            rep = "이 스킬만 혼자 240초 주기다.";
            break;
        case 4:
            rep = "이동기";
            break;
        case 5:
            rep = "스탠스 확률 100% 증가.";
            break;
        case 6:
            rep = "효과 발동 시 HP 5% 회복, 공격대상 사망시 포스 흡수";
            break;
        case 7:
            rep = "일반 공격 대체";
            break;
        case 8:
            rep = "-";
            break;
        case 9:
            rep = "-";
            break;
        case 10:
            rep = "키다운 스킬 / 공격 당 HP 45, 포스 3 소비";
            break;
        case 11:
            rep = "포스 6 소비 / 돌진형 밀격기";
            break;
        case 12:
            rep = "추적기";
            break;
        case 13:
            rep = "HP 150 / 대상은 90% 확률로 5초 동안 마비";
            break;
        case 14:
            rep = "-";
            break;
        case 15:
            rep = "-";
            break;
        case 16:
            rep = "HP 300, 포스 20 소비";
            break;
        case 17:
            rep = "대상은 90% 확률로 5초 동안 기절 / 끌격기";
            break;
        case 18:
            rep = "최대 HP의 50%만큼 HP 회복, 시전 동작 중 무적/ 쿨30초";
            break;
        case 19:
            rep = "키다운 스킬";
            break;
        case 20:
            rep = "모든 속성 내성 60% 증가";
            break;
        case 21:
            rep = "최종 데미지 15%, 크리티컬 확률 15% 추가 증가";
            break;
        case 22:
            rep = "공격 속도(1단계) 증가";
            break;
        case 23:
            rep = "가드 성공 시 3%의 HP와 5의 포스 회복";
            break;
        case 24:
            rep = "4초마다 포스 10 자동 회복";
            break;
        case 25:
            rep = "최종 데미지 30% 증가";
            break;
        case 26:
            rep = "HP 300, 포스 15 소비";
            break;
        case 27:
            rep = "주력 공격기";
            break;
        case 28:
            rep = "광역 디버프 공격기";
            break;
        case 29:
            rep = "최초의 바인드기";
            break;
        case 30:
            rep = "시전시 약 2초간 무적";
            break;
        case 31:
            rep = "재사용 대기시간 200초";
            break;
        case 32:
            rep = "최대 HP 25%이상 회복불가, 5초 동안 재흡수 불가";
            break;
        case 33:
            rep = "HP비례데미지 미적용";
            break;
        case 34:
            rep = "온오프 스킬";
            break;
        case 35:
            rep = "케르베로스(Cerberus)의 영미식 발음";
            break;
        case 36:
            rep = "";
            break;
    }
    return rep;
};
skds.getskilldesc3Demonslayer = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "진정한 마족의 힘에 눈을 뜬다. 서버러스는 공격 반사 상태의 적을 공격해도 피해를 입지 않는다.\n\n포스 100 소비, 65초 동안 진정한 마족의 힘을 각성하여 크리티컬 확률 65% 증가\n\n직접 공격하는 스킬 사용 시 8초마다 서버러스가 자동 발동, 데몬 슬래시가 강화되고 사용 중 데몬 트레이스 사용 가능\n\n강화 데몬 슬래시 : 최대 6명의 적을 3번 공격, 몬스터 방어율 50% 추가 무시, 보스 몬스터 공격 시 데미지 50% 증가\n강화 데몬 슬래시 데미지 : 1타와 2타 600%, 3타 700%, 4타 800%\n\n재사용 대기시간 : 120초";
            break;
        case 1:
            rep = "포스를 제물로 명계의 마룡을 소환한다. 마룡의 공격은 공격 반사 상태의 적을 공격해도 피해를 입지 않는다.\n\n포스 60, 최대 HP의 10% 소비\n\n16초 동안 일정 주기마다 최대 12명의 적을 1870%로 12번 공격\n소멸 시 최대 12명의 적에게 1980%의 데미지로 15번 추가 공격\n모든 공격은 추가 크리티컬 확률 100%, 몬스터 방어율 50% 추가 무시\n\n재사용 대기시간 105초";
            break;
        case 2:
            rep = "포스를 제물로 명계의 포악한 쌍둥이 신을 소환한다. 쌍둥이 신의 공격은 공격 반사 상태의 적을 공격해도 피해를 입지 않는다.\n\n포스 30 소비\n40초 동안 소환\n\n네메아 : 2초마다 최대 10명의 적을 880% 데미지로 12번 공격, 공격 시 포스 추가 흡수량 8\n게리온 : 3초마다 최대 10명의 적을 1980% 데미지로 10번 공격, 공격 시 포스 추가 흡수량 12\n\n모든 공격은 추가 크리티컬 확률 100%, 몬스터 방어율 50% 추가 무시\n\n재사용 대기시간 120초";
            break;
        case 3:
            rep = "강대한 포스를 분출하여 적들을 파멸시킨다. 키다운 종료 시 포스에 휩싸여 무적 상태로 더욱 강력한 공격을 할 수 있다. 무적 공격 중 아래 방향키와 함께 스킬을 재사용하여 즉시 종료할 수 있다.\n\n포스 60, HP 2000 소비, 8.0초 동안 무적\n\n키다운 동안 최대 5명의 적을 715%의 데미지로 6번 연속 공격, 최대 키다운 시간 4초\n키다운 종료 시 최대 12명의 적을 1715%의 데미지로 7번 연속 공격, 키다운 지속 시간에 비례해 공격시간 2배까지 증가\n모든 공격은 추가 크리티컬 확률 50%, 몬스터 방어율 30% 추가 무시\n\n재사용 대기시간 : 240초";
            break;
        case 4:
            rep = "마족의 날개를 이용한 여러가지 점프 스킬을 사용할 수 있다. 글라이드 커맨드 잠금 : 마우스 우클릭, 글라이드 커맨드 잠금 중에는 점프 중 점프키를 사용 시 더블 점프 발동\n\n하이점프 : 점프 중 ↑↑\n더블점프 : 점프 중 →→ 또는 ←←\n글라이드 : 점프키 (누르기 유지)";
            break;
        case 7:
            rep = "공격키를 연타하여 전방의 적 다수를 4번 연속 공격한다. 공격 시 대상으로부터 일정량의 포스를 흡수할 수 있다.\n\n1타, 2타 : 최대 6명의 적을 110%의 데미지로 2번 공격\n3타 : 최대 6명의 적을 100%의 데미지로 3번 공격\n4타 : 최대 6명의 적을 100%의 데미지로 4번 공격";
            break;
        case 12:
            rep = "자신의 주변, 가까운 위치의 적을 추적하여 공격하며 대상을 일정 확률로 기절시킬 수 있다. 공중에서 사용할 수 있고 한 개 또는 두 개의 방향키와 함께 사용하면 순간 이동하는 방향을 결정할 수 있다.\n\n포스 20 소비, 순간 이동 후 최대 6명의 적을 305% 데미지로 공격, 90% 확률로 3초 동안 기절\n순간 이동 후 0.7초 동안 포스 흡수 불가\n\n재사용 대기시간 0.7초";
            break;
        case 19:
            rep = "포이즌 데몬의 강력한 독으로 주변의 적 다수를 동시에 공격한다. 대상은 일정 시간 동안 지속 피해를 입는다.\n\n공격 당 HP 80, 포스 6 소비, 스킬 키를 누르고 있으면 최대 10명의 적에게 155% 데미지로 5번 공격, 대상에게 8초 동안 1초당 135%의 독 속성 도트 데미지 적용";
            break;
        case 27:
            rep = "순간적으로 잠재된 힘을 활성화하여 전방의 적 다수에게 치명적인 데미지를 준다. 데몬 임팩트는 추가 크리티컬 확률 및 슬로우 효과와 몹 방어율 추가 무시 효과가 적용되며 대상이 보스일 경우 데미지가 증가된다.\n\n포스 8 소비, 최대 4명의 적을 460% 데미지로 6번 공격, 추가 크리티컬 확률 100%과 몹 방어율 30% 추가 무시 효과 적용, 3초 동안 슬로우 효과 적용, 보스 몬스터 공격 시 데미지 40% 증가";
            break;
        case 28:
            rep = "순간적으로 잠재된 힘을 방출하여 사방의 적 다수를 위협하고 강한 데미지를 준다. 대상은 암흑 상태 이상에 걸려 방어력, 공격력, 명중률이 감소하며 경험치 획득량과 아이템 드롭 확률이 증가한다. 인피니티 포스 지속 중에는 재사용 대기시간이 감소한다.\n\nHP 400, 포스 30 소비, 최대 15명의 적을 515% 데미지로 7번 공격하며 위협. 대상은 20초 동안 공격력, 방어력 15%, 명중률 20% 감소, 획득 경험치, 아이템 드롭률 20% 증가\n재사용 대기시간 14초, 인피니티 포스 지속 중에는 7초로 감소";
            break;
        case 29:
            rep = "일정 확률로 주변의 적 다수를 행동 불가 상태로 만든다. 추가로 몬스터의 방어율을 일정수준만큼 무시하는 패시브 효과가 있으며 다크 바인드의 효과는 보스에게도 동일하게 적용된다.\n\n포스 60 소비, 최대 15명의 적을 700%로 3번 공격, 대상은 10초 동안 100%확률로 행동 불가 상태 적용\n다크 바인드로 적에게 준 데미지에 따라 행동 불가 지속시간 최대 100% 증가\n재사용 대기시간 120초\n\n[패시브 효과 : 영구적으로 몬스터의 방어율 30% 무시]";
            break;
        case 30:
            rep = "일정 시간 동안 잠재능력을 개방하여 데미지를 증가시키고 자신의 주위로 암흑 투기 2개를 빠르게 회전시켜 공격 범위 내 다수의 적을 자동으로 공격한다. 메타모포시스는 공격 반사 상태의 적을 공격해도 피해를 입지 않고 라이딩 탑승 시 해제된다.\n\nHP 300, 포스 40 소비, 버프 시전 동작 중 무적, 180초 동안 데미지 35% 증가, 주변의 적들을 250%의 데미지로 자동 공격\n재사용 대기시간 90초\n\n[패시브 효과 : 최대 HP 20% 증가]";
            break;
        case 34:
            rep = "자신의 피에 담긴 귀족의 혈통을 자각하고 그 힘을 일깨운다. 소환 스킬, 전직업 공용 5차 스킬 및 일부 스킬에는 적용되지 않는다.\n\nHP 300, 포스 30 소비, 모든 공격에 최종 데미지의 90%로 추가 타격 발생.\n\n[패시브 효과 : 모든 스킬의 포스 소비량 20% 감소]";
            break;
        case 35:
            rep = "명계를 지키는 신장의 힘으로 전방의 적들을 처단하고 혼을 강탈한다.\n\nHP 300 소비, 8명의 적에게 450% 데미지로 6번 공격. 보스 몬스터 공격 시 데미지 50% 및 몬스터 방어력 무시 50% 효과. 공격 시 포스 추가 흡수량 50.\n재사용 대기시간 5초";
            break;
        case 36:
            rep = "";
            break;
    }
    return rep;
};
skds.getskillimage1Demonslayer = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "https://i.imgur.com/3WFaAzl.png";
            break;
        case 1:
            rep = "https://i.imgur.com/1GdjirG.png";
            break;
        case 2:
            rep = "https://i.imgur.com/93VoFi1.png";
            break;
        case 3:
            rep = "https://i.imgur.com/zYj9bId.png";
            break;
        case 4:
            rep = "https://i.imgur.com/tvFZpZm.png";
            break;
        case 5:
            rep = "";
            break;
        case 6:
            rep = "";
            break;
        case 7:
            rep = "https://i.imgur.com/H8o6hBY.png";
            break;
        case 8:
            rep = "";
            break;
        case 9:
            rep = "https://i.imgur.com/JNyNgAj.png";
            break;
        case 10:
            rep = "https://i.imgur.com/P96FoVb.png";
            break;
        case 11:
            rep = "https://i.imgur.com/rz2qeZV.png";
            break;
        case 12:
            rep = "https://i.imgur.com/00lJHop.png";
            break;
        case 13:
            rep = "https://i.imgur.com/jt0oQFP.png";
            break;
        case 14:
            rep = "";
            break;
        case 15:
            rep = "https://i.imgur.com/I9sLaIa.png";
            break;
        case 16:
            rep = "https://i.imgur.com/ur4jwLF.png";
            break;
        case 17:
            rep = "https://i.imgur.com/LXMtmNH.png";
            break;
        case 18:
            rep = "https://i.imgur.com/OvNWcRq.png";
            break;
        case 19:
            rep = "https://i.imgur.com/HNXEXJM.png";
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
            rep = "https://i.imgur.com/sAKr5xr.png";
            break;
        case 26:
            rep = "https://i.imgur.com/vQSexlc.png";
            break;
        case 27:
            rep = "https://i.imgur.com/TTLMlwB.png";
            break;
        case 28:
            rep = "https://i.imgur.com/f3TzoLW.png";
            break;
        case 29:
            rep = "https://i.imgur.com/lXe95xD.png";
            break;
        case 30:
            rep = "https://i.imgur.com/HmNEhDx.png";
            break;
        case 31:
            rep = "https://i.imgur.com/TB7gueY.png";
            break;
        case 32:
            rep = "https://i.imgur.com/Sq6xiZD.png";
            break;
        case 33:
            rep = "";
            break;
        case 34:
            rep = "https://i.imgur.com/jfZ1NJU.png";
            break;
        case 35:
            rep = "https://i.imgur.com/oMx7pqh.png";
            break;
        case 36:
            rep = "";
            break;
    }
    return rep;
};
skds.getskillimage2Demonslayer = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "https://i.imgur.com/ypOwfyi.png";
            break;
        case 1:
            rep = "https://i.imgur.com/hFnrLIp.png";
            break;
        case 2:
            rep = "https://i.imgur.com/EIMKjVZ.png";
            break;
        case 3:
            rep = "https://i.imgur.com/4UENtPj.png";
            break;
        case 4:
            rep = "https://i.imgur.com/Bcr6rA4.png";
            break;
        case 5:
            rep = "https://i.imgur.com/vpvhnsR.png";
            break;
        case 6:
            rep = "https://i.imgur.com/a9jAPOV.png";
            break;
        case 7:
            rep = "https://i.imgur.com/EoA6ntM.png";
            break;
        case 8:
            rep = "https://i.imgur.com/ClIRUiA.png";
            break;
        case 9:
            rep = "https://i.imgur.com/g5mQ5Bx.png";
            break;
        case 10:
            rep = "https://i.imgur.com/DfkmTrn.png";
            break;
        case 11:
            rep = "https://i.imgur.com/hmuFddr.png";
            break;
        case 12:
            rep = "https://i.imgur.com/SylLsl8.png";
            break;
        case 13:
            rep = "https://i.imgur.com/IZR9WCR.png";
            break;
        case 14:
            rep = "https://i.imgur.com/3gk5dpu.png";
            break;
        case 15:
            rep = "https://i.imgur.com/WdTek3z.png";
            break;
        case 16:
            rep = "https://i.imgur.com/cAIk19l.png";
            break;
        case 17:
            rep = "https://i.imgur.com/YBflBaJ.png";
            break;
        case 18:
            rep = "https://i.imgur.com/hCu85cj.png";
            break;
        case 19:
            rep = "https://i.imgur.com/QkHzzdC.png";
            break;
        case 20:
            rep = "https://i.imgur.com/CBBTPZW.png";
            break;
        case 21:
            rep = "https://i.imgur.com/tgQwraU.png";
            break;
        case 22:
            rep = "https://i.imgur.com/T6UZDQI.png";
            break;
        case 23:
            rep = "https://i.imgur.com/gH1jTs5.png";
            break;
        case 24:
            rep = "https://i.imgur.com/6oOj9uf.png";
            break;
        case 25:
            rep = "https://i.imgur.com/hnS6ugO.png";
            break;
        case 26:
            rep = "https://i.imgur.com/6iJx52o.png";
            break;
        case 27:
            rep = "https://i.imgur.com/o7J0g36.png";
            break;
        case 28:
            rep = "https://i.imgur.com/ZxHW65J.png";
            break;
        case 29:
            rep = "https://i.imgur.com/FSNbn7f.png";
            break;
        case 30:
            rep = "https://i.imgur.com/W0CfTtf.png";
            break;
        case 31:
            rep = "https://i.imgur.com/WtSo4Fd.png";
            break;
        case 32:
            rep = "https://i.imgur.com/IdZMPG5.png";
            break;
        case 33:
            rep = "https://i.imgur.com/UkXFxF0.png";
            break;
        case 34:
            rep = "https://i.imgur.com/hG2DmyO.png";
            break;
        case 35:
            rep = "https://i.imgur.com/5HSB94B.png";
            break;
        case 36:
            rep = "";
            break;
    }
    return rep;
};

module.exports = skds;