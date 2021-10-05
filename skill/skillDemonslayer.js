const skds = {};

skds.getskillDemonslayer = function (skillname){
    var dsret = -1;
    switch(skillname){
        case "데몬 어웨이크닝":
        case "데몬어웨이크닝":
        case "어웨이크닝":
        case "데어":
            dsret = 0;
            break;
        case "요르문간드":
        case "요르문":
        case "요르":
            dsret = 1;
            break;
        case "오르트로스":
        case "오르트":
        case "오르":
            dsret = 2;
            break;
        case "데몬 베인":
        case "데몬베인":
        case "베인":
        case "데베":
            dsret = 3;
            break;
        /*case "":
            dsret = 4;
            break;
        case "":
            dsret = 5;
            break;
        case "":
            dsret = 6;
            break;
        case "":
            dsret = 7;
            break;
        case "":
            dsret = 8;
            break;
        case "":
            dsret = 9;
            break;
        case "":
            dsret = 10;
            break;
        case "":
            dsret = 11;
            break;
        case "":
            dsret = 12;
            break;
        case "":
            dsret = 13;
            break;
        case "":
            dsret = 14;
            break;
        case "":
            dsret = 15;
            break;
        case "":
            dsret = 16;
            break;
        case "":
            dsret = 17;
            break;
        case "":
            dsret = 18;
            break;
        case "":
            dsret = 19;
            break;*/
    }
    return dsret;
};
skds.getskillnameDemonslayer = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "데몬 어웨이크닝";
            break;
        case 1:
            rep = "요르문간드";
            break;
        case 2:
            rep = "오르트로스";
            break;
        case 3:
            rep = "데몬 베인";
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
skds.getskilldesc1Demonslayer = function (skillcode){
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
skds.getskilldesc2Demonslayer = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "모든 데몬 슬래시 강화 효과 적용(패시브, 코강 하이퍼 등)";
            break;
        case 1:
            rep = "고정형 소환수 스킬";
            break;
        case 2:
            rep = "캐릭터의 공격에 반응";
            break;
        case 3:
            rep = "이 스킬만 혼자 240초 주기다.";
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
skds.getskilldesc3Demonslayer = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "진정한 마족의 힘에 눈을 뜬다. 서버러스는 공격 반사 상태의 적을 공격해도 피해를 입지 않는다.\n\n포스 100 소비, 65초 동안 진정한 마족의 힘을 각성하여 크리티컬 확률 65% 증가\n\n직접 공격하는 스킬 사용 시 8초마다 서버러스가 자동 발동, 데몬 슬래시가 강화되고 사용 중 데몬 트레이스 사용 가능\n\n강화 데몬 슬래시 : 최대 6명의 적을 3번 공격, 몬스터 방어율 50% 추가 무시, 보스 몬스터 공격 시 데미지 50% 증가\n강화 데몬 슬래시 데미지 : 1타와 2타 600%, 3타 700%, 4타 800%\n\n재사용 대기시간 : 120초";
            break;
        case 1:
            rep = "포스를 제물로 명계의 마룡을 소환한다. 마룡의 공격은 공격 반사 상태의 적을 공격해도 피해를 입지 않는다.\n\n포스 60, 최대 HP의 10% 소비\n\n16초 동안 일정 주기마다 최대 12명의 적을 1870%로 12번 공격\n소멸 시 최대 12명의 적에게 1980%의 데미지로 15번 추가 공격\n모든 공격은 추가 크리티컬 확률 100%, 몬스터 방어율 50% 추가 무시\n\n재사용 대기시간 105초";
            break;
        case 2:
            rep = "포스를 제물로 명계의 포악한 쌍둥이 신을 소환한다. 쌍둥이 신의 공격은 공격 반사 상태의 적을 공격해도 피해를 입지 않는다.\n\n포스 30 소비\n40초 동안 소환\n\n네메아 : 2초마다 최대 10명의 적을 880% 데미지로 12번 공격, 공격 시 포스 추가 흡수량 8\n게리온 : 3초마다 최대 10명의 적을 1980% 데미지로 10번 공격, 공격 시 포스 추가 흡수량 12\n\n모든 공격은 추가 크리티컬 확률 100%, 몬스터 방어율 50% 추가 무시\n\n재사용 대기시간 120초";
            break;
        case 3:
            rep = "강대한 포스를 분출하여 적들을 파멸시킨다. 키다운 종료 시 포스에 휩싸여 무적 상태로 더욱 강력한 공격을 할 수 있다. 무적 공격 중 아래 방향키와 함께 스킬을 재사용하여 즉시 종료할 수 있다.\n\n포스 60, HP 2000 소비\n\n키다운 동안 최대 5명의 적을 715%의 데미지로 6번 연속 공격, 최대 키다운 시간 4초\n키다운 종료 시 1.5초 동안 무적이 되어 최대 12명의 적을 1430%의 데미지로 7번 연속 공격, 키다운 지속 시간에 비례해 공격시간 2배까지 증가\n모든 공격은 추가 크리티컬 확률 50%, 몬스터 방어율 30% 추가 무시\n\n재사용 대기시간 : 240초";
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
skds.getskillimage1Demonslayer = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "https://i.imgur.com/3WFaAzl.png";
            break;
        case 1:
            rep = "https://i.imgur.com/1GdjirG.png";
            break;
        case 2:
            rep = "https://i.imgur.com/93VoFi1.png";
            break;
        case 3:
            rep = "https://i.imgur.com/zYj9bId.png";
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
skds.getskillimage2Demonslayer = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "https://i.imgur.com/ypOwfyi.png";
            break;
        case 1:
            rep = "https://i.imgur.com/hFnrLIp.png";
            break;
        case 2:
            rep = "https://i.imgur.com/EIMKjVZ.png";
            break;
        case 3:
            rep = "https://i.imgur.com/4UENtPj.png";
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

module.exports = skds;