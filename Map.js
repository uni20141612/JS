const map = {};

map.getMap = function(msg){
    rep = "";
    var ismob = msg.split(" ")[0];
    if(ismob == "!마릿수" || ismob == "!몹젠"){
        var mapN = msg.split(" ")[1];
        if(mapN == undefined){ rep = "마릿수를 알고싶은 맵 이름을 입력하세요.\n\n목록 : 아케인리버 지역, 세르니움(전/후)"; }
        else{
            var mapC = this.getMapcode(mapN);
            if(mapC == -1){ rep = mapN + " >> 목록에 없는 맵입니다. 확인 후 다시 입력해주세요."; }
            else{
                rep = "*" + this.getMapname(mapC) + "*" + this.getMapMob(mapC);
            }
        }
    }
    return rep;
};
map.getMapcode = function(mapname){
    var ret = -1;
    switch(mapname){
        case "소멸의 여로":
        case "소멸의여로":
        case "여로":
        case "소멸":
            ret = 0;
            break;
        case "리버스 시티":
        case "리버스시티":
        case "리버스":
            ret = 1;
            break;
        case "츄츄 아일랜드":
        case "츄츄아일랜드":
        case "츄츄":
            ret = 2;
            break;
        case "얌얌 아일랜드":
        case "얌얌아일랜드":
        case "얌얌":
            ret = 3;
            break;
        case "레헬른":
        case "레헬":
            ret = 4;
            break;
        case "아르카나":
        case "알카":
            ret = 5;
            break;
        case "모라스":
            ret = 6;
            break;
        case "에스페라":
        case "에페":
            ret = 7;
            break;
        case "셀라스":
            ret = 8;
            break;
        case "문브릿지":
        case "문브":
            ret = 9;
            break;
        case "고통의 미궁":
        case "고통의미궁":
        case "미궁":
            ret = 10;
            break;
        case "리멘":
            ret = 11;
            break;
        case "세르니움(전)":
        case "세르니움":
        case "전르니움":
        case "세전":
            ret = 12;
            break;
        case "세르니움(후)":
        case "불타는 세르니움":
        case "불타는세르니움":
        case "불르니움":
        case "후르니움":
        case "세후":
            ret = 13;
            break;
    }
    return ret;
};
map.getMapname = function(mapcode){
    var rep = "";
    switch(mapcode){
        case 0:
            rep = "소멸의 여로";
            break;
        case 1:
            rep = "리버스 시티";
            break;
        case 2:
            rep = "츄츄 아일랜드";
            break;
        case 3:
            rep = "얌얌 아일랜드";
            break;
        case 4:
            rep = "꿈의 도시 레헬른";
            break;
        case 5:
            rep = "신비의 숲 아르카나";
            break;
        case 6:
            rep = "기억의 늪 모라스";
            break;
        case 7:
            rep = "태초의 바다 에스페라";
            break;
        case 8:
            rep = "셀라스, 별이 잠긴 곳";
            break;
        case 9:
            rep = "문브릿지";
            break;
        case 10:
            rep = "고통의 미궁";
            break;
        case 11:
            rep = "리멘";
            break;
        case 12:
            rep = "신의 도시 세르니움";
            break;
        case 13:
            rep = "불타는 세르니움";
            break;
        case 14:
            rep = "";
            break;
    }
    return rep;
};
map.getMapMob = function(mapcode){
    rep = "";
    switch(mapcode){
        case 0:
            rep = "https://i.imgur.com/YkaxUMu.png";
            break;
        case 1:
            rep = "https://i.imgur.com/63puePv.png";
            break;
        case 2:
            rep = "https://i.imgur.com/udNBh05.png";
            break;
        case 3:
            rep = "https://i.imgur.com/Puffcc6.png";
            break;
        case 4:
            rep = "https://i.imgur.com/nw70xKM.png";
            break;
        case 5:
            rep = "https://i.imgur.com/XNVn5VI.png";
            break;
        case 6:
            rep = "https://i.imgur.com/mCDanfi.png";
            break;
        case 7:
            rep = "https://i.imgur.com/A1HQJ67.png";
            break;
        case 8:
            rep = "https://i.imgur.com/MwZxJOK.png";
            break;
        case 9:
            rep = "https://i.imgur.com/eCMwL3m.png";
            break;
        case 10:
            rep = "https://i.imgur.com/BXTXJoy.png";
            break;
        case 11:
            rep = "https://i.imgur.com/k8zNnlV.png";
            break;
        case 12:
            rep = "https://i.imgur.com/oWANOTr.png";
            break;
        case 13:
            rep = "https://i.imgur.com/AL6NSCk.png";
            break;
    }
    return rep;
}

module.exports = map;