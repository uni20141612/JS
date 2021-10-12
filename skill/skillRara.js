const skr = {};

skr.getskillRara = function (skillname){
    var rret = -1;
    switch(skillname){
        case "큰 기지개":
        case "큰기지개":
        case "기지개":
            rret = 0;
            break;
        case "해 강 산 바람":
        case "해강산 바람":
        case "해강산바람":
            rret = 1;
            break;
        case "용솟음치는 정기":
        case "용솟음치는정기":
        case "용솟음":
        case "용정":
            rret = 2;
            break;
        case "산등성이 굽이굽이":
        case "산등성이굽이굽이":
        case "산등성이":
        case "굽이굽이":
        case "산굽":
            rret = 3;
            break;
        /*case "":
            rret = 4;
            break;
        case "":
            rret = 5;
            break;
        case "":
            rret = 6;
            break;
        case "":
            rret = 7;
            break;
        case "":
            rret = 8;
            break;
        case "":
            rret = 9;
            break;
        case "":
            rret = 10;
            break;
        case "":
            rret = 11;
            break;
        case "":
            rret = 12;
            break;
        case "":
            rret = 13;
            break;
        case "":
            rret = 14;
            break;
        case "":
            rret = 15;
            break;
        case "":
            rret = 16;
            break;
        case "":
            rret = 17;
            break;
        case "":
            rret = 18;
            break;
        case "":
            rret = 19;
            break;*/
    }
    return rret;
};
skr.getskillnameRara = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "큰 기지개";
            break;
        case 1:
            rep = "해 강 산 바람";
            break;
        case 2:
            rep = "용솟음치는 정기";
            break;
        case 3:
            rep = "산등성이 굽이굽이";
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
skr.getskilldesc1Rara = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "하단 참조";
            break;
        case 1:
            rep = "산 강 바람 해의 토지령이 차례로 10명,1540%,10번 공격후";
            break;
        case 2:
            rep = "최대 10명을 935% 데미지로 8번 공격하는 충격이 5번 발동";
            break;
        case 3:
            rep = "산의 토지령 무리 3개 소환, 30초간 유지/ 6명,550%,4번 공격";
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
skr.getskilldesc2Rara = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "\"피하기 어려울걸요?\"";
            break;
        case 1:
            rep = "10명,1870%,15번 폭발 7번 발동/ 쿨 180초";
            break;
        case 2:
            rep = "쿨 20초";
            break;
        case 3:
            rep = "부딪히면 속도감소/ 무리당 총 20번까지 공격/ 쿨 60초";
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
skr.getskilldesc3Rara = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "[용맥 스킬]\n주변에 잠들어 있는 다수의 용맥의 힘을 한 번에 일깨운다. 정제되지 않은 방식으로 깨워진 용맥에서 무형의 기운이 생성되어 주변의 적을 추적 공격한다. 무형의 기운은 범위 내의 보스 몬스터를 우선하여 추적하며, 보스 몬스터가 여럿일 경우 최대 HP가 가장 높은 몬스터를 우선하여 추적한다. 용맥의 일깨워진 시점에 보스 몬스터가 없으면 각 용맥 주변의 몬스터를 추적한다. 큰 기지개는 자유로운 용맥이 아닌 가까운 용맥을 우선 소모하며 공격 반사 상태의 적을 공격해도 피해를 입지 않고 시전 동작 중 스탠스 100%가 적용된다.\n\nMP 500 소비, 용맥 일정 범위 내의 용맥 5개 한번에 일깨움\n\n일어난 용맥 하나당 무형의 기운 7개 생성, 무형의 기운은 1100% 데미지로 5번 공격\n하나의 적이 같은 용맥에서 생성된 무형의 기운에 여러 번 공격당하면 두 번째 기운부터 최종 데미지 30% 감소\n\n재사용 대기시간 60초, 최대로 일깨울 수 있는 용맥보다 일깨운 용맥이 적을 때 차이나는 용맥 1개당 재사용 대기시간 12초 감소";
            break;
        case 1:
            rep = "";
            break;
        case 2:
            rep = "";
            break;
        case 3:
            rep = "";
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
skr.getskillimage1Rara = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "https://i.imgur.com/nTBHYcY.png";
            break;
        case 1:
            rep = "https://i.imgur.com/Wv2tvCo.png";
            break;
        case 2:
            rep = "https://i.imgur.com/ubQa2bm.png";
            break;
        case 3:
            rep = "https://i.imgur.com/rH6lwdT.png";
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
skr.getskillimage2Rara = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "https://i.imgur.com/VERYpRU.png";
            break;
        case 1:
            rep = "https://i.imgur.com/K3UGsvP.png";
            break;
        case 2:
            rep = "https://i.imgur.com/M9rrVwm.png";
            break;
        case 3:
            rep = "https://i.imgur.com/aUQoowr.png";
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

module.exports = skr;