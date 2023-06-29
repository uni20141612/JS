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
        case "눈을뜬실험실오디움":
        case "오디움":
        case "어디움":
        case "9":
            ret = 8;
            break;
        case "카탈리스트":
        case "카탈":
        case "11":
            ret = 9;
            break;
        case "죄인들의낙원도원경":
        case "도원경":
        case "10":
            ret = 10;
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
        case 8:
            rep = "어센틱심볼 : 오디움";
            break;
        case 10:
            rep = "어센틱심볼 : 도원경";
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
            rep = "세르니움 조사로 일일 최대 20개";
            break;
        case 7:
            rep = "호텔 아르크스 주변 청소로 일일 최대 10개";
            break;
        case 8:
            rep = "오디움 일대 탐사로 일일 최대 10개";
            break;
        case 10:
            rep = "도원경 오염 정화로 일일 최대 10개";
            break;
    }
    return rep;
};
sb.getSymbolspecial = function(sbind){
    var rep = "";
    switch(sbind){
        case 0:
            rep = "에르다 스펙트럼(3회)으로 주간 최대 45개";
            break;
        case 1:
            rep = "배고픈 무토(3회)로 주간 최대 45개";
            break;
        case 2:
            rep = "미드나잇 체이서(3회)로 주간 최대 45개";
            break;
        case 3:
            rep = "스피릿 세이비어(3회)로 주간 최대 45개";
            break;
        case 4:
            rep = "엔하임 디펜스(3회)로 주간 최대 45개";
            break;
        case 5:
            rep = "프로텍트 에스페라(3회)로 주간 최대 45개";
            break;
        case 6:
            rep = "-";
            break;
        case 7:
            rep = "부가퀘스트 미출시";
            break;
        case 8:
            rep = "부가퀘스트 미출시";
            break;
        case 10:
            rep = "부가퀘스트 미출시";
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
        case 8:
            rep = "https://i.imgur.com/1IMJmqA.png";
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
            meso = getsbCCmeso(level);
            break;
        case 2:
            meso = getsbRHmeso(level);
            break;
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
        case 8:
            meso = getodimeso(level);
            break;
        case 10:
            meso = getdomeso(level);
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
            meso = getsbcumulCCmeso(level);
            break;
        case 2:
            meso = getsbcumulRHmeso(level);
            break;
        case 3:
            meso = getsbcumulACmeso(level);
            break;
        case 4:
            meso = getsbcumulMRmeso(level);
            break;
        case 5:
            meso = getsbcumulEPmeso(level);
            break;
        case 6:
            meso = getsncumulmeso(level);
            break;
        case 7:
            meso = getarcumulmeso(level);
            break;
        case 8:
            meso = getodicumulmeso(level);
            break;
        case 10:
            meso = getdocumulmeso(level);
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
        case 8:
        case 10:
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
        case 8:
        case 10:
            exp = 4565 - getascumulexp(level);
    }
    return exp;
};
sb.getSymbolcatal1 = function(level, exp){
    var ret = 0;
    var catal = getsbcumulexp(level) + parseInt(exp);
    ret = Math.round(catal*0.8);
    var catlvl = 0;
    for(var i = 2; i < 20; ++i){
        var a = getsbcumulexp(i);
        var b = getsbcumulexp(i+1);
        if(ret >= a && ret < b){
            catlvl = i;
            break;
        }
    }
    ret = catlvl;
    return ret;
}
sb.getSymbolcatal2 = function(level, exp){
    var ret = 0;
    var catal = getsbcumulexp(level) + parseInt(exp);
    ret = Math.round(catal*0.8);
    var catlvl = 0;
    for(var i = 2; i < 20; ++i){
        var a = getsbcumulexp(i);
        var b = getsbcumulexp(i+1);
        if(ret >= a && ret < b){
            catlvl = i;
            break;
        }
    }
    ret = ret - getsbcumulexp(catlvl);
    return ret;
}

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
    ms = 0.1*(Math.pow(lvl,3)) + 8*(Math.pow(lvl,2)) + 1.1*lvl + 88;
    msi = parseInt(ms);
    msi = msi * 10000;
    // return (3110000 + 3960000*lvl);    
    return msi;
}
function getsbcumulYRmeso(lvl){
    var sbmesoy = [];
    for(var i = 1; i < lvl; ++i){
        var tempmesoy = getsbYRmeso(i);
        sbmesoy.push(tempmesoy);
    }
    return 252470000 - cumulate(sbmesoy, lvl-2);
}
function getsbCCmeso(lvl){
    ms = 0.1*(Math.pow(lvl,3)) + 10*(Math.pow(lvl,2)) + 1.1*lvl + 110;
    msi = parseInt(ms);
    msi = msi * 10000;
    // return (6220000 + 4620000*lvl);    
    return msi;
}
function getsbcumulCCmeso(lvl){
    var sbmesoc = [];
    for(var i = 1; i < lvl; ++i){
        var tempmesoc = getsbCCmeso(i);
        sbmesoc.push(tempmesoc);
    }
    return 306050000 - cumulate(sbmesoc, lvl-2);
}
function getsbRHmeso(lvl){
    ms = 0.1*(Math.pow(lvl,3)) + 12*(Math.pow(lvl,2)) + 1.1*lvl + 132;
    msi = parseInt(ms);
    msi = msi * 10000;
    // return (9330000 + 5280000*lvl);    
    return msi;
}
function getsbcumulRHmeso(lvl){
    var sbmesor = [];
    for(var i = 1; i < lvl; ++i){
        var tempmesor = getsbRHmeso(i);
        sbmesor.push(tempmesor);
    }
    return 359600000 - cumulate(sbmesor, lvl-2);
}
function getsbACmeso(lvl){
    ms = 0.1*(Math.pow(lvl,3)) + 14*(Math.pow(lvl,2)) + 1.1*lvl + 154;
    msi = parseInt(ms);
    msi = msi * 10000;
    // return (9330000 + 5280000*lvl);    
    return msi;
}
function getsbcumulACmeso(lvl){
    var sbmesor = [];
    for(var i = 1; i < lvl; ++i){
        var tempmesor = getsbACmeso(i);
        sbmesor.push(tempmesor);
    }
    return 413210000 - cumulate(sbmesor, lvl-2);
}
function getsbMRmeso(lvl){
    ms = 0.1*(Math.pow(lvl,3)) + 16*(Math.pow(lvl,2)) + 1.1*lvl + 176;
    msi = parseInt(ms);
    msi = msi * 10000;
    // return (9330000 + 5280000*lvl);    
    return msi;
}
function getsbcumulMRmeso(lvl){
    var sbmesor = [];
    for(var i = 1; i < lvl; ++i){
        var tempmesor = getsbMRmeso(i);
        sbmesor.push(tempmesor);
    }
    return 466790000 - cumulate(sbmesor, lvl-2);
}
function getsbEPmeso(lvl){
    ms = 0.1*(Math.pow(lvl,3)) + 18*(Math.pow(lvl,2)) + 1.1*lvl + 198;
    msi = parseInt(ms);
    msi = msi * 10000;
    // return (9330000 + 5280000*lvl);    
    return msi;
}
function getsbcumulEPmeso(lvl){
    var sbmesor = [];
    for(var i = 1; i < lvl; ++i){
        var tempmesor = getsbEPmeso(i);
        sbmesor.push(tempmesor);
    }
    return 520370000 - cumulate(sbmesor, lvl-2);
}
function getsbmeso(lvl){
    ms = 0.1*(Math.pow(lvl,3)) + 14*(Math.pow(lvl,2)) + 1.1*lvl + 154;
    msi = parseInt(ms);
    msi = msi * 10000;
    // return (11196000 + 5940000*lvl);
    return msi;
}
function getsbcumulmeso(lvl){
    var sbmeso = [];
    for(i = 1; i < lvl; ++i){
        var tempmeso = getsbmeso(i);
        sbmeso.push(tempmeso);
    }
    return 413210000 - cumulate(sbmeso, lvl-2);
}
function getsnmeso(lvl){
    ms = -5.4*(Math.pow(lvl,3)) + 106.8*(Math.pow(lvl,2)) + 264*lvl;
    msi = parseInt(ms);
    msi = msi * 100000;
    // return (96900000 + 88500000*lvl);
    return msi;
}
function getsncumulmeso(lvl){
    var snmeso = [];
    for(i = 1; i < lvl; ++i){
        var tempsn = getsnmeso(i);
        snmeso.push(tempsn);
    }
    return 3930100000 - cumulate(snmeso, lvl-2);
}
function getarmeso(lvl){
    ms = -5.4*(Math.pow(lvl,3)) + 123*(Math.pow(lvl,2)) + 300*lvl;
    msi = parseInt(ms);
    msi = msi * 100000;
    // return (106600000 + 97300000*lvl);
    return msi;
}
function getarcumulmeso(lvl){
    var armeso = [];
    for(i = 1; i < lvl; ++i){
        var tempar = getarmeso(i);
        armeso.push(tempar);
    }
    return 4751600000 - cumulate(armeso, lvl-2);
}
function getodimeso(lvl){
    ms = -5.4*(Math.pow(lvl,3)) + 139.2*(Math.pow(lvl,2)) + 336*lvl;
    msi = parseInt(ms);
    msi = msi * 100000;
    // return (117400000 + 107100000*lvl);
    return msi;
}
function getodicumulmeso(lvl){
    var odimeso = [];
    for(i = 1; i < lvl; ++i){
        var tempodi = getodimeso(i);
        odimeso.push(tempodi);
    }
    return 5573300000 - cumulate(odimeso, lvl-2);
}
function getdomeso(lvl){
    ms = -5.4*(Math.pow(lvl,3)) + 139.2*(Math.pow(lvl,2)) + 336*lvl;
    msi = parseInt(ms);
    msi = msi * 100000;
    // return (117400000 + 107100000*lvl);
    return msi;
}
function getdocumulmeso(lvl){
    var domeso = [];
    for(i = 1; i < lvl; ++i){
        var tempodi = getodimeso(i);
        domeso.push(tempodi);
    }
    return 5573300000 - cumulate(domeso, lvl-2);
}
function cumulate(arr, ind) {
    var ret = 0;
    for(i = 0; i < ind+1; ++i){
      ret += arr[i];
    }
    return ret;
}

module.exports = sb;