const skh = {};

skh.getskillHoyoung = function (skillname){
    var hret = -1;
    switch(skillname){
        case "선기 : 극대 분신난무":
        case "선기 : 극대분신난무":
        case "선기:극대분신난무":
        case "선기 극대 분신난무":
        case "선기 극대분신난무":
        case "선기극대분신난무":
        case "극대 분신난무":
        case "극대분신난무":
        case "분신난무":
            hret = 0;
            break;
        case "권술 : 산령소환":
        case "권술:산령소환":
        case "권술 산령소환":
        case "권술산령소환":
        case "산령소환":
            hret = 1;
            break;
        case "선기 : 강림 괴력난신":
        case "선기 : 강림괴력난신":
        case "선기:강림괴력난신":
        case "선기강림괴력난신":
        case "선기 강림 괴력난신":
        case "선기 강림괴력난신":
        case "강림 괴력난신":
        case "강림괴력난신":
        case "괴력난신":
            hret = 2;
            break;
        case "선기 : 천지인 환영":
        case "선기 : 천지인환영":
        case "선기:천지인환영":
        case "선기 천지인 환영":
        case "선기 천지인환영":
        case "선기천지인환영":
        case "천지인 환영":
        case "천지인환영":
            hret = 3;
            break;
        case "정령친화":
        case "정친":
            hret = 4;
            break;
        case "괴이봉인":
        case "도철":
            hret = 5;
            break;
        case "부적 도력":
        case "부적도력":
        case "부적":
            hret = 6;
            break;
        case "여의선 : 인":
        case "여의선:인":
        case "여의선 인":
        case "여의선인":
        case "여의선":
            hret = 7;
            break;
        case "초상비":
        case "트리플 점프":
        case "트리플점프":
        case "트점":
            hret = 8;
            break;
        case "근두운":
        case "공중부양":
            hret = 9;
            break;
        case "경공":
            hret = 10;
            break;
        case "토파류 : 지":
        case "토파류:지":
        case "토파류 지":
        case "토파류지":
        case "토파류":
            hret = 11;
            break;
        case "토파류 : 허/실":
        case "토파류:허/실":
        case "토파류 허/실":
        case "토파류허/실":
        case "토파류 : 허실":
        case "토파류:허실":
        case "토파류허실":
            hret = 12;
            break;
        case "환영 분신부":
        case "환영분신부":
        case "분신부":
            hret = 13;
            break;
        case "암행":
        case "다크 사이트":
        case "다크사이트":
        case "닼사":
            hret = 14;
            break;
        case "심안":
            hret = 15;
            break;
        case "운신":
            hret = 16;
            break;
        case "두루마리 도력":
        case "두루마리도력":
        case "두루마리":
            hret = 17;
            break;
        case "파초풍 : 천":
        case "파초풍:천":
        case "파초풍 천":
        case "파초풍천":
        case "파초풍":
            hret = 18;
            break;
        case "파초풍 : 허/실":
        case "파초풍:허/실":
        case "파초풍 허/실":
        case "파초풍허/실":
        case "파초풍 : 허실":
        case "파초풍:허실":
        case "파초풍 허실":
        case "파초풍허실":
            hret = 19;
            break;
        case "지진쇄 : 지":
        case "지진쇄:지":
        case "지진쇄 지":
        case "지진쇄지":
        case "지진쇄":
            hret = 20;
            break;
        case "지진쇄 : 허/실":
        case "지진쇄:허/실":
        case "지진쇄 허/실":
        case "지진쇄허/실":
        case "지진쇄 : 허실":
        case "지진쇄:허실":
        case "지진쇄허실":
            hret = 21;
            break;
        case "추적 귀화부":
        case "추적귀화부":
        case "귀화부":
        case "추귀":
            hret = 22;
            break;
        case "권술 : 미생강변":
        case "권술:미생강변":
        case "권술 미생강변":
        case "권술미생강변":
        case "미생강변":
            hret = 23;
            break;
        case "득의":
            hret = 24;
            break;
        case "수라":
            hret = 25;
            break;
        case "금강":
            hret = 26;
            break;
        case "조식":
            hret = 27;
            break;
        case "멸화염 : 천":
        case "멸화염:천":
        case "멸화염 천":
        case "멸화염천":
        case "멸화염":
            hret = 28;
            break;
        case "멸화염 : 허/실":
        case "멸화염:허/실":
        case "멸화염 허/실":
        case "멸화염허/실":
        case "멸화염 : 허실":
        case "멸화염:허실":
        case "멸화염 허실":
        case "멸화염허실":
            hret = 29;
            break;
        case "금고봉 : 인":
        case "금고봉:인":
        case "금고봉 인":
        case "금고봉인":
        case "금고봉":
        case "여의봉":
            hret = 30;
            break;
        case "둔갑 천근석":
        case "둔갑천근석":
        case "천근석":
        case "둔천":
        case "하강이동":
        case "하강":
            hret = 31;
            break;
        case "왜곡 축지부":
        case "왜곡축지부":
        case "축지부":
        case "왜축":
        case "텔포":
            hret = 32;
            break;
        case "권술 : 흡성와류":
        case "권술:흡성와류":
        case "권술 흡성와류":
        case "권술흡성와류":
        case "흡성와류":
        case "와류":
            hret = 33;
            break;
        case "권술 : 호접지몽":
        case "권술:호접지몽":
        case "권술 호접지몽":
        case "권술호접지몽":
        case "호접지몽":
            hret = 34;
            break;
        case "득도":
            hret = 35;
            break;
        case "점정":
            hret = 36;
            break;
        case "선기 : 영약 태을선단":
        case "선기 : 영약태을선단":
        case "선기:영약 태을선단":
        case "선기:영약태을선단":
        case "선기 영약 태을선단":
        case "선기 영약태을선단":
        case "선기영약태을선단":
        case "영약 태을선단":
        case "영약태을선단":
        case "태을선단":
        case "영약":
            hret = 37;
            break;
        case "선기 : 몽유도원":
        case "선기:몽유도원":
        case "선기 몽유도원":
        case "선기몽유도원":
        case "몽유도원":
        case "무적기":
            hret = 38;
            break;
        case "선기 : 분신 둔갑 태을선인":
        case "선기 : 분신둔갑 태을선인":
        case "선기 : 분신둔갑태을선인":
        case "선기:분신둔갑태을선인":
        case "선기분신둔갑태을선인":
        case "분신 둔갑 태을선인":
        case "분신둔갑 태을선인":
        case "분신 둔갑태을선인":
        case "분신둔갑태을선인":
        case "태을선인":
        case "바인드":
            hret = 39;
            break;
    }
    return hret;
};
skh.getskillnameHoyoung = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "선기 : 극대 분신난무";
            break;
        case 1:
            rep = "권술 : 산령소환";
            break;
        case 2:
            rep = "선기 : 강림 괴력난신";
            break;
        case 3:
            rep = "선기 : 천지인 환영";
            break;
        case 4:
            rep = "정령친화";
            break;
        case 5:
            rep = "괴이봉인";
            break;
        case 6:
            rep = "부적 도력";
            break;
        case 7:
            rep = "여의선 : 안";
            break;
        case 8:
            rep = "초상비";
            break;
        case 9:
            rep = "근두운";
            break;
        case 10:
            rep = "경공";
            break;
        case 11:
            rep = "토파류 : 지";
            break;
        case 12:
            rep = "토파류 : 허/실";
            break;
        case 13:
            rep = "환영 분신부";
            break;
        case 14:
            rep = "암행";
            break;
        case 15:
            rep = "심안";
            break;
        case 16:
            rep = "운신";
            break;
        case 17:
            rep = "두루마리 도력";
            break;
        case 18:
            rep = "파초풍 : 천";
            break;
        case 19:
            rep = "파초풍 : 허/실";
            break;
        case 20:
            rep = "지진쇄 : 지";
            break;
        case 21:
            rep = "지진쇄 : 허/실";
            break;
        case 22:
            rep = "추적 귀화부";
            break;
        case 23:
            rep = "권술 : 미생강변";
            break;
        case 24:
            rep = "득의";
            break;
        case 25:
            rep = "수라";
            break;
        case 26:
            rep = "금강";
            break;
        case 27:
            rep = "조식";
            break;
        case 28:
            rep = "멸화염 : 천";
            break;
        case 29:
            rep = "멸화염 : 허/실";
            break;
        case 30:
            rep = "금고봉 : 인";
            break;
        case 31:
            rep = "둔갑 천근석";
            break;
        case 32:
            rep = "왜곡 축지부";
            break;
        case 33:
            rep = "권술 : 흡성와류";
            break;
        case 34:
            rep = "권술 : 호접지몽";
            break;
        case 35:
            rep = "득도";
            break;
        case 36:
            rep = "점정";
            break;
        case 37:
            rep = "선기 : 영약 태을선단";
            break;
        case 38:
            rep = "선기 : 몽유도원";
            break;
        case 39:
            rep = "선기 : 분신 둔갑 태을선인";
            break;
    }
    return rep;
};
skh.getskilldesc1Hoyoung = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "30초간 공격시 분신 10개 생성, 생성후 1.5초간 재생성X/ 쿨 180초";
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
            rep = "공격력 10%, 최종 데미지 10% 증가";
            break;
        case 6:
            rep = "하단 참조";
            break;
        case 7:
            rep = "[인 속성 도술] 최대 5명의 적을 90% 데미지로 5번 공격";
            break;
        case 8:
            rep = "일정 거리 점프, 두 번까지 사용 가능";
            break;
        case 9:
            rep = "공중에서 키다운 하거나 위 방향키와 함께 점프 키를 키다운";
            break;
        case 10:
            rep = "이동속도 20 증가, 이동속도 상한 20 증가";
            break;
        case 11:
            rep = "[지 속성 도술] 최대 6명의 적을 100% 데미지로 4번 공격";
            break;
        case 12:
            rep = "지면의 기운을 타고 빠르게 돌진한다.";
            break;
        case 13:
            rep = "하단 참조";
            break;
        case 14:
            rep = "하단 참조";
            break;
        case 15:
            rep = "크리티컬 확률 30%";
            break;
        case 16:
            rep = "근두운 스킬의 지속시간 및 비행속도 증가";
            break;
        case 17:
            rep = "하단 참조";
            break;
        case 18:
            rep = "[천 속성 도술] 최대 6명의 적을 150% 데미지로 5번 공격";
            break;
        case 19:
            rep = "실의 경우 공격 성공 시 적을 밟고 다시 공중으로 도약한다.";
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
            rep = "공격력 50, 크리티컬 확률 10%, 크리티컬 데미지 20%";
            break;
        case 26:
            rep = "최대 HP 20%, 스탠스 확률 20% 증가";
            break;
        case 27:
            rep = "상태 이상 내성 30 증가, 모든 속성 내성 30% 증가";
            break;
        case 28:
            rep = "하단 참조";
            break;
        case 29:
            rep = "멸화염:천 사용 후 공중으로 솟아오르며 화염을 일으킨다.";
            break;
        case 30:
            rep = "하단 참조";
            break;
        case 31:
            rep = "하단 참조";
            break;
        case 32:
            rep = "하단 참조";
            break;
        case 33:
            rep = "하단 참조";
            break;
        case 34:
            rep = "하단 참조";
            break;
        case 35:
            rep = "하단 참조";
            break;
        case 36:
            rep = "공격력 10, 최종 데미지 10%, 크확 10%, 크뎀 10%";
            break;
        case 37:
            rep = "12초간 일정시간마다 부적 도력 35, 두루마리 도력 350 회복";
            break;
        case 38:
            rep = "하단 참조";
            break;
        case 39:
            rep = "하단 참조";
            break;
    }
    return rep;
};
skh.getskilldesc2Hoyoung = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "환영 분신부 지속시간 중에만 사용/ 환영분신부에서 440%p 증가, 4번공격";
            break;
        case 1:
            rep = "[두루마리 도술] / 설치형 소환수 스킬";
            break;
        case 2:
            rep = "막타 미사용시 자동으로 발동되지 않고 스킬이 종료된다.";
            break;
        case 3:
            rep = "금고봉 : 인을 난사에 가깝게 사용가능";
            break;
        case 4:
            rep = "아니마 특성";
            break;
        case 5:
            rep = "레벨 190 퀘스트 완료시 최종뎀 획득";
            break;
        case 6:
            rep = "1차 연계 자원";
            break;
        case 7:
            rep = "부채로 직접 타격된 적은 여의선 : 인의 최종 데미지 5% 증가";
            break;
        case 8:
            rep = "MP 소모량이 적다 (5)";
            break;
        case 9:
            rep = "이후 방향키를 조작하여 일정시간 자유롭게 비행할 수 있다.";
            break;
        case 10:
            rep = "-";
            break;
        case 11:
            rep = "전방 방향키와 함께 스킬 키를 한 번 더 누르면 실, 안하면 허";
            break;
        case 12:
            rep = "최대 6명의 적을 100% 데미지로 4번 공격";
            break;
        case 13:
            rep = "[부적 도술]";
            break;
        case 14:
            rep = "패시브형 다크 사이트";
            break;
        case 15:
            rep = "크리티컬 데미지 10% 증가";
            break;
        case 16:
            rep = "점프력 20 증가";
            break;
        case 17:
            rep = "2차 연계 자원";
            break;
        case 18:
            rep = "전방 방향키와 함께 스킬 키를 한 번 더 누르면 실, 안하면 허";
            break;
        case 19:
            rep = "최대 6명의 적을 150% 데미지로 5번 공격";
            break;
        case 20:
            rep = "[지 속성 도술] 지면에 발을 붙인 상태에서만 사용 가능";
            break;
        case 21:
            rep = "지진쇄 : 지의 후속 연계기";
            break;
        case 22:
            rep = "[부적 도술]";
            break;
        case 23:
            rep = "[두루마리 도술]";
            break;
        case 24:
            rep = "3차 이전 스킬 강화";
            break;
        case 25:
            rep = "보스 몬스터 공격 시 데미지 20%, 방어율 무시 10% 증가";
            break;
        case 26:
            rep = "피격 데미지 15% 감소";
            break;
        case 27:
            rep = "속성 연계 3단계 성공 시 최대 HP, MP의 3% 회복";
            break;
        case 28:
            rep = "[천 속성 도술]";
            break;
        case 29:
            rep = "최대 8명의 적을 370% 데미지로 6번 공격";
            break;
        case 30:
            rep = "[인 속성 도술]";
            break;
        case 31:
            rep = "수직 하강형 다수 공격기";
            break;
        case 32:
            rep = "[부적 도술]";
            break;
        case 33:
            rep = "[두루마리 도술]";
            break;
        case 34:
            rep = "[두루마리 도술]";
            break;
        case 35:
            rep = "4차 이전 스킬 강화";
            break;
        case 36:
            rep = "방어율 무시 10%, 회피율 10% 증가, 스탠스 60% 증가";
            break;
        case 37:
            rep = "사용즉시 부적/두루마리도력 완충 / 쿨 90초";
            break;
        case 38:
            rep = "무적 및 회피기";
            break;
        case 39:
            rep = "바인드";
            break;
    }
    return rep;
};
skh.getskilldesc3Hoyoung = function (skillcode){
    rep = "";
    switch(skillcode){
        case 1:
            rep = "두루마리를 펼쳐 선유산의 신령으로 군림하는 거대한 호랑이를 모셔온다. 속성 연계 3단계에 성공할 때 마다 호랑이가 감응하여 천지를 놀라게 할 표효를 내질러 더 강력한 피해를 입힌다.\n권술 : 산령소환은 공격 반사 상태의 적을 공격해도 피해를 입지 않는다.\n\n두루마리 도력 900 소비, 60초 동안 최대 12명의 적을 1980% 데미지로 8번 공격\n속성 연계 3단계 성공하면 다음 공격 시 일반 공격 대신 일정 시간마다 770% 데미지로 4번 공격하는 포효 발동\n모든 공격은 3초의 재발동 대기시간을 가짐\n\n재사용 대기시간 : 180초";
            break;
        case 2:
            rep = "근원을 알 수 없는 미지의 신들로부터 힘을 빌린다. 일정 시간 동안 신들의 힘을 받아 데미지가 증가하며 일정 횟수만큼 공격을 적중 시킬 때 마다 차원을 넘은 신들의 일격이 도달한다.\n스킬을 한 번 더 사용하면 짧은 시간 동안 신들을 직접 강림시켜 강력한 공격을 할 수 있다.\n\n선기 : 강림 괴력난신은 공격 반사 상태의 적을 공격해도 피해를 입지 않으며 최대 HP가 가장 높은 보스 몬스터를 우선 공격한다.\n\nMP 1000 소비, 30초 동안 데미지 80% 증가\n지속시간 중 공격을 12회 적중시킬 때 마다 최대 8명의 적을 1870% 데미지로 8번 공격하는 신들의 일격 발동, 재발동 대기시간 1.5초\n스킬 재사용 시 즉시 종료되며 최대 15명의 적을 2200% 데미지로 15번 공격하는 충격이 6번 발생하는 신들의 강림 발동\n\n신들의 강림은 시전 동작 중 무적이며 공격 무시 및 공격 반사 상태의 적에게도 피해를 입힘\n신들의 강림 발동 시 30초 동안 천/지/인 속성 스킬 및 허/실 스킬의 데미지가 20% 증가\n\n재사용 대기시간 : 180초";
            break;
        case 3:
            rep = "도술의 이치를 터득해 속성 연계를 할 수 있는 특별한 분신을 만들어낸다. 허/실 스킬을 제외한 직접 공격하는 호영의 스킬 적중 시 분신이 등장하여 현재 연계하지 않은 속성 공격을 하고 속성 연계를 완성시킨다.\n액티브 효과 지속 중 속성 연계 3단계 달성 시 천/지/인 도술 중 한 속성 도술의 재사용 대기시간이 초기화되며 속성 선택 시 재사용 대기시간 중인 스킬이 있는 속성이 우선된다.\n선기 : 천지인 환영은 공격 반사 상태의 적을 공격해도 피해를 입지 않는다.\n\n패시브 효과 : 최대 4명의 적을 1375%의 데미지로 6번 공격하는 분신 등장, 재등장 대기시간 5초\n액티브 효과 : MP 1250 소비, 30초 동안 패시브 효과가 재등장 대기시간 없이 2번 발동 가능, 이후 재등장 대기시간 2초로 적용\n재사용 대기시간 : 90초";
            break;
        case 6:
            rep = "천/지/인 속성 도술 적중 시 부적 도력이 충전된다. 부적 도력을 소비하여 부적 도술을 사용할 수 있다.\n부적 도력은 최대 100까지 충전할 수 있다.\n\n- 천/지/인 속성 도술 적중 시 부적 도력 충전\n- 각 속성 스킬 적중 시 속성 연계 단계 및 부적 도력 충전량 증가 (1단계: 10, 2단계: 15, 3단계: 20)\n- 속성 연계 3단계 달성 시 연계 단계 초기화";
            break;
        case 13:
            rep = "부적을 분신으로 둔갑시켜 적을 농락하는 신출귀몰한 공격을 펼친다. 일정 시간 동안 적을 공격 시 일정 확률로 분신이 나와 주위의 적을 공격한다.\n설치기나 소환수에 의한 공격으로는 분신이 생성되지 않는다.\n\n환영 분신부는 공격 반사 상태의 적을 공격해도 피해를 입지 않으며 최대 HP가 가장 높은 보스 몬스터를 우선 추적한다.\n\n부적 도력 100 소비, 200초 동안 공격 시 분신 3개 생성, 각 분신은 60% 데미지로 4번 공격, 일반 몬스터 공격 시 데미지 20% 증가\n단, 분신이 생성된 다음 1.5초 동안 다시 생성되지 않음";
            break;
        case 14:
            rep = "분신 공격 후 어둠에 몸을 숨겨 적이 실체를 찾지 못하게 한다. 은신 상태에서는 적에게 부딪히지 않으나 공격 스킬 사용 시 은신이 해제된다.\n\n토파류 : 허, 지진쇄 : 허, 파초풍 : 허, 멸화염 : 허 시전 시 2초 간 은신 상태, 은신 중 공격 스킬 사용 시 은신 해제\n최대 HP의 일정 비율로 피해를 입히는 공격을 회피하였을 경우 다크 사이트의 남은 지속 시간이 최대치의 20% 만큼 감소\n\n[패시브 효과 : 회피율 20% 증가]";
            break;
        case 17:
            rep = "사부님의 도술첩을 보고 두루마리 도술을 깨우쳤다.\n부적 도술 사용 시 두루마리 도력이 충전된다. 두루마리 도력을 소비하여 두루마리 도술을 사용할 수 있다.\n두루마리 도력은 최대 900까지 충전할 수 있다.\n\n- 천/지/인 속성 도술 적중 시 두루마리 도력 15 충전\n- 부적 도술 사용 시 두루마리 도력 200 충전\n- 속성 도술 사용 시 이전에 사용한 속성과 다르다면 해당 도술의 최종데미지 5% 증가";
            break;
        case 20:
            rep = "지면을 강하게 내리찍어 땅으로 부터 거대한 암석을 밀어 올린다. 지상에서만 사용할 수 있다.\n사용 중 왼쪽 또는 오른쪽 방향키와 함께 스킬 키를 한 번 더 누르면 자신이 직접 순간 이동하는 지진쇄 : 실로 연계되며 지진쇄 : 실로 연계하지 않을 경우 분신이 공격하는 지진쇄 : 허로 연계된다.\n\nMP 70 소비, 최대 10명의 적을 180% 데미지로 6번 공격, 일반 몬스터의 경우 5초 동안 기절\n재사용 대기시간 : 6초";
            break;
        case 21:
            rep = "지진쇄 : 지와 스킬 레벨을 공유하는 연계 스킬이다. 지진쇄 : 지 사용 후 암석의 끝으로 순간 이동하여 암석을 무너뜨린다.\n지진쇄 : 실의 경우 방향키와 조합하여 왼쪽 또는 오른쪽으로 선택하여 이동할 수 있고 지진쇄 : 허의 경우 자신의 전방으로만 이동한다.\n지진쇄 : 허는 공격 반사 상태의 적을 공격해도 피해를 입지 않는다.\n\n지진쇄 : 지 사용 후 지진쇄 : 허 또는 지진쇄 : 실로 연계 가능, 암석 끝으로 순간 이동한 후 최대 10명의 적을 180% 데미지로 6번 공격";
            break;
        case 22:
            rep = "부적을 도깨비불로 둔갑시켜 적을 추적하여 공격한다. 도깨비불은 공격 후 일정 시간 머물렀다가 다시 가까운 적을 추적하여 공격한다.\n\n추적 귀화부는 공격 반사 상태의 적을 공격해도 피해를 입지 않으며 최대 HP가 가장 높은 보스 몬스터를 우선 추적한다.\n\n부적 도력 100 소비, 40초 동안 도깨비불 소환, 1.8초마다 가까운 적을 추적한 후 최대 5명의 적을 210% 데미지로 5번 공격";
            break;
        case 23:
            rep = "두루마리에서 신비한 빛이 뻗어나 빛에 닿은 적을 일정 시간 하찮은 미물로 변이시킨다. 적에게 빛이 닿을 때 마다 주위 적에게 반사되어 다수의 적을 변이시키지만 보스 몬스터에게는 변이가 통하지 않는다.\n\n두루마리 도력 900 소비, 최대 15명의 적을 450% 데미지로 8번 공격, 보스 몬스터 공격 시 데미지 20% 증가\n일반 몬스터의 경우 60초 동안 공격하지 않는 몬스터로 변이 및 방어율 20% 감소, 보스 몬스터의 경우 방어율 감소 효과만 적용";
            break;
        case 24:
            rep = "도술의 의미를 이해해 도술의 데미지를 강화시킨다.\n\n여의선 : 인의 데미지 205%p 증가\n토파류 류 스킬의 데미지 100%p 증가\n마봉 호로부의 데미지 200%p 증가\n환영 분신부의 분신 공격 데미지 60%p 증가";
            break;
        case 28:
            rep = "부채를 크게 휘둘러 부정한 것들을 멸하는 큰 화염을 일으킨다. 공중에서만 사용할 수 있다.\n사용 중 위쪽 방향키와 함께 스킬 키를 한 번 더 누르면 자신이 직접 공중으로 솟아오르는 멸화염 : 실로 연계되며 멸화염 : 실로 연계하지 않을 경우 분신이 공격하는 멸화염 : 허로 연계된다.\n재사용 대기시간 초기화의 효과를 받지 않는다.\n\nMP 90 소비, 최대 8명의 적을 370% 데미지로 6번 공격, 사용 후 초상비 및 근두운 사용 초기화\n재사용 대기시간 : 8초";
            break;
        case 30:
            rep = "전설의 도사가 사용했다는 신묘한 무기를 소환해 적을 빠르게 난타한다.\n\nMP 90 소비, 최대 10명의 적을 282% 데미지로 10번 공격한 후 458% 데미지로 8번 공격하며 마무리 일격\n보스 몬스터 공격 시 데미지 30% 증가\n\n재사용 대기시간 : 11초";
            break;
        case 31:
            rep = "천근에 달하는 인면석으로 둔갑 후 급강하 해 지상의 적을 덮친다. 공중에서만 사용할 수 있으며 스킬 키를 직접 누르거나 아래 방향 키를 두 번 연타하여 사용할 수 있다.\n시전 시를 기준으로 일정 범위 안의 적에게만 피해를 줄 수 있다.\n파초풍 : 천, 파초풍 : 실, 멸화염 : 천, 멸화염 : 실 사용 중에서 연계하여 사용할 수 있다.\n\nMP 50 소비, 공중에서 사용 시 수직으로 하강하며 최대 7명의 적을 275% 데미지로 6번 공격\n공격당한 적은 10초 동안 1초마다 270%의 데미지의 출혈 상태 이상\n\n재사용 대기시간 : 0.5초";
            break;
        case 32:
            rep = "부적을 공간을 왜곡시키는 축지문으로 둔갑시킨다. 지속 시간 중 스킬 재사용 시 자신이 있는 위치에 흔적을 남긴 후 축지문으로 순간 이동한다.\n축지문 근처에서 스킬 재사용 시 흔적을 남긴 위치로 이동할 수 있다.\n축지문이 개방되어 있을 때 위 방향키와 함께 사용하면 부적 도력을 사용하여 현재 존재하는 축지문과 흔적을 소멸시키고 새로운 축지문을 개방시킬 수 있다.\n\n부적 도력 100 소비, 100초 동안 축지문을 개방\n스킬 재사용 시 축지문으로 순간이동, 축지문 근처에서 스킬 사용 시 흔적을 남긴 위치로 이동, 이동 및 새로운 축지문 개방은 5초마다 가능\n\n[패시브 효과 : 20% 확률로 추가 회피]";
            break;
        case 33:
            rep = "두루마리를 펼쳐 적의 정기를 흡수하는 강렬한 소용돌이를 불러낸다. 스킬을 재사용하여 소용돌이를 소멸시킬 수 있고 흡수한 정기의 수에 비례해 파티원의 HP와 MP를 회복시킨다.\n권술 : 흡성와류는 공격 반사 상태의 적을 공격해도 피해를 입지 않는다.\n\n두루마리 도력 900 소비, 40초 동안 256% 데미지로 6번 공격하는 소용돌이 생성\n공격 적중 횟수 4회당 정기를 1개 흡수할 수 있고 최대 9개까지 흡수 가능, 보스 몬스터를 공격했다면 정기를 3배로 흡수\n스킬 재사용 시 소용돌이가 소멸하며 정기 1개당 파티원의 최대 HP와 MP의 5% 회복";
            break;
        case 34:
            rep = "두루마리를 펼쳐 아름답지만 치명적인 오색의 나비를 불러낸다. 일정 시간 동안 공격 시 적을 추적하여 공격하는 나비가 소환된다.\n\n권술 : 호접지몽은 공격 반사 상태의 적을 공격해도 피해를 입지 않으며 최대 HP가 가장 높은 보스 몬스터를 우선 추적한다.\n\n두루마리 도력 900 소비, 100초 동안 최종 데미지 10% 증가 및 공격 시 297% 데미지로 공격하는 나비를 5마리 소환\n단, 나비가 생성된 다음 1초 동안 다시 생성되지 않음\n권술 : 미생강변의 데미지 400%p 증가";
            break;
        case 35:
            rep = "도술의 이치를 깨달아 도술의 데미지를 다시 한번 강화시킨다.\n\n데미지 10% 증가\n여의선 : 인의 데미지 307%p 증가\n토파류 류 스킬의 데미지 220%p 증가\n파초풍 류 스킬의 데미지 141%p 증가\n지진쇄 류 스킬의 데미지 245%p 증가\n마봉 호로부의 데미지 550%p 증가\n환영 분신부의 분신 공격 데미지 110%p 증가\n추적 귀화부의 데미지 215%p 증가";
            break;
        case 38:
            rep = "선계의 풍경을 담은 두루마리로 들어가 긴박한 전투 중의 망중지한을 누린다.\n스킬 종료 시 키다운 시간에 비례해 재사용 대기시간이 감소되고 재사용 대기시간 초기화의 효과를 받지 않는다.\n공중 및 1~4차 스킬 사용 중에도 사용할 수 있다. 단, 금고봉 : 인은 마무리 일격 중에서만 사용할 수 있다.\n\n최대 MP의 10% 소비, 시전 및 키다운 유지 중 무적, 최대 키다운 시간 20초\n스킬 종료 시 남은 키다운 시간 1초마다 재사용 대기시간 9.3초 감소\n\n재사용 대기시간 : 200초";
            break;
        case 39:
            rep = "사부님에게 귀에 못이 박히게 들었던 지겨운 잔소리를 재현한다. 사부님의 잔소리는 주위의 적을 행동 불가 상태로 만든다.\n공격을 받은 적은 90초 동안 행동 불가 상태 이상에 저항하여 선기 : 분신 둔갑 태을선인 및 다른 스킬로 인한 행동 불가 상태 이상에 걸리지 않는다.\n\n최대 HP의 15% 소비, 최대 8명의 적을 800% 데미지로 8번 공격\n공격 당한 적은 11초 동안 행동 불가 상태\n해당 공격으로 적에게 준 데미지에 따라 행동 불가 지속시간 최대 100% 증가\n\n재사용 대기시간 : 180초";
            break;
    }
    return rep;
};
skh.getskillimage1Hoyoung = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "https://i.imgur.com/KIRc5Tq.png";
            break;
        case 1:
            rep = "https://i.imgur.com/RMd0Y9R.png";
            break;
        case 2:
            rep = "https://i.imgur.com/fgiLDgB.png";
            break;
        case 3:
            rep = "https://i.imgur.com/OZNWQGt.png";
            break;
        case 4:
            rep = "";
            break;
        case 5:
            rep = "";
            break;
        case 6:
            rep = "https://i.imgur.com/c7pD81x.png";
            break;
        case 7:
            rep = "https://i.imgur.com/RG8Yl01.png";
            break;
        case 8:
            rep = "https://i.imgur.com/zLIScek.png";
            break;
        case 9:
            rep = "https://i.imgur.com/yclkOVu.png";
            break;
        case 10:
            rep = "";
            break;
        case 11:
            rep = "https://i.imgur.com/612b0dA.png";
            break;
        case 12:
            rep = "https://i.imgur.com/NBC4Chf.png";
            break;
        case 13:
            rep = "https://i.imgur.com/nPVgvCM.png";
            break;
        case 14:
            rep = "https://i.imgur.com/bgowdFN.png";
            break;
        case 15:
            rep = "";
            break;
        case 16:
            rep = "";
            break;
        case 17:
            rep = "https://i.imgur.com/o3CncV0.png";
            break;
        case 18:
            rep = "https://i.imgur.com/22N9Zqu.png";
            break;
        case 19:
            rep = "https://i.imgur.com/Z3NFJ82.png";
            break;
        case 20:
            rep = "https://i.imgur.com/rhfcVoX.png";
            break;
        case 21:
            rep = "https://i.imgur.com/LJryAdZ.png";
            break;
        case 22:
            rep = "https://i.imgur.com/FRCa0rw.png";
            break;
        case 23:
            rep = "https://i.imgur.com/q7goTpa.png";
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
            rep = "https://i.imgur.com/gKjDLpO.png";
            break;
        case 29:
            rep = "https://i.imgur.com/fpWTzZZ.png";
            break;
        case 30:
            rep = "https://i.imgur.com/SOXo8E4.png";
            break;
        case 31:
            rep = "https://i.imgur.com/qaPq1Ip.png";
            break;
        case 32:
            rep = "https://i.imgur.com/8tnGMZr.png";
            break;
        case 33:
            rep = "https://i.imgur.com/UfOGvM7.png";
            break;
        case 34:
            rep = "https://i.imgur.com/TpyGHuw.png";
            break;
        case 35:
            rep = "";
            break;
        case 36:
            rep = "";
            break;
        case 37:
            rep = "https://i.imgur.com/fzIxkVY.png";
            break;
        case 38:
            rep = "https://i.imgur.com/ecpOg8W.png";
            break;
        case 39:
            rep = "https://i.imgur.com/ZlB5nz1.png";
            break;
    }
    return rep;
};
skh.getskillimage2Hoyoung = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "https://i.imgur.com/bWpjqFQ.png";
            break;
        case 1:
            rep = "https://i.imgur.com/WEjhbaw.png";
            break;
        case 2:
            rep = "https://i.imgur.com/buJczGV.png";
            break;
        case 3:
            rep = "https://i.imgur.com/g5qEif1.png";
            break;
        case 4:
            rep = "https://i.imgur.com/PMUpjo6.png";
            break;
        case 5:
            rep = "https://i.imgur.com/cc6N3OG.png";
            break;
        case 6:
            rep = "https://i.imgur.com/yulBapt.png";
            break;
        case 7:
            rep = "https://i.imgur.com/gv2vsWz.png";
            break;
        case 8:
            rep = "https://i.imgur.com/gRa3rpc.png";
            break;
        case 9:
            rep = "https://i.imgur.com/Ti8eHRm.png";
            break;
        case 10:
            rep = "https://i.imgur.com/IE5Xb2I.png";
            break;
        case 11:
            rep = "https://i.imgur.com/Zqt0iCL.png";
            break;
        case 12:
            rep = "https://i.imgur.com/BU7GSfk.png";
            break;
        case 13:
            rep = "https://i.imgur.com/9Df3nsR.png";
            break;
        case 14:
            rep = "https://i.imgur.com/QvhY5Qm.png";
            break;
        case 15:
            rep = "https://i.imgur.com/ir2sGnM.png";
            break;
        case 16:
            rep = "https://i.imgur.com/0fvxJEr.png";
            break;
        case 17:
            rep = "https://i.imgur.com/XK1BqDO.png";
            break;
        case 18:
            rep = "https://i.imgur.com/ewfG8E6.png";
            break;
        case 19:
            rep = "https://i.imgur.com/lkyzI9B.png";
            break;
        case 20:
            rep = "https://i.imgur.com/u4FZJDD.png";
            break;
        case 21:
            rep = "https://i.imgur.com/popRglS.png";
            break;
        case 22:
            rep = "https://i.imgur.com/PP4OxrV.png";
            break;
        case 23:
            rep = "https://i.imgur.com/uMfJNok.png";
            break;
        case 24:
            rep = "https://i.imgur.com/MgAOU6c.png";
            break;
        case 25:
            rep = "https://i.imgur.com/ZiMZf83.png";
            break;
        case 26:
            rep = "https://i.imgur.com/LNVzlJT.png";
            break;
        case 27:
            rep = "https://i.imgur.com/uleIP3a.png";
            break;
        case 28:
            rep = "https://i.imgur.com/M7ZqP0P.png";
            break;
        case 29:
            rep = "https://i.imgur.com/N8aCgkU.png";
            break;
        case 30:
            rep = "https://i.imgur.com/rIxwDL4.png";
            break;
        case 31:
            rep = "https://i.imgur.com/cfVqcGV.png";
            break;
        case 32:
            rep = "https://i.imgur.com/w1nky4p.png";
            break;
        case 33:
            rep = "https://i.imgur.com/g4Slild.png";
            break;
        case 34:
            rep = "https://i.imgur.com/QSyKxPQ.png";
            break;
        case 35:
            rep = "https://i.imgur.com/ACGsVy6.png";
            break;
        case 36:
            rep = "https://i.imgur.com/oDlTvJK.png";
            break;
        case 37:
            rep = "https://i.imgur.com/ibI20jp.png";
            break;
        case 38:
            rep = "https://i.imgur.com/zlw5wtp.png";
            break;
        case 39:
            rep = "https://i.imgur.com/sDYIw8N.png";
            break;
    }
    return rep;
};

module.exports = skh;