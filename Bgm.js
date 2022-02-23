const bgm = {};

bgm.getBGM = function(msg){
    var rep = "";
    var bgmlist = msg.split(" ")[1];
    var bgmname = "";
    if(bgmlist == undefined){ rep = "듣고싶은 BGM의 종류를 입력해주세요. BGM이름을 생략하면 해당 종류에 수록된 목록을 보여줍니다.\n\n종류 목록: 보스, 마을, 고유/직업";}
    else{
        if(bgmlist == "보스"){ 
            bgmname = msg.slice(msg.indexOf(" ", 5) + 1, msg.length);
            var bgmchk = msg.split(" ")[2];
            if(bgmchk == undefined){
                rep = this.getBGMlist(bgmlist);
            }
            else{
                var bgmbosscode = this.getBossCode(bgmname);
                if(bgmbosscode != -1){ rep = BGMboss[bgmbosscode]; }
                else{ rep = bgmname + " >> 해당하는 보스가 목록에 없습니다. 페이즈별로 BGM이 구분되는 보스의 경우 페이즈를 함께 입력해주세요. (예시 : !브금 보스 윌1페) [!브금 보스]를 입력하여 목록을 확인해주세요."; }
            }
        }
        else if(bgmlist == "마을"){
            bgmname = msg.slice(msg.indexOf(" ", 5) + 1, msg.length);
            bgmchk = msg.split(" ")[2];
            if(bgmchk == undefined){
                rep = this.getBGMlist(bgmlist);
            }
            else{
                var bgmtowncode = this.getTownCode(bgmname);
                if(bgmtowncode != -1){ rep = BGMtown[bgmtowncode]; }
                else{ rep = bgmname + " >> 해당하는 마을이 목록에 없습니다. [!브금 마을]을 입력하여 목록을 확인해주세요."; }
            }
        }
        else if(bgmlist == "직업" || bgmlist == "고유"){
            bgmname = msg.slice(msg.indexOf(" ", 5) + 1, msg.length);
            bgmchk = msg.split(" ")[2];
            if(bgmchk == undefined){
                rep = this.getBGMlist(bgmlist)
            }
            else{
                var bgmjobcode = this.getJobcode(bgmname);
                if(bgmjobcode != -1){ rep = BGMjob[bgmjobcode]; }
                else{ rep = bgmname + " >> 해당하는 고유/직업 BGM이 목록에 없습니다. [!브금 고유 또는 !브금 직업]을 입력하여 목록을 확인해주세요."; }
            }
        }
        else{
            rep = "현재 존재하지 않는 BGM종류입니다. 확인 후 다시 입력해주세요.\n\n현재 입력 가능 종류 목록 : 보스, 마을, 고유/직업";
        }
    }
    return rep;
};

bgm.getBGMlist = function(listname){
    brep = "";
    if(listname == "보스"){
        brep += "보스 BGM 목록\n";
        brep += " -자쿰\n";
        brep += " -힐라\n";
        brep += " -혼테일\n";
        brep += " -힐라\n";
        brep += " -핑크빈\n";
        brep += " -아카이럼\n";
        brep += " -카웅\n";
        brep += " -헤카톤\n";
        brep += " -매그너스\n";
        brep += " -반 레온\n";
        brep += " -엘리트 보스\n";
        brep += " -더 시드 중간보스\n";
        brep += " -더 시드 도로시\n";
        brep += " -반반\n";
        brep += " -피에르\n";
        brep += " -블러디 퀸\n";
        brep += " -벨룸\n";
        brep += " -스우 (1페)\n";
        brep += " -스우 (2페)\n";
        brep += " -스우 (3페)\n";
        brep += " -데미안 (1페)\n";
        brep += " -데미안 (2페)\n";
        brep += " -루시드 (1페)\n";
        brep += " -루시드 (2페)\n";
        brep += " -윌 (1페)\n";
        brep += " -윌 (2페)\n";
        brep += " -윌 (3페)\n";
        brep += " -가디언 엔젤 슬라임\n";
        brep += " -가디언 엔젤 슬라임 (가디언 웨이브)\n";
        brep += " -거대 괴수 더스크\n";
        brep += " -친위대장 듄켈\n";
        brep += " -진 힐라\n";
        brep += " -검은 마법사 (1페)\n";
        brep += " -검은 마법사 (2페)\n";
        brep += " -검은 마법사 (3페)\n";
        brep += " -검은 마법사 (4페)\n";
        brep += " -선택받은 세렌 (1페)\n";
        brep += " -선택받은 세렌 (2페,정오)\n";
        brep += " -선택받은 세렌 (2페,석양)\n";
        brep += " -선택받은 세렌 (2페,자정)\n";
        brep += " -선택받은 세렌 (2페,여명)\n";
        brep += " -감시자 칼로스 (1페)\n";
        brep += " -감시자 칼로스 (2페)\n";
        brep += " -";
    }
    else if(listname == "마을"){
        brep += "마을 BGM 목록\n";
        brep += " -리스항구\n";
        brep += " -헤네시스\n";
        brep += " -사우스페리/헤네시스 시장\n";
        brep += " -커닝시티\n";
        brep += " -커닝시티 지하철\n";
        brep += " -커닝시티 게임방\n";
        brep += " -비화원\n";
        brep += " -엘리니아\n";
        brep += " -노틸러스 선착장\n";
        brep += " -노틸러스 내부\n";
        brep += " -페리온\n";
        brep += " -유적 발굴지\n";
        brep += " -슬리피우드\n";
        brep += " -파르템\n";
        brep += " -에우렐\n";
        brep += " -루타비스\n";
        brep += " -라무라무 온천\n";
        brep += " -플로리나 비치\n";
        brep += " -메이플 아일랜드\n";
        brep += " -리엔\n";
        brep += " -에레브\n";
        brep += " -오르비스\n";
        brep += " -오르비스행 비행선\n";
        brep += " -엘나스\n";
        brep += " -아쿠아리움\n";
        brep += " -베리타스\n";
        brep += " -루디브리엄\n";
        brep += " -루디브리엄행 비행선\n";
        brep += " -지구방위본부\n";
        brep += " -격납고\n";
        brep += " -아랫마을\n";
        brep += " -무릉\n";
        brep += " -백초마을\n";
        brep += " -아리안트\n";
        brep += " -마가티아\n";
        brep += " -고대도시 아스완\n";
        brep += " -리프레\n";
        brep += " -시간의 신전\n";
        brep += " -파괴된 헤네시스\n";
        brep += " -황혼의 페리온\n";
        brep += " -에델슈타인\n";
        brep += " -헤이븐\n";
        brep += " -트뤼에페\n";
        brep += " -더 시드 로비\n";
        brep += " -소멸의 여로\n";
        brep += " -리버스 시티\n";
        brep += " -츄츄 아일랜드\n";
        brep += " -얌얌 아일랜드\n";
        brep += " -꿈의 도시 레헬른\n";
        brep += " -신비의 숲 아르카나\n";
        brep += " -기억의 늪 모라스\n";
        brep += " -태초의 바다 에스페라\n";
        brep += " -셀라스, 별이 잠긴 곳\n";
        brep += " -셀라스, 별이 잠긴 곳(구버전)\n";
        brep += " -에레브 전초기지\n";
        brep += " -고통의 미궁\n";
        brep += " -리멘\n";
        brep += " -신의 도시 세르니움\n";
        brep += " -불타는 세르니움\n";
        brep += " -해방된 에델슈타인\n";
        brep += " -호텔 아르크스\n";
        brep += " -멈추지 않는 탑, 카로테\n";
        brep += " -카로테 마천루\n";
        brep += " -판테온\n";
        brep += " -판테온 대신전\n";
        brep += " -헬리시움 탈환 본부\n";
        brep += " -뾰족귀 여우마을\n";
        brep += " -비오는 뾰족귀 여우마을\n";
        brep += " -새비지 터미널\n";
        brep += " -아쉴롬\n";
        brep += " -크리스탈 아카데미아\n";
        brep += " -베르딜\n";
        brep += " -청운골\n";
        brep += " -리스토니아\n";
        brep += " -툴렌시티\n";
        brep += " -나린\n";
        brep += " -거울세계 리프레\n";
        brep += " -거울세계 아리안트\n";
        brep += " -거울세계 헤네시스\n";
        brep += " -거울세계 무릉도원\n";
        brep += " -거울세계 에델슈타인\n";
        brep += " -거울세계 마가티아\n";
        brep += " -거울세계 루디브리엄\n";
        brep += " -거울세계 시간의 신전\n";
        brep += " -\n";
    }
    else if(listname == "직업" || listname == "고유"){
        brep += "고유/직업 BGM 목록\n";
        brep += " -모험가 애니메이션 인트로\n";
        brep += " -패스파인더 튜토리얼\n";
        brep += " -패스파인더 하이퍼 스킬 '렐릭 에볼루션'\n";
        brep += " -나이트워커 하이퍼 스킬 '도미니언'\n";
        brep += " -데몬 튜토리얼\n";
        brep += " -제논 튜토리얼\n";
        brep += " -아란 튜토리얼\n";
        brep += " -에반 튜토리얼\n";
        brep += " -메르세데스 튜토리얼\n";
        brep += " -은월 튜토리얼\n";
        brep += " -팬텀 튜토리얼\n";
        brep += " -크리스탈 가든\n";
        brep += " -크리스탈 가든 비행 중\n";
        brep += " -루미너스 튜토리얼\n";
        brep += " -루미너스 홈 타운(라니아의 숲)\n";
        brep += " -세레니티\n";
        brep += " -카이저 튜토리얼\n";
        brep += " -엔젤릭버스터의 방\n";
        brep += " -엔젤릭버스터 5차 스킬 '스포트라이트'\n";
        brep += " -카인 5차 스킬 '타나토스 디센트'\n";
        brep += " -카인 튜토리얼\n";
        brep += " -일리움 각성\n";
        brep += " -일리움 3차 스킬 '크리스탈 스킬: 글로리 윙'\n";
        brep += " -아크 운명의 날\n";
        brep += " -아크 과거 회상\n";
        brep += " -아델 각성\n";
        brep += " -아델 5차 스킬 '인피니트'\n";
        brep += " -호영 테마곡\n";
        brep += " -호영 5차 스킬 '선기: 강림 괴력난신'\n";
        brep += " -라라 테마곡\n";
        brep += " -라라 하이퍼 스킬 '아름드리 나무'\n";
        brep += " -제로 그림자 기사단\n";
        brep += " -제로의 신전\n";
        brep += " -키네시스 테마곡\n";
        brep += " -키네시스 하이퍼 스킬 '싸이킥 오버'\n";
        brep += " -\n";
    }
    return brep;
};

bgm.getBossCode = function(bossname){
    ret = -1;
    switch(bossname){
        case "가디언 엔젤 슬라임":
        case "가디언엔젤슬라임":
        case "가엔슬":
        case "슬라임":
            ret = 0;
            break;
        case "가디언 엔젤 슬라임 (가디언 웨이브)":
        case "가디언엔젤슬라임(가디언웨이브)":
        case "가디언엔젤슬라임 패턴":
        case "가디언웨이브":
        case "가엔슬 패턴":
        case "가엔슬패턴":
            ret = 1;
            break;
        case "자쿰":
            ret = 2;
            break;
        case "파풀라투스":
        case "파풀":
        case "카파풀":
        case "몬스터 카니발":
        case "몬스터카니발":
        case "몬카":
            ret = 3;
            break;
        case "카웅":
            ret = 4;
            break;
        case "힐라":
            ret = 5;
            break;
        case "혼테일":
            ret = 6;
            break;
        case "핑크빈":
            ret = 7;
            break;
        case "아카이럼":
            ret = 8;
            break;
        case "시그너스":
            ret = 9;
            break;
        case "헤카톤":
            ret = 10;
            break;
        case "더 시드 (중간보스)":
        case "더시드(중간보스)":
        case "더시드중간보스":
        case "시드 중간보스":
        case "시드중간보스":
        case "거대 거미":
        case "거대거미":
        case "양철 나무꾼":
        case "양철나무꾼":
        case "겁에 질린 사자":
        case "겁에질린사자":
        case "허수아비":
        case "더 시드 10층":
        case "더 시드 20층":
        case "더 시드 30층":
        case "더 시드 40층":
        case "더시드10층":
        case "더시드20층":
        case "더시드30층":
        case "더시드40층":
        case "시드10층":
        case "시드20층":
        case "시드30층":
        case "시드40층":
        case "시드 10층":
        case "시드 20층":
        case "시드 30층":
        case "시드 40층":
            ret = 11;
            break;
        case "더 시드 (도로시)":
        case "더시드(도로시)":
        case "더시드도로시":
        case "시드 도로시":
        case "시드도로시":
        case "도로시":
        case "더 시드 50층":
        case "더 시드 49층":
        case "더시드49층":
        case "더시드50층":
        case "시드50층":
        case "시드49층":
        case "시드 49층":
        case "시드 50층":
            ret = 12;
            break;
        case "선택받은 세렌 (1페이즈)":
        case "선택받은 세렌 (1페)":
        case "선택받은세렌(1페이즈)":
        case "선택받은세렌(1페)":
        case "선택받은세렌1페이즈":
        case "선택받은세렌1페":
        case "세렌 1페이즈":
        case "세렌 1페":
        case "세렌1페이즈":
        case "세렌1페":
            ret = 13;
            break;
        case "선택받은 세렌 (2페,정오)":
        case "선택받은세렌(2페,정오)":
        case "선택받은세렌2페,정오":
        case "선택받은세렌2페정오":
        case "세렌 2페정오":
        case "세렌2페정오":
        case "세렌 정오":
        case "세렌정오":
        case "정오":
            ret = 14;
            break;
        case "선택받은 세렌 (2페,석양)":
        case "선택받은세렌(2페,석양)":
        case "선택받은세렌2페,석양":
        case "선택받은세렌2페석양":
        case "세렌 2페석양":
        case "세렌2페석양":
        case "세렌 석양":
        case "세렌석양":
        case "석양":
            ret = 15;
            break;
        case "선택받은 세렌 (2페,자정)":
        case "선택받은세렌(2페,자정)":
        case "선택받은세렌2페,자정":
        case "선택받은세렌2페자정":
        case "세렌 2페자정":
        case "세렌2페자정":
        case "세렌 자정":
        case "세렌자정":
        case "자정":
            ret = 16;
            break;
        case "선택받은 세렌 (2페,여명)":
        case "선택받은세렌(2페,여명)":
        case "선택받은세렌2페,여명":
        case "선택받은세렌2페여명":
        case "세렌 2페여명":
        case "세렌2페여명":
        case "세렌 여명":
        case "세렌여명":
        case "여명":
            ret = 17;
            break;
        case "매그너스":
        case "매그":
            ret = 18;
            break;
        case "루시드 (1페이즈)":
        case "루시드 (1페)":
        case "루시드(1페이즈)":
        case "루시드(1페)":
        case "루시드 1페이즈":
        case "루시드 1페":
        case "루시드1페이즈":
        case "루시드1페":
            ret = 19;
            break;
        case "루시드 (2페이즈)":
        case "루시드 (2페)":
        case "루시드(2페이즈)":
        case "루시드(2페)":
        case "루시드 2페이즈":
        case "루시드 2페":
        case "루시드2페이즈":
        case "루시드2페":
            ret = 20;
            break;
        case "윌 (1페이즈)":
        case "윌 (1페)":
        case "윌(1페이즈)":
        case "윌(1페)":
        case "윌1페이즈":
        case "윌1페":
            ret = 21;
            break;
        case "윌 (2페이즈)":
        case "윌 (2페)":
        case "윌(2페이즈)":
        case "윌(2페)":
        case "윌2페이즈":
        case "윌2페":
            ret = 22;
            break;
        case "윌 (3페이즈)":
        case "윌 (3페)":
        case "윌(3페이즈)":
        case "윌(3페)":
        case "윌3페이즈":
        case "윌3페":
            ret = 23;
            break;
        case "거대 괴수 더스크":
        case "거대괴수 더스크":
        case "거대괴수더스크":
        case "거대괴수":
        case "더스크":
            ret = 24;
            break;
        case "진 힐라":
        case "진힐라":
            ret = 25;
            break;
        case "친위대장 듄켈":
        case "친위대장듄켈":
        case "친위대장":
        case "듄켈":
            ret = 26;
            break;
        case "검은 마법사 (1페이즈)":
        case "검은 마법사 (1페)":
        case "검은마법사 (1페이즈)":
        case "검은마법사 (1페)":
        case "검은마법사(1페이즈)":
        case "검은마법사(1페)":
        case "검은마법사 1페이즈":
        case "검은마법사 1페":
        case "검은마법사1페이즈":
        case "검은마법사1페":
        case "검마1페이즈":
        case "검마 1페이즈":
        case "검마1페":
        case "검마 1페":
            ret = 27;
            break;
        case "검은 마법사 (2페이즈)":
        case "검은 마법사 (2페)":
        case "검은마법사 (2페이즈)":
        case "검은마법사 (2페)":
        case "검은마법사(2페이즈)":
        case "검은마법사(2페)":
        case "검은마법사2페이즈":
        case "검은마법사 2페이즈":
        case "검은마법사2페":
        case "검은마법사 2페":
        case "검마2페이즈":
        case "검마 2페이즈":
        case "검마2페":
        case "검마 2페":
            ret = 28;
            break;
        case "검은 마법사 (3페이즈)":
        case "검은 마법사 (3페)":
        case "검은마법사 (3페이즈)":
        case "검은마법사 (3페)":
        case "검은마법사(3페이즈)":
        case "검은마법사(3페)":
        case "검은마법사3페이즈":
        case "검은마법사3페":
        case "검마3페이즈":
        case "검마3페":
            ret = 29;
            break;
        case "검은 마법사 (4페이즈)":
        case "검은 마법사 (4페)":
        case "검은마법사 (4페이즈)":
        case "검은마법사 (4페)":
        case "검은마법사(4페이즈)":
        case "검은마법사(4페)":
        case "검은마법사4페이즈":
        case "검은마법사 4페이즈":
        case "검은마법사4페":
        case "검은마법사 4페":
        case "검마4페이즈":
        case "검마 4페이즈":
        case "검마4페":
        case "검마 4페":
            ret = 30;
            break;
        case "반 레온":
        case "반레온":
            ret = 31;
            break;
        case "엘리트 보스":
        case "엘리트보스":
        case "엘보":
        case "엘몹":
            ret = 32;
            break;
        case "스우 (1페이즈)":
        case "스우 (1페)":
        case "스우(1페이즈)":
        case "스우(1페)":
        case "스우1페이즈":
        case "스우1페":
        case "스우 1페이즈":
        case "스우 1페":
            ret = 33;
            break;
        case "스우 (2페이즈)":
        case "스우 (2페)":
        case "스우(2페이즈)":
        case "스우(2페)":
        case "스우2페이즈":
        case "스우2페":
        case "스우 2페이즈":
        case "스우 2페":
            ret = 34;
            break;
        case "스우 (3페이즈)":
        case "스우 (3페)":
        case "스우(3페이즈)":
        case "스우(3페)":
        case "스우3페이즈":
        case "스우3페":
        case "스우 3페이즈":
        case "스우 3페":
            ret = 35;
            break;
        case "데미안 (1페이즈)":
        case "데미안 (1페)":
        case "데미안(1페이즈)":
        case "데미안(1페)":
        case "데미안 1페이즈":
        case "데미안 1페":
        case "데미안1페이즈":
        case "데미안1페":
            ret = 36;
            break;
        case "데미안 (2페이즈)":
        case "데미안 (2페)":
        case "데미안(2페이즈)":
        case "데미안(2페)":
        case "데미안 2페이즈":
        case "데미안 2페":
        case "데미안2페이즈":
        case "데미안2페":
            ret = 37;
            break;
        case "반반":
            ret = 38;
            break;
        case "피에르":
        case "삐에르":
            ret = 39;
            break;
        case "블러디 퀸":
        case "블러디퀸":
        case "블퀸":
            ret = 40;
            break;
        case "벨룸":
            ret = 41;
            break;
        case "감시자 칼로스 (1페이즈)":
        case "감시자칼로스 (1페이즈)":
        case "감시자 칼로스(1페이즈)":
        case "감시자칼로스(1페이즈)":
        case "감시자 칼로스 1페이즈":
        case "감시자칼로스 1페이즈":
        case "감시자 칼로스1페이즈":
        case "감시자 칼로스 (1페)":
        case "감시자칼로스 (1페)":
        case "감시자칼로스(1페)":
        case "감시자 칼로스 1페":
        case "감시자칼로스 1페":
        case "감시자칼로스1페":
        case "칼로스 (1페이즈)":
        case "칼로스(1페이즈)":
        case "칼로스 1페이즈":
        case "칼로스1페이즈":
        case "칼로스 (1페)":
        case "칼로스(1페)":
        case "칼로스 1페":
        case "칼로스1페":
            ret = 42;
            break;
        case "감시자 칼로스 (2페이즈)":
        case "감시자칼로스 (2페이즈)":
        case "감시자 칼로스(2페이즈)":
        case "감시자칼로스(2페이즈)":
        case "감시자 칼로스 2페이즈":
        case "감시자칼로스 2페이즈":
        case "감시자 칼로스2페이즈":
        case "감시자 칼로스 (2페)":
        case "감시자칼로스 (2페)":
        case "감시자칼로스(2페)":
        case "감시자 칼로스 2페":
        case "감시자칼로스 2페":
        case "감시자칼로스2페":
        case "칼로스 (2페이즈)":
        case "칼로스(2페이즈)":
        case "칼로스 2페이즈":
        case "칼로스2페이즈":
        case "칼로스 (2페)":
        case "칼로스(2페)":
        case "칼로스 2페":
        case "칼로스2페":
            ret = 43;
            break;
    }
    return ret;
};
var BGMboss = [
    "라무라무 신전·보스 가디언 엔젤 슬라임 - Guardian Slime : Battle\n\nhttps://youtu.be/mBlj8bvXZO0", //0 
    "가디언 웨이브·보스 가디언 엔젤 슬라임 - Guardiam Slime : Wave\n\nhttps://youtu.be/Kv80AdkRshs", //1 
    "자쿰 - Welcome to the Hell\n\nhttps://youtu.be/3EJFx4emHyk", //2 
    "파풀라투스(몬스터 카니발) - Time Attack\n\nhttps://youtu.be/AiaV9gA3i10", //3 
    "카웅 - Dance With Aliens\n\nhttps://youtu.be/VyEIx6Dw354", //4 
    "힐라 - Red Witch\n\nhttps://youtu.be/xDV6ShE-YUU", //5 
    "혼테일 - Hontail\n\nhttps://youtu.be/7uuWJ4L6GDc", //6 
    "핑크빈 - Fighting Pink Bean\n\nhttps://youtu.be/Mt8ZlyYA4GI", //7 
    "아카이럼 - Altar of Akayrum\n\nhttps://youtu.be/eKf_ZjD9gb4", //8 
    "시그너스 - Cygnus Garden\n\nhttps://youtu.be/Y3RCDa6qo6w", //9
    "헤카톤 - Hekaton\n\nhttps://youtu.be/wQxSIH9n2vI", //10 
    "더 시드(10,20,30,40층) - Amusing Story in the Fairy Tale\n\nhttps://youtu.be/ZnS7JgfB8DI", //11 
    "더 시드(도로시) - Strange Sort of Story\n\nhttps://youtu.be/AZU1lB4WrlU", //12 
    "선택받은 세렌 (1페) - Awakening Of Old God\n\nhttps://youtu.be/KNtmddYg4bo", //13 
    "선택받은 세렌 (2페,정오) - Noon of Justice\n\nhttps://youtu.be/2kjL4V2FQ9Y", //14 
    "선택받은 세렌 (2페,석양) - Twilight of Flame\n\nhttps://youtu.be/x_VQhgG3Tnw", //15 
    "선택받은 세렌 (2페,자정) - Midnight of Silence\n\nhttps://youtu.be/7ltlZ0tdHI8", //16 
    "선택받은 세렌 (2페,여명) - Dawn of Hope\n\nhttps://youtu.be/R4v8vbVsSuM", //17 
    "매그너스 - The Final War\n\nhttps://youtu.be/HyEPAX6BS5Y", //18 
    "루시드 (1페) - Phantasmal Woods\n\nhttps://youtu.be/U_-yYE38F9w", //19 
    "루시드 (2페) - Dream Fragments\n\nhttps://youtu.be/b6S1XaKrSrY", //20 
    "윌 (1페) - Diffraction\n\nhttps://youtu.be/MkXfT5oIfaU", //21 
    "윌 (2페) - Mirror Cage\n\nhttps://youtu.be/A6lfFa4eeVE", //22 
    "윌 (3페) - Blood Cage\n\nhttps://youtu.be/q-dGj9YuNzI", //23 
    "거대 괴수 더스크 - Dusk Hallucination\n\nhttps://youtu.be/viCU4NLisxg", //24 
    "진 힐라 - Depth of Pain\n\nhttps://youtu.be/K7gyp81bZ2c", //25 
    "친위대장 듄켈 - Subterminal Point\n\nhttps://youtu.be/IsHzWyOMJi0", //26 
    "검은 마법사 (1페) - Temple of Darkness\n\nhttps://youtu.be/jKVZx5i5rX8", //27 
    "검은 마법사 (2페) - Throne of Darkness\n\nhttps://youtu.be/PQy6nv5w8pI", //28 
    "검은 마법사 (3페) - World Horizon\n\nhttps://youtu.be/2Y0aWAXWpF8", //29 
    "검은 마법사 (4페) - Lost of Space\n\nhttps://youtu.be/fCkQhg2gfxc", //30 
    "반 레온 - Lion Heart\n\nhttps://youtu.be/_Iw_yvDJzZA", //31 
    "엘리트 보스 - Royal Guard\n\nhttps://youtu.be/ui4YM2l2i4o", //32 
    "스우 (1페) - Gravity Core\n\nhttps://youtu.be/c541-45Bcsk", //33 
    "스우 (2페) - Gravity Lord\n\nhttps://youtu.be/RU6nqBEyZr8", //34 
    "스우 (3페) - Gravity Lord Rise\n\nhttps://youtu.be/tackeb88f7A", //35 
    "데미안 (1페) - The Tragic Fate of Demian\n\nhttps://youtu.be/v8X_EFDxrjU", //36 
    "데미안 (2페) - Corrupted Blood\n\nhttps://youtu.be/O7HqrIQHDuY", //37 
    "반반 - Time Chaos\n\nhttps://youtu.be/kKLIRmO4PPo", //38 
    "피에르 - Joyful Tea Party\n\nhttps://youtu.be/2rMJrisBFJI", //39 
    "블러디 퀸 - Queen Palace\n\nhttps://youtu.be/LKxvLvnxWPc", //40  
    "벨룸 - Abyss Cave\n\nhttps://youtu.be/iU--7d3GLn8", //41  
    "감시자 칼로스 (1페) - Occupied Fortress\n\nhttps://youtu.be/Tr2DH10nKI8", //42  
    "감시자 칼로스 (2페) - Fury of the Watcher\n\nhttps://youtu.be/fwLnfRHqicI", //42  
];

bgm.getTownCode = function(townname){
    ret = -1;
    switch(townname){
        case "리스항구":
            ret = 0;
            break;
        case "헤네시스":
        case "헤네":
            ret = 1;
            break;
        case "헤네시스 시장":
        case "헤네시스시장":
        case "헤네시장":
        case "사우스페리":
            ret = 2;
            break;
        case "커닝시티":
        case "커닝":
            ret = 3;
            break;
        case "커닝시티 지하철":
        case "커닝시티지하철":
        case "지하철":
            ret = 4;
            break;
        case "커닝시티 게임방":
        case "커닝시티게임방":
        case "커닝시티 PC방":
        case "커닝시티PC방":
        case "게임방":
            ret = 5;
            break;
        case "비화원":
        case "듀얼블레이드마을":
        case "듀얼블레이드":
        case "듀블마을":
        case "듀블":
            ret = 6;
            break;
        case "엘리니아":
            ret = 7;
            break;
        case "노틸러스 선착장":
        case "노틸러스선착장":
        case "노틸러스":
            ret = 8;
            break;
        case "노틸러스 내부":
        case "노틸러스내부":
            ret = 9;
            break;
        case "페리온":
            ret = 10;
            break;
        case "유적 발굴지":
        case "유적발굴지":
            ret = 11;
            break;
        case "슬리피우드":
        case "슬피":
            ret = 12;
            break;
        case "파르템":
        case "패파":
            ret = 13;
            break;
        case "에우렐":
        case "메르세데스":
        case "메르":
        case "메세":
        case "엘프마을":
            ret = 14;
            break;
        case "루타비스":
            ret = 15;
            break;
        case "라무라무 온천":
        case "라무라무온천":
        case "가디언 엔젤 슬라임":
        case "가디언엔젤슬라임":
        case "가엔슬":
            ret = 16;
            break;
        case "플로리나 비치":
        case "플로리나비치":
            ret = 17;
            break;
        case "메이플 아일랜드":
        case "메이플아일랜드":
            ret = 18;
            break;
        case "리엔":
        case "아란":
            ret = 19;
            break;
        case "에레브":
        case "시그너스기사단":
        case "시그너스":
            ret = 20;
            break;
        case "오르비스":
        case "올비":
            ret = 21;
            break;
        case "오르비스행 비행선":
        case "오르비스행비행선":
        case "오르비스비행선":
        case "오르비스비행기":
        case "올비행비행선":
        case "올비행비행기":
            ret = 22;
            break;
        case "엘나스":
            ret = 23;
            break;
        case "아쿠아리움":
            ret = 24;
            break;
        case "베리타스":
        case "제논마을":
        case "제논":
            ret = 25;
            break;
        case "루디브리엄":
        case "루디":
            ret = 26;
            break;
        case "루디브리엄행 비행선":
        case "루디브리엄행비행선":
        case "루디브리엄행 비행기":
        case "루디브리엄행비행기":
        case "루디행 비행선":
        case "루디행비행선":
        case "루디행 비행기":
        case "루디행비행기":
            ret = 27;
            break;
        case "지구방위본부":
        case "지방":
            ret = 28;
            break;
        case "격납고":
            ret = 29;
            break;
        case "아랫마을":
            ret = 30;
            break;
        case "무릉":
            ret = 31;
            break;
        case "백초마을":
            ret = 32;
            break;
        case "아리안트":
            ret = 33;
            break;
        case "마가티아":
            ret = 34;
            break;
        case "고대도시 아스완":
        case "고대도시아스완":
        case "아스완":
            ret = 35;
            break;
        case "리프레":
            ret = 36;
            break;
        case "시간의 신전":
        case "시간의신전":
            ret = 37;
            break;
        case "파괴된 헤네시스":
        case "파괴된헤네시스":
        case "미래헤네시스":
            ret = 38;
            break;
        case "황혼의 페리온":
        case "황혼의페리온":
        case "미래페리온":
        case "황페":
            ret = 39;
            break;
        case "에델슈타인":
        case "에델":
        case "레지스탕스마을":
        case "레지스탕스":
        case "레지마을":
        case "레지":
            ret = 40;
            break;
        case "헤이븐":
            ret = 41;
            break;
        case "트뤼에페":
            ret = 42;
            break;
        case "더 시드 로비":
        case "더시드 로비":
        case "더시드로비":
        case "시드 로비":
        case "시드로비":
            ret = 43;
            break;
        case "소멸의 여로":
        case "소멸의여로":
        case "여로":
            ret = 44;
            break;
        case "리버스 시티":
        case "리버스시티":
        case "리버스":
            ret = 45;
            break;
        case "츄츄 아일랜드":
        case "츄츄아일랜드":
        case "츄츄":
            ret = 46;
            break;
        case "얌얌 아일랜드":
        case "얌얌아일랜드":
        case "얌얌":
            ret = 47;
            break;
        case "꿈의 도시 레헬른":
        case "꿈의도시 레헬른":
        case "꿈의도시레헬른":
        case "레헬른":
            ret = 48;
            break;
        case "신비의 숲 아르카나":
        case "신비의숲 아르카나":
        case "신비의숲아르카나":
        case "아르카나":
        case "알카":
            ret = 49;
            break;
        case "기억의 늪 모라스":
        case "기억의늪 모라스":
        case "기억의늪모라스":
        case "모라스":
            ret = 50;
            break;
        case "태초의 바다 에스페라":
        case "태초의바다 에스페라":
        case "태초의바다에스페라":
        case "에스페라":
        case "에페":
            ret = 51;
            break;
        case "셀라스, 별이 잠긴 곳":
        case "셀라스, 별이잠긴곳":
        case "셀라스,별이잠긴곳":
        case "셀라스 별이 잠긴 곳":
        case "셀라스 별이잠긴곳":
        case "셀라스별이잠긴곳":
        case "셀라스":
        case "셀라스(신버전)":
        case "셀라스신버전":
            ret = 52;
            break;
        case "셀라스, 별이 잠긴 곳 (구버전)":
        case "셀라스, 별이 잠긴 곳(구버전)":
        case "셀라스, 별이잠긴곳 (구버전)":
        case "셀라스, 별이잠긴곳(구버전)":
        case "셀라스,별이잠긴곳 (구버전)":
        case "셀라스,별이잠긴곳(구버전)":
        case "셀라스 별이 잠긴 곳(구버전)":
        case "셀라스 별이잠긴곳(구버전)":
        case "셀라스별이잠긴곳(구버전)":
        case "셀라스(구버전)":
        case "셀라스구버전":
            ret = 53;
            break;
        case "에레브 전초기지":
        case "에레브전초기지":
        case "전초기지":
            ret = 54;
            break;
        case "고통의 미궁":
        case "고통의미궁":
        case "미궁":
            ret = 55;
            break;
        case "리멘":
            ret = 56;
            break;
        case "신의 도시 세르니움":
        case "신의도시 세르니움":
        case "신의도시세르니움":
        case "세르니움":
        case "세전":
            ret = 57;
            break;
        case "해방된 에델슈타인":
        case "해방된에델슈타인":
        case "해방에델슈타인":
            ret = 58;
            break;
        case "호텔 아르크스":
        case "호텔아르크스":
        case "아르크스":
            ret = 59;
            break;
        case "판테온":
            ret = 60;
            break;
        case "판테온 대신전":
        case "판테온대신전":
            ret = 61;
            break;
        case "헬리시움 탈환 본부":
        case "헬리시움 탈환본부":
        case "헬리시움탈환본부":
        case "헬리시움":
            ret = 62;
            break;
        case "뾰족귀 여우마을":
        case "뾰족귀여우마을":
        case "은월마을":
        case "은월":
            ret = 63;
            break;
        case "비 오는 뾰족귀 여우마을":
        case "비 오는 뾰족귀여우마을":
        case "비오는 뾰족귀 여우마을":
        case "비오는 뾰족귀여우마을":
        case "비오는뾰족귀여우마을":
            ret = 64;
            break;
        case "새비지 터미널":
        case "새비지터미널":
            ret = 65;
            break;
        case "아쉴롬":
        case "일리움마을":
        case "일리움":
            ret = 66;
            break;
        case "크리스탈 아카데미아":
        case "크리스탈아카데미아":
        case "아카데미아":
            ret = 67;
            break;
        case "베르딜":
        case "아크마을":
        case "아크":
            ret = 68;
            break;
        case "청운골":
        case "호영마을":
        case "호영":
            ret = 69;
            break;
        case "리스토니아":
        case "아델마을":
        case "아델":
            ret = 70;
            break;
        case "툴렌시티":
        case "툴렌":
        case "카인마을":
        case "카인":
            ret = 71;
            break;
        case "나린":
        case "라라마을":
        case "라라":
            ret = 72;
            break;
        case "거울세계 리프레":
        case "거울세계리프레":
        case "거울리프레":
        case "제로 리프레":
        case "제로리프레":
            ret = 73;
            break;
        case "거울세계 아리안트":
        case "거울세계아리안트":
        case "거울아리안트":
        case "제로 아리안트":
        case "제로아리안트":
            ret = 74;
            break;
        case "거울세계 헤네시스":
        case "거울세계 헤네":
        case "거울세계헤네시스":
        case "거울세계헤네":
        case "거울헤네시스":
        case "거울헤네":
        case "제로 헤네시스":
        case "제로 헤네":
        case "제로헤네시스":
        case "제로헤네":
            ret = 75;
            break;
        case "거울세계 무릉도원":
        case "거울세계 무릉":
        case "거울세계무릉도원":
        case "거울세계무릉":
        case "거울무릉도원":
        case "거울무릉":
        case "제로무릉도원":
        case "제로무릉":
        case "제로 무릉도원":
        case "제로 무릉":
            ret = 76;
            break;
        case "거울세계 에델슈타인":
        case "거울세계에델슈타인":
        case "거울에델슈타인":
        case "제로 에델슈타인":
        case "제로에델슈타인":
            ret = 77;
            break;
        case "거울세계 마가티아":
        case "거울세계마가티아":
        case "거울마가티아":
        case "제로 마가티아":
        case "제로마가티아":
            ret = 78;
            break;
        case "거울세계 루디브리엄":
        case "거울세계 루디":
        case "거울세계루디브리엄":
        case "거울세계루디":
        case "거울루디브리엄":
        case "거울루디":
        case "제로 루디브리엄":
        case "제로 루디":
        case "제로루디브리엄":
        case "제로루디":
            ret = 79;
            break;
        case "거울세계 시간의 신전":
        case "거울세계 시간의신전":
        case "거울세계시간의 신전":
        case "거울세계시간의신전":
        case "거울시간의 신전":
        case "거울시간의신전":
        case "제로 시간의 신전":
        case "제로 시간의신전":
        case "제로시간의 신전":
        case "제로시간의신전":
            ret = 80;
            break;
        case "불타는 세르니움":
        case "불타는세르니움":
        case "불세르니움":
        case "불르니움":
        case "세후":
            ret = 81;
            break;
        case "멈추지 않는 탑, 카로테":
        case "멈추지않는 탑, 카로테":
        case "멈추지않는탑, 카로테":
        case "멈추지않는탑,카로테":
        case "멈추지 않는 탑 카로테":
        case "멈추지않는 탑 카로테":
        case "멈추지않는탑 카로테":
        case "멈추지않는탑카로테":
        case "카로테":
            ret = 82;
            break;
        case "카로테 마천루":
        case "카로테마천루":
        case "마천루":
            ret = 83;
            break;
    }
    return ret;
};
var BGMtown = [
    "리스항구 - Above the Treetops\n\nhttps://youtu.be/F6LIFBVhObQ", //0
    "헤네시스 - Floral Life\n\nhttps://youtu.be/s2_MAplvHeQ", //1
    "사우스페리/헤네시스 시장 - Go Picnic\n\nhttps://youtu.be/WUuawkZR0s0", //2
    "커닝시티 - Bad Guys\n\nhttps://youtu.be/uv8QObpL2EY", //3
    "커닝시티 지하철 - Subway\n\nhttps://youtu.be/J1YTQvtmsjg", //4
    "커닝시티게임방 - Play With Me\n\nhttps://youtu.be/3Wwk2CDkV44", //5
    "비화원 - Secret Flower\n\nhttps://youtu.be/C0xN8QcxqXk", //6
    "엘리니아 - When the Morning Comes\n\nhttps://youtu.be/gfgBDs8z6WE", //7
    "노틸러스 선착장 - Nautilus\n\nhttps://youtu.be/iZaVKkfuD6s", //8
    "노틸러스 내부 - In Nautilus\n\nhttps://youtu.be/eZ8LtJlzvyU", //9
    "페리온 - Nightmare\n\nhttps://youtu.be/9lwOsX763N0", //10
    "유적 발굴지 - Ancient Remain\n\nhttps://youtu.be/5IxL4RH5CGg", //11
    "슬리피우드 - Sleepywood\n\nhttps://youtu.be/tWCWIhA3XQw", //12
    "파르템 - The Village of Karupa\n\nhttps://youtu.be/V_6Q-UE4Feo", //13
    "에우렐 - Wind and Flower\n\nhttps://youtu.be/5gxVQPSbkJw", //14
    "루타비스 - Yggdrasil Prayer\n\nhttps://youtu.be/ReqTSo2ervs", //15
    "라무라무 온천 - Welcome to Ramuramu Valley\n\nhttps://youtu.be/OkBhkoBvtYY", //16
    "플로리나 비치 - Beach Way\n\nhttps://youtu.be/_gIvEdxeOZc", //17
    "메이플 아일랜드 - Maple Leaf\n\nhttps://youtu.be/9D7nLxP4w9A", //18
    "리엔 - Rien Village\n\nhttps://youtu.be/YDfIfL_Fxec", //19
    "에레브 - Queen's Garden\n\nhttps://youtu.be/cCCKJ2ir9cE", //20
    "오르비스 - Shinin' Harbor\n\nhttps://youtu.be/DThWMbPZXy8", //21
    "오르비스행 비행선 - Upon the Sky\n\nhttps://youtu.be/fTYJEdEcTbA", //22
    "엘나스 - Snowy Village\n\nhttps://youtu.be/X6X7U5V9Obk", //23
    "아쿠아리움 - Aquarium\n\nhttps://youtu.be/qtw0sIBLjrw", //24
    "베리타스 - In All Verity\n\nhttps://youtu.be/vViTIGuujaY", //25
    "루디브리엄 - Fantastic Thinking\n\nhttps://youtu.be/49AZqVhXVeU", //26
    "루디브리엄행 비행선 - Flying in a Blue Dream\n\nhttps://youtu.be/UywGQsCoj8c", //27
    "지구방위본부 - Let's March\n\nhttps://youtu.be/LxQt8EVhBOs", //28
    "격납고 - For The Glory\n\nhttps://youtu.be/aSTjTjakW8s", //29
    "아랫마을 - Down Town\n\nhttps://youtu.be/KK_IjvtszTA", //30
    "무릉 - Mureung Hill\n\nhttps://youtu.be/HymHgrt-oy0", //31
    "백초마을 - White Herb\n\nhttps://youtu.be/59oze7IkQ10", //32
    "아리안트 - Ariant\n\nhttps://youtu.be/w1RgDSoOajw", //33
    "마가티아 - Dispute\n\nhttps://youtu.be/5FDFLwPw0bU", //34
    "고대도시 아스완 - Rusty Throne\n\nhttps://youtu.be/XhbKFnWl9R8", //35
    "리프레 - Leafre\n\nhttps://youtu.be/theIdIhZzVE", //36
    "시간의 신전 - Temple of Time\n\nhttps://youtu.be/6uCaEDM-Kf8", //37
    "파괴된 헤네시스 - Destruction Town\n\nhttps://youtu.be/fM0ZfX9zkL4", //38
    "황혼의 페리온 - Destruction Perion Shelter\n\nhttps://youtu.be/gnVoHyAt5ko", //39
    "에델슈타인 - Edelstein City\n\nhttps://youtu.be/NqwqmXbGpqc", //40
    "헤이븐 - Haven\n\nhttps://youtu.be/GgTVmLfhYnA", //41
    "트뤼에페 - In Ruin In Vain\n\nhttps://youtu.be/D-suBwdKHB8", //42
    "더 시드 로비 - Venture into the Unknown\n\nhttps://youtu.be/qr9eW2y2EJM", //43
    "소멸의 여로 - Lake of Oblivion\n\nhttps://youtu.be/FRE_LgKOMoM", //44
    "리버스 시티 - Reverse City\n\nhttps://youtu.be/Z5sInHxNTRg", //45
    "츄츄 아일랜드 - Expedition To Chew Chew Island\n\nhttps://youtu.be/ytlI6la4p3E", //46
    "얌얌 아일랜드 - Mushbud Forest\n\nhttps://youtu.be/TD0abMaS0Sk", //47
    "꿈의 도시 레헬른 - Lacheln, The City Of Dreams\n\nhttps://youtu.be/1R4JhiW20Vs", //48
    "신비의 숲 아르카나 - The Tune of The Azure Light(Orchestra Ver.)\n\nhttps://youtu.be/RHWEFgc95Rc", //49
    "기억의 늪 모라스 - Memory of Kritias\n\nhttps://youtu.be/mKTg64ICSMk", //50
    "태초의 바다 에스페라 - A Place Where Life Begins\n\nhttps://youtu.be/39tjFNnNW_A", //51
    "셀라스, 별이 잠긴 곳 - Where Stars Rest ver.B\n\nhttps://youtu.be/z-HEEL4sf34", //52
    "셀라스, 별이 잠긴 곳(구버전) - Where Stars Rest\n\nhttps://youtu.be/4WcaAn7AM0w", //53
    "에레브 전초기지 - Outpost\n\nhttps://youtu.be/LrUQTZEWw3g", //54
    "고통의 미궁 - Secret Labyrinth\n\nhttps://youtu.be/g-vKI79H6u8", //55
    "리멘 - Tears of The World\n\nhttps://youtu.be/IUNjL25D8iI", //56
    "신의 도시 세르니움 - The Holy Land\n\nhttps://youtu.be/1KJ7-FUvHYk", //57
    "해방된 에델슈타인 - Liberated Edelstein City\n\nhttps://youtu.be/pJsS1uwdWrE", //58
    "호텔 아르크스 - Welcome To Arcs Hotel\n\nhttps://youtu.be/fxBujbnI5Z4", //59
    "판테온 - Pantheon\n\nhttps://youtu.be/ZYeUnqsCnxg", //60
    "판테온 대신전 - Great Temple\n\nhttps://youtu.be/CZTQdmJAEQI", //61
    "헬리시움 탈환 본부 - Retake\n\nhttps://youtu.be/CuoeZkWgDjk", //62
    "뾰족귀 여우마을 - Fox Village\n\nhttps://youtu.be/lorm88ckSuM", //63
    "비 오는 뾰족귀 여우마을 - Sad Fox Village\n\nhttps://youtu.be/4oNXYkRrf-g", //64
    "새비지 터미널 - Savage Terminal\n\nhttps://youtu.be/WQe8xVi-BQY", //65
    "아쉴롬 - Asylum\n\nhttps://youtu.be/l0GtwHlgw7w", //66
    "크리스탈 아카데미아 - Crystal Academia\n\nhttps://youtu.be/moCj67e0mII", //67
    "베르딜 - Verdel Town\n\nhttps://youtu.be/XxeOp93B58g", //68
    "청운골 - Cheong Un\n\nhttps://youtu.be/d_OKoEWaXo4", //69
    "리스토니아 - Romantic Sunset\n\nhttps://youtu.be/HM5WTDbZCFc", //70
    "툴렌시티 - Toolen City\n\nhttps://youtu.be/orEcsHwnYKs", //71
    "나린 - Wonderful Moments In Narin\n\nhttps://youtu.be/DwQ8zXlOYjs", //72
    "거울세계 리프레 - Leafre In Mirror\n\nhttps://youtu.be/De3iUHlYZpo", //73
    "거울세계 아리안트 - Ariant In Mirror\n\nhttps://youtu.be/LX45_JayZQA", //74
    "거울세계 헤네시스 - Floral Life In Mirror\n\nhttps://youtu.be/Yzz8y-F8BaQ", //75
    "거울세계 무릉도원 - Mureung Hill In Mirror\n\nhttps://youtu.be/w7qdOGixuX0", //76
    "거울세계 에델슈타인 - Edelstein City In Mirror\n\nhttps://youtu.be/-x-sbvuqfbE", //77
    "거울세계 마가티아 - Dispute In Mirror\n\nhttps://youtu.be/57jURcOf930", //78
    "거울세계 루디브리엄 - Fantastic Thinking In Mirror\n\nhttps://youtu.be/qHgtsdnPkx0", //79
    "거울세계 시간의 신전 - Time Temple In Mirror\n\nhttps://youtu.be/xVY16wiTTPA", //80
    "불타는 세르니움 - Burning City\n\nhttps://youtu.be/ML5_pLW-MSc", //81
    "멈추지 않는 탑, 카로테 - Once Upon a Time in Karotte\n\nhttps://youtu.be/MN9OrjESFgA", //82
    "카로테 마천루 - Preparation for Breakthrough\n\nhttps://youtu.be/-lWcKfl9FfE", //83
    " - \n\n", //74
    " - \n\n", //75
    " - \n\n", //76
    " - \n\n", //77
    " - \n\n", //78
    " - \n\n", //79
];

bgm.getJobcode = function(jobname){
    ret = -1;
    switch(jobname){
        case "모험가 애니메이션 인트로":
        case "모험가애니메이션인트로":
        case "모험가 인트로":
        case "모험가인트로":
        case "모험가":
            ret = 0;
            break;
        case "패스파인더 튜토리얼":
        case "패스파인더튜토리얼":
        case "패스파인더 튜토":
        case "패스파인더튜토":
        case "패파 튜토리얼":
        case "패파 튜토":
        case "패파튜토리얼":
        case "패파튜토":
        case "패스파인더":
        case "패파":
            ret = 1;
            break;
        case "패스파인더 하이퍼 스킬 '렐릭 에볼루션'":
        case "패스파인더 하이퍼 스킬 '렐릭에볼루션'":
        case "패스파인더 하이퍼스킬 '렐릭 에볼루션'":
        case "패스파인더 하이퍼스킬 '렐릭에볼루션'":
        case "패스파인더하이퍼스킬 '렐릭 에볼루션'":
        case "패스파인더하이퍼스킬 '렐릭에볼루션'":
        case "패스파인더하이퍼스킬'렐릭에볼루션'":
        case "패스파인더하이퍼스킬 렐릭 에볼루션":
        case "패스파인더하이퍼스킬 렐릭에볼루션":
        case "패스파인더하이퍼스킬렐릭에볼루션":
        case "패스파인더 하이퍼 스킬":
        case "패스파인더 하이퍼스킬":
        case "패스파인더하이퍼스킬":
        case "패스파인더 렐릭 에볼루션":
        case "패스파인더 렐릭에볼루션":
        case "패스파인더렐릭에볼루션":
        case "패파 렐릭 에볼루션":
        case "패파 렐릭에볼루션":
        case "패파렐릭에볼루션":
        case "렐릭 에볼루션":
        case "렐릭에볼루션":
        case "패스파인더 스킬":
        case "패스파인더스킬":
        case "패파 스킬":
        case "패파스킬":
            ret = 2;
            break;
        case "나이트워커 하이퍼 스킬 '도미니언'":
        case "나이트워커 하이퍼스킬 '도미니언'":
        case "나이트워커하이퍼스킬 '도미니언'":
        case "나이트워커하이퍼스킬'도미니언'":
        case "나이트워커하이퍼스킬도미니언":
        case "나이트워커 하이퍼 스킬":
        case "나이트워커 하이퍼스킬":
        case "나이트워커하이퍼스킬":
        case "나이트워커 스킬":
        case "나이트워커스킬":
        case "나워 하이퍼스킬":
        case "나이트워커 도미니언":
        case "나이트워커도미니언":
        case "나워 도미니언":
        case "나워도미니언":
        case "도미니언":
            ret = 3;
            break;
        case "데몬 튜토리얼":
        case "데몬 튜토":
        case "데몬튜토리얼":
        case "데몬튜토":
        case "데몬 슬레이어":
        case "데몬슬레이어":
        case "데몬어벤져":
        case "데몬":
            ret = 4;
            break;
        case "제논 튜토리얼":
        case "제논 튜토":
        case "제논튜토리얼":
        case "제논튜토":
        case "제논":
            ret = 5;
            break;
        case "아란 튜토리얼":
        case "아란 튜토":
        case "아란튜토리얼":
        case "아란튜토":
        case "아란":
            ret = 6;
            break;
        case "에반 튜토리얼":
        case "에반 튜토":
        case "에반튜토리얼":
        case "에반튜토":
        case "에반":
            ret = 7;
            break;
        case "메르세데스 튜토리얼":
        case "메르세데스 튜토":
        case "메르세데스튜토리얼":
        case "메르세데스튜토":
        case "메르세데스":
        case "메르":
        case "메세":
            ret = 8;
            break;
        case "은월 튜토리얼":
        case "은월 튜토":
        case "은월튜토리얼":
        case "은월튜토":
        case "은월":
            ret = 9;
            break;
        case "팬텀 튜토리얼":
        case "팬텀 튜토":
        case "팬텀튜토리얼":
        case "팬텀튜토":
        case "팬텀":
            ret = 10;
            break;
        case "크리스탈 가든":
        case "크리스탈가든":
        case "팬텀 홈 타운":
        case "팬텀 홈타운":
        case "팬텀홈타운":
            ret = 11;
            break;
        case "크리스탈 가든 비행 중":
        case "크리스탈 가든 비행중":
        case "크리스탈가든 비행중":
        case "크리스탈가든비행중":
        case "크리스탈 가든 비행":
        case "크리스탈가든 비행":
        case "크리스탈가든비행":
            ret = 12;
            break;
        case "루미너스 튜토리얼":
        case "루미 튜토리얼":
        case "루미너스 튜토":
        case "루미 튜토":
        case "루미너스튜토리얼":
        case "루미튜토리얼":
        case "루미너스튜토":
        case "루미튜토":
        case "루미너스":
        case "루미":
            ret = 13;
            break;
        case "루미너스 홈 타운(라니아의 숲)":
        case "루미너스 홈타운(라니아의 숲)":
        case "루미너스홈타운(라니아의 숲)":
        case "루미너스홈타운(라니아의숲)":
        case "루미너스 홈 타운":
        case "루미너스 홈타운":
        case "루미 홈 타운":
        case "루미 홈타운":
        case "루미홈타운":
        case "라니아의숲":
        case "라니아":
            ret = 14;
            break;
        case "세레니티":
            ret = 15;
            break;
        case "카이저 튜토리얼":
        case "카이저 튜토":
        case "카이저튜토리얼":
        case "카이저튜토":
        case "카이저":
            ret = 16;
            break;
        case "엔젤릭버스터의 방":
        case "엔젤릭버스터의방":
        case "엔젤릭버스터방":
        case "엔젤릭버스터":
            ret = 17;
            break;
        case "엔젤릭버스터 5차 스킬 '스포트라이트'":
        case "엔젤릭버스터 5차 스킬 스포트라이트":
        case "엔젤릭버스터 5차 스킬":
        case "엔젤릭버스터 5차스킬":
        case "엔젤릭버스터5차스킬":
        case "엔젤릭버스터 5차":
        case "엔젤릭버스터5차":
        case "엔버 5차":
        case "엔버5차":
        case "엔버 스포트라이트":
        case "엔버스포트라이트":
        case "스포트라이트":
        case "스포트☆라이트":
        case "스포트★라이트":
        case "SpotLight":
            ret = 18;
            break;
        case "카인 5차 스킬 '타나토스 디센트'":
        case "카인 5차 스킬 '타나토스디센트'":
        case "카인 5차스킬 '타나토스디센트'":
        case "카인5차스킬 '타나토스디센트'":
        case "카인5차스킬'타나토스디센트'":
        case "카인5차스킬 타나토스디센트":
        case "카인5차스킬타나토스디센트":
        case "카인 5차 스킬":
        case "카인 5차스킬":
        case "카인 5차":
        case "카인5차":
        case "카인 타나토스디센트":
        case "카인타나토스디센트":
        case "타나토스디센트":
        case "타나토스":
            ret = 19;
            break;
        case "카인 튜토리얼":
        case "카인 튜토":
        case "카인튜토리얼":
        case "카인튜토":
        case "카인":
            ret = 20;
            break;
        case "일리움 각성":
        case "일리움각성":
        case "일리움":
            ret = 21;
            break;
        case "일리움 3차 스킬 '크리스탈 스킬: 글로리 윙'":
        case "일리움 3차 스킬 크리스탈 스킬: 글로리 윙":
        case "일리움 3차 스킬 크리스탈 스킬: 글로리윙":
        case "일리움 3차 스킬 크리스탈스킬: 글로리윙":
        case "일리움 3차 스킬":
        case "일리움 3차스킬":
        case "일리움3차스킬":
        case "일리움 3차":
        case "일리움 글로리 윙":
        case "일리움 글로리윙":
        case "일리움글로리윙":
        case "글로리 윙":
        case "글로리윙":
            ret = 22;
            break;
        case "아크 운명의 날":
        case "아크 운명의날":
        case "아크운명의날":
        case "아크 운명":
        case "아크운명":
            ret = 23;
            break;
        case "아크 과거 회상":
        case "아크 과거회상":
        case "아크과거회상":
        case "아크 과거":
        case "아크과거":
        case "아크":
            ret = 24;
            break;
        case "아델 각성":
        case "아델각성":
        case "아델":
            ret = 25;
            break;
        case "아델 5차 스킬 '인피니트'":
        case "아델 5차 스킬 인피니트":
        case "아델 5차스킬 인피니트":
        case "아델5차스킬 인피니트":
        case "아델5차스킬인피니트":
        case "아델 5차 스킬":
        case "아델 5차스킬":
        case "아델5차스킬":
        case "아델 5차":
        case "아델5차":
        case "아델 인피니트":
        case "아델인피니트":
        case "인피니트":
        case "인피":
            ret = 26;
            break;
        case "호영 테마곡":
        case "호영테마곡":
        case "호영 테마":
        case "호영테마":
        case "호영":
            ret = 27;
            break;
        case "호영 5차 스킬 '선기: 강림 괴력난신'":
        case "호영 5차 스킬 선기: 강림 괴력난신":
        case "호영 5차스킬 선기: 강림 괴력난신":
        case "호영5차스킬 선기: 강림 괴력난신":
        case "호영5차스킬 선기: 강림괴력난신":
        case "호영5차스킬 선기:강림괴력난신":
        case "호영 5차 스킬":
        case "호영 5차스킬":
        case "호영5차스킬":
        case "호영 5차":
        case "호영5차":
        case "호영 괴력난신":
        case "호영괴력난신":
        case "괴력난신":
            ret = 28;
            break;
        case "라라 테마곡":
        case "라라테마곡":
        case "라라 테마":
        case "라라테마":
        case "라라":
            ret = 29;
            break;
        case "라라 하이퍼 스킬 '아름드리 나무'":
        case "라라 하이퍼 스킬 아름드리 나무":
        case "라라 하이퍼 스킬 아름드리나무":
        case "라라 하이퍼스킬 아름드리나무":
        case "라라하이퍼스킬 아름드리나무":
        case "라라하이퍼스킬아름드리나무":
        case "라라 하이퍼 스킬":
        case "라라 하이퍼스킬":
        case "라라하이퍼스킬":
        case "라라 하이퍼":
        case "라라하이퍼":
        case "라라 아름드리 나무":
        case "라라 아름드리나무":
        case "라라아름드리나무":
        case "아름드리 나무":
        case "아름드리나무":
            ret = 30;
            break;
        case "제로 그림자 기사단":
        case "제로 그림자기사단":
        case "제로그림자기사단":
        case "그림자 기사단":
        case "그림자기사단":
            ret = 31;
            break;
        case "제로의 신전":
        case "제로의신전":
        case "제로 신전":
        case "제로신전":
        case "제로 홈 타운":
        case "제로 홈타운":
        case "제로홈타운":
        case "제로":
            ret = 32;
            break;
        case "키네시스 테마곡":
        case "키네시스테마곡":
        case "키네시스 테마":
        case "키네시스테마":
        case "키네시스":
        case "키네 테마곡":
        case "키네테마곡":
        case "키네 테마":
        case "키네테마":
        case "키네":
            ret = 33;
            break;
        case "키네시스 하이퍼 스킬 '싸이킥 오버'":
        case "키네시스 하이퍼 스킬 싸이킥 오버":
        case "키네시스 하이퍼 스킬 싸이킥오버":
        case "키네시스 하이퍼스킬 싸이킥 오버":
        case "키네시스 하이퍼스킬 싸이킥오버":
        case "키네시스하이퍼스킬 싸이킥 오버":
        case "키네시스하이퍼스킬 싸이킥오버":
        case "키네시스하이퍼스킬싸이킥오버":
        case "키네시스 하이퍼 싸이킥 오버":
        case "키네시스 하이퍼 싸이킥오버":
        case "키네시스하이퍼 싸이킥오버":
        case "키네시스하이퍼싸이킥오버":
        case "키네시스 싸이킥 오버":
        case "키네시스 싸이킥오버":
        case "키네시스싸이킥오버":
        case "싸이킥 오버":
        case "싸이킥오버":
            ret = 34;
            break;
    }
    return ret;
};
var BGMjob = [
    "모험가 애니메이션 인트로 - Go! Fight! Show your Energy!(vocal ver.)\n\nhttps://youtu.be/mQOc5IaWrlw", //0
    "패스파인더 튜토리얼, 사념의 방 - Pathfinder\n\nhttps://youtu.be/csey8nFNifU", //1
    "패스파인더 하이퍼 스킬 '렐릭 에볼루션' - Pathfinder: Relic Evolution\n\nhttps://www.youtube.com/watch?v=ZaNV4dAHSdU", //2
    "나이트워커 하이퍼 스킬 '도미니언' - Dominion\n\nhttps://youtu.be/Or2OSeGbPV0", //3
    "데몬 튜토리얼 - Despair in Devil\n\nhttps://youtu.be/e-USJPLjJQ4", //4
    "제논 튜토리얼 - From Under to Upper\n\nhttps://youtu.be/6qjUzKeTpOo", //5
    "아란 튜토리얼 - Final Fight\n\nhttps://youtu.be/rEtDrkAYs68", //6
    "에반 튜토리얼 - Dragon Dream\n\nhttps://youtu.be/mM_27SaY7tE", //7
    "메르세데스 튜토리얼 - Flower in Blue\n\nhttps://youtu.be/SwDcv_pK_Mo", //8
    "은월 튜토리얼 - Decision\n\nhttps://youtu.be/fajX5WR07mw", //9
    "팬텀 튜토리얼 - Injustice\n\nhttps://youtu.be/Dt4hq7RKhsA", //10
    "크리스탈 가든 - Fly to the Moon\n\nhttps://youtu.be/ZpVpjZJyDJA", //11
    "크리스탈 가든 비행 중 - Dancing with the Moon\n\nhttps://youtu.be/E7wxS2y6h6M", //12
    "루미너스 튜토리얼 - Final Fight\n\nhttps://youtu.be/R5dUCq4vnvk", //13
    "루미너스 홈 타운(라니아의 숲) - Peaceful Woods\n\nhttps://youtu.be/6BqN9qhPoGQ", //14
    "세레니티 - Serenity\n\nhttps://youtu.be/bDKPdN8rUko", //15
    "카이저 튜토리얼 - Step of Kaiser, Trapped Kaiser\n\nhttps://youtu.be/r05cGa1Jms0\nhttps://youtu.be/TNcUGCElU40", //16
    "엔젤릭버스터의 방 - Angel's Room\n\nhttps://youtu.be/EC56KZErScE", //17
    "엔젤릭버스터 5차 스킬 '스포트라이트' - \n\nhttps://youtu.be/njzZP2857Yc", //18
    "카인 5차 스킬 '타나토스 디센트' - \n\nhttps://youtu.be/tmK38bSySZ0", //19
    "카인 튜토리얼 - Doubt You\n\nhttps://youtu.be/8IlOrHqe7Do", //20
    "일리움 각성 - Illium Rebirth\n\nhttps://youtu.be/wb7ycqo8WAw", //21
    "일리움 3차 스킬 '크리스탈 스킬: 글로리 윙' - Glory Wing\n\nhttps://youtu.be/W_7Rx3xW7as", //22
    "아크 운명의 날 - Doomsday (Full)\n\nhttps://youtu.be/YJ134tZGnSs", //23
    "아크 과거 회상 - Recollecting Memories\n\nhttps://youtu.be/nbTpKL1RUE4", //24
    "아델 각성 - Adele's Oath\n\nhttps://youtu.be/CHHMxYwvVbI", //25
    "아델 5차 스킬 '인피니트' - 5th Adele's Oath Infinite\n\nhttps://youtu.be/U2YERB4MjQ8", //26
    "호영 테마곡 - Riding on the clouds\n\nhttps://youtu.be/6pV7GPXgfCg", //27
    "호영 5차 스킬 '선기: 강림 괴력난신' - Riding on the clouds God Coming\n\nhttps://youtu.be/QlAMEnsw7Wc", //28
    "라라 테마곡 - Life Is Full Of Happiness\n\nhttps://youtu.be/FtDyxkzpFes", //29
    "라라 하이퍼 스킬 '아름드리 나무' - Hyper Life Is Full Of Happiness\n\nhttps://youtu.be/FjGPY1ChtAA", //30
    "제로 그림자 기사단 - Shadow Knight\n\nhttps://youtu.be/TAzZTAiIrXI", //31
    "제로의 신전 - Be Born Zero\n\nhttps://youtu.be/_U9ZsV_XAQk", //32
    "키네시스 테마곡 - Kinesis Theme I, II\n\nhttps://youtu.be/U37EVkJNiSk\nhttps://youtu.be/MmWrqpV7f0Q", //33
    "키네시스 하이퍼 스킬 '싸이킥 오버' - Kinesis Theme Skill\n\nhttps://youtu.be/I1KQv48Y34U", //34
    " - \n\n", //35
    " - \n\n", //36
    " - \n\n", //37
    " - \n\n", //38
    " - \n\n", //39
];
module.exports = bgm;