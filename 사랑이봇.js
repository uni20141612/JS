const scriptName = "보마봇";
const path = 'sdcard/kakao/Bots/보마봇/';
let Logindata = FileStream.read(path + "Login.txt");
let myName = FileStream.read(path + "Name.txt");
//const kalingModule = require('kaling');//.Kakao();
//const Kakao = new kalingModule();
//Kakao.init(Logindata.split("ksec:")[1].split("/")[0], 'https://developers.kakao.com');
//Kakao.login(Logindata.split("kID:")[1].split("/")[0], Logindata.split("kpw:")[1].split("/")[0], true);
const nexonKey = "live_667c032f3a1df9eb8ba45db999373feb04dce38a285c38a141deaebcc76c661c79b3c6c16549c98b31d328cdf8ca3e3d";
// const characterName = "캐릭터명";
// const urlString = "https://open.api.nexon.com/heroes/v1/id?character_name=" + characterName;

// const answer = fetch(urlString, {
//     headers:{
//       "x-nxopen-api-key": API_KEY
//     }
// })
//   .then(response => response.json())
//   .then(data => console.log(data))
//   .catch(error => console.error(error))

// console.log(answer)
const { KakaoApiService, KakaoLinkClient } = require('kakaolink')
const Kakao = new KakaoLinkClient();
KakaoApiService.createService().login({
  email: Logindata.split("kID:")[1].split("/")[0],
  password: Logindata.split("kpw:")[1].split("/")[0],
  keepLogin: true,
  twoFA: true
}).then(e => {
  Kakao.login(e, {
      apiKey: Logindata.split("ksec:")[1].split("/")[0],
      url: 'https://developers.kakao.com'
  });
}).catch(e => {
  Log.e(e);
});


const guitarM = require('Guitar');
const naverID = Logindata.split("nID:")[1].split("/")[0];
const naverSecret = Logindata.split("nsec:")[1].split("/")[0];
const twitterAToken = Logindata.split("tActoken:")[1].split("/")[0]; const twitterATSecret = Logindata.split("tAcsec:")[1].split("/")[0]; const twitterAPIKey = Logindata.split("tAPIkey:")[1].split("/")[0]; const twitterAPISecret = Logindata.split("tAPIsec:")[1].split("/")[0]; const twitterBearerToken = Logindata.split("tBtoken:")[1].split("/")[0];
//아이디어 : 코강/익몬
/*
Kakao.sendLink(room,
            {
              "link_ver" : "4.0",
              "template_id" : 59430,
              "template_args" : {
                                    "profile" : dataCname
                                }
            },
             "custom", true);
*/
function responseFix(room, msg, sender, isGroupChat, replier, imageDB, packageName) {
      
    if(!getMinute()){ //분당 1회 동작 예상
      try{
        var testr = getTest();
        var notice1 = getNotice();
        var hournow = FileStream.read(path + "hour.txt");
        var minnow = FileStream.read(path + "min.txt");
        if(testr != "-"){
          Api.replyRoom("천한수", testr);
          Api.replyRoom("UniMaple", testr);
        }
        if(notice1 != "-"){
          Api.replyRoom("천한수", notice1);
          Api.replyRoom("UniMaple", notice1);
        }
      }
      catch(e){
        ;
        //Api.replyRoom("천한수", e);
      }
    }
    if((sender == myName || sender == adminNick)/*관리자전용*/){
      if((msg.startsWith("!답장"))){
        var notices = msg.slice(4, msg.length);
        Api.replyRoom("UniMaple", notices);
      }
      if((msg == "!리로드" || msg == "!ㄹㄹ")){
        if(Api.reload(scriptName)){     replier.reply("리로드 성공");      }
        else{  replier.reply("리로드 실패");   }
      }
      if(msg == "!유저정보"){
        var dataB = DataBase.getDataBase("Userdata.txt");  
        replier.reply(dataB);
      }
      if(msg.startsWith("!유저정보삭제")){
        var nicks = msg.split(" ")[1];
        var dataB = DataBase.getDataBase("Userdata.txt");  
        var userinfoind = dataB.indexOf(nicks);
        if(userinfoind != -1){
          var temps = dataB.slice(userinfoind-20, userinfoind.length).split("[")[1].split("]")[0];
          temps = "[" + temps + "]\n";
          dataB = dataB.replace(temps, "");
          DataBase.setDataBase("Userdata.txt", dataB); 
          replier.reply(dataB);
        }
        else{
          replier.reply(nicks + " >> 닉네임이 유저 정보에 없습니다.");
        }
      }
      if(msg == "!유저정보전체삭제"){
        var isdataB = DataBase.removeDataBase("Userdata.txt");  
        if(isdataB){replier.reply("유저 정보가 삭제되었습니다.");}
        else{replier.reply("유저 정보가 삭제되지 않았습니다.");}
        DataBase.setDataBase("Userdata.txt", "유저 정보\n\n"); 
      }
      if(msg.startsWith("테스트")){
        dataT1 = org.jsoup.Jsoup.connect("https://maplestory.nexon.com/Guide/OtherProbability/cube/black#a").get();
        replier.reply(dataT1);
      }  
      if(msg == "!후원목록"){
        moneyrep = "언제나 감사합니다. (^_^)\n\n";
        moneyrep += "스카윈브 님\n";
        moneyrep += "레드비숍 님\n";
        moneyrep += "나랑사귀자 님\n";
        replier.reply(moneyrep);
      }
      if(msg == "!코인"){
        var coinrep = guitarM.getCoin(msg);
        replier.reply(coinrep);
      }
    }
    if(sender == "니아봇"){      if(msg.indexOf("\u200B") != -1){        niamsg = msg.replace(/\u200B/g, "");   java.lang.Thread.sleep(20*1000);    replier.reply(niamsg);      }     }  
    if(msg == "!족보"){
      replier.reply("https://qr96.github.io/Puzzle-Master/");
    }
    if(msg.startsWith("!강환") || msg.startsWith("!강환불")){
      var addtitle = ["!"];
      var addn = ["-","-","-","-","-","-","-","-","-","-"];
      var eternalrep = guitarM.getStrong(msg, addtitle, addn);
      var addt = addtitle[0];
      if(eternalrep == "-"){
          Kakao.sendLink(room,
            {
              "link_ver" : "4.0",
              "template_id" : 59451,
              "template_args" : {
                                  "title" : addt,
                                  "THU" : "https://i.imgur.com/4kEZMdB.png",
                                  "add0" : addn[0],
                                  "add1" : addn[1],
                                  "add2" : addn[2],
                                  "add3" : addn[3],
                                  "add4" : addn[4],
                                  "add5" : addn[5],
                                  "add6" : addn[6],
                                  "add7" : addn[7],
                                  "add8" : addn[8],
                                  "add9" : addn[9]
                                }
            },
             "custom", true);     
      }   
      else{
        replier.reply(eternalrep);
      }
    }
    if(msg.startsWith("!영환") || msg.startsWith("!영환불")){
      var addtitle = ["!"];
      var addn = ["-","-","-","-","-","-","-","-","-","-"];
      var eternalrep = guitarM.getEternal(msg, addtitle, addn);
      var addt = addtitle[0];
      if(eternalrep == "-"){
          Kakao.sendLink(room,
            {
              "link_ver" : "4.0",
              "template_id" : 59451,
              "template_args" : {
                                  "title" : addt,
                                  "THU" : "https://i.imgur.com/SA8SsfB.png",
                                  "add0" : addn[0],
                                  "add1" : addn[1],
                                  "add2" : addn[2],
                                  "add3" : addn[3],
                                  "add4" : addn[4],
                                  "add5" : addn[5],
                                  "add6" : addn[6],
                                  "add7" : addn[7],
                                  "add8" : addn[8],
                                  "add9" : addn[9]
                                }
            },
             "custom", true);     
      }   
      else{
        replier.reply(eternalrep);
      }
    }
    if(msg.startsWith("!건의") && msg != "!건의확인"){
      senderinfo = imageDB.getProfileImage();
      senderhash = java.lang.String(senderinfo).hashCode();
      var sendername = sender;
      const sugM = require('Suggest');
      var sugrep = sugM.getSuggest(senderhash, sendername, msg);
      replier.reply(sugrep);
      if(sugrep.indexOf('감사합니다.') != -1){
        var sugnotice = sender + "님이 보내셨습니다.\n\n" + sugrep;
        Api.replyRoom("천한수", sugnotice);
      }
    }
    if(msg == "!건의확인" && (sender == myName || sender == adminNick || sender == "보마쟝")){
      const sugM2 = require('Suggest');
      sugrep = sugM2.printSuggest();
      replier.reply(sugrep);
    }
    if(msg.startsWith("!결정석") || msg.startsWith("!결정")){
      const cryM = require('Crystal');
      bossname = msg.split(" ")[1];
      if(bossname == undefined){
        replier.reply("보스 이름을 입력해주십시오.\n\n!결정석 (보스이름) : 보스의 결정석 가격과 변동 현황을 보여줍니다.");
      }
      else{
        const gbM = require('getBoss');
        var bossind = gbM.getBoss(bossname);
        if(bossind == -1){
          replier.reply("입력한 값으로 검색되는 보스가 없습니다. 다시 확인해주세요.");
        }
        else{  
          var pricelen = cryM.crystalprice[bossind].length; 
          var prevprice = cryM.crystalprice[bossind][pricelen - 2];
          var curprice = cryM.crystalprice[bossind][pricelen - 1];
          binfo = "";
          if(prevprice == 0 || curprice == 0){bHP = "결정석이 없는 보스입니다."}
          else{
            var pricediff = (curprice - prevprice);
            var pricepercent = pricediff / prevprice * 100;
            pricepercent = Number(pricepercent.toFixed(3));
            bHP = "현재 가격 : " + numberWithCommas(curprice) + "메소";
            if(pricediff >= 0){ binfo += "▲ ";}
            else{ binfo += "▼ ";}
            binfo += numberWithCommas(pricediff);
            binfo += " (" + pricepercent + "%)"; 
          }
          bimage = gbM.getBossimage(bossind);
          bimage2 = gbM.getBossimage2(bossind);
          bname2 = gbM.getBossname(bossind);
          Kakao.sendLink(room,
            {
              "link_ver" : "4.0",
              "template_id" : 59498,
              "template_args" : {
                                    "bossimage" : bimage,
                                    "bossimage2" : bimage2,
                                    "bossname" : bname2,
                                    "bossHP" : bHP,
                                    "bossinfo" : binfo
                                }
            },
              "custom", true);      
        }
      }
    }
    if(msg.startsWith("!경스토리") || msg.startsWith("!겸스토리")){
      var nickname = msg.split(" ")[1];
      if(nickname == undefined){
        replier.reply("캐릭터 이름을 입력해주세요.\n\n!경스토리 (캐릭터명) : 메이플 API 기준 캐릭터 경험치 히스토리를 보여줍니다.\n(Nexon API 기준 2023-12-21 이후 접속기록이 없는 캐릭터는 조회가 되지 않을 수 있습니다.)");
      }
      else{
        urlString = "https://open.api.nexon.com/maplestory/v1/id";

        var answer = org.jsoup.Jsoup.connect(urlString)
        .header("x-nxopen-api-key", nexonKey)
        .data("character_name", nickname)
        .ignoreHttpErrors(true)
        .ignoreContentType(true)
        .get().text();
        ocid = JSON.parse(answer)["ocid"];

        replier.reply("넥슨 openAPI에서 캐릭터의 정보를 조회중입니다.");
        java.lang.Thread.sleep(1000);
        if(ocid == undefined){
          replier.reply("입력하신 닉네임 [" + nickname + "] 으로 검색된 결과가 없습니다.\n(Nexon API 기준 2023-12-21 이후 접속기록이 없는 캐릭터는 조회가 되지 않을 수 있습니다.)\n확인하고 다시 입력해주세요.");
        }
        else{
          urlString2 = "https://open.api.nexon.com/maplestory/v1/character/basic";
          
          StandardDate = new Date('2023-12-21');
          day = new Date();
          var year = day.getFullYear();
          var month = (day.getMonth() + 1);
          var months = month.toString();
          if(months.length == 1){months = '0' + months;}
          var dayy = (day.getDate()-1);
          var days = dayy.toString();
          if(days.length == 1){days = '0' + days;}
          var date_today = year + '-' + months + '-' + days;

          var date_1, date_2, date_3, date_4, date_5, date_6 = '';

          date_1 = new Date();
          date_1.setDate(date_1.getDate() - 2);
          year = date_1.getFullYear();
          month = (date_1.getMonth() + 1);
          months = month.toString();
          dayy = date_1.getDate();
          days = dayy.toString();
          date_1 = year + '-' + months + '-' + days;
          
          date_2 = new Date();
          date_2.setDate(date_2.getDate() - 3);
          year = date_2.getFullYear();
          month = (date_2.getMonth() + 1);
          months = month.toString();
          dayy = date_2.getDate();
          days = dayy.toString();
          date_2 = year + '-' + months + '-' + days;

          date_3 = new Date();
          date_3.setDate(date_3.getDate() - 4);
          year = date_3.getFullYear();
          month = (date_3.getMonth() + 1);
          months = month.toString();
          dayy = date_3.getDate();
          days = dayy.toString();
          date_3 = year + '-' + months + '-' + days;

          date_4 = new Date();
          date_4.setDate(date_4.getDate() - 5);
          year = date_4.getFullYear();
          month = (date_4.getMonth() + 1);
          months = month.toString();
          dayy = date_4.getDate();
          days = dayy.toString();
          date_4 = year + '-' + months + '-' + days;

          date_5 = new Date();
          date_5.setDate(date_5.getDate() - 6);
          year = date_5.getFullYear();
          month = (date_5.getMonth() + 1);
          months = month.toString();
          dayy = date_5.getDate();
          days = dayy.toString();
          date_5 = year + '-' + months + '-' + days;

          date_6 = new Date();
          date_6.setDate(date_6.getDate() - 7);
          year = date_6.getFullYear();
          month = (date_6.getMonth() + 1);
          months = month.toString();
          dayy = date_6.getDate();
          days = dayy.toString();
          date_6 = year + '-' + months + '-' + days;

          dSt = new Date(StandardDate)
          d1 = new Date(date_1)
          d2 = new Date(date_2)
          d3 = new Date(date_3)
          d4 = new Date(date_4)
          d5 = new Date(date_5)
          d6 = new Date(date_6)

          answer_today = org.jsoup.Jsoup.connect(urlString2)
          .header("x-nxopen-api-key", nexonKey)
          .data("ocid", ocid)
          .data("date", date_today)
          .ignoreHttpErrors(true)
          .ignoreContentType(true)
          .get().text();
          
          var answer_1 = '-';
          var answer_2 = '-';
          var answer_3 = '-';
          var answer_4 = '-';
          var answer_5 = '-';
          var answer_6 = '-';
          if (dSt <= d1){
            answer_1 = org.jsoup.Jsoup.connect(urlString2)
            .header("x-nxopen-api-key", nexonKey)
            .data("ocid", ocid)
            .data("date", date_1)
            .ignoreHttpErrors(true)
            .ignoreContentType(true)
            .get().text();
            if (dSt <= d2){
              answer_2 = org.jsoup.Jsoup.connect(urlString2)
              .header("x-nxopen-api-key", nexonKey)
              .data("ocid", ocid)
              .data("date", date_2)
              .ignoreHttpErrors(true)
              .ignoreContentType(true)
              .get().text();
              if (dSt <= d3){
                answer_3 = org.jsoup.Jsoup.connect(urlString2)
                .header("x-nxopen-api-key", nexonKey)
                .data("ocid", ocid)
                .data("date", date_3)
                .ignoreHttpErrors(true)
                .ignoreContentType(true)
                .get().text();
                if (dSt <= d4){
                  answer_4 = org.jsoup.Jsoup.connect(urlString2)
                  .header("x-nxopen-api-key", nexonKey)
                  .data("ocid", ocid)
                  .data("date", date_4)
                  .ignoreHttpErrors(true)
                  .ignoreContentType(true)
                  .get().text();
                  if (dSt <= d5){
                    answer_5 = org.jsoup.Jsoup.connect(urlString2)
                    .header("x-nxopen-api-key", nexonKey)
                    .data("ocid", ocid)
                    .data("date", date_5)
                    .ignoreHttpErrors(true)
                    .ignoreContentType(true)
                    .get().text();
                    if (dSt <= d6){
                      answer_6 = org.jsoup.Jsoup.connect(urlString2)
                      .header("x-nxopen-api-key", nexonKey)
                      .data("ocid", ocid)
                      .data("date", date_6)
                      .ignoreHttpErrors(true)
                      .ignoreContentType(true)
                      .get().text();
                    }
                  }
                }
              }
            }
          }
          character_name = JSON.parse(answer_today)["character_name"];
          character_level = JSON.parse(answer_today)["character_level"];
          character_exp_rate = JSON.parse(answer_today)["character_exp_rate"];

          exphisrep = nickname + " 캐릭터의 경험치 히스토리\n\n";
          if(answer_6 != '-'){
            level6 = JSON.parse(answer_6)["character_level"];
            exprate6 = JSON.parse(answer_6)["character_exp_rate"];
            exphisrep += date_6 + ": Lv." + level6 + " (" + exprate6 + "%)\n";
          }
          if(answer_5 != '-'){
            level5 = JSON.parse(answer_5)["character_level"];
            exprate5 = JSON.parse(answer_5)["character_exp_rate"];
            exphisrep += date_5 + ": Lv." + level5 + " (" + exprate5 + "%)\n";
          }
          if(answer_4 != '-'){
            level4 = JSON.parse(answer_4)["character_level"];
            exprate4 = JSON.parse(answer_4)["character_exp_rate"];
            exphisrep += date_4 + ": Lv." + level4 + " (" + exprate4 + "%)\n";
          }
          if(answer_3 != '-'){
            level3 = JSON.parse(answer_3)["character_level"];
            exprate3 = JSON.parse(answer_3)["character_exp_rate"];
            exphisrep += date_3 + ": Lv." + level3 + " (" + exprate3 + "%)\n";
          }
          if(answer_2 != '-'){
            level2 = JSON.parse(answer_2)["character_level"];
            exprate2 = JSON.parse(answer_2)["character_exp_rate"];
            exphisrep += date_2 + ": Lv." + level2 + " (" + exprate2 + "%)\n";
          }
          if(answer_1 != '-'){
            level1 = JSON.parse(answer_1)["character_level"];
            exprate1 = JSON.parse(answer_1)["character_exp_rate"];
            exphisrep += date_1 + ": Lv." + level1 + " (" + exprate1 + "%)\n";
          }
          exphisrep += date_today + ": Lv." + character_level + " (" + character_exp_rate + "%)";

          replier.reply(exphisrep);
        }
      }
    }
    if(msg.startsWith("!렙스토리") || msg.startsWith("!레벨스토리")){
      nickname = msg.split(" ")[1];
      if(nickname == undefined){
        replier.reply("캐릭터 이름을 입력해주세요.\n\n!렙스토리/!레벨스토리 (캐릭터이름) : 캐릭터의 레벨 히스토리를 보여줍니다.");
      }
      else{
        maplegg = "https://maple.gg/u/" + nickname;
        dataC1 = org.jsoup.Jsoup.connect(maplegg).get();
        dataC1 = dataC1.toString();
        var levelrep = guitarM.getLevel(nickname, dataC1);
        replier.reply(levelrep);
      }
    }
    if(msg.startsWith("!경험치")){
      var exprep2 = guitarM.getexpInform(msg);
      replier.reply(exprep2);
    }
    if(msg.startsWith("!계산") || msg.startsWith("!계산기")){
      var chkcal = msg.split(" ")[1];
      if(chkcal == undefined){
        replier.reply("식이 입력되지 않았습니다.\n\n!계산 (계산식) : 식을 계산합니다. 식에는 숫자, 괄호, 사칙연산, 소숫점을 제외한 나머지는 무시됩니다.");
      }
      else{
        var calind = msg.indexOf(" ", 1);
        var caleq = msg.slice(calind+1, msg.length);
        caleq = caleq.replace(/[^-()\d/*+.]/g, '');
        try{
          replier.reply("식 : " + caleq + "\n\n답 : " + eval(caleq));
        }catch(error){
          replier.reply(caleq + " >> 식이 잘못되었습니다.\n\n!계산 (계산식) : 식을 계산합니다. 식에는 숫자, 괄호, 사칙연산, 소숫점을 제외한 나머지는 무시됩니다.\n\n" + error);
        }
      }
    }
    if(msg.startsWith("!갱신")){
      nickname = msg.split(" ")[1];
      if(nickname == undefined){      replier.reply("캐릭터 이름을 입력해주세요.\n\n!갱신 (캐릭터이름) : 메이플gg를 갱신합니다.");    }
      else{ replier.reply(mapleupdate(nickname)); }
    }
    if(msg.startsWith("!곳폽")){
      var nickrep = "";
      var nicknum = msg.split(" ")[1];
      if(nicknum == undefined){ nicknum = 2; }  
      else if(isNaN(nicknum) || (nicknum < 2 || nicknum > 6) || nicknum % 1 != 0){ replier.reply("2~6 사이의 숫자를 입력해주세요."); nickrep = "-";}
      
      if(nickrep != "-"){      
        const dataM2 = require('bomadata');
        var nickdata = dataM2.bomaNick;
        var nickrand = 0;
        for(i = 0; i < nicknum; ++i){
          nickrand = getRandomInt(0, nickdata.length);
          nickrep += nickdata[nickrand];
        }
        replier.reply("곳폽 제조기 결과 : " + nickrep);
      }
    }
    if(msg.startsWith("!날씨") || msg.startsWith("!ㄴㅆ")){
      var locW = msg.split(" ")[1];
      if(locW == undefined){ replier.reply("지역명을 입력해주세요.\n\n!날씨 (지역) : 그 지역 날씨를 보여줍니다.")}
      else{
      try{ 
      var searchW = "https://m.search.daum.net/search?w=tot&q=" + msg.split(" ")[1] + "+날씨";
      var tempW0 = Utils.parse(searchW).select("div[id=weatherPanels]");
      var tempW = tempW0.get(0);

        var resultW = "[" + locW + " 날씨]\n";
        resultW += "상태 : " + tempW.select("p").text().split(", 오늘")[0] + "\n";
        resultW += "온도 : " + tempW.select("em.txt_temp").get(0).ownText() + "℃\n";
        tempW = tempW.select("dd");
        resultW += "습도 : " + tempW.get(0).text() + "\n";
        resultW += "바람 : " + tempW0.select("dt").get(1).text();
        resultW += ", " + tempW.get(1).text() + "\n";
        tempW = tempW0.select("ul.list_detail").select("li").get(1).select("span");
        resultW += "미세먼지 : " + tempW.get(2).text();
        resultW += " (" + tempW.get(3).ownText() + "μg/m³)";

        replier.reply(resultW); 
      }
      catch(e){ replier.reply(locW + "의 날씨를 불러오는데 실패하였습니다."); }
      }
    }
    if(msg == "!날짜"){
      var day = new Date();
      replier.reply("오늘은 "+ day.getFullYear() + "년 " + (day.getMonth() + 1) + "월 " + day.getDate() + "일 입니다.");
    }
    if(msg == "!시간"){      
      day = new Date();
      replier.reply("지금은 " + day.getHours() + "시 " + day.getMinutes() + "분 " + day.getSeconds() + "초입니다.");
    }
    if(msg.startsWith("!놀긍")){
      var Pcrep = guitarM.getPoschaos(msg);
      replier.reply(Pcrep);
    }
    if(msg.startsWith("!농장")){
      const farmM = require('Farm');
      var farmrep = farmM.getFarm(msg);
      replier.reply(farmrep);
    }
    if(msg.startsWith("!단축")){
        var sUrl = msg.split(" ")[1];
        if(sUrl == undefined){
          replier.reply("단축할 주소를 입력해주세요.\n\n!단축 (단축할 웹주소) : 웹주소를 me2.do/~ 형식의 짧은 주소로 단축시켜줍니다.");
        }
        else{
        var shortrep = shortenURL(sUrl);
        if(shortrep == "fail"){
          replier.reply(sUrl + " >> 단축하는데 실패하였습니다. 주소를 확인하여주세요.\n\n!단축 (단축할 웹주소) : 웹주소를 me2.do/~ 형식의 짧은 주소로 단축시켜줍니다.");
        }
        else{
          replier.reply("입력 주소 : " + sUrl + "\n\n단축 결과 : " + shortrep);
        }
      }
    }
    if(msg == "!데굴" || msg == "!데굴데굴" || msg == "!주사위"){
      var dicerep = guitarM.getDice();
      replier.reply(sender + dicerep);
    }
    if(msg == "!도움말"){
      /*const helpM = require('Help');
      var help = helpM.gethelp();
      replier.reply(help);*/
      var help = "redirect.html";
      var helpweb = "help.html";
      // Kakao.sendLink(room,
      //   {
      //     "link_ver" : "4.0",
      //     "template_id" : 64077,
      //     "template_args" : {
      //                           "link" : help,
      //                           "link2" : helpweb
      //                       }
      //   },
      //    "custom", true);
      replier.reply("도움말 페이지 : " + "http://bomabot.dothome.co.kr/help.html");
    }
    if(msg.startsWith("!디데이")){
      var ddayrep = guitarM.getDday(msg);
      replier.reply(ddayrep);
    }
    if(msg.startsWith("!똥캐")){
      //replier.reply("메르세데스\n\n연계기와 속사기를 주력으로 사용하는 궁수. 극딜에 특화된 스킬 구조 덕분에 강력한 순간 화력을 자랑하지만, 높은 피로도와 낮은 투자 효율이 발목을 잡는다.\n\n[2011년 7월 21일 출시]\n\n무적기 : 로얄 나이츠 (시전 및 해제시, 2초), 프리드의 가호[공용] (6중첩시 30초)\n뎀감기 : 실피디아 (탑승 중 25%)\n바인드 : 없음\n\n공격대원 효과 : 스킬 쿨타임 2/3/4/5/6% 감소(1초 미만으로 감소 불가)\n\n링크 스킬 : 엘프의 축복 - 경험치 획득량 15% 증가"); 
      const jobM3 = require('Job');
      chkjob = getRandomInt(0, 48);
      if(chkjob != -1){
        var jobname = jobM3.getJobname(chkjob);
        var jobdesc = jobM3.getJobdesc(chkjob);
        var jobimage = jobM3.getJobimage(chkjob);
        var jobweb = jobM3.getJobweb(chkjob);
        Kakao.sendLink(room,
        {
            "link_ver" : "4.0",
            "template_id" : 59546,
            "template_args" : {
                                "jobname" : jobname,
                                "jobdesc" : jobdesc,
                                "jobimage" : jobimage,
                                "jobmobweb" : jobweb,
                                "jobpcweb" : jobweb
                              }
        },
           "custom", true);
        }

    }
    if(msg.startsWith("!렙반감")){
      var levhalfrep = "";
      var levhalf = msg.split(" ")[1];
      if(levhalf == undefined){
        levhalfrep = "알고싶은 렙반감 항목을 입력하세요.\n\n데미지 : 레벨별 데미지 증감표\n리부트 : 레벨별 리부트월드 데미지 증감표\n경험치 : 레벨별 경험치 증감표\n메소 : 레벨별 메소 증감표\n아케인 : 아케인 포스별 데미지 증감표\n어센틱 : 어센틱 포스별 데미지 증감표";
      }
      else if(levhalf == "데미지"){ levhalfrep = guitarM.levdam;   }
      else if(levhalf == "리부트"){ levhalfrep = guitarM.levdamre; }
      else if(levhalf == "경험치"){ levhalfrep = guitarM.levexp;   }
      else if(levhalf == "메소"){   levhalfrep = guitarM.levmeso;  }
      else if(levhalf == "아케인"){   levhalfrep = guitarM.levarcane;  }
      else if(levhalf == "어센틱"){   levhalfrep = guitarM.levauthentic;  }
      else{
        levhalf = "항목 키워드를 잘못 입력하셨습니다.\n\n!렙반감 (항목) : 레벨별 해당 항목의 증감표를 보여줍니다.\n데미지 : 레벨별 데미지 증감표\n리부트 : 레벨별 리부트월드 데미지 증감표\n경험치 : 레벨별 경험치 증감표\n메소 : 레벨별 메소 증감표\n아케인 : 아케인 포스별 데미지 증감표\n어센틱 : 어센틱 포스별 데미지 증감표";
      }
      replier.reply(levhalfrep);
    }
    if(msg.startsWith("!로마자")){
      var korname = msg.split(" ")[1];
      if(korname == undefined){
        replier.reply("로마자로 변환할 이름을 입력해주세요.\n\n!로마자 (이름) : 입력한 이름을 로마자로 변환합니다.");
      }
      else{
        var romaname = getRomaname(korname);
        romaname = romaname.toString();
        var romarep = "";
        for(i = 1; i < romaname.split("name\":\"").length; ++i){
          var romatemp = romaname.split("name\":\"")[i].split("\",\"")[0];
          romarep += i + " : " + romatemp + "\n";
        }
        romarep = romarep.slice(0, romarep.length-1);
        if(romarep.length > 1){
          replier.reply(romarep);
        }
        else{
          replier.reply(korname + " >> 입력한 이름이 잘못된 이름 형태입니다. 다시 확인하여주십시오.");
        }
      }
    }
    if(msg.startsWith("!로얄")){      
      const royalM = require('Royal');
      if(msg.split(" ")[1] == undefined){
        rep = royalM.getoneroyal();
        Kakao.sendLink(room,
          {
            "link_ver" : "4.0",
            "template_id" : 59435,
            "template_args" : {
                                  "desc" : rep
                              }
          },
           "custom", true);
      }
      else if(msg.split(" ")[1] > 0 && msg.split(" ")[1] <= 5000 && msg.split(" ")[1] % 1 === 0){
        var royalcnt = 0;
        royalcnt = msg.split(" ")[1];
        var royalrep = royalM.getmanyroyal(royalcnt);
        replier.reply(royalrep);
      }
      else if(msg.split(" ")[1] == "확률" || msg.split(" ")[1] == "확률표"){
        royalrep = royalM.getroyalRateTable();
        replier.reply(royalrep);
      }
      else{        
        replier.reply("숫자가 5000을 초과하거나 숫자가 아닙니다.\n\n!로얄 (횟수) : 지정한 횟수만큼의 로얄스타일 시뮬레이션을 보여줍니다. 횟수는 최대 5000까지 설정할수 있습니다. 횟수를 생략할 시 1회만 시뮬레이션 합니다.\n(횟수)에 '확률' 또는 '확률표'를 입력하면 현재 로얄스타일의 확률표를 보여줍니다.");
      }
    }
    if(msg.startsWith("!롤") || msg.startsWith("!그님티") ){
      if(msg.split(" ")[1] == undefined){
        replier.reply("닉네임을 입력해주세요.\n\n!그님티 (롤아이디) : 해당 아이디의 티어를 보여줍니다.");
      }
      else{
        var lolnick = msg.slice(5);
        var opgg = "https://www.op.gg/summoners/kr/" + lolnick;
        var dataL = org.jsoup.Jsoup.connect(opgg).get().toString();
        var lolrep = guitarM.getLol(dataL, lolnick);
        replier.reply(lolrep);
      }
    }
    if(msg.startsWith("!마릿수") || msg.startsWith("!젠")){
      const mapM = require('Map');
      var maprep = mapM.getMap(msg);
      if(maprep[0] != "*"){ replier.reply(maprep); }
      else{
        var mapn = maprep.split("*")[1];
        var mapc = maprep.split("*")[2];
        maprep2 = "-"
        if(mapc == '-'){ maprep2 = mapn + "\n\n" + "데이터 추가중"; }
        else{ maprep2 = mapn + "\n\n" + mapc; }
        // var mapcl = mapc.split(".com/")[1];
        // Kakao.sendLink(room,
        //   {
        //     "link_ver" : "4.0",
        //     "template_id" : 63410,
        //     "template_args" : {
        //                           "imagetitle" : mapn,
        //                           "image" : mapc,
        //                           "imagelink" : mapcl
        //                       }
        //   },
        //   "custom", true);
        replier.reply(maprep2);
      }
    }
    if(msg == "!명령어"){
      const helpM2 = require('Help');
      var inst = helpM2.getInst();
      replier.reply(inst);
    }
    if(msg.startsWith("!메모")){
      senderinfo = imageDB.getProfileImage();
      senderhash = java.lang.String(senderinfo).hashCode();
      var sendername = sender;
      const memM = require('Memo');
      var memrep = memM.getMemo(senderhash, sendername, msg);
      replier.reply(memrep);
    }
    if(msg.startsWith("!메소") || msg.startsWith("!메소시세")){
      const mesoM = require('Meso');
      var servername = msg.split(" ")[1];
      if(servername == undefined){
        replier.reply("월드 이름을 입력해주세요.\n\n!메소 (월드이름) : 해당 월드의 메소마켓, ㅁㅌ 시세를 알려줍니다. (머쉬빌리지 기준)\n(월드이름)에 '평균'을 입력하면 전체월드 평균 가격을 보여줍니다.");
      }
      else{
        var mesoind = mesoM.getServer(servername);
        if(mesoind == -1){
          replier.reply("해당 단어에 해당하는 월드가 존재하지 않습니다.");
        }
        else if(mesoind == 99){
          replier.reply("해당 월드는 거래가 되지 않는 월드입니다.");
        }
        else{
          dataMeso = org.jsoup.Jsoup.connect('https://commapi.gamemarket.kr/comm/graph').userAgent('Mozilla/5.0').ignoreContentType(true).post().wholeText();
          dataMeso = dataMeso.toString();
          var dates = gettoday();
          var mesomarket = dataMeso.split("reverse")[1].split("reverse2")[0];
          if(mesomarket.indexOf(dates) == -1){ dates = getyesterday(); }
          mesomarket = mesomarket.split("[{")[1].split("}")[0];
          var mutong = dataMeso.split("reverse2")[1];
          mutong = mutong.split("[{")[1].split("}")[0];
          dates = mesomarket.split("reg_date\":\"")[1].split(" ")[0];

          var mm = [];
          var mt = [];
          for(i = 2; i < mesomarket.split(":\"").length; ++i){
            var tempmeso = mesomarket.split(":\"")[i].split("\"")[0];
            mm.push(tempmeso);
            tempmeso = mutong.split(":\"")[i].split("\"")[0];
            mt.push(tempmeso);
          }
          var servericon = mesoM.getServericon(mesoind);
          // Kakao.sendLink(room,
          //   {
          //     "link_ver" : "4.0",
          //     "template_id" : 59953,
          //     "template_args" : {
          //                           "date" : dates,
          //                           "servericon" : servericon,
          //                           "mesomarket" : mm[mesoind],
          //                           "mutong" : mt[mesoind]
          //                       }
          //   },
          //     "custom", true);
          replier.reply("현재 겜마톡 머쉬빌리지 사이트가 운영을 종료하여 시세 데이터가 업데이트되지 않고 있습니다.");
        }
      }
    }
    if(msg.startsWith("!몬파") || msg.startsWith("!몬스터파크")){
      const monpaM = require('Map');
      const jariMm = require('Jari');
      var monpanum = msg.split(" ")[1];
      if(monpanum == undefined){
        replier.reply("정보를 알고싶은 몬스터파크 던전의 번호를 입력해주세요.\n\n1 : 초급 던전\n2 : 중급 던전\n3 : 고급 던전");
      }
      else{
        var monpanum2 = msg.split(" ")[2];
        var monparep = "";
        if(monpanum2 == undefined){          
          if(monpanum == 1){
            monparep = "초급 던전 / 제한레벨 105~139\n\n";
            for(i = 1; i < 6; ++i){
              monparep += String(i);
              monparep += ". ";
              monparep += monpaM.monpaname1[i-1];
              if(i != 5){ monparep += "\n"; }
            }
          }
          else if(monpanum == 2){
            monparep = "중급 던전 / 제한레벨 140~179\n\n";
            for(i = 1; i < 7; ++i){
              monparep += String(i);
              monparep += ". ";
              monparep += monpaM.monpaname2[i-1];
              if(i != 6){ monparep += "\n"; }
            }
          }
          else if(monpanum == 3){
            monparep = "고급 던전 / 제한레벨 180~300\n\n";
            for(i = 1; i < 13; ++i){
              monparep += String(i);
              monparep += ". ";
              monparep += monpaM.monpaname3[i-1];
              if(i != 12){ monparep += "\n"; }
            }
          }
          else{ monparep = "잘못된 번호를 입력하였습니다.\n\n1 : 초급 던전\n2 : 중급 던전\n3 : 고급 던전"; }
        }
        else if(isNaN(monpanum2) || monpanum2 % 1 != 0){ monparep = "몬스터파크 던전 번호는 정수로 입력하셔야 합니다."; }
        else{
          if(monpanum == 1){
            if(monpanum2 < 1 || monpanum2 > 5){ monparep = "초급 던전은 1이상 5이하의 번호만 입력하실 수 있습니다."; }
            else{
              monparep = "초급 던전 / 제한레벨 105~139\n\n";
              monparep += "던전명 : ";
              monparep += monpaM.monpaname1[monpanum2 - 1];
              monparep += "\n적정 레벨 : ";
              monparep += monpaM.monpalvl1[monpanum2 - 1];
              monparep += "\n지급 경험치 : ";
              monparep += jariMm.Jari(monpaM.monpaexp1[monpanum2 - 1]);
            }
          }
          else if(monpanum == 2){
            if(monpanum2 < 1 || monpanum2 > 6){ monparep = "중급 던전은 1이상 6이하의 번호만 입력하실 수 있습니다."; }
            else{
              monparep = "중급 던전 / 제한레벨 140~179\n\n";
              monparep += "던전명 : ";
              monparep += monpaM.monpaname2[monpanum2 - 1];
              monparep += "\n적정 레벨 : ";
              monparep += monpaM.monpalvl2[monpanum2 - 1];
              monparep += "\n지급 경험치 : ";
              monparep += jariMm.Jari(monpaM.monpaexp2[monpanum2 - 1]);
            }
          }
          else if(monpanum == 3){
            if(monpanum2 < 1 || monpanum2 > 12){ monparep = "고급 던전은 1이상 12이하의 번호만 입력하실 수 있습니다."; }
            else{
              monparep = "고급 던전 / 제한레벨 180~300\n\n";
              monparep += "던전명 : ";
              monparep += monpaM.monpaname3[monpanum2 - 1];
              monparep += "\n적정 레벨 : ";
              monparep += monpaM.monpalvl3[monpanum2 - 1];
              monparep += "\n지급 경험치 : ";
              monparep += jariMm.Jari(monpaM.monpaexp3[monpanum2 - 1]);
            }
          }
          else{ monparep = "잘못된 번호를 입력하였습니다.\n\n1 : 초급 던전\n2 : 중급 던전\n3 : 고급 던전"; }
        }

        replier.reply(monparep);
      }
    }
    if((msg.startsWith("!무릉") || msg.startsWith("!시드랭킹") || msg.startsWith("!유니온") || msg.startsWith("!업적") || msg.startsWith("!길드") ) && !msg.startsWith("!무릉스토리")){
      nickname = msg.split(" ")[1];
      if(nickname == undefined){
        replier.reply("캐릭터 이름을 입력해주세요.\n\n!무릉,!시드,!유니온,!업적,!코디,!길드 + (캐릭터명) : 메이플지지 기준 캐릭터 관련 정보를 보여줍니다.");
      }
      else{
        maplegg = "https://maple.gg/u/" + nickname;
        dataC1 = org.jsoup.Jsoup.connect(maplegg).get();
        dataC1 = dataC1.toString();
                       
        if(msg.startsWith("!무릉")){
          var stair = parseInt(nickname);
          if((nickname.length < 3 || nickname == '100') && stair > 0 && stair < 101){
            const mrM = require('Mureung');
            const jariM = require('Jari');
            var mname = mrM.monstername[stair];
            var mlevel = mrM.monsterlevel[stair];
            var mhp = mrM.monsterhp[stair];
            var mhpjari = "확인 불가";
            if(mhp != "-"){mhpjari = jariM.Jari2(parseInt(mhp.replace(/,/g, ""))).replace(/ 0억/g, "").replace(/ 0만/g, "").replace(/ 0/g, "");}
            var mchp = mrM.monstercumulativehp[stair];
            var mchpjari = "확인 불가";
            if(mchp != "-"){mchpjari = jariM.Jari2(parseInt(mchp.replace(/,/g, ""))).replace(/ 0억/g, "").replace(/ 0만/g, "").replace(/ 0/g, "");}
            var minc = mrM.monsterhpincrease[stair];
            var mimage = mrM.monsterimage[stair];
            // Kakao.sendLink(room,
            //   {
            //     "link_ver" : "4.0",
            //     "template_id" : 60127,
            //     "template_args" : {
            //                           "stair" : stair,
            //                           "monstername" : mname,
            //                           "monsterlevel" : mlevel,
            //                           "monsterhp" : mhpjari,
            //                           "monsterchp" : mchpjari,
            //                           "monsterinc" : minc,
            //                           "monsterimage" : mimage
            //                       }
            //   },
            //    "custom", true);
            var murep = stair + "층 : " + mname + " Lv." + mlevel;
            murep += "\n체력 : " + mhpjari;
            murep += "\n누적체력 : " + mchpjari;
            murep += " (▲" + minc + ")";
            replier.reply(murep);
          }
          else{
            if(dataC1.indexOf("검색결과 없음") != -1){
              replier.reply(nickname + " >> 그런 캐릭터는 없습니다.\n\n!무릉 (캐릭터명) : 메이플지지 기준 캐릭터의 최근 무릉 기록과 최고 무릉 기록을 보여줍니다\n\n!무릉 (층수) : 1~100사이의 숫자를 넣으면 해당 층수의 몬스터 정보를 보여줍니다.");
            }
            else{
              dataM1 = dataC1.split("무릉 히스토리")[1].split("</section")[0];
              if(dataM1.indexOf("기록이 없습니다.") == -1){
                var mureungrep = guitarM.getMureung(nickname, dataM1, dataC1);
                replier.reply(mureungrep);
              }
              else{
                replier.reply(nickname + " >> 이 캐릭터는 무릉 기록이 없습니다.");
              }
            }
          }
        }
        else{
          if(dataC1.indexOf("검색결과 없음") != -1){
            replier.reply("그런 캐릭터는 없습니다.");
          }
          else{ 
          
            if(msg.startsWith("!시드랭킹")){
              dataS1 = dataC1.split("더시드 최고기록")[1].split("유니온")[0];
              if(dataS1.indexOf("user-summary-no-data") == -1){
                var seedrep = guitarM.getSeed(dataS1);
                replier.reply(seedrep);
              }
              else{
                replier.reply("이 캐릭터는 시드 기록이 없습니다.");
              }
            }

            if(msg.startsWith("!유니온")){
              dataU1 = dataC1.split("유니온 <i")[1];
              dataU2 = dataU1.split("업적")[0];
              if(dataU2.indexOf("user-summary-no-data") == -1){
                var unionrep = guitarM.getUnion(dataU1, dataU2);
                replier.reply(unionrep);
              }
              else{
                replier.reply("이 캐릭터는 메지지에서 유니온 조회가 되지 않습니다.");
              }
            }

            if(msg.startsWith("!업적")){
              dataA1 = dataC1.split("업적 <i")[1].split("</section>")[0];
              if(dataA1.indexOf("user-summary-no-data") == -1){
                var achieverep = guitarM.getAchieve(dataA1);
                replier.reply(achieverep);
              }
              else{
                replier.reply("이 캐릭터는 업적 정보가 없습니다.");
              }
            }

            if(msg.startsWith("!길드")){
              var dataG1 = dataC1.split("d-sm-block\">길드")[1].split("</div>")[0];
              if(dataG1.indexOf("(없음)") == -1){
                var guildname = guitarM.getGuild(dataG1);
                var guildinfo = guitarM.getGuildinfo(dataG1);
                replier.reply(nickname + " 캐릭터의 길드 : " + guildname + "\n\n길드 정보 : " + guildinfo);
              }
              else{
                replier.reply("이 캐릭터는 길드 정보가 없습니다.")
              }
            }
          }
        }
      }
    }
    if(msg.startsWith("!무스토리") || msg.startsWith("!무릉스토리")){
      var nickname = msg.split(" ")[1];
      if(nickname == undefined){
        replier.reply("캐릭터 이름을 입력해주세요.\n\n!무스토리/!무릉스토리 (캐릭터이름) : 캐릭터의 무릉 히스토리를 보여줍니다.");
      }
      else{
        maplegg = "https://maple.gg/u/" + nickname;
        dataC1 = org.jsoup.Jsoup.connect(maplegg).get();
        dataC1 = dataC1.toString();

        var musrep = guitarM.getMustory(nickname, dataC1);
        replier.reply(musrep);
      }
    }
    if(msg.startsWith("!문제")){
      const seedM3 = require('Seed');
      seedrep = seedM3.getSeedQuestion(msg, room, 0);
      replier.reply(seedrep);
    }
    if(msg.startsWith("!답") && !msg.startsWith("!답장")){
      const seedM4 = require('Seed');
      seedrep = seedM4.getSeedQuestion(msg, room, 1);
      replier.reply(seedrep);
    }
    if(msg == "!뭐먹지" || msg == "!머먹지"){
      const foodM = require('Food');
      var foodmax = foodM.foodList.length;
      var foodrand = getRandomInt(0, foodmax);
      var foodrep = foodM.foodList[foodrand];
      replier.reply("보마봇 추천 메뉴 : " + foodrep);
    }
    if(msg.startsWith("!몬스터") || msg.startsWith("!몹") || msg.startsWith("!체력")){
      const monM = require('Monster');
      monrep = monM.getMonster(msg);
      if(monrep[0] == "☆"){
        var Monname = monrep.split("☆")[1].split("★")[0];
        var Monimage = monrep.split("★")[1];
        var MonHP = monrep.split("★")[2];
        var MonEXP = monrep.split("★")[3];
        var Monarea = monrep.split("★")[4];

        // Kakao.sendLink(room,
        //   {
        //     "link_ver" : "4.0",
        //     "template_id" : 60491,
        //     "template_args" : {
        //                           "skillname" : Monname,
        //                           "skillimage1" : Monimage,
        //                           "skillimage2" : Monarea,
        //                           "skilldesc1" : MonHP,
        //                           "skilldesc2" : MonEXP
        //                       }
        //   },
        //    "custom", true);
        monrep2 = Monname;
        monrep2 += "\n\n" + MonHP;
        monrep2 += "\n" + MonEXP;
        replier.reply(monrep2);
      }
      else{
        replier.reply(monrep);
      }
      
    }
    if(msg == "!무토"){
      var mutorep = "무토 요리와 재료 목록\n\n";
      mutorep += "깔깔만두/앗볶음 : 바나나 5 + 발바닥 10\n";
      mutorep += "낄낄볶음밥/헉튀김 : 발굽 5 + 갈기 10\n";
      mutorep += "오잉피클/허허말이 : 갈기 5 + 물갈퀴 5 + 깃털 10\n";
      mutorep += "이런면/휴피자 : 갈기 5 + 물갈퀴 10 + 발굽 5\n";
      mutorep += "저런찜/하빵 : 바나나 5 + 발바닥 5 + 등껍질 10\n";
      mutorep += "큭큭죽/호호탕 : 물갈퀴 5 + 발톱 10 + 등껍질 5\n";
      mutorep += "크헉구이/흑흑화채 : 깃털 10 + 발바닥 5 + 바나나 5 + 열매 1\n";
      mutorep += "엉엉순대/으악샐러드 : 발톱 10 + 갈기 5 + 등껍질 5 + 열매 1";
      replier.reply(mutorep);
    }
    if(msg.startsWith("!방무")){
      var mobDef = msg.split(" ")[1];
      var myDef = msg.split(" ")[2];
      var defrep = guitarM.getDefense(mobDef, myDef, msg);
      replier.reply(defrep);
    }
    if(msg.startsWith("!비약")){
      var medrep = guitarM.getMedicine(msg);
      replier.reply(medrep);
    }
    if(msg.startsWith("!번역")){ 
      var l1 = msg.split(" ")[1];
      var l2 = msg.split(" ")[2];
      if(l1 == undefined || l2 == undefined){
        replier.reply("언어 코드가 입력되지 않았습니다.\n\n!번역 (입력국가코드) (출력국가코드) (번역 할 문장) : 문장을 다른나라 언어로 번역합니다. 코드에는 정해진 국가 코드를 입력하셔야 합니다. (입력 예시 - !번역 ko en 나는 당신을 사랑합니다. / 출력 예시 - I love you.)\n\n국가 코드\nko-한국어\nen-영어\nja-일본어\nzh-CN-중국어 간체\nzh-TW-중국어 번체\nvi-베트남어\nid-인도네시아어\nth-태국어\nde-독일어\nru-러시아어\nes-스페인어\nit-이탈리아어\nfr-프랑스어");
      }
      else{
        var chkpapa1 = false, chkpapa2 = false;
        for(i = 0; i < ppgLangcode.length; ++i){
          if(l1 == ppgLangcode[i]){chkpapa1 = true;}
          if(l2 == ppgLangcode[i]){chkpapa2 = true;}
        }
        if(chkpapa1 != true || chkpapa2 != true){
          replier.reply("언어 코드가 잘못 입력되었습니다.\n\n!번역 (입력국가코드) (출력국가코드) (번역 할 문장) : 문장을 다른나라 언어로 번역합니다. 코드에는 정해진 국가 코드를 입력하셔야 합니다. (입력 예시 - !번역 ko en 나는 당신을 사랑합니다. / 출력 예시 - I love you.)\n\n국가 코드\nko-한국어\nen-영어\nja-일본어\nzh-CN-중국어 간체\nzh-TW-중국어 번체\nvi-베트남어\nid-인도네시아어\nth-태국어\nde-독일어\nru-러시아어\nes-스페인어\nit-이탈리아어\nfr-프랑스어");
        }
        else{
          var papaind = msg.indexOf(" ", 8);
          var transtext = msg.slice(papaind+1, msg.length);
          var paparep = papagoT(l1, l2, transtext);
          replier.reply(paparep);
        }
      }
    }
    if(msg.startsWith("!보스")){
      const BossM = require('getBoss');
      var boss = msg.split(" ")[1];
      var boss2 = msg.slice(4, msg.length);
      if(boss == undefined){
        replier.reply("보스 이름을 입력해주세요.\n\n!보스 (보스이름) : 보스 레벨, 체력, 방어율, 포스, 결정석가격을 보여줍니다.\n(보스이름)에 '목록'을 입력하면 각 보스별 인식 키워드 목록을 보여줍니다.\n난이도 생략시 노멀난이도를 우선합니다.\n결정석 가격은 변동패치전 최초 기준 가격입니다. 자세한 변동내역은 !결정석을 참조해주세요.");
      }
      else{
        var re = BossM.getBoss(boss2);
        if(re > -1 && re < 1000){
         var bimage, bimage2, bname, bHP, binfo;
          bimage = BossM.getBossimage(re);
          bimage2 = BossM.getBossimage2(re);
          bname = BossM.getBossname(re);
          bHP = BossM.getBossHP(re);
          binfo = BossM.getBossinfo(re);
          // Kakao.sendLink(room,
          //   {
          //     "link_ver" : "4.0",
          //     "template_id" : 59498,
          //     "template_args" : {
          //                           "bossimage" : bimage,
          //                           "bossimage2" : bimage2,
          //                           "bossname" : bname,
          //                           "bossHP" : bHP,
          //                           "bossinfo" : binfo
          //                       }
          //   },
          //     "custom", true);
          var bossrep = bname;
          bossrep += "\n\n" + bHP;
          bossrep += "\n" + binfo;
          replier.reply(bossrep);
        }
        else{
          replier.reply(re);
        }
      }
    }
    if(sender == "방장봇"){
      if(msg.startsWith("환영합니다! 유니스트 메이플스토리 톡방입니다~")){
        replier.reply("환영합니다~! 보마봇 많은 이용 부탁드려요!");
      }
      /*if(msg.startsWith("몬파/데일리/마일리지/")){  replier.reply("황금마차도 챙기라구!"); }*/
      /*if(msg.startsWith("우르스 두 배 15분 전")){ replier.reply("황금마차 얼른 눌러~"); }*/
    }
    if(msg == "!봇업데이트" || msg == "!봇업뎃"){
      const updateM = require('Update');
      var update = updateM.getupdate();
      replier.reply(update);
    }
    if(msg.startsWith("!뽑기") || msg.startsWith("!하나만")){
      if(msg.split(" ").length < 3){
        replier.reply("최소 2개이상의 단어를 입력해주세요.\n\n!뽑기/!하나만 (단어) : 띄어쓰기로 구분된 단어들 중에서 하나를 골라 결과로 보여줍니다. 최소 두 단어 이상 입력하여야 합니다.");
      }
      else{
        var pickcnt = msg.split(" ").length - 1;        pickcnt = getRandomInt(0, pickcnt);
        replier.reply("보마봇 뽑기 결과 : " + msg.split(" ")[1 + pickcnt]);
      }
    }
    if(msg.startsWith("!브금")){
      const bgmM = require('Bgm');
      var bgmrep = bgmM.getBGM(msg);
      replier.reply(bgmrep);
    }
    if(msg.startsWith("!사다리") || msg.startsWith("!사다리타기") || msg.startsWith("!순위")){
      if(msg.split(" ").length < 3){
        replier.reply("최소 2개이상의 단어를 입력해주세요.\n\n!사다리타기/!사다리 (단어) : 띄어쓰기로 구분된 단어들을 랜덤으로 순위를 매겨 보여줍니다. 최소 두 단어 이상 입력하여야 합니다.");
      }
      else{
        var ladderrep = guitarM.getLadder(msg);
        replier.reply(ladderrep);
      }
    }
    if(msg == "!상태"){
      var statusrep = "보마봇 상태\n";
      statusrep += "구동 환경 : " + Utils.getPhoneBrand() + " " + Device.getPhoneModel() +" / 안드로이드 " + Utils.getAndroidVersionName() + "\n";
      statusrep += "배터리 잔량 : " + Device.getBatteryLevel();
      if(Device.isCharging()){ statusrep += "%(충전중)\n";}
      else{ statusrep += "%(충전중이 아님)\n"; }
      statusrep += "배터리 온도 : " + (Device.getBatteryTemperature()/10) + "°C";


      replier.reply(statusrep);
    }
    if(msg == "!썬데이" || msg == "!선데이"){
      var mapleeventurl = "https://maplestory.nexon.com/News/Event";
      var SundayMaple = org.jsoup.Jsoup.connect(mapleeventurl).get().toString();
      SundayMaple = SundayMaple.split("event_board")[1].split("</ul>")[0];
      if(SundayMaple.indexOf("썬데이 메이플") == -1){
        replier.reply("아직 썬데이 메이플 이벤트 공지가 올라오지 않았습니다. 금요일 오전 10시쯤 다시 시도해주세요.");
      }
      else{
        var sunlink = SundayMaple.split("썬데이 메이플")[0]//
        var suntemp = sunlink.split("<a href=\"").length; 
        sunlink = sunlink.split("<a href=\"")[suntemp-1].split("\"")[0];
        var Sundayurl = "https://maplestory.nexon.com" + sunlink;
        var dataSun = org.jsoup.Jsoup.connect(Sundayurl).get();
        dataSun = dataSun.toString();
        replier.reply(Sundayurl);
        // suninfo = dataSun.split("blind")[1].split("<h2>")[1].split("</div>")[0];
        // suninfo = suninfo.replace(/<\/h2>/g, "").replace(/<p>/g, "").replace(/<\/p>/g, "").replace(/         /g, "");
        // replier.reply(suninfo);
        
        /*Kakao.sendLink(room,
        {
          "link_ver" : "4.0",
          "template_id" : 59697,
          "template_args" : {
                                "suntitle" : dataSundate,
                                "sunimage" : dataSun,
                                "sunlink" : sunlink
                            }
        },
         "custom", true);*/
      }
    }
    if(msg.startsWith("!스카우터")){
      nickname = msg.split(" ")[1];
      if(nickname == undefined){
        replier.reply("캐릭터 이름을 입력해주세요.\n\n!스카우터 (캐릭터 이름) : 당신의 메창력을 수치로 변환하여 보여줍니다.\n본캐의 닉네임을 입력해주세요.");
      }
      else{
        maplegg = "https://maple.gg/u/" + nickname;
        dataC1 = org.jsoup.Jsoup.connect(maplegg).get();
        dataC1 = dataC1.toString();
        if(dataC1.indexOf("검색결과 없음") != -1){
          replier.reply(nickname + " >> 그런 캐릭터는 없습니다.\n\n!스카우터 (캐릭터 이름) : 당신의 메창력을 수치로 변환하여 보여줍니다.\n본캐의 닉네임을 입력해주세요.");
        }
        else{
          dataU1 = dataC1.split("유니온 <i")[1];
          dataU2 = dataU1.split("업적")[0];
          if(dataU2.indexOf("user-summary-no-data") == -1){
            var unirep = guitarM.getUnion(dataU1, dataU2);
            var unionlvl = parseInt(unirep.split("Lv.")[1].split("유니온")[0]);

            dataM1 = dataC1.split("무릉 히스토리")[1].split("</section")[0];
            if(dataM1.indexOf("기록이 없습니다.") == -1 && dataC1.indexOf("user-summary-floor font-weight-bold") != -1){
              var murep = guitarM.getMureung(nickname, dataM1, dataC1);
              var mulvl = parseInt(murep.split("최고기록")[1].split("기준 : ")[1].split("층")[0]);
              var temparr = ["-", "-", "-", "-", "-", "-", "-"];
              var inforep = guitarM.getInform(temparr, dataC1);
              var characlvl = parseInt(inforep.split("Lv.")[1].split("("));

              var maple3dae = guitarM.getScouter(characlvl, mulvl, unionlvl);
              var scoutres = guitarM.get3Dae(maple3dae);

              replier.reply(nickname + " 캐릭터의 메창력 수치\n\n캐릭터 레벨 : " + characlvl + "\n무릉 층수 : " + mulvl + "\n유니온 레벨 : " + unionlvl + "\n[총합 : " + maple3dae + "]\n\n" + scoutres);
            }
            else{
              temparr = ["-", "-", "-", "-", "-", "-", "-"];
              inforep = guitarM.getInform(temparr, dataC1);
              characlvl = parseInt(inforep.split("Lv.")[1].split("("));
              maple3dae = guitarM.getScouter(characlvl, 0, unionlvl);
              scoutres = guitarM.get3Dae(maple3dae);
              replier.reply(nickname + " >> 이 캐릭터는 최근 무릉 기록이 없습니다. 무릉 층수는 0으로 계산됩니다.\n\n" + nickname + " 캐릭터의 메창력 수치\n\n캐릭터 레벨 : " + characlvl + "\n무릉 층수 : 0" + "\n유니온 레벨 : " + unionlvl + "\n[총합 : " + maple3dae + "]\n\n" + scoutres);
            }
          }
          else{
            replier.reply("이 캐릭터는 메창력 조회가 되지 않습니다. (메지지에서 유니온레벨 조회가 되지 않습니다.)");
          }
        }
      }
    }
    if(msg.startsWith("!스킬")){
      const skillM = require('Skill');
      var skilljob = msg.split(" ")[1];
      if(skilljob == undefined){
        replier.reply("직업을 입력해주세요.\n\n직업 목록 : 히어로, 팔라딘, 다크나이트, 불독, 썬콜, 비숍, 보우마스터, 신궁, 패스파인더, 나이트로드, 섀도어, 듀얼블레이드, 바이퍼, 캡틴, 캐논슈터, 소울마스터, 플레임위자드, 윈드브레이커, 나이트워커, 스트라이커, 미하일, 블래스터, 배틀메이지, 와일드헌터, 메카닉, 제논, 데몬슬레이어, 데몬어벤져, 아란, 에반, 루미너스, 메르세데스, 팬텀, 은월, 카이저, 카인, 카데나, 엔젤릭버스터, 아델, 일리움, 칼리, 아크, 라라, 호영, 제로, 키네시스, 모험가 전사, 모험가 마법사, 모험가 궁수, 모험가 도적, 모험가 해적, 시그너스 기사단, 레지스탕스, 데몬, 영웅, 노바, 레프, 아니마, 전사, 마법사, 궁수, 도적, 해적, 모험가, 공용");
      }
      else{
        var jobcode = skillM.getJobcode(skilljob);
        if(jobcode == -1){
          replier.reply(skilljob + " >> 입력한 직업이 데이터베이스에 존재하지 않습니다. 다시 확인해주세요.\n\n직업 목록 : 히어로, 팔라딘, 다크나이트, 불독, 썬콜, 비숍, 보우마스터, 신궁, 패스파인더, 나이트로드, 섀도어, 듀얼블레이드, 바이퍼, 캡틴, 캐논슈터, 소울마스터, 플레임위자드, 윈드브레이커, 나이트워커, 스트라이커, 미하일, 블래스터, 배틀메이지, 와일드헌터, 메카닉, 제논, 데몬슬레이어, 데몬어벤져, 아란, 에반, 루미너스, 메르세데스, 팬텀, 은월, 카이저, 카인, 카데나, 엔젤릭버스터, 아델, 일리움, 칼리, 아크, 라라, 호영, 제로, 키네시스, 모험가 전사, 모험가 마법사, 모험가 궁수, 모험가 도적, 모험가 해적, 시그너스 기사단, 레지스탕스, 데몬, 영웅, 노바, 레프, 아니마, 전사, 마법사, 궁수, 도적, 해적, 모험가, 공용");
        }
        else{
          var chkskillname = msg.split(" ")[2];
          var skillnameinput = msg.slice(msg.indexOf(" ", 5) + 1, msg.length);
          if(chkskillname == undefined){
            var skillList = skillM.getJobskillList(jobcode);
            replier.reply(skillList);
          }
          else{
            var skillcode = skillM.getJobskillcode(jobcode, skillnameinput);
            if(skillcode == -1){
              replier.reply(skillnameinput + " >> 입력한 스킬이 해당 [" + skillM.getJobname(jobcode) + "] 직업의 스킬 목록에 없습니다. 해당 스킬이 공용 스킬인지, 잘못 입력하였는지 확인해주십시오.");
            }
            else{
              var skillname = skillM.getJobskillname(jobcode, skillcode);
              var skilldesc1 = skillM.getJobskilldesc1(jobcode, skillcode);
              var skilldesc2 = skillM.getJobskilldesc2(jobcode, skillcode);
              var skilldesc3 = "-";
              var skillimage1 = skillM.getJobskillimage1(jobcode, skillcode);
              var skillimage2 = skillM.getJobskillimage2(jobcode, skillcode);           
              // Kakao.sendLink(room,
              //   {
              //     "link_ver" : "4.0",
              //     "template_id" : 60491,
              //     "template_args" : {
              //                           "skillname" : skillname,
              //                           "skilldesc1" : skilldesc1,
              //                           "skilldesc2" : skilldesc2,
              //                           "skillimage1" : skillimage1,
              //                           "skillimage2" : skillimage2
              //                       }
              //   },
              //    "custom", true);
              var skillrep = skillM.getJobname(jobcode) + " : " + skillname;
              skillrep += "\n\n" + skilldesc1;
              skillrep += "\n" + skilldesc2;
              replier.reply(skillrep);
              java.lang.Thread.sleep(2000);
                 if(skilldesc1 == "하단 참조"){
                   skilldesc3 = skillM.getJobskilldesc3(jobcode, skillcode);
                   replier.reply(skilldesc3);
                 }
            }
          }
        }
      }
    }
    if(msg.startsWith("!스타시뮬")){
      var sfsrep = guitarM.getSFsimulation(msg);
      replier.reply(sfsrep);
    }
    if(msg.startsWith("!스타포스")){
      var sfrep = guitarM.getStarforce(msg);
      if(sfrep[1] != "☆"){ replier.reply(sfrep); }
      else{
        var sftitle = "";
        var sfimage = sfrep.split("☆")[1];
        var sflink = sfrep.split("com/")[1];
        if(sfrep[0] == "a"){ sftitle = "스타포스 누적 수치 표"; }
        else{ sftitle = "놀장 누적 수치 표"; }
        Kakao.sendLink(room,
          {
            "link_ver" : "4.0",
            "template_id" : 63410,
            "template_args" : {
                                  "image" : sfimage,
                                  "imagelink" : sflink,
                                  "imagetitle" : sftitle
                              }
          },
           "custom", true);
      }
    }
    if(msg.startsWith("!시드링")){
      const seedM = require('Seed');
      var seedrep = seedM.getSeed(msg);
      // var seedrep = seedM.getSeedtest(msg);
      if(seedrep.slice(0, 1) != "★"){
        replier.reply(seedrep);
      }
      else{
        var seedname = seedrep.split("★")[1];
        var seeddesc1 = seedrep.split("★")[2];
        var seeddesc2 = seedrep.split("★")[3];
        var seedeffect = seedrep.split("★")[4];
        var seedimage = seedrep.split("★")[5];
        // Kakao.sendLink(room,
        //             {
        //               "link_ver" : "4.0",
        //               "template_id" : 61614,
        //               "template_args" : {
        //                                     "itemname" : seedname,
        //                                     "itemdesc1" : seeddesc1,
        //                                     "itemdesc2" : seeddesc2,
        //                                     "itemimage" : seedimage
        //                                 }
        //             },
        //              "custom", true);
        var seedrep2 = seedname;
        seedrep2 += "\n\n" + seeddesc1;
        seedrep2 += "\n" + seeddesc2;
        replier.reply(seedrep2);
        java.lang.Thread.sleep(2000);
        replier.reply(seedeffect);
      }
    }
    if(msg.startsWith("!시드정보")){
      const seedM2 = require('Seed');
      seedrep = seedM2.getSeedInfo(msg);
      replier.reply(seedrep);
    }
    if(msg == "!실시간검색어" || msg == "!실검"){
      dataRT = "";
      try{
        dataRT = org.jsoup.Jsoup.connect("https://api.signal.bz/news/realtime").ignoreContentType(true).get().toString();
        dataRT = dataRT.split("top10")[1].split("articles")[0];
      }
      catch(e){
        replier.reply(e);
      }
      dataRTarr = [];
      var tempRT = "";
      for(i = 0; i < 10; ++i){
        tempRT = dataRT.split("keyword\":\"")[i+1].split("\",\"")[0];
        dataRTarr.push(tempRT);
      }
      // Kakao.sendLink(room,
      //   {
      //     "link_ver" : "4.0",
      //     "template_id" : 59549,
      //     "template_args" : {
      //                          "title0" : dataRTarr[0], "title1" : dataRTarr[1], "title2" : dataRTarr[2], "title3" : dataRTarr[3], "title4" : dataRTarr[4], 
      //                          "image0" : "https://cdn.icon-icons.com/icons2/2249/PNG/512/numeric_box_outline_icon_139017.png", "image1" : "https://cdn.icon-icons.com/icons2/2249/PNG/512/numeric_box_outline_icon_139333.png", "image2" : "https://cdn.icon-icons.com/icons2/2249/PNG/512/numeric_box_outline_icon_139330.png", "image3" : "https://cdn.icon-icons.com/icons2/2249/PNG/512/numeric_box_outline_icon_139327.png", "image4" : "https://cdn.icon-icons.com/icons2/2249/PNG/512/numeric_box_outline_icon_139325.png"
      //                       }
      //   },
      //    "custom", true);
      // Kakao.sendLink(room,
      //   {
      //     "link_ver" : "4.0",
      //     "template_id" : 59549,
      //     "template_args" : {
      //                          "title0" : dataRTarr[5], "title1" : dataRTarr[6], "title2" : dataRTarr[7], "title3" : dataRTarr[8], "title4" : dataRTarr[9], 
      //                          "image0" : "https://cdn.icon-icons.com/icons2/2249/PNG/512/numeric_box_outline_icon_139321.png", "image1" : "https://cdn.icon-icons.com/icons2/2249/PNG/512/numeric_box_outline_icon_139318.png", "image2" : "https://cdn.icon-icons.com/icons2/2249/PNG/512/numeric_box_outline_icon_139315.png", "image3" : "https://cdn.icon-icons.com/icons2/2249/PNG/512/numeric_box_outline_icon_139312.png", "image4" : "https://cdn.icon-icons.com/icons2/2249/PNG/512/numeric_box_outline_icon_139337.png"
      //                       }
      //   },
      //    "custom", true);
      var RTrep = "실시간 검색어\n";
      RTrep += "\n1. " + dataRTarr[0];
      RTrep += "\n2. " + dataRTarr[1];
      RTrep += "\n3. " + dataRTarr[2];
      RTrep += "\n4. " + dataRTarr[3];
      RTrep += "\n5. " + dataRTarr[4];
      RTrep += "\n6. " + dataRTarr[5];
      RTrep += "\n7. " + dataRTarr[6];
      RTrep += "\n8. " + dataRTarr[7];
      RTrep += "\n9. " + dataRTarr[8];
      RTrep += "\n10. " + dataRTarr[9];
      replier.reply(RTrep);
    }
    if(msg.startsWith("!심볼")){
      const symbolM = require('Symbol');
      var symbolinput = msg.split(" ")[1];
      if(symbolinput == undefined){
        replier.reply("심볼 이름을 띄어쓰기 없이 입력해주세요.\n\n아케인심볼 종류 : 소멸의 여로, 츄츄 아일랜드, 꿈의 도시 레헬른, 신비의 숲 아르카나, 기억의 늪 모라스, 태초의 바다 에스페라\n어센틱심볼 종류 : 신의 도시 세르니움, 호텔 아르크스\n\n!심볼 (심볼 이름) (현재 레벨) (현재 성장치) : 현재 심볼상태에서 다음 레벨까지 필요한 성장치, 만렙까지 필요한 성장치, 이번에 가능한 모든 레벨업을 하였을때 드는 세금, 만렙까지 드는 잔여 세금을 보여줍니다.\n(심볼 이름)은 띄어쓰기 없이 입력해주셔야 합니다.\n(현재 레벨)을 생략할 시 각 심볼의 일일퀘스트와 스페셜컨텐츠의 수급량을 알려줍니다.\n(현재 성장치)를 생략할 시 0으로 계산하여 보여줍니다.");
      }
      else{
        var symbolind = symbolM.getSymbol(symbolinput);
        if(symbolind == -1){
          replier.reply(symbolinput + " >> 심볼 이름을 잘못 입력하셨습니다. 혹시 띄어쓰기를 포함하여 입력하셨다면, 띄어쓰기 없이 다시 입력하여주세요.\n\n아케인심볼 종류 : 소멸의 여로, 츄츄 아일랜드, 꿈의 도시 레헬른, 신비의 숲 아르카나, 기억의 늪 모라스, 태초의 바다 에스페라\n어센틱심볼 종류 : 신의 도시 세르니움, 호텔 아르크스\n\n!심볼 (심볼 이름) (현재 레벨) (현재 성장치) : 현재 심볼상태에서 다음 레벨까지 필요한 성장치, 만렙까지 필요한 성장치, 이번에 가능한 모든 레벨업을 하였을때 드는 세금, 만렙까지 드는 잔여 세금을 보여줍니다.\n(심볼 이름)은 띄어쓰기 없이 입력해주셔야 합니다.\n(현재 레벨)을 생략할 시 각 심볼의 일일퀘스트와 스페셜컨텐츠의 수급량을 알려줍니다.\n(현재 성장치)를 생략할 시 0으로 계산하여 보여줍니다.");
        }
        else if(symbolind == 9){
          var symbollevel = msg.split(" ")[2];
          var symbolexp = msg.split(" ")[3];
          if(symbollevel == undefined){
            replier.reply("심볼 레벨이 입력되지 않았습니다.");
          }
          else if(isNaN(symbollevel)){
            replier.reply(symbollevel + " >> 심볼 레벨이 숫자가 아닙니다.");
          }
          else if(symbollevel < 2 || symbollevel > 20){
            replier.reply(symbollevel + " >> 심볼 레벨이 범위(2~20)를 초과하였습니다.");
          }
          else{
            if(symbolexp == undefined){
              var symbolexp2 = 0;
              replier.reply("현재 성장치가 누락되어 0으로 계산됩니다.");
              var symcatal1 = symbolM.getSymbolcatal1(symbollevel, symbolexp2)
              var symcatal2 = symbolM.getSymbolcatal2(symbollevel, symbolexp2)
              replier.reply("아케인 심볼 " + symbollevel + " 레벨, 성장치 " + symbolexp2 + " 에서\n아케인 카탈리스트를 쓴 후 레벨은 " + symcatal1 + ", 성장치는 " + symcatal2 + " 입니다.");
            }
            else if(isNaN(symbolexp)){
              replier.reply(symbolexp + " >> 심볼 성장치가 숫자가 아닙니다.");
            }
            else if(symbolexp < 0){
              replier.reply(symbolexp + " >> 현재 성장치는 음수가 될 수 없습니다.");
            }
            else{
              var symcatal1 = symbolM.getSymbolcatal1(symbollevel, symbolexp)
              var symcatal2 = symbolM.getSymbolcatal2(symbollevel, symbolexp)
              replier.reply("아케인 심볼 " + symbollevel + " 레벨, 성장치 " + symbolexp + " 에서\n아케인 카탈리스트를 쓴 후 레벨은 " + symcatal1 + ", 성장치는 " + symcatal2 + " 입니다.");
            }
          }
        }
        else{
          var symbollevel = msg.split(" ")[2];
          var symbolexp = msg.split(" ")[3];
          if(symbollevel == undefined){
            var symbolname = symbolM.getSymbolname(symbolind);
            var symboldaily = symbolM.getSymboldaily(symbolind);
            var symbolspecial = symbolM.getSymbolspecial(symbolind);
            // var symbolimage = symbolM.getSymbolimage(symbolind);
            // Kakao.sendLink(room,
            //   {
            //     "link_ver" : "4.0",
            //     "template_id" : 60920,
            //     "template_args" : {
            //                           "symbolname" : symbolname,
            //                           "symboldaily" : symboldaily,
            //                           "symbolspecial" : symbolspecial,
            //                           "symbolimage" : symbolimage
            //                       }
            //   },
            //   "custom", true);
            symrep = symbolname + '\n\n';
            symrep += symboldaily + '\n';
            symrep += symbolspecial;
            replier.reply(symrep)
          }
          else if(isNaN(symbollevel)){
            replier.reply(symbollevel + " >> 심볼 레벨이 숫자가 아닙니다.");
          }
          else if(symbollevel < 1 || symbollevel > 19){
            replier.reply(symbollevel + " >> 심볼 레벨이 범위(1~19)를 초과하였습니다.");
          }
          else if((symbolind == 6 || symbolind == 7 || symbolind == 8 || symbolind == 9) && symbollevel > 10){
            replier.reply(symbollevel + " >> 심볼 레벨이 범위(1~10)를 초과하였습니다.");
          }
          else if(symbolexp == undefined){
            symbolexp = 0;
            replier.reply("현재 성장치가 누락되어 0으로 계산됩니다.");
            symbolname = symbolM.getSymbolname(symbolind);
            var sbexps = symbolM.getSymbolexp(symbolind, symbollevel);
            var sbexpf = symbolM.getSymbolfinalexp(symbolind, symbollevel);
            var sbmesos = symbolM.getSymbolmeso(symbolind, symbollevel);
            var sbcmesos = symbolM.getSymbolcumulmeso(symbolind, symbollevel);
            replier.reply(symbolname + "\n\n" + (parseInt(symbollevel) + 1) + " 레벨까지 필요 성장치 : " + sbexps + "\n만렙까지 필요 성장치 : " + sbexpf + "\n이번 세금 : " + numberWithCommas(sbmesos) + " 메소\n잔여 세금 : " + numberWithCommas(sbcmesos) + " 메소");
          }
          else if(isNaN(symbolexp)){
            replier.reply(symbolexp + " >> 심볼 성장치가 숫자가 아닙니다.");
          }
          else{
            if(symbolexp < 0){
              replier.reply(symbolexp + " >> 현재 성장치는 음수가 될 수 없습니다.");
            }
            else{
              symbolname = symbolM.getSymbolname(symbolind);
              sbexps = symbolM.getSymbolexp(symbolind, symbollevel) - symbolexp;
              sbexpf = symbolM.getSymbolfinalexp(symbolind, symbollevel) - symbolexp;
              if(sbexpf < 0){replier.reply("성장치가 최대치를 초과하였습니다.");}
              else{
                sbmesos = symbolM.getSymbolmeso(symbolind, symbollevel);
                sbcmesos = symbolM.getSymbolcumulmeso(symbolind, symbollevel);
                while(sbexps < 0){
                  ++symbollevel;
                  var tempexps = symbolM.getSymbolexp(symbolind, symbollevel);
                  sbmesos += symbolM.getSymbolmeso(symbolind, symbollevel);
                  sbexps += tempexps;
                }
                replier.reply(symbolname + "\n\n" + (parseInt(symbollevel) + 1) + " 레벨까지 필요 성장치 : " + sbexps + "\n만렙까지 필요 성장치 : " + sbexpf + "\n이번 세금 : " + numberWithCommas(sbmesos) + " 메소\n잔여 세금 : " + numberWithCommas(sbcmesos) + " 메소");
              }
            }
          }
        }
      }
    }
    if(msg.startsWith("!아이템")){
      const itemM = require("Item");
      var itemrep = itemM.getItem(msg);

      if(itemrep[0] == "☆"){
        wpn = itemrep.split("☆")[1];
        wprep = itemrep.split("☆")[2];
        wpicon = itemrep.split("☆")[3];
        Kakao.sendLink(room,
          {
            "link_ver" : "4.0",
            "template_id" : 61614,
            "template_args" : {
              "itemname" : wpn,
              "itemimage" : wpicon
            }
          },
          "custom", true);
          java.lang.Thread.sleep(3000);
          replier.reply(wprep);
        }
      else if(itemrep[0] == "★"){
        armn = itemrep.split("★")[1];
        armrep = itemrep.split("★")[2];
        armicon = itemrep.split("★")[3];
        Kakao.sendLink(room,
          {
            "link_ver" : "4.0",
            "template_id" : 61614,
            "template_args" : {
              "itemname" : armn,
              "itemimage" : armicon
            }
          },
          "custom", true);
          java.lang.Thread.sleep(3000);
          replier.reply(armrep);
      }
      else if(itemrep[0] == "○"){
        acn = itemrep.split("○")[1];
        acrep = itemrep.split("○")[2];
        acicon = itemrep.split("○")[3];
        Kakao.sendLink(room,
          {
            "link_ver" : "4.0",
            "template_id" : 61614,
            "template_args" : {
              "itemname" : acn,
              "itemimage" : acicon
            }
          },
          "custom", true);
          java.lang.Thread.sleep(3000);
          replier.reply(acrep);
      }
      else{
        replier.reply(itemrep);
      }
    }
    if(msg.startsWith("!어빌") || msg.startsWith("!어빌리티")){
      const abilM = require("Ability");
      var abilrep = abilM.getAbil(msg);
      replier.reply(abilrep);
    }
    if(msg == "!업데이트" || msg == "!업뎃"){
      var mapleHome = "https://maplestory.nexon.com/";
      var dataUP = org.jsoup.Jsoup.connect("https://maplestory.nexon.com/News/Update").get().toString();
      var updaterep = guitarM.getUpdate(mapleHome, dataUP);
      replier.reply(updaterep);
    }
    if(msg.startsWith("!영어로") || msg.startsWith("!영어")){
      var engword = msg.split(" ")[1];
      var engdict = org.jsoup.Jsoup.connect("https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=0&ie=utf8&query=" + engword + "+영어로").get().toString();      
      var engwordmean = "";
      var engwordex = "";
      if(engdict.indexOf("api_txt_lines\">") != -1){
        if(engdict.split("api_txt_lines\">").length > 2){
          for(i = 1; i < engdict.split("api_txt_lines\">").length; ++i){
            engwordmean += i + ". " + engdict.split("api_txt_lines\">")[i].split("</p>")[0];
            engwordmean += "\n";
          }
        }
        else{
          engwordmean += engdict.split("api_txt_lines\">")[1].split("</p>")[0];
        }
        engwordmean = engwordmean.slice(0, engwordmean.length - 1);
        if(engdict.indexOf("span lang=\"en\">") != -1){
          engwordex = engdict.split("span lang=\"en\">")[1].split("</span>")[0];
        }
      }
      var engrep = "";
      if(engwordmean != ""){
        if(engwordex != ""){
          engrep = engword + "\n\n" + engwordmean + "\n\n" + engwordex;
        }
        else{
          engrep = engword + "\n\n" + engwordmean;
        }
      }
      else{
        engrep = engword + " >> 사전 검색결과가 없습니다.";
      }
      replier.reply(engrep);
    }
    if(msg.startsWith("!운빨")){
      var lukrep = guitarM.getLucky(msg);
      replier.reply(lukrep);
    }
    if(msg.startsWith("!원주율") || msg.startsWith("!파이")){
      const bomaM = require('bomadata');
      var pirep = bomaM.bomaPI;

      var pidigit = msg.split(" ")[1];
      if(pidigit == undefined){ replier.reply(pirep.slice(0, 102)); }
      else if(isNaN(pidigit)){ replier.reply("숫자가 아닙니다. 2~10000사이의 숫자를 입력해주세요."); }
      else if(parseInt(pidigit) < 2 || parseInt(pidigit) > 10000){ replier.reply("2~10000사이의 숫자를 입력해주세요."); }
      else{
        replier.reply(pirep.slice(0, 2+parseInt(pidigit)));
      }
    }
    if(msg == "!이벤트" || msg == "!ㅇㅂㅌ"){      
      dataE = org.jsoup.Jsoup.connect("https://cs.nexon.com/HelpBoard/popuphelpview/22065").get();
      dataE = dataE.toString();
      day = new Date();
      var eventtitle = day.getFullYear() + "년 " + (day.getMonth() + 1) + "월 이벤트 일정!";
      dataE3 = dataE.split("tbl_col")[1];
      var eventimage = dataE3.split("img src=\"")[1].split("\"")[0];
      var eventlink = eventimage.split("http://help.nexon.com")[1];
      // Kakao.sendLink(room,
      //   {
      //     "link_ver" : "4.0",
      //     "template_id" : 59585,
      //     "template_args" : {
      //                           "eventtitle" : eventtitle,
      //                           "eventimage" : eventimage,
      //                           "eventimagelink" : eventlink
      //                       }
      //   },
      //    "custom", true);
      var eventrep = eventtitle;
      eventrep += "\n링크 : http://help.nexon.com" + eventlink;
      replier.reply(eventrep);
    }
    if(msg.startsWith("!익성비")){
      var extremerep = guitarM.getExtreme(sender, msg);
      replier.reply(extremerep);
    }
    if(msg.startsWith("!직업추천")){
      const jobM2 = require('Job');
      chkjob = jobM2.getJobRecommend(msg);
      jobmention = "-";
      if(chkjob != -1){
        var jobname = jobM2.getJobname(chkjob);
        var jobdesc = jobM2.getJobdesc(chkjob);
        var jobimage = jobM2.getJobimage(chkjob);
        var jobweb = jobM2.getJobweb(chkjob);
        jobmention = jobM2.mentions[chkjob];
        Kakao.sendLink(room,
        {
          "link_ver" : "4.0",
          "template_id" : 59546,
          "template_args" : {
                              "jobname" : jobname,
                              "jobdesc" : jobdesc,
                              "jobimage" : jobimage,
                              "jobmobweb" : jobweb,
                              "jobpcweb" : jobweb
                            }
        },
          "custom", true);
        }
      else{
        replier.reply("입력하신 옵션이 올바르지 않습니다. 확인 후 다시 입력해주세요.\n\n!직업추천 [옵션] : 메이플스토리에 존재하는 직업 중에 무작위로 추첨을 하여 보여줍니다. 옵션은 전사, 마법사, 궁수, 도적, 해적, 힘(STR), 인트(INT), 덱스(DEX), 럭(LUK), 특수 중에서 고를수 있습니다. 생략하면 전체 중에서 무작위로 추첨합니다.");
      }
        if(jobmention != "-"){
          replier.reply(jobmention);
        }
    }
    if(msg.startsWith("!최종뎀") || msg.startsWith("!최종데미지") || msg.startsWith("!최종")){
      var finaldam = guitarM.getFinal(msg);
      replier.reply(finaldam);
    }
    if(msg.startsWith("!추옵") || msg.startsWith("!추가옵션")){
      var weaponName = msg.split(" ")[1];
      if(weaponName == undefined){
        replier.reply("무기 이름이 누락되었습니다.\n\n!추옵/!추가옵션 (무기이름) : 각 무기에 해당하는 추가옵션표를 보여줍니다. 괄호 안에는 순수 무기공격력이 들어갑니다. (순서 : 우트가르드, 파프니르, 앱솔랩스, 아케인셰이드, 제네시스)\n무기이름 대신 그 무기를 사용하는 직업(전용무기가 아닌 경우엔 나오지 않을 수 있음)을 적어도 됩니다.");
      }
      else{
        const wpaddM = require('Weaponaddop');
        var wpaddop = wpaddM.getaddop(weaponName);
        replier.reply(wpaddop);
      }
    }
    if(msg == "!메짱"){      
      nickname = "애플이짱"
      if(nickname == undefined){
        replier.reply("캐릭터 이름을 입력해주세요.\n\n!캐릭터 (캐릭터명) : 메이플 API 기준 캐릭터 관련 정보를 보여줍니다.");
      }
      else{
        urlString = "https://open.api.nexon.com/maplestory/v1/id";

        var answer = org.jsoup.Jsoup.connect(urlString)
        .header("x-nxopen-api-key", nexonKey)
        .data("character_name", nickname)
        .ignoreHttpErrors(true)
        .ignoreContentType(true)
        .get().text();
        ocid = JSON.parse(answer)["ocid"];

        replier.reply("넥슨 openAPI에서 캐릭터의 정보를 조회중입니다.");
        java.lang.Thread.sleep(1000);
        if(ocid == undefined){
          replier.reply("입력하신 닉네임 [" + nickname + "] 으로 검색된 결과가 없습니다. 확인하고 다시 입력해주세요.");
        }
        else{
          urlString2 = "https://open.api.nexon.com/maplestory/v1/character/basic";
          
          day = new Date();
          var date = day.getFullYear() + '-' + (day.getMonth() + 1) + '-' + (day.getDate()-1);

          answer = org.jsoup.Jsoup.connect(urlString2)
          .header("x-nxopen-api-key", nexonKey)
          .data("ocid", ocid)
          .data("date", date)
          .ignoreHttpErrors(true)
          .ignoreContentType(true)
          .get().text();
          character_name = JSON.parse(answer)["character_name"];
          world_name = JSON.parse(answer)["world_name"];
          character_class = JSON.parse(answer)["character_class"];
          character_class_level = JSON.parse(answer)["character_class_level"];
          character_level = JSON.parse(answer)["character_level"];
          character_exp_rate = JSON.parse(answer)["character_exp_rate"];
          character_guild_name = JSON.parse(answer)["character_guild_name"];
          character_image = JSON.parse(answer)["character_image"];
          character_image = shortenURL(character_image);

          replier.reply(character_name + "@" + world_name + "\n" + 
                        "Lv." + character_level + "(" + character_exp_rate + ") " + character_class + " (" + character_class_level + "차)" + "\n" +
                        "길드 : " + character_guild_name + "\n\n" +
                        "캐릭터 이미지 : " + character_image);
        }
      }
    }
    if(msg.startsWith("!캐릭터") || msg.startsWith("!정보")){      
      nickname = msg.split(" ")[1];
      if(nickname == undefined){
        replier.reply("캐릭터 이름을 입력해주세요.\n\n!캐릭터 (캐릭터명) : 메이플 API 기준 캐릭터 관련 정보를 보여줍니다.");
      }
      else{
        urlString = "https://open.api.nexon.com/maplestory/v1/id";

        var answer = org.jsoup.Jsoup.connect(urlString)
        .header("x-nxopen-api-key", nexonKey)
        .data("character_name", nickname)
        .ignoreHttpErrors(true)
        .ignoreContentType(true)
        .get().text();
        ocid = JSON.parse(answer)["ocid"];

        // replier.reply("넥슨 openAPI에서 캐릭터의 정보를 조회중입니다.");
        replier.reply("넥슨 openAPI에서 캐릭터의 정보를 조회중입니다.");
        java.lang.Thread.sleep(1000);
        if(ocid == undefined){
          replier.reply("입력하신 닉네임 [" + nickname + "] 으로 검색된 결과가 없습니다. 확인하고 다시 입력해주세요.");
        }
        else{
          urlString2 = "https://open.api.nexon.com/maplestory/v1/character/basic";
          
          day = new Date();
          var year = day.getFullYear();
          var month = (day.getMonth() + 1);
          month = month.toString();
          if(month.length == 1){month = '0' + month;}
          var dayy = (day.getDate()-1);
          dayy = dayy.toString();
          if(dayy.length == 1){dayy = '0' + dayy;}
          var date = year + '-' + month + '-' + dayy;
          // var date = day.getFullYear() + '-' + (day.getMonth() + 1) + '-' + (day.getDate()-1);

          answer = org.jsoup.Jsoup.connect(urlString2)
          .header("x-nxopen-api-key", nexonKey)
          .data("ocid", ocid)
          .data("date", date)
          .ignoreHttpErrors(true)
          .ignoreContentType(true)
          .get().text();
          character_name = JSON.parse(answer)["character_name"];
          world_name = JSON.parse(answer)["world_name"];
          character_class = JSON.parse(answer)["character_class"];
          character_class_level = JSON.parse(answer)["character_class_level"];
          character_level = JSON.parse(answer)["character_level"];
          character_exp_rate = JSON.parse(answer)["character_exp_rate"];
          character_guild_name = JSON.parse(answer)["character_guild_name"];
          character_image = JSON.parse(answer)["character_image"];
          character_image = shortenURL(character_image);

          replier.reply(character_name + "@" + world_name + "\n" + 
                        "Lv." + character_level + "(" + character_exp_rate + "%) " + character_class + " (" + character_class_level + "차)" + "\n" +
                        "길드 : " + character_guild_name + "\n\n" +
                        "캐릭터 이미지 : " + character_image);
          // replier.reply(answer)
          // replier.reply(ocid + '\n' + date)
        }
      }
    }  
    if(msg.startsWith("!스탯") || msg.startsWith("!스텟")){      
      const jariM3 = require('Jari');
      nickname = msg.split(" ")[1];
      if(nickname == undefined){
        replier.reply("캐릭터 이름을 입력해주세요.\n\n!스탯 (캐릭터명) : 메이플 API 기준 캐릭터 스탯을 보여줍니다.\n(Nexon API 기준 2023-12-21 이후 접속기록이 없는 캐릭터는 조회가 되지 않을 수 있습니다.)");
      }
      else{
        urlString = "https://open.api.nexon.com/maplestory/v1/id";

        var answer = org.jsoup.Jsoup.connect(urlString)
        .header("x-nxopen-api-key", nexonKey)
        .data("character_name", nickname)
        .ignoreHttpErrors(true)
        .ignoreContentType(true)
        .get().text();
        ocid = JSON.parse(answer)["ocid"];

        replier.reply("넥슨 openAPI에서 캐릭터의 스탯을 조회중입니다.");
        java.lang.Thread.sleep(1000);
        if(ocid == undefined){
          replier.reply("입력하신 닉네임 [" + nickname + "] 으로 검색된 결과가 없습니다.\n(Nexon API 기준 2023-12-21 이후 접속기록이 없는 캐릭터는 조회가 되지 않을 수 있습니다.)\n확인하고 다시 입력해주세요.");
        }
        else{
          urlString3 = "https://open.api.nexon.com/maplestory/v1/character/stat";
          
          day = new Date();
          var year = day.getFullYear();
          var month = (day.getMonth() + 1);
          month = month.toString();
          if(month.length == 1){month = '0' + month;}
          var dayy = (day.getDate()-1);
          dayy = dayy.toString();
          if(dayy.length == 1){dayy = '0' + dayy;}
          var date = year + '-' + month + '-' + dayy;
          // var date = day.getFullYear() + '-' + (day.getMonth() + 1) + '-' + (day.getDate()-1);

          answer = org.jsoup.Jsoup.connect(urlString3)
          .header("x-nxopen-api-key", nexonKey)
          .data("ocid", ocid)
          .data("date", date)
          .ignoreHttpErrors(true)
          .ignoreContentType(true)
          .get().text();

          jsondata = JSON.stringify(answer).replace(/\\/g,'');
          jsondata = jsondata.slice(1, jsondata.length-1)
          finalstat = JSON.stringify(JSON.parse(jsondata)['final_stat']).replace(/\\/g,'');
          statmaxATK = finalstat.split('stat_value\":\"')[2].split('\"')[0];  //최대 스탯공격력
          statmaxATK = jariM3.Jari(statmaxATK);
          statDamage = finalstat.split('stat_value\":\"')[3].split('\"')[0];  //데미지
          statDamage = statDamage + "%";
          statBoss = finalstat.split('stat_value\":\"')[4].split('\"')[0];  //보스 몬스터 데미지
          statBoss = statBoss + "%";
          statFinal = finalstat.split('stat_value\":\"')[5].split('\"')[0]; //최종 데미지
          statFinal = statFinal + "%";
          statDefense = finalstat.split('stat_value\":\"')[6].split('\"')[0]; //방어율 무시
          statDefense = statDefense + "%";
          statCrirate = finalstat.split('stat_value\":\"')[7].split('\"')[0]; //크리티컬 확률
          statCrirate = statCrirate + "%";
          statCridam = finalstat.split('stat_value\":\"')[8].split('\"')[0];  //크리티컬 데미지
          statCridam = statCridam + "%";
          statTol = finalstat.split('stat_value\":\"')[9].split('\"')[0]; //상태이상 내성
          statArc = finalstat.split('stat_value\":\"')[15].split('\"')[0]; //아케인포스
          statAuth = finalstat.split('stat_value\":\"')[16].split('\"')[0]; //어센틱포스
          statSTR = finalstat.split('stat_value\":\"')[17].split('\"')[0]; //STR
          statDEX = finalstat.split('stat_value\":\"')[18].split('\"')[0]; //DEX
          statINT = finalstat.split('stat_value\":\"')[19].split('\"')[0]; //INT
          statLUK = finalstat.split('stat_value\":\"')[20].split('\"')[0]; //LUK

          if(finalstat.split('stat_value\":\"')[44] != undefined){
            statDrop = finalstat.split('stat_value\":\"')[29].split('\"')[0]; //아이템 드롭률
            statDrop = statDrop + "%";
            statMeso = finalstat.split('stat_value\":\"')[30].split('\"')[0]; //메소 획득량
            statMeso = statMeso + "%";
            statBuff = finalstat.split('stat_value\":\"')[31].split('\"')[0]; //버프 지속시간
            statBuff = statBuff + "%";
            statCool = finalstat.split('stat_value\":\"')[34].split('\"')[0]; //재사용 대기시간 감소(초)
            statCool = statCool + "초";
            statattTol = finalstat.split('stat_value\":\"')[37].split('\"')[0]; //속성 내성 무시
            statattTol = statattTol + "%";
            statMob = finalstat.split('stat_value\":\"')[33].split('\"')[0]; //일반 몬스터 추가 데미지
            statMob = statMob + "%";
            statCond = finalstat.split('stat_value\":\"')[38].split('\"')[0]; //상태이상 추가 데미지
            statCond = statCond + "%";
            statPower = finalstat.split('stat_value\":\"')[43].split('\"')[0]; //전투력
            statPower = jariM3.Jari(statPower);
          }
          else{
            statDrop = finalstat.split('stat_value\":\"')[28].split('\"')[0]; //아이템 드롭률
            statDrop = statDrop + "%";
            statMeso = finalstat.split('stat_value\":\"')[29].split('\"')[0]; //메소 획득량
            statMeso = statMeso + "%";
            statBuff = finalstat.split('stat_value\":\"')[30].split('\"')[0]; //버프 지속시간
            statBuff = statBuff + "%";
            statCool = finalstat.split('stat_value\":\"')[33].split('\"')[0]; //재사용 대기시간 감소(초)
            statCool = statCool + "초";
            statattTol = finalstat.split('stat_value\":\"')[36].split('\"')[0]; //속성 내성 무시
            statattTol = statattTol + "%";
            statMob = finalstat.split('stat_value\":\"')[32].split('\"')[0]; //일반 몬스터 추가 데미지
            statMob = statMob + "%";
            statCond = finalstat.split('stat_value\":\"')[37].split('\"')[0]; //상태이상 추가 데미지
            statCond = statCond + "%";
            statPower = finalstat.split('stat_value\":\"')[42].split('\"')[0]; //전투력
            statPower = jariM3.Jari(statPower);
          }

          statrep = nickname + " 캐릭터의 스탯 정보\n\n";
          statrep += "전투력 : " + statPower + "\n";
          statrep += "최대 스탯 공격력 : " + statmaxATK + "\n";
          statrep += "데미지 : " + statDamage + "\n";
          statrep += "보스 몬스터 데미지 : " + statBoss + "\n";
          statrep += "최종 데미지 : " + statFinal + "\n";
          statrep += "방어율 무시 : " + statDefense + "\n";
          statrep += "크리티컬 확률 : " + statCrirate + "\n";
          statrep += "크리티컬 데미지 : " + statCridam + "\n";
          statrep += "상태이상 내성 : " + statTol + "\n";
          statrep += "아케인포스 : " + statArc + "\n";
          statrep += "어센틱포스 : " + statAuth + "\n";
          statrep += "STR : " + statSTR + "\n";
          statrep += "DEX : " + statDEX + "\n";
          statrep += "INT : " + statINT + "\n";
          statrep += "LUK : " + statLUK + "\n";
          statrep += "아이템 드롭률 : " + statDrop + "\n";
          statrep += "메소 획득량 : " + statMeso + "\n";
          statrep += "버프 지속시간 : " + statBuff + "\n";
          statrep += "재사용 대기시간 감소(초) : " + statCool + "\n";
          statrep += "속성 내성 무시 : " + statattTol + "\n";
          statrep += "일반 몬스터 추가 데미지 : " + statMob + "\n";
          statrep += "상태이상 추가 데미지 : " + statCond;
          
          replier.reply(statrep);
        }
      }
    }  
    if(msg.startsWith("!본캐")){      
      nickname = msg.split(" ")[1];
      if(nickname == undefined){
        replier.reply("캐릭터 이름을 입력해주세요.\n\n!본캐 (캐릭터명) : 메이플 API 기준 캐릭터 본캐를 보여줍니다.\n(Nexon API 기준 2023-12-21 이후 접속기록이 없는 캐릭터는 조회가 되지 않을 수 있습니다.)");
      }
      else{
        urlString = "https://open.api.nexon.com/maplestory/v1/id";

        var answer = org.jsoup.Jsoup.connect(urlString)
        .header("x-nxopen-api-key", nexonKey)
        .data("character_name", nickname)
        .ignoreHttpErrors(true)
        .ignoreContentType(true)
        .get().text();
        ocid = JSON.parse(answer)["ocid"];

        replier.reply("넥슨 openAPI에서 캐릭터의 본캐를 조회중입니다.");
        java.lang.Thread.sleep(1000);
        if(ocid == undefined){
          replier.reply("입력하신 닉네임 [" + nickname + "] 으로 검색된 결과가 없습니다.\n(Nexon API 기준 2023-12-21 이후 접속기록이 없는 캐릭터는 조회가 되지 않을 수 있습니다.)\n확인하고 다시 입력해주세요.");
        }
        else{
          urlString4 = "https://open.api.nexon.com/maplestory/v1/ranking/union";
          
          day = new Date();
          var year = day.getFullYear();
          var month = (day.getMonth() + 1);
          month = month.toString();
          if(month.length == 1){month = '0' + month;}
          var dayy = (day.getDate()-1);
          dayy = dayy.toString();
          if(dayy.length == 1){dayy = '0' + dayy;}
          var date = year + '-' + month + '-' + dayy;
          // var date = day.getFullYear() + '-' + (day.getMonth() + 1) + '-' + (day.getDate()-1);
          
          answer = org.jsoup.Jsoup.connect(urlString4)
          .header("x-nxopen-api-key", nexonKey)
          .data("date", date)
          .data("ocid", ocid)
          .ignoreHttpErrors(true)
          .ignoreContentType(true)
          .get().text();

          chnum = answer.split('character_name\":\"').length - 1;
          chn = 1;
          bonres = date + " 기준 접속기록이 있는 캐릭터 목록\n\n";

          for(var i = 0; i < chnum; ++i){
            var worldname = answer.split('world_name\":\"')[chn].split('\"')[0];
            var nick = answer.split('character_name\":\"')[chn].split('\"')[0];
            var unionlvl = answer.split('union_level\":')[chn].split(',')[0];

            bonres += nick + '\n';
            bonres += worldname + ', Lv.' + unionlvl;
            ++chn;
            if(chn <= chnum){ bonres += '\n\n';}
          }

          replier.reply(bonres);
        }
      }
    }
    if(msg.startsWith("!코디")){      
      nickname = msg.split(" ")[1];
      if(nickname == undefined){
        replier.reply("캐릭터 이름을 입력해주세요.\n\n!캐릭터 (캐릭터명) : 메이플지지 기준 캐릭터 관련 정보를 보여줍니다.");
      }
      else{
        var maplegg = "https://maple.gg/u/" + nickname;
        var dataC1 = org.jsoup.Jsoup.connect(maplegg).get();
        dataC1 = dataC1.toString();
        var dataarr = ["-", "-", "-", "-", "-", "-", "-"];
        var informrep = guitarM.getInform(dataarr, dataC1);
        if(informrep != "그런 캐릭터는 없습니다."){
          // Kakao.sendLink(room,
          // {
          //   "link_ver" : "4.0",
          //   "template_id" : 59430,
          //   "template_args" : {
          //                         "image" : dataarr[6]
          //                     }
          // },
          //  "custom", true);
          shortrep = shortenURL(dataarr[6]);
          java.lang.Thread.sleep(1000);
          informrep = "캐릭터 이미지 : " + shortrep;
        }
        replier.reply(informrep);
      }
    }    
    if(msg == "!코로나" || msg == "!우한폐렴"){
      var corona = "";
      corona = org.jsoup.Jsoup.connect("http://ncov.mohw.go.kr/").get().toString();
      corona = corona.split("occurrenceStatus\">")[1].split("<!-- 발생현황 -->")[0];
      var cDate = corona.split("livedate\">(")[1].split(",")[0];
      var cDay = corona.split("<span>일일")[1].split("</tr>")[0];
      var cDeath = cDay.split("<span>")[1].split("</span>")[0];
      var coldsick = cDay.split("<span>")[2].split("</span>")[0];
      var cnewsick = cDay.split("<span>")[3].split("</span>")[0];
      var cDiag = cDay.split("<span>")[4].split("</span>")[0];
      var cCumul = corona.split("occur_num\">")[1];
      var ccDiag = cCumul.split("</span>")[2].split("<a")[0];
      var ccDeath = cCumul.split("</span>")[1].split("</div>")[0];
      ccDeath = ccDeath.trim();

      var cRep = cDate + " 코로나 일일 발생현황\n\n";
      cRep += "확진 : " + cDiag;
      cRep += "\n재원 위중증 : " + coldsick;
      cRep += "\n신규 입원 : " + cnewsick;
      cRep += "\n사망 : " + cDeath;
      cRep += "\n\n누적 확진 : " + ccDiag;
      cRep += "\n누적 사망 : " + ccDeath;
      replier.reply(cRep);
    }
    if(msg.startsWith("!큐브")){
      var cuberep = guitarM.getCube(msg);
      replier.reply(cuberep);
    }
    if(msg.startsWith("!퀴즈")){
      const quizM = require('Quiz');
      var qzrep = quizM.getQuiz(msg, room, sender);
      if(qzrep[0] == "☆"){
        var qzimage = qzrep.split("☆")[1];
        var qznum = qzrep.split("☆")[2];
        Kakao.sendLink(room,
                    {
                      "link_ver" : "4.0",
                      "template_id" : 63410,
                      "template_args" : {
                                            "image" : qzimage,
                                            "imagetitle" : "인물퀴즈 #" + qznum,
                                            "imagelink" : qzimage
                                        }
                    },
                     "custom", true);                    
      }
      else{ replier.reply(qzrep); }
    }
    if(msg == "!편의점"){
      var conrep = guitarM.getConvenience(msg);
      replier.reply(conrep);
    }
    if(msg.startsWith("!포스")){
      const mapM2 = require('Map');
      var forcerep = mapM2.getMapForce(msg);
      replier.reply(forcerep);
    }
    if(true/*필터링*/){
      if(msg.indexOf("ㅋㅋㅋ") != -1){
        Api.markAsRead(room);
        var chkday = new Date();
        var hourpath = path + "hour.txt";
        var hourchk = FileStream.read(hourpath);
        if(chkday.getHours() != parseInt(hourchk)){
          FileStream.write(hourpath, chkday.getHours());
          //Api.reload(scriptName);
        }
      }
      if(msg.indexOf("시!") != -1){
        Api.markAsRead(room);
      }
      if(msg == "와!" || msg == "!와" || msg == "와"){
      i = getRandomInt(0, 100);
      if(i < 30){  replier.reply("와!"); }
      }
      if(msg == "?"){
      i = getRandomInt(0, 100);
      if(i < 30){ replier.reply("?"); }
      }
      if(msg.indexOf("아잉") != -1){
      i = getRandomInt(0, 100);
      if(i < 50){ replier.reply("아잉 시러"); }
      }
      if(msg.indexOf("민초") != -1 || msg.indexOf("민트초코") != -1){
      i = getRandomInt(0, 100);
      if(i < 50){ replier.reply("민초 조아"); }
      }
      if(msg.indexOf("로리") != -1){
      rep = msg.replace("로리", "어머");
      i = getRandomInt(0, 100);
      if(i < 50){ replier.reply(rep); }
      }
      if(msg.indexOf("시발") != -1){
      rep = msg.replace("시발", "이런");
      i = getRandomInt(0, 100);
      if(i < 50){ replier.reply(rep); }
      }
      if(msg.indexOf("씨발") != -1){
      rep = msg.replace("씨발", "이런");
      i = getRandomInt(0, 100);
      if(i < 50){ replier.reply(rep); }
      }
      if(msg.indexOf("히오스") != -1 || msg.indexOf("시공") != -1 || msg.indexOf("시 공") != -1  || msg.indexOf("레스토랑") != -1){
      replier.reply("시공 조아");
      }
    }
    if(msg == "!한강" || msg == "!ㅎㄱ"){
      //var riverTemp = Utils.getWebText("http://hangang.dkserver.wo.tc/");
      //var river = guitarM.getHangang(riverTemp);
      var rivertem = org.jsoup.Jsoup.connect("https://hangang.ivlis.kr/aapi.php?type=dgr").get().toString();
      var rivertime = org.jsoup.Jsoup.connect("https://hangang.ivlis.kr/aapi.php?type=time").get().toString();
      rivertem = rivertem.split("<body>")[1].split("</body>")[0].trim();
      rivertime = rivertime.split("<body>")[1].split("</body>")[0].split("에서 ")[1].split("시")[0].replace("\n", "");
      replier.reply(rivertime + "시 기준\n" + rivertem);
    }
    if(msg.startsWith("!확률")){
      var raterep = guitarM.getRate(msg);
      replier.reply(raterep);
    }
    if(!msg.startsWith("!") && msg.endsWith("확률")){      
      var rateRand = getRandomInt(0, 10001);
      var ratrep = parseFloat(rateRand/100);
      replier.reply(msg + " : " + ratrep + "%");
    }
    if(msg == "!후원"){
      replier.reply("여러분의 후원은 보마봇에게 큰 힘이 됩니다.\n언제나 감사합니다.\n\nhttps://toss.me/bomabot");
      moneyrep = "언제나 감사합니다. (^_^)\n\n";
      replier.reply(moneyrep);
    }
    if(msg.startsWith("!")){
      var senderinfo = imageDB.getProfileImage();
      var senderhash = java.lang.String(senderinfo).hashCode();
      var dataB = DataBase.getDataBase("Userdata.txt");
      if(sender != "천한수" && dataB.indexOf(senderhash) == -1){DataBase.appendDataBase("Userdata.txt", "[" + senderhash + " - " + sender + "]\n");  }
      const jobM = require('Job');
      chkjob = jobM.getchkjob(msg);
      jobmention = jobM.getjobmention(msg);

      if(chkjob != -1){
        var jobname = jobM.getJobname(chkjob);
        var jobdesc = jobM.getJobdesc(chkjob);
        var jobimage = jobM.getJobimage(chkjob);
        var jobweb = jobM.getJobweb(chkjob);
        Kakao.sendLink(room,
        {
            "link_ver" : "4.0",
            "template_id" : 59546,
            "template_args" : {
                                "jobname" : jobname,
                                "jobdesc" : jobdesc,
                                "jobimage" : jobimage,
                                "jobmobweb" : jobweb,
                                "jobpcweb" : jobweb
                              }
        },
           "custom", true);
        }
        java.lang.Thread.sleep(3000)
        if(jobmention != "-"){
          //replier.reply(jobmention);
          replier.reply(jobmention);
        }
    }  
}

//아래 4개의 메소드는 액티비티 화면을 수정할때 사용됩니다.
function onCreate(savedInstanceState, activity) {
  var textView = new android.widget.TextView(activity);
  textView.setText("Hello, World!");
  textView.setTextColor(android.graphics.Color.DKGRAY);
  activity.setContentView(textView);
}
function onStart(activity) {}
function onResume(activity) {}
function onPause(activity) {}
function onStop(activity) {}

function mapleupdate(nick) {
  // var isError = JSON.parse(org.jsoup.Jsoup.connect('https://maple.gg/u/'+encodeURI(nick)+'/sync').ignoreContentType(true).get().text()).error;
  // var isDone = JSON.parse(org.jsoup.Jsoup.connect('https://maple.gg/u/'+encodeURI(nick)+'/sync').ignoreContentType(true).get().text()).done;

  // if(isError == true) {
  //     return '유저정보가 없습니다.';
  // } 
  // else {
  //   if(isDone == false){ return '갱신중입니다. 1~10초 내에 반영됩니다.'; }
  //   else{ return '이미 갱신되었습니다.'; }
  // }
  return '이미 갱신되었습니다.';
}
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //최댓값은 제외, 최솟값은 포함
}
function cumulate(arr, ind) {
  var ret = 0;
  for(i = 0; i < ind+1; ++i){
    ret += arr[i];
  }
  return ret;
}
function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}
function gettoday(){
  day = new Date();
  var todaydate = ""; todaydate += day.getFullYear() + "-";
  var todaymonth = "";
  var todayday = "";
  if(day.getMonth() + 1 < 10){ todaymonth = "0" + (day.getMonth()+1);}
  else {todaymonth = (day.getMonth() + 1);}
  todaydate += todaymonth + "-";
  if(day.getDate() - 1 < 10){ todayday = "0" + (day.getDate()-1);}
  else {todayday = (day.getDate() - 1);}
  todaydate += todayday;

  if(todaydate == "2021-12-00"){todaydate = "2021-11-30";}
  if(todaydate == "2022-01-00"){todaydate = "2021-12-31";}
  if(todaydate == "2022-02-00"){todaydate = "2022-01-31";}
  if(todaydate == "2022-03-00"){todaydate = "2022-02-28";}
  if(todaydate == "2022-04-00"){todaydate = "2022-03-31";}
  return todaydate;
}
function getyesterday(){
  day = new Date();
  var yesterdaydate = ""; yesterdaydate += day.getFullYear() + "-";
  var yesterdaymonth = "";
  var yesterdayday = "";
  if(day.getMonth() + 1 < 10){ yesterdaymonth = "0" + (day.getMonth()+1);}
  else {yesterdaymonth = (day.getMonth() + 1);}
  yesterdaydate += yesterdaymonth + "-";
  if(day.getDate() - 1 < 10 && day.getDate() > 1){ yesterdayday = "0" + (day.getDate()-2); }
  else if(day.getDate() == 1){ yesterdayday = "0$"; }
  else {yesterdayday = (day.getDate() - 1);}
  yesterdaydate += yesterdayday;

  if(yesterdaydate == "2021-12-00"){yesterdaydate = "2021-11-30";}
  if(yesterdaydate == "2022-01-00"){yesterdaydate = "2021-12-31";}
  if(yesterdaydate == "2022-01-0$"){yesterdaydate = "2021-12-30";}
  if(yesterdaydate == "2022-02-00"){yesterdaydate = "2022-01-31";}
  if(yesterdaydate == "2022-02-0$"){yesterdaydate = "2022-01-30";}
  if(yesterdaydate == "2022-03-00"){yesterdaydate = "2022-02-28";}
  if(yesterdaydate == "2022-03-0$"){yesterdaydate = "2022-02-27";}
  if(yesterdaydate == "2022-04-00"){yesterdaydate = "2022-03-31";}
  if(yesterdaydate == "2022-04-0$"){yesterdaydate = "2022-03-30";}
  return yesterdaydate;
}
function papagoT(lang1, lang2, value){
  var res = org.jsoup.Jsoup.connect("https://openapi.naver.com/v1/papago/n2mt")
  .header("X-Naver-Client-Id", naverID)
  .header("X-Naver-Client-Secret", naverSecret)
  .data("source", lang1)
  .data("target", lang2)
  .data("text", value)
  .ignoreHttpErrors(true)
  .ignoreContentType(true)
  .post().text();
  var datapapa = JSON.parse(res);
  return datapapa["message"]["result"]["translatedText"];
}
function shortenURL(url){
  res = org.jsoup.Jsoup.connect("https://openapi.naver.com/v1/util/shorturl")
  .header("X-Naver-Client-Id", naverID)
  .header("X-Naver-Client-Secret", naverSecret)
  .data("url", url)
  .ignoreHttpErrors(true)
  .ignoreContentType(true)
  .post().text();
  var dataurl = JSON.parse(res);
  if(dataurl["message"] == "ok"){  return dataurl["result"]["url"];}
  else{ return "fail";}
}
function getRomaname(kname){
  res = org.jsoup.Jsoup.connect("https://openapi.naver.com/v1/krdict/romanization?query=" + kname)
  .header("X-Naver-Client-Id", naverID)
  .header("X-Naver-Client-Secret", naverSecret)//  .data("query", kname)
  .ignoreHttpErrors(true)
  .ignoreContentType(true)
  .post().text();

  return res;
}
function getTest(){
  var Tret = "-";
  var twURL = "https://maplestory.nexon.com/Testworld/Update/";
  res = org.jsoup.Jsoup.connect(twURL).get();
  res = res.toString();
  var latestNum = res.split("news_board")[1].split("Update/")[1].split("\">")[0];
  var savedNum = FileStream.read(path + "test2.txt");
  if(latestNum != savedNum){
    FileStream.write(path + "test2.txt", latestNum);
    var latestUp = org.jsoup.Jsoup.connect(twURL + latestNum).get();
    Tret = latestUp.toString();
    var Ttitle = Tret.split("</em><span>")[1].split("</span>")[0];
    var Tdate = Tret.split("메이플스토리 업데이트가")[1].split("진행되었습니다")[0];
    Tdate = Tdate.replace(/<span lang="EN-US">/g, "").replace(/<\/span>/g, "");
    Tdate = Tdate.slice(1, Tdate.length);
    Tret = Ttitle + "\n\n안녕하세요 용사님!\n메이플스토리 업데이트가 " + Tdate + " 진행되었습니다.\n\n링크 : " + (twURL + latestNum);
  }

  return Tret;
}
function getNotice(){
  var Nret = "-";
  var ntURL = "https://maplestory.nexon.com/News/Notice";
  res = org.jsoup.Jsoup.connect(ntURL).get();
  res = res.toString();
  var dataN1 = res.split("notice ul str")[1].split("notice ul end")[0];
  var dataFirstNotice = dataN1.split("<a href=\"/News/Notice")[1].split("\">")[0];
  var savedNotice = FileStream.read(path + "notice.txt");
  var dataNoticetitle = dataN1.split("<span>")[1].split("</span>")[0];
  var savedtitle = FileStream.read(path + "notice2.txt");
  if(dataFirstNotice != savedNotice){
    FileStream.write(path + "notice.txt", dataFirstNotice);
    FileStream.write(path + "notice2.txt", dataNoticetitle);
    var noticeTitle = dataN1.split("alt=\"")[1].split("\"")[0];
    var noticeContent = dataN1.split("<span>")[1].split("</span>")[0];
    var ntURL2 = ntURL + dataFirstNotice;
    Nret = "<메이플스토리 공지사항>\n\n" +  noticeTitle + " " + noticeContent + "\n\n" + ntURL2;
  }
  else{
    if(dataNoticetitle != savedtitle){
      FileStream.write(path + "notice2.txt", dataNoticetitle);
      noticeTitle = dataN1.split("alt=\"")[1].split("\"")[0];
      noticeContent = dataN1.split("<span>")[1].split("</span>")[0];
      ntURL2 = ntURL + dataFirstNotice;
      Nret = "<메이플스토리 공지사항>(기존 제목 변경 감지)\n\n" +  noticeTitle + " " + noticeContent + "\n\n" + ntURL2;
    }
  }
  return Nret;
}
function getMinute(){
  day = new Date();
  var minu = day.getMinutes();
  var prevmin = FileStream.read(path + "min.txt");
  if(minu != prevmin){
    FileStream.write(path + "min.txt", minu);
    return false;
  }
  else{
    return true;
  }
}

function onNotificationPosted(sbn, sm) {
  var packageName = sbn.getPackageName();
  if (!packageName.startsWith("com.kakao.tal")) return;
  var actions = sbn.getNotification().actions;
  if (actions == null) return;
  var userId = sbn.getUser().hashCode();
  for (var n = 0; n < actions.length; n++) {
      var action = actions[n];
      if (action.getRemoteInputs() == null) continue;
      var bundle = sbn.getNotification().extras;

      var msg = bundle.get("android.text").toString();
      var sender = bundle.getString("android.title");
      var room = bundle.getString("android.subText");
      if (room == null) room = bundle.getString("android.summaryText");
      var isGroupChat = room != null;
      if (room == null) room = sender;
      var replier = new com.xfl.msgbot.script.api.legacy.SessionCacheReplier(packageName, action, room, false, "");
      var icon = bundle.getParcelableArray("android.messages")[0].get("sender_person").getIcon().getBitmap();
      var image = bundle.getBundle("android.wearable.EXTENSIONS");
      if (image != null) image = image.getParcelable("background");
      var imageDB = new com.xfl.msgbot.script.api.legacy.ImageDB(icon, image);
      com.xfl.msgbot.application.service.NotificationListener.Companion.setSession(packageName, room, action);
      if (this.hasOwnProperty("responseFix")) {
        KakaoApiService.createService().login({
          email: Logindata.split("kID:")[1].split("/")[0],
          password: Logindata.split("kpw:")[1].split("/")[0],
          keepLogin: true,
        }).then(e => {
          Kakao.login(e, {
              apiKey: Logindata.split("ksec:")[1].split("/")[0],
              url: 'https://developers.kakao.com'
          });
        }).catch(e => {
          Log.e(e);
        });
          responseFix(room, msg, sender, isGroupChat, replier, imageDB, packageName, userId != 0);
      }
  }
}

var ppgLangcode = [ "ko", "en", "ja", "zh-CN", "zh-TW", "vi", "id", "th", "de", "ru", "es", "it", "fr"];
var banList = [1534153999];

var adminNick = "리부트/273/보마";
var nickname = "";
var jobmention = "";
var chkjob = -1;