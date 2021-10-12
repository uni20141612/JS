const skew = {};

skew.getskillEunwol = function (skillname){
    var ewret = -1;
    switch(skillname){
        case "정령 집속":
        case "정령집속":
        case "정집":
            ewret = 0;
            break;
        case "귀문진":
            ewret = 1;
            break;
        case "진 귀참":
        case "진귀참":
            ewret = 2;
            break;
        case "파쇄 연권":
        case "파쇄연권":
        case "파쇄":
        case "파연":
            ewret = 3;
            break;
        /*case "":
            ewret = 4;
            break;
        case "":
            ewret = 5;
            break;
        case "":
            ewret = 6;
            break;
        case "":
            ewret = 7;
            break;
        case "":
            ewret = 8;
            break;
        case "":
            ewret = 9;
            break;
        case "":
            ewret = 10;
            break;
        case "":
            ewret = 11;
            break;
        case "":
            ewret = 12;
            break;
        case "":
            ewret = 13;
            break;
        case "":
            ewret = 14;
            break;
        case "":
            ewret = 15;
            break;
        case "":
            ewret = 16;
            break;
        case "":
            ewret = 17;
            break;
        case "":
            ewret = 18;
            break;
        case "":
            ewret = 19;
            break;*/
    }
    return ewret;
};
skew.getskillnameEunwol = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "정령 집속";
            break;
        case 1:
            rep = "귀문진";
            break;
        case 2:
            rep = "진 귀참";
            break;
        case 3:
            rep = "파쇄 연권";
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
skew.getskilldesc1Eunwol = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "사용 즉시 일부스킬제외 모든스킬 쿨타임 초기화/ 쿨120초";
            break;
        case 1:
            rep = "하단 참조";
            break;
        case 2:
            rep = " 10명,720%,12번 공격, 방무 50%/ 귀참 사용시 발동";
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
skew.getskilldesc2Eunwol = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "60초간 2초마다 공격스킬1회 자동발동/ 키다운스킬 3초간/ 최종뎀20%";
            break;
        case 1:
            rep = "장판 설치형 공격기";
            break;
        case 2:
            rep = "재강화 대기시간 6초";
            break;
        case 3:
            rep = "키다운형 극딜기";
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
skew.getskilldesc3Eunwol = function (skillcode){
    rep = "";
    switch(skillcode){
        case 1:
            rep = "정령이 소환되는 영역을 생성한다. 정령은 공격 반사의 적을 공격해도 피해를 입지 않는다.\n\nMP 1000 소비, 40초 동안 일정 주기마다 8초 동안 존재하는 정령 2마리를 소환하는 영역 생성, 정령은 최대 10마리까지 존재 가능\n\n정령은 영역 주위의 적을 찾아 660%의 데미지로 6번 공격한 후 적에게 달라붙어 소멸하면서 8초 동안 디버프를 부여\n디버프에 걸린 적을 공격할 때 크리티컬 확률 8%, 크리티컬 데미지 1% 증가\n디버프는 최대 10번까지 중첩 가능\n\n재사용 대기시간 90초";
            break;
        case 3:
            rep = "강령시킨 땅의 정령에 여우신의 힘을 더해 파괴적인 연타를 날린다.\n\n공격당 MP 60 소비, 키다운 동안 최대 10명의 적을 880%의 데미지로 5번 연속 공격, 최대 키다운 시간 1.3초\n키다운 종료 시 최대 10명의 적을 2090%의 데미지로 15번 공격하는 충격이 3번 발생하는 마무리 공격 발동, 마무리 공격 적중 시 여우령 15마리 추가 소환\n\n파쇄 연권 사용 중 최대 HP의 일정 비율로 피해를 입히는 공격을 포함한 피격 데미지 50% 감소, 공격 적중 시 여우령 100% 확률로 소환\n\n재사용 대기시간 : 90초";
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
skew.getskillimage1Eunwol = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "https://i.imgur.com/fOBy2WO.png";
            break;
        case 1:
            rep = "https://i.imgur.com/b1A2ztH.png";
            break;
        case 2:
            rep = "https://i.imgur.com/hslLuFJ.png";
            break;
        case 3:
            rep = "https://i.imgur.com/tLDrrLf.png";
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
skew.getskillimage2Eunwol = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "https://i.imgur.com/N4RjlzM.png";
            break;
        case 1:
            rep = "https://i.imgur.com/jeNgQQX.png";
            break;
        case 2:
            rep = "https://i.imgur.com/Dy0Iaj7.png";
            break;
        case 3:
            rep = "https://i.imgur.com/cjkcTKD.png";
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

module.exports = skew;