const skaa = {};

skaa.getskillAdvArcher = function (skillname){
    var aaret = -1;
    switch(skillname){
        case "어드벤쳐러 큐리어스":
        case "어드벤쳐러큐리어스":
        case "어드벤처러큐리어스":
        case "모궁링크":
            aaret = 0;
            break;
        case "크리티컬 샷":
        case "크리티컬샷":
        case "크리티컬":
            aaret = 1;
            break;
        case "피지컬 트레이닝":
        case "피지컬트레이닝":
        case "피지컬":
            aaret = 2;
            break;
        case "닷지":
            aaret = 3;
            break;
        case "일루전 스탭":
        case "일루전스탭":
            aaret = 4;
            break;
        case "에픽 어드벤쳐":
        case "에픽 어드벤처":
        case "에픽어드벤쳐":
        case "에픽어드벤처":
        case "에픽":
            aaret = 5;
            break;
        case "이볼브":
            aaret = 6;
            break;
    }
    return aaret;
};
skaa.getskillnameAdvArcher = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "어드벤쳐러 큐리어스";
            break;
        case 1:
            rep = "크리티컬 샷";
            break;
        case 2:
            rep = "피지컬 트레이닝";
            break;
        case 3:
            rep = "닷지";
            break;
        case 4:
            rep = "일루전 스탭";
            break;
        case 5:
            rep = "에픽 어드벤쳐";
            break;
        case 6:
            rep = "이볼브";
            break;
    }
    return rep;
};
skaa.getskilldesc1AdvArcher = function (skillcode){
    switch(skillcode){
        case 0:
            rep = "몬스터 컬렉션 등록 확률 15%, 크리티컬 확률 4% 증가";
            break;
        case 1:
            rep = "크리티컬 확률 40% 증가";
            break;
        case 2:
            rep = "영구적으로 힘 30, 민첩성 30 증가";
            break;
        case 3:
            rep = "30%확률로 회피, 회피성공후 1초동안 이어지는 모든공격은 크리티컬판정";
            break;
        case 4:
            rep = "민첩성 80 증가, 30% 확률로 추가 회피, 받는 피해 20% 감소";
            break;
        case 5:
            rep = "MP 100 소비, 60초 동안 데미지 10% 증가";
            break;
        case 6:
            rep = "40초 동안 강화되어 최대 10명의 적을 900%의 데미지로 7번 공격";
            break;
    }
    return rep;
};
skaa.getskilldesc2AdvArcher = function (skillcode){
    switch(skillcode){
        case 0:
            rep = "한 캐릭터에 최대 3번 중복해서 링크 스킬 지급이 가능하다.";
            break;
        case 1:
            rep = "크리티컬 확률이 증가한다.";
            break;
        case 2:
            rep = "신체 단련을 통해 영구적으로 힘과 민첩성을 증가시킨다.";
            break;
        case 3:
            rep = "회피 성공 후 1초 동안 이어지는 공격은 반드시 크리티컬로 적중한다.";
            break;
        case 4:
            rep = "민첩성과 회피율을 크게 증가시키며 받는 피해를 감소시킨다.";
            break;
        case 5:
            rep = "재사용 대기시간 120초. 파티원 중 모험가 직업군에만 효과";
            break;
        case 6:
            rep = "쿨타임 106초/피닉스,프리져,레이븐 하나가 소환되어 있을때만 사용가능";
            break;
    }
    return rep;
};
skaa.getskillimage1AdvArcher = function (skillcode){
    switch(skillcode){
        case 0:
            rep = "";
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
            rep = "https://i.imgur.com/iby6MpA.png";
            break;
        case 6:
            rep = "https://i.imgur.com/oVTS7YZ.png";
            break;
    }
    return rep;
};
skaa.getskillimage2AdvArcher = function (skillcode){
    switch(skillcode){
        case 0:
            rep = "https://i.imgur.com/9lGfw8L.png";
            break;
        case 1:
            rep = "https://i.imgur.com/1JcjIwH.png";
            break;
        case 2:
            rep = "https://i.imgur.com/g2Dczsv.png";
            break;
        case 3:
            rep = "https://i.imgur.com/UlvLzxF.png";
            break;
        case 4:
            rep = "https://i.imgur.com/OM8BT17.png";
            break;
        case 5:
            rep = "https://i.imgur.com/gIdVVkp.png";
            break;
        case 6:
            rep = "https://i.imgur.com/XWl9J6U.png";
            break;
    }
    return rep;
};

module.exports = skaa;