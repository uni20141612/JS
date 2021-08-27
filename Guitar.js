const gt = {};

gt.getLadder = function (msg){
    var ladderrep = "";
    var laddercnt = msg.split(" ").length;
    var ladderarr = [];
    for(i = 1; i < laddercnt; ++i){
      var ladderword = msg.split(" ")[i];
      var ladderint = getRandomInt(0, 1000000);
      var laddertemp = { words : ladderword, ints : ladderint };
      ladderarr.push(laddertemp);
    }
    ladderarr.sort(ladderComp);
    for(i = 0; i < ladderarr.length; ++i){ 
      ladderrep += i + 1;
      ladderrep += "등 : ";
      ladderrep += ladderarr[i].words;
      ladderrep += "\n";
    }
    ladderrep = ladderrep.slice(0, ladderrep.length - 1);
    return ladderrep;
};
gt.getHangang = function (river){    
    var rep = "";
    var dataR1 = river.indexOf("p");
    river = river.slice(dataR1+4, river.length);
    var dataR2 = river.indexOf("\"");
    var timeR = river.slice(dataR2, river.length);
    river = river.slice(0, dataR2);
    var dataR3 = timeR.indexOf("e");
    timeR = timeR.slice(dataR3 + 4, timeR.length-41);
    rep = timeR + " 기준 " + river + " °C";
    return rep;
};
gt.getCodi = function (codi){
    rep = "";
    var dataMoja = codi.split("모자</span>")[1].split(">")[1].split("</span")[0];
    var dataHair = codi.split("헤어</span>")[1].split(">")[1].split("</span")[0];
    var dataFace = codi.split("성형</span>")[1].split(">")[1].split("</span")[0];
    var dataTshirt = codi.split("상의</span>")[1].split(">")[1].split("</span")[0];
    var dataPants = codi.split("하의</span>")[1].split(">")[1].split("</span")[0];
    var dataShoe = codi.split("신발</span>")[1].split(">")[1].split("</span")[0];
    var dataWeapon = codi.split("무기</span>")[1].split(">")[1].split("</span")[0];

    rep = "모자: " + dataMoja + "\n헤어: " + dataHair + "\n성형: " + dataFace + "\n상의: " + dataTshirt + "\n하의: " + dataPants + "\n신발: " + dataShoe + "\n무기: " + dataWeapon;
    return rep;
};
gt.defenseRate = function (msg){
    var mobdef = msg.split(" ")[1];
    var curdef = msg.split(" ")[2];
    var curdef2 = (curdef / 1).toFixed(2);
    var defleng = msg.split(" ").length;
  
    var sumDef = "총 방무 : ";
    var defRes = "방어율 " + mobdef + "%인 몬스터에게 예상 딜량 : "; 
  
    if(defleng == 3){
      sumDef += curdef2 + "%\n";
      var deal = (100 - (mobdef * (100 - curdef) / 100)).toFixed(2);
      defRes += deal + "%";
    }
    else{
      var i;
      for(i = 3; i < defleng; i++){
        var defs = msg.split(" ")[i];
        var tempdef1 = 100 - curdef;
        var tempdef2 = defs / 100;
        var tempdef3 = tempdef1 * tempdef2;
        curdef = parseFloat(curdef) + tempdef3;
      }
      var curdef4 = (curdef / 1).toFixed(2);
      sumDef += curdef4 + "%\n";
      var deals = (100 - (mobdef * (100 - curdef) / 100)).toFixed(2);
      defRes += deals + "%";
    }
    return (sumDef + defRes);
};
gt.getDefense = function (mobdef, mydef, msg){
    rep = "";
    if(mobdef == undefined){
        rep = "몬스터 방어율을 입력해주세요.\n\n!방무 (몬스터 방어율) (현재 방어율) (추가 방어율1) (추가방어율2) ... : 총 방어율과 예상 딜량을 계산하여 보여줍니다.";
    }
    else if(mobdef != undefined && mydef == undefined){
      rep = "현재 방어율을 입력해주세요.\n\n!방무 (몬스터 방어율) (현재 방어율) (추가 방어율1) (추가방어율2) ... : 총 방어율과 예상 딜량을 계산하여 보여줍니다.";
    }
    else if(mydef < 0){
      rep = "현재 방어율은 음수가 될 수 없습니다.";
    }
    else{
      var deflen = msg.split(" ").length;
      var chkN = false;
      for(var i = 1; i < deflen; ++i){
        if(isNaN(msg.split(" ")[i])){
          chkN = true;
        }
      }
      if(chkN){
        rep = "숫자를 입력해주세요.";
      }
      else{
        var defResult = this.defenseRate(msg);
        rep = defResult;
      }
    }
    return rep;
};
gt.getDice = function (){
    rep = "";
    var sumStat = 9;
    var STR = 4;
    var ran = getRandomInt(0, sumStat + 1);
    STR += ran;
    sumStat -= ran;
    ran = getRandomInt(0, sumStat + 1);
    var DEX = 4;
    DEX += ran;
    sumStat -= ran;
    ran = getRandomInt(0, sumStat + 1);
    var INT = 4;
    INT += ran;
    sumStat -= ran;
    var LUK = 4;
    LUK += sumStat;

    rep = "\n\nSTR : " + STR + "\nDEX : " + DEX + "\nINT : " + INT + "\nLUK : " + LUK;
    return rep;
}
gt.getUpdate = function (mapleHome, dataUP){
    rep = "";
    var dataUP2 = dataUP.split("<!-- notice ul str -->")[1].split("</span>")[0];
    var dataUP3 = dataUP2.split("<a href=\"")[1].split("\">")[0];
    var dataUP4 = dataUP2.split("<span>")[1];

    rep = dataUP4 + "\n\n" + mapleHome + dataUP3;
    return rep;
};
gt.getLol = function (lol, nick){    
    rep = "";
    var lolrank = "";
    if(lol.indexOf("TierRankInfo") == -1){
        rep = "그런 닉네임의 롤 아이디는 존재하지 않습니다.";
      }
    else{
        var dataL = lol.split("TierRankInfo\">")[1].split("sub-tier")[0];
      
        if(dataL.indexOf("TierRank unranked") != -1){
          lolrank = "언랭";
        }
        else{
          var dataL2 = dataL.split("TierRank\">")[1].split("</div>")[0];
          lolrank = dataL2.replace(/ /g, "").slice(0, lolrank.length - 1);
          lolrank = getTier(lolrank);
        }

        rep = "그래서 " + nick + " 님 티어는\n\n" + lolrank;
    }
    return rep;
};

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //최댓값은 제외, 최솟값은 포함
};
function getTier(lolrank){
    var tiernum = lolrank.slice(-1);
    var tiername = lolrank.slice(0, lolrank.length - 1);
    tiername = tiername.slice(1);
    var tierHan = "";
    switch(tiername){
      case "Bronze":
        tierHan = "브론즈 ";
        break;
      case "Silver":
        tierHan = "실버 ";
        break;
      case "Gold":
        tierHan = "골드 ";
        break;
      case "Platinum":
        tierHan = "플래티넘 ";
        break;  
      case "Diamond":
        tierHan = "다이아몬드 ";
        break;
      case "Maste":
        tierHan = "마스터 ";
        tiernum = "";
        break;    
      case "Grandmaste":
        tierHan = "그랜드마스터 ";
        tiernum = "";
        break;
      case "Challenge":
        tierHan = "챌린저 ";
        tiernum = "";
        break;
      default:
        tierHan = "오류 ";
        break;
    }
    tierHan = tierHan + tiernum;
    return tierHan;
}
module.exports = gt;