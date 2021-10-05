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
        rep = "히어로\n\n5차 : 소드 오브 버닝 소울, 콤보 데스폴트, 콤보 인스팅트, 소드 일루전";
        break;
    case 2:
        rep = "팔라딘\n\n5차 : 홀리 유니티, 블래스드 해머, 그랜드 크로스, 마이티 묠니르";
        break;
    case 3:
        rep = "다크나이트\n\n5차 : 다크 스피어, 비홀더 임팩트, 피어스 사이클론, 다크니스 오라";
        break;
    case 4:
        rep = "아크메이지(불,독)\n\n5차 : 도트 퍼니셔, 포이즌 노바, 퓨리 오브 이프리트, 포이즌 체인";
        break;
    case 5:
        rep = "아크메이지(썬,콜)\n\n5차 : 아이스 에이지, 썬더 브레이크, 스피릿 오브 스노우, 주피터 썬더";
        break;
    case 6:
        rep = "비숍\n\n5차 : 프레이, 엔젤 오브 리브라, 피스메이커, 디바인 퍼니시먼트";
        break;
    case 7:
        rep = "보우마스터\n\n2차 : 리트리트 샷, 소울 애로우 : 활, 퀴버 카트리지\n3차 : 애로우 플래터, 피닉스, 슈타이크 아이젠, 익스트림 아쳐리 : 활, 모탈 블로우, 컨센트레이션\n4차 : 폭풍의 시, 운즈 샷, 언카운터블 애로우, 어드밴스드 퀴버, 아머 피어싱\n하이퍼 스킬 : 프리퍼레이션, 윈드 오브 프레이\n5차 : 애로우 레인, 잔영의 시, 퀴버 풀버스트, 실루엣 미라주";
        break;
    case 8:
        rep = "신궁\n\n5차 : 트루 스나이핑, 스플릿 애로우, 차지드 애로우, 리피팅 크로스보우 카트리지";
        break;
    case 9:
        rep = "패스파인더\n\n5차 : 얼티밋 블래스트, 레이븐 템페스트, 옵시디언 배리어(디스차지, 블래스트, 트랜지션), 렐릭 언바운드(디스차지, 블래스트, 트랜지션)";
        break;
    case 10:
        rep = "나이트로드\n\n5차 : 스프레드 스로우, 풍마수리검, 다크로드의 비전서, 스로우 블래스팅";
        break;
    case 11:
        rep = "섀도어\n\n5차 : 쉐도우 어썰트, 절개, 소닉 블로우, 멸귀참영진";
        break;
    case 12:
        rep = "듀얼블레이드\n\n5차 : 블레이드 스톰, 카르마 퓨리, 블레이드 토네이도, 헌티드 엣지";
        break;
    case 13:
        rep = "바이퍼\n\n5차 : 트랜스 폼, 서펜트 스크류, 퓨리어스 차지, 하울링 피스트";
        break;
    case 14:
        rep = "캡틴\n\n5차 : 불릿 파티, 데드아이, 노틸러스 어썰트, 데스 트리거";
        break;
    case 15:
        rep = "캐논슈터\n\n5차 : 빅 휴즈 기간틱 캐논볼, ICBM, 스페셜 몽키 에스코트, 풀 메이커";
        break;
    case 16:
        rep = "소울마스터\n\n1차 : 엘리멘트 : 소울, 소드 오브 라이트, 이너 보이스\n2차 : 폴링 문, 님블 핑거, 이너 트러스트, 바디 앤 소울\n3차 : 라이징 선, 트루 사이트, 소울 가디언, 윌 오브 스틸, 이너 샤우트\n4차 : 댄스 오브 문, 스피딩 선셋, 크레센트 디바이드, 솔라 피어스, 소울 페네트레이션, 솔루나 타임, 솔루나 슬래시, 소울 플레지, 언포시어블, 마스터 오브 더 소드\n하이퍼 스킬 : 소울 포지, 크로스 더 스틱스\n5차 : 셀레스티얼 댄스, 엘리시온, 소울 이클립스, 플레어 슬래시";
        break;
    case 17:
        rep = "플레임위자드\n\n5차 : 블레이징 오비탈 플레임, 플레임 디스차지, 인피니티 플레임 서클, 샐리맨더 미스칩";
        break;
    case 18:
        rep = "윈드브레이커\n\n5차 : 하울링 게일, 아이들 윔, 윈드 월, 볼텍스 스피어";
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
        rep = "메카닉\n\n5차 : 멀티플 옵션 : M-FL, 마이크로 미사일 컨테이너, 메탈아머 전탄발사, 메카 캐리어";
        break;
    case 26:
        rep = "제논\n\n5차 : 메가 스매셔, 오버로드 모드, 홀로그램 그래피티 : 융합, 포톤 레이";
        break;
    case 27:
        rep = "데몬슬레이어\n\n5차 : 데몬 어웨이크닝, 요르문간드, 오르트로스, 데몬 베인";
        break;
    case 28:
        rep = "데몬어벤져\n\n5차 : 데몬 프렌지, 블러드 피스트, 디멘션 소드, 레버넌트";
        break;
    case 29:
        rep = "아란\n\n0차 : 컴뱃 스탭, 되찾은 기억, 콤보킬 어드밴티지\n1차 : 콤보 어빌리티, 스매시 스윙, 스매시 웨이브, 바디 프레셔\n2차 : 파이널 차지, 파이널 토스, 롤링 스핀, 드레인, 스노우 차지, 다이나믹 마스터리 I, 스윙 연구 I, 피지컬 트레이닝\n3차 : 어드밴스드 콤보 어빌리티, 에어로 스윙, 아드레날린 부스트 액티베이트, 아드레날린 부스트, 파이널 블로우, 저지먼트, 게더링 캐쳐, 블레싱 마하, 마이트, 클리빙 어택\n4차 : 비욘더, 부스트 엔드-스톰 오브 피어, 부스트 엔드-헌터즈 타겟팅, 하이 디펜스, 스위프트 무브, 다이나믹 마스터리 II, 스윙 연구 II\n하이퍼 스킬: 아드레날린 제네레이터, 마하의 영역\n5차: 인스톨 마하, 브랜디쉬 마하, 펜릴 크래시, 블리자드 템페스트";
        break;
    case 30:
        rep = "에반\n\n5차 : 엘리멘탈 블래스트, 드레곤 브레이크( 브레이크-돌아와!, 임페리얼 브레스), 조디악 레이, 스파이럴 오브 마나";
        break;
    case 31:
        rep = "루미너스\n\n0차 : 파워 오브 라이트, 라이트 블링크, 퍼미에이트, 선파이어, 이클립스, 이퀄리브리엄\n1차: 라이트랜스포밍, 오디너리 매직가드, 익스텐드 마나, 빛 마법 강화 / 어둠 마법 강화\n2차: 실피드 랜서, 인바이러빌러티, 블레스 오브 다크니스, 스펠 마스터리, 하이 위즈덤\n3차: 샤인 리뎀션, 데스 사이드, 안티 매직쉘, 포틱 메디테이션, 라이트쉐도우 가드, 라이프 타이달\n4차: 운명의 갈림길, 라이트 리플렉션, 모닝 스타폴, 아포칼립스, 앱솔루트 킬, 다크니스 소서러, 다크 크레센도, 다크라이트 마스터리\n하이퍼 스킬 : 메모라이즈, 아마겟돈\n5차: 진리의 문, 퍼니싱 리조네이터, 빛과 어둠의 세례, 리버레이션 오브";
        break;
    case 32:
        rep = "메르세데스\n\n5차 : 엘리멘탈 고스트, 실피디아, 이르칼라의 숨결, 로얄 나이츠";
        break;
    case 33:
        rep = "팬텀\n\n0차 : 팬텀 슈라우드, 하이 덱스터러티, 스틸 스킬, 스킬 매니지먼트, 저지먼트, 데들리 인스팅트\n1차 : 탤런트 오브 팬텀시프I, 스위프트 팬텀, 퀵 이베이젼\n2차 : 탤런트 오브 팬텀시프II, 브리즈 카르트, 럭 모노폴리\n3차 : 코트 오브 암즈, 탤런트 오브 팬텀시프III, 럭 오브 팬텀시프, 미스포츈 프로텍션, 문 라이트, 플래시 앤 플리, 어큐트 센스\n4차 : 얼티밋 드라이브, 탤런트 오브 팬텀시프IV, 템페스트 오브 카드, 트와일라이트, 느와르 카르트, 소울 스틸, 프레이 오브 아리아\n하이퍼 스킬 : 탤런트 오브 팬텀시프H, 로즈 카르트 피날레\n5차 : 조커, 블랙잭, 마크 오브 팬텀, 리프트 브레이크";
        break;
    case 34:
        rep = "은월\n\n";
        break;
    case 35:
        rep = "카이저\n\n";
        break;
    case 36:
        rep = "카인\n\n5차 : [발현] 드래곤 버스트, [처형] 페이탈 블리츠, 타나토스 디센트, 그립 오브 애거니";
        break;
    case 37:
        rep = "카데나\n\n";
        break;
    case 38:
        rep = "엔젤릭버스터\n\n";
        break;
    case 39:
        rep = "아델\n\n5차 : 루인, 인피니트, 리스토어, 스톰";
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
        rep = "제로\n\n공용: 듀얼 컴뱃, 디바인 포스, 디바인 스위프트, 륀느의 가호, 리졸브 타임, 륀느의 축복\n알파: 문 스트라이크, 피어스 쓰러스트, 쉐도우 스트라이크, 플래시 어썰터, (어드밴스드)스핀 커터, (어드밴스드)롤링 커브, (어드밴스드)롤링 어썰터, 윈드 커터, 윈드 스트라이크, (어드밴스드)스톰 브레이크,  컴뱃 리커버리, 리인포스 바디, 디바인 리어\n베타: 어퍼 슬래시, (어드밴스드)파워스텀프, 프론트 슬래시, (어드밴스드)스로잉 웨폰, 터닝 드라이브, (어드밴스드)휠 윈드, 기가 크래시, 점핑 크래시, (어드밴스드)어스 브레이크, 솔리드 바디, 아머 스플릿, 이뮨 배리어, 크리티컬 바인드\n초월자 스킬: 래피드 타임, 타임 디스토션, 타임 홀딩, 타임 리와인드, 쉐도우 레인\n5차: 리미트 브레이크, 조인트 어택, 쉐도우 플래시(알파/베타), 에고 웨폰(알파/베타), 초월자 륀느의 기원";
        break;
    case 45:
        rep = "키네시스\n\n5차 : 싸이킥 토네이도, 얼티메이트-무빙 매터, 얼티메이트-싸이킥 불릿, 로 오브 그라비티";
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
            ret = -1;
            rep = "은월";
            break;
        case 35:
            ret = -1;
            rep = "카이저";
            break;
        case 36:
            jobM = require('skillKain');
            ret = jobM.getskillKain(skillname);
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
            jobM = require('skillAdele');
            ret = jobM.getskillAdele(skillname);
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
            ret = -1;
            rep = "모험가";
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
            
            rep = "은월";
            break;
        case 35:
            
            rep = "카이저";
            break;
        case 36:
            jobM = require('skillKain');
            rep = jobM.getskillnameKain(skillcode);
            break;
        case 37:
            
            rep = "카데나";
            break;
        case 38:
            
            rep = "엔젤릭버스터";
            break;
        case 39:
            jobM = require('skillAdele');
            rep = jobM.getskillnameAdele(skillcode);
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
            rep = "모험가";
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
            
            rep = "은월";
            break;
        case 35:
            
            rep = "카이저";
            break;
        case 36:
            jobM = require('skillKain');
            rep = jobM.getskilldesc1Kain(skillcode);
            break;
        case 37:
            
            rep = "카데나";
            break;
        case 38:
            
            rep = "엔젤릭버스터";
            break;
        case 39:
            jobM = require('skillAdele');
            rep = jobM.getskilldesc1Adele(skillcode);
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
            rep = "모험가";
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
            
            rep = "은월";
            break;
        case 35:
            
            rep = "카이저";
            break;
        case 36:
            jobM = require('skillKain');
            rep = jobM.getskilldesc2Kain(skillcode);
            break;
        case 37:
            
            rep = "카데나";
            break;
        case 38:
            
            rep = "엔젤릭버스터";
            break;
        case 39:
            jobM = require('skillAdele');
            rep = jobM.getskilldesc2Adele(skillcode);
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
            rep = "모험가";
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
        case 17:
            jobM = require('skillFlame');
            rep = jobM.getskilldesc3Flame(skillcode);
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
        case 33:
            jobM = require('skillPhantom');            
            rep = jobM.getskilldesc3Phantom(skillcode);
            break;
        case 39:
            jobM = require('skillAdele');
            rep = jobM.getskilldesc3Adele(skillcode);
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
            
            rep = "은월";
            break;
        case 35:
            
            rep = "카이저";
            break;
        case 36:
            jobM = require('skillKain');
            rep = jobM.getskillimage1Kain(skillcode);
            break;
        case 37:
            
            rep = "카데나";
            break;
        case 38:
            
            rep = "엔젤릭버스터";
            break;
        case 39:
            jobM = require('skillAdele');
            rep = jobM.getskillimage1Adele(skillcode);
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
            rep = "모험가";
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
            
            rep = "은월";
            break;
        case 35:
            
            rep = "카이저";
            break;
        case 36:
            jobM = require('skillKain');
            rep = jobM.getskillimage2Kain(skillcode);
            break;
        case 37:
            
            rep = "카데나";
            break;
        case 38:
            
            rep = "엔젤릭버스터";
            break;
        case 39:
            jobM = require('skillAdele');
            rep = jobM.getskillimage2Adele(skillcode);
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
            rep = "모험가";
            break;        
        case 64:
            jobM = require('skillPublic');
            rep = jobM.getskillimage2Public(skillcode);
            break;
    }
    return rep;
};

module.exports = sk;