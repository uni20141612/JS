const job = {};

job.getjobmention = function(msg){
    var jobmention = "";
    switch(msg){
        case "!초보자":
          jobmention = jobMentionList[0];
          chkjob = 0;
          break;
        case "!히어로":
        case "!혀로":
        case "!김치싸다구":
          jobmention = jobMentionList[1];
          chkjob = 1;
          break;
        case "!팔라딘":
        case "!팔라":
        case "!괄라딘":
        case "!팔퀴벌레":
        case "!망치나가신다":
          jobmention = jobMentionList[2];
          chkjob = 2;
          break;
        case "!다크나이트":
        case "!닼나":
        case "!닥나":
        case "!창지기":
          jobmention = jobMentionList[3];
          chkjob = 3;
          break;
        case "!아크메이지(불,독)":
        case "!아크메이지불독":
        case "!불독":
        case "!방구쟁이":
          jobmention = jobMentionList[4];
          chkjob = 4;
          break;
        case "!아크메이지(썬,콜)":
        case "!아크메이지썬콜":
        case "!썬콜":
        case "!썬콜게이트":
          jobmention = jobMentionList[5];
          chkjob = 5;
          break;
        case "!비숍":
        case "!오더마스터":
        case "!프레이싸개":
          jobmention = jobMentionList[6];
          chkjob = 6;
          break;
        case "!보우마스터":
        case "!보마":
        case "!보마쟝":
        case "!보마조아":
        case "!무지개색총공격":
          jobmention = jobMentionList[7];
          chkjob = 7;
          break;
        case "!신궁":
        case "!신궁쟝":
        case "!거리두기마스터":
          jobmention = jobMentionList[8];
          chkjob = 8;
          break;
        case "!패스파인더":
        case "!패파":
        case "!패파쟝":
        case "!모궁최고아웃풋":
        case "!간장게장":
          jobmention = jobMentionList[9];
          chkjob = 9;
          break;
        case "!나이트로드":
        case "!나로":
        case "!표창싸개":
        case "!물몸":
          jobmention = jobMentionList[10];
          chkjob = 10;
          break;
        case "!섀도어":
        case "!닭뛰터줏대감":
          jobmention = jobMentionList[11];
          chkjob = 11;
          break;
        case "!듀얼블레이드":
        case "!듀블":
        case "!쌍칼":
        case "!블토카퓨":
          jobmention = jobMentionList[12];
          chkjob = 12;
          break;
        case "!바이퍼":
        case "!초사이어인":
          jobmention = jobMentionList[13];
          chkjob = 13;
          break;
        case "!캡틴":
        case "!캢틴":
        case "!총잡이":
          jobmention = jobMentionList[14];
          chkjob = 14;
          break;
        case "!캐논슈터":
        case "!캐슈":
        case "!원숭이주인":
          jobmention = jobMentionList[15];
          chkjob = 15;
          break;
        case "!노블레스":
        case "!시그초보자":
          jobmention = jobMentionList[16];
          chkjob = 16;
          break;
        case "!소울마스터":
        case "!소마":
        case "!보마아니고":
          jobmention = jobMentionList[17];
          chkjob = 17;
          break;
        case "!플레임위자드":
        case "!플위":
        case "!엠피조루":
        case "!마나조루":
          jobmention = jobMentionList[18];
          chkjob = 18;
          break;
        case "!윈드브레이커":
        case "!윈브":
        case "!페턴":
          jobmention = jobMentionList[19];
          chkjob = 19;
          break;
        case "!나이트워커":
        case "!나워":
        case "!점샷필수":
        case "!박쥐":
          jobmention = jobMentionList[20];
          chkjob = 20;
          break;
        case "!스트라이커":
        case "!스커":
        case "!경직":
          jobmention = jobMentionList[21];
          chkjob = 21;
          break;
        case "!미하일":
        case "!로얄가드":
        case "!리듬게임":
          jobmention = jobMentionList[22];
          chkjob = 22;
          break;
        case "!시티즌":
        case "!레지초보자":
          jobmention = jobMentionList[23];
          chkjob = 23;
          break;
        case "!블래스터":
        case "!블래":
        case "!손목브레이커":
          jobmention = jobMentionList[24];
          chkjob = 24;
          break;
        case "!배틀메이지":
        case "!배메":
        case "!오라토템":
          jobmention = jobMentionList[25];
          chkjob = 25;
          break;
        case "!와일드헌터":
        case "!와헌":
        case "!버프주실와헌분계신가요":
          jobmention = jobMentionList[26];
          chkjob = 26;
          break;
        case "!메카닉":
        case "!메탁기":
        case "!세탁기":
          jobmention = jobMentionList[27];
          chkjob = 27;
          break;
        case "!제논":
        case "!올스탯":
          jobmention = jobMentionList[28];
          chkjob = 28;
          break;
        case "!데몬슬레이어":
        case "!데슬":
        case "!홈리스":
          jobmention = jobMentionList[29];
          chkjob = 29;
          break;
        case "!데몬어벤져":
        case "!데몬어벤저":
        case "!데벤져":
        case "!데벤저":
        case "!아또데벤템떴네":
          jobmention = jobMentionList[30];
          chkjob = 30;
          break;
        case "!아란":
        case "!곧무원":
        case "!순대":
        case "!분노조절장애":
        case "!분조장":
          jobmention = jobMentionList[31];
          chkjob = 31;
          break;
        case "!에반":
        case "!프리드":
        case "!돌아와":
          jobmention = jobMentionList[32];
          chkjob = 32;
          break;
        case "!루미너스":
        case "!루미":
        case "!어둠이..넘쳐흐른다!!":
          jobmention = jobMentionList[33];
          chkjob = 33;
          break;
        case "!메르세데스":
        case "!메르":
        case "!메세":
        case "!메르콥터":
        case "!여왕님":
        case "!샾없찐":
        case "!어디서샤프도없는게까불어":
          jobmention = jobMentionList[34];
          chkjob = 34;
          break;
        case "!팬텀":
        case "!기생오라비":
        case "!뭐이악":
        case "!뭐어?!이악녀가!!":
          jobmention = jobMentionList[35];
          chkjob = 35;
          break;
        case "!은월":
        case "!분바":
        case "![]":
          jobmention = jobMentionList[36];
          chkjob = 36;
          break;
        case "!카이저":
        case "!조상님":
        case "!디럭스봄버":
          jobmention = jobMentionList[37];
          chkjob = 37;
          break;
        case "!카인":
        case "!조시커":
        case "!샾없찐2":
          jobmention = jobMentionList[38];
          chkjob = 38;
          break;
        case "!카데나":
        case "!남이하면멋있는데내가하긴싫은직업":
        case "!사슬":
          jobmention = jobMentionList[39];
          chkjob = 39;
          break;
        case "!엔젤릭버스터":
        case "!엔버":
        case "!소울시커":
        case "!전장의아이돌":
        case "!피니투라☆페투치아":
        case "!Spotlight":
        case "!StarBubble":
          jobmention = jobMentionList[40];
          chkjob = 40;
          break;
        case "!아델":
        case "!루델팡":
        case "!츄델":
        case "!사기직업":
          jobmention = jobMentionList[41];
          chkjob = 41;
          break;
        case "!일리움":
        case "!탈모":
          jobmention = jobMentionList[42];
          chkjob = 42;
          break;
        case "!아크":
        case "!야,아크":
          jobmention = jobMentionList[43];
          chkjob = 43;
          break;
        case "!라라":
        case "!창섭":
          jobmention = jobMentionList[44];
          chkjob = 44;
          break;
        case "!호영":
        case "!호엥":
        case "!백호영":
          jobmention = jobMentionList[45];
          chkjob = 45;
          break;
        case "!제로":
        case "!바싸개":
        case "!클라이언트브레이크":
        case "!알파벳":
          jobmention = jobMentionList[46];
          chkjob = 46;
          break;
        case "!키네시스":
        case "!키네":
        case "!서울사람":
        case "!기내식":
          jobmention = jobMentionList[47];
          chkjob = 47;
          break;
        case "!핑크빈":
        case "!핑빈":
          jobmention = jobMentionList[48];
          chkjob = 48;
          break;
        case "!예티":
          jobmention = jobMentionList[49];
          chkjob = 49;
          break;
        case "!칼리":
        case "!차크리":
        case "!차크람":
        case "!신직업":
          jobmention = jobMentionList[50];
          chkjob = 50;
          break;
        default:
          jobmention = "-";
          chkjob = -1;
          break;
      }
      return jobmention;
};
job.getchkjob = function(msg){
    chkjob = -1;
    switch(msg){
        case "!초보자":
          chkjob = 0;
          break;
        case "!히어로":
        case "!혀로":
        case "!김치싸다구":
          chkjob = 1;
          break;
        case "!팔라딘":
        case "!팔라":
        case "!괄라딘":
        case "!팔퀴벌레":
        case "!망치나가신다":
          chkjob = 2;
          break;
        case "!다크나이트":
        case "!닼나":
        case "!닥나":
        case "!창지기":
          chkjob = 3;
          break;
        case "!아크메이지(불,독)":
        case "!아크메이지불독":
        case "!불독":
        case "!방구쟁이":
          chkjob = 4;
          break;
        case "!아크메이지(썬,콜)":
        case "!아크메이지썬콜":
        case "!썬콜":
        case "!썬콜게이트":
          chkjob = 5;
          break;
        case "!비숍":
        case "!오더마스터":
        case "!프레이싸개":
          chkjob = 6;
          break;
        case "!보우마스터":
        case "!보마":
        case "!보마쟝":
        case "!보마조아":
        case "!무지개색총공격":
          chkjob = 7;
          break;
        case "!신궁":
        case "!신궁쟝":
        case "!거리두기마스터":
        case "!사회적거리두기":
        case "!사회가거리두기":
          chkjob = 8;
          break;
        case "!패스파인더":
        case "!패파":
        case "!패파쟝":
        case "!모궁최고아웃풋":
        case "!간장게장":
          chkjob = 9;
          break;
        case "!나이트로드":
        case "!나로":
        case "!표창싸개":
        case "!물몸":
          chkjob = 10;
          break;
        case "!섀도어":
        case "!닭뛰터줏대감":
          chkjob = 11;
          break;
        case "!듀얼블레이드":
        case "!듀블":
        case "!쌍칼":
        case "!블토카퓨":
          chkjob = 12;
          break;
        case "!바이퍼":
        case "!초사이어인":
          chkjob = 13;
          break;
        case "!캡틴":
        case "!캢틴":
        case "!총잡이":
          chkjob = 14;
          break;
        case "!캐논슈터":
        case "!캐슈":
        case "!캐슈넛":
        case "!원숭이주인":
          chkjob = 15;
          break;
        case "!노블레스":
        case "!시그초보자":
          chkjob = 16;
          break;
        case "!소울마스터":
        case "!소마":
        case "!보마아니고":
          chkjob = 17;
          break;
        case "!플레임위자드":
        case "!플위":
        case "!엠피조루":
        case "!마나조루":
          chkjob = 18;
          break;
        case "!윈드브레이커":
        case "!윈브":
        case "!페턴":
          chkjob = 19;
          break;
        case "!나이트워커":
        case "!나워":
        case "!점샷필수":
        case "!박쥐":
          chkjob = 20;
          break;
        case "!스트라이커":
        case "!스커":
        case "!경직":
          chkjob = 21;
          break;
        case "!미하일":
        case "!로얄가드":
        case "!리듬게임":
          chkjob = 22;
          break;
        case "!시티즌":
        case "!레지초보자":
          chkjob = 23;
          break;
        case "!블래스터":
        case "!블래":
        case "!손목브레이커":
          chkjob = 24;
          break;
        case "!배틀메이지":
        case "!배메":
        case "!오라토템":
          chkjob = 25;
          break;
        case "!와일드헌터":
        case "!와헌":
        case "!버프주실와헌분계신가요":
          chkjob = 26;
          break;
        case "!메카닉":
        case "!메탁기":
        case "!세탁기":
          chkjob = 27;
          break;
        case "!제논":
        case "!올스탯":
          chkjob = 28;
          break;
        case "!데몬슬레이어":
        case "!데슬":
        case "!홈리스":
          chkjob = 29;
          break;
        case "!데몬어벤져":
        case "!데몬어벤저":
        case "!데벤져":
        case "!데벤저":
        case "!아또데벤템떴네":
          chkjob = 30;
          break;
        case "!아란":
        case "!곧무원":
        case "!순대":
        case "!분노조절장애":
        case "!분조장":
          chkjob = 31;
          break;
        case "!에반":
        case "!프리드":
        case "!돌아와":
          chkjob = 32;
          break;
        case "!루미너스":
        case "!루미":
        case "!어둠이..넘쳐흐른다!!":
          chkjob = 33;
          break;
        case "!메르세데스":
        case "!메르":
        case "!메세":
        case "!메르콥터":
        case "!여왕님":
        case "!샾없찐":
        case "!어디서샤프도없는게까불어":
          chkjob = 34;
          break;
        case "!팬텀":
        case "!기생오라비":
        case "!뭐이악":
        case "!뭐어?!이악녀가!!":
          chkjob = 35;
          break;
        case "!은월":
        case "!분바":
        case "![]":
          chkjob = 36;
          break;
        case "!카이저":
        case "!조상님":
        case "!디럭스봄버":
          chkjob = 37;
          break;
        case "!카인":
        case "!조시커":
        case "!샾없찐2":
          chkjob = 38;
          break;
        case "!카데나":
        case "!남이하면멋있는데내가하긴싫은직업":
        case "!사슬":
          chkjob = 39;
          break;
        case "!엔젤릭버스터":
        case "!엔버":
        case "!소울시커":
        case "!전장의아이돌":
        case "!피니투라☆페투치아":
        case "!Spotlight":
        case "!StarBubble":
          chkjob = 40;
          break;
        case "!아델":
        case "!루델팡":
        case "!츄델":
        case "!사기직업":
        case "!적폐":
        case "!씹사기":
        case "!개사기":
        case "!원기아들":
          chkjob = 41;
          break;
        case "!일리움":
        case "!탈모":
          chkjob = 42;
          break;
        case "!아크":
        case "!야,아크":
          chkjob = 43;
          break;
        case "!라라":
        case "!창섭":
          chkjob = 44;
          break;
        case "!호영":
        case "!호엥":
        case "!백호영":
        case "!사기캐":
          chkjob = 45;
          break;
        case "!제로":
        case "!바싸개":
        case "!클라이언트브레이크":
        case "!알파벳":
          chkjob = 46;
          break;
        case "!키네시스":
        case "!키네":
        case "!서울사람":
        case "!기내식":
          chkjob = 47;
          break;
        case "!핑크빈":
        case "!핑빈":
          chkjob = 48;
          break;
        case "!예티":
          chkjob = 49;
          break;
        case "!칼리":
        case "!차크리":
        case "!차크람":
        case "!신직업":
          chkjob = 50;
          break;
        default:
          chkjob = -1;
          break;
      }
      return chkjob;
};
job.getJobname = function (ind){
    rep = "";
    switch(ind){
      case 0:
        rep = "초보자";
        break;
      case 1:
        rep = "히어로";
        break;
      case 2:
        rep = "팔라딘";
        break;
      case 3:
        rep = "다크나이트";
        break;
      case 4:
        rep = "아크메이지(불,독)";
        break;
      case 5:
        rep = "아크메이지(썬,콜)";
        break;
      case 6:
        rep = "비숍";
        break;
      case 7:
        rep = "★보우마스터★";
        break;
      case 8:
        rep = "신궁";
        break;
      case 9:
        rep = "패스파인더";
        break;
      case 10:
        rep = "나이트로드";
        break;
      case 11:
        rep = "섀도어";
        break;
      case 12:
        rep = "듀얼블레이드";
        break;
      case 13:
        rep = "바이퍼";
        break;
      case 14:
        rep = "캡틴";
        break;
      case 15:
        rep = "캐논슈터";
        break;
      case 16:
        rep = "노블레스";
        break;
      case 17:
        rep = "소울마스터";
        break;
      case 18:
        rep = "플레임위자드";
        break;
      case 19:
        rep = "윈드브레이커";
        break;
      case 20:
        rep = "나이트워커";
        break;
      case 21:
        rep = "스트라이커";
        break;
      case 22:
        rep = "미하일";
        break;
      case 23:
        rep = "시티즌";
        break;
      case 24:
        rep = "블래스터";
        break;
      case 25:
        rep = "배틀메이지";
        break;
      case 26:
        rep = "와일드헌터";
        break;
      case 27:
        rep = "메카닉";
        break;
      case 28:
        rep = "제논";
        break;
      case 29:
        rep = "데몬슬레이어";
        break;
      case 30:
        rep = "데몬어벤져";
        break;
      case 31:
        rep = "아란";
        break;
      case 32:
        rep = "에반";
        break;
      case 33:
        rep = "루미너스";
        break;
      case 34:
        rep = "메르세데스";
        break;
      case 35:
        rep = "팬텀";
        break;
      case 36:
        rep = "은월";
        break;
      case 37:
        rep = "카이저";
        break;
      case 38:
        rep = "카인";
        break;
      case 39:
        rep = "카데나";
        break;
      case 40:
        rep = "엔젤릭버스터";
        break;
      case 41:
        rep = "아델";
        break;
      case 42:
        rep = "일리움";
        break;
      case 43:
        rep = "아크";
        break;
      case 44:
        rep = "라라";
        break;
      case 45:
        rep = "호영";
        break;
      case 46:
        rep = "제로";
        break;
      case 47:
        rep = "키네시스";
        break;
      case 48:
        rep = "핑크빈";
        break;
      case 49:
        rep = "예티";
        break;
      case 50:
        rep = "칼리";
        break;
    }
    return rep;
};
job.getJobdesc = function (ind){
    rep = "";
    switch(ind){
      case 0:
        rep = "전직을 하지 않은 모험가";
        break;
      case 1:
        rep = "타격을 극대화한 전사 최고의 딜러!";
        break;
      case 2:
        rep = "절대 방어의 수호기사!";
        break;
      case 3:
        rep = "죽지 않는 암흑기사!";
        break;
      case 4:
        rep = "강력한 중첩 도트 공격의 불과 독의 지배자!";
        break;
      case 5:
        rep = "결빙된 적에게 선사하는 짜릿한 공격!";
        break;
      case 6:
        rep = "파티원의 수만큼 최종 대미지가 증가한다!";
        break;
      case 7:
        rep = "다양한 속성의 화살로 퍼붓는 시원한 속사포 공격!";
        break;
      case 8:
        rep = "정확한 원 샷 원 킬의 스나이퍼!";
        break;
      case 9:
        rep = "한 번 노린 건 놓치지 않아!";
        break;
      case 10:
        rep = "한 번의 공격으로 주위의 모든 적을 섬멸하라!";
        break;
      case 11:
        rep = "공격 시마다 크리티컬 확률이 증가하는 크리티컬 그로잉!";
        break;
      case 12:
        rep = "날카로운 두 개의 칼날이 적의 심장을 꿰뚫는다!";
        break;
      case 13:
        rep = "에너지가 충전되는 순간 모든 것이 변화한다!";
        break;
      case 14:
        rep = "더욱 강력해진 무기를 장착한 최강 병기!";
        break;
      case 15:
        rep = "심장을 울리는 전율의 포격!";
        break;
      case 16:
        rep = "시그너스기사단 계열의 초보자";
        break;
      case 17:
        rep = "빛의 기사";
        break;
      case 18:
        rep = "불의 기사";
        break;
      case 19:
        rep = "바람의 기사";
        break;
      case 20:
        rep = "어둠의 기사";
        break;
      case 21:
        rep = "번개의 기사";
        break;
      case 22:
        rep = "빛의 기사단장";
        break;
      case 23:
        rep = "레지스탕스 계열의 초보자";
        break;
      case 24:
        rep = "끊기지 않는 무한 연속 공격";
        break;
      case 25:
        rep = "실전에 특화된 근접 마법사";
        break;
      case 26:
        rep = "재규어를 탄 궁수";
        break;
      case 27:
        rep = "로봇을 조종하여 적을 무찌른다!";
        break;
      case 28:
        rep = "완벽한 전투를 위해 태어난 최종 병기";
        break;
      case 29:
        rep = "검은 마법사의 오른팔";
        break;
      case 30:
        rep = "검은 마법사의 오른팔";
        break;
      case 31:
        rep = "전장을 지배하는 폴암의 여전사";
        break;
      case 32:
        rep = "드래곤 마스터의 후계자";
        break;
      case 33:
        rep = "빛과 어둠의 경계에 선 마법사";
        break;
      case 34:
        rep = "운명에 맞서는 엘프의 군주";
        break;
      case 35:
        rep = "무엇이든 손에 넣는 전설의 괴도";
        break;
      case 36:
        rep = "잊혀진 영웅";
        break;
      case 37:
        rep = "노바의 수호자";
        break;
      case 38:
        rep = "어둠의 추격자";
        break;
      case 39:
        rep = "해방의 사슬";
        break;
      case 40:
        rep = "전장의 아이돌";
        break;
      case 41:
        rep = "리스토니아 왕국 제1왕자의 계약 기사";
        break;
      case 42:
        rep = "광휘의 날개";
        break;
      case 43:
        rep = "괴물이 된 소년";
        break;
      case 44:
        rep = "낭만풍수사";
        break;
      case 45:
        rep = "천방지축 도사";
        break;
      case 46:
        rep = "신의 아이";
        break;
      case 47:
        rep = "The Supernatural";
        break;
      case 48:
        rep = "슈퍼스타 핑크빈";
        break;
      case 49:
        rep = "귀여운 예티";
        break;
      case 50:
        rep = "복수의 바람";
        break;
    }
    return rep;
};
job.getJobimage = function (ind){
    rep = "";
    switch(ind){
      case 0:
        rep = "https://i.imgur.com/XpXANhr.png";
        break;
      case 1:
        rep = "https://i.imgur.com/yR64BSJ.png";
        break;
      case 2:
        rep = "https://i.imgur.com/AxFfbzt.png";
        break;
      case 3:
        rep = "https://i.imgur.com/Eu9GYYQ.png";
        break;
      case 4:        
        rep = "https://i.imgur.com/qexcEQ1.png";
        break;
      case 5:
        rep = "https://i.imgur.com/e489bkU.png";
        break;
      case 6:
        rep = "https://i.imgur.com/3JFD7eb.png";
        break;
      case 7:
        rep = "https://i.imgur.com/1C8n9fu.png";
        break;
      case 8:
        rep = "https://i.imgur.com/pjYNxI2.png";
        break;
      case 9:
        rep = "https://i.imgur.com/ylp7Asx.png";
        break;
      case 10:
        rep = "https://i.imgur.com/1c0vBdq.png";
        break;
      case 11:
        rep = "https://i.imgur.com/c99CM6o.png";
        break;
      case 12:
        rep = "https://i.imgur.com/8573cCm.png";
        break;
      case 13:
        rep = "https://i.imgur.com/lA4gf07.png";
        break;
      case 14:
        rep = "https://i.imgur.com/YpJuszE.png";
        break;
      case 15:
        rep = "https://i.imgur.com/a2dj0SC.png";
        break;
      case 16:
        rep = "https://i.imgur.com/SrvHcpk.png";
        break;
      case 17:
        rep = "https://i.imgur.com/86G8G81.png";
        break;
      case 18:
        rep = "https://i.imgur.com/r2odYMI.png";
        break;
      case 19:
        rep = "https://i.imgur.com/QvVENG6.png";
        break;
      case 20:
        rep = "https://i.imgur.com/UA7GQR5.png";
        break;
      case 21:
        rep = "https://i.imgur.com/iRzwyya.png";
        break;
      case 22:
        rep = "https://i.imgur.com/a1XocML.png";
        break;
      case 23:
        rep = "https://i.imgur.com/tPXbBkl.png";
        break;
      case 24:
        rep = "https://i.imgur.com/OkVTDFH.png";
        break;
      case 25:
        rep = "https://i.imgur.com/TmkoXya.png";
        break;
      case 26:
        rep = "https://i.imgur.com/FuAD0Vx.png";
        break;
      case 27:
        rep = "https://i.imgur.com/rVT6L9g.png";
        break;
      case 28:
        rep = "https://i.imgur.com/D7Sn07j.png";
        break;
      case 29:
        rep = "https://i.imgur.com/6wT2KgK.png";
        break;
      case 30:
        rep = "https://i.imgur.com/QDRmNWX.png";
        break;
      case 31:
        rep = "https://i.imgur.com/iptQCg1.png";
        break;
      case 32:
        rep = "https://i.imgur.com/WIE8YX4.png";
        break;
      case 33:
        rep = "https://i.imgur.com/5FZ4lo9.png";
        break;
      case 34:
        rep = "https://i.imgur.com/jkFGofc.png";
        break;
      case 35:
        rep = "https://i.imgur.com/IwWPQTQ.png";
        break;
      case 36:
        rep = "https://i.imgur.com/7KuU5ai.png";
        break;
      case 37:
        rep = "https://i.imgur.com/j3zvO6O.png";
        break;
      case 38:
        rep = "https://i.imgur.com/iowSIHa.png";
        break;
      case 39:
        rep = "https://i.imgur.com/58cW5OD.png";
        break;
      case 40:
        rep = "https://i.imgur.com/gKYwFFi.png";
        break;
      case 41:
        rep = "https://i.imgur.com/fngD3E5.png";
        break;
      case 42:
        rep = "https://i.imgur.com/OS3CD3H.png";
        break;
      case 43:
        rep = "https://i.imgur.com/XS0f0gQ.png";
        break;
      case 44:
        rep = "https://i.imgur.com/mEXNZXr.png";
        break;
      case 45:
        rep = "https://i.imgur.com/PNOrZOS.png";
        break;
      case 46:
        rep = "https://i.imgur.com/ZaDHeoV.png";
        break;
      case 47:
        rep = "https://i.imgur.com/sgyU0sj.png";
        break;
      case 48:
        rep = "https://i.imgur.com/F4YyYt6.png";
        break;
      case 49:
        rep = "https://i.imgur.com/mfJk2Al.png";
        break;
      case 50:
        rep = "https://i.imgur.com/s6TTDnH.png";
        break;
    }
    return rep;
};
job.getJobweb = function (ind){
    rep = "";
    switch(ind){
      case 0:
        rep = "w/초보자";
        break;
      case 1:
        rep = "w/히어로(메이플스토리)";
        break;
      case 2:
        rep = "w/팔라딘(메이플스토리)";
        break;
      case 3:
        rep = "w/다크나이트(메이플스토리)";
        break;
      case 4:
        rep = "w/아크메이지(불,독)";
        break;
      case 5:
        rep = "w/아크메이지(썬,콜)";
        break;
      case 6:
        rep = "w/비숍(메이플스토리)";
        break;
      case 7:
        rep = "w/보우마스터";
        break;
      case 8:
        rep = "w/신궁(메이플스토리)";
        break;
      case 9:
        rep = "w/패스파인더(메이플스토리)";
        break;
      case 10:
        rep = "w/나이트로드";
        break;
      case 11:
        rep = "w/섀도어";
        break;
      case 12:
        rep = "w/듀얼블레이드";
        break;
      case 13:
        rep = "w/바이퍼(메이플스토리)";
        break;
      case 14:
        rep = "w/캡틴(메이플스토리)";
        break;
      case 15:
        rep = "w/캐논슈터";
        break;
      case 16:
        rep = "w/시그너스%20기사단#s-6";
        break;
      case 17:
        rep = "w/소울마스터";
        break;
      case 18:
        rep = "w/플레임위자드";
        break;
      case 19:
        rep = "w/윈드브레이커(메이플스토리)";
        break;
      case 20:
        rep = "w/나이트워커";
        break;
      case 21:
        rep = "w/스트라이커(메이플스토리)";
        break;
      case 22:
        rep = "w/미하일(메이플스토리)";
        break;
      case 23:
        rep = "w/레지스탕스(메이플스토리)#s-7";
        break;
      case 24:
        rep = "w/블래스터(메이플스토리)";
        break;
      case 25:
        rep = "w/배틀메이지(메이플스토리)";
        break;
      case 26:
        rep = "w/와일드헌터";
        break;
      case 27:
        rep = "w/메카닉(메이플스토리)";
        break;
      case 28:
        rep = "w/제논(메이플스토리)";
        break;
      case 29:
        rep = "w/데몬슬레이어(메이플스토리)";
        break;
      case 30:
        rep = "w/데몬어벤져";
        break;
      case 31:
        rep = "w/아란(메이플스토리)";
        break;
      case 32:
        rep = "w/에반(메이플스토리)";
        break;
      case 33:
        rep = "w/루미너스(메이플스토리)";
        break;
      case 34:
        rep = "w/메르세데스(메이플스토리)";
        break;
      case 35:
        rep = "w/팬텀(메이플스토리)";
        break;
      case 36:
        rep = "w/은월";
        break;
      case 37:
        rep = "w/카이저(메이플스토리)";
        break;
      case 38:
        rep = "w/카인(메이플스토리)";
        break;
      case 39:
        rep = "w/카데나";
        break;
      case 40:
        rep = "w/엔젤릭버스터";
        break;
      case 41:
        rep = "w/아델(메이플스토리)";
        break;
      case 42:
        rep = "w/일리움";
        break;
      case 43:
        rep = "w/아크(메이플스토리)";
        break;
      case 44:
        rep = "w/라라(메이플스토리)";
        break;
      case 45:
        rep = "w/호영(메이플스토리)";
        break;
      case 46:
        rep = "w/제로(메이플스토리)";
        break;
      case 47:
        rep = "w/키네시스";
        break;
      case 48:
        rep = "w/핑크빈(직업)";
        break;
      case 49:
        rep = "w/예티(메이플스토리)";
        break;
      case 50:
        rep = "w/칼리(메이플스토리)";
        break;
    }
    return rep;
};
job.getJobRecommend = function(msg){
  chkjob = -1;
  var jdesc = msg.split(" ")[1];
  if(jdesc == undefined){
    do{
    chkjob = getRandomInt(1, 48);
    }while(chkjob == 16 || chkjob == 23)
  }
  else{
    var jrand = 0;
    if(jdesc == "전사"){
      var jwarrior = [1, 2, 3, 17, 22, 24, 29, 30, 31, 37, 41, 46];
      jrand = getRandomInt(0, jwarrior.length);
      chkjob = jwarrior[jrand];
    }
    else if(jdesc == "마법사"){
      var jmagic = [4, 5, 6, 18, 25, 32, 33, 42, 44, 47];
      jrand = getRandomInt(0, jmagic.length);
      chkjob = jmagic[jrand];
    }
    else if(jdesc == "궁수"){
      var jarcher = [7, 8, 9, 19, 26, 34, 38];
      jrand = getRandomInt(0, jarcher.length);
      chkjob = jarcher[jrand];
    }
    else if(jdesc == "도적"){
      var jthief = [10, 11, 12, 20, 28, 35, 39, 45, 50];
      jrand = getRandomInt(0, jthief.length);
      chkjob = jthief[jrand];
    }
    else if(jdesc == "해적"){
      var jpirate = [13, 14, 15, 21, 27, 28, 36, 40, 43];
      jrand = getRandomInt(0, jpirate.length);
      chkjob = jpirate[jrand];
    }
    else if(jdesc == "힘" || jdesc == "STR"){
      var jstr = [1, 2, 3, 13, 15, 17, 21, 22, 24, 29, 31, 36, 37, 41, 43, 46];
      jrand = getRandomInt(0, jstr.length);
      chkjob = jstr[jrand];
    }
    else if(jdesc == "인트" || jdesc == "INT"){
      var jint = [4, 5, 6, 18, 25, 32, 33, 42, 44, 47];
      jrand = getRandomInt(0, jint.length);
      chkjob = jint[jrand];
    }
    else if(jdesc == "덱스" || jdesc == "DEX"){
      var jdex = [7, 8, 9, 14, 19, 26, 27, 34, 38, 40];
      jrand = getRandomInt(0, jdex.length);
      chkjob = jdex[jrand];
    }
    else if(jdesc == "럭" || jdesc == "LUK"){
      var jluk = [10, 11, 12, 20, 28, 35, 39, 45, 50];
      jrand = getRandomInt(0, jluk.length);
      chkjob = jluk[jrand];
    }
    else if(jdesc == "특수"){
      var jspecial = [0, 16, 23, 28, 30];
      jrand = getRandomInt(0, jspecial.length);
      chkjob = jspecial[jrand];
    }    
    else{
      chkjob = -1;
    }
  }
  return chkjob;
};

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //최댓값은 제외, 최솟값은 포함
}

var chkjob = -1;
var jobMentionList = [
    "초보자\n일반 모험가가 레벨1부터 10까지 거치는 직업. 전사계열이다. 아케인리버 지역 입장이 불가능해 세계수, 헤이븐이 최종 사냥터이다.", // 0  초보자
    "히어로\n\n 모험가 전사 중 화력 특화 직업. 메인 컨셉트는 검술의 달인.\n\n무적기 : 콤보 데스폴트 (1.6초)\n뎀감기 : 없음\n바인드 : 없음\n\n공격대원 효과 : STR 10/20/40/80/100 증가\n\n링크 스킬 : 인빈서블 빌리프 - 현재 HP가 최대 HP의 15% 이하가 되었을 때 자동 발동되어 3초 동안 1초마다 최대 HP의 35% 회복. 재발동 대기시간 240초", // 1  히어로
    "팔라딘\n\n모험가 전사 중 방어 및 파티 보조 특화 직업. 메인 컨셉트는 성기사.\n\n무적기 : 새크로생티티 (30초), 가디언 스피릿 (파티원 부활 시 10초)\n뎀감기 : 블레싱 아머 -25%, 홀리 차지 -10%, 그랜드 크로스 키다운 중 -50%\n바인드 : 스마이트\n\n공격대원 효과 : STR 10/20/40/80/100 증가\n\n링크 스킬 : 인빈서블 빌리프 - 현재 HP가 최대 HP의 15% 이하가 되었을 때 자동 발동되어 3초 동안 1초마다 최대 HP의 35% 회복. 재발동 대기시간 240초", // 2  팔라딘
    "다크나이트\n\n모험가 전사 중 지속력 및 생존력 특화 직업. 메인 컨셉트는 암흑 기사.\n\n무적기 : 사망 시 부활 후 2(쿼터)/8(하프)/40(풀)초\n뎀감기 : 다크 스피어 공격 동작 중 -10%\n바인드 : 없음\n\n공격대원 효과 : 최대 HP 2/3/4/5/6% 상승\n\n링크 스킬 : 인빈서블 빌리프 - 현재 HP가 최대 HP의 15% 이하가 되었을 때 자동 발동되어 3초 동안 1초마다 최대 HP의 35% 회복. 재발동 대기시간 240초", // 3  다크나이트
    "아크메이지(불,독)\n\nDoT(Damage over Time)를 기반으로, 일정 주기마다 폭딜을 쏟아붓는 누커. 편의성과 안정성을 약간 희생한 대신 그 보상으로 막강한 화력을 받은 딜러이다.\n\n무적기 : 없음\n뎀감기 : 에테리얼 폼[공용] (3초)\n바인드 : 없음\n\n공격대원 효과 : 최대 MP 2/3/4/5/6% 상승\n\n링크 스킬 : 임피리컬 널리지 - 공격한 적 중 최대 HP가 가장 높은 적에 대한 약점을 35% 확률로 파악, 파악한 약점은 10초 동안 지속되며 최대 3회까지 중첩. 중첩 당 데미지 3%, 방어율 무시 3% 증가", // 4  불독
    "아크메이지(썬,콜)\n\n얼음 속성 공격을 이용한 빙결 중첩이 있다. 이렇게 빙결이 중첩된 적은 번개 속성 스킬에 공격당할 때 더욱 큰 피해를 받는다. 썬콜의 보스전은 얼마나 안정적으로 빙결 중첩을 유지하느냐에 달려 있다.\n\n무적기 : 프리징 브레스 (시전중 최대 13초)\n뎀감기 : 에테리얼 폼[공용] (3초)\n바인드 : 프리징 브레스(13초)\n\n공격대원 효과 : INT 10/20/40/80/100 상승\n\n링크 스킬 : 임피리컬 널리지 - 공격한 적 중 최대 HP가 가장 높은 적에 대한 약점을 35% 확률로 파악, 파악한 약점은 10초 동안 지속되며 최대 3회까지 중첩. 중첩 당 데미지 3%, 방어율 무시 3% 증가", // 5  썬콜
    "비숍\n\n모든 직업을 통틀어 유일한 유틸리티 집중형 직업으로, 파티원 보조에 초점을 맞춘 스킬 구성을 지녔다. 뿐만 아니라 단순한 딜링 사이클과 뛰어난 공격 효율성 덕분에 보조 격수로서 기용되기도 한다.\n\n무적기 : 없음\n뎀감기 : 홀리 매직쉘 (10~15%, 가드), 헤븐즈 도어 (사망 방지), 에테리얼 폼[공용] (3초)\n바인드 : 없음\n\n공격대원 효과 : INT 10/20/40/80/100 상승\n\n링크 스킬 : 임피리컬 널리지 - 공격한 적 중 최대 HP가 가장 높은 적에 대한 약점을 35% 확률로 파악, 파악한 약점은 10초 동안 지속되며 최대 3회까지 중첩. 중첩 당 데미지 3%, 방어율 무시 3% 증가", // 6  비숍
    "보우마스터\n\n메이플스토리 최초의 속사기인 폭풍의 시를 주력으로 사용하는 정통 속사류 궁수다. 대부분의 스킬이 폭풍의 시라는 주력기 하나가 트리거가 되어 발동된다.\n\n무적기 : 없음\n뎀감기 : 실루엣 미라주 (스택 소모 시 90%)\n바인드 : 없음\n\n공격대원 효과 : DEX 10/20/40/80/100 상승\n\n링크 스킬 : 어드벤쳐러 큐리어스 - 몬스터 컬렉션 등록 확률 30%, 크리티컬 확률 10% 증가\n\n보 마 조 아", // 7  보우마스터
    "신궁\n\n신궁이 가진 대부분의 스킬들은 1:1에 특화되어 있고, 주력기의 사거리가 굉장히 길다. 대부분의 보스에서는 매우 긴 사거리 덕분에 거리 유지로 어려움을 겪을 일은 거의 없다.\n\n무적기 : 트루 스나이핑 (조준 동안 2초, 종료후 1초 (최대 3초))\n뎀감기 : 없음\n바인드 : 없음\n\n공격대원 효과 : 크리티컬 확률 1/2/3/4/5%\n\n링크 스킬 : 어드벤쳐러 큐리어스 - 몬스터 컬렉션 등록 확률 30%, 크리티컬 확률 10% 증가", // 8  신궁
    "패스파인더\n\n세 가지 문양을 수시로 바꿔가며 공격하는 준 속사기 직업. 다른 속사기 직업들과는 다르게 두 가지 스킬을 번갈아 사용하기에 속사기에 준하는 취급을 받는다.\n\n[2019년 1월 31일 출시]\n\n무적기 : 얼티밋 블래스트 (1.5초)\n뎀감기 : 옵시디언 배리어 40% * 에인션트 아스트라 시전 중 디스차지 20% or 블래스트 60% (가드)\n바인드 : 없음\n\n공격대원 효과 : DEX 10/20/40/80/100 상승\n\n링크 스킬 : 어드벤쳐러 큐리어스 - 몬스터 컬렉션 등록 확률 30%, 크리티컬 확률 10% 증가", // 9  패스파인더
    "나이트로드\n\n도적 직업군답게 타 직업보다 회피율이 비교적 높으며, 표창 도적의 단점 중 하나인 약한 체력과 종잇장같은 방어력도 가지고 있다. 공격 당해 표식이 새겨진 적을 한번 더 공격할 시 추가 표창으로 몇 번 더 타격한다.\n\n무적기 : 없음\n뎀감기 : *다크 사이트 보유\n바인드 : 없음\n\n공격대원 효과 : 크리티컬 확률 1/2/3/4/5% 증가\n\n링크 스킬 : 시프 커닝 - 적에게 상태이상을 적용시키면 10초 동안 데미지 18% 증가. 재발동 대기시간 20초", // 10 나이트로드 
    "섀도어\n\n단검을 주무기로 하는 근거리 공격수. 짧은 리치의 단점을 메우기 위해 방어력 상승 패시브&버프+회피율 상승 패시브+텔레포트 스킬+슈퍼 스탠스 스킬들로 무장했다.\n\n무적기 : 절개 (암살 마지막 공격 연계 시 1.8초)\n뎀감기 : 연막탄 (10%), *다크 사이트 보유\n바인드 : 없음\n\n공격대원 효과 : LUK 10/20/40/80/100 증가\n\n링크 스킬 : 시프 커닝 - 적에게 상태이상을 적용시키면 10초 동안 데미지 18% 증가. 재발동 대기시간 20초", // 11 섀도어
    "듀얼블레이드\n\n주무기 단검과 보조무기 블레이드를 함께 사용하는 메이플 유일의 이도류 근거리 격수. 공격 스킬마다 추가 방어율 무시가 붙어 있고, 평딜과 극딜 사이의 격차가 다소 적다.\n\n[2010년 2월 25일 출시]\n\n무적기 : 사슬지옥 (1.5초, 적중 시 1.5초), 파이널 컷 (3초)\n뎀감기 : 아수라 (가드), *다크 사이트 보유\n바인드 : 없음\n\n공격대원 효과 : LUK 10/20/40/80/100 증가\n\n링크 스킬 : 시프 커닝 - 적에게 상태이상을 적용시키면 10초 동안 데미지 18% 증가. 재발동 대기시간 20초", // 12 듀얼블레이드
    "바이퍼\n\n수룡(水龍)의 힘을 다루는 격투가로, 격투 스킬을 사용하여 수룡 스킬을 발동하는 메커니즘이다.\n\n[2007년 12월 18일 출시]\n\n무적기 : 라이트닝 폼 (오브 사용시 1초,3회), 하울링 피스트 (정권 내지르는 중 무적)\n뎀감기 : 디펜스 폼 (30%)\n바인드 : 없음\n\n공격대원 효과 : STR 10/20/40/80/100 증가\n\n링크 스킬 : 파이렛 블레스 - 힘 70, 민첩 70, 지력 70, 운 70, 최대 HP 1225, 최대 MP 1225, 데미지 흡수 15% 증가", // 13 바이퍼
    "캡틴\n\n모험가 해적 중 중거리 및 소환수 특화 직업. 각종 소환수에 분산된 화력과 특유의 대미지 딜링 메커니즘이 대표적인 특징으로, 신경써야 할 것이 많아 손이 바쁘다.\n\n[2007년 12월 18일 출시]\n\n무적기 : 데드아이 (3초), 노틸러스 어썰트 (1.4초)\n뎀감기 : 어셈블 크루 (상태이상 방어)\n바인드 : 없음\n\n공격대원 효과 : 소환수 지속 시간 4/6/8/10/12%\n\n링크 스킬 : 파이렛 블레스 - 힘 70, 민첩 70, 지력 70, 운 70, 최대 HP 1225, 최대 MP 1225, 데미지 흡수 15% 증가", // 14 캡틴
    "캐논슈터\n\n거대한 대포를 지고 다니며 화끈한 화력을 투사하는 직업으로, 원거리 공격군에 속하는 해적임에도 힘(STR)을 주스탯으로 삼는다.\n\n[2011년 7월 7일 출시]\n\n무적기 : ICBM (시전시 0.5초, 발사 후 1.8초)\n뎀감기 : 없음\n바인드 : 없음\n\n공격대원 효과 : STR 10/20/40/80/100 증가\n\n링크 스킬 : 파이렛 블레스 - 힘 70, 민첩 70, 지력 70, 운 70, 최대 HP 1225, 최대 MP 1225, 데미지 흡수 15% 증가", // 15 캐논슈터
    "노블레스\n\n시그너스 기사단 계열의 초보자로, 미하일 외의 나머지 직업들로 전직이 가능하다.", // 16 노블레스
    "소울마스터\n\n솔루나 타임을 통해 폴링 문 스킬과 라이징 선 스킬을 자동으로 번갈아가며 사용하여 코스믹 오브를 획득한다. 획득한 코스믹 오브를 소모하여 코스믹 스킬을 사용한다.\n\n[2008년 12월 18일 출시]\n\n무적기 : 소울 이클립스 (3.5초), 솔루나 디바이드 (5초), 블레이징 어썰트/러스터 차지 (1.8초))\n뎀감기 : 초월자 시그너스의 축복[공용] (5%)\n바인드 : 소울 페네트레이션\n\n공격대원 효과 : 최대 HP 250/500/1000/2000/2500 증가\n\n링크 스킬 : 시그너스 블레스 - 공격력과 마력 25, 상태 이상 내성 15, 모든 속성 내성 15% 증가", // 17 소울마스터
    "플레임위자드\n\n불 속성에 집중한 마법사. 유리몸, 저연비, 오비탈, 고기동성으로 요약할 수 있다. MP 저연비는 그야말로 마법사 이외의 모든 직업을 통틀어도 최악이다.\n\n[2008년 12월 18일 출시]\n\n무적기 : 카타클리즘 (5초), 본 피닉스 (사망 방지 후 3초)\n뎀감기 : 초월자 시그너스의 축복[공용] (5%), 에테리얼 폼[공용] (3초)\n바인드 : 없음\n\n공격대원 효과 : INT 10/20/40/80/100 증가\n\n링크 스킬 : 시그너스 블레스 - 공격력과 마력 25, 상태 이상 내성 15, 모든 속성 내성 15% 증가", // 18 플레임위자드
    "윈드브레이커\n\n시그너스 기사단의 궁수 직업군으로서 바람을 이용한 스킬을 사용한다. 속사기인 천공의 노래가 다수기 취급을 받아 사냥 시와 보스전에서 잡몹 패턴에 유리하지만, 사용 중에는 이동이 불가능해서 말뚝딜이 반강제되기도 한다.\n\n[2008년 12월 18일 출시]\n\n무적기 : 없음\n뎀감기 : 윈드 월 (엘리멘트 당 1%, 총 300%), 초월자 시그너스의 축복[공용] (5%)\n바인드 : 없음\n\n공격대원 효과 : DEX 10/20/40/80/100 증가\n\n링크 스킬 : 시그너스 블레스 - 공격력과 마력 25, 상태 이상 내성 15, 모든 속성 내성 15% 증가", // 19 윈드브레이커
    "나이트워커\n\n표창에 어둠의 힘을 실어 그림자로 빚어낸 배트를 다수 소환하고, 자신의 행동을 따라하는 종복을 여러 개 소환하여 끊임없는 공격을 한다.\n\n[2008년 12월 18일 출시]\n\n무적기 : 도미니언 (3초), 다크니스 어센션 (사망방지후 회복중 3초, 회복후 2초)\n뎀감기 : 사이펀 바이탈리티 (보호막, 10%(하이퍼 +3%), 초월자 시그너스의 축복[공용] (5%), *다크 사이트 보유\n바인드 : 쉐도우 스티치\n\n공격대원 효과 : LUK 10/20/40/80/100 증가\n\n링크 스킬 : 시그너스 블레스 - 공격력과 마력 25, 상태 이상 내성 15, 모든 속성 내성 15% 증가", // 20 나이트워커
    "스트라이커\n\n연계를 주력으로 하는 직업들 중에서도 초기 버전에 속해서 비교적 단순하다.\n\n[2008년 12월 18일 출시]\n\n무적기 : 해신강림 (2.5초)\n뎀감기 : 초월자 시그너스의 축복[공용] (5%)\n바인드 : 없음\n\n공격대원 효과 : STR 10/20/40/80/100 증가\n\n링크 스킬 : 시그너스 블레스 - 공격력과 마력 25, 상태 이상 내성 15, 모든 속성 내성 15% 증가", // 21 스트라이커
    "미하일\n\n가동률 높은 무적이 최고의 강점이자 가장 두드러지는 정체성이다. 모험가 전사인 팔라딘같은 정통 탱커라기보다는 피격 자체를 무효화함으로써 내구도를 확보하는, 조금 다른 의미의 '회피탱'이라 할 수 있다.\n\n[2012년 3월 22일 출시]\n\n무적기 : 로얄 가드 (반격 성공 시 4초)\n뎀감기 : 어드밴스드 소울 실드 5% * (빛의 수호 20% * 로 아이아스 89%), 초월자 시그너스의 축복[공용] (5%)\n바인드 : 없음\n\n공격대원 효과 : 최대 HP 250/500/1000/2000/2500 증가\n\n링크 스킬 : 빛의 수호 - 15초 동안 상태이상 내성 100 증가, 재사용 대기 시간 180초", // 22 미하일
    "시티즌\n\n기존 모험가 직업군의 초보자 스킬과는 다소 다른 스킬이 존재한다. 다른 직업군의 초보자, 레전드, 노블레스 등이 배우는 초보자 스킬이 전직 후 버려지는거에 비해서 전직 후에도 활용도가 높은 알짜 기술들이다.\n\n[2010년 7월 22일 출시]", // 23 시티즌
    "블래스터\n\n개발진이 의도한 자연스러운 캔슬을 이용할 시 따라오는 막대한 리턴을 이용해 보스들을 두들겨 패는 전사. 메이플 직업 중에서 가장 높은 진입장벽이 있는 직업이다.\n\n[2015년 12월 22일 출시]\n\n무적기 : 리볼빙 벙커 (10.5초), 하이퍼 매그넘 펀치 (1.5초), 버닝브레이커 (8초)\n뎀감기 : 어드밴스드 차지 마스터리 (차지한 더킹과 스웨이의 시작 부분, 차지한 해머 스매시 사용 중, 릴리즈 파일 벙커-보너스가드, 슈퍼 인듀어런스, 하이퍼 매그넘 펀치, 발칸 펀치 (35%)), 인듀어런스 트레이닝Ⅱ (보호막, 50%)\n바인드 : 리볼빙 벙커\n\n공격대원 효과 : 적의 방어율을 1/2/3/5/6% 무시\n\n링크 스킬 : 스피릿 오브 프리덤 - 부활 시 1~2초, 마스터 시 8초 동안 피해를 받지 않는다.", // 24 블래스터
    "배틀메이지\n\n흑마법이 결합된 스태프 체술을 구사하는 마법사. 기초 스펙이 탄탄하고 기동성이 뛰어나지만, 근접 공격에 기반한데다 메커니즘까지 쓸데없이 복잡한 스킬 구성이 이 장점을 퇴색시킨다.\n\n[2010년 7월 22일 출시]\n\n무적기 : 어비셜 라이트닝 (시전시, 2초)\n뎀감기 : 쉘터 (20%, 가드), 에테리얼 폼[공용] (3초)\n바인드 : 없음\n\n공격대원 효과 : INT 10/20/40/80/100 증가\n\n링크 스킬 : 스피릿 오브 프리덤 - 부활 시 1~2초, 마스터 시 8초 동안 피해를 받지 않는다.", // 25 배틀메이지
    "와일드헌터\n\n재규어 탑승 여부에 따라 스킬 용도가 변경되는 직업. 또한, 같은 레지스탕스 소속인 메카닉과 더불어 라이딩을 공격 용도로 사용하는 유이한 직업이기도 하다. 똑같은 스킬도 재규어 라이딩 중에 사용할 때는 다수를 타격하고, 재규어를 소환한 상태에서 사용하면 단일 대상을 공격한다.\n\n[2010년 7월 22일 출시]\n\n무적기 : 비스트 폼 (2초), 재규어 맥시멈 (9초)\n뎀감기 : 없음\n바인드 : 재규어 소울\n\n공격대원 효과 : 공격 시 20% 확률로 대미지 4/8/12/16/20% 증가\n\n링크 스킬 : 스피릿 오브 프리덤 - 부활 시 1~2초, 마스터 시 8초 동안 피해를 받지 않는다.", // 26 와일드헌터
    "메카닉\n\n'메탈 아머'라는 이름의 로봇에 탑승하며, 메탈 아머에 내장된 무기로 공격하거나 각종 로봇들을 조립하고 소환해서 필드에 깔아놓는 식으로 공격하는 게 주된 패턴이다.\n\n[2010년 8월 12일 출시]\n\n무적기 : 워머신 : 타이탄 (시전중), 메탈아머 전탄발사 (10초)\n뎀감기 : 없음\n바인드 : 없음\n\n공격대원 효과 : 버프 지속 시간 5/10/15/20/25% 증가\n\n링크 스킬 : 스피릿 오브 프리덤 - 부활 시 1~2초, 마스터 시 8초 동안 피해를 받지 않는다.", // 27 메카닉
    "제논\n\n도적과 해적의 하이브리드 직업으로 도적과 해적의 방어구를 동시에 착용할 수 있다. INT를 제외한 STR, DEX, LUK이 모두 주스탯이기에 주스탯이라는 개념이 옅다. 주스탯이 많다는 건 언뜻 보면 장점 같지만 그에 따라서 스탯 공격력을 올려 주는 공식이 다른 직업과 다르기 때문에 키우기 힘들 수 있다.\n\n[2013년 1월 3일 출시]\n\n무적기 : 멜트다운 익스플로젼 (3.5초), 메가 스매셔 (공격중, 6초)\n뎀감기 : 없음\n바인드 : 컨파인 인탱글\n\n공격대원 효과 : STR/DEX/LUK 각 5/10/20/40/50 증가\n\n링크 스킬 : 하이브리드 로직 - 모든 스탯 10%", // 28 제논
    "데몬슬레이어\n\n포스라는, MP 이외의 자원을 들고 나온 최초의 캐릭터. 포스는 최대 총량이 엄격하게 제한되어 있고 포스 실드를 제외한 아이템으로는 그 총량을 늘릴 수 없으며, 하이퍼 스탯으로만 증가시킬 수 있다. \n\n[2011년 8월 4일 출시]\n\n무적기 : 블러디 레이븐 (약 1초), 메타모포시스 (약 2초), 데몬 베인 (6초)\n뎀감기 : 콜 마스테마 - 러블리 테리토리 (25%), 이계 여신의 축복 - 방패의 축복 (75%)\n바인드 : 다크 바인드\n\n공격대원 효과 : 상태이상 내성 1/2/3/4/5 증가\n\n링크 스킬 : 데몬스 퓨리 - 보스 몬스터 공격시 데미지 15% 증가", // 29 데몬슬레이어
    "데몬어벤져\n\n데몬슬레이어와는 다르게 STR 대신 최대 HP를 기반으로 공격력을 결정하며, 익시드 스킬을 포함한 대부분의 스킬들은 최대 HP의 % 수치만큼 체력을 소모한다.\n\n[2012년 12월 20일 출시]\n\n무적기 : 레버넌트 (15초 간 불사)\n뎀감기 : 데몬 프렌지 (30%), 블러드 피스트(시전 중 30%), 콜 마스테마 - 러블리 테리토리 (25%), 이계 여신의 축복 - 방패의 축복 (75%)\n바인드 : 블러디 임프리즌\n\n공격대원 효과 : 보스 공격시 데미지 1/2/3/5/6% 증가\n\n링크 스킬 : 와일드 레이지 - 데미지 10% 증가", // 30 데몬어벤져
    "아란\n\n'콤보 카운트'와 '커맨드' 시스템을 이용하여 스킬을 빠르게 시전하고 적에게 강력한 데미지를 줄 수 있는 것이 특징이다.\n\n[2009년 7월 9일 출시]\n\n무적기 : 부스트 엔드 - 헌터즈 타겟팅 (차지 중 5초), 마하의 영역 (시전 후 2초), 프리드의 가호[공용] (6중첩시 30초)\n뎀감기 : 없음\n바인드 : 블리자드 템페스트\n\n공격대원 효과 : 타격 성공 시 70% 확률로 순수 HP의 2/4/6/8/10% 회복.(10초마다 1번씩 발동) 연속 발동 시 2배의 효과 발생 (2배 효과는 60초 당 1회 발동)\n\n링크 스킬 : 콤보킬 어드밴티지 - 영구적으로 콤보킬 구슬 경험치 획득량 650% 추가 획득", // 31 아란
    "에반\n\n에반과 미르는 별개 개체로서, 에반이 스킬을 쓰고 있는 도중에도 미르 스킬 키를 추가로 입력하면 미르가 따로 행동을 취할 수 있다. 그리고 미르가 스킬을 쓰는 와중에 에반의 스킬 중 속성(윈드, 썬더, 어스)이 있는 서클 계열 스킬을 사용하면 융합 스킬이 발동된다.\n\n[2009년 12월 17일 출시]\n\n무적기 : 드래곤 마스터 (미르 탑승 중 10초), 프리드의 가호[공용] (6중첩시 30초)\n뎀감기 : 에테리얼 폼[공용] (3초)\n바인드 : 없음\n\n공격대원 효과 : 타격 성공 시 70% 확률로 최대 MP의 2/4/6/8/10% 회복, 연속 발동 시 2배의 효과 발생(10초마다 1번, 연속 발동은 60초에 한 번)\n\n링크 스킬 : 룬 퍼시스턴스 - 룬 해방의 지속시간 50% 증가", // 32 에반
    "루미너스\n\n접속 직후 혹은 부활 후 최초로 사용하는 스킬이 빛 스킬이라면 이클립스(어둠 스킬 강화 상태)어둠 스킬이라면 선파이어(빛 스킬 강화 상태)상태가 된다. 암흑 상태에 영구 면역이다.\n\n[2012년 7월 12일 출시]\n\n무적기 : 아마겟돈 (3.5초), 프리드의 가호[공용] (6중첩시 30초)\n뎀감기 : 안티 매직쉘 (상태이상 방어), 에테리얼 폼[공용] (3초)\n바인드 : 아마겟돈\n\n공격대원 효과 : INT 10/20/40/80/100 증가\n\n링크 스킬 : 퍼미에이트 - 적 공격 시 방어 무시 15% 적용", // 33 루미너스
    "메르세데스\n\n연계기와 속사기를 주력으로 사용하는 궁수. 극딜에 특화된 스킬 구조 덕분에 강력한 순간 화력을 자랑한다.\n\n[2011년 7월 21일 출시]\n\n무적기 : 워터실드 (2초), 로얄 나이츠 (시전 및 해제시, 2초), 프리드의 가호[공용] (6중첩시 30초)\n뎀감기 : 실피디아 (탑승 중 25%)\n바인드 : 없음\n\n공격대원 효과 : 스킬 쿨타임 2/3/4/5/6% 감소(1초 미만으로 감소 불가)\n\n링크 스킬 : 엘프의 축복 - 경험치 획득량 15% 증가", // 34 메르세데스
    "팬텀\n\n모험가의 스킬을 훔쳐 다양한 활용이 가능하다. 잠재력이 매우 높고, 자체 유틸리티도 출중해 탁월한 딜효율과 생존력을 보여준다.\n\n[2011년 12월 29일 출시]\n\n무적기 : *스틸 스킬 (모험가의 무적기 사용가능), 마크 오브 팬텀 (이동시작 후 2초), 조커 (최후의 카드 뽑을 때 3초), 럭 오브 팬텀시프 (사망 방지 후 4초), 프리드의 가호[공용] (6중첩시 30초)\n뎀감기 : 조커 (사용 중 15%, 생명의 나무 8%)\n바인드 : *스틸 스킬 (모험가의 바인드 사용가능)\n\n공격대원 효과 : 메소 획득량 +1/2/3/4/5/% 증가\n\n링크 스킬 : 데들리 인스팅트 - 크리티컬 확률 15% 증가", // 35 팬텀
    "은월\n\n다양한 정령들을 사용하여 각종 디버프로 중무장한 격투가. 조작법이 단순하고, 각종 생존 및 디버프 유틸리티 덕분에 다방면에서 성능이 뛰어난 다재다능한 직업이다.\n\n[2014년 1월 2일 출시]\n\n무적기 : 정령의 화신 (8초), 환령 강신 (사망 방지 후 3초), 프리드의 가호[공용] (6중첩시 30초)\n뎀감기 : 구사 일생 (10% 확률로 생존), 소혼 결계 (상태이상 방어), 파쇄 연권 (사용 중 50%)\n바인드 : 속박술\n\n공격대원 효과 : 크리티컬 데미지 1/2/3/5/6%증가\n\n링크 스킬 : 구사 일생 - 사망에 이르는 공격을 당할 시, 10% 확률로 생존", // 36 은월
    "카이저\n\n카이저의 핵심은 얼마나 모프 게이지를 빨리 쌓고, 변신을 오래 유지하는가에 달려 있다. 비변신 상태와 변신 상태의 기동성 및 화력 차이가 상당히 커서 변신 의존도가 높다.\n\n[2012년 7월 26일 출시]\n\n무적기 : 프로미넌스 (3.5초)\n뎀감기 : 리셔플스위치 : 방어모드 (5%), 로버스트 아머 (12%), 판테온[공용] (사망 방지)\n바인드 : 없음\n\n공격대원 효과 : STR 10/20/40/80/100 증가\n\n링크 스킬 : 아이언 윌 - HP 10% 증가", // 37 카이저
    "카인\n\n일반 스킬로 게이지를 모아 자체 자원을 획득하고, 이를 소모해 연계를 사용하는 연계 중점형 궁수, 변칙적인 게이지 시스템과 많은 스킬들로 인해 컨트롤이 복잡하다.\n\n[2021년 1월 7일 출시]\n\n무적기 : 드래곤 스케일 (3.4초), 타나토스 디센트 (종료시 6초)\n뎀감기 : 판테온[공용] (사망 방지)\n바인드 : 없음\n\n공격대원 효과 : DEX 10/20/40/80/100 증가\n\n링크 스킬 : 프라이어 프리퍼레이션 - 적 8명 처치, 혹은 보스 몬스터에게 5번 공격 적중 시 사전 준비 1번 완료, 사전 준비를 5번 마치면 20초 동안 데미지 17% 증가. 재발동 대기시간 40초", // 38 카인
    "카데나\n\n주무기인 체인과 다양한 보조무기들을 활용해 적에게 디버프를 걸고, 그에 비례해 크리티컬 데미지를 증가시키는 웨펀 마스터 콘셉의 스킬 연쇄형 직업.\n\n[2017년 7월 6일 출시]\n\n무적기 : 체인아츠:터프 허슬 (시전 직후 2초)\n뎀감기 : 판테온[공용] (사망 방지), 체인아츠:체이스(이동중 다크 사이트)\n바인드 : 체인아츠 : 테이크다운\n\n공격대원 효과 : LUK 10/20/40/80/100 증가\n\n링크 스킬 : 인텐시브 인썰트 - 캐릭터보다 레벨이 낮은 적 대상으로 데미지 6% 증가, 레벨과 상관없이 상태이상에 걸린 적 상대로 데미지 6% 추가 증가", // 39 카데나
    "엔젤릭버스터\n\n마법소녀 콘셉트를 내세운 중거리 딜러. 투사체로 대표되는 사냥 능력과 극딜을 앞세운 보스전 능력을 가졌다.\n\n[2012년 8월 9일 출시]\n\n무적기 : 소울 레조넌스 (시전 직후 2초), 에너지 버스트 (6초)\n뎀감기 : 소울 레조넌스 (사용 중 35%), 트리니티 퓨전 (시전 중 20%), 판테온[공용] (사망 방지)\n바인드 : 없음\n\n공격대원 효과 : DEX 10/20/40/80/100 증가\n\n링크 스킬 : 소울 컨트랙트 - 10초간 총 데미지 45% 증가", // 40 엔젤릭버스터
    "아델\n\n에테르 소드라는 기검을 운용하는 올라운더 전사 직업. 딜사이클 자체는 크게 어렵지 않지만 신경 써줘야하는 요소가 많은 편이다.\n\n[2020년 1월 16일 출시]\n\n무적기 : 다이크 (시전 즉시), 인피니트 (1.5초)\n뎀감기 : 다이크 (40%, 시전 즉시 피격시 55%), 노빌리티 (파티 피해 경감, 보호막)\n바인드 : 스콜\n\n공격대원 효과 : STR 10/20/40/80/100 상승\n\n링크 스킬 : 노블레스 - 같은 맵에 있는 자신을 포함한 파티원 1명 당 데미지 2% 증가, 최대 8%까지 증가. 보스 몬스터 공격 시 데미지 4% 증가", // 41 아델
    "일리움\n\n크리스탈이라는 별도 오브젝트를 운용하는 마법사. 글로리 윙 변신을 자주 하는 것이 높은 딜량의 핵심이다.\n\n[2017년 8월 10일 출시]\n\n무적기 : 롱기누스 존 (2.5초), 프라이멀 프로텍션 (파티, 최대 10초)\n뎀감기 : 에테리얼 폼[공용] (3초)\n바인드 : 없음\n\n공격대원 효과 : INT 10/20/40/80/100 증가\n\n링크 스킬 : 전투의 흐름 - 일정 거리 이동 시 대미지 2% 증가. 최대 6중첩, 중첩간에는 합적용", // 42 일리움
    "아크\n\n능동적인 스펙터 변신 기능을 지닌 광전사. 우수한 화력과 기동성을 얻는 대가로 정신력의 제한과 낮은 내구도를 가진, 광전사의 느낌을 잘 살린 직업으로 평가받는다.\n\n[2018년 1월 4일 출시]\n\n무적기 : 기어 다니는 공포 (5초), 근원의 기억 (11초)\n뎀감기 : 없음\n바인드 : 황홀한 구속\n\n공격대원 효과 : STR 10/20/40/80/100 증가\n\n링크 스킬 : 무아 - 전투 상태가 5초 지속되면 발동되며 최대 5회 중첩 가능, 지속시간 5초. 발동 시 데미지 1% 증가, 각 중첩당 데미지 2% 증가", // 43 아크
    "라라\n\n무작위 지점에 생성된 용맥을 소모해 이로운 효과를 받거나, 기물을 설치해 적을 공격하는 극딜형 마법사. 더블 점프를 사용하는 마법사이다.\n\n[2021년 7월 15일 출시]\n\n무적기 : 화중군자[공용] (사망 방지 후 3.5초)\n뎀감기 : 산 에움 (55%)\n바인드 : 넝쿨 타래\n\n공격대원 효과 : INT 10/20/40/80/100 증가\n\n링크 스킬 : 자연의 벗 - 데미지 5% 증가, 일반 몬스터 20명 처치 시 30초 동안 일반 몬스터 공격 시 데미지 11% 증가, 재발동 대기 시간 30초", // 44 라라
    "호영\n\n도술을 이용한 스킬 연계를 주력으로 사용하는 직업. 부적 도력과 두루마리 도력이라는 이중 게이지 시스템을 사용한다.\n\n[2019년 7월 18일 출시]\n\n무적기 : 선기 : 몽유도원 (최대 20초), 선기 : 강림 괴력난신 (시전 중 재사용시), 화중군자[공용] (사망 방지 후 3.5초)\n뎀감기 : 암행 (특정 스킬 사용시 다크사이트)\n바인드 : 선기 : 분신 둔갑 태을선인\n\n공격대원 효과 : LUK 10/20/40/80/100 증가\n\n링크 스킬 : 자신감 - 방어율 무시 10% 추가, HP가 100%인 적 공격 시 데미지 14% 증가", // 45 호영
    "제로\n\n태그와 어시스트라는 고유의 시스템을 사용하는 유틸리티 중심의 딜러. 부족한 화력을 개인 생존 유틸리티와 파티 기여도로 때워야 하는 전형적인 유틸리티형 평딜 캐릭터\n\n[2013년 7월 18일 출시]\n\n무적기 : 타임 홀딩 (15초), 조인트 어택 (6.5초), 타임 리와인드 (사망 방지 후 2초)\n뎀감기 : 타임 디스토션 (30초간 4초마다 상태이상 해제), 이뮨 배리어 (피격시 25%확률로 50% 보호막)\n바인드 : 크리티컬 바인드 (베타 공격 시 10% 확률로 4초, 35초간 저항), 리미트 브레이크, 쉐도우 레인 (4초)\n\n공격대원 효과 : 획득 경험치 4%/6%/8%/10/12% 증가\n\n링크 스킬 : 륀느의 축복 - 받는 데미지 15% 감소, 공격 시 대상의 방어율 10% 무시", // 46 제로
    "키네시스\n\n염동력을 사용하는 마법사. 강력한 화력과 최상급의 유틸리티, 괜찮은 기동성과 사냥 능력이 5차 스킬 중 싸이킥 불릿으로 인하여 좋은 편이다.\n\n[2015년 7월 23일 출시]\n\n무적기 : 에버싸이킥 (8초)\n뎀감기 : 에테리얼 폼[공용] (3초), 이계 여신의 축복 - 방패의 축복 (75%)\n바인드 : 사이코 메트리\n\n공격대원 효과 : INT 10/20/40/80/100 증가\n\n링크 스킬 : 판단 - 크리티컬 데미지 4% 증가", // 47 키네시스
    "핑크빈\n\n이벤트 한정 캐릭터라 그런지 기본 공격력도 그렇고, 동 레벨대의 어느 직업군도 따라올 수 없는 매우 강한 공격력을 보여준다. 이동 스킬은 꽤 좋은 성능을 보여주고, 사냥 스킬로 사용할 경우 맵을 싹쓸이할 수 있다.\n\n[2015년 5월 14일 최초 출시]\n\n보상 : 핑아일체 - 보스 공격 시 데미지 증가 + 10%, 공격력/마력 +5, 올스탯 +10", // 48 핑크빈
    "예티\n\n이벤트 직업 특성 상 핑크빈처럼 기간 한정 캐릭터이다. 또한 이벤트 기간에만 열리는 예티X핑크빈 월드에서만 캐릭터를 생성할 수 있으며 예티X핑크빈 스탭업 이벤트로 첫 출시되었다.\n\n[2021년 3월 25일 최초 출시]\n\n보상 : 예아일체 - 보스 공격 시 데미지 증가 + 10%, 공격력/마력 +5, 올스탯 +10", // 49 예티
    "칼리\n\n복수의 바람, 하이레프 사제 출신의 직업으로서, 하이레프군에서 이탈한 아크와 마찬가지로 초월자 제른 다르모어 진영의 인물이 반기를 들고 직업이 된 두 번째 사례\n\n[2023년 1월 19일 출시]\n\n무적기 : 데저트 베일 (3초), 보이드 버스트 (시전 시 4.3초, 시전 종료 후 3.5초)\n뎀감기 : 없음\n바인드 : 없음\n\n공격대원 효과 : LUK 10/20/40/80/100 증가\n\n링크 스킬 : 이네이트 기프트 - 데미지 5% 증가, 공격 시 100% 확률로 5초 동안 매초 최대 HP/MP의 2% 회복, 재발동 대기시간 30초", // 50 칼리
  ];
job.mentions = jobMentionList;
var jobList = ["!초보자", "!히어로", "!팔라딘", "!다크나이트", "!불독", "!썬콜", "!비숍", "!보우마스터", "!신궁", "!패스파인더", "!나이트로드", "!섀도어", "!듀얼블레이드", "!바이퍼", "!캡틴", "!캐논슈터", "!노블레스", "!소울마스터", "!플레임위자드", "!윈드브레이커", "!나이트워커", "!스트라이커", "!미하일", "!시티즌", "!블래스터", "!배틀메이지", "!와일드헌터", "!메카닉", "!제논", "!데몬슬레이어", "!데몬어벤져", "!아란", "!에반", "!루미너스", "!메르세데스", "!팬텀", "!은월", "!카이저", "!카인", "!카데나", "!엔젤릭버스터", "!아델", "!일리움", "!아크", "!라라", "!호영", "!제로", "!키네시스", "!핑크빈", "!예티", "!칼리" ];

module.exports = job;