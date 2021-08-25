const sf = {};

sf.isSFready = function (A, B, C, D, E, F){
    var chkSF = 0;
    if(A != 99 && A != 100 && A != 110 && A != 120 && A != 130 && A != 140 && A != 150 && A != 160 && A != 200){
      chkSF = 1;
    }
    else{
      if(B < 0 || B > 25){
        chkSF = 2;
        if(B < 0){chkSF = 2001;}
        else{chkSF = 2002;}
      }
      else{
        if(A == 99 && B > 15){
          chkSF = 3;
        }
        else if(A == 100 && B > 8){
          chkSF = 4;
        }
        else if(A == 110 && B > 10){
          chkSF = 5;
        }
        else if(A == 120 && B > 15){
          chkSF = 6;
        }
        else if(A == 130 && B > 20){
          chkSF = 7;
        }
        else{
          if(C < B || C < 1 || C > 25){
            chkSF = 8;
            if(C < B){ chkSF = 8001;}
            else if(C < 1){ chkSF = 8002;}
            else {chksf = 8003;}
          }
          else if(A == 100 && C > 8){
            chkSF = 9;
          }
          else if(A == 110 && C > 10){
            chkSF = 10;
          }
          else if(A == 120 && C > 15){
            chkSF = 11;
          }
          else if(A == 130 && C > 20){
            chkSF = 12;
          }
          else{
            if(D < 0 || D > 1){
              chkSF = 13;
              if(D < 0){chkSF = 13001;}
              else {chkSF = 13002;}
            }
            else{
              if(E < 0 || E > 3){
                chkSF = 14;
                if(E < 0) {chkSF = 14001;}
                else {chkSF = 14002;}
              }
              else{
                if(F < 0 || F > 2){
                  chkSF = 15;
                  if(F < 0) {chkSF = 15001;}
                  else {chkSF = 15002;}
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
            case 1: //스타캐치
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
    if(A != 99){ sfrep += A + "제 장비 " + currentsf + "성 부터 " + destsf + "성 까지의 스타포스 시뮬레이션 결과\n";}
    else {sfrep += "타일런트 벨트 " + currentsf + "성 부터 " + destsf + "성 까지의 스타포스 시뮬레이션 결과\n";}

    while(currentsf < destsf){        //sfrep += currentsf + "성에서 " + (currentsf+1) + "성 강화시도, 결과 : ";
        if(E != 1){ sfmeso += costarr[currentsf];}
        else { sfmeso += costarr[currentsf] * 0.7;} //30%할인
        if((A != 99 && two100 == 2) || (A != 99 && E == 2 && (currentsf == 5 || currentsf == 10 || currentsf == 15))){  //찬스타임 //5,10,15 100%
            currentsf += 1; //sfrep += "찬스타임!\n";
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
        if(A != 99 && F == 1){  //12~17 파괴방지
            if(currentsf > 11 && currentsf < 17){
                sfmeso += costarr[currentsf];
                if(sfsf == 3) {sfsf = 2;}
            }
        }
        else if(A != 99 && F == 2){ //15~17파괴방지
            if(currentsf > 14 && currentsf < 17){
                sfmeso += costarr[currentsf];
                if(sfsf == 3) {sfsf = 2;}
            }
        }
        
        if(sfsf == 0){
            currentsf += 1;            //sfrep += "성공\n";
            sfsuccessCnt++;
            if(A != 99 && E == 3 && currentsf < 11){currentsf += 1;}    //10성이하 1+1
            two100 = 0;
            continue;
        }
        else if(sfsf == 1){            //sfrep += "유지\n";
            continue;
        }
        else if(sfsf == 2){
            currentsf -= 1;
            two100++;            //sfrep += "하락\n";
            sffailCnt++;
            continue;
        }
        else{
          sfdestroyCnt++;
          if(sfdestroyCnt > 300){
            sfrep += "파괴횟수가 300회가 넘어 시뮬레이션이 종료됩니다.\n";
            sfrep += "최종 결과 : " + currentsf + "성\n";
            break;
          }
            currentsf = 12;
            if(A == 99){currentsf = 0;}            //sfrep += "파괴\n";
            two100 = 0;
            continue;
        }        
    }

    sfrep += "소모메소 : " + numberWithCommas(sfmeso);
    sfrep += "메소\n성공횟수 : " + sfsuccessCnt;
    sfrep += "\n실패(하락)횟수 : " + sffailCnt;
    sfrep += "\n파괴횟수 : " + sfdestroyCnt;
    if(D == 1){ sfrep += "\n*스타캐치 적용";}
    if(A != 99 && E == 1){ sfrep += "\n*30% 할인 이벤트 적용";}
    else if(A != 99 && E == 2){ sfrep += "\n*5,10,15성 100% 이벤트 적용";}
    else if(A != 99 && E == 3){ sfrep += "\n*10성이하 1+1 이벤트 적용";}
    if(A != 99 && F == 1){ sfrep += "\n*12~17성 파괴방지 적용";}
    else if(A != 99 && F == 2){ sfrep += "\n*15~17성 파괴방지 적용";}
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