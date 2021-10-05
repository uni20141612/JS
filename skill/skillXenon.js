const skx = {};

skx.getskillXenon = function (skillname){
    var xret = -1;
    switch(skillname){
        case "메가 스매셔":
        case "메가스매셔":
        case "메가":
        case "스매셔":
        case "메스":
            xret = 0;
            break;
        case "오버로드 모드":
        case "오버로드모드":
        case "오버로드":
        case "오버":
        case "오모":
            xret = 1;
            break;
        case "홀로그램 그래피티 : 융합":
        case "홀로그램그래피티 : 융합":
        case "홀로그램그래피티:융합":
        case "홀로그램그래피티융합":
        case "융합":
            xret = 2;
            break;
        case "포톤 레이":
        case "포톤레이":
        case "포톤":
        case "포레":
            xret = 3;
            break;
        /*case "":
            xret = 4;
            break;
        case "":
            xret = 5;
            break;
        case "":
            xret = 6;
            break;
        case "":
            xret = 7;
            break;
        case "":
            xret = 8;
            break;
        case "":
            xret = 9;
            break;
        case "":
            xret = 10;
            break;
        case "":
            xret = 11;
            break;
        case "":
            xret = 12;
            break;
        case "":
            xret = 13;
            break;
        case "":
            xret = 14;
            break;
        case "":
            xret = 15;
            break;
        case "":
            xret = 16;
            break;
        case "":
            xret = 17;
            break;
        case "":
            xret = 18;
            break;
        case "":
            xret = 19;
            break;*/
    }
    return xret;
};
skx.getskillnameXenon = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "메가 스매셔";
            break;
        case 1:
            rep = "오버로드 모드";
            break;
        case 2:
            rep = "홀로그램 그래피티 : 융합";
            break;
        case 3:
            rep = "포톤 레이";
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
skx.getskilldesc1Xenon = function (skillcode){
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
skx.getskilldesc2Xenon = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "차지 중에는 무적이 아님";
            break;
        case 1:
            rep = "어떤 수단으로도 MP를 회복시키지 못한다";
            break;
        case 2:
            rep = "모든 홀로그램 그래피티의 기능들을 하나로 집약한 것";
            break;
        case 3:
            rep = "자동 대상 지정형 서브 극딜기";
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
skx.getskilldesc3Xenon = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "에너지를 모아 강력한 광선을 발사한다.\n\nMP 1000 소비, 최대 6초 동안 최대 15명의 적을 575%의 데미지로 6번 연속 공격, 공격 중 무적\n\n키다운을 통해 최대 90초까지 차지가 가능하며, 차지한 시간 3초마다 공격 시간이 1초씩 증가하여 최대 6초까지 증가, 최대 차지 시간을 넘어서면 차지 취소\n공격 중 스킬을 다시 사용하여 즉시 취소 가능\n\n재사용 대기시간 : 165초, 공격 시작 후 적용";
            break;
        case 1:
            rep = "에너지 코어를 과부하시켜 최대치를 초과하여 에너지를 모을 수 있게 한다. 코어가 과부하되었기 때문에 MP를 회복할 수 없게 되나 스킬 사용으로 에너지를 소모하지 않게 되고 과부하에 의해 발생한 플라즈마 전류가 주변 적을 공격한다. 플라즈마 전류는 공격 반사 상태의 적을 공격해도 피해를 입지 않는다. 최대치를 초과한 에너지는 아마란스 제너레이터로 충전시킬 수 없다.\n\nMP 250 소비, 초당 MP 최대 MP의 1% + 180 소비, 초과 에너지 20 충전 가능, 에너지 충전 시간 절반으로 감소\n초과 충전한 에너지 당 최종 데미지 1% 증가\n\n재사용 시 스킬 비활성화, 비활성화 시 초과 충전된 에너지 즉시 소멸\n\n플라즈마 전류는 랜덤한 주기로 발생하여 최대 12명의 적을 390%의 데미지로 6번 공격하는 전격 4번 발동\n\n재사용 대기시간 : 180초";
            break;
        case 2:
            rep = "모든 홀로그램 그래피티의 기능을 통합한 최신예 홀로그램 필드를 전개한다. 공격 반사 상태의 적을 공격해도 피해를 입지 않는다.\n\nMP 1000 소비, 30초 동안 홀로그램 필드 생성\n\n볼이 홀로그램 필드에 닿을 때마다 최대 10명의 적에게 550%로 5번 공격, 볼에 몬스터가 닿을 때에도 동일한 데미지를 줌\n홀로그램 필드 안의 파티원 데미지 20% 증가, 필드 안의 파티원이 회피 시 서플러스 에너지 1개 충전\n제논이 홀로그램 필드 안에 있을 경우 이지스 시스템으로 발사되는 미사일 8개 증가\n\n재사용 대기시간 100초";
            break;
        case 3:
            rep = "적을 끝까지 추적하여 공격하는 광자 캐논을 사용한다.\n\n스킬 사용 시 일정 시간 조준 모드가 되어 수발씩 조준하기 시작하며 조준이 완료되면 다음 조준이 시작된다. 스킬을 다시 사용하면 현재 조준이 완료된 적에게 광자 캐논을 발사한다.\n정해진 수의 초기 조준은 매우 빠르게 완료되고 추가 조준은 1발씩 조준되며 조준 속도가 느리다. 추가 조준은 조준 범위 안의 최대 HP가 가장 높은 보스 몬스터를 우선해서 조준하고 조준 중인 적을 공격하면 조준이 더 빨리 완료된다.\n조준 중 혹은 완료된 적으로부터 멀리 떨어지면 조준이 해제되고 발사하기 전 조준 모드 지속시간이 종료되면 모든 조준이 해제된다.\n\n포톤 레이는 공격 반사 상태의 적을 공격해도 피해를 입지 않고 버추얼 프로젝션이 적용되지 않으며 퍼지롭 매스커레이드, 멜트다운 익스플로젼, 메가 스매셔 사용 중에는 발사 동작없이 발사할 수 있다.\n\nMP 150 소비, 20초 동안 조준 모드 발동, 발사 시 MP 350 추가 소비\n초기 조준은 3발씩 조준되고 15발 조준 완료 후 추가 조준 15발까지 가능\n광자 캐논은 1발 당 770%의 데미지로 4번 공격\n\n재사용 대기시간 : 35초";
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
skx.getskillimage1Xenon = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "https://i.imgur.com/fPdudWT.png";
            break;
        case 1:
            rep = "https://i.imgur.com/k7p2iKp.png";
            break;
        case 2:
            rep = "https://i.imgur.com/erUi0Ho.png";
            break;
        case 3:
            rep = "https://i.imgur.com/Q5qLbnR.png";
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
skx.getskillimage2Xenon = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "https://i.imgur.com/Xf6gwmK.png";
            break;
        case 1:
            rep = "https://i.imgur.com/79UuhlV.png";
            break;
        case 2:
            rep = "https://i.imgur.com/Z6ft26J.png";
            break;
        case 3:
            rep = "https://i.imgur.com/3dnNtaZ.png";
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

module.exports = skx;