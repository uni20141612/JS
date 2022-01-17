const sb = {};

sb.getSymbol = function(sbname){
    var ret = -1;
    switch(sbname){
        case "소멸의여로":
        case "소멸":
        case "여로":
        case "에르다스펙트럼":
        case "스펙트럼":
        case "1":
            ret = 0;
            break;
        case "츄츄아일랜드":
        case "츄츄":
        case "배고픈무토":
        case "무토":
        case "2":
            ret = 1;
            break;
        case "꿈의도시레헬른":
        case "레헬른":
        case "레헬":
        case "드림브레이커":
        case "드브":
        case "3":
            ret = 2;
            break;
        case "신비의숲아르카나":
        case "아르카나":
        case "알카":
        case "스피릿세이비어":
        case "스세":
        case "4":
            ret = 3;
            break;
        case "기억의늪모라스":
        case "모라스":
        case "엔하임디펜스":
        case "디펜스":
        case "5":
            ret = 4;
            break;
        case "태초의바다에스페라":
        case "에스페라":
        case "에페":
        case "프로텍트에스페라":
        case "프로텍트":
        case "6":
            ret = 5;
            break;
        case "신의도시세르니움":
        case "세르니움":
        case "세전":
        case "세후":
        case "7":
            ret = 6;
            break;
        case "호텔아르크스":
        case "아르크스":
        case "호텔":
        case "8":
            ret = 7;
            break;
        default:
            ret = -1;
            break;
    }
    return ret;
};
sb.getSymbolname = function(sbind){
    var rep = "";
    switch(sbind){
        case 0:
            rep = "아케인심볼 : 소멸의 여로";
            break;
        case 1:
            rep = "아케인심볼 : 츄츄 아일랜드";
            break;
        case 2:
            rep = "아케인심볼 : 레헬른";
            break;
        case 3:
            rep = "아케인심볼 : 아르카나";
            break;
        case 4:
            rep = "아케인심볼 : 모라스";
            break;
        case 5:
            rep = "아케인심볼 : 에스페라";
            break;
        case 6:
            rep = "어센틱심볼 : 세르니움";
            break;
        case 7:
            rep = "어센틱심볼 : 아르크스";
            break;
    }
    return rep;
};
sb.getSymboldaily = function(sbind){
    var rep = "";
    switch(sbind){
        case 0:
            rep = "NPC 로나: 일일 퀘스트(5개)로 일일 최대 8/16개(리버스)";
            break;
        case 1:
            rep = "NPC 마스터 핥: 일일 퀘스트(3개)로 일일 최대 4/8개(얌얌)";
            break;
        case 2:
            rep = "NPC 영감님: 일일 퀘스트(3개)로 일일 최대 8개";
            break;
        case 3:
            rep = "NPC 나무의 정령들: 일일 퀘스트(3개)로 일일 최대 8개";
            break;
        case 4:
            rep = "NPC 쟝: 일일 퀘스트(3개)로 일일 최대 8개";
            break;
        case 5:
            rep = "NPC 올리: 일일 퀘스트(3개)로 일일 최대 8개";
            break;
        case 6:
            rep = "세르니움 일일 퀘스트(1개)로 일일 최대 5개";
            break;
        case 7:
            rep = "호텔 아르크스 주변 청소(1개)로 일일 최대 5개";
            break;
    }
    return rep;
};
sb.getSymbolspecial = function(sbind){
    var rep = "";
    switch(sbind){
        case 0:
            rep = "에르다 스펙트럼(3회)으로 일일 최대 6개";
            break;
        case 1:
            rep = "배고픈 무토(어려움 기준,3회)로 일일 최대 15개";
            break;
        case 2:
            rep = "드림 브레이커(3회)로 일일 최대 17.67개";
            break;
        case 3:
            rep = "스피릿 세이비어(3회)로 일일 최대 10개";
            break;
        case 4:
            rep = "엔하임 디펜스(3회)로 일일 최대 6개";
            break;
        case 5:
            rep = "프로텍트 에스페라(3회)로 일일 최대 6개";
            break;
        case 6:
            rep = "불타는 세르니움 일일 퀘스트(1개)로 일일 최대 5개";
            break;
        case 7:
            rep = "미출시";
            break;
    }
    return rep;
};
sb.getSymbolimage = function(sbind){
    var rep = "";
    switch(sbind){
        case 0:
            rep = "https://i.imgur.com/lsBU1r0.png";
            break;
        case 1:
            rep = "https://i.imgur.com/WwkX8yb.png";
            break;
        case 2:
            rep = "https://i.imgur.com/564D9Ep.png";
            break;
        case 3:
            rep = "https://i.imgur.com/7Mz6aqS.png";
            break;
        case 4:
            rep = "https://i.imgur.com/rGFLE8j.png";
            break;
        case 5:
            rep = "https://i.imgur.com/kffH8vA.png";
            break;
        case 6:
            rep = "https://i.imgur.com/rXRzTve.png";
            break;
        case 7:
            rep = "https://i.imgur.com/KLszwKH.png";
            break;
    }
    return rep;
};
sb.getSymbolmeso = function(sbind, level){
    var meso = 0;
    switch(sbind){
        case 0:
            meso = getsbYRmeso(level);
            break;
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            meso = getsbmeso(level);
            break;
        case 6:
            meso = getsnmeso(level);
            break;
        case 7:
            meso = getarmeso(level);
            break;
    }
    return meso;
};
sb.getSymbolcumulmeso = function(sbind, level){
    var meso = 0;
    switch(sbind){
        case 0:
            meso = getsbcumulYRmeso(level);
            break;
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            meso = getsbcumulmeso(level);
            break;
        case 6:
            meso = getsncumulmeso(level);
            break;
        case 7:
            meso = getarcumulmeso(level);
            break;
    }
    return meso;
};
sb.getSymbolexp = function(sbind, level){
    var exp = 0;
    switch(sbind){
        case 0:
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            exp = getsbcumulexp2(level) - getsbcumulexp(level);
            break;
        case 6:
        case 7:
            exp = getascumulexp2(level) - getascumulexp(level);
            break;
    }
    return exp;
};
sb.getSymbolfinalexp = function(sbind, level){
    var exp = 0;
    switch(sbind){
        case 0:
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            exp = 2679 - getsbcumulexp(level);
            break;
        case 6:
        case 7:
            exp = 4565 - getascumulexp(level);
    }
    return exp;
};

function getsbexp(lvl){
    return (lvl * lvl + 11);
}
function getsbcumulexp(lvlc){
    if(lvlc == 1){return 0;}    
    var sbexp = [];
    for(var i = 1; i < lvlc; ++i){
        var tempexp = getsbexp(i);
        sbexp.push(tempexp);
    }
    return cumulate(sbexp, lvlc-2);
}
function getsbcumulexp2(lvlc){
    var sbexp = [];
    for(i = 1; i < lvlc+1; ++i){
        var tempexp = getsbexp(i);
        sbexp.push(tempexp);
    }
    return cumulate(sbexp, lvlc-1);
}
function getasexp(lvl){
    return ((9 * lvl * lvl) + (20 * lvl));
}
function getascumulexp(lvlc){
    if(lvlc == 1){return 0;}
    var asexp = [];
    for(i = 1; i < lvlc; ++i){
        var tempas = getasexp(i);
        asexp.push(tempas);
    }
    return cumulate(asexp, lvlc-2);
}
function getascumulexp2(lvlc){
    var asexp = [];
    for(i = 1; i < lvlc+1; ++i){
        var tempas = getasexp(i);
        asexp.push(tempas);
    }
    return cumulate(asexp, lvlc-1);
}
function getsbYRmeso(lvl){
    return (2370000 + 7130000*lvl);
}
function getsbcumulYRmeso(lvl){
    var sbmesoy = [];
    for(var i = 1; i < lvl; ++i){
        var tempmesoy = getsbYRmeso(i);
        sbmesoy.push(tempmesoy);
    }
    return 1399730000 - cumulate(sbmesoy, lvl-2);
}
function getsbmeso(lvl){
    return (12440000 + 6600000*lvl);
}
function getsbcumulmeso(lvl){
    var sbmeso = [];
    for(i = 1; i < lvl; ++i){
        var tempmeso = getsbmeso(i);
        sbmeso.push(tempmeso);
    }
    return 1490360000 - cumulate(sbmeso, lvl-2);
}
function getsnmeso(lvl){
    return (96900000 + 88500000*lvl);
}
function getsncumulmeso(lvl){
    var snmeso = [];
    for(i = 1; i < lvl; ++i){
        var tempsn = getsnmeso(i);
        snmeso.push(tempsn);
    }
    return 5836500000 - cumulate(snmeso, lvl-2);
}
function getarmeso(lvl){
    return (106600000 + 97300000*lvl);
}
function getarcumulmeso(lvl){
    var armeso = [];
    for(i = 1; i < lvl; ++i){
        var tempar = getarmeso(i);
        armeso.push(tempar);
    }
    return 6417500000 - cumulate(armeso, lvl-2);
}
function cumulate(arr, ind) {
    var ret = 0;
    for(i = 0; i < ind+1; ++i){
      ret += arr[i];
    }
    return ret;
}

module.exports = sb;