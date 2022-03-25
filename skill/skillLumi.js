const sklm = {};

sklm.getskillLumi = function (skillname){
    var lmret = -1;
    switch(skillname){
        case "파워 오브 라이트":
        case "파워오브라이트":
            lmret = 0;
            break;
        case "라이트 블링크":
        case "라이트블링크":
            lmret = 1;
            break;
        case "퍼미에이트":
        case "루미링크":
        case "링크":
            lmret = 2;
            break;
        case "선파이어":
        case "빛":
            lmret = 3;
            break;
        case "이클립스":
        case "어둠":
            lmret = 4;
            break;
        case "이퀄리브리엄":
        case "이퀼리브리엄":
        case "이퀄":
        case "이퀼":
            lmret = 5;
            break;
        case "라이트랜스포밍":
        case "텔레포트":
        case "텔포":
            lmret = 6;
            break;
        case "오디너리 매직가드":
        case "오디너리매직가드":
        case "매직가드":
            lmret = 7;
            break;
        case "익스텐드 마나":
        case "익스텐드마나":
            lmret = 8;
            break;
        case "빛 마법 강화":
        case "빛마법강화":
        case "빛강화":
            lmret = 9;
            break;
        case "어둠 마법 강화":
        case "어둠마법강화":
        case "어둠강화":
            lmret = 10;
            break;
        case "실피드 랜서":
        case "실피드랜서":
            lmret = 11;
            break;
        case "인바이러빌러티":
            lmret = 12;
            break;
        case "블레스 오브 다크니스":
        case "블레스오브다크니스":
            lmret = 13;
            break;
        case "스펠 마스터리":
        case "스펠마스터리":
            lmret = 14;
            break;
        case "하이 위즈덤":
        case "하이위즈덤":
            lmret = 15;
            break;
        case "샤인 리뎀션":
        case "샤인리뎀션":
            lmret = 16;
            break;
        case "데스 사이드":
        case "데스사이드":
            lmret = 17;
            break;
        case "안티 매직쉘":
        case "안티매직쉘":
            lmret = 18;
            break;
        case "포틱 메디테이션":
        case "포틱메디테이션":
        case "메디테이션":
            lmret = 19;
            break;
        case "라이트쉐도우 가드":
        case "라이트쉐도우가드":
            lmret = 20;
            break;
        case "라이프 타이달":
        case "라이프타이달":
            lmret = 21;
            break;
        case "운명의 갈림길":
        case "운명의갈림길":
        case "갈림길":
            lmret = 22;
            break;
        case "라이트 리플렉션":
        case "라이트리플렉션":
        case "라리플":
            lmret = 23;
            break;
        case "모닝 스타폴":
        case "모닝스타폴":
        case "메테오":
            lmret = 24;
            break;
        case "아포칼립스":
        case "아포":
            lmret = 25;
            break;
        case "앱솔루트 킬":
        case "앱솔루트킬":
        case "앱솔":
            lmret = 26;
            break;
        case "다크니스 소서러":
        case "다크니스소서러":
            lmret = 27;
            break;
        case "다크 크레센도":
        case "다크크레센도":
            lmret = 28;
            break;
        case "다크라이트 마스터리":
        case "다크라이트마스터리":
            lmret = 29;
            break;
        case "메모라이즈":
            lmret = 30;
            break;
        case "아마겟돈":
            lmret = 31;
            break;
        case "진리의 문":
        case "진리의문":
        case "진리":
            lmret = 32;
            break;
        case "퍼니싱 리소네이터":
        case "퍼니싱리소네이터":
        case "퍼니싱":
        case "퍼리":
            lmret = 33;
            break;
        case "빛과 어둠의 세례":
        case "빛과어둠의세례":
        case "빛둠세":
            lmret = 34;
            break;
        case "리버레이션 오브":
        case "리버레이션오브":
            lmret = 35;
            break;
    }
    return lmret;
};
sklm.getskillnameLumi = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "파워 오브 라이트";
            break;
        case 1:
            rep = "라이트 블링크";
            break;
        case 2:
            rep = "퍼미에이트";
            break;
        case 3:
            rep = "선파이어";
            break;
        case 4:
            rep = "이클립스";
            break;
        case 5:
            rep = "이퀄리브리엄";
            break;
        case 6:
            rep = "라이트랜스포밍";
            break;
        case 7:
            rep = "오디너리 매직가드";
            break;
        case 8:
            rep = "익스텐드 마나";
            break;
        case 9:
            rep = "빛 마법 강화";
            break;
        case 10:
            rep = "어둠 마법 강화";
            break;
        case 11:
            rep = "실피드 랜서";
            break;
        case 12:
            rep = "인바이러빌러티";
            break;
        case 13:
            rep = "블레스 오브 다크니스";
            break;
        case 14:
            rep = "스펠 마스터리";
            break;
        case 15:
            rep = "하이 위즈덤";
            break;
        case 16:
            rep = "샤인 리뎀션";
            break;
        case 17:
            rep = "데스 사이드";
            break;
        case 18:
            rep = "안티 매직쉘";
            break;
        case 19:
            rep = "포틱 메디테이션";
            break;
        case 20:
            rep = "라이트쉐도우 가드";
            break;
        case 21:
            rep = "라이프 타이달";
            break;
        case 22:
            rep = "운명의 갈림길";
            break;
        case 23:
            rep = "라이트 리플렉션";
            break;
        case 24:
            rep = "모닝 스타폴";
            break;
        case 25:
            rep = "아포칼립스";
            break;
        case 26:
            rep = "앱솔루트 킬";
            break;
        case 27:
            rep = "다크니스 소서러";
            break;
        case 28:
            rep = "다크 크레센도";
            break;
        case 29:
            rep = "다크라이트 마스터리";
            break;
        case 30:
            rep = "메모라이즈";
            break;
        case 31:
            rep = "아마겟돈";
            break;
        case 32:
            rep = "진리의 문";
            break;
        case 33:
            rep = "퍼니싱 리소네이터";
            break;
        case 34:
            rep = "빛과 어둠의 세례";
            break;
        case 35:
            rep = "리버레이션 오브";
            break;
    }
    return rep;
};
sklm.getskilldesc1Lumi = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "의지20레벨,통찰력20레벨,INT20증가,레벨업시MP증가량증가, 암흑영구면역";
            break;
        case 1:
            rep = "MP 40 소비, 범위 내 가장 먼 적에게로 이동.";
            break;
        case 2:
            rep = "적 공격 시 방어율 무시 15% 증가";
            break;
        case 3:
            rep = "빛스킬 최종데미지 50%추가타, 적 공격 시마다 순수 HP의 1%씩 회복";
            break;
        case 4:
            rep = "어둠스킬 최종데미지 50%추가타, 어둠 공격 마법 시전 시 MP 소비 0";
            break;
        case 5:
            rep = "10초동안 스탠스100%증가, 이퀄마법 최종뎀 100%추가타, 쿨타임 미적용";
            break;
        case 6:
            rep = "하단 참조";
            break;
        case 7:
            rep = "피해의 85%를 MP로 대신한다. 대신할 MP가 없을 경우 HP가 직접 감소";
            break;
        case 8:
            rep = "최대 MP 30% 증가.";
            break;
        case 9:
            rep = "빛 계열 마법의 최종 데미지 5% 증가";
            break;
        case 10:
            rep = "어둠 계열 마법의 최종 데미지 5% 증가";
            break;
        case 11:
            rep = "[빛 마법] 최대 6명의 적을 115%의 데미지로 4번 공격";
            break;
        case 12:
            rep = "[빛 마법] 최대 10명의 적을 350만큼 밀어낸 후 100% 확률로 기절";
            break;
        case 13:
            rep = "3초동안 공격받지않으면 암흑 구체를 생성, 구체 1개당 받는피해 70%감소";
            break;
        case 14:
            rep = "마법숙련도 50%, 마력10, 데미지15%, 크확 20%, 공격 속도 1단계 증가";
            break;
        case 15:
            rep = "영구적으로 지력 40 증가";
            break;
        case 16:
            rep = "[빛 마법] 6명,180%,3번 공격, 회복력 800% / 쿨타임 5초";
            break;
        case 17:
            rep = "[이퀄리브리엄] 10명의 적을 230%의 데미지로 6번 공격 / 쿨 24초";
            break;
        case 18:
            rep = "상태 이상 3회 무시 / 쿨240초, [패시브효과 : 속성내성40%, 내성40증가]";
            break;
        case 19:
            rep = "MP 55 소비, 180초 동안 자신을 포함한 파티원의 마력 40증가";
            break;
        case 20:
            rep = "방어력 300 증가, 20% 확률로 피해를 무시";
            break;
        case 21:
            rep = "HP 비율과 MP 비율 중 낮은 쪽을 일정 시간마다 최대치의 2.0% 회복";
            break;
        case 22:
            rep = "빛의 길과 어둠의 길, 어떤 운명을 걸어갈지 다시 선택할 수 있다.";
            break;
        case 23:
            rep = "[빛 마법] 최대 8명의 적을 440% 데미지로 4번 공격";
            break;
        case 24:
            rep = "[어둠 마법] 8명,180%,2번 밀어내면서 공격하다가 터지면서 370% 데미지";
            break;
        case 25:
            rep = "[어둠 마법] 최대 8명의 적에게 375% 데미지로 7번 공격";
            break;
        case 26:
            rep = "[이퀄리브리엄] 2명,455%,7번 공격 /추가크확100%, 방무 40% 추가";
            break;
        case 27:
            rep = "180초동안 내성10% 무시 / [패시브효과 : 최종뎀 40%증가, 방무 40%, 스탠스60%]";
            break;
        case 28:
            rep = "스킬 적중시 80% 확률로 20초동안 데미지 4% 증가. 최대 10회까지 중첩가능";
            break;
        case 29:
            rep = "이퀄리브리엄 지속시간 7초증가/데스 사이드의 데미지 100% 증가";
            break;
        case 30:
            rep = "이퀄리브리엄 상태 시작 / 쿨타임 150초";
            break;
        case 31:
            rep = "15명,1000%,3번 공격/ 10초동안 바인드, 시전 동작 중 무적";
            break;
        case 32:
            rep = "40초동안 12명의 적을 660%의 데미지로 10번 공격 / 1명의 경우 825%";
            break;
        case 33:
            rep = "하단 참조";
            break;
        case 34:
            rep = "990%,7번 검 13번 연속 발동 / 추가크확100%, 방무100%, 쿨45초";
            break;
        case 35:
            rep = "하단 참조";
            break;
    }
    return rep;
};
sklm.getskilldesc2Lumi = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "파워 오브 라이트로 암흑 상태 이상에 저항하였습니다.";
            break;
        case 1:
            rep = "단, 마을에서는 맵 상의 랜덤한 위치로 순간 이동";
            break;
        case 2:
            rep = "루미너스 링크 스킬";
            break;
        case 3:
            rep = "\"어둠을 가르는 한줄기 빛으로!\" / \"빛을 모으겠어.\"";
            break;
        case 4:
            rep = "\"어둠이 느껴진다...\"";
            break;
        case 5:
            rep = "선파이어, 이클립스 효과 모두 적용";
            break;
        case 6:
            rep = "이퀼리브리엄 중에 공중 텔레포트 활성화";
            break;
        case 7:
            rep = "[패시브 효과 : 방어력 150 증가]";
            break;
        case 8:
            rep = "MP 증가 패시브.";
            break;
        case 9:
            rep = "튜토리얼 마지막에서 빛의 길을 선택하였을 때 얻을 수 있는 스킬이다.";
            break;
        case 10:
            rep = "튜토리얼 마지막에서 어둠의 길을 선택하였을 때 얻을 수 있는 스킬이다.";
            break;
        case 11:
            rep = "아래쪽보다는 위쪽으로 범위가 넓다.";
            break;
        case 12:
            rep = "데미지가 없는 순수 넉백기라서 라크니스 게이지에 영향을 주지 않는다.";
            break;
        case 13:
            rep = "구체 1개 : 마력 15/ 2개 : 마력 24 / 3개 : 마력 30 / 온오프스킬";
            break;
        case 14:
            rep = "숙련도를 포함한 각종 능력치를 증가시키는 패시브.";
            break;
        case 15:
            rep = "주스탯 증가 패시브.";
            break;
        case 16:
            rep = "\"빛으로 이 세계를 지켜내겠어.\" / \"치유의 빛이여.\"";
            break;
        case 17:
            rep = "\"데스 사이드!\" / \"베어라!\"";
            break;
        case 18:
            rep = "\"안티 매직쉘!\" / \"어둠에는 지지 않아!\" / 스탠스40%";
            break;
        case 19:
            rep = "\"어둠은 두렵지 않아!\" / \"어둠에는 지지 않아!\"";
            break;
        case 20:
            rep = "피해를 무시하면 IGNORE라는 문구가 뜨며 캐릭터가 웃는다.";
            break;
        case 21:
            rep = "어느 쪽이든 회복량이 체감하기 어려울 정도로 적다.";
            break;
        case 22:
            rep = "마을에서만 스킬을 사용할 수 있다. / 쿨타임 6시간";
            break;
        case 23:
            rep = "빛은 맞을때마다 갈라지며 주위 적들에게 반사되어 다수의 적에게 피해를입힌다.";
            break;
        case 24:
            rep = "쿨 5초 / [패시브 효과 : 최종뎀 36%, 보공 15% 증가]";
            break;
        case 25:
            rep = "\"사라져라.\" / \"아포칼립스!\"";
            break;
        case 26:
            rep = "쿨타임 12초 / \"사라져라!!\"";
            break;
        case 27:
            rep = "\"어둠을 받아들여라.\"/\"파괴적인 힘, 어둠이 느껴지는가.\"/\"어둠이 느껴진다.\"";
            break;
        case 28:
            rep = "모험가 법사들의 아케인 에임과 비슷하다.";
            break;
        case 29:
            rep = "반대상태 도달 시간 감소 / 공중 라이트랜스포밍 2번까지 사용 가능";
            break;
        case 30:
            rep = "\"이것으로, 끝이다!\" / \"빛과 어둠은 하나.\" / (사악한 웃음)";
            break;
        case 31:
            rep = "\"힘이..어둠이..넘쳐흐른다!! 아하하하하하!!\"/\"아마겟돈!\"/\"검은빛의 섬광이여!\"";
            break;
        case 32:
            rep = "이퀄리브리엄 상태에서 1회 사용 가능 / \"빛과 어둠은 하나.\"";
            break;
        case 33:
            rep = "설치형 다수 공격기";
            break;
        case 34:
            rep = "앱솔루트 킬 12번 적중 시 빛과 어둠의 세례 쿨타임 즉시 초기화";
            break;
        case 35:
            rep = "균형 or 불균형";
            break;
    }
    return rep;
};
sklm.getskilldesc3Lumi = function (skillcode){
    rep = "";
    switch(skillcode){
        case 6:
            rep = "빛이 되어 이동한다. 방향 키를 누른 상태로 스킬을 시전하면 원하는 방향으로 순간이동할 수 있다. 순간이동 직후 짧은 시간 투명화된다. 단, 실제로 이동하지 않을 경우 투명화 상태를 취하지 않는다.\n공중에서 위 방향키와 함께 점프키를 사용하면 높이 도약할 수 있는 라이트 리프를 사용할 수 있다. 라이트 리프 사용 후 발판이 없어도 라이트랜스포밍을 사용할 수 있다. 패시브 효과로 이동속도와 점프력이 영구히 증가한다.\n\n라이트랜스포밍 : MP 20 소비, 좌우 190 거리, 상하 320 거리를 텔레포트\n라이트 리프 : MP 25 소모하여 위로 도약, 도약 후 지상에 착지하기 전에 1회에 한해 발판이 없어도 라이트랜스포밍으로 연계 가능, 이퀄리브리엄 상태에서는 추가로 연계 가능\n[패시브 효과 : 이동속도 20, 점프력 10만큼 증가]";
            break;
        case 33:
            rep = "빛과 어둠에 공명하는 마법진을 소환한다. 라크니스의 상태에 따라 마법진이 변화하나 선파이어, 이클립스, 이퀄리브리엄 상태의 추가 효과를 받지 않는다. 공격 반사 상태의 적을 공격해도 피해를 입지 않는다.\n\nMP 1000 소비, 6초 동안 최대 10명의 적을 일정 주기마다 공격하는 마법진 소환\n선파이어 : 990%의 데미지로 4번 공격\n이클립스 : 705%의 데미지로 5번 공격\n이퀄리브리엄 : 935%의 데미지로 6번 공격\n모든 공격은 추가 크리티컬 확률 15% 적용\n\n재사용 대기시간 30초";
            break;
        case 35:
            rep = "빛과 어둠의 힘을 오브를 통해 발현한다. 라크니스에 맞는 스킬이 적중하면 오브에서 속성에 맞는 공격이 발동되고 해당 속성 마력이 오브에 쌓인다. 마력이 1 이상 쌓이면 오브를 해방하여 공격할 수 있다. 최대 HP가 가장 높은 적을 우선 공격하고 빛과 어둠 마력의 수가 같아 균형을 이루거나 쌓인 마력이 많을수록 데미지가 증가한다.\n이퀄리브리엄 상태에서는 빛과 어둠의 공격이 함께 발동하고 오브에서 발생하는 모든 공격은 선파이어, 이클립스, 이퀄리브리엄의 효과를 받지 않고 공격 반사 상태의 적을 공격해도 피해를 입지 않는다.\n\n[패시브 효과] : 825%의 데미지로 4번 공격, 재발동 대기시간 6초, 속성 당 마력 4까지 획득 가능\n빛 : 최대 3명의 적을 공격하는 빛의 영역 1개 생성\n어둠 : 최대 7명의 적을 오가는 마력 탄환 발사\n\n[액티브 효과] : MP 1200 소비, 재사용 대기시간 : 180초\n45초 동안 자신이 직접 공격하는 스킬 적중 시 마력 구체가 10개 생성되어 적 1명을 공격, 최대 20번 공격 발동 가능, 추가 크리티컬 확률 100%, 쌓인 마력의 총합이 1 초과시 초과한 마력당 데미지 125%p 증가, 재생성 대기시간 0.9초, 불균형 : 1100% 데미지의 마력 구체 생성, 균형 : 1210% 데미지의 마력 구체 생성";
            break;
        case 9:
            rep = "";
            break;
    }
    return rep;
};
sklm.getskillimage1Lumi = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "";
            break;
        case 1:
            rep = "https://i.imgur.com/ZGeW5Az.png";
            break;
        case 2:
            rep = "";
            break;
        case 3:
            rep = "";
            break;
        case 4:
            rep = "";
            break;
        case 5:
            rep = "";
            break;
        case 6:
            rep = "https://i.imgur.com/IjDtANY.png";
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
            rep = "https://i.imgur.com/B0JN4OR.png";
            break;
        case 12:
            rep = "https://i.imgur.com/fOMoNqN.png";
            break;
        case 13:
            rep = "https://i.imgur.com/zVEh6HR.png";
            break;
        case 14:
            rep = "";
            break;
        case 15:
            rep = "";
            break;
        case 16:
            rep = "https://i.imgur.com/Hxj5VTn.png";
            break;
        case 17:
            rep = "https://i.imgur.com/eLLbxuG.png";
            break;
        case 18:
            rep = "https://i.imgur.com/2GKfibe.png";
            break;
        case 19:
            rep = "https://i.imgur.com/KXDgg9O.png";
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
            rep = "https://i.imgur.com/oIJJ4k3.png";
            break;
        case 24:
            rep = "https://i.imgur.com/7dwy8Ki.png";
            break;
        case 25:
            rep = "https://i.imgur.com/iWHViqc.png";
            break;
        case 26:
            rep = "https://i.imgur.com/M4j6MEf.png";
            break;
        case 27:
            rep = "https://i.imgur.com/HyFV0mV.png";
            break;
        case 28:
            rep = "https://i.imgur.com/d6rJv8j.png";
            break;
        case 29:
            rep = "";
            break;
        case 30:
            rep = "https://i.imgur.com/HZx68PS.png";
            break;
        case 31:
            rep = "https://i.imgur.com/9dx9p15.png";
            break;
        case 32:
            rep = "https://i.imgur.com/hJ3J2AQ.png";
            break;
        case 33:
            rep = "https://i.imgur.com/fqcDQqb.png";
            break;
        case 34:
            rep = "https://i.imgur.com/ligV7to.png";
            break;
        case 35:
            rep = "https://i.imgur.com/CJwXO7W.png";
            break;
    }
    return rep;
};
sklm.getskillimage2Lumi = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "https://i.imgur.com/5PqbOfs.png";
            break;
        case 1:
            rep = "https://i.imgur.com/u1zNghX.png";
            break;
        case 2:
            rep = "https://i.imgur.com/DbbJ5Em.png";
            break;
        case 3:
            rep = "https://i.imgur.com/iKk7vWE.png";
            break;
        case 4:
            rep = "https://i.imgur.com/rTb5CDi.png";
            break;
        case 5:
            rep = "https://i.imgur.com/2i6XyBF.png";
            break;
        case 6:
            rep = "https://i.imgur.com/rojvK0K.png";
            break;
        case 7:
            rep = "https://i.imgur.com/ot0ADO8.png";
            break;
        case 8:
            rep = "https://i.imgur.com/EHZHZ8I.png";
            break;
        case 9:
            rep = "https://i.imgur.com/udpzg4F.png";
            break;
        case 10:
            rep = "https://i.imgur.com/nRqLNZH.png";
            break;
        case 11:
            rep = "https://i.imgur.com/Py75W9v.png";
            break;
        case 12:
            rep = "https://i.imgur.com/1YqQPDH.png";
            break;
        case 13:
            rep = "https://i.imgur.com/f6KmpIh.png";
            break;
        case 14:
            rep = "https://i.imgur.com/71gKsIe.png";
            break;
        case 15:
            rep = "https://i.imgur.com/HoIWneE.png";
            break;
        case 16:
            rep = "https://i.imgur.com/885v8Bi.png";
            break;
        case 17:
            rep = "https://i.imgur.com/XgCl7lH.png";
            break;
        case 18:
            rep = "https://i.imgur.com/8bhODKb.png";
            break;
        case 19:
            rep = "https://i.imgur.com/C3NbK8a.png";
            break;
        case 20:
            rep = "https://i.imgur.com/XwwfThv.png";
            break;
        case 21:
            rep = "https://i.imgur.com/BnkQmWt.png";
            break;
        case 22:
            rep = "https://i.imgur.com/NY6H0tp.png";
            break;
        case 23:
            rep = "https://i.imgur.com/oDkxBoB.png";
            break;
        case 24:
            rep = "https://i.imgur.com/PtNChRY.png";
            break;
        case 25:
            rep = "https://i.imgur.com/6AN1GHS.png";
            break;
        case 26:
            rep = "https://i.imgur.com/DfGpBtc.png";
            break;
        case 27:
            rep = "https://i.imgur.com/5WllJaq.png";
            break;
        case 28:
            rep = "https://i.imgur.com/THRyWE0.png";
            break;
        case 29:
            rep = "https://i.imgur.com/xxF7MhC.png";
            break;
        case 30:
            rep = "https://i.imgur.com/M2mEhWE.png";
            break;
        case 31:
            rep = "https://i.imgur.com/VHHSkPA.png";
            break;
        case 32:
            rep = "https://i.imgur.com/T7D1lT2.png";
            break;
        case 33:
            rep = "https://i.imgur.com/waRwKI9.png";
            break;
        case 34:
            rep = "https://i.imgur.com/sreZpnK.png";
            break;
        case 35:
            rep = "https://i.imgur.com/wxsfvMT.png";
            break;
    }
    return rep;
};

module.exports = sklm;