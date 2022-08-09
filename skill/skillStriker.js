const sks = {};

sks.getskillStriker = function (skillname){
    var sret = -1;
    switch(skillname){
        case "신뇌합일":
        case "신뇌":
        case "신":
            sret = 0;
            break;
        case "교아탄":
        case "교아":
        case "교":
            sret = 1;
            break;
        case "뇌신창격":
        case "뇌신":
        case "뇌":
            sret = 2;
            break;
        case "창뇌연격":
        case "창뇌":
        case "창":
            sret = 3;
            break;
        case "섬광":
        case "순간이동":
        case "축지":
            sret = 4;
            break;
        case "엘리멘트 : 라이트닝":
        case "엘리멘트:라이트닝":
        case "엘리멘트 라이트닝":
        case "엘리멘트라이트닝":
        case "엘리멘트":
        case "라이트닝":
            sret = 5;
            break;
        case "뇌인":
        case "뇌전버프":
        case "뇌전1":
            sret = 6;
            break;
        case "회축":
        case "회":
            sret = 7;
            break;
        case "파도":
        case "파":
            sret = 8;
            break;
        case "해파":
        case "공굴리기":
            sret = 9;
            break;
        case "단련":
            sret = 10;
            break;
        case "뇌백":
        case "뇌전2":
            sret = 11;
            break;
        case "승천":
        case "승":
            sret = 12;
            break;
        case "뇌성":
            sret = 13;
            break;
        case "질풍":
        case "질":
            sret = 14;
            break;
        case "와류":
        case "와":
            sret = 15;
            break;
        case "극갑":
            sret = 16;
            break;
        case "연쇄":
            sret = 17;
            break;
        case "뇌제":
        case "뇌전3":
            sret = 18;
            break;
        case "섬멸":
        case "섬":
        case "상어":
            sret = 19;
            break;
        case "벽력":
        case "벽":
            sret = 20;
            break;
        case "태풍":
        case "태":
            sret = 21;
            break;
        case "축뢰":
            sret = 22;
            break;
        case "자극":
            sret = 23;
            break;
        case "뇌신":
        case "뇌전4":
            sret = 24;
            break;
        case "천지개벽":
        case "천지":
        case "개벽":
        case "천개":
            sret = 25;
            break;
        case "해신강림":
        case "해신":
        case "해강":
        case "강림":
            sret = 26;
            break;
        case "":
            sret = 27;
            break;
    }
    return sret;
};
sks.getskillnameStriker = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "신뇌합일";
            break;
        case 1:
            rep = "교아탄";
            break;
        case 2:
            rep = "뇌신창격";
            break;
        case 3:
            rep = "창뇌연격";
            break;
        case 4:
            rep = "섬광";
            break;
        case 5:
            rep = "엘리멘트 : 라이트닝";
            break;
        case 6:
            rep = "뇌인";
            break;
        case 7:
            rep = "회축";
            break;
        case 8:
            rep = "파도";
            break;
        case 9:
            rep = "해파";
            break;
        case 10:
            rep = "단련";
            break;
        case 11:
            rep = "뇌백";
            break;
        case 12:
            rep = "승천";
            break;
        case 13:
            rep = "뇌성";
            break;
        case 14:
            rep = "질풍";
            break;
        case 15:
            rep = "와류";
            break;
        case 16:
            rep = "극갑";
            break;
        case 17:
            rep = "연쇄";
            break;
        case 18:
            rep = "뇌제";
            break;
        case 19:
            rep = "섬멸";
            break;
        case 20:
            rep = "벽력";
            break;
        case 21:
            rep = "태풍";
            break;
        case 22:
            rep = "축뢰";
            break;
        case 23:
            rep = "자극";
            break;
        case 24:
            rep = "뇌신";
            break;
        case 25:
            rep = "천지개벽";
            break;
        case 26:
            rep = "해신강림";
            break;
        case 27:
            rep = "";
            break;
    }
    return rep;
};
sks.getskilldesc1Striker = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "하단 참조";
            break;
        case 1:
            rep = "뇌전버프 2개소비/ 15명,2200%,7번 공격 상어 생성";
            break;
        case 2:
            rep = "연계 8번 적중후 다음공격시 뇌신의창 소환/ 8명,330%,6번 공격";
            break;
        case 3:
            rep = "하단 참조";
            break;
        case 4:
            rep = "최대 4명의 적을 310%의 데미지로 1번 공격";
            break;
        case 5:
            rep = "하단 참조";
            break;
        case 6:
            rep = "하단 참조";
            break;
        case 7:
            rep = "최대 6명의 적을 155%의 데미지로 4번 공격";
            break;
        case 8:
            rep = "하단 참조";
            break;
        case 9:
            rep = "하단 참조";
            break;
        case 10:
            rep = "힘 60 증가, 크리티컬 확률 10% 증가";
            break;
        case 11:
            rep = "하단 참조";
            break;
        case 12:
            rep = "최대 6명의 적을 225%의 데미지로 5번 공격";
            break;
        case 13:
            rep = "최대 6명의 적을 170%의 데미지로 4번 공격";
            break;
        case 14:
            rep = "하단 참조";
            break;
        case 15:
            rep = "상태 이상 내성 30";
            break;
        case 16:
            rep = "데미지 5%, 크리티컬 확률 10% 증가";
            break;
        case 17:
            rep = "연계 공격 적중 시 30초 동안 최종 데미지 6% 증가";
            break;
        case 18:
            rep = "하단 참조";
            break;
        case 19:
            rep = "최대 1명의 적을 335%의 데미지로 7번 공격";
            break;
        case 20:
            rep = "최대 8명의 적을 320%의 데미지로 5번 공격";
            break;
        case 21:
            rep = "하단 참조";
            break;
        case 22:
            rep = "모든 공격에 최종 데미지의 70%로 추가 타격 발생";
            break;
        case 23:
            rep = "최대 HP 20%, 회피율 20%";
            break;
        case 24:
            rep = "하단 참조";
            break;
        case 25:
            rep = "하단 참조";
            break;
        case 26:
            rep = "최대 15명의 적을 860%의 데미지로 7번 공격";
            break;
        case 27:
            rep = "";
            break;
    }
    return rep;
};
sks.getskilldesc2Striker = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "보스 판정을 받는 적에게는 패시브 효과가 발동되지 않는다";
            break;
        case 1:
            rep = "쿨 8초";
            break;
        case 2:
            rep = "일정시간마다 8명,440%,7번 전격 4번 발동/ 쿨7초";
            break;
        case 3:
            rep = "공중에 떠오르는 동작도 있지만, 실제로는 체공 판정을 받지 않는다";
            break;
        case 4:
            rep = "범위 내에 적이 없을 경우 전방 300만큼 순간 이동";
            break;
        case 5:
            rep = "온오프 스킬";
            break;
        case 6:
            rep = "더블 점프 이펙트 변경";
            break;
        case 7:
            rep = "뇌성과 자기 자신을 제외한 모든 스킬과 연계 가능하다.";
            break;
        case 8:
            rep = "밀격 캔슬기";
            break;
        case 9:
            rep = "[연쇄 스킬]";
            break;
        case 10:
            rep = "크리티컬 데미지 5% 증가";
            break;
        case 11:
            rep = "뇌전버프 2차 강화";
            break;
        case 12:
            rep = "파도와 자기 자신을 제외한 모든 스킬로 연계 가능하다.";
            break;
        case 13:
            rep = "공중에서 파도와 연계하여 시전 동작을 취소할 수 없다.";
            break;
        case 14:
            rep = "[연쇄 스킬]";
            break;
        case 15:
            rep = "모든 속성 내성 30% 증가";
            break;
        case 16:
            rep = "피격 데미지 10% 감소, 스탠스 40% 증가";
            break;
        case 17:
            rep = "연쇄는 최대 3번/ 연쇄에 의한 최종 데미지는 합 적용";
            break;
        case 18:
            rep = "뇌전버프 3차 강화";
            break;
        case 19:
            rep = "뇌성과 자기 자신을 제외한 모든 스킬과 연계 가능";
            break;
        case 20:
            rep = "뇌성과 자기 자신을 제외한 모든 스킬과 연계 가능";
            break;
        case 21:
            rep = "[연쇄 스킬] / 질풍 강화 패시브";
            break;
        case 22:
            rep = "온오프 스킬";
            break;
        case 23:
            rep = "스탠스 60% 증가, 피격 데미지 20% 감소";
            break;
        case 24:
            rep = "뇌전버프 4차 강화";
            break;
        case 25:
            rep = "극딜용 액티브 버프";
            break;
        case 26:
            rep = "시전 동작 중 무적 / 쿨 45초";
            break;
        case 27:
            rep = "";
            break;
    }
    return rep;
};
sks.getskilldesc3Striker = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "MP 900 소비, 45초 동안 최종 데미지 10% 증가, 공격 시 650% 데미지로 6번 공격하고 최대 5명까지 전이되는 번개 발동\n\n전이될 때마다 피해 점차 감소, 주변의 적 숫자에 따라 최대 4개까지 동시에 번개 발동 가능\n발동되는 번개가 1개일 경우 880%로 7번 공격하는 강력한 번개 발동\n번개의 재발동 대기시간 3초\n\n패시브 효과 : 신뇌합일의 재사용 대기시간 동안 공격 시 주변에 일반 몬스터가 있다면 번개 1개가 발동, 재발동 대기시간 6초, 액티브 효과와 패시브 효과는 동시에 발동되지 않음\n\n재사용 대기시간 : 105초";
            break;
        case 3:
            rep = "번개와 함께 끝없는 연계 공격을 구사한다. 스킬을 계속 사용하여 연계 공격을 발동할 수 있고 창뇌연격 중 뇌성을 제외한 모든 스킬과 연계 가능하다. 번개는 공격 반사 상태의 적을 공격해도 피해를 입지 않는다.\n\nMP 1000 소비, 60초 동안 최대 12번의 연계 공격 가능\n\n연계 공격 : 최대 4명의 적을 1100%의 데미지로 5번 공격, 적중 시 최대 3명의 적을 1210%의 데미지로 4번 공격하는 번개 최대 3개 발동, 번개는 서로 다른 곳에 발동\n\n마지막 연계는 최대 7명의 적을 1540%의 데미지로 7번 공격, 적중 시 최대 8명의 적을 1650%의 데미지로 6번 공격하는 거대 번개 3번 발동\n\n재사용 대기시간 : 120초";
            break;
        case 5:
            rep = "청백색을 띈 번개의 엘리멘트를 소환하여 그 힘을 얻는다.\n\n공격 적중 시 10% 확률로 30초 동안 뇌전 버프 1개 발생\n스킬 연계 시 같은 확률로 뇌전 버프 2개발생\n뇌전 버프는 최대 2회 누적 가능\n뇌전 버프 1개당 몬스터의 방어율 5% 무시\n뇌전 버프를 소모하면 10초 동안 소모한 뇌전 버프가 증가시키는 능력치와 동일한 양만큼 능력치를 증가시키는 보정 버프 적용\n보정 버프 지속 중 뇌전 버프 획득 시 보정 버프의 중첩 수 감소\n뇌전 버프와 보정 버프에 의해 증가하는 능력치는 모두 합 적용";
            break;
        case 6:
            rep = "한 줄기 번개의 힘을 다루게 되어 몸이 날렵해진다. 번개의 힘이 엘리멘탈 쉬프트에 깃들어 모습이 변화한다.\n\n뇌전 버프 발생 확률 20%만큼 증가, 최대 누적 횟수 1회 증가\n이동 속도 40, 점프력 20, 최대 이동속도 20 증가";
            break;
        case 8:
            rep = "도도하게 흐르는 바다와 같이 전진하면서 범위 내 몬스터들을 자신의 앞으로 밀며 쓸어간다. 일부 몬스터는 저항하여 밀리지 않는다.\n전진 중 아래 방향키와 함께 스킬을 사용하여 정지할 수 있고 뇌성과 자기 자신을 제외한 모든 스킬과 연계 가능하다. 파도는 먼저 사용한 스킬을 취소하고 발동되며 일부 스킬에서는 다른 스킬보다 더 빠르게 파도로 연계할 수 있다. 파도는 뇌전 버프를 발동시키지 않는다.\n커스텀 커맨드를 사용하면 방향키 입력없이 스킬만 재사용 해 정지할 수 있다.\n\nMP 20 소비, 최대 8명의 적을 255%의 데미지로 2번 공격하며 전방으로 이동";
            break;
        case 9:
            rep = "스킬을 연계하면 번개의 힘이 깃들어 적을 향해 흐르는 파도가 생성된다. 해파는 생성될 때 스트라이커가 보는 방향으로 흐르며 일정 범위 내에서 공격할 수 있는 적이 더 많은 방향을 찾아 흐른다.\n흐르며 충돌하는 적을 공격하며 공격 반사 상태의 적을 공격해도 피해를 입지 않는다.\n\nMP 50 소비, 스킬 연계 시 재발동 대기시간이 아니라면 생성\n일정 방향으로 흐르며 최대 5명의 적을 190%의 데미지로 4번 공격\n1800만큼 이동하거나 공격한 적의 수가 20명 도달 시 소멸\n한 명의 적에게는 최대 1번까지만 공격\n\n재발동 대기시간 12초";
            break;
        case 11:
            rep = "번개의 힘을 보다 능숙하게 사용하여 한 단계 발전한다.\n\n공격력 20 증가\n뇌전 버프 발생 확률 20%만큼 증가, 최대 누적 횟수 1회 증가\n뇌전 버프 1개 당 데미지 2% 증가, 뇌전 버프로 증가하는 데미지는 합 적용";
            break;
        case 14:
            rep = "끊임 없는 연계 공격을 통해 축적한 힘을 한 곳에 모아 일격에 방출한다. 뇌성과 자기 자신을 제외한 모든 스킬과 연계 가능하다. 공중에서 파도와 연계하여 시전 동작을 취소할 수 없다.\n\nMP 65 소비, 뇌전 버프 3개 이상 누적 시 사용 가능\n누적한 뇌전 버프를 모두 사용하여 최대 6명의 적을 381%의 데미지로 3번 공격, 뇌전 버프가 최대로 누적됐을 때 사용 시 데미지 40%p 증가\n사용한 뇌전 버프 1개 당 데미지 2% 증가 버프가 60초 동안 지속\n단, 해당 스킬은 뇌전 버프를 발동시키지 않음\n\n재사용 대기시간 20초";
            break;
        case 18:
            rep = "번개의 힘을 자신의 지배 하에 두어 그 힘을 보다 적극적으로 활용한다.\n\n공격력 30 증가, 크리티컬 데미지 10% 증가\n뇌전 버프 발생 확률 30%만큼 증가, 최대 누적 횟수 1회 증가\n뇌전 버프 1개 당 데미지 3%로 증가, 뇌전 버프로 증가하는 데미지는 합 적용";
            break;
        case 21:
            rep = "질풍을 강화하여 연계 공격 시 축적되는 힘을 극한으로 밀어붙여 모든 것을 휘몰아치는 강력한 돌개바람으로 승화시킨다.\n뇌성과 자기 자신을 제외한 모든 스킬과 연계 가능하며 파도로 연계 시 더 빠르게 연계할 수 있다. 공중에서 파도와 연계하여 시전 동작을 취소할 수 없다.\n\nMP 49 소비, 뇌전 버프 2개 이상 누적 시 사용 가능\n누적한 뇌전 버프를 모두 사용하여 최대 8명의 적을 320%의 데미지로 5번 공격, 뇌전 버프가 최대로 누적됐을 때 사용 시 데미지 100%p 증가\n사용한 뇌전 버프 1개 당 데미지 3% 증가 버프가 90초 동안 지속\n단, 해당 스킬은 뇌전 버프를 발동시키지 않음\n\n재사용 대기시간 12초";
            break;
        case 24:
            rep = "번개의 힘을 통달하여 그 안에 담긴 진수를 체득한다. 컴뱃 오더스가 적용되지 않는다.\n\n뇌전 버프 발생 확률 30%만큼 증가, 최대 1회 누적\n뇌전 버프 1개 당 몬스터 방어율 무시 9%로 증가\n크리티컬 확률 10%, 크리티컬 데미지 15% 증가";
            break;
        case 25:
            rep = "태초에 하늘과 땅을 나눴던 거대한 번개가 내리꽂혀 근원적인 힘을 선사하여 뇌전 버프와 연쇄 스킬의 위력이 강화된다.\n\nMP 200 소비, 30초 동안 지속\n지속 중 스킬의 MP 소비 없음\n뇌전 버프 1개 당 데미지 증가량 4%, 몬스터 방어율 무시 10%로 증가\n연쇄 스킬 사용 시 필요 뇌전 버프 무시 및 뇌전 버프 소비 없음, 질풍의 재사용 대기시간 미적용\n지속 중 스킬 연계 시 연쇄 스킬의 재사용 대기시간 감소\n해파 : 연계 시 1.5초씩 최대 9초까지 감소\n교아탄 : 연계 시 0.5초씩 최대 2초까지 감소\n뇌신창격 : 연계 시 0.5초씩 최대 3초까지 감소\n\n재사용 대기시간 120초";
            break;
    }
    return rep;
};
sks.getskillimage1Striker = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "https://i.imgur.com/noNOKJU.png";
            break;
        case 1:
            rep = "https://i.imgur.com/bBlOvci.png";
            break;
        case 2:
            rep = "https://i.imgur.com/4IsAdcr.png";
            break;
        case 3:
            rep = "https://i.imgur.com/CIpJ6iI.png";
            break;
        case 4:
            rep = "https://i.imgur.com/usP1ZqI.png";
            break;
        case 5:
            rep = "https://i.imgur.com/I3f1fPp.png";
            break;
        case 6:
            rep = "https://i.imgur.com/0o3oaAC.png";
            break;
        case 7:
            rep = "https://i.imgur.com/0NU2cVo.png";
            break;
        case 8:
            rep = "https://i.imgur.com/mq0NJNv.png";
            break;
        case 9:
            rep = "https://i.imgur.com/chjHX5t.png";
            break;
        case 10:
            rep = "";
            break;
        case 11:
            rep = "";
            break;
        case 12:
            rep = "https://i.imgur.com/8DvMMjy.png";
            break;
        case 13:
            rep = "https://i.imgur.com/nUfENyC.png";
            break;
        case 14:
            rep = "https://i.imgur.com/vn9zNlG.png";
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
            rep = "https://i.imgur.com/vLgDwjq.png";
            break;
        case 20:
            rep = "https://i.imgur.com/X2Fowqa.png";
            break;
        case 21:
            rep = "https://i.imgur.com/4B0tbL0.png";
            break;
        case 22:
            rep = "https://i.imgur.com/7pbDoU1.png";
            break;
        case 23:
            rep = "";
            break;
        case 24:
            rep = "";
            break;
        case 25:
            rep = "https://i.imgur.com/9vSlHmP.png";
            break;
        case 26:
            rep = "https://i.imgur.com/O0XAH43.png";
            break;
        case 27:
            rep = "";
            break;
    }
    return rep;
};
sks.getskillimage2Striker = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "https://i.imgur.com/pzeBEs1.png";
            break;
        case 1:
            rep = "https://i.imgur.com/WfA5gjR.png";
            break;
        case 2:
            rep = "https://i.imgur.com/yOzXLD8.png";
            break;
        case 3:
            rep = "https://i.imgur.com/IGiwdTw.png";
            break;
        case 4:
            rep = "https://i.imgur.com/RCPQ0qk.png";
            break;
        case 5:
            rep = "https://i.imgur.com/1SXI5vy.png";
            break;
        case 6:
            rep = "https://i.imgur.com/5A9Aw5F.png";
            break;
        case 7:
            rep = "https://i.imgur.com/qbyMCpK.png";
            break;
        case 8:
            rep = "https://i.imgur.com/1dtZ79N.png";
            break;
        case 9:
            rep = "https://i.imgur.com/baSIZue.png";
            break;
        case 10:
            rep = "https://i.imgur.com/UOr39PA.png";
            break;
        case 11:
            rep = "https://i.imgur.com/8JoDstb.png";
            break;
        case 12:
            rep = "https://i.imgur.com/FSnQQVn.png";
            break;
        case 13:
            rep = "https://i.imgur.com/WZ8A4TE.png";
            break;
        case 14:
            rep = "https://i.imgur.com/p72uoHH.png";
            break;
        case 15:
            rep = "https://i.imgur.com/LJCSxwQ.png";
            break;
        case 16:
            rep = "https://i.imgur.com/S7X8ftE.png";
            break;
        case 17:
            rep = "https://i.imgur.com/ZZS0PDq.png";
            break;
        case 18:
            rep = "https://i.imgur.com/l8Bbt9m.png";
            break;
        case 19:
            rep = "https://i.imgur.com/zNViXIn.png";
            break;
        case 20:
            rep = "https://i.imgur.com/ntw0s3X.png";
            break;
        case 21:
            rep = "https://i.imgur.com/WibuQmG.png";
            break;
        case 22:
            rep = "https://i.imgur.com/B2N495B.png";
            break;
        case 23:
            rep = "https://i.imgur.com/1Uv3YCo.png";
            break;
        case 24:
            rep = "https://i.imgur.com/C4U4phI.png";
            break;
        case 25:
            rep = "https://i.imgur.com/fJgjaKd.png";
            break;
        case 26:
            rep = "https://i.imgur.com/3nCi28X.png";
            break;
        case 27:
            rep = "";
            break;
    }
    return rep;
};

module.exports = sks;