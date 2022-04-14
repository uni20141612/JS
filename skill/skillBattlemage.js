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