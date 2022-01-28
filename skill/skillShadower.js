const sks = {};

sks.getskillShadower = function (skillname){
    var cret = -1;
    switch(skillname){
        case "쉐도우 어썰트":
        case "쉐도우어썰트":
        case "어썰트":
        case "쉐어":
            cret = 0;
            break;
        case "절개":
            cret = 1;
            break;
        case "소닉 블로우":
        case "소닉블로우":
        case "소블":
        case "소닉":
            cret = 2;
            break;
        case "멸귀참영진":
        case "멸귀":
        case "멸참":
            cret = 3;
            break;
        case "크루얼 스탭":
        case "크루얼스탭":
        case "크스":
            cret = 4;
            break;
        /*case "":
            cret = 5;
            break;
        case "":
            cret = 6;
            break;
        case "":
            cret = 7;
            break;
        case "":
            cret = 8;
            break;
        case "":
            cret = 9;
            break;
        case "":
            cret = 10;
            break;
        case "":
            cret = 11;
            break;
        case "":
            cret = 12;
            break;
        case "":
            cret = 13;
            break;
        case "":
            cret = 14;
            break;
        case "":
            cret = 15;
            break;
        case "":
            cret = 16;
            break;
        case "":
            cret = 17;
            break;
        case "":
            cret = 18;
            break;
        case "":
            cret = 19;
            break;*/
    }
    return cret;
};
sks.getskillnameShadower = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "쉐도우 어썰트";
            break;
        case 1:
            rep = "절개";
            break;
        case 2:
            rep = "소닉 블로우";
            break;
        case 3:
            rep = "멸귀참영진";
            break;
        case 4:
            rep = "크루얼 스탭";
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
sks.getskilldesc1Shadower = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "돌진, 10명,1320%,6번 공격/ 추가크확 25%, 방무100%/ 쿨60초";
            break;
        case 1:
            rep = "하단 참조";
            break;
        case 2:
            rep = "2.5초간 일정시간마다 8명,1100%,7번 연속 공격/ 방무 100%";
            break;
        case 3:
            rep = " 6명,935%,8번 공격 협력자 12번 출현후 우두머리 등장/ 방무20%";
            break;
        case 4:
            rep = "MP 40 소비, 8명의 적에게 250% 데미지로 6번 공격";
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
sks.getskilldesc2Shadower = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "방향키 방향으로 이동하며 공격, 4타까지 사용 가능";
            break;
        case 1:
            rep = "몬스터리젠시 판정이 전 직업 핑스킬 중 가장 빠르다";
            break;
        case 2:
            rep = "쿨80초/ 소모한 킬링포인트 당 쿨0.5초 감소";
            break;
        case 3:
            rep = "우두머리: 8명,1375%,15번 참격 4번 발동/ 쿨90초";
            break;
        case 4:
            rep = "[패시브 효과 : 최종 데미지 25% 증가]";
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
sks.getskilldesc3Shadower = function (skillcode){
    rep = "";
    switch(skillcode){
        case 1:
            rep = "패시브 효과 : 암살의 마지막 공격이 적중한 적에게 10초 동안 최대 3회까지 중첩되는 상처 디버프를 남김, 상처 디버프는 오직 1명의 적에게만 남길 수 있어 새로운 적에게 디버프를 남기면 이전에 남긴 디버프는 소멸\n\n액티브 효과 : MP 650 소비, 숨어 있던 동료들을 소환하여 최대 10명의 적을 1210%의 데미지로 5번 공격\n\n상처 디버프가 최대치인 적이 있다면 암살의 마지막 공격에서 연계하여 사용할 수 있고 해당 적의 뒤로 이동하여 1045%의 데미지로 7번 공격하는 참격 4번 발생, 추가 크리티컬 확률 100%, 몬스터 방어율 100% 추가 무시, 공격 후 1초 동안 무적\n\n재사용 대기시간 14초";
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
sks.getskillimage1Shadower = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "https://i.imgur.com/cpqwGAw.png";
            break;
        case 1:
            rep = "https://i.imgur.com/ANoitnf.png";
            break;
        case 2:
            rep = "https://i.imgur.com/DNDB7aL.png";
            break;
        case 3:
            rep = "https://i.imgur.com/Ew2lf8i.png";
            break;
        case 4:
            rep = "https://i.imgur.com/PZMnBP8.png";
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
sks.getskillimage2Shadower = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "https://i.imgur.com/ysSHCa4.png";
            break;
        case 1:
            rep = "https://i.imgur.com/W9jouGj.png";
            break;
        case 2:
            rep = "https://i.imgur.com/P3ZkVS3.png";
            break;
        case 3:
            rep = "https://i.imgur.com/4bkZZoF.png";
            break;
        case 4:
            rep = "https://i.imgur.com/VQyLUDf.png";
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

module.exports = sks;