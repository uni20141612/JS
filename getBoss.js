const gB = {};
gB.getBoss = function (boss){
  var rep = "-";
  var chkboss = -1;
      switch(boss)
      {
        case "목록":
          rep = FileStream.read("storage/emulated/0/kakao/Bots/보마봇/boss.txt");    
          rep.toString();
          rep = rep.replace(/ㅁ/g, '\n');      
          chkboss = 1000;
          break;
        case "이지 자쿰":
        case "이지자쿰":
          chkboss = 0;
          break;
        case "노말 자쿰":
        case "노말자쿰":
        case "노멀 자쿰":
        case "노멀자쿰":
        case "자쿰":
          chkboss = 1;
          break;
        case "피아누스":
          chkboss = 2;
          break;
        case "노말 반반":
        case "노멀 반반":
        case "노말반반":
        case "노멀반반":
        case "반반":
          chkboss = 3;
          break;
        case "노말 피에르":
        case "노말피에르":
        case "노멀 피에르":
        case "노멀피에르":
        case "노말 삐에르":
        case "노말삐에르":
        case "노멀 삐에르":
        case "노멀삐에르":
        case "피에르":
        case "삐에르":
          chkboss = 4;
          break;
        case "노말 블러디 퀸":
        case "노말 블러디퀸":
        case "노말 블퀸":
        case "노말 블러디 퀸":
        case "노말 블러디퀸":
        case "노말 블퀸":
        case "노말블러디퀸":
        case "노멀블러디퀸":
        case "노블퀸":
        case "블러디 퀸":
        case "블러디퀸":
        case "블퀸":
          chkboss = 5;
          break;
        case "이지 파풀라투스":
        case "이지파풀라투스":
        case "이지파풀":
          chkboss = 6;
          break;
        case "이지 매그너스":
        case "이지매그너스":
        case "이지매그":
          chkboss = 7;
          break;
        case "노말 힐라":
        case "노말힐라":
        case "노멀 힐라":
        case "노멀힐라":
        case "힐라":
          chkboss = 8;
          break;
        case "노말 벨룸":
        case "노말벨룸":
        case "노멀 벨룸":
        case "노멀벨룸":
        case "벨룸":
          chkboss = 9;
          break;
        case "이지 반 레온":
        case "이지 반레온":
        case "이지반레온":
        case "이지 반 래온":
        case "이지 반래온":
        case "이지반래온":
          chkboss = 10;
          break;
        case "이지 혼테일":
        case "이지혼테일":
        case "이지혼텔":
          chkboss = 11;
          break;
        case "카웅":
          chkboss = 12;
          break;
        case "이지 아카이럼":
        case "이지아카이럼":
          chkboss = 13;
          break;
        case "노말 혼테일":
        case "노말혼테일":
        case "노멀 혼테일":
        case "노멀혼테일":
        case "노말 혼텔":
        case "노말혼텔":
        case "노멀 혼텔":
        case "노멀혼텔":
        case "혼테일":
        case "혼텔":
          chkboss = 14;
          break;
        case "노말 매그너스":
        case "노말매그너스":
        case "노멀 매그너스":
        case "노멀매그너스":
        case "매그너스":
        case "노매그":
        case "매그":
          chkboss = 15;
          break;
        case "노말 반 레온":
        case "노말 반레온":
        case "노말반레온":
        case "노멀 반 레온":
        case "노멀 반레온":
        case "노멀반레온":
        case "노말 반 래온":
        case "노말 반래온":
        case "노말반래온":
        case "노멀 반 래온":
        case "노멀 반래온":
        case "노멀반래온":
        case "반 레온":
        case "반레온":
        case "반 래온":
        case "반래온":
          chkboss = 16;
          break;
        case "노말 핑크빈":
        case "노말핑크빈":
        case "노멀 핑크빈":
        case "노멀핑크빈":
        case "노핑":
        case "핑크빈":
        case "굉크넨":
          chkboss = 17;
          break;
        case "하드 반 레온":
        case "하드 반레온":
        case "하드반레온":
        case "하드 반 래온":
        case "하드 반래온":
        case "하드반래온":
          chkboss = 18;
          break;
        case "이지 시그너스":
        case "이지시그너스":
        case "이시그":
          chkboss = 19;
          break;
        case "노말 아카이럼":
        case "노말아카이럼":
        case "노멀 아카이럼":
        case "노멀아카이럼":
        case "아카이럼":
          chkboss = 20;
          break;
        case "노말 파풀라투스":
        case "노말파풀라투스":
        case "노멀 파풀라투스":
        case "노멀파풀라투스":
        case "노말 파풀":
        case "노말파풀":
        case "노멀 파풀":
        case "노멀파풀":
        case "파풀라투스":
        case "파풀":
          chkboss = 21;
          break;
        case "하드 힐라":
        case "하드힐라":
        case "하힐":
          chkboss = 22;
          break;
        case "카오스 혼테일":
        case "카오스혼테일":
        case "카텔":
        case "카혼텔":
          chkboss = 23;
          break;
        case "노말 시그너스":
        case "노말시그너스":
        case "노멀 시그너스":
        case "노멀시그너스":
        case "노말 시그":
        case "노말시그":
        case "노멀 시그":
        case "노멀시그":
        case "노시그":
        case "시그너스":
        case "시그":
          chkboss = 24;
          break;
        case "카오스 피에르":
        case "카오스피에르":
        case "카오스 삐에르":
        case "카오스삐에르":
        case "카피":
        case "카삐":
          chkboss = 25;
          break;
        case "카오스 자쿰":
        case "카오스자쿰":
        case "카쿰":
          chkboss = 26;
          break;
        case "카오스 반반":
        case "카오스반반":
        case "카반반":
        case "카반":
          chkboss = 27;
          break;
        case "하드 매그너스":
        case "하드매그너스":
        case "하매그":
        case "하매":
          chkboss = 28;
          break;
        case "카오스 블러디 퀸":
        case "카오스 블러디퀸":
        case "카오스블러디퀸":
        case "카오스 블퀸":
        case "카퀸":
        case "카블퀸":
          chkboss = 29;
          break;
        case "카오스 벨룸":
        case "카오스벨룸":
        case "카벨룸":
        case "카벨":
          chkboss = 30;
          break;
        case "카오스 핑크빈":
        case "카오스핑크빈":
        case "카핑빈":
        case "카핑":
          chkboss = 31;
          break;
        case "카오스 파풀라투스":
        case "카오스파풀라투스":
        case "카파풀":
          chkboss = 32;
          break;
        case "불꽃 늑대":
        case "불꽃늑대":
        case "불늑":
          chkboss = 33;
          break;
        case "도로시":
        case "시드":
          chkboss = 34;
          break;
        case "노말 데미안":
        case "노말데미안":
        case "노멀 데미안":
        case "노멀데미안":
        case "노데미":
        case "데미안":
        case "데미":
          chkboss = 35;
          break;
        case "노말 스우":
        case "노말스우":
        case "노멀 스우":
        case "노멀스우":
        case "노스우":
        case "스우":
          chkboss = 36;
          break;        
        case "우르스":
        case "우루스":
          chkboss = 37;
          break;
        case "이지 루시드":
        case "이지루시드":
        case "이루시":
        case "이루":
          chkboss = 38;
          break;
        case "노말 루시드":
        case "노말루시드":
        case "노멀 루시드":
        case "노멀루시드":
        case "노루시":
        case "노루":
        case "루시드":
        case "루시":
          chkboss = 39;
          break;
        case "노말 윌":
        case "노말윌":
        case "노멀 윌":
        case "노멀윌":
        case "노윌":
        case "윌":
          chkboss = 40;
          break;
        case "노말 거대 괴수 더스크":
        case "노말 거대괴수 더스크":
        case "노말 거대괴수더스크":
        case "노말거대괴수더스크":
        case "노멀 거대 괴수 더스크":
        case "노멀 거대괴수 더스크":
        case "노멀 거대괴수더스크":
        case "노멀거대괴수더스크":
        case "노말 더스크":
        case "노말더스크":
        case "노멀 더스크":
        case "노멀더스크":
        case "노더스크":
        case "노더":
        case "거대 괴수 더스크":
        case "거대괴수 더스크":
        case "거대괴수더스크":
        case "거대 괴수":
        case "거대괴수":
        case "더스크":
          chkboss = 41;
          break;
        case "노말 친위대장 듄켈":
        case "노말 친위대장듄켈":
        case "노말친위대장듄켈":
        case "노멀 친위대장 듄켈":
        case "노멀 친위대장듄켈":
        case "노멀친위대장듄켈":
        case "노말 듄켈":
        case "노말듄켈":
        case "노멀 듄켈":
        case "노멀듄켈":
        case "노듄켈":
        case "노듄":
        case "친위대장 듄켈":
        case "친위대장듄켈":
        case "듄켈":
          chkboss = 42;
          break;
        case "하드 스우":
        case "하드스우":
        case "하스우":
          chkboss = 43;
          break;
        case "하드 데미안":
        case "하드데미안":
        case "하데미":
          chkboss = 44;
          break;
        case "하드 루시드":
        case "하드루시드":
        case "하루시":
          chkboss = 45;
          break;
        case "카오스 거대 괴수 더스크":
        case "카오스 거대괴수 더스크":
        case "카오스 거대괴수더스크":
        case "카오스거대괴수더스크":
        case "카오스 더스크":
        case "카오스더스크":
        case "카오스 거대 괴수":
        case "카오스 거대 괴수":
        case "카오스거대괴수":
        case "카더스크":
        case "카더":
          chkboss = 46;
          break;
        case "하드 윌":
        case "하드윌":
        case "하윌":
          chkboss = 47;
          break;
        case "하드 친위대장 듄켈":
        case "하드 친위대장듄켈":
        case "하드친위대장듄켈":
        case "하드 듄켈":
        case "하드듄켈":
        case "하듄켈":
        case "하듄":
          chkboss = 48;
          break;
        case "진 힐라":
        case "진힐라":
        case "진힐":
        case "하드 진 힐라":
        case "하드 진힐라":
        case "하드진힐라":
        case "하진힐라":
        case "하진힐":
          chkboss = 49;
          break;
        case "선택받은 세렌":
        case "선택받은세렌":
        case "세렌":
        case "하드 선택받은 세렌":
        case "하드 선택받은세렌":
        case "하드선택받은세렌":
        case "하드 세렌":
        case "하드세렌":
          chkboss = 50;
          break;
        case "검은 마법사":
        case "검은마법사":
        case "검마":
        case "검멘":
          chkboss = 51;
          break;
        case "아르카누스":
        case "수로":
        case "길드":          
          chkboss = 52;
          break;
        case "가디언 엔젤 슬라임":
        case "가디언 엔젤슬라임":
        case "가디언엔젤 슬라임":
        case "가디언엔젤슬라임":
        case "가엔슬":
        case "슬라임":
        case "노말 가디언 엔젤 슬라임":
        case "노말 가디언 엔젤슬라임":
        case "노말 가디언엔젤 슬라임":
        case "노말가디언엔젤슬라임":
        case "노멀 가디언 엔젤 슬라임":
        case "노멀 가디언 엔젤슬라임":
        case "노멀 가디언엔젤 슬라임":
        case "노멀가디언엔젤슬라임":
        case "노말 가엔슬":
        case "노말가엔슬":
        case "노멀 가엔슬":
        case "노멀가엔슬":
        case "노말 슬라임":
        case "노말슬라임":
        case "노멀 슬라임":
        case "노멀슬라임":
          chkboss = 53;
          break;
        case "카오스 가디언 엔젤 슬라임":
        case "카오스 가디언 엔젤슬라임":
        case "카오스 가디언엔젤 슬라임":
        case "카오스가디언엔젤슬라임":
        case "카오스가엔슬":
        case "카가엔슬":
        case "카엔슬":
        case "카오스 슬라임":
        case "카오스슬라임":
        case "카슬":
          chkboss = 54;
          break;
        case "마왕 발록":
        case "마왕발록":
        case "발록":
          chkboss = 55;
          break;
        case "이지 윌":
        case "이지윌":
        case "이윌":
          chkboss = 56;
          break;
        case "노멀 진힐라":
        case "노말 진힐라":
        case "노멀진힐라":
        case "노말진힐라":
        case "노진힐라":
        case "노진힐":
          chkboss = 57;
          break;
        case "노말 선택받은 세렌":
        case "노멀 선택받은 세렌":
        case "노말선택받은세렌":
        case "노멀선택받은세렌":
        case "노말 세렌":
        case "노멀 세렌":
        case "노말세렌":
        case "노멀세렌":
        case "노세렌":
        case "세렌":
          chkboss = 58;
          break;
        default:
          rep = "그런 보스는 없습니다.";
          chkboss = -1;
      }
      if(rep == "-" && boss != "목록"){return chkboss;}
      else{return rep;}
};
gB.getBossimage = function (ind){
    rep = "";
    switch(ind){
      case 0:
      case 1:
      case 26:
        rep = "https://i.imgur.com/TSLWzg8.png";
        break;
      case 2:
        rep = "https://i.imgur.com/ebkdf5h.png";
        break;
      case 3:
      case 27:
        rep = "https://i.imgur.com/ioTLuzJ.png";
        break;
      case 4:
      case 25:
        rep = "https://i.imgur.com/spu9Upy.png";
        break;
      case 5:
      case 29:
        rep = "https://i.imgur.com/1t101Gg.png";
        break;
      case 6:
      case 21:
      case 32:
        rep = "https://i.imgur.com/RVOFVJv.png";
        break;
      case 7:
      case 15:
      case 28:
        rep = "https://i.imgur.com/Hxw8G1z.png";
        break;
      case 8:
      case 22:
        rep = "https://i.imgur.com/erNHjcU.png";
        break;
      case 9:
      case 30:
        rep = "https://i.imgur.com/xanCa5m.png";
        break;
      case 10:
      case 16:
      case 18:
        rep = "https://i.imgur.com/4SA6j1E.png";
        break;
      case 11:
      case 14:
      case 23:
        rep = "https://i.imgur.com/p1TTYRC.png";
        break;
      case 12:
        rep = "https://i.imgur.com/dh2l2Sw.png";
        break;    
      case 13:
      case 20:
        rep = "https://i.imgur.com/BT1MDPf.png";
        break;
      case 17:
      case 31:
        rep = "https://i.imgur.com/nQBZNJ4.png";
        break;
      case 19:
      case 24:
        rep = "https://i.imgur.com/FYnZg2d.png";
        break;
      case 33:
        rep = "https://i.imgur.com/1iwWhMh.jpeg";
        break;
      case 34:
        rep = "https://i.imgur.com/XpZoj4e.jpeg";
        break;
      case 35:
      case 44:
        rep = "https://i.imgur.com/fMpbaPt.png";
        break;
      case 36:
      case 43:
        rep = "https://i.imgur.com/QVFWnW7.png";
        break;
      case 37:
        rep = "https://i.imgur.com/6BUgBg0.png";
        break;
      case 38:
      case 39:
      case 45:
        rep = "https://i.imgur.com/bNGNPFg.png";
        break;
      case 40:
      case 47:
      case 56:
        rep = "https://i.imgur.com/DXL2K99.png";
        break;
      case 41:
      case 46:
        rep = "https://i.imgur.com/P0fg610.png";
        break;
      case 42:
      case 48:
        rep = "https://i.imgur.com/cCnCDJG.png";
        break;
      case 49:
      case 57:
        rep = "https://i.imgur.com/fMTHRN8.png";
        break;
      case 50:
      case 58:
        rep = "https://i.imgur.com/6dOgp7P.png";
        break;
      case 51:
        rep = "https://i.imgur.com/A06jBpZ.png";
        break;
      case 52:
        rep = "https://i.imgur.com/MK89a8i.jpeg";
        break;
      case 53:
      case 54:
        rep = "https://i.imgur.com/fwuYvah.png";
        break;
      case 55:
        rep = "https://i.imgur.com/GZlQaTV.png";
        break;
    }
    return rep;
};
gB.getBossimage2 = function (ind){
    rep = "";
    switch(ind){
      case 0:
      case 1:
      case 26:
        rep = "https://i.imgur.com/bbagYad.png";
        break;
      case 2:
        rep = "https://i.imgur.com/y2dmY36.png";
        break;
      case 3:
      case 27:
        rep = "https://i.imgur.com/4slC7CW.png";
        break;
      case 4:
      case 25:
        rep = "https://i.imgur.com/HyoNNGc.png";
        break;
      case 5:
      case 29:
        rep = "https://i.imgur.com/IDRrpEE.png";
        break;
      case 6:
      case 21:
      case 32:
        rep = "https://i.imgur.com/rvEBVeF.png";
        break;
      case 7:
      case 15:
      case 28:
        rep = "https://i.imgur.com/yulDfEg.png";
        break;
      case 8:
      case 22:
        rep = "https://i.imgur.com/MiRDmwF.png";
        break;
      case 9:
      case 30:
        rep = "https://i.imgur.com/YlUOiHD.png";
        break;
      case 10:
      case 16:
      case 18:
        rep = "https://i.imgur.com/635qzz6.png";
        break;
      case 11:
      case 14:
      case 23:
        rep = "https://i.imgur.com/Mz7lM7O.png";
        break;
      case 12:
        rep = "https://i.imgur.com/OTlH1oE.png";
        break;    
      case 13:
      case 20:
        rep = "https://i.imgur.com/teWlCaO.png";
        break;
      case 17:
      case 31:
        rep = "https://i.imgur.com/WTZoTm8.png";
        break;
      case 19:
      case 24:
        rep = "https://i.imgur.com/Fiyn1pz.png";
        break;
      case 33:
        rep = "https://i.imgur.com/zgGsUhm.png";
        break;
      case 34:
        rep = "https://i.imgur.com/gvifVDQ.png";
        break;
      case 35:
      case 44:
        rep = "https://i.imgur.com/Ktg1Txg.png";
        break;
      case 36:
      case 43:
        rep = "https://i.imgur.com/Z414Igv.png";
        break;
      case 37:
        rep = "https://i.imgur.com/lIsaWvF.png";
        break;
      case 38:
      case 39:
      case 45:
        rep = "https://i.imgur.com/3gZO26H.png";
        break;
      case 40:
      case 47:
      case 56:
        rep = "https://i.imgur.com/wi6UdG3.png";
        break;
      case 41:
      case 46:
        rep = "https://i.imgur.com/FtmXWBn.png";
        break;
      case 42:
      case 48:
        rep = "https://i.imgur.com/AcsixrM.png";
        break;
      case 49:
      case 57:
        rep = "https://i.imgur.com/yGlqSFc.png";
        break;
      case 50:
      case 58:
        rep = "https://i.imgur.com/oFVIOwp.png";
        break;
      case 51:
        rep = "https://i.imgur.com/w96GuWU.png";
        break;
      case 52:
        rep = "https://i.imgur.com/U34OzgX.png";
        break;
      case 53:
      case 54:
        rep = "https://i.imgur.com/q21gtVB.png";
        break;
      case 55:
        rep = "https://i.imgur.com/h8hDBfG.png";
        break;
    }
    return rep;
};
gB.getBossHP = function (ind){
    rep = "";
    switch(ind){
      case 0:
        rep = "220만 / 200,000메소";  //이지 자쿰
        break;
      case 1:
        rep = "700만 / 612,500메소";  //노말 자쿰
        break;
      case 2:
        rep = "좌:2400만 / 우:3000만";  //피아누스
        break;
      case 3:
        rep = "3.15억 / 968,000메소"; //노말 반반
        break;
      case 4:
        rep = "3.15억 / 968,000메소"; //노말 피에르
        break;
      case 5:
        rep = "3.15억 / 968,000메소"; //노말 블러디 퀸
        break;
      case 6:
        rep = "4억 / 684,500메소";  //이지 파풀라투스
        break;
      case 7:
        rep = "4억 / 684,500메소";  //이지 매그너스
        break;
      case 8:
        rep = "5억 / 800,000메소";  //노말 힐라
        break;
      case 9:
        rep = "5.5억 / 968,500메소";  //노말 벨룸
        break;
      case 10:
        rep = "7억 / 1,058,000메소";  //이지 반 레온
        break;
      case 11:
        rep = "10.18억 / 882,000메소";  //이지 혼테일
        break;
      case 12:
        rep = "16.8억 / 1,250,000메소"; //카웅
        break;
      case 13:
        rep = "21억 / 1,152,000메소"; //이지 아카이럼
        break;
      case 14:
        rep = "27.5억 / 1,012,500메소"; //노말 혼테일
        break;
      case 15:
        rep = "60억 / 2,592,000메소"; //노말 매그너스
        break;
      case 16:
        rep = "63억 / 1,458,000메소"; //노말 반 레온
        break;
      case 17:
        rep = "76.5억 / 1,404,000메소"; //노말 핑크빈
        break;
      case 18:
        rep = "105억 / 2,450,000메소";  //하드 반 레온
        break;
      case 19:
        rep = "105억 9,112,500메소";  //이지 시그너스
        break;
      case 20:
        rep = "126억 / 2,520,000메소";  //노말 아카이럼
        break;
      case 21:
        rep = "166억 / 2,664,500메소";  //노말 파풀라투스
        break;
      case 22:
        rep = "168억 / 11,250,000메소"; //하드 힐라
        break;
      case 23:
        rep = "266억 / 1,352,000메소";  //카오스 혼테일
        break;
      case 24:
        rep = "630억 / 14,450,000메소"; //노말 시그너스
        break;
      case 25:
        rep = "800억 / 16,200,000메소"; //카오스 피에르
        break;
      case 26:
        rep = "840억 / 16,200,000메소"; //카오스 자쿰
        break;
      case 27:
        rep = "1000억 / 16,200,000메소";  //카오스 반반
        break;
      case 28:
        rep = "1200억 / 19,012,500메소";  //하드 매그너스
        break;
      case 29:
        rep = "1400억 / 16,200,000메소";  //카오스 블러디 퀸
        break;
      case 30:
        rep = "2000억 / 21,012,500메소";  //카오스 벨룸
        break;
      case 31:
        rep = "2037억 / 12,800,000메소";  //카오스 핑크빈
        break;
      case 32:
        rep = "5040억 / 26,450,000메소";  //카오스 파풀라투스
        break;
      case 33:
        rep = "6000억"; //불꽃늑대
        break;
      case 34:
        rep = "8400억"; //도로시
        break;
      case 35:
        rep = "8400억ㆍ3600억 / 33,800,000메소";  //노말 데미안
        break;
      case 36:
        rep = "4000억ㆍ4000억ㆍ7000억 / 32,512,500메소";  //노말 스우
        break;
      case 37:
        rep = "2.62조"; //우르스
        break;
      case 38:
        rep = "6조ㆍ6조 / 35,112,500메소";  //이지 루시드
        break;
      case 39:
        rep = "12조ㆍ12조 / 40,612,000메소";  //노말 루시드
        break;
      case 40:
        rep = "8.4조ㆍ6.3조ㆍ10.5조 / 46,512,500메소";  //노말 윌
        break;
      case 41:
        rep = "26조 / 49,612,500메소";  //노말 거대 괴수 더스크
        break;
      case 42:
        rep = "26조 / 52,812,500메소";  //노말 친위대장 듄켈
        break;
      case 43:
        rep = "1.7조ㆍ7조ㆍ24조 / 74,112,000메소";  //하드 스우
        break;
      case 44:
        rep = "25.2조ㆍ10.8조 / 70,312,500메소";  //하드 데미안
        break;
      case 45:
        rep = "41조ㆍ41조ㆍ12조 / 80,000,000메소";  //하드 루시드
        break;
      case 46:
        rep = "126조 / 92,450,000메소"; //카오스 거대 괴수 더스크
        break;
      case 47:
        rep = "42조ㆍ31.5조ㆍ52.5조 / 88,200,000메소";  //하드 윌
        break;
      case 48:
        rep = "155조 / 96,800,000메소"; //하드 친위대장 듄켈
        break;
      case 49:
        rep = "176조 / 110,450,000메소";  //진 힐라
        break;
      case 50:
        rep = "126조ㆍ330조 / 151,250,000메소"; //선택받은 세렌
        break;
      case 51:
        rep = "63조ㆍ115.5조ㆍ157.5조ㆍ150조 / 500,000,000메소";  //검은 마법사
        break;
      case 52:
        rep = "60억ㆍ150억ㆍ1500억ㆍ1.5조ㆍ10.5조ㆍ900조";  //아르카누스
        break;
      case 53:
        rep = "5조 / 34,422,000메소"; //노말 가디언 엔젤 슬라임
        break;
      case 54:
        rep = "115.5조 / 90,312,500메소"; //카오스 가디언 엔젤 슬라임
        break;
      case 55:
        rep = "478만";  //마왕 발록
        break;
      case 56:
        rep = "5.4조ㆍ4.16조ㆍ6.94조 / 51,138,596메소"; //이지 윌
        break;
      case 57:
        rep = "132조 / 139,668,296메소"; //노멀 진힐라
        break;
      case 58:
        rep = "84조ㆍ220조 / 181,116,193메소"; //노멀 선택받은 세렌
        break;
        
    }
    return rep;
};
gB.getBossname = function (ind){
    rep = "";
    rep = bossList[ind].split("\n")[0];
    return rep;
};
gB.getBossname2 = function (ind){
     rep = "";
    rep = bossList[ind].split(" Lv")[0];
    switch(ind){
      case 41:
        rep = "노멀 더스크";
        break;
      case 42:
        rep = "노멀 듄켈";
        break;
      case 46:
        rep = "카오스 더스크";
        break;
      case 48:
        rep = "하드 듄켈";
        break;
      case 53:
        rep = "노멀 가엔슬";
        break;
      case 54:
        rep = "카오스 가엔슬";
        break;
      case -1:
        rep = "없음";
        break;
      default:
        break;
    }
    return rep;
};
gB.getBossname3 = function (ind){
  rep = "";
  switch(ind){
    case 0:
      rep = "이지 자쿰";
      break;
    case 1:
      rep = "노멀 자쿰";
      break;
    case 3:
      rep = "노멀 반반";
      break;
    case 4:
      rep = "노멀 피에르";
      break;
    case 5:
      rep = "노멀 블러디 퀸";
      break;
    case 6:
      rep = "이지 파풀라투스";
      break;
    case 7:
      rep = "이지 매그너스";
      break;
    case 8:
      rep = "노멀 힐라";
      break;
    case 9:
      rep = "노멀 벨룸";
      break;
    case 10:
      rep = "이지 반레온";
      break;
    case 11:
      rep = "이지 혼테일";
      break;
    case 12:
      rep = "노멀 카웅";
      break;
    case 13:
      rep = "이지 아카이럼";
      break;
    case 14:
      rep = "노멀 혼테일";
      break;
    case 15:
      rep = "노멀 매그너스";
      break;
    case 16:
      rep = "노멀 반레온";
      break;
    case 17:
      rep = "노멀 핑크빈";
      break;
    case 18:
      rep = "하드 반레온";
      break;
    case 19:
      rep = "이지 시그너스";
      break;
    case 20:
      rep = "노멀 아카이럼";
      break;
    case 21:
      rep = "노멀 파풀라투스";
      break;
    case 22:
      rep = "하드 힐라";
      break;
    case 23:
      rep = "카오스 혼테일";
      break;
    case 24:
      rep = "노멀 시그너스";
      break;
    case 25:
      rep = "카오스 피에르";
      break;
    case 26:
      rep = "카오스 자쿰";
      break;
    case 27:
      rep = "카오스 반반";
      break;
    case 28:
      rep = "하드 매그너스";
      break;
    case 29:
      rep = "카오스 블러디 퀸";
      break;
    case 30:
      rep = "카오스 벨룸";
      break;
    case 31:
      rep = "카오스 핑크빈";
      break;
    case 32:
      rep = "카오스 파풀라투스";
      break;
    case 35:
      rep = "노멀 데미안";
      break;
    case 36:
      rep = "노멀 스우";
      break;
    case 38:
      rep = "이지 루시드";
      break;
    case 39:
      rep = "노멀 루시드";
      break;
    case 40:
      rep = "노멀 윌";
      break;
    case 41:
      rep = "노멀 더스크";
      break;
    case 42:
      rep = "노멀 듄켈";
      break;
    case 43:
      rep = "하드 스우";
      break;
    case 44:
      rep = "하드 데미안";
      break;
    case 45:
      rep = "하드 루시드";
      break;
    case 46:
      rep = "카오스 더스크";
      break;
    case 47:
      rep = "하드 윌";
      break;
    case 48:
      rep = "하드 듄켈";
      break;
    case 49:
      rep = "하드 진 힐라";
      break;
    case 50:
      rep = "하드 선택받은 세렌";
      break;
    case 51:
      rep = "하드 검은 마법사";
      break;
    case 53:
      rep = "노멀 가디언 엔젤 슬라임";
      break;
    case 54:
      rep = "카오스 가디언 엔젤 슬라임";
      break;
    default:
      rep = "없음";
      break;
  }
  return rep;
};
gB.getBossinfo = function (ind){
    rep = "";
    switch(ind){
        case 0:
          rep = "30%, 반감";
          break;
        case 1:
          rep = "40%, 반감";
          break;
        case 2:
          rep = "비반감";
          break;
        case 3:
          rep = "50%, 반감";
          break;
        case 4:
          rep = "50%, 반감";
          break;
        case 5:
          rep = "50%, 반감";
          break;
        case 6:
          rep = "50%, 반감";
          break;
        case 7:
          rep = "50%, 반감";
          break;
        case 8:
          rep = "50%, 반감";
          break;
        case 9:
          rep = "55%, 반감";
          break;
        case 10:
          rep = "50%, 비반감";
          break;
        case 11:
          rep = "40%, 비반감";
          break;
        case 12:
          rep = "40%, 반감";
          break;
        case 13:
          rep = "60%, 비반감";
          break;
        case 14:
          rep = "40%, 비반감";
          break;
        case 15:
          rep = "50%, 반감";
          break;
        case 16:
          rep = "80%, 비반감";
          break;
        case 17:
          rep = "70%, 일부속성 반감";
          break;
        case 18:
          rep = "80%, 비반감";
          break;
        case 19:
          rep = "100%, 반감";
          break;
        case 20:
          rep = "90%, 비반감";
          break;
        case 21:
          rep = "90%, 반감";
          break;
        case 22:
          rep = "100%, 반감";
          break;
        case 23:
          rep = "50%, 비반감";
          break;
        case 24:
          rep = "100%, 반감";
          break;
        case 25:
          rep = "80%, 반감";
          break;
        case 26:
          rep = "100%, 반감";
          break;
        case 27:
          rep = "100%, 반감";
          break;
        case 28:
          rep = "120%, 반감";
          break;
        case 29:
          rep = "120%, 반감";
          break;
        case 30:
          rep = "200%, 반감";
          break;
        case 31:
          rep = "100%, 일부속성 반감";
          break;
        case 32:
          rep = "250%, 반감";
          break;
        case 33:
          rep = "90%, 반감";
          break;
        case 34:
          rep = "250%, 비반감";
          break;
        case 35:
          rep = "300%, 반감, 수에큐 3개";
          break;
        case 36:
          rep = "300%, 반감, 수에큐 3개";
          break;
        case 37:
          rep = "10%, 부위별 뎀감";
          break;
        case 38:
          rep = "300%, 반감, 포스 360, 수에큐 3개";
          break;
        case 39:
          rep = "300%, 반감, 포스 360, 수에큐 4개";
          break;
        case 40:
          rep = "300%, 반감, 포스 760, 수에큐 5개";
          break;
        case 41:
          rep = "300%, 반감, 포스 730, 수에큐 6개";
          break;
        case 42:
          rep = "300%, 반감, 포스 850, 수에큐 6개";
          break;
        case 43:
          rep = "300%, 반감, 수에큐 8개";
          break;
        case 44:
          rep = "300%, 반감, 수에큐 7개";
          break;
        case 45:
          rep = "300%, 반감, 포스 360, 수에큐 9개";
          break;
        case 46:
          rep = "300%, 반감, 포스 730, 수에큐 10개";
          break;
        case 47:
          rep = "300%, 반감, 포스 760, 수에큐 9개";
          break;
        case 48:
          rep = "300%, 반감, 포스 850, 수에큐 10개";
          break;
        case 49:
          rep = "300%, 반감, 포스 900, 수에큐 10개";
          break;
        case 50:
          rep = "380%, 반감, 어센틱포스 150ㆍ200, 수에큐 11개";
          break;
        case 51:
          rep = "300%, 반감, 포스 1320, 수에큐 30개";
          break;
        case 52:
          rep = "50%ㆍ100%ㆍ150%ㆍ200%ㆍ250%ㆍ300%, 반감";
          break;
        case 53:
          rep = "300%, 반감, 상시 피해감소 30%, 수에큐 3개";
          break;
        case 54:
          rep = "300%, 반감, 상시 피해감소 30%, 수에큐 10개";
          break;
        case 55:
          rep = "25%, 비반감, 3분간 무적ㆍ5만이하 데미지시 패배";
          break;
        case 56:
          rep = "300%, 반감, 포스 560, 수에큐 3개";
          break;
        case 57:
          rep = "300%, 반감, 포스 900, 수에큐 9개";
          break;
        case 58:
          rep = "380%, 반감, 어센틱포스 150ㆍ200, 수에큐 10개";
          break;          
    }
    return rep;
  };

var bossList = [
    "이지 자쿰 Lv.50\n220만, 30%, 반감\n200,000메소", //0
    "노멀 자쿰 Lv.110\n700만, 40%, 반감\n612,500메소", //1
    "피아누스 Lv.110\n좌 : 2400만, 비반감\n우 : 3000만, 비반감", //2
    "노멀 반반 Lv.120\n3억 1500만, 50%, 반감\n968,000메소", //3
    "노멀 피에르 Lv.120\n3억 1500만, 50%, 반감\n968,000메소", //4
    "노멀 블러디 퀸 Lv.120\n3억 1500만, 50%, 반감\n968,000메소", //5
    "이지 파풀라투스 Lv.125\n4억, 50%, 반감\n684,500메소", //6
    "이지 매그너스 Lv.110\n4억, 50%, 반감\n684,500메소", //7
    "노멀 힐라 Lv.110\n5억, 50%, 반감\n800,000메소", //8
    "노멀 벨룸 Lv.130\n5억 5000만, 55%, 반감\n968,000메소", //9
    "이지 반 레온 Lv.120\n7억, 50%, 비반감\n1,058,000메소", //10
    "이지 혼테일 Lv.130\n10억 1760만, 40%, 비반감\n882,000메소", //11
    "카웅 Lv.180\n16억 8000만, 40%, 반감\n1,250,000메소", //12
    "이지 아카이럼 Lv.130\n21억, 60%, 비반감\n1,152,000메소", //13
    "노멀 혼테일 Lv.160\n27억 5000만, 40%, 비반감\n1,012,500메소", //14
    "노멀 매그너스 Lv.130\n60억, 50%, 반감\n2,592,000메소", //15
    "노멀 반 레온 Lv.130\n63억, 80%, 비반감\n1,458,000메소", //16
    "노멀 핑크빈 Lv.180\n76억 5000만(총합), 70%, 일부반감\n1,404,500메소", //17
    "하드 반 레온 Lv.140\n105억, 80%, 비반감\n2,450,000메소", //18
    "이지 시그너스 Lv.140\n105억, 100%, 반감\n9,112,500메소", //19
    "노멀 아카이럼 Lv.170\n126억, 90%, 비반감\n2,520,000메소", //20
    "노멀 파풀라투스 Lv.155\n166억, 90%, 반감\n2,664,500메소", //21
    "하드 힐라 Lv.190\n168억, 100%, 반감\n11,250,000메소", //22
    "카오스 혼테일 Lv.160\n266억, 50%, 비반감\n1,352,000메소", //23
    "노멀 시그너스 Lv.190\n630억, 100%, 반감\n14,450,000메소", //24
    "카오스 피에르 Lv.190\n800억, 80%, 반감\n16,200,000메소", //25
    "카오스 자쿰 Lv.180\n840억, 100%, 반감 (팔 당 105억)\n16,200,000메소", //26
    "카오스 반반 Lv.190\n1000억, 100%, 반감\n16,200,000메소", //27
    "하드 매그너스 Lv.190\n1200억, 120%, 반감\n19,012,500메소", //28
    "카오스 블러디퀸 Lv.190\n1400억, 120%, 반감\n16,200,000메소", //29
    "카오스 벨룸 Lv.190\n2000억, 200%, 반감\n21,012,500메", //30
    "카오스 핑크빈 Lv.190\n2037억(총합), 100%, 일부반감\n12,800,000메소", //31
    "카오스 파풀라투스 Lv.190\n5040억, 250%, 반감\n26,450,000메소", //32
    "불꽃늑대 Lv.1\n6000억, 90%, 반감", //33
    "도로시 Lv.210\n8400억, 250%, 비반감", //34
    "노멀 데미안 Lv.210\n8400억ㆍ3600억\n300%, 반감\n33,800,000메소", //35
    "노멀 스우 Lv.210\n4000억ㆍ4000억ㆍ7000억\n300%, 반감\n32,512,500메소", //36
    "우르스 Lv,130\n2조 6252억 2362만 4000, 10%", //37
    "이지 루시드 Lv.230\n6조ㆍ6조, 300%, 반감, 포스 360\n35,112,500메소", //38
    "노멀 루시드 Lv.230\n12조ㆍ12조, 300%, 반감, 포스 360\n40,612,000메소", //39
    "노멀 윌 Lv.250\n8.4조ㆍ6.3조ㆍ10.5조\n300%, 반감, 포스 760\n46,512,500메소", //40
    "노멀 거대 괴수 더스크 Lv.255\n26조, 300%, 반감, 포스 730\n49,612,500메소", //41
    "노멀 친위대장 듄켈 Lv.265\n26조, 300%, 반감, 포스 850\n52,812,500메소", //42
    "하드 스우 Lv.210\n1.7조ㆍ7조ㆍ24조\n300%, 반감\n74,112,000메소", //43
    "하드 데미안 Lv.210\n25.2조ㆍ10.8조\n300%, 반감\n70,312,500메소", //44
    "하드 루시드 Lv.230\n41.04조ㆍ41.04조ㆍ11.97조\n300%, 반감, 포스 360\n80,000,000메소", //45
    "카오스 거대 괴수 더스크 Lv.255\n126조, 300%, 반감, 포스 730\n92,450,000메소", //46
    "하드 윌 Lv.250\n42조ㆍ31.5조ㆍ52.5조\n300%, 반감, 포스 760\n88,200,000메소", //47
    "하드 친위대장 듄켈 Lv.265\n155조, 300%, 반감, 포스 850\n96,800,000메소", //48
    "하드 진 힐라 Lv.250\n176조, 300%, 반감, 포스 900\n110,450,000메소", //49
    "하드 선택받은 세렌 Lv.275\n132조ㆍ???조\n380%, 반감, 포스 150ㆍ200\n151,250,000메소", //50
    "검은 마법사 Lv.275\n63조ㆍ115.5조ㆍ157.5조ㆍ150조\n300%, 반감, 포스 1320\n500,000,000메소", //51
    "아르카누스 Lv.101\n60억ㆍ150억ㆍ1500억ㆍ1.5조ㆍ10.5조ㆍ900조\n50%ㆍ100%ㆍ150%ㆍ200%ㆍ250%ㆍ300%, 반감", //52
    "노멀 가디언 엔젤 슬라임 Lv.220\n5조, 300%, 반감\n34,422,000메소", //53
    "카오스 가디언 엔젤 슬라임 Lv.250\n115.5조, 300%, 반감\n90,312,500메소", //54
    "마왕 발록 Lv.65\n478만, 25%, 비반감, 3분간 무적",//55
    "이지 윌 Lv.235\n",//56
    "노멀 진 힐라 Lv.250\n",//57
    "노멀 선택받은 세렌 Lv.275\n"//58
];

module.exports = gB;