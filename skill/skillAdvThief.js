const skat = {};

skat.getskillAdvThief = function (skillname){
    var atret = -1;
    switch(skillname){
        case "시프 커닝":
        case "시프커닝":
        case "모도링크":
        case "링크":
            atret = 0;
            break;
        case "플래시 점프":
        case "플래시점프":
        case "플점":
            atret = 1;
            break;
        case "다크 사이트":
        case "다크사이트":
        case "닼사":
        case "닥사":
        case "투명":
            atret = 2;
            break;
        case "헤이스트":
        case "셀프 헤이스트":
        case "셀프헤이스트":
        case "헤이":
            atret = 3;
            break;
        case "피지컬 트레이닝":
        case "피지컬트레이닝":
        case "피지컬":
        case "트레이닝":
            atret = 4;
            break;
        case "베놈":
            atret = 5;
            break;
        case "래디컬 다크니스":
        case "래디컬다크니스":
        case "래디컬":
            atret = 6;
            break;
        case "쉐도우 파트너":
        case "쉐도우파트너":
        case "쉐파":
        case "미러 이미징":
        case "미러이미징":
        case "미러":
            atret = 7;
            break;
        case "써든 레이드":
        case "써든레이드":
        case "써든":
        case "광역기":
            atret = 8;
            break;
        case "페이탈 베놈":
        case "페이탈베놈":
        case "페이탈":
            atret = 9;
            break;
        case "에픽 어드벤쳐":
        case "에픽어드벤쳐":
        case "에픽":
            atret = 10;
            break;
        case "얼티밋 다크 사이트":
        case "얼티밋다크사이트":
        case "얼닼사":
        case "얼닥사":
            atret = 11;
            break;
    }
    return atret;
};
skat.getskillnameAdvThief = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "시프 커닝";
            break;
        case 1:
            rep = "플래시 점프";
            break;
        case 2:
            rep = "다크 사이트";
            break;
        case 3:
            rep = "헤이스트(셀프 헤이스트)";
            break;
        case 4:
            rep = "피지컬 트레이닝";
            break;
        case 5:
            rep = "베놈";
            break;
        case 6:
            rep = "래디컬 다크니스";
            break;
        case 7:
            rep = "쉐도우 파트너(미러 이미징)";
            break;
        case 8:
            rep = "써든 레이드";
            break;
        case 9:
            rep = "페이탈 베놈";
            break;
        case 10:
            rep = "에픽 어드벤쳐";
            break;
        case 11:
            rep = "얼티밋 다크 사이트";
            break;
    }
    return rep;
};
skat.getskilldesc1AdvThief = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "적에게 상태이상을 적용시키면 10초 동안 데미지 18% 증가";
            break;
        case 1:
            rep = "일정 거리 점프. 2회 연속 사용 가능";
            break;
        case 2:
            rep = "200초간 몸을 숨김/ HP비례공격 피격시 횟수당 쿨3초 적용";
            break;
        case 3:
            rep = "200초간 이속40, 점프력20/ [패시브: 최대이속20 증가]";
            break;
        case 4:
            rep = "영구적으로 행운 30, 민첩성 30 증가";
            break;
        case 5:
            rep = "30%확률, 6초간 초당 90% 지속피해";
            break;
        case 6:
            rep = "최대HP 20%, 상태이상내성 30, 모든속성내성 30% 증가";
            break;
        case 7:
            rep = "200초간 모든공격 최종뎀 70% 추가타격 그림자 소환";
            break;
        case 8:
            rep = "15명,494%,7번 공격, 10초동안 초당 210% 도트데미지";
            break;
        case 9:
            rep = "50%확률, 8초간 초당 160% 도트데미지 추가";
            break;
        case 10:
            rep = "60초 동안 데미지 10% 증가/ 쿨120초";
            break;
        case 11:
            rep = "30초간 다크 사이트 중 은신 해제되지 않음/ 쿨190초";
            break;
    }
    return rep;
};
skat.getskilldesc2AdvThief = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "재발동 대기시간 20초";
            break;
        case 1:
            rep = "트리플 점프";
            break;
        case 2:
            rep = "최대 5번까지 중첩/ 투사체 떨어지는 패턴 회피가능";
            break;
        case 3:
            rep = "듀블은 개인버프, 점프력 23";
            break;
        case 4:
            rep = "-";
            break;
        case 5:
            rep = "링크스킬 시프 커닝 발동가능";
            break;
        case 6:
            rep = "-";
            break;
        case 7:
            rep = "이펙트 모두 다름, 이동제한공격 피격시 사라짐";
            break;
        case 8:
            rep = "쿨30초";
            break;
        case 9:
            rep = "3회 중첩 가능";
            break;
        case 10:
            rep = "파티원 중 모험가 직업군에만 효과";
            break;
        case 11:
            rep = "다크 사이트 중 공격 시 최종뎀 16%/ 어닼사 합적용";
            break;
    }
    return rep;
};
skat.getskillimage1AdvThief = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "";
            break;
        case 1:
            rep = "https://i.imgur.com/EdislG6.png";
            break;
        case 2:
            rep = "https://i.imgur.com/KqreOCW.png";
            break;
        case 3:
            rep = "https://i.imgur.com/nqejZYO.png";
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
            rep = "https://i.imgur.com/WtKDy9Z.png";
            break;
        case 8:
            rep = "https://i.imgur.com/ny5dQCh.png";
            break;
        case 9:
            rep = "";
            break;
        case 10:
            rep = "https://i.imgur.com/zWrNNAu.png";
            break;
        case 11:
            rep = "https://i.imgur.com/iFX73Mo.png";
            break;
    }
    return rep;
};
skat.getskillimage2AdvThief = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "https://i.imgur.com/G9zktr4.png";
            break;
        case 1:
            rep = "https://i.imgur.com/CmYO1uM.png";
            break;
        case 2:
            rep = "https://i.imgur.com/TbLa5Kf.png";
            break;
        case 3:
            rep = "https://i.imgur.com/nvKGwBQ.png";
            break;
        case 4:
            rep = "https://i.imgur.com/YlLMppg.png";
            break;
        case 5:
            rep = "https://i.imgur.com/rctcQKs.png";
            break;
        case 6:
            rep = "https://i.imgur.com/cNa5Lo1.png";
            break;
        case 7:
            rep = "https://i.imgur.com/GQRDkA5.png";
            break;
        case 8:
            rep = "https://i.imgur.com/bivy7uZ.png";
            break;
        case 9:
            rep = "https://i.imgur.com/Ao2qkpe.png";
            break;
        case 10:
            rep = "https://i.imgur.com/HWUHue7.png";
            break;
        case 11:
            rep = "https://i.imgur.com/HjCznUp.png";
            break;
    }
    return rep;
};

module.exports = skat;