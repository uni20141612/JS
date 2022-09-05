const skdb = {};

skdb.getskillDualblades = function (skillname){
    var dbret = -1;
    switch(skillname){
        case "블레이드 스톰":
        case "블레이드스톰":
        case "블스":
            dbret = 0;
            break;
        case "카르마 퓨리":
        case "카르마퓨리":
        case "카르마":
        case "퓨리":
        case "카퓨":
            dbret = 1;
            break;
        case "블레이드 토네이도":
        case "블레이드토네이도":
        case "블토":
            dbret = 2;
            break;
        case "헌티드 엣지":
        case "헌티드엣지":
        case "헌티드":
        case "엣지":
            dbret = 3;
            break;
        case "다크 사이트":
        case "다크사이트":
        case "닼사":
            dbret = 4;
            break;
        case "토네이도 스핀":
        case "토네이도스핀":
        case "토네이도":
        case "스핀":
        case "토스":
        case "밀격기":
        case "밀격":
            dbret = 5;
            break;
        case "카르마":
            dbret = 6;
            break;
        case "플라잉 어썰터":
        case "플라잉어썰터":
        case "플라잉":
        case "어썰터":
        case "플어":
            dbret = 7;
            break;
        case "플래시 뱅":
        case "플래시뱅":
        case "플뱅":
        case "섬광탄":
            dbret = 8;
            break;
        case "베놈":
            dbret = 9;
            break;
        case "블레이드 어센션":
        case "블레이드어센션":
        case "어센션":
        case "윗점":
            dbret = 10;
            break;
        case "사슬지옥":
        case "사슬":
            dbret = 11;
            break;
        case "미러 이미징":
        case "미러이미징":
        case "미러":
        case "쉐도우 파트너":
        case "쉐도우파트너":
        case "쉐파":
            dbret = 12;
            break;
        case "어드밴스드 다크 사이트":
        case "어드밴스드 다크사이트":
        case "어드밴스드다크사이트":
        case "어닼사":
            dbret = 13;
            break;
        case "바이탈 스틸":
        case "바이탈스틸":
        case "바이탈":
        case "피흡":
            dbret = 14;
            break;
        case "래디컬 다크니스":
        case "래디컬다크니스":
        case "래디컬":
            dbret = 15;
            break;
        case "섀도우 이베이젼":
        case "섀도우이베이젼":
        case "이베이젼":
            dbret = 16;
            break;
        case "블레이드 퓨리":
        case "블레이드퓨리":
        case "블퓨":
            dbret = 17;
            break;
        case "팬텀 블로우":
        case "팬텀블로우":
        case "팬블":
            dbret = 18;
            break;
        case "파이널 컷":
        case "파이널컷":
        case "파컷":
            dbret = 19;
            break;
        case "써든레이드":
        case "써든 레이드":
        case "써든":
        case "서든레이드":
        case "서든":
        case "써레":
            dbret = 20;
            break;
        case "더미 이펙트":
        case "더미이펙트":
        case "더미":
            dbret = 21;
            break;
        case "쏜즈 이펙트":
        case "쏜즈이펙트":
        case "쏜즈":
            dbret = 22;
            break;
        case "샤프니스":
            dbret = 23;
            break;
        case "페이탈 베놈":
        case "페이탈베놈":
        case "페이탈":
            dbret = 24;
            break;
        case "히든 블레이드":
        case "히든블레이드":
        case "히든":
        case "히블":
            dbret = 25;
            break;
        case "아수라":
        case "부엉이":
            dbret = 26;
            break;
        case "":
            dbret = 27;
            break;
        case "":
            dbret = 28;
            break;
        case "":
            dbret = 29;
            break;
    }
    return dbret;
};
skdb.getskillnameDualblades = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "블레이드 스톰";
            break;
        case 1:
            rep = "카르마 퓨리";
            break;
        case 2:
            rep = "블레이드 토네이도";
            break;
        case 3:
            rep = "헌티드 엣지";
            break;
        case 4:
            rep = "다크 사이트";
            break;
        case 5:
            rep = "토네이도 스핀";
            break;
        case 6:
            rep = "카르마";
            break;
        case 7:
            rep = "플라잉 어썰터";
            break;
        case 8:
            rep = "플래시 뱅";
            break;
        case 9:
            rep = "베놈";
            break;
        case 10:
            rep = "블레이드 어센션";
            break;
        case 11:
            rep = "사슬지옥";
            break;
        case 12:
            rep = "미러 이미징";
            break;
        case 13:
            rep = "어드밴스드 다크 사이트";
            break;
        case 14:
            rep = "바이탈 스틸";
            break;
        case 15:
            rep = "래디컬 다크니스";
            break;
        case 16:
            rep = "섀도우 이베이젼";
            break;
        case 17:
            rep = "블레이드 퓨리";
            break;
        case 18:
            rep = "팬텀 블로우";
            break;
        case 19:
            rep = "파이널 컷";
            break;
        case 20:
            rep = "써든레이드";
            break;
        case 21:
            rep = "더미 이펙트";
            break;
        case 22:
            rep = "쏜즈 이펙트";
            break;
        case 23:
            rep = "샤프니스";
            break;
        case 24:
            rep = "페이탈 베놈";
            break;
        case 25:
            rep = "히든 블레이드";
            break;
        case 26:
            rep = "아수라";
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
    }
    return rep;
};
skdb.getskilldesc1Dualblades = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "하단 참조";
            break;
        case 1:
            rep = "12명,880%,7번 참격 5번발동/ 방무30%";
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
            rep = "최대 6명의 적에게 380% 데미지로 스핀 공격";
            break;
        case 6:
            rep = "공격력 30, 스탠스 확률 40% 증가";
            break;
        case 7:
            rep = "최대 8명의 적을 165% 데미지로 4번 공격";
            break;
        case 8:
            rep = "6명, 250% 데미지, 100%확률 50초간 명중치 20% 감소";
            break;
        case 9:
            rep = "공격 시 30% 확률로, 6초 동안 1초당 90% 도트데미지";
            break;
        case 10:
            rep = "175%의 데미지로 전방 6명의 적을 3회 공격";
            break;
        case 11:
            rep = "하단 참조";
            break;
        case 12:
            rep = "200초 동안 플래시 뱅을 제외한 모든 공격에";
            break;
        case 13:
            rep = "하단 참조";
            break;
        case 14:
            rep = "공격 시 10% 확률로 최대 HP의 20%를 회복.";
            break;
        case 15:
            rep = "최대 HP 20%, 상태 이상 내성 30";
            break;
        case 16:
            rep = "30% 확률로 회피, 회피성공 후 7초간 공격력 15 증가";
            break;
        case 17:
            rep = "최대 8명의 적을 250% 데미지로 4번 공격";
            break;
        case 18:
            rep = "315% 데미지로 3명의 적 6번 공격";
            break;
        case 19:
            rep = "하단 참조";
            break;
        case 20:
            rep = "15명, 494%, 7번 공격, 10초 동안 1초당 210% 도트데미지";
            break;
        case 21:
            rep = "하단 참조";
            break;
        case 22:
            rep = "공격력 30 증가, 스탠스 확률 60% 증가";
            break;
        case 23:
            rep = "크리티컬 확률 35%, 크리티컬 데미지 13% 증가";
            break;
        case 24:
            rep = "공격 시 50% 확률, 3회 중첩 가능";
            break;
        case 25:
            rep = "[파이널 어택류 스킬] 60초간 100%확률 직접공격스킬에";
            break;
        case 26:
            rep = "5초간 방무 100%, 10명의 적을 693% 데미지로 5번 공격";
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
    }
    return rep;
};
skdb.getskilldesc2Dualblades = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "키다운형 극딜기";
            break;
        case 1:
            rep = "재사용 대기시간 10초";
            break;
        case 2:
            rep = "광범위 공격기";
            break;
        case 3:
            rep = "발동형 패시브";
            break;
        case 4:
            rep = "지속중 다른스킬 사용, 스킬키 한번더 눌러 상태 해제가능";
            break;
        case 5:
            rep = "돌진형 밀격기";
            break;
        case 6:
            rep = "-";
            break;
        case 7:
            rep = "20% 확률로 6초 동안 기절/ 토네이도스핀, 블러디스톰 연계가능";
            break;
        case 8:
            rep = "해당 적에게 자신의 모든 스킬의 데미지 10% 증가. 쿨 60초";
            break;
        case 9:
            rep = "링크스킬 발동가능";
            break;
        case 10:
            rep = "공격하며 공중으로 떠오른다";
            break;
        case 11:
            rep = "대부분의 스킬 도중에 사용 가능";
            break;
        case 12:
            rep = "최종 데미지의 70%로 추가 타격을 하는 그림자 동료 소환";
            break;
        case 13:
            rep = "다크 사이트 강화 패시브";
            break;
        case 14:
            rep = "자가 회복 패시브";
            break;
        case 15:
            rep = "모든 속성 내성 30% 증가";
            break;
        case 16:
            rep = "이어지는 모든 공격은 크리티컬 판정/ 쿨 5초";
            break;
        case 17:
            rep = "몬스터의 방어율 20% 무시";
            break;
        case 18:
            rep = "몬스터의 방어율 30% 무시";
            break;
        case 19:
            rep = "무적 겸 최종 데미지 증가 버프";
            break;
        case 20:
            rep = "파이널 컷의 남아있는 재사용 대기시간 20% 감소/ 쿨30초";
            break;
        case 21:
            rep = "어그로 분산용 소환수 스킬";
            break;
        case 22:
            rep = "-";
            break;
        case 23:
            rep = "-";
            break;
        case 24:
            rep = "8초 동안 1초당 160% 데미지의 도트 데미지 ";
            break;
        case 25:
            rep = "140%의 추가타 발생. 데미지 10% 증가/ 쿨90초";
            break;
        case 26:
            rep = "이동및 점프 가능, 재사용 대기시간 60초/ 쉘 판정";
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
    }
    return rep;
};
skdb.getskilldesc3Dualblades = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "비화원의 비기로 전방의 적을 폭풍같은 속도로 베어낸다. 이동하며 계속해서 공격할 수 있다.\n\nMP 20 소비, 최대 10명의 적을 1270%로 7번 공격한 후 최대 5초 동안 전방 10명의 적에게 960% 데미지로 연속해서 5번 공격, 몬스터 방어율 100% 추가 무시\n\n재사용 대기시간 90초";
            break;
        case 2:
            rep = "빠르게 회전하며 주변을 공격한다. 극한에 이른 속도로 인해 검붉은 태풍이 생성되어 전방으로 나아간다. 태풍은 공격 반사 상태의 적을 공격해도 피해를 입지 않는다.\n\nMP 750 소비, 최대 10명의 적을 1320% 데미지로 7번 공격\n태풍은 일정 시간마다 최대 10명의 적을 880%의 데미지로 6번 공격하는 회오리 발생, 한명의 적에게는 최대 6번까지만 회오리 발생\n회전 공격 및 태풍은 몬스터 방어율 100% 추가 무시\n\n재사용 대기시간 : 12초";
            break;
        case 3:
            rep = "검에 깃든 명계의 악령이 스스로 적을 공격한다. 블레이드 퓨리 혹은 팬텀 블로우 사용 시 자동 발동한다.\n블레이드 퓨리 사용 시 빠른 검격이 날카로운 검풍을 만들어 내는 헌티드 엣지-수라가, 팬텀 블로우 사용 시 격노하여 수없이 연속 공격하는 헌티드 엣지-나찰이 발동된다.\n헌티드 엣지는 공격 반사 상태의 적을 공격해도 피해를 입지 않고 헌티드 엣지-수라로 발생되는 검풍은 미러 이미징이 적용되지 않는다.\n\nMP 750 소비, 재발동 대기시간 : 14초, 헌티드 엣지의 모든 공격은 몬스터 방어율 30% 추가 무시\n\n헌티드 엣지-수라 : 최대 8명의 적을 675%의 데미지로 6번 공격하고, 895%의 데미지로 3번 공격하는 검풍 최대 6개 생성, 한명의 적이 여러 개의 검풍에 맞았을 경우 검풍의 최종 데미지 50% 감소\n\n헌티드 엣지-나찰 : 최대 2명의 적을 890%의 데미지로 4번 공격하는 참격이 5회 발생";           
            break;
        case 4:
            rep = "일정 시간 동안 그림자에 몸을 숨겨 적의 공격을 회피한다. 회피한 공격이 최대 HP의 일정 비율로 피해를 입히는 공격일 경우 다크 사이트가 해제될 때 회피한 횟수에 비례하여 재사용 대기시간이 적용된다. 지속 중 스킬을 사용하거나 다크 사이트 스킬 키를 한 번 더 눌러 다크 사이트 상태를 해제할 수 있다. 단, 일부 이동 스킬 사용 시에는 다크 사이트 상태가 해제되지 않는다.\n\nMP 5 소비, 200초 동안 그림자에 몸을 숨김\n최대 HP의 일정 비율로 피해를 입히는 공격을 회피하였을 경우 다크 사이트가 해제되었을 때 회피한 횟수당 재사용 대기시간 3초 적용, 최대 5번까지 중첩";
            break;
        case 11:
            rep = "1마리의 적을 가까이 끌어당겨 연타 공격을 하고 일정 확률로 적을 기절시킨다. 발동 및 공격 도중 무적 상태가 되며 다른 스킬 중 사용할 수 있다. 사슬지옥은 모든 공격이 크리티컬로 적용되며 움직일 수 없는 고정형의 몬스터의 경우 사용범위에 제한이 있다.\n\nMP 75 소비, 사용 시 1.5초 동안 무적 적용\n사슬이 명중한 적에게 150% 데미지로 1회 공격 후 연타 공격 발동 시 150% 데미지로 7번 공격하고 10%의 확률로 적을 4초 동안 기절, 추가 크리티컬 확률 100%, 공격 도중 무적\n\n재사용 대기시간 45초";
            break;
        case 13:
            rep = "은신기술을 연마하여 다크 사이트 중 공격 혹은 스킬 사용 시 일정 확률로 다크 사이트가 해제되지 않도록 해준다. 또한 피격 시 일정 확률로 다크 사이트가 자동 발동되며 다크 사이트 중 공격 시 최종 데미지 증가한다.\n단, 피격 시 발동되는 다크 사이트로 최대 HP의 일정 비율로 피해를 입히는 공격을 회피하였을 경우 재사용 대기시간이 적용되지 않지만 다크 사이트의 지속 시간이 감소된다.\n\n다크 사이트 중 공격 및 스킬 사용 시 49% 확률로 은신이 해제되지 않음. 피격 시 20% 확률로 다크 사이트 자동 발동, 다크 사이트 중 공격 시 최종 데미지 20% 증가\n피격 시 발동되는 다크 사이트로 최대 HP의 일정 비율로 피해를 입히는 공격을 회피하였을 경우 다크 사이트의 남은 지속 시간이 최대치의 20% 만큼 감소";
            break;
        case 19:
            rep = "다량의 HP를 일시에 소비해 다수의 적에게 매우 강한 공격을 가한다. 사용하면 일정 시간 동안 더 큰 데미지를 줄 수 있다.\n\nMP 400, 최대 HP의 10% 소비, 2000% 데미지로 최대 8명의 적 공격. 차지 시간이 짧으면 데미지 감소\n사용 시 60초 동안 최종 데미지 40% 증가, 사용 후 3초 동안 무적 효과 적용. 재사용 대기시간 90초";
            break;
        case 21:
            rep = "미러 이미징으로 소환된 자신의 그림자를 분리시킨다. 분신은 적들의 공격을 집중시켜 나를 적의 공격으로부터 지켜주는 역할을 하며, 공격받는 순간 섀도우 이베이젼이 발동한다. 미러 이미징 스킬 사용 중에만 쓸 수 있다. 또한 영구적으로 듀얼블레이더의 방어력과 회피 확률을 증가시킨다.\n\n액티브 효과 : MP 135 소비, 90초 동안 HP 19000인 그림자 소환, 그림자가 소환되어 있을 때 피격 데미지 20% 감소, 그림자가 피해를 받으면 섀도우 이베이젼 발동\n그림자는 일부 공격에 피해를 받지 않음\n\n[패시브 효과 : 25% 확률로 적의 공격을 회피, 방어력 60% 증가]";
            break;
        case 9:
            rep = "";
            break;
    }
    return rep;
};
skdb.getskillimage1Dualblades = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "https://i.imgur.com/5YSZoTj.png";
            break;
        case 1:
            rep = "https://i.imgur.com/FeTQPEt.png";
            break;
        case 2:
            rep = "https://i.imgur.com/t7zdVLE.png";
            break;
        case 3:
            rep = "https://i.imgur.com/rnVB7zF.png";
            break;
        case 4:
            rep = "https://i.imgur.com/dux45bV.png";
            break;
        case 5:
            rep = "https://i.imgur.com/CCuv9iN.png";
            break;
        case 6:
            rep = "";
            break;
        case 7:
            rep = "https://i.imgur.com/KRFaABp.png";
            break;
        case 8:
            rep = "https://i.imgur.com/BCHo8aA.png";
            break;
        case 9:
            rep = "https://i.imgur.com/wr5vTCR.png";
            break;
        case 10:
            rep = "https://i.imgur.com/mTqbMOW.png";
            break;
        case 11:
            rep = "https://i.imgur.com/Hv2YiAt.png";
            break;
        case 12:
            rep = "https://i.imgur.com/bNaDfFR.png";
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
            rep = "https://i.imgur.com/n75opOA.png";
            break;
        case 18:
            rep = "https://i.imgur.com/flflFQf.png";
            break;
        case 19:
            rep = "https://i.imgur.com/0XXDx1t.png";
            break;
        case 20:
            rep = "https://i.imgur.com/w9h5pQe.png";
            break;
        case 21:
            rep = "https://i.imgur.com/P48wTgP.png";
            break;
        case 22:
            rep = "";
            break;
        case 23:
            rep = "";
            break;
        case 24:
            rep = "https://i.imgur.com/a9pBHaW.png";
            break;
        case 25:
            rep = "https://i.imgur.com/qZJgs4a.png";
            break;
        case 26:
            rep = "https://i.imgur.com/aPfb5Sj.png";
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
    }
    return rep;
};
skdb.getskillimage2Dualblades = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "https://i.imgur.com/RSSNveP.png";
            break;
        case 1:
            rep = "https://i.imgur.com/BUv2KIJ.png";
            break;
        case 2:
            rep = "https://i.imgur.com/ABbV2N3.png";
            break;
        case 3:
            rep = "https://i.imgur.com/C2t9KAW.png";
            break;
        case 4:
            rep = "https://i.imgur.com/2AOzrkG.png";
            break;
        case 5:
            rep = "https://i.imgur.com/GOnCu39.png";
            break;
        case 6:
            rep = "https://i.imgur.com/mt9npYG.png";
            break;
        case 7:
            rep = "https://i.imgur.com/WnO6qKA.png";
            break;
        case 8:
            rep = "https://i.imgur.com/v4XuIw2.png";
            break;
        case 9:
            rep = "https://i.imgur.com/cNQQHrM.png";
            break;
        case 10:
            rep = "https://i.imgur.com/msmPCjF.png";
            break;
        case 11:
            rep = "https://i.imgur.com/IzkLxV8.png";
            break;
        case 12:
            rep = "https://i.imgur.com/Mhdd6DW.png";
            break;
        case 13:
            rep = "https://i.imgur.com/2KGne9x.png";
            break;
        case 14:
            rep = "https://i.imgur.com/3GYpuDl.png";
            break;
        case 15:
            rep = "https://i.imgur.com/CH1jgFa.png";
            break;
        case 16:
            rep = "https://i.imgur.com/u8tcrkO.png";
            break;
        case 17:
            rep = "https://i.imgur.com/t9OvmRI.png";
            break;
        case 18:
            rep = "https://i.imgur.com/pOrs8nf.png";
            break;
        case 19:
            rep = "https://i.imgur.com/PcE1Oo0.png";
            break;
        case 20:
            rep = "https://i.imgur.com/OU3BM6a.png";
            break;
        case 21:
            rep = "https://i.imgur.com/RDKAlIO.png";
            break;
        case 22:
            rep = "https://i.imgur.com/PRtkF6V.png";
            break;
        case 23:
            rep = "https://i.imgur.com/scyBjyT.png";
            break;
        case 24:
            rep = "https://i.imgur.com/3UOypzO.png";
            break;
        case 25:
            rep = "https://i.imgur.com/Zc7Cgld.png";
            break;
        case 26:
            rep = "https://i.imgur.com/MCNZJCe.png";
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
    }
    return rep;
};

module.exports = skdb;