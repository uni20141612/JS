const wpa = {};

wpa.getaddop = function (weaponName){
    var wrep = ""; 
    var chkW = 1;
    var w130 = "쟈이힌 ";
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
        w130 += "가즈\n(57) "; w130 += weapon130[0];
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
        w130 += "피스톨\n(86) "; w130 += weapon130[1];
        w140 += "피스톨\n(90) "; w140 += weapon140[1];
        w150 += "첼리스카\n(125) "; w150 += weapon150[1];
        w160 += "포인팅건\n(150) "; w160 += weapon160[1];
        w200 += "피스톨\n(216) "; w200 += weapon200[1];       
        wGene += "피스톨\n(249) "; wGene += weaponGenesis[1];
        break;
      case "건틀렛리볼버":
      case "블래스터":
      case "블래":
        w130 += "예거\n(86) "; w130 += weapon130[1];
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
        w130 += "클로\n(86) "; w130 += weapon130[1];
        w140 += "클로\n(90) "; w140 += weapon140[1];
        w150 += "펜리르탈론\n(128) "; w150 += weapon150[2];
        w160 += "블로우너클\n(154) "; w160 += weapon160[2];
        w200 += "클로\n(221) "; w200 += weapon200[2];       
        wGene += "클로\n(255) "; wGene += weaponGenesis[2];
        break;
      case "에너지소드":
      case "제논":
        w130 += "에너지체인\n(86) "; w130 += weapon130[1];
        w140 += "에너지체인\n(90) "; w140 += weapon140[1];
        w150 += "스플릿엣지\n(128) "; w150 += weapon150[2];
        w160 += "에너지체인\n(154) "; w160 += weapon160[2];
        w200 += "에너지체인\n(221) "; w200 += weapon200[2];       
        wGene += "에너지체인\n(255) "; wGene += weaponGenesis[2];
        break;
      case "소울슈터":
      case "엔젤릭버스터":
      case "엔버":
        w130 += "드래곤소울\n(86) "; w130 += weapon130[1];
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
        w130 += "대거\n(110) "; w130 += weapon130[2];
        w140 += "대거\n(115) "; w140 += weapon140[3];
        w150 += "다마스커스\n(160) "; w150 += weapon150[4];
        w160 += "슬래셔\n(192) "; w160 += weapon160[4];
        w200 += "대거\n(276) "; w200 += weapon200[4];       
        wGene += "대거\n(318) "; wGene += weaponGenesis[4];
        break;
      case "듀얼보우건":
      case "메르세데스":
      case "메르":
        w130 += "듀얼보우건\n(110) "; w130 += weapon130[2];
        w140 += "듀얼보우건\n(115) "; w140 += weapon140[3];
        w150 += "듀얼윈드윙\n(160) "; w150 += weapon150[4];
        w160 += "듀얼보우건\n(192) "; w160 += weapon160[4];
        w200 += "듀얼보우건\n(276) "; w200 += weapon200[4];       
        wGene += "듀얼보우건\n(318) "; wGene += weaponGenesis[4];
        break;
      case "부채":
      case "호영":
        w130 += "위선\n(110) "; w130 += weapon130[2];
        w140 += "거선\n(115) "; w140 += weapon140[3];
        w150 += "용선\n(160) "; w150 += weapon150[4];
        w160 += "괴선\n(192) "; w160 += weapon160[4];
        w200 += "초선\n(276) "; w200 += weapon200[4];       
        wGene += "창세선\n(318) "; wGene += weaponGenesis[4];
        break;            
      case "브레스슈터":
      case "카인":
        w130 += "브레스 슈터\n(110) "; w130 += weapon130[2];
        w140 += "브레스 슈터\n(115) "; w140 += weapon140[3];
        w150 += "브레스 슈터\n(160) "; w150 += weapon150[4];
        w160 += "브레스 슈터\n(192) "; w160 += weapon160[4];
        w200 += "브레스 슈터\n(276) "; w200 += weapon200[4];       
        wGene += "브레스 슈터\n(318) "; wGene += weaponGenesis[4];
        break;
      case "에인션트보우":
      case "패스파인더":
      case "패파":
        w130 += "에인션트 보우\n(110) "; w130 += weapon130[2];
        w140 += "에인션트 보우\n(115) "; w140 += weapon140[3];
        w150 += "에인션트 보우\n(160) "; w150 += weapon150[4];
        w160 += "에인션트 보우\n(192) "; w160 += weapon160[4];
        w200 += "에인션트 보우\n(276) "; w200 += weapon200[4];       
        wGene += "에인션트 보우\n(318) "; wGene += weaponGenesis[4];
        break;
      case "체인":
      case "카데나":          
        w130 += "체인\n(110) "; w130 += weapon130[2];  
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
        w130 += "보우\n(110) "; w130 += weapon130[2];
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
        w130 += "크로스보우\n(113) "; w130 += weapon130[3];
        w140 += "크로스보우\n(118) "; w140 += weapon140[4];
        w150 += "윈드윙슈터\n(164) "; w150 += weapon150[5];
        w160 += "크로스보우\n(197) "; w160 += weapon160[5];
        w200 += "크로스보우\n(283) "; w200 += weapon200[5];       
        wGene += "크로스보우\n(326) "; wGene += weaponGenesis[5];
        break;
      case "케인":
      case "팬텀":
        w130 += "케인\n(113) "; w130 += weapon130[3];
        w140 += "케인\n(118) "; w140 += weapon140[4];
        w150 += "클레르시엘\n(164) "; w150 += weapon150[5];
        w160 += "핀쳐케인\n(197) "; w160 += weapon160[5];
        w200 += "케인\n(283) "; w200 += weapon200[5];       
        wGene += "케인\n(326) "; wGene += weaponGenesis[5];
        break;
      case "한손검":
      case "미하일":
        w130 += "세이버\n(113) "; w130 += weapon130[3];
        w140 += "세이버\n(118) "; w140 += weapon140[4];
        w150 += "미스틸테인\n(164) "; w150 += weapon150[5];
        w160 += "세이버\n(197) "; w160 += weapon160[5];
        w200 += "세이버\n(283) "; w200 += weapon200[5];       
        wGene += "세이버\n(326) "; wGene += weaponGenesis[5];
        break;
      case "한손도끼":
        w130 += "엑스\n(113) "; w130 += weapon130[3];
        w140 += "엑스\n(118) "; w140 += weapon140[4];
        w150 += "트윈클리버\n(164) "; w150 += weapon150[5];
        w160 += "엑스\n(197) "; w160 += weapon160[5];
        w200 += "엑스\n(283) "; w200 += weapon200[5];       
        wGene += "엑스\n(326) "; wGene += weaponGenesis[5];
        break;
      case "한손둔기":
      case "데몬슬레이어":
      case "데슬":
        w130 += "해머\n(113) "; w130 += weapon130[3];
        w140 += "해머\n(118) "; w140 += weapon140[4];
        w150 += "골디언해머\n(164) "; w150 += weapon150[5];
        w160 += "비트해머\n(197) "; w160 += weapon160[5];
        w200 += "해머\n(283) "; w200 += weapon200[5];       
        wGene += "해머\n(326) "; wGene += weaponGenesis[5];
        break;
      case "데스페라도":
      case "데몬어벤져":
      case "데벤져":
        w130 += "데스페라도\n(116) "; w130 += weapon130[4];
        w140 += "데스페라도\n(122) "; w140 += weapon140[5];
        w150 += "데스브링어\n(171) "; w150 += weapon150[6];
        w160 += "데스페라도\n(205) "; w160 += weapon160[6];
        w200 += "데스페라도\n(295) "; w200 += weapon200[6];       
        wGene += "데스페라도\n(340) "; wGene += weaponGenesis[6];
        break;
      case "두손검":
      case "히어로":
        w130 += "투핸드소드\n(116) "; w130 += weapon130[4];
        w140 += "투핸드소드\n(122) "; w140 += weapon140[5];
        w150 += "페니텐시아\n(171) "; w150 += weapon150[6];
        w160 += "브로드세이버\n(205) "; w160 += weapon160[6];
        w200 += "투핸드소드\n(295) "; w200 += weapon200[6];       
        wGene += "투핸드소드\n(340) "; wGene += weaponGenesis[6];
        break;
      case "튜너":
      case "아델":
        w130 += "로열티\n(116) "; w130 += weapon130[4];
        w140 += "리스트레인트\n(122) "; w140 += weapon140[5];
        w150 += "포기브니스\n(171) "; w150 += weapon150[6];
        w160 += "튜너\n(205) "; w160 += weapon160[6];
        w200 += "튜너\n(295) "; w200 += weapon200[6];       
        wGene += "튜너\n(340) "; wGene += weaponGenesis[6];
        break;
      case "폴암":
      case "아란":
        w130 += "핼버드\n(117) "; w130 += weapon130[5];
        w140 += "핼버드\n(122) "; w140 += weapon140[5];
        w150 += "문글레이브\n(153) "; w150 += weapon150[3];
        w160 += "핼버드\n(184) "; w160 += weapon160[3];
        w200 += "폴암\n(264) "; w200 += weapon200[3];       
        wGene += "폴암\n(304) "; wGene += weaponGenesis[3];
        break;
      case "핸드캐논":
      case "캐논슈터":
      case "캐슈":
        w130 += "시즈건\n(117) "; w130 += weapon130[5];
        w140 += "시즈건\n(122) "; w140 += weapon140[5];
        w150 += "러스터캐논\n(175) "; w150 += weapon150[7];
        w160 += "블래스트캐논\n(210) "; w160 += weapon160[7];
        w200 += "시즈건\n(302) "; w200 += weapon200[7];       
        wGene += "시즈건\n(348) "; wGene += weaponGenesis[7];
        break;
      case "두손도끼":
        w130 += "투핸드엑스\n(118) "; w130 += weapon130[6];
        w140 += "투핸드엑스\n(124) "; w140 += weapon140[6];
        w150 += "배틀클리버\n(171) "; w150 += weapon150[6];
        w160 += "브로드엑스\n(205) "; w160 += weapon160[6];
        w200 += "투핸드엑스\n(295) "; w200 += weapon200[6];       
        wGene += "투핸드엑스\n(340) "; wGene += weaponGenesis[6];
        break;
      case "두손둔기":
      case "팔라딘":
      case "팔라":
        w130 += "투핸드해머\n(118) "; w130 += weapon130[6];
        w140 += "투핸드해머\n(124) "; w140 += weapon140[6];
        w150 += "라이트닝어\n(171) "; w150 += weapon150[6];
        w160 += "브로드해머\n(205) "; w160 += weapon160[6];
        w200 += "투핸드해머\n(295) "; w200 += weapon200[6];       
        wGene += "투핸드해머\n(340) "; wGene += weaponGenesis[6];
        break;
      case "창":
      case "다크나이트":
      case "닼나":
        w130 += "스피어\n(118) "; w130 += weapon130[6];
        w140 += "스피어\n(124) "; w140 += weapon140[6];
        w150 += "브류나크\n(171) "; w150 += weapon150[6];
        w160 += "피어싱스피어\n(205) "; w160 += weapon160[6];
        w200 += "스피어\n(295) "; w200 += weapon200[6];       
        wGene += "스피어\n(340) "; wGene += weaponGenesis[6];
        break;
      case "매직건틀렛":
      case "일리움":
        w130 += "매직 건틀렛\n(140) "; w130 += weapon130[7];
        w140 += "매직 건틀렛\n(153) "; w140 += weapon140[7];
        w150 += "매직 건틀렛\n(201) "; w150 += weapon150[8];
        w160 += "매직 건틀렛\n(241) "; w160 += weapon160[8];
        w200 += "매직 건틀렛\n(347) "; w200 += weapon200[8];       
        wGene += "매직 건틀렛\n(400) "; wGene += weaponGenesis[8];
        break;
      case "샤이닝로드":
      case "루미너스":
      case "루미":
        w130 += "샤이닝로드\n(140) "; w130 += weapon130[7];
        w140 += "샤이닝로드\n(153) "; w140 += weapon140[7];
        w150 += "마나크래들\n(201) "; w150 += weapon150[8];
        w160 += "샤이닝로드\n(241) "; w160 += weapon160[8];
        w200 += "샤이닝로드\n(347) "; w200 += weapon200[8];       
        wGene += "샤이닝로드\n(400) "; wGene += weaponGenesis[8];
        break;
      case "완드":
      case "라라":
        w130 += "완드\n(140) "; w130 += weapon130[7];
        w140 += "완드\n(153) "; w140 += weapon140[7];
        w150 += "마나테이커\n(201) "; w150 += weapon150[8];
        w160 += "스펠링완드\n(241) "; w160 += weapon160[8];
        w200 += "완드\n(347) "; w200 += weapon200[8];       
        wGene += "완드\n(400) "; wGene += weaponGenesis[8];
        break;
      case "ESP리미터":
      case "키네시스":
      case "키네":
        w130 += "ESP리미터\n(140) "; w130 += weapon130[7];
        w140 += "ESP리미터\n(153) "; w140 += weapon140[7];
        w150 += "ESP리미터\n(201) "; w150 += weapon150[8];
        w160 += "ESP리미터\n(241) "; w160 += weapon160[8];
        w200 += "ESP리미터\n(347) "; w200 += weapon200[8];       
        wGene += "ESP리미터\n(400) "; wGene += weaponGenesis[8];
        break;
      case "스태프":
      case "배틀메이지":
        w130 += "스태프\n(142) "; w130 += weapon130[7];
        w140 += "스태프\n(155) "; w140 += weapon140[8];
        w150 += "마나크라운\n(204) "; w150 += weapon150[9];
        w160 += "스펠링스태프\n(245) "; w160 += weapon160[9];
        w200 += "스태프\n(353) "; w200 += weapon200[9];       
        wGene += "스태프\n(406) "; wGene += weaponGenesis[9];
        break;
      case "태도":
      case "제로":
      case "알파":
        w130 = "라즐리(5형)\n(117) "; w130 += weapon130[8];
        w140 = "라즐리(6형)\n(135) "; w140 += weapon140[9];
        w150 = "라즐리(7형)\n(169) "; w150 += weapon150[10];
        w160 = "라즐리(8형)\n(203) "; w160 += weapon160[10];
        w200 = "라즐리(9형)\n(293) "; w200 += weapon200[10];       
        wGene = "제네시스 라즐리\n(337) "; wGene += weaponGenesis[10];
        chkW = 3;
        break;
      case "대검":
      case "베타":
        w130 = "라피스(5형)\n(121) "; w130 += weapon130[8];
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
      wrep = "그런 이름의 무기는 없습니다.";
    }
    else if(chkW == 2){
      wrep = "Lv150. " + w150;
    }
    else if(chkW == 3){
      wrep = "Lv140. " + w130 + "\n\nLv150. " + w140 + "\n\nLv170. " + w150 + "\n\nLv180. " + w160 + "\n\nLv200. " + w200 + "\n\nLv200. " + wGene;
    }
    else{
      wrep = "Lv130. " + w130 + "\n\nLv140. " + w140 + "\n\nLv150. " + w150 + "\n\nLv160. " + w160 + "\n\nLv200. " + w200 + "\n\nLv200. " + wGene;
    }
    return wrep;
};
var weapon130 = [
  "3/6/9/13/17/20/24", //아대 57
  "4/8/13/19/26/31/36", //건, 건틀렛리볼버, 너클, 에너지소드, 소울슈터 86
  "5/10/17/24/33/39/46", //단검, 듀얼보우건, 부채, 브레스슈터, 에인션트보우, 체인, 활 110
  "5/11/17/25/34/40/47", //석궁, 케인, 한손검, 한손도끼, 한손둔기 113
  "5/11/17/25/35/41/48", //데스페라도, 두손검, 튜너 116
  "5/11/18/26/35/41/48", //핸드캐논, 폴암 117
  "5/11/18/26/35/42/49", //두손도끼, 두손둔기, 창 118
  "6/13/21/30/41/50/58", //매직건틀렛, 샤이닝로드, 완드, ESP리미터 140
  "6/13/21/31/42/50/59", //스태프 142
  "5/11/18/26/36" //태도,대검(5형) 117/121
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
module.exports = wpa;