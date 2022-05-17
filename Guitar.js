const gt = {};
const cpath = 'sdcard/kakao/Bots/보마봇/Cubetxt/';
gt.getAchieve = function (dataA1){
  rep = "";
  dataA3 = dataA1.split("bold\">")[1];
  dataA4 = dataA3.split("</div>")[0].trim();
  dataA5 = dataA3.split("업적점수 ")[1].split("</span>")[0];

  rep = (dataA4 + ", " + dataA5);
  return rep;
};
gt.getCodi = function (codi){
    rep = "";
    var dataMoja = codi.split("모자</span>")[1].split(">")[1].split("</span")[0];
    var dataHair = codi.split("헤어</span>")[1].split(">")[1].split("</span")[0];
    var dataFace = codi.split("성형</span>")[1].split(">")[1].split("</span")[0];
    var dataPants = codi.split("하의</span>")[1].split(">")[1].split("</span")[0];
    var dataShoe = codi.split("신발</span>")[1].split(">")[1].split("</span")[0];
    var dataWeapon = codi.split("무기</span>")[1].split(">")[1].split("</span")[0];

    rep = "모자: " + dataMoja + "\n헤어: " + dataHair + "\n성형: " + dataFace + "\n상의: " + dataTshirt + "\n하의: " + dataPants + "\n신발: " + dataShoe + "\n무기: " + dataWeapon;
    return rep;
};
gt.getCoin = function (msg){
  var datacoin = org.jsoup.Jsoup.connect("https://api.upbit.com/v1/candles/days").data("market", "KRW-BTC").data("count", 7).ignoreHttpErrors(true).ignoreContentType(true).get().text();
  //var datacoin = org.jsoup.Jsoup.connect("https://api.upbit.com/v1/market/all").ignoreHttpErrors(true).ignoreContentType(true).get().text();
  //비트코인 KRW-BTC / 이더리움 KRW-ETH / 리플 BTC-XRP / 도지 BTC-DOGE / 이더리움클래식 BTC-ETC
  return datacoin;
};
gt.getConvenience = function (msg){
  rep = "";
  var conrand = getRandomInt(0, 100);

  if(conrand < 50){
    var condata = org.jsoup.Jsoup.connect("http://cu.bgfretail.com/product/productAjax.do").get().toString();
    var prodlist = [];
    var pricelist = [];
    var contemp = "";
   for(i = 1; i < condata.split("view(").length/2; ++i){
      contemp = condata.split("view(")[i*2]
      .split("<p>")[1]
      .split("</p>")[0];
      prodlist.push(contemp);
      contemp = condata.split("<strong>")[i].split("</strong>")[0];
      pricelist.push(contemp);
    }
    conrand = getRandomInt(0, prodlist.length);
    rep += "보마봇의 추천 메뉴(CU)\n\n" + prodlist[conrand] + ", " + pricelist[conrand] + "원";
  }
  else if(conrand >= 50){
    condata = FileStream.read(path + "Convenience.txt");
    prodlist = [];
    pricelist = [];
    contemp = "";
    for(i = 1; i < condata.split("(").length; ++i){
      contemp = condata.split("(")[i];
      prodlist.push(contemp.split("$")[0]);
      pricelist.push(contemp.split("$")[1]);
    }
    conrand = getRandomInt(0, prodlist.length);
    rep += "보마봇의 추천 메뉴(7-ELEVEN)\n\n" + prodlist[conrand] + ", " + pricelist[conrand] + "원";
  }

  return rep;
};
gt.getCube = function (msg){
  rep = "";
  const cubeM = require('Cube');
  var cubename = msg.split(" ")[1];
  if(cubename == undefined){
    rep = ("큐브 이름을 입력해주세요.\n\n!큐브 (큐브이름) (잠재등급) (장비분류) (1,2,3)/(잠재옵션) (수치) : 큐브에 대한 정보를 보여줍니다.\n(큐브이름)만 입력 시 해당큐브의 등급 상승 확률표를 보여줍니다.\n(잠재등급) 까지만 입력 시 해당 큐브의 해당 등급에서의 옵션별 등급 설정 확률을 보여줍니다.\n(장비분류) 까지만 입력 시 해당 큐브의 해당 등급의 세부 확률표를 보여줍니다. 1,2,3입력시 각 번째에 해당하는 옵션의 확률만 보여줍니다.\n(잠재옵션)과 (수치)를 입력시 해당 잠재옵션이 해당 수치이상 나올 확률을 보여줍니다. 이 기능은 두가지 잠재 옵션까지 기입할 수 있습니다. (예시 : !큐브 블랙 레전 무기 보공 60 공 9)\n잠재 옵션 목록 : STR,DEX,INT,LUK,보공,공,방무,크뎀,올스탯,HP,메획,아획");
  }
  else{
    var cn = cubeM.getCubename(cubename);
    if(cn == "없음"){ rep = (cubename + " >> 그런 이름의 큐브는 없습니다.");}
    else{
      var cubesecond = msg.split(" ")[2];
      if(cubesecond == undefined){
        rep = (cubeM.getCubeupgrade(cn));
      }
      else{
        var cubeclass = cubeM.getCubeclass(cubesecond);
        if(cubeclass == -1){ rep = (cubesecond + " >> 그런 이름의 등급은 없습니다.");}
        else{
          var cubethird = msg.split(" ")[3];
          if(cubethird == undefined){
            rep = (cubeM.getCubeclasssetrate(cn, cubeclass));
          }
          else{
            var cubeitem = cubeM.getItemname(cubethird);
            if(cubeitem == "없음"){rep = (cubethird + " >> 그런 이름의 장비 분류는 없습니다.");}
            else{
              var cfile = cn + cubeitem + ".txt";
              var dataCube = FileStream.read(cpath + cfile);
              
              dataCube = dataCube.split(cubeitem)[cubeclass + 1].split("</end>")[0].replace(/&lt;/g, "<").replace(/&gt;/g, ">");

              var dataCube1 = dataCube.split("첫 번째 옵션")[1].split("</tbody>")[0];
              var dataCube2 = dataCube.split("두 번째 옵션")[1].split("</tbody>")[0];
              var dataCube3 = dataCube.split("세 번째 옵션")[1].split("</tbody>")[0];

              var poten1 = [], poten2 = [], poten3 = [];
              var prate1 = [], prate2 = [], prate3 = [];
              for(i = 1; i < dataCube1.split("<td>").length; ++i){
                var temppoten = dataCube1.split("<td>")[i++].split("</td>")[0];
                if(temppoten != ""){poten1.push(temppoten);}
                temppoten = dataCube1.split("<td>")[i].split("</td>")[0];
                if(temppoten != ""){prate1.push(temppoten);}                
              }
              for(i = 1; i < dataCube2.split("<td>").length; ++i){
                var temppoten = dataCube2.split("<td>")[i++].split("</td>")[0];
                if(temppoten != ""){poten2.push(temppoten);}
                temppoten = dataCube2.split("<td>")[i].split("</td>")[0];
                if(temppoten != ""){prate2.push(temppoten);}                
              }
              for(i = 1; i < dataCube3.split("<td>").length; ++i){
                var temppoten = dataCube3.split("<td>")[i++].split("</td>")[0];
                if(temppoten != ""){poten3.push(temppoten);}
                temppoten = dataCube3.split("<td>")[i].split("</td>")[0];
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
                rep = (cuberep);
              }
              else if(cubefourth == "1"){
                cuberep += "첫 번째 옵션\n\n";
                cuberep += cubeM.getCuberatetable(poten1, prate1);
                cuberep = cuberep.slice(0, cuberep.length-1);
                rep = (cuberep);
              }
              else if(cubefourth == "2"){
                cuberep += "두 번째 옵션\n\n";
                cuberep += cubeM.getCuberatetable(poten2, prate2);
                cuberep = cuberep.slice(0, cuberep.length-1);
                rep = (cuberep);
              }
              else if(cubefourth == "3"){
                cuberep += "세 번째 옵션\n\n";
                cuberep += cubeM.getCuberatetable(poten3, prate3);
                cuberep = cuberep.slice(0, cuberep.length-1);
                rep = (cuberep);
              }
              else{
                var cabilind = cubeM.getCubeability(cubefourth);
                if(cabilind == -1){
                  rep = (cubefourth + " >> 해당 이름을 가진 능력치가 없거나 지원하지 않는 능력치입니다.\n\n능력치 목록 : STR,DEX,INT,LUK,보공,공,방무,크뎀,올스탯,HP,메획,아획,데미지,쿨감");
                }
                else{
                  var cubefifth = parseInt(msg.split(" ")[5]);
                  if(isNaN(cubefifth)){rep = ("수치가 누락되었거나 숫자가 아닙니다.");}
                  else if(cubefifth < 0){rep = (cubefifth + " >> 수치는 음수가 될 수 없습니다.");}
                  else{
                    var cubesixth = msg.split(" ")[6];
                    if(cubesixth == undefined){
                      var cubeoneabil = "";
                      cubeoneabil += cuberep + cubeM.getCuberateOneabil(cn, cabilind, cubefifth, poten1, poten2, poten3, prate1, prate2, prate3);
                      rep = (cubeoneabil);
                    }
                    else{
                      var cabilind2 = cubeM.getCubeability(cubesixth);
                      if(cabilind2 == -1){
                        rep = (cubesixth + " >> 해당 이름을 가진 능력치가 없거나 지원하지 않는 능력치입니다.\n\n능력치 목록 : STR,DEX,INT,LUK,보공,공,방무,크뎀,올스탯,HP,메획,아획,데미지,쿨감");
                      }
                      else{
                        var cubeseventh = parseInt(msg.split(" ")[7]);
                        if(isNaN(cubeseventh)){rep = ("수치가 누락되었거나 숫자가 아닙니다.");}
                        else if(cubeseventh < 0){rep = (cubeseventh + " >> 수치는 음수가 될 수 없습니다.");}
                        else{
                          var cubeeighth = msg.split(" ")[8];
                          if(cubeeighth == undefined){
                            var cubetwoabil = "";
                            cubetwoabil += cuberep + cubeM.getCuberateTwoabil(cn, cabilind, cubefifth, cabilind2, cubeseventh, poten1, poten2, poten3, prate1, prate2, prate3);
                            //cubetwoabil += cuberep + " cn: " + (cn + "\n cabilind :  " + cabilind + " \n" + cubefifth+ " \n" + cabilind2+ " \n" + cubeseventh);
                            rep = (cubetwoabil);
                          }
                          else{
                            var cabilind3 = cubeM.getCubeability(cubeeighth);
                            if(cabilind3 == -1){
                              rep = (cubeeighth + " >> 해당 이름을 가진 능력치가 없거나 지원하지 않는 능력치입니다.\n\n능력치 목록 : STR,DEX,INT,LUK,보공,공,방무,크뎀,올스탯,HP,메획,아획,데미지,쿨감");
                            }
                            else{
                              var cubenineth = parseInt(msg.split(" ")[9]);
                              if(isNaN(cubenineth)){rep = ("수치가 누락되었거나 숫자가 아닙니다.");}
                              else if(cubenineth < 0){rep = (cubenineth + " >> 수치는 음수가 될 수 없습니다.");}
                              else{
                                var cubethreeabil = "";
                                cubethreeabil += cuberep + cubeM.getCuberateThreeabil(cn, cabilind, cubefifth, cabilind2, cubeseventh, cabilind3, cubenineth, poten1, poten2, poten3, prate1, prate2, prate3);
                                rep = (cubethreeabil);
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  return rep;
};
gt.getDday = function (msg){
  rep = "";

  var mDate = msg.split(" ")[1];
  if(mDate == undefined){
    rep = "날짜를 입력하지 않으셨습니다.\n!디데이 (날짜) : 입력한 날짜까지의 D-Day를 보여줍니다. 날짜는 yyyymmdd 형식으로 입력해주세요 (예 : 20220205)";
  }
  else if(mDate.length != 8){
    rep = "날짜를 yyyymmdd 형식으로 입력하지 않으셨습니다. (길이가 8글자가 아닙니다.)";
  }
  else{
    var mYear = mDate.slice(0,4);
    var mMonth = mDate.slice(4,6);
    var mDay = mDate.slice(6,8);    
    //rep = mYear + " " + mMonth + " " + mDay;
    if(isNaN(mYear) || isNaN(mMonth) || isNaN(mDay)){
      rep = "입력한 날짜가 숫자가 아닙니다. yyyymmdd 형식으로 입력해주세요.";
    }
    else{
      var iYear = parseInt(mYear);
      var iMonth = parseInt(mMonth);
      var iDay = parseInt(mDay);
      var todaydate = new Date();
      if(iMonth < 1 || iMonth > 12 || iDay < 1 || iDay > 31){
        rep = "성립될 수 없는 날짜를 입력하셨습니다. (예 : 13월 32일)";
      }
      else if((iMonth == 2 && iDay > 29) || (iMonth == 4 && iDay > 30) || (iMonth == 6 && iDay > 30) || (iMonth == 9 && iDay > 30) || (iMonth == 11 && iDay > 30)){
        rep = "성립될 수 없는 날짜를 입력하셨습니다. (예 : 2월 30일)";
      }
      else{
        var dday = new Date(iYear, iMonth-1, iDay);
        var dgap = dday.getTime() - todaydate.getTime();
        if(dgap < 0){
          var dres = Math.ceil(-dgap / (1000 * 60 * 60 * 24));
          rep = iYear + "년 " + iMonth + "월 " + iDay + "일까지 D+" + dres + " 입니다.";
        }
        else{
          var dres = Math.ceil(dgap / (1000 * 60 * 60 * 24));
          rep = iYear + "년 " + iMonth + "월 " + iDay + "일까지 D-" + dres + " 입니다.";
        }
      }
    }
  }

  return rep;
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
gt.getEternal = function (msg, addtitle, addn){
  rep = "";
  var addLevel = msg.split(" ")[1];
  if(addLevel == undefined){
    rep = ("레벨을 입력해주세요.\n\n!강환/!강환불/!영환/!영환불 (렙제) (횟수) : \n 150, 160, 200제 방어구, 장신구의 추가옵션을 횟수만큼 돌립니다. \n횟수는 5이하 숫자만 가능하며 생략시 1회만 돌립니다.");
  }
  else if(addLevel != 150 && addLevel != 160 && addLevel != 200){
    rep = ("레벨은 150, 160, 200만 가능합니다.");
  }
  else{
    const addM = require('Addop');
    var addResult = "";
    if(addLevel == 150){ addResult += "150제 아이템 "; }
    else if(addLevel == 160){ addResult += "160제 아이템 "; }
    else if(addLevel == 200){ addResult += "200제 아이템 "; }
    addtitle[0] = addResult;
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

      rep = (addResult);
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
      rep = "-";
    }
    else{
      rep = ("횟수가 5를 초과하거나 올바른 숫자가 아닙니다.");
    }
  }
  return rep;
};
gt.getExtreme = function (sender, msg){
  rep = sender + " 님의 익성비 시뮬레이터 결과\n\n";
  var extlvl = msg.split(" ")[1];
  if(extlvl == undefined){ rep = "익성비를 사용할 레벨이 입력되지 않았습니다.\n\n!익성비 (레벨) : 해당 레벨에서 익스트림 성장의 비약 사용 결과를 시뮬레이션 합니다.  (141~199 사이의 숫자를 입력해주세요.)"; }
  else if(isNaN(extlvl)){ rep = extlvl + " >> 입력하신 레벨이 숫자가 아닙니다."; }
  else if(extlvl < 141 || extlvl > 199){ rep = extlvl + " >> 레벨이 범위를 벗어났습니다. 141~199 사이의 숫자를 입력해주세요."; }
  else if(extlvl % 1 != 0){ rep = extlvl + " >> 레벨을 정수로 입력해주세요. 141~199 사이의 숫자를 입력해주세요."}
  else{
    var extind = extlvl - 141;
    var extarr = [];
    for(i = 0; i < 10; ++i){ extarr.push(extR[i][extind]); }
    var extrand = getRandomInt(0, 100);
    var extres = -1;
    
    if(extrand < extarr[0]){extres = 1; }
    else{
      for(j = 1; j < 10; ++j){
        if(extrand < cumulate(extarr, j)){extres = j+1; break; }
      }
    }
    rep += "익스트림 성장의 비약을 마시고 " + (parseInt(extlvl) + extres) + "레벨로 성장했습니다. (" + extres + "레벨 상승)\n\n";
    rep += extres + "레벨 미만 상승 확률 : " + cumulate(extarr, extres-2) + "%\n";
    rep += extres + "레벨 상승 확률 : " + extarr[extres-1] + "%\n";
    rep += extres + "레벨 초과 상승 확률 : " + (100 - cumulate(extarr, extres-1)) + "%";
  }

  return rep;
};
gt.getEXP = function (nickname, dataC1){
  rep = "";
  if(dataC1.indexOf("검색결과 없음") != -1){
    rep = ("그런 캐릭터는 없습니다.");
  }
  else{ 
    try{
    var dataHis1 = dataC1.split("expHistoryLabels = [{\"")[1];
    var dataHis2 = dataHis1.split("c3.generate")[0];

    var dataHisLevel = [];
    var hiscnt = dataHis2.split("level\":\"").length-1;
    for(i = 0; i < hiscnt; ++i){
      var tempHisLevel = dataHis2.split("level\":\"")[i+1];
      dataHisLevel[i] = tempHisLevel.split("\",")[0];
    }

    var dataHisExp = [];
    for(i = 0; i < hiscnt; ++i){
      var tempHisExp = dataHis2.split("exp\":")[i+1];
      dataHisExp[i] = tempHisExp.split("}")[0];
    }

    var dataHis3 = dataHis1.split("columns: [[")[1].split("exp")[0];
    var dataHisYear = [];
    for(i = 0; i < hiscnt; ++i){
      dataHisYear[i] = "22";
    }
    var dataHisMonth = [];
    for(i = 0; i < hiscnt; ++i){
      var tempHisMonth = dataHis3.split(",\"")[i+1];
      tempHisMonth = tempHisMonth.split("\\uc6d4")[0];
      if(tempHisMonth.length > 2){
        dataHisYear[i] = tempHisMonth.split("\\ub144")[0];
        tempHisMonth = tempHisMonth.split(" ")[1];
      }
      dataHisMonth[i] = tempHisMonth;
    }

    var dataHisDay = [];
    for(i = 0; i < hiscnt; ++i){
      var tempHisDay = dataHis3.split("uc6d4 ")[i+1];
      dataHisDay[i] = tempHisDay.split("\\")[0];
    }
    var history = "";
    history += "[";  history += nickname; history += "]\n";
    for(i = 0; i < hiscnt; ++i){
      history += dataHisYear[i]; history += "년 ";
      history += dataHisMonth[i]; history += "월 ";
      history += dataHisDay[i]; history += "일: Lv.";
      history += dataHisLevel[i]; history += " (";
      history += dataHisExp[i]; history += "%)\n";
    }
    history = history.slice(0, history.length - 1);
    rep = (history);
    } catch(error) {
      rep = ("캐릭터의 경험치 히스토리가 충분하지 않거나 읽는 도중 오류가 발생하였습니다.");
    }
  }
  return rep;
};
gt.getexpInform = function (msg){
  rep = "";
  const JariM = require('Jari');
  var startlv = msg.split(" ")[1];
  var endlv = msg.split(" ")[2];
  if(startlv == undefined){
    rep = ("(레벨)이 없습니다.\n\n!경험치 (시작레벨) (끝레벨) : 시작레벨부터 끝레벨까지 필요한 경험치량, 끝레벨 생략시 그 레벨 경험치통을 보여줍니다.");
  }
  else if(endlv == undefined){
    if(isNaN(startlv) || startlv < 1 || startlv > 300){
      rep = ("레벨이 범위를 벗어났거나 숫자가 아닙니다.");
    }
    else{
      rep = ("Lv." + startlv + " 경험치통: " + JariM.Jari(exps[startlv - 1]));
    }
  }
  else if(startlv > 0 && startlv < 301 && endlv > 0 && endlv < 301){
    if(startlv >= endlv){
      rep = ("오류 : 뒷레벨이 더 커야합니다.");
    }
    else{
      var remain = accexps[endlv - 1] - accexps[startlv - 1];
      rep = ("Lv." + startlv + " → Lv." + endlv + " 경험치통: " + JariM.Jari(remain));
    }
  }
  else{
    rep = ("레벨이 범위를 벗어났거나 숫자가 아닙니다.");
  }
  return rep;
};
gt.getFinal = function (msg){
  rep = "";
  var msgchk = msg.split(" ")[1];
  if(msgchk == undefined){
    rep = "계산하고 싶은 최종 데미지를 입력해주세요.\n\n!최종데미지 (최종데미지1) (최종데미지2) (...) : 여러 최종데미지가 적용된 값을 계산해줍니다.";
  }
  else{
      var finlen = msg.split(" ").length;
      chkN = false;
      for(var i = 1; i < finlen; ++i){
        if(isNaN(msg.split(" ")[i])){
          chkN = true;
        }
      }
      if(chkN){
        rep = "숫자를 입력해주세요.";
      }
      else{
        if(finlen == 2){
          var finfirst = parseFloat(msg.split(" ")[1]);
          finfirst = finfirst.toFixed(2);
          rep = "예상 스탯창 표기 최종데미지 : " + finfirst + "%";
        }
        else{
          var finlast = 100.0;
          for(i = 1; i < finlen; ++i){
            var fintemp = parseFloat(msg.split(" ")[i]) * 0.01 + 1;
            finlast *= fintemp;
          }
          finlast -= 100;
          finlast = finlast.toFixed(2);
          rep = "예상 스탯창 표기 최종데미지 : " + finlast + "%";
        }
      }
  }
  return rep;
};
gt.getGuild = function (msg){
  rep = "";

  rep = msg.split("underline\">")[1].split("</a>")[0];

  return rep;
};
gt.getGuildinfo = function (msg){
  rep = "";

  rep = msg.split("<a href=\"")[1].split("\"")[0];

  return rep;
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
gt.getInform = function (dataarr, dataC1){
  rep = "";
  if(dataC1.indexOf("검색결과 없음") != -1){
    rep = ("그런 캐릭터는 없습니다.");
  }
  else{ 
    var iIndex = 0;
    dataarr[6] = dataC1.split("<meta property=\"og:description\" content=\"")[0];
    var dataC2 = dataC1.split("<meta property=\"og:description\" content=\"")[1];
    var dataC3 = dataC2.split("\">")[0];
    var dataC4_nameandServer = dataC3.split(",")[iIndex]; iIndex++;

    var dataC4_mureung = dataC3.split(",")[iIndex];  if(dataC4_mureung == undefined){ dataC4_mureung = "-";}
    if(dataC4_mureung.slice(0,2) == "최고"){dataC4_mureung = dataC4_mureung.slice(2,dataC4_mureung.length); iIndex++;}
    else{dataC4_mureung = "무릉:기록없음";}

    var dataC4_seed = dataC3.split(",")[iIndex];   if(dataC4_seed == undefined){dataC4_seed = "-";}
    if(dataC4_seed.slice(0,2) == "최고"){dataC4_seed = dataC4_seed.slice(2, dataC4_seed.length); iIndex++}
    else{dataC4_seed = "시드:기록없음";}

    var dataC4_union = dataC3.split(",")[iIndex];
    if(dataC4_union == undefined){dataC4_union = "유니온:기록없음";}
    else if(dataC4_union.slice(0,3) != "유니온"){ dataC4_union = "-";}
    else{
      iIndex++;
      dataU1 = dataC1.split("유니온 <i")[1];
      dataU2 = dataU1.split("업적")[0];
      var unionrep = this.getUnion(dataU1, dataU2);
      dataC4_union = dataC4_union + ", " + unionrep.split(", ")[1].split("\n")[0];
    }
    var dataC4_achievement = dataC3.split(",")[iIndex];  if(dataC4_achievement == undefined) {dataC4_achievement = "업적:기록없음";}
    else{      
      dataA1 = dataC1.split("업적 <i")[1].split("</section>")[0];
      var achieverep = guitarM.getAchieve(dataA1);
      dataC4_achievement = dataC4_achievement + ", " + achieverep.split(", ")[1];
    }
    dataarr[2] = dataC1.split("<li class=\"user-summary-item\">")[1].split("</li>")[0];
    dataarr[1] = dataC1.split("<li class=\"user-summary-item\">")[2].split("</li>")[0];

    dataarr[0] = dataC4_nameandServer.split("@")[0];
    dataarr[5] = dataC2.split("<div class=\"col-lg-8\">")[1];
    dataarr[5] = dataarr[5].split("\" alt=")[0].split("src=\"")[1];
    dataarr[6] = dataarr[6].split("<meta property=\"og:image\" content=\"")[1].split("\">")[0];

    dataGuild = dataC1.split("col-lg-2")[1];
    if(dataGuild.indexOf("(없음)") != -1){ dataGuild = "길드 : 없음"; }
    else{
      dataGuild = dataGuild.split("underline\">")[1].split("</a>")[0];
      dataGuild = "길드 : " + dataGuild;
    }
    dataRank = dataC1.split("col-lg-2")[2];
    dataRank = dataRank.split("<span>")[1].split("</span>")[0];
    dataRank = "종합랭킹 : " + dataRank;

    dataarr[3] = dataGuild;
    dataarr[4] = dataRank;
    rep = (dataC4_nameandServer + "\n" + dataarr[2] + " " + dataarr[1] + "\n" + dataC4_mureung + "\n" + dataC4_seed + "\n" + dataC4_union + "\n" + dataC4_achievement);
  }
  return rep;
};
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
gt.getLevel = function (nickname, dataC1){
  rep = "";
  if(dataC1.indexOf("검색결과 없음") != -1){
    rep = ("그런 캐릭터는 없습니다.");
  }
  else{ 
    try{
      var dataLvHis = dataC1.split("columns: [[\"x\"")[2];
      dataLvHis = dataLvHis.split("]]")[0];
      
      hiscnt = dataLvHis.split("\\uc6d4").length - 1;
      var dataLvHisYear = [];
      for(i = 0; i < hiscnt; ++i){
        dataLvHisYear[i] = "22";
      }
      var dataLvHisMonth = [];
      for(i = 0; i < hiscnt; ++i){
        var tempLvMonth = dataLvHis.split(",\"")[i+1];
        tempLvMonth = tempLvMonth.split("\\uc6d4")[0];
        if(tempLvMonth.length > 2){
          dataLvHisYear[i] = tempLvMonth.split("\\ub144")[0];
          tempLvMonth = tempLvMonth.split(" ")[1];
        }
        dataLvHisMonth[i] = tempLvMonth;
      }

      var dataLvHisDay = [];
      for(i = 0; i < hiscnt; ++i){
        var tempLvDay = dataLvHis.split("uc6d4 ")[i+1];
        dataLvHisDay[i] = tempLvDay.split("\\")[0];
      }

      var dataLvHisLv = dataLvHis.split("level")[1];
      var dataLvHisLevel = [];
      for(i = 0; i < hiscnt; ++i){
        var tempLv = dataLvHisLv.split(",\"")[i+1];
        dataLvHisLevel[i] = tempLv.split("\"")[0];
      }

      var hisLv = "";
      hisLv += "[";  hisLv += nickname; hisLv += "]\n";
      for(i = 0; i < hiscnt; ++i){
        hisLv += dataLvHisYear[i]; hisLv += "년 ";
        hisLv += dataLvHisMonth[i]; hisLv += "월 ";
        hisLv += dataLvHisDay[i]; hisLv += "일: Lv.";
        hisLv += dataLvHisLevel[i]; hisLv += "\n";
      }
      hisLv = hisLv.slice(0, hisLv.length - 1);
      rep = (hisLv);
    } catch(error) {
      rep = ("캐릭터의 레벨 히스토리가 충분하지 않거나 읽는 도중 오류가 발생하였습니다.");
    }
  }
  return rep;
};
gt.getLol = function (lol, nick){    
    rep = "";
    var lolrank = "";
    var lold = lol.split("<meta name=\"description\" content=\"")[1].split("<meta")[0];
    if(lold.indexOf("Real-time LoL") != -1){
        rep = "그런 닉네임의 롤 아이디는 존재하지 않습니다.";
      }
    else{
        var dataL = lold.split("/ ")[1].split(" /")[0];
      
        if(dataL.indexOf("Lv.") != -1){
          lolrank = "언랭";
        }
        else{
          //var dataL2 = dataL.split("TierRank\">")[1].split("</div>")[0];
          //lolrank = dataL2.replace(/ /g, "").slice(0, lolrank.length - 1);
          //lolrank = getTier(lolrank);
        }

        rep = "그래서 " + nick + " 님 티어는\n\n" + dataL;
    }
    return rep;
};
gt.getLucky = function (msg){
  rep = "";
  var mrate = msg.split(" ")[1];
  if(mrate == undefined){
    rep = "확률을 입력해주세요.\n\n!운빨 (확률) (시행횟수) [성공횟수] : 해당 확률(0<x<1)을 입력한 시행횟수(1<=y<=150)만큼 시도했을 때 입력한 성공횟수(1<=z<=y)만큼 성공한 것의 누적 이항 확률(상위 등급)을 구합니다. 성공횟수를 생략할 경우 1회 성공한 것으로 간주합니다. (예시 [레전 등업확률 1%의 블랙큐브 100개로 3개의 아이템 레전 등업에 성공하였을 경우] : !운빨 0.01 100 3)";
  }
  else if(isNaN(mrate)){
    rep = "숫자가 아닌 확률을 입력하셨습니다.";
  }
  else{
    var mtry = msg.split(" ")[2];
    if(mtry == undefined){
      rep = "시행횟수를 입력해주세요.\n\n!운빨 (확률) (시행횟수) [성공횟수] : 해당 확률(0<x<=1)을 입력한 시행횟수(1<=y<=150)만큼 시도했을 때 입력한 성공횟수(1<=z<=y)만큼 성공한 것의 누적 이항 확률(상위 등급)을 구합니다. 성공횟수를 생략할 경우 1회 성공한 것으로 간주합니다. (예시 [레전 등업확률 1%의 블랙큐브 100개로 3개의 아이템 레전 등업에 성공하였을 경우] : !운빨 0.01 100 3)";
    }
    else if(isNaN(mtry) || mtry % 1 != 0){
      rep = "숫자(정수)가 아닌 시행횟수를 입력하셨습니다.";
    }
    else{
      var msuc = msg.split(" ")[3];
      var lsuc = 0;
      if(msuc == undefined){
        lsuc = 1;
      }
      else if(isNaN(msuc) || msuc % 1 != 0){
        rep = "숫자(정수)가 아닌 성공횟수를 입력하셨습니다.";
        lsuc = -1;
      }

      if(lsuc != -1){
        var lrate = parseFloat(mrate);
        var ltry = parseInt(mtry);
        if(lsuc != 1){lsuc = parseInt(msuc);}
        if(lrate <= 0 || lrate > 1){
          rep = "확률은 0 < x < 1의 소수로 입력하셔야 합니다.";
        }
        else if(ltry < 1 || ltry > 150){
          rep = "시행횟수는 1 이상 150 이하의 정수로 입력하셔야 합니다.";
        }
        else if(lsuc < 1 || lsuc > ltry){
          rep = "성공횟수는 1 이상 성공횟수 이하의 정수로 입력하셔야 합니다.";
        }
        else{
          var bp = 0.0;
          for(var p = 0; p < lsuc; ++p){
            bp += bipr(lrate, ltry, p);
          }
          if(bp > 0.9999999){ bp = -1;}
          else if(bp >= 1){bp = 100; }
          else{ bp = (1 - bp) * 100; }

          if(bp == -1){ rep += "당신의 운빨은 하늘을 뚫었습니다.(계산 범위를 초과하였습니다.)"; }
          else if(bp < 100){ rep += "당신의 운빨은 상위 " + bp.toFixed(6) + "% 입니다."; }
          else{ rep += "당신의 운빨은 상위 100% 입니다."; }
        }
      }
    }
  }

  return rep;
};
gt.getMedicine = function (msg){
  rep = "";

  var whatmed = msg.split(" ")[1];
  if(whatmed == undefined){
    rep = "비약의 종류를 입력하지 않으셨습니다.\n\n!비약 (비약종류) (레벨) : 성장의 비약을 사용하였을 때 해당 레벨 0%에서 경험치가 얼마나 오르는지 알 수 있습니다. 레벨은 200이상의 숫자로 입력해주세요.\n1 : 극한 성장의 비약(200~249)\n2 : 태풍 성장의 비약(200~239)\n3 : 성장의 비약 3(200~229)\n4 : 성장의 비약 2(200~219)\n5 : 성장의 비약 1(200~209)\n6 : 익스트림 성장의 비약(141 ~ 199)";
  }
  else if(whatmed != 1 && whatmed != 2 && whatmed != 3 && whatmed != 4 && whatmed != 5 && whatmed != 6){
    rep = "(비약종류)에 1~5의 숫자 중 하나를 골라 입력하여주세요.\n\n!비약 (비약종류) (레벨) : 성장의 비약을 사용하였을 때 해당 레벨 0%에서 경험치가 얼마나 오르는지 알 수 있습니다. 레벨은 200이상의 숫자로 입력해주세요.\n1 : 극한 성장의 비약(200~249)\n2 : 태풍 성장의 비약(200~239)\n3 : 성장의 비약 3(200~229)\n4 : 성장의 비약 2(200~219)\n5 : 성장의 비약 1(200~209)\n6 : 익스트림 성장의 비약(141 ~ 199)";
  }
  else{
    medlvl = msg.split(" ")[2];
    if(medlvl == undefined){
      rep = "레벨을 입력하지 않으셨습니다.\n\n!비약 (비약종류) (레벨) : 성장의 비약을 사용하였을 때 해당 레벨 0%에서 경험치가 얼마나 오르는지 알 수 있습니다. 레벨은 200이상의 숫자로 입력해주세요.\n1 : 극한 성장의 비약(200~249)\n2 : 태풍 성장의 비약(200~239)\n3 : 성장의 비약 3(200~229)\n4 : 성장의 비약 2(200~219)\n5 : 성장의 비약 1(200~209)\n6 : 익스트림 성장의 비약(141 ~ 199)";
    }
    else if(isNaN(medlvl) || medlvl % 1 != 0){
      rep = "레벨은 200이상의 정수로 입력하셔야 합니다.";
    }
    else if(medlvl < 200 || medlvl > 299){
      rep = "레벨은 200보다 크거나 같고 300보다 작아야 합니다.";
    }
    else{
      var med0 = exps[198];
      var med1 = exps[208];
      var med2 = exps[218];
      var med3 = exps[228];
      var med4 = exps[238];
      var med5 = exps[248];
      var medres = 0;

      if(whatmed == 1){//극성비
        rep = medlvl + "레벨에서 극한 성장의 비약 사용 결과 : ";
        if(medlvl < 250){
          rep += (parseInt(medlvl) + 1) + "레벨 0%";
        }
        else{
          medres = ((med5 / exps[medlvl-1]) * 100).toFixed(3);
          rep += medlvl + "레벨 " + medres + "%";
        }
      }
      else if(whatmed == 2){//태성비
        rep = medlvl + "레벨에서 태풍 성장의 비약 사용 결과 : ";
        if(medlvl < 240){
          rep += (parseInt(medlvl) + 1) + "레벨 0%";
        }
        else{
          medres = ((med4 / exps[medlvl-1]) * 100).toFixed(3);
          rep += medlvl + "레벨 " + medres + "%";
        }
      }
      else if(whatmed == 3){//성비3
        rep = medlvl + "레벨에서 성장의 비약 3 사용 결과 : ";
        if(medlvl < 230){
          rep += (parseInt(medlvl) + 1) + "레벨 0%";
        }
        else{
          medres = ((med3 / exps[medlvl-1]) * 100).toFixed(3);
          rep += medlvl + "레벨 " + medres + "%";
        }
      }
      else if(whatmed == 4){//성비2
        rep = medlvl + "레벨에서 성장의 비약 2 사용 결과 : ";
        if(medlvl < 220){
          rep += (parseInt(medlvl) + 1) + "레벨 0%";
        }
        else{
          medres = ((med2 / exps[medlvl-1]) * 100).toFixed(3);
          rep += medlvl + "레벨 " + medres + "%";
        }
      }
      else if(whatmed == 5){//성비1
        rep = medlvl + "레벨에서 성장의 비약 1 사용 결과 : ";
        if(medlvl < 210){
          rep += (parseInt(medlvl) + 1) + "레벨 0%";
        }
        else{
          medres = ((med1 / exps[medlvl-1]) * 100).toFixed(3);
          rep += medlvl + "레벨 " + medres + "%";
        }
      }
      else if(whatmed == 6){//익성비
        rep = medlvl + "레벨에서 익스트림 성장의 비약 사용 결과 : ";
        if(medlvl < 200){
          rep += (parseInt(medlvl) + 1) + "레벨 0%";
        }
        else{
          medres = ((med0 / exps[medlvl-1]) * 100).toFixed(3);
          rep += medlvl + "레벨 " + medres + "%";
        }
      }
    }
  }

  return rep;
};
gt.getMureung = function (nickname, dataM1, dataC1){
  rep = "";
  dataMyear = dataM1.split("<span class=\"d-block\">")[1].split(" </span>")[0];
  dataMdate = dataM1.split("<span class=\"d-block\">")[1].split("<b>")[1].split("</b>")[0];
  dataMlevel = dataM1.split("<h5 class=\"d-block mb-1\">")[1].split("</h5>")[0];
  dataMtime = dataM1.split(".5px\">")[1].split("</span>")[0];
  
  dataM2 = dataC1.split("<h1 class=\"user-summary-floor font-weight-bold\">")[1];
  dataM3 = dataM2.split("</small>")[0].split("</h1>")[0];
  dataM4 = dataM2.split("duration\">")[1].split("</small>")[0];
  dataMdate2 = dataM2.split("user-summary-date\">")[1].split("<span>")[1].split("</span")[0].replace("기준일: ", "20");
  rep = (nickname + " 캐릭터의 무릉 최신기록\n\n" +  dataMyear + " " + dataMdate + " 기준 : " + dataMlevel + ", " + dataMtime + "\n\n최고기록\n\n" + dataMdate2 + " 기준 : " + dataM3 + ", " + dataM4);
  return rep;
};
gt.getMustory = function (nickname, dataC1){
  rep = "";

  if(dataC1.indexOf("검색결과 없음") != -1){
    rep = ("그런 캐릭터는 없습니다.");
  }
  else{ 
      var datamus = dataC1.split("무릉 히스토리")[1].split("</div>")[0];
      var muscnt = datamus.split("d-block\">2").length;
      /*var muscnt2 = datamus.split("<b>").length;
      var muscnt3 = datamus.split("d-block mb-1\">").length;
      var muscnt4 = datamus.split(".5px\">").length;
      var muscnt5 = datamus.split("<small>").length;
      rep = muscnt + " " + muscnt2 + " " + muscnt3 + " " + muscnt4 + " " + muscnt5;*/

      if(muscnt <= 1){
        rep = "이 캐릭터는 무릉 히스토리가 없습니다.";
      }
      else{
        var musYear = [], musDate = [], musFloor = [], musTime = [], musLevel = [];
        for(i = 1; i < muscnt; ++i){
          musYear.push(datamus.split("d-block\">2")[i].split("</span>")[0]);
          musDate.push(datamus.split("<b>")[i].split("</b>")[0]);
          musFloor.push(datamus.split("d-block mb-1\">")[i].split("</h5>")[0]);
          musTime.push(datamus.split(".5px\">")[i].split("</span>")[0]);
          musLevel.push(datamus.split("<small>")[i].split("</small>")[0]);
        }
        rep += nickname + " 캐릭터의 무릉 히스토리\n\n";
        for(i = 0; i < musYear.length; ++i){
          rep += "(" + (i+1) + ")";
          rep += " 2" + musYear[i];
          rep += musDate[i];
          rep += " : " + musFloor[i];
          rep += ", " + musTime[i];
          rep += " " + musLevel[i] + "\n";
        }
        rep = rep.slice(0, rep.length-1);
      }

  }

  return rep;
};
gt.getPoschaos = function (msg){
  rep = "";
  var pcchk = msg.split(" ")[1];
  if(pcchk == undefined){
    rep = positiveChaos();
  }
  else{
    var pccnt = parseInt(pcchk);
    if(isNaN(pcchk)){ rep = "횟수가 숫자가 아닌 다른 것을 입력하셨습니다. 확인 후 다시 입력해주세요."; }
    else if(pcchk % 1 != 0){ rep = "횟수가 정수가 아닌 다른 것을 입력하셨습니다. 확인 후 다시 입력해주세요."; }
    else if(pccnt <= 0 || pccnt > 5){ rep = "횟수는 0 초과 5 이하의 숫자만 입력하실 수 있습니다."; }
    else{
      for(var k = 0; k < pccnt; ++k){
        rep += positiveChaos() + "\n\n";
      }
      rep = rep.slice(0, rep.length-2);
    }
  }

  return rep;
};
gt.getRate = function (msg){
  rep = "";
  var firstR = msg.split(" ")[1];
  if(firstR == undefined){ rep = "확률을 입력하지 않으셨습니다. 확률을 입력해주세요.\n\n!확률 (확률) (횟수) : (확률)에 입력한 확률로 (횟수)에 입력한 만큼 시도하여 최초 성공 시점, 성공 횟수를 보여줍니다. (횟수)를 생략 시 최대 10만회를 시도하여 최초 성공 시점의 시도 횟수를 보여줍니다."; }
  else{
    var chance = parseFloat(firstR);
      if(isNaN(chance)){ rep = "확률이 숫자가 아닌 다른 것을 입력하셨습니다. 확인 후 다시 입력해주세요."; }
      else if(chance <= 0 || chance >= 100){ rep = "확률은 0 초과 100 미만의 숫자만 입력하실 수 있습니다."; }
      else{
        var secondR = msg.split(" ")[2];
        if(secondR == undefined){
          var trycnt = 1;
          while(trycnt < 100000){
            var randrate = Math.random() * 100;
            if(randrate < chance){ break; }
            ++trycnt;
          }
          if(trycnt == 100000){rep = "100000회의 시뮬레이션 동안 한번도 " + chance + "%의 벽을 넘지 못하였습니다."; }
          else{ 
            rep = chance + "%의 벽을 " + trycnt + " 회의 시도만에 성공하였습니다.\n\n"; 
            var rateExp = (100 / chance).toFixed(0);
            rep += "해당 확률의 기댓값은 " + rateExp + " 회 였습니다.\n";
            var trydiff = rateExp - trycnt;
            if(trydiff < 0){ rep += "당신은 기댓값보다 " + -trydiff + " 회나 더 시도했을만큼 드럽게 운이 없습니다."; }
            else if(trydiff == 0){ rep += "당신은 딱 기댓값만에 성공할 정도로 드럽게 운이 없.. 아닙니다."; }
            else{ rep += "당신은 기댓값보다 " + trydiff + " 회 더 적게 시도했습니다. 축하드립니다."; }
          }
        }
        else{
          var rateCnt = parseInt(secondR);
          if(isNaN(rateCnt)){ rep = "횟수가 숫자가 아닌 다른 것을 입력하셨습니다. 확인 후 다시 입력해주세요."; }
          else if(rateCnt <= 0 || rateCnt > 100000){ rep = "횟수는 0 초과 100000 이하의 숫자만 입력하실 수 있습니다."; }
          else{
            trycnt = 0;
            var firstSuc = 0, succnt = 0;
            while(trycnt < rateCnt){
              ++trycnt;
              randrate = Math.random() * 100;
              if(randrate < chance){ ++succnt; if(firstSuc == 0){ firstSuc = trycnt; }}
            }

            var ratechk = 0.0;
            ratechk = (succnt / rateCnt * 100).toFixed(4);
            var ratediff = (ratechk - chance).toFixed(4);

            if(succnt == 0){ rep = rateCnt + " 회의 시뮬레이션 동안 한번도 " + chance + "%의 벽을 넘지 못하였습니다."; }
            else{ 
              rep = chance + "%의 벽을 " + firstSuc + " 번째때 처음 성공하였습니다.\n\n" + rateCnt + "회의 시도 중 총 " + succnt + " 회 성공하였습니다.\n\n";
              if(ratediff < 0){ rep += succnt + " / " + rateCnt + " = " + ratechk + "%\n" + ratediff + "%의 오차만큼 당신의 운이 드럽게 없습니다."; }
              else if(ratediff == 0){ rep += succnt + " / " + rateCnt + " = " + ratechk + "%\n" + "한치의 오차도 없이 정확하게 확률을 뚫었습니다."}
              else{ rep += succnt + " / " + rateCnt + " = " + ratechk + "%\n" + ratediff + "%의 오차만큼 다른분들께 비틱할 수 있습니다."; }
            }
          }
        }
    }
  }
  return rep;
};
gt.getScouter = function (clvl, mlvl, ulvl){
  var ret = 0;

  var ctemp = clvl - 100;
  var mtemp = 0; var utemp = 0;
  if(mlvl >= 45){
    mtemp = mlvl * 4;
  }
  else{
    mtemp = mlvl * 3;
  }

  if(ulvl >= 8000){
    utemp = 250;
  }
  else{
    utemp = ulvl / 40;
    utemp = parseInt(utemp.toFixed(0));
  }
  ret = ctemp + mtemp + utemp;

  return ret;
};
gt.getSeed = function (dataS1){
  rep = "";
  dataS2 = dataS1.split("<h1 class=\"user-summary-floor font-weight-bold\">")[1].split("</small>")[0];
  dataS3 = dataS2.split("</h1>")[0];
  dataS4 = dataS2.split("\">")[1];
  rep = (dataS3 + ", " + dataS4);
  return rep;
};
gt.getStarforce = function (msg){
  rep = "";
  const sfM = require('Starforce');
  var sfhelp = "!스타포스 A B C D E F\n";  sfhelp += "A : 아이템 레벨 제한(100~200 or 타일런트:99)\n";   sfhelp += "B : 시작 스타포스 개수\n";     sfhelp += "C : 목표 스타포스 개수\n";     sfhelp += "D : 스타캐치 적용여부 (0 - 미적용, 1 - 적용)\n";      sfhelp += "E : 이벤트 적용여부 (0 - 미적용, 1 - 30% 할인, 2 - 5,10,15성 100%, 3 - 10성이하 1+1, 4 - 30% 할인 & 5,10,15성 100%)\n";       sfhelp += "F : 파괴방지 적용여부 (0 - 미적용, 1 - 12~17성 적용, 2 - 15~17성 적용)";
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
    rep = (sfrep);
  }
  else if(msg.split(" ")[1] == "수치"){
    var sfvalop = msg.split(" ")[2];
    if(sfvalop == undefined){ rep = "수치를 알고싶은 항목을 입력해주세요.\n1 : 스타포스\n2 : 놀장"; }
    else if(sfvalop == "1"){
      rep = "a☆" + "https://i.imgur.com/0rA7faO.png";
    }
    else if(sfvalop == "2"){
      rep = "b☆" + "https://i.imgur.com/fkUpVl5.png";      
    }
    else{ rep = sfvalop + " >> 항목을 잘못 입력하셨습니다. 수치를 알고싶은 항목을 입력해주세요.\n1 : 스타포스\n2 : 놀장"; }
  }
  else{
    if(msg.split(" ").length < 7){
      rep = ("시뮬레이터를 돌리기 위한 요소들이 부족합니다.\n\n" + sfhelp);
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
        rep = ("숫자가 아니거나 정수가 아닌 요소가 있습니다.\n\n" + sfhelp);
      }
      else{
        var sfLevel = 0, sfStart = 0, sfDest = 0, sfCatch = 0, sfEvent = 0, sfDefend = 0;
        sfLevel = parseInt(msg.split(" ")[1]); sfStart = parseInt(msg.split(" ")[2]); sfDest = parseInt(msg.split(" ")[3]); sfCatch = parseInt(msg.split(" ")[4]); sfEvent = parseInt(msg.split(" ")[5]); sfDefend = parseInt(msg.split(" ")[6]);
        if(sfM.isSFready(sfLevel, sfStart, sfDest, sfCatch, sfEvent, sfDefend) != 0){
          rep = ("조건에 맞지않는 요소가 있습니다.\n\n" + sfhelp + "\n오류코드 : " + sfM.isSFready(sfLevel, sfStart, sfDest, sfCatch, sfEvent, sfDefend));
        }
        else{
          rep = sfM.simulation(sfLevel, sfStart, sfDest, sfCatch, sfEvent, sfDefend);
        }
      }
    }
  }
  return rep;
};
gt.getSFsimulation = function (msg){
  rep = "";
  const sfsM = require('Starforce');
  sfhelp = "!스타시뮬 A B C D E F\n";  sfhelp += "A : 아이템 레벨 제한(100~200 or 타일런트:99)\n";   sfhelp += "B : 시작 스타포스 개수\n";     sfhelp += "C : 목표 시행 횟수\n";     sfhelp += "D : 스타캐치 적용여부 (0 - 미적용, 1 - 적용)\n";      sfhelp += "E : 이벤트 적용여부 (0 - 미적용, 1 - 30% 할인, 2 - 5,10,15성 100%, 3 - 10성이하 1+1, 4 - 30% 할인 & 5,10,15성 100%)\n";       sfhelp += "F : 파괴방지 적용여부 (0 - 미적용, 1 - 12~17성 적용, 2 - 15~17성 적용)";
  
  if(msg.split(" ").length < 7){
    rep = ("시뮬레이터를 돌리기 위한 요소들이 부족합니다.\n\n" + sfhelp);
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
      rep = ("숫자가 아니거나 정수가 아닌 요소가 있습니다.\n\n" + sfhelp);
    }
    else{
      var sfLevel = 0, sfStart = 0, sfDest = 0, sfCatch = 0, sfEvent = 0, sfDefend = 0;
      sfLevel = parseInt(msg.split(" ")[1]); sfStart = parseInt(msg.split(" ")[2]); sfDest = parseInt(msg.split(" ")[3]); sfCatch = parseInt(msg.split(" ")[4]); sfEvent = parseInt(msg.split(" ")[5]); sfDefend = parseInt(msg.split(" ")[6]);
      if(sfsM.isSFready2(sfLevel, sfStart, sfDest, sfCatch, sfEvent, sfDefend) != 0){
        rep = ("조건에 맞지않는 요소가 있습니다.\n\n" + sfhelp + "\n오류코드 : " + sfsM.isSFready2(sfLevel, sfStart, sfDest, sfCatch, sfEvent, sfDefend));
      }
      else{
        rep = sfsM.simulation2(sfLevel, sfStart, sfDest, sfCatch, sfEvent, sfDefend);
      }
    }
  }
  return rep;
};
gt.getStrong = function (msg, addtitle, addn){
  rep = "";
  var addLevel = msg.split(" ")[1];
  if(addLevel == undefined){
    rep = ("레벨을 입력해주세요.\n\n!강환/!강환불/!영환/!영환불 (렙제) (횟수) : \n 150, 160, 200제 방어구, 장신구의 추가옵션을 횟수만큼 돌립니다. \n횟수는 5이하 숫자만 가능하며 생략시 1회만 돌립니다.");
  }
  else if(addLevel != 150 && addLevel != 160 && addLevel != 200){
    rep = ("레벨은 150, 160, 200만 가능합니다.");
  }
  else{
    const addM = require('Addop');
    var addResult = "";
    if(addLevel == 150){ addResult += "150제 아이템 "; }
    else if(addLevel == 160){ addResult += "160제 아이템 "; }
    else if(addLevel == 200){ addResult += "200제 아이템 "; }
    addtitle[0] = addResult;
    if(msg.split(" ")[2] == undefined || msg.split(" ")[2] == 1){
      var addition = [];
      addM.addStrong(addition);
      
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

      rep = (addResult);
    }
    else if(msg.split(" ")[2] > 0 && msg.split(" ")[2] < 6 && msg.split(" ")[2] % 1 === 0){
      addResult += msg.split(" ")[2];
      addResult += "회\n";
      for(i = 0; i < msg.split(" ")[2]; ++i){
        addition = [];
        addM.addStrong(addition);
      
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
      rep = "-";
    }
    else{
      rep = ("횟수가 5를 초과하거나 올바른 숫자가 아닙니다.");
    }
  }
  return rep;
};
gt.getUnion = function (dataU1, dataU2){
  rep = "";
  dataU3 = dataU2.split("bold\">")[1];
  dataU4 = dataU3.split("</div>")[0].trim();
  dataU5 = dataU3.split("level\">")[1].split("</span>")[0];

  dataU7 = dataU1.split("전투력</b> ")[1].split("</span>")[0];
  dataU8 = parseFloat(dataU7.replace(/,/g, ""));
  dataU9 = parseInt(dataU8 * 8.64 / 10000000);
  rep = (dataU4 + ", " + dataU5 + "\n유니온 전투력 : " + dataU8 + "\n일일 유니온 코인 수급량 : " + dataU9);
  return rep;
};
gt.getUpdate = function (mapleHome, dataUP){
    rep = "";
    var dataUP2 = dataUP.split("<!-- notice ul str -->")[1].split("</span>")[0];
    var dataUP3 = dataUP2.split("<a href=\"")[1].split("\">")[0];
    var dataUP4 = dataUP2.split("<span>")[1];

    rep = dataUP4 + "\n\n" + mapleHome + dataUP3;
    return rep;
};
gt.get3Dae = function (mscore){
  ret = "";

  if(mscore <= 300){ ret = "응애 나 애기 메린이";  }
  else if(mscore > 300 && mscore <= 350){ ret = "메청소년, 아직 늦지 않았다."; }
  else if(mscore > 350 && mscore <= 400){ ret = "메청년, 열심히 메린이 코스프레중"; }
  else if(mscore > 400 && mscore <= 500){ ret = "메유저 평균, 지능이 점점 퇴화중"; }
  else if(mscore > 500 && mscore <= 550){ ret = "본인은 부정하지만 주변에서는 슬슬 메창소리 들을 수준"; }
  else if(mscore > 550 && mscore <= 600){ ret = "보마봇 공식 메창 인증서 발급"; }
  else if(mscore > 600 && mscore <= 700){ ret = "메생이 곧 현생, 일상생활 가능하십니까.."; }
  else if(mscore > 700){ ret = "당신이 곧 메이플 그 자체, 넥슨 기둥뿌리 몇개는 세워주신 분"}

  return ret;
}

function positiveChaos(){
  var rep2 = "";
  var pcRate = [1838, 3301, 2387, 1387, 494, 0, 593];
  
  var pcsuc = getRandomInt(0, 100);
  if(pcsuc < 40){
    rep2 = "놀라운 긍정의 혼돈 주문서 60%가 한 순간 빛났지만 아이템에는 아무런 변화도 일어나지 않았습니다.";
  }
  else{
    rep2 = "놀라운 긍정의 혼돈 주문서 60%가 한 순간 빛나더니 신비로운 힘이 그대로 아이템에 전해졌습니다.\n";
    rep2 += "놀라운 긍정의 혼돈 주문서 60%의 힘이 적용되었습니다.";
    var rep3 = "(";
    var pcup = 0;
    var pcrand = getRandomInt(0, 10000);
    for(var j = 0; j < 7; ++j){ if(pcrand < cumulate(pcRate, j)){ pcup = j; break; } }
    if(pcup != 0){ rep3 += "STR : +" + pcup + ", "; }
    pcrand = getRandomInt(0, 10000);
    for(var j = 0; j < 7; ++j){ if(pcrand < cumulate(pcRate, j)){ pcup = j; break; } }
    if(pcup != 0){ rep3 += "DEX : +" + pcup + ", "; }
    pcrand = getRandomInt(0, 10000);
    for(var j = 0; j < 7; ++j){ if(pcrand < cumulate(pcRate, j)){ pcup = j; break; } }
    if(pcup != 0){ rep3 += "INT : +" + pcup + ", "; }
    pcrand = getRandomInt(0, 10000);
    for(var j = 0; j < 7; ++j){ if(pcrand < cumulate(pcRate, j)){ pcup = j; break; } }
    if(pcup != 0){ rep3 += "LUK : +" + pcup + ", "; }
    pcrand = getRandomInt(0, 10000);
    for(var j = 0; j < 7; ++j){ if(pcrand < cumulate(pcRate, j)){ pcup = j; break; } }
    if(pcup != 0){ rep3 += "공격력 : +" + pcup + ", "; }
    pcrand = getRandomInt(0, 10000);
    for(var j = 0; j < 7; ++j){ if(pcrand < cumulate(pcRate, j)){ pcup = j; break; } }
    if(pcup != 0){ rep3 += "마력 : +" + pcup + ", "; }

    if(rep3.length != 1){ rep3 = rep3.slice(0, rep3.length-2); }
    else{ rep3 = "(어떠한 변화도 일어나지 않았습니다."; }

    rep2 += rep3 + ")";
  }

  return rep2;
}
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
function ladderComp(a, b){
  if(a.ints < b.ints){return -1;}
  else if(a.ints >= b.ints){return 1;}
}
function cumulate(arr, ind) {
    var ret = 0;
    for(i = 0; i < ind+1; ++i){
      ret += arr[i];
    }
    return ret;
}
function fac(n){
  var res = 1;
  for(var c = 1; c <= n; ++c){
    res = res * c;
  }
  return res;
}
function bipr(r, t, s){
  var resf = 0.0;
  resf = (fac(t) / (fac(s) * fac(t - s))) * Math.pow(r, s) * Math.pow((1-r), t-s);
  return resf;
}
gt.levdam = "레벨별 데미지 증감표\n\n(내 레벨-몬스터 레벨) (데미지)\n+5이상 120%\n+4 118%\n+3 116%\n+2 114%\n+1 112%\n0 110%\n-1 105%\n-2 100%\n-3 95%\n-4 90%\n-5 87.5%\n-6 85%\n-7 82.5%\n-8 80%\n-9 77.5%\n-10 75%\n-11 72.5%\n-12 70%\n-13 67.5%\n-14 65%\n-15 62.5%\n-16 60%\n-17 57.5%\n-18 55%\n-19 52.5%\n-20 50%\n-21 47.5%\n-22 45%\n-23 42.5%\n-24 40%\n-25 37.5%\n-26 35%\n-27 32.5%\n-28 30%\n-29 27.5%\n-30 25%\n-31 22.5%\n-32 20%\n-33 17.5%\n-34 15%\n-35 12.5%\n-36 10%\n-37 7.5%\n-38 5%\n-39 2.5%\n-40이하 0%";
gt.levdamre = "레벨별 데미지 증감표\n\n(내 레벨-몬스터 레벨) (데미지)\n+10이상 120%\n+9 118%\n+8 116%\n+7 114%\n+6 112%\n+5 110%\n+4 108%\n+3 106%\n+2 104%\n+1 102%\n0 100%\n-1 95%\n-2 90%\n-3 85%\n-4 80%\n-5 75%\n-6 70%\n-7 65%\n-8 60%\n-9 55%\n-10 50%\n-11 40.5%\n-12 32%\n-13 24.5%\n-14 18%\n-15 12.5%\n-16 8%\n-17 4.5%\n-18 2%\n-19 0.5%\n-20이하 0%";
gt.levexp = "레벨별 경험치 증감표\n\n(내 레벨-몬스터 레벨) (경험치)\n+40이상 70%\n+39~+21 71%~89%\n+20~+19 95%\n+18~+17 96%\n+16~+15 97%\n+14~+13 98%\n+12~+11 99%\n+10 100%\n+9~+5 105%\n+4~+2 110%\n+1~-1 120%\n-2~-4 110%\n-5~-9 105%\n-10~-20 100%~90%\n-21~-35 70%~14%\n-36~-39 10%\n-40이하 고정수치100";
gt.levmeso = "레벨별 메소 증감표\n\n(내 레벨-몬스터 레벨) (메소)\n+30 이상 -100%\n+29 -97%\n+28 -84%\n+27 -76%\n+26 -65%\n+25 -55%\n+24 -46%\n+23 -38%\n+22 -31%\n+21 -25%\n+20 -20%\n+19 -18%\n+18 -16%\n+17 -14%\n+16 -12%\n+15 -10%\n+14 -8%\n+13 -6%\n+12 -4%\n+11 -2%\n+10~-10 0%\n-11 -3%\n-12 -6%\n-13 -9%\n-14 -12%\n-15 -15%\n-16 -18%\n-17 -21%\n-18 -24%\n-19 -27%\n-20 -30%\n-21 -35%\n-22 -40%\n-23 -45%\n-24 -50%\n-25 -55%\n-26 -60%\n-27 -65%\n-28 -70%\n-29 -75%\n-30 -80%\n-31 -85%\n-32 -90%\n-33 -95%\n-34이하 -100%";
var accexps = [ 0, 15, 49, 106, 198, 333, 705, 1265, 2105, 3347, 4589, 5831, 7073, 8315, 9557, 11047, 12835, 14980, 17554, 20642, 24347, 28793, 34128, 40530, 48212, 57430, 68491, 81764, 97691, 116803, 135915, 155027, 174139, 193251, 212363, 235297, 262817, 295841, 335469, 383022, 434379, 489844, 549746, 614440, 684309, 759767, 841261, 929274, 1024328, 1126986, 1237856, 1357595, 1486913, 1626576, 1777412, 1940314, 2116248, 2306256, 2511464, 2733088, 2954712, 3176336, 3397960, 3619584, 3841208, 4079453, 4335566, 4610887, 4906857, 5225024, 5567053, 5934734, 6329991, 6754892, 7211660, 7700401, 8223353, 8782911, 9381638, 10022275, 10707756, 11441220, 12226026, 13065768, 13964291, 14925710, 15954428, 17055156, 18232934, 19493156, 20835292, 22264666, 23786949, 25408180, 27134791, 28973631, 30931995, 33017652, 35238876, 37604479, 39970082, 42335685, 44701288, 47066891, 49432494, 51951861, 54634986, 57492514, 60535781, 63776860, 67228609, 70904721, 74819780, 78989317, 83429873, 88159065, 93195654, 98559621, 104272245, 110356189, 116835589, 123736150, 131085247, 138912035, 147247564, 156124902, 165579266, 175648163, 186371538, 197791932, 209954651, 222907946, 236703205, 251395155, 267042081, 283706057, 301453191, 320353888, 340483130, 361920772, 384698266, 408899353, 434613007, 461933764, 490962068, 521804641, 554574874, 589393246, 626387766, 665694443, 707457787, 751831340, 798978240, 849071821, 902296250, 958847205, 1018932594, 1082773319, 1150604089, 1222674282, 1299248862, 1380609353, 1467054874, 1558903240, 1656492128, 1760180321, 1870349026, 1987403275, 2111773414, 2243916686, 2382667121, 2528355077, 2681327430, 2841948400, 3010600418, 3187685036, 3373623884, 3568859674, 3773857253, 3989104710, 4215114539, 4452424859, 4701600695, 4963235322, 5237951680, 5526403855, 5829278638, 6147297160, 6481216608, 6831832028, 7199978219, 7586531719, 7992412894, 8418588127, 8866072121, 9335930314, 9829281416, 10347300073, 10891219662, 11462335230, 13669361590, 16141231346, 18909725349, 22010438632, 25483237508, 29372772249, 33729051158, 38608083536, 44072599799, 50192858013, 59985271155, 70854849742, 82920081973, 96312489749, 111178062380, 130503306800, 151567823217, 174528146111, 199554898065, 226834057694, 270480713100, 317182634384, 367153690157, 420622719834, 477834581588, 552210001868, 630304193162, 712303094020, 798401939920, 888805728115, 1033451789227, 1182437232172, 1335892238405, 1493950894824, 1656751310935, 1868391851879, 2086381609051, 2310911058938, 2542176392321, 2780379685705, 3161504955119, 3554063982615, 3958399780935, 4374865653204, 4803825501641, 5361473304609, 5935850541666, 6527459095834, 7136815906627, 7764453421743, 8768673445929, 9803020070840, 10868397094498, 11965735428865, 13095993913263, 14260160153192, 15459251378288, 16694315341166, 17966431222930, 19276710581146, 22179137829299, 25110589349933, 28071355385773, 31061729081971, 34082006515130, 37132486722620, 40213471732184, 43325266591843, 46468179400098, 49642521336435, 56054692047835, 62530984466349, 69072039809048, 75678505705173, 82351036260259, 95829547981532, 110655910874932, 126964910057672, 144904809158686, 164638698169801, 204501153972253, 248349855354950, 296583426875916, 349640355548978, 408002977089346, 525895472600889, 655577217663586, 798227137232552, 955142048758414, 1127748451436860, 1476413384847330, 1859944811598840, 2281829381025500, 2745902407394820, 3256382736401080, 4287553000993723, 5421840292045630, 6669556312202727, 8042043934375533, 10100775367634732];
var exps = [ 15,34,57,92,135,372,560,840,1242,1242,1242,1242,1242,1242,1490,1788,2145,2574,3088,3705,4446,5335,6402,7682,9218,11061,13273,15927,19112,19112,19112,19112,19112,19112,22934,27520,33024,39628,47553,51357,55465,59902,64694,69869,75458,81494,88013,95054,102658,110870,119739,129318,139663,150836,162902,175934,190008,205208,221624,221624,221624,221624,221624,221624,238245,256113,275321,295970,318167,342029,367681,395257,424901,456768,488741,522952,559558,598727,640637,685481,733464,784806,839742,898523,961419,1028718,1100728,1177778,1260222,1342136,1429374,1522283,1621231,1726611,1838840,1958364,2085657,2221224,2365603,2365603,2365603,2365603,2365603,2365603,2519367,2683125,2857528,3043267,3241079,3451749,3676112,3915059,4169537,4440556,4729192,5036589,5363967,5712624,6083944,6479400,6900561,7349097,7826788,8335529,8877338,9454364,10068897,10723375,11420394,12162719,12953295,13795259,14691950,15646926,16663976,17747134,18900697,20129242,21437642,22777494,24201087,25713654,27320757,29028304,30842573,32770233,34818372,36994520,39306677,41763344,44373553,47146900,50093581,53224429,56550955,60085389,63840725,67830770,72070193,76574580,81360491,86445521,91848366,97588888,103688193,110168705,117054249,124370139,132143272,138750435,145687956,152972353,160620970,168652018,177084618,185938848,195235790,204997579,215247457,226009829,237310320,249175836,261634627,274716358,288452175,302874783,318018522,333919448,350615420,368146191,386553500,405881175,426175233,447483994,469858193,493351102,518018657,543919589,571115568,2207026470,2471869646,2768494003,3100713283,3472798876,3889534741,4356278909,4879032378,5464516263,6120258214,9792413142,10869578587,12065232231,13392407776,14865572631,19325244420,21064516417,22960322894,25026751954,27279159629,43646655406,46701921284,49971055773,53469029677,57211861754,74375420280,78094191294,81998900858,86098845900,90403788195,144646061112,148985442945,153455006233,158058656419,162800416111,211640540944,217989757172,224529449887,231265333383,238203293384,381125269414,392559027496,404335798320,416465872269,428959848437,557647802968,574377237057,591608554168,609356810793,627637515116, 1004220024186, 1034346624911, 1065377023657, 1097338334367, 1130258484398, 1164166238930, 1199091226096, 1235063962881, 1272115881767, 1310279358220, 2902427248153,2931451520634,2960766035840,2990373696198,3020277433159,3050480207490,3080985009564,3111794859659,3142912808255,3174341936337,6412170711400,6476292418514,6541055342699,6606465896125,6672530555086,13478511721273,14826362893400,16308999182740,17939899101014,19733889011115,39862455802452,43848701382697,48233571520966,53056928673062,58362621540368,117892495511543,129681745062697,142649919568966,156914911525862,172606402678448,348664933410464,383531426751510,421884569426661,464073026369327,510480329006259,1031170264592640,1134287291051900,1247716020157090,1372487622172800,2058731433259200];
var extR = [[5, 5, 5, 5, 5, /*146*/5, 5, 5, 5, 5, /*151*/5, 5, 5, 5, 5, /*156*/10, 10, 10, 15, 15, /*161*/15, 20, 15, 20, 20, /*166*/20, 20, 20, 25, 25, /*171*/25, 25, 25, 25, 30, /*176*/25, 30, 30, 30, 35, /*181*/35, 35, 40, 50, 55, /*186*/50, 50, 60, 60, 55, /*191*/60, 65, 65, 75, 80, /*196*/85, 90, 95, 100],
       /*2*/[5, 5, 5, 5, 5, /*146*/5, 5, 5, 5, 5, /*151*/5, 5, 5, 5, 10, /*156*/10, 10, 15, 20, 10, /*161*/15, 15, 20, 20, 20, /*166*/15, 20, 25, 20, 20, /*171*/20, 20, 25, 30, 20, /*176*/20, 20, 25, 25, 25, /*181*/30, 35, 35, 25, 25, /*186*/30, 35, 25, 25, 35, /*191*/35, 30, 35, 25, 20, /*196*/15, 10, 5, 0],
       /*3*/[5, 5, 5, 5, 5, /*146*/5, 5, 5, 10, 10, /*151*/10, 10, 10, 10, 10, /*156*/10, 15, 15, 5, 15, /*161*/15, 10, 15, 10, 15, /*166*/15, 15, 10, 10, 15, /*171*/10, 15, 15, 10, 20, /*176*/25, 20, 15, 20, 20, /*181*/15, 15, 10, 10, 5, /*186*/10, 5, 5, 10, 10, /*191*/5, 5, 0, 0, 0, /*196*/0, 0, 0, 0],
       /*4*/[5, 5, 5, 5, 10, /*146*/10, 10, 10, 10, 15, /*151*/10, 10, 15, 20, 20, /*156*/15, 15, 10, 10, 15, /*161*/10, 10, 10, 10, 10, /*166*/15, 10, 10, 10, 10, /*171*/15, 15, 10, 10, 10, /*176*/10, 10, 10, 10, 5, /*181*/10, 5, 5, 5, 5, /*186*/5, 5, 5, 5, 0, /*191*/0, 0, 0, 0, 0, /*196*/0, 0, 0, 0],
       /*5*/[5, 5, 5, 5, 10, /*146*/10, 10, 15, 15, 10, /*151*/15, 20, 15, 20, 15, /*156*/15, 10, 10, 10, 10, /*161*/10, 10, 10, 10, 10, /*166*/10, 10, 10, 10, 10, /*171*/10, 10, 10, 10, 5, /*176*/10, 10, 10, 5, 5, /*181*/5, 5, 5, 5, 5, /*186*/5, 5, 5, 0, 0, /*191*/0, 0, 0, 0, 0, /*196*/0, 0, 0, 0],
       /*6*/[5, 10, 10, 20, 10, /*146*/10, 15, 15, 15, 15, /*151*/20, 15, 20, 10, 10, /*156*/10, 10, 10, 10, 10, /*161*/10, 10, 10, 10, 5, /*166*/10, 10, 10, 10, 5, /*171*/10, 5, 5, 5, 5, /*176*/5, 5, 5, 5, 5, /*181*/5, 5, 5, 5, 5, /*186*/0, 0, 0, 0, 0, /*191*/0, 0, 0, 0, 0, /*196*/0, 0, 0, 0],
       /*7*/[10, 10, 20, 10, 10, /*146*/15, 15, 15, 10, 10, /*151*/10, 15, 10, 10, 10, /*156*/10, 10, 10, 10, 10, /*161*/10, 10, 5, 5, 5, /*166*/5, 5, 5, 5, 5, /*171*/5, 5, 5, 5, 5, /*176*/5, 5, 5, 5, 5, /*181*/0, 0, 0, 0, 0, /*186*/0, 0, 0, 0, 0, /*191*/0, 0, 0, 0, 0, /*196*/0, 0, 0, 0],
       /*8*/[20, 20, 15, 15, 15, /*146*/15, 15, 10, 10, 10, /*151*/10, 10, 10, 10, 10, /*156*/10, 10, 10, 10, 5, /*161*/5, 5, 5, 5, 5, /*166*/5, 5, 5, 5, 5, /*171*/5, 5, 5, 5, 5, /*176*/0, 0, 0, 0, 0, /*181*/0, 0, 0, 0, 0, /*186*/0, 0, 0, 0, 0, /*191*/0, 0, 0, 0, 0, /*196*/0, 0, 0, 0],
       /*9*/[20, 20, 15, 15, 15, /*146*/15, 10, 10, 10, 10, /*151*/10, 5, 5, 5, 5, /*156*/5, 5, 5, 5, 5, /*161*/5, 5, 5, 5, 5, /*166*/5, 5, 5, 5, 5, /*171*/0, 0, 0, 0, 0, /*176*/0, 0, 0, 0, 0, /*181*/0, 0, 0, 0, 0, /*186*/0, 0, 0, 0, 0, /*191*/0, 0, 0, 0, 0, /*196*/0, 0, 0, 0],
      /*10*/[20, 15, 15, 15, 15, /*146*/10, 10, 10, 10, 10, /*151*/5, 5, 5, 5, 5, /*156*/5, 5, 5, 5, 5, /*161*/5, 5, 5, 5, 5, /*166*/0, 0, 0, 0, 0, /*171*/0, 0, 0, 0, 0, /*176*/0, 0, 0, 0, 0, /*181*/0, 0, 0, 0, 0, /*186*/0, 0, 0, 0, 0, /*191*/0, 0, 0, 0, 0, /*196*/0, 0, 0, 0]];

module.exports = gt;