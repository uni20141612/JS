const skh = {};

skh.getskillHero = function (skillname){
    var hret = -1;
    switch(skillname){
        case "소드 오브 버닝 소울":
        case "소드오브버닝소울":
        case "버닝소울":
        case "소오버소":
            hret = 0;
            break;
        case "콤보 데스폴트":
        case "콤보데스폴트":
        case "데스폴트":
        case "데폴":
        case "콤데":
            hret = 1;
            break;
        case "콤보 인스팅트":
        case "콤보인스팅트":
        case "인스팅트":
        case "인팅":
        case "콤인":
            hret = 2;
            break;
        case "소드 일루전":
        case "소드일루전":
        case "일루전":
        case "소일":
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
skh.getskillnameHero = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "소드 오브 버닝 소울";
            break;
        case 1:
            rep = "콤보 데스폴트";
            break;
        case 2:
            rep = "콤보 인스팅트";
            break;
        case 3:
            rep = "소드 일루전";
            break;
        /*case 4:
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
            break;*/
    }
    return rep;
};
skh.getskilldesc1Hero = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "하단 참조";
            break;
        case 1:
            rep = "콤보 6개 소비/ 15명,880%,14번 공격/ 시전동작 중 무적/ 쿨20초";
            break;
        case 2:
            rep = "30초간 콤보로 증가하는 최종뎀, 보뎀, 공20%/ 충전확률50%감소";
            break;
        case 3:
            rep = "8명,275%,4번 참격 12회 발동 후 550%,5번 폭발 5회 발동";
            break;
        /*case 4:
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
            break;*/
    }
    return rep;
};
skh.getskilldesc2Hero = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "-";
            break;
        case 1:
            rep = "적중시 5초간 소모한 콤보와 같은 수치의 최종 데미지 증가";
            break;
        case 2:
            rep = "쿨240초/ 공간의상처 : 일정시간마다 6명,440%,6번 균열 3회/ 콤보 충전불가";
            break;
        case 3:
            rep = "쿨30초/ 매 타격 판정마다 파이널 어택 발동";
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
skh.getskilldesc3Hero = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "MP 350 소비, 75초 동안 자신의 주위에 영혼의 검을 생성, 스킬을 다시 사용하여 그 자리에 검을 고정 가능하나 자신과 거리가 멀어지면 자신의 주위로 복귀, 검이 존재할 때 레이징 블로우 강화\n\n자신의 공격 스킬 사용 시 1초마다 최대 8명의 적을 6번 공격, 추가 크리티컬 확률 50%\n\n일반 상태 : 680%의 데미지, 인레이지 상태일 경우 770%의 데미지\n고정 상태 : 620%의 데미지, 인레이지 상태일 경우 675%의 데미지\n\n재사용 대기시간 : 120초";
            break;
    }
    return rep;
};
skh.getskillimage1Hero = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "https://i.imgur.com/u26MmIm.png";
            break;
        case 1:
            rep = "https://i.imgur.com/vGZS6gB.png";
            break;
        case 2:
            rep = "https://i.imgur.com/0HauOad.png";
            break;
        case 3:
            rep = "https://i.imgur.com/aa5yhaM.png";
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
skh.getskillimage2Hero = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "https://i.imgur.com/IIrYQWB.png";
            break;
        case 1:
            rep = "https://i.imgur.com/wb0wHVN.png";
            break;
        case 2:
            rep = "https://i.imgur.com/nCVLAVz.png";
            break;
        case 3:
            rep = "https://i.imgur.com/4jgEsPk.png";
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