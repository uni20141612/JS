const mem = {};

mem.getMemo = function(senderhash, sendername, msg){
    var rep = "";
    var memContent = msg.slice(4, msg.length);
    var memChk = msg.split(" ")[1];
    if(memChk == undefined){ rep = "메모를 입력해주세요.\n\n!메모 (내용) : 보마봇에게 메모를 입력합니다. 이전에 입력된 메모가 있으면 입력한 내용이 덮어쓰게됩니다."; }
    else if(memContent == "확인"){ rep = this.findMemo(senderhash); if(rep == "-"){ rep = "입력된 메모가 없습니다."; }}
    else if(memContent == "삭제"){ rep = this.eraseMemo(senderhash); }
    else{
        var dataM = DataBase.getDataBase("UserMemo.txt");
        if(this.findMemo(senderhash) == "-"){
            DataBase.appendDataBase("UserMemo.txt", "[" + senderhash + " * " + sendername + "] : " + memContent + "\n");
        }
        else{
            var memind = dataM.indexOf(senderhash);
            var tempmem = dataM.slice(memind-10, dataM.length).split("[")[1].split("\n")[0];
            tempmem = "[" + tempmem + "\n";
            dataM = dataM.replace(tempmem, "");
            DataBase.setDataBase("UserMemo.txt", dataM);
            rep += "이전에 입력한 메모 [" + tempmem.split(" : ")[1].split("\n")[0] + "] 에 추가됩니다.\n";
            DataBase.appendDataBase("UserMemo.txt", "[" + senderhash + " * " + sendername + "] : " + tempmem.split(" : ")[1].split("\n")[0] + " " + memContent + "\n");
        }
        rep += memContent + " >> 가 입력되었습니다.";
    }
    
    return rep;
};

mem.findMemo = function(senderhash){
    repF = "-";
    
    dataM = DataBase.getDataBase("UserMemo.txt");
    if(dataM.indexOf(senderhash) != -1){
        var dataM2 = dataM.split(senderhash)[1].split("\n")[0];
        var senderN = dataM2.split(" * ")[1].split("]")[0];
        var senderC = dataM2.split("] : ")[1].split("\n")[0];
        repF = senderN + " 님께서 남겨주신 메모는 [" + senderC + "] 입니다.";
    }
    
    return repF;
};

mem.eraseMemo = function(senderhash){
    repE = "";

    if(this.findMemo(senderhash) != "-"){
        memind = dataM.indexOf(senderhash);
        var tempmem = dataM.slice(memind-10, dataM.length).split("[")[1].split("\n")[0];
        tempmem = "[" + tempmem + "\n";
        dataM = dataM.replace(tempmem, "");
        DataBase.setDataBase("UserMemo.txt", dataM);
        repE += "이전에 입력한 메모 [" + tempmem.split(" : ")[1].split("\n")[0] + "] 이(가) 삭제되었습니다.";
    }
    else{
        repE += "이전에 입력한 메모이 검색되지 않았습니다. (프로필 사진이 변경되었거나 오류가 발생하였습니다.)";
    }

    return repE;
};

mem.printMemo = function(){
    repP = "보마봇 유저 메모\n\n";
    
    dataM = DataBase.getDataBase("UserMemo.txt");
    for(var j = 1; j < dataM.split("* ").length; ++j){
        repP += "[";
        repP += dataM.split("* ")[j].split("\n")[0];
        repP += "\n";
    }
    return repP;
};

module.exports = mem;