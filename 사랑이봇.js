const scriptName = "보마봇";
const path = 'sdcard/kakao/Bots/보마봇/';
const kalingModule = require('kaling').Kakao();
const Kakao = new kalingModule();
let Logindata = FileStream.read(path + "Login.txt");
let myName = FileStream.read(path + "Name.txt");
Kakao.init(Logindata.split("ksec:")[1].split("/")[0], 'https://developers.kakao.com');
Kakao.login(Logindata.split("kID:")[1].split("/")[0], Logindata.split("kpw:")[1].split("/")[0]);
const guitarM = require('Guitar');
const naverID = Logindata.split("nID:")[1].split("/")[0];
const naverSecret = Logindata.split("nsec:")[1].split("/")[0];
const twitterAToken = Logindata.split("tActoken:")[1].split("/")[0]; const twitterATSecret = Logindata.split("tAcsec:")[1].split("/")[0]; const twitterAPIKey = Logindata.split("tAPIkey:")[1].split("/")[0]; const twitterAPISecret = Logindata.split("tAPIsec:")[1].split("/")[0]; const twitterBearerToken = Logindata.split("tBtoken:")[1].split("/")[0];
//아이디어 : 코강/ 
/*
Kakao.send(room,
            {
              "link_ver" : "4.0",
              "template_id" : 59430,
              "template_args" : {
                                    "profile" : dataCname
                                }
            },
             "custom");
*/
function response(room, msg, sender, isGroupChat, replier, imageDB, packageName) {
      
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
          Kakao.send(room,
            {
              "link_ver" : "4.0",
              "template_id" : 59498,
              "template_args" : {
                                    "bossimage" : bimage,
                                    "bossimage2" : bimage2,
                                    "bossname" : bname,
                                    "bossHP" : bHP,
                                    "bossinfo" : binfo
                                }
            },
              "custom");
        }
        else{
          replier.reply(re);
        }
      }
    }
    if((sender == myName || sender == adminNick) && (msg == "!리로드" || msg == "!ㄹㄹ")){
      if(Api.reload(scriptName)){     replier.reply("리로드 성공");      }
      else{  replier.reply("리로드 실패");   }
    }
    if((sender == myName || sender == adminNick) && (msg.startsWith("!답장"))){
      var notices = msg.slice(4, msg.length);
      Api.replyRoom("UniMaple", notices);
    }
    if(msg == "!도움말" || msg == "!명령어"){
      const helpM = require('Help');
      var help = helpM.gethelp();
      replier.reply(help);
    }
    if(msg == "!봇업데이트" || msg == "!봇업뎃"){
      const updateM = require('Update');
      var update = updateM.getupdate();
      replier.reply(update);
    }
    if(msg.indexOf("ㅋㅋㅋ") != -1){
      Api.markAsRead(room);
      var chkday = new Date();
      var hourpath = path + "hour.txt";
      var hourchk = FileStream.read(hourpath);
      if(chkday.getHours() != parseInt(hourchk)){
        FileStream.write(hourpath, chkday.getHours());
        Api.reload(scriptName);
      }
    }
    if((sender == myName || sender == adminNick) && msg.startsWith("테스트")){
      //const fM = require('Food');      replier.reply(fM.foodList.length);
    }    
    if((sender == myName || sender == adminNick) && msg == "!유저정보"){
      var dataB = DataBase.getDataBase("Userdata.txt");  
      replier.reply(dataB);
    }
    if((sender == myName || sender == adminNick) && msg.startsWith("!유저정보삭제")){
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
    if((sender == myName || sender == adminNick) && msg == "!유저정보전체삭제"){
      var isdataB = DataBase.removeDataBase("Userdata.txt");  
      if(isdataB){replier.reply("유저 정보가 삭제되었습니다.");}
      else{replier.reply("유저 정보가 삭제되지 않았습니다.");}
      DataBase.setDataBase("Userdata.txt", "유저 정보\n\n"); 
    }
    if(msg.startsWith("환영합니다! 유니스트 메이플스토리 톡방입니다~")){
      replier.reply("환영합니다~! 보마봇 많은 이용 부탁드려요!");
    }
    if(msg.startsWith("몬파/데일리/마일리지/")){
      replier.reply("황금마차도 챙기라구!");
    }
    if(msg.startsWith("우르스 두 배 15분 전")){
      replier.reply("황금마차 얼른 탑승해~");
    }
    if(msg.startsWith("!경험치")){
      var exprep2 = guitarM.getexpInform(msg);
      replier.reply(exprep2);
    }
    if (msg.startsWith("!날씨"))  {
      if(msg.slice(4) == "" || msg.split(" ")[1] == undefined){
        replier.reply("!날씨 (지역) 형태로 다시 입력해주십시오.\n\n!날씨 (지역) : 그 지역 날씨를 보여줍니다.");
      }
      else{
    	let isarea = encodeURIComponent(msg.slice(4)+" 날씨");
        let area = "https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=0&ie=utf8&query=" + isarea;
        let tempweather = org.jsoup.Jsoup.connect(area).get().select("#main_pack > section.sc_new.cs_weather._weather > div > div.api_cs_wrap > div.weather_box > div.weather_area._mainArea > div.today_area._mainTabContent > div.main_info > div > p > span.todaytemp");
        tempweather = tempweather.toString();
        let firstT = tempweather.indexOf(">"); tempweather = tempweather.slice(firstT+1, tempweather.length);
        let secondT = tempweather.indexOf("<"); tempweather = tempweather.slice(0, secondT);

        let weatheretc = org.jsoup.Jsoup.connect(area).get().select("#main_pack > section.sc_new.cs_weather._weather > div > div.api_cs_wrap > div.weather_box > div.weather_area._mainArea > div.today_area._mainTabContent > div.main_info > div > ul > li:nth-child(1) > p");
        weatheretc = weatheretc.toString();
        let firstW = weatheretc.indexOf(">"); weatheretc = weatheretc.slice(firstW+1, weatheretc.length);
        let secondW = weatheretc.indexOf("<"); weatheretc = weatheretc.slice(0, secondW);
        if(tempweather != "" && weatheretc != "") {
        replier.reply(msg.slice(4) + "의 날씨\n" + tempweather + "℃, " + weatheretc);
        }
        else{
          replier.reply(msg.slice(4) + "에 대한 날씨정보를 찾는 것을 실패하였습니다.");
        }
      }
    }
    if(msg == "!한강" || msg == "!ㅎㄱ"){
      var riverTemp = Utils.getWebText("http://hangang.dkserver.wo.tc/");
      var river = guitarM.getHangang(riverTemp);
      replier.reply(river);
    }
    if(msg.startsWith("!캐릭터") || msg.startsWith("!정보")){      
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
          Kakao.send(room,
          {
            "link_ver" : "4.0",
            "template_id" : 59430,
            "template_args" : {
                                  "profile" : dataarr[0] + " | " + dataarr[1],
                                  "desc" : dataarr[2] + "\n" + dataarr[3] + "\n" + dataarr[4],
                                  "server" : dataarr[5],
                                  "image" : dataarr[6]
                              }
          },
           "custom");
        }
        replier.reply(informrep);
      }
    }
    if(msg.startsWith("!무릉") || msg.startsWith("!시드 ") || msg.startsWith("!유니온") || msg.startsWith("!업적") || msg.startsWith("!길드")){
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
          if(nickname.length < 3 && stair > 0 && stair < 81){
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
            Kakao.send(room,
              {
                "link_ver" : "4.0",
                "template_id" : 60127,
                "template_args" : {
                                      "stair" : stair,
                                      "monstername" : mname,
                                      "monsterlevel" : mlevel,
                                      "monsterhp" : mhpjari,
                                      "monsterchp" : mchpjari,
                                      "monsterinc" : minc,
                                      "monsterimage" : mimage
                                  }
              },
               "custom");
          }
          else{
            if(dataC1.indexOf("검색결과 없음") != -1){
              replier.reply(nickname + " >> 그런 캐릭터는 없습니다.\n\n!무릉 (캐릭터명) : 메이플지지 기준 캐릭터의 최근 무릉 기록과 최고 무릉 기록을 보여줍니다\n\n!무릉 (층수) : 1~80사이의 숫자를 넣으면 해당 층수의 몬스터 정보를 보여줍니다.");
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
          
            if(msg.startsWith("!시드 ")){
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
            if(dataM1.indexOf("기록이 없습니다.") == -1){
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
              replier.reply(nickname + " >> 이 캐릭터는 무릉 기록이 없습니다. 무릉 층수는 0으로 계산됩니다.\n\n" + nickname + " 캐릭터의 메창력 수치\n\n캐릭터 레벨 : " + characlvl + "\n무릉 층수 : 0" + "\n유니온 레벨 : " + unionlvl + "\n[총합 : " + maple3dae + "]\n\n" + scoutres);
            }
          }
          else{
            replier.reply("이 캐릭터는 메창력 조회가 되지 않습니다. (메지지에서 유니온레벨 조회가 되지 않습니다.)");
          }
        }
      }
    }
    if(msg.startsWith("!시드링")){
      const seedM = require('Seed');
      var seedrep = seedM.getSeed(msg);
      if(seedrep.slice(0, 1) != "★"){
        replier.reply(seedrep);
      }
      else{
        var seedname = seedrep.split("★")[1];
        var seeddesc1 = seedrep.split("★")[2];
        var seeddesc2 = seedrep.split("★")[3];
        var seedeffect = seedrep.split("★")[4];
        var seedimage = seedrep.split("★")[5];
        Kakao.send(room,
                    {
                      "link_ver" : "4.0",
                      "template_id" : 61614,
                      "template_args" : {
                                            "itemname" : seedname,
                                            "itemdesc1" : seeddesc1,
                                            "itemdesc2" : seeddesc2,
                                            "itemimage" : seedimage
                                        }
                    },
                     "custom");
        replier.reply(seedeffect);
      }
    }
    if(msg.startsWith("!갱신")){
      nickname = msg.split(" ")[1];
      if(nickname == undefined){      replier.reply("캐릭터 이름을 입력해주세요.\n\n!갱신 (캐릭터이름) : 메이플gg를 갱신합니다.");    }
      else{ replier.reply(mapleupdate(nickname)); }
    }
    if(msg.startsWith("!코디 ")){
      nickname = msg.split(" ")[1];
      if(nickname == undefined){
        replier.reply("캐릭터 이름을 입력해주세요.\n\n!무릉,!시드,!유니온,!업적,!코디 + (캐릭터명) : 메이플지지 기준 캐릭터 관련 정보를 보여줍니다.");
      }
      else{
        maplegg = "https://maple.gg/u/" + nickname;
        dataC1 = org.jsoup.Jsoup.connect(maplegg).get();
        dataC1 = dataC1.toString();

        if(dataC1.indexOf("검색결과 없음") != -1){
          replier.reply("그런 캐릭터는 없습니다.");
        }
        else{ 
          var dataCo = dataC1.split("코디 분석")[1].split("<div class=\"col-6 col-md-8 col-lg-6\">")[0];
          var codirep = guitarM.getCodi(dataCo);
          replier.reply(codirep);
        }
      }
    }
    if(msg == "!코디시뮬"){
      replier.reply("https://maple.gazua.in/coordi\n\nhttps://maple-r.github.io/\n\nhttp://maples.im/");
    }
    if(msg.startsWith("!방무")){
      var mobDef = msg.split(" ")[1];
      var myDef = msg.split(" ")[2];
      var defrep = guitarM.getDefense(mobDef, myDef, msg);
      replier.reply(defrep);
    }
    if(msg.startsWith("!최종뎀") || msg.startsWith("!최종데미지") || msg.startsWith("!최종")){
      var finaldam = guitarM.getFinal(msg);
      replier.reply(finaldam);
    }
    if(msg == "!데굴" || msg == "!데굴데굴" || msg == "!주사위"){
      var dicerep = guitarM.getDice();
      replier.reply(sender + dicerep);
    }
    if(msg.startsWith("!영환") || msg.startsWith("!영환불")){
      var addtitle = ["!"];
      var addn = ["-","-","-","-","-","-","-","-","-","-"];
      var eternalrep = guitarM.getEternal(msg, addtitle, addn);
      var addt = addtitle[0];
      if(eternalrep == "-"){
          Kakao.send(room,
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
             "custom");     
      }   
      else{
        replier.reply(eternalrep);
      }
    }
    if(msg.startsWith("!강환") || msg.startsWith("!강환불")){
      var addtitle = ["!"];
      var addn = ["-","-","-","-","-","-","-","-","-","-"];
      var eternalrep = guitarM.getStrong(msg, addtitle, addn);
      var addt = addtitle[0];
      if(eternalrep == "-"){
          Kakao.send(room,
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
             "custom");     
      }   
      else{
        replier.reply(eternalrep);
      }
    }
    if(msg.startsWith("!경스토리") || msg.startsWith("!겸스토리")){
      var nickname = msg.split(" ")[1];
      if(nickname == undefined){
        replier.reply("캐릭터 이름을 입력해주세요.\n\n!경스토리/!겸스토리 (캐릭터이름) : 캐릭터의 경험치 히스토리를 보여줍니다.");
      }
      else{
        maplegg = "https://maple.gg/u/" + nickname;
        dataC1 = org.jsoup.Jsoup.connect(maplegg).get();
        dataC1 = dataC1.toString();

        var exprep = guitarM.getEXP(nickname, dataC1);
        replier.reply(exprep);
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
    if(msg == "!날짜"){
      var day = new Date();
      replier.reply("오늘은 "+ day.getFullYear() + "년 " + (day.getMonth() + 1) + "월 " + day.getDate() + "일 입니다.");
    }
    if(msg == "!시간"){      
      day = new Date();
      replier.reply("지금은 " + day.getHours() + "시 " + day.getMinutes() + "분 " + day.getSeconds() + "초입니다.");
    }
    if(msg == "!썬데이" || msg == "!선데이"){
      var mapleeventurl = "https://maplestory.nexon.com/News/Event";
      var SundayMaple = org.jsoup.Jsoup.connect(mapleeventurl).get().toString();
      SundayMaple = SundayMaple.split("이벤트 전체보기")[1].split("</div>")[0];
      if(SundayMaple.indexOf("썬데이 메이플") == -1){
        replier.reply("아직 썬데이 메이플 이벤트 공지가 올라오지 않았습니다. 금요일 오전 10시쯤 다시 시도해주세요.");
      }
      else{
        var sunlink = SundayMaple.split("\">썬데이 메이플")[0];
        sunlink = sunlink.slice(sunlink.length - 30, sunlink.length).split("<a href=\"")[1];
        var Sundayurl = "https://maplestory.nexon.com" + sunlink;
        var dataSun = org.jsoup.Jsoup.connect(Sundayurl).get();
        dataSun = dataSun.toString();
        var dataSundate = dataSun.split("event_date\">")[1];
        dataSundate = dataSundate.split(" 00시 00분")[0];
        dataSun = dataSun.split("썬데이 메이플!\" src=\"")[1];
        dataSun = dataSun.split("\" usemap=")[0];

        Kakao.send(room,
        {
          "link_ver" : "4.0",
          "template_id" : 59697,
          "template_args" : {
                                "suntitle" : dataSundate,
                                "sunimage" : dataSun,
                                "sunlink" : sunlink
                            }
        },
         "custom");
      }
    }
    if(msg == "!업데이트" || msg == "!업뎃"){
      var mapleHome = "https://maplestory.nexon.com/";
      var dataUP = org.jsoup.Jsoup.connect("https://maplestory.nexon.com/News/Update").get().toString();
      var updaterep = guitarM.getUpdate(mapleHome, dataUP);
      replier.reply(updaterep);
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
    if(msg.startsWith("!그님티") || msg.startsWith("!롤")){
      if(msg.split(" ")[1] == undefined){
        replier.reply("닉네임을 입력해주세요.\n\n!그님티 (롤아이디) : 해당 아이디의 티어를 보여줍니다.");
      }
      else{
        var lolnick = msg.slice(5);
        var opgg = "https://www.op.gg/summoner/userName=" + lolnick;
        var dataL = org.jsoup.Jsoup.connect(opgg).get().toString();
        var lolrep = guitarM.getLol(dataL, lolnick);
        replier.reply(lolrep);
      }
    }
    if(msg.startsWith("!똥캐")){
      replier.reply("소울마스터\n\n자체 버프만으로도 풀공속 유지가 가능하며, 기본 크리 확률이 낮지 않다. 사냥기가 점샷이 가능하고, 원킬컷이 낮아서 낮은 스펙으로도 원킬 사냥이 쉽다. 광역 바인드와 공격 무시/반사 버프를 관통하는 스킬을 보유하고 있다. 상태에 따른 독자적인 모션과, 보스 주력기가 강제 점프를 동반하는 특이점을 가지고 있다.\n\n[2008년 12월 18일 출시]\n\n무적기 : 소울 이클립스 (3.5초), 솔루나 디바이드 (5초)\n뎀감기 : 초월자 시그너스의 축복[공용] (5%)\n바인드 : 소울 페네트레이션\n\n공격대원 효과 : 최대 HP 250/500/1000/2000/2500 증가\n\n링크 스킬 : 시그너스 블레스 - 공격력과 마력 25, 상태 이상 내성 15, 모든 속성 내성 15% 증가"); 
    }
    if(msg.startsWith("!로얄")){      
      const royalM = require('Royal');
      if(msg.split(" ")[1] == undefined){
        rep = royalM.getoneroyal();
        Kakao.send(room,
          {
            "link_ver" : "4.0",
            "template_id" : 59435,
            "template_args" : {
                                  "desc" : rep
                              }
          },
           "custom");
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
    if(msg.startsWith("!뽑기") || msg.startsWith("!하나만")){
      if(msg.split(" ").length < 3){
        replier.reply("최소 2개이상의 단어를 입력해주세요.\n\n!뽑기/!하나만 (단어) : 띄어쓰기로 구분된 단어들 중에서 하나를 골라 결과로 보여줍니다. 최소 두 단어 이상 입력하여야 합니다.");
      }
      else{
        var pickcnt = msg.split(" ").length - 1;        pickcnt = getRandomInt(0, pickcnt);
        replier.reply("보마봇 뽑기 결과 : " + msg.split(" ")[1 + pickcnt]);
      }
    }
    if(msg == "!이벤트" || msg == "!ㅇㅂㅌ"){      
      dataE = org.jsoup.Jsoup.connect("https://cs.nexon.com/HelpBoard/popuphelpview/22065").get();
      dataE = dataE.toString();
      day = new Date();
      var eventtitle = day.getFullYear() + "년 " + (day.getMonth() + 1) + "월 이벤트 일정!";
      dataE3 = dataE.split("alt=\"\" src=\"")[1];
      var eventimage = dataE3.split("\" style")[0];
      var eventlink = eventimage.split("http://help.nexon.com")[1];
      Kakao.send(room,
        {
          "link_ver" : "4.0",
          "template_id" : 59585,
          "template_args" : {
                                "eventtitle" : eventtitle,
                                "eventimage" : eventimage,
                                "eventimagelink" : eventlink
                            }
        },
         "custom");
    }
    if(msg == "!실시간검색어" || msg == "!실검"){
      dataRT = org.jsoup.Jsoup.connect("https://issue.zum.com/daily/").get();
      dataRT = dataRT.toString();
      dataRTarr = [];
      var tempRT = "";
      for(i = 0; i < 10; ++i){
        tempRT = dataRT.split("<span class=\"word\">")[i+1].split("</span>")[0];
        dataRTarr.push(tempRT);
      }
      Kakao.send(room,
        {
          "link_ver" : "4.0",
          "template_id" : 59549,
          "template_args" : {
                               "title0" : dataRTarr[0], "title1" : dataRTarr[1], "title2" : dataRTarr[2], "title3" : dataRTarr[3], "title4" : dataRTarr[4], 
                               "image0" : "https://cdn.icon-icons.com/icons2/2249/PNG/512/numeric_box_outline_icon_139017.png", "image1" : "https://cdn.icon-icons.com/icons2/2249/PNG/512/numeric_box_outline_icon_139333.png", "image2" : "https://cdn.icon-icons.com/icons2/2249/PNG/512/numeric_box_outline_icon_139330.png", "image3" : "https://cdn.icon-icons.com/icons2/2249/PNG/512/numeric_box_outline_icon_139327.png", "image4" : "https://cdn.icon-icons.com/icons2/2249/PNG/512/numeric_box_outline_icon_139325.png"
                            }
        },
         "custom");
      Kakao.send(room,
        {
          "link_ver" : "4.0",
          "template_id" : 59549,
          "template_args" : {
                               "title0" : dataRTarr[5], "title1" : dataRTarr[6], "title2" : dataRTarr[7], "title3" : dataRTarr[8], "title4" : dataRTarr[9], 
                               "image0" : "https://cdn.icon-icons.com/icons2/2249/PNG/512/numeric_box_outline_icon_139321.png", "image1" : "https://cdn.icon-icons.com/icons2/2249/PNG/512/numeric_box_outline_icon_139318.png", "image2" : "https://cdn.icon-icons.com/icons2/2249/PNG/512/numeric_box_outline_icon_139315.png", "image3" : "https://cdn.icon-icons.com/icons2/2249/PNG/512/numeric_box_outline_icon_139312.png", "image4" : "https://cdn.icon-icons.com/icons2/2249/PNG/512/numeric_box_outline_icon_139337.png"
                            }
        },
         "custom");   
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
          var mesomarket = dataMeso.split("reverse")[1].split("reverse2")[0].split(dates)[1].split("},")[0];
          var mutong = dataMeso.split("reverse2")[1].split(dates)[1].split("},")[0];

          var mm = [];
          var mt = [];
          for(i = 1; i < mesomarket.split(":\"").length; ++i){
            var tempmeso = mesomarket.split(":\"")[i].split("\"")[0];
            mm.push(tempmeso);
            tempmeso = mutong.split(":\"")[i].split("\"")[0];
            mt.push(tempmeso);
          }
          var servericon = mesoM.getServericon(mesoind);
          Kakao.send(room,
            {
              "link_ver" : "4.0",
              "template_id" : 59953,
              "template_args" : {
                                    "date" : dates,
                                    "servericon" : servericon,
                                    "mesomarket" : mm[mesoind],
                                    "mutong" : mt[mesoind]
                                }
            },
              "custom");
        }
      }
    }
    if(msg.startsWith("!스타포스")){
      var sfrep = guitarM.getStarforce(msg);
      replier.reply(sfrep);
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
          bname = gbM.getBossname2(bossind);  
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
          Kakao.send(room,
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
              "custom");      
        }
      }
    }
    if(msg.startsWith("!큐브")){
      //if(sender == myName || sender == adminNick){
      var cuberep = guitarM.getCube(msg);
      replier.reply(cuberep);/*
      }
      else{
        replier.reply("현재 메이플스토리 홈페이지의 큐브 확률 표기방식이 바뀌어 !큐브 기능이 잠정 중단되었습니다.");
      }*/
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
    if(msg.startsWith("!스킬")){
      const skillM = require('Skill');
      var skilljob = msg.split(" ")[1];
      if(skilljob == undefined){
        replier.reply("직업을 입력해주세요.\n\n직업 목록 : 히어로, 팔라딘, 다크나이트, 불독, 썬콜, 비숍, [보우마스터], 신궁, 패스파인더, 나이트로드, 섀도어, 듀얼블레이드, 바이퍼, 캡틴, 캐논슈터, [소울마스터], 플레임위자드, 윈드브레이커, 나이트워커, 스트라이커, 미하일, 블래스터, 배틀메이지, 와일드헌터, 메카닉, 제논, 데몬슬레이어, 데몬어벤져, [아란], 에반, [루미너스], 메르세데스, [팬텀], 은월, 카이저, 카인, 카데나, 엔젤릭버스터, 아델, 일리움, 아크, 라라, 호영, [제로], 키네시스, [모험가 전사], [모험가 마법사], [모험가 궁수], [모험가 도적], [모험가 해적], [시그너스 기사단], [레지스탕스], [데몬], [영웅], [노바], [레프], [아니마], [전사], [마법사], [궁수], [도적], [해적], 모험가, [공용]");
      }
      else{
        var jobcode = skillM.getJobcode(skilljob);
        if(jobcode == -1){
          replier.reply(skilljob + " >> 입력한 직업이 데이터베이스에 존재하지 않습니다. 다시 확인해주세요.\n\n직업 목록 : 히어로, 팔라딘, 다크나이트, 불독, 썬콜, 비숍, [보우마스터], 신궁, 패스파인더, 나이트로드, 섀도어, 듀얼블레이드, 바이퍼, 캡틴, 캐논슈터, [소울마스터], 플레임위자드, 윈드브레이커, 나이트워커, 스트라이커, 미하일, 블래스터, 배틀메이지, 와일드헌터, 메카닉, 제논, 데몬슬레이어, 데몬어벤져, [아란], 에반, [루미너스], 메르세데스, [팬텀], 은월, 카이저, 카인, 카데나, 엔젤릭버스터, 아델, 일리움, 아크, 라라, 호영, [제로], 키네시스, [모험가 전사], [모험가 마법사], [모험가 궁수], [모험가 도적], [모험가 해적], [시그너스 기사단], [레지스탕스], [데몬], [영웅], [노바], [레프], [아니마], [전사], [마법사], [궁수], [도적], [해적], 모험가, [공용]");
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
              Kakao.send(room,
                {
                  "link_ver" : "4.0",
                  "template_id" : 60491,
                  "template_args" : {
                                        "skillname" : skillname,
                                        "skilldesc1" : skilldesc1,
                                        "skilldesc2" : skilldesc2,
                                        "skillimage1" : skillimage1,
                                        "skillimage2" : skillimage2
                                    }
                },
                 "custom");
                 if(skilldesc1 == "하단 참조"){
                   skilldesc3 = skillM.getJobskilldesc3(jobcode, skillcode);
                   replier.reply(skilldesc3);
                 }
            }
          }
        }
      }
    }
    if(msg == "!뭐먹지" || msg == "!머먹지"){
      const foodM = require('Food');
      var foodmax = foodM.foodList.length;
      var foodrand = getRandomInt(0, foodmax);
      var foodrep = foodM.foodList[foodrand];
      replier.reply("보마봇 추천 메뉴 : " + foodrep);
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
        else{
          var symbollevel = msg.split(" ")[2];
          var symbolexp = msg.split(" ")[3];
          if(symbollevel == undefined){
            var symbolname = symbolM.getSymbolname(symbolind);
            var symboldaily = symbolM.getSymboldaily(symbolind);
            var symbolspecial = symbolM.getSymbolspecial(symbolind);
            var symbolimage = symbolM.getSymbolimage(symbolind);
            Kakao.send(room,
              {
                "link_ver" : "4.0",
                "template_id" : 60920,
                "template_args" : {
                                      "symbolname" : symbolname,
                                      "symboldaily" : symboldaily,
                                      "symbolspecial" : symbolspecial,
                                      "symbolimage" : symbolimage
                                  }
              },
              "custom");
          }
          else if(isNaN(symbollevel)){
            replier.reply(symbollevel + " >> 심볼 레벨이 숫자가 아닙니다.");
          }
          else if(symbollevel < 1 || symbollevel > 19){
            replier.reply(symbollevel + " >> 심볼 레벨이 범위(1~19)를 초과하였습니다.");
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
    if(msg == "와!" || msg == "!와" || msg == "와"){
      i = getRandomInt(0, 100);
      if(i < 30){  replier.reply("샌즈!"); }
    }
    if(msg == "?"){
      i = getRandomInt(0, 100);
      if(i < 30){ replier.reply("?"); }
    }
    if(msg.startsWith("!어빌") || msg.startsWith("!어빌리티")){
      const abilM = require("Ability");
      var abilrep = abilM.getAbil(msg);
      replier.reply(abilrep);
    }
    if(msg.startsWith("!농장")){
      const farmM = require('Farm');
      var farmrep = farmM.getFarm(msg);
      replier.reply(farmrep);
    }
    if(msg.startsWith("!브금")){
      const bgmM = require('Bgm');
      var bgmrep = bgmM.getBGM(msg);
      replier.reply(bgmrep);
    }
    if(msg.startsWith("!확률")){
      var raterep = guitarM.getRate(msg);
      replier.reply(raterep);
    }
    if(msg.startsWith("!마릿수") || msg.startsWith("!몹젠")){
      const mapM = require('Map');
      var maprep = mapM.getMap(msg);
      if(maprep[0] != "*"){ replier.reply(maprep); }
      else{
        var mapn = maprep.split("*")[1];
        var mapc = maprep.split("*")[2];
        var mapcl = mapc.split(".com/")[1];
        Kakao.send(room,
          {
            "link_ver" : "4.0",
            "template_id" : 63410,
            "template_args" : {
                                  "imagetitle" : mapn,
                                  "image" : mapc,
                                  "imagelink" : mapcl
                              }
          },
          "custom");
      }
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
        Kakao.send(room,
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
           "custom");
        }
        if(jobmention != "-"){
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
  var isError = JSON.parse(org.jsoup.Jsoup.connect('https://maple.gg/u/'+encodeURI(nick)+'/sync').ignoreContentType(true).get().text()).error;
  var isDone = JSON.parse(org.jsoup.Jsoup.connect('https://maple.gg/u/'+encodeURI(nick)+'/sync').ignoreContentType(true).get().text()).done;

  if(isError == true) {
      return '유저정보가 없습니다.';
  } 
  else {
    if(isDone == false){ return '갱신중입니다. 1~10초 내에 반영됩니다.'; }
    else{ return '이미 갱신되었습니다.'; }
  }
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

  if(todaydate == "2021-09-00"){todaydate = "2021-08-31";}
  if(todaydate == "2021-10-00"){todaydate = "2021-09-30";}
  if(todaydate == "2021-11-00"){todaydate = "2021-10-31";}
  if(todaydate == "2021-12-00"){todaydate = "2021-11-30";}
  return todaydate;
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
  if(dataFirstNotice != savedNotice){
    FileStream.write(path + "notice.txt", dataFirstNotice);
    var noticeTitle = dataN1.split("alt=\"")[1].split("\"")[0];
    var noticeContent = dataN1.split("<span>")[1].split("</span>")[0];
    var ntURL2 = ntURL + dataFirstNotice;
    Nret = "<메이플스토리 공지사항>\n\n" +  noticeTitle + " " + noticeContent + "\n\n" + ntURL2;
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
var ppgLangcode = [ "ko", "en", "ja", "zh-CN", "zh-TW", "vi", "id", "th", "de", "ru", "es", "it", "fr"];
var banList = [1534153999];

var adminNick = "리부트/260/보마";
var nickname = "";
var jobmention = "";
var chkjob = -1;