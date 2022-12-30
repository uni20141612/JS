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
        case "엘리멘트 : 다크니스":
        case "엘리멘트:다크니스":
        case "엘리멘트 다크니스":
        case "엘리멘트다크니스":
        case "엘리멘트":
        case "다크니스":
            nwret = 4;
            break;
        case "쉐도우 배트":
        case "쉐도우배트":
        case "쉐배":
        case "배트":
            nwret = 5;
            break;
        case "쉐도우 점프":
        case "쉐도우점프":
        case "쉐점":
        case "덥점":
        case "윗점":
            nwret = 6;
            break;
        case "다크 사이트":
        case "다크사이트":
        case "닼사":
        case "닥사":
            nwret = 7;
            break;
        case "레피드 이베이젼":
        case "레피드 이베이전":
        case "레피드이베이젼":
        case "레피드이베이전":
        case "이베이젼":
        case "이베이전":
        case "후방이동":
            nwret = 8;
            break;
        case "헤이스트":
        case "헤이":
            nwret = 9;
            break;
        case "스타더스트":
        case "스타 더스트":
        case "더스트":
            nwret = 10;
            break;
        case "배트 커뮤니온":
        case "배트커뮤니온":
        case "커뮤니온":
            nwret = 11;
            break;
        case "다크니스 어뎁팅":
        case "다크니스어뎁팅":
        case "어뎁팅":
            nwret = 12;
            break;
        case "쉐도우 서번트":
        case "쉐도우서번트":
        case "쉐서":
        case "서번트":
        case "쉐파":
            nwret = 13;
            break;
        case "다크니스 어센션":
        case "다크니스어센션":
        case "어센션":
        case "부활":
        case "헤도":
            nwret = 14;
            break;
        case "쉐도우 모멘텀":
        case "쉐도우모멘텀":
        case "모멘텀":
            nwret = 15;
            break;
        case "배트 커뮤니온 II":
        case "배트커뮤니온 II":
        case "배트커뮤니온II":
        case "커뮤니온 II":
        case "커뮤니온II":
        case "배트 커뮤니온 2":
        case "배트커뮤니온 2":
        case "배트커뮤니온2":
        case "커뮤니온 2":
        case "커뮤니온2":
            nwret = 16;
            break;
        case "다크니스 어뎁팅 II":
        case "다크니스어뎁팅 II":
        case "다크니스어뎁팅II":
        case "어뎁팅 II":
        case "어뎁팅II":
        case "다크니스 어뎁팅 2":
        case "다크니스어뎁팅 2":
        case "다크니스어뎁팅2":
        case "어뎁팅 2":
        case "어뎁팅2":
            nwret = 17;
            break;
        case "스피릿 스로잉":
        case "스피릿스로잉":
        case "스스":
            nwret = 18;
            break;
        case "래디컬 다크니스":
        case "래디컬다크니스":
        case "래디컬":
            nwret = 19;
            break;
        case "아드레날린":
        case "아드":
            nwret = 20;
            break;
        case "퀸터플 스로우":
        case "퀸터플스로우":
        case "퀸터플":
        case "퀀터플 스로우":
        case "퀀터플스로우":
        case "퀀터플":
            nwret = 21;
            break;
        case "다크니스 오멘":
        case "다크니스오멘":
        case "다오":
        case "오멘":
            nwret = 22;
            break;
        case "쉐도우 스티치":
        case "쉐도우스티치":
        case "쉐스":
        case "스티치":
        case "바인드":
            nwret = 23;
            break;
        case "래버너스 배트":
        case "래버너스배트":
        case "보스배트":
            nwret = 24;
            break;
        case "배트 커뮤니온 III":
        case "배트커뮤니온 III":
        case "배트커뮤니온III":
        case "커뮤니온 III":
        case "커뮤니온III":
        case "배트 커뮤니온 3":
        case "배트커뮤니온 3":
        case "배트커뮤니온3":
        case "커뮤니온 3":
        case "커뮤니온3":
            nwret = 25;
            break;
        case "다크니스 어뎁팅 III":
        case "다크니스어뎁팅 III":
        case "다크니스어뎁팅III":
        case "어뎁팅 III":
        case "어뎁팅III":
        case "다크니스 어뎁팅 3":
        case "다크니스어뎁팅 3":
        case "다크니스어뎁팅3":
        case "어뎁팅 3":
        case "어뎁팅3":
            nwret = 26;
            break;
        case "사이펀 바이탈리티":
        case "사이펀바이탈리티":
        case "사바":
        case "사이펀":
        case "바이탈리티":
            nwret = 27;
            break;
        case "다크니스 블레싱":
        case "다크니스블레싱":
        case "블레싱":
            nwret = 28;
            break;
        case "쉐도우 어시밀레이션":
        case "쉐도우어시밀레이션":
        case "어시밀레이션":
            nwret = 29;
            break;
        case "쉐도우 일루전":
        case "쉐도우일루전":
        case "일루전":
        case "쉐일":
            nwret = 30;
            break;
        case "도미니언":
        case "도미":
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
            rep = "180초간 최종 데미지 70%로 추가 타격을 하는 그림자 소환";
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
            rep = "어둠의 표식이 새겨질 확률 5%, 최대 중첩 제한 1";
            break;
        case 18:
            rep = "공격력 10 증가, 표창 소비 없이 공격 가능";
            break;
        case 19:
            rep = "상태 이상 내성 30, 모든 속성 내성 30%";
            break;
        case 20:
            rep = "회복 아이템 사용 시 회복량 170% 증가";
            break;
        case 21:
            rep = "253%의 데미지로 4번, 1010%의 데미지로 1번 공격";
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
            rep = "어둠의 표식이 새겨질 확률 5%, 최대 중첩 제한 1";
            break;
        case 27:
            rep = "하단 참조";
            break;
        case 28:
            rep = "공격력 30, 방무 15%, 최종데미지 10% 증가";
            break;
        case 29:
            rep = "40% 확률로 추가 회피";
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
sknw.getskilldesc2Nightwalker = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "거대 그림자 창이 안나오는 버그가 있음";
            break;
        case 1:
            rep = "고정형 소환수 스킬";
            break;
        case 2:
            rep = "적 처치/보스타격 3~4초후에 버프 발동";
            break;
        case 3:
            rep = "[스로우]";
            break;
        case 4:
            rep = "온오프 스킬";
            break;
        case 5:
            rep = "온오프 스킬";
            break;
        case 6:
            rep = "커스텀 커맨드 온오프 : 마우스 우클릭";
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
            rep = "시간차로 따라함";
            break;
        case 14:
            rep = "온오프 스킬";
            break;
        case 15:
            rep = "연사 딜레이 감소";
            break;
        case 16:
            rep = "-";
            break;
        case 17:
            rep = "중첩당 도트 데미지 50%, 중첩당 방어율 무시 1% 증가";
            break;
        case 18:
            rep = "인벤토리 내 표창 중 가장 앞에 있는 표창의 공격력이 적용";
            break;
        case 19:
            rep = "스탠스 40% 증가";
            break;
        case 20:
            rep = "크리티컬 데미지 10% 증가";
            break;
        case 21:
            rep = "[스로우] / 딜레이 390ms";
            break;
        case 22:
            rep = "설치형 다수 공격기";
            break;
        case 23:
            rep = "바인드기";
            break;
        case 24:
            rep = "온오프 스킬";
            break;
        case 25:
            rep = "쉐도우 배트 최종 강화";
            break;
        case 26:
            rep = "중첩당 도트 데미지 50%, 중첩당 방어율 무시 1% 증가";
            break;
        case 27:
            rep = "보호막 패시브";
            break;
        case 28:
            rep = "스탠스 60% 증가";
            break;
        case 29:
            rep = "피격 데미지 10% 감소";
            break;
        case 30:
            rep = "서번트 2개 추가";
            break;
        case 31:
            rep = "회색 연출 온오프 가능";
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
            rep = "땅에 스며든 그림자가 창으로 변하여 적을 찌른다. 공격 반사 상태의 적을 공격해도 피해를 입지 않고 마을에서는 그림자 창이 발동되지 않는다. 어둠 속성의 공격이다.\n\nMP 1000 소비, 87초 동안 쉐도우 스피어 및 소환수를 제외한 어둠 속성 공격 시 바닥에 그림자 조각 생성\n그림자 조각은 잠시 후 그림자 창으로 변해 최대 8명의 적에게 440%의 데미지로 2번 공격\n그림자 창이 발동될 때 주변에 다른 그림자 조각이 일정 수 이상 있다면 거대한 그림자 창으로 변해 최대 12명의 적을 880%의 데미지로 6번 공격, 거대 그림자 창 재발동 대기시간 3.9초\n쉐도우 스피어의 모든 공격은 일반 몬스터 공격 시 데미지 25% 증가\n\n재사용 대기시간 177초";
            break;
        case 1:
            rep = "한 장소에 고정되어 이동하지 않고 자신의 행동을 따라 하는 그림자를 소환한다.\n그림자는 주변에 있는 최대 HP가 가장 높은 보스 몬스터, 보스 몬스터가 없다면 최대 HP가 높은 몬스터가 있는 방향을 바라보게 된다. 따라하는 행동은 표창을 던지는 스킬로 제한되고 별도의 HP는 없으며 소환 시간이 지나면 사라진다.\n스킬을 다시 사용하여 그림자와 자리를 교체하거나 아래 방향키와 함께 스킬을 다시 사용하여 그림자를 현재 위치로 재소환 할 수 있다. 단, 나이트워커가 발판 위에 있을 때만 가능하다. 그림자를 불러오면 별도의 재사용 대기시간이 적용된다.\n그림자의 모든 공격은 어둠 속성으로 적용되며 공격 반사 상태의 적을 공격해도 피해를 입지 않고 어둠의 표식, 쉐도우 배트, 래버너스 배트가 발동될 수 있다.\n\nMP 800 소비, 45초 동안 한 장소에 고정되어 표창을 던지는 스킬에 최종 데미지의 55%로 추가 타격을 하는 그림자 소환\n최대 3회까지 자리 교체 가능\n그림자 재소환 대기시간 1.5초\n\n재사용 대기시간 60초";
            break;
        case 2:
            rep = "적의 그림자를 조종해 스스로를 공격하게 하며 그림자에게 먹힌 적이 있다면 그 힘을 강탈하여 일정 시간 동안 최종 데미지가 증가하고 쉐도우 배트, 래버너스 배트가 소환 가능한 상태라면 적이 공격받은 위치에서 배트가 생성되어 즉시 적을 공격한다. 쉐도우 바이트에 의해 생성된 배트는 강화된 상태로 생성되지 않는다. 어둠 속성의 공격이다.\n\nMP 1500 소비, 최대 15명의 적을 990%의 데미지로 14번 공격, 보스 몬스터에게는 1485%의 데미지로 공격, 배트가 소환 가능한 상태라면 적이 공격받은 위치에서 쉐도우 배트 및 래버너스 배트 생성\n쉐도우 바이트로 쓰러뜨린 적이 있다면 20초 동안 1명 당 최종 데미지 2% 증가, 보스 몬스터를 공격했을 경우 최종 데미지 18% 증가, 쉐도우 바이트로 증가하는 최종 데미지는 최대 20%까지 적용\n\n재사용 대기시간 15초";
            break;
        case 3:
            rep = "매우 빠른 속도로 표창을 수없이 던진다. 사용 시 일정 시간 동안 다크 사이트 상태가 되며 공중에서 사용 시 체공하며 던진다. 래피드 스로우에는 쉐도우 모멘텀 관성 효과가 적용되지 않는다. 각 표창은 쉐도우 배트 및 래버너스 배트의 표창 스킬 횟수에 최대 1회 반영된다. 어둠 속성의 공격이지만 연속 투척 공격에는 쉐도우 스피어에 의한 그림자 조각이 생성되지 않는 대신 더 높은 데미지를 준다.\n\nMP 1000 소비, 최대 8명의 적을 1045%의 데미지로 5번 공격하는 그림자 표창을 1.8초 동안 연속 투척한 후 최대 10명의 적을 1870%의 데미지로 13번 공격하는 거대 그림자 표창으로 마무리\n사용 시 4초 동안 다크 사이트, 스킬을 연타하여 연속 투척 시간을 최대 3초까지 증가시킬 수 있음\n쉐도우 스피어 발동 중 연속 투척 공격의 데미지 290%p 증가\n\n재사용 대기시간 90초";
            break;
        case 4:
            rep = "어둠의 엘리멘트를 소환하여 그 힘을 얻는다.\n\n표창을 사용하는 스킬을 적에게 적중시키면 20% 확률로 최대 2회까지 중첩되는 어둠의 표식 생성, 표식이 새겨진 적은 5초 동안 중첩당 매 초 80%의 도트 데미지를 받고 해당 적을 나이트워커가 공격하면 중첩당 4%만큼 방어율 추가 무시";
            break;
        case 5:
            rep = "그림자로 이루어진 종복 쉐도우 배트를 소환한다. 쉐도우 배트는 표창을 사용하는 스킬로 공격할 때 일정 확률로 함께 공격한다. 어둠의 표식이 새겨진 적에게는 공격 확률이 2배가 되고 표식 중첩만큼 소환된 쉐도우 배트가 한 번에 공격하며, 이때 쉐도우 배트가 1마리 추가로 생성된다.\n쉐도우 배트는 공격 반사 상태의 적을 공격해도 피해를 입지 않는다.\n\n표창을 사용하는 스킬을 3번 적중시킬 때마다 60초 동안 유지되는 쉐도우 배트 1마리 소환, 최대 2마리까지 소환 가능\n표창을 사용하는 스킬로 공격 시 50% 확률로 날아가 대상에게 150%의 데미지로 공격 후 추가로 3명의 적에게 튕겨 같은 데미지를 입힌 후 소멸, 일반 몬스터 공격 시 데미지 35% 증가\n첫 데미지를 줄 때 최대 HP의 1% 회복";
            break;
        case 6:
            rep = "점프 중 사용하면 진행 방향으로 연속 두 번 점프한다. 점프키로도 사용할 수 있다. 추가로 스로우 계열 스킬의 마지막 공격을 점프키로 취소할 수 있게 된다. 다크 사이트를 배웠고 스로우 계열 스킬의 마지막 공격 중 점프키를 입력했다면 짧은 시간 자동으로 다크 사이트가 적용된다.\n\n커스텀 커맨드를 사용하면 점프 중 사용해도 이동하지 않을 수 있다. 커스텀 커맨드 사용시 좌우 방향키와 함께 사용하면 진행 방향으로 점프할 수 있다.\n\nMP 5 소비, 일정 거리 점프\n스로우 계열 스킬 사용 중 점프키 입력 시 2초 동안 다크 사이트 상태\n\n자동 발동되는 다크 사이트로 최대 HP의 일정 비율로 피해를 입히는 공격을 회피하였을 경우 다크 사이트의 남은 지속 시간이 최대치의 20% 만큼 감소";
            break;
        case 7:
            rep = "일정 시간 동안 그림자에 몸을 숨긴다. 다크 사이트 상태에서는 적에게 부딪히지 않지만 공격을 하면 해제된다. 단, 최대 HP의 일정 비율로 피해를 입히는 공격을 회피하였을 경우 다크 사이트가 해제되었을 때 회피한 횟수에 비례하여 재사용 대기시간이 적용된다. 쉐도우 점프를 사용해도 다크 사이트가 해제되지 않는다. 스킬 키를 한 번 더 눌러 다크 사이트 상태를 해제할 수 있다.\n\nMP 20 소비, 200초 동안 그림자에 몸을 숨김\n최대 HP의 일정 비율로 피해를 입히는 공격을 회피하였을 경우 다크 사이트가 해제되었을 때 회피한 횟수 당 재사용 대기시간 3초 적용, 최대 5번까지 중첩";
            break;
        case 8:
            rep = "후방으로 빠르게 이동한다.\n공용 스킬을 제외한 자신의 스킬 사용 중에도 이동할 수 있고 이동 중에는 적의 어떠한 공격에도 밀려나지 않는다. 다크 사이트를 배웠고 스로우 스킬의 마지막 공격 중 사용했다면 짧은 시간 자동으로 다크 사이트가 적용된다.\n\nMP 7 소비, 후방으로 일정 거리 이동\n스로우 계열 스킬 사용 중 사용 시 2초 동안 다크 사이트 상태\n자동 발동되는 다크 사이트로 최대 HP의 일정 비율로 피해를 입히는 공격을 회피하였을 경우 다크 사이트의 남은 지속 시간이 최대치의 20% 만큼 감소";
            break;
        case 14:
            rep = "죽음에 이르는 공격을 받을 때, 일정 시간 주위의 어둠을 흡수한 후 부활한다.\n재사용 대기시간 초기화의 효과를 받지 않는다.\n\nMP 150 소비, 죽음에 이르는 공격을 받을 때 죽지 않는 대신 버프를 소비하고 최대 HP의 50%를 3초에 걸쳐 서서히 회복, 쉐도우 배트 및 래버너스 배트가 소환되어 있다면 모두 소비하여 1마리당 10% 추가회복\n회복 중 및 스킬 종료 후 2초 동안 무적\n\n버프 소비 시 : 재사용 대기시간 1800초";
            break;
        case 15:
            rep = "공격에 관성을 부여하여 스로우 계열 스킬을 더욱 빠르게 사용할 수 있는 상태가 되고 영구적으로 최종 데미지가 증가한다. 일정 거리 이동 시 관성을 획득하며 스로우 계열 스킬을 연속으로 사용 시 마지막 공격을 취소할 수 있게 된다. 관성 단계가 높을수록 더 빠르게 취소할 수 있다. 해당 버프는 버프 지속시간 증가의 효과를 받지 않는다.\n\n일정 거리 이동 시 30초 동안 지속되는 관성 획득, 최대 3단계까지 누적\n영구적으로 최종 데미지 20% 증가";
            break;
        case 16:
            rep = "교감을 통해 쉐도우 배트를 강화시키고 일정 배트 수마다 공격한 자리에 폭발 공격을 일으키는 강화된 쉐도우 배트가 대신 소환된다. 강화된 쉐도우 배트는 배트 커뮤니온, 배트 커뮤니온Ⅱ로 강화되지 않으며 공격 반사 상태의 적을 공격해도 피해를 입지 않는다. 강화된 쉐도우 배트의 모든 공격은 어둠 속성의 공격이다.\n\n쉐도우 배트의 최대 소환 제한 1, 데미지 150%p, 튕기는 횟수 1회 증가\n쉐도우 배트를 5마리 소환할 때마다 강화 쉐도우 배트 소환\n강화 쉐도우 배트 : 표창을 사용하는 스킬로 공격 시 100% 확률로 날아가 대상에게 420%의 데미지로 공격 후 추가로 6명의 적에게 튕겨 같은 데미지를 입힌 후 소멸, 공격마다 주변 적 최대 3명을 140%의 데미지로 3번 공격하는 폭발 발생\n1명의 적이 폭발을 여러 번 맞을 경우 두 번째 폭발부터 최종 데미지 50% 감소\n강화 쉐도우 배트는 일반 몬스터 공격 시 데미지 35% 증가";
            break;
        case 22:
            rep = "어둠의 징조인 배트 무리를 소환하여 일정 시간 적을 공격한다. 배트 무리에 공격당한 적들의 수에 비례해 쉐도우 배트 및 래버너스 배트가 소환된다. 쉐도우 배트, 래버너스 배트, 다크니스 오멘을 제외한 어둠 속성의 공격을 적중시켰을 때 재사용 대기시간이 감소된다. 다크니스 오멘은 공격 반사 상태의 적을 공격해도 피해를 입지 않고 시전 동작 중에는 적의 어떠한 공격에도 밀려나지 않는다.\n\nMP 110 소비, 5초 동안 0.3초마다 최대 6명의 적을 500%의 데미지로 공격\n적 3명을 적중시킬 때 마다 쉐도우 배트 및 래버너스 배트 1마리 소환, 최대 2개까지 소환가능\n쉐도우 배트, 래버너스 배트, 다크니스 오멘을 제외한 어둠 속성 공격을 적중시켰을 때 재사용 대기시간 0.5초씩 감소\n\n재사용 대기시간 20초";
            break;
        case 23:
            rep = "응집된 그림자를 폭발시켜 주변 적들을 고정시킨다. 응집 시간에 비례하여 행동 불가 시간이 증가한다. 그림자를 응집시키는 도중 어떠한 공격에도 밀려나지 않는다. 쉐도우 스티치는 공격 반사 상태의 적을 피해를 입지 않는다.\n\nMP 66 소비, 최대 5초까지 키다운하여 주위의 그림자를 응집\n키다운 해제 시 응집된 그림자가 폭발하여 최대 15명의 적을 850% 데미지로 3번 공격, 공격당한 적은 10초 동안 행동 불가, 응집 시간 0.5초마다 행동 불가 시간 1초 증가하여 최대 12초까지 증가\n쉐도우 스티치로 적에게 준 데미지에 따라 행동 불가 지속시간 최대 100% 증가\n\n재사용 대기시간 180초";
            break;
        case 24:
            rep = "피에 더욱 굶주린 래버너스 배트를 소환한다. 래버너스 배트는 표창을 사용하는 스킬로 공격할 때 일정 확률로 함께 공격한다. 어둠의 표식이 새겨진 적에게는 표식 중첩만큼 소환된 래버너스 배트가 한 번에 공격하며, 이 때 래버너스 배트가 1마리 추가로 생성된다. 래버너스 배트는 최대 HP가 높은 보스 몬스터를 우선 추적하고 공격 반사 상태의 적을 공격해도 피해를 입지 않는다. 쉐도우 배트와 동시에 사용할 수 없다. 어둠 속성의 공격이다.\n\n표창을 사용하는 스킬을 3번 적중시킬 때마다 60초 동안 유지되는 래버너스 배트 1마리 소환, 최대 5마리까지 소환 가능\n표창을 사용하는 스킬로 공격 시 100% 확률로 날아가 대상에게 480%의 데미지로 2번 공격, 적중 시 최대 HP의 1% 회복";
            break;
        case 25:
            rep = "교감을 통해 쉐도우 배트를 강화시키고 일정 래버너스 배트 수마다 더 강력한 데미지로 공격하는 강화 래버너스 배트가 소환된다. 강화된 래버너스 배트는 배트 커뮤니온, 배트 커뮤니온Ⅱ, 배트 커뮤니온Ⅲ로 강화되지 않으며 최대 HP가 높은 보스 몬스터를 우선 추적한다. 강화 래버너스 배트는 공격 반사 상태의 적을 공격해도 피해를 입지 않는다. 강화된 래버너스 배트는 어둠 속성의 공격이다.\n\n쉐도우 배트의 공격확률 30%, 최대 소환 제한 1, 데미지 200%p, 튕기는 횟수 1회 증가\n강화 쉐도우 배트의 데미지 200%p 증가, 폭발 데미지 60%p 증가\n쉐도우 배트로 일반 몬스터 공격 시 데미지 50% 추가 증가\n래버너스 배트를 5마리 소환할 때마다 강화 래버너스 배트 소환\n\n강화 래버너스 배트 : 표창을 사용하는 스킬로 공격 시 100% 확률로 날아가 대상에게 480%의 데미지로 3번 공격, 적중 시 최대 HP의 5% 회복";
            break;
        case 27:
            rep = "어둠의 표식을 새길 때 적의 생기를 흡수하여 자신을 지키는 보호막을 생성한다. 보호막은 버프 지속 시간 증가의 효과를 받지 않는다.\n\n엘리멘트 : 다크니스로 어둠의 표식을 새길 때 생기 흡수, 흡수한 생기가 30개가 되면 모두 소모하며 최대 HP의 10%의 피해를 막아주는 보호막을 15초 동안 생성\n흡수한 생기는 15초 동안 유지되고 어둠의 표식이 새겨질 때 유지시간 초기화";
            break;
        case 30:
            rep = "일정 시간 동안 자신의 행동을 시간차로 따라하는 그림자를 3개 소환한다. 따라하는 행동은 표창을 던지는 스킬과 이동스킬로 제한된다. 별도의 HP는 없으며 소환 시간이 지나면 사라진다. 그림자의 공격은 어둠 속성으로 적용되며 공격 반사 상태의 적을 공격해도 피해를 입지 않으며 어둠의 표식, 쉐도우 배트, 래버너스 배트가 발동될 수 있다.\n\nMP 200 소비, 30초 동안 표창을 던지는 스킬에 최종 데미지의 70%, 50%, 30%로 추가 타격을 하는 그림자 소환\n\n재사용 대기시간 180초";
            break;
        case 31:
            rep = "어둠의 힘을 극대화하여 자신의 영지로 만든다.\n\nMP 350 소비, 최대 15명의 적을 1000%의 데미지로 10번 공격, 시전 동작 중 무적\n공격 후 30초 동안 표창을 던지는 스킬 사용 시 어둠의 표식을 최대 중첩으로 새기고 쉐도우 배트 및 래버너스 배트의 최대 소환 제한 3 증가 및 배트가 지속적으로 소환\n지속 중 최종 데미지 20%, 크리티컬 확률 100% 증가, 쉐도우 모멘텀의 관성 최대로 유지 후 도미니언 종료 시 지속시간 갱신\n\n재사용 대기시간 180초";
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
            rep = "https://i.imgur.com/hltGMtE.png";
            break;
        case 5:
            rep = "https://i.imgur.com/M8wzXVk.png";
            break;
        case 6:
            rep = "https://i.imgur.com/yHELFeJ.png";
            break;
        case 7:
            rep = "https://i.imgur.com/QWrC0tW.png";
            break;
        case 8:
            rep = "https://i.imgur.com/vDPwxqs.png";
            break;
        case 9:
            rep = "";
            break;
        case 10:
            rep = "https://i.imgur.com/SWYFx95.png";
            break;
        case 11:
            rep = "";
            break;
        case 12:
            rep = "";
            break;
        case 13:
            rep = "https://i.imgur.com/1dQZH4Q.png";
            break;
        case 14:
            rep = "https://i.imgur.com/y43IPm9.png";
            break;
        case 15:
            rep = "https://i.imgur.com/wII4Foq.png";
            break;
        case 16:
            rep = "https://i.imgur.com/SCkR3JR.png";
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
            rep = "https://i.imgur.com/65kzsTz.png";
            break;
        case 22:
            rep = "https://i.imgur.com/SWjc80F.png";
            break;
        case 23:
            rep = "https://i.imgur.com/6Deo96n.png";
            break;
        case 24:
            rep = "https://i.imgur.com/oVP43Kr.png";
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
            rep = "https://i.imgur.com/GtUmioT.png";
            break;
        case 31:
            rep = "https://i.imgur.com/fLmCJql.png";
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
            rep = "https://i.imgur.com/r0sps7c.png";
            break;
        case 5:
            rep = "https://i.imgur.com/TCTzHje.png";
            break;
        case 6:
            rep = "https://i.imgur.com/KluGWpf.png";
            break;
        case 7:
            rep = "https://i.imgur.com/rUjSast.png";
            break;
        case 8:
            rep = "https://i.imgur.com/M9UwQVa.png";
            break;
        case 9:
            rep = "https://i.imgur.com/HhkjEO4.png";
            break;
        case 10:
            rep = "https://i.imgur.com/yXncm1W.png";
            break;
        case 11:
            rep = "https://i.imgur.com/KYn6mSv.png";
            break;
        case 12:
            rep = "https://i.imgur.com/yDHuZlH.png";
            break;
        case 13:
            rep = "https://i.imgur.com/GCd85sr.png";
            break;
        case 14:
            rep = "https://i.imgur.com/gToUUUx.png";
            break;
        case 15:
            rep = "https://i.imgur.com/18xTNG0.png";
            break;
        case 16:
            rep = "https://i.imgur.com/6ecIbcm.png";
            break;
        case 17:
            rep = "https://i.imgur.com/X8plOcm.png";
            break;
        case 18:
            rep = "https://i.imgur.com/nWgqsD7.png";
            break;
        case 19:
            rep = "https://i.imgur.com/lWVuKod.png";
            break;
        case 20:
            rep = "https://i.imgur.com/ZnGAC5w.png";
            break;
        case 21:
            rep = "https://i.imgur.com/gnbj4zs.png";
            break;
        case 22:
            rep = "https://i.imgur.com/gCuU5Ge.png";
            break;
        case 23:
            rep = "https://i.imgur.com/xOWWw1Q.png";
            break;
        case 24:
            rep = "https://i.imgur.com/Eo8wdZz.png";
            break;
        case 25:
            rep = "https://i.imgur.com/PNzcJ3K.png";
            break;
        case 26:
            rep = "https://i.imgur.com/XJlL3SW.png";
            break;
        case 27:
            rep = "https://i.imgur.com/G8Vajn6.png";
            break;
        case 28:
            rep = "https://i.imgur.com/d86P1wp.png";
            break;
        case 29:
            rep = "https://i.imgur.com/iLufeVT.png";
            break;
        case 30:
            rep = "https://i.imgur.com/KvMISdG.png";
            break;
        case 31:
            rep = "https://i.imgur.com/20EdMpM.png";
            break;
        case 32:
            rep = "";
            break;
    }
    return rep;
};

module.exports = sknw;