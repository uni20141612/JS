const skk = {};

skk.getskillKinesis = function (skillname){
    var kret = -1;
    switch(skillname){
        case "싸이킥 토네이도":
        case "싸이킥토네이도":
        case "토네이도":
        case "싸토":
            kret = 0;
            break;
        case "얼티메이트-무빙 매터":
        case "얼티메이트-무빙매터":
        case "얼티메이트무빙매터":
        case "무빙매터":
        case "얼무매":
        case "무매":
            kret = 1;
            break;
        case "얼티메이트-싸이킥 불릿":
        case "얼티메이트-싸이킥불릿":
        case "얼티메이트싸이킥불릿":
        case "싸이킥불릿":
        case "불릿":
        case "싸불":
            kret = 2;
            break;
        case "로 오브 그라비티":
        case "로오브그라비티":
        case "로오그":
        case "로그":
            kret = 3;
            break;
        /*case "":
            kret = 4;
            break;
        case "":
            kret = 5;
            break;
        case "":
            kret = 6;
            break;
        case "":
            kret = 7;
            break;
        case "":
            kret = 8;
            break;
        case "":
            kret = 9;
            break;
        case "":
            kret = 10;
            break;
        case "":
            kret = 11;
            break;
        case "":
            kret = 12;
            break;
        case "":
            kret = 13;
            break;
        case "":
            kret = 14;
            break;
        case "":
            kret = 15;
            break;
        case "":
            kret = 16;
            break;
        case "":
            kret = 17;
            break;
        case "":
            kret = 18;
            break;
        case "":
            kret = 19;
            break;*/
    }
    return kret;
};
skk.getskillnameKinesis = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "싸이킥 토네이도";
            break;
        case 1:
            rep = "얼티메이트-무빙 매터";
            break;
        case 2:
            rep = "얼티메이트-싸이킥 불릿";
            break;
        case 3:
            rep = "로 오브 그라비티";
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
skk.getskilldesc1Kinesis = function (skillcode){
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
skk.getskilldesc2Kinesis = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "자동 공격형 광범위 공격기";
            break;
        case 1:
            rep = "30초 동안 검은색 정이십면체를 소환한다";
            break;
        case 2:
            rep = "재사용 대기시간이 없다";
            break;
        case 3:
            rep = "주변 잡몹 소수만 있어도 중력장의 공격 속도가 급격히 느려짐";
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
skk.getskilldesc3Kinesis = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "싸이킥 포인트 15칸 소비, 20초 동안 일정 시간마다 15명의 적을 1100%로 4번 공격\n\n일정 시간이 지날 때마다 물체가 점점 커지며 스킬이 종료되거나 스킬을 다시 사용하면 전방으로 던져 공격\n던진 물체는 일정 시간마다 최대 10명의 적을 290%로 2번 이동하며 공격한 후 최대 10명의 적을 650%로 10번 공격하는 폭발이 3회 발생, 물체 크기에 비례하여 공격의 최종 데미지 3배까지 증가\n\n재사용 대기시간 : 120초";
            break;
        case 1:
            rep = "염동력으로 움직일 수 있는 물질을 생성한다. 싸이킥 포스로 물질을 움직일 수 있으며 이동 속도에 비례하여 물질의 공격 속도가 증가한다. 스킬을 다시 사용하면 물체를 키네시스 쪽으로 움직일 수 있지만 속도가 감소한다.\n아래 방향으로 싸이킥 포스를 사용했을 때는 이동 방향은 바뀌지만 이동 속도가 빨라지지 않는다. 공격 반사 상태의 적을 공격해도 피해를 입지 않는다.\n\n싸이킥 포인트 10칸 소비, 일정 주기마다 접촉한 최대 10명의 적을 1100%의 데미지로 5번 공격하는 물질 생성, 물질의 이동속도에 비례해 공격 속도 증가\n\n키네시스 쪽으로 물질을 움직일 때 현재 속도의 75%만 반영\n물질 소멸 시 최대 12명의 적을 1540% 데미지로 12번 추가 공격\n\n재사용 대기시간 90초";
            break;
        case 2:
            rep = "염동력으로 지배하던 몬스터와 사물을 하나로 뭉쳐 전방으로 쏘아낸다. 사정거리 끝에서 마이크로 블랙홀이 잠시 발생해 주위의 적을 추가 공격한다. 단, 마이크로 블랙홀은 동시에 2개 이상 존재할 수 없다.\n\n마이크로 블랙홀은 공격 반사 상태의 적을 공격해도 피해를 입지 않는다.\n몬스터를 들고 있는 상태에서 ↓+ [싸이킥 그랩]을 입력해서도 사용할 수 있다.\n\n싸이킥 포인트 3칸 소비, 들고 있던 적과 전방에 있는 최대 8명의 적을 1210%의 데미지로 6번 공격, 보스 몬스터에게 스킬 적중 시 싸이킥 포인트 1칸 충전\n\n마이크로 블랙홀 : 일정 시간마다 최대 8명의 적을 1070%의 데미지로 3번 공격하는 블랙홀이 4번 발동, 스킬 적중 시 싸이킥 포인트 1칸 충전";
            break;
        case 3:
            rep = "물체가 서로를 끌어당기는 만유인력의 법칙을 극대화한다.\n최대 HP가 가장 높은 적을 목표로 공격하고 디버프를 부여한다. 디버프가 있는 적이 주변 적이나 물체를 서로 끌어당겨 공격하며 당겨진 적이나 물체가 많아질수록 간격이 감소하고 위력이 증가한다.\n\n디버프가 있는 적 아래로 당겨질 수 있는 발판이 있어야 당겨지고 날아다니는 적에게 디버프가 걸렸다면 적을 당기지 않는다.\n디버프가 있는 적이 사라지면 중력구가 나타나 대신 법칙을 실현한다. 로 오브 그라비티의 처음 공격을 제외한 모든 공격은 공격 반사 상태의 적을 공격해도 피해를 입지 않고 스킬을 재사용하면 디버프 혹은 중력구를 즉시 종료시킬 수 있다.\n\n싸이킥 포인트 5칸 소비, 1명의 적을 440%의 데미지로 6번 공격 후 해당 적에게 22초 동안 디버프 부여\n\n일정 간격마다 최대 6명의 적을 1100%의 데미지로 8번 공격하며 끌어당기고 현재까지 당겨진 적의 수에 비례해 공격 간격 최대 3배까지 감소 및 공격의 최종 데미지 40%까지 증가, 당겨질 적이 없을 경우 물체가 대신 끌어당겨지고 최대 공격 가능한 적과 동일한 수의 적을 당긴 것으로 취급\n\n종료 시 폭발하여 최대 10명의 적을 1320%의 데미지로 15번 공격\n\n재사용 대기시간 : 60초";
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
skk.getskillimage1Kinesis = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "https://i.imgur.com/ogIw8FH.png";
            break;
        case 1:
            rep = "https://i.imgur.com/hlZI3fg.png";
            break;
        case 2:
            rep = "https://i.imgur.com/t2SueQn.png";
            break;
        case 3:
            rep = "https://i.imgur.com/v16PMLI.png";
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
skk.getskillimage2Kinesis = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "https://i.imgur.com/Q560Du4.png";
            break;
        case 1:
            rep = "https://i.imgur.com/6RsCUmR.png";
            break;
        case 2:
            rep = "https://i.imgur.com/mbs1xCG.png";
            break;
        case 3:
            rep = "https://i.imgur.com/6unGzVj.png";
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

module.exports = skk;