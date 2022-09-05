const skwb = {};

skwb.getskillWind = function (skillname){
    var wbret = -1;
    switch(skillname){
        case "하울링 게일":
        case "하울링게일":
        case "하게":
        case "게일":
        case "하울링":
            wbret = 0;
            break;
        case "아이들 윔":
        case "아이들 웜":
        case "아이들윔":
        case "아이들웜":
        case "아이들":
            wbret = 1;
            break;
        case "윈드 월":
        case "윈드 윌":
        case "윈드월":
        case "윈드윌":
        case "월":
            wbret = 2;
            break;
        case "볼텍스 스피어":
        case "볼텍스스피어":
        case "볼텍스":
            wbret = 3;
            break;
        case "윈드 워크":
        case "윈드워크":
        case "윈워":
        case "워크":
            wbret = 4;
            break;
        case "엘리멘트 : 스톰":
        case "엘리멘트:스톰":
        case "엘리멘트스톰":
        case "엘리멘트":
        case "스톰":
            wbret = 5;
            break;
        case "페어리 턴":
        case "페어리턴":
        case "페턴":
        case "패턴":
            wbret = 6;
            break;
        case "트라이플링 윔 I":
        case "트라이플링윔 I":
        case "트라이플링윔I":
        case "트라이플링 윔 1":
        case "트라이플링윔 1":
        case "트라이플링윔1":
        case "트라이플링 윔":
        case "트라이플링윔":
        case "트라이플링 웜 I":
        case "트라이플링웜 I":
        case "트라이플링웜I":
        case "트라이플링 웜 1":
        case "트라이플링웜 1":
        case "트라이플링웜1":
        case "트라이플링 웜":
        case "트라이플링웜":
        case "윔 1":
        case "윔1":
        case "윔":
        case "웜":
            wbret = 7;
            break;
        case "실프스 에이드":
        case "실프스에이드":
        case "실프스":
        case "에이드":
            wbret = 8;
            break;
        case "서리바람의 군무":
        case "서리바람의군무":
        case "군무":
        case "서군":
            wbret = 9;
            break;
        case "핀포인트 피어스":
        case "핀포인트피어스":
        case "핀포인트":
        case "핀피":
            wbret = 10;
            break;
        case "트라이플링 윔 II":
        case "트라이플링윔 II":
        case "트라이플링윔II":
        case "트라이플링 윔 2":
        case "트라이플링윔 2":
        case "트라이플링윔2":
        case "트라이플링 웜 II":
        case "트라이플링웜 II":
        case "트라이플링웜II":
        case "트라이플링 웜 2":
        case "트라이플링웜 2":
        case "트라이플링웜2":
        case "윔 2":
        case "윔2":
            wbret = 11;
            break;
        case "알바트로스":
        case "알바":
            wbret = 12;
            break;
        case "에메랄드 플라워":
        case "에메랄드플라워":
        case "플라워":
        case "에플":
            wbret = 13;
            break;
        case "페더리니스":
        case "페더":
            wbret = 14;
            break;
        case "세컨드 윈드":
        case "세컨드윈드":
        case "세컨드":
        case "세컨":
        case "세윈":
            wbret = 15;
            break;
        case "천공의 노래":
        case "천공의노래":
        case "천노":
        case "속사기":
            wbret = 16;
            break;
        case "스파이럴 볼텍스":
        case "스파이럴볼텍스":
        case "볼텍스":
        case "스볼":
            wbret = 17;
            break;
        case "트라이플링 윔 III":
        case "트라이플링윔 III":
        case "트라이플링윔III":
        case "트라이플링 윔 3":
        case "트라이플링윔 3":
        case "트라이플링윔3":
        case "트라이플링 웜 III":
        case "트라이플링웜 III":
        case "트라이플링웜III":
        case "트라이플링 웜 3":
        case "트라이플링웜 3":
        case "트라이플링웜3":
        case "윔 3":
        case "윔3":
            wbret = 18;
            break;
        case "윈드 블레싱":
        case "윈드블레싱":
        case "블레싱":
        case "윈블":
            wbret = 19;
            break;
        case "에메랄드 더스트":
        case "에메랄드더스트":
        case "더스트":
        case "에더":
            wbret = 20;
            break;
        case "알바트로스 맥시멈":
        case "알바트로스맥시멈":
        case "맥시멈":
        case "알맥":
            wbret = 21;
            break;
        case "스톰 브링어":
        case "스톰브링어":
        case "브링어":
        case "스브":
            wbret = 22;
            break;
        case "몬순":
            wbret = 23;
            break;
        case "거스트 쉬프트":
        case "거스트쉬프트":
        case "거쉬":
        case "쉬프트":
        case "더블 점프":
        case "더블점프":
        case "덥점":
        case "윗점":
            wbret = 24;
            break;
        case "위스퍼 오브 더 윈드":
        case "위스퍼 오브 더윈드":
        case "위스퍼오브 더 윈드":
        case "위스퍼오브 더윈드":
        case "위스퍼오브더윈드":
        case "위스퍼":
            wbret = 25;
            break;
        case "스톰 윔":
        case "스톰윔":
        case "스톰 웜":
        case "스톰웜":
            wbret = 26;
            break;
    }
    return wbret;
};
skwb.getskillnameWind = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "하울링 게일";
            break;
        case 1:
            rep = "아이들 윔";
            break;
        case 2:
            rep = "윈드 월";
            break;
        case 3:
            rep = "볼텍스 스피어";
            break;
        case 4:
            rep = "윈드 워크";
            break;
        case 5:
            rep = "엘리멘트 : 스톰";
            break;
        case 6:
            rep = "페어리 턴";
            break;
        case 7:
            rep = "트라이플링 윔 I";
            break;
        case 8:
            rep = "실프스 에이드";
            break;
        case 9:
            rep = "서리바람의 군무";
            break;
        case 10:
            rep = "핀포인트 피어스";
            break;
        case 11:
            rep = "트라이플링 윔 II";
            break;
        case 12:
            rep = "알바트로스";
            break;
        case 13:
            rep = "에메랄드 플라워";
            break;
        case 14:
            rep = "페더리니스";
            break;
        case 15:
            rep = "세컨드 윈드";
            break;
        case 16:
            rep = "천공의 노래";
            break;
        case 17:
            rep = "스파이럴 볼텍스";
            break;
        case 18:
            rep = "트라이플링 윔 III";
            break;
        case 19:
            rep = "윈드 블레싱";
            break;
        case 20:
            rep = "에메랄드 더스트";
            break;
        case 21:
            rep = "알바트로스 맥시멈";
            break;
        case 22:
            rep = "스톰 브링어";
            break;
        case 23:
            rep = "몬순";
            break;
        case 24:
            rep = "거스트 쉬프트";
            break;
        case 25:
            rep = "위스퍼 오브 더 윈드";
            break;
        case 26:
            rep = "스톰 윔";
            break;
        case 27:
            rep = "";
            break;
    }
    return rep;
};
skwb.getskilldesc1Wind = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "하단 참조";
            break;
        case 1:
            rep = "하단 참조";
            break;
        case 2:
            rep = "하단 참조";
            break;
        case 3:
            rep = "하단 참조";
            break;
        case 4:
            rep = "하단 참조";
            break;
        case 5:
            rep = "활성화 시 데미지 10% 증가";
            break;
        case 6:
            rep = "최대 6명의 적을 뒤로 밀쳐내며 380%의 데미지로 5번 공격";
            break;
        case 7:
            rep = "하단 참조";
            break;
        case 8:
            rep = "화살 소비 없이 공격 가능하며";
            break;
        case 9:
            rep = "하단 참조";
            break;
        case 10:
            rep = "최대 1명의 적을 340% 데미지로 2번 공격";
            break;
        case 11:
            rep = "하단 참조";
            break;
        case 12:
            rep = "공격력 20, 최대 HP 1500";
            break;
        case 13:
            rep = "60초 동안 HP 20000을 가진 수정 꽃을 소환";
            break;
        case 14:
            rep = "피격 데미지 30% 감소, 상태 이상 내성 10";
            break;
        case 15:
            rep = "회피 확률 30%, 방어력 1000 증가";
            break;
        case 16:
            rep = "최대 4명의 적을 발 당 390% 데미지로 공격.";
            break;
        case 17:
            rep = "최대 6명의 적을 밀며 175% 데미지로 3번 공격";
            break;
        case 18:
            rep = "하단 참조";
            break;
        case 19:
            rep = "공격력 10%, 민첩성 15%, 최대 HP 20%";
            break;
        case 20:
            rep = "수정 꽃의 최대 HP 40000로 증가";
            break;
        case 21:
            rep = "[패시브 효과 : 공30, 뎀25%, 방무 15%, 크확 15%";
            break;
        case 22:
            rep = "200초 동안 공격 시 30% 확률로 거대한 화살을 소환";
            break;
        case 23:
            rep = "하단 참조";
            break;
        case 24:
            rep = "점프 중 한 번 더 도약하여 먼 거리를 이동한다.";
            break;
        case 25:
            rep = "공격력 20, 사거리 160 증가";
            break;
        case 26:
            rep = "하단 참조";
            break;
        case 27:
            rep = "";
            break;
    }
    return rep;
};
skwb.getskilldesc2Wind = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "다단히트형 광범위 공격기";
            break;
        case 1:
            rep = "오브젝트 사출형 공격기";
            break;
        case 2:
            rep = "다른 무적기와는 장단점이 명확함";
            break;
        case 3:
            rep = "설치 및 전진형 공격기";
            break;
        case 4:
            rep = "전방 이동기";
            break;
        case 5:
            rep = "온오프 스킬";
            break;
        case 6:
            rep = "[패시브 효과 : 서리바람의 군무 데미지 100%p 증가]";
            break;
        case 7:
            rep = "ㅇㅜㅣㅁ(O) ㅇㅜㅓㅁ(X)";
            break;
        case 8:
            rep = "공격력 20, 크리티컬 확률 10% 증가";
            break;
        case 9:
            rep = "3차 다수기";
            break;
        case 10:
            rep = "적에게 60초간 데미지 15%, 방무 15% 증가 디버프 발생";
            break;
        case 11:
            rep = "트라이플링 윔 1차 강화";
            break;
        case 12:
            rep = "크리티컬 확률 10% 및 공격 속도 1단계 증가";
            break;
        case 13:
            rep = "주위의 적들을 유혹. 유혹 당한 적들은 슬로우 상태 이상";
            break;
        case 14:
            rep = "모든 속성 내성 10% 증가, 스탠스 40% 증가";
            break;
        case 15:
            rep = "회피 성공 시 5초 동안 공격력 15 증가";
            break;
        case 16:
            rep = "이동 불가";
            break;
        case 17:
            rep = "2차 다수기, 밀격기";
            break;
        case 18:
            rep = "트라이플링 윔 최종 강화";
            break;
        case 19:
            rep = "추가 회피율 30% 증가, 스탠스 60% 증가";
            break;
        case 20:
            rep = "주변 몬스터방어율 10% 감소, 피격데미지 20% 감소";
            break;
        case 21:
            rep = "상태이상내성 15, 모든속성내성 15%, 공속 1단계 증가]";
            break;
        case 22:
            rep = "380% 데미지로 추가 공격";
            break;
        case 23:
            rep = "광범위 공격기";
            break;
        case 24:
            rep = "위 방향키와 함께 사용해 위 방향으로도 이동할 수 있다.";
            break;
        case 25:
            rep = "-";
            break;
        case 26:
            rep = "하이퍼 버프";
            break;
        case 27:
            rep = "";
            break;
    }
    return rep;
};
skwb.getskilldesc3Wind = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "적을 응징하는 사나운 돌풍을 소환한다.\n소환 시 가지고 있는 바람의 기운을 1개 소모하며 아래 방향키와 함께 사용하면 가지고 있는 바람의 기운을 2개 소모하여 더 강한 돌풍을 소환할 수 있고 윗 방향키와 함께 사용하면 가지고 있는 바람의 기운을 3개 소모하여 강한 돌풍을 2개 소환할 수 있다.\n돌풍은 지속적으로 주변의 최대 HP가 가장 높은 보스 몬스터를 찾아 추적하여 이동하며 적을 공격할 때 이동속도가 감소한다. 돌풍은 1개만 존재할 수 있고 공격 반사 상태의 적을 공격해도 피해를 입지 않는다.\n감속 모드 온오프 : 마우스 우클릭\n\nMP 500 소비, 바람의 기운을 소비하여 10초 동안 돌풍 소환\n바람의 기운 소비량에 따라 소환되는 돌풍의 위력 변화\n\n1개 : 최대 10명의 적을 715%의 데미지로 3번 공격하는 돌풍 1개 소환\n2개 : 최대 15명의 적을 1715%의 데미지로 3번 공격하는 돌풍 1개 소환\n3개 : 최대 15명의 적을 1715%의 데미지로 3번 공격하는 돌풍, 최대 15명의 적을 945%의 데미지로 3번 공격하는 돌풍 각각 1개씩 소환\n\n바람의 기운은 20초마다 1개씩 증가하며 최대 3개까지 소지 가능";
            break;
        case 1:
            rep = "자고 있는 바람의 정령을 깨워 난동을 부리게 한다. 바람의 정령은 최대 HP가 높은 보스 몬스터를 우선 추적한다.\n공격 반사 상태의 적을 공격해도 피해를 입지 않는다.\n\nMP 500 소비, 8초 동안 적을 찾아 1210% 데미지로 3번 공격하는 정령의 기운 10개 생성\n여러 개의 정령의 기운이 하나의 몬스터를 공격하면 2번째 정령의 기운부터 최종 데미지 15% 감소\n정령의 기운에 공격당한 적은 9초 동안 1초당 1100%의 지속 피해\n\n재사용 대기시간 10초";
            break;
        case 2:
            rep = "바람의 엘리멘트를 자신의 주위에서 활성화하여 공방일체의 바람 장벽을 생성한다. 공격 시 돌개바람이 생성되어 적을 추가 공격한다.\n공격을 방어하면 엘리멘트가 소모되고, 모두 소모하면 바람 장벽이 사라진다. 돌개바람은 공격 반사 상태의 적을 공격해도 피해를 입지 않는다\n\nMP 1000 소비, 45초 동안 300의 엘리멘트를 지닌 바람 장벽 생성\n피격 시 최대 HP의 1%에 해당하는 데미지당 엘리멘트를 1 소모하여 데미지 무효화, 최대 HP의 일정 비율로 피해를 입히는 공격에도 적용\n공격 시 2초마다 1210%의 데미지로 5번 공격하는 돌개바람 3개 발사, 여러 개의 돌개바람이 1명의 적을 공격하면 돌개바람의 최종 데미지 50% 감소\n\n재사용 대기시간 90초\n\n막을 수 있는 것\nHP 비례 데미지를 포함한 대부분의 피해\n공격 판정 있는 낙하물이 거는 상태 이상\n\n막을 수 없는 것\n(슈퍼)넉백\n데미지가 있는 낙하물이 거는 상태 이상 외의 모든 상태 이상\n비율과 상관없이 고정된 값이거나, 한도 이상의 피해를 주는 공격";
            break;
        case 3:
            rep = "거센 바람을 구 형태로 응축시켜 날려 보낸다. 볼텍스 스피어를 중심으로 일정 시간마다 돌풍이 발생하여 주변 적들을 끌어들인다. 볼텍스 스피어는 공격 반사 상태의 적을 공격해도 피해를 입지 않는다.\n\nMP 750 소비, 일정 간격마다 최대 10명의 적에게 880%의 데미지로 6번 공격하는 충돌이 발생하는 볼텍스 스피어 생성\n보스 몬스터를 공격했다면 1초 동안 볼텍스 스피어의 이동속도 50% 감소\n한명의 적에게는 최대 20번까지만 충돌 발생\n\n재사용 대기시간 : 30초";
            break;
        case 4:
            rep = "바람의 힘을 빌려 전방으로 빠르게 전진한다. 전진 시 몬스터와 충돌하지 않는다.\n\nMP 10 소비, 지상에서는 발판을 따라 움직이며 발판이 끊어져 있을 경우 그 자리에서 정지. 공중에서는 거스트 쉬프트와 같이 사용 가능\n[패시브 효과 : 이동속도 35, 점프력 15, 최대 이동속도 20만큼 증가]";
            break;
        case 7:
            rep = "바람의 정령이 변덕을 부려 주위 적들을 혼란에 빠뜨린다. 정령의 기운은 윈드브레이커가 바라보는 방향의 일정 영역으로 발생한다. 단, 일부 스킬로 타격 시 바라보는 방향과 관계없이 발생한다. 범위 내 최대 HP가 가장 높은 보스 몬스터를 무조건 포함하여 공격한다.\n공격 반사 상태의 적을 공격해도 피해를 입지 않는다.\n스킬 사용 시 효과가 활성화되고 재사용 시 비활성화되는 온오프 스킬\n\n적을 타격할 때 30% 확률로 정령의 기운이 최대 3개 발생하여 170% 데미지로 주위의 적을 랜덤하게 공격. 5%의 확률로 210% 데미지를 주는 강화된 정령의 기운 발생";
            break;
        case 9:
            rep = "바람의 힘이 응축된 에메랄드를 매개로 거센 돌풍을 일으켜 좌우의 적을 무차별적으로 공격한다.\n\nMP 25 소비, 최대 6명의 적을 190%의 데미지로 5번 공격";
            break;
        case 11:
            rep = "바람의 정령이 더 큰 변덕을 부려 적들을 곤경에 빠뜨린다. 정령의 기운은 윈드브레이커가 바라보는 방향의 일정 영역으로 발생한다. 단, 일부 스킬로 타격 시 바라보는 방향과 관계없이 발생한다. 범위 내 최대 HP가 가장 높은 보스 몬스터를 무조건 포함하여 공격한다.\n공격 반사 상태의 적을 공격해도 피해를 입지 않는다.\n\n적을 타격할 때 40% 확률로 정령의 기운이 최대 4개 발생하여 215% 데미지로 주위의 적을 랜덤하게 공격, 10% 확률로 270% 데미지를 주는 강화된 정령의 기운 발생";
            break;
        case 18:
            rep = "바람의 정령이 매우 큰 변덕을 부려 적들의 육체와 정신을 붕괴시킨다. 정령의 기운은 윈드브레이커가 바라보는 방향의 일정 영역으로 발생한다. 단, 일부 스킬로 타격 시 바라보는 방향과 관계없이 발생한다. 범위 내 최대 HP가 가장 높은 보스 몬스터를 무조건 포함하여 공격한다.\n공격 반사 상태의 적을 공격해도 피해를 입지 않는다.\n\n적을 타격할 때 50% 확률로 정령의 기운이 최대 5개 발생하여 290%의 데미지로 주위의 적을 랜덤하게 공격, 20% 확률로 390% 데미지를 주는 강화된 정령의 기운 발생";
            break;
        case 23:
            rep = "세상을 감싼 채 도도히 흐르는 계절풍을 소환한다.\n\nMP 350 소비, 15명의 적에게 430%의 데미지로 12번 공격, 적에게 30초 동안 1초마다 200%의 도트 데미지를 입히는 디버프 발생\n\n재사용 대기시간 30초";
            break;
        case 26:
            rep = "바람의 정령이 내린 가호로 잠시동안 변덕스러운 바람의 힘을 극한까지 다룰 수 있게 된다.\n\nMP 200 소비, 30초 동안 공격 시 30% 확률로 거센 정령의 기운이 추가로 나타나 560%의 데미지로 공격\n\n재사용 대기시간 120초";
            break;
        case 27:
            rep = "";
            break;
    }
    return rep;
};
skwb.getskillimage1Wind = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "https://i.imgur.com/kOEdetd.png";
            break;
        case 1:
            rep = "https://i.imgur.com/6BoK6S2.png";
            break;
        case 2:
            rep = "https://i.imgur.com/11VENWG.png";
            break;
        case 3:
            rep = "https://i.imgur.com/PDDKstL.png";
            break;
        case 4:
            rep = "https://i.imgur.com/u00FG43.png";
            break;
        case 5:
            rep = "https://i.imgur.com/tt5uW6H.png";
            break;
        case 6:
            rep = "https://i.imgur.com/L4FpA0V.png";
            break;
        case 7:
            rep = "https://i.imgur.com/qZDCM2g.png";
            break;
        case 8:
            rep = "";
            break;
        case 9:
            rep = "https://i.imgur.com/FiT2WvM.png";
            break;
        case 10:
            rep = "https://i.imgur.com/h1wkCAn.png";
            break;
        case 11:
            rep = "";
            break;
        case 12:
            rep = "";
            break;
        case 13:
            rep = "https://i.imgur.com/NXs55tK.png";
            break;
        case 14:
            rep = "";
            break;
        case 15:
            rep = "";
            break;
        case 16:
            rep = "https://i.imgur.com/wwFvv3z.png";
            break;
        case 17:
            rep = "https://i.imgur.com/YdBeWQk.png";
            break;
        case 18:
            rep = "";
            break;
        case 19:
            rep = "";
            break;
        case 20:
            rep = "";
            break;
        case 21:
            rep = "https://i.imgur.com/EDRpiun.png";
            break;
        case 22:
            rep = "https://i.imgur.com/PJpDwvN.png";
            break;
        case 23:
            rep = "https://i.imgur.com/LY4WB6l.png";
            break;
        case 24:
            rep = "https://i.imgur.com/rfwkDU5.png";
            break;
        case 25:
            rep = "";
            break;
        case 26:
            rep = "https://i.imgur.com/ExaJ3Te.png";
            break;
        case 27:
            rep = "";
            break;
    }
    return rep;
};
skwb.getskillimage2Wind = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "https://i.imgur.com/VzwBFsi.png";
            break;
        case 1:
            rep = "https://i.imgur.com/acEEiL6.png";
            break;
        case 2:
            rep = "https://i.imgur.com/4wNcpHR.png";
            break;
        case 3:
            rep = "https://i.imgur.com/4PwcStc.png";
            break;
        case 4:
            rep = "https://i.imgur.com/AUmsUId.png";
            break;
        case 5:
            rep = "https://i.imgur.com/rpg7bsY.png";
            break;
        case 6:
            rep = "https://i.imgur.com/E8IEpHu.png";
            break;
        case 7:
            rep = "https://i.imgur.com/4E64nwT.png";
            break;
        case 8:
            rep = "https://i.imgur.com/LD5hIIR.png";
            break;
        case 9:
            rep = "https://i.imgur.com/zxCq4jO.png";
            break;
        case 10:
            rep = "https://i.imgur.com/9mhKjUu.png";
            break;
        case 11:
            rep = "https://i.imgur.com/wPHwW3h.png";
            break;
        case 12:
            rep = "https://i.imgur.com/OtZ6tS7.png";
            break;
        case 13:
            rep = "https://i.imgur.com/hdlpl52.png";
            break;
        case 14:
            rep = "https://i.imgur.com/ANy1Ccq.png";
            break;
        case 15:
            rep = "https://i.imgur.com/S2ks24m.png";
            break;
        case 16:
            rep = "https://i.imgur.com/quZqbTc.png";
            break;
        case 17:
            rep = "https://i.imgur.com/CNyqFPV.png";
            break;
        case 18:
            rep = "https://i.imgur.com/c7bN2z6.png";
            break;
        case 19:
            rep = "https://i.imgur.com/XclIw52.png";
            break;
        case 20:
            rep = "https://i.imgur.com/DOskvrh.png";
            break;
        case 21:
            rep = "https://i.imgur.com/NTcAWkX.png";
            break;
        case 22:
            rep = "https://i.imgur.com/sLoASS8.png";
            break;
        case 23:
            rep = "https://i.imgur.com/QSd4V2w.png";
            break;
        case 24:
            rep = "https://i.imgur.com/CMBP4ly.png";
            break;
        case 25:
            rep = "https://i.imgur.com/L6Qs9DI.png";
            break;
        case 26:
            rep = "https://i.imgur.com/ugQ4H0b.png";
            break;
        case 27:
            rep = "";
            break;
    }
    return rep;
};

module.exports = skwb;