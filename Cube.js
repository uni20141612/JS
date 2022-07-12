const cb = {};

cb.getCubename = function (cubename){
    var rep = "";
    switch(cubename){
        case "블랙큐브":
        case "블큐":
        case "블큡":
        case "블랙":
            rep = "black";
            break;
        case "레드큐브":
        case "레큐":
        case "레큡":
        case "레드":
            rep = "red";
            break;
        case "에디셔널큐브":
        case "에큐":
        case "에큡":
        case "에디":
        case "에디큐브":
        case "에디셔널":
            rep = "addi";
            break;
        case "수상한큐브":
        case "수큐":
        case "수큡":
        case "수상한":
        case "수상":
            rep = "strange";
            break;
        case "장인의큐브":
        case "장큐":
        case "장큡":
        case "장인":
            rep = "master";
            break;
        case "명장의큐브":
        case "명큐":
        case "명큡":
        case "명장":
            rep = "artisan";
            break;
        default:
            rep = "없음";
            break;
    }
    return rep;
};
cb.getCubeupgrade = function (cubename){
    rep = "";
    switch(cubename){
        case "red":
            rep += "레드 큐브 등급 상승 확률표\n\n";
            rep += "레어 → 에픽 : " + this.upred[0] + ".0%\n";
            rep += "에픽 → 유니크 : " + this.upred[1] + "%\n";
            rep += "유니크 → 레전드리 : " + this.upred[2] + "%";
            break;
        case "black":
            rep += "블랙 큐브 등급 상승 확률표\n\n";
            rep += "레어 → 에픽 : " + this.upblack[0] + ".0%\n";
            rep += "에픽 → 유니크 : " + this.upblack[1] + "%\n";
            rep += "유니크 → 레전드리 : " + this.upblack[2] + ".0%";
            break;
        case "addi":
            rep += "에디셔널 큐브 등급 상승 확률표\n\n";
            rep += "레어 → 에픽 : " + this.upaddi[0] + "%\n";
            rep += "에픽 → 유니크 : " + this.upaddi[1] + "%\n";
            rep += "유니크 → 레전드리 : " + this.upaddi[2] + "%";
            break;
        case "strange":
            rep += "수상한 큐브 등급 상승 확률표\n\n";
            rep += "레어 → 에픽 : " + this.upstrange[0] + "%";
            break;
        case "master":
            rep += "장인의 큐브 등급 상승 확률표\n\n";
            rep += "레어 → 에픽 : " + this.upmaster[0] + "%\n";
            rep += "에픽 → 유니크 : " + this.upmaster[1] + "%";
            break;
        case "artisan":
            rep += "명장의 큐브 등급 상승 확률표\n\n";
            rep += "레어 → 에픽 : " + this.upartisan[0] + "%\n";
            rep += "에픽 → 유니크 : " + this.upartisan[1] + "%\n";
            rep += "유니크 → 레전드리 : " + this.upartisan[2] + "%";
            break;
    }
    return rep;
};
cb.getCubeclass = function (classname){
    rep = -1;
    switch(classname){
        case "레어등급":
        case "레어":
        case "ㄹㅇ":
            rep = 0;
            break;
        case "에픽등급":
        case "에픽":
        case "에":
        case "ㅇㅍ":
            rep = 1;
            break;
        case "유니크등급":
        case "유니크":
        case "유닠":
        case "유닉":
        case "유":
        case "ㅇㄴㅋ":
            rep = 2;
            break;
        case "레전드리등급":
        case "레전더리등급":
        case "레전드리":
        case "레전더리":
        case "레전":
        case "ㄹㅈㄷㄹ":
        case "ㄹㅈ":
            rep = 3;
            break;
        default:
            rep = -1;
            break;
    }
    return rep;
};
cb.getCubeclasssetrate = function (cubename, classind){
    rep = "";
    if(cubename == "red"){
        rep += "레드 큐브 ";
        if(classind == 0){rep += "레어등급 설정 확률\n첫 번째 옵션 : 레어 100%\n두 번째 옵션 : 레어 10%, 노멀 90%\n세 번째 옵션 : 레어 1%, 노멀 99%";}
        else if(classind == 1){rep += "에픽등급 설정 확률\n첫 번째 옵션 : 에픽 100%\n두 번째 옵션 : 에픽 10%, 레어 90%\n세 번째 옵션 : 에픽 1%, 레어 99%";}
        else if(classind == 2){rep += "유니크등급 설정 확률\n첫 번째 옵션 : 유니크 100%\n두 번째 옵션 : 유니크 10%, 에픽 90%\n세 번째 옵션 : 유니크 1%, 에픽 99%";}
        else if(classind == 3){rep += "레전드리등급 설정 확률\n첫 번째 옵션 : 레전드리 100%\n두 번째 옵션 : 레전드리 10%, 유니크 90%\n세 번째 옵션 : 레전드리 1%, 유니크 99%";}
    }
    else if(cubename == "black"){
        rep += "블랙 큐브 ";
        if(classind == 0){rep += "레어등급 설정 확률\n첫 번째 옵션 : 레어 100%\n두 번째 옵션 : 레어 20%, 노멀 80%\n세 번째 옵션 : 레어 5%, 노멀 95%";}
        else if(classind == 1){rep += "에픽등급 설정 확률\n첫 번째 옵션 : 에픽 100%\n두 번째 옵션 : 에픽 20%, 레어 80%\n세 번째 옵션 : 에픽 5%, 레어 95%";}
        else if(classind == 2){rep += "유니크등급 설정 확률\n첫 번째 옵션 : 유니크 100%\n두 번째 옵션 : 유니크 20%, 에픽 80%\n세 번째 옵션 : 유니크 5%, 에픽 95%";}
        else if(classind == 3){rep += "레전드리등급 설정 확률\n첫 번째 옵션 : 레전드리 100%\n두 번째 옵션 : 레전드리 20%, 유니크 80%\n세 번째 옵션 : 레전드리 5%, 유니크 95%";}
    }
    else if(cubename == "addi"){
        rep += "에디셔널 큐브 ";
        if(classind == 0){rep += "레어등급 설정 확률\n첫 번째 옵션 : 레어 100%\n두 번째 옵션 : 레어 1.9608%, 노멀 98.0392%\n세 번째 옵션 : 레어 1.9608%, 노멀 98.0392%";}
        else if(classind == 1){rep += "에픽등급 설정 확률\n첫 번째 옵션 : 에픽 100%\n두 번째 옵션 : 에픽 4.7619%, 레어 95.2381%\n세 번째 옵션 : 에픽 4.7619%, 레어 95.2381%";}
        else if(classind == 2){rep += "유니크등급 설정 확률\n첫 번째 옵션 : 유니크 100%\n두 번째 옵션 : 유니크 1.9608%, 에픽 98.0392%\n세 번째 옵션 : 유니크 1.9608%, 에픽 98.0392%";}
        else if(classind == 3){rep += "레전드리등급 설정 확률\n첫 번째 옵션 : 레전드리 100%\n두 번째 옵션 : 레전드리 0.4975%, 유니크 99.5025%\n세 번째 옵션 : 레전드리 0.4975%, 유니크 99.5025%";}
    }
    else if(cubename == "strange"){
        rep += "수상한 큐브 ";
        if(classind == 0){rep += "레어등급 설정 확률\n첫 번째 옵션 : 레어 100%\n두 번째 옵션 : 레어 0.0999%, 노멀 99.9001%\n세 번째 옵션 : 레어 0.0999%, 노멀 99.9001%";}
        else if(classind == 1){rep += "에픽등급 설정 확률\n첫 번째 옵션 : 에픽 100%\n두 번째 옵션 : 에픽 0.9901%, 레어 99.0099%\n세 번째 옵션 : 에픽 0.9901%, 레어 99.0099%";}
    }
    else if(cubename == "master"){
        rep += "장인의 큐브 ";
        if(classind == 0){rep += "레어등급 설정 확률\n첫 번째 옵션 : 레어 100%\n두 번째 옵션 : 레어 16.6667%, 노멀 83.3333%\n세 번째 옵션 : 레어 16.6667%, 노멀 83.3333%";}
        else if(classind == 1){rep += "에픽등급 설정 확률\n첫 번째 옵션 : 에픽 100%\n두 번째 옵션 : 에픽 4.7619%, 레어 95.2381%\n세 번째 옵션 : 에픽 4.7619%, 레어 95.2381%";}
        else if(classind == 2){rep += "유니크등급 설정 확률\n첫 번째 옵션 : 유니크 100%\n두 번째 옵션 : 유니크 1.1858%, 에픽 98.8142%\n세 번째 옵션 : 유니크 1.1858%, 에픽 98.8142%";}
    }
    else if(cubename == "artisan"){
        rep += "명장의 큐브 ";
        if(classind == 0){rep += "레어등급 설정 확률\n첫 번째 옵션 : 레어 100%\n두 번째 옵션 : 레어 16.6667%, 노멀 83.3333%\n세 번째 옵션 : 레어 16.6667%, 노멀 83.3333%";}
        else if(classind == 1){rep += "에픽등급 설정 확률\n첫 번째 옵션 : 에픽 100%\n두 번째 옵션 : 에픽 7.9994%, 레어 92.0006%\n세 번째 옵션 : 에픽 7.9994%, 레어 92.0006%";}
        else if(classind == 2){rep += "유니크등급 설정 확률\n첫 번째 옵션 : 유니크 100%\n두 번째 옵션 : 유니크 1.6959%, 에픽 98.3041%\n세 번째 옵션 : 유니크 1.6959%, 에픽 98.3041%";}
        else if(classind == 3){rep += "레전드리등급 설정 확률\n첫 번째 옵션 : 레전드리 100%\n두 번째 옵션 : 레전드리 0.1996%, 유니크 99.8004%\n세 번째 옵션 : 레전드리 0.1996%, 유니크 99.8004%";}
    } 
    return rep;
}
cb.getItemname = function (itemname){
    rep = "";
    switch(itemname){
        case "무기":
        case "ㅁㄱ":
            rep = "무기";
            break;
        case "엠블렘":
        case "엠블럼":
        case "엠블":
        case "엠":
            rep = "엠블렘";
            break;
        case "보조무기":
        case "보":
        case "보무":
        case "보조":
            rep = "보조무기 (포스실드, 소울링 제외)";
            break;
        case "포스실드":
        case "소울링":
        case "데몬슬레이어":
        case "데몬":
        case "엔젤릭버스터":
        case "엔버":
            rep = "포스실드, 소울링";
            break;
        case "방패":
        case "방":
            rep = "방패";
            break;
        case "모자":
        case "모":
        case "뚝":
        case "뚝배기":
            rep = "모자";
            break;
        case "상의":
        case "상":
            rep = "상의";
            break;
        case "한벌옷":
        case "한벌":
        case "한":
            rep = "한벌옷";
            break;
        case "하의":
        case "하":
        case "바지":
        case "바":
            rep = "하의";
            break;
        case "신발":
        case "신":
            rep = "신발";
            break;
        case "장갑":
        case "장":
            rep = "장갑";
            break;
        case "망토":
        case "망":
            rep = "망토";
            break;
        case "벨트":
        case "벨":
            rep = "벨트";
            break;
        case "어깨장식":
        case "견장":
        case "어깨":
        case "견":
        case "어":
            rep = "어깨장식";
            break;
        case "얼굴장식":
        case "얼장":
        case "얼굴":
        case "얼":
            rep = "얼굴장식";
            break;
        case "눈장식":
        case "눈장":
        case "눈":
            rep = "눈장식";
            break;
        case "귀고리":
        case "귀걸이":
        case "귀거리":
        case "귀":
            rep = "귀고리";
            break;
        case "반지":
        case "반":
            rep = "반지";
            break;
        case "펜던트":
        case "목걸이":
        case "펜":
        case "목":
            rep = "펜던트";
            break;
        case "기계심장":
        case "심장":
        case "하트":
        case "하":
        case "심":
        case "기":
            rep = "기계심장";
            break;
        default:
            rep = "없음";
            break;
    }
    return rep;
};
cb.getCuberatetable = function (poten, rate){
    rep = "";
    for(i = 0; i < poten.length; ++i){
        rep += poten[i] + " : ";
        rep += rate[i] + "\n";
    }
    return rep;
}
cb.getCubenameclasswear = function (cubename, classind, itemname){
    rep = "";
    switch(cubename){
        case "red":
            rep += "레드 큐브 ";
            break;
        case "black":
            rep += "블랙 큐브 ";
            break;
        case "addi":
            rep += "에디셔널 큐브 ";
            break;
        case "strange":
            rep += "수상한 큐브 ";
            break;
        case "master":
            rep += "장인의 큐브 ";
            break;
        case "artisan":
            rep += "명장의 큐브 ";
            break;
    }
    switch(classind){
        case 0:
            rep += "레어등급 ";
            break;
        case 1:
            rep += "에픽등급 ";
            break;
        case 2:
            rep += "유니크등급 ";
            break;
        case 3:
            rep += "레전드리등급 ";
            break;
    }
    rep += itemname + " 잠재능력 설정 확률\n\n";
    return rep;
};
cb.getCubeability = function (abilname){
    var ret = -1;
    switch(abilname){
        case "STR":
        case "str":
        case "힘":
            ret = 0;
            break;
        case "DEX":
        case "dex":
        case "덱스":
        case "덱":
            ret = 1;
            break;
        case "INT":
        case "int":
        case "인트":
        case "인":
            ret = 2;
            break;
        case "LUK":
        case "luk":
        case "럭":
            ret = 3;
            break;
        case "보스공격력":
        case "보공":
        case "보":
            ret = 4;
            break;
        case "공격력":
        case "공퍼":
        case "공":
            ret = 5;
            break;
        case "마력":
        case "마력퍼":
        case "마":
            ret = 6;
            break;
        case "방어력무시":
        case "방어율무시":
        case "방무":
        case "방":
            ret = 7;
            break;
        case "크뎀":
        case "크리데미지":
            ret = 8;
            break;
        case "올스탯":
        case "올스텟":
        case "올":
            ret = 9;
            break;
        case "HP":
        case "hp":
        case "피":
            ret = 10;
            break;
        case "메소획득량":
        case "메획":
        case "메소":
        case "메":
            ret = 11;
            break;
        case "아이템드롭률":
        case "아이템드랍률":
        case "아드":
        case "아획":
        case "드랍":
        case "아":
        case "드":
            ret = 12;
            break;
        case "데미지":
        case "뎀":
            ret = 13;
            break;
        case "모든스킬의재사용대기시간":
        case "재사용대기시간":
        case "재사용":
        case "쿨타임":
        case "쿨뚝":
        case "쿨감":
        case "쿨":
            ret = 14;
            break;
        default:
            ret = -1;
            break;
    }
    return ret;
}
cb.getCuberateOneabil = function (cubename, abilind, abilval, p1, p2, p3, r1, r2, r3){
    var rep = "";
    var a = 0, b = 0, c = 0, tempcomp = 0, temprate = 1.0, finalrate = 0.0;
    var str = 0, dex = 0, ints = 0, luk = 0, bossa = 0, atk = 0, mag = 0, defig = 0, cridam = 0, alls = 0, hps = 0, mesos = 0, items = 0, dam = 0, cool = 0;

    for(a = 0; a < p1.length; ++a){
        var abcode1 = getabilityCode(p1[a]);
        for(b = 0; b < p2.length; ++b){
            var abcode2 = getabilityCode(p2[b]);
            for(c = 0; c < p3.length; ++c){
                var abcode3 = getabilityCode(p3[c]);
                temprate = 1.0;
                temprate *= parseFloat(r1[a]);
                temprate *= parseFloat(r2[b]);
                temprate *= parseFloat(r3[c]);
                str = 0, dex = 0, ints = 0, luk = 0, bossa = 0, atk = 0, mag = 0, defig = 0, cridam = 0, alls = 0, hps = 0, mesos = 0, items = 0, dam = 0, cool = 0;
                switch(abcode1){
                    case 0:
                        str += 12;
                        break;
                    case 1:
                        str += 9;
                        break;
                    case 2:
                        str += 6;
                        break;
                    case 3:
                        str += 3;
                        break;
                    case 4:
                        dex += 12;
                        break;
                    case 5:
                        dex += 9;
                        break;
                    case 6:
                        dex += 6;
                        break;
                    case 7:
                        dex += 3;
                        break;
                    case 8:
                        ints += 12;
                        break;
                    case 9:
                        ints += 9;
                        break;
                    case 10:
                        ints += 6;
                        break;
                    case 11:
                        ints += 3;
                        break;
                    case 12:
                        luk += 12;
                        break;
                    case 13:
                        luk += 9;
                        break;
                    case 14:
                        luk += 6;
                        break;
                    case 15:
                        luk += 3;
                        break;
                    case 16:
                        bossa += 40;
                        break;
                    case 17:
                        bossa += 35;
                        break;
                    case 18:
                        bossa += 30;
                        break;
                    case 19:
                        atk += 12;
                        break;
                    case 20:
                        atk += 9;
                        break;
                    case 21:
                        atk += 6;
                        break;
                    case 22:
                        atk += 3;
                        break;
                    case 23:
                        mag += 12;
                        break;
                    case 24:
                        mag += 9;
                        break;
                    case 25:
                        mag += 6;
                        break;
                    case 26:
                        mag += 3;
                        break;
                    case 27:
                        defig += 40;
                        break;
                    case 28:
                        defig += 35;
                        break;
                    case 29:
                        defig += 30;
                        break;
                    case 30:
                        defig += 15;
                        break;
                    case 31:
                        cridam += 8;
                        break;
                    case 32:
                        alls += 9;
                        str += 9;
                        dex += 9;
                        ints += 9;
                        luk += 9;
                        break;
                    case 33:
                        alls += 6;
                        str += 6;
                        dex += 6;
                        ints += 6;
                        luk += 6;
                        break;
                    case 34:
                        alls += 3;
                        str += 3;
                        dex += 3;
                        ints += 3;
                        luk += 3;
                        break;
                    case 35:
                        hps += 12;
                        break;
                    case 36:
                        hps += 9;
                        break;
                    case 37:
                        hps += 6;
                        break;
                    case 38:
                        hps += 3;
                        break;
                    case 39:
                        mesos += 20;
                        break;
                    case 40:
                        items += 20;
                        break;
                    case 41:
                        dam += 12;
                        break;
                    case 42:
                        dam += 9;
                        break;
                    case 43:
                        dam += 6;
                        break;
                    case 44:
                        dam += 3;
                        break;
                    case 45:
                        cool += 2;
                        break;
                    case 46:
                        cool += 1;
                        break;
                    case 47:
                        str += 2;
                        break;
                    case 48:
                        str += 4;
                        break;
                    case 49:
                        str += 5;
                        break;
                    case 50:
                        str += 7;
                        break;
                    case 51:
                        dex += 2;
                        break;
                    case 52:
                        dex += 4;
                        break;
                    case 53:
                        dex += 5;
                        break;
                    case 54:
                        dex += 7;
                        break;
                    case 55:
                        ints += 2;
                        break;
                    case 56:
                        ints += 4;
                        break;
                    case 57:
                        ints += 5;
                        break;
                    case 58:
                        ints += 7;
                        break;
                    case 59:
                        luk += 2;
                        break;
                    case 60:
                        luk += 4;
                        break;
                    case 61:
                        luk += 5;
                        break;
                    case 62:
                        luk += 7;
                        break;
                    case 63:
                        bossa += 12;
                        break;
                    case 64:
                        bossa += 18;
                        break;
                    case 65:
                        defig += 3;
                        break;
                    case 66:
                        defig += 4;
                        break;
                    case 67:
                        defig += 5;
                        break;
                    case 68:
                        cridam += 3;
                        break;
                    case 69:
                        alls += 2;
                        str += 2;
                        dex += 2;
                        ints += 2;
                        luk += 2;
                        break;
                    case 70:
                        alls += 4;
                        str += 4;
                        dex += 4;
                        ints += 4;
                        luk += 4;
                        break;
                    case 71:
                        alls += 5;
                        str += 5;
                        dex += 5;
                        ints += 5;
                        luk += 5;
                        break;
                    case 72:
                        hps += 2;
                        break;
                    case 73:
                        hps += 5;
                        break;
                    case 74:
                        hps += 7;
                        break;
                    case 75:
                        hps += 10;
                        break;
                }
                switch(abcode2){
                    case 0:
                        str += 12;
                        break;
                    case 1:
                        str += 9;
                        break;
                    case 2:
                        str += 6;
                        break;
                    case 3:
                        str += 3;
                        break;
                    case 4:
                        dex += 12;
                        break;
                    case 5:
                        dex += 9;
                        break;
                    case 6:
                        dex += 6;
                        break;
                    case 7:
                        dex += 3;
                        break;
                    case 8:
                        ints += 12;
                        break;
                    case 9:
                        ints += 9;
                        break;
                    case 10:
                        ints += 6;
                        break;
                    case 11:
                        ints += 3;
                        break;
                    case 12:
                        luk += 12;
                        break;
                    case 13:
                        luk += 9;
                        break;
                    case 14:
                        luk += 6;
                        break;
                    case 15:
                        luk += 3;
                        break;
                    case 16:
                        bossa += 40;
                        break;
                    case 17:
                        bossa += 35;
                        break;
                    case 18:
                        bossa += 30;
                        break;
                    case 19:
                        atk += 12;
                        break;
                    case 20:
                        atk += 9;
                        break;
                    case 21:
                        atk += 6;
                        break;
                    case 22:
                        atk += 3;
                        break;
                    case 23:
                        mag += 12;
                        break;
                    case 24:
                        mag += 9;
                        break;
                    case 25:
                        mag += 6;
                        break;
                    case 26:
                        mag += 3;
                        break;
                    case 27:
                        defig += 40;
                        break;
                    case 28:
                        defig += 35;
                        break;
                    case 29:
                        defig += 30;
                        break;
                    case 30:
                        defig += 15;
                        break;
                    case 31:
                        cridam += 8;
                        break;
                    case 32:
                        alls += 9;
                        str += 9;
                        dex += 9;
                        ints += 9;
                        luk += 9;
                        break;
                    case 33:
                        alls += 6;
                        str += 6;
                        dex += 6;
                        ints += 6;
                        luk += 6;
                        break;
                    case 34:
                        alls += 3;
                        str += 3;
                        dex += 3;
                        ints += 3;
                        luk += 3;
                        break;
                    case 35:
                        hps += 12;
                        break;
                    case 36:
                        hps += 9;
                        break;
                    case 37:
                        hps += 6;
                        break;
                    case 38:
                        hps += 3;
                        break;
                    case 39:
                        mesos += 20;
                        break;
                    case 40:
                        items += 20;
                        break;
                    case 41:
                        dam += 12;
                        break;
                    case 42:
                        dam += 9;
                        break;
                    case 43:
                        dam += 6;
                        break;
                    case 44:
                        dam += 3;
                        break;
                    case 45:
                        cool += 2;
                        break;
                    case 46:
                        cool += 1;
                        break;
                    case 47:
                        str += 2;
                        break;
                    case 48:
                        str += 4;
                        break;
                    case 49:
                        str += 5;
                        break;
                    case 50:
                        str += 7;
                        break;
                    case 51:
                        dex += 2;
                        break;
                    case 52:
                        dex += 4;
                        break;
                    case 53:
                        dex += 5;
                        break;
                    case 54:
                        dex += 7;
                        break;
                    case 55:
                        ints += 2;
                        break;
                    case 56:
                        ints += 4;
                        break;
                    case 57:
                        ints += 5;
                        break;
                    case 58:
                        ints += 7;
                        break;
                    case 59:
                        luk += 2;
                        break;
                    case 60:
                        luk += 4;
                        break;
                    case 61:
                        luk += 5;
                        break;
                    case 62:
                        luk += 7;
                        break;
                    case 63:
                        bossa += 12;
                        break;
                    case 64:
                        bossa += 18;
                        break;
                    case 65:
                        defig += 3;
                        break;
                    case 66:
                        defig += 4;
                        break;
                    case 67:
                        defig += 5;
                        break;
                    case 68:
                        cridam += 3;
                        break;
                    case 69:
                        alls += 2;
                        str += 2;
                        dex += 2;
                        ints += 2;
                        luk += 2;
                        break;
                    case 70:
                        alls += 4;
                        str += 4;
                        dex += 4;
                        ints += 4;
                        luk += 4;
                        break;
                    case 71:
                        alls += 5;
                        str += 5;
                        dex += 5;
                        ints += 5;
                        luk += 5;
                        break;
                    case 72:
                        hps += 2;
                        break;
                    case 73:
                        hps += 5;
                        break;
                    case 74:
                        hps += 7;
                        break;
                    case 75:
                        hps += 10;
                        break;
                }
                switch(abcode3){
                    case 0:
                        str += 12;
                        break;
                    case 1:
                        str += 9;
                        break;
                    case 2:
                        str += 6;
                        break;
                    case 3:
                        str += 3;
                        break;
                    case 4:
                        dex += 12;
                        break;
                    case 5:
                        dex += 9;
                        break;
                    case 6:
                        dex += 6;
                        break;
                    case 7:
                        dex += 3;
                        break;
                    case 8:
                        ints += 12;
                        break;
                    case 9:
                        ints += 9;
                        break;
                    case 10:
                        ints += 6;
                        break;
                    case 11:
                        ints += 3;
                        break;
                    case 12:
                        luk += 12;
                        break;
                    case 13:
                        luk += 9;
                        break;
                    case 14:
                        luk += 6;
                        break;
                    case 15:
                        luk += 3;
                        break;
                    case 16:
                        bossa += 40;
                        break;
                    case 17:
                        bossa += 35;
                        break;
                    case 18:
                        bossa += 30;
                        break;
                    case 19:
                        atk += 12;
                        break;
                    case 20:
                        atk += 9;
                        break;
                    case 21:
                        atk += 6;
                        break;
                    case 22:
                        atk += 3;
                        break;
                    case 23:
                        mag += 12;
                        break;
                    case 24:
                        mag += 9;
                        break;
                    case 25:
                        mag += 6;
                        break;
                    case 26:
                        mag += 3;
                        break;
                    case 27:
                        defig += 40;
                        break;
                    case 28:
                        defig += 35;
                        break;
                    case 29:
                        defig += 30;
                        break;
                    case 30:
                        defig += 15;
                        break;
                    case 31:
                        cridam += 8;
                        break;
                    case 32:
                        alls += 9;
                        str += 9;
                        dex += 9;
                        ints += 9;
                        luk += 9;
                        break;
                    case 33:
                        alls += 6;
                        str += 6;
                        dex += 6;
                        ints += 6;
                        luk += 6;
                        break;
                    case 34:
                        alls += 3;
                        str += 3;
                        dex += 3;
                        ints += 3;
                        luk += 3;
                        break;
                    case 35:
                        hps += 12;
                        break;
                    case 36:
                        hps += 9;
                        break;
                    case 37:
                        hps += 6;
                        break;
                    case 38:
                        hps += 3;
                        break;
                    case 39:
                        mesos += 20;
                        break;
                    case 40:
                        items += 20;
                        break;
                    case 41:
                        dam += 12;
                        break;
                    case 42:
                        dam += 9;
                        break;
                    case 43:
                        dam += 6;
                        break;
                    case 44:
                        dam += 3;
                        break;
                    case 45:
                        cool += 2;
                        break;
                    case 46:
                        cool += 1;
                        break;
                    case 47:
                        str += 2;
                        break;
                    case 48:
                        str += 4;
                        break;
                    case 49:
                        str += 5;
                        break;
                    case 50:
                        str += 7;
                        break;
                    case 51:
                        dex += 2;
                        break;
                    case 52:
                        dex += 4;
                        break;
                    case 53:
                        dex += 5;
                        break;
                    case 54:
                        dex += 7;
                        break;
                    case 55:
                        ints += 2;
                        break;
                    case 56:
                        ints += 4;
                        break;
                    case 57:
                        ints += 5;
                        break;
                    case 58:
                        ints += 7;
                        break;
                    case 59:
                        luk += 2;
                        break;
                    case 60:
                        luk += 4;
                        break;
                    case 61:
                        luk += 5;
                        break;
                    case 62:
                        luk += 7;
                        break;
                    case 63:
                        bossa += 12;
                        break;
                    case 64:
                        bossa += 18;
                        break;
                    case 65:
                        defig += 3;
                        break;
                    case 66:
                        defig += 4;
                        break;
                    case 67:
                        defig += 5;
                        break;
                    case 68:
                        cridam += 3;
                        break;
                    case 69:
                        alls += 2;
                        str += 2;
                        dex += 2;
                        ints += 2;
                        luk += 2;
                        break;
                    case 70:
                        alls += 4;
                        str += 4;
                        dex += 4;
                        ints += 4;
                        luk += 4;
                        break;
                    case 71:
                        alls += 5;
                        str += 5;
                        dex += 5;
                        ints += 5;
                        luk += 5;
                        break;
                    case 72:
                        hps += 2;
                        break;
                    case 73:
                        hps += 5;
                        break;
                    case 74:
                        hps += 7;
                        break;
                    case 75:
                        hps += 10;
                        break;
                }

                if(true){
                if(abcode1 == abcode2 && abcode1 == abcode3 && abcode1 == 40){continue;}
                if(abcode1 == 16 || abcode1 == 17 || abcode1 == 18){ if(abcode2 == 16 || abcode2 == 17 || abcode2 == 18){ if(abcode3 == 16 || abcode3 == 17 || abcode3 == 18){continue;}}}
                if(abcode1 == 16 || abcode1 == 17 || abcode1 == 18){ if(abcode3 == 16 || abcode3 == 17 || abcode3 == 18){ if(abcode2 == 16 || abcode2 == 17 || abcode2 == 18){continue;}}}
                if(abcode2 == 16 || abcode2 == 17 || abcode2 == 18){ if(abcode1 == 16 || abcode1 == 17 || abcode1 == 18){ if(abcode3 == 16 || abcode3 == 17 || abcode3 == 18){continue;}}}
                if(abcode2 == 16 || abcode2 == 17 || abcode2 == 18){ if(abcode3 == 16 || abcode3 == 17 || abcode3 == 18){ if(abcode1 == 16 || abcode1 == 17 || abcode1 == 18){continue;}}}
                if(abcode3 == 16 || abcode3 == 17 || abcode3 == 18){ if(abcode1 == 16 || abcode1 == 17 || abcode1 == 18){ if(abcode2 == 16 || abcode2 == 17 || abcode2 == 18){continue;}}}
                if(abcode3 == 16 || abcode3 == 17 || abcode3 == 18){ if(abcode2 == 16 || abcode2 == 17 || abcode2 == 18){ if(abcode1 == 16 || abcode1 == 17 || abcode1 == 18){continue;}}}
                if(abcode1 == 27 || abcode1 == 28 || abcode1 == 29 || abcode1 == 30){ if(abcode2 == 27 || abcode2 == 28 || abcode2 == 29 || abcode2 == 30){ if(abcode3 == 27 || abcode3 == 28 || abcode3 == 29 || abcode3 == 30){continue;}}}
                if(abcode1 == 27 || abcode1 == 28 || abcode1 == 29 || abcode1 == 30){ if(abcode3 == 27 || abcode3 == 28 || abcode3 == 29 || abcode3 == 30){ if(abcode2 == 27 || abcode2 == 28 || abcode2 == 29 || abcode2 == 30){continue;}}}
                if(abcode2 == 27 || abcode2 == 28 || abcode2 == 29 || abcode2 == 30){ if(abcode1 == 27 || abcode1 == 28 || abcode1 == 29 || abcode1 == 30){ if(abcode3 == 27 || abcode3 == 28 || abcode3 == 29 || abcode3 == 30){continue;}}}
                if(abcode2 == 27 || abcode2 == 28 || abcode2 == 29 || abcode2 == 30){ if(abcode3 == 27 || abcode3 == 28 || abcode3 == 29 || abcode3 == 30){ if(abcode1 == 27 || abcode1 == 28 || abcode1 == 29 || abcode1 == 30){continue;}}}
                if(abcode3 == 27 || abcode3 == 28 || abcode3 == 29 || abcode3 == 30){ if(abcode1 == 27 || abcode1 == 28 || abcode1 == 29 || abcode1 == 30){ if(abcode2 == 27 || abcode2 == 28 || abcode2 == 29 || abcode2 == 30){continue;}}}
                if(abcode3 == 27 || abcode3 == 28 || abcode3 == 29 || abcode3 == 30){ if(abcode2 == 27 || abcode2 == 28 || abcode2 == 29 || abcode2 == 30){ if(abcode1 == 27 || abcode1 == 28 || abcode1 == 29 || abcode1 == 30){continue;}}}
                if(abcode1 == 63 || abcode1 == 64){ if(abcode2 == 63 || abcode2 == 64){ if(abcode3 == 63 || abcode3 == 64){continue;}}}
                if(abcode1 == 63 || abcode1 == 64){ if(abcode3 == 63 || abcode3 == 64){ if(abcode2 == 63 || abcode2 == 64){continue;}}}
                if(abcode2 == 63 || abcode2 == 64){ if(abcode1 == 63 || abcode1 == 64){ if(abcode3 == 63 || abcode3 == 64){continue;}}}
                if(abcode2 == 63 || abcode2 == 64){ if(abcode3 == 63 || abcode3 == 64){ if(abcode1 == 63 || abcode1 == 64){continue;}}}
                if(abcode3 == 63 || abcode3 == 64){ if(abcode1 == 63 || abcode1 == 64){ if(abcode2 == 63 || abcode2 == 64){continue;}}}
                if(abcode3 == 63 || abcode3 == 64){ if(abcode2 == 63 || abcode2 == 64){ if(abcode1 == 63 || abcode1 == 64){continue;}}}
                if(abcode1 == 65 || abcode1 == 66 || abcode1 == 67){ if(abcode2 == 65 || abcode2 == 66 || abcode2 == 67){ if(abcode3 == 65 || abcode3 == 66 || abcode3 == 67){continue;}}}
                if(abcode1 == 65 || abcode1 == 66 || abcode1 == 67){ if(abcode3 == 65 || abcode3 == 66 || abcode3 == 67){ if(abcode2 == 65 || abcode2 == 66 || abcode2 == 67){continue;}}}
                if(abcode2 == 65 || abcode2 == 66 || abcode2 == 67){ if(abcode1 == 65 || abcode1 == 66 || abcode1 == 67){ if(abcode3 == 65 || abcode3 == 66 || abcode3 == 67){continue;}}}
                if(abcode2 == 65 || abcode2 == 66 || abcode2 == 67){ if(abcode3 == 65 || abcode3 == 66 || abcode3 == 67){ if(abcode1 == 65 || abcode1 == 66 || abcode1 == 67){continue;}}}
                if(abcode3 == 65 || abcode2 == 66 || abcode3 == 67){ if(abcode1 == 65 || abcode1 == 66 || abcode1 == 67){ if(abcode2 == 65 || abcode2 == 66 || abcode2 == 67){continue;}}}
                if(abcode3 == 65 || abcode2 == 66 || abcode3 == 67){ if(abcode2 == 65 || abcode2 == 66 || abcode2 == 67){ if(abcode1 == 65 || abcode1 == 66 || abcode1 == 67){continue;}}}
                }

                if(abilind == 0){ tempcomp = str; }
                else if(abilind == 1){ tempcomp = dex; }
                else if(abilind == 2){ tempcomp = ints; }
                else if(abilind == 3){ tempcomp = luk; }
                else if(abilind == 4){ tempcomp = bossa; }
                else if(abilind == 5){ tempcomp = atk; }
                else if(abilind == 6){ tempcomp = mag; }
                else if(abilind == 7){ tempcomp = defig; }
                else if(abilind == 8){ tempcomp = cridam; }
                else if(abilind == 9){ tempcomp = alls; }
                else if(abilind == 10){ tempcomp = hps; }
                else if(abilind == 11){ tempcomp = mesos; }
                else if(abilind == 12){ tempcomp = items; }
                else if(abilind == 13){ tempcomp = dam; }
                else if(abilind == 14){ tempcomp = cool; }

                if(tempcomp >= abilval){
                    temprate /= 10000;  //var trate = temprate.toFixed(6);   rep += tempcomp + " " + abilval + " " + abcode1 + " " + abcode2 + " " + abcode3 + " " + trate + "%\n";
                    finalrate += temprate;
                }                
            }
        }
    }
    var frate = finalrate.toFixed(8);
    var cubenum = (100 / finalrate).toFixed(0);
    if(finalrate == 0){
        if(abilind == 14){rep += "해당 수치 " + abilval + "초가 해당 등급 [" + getCubeabilityR(abilind) + "] 에서 나올 수 있는 수치를 초과하였거나 해당 장비에서 나올 수 없는 옵션입니다." + abcode1 + " " + abcode2 + " " + abcode3;}
        else{rep += "해당 수치 " + abilval + "%가 해당 등급 [" + getCubeabilityR(abilind) + "] 에서 나올 수 있는 수치를 초과하였거나 해당 장비에서 나올 수 없는 옵션입니다.";}
    }
    else{
        if(abilind == 14){rep += getCubeabilityR(abilind) + " " + abilval + "초 이상 확률은 " + frate + "% 입니다.\n";}
        else{rep += getCubeabilityR(abilind) + " " + abilval + "% 이상 확률은 " + frate + "% 입니다.\n";}
        rep += "해당 옵션의 기댓값은 " + cubenum + "개 입니다.";
        rep += getCubeprice(cubename, cubenum);
    }
    return rep;
}
cb.getCuberateTwoabil = function (cubename, abilind, abilval, abilind2, abilval2, p1, p2, p3, r1, r2, r3){
    var rep = "";
    var a = 0, b = 0, c = 0, tempcomp = 0, tempcomp2 = 0, temprate = 1.0, finalrate1 = 0.0, finalrate2 = 0.0, finalrate = 0.0;
    var str = 0, dex = 0, ints = 0, luk = 0, bossa = 0, atk = 0, mag = 0, defig = 0, cridam = 0, alls = 0, hps = 0, mesos = 0, items = 0, dam = 0, cool = 0;

    for(a = 0; a < p1.length; ++a){
        var abcode1 = getabilityCode(p1[a]);
        for(b = 0; b < p2.length; ++b){
            var abcode2 = getabilityCode(p2[b]);
            for(c = 0; c < p3.length; ++c){
                var abcode3 = getabilityCode(p3[c]);
                if(true){
                if(abcode1 == abcode2 && abcode1 == abcode3 && abcode1 == 40){continue;}
                if(abcode1 == 16 || abcode1 == 17 || abcode1 == 18){ if(abcode2 == 16 || abcode2 == 17 || abcode2 == 18){ if(abcode3 == 16 || abcode3 == 17 || abcode3 == 18){continue;}}}
                if(abcode1 == 16 || abcode1 == 17 || abcode1 == 18){ if(abcode3 == 16 || abcode3 == 17 || abcode3 == 18){ if(abcode2 == 16 || abcode2 == 17 || abcode2 == 18){continue;}}}
                if(abcode2 == 16 || abcode2 == 17 || abcode2 == 18){ if(abcode1 == 16 || abcode1 == 17 || abcode1 == 18){ if(abcode3 == 16 || abcode3 == 17 || abcode3 == 18){continue;}}}
                if(abcode2 == 16 || abcode2 == 17 || abcode2 == 18){ if(abcode3 == 16 || abcode3 == 17 || abcode3 == 18){ if(abcode1 == 16 || abcode1 == 17 || abcode1 == 18){continue;}}}
                if(abcode3 == 16 || abcode3 == 17 || abcode3 == 18){ if(abcode1 == 16 || abcode1 == 17 || abcode1 == 18){ if(abcode2 == 16 || abcode2 == 17 || abcode2 == 18){continue;}}}
                if(abcode3 == 16 || abcode3 == 17 || abcode3 == 18){ if(abcode2 == 16 || abcode2 == 17 || abcode2 == 18){ if(abcode1 == 16 || abcode1 == 17 || abcode1 == 18){continue;}}}
                if(abcode1 == 27 || abcode1 == 28 || abcode1 == 29 || abcode1 == 30){ if(abcode2 == 27 || abcode2 == 28 || abcode2 == 29 || abcode2 == 30){ if(abcode3 == 27 || abcode3 == 28 || abcode3 == 29 || abcode3 == 30){continue;}}}
                if(abcode1 == 27 || abcode1 == 28 || abcode1 == 29 || abcode1 == 30){ if(abcode3 == 27 || abcode3 == 28 || abcode3 == 29 || abcode3 == 30){ if(abcode2 == 27 || abcode2 == 28 || abcode2 == 29 || abcode2 == 30){continue;}}}
                if(abcode2 == 27 || abcode2 == 28 || abcode2 == 29 || abcode2 == 30){ if(abcode1 == 27 || abcode1 == 28 || abcode1 == 29 || abcode1 == 30){ if(abcode3 == 27 || abcode3 == 28 || abcode3 == 29 || abcode3 == 30){continue;}}}
                if(abcode2 == 27 || abcode2 == 28 || abcode2 == 29 || abcode2 == 30){ if(abcode3 == 27 || abcode3 == 28 || abcode3 == 29 || abcode3 == 30){ if(abcode1 == 27 || abcode1 == 28 || abcode1 == 29 || abcode1 == 30){continue;}}}
                if(abcode3 == 27 || abcode3 == 28 || abcode3 == 29 || abcode3 == 30){ if(abcode1 == 27 || abcode1 == 28 || abcode1 == 29 || abcode1 == 30){ if(abcode2 == 27 || abcode2 == 28 || abcode2 == 29 || abcode2 == 30){continue;}}}
                if(abcode3 == 27 || abcode3 == 28 || abcode3 == 29 || abcode3 == 30){ if(abcode2 == 27 || abcode2 == 28 || abcode2 == 29 || abcode2 == 30){ if(abcode1 == 27 || abcode1 == 28 || abcode1 == 29 || abcode1 == 30){continue;}}}
                if(abcode1 == 63 || abcode1 == 64){ if(abcode2 == 63 || abcode2 == 64){ if(abcode3 == 63 || abcode3 == 64){continue;}}}
                if(abcode1 == 63 || abcode1 == 64){ if(abcode3 == 63 || abcode3 == 64){ if(abcode2 == 63 || abcode2 == 64){continue;}}}
                if(abcode2 == 63 || abcode2 == 64){ if(abcode1 == 63 || abcode1 == 64){ if(abcode3 == 63 || abcode3 == 64){continue;}}}
                if(abcode2 == 63 || abcode2 == 64){ if(abcode3 == 63 || abcode3 == 64){ if(abcode1 == 63 || abcode1 == 64){continue;}}}
                if(abcode3 == 63 || abcode3 == 64){ if(abcode1 == 63 || abcode1 == 64){ if(abcode2 == 63 || abcode2 == 64){continue;}}}
                if(abcode3 == 63 || abcode3 == 64){ if(abcode2 == 63 || abcode2 == 64){ if(abcode1 == 63 || abcode1 == 64){continue;}}}
                if(abcode1 == 65 || abcode1 == 66 || abcode1 == 67){ if(abcode2 == 65 || abcode2 == 66 || abcode2 == 67){ if(abcode3 == 65 || abcode3 == 66 || abcode3 == 67){continue;}}}
                if(abcode1 == 65 || abcode1 == 66 || abcode1 == 67){ if(abcode3 == 65 || abcode3 == 66 || abcode3 == 67){ if(abcode2 == 65 || abcode2 == 66 || abcode2 == 67){continue;}}}
                if(abcode2 == 65 || abcode2 == 66 || abcode2 == 67){ if(abcode1 == 65 || abcode1 == 66 || abcode1 == 67){ if(abcode3 == 65 || abcode3 == 66 || abcode3 == 67){continue;}}}
                if(abcode2 == 65 || abcode2 == 66 || abcode2 == 67){ if(abcode3 == 65 || abcode3 == 66 || abcode3 == 67){ if(abcode1 == 65 || abcode1 == 66 || abcode1 == 67){continue;}}}
                if(abcode3 == 65 || abcode2 == 66 || abcode3 == 67){ if(abcode1 == 65 || abcode1 == 66 || abcode1 == 67){ if(abcode2 == 65 || abcode2 == 66 || abcode2 == 67){continue;}}}
                if(abcode3 == 65 || abcode2 == 66 || abcode3 == 67){ if(abcode2 == 65 || abcode2 == 66 || abcode2 == 67){ if(abcode1 == 65 || abcode1 == 66 || abcode1 == 67){continue;}}}
                }
                temprate = 1.0;
                temprate *= parseFloat(r1[a]) * parseFloat(r2[b]) * parseFloat(r3[c]);
                temprate /= 10000; 
                str = 0, dex = 0, ints = 0, luk = 0, bossa = 0, atk = 0, mag = 0, defig = 0, cridam = 0, alls = 0, hps = 0, mesos = 0, items = 0, dam = 0, cool = 0;
                switch(abcode1){
                    case 0:
                        str += 12;
                        break;
                    case 1:
                        str += 9;
                        break;
                    case 2:
                        str += 6;
                        break;
                    case 3:
                        str += 3;
                        break;
                    case 4:
                        dex += 12;
                        break;
                    case 5:
                        dex += 9;
                        break;
                    case 6:
                        dex += 6;
                        break;
                    case 7:
                        dex += 3;
                        break;
                    case 8:
                        ints += 12;
                        break;
                    case 9:
                        ints += 9;
                        break;
                    case 10:
                        ints += 6;
                        break;
                    case 11:
                        ints += 3;
                        break;
                    case 12:
                        luk += 12;
                        break;
                    case 13:
                        luk += 9;
                        break;
                    case 14:
                        luk += 6;
                        break;
                    case 15:
                        luk += 3;
                        break;
                    case 16:
                        bossa += 40;
                        break;
                    case 17:
                        bossa += 35;
                        break;
                    case 18:
                        bossa += 30;
                        break;
                    case 19:
                        atk += 12;
                        break;
                    case 20:
                        atk += 9;
                        break;
                    case 21:
                        atk += 6;
                        break;
                    case 22:
                        atk += 3;
                        break;
                    case 23:
                        mag += 12;
                        break;
                    case 24:
                        mag += 9;
                        break;
                    case 25:
                        mag += 6;
                        break;
                    case 26:
                        mag += 3;
                        break;
                    case 27:
                        defig += 40;
                        break;
                    case 28:
                        defig += 35;
                        break;
                    case 29:
                        defig += 30;
                        break;
                    case 30:
                        defig += 15;
                        break;
                    case 31:
                        cridam += 8;
                        break;
                    case 32:
                        alls += 9;
                        str += 9;
                        dex += 9;
                        ints += 9;
                        luk += 9;
                        break;
                    case 33:
                        alls += 6;
                        str += 6;
                        dex += 6;
                        ints += 6;
                        luk += 6;
                        break;
                    case 34:
                        alls += 3;
                        str += 3;
                        dex += 3;
                        ints += 3;
                        luk += 3;
                        break;
                    case 35:
                        hps += 12;
                        break;
                    case 36:
                        hps += 9;
                        break;
                    case 37:
                        hps += 6;
                        break;
                    case 38:
                        hps += 3;
                        break;
                    case 39:
                        mesos += 20;
                        break;
                    case 40:
                        items += 20;
                        break;
                    case 41:
                        dam += 12;
                        break;
                    case 42:
                        dam += 9;
                        break;
                    case 43:
                        dam += 6;
                        break;
                    case 44:
                        dam += 3;
                        break;
                    case 45:
                        cool += 2;
                        break;
                    case 46:
                        cool += 1;
                        break;
                    case 47:
                        str += 2;
                        break;
                    case 48:
                        str += 4;
                        break;
                    case 49:
                        str += 5;
                        break;
                    case 50:
                        str += 7;
                        break;
                    case 51:
                        dex += 2;
                        break;
                    case 52:
                        dex += 4;
                        break;
                    case 53:
                        dex += 5;
                        break;
                    case 54:
                        dex += 7;
                        break;
                    case 55:
                        ints += 2;
                        break;
                    case 56:
                        ints += 4;
                        break;
                    case 57:
                        ints += 5;
                        break;
                    case 58:
                        ints += 7;
                        break;
                    case 59:
                        luk += 2;
                        break;
                    case 60:
                        luk += 4;
                        break;
                    case 61:
                        luk += 5;
                        break;
                    case 62:
                        luk += 7;
                        break;
                    case 63:
                        bossa += 12;
                        break;
                    case 64:
                        bossa += 18;
                        break;
                    case 65:
                        defig += 3;
                        break;
                    case 66:
                        defig += 4;
                        break;
                    case 67:
                        defig += 5;
                        break;
                    case 68:
                        cridam += 3;
                        break;
                    case 69:
                        alls += 2;
                        str += 2;
                        dex += 2;
                        ints += 2;
                        luk += 2;
                        break;
                    case 70:
                        alls += 4;
                        str += 4;
                        dex += 4;
                        ints += 4;
                        luk += 4;
                        break;
                    case 71:
                        alls += 5;
                        str += 5;
                        dex += 5;
                        ints += 5;
                        luk += 5;
                        break;
                    case 72:
                        hps += 2;
                        break;
                    case 73:
                        hps += 5;
                        break;
                    case 74:
                        hps += 7;
                        break;
                    case 75:
                        hps += 10;
                        break;
                }
                switch(abcode2){
                    case 0:
                        str += 12;
                        break;
                    case 1:
                        str += 9;
                        break;
                    case 2:
                        str += 6;
                        break;
                    case 3:
                        str += 3;
                        break;
                    case 4:
                        dex += 12;
                        break;
                    case 5:
                        dex += 9;
                        break;
                    case 6:
                        dex += 6;
                        break;
                    case 7:
                        dex += 3;
                        break;
                    case 8:
                        ints += 12;
                        break;
                    case 9:
                        ints += 9;
                        break;
                    case 10:
                        ints += 6;
                        break;
                    case 11:
                        ints += 3;
                        break;
                    case 12:
                        luk += 12;
                        break;
                    case 13:
                        luk += 9;
                        break;
                    case 14:
                        luk += 6;
                        break;
                    case 15:
                        luk += 3;
                        break;
                    case 16:
                        bossa += 40;
                        break;
                    case 17:
                        bossa += 35;
                        break;
                    case 18:
                        bossa += 30;
                        break;
                    case 19:
                        atk += 12;
                        break;
                    case 20:
                        atk += 9;
                        break;
                    case 21:
                        atk += 6;
                        break;
                    case 22:
                        atk += 3;
                        break;
                    case 23:
                        mag += 12;
                        break;
                    case 24:
                        mag += 9;
                        break;
                    case 25:
                        mag += 6;
                        break;
                    case 26:
                        mag += 3;
                        break;
                    case 27:
                        defig += 40;
                        break;
                    case 28:
                        defig += 35;
                        break;
                    case 29:
                        defig += 30;
                        break;
                    case 30:
                        defig += 15;
                        break;
                    case 31:
                        cridam += 8;
                        break;
                    case 32:
                        alls += 9;
                        str += 9;
                        dex += 9;
                        ints += 9;
                        luk += 9;
                        break;
                    case 33:
                        alls += 6;
                        str += 6;
                        dex += 6;
                        ints += 6;
                        luk += 6;
                        break;
                    case 34:
                        alls += 3;
                        str += 3;
                        dex += 3;
                        ints += 3;
                        luk += 3;
                        break;
                    case 35:
                        hps += 12;
                        break;
                    case 36:
                        hps += 9;
                        break;
                    case 37:
                        hps += 6;
                        break;
                    case 38:
                        hps += 3;
                        break;
                    case 39:
                        mesos += 20;
                        break;
                    case 40:
                        items += 20;
                        break;
                    case 41:
                        dam += 12;
                        break;
                    case 42:
                        dam += 9;
                        break;
                    case 43:
                        dam += 6;
                        break;
                    case 44:
                        dam += 3;
                        break;
                    case 45:
                        cool += 2;
                        break;
                    case 46:
                        cool += 1;
                        break;
                    case 47:
                        str += 2;
                        break;
                    case 48:
                        str += 4;
                        break;
                    case 49:
                        str += 5;
                        break;
                    case 50:
                        str += 7;
                        break;
                    case 51:
                        dex += 2;
                        break;
                    case 52:
                        dex += 4;
                        break;
                    case 53:
                        dex += 5;
                        break;
                    case 54:
                        dex += 7;
                        break;
                    case 55:
                        ints += 2;
                        break;
                    case 56:
                        ints += 4;
                        break;
                    case 57:
                        ints += 5;
                        break;
                    case 58:
                        ints += 7;
                        break;
                    case 59:
                        luk += 2;
                        break;
                    case 60:
                        luk += 4;
                        break;
                    case 61:
                        luk += 5;
                        break;
                    case 62:
                        luk += 7;
                        break;
                    case 63:
                        bossa += 12;
                        break;
                    case 64:
                        bossa += 18;
                        break;
                    case 65:
                        defig += 3;
                        break;
                    case 66:
                        defig += 4;
                        break;
                    case 67:
                        defig += 5;
                        break;
                    case 68:
                        cridam += 3;
                        break;
                    case 69:
                        alls += 2;
                        str += 2;
                        dex += 2;
                        ints += 2;
                        luk += 2;
                        break;
                    case 70:
                        alls += 4;
                        str += 4;
                        dex += 4;
                        ints += 4;
                        luk += 4;
                        break;
                    case 71:
                        alls += 5;
                        str += 5;
                        dex += 5;
                        ints += 5;
                        luk += 5;
                        break;
                    case 72:
                        hps += 2;
                        break;
                    case 73:
                        hps += 5;
                        break;
                    case 74:
                        hps += 7;
                        break;
                    case 75:
                        hps += 10;
                        break;
                }
                switch(abcode3){
                    case 0:
                        str += 12;
                        break;
                    case 1:
                        str += 9;
                        break;
                    case 2:
                        str += 6;
                        break;
                    case 3:
                        str += 3;
                        break;
                    case 4:
                        dex += 12;
                        break;
                    case 5:
                        dex += 9;
                        break;
                    case 6:
                        dex += 6;
                        break;
                    case 7:
                        dex += 3;
                        break;
                    case 8:
                        ints += 12;
                        break;
                    case 9:
                        ints += 9;
                        break;
                    case 10:
                        ints += 6;
                        break;
                    case 11:
                        ints += 3;
                        break;
                    case 12:
                        luk += 12;
                        break;
                    case 13:
                        luk += 9;
                        break;
                    case 14:
                        luk += 6;
                        break;
                    case 15:
                        luk += 3;
                        break;
                    case 16:
                        bossa += 40;
                        break;
                    case 17:
                        bossa += 35;
                        break;
                    case 18:
                        bossa += 30;
                        break;
                    case 19:
                        atk += 12;
                        break;
                    case 20:
                        atk += 9;
                        break;
                    case 21:
                        atk += 6;
                        break;
                    case 22:
                        atk += 3;
                        break;
                    case 23:
                        mag += 12;
                        break;
                    case 24:
                        mag += 9;
                        break;
                    case 25:
                        mag += 6;
                        break;
                    case 26:
                        mag += 3;
                        break;
                    case 27:
                        defig += 40;
                        break;
                    case 28:
                        defig += 35;
                        break;
                    case 29:
                        defig += 30;
                        break;
                    case 30:
                        defig += 15;
                        break;
                    case 31:
                        cridam += 8;
                        break;
                    case 32:
                        alls += 9;
                        str += 9;
                        dex += 9;
                        ints += 9;
                        luk += 9;
                        break;
                    case 33:
                        alls += 6;
                        str += 6;
                        dex += 6;
                        ints += 6;
                        luk += 6;
                        break;
                    case 34:
                        alls += 3;
                        str += 3;
                        dex += 3;
                        ints += 3;
                        luk += 3;
                        break;
                    case 35:
                        hps += 12;
                        break;
                    case 36:
                        hps += 9;
                        break;
                    case 37:
                        hps += 6;
                        break;
                    case 38:
                        hps += 3;
                        break;
                    case 39:
                        mesos += 20;
                        break;
                    case 40:
                        items += 20;
                        break;
                    case 41:
                        dam += 12;
                        break;
                    case 42:
                        dam += 9;
                        break;
                    case 43:
                        dam += 6;
                        break;
                    case 44:
                        dam += 3;
                        break;
                    case 45:
                        cool += 2;
                        break;
                    case 46:
                        cool += 1;
                        break;
                    case 47:
                        str += 2;
                        break;
                    case 48:
                        str += 4;
                        break;
                    case 49:
                        str += 5;
                        break;
                    case 50:
                        str += 7;
                        break;
                    case 51:
                        dex += 2;
                        break;
                    case 52:
                        dex += 4;
                        break;
                    case 53:
                        dex += 5;
                        break;
                    case 54:
                        dex += 7;
                        break;
                    case 55:
                        ints += 2;
                        break;
                    case 56:
                        ints += 4;
                        break;
                    case 57:
                        ints += 5;
                        break;
                    case 58:
                        ints += 7;
                        break;
                    case 59:
                        luk += 2;
                        break;
                    case 60:
                        luk += 4;
                        break;
                    case 61:
                        luk += 5;
                        break;
                    case 62:
                        luk += 7;
                        break;
                    case 63:
                        bossa += 12;
                        break;
                    case 64:
                        bossa += 18;
                        break;
                    case 65:
                        defig += 3;
                        break;
                    case 66:
                        defig += 4;
                        break;
                    case 67:
                        defig += 5;
                        break;
                    case 68:
                        cridam += 3;
                        break;
                    case 69:
                        alls += 2;
                        str += 2;
                        dex += 2;
                        ints += 2;
                        luk += 2;
                        break;
                    case 70:
                        alls += 4;
                        str += 4;
                        dex += 4;
                        ints += 4;
                        luk += 4;
                        break;
                    case 71:
                        alls += 5;
                        str += 5;
                        dex += 5;
                        ints += 5;
                        luk += 5;
                        break;
                    case 72:
                        hps += 2;
                        break;
                    case 73:
                        hps += 5;
                        break;
                    case 74:
                        hps += 7;
                        break;
                    case 75:
                        hps += 10;
                        break;
                }

                if(abilind == 0){ tempcomp = str; }
                else if(abilind == 1){ tempcomp = dex; }
                else if(abilind == 2){ tempcomp = ints; }
                else if(abilind == 3){ tempcomp = luk; }
                else if(abilind == 4){ tempcomp = bossa; }
                else if(abilind == 5){ tempcomp = atk; }
                else if(abilind == 6){ tempcomp = mag; }
                else if(abilind == 7){ tempcomp = defig; }
                else if(abilind == 8){ tempcomp = cridam; }
                else if(abilind == 9){ tempcomp = alls; }
                else if(abilind == 10){ tempcomp = hps; }
                else if(abilind == 11){ tempcomp = mesos; }
                else if(abilind == 12){ tempcomp = items; }
                else if(abilind == 13){ tempcomp = dam; }
                else if(abilind == 14){ tempcomp = cool; }
                if(abilind2 == 0){ tempcomp2 = str; }
                else if(abilind2 == 1){ tempcomp2 = dex; }
                else if(abilind2 == 2){ tempcomp2 = ints; }
                else if(abilind2 == 3){ tempcomp2 = luk; }
                else if(abilind2 == 4){ tempcomp2 = bossa; }
                else if(abilind2 == 5){ tempcomp2 = atk; }
                else if(abilind2 == 6){ tempcomp2 = mag; }
                else if(abilind2 == 7){ tempcomp2 = defig; }
                else if(abilind2 == 8){ tempcomp2 = cridam; }
                else if(abilind2 == 9){ tempcomp2 = alls; }
                else if(abilind2 == 10){ tempcomp2 = hps; }
                else if(abilind2 == 11){ tempcomp2 = mesos; }
                else if(abilind2 == 12){ tempcomp2 = items; }
                else if(abilind2 == 13){ tempcomp2 = dam; }
                else if(abilind2 == 14){ tempcomp2 = cool; }
                
                if(tempcomp >= abilval){ //var trate = temprate.toFixed(6);   rep += tempcomp + " " + abilval + " " + abcode1 + " " + abcode2 + " " + abcode3 + " " + trate + "%\n";
                    finalrate1 += temprate;
                }          
                if(tempcomp2 >= abilval2){
                    finalrate2 += temprate;
                }
                if(tempcomp >= abilval && tempcomp2 >= abilval2){
                    finalrate += temprate;
                }
            }
        }
    }
    var frate = finalrate.toFixed(8);
    var cubenum = (100 / finalrate).toFixed(0);
    if(finalrate1 == 0){
        if(abilind == 14){rep += "해당 수치 " + abilval + "초가 해당 등급 [" + getCubeabilityR(abilind) + "] 에서 나올 수 있는 수치를 초과하였거나 해당 장비에서 나올 수 없는 옵션입니다.";}
        else{rep += "해당 수치 " + abilval + "%가 해당 등급 [" + getCubeabilityR(abilind) + "] 에서 나올 수 있는 수치를 초과하였거나 해당 장비에서 나올 수 없는 옵션입니다.";} 
        
        if(finalrate2 == 0){
            if(abilind2 == 14){rep += "\n해당 수치 " + abilval2 + "초가 해당 등급 [" + getCubeabilityR(abilind2) + "] 에서 나올 수 있는 수치를 초과하였거나 해당 장비에서 나올 수 없는 옵션입니다.";}
            else{rep += "\n해당 수치 " + abilval2 + "%가 해당 등급 [" + getCubeabilityR(abilind2) + "] 에서 나올 수 있는 수치를 초과하였거나 해당 장비에서 나올 수 없는 옵션입니다.";}
        }
    }
    else if(finalrate2 == 0){
        if(abilind2 == 14){rep += "해당 수치 " + abilval2 + "초가 해당 등급 [" + getCubeabilityR(abilind2) + "] 에서 나올 수 있는 수치를 초과하였거나 해당 장비에서 나올 수 없는 옵션입니다.";}
        else{rep += "해당 수치 " + abilval2 + "%가 해당 등급 [" + getCubeabilityR(abilind2) + "] 에서 나올 수 있는 수치를 초과하였거나 해당 장비에서 나올 수 없는 옵션입니다.";}
    }
    else if(frate == 0){
        if(abilind == 14){rep += "해당 아이템 분류에서 [" + getCubeabilityR(abilind) + "] 능력 " + abilval +"초 와 [" + getCubeabilityR(abilind2)+ "] 능력 " + abilval2 + "% 해당 두 수치가 동시에 나올 확률이 0으로 계산되었습니다. 확인 후 다시 입력해주십시오.";}
        else if(abilind2 == 14){rep += "해당 아이템 분류에서 [" + getCubeabilityR(abilind) + "] 능력 " + abilval +"% 와 [" + getCubeabilityR(abilind2)+ "] 능력 " + abilval2 + "초 해당 두 수치가 동시에 나올 확률이 0으로 계산되었습니다. 확인 후 다시 입력해주십시오.";}
        else{rep += "해당 아이템 분류에서 [" + getCubeabilityR(abilind) + "] 능력 " + abilval +"% 와 [" + getCubeabilityR(abilind2)+ "] 능력 " + abilval2 + "% 해당 두 수치가 동시에 나올 확률이 0으로 계산되었습니다. 확인 후 다시 입력해주십시오.";}
    }
    else{
        if(abilind == 14){
            rep += getCubeabilityR(abilind) + " " + abilval + "초 이상 확률은 " + finalrate1.toFixed(8) + "% 입니다.\n";
            rep += getCubeabilityR(abilind2) + " " + abilval2 + "% 이상 확률은 " + finalrate2.toFixed(8) + "% 입니다.\n";
            rep += getCubeabilityR(abilind) + " " + abilval + "초 이상, " + getCubeabilityR(abilind2) + " " + abilval2 + "% 이상 동시에 뜰 확률은 " + frate + "% 입니다.\n";
            rep += "해당 옵션의 기댓값은 " + cubenum + "개 입니다.";
            rep += getCubeprice(cubename, cubenum);
        }
        else if(abilind2 == 14){
            rep += getCubeabilityR(abilind) + " " + abilval + "% 이상 확률은 " + finalrate1.toFixed(8) + "% 입니다.\n";
            rep += getCubeabilityR(abilind2) + " " + abilval2 + "초 이상 확률은 " + finalrate2.toFixed(8) + "% 입니다.\n";
            rep += getCubeabilityR(abilind) + " " + abilval + "% 이상, " + getCubeabilityR(abilind2) + " " + abilval2 + "초 이상 동시에 뜰 확률은 " + frate + "% 입니다.\n";
            rep += "해당 옵션의 기댓값은 " + cubenum + "개 입니다.";
            rep += getCubeprice(cubename, cubenum);
        }
        else{
            rep += getCubeabilityR(abilind) + " " + abilval + "% 이상 확률은 " + finalrate1.toFixed(8) + "% 입니다.\n";
            rep += getCubeabilityR(abilind2) + " " + abilval2 + "% 이상 확률은 " + finalrate2.toFixed(8) + "% 입니다.\n";
            rep += getCubeabilityR(abilind) + " " + abilval + "% 이상, " + getCubeabilityR(abilind2) + " " + abilval2 + "% 이상 동시에 뜰 확률은 " + frate + "% 입니다.\n";
            rep += "해당 옵션의 기댓값은 " + cubenum + "개 입니다.";
            rep += getCubeprice(cubename, cubenum);
        }
    }
    return rep;
}
cb.getCuberateThreeabil = function (cubename, abilind, abilval, abilind2, abilval2, abilind3, abilval3, p1, p2, p3, r1, r2, r3){
    var rep = "";
    var a = 0, b = 0, c = 0, tempcomp = 0, tempcomp2 = 0, tempcomp3 = 0, temprate = 1.0, finalrate1 = 0.0, finalrate2 = 0.0, finalrate3 = 0.0, finalrate = 0.0;
    var str = 0, dex = 0, ints = 0, luk = 0, bossa = 0, atk = 0, mag = 0, defig = 0, cridam = 0, alls = 0, hps = 0, mesos = 0, items = 0, dam = 0, cool = 0;

    for(a = 0; a < p1.length; ++a){
        var abcode1 = getabilityCode(p1[a]);
        for(b = 0; b < p2.length; ++b){
            var abcode2 = getabilityCode(p2[b]);
            for(c = 0; c < p3.length; ++c){
                var abcode3 = getabilityCode(p3[c]);
                if(true){
                if(abcode1 == abcode2 && abcode1 == abcode3 && abcode1 == 40){continue;}
                if(abcode1 == 16 || abcode1 == 17 || abcode1 == 18){ if(abcode2 == 16 || abcode2 == 17 || abcode2 == 18){ if(abcode3 == 16 || abcode3 == 17 || abcode3 == 18){continue;}}}
                if(abcode1 == 16 || abcode1 == 17 || abcode1 == 18){ if(abcode3 == 16 || abcode3 == 17 || abcode3 == 18){ if(abcode2 == 16 || abcode2 == 17 || abcode2 == 18){continue;}}}
                if(abcode2 == 16 || abcode2 == 17 || abcode2 == 18){ if(abcode1 == 16 || abcode1 == 17 || abcode1 == 18){ if(abcode3 == 16 || abcode3 == 17 || abcode3 == 18){continue;}}}
                if(abcode2 == 16 || abcode2 == 17 || abcode2 == 18){ if(abcode3 == 16 || abcode3 == 17 || abcode3 == 18){ if(abcode1 == 16 || abcode1 == 17 || abcode1 == 18){continue;}}}
                if(abcode3 == 16 || abcode3 == 17 || abcode3 == 18){ if(abcode1 == 16 || abcode1 == 17 || abcode1 == 18){ if(abcode2 == 16 || abcode2 == 17 || abcode2 == 18){continue;}}}
                if(abcode3 == 16 || abcode3 == 17 || abcode3 == 18){ if(abcode2 == 16 || abcode2 == 17 || abcode2 == 18){ if(abcode1 == 16 || abcode1 == 17 || abcode1 == 18){continue;}}}
                if(abcode1 == 27 || abcode1 == 28 || abcode1 == 29 || abcode1 == 30){ if(abcode2 == 27 || abcode2 == 28 || abcode2 == 29 || abcode2 == 30){ if(abcode3 == 27 || abcode3 == 28 || abcode3 == 29 || abcode3 == 30){continue;}}}
                if(abcode1 == 27 || abcode1 == 28 || abcode1 == 29 || abcode1 == 30){ if(abcode3 == 27 || abcode3 == 28 || abcode3 == 29 || abcode3 == 30){ if(abcode2 == 27 || abcode2 == 28 || abcode2 == 29 || abcode2 == 30){continue;}}}
                if(abcode2 == 27 || abcode2 == 28 || abcode2 == 29 || abcode2 == 30){ if(abcode1 == 27 || abcode1 == 28 || abcode1 == 29 || abcode1 == 30){ if(abcode3 == 27 || abcode3 == 28 || abcode3 == 29 || abcode3 == 30){continue;}}}
                if(abcode2 == 27 || abcode2 == 28 || abcode2 == 29 || abcode2 == 30){ if(abcode3 == 27 || abcode3 == 28 || abcode3 == 29 || abcode3 == 30){ if(abcode1 == 27 || abcode1 == 28 || abcode1 == 29 || abcode1 == 30){continue;}}}
                if(abcode3 == 27 || abcode3 == 28 || abcode3 == 29 || abcode3 == 30){ if(abcode1 == 27 || abcode1 == 28 || abcode1 == 29 || abcode1 == 30){ if(abcode2 == 27 || abcode2 == 28 || abcode2 == 29 || abcode2 == 30){continue;}}}
                if(abcode3 == 27 || abcode3 == 28 || abcode3 == 29 || abcode3 == 30){ if(abcode2 == 27 || abcode2 == 28 || abcode2 == 29 || abcode2 == 30){ if(abcode1 == 27 || abcode1 == 28 || abcode1 == 29 || abcode1 == 30){continue;}}}
                if(abcode1 == 63 || abcode1 == 64){ if(abcode2 == 63 || abcode2 == 64){ if(abcode3 == 63 || abcode3 == 64){continue;}}}
                if(abcode1 == 63 || abcode1 == 64){ if(abcode3 == 63 || abcode3 == 64){ if(abcode2 == 63 || abcode2 == 64){continue;}}}
                if(abcode2 == 63 || abcode2 == 64){ if(abcode1 == 63 || abcode1 == 64){ if(abcode3 == 63 || abcode3 == 64){continue;}}}
                if(abcode2 == 63 || abcode2 == 64){ if(abcode3 == 63 || abcode3 == 64){ if(abcode1 == 63 || abcode1 == 64){continue;}}}
                if(abcode3 == 63 || abcode3 == 64){ if(abcode1 == 63 || abcode1 == 64){ if(abcode2 == 63 || abcode2 == 64){continue;}}}
                if(abcode3 == 63 || abcode3 == 64){ if(abcode2 == 63 || abcode2 == 64){ if(abcode1 == 63 || abcode1 == 64){continue;}}}
                if(abcode1 == 65 || abcode1 == 66 || abcode1 == 67){ if(abcode2 == 65 || abcode2 == 66 || abcode2 == 67){ if(abcode3 == 65 || abcode3 == 66 || abcode3 == 67){continue;}}}
                if(abcode1 == 65 || abcode1 == 66 || abcode1 == 67){ if(abcode3 == 65 || abcode3 == 66 || abcode3 == 67){ if(abcode2 == 65 || abcode2 == 66 || abcode2 == 67){continue;}}}
                if(abcode2 == 65 || abcode2 == 66 || abcode2 == 67){ if(abcode1 == 65 || abcode1 == 66 || abcode1 == 67){ if(abcode3 == 65 || abcode3 == 66 || abcode3 == 67){continue;}}}
                if(abcode2 == 65 || abcode2 == 66 || abcode2 == 67){ if(abcode3 == 65 || abcode3 == 66 || abcode3 == 67){ if(abcode1 == 65 || abcode1 == 66 || abcode1 == 67){continue;}}}
                if(abcode3 == 65 || abcode2 == 66 || abcode3 == 67){ if(abcode1 == 65 || abcode1 == 66 || abcode1 == 67){ if(abcode2 == 65 || abcode2 == 66 || abcode2 == 67){continue;}}}
                if(abcode3 == 65 || abcode2 == 66 || abcode3 == 67){ if(abcode2 == 65 || abcode2 == 66 || abcode2 == 67){ if(abcode1 == 65 || abcode1 == 66 || abcode1 == 67){continue;}}}
                }
                temprate = 1.0;
                temprate *= parseFloat(r1[a]) * parseFloat(r2[b]) * parseFloat(r3[c]);
                temprate /= 10000; 
                str = 0, dex = 0, ints = 0, luk = 0, bossa = 0, atk = 0, mag = 0, defig = 0, cridam = 0, alls = 0, hps = 0, mesos = 0, items = 0, dam = 0, cool = 0;
                switch(abcode1){
                    case 0:
                        str += 12;
                        break;
                    case 1:
                        str += 9;
                        break;
                    case 2:
                        str += 6;
                        break;
                    case 3:
                        str += 3;
                        break;
                    case 4:
                        dex += 12;
                        break;
                    case 5:
                        dex += 9;
                        break;
                    case 6:
                        dex += 6;
                        break;
                    case 7:
                        dex += 3;
                        break;
                    case 8:
                        ints += 12;
                        break;
                    case 9:
                        ints += 9;
                        break;
                    case 10:
                        ints += 6;
                        break;
                    case 11:
                        ints += 3;
                        break;
                    case 12:
                        luk += 12;
                        break;
                    case 13:
                        luk += 9;
                        break;
                    case 14:
                        luk += 6;
                        break;
                    case 15:
                        luk += 3;
                        break;
                    case 16:
                        bossa += 40;
                        break;
                    case 17:
                        bossa += 35;
                        break;
                    case 18:
                        bossa += 30;
                        break;
                    case 19:
                        atk += 12;
                        break;
                    case 20:
                        atk += 9;
                        break;
                    case 21:
                        atk += 6;
                        break;
                    case 22:
                        atk += 3;
                        break;
                    case 23:
                        mag += 12;
                        break;
                    case 24:
                        mag += 9;
                        break;
                    case 25:
                        mag += 6;
                        break;
                    case 26:
                        mag += 3;
                        break;
                    case 27:
                        defig += 40;
                        break;
                    case 28:
                        defig += 35;
                        break;
                    case 29:
                        defig += 30;
                        break;
                    case 30:
                        defig += 15;
                        break;
                    case 31:
                        cridam += 8;
                        break;
                    case 32:
                        alls += 9;
                        str += 9;
                        dex += 9;
                        ints += 9;
                        luk += 9;
                        break;
                    case 33:
                        alls += 6;
                        str += 6;
                        dex += 6;
                        ints += 6;
                        luk += 6;
                        break;
                    case 34:
                        alls += 3;
                        str += 3;
                        dex += 3;
                        ints += 3;
                        luk += 3;
                        break;
                    case 35:
                        hps += 12;
                        break;
                    case 36:
                        hps += 9;
                        break;
                    case 37:
                        hps += 6;
                        break;
                    case 38:
                        hps += 3;
                        break;
                    case 39:
                        mesos += 20;
                        break;
                    case 40:
                        items += 20;
                        break;
                    case 41:
                        dam += 12;
                        break;
                    case 42:
                        dam += 9;
                        break;
                    case 43:
                        dam += 6;
                        break;
                    case 44:
                        dam += 3;
                        break;
                    case 45:
                        cool += 2;
                        break;
                    case 46:
                        cool += 1;
                        break;
                    case 47:
                        str += 2;
                        break;
                    case 48:
                        str += 4;
                        break;
                    case 49:
                        str += 5;
                        break;
                    case 50:
                        str += 7;
                        break;
                    case 51:
                        dex += 2;
                        break;
                    case 52:
                        dex += 4;
                        break;
                    case 53:
                        dex += 5;
                        break;
                    case 54:
                        dex += 7;
                        break;
                    case 55:
                        ints += 2;
                        break;
                    case 56:
                        ints += 4;
                        break;
                    case 57:
                        ints += 5;
                        break;
                    case 58:
                        ints += 7;
                        break;
                    case 59:
                        luk += 2;
                        break;
                    case 60:
                        luk += 4;
                        break;
                    case 61:
                        luk += 5;
                        break;
                    case 62:
                        luk += 7;
                        break;
                    case 63:
                        bossa += 12;
                        break;
                    case 64:
                        bossa += 18;
                        break;
                    case 65:
                        defig += 3;
                        break;
                    case 66:
                        defig += 4;
                        break;
                    case 67:
                        defig += 5;
                        break;
                    case 68:
                        cridam += 3;
                        break;
                    case 69:
                        alls += 2;
                        str += 2;
                        dex += 2;
                        ints += 2;
                        luk += 2;
                        break;
                    case 70:
                        alls += 4;
                        str += 4;
                        dex += 4;
                        ints += 4;
                        luk += 4;
                        break;
                    case 71:
                        alls += 5;
                        str += 5;
                        dex += 5;
                        ints += 5;
                        luk += 5;
                        break;
                    case 72:
                        hps += 2;
                        break;
                    case 73:
                        hps += 5;
                        break;
                    case 74:
                        hps += 7;
                        break;
                    case 75:
                        hps += 10;
                        break;
                }
                switch(abcode2){
                    case 0:
                        str += 12;
                        break;
                    case 1:
                        str += 9;
                        break;
                    case 2:
                        str += 6;
                        break;
                    case 3:
                        str += 3;
                        break;
                    case 4:
                        dex += 12;
                        break;
                    case 5:
                        dex += 9;
                        break;
                    case 6:
                        dex += 6;
                        break;
                    case 7:
                        dex += 3;
                        break;
                    case 8:
                        ints += 12;
                        break;
                    case 9:
                        ints += 9;
                        break;
                    case 10:
                        ints += 6;
                        break;
                    case 11:
                        ints += 3;
                        break;
                    case 12:
                        luk += 12;
                        break;
                    case 13:
                        luk += 9;
                        break;
                    case 14:
                        luk += 6;
                        break;
                    case 15:
                        luk += 3;
                        break;
                    case 16:
                        bossa += 40;
                        break;
                    case 17:
                        bossa += 35;
                        break;
                    case 18:
                        bossa += 30;
                        break;
                    case 19:
                        atk += 12;
                        break;
                    case 20:
                        atk += 9;
                        break;
                    case 21:
                        atk += 6;
                        break;
                    case 22:
                        atk += 3;
                        break;
                    case 23:
                        mag += 12;
                        break;
                    case 24:
                        mag += 9;
                        break;
                    case 25:
                        mag += 6;
                        break;
                    case 26:
                        mag += 3;
                        break;
                    case 27:
                        defig += 40;
                        break;
                    case 28:
                        defig += 35;
                        break;
                    case 29:
                        defig += 30;
                        break;
                    case 30:
                        defig += 15;
                        break;
                    case 31:
                        cridam += 8;
                        break;
                    case 32:
                        alls += 9;
                        str += 9;
                        dex += 9;
                        ints += 9;
                        luk += 9;
                        break;
                    case 33:
                        alls += 6;
                        str += 6;
                        dex += 6;
                        ints += 6;
                        luk += 6;
                        break;
                    case 34:
                        alls += 3;
                        str += 3;
                        dex += 3;
                        ints += 3;
                        luk += 3;
                        break;
                    case 35:
                        hps += 12;
                        break;
                    case 36:
                        hps += 9;
                        break;
                    case 37:
                        hps += 6;
                        break;
                    case 38:
                        hps += 3;
                        break;
                    case 39:
                        mesos += 20;
                        break;
                    case 40:
                        items += 20;
                        break;
                    case 41:
                        dam += 12;
                        break;
                    case 42:
                        dam += 9;
                        break;
                    case 43:
                        dam += 6;
                        break;
                    case 44:
                        dam += 3;
                        break;
                    case 45:
                        cool += 2;
                        break;
                    case 46:
                        cool += 1;
                        break;
                    case 47:
                        str += 2;
                        break;
                    case 48:
                        str += 4;
                        break;
                    case 49:
                        str += 5;
                        break;
                    case 50:
                        str += 7;
                        break;
                    case 51:
                        dex += 2;
                        break;
                    case 52:
                        dex += 4;
                        break;
                    case 53:
                        dex += 5;
                        break;
                    case 54:
                        dex += 7;
                        break;
                    case 55:
                        ints += 2;
                        break;
                    case 56:
                        ints += 4;
                        break;
                    case 57:
                        ints += 5;
                        break;
                    case 58:
                        ints += 7;
                        break;
                    case 59:
                        luk += 2;
                        break;
                    case 60:
                        luk += 4;
                        break;
                    case 61:
                        luk += 5;
                        break;
                    case 62:
                        luk += 7;
                        break;
                    case 63:
                        bossa += 12;
                        break;
                    case 64:
                        bossa += 18;
                        break;
                    case 65:
                        defig += 3;
                        break;
                    case 66:
                        defig += 4;
                        break;
                    case 67:
                        defig += 5;
                        break;
                    case 68:
                        cridam += 3;
                        break;
                    case 69:
                        alls += 2;
                        str += 2;
                        dex += 2;
                        ints += 2;
                        luk += 2;
                        break;
                    case 70:
                        alls += 4;
                        str += 4;
                        dex += 4;
                        ints += 4;
                        luk += 4;
                        break;
                    case 71:
                        alls += 5;
                        str += 5;
                        dex += 5;
                        ints += 5;
                        luk += 5;
                        break;
                    case 72:
                        hps += 2;
                        break;
                    case 73:
                        hps += 5;
                        break;
                    case 74:
                        hps += 7;
                        break;
                    case 75:
                        hps += 10;
                        break;
                }
                switch(abcode3){
                    case 0:
                        str += 12;
                        break;
                    case 1:
                        str += 9;
                        break;
                    case 2:
                        str += 6;
                        break;
                    case 3:
                        str += 3;
                        break;
                    case 4:
                        dex += 12;
                        break;
                    case 5:
                        dex += 9;
                        break;
                    case 6:
                        dex += 6;
                        break;
                    case 7:
                        dex += 3;
                        break;
                    case 8:
                        ints += 12;
                        break;
                    case 9:
                        ints += 9;
                        break;
                    case 10:
                        ints += 6;
                        break;
                    case 11:
                        ints += 3;
                        break;
                    case 12:
                        luk += 12;
                        break;
                    case 13:
                        luk += 9;
                        break;
                    case 14:
                        luk += 6;
                        break;
                    case 15:
                        luk += 3;
                        break;
                    case 16:
                        bossa += 40;
                        break;
                    case 17:
                        bossa += 35;
                        break;
                    case 18:
                        bossa += 30;
                        break;
                    case 19:
                        atk += 12;
                        break;
                    case 20:
                        atk += 9;
                        break;
                    case 21:
                        atk += 6;
                        break;
                    case 22:
                        atk += 3;
                        break;
                    case 23:
                        mag += 12;
                        break;
                    case 24:
                        mag += 9;
                        break;
                    case 25:
                        mag += 6;
                        break;
                    case 26:
                        mag += 3;
                        break;
                    case 27:
                        defig += 40;
                        break;
                    case 28:
                        defig += 35;
                        break;
                    case 29:
                        defig += 30;
                        break;
                    case 30:
                        defig += 15;
                        break;
                    case 31:
                        cridam += 8;
                        break;
                    case 32:
                        alls += 9;
                        str += 9;
                        dex += 9;
                        ints += 9;
                        luk += 9;
                        break;
                    case 33:
                        alls += 6;
                        str += 6;
                        dex += 6;
                        ints += 6;
                        luk += 6;
                        break;
                    case 34:
                        alls += 3;
                        str += 3;
                        dex += 3;
                        ints += 3;
                        luk += 3;
                        break;
                    case 35:
                        hps += 12;
                        break;
                    case 36:
                        hps += 9;
                        break;
                    case 37:
                        hps += 6;
                        break;
                    case 38:
                        hps += 3;
                        break;
                    case 39:
                        mesos += 20;
                        break;
                    case 40:
                        items += 20;
                        break;
                    case 41:
                        dam += 12;
                        break;
                    case 42:
                        dam += 9;
                        break;
                    case 43:
                        dam += 6;
                        break;
                    case 44:
                        dam += 3;
                        break;
                    case 45:
                        cool += 2;
                        break;
                    case 46:
                        cool += 1;
                        break;
                    case 47:
                        str += 2;
                        break;
                    case 48:
                        str += 4;
                        break;
                    case 49:
                        str += 5;
                        break;
                    case 50:
                        str += 7;
                        break;
                    case 51:
                        dex += 2;
                        break;
                    case 52:
                        dex += 4;
                        break;
                    case 53:
                        dex += 5;
                        break;
                    case 54:
                        dex += 7;
                        break;
                    case 55:
                        ints += 2;
                        break;
                    case 56:
                        ints += 4;
                        break;
                    case 57:
                        ints += 5;
                        break;
                    case 58:
                        ints += 7;
                        break;
                    case 59:
                        luk += 2;
                        break;
                    case 60:
                        luk += 4;
                        break;
                    case 61:
                        luk += 5;
                        break;
                    case 62:
                        luk += 7;
                        break;
                    case 63:
                        bossa += 12;
                        break;
                    case 64:
                        bossa += 18;
                        break;
                    case 65:
                        defig += 3;
                        break;
                    case 66:
                        defig += 4;
                        break;
                    case 67:
                        defig += 5;
                        break;
                    case 68:
                        cridam += 3;
                        break;
                    case 69:
                        alls += 2;
                        str += 2;
                        dex += 2;
                        ints += 2;
                        luk += 2;
                        break;
                    case 70:
                        alls += 4;
                        str += 4;
                        dex += 4;
                        ints += 4;
                        luk += 4;
                        break;
                    case 71:
                        alls += 5;
                        str += 5;
                        dex += 5;
                        ints += 5;
                        luk += 5;
                        break;
                    case 72:
                        hps += 2;
                        break;
                    case 73:
                        hps += 5;
                        break;
                    case 74:
                        hps += 7;
                        break;
                    case 75:
                        hps += 10;
                        break;
                }

                if(abilind == 0){ tempcomp = str; }
                else if(abilind == 1){ tempcomp = dex; }
                else if(abilind == 2){ tempcomp = ints; }
                else if(abilind == 3){ tempcomp = luk; }
                else if(abilind == 4){ tempcomp = bossa; }
                else if(abilind == 5){ tempcomp = atk; }
                else if(abilind == 6){ tempcomp = mag; }
                else if(abilind == 7){ tempcomp = defig; }
                else if(abilind == 8){ tempcomp = cridam; }
                else if(abilind == 9){ tempcomp = alls; }
                else if(abilind == 10){ tempcomp = hps; }
                else if(abilind == 11){ tempcomp = mesos; }
                else if(abilind == 12){ tempcomp = items; }
                else if(abilind == 13){ tempcomp = dam; }
                else if(abilind == 14){ tempcomp = cool; }
                if(abilind2 == 0){ tempcomp2 = str; }
                else if(abilind2 == 1){ tempcomp2 = dex; }
                else if(abilind2 == 2){ tempcomp2 = ints; }
                else if(abilind2 == 3){ tempcomp2 = luk; }
                else if(abilind2 == 4){ tempcomp2 = bossa; }
                else if(abilind2 == 5){ tempcomp2 = atk; }
                else if(abilind2 == 6){ tempcomp2 = mag; }
                else if(abilind2 == 7){ tempcomp2 = defig; }
                else if(abilind2 == 8){ tempcomp2 = cridam; }
                else if(abilind2 == 9){ tempcomp2 = alls; }
                else if(abilind2 == 10){ tempcomp2 = hps; }
                else if(abilind2 == 11){ tempcomp2 = mesos; }
                else if(abilind2 == 12){ tempcomp2 = items; }
                else if(abilind2 == 13){ tempcomp2 = dam;}
                else if(abilind2 == 14){ tempcomp2 = cool;}
                if(abilind3 == 0){ tempcomp2 = str; }
                else if(abilind3 == 1){ tempcomp3 = dex; }
                else if(abilind3 == 2){ tempcomp3 = ints; }
                else if(abilind3 == 3){ tempcomp3 = luk; }
                else if(abilind3 == 4){ tempcomp3 = bossa; }
                else if(abilind3 == 5){ tempcomp3 = atk; }
                else if(abilind3 == 6){ tempcomp3 = mag; }
                else if(abilind3 == 7){ tempcomp3 = defig; }
                else if(abilind3 == 8){ tempcomp3 = cridam; }
                else if(abilind3 == 9){ tempcomp3 = alls; }
                else if(abilind3 == 10){ tempcomp3 = hps; }
                else if(abilind3 == 11){ tempcomp3 = mesos; }
                else if(abilind3 == 12){ tempcomp3 = items; }
                else if(abilind3 == 13){ tempcomp3 = dam; }
                else if(abilind3 == 14){ tempcomp3 = cool; }
                
                if(tempcomp >= abilval){ //var trate = temprate.toFixed(6);   rep += tempcomp + " " + abilval + " " + abcode1 + " " + abcode2 + " " + abcode3 + " " + trate + "%\n";
                    finalrate1 += temprate;
                }          
                if(tempcomp2 >= abilval2){
                    finalrate2 += temprate;
                }
                if(tempcomp3 >= abilval3){
                    finalrate3 += temprate;
                }
                if(tempcomp >= abilval && tempcomp2 >= abilval2 && tempcomp3 >= abilval3){
                    finalrate += temprate;
                }
            }
        }
    }
    var frate = finalrate.toFixed(8);
    var cubenum = (100 / finalrate).toFixed(0);
    if(finalrate1 == 0){
        if(abilind == 14){rep += "해당 수치 " + abilval + "초가 해당 등급 [" + getCubeabilityR(abilind) + "] 에서 나올 수 있는 수치를 초과하였거나 해당 장비에서 나올 수 없는 옵션입니다.";}
        else{rep += "해당 수치 " + abilval + "%가 해당 등급 [" + getCubeabilityR(abilind) + "] 에서 나올 수 있는 수치를 초과하였거나 해당 장비에서 나올 수 없는 옵션입니다."; }
        
        if(finalrate2 == 0){
            if(abilind2 == 14){rep += "\n해당 수치 " + abilval2 + "초가 해당 등급 [" + getCubeabilityR(abilind2) + "] 에서 나올 수 있는 수치를 초과하였거나 해당 장비에서 나올 수 없는 옵션입니다."; }
            else{rep += "\n해당 수치 " + abilval2 + "%가 해당 등급 [" + getCubeabilityR(abilind2) + "] 에서 나올 수 있는 수치를 초과하였거나 해당 장비에서 나올 수 없는 옵션입니다."; }
        
        if(finalrate3 == 0){
            if(abilind3 == 14){rep += "\n해당 수치 " + abilval3 + "초가 해당 등급 [" + getCubeabilityR(abilind3) + "] 에서 나올 수 있는 수치를 초과하였거나 해당 장비에서 나올 수 없는 옵션입니다.";}
            else{rep += "\n해당 수치 " + abilval3 + "%가 해당 등급 [" + getCubeabilityR(abilind3) + "] 에서 나올 수 있는 수치를 초과하였거나 해당 장비에서 나올 수 없는 옵션입니다."; }
            }
        }
    }
    else if(finalrate2 == 0){
        if(abilind2 == 14){rep += "해당 수치 " + abilval2 + "초가 해당 등급 [" + getCubeabilityR(abilind2) + "] 에서 나올 수 있는 수치를 초과하였거나 해당 장비에서 나올 수 없는 옵션입니다.";}
        else{rep += "해당 수치 " + abilval2 + "%가 해당 등급 [" + getCubeabilityR(abilind2) + "] 에서 나올 수 있는 수치를 초과하였거나 해당 장비에서 나올 수 없는 옵션입니다."; }
        
        if(finalrate3 == 0){
            if(abilind3 == 14){rep += "\n해당 수치 " + abilval3 + "초가 해당 등급 [" + getCubeabilityR(abilind3) + "] 에서 나올 수 있는 수치를 초과하였거나 해당 장비에서 나올 수 없는 옵션입니다.";}
            else{rep += "\n해당 수치 " + abilval3 + "%가 해당 등급 [" + getCubeabilityR(abilind3) + "] 에서 나올 수 있는 수치를 초과하였거나 해당 장비에서 나올 수 없는 옵션입니다.";}
        }
    }
    else if(finalrate3 == 0){
        if(abilind3 == 14){rep += "해당 수치 " + abilval3 + "초가 해당 등급 [" + getCubeabilityR(abilind3) + "] 에서 나올 수 있는 수치를 초과하였거나 해당 장비에서 나올 수 없는 옵션입니다.";}
        else{rep += "해당 수치 " + abilval3 + "%가 해당 등급 [" + getCubeabilityR(abilind3) + "] 에서 나올 수 있는 수치를 초과하였거나 해당 장비에서 나올 수 없는 옵션입니다.";}
    }
    else if(frate == 0){
        if(abilind == 14){rep += "해당 아이템 분류에서 [" + getCubeabilityR(abilind) + "] 능력 " + abilval +"초 와 [" + getCubeabilityR(abilind2)+ "] 능력 " + abilval2 + "% 와 [" + getCubeabilityR(abilind3) + "] 능력 " + abilval3 + "% 해당 세 수치가 동시에 나올 확률이 0으로 계산되었습니다. 확인 후 다시 입력해주십시오.";}
        else if(abilind2 == 14){rep += "해당 아이템 분류에서 [" + getCubeabilityR(abilind) + "] 능력 " + abilval +"% 와 [" + getCubeabilityR(abilind2)+ "] 능력 " + abilval2 + "초 와 [" + getCubeabilityR(abilind3) + "] 능력 " + abilval3 + "% 해당 세 수치가 동시에 나올 확률이 0으로 계산되었습니다. 확인 후 다시 입력해주십시오.";}
        else if(abilind3 == 14){rep += "해당 아이템 분류에서 [" + getCubeabilityR(abilind) + "] 능력 " + abilval +"% 와 [" + getCubeabilityR(abilind2)+ "] 능력 " + abilval2 + "% 와 [" + getCubeabilityR(abilind3) + "] 능력 " + abilval3 + "초 해당 세 수치가 동시에 나올 확률이 0으로 계산되었습니다. 확인 후 다시 입력해주십시오.";}
        else{rep += "해당 아이템 분류에서 [" + getCubeabilityR(abilind) + "] 능력 " + abilval +"% 와 [" + getCubeabilityR(abilind2)+ "] 능력 " + abilval2 + "% 와 [" + getCubeabilityR(abilind3) + "] 능력 " + abilval3 + "% 해당 세 수치가 동시에 나올 확률이 0으로 계산되었습니다. 확인 후 다시 입력해주십시오.";}
    }
    else{
        if(abilind == 14){
            rep += getCubeabilityR(abilind) + " " + abilval + "초 이상 확률은 " + finalrate1.toFixed(8) + "% 입니다.\n";
            rep += getCubeabilityR(abilind2) + " " + abilval2 + "% 이상 확률은 " + finalrate2.toFixed(8) + "% 입니다.\n";
            rep += getCubeabilityR(abilind3) + " " + abilval3 + "% 이상 확률은 " + finalrate3.toFixed(8) + "% 입니다.\n";
            rep += getCubeabilityR(abilind) + " " + abilval + "초 이상, " + getCubeabilityR(abilind2) + " " + abilval2 + "% 이상, " + getCubeabilityR(abilind3) + " " + abilval3 + "% 이상 동시에 뜰 확률은 " + frate + "% 입니다.\n";
            rep += "해당 옵션의 기댓값은 " + cubenum + "개 입니다.";
            rep += getCubeprice(cubename, cubenum);
        }
        else if(abilind2 == 14){
            rep += getCubeabilityR(abilind) + " " + abilval + "% 이상 확률은 " + finalrate1.toFixed(8) + "% 입니다.\n";
            rep += getCubeabilityR(abilind2) + " " + abilval2 + "초 이상 확률은 " + finalrate2.toFixed(8) + "% 입니다.\n";
            rep += getCubeabilityR(abilind3) + " " + abilval3 + "% 이상 확률은 " + finalrate3.toFixed(8) + "% 입니다.\n";
            rep += getCubeabilityR(abilind) + " " + abilval + "% 이상, " + getCubeabilityR(abilind2) + " " + abilval2 + "초 이상, " + getCubeabilityR(abilind3) + " " + abilval3 + "% 이상 동시에 뜰 확률은 " + frate + "% 입니다.\n";
            rep += "해당 옵션의 기댓값은 " + cubenum + "개 입니다.";
            rep += getCubeprice(cubename, cubenum);
        }
        else if(abilind3 == 14){
            rep += getCubeabilityR(abilind) + " " + abilval + "% 이상 확률은 " + finalrate1.toFixed(8) + "% 입니다.\n";
            rep += getCubeabilityR(abilind2) + " " + abilval2 + "% 이상 확률은 " + finalrate2.toFixed(8) + "% 입니다.\n";
            rep += getCubeabilityR(abilind3) + " " + abilval3 + "초 이상 확률은 " + finalrate3.toFixed(8) + "% 입니다.\n";
            rep += getCubeabilityR(abilind) + " " + abilval + "% 이상, " + getCubeabilityR(abilind2) + " " + abilval2 + "% 이상, " + getCubeabilityR(abilind3) + " " + abilval3 + "초 이상 동시에 뜰 확률은 " + frate + "% 입니다.\n";
            rep += "해당 옵션의 기댓값은 " + cubenum + "개 입니다.";
            rep += getCubeprice(cubename, cubenum);
        }
        else{
            rep += getCubeabilityR(abilind) + " " + abilval + "% 이상 확률은 " + finalrate1.toFixed(8) + "% 입니다.\n";
            rep += getCubeabilityR(abilind2) + " " + abilval2 + "% 이상 확률은 " + finalrate2.toFixed(8) + "% 입니다.\n";
            rep += getCubeabilityR(abilind3) + " " + abilval3 + "% 이상 확률은 " + finalrate3.toFixed(8) + "% 입니다.\n";
            rep += getCubeabilityR(abilind) + " " + abilval + "% 이상, " + getCubeabilityR(abilind2) + " " + abilval2 + "% 이상, " + getCubeabilityR(abilind3) + " " + abilval3 + "% 이상 동시에 뜰 확률은 " + frate + "% 입니다.\n";
            rep += "해당 옵션의 기댓값은 " + cubenum + "개 입니다.";
            rep += getCubeprice(cubename, cubenum);
        }
    }
    return rep;
}


function arrcopy(arr1, arr2){
    for(var i = 0; i < arr2.length; ++i){
        arr1.push(arr2[i]);
    }
}
function getCubeabilityR(abilind){
    ret = "";
    switch(abilind){
        case 0:
            ret = "STR";
            break;
        case 1:
            ret = "DEX";
            break;
        case 2:
            ret = "INT";
            break;
        case 3:
            ret = "LUK";
            break;
        case 4:
            ret = "보스 몬스터 공격 시 데미지";
            break;
        case 5:
            ret = "공격력";
            break;
        case 6:
            ret = "마력";
            break;
        case 7:
            ret = "몬스터 방어율 무시";
            break;
        case 8:
            ret = "크리티컬 데미지";
            break;
        case 9:
            ret = "올스탯";
            break;
        case 10:
            ret = "최대 HP";
            break;
        case 11:
            ret = "메소 획득량";
            break;
        case 12:
            ret = "아이템 드롭률";
            break;
        case 13:
            ret = "데미지";
            break;
        case 14:
            ret = "모든 스킬의 재사용 대기시간 감소 (10초 이하는 5%감소, 5초 미만으로 감소 불가)";
            break;
    }
    return ret;
}
function getabilityCode(poten){
    ret = -1;
    switch(poten){
        case "STR : +12%":
            ret = 0;
            break;
        case "STR : +9%":
            ret = 1;
            break;
        case "STR : +6%":
            ret = 2;
            break;
        case "STR : +3%":
            ret = 3;
            break;
        case "DEX : +12%":
            ret = 4;
            break;
        case "DEX : +9%":
            ret = 5;
            break;
        case "DEX : +6%":
            ret = 6;
            break;
        case "DEX : +3%":
            ret = 7;
            break;
        case "INT : +12%":
            ret = 8;
            break;
        case "INT : +9%":
            ret = 9;
            break;
        case "INT : +6%":
            ret = 10;
            break;
        case "INT : +3%":
            ret = 11;
            break;
        case "LUK : +12%":
            ret = 12;
            break;
        case "LUK : +9%":
            ret = 13;
            break;
        case "LUK : +6%":
            ret = 14;
            break;
        case "LUK : +3%":
            ret = 15;
            break;
        case "보스 몬스터 공격 시 데미지 : +40%":
            ret = 16;
            break;
        case "보스 몬스터 공격 시 데미지 : +35%":
            ret = 17;
            break;
        case "보스 몬스터 공격 시 데미지 : +30%":
            ret = 18;
            break;
        case "공격력 : +12%":
            ret = 19;
            break;
        case "공격력 : +9%":
            ret = 20;
            break;
        case "공격력 : +6%":
            ret = 21;
            break;
        case "공격력 : +3%":
            ret = 22;
            break;
        case "마력 : +12%":
            ret = 23;
            break;
        case "마력 : +9%":
            ret = 24;
            break;
        case "마력 : +6%":
            ret = 25;
            break;
        case "마력 : +3%":
            ret = 26;
            break;
        case "몬스터 방어율 무시 : +40%":
            ret = 27;
            break;
        case "몬스터 방어율 무시 : +35%":
            ret = 28;
            break;
        case "몬스터 방어율 무시 : +30%":
            ret = 29;
            break;
        case "몬스터 방어율 무시 : +15%":
            ret = 30;
            break;
        case "크리티컬 데미지 : +8%":
            ret = 31;
            break;
        case "올스탯 : +9%":
            ret = 32;
            break;
        case "올스탯 : +6%":
            ret = 33;
            break;
        case "올스탯 : +3%":
            ret = 34;
            break;
        case "최대 HP : +12%":
            ret = 35;
            break;
        case "최대 HP : +9%":
            ret = 36;
            break;
        case "최대 HP : +6%":
            ret = 37;
            break;
        case "최대 HP : +3%":
            ret = 38;
            break;
        case "메소 획득량 : +20%":
            ret = 39;
            break;
        case "아이템 드롭률 : +20%":
            ret = 40;
            break;
        case "데미지 : +12%":
            ret = 41;
            break;
        case "데미지 : +9%":
            ret = 42;
            break;
        case "데미지 : +6%":
            ret = 43;
            break;
        case "데미지 : +3%":
            ret = 44;
            break;
        case "모든 스킬의 재사용 대기시간 : -2초(10초 이하는 10%감소, 5초 미만으로 감소 불가)":
        case "모든 스킬의 재사용 대기시간 : -2초(10초 이하는 10%감소 5초 미만으로 감소 불가)":
            ret = 45;
            break;
        case "모든 스킬의 재사용 대기시간 : -1초(10초 이하는 5%감소, 5초 미만으로 감소 불가)":
        case "모든 스킬의 재사용 대기시간 : -1초(10초 이하는 5%감소 5초 미만으로 감소 불가)":
            ret = 46;
            break;
        case "STR : +2%":
            ret = 47;
            break;
        case "STR : +4%":
            ret = 48;
            break;
        case "STR : +5%":
            ret = 49;
            break;
        case "STR : +7%":
            ret = 50;
            break;
        case "DEX : +2%":
            ret = 51;
            break;
        case "DEX : +4%":
            ret = 52;
            break;
        case "DEX : +5%":
            ret = 53;
            break;
        case "DEX : +7%":
            ret = 54;
            break;
        case "INT : +2%":
            ret = 55;
            break;
        case "INT : +4%":
            ret = 56;
            break;
        case "INT : +5%":
            ret = 57;
            break;
        case "INT : +7%":
            ret = 58;
            break;
        case "LUK : +2%":
            ret = 59;
            break;
        case "LUK : +4%":
            ret = 60;
            break;
        case "LUK : +5%":
            ret = 61;
            break;
        case "LUK : +7%":
            ret = 62;
            break;
        case "보스 몬스터 공격 시 데미지 : +12%":
            ret = 63;
            break;
        case "보스 몬스터 공격 시 데미지 : +18%":
            ret = 64;
            break;
        case "몬스터 방어율 무시 : +3%":
            ret = 65;
            break;
        case "몬스터 방어율 무시 : +4%":
            ret = 66;
            break;
        case "몬스터 방어율 무시 : +5%":
            ret = 67;
            break;
        case "크리티컬 데미지 : +3%":
            ret = 68;
            break;
        case "올스탯 : +2%":
            ret = 69;
            break;
        case "올스탯 : +4%":
            ret = 70;
            break;
        case "올스탯 : +5%":
            ret = 71;
            break;
        case "최대 HP : +2%":
            ret = 72;
            break;
        case "최대 HP : +5%":
            ret = 73;
            break;
        case "최대 HP : +7%":
            ret = 74;
            break;
        case "최대 HP : +10%":
            ret = 75;
            break;
    }
    return ret;
}
function getCubeprice(cubename, cubenum){
    crep = "";
    if(cubename == "red"){
        crep += "\n\n";
        crep += "레드큐브 낱개로 구매 시 예상 비용은 " + Jari(cubenum * pred) + "원 입니다.\n";
        crep += "레드 식스팩으로 구매 시 예상 비용은 " + Jari(cubenum * predsetsix) + "원 입니다.\n";
        crep += "레드 더블식스팩으로 구매 시 예상 비용은 " + Jari(cubenum * predsettwelve) + "원 입니다.\n";
        crep += "리부트 월드에서 구매 시 예상 비용은 " + Jari(cubenum * predreboot) + "메소 입니다.";
    }
    else if(cubename == "black"){
        crep += "\n\n";
        crep += "블랙큐브 낱개로 구매 시 예상 비용은 " + Jari(cubenum * pblack) + "원 입니다.\n";
        crep += "블랙 식스팩으로 구매 시 예상 비용은 " + Jari(cubenum * pblacksetsix) + "원 입니다.\n";
        crep += "블랙 더블식스팩으로 구매 시 예상 비용은 " + Jari(cubenum * pblacksettwelve) + "원 입니다.\n";
        crep += "리부트 월드에서 구매 시 예상 비용은 " + Jari(cubenum * pblackreboot) + "메소 입니다.";
    }
    else if(cubename == "addi"){
        crep += "\n\n";
        crep += "에디셔널 큐브 낱개로 구매 시 예상 비용은 " + Jari(cubenum * paddi) + "원 입니다.\n";
        crep += "실버 에디셔널 큐브 세트로 구매 시 예상 비용은 " + Jari(cubenum * paddisetfive) + "원 입니다.\n";
        crep += "골드 에디셔널 큐브 세트로 구매 시 예상 비용은 " + Jari(cubenum * paddisetten) + "원 입니다.";
    }
    return crep;
}
function Jari(price){
    var ret = "";
    if(price < 10000){
      ret = price + "";
    }
    else if(price < 100000000 && price >= 10000)
    {
      ret = parseInt(price / 10000) + "만 ";
      if(parseInt(price % 10000) > 0) { ret += parseInt(price % 10000);}
    }
    else if(price < 1000000000000 && price >= 100000000)
    {
      ret = parseInt(price / 100000000) + "억";
      if(parseInt((price % 100000000) / 10000) > 0){ ret += " " + parseInt((price % 100000000) / 10000) +  "만";};
      if(price % 10000 > 0) { ret += " " + price % 10000;}
    }
    else if(price < 10000000000000000 & price >= 1000000000000)
    {
      ret = parseInt(price / 1000000000000) + "조 " + parseInt((price % 1000000000000) / 100000000) + "억";
      if(parseInt((price % 100000000) / 10000) > 0){ ret += " " + parseInt((price % 100000000) / 10000) + "만";}
      if(price % 10000 > 0){ret += " " + price % 10000;};
    }
    else{
      ret = price;
    }
    return ret;
}

cb.web = "https://maplestory.nexon.com/Guide/OtherProbability/cube/";
cb.upred = [6.0, 1.8, 0.3];
cb.upblack = [15.0, 3.5, 1.2];
cb.upaddi = [4.7619, 1.9608, 0.6];
cb.upstrange = [0.9901];
cb.upmaster = [4.7619, 1.1858];
cb.upartisan = [7.9994, 1.6959, 0.1996];
var pred = 1200;
var predsetsix = 1000;
var predsettwelve = 900;
var predreboot = 12500000;
var pblack = 2200;
var pblacksetsix = 1833;
var pblacksettwelve = 1650;
var pblackreboot = 22600000;
var paddi = 2400;
var paddisetfive = 1980;
var paddisetten = 1890;

module.exports = cb;