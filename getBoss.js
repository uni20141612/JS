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
        case "이지 파풀라투스":
        case "이지파풀라투스":
        case "이지파풀":
          chkboss = 2;
          break;
        case "이지 매그너스":
        case "이지매그너스":
        case "이지매그":
          chkboss = 3;
          break;
        case "노말 힐라":
        case "노말힐라":
        case "노멀 힐라":
        case "노멀힐라":
        case "힐라":
          chkboss = 4;
          break;
        case "이지 혼테일":
        case "이지혼테일":
        case "이지혼텔":
          chkboss = 5;
          break;
        case "노말 반반":
        case "노멀 반반":
        case "노말반반":
        case "노멀반반":
        case "반반":
          chkboss = 6;
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
          chkboss = 7;
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
          chkboss = 8;
          break;
        case "노말 벨룸":
        case "노말벨룸":
        case "노멀 벨룸":
        case "노멀벨룸":
        case "벨룸":
          chkboss = 9;
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
          chkboss = 10;
          break;
        case "이지 반 레온":
        case "이지 반레온":
        case "이지반레온":
        case "이지 반 래온":
        case "이지 반래온":
        case "이지반래온":
          chkboss = 11;
          break;
        case "이지 아카이럼":
        case "이지아카이럼":
          chkboss = 12;
          break;
        case "카웅":
          chkboss = 13;
          break;
        case "카오스 혼테일":
        case "카오스혼테일":
        case "카텔":
        case "카혼텔":
          chkboss = 14;
          break;
        case "노말 핑크빈":
        case "노말핑크빈":
        case "노멀 핑크빈":
        case "노멀핑크빈":
        case "노핑":
        case "핑크빈":
        case "굉크넨":
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
        case "하드 반 레온":
        case "하드 반레온":
        case "하드반레온":
        case "하드 반 래온":
        case "하드 반래온":
        case "하드반래온":
          chkboss = 17;
          break;
        case "노말 아카이럼":
        case "노말아카이럼":
        case "노멀 아카이럼":
        case "노멀아카이럼":
        case "아카이럼":
          chkboss = 18;
          break;
        case "노말 매그너스":
        case "노말매그너스":
        case "노멀 매그너스":
        case "노멀매그너스":
        case "매그너스":
        case "노매그":
        case "매그":
          chkboss = 19;
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
          chkboss = 20;
          break;
        case "이지 시그너스":
        case "이지시그너스":
        case "이시그":
          chkboss = 21;
          break;
        case "하드 힐라":
        case "하드힐라":
        case "하힐":
          chkboss = 22;
          break;
        case "카오스 핑크빈":
        case "카오스핑크빈":
        case "카핑빈":
        case "카핑":
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
        case "카오스 자쿰":
        case "카오스자쿰":
        case "카쿰":
          chkboss = 25;
          break;
        case "카오스 반반":
        case "카오스반반":
        case "카반반":
        case "카반":
          chkboss = 26;
          break;
        case "카오스 피에르":
        case "카오스피에르":
        case "카오스 삐에르":
        case "카오스삐에르":
        case "카피":
        case "카삐":
          chkboss = 27;
          break;
        case "카오스 블러디 퀸":
        case "카오스 블러디퀸":
        case "카오스블러디퀸":
        case "카오스 블퀸":
        case "카퀸":
        case "카블퀸":
          chkboss = 28;
          break;
        case "하드 매그너스":
        case "하드매그너스":
        case "하매그":
        case "하매":
          chkboss = 29;
          break;
        case "카오스 벨룸":
        case "카오스벨룸":
        case "카벨룸":
        case "카벨":
          chkboss = 30;
          break;
        case "카오스 파풀라투스":
        case "카오스파풀라투스":
        case "카파풀":
          chkboss = 31;
          break;
        case "노말 스우":
        case "노말스우":
        case "노멀 스우":
        case "노멀스우":
        case "노스우":
        case "스우":
          chkboss = 32;
          break;       
        case "노말 데미안":
        case "노말데미안":
        case "노멀 데미안":
        case "노멀데미안":
        case "노데미":
        case "데미안":
        case "데미":
          chkboss = 33;
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
          chkboss = 34;
          break;
        case "이지 루시드":
        case "이지루시드":
        case "이루시":
        case "이루":
          chkboss = 35;
          break;
        case "이지 윌":
        case "이지윌":
        case "이윌":
          chkboss = 36;
          break;
        case "노말 루시드":
        case "노말루시드":
        case "노멀 루시드":
        case "노멀루시드":
        case "노루시":
        case "노루":
        case "루시드":
        case "루시":
          chkboss = 37;
          break;
        case "노말 윌":
        case "노말윌":
        case "노멀 윌":
        case "노멀윌":
        case "노윌":
        case "윌":
          chkboss = 38;
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
          chkboss = 39;
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
          chkboss = 40;
          break;
        case "하드 데미안":
        case "하드데미안":
        case "하데미":
          chkboss = 41;
          break;
        case "하드 스우":
        case "하드스우":
        case "하스우":
          chkboss = 42;
          break;
        case "하드 루시드":
        case "하드루시드":
        case "하루시":
          chkboss = 43;
          break;
        case "하드 윌":
        case "하드윌":
        case "하윌":
          chkboss = 44;
          break;
        case "노멀 진힐라":
        case "노말 진힐라":
        case "노멀진힐라":
        case "노말진힐라":
        case "노진힐라":
        case "노진힐":
          chkboss = 45;
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
          chkboss = 46;
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
          chkboss = 50;
          break;
        case "선택받은 세렌":
        case "선택받은세렌":
        case "세렌":
        case "하드 선택받은 세렌":
        case "하드 선택받은세렌":
        case "하드선택받은세렌":
        case "하드 세렌":
        case "하드세렌":
          chkboss = 51;
          break;
        case "검은 마법사":
        case "검은마법사":
        case "검마":
        case "검멘":
          chkboss = 52;
          break;
        case "카오스 감시자 칼로스":
        case "카오스 감시자칼로스":
        case "카오스감시자칼로스":
        case "카감시자칼로스":
        case "카칼로스":
        case "카칼":
        case "감시자 칼로스":
        case "감시자칼로스":
        case "칼로스":
        case "카로테":
          chkboss = 53;
          break;
        case "피아누스":
          chkboss = 54;
          break;
        case "불꽃 늑대":
        case "불꽃늑대":
        case "불늑":
          chkboss = 55;
          break;
        case "도로시":
        case "시드":
          chkboss = 56;
          break;
        case "우르스":
        case "우루스":
          chkboss = 57;
          break;
        case "아르카누스":
        case "수로":
        case "길드":          
          chkboss = 58;
          break;
        case "마왕 발록":
        case "마왕발록":
        case "발록":
          chkboss = 59;
          break;
        case "익스트림 몬스터파크":
        case "익스트림몬스터파크":
        case "익스트림 몬파":
        case "익스트림몬파":
        case "익스트림":
        case "익몬":
        case "익몬파":
        case "몬파":
        case "익스몬파":
        case "익스트림 빅풋":
        case "익스트림빅풋":
        case "익스 빅풋":
        case "익스빅풋":
        case "빅풋":
          chkboss = 60;
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
      case 25:
        rep = "https://i.imgur.com/TSLWzg8.png";  //자쿰
        break;
      case 2:
      case 20:
      case 31:
        rep = "https://i.imgur.com/RVOFVJv.png";  //파풀라투스
        break;
      case 3:
      case 19:
      case 29:
        rep = "https://i.imgur.com/Hxw8G1z.png";  //매그너스
        break;
      case 4:
      case 22:
        rep = "https://i.imgur.com/erNHjcU.png";  //힐라
        break;
      case 5:
      case 10:
      case 14:
        rep = "https://i.imgur.com/p1TTYRC.png";  //혼테일
        break;
      case 6:
      case 26:
        rep = "https://i.imgur.com/ioTLuzJ.png";  //반반
        break;
      case 7:
      case 25:
        rep = "https://i.imgur.com/spu9Upy.png";  //피에르
        break;
      case 8:
      case 28:
        rep = "https://i.imgur.com/1t101Gg.png";  //블러디퀸
        break;
      case 9:
      case 30:
        rep = "https://i.imgur.com/xanCa5m.png";  //벨룸
        break;
      case 11:
      case 16:
      case 17:
        rep = "https://i.imgur.com/4SA6j1E.png";  //반레온
        break;
      case 12:
      case 18:
        rep = "https://i.imgur.com/BT1MDPf.png";  //아카이럼
        break;
      case 13:
        rep = "https://i.imgur.com/dh2l2Sw.png";  //카웅
        break;    
      case 15:
      case 23:
        rep = "https://i.imgur.com/nQBZNJ4.png";  //핑크빈
        break;
      case 21:
      case 24:
        rep = "https://i.imgur.com/FYnZg2d.png";  //시그너스
        break;
      case 32:
      case 42:
        rep = "https://i.imgur.com/QVFWnW7.png";  //스우
        break;
      case 33:
      case 41:
        rep = "https://i.imgur.com/fMpbaPt.png";  //데미안
        break;
      case 34:
      case 46:
        rep = "https://i.imgur.com/fwuYvah.png";  //가디언엔젤슬라임
        break;
      case 35:
      case 37:
      case 43:
        rep = "https://i.imgur.com/bNGNPFg.png";  //루시드
        break;
      case 36:
      case 38:
      case 44:
        rep = "https://i.imgur.com/DXL2K99.png";  //윌
        break;
      case 39:
      case 47:
        rep = "https://i.imgur.com/P0fg610.png";  //더스크
        break;
      case 40:
      case 48:
        rep = "https://i.imgur.com/cCnCDJG.png";  //듄켈
        break;
      case 45:
      case 49:
        rep = "https://i.imgur.com/fMTHRN8.png";  //진힐라
        break;
      case 50:
      case 51:
        rep = "https://i.imgur.com/6dOgp7P.png";  //세렌
        break;
      case 52:
        rep = "https://i.imgur.com/A06jBpZ.png";  //검은마법사
        break;
      case 53:
        rep = "https://i.imgur.com/dgFN4eT.png";  //칼로스
        break;
      case 54:
        rep = "https://i.imgur.com/ebkdf5h.png";  //피아누스
        break;
      case 55:
        rep = "https://i.imgur.com/1iwWhMh.jpeg"; ///불꽃늑대
        break;
      case 56:
        rep = "https://i.imgur.com/XpZoj4e.jpeg"; //도로시
        break;
      case 57:
        rep = "https://i.imgur.com/6BUgBg0.png";  //우르스
        break;
      case 58:
        rep = "https://i.imgur.com/MK89a8i.jpeg"; //아르카누스
        break;
      case 59:
        rep = "https://i.imgur.com/GZlQaTV.png";  //마왕 발록
        break;
      case 60:
        rep = "https://i.imgur.com/tOvkioz.png";  //익스트림 빅풋
        break;
    }
    return rep;
};
gB.getBossimage2 = function (ind){
    rep = "";
    switch(ind){
      case 0:
      case 1:
      case 25:
        rep = "https://i.imgur.com/bbagYad.png";    //자쿰
        break;
      case 2:
      case 20:
      case 31:
        rep = "https://i.imgur.com/rvEBVeF.png";  //파풀라투스
        break;
      case 3:
      case 19:
      case 29:
        rep = "https://i.imgur.com/yulDfEg.png";  //매그너스
        break;
      case 4:
      case 22:
        rep = "https://i.imgur.com/MiRDmwF.png";  //힐라
        break;
      case 5:
      case 10:
      case 14:
        rep = "https://i.imgur.com/Mz7lM7O.png";   //혼테일
        break;
      case 6:
      case 26:
        rep = "https://i.imgur.com/4slC7CW.png";  //반반
        break;
      case 7:
      case 25:
        rep = "https://i.imgur.com/HyoNNGc.png";  //피에르
        break;
      case 8:
      case 28:
        rep = "https://i.imgur.com/IDRrpEE.png";  //블러디퀸
        break;
      case 9:
      case 30:
        rep = "https://i.imgur.com/YlUOiHD.png";  //벨룸
        break;
      case 11:
      case 16:
      case 17:
        rep = "https://i.imgur.com/635qzz6.png";  //반레온
        break;
      case 12:
      case 18:
        rep = "https://i.imgur.com/teWlCaO.png";  //아카이럼
        break;
      case 13:
        rep = "https://i.imgur.com/OTlH1oE.png";  //카웅
        break;    
      case 15:
      case 23:
        rep = "https://i.imgur.com/WTZoTm8.png";  //핑크빈
        break;
      case 21:
      case 24:
        rep = "https://i.imgur.com/Fiyn1pz.png";  //시그너스
        break;
      case 32:
      case 42:
        rep = "https://i.imgur.com/Z414Igv.png";  //스우
        break;
      case 33:
      case 41:
        rep = "https://i.imgur.com/Ktg1Txg.png";  //데미안
        break;
      case 34:
      case 46:
        rep = "https://i.imgur.com/q21gtVB.png";  //가디언엔젤슬라임
        break;
      case 35:
      case 37:
      case 43:
        rep = "https://i.imgur.com/3gZO26H.png";  //루시드
        break;
      case 36:
      case 38:
      case 44:
        rep = "https://i.imgur.com/wi6UdG3.png";  //윌
        break;
      case 39:
      case 47:
        rep = "https://i.imgur.com/FtmXWBn.png";  //더스크
        break;
      case 40:
      case 48:
        rep = "https://i.imgur.com/AcsixrM.png";  //듄켈
        break;
      case 45:
      case 49:
        rep = "https://i.imgur.com/yGlqSFc.png";  //진힐라
        break;
      case 50:
      case 51:  
        rep = "https://i.imgur.com/oFVIOwp.png";  //세렌
        break;
      case 52:
        rep = "https://i.imgur.com/w96GuWU.png";  //검은마법사
        break;
      case 53:
        rep = "https://i.imgur.com/pVGYfH7.png";  //칼로스
        break;
      case 54:
        rep = "https://i.imgur.com/y2dmY36.png";    //피아누스
        break;
      case 55:
        rep = "https://i.imgur.com/zgGsUhm.png";  //불꽃늑대
        break;
      case 56:
        rep = "https://i.imgur.com/gvifVDQ.png";  //도로시
        break;
      case 57:
        rep = "https://i.imgur.com/lIsaWvF.png";  //우르스
        break;
      case 58:
        rep = "https://i.imgur.com/U34OzgX.png";  //아르카누스
        break;
      case 59:
        rep = "https://i.imgur.com/h8hDBfG.png";  //마왕발록
        break;
      case 60:
        rep = "https://i.imgur.com/AGEhxPJ.png";  //익스트림 빅풋
        break;
    }
    return rep;
};
gB.getBossHP = function (ind){
    rep = "";
    switch(ind){
      case 0:
        rep = "220만 / 119,835메소";  //이지 자쿰
        break;
      case 1:
        rep = "700만 / 366,997메소";  //노말 자쿰
        break;
      case 2:
        rep = "4억 / 410,135메소";  //이지 파풀라투스
        break;
      case 3:
        rep = "4억 / 432,605메소";  //이지 매그너스
        break;
      case 4:
        rep = "5억 / 479,343메소";  //노말 힐라
        break;
      case 5:
        rep = "10.18억 / 528,474메소";  //이지 혼테일
        break;
      case 6:
        rep = "3.15억 / 580,003메소"; //노말 반반
        break;
      case 7:
        rep = "3.15억 / 580,003메소"; //노말 피에르
        break;
      case 8:
        rep = "3.15억 / 580,003메소"; //노말 블러디 퀸
        break;
      case 9:
        rep = "5.5억 / 580,003메소";  //노말 벨룸
        break;
      case 10:
        rep = "27.5억 / 606,666메소"; //노말 혼테일
        break;
      case 11:
        rep = "7억 / 633,927메소";  //이지 반 레온
        break;
      case 12:
        rep = "21억 / 690,249메소"; //이지 아카이럼
        break;
      case 13:
        rep = "16.8억 / 748,970메소"; //카웅
        break;
      case 14:
        rep = "266억 / 810,086메소";  //카오스 혼테일
        break;
      case 15:
        rep = "76.5억 / 841,544메소"; //노말 핑크빈
        break;
      case 16:
        rep = "63억 / 873,601메소"; //노말 반 레온
        break;
      case 17:
        rep = "105억 / 1,467,984메소";  //하드 반 레온
        break;
      case 18:
        rep = "126억 / 1,510,227메소";  //노말 아카이럼
        break;
      case 19:
        rep = "60억 / 1,553,066메소"; //노말 매그너스
        break;
      case 20:
        rep = "166억 / 1,596,506메소";  //노말 파풀라투스
        break;
      case 21:
        rep = "105억 / 5,496,394메소";  //이지 시그너스
        break;
      case 22:
        rep = "168억 / 6,936,489메소"; //하드 힐라
        break;
      case 23:
        rep = "2037억 / 7,923,110메소";  //카오스 핑크빈
        break;
      case 24:
        rep = "630억 / 9,039,130메소"; //노말 시그너스
        break;
      case 25:
        rep = "840억 / 9,741,285메소"; //카오스 자쿰
        break;
      case 26:
        rep = "1000억 / 9,818,154메소";  //카오스 반반
        break;
      case 27:
        rep = "800억 / 9,838,932메소"; //카오스 피에르
        break;
      case 28:
        rep = "1400억 / 9,806,780메소";  //카오스 블러디 퀸
        break;
      case 29:
        rep = "1200억 / 11,579,023메소";  //하드 매그너스
        break;
      case 30:
        rep = "2000억 / 12,590,202메소";  //카오스 벨룸
        break;
      case 31:
        rep = "5040억 / 26,725,937메소";  //카오스 파풀라투스
        break;
      case 32:
        rep = "4000억ㆍ4000억ㆍ7000억 / 33,942,566메소";  //노말 스우
        break;
      case 33:
        rep = "8400억ㆍ3600억 / 35,517,853메소";  //노말 데미안
        break;
      case 34:
        rep = "5조 / 46,935,874메소"; //노말 가디언 엔젤 슬라임
        break;
      case 35:
        rep = "6조ㆍ6조 / 48,058,319메소";  //이지 루시드
        break;
      case 36:
        rep = "5.4조ㆍ4.16조ㆍ6.94조 / 52,139,127메소"; //이지 윌
        break;
      case 37:
        rep = "12조ㆍ12조 / 57,505,626메소";  //노말 루시드
        break;
      case 38:
        rep = "8.4조ㆍ6.3조ㆍ10.5조 / 66,311,463메소";  //노말 윌
        break;
      case 39:
        rep = "26조 / 71,054,562메소";  //노말 거대 괴수 더스크
        break;
      case 40:
        rep = "26조 / 76,601,412메소";  //노말 친위대장 듄켈
        break;
      case 41:
        rep = "25.2조ㆍ10.8조 / 112,480,613메소";  //하드 데미안
        break;
      case 42:
        rep = "1.7조ㆍ7조ㆍ24조 / 118,294,192메소";  //하드 스우
        break;
      case 43:
        rep = "41조ㆍ41조ㆍ12조 / 131,095,655메소";  //하드 루시드
        break;
      case 44:
        rep = "42조ㆍ31.5조ㆍ52.5조 / 145,038,483메소";  //하드 윌
        break;
      case 45:
        rep = "88조 / 148,112,376메소"; //노멀 진힐라
        break;
      case 46:
        rep = "115.5조 / 155,492,141메소"; //카오스 가디언 엔젤 슬라임
        break;
      case 47:
        rep = "126조 / 160,173,752메소"; //카오스 거대 괴수 더스크
        break;
      case 48:
        rep = "155조 / 168,609,280메소"; //하드 친위대장 듄켈
        break;
      case 49:
        rep = "176조 / 190,159,452메소";  //진 힐라
        break;
      case 50:
        rep = "64.68조ㆍ169.4조 / 196,904,752메소"; //노멀 선택받은 세렌
        break;
      case 51:
        rep = "126조ㆍ330조 / 267,825,621메소"; //선택받은 세렌
        break;
      case 52:
        rep = "63조ㆍ115.5조ㆍ157.5조ㆍ150조 / 1,418,809,857메소";  //검은 마법사
        break;
      case 53:
        rep = "???조ㆍ???조 / 300,000,000메소"; //카오스 감시자 칼로스
        break;
      case 54:
        rep = "좌:2400만 / 우:3000만";  //피아누스
        break;
      case 55:
        rep = "100억/50조/100조"; //불꽃늑대
        break;
      case 56:
        rep = "8400억"; //도로시
        break;
      case 57:
        rep = "2.62조"; //우르스
        break;
      case 58:
        rep = "60억ㆍ150억ㆍ1500억ㆍ1.5조ㆍ10.5조ㆍ900조";  //아르카누스
        break;
      case 59:
        rep = "478만";  //마왕 발록
        break;
      case 60:
        rep = "15조";  //익스트림 빅풋
        break;
        
    }
    return rep;
};
gB.getBossname = function (ind){
    rep = "";
    rep = bossList[ind].split("\n")[0];
    return rep;
};
gB.getBossinfo = function (ind){
    rep = "";
    switch(ind){
        case 0: 
          rep = "30%, 반감";  //이지 자쿰
          break;
        case 1:
          rep = "40%, 반감";  //노멀 자쿰
          break;
        case 2:
          rep = "50%, 반감";  //이지 파풀라투스 
          break;
        case 3:
          rep = "50%, 반감";  //이지 매그너스
          break;
        case 4:
          rep = "50%, 반감";  //노멀 힐라
          break;
        case 5:
          rep = "40%, 비반감";  //이지 혼테일
          break;
        case 6:
          rep = "50%, 반감";  //노멀 반반
          break;
        case 7:
          rep = "50%, 반감";  //노멀 피에르
          break;
        case 8:
          rep = "50%, 반감";  //노멀 블러디 퀸
          break;
        case 9:
          rep = "55%, 반감";  //노멀 벨룸
          break;
        case 10:
          rep = "40%, 비반감";  //노멀 혼테일
          break;
        case 11:
          rep = "50%, 비반감";  //이지 반 레온
          break;
        case 12:
          rep = "60%, 비반감";  //이지 아카이럼
          break;
        case 13:
          rep = "40%, 반감";  //카웅
          break;
        case 14:
          rep = "50%, 비반감";  //카오스 혼테일
          break;
        case 15:
          rep = "70%, 일부속성 반감"; //노멀 핑크빈
          break;
        case 16:
          rep = "80%, 비반감";  //노멀 반 레온
          break;
        case 17:
          rep = "80%, 비반감";  //하드 반 레온
          break;
        case 18:
          rep = "90%, 비반감";  //노멀 아카이럼
          break;
        case 19:
          rep = "50%, 반감";  //노멀 매그너스
          break;
        case 20:
          rep = "90%, 반감";  //노멀 파풀라투스
          break;
        case 21:
          rep = "100%, 반감"; //이지 시그너스
          break;
        case 22:
          rep = "100%, 반감"; //하드 힐라
          break;
        case 23:
          rep = "100%, 일부속성 반감";  //카오스 핑크빈
          break;
        case 24:
          rep = "100%, 반감"; //노멀 시그너스
          break;
        case 25:
          rep = "100%, 반감"; //카오스 자쿰
          break;
        case 26:
          rep = "100%, 반감"; //카오스 반반
          break;
        case 27:
          rep = "80%, 반감";  //카오스 피에르
          break;
        case 28:
          rep = "120%, 반감"; //카오스 블러디퀸
          break;
        case 29:
          rep = "120%, 반감"; //하드 매그너스
          break;
        case 30:
          rep = "200%, 반감"; //카오스 벨룸
          break;
        case 31:
          rep = "250%, 반감"; //카오스 파풀라투스
          break;
        case 32:
          rep = "300%, 반감, 수에큐 3개"; //노멀 스우
          break;
        case 33:
          rep = "300%, 반감, 수에큐 3개"; //노멀 데미안
          break;
        case 34:
          rep = "300%, 반감, 상시 피해감소 30%, 수에큐 3개";  //노멀 가디언 엔젤 슬라임
          break;
        case 35:
          rep = "300%, 반감, 포스 360, 수에큐 3개"; //이지 루시드
          break;
        case 36:
          rep = "300%, 반감, 포스 560, 수에큐 3개"; //이지 윌
          break;
        case 37:
          rep = "300%, 반감, 포스 360, 수에큐 4개"; //노멀 루시드
          break;
        case 38:
          rep = "300%, 반감, 포스 760, 수에큐 5개"; //노멀 윌
          break;
        case 39:
          rep = "300%, 반감, 포스 730, 수에큐 6개"; //노멀 거대 괴수 더스크
          break;
        case 40:
          rep = "300%, 반감, 포스 850, 수에큐 6개"; // 노멀 친위대장 듄켈
          break;
        case 41:
          rep = "300%, 반감, 수에큐 7개"; //하드 데미안
          break;
        case 42:
          rep = "300%, 반감, 수에큐 8개"; //하드 스우
          break;
        case 43:
          rep = "300%, 반감, 포스 360, 수에큐 9개"; //하드 루시드
          break;
        case 44:
          rep = "300%, 반감, 포스 760, 수에큐 9개"; //하드 윌
          break;
        case 45:
          rep = "300%, 반감, 포스 900, 수에큐 9개"; //노멀 진 힐라
          break;
        case 46:
          rep = "300%, 반감, 상시 피해감소 30%, 수에큐 10개"; //카오스 가디언 엔젤 슬라임
          break;
        case 47:
          rep = "300%, 반감, 포스 730, 수에큐 10개";  //카오스 거대 괴수 더스크
          break;
        case 48:
          rep = "300%, 반감, 포스 850, 수에큐 10개";  //하드 친위대장 듄켈
          break;
        case 49:
          rep = "300%, 반감, 포스 900, 수에큐 10개";  //하드 진 힐라
          break;
        case 50:
          rep = "380%, 반감, 어센틱포스 150ㆍ200, 수에큐 10개"; //노멀 선택받은 세렌
          break;   
        case 51:
          rep = "380%, 반감, 어센틱포스 150ㆍ200, 수에큐 11개"; //하드 선택받은 세렌
          break;
        case 52:
          rep = "300%, 반감, 포스 1320, 수에큐 30개"; //검은 바법사
          break;  
        case 53:
          rep = "330%ㆍ380%, 반감, 어센틱포스 250ㆍ300, 수에큐 ?개";  //카오스 감시자 칼로스
          break;    
        case 54:
          rep = "비반감"; //피아누스
          break;
        case 55:
          rep = "90%, 반감";  //불꽃늑대
          break;
        case 56:
          rep = "250%, 비반감"; //도로시
          break; 
        case 57:
          rep = "10%, 부위별 뎀감"; //우르스
          break;
        case 58:
          rep = "50%ㆍ100%ㆍ150%ㆍ200%ㆍ250%ㆍ300%, 반감";  //아르카누스
          break;
        case 59:
          rep = "25%, 비반감, 3분간 무적ㆍ5만이하 데미지시 패배"; //마왕 발록
          break;
        case 60:
          rep = "300%, 반감, 바인드 면역";  //익스트림 빅풋
          break;
    }
    return rep; 
  };

var bossList = [
    "이지 자쿰 Lv.50\n220만, 30%, 반감\n119,835메소", //0
    "노멀 자쿰 Lv.110\n700만, 40%, 반감\n336,997메소", //1
    "이지 파풀라투스 Lv.125\n4억, 50%, 반감\n410,135메소", //2
    "이지 매그너스 Lv.110\n4억, 50%, 반감\n432,605메소", //3
    "노멀 힐라 Lv.110\n5억, 50%, 반감\n479,343메소", //4
    "이지 혼테일 Lv.130\n10억 1760만, 40%, 비반감\n528,474메소", //5
    "노멀 반반 Lv.120\n3억 1500만, 50%, 반감\n580,003메소", //6
    "노멀 피에르 Lv.120\n3억 1500만, 50%, 반감\n580,003메소", //7
    "노멀 블러디 퀸 Lv.120\n3억 1500만, 50%, 반감\n580,003메소", //8
    "노멀 벨룸 Lv.130\n5억 5000만, 55%, 반감\n580,003메소", //9
    "노멀 혼테일 Lv.160\n27억 5000만, 40%, 비반감\n606,666메소", //10
    "이지 반 레온 Lv.120\n7억, 50%, 비반감\n633,927메소", //11
    "이지 아카이럼 Lv.130\n21억, 60%, 비반감\n690,249메소", //12
    "카웅 Lv.180\n16억 8000만, 40%, 반감\n748,970메소", //13
    "카오스 혼테일 Lv.160\n266억, 50%, 비반감\n810,086메소", //14
    "노멀 핑크빈 Lv.180\n76억 5000만(총합), 70%, 일부반감\n841,544메소", //15
    "노멀 반 레온 Lv.130\n63억, 80%, 비반감\n873,601메소", //16
    "하드 반 레온 Lv.140\n105억, 80%, 비반감\n1,467,984메소", //17
    "노멀 아카이럼 Lv.170\n126억, 90%, 비반감\n1,510,227메소", //18
    "노멀 매그너스 Lv.130\n60억, 50%, 반감\n1,553,066메소", //19
    "노멀 파풀라투스 Lv.155\n166억, 90%, 반감\n1,596,506메소", //20
    "이지 시그너스 Lv.140\n105억, 100%, 반감\n5,496,394메소", //21
    "하드 힐라 Lv.190\n168억, 100%, 반감\n6,936,489메소", //22
    "카오스 핑크빈 Lv.190\n2037억(총합), 100%, 일부반감\n7,923,110메소", //23
    "노멀 시그너스 Lv.190\n630억, 100%, 반감\n9,039,130메소", //24
    "카오스 자쿰 Lv.180\n840억, 100%, 반감 (팔 당 105억)\n9,741,285메소", //25
    "카오스 반반 Lv.190\n1000억, 100%, 반감\n9,818,154메소", //26
    "카오스 피에르 Lv.190\n800억, 80%, 반감\n9,838,932메소", //27
    "카오스 블러디퀸 Lv.190\n1400억, 120%, 반감\n9,806,780메소", //28
    "하드 매그너스 Lv.190\n1200억, 120%, 반감\n11,579,023메소", //29
    "카오스 벨룸 Lv.190\n2000억, 200%, 반감\n12,590,202메소", //30
    "카오스 파풀라투스 Lv.190\n5040억, 250%, 반감\n26,725,937메소", //31
    "노멀 스우 Lv.210\n4000억ㆍ4000억ㆍ7000억\n300%, 반감\n33,942,566메소", //32
    "노멀 데미안 Lv.210\n8400억ㆍ3600억\n300%, 반감\n35,517,853메소", //33
    "노멀 가디언 엔젤 슬라임 Lv.220\n5조, 300%, 반감\n46,935,874메소", //34
    "이지 루시드 Lv.230\n6조ㆍ6조, 300%, 반감, 포스 360\n57,505,626메소", //35
    "이지 윌 Lv.235\n",//36
    "노멀 루시드 Lv.230\n12조ㆍ12조, 300%, 반감, 포스 360\n40,612,000메소", //37
    "노멀 윌 Lv.250\n8.4조ㆍ6.3조ㆍ10.5조\n300%, 반감, 포스 760\n46,512,500메소", //38
    "노멀 거대 괴수 더스크 Lv.255\n26조, 300%, 반감, 포스 730\n49,612,500메소", //39
    "노멀 친위대장 듄켈 Lv.265\n26조, 300%, 반감, 포스 850\n52,812,500메소", //40
    "하드 데미안 Lv.210\n25.2조ㆍ10.8조\n300%, 반감\n70,312,500메소", //41
    "하드 스우 Lv.210\n1.7조ㆍ7조ㆍ24조\n300%, 반감\n74,112,000메소", //42
    "하드 루시드 Lv.230\n41.04조ㆍ41.04조ㆍ11.97조\n300%, 반감, 포스 360\n80,000,000메소", //43
    "하드 윌 Lv.250\n42조ㆍ31.5조ㆍ52.5조\n300%, 반감, 포스 760\n88,200,000메소", //44
    "노멀 진 힐라 Lv.250\n",//45
    "카오스 가디언 엔젤 슬라임 Lv.250\n115.5조, 300%, 반감\n90,312,500메소", //46
    "카오스 거대 괴수 더스크 Lv.255\n126조, 300%, 반감, 포스 730\n92,450,000메소", //47
    "하드 친위대장 듄켈 Lv.265\n155조, 300%, 반감, 포스 850\n96,800,000메소", //48
    "하드 진 힐라 Lv.250\n176조, 300%, 반감, 포스 900\n110,450,000메소", //49
    "노멀 선택받은 세렌 Lv.275\n",//50
    "하드 선택받은 세렌 Lv.275\n132조ㆍ???조\n380%, 반감, 포스 150ㆍ200\n151,250,000메소", //51
    "검은 마법사 Lv.275\n63조ㆍ115.5조ㆍ157.5조ㆍ150조\n300%, 반감, 포스 1320\n500,000,000메소", //52
    "감시자 칼로스 Lv.275/Lv.280\n",  //53
    "피아누스 Lv.110\n좌 : 2400만, 비반감\n우 : 3000만, 비반감", //54
    "불꽃늑대 Lv.1\n6000억, 90%, 반감", //55
    "도로시 Lv.210\n8400억, 250%, 비반감", //56
    "우르스 Lv,130\n2조 6252억 2362만 4000, 10%", //57
    "아르카누스 Lv.101\n60억ㆍ150억ㆍ1500억ㆍ1.5조ㆍ10.5조ㆍ900조\n50%ㆍ100%ㆍ150%ㆍ200%ㆍ250%ㆍ300%, 반감", //58
    "마왕 발록 Lv.65\n478만, 25%, 비반감, 3분간 무적",//59
    "익스트림 빅풋 Lv.260\n15조, 300%, 반감, 바인드 면역",//60
];

module.exports = gB;