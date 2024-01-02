// if(msg.startsWith("!캐릭터") || msg.startsWith("!정보")){      
    //   nickname = msg.split(" ")[1];
    //   if(nickname == undefined){
    //     replier.reply("캐릭터 이름을 입력해주세요.\n\n!캐릭터 (캐릭터명) : 메이플 API 기준 캐릭터 관련 정보를 보여줍니다.");
    //   }
    //   else{
        // if(mapleupdate(nickname) == '갱신중입니다. 1~10초 내에 반영됩니다.'){
        //   replier.reply("maplegg에서 최신 정보로 갱신하는 중입니다.");
        //   java.lang.Thread.sleep(7000);
        // }
        // var maplegg = "https://maple.gg/u/" + nickname;
        // var dataC1 = org.jsoup.Jsoup.connect(maplegg).get();
        // dataC1 = dataC1.toString();
        // var dataarr = ["-", "-", "-", "-", "-", "-", "-"];
        // var informrep = guitarM.getInform(dataarr, dataC1);
        // Kakao.sendLink(room,
        //   {
        //     "link_ver" : "4.0",
        //     "template_id" : 59430,
        //     "template_args" : {
        //       "profile" : dataarr[0] + " | " + dataarr[1],
        //       "desc" : dataarr[2] + "\n" + dataarr[3] + "\n" + dataarr[4],
        //       "server" : dataarr[5],
        //       "image" : dataarr[6]
        //     }
        //   },
        //   "custom", true);
        // if(informrep != "그런 캐릭터는 없습니다."){
        //   informrep2 = dataarr[3] + "\n" + dataarr[4];
        //   shortrep = shortenURL(dataarr[6]);
        //   java.lang.Thread.sleep(1000);
        //   informrep2 += "\n캐릭터 이미지 : " + shortrep;
        //   }
        // replier.reply(informrep2);
        // java.lang.Thread.sleep(2000);
        // replier.reply(informrep);
    //   }
    // }


    /*!~
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
    */
    /*if(msg == "!코디시뮬"){
      replier.reply("https://maple.gazua.in/coordi\n\nhttps://maple-r.github.io/\n\nhttp://maples.im/");
    }*/

    
    // if(msg.startsWith("!경스토리") || msg.startsWith("!겸스토리")){
    //     var nickname = msg.split(" ")[1];
    //     if(nickname == undefined){
    //       replier.reply("캐릭터 이름을 입력해주세요.\n\n!경스토리/!겸스토리 (캐릭터이름) : 캐릭터의 경험치 히스토리를 보여줍니다.");
    //     }
    //     else{
    //       maplegg = "https://maple.gg/u/" + nickname;
    //       dataC1 = org.jsoup.Jsoup.connect(maplegg).get();
    //       dataC1 = dataC1.toString();
  
    //       var exprep = guitarM.getEXP(nickname, dataC1);
    //       replier.reply(exprep);
    //     }
    // }