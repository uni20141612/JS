const skmer = {};

skmer.getskillMercedes = function (skillname){
    var meret = -1;
    switch(skillname){
        case "엘리멘탈 고스트":
        case "엘리멘탈고스트":
        case "고스트":
        case "엘고":
            meret = 0;
            break;
        case "실피디아":
        case "실피":
        case "조랑말":
        case "말":
        case "라이딩":
            meret = 1;
            break;
        case "이르칼라의 숨결":
        case "이르칼라의숨결":
        case "이르칼라":
        case "이르":
        case "숨결":
        case "이숨":
            meret = 2;
            break;
        case "로얄 나이츠":
        case "로얄나이츠":
        case "로얄":
        case "로나":
            meret = 3;
            break;
        case "스타일리쉬 무브":
        case "스타일리쉬무브":
        case "스타일리쉬":
        case "밧줄":
            meret = 4;
            break;
        case "왕의 자격":
        case "왕의자격":
        case "매력":
            meret = 5;
            break;
        case "포텐셜 파워":
        case "포텐셜파워":
        case "포텐셜":
        case "포파":
            meret = 6;
            break;
        case "스피릿 점프":
        case "스피릿점프":
        case "더블 점프":
        case "더블점프":
        case "윗점":
            meret = 7;
            break;
        case "샤프 에이밍":
        case "샤프에이밍":
        case "샤프":
            meret = 8;
            break;
        case "차지 드라이브":
        case "차지드라이브":
        case "차드":
        case "차지":
        case "돌진":
            meret = 9;
            break;
        case "파이널 샷":
        case "파이널샷":
        case "파샷":
            meret = 10;
            break;
        case "스피릿 인퓨젼":
        case "스피릿인퓨젼":
        case "인퓨젼":
        case "스인":
            meret = 11;
            break;
        case "스트라이크 듀얼샷":
        case "스트라이크듀얼샷":
        case "듀얼샷":
        case "스듀샷":
        case "스듀":
            meret = 12;
            break;
        case "리프 토네이도":
        case "리프토네이도":
        case "맆토":
        case "스높부":
            meret = 13;
            break;
        case "유니콘 스파이크":
        case "유니콘스파이크":
        case "유니콘":
        case "유스":
            meret = 14;
            break;
        case "거스트 다이브":
        case "거스트다이브":
        case "거스트":
        case "다이브":
        case "거다":
            meret = 15;
            break;
        case "워터실드":
        case "워실":
        case "실드":
            meret = 16;
            break;
        case "하이킥 데몰리션":
        case "하이킥데몰리션":
        case "하이킥":
        case "데몰리션":
        case "하데":
            meret = 17;
            break;
        case "엘리멘탈 나이트":
        case "엘리멘탈나이트":
        case "엘나":
            meret = 18;
            break;
        case "이그니스 로어":
        case "이그니스로어":
        case "이로":
        case "스택":
        case "연계스택":
        case "연계":
            meret = 19;
            break;
        case "이슈타르의 링":
        case "이슈타르의링":
        case "이슈타르링":
        case "이슈링":
        case "이슈타르":
            meret = 20;
            break;
        case "레전드리 스피어":
        case "레전드리스피어":
        case "레스피":
        case "레스":
        case "스피어":
            meret = 21;
            break;
        case "라이트닝 엣지":
        case "라이트닝엣지":
        case "엣지":
        case "라엣":
            meret = 22;
            break;
        case "롤링 문썰트":
        case "롤링문썰트":
        case "롤문":
        case "롤링":
        case "문썰트":
            meret = 23;
            break;
        case "스피릿 이스케이프":
        case "스피릿이스케이프":
        case "이스케이프":
        case "스이":
            meret = 24;
            break;
        case "앤시언트 스피릿":
        case "앤시언트스피릿":
        case "앤시언트":
        case "앤스":
            meret = 25;
            break;
        case "어드밴스드 스트라이크 듀얼샷":
        case "어드밴스드 스트라이크듀얼샷":
        case "어드밴스드스트라이크듀얼샷":
        case "어스듀샷":
        case "어스듀":
            meret = 26;
            break;
        case "디펜스 브레이크":
        case "디펜스브레이크":
        case "디브":
        case "방무":
            meret = 27;
            break;
        case "엘비쉬 블레싱":
        case "엘비쉬블레싱":
        case "엘비쉬":
        case "블레싱":
        case "엘블":
            meret = 28;
            break;
        case "래쓰 오브 엔릴":
        case "래쓰오브 엔릴":
        case "래쓰오브엔릴":
        case "래쓰":
        case "엔릴":
        case "래오엔":
            meret = 29;
            break;
    }
    return meret;
};
skmer.getskillnameMercedes = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "엘리멘탈 고스트";
            break;
        case 1:
            rep = "실피디아";
            break;
        case 2:
            rep = "이르칼라의 숨결";
            break;
        case 3:
            rep = "로얄 나이츠";
            break;
        case 4:
            rep = "스타일리쉬 무브";
            break;
        case 5:
            rep = "왕의 자격";
            break;
        case 6:
            rep = "포텐셜 파워";
            break;
        case 7:
            rep = "스피릿 점프";
            break;
        case 8:
            rep = "샤프 에이밍";
            break;
        case 9:
            rep = "차지 드라이브";
            break;
        case 10:
            rep = "파이널 샷";
            break;
        case 11:
            rep = "스피릿 인퓨젼";
            break;
        case 12:
            rep = "스트라이크 듀얼샷";
            break;
        case 13:
            rep = "리프 토네이도";
            break;
        case 14:
            rep = "유니콘 스파이크";
            break;
        case 15:
            rep = "거스트 다이브";
            break;
        case 16:
            rep = "워터실드";
            break;
        case 17:
            rep = "하이킥 데몰리션";
            break;
        case 18:
            rep = "엘리멘탈 나이트";
            break;
        case 19:
            rep = "이그니스 로어";
            break;
        case 20:
            rep = "이슈타르의 링";
            break;
        case 21:
            rep = "레전드리 스피어";
            break;
        case 22:
            rep = "라이트닝 엣지";
            break;
        case 23:
            rep = "롤링 문썰트";
            break;
        case 24:
            rep = "스피릿 이스케이프";
            break;
        case 25:
            rep = "앤시언트 스피릿";
            break;
        case 26:
            rep = "어드밴스드 스트라이크 듀얼샷";
            break;
        case 27:
            rep = "디펜스 브레이크";
            break;
        case 28:
            rep = "엘비쉬 블레싱";
            break;
        case 29:
            rep = "래쓰 오브 엔릴";
            break;
    }
    return rep;
};
skmer.getskilldesc1Mercedes = function (skillcode){
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
            rep = "사다리나 로프에서 사용 가능";
            break;
        case 5:
            rep = "공격 속도 1단계 증가, 이동속도 10, 점프력 20";
            break;
        case 6:
            rep = "이동속도 30 증가, 최대 이동속도 상한 165로 증가";
            break;
        case 7:
            rep = "MP 10 소비, 일정 거리 점프";
            break;
        case 8:
            rep = "크리티컬 확률 40% 증가";
            break;
        case 9:
            rep = "최대 8명의 적을 250% 데미지로 밀며 돌진";
            break;
        case 10:
            rep = "최대 8명의 적을 85% 데미지로 4번 공격";
            break;
        case 11:
            rep = "데미지 30%, 크리티컬 확률 15% 증가";
            break;
        case 12:
            rep = "최대 5명의 적에게 260% 데미지의 화살 4개 발사";
            break;
        case 13:
            rep = "최대 8명의 적을 260% 데미지로 4번 공격";
            break;
        case 14:
            rep = "하단 참조";
            break;
        case 15:
            rep = "최대 6명의 적을 260% 데미지로 4번 공격";
            break;
        case 16:
            rep = "MP 5% 소비, 2초 동안 무적 상태, 쿨 70초";
            break;
        case 17:
            rep = "하단 참조";
            break;
        case 18:
            rep = "하단 참조";
            break;
        case 19:
            rep = "하단 참조";
            break;
        case 20:
            rep = "발 당 245% 데미지로 2번/ 이그니스로어 시간 0.1초씩 증가";
            break;
        case 21:
            rep = "하단 참조";
            break;
        case 22:
            rep = "하단 참조";
            break;
        case 23:
            rep = "하단 점프";
            break;
        case 24:
            rep = "공중에서 스킬사용중 방향키 ↑, ↓, ←, → 를 누르고 사용하면";
            break;
        case 25:
            rep = "200초 동안 공격력 30%, HP 1500 증가";
            break;
        case 26:
            rep = "최대 8명의 적들에게 380% 데미지의 화살 4개 발사";
            break;
        case 27:
            rep = "적의 방어율 25% 무시, 최종 데미지 20%";
            break;
        case 28:
            rep = "120초 동안 공격력 80 증가 / 쿨 180초";
            break;
        case 29:
            rep = "전방의 10명의 적에게 460% 데미지로 10번 공격";
            break;
    }
    return rep;
};
skmer.getskilldesc2Mercedes = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "액티브 버프";
            break;
        case 1:
            rep = "탑승형 액티브 버프";
            break;
        case 2:
            rep = "속사형 극딜기";
            break;
        case 3:
            rep = "무적 겸 추가 공격형 버프";
            break;
        case 4:
            rep = "[발동 커맨드:↑ + 점프]";
            break;
        case 5:
            rep = "일반 몬스터 공격 시 데미지 10%, 매력 레벨 30 증가";
            break;
        case 6:
            rep = "데미지 20% 증가, 20% 확률로 적의 공격 회피";
            break;
        case 7:
            rep = "위 방향키와 점프키로 위 방향으로도 이동할 수 있다";
            break;
        case 8:
            rep = "-";
            break;
        case 9:
            rep = "250%의 데미지로 2번 공격하며 띄움/ 띄운상태 데미지 30%p↑";
            break;
        case 10:
            rep = "차지 드라이브 사용 후에만 사용할 수 있다";
            break;
        case 11:
            rep = "샤프 아이즈 대체";
            break;
        case 12:
            rep = "80% 확률로 6초 동안 기절/ 기절상태 최종뎀 20%";
            break;
        case 13:
            rep = "스킬을 사용하는데 필요한 높이가 부족합니다.";
            break;
        case 14:
            rep = "디버프기";
            break;
        case 15:
            rep = "공중에서만 사용가능";
            break;
        case 16:
            rep = "[패시브 : 피격뎀 30%감소, 내성25, 속성내성25%, 스탠스40% 증가]";
            break;
        case 17:
            rep = "차지 드라이브 후속 연계기";
            break;
        case 18:
            rep = "킬리안(화염), 루시에(냉기), 모리스(암흑)";
            break;
        case 19:
            rep = "스택 버프";
            break;
        case 20:
            rep = "[패시브 효과 : 유니콘 스파이크 데미지 100%p 증가]";
            break;
        case 21:
            rep = "방깎 디버프";
            break;
        case 22:
            rep = "디버프 돌진기";
            break;
        case 23:
            rep = "체공기";
            break;
        case 24:
            rep = "스킬을 취소하고 해당 방향으로 빠르게 이동/ 쿨6초";
            break;
        case 25:
            rep = "[패시브 : 이그니스로어 회피확률 20% 증가, 스탠스 60% 증가]";
            break;
        case 26:
            rep = "80% 확률로 6초 동안 기절/ 기절상태 최종뎀 20%증가";
            break;
        case 27:
            rep = "보스 몬스터 공격 시 데미지 20%, 크리티컬 데미지 20% 증가";
            break;
        case 28:
            rep = "[패시브 효과 : 최종 데미지 5% 증가]";
            break;
        case 29:
            rep = "재사용 대기시간 8초/ 연계 스킬 사용 시 쿨 1초 감소";
            break;
    }
    return rep;
};
skmer.getskilldesc3Mercedes = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "잔상처럼 남은 정령의 기운이 적들을 공격한다. 정령의 기운 및 에우렐의 형상은 공격 반사 상태의 적을 공격해도 피해를 입지 않는다. 실피디아 사용 중에는 정령의 기운이 발동되지 않지만 발동 확률에 비례하여 스킬의 최종 데미지가 증가한다.\n\nMP 1000 소비, 90초 동안 공격 스킬 사용 시 잔상이 같은 스킬로 최대 3번까지 추가 공격\n잔상의 최종 데미지 반영률 60%\n발동 확률 90%, 다음 추가 공격부터 20%씩 감소\n이슈타르의 링과 이르칼라의 숨결은 발동 확률 절반만 적용\n공격 스킬 사용 시 10초마다 최대 10명의 적을 900%로 8번 공격하는 에우렐의 형상 발생, 연계 스킬 사용 시 재발동 대기시간 1초 감소\n\n재사용 대기시간 : 180초";
            break;
        case 1:
            rep = "유니콘의 왕 실피디아에 탑승하여 전투한다. 탑승 중 스피릿 점프를 두 번까지 사용할 수 있고 스킬을 다시 사용하여 돌진 공격을 사용할 수 있으며 ↑ 방향키를 누른 채 스킬을 다시 사용해 날아오르며 돌진 공격을 사용할 수 있다. 실피디아 탑승 중에는 일부 공격 스킬만 사용할 수 있으나 특정 스킬의 공격 속도가 증가하고 이그니스 로어 중첩이 최대치로 고정 적용되며 이르칼라의 숨결 사용 중에는 실피디아가 지속시간으로 종료되지 않는다.\n탑승 해제 : 아래 방향키와 기본 공격 함께 사용\n\nMP 1000 소비, 25초 동안 실피디아 탑승, 탑승 중 공격력 20% 증가, 최대 HP의 일정 비율로 피해를 입히는 공격을 포함한 피격 데미지 25% 감소\n돌진 공격은 최대 12명의 적을 1430%의 데미지로 9번 공격\n\n재사용 대기시간 90초";
            break;
        case 2:
            rep = "치명적인 연속 공격으로 적들이 이르칼라의 숨결을 느끼게 한다.\n\nMP 50 소비, 최대 6초 동안 키다운 가능하며 전방 10명의 적을 880% 데미지로 12번 연속 공격\n공격 적중 시 이그니스 로어의 지속시간 0.3초 증가\n뒷걸음질 하며 사용할 수 있고 방향키를 두 번 입력하여 방향 전환 가능\n\n재사용 대기시간 180초";
            break;
        case 3:
            rep = "엘프의 왕을 지키는 명예로운 근위 기사단을 소환한다. 로얄 나이츠는 공격 반사 상태의 적을 공격해도 피해를 입지 않고 스킬을 재사용하면 즉시 종료된다.\n\nMP 1200 소비, 시전 및 해제 동작 중 무적\n30초 동안 메르세데스의 공격 적중 시 기사 최대 4명이 등장하여 각각 800%의 데미지로 4번 공격, 재등장 대기시간 1.4초\n\n재사용 대기시간 : 180초";
            break;
        case 14:
            rep = "성스러운 유니콘을 소환해 전방의 적 다수를 동시에 공격하고 일정 시간 동안 약화시킨다. 약화된 대상은 모든 공격에 추가 피해를 받게 된다. 차지 드라이브, 스트라이트 듀얼샷, 레전드리 스피어, 라이트닝 엣지, 래쓰 오브 엔릴로 연계 가능하며 연계 스킬을 사용하면 재사용 대기시간이 1초씩 줄어든다.\n\nMP 62 소비, 최대 8명의 적을 345% 데미지로 5번 크리티컬 공격, 대상은 100% 확률로 30초 동안 데미지 30%의 추가 피해를 받는 디버프 효과 적용\n재사용 대기시간 10초\n\n연계 스킬을 사용 시 재사용 대기시간 1초 감소";
            break;
        case 17:
            rep = "차지 드라이브로 적들을 공중으로 띄웠을 때 사용하는 연계 스킬이다. 공중으로 뜬 적들을 향해 보이지 않을 속도로 빠르게 날아가 공격한다. 차지 드라이브 사용 후 위 방향키와 기본 공격을 순서대로 입력해 사용할 수도 있다.\n추가로 차지 드라이브의 데미지를 영구적으로 증가시키는 패시브 효과가 있다. 리프 토네이도, 거스트 다이브, 롤링 문썰트, 레전드리 스피어, 래쓰 오브 엔릴로 연계 가능하다.\n\nMP 28 소비, 최대 8명의 적에게 105% 데미지로 6번 공격. 스킬 시전 후 공중에서 이동이 가능하다.\n[패시브 효과 : 차지 드라이브 데미지 100%p 증가]";
            break;
        case 18:
            rep = "냉기 정령, 화염 정령, 암흑 정령 중 1명을 소환하여 전투를 돕게 한다. 엘리멘탈 나이트는 공격 반사 상태의 적을 공격해도 피해를 입지 않는다.\n냉기 정령 : 공격 시 일정 확률로 대상을 결빙\n화염 정령 : 공격 시 일정 확률로 대상에게 화염 속성의 도트 데미지\n암흑 정령 : 냉기 정령과 화염 정령보다 강력한 데미지\n\nMP 60 소비하여 3명의 정령 중 1명을 랜덤으로 210초 동안 소환, 최대 2명까지 소환 가능\n냉기 정령 : 385%로 공격하여 대상을 90%확률로 5초동안 결빙\n화염 정령 : 385%로 공격, 대상은 5초 동안 1초당 110%의 도트 데미지\n암흑 정령 : 485%로 공격\n\n재사용 대기시간 120초";
            break;
        case 19:
            rep = "불의 정령의 힘을 빌어 연계 스킬 사용 시 최종 데미지를 증가시킨다.\n\n연계 스킬 사용 시 최종 데미지 2% 증가\n연계 스킬 사용으로 인한 최종 데미지 증가는 최대 10회까지 중첩, 30초 동안 유지, 중첩되는 최종 데미지 간에는 합적용\n\n영구적으로 20% 확률로 추가 회피, 최종 데미지 25%, 공격력 40 증가";
            break;
        case 21:
            rep = "도약과 동시에 전설의 창을 떨어트려 전방의 적 다수를 공격한다. 대상의 방어력을 일정수준 감소시키는 효과와 함께 100% 크리티컬 판정으로 적중한다. 추가로 리프 토네이도의 데미지를 영구적으로 증가시키는 패시브 효과가 있다. 리프 토네이도, 거스트 다이브, 롤링 문썰트, 래쓰 오브 엔릴과 연계 가능하며 연계 스킬 사용 시 재사용 대기시간이 1초씩 줄어든다.\n\nMP 60 소비, 최대 12명의 적을 700%로 3번 크리티컬 공격. 30초 동안 대상의 방어력 30% 감소 효과 적용\n재사용 대기시간 5초\n연계 스킬 사용 시 재사용 대기시간 1초 감소\n\n[패시브 효과 : 리프 토네이도 데미지 130%p 증가]";
            break;
        case 22:
            rep = "전방을 향해 순간적으로 이동하며 경로 내 적 다수를 공격한다. 보스 몬스터 공격 시 일정 시간 공격 당한 보스와의 충돌을 무시하고 이슈타르의 링 데미지를 증가시키는 디버프를 건다. 추가로 거스트 다이브의 데미지를 영구적으로 증가시키는 패시브 효과가 있다. 차지 드라이브, 스트라이크 듀얼샷, 유니콘 스파이크, 레전드리 스피어, 래쓰 오브 엔릴로 연계 가능하다.\n\nMP 74 소비, 최대 8명의 적에게 420%의 데미지로 3번 공격하며 전방으로 이동, 라이트닝 엣지로 보스 몬스터 공격 시 보스와의 충돌을 무시하고 이슈타르의 링의 데미지를 20% 증가시키는 디버프가 30초 동안 발생\n\n[패시브 효과 : 거스트 다이브 데미지 170%p 증가]";
            break;
        case 23:
            rep = "공중에서 빠르게 회전하며 연속 공격한다. 차지 드라이브 사용 후 아래 방향키와 기본 공격을 순서대로 입력해 사용할 수도 있고 리프 토네이도, 거스트 다이브, 레전드리 스피어, 래쓰 오브 엔릴로 연계 가능하다.\n추가로 차지 드라이브와 하이킥 데몰리션의 데미지를 영구적으로 증가시키는 패시브 효과가 있다.\n\nMP 70 소비, 최대 8명의 적에게 300%의 데미지로 6번 공격\n사용 후 스피릿 점프 사용 초기화, 위 방향 점프는 초기화하지 않음\n재사용 대기시간 4초\n\n[패시브 효과 : 차지 드라이브, 하이킥 데몰리션 데미지 195%p 증가]";
            break;
        case 9:
            rep = "";
            break;
        case 9:
            rep = "";
            break;
    }
    return rep;
};
skmer.getskillimage1Mercedes = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "https://i.imgur.com/oe2ped4.png";
            break;
        case 1:
            rep = "https://i.imgur.com/ww5aoir.png";
            break;
        case 2:
            rep = "https://i.imgur.com/rZuZ2NT.png";
            break;
        case 3:
            rep = "https://i.imgur.com/3auXPC1.png";
            break;
        case 4:
            rep = "https://i.imgur.com/8vaCPOw.png";
            break;
        case 5:
            rep = "";
            break;
        case 6:
            rep = "";
            break;
        case 7:
            rep = "https://i.imgur.com/fnN9D9l.png";
            break;
        case 8:
            rep = "";
            break;
        case 9:
            rep = "https://i.imgur.com/lWckpvK.png";
            break;
        case 10:
            rep = "https://i.imgur.com/rXa8rNs.png";
            break;
        case 11:
            rep = "";
            break;
        case 12:
            rep = "https://i.imgur.com/ySz7lxy.png";
            break;
        case 13:
            rep = "https://i.imgur.com/ql5jlU0.png";
            break;
        case 14:
            rep = "https://i.imgur.com/SsmWqMi.png";
            break;
        case 15:
            rep = "https://i.imgur.com/QqlgOHV.png";
            break;
        case 16:
            rep = "https://i.imgur.com/PxE5vKx.png";
            break;
        case 17:
            rep = "https://i.imgur.com/fE7GPFs.png";
            break;
        case 18:
            rep = "https://i.imgur.com/CR885mS.png";
            break;
        case 19:
            rep = "";
            break;
        case 20:
            rep = "https://i.imgur.com/efyonJk.png";
            break;
        case 21:
            rep = "https://i.imgur.com/ZJzsJLp.png";
            break;
        case 22:
            rep = "https://i.imgur.com/S88e9cy.png";
            break;
        case 23:
            rep = "https://i.imgur.com/xXEKbYu.png";
            break;
        case 24:
            rep = "https://i.imgur.com/aU3csez.png";
            break;
        case 25:
            rep = "https://i.imgur.com/NQRzcGE.png";
            break;
        case 26:
            rep = "https://i.imgur.com/yJbxKLr.png";
            break;
        case 27:
            rep = "";
            break;
        case 28:
            rep = "https://i.imgur.com/COiv3iY.png";
            break;
        case 29:
            rep = "https://i.imgur.com/rywdbvU.png";
            break;
    }
    return rep;
};
skmer.getskillimage2Mercedes = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "https://i.imgur.com/5Cm9l4K.png";
            break;
        case 1:
            rep = "https://i.imgur.com/pUazQMa.png";
            break;
        case 2:
            rep = "https://i.imgur.com/SS9o38d.png";
            break;
        case 3:
            rep = "https://i.imgur.com/I35EXW9.png";
            break;
        case 4:
            rep = "https://i.imgur.com/s8PtBr0.png";
            break;
        case 5:
            rep = "https://i.imgur.com/kckb31i.png";
            break;
        case 6:
            rep = "https://i.imgur.com/NttS3bZ.png";
            break;
        case 7:
            rep = "https://i.imgur.com/xe5ztn4.png";
            break;
        case 8:
            rep = "https://i.imgur.com/HfKvAWl.png";
            break;
        case 9:
            rep = "https://i.imgur.com/L8kYVlR.png";
            break;
        case 10:
            rep = "https://i.imgur.com/ghUE8et.png";
            break;
        case 11:
            rep = "https://i.imgur.com/2GaZbV1.png";
            break;
        case 12:
            rep = "https://i.imgur.com/qOMIRmn.png";
            break;
        case 13:
            rep = "https://i.imgur.com/qtie56c.png";
            break;
        case 14:
            rep = "https://i.imgur.com/5Ri3Qri.png";
            break;
        case 15:
            rep = "https://i.imgur.com/GLwQDC3.png";
            break;
        case 16:
            rep = "https://i.imgur.com/1P54cT5.png";
            break;
        case 17:
            rep = "https://i.imgur.com/wxhNEja.png";
            break;
        case 18:
            rep = "https://i.imgur.com/kc70hHU.png";
            break;
        case 19:
            rep = "https://i.imgur.com/DLkDOpo.png";
            break;
        case 20:
            rep = "https://i.imgur.com/KZanhMR.png";
            break;
        case 21:
            rep = "https://i.imgur.com/DMYLwhr.png";
            break;
        case 22:
            rep = "https://i.imgur.com/eqvuas9.png";
            break;
        case 23:
            rep = "https://i.imgur.com/EbqlX8Y.png";
            break;
        case 24:
            rep = "https://i.imgur.com/uhDBKZz.png";
            break;
        case 25:
            rep = "https://i.imgur.com/S6gjYnM.png";
            break;
        case 26:
            rep = "https://i.imgur.com/jcieTbs.png";
            break;
        case 27:
            rep = "https://i.imgur.com/EtkxGq5.png";
            break;
        case 28:
            rep = "https://i.imgur.com/2QK3ZmV.png";
            break;
        case 29:
            rep = "https://i.imgur.com/72UQUfa.png";
            break;
    }
    return rep;
};

module.exports = skmer;