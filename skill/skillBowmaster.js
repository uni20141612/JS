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
        case "실루엣":
        case "미라주":
            bmret = 19;
            break;
        case "바람의 시":
        case "바람의시":
        case "바시":
            bmret = 20;
            break;
        case "플레시 미라주":
        case "플레시미라주":
        case "플래시 미라주":
        case "플래시미라주":
            bmret = 21;
            break;
        case "플레시 미라주 II":
        case "플레시미라주II":
        case "플레시 미라주 2":
        case "플레시미라주2":
        case "플래시 미라주 II":
        case "플래시미라주II":
        case "플래시 미라주 2":
        case "플래시미라주2":
            bmret = 22;
            break;
        case "퀴버 플로우":
        case "퀴버플로우":
        case "퀴플":
        case "텔포":
            bmret = 23;
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
            rep = "슈타이크 아이젠(삭제)";
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
            rep = "운즈 샷(삭제)";
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
        case 20:
            rep = "바람의 시";
            break;
        case 21:
            rep = "플레시 미라주";
            break;
        case 22:
            rep = "플레시 미라주 II";
            break;
        case 23:
            rep = "퀴버 플로우";
            break;
    }
    return rep;
};
skbm.getskilldesc1Bowmaster = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "일정거리뒤로 점프 키다운시 105%, 2초 동안 공중에서 적들을 공격";
            break;
        case 1:
            rep = "공격력 30 증가, 화살 소비 없이 공격 가능";
            break;
        case 2:
            rep = "30% 확률로 220%로 적을 추적하여 공격하는 마법 화살 발사";
            break;
        case 3:
            rep = "하단 참조";
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
            rep = "MP 9 소비, 발 당 350% 데미지";
            break;
        case 10:
            rep = "530%,6번 20초동안 적의 HP회복효과 60%, 이동속도 30%감소/쿨타임 10초";
            break;
        case 11:
            rep = "MP 32 소비, 최대 8명의 적 350% 데미지로 5번 공격";
            break;
        case 12:
            rep = "하단 참조";
            break;
        case 13:
            rep = "적방어율의 100%만큼 최종데미지(400%까지) 증가, 적방어율 50% 추가무시";
            break;
        case 14:
            rep = "30초동안 공격력 50증가, 보스몬스터 공격 시 데미지 20% 증가";
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
            rep = "MP 15 소비, 최대 6명의 적을 178% 데미지로 3번 공격";
            break;
        case 21:
            rep = "하단 참조";
            break;
        case 22:
            rep = "플레시 미라주 발동에 필요한 공격 횟수 7번으로 감소";
            break;
        case 23:
            rep = "하단 참조";
            break;
    }
    return rep;
};
skbm.getskilldesc2Bowmaster = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "시전후 짧은시간 슈퍼스탠스, 스탠스 100%로 적용, 공중체공.";
            break;
        case 1:
            rep = "인벤토리 활전용 화살중 가장높은 공격력의 화살 공격력 적용";
            break;
        case 2:
            rep = "스킬을 재사용하여 화살촉을 변경할 수 있다.";
            break;
        case 3:
            rep = "설플에는 레인, 마법화살, 모탈블로우, 파이널어택 미발동";
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
            rep = "[패시브 효과 : 최종 데미지 6% 증가]";
            break;
        case 13:
            rep = "재발동 대기시간 9초, 직접 공격시 쿨타임 1초 감소, 최소 쿨타임 1초";
            break;
        case 14:
            rep = "재사용 대기시간 90초.";
            break;
        case 15:
            rep = "[패시브 효과 : 애로우플래터와 설치애로우플래터 데미지 90% 증가]";
            break;
        case 16:
            rep = "-";
            break;
        case 17:
            rep = "-";
            break;
        case 18:
            rep = "-";
            break;
        case 19:
            rep = "-";
            break;
        case 20:
            rep = "2차 주력 다수 공격기";
            break;
        case 21:
            rep = "모험가 리마스터 신규 스킬";
            break;
        case 22:
            rep = "잔영 개수 4개 증가, 잔영이 쏘는 화살의 데미지 120p% 증가";
            break;
        case 23:
            rep = "모험가 리마스터 신규 스킬";
            break;
    }
    return rep;
};
skbm.getskilldesc3Bowmaster = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "";
            break;
        case 3:
            rep = "화살을 곡사로 발사한다. 스킬 키를 누르고 있으면 지속적으로 발사하며, 발사 중 ↑, ↓ 화살표 키를 이용해 쏘는 힘을 조절할 수 있다.\n스킬 시전 중 채집/NPC 대화키를 눌러 현재 자신의 위치에 애로우 플래터를 설치하여 지속적으로 화살을 발사할 수 있고 보우마스터는 커스텀 커맨드를 사용하면 채집/NPC 대화 키 대신 공격 키를 사용하여 설치할 수 있다.\n설치된 애로우 플래터는 공격 반사 상태의 적을 공격해도 피해를 입지 않는다.\n커스텀 커맨드 온오프: 마우스 우클릭\n\nMP 7 소비, 최대 4명의 적을 181% 데미지로 공격, 시전 중 채집/NPC 대화 키[2]로 85% 데미지의 화살을 발사하는 애로우 플래터 30초 동안 설치 가능.\n설치 애로우 플래터의 재사용 대기시간 5초";
            break;
        case 12:
            rep = "사용할 수 있는 특수 화살촉이 추가된다. 스킬을 재사용하여 사용할 화살촉을 변경할 수 있다. 추가로 영구히 최종 데미지를 증가시킨다.\n\n마법 화살 : 마법 화살의 발동 확률 60%로 증가, 마법 화살의 데미지 260%로 증가\n흡혈 화살 : 70%의 확률로 최대 HP의 5%를 회복하는 흡혈 화살촉 사용";
            break;
        case 15:
            rep = "바람의 결을 읽어 주변을 모두 찢어발기는 충격파를 발산한다. 추가로 애로우 플래터 및 설치 애로우 플래터를 강화한다.\n\nMP 200 소비, 12명의 적에게 335% 데미지로 12번 공격\n적중한 적은 20초 동안 이동속도 -30만큼 감소\n\n재사용 대기시간 15초";
            break;
        case 16:
            rep = "하늘로 날린 화살이 비처럼 쏟아진다. 공격 반사 상태의 적을 공격해도 피해를 입지 않고 마을에서는 영역이 생성되지 않는다.\n\nMP 1000 소비, 70초 동안 데미지 30% 증가, 자신의 스킬로 공격 시 5초마다 주변에 2.5초 동안 화살이 쏟아지는 영역 생성, 영역은 한 번에 최대 6개까지 생성 가능하나 영역이 중첩되지 않음\n쏟아지는 화살은 일정 시간마다 최대 10명의 적을 1540%로 7번 공격, 현재 공격하는 적이 1명을 초과하면 초과한 적마다 공격 횟수 2번 증가하여 최대 8번까지 추가 증가\n영역의 공격에는 퀴버 카트리지로 발사되는 마법 화살 확률 2배로 적용\n\n재사용 대기시간 : 120초";
            break;
        case 17:
            rep = "잔영이 남아 활을 발사하는 것처럼 보일 정도로 빠르게 공격한다. 공격 반사 상태의 적을 공격해도 피해를 입지 않고 잔영의 시 재사용 대기시간 중 일정 횟수 공격하면 잔영이 짧은 시간 발동하여 공격한다.\n\nMP 800 소비, 최대 30초 동안 지속, 버프 지속 중 사정거리 안에 적이 있다면 잔영이 3초 동안 880%의 데미지로 3번 공격하는 화살을 일정 간격마다 발사\n공격 적중 시 1초마다 잔영의 공격 시간 3초 증가\n공격 지속 시간이 종료되면 잔영은 공격하지 않음\n\n재사용 대기시간 120초\n[패시브 효과 : 잔영의 시 재사용 대기시간 중 10번 직접 공격할 때마다 1초 동안 잔영이 자동 생성되어 사정거리 안에 적이 있다면 880% 데미지로 3번 공격하는 화살을 일정 간격마다 발사]\n액티브 효과와 패시브 효과는 동시에 발동되지 않음";
            break;
        case 18:
            rep = "모든 종류의 화살촉을 한번에 사용하며 적에게 닿으면 폭발하는 특별한 화염 화살촉을 추가로 사용한다. 화염 화살촉은 최대 HP가 가장 높은 보스 몬스터를 우선 추적하며 공격 반사 상태의 적을 공격해도 피해를 입지 않는다. 화염 화살촉은 한정된 수량만 준비되어 모두 사용 시 더 이상 공격이 발동되지 않는다.\n\nMP 1000 소비, 40초 동안 모든 종류의 화살촉을 한번에 사용하고 공격력 20% 증가, 화염 화살촉 추가 사용\n화염 화살 : 공격 시 5초 동안 적을 찾아 6명의 적을 550%의 데미지로 9번 공격하는 화염 화살을 6발 연속 발사, 화염 화살은 6발씩 총 18회까지 발사되며, 준비된 화염 화살촉을 모두 유지하면 버프가 남아있어도 공격 발동하지 않음, 재발동 대기시간 2초\n\n재사용 대기시간 120초";
            break;
        case 19:
            rep = "스킬 사용 시 효과가 활성화되고 재사용 시 비활성화되는 온오프 스킬\n\n50초마다 환영 생성, 최대 2개까지 생성 가능\n한번에 최대 HP의 50% 이상의 피해를 입거나 피격 시 사망하는 피해를 입으면 환영 1개 소멸 후 해당 피해 90% 감소\n환영이 1개라도 있고 공격 스킬 사용 시 주변에 공격할 적이 있다면 환영으로부터 880%의 데미지로 3번 공격하는 환영 화살 5개 발사, MP 80 소비, 재발동 대기시간 7.5초\n\n재사용 대기시간 : 1.5초";
            break;
        case 21:
            rep = "MP 90 소비, 12번 공격 적중 시 잔영이 3개 생성되어 전방의 적 1명을 향해 화살 발사\n애로우 플래터, 폭풍의 시, 실루엣 미라주, 잔영의 시, 퀴버 풀버스트, 애로우 레인은 7번 적중 시 1회 공격으로 간주\n발사된 화살은 목표한 적까지 가는 경로에 부딪힌 적을 최대 5명까지 관통하며 420%의 데미지로 4번 공격\n재사용 대기시간 1초\n\n[패시브 효과 : 바람의 시 공격 범위 증가, 데미지 70%p 증가]";
            break;
        case 23:
            rep = "화살이 유도되는 특수한 표식을 설치한다. 스킬을 재사용하면 화살을 타고 표식의 위치로 순간이동할 수 있다. 표식이 설치되어 있을 때 아래 방향키와 함께 스킬을 재사용하면 표식을 재설치할 수 있다.\n\nMP 28 소비, 120초 동안 지속되는 표식 설치\n스킬을 재사용하여 표식 위치로 순간이동, 순간이동 재사용 대기시간 2초\n설치 후 아래 방향키와 함께 스킬을 재사용하여 재설치 가능, 한번 재설치 시 1초 동안 재설치 불가\n\n재사용 대기시간 120초";
            break;
    }
    return rep;
};
skbm.getskillimage1Bowmaster = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "https://i.imgur.com/FlIWSH4.png";
            break;
        case 1:
            rep = "";
            break;
        case 2:
            rep = "https://i.imgur.com/4AuMOUl.png";
            break;
        case 3:
            rep = "https://i.imgur.com/UeaWfc7.png";
            break;
        case 4:
            rep = "https://i.imgur.com/s72mqH9.png";
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
            rep = "https://i.imgur.com/8g1QvlK.png";
            break;
        case 10:
            rep = "https://i.imgur.com/D5hIcFR.png";
            break;
        case 11:
            rep = "https://i.imgur.com/TuxEYLY.png";
            break;
        case 12:
            rep = "";
            break;
        case 13:
            rep = "https://i.imgur.com/92i3Fp2.png";
            break;
        case 14:
            rep = "https://i.imgur.com/WYxi4lX.png";
            break;
        case 15:
            rep = "https://i.imgur.com/oeNKiIL.png";
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
        case 20:
            rep = "https://i.imgur.com/QQGYSf8.png";
            break;
        case 21:
            rep = "https://i.imgur.com/NdfCssZ.png";
            break;
        case 22:
            rep = "";
            break;
        case 23:
            rep = "https://i.imgur.com/kMLrMpE.png";
            break;
    }
    return rep;
};
skbm.getskillimage2Bowmaster = function (skillcode){
    switch(skillcode){
        case 0:
            rep = "https://i.imgur.com/l85mobd.png";
            break;
        case 1:
            rep = "https://i.imgur.com/r7aBTBI.png";
            break;
        case 2:
            rep = "https://i.imgur.com/EaVmH5V.png";
            break;
        case 3:
            rep = "https://i.imgur.com/RE5pOy5.png";
            break;
        case 4:
            rep = "https://i.imgur.com/aqfRc4n.png";
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
            rep = "https://i.imgur.com/c0f9ShU.png";
            break;
        case 10:
            rep = "https://i.imgur.com/UFLvXOg.png";
            break;
        case 11:
            rep = "https://i.imgur.com/qGrxotr.png";
            break;
        case 12:
            rep = "https://i.imgur.com/7hJMYe0.png";
            break;
        case 13:
            rep = "https://i.imgur.com/rl6OTDr.png";
            break;
        case 14:
            rep = "https://i.imgur.com/PTGnTBu.png";
            break;
        case 15:
            rep = "https://i.imgur.com/nvZcM5Z.png";
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
        case 20:
            rep = "https://i.imgur.com/5pzdp1B.png";
            break;
        case 21:
            rep = "https://i.imgur.com/VEFNr8L.png";
            break;
        case 22:
            rep = "https://i.imgur.com/FpziprN.png";
            break;
        case 23:
            rep = "https://i.imgur.com/7zSjbwu.png";
            break;
    }
    return rep;
};

module.exports = skbm;