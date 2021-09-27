const skm = {};

skm.getskillMihile = function (skillname){
    var mret = -1;
    switch(skillname){
        case "로얄 가드":
        case "로얄가드":
        case "로얄":
            mret = 0;
            break;
        case "로 아이아스":
        case "로아이아스":
        case "로아":
            mret = 1;
            break;
        case "클라우 솔라스":
        case "클라우솔라스":
        case "클라우":
        case "솔라스":
        case "클솔":
            mret = 2;
            break;
        case "소드 오브 소울 라이트":
        case "소드오브소울라이트":
        case "소울라이트":
        case "소오소라":
        case "소소라":
            mret = 3;
            break;
        case "라이트 오브 커리지":
        case "라이트오브커리지":
        case "라오커":
            mret = 4;
            break;
        /*case "":
            mret = 5;
            break;
        case "":
            mret = 6;
            break;
        case "":
            mret = 7;
            break;
        case "":
            mret = 8;
            break;
        case "":
            mret = 9;
            break;
        case "":
            mret = 10;
            break;
        case "":
            mret = 11;
            break;
        case "":
            mret = 12;
            break;
        case "":
            mret = 13;
            break;
        case "":
            mret = 14;
            break;
        case "":
            mret = 15;
            break;
        case "":
            mret = 16;
            break;
        case "":
            mret = 17;
            break;
        case "":
            mret = 18;
            break;
        case "":
            mret = 19;
            break;*/
    }
    return mret;
};
skm.getskillnameMihile = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "로얄 가드";
            break;
        case 1:
            rep = "로 아이아스";
            break;
        case 2:
            rep = "클라우 솔라스";
            break;
        case 3:
            rep = "소드 오브 소울 라이트";
            break;
        case 4:
            rep = "라이트 오브 커리지";
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
skm.getskilldesc1Mihile = function (skillcode){
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
            rep = "25초간 데미지 25%/ 파티효과: 자신포함 파티원 체력 300% 해당 보호막 생성";
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
skm.getskilldesc2Mihile = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "판정시간이 0.7초~0.4초까지 줄어듦";
            break;
        case 1:
            rep = "넉백에 취약, 자신이 밀려나서 파티원들이 죽을수 있음";
            break;
        case 2:
            rep = "공격 판정은 로얄 가드보다 위에 있다.";
            break;
        case 3:
            rep = "사용 시 기본 공격 키에 소울 라이트 슬래시 배정";
            break;
        case 4:
            rep = "보호막 12초간 유지, 초당 최대치 7% 감소/ 쿨90초";
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
skm.getskilldesc3Mihile = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "소울 실드로 적의 공격을 완벽하게 방어하여 피해를 무효화하고 적에게 반격한다. 반격은 공격 무시 및 공격 반사 상태의 적에게도 피해를 입힐 수 있다. 무적 효과 및 공격력 증가 버프는 버프 지속시간 증가의 효과를 받지 않는다.\n자신의 스킬 사용 중에도 방어할 수 있다.\n\nMP 20 소비, 사용 후 일정 시간 안에 적의 공격을 받으면 4초 동안 무적이 되어 피해를 무효화하고 반격. 반격 후 12초 동안 공격력 증가.\n\n공격력 증가 버프가 있는 상태에서 방어에 성공하면 반격의 데미지와 공격 범위, 공격력 증가량이 점차 증가하나 방어 가능한 시간이 점차 감소.\n\n1회 : 최대 6명의 적에게 275% + 레벨당 1%의 데미지로 4번 공격 후 공격력 10 증가.\n2회 : 최대 7명의 적에게 340% + 레벨당 1%의 데미지로 5번 공격 후 공격력 15 증가.\n3회 : 최대 8명의 적에게 440% + 레벨당 1%의 데미지로 6번 공격 후 공격력 20 증가.\n\n재사용 대기시간 6초";
            break;
        case 1:
            rep = "적들의 공격으로부터 동료를 지키는 방패가 된다.\n방패를 들고 있는 동안 샤이닝 체이스를 제외한 이동 스킬을 사용할 수 없다.\n\nMP 1000 소비, 25초 동안 방패를 들어 자신과 파티원이 해당 영역에서 받는 최대 HP의 일정 비율로 피해를 입히는 공격을 포함한 피격 데미지 89% 감소\n\n방패는 적의 공격을 막을수록 3단계에 걸쳐 부서지며 각 단계당 10, 10, 13회씩 방어 가능\n\n방패 소멸 시 자신의 최종 데미지가 99초 동안 증가하고 남은 방어 횟수 1회당 1% 증가\n\n스킬을 다시 사용하여 방패 수동 소멸 가능\n재사용 대기시간 : 180초";
            break;
        case 2:
            rep = "소울 실드의 힘을 검에 집중해 전설로 내려오는 빛의 검을 구현하여 적을 공격한다. 재사용 대기시간 중 미하일의 스킬로 적을 직접 공격하면 빛의 검이 추가로 구현되어 피해를 입히며 해당 공격은 공격 반사 상태의 적을 공격해도 피해를 입지 않는다.\n\nMP 800 소비, 최대 12명의 적을 7번 공격\n로얄 가드의 공격력 증가 버프 중첩에 따라 데미지 증가\n사용 후 로얄 가드의 공격력 증가 버프 유지시간 6초 증가. 단, 최대치를 초과하지 못함.\n\n[0, 1회] : 950%의 데미지\n[2회] : 1020%의 데미지\n[3회] : 1110%의 데미지\n[4회] : 1320%의 데미지\n[5회] : 1540%의 데미지\n\n재사용 대기시간 12초\n재사용 대기시간 중 공격 시 5초마다 [1회]의 공격 발동, 해당 공격은 스킬 사용 후 5초 이후부터 발동하고 로얄 가드의 버프 유지시간을 증가시키지 않음\n\n모든 공격은 100% 확률로 암흑 공격, 암흑은 10초 동안 지속되며 대상의 명중률 30% 감소, 보스에게는 지속시간이 절반으로 감소.";
            break;
        case 3:
            rep = "소울의 힘을 검에 집중하여 영혼의 빛이 검이 깃들게 한다. 빛의 검 장착 중에는 공격키로 소울 라이트 슬래시를 사용할 수 있고 스킬을 재사용하여 강렬한 빛을 방출하는 라이트 포스레이를 1회 사용할 수 있다. 검의 잔상은 공격반사 상태의 적을 공격해도 피해를 입지 않는다.\n\nMP 1200 소비\n35초 동안 빛의 검을 장착하여 공격력 30%, 크리티컬 확률 100%, 적 방어율 무시 100% 증가, 로얄 가드의 방어 가능한 시간 0.5초로 증가, 검의 잔상이 일정 시간마다 최대 4명에 적에게 떨어져 990%의 데미지로 5번 공격\n\n소울 라이트 슬래시 : MP 100 소비, 최대 8명의 적을 880%의 데미지로 12번 공격\n\n라이트 포스레이 : 최대 8명의 적을 1870%의 데미지로 12번 공격하는 빛이 6번 발생\n\n재사용 대기시간 180초";
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
skm.getskillimage1Mihile = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "https://i.imgur.com/SOsD8O3.png";
            break;
        case 1:
            rep = "https://i.imgur.com/NVECM98.png";
            break;
        case 2:
            rep = "https://i.imgur.com/0WBw6r7.png";
            break;
        case 3:
            rep = "https://i.imgur.com/MQJiKKh.png";
            break;
        case 4:
            rep = "https://i.imgur.com/u3Zgubm.png";
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
skm.getskillimage2Mihile = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "https://i.imgur.com/xlGCJO8.png";
            break;
        case 1:
            rep = "https://i.imgur.com/YMNwckG.png";
            break;
        case 2:
            rep = "https://i.imgur.com/VVvs6qz.png";
            break;
        case 3:
            rep = "https://i.imgur.com/3miQJ9w.png";
            break;
        case 4:
            rep = "https://i.imgur.com/J5GaBjr.png";
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

module.exports = skm;