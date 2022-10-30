const item={};

item.getItem = function (msg){
    var rep = "-";
    var wrep = "-";
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
                            if(wpcode2 == 1){
                                wrep = getWeapon1(wpcode);                                
                                wicon = getWeaponicon1(wpcode);
                                wpn = "Lv. 150 " + wpn.split("1. ")[1].split("\n")[0];
                            }
                            else if(wpcode2 == 2){
                                wrep = getWeapon2(wpcode);
                                wicon = getWeaponicon2(wpcode);
                                wpn = "Lv. 160 " + wpn.split("2. ")[1].split("\n")[0];
                            }
                            else if(wpcode2 == 3){
                                wrep = getWeapon3(wpcode);
                                wicon = getWeaponicon3(wpcode);
                                wpn = "Lv. 200 " + wpn.split("3. ")[1].split("\n")[0];
                            }
                            else if(wpcode2 == 4){
                                wrep = getWeapon4(wpcode);
                                wicon = getWeaponicon4(wpcode);
                                wpn = "Lv. 200 " + wpn.split("4. ")[1];
                            }
                            else{
                                rep = "무기 번호는 1~4까지만 입력해야 합니다.";
                            }

                            if(rep == "-" && wrep != "-"){
                                rep = "☆";
                                rep += wpn;
                                rep += "☆";
                                rep += wrep;
                                rep += "☆";
                                rep += wicon
                            }
                        }
                    }
                }
            }

        }
        else if(itemtype == 2){
            var arjob = msg.split(" ")[2];
            if(arjob == undefined){
                rep = "방어구 직업이 입력되지 않았습니다.\n직업 종류(전사, 마법사, 궁수, 도적, 해적)\n직업만 입력하면 목록을 보여줍니다.";
            }
            else{
                var arjobcode = getArmorjob(arjob);
                if(arjobcode == -1){
                    rep = "올바른 직업을 입력하지 않았습니다.\n직업 종류(전사, 마법사, 궁수, 도적, 해적)";
                }
                else{
                    var arcode = msg.split(" ")[3];
                    if(arcode == undefined){
                        rep = getArmorname(arjobcode);
                    }
                    else{
                        if(isNaN(arcode) || arcode % 1 != 0){
                            rep = "방어구 번호는 정수로 입력하셔야 합니다.";
                        }
                        else{
                            if(arjobcode == 0){

                            }
                            else if(arjobcode == 1){

                            }
                            else if(arjobcode == 2){

                            }   
                            else if(arjobcode == 3){

                            }
                            else if(arjobcode == 4){

                            }

                            if(rep == "-"){
                                rep = "★";
                                
                            }
                        }
                    }
                }
            }

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
            wpname = "해카세 목록\n\n1. 해방된 카이세리움";
            break;
    }
    return wpname;
};

function getWeapon1(wpcode){
    wrep = "";
    switch(wpcode){        
        //STR DEX INT LUK
        case 0:
            wrep = "무기분류 : 한손검\n공격속도 : 빠름\nSTR : +40\nDEX : +40\n공격력 + 164\n보스 몬스터 공격 시 데미지 +30%\n몬스터 방어력 무시 : +10%\n업그레이드 가능 횟수 : 8";
            break;
        case 1:
            wrep = "무기분류 : 한손도끼\n공격속도 : 빠름\nSTR : +40\nDEX : +40\n공격력 + 164\n보스 몬스터 공격 시 데미지 +30%\n몬스터 방어력 무시: +10%\n업그레이드 가능 횟수 : 8";
            break;
        case 2:
            wrep = "무기분류 : 한손둔기\n공격속도 : 빠름\nSTR : +40\nDEX : +40\n공격력 + 164\n보스 몬스터 공격 시 데미지 +30%\n몬스터 방어력 무시: +10%\n업그레이드 가능 횟수 : 8";
            break;
        case 3:
            wrep = "무기분류 : 스태프\n공격속도 : 느림\nINT : +40\nLUK : +40\n마력 + 204\n보스 몬스터 공격 시 데미지 +30%\n몬스터 방어력 무시: +10%\n업그레이드 가능 횟수 : 8";
            break;
        case 4:
            wrep = "무기분류 : 완드\n공격속도 : 보통\nINT : +40\nLUK : +40\n마력 + 201\n보스 몬스터 공격 시 데미지 +30%\n몬스터 방어력 무시: +10%\n업그레이드 가능 횟수 : 8";
            break;
        case 5:
            wrep = "무기분류 : 샤이닝 로드\n공격속도 : 보통\nINT : +40\nLUK : +40\n마력 + 201\n보스 몬스터 공격 시 데미지 +30%\n몬스터 방어력 무시: +10%\n업그레이드 가능 횟수 : 8";
            break;
        case 6:
            wrep = "무기분류 : 단검\n공격속도 : 빠름\nLUK : +40\nDEX : +40\n공격력 + 160\n보스 몬스터 공격 시 데미지 +30%\n몬스터 방어력 무시: +10%\n업그레이드 가능 횟수 : 8";
            break;
        case 7:
            wrep = "무기분류 : 블레이드\n공격속도 : 매우 빠름\nLUK : +15\n공격력 + 81\n업그레이드 가능 횟수 : 8";
            break;
        case 8:
            wrep = "무기분류 : 케인\n공격속도 : 빠름\nLUK : +40\nDEX : +40\n공격력 + 164\n보스 몬스터 공격 시 데미지 +30%\n몬스터 방어력 무시: +10%\n업그레이드 가능 횟수 : 8";
            break;
        case 9:
            wrep = "무기분류 : 데스페라도\n공격속도 : 보통\nSTR : +40\nDEX : +40\n공격력 + 171\n보스 몬스터 공격 시 데미지 +30%\n몬스터 방어력 무시: +10%\n업그레이드 가능 횟수 : 8";
            break;
        case 10:
            wrep = "무기분류 : 에너지 소드\n공격속도 : 빠름\nSTR/DEX : +40\nDEX/LUK : +40\n공격력 + 128\n보스 몬스터 공격 시 데미지 +30%\n몬스터 방어력 무시: +10%\n업그레이드 가능 횟수 : 8";
            break;
        case 11:
            wrep = "무기분류 : 소울 슈터\n공격속도 : 빠름\nDEX : +40\nSTR : +40\n공격력 + 128\n보스 몬스터 공격 시 데미지 +30%\n몬스터 방어력 무시: +10%\n업그레이드 가능 횟수 : 8";
            break;
        case 12:
            wrep = "무기분류 : ESP 리미터\n공격속도 : 보통\nINT : +40\nLUK : +40\n마력 + 201\n보스 몬스터 공격 시 데미지 +30%\n몬스터 방어력 무시: +10%\n업그레이드 가능 횟수 : 8";
            break;
        case 13:
            wrep = "무기분류 : 체인\n공격속도 : 빠름\nLUK : +40\nDEX : +40\n공격력 + 160\n보스 몬스터 공격 시 데미지 +30%\n몬스터 방어력 무시: +10%\n업그레이드 가능 횟수 : 8";
            break;
        case 14:
            wrep = "무기분류 : 매직 건틀렛\n공격속도 : 보통\nINT : +40\nLUK : +40\n마력 + 201\n보스 몬스터 공격 시 데미지 +30%\n몬스터 방어력 무시: +10%\n업그레이드 가능 횟수 : 8";
            break;
        case 15:
            wrep = "무기분류 : 부채\n공격속도 : 빠름\nLUK : +40\nDEX : +40\n공격력 + 160\n보스 몬스터 공격 시 데미지 +30%\n몬스터 방어력 무시: +10%\n업그레이드 가능 횟수 : 8";
            break;
        case 16:
            wrep = "무기분류 : 튜너\n공격속도 : 빠름\nSTR : +40\nDEX : +40\n공격력 + 171\n보스 몬스터 공격 시 데미지 +30%\n몬스터 방어력 무시: +10%\n업그레이드 가능 횟수 : 8";
            break;
        case 17:
            wrep = "무기분류 : 브레스 슈터\n공격속도 : 빠름\nDEX : +40\nSTR : +40\n공격력 + 160\n보스 몬스터 공격 시 데미지 +30%\n몬스터 방어력 무시: +10%\n업그레이드 가능 횟수 : 8";
            break;
        case 18:
            wrep = "무기분류 : 두손검\n공격속도 : 보통\nSTR : +40\nDEX : +40\n공격력 + 171\n보스 몬스터 공격 시 데미지 +30%\n몬스터 방어력 무시: +10%\n업그레이드 가능 횟수 : 8";
            break;
        case 19:
            wrep = "무기분류 : 두손도끼\n공격속도 : 보통\nSTR : +40\nDEX : +40\n공격력 + 171\n보스 몬스터 공격 시 데미지 +30%\n몬스터 방어력 무시: +10%\n업그레이드 가능 횟수 : 8";
            break;
        case 20:
            wrep = "무기분류 : 두손둔기\n공격속도 : 보통\nSTR : +40\nDEX : +40\n공격력 + 171\n보스 몬스터 공격 시 데미지 +30%\n몬스터 방어력 무시: +10%\n업그레이드 가능 횟수 : 8";
            break;
        case 21:
            wrep = "무기분류 : 창\n공격속도 : 보통\nSTR : +40\nDEX : +40\n공격력 + 171\n보스 몬스터 공격 시 데미지 +30%\n몬스터 방어력 무시: +10%\n업그레이드 가능 횟수 : 8";
            break;
        case 22:
            wrep = "무기분류 : 폴암\n공격속도 : 빠름\nSTR : +40\nDEX : +40\n공격력 + 153\n보스 몬스터 공격 시 데미지 +30%\n몬스터 방어력 무시: +10%\n업그레이드 가능 횟수 : 8";
            break;
        case 23:
            wrep = "무기분류 : 태도\n공격속도 : 보통\nSTR : +40\nDEX : +40\n공격력 + 169\n보스 몬스터 공격 시 데미지 +30%\n몬스터 방어력 무시: +10%\n업그레이드 가능 횟수 : 8";
            break;
        case 24:
            wrep = "무기분류 : 대검\n공격속도 : 느림\nSTR : +40\nDEX : +40\n공격력 + 173\n보스 몬스터 공격 시 데미지 +30%\n몬스터 방어력 무시: +10%\n업그레이드 가능 횟수 : 8";
            break;
        case 25:
            wrep = "무기분류 : 건틀렛 리볼버\n공격속도 : 빠름\nSTR : +40\nDEX : +40\n공격력 + 128\n보스 몬스터 공격 시 데미지 +30%\n몬스터 방어력 무시: +10%\n업그레이드 가능 횟수 : 8";
            break;
        case 26:
            wrep = "무기분류 : 활\n공격속도 : 보통\nDEX : +40\nSTR : +40\n공격력 + 160\n보스 몬스터 공격 시 데미지 +30%\n몬스터 방어력 무시: +10%\n업그레이드 가능 횟수 : 8";
            break;
        case 27:
            wrep = "무기분류 : 석궁\n공격속도 : 보통\nDEX : +40\nSTR : +40\n공격력 + 164\n보스 몬스터 공격 시 데미지 +30%\n몬스터 방어력 무시: +10%\n업그레이드 가능 횟수 : 8";
            break;
        case 28:
            wrep = "무기분류 : 듀얼보우건\n공격속도 : 보통\nDEX : +40\nSTR : +40\n공격력 + 160\n보스 몬스터 공격 시 데미지 +30%\n몬스터 방어력 무시: +10%\n업그레이드 가능 횟수 : 8";
            break;
        case 29:
            wrep = "무기분류 : 에인션트 보우\n공격속도 : 보통\nDEX : +40\nSTR : +40\n공격력 + 160\n보스 몬스터 공격 시 데미지 +30%\n몬스터 방어력 무시: +10%\n업그레이드 가능 횟수 : 8";
            break;
        case 30:
            wrep = "무기분류 : 아대\n공격속도 : 빠름\nLUK : +40\nDEX : +40\n공격력 + 86\n보스 몬스터 공격 시 데미지 +30%\n몬스터 방어력 무시: +10%\n업그레이드 가능 횟수 : 8";
            break;
        case 31:
            wrep = "무기분류 : 건\n공격속도 : 빠름\nDEX : +40\nSTR : +40\n공격력 + 125\n보스 몬스터 공격 시 데미지 +30%\n몬스터 방어력 무시: +10%\n업그레이드 가능 횟수 : 8";
            break;
        case 32:
            wrep = "무기분류 : 너클\n공격속도 : 빠름\nSTR : +40\nDEX : +40\n공격력 + 128\n보스 몬스터 공격 시 데미지 +30%\n몬스터 방어력 무시: +10%\n업그레이드 가능 횟수 : 8";
            break;
        case 33:
            wrep = "무기분류 : 핸드캐논\n공격속도 : 느림\nSTR : +40\nDEX : +40\n공격력 + 175\n보스 몬스터 공격 시 데미지 +30%\n몬스터 방어력 무시: +10%\n업그레이드 가능 횟수 : 8";
            break;
        case 34:
            wrep = "무기분류 : 두손검\n공격속도 : 보통\nSTR : +40\nDEX : +40\n공격력 + 400\n보스 몬스터 공격 시 데미지 +30%\n몬스터 방어력 무시: +10%\n업그레이드 가능 횟수 : 8";
            break;
    }
    return wrep
};

function getWeapon2(wpcode){
    wrep = "";
    switch(wpcode){        
        case 0:
            wrep = "무기분류 : 한손검\n공격속도 : 빠름\nSTR : +60\nDEX : +60\n공격력 + 197\n보스 몬스터 공격 시 데미지 +30%\n몬스터 방어력 무시 : +10%\n업그레이드 가능 횟수 : 8";
            break;
        case 1:
            wrep = "무기분류 : 한손도끼\n공격속도 : 빠름\nSTR : +60\nDEX : +60\n공격력 + 197\n보스 몬스터 공격 시 데미지 +30%\n몬스터 방어력 무시: +10%\n업그레이드 가능 횟수 : 8";
            break;
        case 2:
            wrep = "무기분류 : 한손둔기\n공격속도 : 빠름\nSTR : +60\nDEX : +60\n공격력 + 197\n보스 몬스터 공격 시 데미지 +30%\n몬스터 방어력 무시: +10%\n업그레이드 가능 횟수 : 8";
            break;
        case 3:
            wrep = "무기분류 : 스태프\n공격속도 : 느림\nINT : +60\nLUK : +60\n마력 + 245\n보스 몬스터 공격 시 데미지 +30%\n몬스터 방어력 무시: +10%\n업그레이드 가능 횟수 : 8";
            break;
        case 4:
            wrep = "무기분류 : 완드\n공격속도 : 보통\nINT : +60\nLUK : +60\n마력 + 241\n보스 몬스터 공격 시 데미지 +30%\n몬스터 방어력 무시: +10%\n업그레이드 가능 횟수 : 8";
            break;
        case 5:
            wrep = "무기분류 : 샤이닝 로드\n공격속도 : 보통\nINT : +60\nLUK : +60\n마력 + 241\n보스 몬스터 공격 시 데미지 +30%\n몬스터 방어력 무시: +10%\n업그레이드 가능 횟수 : 8";
            break;
        case 6:
            wrep = "무기분류 : 단검\n공격속도 : 빠름\nLUK : +60\nDEX : +60\n공격력 + 192\n보스 몬스터 공격 시 데미지 +30%\n몬스터 방어력 무시: +10%\n업그레이드 가능 횟수 : 8";
            break;
        case 7:
            wrep = "무기분류 : 블레이드\n공격속도 : 매우 빠름\nLUK : +30\n공격력 + 97\n업그레이드 가능 횟수 : 8";
            break;
        case 8:
            wrep = "무기분류 : 케인\n공격속도 : 빠름\nLUK : +60\nDEX : +60\n공격력 + 197\n보스 몬스터 공격 시 데미지 +30%\n몬스터 방어력 무시: +10%\n업그레이드 가능 횟수 : 8";
            break;
        case 9:
            wrep = "무기분류 : 데스페라도\n공격속도 : 보통\nSTR : +60\nDEX : +60\n공격력 + 205\n보스 몬스터 공격 시 데미지 +30%\n몬스터 방어력 무시: +10%\n업그레이드 가능 횟수 : 8";
            break;
        case 10:
            wrep = "무기분류 : 에너지 소드\n공격속도 : 빠름\nSTR/DEX : +60\nDEX/LUK : +60\n공격력 + 154\n보스 몬스터 공격 시 데미지 +30%\n몬스터 방어력 무시: +10%\n업그레이드 가능 횟수 : 8";
            break;
        case 11:
            wrep = "무기분류 : 소울 슈터\n공격속도 : 빠름\nDEX : +60\nSTR : +60\n공격력 + 154\n보스 몬스터 공격 시 데미지 +30%\n몬스터 방어력 무시: +10%\n업그레이드 가능 횟수 : 8";
            break;
        case 12:
            wrep = "무기분류 : ESP 리미터\n공격속도 : 보통\nINT : +60\nLUK : +60\n마력 + 241\n보스 몬스터 공격 시 데미지 +30%\n몬스터 방어력 무시: +10%\n업그레이드 가능 횟수 : 8";
            break;
        case 13:
            wrep = "무기분류 : 체인\n공격속도 : 빠름\nLUK : +60\nDEX : +60\n공격력 + 192\n보스 몬스터 공격 시 데미지 +30%\n몬스터 방어력 무시: +10%\n업그레이드 가능 횟수 : 8";
            break;
        case 14:
            wrep = "무기분류 : 매직 건틀렛\n공격속도 : 보통\nINT : +60\nLUK : +60\n마력 + 241\n보스 몬스터 공격 시 데미지 +30%\n몬스터 방어력 무시: +10%\n업그레이드 가능 횟수 : 8";
            break;
        case 15:
            wrep = "무기분류 : 부채\n공격속도 : 빠름\nLUK : +60\nDEX : +60\n공격력 + 192\n보스 몬스터 공격 시 데미지 +30%\n몬스터 방어력 무시: +10%\n업그레이드 가능 횟수 : 8";
            break;
        case 16:
            wrep = "무기분류 : 튜너\n공격속도 : 빠름\nSTR : +60\nDEX : +60\n공격력 + 205\n보스 몬스터 공격 시 데미지 +30%\n몬스터 방어력 무시: +10%\n업그레이드 가능 횟수 : 8";
            break;
        case 17:
            wrep = "무기분류 : 브레스 슈터\n공격속도 : 빠름\nDEX : +60\nLUK : +60\n공격력 + 192\n보스 몬스터 공격 시 데미지 +30%\n몬스터 방어력 무시: +10%\n업그레이드 가능 횟수 : 8";
            break;
        case 18:
            wrep = "무기분류 : 두손검\n공격속도 : 보통\nSTR : +60\nDEX : +60\n공격력 + 205\n보스 몬스터 공격 시 데미지 +30%\n몬스터 방어력 무시: +10%\n업그레이드 가능 횟수 : 8";
            break;
        case 19:
            wrep = "무기분류 : 두손도끼\n공격속도 : 보통\nSTR : +60\nDEX : +60\n공격력 + 205\n보스 몬스터 공격 시 데미지 +30%\n몬스터 방어력 무시: +10%\n업그레이드 가능 횟수 : 8";
            break;
        case 20:
            wrep = "무기분류 : 두손둔기\n공격속도 : 보통\nSTR : +60\nDEX : +60\n공격력 + 205\n보스 몬스터 공격 시 데미지 +30%\n몬스터 방어력 무시: +10%\n업그레이드 가능 횟수 : 8";
            break;
        case 21:
            wrep = "무기분류 : 창\n공격속도 : 보통\nSTR : +60\nDEX : +60\n공격력 + 205\n보스 몬스터 공격 시 데미지 +30%\n몬스터 방어력 무시: +10%\n업그레이드 가능 횟수 : 8";
            break;
        case 22:
            wrep = "무기분류 : 폴암\n공격속도 : 빠름\nSTR : +60\nDEX : +60\n공격력 + 184\n보스 몬스터 공격 시 데미지 +30%\n몬스터 방어력 무시: +10%\n업그레이드 가능 횟수 : 8";
            break;
        case 23:
            wrep = "무기분류 : 태도\n공격속도 : 보통\nSTR : +60\nDEX : +60\n공격력 + \n보스 몬스터 공격 시 데미지 +30%\n몬스터 방어력 무시: +10%\n업그레이드 가능 횟수 : 8";
            break;
        case 24:
            wrep = "무기분류 : 대검\n공격속도 : 느림\nSTR : +60\nDEX : +60\n공격력 + \n보스 몬스터 공격 시 데미지 +30%\n몬스터 방어력 무시: +10%\n업그레이드 가능 횟수 : 8";
            break;
        case 25:
            wrep = "무기분류 : 건틀렛 리볼버\n공격속도 : 빠름\nSTR : +60\nDEX : +60\n공격력 + 154\n보스 몬스터 공격 시 데미지 +30%\n몬스터 방어력 무시: +10%\n업그레이드 가능 횟수 : 8";
            break;
        case 26:
            wrep = "무기분류 : 활\n공격속도 : 보통\nDEX : +60\nSTR : +60\n공격력 + 192\n보스 몬스터 공격 시 데미지 +30%\n몬스터 방어력 무시: +10%\n업그레이드 가능 횟수 : 8";
            break;
        case 27:
            wrep = "무기분류 : 석궁\n공격속도 : 보통\nDEX : +60\nSTR : +60\n공격력 + 197\n보스 몬스터 공격 시 데미지 +30%\n몬스터 방어력 무시: +10%\n업그레이드 가능 횟수 : 8";
            break;
        case 28:
            wrep = "무기분류 : 듀얼보우건\n공격속도 : 보통\nDEX : +60\nSTR : +60\n공격력 + 192\n보스 몬스터 공격 시 데미지 +30%\n몬스터 방어력 무시: +10%\n업그레이드 가능 횟수 : 8";
            break;
        case 29:
            wrep = "무기분류 : 에인션트 보우\n공격속도 : 보통\nDEX : +60\nSTR : +60\n공격력 + 192\n보스 몬스터 공격 시 데미지 +30%\n몬스터 방어력 무시: +10%\n업그레이드 가능 횟수 : 8";
            break;
        case 30:
            wrep = "무기분류 : 아대\n공격속도 : 빠름\nLUK : +60\nDEX : +60\n공격력 + 103\n보스 몬스터 공격 시 데미지 +30%\n몬스터 방어력 무시: +10%\n업그레이드 가능 횟수 : 8";
            break;
        case 31:
            wrep = "무기분류 : 건\n공격속도 : 빠름\nDEX : +60\nSTR : +60\n공격력 + 150\n보스 몬스터 공격 시 데미지 +30%\n몬스터 방어력 무시: +10%\n업그레이드 가능 횟수 : 8";
            break;
        case 32:
            wrep = "무기분류 : 너클\n공격속도 : 빠름\nSTR : +60\nDEX : +60\n공격력 + 154\n보스 몬스터 공격 시 데미지 +30%\n몬스터 방어력 무시: +10%\n업그레이드 가능 횟수 : 8";
            break;
        case 33:
            wrep = "무기분류 : 핸드캐논\n공격속도 : 느림\nSTR : +60\nDEX : +60\n공격력 + 210\n보스 몬스터 공격 시 데미지 +30%\n몬스터 방어력 무시: +10%\n업그레이드 가능 횟수 : 8";
            break;
        case 34:
            wrep = "-";
            break;
    }
    return wrep
};

function getWeapon3(wpcode){
    wrep = "";
    switch(wpcode){        
        case 0:
            wrep = "무기분류 : 한손검\n공격속도 : 빠름\nSTR : +100\nDEX : +100\n공격력 + 283\n보스 몬스터 공격 시 데미지 +30%\n몬스터 방어력 무시 : +20%\n업그레이드 가능 횟수 : 8";
            break;
        case 1:
            wrep = "무기분류 : 한손도끼\n공격속도 : 빠름\nSTR : +100\nDEX : +100\n공격력 + 283\n보스 몬스터 공격 시 데미지 +30%\n몬스터 방어력 무시: +10%\n업그레이드 가능 횟수 : 8";
            break;
        case 2:
            wrep = "무기분류 : 한손둔기\n공격속도 : 빠름\nSTR : +100\nDEX : +100\n공격력 + 283\n보스 몬스터 공격 시 데미지 +30%\n몬스터 방어력 무시: +10%\n업그레이드 가능 횟수 : 8";
            break;
        case 3:
            wrep = "무기분류 : 스태프\n공격속도 : 느림\nINT : +100\nLUK : +100\n마력 + 353\n보스 몬스터 공격 시 데미지 +30%\n몬스터 방어력 무시: +10%\n업그레이드 가능 횟수 : 8";
            break;
        case 4:
            wrep = "무기분류 : 완드\n공격속도 : 보통\nINT : +100\nLUK : +100\n마력 + 347\n보스 몬스터 공격 시 데미지 +30%\n몬스터 방어력 무시: +10%\n업그레이드 가능 횟수 : 8";
            break;
        case 5:
            wrep = "무기분류 : 샤이닝 로드\n공격속도 : 보통\nINT : +100\nLUK : +100\n마력 + 347\n보스 몬스터 공격 시 데미지 +30%\n몬스터 방어력 무시: +10%\n업그레이드 가능 횟수 : 8";
            break;
        case 6:
            wrep = "무기분류 : 단검\n공격속도 : 빠름\nLUK : +100\nDEX : +100\n공격력 + 276\n보스 몬스터 공격 시 데미지 +30%\n몬스터 방어력 무시: +10%\n업그레이드 가능 횟수 : 8";
            break;
        case 7:
            wrep = "무기분류 : 블레이드\n공격속도 : 매우 빠름\nLUK : +65\n공격력 + 140\n업그레이드 가능 횟수 : 8";
            break;
        case 8:
            wrep = "무기분류 : 케인\n공격속도 : 빠름\nLUK : +100\nDEX : +100\n공격력 + 283\n보스 몬스터 공격 시 데미지 +30%\n몬스터 방어력 무시: +10%\n업그레이드 가능 횟수 : 8";
            break;
        case 9:
            wrep = "무기분류 : 데스페라도\n공격속도 : 보통\nSTR : +100\nDEX : +100\n공격력 + 295\n보스 몬스터 공격 시 데미지 +30%\n몬스터 방어력 무시: +10%\n업그레이드 가능 횟수 : 8";
            break;
        case 10:
            wrep = "무기분류 : 에너지 소드\n공격속도 : 빠름\nSTR/DEX : +100\nDEX/LUK : +100\n공격력 + 221\n보스 몬스터 공격 시 데미지 +30%\n몬스터 방어력 무시: +10%\n업그레이드 가능 횟수 : 8";
            break;
        case 11:
            wrep = "무기분류 : 소울 슈터\n공격속도 : 빠름\nDEX : +100\nSTR : +100\n공격력 + 221\n보스 몬스터 공격 시 데미지 +30%\n몬스터 방어력 무시: +10%\n업그레이드 가능 횟수 : 8";
            break;
        case 12:
            wrep = "무기분류 : ESP 리미터\n공격속도 : 보통\nINT : +100\nLUK : +100\n마력 + 347\n보스 몬스터 공격 시 데미지 +30%\n몬스터 방어력 무시: +10%\n업그레이드 가능 횟수 : 8";
            break;
        case 13:
            wrep = "무기분류 : 체인\n공격속도 : 빠름\nLUK : +100\nDEX : +100\n공격력 + 276\n보스 몬스터 공격 시 데미지 +30%\n몬스터 방어력 무시: +10%\n업그레이드 가능 횟수 : 8";
            break;
        case 14:
            wrep = "무기분류 : 매직 건틀렛\n공격속도 : 보통\nINT : +100\nLUK : +100\n마력 + 347\n보스 몬스터 공격 시 데미지 +30%\n몬스터 방어력 무시: +10%\n업그레이드 가능 횟수 : 8";
            break;
        case 15:
            wrep = "무기분류 : 부채\n공격속도 : 빠름\nLUK : +100\nDEX : +100\n공격력 + 276\n보스 몬스터 공격 시 데미지 +30%\n몬스터 방어력 무시: +10%\n업그레이드 가능 횟수 : 8";
            break;
        case 16:
            wrep = "무기분류 : 튜너\n공격속도 : 빠름\nSTR : +100\nDEX : +100\n공격력 + 295\n보스 몬스터 공격 시 데미지 +30%\n몬스터 방어력 무시: +10%\n업그레이드 가능 횟수 : 8";
            break;
        case 17:
            wrep = "무기분류 : 브레스 슈터\n공격속도 : 빠름\nDEX : +100\nLUK : +100\n공격력 + 276\n보스 몬스터 공격 시 데미지 +30%\n몬스터 방어력 무시: +10%\n업그레이드 가능 횟수 : 8";
            break;
        case 18:
            wrep = "무기분류 : 두손검\n공격속도 : 보통\nSTR : +100\nDEX : +100\n공격력 + 295\n보스 몬스터 공격 시 데미지 +30%\n몬스터 방어력 무시: +10%\n업그레이드 가능 횟수 : 8";
            break;
        case 19:
            wrep = "무기분류 : 두손도끼\n공격속도 : 보통\nSTR : +100\nDEX : +100\n공격력 + 295\n보스 몬스터 공격 시 데미지 +30%\n몬스터 방어력 무시: +10%\n업그레이드 가능 횟수 : 8";
            break;
        case 20:
            wrep = "무기분류 : 두손둔기\n공격속도 : 보통\nSTR : +100\nDEX : +100\n공격력 + 295\n보스 몬스터 공격 시 데미지 +30%\n몬스터 방어력 무시: +10%\n업그레이드 가능 횟수 : 8";
            break;
        case 21:
            wrep = "무기분류 : 창\n공격속도 : 보통\nSTR : +100\nDEX : +100\n공격력 + 295\n보스 몬스터 공격 시 데미지 +30%\n몬스터 방어력 무시: +10%\n업그레이드 가능 횟수 : 8";
            break;
        case 22:
            wrep = "무기분류 : 폴암\n공격속도 : 빠름\nSTR : +100\nDEX : +100\n공격력 + 264\n보스 몬스터 공격 시 데미지 +30%\n몬스터 방어력 무시: +10%\n업그레이드 가능 횟수 : 8";
            break;
        case 23:
            wrep = "무기분류 : 태도\n공격속도 : 보통\nSTR : +100\nDEX : +100\n공격력 + 293\n보스 몬스터 공격 시 데미지 +30%\n몬스터 방어력 무시: +10%\n업그레이드 가능 횟수 : 8";
            break;
        case 24:
            wrep = "무기분류 : 대검\n공격속도 : 느림\nSTR : +100\nDEX : +100\n공격력 + 297\n보스 몬스터 공격 시 데미지 +30%\n몬스터 방어력 무시: +10%\n업그레이드 가능 횟수 : 8";
            break;
        case 25:
            wrep = "무기분류 : 건틀렛 리볼버\n공격속도 : 빠름\nSTR : +100\nDEX : +100\n공격력 + 221\n보스 몬스터 공격 시 데미지 +30%\n몬스터 방어력 무시: +10%\n업그레이드 가능 횟수 : 8";
            break;
        case 26:
            wrep = "무기분류 : 활\n공격속도 : 보통\nDEX : +100\nSTR : +100\n공격력 + 276\n보스 몬스터 공격 시 데미지 +30%\n몬스터 방어력 무시: +10%\n업그레이드 가능 횟수 : 8";
            break;
        case 27:
            wrep = "무기분류 : 석궁\n공격속도 : 보통\nDEX : +100\nSTR : +100\n공격력 + 283\n보스 몬스터 공격 시 데미지 +30%\n몬스터 방어력 무시: +10%\n업그레이드 가능 횟수 : 8";
            break;
        case 28:
            wrep = "무기분류 : 듀얼보우건\n공격속도 : 보통\nDEX : +100\nSTR : +100\n공격력 + 276\n보스 몬스터 공격 시 데미지 +30%\n몬스터 방어력 무시: +10%\n업그레이드 가능 횟수 : 8";
            break;
        case 29:
            wrep = "무기분류 : 에인션트 보우\n공격속도 : 보통\nDEX : +100\nSTR : +100\n공격력 + 276\n보스 몬스터 공격 시 데미지 +30%\n몬스터 방어력 무시: +10%\n업그레이드 가능 횟수 : 8";
            break;
        case 30:
            wrep = "무기분류 : 아대\n공격속도 : 빠름\nSTR : +100\nLUK : +100\n공격력 + 149\n보스 몬스터 공격 시 데미지 +30%\n몬스터 방어력 무시: +10%\n업그레이드 가능 횟수 : 8";
            break;
        case 31:
            wrep = "무기분류 : 건\n공격속도 : 빠름\nDEX : +100\nSTR : +100\n공격력 + 216\n보스 몬스터 공격 시 데미지 +30%\n몬스터 방어력 무시: +10%\n업그레이드 가능 횟수 : 8";
            break;
        case 32:
            wrep = "무기분류 : 너클\n공격속도 : 빠름\nSTR : +100\nDEX : +100\n공격력 + 221\n보스 몬스터 공격 시 데미지 +30%\n몬스터 방어력 무시: +10%\n업그레이드 가능 횟수 : 8";
            break;
        case 33:
            wrep = "무기분류 : 핸드캐논\n공격속도 : 느림\nSTR : +100\nDEX : +100\n공격력 + 302\n보스 몬스터 공격 시 데미지 +30%\n몬스터 방어력 무시: +10%\n업그레이드 가능 횟수 : 8";
            break;
        case 34:
            wrep = "-";
            break;
    }
    return wrep
};

function getWeapon4(wpcode){
    wrep = "";
    switch(wpcode){        
        case 0:
            wrep = "무기분류 : 한손검\n공격속도 : 빠름\nSTR : +150\nDEX : +150\n공격력 + 326\n보스 몬스터 공격 시 데미지 +30%\n몬스터 방어력 무시 : +20%";
            break;
        case 1:
            wrep = "무기분류 : 한손도끼\n공격속도 : 빠름\nSTR : +150\nDEX : +150\n공격력 + 326\n보스 몬스터 공격 시 데미지 +30%\n몬스터 방어력 무시: +20%";
            break;
        case 2:
            wrep = "무기분류 : 한손둔기\n공격속도 : 빠름\nSTR : +150\nDEX : +150\n공격력 + 326\n보스 몬스터 공격 시 데미지 +30%\n몬스터 방어력 무시: +20%";
            break;
        case 3:
            wrep = "무기분류 : 스태프\n공격속도 : 느림\nINT : +150\nLUK : +150\n마력 + 406\n보스 몬스터 공격 시 데미지 +30%\n몬스터 방어력 무시: +20%";
            break;
        case 4:
            wrep = "무기분류 : 완드\n공격속도 : 보통\nINT : +150\nLUK : +150\n마력 + 400\n보스 몬스터 공격 시 데미지 +30%\n몬스터 방어력 무시: +20%";
            break;
        case 5:
            wrep = "무기분류 : 샤이닝 로드\n공격속도 : 보통\nINT : +150\nLUK : +150\n마력 + 400\n보스 몬스터 공격 시 데미지 +30%\n몬스터 방어력 무시: +20%";
            break;
        case 6:
            wrep = "무기분류 : 단검\n공격속도 : 빠름\nLUK : +150\nDEX : +150\n공격력 + 318\n보스 몬스터 공격 시 데미지 +30%\n몬스터 방어력 무시: +20%";
            break;
        case 7:
            wrep = "-";
            break;
        case 8:
            wrep = "무기분류 : 케인\n공격속도 : 빠름\nLUK : +150\nDEX : +150\n공격력 + 326\n보스 몬스터 공격 시 데미지 +30%\n몬스터 방어력 무시: +20%";
            break;
        case 9:
            wrep = "무기분류 : 데스페라도\n공격속도 : 보통\nSTR : +150\nDEX : +150\n공격력 + 340\n보스 몬스터 공격 시 데미지 +30%\n몬스터 방어력 무시: +20%";
            break;
        case 10:
            wrep = "무기분류 : 에너지 소드\n공격속도 : 빠름\nSTR/DEX : +150\nDEX/LUK : +150\n공격력 + 255\n보스 몬스터 공격 시 데미지 +30%\n몬스터 방어력 무시: +20%";
            break;
        case 11:
            wrep = "무기분류 : 소울 슈터\n공격속도 : 빠름\nDEX : +150\nSTR : +150\n공격력 + 255\n보스 몬스터 공격 시 데미지 +30%\n몬스터 방어력 무시: +20%";
            break;
        case 12:
            wrep = "무기분류 : ESP 리미터\n공격속도 : 보통\nINT : +150\nLUK : +150\n마력 + 400\n보스 몬스터 공격 시 데미지 +30%\n몬스터 방어력 무시: +20%";
            break;
        case 13:
            wrep = "무기분류 : 체인\n공격속도 : 빠름\nLUK : +150\nDEX : +150\n공격력 + 318\n보스 몬스터 공격 시 데미지 +30%\n몬스터 방어력 무시: +20%";
            break;
        case 14:
            wrep = "무기분류 : 매직 건틀렛\n공격속도 : 보통\nINT : +150\nLUK : +150\n마력 + 400\n보스 몬스터 공격 시 데미지 +30%\n몬스터 방어력 무시: +20%";
            break;
        case 15:
            wrep = "무기분류 : 부채\n공격속도 : 빠름\nLUK : +150\nDEX : +150\n공격력 + 318\n보스 몬스터 공격 시 데미지 +30%\n몬스터 방어력 무시: +20%";
            break;
        case 16:
            wrep = "무기분류 : 튜너\n공격속도 : 빠름\nSTR : +150\nDEX : +150\n공격력 + 340\n보스 몬스터 공격 시 데미지 +30%\n몬스터 방어력 무시: +20%";
            break;
        case 17:
            wrep = "무기분류 : 브레스 슈터\n공격속도 : 빠름\nDEX : +150\nLUK : +150\n공격력 + 318\n보스 몬스터 공격 시 데미지 +30%\n몬스터 방어력 무시: +20%";
            break;
        case 18:
            wrep = "무기분류 : 두손검\n공격속도 : 보통\nSTR : +150\nDEX : +150\n공격력 + 340\n보스 몬스터 공격 시 데미지 +30%\n몬스터 방어력 무시: +20%";
            break;
        case 19:
            wrep = "무기분류 : 두손도끼\n공격속도 : 보통\nSTR : +150\nDEX : +150\n공격력 + 340\n보스 몬스터 공격 시 데미지 +30%\n몬스터 방어력 무시: +20%";
            break;
        case 20:
            wrep = "무기분류 : 두손둔기\n공격속도 : 보통\nSTR : +150\nDEX : +150\n공격력 + 340\n보스 몬스터 공격 시 데미지 +30%\n몬스터 방어력 무시: +20%";
            break;
        case 21:
            wrep = "무기분류 : 창\n공격속도 : 보통\nSTR : +150\nDEX : +150\n공격력 + 340\n보스 몬스터 공격 시 데미지 +30%\n몬스터 방어력 무시: +20%";
            break;
        case 22:
            wrep = "무기분류 : 폴암\n공격속도 : 빠름\nSTR : +150\nDEX : +150\n공격력 + 304\n보스 몬스터 공격 시 데미지 +30%\n몬스터 방어력 무시: +20%";
            break;
        case 23:
            wrep = "무기분류 : 태도\n공격속도 : 보통\nSTR : +150\nDEX : +150\n공격력 + 337\n보스 몬스터 공격 시 데미지 +30%\n몬스터 방어력 무시: +20%";
            break;
        case 24:
            wrep = "무기분류 : 대검\n공격속도 : 느림\nSTR : +150\nDEX : +150\n공격력 + 342\n보스 몬스터 공격 시 데미지 +30%\n몬스터 방어력 무시: +20%";
            break;
        case 25:
            wrep = "무기분류 : 건틀렛 리볼버\n공격속도 : 빠름\nSTR : +150\nDEX : +150\n공격력 + 255\n보스 몬스터 공격 시 데미지 +30%\n몬스터 방어력 무시: +20%";
            break;
        case 26:
            wrep = "무기분류 : 활\n공격속도 : 보통\nDEX : +150\nSTR : +150\n공격력 + 318\n보스 몬스터 공격 시 데미지 +30%\n몬스터 방어력 무시: +20%";
            break;
        case 27:
            wrep = "무기분류 : 석궁\n공격속도 : 보통\nDEX : +150\nSTR : +150\n공격력 + 326\n보스 몬스터 공격 시 데미지 +30%\n몬스터 방어력 무시: +20%";
            break;
        case 28:
            wrep = "무기분류 : 듀얼보우건\n공격속도 : 보통\nDEX : +150\nSTR : +150\n공격력 + 318\n보스 몬스터 공격 시 데미지 +30%\n몬스터 방어력 무시: +20%";
            break;
        case 29:
            wrep = "무기분류 : 에인션트 보우\n공격속도 : 보통\nDEX : +150\nSTR : +150\n공격력 + 318\n보스 몬스터 공격 시 데미지 +30%\n몬스터 방어력 무시: +20%";
            break;
        case 30:
            wrep = "무기분류 : 아대\n공격속도 : 빠름\nLUK : +150\nDEX : +150\n공격력 + 172\n보스 몬스터 공격 시 데미지 +30%\n몬스터 방어력 무시: +20%";
            break;
        case 31:
            wrep = "무기분류 : 건\n공격속도 : 빠름\nDEX : +150\nSTR : +150\n공격력 + 249\n보스 몬스터 공격 시 데미지 +30%\n몬스터 방어력 무시: +20%";
            break;
        case 32:
            wrep = "무기분류 : 너클\n공격속도 : 빠름\nSTR : +150\nDEX : +150\n공격력 + 255\n보스 몬스터 공격 시 데미지 +30%\n몬스터 방어력 무시: +20%";
            break;
        case 33:
            wrep = "무기분류 : 핸드캐논\n공격속도 : 느림\nSTR : +150\nDEX : +150\n공격력 + 348\n보스 몬스터 공격 시 데미지 +30%\n몬스터 방어력 무시: +20%";
            break;
        case 34:
            wrep = "-";
            break;
    }
    return wrep
};

function getWeaponicon1(wpcode){
    wrep = "";
    switch(wpcode){
        case 0:
            wrep = "https://i.imgur.com/QRjyiWz.png";
            break;
        case 1:
            wrep = "https://i.imgur.com/OtGBOxv.png";
            break;
        case 2:
            wrep = "https://i.imgur.com/IpNWqys.png";
            break;
        case 3:
            wrep = "https://i.imgur.com/Zqtnhq0.png";
            break;
        case 4:
            wrep = "https://i.imgur.com/IWCsYIg.png";
            break;
        case 5:
            wrep = "https://i.imgur.com/1NjEN0O.png";
            break;
        case 6:
            wrep = "https://i.imgur.com/Nzkqlpt.png";
            break;
        case 7:
            wrep = "https://i.imgur.com/p6ixOvt.png";
            break;
        case 8:
            wrep = "https://i.imgur.com/yeFB6Ha.png";
            break;
        case 9:
            wrep = "https://i.imgur.com/R6Avb3B.png";
            break;
        case 10:
            wrep = "https://i.imgur.com/mfBCDRr.png";
            break;
        case 11:
            wrep = "https://i.imgur.com/493tzWP.png";
            break;
        case 12:
            wrep = "https://i.imgur.com/IsUDfiB.png";
            break;
        case 13:
            wrep = "https://i.imgur.com/W7nREC2.png";
            break;
        case 14:
            wrep = "https://i.imgur.com/TM1Vfur.png";
            break;
        case 15:
            wrep = "https://i.imgur.com/ngAIFdH.png";
            break;
        case 16:
            wrep = "https://i.imgur.com/2Noh9pi.png";
            break;
        case 17:
            wrep = "https://i.imgur.com/f6mzKeG.png";
            break;
        case 18:
            wrep = "https://i.imgur.com/EfrKJ71.png";
            break;
        case 19:
            wrep = "https://i.imgur.com/eVS8muq.png";
            break;
        case 20:
            wrep = "https://i.imgur.com/KsUatde.png";
            break;
        case 21:
            wrep = "https://i.imgur.com/DunHFuM.png";
            break;
        case 22:
            wrep = "https://i.imgur.com/SIeznbT.png";
            break;
        case 23:
            wrep = "https://i.imgur.com/jXY2z2K.png";
            break;
        case 24:
            wrep = "https://i.imgur.com/rdeid3D.png";
            break;
        case 25:
            wrep = "https://i.imgur.com/VzPr2F0.png";
            break;
        case 26:
            wrep = "https://i.imgur.com/liwWbWn.png";
            break;
        case 27:
            wrep = "https://i.imgur.com/MahbJVK.png";
            break;
        case 28:
            wrep = "https://i.imgur.com/kWguRa5.png";
            break;
        case 29:
            wrep = "https://i.imgur.com/zQYV2zK.png";
            break;
        case 30:
            wrep = "https://i.imgur.com/FS85d42.png";
            break;
        case 31:
            wrep = "https://i.imgur.com/bRMaQT9.png";
            break;
        case 32:
            wrep = "https://i.imgur.com/rWdkkgp.png";
            break;
        case 33:
            wrep = "https://i.imgur.com/z798b0E.png";
            break;
        case 34:
            wrep = "https://i.imgur.com/8KLyRQL.png";
            break;
    }
    return wrep;
};

function getWeaponicon2(wpcode){
    wrep = "";
    switch(wpcode){
        case 0:
            wrep = "https://i.imgur.com/znn8Pm6.png";
            break;
        case 1:
            wrep = "https://i.imgur.com/Qe0Ml2V.png";
            break;
        case 2:
            wrep = "https://i.imgur.com/ddogBDt.png";
            break;
        case 3:
            wrep = "https://i.imgur.com/sHP0T2I.png";
            break;
        case 4:
            wrep = "https://i.imgur.com/qcRtSu8.png";
            break;
        case 5:
            wrep = "https://i.imgur.com/JQu44BB.png";
            break;
        case 6:
            wrep = "https://i.imgur.com/LAle8vS.png";
            break;
        case 7:
            wrep = "https://i.imgur.com/zYgkdoF.png";
            break;
        case 8:
            wrep = "https://i.imgur.com/Hx7lHKk.png";
            break;
        case 9:
            wrep = "https://i.imgur.com/sT0IzQF.png";
            break;
        case 10:
            wrep = "https://i.imgur.com/xp7LkC0.png";
            break;
        case 11:
            wrep = "https://i.imgur.com/HbyBn4m.png";
            break;
        case 12:
            wrep = "https://i.imgur.com/B9lDqBQ.png";
            break;
        case 13:
            wrep = "https://i.imgur.com/UMaJ9zX.png";
            break;
        case 14:
            wrep = "https://i.imgur.com/n5ZFxwJ.png";
            break;
        case 15:
            wrep = "https://i.imgur.com/mim8MpT.png";
            break;
        case 16:
            wrep = "https://i.imgur.com/qHx3of9.png";
            break;
        case 17:
            wrep = "https://i.imgur.com/doMsQkf.png";
            break;
        case 18:
            wrep = "https://i.imgur.com/MpbwfTA.png";
            break;
        case 19:
            wrep = "https://i.imgur.com/XWfKGm7.png";
            break;
        case 20:
            wrep = "https://i.imgur.com/33y7Cco.png";
            break;
        case 21:
            wrep = "https://i.imgur.com/FszDj6q.png";
            break;
        case 22:
            wrep = "https://i.imgur.com/pXVoTbz.png";
            break;
        case 23:
            wrep = "https://i.imgur.com/ES8QUSw.png";
            break;
        case 24:
            wrep = "https://i.imgur.com/hpKuX7T.png";
            break;
        case 25:
            wrep = "https://i.imgur.com/TQfFY2N.png";
            break;
        case 26:
            wrep = "https://i.imgur.com/ndhiDeD.png";
            break;
        case 27:
            wrep = "https://i.imgur.com/u98feOh.png";
            break;
        case 28:
            wrep = "https://i.imgur.com/fS5m0XW.png";
            break;
        case 29:
            wrep = "https://i.imgur.com/wzegeoh.png";
            break;
        case 30:
            wrep = "https://i.imgur.com/meQfm8Q.png";
            break;
        case 31:
            wrep = "https://i.imgur.com/tnaYqg9.png";
            break;
        case 32:
            wrep = "https://i.imgur.com/RXcLVJ2.png";
            break;
        case 33:
            wrep = "https://i.imgur.com/WMy7KE1.png";
            break;
        case 34:
            wrep = "-";
            break;
    }
    return wrep;
};

function getWeaponicon3(wpcode){
    wrep = "";
    switch(wpcode){
        case 0:
            wrep = "https://i.imgur.com/qyj9Zed.png";
            break;
        case 1:
            wrep = "https://i.imgur.com/LUU9Hbn.png";
            break;
        case 2:
            wrep = "https://i.imgur.com/8QYnUIs.png";
            break;
        case 3:
            wrep = "https://i.imgur.com/05Rr8qL.png";
            break;
        case 4:
            wrep = "https://i.imgur.com/81YPfXK.png";
            break;
        case 5:
            wrep = "https://i.imgur.com/Ns4oU1y.png";
            break;
        case 6:
            wrep = "https://i.imgur.com/anrQwXv.png";
            break;
        case 7:
            wrep = "https://i.imgur.com/pSVp1Xk.png";
            break;
        case 8:
            wrep = "https://i.imgur.com/Et1enRU.png";
            break;
        case 9:
            wrep = "https://i.imgur.com/LIPnXQN.png";
            break;
        case 10:
            wrep = "https://i.imgur.com/cNURbwi.png";
            break;
        case 11:
            wrep = "https://i.imgur.com/QmzRw6E.png";
            break;
        case 12:
            wrep = "https://i.imgur.com/WdxpdrD.png";
            break;
        case 13:
            wrep = "https://i.imgur.com/Lt5H0po.png";
            break;
        case 14:
            wrep = "https://i.imgur.com/sicEjPE.png";
            break;
        case 15:
            wrep = "https://i.imgur.com/z0M7cCa.png";
            break;
        case 16:
            wrep = "https://i.imgur.com/cir6Hkn.png";
            break;
        case 17:
            wrep = "https://i.imgur.com/a9cZKqW.png";
            break;
        case 18:
            wrep = "https://i.imgur.com/T2uva86.png";
            break;
        case 19:
            wrep = "https://i.imgur.com/PpAEdMz.png";
            break;
        case 20:
            wrep = "https://i.imgur.com/Du92myn.png";
            break;
        case 21:
            wrep = "https://i.imgur.com/3VFCJ7P.png";
            break;
        case 22:
            wrep = "https://i.imgur.com/vrfTTSk.png";
            break;
        case 23:
            wrep = "https://i.imgur.com/sfnjdWA.png";
            break;
        case 24:
            wrep = "https://i.imgur.com/fogpEiD.png";
            break;
        case 25:
            wrep = "https://i.imgur.com/NkgpWvS.png";
            break;
        case 26:
            wrep = "https://i.imgur.com/mzSEuMQ.png";
            break;
        case 27:
            wrep = "https://i.imgur.com/5ZpOF7K.png";
            break;
        case 28:
            wrep = "https://i.imgur.com/MRxRBVK.png";
            break;
        case 29:
            wrep = "https://i.imgur.com/mwz1YHH.png";
            break;
        case 30:
            wrep = "https://i.imgur.com/Eaelo1m.png";
            break;
        case 31:
            wrep = "https://i.imgur.com/VZt0pSC.png";
            break;
        case 32:
            wrep = "https://i.imgur.com/Z4XmPAa.png";
            break;
        case 33:
            wrep = "https://i.imgur.com/aGKRnYi.png";
            break;
        case 34:
            wrep = "-";
            break;
    }
    return wrep;
};

function getWeaponicon4(wpcode){
    wrep = "";
    switch(wpcode){
        case 0:
            wrep = "https://i.imgur.com/0WTZOFQ.png";
            break;
        case 1:
            wrep = "https://i.imgur.com/CWW3DqU.png";
            break;
        case 2:
            wrep = "https://i.imgur.com/7jMPd2P.png";
            break;
        case 3:
            wrep = "https://i.imgur.com/hycTu5h.png";
            break;
        case 4:
            wrep = "https://i.imgur.com/Z95AnFx.png";
            break;
        case 5:
            wrep = "https://i.imgur.com/ZmEL1sv.png";
            break;
        case 6:
            wrep = "https://i.imgur.com/slCrAVs.png";
            break;
        case 7:
            wrep = "-";
            break;
        case 8:
            wrep = "https://i.imgur.com/NXU5AEq.png";
            break;
        case 9:
            wrep = "https://i.imgur.com/CW2IwBV.png";
            break;
        case 10:
            wrep = "https://i.imgur.com/DWNxT8D.png";
            break;
        case 11:
            wrep = "https://i.imgur.com/dCCEEL7.png";
            break;
        case 12:
            wrep = "https://i.imgur.com/GSYrvpK.png";
            break;
        case 13:
            wrep = "https://i.imgur.com/KeDwYJu.png";
            break;
        case 14:
            wrep = "https://i.imgur.com/3yRM0qm.png";
            break;
        case 15:
            wrep = "https://i.imgur.com/rEuN8ce.png";
            break;
        case 16:
            wrep = "https://i.imgur.com/QEGZ5RC.png";
            break;
        case 17:
            wrep = "https://i.imgur.com/q72ApBY.png";
            break;
        case 18:
            wrep = "https://i.imgur.com/IqedzZd.png";
            break;
        case 19:
            wrep = "https://i.imgur.com/Zj8LNg1.png";
            break;
        case 20:
            wrep = "https://i.imgur.com/Fs0lX8S.png";
            break;
        case 21:
            wrep = "https://i.imgur.com/yTNczCn.png";
            break;
        case 22:
            wrep = "https://i.imgur.com/YYvfyp8.png";
            break;
        case 23:
            wrep = "https://i.imgur.com/tsW44Su.png";
            break;
        case 24:
            wrep = "https://i.imgur.com/RZnVoqR.png";
            break;
        case 25:
            wrep = "https://i.imgur.com/RuMhar0.png";
            break;
        case 26:
            wrep = "https://i.imgur.com/fyJ43q9.png";
            break;
        case 27:
            wrep = "https://i.imgur.com/2BTPwK6.png";
            break;
        case 28:
            wrep = "https://i.imgur.com/7XGO92O.png";
            break;
        case 29:
            wrep = "https://i.imgur.com/EkTCRpk.png";
            break;
        case 30:
            wrep = "https://i.imgur.com/WmYFE1f.png";
            break;
        case 31:
            wrep = "https://i.imgur.com/KAN3uXf.png";
            break;
        case 32:
            wrep = "https://i.imgur.com/xmWQeiA.png";
            break;
        case 33:
            wrep = "https://i.imgur.com/Gq4aoZ2.png";
            break;
        case 34:
            wrep = "-";
            break;
    }
    return wrep;
};

function getArmorjob(arname){
    ret = -1;
    switch(arname){
        case "전사":
            ret = 0;
            break;
        case "마법사":
        case "법사":
            ret = 1;
            break;
        case "궁수":
            ret = 2;
            break;
        case "도적":
            ret = 3;
            break;
        case "해적":
            ret = 4;
            break;
    }
    return ret;
};

function getArmorname(arcode){
    var arname = "-";
    switch(arcode){
        case 0:
            arname = "전사 방어구 목록\n\n루타비스 세트\n1. 하이네스 워리어헬름\n2. 이글아이 워리어아머\n3. 트릭스터 워리어팬츠\n\n앱솔랩스 세트\n4. 앱솔랩스 나이트헬름\n5. 앱솔랩스 나이트슈트\n6. 앱솔랩스 나이트슈즈\n7. 앱솔랩스 나이트글러브\n8. 앱솔랩스 나이트케이프\n9. 앱솔랩스 나이트숄더\n\n아케인셰이드 세트\n10. 아케인셰이드 나이트햇\n11. 아케인셰이드 나이트슈트\n12. 아케인셰이드 나이트슈즈\n13. 아케인셰이드 나이트글러브\n14. 아케인셰이드 나이트케이프\n15. 아케인셰이드 나이트숄더\n\n에테르넬 세트\n16. 에테르넬 나이트헬름\n17. 에테르넬 나이트아머\n18. 에테르넬 나이트팬츠";
            break;
        case 1:
            arname = "마법사 방어구 목록\n\n루타비스 세트\n1. 하이네스 던위치햇\n2. 이글아이 던위치로브\n3. 트릭스터 던위치팬츠\n\n앱솔랩스 세트\n4. 앱솔랩스 메이지크라운\n5. 앱솔랩스 메이지슈트\n6. 앱솔랩스 메이지슈즈\n7. 앱솔랩스 메이지글러브\n8. 앱솔랩스 메이지케이프\n9. 앱솔랩스 메이지숄더\n\n아케인셰이드 세트\n10. 아케인셰이드 메이지햇\n11. 아케인셰이드 메이지슈트\n12. 아케인셰이드 메이지슈즈\n13. 아케인셰이드 메이지글러브\n14. 아케인셰이드 메이지케이프\n15. 아케인셰이드 메이지숄더\n\n에테르넬 세트\n16. 에테르넬 메이지햇\n17. 에테르넬 메이지로브\n18. 에테르넬 메이지팬츠";
            break;
        case 2:
            arname = "궁수 방어구 목록\n\n루타비스 세트\n1. 하이네스 레인져베레\n2. 이글아이 레인져후드\n3. 트릭스터 레인져팬츠\n\n앱솔랩스 세트\n4. 앱솔랩스 아처후드\n5. 앱솔랩스 아처슈트\n6. 앱솔랩스 아처슈즈\n7. 앱솔랩스 아처글러브\n8. 앱솔랩스 아처케이프\n9. 앱솔랩스 아처숄더\n\n아케인셰이드 세트\n10. 아케인셰이드 아처햇\n11. 아케인셰이드 아처슈트\n12. 아케인셰이드 아처슈즈\n13. 아케인셰이드 아처글러브\n14. 아케인셰이드 아처케이프\n15. 아케인셰이드 아처숄더\n\n에테르넬 세트\n16. 에테르넬 아처햇\n17. 에테르넬 아처후드\n18. 에테르넬 아처팬츠";
            break;
        case 3:
            arname = "도적 방어구 목록\n\n루타비스 세트\n1. 하이네스 어새신보닛\n2. 이글아이 어새신셔츠\n3. 트릭스터 어새신팬츠\n\n앱솔랩스 세트\n4. 앱솔랩스 시프캡\n5. 앱솔랩스 시프슈트\n6. 앱솔랩스 시프슈즈\n7. 앱솔랩스 시프글러브\n8. 앱솔랩스 시프케이프\n9. 앱솔랩스 시프숄더\n\n아케인셰이드 세트\n10. 아케인셰이드 시프햇\n11. 아케인셰이드 시프슈트\n12. 아케인셰이드 시프슈즈\n13. 아케인셰이드 시프글러브\n14. 아케인셰이드 시프케이프\n15. 아케인셰이드 시프숄더\n\n에테르넬 세트\n16. 에테르넬 시프반다나\n17. 에테르넬 시프셔츠\n18. 에테르넬 시프팬츠";
            break;
        case 4:
            arname = "해적 방어구 목록\n\n루타비스 세트\n1. 하이네스 원더러햇\n2. 이글아이 원더러코트\n3. 트릭스터 원더러팬츠\n\n앱솔랩스 세트\n4. 앱솔랩스 파이렛페도라\n5. 앱솔랩스 파이렛슈트\n6. 앱솔랩스 파이렛슈즈\n7. 앱솔랩스 파이렛글러브\n8. 앱솔랩스 파이렛케이프\n9. 앱솔랩스 파이렛숄더\n\n아케인셰이드 세트\n10. 아케인셰이드 파이렛햇\n11. 아케인셰이드 파이렛슈트\n12. 아케인셰이드 파이렛슈즈\n13. 아케인셰이드 파이렛글러브\n14. 아케인셰이드 파이렛케이프\n15. 아케인셰이드 파이렛숄더\n\n에테르넬 세트\n16. 에테르넬 파이렛햇\n17. 에테르넬 파이렛코트\n18. 에테르넬 파이렛팬츠";
            break;
    }
    return arname;
};

function getArmor1(arcode){
    arep = "";
    arname = getArmorname(0);
    arn = "";
    switch(arcode){
        case 1:
            arn = arname.split("1. ")[1].split("\n")[0];
            arep = "Lv. 150 " + arn + "+장비분류 : 모자\n";
            break;
        case 2:
            arn = arname.split("2. ")[1].split("\n")[0];
            arep = "Lv. 150 " + arn + "+장비분류 : 상의\n";
            break;
        case 3:
            arn = arname.split("3. ")[1].split("\n")[0];
            arep = "Lv. 150 " + arn + "+장비분류 : 하의\n";
            break;
        case 4:
            arn = arname.split("4. ")[1].split("\n")[0];
            arep = "Lv. 160 " + arn + "+장비분류 : 모자\n";
            break;
        case 5:
            arn = arname.split("5. ")[1].split("\n")[0];
            arep = "Lv. 160 " + arn + "+장비분류 : 한벌옷\n";
            break;
        case 6:
            arn = arname.split("6. ")[1].split("\n")[0];
            arep = "Lv. 160 " + arn + "+장비분류 : 신발\n";
            break;
        case 7:
            arn = arname.split("7. ")[1].split("\n")[0];
            arep = "Lv. 160 " + arn + "+장비분류 : 장갑\n";
            break;
        case 8:
            arn = arname.split("8. ")[1].split("\n")[0];
            arep = "Lv. 160 " + arn + "+장비분류 : 망토\n";
            break;
        case 9:
            arn = arname.split("9. ")[1].split("\n")[0];
            arep = "Lv. 160 " + arn + "+장비분류 : 어깨장식\n";
            break;
        case 10:
            arn = arname.split("10. ")[1].split("\n")[0];
            arep = "Lv. 200 " + arn + "+장비분류 : 모자\n";
            break;
        case 11:
            arn = arname.split("11. ")[1].split("\n")[0];
            arep = "Lv. 200 " + arn + "+장비분류 : 한벌옷\n";
            break;
        case 12:
            arn = arname.split("12. ")[1].split("\n")[0];
            arep = "Lv. 200 " + arn + "+장비분류 : 신발\n";
            break;
        case 13:
            arn = arname.split("13. ")[1].split("\n")[0];
            arep = "Lv. 200 " + arn + "+장비분류 : 장갑\n";
            break;
        case 14:
            arn = arname.split("14. ")[1].split("\n")[0];
            arep = "Lv. 200 " + arn + "+장비분류 : 망토\n";
            break;
        case 15:
            arn = arname.split("15. ")[1].split("\n")[0];
            arep = "Lv. 200 " + arn + "+장비분류 : 어깨장식\n";
            break;
        case 16:
            arn = arname.split("16. ")[1].split("\n")[0];
            arep = "Lv. 250 " + arn + "+장비분류 : 모자\n";
            break;
        case 17:
            arn = arname.split("17. ")[1].split("\n")[0];
            arep = "Lv. 250 " + arn + "+장비분류 : 상의\n";
            break;
        case 18:
            arn = arname.split("18. ")[1];
            arep = "Lv. 250 " + arn + "+장비분류 : 하의\n";
            break;
    }
    return arep;
}

function getArmor2(arcode){
    arep = "";
    arname = getArmorname(1);
    arn = "";
    switch(arcode){
        case 1:
            arn = arname.split("1. ")[1].split("\n")[0];
            arep = "Lv. 150 " + arn + "+";
            break;
        case 2:
            arn = arname.split("2. ")[1].split("\n")[0];
            arep = "Lv. 150 " + arn + "+";
            break;
        case 3:
            arn = arname.split("3. ")[1].split("\n")[0];
            arep = "Lv. 150 " + arn + "+";
            break;
        case 4:
            arn = arname.split("4. ")[1].split("\n")[0];
            arep = "Lv. 160 " + arn + "+";
            break;
        case 5:
            arn = arname.split("5. ")[1].split("\n")[0];
            arep = "Lv. 160 " + arn + "+";
            break;
        case 6:
            arn = arname.split("6. ")[1].split("\n")[0];
            arep = "Lv. 160 " + arn + "+";
            break;
        case 7:
            arn = arname.split("7. ")[1].split("\n")[0];
            arep = "Lv. 160 " + arn + "+";
            break;
        case 8:
            arn = arname.split("8. ")[1].split("\n")[0];
            arep = "Lv. 160 " + arn + "+";
            break;
        case 9:
            arn = arname.split("9. ")[1].split("\n")[0];
            arep = "Lv. 160 " + arn + "+";
            break;
        case 10:
            arn = arname.split("10. ")[1].split("\n")[0];
            arep = "Lv. 200 " + arn + "+";
            break;
        case 11:
            arn = arname.split("11. ")[1].split("\n")[0];
            arep = "Lv. 200 " + arn + "+";
            break;
        case 12:
            arn = arname.split("12. ")[1].split("\n")[0];
            arep = "Lv. 200 " + arn + "+";
            break;
        case 13:
            arn = arname.split("13. ")[1].split("\n")[0];
            arep = "Lv. 200 " + arn + "+";
            break;
        case 14:
            arn = arname.split("14. ")[1].split("\n")[0];
            arep = "Lv. 200 " + arn + "+";
            break;
        case 15:
            arn = arname.split("15. ")[1].split("\n")[0];
            arep = "Lv. 200 " + arn + "+";
            break;
        case 16:
            arn = arname.split("16. ")[1].split("\n")[0];
            arep = "Lv. 250 " + arn + "+";
            break;
        case 17:
            arn = arname.split("17. ")[1].split("\n")[0];
            arep = "Lv. 250 " + arn + "+";
            break;
        case 18:
            arn = arname.split("18. ")[1];
            arep = "Lv. 250 " + arn + "+";
            break;
    }
    return arep;
}

function getArmor3(arcode){
    arep = "";
    arname = getArmorname(2);
    arn = "";
    switch(arcode){
        case 1:
            arn = arname.split("1. ")[1].split("\n")[0];
            arep = "Lv. 150 " + arn + "+";
            break;
        case 2:
            arn = arname.split("2. ")[1].split("\n")[0];
            arep = "Lv. 150 " + arn + "+";
            break;
        case 3:
            arn = arname.split("3. ")[1].split("\n")[0];
            arep = "Lv. 150 " + arn + "+";
            break;
        case 4:
            arn = arname.split("4. ")[1].split("\n")[0];
            arep = "Lv. 160 " + arn + "+";
            break;
        case 5:
            arn = arname.split("5. ")[1].split("\n")[0];
            arep = "Lv. 160 " + arn + "+";
            break;
        case 6:
            arn = arname.split("6. ")[1].split("\n")[0];
            arep = "Lv. 160 " + arn + "+";
            break;
        case 7:
            arn = arname.split("7. ")[1].split("\n")[0];
            arep = "Lv. 160 " + arn + "+";
            break;
        case 8:
            arn = arname.split("8. ")[1].split("\n")[0];
            arep = "Lv. 160 " + arn + "+";
            break;
        case 9:
            arn = arname.split("9. ")[1].split("\n")[0];
            arep = "Lv. 160 " + arn + "+";
            break;
        case 10:
            arn = arname.split("10. ")[1].split("\n")[0];
            arep = "Lv. 200 " + arn + "+";
            break;
        case 11:
            arn = arname.split("11. ")[1].split("\n")[0];
            arep = "Lv. 200 " + arn + "+";
            break;
        case 12:
            arn = arname.split("12. ")[1].split("\n")[0];
            arep = "Lv. 200 " + arn + "+";
            break;
        case 13:
            arn = arname.split("13. ")[1].split("\n")[0];
            arep = "Lv. 200 " + arn + "+";
            break;
        case 14:
            arn = arname.split("14. ")[1].split("\n")[0];
            arep = "Lv. 200 " + arn + "+";
            break;
        case 15:
            arn = arname.split("15. ")[1].split("\n")[0];
            arep = "Lv. 200 " + arn + "+";
            break;
        case 16:
            arn = arname.split("16. ")[1].split("\n")[0];
            arep = "Lv. 250 " + arn + "+";
            break;
        case 17:
            arn = arname.split("17. ")[1].split("\n")[0];
            arep = "Lv. 250 " + arn + "+";
            break;
        case 18:
            arn = arname.split("18. ")[1];
            arep = "Lv. 250 " + arn + "+";
            break;
    }
    return arep;
}

function getArmor4(arcode){
    arep = "";
    arname = getArmorname(3);
    arn = "";
    switch(arcode){
        case 1:
            arn = arname.split("1. ")[1].split("\n")[0];
            arep = "Lv. 150 " + arn + "+";
            break;
        case 2:
            arn = arname.split("2. ")[1].split("\n")[0];
            arep = "Lv. 150 " + arn + "+";
            break;
        case 3:
            arn = arname.split("3. ")[1].split("\n")[0];
            arep = "Lv. 150 " + arn + "+";
            break;
        case 4:
            arn = arname.split("4. ")[1].split("\n")[0];
            arep = "Lv. 160 " + arn + "+";
            break;
        case 5:
            arn = arname.split("5. ")[1].split("\n")[0];
            arep = "Lv. 160 " + arn + "+";
            break;
        case 6:
            arn = arname.split("6. ")[1].split("\n")[0];
            arep = "Lv. 160 " + arn + "+";
            break;
        case 7:
            arn = arname.split("7. ")[1].split("\n")[0];
            arep = "Lv. 160 " + arn + "+";
            break;
        case 8:
            arn = arname.split("8. ")[1].split("\n")[0];
            arep = "Lv. 160 " + arn + "+";
            break;
        case 9:
            arn = arname.split("9. ")[1].split("\n")[0];
            arep = "Lv. 160 " + arn + "+";
            break;
        case 10:
            arn = arname.split("10. ")[1].split("\n")[0];
            arep = "Lv. 200 " + arn + "+";
            break;
        case 11:
            arn = arname.split("11. ")[1].split("\n")[0];
            arep = "Lv. 200 " + arn + "+";
            break;
        case 12:
            arn = arname.split("12. ")[1].split("\n")[0];
            arep = "Lv. 200 " + arn + "+";
            break;
        case 13:
            arn = arname.split("13. ")[1].split("\n")[0];
            arep = "Lv. 200 " + arn + "+";
            break;
        case 14:
            arn = arname.split("14. ")[1].split("\n")[0];
            arep = "Lv. 200 " + arn + "+";
            break;
        case 15:
            arn = arname.split("15. ")[1].split("\n")[0];
            arep = "Lv. 200 " + arn + "+";
            break;
        case 16:
            arn = arname.split("16. ")[1].split("\n")[0];
            arep = "Lv. 250 " + arn + "+";
            break;
        case 17:
            arn = arname.split("17. ")[1].split("\n")[0];
            arep = "Lv. 250 " + arn + "+";
            break;
        case 18:
            arn = arname.split("18. ")[1];
            arep = "Lv. 250 " + arn + "+";
            break;
    }
    return arep;
}

function getArmor5(arcode){
    arep = "";
    arname = getArmorname(4);
    arn = "";
    switch(arcode){
        case 1:
            arn = arname.split("1. ")[1].split("\n")[0];
            arep = "Lv. 150 " + arn + "+";
            break;
        case 2:
            arn = arname.split("2. ")[1].split("\n")[0];
            arep = "Lv. 150 " + arn + "+";
            break;
        case 3:
            arn = arname.split("3. ")[1].split("\n")[0];
            arep = "Lv. 150 " + arn + "+";
            break;
        case 4:
            arn = arname.split("4. ")[1].split("\n")[0];
            arep = "Lv. 160 " + arn + "+";
            break;
        case 5:
            arn = arname.split("5. ")[1].split("\n")[0];
            arep = "Lv. 160 " + arn + "+";
            break;
        case 6:
            arn = arname.split("6. ")[1].split("\n")[0];
            arep = "Lv. 160 " + arn + "+";
            break;
        case 7:
            arn = arname.split("7. ")[1].split("\n")[0];
            arep = "Lv. 160 " + arn + "+";
            break;
        case 8:
            arn = arname.split("8. ")[1].split("\n")[0];
            arep = "Lv. 160 " + arn + "+";
            break;
        case 9:
            arn = arname.split("9. ")[1].split("\n")[0];
            arep = "Lv. 160 " + arn + "+";
            break;
        case 10:
            arn = arname.split("10. ")[1].split("\n")[0];
            arep = "Lv. 200 " + arn + "+";
            break;
        case 11:
            arn = arname.split("11. ")[1].split("\n")[0];
            arep = "Lv. 200 " + arn + "+";
            break;
        case 12:
            arn = arname.split("12. ")[1].split("\n")[0];
            arep = "Lv. 200 " + arn + "+";
            break;
        case 13:
            arn = arname.split("13. ")[1].split("\n")[0];
            arep = "Lv. 200 " + arn + "+";
            break;
        case 14:
            arn = arname.split("14. ")[1].split("\n")[0];
            arep = "Lv. 200 " + arn + "+";
            break;
        case 15:
            arn = arname.split("15. ")[1].split("\n")[0];
            arep = "Lv. 200 " + arn + "+";
            break;
        case 16:
            arn = arname.split("16. ")[1].split("\n")[0];
            arep = "Lv. 250 " + arn + "+";
            break;
        case 17:
            arn = arname.split("17. ")[1].split("\n")[0];
            arep = "Lv. 250 " + arn + "+";
            break;
        case 18:
            arn = arname.split("18. ")[1];
            arep = "Lv. 250 " + arn + "+";
            break;
    }
    return arep;
}

module.exports = item;