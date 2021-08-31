const sk = {};

sk.getJobcode = function(job) {
    var ret = -1;
	switch (job)
	{
	case "초보자":
		ret = 0;
		break;
    case "히어로":
    case "혀로":
        ret = 1;
        break;
    case "팔라딘":
    case "팔라":
        ret = 2;
        break;
    case "다크나이트":
    case "닼나":
        ret = 3;
        break;
    case "아크메이지불독":
    case "불독":
        ret = 4;
        break;
    case "아크메이지썬콜":
    case "썬콜":
        ret = 5;
        break;
    case "비숍":
    case "숍":
        ret = 6;
        break;
    case "보우마스터":
    case "보마":
        ret = 7;
        break;
    case "신궁":
        ret = 8;
        break;
    case "패스파인더":
    case "패파":
        ret = 9;
        break;
    case "나이트로드":
    case "나로":
        ret = 10;
        break;
    case "섀도어":
        ret = 11;
        break;
    case "듀얼블레이드":
    case "듀블":
        ret = 12;
        break;
    case "바이퍼":
        ret = 13;
        break;
    case "캡틴":
        ret = 14;
        break;
    case "캐논슈터":
    case "캐슈":
        ret = 15;
        break;
    case "소울마스터":
    case "소마":
        ret = 16;
        break;
    case "플레임위자드":
    case "플위":
        ret = 17;
        break;
    case "윈드브레이커":
    case "윈브":
        ret = 18;
        break;
    case "나이트워커":
    case "나워":
        ret = 19;
        break;
    case "스트라이커":
    case "스커":
        ret = 20;
        break;
    case "미하일":
        ret = 21;
        break;
    case "블래스터":
    case "블래":
        ret = 22;
        break;
    case "배틀메이지":
    case "배메":
        ret = 23;
        break;
    case "와일드헌터":
    case "와헌":
        ret = 24;
        break;
    case "메카닉":
        ret = 25;
        break;
    case "제논":
        ret = 26;
        break;
    case "데몬슬레이어":
    case "데슬":
        ret = 27;
        break;
    case "데몬어벤져":
    case "데벤져":
        ret = 28;
        break;
    case "아란":
        ret = 29;
        break;
    case "에반":
        ret = 30;
        break;
    case "루미너스":
    case "루미":
        ret = 31;
        break;
    case "메르세데스":
    case "메르":
    case "메세":
        ret = 32;
        break;
    case "팬텀":
        ret = 33;
        break;
    case "은월":
        ret = 34;
        break;
    case "카이저":
        ret = 35;
        break;
    case "카인":
        ret = 36;
        break;
    case "카데나":
        ret = 37;
        break;
    case "엔젤릭버스터":
    case "엔버":
        ret = 38;
        break;
    case "아델":
        ret = 39;
        break;
    case "일리움":
        ret = 40;
        break;
    case "아크":
        ret = 41;
        break;
    case "라라":
        ret = 42;
        break;
    case "호영":
        ret = 43;
        break;
    case "제로":
        ret = 44;
        break;
    case "키네시스":
    case "키네":
        ret = 45;
        break;
    case "모험가전사":
    case "모전":
        ret = 46;
        break;
    case "모험가마법사":
    case "모험가법사":
    case "모법":
        ret = 47;
        break;
    case "모험가궁수":
    case "모궁":
        ret = 48;
        break;
    case "모험가도적":
    case "모도":
        ret = 49;
        break;
    case "모험가해적":
    case "모해":
        ret = 50;
        break;            
    case "시그너스기사단":
    case "시그너스":
    case "시그":
        ret = 51;
        break;
    case "레지스탕스":
    case "레지":
        ret = 52;
        break;
    case "데몬":
        ret = 53;
        break;
    case "영웅":
        ret = 54;
        break;
    case "노바":
        ret = 55;
        break;
    case "레프":
        ret = 56;
        break;
    case "아니마":
        ret = 57;
        break;
    case "전사":
        ret = 58;
        break;
    case "마법사":
    case "법사":
        ret = 59;
        break;
    case "궁수":
        ret = 60;
        break;   
    case "도적":
        ret = 61;
        break;
    case "해적":
        ret = 62;
        break;
    case "공용":
        ret = 63;
        break;        
	default:
		ret = -1;
		break;
	}
    return ret;
}
sk.getJobname = function(ind) {
    rep = "";
    switch (ind) {
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
        rep = "보우마스터";
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
        rep = "소울마스터";
        break;
    case 17:
        rep = "플레임위자드";
        break;
    case 18:
        rep = "윈드브레이커";
        break;
    case 19:
        rep = "나이트워커";
        break;
    case 20:
        rep = "스트라이커";
        break;
    case 21:
        rep = "미하일";
        break;
    case 22:
        rep = "블래스터";
        break;
    case 23:
        rep = "배틀메이지";
        break;
    case 24:
        rep = "와일드헌터";
        break;
    case 25:
        rep = "메카닉";
        break;
    case 26:
        rep = "제논";
        break;
    case 27:
        rep = "데몬슬레이어";
        break;
    case 28:
        rep = "데몬어벤져";
        break;
    case 29:
        rep = "아란";
        break;
    case 30:
        rep = "에반";
        break;
    case 31:
        rep = "루미너스";
        break;
    case 32:
        rep = "메르세데스";
        break;
    case 33:
        rep = "팬텀";
        break;
    case 34:
        rep = "은월";
        break;
    case 35:
        rep = "카이저";
        break;
    case 36:
        rep = "카인";
        break;
    case 37:
        rep = "카데나";
        break;
    case 38:
        rep = "엔젤릭버스터";
        break;
    case 39:
        rep = "아델";
        break;
    case 40:
        rep = "일리움";
        break;
    case 41:
        rep = "아크";
        break;
    case 42:
        rep = "라라";
        break;
    case 43:
        rep = "호영";
        break;
    case 44:
        rep = "제로";
        break;
    case 45:
        rep = "키네시스";
        break;
    case 46:
        rep = "모험가 전사";
        break;
    case 47:
        rep = "모험가 마법사";
        break;
    case 48:
        rep = "모험가 궁수";
        break;
    case 49:
        rep = "모험가 도적";
        break;
    case 50:
        rep = "모험가 해적";
        break;
    case 51:
        rep = "시그너스 기사단";
        break;
    case 52:
        rep = "레지스탕스";
        break;
    case 53:
        rep = "데몬";
        break;
    case 54:
        rep = "영웅";
        break;
    case 55:
        rep = "노바";
        break;
    case 56:
        rep = "레프";
        break;
    case 57:
        rep = "아니마";
        break;
    case 58:
        rep = "전사";
        break;
    case 59:
        rep = "마법사";
        break;
    case 60:
        rep = "궁수";
        break;
    case 61:
        rep = "도적";
        break;
    case 62:
        rep = "해적";
        break;
    case 63:
        rep = "공용";
        break;
    }
    return rep;
};
sk.getJobskillList = function(ind) {
    rep = "";
    switch (ind) {
    case 0:
        rep = "초보자\n\n";
        break;
    case 1:
        rep = "히어로\n\n";
        break;
    case 2:
        rep = "팔라딘\n\n";
        break;
    case 3:
        rep = "다크나이트\n\n";
        break;
    case 4:
        rep = "아크메이지(불,독)\n\n";
        break;
    case 5:
        rep = "아크메이지(썬,콜)\n\n";
        break;
    case 6:
        rep = "비숍\n\n";
        break;
    case 7:
        rep = "보우마스터\n\n2차 : 리트리트 샷, 소울 애로우 : 활, 퀴버 카트리지\n3차 : 애로우 플래터, 피닉스, 슈타이크 아이젠, 익스트림 아쳐리 : 활, 모탈 블로우, 컨센트레이션\n4차 : 폭풍의 시, 운즈 샷, 언카운터블 애로우, 어드밴스드 퀴버, 아머 피어싱\n하이퍼스킬 : 프리퍼레이션, 윈드 오브 프레이\n5차 : 애로우 레인, 잔영의 시, 퀴버 풀버스트, 실루엣 미라주";
        break;
    case 8:
        rep = "신궁\n\n";
        break;
    case 9:
        rep = "패스파인더\n\n";
        break;
    case 10:
        rep = "나이트로드\n\n";
        break;
    case 11:
        rep = "섀도어\n\n";
        break;
    case 12:
        rep = "듀얼블레이드\n\n";
        break;
    case 13:
        rep = "바이퍼\n\n";
        break;
    case 14:
        rep = "캡틴\n\n";
        break;
    case 15:
        rep = "캐논슈터\n\n";
        break;
    case 16:
        rep = "소울마스터\n\n";
        break;
    case 17:
        rep = "플레임위자드\n\n";
        break;
    case 18:
        rep = "윈드브레이커\n\n";
        break;
    case 19:
        rep = "나이트워커\n\n";
        break;
    case 20:
        rep = "스트라이커\n\n";
        break;
    case 21:
        rep = "미하일\n\n";
        break;
    case 22:
        rep = "블래스터\n\n";
        break;
    case 23:
        rep = "배틀메이지\n\n";
        break;
    case 24:
        rep = "와일드헌터\n\n";
        break;
    case 25:
        rep = "메카닉\n\n";
        break;
    case 26:
        rep = "제논\n\n";
        break;
    case 27:
        rep = "데몬슬레이어\n\n";
        break;
    case 28:
        rep = "데몬어벤져\n\n";
        break;
    case 29:
        rep = "아란\n\n";
        break;
    case 30:
        rep = "에반\n\n";
        break;
    case 31:
        rep = "루미너스\n\n";
        break;
    case 32:
        rep = "메르세데스\n\n";
        break;
    case 33:
        rep = "팬텀\n\n";
        break;
    case 34:
        rep = "은월\n\n";
        break;
    case 35:
        rep = "카이저\n\n";
        break;
    case 36:
        rep = "카인\n\n";
        break;
    case 37:
        rep = "카데나\n\n";
        break;
    case 38:
        rep = "엔젤릭버스터\n\n";
        break;
    case 39:
        rep = "아델\n\n";
        break;
    case 40:
        rep = "일리움\n\n";
        break;
    case 41:
        rep = "아크\n\n";
        break;
    case 42:
        rep = "라라\n\n";
        break;
    case 43:
        rep = "호영\n\n";
        break;
    case 44:
        rep = "제로\n\n";
        break;
    case 45:
        rep = "키네시스\n\n";
        break;
    case 46:
        rep = "모험가 전사\n\n";
        break;
    case 47:
        rep = "모험가 마법사\n\n";
        break;
    case 48:
        rep = "모험가 궁수\n\n0차 : 어드벤쳐러 큐리어스\n1차 : 크리티컬 샷\n2차 : 피지컬 트레이닝\n3차 : 닷지\n4차 : 일루전 스탭\n하이퍼 스킬 : 에픽 어드벤쳐\n5차 : 이볼브";
        break;
    case 49:
        rep = "모험가 도적\n\n";
        break;
    case 50:
        rep = "모험가 해적\n\n";
        break;
    case 51:
        rep = "시그너스 기사단\n\n";
        break;
    case 52:
        rep = "레지스탕스\n\n";
        break;
    case 53:
        rep = "데몬\n\n";
        break;
    case 54:
        rep = "영웅\n\n";
        break;
    case 55:
        rep = "노바\n\n";
        break;
    case 56:
        rep = "레프\n\n";
        break;
    case 57:
        rep = "아니마\n\n";
        break;
    case 58:
        rep = "전사\n\n";
        break;
    case 59:
        rep = "마법사\n\n";
        break;
    case 60:
        rep = "궁수\n\n4차 : 샤프 아이즈(메르세데스, 카인 제외)\n5차 : 가이디드 애로우, 크리티컬 리인포스";
        break;
    case 61:
        rep = "도적\n\n";
        break;
    case 62:
        rep = "해적\n\n";
        break;
    case 63:
        rep = "모험가\n\n5차 : 메이플월드 여신의 축복";
        break;
    case 64:
        rep = "공용\n\n이름은 모험가 기준으로 작성되었습니다.\n4차 : 메이플 용사, 용사의 의지, 영웅의 메아리\n5차 : 로프 커넥트, 블링크, 에르다 노바, 에르다의 의지, 쓸만한 미스틱 도어, 쓸만한 샤프 아이즈, 쓸만한 하이퍼 바디, 쓸만한 컴뱃 오더스, 쓸만한 어드밴스드 블레스, 쓸만한 윈드 부스터, 쓸만한 홀리 심볼, 스파이더 인 미러, 크레스트 오브 더 솔라";
        break;
    }
    return rep;
};
sk.getJobskillcode = function(jobcode, skillname){
    ret = -1;
    rep = "";
    var jobM;
    switch (jobcode) {
        case 0:
            ret = -1;
            rep = "초보자";
            break;
        case 1:
            ret = -1;
            rep = "히어로";
            break;
        case 2:
            ret = -1;
            rep = "팔라딘";
            break;
        case 3:
            ret = -1;
            rep = "다크나이트";
            break;
        case 4:
            ret = -1;
            rep = "아크메이지(불,독)";
            break;
        case 5:
            ret = -1;
            rep = "아크메이지(썬,콜)";
            break;
        case 6:
            ret = -1;
            rep = "비숍";
            break;
        case 7:
            jobM = require('skillBowmaster');
            ret = jobM.getskillBowmaster(skillname);
            break;
        case 8:
            ret = -1;
            rep = "신궁";
            break;
        case 9:
            ret = -1;
            rep = "패스파인더";
            break;
        case 10:
            ret = -1;
            rep = "나이트로드";
            break;
        case 11:
            ret = -1;
            rep = "섀도어";
            break;
        case 12:
            ret = -1;
            rep = "듀얼블레이드";
            break;
        case 13:
            ret = -1;
            rep = "바이퍼";
            break;
        case 14:
            ret = -1;
            rep = "캡틴";
            break;
        case 15:
            ret = -1;
            rep = "캐논슈터";
            break;
        case 16:
            ret = -1;
            rep = "소울마스터";
            break;
        case 17:
            ret = -1;
            rep = "플레임위자드";
            break;
        case 18:
            ret = -1;
            rep = "윈드브레이커";
            break;
        case 19:
            ret = -1;
            rep = "나이트워커";
            break;
        case 20:
            ret = -1;
            rep = "스트라이커";
            break;
        case 21:
            ret = -1;
            rep = "미하일";
            break;
        case 22:
            ret = -1;
            rep = "블래스터";
            break;
        case 23:
            ret = -1;
            rep = "배틀메이지";
            break;
        case 24:
            ret = -1;
            rep = "와일드헌터";
            break;
        case 25:
            ret = -1;
            rep = "메카닉";
            break;
        case 26:
            ret = -1;
            rep = "제논";
            break;
        case 27:
            ret = -1;
            rep = "데몬슬레이어";
            break;
        case 28:
            ret = -1;
            rep = "데몬어벤져";
            break;
        case 29:
            ret = -1;
            rep = "아란";
            break;
        case 30:
            ret = -1;
            rep = "에반";
            break;
        case 31:
            ret = -1;
            rep = "루미너스";
            break;
        case 32:
            ret = -1;
            rep = "메르세데스";
            break;
        case 33:
            ret = -1;
            rep = "팬텀";
            break;
        case 34:
            ret = -1;
            rep = "은월";
            break;
        case 35:
            ret = -1;
            rep = "카이저";
            break;
        case 36:
            ret = -1;
            rep = "카인";
            break;
        case 37:
            ret = -1;
            rep = "카데나";
            break;
        case 38:
            ret = -1;
            rep = "엔젤릭버스터";
            break;
        case 39:
            ret = -1;
            rep = "아델";
            break;
        case 40:
            ret = -1;
            rep = "일리움";
            break;
        case 41:
            ret = -1;
            rep = "아크";
            break;
        case 42:
            ret = -1;
            rep = "라라";
            break;
        case 43:
            ret = -1;
            rep = "호영";
            break;
        case 44:
            ret = -1;
            rep = "제로";
            break;
        case 45:
            ret = -1;
            rep = "키네시스";
            break;
        case 46:
            ret = -1;
            rep = "모험가 전사";
            break;
        case 47:
            ret = -1;
            rep = "모험가 마법사";
            break;
        case 48:
            jobM = require('skillAdvArcher');
            ret = jobM.getskillAdvArcher(skillname);
            break;
        case 49:
            ret = -1;
            rep = "모험가 도적";
            break;
        case 50:
            ret = -1;
            rep = "모험가 해적";
            break;
        case 51:
            ret = -1;
            rep = "시그너스 기사단";
            break;
        case 52:
            ret = -1;
            rep = "레지스탕스";
            break;
        case 53:
            ret = -1;
            rep = "데몬";
            break;
        case 54:
            ret = -1;
            rep = "영웅";
            break;
        case 55:
            ret = -1;
            rep = "노바";
            break;
        case 56:
            ret = -1;
            rep = "레프";
            break;
        case 57:
            ret = -1;
            rep = "아니마";
            break;
        case 58:
            ret = -1;
            rep = "전사";
            break;
        case 59:
            ret = -1;
            rep = "마법사";
            break;
        case 60:
            ret = -1;
            rep = "궁수";
            break;
        case 61:
            ret = -1;
            rep = "도적";
            break;
        case 62:
            ret = -1;
            rep = "해적";
            break;
        case 63:
            ret = -1;
            rep = "모험가";
            break;        
        case 64:
            ret = -1;
            rep = "공용";
            break;
    }
    return ret;
}
sk.getJobskillname = function(jobcode, skillcode){    
    rep = "";
    var jobM;
    switch (jobcode) {
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
            jobM = require('skillBowmaster');
            rep = jobM.getskillnameBowmaster(skillcode);
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
            rep = "소울마스터";
            break;
        case 17:
            
            rep = "플레임위자드";
            break;
        case 18:
            
            rep = "윈드브레이커";
            break;
        case 19:
            
            rep = "나이트워커";
            break;
        case 20:
            
            rep = "스트라이커";
            break;
        case 21:
            
            rep = "미하일";
            break;
        case 22:
            
            rep = "블래스터";
            break;
        case 23:
            
            rep = "배틀메이지";
            break;
        case 24:
            
            rep = "와일드헌터";
            break;
        case 25:
            
            rep = "메카닉";
            break;
        case 26:
            
            rep = "제논";
            break;
        case 27:
            
            rep = "데몬슬레이어";
            break;
        case 28:
            
            rep = "데몬어벤져";
            break;
        case 29:
            
            rep = "아란";
            break;
        case 30:
            
            rep = "에반";
            break;
        case 31:
            
            rep = "루미너스";
            break;
        case 32:
            
            rep = "메르세데스";
            break;
        case 33:
            
            rep = "팬텀";
            break;
        case 34:
            
            rep = "은월";
            break;
        case 35:
            
            rep = "카이저";
            break;
        case 36:
            
            rep = "카인";
            break;
        case 37:
            
            rep = "카데나";
            break;
        case 38:
            
            rep = "엔젤릭버스터";
            break;
        case 39:
            
            rep = "아델";
            break;
        case 40:
            
            rep = "일리움";
            break;
        case 41:
            
            rep = "아크";
            break;
        case 42:
            
            rep = "라라";
            break;
        case 43:
            
            rep = "호영";
            break;
        case 44:
            
            rep = "제로";
            break;
        case 45:
            
            rep = "키네시스";
            break;
        case 46:
            
            rep = "모험가 전사";
            break;
        case 47:
            
            rep = "모험가 마법사";
            break;
        case 48:
            jobM = require('skillAdvArcher');
            rep = jobM.getskillnameAdvArcher(skillcode);
            break;
        case 49:
            
            rep = "모험가 도적";
            break;
        case 50:
            
            rep = "모험가 해적";
            break;
        case 51:
            
            rep = "시그너스 기사단";
            break;
        case 52:
            
            rep = "레지스탕스";
            break;
        case 53:
            
            rep = "데몬";
            break;
        case 54:
            
            rep = "영웅";
            break;
        case 55:
            
            rep = "노바";
            break;
        case 56:
            
            rep = "레프";
            break;
        case 57:
            
            rep = "아니마";
            break;
        case 58:
            
            rep = "전사";
            break;
        case 59:
            
            rep = "마법사";
            break;
        case 60:
            
            rep = "궁수";
            break;
        case 61:
            
            rep = "도적";
            break;
        case 62:
            
            rep = "해적";
            break;
        case 63:            
            rep = "모험가";
            break;        
        case 64:            
            rep = "공용";
            break;
    }
    return rep;
};
sk.getJobskilldesc1 = function(jobcode, skillcode){    
    rep = "";
    var jobM;
    switch (jobcode) {
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
            jobM = require('skillBowmaster');
            rep = jobM.getskilldesc1Bowmaster(skillcode);
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
            rep = "소울마스터";
            break;
        case 17:
            
            rep = "플레임위자드";
            break;
        case 18:
            
            rep = "윈드브레이커";
            break;
        case 19:
            
            rep = "나이트워커";
            break;
        case 20:
            
            rep = "스트라이커";
            break;
        case 21:
            
            rep = "미하일";
            break;
        case 22:
            
            rep = "블래스터";
            break;
        case 23:
            
            rep = "배틀메이지";
            break;
        case 24:
            
            rep = "와일드헌터";
            break;
        case 25:
            
            rep = "메카닉";
            break;
        case 26:
            
            rep = "제논";
            break;
        case 27:
            
            rep = "데몬슬레이어";
            break;
        case 28:
            
            rep = "데몬어벤져";
            break;
        case 29:
            
            rep = "아란";
            break;
        case 30:
            
            rep = "에반";
            break;
        case 31:
            
            rep = "루미너스";
            break;
        case 32:
            
            rep = "메르세데스";
            break;
        case 33:
            
            rep = "팬텀";
            break;
        case 34:
            
            rep = "은월";
            break;
        case 35:
            
            rep = "카이저";
            break;
        case 36:
            
            rep = "카인";
            break;
        case 37:
            
            rep = "카데나";
            break;
        case 38:
            
            rep = "엔젤릭버스터";
            break;
        case 39:
            
            rep = "아델";
            break;
        case 40:
            
            rep = "일리움";
            break;
        case 41:
            
            rep = "아크";
            break;
        case 42:
            
            rep = "라라";
            break;
        case 43:
            
            rep = "호영";
            break;
        case 44:
            
            rep = "제로";
            break;
        case 45:
            
            rep = "키네시스";
            break;
        case 46:
            
            rep = "모험가 전사";
            break;
        case 47:
            
            rep = "모험가 마법사";
            break;
        case 48:
            jobM = require('skillAdvArcher');
            rep = jobM.getskilldesc1AdvArcher(skillcode);
            break;
        case 49:
            
            rep = "모험가 도적";
            break;
        case 50:
            
            rep = "모험가 해적";
            break;
        case 51:
            
            rep = "시그너스 기사단";
            break;
        case 52:
            
            rep = "레지스탕스";
            break;
        case 53:
            
            rep = "데몬";
            break;
        case 54:
            
            rep = "영웅";
            break;
        case 55:
            
            rep = "노바";
            break;
        case 56:
            
            rep = "레프";
            break;
        case 57:
            
            rep = "아니마";
            break;
        case 58:
            
            rep = "전사";
            break;
        case 59:
            
            rep = "마법사";
            break;
        case 60:
            
            rep = "궁수";
            break;
        case 61:
            
            rep = "도적";
            break;
        case 62:
            
            rep = "해적";
            break;
        case 63:            
            rep = "모험가";
            break;        
        case 64:            
            rep = "공용";
            break;
    }
    return rep;
};
sk.getJobskilldesc2 = function(jobcode, skillcode){    
    rep = "";
    var jobM;
    switch (jobcode) {
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
            jobM = require('skillBowmaster');
            rep = jobM.getskilldesc2Bowmaster(skillcode);
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
            
            rep = "소울마스터";
            break;
        case 17:
            
            rep = "플레임위자드";
            break;
        case 18:
            
            rep = "윈드브레이커";
            break;
        case 19:
            
            rep = "나이트워커";
            break;
        case 20:
            
            rep = "스트라이커";
            break;
        case 21:
            
            rep = "미하일";
            break;
        case 22:
            
            rep = "블래스터";
            break;
        case 23:
            
            rep = "배틀메이지";
            break;
        case 24:
            
            rep = "와일드헌터";
            break;
        case 25:
            
            rep = "메카닉";
            break;
        case 26:
            
            rep = "제논";
            break;
        case 27:
            
            rep = "데몬슬레이어";
            break;
        case 28:
            
            rep = "데몬어벤져";
            break;
        case 29:
            
            rep = "아란";
            break;
        case 30:
            
            rep = "에반";
            break;
        case 31:
            
            rep = "루미너스";
            break;
        case 32:
            
            rep = "메르세데스";
            break;
        case 33:
            
            rep = "팬텀";
            break;
        case 34:
            
            rep = "은월";
            break;
        case 35:
            
            rep = "카이저";
            break;
        case 36:
            
            rep = "카인";
            break;
        case 37:
            
            rep = "카데나";
            break;
        case 38:
            
            rep = "엔젤릭버스터";
            break;
        case 39:
            
            rep = "아델";
            break;
        case 40:
            
            rep = "일리움";
            break;
        case 41:
            
            rep = "아크";
            break;
        case 42:
            
            rep = "라라";
            break;
        case 43:
            
            rep = "호영";
            break;
        case 44:
            
            rep = "제로";
            break;
        case 45:
            
            rep = "키네시스";
            break;
        case 46:
            
            rep = "모험가 전사";
            break;
        case 47:
            
            rep = "모험가 마법사";
            break;
        case 48:
            jobM = require('skillAdvArcher');
            rep = jobM.getskilldesc2AdvArcher(skillcode);
            break;
        case 49:
            
            rep = "모험가 도적";
            break;
        case 50:
            
            rep = "모험가 해적";
            break;
        case 51:
            
            rep = "시그너스 기사단";
            break;
        case 52:
            
            rep = "레지스탕스";
            break;
        case 53:
            
            rep = "데몬";
            break;
        case 54:
            
            rep = "영웅";
            break;
        case 55:
            
            rep = "노바";
            break;
        case 56:
            
            rep = "레프";
            break;
        case 57:
            
            rep = "아니마";
            break;
        case 58:
            
            rep = "전사";
            break;
        case 59:
            
            rep = "마법사";
            break;
        case 60:
            
            rep = "궁수";
            break;
        case 61:
            
            rep = "도적";
            break;
        case 62:
            
            rep = "해적";
            break;
        case 63:            
            rep = "모험가";
            break;        
        case 64:            
            rep = "공용";
            break;
    }
    return rep;
};
sk.getJobskillimage1 = function(jobcode, skillcode){    
    rep = "";
    var jobM;
    switch (jobcode) {
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
            jobM = require('skillBowmaster');
            rep = jobM.getskillimage1Bowmaster(skillcode);
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
            
            rep = "소울마스터";
            break;
        case 17:
            
            rep = "플레임위자드";
            break;
        case 18:
            
            rep = "윈드브레이커";
            break;
        case 19:
            
            rep = "나이트워커";
            break;
        case 20:
            
            rep = "스트라이커";
            break;
        case 21:
            
            rep = "미하일";
            break;
        case 22:
            
            rep = "블래스터";
            break;
        case 23:
            
            rep = "배틀메이지";
            break;
        case 24:
            
            rep = "와일드헌터";
            break;
        case 25:
            
            rep = "메카닉";
            break;
        case 26:
            
            rep = "제논";
            break;
        case 27:
            
            rep = "데몬슬레이어";
            break;
        case 28:
            
            rep = "데몬어벤져";
            break;
        case 29:
            
            rep = "아란";
            break;
        case 30:
            
            rep = "에반";
            break;
        case 31:
            
            rep = "루미너스";
            break;
        case 32:
            
            rep = "메르세데스";
            break;
        case 33:
            
            rep = "팬텀";
            break;
        case 34:
            
            rep = "은월";
            break;
        case 35:
            
            rep = "카이저";
            break;
        case 36:
            
            rep = "카인";
            break;
        case 37:
            
            rep = "카데나";
            break;
        case 38:
            
            rep = "엔젤릭버스터";
            break;
        case 39:
            
            rep = "아델";
            break;
        case 40:
            
            rep = "일리움";
            break;
        case 41:
            
            rep = "아크";
            break;
        case 42:
            
            rep = "라라";
            break;
        case 43:
            
            rep = "호영";
            break;
        case 44:
            
            rep = "제로";
            break;
        case 45:
            
            rep = "키네시스";
            break;
        case 46:
            
            rep = "모험가 전사";
            break;
        case 47:
            
            rep = "모험가 마법사";
            break;
        case 48:
            jobM = require('skillAdvArcher');
            rep = jobM.getskillimage1AdvArcher(skillcode);
            break;
        case 49:
            
            rep = "모험가 도적";
            break;
        case 50:
            
            rep = "모험가 해적";
            break;
        case 51:
            
            rep = "시그너스 기사단";
            break;
        case 52:
            
            rep = "레지스탕스";
            break;
        case 53:
            
            rep = "데몬";
            break;
        case 54:
            
            rep = "영웅";
            break;
        case 55:
            
            rep = "노바";
            break;
        case 56:
            
            rep = "레프";
            break;
        case 57:
            
            rep = "아니마";
            break;
        case 58:
            
            rep = "전사";
            break;
        case 59:
            
            rep = "마법사";
            break;
        case 60:
            
            rep = "궁수";
            break;
        case 61:
            
            rep = "도적";
            break;
        case 62:
            
            rep = "해적";
            break;
        case 63:            
            rep = "모험가";
            break;        
        case 64:            
            rep = "공용";
            break;
    }
    return rep;
};
sk.getJobskillimage2 = function(jobcode, skillcode){    
    rep = "";
    var jobM;
    switch (jobcode) {
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
            jobM = require('skillBowmaster');
            rep = jobM.getskillimage2Bowmaster(skillcode);
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
            
            rep = "소울마스터";
            break;
        case 17:
            
            rep = "플레임위자드";
            break;
        case 18:
            
            rep = "윈드브레이커";
            break;
        case 19:
            
            rep = "나이트워커";
            break;
        case 20:
            
            rep = "스트라이커";
            break;
        case 21:
            
            rep = "미하일";
            break;
        case 22:
            
            rep = "블래스터";
            break;
        case 23:
            
            rep = "배틀메이지";
            break;
        case 24:
            
            rep = "와일드헌터";
            break;
        case 25:
            
            rep = "메카닉";
            break;
        case 26:
            
            rep = "제논";
            break;
        case 27:
            
            rep = "데몬슬레이어";
            break;
        case 28:
            
            rep = "데몬어벤져";
            break;
        case 29:
            
            rep = "아란";
            break;
        case 30:
            
            rep = "에반";
            break;
        case 31:
            
            rep = "루미너스";
            break;
        case 32:
            
            rep = "메르세데스";
            break;
        case 33:
            
            rep = "팬텀";
            break;
        case 34:
            
            rep = "은월";
            break;
        case 35:
            
            rep = "카이저";
            break;
        case 36:
            
            rep = "카인";
            break;
        case 37:
            
            rep = "카데나";
            break;
        case 38:
            
            rep = "엔젤릭버스터";
            break;
        case 39:
            
            rep = "아델";
            break;
        case 40:
            
            rep = "일리움";
            break;
        case 41:
            
            rep = "아크";
            break;
        case 42:
            
            rep = "라라";
            break;
        case 43:
            
            rep = "호영";
            break;
        case 44:
            
            rep = "제로";
            break;
        case 45:
            
            rep = "키네시스";
            break;
        case 46:
            
            rep = "모험가 전사";
            break;
        case 47:
            
            rep = "모험가 마법사";
            break;
        case 48:
            jobM = require('skillAdvArcher');
            rep = jobM.getskillimage2AdvArcher(skillcode);
            break;
        case 49:
            
            rep = "모험가 도적";
            break;
        case 50:
            
            rep = "모험가 해적";
            break;
        case 51:
            
            rep = "시그너스 기사단";
            break;
        case 52:
            
            rep = "레지스탕스";
            break;
        case 53:
            
            rep = "데몬";
            break;
        case 54:
            
            rep = "영웅";
            break;
        case 55:
            
            rep = "노바";
            break;
        case 56:
            
            rep = "레프";
            break;
        case 57:
            
            rep = "아니마";
            break;
        case 58:
            
            rep = "전사";
            break;
        case 59:
            
            rep = "마법사";
            break;
        case 60:
            
            rep = "궁수";
            break;
        case 61:
            
            rep = "도적";
            break;
        case 62:
            
            rep = "해적";
            break;
        case 63:            
            rep = "모험가";
            break;        
        case 64:            
            rep = "공용";
            break;
    }
    return rep;
};

/*
switch(skillcode){
        case 0:
            rep = "";
            break;
        case 1:
            rep = "";
            break;
        case 2:
            rep = "";
            break;
        case 3:
            rep = "";
            break;
        case 4:
            rep = "";
            break;
        case 5:
            rep = "";
            break;
        case 6:
            rep = "";
            break;
        case 7:
            rep = "";
            break;
        case 8:
            rep = "";
            break;
        case 9:
            rep = "";
            break;
        case 10:
            rep = "";
            break;
        case 11:
            rep = "";
            break;
        case 12:
            rep = "";
            break;
        case 13:
            rep = "";
            break;
        case 14:
            rep = "";
            break;
        case 15:
            rep = "";
            break;
        case 16:
            rep = "";
            break;
        case 17:
            rep = "";
            break;
        case 18:
            rep = "";
            break;
        case 19:
            rep = "";
            break;
    }
 */

module.exports = sk;