const item={};

item.getItem = function (msg){
    var rep = "";
    var itemtype = msg.split(" ")[1];
    if(itemtype == undefined){
        rep = "아이템 종류가 입력되지 않았습니다.\n1. 무기\n2. 방어구\n3. 장신구\n\n!아이템 [종류] (직업/이름) (번호)";
    }
    else{
        if(isNaN(itemtype) || itemtype % 1 != 0){
            rep = "아이템 종류는 정수로 입력하셔야 합니다.";
        }
        else if(itemtype == 1){
            var wpname = msg.split(" ")[2];
            if(wpname == undefined){
                rep = "무기 이름이 입력되지 않았습니다.\n무기 종류(한손검, 스태프 등)이나 그 무기를 전용으로 사용하는 직업(핸드캐논-캐논슈터 등)을 입력하세요.\n직업/이름만 입력하면 목록을 보여줍니다.";
            }
            else{
                wpcode = getWeapon(wpname);
                if(wpcode == -1){
                    rep = "무기 이름이 잘못되었습니다.";
                }
                else{
                    var wpcode2 = msg.split(" ")[3];
                    if(wpcode2 == undefined){
                        rep = getWeaponName(wpcode);
                    }
                    else{
                        if(isNaN(wpcode2) || wpcode2 % 1 != 0){
                            rep = "무기 번호는 정수로 입력하셔야 합니다.";
                        }
                        else{
                            wpn = getWeaponName(wpcode);
                        }
                    }
                }
            }

        }
        else if(itemtype == 2){


        }
        else if(itemtype == 3){


        }
        else{
            rep = "아이템 종류가 잘못되었습니다.\n1. 무기\n2. 방어구\n3. 장신구\n\n!아이템 [종류] (직업) (번호)";
        }
    }
    return rep;
};

function getWeapon(weaponName){
    wpcode = -1;
    switch(weaponName){
        case "한손검":
        case "미하일":
            wpcode = 0;
            break;
        case "한손도끼":
            wpcode = 1;
            break;
        case "한손둔기":
        case "데몬슬레이어":
        case "데슬":
            wpcode = 2;
            break;
        case "스태프":
        case "배틀메이지":
            wpcode = 3;
            break;
        case "완드":
        case "라라":
            wpcode = 4;
            break;
        case "샤이닝로드":
        case "루미너스":
        case "루미":
            wpcode = 5;
            break;
        case "단검":
        case "섀도어":
        case "듀얼블레이드":
        case "듀블":
            wpcode = 6;
            break;
        case "블레이드":
            wpcode = 7;
            break;
        case "케인":
        case "팬텀":
            wpcode = 8;
            break;
        case "데스페라도":
        case "데몬어벤져":
        case "데벤져":
            wpcode = 9;
            break;
        case "에너지소드":
        case "제논":
            wpcode = 10;
            break;
        case "소울슈터":
        case "엔젤릭버스터":
        case "엔버":
            wpcode = 11;
            break;
        case "ESP리미터":
        case "키네시스":
        case "키네":
            wpcode = 12;
            break;
        case "체인":
        case "카데나":          
            wpcode = 13;
            break;
        case "매직건틀렛":
        case "일리움":
            wpcode = 14;
            break;
        case "부채":
        case "호영":
            wpcode = 15;
            break;
        case "튜너":
        case "아델":
            wpcode = 16;
          break;            
        case "브레스슈터":
        case "카인":
            wpcode = 17;
            break;
        case "두손검":
        case "히어로":
            wpcode = 18;
            break;
        case "두손도끼":
            wpcode = 19;
            break;
        case "두손둔기":
        case "팔라딘":
        case "팔라":
            wpcode = 20;
            break;
        case "창":
        case "다크나이트":
        case "닼나":
            wpcode = 21;
            break;
        case "폴암":
        case "아란":
            wpcode = 22;
            break;
        case "태도":
        case "제로":
        case "알파":
            wpcode = 23;
            break;
        case "대검":
        case "베타":
            wpcode = 24;
            break;
        case "건틀렛리볼버":
        case "블래스터":
        case "블래":
            wpcode = 25;
            break;
        case "활":
        case "보우마스터":
        case "보마":
        case "윈드브레이커":
        case "윈브":
            wpcode = 26;
            break;
        case "석궁":
        case "신궁":
        case "와일드헌터":
        case "와헌":
            wpcode = 27;
            break;
        case "듀얼보우건":
        case "메르세데스":
        case "메르":
            wpcode = 28;
            break;
        case "에인션트보우":
        case "패스파인더":
        case "패파":
            wpcode = 29;
            break;
        case "아대":
        case "나로":
        case "나이트로드":
        case "나워":
        case "나이트워커":
        case "표창":
        case "가즈":
            wpcode = 30;
            break;
        case "건":
        case "총":
        case "캡틴":
        case "메카닉":
        case "불릿":
            wpcode = 31;
            break;
        case "너클":
        case "바이퍼":
        case "스트라이커":
        case "스커":
        case "은월":
        case "아크":
            wpcode = 32;
            break;
        case "핸드캐논":
        case "캐논슈터":
        case "캐슈":
            wpcode = 33;
            break;
        case "해방된카이세리움":
        case "해카세":
        case "카이저":
            wpcode = 34;
          break;
        default:
            wpcode = -1;
            break;
      }
      return wpcode;
};

function getWeaponName(wpcode){
    wpname = "-";
    switch(wpcode){
        case 0:
            wpname = "한손검 목록\n\n1. 파프니르 미스틸테인\n2. 앱솔랩스 세이버\n3. 아케인셰이드 세이버\n4. 제네시스 세이버";
            break;
        case 1:
            wpname = "한손도끼 목록\n\n1. 파프니르 트윈클리버\n2. 앱솔랩스 엑스\n3. 아케인셰이드 엑스\n4. 제네시스 엑스";
            break;
        case 2:
            wpname = "한손둔기 목록\n\n1. 파프니르 골디언해머\n2. 앱솔랩스 비트해머\n3. 아케인셰이드 해머\n4. 제네시스 해머";
            break;
        case 3:
            wpname = "스태프 목록\n\n1. 파프니르 마나크라운\n2. 앱솔랩스 스펠링스태프\n3. 아케인셰이드 스태프\n4. 제네시스 스태프";
            break;
        case 4:
            wpname = "완드 목록\n\n1. 파프니르 마나테이커\n2. 앱솔랩스 스펠링완드\n3. 아케인셰이드 완드\n4. 제네시스 완드";
            break;
        case 5:
            wpname = "샤이닝 로드 목록\n\n1. 파프니르 마나크래들\n2. 앱솔랩스 샤이닝로드\n3. 아케인셰이드 샤이닝로드\n4. 제네시스 샤이닝로드";
            break;
        case 6:
            wpname = "단검 목록\n\n1. 파프니르 다마스커스\n2. 앱솔랩스 슬래셔\n3. 아케인셰이드 대거\n4. 제네시스 대거";
            break;
        case 7:
            wpname = "블레이드 목록\n\n1. 파프니르 래피드엣지\n2. 앱솔랩스 블레이드\n3. 아케인셰이드 블레이드";
            break;
        case 8:
            wpname = "케인 목록\n\n1. 파프니르 클레르시엘\n2. 앱솔랩스 핀쳐케인\n3. 아케인셰이드 케인\n4. 제네시스 케인";
            break;
        case 9:
            wpname = "데스페라도 목록\n\n1. 파프니르 데스브링어\n2. 앱솔랩스 데스페라도\n3. 아케인셰이드 데스페라도\n4. 제네시스 데스페라도";
            break;
        case 10:
            wpname = "에너지 소드 목록\n\n1. 파프니르 스플릿엣지\n2. 앱솔랩스 에너지소드\n3. 아케인셰이드 에너지체인\n4. 제네시스 에너지체인";
            break;
        case 11:
            wpname = "소울 슈터 목록\n\n1. 파프니르 엔젤릭슈터\n2. 앱솔랩스 소울슈터\n3. 아케인셰이드 소울슈터\n4. 제네시스 소울슈터";
            break;
        case 12:
            wpname = " ESP 리미터 목록\n\n1. 파프니르 ESP리미터\n2. 앱솔랩스 ESP리미터\n3. 아케인셰이드 ESP리미터\n4. 제네시스 ESP리미터";
            break;
        case 13:
            wpname = "체인 목록\n\n1. 파프니르 체인\n2. 앱솔랩스 체인\n3. 아케인셰이드 체인\n4. 제네시스 체인";
            break;
        case 14:
            wpname = "매직 건틀렛 목록\n\n1. 파프니르 매직건틀렛\n2. 앱솔랩스 매직건틀렛\n3. 아케인셰이드 매직건틀렛\n4. 제네시스 매직건틀렛";
            break;
        case 15:
            wpname = "부채 목록\n\n1. 파프니르 용선\n2. 앱솔랩스 괴선\n3. 아케인셰이드 초선\n4. 제네시스 창세선";
            break;
        case 16:
            wpname = "튜너 목록\n\n1. 파프니르 포기브니스\n2. 앱솔랩스 튜너\n3. 아케인셰이드 튜너\n4. 제네시스 튜너";
            break;
        case 17:
            wpname = "브레스 슈터 목록\n\n1. 파프니르 나이트체이서\n2. 앱솔랩스 브레스슈터\n3. 아케인셰이드 브레스슈터\n4. 제네시스 브레스슈터";
            break;
        case 18:
            wpname = "두손검 목록\n\n1. 파프니르 페니텐시아\n2. 앱솔랩스 브로드세이버\n3. 아케인셰이드 투핸드소드\n4. 제네시스 투핸드소드";
            break;
        case 19:
            wpname = "두손도끼 목록\n\n1. 파프니르 배틀클리버\n2. 앱솔랩스 브로드엑스\n3. 아케인셰이드 투핸드엑스\n4. 제네시스 투핸드엑스";
            break;
        case 20:
            wpname = "두손둔기 목록\n\n1. 파프니르 라이트닝어\n2. 앱솔랩스 브로드해머\n3. 아케인셰이드 투핸드해머\n4. 제네시스 투핸드해머";
            break;
        case 21:
            wpname = "창 목록\n\n1. 파프니르 브류나크\n2. 앱솔랩스 피어싱스피어\n3. 아케인셰이드 스피어\n4. 제네시스 스피어";
            break;
        case 22:
            wpname = "폴암 목록\n\n1. 파프니르 문글레이브\n2. 앱솔랩스 핼버드\n3. 아케인셰이드 폴암\n4. 제네시스 폴암";
            break;
        case 23:
            wpname = "태도 목록\n\n1. 라즐리 7형\n2. 라즐리 8형\n3. 라즐리 9형\n4. 제네시스 라즐리";
            break;
        case 24:
            wpname = "대검 목록\n\n1. 라피스 7형\n2. 라피스 8형\n3. 라피스 9형\n4. 제네시스 라피스";
            break;
        case 25:
            wpname = "건틀렛리볼버 목록\n\n1. 파프니르 빅 마운틴\n2. 앱솔랩스 파일갓\n3. 아케인셰이드 엘라하\n4. 제네시스 엘라하";
            break;
        case 26:
            wpname = "활 목록\n\n1. 파프니르 윈드체이서\n2. 앱솔랩스 슈팅보우\n3. 아케인셰이드 보우\n4. 제네시스 보우";
            break;
        case 27:
            wpname = "석궁 목록\n\n1. 파프니르 윈드윙슈터\n2. 앱솔랩스 크로스보우\n3. 아케인셰이드 크로스보우\n4. 제네시스 크로스보우";
            break;
        case 28:
            wpname = "듀얼보우건 목록\n\n1. 파프니르 듀얼윈드윙\n2. 앱솔랩스 듀얼보우건\n3. 아케인셰이드 듀얼보우건\n4. 제네시스 듀얼보우건";
            break;
        case 29:
            wpname = "에인션트 보우 목록\n\n1. 파프니르 에인션트보우\n2. 앱솔랩스 에인션트보우\n3. 아케인셰이드 에인션트보우\n4. 제네시스 에인션트보우";
            break;
        case 30:
            wpname = "아대 목록\n\n1. 파프니르 리스크홀더\n2. 앱솔랩스 리벤지가즈\n3. 아케인셰이드 가즈\n4. 제네시스 가즈";
            break;
        case 31:
            wpname = "건 목록\n\n1. 파프니르 첼리스카\n2. 앱솔랩스 포인팅건\n3. 아케인셰이드 피스톨\n4. 제네시스 피스톨";
            break;
        case 32:
            wpname = "너클 목록\n\n1. 파프니르 펜리르탈론\n2. 앱솔랩스 블로우너클\n3. 아케인셰이드 클로\n4. 제네시스 클로";
            break;
        case 33:
            wpname = "핸드캐논 목록\n\n1. 파프니르 러스터캐논\n2. 앱솔랩스 블래스트캐논\n3. 아케인셰이드 시즈건\n4. 제네시스 시즈건";
            break;
        case 34:
            wpname = "1. 해방된 카이세리움";
            break;
    }
    return wpname;
};

function getWeapon1(wpcode){
    wrep = "";
    switch(wpcode){        
        case 0:
            wrep = "무기분류 : 한손검\n공격속도 : \nSTR : +\nDEX : +\n공격력 + \n보스 몬스터 공격 시 데미지 +\n몬스터 방어력 무시 : +\n업그레이드 가능 횟수 : 8";
            break;
        case 1:
            wrep = "무기분류 : 한손도끼\n공격속도 : \nSTR : +\nDEX : +\n공격력 + \n보스 몬스터 공격 시 데미지 +\n몬스터 방어력 무시 : +\n업그레이드 가능 횟수 : 8";
            break;
        case 2:
            wrep = "무기분류 : 한손둔기\n공격속도 : \nSTR : +\nDEX : +\n공격력 + \n보스 몬스터 공격 시 데미지 +\n몬스터 방어력 무시 : +\n업그레이드 가능 횟수 : 8";
            break;
        case 3:
            wrep = "무기분류 : 스태프\n공격속도 : \nSTR : +\nDEX : +\n공격력 + \n보스 몬스터 공격 시 데미지 +\n몬스터 방어력 무시 : +\n업그레이드 가능 횟수 : 8";
            break;
        case 4:
            wrep = "무기분류 : 완드\n공격속도 : \nSTR : +\nDEX : +\n공격력 + \n보스 몬스터 공격 시 데미지 +\n몬스터 방어력 무시 : +\n업그레이드 가능 횟수 : 8";
            break;
        case 5:
            wrep = "무기분류 : 샤이닝 로드\n공격속도 : \nSTR : +\nDEX : +\n공격력 + \n보스 몬스터 공격 시 데미지 +\n몬스터 방어력 무시 : +\n업그레이드 가능 횟수 : 8";
            break;
        case 6:
            wrep = "무기분류 : 단검\n공격속도 : \nSTR : +\nDEX : +\n공격력 + \n보스 몬스터 공격 시 데미지 +\n몬스터 방어력 무시 : +\n업그레이드 가능 횟수 : 8";
            break;
        case 7:
            wrep = "무기분류 : 블레이드\n공격속도 : \nSTR : +\nDEX : +\n공격력 + \n보스 몬스터 공격 시 데미지 +\n몬스터 방어력 무시 : +\n업그레이드 가능 횟수 : 8";
            break;
        case 8:
            wrep = "무기분류 : 케인\n공격속도 : \nSTR : +\nDEX : +\n공격력 + \n보스 몬스터 공격 시 데미지 +\n몬스터 방어력 무시 : +\n업그레이드 가능 횟수 : 8";
            break;
        case 9:
            wrep = "무기분류 : 데스페라도\n공격속도 : \nSTR : +\nDEX : +\n공격력 + \n보스 몬스터 공격 시 데미지 +\n몬스터 방어력 무시 : +\n업그레이드 가능 횟수 : 8";
            break;
        case 10:
            wrep = "무기분류 : 에너지 소드\n공격속도 : \nSTR : +\nDEX : +\n공격력 + \n보스 몬스터 공격 시 데미지 +\n몬스터 방어력 무시 : +\n업그레이드 가능 횟수 : 8";
            break;
        case 11:
            wrep = "무기분류 : 소울 슈터\n공격속도 : \nSTR : +\nDEX : +\n공격력 + \n보스 몬스터 공격 시 데미지 +\n몬스터 방어력 무시 : +\n업그레이드 가능 횟수 : 8";
            break;
        case 12:
            wrep = "무기분류 : ESP 리미터\n공격속도 : \nSTR : +\nDEX : +\n공격력 + \n보스 몬스터 공격 시 데미지 +\n몬스터 방어력 무시 : +\n업그레이드 가능 횟수 : 8";
            break;
        case 13:
            wrep = "무기분류 : 체인\n공격속도 : \nSTR : +\nDEX : +\n공격력 + \n보스 몬스터 공격 시 데미지 +\n몬스터 방어력 무시 : +\n업그레이드 가능 횟수 : 8";
            break;
        case 14:
            wrep = "무기분류 : 매직 건틀렛\n공격속도 : \nSTR : +\nDEX : +\n공격력 + \n보스 몬스터 공격 시 데미지 +\n몬스터 방어력 무시 : +\n업그레이드 가능 횟수 : 8";
            break;
        case 15:
            wrep = "무기분류 : 부채\n공격속도 : \nSTR : +\nDEX : +\n공격력 + \n보스 몬스터 공격 시 데미지 +\n몬스터 방어력 무시 : +\n업그레이드 가능 횟수 : 8";
            break;
        case 16:
            wrep = "무기분류 : 튜너\n공격속도 : \nSTR : +\nDEX : +\n공격력 + \n보스 몬스터 공격 시 데미지 +\n몬스터 방어력 무시 : +\n업그레이드 가능 횟수 : 8";
            break;
        case 17:
            wrep = "무기분류 : 브레스 슈터\n공격속도 : \nSTR : +\nDEX : +\n공격력 + \n보스 몬스터 공격 시 데미지 +\n몬스터 방어력 무시 : +\n업그레이드 가능 횟수 : 8";
            break;
        case 18:
            wrep = "무기분류 : 두손검\n공격속도 : \nSTR : +\nDEX : +\n공격력 + \n보스 몬스터 공격 시 데미지 +\n몬스터 방어력 무시 : +\n업그레이드 가능 횟수 : 8";
            break;
        case 19:
            wrep = "무기분류 : 두손도끼\n공격속도 : \nSTR : +\nDEX : +\n공격력 + \n보스 몬스터 공격 시 데미지 +\n몬스터 방어력 무시 : +\n업그레이드 가능 횟수 : 8";
            break;
        case 20:
            wrep = "무기분류 : 두손둔기\n공격속도 : \nSTR : +\nDEX : +\n공격력 + \n보스 몬스터 공격 시 데미지 +\n몬스터 방어력 무시 : +\n업그레이드 가능 횟수 : 8";
            break;
        case 21:
            wrep = "무기분류 : 창\n공격속도 : \nSTR : +\nDEX : +\n공격력 + \n보스 몬스터 공격 시 데미지 +\n몬스터 방어력 무시 : +\n업그레이드 가능 횟수 : 8";
            break;
        case 22:
            wrep = "무기분류 : 폴암\n공격속도 : \nSTR : +\nDEX : +\n공격력 + \n보스 몬스터 공격 시 데미지 +\n몬스터 방어력 무시 : +\n업그레이드 가능 횟수 : 8";
            break;
        case 23:
            wrep = "무기분류 : 태도\n공격속도 : \nSTR : +\nDEX : +\n공격력 + \n보스 몬스터 공격 시 데미지 +\n몬스터 방어력 무시 : +\n업그레이드 가능 횟수 : 8";
            break;
        case 24:
            wrep = "무기분류 : 대검\n공격속도 : \nSTR : +\nDEX : +\n공격력 + \n보스 몬스터 공격 시 데미지 +\n몬스터 방어력 무시 : +\n업그레이드 가능 횟수 : 8";
            break;
        case 25:
            wrep = "무기분류 : 건틀렛 리볼버\n공격속도 : \nSTR : +\nDEX : +\n공격력 + \n보스 몬스터 공격 시 데미지 +\n몬스터 방어력 무시 : +\n업그레이드 가능 횟수 : 8";
            break;
        case 26:
            wrep = "무기분류 : 활\n공격속도 : \nSTR : +\nDEX : +\n공격력 + \n보스 몬스터 공격 시 데미지 +\n몬스터 방어력 무시 : +\n업그레이드 가능 횟수 : 8";
            break;
        case 27:
            wrep = "무기분류 : 석궁\n공격속도 : \nSTR : +\nDEX : +\n공격력 + \n보스 몬스터 공격 시 데미지 +\n몬스터 방어력 무시 : +\n업그레이드 가능 횟수 : 8";
            break;
        case 28:
            wrep = "무기분류 : 듀얼보우건\n공격속도 : \nSTR : +\nDEX : +\n공격력 + \n보스 몬스터 공격 시 데미지 +\n몬스터 방어력 무시 : +\n업그레이드 가능 횟수 : 8";
            break;
        case 29:
            wrep = "무기분류 : 에인션트 보우\n공격속도 : \nSTR : +\nDEX : +\n공격력 + \n보스 몬스터 공격 시 데미지 +\n몬스터 방어력 무시 : +\n업그레이드 가능 횟수 : 8";
            break;
        case 30:
            wrep = "무기분류 : 아대\n공격속도 : \nSTR : +\nDEX : +\n공격력 + \n보스 몬스터 공격 시 데미지 +\n몬스터 방어력 무시 : +\n업그레이드 가능 횟수 : 8";
            break;
        case 31:
            wrep = "무기분류 : 건\n공격속도 : \nSTR : +\nDEX : +\n공격력 + \n보스 몬스터 공격 시 데미지 +\n몬스터 방어력 무시 : +\n업그레이드 가능 횟수 : 8";
            break;
        case 32:
            wrep = "무기분류 : 너클\n공격속도 : \nSTR : +\nDEX : +\n공격력 + \n보스 몬스터 공격 시 데미지 +\n몬스터 방어력 무시 : +\n업그레이드 가능 횟수 : 8";
            break;
        case 33:
            wrep = "무기분류 : 핸드캐논\n공격속도 : \nSTR : +\nDEX : +\n공격력 + \n보스 몬스터 공격 시 데미지 +\n몬스터 방어력 무시 : +\n업그레이드 가능 횟수 : 8";
            break;
        case 34:
            wrep = "무기분류 : 두손검\n공격속도 : \nSTR : +\nDEX : +\n공격력 + \n보스 몬스터 공격 시 데미지 +\n몬스터 방어력 무시 : +\n업그레이드 가능 횟수 : 8";
            break;
    }
    return wrep
};

module.exports = item;