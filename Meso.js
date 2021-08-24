const ms = {};

ms.getServer = function (servername){
    var ret = -1;
    switch(servername){
        case "스카니아":
        case "스카":
            ret = 0;
            break;
        case "베라":
            ret = 1;
            break;
        case "루나":
            ret = 2;
            break;
        case "제니스":
            ret = 3;
            break;
        case "크로아":
            ret = 4;
            break;
        case "유니온":
            ret = 5;
            break;
        case "엘리시움":
        case "엘슘":
            ret = 6;
            break;
        case "이노시스":
        case "이노":
            ret = 7;
            break;
        case "레드":
            ret = 8;
            break;
        case "오로라":
            ret = 9;
            break;
        case "아케인":
            ret = 10;
            break;
        case "노바":
            ret = 11;
            break;
        case "평균":
            ret = 12;
            break;
        case "리부트":
        case "리붙":
        case "리부띠":
        case "리부트2":
            ret = 99;
            break;
        default:
            ret = -1;
            break;
    }
    return ret;
};
ms.getServericon = function (ind){
    var rep = "";
    switch(ind){
        case 0:
            rep = "https://i.imgur.com/QcSFBvI.png";
            break;
        case 1:
            rep = "https://i.imgur.com/e7PLky3.png";
            break;
        case 2:
            rep = "https://i.imgur.com/QXIx8GE.png";
            break;
        case 3:
            rep = "https://i.imgur.com/WiXXTHK.png";
            break;
        case 4:
            rep = "https://i.imgur.com/TY6POAy.png";
            break;
        case 5:
            rep = "https://i.imgur.com/CJ3q3uu.png";
            break;
        case 6:
            rep = "https://i.imgur.com/ASCQrFo.png";
            break;
        case 7:
            rep = "https://i.imgur.com/9yQcUcX.png";
            break;
        case 8:
            rep = "https://i.imgur.com/R6U9f7O.png";
            break;
        case 9:
            rep = "https://i.imgur.com/42Cyqtp.png";
            break;
        case 10:
            rep = "https://i.imgur.com/nnaVRRW.png";
            break;
        case 11:
            rep = "https://i.imgur.com/fCpa53u.png";
            break;
    }
    return rep;
}

module.exports = ms;