const skr = {};

skr.getskillRara = function (skillname){
    var rret = -1;
    switch(skillname){
        case "큰 기지개":
        case "큰기지개":
        case "기지개":
            rret = 0;
            break;
        case "해 강 산 바람":
        case "해강산 바람":
        case "해강산바람":
            rret = 1;
            break;
        case "용솟음치는 정기":
        case "용솟음치는정기":
        case "용솟음":
        case "용정":
            rret = 2;
            break;
        case "산등성이 굽이굽이":
        case "산등성이굽이굽이":
        case "산등성이":
        case "굽이굽이":
        case "산굽":
            rret = 3;
            break;
        case "정령친화":
            rret = 4;
            break;
        case "정기 뿌리기":
        case "정기뿌리기":
        case "정뿌":
        case "주력기":
            rret = 5;
            break;
        case "폴짝":
        case "더블 점프":
        case "더블점프":
            rret = 6;
            break;
        case "위로 폴짝":
        case "위로폴짝":
        case "윗폴":
        case "윗점":
            rret = 7;
            break;
        case "산 꼬마":
        case "산꼬마":
        case "파이널 어택":
        case "파이널어택":
        case "파택":
            rret = 8;
            break;
        case "산 무등":
        case "산무등":
        case "매직 가드":
        case "매직가드":
            rret = 9;
            break;
        case "감응":
            rret = 10;
            break;
        case "용맥 읽기":
        case "용맥읽기":
        case "읽기":
            rret = 11;
            break;
        case "용맥 분출":
        case "용맥분출":
        case "분출":
            rret = 12;
            break;
        case "분출 : 너울이는 강":
        case "분출 : 너울이는강":
        case "분출:너울이는강":
        case "분출 너울이는 강":
        case "분출 너울이는강":
        case "분출너울이는강":
        case "강 분출":
        case "강분출":
            rret = 13;
            break;
        case "분출 : 돌개바람":
        case "분출:돌개바람":
        case "분출 돌개바람":
        case "분출돌개바람":
        case "바람 분출":
        case "바람분출":
            rret = 14;
            break;
        case "분출 : 해돋이 우물":
        case "분출 : 해돋이우물":
        case "분출:해돋이우물":
        case "분출 해돋이 우물":
        case "분출 해돋이우물":
        case "분출해돋이우물":
        case "해 분출":
        case "해분출":
        case "햇살 분출":
        case "햇살분출":
            rret = 15;
            break;
        case "산의 씨앗":
        case "산의씨앗":
        case "씨앗":
            rret = 16;
            break;
        case "발현 : 강줄기 흐르는 곳":
        case "발현 : 강줄기 흐르는곳":
        case "발현 : 강줄기흐르는곳":
        case "발현:강줄기흐르는곳":
        case "발현 강줄기 흐르는 곳":
        case "발현 강줄기 흐르는곳":
        case "발현 강줄기흐르는곳":
        case "발현강줄기흐르는곳":
        case "강 발현":
        case "강발현":
            rret = 17;
            break;
        case "발현 : 바람 그네":
        case "발현 : 바람그네":
        case "발현:바람그네":
        case "발현 바람 그네":
        case "발현 바람그네":
        case "발현바람그네":
        case "바람 발현":
        case "바람발현":
            rret = 18;
            break;
        case "발현 : 햇살 가득 안은 터":
        case "발현 : 햇살가득 안은 터":
        case "발현 : 햇살가득 안은터":
        case "발현 : 햇살가득안은터":
        case "발현:햇살가득안은터":
        case "발현 햇살 가득 안은 터":
        case "발현 햇살가득 안은 터":
        case "발현 햇살가득 안은터":
        case "발현 햇살가득안은터":
        case "발현햇살가득안은터":
        case "햇살 발현":
        case "햇살발현":
        case "해 발현":
        case "해발현":
            rret = 19;
            break;
        case "잠 깨우기":
        case "잠깨우기":
        case "잠 꺠우기":
        case "잠꺠우기":
            rret = 20;
            break;
        case "용맥의 자취":
        case "용맥의자취":
        case "자취":
            rret = 21;
            break;
        case "용맥의 메아리":
        case "용맥의메아리":
        case "메아리":
            rret = 22;
            break;
        case "무구":
            rret = 23;
            break;
        case "풍수지리":
            rret = 24;
            break;
        case "용맥 흡수":
        case "용맥흡수":
        case "흡수":
            rret = 25;
            break;
        case "흡수 : 강 웅덩이 물벼락":
        case "흡수 : 강웅덩이 물벼락":
        case "흡수 : 강웅덩이물벼락":
        case "흡수:강웅덩이물벼락":
        case "흡수 강 웅덩이 물벼락":
        case "흡수 강웅덩이 물벼락":
        case "흡수 강웅덩이물벼락":
        case "흡수강웅덩이물벼락":
        case "강 흡수":
        case "강흡수":
            rret = 26;
            break;
        case "흡수 : 소소리 바람":
        case "흡수 : 소소리바람":
        case "흡수:소소리바람":
        case "흡수 소소리 바람":
        case "흡수 소소리바람":
        case "흡수소소리바람":
        case "바람 흡수":
        case "바람흡수":
            rret = 27;
            break;
        case "흡수 : 햇빛 맹아리":
        case "흡수 : 햇빛맹아리":
        case "흡수:햇빛맹아리":
        case "흡수 햇빛 맹아리":
        case "흡수 햇빛맹아리":
        case "흡수햇빛맹아리":
        case "해 흡수":
        case "해흡수":
        case "햇살 흡수":
        case "햇살흡수":
            rret = 28;
            break;
        case "용맥 변환":
        case "용맥변환":
        case "변환":
            rret = 29;
            break;
        case "풍월주인":
        case "풍월":
            rret = 30;
            break;
        case "지음":
            rret = 31;
            break;
        case "산 에움":
        case "산에움":
        case "뎀감기":
            rret = 32;
            break;
        case "풍수지리 심화":
        case "풍수지리심화":
            rret = 33;
            break;
        case "혜안":
        case "헤안":
            rret = 34;
            break;
        case "유유":
        case "유우":
        case "우유":
            rret = 35;
            break;
        case "자유로운 용맥":
        case "자유로운용맥":
        case "자유":
            rret = 36;
            break;
        case "넝쿨 타래":
        case "넝쿨타래":
        case "넝쿨":
        case "넝타":
        case "바인드":
            rret = 37;
            break;
        case "아름드리 나무":
        case "아름드리나무":
        case "아름드리":
        case "아나":
            rret = 38;
            break;
        case "":
            rret = 39;
            break;
    }
    return rret;
};
skr.getskillnameRara = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "큰 기지개";
            break;
        case 1:
            rep = "해 강 산 바람";
            break;
        case 2:
            rep = "용솟음치는 정기";
            break;
        case 3:
            rep = "산등성이 굽이굽이";
            break;
        case 4:
            rep = "정령친화";
            break;
        case 5:
            rep = "정기 뿌리기";
            break;
        case 6:
            rep = "폴짝";
            break;
        case 7:
            rep = "위로 폴짝";
            break;
        case 8:
            rep = "산 꼬마";
            break;
        case 9:
            rep = "산 무등";
            break;
        case 10:
            rep = "감응";
            break;
        case 11:
            rep = "용맥 읽기";
            break;
        case 12:
            rep = "용맥 분출";
            break;
        case 13:
            rep = "분출 : 너울이는 강";
            break;
        case 14:
            rep = "분출 : 돌개바람";
            break;
        case 15:
            rep = "분출 : 해돋이 우물";
            break;
        case 16:
            rep = "산의 씨앗";
            break;
        case 17:
            rep = "발현 : 강줄기 흐르는 곳";
            break;
        case 18:
            rep = "발현 : 바람 그네";
            break;
        case 19:
            rep = "발현 : 햇살 가득 안은 터";
            break;
        case 20:
            rep = "잠 깨우기";
            break;
        case 21:
            rep = "용맥의 자취";
            break;
        case 22:
            rep = "용맥의 메아리";
            break;
        case 23:
            rep = "무구";
            break;
        case 24:
            rep = "풍수지리";
            break;
        case 25:
            rep = "용맥 흡수";
            break;
        case 26:
            rep = "흡수 : 강 웅덩이 물벼락";
            break;
        case 27:
            rep = "흡수 : 소소리 바람";
            break;
        case 28:
            rep = "흡수 : 햇빛 맹아리";
            break;
        case 29:
            rep = "용맥 변환";
            break;
        case 30:
            rep = "풍월주인";
            break;
        case 31:
            rep = "지음";
            break;
        case 32:
            rep = "산 에움";
            break;
        case 33:
            rep = "풍수지리 심화";
            break;
        case 34:
            rep = "혜안";
            break;
        case 35:
            rep = "유유";
            break;
        case 36:
            rep = "자유로운 용맥";
            break;
        case 37:
            rep = "넝쿨 타래";
            break;
        case 38:
            rep = "아름드리 나무";
            break;
        case 39:
            rep = "";
            break;
    }
    return rep;
};
skr.getskilldesc1Rara = function (skillcode){
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
            rep = "소환수 지속시간 10% 증가";
            break;
        case 5:
            rep = "최대 5명의 적을 80% 데미지로 4번 공격";
            break;
        case 6:
            rep = "점프 중 한 번 더 도약하여 멀리 뛴다.";
            break;
        case 7:
            rep = "위 방향키와 점프키를 함께 입력하여 발동할 수 있다.";
            break;
        case 8:
            rep = "정기 뿌리기 적중 시 40%의 확률로 산의 토지령 등장";
            break;
        case 9:
            rep = "피격 시 MP 40을 소비하여 피격 데미지 70% 감소";
            break;
        case 10:
            rep = "이동속도 20, 최대 이동속도 15, 점프력 20";
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
            rep = "용맥 소모 시 최대 HP 1%와 최대 MP 5% 회복 후";
            break;
        case 23:
            rep = "데미지 20%, 보스 몬스터 공격 시 데미지 10%";
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
            rep = "스킬 사용 후 3초 이내에 방향키를 입력, 속성 변환";
            break;
        case 30:
            rep = "하단 참조";
            break;
        case 31:
            rep = "정기 뿌리기의 공격 범위, MP 소비량 25";
            break;
        case 32:
            rep = "하단 참조";
            break;
        case 33:
            rep = "하단 참조";
            break;
        case 34:
            rep = "크리티컬 확률 20%, 크리티컬 데미지 20%";
            break;
        case 35:
            rep = "마력 50, 상태이상 내성 30";
            break;
        case 36:
            rep = "하단 참조";
            break;
        case 37:
            rep = "하단 참조";
            break;
        case 38:
            rep = "하단 참조";
            break;
        case 39:
            rep = "";
            break;
    }
    return rep;
};
skr.getskilldesc2Rara = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "\"피하기 어려울걸요?\"";
            break;
        case 1:
            rep = "\"모두 준비됐지?\"";
            break;
        case 2:
            rep = "\"땅의 정기가 느껴져!\"";
            break;
        case 3:
            rep = "\"얘들아, 가자 가자!\"";
            break;
        case 4:
            rep = "아니마 특성";
            break;
        case 5:
            rep = "주력 공격기";
            break;
        case 6:
            rep = "용맥 관련 스킬들은 공중에서 사용 불가";
            break;
        case 7:
            rep = "땅에서만 사용 가능";
            break;
        case 8:
            rep = "최대 4명, 85%, 3번 공격, 보스는 105% 데미지로 공격";
            break;
        case 9:
            rep = "온오프 스킬";
            break;
        case 10:
            rep = "최대 HP 20%, 방어력 100 증가, 피격 데미지 15% 감소";
            break;
        case 11:
            rep = "온오프 스킬";
            break;
        case 12:
            rep = "용맥 스킬";
            break;
        case 13:
            rep = "용맥 스킬 / 분출 스킬";
            break;
        case 14:
            rep = "용맥 스킬 / 분출 스킬";
            break;
        case 15:
            rep = "용맥 스킬 / 분출 스킬";
            break;
        case 16:
            rep = "보조 소환수 스킬 / 자동 온오프 : 우클릭 ";
            break;
        case 17:
            rep = "용맥 스킬 / 발현 스킬";
            break;
        case 18:
            rep = "용맥 스킬 / 발현 스킬";
            break;
        case 19:
            rep = "용맥 스킬 / 발현 스킬";
            break;
        case 20:
            rep = "용맥 스킬";
            break;
        case 21:
            rep = "순간이동 및 다수 공격기";
            break;
        case 22:
            rep = "20초 동안 최종 데미지 5% 증가";
            break;
        case 23:
            rep = "크확 20% 증가, 최대 MP 30% 증가, 스탠스 40% 증가";
            break;
        case 24:
            rep = "-";
            break;
        case 25:
            rep = "용맥 스킬";
            break;
        case 26:
            rep = "용맥 스킬 / 흡수 스킬";
            break;
        case 27:
            rep = "용맥 스킬 / 흡수 스킬";
            break;
        case 28:
            rep = "용맥 스킬 / 흡수 스킬";
            break;
        case 29:
            rep = "쿨 3초, 속성 변환 성공 시 스킬 쿨 4초 증가";
            break;
        case 30:
            rep = "분출 스킬 강화 패시브";
            break;
        case 31:
            rep = "최대 공격 가능한 몬스터 수 1, 데미지 306%로 증가";
            break;
        case 32:
            rep = "고정피해 패턴은 막지 못함";
            break;
        case 33:
            rep = "-";
            break;
        case 34:
            rep = "최종 데미지 45%, 몬스터 방어율 무시 40% 증가";
            break;
        case 35:
            rep = "모든 속성 내성 30% 증가, 스탠스 60% 증가";
            break;
        case 36:
            rep = "용맥 생성 스킬";
            break;
        case 37:
            rep = "바인드";
            break;
        case 38:
            rep = "설치형 액티브 버프";
            break;
        case 39:
            rep = "";
            break;
    }
    return rep;
};
skr.getskilldesc3Rara = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "[용맥 스킬]\n주변에 잠들어 있는 다수의 용맥의 힘을 한 번에 일깨운다. 정제되지 않은 방식으로 깨워진 용맥에서 무형의 기운이 생성되어 주변의 적을 추적 공격한다. 무형의 기운은 범위 내의 보스 몬스터를 우선하여 추적하며, 보스 몬스터가 여럿일 경우 최대 HP가 가장 높은 몬스터를 우선하여 추적한다. 용맥의 일깨워진 시점에 보스 몬스터가 없으면 각 용맥 주변의 몬스터를 추적한다. 큰 기지개는 자유로운 용맥이 아닌 가까운 용맥을 우선 소모하며 공격 반사 상태의 적을 공격해도 피해를 입지 않고 시전 동작 중 스탠스 100%가 적용된다.\n\nMP 500 소비, 용맥 일정 범위 내의 용맥 5개 한번에 일깨움\n\n일어난 용맥 하나당 무형의 기운 7개 생성, 무형의 기운은 1100% 데미지로 5번 공격\n하나의 적이 같은 용맥에서 생성된 무형의 기운에 여러 번 공격당하면 두 번째 기운부터 최종 데미지 30% 감소\n\n재사용 대기시간 60초, 최대로 일깨울 수 있는 용맥보다 일깨운 용맥이 적을 때 차이나는 용맥 1개당 재사용 대기시간 12초 감소";
            break;
        case 1:
            rep = "대자연 속에 존재하는 모든 종류의 토지령을 불러내 함께 뛰논다. 해 강 산 바람은 공격 반사 상태의 적을 공격해도 피해를 입지 않는다.\n\nMP 1200 소비, 산, 강, 바람, 해의 토지령이 차례로 나타나 최대 10명의 적을 1540%의 데미지로 10번 공격하는 충격이 3번씩 발동한 후 최대 10명의 적을 1870%의 데미지로 15번 공격하는 폭발 7번 발동\n재사용 대기시간 180초";
            break;
        case 2:
            rep = "땅에 흐르는 정기에 마력을 담아 크게 개화시키면 보다 강력한 정기에 이끌린 산의 토지령이 솟아오른다. 공격 반사 상태의 적을 공격해도 피해를 입지 않는다.\n\nMP 80 소비, 최대 10명의 적을 935% 데미지로 8번 공격하는 충격이 5번 발동\n재사용 대기시간 20초";
            break;
        case 3:
            rep = "달리는 것을 좋아하는 특이한 산의 토지령들을 불러낸다. 불린 것에 신난 산의 토지령들이 주변을 달리며 부딪히는 것들을 공격한다. 주변에 보스 몬스터가 있으면 보스 몬스터의 주변에서 솟아나며 공격 반사 상태의 적을 공격해도 피해를 입지 않지만 솟아날 발판이 없다면 사용할 수 없다.\n\nMP 500 소비, 일정 범위 내에 산의 토지령 무리 3개 소환, 소환된 무리는 30초 동안 유지되며 주변의 적을 향해 달려 일정 간격으로 최대 6명의 적을 550%의 데미지로 4번 공격, 적에게 부딪히면 달리는 속도 감소, 무리당 총 20번까지 공격 가능\n\n재사용 대기시간 60초";
            break;
        case 11:
            rep = "지맥을 읽어 땅의 정기가 모이는 용맥의 위치를 발견할 수 있게 된다. 용맥은 자연 요소 중 하나의 힘을 강하게 머금어 강, 바람, 해의 힘 중 하나를 지닌다. 발견한 용맥은 용맥 스킬을 사용하면 소모된다. 마을에서는 용맥을 발견할 수 없다.\n\n라라 주변의 용맥 발견, 맵에 최대 10개의 용맥이 존재할 수 있고 멀어질 경우 가장 멀리 떨어져 있는 용맥부터 소멸\n재사용 대기시간 5초";
            break;
        case 12:
            rep = "주변의 용맥을 소모하여 용맥에 잠재되어 있는 힘을 분출시킨다. 용맥이 머금은 속성에 해당하는 토지령들이 분출된 자리에 머물며 논다. 분출 스킬 지속 중 동일 속성의 분출 스킬이나 흡수 스킬이 발동되면 지속 중이던 분출 스킬은 종료된다. 분출 스킬은 자유로운 용맥을 가장 우선하며 자유로운 용맥이 없다면 가까운 용맥을 우선 소모한다. 공격 반사 상태의 적을 공격해도 피해를 입지 않고 시전 동작 중 스탠스 100%가 적용된다. 분출 스킬은 소환수 지속시간 증가로 지속시간이 증가하지 않지만 그에 비례해서 위력이 강해진다.\n\nMP 30 소비, 용맥의 속성에 맞는 분출 스킬 발동\n소환수 지속시간 증가 2%당 분출 스킬의 데미지 1% 증가\n재사용 대기시간 0.3초";
            break;
        case 13:
            rep = "여러 강의 토지령이 힘을 합쳐 거대화한 후 일정 간격으로 너울을 일으켜 주변을 공격한다.\n\n16초 동안 강의 토지령 유지, 강의 토지령이 일으킨 너울은 최대 6명의 적을 260% 데미지로 4번 공격, 너울은 최대 8번 발생";
            break;
        case 14:
            rep = "바람의 토지령이 일정 시간마다 크게 숨을 내뱉는다. 바람의 토지령의 숨결로 돌개바람이 생성되어 주변의 적을 지속 공격한다.\n\n16초 동안 바람의 토지령 유지, 바람의 토지령이 만든 돌개바람은 최대 6명의 적을 90% 데미지로 5번 지속 공격, 돌개바람은 최대 5번 생성";
            break;
        case 15:
            rep = "여러 해의 토지령이 힘을 합쳐 무서운 거인이 된 후 흩어져 내리며 주변을 용암이 솟아오르는 지역으로 만든다. 용암 지역에서 일정 간격으로 화산탄이 생성되어 용암 지역 위의 적을 공격한다. 화산탄은 범위 내의 보스 몬스터를 우선하여 추적하며, 보스 몬스터가 여럿일 경우 최대 HP가 가장 높은 몬스터를 우선하여 추적한다.\n\n거인이 솟아오르며 최대 6명의 적을 145% 데미지로 6번 공격, 공격 후 16초 동안 용암 지역 형성, 용암 지역은 1초마다 최대 10명의 적을 110% 데미지로 1번 공격\n일정 간격마다 적을 95% 데미지로 3번 공격하는 화산탄이 4개 생성, 화산탄은 최대 5번 생성되며 하나의 적이 여러 개의 화산탄에 맞을 경우 두번째 화산탄부터 최종 데미지 10% 감소, 화산탄에 맞은 적은 8초 동안 60%의 도트 데미지";
            break;
        case 16:
            rep = "산의 토지령이 자라나는 씨앗을 심는다. 씨앗이 심어진 자리에 산의 토지령이 자라나 주변 적을 공격하고 일정 범위 안에 어떤 속성이든 분출 스킬이 지속 중인 경우 적을 분출 스킬쪽으로 밀어낸다. 산의 씨앗은 공격 반사 상태의 적을 공격해도 피해를 입지 않는다.\n용맥 분출 스킬 시전 중 산의 씨앗을 사용하면 시전 동작 없이 씨앗을 심을 수 있고 아래 방향키와 함께 사용하면 준비된 모든 씨앗을 한 번에 심을 수 있다. 자동 사용 모드에서는 씨앗이 준비되어 있다면 분출 스킬을 사용할 때마다 용맥이 있던 위치에 산의 씨앗이 심어진다.\n\nMP 20 소비, 자라난 산의 토지령은 10초 동안 지속되며 일정 간격마다 최대 6명의 적을 55% 데미지로 1번 공격\n산의 토지령은 맵에 최대 4마리까지 존재 가능\n산의 씨앗은 7초마다 1개씩 준비되며 최대 4개까지 소지 가능";
            break;
        case 17:
            rep = "용맥에 담긴 강의 힘이 발현하며 흐르는 강을 타고 이동할 수 있게 된다. 스킬 사용 후 일정 시간 안에 스킬을 재사용하면 강줄기의 도착점을 지정할 수 있다. 도착점이 지정되면 시작점과 도착점 사이에 강줄기가 지속적으로 흐르며 라라가 시작점 혹은 도착점에서 위 방향키를 입력하면 강을 타고 이동할 수 있다. 도착점은 포탈이 있는 위치 및 일부 위치에는 지정할 수 없고 사냥 맵이 아닌 일부 맵에서는 사용할 수 없다. 발현 스킬은 자유로운 용맥을 가장 우선하며 자유로운 용맥이 없다면 가까운 용맥을 우선 소모한다. 시전 동작 중 스탠스 100%가 적용된다. 강을 타고 이동 중 발현 : 강줄기 흐르는 곳을 제외한 용맥을 소모하는 스킬을 1회 사용할 수 있고 소모할 수 있는 범위가 증가하며 이동한 거리에 비례해 용맥을 소모하는 스킬을 추가로 사용할 수 있다. 해당 스킬은 버프 프리저의 효과를 받지 않는다.\n\nMP 80 소비, 스킬 사용 시 20초 동안 도착점 지정 가능, 도착점 지정 시 90초 동안 시작점과 도착점을 흐르는 강줄기 생성, 시작점에서 위 방향키 입력 시 강줄기를 타고 이동 가능\n\n재사용 대기시간 60초\n[패시브 효과 : 너울이는 강의 데미지 120%p 증가]";
            break;
        case 18:
            rep = "용맥에 담긴 바람의 힘이 발현하여 상승 기류가 지속해서 발생하는 영역이 생성된다. 공격 속도와 이동속도, 점프력이 일정 시간 동안 증가되는 버프를 얻을 수 있고 영역 안에 있을 때 공중에서 위 방향키와 점프키를 키다운 하면 바람이 밀어주는 그네를 타고 부유할 수 있다. 발현 스킬은 자유로운 용맥을 가장 우선하며 자유로운 용맥이 없다면 가까운 용맥을 우선 소모한다. 시전 동작 중 스탠스 100%가 적용된다.\n\nMP 80 소비, 30초 동안 지속되는 바람 그네 설치\n영역에 들어오면 공격 속도 1단계, 이동 속도 20, 점프력 20만큼 증가하는 버프 지급\n해당 버프는 자신에게는 120초, 파티원에게는 20초 동안 지속\n바람 그네 영역 내에서 위 방향키와 점프키 키다운 시 최대 4.5초 동안 부유 가능\n\n재사용 대기시간 60초\n[패시브 효과 : 돌개바람의 데미지 35%p 증가]";
            break;
        case 19:
            rep = "용맥에 담긴 해의 힘이 발현하며 따스한 햇살이 내리쬐는 터를 생성한다. 일정 시간 데미지가 증가하는 버프를 받을 수 있고 영역 안에서는 햇살이 지닌 생명의 힘으로 일정 시간마다 HP가 회복된다. 발현 스킬은 자유로운 용맥을 가장 우선하며 자유로운 용맥이 없다면 가까운 용맥을 우선 소모한다. 시전 동작 중 스탠스 100%가 적용된다.\n\nMP 80 소비, 20초 동안 지속되는 햇살이 내리쬐는 터 설치, 영역에 들어오면 데미지 25% 증가하는 버프 지급\n해당 버프는 자신에게는 120초, 파티원에게는 20초 지속\n영역 안에는 2초마다 최대 HP의 10% 회복\n재사용 대기시간 60초\n\n[패시브 효과 : 해돋이 우물의 데미지 48%p 증가]";
            break;
        case 20:
            rep = "잠들어 있는 용맥의 힘을 정제되지 않은 방식으로 깨우면 무형의 기운으로 변해 주변의 적을 추적 공격한다. 잠 깨우기는 자유로운 용맥이 아닌 가까운 용맥을 우선으로 소모하며 공격 반사 상태의 적을 공격해도 피해를 입지 않고 시전 동작 중 스탠스 100%가 적용된다.\n\nMP 30 소비, 무형의 기운은 범위 내의 적의 수만큼 생성되며 최소 7개에서 최대 12개 생성 가능, 각 무형의 기운은 105% 데미지로 4번 공격\n하나의 적이 여러 개의 생성된 무형의 기운에 공격당하면 두 번째 기운부터 최종 데미지 40% 감소\n\n재사용 대기시간 9초";
            break;
        case 21:
            rep = "땅의 기운이 강하게 응집된 곳에 마력을 불어넣어 아직 영글지 않은 용맥을 피워 낸다. 피어난 용맥은 분출, 흡수할 수 없지만 라라의 마력이 남아 어디에서든 자취를 쫓을 수 있게 된다. 용맥을 피워낸 후 스킬 재사용 시 용맥의 위치로 순식간에 이동하고 이동 후 용맥 주위의 적을 공격한다. 용맥을 피워낸 후 아래 방향키와 함께 스킬 재사용하면 용맥의 위치를 변경할 수 있다.\n\nMP 65 소비, 100초 동안 지속되는 영글지 않은 용맥을 생성, 스킬을 재사용 하여 해당 위치로 이동\n이동 시 최대 5명의 적을 500% 데미지로 2번 공격\n\n재사용 대기시간 1초";
            break;
        case 24:
            rep = "풍수지리를 공부하여 스킬의 위력을 증가시킨다.\n\n정기 뿌리기의 데미지 50%p 증가\n산 꼬마의 데미지 50%p 증가\n산 꼬마의 보스 데미지 45%p 증가\n산의 씨앗의 데미지 75%p 증가";
            break;
        case 25:
            rep = "주변의 용맥을 소모하여 용맥에 잠재되어 있는 힘을 흡수한다. 용맥이 머금은 속성에 해당하는 힘이 라라에게 흡수되어 정기 뿌리기 혹은 잠 깨우기 적중 시 흡수된 속성의 토지령들이 나타나 라라를 도와 공격한다. 흡수 스킬 지속 중 동일 속성의 분출 스킬이 발동되면 지속 중인 흡수 스킬은 종료된다. 흡수 스킬은 자유로운 용맥을 가장 우선하며 자유로운 용맥이 없다면 가까운 용맥을 우선 소모한다. 공격 반사 상태의 적을 공격해도 피해를 입지 않고 시전 동작 중 스탠스 100%가 적용된다.\n\nMP 30 소비, 용맥의 속성에 맞는 흡수 스킬 발동\n재사용 대기시간 0.3초";
            break;
        case 26:
            rep = "정기 뿌리기 적중 시 장난꾸러기 강의 토지령이 강 웅덩이와 함께 등장하여 적에게 물벼락을 뿌려 공격한다.\n\n90초 동안 정기 뿌리기 적중 시 강의 토지령이 나타나 최대 6명의 적을 510% 데미지로 6번 공격\n재발동 대기시간 2.5초";
            break;
        case 27:
            rep = "정기 뿌리기 적중 시 바람의 토지령이 조용히 나타나 적을 지속 공격하는 소소리 바람을 일으킨다.\n\n90초 동안 자신이 정기 뿌리기 적중 시 적중한 적 중 하나의 위치에 소소리 바람이 발생, 소소리 바람은 최대 6명의 적을 250% 데미지로 2번 지속 공격\n재발동 대기시간 2.5초";
            break;
        case 28:
            rep = "정기 뿌리기 적중 시 해의 토지령이 모여 뜨거운 햇빛이 응축된 화염구를 뿜어내 적을 추적 공격한다. 화염구는 범위 내의 보스 몬스터를 우선하여 추적하며, 보스 몬스터가 여럿일 경우 최대 HP가 가장 높은 몬스터를 우선하여 추적한다.\n\n90초 동안 정기 뿌리기 적중 시 해의 토지령이 나타나 화염구 5개를 뿜어 공격, 화염구는 주변의 적을 추적하여 265% 데미지로 6번 공격\n하나의 적에게 여러 개의 화염구가 적중했을 때 두 번째 화염구부터 최종 데미지 40% 감소\n재발동 대기시간 2.5초";
            break;
        case 30:
            rep = "자연을 즐기고 하나가 되어 자연의 힘을 더욱 잘 다룰 수 있게 된다. 분출 스킬 사용 시 용맥에서 더 많은 잠재력을 끌어낼 수 있어 분출 스킬의 위력이 증가한다.\n\n분출 스킬 유지 시간 18초로 증가\n\n너울이는 강 : 너울의 최대 공격 가능한 몬스터 수 2 증가, 공격 횟수 5번으로 증가 및 750% 데미지로 공격, 일정 간격으로 큰 너울이 발생하여 최대 10명의 적을 860% 데미지로 8번 공격, 일반 너울과 큰 너울 합하여 너울 총 9번 발생\n돌개바람 : 돌개바람의 범위 증가, 최대 공격 가능한 몬스터 수 4 증가 및 445% 데미지로 공격\n해돋이 우물 : 거인의 최대 공격 가능한 몬스터 수 4 증가 및 750% 데미지로 공격, 용암 지역 생성 범위 증가 및 용암 지역이 420% 데미지로 공격, 화산탄이 450% 데미지로 공격, 화산탄에 맞은 적에 125%의 도트 데미지 적용, 화산탄이 더 자주 생성되며 한 번에 5개씩 최대 5번 생성";
            break;
        case 32:
            rep = "모든 생명을 포근히 안아주는 산의 힘으로 몸을 감싸 피해를 줄인다. 산 에움은 재사용 대기시간 초기화의 효과를 받지 않고 시전 중 치명적인 상태 이상에 걸리지 않는다.\n\nMP 150 소비, 최대 8초 동안 키다운 가능하고 키다운 중 최대 HP의 일정 비율로 피해를 입히는 공격을 포함한 피격 데미지 55% 감소\n스킬 종료 시 남은 키다운 시간 1초마다 재사용 대기시간 3.5초 감소\n\n재사용 대기시간 60초";
            break;
        case 33:
            rep = "풍수지리에 통달하여 스킬의 위력이 증가한다.\n\n산 꼬마 등장 확률 70%로 증가 및 산 꼬마의 공격 범위 증가\n산 꼬마 데미지 178%p 증가, 보스 몬스터 공격 시 데미지는 222%p 증가\n산의 씨앗 데미지 230%p 증가, 산의 씨앗의 지속 시간 20초로 증가\n잠 깨우기 데미지 95%p 증가\n용맥의 자취 데미지 55%p 증가";
            break;
        case 36:
            rep = "어떤 힘이든 머금을 수 있는 자유로운 용맥을 생성한다. 아래 방향키와 함께 스킬 사용 시 준비된 용맥을 한 번에 생성할 수 있다. 단, 용맥을 모두 생성할 수 있는 공간이 충분하지 않을 경우 생성 가능한 만큼만 생성된다.\n\n생성된 자유로운 용맥에 분출, 흡수, 발현 스킬을 사용하면 원하는 속성으로 용맥의 힘을 끌어낼 수 있다. 자유로운 용맥은 용맥 읽기가 활성화된 상태에서만 사용 가능하고 재사용 대기시간 초기화의 효과를 받지 않으며 시전 동작 중 스탠스 100%가 적용된다. 자유로운 용맥을 생성 중 용맥 분출, 용맥 흡수를 사용하면 자유로운 용맥의 시전 동작을 하지 않고 분출, 흡수할 속성을 선택할 수 있다.\n\nMP 500 소비, 전방에 자유로운 용맥 생성\n자유로운 용맥에 용맥 분출, 용맥 흡수 사용 시 2초 동안 끌어내고자 하는 속성 선택 가능\n자유로운 용맥은 한 맵에 최대 3개까지 존재 가능\n자유로운 용맥은 10초마다 1개씩 준비되며 최대 3개까지 소지 가능\n\n재사용 대기시간 1.5초";
            break;
        case 37:
            rep = "넝쿨과 바위를 엮어 적을 옴짝달싹 못하게 만든다.\n\nMP 300 소비, 최대 6명의 적을 700% 데미지로 6번 공격\n공격당한 적은 10초 동안 행동 불가 상태 적용\n넝쿨 타래로 적에게 준 데미지에 따라 행동 불가 지속시간 최대 100% 증가\n\n재사용 대기시간 180초";
            break;
        case 38:
            rep = "토지령들이 마음껏 뛰놀 수 있는 아름드리 나무를 자라나게 한다. 아름드리 나무에 있으면 자연의 순수한 기운으로 능력치가 비약적으로 상승하고 몬스터가 약화된다. 재사용 대기시간 초기화의 효과를 받지 않는다.\n\nMP 500 소비, 30초 동안 지속되는 아름드리 나무 소환\n아름드리 나무의 영역에 들어왔던 몬스터는 아름드리 나무의 남은 지속시간 동안 15%만큼 방어율 감소\n영역 내에 있을 때 라라의 스탠스 100%, 보스 몬스터 공격 시 데미지 30%, 크리티컬 데미지 10% 증가\n2초마다 라라의 상태이상 해제\n\n재사용 대기시간 180초";
            break;
        case 39:
            rep = "";
            break;
    }
    return rep;
};
skr.getskillimage1Rara = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "https://i.imgur.com/nTBHYcY.png";
            break;
        case 1:
            rep = "https://i.imgur.com/Wv2tvCo.png";
            break;
        case 2:
            rep = "https://i.imgur.com/ubQa2bm.png";
            break;
        case 3:
            rep = "https://i.imgur.com/rH6lwdT.png";
            break;
        case 4:
            rep = "";
            break;
        case 5:
            rep = "https://i.imgur.com/Y4fJhxH.png";
            break;
        case 6:
            rep = "https://i.imgur.com/S98ViEh.png";
            break;
        case 7:
            rep = "https://i.imgur.com/93BzLhb.png";
            break;
        case 8:
            rep = "https://i.imgur.com/oVHoD4T.png";
            break;
        case 9:
            rep = "https://i.imgur.com/gCIQoWL.png";
            break;
        case 10:
            rep = "";
            break;
        case 11:
            rep = "https://i.imgur.com/ZT1AGKx.png";
            break;
        case 12:
            rep = "";
            break;
        case 13:
            rep = "https://i.imgur.com/1s4hJsW.png";
            break;
        case 14:
            rep = "https://i.imgur.com/xzktibT.png";
            break;
        case 15:
            rep = "https://i.imgur.com/CuixlcS.png";
            break;
        case 16:
            rep = "https://i.imgur.com/jJEpngY.png";
            break;
        case 17:
            rep = "https://i.imgur.com/db8VKgS.png";
            break;
        case 18:
            rep = "https://i.imgur.com/QunduAT.png";
            break;
        case 19:
            rep = "https://i.imgur.com/ypShmAS.png";
            break;
        case 20:
            rep = "https://i.imgur.com/zHqJZop.png";
            break;
        case 21:
            rep = "https://i.imgur.com/nc8UCNx.png";
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
            rep = "https://i.imgur.com/Yqv5czC.png";
            break;
        case 27:
            rep = "https://i.imgur.com/JtW5bRA.png";
            break;
        case 28:
            rep = "https://i.imgur.com/rDOyZJC.png";
            break;
        case 29:
            rep = "https://i.imgur.com/LLiA10y.png";
            break;
        case 30:
            rep = "";
            break;
        case 31:
            rep = "https://i.imgur.com/1i1rC3w.png";
            break;
        case 32:
            rep = "https://i.imgur.com/TudfRgX.png";
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
            rep = "https://i.imgur.com/tAmHtn4.png";
            break;
        case 37:
            rep = "https://i.imgur.com/iUD6GcE.png";
            break;
        case 38:
            rep = "https://i.imgur.com/iUsZHMo.png";
            break;
        case 39:
            rep = "";
            break;
    }
    return rep;
};
skr.getskillimage2Rara = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "https://i.imgur.com/VERYpRU.png";
            break;
        case 1:
            rep = "https://i.imgur.com/K3UGsvP.png";
            break;
        case 2:
            rep = "https://i.imgur.com/M9rrVwm.png";
            break;
        case 3:
            rep = "https://i.imgur.com/aUQoowr.png";
            break;
        case 4:
            rep = "https://i.imgur.com/xO63ETd.png";
            break;
        case 5:
            rep = "https://i.imgur.com/m6um1IO.png";
            break;
        case 6:
            rep = "https://i.imgur.com/GXBOU96.png";
            break;
        case 7:
            rep = "https://i.imgur.com/TH5VPRD.png";
            break;
        case 8:
            rep = "https://i.imgur.com/V5M8gHC.png";
            break;
        case 9:
            rep = "https://i.imgur.com/7yLwmfs.png";
            break;
        case 10:
            rep = "https://i.imgur.com/f5pOpOv.png";
            break;
        case 11:
            rep = "https://i.imgur.com/wngFzaT.png";
            break;
        case 12:
            rep = "https://i.imgur.com/o0soZgH.png";
            break;
        case 13:
            rep = "https://i.imgur.com/u7l1sCd.png";
            break;
        case 14:
            rep = "https://i.imgur.com/5y4o2Pi.png";
            break;
        case 15:
            rep = "https://i.imgur.com/0tiVLkt.png";
            break;
        case 16:
            rep = "https://i.imgur.com/D9p3MZ3.png";
            break;
        case 17:
            rep = "https://i.imgur.com/CeDqTpo.png";
            break;
        case 18:
            rep = "https://i.imgur.com/2tVuNpO.png";
            break;
        case 19:
            rep = "https://i.imgur.com/I929nDC.png";
            break;
        case 20:
            rep = "https://i.imgur.com/2Mo7Jmm.png";
            break;
        case 21:
            rep = "https://i.imgur.com/DyMvNGc.png";
            break;
        case 22:
            rep = "https://i.imgur.com/u7Me42a.png";
            break;
        case 23:
            rep = "https://i.imgur.com/Jvm8JFM.png";
            break;
        case 24:
            rep = "https://i.imgur.com/VSykpkB.png";
            break;
        case 25:
            rep = "https://i.imgur.com/m91CDIZ.png";
            break;
        case 26:
            rep = "https://i.imgur.com/tSzgZRJ.png";
            break;
        case 27:
            rep = "https://i.imgur.com/guaCgB5.png";
            break;
        case 28:
            rep = "https://i.imgur.com/CPVYeLV.png";
            break;
        case 29:
            rep = "https://i.imgur.com/ipnQbKf.png";
            break;
        case 30:
            rep = "https://i.imgur.com/t19qpuA.png";
            break;
        case 31:
            rep = "https://i.imgur.com/JS6vstt.png";
            break;
        case 32:
            rep = "https://i.imgur.com/KB7Yx4N.png";
            break;
        case 33:
            rep = "https://i.imgur.com/odLfigs.png";
            break;
        case 34:
            rep = "https://i.imgur.com/jKzNT6l.png";
            break;
        case 35:
            rep = "https://i.imgur.com/TQG0u1F.png";
            break;
        case 36:
            rep = "https://i.imgur.com/7znMQKb.png";
            break;
        case 37:
            rep = "https://i.imgur.com/Lis6g5P.png";
            break;
        case 38:
            rep = "https://i.imgur.com/vLhHEIN.png";
            break;
        case 39:
            rep = "";
            break;
    }
    return rep;
};

module.exports = skr;