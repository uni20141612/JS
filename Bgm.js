const bgm = {};

bgm.getBGM = function(msg){
    var rep = "";
    var bgmlist = msg.split(" ")[1];
    var bgmname = "";
    if(bgmlist == undefined){ rep = "듣고싶은 BGM의 종류를 입력해주세요. BGM이름을 생략하면 해당 종류에 수록된 목록을 보여줍니다.\n\n종류 목록: 보스, 마을";}
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
                else{ rep = bgmname + " >> 해당하는 보스가 목록에 없습니다. [!브금 보스]를 입력하여 목록을 확인해주세요."; }
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
                else{ rep = bgmname + " >> 해당하는 마을이 목록에 없습니다. [!브금 마을]을 입력하여 목록을 확인해주세요."}
            }
        }
        else{
            rep = "현재 존재하지 않는 BGM종류입니다. 확인 후 다시 입력해주세요.\n\n현재 입력 가능 종류 목록 : 보스, 마을";
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
        case "":
            ret = 40;
            break;
        case "":
            ret = 41;
            break;
        case "":
            ret = 42;
            break;
        case "":
            ret = 43;
            break;
        case "":
            ret = 44;
            break;
        case "":
            ret = 45;
            break;
        case "":
            ret = 46;
            break;
        case "":
            ret = 47;
            break;
        case "":
            ret = 48;
            break;
        case "":
            ret = 49;
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
    "에델슈타인 - \n\n", //40
    "헤이븐 - \n\n", //41
    "트뤼에페 - \n\n", //42
    "더 시드 로비 - \n\n", //43
    " - \n\n", //44
    " - \n\n", //45
    " - \n\n", //46
    " - \n\n", //47
    " - \n\n", //48
    " - \n\n", //49
    " - \n\n", //50
    " - \n\n", //51
    " - \n\n", //52
    " - \n\n", //53
    " - \n\n", //54
    " - \n\n", //55
    " - \n\n", //56
    " - \n\n", //57
    " - \n\n", //58
    " - \n\n", //59
    " - \n\n", //50
    " - \n\n", //51
    " - \n\n", //52
    " - \n\n", //53
    " - \n\n", //54
    " - \n\n", //55
    " - \n\n", //56
    " - \n\n", //57
    " - \n\n", //58
    " - \n\n", //59
    " - \n\n", //60
    " - \n\n", //61
    " - \n\n", //62
    " - \n\n", //63
    " - \n\n", //64
    " - \n\n", //65
    " - \n\n", //66
    " - \n\n", //67
    " - \n\n", //68
    " - \n\n", //69
    " - \n\n", //70
    " - \n\n", //71
    " - \n\n", //72
    " - \n\n", //73
    " - \n\n", //74
    " - \n\n", //75
    " - \n\n", //76
    " - \n\n", //77
    " - \n\n", //78
    " - \n\n", //79
];
module.exports = bgm;