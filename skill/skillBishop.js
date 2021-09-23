const skb = {};

skb.getskillBishop = function (skillname){
    var bret = -1;
    switch(skillname){
        case "프레이":
        case "프":
            bret = 0;
            break;
        case "엔젤 오브 리브라":
        case "엔젤오브리브라":
        case "리브라":
        case "엔젤":
        case "엔오리":
            bret = 1;
            break;
        case "피스메이커":
        case "피메":
            bret = 2;
            break;
        case "디바인 퍼니시먼트":
        case "디바인퍼니시먼트":
        case "디바인":
        case "퍼니시먼트":
        case "디퍼":
            bret = 3;
            break;
        /*case "":
            bret = 4;
            break;
        case "":
            bret = 5;
            break;
        case "":
            bret = 6;
            break;
        case "":
            bret = 7;
            break;
        case "":
            bret = 8;
            break;
        case "":
            bret = 9;
            break;
        case "":
            bret = 10;
            break;
        case "":
            bret = 11;
            break;
        case "":
            bret = 12;
            break;
        case "":
            bret = 13;
            break;
        case "":
            bret = 14;
            break;
        case "":
            bret = 15;
            break;
        case "":
            bret = 16;
            break;
        case "":
            bret = 17;
            break;
        case "":
            bret = 18;
            break;
        case "":
            bret = 19;
            break;*/
    }
    return bret;
};
skb.getskillnameBishop = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "프레이";
            break;
        case 1:
            rep = "엔젤 오브 리브라";
            break;
        case 2:
            rep = "피스메이커";
            break;
        case 3:
            rep = "디바인 퍼니시먼트";
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
skb.getskilldesc1Bishop = function (skillcode){
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
            rep = "6명,495%,5번 연속 공격/ 벤전스오브엔젤 중 공격횟수 5 증가";
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
skb.getskilldesc2Bishop = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "최대 효과 30레벨 기준 INT 112,500";
            break;
        case 1:
            rep = "천사는 바하뮤트와 동시에 사용할 수 없다.";
            break;
        case 2:
            rep = "5초 쿨감시 사냥터 리젠타이밍보다 빠름";
            break;
        case 3:
            rep = "8.5초마다 1개씩 준비, 최대 8개/ 쿨1.5초";
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
skb.getskilldesc3Bishop = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "MP 1000 소비, 45초 동안 영역 안의 자신을 포함한 파티원의 최종 데미지 5% 증가\n\n일정 주기마다 최대 HP/MP의 1% 회복 및 일부 상태 이상 해제, 공격 속도 증가\n\n지능 2500당 최종 데미지 증가량 1% 증가, 최대 45%까지 증가 가능\n지능 2000당 HP/MP 회복량 1% 증가, 최대 10%까지 증가 가능\n지능 10000당 공격 속도 1단계 증가, 최대 3단계까지 증가 가능\n\n재사용 시 스킬 비활성화\n재사용 대기시간 : 180초";
            break;
        case 1:
            rep = "MP 1000 소비, 30초 동안 균형의 천사 소환, 천사는 비숍의 벤전스 오브 엔젤 활성화 상태에 따라 다른 모습으로 보임\n\n비활성화 : 자애의 천사 형상을 하며 5초마다 파티원의 최대 HP를 16% 회복시키고 데미지를 4초 동안 5% + 지능 1250 당 1% 증가시키는 버프 사용, 데미지는 최대 100%까지 증가 가능\n\n활성화 : 복수의 천사 형상을 하며 최대 12명의 적을 1100% 데미지로 12번 공격, 공격 당한 적은 60초 동안 천사의 표식이 생기고 적이 성속성 공격을 당할 때 표식이 사라지며 받는 최종 데미지 50% 증가\n\n재사용 대기시간 120초";
            break;
        case 2:
            rep = "MP 350 소비, 일정 시간마다 최대 6명의 적을 770%의 데미지로 4번 공격하거나 오브제에 접촉한 자신을 포함한 파티원의 HP를 비숍 최대 HP의 45% 만큼 회복\n\n최대 접촉 횟수 12회, 공격과 회복 모두 접촉 횟수 소모\n\n신성한 빛 : 최대 15명의 적을 770%의 데미지로 12번 공격, 비숍과 빛에 닿은 파티원은 8초 동안 11% + 남은 접촉 횟수마다 1%의 데미지가 증가하는 버프를 받음\n\n재사용 대기시간 10초";
            break;
    }
    return rep;
};
skb.getskillimage1Bishop = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "https://i.imgur.com/qNmWEjY.png";
            break;
        case 1:
            rep = "https://i.imgur.com/2LDi5OH.png";
            break;
        case 2:
            rep = "https://i.imgur.com/EFr2kMe.png";
            break;
        case 3:
            rep = "https://i.imgur.com/TgQ0TjT.png";
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
skb.getskillimage2Bishop = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "https://i.imgur.com/9jkGjJy.png";
            break;
        case 1:
            rep = "https://i.imgur.com/v6UhsZ8.png";
            break;
        case 2:
            rep = "https://i.imgur.com/PQjCxxB.png";
            break;
        case 3:
            rep = "https://i.imgur.com/HZBER6y.png";
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

module.exports = skb;