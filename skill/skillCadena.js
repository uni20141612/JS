const skc = {};

skc.getskillCadena = function (skillname){
    var cret = -1;
    switch(skillname){
        case "체인아츠:퓨리":
        case "체인아츠퓨리":
        case "체인아츠 퓨리":
        case "퓨리":
        case "체퓨":
            cret = 0;
            break;
        case "A.D 오드넌스":
        case "A.D오드넌스":
        case "AD 오드넌스":
        case "AD오드넌스":
        case "오드넌스":
        case "에이디 오드넌스":
        case "에이디오드넌스":
        case "에오":
            cret = 1;
            break;
        case "체인아츠:메일스트롬":
        case "체인아츠메일스트롬":
        case "체인아츠 메일스트롬":
        case "메일스트롬":
        case "메일":
        case "체메":
            cret = 2;
            break;
        case "웨폰 버라이어티 피날레":
        case "웨폰버라이어티 피날레":
        case "웨폰버라이어티피날레":
        case "웨버피":
        case "피날레":
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
skc.getskillnameCadena = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "체인아츠:퓨리";
            break;
        case 1:
            rep = "A.D 오드넌스";
            break;
        case 2:
            rep = "체인아츠:메일스트롬";
            break;
        case 3:
            rep = "웨폰 버라이어티 피날레";
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
skc.getskilldesc1Cadena = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "65초간 공격시 550%,10명,6번 공격 거대체인생성/ 쿨150초";
            break;
        case 1:
            rep = "10초간 일정간격 495%,8명,5번 공격/ 쿨25초";
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
skc.getskilldesc2Cadena = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "거대체인 재생성 대기시간 : 0.6초";
            break;
        case 1:
            rep = "응집 후, 1650%,15명,8번 공격 구체 발사";
            break;
        case 2:
            rep = "설치형 보조 공격기";
            break;
        case 3:
            rep = "웨폰 버라이어티의 강화판";
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
skc.getskilldesc3Cadena = function (skillcode){
    rep = "";
    switch(skillcode){
        case 2:
            rep = "휘두른 체인을 빠르게 회전시켜 소용돌이를 만들어 낸다. 소용돌이는 1개만 존재할 수 있고 공격 반사 상태의 적을 공격해도 피해를 입지 않는다.\n체인아츠:스트로크 2타를 사용한 후 연계로만 사용할 수 있으며 ↓+[공격키] 를 입력해서도 사용할 수 있다.\n\nMP 250 소비, 8초 동안 일정 시간마다 660%의 데미지로 최대 8명의 적을 4번 공격, 공격 시 100% 확률로 6초 동안 슬로우\n\n공격 속도가 시간에 따라 점차 감소";
            break;
        case 3:
            rep = "무기 사용 숙련도가 극한에 도달해 더 강화된 추가타를 사용할 수 있게 된다. 웨폰 버라이어티 피날레는 공격 반사 상태의 적을 공격해도 피해를 입지 않으며 특정 공격 스킬 적중 시 준비 시간이 감소된다.\n\nMP 450 소비, 웨폰 버라이어티 추가타 4회 적중 시 주변 적 위치에서 발동\n\n최대 7명의 적을 550%의 데미지로 7번 공격하는 추가타 4번 발동\n웨폰 버라이어티 피날레는 11초마다 1개씩 준비되며 최대 3개까지 준비 가능\n\n체인아츠:터프 허슬/체인아츠:테이크다운/체인아츠:크러시 적중 시 준비 시간 2초 감소, 체인아츠:퓨리 적중 시 1초 감소";
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
skc.getskillimage1Cadena = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "https://i.imgur.com/EuHZcud.png";
            break;
        case 1:
            rep = "https://i.imgur.com/0Y7kDcn.png";
            break;
        case 2:
            rep = "https://i.imgur.com/NoklUuw.png";
            break;
        case 3:
            rep = "https://i.imgur.com/Oih1sfL.png";
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
skc.getskillimage2Cadena = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "https://i.imgur.com/iaJukbX.png";
            break;
        case 1:
            rep = "https://i.imgur.com/agbqM0J.png";
            break;
        case 2:
            rep = "https://i.imgur.com/RFKF7Eb.png";
            break;
        case 3:
            rep = "https://i.imgur.com/0mSoDyY.png";
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