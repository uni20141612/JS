const scriptName = "사랑이봇";
/*(이 내용은 길잡이일 뿐이니 지우셔도 무방합니다)
*(String) room: 메시지를 받은 방 이름
*(String) msg: 메시지 내용
*(String) sender: 전송자 닉네임
*(boolean) isGroupChat: 단체/오픈채팅 여부
*replier: 응답용 객체. replier.reply("메시지") 또는 replier.reply("방이름","메시지")로 전송
*(String) ImageDB.getProfileImage(): 전송자의 프로필 이미지를 Base64로 인코딩하여 반환
*(String) packageName: 메시지를 받은 메신저의 패키지 이름. (카카오톡: com.kakao.talk, 페메: com.facebook.orca, 라인: jp.naver.line.android
*(int) threadId: 현재 쓰레드의 순번(스크립트별로 따로 매김) *Api,Utils객체에 대해서는 설정의 도움말 참조
*/

//var exps = import("exps");
function response(room, msg, sender, isGroupChat, replier, imageDB, packageName) {
  
    if(msg.startsWith("!보스")){
      var boss = msg.split(" ")[1];
      var re = getBoss(boss);
      replier.reply(re);
    }
    if(msg == "!리로드"){
      if(Api.reload(scriptName)){
        replier.reply("리로드 성공");
      }
      else{
        replier.reply("리로드 실패");
      }
    }
    if(msg == "!도움말"){
      var help = "<--봇 도움말-->\n\n";
      help += "!업데이트 : 최근 봇 업데이트 내역 \n\n";
      help += "!보스 (보스이름) : 보스 레벨, 체력, 방어율, 포스, 결정석가격 \n목록 - 각 보스별 인식 키워드 목록\n난이도 생략시 노말 우선\n\n";
      help += "!경험치 (시작레벨) (끝레벨) : 시작레벨부터 끝레벨까지 필요한 경험치량, 끝레벨 생략시 그 레벨 경험치통\n\n";
      help += "!캐릭터,!무릉,!시드,!유니온,!업적,!코디 + (캐릭터명) : 캐릭터 관련 정보 \n\n";
      help += "!날씨 (지역) : 그 지역 날씨 \n\n";
      help += "!한강 : 한강 물 온도 \n\n";
      help += "!갱신 (캐릭터이름) : 메이플gg 갱신 \n\n";
      help += "!방무 (몬스터 방어율) (현재 방어율) (추가 방어율1) (추가방어율2) ... : 총 방어율과 딜량을 계산함\n\n";
      help += "!데굴데굴, !데굴, !주사위 : 추억의 주사위 돌리기\n\n";
      help += "!강환/!강환불/!영환/!영환불 (렙제) (횟수) : \n 150, 160, 200제 방어구, 장신구의 추가옵션을 횟수만큼 돌립니다. \n횟수는 5이하 숫자만 가능하며 생략시 1회만 돌립니다.\n\n";
      help += "!경스토리/!겸스토리 (캐릭터이름) : 캐릭터의 경험치 히스토리를 보여줍니다.\n\n";
      help += "!렙스토리/!레벨스토리 (캐릭터이름) : 캐릭터의 레벨 히스토리를 보여줍니다.\n\n";
      help += "!(직업이름) : 간단한 직업 설명과 그 직업의 유니온 공격대원 효과, 링크스킬을 보여줍니다.";
      replier.reply(help);
    }
    if(msg == "!업데이트" || msg == "!업뎃"){
      var update = "봇 업데이트 내역\n";
      update += "21/07/08 - ver 1.0 Release\n";
      update += "21/07/09 - !한강 업데이트 \n"
      update += "21/07/10 - !캐릭터,!무릉,!시드,!유니온,!업적 업데이트 \n";
      update += "(!보스 목록) 추가 \n";
      update += "21/07/13 - !갱신, !코디 추가\n";
      update += "!방무, !데굴데굴 추가\n";
      update += "21/07/16 - !강환,!영환 추가\n";
      update += "!강환,영환 정수 오류 수정\n";
      update += "21/07/20 - 보스 레벨, 방어율, 포스 정보 추가\n";
      update += "!경스토리,!렙스토리 추가, 오류수정";
      update += "21/07/22 - !(직업이름) 추가";
      replier.reply(update);
    }
    if(msg == "테스트"){      
      replier.reply("테스트용입니다.");
    }
    if(msg.startsWith("!경험치")){
      var startlv = msg.split(" ")[1];
      var endlv = msg.split(" ")[2];
      if(startlv == undefined){
        replier.reply("(레벨)이 없네용");
      }
      else if(endlv == undefined){
        replier.reply("Lv." + startlv + " 경험치통: " + Jari(exps[startlv - 1]));
      }
      else{
        if(startlv >= endlv){
          replier.reply("오류 : 뒷레벨이 더 커야해용");
        }
        else{
          var remain = accexps[endlv - 1] - accexps[startlv - 1];
          replier.reply("Lv." + startlv + " → Lv." + endlv + " 경험치통: " + Jari(remain));
        }
      }
    }
    if (msg.startsWith("!날씨"))  {
      if(msg.slice(4) == "" || msg.split(" ")[1] == undefined){
        replier.reply("!날씨 (지역이름) 형태로 다시 입력해주십시오.");
      }
      else{
    	let isarea = encodeURIComponent(msg.slice(4)+" 날씨");
        let area = "https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=0&ie=utf8&query=" + isarea;
        let temp = org.jsoup.Jsoup.connect(area).get().select("#main_pack > section.sc_new.cs_weather._weather > div > div.api_cs_wrap > div.weather_box > div.weather_area._mainArea > div.today_area._mainTabContent > div.main_info > div > p > span.todaytemp");
        temp = temp.toString();
        let firstT = temp.indexOf(">");
        temp = temp.slice(firstT+1, temp.length);
        let secondT = temp.indexOf("<");
        temp = temp.slice(0, secondT);

        let word = org.jsoup.Jsoup.connect(area).get().select("#main_pack > section.sc_new.cs_weather._weather > div > div.api_cs_wrap > div.weather_box > div.weather_area._mainArea > div.today_area._mainTabContent > div.main_info > div > ul > li:nth-child(1) > p");
        word = word.toString();
        let firstW = word.indexOf(">");
        word = word.slice(firstW+1, word.length);
        let secondW = word.indexOf("<");
        word = word.slice(0, secondW);
        if(temp != "" && word != "") {
        replier.reply(msg.slice(4) + "의 날씨\n" + temp + "℃, " + word)
        }
        else{
          replier.reply(msg.slice(4) + "에 대한 날씨정보를 찾는 것을 실패하였습니다.")
        }
      }
    }
    if(msg == "!한강" || msg == "!ㅎㄱ"){
      var riverTemp = Utils.getWebText("http://hangang.dkserver.wo.tc/");
      var dataR1 = riverTemp.indexOf("p");
      riverTemp = riverTemp.slice(dataR1+4, riverTemp.length);
      var dataR2 = riverTemp.indexOf("\"");
      var timeR = riverTemp.slice(dataR2, riverTemp.length);
      riverTemp = riverTemp.slice(0, dataR2);
      var dataR3 = timeR.indexOf("e");
      timeR = timeR.slice(dataR3 + 4, timeR.length-41);
      //replier.reply(riverTemp + " °C, " + timeR + " 기준");
      replier.reply(timeR + " 기준 " + riverTemp + " °C");
    }
    if(msg.startsWith("!캐릭터")){
      var nickname = msg.split(" ")[1];
      if(nickname == undefined){
        replier.reply("캐릭터 이름을 입력해주세용");
      }
      else{
        var maplegg = "https://maple.gg/u/" + nickname;
        var dataC1 = org.jsoup.Jsoup.connect(maplegg).get();
        dataC1 = dataC1.toString();

        if(dataC1.indexOf("검색결과 없음") != -1){
          replier.reply("그런 캐릭터는 없습니다.");
        }
        else{ 
          var dataC2 = dataC1.split("<meta property=\"og:description\" content=\"")[1];
          var dataC3 = dataC2.split("\">")[0];
          var dataC4_nameandServer = dataC3.split(",")[0];
          var dataC4_mureung = dataC3.split(",")[1];  if(dataC4_mureung == undefined){ dataC4_mureung = "-";}
          var dataC4_seed = dataC3.split(",")[2];   if(dataC4_seed == undefined)  {dataC4_seed = "-";}
          var dataC4_union = dataC3.split(",")[3];    if(dataC4_union == undefined)   {dataC4_union = "-";}
          var dataC4_achievement = dataC3.split(",")[4];  if(dataC4_achievement == undefined) {dataC4_achievement = "-";}
          var dataC5 = dataC1.split("<li class=\"user-summary-item\">")[1];
          var dataC6 = dataC5.split("</li>")[0];
          var dataC7 = dataC1.split("<li class=\"user-summary-item\">")[2];
          var dataC8 = dataC7.split("</li>")[0];

          replier.reply(dataC4_nameandServer + "\n" + dataC6 + " " + dataC8 + "\n" + dataC4_mureung + "\n" + dataC4_seed + "\n" + dataC4_union + "\n" + dataC4_achievement);
        }
      }
    }
    if(msg.startsWith("!무릉") || msg.startsWith("!시드") || msg.startsWith("!유니온") || msg.startsWith("!업적")){
      var nickname = msg.split(" ")[1];
      if(nickname == undefined){
        replier.reply("캐릭터 이름을 입력해주세용");
      }
      else{
        var maplegg = "https://maple.gg/u/" + nickname;
        //var charInfo = Utils.getWebText("https://maple.gg/", "Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2228.0 Safari/537.36", false, false);
        var dataC1 = org.jsoup.Jsoup.connect(maplegg).get();
        dataC1 = dataC1.toString();
        
        if(dataC1.indexOf("검색결과 없음") != -1){
          replier.reply("그런 캐릭터는 없습니다.");
        }
        else{                
          if(msg.startsWith("!무릉")){
            dataM1 = dataC1.split("도장</span> 최고기록")[1];
            dataM2 = dataM1.split("더시드 최고기록")[0];
            if(dataM2.indexOf("user-summary-no-data") == -1){
              dataM3 = dataM2.split("<h1 class=\"user-summary-floor font-weight-bold\">")[1];
              dataM4 = dataM3.split("</small>")[0];
              dataM5 = dataM4.split("</h1>")[0];
              dataM6 = dataM4.split("\">")[1];
              replier.reply(dataM5 + ", " + dataM6);
            }
            else{
              replier.reply("이 캐릭터는 무릉 기록이 없습니다.")
            }
          }
      
          if(msg.startsWith("!시드")){
            dataS1 = dataC1.split("더시드 최고기록")[1];
            dataS2 = dataS1.split("유니온")[0];
            if(dataS2.indexOf("user-summary-no-data") == -1){
              dataS3 = dataS2.split("<h1 class=\"user-summary-floor font-weight-bold\">")[1];
              dataS4 = dataS3.split("</small>")[0];
              dataS5 = dataS4.split("</h1>")[0];
              dataS6 = dataS4.split("\">")[1];
              replier.reply(dataS5 + ", " + dataS6);
            }
            else{
              replier.reply("이 캐릭터는 시드 기록이 없습니다.")
            }
          }

          if(msg.startsWith("!유니온")){
            dataU1 = dataC1.split("유니온 <i")[1];
            dataU2 = dataU1.split("업적")[0];
            if(dataU2.indexOf("user-summary-no-data") == -1){
              dataU3 = dataU2.split("bold\">")[1];
              dataU4 = dataU3.split("</div>")[0].trim();
              dataU5 = dataU3.split("level\">")[1];
              dataU6 = dataU5.split("</span>")[0];

              replier.reply(dataU4 + ", " + dataU6);
            }
            else{
              replier.reply("이 캐릭터는 대표캐릭터가 아니라서 유니온 조회가 되지 않습니다.")
            }
          }

          if(msg.startsWith("!업적")){
            dataA1 = dataC1.split("업적 <i")[1];
            dataA2 = dataA1.split("</section>")[0];
            if(dataA2.indexOf("user-summary-no-data") == -1){
              dataA3 = dataA2.split("bold\">")[1];
              dataA4 = dataA3.split("</div>")[0].trim();
              dataA5 = dataA3.split("업적점수 ")[1];
              dataA6 = dataA5.split("</span>")[0];

              replier.reply(dataA4 + ", " + dataA6);
            }
            else{
              replier.reply("이 캐릭터는 업적 정보가 없습니다.")
            }
          }
        }
      }
    }
    if(msg.startsWith("!갱신")){
      var nickname = msg.split(" ")[1];
      if(nickname == undefined){
        replier.reply("캐릭터 이름을 입력해주세용");
      }
      else{
        replier.reply(mapleupdate(nickname));
      }
    }
    if(msg.startsWith("!코디")){
      var nickname = msg.split(" ")[1];
      if(nickname == undefined){
        replier.reply("캐릭터 이름을 입력해주세용");
      }
      else{
        var maplegg = "https://maple.gg/u/" + nickname;
        var dataC1 = org.jsoup.Jsoup.connect(maplegg).get();
        dataC1 = dataC1.toString();

        if(dataC1.indexOf("검색결과 없음") != -1){
          replier.reply("그런 캐릭터는 없습니다.");
        }
        else{ 
          var dataCo1 = dataC1.split("코디 분석")[1];
          var dataCo2 = dataCo1.split("<div class=\"col-6 col-md-8 col-lg-6\">")[0];

          var dataMoja1 = dataCo2.split("모자</span>")[1];
          var dataMoja2 = dataMoja1.split(">")[1];
          var dataMoja3 = dataMoja2.split("</span")[0];

          var dataHair1 = dataCo2.split("헤어</span>")[1];
          var dataHair2 = dataHair1.split(">")[1];
          var dataHair3 = dataHair2.split("</span")[0];

          var dataFace1 = dataCo2.split("성형</span>")[1];
          var dataFace2 = dataFace1.split(">")[1];
          var dataFace3 = dataFace2.split("</span")[0];

          var dataTshirt1 = dataCo2.split("상의</span>")[1];
          var dataTshirt2 = dataTshirt1.split(">")[1];
          var dataTshirt3 = dataTshirt2.split("</span")[0];

          var dataPants1 = dataCo2.split("하의</span>")[1];
          var dataPants2 = dataPants1.split(">")[1];
          var dataPants3 = dataPants2.split("</span")[0];

          var dataShoe1 = dataCo2.split("신발</span>")[1];
          var dataShoe2 = dataShoe1.split(">")[1];
          var dataShoe3 = dataShoe2.split("</span")[0];

          var dataWeapon1 = dataCo2.split("무기</span>")[1];
          var dataWeapon2 = dataWeapon1.split(">")[1];
          var dataWeapon3 = dataWeapon2.split("</span")[0];

          replier.reply("모자: " + dataMoja3 + "\n헤어: " + dataHair3 + "\n성형: " + dataFace3 + "\n상의: " + dataTshirt3 + "\n하의: " + dataPants3 + "\n신발: " + dataShoe3 + "\n무기: " + dataWeapon3);
        }
      }
    }
    if(msg.startsWith("!방무")){
      var mobDef = msg.split(" ")[1];
      var myDef = msg.split(" ")[2];
      if(mobDef == undefined){
        replier.reply("몬스터 방어율을 입력해주세요.");
      }
      else if(mobDef != undefined && myDef == undefined){
        replier.reply("현재 방어율을 입력해주세요.");
      }
      else if(myDef < 0){
        replier.reply("현재 방어율은 음수가 될 수 없습니다.");
      }
      else{
        //var lengs = msg.split(" ").length;
        //replier.reply(mobDef + " " + myDef + " " + lengs);
        var defResult = defenseRate(msg);
        replier.reply(defResult);
      }
    }
    if(msg == "!데굴" || msg == "!데굴데굴" || msg == "!주사위"){
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

      replier.reply(sender + "\n\nSTR : " + STR + "\nDEX : " + DEX + "\nINT : " + INT + "\nLUK : " + LUK);
    }
    if(msg.startsWith("!영환") || msg.startsWith("!영환불")){
      var addLevel = msg.split(" ")[1];
      if(addLevel == undefined){
        replier.reply("레벨을 입력해주세용");
      }
      else if(addLevel != 150 && addLevel != 160 && addLevel != 200){
        replier.reply("레벨은 150, 160, 200만 가능합니다.");
      }
      else{
        var addResult = "";
        if(addLevel == 150){
          addResult += "150제 아이템 ";
        }
        else if(addLevel == 160){
          addResult += "160제 아이템 ";
        }
        else if(addLevel == 200){
          addResult += "200제 아이템 ";
        }
        if(msg.split(" ")[2] == undefined || msg.split(" ")[2] == 1){
          var addition = [];
          addEternal(addition);
          
          let addList = [];
          var additer = 0;
          while(additer < 4){
            var n = getRandomInt(0,19);
            if(!isSameadd(n, addList)){
              addList.push(n);
              additer++;
            }
          }
          addResult += "\n";
          addResult = addgetResult(addition, addLevel, addList, addResult);
          var addlen = addResult.length;
          addResult = addResult.slice(0, addlen-1);

          replier.reply(addResult);
        }
        else if(msg.split(" ")[2] > 0 && msg.split(" ")[2] < 6 && msg.split(" ")[2] % 1 === 0){
          addResult += msg.split(" ")[2];
          addResult += "회\n";
          for(var i = 0; i < msg.split(" ")[2]; ++i){
            var addition = [];
            addEternal(addition);
          
            let addList = [];
            var additer = 0;
            while(additer < 4){
              var n = getRandomInt(0,19);
              if(!isSameadd(n, addList)){
                addList.push(n);
                additer++;
              }
            }
            addResult = addgetResult(addition, addLevel, addList, addResult);
            addResult += "\n";
          }
          var addlen = addResult.length;
          addResult = addResult.slice(0, addlen-2);

          replier.reply(addResult);
        }
        else{
          replier.reply("횟수가 5를 초과하거나 올바른 숫자가 아닙니다.");
        }
      }
    }
    if(msg.startsWith("!강환") || msg.startsWith("!강환불")){
      var addLevel = msg.split(" ")[1];
      if(addLevel == undefined){
        replier.reply("레벨을 입력해주세용");
      }
      else if(addLevel != 150 && addLevel != 160 && addLevel != 200){
        replier.reply("레벨은 150, 160, 200만 가능합니다.");
      }
      else{
        var addResult = "";
        if(addLevel == 150){
          addResult += "150제 아이템 ";
        }
        else if(addLevel == 160){
          addResult += "160제 아이템 ";
        }
        else if(addLevel == 200){
          addResult += "200제 아이템 ";
        }
        if(msg.split(" ")[2] == undefined || msg.split(" ")[2] == 1){
          var addition = [];
          addStrong(addition);
          
          let addList = [];
          var additer = 0;
          while(additer < 4){
            var n = getRandomInt(0,19);
            if(!isSameadd(n, addList)){
              addList.push(n);
              additer++;
            }
          }
          addResult += "\n";
          addResult = addgetResult(addition, addLevel, addList, addResult);
          var addlen = addResult.length;
          addResult = addResult.slice(0, addlen-1);

          replier.reply(addResult);
        }
        else if(msg.split(" ")[2] > 0 && msg.split(" ")[2] < 6 && msg.split(" ")[2] % 1 === 0){
          addResult += msg.split(" ")[2];
          addResult += "회\n";
          for(var i = 0; i < msg.split(" ")[2]; ++i){
            var addition = [];
            addStrong(addition);
          
            let addList = [];
            var additer = 0;
            while(additer < 4){
              var n = getRandomInt(0,19);
              if(!isSameadd(n, addList)){
                addList.push(n);
                additer++;
              }
            }
            addResult = addgetResult(addition, addLevel, addList, addResult);
            addResult += "\n";
          }
          var addlen = addResult.length;
          addResult = addResult.slice(0, addlen-2);

          replier.reply(addResult);
        }
        else{
          replier.reply("횟수가 5를 초과하거나 올바른 숫자가 아닙니다.");
        }
      }
    }
    if(msg.startsWith("!경스토리") || msg.startsWith("!겸스토리")){
      var nickname = msg.split(" ")[1];
      if(nickname == undefined){
        replier.reply("캐릭터 이름을 입력해주세용");
      }
      else{
        var maplegg = "https://maple.gg/u/" + nickname;
        var dataC1 = org.jsoup.Jsoup.connect(maplegg).get();
        dataC1 = dataC1.toString();

        if(dataC1.indexOf("검색결과 없음") != -1){
          replier.reply("그런 캐릭터는 없습니다.");
        }
        else{ 
          try{
          var dataHis1 = dataC1.split("expHistoryLabels = [{\"")[1];
          var dataHis2 = dataHis1.split("c3.generate")[0];

          var dataHisLevel = [];
          for(var i = 0; i < 7; ++i){
            var tempHisLevel = dataHis2.split("level\":\"")[i+1];
            dataHisLevel[i] = tempHisLevel.split("\",")[0];
          }

          var dataHisExp = [];
          for(var i = 0; i < 7; ++i){
            var tempHisExp = dataHis2.split("exp\":")[i+1];
            dataHisExp[i] = tempHisExp.split("}")[0];
          }

          var dataHis3 = dataHis1.split("columns: [[")[1];
          var dataHis4 = dataHis3.split("exp")[0];

          var dataHisYear = [];
          for(var i = 0; i < 7; ++i){
            dataHisYear[i] = "21";
          }
          var dataHisMonth = [];
          for(var i = 0; i < 7; ++i){
            var tempHisMonth = dataHis4.split(",\"")[i+1];
            tempHisMonth = tempHisMonth.split("\\uc6d4")[0];
            if(tempHisMonth.length > 2){
              dataHisYear[i] = tempHisMonth.split("\\ub144")[0];
              tempHisMonth = tempHisMonth.split(" ")[1];
            }
            dataHisMonth[i] = tempHisMonth;
          }

          var dataHisDay = [];
          for(var i = 0; i < 7; ++i){
            var tempHisDay = dataHis4.split("uc6d4 ")[i+1];
            dataHisDay[i] = tempHisDay.split("\\")[0];
          }
          var history = "";
          history += "[";  history += nickname; history += "]\n";
          for(var i = 0; i < 7; ++i){
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
      var nickname = msg.split(" ")[1];
      if(nickname == undefined){
        replier.reply("캐릭터 이름을 입력해주세용");
      }
      else{
        var maplegg = "https://maple.gg/u/" + nickname;
        var dataC1 = org.jsoup.Jsoup.connect(maplegg).get();
        dataC1 = dataC1.toString();

        if(dataC1.indexOf("검색결과 없음") != -1){
          replier.reply("그런 캐릭터는 없습니다.");
        }
        else{ 
          try{
            var dataLvHis = dataC1.split("columns: [[\"x\"")[2];
            dataLvHis = dataLvHis.split("]]")[0];

            var dataLvHisYear = [];
            for(var i = 0; i < 7; ++i){
              dataLvHisYear[i] = "21";
            }
            var dataLvHisMonth = [];
            for(var i = 0; i < 7; ++i){
              var tempLvMonth = dataLvHis.split(",\"")[i+1];
              tempLvMonth = tempLvMonth.split("\\uc6d4")[0];
              if(tempLvMonth.length > 2){
                dataLvHisYear[i] = tempLvMonth.split("\\ub144")[0];
                tempLvMonth = tempLvMonth.split(" ")[1];
              }
              dataLvHisMonth[i] = tempLvMonth;
            }

            var dataLvHisDay = [];
            for(var i = 0; i < 7; ++i){
              var tempLvDay = dataLvHis.split("uc6d4 ")[i+1];
              dataLvHisDay[i] = tempLvDay.split("\\")[0];
            }

            var dataLvHisLv = dataLvHis.split("level")[1];
            var dataLvHisLevel = [];
            for(var i = 0; i < 7; ++i){
              var tempLv = dataLvHisLv.split(",\"")[i+1];
              dataLvHisLevel[i] = tempLv.split("\"")[0];
            }

            var hisLv = "";
            hisLv += "[";  hisLv += nickname; hisLv += "]\n";
            for(var i = 0; i < 7; ++i){
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
    for(var i = 0; i < jobList.length; ++i){
      if(msg == jobList[i]){
        replier.reply(jobMentionList[i]);
      }
    }
}

function addgetResult(addition, addLevel, addList, addResult){
  var addSTR = 0, addDEX = 0, addINT = 0, addLUK = 0, addHP = 0, addMP = 0, addAll = 0, addATK = 0, addMagic = 0, addMove = 0, addJump = 0, addDEF = 0, addDR = 0;

  if(addLevel == 150){
    for(var i = 0; i < addList.length; ++i){
    var addList_one = addList[i];
    switch(addList_one){
      case 0:
        addSTR += add150[addition[i] + (5 * addList_one)];
        break;
      case 1:
        addDEX += add150[addition[i] + (5 * addList_one)];
        break;
      case 2:
        addINT += add150[addition[i] + (5 * addList_one)];
        break;
      case 3:
        addLUK += add150[addition[i] + (5 * addList_one)];
        break;
      case 4:
        addSTR += add150[addition[i] + (5 * addList_one)];
        addDEX += add150[addition[i] + (5 * addList_one)];
        break;
      case 5:
        addSTR += add150[addition[i] + (5 * addList_one)];
        addINT += add150[addition[i] + (5 * addList_one)];
        break;
      case 6:        
        addSTR += add150[addition[i] + (5 * addList_one)];
        addLUK += add150[addition[i] + (5 * addList_one)];
        break;
      case 7:
        addDEX += add150[addition[i] + (5 * addList_one)];
        addINT += add150[addition[i] + (5 * addList_one)];
        break;
      case 8:
        addDEX += add150[addition[i] + (5 * addList_one)];
        addLUK += add150[addition[i] + (5 * addList_one)];
        break;
      case 9:        
        addINT += add150[addition[i] + (5 * addList_one)];
        addLUK += add150[addition[i] + (5 * addList_one)];
        break;
      case 10:
        addHP += add150[addition[i] + (5 * addList_one)];
        break;
      case 11:
        addMP += add150[addition[i] + (5 * addList_one)];
        break;
      case 12:
        addAll += add150[addition[i] + (5 * addList_one)];
        break;
      case 13:
        addATK += add150[addition[i] + (5 * addList_one)];
        break;
      case 14:
        addMagic += add150[addition[i] + (5 * addList_one)];
        break;
      case 15:
        addMove += add150[addition[i] + (5 * addList_one)];
        break;
      case 16:
        addJump += add150[addition[i] + (5 * addList_one)];
        break;
      case 17:
        addDEF += add150[addition[i] + (5 * addList_one)];
        break;
      case 18:
        addDR += add150[addition[i] + (5 * addList_one)];
        break;
    }
  }
  }
  else if(addLevel == 160){
  for(var i = 0; i < addList.length; ++i){
    var addList_one = addList[i];
    switch(addList_one){
      case 0:
        addSTR += add160[addition[i] + (5 * addList_one)];
        break;
      case 1:
        addDEX += add160[addition[i] + (5 * addList_one)];
        break;
      case 2:
        addINT += add160[addition[i] + (5 * addList_one)];
        break;
      case 3:
        addLUK += add160[addition[i] + (5 * addList_one)];
        break;
      case 4:
        addSTR += add160[addition[i] + (5 * addList_one)];
        addDEX += add160[addition[i] + (5 * addList_one)];
        break;
      case 5:
        addSTR += add160[addition[i] + (5 * addList_one)];
        addINT += add160[addition[i] + (5 * addList_one)];
        break;
      case 6:        
        addSTR += add160[addition[i] + (5 * addList_one)];
        addLUK += add160[addition[i] + (5 * addList_one)];
        break;
      case 7:
        addDEX += add160[addition[i] + (5 * addList_one)];
        addINT += add160[addition[i] + (5 * addList_one)];
        break;
      case 8:
        addDEX += add160[addition[i] + (5 * addList_one)];
        addLUK += add160[addition[i] + (5 * addList_one)];
        break;
      case 9:        
        addINT += add160[addition[i] + (5 * addList_one)];
        addLUK += add160[addition[i] + (5 * addList_one)];
        break;
      case 10:
        addHP += add160[addition[i] + (5 * addList_one)];
        break;
      case 11:
        addMP += add160[addition[i] + (5 * addList_one)];
        break;
      case 12:
        addAll += add160[addition[i] + (5 * addList_one)];
        break;
      case 13:
        addATK += add160[addition[i] + (5 * addList_one)];
        break;
      case 14:
        addMagic += add160[addition[i] + (5 * addList_one)];
        break;
      case 15:
        addMove += add160[addition[i] + (5 * addList_one)];
        break;
      case 16:
        addJump += add160[addition[i] + (5 * addList_one)];
        break;
      case 17:
        addDEF += add160[addition[i] + (5 * addList_one)];
        break;
      case 18:
        addDR += add160[addition[i] + (5 * addList_one)];
        break;
    }
  }
  }
  else if(addLevel == 200){
  for(var i = 0; i < addList.length; ++i){
    var addList_one = addList[i];
    switch(addList_one){
      case 0:
        addSTR += add200[addition[i] + (5 * addList_one)];
        break;
      case 1:
        addDEX += add200[addition[i] + (5 * addList_one)];
        break;
      case 2:
        addINT += add200[addition[i] + (5 * addList_one)];
        break;
      case 3:
        addLUK += add200[addition[i] + (5 * addList_one)];
        break;
      case 4:
        addSTR += add200[addition[i] + (5 * addList_one)];
        addDEX += add200[addition[i] + (5 * addList_one)];
        break;
      case 5:
        addSTR += add200[addition[i] + (5 * addList_one)];
        addINT += add200[addition[i] + (5 * addList_one)];
        break;
      case 6:        
        addSTR += add200[addition[i] + (5 * addList_one)];
        addLUK += add200[addition[i] + (5 * addList_one)];
        break;
      case 7:
        addDEX += add200[addition[i] + (5 * addList_one)];
        addINT += add200[addition[i] + (5 * addList_one)];
        break;
      case 8:
        addDEX += add200[addition[i] + (5 * addList_one)];
        addLUK += add200[addition[i] + (5 * addList_one)];
        break;
      case 9:        
        addINT += add200[addition[i] + (5 * addList_one)];
        addLUK += add200[addition[i] + (5 * addList_one)];
        break;
      case 10:
        addHP += add200[addition[i] + (5 * addList_one)];
        break;
      case 11:
        addMP += add200[addition[i] + (5 * addList_one)];
        break;
      case 12:
        addAll += add200[addition[i] + (5 * addList_one)];
        break;
      case 13:
        addATK += add200[addition[i] + (5 * addList_one)];
        break;
      case 14:
        addMagic += add200[addition[i] + (5 * addList_one)];
        break;
      case 15:
        addMove += add200[addition[i] + (5 * addList_one)];
        break;
      case 16:
        addJump += add200[addition[i] + (5 * addList_one)];
        break;
      case 17:
        addDEF += add200[addition[i] + (5 * addList_one)];
        break;
      case 18:
        addDR += add200[addition[i] + (5 * addList_one)];
        break;
    }
  }
  }

  if(addSTR != 0){
    addResult += "STR : +";
    addResult += addSTR;
    addResult += "\n";
  }
  if(addDEX != 0){
    addResult += "DEX : +";
    addResult += addDEX;
    addResult += "\n";
  }
  if(addINT != 0){
    addResult += "INT : +";
    addResult += addINT;
    addResult += "\n";
  }
  if(addLUK != 0){
    addResult += "LUK : +";
    addResult += addLUK;
    addResult += "\n";
  }
  if(addHP != 0){
    addResult += "최대 HP : +";
    addResult += addHP;
    addResult += "\n";
  }
  if(addMP != 0){
    addResult += "최대 MP : +";
    addResult += addMP;
    addResult += "\n";
  }
  if(addATK != 0){
    addResult += "공격력 : +";
    addResult += addATK;
    addResult += "\n";
  }
  if(addMagic != 0){
    addResult += "마력 : +";
    addResult += addMagic;
    addResult += "\n";
  }
  if(addDEF != 0){
    addResult += "방어력 : +";
    addResult += addDEF;
    addResult += "\n";
  }
  if(addMove != 0){
    addResult += "이동속도 : +";
    addResult += addMove;
    addResult += "\n";
  }
  if(addJump != 0){
    addResult += "점프력 : +";
    addResult += addJump;
    addResult += "\n";
  }
  if(addAll != 0){
    addResult += "올스탯 : +";
    addResult += addAll;
    addResult += "%\n";
  }
  if(addDR != 0){
    addResult += "착용 레벨 감소 : ";
    addResult += addDR;
    addResult += "\n";
  }
  return addResult;
}

function addEternal(addition){  
  for(var i = 0; i < 4; ++i){
    var ranA = getRandomInt(1, 101);

    if(ranA < 30){ addition.push(1);}
    else if(ranA >= 30 && ranA < 75){ addition.push(2);}
    else if(ranA >= 75 && ranA < 100){ addition.push(3);}
    else {addition.push(4);}
  }
}

function addStrong(addition){  
  for(var i = 0; i < 4; ++i){
    var ranA = getRandomInt(1, 101);

    if(ranA < 21){ addition.push(0);}
    else if(ranA >= 21 && ranA < 51){ addition.push(1);}
    else if(ranA >= 51 && ranA < 87){ addition.push(2);}
    else {addition.push(3);}
  }
}

function isSameadd(n, addList){
  for(var i = 0; i < addList.length; ++i){
    if(n === addList[i]){
      return true;
    }
  }
  return false;
}

function getWeatherInfo(pos) {

  try{
  
  var data = Utils.getWebText("https://m.search.naver.com/search.naver?query=" + pos + "%20날씨");
  
  data = data.replace(/<[^>]+>/g,""); //태그 삭제
  
  data = data.split("월간")[1]; //날씨 정보 시작 부분의 윗부분 삭제
  
  data = data.split("시간별 예보")[0]; //날씨 정보 끝 부분의 아래쪽 부분 삭제
  
  data = data.trim(); //위아래에 붙은 불필요한 공백 삭제
  
  data = data.split("\n"); //엔터 단위로 자름
  
  ​
  
  description = data[33].split("어제보다")[1].trim();
  
  descript_tempa1 = description.split("° ")[0];
  
  descript_tempa2 = description.split("요")[0];
  
  descript_state = description.split("요")[1];
  
  ​
  
  Temperature = data[6].split("온도")[1].trim();
  
  var results = [ ];
  
  results[0] = "☆ 어제보다 " + descript_tempa2+"요! ☆";
  
  results[1] = "현재온도 : "+Temperature+ " / 체감온도 : "+data[30].trim();
  
  results[2] ="최저온도 : "+data[23].trim()+ "/ 최고온도 : "+data[16].trim() ;
  
  results[3] = data[49].trim() + " : "+data[50].trim(); //미세
  
  results[4] = data[62].trim() + " : "+data[63].trim();  //초미세
  
  results[5] = "습도 : " +data[94].trim() +" "+ data[89].trim()+"%";
  
  results[6] = "바람 : " +data[107].trim()+" "+data[102].trim()+"m/s"; 
  
  results[7] = data[81].trim()+ " / " +data[82].trim(); //자외선
  
  var result = "[" + pos + " 날씨 정보] "+"  《"+descript_state+"》\n"+results.join("\n");
  
  return result; //결과 반환
  
  } catch(e) {
  
  return null;
  
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

function getBoss(boss)
{
  var rep = "";
      switch(boss)
      {
        case "목록":
          rep = bossnameList;
          break;
        case "이지자쿰":
          rep = bossList[0];
          break;
        case "노말자쿰":
        case "자쿰":
          rep = bossList[1];
          break;
        case "피아누스":
          rep = bossList[2];
          break;
        case "노말반반":
        case "반반":
          rep = bossList[3];
          break;
        case "노말피에르":
        case "노말삐에르":
        case "피에르":
        case "삐에르":
          rep = bossList[4];
          break;
        case "노말블러디퀸":
        case "노블퀸":
        case "블러디퀸":
        case "블퀸":
          rep = bossList[5];
          break;
        case "이지파풀라투스":
        case "이지파풀":
          rep = bossList[6];
          break;
        case "이지매그너스":
        case "이지매그":
          rep = bossList[7];
          break;
        case "노말힐라":
        case "힐라":
          rep = bossList[8];
          break;
        case "노말벨룸":
        case "벨룸":
          rep = bossList[9];
          break;
        case "이지반레온":
        case "이지반래온":
          rep = bossList[10];
          break;
        case "이지혼테일":
        case "이지혼텔":
          rep = bossList[11];
          break;
        case "카웅":
          rep = bossList[12];
          break;
        case "이지아카이럼":
          rep = bossList[13];
          break;
        case "노말혼테일":
        case "노말혼텔":
        case "혼테일":
        case "혼텔":
          rep = bossList[14];
          break;
        case "노말매그너스":
        case "매그너스":
        case "노매그":
        case "매그":
          rep = bossList[15];
          break;
        case "노말반레온":
        case "노말반래온":
        case "반레온":
        case "반래온":
          rep = bossList[16];
          break;
        case "노말핑크빈":
        case "노핑":
        case "핑크빈":
          rep = bossList[17];
          break;
        case "하드반레온":
        case "하드반래온":
          rep = bossList[18];
          break;
        case "이지시그너스":
        case "이시그":
          rep = bossList[19];
          break;
        case "노말아카이럼":
        case "아카이럼":
          rep = bossList[20];
          break;
        case "노말파풀라투스":
        case "노말파풀":
        case "파풀라투스":
        case "파풀":
          rep = bossList[21];
          break;
        case "하드힐라":
        case "하힐":
          rep = bossList[22];
          break;
        case "카오스혼테일":
        case "카텔":
        case "카혼텔":
          rep = bossList[23];
          break;
        case "노말시그너스":
        case "노말시그":
        case "노시그":
        case "시그너스":
        case "시그":
          rep = bossList[24];
          break;
        case "카오스피에르":
        case "카오스삐에르":
        case "카피":
        case "카삐":
          rep = bossList[25];
          break;
        case "카오스자쿰":
        case "카쿰":
          rep = bossList[26];
          break;
        case "카오스반반":
        case "카반반":
        case "카반":
          rep = bossList[27];
          break;
        case "하드매그너스":
        case "하매그":
        case "하매":
          rep = bossList[28];
          break;
        case "카오스블러디퀸":
        case "카블퀸":
          rep = bossList[29];
          break;
        case "카오스벨룸":
        case "카벨룸":
        case "카벨":
          rep = bossList[30];
          break;
        case "카오스핑크빈":
        case "카핑빈":
        case "카핑":
          rep = bossList[31];
          break;
        case "카오스파풀라투스":
        case "카파풀":
          rep = bossList[32];
          break;
        case "불꽃늑대":
        case "불늑":
          rep = bossList[33];
          break;
        case "도로시":
        case "시드":
          rep = bossList[34];
          break;
        case "노말데미안":
        case "노데미":
        case "데미안":
        case "데미":
          rep = bossList[35];
          break;
        case "노말스우":
        case "노스우":
        case "스우":
          rep = bossList[36];
          break;        
        case "우르스":
        case "우루스":
          rep = bossList[37];
          break;
        case "이지루시드":
        case "이루시":
          rep = bossList[38];
          break;
        case "노말루시드":
        case "노루시":
        case "루시드":
        case "루시":
          rep = bossList[39];
          break;
        case "노말윌":
        case "노윌":
        case "윌":
          rep = bossList[40];
          break;
        case "노말거대괴수더스크":
        case "노말더스크":
        case "노더스크":
        case "노더":
        case "거대괴수더스크":
        case "더스크":
          rep = bossList[41];
          break;
        case "노말친위대장듄켈":
        case "노말듄켈":
        case "노듄켈":
        case "노듄":
        case "친위대장듄켈":
        case "듄켈":
          rep = bossList[42];
          break;
        case "하드스우":
        case "하스우":
          rep = bossList[43];
          break;
        case "하드데미안":
        case "하데미":
          rep = bossList[44];
          break;
        case "하드루시드":
        case "하루시":
          rep = bossList[45];
          break;
        case "카오스거대괴수더스크":
        case "카오스더스크":
        case "카더스크":
        case "카더":
          rep = bossList[46];
          break;
        case "하드윌":
        case "하윌":
          rep = bossList[47];
          break;
        case "하드친위대장듄켈":
        case "하드듄켈":
        case "하듄켈":
        case "하듄":
          rep = bossList[48];
          break;
        case "진힐라":
        case "진힐":
          rep = bossList[49];
          break;
        case "선택받은세렌":
        case "세렌":
          rep = bossList[50];
          break;
        case "검은마법사":
        case "검마":
        case "검멘":
          rep = bossList[51];
          break;
        case "아르카누스":
        case "수로":
        case "길드":          
          rep = bossList[52];
          break;
        default:
          rep = "그런 보스는 없습니다.";
      }
      return rep;
}

function Jari(level){
  var ret = "";
  if(level < 10000){
    ret = level + "";
  }
  else if(level < 100000000 && level >= 10000)
  {
    ret = parseInt(level / 10000) + "만 " + parseInt(level % 10000);
  }
  else if(level < 1000000000000 && level >= 100000000)
  {
    ret = parseInt(level / 100000000) + "억 " + parseInt((level % 100000000) / 10000) + "만 " + level % 10000;
  }
  else if(level < 10000000000000000 & level >= 1000000000000)
  {
    ret = parseInt(level / 1000000000000) + "조 " + parseInt((level % 1000000000000) / 100000000) + "억 " + parseInt((level % 100000000) / 10000) + "만 " + level % 10000;
  }
  else if(level < 100000000000000000000 & level >= 1000000000000)
  {
      ret = parseInt(level / 10000000000000000) + "경 " + parseInt((level % 10000000000000000) / 1000000000000) + "조 " + parseInt((level % 1000000000000) / 100000000) + "억 " + parseInt((level % 100000000) / 10000) + "만 " + level % 10000; 
  }
  else{
    ret = level;
  }
  return ret;
}

function mapleupdate(nick) {

  var isError = JSON.parse(org.jsoup.Jsoup.connect('https://maple.gg/u/'+encodeURI(nick)+'/sync').ignoreContentType(true).get().text()).error;
  var isDone = JSON.parse(org.jsoup.Jsoup.connect('https://maple.gg/u/'+encodeURI(nick)+'/sync').ignoreContentType(true).get().text()).done;

  if(isError == true) {

      return '유저정보가 없습니다.';

  } else {

    if(isDone == false){
      return '갱신중입니다. 1~10초 내에 반영됩니다.';
    }
    else{
      return '이미 갱신되었습니다.'
    }

  }

}

function defenseRate(msg){
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
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //최댓값은 제외, 최솟값은 포함
}

var bossList = [
  "이지 자쿰 Lv.50\n220만, 30%, 반감\n200,000메소", //0
  "노말 자쿰 Lv.110\n700만, 40%, 반감\n612,500메소", //1
  "피아누스 Lv.110\n좌 : 2400만, 비반감\n우 : 3000만, 비반감", //2
  "노말 반반 Lv.120\n3억 1500만, 50%, 반감\n968,000메소", //3
  "노말 피에르 Lv.120\n3억 1500만, 50%, 반감\n968,000메소", //4
  "노말 블러디 퀸 Lv.120\n3억 1500만, 50%, 반감\n968,000메소", //5
  "이지 파풀라투스 Lv.125\n4억, 50%, 반감\n684,500메소", //6
  "이지 매그너스 Lv.110\n4억, 50%, 반감\n684,500메소", //7
  "노말 힐라 Lv.110\n5억, 50%, 반감\n800,000메소", //8
  "노말 벨룸 Lv.130\n5억 5000만, 55%, 반감\n968,000메소", //9
  "이지 반 레온 Lv.120\n7억, 50%, 비반감\n1,058,000메소", //10
  "이지 혼테일 Lv.130\n10억 1760만, 40%, 비반감\n882,000메소", //11
  "카웅 Lv.180\n16억 8000만, 40%, 반감\n1,250,000메소", //12
  "이지 아카이럼 Lv.130\n21억, 60%, 비반감\n1,152,000메소", //13
  "노말 혼테일 Lv.160\n27억 5000만, 40%, 비반감\n1,012,500메소", //14
  "노말 매그너스 Lv.130\n60억, 50%, 반감\n2,592,000메소", //15
  "노말 반 레온 Lv.130\n63억, 80%, 비반감\n1,458,000메소", //16
  "노말 핑크빈 Lv.180\n76억 5000만(총합), 70%, 일부반감\n1,404,500메소", //17
  "하드 반 레온 Lv.140\n105억, 80%, 비반감\n2,450,000메소", //18
  "이지 시그너스 Lv.140\n105억, 100%, 반감\n9,112,500메소", //19
  "노말 아카이럼 Lv.170\n126억, 90%, 비반감\n2,520,000메소", //20
  "노말 파풀라투스 Lv.155\n166억, 90%, 반감\n2,664,500메소", //21
  "하드 힐라 Lv.190\n168억, 100%, 반감\n11,250,000메소", //22
  "카오스 혼테일 Lv.160\n266억, 50%, 비반감\n1,352,000메소", //23
  "노말 시그너스 Lv.190\n630억, 100%, 반감\n14,450,000메소", //24
  "카오스 피에르 Lv.190\n800억, 80%, 반감\n16,200,000메소", //25
  "카오스 자쿰 Lv.180\n840억, 100%, 반감 (팔 당 105억)\n16,200,000메소", //26
  "카오스 반반 Lv.190\n1000억, 100%, 반감\n16,200,000메소", //27
  "하드 매그너스 Lv.190\n1200억, 120%, 반감\n19,012,500메소", //28
  "카오스 블러디 퀸 Lv.190\n1400억, 120%, 반감\n16,200,000메소", //29
  "카오스 벨룸 Lv.190\n2000억, 200%, 반감\n21,012,500메", //30
  "카오스 핑크빈 Lv.190\n2037억(총합), 100%, 일부반감\n12,800,000메소", //31
  "카오스 파풀라투스 Lv.190\n5040억, 250%, 반감\n26,450,000메소", //32
  "불꽃늑대 Lv.1\n6000억, 90%, 반감", //33
  "도로시 Lv.210\n8400억, 250%, 비반감", //34
  "노말 데미안 Lv.210\n8400억ㆍ3600억\n300%, 반감\n33,800,000메소", //35
  "노말 스우 Lv.210\n4000억ㆍ4000억ㆍ7000억\n300%, 반감\n32,512,500메소", //36
  "우르스  Lv,130\n2조 6252억 2362만 4000, 10%", //37
  "이지 루시드 Lv.230\n6조ㆍ6조, 300%, 반감, 포스 360\n35,112,500메소", //38
  "노말 루시드 Lv.230\n12조ㆍ12조, 300%, 반감, 포스 360\n40,612,000메소", //39
  "노말 윌 Lv.250\n8.4조ㆍ6.3조ㆍ10.5조\n300%, 반감, 포스 760\n46,512,500메소", //40
  "노말 거대 괴수 더스크 Lv.255\n26조, 300%, 반감, 포스 730\n49,612,500메소", //41
  "노말 친위대장 듄켈 Lv.265\n26조, 300%, 반감, 포스 850\n52,812,500메소", //42
  "하드 스우 Lv.210\n1.7조ㆍ7조ㆍ24조\n300%, 반감\n74,112,000메소", //43
  "하드 데미안 Lv.210\n25.2조ㆍ10.8조\n300%, 반감\n70,312,500메소", //44
  "하드 루시드 Lv.230\n41.04조ㆍ41.04조ㆍ11.97조\n300%, 반감, 포스 360\n80,000,000메소", //45
  "카오스 거대 괴수 더스크 Lv.255\n126조, 300%, 반감, 포스 730\n92,450,000메소", //46
  "하드 윌 Lv.250\n42조ㆍ31.5조ㆍ52.5조\n300%, 반감, 포스 760\n88,200,000메소", //47
  "하드 친위대장 듄켈 Lv.265\n155조, 300%, 반감, 포스 850\n96,800,000메소", //48
  "진 힐라 Lv.250\n176조, 300%, 반감, 포스 900\n110,450,000메소", //49
  "선택받은 세렌 Lv.275\n132조ㆍ???조\n380%, 반감, 포스 150ㆍ200\n151,250,000메소", //50
  "검은 마법사 Lv.275\n63조ㆍ115.5조ㆍ157.5조ㆍ150조\n300%, 반감, 포스 1320\n500,000,000메소", //51
  "아르카누스 Lv.101\n60억ㆍ150억ㆍ1500억ㆍ1.5조ㆍ10.5조ㆍ900조\n50%ㆍ100%ㆍ150%ㆍ200%ㆍ250%ㆍ300%, 반감" //52
];
var bossnameList = "이지자쿰,  0\n 노말자쿰, 자쿰, 1\n 피아누스, 2\n 노말반반, 반반, 3\n 노말피에르, 노말삐에르, 피에르, 삐에르, 4\n 노말블러디퀸, 노블퀸, 블러디퀸, 블퀸, 5\n 이지파풀라투스, 이지파풀, 6\n 이지매그너스, 이지매그, 7\n 노말힐라, 힐라, 8\n 노말벨룸, 벨룸, 9\n 이지반레온, 이지반래온, 10\n 이지혼테일, 이지혼텔, 11\n 카웅, 12\n 이지아카이럼, 13\n 노말혼테일, 노말혼텔, 혼테일, 혼텔, 14\n 노말매그너스, 매그너스, 노매그, 매그, 15\n 노말반레온, 노말반래온, 반레온, 반래온, 16\n 노말핑크빈, 노핑, 핑크빈, 17\n 하드반레온, 하드반래온, 18\n 이지시그너스, 이시그, 19\n 노말아카이럼, 아카이럼, 20\n 노말파풀라투스, 노말파풀, 파풀라투스, 파풀, 21\n 하드힐라, 하힐, 22\n 카오스혼테일, 카텔, 카혼텔, 23\n 노말시그너스, 노말시그, 노시그, 시그너스, 시그, 24\n 카오스피에르, 카오스삐에르, 카피, 카삐, 25\n 카오스자쿰, 카쿰, 26\n 카오스반반, 카반반, 카반, 27\n 하드매그너스, 하매그, 하매, 28\n 카오스블러디퀸, 카블퀸, 29\n 카오스벨룸, 카벨룸, 카벨, 30\n 카오스핑크빈, 카핑빈, 카핑, 31\n 카오스파풀라투스, 카파풀, 32\n 불꽃늑대, 불늑, 33\n 도로시, 시드, 34\n 노말데미안, 노데미, 데미안, 데미, 35\n 노말스우, 노스우, 스우, 36\n 우르스, 우루스, 37\n 이지루시드, 이루시, 38\n 노말루시드, 노루시, 루시드, 루시, 39\n 노말윌, 노윌, 윌, 40\n 노말거대괴수더스크, 노말더스크, 노더스크, 노더, 거대괴수더스크, 더스크, 41\n 노말친위대장듄켈, 노말듄켈, 노듄켈, 노듄, 친위대장듄켈, 듄켈, 42\n 하드스우, 하스우, 43\n 하드데미안, 하데미, 44\n 하드루시드, 하루시, 45\n 카오스거대괴수더스크, 카오스더스크, 카더스크, 카더, 46\n 하드윌, 하윌, 47\n 하드친위대장듄켈, 하드듄켈, 하듄켈, 하듄, 48\n 진힐라, 진힐, 49\n 선택받은세렌, 세렌, 50\n 검은마법사, 검마, 검멘, 51\n 아르카누스, 수로, 길드, 52";
var accexps = [ 0, 15, 49, 106, 198, 333, 705, 1265, 2105, 3347, 4589, 5831, 7073, 8315, 9557, 11047, 12835, 14980, 17554, 20642, 24347, 28793, 34128, 40530, 48212, 57430, 68491, 81764, 97691, 116803, 135915, 155027, 174139, 193251, 212363, 235297, 262817, 295841, 335469, 383022, 434379, 489844, 549746, 614440, 684309, 759767, 841261, 929274, 1024328, 1126986, 1237856, 1357595, 1486913, 1626576, 1777412, 1940314, 2116248, 2306256, 2511464, 2733088, 2954712, 3176336, 3397960, 3619584, 3841208, 4079453, 4335566, 4610887, 4906857, 5225024, 5567053, 5934734, 6329991, 6754892, 7211660, 7700401, 8223353, 8782911, 9381638, 10022275, 10707756, 11441220, 12226026, 13065768, 13964291, 14925710, 15954428, 17055156, 18232934, 19493156, 20835292, 22264666, 23786949, 25408180, 27134791, 28973631, 30931995, 33017652, 35238876, 37604479, 39970082, 42335685, 44701288, 47066891, 49432494, 51951861, 54634986, 57492514, 60535781, 63776860, 67228609, 70904721, 74819780, 78989317, 83429873, 88159065, 93195654, 98559621, 104272245, 110356189, 116835589, 123736150, 131085247, 138912035, 147247564, 156124902, 165579266, 175648163, 186371538, 197791932, 209954651, 222907946, 236703205, 251395155, 267042081, 283706057, 301453191, 320353888, 340483130, 361920772, 384698266, 408899353, 434613007, 461933764, 490962068, 521804641, 554574874, 589393246, 626387766, 665694443, 707457787, 751831340, 798978240, 849071821, 902296250, 958847205, 1018932594, 1082773319, 1150604089, 1222674282, 1299248862, 1380609353, 1467054874, 1558903240, 1656492128, 1760180321, 1870349026, 1987403275, 2111773414, 2243916686, 2382667121, 2528355077, 2681327430, 2841948400, 3010600418, 3187685036, 3373623884, 3568859674, 3773857253, 3989104710, 4215114539, 4452424859, 4701600695, 4963235322, 5237951680, 5526403855, 5829278638, 6147297160, 6481216608, 6831832028, 7199978219, 7586531719, 7992412894, 8418588127, 8866072121, 9335930314, 9829281416, 10347300073, 10891219662, 11462335230, 13669361590, 16141231346, 18909725349, 22010438632, 25483237508, 29372772249, 33729051158, 38608083536, 44072599799, 50192858013, 59985271155, 70854849742, 82920081973, 96312489749, 111178062380, 130503306800, 151567823217, 174528146111, 199554898065, 226834057694, 270480713100, 317182634384, 367153690157, 420622719834, 477834581588, 552210001868, 630304193162, 712303094020, 798401939920, 888805728115, 1033451789227, 1182437232172, 1335892238405, 1493950894824, 1656751310935, 1868391851879, 2086381609051, 2310911058938, 2542176392321, 2780379685705, 3161504955119, 3554063982615, 3958399780935, 4374865653204, 4803825501641, 5361473304609, 5935850541666, 6527459095834, 7136815906627, 7764453421743, 9078218184097, 10405120594074, 11745292028150, 13098865176566, 14465974056466, 15846754025165, 17241341793550, 18649875439618, 20072494422146, 21509339594499, 24411766842652, 27343218363286, 30303984399126, 33294358095324, 36314635528483, 39365115735973, 42446100745537, 45557895605196, 48700808413451, 51875150349788, 58287321061188, 64763613479702, 71304668822401, 77911134718526, 84583665273612, 98062176994885, 112888539888285, 129197539071025, 147137438172039, 166871327183154, 206733782985606, 250582484368303, 298816055889269, 351872984562331, 410235606102699, 528128101614242, 657809846676939, 800459766245905, 957374677771767, 1129981080450210, 1478646013860670, 1862177440612180, 2284062010038850, 2748135036408170, 3258615365414430, 4289785630007070, 5424072921058980, 6671788941216080, 8044276563388880, 10103007996648000 ];

var exps = [ 15, 34, 57,92,135,372,560,840,1242,1242,1242,1242,1242,1242,1490,1788,2145,2574,3088,3705,4446,5335,6402,7682,9218,11061,13273,15927,19112,19112,19112,19112,19112,19112,22934,27520,33024,39628,47553,51357,55465,59902,64694,69869,75458,81494,88013,95054,102658,110870,119739,129318,139663,150836,162902,175934,190008,205208,221624,221624,221624,221624,221624,221624,238245,256113,275321,295970,318167,342029,367681,395257,424901,456768,488741,522952,559558,598727,640637,685481,733464,784806,839742,898523,961419,1028718,1100728,1177778,1260222,1342136,1429374,1522283,1621231,1726611,1838840,1958364,2085657,2221224,2365603,2365603,2365603,2365603,2365603,2365603,2519367,2683125,2857528,3043267,3241079,3451749,3676112,3915059,4169537,4440556,4729192,5036589,5363967,5712624,6083944,6479400,6900561,7349097,7826788,8335529,8877338,9454364,10068897,10723375,11420394,12162719,12953295,13795259,14691950,15646926,16663976,17747134,18900697,20129242,21437642,22777494,24201087,25713654,27320757,29028304,30842573,32770233,34818372,36994520,39306677,41763344,44373553,47146900,50093581,53224429,56550955,60085389,63840725,67830770,72070193,76574580,81360491,86445521,91848366,97588888,103688193,110168705,117054249,124370139,132143272,138750435,145687956,152972353,160620970,168652018,177084618,185938848,195235790,204997579,215247457,226009829,237310320,249175836,261634627,274716358,288452175,302874783,318018522,333919448,350615420,368146191,386553500,405881175,426175233,447483994,469858193,493351102,518018657,543919589,571115568,2207026470,2471869646,2768494003,3100713283,3472798876,3889534741,4356278909,4879032378,5464516263,6120258214,9792413142,10869578587,12065232231,13392407776,14865572631,19325244420,21064516417,22960322894,25026751954,27279159629,43646655406,46701921284,49971055773,53469029677,57211861754,74375420280,78094191294,81998900858,86098845900,90403788195,144646061112,148985442945,153455006233,158058656419,162800416111,211640540944,217989757172,224529449887,231265333383,238203293384,381125269414,392559027496,404335798320,416465872269,428959848437,557647802968,574377237057,591608554168,609356810793,627637515116,1313764762354,1326902409977,1340171434076,1353573148416,1367108879900,1380779968699,1394587768385,1408533646068,1422618982528,1436845172353,2902427248153,2931451520634,2960766035840,2990373696198,3020277433159,3050480207490,3080985009564,3111794859659,3142912808255,3174341936337,6412170711400,6476292418514,6541055342699,6606465896125,6672530555086,13478511721273,14826362893400,16308999182740,17939899101014,19733889011115,39862455802452,43848701382697,48233571520966,53056928673062,58362621540368,117892495511543,129681745062697,142649919568966,156914911525862,172606402678448,348664933410464,383531426751510,421884569426661,464073026369327,510480329006259,1031170264592640,1134287291051900,1247716020157090,1372487622172800,2058731433259200,];
var add150 = [
  24, 32, 40, 48, 56, //STR 0-4
  24, 32, 40, 48, 56, //DEX 5-9
  24, 32, 40, 48, 56, //INT 10-14
  24, 32, 40, 48, 56, //LUK 15-19
  12, 16, 20, 24, 28, //STR + DEX 20-24
  12, 16, 20, 24, 28, //STR + INT 25-29
  12, 16, 20, 24, 28, //STR + LUK 30-34
  12, 16, 20, 24, 28, //DEX + INT 35-39
  12, 16, 20, 24, 28, //DEX + LUK 40-44
  12, 16, 20, 24, 28, //INT + LUK 45-49
  1350, 1800, 2250, 2700, 3150, //HP 50-54
  1350, 1800, 2250, 2700, 3150, //MP 55-59
  3, 4, 5, 6, 7,  //ALLStat 60-64
  3, 4, 5, 6, 7,  //ATK 65-69
  3, 4, 5, 6, 7,  //Magic 70-74
  3, 4, 5, 6, 7,  //Move 75-79
  3, 4, 5, 6, 7,  //Jump 80-84
  24, 32, 40, 48, 56, //DEF 85-89
  -15, -20, -25, -30, -35 //Decrease Restrict 90-94
];
var add160 = [
  27, 36, 45, 54, 63, //STR 0-4
  27, 36, 45, 54, 63, //DEX 5-9
  27, 36, 45, 54, 63, //INT 10-14
  27, 36, 45, 54, 63, //LUK 15-19
  15, 20, 25, 30, 35, //STR + DEX 20-24
  15, 20, 25, 30, 35, //STR + INT 25-29
  15, 20, 25, 30, 35, //STR + LUK 30-34
  15, 20, 25, 30, 35, //DEX + INT 35-39
  15, 20, 25, 30, 35, //DEX + LUK 40-44
  15, 20, 25, 30, 35, //INT + LUK 45-49
  1440, 1920, 2400, 2880, 3360, //HP 50-54
  1440, 1920, 2400, 2880, 3360, //MP 55-59
  3, 4, 5, 6, 7,  //ALLStat 60-64
  3, 4, 5, 6, 7,  //ATK 65-69
  3, 4, 5, 6, 7,  //Magic 70-74
  3, 4, 5, 6, 7,  //Move 75-79
  3, 4, 5, 6, 7,  //Jump 80-84
  27, 36, 45, 54, 63, //DEF 85-89
  -15, -20, -25, -30, -35 //Decrease Restrict 90-94
];
var add200 = [
  33, 44, 55, 66, 77, //STR 0-4
  33, 44, 55, 66, 77, //DEX 5-9
  33, 44, 55, 66, 77, //INT 10-14
  33, 44, 55, 66, 77, //LUK 15-19
  18, 24, 30, 36, 42, //STR + DEX 20-24
  18, 24, 30, 36, 42, //STR + INT 25-29
  18, 24, 30, 36, 42, //STR + LUK 30-34
  18, 24, 30, 36, 42, //DEX + INT 35-39
  18, 24, 30, 36, 42, //DEX + LUK 40-44
  18, 24, 30, 36, 42, //INT + LUK 45-49
  1800, 2400, 3000, 3600, 4200, //HP 50-54
  1800, 2400, 3000, 3600, 4200, //MP 55-59
  3, 4, 5, 6, 7,  //ALLStat 60-64
  3, 4, 5, 6, 7,  //ATK 65-69
  3, 4, 5, 6, 7,  //Magic 70-74
  3, 4, 5, 6, 7,  //Move 75-79
  3, 4, 5, 6, 7,  //Jump 80-84
  33, 44, 55, 66, 77, //DEF 85-89
  -15, -20, -25, -30, -35 //Decrease Restrict 90-94
];
var jobList = ["!초보자", "!히어로", "!팔라딘", "!다크나이트", "!불독", "!썬콜", "!비숍", "!보우마스터", "!신궁", "!패스파인더", "!나이트로드", "!섀도어", "!듀얼블레이드", "!바이퍼", "!캡틴", "!캐논슈터", "!노블레스", "!소울마스터", "!플레임위자드", "!윈드브레이커", "!나이트워커", "!스트라이커", "!미하일", "!시티즌", "!블래스터", "!배틀메이지", "!와일드헌터", "!메카닉", "!제논", "!데몬슬레이어", "!데몬어벤져", "!아란", "!에반", "!루미너스", "!메르세데스", "!팬텀", "!은월", "!카이저", "!카인", "!카데나", "!엔젤릭버스터", "!아델", "!일리움", "!아크", "!라라", "!호영", "!제로", "!키네시스", "!핑크빈", "!예티", ];

var jobMentionList = [
  "초보자\n일반 모험가가 레벨1부터 10까지 거치는 직업. 전사계열이다. 아케인리버 지역 입장이 불가능해 세계수, 헤이븐이 최종 사냥터이다.", // 0  초보자
  "히어로\n\n전사 계열 직업 중에서 최고의 근접 딜러라는 콘셉트에 걸맞게 다른 직업을 압도하는 파괴적인 화력을 자랑한다.\n\n공격대원 효과 : STR 10/20/40/80/100 증가\n\n링크 스킬 : 인빈서블 빌리프 - 현재 HP가 최대 HP의 15% 이하가 되었을 때 자동 발동되어 3초 동안 1초마다 최대 HP의 35% 회복. 재발동 대기시간 240초", // 1  히어로
  "팔라딘\n\n방어적인 측면이 강한, 원소 공격을 주력으로 사용하는 전사. 화(火) / 빙(氷) / 전(電) / 성(聖)의 4가지 속성의 차지 공격을 번갈아 사용하면서 엘리멘탈 차지를 축적하고, 이로써 스킬이나 스펙을 강화한다.\n\n공격대원 효과 : STR 10/20/40/80/100 증가\n\n링크 스킬 : 인빈서블 빌리프 - 현재 HP가 최대 HP의 15% 이하가 되었을 때 자동 발동되어 3초 동안 1초마다 최대 HP의 35% 회복. 재발동 대기시간 240초", // 2  팔라딘
  "다크나이트\n\n공격형인 히어로 계열과 방어형인 팔라딘 계열과는 달리 이쪽은 생존형 직업으로, 죽지 않는 암흑 기사가 컨셉으로 어둠을 바탕으로 한 공격을 사용하며 쉽게 사망하지 않는다.\n\n공격대원 효과 : 최대 HP 2/3/4/5/6% 상승\n\n링크 스킬 : 인빈서블 빌리프 - 현재 HP가 최대 HP의 15% 이하가 되었을 때 자동 발동되어 3초 동안 1초마다 최대 HP의 35% 회복. 재발동 대기시간 240초", // 3  다크나이트
  "불독\n\nDoT(Damage over Time)를 기반으로, 일정 주기마다 폭딜을 쏟아붓는 누커. 편의성과 안정성을 약간 희생한 대신 그 보상으로 막강한 화력을 받은, 마법사 중 최강의 딜러이다.\n\n공격대원 효과 : 최대 MP 2/3/4/5/6% 상승\n\n링크 스킬 : 임피리컬 널리지 - 공격한 적 중 최대 HP가 가장 높은 적에 대한 약점을 35% 확률로 파악, 파악한 약점은 10초 동안 지속되며 최대 3회까지 중첩. 중첩 당 데미지 3%, 방어율 무시 3% 증가", // 4  불독
  "썬콜\n\n얼음 속성 공격을 이용한 빙결 중첩이 있다. 이렇게 빙결이 중첩된 적은 번개 속성 스킬에 공격당할 때 더욱 큰 피해를 받는다. 썬콜의 보스전은 얼마나 안정적으로 빙결 중첩을 유지하느냐에 달려 있다.\n\n공격대원 효과 : INT 10/20/40/80/100 상승\n\n링크 스킬 : 임피리컬 널리지 - 공격한 적 중 최대 HP가 가장 높은 적에 대한 약점을 35% 확률로 파악, 파악한 약점은 10초 동안 지속되며 최대 3회까지 중첩. 중첩 당 데미지 3%, 방어율 무시 3% 증가", // 5  썬콜
  "비숍\n\n모든 직업을 통틀어 유일한 유틸리티 집중형 직업으로, 파티원 보조에 초점을 맞춘 스킬 구성을 지녔다. 뿐만 아니라 단순한 딜링 사이클과 뛰어난 공격 효율성 덕분에 보조 격수로서 기용되기도 한다.\n\n공격대원 효과 : INT 10/20/40/80/100 상승\n\n링크 스킬 : 임피리컬 널리지 - 공격한 적 중 최대 HP가 가장 높은 적에 대한 약점을 35% 확률로 파악, 파악한 약점은 10초 동안 지속되며 최대 3회까지 중첩. 중첩 당 데미지 3%, 방어율 무시 3% 증가", // 6  비숍
  "보우마스터\n\n메이플스토리 최초의 속사기인 폭풍의 시를 주력으로 사용하는 정통 속사류 궁수다. 절대적으로 부족한 필수 유틸리티를 지속 화력으로 메워야 한다.\n\n공격대원 효과 : DEX 10/20/40/80/100 상승\n\n링크 스킬 : 어드벤쳐러 큐리어스 - 몬스터 컬렉션 등록 확률 30%, 크리티컬 확률 10% 증가\n\n보 마 조 아", // 7  보우마스터
  "신궁\n\n공격 시 공격당한 적과의 거리에 따라 가까울수록 방어무시 비율이 증가하고 멀수록 최종 데미지가 증가한다. 궁수 계열 직업 중 유일하게 속사형 스킬이 아닌 한방형 스킬을 주력으로 쓴다.\n\n공격대원 효과 : 크리티컬 확률 1/2/3/4/5%\n\n링크 스킬 : 어드벤쳐러 큐리어스 - 몬스터 컬렉션 등록 확률 30%, 크리티컬 확률 10% 증가", // 8  신궁
  "패스파인더\n\n세 가지 문양을 수시로 바꿔가며 공격하는 준 속사기 직업. 다른 속사기 직업들과는 다르게 두 가지 스킬을 번갈아 사용하기에 속사기에 준하는 취급을 받는다.\n\n[2019년 1월 31일 출시]\n\n공격대원 효과 : DEX 10/20/40/80/100 상승\n\n링크 스킬 : 어드벤쳐러 큐리어스 - 몬스터 컬렉션 등록 확률 30%, 크리티컬 확률 10% 증가", // 9  패스파인더
  "나이트로드\n\n도적 직업군답게 타 직업보다 회피율이 비교적 높으며, 표창 도적의 단점 중 하나인 약한 체력과 종잇장같은 방어력도 가지고 있다. 공격 당해 표식이 새겨진 적을 한번 더 공격할 시 추가 표창으로 몇 번 더 타격한다.\n\n공격대원 효과 : 크리티컬 확률 1/2/3/4/5% 증가\n\n링크 스킬 : 시프 커닝 - 적에게 상태이상을 적용시키면 10초 동안 데미지 20% 증가. 재발동 대기시간 20초", // 10 나이트로드 
  "섀도어\n\n단검을 주무기로 하는 근거리 공격수. 짧은 리치의 단점을 메우기 위해 방어력 상승 패시브&버프+회피율 상승 패시브+텔레포트 스킬+슈퍼 스탠스 스킬들로 무장했다. 강화 코어 미적용 기준 퍼뎀이 고작 100% 초반대에 불과한 스킬로 원킬을 내야 하므로, 어지간한 자본 투자로는 빛을 보기 힘들다.\n\n공격대원 효과 : LUK 10/20/40/80/100 증가\n\n링크 스킬 : 시프 커닝 - 적에게 상태이상을 적용시키면 10초 동안 데미지 20% 증가. 재발동 대기시간 20초", // 11 섀도어
  "듀얼블레이드\n\n주무기 단검과 보조무기 블레이드를 함께 사용하는 메이플 유일의 이도류 근거리 격수. 진정한 의미에서의 보조무기를 도입한 최초의 직업이다. 공격 스킬마다 추가 방어율 무시가 붙어 있고, 평딜과 극딜 사이의 격차가 다소 적다.\n\n2010년 2월 25일 출시\n\n공격대원 효과 : LUK 10/20/40/80/100 증가\n\n링크 스킬 : 시프 커닝 - 적에게 상태이상을 적용시키면 10초 동안 데미지 20% 증가. 재발동 대기시간 20초", // 12 듀얼블레이드
  "바이퍼\n\n고유 자원인 에너지를 별도로 사용하고 있다. 에너지는 적을 공격할 때마다 일정량이 충전되며, 최대 에너지 보유량에 도달할 경우 완충 상태가 되어 추가 능력치와 스킬 추가 효과를 부여받는다.\n\n[2007년 12월 18일 출시]\n\n공격대원 효과 : STR 10/20/40/80/100 증가\n\n링크 스킬 : 파이렛 블레스 - 힘 70, 민첩 70, 지력 70, 운 70, 최대 HP 1225, 최대 MP 1225, 데미지 흡수 15% 증가", // 13 바이퍼
  "캡틴\n\n모험가 해적 중 중거리 및 소환수 특화 직업. 각종 소환수에 분산된 화력과 특유의 대미지 딜링 메커니즘이 대표적인 특징으로, 신경써야 할 것이 많아 손이 바쁘다.\n\n[2007년 12월 18일 출시]\n\n공격대원 효과 : 환수 지속 시간 4/6/8/10/12%\n\n링크 스킬 : 파이렛 블레스 - 힘 70, 민첩 70, 지력 70, 운 70, 최대 HP 1225, 최대 MP 1225, 데미지 흡수 15% 증가", // 14 캡틴
  "캐논슈터\n\n긴 사거리, 높은 스킬 데미지(이하 퍼뎀), 엄청난 스킬 당 공격 횟수(이하 타수), 원거리 직업 기준으로 상당히 많은 체력과 방어력, 훌륭한 기동성 등 사냥 및 보스전에서 중요시 되는 능력을 모두 갖추어 다양한 상황에서 능동적인 운용이 가능하다.\n\n[2011년 7월 7일 출시]\n\n공격대원 효과 : STR 10/20/40/80/100 증가\n\n링크 스킬 : 파이렛 블레스 - 힘 70, 민첩 70, 지력 70, 운 70, 최대 HP 1225, 최대 MP 1225, 데미지 흡수 15% 증가", // 15 캐논슈터
  "노블레스\n\n", // 16 노블레스
  "소울마스터\n\n", // 17 소울마스터
  "플레임위자드\n\n", // 18 플레임위자드
  "윈드브레이커\n\n", // 19 윈드브레이커
  "나이트워커\n\n", // 20 나이트워커
  "스트라이커\n\n", // 21 스트라이커
  "미하일\n\n", // 22 미하일
  "시티즌\n\n", // 23 시티즌
  "블래스터\n\n", // 24 블래스터
  "배틀메이지\n\n", // 25 배틀메이지
  "와일드헌터\n\n", // 26 와일드헌터
  "메카닉\n\n", // 27 메카닉
  "제논\n\n", // 28 제논
  "데몬슬레이어\n\n", // 29 데몬슬레이어
  "데몬어벤져\n\n", // 30 데몬어벤져
  "아란\n\n", // 31 아란
  "에반\n\n", // 32 에반
  "루미너스\n\n", // 33 루미너스
  "메르세데스\n\n", // 34 메르세데스
  "팬텀\n\n", // 35 팬텀
  "은월\n\n", // 36 은월
  "카이저\n\n", // 37 카이저
  "카인\n\n", // 38 카인
  "카데나\n\n", // 39 카데나
  "엔젤릭버스터\n\n", // 40 엔젤릭버스터
  "아델\n\n", // 41 아델
  "일리움\n\n", // 42 일리움
  "아크\n\n", // 43 아크
  "라라\n\n", // 44 라라
  "호영\n\n", // 45 호영
  "제로\n\n", // 46 제로
  "키네시스\n\n", // 47 키네시스
  "핑크빈\n\n", // 48 핑크빈
  "예티\n\n", // 49 예티
  "\n\n", // 50
];