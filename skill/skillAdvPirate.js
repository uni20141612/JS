const skap = {};

skap.getskillAdvPirate = function (skillname){
    var apret = -1;
    switch(skillname){
        case "수영의 달인":
        case "수영의달인":
        case "수영":
            apret = 0;
            break;
        case "수납의 달인":
        case "수납의달인":
        case "수납":
        case "템칸":
            apret = 1;
            break;
        case "파이렛 블레스":
        case "파이렛블레스":
        case "파블":
            apret = 2;
            break;
        case "옥토 푸시":
        case "옥토푸시":
        case "몽키 푸시":
        case "몽키푸시":
        case "더블 점프":
        case "더블점프":
            apret = 3;
            break;
        case "피지컬 트레이닝":
        case "피지컬트레이닝":
        case "피지컬":
        case "파이렛 트레이닝":
        case "파이렛트레이닝":
            apret = 4;
            break;
        case "럭키 다이스":
        case "럭키다이스":
        case "다이스":
        case "럭다":
            apret = 5;
            break;
        case "더블 럭키 다이스":
        case "더블럭키다이스":
        case "더블럭다":
        case "더럭다":
        case "더블다이스":
            apret = 6;
            break;
        case "에픽 어드벤쳐":
        case "에픽어드벤쳐":
        case "에픽":
            apret = 7;
            break;
        case "파이렛 플래그":
        case "파이렛플래그":
        case "플래그":
        case "파플":
            apret = 8;
            break;
    }
    return apret;
};
skap.getskillnameAdvPirate = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "수영의 달인";
            break;
        case 1:
            rep = "수납의 달인";
            break;
        case 2:
            rep = "파이렛 블레스";
            break;
        case 3:
            rep = "파이렛 리프(캐논 리프)";
            break;
        case 4:
            rep = "피지컬 트레이닝(파이렛 트레이닝)";
            break;
        case 5:
            rep = "럭키 다이스";
            break;
        case 6:
            rep = "더블 럭키 다이스";
            break;
        case 7:
            rep = "에픽 어드벤쳐";
            break;
        case 8:
            rep = "파이렛 플래그";
            break;
    }
    return rep;
};
skap.getskilldesc1AdvPirate = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "영구적으로 수영 속도를 증가, 수영 상태일 때 HP 감소 없음";
            break;
        case 1:
            rep = "영구적으로 장비, 소비, 설치, 기타 인벤토리 24칸 확장";
            break;
        case 2:
            rep = "올스탯 70, HP1225, MP1225, 피격데미지 15%감소";
            break;
        case 3:
            rep = "일정 거리 점프";
            break;
        case 4:
            rep = "영구적으로 힘 30, 민첩성 30 증가";
            break;
        case 5:
            rep = "주사위버프 지속시간 180초/ 쿨180초/ 1:쿨반감";
            break;
        case 6:
            rep = "50%확률 발동, 버프지속시간 180초/ 쿨180초/ 1:쿨반감";
            break;
        case 7:
            rep = "60초 동안 데미지 10% 증가/ 쿨120초";
            break;
        case 8:
            rep = "30초간 해적깃발소환/ 깃발 주변파티원 능력치25%, 몹방어율25%감소";
            break;
    }
    return rep;
};
skap.getskilldesc2AdvPirate = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "아쿠아로드와 같은 수중 필드에서 적용";
            break;
        case 1:
            rep = "-";
            break;
        case 2:
            rep = "스킬사용시 장비의 힘과 민첩이 바뀌어 적용(일부 제외)";
            break;
        case 3:
            rep = "바이퍼/캡틴은 문어, 캐논슈터는 원숭이";
            break;
        case 4:
            rep = "바이퍼/캡틴은 신체 단련, 캐논슈터는 비밀 수련";
            break;
        case 5:
            rep = "2:방30% 3:HP,MP20% 4:크확15% 5:뎀20% 6:경치30%";
            break;
        case 6:
            rep = "2:방40% 3:HP,MP30% 4:크확25% 5:뎀30% 6:경치40%";
            break;
        case 7:
            rep = "파티원 중 모험가 직업군에만 효과";
            break;
        case 8:
            rep = "쿨30초/ 모션 취하는 동안 슈퍼스탠스 적용";
            break;
    }
    return rep;
};
skap.getskillimage1AdvPirate = function (skillcode){
    rep = "";
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
            rep = "https://i.imgur.com/sHuQkZ5.png";
            break;
        case 4:
            rep = "";
            break;
        case 5:
            rep = "https://i.imgur.com/hHjindn.png";
            break;
        case 6:
            rep = "https://i.imgur.com/lCO0zu3.png";
            break;
        case 7:
            rep = "https://i.imgur.com/Rrvb0MH.png";
            break;
        case 8:
            rep = "https://i.imgur.com/GYQkRsI.png";
            break;
    }
    return rep;
};
skap.getskillimage2AdvPirate = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "https://i.imgur.com/yFPt3Bk.png";
            break;
        case 1:
            rep = "https://i.imgur.com/vDYRucn.png";
            break;
        case 2:
            rep = "https://i.imgur.com/C8Re8kd.png";
            break;
        case 3:
            rep = "https://i.imgur.com/AE9zW0c.png";
            break;
        case 4:
            rep = "https://i.imgur.com/pZghF81.png";
            break;
        case 5:
            rep = "https://i.imgur.com/hUuBeRH.png";
            break;
        case 6:
            rep = "https://i.imgur.com/gRG8mHl.png";
            break;
        case 7:
            rep = "https://i.imgur.com/WEa1P2S.png";
            break;
        case 8:
            rep = "https://i.imgur.com/u08jZNG.png";
            break;
    }
    return rep;
};

module.exports = skap;