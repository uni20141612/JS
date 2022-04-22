const skbm = {};

skbm.getskillBattlemage = function (skillname){
    var bmret = -1;
    switch(skillname){
        case "유니온 오라":
        case "유니온오라":
        case "유오라":
        case "유오":
            bmret = 0;
            break;
        case "블랙 매직 알터":
        case "블랙매직알터":
        case "블매알":
        case "알터":
            bmret = 1;
            break;
        case "그림 리퍼":
        case "그림리퍼":
        case "리퍼":
        case "그리":
            bmret = 2;
            break;
        case "어비셜 라이트닝":
        case "어비셜라이트닝":
        case "어비셜":
        case "어라":
            bmret = 3;
            break;
        case "피니쉬 블로우":
        case "피니쉬블로우":
        case "피블":
        case "6연타":
            bmret = 4;
            break;
        case "트리플 블로우":
        case "트리플블로우":
        case "트리플":
        case "트블":
        case "3연타":
            bmret = 5;
            break;
        case "텔레포트 Ver.2":
        case "텔레포트Ver.2":
        case "텔레포트 2":
        case "텔레포트2":
        case "텔레포트":
        case "텔포":
            bmret = 6;
            break;
        case "옐로우 오라":
        case "옐로우오라":
        case "옐오라":
        case "옐오":
        case "노랑 오라":
        case "노랑오라":
        case "노란 오라":
        case "노란오라":
        case "이속 오라":
        case "이속오라":
        case "공속 오라":
        case "공속오라":
            bmret = 7;
            break;
        case "데스":
        case "소환수":
            bmret = 8;
            break;
        case "아트 오브 스태프":
        case "아트오브 스태프":
        case "아트오브스태프":
            bmret = 9;
            break;
        case "쿼드 블로우":
        case "쿼드블로우":
        case "쿼드":
        case "쿼블":
        case "4연타":
            bmret = 10;
            break;
        case "다크 체인":
        case "다크체인":
        case "다체":
        case "닼체":
        case "끌격기":
        case "끌격":
            bmret = 11;
            break;
        case "드레인 오라":
        case "드레인오라":
        case "빨강 오라":
        case "빨강오라":
        case "빨간 오라":
        case "빨간오라":
        case "흡혈 오라":
        case "흡혈오라":
        case "드오":
            bmret = 12;
            break;
        case "데스 컨트랙트":
        case "데스컨트랙트":
        case "데스 컨트랙트1":
        case "데스컨트랙트1":
        case "데컨1":
        case "데컨":
            bmret = 13;
            break;
        case "데스 블로우":
        case "데스블로우":
        case "데블":
        case "5연타":
            bmret = 14;
            break;
        case "배틀 스퍼트":
        case "배틀스퍼트":
        case "스퍼트":
        case "밀격기":
        case "밀격":
        case "돌진기":
        case "돌진":
            bmret = 15;
            break;
        case "블루 오라":
        case "블루오라":
        case "파랑 오라":
        case "파랑오라":
        case "파란 오라":
        case "파란오라":
        case "파오":
        case "내성 오라":
        case "내성오라":
            bmret = 16;
            break;
        case "다크 라이트닝":
        case "다크라이트닝":
        case "라이트닝":
        case "인사":
        case "피블텔":
        case "징표":
            bmret = 17;
            break;
        case "텔레포트 부스트":
        case "텔레포트부스트":
        case "텔포 부스트":
        case "텔포부스트":
        case "부스트":
            bmret = 18;
            break;
        case "배틀 마스터리":
        case "배틀마스터리":
            bmret = 19;
            break;
        case "너브 스티뮬레이션":
        case "너브스티뮬레이션":
        case "스티뮬레이션":
        case "너브":
        case "너스":
            bmret = 20;
            break;
        case "데스 컨트랙트2":
        case "데스컨트랙트2":
        case "데컨2":
            bmret = 21;
            break;
        case "다크 제네시스":
        case "다크제네시스":
        case "닼제네":
        case "닥제네":
        case "닥제네":
        case "제네시스":
        case "제네":
            bmret = 22;
            break;
        case "다크 오라":
        case "다크오라":
        case "검은 오라":
        case "검은오라":
        case "까만 오라":
        case "까만오라":
        case "데미지 오라":
        case "데미지오라":
        case "뎀지 오라":
        case "뎀지오라":
            bmret = 23;
            break;
        case "디버프 오라":
        case "디버프오라":
        case "디벞 오라":
        case "디벞오라":
        case "방깎 오라":
        case "방깎오라":
            bmret = 24;
            break;
        case "배틀 레이지":
        case "배틀레이지":
        case "레이지":
            bmret = 25;
            break;
        case "쉘터":
        case "쉘":
            bmret = 26;
            break;
        case "스펠 부스트":
        case "스펠부스트":
            bmret = 27;
            break;
        case "데스 컨트랙트3":
        case "데스컨트랙트3":
        case "데컨3":
            bmret = 28;
            break;
        case "마스터 오브 데스":
        case "마스터오브 데스":
        case "마스터오브데스":
        case "마오데":
            bmret = 29;
            break;
        case "배틀킹 바":
        case "배틀킹바":
        case "배바":
            bmret = 30;
            break;
        case "":
            bmret = 31;
            break;
    }
    return bmret;
};
skbm.getskillnameBattlemage = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "유니온 오라";
            break;
        case 1:
            rep = "블랙 매직 알터";
            break;
        case 2:
            rep = "그림 리퍼";
            break;
        case 3:
            rep = "어비셜 라이트닝";
            break;
        case 4:
            rep = "피니쉬 블로우";
            break;
        case 5:
            rep = "트리플 블로우";
            break;
        case 6:
            rep = "텔레포트 Ver.2";
            break;
        case 7:
            rep = "옐로우 오라";
            break;
        case 8:
            rep = "데스";
            break;
        case 9:
            rep = "아트 오브 스태프";
            break;
        case 10:
            rep = "쿼드 블로우";
            break;
        case 11:
            rep = "다크 체인";
            break;
        case 12:
            rep = "드레인 오라";
            break;
        case 13:
            rep = "데스 컨트랙트";
            break;
        case 14:
            rep = "데스 블로우";
            break;
        case 15:
            rep = "배틀 스퍼트";
            break;
        case 16:
            rep = "블루 오라";
            break;
        case 17:
            rep = "다크 라이트닝";
            break;
        case 18:
            rep = "텔레포트 부스트";
            break;
        case 19:
            rep = "배틀 마스터리";
            break;
        case 20:
            rep = "너브 스티뮬레이션";
            break;
        case 21:
            rep = "데스 컨트랙트2";
            break;
        case 22:
            rep = "다크 제네시스";
            break;
        case 23:
            rep = "다크 오라";
            break;
        case 24:
            rep = "디버프 오라";
            break;
        case 25:
            rep = "배틀 레이지";
            break;
        case 26:
            rep = "쉘터";
            break;
        case 27:
            rep = "스펠 부스트";
            break;
        case 28:
            rep = "데스 컨트랙트3";
            break;
        case 29:
            rep = "마스터 오브 데스";
            break;
        case 30:
            rep = "배틀킹 바";
            break;
        case 31:
            rep = "";
            break;
    }
    return rep;
};
skbm.getskilldesc1Battlemage = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "40초간 모든오라효과 동시적용, 마력60/ 재사용시 비활성화/ 쿨100초";
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
            rep = "최대 6명의 적을 330% 데미지로 6번 공격";
            break;
        case 5:
            rep = "최대 5명의 적을 170% 데미지로 3번 공격";
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
            rep = "마력 20, 크리티컬 확률 15%";
            break;
        case 10:
            rep = "최대 5명의 적을 220%의 데미지로 4번 공격";
            break;
        case 11:
            rep = "최대 8명의 적에게 600% 데미지, 8초 동안 기절";
            break;
        case 12:
            rep = "하단 참조";
            break;
        case 13:
            rep = "하단 참조";
            break;
        case 14:
            rep = "최대 6명의 적을 235% 데미지로 5번 공격";
            break;
        case 15:
            rep = "최대 8명의 적을 900%의 데미지로 공격.";
            break;
        case 16:
            rep = "하단 참조";
            break;
        case 17:
            rep = "하단 참조";
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
    }
    return rep;
};
skbm.getskilldesc2Battlemage = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "블로우류스킬이 10명,300%,12번 공격 사신의낫 강화/ 크확50%, 방무50%";
            break;
        case 1:
            rep = "설치형 자동 공격기";
            break;
        case 2:
            rep = "로브를 쓰고 눈만 번뜩이는 모습이 검은 마법사와 유사하다";
            break;
        case 3:
            rep = "스킬이 지속되는 동안 징표가 6번째 공격하기 전까지 유지";
            break;
        case 4:
            rep = "추가 크리티컬 확률 25%, 추가 방어율 무시 20%";
            break;
        case 5:
            rep = "전방 범위 230px,";
            break;
        case 6:
            rep = "체공중 사용시 공중 수평이동";
            break;
        case 7:
            rep = "첫 번째 오라";
            break;
        case 8:
            rep = "온오프 스킬";
            break;
        case 9:
            rep = "방어력 150 증가";
            break;
        case 10:
            rep = "-";
            break;
        case 11:
            rep = "블로우류 스킬과 연계가능";
            break;
        case 12:
            rep = "두 번째 오라";
            break;
        case 13:
            rep = "1차 데스 강화";
            break;
        case 14:
            rep = "-";
            break;
        case 15:
            rep = "[패시브 효과 : 다크 체인의 데미지 50% 증가]";
            break;
        case 16:
            rep = "세 번째 오라";
            break;
        case 17:
            rep = "배틀메이지 보스전의 핵심";
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
    }
    return rep;
};
skbm.getskilldesc3Battlemage = function (skillcode){
    rep = "";
    switch(skillcode){
        case 1:
            rep = "흑마술 제단을 설치한다. 2개 이상 설치되면 제단이 작동하여 저주를 발동한다.\n\n가장 먼저 설치된 제단에서 저주가 시작되어 그 다음 설치한 제단으로 차례차례 보내진다. 저주는 닿은 적을 공격하지만 1번 공격한 적은 다음 제단에 도착할 때까지는 다시 공격하지 않고 이동하는 시간은 제단 간의 거리와 상관없이 일정하다.\n추가 제단을 설치할 때 가장 최근에 설치한 제단의 일정 범위 안에만 설치할 수 있고 공격을 받은 적은 검은 징표가 새겨진다.\n\n제단이 1개라도 설치되어 있지 않을 때 아래 방향키와 함께 사용하면 현재 캐릭터가 있는 곳 및 캐릭터의 전방에 총 2개의 제단을 한번에 설치할 수 있다.\n블랙 매직 알터는 공격 반사 상태의 적을 공격해도 피해를 입지 않는다.\n\nMP 500 소비, 40초 동안 유지되는 흑마술 제단 설치, 저주는 최대 10명의 적을 1760%의 데미지로 4번 공격\n\n저주가 다음 제단까지 이동하는데 0.8초 걸리고 제단이 2개를 초과하여 설치되었다면 초과한 제단 1개마다 저주의 공격 횟수 2번 증가\n\n흑마술 제단은 25초마다 1개씩 준비되며 최대 4개까지 준비 가능\n재사용 대기시간 : 0.5초";
            break;
        case 2:
            rep = "흑마술의 새로운 경지에 도달해 진정한 모습의 사신을 강림시킨다. 제물이 될 영혼이 많다면 더 오래 강림시킬 수 있다. 사신의 공격은 공격 반사 상태의 적에게도 피해를 입힌다.\n\nMP 1000 소비, 30초 동안 4초마다 최대 10명의 적을 1760%의 데미지로 12번 공격하는 그림 리퍼 소환\n스킬을 한 번 더 사용하면 자신의 주위에서 재소환하며 10초마다 1번 사용가능\n\n그림 리퍼가 적을 쓰러뜨렸다면 1명 당 지속시간 0.2초, 보스 몬스터를 공격했다면 지속시간 2초 증가, 공격 1회당 지속시간 최대 3초까지 증가\n\n마스터 오브 데스 적용 중에는 공격 간격이 50%가 되지만 공격으로 지속시간이 증가하지 않음\n\n재사용 대기시간 100초";
            break;
        case 3:
            rep = "흑마술로 주변을 물들여 명계의 번개를 사용한다. 다크 라이트닝이 발동될 때, 검은 징표로 인한 공격이 발동될 때 명계의 번개가 주변을 공격한다.\n일정 시간마다 배틀메이지 주변으로 명계의 통로가 생성되고 방향키와 함께 스킬을 사용하면 해당 방향에 있는 가장 가까운 통로를 소멸시키며 해당 위치로 순간 이동한다. 순간 이동한 경로에 다크 라이트닝이 생성되어 공격한다.\n어비셜 라이트닝 중 검은 징표는 수회 공격해야 소비되어 사라진다.\n\nMP 500 소비, 시전 및 해제 동작 중 무적\n40초 동안 일반 몬스터 공격 시 데미지 30% 증가 및 일정 시간마다 명계의 통로 2개 생성, 통로는 15초 동안 유지되고 맵상에 최대 6개까지 존재 가능, 검은 징표의 공격 6번 발동돼야 징표 소비\n\n명계의 번개 : 최대 8명의 적을 1760%의 데미지로 6번 공격, 추가 크리티컬 확률 100%, 몬스터 방어율 20% 추가 무시, 재발동 대기시간 0.6초\n\n재사용 대기시간 : 200초";
            break;
        case 6:
            rep = "근접 전투에 효율적이도록 텔레포트를 개량한 스킬이다. 일정 거리만큼 순간 이동한다. 상, 하, 좌, 우 방향키와 함께 누르면 해당 방향으로 이동할 수 있고 점프 중에도 사용할 수 있다.\n공중에서 위 방향키와 함께 점프키를 입력하면 레지스탕스의 기술로 위로 도약할 수 있는 래피드 리프를 사용할 수 있다. 도약 후 텔레포트로 연계할 수 있다.\n\nMP 20 소비, 좌우 210 거리, 상하 290 거리를 순간 이동\n래피드 리프 : MP 25 소모, 위로 일정거리 도약, 도약 후 지상에 닿기 전까지 1회에 한해 텔레포트로 연계 가능, 래피드 리프 후 연속으로 텔레포트 연계 시 텔레포트 간 딜레이 감소";
            break;
        case 7:
            rep = "자신의 몸에서 밝은 노란 빛의 오라를 방출하여 주위의 파티원들의 이동속도, 공격 속도를 증가시킨다. 스킬을 한 번 더 사용해서 오라를 해제할 수 있으며, 다른 종류의 오라를 사용하면 해제된다. 추가로 이동속도, 최대 이동속도, 점프력, 공격 속도, 회피율이 영구히 증가한다.\n\n초당 MP 8 소비, 이동속도 10, 공격 속도 1단계 증가\n재사용 대기시간 3초\n\n[패시브 효과 : 이동속도 30, 최대 이동속도 20, 점프력 20, 공격 속도 2단계, 회피율 15% 증가]";
            break;
        case 9:
            rep = "흑마술의 비급을 사용해 사신과 계약한다. 사신은 자신을 따라다니며, 일정 수 이상의 영혼을 수집하면 본 모습을 드러내 넓은 범위를 공격해준다. 사신의 공격은 공격 반사 상태의 적에게도 피해를 입히고 자신의 레벨에 비례한 공격력을 가진다.\n\n적을 10명 해치운 뒤 그 다음 공격을 할 때 최대 7명의 적에게 185 + 자신의 레벨당 1%로 7번 공격. 보스에게 2번 공격하면 적을 1명 해치운 것으로 취급. 발동 후 9초 동안 다시 발동하지 않음.";
            break;
        case 12:
            rep = "자신의 몸에서 붉은 빛의 오라를 방출하여 주위의 파티원들이 적에게 입힌 데미지의 일부를 HP로 흡수시켜주는 능력을 가지게 하고 자신은 MP로도 흡수할 수 있다. 한 번에 캐릭터 최대 HP의 20%, 최대 MP의 10%를 초과하여 회복할 수 없다. 스킬을 한 번 더 사용해서 오라를 해제할 수 있으며, 다른 종류의 오라를 사용하면 해제된다. 추가로 적을 해치울 때마다 적의 영혼을 제물로 최대 HP의 일정비율을 회복하는 능력을 영구히 가진다.\n\n초당 MP 28 소비, 준 데미지의 1%만큼 HP 회복 및 0.1%만큼 MP 회복, 한 번 회복 후 5초 동안 재회복 불가, 배틀메이지가 준 데미지는 드레인 오라 범위 안의 파티원의 HP도 함께 회복시킴, MP 회복은 배틀메이지에게만 적용\n재사용 대기시간 3초\n\n[패시브 효과 : 4초마다 최대 HP의 2% + 1000 회복, 적을 해치울 때마다 최대 HP의 1% 회복]";
            break;
        case 13:
            rep = "사신과 계약을 강화한다.\n\n적을 8명 해치운 뒤 그 다음 공격을 할 때 최대 8명의 적에게 190 + 자신의 레벨당 1%로 8번 공격하는 것으로 강화. 발동 후 8초 동안 다시 발동하지 않음.";
            break;
        case 16:
            rep = "자신의 몸에서 푸른 빛의 오라를 방출하여 주위 파티원들의 상태 이상 내성을 증가시키고 피격 데미지를 감소시킨다. 스킬을 한 번 더 사용해서 오라를 해제할 수 있으며, 다른 종류의 오라를 사용하면 해제된다. 추가로 상태 이상 내성, 모든 속성 내성, 방어력이 증가하고 피격 데미지 감소가 영구히 증가한다.\n\n초당 MP 12 소비, 상태 이상 내성 20 증가, 피격 데미지 15% 감소.\n재사용 대기시간 3초\n\n[패시브 효과 : 상태 이상 내성 30, 모든 속성 내성 30%, 방어력 150% 증가, 피격 데미지 25% 감소]";
            break;
        case 17:
            rep = "텔레포트를 사용하면 출발점과 도착점 사이를 검은 번개로 공격하며 맞은 적에게 검은 징표를 새긴다.\n다크 라이트닝을 배우면 다크 체인, 배틀 스퍼트 사용 시에도 검은 징표가 새겨지며 징표를 새기는 스킬과 소환수로는 징표를 소비할 수 없다. 또한 옐로우 오라 사용 중 텔레포트 Ver.2의 이동거리가 증가하고 스킬UI에서 옐로우 오라를 우클릭하여 기능을 온오프 할 수 있다.\n\n스킬 사용 시 효과가 활성화되고 재사용 시 비활성화되는 온오프 스킬\n\n텔레포트 사용 시 MP 15 추가 소비, 텔레포트 시작점과 도착점 사이의 적을 최대 8명까지 225%의 데미지로 4번 공격. 공격을 받은 적에게 15초 동안 검은 징표를 새김. 검은 징표가 새겨진 적을 공격 시 350%로 4번 공격. 징표 소비 공격은 보스 몬스터 공격 시 데미지 20% 증가. 징표는 15번 공격 시 소비";
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
    }
    return rep;
};
skbm.getskillimage1Battlemage = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "https://i.imgur.com/ZMCcicF.png";
            break;
        case 1:
            rep = "https://i.imgur.com/taeWiCG.png";
            break;
        case 2:
            rep = "https://i.imgur.com/FyqV9Th.png";
            break;
        case 3:
            rep = "https://i.imgur.com/WAsIpBi.png";
            break;
        case 4:
            rep = "https://i.imgur.com/u5FusUA.png";
            break;
        case 5:
            rep = "https://i.imgur.com/yUpsasj.png";
            break;
        case 6:
            rep = "https://i.imgur.com/Kyx1KiD.png";
            break;
        case 7:
            rep = "https://i.imgur.com/AlEWU7K.png";
            break;
        case 8:
            rep = "https://i.imgur.com/7VWGswv.png";
            break;
        case 9:
            rep = "";
            break;
        case 10:
            rep = "https://i.imgur.com/19SiNzC.png";
            break;
        case 11:
            rep = "https://i.imgur.com/yeBx5dV.png";
            break;
        case 12:
            rep = "https://i.imgur.com/SMxA13F.png";
            break;
        case 13:
            rep = "https://i.imgur.com/46lRhlS.png";
            break;
        case 14:
            rep = "https://i.imgur.com/eXPAORG.png";
            break;
        case 15:
            rep = "https://i.imgur.com/RF2CdOA.png";
            break;
        case 16:
            rep = "https://i.imgur.com/2uHhAjO.png";
            break;
        case 17:
            rep = "https://i.imgur.com/vjEztf5.png";
            break;
        case 18:
            rep = "https://i.imgur.com/E95Fm3R.png";
            break;
        case 19:
            rep = "";
            break;
        case 20:
            rep = "";
            break;
        case 21:
            rep = "https://i.imgur.com/XhEOI2f.png";
            break;
        case 22:
            rep = "https://i.imgur.com/jULBuRw.png";
            break;
        case 23:
            rep = "https://i.imgur.com/i0WjE1u.png";
            break;
        case 24:
            rep = "https://i.imgur.com/t9d6Cvf.png";
            break;
        case 25:
            rep = "https://i.imgur.com/PZcmVUe.png";
            break;
        case 26:
            rep = "https://i.imgur.com/rtv7PbD.png";
            break;
        case 27:
            rep = "";
            break;
        case 28:
            rep = "https://i.imgur.com/mXFBwCF.png";
            break;
        case 29:
            rep = "https://i.imgur.com/jpVwZg8.png";
            break;
        case 30:
            rep = "https://i.imgur.com/hUXkYRR.png";
            break;
        case 31:
            rep = "";
            break;
    }
    return rep;
};
skbm.getskillimage2Battlemage = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "https://i.imgur.com/TJz28rP.png";
            break;
        case 1:
            rep = "https://i.imgur.com/5QWzAPy.png";
            break;
        case 2:
            rep = "https://i.imgur.com/TbQPQb5.png";
            break;
        case 3:
            rep = "https://i.imgur.com/cvRP3nQ.png";
            break;
        case 4:
            rep = "https://i.imgur.com/ccdJ8MW.png";
            break;
        case 5:
            rep = "https://i.imgur.com/KKGdMi8.png";
            break;
        case 6:
            rep = "https://i.imgur.com/51tx9OM.png";
            break;
        case 7:
            rep = "https://i.imgur.com/0GVkNwR.png";
            break;
        case 8:
            rep = "https://i.imgur.com/pviBhhL.png";
            break;
        case 9:
            rep = "https://i.imgur.com/26OJraj.png";
            break;
        case 10:
            rep = "https://i.imgur.com/5CKitX2.png";
            break;
        case 11:
            rep = "https://i.imgur.com/tAIEwkO.png";
            break;
        case 12:
            rep = "https://i.imgur.com/e57cPpJ.png";
            break;
        case 13:
            rep = "https://i.imgur.com/YrgQHt5.png";
            break;
        case 14:
            rep = "https://i.imgur.com/umu08pg.png";
            break;
        case 15:
            rep = "https://i.imgur.com/4Jwf7Jm.png";
            break;
        case 16:
            rep = "https://i.imgur.com/GInRWMK.png";
            break;
        case 17:
            rep = "https://i.imgur.com/a3RUsSW.png";
            break;
        case 18:
            rep = "https://i.imgur.com/okZhV6U.png";
            break;
        case 19:
            rep = "https://i.imgur.com/ShighnV.png";
            break;
        case 20:
            rep = "https://i.imgur.com/DZjbVm0.png";
            break;
        case 21:
            rep = "https://i.imgur.com/RQ8sIT3.png";
            break;
        case 22:
            rep = "https://i.imgur.com/7h3LKA9.png";
            break;
        case 23:
            rep = "https://i.imgur.com/XhBV1KL.png";
            break;
        case 24:
            rep = "https://i.imgur.com/hb2ddQK.png";
            break;
        case 25:
            rep = "https://i.imgur.com/2DXlgKg.png";
            break;
        case 26:
            rep = "https://i.imgur.com/00WP1Pk.png";
            break;
        case 27:
            rep = "https://i.imgur.com/Hrpqk7p.png";
            break;
        case 28:
            rep = "https://i.imgur.com/niXjbEk.png";
            break;
        case 29:
            rep = "https://i.imgur.com/2SwacVW.png";
            break;
        case 30:
            rep = "https://i.imgur.com/Ijg37lG.png";
            break;
        case 31:
            rep = "";
            break;
    }
    return rep;
};

module.exports = skbm;