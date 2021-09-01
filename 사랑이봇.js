const scriptName = "보마봇";
const kalingModule = require('kaling').Kakao();
const Kakao = new kalingModule();
Kakao.init('f8a946e1c19887744ce173e69effc988', 'https://developers.kakao.com');
Kakao.login('hansu1115@kakao.com', 'cjsgkstn1!');
const guitarM = require('Guitar');
const naverID = "nBGBcvtfiLuJx1ENn51s";
const naverSecret = "_1LugNitAD";
//const JariM = require('Jari');
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
    var isBanned = false;
    banList.forEach(function(bvalue, bind, barray){
      var sinfo = imageDB.getProfileImage();
      var shash = java.lang.String(sinfo).hashCode();
      if(bvalue == shash){isBanned = true;}
    })
  if(isBanned == false){
    if(msg.startsWith("!보스")){
      const BossM = require('getBoss');
      var boss = msg.split(" ")[1];
      if(boss == undefined){
        replier.reply("보스 이름을 입력해주세요.\n\n!보스 (보스이름) : 보스 레벨, 체력, 방어율, 포스, 결정석가격을 보여줍니다. ※(보스이름) 입력 시 띄어쓰기를 하지 말아 주세요.\n(보스이름)에 '목록'을 입력하면 각 보스별 인식 키워드 목록을 보여줍니다.\n난이도 생략시 노멀난이도를 우선합니다.\n결정석 가격은 변동패치전 최초 기준 가격입니다. 자세한 변동내역은 !결정석을 참조해주세요.");
      }
      else{
        var re = BossM.getBoss(boss);
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
    if((sender == "천한수" || sender == adminNick) && (msg == "!리로드" || msg == "!ㄹㄹ")){
      if(Api.reload(scriptName)){
        replier.reply("리로드 성공");
      }
      else{
        replier.reply("리로드 실패");
      }
    }
    if((sender == "천한수" || sender == adminNick) && (msg.startsWith("!공지"))){
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
    if(msg.startsWith("ㅋㅋㅋ")){
      Api.markAsRead(room);
    }
    if((sender == "천한수" || sender == adminNick) && msg.startsWith("테스트")){
    }    
    if((sender == "천한수" || sender == adminNick) && msg == "!유저정보"){
      var dataB = DataBase.getDataBase("Userdata.txt");  
      replier.reply(dataB);
    }
    if((sender == "천한수" || sender == adminNick) && msg.startsWith("!유저정보삭제")){
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
    if((sender == "천한수" || sender == adminNick) && msg == "!유저정보전체삭제"){
      var isdataB = DataBase.removeDataBase("Userdata.txt");  
      if(isdataB){replier.reply("유저 정보가 삭제되었습니다.");}
      else{replier.reply("유저 정보가 삭제되지 않았습니다.");}
      DataBase.setDataBase("Userdata.txt", "유저 정보\n\n"); 
    }
    if(msg.startsWith("환영합니다! 유니스트 메이플스토리 톡방입니다~")){
      replier.reply("환영합니다~! 보마봇 많은 이용 부탁드려요!");
    }
    if(msg.startsWith("!경험치")){
      const JariM = require('Jari');
      var startlv = msg.split(" ")[1];
      var endlv = msg.split(" ")[2];
      if(startlv == undefined){
        replier.reply("(레벨)이 없습니다.\n\n!경험치 (시작레벨) (끝레벨) : 시작레벨부터 끝레벨까지 필요한 경험치량, 끝레벨 생략시 그 레벨 경험치통을 보여줍니다.");
      }
      else if(endlv == undefined){
        if(isNaN(startlv) || startlv < 1 || startlv > 300){
          replier.reply("레벨이 범위를 벗어났거나 숫자가 아닙니다.");
        }
        else{
          replier.reply("Lv." + startlv + " 경험치통: " + JariM.Jari(exps[startlv - 1]));
        }
      }
      else if(startlv > 0 && startlv < 301 && endlv > 0 && endlv < 301){
        if(startlv >= endlv){
          replier.reply("오류 : 뒷레벨이 더 커야합니다.");
        }
        else{
          var remain = accexps[endlv - 1] - accexps[startlv - 1];
          replier.reply("Lv." + startlv + " → Lv." + endlv + " 경험치통: " + JariM.Jari(remain));
        }
      }
      else{
        replier.reply("레벨이 범위를 벗어났거나 숫자가 아닙니다.");
      }
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
        replier.reply("캐릭터 이름을 입력해주세요.\n\n!캐릭터 (캐릭터명) : maple.gg 기준 캐릭터 관련 정보를 보여줍니다.");
      }
      else{
        var maplegg = "https://maple.gg/u/" + nickname;
        var dataC1 = org.jsoup.Jsoup.connect(maplegg).get();
        dataC1 = dataC1.toString();

        if(dataC1.indexOf("검색결과 없음") != -1){
          replier.reply("그런 캐릭터는 없습니다.");
        }
        else{ 
          var dataCprofile = dataC1.split("<meta property=\"og:description\" content=\"")[0];
          var dataC2 = dataC1.split("<meta property=\"og:description\" content=\"")[1];
          var dataC3 = dataC2.split("\">")[0];
          var dataC4_nameandServer = dataC3.split(",")[0];
          var dataC4_mureung = dataC3.split(",")[1];  if(dataC4_mureung == undefined){ dataC4_mureung = "-";}
          if(dataC4_mureung.slice(0,2) == "최고"){dataC4_mureung = dataC4_mureung.slice(2,dataC4_mureung.length);}
          var dataC4_seed = dataC3.split(",")[2];   if(dataC4_seed == undefined)  {dataC4_seed = "-";}
          if(dataC4_seed.slice(0,2) == "최고"){dataC4_seed = dataC4_seed.slice(2, dataC4_seed.length);}
          var dataC4_union = dataC3.split(",")[3];    if(dataC4_union == undefined)   {dataC4_union = "-";}
          var dataC4_achievement = dataC3.split(",")[4];  if(dataC4_achievement == undefined) {dataC4_achievement = "-";}
          var dataC5 = dataC1.split("<li class=\"user-summary-item\">")[1].split("</li>")[0];
          var dataC6 = dataC1.split("<li class=\"user-summary-item\">")[2].split("</li>")[0];

          var dataCname = dataC4_nameandServer.split("@")[0];
          var dataCservericon = dataC2.split("<div class=\"col-lg-8\">")[1];
          dataCservericon = dataCservericon.split("\" alt=")[0].split("src=\"")[1];
          dataCprofile = dataCprofile.split("<meta property=\"og:image\" content=\"")[1].split("\">")[0];
          var dataCmureung = "무릉:기록없음";
          var dataCseed = "시드:기록없음";
          if(dataC4_mureung.slice(0,2) == "무릉") {dataCmureung = dataC4_mureung;}
          if(dataC4_seed.slice(0,2) == "시드") {dataCseed = dataC4_seed;}
          Kakao.send(room,
            {
              "link_ver" : "4.0",
              "template_id" : 59430,
              "template_args" : {
                                    "profile" : dataCname + " | " + dataC6,
                                    "desc" : dataC5 + "\n" + dataCmureung + "\n" + dataCseed,
                                    "server" : dataCservericon,
                                    "image" : dataCprofile
                                }
            },
             "custom");
          replier.reply(dataC4_nameandServer + "\n" + dataC5 + " " + dataC6 + "\n" + dataC4_mureung + "\n" + dataC4_seed + "\n" + dataC4_union + "\n" + dataC4_achievement);
        }
      }
    }
    if(msg.startsWith("!무릉") || msg.startsWith("!시드") || msg.startsWith("!유니온") || msg.startsWith("!업적")){
      nickname = msg.split(" ")[1];
      if(nickname == undefined){
        replier.reply("캐릭터 이름을 입력해주세요.\n\n!무릉,!시드,!유니온,!업적,!코디 + (캐릭터명) : maple.gg 기준 캐릭터 관련 정보를 보여줍니다.");
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
              replier.reply(dataC1 + " >> 그런 캐릭터는 없습니다.\n\n!무릉 (층수) : 1~80사이의 숫자를 넣으면 해당 층수의 몬스터 정보를 보여줍니다.");
            }
            else{
              dataM1 = dataC1.split("도장</span> 최고기록")[1].split("더시드 최고기록")[0];
              if(dataM1.indexOf("user-summary-no-data") == -1){
                dataM2 = dataM1.split("<h1 class=\"user-summary-floor font-weight-bold\">")[1].split("</small>")[0];
                dataM3 = dataM2.split("</h1>")[0];
                dataM4 = dataM2.split("\">")[1];
                replier.reply(dataM3 + ", " + dataM4);
              }
              else{
                replier.reply("이 캐릭터는 무릉 기록이 없습니다.");
              }
            }
          }
        }
        else{
          if(dataC1.indexOf("검색결과 없음") != -1){
            replier.reply("그런 캐릭터는 없습니다.");
          }
          else{ 
          
            if(msg.startsWith("!시드")){
              dataS1 = dataC1.split("더시드 최고기록")[1].split("유니온")[0];
              if(dataS1.indexOf("user-summary-no-data") == -1){
                dataS2 = dataS1.split("<h1 class=\"user-summary-floor font-weight-bold\">")[1].split("</small>")[0];
                dataS3 = dataS2.split("</h1>")[0];
                dataS4 = dataS2.split("\">")[1];
                replier.reply(dataS3 + ", " + dataS4);
              }
              else{
                replier.reply("이 캐릭터는 시드 기록이 없습니다.");
              }
            }

            if(msg.startsWith("!유니온")){
              dataU1 = dataC1.split("유니온 <i")[1];
              dataU2 = dataU1.split("업적")[0];
              if(dataU2.indexOf("user-summary-no-data") == -1){
                dataU3 = dataU2.split("bold\">")[1];
                dataU4 = dataU3.split("</div>")[0].trim();
                dataU5 = dataU3.split("level\">")[1].split("</span>")[0];

                dataU7 = dataU1.split("전투력</b> ")[1].split("</span>")[0];
                dataU8 = parseFloat(dataU7.replace(/,/g, ""));
                dataU9 = parseInt(dataU8 * 8.64 / 10000000);
                replier.reply(dataU4 + ", " + dataU5 + "\n유니온 전투력 : " + dataU8 + "\n일일 유니온 코인 수급량 : " + dataU9);
              }
              else{
                replier.reply("이 캐릭터는 대표캐릭터가 아니라서 유니온 조회가 되지 않습니다.");
              }
            }

            if(msg.startsWith("!업적")){
              dataA1 = dataC1.split("업적 <i")[1].split("</section>")[0];
              if(dataA1.indexOf("user-summary-no-data") == -1){
                dataA3 = dataA1.split("bold\">")[1];
                dataA4 = dataA3.split("</div>")[0].trim();
                dataA5 = dataA3.split("업적점수 ")[1].split("</span>")[0];

                replier.reply(dataA4 + ", " + dataA5);
              }
              else{
                replier.reply("이 캐릭터는 업적 정보가 없습니다.");
              }
            }
          }
        }
      }
    }
    if(msg.startsWith("!갱신")){
      nickname = msg.split(" ")[1];
      if(nickname == undefined){
        replier.reply("캐릭터 이름을 입력해주세요.\n\n!갱신 (캐릭터이름) : 메이플gg를 갱신합니다.");
      }
      else{
        replier.reply(mapleupdate(nickname));
      }
    }
    if(msg.startsWith("!코디")){
      nickname = msg.split(" ")[1];
      if(nickname == undefined){
        replier.reply("캐릭터 이름을 입력해주세요.\n\n!무릉,!시드,!유니온,!업적,!코디 + (캐릭터명) : maple.gg 기준 캐릭터 관련 정보를 보여줍니다.");
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
    if(msg.startsWith("!방무")){
      var mobDef = msg.split(" ")[1];
      var myDef = msg.split(" ")[2];
      var defrep = guitarM.getDefense(mobDef, myDef, msg);
      replier.reply(defrep);
    }
    if(msg == "!데굴" || msg == "!데굴데굴" || msg == "!주사위"){
      var dicerep = guitarM.getDice();
      replier.reply(sender + dicerep);
    }
    if(msg.startsWith("!영환") || msg.startsWith("!영환불")){
      var addtitle = "";
      var addLevel = msg.split(" ")[1];
      if(addLevel == undefined){
        replier.reply("레벨을 입력해주세요.\n\n!강환/!강환불/!영환/!영환불 (렙제) (횟수) : \n 150, 160, 200제 방어구, 장신구의 추가옵션을 횟수만큼 돌립니다. \n횟수는 5이하 숫자만 가능하며 생략시 1회만 돌립니다.");
      }
      else if(addLevel != 150 && addLevel != 160 && addLevel != 200){
        replier.reply("레벨은 150, 160, 200만 가능합니다.");
      }
      else{
        const addM = require('Addop');
        var addResult = "";
        if(addLevel == 150){ addResult += "150제 아이템 "; }
        else if(addLevel == 160){ addResult += "160제 아이템 "; }
        else if(addLevel == 200){ addResult += "200제 아이템 "; }
        addtitle = addResult;
        if(msg.split(" ")[2] == undefined || msg.split(" ")[2] == 1){
          var addition = [];
          addM.addEternal(addition);
          
          let addList = [];
          var additer = 0;
          while(additer < 4){
            var n = getRandomInt(0,19);
            if(!addM.isSameadd(n, addList)){
              addList.push(n);
              additer++;
            }
          }
          addResult += "\n";
          addResult = addM.addgetResult(addition, addLevel, addList, addResult);
          var addlen = addResult.length;
          addResult = addResult.slice(0, addlen-1);

          replier.reply(addResult);
        }
        else if(msg.split(" ")[2] > 0 && msg.split(" ")[2] < 6 && msg.split(" ")[2] % 1 === 0){
          addResult += msg.split(" ")[2];
          addResult += "회\n";
          for(i = 0; i < msg.split(" ")[2]; ++i){
            addition = [];
            addM.addEternal(addition);
          
            let addList = [];
            additer = 0;
            while(additer < 4){
              n = getRandomInt(0,19);
              if(!addM.isSameadd(n, addList)){
                addList.push(n);
                additer++;
              }
            }
            addResult = addM.addgetResult(addition, addLevel, addList, addResult);
            addResult += "\n";
          }
          addlen = addResult.length;
          addResult = addResult.slice(0, addlen-2);

          var addcnt = msg.split(" ")[2];
          var addcustom = [];
          for(i = 0; i < addcnt; ++i){
            addcustom.push(addResult.split("\n\n")[i]);
          }
          addcustom[0] = addcustom[0].split("회")[1];

          var addn = ["-","-","-","-","-","-","-","-","-","-"];
          var addind = 0;
          for(i = 0; i < addcnt; ++i){
            var adddesc1 = [];
            var desc1cnt = 0;
            var adddesc2 = [];
            var desc2cnt = 0;
            var addcnt2 = addcustom[i].split("\n").length;
            for(j = 0; j < addcnt2; ++j){
              if(addcustom[i].split("\n")[j].slice(0,3) == "STR" || addcustom[i].split("\n")[j].slice(0,3) == "DEX" || addcustom[i].split("\n")[j].slice(0,3) == "INT" || addcustom[i].split("\n")[j].slice(0,3) == "LUK"){
                adddesc1.push(addcustom[i].split("\n")[j]);
                desc1cnt++;
              }
              else{
                adddesc2.push(addcustom[i].split("\n")[j]);
                desc2cnt++;
              }
            }

            var addD1 = "";
            for(j = 0; j < desc1cnt; ++j){
              addD1 += adddesc1[j];
              addD1 += " ";
            }
            addD1 = addD1.slice(0, addD1.length - 1);
            addn[addind++] = addD1;

            var addD2 = "";
            for(j = 0; j < desc2cnt; ++j){
              addD2 += adddesc2[j];
              addD2 += " ";
            }
            addD2 = addD2.slice(0, addD2.length - 1);
            addn[addind++] = addD2;
          }
          Kakao.send(room,
            {
              "link_ver" : "4.0",
              "template_id" : 59451,
              "template_args" : {
                                  "title" : addtitle,
                                  "THU" : "https://ww.namu.la/s/bf114f6b7c91ecbf5b4f90b9485f8b4fd4ae40ca30d76b3a3e6d22b902907089f0c1f7ac37f9999f2f3457946198a3a17a2a188e924f8a31ec135406e6294e5a0b1db0703ce1522b2c6fd4f3aaf9af7df989a708cf34e1985f47586e1a74e7c0",
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
          replier.reply("횟수가 5를 초과하거나 올바른 숫자가 아닙니다.");
        }
      }
    }
    if(msg.startsWith("!강환") || msg.startsWith("!강환불")){
      addLevel = msg.split(" ")[1];
      if(addLevel == undefined){
        replier.reply("레벨을 입력해주세요.\n\n!강환/!강환불/!영환/!영환불 (렙제) (횟수) : \n 150, 160, 200제 방어구, 장신구의 추가옵션을 횟수만큼 돌립니다. \n횟수는 5이하 숫자만 가능하며 생략시 1회만 돌립니다.");
      }
      else if(addLevel != 150 && addLevel != 160 && addLevel != 200){
        replier.reply("레벨은 150, 160, 200만 가능합니다.");
      }
      else{
        const addM2 = require('Addop');
        addResult = "";
        if(addLevel == 150){
          addResult += "150제 아이템 ";
        }
        else if(addLevel == 160){
          addResult += "160제 아이템 ";
        }
        else if(addLevel == 200){
          addResult += "200제 아이템 ";
        }
        addtitle = addResult;
        if(msg.split(" ")[2] == undefined || msg.split(" ")[2] == 1){
          addition = [];
          addM2.addStrong(addition);
          
          let addList = [];
          additer = 0;
          while(additer < 4){
            n = getRandomInt(0,19);
            if(!addM2.isSameadd(n, addList)){
              addList.push(n);
              additer++;
            }
          }
          addResult += "\n";
          addResult = addM2.addgetResult(addition, addLevel, addList, addResult);
          addlen = addResult.length;
          addResult = addResult.slice(0, addlen-1);

          replier.reply(addResult);
        }
        else if(msg.split(" ")[2] > 0 && msg.split(" ")[2] < 6 && msg.split(" ")[2] % 1 === 0){
          addResult += msg.split(" ")[2];
          addResult += "회\n";
          for(i = 0; i < msg.split(" ")[2]; ++i){
            addition = [];
            addM2.addStrong(addition);
          
            let addList = [];
            additer = 0;
            while(additer < 4){
              n = getRandomInt(0,19);
              if(!addM2.isSameadd(n, addList)){
                addList.push(n);
                additer++;
              }
            }
            addResult = addM2.addgetResult(addition, addLevel, addList, addResult);
            addResult += "\n";
          }
          addlen = addResult.length;
          addResult = addResult.slice(0, addlen-2);

          addcnt = msg.split(" ")[2];
          addcustom = [];
          for(i = 0; i < addcnt; ++i){
            addcustom.push(addResult.split("\n\n")[i]);
          }
          addcustom[0] = addcustom[0].split("회")[1];

          addn = ["-","-","-","-","-","-","-","-","-","-"];
          addind = 0;
          for(i = 0; i < addcnt; ++i){
            adddesc1 = [];
            desc1cnt = 0;
            adddesc2 = [];
            desc2cnt = 0;
            addcnt2 = addcustom[i].split("\n").length;
            for(j = 0; j < addcnt2; ++j){
              if(addcustom[i].split("\n")[j].slice(0,3) == "STR" || addcustom[i].split("\n")[j].slice(0,3) == "DEX" || addcustom[i].split("\n")[j].slice(0,3) == "INT" || addcustom[i].split("\n")[j].slice(0,3) == "LUK"){
                adddesc1.push(addcustom[i].split("\n")[j]);
                desc1cnt++;
              }
              else{
                adddesc2.push(addcustom[i].split("\n")[j]);
                desc2cnt++;
              }
            }

            addD1 = "";
            for(j = 0; j < desc1cnt; ++j){
              addD1 += adddesc1[j];
              addD1 += " ";
            }
            addD1 = addD1.slice(0, addD1.length - 1);
            addn[addind++] = addD1;

            addD2 = "";
            for(j = 0; j < desc2cnt; ++j){
              addD2 += adddesc2[j];
              addD2 += " ";
            }
            addD2 = addD2.slice(0, addD2.length - 1);
            addn[addind++] = addD2;
          }
          Kakao.send(room,
            {
              "link_ver" : "4.0",
              "template_id" : 59451,
              "template_args" : {
                                  "title" : addtitle,
                                  "THU" : "https://w.namu.la/s/4799073f7eeebb4e1b8e21dd70ce6550d3738d37cf722370baa675920ab550424653cf303258677be2a2cecdf8ea8506bfe2441b27e28e9fc5a6e9c68a408af152693e99eb4bb122f223b8fcbcd5b142a5339b042c6fa2dc790d19bd643fc08e",
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
          replier.reply("횟수가 5를 초과하거나 올바른 숫자가 아닙니다.");
        }
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

        if(dataC1.indexOf("검색결과 없음") != -1){
          replier.reply("그런 캐릭터는 없습니다.");
        }
        else{ 
          try{
          var dataHis1 = dataC1.split("expHistoryLabels = [{\"")[1];
          var dataHis2 = dataHis1.split("c3.generate")[0];

          var dataHisLevel = [];
          for(i = 0; i < 7; ++i){
            var tempHisLevel = dataHis2.split("level\":\"")[i+1];
            dataHisLevel[i] = tempHisLevel.split("\",")[0];
          }

          var dataHisExp = [];
          for(i = 0; i < 7; ++i){
            var tempHisExp = dataHis2.split("exp\":")[i+1];
            dataHisExp[i] = tempHisExp.split("}")[0];
          }

          var dataHis3 = dataHis1.split("columns: [[")[1].split("exp")[0];
          var dataHisYear = [];
          for(i = 0; i < 7; ++i){
            dataHisYear[i] = "21";
          }
          var dataHisMonth = [];
          for(i = 0; i < 7; ++i){
            var tempHisMonth = dataHis3.split(",\"")[i+1];
            tempHisMonth = tempHisMonth.split("\\uc6d4")[0];
            if(tempHisMonth.length > 2){
              dataHisYear[i] = tempHisMonth.split("\\ub144")[0];
              tempHisMonth = tempHisMonth.split(" ")[1];
            }
            dataHisMonth[i] = tempHisMonth;
          }

          var dataHisDay = [];
          for(i = 0; i < 7; ++i){
            var tempHisDay = dataHis3.split("uc6d4 ")[i+1];
            dataHisDay[i] = tempHisDay.split("\\")[0];
          }
          var history = "";
          history += "[";  history += nickname; history += "]\n";
          for(i = 0; i < 7; ++i){
            history += dataHisYear[i]; history += "년 ";
            history += dataHisMonth[i]; history += "월 ";
            history += dataHisDay[i]; history += "일: Lv.";
            history += dataHisLevel[i]; history += " (";
            history += dataHisExp[i]; history += "%)\n";
          }
          history = history.slice(0, history.length - 1);
          replier.reply(history);
          } catch(error) {
            replier.reply("캐릭터의 경험치 히스토리가 충분하지 않거나 읽는 도중 오류가 발생하였습니다.");
          }
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

        if(dataC1.indexOf("검색결과 없음") != -1){
          replier.reply("그런 캐릭터는 없습니다.");
        }
        else{ 
          try{
            var dataLvHis = dataC1.split("columns: [[\"x\"")[2];
            dataLvHis = dataLvHis.split("]]")[0];

            var dataLvHisYear = [];
            for(i = 0; i < 7; ++i){
              dataLvHisYear[i] = "21";
            }
            var dataLvHisMonth = [];
            for(i = 0; i < 7; ++i){
              var tempLvMonth = dataLvHis.split(",\"")[i+1];
              tempLvMonth = tempLvMonth.split("\\uc6d4")[0];
              if(tempLvMonth.length > 2){
                dataLvHisYear[i] = tempLvMonth.split("\\ub144")[0];
                tempLvMonth = tempLvMonth.split(" ")[1];
              }
              dataLvHisMonth[i] = tempLvMonth;
            }

            var dataLvHisDay = [];
            for(i = 0; i < 7; ++i){
              var tempLvDay = dataLvHis.split("uc6d4 ")[i+1];
              dataLvHisDay[i] = tempLvDay.split("\\")[0];
            }

            var dataLvHisLv = dataLvHis.split("level")[1];
            var dataLvHisLevel = [];
            for(i = 0; i < 7; ++i){
              var tempLv = dataLvHisLv.split(",\"")[i+1];
              dataLvHisLevel[i] = tempLv.split("\"")[0];
            }

            var hisLv = "";
            hisLv += "[";  hisLv += nickname; hisLv += "]\n";
            for(i = 0; i < 7; ++i){
              hisLv += dataLvHisYear[i]; hisLv += "년 ";
              hisLv += dataLvHisMonth[i]; hisLv += "월 ";
              hisLv += dataLvHisDay[i]; hisLv += "일: Lv.";
              hisLv += dataLvHisLevel[i]; hisLv += "\n";
            }
            hisLv = hisLv.slice(0, hisLv.length - 1);
            replier.reply(hisLv);
          } catch(error) {
            replier.reply("캐릭터의 레벨 히스토리가 충분하지 않거나 읽는 도중 오류가 발생하였습니다.");
          }
        }
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
    /*if(msg.startsWith("!똥캐")){
      replier.reply("소울마스터\n\n자체 버프만으로도 풀공속 유지가 가능하며, 기본 크리 확률이 낮지 않다. 사냥기가 점샷이 가능하고, 원킬컷이 낮아서 낮은 스펙으로도 원킬 사냥이 쉽다. 광역 바인드와 공격 무시/반사 버프를 관통하는 스킬을 보유하고 있다. 상태에 따른 독자적인 모션과, 보스 주력기가 강제 점프를 동반하는 특이점을 가지고 있다.\n\n[2008년 12월 18일 출시]\n\n무적기 : 소울 이클립스 (3.5초), 솔루나 디바이드 (5초)\n뎀감기 : 초월자 시그너스의 축복[공용] (5%)\n바인드 : 소울 페네트레이션\n\n공격대원 효과 : 최대 HP 250/500/1000/2000/2500 증가\n\n링크 스킬 : 시그너스 블레스 - 공격력과 마력 25, 상태 이상 내성 15, 모든 속성 내성 15% 증가"); 
    }*/
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
        var pickcnt = msg.split(" ").length - 1;
        pickcnt = getRandomInt(0, pickcnt);

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
    if(msg.startsWith("!사다리") || msg.startsWith("!사다리타기")){
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
      const sfM = require('Starforce');
      var sfhelp = "!스타포스 A B C D E F\n";  sfhelp += "A : 아이템 레벨 제한(100~200 or 타일런트:99)\n";   sfhelp += "B : 시작 스타포스 개수\n";     sfhelp += "C : 목표 스타포스 개수\n";     sfhelp += "D : 스타캐치 적용여부 (0 - 미적용, 1 - 적용)\n";      sfhelp += "E : 이벤트 적용여부 (0 - 미적용, 1 - 30% 할인, 2 - 5,10,15성 100%, 3 - 10성이하 1+1)\n";       sfhelp += "F : 파괴방지 적용여부 (0 - 미적용, 1 - 12~17성 적용, 2 - 15~17성 적용)";
      if(msg.split(" ")[1] == "비용"){
        var sfrep = "";
        var sfcost = [];
        switch(msg.split(" ")[2]){
          case "100":
            sfrep += "100제 아이템 강화비용\n";
            sfcost = sfM.cost100s;
            break;
          case "110":
            sfrep += "110제 아이템 강화비용\n";
            sfcost = sfM.cost110s;
            break;
          case "120":
            sfrep += "120제 아이템 강화비용\n";
            sfcost = sfM.cost120s;
            break;
          case "130":
            sfrep += "130제 아이템 강화비용\n";
            sfcost = sfM.cost130s;
            break;
          case "140":
            sfrep += "140제 아이템 강화비용\n";
            sfcost = sfM.cost140s;
            break;
          case "150":
            sfrep += "150제 아이템 강화비용\n";
            sfcost = sfM.cost150s;
            break;
          case "160":
            sfrep += "160제 아이템 강화비용\n";
            sfcost = sfM.cost160s;
            break;
          case "200":
            sfrep += "200제 아이템 강화비용\n";
            sfcost = sfM.cost200s;
            break;
          case "타일런트":
          case "탈벨":
          case "슈페리얼":
          case "탈망":
          case "99":
            sfrep += "타일런트 강화비용\n";
            sfcost = sfM.costtiles;
            break;
          default:
            sfrep += "200제 아이템 강화비용\n";
            sfcost = sfM.cost200s;
            break;
        }
        for(i = 0; i < sfcost.length; ++i){
          sfrep += i + 1;
          sfrep += "성 비용 : ";
          sfrep += numberWithCommas(sfcost[i]);
          sfrep += "메소\n";
        }
        sfrep = sfrep.slice(0, sfrep.length - 1);
        replier.reply(sfrep);
      }
      else{
        if(msg.split(" ").length < 7){
          replier.reply("시뮬레이터를 돌리기 위한 요소들이 부족합니다.\n\n" + sfhelp);
        }
        else{
          chkN = false;
          for(i = 1; i < 7; ++i){
            if(isNaN(msg.split(" ")[i])){
              chkN = true;
            }
            else{
              if(msg.split(" ")[i] % 1 != 0){
                chkN = true;
              }
            }
          }
          if(chkN){
            replier.reply("숫자가 아니거나 정수가 아닌 요소가 있습니다.\n\n" + sfhelp);
          }
          else{
            var sfLevel = 0, sfStart = 0, sfDest = 0, sfCatch = 0, sfEvent = 0, sfDefend = 0;
            sfLevel = parseInt(msg.split(" ")[1]); sfStart = parseInt(msg.split(" ")[2]); sfDest = parseInt(msg.split(" ")[3]); sfCatch = parseInt(msg.split(" ")[4]); sfEvent = parseInt(msg.split(" ")[5]); sfDefend = parseInt(msg.split(" ")[6]);
            if(sfM.isSFready(sfLevel, sfStart, sfDest, sfCatch, sfEvent, sfDefend) != 0){
              replier.reply("조건에 맞지않는 요소가 있습니다.\n\n" + sfhelp + "\n오류코드 : " + sfM.isSFready(sfLevel, sfStart, sfDest, sfCatch, sfEvent, sfDefend));
            }
            else{
              rep = sfM.simulation(sfLevel, sfStart, sfDest, sfCatch, sfEvent, sfDefend);
              replier.reply(rep);
            }
          }
        }
      }
    }
    if(msg.startsWith("!결정석")){
      bossname = msg.split(" ")[1];
      if(bossname == undefined){
        replier.reply("보스 이름을 입력해주십시오.\n\n!결정석 (보스이름) : 보스의 결정석 가격과 변동 현황을 보여줍니다.");
      }
      else{
        const gbM = require('getBoss');
        var dataCrystal = org.jsoup.Jsoup.connect('https://ygh.kr/maple/crystal/data.json').userAgent('Mozilla/5.0').ignoreContentType(true).get().wholeText();
        var dataCrystal2 = dataCrystal.toString();
        var bossind = gbM.getBoss(bossname);
        if(bossind == -1){
          replier.reply("입력한 값으로 검색되는 보스가 없습니다. 다시 확인해주세요.");
        }
        else{
          bname = gbM.getBossname2(bossind);

          var priceinfo = dataCrystal2.split(bname)[1].split("},")[0].split("data\": [")[1].split("]")[0];
          var priceind = priceinfo.split(",").length;
          var pastprice = parseInt(priceinfo.split(",")[priceind - 2]);
          var currentprice = parseInt(priceinfo.split(", ")[priceind - 1]);
          var pricediff = currentprice - pastprice;
          var pricepercent = (parseFloat(pricediff) / parseFloat(pastprice)) * 100;
          pricepercent = Number(pricepercent.toFixed(2));

          bimage = gbM.getBossimage(bossind);
          bimage2 = gbM.getBossimage2(bossind);
          bname2 = gbM.getBossname(bossind);
          bHP = "현재 가격 : " + numberWithCommas(currentprice) + "메소";          
          binfo = "";
          if(pricediff >= 0){ binfo += "▲ ";}
          else{ binfo += "▼ ";}
          binfo += numberWithCommas(pricediff);
          binfo += " (" + pricepercent + "%)"; 
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
      const cubeM = require('Cube');
      var cubename = msg.split(" ")[1];
      if(cubename == undefined){
        replier.reply("큐브 이름을 입력해주세요.\n\n!큐브 (큐브이름) (잠재등급) (장비분류) (1,2,3)/(잠재옵션) (수치) : 큐브에 대한 정보를 보여줍니다.\n(큐브이름)만 입력 시 해당큐브의 등급 상승 확률표를 보여줍니다.\n(잠재등급) 까지만 입력 시 해당 큐브의 해당 등급에서의 옵션별 등급 설정 확률을 보여줍니다.\n(장비분류) 까지만 입력 시 해당 큐브의 해당 등급의 세부 확률표를 보여줍니다. 1,2,3입력시 각 번째에 해당하는 옵션의 확률만 보여줍니다.\n(잠재옵션)과 (수치)를 입력시 해당 잠재옵션이 해당 수치이상 나올 확률을 보여줍니다. 이 기능은 두가지 잠재 옵션까지 기입할 수 있습니다. (예시 : !큐브 블랙 레전 무기 보공 60 공 9)\n잠재 옵션 목록 : STR,DEX,INT,LUK,보공,공,방무,크뎀,올스탯,HP,메획,아획");
      }
      else{
        var cn = cubeM.getCubename(cubename);
        if(cn == "없음"){ replier.reply(cubename + " >> 그런 이름의 큐브는 없습니다.");}
        else{
          var cubesecond = msg.split(" ")[2];
          if(cubesecond == undefined){
            replier.reply(cubeM.getCubeupgrade(cn));
          }
          else{
            var cubeclass = cubeM.getCubeclass(cubesecond);
            if(cubeclass == -1){ replier.reply(cubesecond + " >> 그런 이름의 등급은 없습니다.");}
            else{
              var cubethird = msg.split(" ")[3];
              if(cubethird == undefined){
                replier.reply(cubeM.getCubeclasssetrate(cn, cubeclass));
              }
              else{
                var cubeitem = cubeM.getItemname(cubethird);
                if(cubeitem == "없음"){replier.reply(cubethird + " >> 그런 이름의 장비 분류는 없습니다.");}
                else{
                  var cubeweb = cubeM.web + cn;
                  var dataCube = org.jsoup.Jsoup.connect(cubeweb).get().toString();
                  try{
                  dataCube = dataCube.split(cubeitem)[cubeclass + 1].split("<tbody>")[1].replace(/<\/tr>/g, "").replace(/<tr>/g, "").replace(/  /g, "").replace(/&lt;/g, "<").replace(/&gt;/g, ">");
                  if(cn == "addi"){dataCube = dataCube.split("확률</td>")[3];}
                  dataCube = dataCube.slice(4, dataCube.length);

                  var poten1 = [], poten2 = [], poten3 = [];
                  var prate1 = [], prate2 = [], prate3 = [];
                  for(i = 1; i < dataCube.split("<td>").length; ++i){
                    var temppoten = dataCube.split("<td>")[i++].split("</td>")[0];
                    if(temppoten != ""){poten1.push(temppoten);}
                    temppoten = dataCube.split("<td>")[i++].split("</td>")[0];
                    if(temppoten != ""){prate1.push(temppoten);}
                    temppoten = dataCube.split("<td>")[i++].split("</td>")[0];
                    if(temppoten != ""){poten2.push(temppoten);}
                    temppoten = dataCube.split("<td>")[i++].split("</td>")[0];
                    if(temppoten != ""){prate2.push(temppoten);}
                    temppoten = dataCube.split("<td>")[i++].split("</td>")[0];
                    if(temppoten != ""){poten3.push(temppoten);}
                    temppoten = dataCube.split("<td>")[i].split("</td>")[0];
                    if(temppoten != ""){prate3.push(temppoten);}
                  }

                  var cubefourth = msg.split(" ")[4];
                  var cuberep = "";
                  cuberep += cubeM.getCubenameclasswear(cn, cubeclass, cubeitem);
                  if(cubefourth == undefined){
                    cuberep += "첫 번째 옵션\n\n";
                    cuberep += cubeM.getCuberatetable(poten1, prate1);
                    cuberep += "\n\n두 번째 옵션\n\n";
                    cuberep += cubeM.getCuberatetable(poten2, prate2);
                    cuberep += "\n\n세 번째 옵션\n\n";
                    cuberep += cubeM.getCuberatetable(poten3, prate3);
                    cuberep = cuberep.slice(0, cuberep.length-1);
                    replier.reply(cuberep);
                  }
                  else if(cubefourth == "1"){
                    cuberep += "첫 번째 옵션\n\n";
                    cuberep += cubeM.getCuberatetable(poten1, prate1);
                    cuberep = cuberep.slice(0, cuberep.length-1);
                    replier.reply(cuberep);
                  }
                  else if(cubefourth == "2"){
                    cuberep += "두 번째 옵션\n\n";
                    cuberep += cubeM.getCuberatetable(poten2, prate2);
                    cuberep = cuberep.slice(0, cuberep.length-1);
                    replier.reply(cuberep);
                  }
                  else if(cubefourth == "3"){
                    cuberep += "세 번째 옵션\n\n";
                    cuberep += cubeM.getCuberatetable(poten3, prate3);
                    cuberep = cuberep.slice(0, cuberep.length-1);
                    replier.reply(cuberep);
                  }
                  else{
                    var cabilind = cubeM.getCubeability(cubefourth);
                    if(cabilind == -1){
                      replier.reply(cubefourth + " >> 해당 이름을 가진 능력치가 없거나 지원하지 않는 능력치입니다.\n\n능력치 목록 : STR,DEX,INT,LUK,보공,공,방무,크뎀,올스탯,HP,메획,아획");
                    }
                    else{
                      var cubefifth = parseInt(msg.split(" ")[5]);
                      if(isNaN(cubefifth)){replier.reply("수치가 누락되었거나 숫자가 아닙니다.");}
                      else if(cubefifth < 0){replier.reply(cubefifth + " >> 수치는 음수가 될 수 없습니다.");}
                      else{
                        var cubesixth = msg.split(" ")[6];
                        if(cubesixth == undefined){
                          var cubeoneabil = "";
                          cubeoneabil += cuberep + cubeM.getCuberateOneabil(cn, cabilind, cubefifth, poten1, poten2, poten3, prate1, prate2, prate3);
                          replier.reply(cubeoneabil);
                        }
                        else{
                          var cabilind2 = cubeM.getCubeability(cubesixth);
                          if(cabilind2 == -1){
                            replier.reply(cubesixth + " >> 해당 이름을 가진 능력치가 없거나 지원하지 않는 능력치입니다.\n\n능력치 목록 : STR,DEX,INT,LUK,보공,공,방무,크뎀,올스탯,HP,메획,아획");
                          }
                          else{
                            var cubeseventh = parseInt(msg.split(" ")[7]);
                            if(isNaN(cubeseventh)){replier.reply("수치가 누락되었거나 숫자가 아닙니다.");}
                            else if(cubeseventh < 0){replier.reply(cubeseventh + " >> 수치는 음수가 될 수 없습니다.");}
                            else{
                              var cubeeighth = msg.split(" ")[8];
                              if(cubeeighth == undefined){
                                var cubetwoabil = "";
                                cubetwoabil += cuberep + cubeM.getCuberateTwoabil(cn, cabilind, cubefifth, cabilind2, cubeseventh, poten1, poten2, poten3, prate1, prate2, prate3);
                                replier.reply(cubetwoabil);
                              }
                              else{
                                var cabilind3 = cubeM.getCubeability(cubeeighth);
                                if(cabilind3 == -1){
                                  replier.reply(cubeeighth + " >> 해당 이름을 가진 능력치가 없거나 지원하지 않는 능력치입니다.\n\n능력치 목록 : STR,DEX,INT,LUK,보공,공,방무,크뎀,올스탯,HP,메획,아획");
                                }
                                else{
                                  var cubenineth = parseInt(msg.split(" ")[9]);
                                  if(isNaN(cubenineth)){replier.reply("수치가 누락되었거나 숫자가 아닙니다.");}
                                  else if(cubenineth < 0){replier.reply(cubenineth + " >> 수치는 음수가 될 수 없습니다.");}
                                  else{
                                    var cubethreeabil = "";
                                    cubethreeabil += cuberep + cubeM.getCuberateThreeabil(cn, cabilind, cubefifth, cabilind2, cubeseventh, cabilind3, cubenineth, poten1, poten2, poten3, prate1, prate2, prate3);
                                    replier.reply(cubethreeabil);
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                  }catch(error){
                    replier.reply("해당 큐브에는 해당 등급이 존재하지 않습니다.\n\n" + error);
                  }
                }
              }
            }
          }
        }
      }
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
        replier.reply("직업을 입력해주세요.\n\n직업 목록 : 히어로, 팔라딘, 다크나이트, 불독, 썬콜, 비숍, 보우마스터, 신궁, 패스파인더, 나이트로드, 섀도어, 듀얼블레이드, 바이퍼, 캡틴, 캐논슈터, 소울마스터, 플레임위자드, 윈드브레이커, 나이트워커, 스트라이커, 미하일, 블래스터, 배틀메이지, 와일드헌터, 메카닉, 제논, 데몬슬레이어, 데몬어벤져, 아란, 에반, 루미너스, 메르세데스, 팬텀, 은월, 카이저, 카인, 카데나, 엔젤릭버스터, 아델, 일리움, 아크, 라라, 호영, 제로, 키네시스, 모험가 전사, 모험가 마법사, 모험가 궁수, 모험가 도적, 모험가 해적, 시그너스 기사단, 레지스탕스, 데몬, 영웅, 노바, 레프, 아니마. 전사, 마법사, 궁수, 도적, 해적, 모험가, 공용");
      }
      else{
        var jobcode = skillM.getJobcode(skilljob);
        if(jobcode == -1){
          replier.reply(skilljob + " >> 입력한 직업이 데이터베이스에 존재하지 않습니다. 다시 확인해주세요.\n\n직업 목록 : 히어로, 팔라딘, 다크나이트, 불독, 썬콜, 비숍, 보우마스터, 신궁, 패스파인더, 나이트로드, 섀도어, 듀얼블레이드, 바이퍼, 캡틴, 캐논슈터, 소울마스터, 플레임위자드, 윈드브레이커, 나이트워커, 스트라이커, 미하일, 블래스터, 배틀메이지, 와일드헌터, 메카닉, 제논, 데몬슬레이어, 데몬어벤져, 아란, 에반, 루미너스, 메르세데스, 팬텀, 은월, 카이저, 카인, 카데나, 엔젤릭버스터, 아델, 일리움, 아크, 라라, 호영, 제로, 키네시스, 모험가 전사, 모험가 마법사, 모험가 궁수, 모험가 도적, 모험가 해적, 시그너스 기사단, 레지스탕스, 데몬, 영웅, 노바, 레프, 아니마. 전사, 마법사, 궁수, 도적, 해적, 모험가, 공용");
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
              var skillimage1 = skillM.getJobskillimage1(jobcode, skillcode);
              var skillimage2 = skillM.getJobskillimage2(jobcode, skillcode);
              //replier.reply(skillname + " : " + skilldesc1 + " " + skilldesc2 + " " + skillimage1 + " " + skillimage2);
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
            }
          }
        }
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
}

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

var accexps = [ 0, 15, 49, 106, 198, 333, 705, 1265, 2105, 3347, 4589, 5831, 7073, 8315, 9557, 11047, 12835, 14980, 17554, 20642, 24347, 28793, 34128, 40530, 48212, 57430, 68491, 81764, 97691, 116803, 135915, 155027, 174139, 193251, 212363, 235297, 262817, 295841, 335469, 383022, 434379, 489844, 549746, 614440, 684309, 759767, 841261, 929274, 1024328, 1126986, 1237856, 1357595, 1486913, 1626576, 1777412, 1940314, 2116248, 2306256, 2511464, 2733088, 2954712, 3176336, 3397960, 3619584, 3841208, 4079453, 4335566, 4610887, 4906857, 5225024, 5567053, 5934734, 6329991, 6754892, 7211660, 7700401, 8223353, 8782911, 9381638, 10022275, 10707756, 11441220, 12226026, 13065768, 13964291, 14925710, 15954428, 17055156, 18232934, 19493156, 20835292, 22264666, 23786949, 25408180, 27134791, 28973631, 30931995, 33017652, 35238876, 37604479, 39970082, 42335685, 44701288, 47066891, 49432494, 51951861, 54634986, 57492514, 60535781, 63776860, 67228609, 70904721, 74819780, 78989317, 83429873, 88159065, 93195654, 98559621, 104272245, 110356189, 116835589, 123736150, 131085247, 138912035, 147247564, 156124902, 165579266, 175648163, 186371538, 197791932, 209954651, 222907946, 236703205, 251395155, 267042081, 283706057, 301453191, 320353888, 340483130, 361920772, 384698266, 408899353, 434613007, 461933764, 490962068, 521804641, 554574874, 589393246, 626387766, 665694443, 707457787, 751831340, 798978240, 849071821, 902296250, 958847205, 1018932594, 1082773319, 1150604089, 1222674282, 1299248862, 1380609353, 1467054874, 1558903240, 1656492128, 1760180321, 1870349026, 1987403275, 2111773414, 2243916686, 2382667121, 2528355077, 2681327430, 2841948400, 3010600418, 3187685036, 3373623884, 3568859674, 3773857253, 3989104710, 4215114539, 4452424859, 4701600695, 4963235322, 5237951680, 5526403855, 5829278638, 6147297160, 6481216608, 6831832028, 7199978219, 7586531719, 7992412894, 8418588127, 8866072121, 9335930314, 9829281416, 10347300073, 10891219662, 11462335230, 13669361590, 16141231346, 18909725349, 22010438632, 25483237508, 29372772249, 33729051158, 38608083536, 44072599799, 50192858013, 59985271155, 70854849742, 82920081973, 96312489749, 111178062380, 130503306800, 151567823217, 174528146111, 199554898065, 226834057694, 270480713100, 317182634384, 367153690157, 420622719834, 477834581588, 552210001868, 630304193162, 712303094020, 798401939920, 888805728115, 1033451789227, 1182437232172, 1335892238405, 1493950894824, 1656751310935, 1868391851879, 2086381609051, 2310911058938, 2542176392321, 2780379685705, 3161504955119, 3554063982615, 3958399780935, 4374865653204, 4803825501641, 5361473304609, 5935850541666, 6527459095834, 7136815906627, 7764453421743, 9078218184097, 10405120594074, 11745292028150, 13098865176566, 14465974056466, 15846754025165, 17241341793550, 18649875439618, 20072494422146, 21509339594499, 24411766842652, 27343218363286, 30303984399126, 33294358095324, 36314635528483, 39365115735973, 42446100745537, 45557895605196, 48700808413451, 51875150349788, 58287321061188, 64763613479702, 71304668822401, 77911134718526, 84583665273612, 98062176994885, 112888539888285, 129197539071025, 147137438172039, 166871327183154, 206733782985606, 250582484368303, 298816055889269, 351872984562331, 410235606102699, 528128101614242, 657809846676939, 800459766245905, 957374677771767, 1129981080450210, 1478646013860670, 1862177440612180, 2284062010038850, 2748135036408170, 3258615365414430, 4289785630007070, 5424072921058980, 6671788941216080, 8044276563388880, 10103007996648000 ];
var exps = [ 15,34,57,92,135,372,560,840,1242,1242,1242,1242,1242,1242,1490,1788,2145,2574,3088,3705,4446,5335,6402,7682,9218,11061,13273,15927,19112,19112,19112,19112,19112,19112,22934,27520,33024,39628,47553,51357,55465,59902,64694,69869,75458,81494,88013,95054,102658,110870,119739,129318,139663,150836,162902,175934,190008,205208,221624,221624,221624,221624,221624,221624,238245,256113,275321,295970,318167,342029,367681,395257,424901,456768,488741,522952,559558,598727,640637,685481,733464,784806,839742,898523,961419,1028718,1100728,1177778,1260222,1342136,1429374,1522283,1621231,1726611,1838840,1958364,2085657,2221224,2365603,2365603,2365603,2365603,2365603,2365603,2519367,2683125,2857528,3043267,3241079,3451749,3676112,3915059,4169537,4440556,4729192,5036589,5363967,5712624,6083944,6479400,6900561,7349097,7826788,8335529,8877338,9454364,10068897,10723375,11420394,12162719,12953295,13795259,14691950,15646926,16663976,17747134,18900697,20129242,21437642,22777494,24201087,25713654,27320757,29028304,30842573,32770233,34818372,36994520,39306677,41763344,44373553,47146900,50093581,53224429,56550955,60085389,63840725,67830770,72070193,76574580,81360491,86445521,91848366,97588888,103688193,110168705,117054249,124370139,132143272,138750435,145687956,152972353,160620970,168652018,177084618,185938848,195235790,204997579,215247457,226009829,237310320,249175836,261634627,274716358,288452175,302874783,318018522,333919448,350615420,368146191,386553500,405881175,426175233,447483994,469858193,493351102,518018657,543919589,571115568,2207026470,2471869646,2768494003,3100713283,3472798876,3889534741,4356278909,4879032378,5464516263,6120258214,9792413142,10869578587,12065232231,13392407776,14865572631,19325244420,21064516417,22960322894,25026751954,27279159629,43646655406,46701921284,49971055773,53469029677,57211861754,74375420280,78094191294,81998900858,86098845900,90403788195,144646061112,148985442945,153455006233,158058656419,162800416111,211640540944,217989757172,224529449887,231265333383,238203293384,381125269414,392559027496,404335798320,416465872269,428959848437,557647802968,574377237057,591608554168,609356810793,627637515116,1313764762354,1326902409977,1340171434076,1353573148416,1367108879900,1380779968699,1394587768385,1408533646068,1422618982528,1436845172353,2902427248153,2931451520634,2960766035840,2990373696198,3020277433159,3050480207490,3080985009564,3111794859659,3142912808255,3174341936337,6412170711400,6476292418514,6541055342699,6606465896125,6672530555086,13478511721273,14826362893400,16308999182740,17939899101014,19733889011115,39862455802452,43848701382697,48233571520966,53056928673062,58362621540368,117892495511543,129681745062697,142649919568966,156914911525862,172606402678448,348664933410464,383531426751510,421884569426661,464073026369327,510480329006259,1031170264592640,1134287291051900,1247716020157090,1372487622172800,2058731433259200];
var ppgLangcode = [ "ko", "en", "ja", "zh-CN", "zh-TW", "vi", "id", "th", "de", "ru", "es", "it", "fr"];
var banList = [-640684580 ];

var adminNick = "리부트/258/보마";
var nickname = "";
var jobmention = "";
var chkjob = -1;