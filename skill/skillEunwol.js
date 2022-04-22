const skew = {};

skew.getskillEunwol = function (skillname){
    var ewret = -1;
    switch(skillname){
        case "정령 집속":
        case "정령집속":
        case "정집":
            ewret = 0;
            break;
        case "귀문진":
            ewret = 1;
            break;
        case "진 귀참":
        case "진귀참":
            ewret = 2;
            break;
        case "파쇄 연권":
        case "파쇄연권":
        case "파쇄":
        case "파연":
            ewret = 3;
            break;
        case "축지":
            ewret = 4;
            break;
        case "정령 결속 1식":
        case "정령결속 1식":
        case "정령결속1식":
        case "정령 결속 1":
        case "정령결속 1":
        case "정령결속1":
        case "정결1":
            ewret = 5;
            break;
        case "정령친화":
        case "친화":
            ewret = 6;
            break;
        case "도약":
        case "더블 점프":
        case "더블점프":
        case "윗점":
            ewret = 7;
            break;
        case "건곤 일체":
        case "건곤일체":
        case "건곤":
            ewret = 8;
            break;
        case "파쇄철조-하":
        case "파쇄철조하":
        case "파쇄하":
        case "파하":
            ewret = 9;
            break;
        case "파쇄철조-전":
        case "파쇄철조전":
        case "파쇄전":
        case "파전":
            ewret = 10;
            break;
        case "후방 이동":
        case "후방이동":
            ewret = 11;
            break;
        case "정령 결속 2식":
        case "정령결속 2식":
        case "정령결속2식":
        case "정령 결속 2":
        case "정령결속 2":
        case "정령결속2":
        case "정결2":
            ewret = 12;
            break;
        case "여우령":
        case "사출기":
            ewret = 13;
            break;
        case "여우령 숙련":
        case "여우령숙련":
        case "여숙":
            ewret = 14;
            break;
        case "파쇄철조-회":
        case "파쇄철조회":
        case "파쇄회":
        case "파회":
            ewret = 15;
            break;
        case "소혼 장막":
        case "소혼장막":
            ewret = 16;
            break;
        case "속박술":
        case "바인드":
            ewret = 17;
            break;
        case "정령 결속 3식":
        case "정령결속 3식":
        case "정령결속3식":
        case "정령 결속 3":
        case "정령결속 3":
        case "정령결속3":
        case "정결3":
            ewret = 18;
            break;
        case "강혼 체식":
        case "강혼체식":
        case "강혼":
        case "강체":
            ewret = 19;
            break;
        case "환령 강신":
        case "환령강신":
        case "환령":
        case "환강":
            ewret = 20;
            break;
        case "약화":
            ewret = 21;
            break;
        case "폭류권":
        case "폭류":
            ewret = 22;
            break;
        case "귀참":
            ewret = 23;
            break;
        case "사혼 각인":
        case "사혼각인":
        case "사각":
        case "사혼":
            ewret = 24;
            break;
        case "분혼 격참":
        case "분혼격참":
        case "분혼":
        case "분격":
            ewret = 25;
            break;
        case "소혼 결계":
        case "소혼결계":
        case "소결":
            ewret = 26;
            break;
        case "불여우령 숙련":
        case "불여우령숙련":
        case "불여우령":
        case "불여우":
            ewret = 27;
            break;
        case "정령 결속 4식":
        case "정령결속 4식":
        case "정령결속4식":
        case "정령 결속 4":
        case "정령결속 4":
        case "정령결속4":
        case "정결4":
            ewret = 28;
            break;
        case "약점 간파":
        case "약점간파":
        case "크뎀":
            ewret = 29;
            break;
        case "정령 결속 극대화":
        case "정령결속 극대화":
        case "정령결속극대화":
        case "극대화":
        case "정결극":
            ewret = 30;
            break;
        case "정령의 화신":
        case "정령의화신":
        case "화신":
            ewret = 31;
            break;
        case "":
            ewret = 32;
            break;
    }
    return ewret;
};
skew.getskillnameEunwol = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "정령 집속";
            break;
        case 1:
            rep = "귀문진";
            break;
        case 2:
            rep = "진 귀참";
            break;
        case 3:
            rep = "파쇄 연권";
            break;
        case 4:
            rep = "축지";
            break;
        case 5:
            rep = "정령 결속 1식";
            break;
        case 6:
            rep = "정령친화";
            break;
        case 7:
            rep = "도약";
            break;
        case 8:
            rep = "건곤 일체";
            break;
        case 9:
            rep = "파쇄철조-하";
            break;
        case 10:
            rep = "파쇄철조-전";
            break;
        case 11:
            rep = "후방 이동";
            break;
        case 12:
            rep = "정령 결속 2식";
            break;
        case 13:
            rep = "여우령";
            break;
        case 14:
            rep = "여우령 숙련";
            break;
        case 15:
            rep = "파쇄철조-회";
            break;
        case 16:
            rep = "소혼 장막";
            break;
        case 17:
            rep = "속박술";
            break;
        case 18:
            rep = "정령 결속 3식";
            break;
        case 19:
            rep = "강혼 체식";
            break;
        case 20:
            rep = "환령 강신";
            break;
        case 21:
            rep = "약화";
            break;
        case 22:
            rep = "폭류권";
            break;
        case 23:
            rep = "귀참";
            break;
        case 24:
            rep = "사혼 각인";
            break;
        case 25:
            rep = "분혼 격참";
            break;
        case 26:
            rep = "소혼 결계";
            break;
        case 27:
            rep = "불여우령 숙련";
            break;
        case 28:
            rep = "정령 결속 4식";
            break;
        case 29:
            rep = "약점 간파";
            break;
        case 30:
            rep = "정령 결속 극대화";
            break;
        case 31:
            rep = "정령의 화신";
            break;
        case 32:
            rep = "";
            break;
    }
    return rep;
};
skew.getskilldesc1Eunwol = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "하단 참조";
            break;
        case 1:
            rep = "하단 참조";
            break;
        case 2:
            rep = "10명의 적을 720% 데미지로 12번 공격/ 방무 50%";
            break;
        case 3:
            rep = "하단 참조";
            break;
        case 4:
            rep = "범위 내에 적이 없을 경우 전방 300 만큼 순간 이동";
            break;
        case 5:
            rep = "자신이 직접 공격하는 스킬 적중 시 HP 1% 회복";
            break;
        case 6:
            rep = "소환수 지속시간 5% 증가";
            break;
        case 7:
            rep = "전방으로 일정 거리 점프";
            break;
        case 8:
            rep = "방어력 500, 최대 HP 20%, 최대 MP 20% 증가";
            break;
        case 9:
            rep = "8명의 적을 앞으로 끌어내리면서 100%의 데미지로 4번 공격";
            break;
        case 10:
            rep = "8명의 적을 앞으로 끌고 오면서 110%의 데미지로 4번 공격";
            break;
        case 11:
            rep = "후방으로 일정 거리 이동";
            break;
        case 12:
            rep = "공격 속도 1단계, 이동속도 20 증가";
            break;
        case 13:
            rep = "하단 참조";
            break;
        case 14:
            rep = "공격시 10% 확률로 여우령 1마리 소환";
            break;
        case 15:
            rep = "6명의 적을 앞으로 모으며 160%의 데미지로 4번 공격";
            break;
        case 16:
            rep = "최대 10명의 적을 175% 데미지로 5회 공격";
            break;
        case 17:
            rep = "10초 동안 속박의 영역 생성/ 700%로 3번 공격 받음";
            break;
        case 18:
            rep = "영구적으로 데미지 20%, 공격력 20 증가";
            break;
        case 19:
            rep = "방어력 1500, 상태 이상 내성 40";
            break;
        case 20:
            rep = "죽음에 이르는 공격을 받을 때 죽지 않음/ 쿨 1800초";
            break;
        case 21:
            rep = "공격시 10%확률 15초 동안 받는 데미지가 20% 증폭";
            break;
        case 22:
            rep = "하단 참조";
            break;
        case 23:
            rep = "최대 3명의 적을 265%의 데미지로 12번 공격";
            break;
        case 24:
            rep = "하단 참조";
            break;
        case 25:
            rep = "하단 참조";
            break;
        case 26:
            rep = "30초간 지속 수호의정령 3마리 소환, 디버프,피격뎀 무효화";
            break;
        case 27:
            rep = "공격시 25% 확률로 불여우령 1마리 소환";
            break;
        case 28:
            rep = "적의 방어율 30% 무시";
            break;
        case 29:
            rep = "HP가 50% 이하인 적에 대한 크확 75%, 크뎀 25% 증가";
            break;
        case 30:
            rep = "하단 참조";
            break;
        case 31:
            rep = "15명의 적에게 700%의 데미지로 1번 공격/ 쿨120초";
            break;
        case 32:
            rep = "";
            break;
    }
    return rep;
};
skew.getskilldesc2Eunwol = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "액티브 극딜 버프";
            break;
        case 1:
            rep = "장판 설치형 공격기";
            break;
        case 2:
            rep = "귀참 사용시 발동/ 재강화 대기시간 6초";
            break;
        case 3:
            rep = "키다운형 극딜기";
            break;
        case 4:
            rep = "가장 멀리 있는 적에게 순간 이동/ 위보다 아래 우선";
            break;
        case 5:
            rep = "스탠스 확률 100% 증가, 받는 피해량 30% 감소";
            break;
        case 6:
            rep = "소환수 판정 4차이하 스킬 없음";
            break;
        case 7:
            rep = "위 방향키와 함께 사용해 위 방향으로도 이동할 수 있다.";
            break;
        case 8:
            rep = "-";
            break;
        case 9:
            rep = "파쇄철조-반 : 60초간 최종데미지 10% 증폭/ 쿨1초";
            break;
        case 10:
            rep = "파쇄철조-반 : 60초간 최종데미지 10% 증폭/ 쿨1초";
            break;
        case 11:
            rep = "[패시브 효과 : 영구적으로 회피율 15% 증가]";
            break;
        case 12:
            rep = "-";
            break;
        case 13:
            rep = "온오프 스킬";
            break;
        case 14:
            rep = "1명의 적을 100%의 데미지로 1번 공격/ 2회 반복";
            break;
        case 15:
            rep = "파쇄철조-반 : 60초간 최종데미지 10% 증폭/ 쿨1초";
            break;
        case 16:
            rep = "재사용 대기시간: 10초/ 200레벨 이후 강화";
            break;
        case 17:
            rep = "바인드 / 재사용 대기시간 210초";
            break;
        case 18:
            rep = "-";
            break;
        case 19:
            rep = "모든 속성 내성 40% 증가";
            break;
        case 20:
            rep = "최대 15명의 적을 450% 데미지로 4번 공격하며 3초 동안 무적";
            break;
        case 21:
            rep = "명중치 60%, 회피치 40%만큼 추가 감소";
            break;
        case 22:
            rep = "다수 주력기";
            break;
        case 23:
            rep = "보스전 주력기";
            break;
        case 24:
            rep = "지속 공격형 디버프기";
            break;
        case 25:
            rep = "핵심 파티 유틸";
            break;
        case 26:
            rep = "디버프 걸리거나 피격시마다 수호의정령 1마리 소비/ 쿨60초";
            break;
        case 27:
            rep = "1명의 적을 200%의 데미지로 1번 공격/ 3회 반복";
            break;
        case 28:
            rep = "최종 데미지 15%, 보스 몬스터 공격 시 데미지 30% 증가";
            break;
        case 29:
            rep = "영구적으로 크리티컬 확률 25% 증가";
            break;
        case 30:
            rep = "200레벨에 강화 (하단에는 강화된 능력치)";
            break;
        case 31:
            rep = "키다운 동안 유지되며 최대 8초 동안 공격 지속";
            break;
        case 32:
            rep = "";
            break;
    }
    return rep;
};
skew.getskilldesc3Eunwol = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "모든 정령을 몸 속으로 받아들여 하나가 된다.\n\nMP 1000 소비, 사용 즉시 일부 스킬을 제외한 모든 스킬들의 재사용 대기시간 초기화\n60초 동안 공격 시 몸에 깃든 정령이 공격 스킬 1회 자동 발동, 키다운 스킬은 3초 동안 지속, 최종 데미지 20% 증가\n정령 공격 재발동 대기시간 2초\n정령 집속 중 1회에 한해 수호정령이 깃들어 은월이 직접 시전하는 소혼 장막의 최종 데미지 750% 증가\n\n재사용 대기시간 : 120초";
            break;
        case 1:
            rep = "정령이 소환되는 영역을 생성한다. 정령은 공격 반사의 적을 공격해도 피해를 입지 않는다.\n\nMP 1000 소비, 40초 동안 일정 주기마다 8초 동안 존재하는 정령 2마리를 소환하는 영역 생성, 정령은 최대 10마리까지 존재 가능\n\n정령은 영역 주위의 적을 찾아 660%의 데미지로 6번 공격한 후 적에게 달라붙어 소멸하면서 8초 동안 디버프를 부여\n디버프에 걸린 적을 공격할 때 크리티컬 확률 8%, 크리티컬 데미지 1% 증가\n디버프는 최대 10번까지 중첩 가능\n\n재사용 대기시간 90초";
            break;
        case 3:
            rep = "강령시킨 땅의 정령에 여우신의 힘을 더해 파괴적인 연타를 날린다.\n\n공격당 MP 60 소비, 키다운 동안 최대 10명의 적을 880%의 데미지로 5번 연속 공격, 최대 키다운 시간 1.3초\n키다운 종료 시 최대 10명의 적을 2090%의 데미지로 15번 공격하는 충격이 3번 발생하는 마무리 공격 발동, 마무리 공격 적중 시 여우령 15마리 추가 소환\n\n파쇄 연권 사용 중 최대 HP의 일정 비율로 피해를 입히는 공격을 포함한 피격 데미지 50% 감소, 공격 적중 시 여우령 100% 확률로 소환\n\n재사용 대기시간 : 90초";
            break;
        case 13:
            rep = "공격 시 일정 확률로 여우령을 소환한다. 소환된 정령은 주변에 있는 적을 추격하여 여러 번 공격한다. 여우령의 공격력과 소환 확률은 여우령 숙련과 불여우령 숙련을 따른다. 여우령은 공격 반사 상태의 적을 공격해도 피해를 입지 않으며 범위 내 최대 HP가 높은 보스 몬스터를 우선 추격 한다.";
            break;
        case 22:
            rep = "땅의 정령을 강령시켜, 전방에 있는 다수의 적을 공격한다. 스킬을 연속으로 사용하여 최대 4타까지 연속 공격이 가능하다.\n\n1타당 MP 20 소비\n[1타]: 최대 8명의 적을 300%의 데미지로 3번 공격\n[2타]: 최대 8명의 적을 310%의 데미지로 3번 공격\n[3타]: 최대 8명의 적을 320%의 데미지로 3번 공격\n[4타]: 최대 8명의 적을 350%의 데미지로 3번 공격, 공격당한 적은 100% 확률로 2초 동안 기절";
            break;
        case 24:
            rep = "죽음의 정령을 강령시켜, 전방에 있는 다수의 적을 공격한다. 공격 시 크리티컬로 적중하며 공격 받은 적은 죽음의 표식이 새겨져 지속적으로 피해를 입는다. 사혼 각인은 공격 반사 상태의 적을 공격해도 피해을 입지 않는다.\n죽음의 표식으로 인한 피해의 일정 비율만큼 자신의 HP가 회복된다.\n\nMP 100 소비, 최대 10명의 적을 700%의 데미지로 3번 크리티컬 공격\n[죽음의 표식]: 공격에 당한 적은 15초 동안 1초 간격으로 250%의 도트 데미지를 입으며, 도트 데미지를 입을 때 마다 피해량의 1%만큼 자신의 HP 회복\n\n재사용 대기시간: 60초";
            break;
        case 25:
            rep = "화염의 정령을 강령시켜, 전방에 있는 적들을 공격한다.\n공격에 당한 적은 영혼이 분리된다.\n공격을 받은 적은 90초 동안 분혼 격참에 저항하여 분혼 격참으로 공격 당하더라도 영혼이 분리되지 않는다.\n\nMP 100 소비, 최대 6명의 적을 2000%의 데미지로 1번 공격\n공격에 당한 적은 영혼 분리\n단, 고정형 몬스터는 영혼이 분리되지 않지만 받는 최종 데미지가 20% 증가\n[분리된 영혼]: 본체와 HP 공유, 받는 최종 데미지 80% 감소, 공격 당한 위치에 10초 동안 생성.\n분혼 격참으로 적에게 준 데미지에 따라 영혼 지속시간 최대 100% 증가\n본체 또는 분리된 영혼 처치 시 획득 경험치 100%만큼 추가 획득.\n\n재사용 대기시간: 180초";
            break;
        case 30:
            rep = "정령과 결속을 극대화시켜 일정 시간 동안 자신을 강화시키고, 은월이 랑을 그리워하는 마음에 반응하여 랑에게 받은 수호정령이 랑의 모습으로 나타나 도움을 준다. 은월의 공격이 적중할 때마다 일정 확률로 떨어지는 간을 습득하면 버프의 지속시간이 증가한다.\n\nMP 300 소비, 30초 동안에 정령 강령 시 데미지 35%, 공격력 20, 보스 몬스터 공격 시 데미지 20%, 공격 속도 1단계 증가, 적의 방어율 20% 무시, 랑의 모습을 한 수호정령 소환\n재사용 대기시간: 120초\n\n은월의 공격 적중 시 10%의 확률로 간 생성, 간 습득 시 정령 결속 극대화의 지속시간 4초 증가, 정령 결속 극대화의 재사용 대기시간을 초과하여 증가하지 않음.\n소환된 수호정령은 스스로의 판단으로 아래의 스킬 시전\n\n간간 수월래 : 최대 6명의 적을 275%의 데미지로 3번 공격, 재사용 대기시간 3초\n소혼 장막 : 최대 10명의 적을 150%의 데미지로 4.8초 동안 지속 공격, 수호정령의 소혼 장막보다 먼저 시전한 소혼 장막에도 적용, 재사용 대기시간 60초\n소혼 결계 : 은월의 소혼 결계로 인한 수호의 정령이 최대치가 아닐 경우 소혼 결계 재시전, 재사용 대기시간 100초";
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
skew.getskillimage1Eunwol = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "https://i.imgur.com/fOBy2WO.png";
            break;
        case 1:
            rep = "https://i.imgur.com/b1A2ztH.png";
            break;
        case 2:
            rep = "https://i.imgur.com/hslLuFJ.png";
            break;
        case 3:
            rep = "https://i.imgur.com/tLDrrLf.png";
            break;
        case 4:
            rep = "https://i.imgur.com/eNkySKV.png";
            break;
        case 5:
            rep = "";
            break;
        case 6:
            rep = "";
            break;
        case 7:
            rep = "https://i.imgur.com/pdqv98U.png";
            break;
        case 8:
            rep = "";
            break;
        case 9:
            rep = "https://i.imgur.com/ORfYbeW.png";
            break;
        case 10:
            rep = "https://i.imgur.com/rcjsTpE.png";
            break;
        case 11:
            rep = "https://i.imgur.com/aq2nNuN.png";
            break;
        case 12:
            rep = "";
            break;
        case 13:
            rep = "";
            break;
        case 14:
            rep = "https://i.imgur.com/a29IQcw.png";
            break;
        case 15:
            rep = "https://i.imgur.com/h0iUaqK.png";
            break;
        case 16:
            rep = "https://i.imgur.com/HmBtt2m.png";
            break;
        case 17:
            rep = "https://i.imgur.com/JjUJepa.png";
            break;
        case 18:
            rep = "";
            break;
        case 19:
            rep = "";
            break;
        case 20:
            rep = "https://i.imgur.com/J4v39WV.png";
            break;
        case 21:
            rep = "https://i.imgur.com/whKnNwH.png";
            break;
        case 22:
            rep = "https://i.imgur.com/AAWtC5T.png";
            break;
        case 23:
            rep = "https://i.imgur.com/ouYuIX9.png";
            break;
        case 24:
            rep = "https://i.imgur.com/nOSHiuu.png";
            break;
        case 25:
            rep = "https://i.imgur.com/aUFcQ83.png";
            break;
        case 26:
            rep = "https://i.imgur.com/n4YbfU0.png";
            break;
        case 27:
            rep = "https://i.imgur.com/QcM0hK8.png";
            break;
        case 28:
            rep = "";
            break;
        case 29:
            rep = "";
            break;
        case 30:
            rep = "https://i.imgur.com/jNoxOqK.png";
            break;
        case 31:
            rep = "https://i.imgur.com/CvKdXLm.png";
            break;
        case 32:
            rep = "";
            break;
    }
    return rep;
};
skew.getskillimage2Eunwol = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "https://i.imgur.com/N4RjlzM.png";
            break;
        case 1:
            rep = "https://i.imgur.com/jeNgQQX.png";
            break;
        case 2:
            rep = "https://i.imgur.com/Dy0Iaj7.png";
            break;
        case 3:
            rep = "https://i.imgur.com/cjkcTKD.png";
            break;
        case 4:
            rep = "https://i.imgur.com/DRqBWKd.png";
            break;
        case 5:
            rep = "https://i.imgur.com/g7Qj5dl.png";
            break;
        case 6:
            rep = "https://i.imgur.com/76RFuje.png";
            break;
        case 7:
            rep = "https://i.imgur.com/vAcNNJ8.png";
            break;
        case 8:
            rep = "https://i.imgur.com/HGpcGEg.png";
            break;
        case 9:
            rep = "https://i.imgur.com/9uWHdY9.png";
            break;
        case 10:
            rep = "https://i.imgur.com/p6e2zES.png";
            break;
        case 11:
            rep = "https://i.imgur.com/crPIvFB.png";
            break;
        case 12:
            rep = "https://i.imgur.com/PPzIEGp.png";
            break;
        case 13:
            rep = "https://i.imgur.com/Gw1MMIW.png";
            break;
        case 14:
            rep = "https://i.imgur.com/d4UliKa.png";
            break;
        case 15:
            rep = "https://i.imgur.com/JOSRovg.png";
            break;
        case 16:
            rep = "https://i.imgur.com/55RcBbz.png";
            break;
        case 17:
            rep = "https://i.imgur.com/s9K7SF7.png";
            break;
        case 18:
            rep = "https://i.imgur.com/4kQAK9Y.png";
            break;
        case 19:
            rep = "https://i.imgur.com/khDid4n.png";
            break;
        case 20:
            rep = "https://i.imgur.com/Ku8imYU.png";
            break;
        case 21:
            rep = "https://i.imgur.com/9CrXP1E.png";
            break;
        case 22:
            rep = "https://i.imgur.com/X3RMUdy.png";
            break;
        case 23:
            rep = "https://i.imgur.com/yi56wGT.png";
            break;
        case 24:
            rep = "https://i.imgur.com/Qu4elEK.png";
            break;
        case 25:
            rep = "https://i.imgur.com/42m3Tuj.png";
            break;
        case 26:
            rep = "https://i.imgur.com/uZAEeSk.png";
            break;
        case 27:
            rep = "https://i.imgur.com/IcYjFo3.png";
            break;
        case 28:
            rep = "https://i.imgur.com/cqowU2i.png";
            break;
        case 29:
            rep = "https://i.imgur.com/gEdq2Xk.png";
            break;
        case 30:
            rep = "https://i.imgur.com/Weeh86X.png";
            break;
        case 31:
            rep = "https://i.imgur.com/irRXNMe.png";
            break;
        case 32:
            rep = "";
            break;
    }
    return rep;
};

module.exports = skew;