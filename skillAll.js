const skal = {};

skal.getskillAll = function (jobcode, skillname){
    var alret = -1;
    if(jobcode == 58){
        switch(skillname){
            case "오라 웨폰":
            case "오라웨폰":
            case "오라":
                alret = 0;
                break;
            case "바디 오브 스틸":
            case "바디오브스틸":
            case "바오스":
                alret = 1;
                break;
        }
    }
    else if(jobcode == 59){
        switch(skillname){
        case "오버로드 마나":
        case "오버로드마나":
        case "오버로드":
        case "오마":
            alret = 2;
            break;
        case "에테리얼 폼":
        case "에테리얼폼":
        case "에테폼":
        case "에테":
            alret = 3;
            break;
        }
    }
    else if(jobcode == 60){
        switch(skillname){
        case "샤프 아이즈":
        case "샤프아이즈":
        case "샤프":
        case "샾":
            alret = 4;
            break;
        case "가이디드 애로우":
        case "가이디드애로우":
        case "가이디드":
        case "가애":
        case "욘두":
            alret = 5;
            break;
        case "크리티컬 리인포스":
        case "크리티컬리인포스":
        case "크리인":
            alret = 6;
            break;
        }
    }
    else if(jobcode == 61){
        switch(skillname){
        case "베놈 버스트":
        case "베놈버스트":
        case "베버":
        case "베놈":
            alret = 7;
            break;
        case "레디 투 다이":
        case "레디투다이":
        case "레투다":
            alret = 8;
            break;
        }
    }
    else if(jobcode == 62){
        switch(skillname){
        case "로디드 다이스":
        case "로디드다이스":
        case "로디드":
        case "다이스":
            alret = 9;
            break;
        case "오버 드라이브":
        case "오버드라이브":
        case "오버":
        case "오드":
            alret = 10;
            break;
        }
    }
    else if(jobcode == 51){
        switch(skillname){
        case "글로리 오브 가디언즈":
        case "글로리오브가디언즈":
        case "글어머오브가디언즈":
        case "글오가":
        case "가디언즈":
            alret = 11;
            break;
        case "시그너스 팔랑크스":
        case "시그너스팔랑크스":
        case "팔랑크스":
        case "시팔":
            alret = 12;
            break;
        case "여제 시그너스의 축복":
        case "여제시그너스의축복":
        case "여시축":
            alret = 13;
            break;
        case "초월자 시그너스의 축복":
        case "초월자시그너스의축복":
        case "초시축":
        case "여시축2":
            alret = 14;
            break;
        }
    }
    else if(jobcode == 52){
        switch(skillname){
        case "윌 오브 리버티":
        case "윌오브리버티":
        case "윌오리":
        case "리버티":
            alret = 15;
            break;
        case "레지스탕스 라인 인팬트리":
        case "레지스탕스라인인팬트리":
        case "라인인팬트리":
        case "인팬트리":
        case "라인":
        case "레라인":
            alret = 16;
            break;
        case "메이플월드 여신의 축복":
        case "메이플월드여신의축복":
        case "메여축":
        case "메용2":
            alret = 17;
            break;
        }
    }
    else if(jobcode == 53){
        switch(skillname){
        case "데모닉 포티튜드":
        case "데모닉포티튜드":
        case "데모닉":
        case "포티튜드":
        case "데포":
            alret = 18;
            break;
        case "콜 마스테마":
        case "콜마스테마":
        case "마스테마":
        case "콜마":
            alret = 19;
            break;
        case "이계 여신의 축복":
        case "이계여신의축복":
        case "이여축":
        case "메용2":
            alret = 20;
            break;
        }
    }
    else if(jobcode == 54){
        switch(skillname){
        case "히어로즈 오쓰":
        case "히어로즈오쓰":
        case "히오쓰":
        case "히오스":
        case "오쓰":
        case "히오":
            alret = 21;
            break;
        case "프리드의 가호":
        case "프리드의가호":
        case "프리드":
        case "가호":
            alret = 22;
            break;
        case "메이플월드 여신의 축복":
        case "메이플월드여신의축복":
        case "메여축":
        case "메용2":
            alret = 23;
            break;
        }
    }
    else if(jobcode == 55){
        switch(skillname){
        case "판테온":
            alret = 24;
            break;
        case "그란디스 여신의 축복":
        case "그란디스여신의축복":
        case "여신의축복":
        case "그여축":
        case "메용2":
            alret = 25;
            break;
        }
    }
    else if(jobcode == 56){
        switch(skillname){
        case "레이스 오브 갓":
        case "레이스오브갓":
        case "레오갓":
        case "레이스":
        case "갓":
            alret = 26;
            break;
        case "매직 서킷 풀드라이브":
        case "매직서킷풀드라이브":
        case "매직서킷":
        case "매서풀":
        case "풀드라이브":
            alret = 27;
            break;
        case "그란디스 여신의 축복":
        case "그란디스여신의축복":
        case "여신의축복":
        case "그여축":
        case "메용2":
            alret = 28;
            break;
        }
    }
    else if(jobcode == 57){
        switch(skillname){
        case "화중군자":
            alret = 29;
            break;
        case "그란디스 여신의 축복":
        case "그란디스여신의축복":
        case "여신의축복":
        case "그여축":
        case "메용2":
            alret = 30;
            break;
        }
    }
    return alret;
};
skal.getskillnameAll = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "오라 웨폰";
            break;
        case 1:
            rep = "바디 오브 스틸";
            break;
        case 2:
            rep = "오버로드 마나";
            break;
        case 3:
            rep = "에테리얼 폼";
            break;
        case 4:
            rep = "샤프 아이즈";
            break;
        case 5:
            rep = "가이디드 애로우";
            break;
        case 6:
            rep = "크리티컬 리인포스";
            break;
        case 7:
            rep = "베놈 버스트";
            break;
        case 8:
            rep = "레디 투 다이";
            break;
        case 9:
            rep = "로디드 다이스";
            break;
        case 10:
            rep = "오버 드라이브";
            break;
        case 11:
            rep = "글로리 오브 가디언즈";
            break;
        case 12:
            rep = "시그너스 팔랑크스";
            break;
        case 13:
            rep = "여제 시그너스의 축복";
            break;
        case 14:
            rep = "초월자 시그너스의 축복";
            break;
        case 15:
            rep = "윌 오브 리버티";
            break;
        case 16:
            rep = "레지스탕스 라인 인팬트리";
            break;
        case 17:
            rep = "메이플월드 여신의 축복";
            break;
        case 18:
            rep = "데모닉 포티튜드";
            break;
        case 19:
            rep = "콜 마스테마";
            break;
        case 20:
            rep = "이계 여신의 축복";
            break;
        case 21:
            rep = "히어로즈 오쓰";
            break;
        case 22:
            rep = "프리드의 가호";
            break;
        case 23:
            rep = "메이플월드 여신의 축복";
            break;
        case 24:
            rep = "판테온";
            break;
        case 25:
            rep = "그란디스 여신의 축복(노바)";
            break;
        case 26:
            rep = "레이스 오브 갓";
            break;
        case 27:
            rep = "매직 서킷 풀드라이브";
            break;
        case 28:
            rep = "그란디스 여신의 축복(레프)";
            break;
        case 29:
            rep = "화중군자";
            break;
        case 30:
            rep = "그란디스 여신의 축복(아니마)";
            break;
        case 31:
            rep = "";
            break;
        case 32:
            rep = "";
            break;
        case 33:
            rep = "";
            break;
        case 34:
            rep = "";
            break;
        case 35:
            rep = "";
            break;
        case 36:
            rep = "";
            break;
        case 37:
            rep = "";
            break;
        case 38:
            rep = "";
            break;
        case 39:
            rep = "";
            break;
        case 40:
            rep = "";
            break;
        case 41:
            rep = "";
            break;
        case 42:
            rep = "";
            break;
        case 43:
            rep = "";
            break;
        case 44:
            rep = "";
            break;
        case 45:
            rep = "";
            break;
        case 46:
            rep = "";
            break;
        case 47:
            rep = "";
            break;
        case 48:
            rep = "";
            break;
        case 49:
            rep = "";
            break;
    }
    return rep;
};
skal.getskilldesc1All = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "140초간 방무 16%, 최종데미지 6%/ 쿨180초";
            break;
        case 1:
            rep = "36초간 슈퍼스탠스, 내성80/ 피격시 데미지3%, 최대10번중첩";
            break;
        case 2:
            rep = "공격스킬 사용시 MP 2% 추가사용, 최종데미지 11%증가/ 쿨30초";
            break;
        case 3:
            rep = "HP1000소비, 3초간 슈퍼스탠스, 피해대신 MP7300 or HP1600";
            break;
        case 4:
            rep = "300초간 크리티컬확률 20%, 크리티컬데미지 15% 증가";
            break;
        case 5:
            rep = "60초간 영혼의 화살 생성, 주변의적 1명,880%,90번 공격";
            break;
        case 6:
            rep = "30초간 크확이 100% 초과가능, 크확의 50%만큼 크뎀 증가";
            break;
        case 7:
            rep = "하단 참조";
            break;
        case 8:
            rep = "하단 참조";
            break;
        case 9:
            rep = "주사위 1개의 눈을 정할 수 있음/ 쿨10초/ [패시브:공40]";
            break;
        case 10:
            rep = "30초간 무기순수 공격력의 80%만큼 공격력 증가/ 쿨64초";
            break;
        case 11:
            rep = "60초 동안 데미지 10% 증가/ 쿨120초";
            break;
        case 12:
            rep = "990%, 총 70번 공격/ 다시누르면 방향 바뀜/ 쿨30초";
            break;
        case 13:
            rep = "45초간 데미지 30%/ 일정시간마다 HP4%회복, 데미지6%";
            break;
        case 14:
            rep = "45초간 데미지 30%/ 일정시간마다 HP8%회복, 데미지8%";
            break;
        case 15:
            rep = "60초 동안 데미지 10% 증가/ 쿨 120초";
            break;
        case 16:
            rep = "10초간 매공격마다 12명에게 455% 데미지로 9번 공격";
            break;
        case 17:
            rep = "60초간 용사류 스킬로 증가하는 능력치 400% 추가증가";
            break;
        case 18:
            rep = "60초 동안 데미지 10% 증가/ 쿨 120초";
            break;
        case 19:
            rep = "60초간 마스테마소환/ 쿨150초/ 마스테마클로우: 8명,1100%,8번";
            break;
        case 20:
            rep = "하단 참조";
            break;
        case 21:
            rep = "60초 동안 데미지 10% 증가/ 쿨 120초";
            break;
        case 22:
            rep = "하단 참조";
            break;
        case 23:
            rep = "60초간 용사류 스킬로 증가하는 능력치 400% 추가증가";
            break;
        case 24:
            rep = "15명,4400%,10번 공격/ 쿨 1200초";
            break;
        case 25:
            rep = "40초간 지속/ 55%확률 쿨타임미적용, 최대 6회/ 데미지35%/ 스탠스100%";
            break;
        case 26:
            rep = "60초 동안 데미지 10% 증가/ 쿨 120초";
            break;
        case 27:
            rep = "60초간 MP비율따라 데미지 50%까지 증가, 폭풍 발생시 갱신/ 쿨200초";
            break;
        case 28:
            rep = "40초간 지속/ 무기제외 장비 공/마 중 미사용 100%를 전환/ 쿨240초";
            break;
        case 29:
            rep = "1800초 지속 연꽃소환/ 부활후 3.5초간 무적/ 쿨400초";
            break;
        case 30:
            rep = "40초간 지속/ 뎀40%, 스탠스100%/ 쿨 240초";
            break;
    }
    return rep;
};
skal.getskilldesc2All = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "5초마다 스킬사용시 1100%,10명,6번 공격 오라 파동 발사";
            break;
        case 1:
            rep = "쿨240초/ [패시브:힘30, HP1500]";
            break;
        case 2:
            rep = "MP가 없는 직업군의 경우 최대 HP의 0.5%/ 온오프스킬";
            break;
        case 3:
            rep = "쿨 60초";
            break;
        case 4:
            rep = "메르세데스와 카인을 제외한 모든 궁수 직업군의 공통스킬";
            break;
        case 5:
            rep = "일반 몬스터 공격 시 데미지 20% 증가/ 쿨60초";
            break;
        case 6:
            rep = "공격스킬의 추가크확은 반영되지 않음/ 쿨120초";
            break;
        case 7:
            rep = "-";
            break;
        case 8:
            rep = "-";
            break;
        case 9:
            rep = "더블럭키다이스 두개가같을때 마지막 같은눈 나올확률 50%감소";
            break;
        case 10:
            rep = "지속시간 끝난후 쿨타임동안 무기순수 공격력의 15%만큼 공격력감소";
            break;
        case 11:
            rep = "파티원 중 시그너스 직업군과 미하일에만 효과";
            break;
        case 12:
            rep = "공격횟수 모두 채우거나 일정거리 이동시, 일정시간 지나면 소멸";
            break;
        case 13:
            rep = "데미지는 합 적용, 최대 90%/ 쿨240초";
            break;
        case 14:
            rep = "데미지는 합 적용, 최대 120%/ 쿨240초/ 피격뎀 5%감소";
            break;
        case 15:
            rep = "파티원 중 레지스탕스 직업군, 데몬 직업군, 제논에만 효과";
            break;
        case 16:
            rep = "쿨 25초/ 적의 위치에 따라 방향전환";
            break;
        case 17:
            rep = "데미지 20% 증가/ 쿨 180초";
            break;
        case 18:
            rep = "파티원 중 데몬 직업군, 레지스탕스 직업군, 제논에만 효과";
            break;
        case 19:
            rep = "쿨4초/ 러블리테리토리: 6초간 피격뎀 25%감소 2회버프, 쿨10초";
            break;
        case 20:
            rep = "-";
            break;
        case 21:
            rep = "파티원 중 영웅 직업군에만 효과";
            break;
        case 22:
            rep = "-";
            break;
        case 23:
            rep = "데미지 20% 증가/ 쿨 180초";
            break;
        case 24:
            rep = "공격 후 960초 동안 HP가 0이 되는 것을 한 번 무시";
            break;
        case 25:
            rep = "카이저는 게이지 단계당 데미지11%/ 쿨240초";
            break;
        case 26:
            rep = "파티원 중 레프 직업군에만 효과";
            break;
        case 27:
            rep = "4초마다 6명,1100%,3번 공격 마력폭풍 발생";
            break;
        case 28:
            rep = "세트효과 미적용, 무기순수 공/마 중 사용 150%까지 전환가능";
            break;
        case 29:
            rep = "부활성공 시 스킬 재사용 대기시간 1400초 증가";
            break;
        case 30:
            rep = "호영:도력충전량 75%/ 라라: 용맥의메아리 발동시 최종뎀증가량 11%";
            break;
    }
    return rep;
};
skal.getskilldesc3All = function (skillcode){
    rep = "";
    switch(skillcode){
        case 7:
            rep = "MP 300 소비, 12명의 적에게 해당 적이 가지고 있는 모든 도트 데미지를 소비하여 해당 도트 데미지가 끝날 때까지 받을 모든 데미지의 100%를 한 번에 주고 1100%의 데미지로 6번 추가 공격\n\n추가 공격은 적이 가지고 있었던 도트 데미지 수마다 최종 데미지가 15% 증가하며 최대 5개까지 적용\n\n이후 주변에 있는 최대 10명의 적에게 폭발을 일으킨 적이 가지고 있던 도트 데미지 전이\n재사용 대기시간 8초\n\n[패시브 효과 : 공격 시 50% 확률로, 8초 동안 1초당 340% 데미지의 도트 데미지 추가]";
            break;
        case 8:
            rep = "최대 HP의 10% 소비, 30초 동안 추가 회피를 포함한 회피율 감소 및 최종 데미지 증가, 최대 HP의 일정 비율로 피해를 입히는 공격을 받을 경우 피격 데미지 증가\n\n1단계 지속 중 스킬 재사용 시 2단계 진입하며 남은 지속시간 50%로 감소, 2단계 지속 중 스킬 재사용 시 스킬 종료\n\n1단계 : 총 회피율의 20% 감소, 피격 데미지 10% 증가, 최종 데미지 13% 증가\n\n2단계 : 총 회피율의 90% 감소, 피격 데미지 40% 증가, 최종 데미지 36% 증가\n재사용 대기시간 75초\n[패시브 효과 : 공격력 30 증가]";
            break;
        case 20:
            rep = "최대 HP의 5% 소비, 40초 동안 최종 데미지 11% 증가, 일정 시간마다 각종 축복 및 공격을 시전, 축복 시전 시 이전 축복이 남아있다면 소멸\n\n회복의 축복 : DF/PP/HP 중 자신이 사용하는 쪽을 최대치의 30% 회복, 특정한 회복 불가 상황에도 회복 가능\n방패의 축복 : 1회에 한해 최대 HP의 일정 비율로 피해를 입히는 공격을 포함한 피격 데미지 75% 감소\n보호의 축복 : 1회에 한해 치명적인 상태 이상 방어\n이계의 공허 : 최대 12명의 적을 2640%의 데미지로 12번 공격\n\n재사용 대기시간 120초";
            break;
        case 22:
            rep = "MP 250 소비, 사용 시 30초 동안 지속되고 최대 6번 중첩 가능한 버프를 걸며 중첩마다 이전 중첩 효과 및 새로운 효과를 얻음\n\n1중첩 : 재사용 대기시간 초기화의 효과를 받지 않는 스킬을 제외한 스킬의 재사용 대기시간이 10% 더 빠르게 감소\n2중첩 : 스탠스 확률 80% 증가\n3중첩 : 올스탯 55 증가\n4중첩 : 공격력/마력 25 증가\n5중첩 : 보스 몬스터 공격 시 데미지 25% 증가\n6중첩 : 지속시간 동안 무적\n\n재사용 대기시간 25초, 중첩을 갱신하지 못하고 캐릭터 사망을 포함해 지속시간이 끝나거나 최대 중첩이 되면 재사용 대기시간 240초로 적용";
            break;
    }
    return rep;
};
skal.getskillimage1All = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "https://i.imgur.com/kHLiaQA.png";
            break;
        case 1:
            rep = "https://i.imgur.com/Xqa2ba0.png";
            break;
        case 2:
            rep = "https://i.imgur.com/0BMHtkT.png";
            break;
        case 3:
            rep = "https://i.imgur.com/RlkXtPX.png";
            break;
        case 4:
            rep = "https://i.imgur.com/SODYZb6.png";
            break;
        case 5:
            rep = "https://i.imgur.com/Crgoegz.png";
            break;
        case 6:
            rep = "https://i.imgur.com/HadYtFn.png";
            break;
        case 7:
            rep = "https://i.imgur.com/MguKYie.png";
            break;
        case 8:
            rep = "https://i.imgur.com/j8ou8gI.png";
            break;
        case 9:
            rep = "https://i.imgur.com/0217pNO.png";
            break;
        case 10:
            rep = "https://i.imgur.com/C3IH8MI.png";
            break;
        case 11:
            rep = "https://i.imgur.com/1pNJCMe.png";
            break;
        case 12:
            rep = "https://i.imgur.com/tdv2pNm.png";
            break;
        case 13:
            rep = "https://i.imgur.com/TsW8B9d.png";
            break;
        case 14:
            rep = "https://i.imgur.com/rUQIjEA.png";
            break;
        case 15:
            rep = "https://i.imgur.com/74EPnnf.png";
            break;
        case 16:
            rep = "https://i.imgur.com/L7rWyU9.png";
            break;
        case 17:
            rep = "https://i.imgur.com/ZNybeyO.png";
            break;
        case 18:
            rep = "https://i.imgur.com/plxEvun.png";
            break;
        case 19:
            rep = "https://i.imgur.com/cPW7YGK.png";
            break;
        case 20:
            rep = "https://i.imgur.com/9w1Xm4I.png";
            break;
        case 21:
            rep = "https://i.imgur.com/DgPeHc5.png";
            break;
        case 22:
            rep = "https://i.imgur.com/yPYQK8h.png";
            break;
        case 23:
            rep = "https://i.imgur.com/ZNybeyO.png";
            break;
        case 24:
            rep = "https://i.imgur.com/dRhkhZr.png";
            break;
        case 25:
            rep = "https://i.imgur.com/4wqWCN1.png";
            break;
        case 26:
            rep = "https://i.imgur.com/JJ1bwNW.png";
            break;
        case 27:
            rep = "https://i.imgur.com/7iYYQih.png";
            break;
        case 28:
            rep = "https://i.imgur.com/RFXjqH0.png";
            break;
        case 29:
            rep = "https://i.imgur.com/B8BtVp9.png";
            break;
        case 30:
            rep = "https://i.imgur.com/ftddmMM.png";
            break;
    }
    return rep;
};
skal.getskillimage2All = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "https://i.imgur.com/SqJviPe.png";
            break;
        case 1:
            rep = "https://i.imgur.com/I9G2gSH.png";
            break;
        case 2:
            rep = "https://i.imgur.com/YStJy3j.png";
            break;
        case 3:
            rep = "https://i.imgur.com/mqJ0mUP.png";
            break;
        case 4:
            rep = "https://i.imgur.com/956tcsd.png";
            break;
        case 5:
            rep = "https://i.imgur.com/m1LQcqH.png";
            break;
        case 6:
            rep = "https://i.imgur.com/tvIzgSE.png";
            break;
        case 7:
            rep = "https://i.imgur.com/l08ipj7.png";
            break;
        case 8:
            rep = "https://i.imgur.com/elEMNKg.png";
            break;
        case 9:
            rep = "https://i.imgur.com/yOZRaem.png";
            break;
        case 10:
            rep = "https://i.imgur.com/JrNI3sO.png";
            break;
        case 11:
            rep = "https://i.imgur.com/ZSRmjdV.png";
            break;
        case 12:
            rep = "https://i.imgur.com/XNTF2SP.png";
            break;
        case 13:
            rep = "https://i.imgur.com/R6eN17U.png";
            break;
        case 14:
            rep = "https://i.imgur.com/FJxYdVR.png";
            break;
        case 15:
            rep = "https://i.imgur.com/CIx0G90.png";
            break;
        case 16:
            rep = "https://i.imgur.com/wzeIzJq.png";
            break;
        case 17:
            rep = "https://i.imgur.com/M7Mi9Nr.png";
            break;
        case 18:
            rep = "https://i.imgur.com/LbyNumu.png";
            break;
        case 19:
            rep = "https://i.imgur.com/ZhxXGum.png";
            break;
        case 20:
            rep = "https://i.imgur.com/EfxmC2T.png";
            break;
        case 21:
            rep = "https://i.imgur.com/TReHxjT.png";
            break;
        case 22:
            rep = "https://i.imgur.com/zLhkNu3.png";
            break;
        case 23:
            rep = "https://i.imgur.com/M7Mi9Nr.png";
            break;
        case 24:
            rep = "https://i.imgur.com/SZcfAuI.png";
            break;
        case 25:
            rep = "https://i.imgur.com/CN2uE2s.png";
            break;
        case 26:
            rep = "https://i.imgur.com/2mQrTNu.png";
            break;
        case 27:
            rep = "https://i.imgur.com/cvuP2vI.png";
            break;
        case 28:
            rep = "https://i.imgur.com/6ZeS4Q8.png";
            break;
        case 29:
            rep = "https://i.imgur.com/Z7aG4Ru.png";
            break;
        case 30:
            rep = "https://i.imgur.com/OCeDnWI.png";
            break;
    }
    return rep;
};

module.exports = skal;