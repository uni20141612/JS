const skh = {};

skh.getskillHoyoung = function (skillname){
    var hret = -1;
    switch(skillname){
        case "선기 : 극대 분신난무":
        case "선기 : 극대분신난무":
        case "선기:극대분신난무":
        case "선기 극대 분신난무":
        case "선기 극대분신난무":
        case "선기극대분신난무":
        case "극대 분신난무":
        case "극대분신난무":
        case "분신난무":
            hret = 0;
            break;
        case "권술 : 산령소환":
        case "권술:산령소환":
        case "권술 산령소환":
        case "권술산령소환":
        case "산령소환":
            hret = 1;
            break;
        case "선기 : 강림 괴력난신":
        case "선기 : 강림괴력난신":
        case "선기:강림괴력난신":
        case "선기강림괴력난신":
        case "선기 강림 괴력난신":
        case "선기 강림괴력난신":
        case "강림 괴력난신":
        case "강림괴력난신":
        case "괴력난신":
            hret = 2;
            break;
        case "선기 : 천지인 환영":
        case "선기 : 천지인환영":
        case "선기:천지인환영":
        case "선기 천지인 환영":
        case "선기 천지인환영":
        case "선기천지인환영":
        case "천지인 환영":
        case "천지인환영":
            hret = 3;
            break;
        /*case "":
            hret = 4;
            break;
        case "":
            hret = 5;
            break;
        case "":
            hret = 6;
            break;
        case "":
            hret = 7;
            break;
        case "":
            hret = 8;
            break;
        case "":
            hret = 9;
            break;
        case "":
            hret = 10;
            break;
        case "":
            hret = 11;
            break;
        case "":
            hret = 12;
            break;
        case "":
            hret = 13;
            break;
        case "":
            hret = 14;
            break;
        case "":
            hret = 15;
            break;
        case "":
            hret = 16;
            break;
        case "":
            hret = 17;
            break;
        case "":
            hret = 18;
            break;
        case "":
            hret = 19;
            break;*/
    }
    return hret;
};
skh.getskillnameHoyoung = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "선기 : 극대 분신난무";
            break;
        case 1:
            rep = "권술 : 산령소환";
            break;
        case 2:
            rep = "선기 : 강림 괴력난신";
            break;
        case 3:
            rep = "선기 : 천지인 환영";
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
skh.getskilldesc1Hoyoung = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "30초간 공격시 분신 10개 생성, 생성후 1.5초간 재생성X/ 쿨 200초";
            break;
        case 1:
            rep = "[두루마리] 60초간 12명,1980%,8번 공격/ 쿨 200초";
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
skh.getskilldesc2Hoyoung = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "환영 분신부 지속시간 중에만 사용/ 환영분신부에서 440%p 증가, 4번공격";
            break;
        case 1:
            rep = "연계 3단계 성공시 일정시간마다 770%,4번공격/ 재발동 3초";
            break;
        case 2:
            rep = "막타 미사용시 자동으로 발동되지 않고 스킬이 종료된다.";
            break;
        case 3:
            rep = "금고봉 : 인을 난사에 가깝게 사용가능";
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
skh.getskilldesc3Hoyoung = function (skillcode){
    rep = "";
    switch(skillcode){
        case 2:
            rep = "근원을 알 수 없는 미지의 신들로부터 힘을 빌린다. 일정 시간 동안 신들의 힘을 받아 데미지가 증가하며 일정 횟수만큼 공격을 적중 시킬 때 마다 차원을 넘은 신들의 일격이 도달한다.\n스킬을 한 번 더 사용하면 짧은 시간 동안 신들을 직접 강림시켜 강력한 공격을 할 수 있다.\n선기 : 강림 괴력난신은 공격 반사 상태의 적을 공격해도 피해를 입지 않는다.\n\nMP 1000 소비, 30초 동안 데미지 80% 증가\n\n지속시간 중 공격을 12회 적중시킬 때 마다 최대 8명의 적을 1870% 데미지로 8번 공격하는 신들의 일격 발동, 재발동 대기시간 1.5초\n\n스킬 재사용 시 즉시 종료되며 최대 15명의 적을 2200% 데미지로 15번 공격하는 충격이 6번 발생하는 신들의 강림 발동\n신들의 강림은 시전 동작 중 무적이며 공격 무시 및 공격 반사 상태의 적에게도 피해를 입힘\n신들의 강림 발동 시 30초 동안 천/지/인 속성 스킬 및 허/실 스킬의 데미지가 20% 증가\n\n재사용 대기시간 : 200초";
            break;
        case 3:
            rep = "도술의 이치를 터득해 속성 연계를 할 수 있는 특별한 분신을 만들어낸다. 허/실 스킬을 제외한 직접 공격하는 호영의 스킬 적중 시 분신이 등장하여 현재 연계하지 않은 속성 공격을 하고 속성 연계를 완성시킨다.\n액티브 효과 지속 중 속성 연계 3단계 달성 시 천/지/인 도술 중 한 속성 도술의 재사용 대기시간이 초기화되며 속성 선택 시 재사용 대기시간 중인 스킬이 있는 속성이 우선된다.\n선기 : 천지인 환영은 공격 반사 상태의 적을 공격해도 피해를 입지 않는다.\n\n패시브 효과 : 최대 4명의 적을 1375%의 데미지로 6번 공격하는 분신 등장, 재등장 대기시간 5초\n액티브 효과 : MP 1250 소비, 30초 동안 패시브 효과가 재등장 대기시간 없이 2번 발동 가능, 이후 재등장 대기시간 2초로 적용\n재사용 대기시간 : 100초";
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
skh.getskillimage1Hoyoung = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "https://i.imgur.com/KIRc5Tq.png";
            break;
        case 1:
            rep = "https://i.imgur.com/RMd0Y9R.png";
            break;
        case 2:
            rep = "https://i.imgur.com/fgiLDgB.png";
            break;
        case 3:
            rep = "https://i.imgur.com/OZNWQGt.png";
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
skh.getskillimage2Hoyoung = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "https://i.imgur.com/bWpjqFQ.png";
            break;
        case 1:
            rep = "https://i.imgur.com/WEjhbaw.png";
            break;
        case 2:
            rep = "https://i.imgur.com/buJczGV.png";
            break;
        case 3:
            rep = "https://i.imgur.com/g5qEif1.png";
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

module.exports = skh;