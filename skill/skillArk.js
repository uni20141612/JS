const ska = {};

ska.getskillArk = function (skillname){
    var aret = -1;
    switch(skillname){
        case "근원의 기억":
        case "근원의기억":
        case "근원":
        case "근기":
            aret = 0;
            break;
        case "인피니티 스펠":
        case "인피니티스펠":
        case "인스":
        case "인피니티":
            aret = 1;
            break;
        case "새어 나오는 악몽":
        case "새어나오는 악몽":
        case "새어나오는악몽":
        case "새나악":
            aret = 2;
            break;
        case "새어 나오는 흉몽":
        case "새어나오는 흉몽":
        case "새어나오는흉몽":
        case "새나흉":
            aret = 3;
            break;
        case "영원히 굶주리는 짐승":
        case "영원히굶주리는 짐승":
        case "영원히굶주리는짐승":
        case "영굶짐":
            aret = 4;
            break;
        /*case "":
            aret = 5;
            break;
        case "":
            aret = 6;
            break;
        case "":
            aret = 7;
            break;
        case "":
            aret = 8;
            break;
        case "":
            aret = 9;
            break;
        case "":
            aret = 10;
            break;
        case "":
            aret = 11;
            break;
        case "":
            aret = 12;
            break;
        case "":
            aret = 13;
            break;
        case "":
            aret = 14;
            break;
        case "":
            aret = 15;
            break;
        case "":
            aret = 16;
            break;
        case "":
            aret = 17;
            break;
        case "":
            aret = 18;
            break;
        case "":
            aret = 19;
            break;*/
    }
    return aret;
};
ska.getskillnameArk = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "근원의 기억";
            break;
        case 1:
            rep = "인피니티 스펠";
            break;
        case 2:
            rep = "새어 나오는 악몽";
            break;
        case 3:
            rep = "새어 나오는 흉몽";
            break;
        case 4:
            rep = "영원히 굶주리는 짐승";
            break;
        case 5:
            rep = "컨택트 카라반";
            break;
        case 6:
            rep = "매직 서킷";
            break;
        case 7:
            rep = "스펙터 잠식";
            break;
        case 8:
            rep = "정신력 고갈";
            break;
        case 9:
            rep = "잊혀지지 않는 악몽";
            break;
        case 10:
            rep = "잊혀지지 않는 흉몽";
            break;
        case 11:
            rep = "플레인 차지드라이브";
            break;
        case 12:
            rep = "스펠 불릿";
            break;
        case 13:
            rep = "미스틱 리프";
            break;
        case 14:
            rep = "인스팅트 리프";
            break;
        case 15:
            rep = "미스틱 아츠 마스터리";
            break;
        case 16:
            rep = "잠식 제어";
            break;
        case 17:
            rep = "스칼렛 차지드라이브";
            break;
        case 18:
            rep = "지워지지 않는 상처";
            break;
        case 19:
            rep = "멈출 수 없는 충동";
            break;
        case 20:
            rep = "멈출 수 없는 본능";
            break;
        case 21:
            rep = "다가오는 죽음";
            break;
        case 22:
            rep = "융합 개시";
            break;
        case 23:
            rep = "되살아나는 악몽";
            break;
        case 24:
            rep = "되살아나는 흉몽";
            break;
        case 25:
            rep = "거스트 차지드라이브";
            break;
        case 26:
            rep = "채워지지 않는 굶주림";
            break;
        case 27:
            rep = "기어 다니는 공포";
            break;
        case 28:
            rep = "돌아오는 증오";
            break;
        case 29:
            rep = "미스틱 아츠 트레이닝";
            break;
        case 30:
            rep = "인스팅트 아츠 트레이닝";
            break;
        case 31:
            rep = "융합 진행";
            break;
        case 32:
            rep = "끝나지 않는 악몽";
            break;
        case 33:
            rep = "끝나지 않는 흉몽";
            break;
        case 34:
            rep = "어비스 차지드라이브";
            break;
        case 35:
            rep = "걷잡을 수 없는 혼돈";
            break;
        case 36:
            rep = "황홀한 구속";
            break;
        case 37:
            rep = "어드밴스드 미스틱 아츠";
            break;
        case 38:
            rep = "어드밴스드 인스팅트 아츠";
            break;
        case 39:
            rep = "융합 완성";
            break;
        case 40:
            rep = "전투 광란";
            break;
        case 41:
            rep = "차지 스펠 앰플리피케이션";
            break;
        case 42:
            rep = "끝없는 고통";
            break;
    }
    return rep;
};
ska.getskilldesc1Ark = function (skillcode){
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
        case 32:
            rep = "";
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
            rep = "";
            break;
        case 37:
            rep = "";
            break;
        case 38:
            rep = "";
            break;
        case 39:
            rep = "";
            break;
        case 40:
            rep = "";
            break;
        case 41:
            rep = "";
            break;
        case 42:
            rep = "";
            break;
    }
    return rep;
};
ska.getskilldesc2Ark = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "광범위 공격기이자 무적기";
            break;
        case 1:
            rep = "스펠 불릿을 강화하는 액티브 버프";
            break;
        case 2:
            rep = "끝나지 않는 악몽을 일정 주기로 강화하는 패시브";
            break;
        case 3:
            rep = "끝나지 않는 흉몽을 일정 주기로 강화하는 패시브";
            break;
        case 4:
            rep = "설치형 극딜기";
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
        case 32:
            rep = "";
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
            rep = "";
            break;
        case 37:
            rep = "";
            break;
        case 38:
            rep = "";
            break;
        case 39:
            rep = "";
            break;
        case 40:
            rep = "";
            break;
        case 41:
            rep = "";
            break;
        case 42:
            rep = "";
            break;
    }
    return rep;
};
ska.getskilldesc3Ark = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "심연의 근원으로 이어진 통로를 열어 그 곳을 통과했을 때의 기억을 되살린다.\n스킬 사용 시 스펙터 잠식 상태가 되고 스킬 사용 도중 정신력을 소모하지 않지만 정신력이 고갈된 상태에서는 사용할 수 없다. 근원의 기억은 공격 무시 및 공격 반사 상태의 적에게도 피해를 입힐 수 있지만 다가오는 죽음이 발생하지 않는다.\n\n시전 즉시 심연의 근원과 연결되어 스펙터 잠식 상태에서도 정신력이 30초 동안 소모되지 않음\n심연의 통로가 열린 동안 일정 간격으로 최대 10명의 적을 880%의 데미지로 6번 공격, 공격 중 무적\n공격 종료 시 최대 15명의 적을 2,640%의 데미지로 12번 공격하는 폭발이 6번 발생\n\n재사용 대기시간 200초";
            break;
        case 1:
            rep = "생명력을 대가로 무한한 마력을 얻는다.\n\n최대 HP의 15% 소비\n100초 동안 지속\n\n레프 상태 : 스펠이 차지될 때 플레인 스펠이 남은 최대 스펠 차지 제한 만큼 차지\n스펙터 잠식 상태 : 다가오는 죽음 발동 시 심연의 기운 3개 추가 생성\n\n재사용 대기시간 240초";
            break;
        case 2:
            rep = "전투에 집중한 사이 새어나온 스펙터의 기운이 적들을 덮친다. 스펙터 잠식 상태에선 새어 나오는 흉몽으로 강화된다.\n공격 반사 상태의 적을 공격해도 피해를 입지 않는다.\n\n끝나지 않는 악몽 사용 시 최대 10명의 적을 1100%의 데미지로 9번 공격하는 스펙터의 기운 발동\n\n재발동 대기시간 10초\n플레인 차지드라이브를 제외한 차지드라이브류 스킬 적중 시 재발동 대기시간 1초 감소, 스킬 당 1회만 적용";
            break;
        case 3:
            rep = "전투에 집중한 사이 새어 나온 스펙터의 기운이 적들을 덮친다. 레프 상태에서는 새어 나오는 악몽으로 변경된다.\n공격 반사 상태의 적을 공격해도 피해를 입지 않는다.\n\n끝나지 않는 흉몽 사용 시 최대 12명의 적을 1320%의 데미지로 9번 공격하는 스펙터의 기운 발동\n\n재발동 대기시간 10초\n지워지지 않는 상처/멈출 수 없는 본능/채워지지 않는 굶주림/심연의 공포/걷잡을 수 없는 혼돈 적중 시 재발동 대기시간 1초 감소, 스킬 당 1회만 적용";
            break;
        case 4:
            rep = "심연의 깊은 곳과 연결된 통로를 뚫어 모든 것을 먹어 치우는 굶주린 짐승을 불러낸다. 짐승은 통로가 열린 후 일정 시간이 지나야 출현하며 스펙터의 힘을 사용하는 공격 스킬을 적중시키면 좀 더 빨리 출현시킬 수 있다. 영원히 굶주리는 짐승은 공격 무시 및 공격 반사 상태의 적에게도 피해를 입힐 수 있다.\n\nHP 500 소비, 사용 후 일정 시간 뒤 최대 12명의 적을 880%의 데미지로 12번 공격하는 충격이 20번 발동\n스펙터의 힘을 사용하는 공격 스킬 적중 시 0.6초 빠르게 공격 발생, 연타형 및 일부 스킬의 경우 30%만 적용\n\n재사용 대기시간 : 120초";
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
        case 32:
            rep = "";
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
            rep = "";
            break;
        case 37:
            rep = "";
            break;
        case 38:
            rep = "";
            break;
        case 39:
            rep = "";
            break;
        case 40:
            rep = "";
            break;
        case 41:
            rep = "";
            break;
        case 42:
            rep = "";
            break;
    }
    return rep;
};
ska.getskillimage1Ark = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "https://i.imgur.com/IiMRpNY.png";
            break;
        case 1:
            rep = "https://i.imgur.com/bxxa065.png";
            break;
        case 2:
            rep = "https://i.imgur.com/vSXGPzf.png";
            break;
        case 3:
            rep = "https://i.imgur.com/iX0bkHv.png";
            break;
        case 4:
            rep = "https://i.imgur.com/ESbUGzA.png";
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
        case 32:
            rep = "";
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
            rep = "";
            break;
        case 37:
            rep = "";
            break;
        case 38:
            rep = "";
            break;
        case 39:
            rep = "";
            break;
        case 40:
            rep = "";
            break;
        case 41:
            rep = "";
            break;
        case 42:
            rep = "";
            break;
    }
    return rep;
};
ska.getskillimage2Ark = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "https://i.imgur.com/ZVzXoE8.png";
            break;
        case 1:
            rep = "https://i.imgur.com/2eNYkTt.png";
            break;
        case 2:
            rep = "https://i.imgur.com/MI6khCt.png";
            break;
        case 3:
            rep = "https://i.imgur.com/NQ2IJ8f.png";
            break;
        case 4:
            rep = "https://i.imgur.com/Qo7w16V.png";
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
        case 32:
            rep = "";
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
            rep = "";
            break;
        case 37:
            rep = "";
            break;
        case 38:
            rep = "";
            break;
        case 39:
            rep = "";
            break;
        case 40:
            rep = "";
            break;
        case 41:
            rep = "";
            break;
        case 42:
            rep = "";
            break;
    }
    return rep;
};

module.exports = ska;