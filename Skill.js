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
    case "캐논":
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
    case "블레스터":
    case "블레":
        ret = 22;
        break;
    case "배틀메이지":
    case "배메":
    case "베메":
        ret = 23;
        break;
    case "와일드헌터":
    case "와헌":
        ret = 24;
        break;
    case "메카닉":
    case "메카":
    case "세탁기":
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
    case "데벤":
    case "데벤저":
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
    case "모험가":
        ret = 63;
        break;       
    case "공용":
        ret = 64;
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
        rep = "모험가";
        break;
    case 64:
        rep = "공용";
        break;
    }
    return rep;
};
sk.getJobskillList = function(ind) {
    rep = "";
    switch (ind) {
    case 0:
        rep = "초보자\n\n달팽이 세마리, 회복, 민첩한 몸놀림, 리턴 투 메이플";
        break;
    case 1:
        rep = "히어로\n\n1차 : 어퍼 차지, 리프 어택\n2차 : 플래시 슬래시, 콤보 어택, 스피릿 블레이드, \n3차 : 오라 블레이드, 돌진, 스카링 소드, 콤보 시너지, 찬스 어택\n4차 : 레이징 블로우, 인사이징, 매직 크래쉬, 인레이지, 어드밴스드 콤보, 컴뱃 마스터리, 스탠스\n하이퍼 스킬 : 발할라, 레이지 업라이징\n5차 : 소드 오브 버닝 소울, 콤보 데스폴트, 콤보 인스팅트, 소드 일루전";
        break;
    case 2:
        rep = "팔라딘\n\n1차 : 어퍼 차지, 리프 어택\n2차 : 홀리 차지, 페이지 오더, 스탠스\n3차 : 디바인 차지, 리스토네이션, 돌진, 노블 디맨드, 파라쇼크 가드, 컴뱃 오더스, 실드 마스터리, 아킬레스, 블레싱 아머\n4차(컴뱃오더스 적용 기준) : 디바인 스티그마, 블래스트, 디바인 저지먼트, 매직 크래쉬, 생츄어리, 디바인 블레싱, 가디언 스피릿, 팔라딘 엑스퍼트, 어드밴스드 홀리 차지\n하이퍼 스킬 : 새크로생티티, 스마이트\n5차 : 홀리 유니티, 블래스드 해머, 그랜드 크로스, 마이티 묠니르";
        break;
    case 3:
        rep = "다크나이트\n\n1차 : 어퍼 차지, 리프 어택\n2차 : 스피어 풀링, 비홀더, 비홀더 쇼크, 하이퍼 바디\n3차 : 돌진, 크로스 오버 체인, 비홀더 도미넌트, 비홀더 쇼크 II, 비홀더스 버프, 로드 오브 다크니스, 인듀어\n4차 : 궁니르 디센트, 다크 임페일, 리인카네이션 액셉트, 리인카네이션(쿼터, 하프, 풀), 다크 레조넌스, 매직 크래쉬, 비홀더스 리벤지, 어드밴스드 웨폰 마스터리, 스탠스\n하이퍼 스킬 : 다크 서스트, 다크 신서시스\n5차 : 다크 스피어, 비홀더 임팩트, 피어스 사이클론, 다크니스 오라";
        break;
    case 4:
        rep = "아크메이지(불,독)\n\n1차 : 마나 웨이브\n2차 : 엘리멘탈 드레인, 메디테이션, 이그나이트, MP 이터\n3차 : 포이즌 미스트, 포이즌 리젼, 엘리멘탈 어뎁팅(불,독), 텔레포트 마스터리, 텔레포트 부스트, 엘리멘탈 리셋, 엘리먼트 앰플리피케이션, 익스트림 매직(불,독)\n4차 : 플레임 스윕, 미스트 이럽션, 퍼번트 드레인, 메테오, 플레임 헤이즈, 인피니티, 이프리트\n하이퍼 스킬 : 파이어 오라, 메기도 플레임\n5차 : 도트 퍼니셔, 포이즌 노바, 퓨리 오브 이프리트, 포이즌 체인";
        break;
    case 5:
        rep = "아크메이지(썬,콜)\n\n1차 : 마나 웨이브\n2차 : 프리징 이펙트, 칠링 스텝, 메디테이션, MP 이터\n3차 : 엘리멘탈 어뎁팅, 썬더 스피어, 텔레포트 마스터리, 텔레포트 부스트, 프로즌 브레이크, 엘리멘탈 리셋, 익스트림 매직(썬,콜), 엘리먼트 앰플리피케이션\n4차 : 체인 라이트닝, 프리징 브레스, 블리자드, 프로즌 오브, 인피니티, 엘퀴네스, 프로스트 이펙트\n하이퍼 스킬 : 아이스 오라, 라이트닝 스피어\n5차 : 아이스 에이지, 썬더 브레이크, 스피릿 오브 스노우, 주피터 썬더";
        break;
    case 6:
        rep = "비숍\n\n1차 : 마나 웨이브\n2차 : 블레싱 앙상블, 힐 / 엔젤릭 터치, 블레스, 인빈서블, MP 이터\n3차 : 홀리 파운틴 / 파운틴 포 엔젤, 디바인 프로텍션, 미스틱 도어, 디스펠 / 트라이엄프 페더, 홀리 심볼, 텔레포트 마스터리, 텔레포트 부스트, 홀리 매직쉘, 홀리 포커스\n4차 : 엔젤레이, 제네시스, 빅뱅, 블레싱 하모니, 홀리 워터 / 홀리 블러드, 리저렉션, 인피니티, 바하뮤트, 어드밴스드 블레스\n하이퍼 스킬 : 벤전스 오브 엔젤, 헤븐즈 도어\n5차 : 프레이, 엔젤 오브 리브라, 피스메이커, 디바인 퍼니시먼트";
        break;
    case 7:
        rep = "보우마스터\n\n2차 : 바람의 시, 리트리트 샷, 소울 애로우 : 활, 퀴버 카트리지\n3차 : 애로우 플래터, 피닉스, 슈타이크 아이젠(삭제), 익스트림 아쳐리 : 활, 모탈 블로우, 컨센트레이션, 플레시 미라주, 퀴버 플로우\n4차 : 폭풍의 시, 운즈 샷(삭제), 언카운터블 애로우, 어드밴스드 퀴버, 아머 피어싱, 플레시 미라주 II\n하이퍼 스킬 : 프리퍼레이션, 윈드 오브 프레이\n5차 : 애로우 레인, 잔영의 시, 퀴버 풀버스트, 실루엣 미라주";
        break;
    case 8:
        rep = "신궁\n\n2차 : 피어싱, 리트리트 샷, 소울 애로우 : 석궁\n3차 : 인핸스 애로우, 프리져, 볼트 스위프트, 볼트 플로우, 페인 킬러, 익스트림 아쳐리 : 석궁, 모탈 블로우, 데미지 리버싱\n4차 : 피어싱 II, 스나이핑, 어드밴스드 인핸스 애로우, 애로우 일루전, 어디셔널 볼트, 라스트맨 스탠딩\n하이퍼 스킬 : 불스아이, 롱 레인지 트루샷\n5차 : 트루 스나이핑, 스플릿 애로우, 차지드 애로우, 리피팅 크로스보우 카트리지";
        break;
    case 9:
        rep = "패스파인더\n\n0차 : 고대의 저주\n1차 : 커스 위크닝 I, 카디널 디스차지\n2차 : 렐릭 차지 I, 커스 위크닝 II, 카디널 디스차지 강화, 카디널 블래스트, 스플릿 미스텔, 에디셔널 디스차지\n3차 : 커스 위크닝 III, 카디널 블래스트 강화, 카디널 트랜지션, 트리플 임팩트, 레이븐, 커스 톨러런스, 에인션트 가이던스, 에디셔널 블래스트, 에센스 오브 아처\n4차 : 렐릭 차지 II, 커스 트랜지션, 어드밴스드 카디널 포스, 엣지 오브 레조넌스, 콤보 어썰트(디스차지, 블래스트, 트랜지션), 에디셔널 트랜지션, 에인션트 아처리\n하이퍼 스킬 : 렐릭 에볼루션, 에인션트 아스트라(디스차지, 블래스트, 트랜지션)\n5차 : 얼티밋 블래스트, 레이븐 템페스트, 옵시디언 배리어(디스차지, 블래스트, 트랜지션), 렐릭 언바운드(디스차지, 블래스트, 트랜지션)";
        break;
    case 10:
        rep = "나이트로드\n\n1차 : 다크 사이트\n2차 : 윈드 탈리스만, 마크 오브 어쌔신, 쉐도우 러시, 쉐도우 리프\n3차 : 다크 플레어, 쉐도우 파트너, 스피릿 자벨린, 래디컬 다크니스, 베놈, 숙련된 표창술, 아드레날린\n4차 : 쿼드러플 스로우, 쇼다운 챌린지, 마크 오브 나이트로드, 써든레이드, 퍼지 에어리어, 다크 세레니티, 페이크, 페이탈 베놈\n하이퍼 스킬 : 블리딩 톡신, 포 시즌\n5차 : 스프레드 스로우, 풍마수리검, 다크로드의 비전서, 스로우 블래스팅";
        break;
    case 11:
        rep = "섀도어\n\n1차 : 다크 사이트\n2차 : 크리티컬 엣지, 스틸, 카르마, 실드 마스터리, 시프 어질리티\n3차 : 무스펠 하임, 메소 익스플로젼(블러디 파킷), 다크 플레어, 픽 파킷, 쉐도우 파트너, 어드밴스드 다크 사이트, 인투 다크니스, 베놈, 그리드, 래디컬 다크니스\n4차 : 암살, 크루얼 스탭, 블러디 파킷, 써든레이드, 연막탄, 섀도어 인스팅트, 페이크, 페이탈 베놈\n하이퍼 스킬 : 플립 더 코인, 베일 오브 섀도우\n5차 : 쉐도우 어썰트, 절개, 소닉 블로우, 멸귀참영진";
        break;
    case 12:
        rep = "듀얼블레이드\n\n1차 : 다크 사이트\n1.5차 : 토네이도 스핀\n2차 : 카르마\n2.5차 : 플라잉 어썰터, 플래시 뱅, 베놈\n3차 : 블레이드 어센션, 사슬지옥, 미러 이미징, 어드밴스드 다크 사이트, 바이탈 스틸, 래디컬 다크니스, 섀도우 이베이젼\n4차 : 블레이드 퓨리, 팬텀 블로우, 파이널 컷, 써든레이드, 더미 이펙트, 쏜즈 이펙트, 샤프니스, 페이탈 베놈\n하이퍼 스킬 : 히든 블레이드, 아수라\n5차 : 블레이드 스톰, 카르마 퓨리, 블레이드 토네이도, 헌티드 엣지";
        break;
    case 13:
        rep = "바이퍼\n\n1차 : 파이렛 리프, 대쉬\n2차 : 볼텍스 점프, 씨 서펜트, 씨 서펜트 버스트, 어드밴스드 대쉬, 멘탈 클리어리티, HP 증가\n3차 : 스크류 펀치, 씨 서펜트 강화 I, 럭키 다이스, 서펜트 스톤, 서펜트 어썰트, 윌로우 디펜시브, 크리티컬 레이지, 그로기 마스터리\n4차 : 피스트 인레이지, 훅 봄버, 씨 서펜트 강화 II, 씨 서펜트 버스트 II, 씨 서펜트 인레이지, 서펜트 어썰트 인레이지, 전함 노틸러스, 바이퍼지션, 타임리프, 윈드 부스터, 더블 럭키 다이스, 디펜스 폼, 오펜스 폼, 가드 크러쉬\n하이퍼 스킬 : 스티뮬레이트, 서펜트 스피릿\n5차 : 트랜스 폼, 서펜트 스크류, 퓨리어스 차지, 하울링 피스트";
        break;
    case 14:
        rep = "캡틴\n\n1차 : 파이렛 리프, 대쉬\n2차 : 서먼 크루, 백스텝샷, 윙즈, 인피닛 불릿\n3차 : 불릿 스매시, 시즈 봄버, 럭키 다이스, 할로포인트 불릿, 발키리 페이션트, 풀메탈 자켓, 어셈블 크루\n4차 : 래피드 파이어, 헤드 샷, 퍼실레이드, 퀵 드로우, 배틀쉽 봄버, 사인 오브 봄바드, 컨티뉴얼 에이밍, 전함 노틸러스, 파이렛 스타일, 오펜스 폼, 더블 럭키 다이스, 크루 커맨더십, 캡틴 디그니티\n하이퍼 스킬 : 언위어링 넥타, 스트레인지 봄\n5차 : 불릿 파티, 데드아이, 노틸러스 어썰트, 데스 트리거";
        break;
    case 15:
        rep = "캐논슈터\n\n1차 : 기간틱 백스텝, 캐논 리프, 몽키와 함께라면!, 캐논 점프\n2차 : 몽키 러쉬붐, 몽키 매직, 크리티컬 파이어\n3차 : 미니 캐논볼, 몽키 퓨리어스, 오크통 룰렛, 럭키 다이스, 리인포스 캐논, 바이탈 익스트림, 반격의 슈터\n4차 : 캐논 바주카, 캐논 버스터, 마그네틱 앵커, 서포트 몽키 트윈스, 전함 노틸러스, 오버버닝 캐논, 하이퍼 몽키 스펠, 더블 럭키 다이스, 파이렛 스피릿\n하이퍼 스킬 : 벅 샷, 롤링 캐논 레인보우\n5차 : 빅 휴즈 기간틱 캐논볼, ICBM, 스페셜 몽키 에스코트, 풀 메이커";
        break;
    case 16:
        rep = "소울마스터\n\n1차 : 엘리멘트 : 소울, 소드 오브 라이트, 이너 보이스\n2차 : 폴링 문, 님블 핑거, 이너 트러스트, 바디 앤 소울\n3차 : 라이징 선, 트루 사이트, 소울 가디언, 윌 오브 스틸, 이너 샤우트\n4차 : 댄스 오브 문, 스피딩 선셋, 크레센트 디바이드, 솔라 피어스, 소울 페네트레이션, 솔루나 타임, 솔루나 슬래시, 소울 플레지, 언포시어블, 마스터 오브 더 소드\n하이퍼 스킬 : 소울 포지, 크로스 더 스틱스\n5차 : 셀레스티얼 댄스, 엘리시온, 소울 이클립스, 플레어 슬래시";
        break;
    case 17:
        rep = "플레임위자드\n\n5차 : 블레이징 오비탈 플레임, 플레임 디스차지, 인피니티 플레임 서클, 샐리맨더 미스칩";
        break;
    case 18:
        rep = "윈드브레이커\n\n1차 : 윈드 워크, 엘리멘트 : 스톰\n2차 : 페어리 턴, 트라이플링 윔 I, 실프스 에이드\n3차 : 서리바람의 군무, 핀포인트 피어스, 트라이플링 윔 II, 알바트로스, 에메랄드 플라워, 페더리니스, 세컨드 윈드\n4차 : 천공의 노래, 스파이럴 볼텍스, 트라이플링 윔 III, 윈드 블레싱, 에메랄드 더스트, 알바트로스 맥시멈\n하이퍼 스킬 : 스톰 브링어, 몬순\n5차 : 하울링 게일, 아이들 윔, 윈드 월, 볼텍스 스피어";
        break;
    case 19:
        rep = "나이트워커\n\n5차 : 쉐도우 스피어, 쉐도우 서번트 익스텐드, 쉐도우 바이트, 래피드 스로우";
        break;
    case 20:
        rep = "스트라이커\n\n5차 : 신뇌합일, 교아탄, 뇌신창격, 창뇌연격";
        break;
    case 21:
        rep = "미하일\n\n1차 : 로얄 가드\n5차 : 로 아이아스, 클라우 솔라스, 소드 오브 소울 라이트, 라이트 오브 커리지";
        break;
    case 22:
        rep = "블래스터\n\n5차 : 벙커 버스터, 발칸 펀치, 버닝 브레이커, 애프터이미지 쇼크";
        break;
    case 23:
        rep = "배틀메이지\n\n5차 : 유니온 오라, 블랙 매직 알터, 그림 리퍼, 어비셜 라이트닝";
        break;
    case 24:
        rep = "와일드헌터\n\n5차 : 재규어 스톰, 재규어 맥시멈, 와일드 그레네이드, 와일드 발칸 Type X";
        break;
    case 25:
        rep = "메카닉\n\n0차 : 제트 부스터, 히든 피스\n1차 : 메탈아머 : 휴먼, 드릴 러쉬, 로켓 부스터\n2차 : 호밍 미사일, 오픈 게이트 : GX-9, 로봇 런처 : RM7\n3차 : 메탈아머 : 탱크, 서포트 웨이버 : H-EX, 로켓 펀치, 오버 튜닝, 럭키 다이스, 마그네틱 필드, 어드밴스드 호밍 미사일, 메카닉 디펜스 시스템, 전투 프로그램 셋업\n4차 : 매시브 파이어 : SPLASH-F, 매시브 파이어 : IRON-B, 워머신 : 타이탄, 서포트 웨이버 강화, 로봇 팩토리 : RM1, 호밍 미사일 시스템 연구, 로봇 마스터리, 더블 럭키 다이스, 메탈아머 합금 연구\n하이퍼 스킬 : 봄버 타임, 디스토션 필드\n5차 : 멀티플 옵션 : M-FL, 마이크로 미사일 컨테이너, 메탈아머 전탄발사, 메카 캐리어";
        break;
    case 26:
        rep = "제논\n\n0차 : 서플러스 서플라이, 멀티래터럴 I, 멀티 모드 링커, 에비에이션 리버티, 카모플라쥬, 컨버전 스타포스\n1차 : 서든 프로펠, 인클라인 파워, 멀티래터럴 II, 핀포인트 로켓\n2차 : 퀵실버 소드 : 도약, 이온 쓰러스터, 리니어 퍼스펙티브, 마이너리티 서포트, 멀티래터럴 III\n3차 : 컴뱃 스위칭 : 분열, 다이아그널 체이스, 이지스 시스템, 트라이앵글 포메이션, 버추얼 프로젝션, 멀티래터럴 IV, 엑스트라 서플라이\n4차 : 블레이드 댄싱, 퍼지롭 매스커레이드 : 저격 / 포격 / 폭격, 홀로그램 그래피티 : 관통 / 역장 / 지원, 오파츠 코드, 인스턴트 셔크, 타임 캡슐, 오펜시브 매트릭스, 멀티래터럴 V, 멀티래터럴 VI\n하이퍼 스킬 : 아마란스 제네레이터, 컨파인 인탱글, 멜트다운 익스플로젼\n5차 : 메가 스매셔, 오버로드 모드, 홀로그램 그래피티 : 융합, 포톤 레이";
        break;
    case 27:
        rep = "데몬슬레이어\n\n0차 : 데몬 점프, 데모닉 블러드, 데스 커스\n1차 : 데몬 슬래시, 다크 어질리티\n2차 : 데몬 슬래시 1차 강화, 소울 이터, 다크 쓰러스트, 데몬 트레이스, 다크 리벤지, 아웃레이지\n3차 : 데몬 슬래시 2차 강화, 다크 저지먼트, 데스 드로우, 블러디 레이븐, 데모닉 브레스, 다크 인듀어, 이블 토쳐, 컨센트레이션, 포스 가드, 맥스 포스\n4차 : 데몬 슬래시 최종 강화, 데몬 익스플로젼, 데몬 임팩트, 데빌 크라이, 다크 바인드, 메타모포시스, 인피니티 포스, 뱀피릭 터치, 하드 스킨\n하이퍼 스킬 : 블루 블러드, 서버러스\n5차 : 데몬 어웨이크닝, 요르문간드, 오르트로스, 데몬 베인";
        break;
    case 28:
        rep = "데몬어벤져\n\n0차 : 데몬 점프, 데모닉 블러드, 익시드, 하이 이피션시, 컨버전 스타포스, 블러드 컨트랙트\n1차 : 릴리즈 오버로드, 앱졸브 라이프, 데모닉 샤프니스\n2차 : 익시드 : 데몬 스트라이크, 배츠 스웜, 어비셜 레이지, 이너 스트렝스\n3차 : 익시드 : 문라이트 슬래시, 인헤일 바이탈러티, 실드 차지, 리프랙트 이블, 디아볼릭 리커버리, 이즈 익시드 페인, 어드밴스드 앱졸브 라이프\n4차 : 익시드 : 엑스큐션, 실드 체이싱, 아머 브레이크, 블러디 임프리즌, 오버휄밍 파워, 디펜스 엑스퍼타이즈, 인핸스드 익시드\n하이퍼 스킬 : 포비든 컨트랙트, 사우전드 소드\n5차 : 데몬 프렌지, 블러드 피스트, 디멘션 소드, 레버넌트";
        break;
    case 29:
        rep = "아란\n\n0차 : 컴뱃 스탭, 되찾은 기억, 콤보킬 어드밴티지\n1차 : 콤보 어빌리티, 스매시 스윙, 스매시 웨이브, 바디 프레셔\n2차 : 파이널 차지, 파이널 토스, 롤링 스핀, 드레인, 스노우 차지, 다이나믹 마스터리 I, 스윙 연구 I, 피지컬 트레이닝\n3차 : 어드밴스드 콤보 어빌리티, 에어로 스윙, 아드레날린 부스트 액티베이트, 아드레날린 부스트, 파이널 블로우, 저지먼트, 게더링 캐쳐, 블레싱 마하, 마이트, 클리빙 어택\n4차 : 비욘더, 부스트 엔드-스톰 오브 피어, 부스트 엔드-헌터즈 타겟팅, 하이 디펜스, 스위프트 무브, 다이나믹 마스터리 II, 스윙 연구 II\n하이퍼 스킬: 아드레날린 제네레이터, 마하의 영역\n5차: 인스톨 마하, 브랜디쉬 마하, 펜릴 크래시, 블리자드 템페스트";
        break;
    case 30:
        rep = "에반\n\n1차 : 서클 오브 마나 I, 드래곤 소울, 링크드 매직, 드래곤 스파킹\n2차 : 서클 오브 마나 II, 서클 오브 윈드, 드래곤 스위프트, 스위프트 오브 윈드, 스위프트-돌아와!, 돌아와!, 윈드 점프, 교감, 어드밴스 드래곤 스파킹\n3차 : 서클 오브 마나 III, 서클 오브 썬더, 드래곤 다이브, 다이브-돌아와!, 다이브 오브 썬더, 스위프트 오브 썬더, 마법 잔해, 엘리멘탈 리셋, 크리티컬 매직, 매직 레지스턴스, 매직 앰플리피케이션, 드래곤 포텐셜\n4차 : 서클 오브 마나 IV, 서클 오브 어스, 드래곤 브레스, 브레스 오브 윈드, 브레스 오브 어스, 브레스-돌아와!, 다이브 오브 어스, 다크 포그, 오닉스의 축복, 강화된 마법 잔해, 오닉스의 의지, 드래곤 퓨리, 하이 드래곤 포텐셜\n하이퍼 스킬 : 서먼 오닉스 드래곤, 드래곤 마스터\n5차 : 엘리멘탈 블래스트, 드레곤 브레이크( 브레이크-돌아와!, 임페리얼 브레스), 조디악 레이, 스파이럴 오브 마나";
        break;
    case 31:
        rep = "루미너스\n\n0차 : 파워 오브 라이트, 라이트 블링크, 퍼미에이트, 선파이어, 이클립스, 이퀄리브리엄\n1차: 라이트랜스포밍, 오디너리 매직가드, 익스텐드 마나, 빛 마법 강화 / 어둠 마법 강화\n2차: 실피드 랜서, 인바이러빌러티, 블레스 오브 다크니스, 스펠 마스터리, 하이 위즈덤\n3차: 샤인 리뎀션, 데스 사이드, 안티 매직쉘, 포틱 메디테이션, 라이트쉐도우 가드, 라이프 타이달\n4차: 운명의 갈림길, 라이트 리플렉션, 모닝 스타폴, 아포칼립스, 앱솔루트 킬, 다크니스 소서러, 다크 크레센도, 다크라이트 마스터리\n하이퍼 스킬 : 메모라이즈, 아마겟돈\n5차: 진리의 문, 퍼니싱 리조네이터, 빛과 어둠의 세례, 리버레이션 오브";
        break;
    case 32:
        rep = "메르세데스\n\n0차 : 스타일리쉬 무브, 왕의 자격\n1차 : 포텐셜 파워, 스피릿 점프, 샤프 에이밍\n2차 : 차지 드라이브, 파이널 샷, 스피릿 인퓨젼\n3차 : 스트라이크 듀얼샷, 리프 토네이도, 유니콘 스파이크, 거스트 다이브, 워터실드, 하이킥 데몰리션, 엘리멘탈 나이트, 이그니스 로어\n4차 : 이슈타르의 링, 레전드리 스피어, 라이트닝 엣지, 롤링 문썰트, 스피릿 이스케이프, 앤시언트 스피릿, 어드밴스드 스트라이크 듀얼샷, 디펜스 브레이크\n하이퍼 스킬 : 엘비쉬 블레싱, 래쓰 오브 엔릴\n5차 : 엘리멘탈 고스트, 실피디아, 이르칼라의 숨결, 로얄 나이츠";
        break;
    case 33:
        rep = "팬텀\n\n0차 : 팬텀 슈라우드, 하이 덱스터러티, 스틸 스킬, 스킬 매니지먼트, 저지먼트, 데들리 인스팅트\n1차 : 탤런트 오브 팬텀시프I, 스위프트 팬텀, 퀵 이베이젼\n2차 : 탤런트 오브 팬텀시프II, 브리즈 카르트, 럭 모노폴리\n3차 : 코트 오브 암즈, 탤런트 오브 팬텀시프III, 럭 오브 팬텀시프, 미스포츈 프로텍션, 문 라이트, 플래시 앤 플리, 어큐트 센스\n4차 : 얼티밋 드라이브, 탤런트 오브 팬텀시프IV, 템페스트 오브 카드, 트와일라이트, 느와르 카르트, 소울 스틸, 프레이 오브 아리아\n하이퍼 스킬 : 탤런트 오브 팬텀시프H, 로즈 카르트 피날레\n5차 : 조커, 블랙잭, 마크 오브 팬텀, 리프트 브레이크";
        break;
    case 34:
        rep = "은월\n\n0차 : 축지, 정령 결속 1식, 정령친화\n1차 : 도약, 건곤 일체\n2차 : 파쇄철조-하, 파쇄철조-전, 후방 이동, 정령 결속 2식, 여우령, 여우령 숙련\n3차 : 파쇄철조-회, 소혼 장막, 속박술, 정령 결속 3식, 강혼 체식, 환령 강신, 약화\n4차 : 폭류권, 귀참, 사혼 각인, 분혼 격참, 소혼 결계, 불여우령 숙련, 정령 결속 4식, 약점 간파\n하이퍼 스킬 : 정령 결속 극대화, 정령의 화신\n5차 : 정령 집속, 귀문진, 진 귀참, 파쇄 연권";
        break;
    case 35:
        rep = "카이저\n\n0차 : 리셔플스위치: 방어모드, 리셔플스위치: 공격모드, 버티컬 커넥트, 트랜스피규레이션, 커맨드\n1차 : 드래곤슬래시, 플레임 샷, 더블 리프, 스킨 프로텍션\n2차 : 드래곤슬래시 1차 강화, 임팩트 웨이브, 피어스 러쉬, 윌 오브 소드, 블레이즈 업, 이너 블레이즈, 방어모드 1차 강화, 공격모드 1차 강화\n3차 : 드래곤슬래시 2차 강화, 윙비트, 체인풀링, 파이널 피규레이션, 페트리파이드, 리게인 스트렝스, 카탈라이즈, 셀프 리커버리, 어드밴스드 이너 블레이즈, 방어모드 2차 강화, 공격모드 2차 강화\n4차 : 드래곤슬래시 3차 강화, 기가 슬래셔, 블루 스트릭, 소드 스트라이크, 인퍼널 브레스, 어드밴스드 윌 오브 소드, 로버스트 아머, 언플리칭 커리지, 방어모드 3차 강화, 공격모드 3차 강화\n하이퍼 스킬 : 마제스티 오브 카이저, 프로미넌스, 파이널 트랜스\n5차 : 가디언 오브 노바, 윌 오브 소드 : 스트라이크, 드라코 슬래셔, 드래곤 블레이즈";
        break;
    case 36:
        rep = "카인\n\n1차 : 스트라이크 애로우, 쉐도우 스텝, 그래플링 와이어, 쉐도우 스위프트, 히트맨, 커버트\n2차 : 포제션, 드래곤 팡, 스트라이크 애로우 II, [발현] 스트라이크 애로우, 스캐터링 샷, [발현] 스캐터링 샷\n3차 : 스트라이크 애로우 III, 데스 블레싱, 샤프트 브레이크, [발현] 샤프트 브레이크, [처형] 팬텀 블레이드, [처형] 테어링 나이프, 리메인 인센스, 내츄럴 본 인스팅트, 그라인딩\n4차 : 포제션 II, 어드밴스드 데스 블레싱, 폴링 더스트, [발현] 폴링 더스트, [처형] 체인 시클, [처형] 포이즌 니들, 드래곤 스케일, 그라인딩 II, 도그마, 어댑트 투 데스\n하이퍼 스킬 : 체이싱 샷, 스니키 스나이핑, [발현/처형] 스니키 스나이핑, 인카네이션\n5차 : [발현] 드래곤 버스트, [처형] 페이탈 블리츠, 타나토스 디센트, 그립 오브 애거니";
        break;
    case 37:
        rep = "카데나\n\n0차 : 흥정\n1차 : 체인아츠:체이스, 체인아츠:스트로크, 서먼 커팅 시미터, 에이전트 시프트, 에이전트 스텝, 콜렉팅 포리프\n2차 : 체인아츠:스트로크 1차 강화, 서먼 스크래칭 클로, 서먼 스로잉 윙대거, 웨폰 버라이어티 I, 퀵서비스 마인드 I\n3차 : 체인아츠:스트로크 2차 강화, 서먼 슈팅 샷건, 서먼 슬래싱 나이프, 서먼 릴리싱 봄, 웨폰 버라이어티 II, 템퍼, 위크포인트 어택, 베이직 디텍션\n4차 : 체인아츠:스트로크 최종 강화, 서먼 스트라이킹 브릭, 서먼 비팅 니들배트, 체인아츠:터프 허슬, 체인아츠:테이크다운, 웨폰 버라이어티 III, 위크포인트 컨버징 어택, 퀵서비스 마인드 II\n하이퍼 스킬 : 프로페셔널 에이전트, 체인아츠:크러시, 상인단 특제 비약\n5차 : 체인아츠:퓨리, A.D 오드넌스, 체인아츠:메일스트롬, 웨폰 버라이어티 피날레";
        break;
    case 38:
        rep = "엔젤릭버스터\n\n0차 : 석세서, 매지컬 리프트, 소울 컨트랙트\n1차 : 매지컬 시프트, 어피니티 I\n2차 : 핑크 스커드, 파워 트랜스퍼, 어피니티 II\n3차 : 소울 시커, 아이언 로터스, 콜 오브 에인션트, 이너 피스, 어피니티 III\n4차 : 프라이멀 로어, 트리니티, 피니투라 페투치아, 소울 레조넌스, 소울 게이즈, 어피니티 IV, 소울 시커 엑스퍼트\n하이퍼 스킬 : 소울 익절트, 슈퍼 노바, 파이널 컨트랙트\n5차 : 에너지 버스트, 스포트라이트, 마스코트 패밀리어, 트리니티 퓨전";
        break;
    case 39:
        rep = "아델\n\n0차 : 매직 서킷, 패이스\n1차 : 샤드, 볼트, 레비테이션, 루디먼트\n2차 : 에테르, 에테르 결정, 크리에이션, 임페일, 레조넌스, 원더\n3차 : 오더, 게더링, 테리토리, 노빌리티, 페더, 어센트, 톨러런스\n4차 : 하이 에테르, 디바이드, 블로섬, 그레이브, 다이크, 트레드, 퍼펙션, 데몰리션, 어테인\n하이퍼 스킬 : 마커, 스콜\n5차 : 루인, 인피니트, 리스토어, 스톰";
        break;
    case 40:
        rep = "일리움\n\n0차 : 매직 서킷\n1차 : 크래프트:자벨린, 크래프트:오브, 리요, 크리스탈 포탈, 블레스 마크\n2차 : 크리스탈 차지, 크리스탈 컨트롤, 리액션:디스트럭션, 리액션:도미네이션, 크리스탈 스킬:모탈스윙, 마키나, 디바인 실드, 커스 마크\n3차 : 크리스탈 차지 숙련, 리액션:디스트럭션 II, 리액션:도미네이션 II, 크리스탈 스킬:글로리 윙, 글로리 윙:자벨린, 크리스탈 스킬:하모니 링크, 크리스탈 포탈 부스트, 블레스 마크 숙련, 커스 마크 숙련, 운명 개척, 끊임없는 연구\n4차 : 크리스탈 차지 완성, 크래프트:자벨린 II, 크래프트:오브 II, 크래프트:롱기누스, 크리스탈 스킬:데우스, 글로리 윙:모탈 윙비트, 글로리 윙:하모니 윙비트, 패스트 차지, 블레스 마크 완성, 커스 마크 완성, 크리스탈의 비밀\n하이퍼 스킬 : 프라이멀 프로텍션, 롱기누스 존\n5차 : 크리스탈 이그니션, 리액션:스펙트럼, 그람홀더, 소울 오브 크리스탈, 크리스탈 게이트";
        break;
    case 41:
        rep = "아크\n\n0차 : 컨택트 카라반, 매직 서킷\n1차 : 스펙터 잠식, 정신력 고갈, 잊혀지지 않는 악몽 / 잊혀지지 않는 흉몽, 플레인 차지드라이브, 스펠 불릿, 미스틱 리프 / 인스팅트 리프, 미스틱 아츠 마스터리\n2차 : 잠식 제어, 스칼렛 차지드라이브 / 지워지지 않는 상처, 멈출 수 없는 충동 / 멈출 수 없는 본능, 다가오는 죽음, 융합 개시\n3차 : 되살아나는 악몽 / 되살아나는 흉몽, 거스트 차지드라이브 / 채워지지 않는 굶주림, 기어 다니는 공포, 돌아오는 증오, 미스틱 아츠 트레이닝, 인스팅트 아츠 트레이닝, 융합 진행\n4차 : 끝나지 않는 악몽 / 끝나지 않는 흉몽, 어비스 차지드라이브 / 걷잡을 수 없는 혼돈, 황홀한 구속, 어드밴스드 미스틱 아츠, 어드밴스드 인스팅트 아츠, 융합 완성, 전투 광란\n하이퍼 스킬 : 차지 스펠 앰플리피케이션, 끝없는 고통\n5차 : 근원의 기억, 인피니티 스펠, 새어나오는 악몽 / 새어나오는 흉몽, 영원히 굶주리는 짐승";
        break;
    case 42:
        rep = "라라\n\n0차 : 정령친화\n1차 : 정기 뿌리기, 폴짝, 위로 폴짝, 산 꼬마, 산 무등, 감응\n2차 : 용맥 읽기, 용맥 분출, 분출 : 너울이는 강, 분출 : 돌개바람, 분출 : 해돋이 우물, 산의 씨앗\n3차 : 발현 : 강줄기 흐르는 곳, 발현 : 바람 그네, 발현 : 햇살 가득 안은 터, 잠 깨우기, 용맥의 자취, 용맥의 메아리, 무구, 풍수지리\n4차 : 용맥 흡수, 흡수 : 강 웅덩이 물벼락, 흡수 : 소소리 바람, 흡수 : 햇빛 맹아리, 용맥 변환, 풍월주인, 지음, 산 에움, 풍수지리 심화, 혜안, 유유\n하이퍼 스킬 : 자유로운 용맥, 넝쿨 타래, 아름드리 나무\n5차 : 큰 기지개, 해 강 산 바람, 용솟음치는 정기, 산등성이 굽이굽이";
        break;
    case 43:
        rep = "호영\n\n0차 : 정령친화, 괴이봉인\n1차 : 부적 도력, 여의선 : 인, 초상비, 근두운, 경공\n2차 : 토파류 : 지, 토파류 : 허/실, 환영 분신부, 암행, 심안, 운신\n3차 : 두루마리 도력, 파초풍 : 천, 파초풍 : 허/실, 지진쇄 : 지, 지진쇄 : 허/실, 추적 귀화부, 권술 : 미생강변, 득의, 수라, 금강, 조식\n4차 : 멸화염 : 천, 멸화염 : 허/실, 금고봉 : 인, 둔갑 천근석, 왜곡 축지부, 권술 : 흡성와류, 권술 : 호접지몽, 득도, 점정\n하이퍼 스킬 : 선기 : 영약 태을선단, 선기 : 몽유도원, 선기 : 분신 둔갑 태을선인\n5차 : 선기 : 극대 분신난무, 권술 : 산령소환, 선기 : 강림 괴력난신, 선기 : 천지인 환영";
        break;
    case 44:
        rep = "제로\n\n공용: 듀얼 컴뱃, 디바인 포스, 디바인 스위프트, 륀느의 가호, 리졸브 타임, 륀느의 축복\n알파: 문 스트라이크, 피어스 쓰러스트, 쉐도우 스트라이크, 플래시 어썰터, (어드밴스드)스핀 커터, (어드밴스드)롤링 커브, (어드밴스드)롤링 어썰터, 윈드 커터, 윈드 스트라이크, (어드밴스드)스톰 브레이크,  컴뱃 리커버리, 리인포스 바디, 디바인 리어\n베타: 어퍼 슬래시, (어드밴스드)파워스텀프, 프론트 슬래시, (어드밴스드)스로잉 웨폰, 터닝 드라이브, (어드밴스드)휠 윈드, 기가 크래시, 점핑 크래시, (어드밴스드)어스 브레이크, 솔리드 바디, 아머 스플릿, 이뮨 배리어, 크리티컬 바인드\n초월자 스킬: 래피드 타임, 타임 디스토션, 타임 홀딩, 타임 리와인드, 쉐도우 레인\n5차: 리미트 브레이크, 조인트 어택, 쉐도우 플래시(알파/베타), 에고 웨폰(알파/베타), 초월자 륀느의 기원";
        break;
    case 45:
        rep = "키네시스\n\n0차 : 초감각\n1차 : 싸이킥 포스, 싸이킥 인스팅트, 싸이킥 워크, 내재1\n2차 : 매드 크래시, 싸이킥 포스2, 싸이킥 드레인, 얼티메이트-딥 임팩트, 싸이킥 실드, 순수한 힘, 내재2\n3차 : 싸이킥 그랩, 싸이킥 포스3, 싸이킥 그라운드, 얼티메이트-트레인, 텔레키네시스, 싸이킥 실드2(왜곡), 싸이킥 무브, 정신강화, 정교, 초월, 완화\n4차 : 싸이킥 그랩2, 얼티메이트-싸이킥 샷, 얼티메이트-B.P.M, 싸이킥 그라운드2, 싸이코 브레이크, 싸이킥 차징, ESP 배틀 오더, 각성, 정신집중-유지, 임계, 전달, 숙달\n하이퍼 스킬 : 에버싸이킥, 싸이코 메트리, 싸이킥 오버\n5차 : 싸이킥 토네이도, 얼티메이트-무빙 매터, 얼티메이트-싸이킥 불릿, 로 오브 그라비티";
        break;
    case 46:
        rep = "모험가 전사\n\n0차 : 인빈서블 빌리프\n1차 : 아이언 바디, 워리어 마스터리\n2차 : 피지컬 트레이닝\n3차 : 돌진, 어퍼 차지\n4차 : 매직 크래쉬, 스탠스\n하이퍼 스킬 : 에픽 어드벤쳐\n5차 : 블리츠 실드";
        break;
    case 47:
        rep = "모험가 마법사\n\n0차 : 임피리컬 널리지\n1차 : 매직 가드, 텔레포트, 매직 아머, MP 증가\n2차 : 매직 부스터, 스펠 마스터리, 하이 위즈덤, MP 이터\n3차 : 텔레포트 마스터리, 매직 크리티컬\n4차 : 아케인 에임, 마스터 매직, 인피니티\n하이퍼 스킬 : 에픽 어드벤쳐\n5차 : 언스태이블 메모라이즈";
        break;
    case 48:
        rep = "모험가 궁수\n\n0차 : 어드벤쳐러 큐리어스\n1차 : 크리티컬 샷\n2차 : 피지컬 트레이닝\n3차 : 닷지\n4차 : 일루전 스탭\n하이퍼 스킬 : 에픽 어드벤쳐\n5차 : 이볼브";
        break;
    case 49:
        rep = "모험가 도적\n\n0차 : 시프 커닝\n1차 : 플래시 점프, 다크 사이트, 헤이스트(셀프 헤이스트)\n2차 : 피지컬 트레이닝\n3차 : 베놈, 래디컬 다크니스, 쉐도우 파트너(미러 이미징)\n4차 : 써든 레이드, 페이탈 베놈\n하이퍼 스킬 : 에픽 어드벤쳐\n5차 : 얼티밋 다크 사이트";
        break;
    case 50:
        rep = "모험가 해적\n\n0차 : 수영의 달인, 수납의 달인, 파이렛 블레스\n1차 : 옥토 푸시(몽키 푸시)\n2차 : 피지컬 트레이닝(파이렛 트레이닝)\n3차 : 럭키 다이스\n4차 : 더블 럭키 다이스\n하이퍼 스킬 : 에픽 어드벤쳐\n5차 : 파이렛 플래그";
        break;
    case 51:
        rep = "시그너스 기사단\n\n하이퍼 스킬 : 글로리 오브 가디언즈\n5차 : 시그너스 팔랑크스, 여제 시그너스의 축복, 초월자 시그너스의 축복";
        break;
    case 52:
        rep = "레지스탕스\n\n하이퍼 스킬 : 윌 오브 리버티\n5차 : 레지스탕스 라인 인팬트리, 메이플월드 여신의 축복";
        break;
    case 53:
        rep = "데몬\n\n하이퍼 스킬 : 데모닉 포티튜드\n5차 : 콜 마스테마, 이계 여신의 축복";
        break;
    case 54:
        rep = "영웅\n\n하이퍼 스킬 : 히어로즈 오쓰\n5차 : 프리드의 가호, 메이플월드 여신의 축복";
        break;
    case 55:
        rep = "노바\n\n5차 : 판테온, 그란디스 여신의 축복(노바)";
        break;
    case 56:
        rep = "레프\n\n하이퍼 스킬 : 레이스 오브 갓\n5차 : 매직 서킷 풀드라이브, 그란디스 여신의 축복(레프)";
        break;
    case 57:
        rep = "아니마\n\n5차 : 화중군자, 그란디스 여신의 축복(아니마)";
        break;
    case 58:
        rep = "전사\n\n5차 : 오라 웨폰, 바디 오브 스틸";
        break;
    case 59:
        rep = "마법사\n\n5차 : 오버로드 마나, 에테리얼 폼";
        break;
    case 60:
        rep = "궁수\n\n4차 : 샤프 아이즈(메르세데스, 카인 제외)\n5차 : 가이디드 애로우, 크리티컬 리인포스";
        break;
    case 61:
        rep = "도적\n\n5차 : 베놈 버스트, 레디 투 다이";
        break;
    case 62:
        rep = "해적\n\n5차 : 로디드 다이스, 오버 드라이브";
        break;
    case 63:
        rep = "모험가\n\n5차 : 메이플월드 여신의 축복";
        break;
    case 64:
        rep = "공용 (이름은 모험가 기준으로 작성되었습니다.)\n\n4차 : 메이플 용사, 용사의 의지, 영웅의 메아리\n5차 : 로프 커넥트, 블링크, 에르다 노바, 에르다의 의지, 에르다 샤워, 쓸만한 미스틱 도어, 쓸만한 샤프 아이즈, 쓸만한 하이퍼 바디, 쓸만한 컴뱃 오더스, 쓸만한 어드밴스드 블레스, 쓸만한 윈드 부스터, 쓸만한 홀리 심볼, 스파이더 인 미러, 크레스트 오브 더 솔라";
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
            jobM = require('skillBeginner');
            ret = jobM.getskillBeginner(skillname);
            break;
        case 1:
            jobM = require('skillHero');
            ret = jobM.getskillHero(skillname);
            break;
        case 2:
            jobM = require('skillPaladin');
            ret = jobM.getskillPaladin(skillname);
            break;
        case 3:
            jobM = require('skillDarkknight');
            ret = jobM.getskillDarkknight(skillname);
            break;
        case 4:
            jobM = require('skillArchmagefirepoison');
            ret = jobM.getskillArchmagefirepoison(skillname);
            break;
        case 5:
            jobM = require('skillArchmagethundercold');
            ret = jobM.getskillArchmagethundercold(skillname);
            break;
        case 6:
            jobM = require('skillBishop');
            ret = jobM.getskillBishop(skillname);
            break;
        case 7:
            jobM = require('skillBowmaster');
            ret = jobM.getskillBowmaster(skillname);
            break;
        case 8:
            jobM = require('skillCrossbow');
            ret = jobM.getskillCrossbow(skillname);
            break;
        case 9:
            jobM = require('skillPathfinder');
            ret = jobM.getskillPathfinder(skillname);
            break;
        case 10:
            jobM = require('skillNightlord');
            ret = jobM.getskillNightlord(skillname);
            break;
        case 11:
            jobM = require('skillShadower');
            ret = jobM.getskillShadower(skillname);
            break;
        case 12:
            jobM = require('skillDualblades');
            ret = jobM.getskillDualblades(skillname);
            break;
        case 13:
            jobM = require('skillViper');
            ret = jobM.getskillViper(skillname);
            break;
        case 14:
            jobM = require('skillCaptain');
            ret = jobM.getskillCaptain(skillname);
            break;
        case 15:
            jobM = require('skillCannonshooter');
            ret = jobM.getskillCannonshooter(skillname);
            break;
        case 16:
            jobM = require('skillSoulmaster');
            ret = jobM.getskillSoulmaster(skillname);
            break;
        case 17:
            jobM = require('skillFlame');
            ret = jobM.getskillFlame(skillname);
            break;
        case 18:
            jobM = require('skillWind');
            ret = jobM.getskillWind(skillname);
            break;
        case 19:
            jobM = require('skillNightwalker');
            ret = jobM.getskillNightwalker(skillname);
            break;
        case 20:
            jobM = require('skillStriker');
            ret = jobM.getskillStriker(skillname);
            break;
        case 21:
            jobM = require('skillMihile');
            ret = jobM.getskillMihile(skillname);
            break;
        case 22:
            jobM = require('skillBlaster');
            ret = jobM.getskillBlaster(skillname);
            break;
        case 23:
            jobM = require('skillBattlemage');
            ret = jobM.getskillBattlemage(skillname);
            break;
        case 24:
            jobM = require('skillWild');
            ret = jobM.getskillWild(skillname);
            break;
        case 25:
            jobM = require('skillMechanic');
            ret = jobM.getskillMechanic(skillname);
            break;
        case 26:
            jobM = require('skillXenon');
            ret = jobM.getskillXenon(skillname);
            break;
        case 27:
            jobM = require('skillDemonslayer');
            ret = jobM.getskillDemonslayer(skillname);
            break;
        case 28:
            jobM = require('skillDemonavenger');
            ret = jobM.getskillDemonavenger(skillname);
            break;
        case 29:
            jobM = require('skillAran');
            ret = jobM.getskillAran(skillname);
            break;
        case 30:
            jobM = require('skillEvan');
            ret = jobM.getskillEvan(skillname);
            break;
        case 31:
            jobM = require('skillLumi');
            ret = jobM.getskillLumi(skillname);
            break;
        case 32:
            jobM = require('skillMercedes');
            ret = jobM.getskillMercedes(skillname);
            break;
        case 33:
            jobM = require('skillPhantom');
            ret = jobM.getskillPhantom(skillname);
            break;
        case 34:
            jobM = require('skillEunwol');
            ret = jobM.getskillEunwol(skillname);
            break;
        case 35:
            jobM = require('skillKaiser');
            ret = jobM.getskillKaiser(skillname);
            break;
        case 36:
            jobM = require('skillKain');
            ret = jobM.getskillKain(skillname);
            break;
        case 37:
            jobM = require('skillCadena');
            ret = jobM.getskillCadena(skillname);
            break;
        case 38:
            jobM = require('skillAngelicbuster');
            ret = jobM.getskillAngelicbuster(skillname);
            break;
        case 39:
            jobM = require('skillAdele');
            ret = jobM.getskillAdele(skillname);
            break;
        case 40:
            jobM = require('skillIllium');
            ret = jobM.getskillIllium(skillname);
            break;
        case 41:
            jobM = require('skillArk');
            ret = jobM.getskillArk(skillname);
            break;
        case 42:
            jobM = require('skillRara');
            ret = jobM.getskillRara(skillname);
            break;
        case 43:
            jobM = require('skillHoyoung');
            ret = jobM.getskillHoyoung(skillname);
            break;
        case 44:
            jobM = require('skillZero');
            ret = jobM.getskillZero(skillname);
            break;
        case 45:
            jobM = require('skillKinesis');
            ret = jobM.getskillKinesis(skillname);
            break;
        case 46:
            jobM = require('skillAdvWarrior');
            ret = jobM.getskillAdvWarrior(skillname);
            break;
        case 47:
            jobM = require('skillAdvMagician');
            ret = jobM.getskillAdvMagician(skillname);
            break;
        case 48:
            jobM = require('skillAdvArcher');
            ret = jobM.getskillAdvArcher(skillname);
            break;
        case 49:
            jobM = require('skillAdvThief');
            ret = jobM.getskillAdvThief(skillname);
            break;
        case 50:
            jobM = require('skillAdvPirate');
            ret = jobM.getskillAdvPirate(skillname);
            break;
        case 51:
            jobM = require('skillAll');
            ret = jobM.getskillAll(jobcode, skillname);
            break;
        case 52:
            jobM = require('skillAll');
            ret = jobM.getskillAll(jobcode, skillname);
            break;
        case 53:
            jobM = require('skillAll');
            ret = jobM.getskillAll(jobcode, skillname);
            break;
        case 54:
            jobM = require('skillAll');
            ret = jobM.getskillAll(jobcode, skillname);
            break;
        case 55:
            jobM = require('skillAll');
            ret = jobM.getskillAll(jobcode, skillname);
            break;
        case 56:
            jobM = require('skillAll');
            ret = jobM.getskillAll(jobcode, skillname);
            break;
        case 57:
            jobM = require('skillAll');
            ret = jobM.getskillAll(jobcode, skillname);
            break;
        case 58:
            jobM = require('skillAll');
            ret = jobM.getskillAll(jobcode, skillname);
            break;
        case 59:
            jobM = require('skillAll');
            ret = jobM.getskillAll(jobcode, skillname);
            break;
        case 60:
            jobM = require('skillAll');
            ret = jobM.getskillAll(jobcode, skillname);
            break;
        case 61:
            jobM = require('skillAll');
            ret = jobM.getskillAll(jobcode, skillname);
            break;
        case 62:
            jobM = require('skillAll');
            ret = jobM.getskillAll(jobcode, skillname);
            break;
        case 63:
            jobM = require('skillAdventurer');
            ret = jobM.getskillAdventurer(skillname);
            break;        
        case 64:
            jobM = require('skillPublic');
            ret = jobM.getskillPublic(skillname);
            break;
    }
    return ret;
}
sk.getJobskillname = function(jobcode, skillcode){    
    rep = "";
    var jobM;
    switch (jobcode) {
        case 0:
            jobM = require('skillBeginner');
            rep = jobM.getskillnameBeginner(skillcode);
            break;
        case 1:
            jobM = require('skillHero');
            rep = jobM.getskillnameHero(skillcode);
            break;
        case 2:
            jobM = require('skillPaladin');
            rep = jobM.getskillnamePaladin(skillcode);
            break;
        case 3:
            jobM = require('skillDarkknight');
            rep = jobM.getskillnameDarkknight(skillcode);
            break;
        case 4:
            jobM = require('skillArchmagefirepoison');
            rep = jobM.getskillnameArchmagefirepoison(skillcode);
            break;
        case 5:
            jobM = require('skillArchmagethundercold');
            rep = jobM.getskillnameArchmagethundercold(skillcode);
            break;
        case 6:
            jobM = require('skillBishop');
            rep = jobM.getskillnameBishop(skillcode);
            break;
        case 7:
            jobM = require('skillBowmaster');
            rep = jobM.getskillnameBowmaster(skillcode);
            break;
        case 8:            
            jobM = require('skillCrossbow');
            rep = jobM.getskillnameCrossbow(skillcode);
            break;
        case 9:
            jobM = require('skillPathfinder');
            rep = jobM.getskillnamePathfinder(skillcode);
            break;
        case 10:
            jobM = require('skillNightlord');
            rep = jobM.getskillnameNightlord(skillcode);
            break;
        case 11:
            jobM = require('skillShadower');
            rep = jobM.getskillnameShadower(skillcode);
            break;
        case 12:
            jobM = require('skillDualblades');
            rep = jobM.getskillnameDualblades(skillcode);
            break;
        case 13:
            jobM = require('skillViper');
            rep = jobM.getskillnameViper(skillcode);
            break;
        case 14:
            jobM = require('skillCaptain');
            rep = jobM.getskillnameCaptain(skillcode);
            break;
        case 15:
            jobM = require('skillCannonshooter');
            rep = jobM.getskillnameCannonshooter(skillcode);
            break;
        case 16:
            jobM = require('skillSoulmaster');
            rep = jobM.getskillnameSoulmaster(skillcode);
            break;
        case 17:
            jobM = require('skillFlame');
            rep = jobM.getskillnameFlame(skillcode);
            break;
        case 18:
            jobM = require('skillWind');
            rep = jobM.getskillnameWind(skillcode);
            break;
        case 19:
            jobM = require('skillNightwalker');
            rep = jobM.getskillnameNightwalker(skillcode);
            break;
        case 20:
            jobM = require('skillStriker');
            rep = jobM.getskillnameStriker(skillcode);
            break;
        case 21:
            jobM = require('skillMihile');
            rep = jobM.getskillnameMihile(skillcode);
            break;
        case 22:
            jobM = require('skillBlaster');
            rep = jobM.getskillnameBlaster(skillcode);
            break;
        case 23:
            jobM = require('skillBattlemage');
            rep = jobM.getskillnameBattlemage(skillcode);
            break;
        case 24:
            jobM = require('skillWild');
            rep = jobM.getskillnameWild(skillcode);
            break;
        case 25:
            jobM = require('skillMechanic');
            rep = jobM.getskillnameMechanic(skillcode);
            break;
        case 26:
            jobM = require('skillXenon');
            rep = jobM.getskillnameXenon(skillcode);
            break;
        case 27:
            jobM = require('skillDemonslayer');
            rep = jobM.getskillnameDemonslayer(skillcode);
            break;
        case 28:
            jobM = require('skillDemonavenger');
            rep = jobM.getskillnameDemonavenger(skillcode);
            break;
        case 29:
            jobM = require('skillAran');
            rep = jobM.getskillnameAran(skillcode);
            break;
        case 30:
            jobM = require('skillEvan');
            rep = jobM.getskillnameEvan(skillcode);
            break;
        case 31:
            jobM = require('skillLumi');
            rep = jobM.getskillnameLumi(skillcode);
            break;
        case 32:
            jobM = require('skillMercedes');
            rep = jobM.getskillnameMercedes(skillcode);
            break;
        case 33:
            jobM = require('skillPhantom');
            rep = jobM.getskillnamePhantom(skillcode);
            break;
        case 34:
            jobM = require('skillEunwol');
            rep = jobM.getskillnameEunwol(skillcode);
            break;
        case 35:
            jobM = require('skillKaiser');
            rep = jobM.getskillnameKaiser(skillcode);
            break;
        case 36:
            jobM = require('skillKain');
            rep = jobM.getskillnameKain(skillcode);
            break;
        case 37:
            jobM = require('skillCadena');
            rep = jobM.getskillnameCadena(skillcode);
            break;
        case 38:
            jobM = require('skillAngelicbuster');
            rep = jobM.getskillnameAngelicbuster(skillcode);
            break;
        case 39:
            jobM = require('skillAdele');
            rep = jobM.getskillnameAdele(skillcode);
            break;
        case 40:
            jobM = require('skillIllium');
            rep = jobM.getskillnameIllium(skillcode);
            break;
        case 41:
            jobM = require('skillArk');
            rep = jobM.getskillnameArk(skillcode);
            break;
        case 42:
            jobM = require('skillRara');
            rep = jobM.getskillnameRara(skillcode);
            break;
        case 43:
            jobM = require('skillHoyoung');
            rep = jobM.getskillnameHoyoung(skillcode);
            break;
        case 44:
            jobM = require('skillZero');
            rep = jobM.getskillnameZero(skillcode);
            break;
        case 45:
            jobM = require('skillKinesis');
            rep = jobM.getskillnameKinesis(skillcode);
            break;
        case 46:
            jobM = require('skillAdvWarrior');
            rep = jobM.getskillnameAdvWarrior(skillcode);
            break;
        case 47:
            jobM = require('skillAdvMagician');
            rep = jobM.getskillnameAdvMagician(skillcode);
            break;
        case 48:
            jobM = require('skillAdvArcher');
            rep = jobM.getskillnameAdvArcher(skillcode);
            break;
        case 49:
            jobM = require('skillAdvThief');
            rep = jobM.getskillnameAdvThief(skillcode);
            break;
        case 50:
            jobM = require('skillAdvPirate');
            rep = jobM.getskillnameAdvPirate(skillcode);
            break;
        case 51:
            jobM = require('skillAll');
            rep = jobM.getskillnameAll(skillcode);
            break;
        case 52:
            jobM = require('skillAll');
            rep = jobM.getskillnameAll(skillcode);
            break;
        case 53:
            jobM = require('skillAll');
            rep = jobM.getskillnameAll(skillcode);
            break;
        case 54:
            jobM = require('skillAll');
            rep = jobM.getskillnameAll(skillcode);
            break;
        case 55:
            jobM = require('skillAll');
            rep = jobM.getskillnameAll(skillcode);
            break;
        case 56:
            jobM = require('skillAll');
            rep = jobM.getskillnameAll(skillcode);
            break;
        case 57:
            jobM = require('skillAll');
            rep = jobM.getskillnameAll(skillcode);
            break;
        case 58:
            jobM = require('skillAll');
            rep = jobM.getskillnameAll(skillcode);
            break;
        case 59:
            jobM = require('skillAll');
            rep = jobM.getskillnameAll(skillcode);
            break;
        case 60:
            jobM = require('skillAll');
            rep = jobM.getskillnameAll(skillcode);
            break;
        case 61:
            jobM = require('skillAll');
            rep = jobM.getskillnameAll(skillcode);
            break;
        case 62:
            jobM = require('skillAll');
            rep = jobM.getskillnameAll(skillcode);
            break;
        case 63:
            jobM = require('skillAdventurer');
            rep = jobM.getskillnameAdventurer(skillcode);
            break;        
        case 64:
            jobM = require('skillPublic');
            rep = jobM.getskillnamePublic(skillcode);
            break;
    }
    return rep;
};
sk.getJobskilldesc1 = function(jobcode, skillcode){    
    rep = "";
    var jobM;
    switch (jobcode) {
        case 0:
            jobM = require('skillBeginner');
            rep = jobM.getskilldesc1Beginner(skillcode);
            break;
        case 1:
            jobM = require('skillHero');
            rep = jobM.getskilldesc1Hero(skillcode);
            break;
        case 2:
            jobM = require('skillPaladin');
            rep = jobM.getskilldesc1Paladin(skillcode);
            break;
        case 3:
            jobM = require('skillDarkknight');
            rep = jobM.getskilldesc1Darkknight(skillcode);
            break;
        case 4:
            jobM = require('skillArchmagefirepoison');
            rep = jobM.getskilldesc1Archmagefirepoison(skillcode);
            break;
        case 5:
            jobM = require('skillArchmagethundercold');
            rep = jobM.getskilldesc1Archmagethundercold(skillcode);
            break;
        case 6:
            jobM = require('skillBishop');
            rep = jobM.getskilldesc1Bishop(skillcode);
            break;
        case 7:
            jobM = require('skillBowmaster');
            rep = jobM.getskilldesc1Bowmaster(skillcode);
            break;
        case 8: 
            jobM = require('skillCrossbow');
            rep = jobM.getskilldesc1Crossbow(skillcode);
            break;
        case 9:
            jobM = require('skillPathfinder');
            rep = jobM.getskilldesc1Pathfinder(skillcode);
            break;
        case 10:
            jobM = require('skillNightlord');
            rep = jobM.getskilldesc1Nightlord(skillcode);
            break;
        case 11:
            jobM = require('skillShadower');
            rep = jobM.getskilldesc1Shadower(skillcode);
            break;
        case 12:
            jobM = require('skillDualblades');
            rep = jobM.getskilldesc1Dualblades(skillcode);
            break;
        case 13:
            jobM = require('skillViper');
            rep = jobM.getskilldesc1Viper(skillcode);
            break;
        case 14:
            jobM = require('skillCaptain');
            rep = jobM.getskilldesc1Captain(skillcode);
            break;
        case 15:
            jobM = require('skillCannonshooter');
            rep = jobM.getskilldesc1Cannonshooter(skillcode);
            break;
        case 16:
            jobM = require('skillSoulmaster');
            rep = jobM.getskilldesc1Soulmaster(skillcode);
            break;
        case 17:
            jobM = require('skillFlame');
            rep = jobM.getskilldesc1Flame(skillcode);
            break;
        case 18:
            jobM = require('skillWind');
            rep = jobM.getskilldesc1Wind(skillcode);
            break;
        case 19:
            jobM = require('skillNightwalker');
            rep = jobM.getskilldesc1Nightwalker(skillcode);
            break;
        case 20:
            jobM = require('skillStriker');
            rep = jobM.getskilldesc1Striker(skillcode);
            break;
        case 21:
            jobM = require('skillMihile');
            rep = jobM.getskilldesc1Mihile(skillcode);
            break;
        case 22:
            jobM = require('skillBlaster');
            rep = jobM.getskilldesc1Blaster(skillcode);
            break;
        case 23:
            jobM = require('skillBattlemage');
            rep = jobM.getskilldesc1Battlemage(skillcode);
            break;
        case 24:
            jobM = require('skillWild');
            rep = jobM.getskilldesc1Wild(skillcode);
            break;
        case 25:
            jobM = require('skillMechanic');
            rep = jobM.getskilldesc1Mechanic(skillcode);
            break;
        case 26:
            jobM = require('skillXenon');
            rep = jobM.getskilldesc1Xenon(skillcode);
            break;
        case 27:
            jobM = require('skillDemonslayer');
            rep = jobM.getskilldesc1Demonslayer(skillcode);
            break;
        case 28:
            jobM = require('skillDemonavenger');
            rep = jobM.getskilldesc1Demonavenger(skillcode);
            break;
        case 29:
            jobM = require('skillAran');
            rep = jobM.getskilldesc1Aran(skillcode);
            break;
        case 30:
            jobM = require('skillEvan');
            rep = jobM.getskilldesc1Evan(skillcode);
            break;
        case 31:
            jobM = require('skillLumi');
            rep = jobM.getskilldesc1Lumi(skillcode);
            break;
        case 32:
            jobM = require('skillMercedes');
            rep = jobM.getskilldesc1Mercedes(skillcode);
            break;
        case 33:
            jobM = require('skillPhantom');
            rep = jobM.getskilldesc1Phantom(skillcode);
            break;
        case 34:
            jobM = require('skillEunwol');
            rep = jobM.getskilldesc1Eunwol(skillcode);
            break;
        case 35:
            jobM = require('skillKaiser');
            rep = jobM.getskilldesc1Kaiser(skillcode);
            break;
        case 36:
            jobM = require('skillKain');
            rep = jobM.getskilldesc1Kain(skillcode);
            break;
        case 37:
            jobM = require('skillCadena');
            rep = jobM.getskilldesc1Cadena(skillcode);
            break;
        case 38:
            jobM = require('skillAngelicbuster');
            rep = jobM.getskilldesc1Angelicbuster(skillcode);
            break;
        case 39:
            jobM = require('skillAdele');
            rep = jobM.getskilldesc1Adele(skillcode);
            break;
        case 40:
            jobM = require('skillIllium');
            rep = jobM.getskilldesc1Illium(skillcode);
            break;
        case 41:
            jobM = require('skillArk');
            rep = jobM.getskilldesc1Ark(skillcode);
            break;
        case 42:
            jobM = require('skillRara');
            rep = jobM.getskilldesc1Rara(skillcode);
            break;
        case 43:
            jobM = require('skillHoyoung');
            rep = jobM.getskilldesc1Hoyoung(skillcode);
            break;
        case 44:
            jobM = require('skillZero');
            rep = jobM.getskilldesc1Zero(skillcode);
            break;
        case 45:
            jobM = require('skillKinesis');
            rep = jobM.getskilldesc1Kinesis(skillcode);
            break;
        case 46:
            jobM = require('skillAdvWarrior');
            rep = jobM.getskilldesc1AdvWarrior(skillcode);
            break;
        case 47:
            jobM = require('skillAdvMagician');
            rep = jobM.getskilldesc1AdvMagician(skillcode);
            break;
        case 48:
            jobM = require('skillAdvArcher');
            rep = jobM.getskilldesc1AdvArcher(skillcode);
            break;
        case 49:
            jobM = require('skillAdvThief');
            rep = jobM.getskilldesc1AdvThief(skillcode);
            break;
        case 50:
            jobM = require('skillAdvPirate');
            rep = jobM.getskilldesc1AdvPirate(skillcode);
            break;
        case 51:
            jobM = require('skillAll');
            rep = jobM.getskilldesc1All(skillcode);
            break;
        case 52:
            jobM = require('skillAll');
            rep = jobM.getskilldesc1All(skillcode);
            break;
        case 53:
            jobM = require('skillAll');
            rep = jobM.getskilldesc1All(skillcode);
            break;
        case 54:
            jobM = require('skillAll');
            rep = jobM.getskilldesc1All(skillcode);
            break;
        case 55:
            jobM = require('skillAll');
            rep = jobM.getskilldesc1All(skillcode);
            break;
        case 56:
            jobM = require('skillAll');
            rep = jobM.getskilldesc1All(skillcode);
            break;
        case 57:
            jobM = require('skillAll');
            rep = jobM.getskilldesc1All(skillcode);
            break;
        case 58:
            jobM = require('skillAll');
            rep = jobM.getskilldesc1All(skillcode);
            break;
        case 59:
            jobM = require('skillAll');
            rep = jobM.getskilldesc1All(skillcode);
            break;
        case 60:
            jobM = require('skillAll');
            rep = jobM.getskilldesc1All(skillcode);
            break;
        case 61:
            jobM = require('skillAll');
            rep = jobM.getskilldesc1All(skillcode);
            break;
        case 62:
            jobM = require('skillAll');
            rep = jobM.getskilldesc1All(skillcode);
            break;
        case 63:
            jobM = require('skillAdventurer');
            rep = jobM.getskilldesc1Adventurer(skillcode);
            break;        
        case 64:          
            jobM = require('skillPublic');
            rep = jobM.getskilldesc1Public(skillcode);
            break;
    }
    return rep;
};
sk.getJobskilldesc2 = function(jobcode, skillcode){    
    rep = "";
    var jobM;
    switch (jobcode) {
        case 0:
            jobM = require('skillBeginner');
            rep = jobM.getskilldesc2Beginner(skillcode);
            break;
        case 1:
            jobM = require('skillHero');
            rep = jobM.getskilldesc2Hero(skillcode);
            break;
        case 2:
            jobM = require('skillPaladin');
            rep = jobM.getskilldesc2Paladin(skillcode);
            break;
        case 3:
            jobM = require('skillDarkknight');
            rep = jobM.getskilldesc2Darkknight(skillcode);
            break;
        case 4:
            jobM = require('skillArchmagefirepoison');
            rep = jobM.getskilldesc2Archmagefirepoison(skillcode);
            break;
        case 5:
            jobM = require('skillArchmagethundercold');
            rep = jobM.getskilldesc2Archmagethundercold(skillcode);
            break;
        case 6:
            jobM = require('skillBishop');
            rep = jobM.getskilldesc2Bishop(skillcode);
            break;
        case 7:
            jobM = require('skillBowmaster');
            rep = jobM.getskilldesc2Bowmaster(skillcode);
            break;
        case 8:
            jobM = require('skillCrossbow');
            rep = jobM.getskilldesc2Crossbow(skillcode);
            break;
        case 9:
            jobM = require('skillPathfinder');
            rep = jobM.getskilldesc2Pathfinder(skillcode);
            break;
        case 10:
            jobM = require('skillNightlord');
            rep = jobM.getskilldesc2Nightlord(skillcode);
            break;
        case 11:
            jobM = require('skillShadower');
            rep = jobM.getskilldesc2Shadower(skillcode);
            break;
        case 12:
            jobM = require('skillDualblades');
            rep = jobM.getskilldesc2Dualblades(skillcode);
            break;
        case 13:
            jobM = require('skillViper');
            rep = jobM.getskilldesc2Viper(skillcode);
            break;
        case 14:
            jobM = require('skillCaptain');
            rep = jobM.getskilldesc2Captain(skillcode);
            break;
        case 15:
            jobM = require('skillCannonshooter');
            rep = jobM.getskilldesc2Cannonshooter(skillcode);
            break;
        case 16:
            jobM = require('skillSoulmaster');
            rep = jobM.getskilldesc2Soulmaster(skillcode);
            break;
        case 17:
            jobM = require('skillFlame');
            rep = jobM.getskilldesc2Flame(skillcode);
            break;
        case 18:
            jobM = require('skillWind');
            rep = jobM.getskilldesc2Wind(skillcode);
            break;
        case 19:
            jobM = require('skillNightwalker');
            rep = jobM.getskilldesc2Nightwalker(skillcode);
            break;
        case 20:            
            jobM = require('skillStriker');
            rep = jobM.getskilldesc2Striker(skillcode);
            break;
        case 21:
            jobM = require('skillMihile');
            rep = jobM.getskilldesc2Mihile(skillcode);
            break;
        case 22:
            jobM = require('skillBlaster');
            rep = jobM.getskilldesc2Blaster(skillcode);
            break;
        case 23:
            jobM = require('skillBattlemage');
            rep = jobM.getskilldesc2Battlemage(skillcode);
            break;
        case 24:
            jobM = require('skillWild');
            rep = jobM.getskilldesc2Wild(skillcode);
            break;
        case 25:
            jobM = require('skillMechanic');
            rep = jobM.getskilldesc2Mechanic(skillcode);
            break;
        case 26:
            jobM = require('skillXenon');
            rep = jobM.getskilldesc2Xenon(skillcode);
            break;
        case 27:
            jobM = require('skillDemonslayer');
            rep = jobM.getskilldesc2Demonslayer(skillcode);
            break;
        case 28:
            jobM = require('skillDemonavenger');
            rep = jobM.getskilldesc2Demonavenger(skillcode);
            break;
        case 29:
            jobM = require('skillAran');
            rep = jobM.getskilldesc2Aran(skillcode);
            break;
        case 30:
            jobM = require('skillEvan');
            rep = jobM.getskilldesc2Evan(skillcode);
            break;
        case 31:
            jobM = require('skillLumi');
            rep = jobM.getskilldesc2Lumi(skillcode);
            break;
        case 32:
            jobM = require('skillMercedes');
            rep = jobM.getskilldesc2Mercedes(skillcode);
            break;
        case 33:
            jobM = require('skillPhantom');
            rep = jobM.getskilldesc2Phantom(skillcode);
            break;
        case 34:
            jobM = require('skillEunwol');
            rep = jobM.getskilldesc2Eunwol(skillcode);
            break;
        case 35:
            jobM = require('skillKaiser');
            rep = jobM.getskilldesc2Kaiser(skillcode);
            break;
        case 36:
            jobM = require('skillKain');
            rep = jobM.getskilldesc2Kain(skillcode);
            break;
        case 37:
            jobM = require('skillCadena');
            rep = jobM.getskilldesc2Cadena(skillcode);
            break;
        case 38:
            jobM = require('skillAngelicbuster');
            rep = jobM.getskilldesc2Angelicbuster(skillcode);
            break;
        case 39:
            jobM = require('skillAdele');
            rep = jobM.getskilldesc2Adele(skillcode);
            break;
        case 40:
            jobM = require('skillIllium');
            rep = jobM.getskilldesc2Illium(skillcode);
            break;
        case 41:
            jobM = require('skillArk');
            rep = jobM.getskilldesc2Ark(skillcode);
            break;
        case 42:
            jobM = require('skillRara');
            rep = jobM.getskilldesc2Rara(skillcode);
            break;
        case 43:
            jobM = require('skillHoyoung');
            rep = jobM.getskilldesc2Hoyoung(skillcode);
            break;
        case 44:
            jobM = require('skillZero');
            rep = jobM.getskilldesc2Zero(skillcode);
            break;
        case 45:
            jobM = require('skillKinesis');
            rep = jobM.getskilldesc2Kinesis(skillcode);
            break;
        case 46:
            jobM = require('skillAdvWarrior');
            rep = jobM.getskilldesc2AdvWarrior(skillcode);
            break;
        case 47:
            jobM = require('skillAdvMagician');
            rep = jobM.getskilldesc2AdvMagician(skillcode);
            break;
        case 48:
            jobM = require('skillAdvArcher');
            rep = jobM.getskilldesc2AdvArcher(skillcode);
            break;
        case 49:
            jobM = require('skillAdvThief');
            rep = jobM.getskilldesc2AdvThief(skillcode);
            break;
        case 50:
            jobM = require('skillAdvPirate');
            rep = jobM.getskilldesc2AdvPirate(skillcode);
            break;
        case 51:
            jobM = require('skillAll');
            rep = jobM.getskilldesc2All(skillcode);
            break;
        case 52:
            jobM = require('skillAll');
            rep = jobM.getskilldesc2All(skillcode);
            break;
        case 53:
            jobM = require('skillAll');
            rep = jobM.getskilldesc2All(skillcode);
            break;
        case 54:
            jobM = require('skillAll');
            rep = jobM.getskilldesc2All(skillcode);
            break;
        case 55:
            jobM = require('skillAll');
            rep = jobM.getskilldesc2All(skillcode);
            break;
        case 56:
            jobM = require('skillAll');
            rep = jobM.getskilldesc2All(skillcode);
            break;
        case 57:
            jobM = require('skillAll');
            rep = jobM.getskilldesc2All(skillcode);
            break;
        case 58:
            jobM = require('skillAll');
            rep = jobM.getskilldesc2All(skillcode);
            break;
        case 59:
            jobM = require('skillAll');
            rep = jobM.getskilldesc2All(skillcode);
            break;
        case 60:
            jobM = require('skillAll');
            rep = jobM.getskilldesc2All(skillcode);
            break;
        case 61:
            jobM = require('skillAll');
            rep = jobM.getskilldesc2All(skillcode);
            break;
        case 62:
            jobM = require('skillAll');
            rep = jobM.getskilldesc2All(skillcode);
            break;
        case 63:
            jobM = require('skillAdventurer');
            rep = jobM.getskilldesc2Adventurer(skillcode);
            break;        
        case 64:        
            jobM = require('skillPublic');
            rep = jobM.getskilldesc2Public(skillcode);
            break;
    }
    return rep;
};
sk.getJobskilldesc3 = function(jobcode, skillcode){
    rep = "";
    var jobM;
    switch(jobcode){
        case 1:
            jobM = require('skillHero');
            rep = jobM.getskilldesc3Hero(skillcode);
            break;
        case 2:            
            jobM = require('skillPaladin');
            rep = jobM.getskilldesc3Paladin(skillcode);
            break;
        case 3:            
            jobM = require('skillDarkknight');
            rep = jobM.getskilldesc3Darkknight(skillcode);
            break;
        case 4:
            jobM = require('skillArchmagefirepoison');
            rep = jobM.getskilldesc3Archmagefirepoison(skillcode);
            break;
        case 5:
            jobM = require('skillArchmagethundercold');
            rep = jobM.getskilldesc3Archmagethundercold(skillcode);
            break;            
        case 6:
            jobM = require('skillBishop');
            rep = jobM.getskilldesc3Bishop(skillcode);
            break;
        case 7:
            jobM = require('skillBowmaster');
            rep = jobM.getskilldesc3Bowmaster(skillcode);
            break;
        case 8:
            jobM = require('skillCrossBow');
            rep = jobM.getskilldesc3Crossbow(skillcode);
            break;
        case 9:
            jobM = require('skillPathfinder');
            rep = jobM.getskilldesc3Pathfinder(skillcode);
            break;
        case 10:
            jobM = require('skillNightlord');
            rep = jobM.getskilldesc3Nightlord(skillcode);
            break; 
        case 11:
            jobM = require('skillShadower');
            rep = jobM.getskilldesc3Shadower(skillcode);
            break; 
        case 12:
            jobM = require('skillDualblades');
            rep = jobM.getskilldesc3Dualblades(skillcode);
            break;
        case 13:
            jobM = require('skillViper');
            rep = jobM.getskilldesc3Viper(skillcode);
            break;  
        case 14:
            jobM = require('skillCaptain');
            rep = jobM.getskilldesc3Captain(skillcode);
            break;  
        case 15:
            jobM = require('skillCannonshooter');
            rep = jobM.getskilldesc3Cannonshooter(skillcode);
            break;   
        case 16:
            jobM = require('skillSoulmaster');
            rep = jobM.getskilldesc3Soulmaster(skillcode);
            break;       
        case 17:
            jobM = require('skillFlame');
            rep = jobM.getskilldesc3Flame(skillcode);
            break;         
        case 18:
            jobM = require('skillWind');
            rep = jobM.getskilldesc3Wind(skillcode);
            break;  
        case 19:
            jobM = require('skillNightwalker');
            rep = jobM.getskilldesc3Nightwalker(skillcode);
            break; 
        case 20:
            jobM = require('skillStriker');
            rep = jobM.getskilldesc3Striker(skillcode);
            break;  
        case 21:
            jobM = require('skillMihile');
            rep = jobM.getskilldesc3Mihile(skillcode);
            break;
        case 22:
            jobM = require('skillBlaster');
            rep = jobM.getskilldesc3Blaster(skillcode);
            break; 
        case 23:
            jobM = require('skillBattlemage');
            rep = jobM.getskilldesc3Battlemage(skillcode);
            break;   
        case 25:
            jobM = require('skillMechanic');
            rep = jobM.getskilldesc3Mechanic(skillcode);
            break;    
        case 26:
            jobM = require('skillXenon');
            rep = jobM.getskilldesc3Xenon(skillcode);
            break;    
        case 27:
            jobM = require('skillDemonslayer');
            rep = jobM.getskilldesc3Demonslayer(skillcode);
            break;     
        case 28:
            jobM = require('skillDemonavenger');
            rep = jobM.getskilldesc3Demonavenger(skillcode);
            break;                       
        case 29:
            jobM = require('skillAran');
            rep = jobM.getskilldesc3Aran(skillcode);
            break;
        case 30:            
            jobM = require('skillEvan');
            rep = jobM.getskilldesc3Evan(skillcode);
            break;
        case 31:            
            jobM = require('skillLumi');
            rep = jobM.getskilldesc3Lumi(skillcode);
            break;
        case 32:
            jobM = require('skillMercedes');
            rep = jobM.getskilldesc3Mercedes(skillcode);
            break;
        case 33:
            jobM = require('skillPhantom');            
            rep = jobM.getskilldesc3Phantom(skillcode);
            break;
        case 34:
            jobM = require('skillEunwol');
            rep = jobM.getskilldesc3Eunwol(skillcode);
            break;
        case 35:
            jobM = require('skillKaiser');
            rep = jobM.getskilldesc3Kaiser(skillcode);
            break;
        case 36:
            jobM = require('skillKain');
            rep = jobM.getskilldesc3Kain(skillcode);
            break;
        case 37:
            jobM = require('skillCadena');
            rep = jobM.getskilldesc3Cadena(skillcode);
            break;
        case 38:
            jobM = require('skillAngelicbuster');
            rep = jobM.getskilldesc3Angelicbuster(skillcode);
            break;
        case 39:
            jobM = require('skillAdele');
            rep = jobM.getskilldesc3Adele(skillcode);
            break;
        case 40:
            jobM = require('skillIllium');
            rep = jobM.getskilldesc3Illium(skillcode);
            break;
        case 41:
            jobM = require('skillArk');
            rep = jobM.getskilldesc3Ark(skillcode);
            break;
        case 42:
            jobM = require('skillRara');
            rep = jobM.getskilldesc3Rara(skillcode);
            break;
        case 43:
            jobM = require('skillHoyoung');
            rep = jobM.getskilldesc3Hoyoung(skillcode);
            break;
        case 45:
            jobM = require('skillKinesis');
            rep = jobM.getskilldesc3Kinesis(skillcode);
            break;
        case 53:
        case 54:
        case 61:
            jobM = require('skillAll');            
            rep = jobM.getskilldesc3All(skillcode);        
            break;
    }
    return rep;
}
sk.getJobskillimage1 = function(jobcode, skillcode){    
    rep = "";
    var jobM;
    switch (jobcode) {
        case 0:
            jobM = require('skillBeginner');
            rep = jobM.getskillimage1Beginner(skillcode);
            break;
        case 1:
            jobM = require('skillHero');
            rep = jobM.getskillimage1Hero(skillcode);
            break;
        case 2:
            jobM = require('skillPaladin');
            rep = jobM.getskillimage1Paladin(skillcode);
            break;
        case 3:            
            jobM = require('skillDarkknight');
            rep = jobM.getskillimage1Darkknight(skillcode);
            break;
        case 4:
            jobM = require('skillArchmagefirepoison');
            rep = jobM.getskillimage1Archmagefirepoison(skillcode);
            break;
        case 5:
            jobM = require('skillArchmagethundercold');
            rep = jobM.getskillimage1Archmagethundercold(skillcode);
            break;
        case 6:
            jobM = require('skillBishop');
            rep = jobM.getskillimage1Bishop(skillcode);
            break;
        case 7:
            jobM = require('skillBowmaster');
            rep = jobM.getskillimage1Bowmaster(skillcode);
            break;
        case 8:
            jobM = require('skillCrossbow');
            rep = jobM.getskillimage1Crossbow(skillcode);
            break;
        case 9:
            jobM = require('skillPathfinder');
            rep = jobM.getskillimage1Pathfinder(skillcode);
            break;
        case 10:
            jobM = require('skillNightlord');
            rep = jobM.getskillimage1Nightlord(skillcode);
            break;
        case 11:
            jobM = require('skillShadower');
            rep = jobM.getskillimage1Shadower(skillcode);
            break;
        case 12:
            jobM = require('skillDualblades');
            rep = jobM.getskillimage1Dualblades(skillcode);
            break;
        case 13:
            jobM = require('skillViper');
            rep = jobM.getskillimage1Viper(skillcode);
            break;
        case 14:
            jobM = require('skillCaptain');
            rep = jobM.getskillimage1Captain(skillcode);
            break;
        case 15:
            jobM = require('skillCannonshooter');
            rep = jobM.getskillimage1Cannonshooter(skillcode);
            break;
        case 16:
            jobM = require('skillSoulmaster');
            rep = jobM.getskillimage1Soulmaster(skillcode);
            break;
        case 17:
            jobM = require('skillFlame');
            rep = jobM.getskillimage1Flame(skillcode);
            break;
            break;
        case 18:
            jobM = require('skillWind');
            rep = jobM.getskillimage1Wind(skillcode);
            break;
        case 19:
            jobM = require('skillNightwalker');
            rep = jobM.getskillimage1Nightwalker(skillcode);
            break;
        case 20:
            jobM = require('skillStriker');
            rep = jobM.getskillimage1Striker(skillcode);
            break;
        case 21:
            jobM = require('skillMihile');
            rep = jobM.getskillimage1Mihile(skillcode);
            break;
        case 22:
            jobM = require('skillBlaster');
            rep = jobM.getskillimage1Blaster(skillcode);
            break;
        case 23:
            jobM = require('skillBattlemage');
            rep = jobM.getskillimage1Battlemage(skillcode);
            break;
        case 24:
            jobM = require('skillWild');
            rep = jobM.getskillimage1Wild(skillcode);
            break;
        case 25:
            jobM = require('skillMechanic');
            rep = jobM.getskillimage1Mechanic(skillcode);
            break;
        case 26:
            jobM = require('skillXenon');
            rep = jobM.getskillimage1Xenon(skillcode);
            break;
        case 27:
            jobM = require('skillDemonslayer');
            rep = jobM.getskillimage1Demonslayer(skillcode);
            break;
        case 28:
            jobM = require('skillDemonavenger');
            rep = jobM.getskillimage1Demonavenger(skillcode);
            break;
        case 29:
            jobM = require('skillAran');
            rep = jobM.getskillimage1Aran(skillcode);
            break;
        case 30:
            jobM = require('skillEvan');
            rep = jobM.getskillimage1Evan(skillcode);
            break;
        case 31:
            jobM = require('skillLumi');
            rep = jobM.getskillimage1Lumi(skillcode);
            break;
        case 32:
            jobM = require('skillMercedes');
            rep = jobM.getskillimage1Mercedes(skillcode);
            break;
        case 33:
            jobM = require('skillPhantom');
            rep = jobM.getskillimage1Phantom(skillcode);
            break;
        case 34:
            jobM = require('skillEunwol');
            rep = jobM.getskillimage1Eunwol(skillcode);
            break;
        case 35:
            jobM = require('skillKaiser');
            rep = jobM.getskillimage1Kaiser(skillcode);
            break;
        case 36:
            jobM = require('skillKain');
            rep = jobM.getskillimage1Kain(skillcode);
            break;
        case 37:
            jobM = require('skillCadena');
            rep = jobM.getskillimage1Cadena(skillcode);
            break;
        case 38:
            jobM = require('skillAngelicbuster');
            rep = jobM.getskillimage1Angelicbuster(skillcode);
            break;
        case 39:
            jobM = require('skillAdele');
            rep = jobM.getskillimage1Adele(skillcode);
            break;
        case 40:
            jobM = require('skillIllium');
            rep = jobM.getskillimage1Illium(skillcode);
            break;
        case 41:
            jobM = require('skillArk');
            rep = jobM.getskillimage1Ark(skillcode);
            break;
        case 42:
            jobM = require('skillRara');
            rep = jobM.getskillimage1Rara(skillcode);
            break;
        case 43:
            jobM = require('skillHoyoung');
            rep = jobM.getskillimage1Hoyoung(skillcode);
            break;
        case 44:
            jobM = require('skillZero');
            rep = jobM.getskillimage1Zero(skillcode);
            break;
        case 45:
            jobM = require('skillKinesis');
            rep = jobM.getskillimage1Kinesis(skillcode);
            break;
        case 46:
            jobM = require('skillAdvWarrior');
            rep = jobM.getskillimage1AdvWarrior(skillcode);
            break;
        case 47:
            jobM = require('skillAdvMagician');
            rep = jobM.getskillimage1AdvMagician(skillcode);
            break;
        case 48:
            jobM = require('skillAdvArcher');
            rep = jobM.getskillimage1AdvArcher(skillcode);
            break;
        case 49:
            jobM = require('skillAdvThief');
            rep = jobM.getskillimage1AdvThief(skillcode);
            break;
        case 50:
            jobM = require('skillAdvPirate');
            rep = jobM.getskillimage1AdvPirate(skillcode);
            break;
        case 51:
            jobM = require('skillAll');
            rep = jobM.getskillimage1All(skillcode);
            break;
        case 52:
            jobM = require('skillAll');
            rep = jobM.getskillimage1All(skillcode);
            break;
        case 53:
            jobM = require('skillAll');
            rep = jobM.getskillimage1All(skillcode);
            break;
        case 54:
            jobM = require('skillAll');
            rep = jobM.getskillimage1All(skillcode);
            break;
        case 55:
            jobM = require('skillAll');
            rep = jobM.getskillimage1All(skillcode);
            break;
        case 56:
            jobM = require('skillAll');
            rep = jobM.getskillimage1All(skillcode);
            break;
        case 57:
            jobM = require('skillAll');
            rep = jobM.getskillimage1All(skillcode);
            break;
        case 58:
            jobM = require('skillAll');
            rep = jobM.getskillimage1All(skillcode);
            break;
        case 59:
            jobM = require('skillAll');
            rep = jobM.getskillimage1All(skillcode);
            break;
        case 60:
            jobM = require('skillAll');
            rep = jobM.getskillimage1All(skillcode);
            break;
        case 61:
            jobM = require('skillAll');
            rep = jobM.getskillimage1All(skillcode);
            break;
        case 62:
            jobM = require('skillAll');
            rep = jobM.getskillimage1All(skillcode);
            break;
        case 63:
            jobM = require('skillAdventurer');
            rep = jobM.getskillimage1Adventurer(skillcode);
            break;        
        case 64:
            jobM = require('skillPublic');
            rep = jobM.getskillimage1Public(skillcode);
            break;
    }
    return rep;
};
sk.getJobskillimage2 = function(jobcode, skillcode){    
    rep = "";
    var jobM;
    switch (jobcode) {
        case 0:
            jobM = require('skillBeginner');
            rep = jobM.getskillimage2Beginner(skillcode);
            break;
        case 1:
            jobM = require('skillHero');
            rep = jobM.getskillimage2Hero(skillcode);
            break;
        case 2:
            jobM = require('skillPaladin');
            rep = jobM.getskillimage2Paladin(skillcode);
            break;
        case 3:
            jobM = require('skillDarkknight');
            rep = jobM.getskillimage2Darkknight(skillcode);
            break;
        case 4:
            jobM = require('skillArchmagefirepoison');
            rep = jobM.getskillimage2Archmagefirepoison(skillcode);
            break;
        case 5:
            jobM = require('skillArchmagethundercold');
            rep = jobM.getskillimage2Archmagethundercold(skillcode);
            break;
        case 6:
            jobM = require('skillBishop');
            rep = jobM.getskillimage2Bishop(skillcode);
            break;
        case 7:
            jobM = require('skillBowmaster');
            rep = jobM.getskillimage2Bowmaster(skillcode);
            break;
        case 8:
            jobM = require('skillCrossbow');
            rep = jobM.getskillimage2Crossbow(skillcode);
            break;
        case 9:
            jobM = require('skillPathfinder');
            rep = jobM.getskillimage2Pathfinder(skillcode);
            break;
        case 10:
            jobM = require('skillNightlord');
            rep = jobM.getskillimage2Nightlord(skillcode);
            break;
        case 11:
            jobM = require('skillShadower');
            rep = jobM.getskillimage2Shadower(skillcode);
            break;
        case 12:
            jobM = require('skillDualblades');
            rep = jobM.getskillimage2Dualblades(skillcode);
            break;
        case 13:
            jobM = require('skillViper');
            rep = jobM.getskillimage2Viper(skillcode);
            break;
        case 14:
            jobM = require('skillCaptain');
            rep = jobM.getskillimage2Captain(skillcode);
            break;
        case 15:
            jobM = require('skillCannonshooter');
            rep = jobM.getskillimage2Cannonshooter(skillcode);
            break;
        case 16:
            jobM = require('skillSoulmaster');
            rep = jobM.getskillimage2Soulmaster(skillcode);
            break;
        case 17:
            jobM = require('skillFlame');
            rep = jobM.getskillimage2Flame(skillcode);
            break;
        case 18:
            jobM = require('skillWind');
            rep = jobM.getskillimage2Wind(skillcode);
            break;
        case 19:
            jobM = require('skillNightwalker');
            rep = jobM.getskillimage2Nightwalker(skillcode);
            break;
        case 20:
            jobM = require('skillStriker');
            rep = jobM.getskillimage2Striker(skillcode);
            break;
        case 21:
            jobM = require('skillMihile');
            rep = jobM.getskillimage2Mihile(skillcode);
            break;
        case 22:
            jobM = require('skillBlaster');
            rep = jobM.getskillimage2Blaster(skillcode);
            break;
        case 23:
            jobM = require('skillBattlemage');
            rep = jobM.getskillimage2Battlemage(skillcode);
            break;
        case 24:
            jobM = require('skillWild');
            rep = jobM.getskillimage2Wild(skillcode);
            break;
        case 25:
            jobM = require('skillMechanic');
            rep = jobM.getskillimage2Mechanic(skillcode);
            break;
        case 26:
            jobM = require('skillXenon');
            rep = jobM.getskillimage2Xenon(skillcode);
            break;
        case 27:
            jobM = require('skillDemonslayer');
            rep = jobM.getskillimage2Demonslayer(skillcode);
            break;
        case 28:
            jobM = require('skillDemonavenger');
            rep = jobM.getskillimage2Demonavenger(skillcode);
            break;
        case 29:
            jobM = require('skillAran');
            rep = jobM.getskillimage2Aran(skillcode);
            break;
        case 30:
            jobM = require('skillEvan');
            rep = jobM.getskillimage2Evan(skillcode);
            break;
        case 31:
            jobM = require('skillLumi');
            rep = jobM.getskillimage2Lumi(skillcode);
            break;
        case 32:
            jobM = require('skillMercedes');
            rep = jobM.getskillimage2Mercedes(skillcode);
            break;
        case 33:
            jobM = require('skillPhantom');
            rep = jobM.getskillimage2Phantom(skillcode);
            break;
        case 34:
            jobM = require('skillEunwol');
            rep = jobM.getskillimage2Eunwol(skillcode);
            break;
        case 35:
            jobM = require('skillKaiser');
            rep = jobM.getskillimage2Kaiser(skillcode);
            break;
        case 36:
            jobM = require('skillKain');
            rep = jobM.getskillimage2Kain(skillcode);
            break;
        case 37:
            jobM = require('skillCadena');
            rep = jobM.getskillimage2Cadena(skillcode);
            break;
        case 38:
            jobM = require('skillAngelicbuster');
            rep = jobM.getskillimage2Angelicbuster(skillcode);
            break;
        case 39:
            jobM = require('skillAdele');
            rep = jobM.getskillimage2Adele(skillcode);
            break;
        case 40:
            jobM = require('skillIllium');
            rep = jobM.getskillimage2Illium(skillcode);
            break;
        case 41:
            jobM = require('skillArk');
            rep = jobM.getskillimage2Ark(skillcode);
            break;
        case 42:
            jobM = require('skillRara');
            rep = jobM.getskillimage2Rara(skillcode);
            break;
        case 43:
            jobM = require('skillHoyoung');
            rep = jobM.getskillimage2Hoyoung(skillcode);
            break;
        case 44:
            jobM = require('skillZero');
            rep = jobM.getskillimage2Zero(skillcode);
            break;
        case 45:
            jobM = require('skillKinesis');
            rep = jobM.getskillimage2Kinesis(skillcode);
            break;
        case 46:
            jobM = require('skillAdvWarrior');
            rep = jobM.getskillimage2AdvWarrior(skillcode);
            break;
        case 47:
            jobM = require('skillAdvMagician');
            rep = jobM.getskillimage2AdvMagician(skillcode);
            break;
        case 48:
            jobM = require('skillAdvArcher');
            rep = jobM.getskillimage2AdvArcher(skillcode);
            break;
        case 49:
            jobM = require('skillAdvThief');
            rep = jobM.getskillimage2AdvThief(skillcode);
            break;
        case 50:
            jobM = require('skillAdvPirate');
            rep = jobM.getskillimage2AdvPirate(skillcode);
            break;
        case 51:
            jobM = require('skillAll');
            rep = jobM.getskillimage2All(skillcode);
            break;
        case 52:
            jobM = require('skillAll');
            rep = jobM.getskillimage2All(skillcode);
            break;
        case 53:
            jobM = require('skillAll');
            rep = jobM.getskillimage2All(skillcode);
            break;
        case 54:
            jobM = require('skillAll');
            rep = jobM.getskillimage2All(skillcode);
            break;
        case 55:
            jobM = require('skillAll');
            rep = jobM.getskillimage2All(skillcode);
            break;
        case 56:
            jobM = require('skillAll');
            rep = jobM.getskillimage2All(skillcode);
            break;
        case 57:
            jobM = require('skillAll');
            rep = jobM.getskillimage2All(skillcode);
            break;
        case 58:
            jobM = require('skillAll');
            rep = jobM.getskillimage2All(skillcode);
            break;
        case 59:
            jobM = require('skillAll');
            rep = jobM.getskillimage2All(skillcode);
            break;
        case 60:
            jobM = require('skillAll');
            rep = jobM.getskillimage2All(skillcode);
            break;
        case 61:
            jobM = require('skillAll');
            rep = jobM.getskillimage2All(skillcode);
            break;
        case 62:
            jobM = require('skillAll');
            rep = jobM.getskillimage2All(skillcode);
            break;
        case 63:
            jobM = require('skillAdventurer');
            rep = jobM.getskillimage2Adventurer(skillcode);
            break;        
        case 64:
            jobM = require('skillPublic');
            rep = jobM.getskillimage2Public(skillcode);
            break;
    }
    return rep;
};

module.exports = sk;