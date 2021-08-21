const ry = {};
ry.getroyal = function (n){
    royalRate = ry.getroyalRate();
    royalList = ry.getroyalList();
    var rep = "";
    var royalarr = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    var royalrand = 0;
    var ii = 0;
    while(ii < n){
      royalrand = getRandomInt(0,1000);
      if(royalrand < royalRate[0]){
        royalarr[0]++;
      }
      else{
        for(var j = 1; j < 25; ++j){
          if(royalrand < cumulate(royalRate, j) && royalrand >= cumulate(royalRate, j-1)){
            royalarr[j]++; break;
         }
        }
      }
      ++ii;
    }
  
    for(i = 0; i < 25; ++i){
      if(royalarr[i] != 0){
        rep += royalList[i];
        rep += " : ";
        rep += royalarr[i];
        rep += "\n";
      }
    }
    rep = rep.slice(0, rep.length - 1);
    return rep;
};
ry.getroyalList = function (){
    var datary = org.jsoup.Jsoup.connect("https://maplestory.nexon.com/Guide/CashShop/Probability/RoyalStyle").get();
    datary = datary.toString();
    var troyalList = [];
    var tempcnt = datary.split("<td><span>").length;
    for(i = 1; i < tempcnt; ++i){
      var tempry = datary.split("<td><span>")[i];
      tempry = tempry.split("</span>")[0];
      troyalList.push(tempry);
    }
    return troyalList;
};
ry.getroyalRate = function (){
    var datarr = org.jsoup.Jsoup.connect("https://maplestory.nexon.com/Guide/CashShop/Probability/RoyalStyle").get();
    datarr = datarr.toString();
    var troyalRate = [];
    tempcnt = datarr.split("</span></td>").length;
    for(i = 1; i < tempcnt; ++i){
      tempry = datarr.split("<td><span>")[i];
      tempry = tempry.split("%</td>")[0];
      tempry = tempry.split("<td>")[1];
      tempry = parseFloat(tempry) * 10;
      var tempint = parseInt(tempry);
      troyalRate.push(tempint);
    }
    return troyalRate;
};
ry.getoneroyal = function (){
    royalRate = ry.getroyalRate();
    royalList = ry.getroyalList();
    var roy = 0;
    var royalrand = getRandomInt(0, 1000);
    if(royalrand < royalRate[0]){
      roy = 0;
    }
    for(var j = 1; j < 25; ++j){
      if(royalrand < cumulate(royalRate, j) && royalrand >= cumulate(royalRate, j-1)){
        roy = j; break;
      }
    }
    rep = "어때? (";
    rep += royalList[roy];
    rep += ")아이템은 잘 받았어? 정말 어메이징하지 않아? 다음번에 또 메이플 로얄 스타일 쿠폰이 생기면 나를 찾아와줘!";

    return rep;
};
ry.getmanyroyal = function (royalcnt){    
    var royalrep = "<로얄 스타일 ";
    royalrep += royalcnt;
    royalrep += "회 결과>\n";
    royalrep += ry.getroyal(royalcnt);
    return royalrep;
};
ry.getroyalRateTable = function (){
    royalRate = ry.getroyalRate();
    royalList = ry.getroyalList();    
    royalcnt = royalList.length;
    royalrep = "";
    for(i = 0; i < royalcnt; ++i){
      royalrep += royalList[i];
      royalrep += " : ";
      var tempfloat = parseFloat(royalRate[i]);
      tempfloat /= 10;
      royalrep += tempfloat;
      royalrep += "%\n";
    }
    royalrep = royalrep.slice(0, royalrep.length - 1);
    return royalrep;
};

function cumulate(arr, ind) {
    var ret = 0;
    for(i = 0; i < ind+1; ++i){
      ret += arr[i];
    }
    return ret;
}
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //최댓값은 제외, 최솟값은 포함
}
var royalRate = [];
var royalList = [];

module.exports = ry;