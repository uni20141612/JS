const sknw = {};

sknw.getskillNightwalker = function (skillname){
    var nwret = -1;
    switch(skillname){
        case "쉐도우 스피어":
        case "쉐도우스피어":
        case "스피어":
        case "쉐스":
            nwret = 0;
            break;
        case "쉐도우 서번트 익스텐드":
        case "쉐도우서번트익스텐드":
        case "서번트 익스텐드":
        case "서번트익스텐드":
        case "서번트":
        case "익스텐드":
        case "쉐서익":
            nwret = 1;
            break;
        case "쉐도우 바이트":
        case "쉐도우바이트":
        case "바이트":
        case "쉐바":
            nwret = 2;
            break;
        case "래피드 스로우":
        case "래피드스로우":
        case "래피드":
        case "래스":
            nwret = 3;
            break;
        case "":
            nwret = 4;
            break;
        case "":
            nwret = 5;
            break;
        case "":
            nwret = 6;
            break;
        case "":
            nwret = 7;
            break;
        case "":
            nwret = 8;
            break;
        case "":
            nwret = 9;
            break;
        case "":
            nwret = 10;
            break;
        case "":
            nwret = 11;
            break;
        case "":
            nwret = 12;
            break;
        case "":
            nwret = 13;
            break;
        case "":
            nwret = 14;
            break;
        case "":
            nwret = 15;
            break;
        case "":
            nwret = 16;
            break;
        case "":
            nwret = 17;
            break;
        case "":
            nwret = 18;
            break;
        case "":
            nwret = 19;
            break;
        case "":
            nwret = 20;
            break;
        case "":
            nwret = 21;
            break;
        case "":
            nwret = 22;
            break;
        case "":
            nwret = 23;
            break;
        case "":
            nwret = 24;
            break;
        case "":
            nwret = 25;
            break;
        case "":
            nwret = 26;
            break;
        case "":
            nwret = 27;
            break;
        case "":
            nwret = 28;
            break;
        case "":
            nwret = 29;
            break;
        case "":
            nwret = 30;
            break;
        case "":
            nwret = 31;
            break;
        case "":
            nwret = 32;
            break;
    }
    return nwret;
};
sknw.getskillnameNightwalker = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "쉐도우 스피어";
            break;
        case 1:
            rep = "쉐도우 서번트 익스텐드";
            break;
        case 2:
            rep = "쉐도우 바이트";
            break;
        case 3:
            rep = "래피드 스로우";
            break;
        case 4:
            rep = "엘리멘트 : 다크니스";
            break;
        case 5:
            rep = "쉐도우 배트";
            break;
        case 6:
            rep = "쉐도우 점프";
            break;
        case 7:
            rep = "다크 사이트";
            break;
        case 8:
            rep = "래피드 이베이젼";
            break;
        case 9:
            rep = "헤이스트";
            break;
        case 10:
            rep = "스타더스트";
            break;
        case 11:
            rep = "배트 커뮤니온";
            break;
        case 12:
            rep = "다크니스 어뎁팅";
            break;
        case 13:
            rep = "쉐도우 서번트";
            break;
        case 14:
            rep = "다크니스 어센션";
            break;
        case 15:
            rep = "쉐도우 모멘텀";
            break;
        case 16:
            rep = "배트 커뮤니온 II";
            break;
        case 17:
            rep = "다크니스 어뎁팅 II";
            break;
        case 18:
            rep = "스피릿 스로잉";
            break;
        case 19:
            rep = "래디컬 다크니스";
            break;
        case 20:
            rep = "아드레날린";
            break;
        case 21:
            rep = "퀸터플 스로우";
            break;
        case 22:
            rep = "다크니스 오멘";
            break;
        case 23:
            rep = "쉐도우 스티치";
            break;
        case 24:
            rep = "래버너스 배트";
            break;
        case 25:
            rep = "배트 커뮤니온 III";
            break;
        case 26:
            rep = "다크니스 어뎁팅 III";
            break;
        case 27:
            rep = "사이펀 바이탈리티";
            break;
        case 28:
            rep = "다크니스 블레싱";
            break;
        case 29:
            rep = "쉐도우 어시밀레이션";
            break;
        case 30:
            rep = "쉐도우 일루전";
            break;
        case 31:
            rep = "도미니언";
            break;
        case 32:
            rep = "";
            break;
    }
    return rep;
};
sknw.getskilldesc1Nightwalker = function (skillcode){
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
            rep = "하단 참조";
            break;
        case 8:
            rep = "하단 참조";
            break;
        case 9:
            rep = "이동속도 40, 점프력 20";
            break;
        case 10:
            rep = "최대 6명의 적을 200%의 데미지로 3번 공격하는 수리검 투척";
            break;
        case 11:
            rep = "쉐도우 배트의 공격확률 20%, 최대 소환 제한 1";
            break;
        case 12:
            rep = "어둠의 표식이 새겨질 확률 5%, 최대 중첩 제한 1";
            break;
        case 13:
            rep = "하단 참조";
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
    }
    return rep;
};
sknw.getskilldesc2Nightwalker = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "보조 공격형";
            break;
        case 1:
            rep = "고정형 소환수 스킬";
            break;
        case 2:
            rep = "광법위 공격기";
            break;
        case 3:
            rep = "고정형 극딜기";
            break;
        case 4:
            rep = "온오프 스킬";
            break;
        case 5:
            rep = "사냥 주력기 / 온오프 스킬";
            break;
        case 6:
            rep = "트리플 점프 / 뚝떨 가능";
            break;
        case 7:
            rep = "-";
            break;
        case 8:
            rep = "후방 회피기";
            break;
        case 9:
            rep = "최대 이동속도 20, 회피율 15% 증가";
            break;
        case 10:
            rep = "폭발 시 최대 6명의 적을 200%의 데미지로 3번 공격";
            break;
        case 11:
            rep = "데미지 120%p, 튕기는 횟수 1회 증가";
            break;
        case 12:
            rep = "중첩당 도트 데미지 40%, 중첩당 방어율 무시 1% 증가";
            break;
        case 13:
            rep = "시간차로 따라함, 공격횟수 따로 카운트";
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
    }
    return rep;
};
sknw.getskilldesc3Nightwalker = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "땅에 스며든 그림자가 창으로 변하여 적을 찌른다. 공격 반사 상태의 적을 공격해도 피해를 입지 않고 마을에서는 그림자 창이 발동되지 않는다. 어둠 속성의 공격이다.\n\nMP 1000 소비, 87초 동안 쉐도우 스피어 및 소환수를 제외한 어둠 속성 공격 시 바닥에 그림자 조각 생성\n그림자 조각은 잠시 후 그림자 창으로 변해 최대 8명의 적에게 440%의 데미지로 2번 공격\n그림자 창이 발동될 때 주변에 다른 그림자 조각이 일정 수 이상 있다면 거대한 그림자 창으로 변해 최대 12명의 적을 880%의 데미지로 6번 공격, 거대 그림자 창 재발동 대기시간 3.9초\n\n쉐도우 스피어의 모든 공격은 일반 몬스터 공격 시 데미지 25% 증가\n\n재사용 대기시간 177초";
            break;
        case 1:
            rep = "한 장소에 고정되어 이동하지 않고 자신의 행동을 따라 하는 그림자를 소환한다.\n그림자는 주변에 있는 최대 HP가 가장 높은 보스 몬스터, 보스 몬스터가 없다면 최대 HP가 높은 몬스터가 있는 방향을 바라보게 된다. 따라하는 행동은 표창을 던지는 스킬로 제한되고 별도의 HP는 없으며 소환 시간이 지나면 사라진다.\n스킬을 다시 사용하여 그림자와 자리를 교체하거나 아래 방향키와 함께 스킬을 다시 사용하여 그림자를 현재 위치로 재소환 할 수 있다. 단, 나이트워커가 발판 위에 있을 때만 가능하다. 그림자를 불러오면 별도의 재사용 대기시간이 적용된다.\n그림자의 모든 공격은 어둠 속성으로 적용되며 공격 반사 상태의 적을 공격해도 피해를 입지 않고 어둠의 표식, 쉐도우 배트, 래버너스 배트가 발동될 수 있다.\n\nMP 800 소비, 45초 동안 한 장소에 고정되어 표창을 던지는 스킬에 최종 데미지의 55%로 추가 타격을 하는 그림자 소환\n최대 3회까지 자리 교체 가능\n그림자 재소환 대기시간 1.5초\n\n재사용 대기시간 60초";
            break;
        case 2:
            rep = "적의 그림자를 조종해 스스로를 공격하게 하며 그림자에게 먹힌 적이 있다면 그 힘을 강탈하여 일정 시간 동안 최종 데미지가 증가하고 쉐도우 배트, 래버너스 배트가 소환 가능한 상태라면 적이 공격받은 위치에서 배트가 생성되어 즉시 적을 공격한다. 쉐도우 바이트에 의해 생성된 배트는 강화된 상태로 생성되지 않는다. 어둠 속성의 공격이다.\n\nMP 1500 소비, 최대 15명의 적을 880%의 데미지로 14번 공격, 보스 몬스터에게는 1320%의 데미지로 공격, 배트가 소환 가능한 상태라면 적이 공격받은 위치에서 쉐도우 배트 및 래버너스 배트 생성\n쉐도우 바이트로 쓰러뜨린 적이 있다면 20초 동안 1명 당 최종 데미지 2% 증가, 보스 몬스터를 공격했을 경우 최종 데미지 18% 증가, 쉐도우 바이트로 증가하는 최종 데미지는 최대 20%까지 적용\n\n재사용 대기시간 15초";
            break;
        case 3:
            rep = "[스로우]\n\n매우 빠른 속도로 표창을 수없이 던진다. 공중에서 사용 시 체공하며 던지며 래피드 스로우는 다크 사이트 중 사용해도 다크 사이트가 해제되지 않는다. 래피드 스로우에는 쉐도우 모멘텀 관성 효과가 적용되지 않는다. 각 표창은 쉐도우 배트 및 래버너스 배트의 표창 스킬 횟수에 최대 1회 반영된다. 어둠 속성의 공격이지만 연속 투척 공격에는 쉐도우 스피어에 의한 그림자 조각이 생성되지 않는 대신 더 높은 데미지를 준다\n\nMP 1000 소비, 최대 8명의 적을 1045%의 데미지로 5번 공격하는 그림자 표창을 1.8초 동안 연속 투척한 후 최대 10명의 적을 1870%의 데미지로 13번 공격하는 거대 그림자 표창으로 마무리\n사용 중 스킬을 연타하여 연속 투척 시간을 최대 3초까지 증가시킬 수 있음\n쉐도우 스피어 발동 중 연속 투척 공격의 데미지 290%p 증가\n\n재사용 대기시간 90초";
            break;
        case 4:
            rep = "어둠의 엘리멘트를 소환하여 그 힘을 얻는다.\n\n표창을 사용하는 스킬을 적에게 적중시키면 20% 확률로 최대 2회까지 중첩되는 어둠의 표식 생성, 표식이 새겨진 적은 5초 동안 중첩당 매 초 80%의 도트 데미지를 받고 해당 적을 나이트워커가 공격하면 중첩당 4%만큼 방어율 추가 무시";
            break;
        case 5:
            rep = "그림자로 이루어진 종복 쉐도우 배트를 소환한다. 쉐도우 배트는 표창을 사용하는 스킬로 공격할 때 일정 확률로 함께 공격한다. 어둠의 표식이 새겨진 적에게는 공격 확률이 2배가 되고 표식 중첩만큼 소환된 쉐도우 배트가 한 번에 공격하며, 이때 쉐도우 배트가 1마리 추가로 생성된다.\n쉐도우 배트는 공격 반사 상태의 적을 공격해도 피해를 입지 않는다.\n\n표창을 사용하는 스킬을 3번 적중시킬 때마다 60초 동안 유지되는 쉐도우 배트 1마리 소환, 최대 2마리까지 소환 가능\n표창을 사용하는 스킬로 공격 시 50% 확률로 날아가 대상에게 150%의 데미지로 공격 후 추가로 3명의 적에게 튕겨 같은 데미지를 입힌 후 소멸, 일반 몬스터 공격 시 데미지 35% 증가\n\n첫 데미지를 줄 때 최대 HP의 1% 회복";
            break;
        case 6:
            rep = "점프 중 사용하면 진행 방향으로 연속 두 번 점프한다. 점프키로도 사용할 수 있다. 추가로 스로우 계열 스킬의 마지막 공격을 점프키로 취소할 수 있게 된다. 다크 사이트를 배웠고 스로우 계열 스킬의 마지막 공격 중 점프키를 입력했다면 짧은 시간 자동으로 다크 사이트가 적용된다.\n\n커스텀 커맨드를 사용하면 점프 중 사용해도 이동하지 않을 수 있다. 커스텀 커맨드 사용시 좌우 방향키와 함께 사용하면 진행 방향으로 점프할 수 있다.\n\nMP 5 소비, 일정 거리 점프\n스로우 계열 스킬 사용 중 점프키 입력 시 2초 동안 다크 사이트 상태\n\n자동 발동되는 다크 사이트로 최대 HP의 일정 비율로 피해를 입히는 공격을 회피하였을 경우 다크 사이트의 남은 지속 시간이 최대치의 20% 만큼 감소";
            break;
        case 7:
            rep = "일정 시간 동안 그림자에 몸을 숨긴다. 다크 사이트 상태에서는 적에게 부딪히지 않지만 공격을 하면 해제된다. 단, 최대 HP의 일정 비율로 피해를 입히는 공격을 회피하였을 경우 다크 사이트가 해제되었을 때 회피한 횟수에 비례하여 재사용 대기시간이 적용된다. 쉐도우 점프를 사용해도 다크 사이트가 해제되지 않는다. 스킬 키를 한 번 더 눌러 다크 사이트 상태를 해제할 수 있다.\n\nMP 20 소비, 200초 동안 그림자에 몸을 숨김\n최대 HP의 일정 비율로 피해를 입히는 공격을 회피하였을 경우 다크 사이트가 해제되었을 때 회피한 횟수 당 재사용 대기시간 3초 적용, 최대 5번까지 중첩";
            break;
        case 8:
            rep = "후방으로 빠르게 이동한다.\n공중 및 스로우 계열 스킬의 마지막 공격 중에도 이동할 수 있고 이동 중에는 적의 어떠한 공격에도 밀려나지 않는다. 다크 사이트를 배웠고 스로우 스킬의 마지막 공격 중 사용했다면 짧은 시간 자동으로 다크 사이트가 적용된다.\n\nMP 7 소비, 후방으로 일정 거리 이동\n스로우 계열 스킬 사용 중 사용 시 2초 동안 다크 사이트 상태\n\n자동 발동되는 다크 사이트로 최대 HP의 일정 비율로 피해를 입히는 공격을 회피하였을 경우 다크 사이트의 남은 지속 시간이 최대치의 20% 만큼 감소";
            break;
        case 13:
            rep = "일정 시간 동안 자신의 행동을 시간차로 따라하는 그림자를 소환한다. 따라 하는 행동은 표창을 던지는 스킬과 이동스킬로 제한된다. 별도의 HP는 없으며 소환 시간이 지나면 사라진다. 그림자의 모든 공격은 어둠 속성으로 적용되며 공격 반사 상태의 적을 공격해도 피해를 입지 않고 어둠의 표식, 쉐도우 배트, 래버너스 배트가 발동될 수 있다.\n\nMP 65 소비, 180초 동안 표창을 던지는 스킬에 최종 데미지의 70%로 추가 타격을 하는 그림자 소환";
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
    }
    return rep;
};
sknw.getskillimage1Nightwalker = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "https://i.imgur.com/w7c4qGS.png";
            break;
        case 1:
            rep = "https://i.imgur.com/2ncDMlY.png";
            break;
        case 2:
            rep = "https://i.imgur.com/om2AYUF.png";
            break;
        case 3:
            rep = "https://i.imgur.com/hgTJtwk.png";
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
    }
    return rep;
};
sknw.getskillimage2Nightwalker = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "https://i.imgur.com/1Ag3TcO.png";
            break;
        case 1:
            rep = "https://i.imgur.com/yq74KR1.png";
            break;
        case 2:
            rep = "https://i.imgur.com/NRyKISN.png";
            break;
        case 3:
            rep = "https://i.imgur.com/AHvcbxj.png";
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
    }
    return rep;
};

module.exports = sknw;