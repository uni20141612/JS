const skc = {};

skc.getskillCaptain = function (skillname){
    var cret = -1;
    switch(skillname){
        case "불릿 파티":
        case "불릿파티":
        case "불파":
        case "파티":
            cret = 0;
            break;
        case "데드아이":
        case "데아":
            cret = 1;
            break;
        case "노틸러스 어썰트":
        case "노틸러스어썰트":
        case "어썰트":
            cret = 2;
            break;
        case "데스 트리거":
        case "데스트리거":
        case "트리거":
            cret = 3;
            break;
        /*case "":
            cret = 4;
            break;
        case "":
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
skc.getskillnameCaptain = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "불릿 파티";
            break;
        case 1:
            rep = "데드아이";
            break;
        case 2:
            rep = "노틸러스 어썰트";
            break;
        case 3:
            rep = "데스 트리거";
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
skc.getskilldesc1Captain = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "6초간 일정시간마다 주변 15명,500%,5번 공격/ 쿨75초";
            break;
        case 1:
            rep = "하단 참조";
            break;
        case 2:
            rep = "하단 참조";
            break;
        case 3:
            rep = "7명,715%,7번 탄환 7개 발사/ 쿨45초/ 못튕긴횟수당 0.5초감소";
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
skc.getskilldesc2Captain = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "사용중 공격키연타시 사용시간 최대6초 증가/ 이동,점프가능";
            break;
        case 1:
            rep = "시전 동작 중 무적, 정조준된 적이 있다면 무적 시간 증가";
            break;
        case 2:
            rep = "전함 노틸러스로 노틸러스가 등장하고 있을 때는 사용할 수 없다.";
            break;
        case 3:
            rep = "컨티뉴얼 에이밍 적용 중인 적 우선목표";
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
skc.getskilldesc3Captain = function (skillcode){
    rep = "";
    switch(skillcode){
        case 1:
            rep = "패시브 효과 : 데드아이가 재사용 대기시간이 아니라면 사정거리 내의 최대 12명을 각기 조준하기 시작, 정확히 조준되었을 때 데드아이를 사용하지 않으면 조준이 풀리고 잠시 후 다시 조준 시작\n\n액티브 효과 : MP 850 소모, 조준하고 있는 적을 710%의 데미지로 15번 공격, 추가 크리티컬 확률 100%\n\n정확히 조준될수록 더 큰 피해를 줄 수 있으며 최대 3배까지 증가\n\n스킬 사용 시 공격 받는 적이 스킬의 최대 공격 가능한 몬스터 수보다 적을 때 1명 당 최종 데미지 4% 추가 증가\n\n재사용 대기시간 30초";
            break;
        case 2:
            rep = "MP 1500 소비, 최대 15명의 적을 공격, 시전 동작 중 무적\n\n선체 공격 : 일정 시간마다 1320%의 데미지로 6번 공격하는 선체 공격이 7번 발동\n\n일제 사격 : 일정 시간마다 660%의 데미지로 12번 공격하는 일제 사격이 36번 발동\n\n재사용 대기시간 180초\n\n전함 노틸러스/노틸러스 어썰트 중 어느 하나의 스킬 사용 시 다른 스킬에 재사용 대기시간 8초 적용. 해당 시간보다 긴 재사용 대기시간이 적용 중일 경우 적용되지 않음.";
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
skc.getskillimage1Captain = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "https://i.imgur.com/iet1vYQ.png";
            break;
        case 1:
            rep = "https://i.imgur.com/OnPxfUn.png";
            break;
        case 2:
            rep = "https://i.imgur.com/47MVOtL.png";
            break;
        case 3:
            rep = "https://i.imgur.com/FQpbfvn.png";
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
skc.getskillimage2Captain = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "https://i.imgur.com/ANlmTZ9.png";
            break;
        case 1:
            rep = "https://i.imgur.com/zk4TDHI.png";
            break;
        case 2:
            rep = "https://i.imgur.com/EbD2W4D.png";
            break;
        case 3:
            rep = "https://i.imgur.com/d8IZ8vo.png";
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

module.exports = skc;