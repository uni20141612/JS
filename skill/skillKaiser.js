const skk = {};

skk.getskillKaiser = function (skillname){
    var kret = -1;
    switch(skillname){
        case "가디언 오브 노바":
        case "가디언오브노바":
        case "가디언":
        case "가오노":
            kret = 0;
            break;
        case "윌 오브 소드 : 스트라이크":
        case "윌오브소드 : 스트라이크":
        case "윌오브소드:스트라이크":
        case "윌 오브 소드 스트라이크":
        case "윌오브소드 스트라이크":
        case "윌오브소드스트라이크":
        case "윌오소스":
        case "윌오스":
        case "윌스":
            kret = 1;
            break;
        case "드라코 슬래셔":
        case "드라코슬래셔":
        case "드슬":
            kret = 2;
            break;
        case "드래곤 블레이즈":
        case "드래곤블레이즈":
        case "드블":
            kret = 3;
            break;
        /*case "":
            kret = 4;
            break;
        case "":
            kret = 5;
            break;
        case "":
            kret = 6;
            break;
        case "":
            kret = 7;
            break;
        case "":
            kret = 8;
            break;
        case "":
            kret = 9;
            break;
        case "":
            kret = 10;
            break;
        case "":
            kret = 11;
            break;
        case "":
            kret = 12;
            break;
        case "":
            kret = 13;
            break;
        case "":
            kret = 14;
            break;
        case "":
            kret = 15;
            break;
        case "":
            kret = 16;
            break;
        case "":
            kret = 17;
            break;
        case "":
            kret = 18;
            break;
        case "":
            kret = 19;
            break;*/
    }
    return kret;
};
skk.getskillnameKaiser = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "가디언 오브 노바";
            break;
        case 1:
            rep = "윌 오브 소드 : 스트라이크";
            break;
        case 2:
            rep = "드라코 슬래셔";
            break;
        case 3:
            rep = "드래곤 블레이즈";
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
skk.getskilldesc1Kaiser = function (skillcode){
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
skk.getskilldesc2Kaiser = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "반고정형 소환수 스킬";
            break;
        case 1:
            rep = "드라코 슬래셔를 강화하는 광범위 공격기";
            break;
        case 2:
            rep = "베는 이펙트와 캐릭터 사이에 간격안에 있는 몬스터는 피격X";
            break;
        case 3:
            rep = "자동 공격형 광범위 공격기이자 극딜기";
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
skk.getskilldesc3Kaiser = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "고대 카이저들의 영혼을 소환하여 함께 싸운다. 공격 반사 상태의 적을 공격해도 피해를 입지 않는다.\n\nMP 1000 소비, 45초 동안 고대 카이저의 영혼 3명을 소환, 소환된 카이저들은 자신의 주변 일정 범위를 벗어나지 않음. 소환된 카이저가 존재할 때 스킬을 다시 사용하면 자신이 있는 위치를 기준으로 재소환하며 10초마다 1번 사용가능\n\n6대 카이저 : 최대 10명의 적을 900%로 4번 공격\n15대 카이저 : 최대 10명의 적을 550%로 6번 공격\n27대 카이저 : 최대 10명의 적을 1950%로 2번 공격\n\n재사용 대기시간 : 120초";
            break;
        case 1:
            rep = "윌 오브 소드가 적을 공격하고 바닥에 꽂힌 후 강력한 불길이 발생되어 주변 적을 불태운다. 모든 윌 오브 소드가 바닥에 꽂힌 후 스킬을 한번 더 사용하여 불길을 강제로 발생시킬 수 있다. 불길이 적에게 적중하면 드라코 슬래셔의 재강화 대기시간이 즉시 초기화되고 재강화 대기시간이 일정 횟수 적용되지 않는다. 해당 강화는 윌 오브 소드 : 스트라이크의 재사용 대기시간 동안 유지된다. 윌 오브 소드가 소환된 상태에서만 사용할 수 있고 공격 반사 상태의 적을 공격해도 피해를 입지 않는다.\n\nMP 1000 소비, 각각의 무기가 적에게 날아가 1100%로 4번 공격하고 바닥에 꽂힌 후 2초 뒤 불길 발생\n불길은 최대 12명의 적을 1540%의 데미지로 6번 공격하며 바닥에 꽂혔던 시간에 비례하여 2200%까지 증가\n\n드라코 슬래셔의 재강화 대기시간 3회 무시\n재사용 대기시간 : 30초\n\n파이널 피규레이션 : 윌 오브 소드 및 불길의 공격횟수 1회 증가";
            break;
        case 2:
            rep = "고대 용의 기운으로 강화된 기가 슬래셔를 사용한다. 용의 기운은 전방으로 뿜여져 나가 적을 추가 공격한다. 사용 후 재강화 되는 데 시간이 필요하다.\n보스를 포함한 모든 적은 드라코 슬래셔를 맞을 때 슬로우 상태가 되고 용의 기운은 공격 반사 상태의 적을 공격해도 피해를 입지 않는다.\n[커맨드 스킬 : 공격 도중 + 기가 슬래셔]\n\nMP 60 소비, 최대 8명의 적을 650%의 데미지로 10번 공격 후, 최대 8명의 적에게 650%의 데미지로 6번 공격하는 용의 기운 발사, 추가 크리티컬 확률 100%, 몬스터 방어율 50% 추가 무시\n\n파이널 피규레이션 : 드라코 슬래셔의 모든 공격 횟수 2번 증가\n기가 슬래셔 사용 시 발동\n\n재강화 대기시간 : 5초";
            break;
        case 3:
            rep = "화염의 화신이 된 고대 용의 힘을 빌려 화염 그 자체가 된다.\n화염을 몸 주위에 둘러 주변 적을 공격하고 지나간 자리에 불의 기운을 남긴다. 자신의 공격 스킬이 적중하면 불의 기운이 폭발하여 광역 피해를 준다. 스킬을 재사용하여 즉시 종료시킬 수 있다.\n드래곤 블레이즈 지속 중이 아닌 재사용 대기시간 동안 자신의 공격 스킬 적중 시 화염구가 생성되어 추가 공격한다. 드래곤 블레이즈의 모든 공격은 공격 반사 상태의 적을 공격해도 피해를 입지 않는다.\n화염구 생성 온오프 : 마우스 우클릭\n\nMP 1000 소비, 20초 동안 몸 주위의 화염이 일정 주기마다 주변에 있는 최대 8명의 적을 550%의 데미지로 6번 자동 공격\n\n불의 기운 : 5초 동안 유지, 폭발 시 불의 기운 및 카이저 주변이 폭발하여 최대 10명의 적을 825%의 데미지로 5번 공격, 재폭발 대기시간 3.6초\n화염구 : 770%의 데미지로 3번 공격하는 화염구가 6개 생성, 재생성 대기시간 10초\n\n재사용 대기시간 : 120초";
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
skk.getskillimage1Kaiser = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "https://i.imgur.com/O5rvqYW.png";
            break;
        case 1:
            rep = "https://i.imgur.com/xSHnygV.png";
            break;
        case 2:
            rep = "https://i.imgur.com/B6ArNlv.png";
            break;
        case 3:
            rep = "https://i.imgur.com/Iu6GeYB.png";
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
skk.getskillimage2Kaiser = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "https://i.imgur.com/Z2n9OVl.png";
            break;
        case 1:
            rep = "https://i.imgur.com/VSYO6r8.png";
            break;
        case 2:
            rep = "https://i.imgur.com/k0bhwea.png";
            break;
        case 3:
            rep = "https://i.imgur.com/YflkwNg.png";
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

module.exports = skk;