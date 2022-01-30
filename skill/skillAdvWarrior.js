const skaw = {};

skaw.getskillAdvWarrior = function (skillname){
    var awret = -1;
    switch(skillname){
        case "인빈서블 빌리프":
        case "인빈서블빌리프":
        case "인빈서블":
        case "빌리프":
        case "링크":
        case "전사링크":
        case "모전링크":
            awret = 0;
            break;
        case "아이언 바디":
        case "아이언바디":
            awret = 1;
            break;
        case "워리어 마스터리":
        case "워리어마스터리":
        case "마스터리":
            awret = 2;
            break;
        case "피지컬 트레이닝":
        case "피지컬트레이닝":
        case "피지컬":
        case "트레이닝":
            awret = 3;
            break;
        case "돌진":
        case "돌진기":
            awret = 4;
            break;
        case "어퍼 차지":
        case "어퍼차지":
        case "윗점":
            awret = 5;
            break;
        case "매직 크래쉬":
        case "매직크래쉬":
            awret = 6;
            break;
        case "스탠스":
            awret = 7;
            break;
        case "에픽 어드벤쳐":
        case "에픽어드벤쳐":
        case "에픽":
            awret = 8;
            break;
        case "블리츠 실드":
        case "블리츠실드":
        case "블리츠":
        case "실드":
            awret = 9;
            break;
    }
    return awret;
};
skaw.getskillnameAdvWarrior = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "인빈서블 빌리프";
            break;
        case 1:
            rep = "아이언 바디";
            break;
        case 2:
            rep = "워리어 마스터리";
            break;
        case 3:
            rep = "피지컬 트레이닝";
            break;
        case 4:
            rep = "돌진";
            break;
        case 5:
            rep = "어퍼 차지";
            break;
        case 6:
            rep = "매직 크래쉬";
            break;
        case 7:
            rep = "스탠스";
            break;
        case 8:
            rep = "에픽 어드벤쳐";
            break;
        case 9:
            rep = "블리츠 실드";
            break;
    }
    return rep;
};
skaw.getskilldesc1AdvWarrior = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "HP가 15%이하시 자동발동, 3초동안 1초마다 HP35% 회복/ 쿨210초";
            break;
        case 1:
            rep = "방어력 200, 최대 HP 20% 증가. 적에게 피격 시 데미지 10% 감소";
            break;
        case 2:
            rep = "이속10, 점프력10, 최대이동속도10, 렙당 HP 20, 스탠스 40% 증가";
            break;
        case 3:
            rep = "영구적으로 힘 30, 민첩성 30 증가";
            break;
        case 4:
            rep = "305%,12명 공격하며 이동/ 히:붉은색, 팔:노란색, 닼:검보라색";
            break;
        case 5:
            rep = "5명,300% 공격하며 위로 이동/ 히:붉은색, 팔:노란색, 닼:검보라색";
            break;
        case 6:
            rep = "100%확률 일부버프 해제, 22초간 10명 버프효과제한/ 쿨60초";
            break;
        case 7:
            rep = "스탠스 확률 60% 증가.";
            break;
        case 8:
            rep = "60초 동안 데미지 10% 증가/ 쿨120초";
            break;
        case 9:
            rep = "HP21%만큼 보호막 5초동안 생성/ 다시사용시 12명,1100%,5번 공격";
            break;
    }
    return rep;
};
skaw.getskilldesc2AdvWarrior = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "6레벨기준, 회복불가상황 발동X, 쿨초, 벞지, 회복효율증가 및 감소효과X";
            break;
        case 1:
            rep = "히어로의 경우 분노의 피해 흡수 30%와 별개로 적용된다.";
            break;
        case 2:
            rep = "-";
            break;
        case 3:
            rep = "신체 단련을 통해 영구적으로 힘과 민첩성을 향상시킨다.";
            break;
        case 4:
            rep = " 다크나이트와 히어로는 시전중 슈퍼 스탠스 효과 부여";
            break;
        case 5:
            rep = "커맨드잠금 : 우클릭/ 지면에 발붙인 상태에서만 사용가능";
            break;
        case 6:
            rep = "해제되는 버프: 공격력/마력 증가, 방어력 증가, 하드 스킨";
            break;
        case 7:
            rep = "워리어 마스터리에서 스탠스 확률을 40% 확보, 상시스탠스100%";
            break;
        case 8:
            rep = "파티원 중 모험가 직업군에만 효과";
            break;
        case 9:
            rep = "생성 후 2초가 지나야 폭발가능/ 쿨15초";
            break;
    }
    return rep;
};
skaw.getskillimage1AdvWarrior = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "https://i.imgur.com/wNfmi3F.png";
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
            rep = "https://i.imgur.com/PCWirgS.png";
            break;
        case 5:
            rep = "https://i.imgur.com/foZ4mqn.png";
            break;
        case 6:
            rep = "https://i.imgur.com/DN77Ja8.png";
            break;
        case 7:
            rep = "";
            break;
        case 8:
            rep = "https://i.imgur.com/D0bO8a4.png";
            break;
        case 9:
            rep = "https://i.imgur.com/vrrSDaf.png";
            break;
    }
    return rep;
};
skaw.getskillimage2AdvWarrior = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "https://i.imgur.com/TeGQhdt.png";
            break;
        case 1:
            rep = "https://i.imgur.com/EWygphK.png";
            break;
        case 2:
            rep = "https://i.imgur.com/Q1aNO9i.png";
            break;
        case 3:
            rep = "https://i.imgur.com/4Hk5pzo.png";
            break;
        case 4:
            rep = "https://i.imgur.com/8eNi5bd.png";
            break;
        case 5:
            rep = "https://i.imgur.com/v6OOpeO.png";
            break;
        case 6:
            rep = "https://i.imgur.com/SnYvMsF.png";
            break;
        case 7:
            rep = "https://i.imgur.com/r3uVL5z.png";
            break;
        case 8:
            rep = "https://i.imgur.com/t8bYAcn.png";
            break;
        case 9:
            rep = "https://i.imgur.com/wLgvxMz.png";
            break;
    }
    return rep;
};

module.exports = skaw;