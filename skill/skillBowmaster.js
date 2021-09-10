const skbm = {};

skbm.getskillBowmaster = function (skillname){
    var bmret = -1;
    switch(skillname){
        case "리트리트 샷":
        case "리트리트샷":
        case "리트":
            bmret = 0;
            break;
        case "소울 애로우 : 활":
        case "소울애로우활":
        case "소울애로우":
            bmret = 1;
            break;
        case "퀴버 카트리지":
        case "퀴버카트리지":
        case "퀴버":
            bmret = 2;
            break;
        case "애로우 플래터":
        case "애로우플래터":
        case "플래터":
            bmret = 3;
            break;
        case "피닉스":
            bmret = 4;
            break;
        case "슈타이크 아이젠":
        case "슈타이크아이젠":
        case "슈타이크":
        case "아이젠":
            bmret = 5;
            break;
        case "익스트림 아쳐리 : 활":
        case "익스트림아쳐리활":
        case "익스트림아쳐리":
        case "아쳐리":
            bmret = 6;
            break;
        case "모탈 블로우":
        case "모탈블로우":
            bmret = 7;
            break;
        case "컨센트레이션":
            bmret = 8;
            break;
        case "폭풍의 시":
        case "폭풍의시":
        case "폭시":
            bmret = 9;
            break;
        case "운즈 샷":
        case "운즈샷":
            bmret = 10;
            break;
        case "언카운터블 애로우":
        case "언카운터블애로우":
        case "언카블":
            bmret = 11;
            break;
        case "어드밴스드 퀴버":
        case "어드밴스드퀴버":
        case "어퀴버":
            bmret = 12;
            break;
        case "아머 피어싱":
        case "아머피어싱":
            bmret = 13;
            break;
        case "프리퍼레이션":
            bmret = 14;
            break;        
        case "윈드 오브 프레이":
        case "윈드오브프레이":
        case "윈오프":
            bmret = 15;
            break;
        case "애로우 레인":
        case "애로우레인":
        case "레인":
        case "애레":
            bmret = 16;
            break;
        case "잔영의 시":
        case "잔영의시":
        case "잔시":
            bmret = 17;
            break;
        case "퀴버 풀버스트":
        case "퀴버풀버스트":
        case "퀴풀버":
        case "풀퀴버":
            bmret = 18;
            break;
        case "실루엣 미라주":
        case "실루엣미라주":
        case "미라주":
            bmret = 19;
            break;
        default:
            bmret = -1;
            break;
    }
    return bmret;
};
skbm.getskillnameBowmaster = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "리트리트 샷";
            break;
        case 1:
            rep = "소울 애로우 : 활";
            break;
        case 2:
            rep = "퀴버 카트리지";
            break;
        case 3:
            rep = "애로우 플래터";
            break;
        case 4:
            rep = "피닉스";
            break;
        case 5:
            rep = "슈타이크 아이젠";
            break;
        case 6:
            rep = "익스트림 아쳐리: 활";
            break;
        case 7:
            rep = "모탈 블로우";
            break;
        case 8:
            rep = "컨센트레이션";
            break;
        case 9:
            rep = "폭풍의 시";
            break;
        case 10:
            rep = "운즈 샷";
            break;
        case 11:
            rep = "언카운터블 애로우";
            break;
        case 12:
            rep = "어드밴스드 퀴버";
            break;
        case 13:
            rep = "아머 피어싱";
            break;
        case 14:
            rep = "프리퍼레이션";
            break;
        case 15:
            rep = "윈드 오브 프레이";
            break;
        case 16:
            rep = "애로우 레인";
            break;
        case 17:
            rep = "잔영의 시";
            break;
        case 18:
            rep = "퀴버 풀버스트";
            break;
        case 19:
            rep = "실루엣 미라주";
            break;
    }
    return rep;
};
skbm.getskilldesc1Bowmaster = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "일정거리뒤로 점프 키다운시 103%, 2초 동안 공중에서 적들을 공격";
            break;
        case 1:
            rep = "MP 22 소비, 300초 동안 공격력 30 증가, 화살 소비 없이 공격 가능";
            break;
        case 2:
            rep = "특수 화살촉 3종 각각 10개 사용 가능. 모두 사용 시 자동 재충전.";
            break;
        case 3:
            rep = "4명,181% 채집/NPC 키로 85% 설치 애로우 플래터 30초 간 설치 가능.";
            break;
        case 4:
            rep = "220초 동안 피닉스 소환. 390%,4명 95% 확률로 기절";
            break;
        case 5:
            rep = "MP 21 소비. 170%의 데미지로 공격 후 적을 지나 이동";
            break;
        case 6:
            rep = "방어력 25% 감소, 공격력 40 증가, 최종 데미지 30% 증가";
            break;
        case 7:
            rep = "30번 직접 공격하는 스킬이 적중하면 5초 동안 데미지 35% 증가";
            break;
        case 8:
            rep = "공격시 일정간격마다 90초간 상태이상저항 5씩 증가, 걸렸을 때 초기화.";
            break;
        case 9:
            rep = "MP 9 소비, 발 당 350% 데미지, 시전 중 100% 속도로 이동";
            break;
        case 10:
            rep = "530%,6번 20초동안 적의 HP회복효과 60%, 이동속도 30%감소/쿨타임 10초";
            break;
        case 11:
            rep = "MP 32 소비, 최대 8명의 적 350% 데미지로 5번 공격";
            break;
        case 12:
            rep = "30초 동안 현재 화살촉 소비되지 않음. 재사용 대기시간 30초";
            break;
        case 13:
            rep = "적방어율의 100%만큼 최종데미지(400%까지) 증가, 적방어율 50% 추가무시";
            break;
        case 14:
            rep = "30초동안 공격력 50증가, 스탠스확률 100%, 보스 데미지 20% 증가";
            break;
        case 15:
            rep = "12명,335%,12번 공격, 10초동안 초당 200% 데미지를 받는 디버프 발생.";
            break;
        case 16:
            rep = "70초동안 데미지 30%증가, 5초마다 2.5초 동안 화살 영역(6개까지) 생성";
            break;
        case 17:
            rep = "3초동안 사정거리 안에 1320%,3번 화살 발사/재사용 대기시간 60초";
            break;
        case 18:
            rep = "30초동안 모든종류화살촉 한번에사용 공격력20%증가 화염화살촉 추가사용";
            break;
        case 19:
            rep = "50초마다 환영생성(2개)/HP50%이상, 사망피해 환영 1개 소멸후 90% 감소";
            break;
    }
    return rep;
};
skbm.getskilldesc2Bowmaster = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "뒤로 점프하며 적들에게 화살발사. 스탠스 100%로 적용, 공중체공.";
            break;
        case 1:
            rep = "일정 시간 동안 공격력이 증가하며 화살 소비 없이 활을 쏠 수 있다.";
            break;
        case 2:
            rep = "흡혈화살: 일정비율 회복/독화살: 독데미지/마법화살: 추가 마법화살 발사";
            break;
        case 3:
            rep = "커스텀 커맨드를 사용하면 채집/NPC 대화 키 대신 공격 키를 사용가능.";
            break;
        case 4:
            rep = "[패시브 효과 : 방어력 30% 증가]";
            break;
        case 5:
            rep = "[패시브 효과 : 최대 HP 40% 증가] 이동중 몬스터와 부딪히지 않는다.";
            break;
        case 6:
            rep = "스킬 사용 시 효과가 활성화되고 재사용 시 비활성화되는 온오프 스킬";
            break;
        case 7:
            rep = "일정횟수이상 공격 적중하면 데미지 증가, 강력한 공격을 할 수 있다.";
            break;
        case 8:
            rep = "[패시브 효과 : 상태 이상 내성 20, 모든 속성 내성 20% 증가]";
            break;
        case 9:
            rep = "[패시브 효과 : 언카운터블 애로우의 데미지 50%p 증가]";
            break;
        case 10:
            rep = "[패시브 효과 : 애로우 플래터와 설치 애로우 플래터의 데미지 90%p 증가]";
            break;
        case 11:
            rep = "하이퍼 패시브 : 데미지 20% 증가, 공격 횟수 1 증가";
            break;
        case 12:
            rep = "[패시브 효과 : 독, 흡혈 화살 20개, 마법 화살 40개로 증가]";
            break;
        case 13:
            rep = "재발동 대기시간 9초, 직접 공격시 쿨타임 1초 감소, 최소 쿨타임 1초";
            break;
        case 14:
            rep = "재사용 대기시간 90초.";
            break;
        case 15:
            rep = "재사용 대기시간 15초";
            break;
        case 16:
            rep = "10명,1540%,7번/ 적 1명 초과시 적마다 공격 횟수 2번 증가(최대 8번)";
            break;
        case 17:
            rep = "[패시브효과 : 쿨타임 중 10번 공격시 1초동안 880%,3번 발사]";
            break;
        case 18:
            rep = "공격시 6명의 적을 550%,9번 화염화살 6발 연속 발사, 재발동 대기시간 2초";
            break;
        case 19:
            rep = "환영 1개이상시 880%,3번,5개 발사, MP 80 소비, 재발동 대기시간 7.5초";
            break;
    }
    return rep;
};
skbm.getskillimage1Bowmaster = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "https://i.imgur.com/mc70MoP.png";
            break;
        case 1:
            rep = "https://i.imgur.com/AHmsJGN.png";
            break;
        case 2:
            rep = "https://i.imgur.com/yveVMx5.png";
            break;
        case 3:
            rep = "https://i.imgur.com/lW9r9qD.png";
            break;
        case 4:
            rep = "https://i.imgur.com/gg7g4eL.png";
            break;
        case 5:
            rep = "https://i.imgur.com/JehOHi3.png";
            break;
        case 6:
            rep = "";
            break;
        case 7:
            rep = "";
            break;
        case 8:
            rep = "https://i.imgur.com/zF9D51K.png";
            break;
        case 9:
            rep = "https://i.imgur.com/77CzEfQ.png";
            break;
        case 10:
            rep = "https://i.imgur.com/D5hIcFR.png";
            break;
        case 11:
            rep = "https://i.imgur.com/kOoSC0V.png";
            break;
        case 12:
            rep = "https://i.imgur.com/X5iYsNi.png";
            break;
        case 13:
            rep = "https://i.imgur.com/QZmEq0d.png";
            break;
        case 14:
            rep = "https://i.imgur.com/nE6PW9u.png";
            break;
        case 15:
            rep = "https://i.imgur.com/ykxmGKs.png";
            break;
        case 16:
            rep = "https://i.imgur.com/ohec020.png";
            break;
        case 17:
            rep = "https://i.imgur.com/qxZXANn.png";
            break;
        case 18:
            rep = "https://i.imgur.com/WvvRCXD.png";
            break;
        case 19:
            rep = "https://i.imgur.com/KH5sMyv.png";
            break;
    }
    return rep;
};
skbm.getskillimage2Bowmaster = function (skillcode){
    switch(skillcode){
        case 0:
            rep = "https://i.imgur.com/VKHjhpN.png";
            break;
        case 1:
            rep = "https://i.imgur.com/4CvM93n.png";
            break;
        case 2:
            rep = "https://i.imgur.com/hWaTxfS.png";
            break;
        case 3:
            rep = "https://i.imgur.com/u7NnVu1.png";
            break;
        case 4:
            rep = "https://i.imgur.com/B41tMyY.png";
            break;
        case 5:
            rep = "https://i.imgur.com/WiBHzSV.png";
            break;
        case 6:
            rep = "https://i.imgur.com/i8alr6t.png";
            break;
        case 7:
            rep = "https://i.imgur.com/qQDTwVa.png";
            break;
        case 8:
            rep = "https://i.imgur.com/u36z6LF.png";
            break;
        case 9:
            rep = "https://i.imgur.com/nGHJGfG.png";
            break;
        case 10:
            rep = "https://i.imgur.com/UFLvXOg.png";
            break;
        case 11:
            rep = "https://i.imgur.com/RgWiuyw.png";
            break;
        case 12:
            rep = "https://i.imgur.com/DqJnnTZ.png";
            break;
        case 13:
            rep = "https://i.imgur.com/u7Fw93D.png";
            break;
        case 14:
            rep = "https://i.imgur.com/nO5Hb3G.png";
            break;
        case 15:
            rep = "https://i.imgur.com/uWtNqpc.png";
            break;
        case 16:
            rep = "https://i.imgur.com/VTiXv0R.png";
            break;
        case 17:
            rep = "https://i.imgur.com/8CKgaI3.png";
            break;
        case 18:
            rep = "https://i.imgur.com/q5vG60U.png";
            break;
        case 19:
            rep = "https://i.imgur.com/WvPAh6K.png";
            break;
    }
    return rep;
};

module.exports = skbm;