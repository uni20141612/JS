const skf = {};

skf.getskillFlame = function (skillname){
    var fret = -1;
    switch(skillname){
        case "블레이징 오비탈 플레임":
        case "블레이징오비탈플레임":
        case "블레이징":
        case "오비탈플레임5":
        case "오비탈플레임V":
        case "블오플":            
            fret = 0;
            break;
        case "플레임 디스차지":
        case "플레임디스차지":
        case "디스차지":
        case "플디":
            fret = 1;
            break;
        case "인피니티 플레임 서클":
        case "인피니티플레임서클":
        case "인플서":
        case "서클":
            fret = 2;
            break;
        case "샐리맨더 미스칩":
        case "샐리맨더미스칩":
        case "샐리맨더":
        case "미스칩":
        case "샐미":
            fret = 3;
            break;
        /*case "":
            fret = 4;
            break;
        case "":
            fret = 5;
            break;
        case "":
            fret = 6;
            break;
        case "":
            fret = 7;
            break;
        case "":
            fret = 8;
            break;
        case "":
            fret = 9;
            break;
        case "":
            fret = 10;
            break;
        case "":
            fret = 11;
            break;
        case "":
            fret = 12;
            break;
        case "":
            fret = 13;
            break;
        case "":
            fret = 14;
            break;
        case "":
            fret = 15;
            break;
        case "":
            fret = 16;
            break;
        case "":
            fret = 17;
            break;
        case "":
            fret = 18;
            break;
        case "":
            fret = 19;
            break;*/
    }
    return fret;
};
skf.getskillnameFlame = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "블레이징 오비탈 플레임";
            break;
        case 1:
            rep = "플레임 디스차지";
            break;
        case 2:
            rep = "인피니티 플레임 서클";
            break;
        case 3:
            rep = "샐리맨더 미스칩";
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
    }
    return rep;
};
skf.getskilldesc1Flame = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "일정시간마다 12명,720%,6번 공격/ 방무50%/ 쿨5초";
            break;
        case 1:
            rep = "하단 참조";
            break;
        case 2:
            rep = "일정시간마다 12명,1100%,7번 공격/ 크확50%, 방무50%/ 쿨2.5초";
            break;
        case 3:
            rep = "하단 참조";
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
    }
    return rep;
};
skf.getskilldesc2Flame = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "덩치가 큰 적일수록 피해량이 크다";
            break;
        case 1:
            rep = "플위 둘이 같은 보스를 때려도 이그니션은 같이 적용된다.";
            break;
        case 2:
            rep = "초당 불사조의 깃털 1개 소비/ 12초마다 1개씩 최대15개";
            break;
        case 3:
            rep = "30레벨 기준 최대 마력수치 105";
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
    }
    return rep;
};
skf.getskilldesc3Flame = function (skillcode){
    rep = "";
    switch(skillcode){
        case 1:
            rep = "불꽃을 모아 화염의 화신을 해방시킨다. 스피릿 오브 플레임이 소환되었을 때만 사용 가능하고 소환한 화신의 종류에 따라 다른 공격이 발동된다.\n\n사용 시 모든 불꽃을 소모하며 소모한 불꽃의 수에 비례해 공격이 강화된다. 플레임 디스차지로는 이그니션 효과를 적용시킬 수 없다.\n\n패시브 효과 : 스킬 사용 시 적에게 이그니션 효과를 적용했다면 불꽃을 하나 획득하여 최대 6개 까지 획득 가능\n\n액티브 효과 : MP 500 소비, 불꽃 최소 2개 필요, 재사용 대기시간 20초\n\n[파이어 라이온] : 최대 15명의 적을 440%의 데미지로 12번 공격하는 폭발 5번 발동, 사용에 필요한 불꽃을 초과한 불꽃 1개마다 최종 데미지 35% 증가\n\n[플레임 폭스] : 8개의 여우불을 생성하여 범위 내 8명의 적을 랜덤하게 타격. 각 여우불 당 550%의 데미지로 공격하고 최대 7번 재생성. 사용에 필요한 불꽃을 초과한 불꽃 1개마다 2번 추가 재생성";
            break;
        case 3:
            rep = "장난기 넘치는 화염의 정령 샐리맨더를 소환하여 도움을 받는다.\n\n샐리맨더는 플레임위자드의 공격 스킬이 적중하면 주변의 적을 추적하여 공격하고 1회 행동에서 공격 횟수를 모두 소모하거나 소환자와 거리가 멀어지면 소환자의 위치로 돌아온다.\n\n샐리맨더의 공격이 적중할 때마다 불씨를 얻고 그에 비례해 샐리맨더가 하는 공격의 위력이 강해진다. 샐리맨더가 소멸할 때 불씨에 대한 보답으로 마력 증가 버프를 받을 수 있고 해당 버프는 버프 프리져의 효과를 받지 않는다.\n\n샐리맨더의 공격은 공격 반사 상태의 적을 공격해도 피해를 입지 않고 최대 HP가 가장 높은 보스 몬스터를 우선하나 이그니션 효과를 적용시킬 수 없다.\n\nMP 250 소비, 60초 동안 330%의 데미지로 1명의 적을 7번 공격하는 샐리맨더 소환, 1회 행동에서 MP 100 소모하고 최대 12번까지 튕기며 공격\n\n샐리맨더의 공격이 적중할 때마다 불씨를 얻고 불씨 1개마다 샐리맨더 공격의 최종 데미지 1% 증가, 불씨는 최대 45개까지 획득 가능\n\n샐리맨더 소멸 시 30초 동안 마력 15 증가, 불씨 1개마다 마력 2 추가 증가\n\n재사용 대기시간 : 90초";
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
    }
    return rep;
};
skf.getskillimage1Flame = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "https://i.imgur.com/pGC9Ans.png";
            break;
        case 1:
            rep = "https://i.imgur.com/s2k7JLr.png";
            break;
        case 2:
            rep = "https://i.imgur.com/EXlenby.png";
            break;
        case 3:
            rep = "https://i.imgur.com/GL3uosN.png";
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
    }
    return rep;
};
skf.getskillimage2Flame = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "https://i.imgur.com/71Pu6B7.png";
            break;
        case 1:
            rep = "https://i.imgur.com/Eh95YUL.png";
            break;
        case 2:
            rep = "https://i.imgur.com/RosFWRd.png";
            break;
        case 3:
            rep = "https://i.imgur.com/QhRTYxe.png";
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
    }
    return rep;
};

module.exports = skf;