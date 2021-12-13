const help = {};

help.gethelp = function(){
    var help = "<--봇 도움말-->   ";
    help += "() -> 필수 입력 / [] -> 생략 가능\n\n";
    help += "!봇업데이트/!봇업뎃 : 최근 봇 업데이트 내역 \n\n";
    help += "!보스 (보스이름) : 보스 레벨, 체력, 방어율, 포스, 결정석가격을 보여줍니다.\n(보스이름)에 '목록'을 입력하면 각 보스별 인식 키워드 목록을 보여줍니다.\n난이도 생략시 노멀난이도를 우선합니다.\n결정석 가격은 변동패치전 최초 기준 가격입니다. 자세한 변동내역은 !결정석을 참조해주세요.\n\n";
    help += "!결정석 (보스이름) : 보스의 결정석 가격과 변동 현황을 보여줍니다.\n\n"
    help += "!경험치 (시작레벨) [끝레벨] : 시작레벨부터 끝레벨까지 필요한 경험치량, 끝레벨 생략시 그 레벨 경험치통을 보여줍니다.\n\n";
    help += "!캐릭터/!정보/ !무릉,!시드랭킹,!유니온,!업적,!코디,!길드 + (캐릭터명) : 메이플지지 기준 캐릭터 관련 정보를 보여줍니다.\n\n";
    help += "!무릉 (층수) : 1~80사이의 숫자를 넣으면 해당 층수의 몬스터 정보를 보여줍니다.\n\n";
    help += "!날씨 (지역) : 그 지역 날씨를 보여줍니다. \n\n";
    help += "!한강 : 한강 물 온도를 보여줍니다. \n\n";
    help += "!갱신 (캐릭터이름) : 메이플지지를 갱신합니다.\n\n";
    help += "!방무 (몬스터 방어율) (현재 방어율) [추가 방어율1] [추가방어율2] ... : 총 방어율과 예상 딜량을 계산하여 보여줍니다.\n\n";
    help += "!데굴데굴/!데굴/!주사위 : 추억의 주사위 돌리기!\n\n";
    help += "!강환/!강환불/!영환/!영환불 (렙제) [횟수] : \n 150, 160, 200제 방어구, 장신구의 추가옵션을 횟수만큼 돌립니다. \n횟수는 5이하 숫자만 가능하며 생략시 1회만 돌립니다.\n\n";
    help += "!경스토리/!겸스토리 (캐릭터이름) : 캐릭터의 경험치 히스토리를 보여줍니다.\n\n";
    help += "!렙스토리/!레벨스토리 (캐릭터이름) : 캐릭터의 레벨 히스토리를 보여줍니다.\n\n";
    help += "!(직업이름) : 간단한 직업 설명과 그 직업의 무적기/뎀감기/바인드 보유 여부와 유니온 공격대원 효과, 링크스킬을 보여줍니다.\n\n";
    help += "!썬데이/!선데이 : 그 주의 썬데이메이플을 보여줍니다. (관리자가 직접 업데이트 하여야 하므로 정확하지 않을 수 있습니다.)\n\n";
    help += "!업데이트/!업뎃 : 현재 기준 가장 최근의 업데이트 글의 제목과 주소를 보여줍니다.\n\n";
    help += "!추옵/!추가옵션 (무기이름) : 각 무기에 해당하는 추가옵션표를 보여줍니다. 괄호 안에는 순수 무기공격력이 들어갑니다. (순서 : 우트가르드, 파프니르, 앱솔랩스, 아케인셰이드, 제네시스)\n무기이름 대신 그 무기를 사용하는 직업(전용무기가 아닌 경우엔 나오지 않을 수 있음)을 적어도 됩니다.\n\n";
    help += "!그님티 (롤닉네임) : 해당 아이디의 티어를 보여줍니다.\n\n";
    help += "!로얄 [횟수] : 지정한 횟수만큼의 로얄스타일 시뮬레이션을 보여줍니다. 횟수는 최대 5000까지 설정할수 있습니다. 횟수를 생략할 시 1회만 시뮬레이션 합니다.\n(횟수)에 '확률' 또는 '확률표'를 입력하면 현재 로얄스타일의 확률표를 보여줍니다.\n\n";
    help += "!뽑기/!하나만 (단어1) (단어2) [단어3] ... : 띄어쓰기로 구분된 단어들 중에서 하나를 골라 결과로 보여줍니다. 최소 두 단어 이상 입력하여야 합니다.\n\n";
    help += "!사다리타기/!사다리/!순위 (단어1) (단어2) [단어3] ... : 띄어쓰기로 구분된 단어들을 랜덤으로 순위를 매겨 보여줍니다. 최소 두 단어 이상 입력하여야 합니다.\n\n";
    help += "!이벤트/!ㅇㅂㅌ : 현재 진행중인 이벤트를 보여줍니다.\n\n"
    help += "!실검/!실시간검색어 : ZUM 이슈트렌드 기준 현재시간 실시간 검색어 순위를 10위까지 보여줍니다.\n\n";
    help += "!스타포스 비용 (레벨) : 해당 레벨대의 아이템 스타포스 강화비용을 단계별로 보여줍니다. 레벨을 입력하지 않을 시 200레벨 아이템의 비용을 보여줍니다.\n\n";
    help += "!스타포스 A B C D E F :\nA - 아이템 레벨 제한(100~200 or 타일런트:99)\nB - 시작 스타포스 개수\nC - 목표 스타포스 개수\nD - 스타캐치 적용여부 (0 - 미적용, 1 - 적용)\nE - 이벤트 적용여부 (0 - 미적용, 1 - 30% 할인, 2 - 5,10,15성 100%, 3 - 10성이하 1+1)\nF - 파괴방지 적용여부 (0 - 미적용, 1 - 12~17성 적용, 2 - 15~17성 적용)\n\n";
    help += "!메소/!메소시세 (월드이름) : 해당 월드의 메소마켓, ㅁㅌ 시세를 알려줍니다. (머쉬빌리지 기준)\n(월드이름)에 '평균'을 입력하면 전체월드 평균 가격을 보여줍니다.\n\n";
    help += "!큐브 (큐브이름) [잠재등급] [장비분류] (1,2,3)/[잠재옵션] [수치] : 큐브에 대한 정보를 보여줍니다.\n(큐브이름)만 입력 시 해당큐브의 등급 상승 확률표를 보여줍니다.\n(잠재등급) 까지만 입력 시 해당 큐브의 해당 등급에서의 옵션별 등급 설정 확률을 보여줍니다.\n(장비분류) 까지만 입력 시 해당 큐브의 해당 등급의 세부 확률표를 보여줍니다. 1,2,3입력시 각 번째에 해당하는 옵션의 확률만 보여줍니다.\n(잠재옵션)과 (수치)를 입력시 해당 잠재옵션이 해당 수치이상 나올 확률을 보여줍니다. 이 기능은 세가지 잠재 옵션까지 기입할 수 있습니다. (예시 : !큐브 블랙 레전 무기 보공 60 공 9)\n잠재 옵션 목록 : STR,DEX,INT,LUK,보공,공,방무,크뎀,올스탯,HP,메획,아획,데미지,쿨감\n\n";
    help += "!번역 (입력국가코드) (출력국가코드) (번역 할 문장) : 문장을 다른나라 언어로 번역합니다. 코드에는 정해진 국가 코드를 입력하셔야 합니다. (입력 예시 - !번역 ko en 나는 당신을 사랑합니다. / 출력 예시 - I love you.)\n국가 코드\nko-한국어\nen-영어\nja-일본어\nzh-CN-중국어 간체\nzh-TW-중국어 번체\nvi-베트남어\nid-인도네시아어\nth-태국어\nde-독일어\nru-러시아어\nes-스페인어\nit-이탈리아어\nfr-프랑스어\n\n";
    help += "!계산 (계산식) : 식을 계산합니다. 식에는 숫자, 괄호, 사칙연산, 소숫점을 제외한 나머지는 무시됩니다.\n\n";
    help += "!단축 (단축할 웹주소) : 웹주소를 me2.do/~ 형식의 짧은 주소로 단축시켜줍니다.\n\n";
    help += "!로마자 (이름) : 입력한 이름을 로마자로 변환합니다.\n\n";
    help += "!유튜브 (유튜브링크) : 입력한 링크를 모바일 유튜브 어플로 볼수있는 링크로 바꿔줍니다.\n\n";
    help += "!심볼 (심볼 이름) (현재 레벨) (현재 성장치) : 현재 심볼상태에서 다음 레벨까지 필요한 성장치, 만렙까지 필요한 성장치, 이번에 가능한 모든 레벨업을 하였을때 드는 세금, 만렙까지 드는 잔여 세금을 보여줍니다.\n(심볼 이름)은 띄어쓰기 없이 입력해주셔야 합니다.\n(현재 레벨)을 생략할 시 각 심볼의 일일퀘스트와 스페셜컨텐츠의 수급량을 알려줍니다.\n(현재 성장치)를 생략할 시 0으로 계산하여 보여줍니다.\n\n"
    help += "[임시]!스킬 (직업이름) [스킬이름] : 해당 직업,직업군의 해당 스킬에 대한 정보를 보여줍니다.\n(직업이름) 생략 시 입력할 수 있는 직업 목록을 보여줍니다.\n(스킬이름) 생략 시 해당 직업의 입력할 수 있는 스킬 목록을 보여줍니다.\n(현재 극히 일부만 사용가능합니다.)\n\n";
    help += "!최종데미지/!최종뎀/!최종 (최종데미지1) (최종데미지2) [...] : 여러 최종데미지가 적용된 값을 계산해줍니다.\n\n";
    help += "!시드링 (상자 종류) [횟수] : 시드링 상자 개봉 시뮬레이션을 보여줍니다. 횟수는 1이상 500이하 숫자만 가능합니다.\n(상자 종류) 목록\n1 : 알리샤의 반지 상자(1급)\n2 : 알리샤의 반지 상자(2급)\n3 : 숨겨진 반지 상자\n4 : 빛나는 반지 상자\n(횟수) 생략시 각 상자의 확률표를 보여줍니다.\n(상자 종류) 대신 시드링 이름을 입력하면 각 시드링의 효과와 설명을 보여줍니다.\n\n";
    help += "!스카우터 (캐릭터 이름) : 당신의 메창력을 수치로 변환하여 보여줍니다.\n본캐의 닉네임을 입력해주세요.\n\n";
    help += "!어빌/!어빌리티 (어빌리티이름) (수치) : 레전드리 기준 해당 어빌리티의 해당 수치 이상 뜰 확률을 보여줍니다. 이 기능은 두가지 어빌리티까지 입력이 가능합니다.\n(어빌리티이름)에 등급(레어,에픽,유니크,레전드리)를 입력할 시 각 등급에서의 어빌리티 등장 확률을 보여줍니다.\n어빌리티 목록 : 보공, 패시브, 다수, 일몹뎀, 상추뎀, 아획, 메획, 크확, 공속, 재사용, 벞지\n\n";
    help += "!농장 (명령어) : 농장에 관련한 정보를 보여줍니다.\n명령어 : 조합식, 검색, 목록\n조합식 (몬스터이름) : 해당 몬스터의 조합식이나 해당 몬스터를 재료로 하는 조합식을 보여줍니다.\n검색 (몬스터이름) : 띄어쓰기를 하지 않은 몬스터이름 또는 줄임말, 별명의 정확한 몬스터 이름을 보여줍니다.\n목록 (몬스터이름) : 해당 몬스터를 보유하고 있는 농장의 마리수 기준 TOP5를 농장명, 마리수, 유효기간을 보여줍니다.\n\n";
    help += "!브금 (종류) (장소이름) : 해당 장소의 메이플스토리 BGM 유튜브 링크를 보여줍니다. (장소이름) 생략 시 해당 종류의 목록을 보여줍니다.\n(종류) 목록 : 보스, 마을, 고유/직업\n\n";
    help += "!확률 (확률) [횟수] : (확률)에 입력한 확률로 (횟수)에 입력한 만큼 시도하여 최초 성공 시점, 성공 횟수를 보여줍니다. (횟수)를 생략 시 최대 10만회를 시도하여 최초 성공 시점의 시도 횟수를 보여줍니다.\n\n";
    help += "!마릿수/!몹젠 (지역) : (지역)의 몹젠과 경험치 획득 표를 보여줍니다.\n목록 : 아케인리버 지역, 세르니움(전/후), 호텔 아르크스\n\n";
    help += "!포스 (지역이름) : 해당 지역의 아케인/어센틱 포스 요구량을 보여줍니다.\n목록 : 아케인리버 지역, 세르니움(전/후), 호텔 아르크스\n\n";
    help += "!건의 (내용) : 보마봇에게 건의사항을 입력합니다. 이전에 입력된 건의사항이 있으면 입력한 내용이 덮어쓰게 됩니다. 해당 건의사항은 개발자가 간간히 보게 될수도...?\n(내용)에 \'삭제\'를 입력하면 입력했던 건의사항이 삭제됩니다.\n(내용)에 \'확인\'을 입력하면 입력했던 건의사항을 보여줍니다.\n단, 보마봇이 유저를 구별하는 방법이 프로필사진이라 프로필사진이 바뀌면 삭제나 확인이 힘들 수 있습니다.\n\n";
    help += "!문제 : 시드 39층에서 출제되는 메이플스토리 관련 문제들을 풀어볼수 있습니다. !답 (숫자 1,2,3,4) 를 입력하여 답을 맞출수 있습니다.";

    return help;
}

help.getInst = function(){
    var inst = "<--봇 명령어-->   ";
    inst += "() -> 필수 입력 / [] -> 생략 가능\n\n";
    inst += "!봇업데이트/!봇업뎃\n";
    inst += "!보스 (보스 이름)\n";
    inst += "!결정석 (보스 이름)\n";
    inst += "!경험치 (시작레벨) [끝레벨]\n";
    inst += "!캐릭터/!정보/!무릉/!시드랭킹/!유니온/!업적/!코디/!길드 (캐릭터명)\n";
    inst += "!무릉 (층수(1~80))\n";
    inst += "!날씨 (지역)\n";
    inst += "!한강\n";
    inst += "!갱신 (캐릭터 이름)\n";
    inst += "!방무 (몬스터 방어율) (현재 방어율) [추가 방어율1] [추가 방어율2] ...\n";
    inst += "!데굴데굴/!데굴/!주사위\n";
    inst += "!강환/!강환불/!영환/!영환불 (렙제) [횟수(1~5)]\n";
    inst += "!경스토리/!겸스토리 (캐릭터 이름)\n";
    inst += "!렙스토리/!레벨스토리 (캐릭터 이름)\n";
    inst += "!(직업 이름)\n";
    inst += "!썬데이/!선데이\n";
    inst += "!업데이트/!업뎃\n";
    inst += "!추옵/!추가옵션 (무기 이름)\n";
    inst += "!그님티 (롤닉네임)\n";
    inst += "!로얄 [횟수(1~5000)]\n";
    inst += "!뽑기/!하나만 (단어1) (단어2) [단어3] ...\n";
    inst += "!사다리타기/!사다리/!순위 (단어1) (단어2) [단어3] ...\n";
    inst += "!이벤트/!ㅇㅂㅌ\n";
    inst += "!실검/!실시간검색어\n";
    inst += "!스타포스 비용 [레벨]\n";
    inst += "!스타포스 (A) (B) (C) (D) (E) (F)\n";
    inst += "!메소/!메소시세 (월드 이름)/평균\n";
    inst += "!큐브 (큐브 이름) [잠재등급] [장비분류] [잠재옵션] [수치]\n";
    inst += "!번역 (입력국가코드) (출력국가코드) (번역 할 문장)\n";
    inst += "!계산 (계산식)\n";
    inst += "!단축 (단축할 웹주소)\n";
    inst += "!로마자 (이름)\n";
    inst += "!유튜브 (유튜브링크)\n";
    inst += "!심볼 (심볼 이름) [현재 레벨] [현재 성장치]\n";
    inst += "!스킬 (직업 이름) [스킬 이름]\n";
    inst += "!최종데미지/!최종뎀/!최종 (최종데미지1) (최종데미지2) [최종데미지3] ...\n";
    inst += "!시드링 (상자 종류) [횟수(1~500)]\n";
    inst += "!스카우터 (캐릭터 이름)\n";
    inst += "!어빌리티/!어빌 (어빌리티 이름)/(등급 이름) (수치)\n";
    inst += "!농장 (명령어) [추가 입력]\n";
    inst += "!브금 (종류) [장소이름]\n";
    inst += "!확률 (확률) [횟수(1~10만)]\n";
    inst += "!마릿수/!몹젠 (지역 이름)\n";
    inst += "!포스 (지역 이름)\n";
    inst += "!건의 (내용)\n";
    inst += "!문제\n";
    inst += "!답 (1,2,3,4)\n";
    
    return inst;
}

module.exports = help;