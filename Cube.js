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
        case "레전드리":
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
        default:
            ret = -1;
            break;
    }
    return ret;
}
cb.getCuberateOneabil = function (abilind, abilval, p1, p2, p3, r1, r2, r3){
    var rep = "";
    var a = 0, b = 0, c = 0, tempcomp = 0, temprate = 1.0, finalrate = 0.0;
    var str = 0, dex = 0, ints = 0, luk = 0, bossa = 0, atk = 0, mag = 0, defig = 0, cridam = 0, alls = 0, hps = 0, mesos = 0, items = 0;

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
                str = 0, dex = 0, ints = 0, luk = 0, bossa = 0, atk = 0, mag = 0, defig = 0, cridam = 0, alls = 0, hps = 0, mesos = 0, items = 0;
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
                }

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

                if(tempcomp >= abilval){
                    temprate /= 10000;  //var trate = temprate.toFixed(6);   rep += tempcomp + " " + abilval + " " + abcode1 + " " + abcode2 + " " + abcode3 + " " + trate + "%\n";
                    finalrate += temprate;
                }                
            }
        }
    }
    var frate = finalrate.toFixed(8);
    if(finalrate == 0){rep += "해당 수치가 해당 등급 [" + getCubeabilityR(abilind) + "] 에서 나올 수 있는 수치를 초과하였거나 해당 장비에서 나올 수 없는 옵션입니다.";}
    else{rep += getCubeabilityR(abilind) + " " + abilval + "% 이상 확률은 " + frate + "% 입니다.";}
    return rep;
}
cb.getCuberateTwoabil = function (abilind, abilval, abilind2, abilval2, p1, p2, p3, r1, r2, r3){
    var rep = "";
    var a = 0, b = 0, c = 0, tempcomp = 0, tempcomp2 = 0, temprate = 1.0, finalrate1 = 0.0, finalrate2 = 0.0, finalrate = 0.0;
    var str = 0, dex = 0, ints = 0, luk = 0, bossa = 0, atk = 0, mag = 0, defig = 0, cridam = 0, alls = 0, hps = 0, mesos = 0, items = 0;

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
                }
                temprate = 1.0;
                temprate *= parseFloat(r1[a]) * parseFloat(r2[b]) * parseFloat(r3[c]);
                temprate /= 10000; 
                str = 0, dex = 0, ints = 0, luk = 0, bossa = 0, atk = 0, mag = 0, defig = 0, cridam = 0, alls = 0, hps = 0, mesos = 0, items = 0;
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
    if(finalrate1 == 0){rep += "해당 수치가 해당 등급 [" + getCubeabilityR(abilind) + "] 에서 나올 수 있는 수치를 초과하였거나 해당 장비에서 나올 수 없는 옵션입니다."; if(finalrate2 == 0){rep += "\n해당 수치가 해당 등급 [" + getCubeabilityR(abilind2) + "] 에서 나올 수 있는 수치를 초과하였거나 해당 장비에서 나올 수 없는 옵션입니다.";}}
    else if(finalrate2 == 0){rep += "해당 수치가 해당 등급 [" + getCubeabilityR(abilind2) + "] 에서 나올 수 있는 수치를 초과하였거나 해당 장비에서 나올 수 없는 옵션입니다.";}
    else{
        rep += getCubeabilityR(abilind) + " " + abilval + "% 이상 확률은 " + finalrate1.toFixed(8) + "% 입니다.\n";
        rep += getCubeabilityR(abilind2) + " " + abilval2 + "% 이상 확률은 " + finalrate2.toFixed(8) + "% 입니다.\n";
        rep += getCubeabilityR(abilind) + " " + abilval + "% 이상, " + getCubeabilityR(abilind2) + " " + abilval2 + "% 이상 동시에 뜰 확률은 " + frate + "% 입니다.";
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
    }
    return ret;
}

cb.web = "https://maplestory.nexon.com/Guide/OtherProbability/cube/";
cb.upred = [6.0, 1.8, 0.3];
cb.upblack = [15.0, 3.5, 1.0];
cb.upaddi = [4.7619, 1.9608, 0.4975];
cb.upstrange = [0.9901];
cb.upmaster = [4.7619, 1.1858];
cb.upartisan = [7.9994, 1.6959, 0.1996];

module.exports = cb;