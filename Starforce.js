const sf = {};

sf.isSFready = function (A, B, C, D, E, F){
    var chkSF = 0;
    if(A != 99 && A != 100 && A != 110 && A != 120 && A != 130 && A != 135 && A != 140 && A != 145 && A != 150 && A != 160 && A != 200){
      chkSF = 1000;
    }
    else{
      if(B < 0 || B > 25){
        chkSF = 2000;
        if(B < 0){chkSF = 2001;}
        else{chkSF = 2002;}
      }
      else{
        if(A == 99 && B > 14){
          chkSF = 3000;
        }
        else if(A == 100 && B > 8){
          chkSF = 3001;
        }
        else if(A == 110 && B > 10){
          chkSF = 3002;
        }
        else if(A == 120 && B > 15){
          chkSF = 3003;
        }
        else if(A == 130 && B > 20){
          chkSF = 3004;
        }
        else{
          if(C < B || C < 1 || C > 25){
            chkSF = 4000;
            if(C < B){ chkSF = 4001;}
            else if(C < 1){ chkSF = 4002;}
            else {chksf = 4003;}
          }
          else if(A == 99 && C > 15){
            chkSF = 5000
          }
          else if(A == 100 && C > 8){
            chkSF = 5001;
          }
          else if(A == 110 && C > 10){
            chkSF = 5002;
          }
          else if(A == 120 && C > 15){
            chkSF = 5003;
          }
          else if(A == 130 && C > 20){
            chkSF = 5004;
          }
          else{
            if(D < 0 || D > 1){
              chkSF = 6000;
              if(D < 0){chkSF = 6001;}
              else {chkSF = 6002;}
            }
            else{
              if(E < 0 || E > 4){
                chkSF = 7000;
                if(E < 0) {chkSF = 7001;}
                else {chkSF = 7002;}
              }
              else{
                if(F < 0 || F > 2){
                  chkSF = 8000;
                  if(F < 0) {chkSF = 8001;}
                  else {chkSF = 8002;}
                }
              }
            }
          }
        }
      }
    }
  
    return chkSF;
};
sf.isSFready2 = function (A, B, C, D, E, F){
  var chkSF = 0;
  if(A != 99 && A != 100 && A != 110 && A != 120 && A != 130 && A != 135 && A != 140 && A != 145 && A != 150 && A != 160 && A != 200){
    chkSF = 1000;
  }
  else{
    if(B < 0 || B > 25){
      chkSF = 2000;
      if(B < 0){chkSF = 2001;}
      else{chkSF = 2002;}
    }
    else{
      if(A == 99 && B > 14){
        chkSF = 3000;
      }
      else if(A == 100 && B > 8){
        chkSF = 3001;
      }
      else if(A == 110 && B > 10){
        chkSF = 3002;
      }
      else if(A == 120 && B > 15){
        chkSF = 3003;
      }
      else if(A == 130 && B > 20){
        chkSF = 3004;
      }
      else{
        if(C > 50000 || C < 1){
          chkSF = 4001;
        }
        else{
          if(D < 0 || D > 1){
            chkSF = 6000;
            if(D < 0){chkSF = 6001;}
            else {chkSF = 6002;}
          }
          else{
            if(E < 0 || E > 4){
              chkSF = 7000;
              if(E < 0) {chkSF = 7001;}
              else {chkSF = 7002;}
            }
            else{
              if(F < 0 || F > 2){
                chkSF = 8000;
                if(F < 0) {chkSF = 8001;}
                else {chkSF = 8002;}
              }
            }
          }
        }
      }
    }
  }

  return chkSF;
};

sf.simulation = function (A, B, C, D, E, F){
    var sfrep = "";
    var sfmeso = 0, sfsuccessCnt = 0, sffailCnt = 0, sfdestroyCnt = 0, two100 = 0;
    var currentsf = B, destsf = C;
    var costarr = [], successarr= [], keeparr = [], downarr = [], destroyarr = [];
    var saveA = A;
    if(A == 135){ A = 130; }else if(A == 145){ A = 140; }
    switch(A){
        case 99:
            arrcopy(costarr, costtile);
            break;
        case 100:
            arrcopy(costarr, cost100);
            break;
        case 110:
            arrcopy(costarr, cost110);
            break;
        case 120:
            arrcopy(costarr, cost120);
            break;
        case 130:
            arrcopy(costarr, cost130);
            break;
        case 140:
            arrcopy(costarr, cost140);
            break;
        case 150:
            arrcopy(costarr, cost150);
            break;
        case 160:
            arrcopy(costarr, cost160);
            break;
        case 200:
            arrcopy(costarr, cost200);
            break;    
    }
    if(A != 99){
        switch(D){
            case 0:
                arrcopy(successarr, successrate);
                arrcopy(keeparr, keeprate);
                arrcopy(downarr, downrate);
                arrcopy(destroyarr, destroyrate);
                break;
            case 1: //????????????
                arrcopy(successarr, SCsuccessrate);
                arrcopy(keeparr, SCkeeprate);
                arrcopy(downarr, SCdownrate);
                arrcopy(destroyarr, SCdestroyrate);
                break;
        }
    }
    else{
        arrcopy(successarr, Tsuccessrate);
        arrcopy(keeparr, Tkeeprate);
        arrcopy(downarr, Tdownrate);
        arrcopy(destroyarr, Tdestroyrate);
    }
    if(A != 99){ sfrep += saveA + "??? ?????? " + currentsf + "??? ?????? " + destsf + "??? ????????? ???????????? ??????????????? ??????\n\n";}
    else {sfrep += "???????????? ?????? " + currentsf + "??? ?????? " + destsf + "??? ????????? ???????????? ??????????????? ??????\n\n";}

    while(currentsf < destsf){        //sfrep += currentsf + "????????? " + (currentsf+1) + "??? ????????????, ?????? : ";
        if(E != 1 && E != 4){ sfmeso += costarr[currentsf];}
        else { sfmeso += costarr[currentsf] * 0.7;} //30%??????
        if((A != 99 && two100 == 2) || (A != 99 && (E == 2 || E == 4) && (currentsf == 5 || currentsf == 10 || currentsf == 15))){  //???????????? //5,10,15 100%
            sfsuccessCnt++;
            currentsf += 1; //sfrep += "????????????!\n";
            two100 = 0;
            continue;
        }
        var starRate = [successarr[currentsf], keeparr[currentsf], downarr[currentsf], destroyarr[currentsf]];
        var sfsf = -1;
        var sfrand = getRandomInt(0, 10000);
        for(var j = 0; j < 4; j++){
            if(sfrand < cumulate(starRate, j)){
                sfsf = j;
                break;
            }
        }
        if(A != 99 && F == 1){  //12~17 ????????????
            if(currentsf > 11 && currentsf < 17){
                sfmeso += costarr[currentsf];
                if(sfsf == 3) {sfsf = 2;}
            }
        }
        else if(A != 99 && F == 2){ //15~17????????????
            if(currentsf > 14 && currentsf < 17){
                sfmeso += costarr[currentsf];
                if(sfsf == 3) {sfsf = 2;}
            }
        }
        
        if(sfsf == 0){
            currentsf += 1;            //sfrep += "??????\n";
            sfsuccessCnt++;
            if(A != 99 && E == 3 && currentsf < 11){currentsf += 1;}    //10????????? 1+1
            two100 = 0;
            continue;
        }
        else if(sfsf == 1){            //sfrep += "??????\n";
            continue;
        }
        else if(sfsf == 2){
            currentsf -= 1;
            two100++;            //sfrep += "??????\n";
            sffailCnt++;
            continue;
        }
        else{
          sfdestroyCnt++;
          if(sfdestroyCnt > 300){
            sfrep += "??????????????? 300?????? ?????? ?????????????????? ???????????????.\n";
            sfrep += "?????? ?????? : " + currentsf + "???\n";
            break;
          }
            currentsf = 12;
            if(A == 99){currentsf = 0;}            //sfrep += "??????\n";
            two100 = 0;
            continue;
        }        
    }
    const jari = require('Jari');

    sfrep += "???????????? : " + jari.Jari(sfmeso);
    sfrep += "??????\n???????????? : " + sfsuccessCnt;
    sfrep += "\n??????(??????)?????? : " + sffailCnt;
    sfrep += "\n???????????? : " + sfdestroyCnt;
    if(D == 1){ sfrep += "\n*???????????? ??????";}
    if(A != 99 && E == 1){ sfrep += "\n*30% ?????? ????????? ??????";}
    else if(A != 99 && E == 2){ sfrep += "\n*5,10,15??? 100% ????????? ??????";}
    else if(A != 99 && E == 3){ sfrep += "\n*10????????? 1+1 ????????? ??????";}
    else if(A != 99 && E == 4){ sfrep += "\n*30% ?????? ????????? ??????\n*5,10,15??? 100% ????????? ??????";}
    if(A != 99 && F == 1){ sfrep += "\n*12~17??? ???????????? ??????";}
    else if(A != 99 && F == 2){ sfrep += "\n*15~17??? ???????????? ??????";}
    return sfrep;
};
sf.simulation2 = function (A, B, C, D, E, F){
  var sfrep = "";
  var sfmeso = 0, sfsuccessCnt = 0, sffailCnt = 0, sfmaintainCnt = 0; sfdestroyCnt = 0, two100 = 0;
  var currentsf = B, currentCnt = 0; targetCnt = C; maxsf = 0, highsf = 0;
  var costarr = [], successarr= [], keeparr = [], downarr = [], destroyarr = [];
  var saveA = A, destsavearr = [];
  if(A == 135){ A = 130; }else if(A == 145){ A = 140; }
  switch(A){
      case 99:
          arrcopy(costarr, costtile);
          maxsf = 15;
          break;
      case 100:
          arrcopy(costarr, cost100);
          maxsf = 8;
          break;
      case 110:
          arrcopy(costarr, cost110);
          maxsf = 10;
          break;
      case 120:
          arrcopy(costarr, cost120);
          maxsf = 15;
          break;
      case 130:
          arrcopy(costarr, cost130);
          maxsf = 20;
          break;
      case 140:
          arrcopy(costarr, cost140);
          maxsf = 25;
          break;
      case 150:
          arrcopy(costarr, cost150);
          maxsf = 25;
          break;
      case 160:
          arrcopy(costarr, cost160);
          maxsf = 25;
          break;
      case 200:
          arrcopy(costarr, cost200);
          maxsf = 25;
          break;    
  }
  if(A != 99){
      switch(D){
          case 0:
              arrcopy(successarr, successrate);
              arrcopy(keeparr, keeprate);
              arrcopy(downarr, downrate);
              arrcopy(destroyarr, destroyrate);
              break;
          case 1: //????????????
              arrcopy(successarr, SCsuccessrate);
              arrcopy(keeparr, SCkeeprate);
              arrcopy(downarr, SCdownrate);
              arrcopy(destroyarr, SCdestroyrate);
              break;
      }
  }
  else{
      arrcopy(successarr, Tsuccessrate);
      arrcopy(keeparr, Tkeeprate);
      arrcopy(downarr, Tdownrate);
      arrcopy(destroyarr, Tdestroyrate);
  }
  if(A != 99){ sfrep += saveA + "??? ?????? " + currentsf + "??? ?????? " + targetCnt + "?????? ???????????? ??????????????? ??????\n\n";}
  else {sfrep += "???????????? ?????? " + currentsf + "??? ?????? " + targetCnt + "?????? ???????????? ??????????????? ??????\n\n";}

  while(currentsf < maxsf && currentCnt < targetCnt){        //sfrep += currentsf + "????????? " + (currentsf+1) + "??? ????????????, ?????? : ";
      currentCnt++;
      if(highsf < currentsf){highsf = currentsf; }
      if(E != 1 && E != 4){ sfmeso += costarr[currentsf];}
      else { sfmeso += costarr[currentsf] * 0.7;} //30%??????
      if((A != 99 && two100 == 2) || (A != 99 && (E == 2 || E == 4) && (currentsf == 5 || currentsf == 10 || currentsf == 15))){  //???????????? //5,10,15 100%
          sfsuccessCnt++;
          currentsf += 1; //sfrep += "????????????!\n";
          two100 = 0;
          continue;
      }
      var starRate = [successarr[currentsf], keeparr[currentsf], downarr[currentsf], destroyarr[currentsf]];
      var sfsf = -1;
      var sfrand = getRandomInt(0, 10000);
      for(var j = 0; j < 4; j++){
          if(sfrand < cumulate(starRate, j)){
              sfsf = j;
              break;
          }
      }
      if(A != 99 && F == 1){  //12~17 ????????????
          if(currentsf > 11 && currentsf < 17){
              sfmeso += costarr[currentsf];
              if(sfsf == 3) {sfsf = 2;}
          }
      }
      else if(A != 99 && F == 2){ //15~17????????????
          if(currentsf > 14 && currentsf < 17){
              sfmeso += costarr[currentsf];
              if(sfsf == 3) {sfsf = 2;}
          }
      }
      
      if(sfsf == 0){
          currentsf += 1;            //sfrep += "??????\n";
          sfsuccessCnt++;
          if(A != 99 && E == 3 && currentsf < 11){currentsf += 1;}    //10????????? 1+1
          two100 = 0;
          continue;
      }
      else if(sfsf == 1){            //sfrep += "??????\n";
        sfmaintainCnt++;
        continue;
      }
      else if(sfsf == 2){
          currentsf -= 1;
          two100++;            //sfrep += "??????\n";
          sffailCnt++;
          continue;
      }
      else{
        sfdestroyCnt++;
        if(sfdestroyCnt > 300){
          sfrep += "??????????????? 300?????? ?????? ?????????????????? ???????????????.\n";
          sfrep += "?????? ?????? : " + currentsf + "???\n";
          break;
        }
        destsavearr.push(currentsf);
          currentsf = 12;
          if(A == 99){currentsf = 0;}            //sfrep += "??????\n";
          two100 = 0;
          continue;
      }        
  }
  const jari2 = require('Jari');

  sfrep += "???????????? : " + currentCnt + "\n";
  sfrep += "?????? ?????? : " + currentsf + "???\n";
  if(currentCnt < targetCnt){highsf = currentsf; }
  sfrep += "?????? ?????? : " + highsf + "???\n";
  sfrep += "???????????? : " + jari2.Jari(sfmeso);
  sfrep += "??????\n???????????? : " + sfsuccessCnt;
  sfrep += "\n???????????? : " + sfmaintainCnt;
  sfrep += "\n??????(??????)?????? : " + sffailCnt;
  sfrep += "\n???????????? : " + sfdestroyCnt;
  sfrep += "\n???????????? : ";
  for(i = 0; i < destsavearr.length; ++i){ sfrep += "(" + destsavearr[i] + ")"; if(i==9){break;}}
  if(D == 1){ sfrep += "\n*???????????? ??????";}
  if(A != 99 && E == 1){ sfrep += "\n*30% ?????? ????????? ??????";}
  else if(A != 99 && E == 2){ sfrep += "\n*5,10,15??? 100% ????????? ??????";}
  else if(A != 99 && E == 3){ sfrep += "\n*10????????? 1+1 ????????? ??????";}
  else if(A != 99 && E == 4){ sfrep += "\n*5,10,15??? 100% ????????? ??????\n*10????????? 1+1 ????????? ??????";}
  if(A != 99 && F == 1){ sfrep += "\n*12~17??? ???????????? ??????";}
  else if(A != 99 && F == 2){ sfrep += "\n*15~17??? ???????????? ??????";}
  return sfrep;
};

function arrcopy(arr1, arr2){
    for(var i = 0; i < arr2.length; ++i){
        arr1.push(arr2[i]);
    }
}
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //???????????? ??????, ???????????? ??????
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

var successrate = [9500, 9000, 8500, 8500, 8000, /**/7500, 7000, 6500, 6000, 5500, /**/5000, 4500, 4000, 3500, 3000,/**/ 3000, 3000, 3000, 3000, 3000, /**/3000, 3000, 300, 200, 100];
var keeprate    = [500, 1000, 1500, 1500, 2000, /**/2500, 3000, 3500, 4000, 4500, /**/ 5000, 0, 0, 0, 0, /**/6790, 0, 0, 0, 0, /**/6300, 0, 0, 0, 0];
var downrate    = [0, 0, 0, 0, 0, /**/0, 0, 0, 0, 0, /**/0, 5500, 5940, 6370, 6860, /**/0, 6790, 6790, 6720, 6720, /**/0, 6300, 7760, 6860, 5940];
var destroyrate = [0, 0, 0, 0, 0, /**/0, 0, 0, 0, 0, /**/0, 0, 60, 130, 140, /**/210, 210, 210, 280, 280, /**/700, 700, 1940, 2940, 3960];

var SCsuccessrate = [9975, 9450, 8925, 8925, 8400, /**/7875, 7350, 6825, 6300, 5775, /**/5250, 4725, 4200, 3675, 3150, /**/3150, 3150, 3150, 3150, 3150, /**/3150, 3150, 315, 210, 105];
var SCkeeprate = [25, 550, 1075, 1075, 1600, /**/2125, 2650, 3175, 3700, 4225, /**/4750, 0, 0, 0, 0, /**/6645, 0, 0, 0, 0, /**/6165, 0, 0, 0, 0];
var SCdownrate = [0, 0, 0, 0, 0, /**/0, 0, 0, 0, 0, /**/0, 5275, 5742, 6199, 6713, /**/0, 6645, 6645, 6576, 6576, /**/0, 6165, 7748, 6853, 6927];
var SCdestroyrate = [0, 0, 0, 0, 0, /**/0, 0, 0, 0, 0, /**/0, 0, 58, 127, 137, /**/206, 206, 206, 274, 274, /**/685, 685, 1937, 2937, 2968]

var cost100 = [41000, 81000, 121000, 161000, 201000, /**/241000, 281000, 321000];
var cost110 = [54200, 107500, 160700, 214000, 267200, /**/320400, 373700, 426900, 480200, 533400];
var cost120 = [70100, 139200, 208400, 277500, 346600, /**/415700, 484800, 554000, 623100, 692200, /**/2801600, 3543200, 4397700, 5371700, 6471400];
var cost130 = [88900, 176800, 264600, 352500, 440400, /**/528300, 616200, 704000, 791900, 879800, /**/3561700, 4504600, 5591100, 6829300, 8227500, /**/19586000, 23069100, 26918600, 31149300, 35776100];
var cost140 = [110800, 220500, 330300, 440000, 549800, /**/659600, 769300, 879100, 988800, 1098600, /**/4448200, 5625900, 6982900, 8529400, 10275700, /**/24462200, 28812500, 33620400, 38904500, 44683300, /**/50974700, 57796700, 65166700,73102200, 81620200];
var cost150 = [136000, 271000, 40600, 541000, 676000, /**/811000, 946000, 1081000, 1216000, 1351000, /**/5470800, 6919400, 8588400, 10490600, 12638500, /**/30084200, 35437900, 41351400, 47850600, 54958200, /**/62696400, 71087200, 80152000, 89912300, 100389000];
var cost160 = [164800, 328700, 492500, 656400, 820200, /**/984000, 1147900, 1311700, 1475600, 1639400, /**/6639400, 8397300, 10422900, 12731500, 15338200, /**/36514500, 43008300, 50185100, 58072700, 66698700, /**/76090000, 86273300, 97274600, 109120000, 121834900];
var cost200 = [321000, 641000, 961000, 1281000, 1601000, /**/1921000, 2241000, 2561000, 2881000, 3201000, /**/12966500, 16400100, 20356300, 24865300, 29956500, /**/71316500, 83999600, 98016700, 113422300, 130270000, /**/148612400, 168501500, 189988600, 213124000, 237957700];

var Tsuccessrate = [5000, 5000, 4500, 4000, 4000, /**/4000, 4000, 4000, 4000, 3700, /**/3500, 3500, 300, 200, 100];
var Tkeeprate = [5000, 0, 0, 0, 0, /**/0, 0, 0, 0, 0, /**/0, 0, 0, 0, 0];
var Tdownrate = [0, 5000, 5500, 6000, 6000, /**/5820, 5700, 5580, 5400, 5355, /**/5200, 4875, 4850, 4900, 4950];
var Tdestroyrate = [0, 0, 0, 0, 0, /**/180, 300, 420, 600, 950, /**/1300, 1625, 4850, 4900, 4950];
var costtile = [55382200, 55382200, 55382200, 55382200, 55382200, /**/55382200, 55382200, 55382200, 55382200, 55382200, /**/55382200, 55382200, 55382200, 55382200, 55382200];

sf.cost100s = [41000, 81000, 121000, 161000, 201000, /**/241000, 281000, 321000];
sf.cost110s = [54200, 107500, 160700, 214000, 267200, /**/320400, 373700, 426900, 480200, 533400];
sf.cost120s = [70100, 139200, 208400, 277500, 346600, /**/415700, 484800, 554000, 623100, 692200, /**/2801600, 3543200, 4397700, 5371700, 6471400];
sf.cost130s = [88900, 176800, 264600, 352500, 440400, /**/528300, 616200, 704000, 791900, 879800, /**/3561700, 4504600, 5591100, 6829300, 8227500, /**/19586000, 23069100, 26918600, 31149300, 35776100];
sf.cost140s = [110800, 220500, 330300, 440000, 549800, /**/659600, 769300, 879100, 988800, 1098600, /**/4448200, 5625900, 6982900, 8529400, 10275700, /**/24462200, 28812500, 33620400, 38904500, 44683300, /**/50974700, 57796700, 65166700,73102200, 81620200];
sf.cost150s = [136000, 271000, 40600, 541000, 676000, /**/811000, 946000, 1081000, 1216000, 1351000, /**/5470800, 6919400, 8588400, 10490600, 12638500, /**/30084200, 35437900, 41351400, 47850600, 54958200, /**/62696400, 71087200, 80152000, 89912300, 100389000];
sf.cost160s = [164800, 328700, 492500, 656400, 820200, /**/984000, 1147900, 1311700, 1475600, 1639400, /**/6639400, 8397300, 10422900, 12731500, 15338200, /**/36514500, 43008300, 50185100, 58072700, 66698700, /**/76090000, 86273300, 97274600, 109120000, 121834900];
sf.cost200s = [321000, 641000, 961000, 1281000, 1601000, /**/1921000, 2241000, 2561000, 2881000, 3201000, /**/12966500, 16400100, 20356300, 24865300, 29956500, /**/71316500, 83999600, 98016700, 113422300, 130270000, /**/148612400, 168501500, 189988600, 213124000, 237957700];
sf.costtiles = [55382200, 55382200, 55382200, 55382200, 55382200, /**/55382200, 55382200, 55382200, 55382200, 55382200, /**/55382200, 55382200, 55382200, 55382200, 55382200];
module.exports = sf;