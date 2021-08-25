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
        case "레어":
        case "ㄹㅇ":
            rep = 0;
            break;
        case "에픽":
        case "에":
        case "ㅇㅍ":
            rep = 1;
            break;
        case "유니크":
        case "유닠":
        case "유닉":
        case "유":
        case "ㅇㄴㅋ":
            rep = 2;
            break;
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


function arrcopy(arr1, arr2){
    for(var i = 0; i < arr2.length; ++i){
        arr1.push(arr2[i]);
    }
}

cb.web = "https://maplestory.nexon.com/Guide/OtherProbability/cube/";
cb.upred = [6.0, 1.8, 0.3];
cb.upblack = [15.0, 3.5, 1.0];
cb.upaddi = [4.7619, 1.9608, 0.4975];
cb.upstrange = [0.9901];
cb.upmaster = [4.7619, 1.1858];
cb.upartisan = [7.9994, 1.6959, 0.1996];

module.exports = cb;