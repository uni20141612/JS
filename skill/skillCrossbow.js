const skcb = {};

skcb.getskillCrossbow = function (skillname){
    var cbret = -1;
    switch(skillname){
        case "트루 스나이핑":
        case "트루스나이핑":
        case "트스나":
            cbret = 0;
            break;
        case "스플릿 애로우":
        case "스플릿애로우":
        case "스플릿":
            cbret = 1;
            break;
        case "차지드 애로우":
        case "차지드애로우":
        case "차지드":
            cbret = 2;
            break;
        case "리피팅 크로스보우 카트리지":
        case "리피팅크로스보우카트리지":
        case "리피팅":
        case "카트리지":
        case "리크카":
            cbret = 3;
            break;
        case "피어싱":
            cbret = 4;
            break;
        case "리트리트 샷":
        case "리트리트샷":
        case "리트":
            cbret = 5;
            break;
        case "소울 애로우 : 석궁":
        case "소울 애로우 석궁":
        case "소울애로우 석궁":
        case "소울애로우석궁":
        case "소울 애로우":
        case "소울애로우":
            cbret = 6;
            break;
        case "인핸스 애로우":
        case "인핸스애로우":
        case "인핸스":
        case "베인":
            cbret = 7;
            break;
        case "프리져":
        case "프리저":
        case "소환수":
            cbret = 8;
            break;
        case "볼트 스위프트":
        case "볼트스위프트":
        case "스위프트":
        case "볼스":
            cbret = 9;
            break;
        case "볼트 플로우":
        case "볼트플로우":
        case "플로우":
        case "볼플":
        case "텔포":
            cbret = 10;
            break;
        case "페인 킬러":
        case "페인킬러":
        case "페인":
        case "만통":
        case "만병통치약":
            cbret = 11;
            break;
        case "익스트림 아쳐리 : 석궁":
        case "익스트림 아쳐리 석궁":
        case "익스트림아쳐리 석궁":
        case "익스트림아쳐리석궁":
        case "익스트림 아쳐리":
        case "익스트림아쳐리":
        case "익스트림 아처리":
        case "익스트림아처리":
            cbret = 12;
            break;
        case "모탈 블로우":
        case "모탈블로우":
        case "모탈":
            cbret = 13;
            break;
        case "데미지 리버싱":
        case "데미지리버싱":
        case "리버싱":
            cbret = 14;
            break;
        case "피어싱 II":
        case "피어싱II":
        case "피어싱 2":
        case "피어싱2":
            cbret = 15;
            break;
        case "스나이핑":
        case "스나":
            cbret = 16;
            break;
        case "어드밴스드 인핸스 애로우":
        case "어드밴스드 인핸스애로우":
        case "어드밴스드인핸스애로우":
        case "어드인핸스애로우":
        case "어인애":
            cbret = 17;
            break;
        case "애로우 일루전":
        case "애로우일루전":
        case "애일":
        case "일루전":
            cbret = 18;
            break;
        case "어디셔널 볼트":
        case "어디셔널볼트":
        case "어디셔널":
            cbret = 19;
            break;
        case "라스트맨 스탠딩":
        case "라스트맨스탠딩":
        case "라스트맨":
            cbret = 20;
            break;
        case "불스아이":
        case "불스":
            cbret = 21;
            break;
        case "롱 레인지 트루샷":
        case "롱레인지 트루샷":
        case "롱레인지트루샷":
        case "롱레트":
        case "트루샷":
            cbret = 22;
            break;
    }
    return cbret;
};
skcb.getskillnameCrossbow = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "트루 스나이핑";
            break;
        case 1:
            rep = "스플릿 애로우";
            break;
        case 2:
            rep = "차지드 애로우";
            break;
        case 3:
            rep = "리피팅 크로스보우 카트리지";
            break;
        case 4:
            rep = "피어싱";
            break;
        case 5:
            rep = "리트리트 샷";
            break;
        case 6:
            rep = "소울 애로우 : 석궁";
            break;
        case 7:
            rep = "인핸스 애로우";
            break;
        case 8:
            rep = "프리져";
            break;
        case 9:
            rep = "볼트 스위프트";
            break;
        case 10:
            rep = "볼트 플로우";
            break;
        case 11:
            rep = "페인 킬러";
            break;
        case 12:
            rep = "익스트림 아쳐리 : 석궁";
            break;
        case 13:
            rep = "모탈 블로우";
            break;
        case 14:
            rep = "데미지 리버싱";
            break;
        case 15:
            rep = "피어싱 II";
            break;
        case 16:
            rep = "스나이핑";
            break;
        case 17:
            rep = "어드밴스드 인핸스 애로우";
            break;
        case 18:
            rep = "애로우 일루전";
            break;
        case 19:
            rep = "어디셔널 볼트";
            break;
        case 20:
            rep = "라스트맨 스탠딩";
            break;
        case 21:
            rep = "불스아이";
            break;
        case 22:
            rep = "롱 레인지 트루샷";
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
    }
    return rep;
};
skcb.getskilldesc1Crossbow = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "12명,1850%,14번,7번발사/ 12초조준/ 해당시간및종료후 2초간무적";
            break;
        case 1:
            rep = "60초간 화살이 갈라져 10명,1320%,5번 추가공격 / 쿨120초";
            break;
        case 2:
            rep = "10명,1100%,10번공격, 집중완료시 1650%/ 방무50%, 추가크확100%";
            break;
        case 3:
            rep = "풀버스트샷:카트리지1개당 660%, 9번공격,4개/ 방무25%, 크확100%";
            break;
        case 4:
            rep = "130% 데미지로 최대 6명의 적까지 관통, 공격횟수 4회";
            break;
        case 5:
            rep = "일정 거리 뒤로 점프 후 105%의 데미지로 2초간 체공";
            break;
        case 6:
            rep = "공격력 30 증가, 화살 소비 없이 공격 가능";
            break;
        case 7:
            rep = "하단 참조";
            break;
        case 8:
            rep = "220초간 소환, 390%,4명의 적을 동시에 공격, 3초간 빙결";
            break;
        case 9:
            rep = "최대 8명의 적에게 300% 데미지로 6번 공격한다";
            break;
        case 10:
            rep = "하단 참조";
            break;
        case 11:
            rep = "상태 이상 해제 및 1초 동안 상태 이상 면역, 쿨 300초";
            break;
        case 12:
            rep = "회피율 감소(50%), 크리티컬 데미지 20% 증가";
            break;
        case 13:
            rep = "공격 시 10% 확률로 데미지 20% 증가(타수당 별개로 적용)";
            break;
        case 14:
            rep = "공격시 8초간 데미지 20% 해당 보호막 생성, 피격데미지 60% 감소";
            break;
        case 15:
            rep = "하단 참조";
            break;
        case 16:
            rep = "465%,9번 공격, 방무 25%, 추가 크확 100%";
            break;
        case 17:
            rep = "하단 참조";
            break;
        case 18:
            rep = "하단 참조";
            break;
        case 19:
            rep = "공격 횟수가 2 이상인 모든 스킬의 공격 횟수 1 증가";
            break;
        case 20:
            rep = "최종 데미지 10% 증가";
            break;
        case 21:
            rep = "30초간 크확 20%, 크뎀 10%, 방무 20%, 데미지 20% 증가";
            break;
        case 22:
            rep = "범위 내 12명의 적에게 450% 데미지로 9번 공격";
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
    }
    return rep;
};
skcb.getskilldesc2Crossbow = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "중앙가까울수록 데미지 15%씩증가, 최대100%/ 방무100%추가 / 쿨180초";
            break;
        case 1:
            rep = "피어싱, 스나이핑, 리피팅크로스보우 카트리지 사용후 풀버스트샷 적중시";
            break;
        case 2:
            rep = "키다운시 집중/ 최대집중 유지시간 10초/ 쿨10초/ 파이널어택X";
            break;
        case 3:
            rep = " 60초동안 카트리지 8개 사용 가능/ 쿨120초";
            break;
        case 4:
            rep = "화살이 적을 관통할 때마다 최종 데미지가 15%씩 증가, 곱적용";
            break;
        case 5:
            rep = "시전 후 짧은 시간 동안 어떠한 공격에도 밀려나지 않는다.";
            break;
        case 6:
            rep = "인벤토리 내 석궁 전용 화살 중 가장 높은 공격력만큼 추가 상승";
            break;
        case 7:
            rep = "[패시브 효과 : 피어싱의 데미지 140% 증가]";
            break;
        case 8:
            rep = "[패시브 효과 : 방어력 30% 증가]";
            break;
        case 9:
            rep = "재사용 대기시간 10초, 모험가 리마스터 신규 스킬";
            break;
        case 10:
            rep = "모험가 리마스터 신규 스킬";
            break;
        case 11:
            rep = "[패시브 효과 : 상태 이상 내성 20, 모든 속성 내성 20% 증가]";
            break;
        case 12:
            rep = "온오프 스킬";
            break;
        case 13:
            rep = "효과 발동 시 최대 HP와 MP의 1%씩 회복";
            break;
        case 14:
            rep = "최대 감소 가능 데미지는 최대 HP의 65%";
            break;
        case 15:
            rep = "기존의 피어싱이 피어싱 Ⅱ로 강화";
            break;
        case 16:
            rep = "유도 기능이 있음";
            break;
        case 17:
            rep = "모험가 리마스터 신규 스킬";
            break;
        case 18:
            rep = "어그로 분산용 설치형 소환수 스킬";
            break;
        case 19:
            rep = "최종 데미지 15% 증가";
            break;
        case 20:
            rep = "마지막까지 꺾이지 않는 강한 정신력을 단련하여 공격의 위력이 증가";
            break;
        case 21:
            rep = "재사용 대기시간 90초";
            break;
        case 22:
            rep = "재사용 대기시간 15초";
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
    }
    return rep;
};
skcb.getskilldesc3Crossbow = function (skillcode){
    rep = "";
    switch(skillcode){
        case 7:
            rep = "특정 스킬을 사용하여 공격 시 화살이 점점 강화되어 더 강력한 공격을 할 수 있게 된다. 추가로 피어싱이 강화된다. 단, 피어싱 II는 강화되지 않는다.\n\n피어싱 스킬로 적 적중 시 중첩 1개 획득, 최대 3개까지 중첩가능\n최대 중첩 상태에서 피어싱 스킬 사용 시 인핸스 피어싱 스킬 사용 가능\n인핸스 피어싱 : MP 30 소비, 230% 데미지로 최대 8명의 적까지 관통, 공격 횟수 6회";
            break;
        case 10:
            rep = "화살이 유도되는 특수한 표식을 설치한다. 스킬을 재사용하면 화살을 타고 표식의 위치로 순간이동할 수 있다. 표식이 설치되어 있을 때 아래 방향키와 함께 스킬을 재사용하면 표식을 재설치할 수 있다.\n\nMP 28 소비, 120초 동안 지속되는 표식 설치\n스킬을 재사용하여 표식 위치로 순간이동, 순간이동 재사용 대기시간 2초\n설치 후 아래 방향키와 함께 스킬을 재사용하여 재설치 가능, 한번 재설치 시 1초 동안 재설치 불가\n\n재사용 대기시간 120초";
            break;
        case 15:
            rep = "오랜 피어싱 사용을 바탕으로 더 강한 피어싱을 사용할 수 있게 된다. 피어싱 타입 스킬 사용 시 처음 맞은 적 근처에 화살조각이 튀어 피어싱이 꿰뚫지 못한 적을 추가 공격한다.\n\n피어싱 II : MP 42 소비, 343% 데미지로 최대 8명의 적까지 관통, 공격횟수 5회, 관통 시 마다 최종 데미지 15% 증가되며 증가되는 데미지 간에는 곱 적용\n처음 관통한 적 근처에 화살 조각이 튀어 최대 2명의 적을 350%의 데미지로 4번 공격";
            break;
        case 17:
            rep = "인핸스 애로우의 공격 방식을 극한까지 성장시켜 더 강화된 형태를 사용할 수 있게 된다.\n인핸스 피어싱 II, 인핸스 스나이핑을 사용할 수 있고 스나이핑을 사용하여 중첩을 획득할 수 있게 된다.\n인핸스 타입 스킬을 적에게 적중했을 때 포거스 온 버프를 획득할 수 있고 버프 지속시간 증가의 효과를 받지 않는다. 추가로 영구히 최종 데미지, 방어율 무시가 증가한다\n\n인핸스 피어싱 II : MP 87 소비, 427% 데미지로 최대 10명의 적까지 관통, 공격횟수 6회, 소멸 지점에서 280% 데미지로 최대 10명의 적 10회 추가 공격\n인핸스 스나이핑 : MP 105 소비, 510% 데미지로 10회 공격, 몬스터 방어율 25% 무시, 적중한 적에게 5초 동안 표식 디버프를 남기고 표식이 지속되는 동안 스나이핑으로 공격을 성공하면 250% 데미지로 5회 추가 공격\n포커스 온 : 15초 동안 최종 데미지 4% 증가, 몬스터 방어율 무시 13% 증가\n\n[패시브 효과 : 최종 데미지 8% 증가, 몬스터 방어율 20% 무시]";
            break;
        case 18:
            rep = "일정 시간 동안 환상의 화살을 소환해 적들을 유혹하게 하며 데미지를 주고 피해를 입을 시 강하게 반격한다. 공격 반사 상태의 적을 공격해도 피해를 입지 않으며 추가로 영구히 방어율 무시가 증가한다.\n\nMP 70 소비, 30초 동안 HP 100000인 환상 화살 소환\n주위에 200%의 데미지를 입히며 자신 쪽으로 당긴 후 70% 확률로 4초 동안 기절, 피해 입을 시 해당 피해량의 1200%로 반사\n\n[패시브 효과 : 몬스터의 방어율 30% 무시]";
            break;
        case 9:
            rep = "";
            break;
        case 9:
            rep = "";
            break;
    }
    return rep;
};
skcb.getskillimage1Crossbow = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "https://i.imgur.com/HStGiTR.png";
            break;
        case 1:
            rep = "https://i.imgur.com/f7qPnKH.png";
            break;
        case 2:
            rep = "https://i.imgur.com/PK2Gh9F.png";
            break;
        case 3:
            rep = "https://i.imgur.com/5Ow3SIm.png";
            break;
        case 4:
            rep = "https://i.imgur.com/CNZV9Wx.png";
            break;
        case 5:
            rep = "https://i.imgur.com/WKJBJLQ.png";
            break;
        case 6:
            rep = "";
            break;
        case 7:
            rep = "https://i.imgur.com/ULhAOpq.png";
            break;
        case 8:
            rep = "https://i.imgur.com/bRBa8Cm.png";
            break;
        case 9:
            rep = "https://i.imgur.com/JpXa5QK.png";
            break;
        case 10:
            rep = "https://i.imgur.com/wYgifw7.png";
            break;
        case 11:
            rep = "https://i.imgur.com/D6fhLUi.png";
            break;
        case 12:
            rep = "";
            break;
        case 13:
            rep = "";
            break;
        case 14:
            rep = "https://i.imgur.com/FI09L1y.png";
            break;
        case 15:
            rep = "";
            break;
        case 16:
            rep = "https://i.imgur.com/8Ni2lS7.png";
            break;
        case 17:
            rep = "https://i.imgur.com/006V1vh.png";
            break;
        case 18:
            rep = "https://i.imgur.com/Saw3L0v.png";
            break;
        case 19:
            rep = "";
            break;
        case 20:
            rep = "";
            break;
        case 21:
            rep = "https://i.imgur.com/zXjeBpH.png";
            break;
        case 22:
            rep = "https://i.imgur.com/bcGBGxT.png";
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
    }
    return rep;
};
skcb.getskillimage2Crossbow = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "https://i.imgur.com/KJ5DMgf.png";
            break;
        case 1:
            rep = "https://i.imgur.com/mAoZvBr.png";
            break;
        case 2:
            rep = "https://i.imgur.com/wJooKTL.png";
            break;
        case 3:
            rep = "https://i.imgur.com/26YYmR8.png";
            break;
        case 4:
            rep = "https://i.imgur.com/5zlGWJ5.png";
            break;
        case 5:
            rep = "https://i.imgur.com/QvpIAu1.png";
            break;
        case 6:
            rep = "https://i.imgur.com/L20raA7.png";
            break;
        case 7:
            rep = "https://i.imgur.com/zOJLr77.png";
            break;
        case 8:
            rep = "https://i.imgur.com/WLEirh5.png";
            break;
        case 9:
            rep = "https://i.imgur.com/V4z0ENf.png";
            break;
        case 10:
            rep = "https://i.imgur.com/9wBb0Iv.png";
            break;
        case 11:
            rep = "https://i.imgur.com/MAzY9TO.png";
            break;
        case 12:
            rep = "https://i.imgur.com/PltKjlr.png";
            break;
        case 13:
            rep = "https://i.imgur.com/HMbtQqJ.png";
            break;
        case 14:
            rep = "https://i.imgur.com/zKy1Y3F.png";
            break;
        case 15:
            rep = "https://i.imgur.com/Gbp5dhp.png";
            break;
        case 16:
            rep = "https://i.imgur.com/l8ifHA7.png";
            break;
        case 17:
            rep = "https://i.imgur.com/jPB7DgL.png";
            break;
        case 18:
            rep = "https://i.imgur.com/oUohXin.png";
            break;
        case 19:
            rep = "https://i.imgur.com/Ull9SUX.png";
            break;
        case 20:
            rep = "https://i.imgur.com/DsiA2ss.png";
            break;
        case 21:
            rep = "https://i.imgur.com/qNiMJ9g.png";
            break;
        case 22:
            rep = "https://i.imgur.com/GxO55Us.png";
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
    }
    return rep;
};

module.exports = skcb;