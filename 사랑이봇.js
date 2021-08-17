const scriptName = "사랑이봇";
const kalingModule = require('kaling').Kakao();
const Kakao = new kalingModule();
Kakao.init('f8a946e1c19887744ce173e69effc988', 'https://developers.kakao.com');
//Kakao.login('hansu1115@kakao.com', 'cjsgkstn1!');
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
function response(room, msg, sender, isGroupChat, replier, imageDB, packageName) {
    if(msg.startsWith("!보스")){
      var boss = msg.split(" ")[1];
      var re = getBoss(boss);
      replier.reply(re);
    }
    if((sender == "천한수" || sender == adminNick) && (msg == "!리로드" || msg == "!ㄹㄹ")){
      if(Api.reload(scriptName)){
        replier.reply("리로드 성공");
      }
      else{
        replier.reply("리로드 실패");
      }
    }
    if(msg == "!도움말"){
      var help = "<--봇 도움말-->\n\n";
      help += "!봇업데이트/!봇업뎃 : 최근 봇 업데이트 내역 \n\n";
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
      help += "!(직업이름) : 간단한 직업 설명과 그 직업의 무적기/뎀감기/바인드 보유 여부와 유니온 공격대원 효과, 링크스킬을 보여줍니다.\n\n";
      help += "!썬데이/!선데이 : 그 주의 썬데이메이플을 보여줍니다. (관리자가 직접 업데이트 하여야 하므로 정확하지 않을 수 있습니다.)\n\n";
      help += "!업데이트/!업뎃 : 현재 기준 가장 최근의 업데이트 글의 제목과 주소를 보여줍니다.\n\n";
      help += "!추옵/!추가옵션 (무기이름) : 각 무기에 해당하는 추가옵션표를 보여줍니다. 괄호 안에는 순수 무기공격력이 들어갑니다. (순서 : 우트가르드, 파프니르, 앱솔랩스, 아케인셰이드, 제네시스)\n무기이름 대신 그 무기를 사용하는 직업(전용무기가 아닌 경우엔 나오지 않을 수 있음)을 적어도 됩니다.\n\n";
      help += "!그님티 (롤아이디) : 해당 아이디의 티어를 보여줍니다.\n\n";
      help += "!로얄 (횟수) : 지정한 횟수만큼의 로얄스타일 시뮬레이션을 보여줍니다. 횟수는 최대 5000까지 설정할수 있습니다. 횟수를 생략할 시 1회만 시뮬레이션 합니다.";
      replier.reply(help);
    }
    if(msg == "!봇업데이트" || msg == "!봇업뎃"){
      var update = "<--봇 업데이트 내역-->\n";
      update += "21/07/08 - ver 1.0 Release\n";
      update += "21/07/09 - !한강 업데이트 \n";
      update += "21/07/10 - !캐릭터,!무릉,!시드,!유니온,!업적 업데이트 \n";
      update += "(!보스 목록) 추가 \n";
      update += "21/07/13 - !갱신, !코디 추가\n";
      update += "!방무, !데굴데굴 추가\n";
      update += "21/07/16 - !강환,!영환 추가\n";
      update += "!강환,영환 정수 오류 수정\n";
      update += "21/07/20 - 보스 레벨, 방어율, 포스 정보 추가\n";
      update += "!경스토리,!렙스토리 추가, 오류수정\n";
      update += "21/07/22 - !(직업이름) 추가 (07/22 현재 모험가만 추가)\n";
      update += "21/07/23 - !(직업이름) 전직업 완료\n";
      update += "21/07/27 - !날짜, !시간 추가\n";
      update += "21/07/28 - !(직업이름) 무적기/뎀감기/바인드 추가\n";
      update += "21/07/30 - !썬데이, !업데이트 추가, (원래 !업데이트/!업뎃 -> !봇업데이트/!봇업뎃 으로 변경)\n";
      update += "21/08/01 - !(직업이름) 줄임말, 별명으로도 검색 가능\n";
      update += "21/08/07 - !추옵 (무기이름) 추가, 코드의 오탈자, 누락/중복 제거\n";
      update += "21/08/11 - !그님티 (롤아이디) 추가\n";
      update += "21/08/17 - !로얄 추가";
      replier.reply(update);
    }
    if(msg == "테스트"){      
      replier.reply("테스트용입니다.");      //스타포스      //보스 전리품     
    }
    if(msg.startsWith("환영합니다! 유니스트 메이플스토리 톡방입니다~")){
      replier.reply("환영합니다~! 보마봇 많은 이용 부탁드려요!");
    }
    if(msg.startsWith("!경험치")){
      var startlv = msg.split(" ")[1];
      var endlv = msg.split(" ")[2];
      if(startlv == undefined){
        replier.reply("(레벨)이 없습니다.");
      }
      else if(endlv == undefined){
        if(isNaN(startlv) || startlv < 1 || startlv > 300){
          replier.reply("레벨이 범위를 벗어났거나 숫자가 아닙니다.");
        }
        else{
          replier.reply("Lv." + startlv + " 경험치통: " + Jari(exps[startlv - 1]));
        }
      }
      else if(startlv > 0 && startlv < 301 && endlv > 0 && endlv < 301){
        if(startlv >= endlv){
          replier.reply("오류 : 뒷레벨이 더 커야합니다.");
        }
        else{
          var remain = accexps[endlv - 1] - accexps[startlv - 1];
          replier.reply("Lv." + startlv + " → Lv." + endlv + " 경험치통: " + Jari(remain));
        }
      }
      else{
        replier.reply("레벨이 범위를 벗어났거나 숫자가 아닙니다.");
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
        replier.reply(msg.slice(4) + "의 날씨\n" + temp + "℃, " + word);
        }
        else{
          replier.reply(msg.slice(4) + "에 대한 날씨정보를 찾는 것을 실패하였습니다.");
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
      replier.reply(timeR + " 기준 " + riverTemp + " °C");
    }
    if(msg.startsWith("!캐릭터")){
      nickname = msg.split(" ")[1];
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
      nickname = msg.split(" ")[1];
      if(nickname == undefined){
        replier.reply("캐릭터 이름을 입력해주세용");
      }
      else{
        maplegg = "https://maple.gg/u/" + nickname;
        dataC1 = org.jsoup.Jsoup.connect(maplegg).get();
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
              replier.reply("이 캐릭터는 무릉 기록이 없습니다.");
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
              replier.reply("이 캐릭터는 시드 기록이 없습니다.");
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
              replier.reply("이 캐릭터는 대표캐릭터가 아니라서 유니온 조회가 되지 않습니다.");
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
              replier.reply("이 캐릭터는 업적 정보가 없습니다.");
            }
          }
        }
      }
    }
    if(msg.startsWith("!갱신")){
      nickname = msg.split(" ")[1];
      if(nickname == undefined){
        replier.reply("캐릭터 이름을 입력해주세용");
      }
      else{
        replier.reply(mapleupdate(nickname));
      }
    }
    if(msg.startsWith("!코디")){
      nickname = msg.split(" ")[1];
      if(nickname == undefined){
        replier.reply("캐릭터 이름을 입력해주세용");
      }
      else{
        maplegg = "https://maple.gg/u/" + nickname;
        dataC1 = org.jsoup.Jsoup.connect(maplegg).get();
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
        var deflen = msg.split(" ").length;
        var chkN = false;
        for(var i = 1; i < deflen; ++i){
          if(isNaN(msg.split(" ")[i])){
            chkN = true;
          }
        }
        if(chkN){
          replier.reply("숫자를 입력해주세요.");
        }
        else{
        var defResult = defenseRate(msg);
        replier.reply(defResult);
        }
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
          for(i = 0; i < msg.split(" ")[2]; ++i){
            addition = [];
            addEternal(addition);
          
            let addList = [];
            additer = 0;
            while(additer < 4){
              n = getRandomInt(0,19);
              if(!isSameadd(n, addList)){
                addList.push(n);
                additer++;
              }
            }
            addResult = addgetResult(addition, addLevel, addList, addResult);
            addResult += "\n";
          }
          addlen = addResult.length;
          addResult = addResult.slice(0, addlen-2);

          replier.reply(addResult);
        }
        else{
          replier.reply("횟수가 5를 초과하거나 올바른 숫자가 아닙니다.");
        }
      }
    }
    if(msg.startsWith("!강환") || msg.startsWith("!강환불")){
      addLevel = msg.split(" ")[1];
      if(addLevel == undefined){
        replier.reply("레벨을 입력해주세용");
      }
      else if(addLevel != 150 && addLevel != 160 && addLevel != 200){
        replier.reply("레벨은 150, 160, 200만 가능합니다.");
      }
      else{
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
        if(msg.split(" ")[2] == undefined || msg.split(" ")[2] == 1){
          addition = [];
          addStrong(addition);
          
          let addList = [];
          additer = 0;
          while(additer < 4){
            n = getRandomInt(0,19);
            if(!isSameadd(n, addList)){
              addList.push(n);
              additer++;
            }
          }
          addResult += "\n";
          addResult = addgetResult(addition, addLevel, addList, addResult);
          addlen = addResult.length;
          addResult = addResult.slice(0, addlen-1);

          replier.reply(addResult);
        }
        else if(msg.split(" ")[2] > 0 && msg.split(" ")[2] < 6 && msg.split(" ")[2] % 1 === 0){
          addResult += msg.split(" ")[2];
          addResult += "회\n";
          for(i = 0; i < msg.split(" ")[2]; ++i){
            addition = [];
            addStrong(addition);
          
            let addList = [];
            additer = 0;
            while(additer < 4){
              n = getRandomInt(0,19);
              if(!isSameadd(n, addList)){
                addList.push(n);
                additer++;
              }
            }
            addResult = addgetResult(addition, addLevel, addList, addResult);
            addResult += "\n";
          }
          addlen = addResult.length;
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

          var dataHis3 = dataHis1.split("columns: [[")[1];
          var dataHis4 = dataHis3.split("exp")[0];

          var dataHisYear = [];
          for(i = 0; i < 7; ++i){
            dataHisYear[i] = "21";
          }
          var dataHisMonth = [];
          for(i = 0; i < 7; ++i){
            var tempHisMonth = dataHis4.split(",\"")[i+1];
            tempHisMonth = tempHisMonth.split("\\uc6d4")[0];
            if(tempHisMonth.length > 2){
              dataHisYear[i] = tempHisMonth.split("\\ub144")[0];
              tempHisMonth = tempHisMonth.split(" ")[1];
            }
            dataHisMonth[i] = tempHisMonth;
          }

          var dataHisDay = [];
          for(i = 0; i < 7; ++i){
            var tempHisDay = dataHis4.split("uc6d4 ")[i+1];
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
        replier.reply("캐릭터 이름을 입력해주세용");
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
      replier.reply("오늘은 " + (day.getMonth() + 1) + "월 " + day.getDate() + "일 입니다.");
    }
    if(msg == "!시간"){      
      day = new Date();
      replier.reply("지금은 " + day.getHours() + "시 " + day.getMinutes() + "분 " + day.getSeconds() + "초입니다.");
    }
    if((sender == "천한수" || sender == adminNick) && msg.startsWith("!썬데이설정")){
      if(msg.split(" ")[1] == undefined){
        replier.reply("설정할 문구가 누락되었습니다.");
      }
      else{
        var sunlen = msg.split(" ").length;
        sunday = msg.split(" ")[1];
        if(sunlen > 1){
          for(i = 2; i < sunlen; ++i){
            sunday += "\n";
            sunday += msg.split(" ")[i];
          }
        }
        replier.reply(sunday + "\n\n설정 완료하였습니다.");
        FileStream.write("storage/emulated/0/kakao/Bots/사랑이봇/sunday.txt", sunday);
      }
    }
    if((sender == "천한수" || sender == adminNick) && msg.startsWith("!썬데이초기화")){
      replier.reply("썬데이 정보 초기화를 완료하였습니다.");
      sunday = "";
      FileStream.remove("storage/emulated/0/kakao/Bots/사랑이봇/sunday.txt");
    }
    if(msg == "!썬데이" || msg == "!선데이"){
      sunday = FileStream.read("storage/emulated/0/kakao/Bots/사랑이봇/sunday.txt");
      replier.reply(sunday);
    }
    if(msg == "!업데이트" || msg == "!업뎃"){
      var mapleHome = "https://maplestory.nexon.com/";
      var mapleUp = "https://maplestory.nexon.com/News/Update";
      var dataUP1 = org.jsoup.Jsoup.connect(mapleUp).get();
      dataUP1 = dataUP1.toString();
      var dataUP2 = dataUP1.split("<!-- notice ul str -->")[1];
      dataUP2 = dataUP2.split("</span>")[0];
      var dataUP3 = dataUP2.split("<a href=\"")[1];
      dataUP3 = dataUP3.split("\">")[0];
      var dataUP4 = dataUP2.split("<span>")[1];

      replier.reply(dataUP4 + "\n\n" + mapleHome + dataUP3);
    }
    if(msg.startsWith("!추옵") || msg.startsWith("!추가옵션")){
      var weaponName = msg.split(" ")[1];
      if(weaponName == undefined){
        replier.reply("무기 이름이 누락되었습니다.");
      }
      else{
        var chkW = 1;
        var w140 = "우트가르드 ";
        var w150 = "파프니르 ";
        var w160 = "앱솔랩스 ";
        var w200 = " 아케인셰이드 ";
        var wGene = "제네시스 ";
        switch(weaponName){
          case "아대":
          case "나로":
          case "나이트로드":
          case "나워":
          case "나이트워커":
          case "표창":
            w140 += "가즈\n(62) "; w140 += weapon140[0];
            w150 += "리스크홀더\n(86) "; w150 += weapon150[0];    
            w160 += "리벤지가즈\n(103) "; w160 += weapon160[0];
            w200 += "가즈\n(149) "; w200 += weapon200[0];        
            wGene += "가즈\n(172) "; wGene += weaponGenesis[0];
            break;
          case "건":
          case "총":
          case "캡틴":
          case "메카닉":
          case "불릿":
            w140 += "피스톨\n(90) "; w140 += weapon140[1];
            w150 += "첼리스카\n(125) "; w150 += weapon150[1];
            w160 += "포인팅건\n(150) "; w160 += weapon160[1];
            w200 += "피스톨\n(216) "; w200 += weapon200[1];       
            wGene += "피스톨\n(249) "; wGene += weaponGenesis[1];
            break;
          case "건틀렛리볼버":
          case "블래스터":
          case "블래":
            w140 += "흐림두르스\n(90) "; w140 += weapon140[1];
            w150 += "빅 마운틴\n(128) "; w150 += weapon150[2];
            w160 += "파일 갓\n(154) "; w160 += weapon160[2];
            w200 += "엘라하\n(221) "; w200 += weapon200[2];       
            wGene += "엘라하\n(255) "; wGene += weaponGenesis[2];
            break;
          case "너클":
          case "바이퍼":
          case "스트라이커":
          case "스커":
          case "은월":
          case "아크":
            w140 += "클로\n(90) "; w140 += weapon140[1];
            w150 += "펜리르탈론\n(128) "; w150 += weapon150[2];
            w160 += "블로우너클\n(154) "; w160 += weapon160[2];
            w200 += "클로\n(221) "; w200 += weapon200[2];       
            wGene += "클로\n(255) "; wGene += weaponGenesis[2];
            break;
          case "에너지소드":
          case "제논":
            w140 += "에너지체인\n(90) "; w140 += weapon140[1];
            w150 += "스플릿엣지\n(128) "; w150 += weapon150[2];
            w160 += "에너지체인\n(154) "; w160 += weapon160[2];
            w200 += "에너지체인\n(221) "; w200 += weapon200[2];       
            wGene += "에너지체인\n(255) "; wGene += weaponGenesis[2];
            break;
          case "소울슈터":
          case "엔젤릭버스터":
          case "엔버":
            w140 += "드래곤소울\n(92) "; w140 += weapon140[2];
            w150 += "엔젤릭슈터\n(128) "; w150 += weapon150[2];
            w160 += "소울슈터\n(154) "; w160 += weapon160[2];
            w200 += "소울슈터\n(221) "; w200 += weapon200[2];       
            wGene += "소울슈터\n(255) "; wGene += weaponGenesis[2];
            break;
          case "단검":
          case "섀도어":
          case "듀얼블레이드":
          case "듀블":
            w140 += "대거\n(115) "; w140 += weapon140[3];
            w150 += "다마스커스\n(160) "; w150 += weapon150[4];
            w160 += "슬래셔\n(192) "; w160 += weapon160[4];
            w200 += "대거\n(276) "; w200 += weapon200[4];       
            wGene += "대거\n(318) "; wGene += weaponGenesis[4];
            break;
          case "듀얼보우건":
          case "메르세데스":
          case "메르":
            w140 += "듀얼보우건\n(115) "; w140 += weapon140[3];
            w150 += "듀얼윈드윙\n(160) "; w150 += weapon150[4];
            w160 += "듀얼보우건\n(192) "; w160 += weapon160[4];
            w200 += "듀얼보우건\n(276) "; w200 += weapon200[4];       
            wGene += "듀얼보우건\n(318) "; wGene += weaponGenesis[4];
            break;
          case "부채":
          case "호영":
            w140 += "거선\n(115) "; w140 += weapon140[3];
            w150 += "용선\n(160) "; w150 += weapon150[4];
            w160 += "괴선\n(192) "; w160 += weapon160[4];
            w200 += "초선\n(276) "; w200 += weapon200[4];       
            wGene += "창세선\n(318) "; wGene += weaponGenesis[4];
            break;            
          case "브레스슈터":
          case "카인":
            w140 += "브레스 슈터\n(115) "; w140 += weapon140[3];
            w150 += "브레스 슈터\n(160) "; w150 += weapon150[4];
            w160 += "브레스 슈터\n(192) "; w160 += weapon160[4];
            w200 += "브레스 슈터\n(276) "; w200 += weapon200[4];       
            wGene += "브레스 슈터\n(318) "; wGene += weaponGenesis[4];
            break;
          case "에인션트보우":
          case "패스파인더":
          case "패파":
            w140 += "에인션트 보우\n(115) "; w140 += weapon140[3];
            w150 += "에인션트 보우\n(160) "; w150 += weapon150[4];
            w160 += "에인션트 보우\n(192) "; w160 += weapon160[4];
            w200 += "에인션트 보우\n(276) "; w200 += weapon200[4];       
            wGene += "에인션트 보우\n(318) "; wGene += weaponGenesis[4];
            break;
          case "체인":
          case "카데나":            
            w140 += "체인\n(115) "; w140 += weapon140[3];
            w150 += "체인\n(160) "; w150 += weapon150[4];
            w160 += "체인\n(192) "; w160 += weapon160[4];
            w200 += "체인\n(276) "; w200 += weapon200[4];       
            wGene += "체인\n(318) "; wGene += weaponGenesis[4];
            break;
          case "활":
          case "보우마스터":
          case "보마":
          case "윈드브레이커":
          case "윈브":
            w140 += "보우\n(115) "; w140 += weapon140[3];
            w150 += "윈드체이서\n(160) "; w150 += weapon150[4];
            w160 += "슈팅보우\n(192) "; w160 += weapon160[4];
            w200 += "보우\n(276) "; w200 += weapon200[4];       
            wGene += "보우\n(318) "; wGene += weaponGenesis[4];
            break;
          case "석궁":
          case "신궁":
          case "와일드헌터":
          case "와헌":
            w140 += "크로스보우\n(118) "; w140 += weapon140[4];
            w150 += "윈드윙슈터\n(164) "; w150 += weapon150[5];
            w160 += "크로스보우\n(197) "; w160 += weapon160[5];
            w200 += "크로스보우\n(283) "; w200 += weapon200[5];       
            wGene += "크로스보우\n(326) "; wGene += weaponGenesis[5];
            break;
          case "케인":
          case "팬텀":
            w140 += "케인\n(118) "; w140 += weapon140[4];
            w150 += "클레르시엘\n(164) "; w150 += weapon150[5];
            w160 += "핀쳐케인\n(197) "; w160 += weapon160[5];
            w200 += "케인\n(283) "; w200 += weapon200[5];       
            wGene += "케인\n(326) "; wGene += weaponGenesis[5];
            break;
          case "한손검":
          case "미하일":
            w140 += "세이버\n(118) "; w140 += weapon140[4];
            w150 += "미스틸테인\n(164) "; w150 += weapon150[5];
            w160 += "세이버\n(197) "; w160 += weapon160[5];
            w200 += "세이버\n(283) "; w200 += weapon200[5];       
            wGene += "세이버\n(326) "; wGene += weaponGenesis[5];
            break;
          case "한손도끼":
            w140 += "엑스\n(118) "; w140 += weapon140[4];
            w150 += "트윈클리버\n(164) "; w150 += weapon150[5];
            w160 += "엑스\n(197) "; w160 += weapon160[5];
            w200 += "엑스\n(283) "; w200 += weapon200[5];       
            wGene += "엑스\n(326) "; wGene += weaponGenesis[5];
            break;
          case "한손둔기":
          case "데몬슬레이어":
          case "데슬":
            w140 += "해머\n(118) "; w140 += weapon140[4];
            w150 += "골디언해머\n(164) "; w150 += weapon150[5];
            w160 += "비트해머\n(197) "; w160 += weapon160[5];
            w200 += "해머\n(283) "; w200 += weapon200[5];       
            wGene += "해머\n(326) "; wGene += weaponGenesis[5];
            break;
          case "데스페라도":
          case "데몬어벤져":
          case "데벤져":
            w140 += "데스페라도\n(122) "; w140 += weapon140[5];
            w150 += "데스브링어\n(171) "; w150 += weapon150[6];
            w160 += "데스페라도\n(205) "; w160 += weapon160[6];
            w200 += "데스페라도\n(295) "; w200 += weapon200[6];       
            wGene += "데스페라도\n(340) "; wGene += weaponGenesis[6];
            break;
          case "두손검":
          case "히어로":
            w140 += "투핸드소드\n(122) "; w140 += weapon140[5];
            w150 += "페니텐시아\n(171) "; w150 += weapon150[6];
            w160 += "브로드세이버\n(205) "; w160 += weapon160[6];
            w200 += "투핸드소드\n(295) "; w200 += weapon200[6];       
            wGene += "투핸드소드\n(340) "; wGene += weaponGenesis[6];
            break;
          case "튜너":
          case "아델":
            w140 += "리스트레인트\n(122) "; w140 += weapon140[5];
            w150 += "포기브니스\n(171) "; w150 += weapon150[6];
            w160 += "튜너\n(205) "; w160 += weapon160[6];
            w200 += "튜너\n(295) "; w200 += weapon200[6];       
            wGene += "튜너\n(340) "; wGene += weaponGenesis[6];
            break;
          case "폴암":
          case "아란":
            w140 += "핼버드\n(122) "; w140 += weapon140[5];
            w150 += "문글레이브\n(153) "; w150 += weapon150[3];
            w160 += "핼버드\n(184) "; w160 += weapon160[3];
            w200 += "폴암\n(264) "; w200 += weapon200[3];       
            wGene += "폴암\n(304) "; wGene += weaponGenesis[3];
            break;
          case "핸드캐논":
          case "캐논슈터":
          case "캐슈":
            w140 += "시즈건\n(122) "; w140 += weapon140[5];
            w150 += "러스터캐논\n(175) "; w150 += weapon150[7];
            w160 += "블래스트캐논\n(210) "; w160 += weapon160[7];
            w200 += "시즈건\n(302) "; w200 += weapon200[7];       
            wGene += "시즈건\n(348) "; wGene += weaponGenesis[7];
            break;
          case "두손도끼":
            w140 += "투핸드엑스\n(124) "; w140 += weapon140[6];
            w150 += "배틀클리버\n(171) "; w150 += weapon150[6];
            w160 += "브로드엑스\n(205) "; w160 += weapon160[6];
            w200 += "투핸드엑스\n(295) "; w200 += weapon200[6];       
            wGene += "투핸드엑스\n(340) "; wGene += weaponGenesis[6];
            break;
          case "두손둔기":
          case "팔라딘":
          case "팔라":
            w140 += "투핸드해머\n(124) "; w140 += weapon140[6];
            w150 += "라이트닝어\n(171) "; w150 += weapon150[6];
            w160 += "브로드해머\n(205) "; w160 += weapon160[6];
            w200 += "투핸드해머\n(295) "; w200 += weapon200[6];       
            wGene += "투핸드해머\n(340) "; wGene += weaponGenesis[6];
            break;
          case "창":
          case "다크나이트":
          case "닼나":
            w140 += "스피어\n(124) "; w140 += weapon140[6];
            w150 += "브류나크\n(171) "; w150 += weapon150[6];
            w160 += "피어싱스피어\n(205) "; w160 += weapon160[6];
            w200 += "스피어\n(295) "; w200 += weapon200[6];       
            wGene += "스피어\n(340) "; wGene += weaponGenesis[6];
            break;
          case "매직건틀렛":
          case "일리움":
            w140 += "매직 건틀렛\n(153) "; w140 += weapon140[7];
            w150 += "매직 건틀렛\n(201) "; w150 += weapon150[8];
            w160 += "매직 건틀렛\n(241) "; w160 += weapon160[8];
            w200 += "매직 건틀렛\n(347) "; w200 += weapon200[8];       
            wGene += "매직 건틀렛\n(400) "; wGene += weaponGenesis[8];
            break;
          case "샤이닝로드":
          case "루미너스":
          case "루미":
            w140 += "샤이닝로드\n(153) "; w140 += weapon140[7];
            w150 += "마나크래들\n(201) "; w150 += weapon150[8];
            w160 += "샤이닝로드\n(241) "; w160 += weapon160[8];
            w200 += "샤이닝로드\n(347) "; w200 += weapon200[8];       
            wGene += "샤이닝로드\n(400) "; wGene += weaponGenesis[8];
            break;
          case "완드":
          case "라라":
            w140 += "완드\n(153) "; w140 += weapon140[7];
            w150 += "마나테이커\n(201) "; w150 += weapon150[8];
            w160 += "스펠링완드\n(241) "; w160 += weapon160[8];
            w200 += "완드\n(347) "; w200 += weapon200[8];       
            wGene += "완드\n(400) "; wGene += weaponGenesis[8];
            break;
          case "ESP리미터":
          case "키네시스":
          case "키네":
            w140 += "ESP리미터\n(153) "; w140 += weapon140[7];
            w150 += "ESP리미터\n(201) "; w150 += weapon150[8];
            w160 += "ESP리미터\n(241) "; w160 += weapon160[8];
            w200 += "ESP리미터\n(347) "; w200 += weapon200[8];       
            wGene += "ESP리미터\n(400) "; wGene += weaponGenesis[8];
            break;
          case "스태프":
          case "배틀메이지":
            w140 += "스태프\n(155) "; w140 += weapon140[8];
            w150 += "마나크라운\n(204) "; w150 += weapon150[9];
            w160 += "스펠링스테프\n(245) "; w160 += weapon160[9];
            w200 += "스태프\n(353) "; w200 += weapon200[9];       
            wGene += "스태프\n(406) "; wGene += weaponGenesis[9];
            break;
          case "태도":
          case "제로":
          case "알파":
            w140 = "라즐리(6형)\n(135) "; w140 += weapon140[9];
            w150 = "라즐리(7형)\n(169) "; w150 += weapon150[10];
            w160 = "라즐리(8형)\n(203) "; w160 += weapon160[10];
            w200 = "라즐리(9형)\n(293) "; w200 += weapon200[10];       
            wGene = "제네시스 라즐리\n(337) "; wGene += weaponGenesis[10];
            chkW = 3;
            break;
          case "대검":
          case "베타":
            w140 = "라피스(6형)\n(139) "; w140 += weapon140[9];
            w150 = "라피스(7형)\n(173) "; w150 += weapon150[10];
            w160 = "라피스(8형)\n(207) "; w160 += weapon160[10];
            w200 = "라피스(9형)\n(297) "; w200 += weapon200[10];       
            wGene = "제네시스 라피스\n(342) "; wGene += weaponGenesis[10];
            chkW = 3;
            break;
          case "해방된카이세리움":
          case "해카세":
          case "카이저":
            w150 = "해방된 카이세리움\n(400) "; w150 += weapon150[11];
            chkW = 2;
            break;
          default:
            chkW = 0;
            break;
        }
        if(chkW == 0){
          replier.reply("그런 이름의 무기는 없습니다.");
        }
        else if(chkW == 2){
          replier.reply("Lv150. " + w150);
        }
        else if(chkW == 3){
          replier.reply("Lv150. " + w140 + "\n\nLv170. " + w150 + "\n\nLv180. " + w160 + "\n\nLv200. " + w200 + "\n\nLv200. " + wGene);
        }
        else{
          replier.reply("Lv140. " + w140 + "\n\nLv150. " + w150 + "\n\nLv160. " + w160 + "\n\nLv200. " + w200 + "\n\nLv200. " + wGene);
        }
      }
    }
    if(msg.startsWith("!그님티")){
      if(msg.split(" ")[1] == undefined){
        replier.reply("닉네임을 입력해주세요.");
      }
      else{
        var lolrank = "";
        var lolnick = msg.slice(5);
        var opgg = "https://www.op.gg/summoner/userName=" + lolnick;
        var dataL1 = org.jsoup.Jsoup.connect(opgg).get();
        dataL1 = dataL1.toString();

        if(dataL1.indexOf("TierRankInfo") == -1){
          replier.reply("그런 닉네임의 롤 아이디는 존재하지 않습니다.");
        }
        else{
          var dataL2 = dataL1.split("TierRankInfo\">")[1];
          dataL2 = dataL2.split("sub-tier")[0];
        
          if(dataL2.indexOf("TierRank unranked") != -1){
            lolrank = "언랭";
          }
          else{
            var dataL3 = dataL2.split("TierRank\">")[1];
            var dataL4 = dataL3.split("</div>")[0];
            lolrank = dataL4;
            lolrank = lolrank.replace(/ /g, "");
            lolrank = lolrank.slice(0, lolrank.length - 1);
            lolrank = getTier(lolrank);
          }

          replier.reply("그래서 님 티어는\n\n" + lolrank);
        }
      }
    }
    if(msg.startsWith("!똥캐")){
      replier.reply(jobMentionList[17]);
    }
    if(msg.startsWith("!로얄")){
      if(msg.split(" ")[1] == undefined){
        var roy = 0;
        royalrand = getRandomInt(0, 1000);
        if(royalrand < royalrate[0]){
          roy = 0;
        }
        for(var j = 1; j < 25; ++j){
          if(royalrand < cumulate(royalrate, j) && royalrand >= cumulate(royalrate, j-1)){
            roy = j; break;
          }
        }
        rep = "어때? (";
        rep += royalList[roy];
        rep += ")아이템은 잘 받았어? 정말 어메이징하지 않아? 다음번에 또 메이플 로얄 스타일 쿠폰이 생기면 나를 찾아와줘!";
        replier.reply(rep);
      }
      else if(msg.split(" ")[1] > 0 && msg.split(" ")[1] <= 5000 && msg.split(" ")[1] % 1 === 0){
        var royalrep = "<로얄 스타일 ";
        var royalcnt = 0;
        royalcnt = msg.split(" ")[1];
        royalrep += royalcnt;
        royalrep += "회 결과>\n";
        royalrep += royal(royalcnt);
        replier.reply(royalrep);
      }
      else{        
        replier.reply("숫자가 5000을 초과하거나 숫자가 아닙니다.");
      }
    }
    if(true){
    switch(msg){
      case "!초보자":
        jobmention = jobMentionList[0];
        break;
      case "!히어로":
      case "!혀로":
      case "!김치싸다구":
        jobmention = jobMentionList[1];
        break;
      case "!팔라딘":
      case "!팔라":
      case "!곳폽":
      case "!괄라딘":
      case "!팔퀴벌레":
      case "!망치나가신다":
        jobmention = jobMentionList[2];
        break;
      case "!다크나이트":
      case "!닼나":
      case "!닥나":
      case "!창지기":
        jobmention = jobMentionList[3];
        break;
      case "!아크메이지(불,독)":
      case "!아크메이지불독":
      case "!불독":
      case "!방구쟁이":
        jobmention = jobMentionList[4];
        break;
      case "!아크메이지(썬,콜)":
      case "!아크메이지썬콜":
      case "!썬콜":
      case "!썬콜게이트":
        jobmention = jobMentionList[5];
        break;
      case "!비숍":
      case "!오더마스터":
      case "!프레이싸개":
        jobmention = jobMentionList[6];
        break;
      case "!보우마스터":
      case "!보마":
      case "!보마쟝":
      case "!보마조아":
      case "!무지개색총공격":
        jobmention = jobMentionList[7];
        break;
      case "!신궁":
      case "!신궁쟝":
      case "!거리두기마스터":
        jobmention = jobMentionList[8];
        break;
      case "!패스파인더":
      case "!패파":
      case "!패파쟝":
      case "!모궁최고아웃풋":
      case "!간장게장":
        jobmention = jobMentionList[9];
        break;
      case "!나이트로드":
      case "!나로":
      case "!표창싸개":
      case "!물몸":
        jobmention = jobMentionList[10];
        break;
      case "!섀도어":
      case "!닭뛰터줏대감":
        jobmention = jobMentionList[11];
        break;
      case "!듀얼블레이드":
      case "!듀블":
      case "!쌍칼":
      case "!블토카퓨":
        jobmention = jobMentionList[12];
        break;
      case "!바이퍼":
      case "!초사이어인":
        jobmention = jobMentionList[13];
        break;
      case "!캡틴":
      case "!캢틴":
      case "!총잡이":
        jobmention = jobMentionList[14];
        break;
      case "!캐논슈터":
      case "!캐슈":
      case "!원숭이주인":
        jobmention = jobMentionList[15];
        break;
      case "!노블레스":
      case "!시그초보자":
        jobmention = jobMentionList[16];
        break;
      case "!소울마스터":
      case "!소마":
      case "!보마아니고":
        jobmention = jobMentionList[17];
        break;
      case "!플레임위자드":
      case "!플위":
      case "!엠피조루":
        jobmention = jobMentionList[18];
        break;
      case "!윈드브레이커":
      case "!윈브":
      case "!페턴":
        jobmention = jobMentionList[19];
        break;
      case "!나이트워커":
      case "!나워":
      case "!점샷필수":
      case "!코로나":
      case "!박쥐":
        jobmention = jobMentionList[20];
        break;
      case "!스트라이커":
      case "!스커":
      case "!경직":
        jobmention = jobMentionList[21];
        break;
      case "!미하일":
      case "!로얄가드":
      case "!리듬게임":
        jobmention = jobMentionList[22];
        break;
      case "!시티즌":
      case "!레지초보자":
        jobmention = jobMentionList[23];
        break;
      case "!블래스터":
      case "!블래":
      case "!손목브레이커":
        jobmention = jobMentionList[24];
        break;
      case "!배틀메이지":
      case "!배메":
      case "!오라토템":
        jobmention = jobMentionList[25];
        break;
      case "!와일드헌터":
      case "!와헌":
      case "!버프주실와헌분계신가요":
        jobmention = jobMentionList[26];
        break;
      case "!메카닉":
      case "!메탁기":
      case "!세탁기":
        jobmention = jobMentionList[27];
        break;
      case "!제논":
      case "!올스탯":
        jobmention = jobMentionList[28];
        break;
      case "!데몬슬레이어":
      case "!데슬":
      case "!홈리스":
        jobmention = jobMentionList[29];
        break;
      case "!데몬어벤져":
      case "!데몬어벤저":
      case "!데벤져":
      case "!데벤저":
      case "!아또데벤템떴네":
        jobmention = jobMentionList[30];
        break;
      case "!아란":
      case "!곧무원":
      case "!순대":
      case "!분노조절장애":
      case "!분조장":
        jobmention = jobMentionList[31];
        break;
      case "!에반":
      case "!프리드":
      case "!돌아와":
        jobmention = jobMentionList[32];
        break;
      case "!루미너스":
      case "!루미":
      case "!어둠이..넘쳐흐른다!!":
        jobmention = jobMentionList[33];
        break;
      case "!메르세데스":
      case "!메르":
      case "!메세":
      case "!메르콥터":
      case "!여왕님":
      case "!샾없찐":
      case "!어디서샤프도없는게까불어":
        jobmention = jobMentionList[34];
        break;
      case "!팬텀":
      case "!기생오라비":
      case "!뭐이악":
      case "!뭐어?!이악녀가!!":
        jobmention = jobMentionList[35];
        break;
      case "!은월":
      case "!분바":
      case "![]":
        jobmention = jobMentionList[36];
        break;
      case "!카이저":
      case "!조상님":
      case "!디럭스봄버":
        jobmention = jobMentionList[37];
        break;
      case "!카인":
      case "!조시커":
      case "!샾없찐2":
        jobmention = jobMentionList[38];
        break;
      case "!카데나":
      case "!남이하면멋있는데내가하긴싫은직업":
      case "!사슬":
        jobmention = jobMentionList[39];
        break;
      case "!엔젤릭버스터":
      case "!엔버":
      case "!소울시커":
      case "!전장의아이돌":
      case "!피니투라☆페투치아":
      case "!Spotlight":
      case "!StarBubble":
        jobmention = jobMentionList[40];
        break;
      case "!아델":
      case "!루델팡":
      case "!츄델":
      case "!사기직업":
        jobmention = jobMentionList[41];
        break;
      case "!일리움":
      case "!탈모":
        jobmention = jobMentionList[42];
        break;
      case "!아크":
      case "!야,아크":
        jobmention = jobMentionList[43];
        break;
      case "!라라":
      case "!창섭":
        jobmention = jobMentionList[44];
        break;
      case "!호영":
      case "!호엥":
      case "!백호영":
        jobmention = jobMentionList[45];
        break;
      case "!제로":
      case "!바싸개":
      case "!클라이언트브레이크":
      case "!알파벳":
        jobmention = jobMentionList[46];
        break;
      case "!키네시스":
      case "!키네":
      case "!서울사람":
      case "!기내식":
        jobmention = jobMentionList[47];
        break;
      case "!핑크빈":
      case "!핑빈":
        jobmention = jobMentionList[48];
        break;
      case "!예티":
        jobmention = jobMentionList[49];
        break;
      default:
        jobmention = "-";
        break;
    }
    if(jobmention != "-"){
      replier.reply(jobmention);
    }
    }
  Api.markAsRead(room);
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
  for(i = 0; i < addList.length; ++i){
    addList_one = addList[i];
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
  for(i = 0; i < addList.length; ++i){
    addList_one = addList[i];
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

function royal(n){
  var rep = "";
  var royalarr = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
  var royalrand = 0;
  var ii = 0;
  while(ii < n){
    royalrand = getRandomInt(0,1000);
    if(royalrand < royalrate[0]){
      royalarr[0]++;
    }
    else{
      for(var j = 1; j < 25; ++j){
        if(royalrand < cumulate(royalrate, j) && royalrand >= cumulate(royalrate, j-1)){
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
        case "가디언엔젤슬라임":
        case "가엔슬":
        case "슬라임":
        case "노말가디언엔젤슬라임":
        case "노말가엔슬":
        case "노말슬라임":
          rep = bossList[53];
          break;
        case "카오스가디언엔젤슬라임":
        case "카가엔슬":
        case "카오스슬라임":
        case "카슬":
          rep = bossList[54];
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
      return '이미 갱신되었습니다.';
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

function cumulate(arr, ind) {
  var ret = 0;
  for(i = 0; i < ind+1; ++i){
    ret += arr[i];
  }
  return ret;
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
  "아르카누스 Lv.101\n60억ㆍ150억ㆍ1500억ㆍ1.5조ㆍ10.5조ㆍ900조\n50%ㆍ100%ㆍ150%ㆍ200%ㆍ250%ㆍ300%, 반감", //52
  "노말 가디언 엔젤 슬라임 Lv.220\n5조, 300%, 반감\n34,422,000메소", //53
  "카오스 가디언 엔젤 슬라임 LV.250\n115.5조, 300%, 반감\n90,312,500메소" //54
];
var bossnameList = "이지자쿰,  0\n 노말자쿰, 자쿰, 1\n 피아누스, 2\n 노말반반, 반반, 3\n 노말피에르, 노말삐에르, 피에르, 삐에르, 4\n 노말블러디퀸, 노블퀸, 블러디퀸, 블퀸, 5\n 이지파풀라투스, 이지파풀, 6\n 이지매그너스, 이지매그, 7\n 노말힐라, 힐라, 8\n 노말벨룸, 벨룸, 9\n 이지반레온, 이지반래온, 10\n 이지혼테일, 이지혼텔, 11\n 카웅, 12\n 이지아카이럼, 13\n 노말혼테일, 노말혼텔, 혼테일, 혼텔, 14\n 노말매그너스, 매그너스, 노매그, 매그, 15\n 노말반레온, 노말반래온, 반레온, 반래온, 16\n 노말핑크빈, 노핑, 핑크빈, 17\n 하드반레온, 하드반래온, 18\n 이지시그너스, 이시그, 19\n 노말아카이럼, 아카이럼, 20\n 노말파풀라투스, 노말파풀, 파풀라투스, 파풀, 21\n 하드힐라, 하힐, 22\n 카오스혼테일, 카텔, 카혼텔, 23\n 노말시그너스, 노말시그, 노시그, 시그너스, 시그, 24\n 카오스피에르, 카오스삐에르, 카피, 카삐, 25\n 카오스자쿰, 카쿰, 26\n 카오스반반, 카반반, 카반, 27\n 하드매그너스, 하매그, 하매, 28\n 카오스블러디퀸, 카블퀸, 29\n 카오스벨룸, 카벨룸, 카벨, 30\n 카오스핑크빈, 카핑빈, 카핑, 31\n 카오스파풀라투스, 카파풀, 32\n 불꽃늑대, 불늑, 33\n 도로시, 시드, 34\n 노말데미안, 노데미, 데미안, 데미, 35\n 노말스우, 노스우, 스우, 36\n 우르스, 우루스, 37\n 이지루시드, 이루시, 38\n 노말루시드, 노루시, 루시드, 루시, 39\n 노말윌, 노윌, 윌, 40\n 노말거대괴수더스크, 노말더스크, 노더스크, 노더, 거대괴수더스크, 더스크, 41\n 노말친위대장듄켈, 노말듄켈, 노듄켈, 노듄, 친위대장듄켈, 듄켈, 42\n 하드스우, 하스우, 43\n 하드데미안, 하데미, 44\n 하드루시드, 하루시, 45\n 카오스거대괴수더스크, 카오스더스크, 카더스크, 카더, 46\n 하드윌, 하윌, 47\n 하드친위대장듄켈, 하드듄켈, 하듄켈, 하듄, 48\n 진힐라, 진힐, 49\n 선택받은세렌, 세렌, 50\n 검은마법사, 검마, 검멘, 51\n 아르카누스, 수로, 길드, 52";
var accexps = [ 0, 15, 49, 106, 198, 333, 705, 1265, 2105, 3347, 4589, 5831, 7073, 8315, 9557, 11047, 12835, 14980, 17554, 20642, 24347, 28793, 34128, 40530, 48212, 57430, 68491, 81764, 97691, 116803, 135915, 155027, 174139, 193251, 212363, 235297, 262817, 295841, 335469, 383022, 434379, 489844, 549746, 614440, 684309, 759767, 841261, 929274, 1024328, 1126986, 1237856, 1357595, 1486913, 1626576, 1777412, 1940314, 2116248, 2306256, 2511464, 2733088, 2954712, 3176336, 3397960, 3619584, 3841208, 4079453, 4335566, 4610887, 4906857, 5225024, 5567053, 5934734, 6329991, 6754892, 7211660, 7700401, 8223353, 8782911, 9381638, 10022275, 10707756, 11441220, 12226026, 13065768, 13964291, 14925710, 15954428, 17055156, 18232934, 19493156, 20835292, 22264666, 23786949, 25408180, 27134791, 28973631, 30931995, 33017652, 35238876, 37604479, 39970082, 42335685, 44701288, 47066891, 49432494, 51951861, 54634986, 57492514, 60535781, 63776860, 67228609, 70904721, 74819780, 78989317, 83429873, 88159065, 93195654, 98559621, 104272245, 110356189, 116835589, 123736150, 131085247, 138912035, 147247564, 156124902, 165579266, 175648163, 186371538, 197791932, 209954651, 222907946, 236703205, 251395155, 267042081, 283706057, 301453191, 320353888, 340483130, 361920772, 384698266, 408899353, 434613007, 461933764, 490962068, 521804641, 554574874, 589393246, 626387766, 665694443, 707457787, 751831340, 798978240, 849071821, 902296250, 958847205, 1018932594, 1082773319, 1150604089, 1222674282, 1299248862, 1380609353, 1467054874, 1558903240, 1656492128, 1760180321, 1870349026, 1987403275, 2111773414, 2243916686, 2382667121, 2528355077, 2681327430, 2841948400, 3010600418, 3187685036, 3373623884, 3568859674, 3773857253, 3989104710, 4215114539, 4452424859, 4701600695, 4963235322, 5237951680, 5526403855, 5829278638, 6147297160, 6481216608, 6831832028, 7199978219, 7586531719, 7992412894, 8418588127, 8866072121, 9335930314, 9829281416, 10347300073, 10891219662, 11462335230, 13669361590, 16141231346, 18909725349, 22010438632, 25483237508, 29372772249, 33729051158, 38608083536, 44072599799, 50192858013, 59985271155, 70854849742, 82920081973, 96312489749, 111178062380, 130503306800, 151567823217, 174528146111, 199554898065, 226834057694, 270480713100, 317182634384, 367153690157, 420622719834, 477834581588, 552210001868, 630304193162, 712303094020, 798401939920, 888805728115, 1033451789227, 1182437232172, 1335892238405, 1493950894824, 1656751310935, 1868391851879, 2086381609051, 2310911058938, 2542176392321, 2780379685705, 3161504955119, 3554063982615, 3958399780935, 4374865653204, 4803825501641, 5361473304609, 5935850541666, 6527459095834, 7136815906627, 7764453421743, 9078218184097, 10405120594074, 11745292028150, 13098865176566, 14465974056466, 15846754025165, 17241341793550, 18649875439618, 20072494422146, 21509339594499, 24411766842652, 27343218363286, 30303984399126, 33294358095324, 36314635528483, 39365115735973, 42446100745537, 45557895605196, 48700808413451, 51875150349788, 58287321061188, 64763613479702, 71304668822401, 77911134718526, 84583665273612, 98062176994885, 112888539888285, 129197539071025, 147137438172039, 166871327183154, 206733782985606, 250582484368303, 298816055889269, 351872984562331, 410235606102699, 528128101614242, 657809846676939, 800459766245905, 957374677771767, 1129981080450210, 1478646013860670, 1862177440612180, 2284062010038850, 2748135036408170, 3258615365414430, 4289785630007070, 5424072921058980, 6671788941216080, 8044276563388880, 10103007996648000 ];

var exps = [ 15, 34, 57,92,135,372,560,840,1242,1242,1242,1242,1242,1242,1490,1788,2145,2574,3088,3705,4446,5335,6402,7682,9218,11061,13273,15927,19112,19112,19112,19112,19112,19112,22934,27520,33024,39628,47553,51357,55465,59902,64694,69869,75458,81494,88013,95054,102658,110870,119739,129318,139663,150836,162902,175934,190008,205208,221624,221624,221624,221624,221624,221624,238245,256113,275321,295970,318167,342029,367681,395257,424901,456768,488741,522952,559558,598727,640637,685481,733464,784806,839742,898523,961419,1028718,1100728,1177778,1260222,1342136,1429374,1522283,1621231,1726611,1838840,1958364,2085657,2221224,2365603,2365603,2365603,2365603,2365603,2365603,2519367,2683125,2857528,3043267,3241079,3451749,3676112,3915059,4169537,4440556,4729192,5036589,5363967,5712624,6083944,6479400,6900561,7349097,7826788,8335529,8877338,9454364,10068897,10723375,11420394,12162719,12953295,13795259,14691950,15646926,16663976,17747134,18900697,20129242,21437642,22777494,24201087,25713654,27320757,29028304,30842573,32770233,34818372,36994520,39306677,41763344,44373553,47146900,50093581,53224429,56550955,60085389,63840725,67830770,72070193,76574580,81360491,86445521,91848366,97588888,103688193,110168705,117054249,124370139,132143272,138750435,145687956,152972353,160620970,168652018,177084618,185938848,195235790,204997579,215247457,226009829,237310320,249175836,261634627,274716358,288452175,302874783,318018522,333919448,350615420,368146191,386553500,405881175,426175233,447483994,469858193,493351102,518018657,543919589,571115568,2207026470,2471869646,2768494003,3100713283,3472798876,3889534741,4356278909,4879032378,5464516263,6120258214,9792413142,10869578587,12065232231,13392407776,14865572631,19325244420,21064516417,22960322894,25026751954,27279159629,43646655406,46701921284,49971055773,53469029677,57211861754,74375420280,78094191294,81998900858,86098845900,90403788195,144646061112,148985442945,153455006233,158058656419,162800416111,211640540944,217989757172,224529449887,231265333383,238203293384,381125269414,392559027496,404335798320,416465872269,428959848437,557647802968,574377237057,591608554168,609356810793,627637515116,1313764762354,1326902409977,1340171434076,1353573148416,1367108879900,1380779968699,1394587768385,1408533646068,1422618982528,1436845172353,2902427248153,2931451520634,2960766035840,2990373696198,3020277433159,3050480207490,3080985009564,3111794859659,3142912808255,3174341936337,6412170711400,6476292418514,6541055342699,6606465896125,6672530555086,13478511721273,14826362893400,16308999182740,17939899101014,19733889011115,39862455802452,43848701382697,48233571520966,53056928673062,58362621540368,117892495511543,129681745062697,142649919568966,156914911525862,172606402678448,348664933410464,383531426751510,421884569426661,464073026369327,510480329006259,1031170264592640,1134287291051900,1247716020157090,1372487622172800,2058731433259200];
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
var weapon140 = [
"3/6/10/14/19/22/26", //아대
"4/8/14/20/27/33/38", //건, 건틀렛리볼버, 너클, 에너지소드
"4/9/14/20/27/33/38", //소울슈터
"5/11/17/25/34/41/48", //단검, 듀얼보우건, 부채, 브레스슈터, 에인션트보우, 체인, 활
"5/11/18/26/35/42/49", //석궁, 케인, 한손검, 한손도끼, 한손둔기
"5/11/18/26/36/43/51", //데스페라도, 두손검, 튜너, 폴암, 핸드캐논
"5/11/19/27/37/44/51", //두손도끼, 두손둔기, 창
"7/14/23/33/45/54/63", //매직건틀렛, 샤이닝로드, 완드, ESP리미터
"7/14/23/34/46/55/64", //스태프
"6/13/21/30/41" //태도,대검(6형)
];
var weapon150 = [
"11/16/21/28/36", //0 아대
"15/22/31/40/52", //1 건
"16/23/31/41/53", //2 건틀렛리볼버, 너클, 소울슈터, 에너지소드
"19/27/38/49/63", //3 폴암
"20/29/39/52/66", //4 단검, 듀얼보우건, 부채, 브레스슈터, 에인션트보우, 체인, 활
"20/29/40/53/68", //5 석궁, 케인, 한손검, 한손도끼, 한손둔기
"21/31/42/55/71", //6 데스페라도, 두손검, 두손도끼, 두손둔기, 창, 튜너
"21/31/43/56/72", //7 핸드캐논
"25/36/49/65/83", //8 매직건틀렛, 샤이닝로드, 완드, ESP리미터
"25/36/50/66/84", //9 스태프
"9/20/32/47/64", //10 태도,대검(7형)
"16/36/59/86/118" //11 해방된카이세리움
];
var weapon160 = [
"16/23/32/42/53", //0 아대
"23/33/46/60/77", //1 건
"24/34/47/62/79", //2 건틀렛리볼버, 너클, 소울슈터, 에너지소드
"28/41/56/74/95", //3 폴암
"29/43/59/77/99", //4 단검, 듀얼보우건, 부채, 브레스슈터, 에인션트보우, 체인, 활
"30/44/60/79/101", //5 석궁, 케인, 한손검, 한손도끼, 한손둔기
"31/46/63/82/106", //6 데스페라도, 두손검, 두손도끼, 두손둔기, 창, 튜너
"32/47/64/84/108", //7 핸드캐논
"37/54/73/97/124", //8 매직건틀렛, 샤이닝로드, 완드, ESP리미터
"37/54/75/98/126", //9 스태프
"11/23/38/56/76" //10 태도,대검(8형)
];
var weapon200 = [
"27/40/55/72/92", //0 아대
"39/58/79/104/133", //1 건
"40/59/81/106/136", //2 건틀렛리볼버, 너클, 소울슈터, 에너지소드
"48/70/96/127/163", //3 폴암
"50/73/101/133/170", //4 단검, 듀얼보우건, 부채, 브레스슈터, 에인션트보우, 체인, 활
"51/75/103/136/175", //5 석궁, 케인, 한손검, 한손도끼, 한손둔기
"54/78/108/142/182", //6 데스페라도, 두손검, 두손도끼, 두손둔기, 창, 튜너
"55/80/110/145/186", //7 핸드캐논
"63/92/126/167/214", //8 매직건틀렛, 샤이닝로드, 완드, ESP리미터
"64/94/129/170/218", //9 스태프
"18/40/65/95/131" //10 태도,대검(9형)
];
var weaponGenesis = [
"31/46/72/83/106", //0 아대
"45/66/91/120/154", //1 건
"46/68/106/123/157", //2 건틀렛리볼버, 너클, 소울슈터, 에너지소드
"55/81/111/146/187", //3 폴암
"58/84/116/153/196", //4 단검, 듀얼보우건, 부채, 브레스슈터, 에인션트보우, 체인, 활
"59/87/119/157/201", //5 석궁, 케인, 한손검, 한손도끼, 한손둔기
"62/90/124/164/210", //6 데스페라도, 두손검, 두손도끼, 두손둔기, 창, 튜너
"63/92/127/167/215", //7 핸드캐논
"72/106/146/192/246", //8 매직건틀렛, 샤이닝로드, 완드, ESP리미터
"74/108/148/195/250", //9 스태프
"21/46/75/110/151" //10 태도,대검(10형)
];
var royalList = [
"[스페셜 라벨] 진주빛 기억", //0
"[스페셜 라벨] 블루밍 버블", //1
"[스페셜 라벨] 설레는 시작", //2
"[스페셜 라벨] 파란 물보라(남) / 파란 물결(여)", //3
"[스페셜 라벨] 블루밍 오션", //4
"헤네시스 나들이", //5
"쫑긋 헤네시스", //6
"헤네시스 채집가", //7
"버섯의 노래", //8
"꿈꾸는 오솔길", //9
"발그레 발그레", //10
"토끼 귀", //11
"퍼니펀치 요요", //12
"특대 사이즈 와이셔츠", //13
"핑크 다이빙 마스크", //14
"스카이 다이빙 마스크", //15
"스카이 스쿠버다이빙(남) / 핑크 스쿠버다이빙(여)", //16
"뽀그리 오리", //17
"짝짝이 반바지", //18
"그린 냥이 티셔츠", //19
"트윙클 글리터", //20
"[30일] 꽥꽥 오리 말풍선 반지 교환권", //21
"[30일] 꽥꽥 오리 명찰반지 교환권", //22
"new 파도가 철썩! 이펙트 교환권", //23
"스카우터" //24
];

var royalrate = [
25, //0
30, //1
32, //2
32, //3
31, //4
30, //5
45, //6
50, //7
50, //8
50, //9
15, //10
20, //11
20, //12
20, //13
50, //14
50, //15
50, //16
50, //17
50, //18
50, //19
50, //20
50, //21
50, //22
50, //23
50 //24
];

var jobList = ["!초보자", "!히어로", "!팔라딘", "!다크나이트", "!불독", "!썬콜", "!비숍", "!보우마스터", "!신궁", "!패스파인더", "!나이트로드", "!섀도어", "!듀얼블레이드", "!바이퍼", "!캡틴", "!캐논슈터", "!노블레스", "!소울마스터", "!플레임위자드", "!윈드브레이커", "!나이트워커", "!스트라이커", "!미하일", "!시티즌", "!블래스터", "!배틀메이지", "!와일드헌터", "!메카닉", "!제논", "!데몬슬레이어", "!데몬어벤져", "!아란", "!에반", "!루미너스", "!메르세데스", "!팬텀", "!은월", "!카이저", "!카인", "!카데나", "!엔젤릭버스터", "!아델", "!일리움", "!아크", "!라라", "!호영", "!제로", "!키네시스", "!핑크빈", "!예티" ];

var jobMentionList = [
  "초보자\n일반 모험가가 레벨1부터 10까지 거치는 직업. 전사계열이다. 아케인리버 지역 입장이 불가능해 세계수, 헤이븐이 최종 사냥터이다.", // 0  초보자
  "히어로\n\n전사 계열 직업 중에서 최고의 근접 딜러라는 콘셉트에 걸맞게 다른 직업을 압도하는 파괴적인 화력을 자랑한다.\n\n무적기 : 콤보 데스폴트 (1.6초)\n뎀감기 : 없음\n바인드 : 없음\n\n공격대원 효과 : STR 10/20/40/80/100 증가\n\n링크 스킬 : 인빈서블 빌리프 - 현재 HP가 최대 HP의 15% 이하가 되었을 때 자동 발동되어 3초 동안 1초마다 최대 HP의 35% 회복. 재발동 대기시간 240초", // 1  히어로
  "팔라딘\n\n방어적인 측면이 강한, 원소 공격을 주력으로 사용하는 전사. 화(火) / 빙(氷) / 전(電) / 성(聖)의 4가지 속성의 차지 공격을 번갈아 사용하면서 엘리멘탈 차지를 축적하고, 이로써 스킬이나 스펙을 강화한다.\n\n무적기 : 새크로생티티 (30초), 가디언 스피릿 (파티원 부활 시 10초)\n뎀감기 : 엘리멘탈 차지 (5스택 시 10%), 블레싱 아머 (25%), 그랜드 크로스 (키다운 중 50%)\n바인드 : 스마이트\n\n공격대원 효과 : STR 10/20/40/80/100 증가\n\n링크 스킬 : 인빈서블 빌리프 - 현재 HP가 최대 HP의 15% 이하가 되었을 때 자동 발동되어 3초 동안 1초마다 최대 HP의 35% 회복. 재발동 대기시간 240초", // 2  팔라딘
  "다크나이트\n\n공격형인 히어로 계열과 방어형인 팔라딘 계열과는 달리 이쪽은 생존형 직업으로, 죽지 않는 암흑 기사가 컨셉으로 어둠을 바탕으로 한 공격을 사용하며 쉽게 사망하지 않는다.\n\n무적기 : 리인카네이션 (사망 시 부활 후 40초)\n뎀감기 : 아이언 월(다크니스 오라 사용시 10%)\n바인드 : 없음\n\n공격대원 효과 : 최대 HP 2/3/4/5/6% 상승\n\n링크 스킬 : 인빈서블 빌리프 - 현재 HP가 최대 HP의 15% 이하가 되었을 때 자동 발동되어 3초 동안 1초마다 최대 HP의 35% 회복. 재발동 대기시간 240초", // 3  다크나이트
  "아크메이지(불,독)\n\nDoT(Damage over Time)를 기반으로, 일정 주기마다 폭딜을 쏟아붓는 누커. 편의성과 안정성을 약간 희생한 대신 그 보상으로 막강한 화력을 받은 딜러이다.\n\n무적기 : 없음\n뎀감기 : 에테리얼 폼[공용] (3초)\n바인드 : 없음\n\n공격대원 효과 : 최대 MP 2/3/4/5/6% 상승\n\n링크 스킬 : 임피리컬 널리지 - 공격한 적 중 최대 HP가 가장 높은 적에 대한 약점을 35% 확률로 파악, 파악한 약점은 10초 동안 지속되며 최대 3회까지 중첩. 중첩 당 데미지 3%, 방어율 무시 3% 증가", // 4  불독
  "아크메이지(썬,콜)\n\n얼음 속성 공격을 이용한 빙결 중첩이 있다. 이렇게 빙결이 중첩된 적은 번개 속성 스킬에 공격당할 때 더욱 큰 피해를 받는다. 썬콜의 보스전은 얼마나 안정적으로 빙결 중첩을 유지하느냐에 달려 있다.\n\n무적기 : 프리징 브레스 (13초)\n뎀감기 : 에테리얼 폼[공용] (3초)\n바인드 : 프리징 브레스(13초)\n\n공격대원 효과 : INT 10/20/40/80/100 상승\n\n링크 스킬 : 임피리컬 널리지 - 공격한 적 중 최대 HP가 가장 높은 적에 대한 약점을 35% 확률로 파악, 파악한 약점은 10초 동안 지속되며 최대 3회까지 중첩. 중첩 당 데미지 3%, 방어율 무시 3% 증가", // 5  썬콜
  "비숍\n\n모든 직업을 통틀어 유일한 유틸리티 집중형 직업으로, 파티원 보조에 초점을 맞춘 스킬 구성을 지녔다. 뿐만 아니라 단순한 딜링 사이클과 뛰어난 공격 효율성 덕분에 보조 격수로서 기용되기도 한다.\n\n무적기 : 없음\n뎀감기 : 홀리 매직쉘 (10%, 가드), 헤븐즈 도어 (사망 방지), 에테리얼 폼[공용] (3초)\n바인드 : 없음\n\n공격대원 효과 : INT 10/20/40/80/100 상승\n\n링크 스킬 : 임피리컬 널리지 - 공격한 적 중 최대 HP가 가장 높은 적에 대한 약점을 35% 확률로 파악, 파악한 약점은 10초 동안 지속되며 최대 3회까지 중첩. 중첩 당 데미지 3%, 방어율 무시 3% 증가", // 6  비숍
  "보우마스터\n\n메이플스토리 최초의 속사기인 폭풍의 시를 주력으로 사용하는 정통 속사류 궁수다. 절대적으로 부족한 필수 유틸리티를 지속 화력으로 메워야 한다.\n\n무적기 : 없음\n뎀감기 : 실루엣 미라주 (스택 소모 시 70%)\n바인드 : 없음\n\n공격대원 효과 : DEX 10/20/40/80/100 상승\n\n링크 스킬 : 어드벤쳐러 큐리어스 - 몬스터 컬렉션 등록 확률 30%, 크리티컬 확률 10% 증가\n\n보 마 조 아", // 7  보우마스터
  "신궁\n\n공격 시 공격당한 적과의 거리에 따라 가까울수록 방어무시 비율이 증가하고 멀수록 최종 데미지가 증가한다. 궁수 계열 직업 중 유일하게 속사형 스킬이 아닌 한방형 스킬을 주력으로 쓴다.\n\n무적기 : 트루 스나이핑 (14초)\n뎀감기 : 없음\n바인드 : 없음\n\n공격대원 효과 : 크리티컬 확률 1/2/3/4/5%\n\n링크 스킬 : 어드벤쳐러 큐리어스 - 몬스터 컬렉션 등록 확률 30%, 크리티컬 확률 10% 증가", // 8  신궁
  "패스파인더\n\n세 가지 문양을 수시로 바꿔가며 공격하는 준 속사기 직업. 다른 속사기 직업들과는 다르게 두 가지 스킬을 번갈아 사용하기에 속사기에 준하는 취급을 받는다.\n\n[2019년 1월 31일 출시]\n\n무적기 : 얼티밋 블래스트 (1.5초)\n뎀감기 : 에인션트 아스트라 - 디스차지 (20%), 블래스트 (40%), 옵시디언 배리어 (40%, 가드)\n바인드 : 없음\n\n공격대원 효과 : DEX 10/20/40/80/100 상승\n\n링크 스킬 : 어드벤쳐러 큐리어스 - 몬스터 컬렉션 등록 확률 30%, 크리티컬 확률 10% 증가", // 9  패스파인더
  "나이트로드\n\n도적 직업군답게 타 직업보다 회피율이 비교적 높으며, 표창 도적의 단점 중 하나인 약한 체력과 종잇장같은 방어력도 가지고 있다. 공격 당해 표식이 새겨진 적을 한번 더 공격할 시 추가 표창으로 몇 번 더 타격한다.\n\n무적기 : 없음\n뎀감기 : *다크 사이트 보유\n바인드 : 없음\n\n공격대원 효과 : 크리티컬 확률 1/2/3/4/5% 증가\n\n링크 스킬 : 시프 커닝 - 적에게 상태이상을 적용시키면 10초 동안 데미지 20% 증가. 재발동 대기시간 20초", // 10 나이트로드 
  "섀도어\n\n단검을 주무기로 하는 근거리 공격수. 짧은 리치의 단점을 메우기 위해 방어력 상승 패시브&버프+회피율 상승 패시브+텔레포트 스킬+슈퍼 스탠스 스킬들로 무장했다. 강화 코어 미적용 기준 퍼뎀이 고작 100% 초반대에 불과한 스킬로 원킬을 내야 하므로, 어지간한 자본 투자로는 빛을 보기 힘들다.\n\n무적기 : 절개 (1초)\n뎀감기 : 연막탄 (10%, 가드), *다크 사이트 보유\n바인드 : 없음\n\n공격대원 효과 : LUK 10/20/40/80/100 증가\n\n링크 스킬 : 시프 커닝 - 적에게 상태이상을 적용시키면 10초 동안 데미지 20% 증가. 재발동 대기시간 20초", // 11 섀도어
  "듀얼블레이드\n\n주무기 단검과 보조무기 블레이드를 함께 사용하는 메이플 유일의 이도류 근거리 격수. 진정한 의미에서의 보조무기를 도입한 최초의 직업이다. 공격 스킬마다 추가 방어율 무시가 붙어 있고, 평딜과 극딜 사이의 격차가 다소 적다.\n\n[2010년 2월 25일 출시]\n\n무적기 : 사슬지옥 (3초), 파이널 컷 (3초)\n뎀감기 : 아수라 (가드), *다크 사이트 보유\n바인드 : 없음\n\n공격대원 효과 : LUK 10/20/40/80/100 증가\n\n링크 스킬 : 시프 커닝 - 적에게 상태이상을 적용시키면 10초 동안 데미지 20% 증가. 재발동 대기시간 20초", // 12 듀얼블레이드
  "바이퍼\n\n고유 자원인 에너지를 별도로 사용하고 있다. 에너지는 적을 공격할 때마다 일정량이 충전되며, 최대 에너지 보유량에 도달할 경우 완충 상태가 되어 추가 능력치와 스킬 추가 효과를 부여받는다.\n\n[2007년 12월 18일 출시]\n\n무적기 : 트랜스 폼 (에너지 오브 사용 시 1초,3회)\n뎀감기 : 카운터 어택 (25% 확률로 40%)\n바인드 : 없음\n\n공격대원 효과 : STR 10/20/40/80/100 증가\n\n링크 스킬 : 파이렛 블레스 - 힘 70, 민첩 70, 지력 70, 운 70, 최대 HP 1225, 최대 MP 1225, 데미지 흡수 15% 증가", // 13 바이퍼
  "캡틴\n\n모험가 해적 중 중거리 및 소환수 특화 직업. 각종 소환수에 분산된 화력과 특유의 대미지 딜링 메커니즘이 대표적인 특징으로, 신경써야 할 것이 많아 손이 바쁘다.\n\n[2007년 12월 18일 출시]\n\n무적기 : 데드아이 (3초), 노틸러스 어썰트 (1.44초)\n뎀감기 : 어셈블 크루 (상태이상 방어)\n바인드 : 없음\n\n공격대원 효과 : 소환수 지속 시간 4/6/8/10/12%\n\n링크 스킬 : 파이렛 블레스 - 힘 70, 민첩 70, 지력 70, 운 70, 최대 HP 1225, 최대 MP 1225, 데미지 흡수 15% 증가", // 14 캡틴
  "캐논슈터\n\n긴 사거리, 높은 스킬 데미지(이하 퍼뎀), 엄청난 스킬 당 공격 횟수(이하 타수), 원거리 직업 기준으로 상당히 많은 체력과 방어력, 훌륭한 기동성 등 사냥 및 보스전에서 중요시 되는 능력을 모두 갖추어 다양한 상황에서 능동적인 운용이 가능하다. 옆에 달고 다니는 원숭이가 귀엽다.\n\n[2011년 7월 7일 출시]\n\n무적기 : ICBM (2초)\n뎀감기 : 없음\n바인드 : 없음\n\n공격대원 효과 : STR 10/20/40/80/100 증가\n\n링크 스킬 : 파이렛 블레스 - 힘 70, 민첩 70, 지력 70, 운 70, 최대 HP 1225, 최대 MP 1225, 데미지 흡수 15% 증가", // 15 캐논슈터
  "노블레스\n\n시그너스 기사단 계열의 초보자로, 미하일 외의 나머지 직업들로 전직이 가능하다.", // 16 노블레스
  "소울마스터\n\n자체 버프만으로도 풀공속 유지가 가능하며, 기본 크리 확률이 낮지 않다. 사냥기가 점샷이 가능하고, 원킬컷이 낮아서 낮은 스펙으로도 원킬 사냥이 쉽다. 광역 바인드와 공격 무시/반사 버프를 관통하는 스킬을 보유하고 있다. 상태에 따른 독자적인 모션과, 보스 주력기가 강제 점프를 동반하는 특이점을 가지고 있다.\n\n[2008년 12월 18일 출시]\n\n무적기 : 소울 이클립스 (3.5초), 솔루나 디바이드 (5초)\n뎀감기 : 초월자 시그너스의 축복[공용] (5%)\n바인드 : 소울 페네트레이션\n\n공격대원 효과 : 최대 HP 250/500/1000/2000/2500 증가\n\n링크 스킬 : 시그너스 블레스 - 공격력과 마력 25, 상태 이상 내성 15, 모든 속성 내성 15% 증가", // 17 소울마스터
  "플레임위자드\n\n불 속성에 집중한 마법사. 유리몸, 저연비, 오비탈, 고기동성으로 요약할 수 있다. MP 저연비는 그야말로 마법사 이외의 모든 직업을 통틀어도 최악이다.\n\n[2008년 12월 18일 출시]\n\n무적기 : 카타클리즘 (5초), 본 피닉스 (사망 방지 후 3초)\n뎀감기 : 초월자 시그너스의 축복[공용] (5%), 에테리얼 폼[공용] (3초)\n바인드 : 없음\n\n공격대원 효과 : INT 10/20/40/80/100 증가\n\n링크 스킬 : 시그너스 블레스 - 공격력과 마력 25, 상태 이상 내성 15, 모든 속성 내성 15% 증가", // 18 플레임위자드
  "윈드브레이커\n\n시그너스 기사단의 궁수 직업군으로서 바람을 이용한 스킬을 사용한다. 보우마스터, 와일드헌터, 메르세데스와 달리 속사기인 천공의 노래가 다수기 취급을 받아 사냥 시와 보스전에서 잡몹 패턴에 유리하지만, 사용 중에는 이동이 불가능해서 말뚝딜이 반강제되기도 한다.\n\n[2008년 12월 18일 출시]\n\n무적기 : 없음\n뎀감기 : 윈드 월 (엘리멘트 당 1%), 초월자 시그너스의 축복[공용] (5%)\n바인드 : 없음\n\n공격대원 효과 : DEX 10/20/40/80/100 증가\n\n링크 스킬 : 시그너스 블레스 - 공격력과 마력 25, 상태 이상 내성 15, 모든 속성 내성 15% 증가", // 19 윈드브레이커
  "나이트워커\n\n기존 나이트로드의 사냥 능력과 보조 유틸을 희생한 대신 보스전 활용 능력을 크게 향상한, 과거 빅뱅 전 표도를 보는 듯한 보스 특화 캐릭터다. 나워는 스로우 특유의 동작과 점프를 조합해 통상보다 더 많은 수의 표창을 더욱 빠르게 던질 수 있다. 이를 점프 캔슬(점캔)이라고 한다.\n\n[2008년 12월 18일 출시]\n\n무적기 : 도미니언 (2초), 다크니스 어센션 (사망 방지 후 3초)\n뎀감기 : 초월자 시그너스의 축복[공용] (5%), *다크 사이트 보유\n바인드 : 쉐도우 스티치\n\n공격대원 효과 : LUK 10/20/40/80/100 증가\n\n링크 스킬 : 시그너스 블레스 - 공격력과 마력 25, 상태 이상 내성 15, 모든 속성 내성 15% 증가", // 20 나이트워커
  "스트라이커\n\n연계를 주력으로 하는 직업들 중에서도 초기 버전에 속해서 비교적 단순하다. 그러나 스킬 개개의 경직이 죄다 한 세월 걸린다 싶을 정도로 길다. 이를 경감할 수단은 오직 연계뿐이다.\n\n[2008년 12월 18일 출시]\n\n무적기 : 해신강림 (2.5초)\n뎀감기 : 초월자 시그너스의 축복[공용] (5%)\n바인드 : 없음\n\n공격대원 효과 : STR 10/20/40/80/100 증가\n\n링크 스킬 : 시그너스 블레스 - 공격력과 마력 25, 상태 이상 내성 15, 모든 속성 내성 15% 증가", // 21 스트라이커
  "미하일\n\n가동률 높은 무적이 최고의 강점이자 가장 두드러지는 정체성이다. 정통 탱커라기보다는 피격 자체를 무효화함으로써 내구도를 확보하는, 조금 다른 의미의 '회피탱'이라 할 수 있다.\n\n[2012년 3월 22일 출시]\n\n무적기 : 로얄 가드 (반격 성공 시 4초)\n뎀감기 : 빛의 수호 (20%), 어드밴스드 소울 실드 (로얄가드 성공 시 5%), 로 아이아스 (89%), 초월자 시그너스의 축복[공용] (5%)\n바인드 : 없음\n\n공격대원 효과 : 최대 HP 250/500/1000/2000/2500 증가\n\n링크 스킬 : 빛의 수호 - 180초 간 100% 확률로 스탠스, 재사용 대기 시간 180초", // 22 미하일
  "시티즌\n\n기존 모험가 직업군의 초보자 스킬과는 다소 다른 스킬이 존재한다. 다른 직업군의 초보자, 레전드, 노블레스 등이 배우는 초보자 스킬이 전직 후 버려지는거에 비해서 전직 후에도 활용도가 높은 알짜 기술들이다.\n\n[2010년 7월 22일 출시]", // 23 시티즌
  "블래스터\n\n개발진이 의도한 자연스러운 캔슬을 이용할 시 따라오는 막대한 리턴을 이용해 보스들을 두들겨 패는 전사. 손가락이 꼬인 나머지 캐릭터가 마음대로 움직이지 않는 현실 때문에 손에 무리가 가는 직업이다.\n\n[2015년 12월 22일 출시]\n\n무적기 : 리볼빙 벙커 (10.5초), 하이퍼 매그넘 펀치 (1.5초), 버닝브레이커 (8초)\n뎀감기 : 어드밴스드 차지 마스터리 (차지한 더킹과 스웨이의 시작 부분, 차지한 해머 스매시 사용 중, 릴리즈 파일 벙커-보너스가드, 슈퍼 인듀어런스, 하이퍼 매그넘 펀치, 발칸 펀치 (35%))\n바인드 : 리볼빙 벙커\n\n공격대원 효과 : 적의 방어율을 1/2/3/5/6% 무시\n\n링크 스킬 : 스피릿 오브 프리덤 - 부활 시 1~2초, 마스터 시 8초 동안 피해를 받지 않는다.", // 24 블래스터
  "배틀메이지\n\n흑마법이 결합된 스태프 체술을 구사하는 마법사. 기초 스펙이 탄탄하고 기동성이 뛰어나지만, 근접 공격에 기반한데다 메커니즘까지 쓸데없이 복잡한 스킬 구성이 이 장점을 퇴색시킨다.\n\n[2010년 7월 22일 출시]\n\n무적기 : 어비셜 라이트닝 (2초)\n뎀감기 : 쉘터 (20%, 가드), 에테리얼 폼[공용] (3초)\n바인드 : 없음\n\n공격대원 효과 : INT 10/20/40/80/100 증가\n\n링크 스킬 : 스피릿 오브 프리덤 - 부활 시 1~2초, 마스터 시 8초 동안 피해를 받지 않는다.", // 25 배틀메이지
  "와일드헌터\n\n재규어 탑승 여부에 따라 스킬 용도가 변경되는 직업. 또한, 같은 레지스탕스 소속인 메카닉과 더불어 라이딩을 공격 용도로 사용하는 유이한 직업이기도 하다. 똑같은 스킬도 재규어 라이딩 중에 사용할 때는 다수를 타격하고, 재규어를 소환한 상태에서 사용하면 단일 대상을 공격한다.\n\n[2010년 7월 22일 출시]\n\n무적기 : 재규어 맥시멈 (11초)\n뎀감기 : 없음\n바인드 : 재규어 소울\n\n공격대원 효과 : 공격 시 20% 확률로 대미지 4/8/12/16/20% 증가\n\n링크 스킬 : 스피릿 오브 프리덤 - 부활 시 1~2초, 마스터 시 8초 동안 피해를 받지 않는다.", // 26 와일드헌터
  "메카닉\n\n'메탈 아머'라는 이름의 로봇에 탑승하며, 메탈 아머에 내장된 무기로 공격하거나 각종 로봇들을 조립하고 소환해서 필드에 깔아놓는 식으로 공격하는 게 주된 패턴이다.\n\n[2010년 8월 12일 출시]\n\n무적기 : 메탈아머 전탄발사 (10초)\n뎀감기 : 메카닉 디펜스 시스템 (15% 확률로 피격 무시), 워머신 : 타이탄 (50%)\n바인드 : 없음\n\n공격대원 효과 : 버프 지속 시간 5/10/15/20/25% 증가\n\n링크 스킬 : 스피릿 오브 프리덤 - 부활 시 1~2초, 마스터 시 8초 동안 피해를 받지 않는다.", // 27 메카닉
  "제논\n\n도적과 해적의 하이브리드 직업으로 도적과 해적의 방어구를 동시에 착용할 수 있다. INT를 제외한 STR, DEX, LUK이 모두 주스탯이기에 주스탯이라는 개념이 옅다. 주스탯이 많다는 건 언뜻 보면 장점 같지만 그에 따라서 스탯 공격력을 올려 주는 공식이 다른 직업과 다르기 때문에 키우기 힘들 수 있다. 보이스가 매우 좋다.\n\n[2013년 1월 3일 출시]\n\n무적기 : 멜트다운 익스플로젼 (3.5초), 메가 스매셔 (16초)\n뎀감기 : 없음\n바인드 : 컨파인 인탱글\n\n공격대원 효과 : STR/DEX/LUK 각 5/10/20/40/50 증가\n\n링크 스킬 : 하이브리드 로직 - 모든 스탯 5/10%", // 28 제논
  "데몬슬레이어\n\n전사 직업치고는 필드에서 뽕맛을 제공하는 넓은 광역기술, 평균 120초마다 돌아오는 핵심 버프, 앞의 버프를 몰빵하면서 때리는 근접 극딜, 메이플 최초이면서 아직도 보스전에서 뛰어난 바인드, 상황에 맞춰서 생존과 보조스킬을 순환하는 매커니즘의 조합으로 되어있다.\n\n[2011년 8월 4일 출시]\n\n무적기 : 블러디 레이븐 (1.5초), 메타모포시스 (1.5초), 데몬 베인 (시전 종료 시 3초)\n뎀감기 : 콜 마스테마 - 러블리 테리토리 (25%), 이계 여신의 축복 - 방패의 축복 (70%)\n바인드 : 다크 바인드\n\n공격대원 효과 : 상태이상 내성 1/2/3/4/5 증가\n\n링크 스킬 : 데몬스 퓨리 - 보스 몬스터 공격시 데미지 10/15% 증가", // 29 데몬슬레이어
  "데몬어벤져\n\n체력을 주 스탯으로 사용하며 흡혈을 비롯하여 자체 회복기가 무진장 많은 관계상 데벤져의 대부분의 스킬들은 최대 HP의 % 수치만큼 체력을 소모한다.\n\n[2012년 12월 20일 출시]\n\n무적기 : 없음\n뎀감기 : 데몬 프렌지 (30%), 블러드 피스트(시전 중 30%), 콜 마스테마 - 러블리 테리토리 (27%), 이계 여신의 축복 - 방패의 축복 (75%), 레버넌트 (30초간 불사)\n바인드 : 블러디 임프리즌\n\n공격대원 효과 : 보스 공격시 데미지 1/2/3/5/6% 증가\n\n링크 스킬 : 와일드 레이지 - 데미지 5/10% 증가", // 30 데몬어벤져
  "아란\n\n'콤보 카운트'와 '커맨드' 시스템을 이용하여 스킬을 빠르게 시전하고 적에게 강력한 데미지를 줄 수 있는 것이 특징이다.\n\n[2009년 7월 9일 출시]\n\n무적기 : 부스트 엔드 - 헌터즈 타겟팅 (차지 중 5초), 프리드의 가호[공용] (6중첩시 30초)\n뎀감기 : 없음\n바인드 : 블리자드 템페스트\n\n공격대원 효과 : 타격 성공 시 70% 확률로 순수 HP의 2/4/6/8/10% 회복.(10초마다 1번씩 발동) 연속 발동 시 2배의 효과 발생 (2배 효과는 60초 당 1회 발동)\n\n링크 스킬 : 콤보킬 어드밴티지 - 영구적으로 콤보킬 구슬 경험치 획득량 400/650% 추가 획득", // 31 아란
  "에반\n\n드래곤 마스터라는 이름에 걸맞게 파트너 드래곤인 미르와 함께 싸우는 것이 가장 큰 특징이다. 현재는 에반 스킬과 미르 스킬이 확실히 나뉘어져 있으며 두 스킬을 연계하여 사용할 수 있는 융합 스킬이 존재한다.\n\n[2009년 12월 17일 출시]\n\n무적기 : 드래곤 마스터 (미르 탑승 중 10초), 프리드의 가호[공용] (6중첩시 30초)\n뎀감기 : 에테리얼 폼[공용] (3초)\n바인드 : 없음\n\n공격대원 효과 : 타격 성공 시 70% 확률로 최대 MP의 2/4/6/8/10% 회복, 연속 발동 시 2배의 효과 발생(10초마다 1번, 연속 발동은 60초에 한 번)\n\n링크 스킬 : 룬 퍼시스턴스 - 룬 해방의 지속시간 30/50% 증가", // 32 에반
  "루미너스\n\n접속 직후 혹은 부활 후 최초로 사용하는 스킬이 빛 스킬이라면 이클립스(어둠 스킬 강화 상태)어둠 스킬이라면 선파이어(빛 스킬 강화 상태)상태가 된다. 암흑 상태에 영구 면역이다. 수로 입장 시 게이지가 초기화되는 유일한 직업이다.\n\n[2012년 7월 12일 출시]\n\n무적기 : 아마겟돈 (3.5초), 프리드의 가호[공용] (6중첩시 30초)\n뎀감기 : 안티 매직쉘 (상태이상 방어), 에테리얼 폼[공용] (3초)\n바인드 : 아마겟돈\n\n공격대원 효과 : INT 10/20/40/80/100 증가\n\n링크 스킬 : 퍼미에이트 - 적 공격 시 방어 무시 10/15% 적용", // 33 루미너스
  "메르세데스\n\n연계기와 속사기를 주력으로 사용하는 궁수. 극딜에 특화된 스킬 구조 덕분에 강력한 순간 화력을 자랑하지만, 높은 피로도와 낮은 투자 효율이 발목을 잡는다.\n\n[2011년 7월 21일 출시]\n\n무적기 : 로얄 나이츠 (시전 및 해제시, 2초), 프리드의 가호[공용] (6중첩시 30초)\n뎀감기 : 실피디아 (탑승 중 25%)\n바인드 : 없음\n\n공격대원 효과 : 스킬 쿨타임 2/3/4/5/6% 감소(1초 미만으로 감소 불가)\n\n링크 스킬 : 엘프의 축복 - 경험치 획득량 15% 증가", // 34 메르세데스
  "팬텀\n\n직업 고유의 상징인 '스틸 스킬'을 이용해 모험가의 스킬을 훔쳐 다양한 활용이 가능하다. 스펙이 올라가면 올라갈수록 성능이 극대화되는 대기만성형 직업이라고 할 수 있다.\n\n[2011년 12월 29일 출시]\n\n무적기 : *스틸 스킬 (모험가의 무적기 사용가능), 마크 오브 팬텀 (2초), 조커 (최후의 카드 뽑을 때 3초), 럭 오브 팬텀시프 (사망 방지 후 4초), 프리드의 가호[공용] (6중첩시 30초)\n뎀감기 : 조커 (사용 중 15%, 생명의 나무 8%)\n바인드 : *스틸 스킬 (모험가의 바인드 사용가능)\n\n공격대원 효과 : 메소 획득량 +1/2/3/4/5/% 증가\n\n링크 스킬 : 데들리 인스팅트 - 크리티컬 확률 10%/15% 증가", // 35 팬텀
  "은월\n\n각종 디버프로 무장하고 생존력이 뛰어난 서포터형 지속 딜러. 단순한 공격 메커니즘 덕분에 운용 난이도가 낮고, 스펙 대비 효율 또한 양호하다. 빈약한 기본 스펙만 메꿀 수 있다면 다용도로 써먹을 수 있어 자본을 투자할 수록 성능이 극대화되는 대기만성형 직업.\n\n[2014년 1월 2일 출시]\n\n무적기 : 정령의 화신 (8초), 환령 강신 (사망 방지 후 3초), 프리드의 가호[공용] (6중첩시 30초)\n뎀감기 : 구사 일생 (10% 확률로 생존), 소혼 결계 (상태이상 방어), 파쇄 연권 (사용 중 50%)\n바인드 : 속박술\n\n공격대원 효과 : 크리티컬 데미지 1/2/3/5/6%증가\n\n링크 스킬 : 구사 일생 - 사망에 이르는 공격을 당할 시, 10% 확률로 생존", // 36 은월
  "카이저\n\n카이저의 핵심은 얼마나 모프 게이지를 빨리 쌓고, 변신을 오래 유지하는가에 달려 있다. 비교적 낮은 조작 난이도의 평딜 메커니즘에 특화되어 있으며, 스공, 스탠스, 버프 지속시간 증가 등의 요소를 보충하기만 한다면 올라운더로서 활약할 수 있다.\n\n[2012년 7월 26일 출시]\n\n무적기 : 프로미넌스 (3.5초)\n뎀감기 : 리셔플스위치 : 방어모드 (5%), 판테온[공용] (사망 방지)\n바인드 : 없음\n\n공격대원 효과 : STR 10/20/40/80/100 증가\n\n링크 스킬 : 아이언 윌 - HP 10% 증가", // 37 카이저
  "카인\n\n일반 스킬로 게이지를 모아 자체 자원을 획득하고, 이를 소모해 연계를 사용하는 연계 중점형 궁수. 전체적으로 익숙해지기만 한다면 여러 컨텐츠에서 준수한 성능을 발휘할 수 있다.\n\n[2021년 1월 7일 출시]\n\n무적기 : 드래곤 스케일 (3.4초), 타나토스 디센트 (6초)\n뎀감기 : 판테온[공용] (사망 방지)\n바인드 : 없음\n\n공격대원 효과 : DEX 10/20/40/80/100 증가\n\n링크 스킬 : 프라이어 프리퍼레이션 - 적 8명 처치, 혹은 보스 몬스터에게 5번 공격 적중 시 사전 준비 1번 완료, 사전 준비를 5번 마치면 20초 동안 데미지 17% 증가. 재발동 대기시간 40초", // 38 카인
  "카데나\n\n주무기인 체인과 다양한 보조무기들을 활용해 적에게 디버프를 걸고, 그에 비례해 크리티컬 데미지를 증가시키는 웨펀 마스터 콘셉의 스킬 연쇄형 직업. 써야 할 스킬이 많기 때문에 비숙련자에게는 추천하기 어려운 직업이다.\n\n[2017년 7월 6일 출시]\n\n무적기 : 체인아츠 : 테이크다운 (10초)\n뎀감기 : 판테온[공용] (사망 방지)\n바인드 : 체인아츠 : 테이크다운\n\n공격대원 효과 : LUK 10/20/40/80/100 증가\n\n링크 스킬 : 인텐시브 인썰트 - 캐릭터보다 레벨이 낮은 적 대상으로 데미지 3/6% 증가, 레벨과 상관없이 상태이상에 걸린 적 상대로 데미지 3/6% 추가 증가", // 39 카데나
  "엔젤릭버스터\n\n마법소녀 콘셉트를 내세운 시너지 딜러. 투사체로 대표되는 사냥 능력과 극딜을 앞세운 보스전 능력 덕분에 좋은 평가를 받았었다.\n\n[2012년 8월 9일 출시]\n\n무적기 : 에너지 버스트 (10초)\n뎀감기 : 소울 레조넌스 (사용 중 35%), 트리니티 퓨전 (시전 중 20%), 판테온[공용] (사망 방지)\n바인드 : 없음\n\n공격대원 효과 : DEX 10/20/40/80/100 증가\n\n링크 스킬 : 소울 컨트랙트 - 10초간 총 데미지 30/45% 증가", // 40 엔젤릭버스터
  "아델\n\n에테르 소드라는 기검을 운용하는 올라운더 전사 직업. 메이플에 존재하는 모든 종류의 유틸리티를 소지했으면서도 화력은 최상위권을 점하는, 전형적인 사기 캐릭터로 분류된다.\n\n[2020년 1월 16일 출시]\n\n무적기 : 다이크 (시전 즉시), 인피니트 (1.5초)\n뎀감기 : 다이크 (40%, 시전 즉시 피격시 55%)\n바인드 : 스콜\n\n공격대원 효과 : STR 10/20/40/80/100 상승\n\n링크 스킬 : 노블레스 - 같은 맵에 있는 자신을 포함한 파티원 1명 당 데미지 2% 증가, 최대 8%까지 증가. 보스 몬스터 공격 시 데미지 4% 증가", // 41 아델
  "일리움\n\n크리스탈이라는 별도 오브젝트를 운용하는 마법사. 사냥, 극딜, 유틸리티 등 평딜을 제외한 모든 방면에서 평균치 이상의 성능을 내지만 운용법과 조작감의 문제로 실성능보다 다소 저평가된다.\n\n[2017년 8월 10일 출시]\n\n무적기 : 롱기누스 존 (2.5초), 프라이멀 프로텍션 (10초)\n뎀감기 : 에테리얼 폼[공용] (3초)\n바인드 : 없음\n\n공격대원 효과 : INT 10/20/40/80/100 증가\n\n링크 스킬 : 전투의 흐름 - 일정 거리 이동 시 대미지 1%/2% 증가. 최대 6중첩, 중첩간에는 합적용", // 42 일리움
  "아크\n\n능동적인 스펙터 변신 기능을 지닌 광전사. 우수한 화력과 기동성을 얻는 대가로 정신력의 제한과 낮은 내구도를 가진, 광전사의 느낌을 잘 살린 직업으로 평가받는다.\n\n[2018년 1월 4일 출시]\n\n무적기 : 기어 다니는 공포 (5초), 근원의 기억 (10초)\n뎀감기 : 없음\n바인드 : 황홀한 구속\n\n공격대원 효과 : STR 10/20/40/80/100 증가\n\n링크 스킬 : 무아 - 전투 상태가 5초 지속되면 발동되며 최대 5회 중첩 가능, 지속시간 5초. 발동 시 데미지 1% 증가, 각 중첩당 데미지 2% 증가", // 43 아크
  "라라\n\n극딜은 화력 자체도 전 직업군 중 중상위권에 위치할 정도로 높으며, 딜로스를 최소화하여 안정적인 딜링을 넣을 수 있다. 더블 점프를 사용하는 마법사로 꽤 괜찮은 성능을 가지고 있다.\n\n[2021년 7월 15일 출시]\n\n무적기 : 화중군자[공용] (사망 방지 후 3.5초)\n뎀감기 : 산 에움 (55%)\n바인드 : 넝쿨 타래\n\n공격대원 효과 : INT 10/20/40/80/100 증가\n\n링크 스킬 : 자연의 벗 - 데미지 5% 증가, 일반 몬스터 20명 처치 시 30초 동안 일반 몬스터 공격 시 데미지 11% 증가, 재발동 대기 시간 30초", // 44 라라
  "호영\n\n도술을 이용한 스킬 연계를 주력으로 사용하는 직업. 공격 스킬들의 넓은 범위와 뛰어난 화력, 유용한 유틸리티 등을 이용해 사냥과 보스 양면에서 뛰어난 성능을 보이는 올라운더라 할 수 있다.\n\n[2019년 7월 18일 출시]\n\n무적기 : 선기 : 몽유도원 (20초), 선기 : 강림 괴력난신 (시전 중 재시전시), 화중군자[공용] (사망 방지 후 3.5초)\n뎀감기 : 없음\n바인드 : 선기 : 분신 둔갑 태을선인\n\n공격대원 효과 : LUK 10/20/40/80/100 증가\n\n링크 스킬 : 자신감 - 방어율 무시 5/10% 추가, HP가 100%인 적 공격 시 데미지 9/14% 증가", // 45 호영
  "제로\n\n남/여 캐릭이 따로 있는 게 아니라 알파/베타 두 캐릭터를 동시에 키우게 되며, 태그(캐릭터 교체) 시스템을 이용한다. 개인 유틸리티는 최상위권에 들고, 파티 지원 유틸리티는 비숍에 밀리긴 하지만 몇 없는 바인드 특화 서포터로 입지가 꽤 높은 편이다.\n\n[2013년 7월 18일 출시]\n\n무적기 : 타임 홀딩 (15초), 조인트 어택 (6.5초), 이뮨 배리어 (25% 확률로 생성 시), 타임 리와인드 (사망 방지 후 2초)\n뎀감기 : 타임 디스토션 (30초간 4초마다 상태이상 해제)\n바인드 : 크리티컬 바인드 (베타 공격 시 10% 확률로 4초, 35초간 저항), 리미트 브레이크, 쉐도우 레인 (4초)\n\n공격대원 효과 : 획득 경험치 4%/6%/8%/10/12% 증가\n\n링크 스킬 : 륀느의 축복 - 받는 데미지 3/6/9/12/15% 감소, 공격 시 대상의 방어율 2/4/6/8/10% 무시", // 46 제로
  "키네시스\n\n염동력을 사용하는 마법사. 광부용 직업으로 격상될 정도의 압도적인 사냥 능력을 과시한다. 이동 범위가 워낙 좁아서, 실전 기동성은 타 직업에 비해 뒤떨어진다.\n\n[2015년 7월 23일 출시]\n\n무적기 : 에버싸이킥 (7초)\n뎀감기 : 에테리얼 폼[공용] (3초), 이계 여신의 축복 - 방패의 축복 (75%)\n바인드 : 사이코 메트리\n\n공격대원 효과 : INT 10/20/40/80/100 증가\n\n링크 스킬 : 판단 - 크리티컬 데미지 2%/4% 증가", // 47 키네시스
  "핑크빈\n\n이벤트 한정 캐릭터라 그런지 기본 공격력도 그렇고, 동 레벨대의 어느 직업군도 따라올 수 없는 매우 강한 공격력을 보여준다. 이동 스킬은 꽤 좋은 성능을 보여주고, 사냥 스킬로 사용할 경우 맵을 싹쓸이할 수 있다.\n\n[2015년 5월 14일 최초 출시]\n\n보상 : 핑아일체 - 보스 공격 시 데미지 증가 + 10%, 공격력/마력 +5, 올스탯 +10", // 48 핑크빈
  "예티\n\n이벤트 직업 특성 상 핑크빈처럼 기간 한정 캐릭터이다. 또한 이벤트 기간에만 열리는 예티X핑크빈 월드에서만 캐릭터를 생성할 수 있으며 예티X핑크빈 스탭업 이벤트로 첫 출시되었다.\n\n[2021년 3월 25일 최초 출시]\n\n보상 : 예아일체 - 보스 공격 시 데미지 증가 + 10%, 공격력/마력 +5, 올스탯 +10", // 49 예티
  "\n\n" // 50
];

var adminNick = "리부트1/255/보마";
var nickname = "";
var sunday = "";
var jobmention = "";