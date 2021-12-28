const sug = {};

sug.getSuggest = function(senderhash, sendername, msg){
    var rep = "";
    var sugContent = msg.slice(4, msg.length);
    var sugChk = msg.split(" ")[1];
    if(sugChk == undefined){ rep = "건의사항을 입력해주세요.\n\n!건의 (내용) : 보마봇에게 건의사항을 입력합니다. 이전에 입력된 건의사항이 있으면 입력한 내용이 덮어쓰게됩니다. 해당 건의사항은 개발자가 간간히 보게 될수도...?"; }
    else if(sugContent == "확인"){ rep = this.findSuggest(senderhash); if(rep == "-"){ rep = "입력된 건의사항이 없습니다."; }}
    else if(sugContent == "삭제"){ rep = this.eraseSuggest(senderhash); }
    else{
        var dataS = DataBase.getDataBase("UserSuggest.txt");
        if(this.findSuggest(senderhash) == "-"){
            DataBase.appendDataBase("UserSuggest.txt", "[" + senderhash + " * " + sendername + "] : " + sugContent + "\n");
        }
        else{
            var sugind = dataS.indexOf(senderhash);
            var tempSug = dataS.slice(sugind-10, dataS.length).split("[")[1].split("\n")[0];
            tempSug = "[" + tempSug + "\n";
            dataS = dataS.replace(tempSug, "");
            DataBase.setDataBase("UserSuggest.txt", dataS);
            rep += "이전에 입력한 건의사항 [" + tempSug.split(" : ")[1].split("\n")[0] + "] 이(가) 삭제됩니다.\n";
            DataBase.appendDataBase("UserSuggest.txt", "[" + senderhash + " * " + sendername + "] : " + sugContent + "\n");
        }
        rep += sugContent + " >> 가 입력되었습니다. 감사합니다.";
    }
    
    return rep;
};

sug.findSuggest = function(senderhash){
    repF = "-";
    
    dataS = DataBase.getDataBase("UserSuggest.txt");
    if(dataS.indexOf(senderhash) != -1){
        var dataS2 = dataS.split(senderhash)[1].split("\n")[0];
        var senderN = dataS2.split(" * ")[1].split("]")[0];
        var senderC = dataS2.split("] : ")[1].split("\n")[0];
        repF = senderN + " 님께서 남겨주신 건의사항은 [" + senderC + "] 입니다.";
    }
    
    return repF;
};

sug.eraseSuggest = function(senderhash){
    repE = "";

    if(this.findSuggest(senderhash) != "-"){
        sugind = dataS.indexOf(senderhash);
        var tempSug = dataS.slice(sugind-10, dataS.length).split("[")[1].split("\n")[0];
        tempSug = "[" + tempSug + "\n";
        dataS = dataS.replace(tempSug, "");
        DataBase.setDataBase("UserSuggest.txt", dataS);
        repE += "이전에 입력한 건의사항 [" + tempSug.split(" : ")[1].split("\n")[0] + "] 이(가) 삭제되었습니다.";
    }
    else{
        repE += "이전에 입력한 건의사항이 검색되지 않았습니다. (프로필 사진이 변경되었거나 오류가 발생하였습니다.)";
    }

    return repE;
};

sug.printSuggest = function(){
    repP = "보마봇 유저 건의사항\n\n";
    
    dataS = DataBase.getDataBase("UserSuggest.txt");
    for(var j = 1; j < dataS.split("* ").length; ++j){
        repP += "[";
        repP += dataS.split("* ")[j].split("\n")[0];
        repP += "\n";
    }
    return repP;
};

module.exports = sug;