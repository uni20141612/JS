const skda = {};

skda.getskillDemonavenger = function (skillname){
    var daret = -1;
    switch(skillname){
        case "데몬 프렌지":
        case "데몬프렌지":
        case "프렌지":
        case "데프":
            daret = 0;
            break;
        case "블러드 피스트":
        case "블러드피스트":
        case "블피":
            daret = 1;
            break;
        case "디멘션 소드":
        case "디멘션소드":
        case "디멘션":
        case "디소":
            daret = 2;
            break;
        case "레버넌트":
        case "레버":
            daret = 3;
            break;
        /*case "":
            daret = 4;
            break;
        case "":
            daret = 5;
            break;
        case "":
            daret = 6;
            break;
        case "":
            daret = 7;
            break;
        case "":
            daret = 8;
            break;
        case "":
            daret = 9;
            break;
        case "":
            daret = 10;
            break;
        case "":
            daret = 11;
            break;
        case "":
            daret = 12;
            break;
        case "":
            daret = 13;
            break;
        case "":
            daret = 14;
            break;
        case "":
            daret = 15;
            break;
        case "":
            daret = 16;
            break;
        case "":
            daret = 17;
            break;
        case "":
            daret = 18;
            break;
        case "":
            daret = 19;
            break;*/
    }
    return daret;
};
skda.getskillnameDemonavenger = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "데몬 프렌지";
            break;
        case 1:
            rep = "블러드 피스트";
            break;
        case 2:
            rep = "디멘션 소드";
            break;
        case 3:
            rep = "레버넌트";
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
skda.getskilldesc1Demonavenger = function (skillcode){
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
skda.getskilldesc2Demonavenger = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "최대 HP에 비해 현재 HP가 적을수록 최종 데미지가 증가한다.";
            break;
        case 1:
            rep = "회복 제한 디버프 무시, 무조건 최대 HP가 일정 비율로 회복";
            break;
        case 2:
            rep = "통상 모드 - 회전 모드";
            break;
        case 3:
            rep = "불사 상태에 돌입하는 액티브 버프";
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
skda.getskilldesc3Demonavenger = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "끝없는 복수심에 자신의 몸을 태워 힘을 얻는다. 마족의 피로 공격 반사 및 공격 무시 상태의 적에게도 피해를 줄 수 있다.\n\n최대 HP의 20% 소비, 초당 HP 6000 소비, 회복 아이템 및 스킬의 회복량 최대 HP의 2%까지로 제한, 최대 HP의 일정 비율로 피해를 입히는 포함한 모든 피격 데미지 30% 감소\n\n최대 HP 대비 소모된 HP 2%당 최종 데미지 1% 증가하여 최대 35%까지 증가, 일정 주기로 마족의 피가 바닥에 뿌려져 5초 동안 최대 10명의 적을 일정 주기마다 540%로 2번 공격\n최대 HP의 30% 이하에서는 데몬 프렌지로 HP를 소모하지 않고 회복량 제한도 받지 않음\n재사용 시 스킬 비활성화\n\n재사용 대기시간 120초";
            break;
        case 1:
            rep = "마족의 피를 응축시킨 후 폭발하듯 퍼뜨려 주변 적을 공격한다. 스킬 사용 중에도 사용할 수 있고 키다운을 통해 차지가 가능하며 차지한 시간에 따라 공격이 강화된다. 공격으로 적을 해치우거나 보스 몬스터를 공격했을 경우 체력이 회복되고 데몬 프렌지의 회복량 감소 상태나 고스트파크를 제외한 특정한 회복 불가 상황에서도 회복 할 수 있다.\n\n최대 HP의 1% 소비, 최대 8명의 적을 공격, 차지 중 초당 현재 HP의 3% 소비, 최대 차지 가능 시간 30초, 공격 동작 중 최대 HP의 일정 비율로 피해를 입히는 공격을 포함한 피격 데미지 30% 감소\n\n1단계 : 차지 불필요, 1100%의 데미지로 7번 공격, 최대 HP의 10% 회복\n2단계 : 차지 3초, 1430%의 데미지로 9번 공격, 최대 HP의 15% 회복\n3단계 : 2단계에서 추가 차지 4초, 1760%의 데미지로 12번 공격, 최대 HP의 25% 회복, 추가 크리티컬 확률 100%, 몬스터 방어율 100% 추가 무시\n\n재사용 대기시간 10초";
            break;
        case 2:
            rep = "데스페라도의 힘을 증폭시켜 다른 차원의 무형검을 현현시킨다. 무형검이 회전할 때의 공격은 공격 반사 상태의 적에게도 피해를 입힌다.\n\n최대 HP의 20% 소비, 40초 동안 3초마다 최대 8명의 적을 1870%의 데미지로 8번 공격하는 무형검 소환\n소환 중 스킬을 한번 더 사용하면 남은 지속시간이 1/5이 되지만 무형검이 주위를 빠르게 회전하며 일정 시간마다 최대 8명의 적을 660%의 데미지로 6번 공격\n\n디멘션 소드의 모든 공격은 몬스터 방어율 100% 추가 무시\n\n재사용 대기시간 120초";
            break;
        case 3:
            rep = "끝없는 분노로 인해 삶과 죽음의 경계를 넘은 망령이 된다.\n지속 중 피격 데미지로 인해 HP가 1 미만이 되지 않고 치명적 상태이상에 걸리지 않으며 받았던 데미지가 분노로 저장된다. 저장된 분노는 가시로 표출되어 주변을 공격하지만 스킬 종료 후 쌓였던 분노로 인해 지속적으로 고통을 받게 된다.\n지속 중 스킬을 한 번 더 사용해서 해제할 수 있고 분노의 가시는 공격 무시 및 공격 반사 상태의 적에게도 피해를 입힐 수 있으나 반사 피해를 무시하지 못한다.\n레버넌트 지속 중 및 분노로 인한 지속 피해를 받을 때 전투 상태가 유지된다.\n\n최대 HP의 25% 소비, 30초 동안 지속\n\n익시드 스킬 적중 시 최대 5명의 적을 660%의 데미지로 9번 공격하는 분노의 가시 발동, 몬스터 방어율 30% 추가 무시, 재발동 대기시간 4초\n받은 피해를 최대 HP의 200%에 해당하는 수치까지 분노로 저장하고 저장량에 비례해 분노의 가시 재발동 대기시간 감소, 일정 시간마다 현재 쌓인 분노의 7% 감소\n스킬 종료 후 일정 간격마다 저장된 분노와 최대 HP의 1%에 해당하는 피해를 합쳐 25번에 나누어 받음, 해당 피해로 사망하지 않음\n\n재사용 대기시간 : 240초";
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
skda.getskillimage1Demonavenger = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "https://i.imgur.com/xM99yOr.png";
            break;
        case 1:
            rep = "https://i.imgur.com/cG6lrtQ.png";
            break;
        case 2:
            rep = "https://i.imgur.com/Oh91QIE.png";
            break;
        case 3:
            rep = "https://i.imgur.com/VmRqQzB.png";
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
skda.getskillimage2Demonavenger = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "https://i.imgur.com/dA7QYRd.png";
            break;
        case 1:
            rep = "https://i.imgur.com/besnY3D.png";
            break;
        case 2:
            rep = "https://i.imgur.com/YMSzcgm.png";
            break;
        case 3:
            rep = "https://i.imgur.com/1uDpV1B.png";
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

module.exports = skda;