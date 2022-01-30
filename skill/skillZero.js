const skz = {};

skz.getskillZero = function (skillname){
    var zret = -1;
    switch(skillname){
        case "듀얼 컴뱃":
        case "듀얼컴뱃":
            zret = 0;
            break;
        case "디바인 포스":
        case "디바인포스":
            zret = 1;
            break;
        case "디바인 스위프트":
        case "디바인스위프트":
            zret = 2;
            break;
        case "륀느의 가호":
        case "륀느의가호":
            zret = 3;
            break;
        case "리졸브 타임":
        case "리졸브타임":
            zret = 4;
            break;
        case "륀느의 축복":
        case "륀느의축복":
            zret = 5;
            break;
        case "문 스트라이크":
        case "문스트라이크":
            zret = 6;
            break;
        case "피어스 쓰러스트":
        case "피어스쓰러스트":
            zret = 7;
            break;
        case "쉐도우 스트라이크":
        case "쉐도우스트라이크":
            zret = 8;
            break;
        case "플래시 어썰터":
        case "플래시어썰터":
            zret = 9;
            break;
        case "스핀 커터":
        case "스핀커터":
            zret = 10;
            break;
        case "어드밴스드 스핀 커터":
        case "어드밴스드스핀커터":
            zret = 11;
            break;
        case "롤링 커브":
        case "롤링커브":
            zret = 12;
            break;
        case "어드밴스드 롤링 커브":
        case "어드밴스드롤링커브":
            zret = 13;
            break;
        case "롤링 어썰터":
        case "롤링어썰터":
            zret = 14;
            break;
        case "어드밴스드 롤링 어썰터":
        case "어드밴스드롤링어썰터":
            zret = 15;
            break;
        case "윈드 커터":
        case "윈드커터":
            zret = 16;
            break;
        case "윈드 스트라이크":
        case "윈드스트라이크":
            zret = 17;
            break;
        case "스톰 브레이크":
        case "스톰브레이크":
            zret = 18;
            break;
        case "어드밴스드 스톰 브레이크":
        case "어드밴스드스톰브레이크":
            zret = 19;
            break;
        case "컴뱃 리커버리":
        case "컴뱃리커버리":
            zret = 20;
            break;
        case "리인포스 바디":
        case "리인포스바디":
            zret = 21;
            break;
        case "디바인 리어":
        case "디바인리어":
            zret = 22;
            break;
        case "어퍼 슬래시":
        case "어퍼슬래시":
            zret = 23;
            break;
        case "파워 스텀프":
        case "파워스텀프":
            zret = 24;
            break;
        case "어드밴스드 파워 스텀프":
        case "어드밴스드파워스텀프":
            zret = 25;
            break;
        case "프론트 슬래시":
        case "프론트슬래시":
            zret = 26;
            break;
        case "스로잉 웨폰":
        case "스로잉웨폰":
            zret = 27;
            break;            
        case "어드밴스드 스로잉 웨폰":
        case "어드밴스드스로잉웨폰":
            zret = 28;
            break;
        case "터닝 드라이브":
        case "터닝드라이브":
            zret = 29;
            break;
        case "휠 윈드":
        case "휠윈드":
            zret = 30;
            break;
        case "어드밴스드 휠 윈드":
        case "어드밴스드휠윈드":
            zret = 31;
            break;
        case "기가 크래시":
        case "기가크래시":
            zret = 32;
            break;
        case "점핑 크래시":
        case "점핑크래시":
            zret = 33;
            break;
        case "어스 브레이크":
        case "어스브레이크":
            zret = 34;
            break;
        case "어드밴스드 어스 브레이크":
        case "어드밴스드어스브레이크":
            zret = 35;
            break;
        case "솔리드 바디":
        case "솔리드바디":
            zret = 36;
            break;
        case "아머 스플릿":
        case "아머스플릿":
            zret = 37;
            break;
        case "이뮨 배리어":
        case "이뮨배리어":
        case "이뮨":
            zret = 38;
            break;
        case "크리티컬 바인드":
        case "크리티컬바인드":
        case "크바":
            zret = 39;
            break;
        case "래피드 타임":
        case "래피드타임":
            zret = 40;
            break;
        case "타임 디스토션":
        case "타임디스토션":
            zret = 41;
            break;
        case "타임 홀딩":
        case "타임홀딩":
            zret = 42;
            break;
        case "타임 리와인드":
        case "타임리와인드":
            zret = 43;
            break;
        case "쉐도우 레인":
        case "쉐도우레인":
        case "쉐레":
            zret = 44;
            break;
        case "리미트 브레이크":
        case "리미트브레이크":
        case "리밋브":
            zret = 45;
            break;
        case "조인트 어택":
        case "조인트어택":
            zret = 46;
            break;
        case "쉐도우 플래시 알파":
        case "쉐도우 플래시":
        case "쉐도우플래시알파":
        case "쉐도우플래시":
        case "쉐플알":
        case "쉐플":
            zret = 47;
            break;
        case "쉐도우 플래시 베타":
        case "쉐도우플래시베타":
        case "쉐플베":
            zret = 48;
            break;
        case "에고 웨폰 알파":
        case "에고 웨폰":
        case "에고웨폰알파":
        case "에고웨폰":
        case "에고알":
        case "에고":
            zret = 49;
            break;
        case "에고 웨폰 베타":
        case "에고웨폰베타":
        case "에고베":
            zret = 50;
            break;
        case "초월자 륀느의 기원":
        case "초월자륀느의기원":
        case "기원":
            zret = 51;
            break;
    }
    return zret;
};
skz.getskillnameZero = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "듀얼 컴뱃";
            break;
        case 1:
            rep = "디바인 포스";
            break;
        case 2:
            rep = "디바인 스위프트";
            break;
        case 3:
            rep = "륀느의 가호";
            break;
        case 4:
            rep = "리졸브 타임";
            break;
        case 5:
            rep = "륀느의 축복";
            break;
        case 6:
            rep = "문 스트라이크";
            break;
        case 7:
            rep = "피어스 쓰러스트";
            break;
        case 8:
            rep = "쉐도우 스트라이크";
            break;
        case 9:
            rep = "플래시 어썰터";
            break;
        case 10:
            rep = "스핀 커터";
            break;
        case 11:
            rep = "어드밴스드 스핀 커터";
            break;
        case 12:
            rep = "롤링 커브";
            break;
        case 13:
            rep = "어드밴스드 롤링 커브";
            break;
        case 14:
            rep = "롤링 어썰터";
            break;
        case 15:
            rep = "어드밴스드 롤링 어썰터";
            break;
        case 16:
            rep = "윈드 커터";
            break;
        case 17:
            rep = "윈드 스트라이크";
            break;
        case 18:
            rep = "스톰 브레이크";
            break;
        case 19:
            rep = "어드밴스드 스톰 브레이크";
            break;
        case 20:
            rep = "컴뱃 리커버리";
            break;
        case 21:
            rep = "리인포스 바디";
            break;
        case 22:
            rep = "디바인 리어";
            break;
        case 23:
            rep = "어퍼 슬래시";
            break;
        case 24:
            rep = "파워 스텀프";
            break;
        case 25:
            rep = "어드밴스드 파워 스텀프";
            break;
        case 26:
            rep = "프론트 슬래시";
            break;
        case 27:
            rep = "스로잉 웨폰";
            break;
        case 28:
            rep = "어드밴스드 스로잉 웨폰";
            break;
        case 29:
            rep = "터닝 드라이브";
            break;
        case 30:
            rep = "휠 윈드";
            break;
        case 31:
            rep = "어드밴스드 휠 윈드";
            break;
        case 32:
            rep = "기가 크래시";
            break;
        case 33:
            rep = "점핑 크래시";
            break;
        case 34:
            rep = "어스 브레이크";
            break;
        case 35:
            rep = "어드밴스드 어스 브레이크";
            break;
        case 36:
            rep = "솔리드 바디";
            break;
        case 37:
            rep = "아머 스플릿";
            break;
        case 38:
            rep = "이뮨 배리어";
            break;
        case 39:
            rep = "크리티컬 바인드";
            break;
        case 40:
            rep = "래피드 타임";
            break;
        case 41:
            rep = "타임 디스토션";
            break;
        case 42:
            rep = "타임 홀딩";
            break;
        case 43:
            rep = "타임 리와인드";
            break;
        case 44:
            rep = "쉐도우 레인";
            break;
        case 45:
            rep = "리미트 브레이크";
            break;
        case 46:
            rep = "조인트 어택";
            break;
        case 47:
            rep = "쉐도우 플래시 (알파)";
            break;
        case 48:
            rep = "쉐도우 플래시 (베타)";
            break;
        case 49:
            rep = "에고 웨폰 (알파)";
            break;
        case 50:
            rep = "에고 웨폰 (베타)";
            break;
        case 51:
            rep = "초월자 륀느의 기원";
            break;
    }
    return rep;
};
skz.getskilldesc1Zero = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "공격자 교체 / 전진 태그 온오프 : 마우스 우클릭";
            break;
        case 1:
            rep = "공마 20, 방어력 500, 모든 속성 내성 10%, 상태 이상 내성 10 증가";
            break;
        case 2:
            rep = "이동속도 20, 점프력 10, 공격 속도 1단계 증가";
            break;
        case 3:
            rep = "900초 동안 AP를 직접 투자한 모든 능력치 15% 증가";
            break;
        case 4:
            rep = "영구적으로 최종데미지 25%, 힘 50, 최대HP 15%, 최대이동속도 20 증가";
            break;
        case 5:
            rep = "받는 데미지 15% 감소, 공격 시 대상의 방어율 10% 무시";
            break;
        case 6:
            rep = "타임 포스 3 소비, 최대 8명의 적을 120% 데미지로 6번 공격";
            break;
        case 7:
            rep = "타임 포스 5 소비, 최대 8명의 적을 170%의 데미지로 6번 공격";
            break;
        case 8:
            rep = "8명,195%,8번 공격 / [검기]:8명,310%,1번 공격";
            break;
        case 9:
            rep = "최대 8명의 적을 165%의 데미지로 8번 공격 / 쿨타임 5초";
            break;
        case 10:
            rep = "타임 포스 11 소비, 최대 8명의 적을 180%의 데미지로 8번 공격";
            break;
        case 11:
            rep = "8명,260%,10번 공격 / [검기]:8명,130%,4번 공격";
            break;
        case 12:
            rep = "최대 8명의 적을 215%의 데미지로 12번 공격 / 쿨타임 10초";
            break;
        case 13:
            rep = "8명,365%,12번 공격 / [검기]:8명,350%,2번 공격 / 쿨 10초";
            break;
        case 14:
            rep = "타임 포스 15 소비, 최대 8명의 적을 275%의 데미지로 10번 공격";
            break;
        case 15:
            rep = "8명,375%,12번 공격 / [검기]:8명,250%,3번 공격";
            break;
        case 16:
            rep = "8명,165%,8번 공격 /[소용돌이]:8명,0.5초마다,110%,3번 공격 3초동안 생성";
            break;
        case 17:
            rep = "타임 포스 19 소비, 최대 8명의 적을 250%의 데미지로 8번 공격";
            break;
        case 18:
            rep = "8명,215%,8번 공격 /[소용돌이]:8명,0.5초마다,215%,4번 공격 3초동안 생성";
            break;
        case 19:
            rep = "8명,335%,10번 공격 /[소용돌이]:8명,0.5초마다335%,4번 공격 3초동안 생성";
            break;
        case 20:
            rep = "알파 타임포스 회복속도 30% 증가, 공격시 25%확률 타임포스 10 회복";
            break;
        case 21:
            rep = "알파 최대HP 30%, 내성 10, 속성내성 10%, 최대TF 30%, 크확 30% 증가";
            break;
        case 22:
            rep = "알파 크뎀 50% 증가 / 공격시 15%확률 1초간격 10초동안 200% 도트뎀";
            break;
        case 23:
            rep = "타임 포스 3 소비, 최대 6명의 적을 210%의 데미지로 6번 공격";
            break;
        case 24:
            rep = "타임 포스 5 소비, 최대 6명의 적을 230%의 데미지로 6번 공격";
            break;
        case 25:
            rep = "6명,330%,9번 공격 /[충격파]:6명,330%,9번 공격, 100%확률 3초동안 기절";
            break;
        case 26:
            rep = "타임 포스 7 소비, 최대 6명의 적을 205%의 데미지로 6번 공격";
            break;
        case 27:
            rep = "타임 포스 9 소비, 최대 6명의 적을 380%의 데미지로 2번 공격";
            break;
        case 28:
            rep = "최대 6명의 적을 4초 동안 0.3초마다 550%의 데미지로 2번 공격";
            break;
        case 29:
            rep = "타임 포스 11 소비, 최대 6명의 적을 260%의 데미지로 6번 공격";
            break;
        case 30:
            rep = "1초당 타임 포스 13 소비, 6명,0.1초마다,120%,2번 공격, 5초동안 지속";
            break;
        case 31:
            rep = "1초당 타임 포스 13 소비, 6명,0.1초마다,200%,2번 공격, 7초동안 지속";
            break;
        case 32:
            rep = "타임 포스 15 소비, 최대 6명의 적을 250%의 데미지로 6번 공격";
            break;
        case 33:
            rep = "6명,225%,6번 공격 / [충격파]:6명,225%,3번 공격";
            break;
        case 34:
            rep = "6명,260%,8번 공격 / [충격파]:6명,260%,8번 공격";
            break;
        case 35:
            rep = "6명,380%,10번 공격 / [충격파]:6명,285%,10번 공격";
            break;
        case 36:
            rep = "베타 방어력 2000, 내성 40, 속성내성 40%, 스탠스확률 100% 증가";
            break;
        case 37:
            rep = "베타 공격 시 20% 확률로 20초 동안 대상의 방어율 10%만큼 감소";
            break;
        case 38:
            rep = "피격시 25%확률로 최대HP의 50%의 피해를 방어하는 보호막 5초 동안 생성";
            break;
        case 39:
            rep = "베타 공격시 10%확률 4초동안 바인드, 알파 공격에 크확30%, 크뎀20% 추가";
            break;
        case 40:
            rep = "사용스킬, 초월자스킬, 5차스킬 제외 스킬 재사용 대기시간 4초 감소";
            break;
        case 41:
            rep = "30초동안 시간의영역생성 /[적]:4초마다 버프해제, 데미지25%증가,일몹경직";
            break;
        case 42:
            rep = "15초 동안 무적, 일부,5차제외 제로의 모든스킬 쿨타임 초기화./쿨180초";
            break;
        case 43:
            rep = "죽지 않고, 버프를 소비하고 HP를 모두 회복하며 2초 동안 무적";
            break;
        case 44:
            rep = "[알파,베타]최대 15명의 적을 1400%의 데미지로 7번 공격/쿨300초";
            break;
        case 45:
            rep = "15명,850%,5번공격, 10초바인드/45초동안 일부스킬쿨타임 260%빠르게감소";
            break;
        case 46:
            rep = "키다운시 연계/12명,1타:1925%,8번 2타:1825%,12번 3타:2200%,13번";
            break;
        case 47:
            rep = "8명,1100%,6번/[재사용시]15명,880%,15번공격하는 검격3번/쿨40초";
            break;
        case 48:
            rep = "8명,1320%,5번/[재사용시]15명,1650%,12번공격하는 검격2번/쿨40초";
            break;
        case 49:
            rep = "라즐리가 4명,385%,6번공격하는 검기 9개생성/쿨15초";
            break;
        case 50:
            rep = "라피스가 4명,385%,9번공격하는 충격2번 대검 3개생성/쿨15초";
            break;
        case 51:
            rep = "스킬 쿨타임 초기화/래피드타임,이뮨배리어 지속시간최대치로고정/쿨240초";
            break;
    }
    return rep;
};
skz.getskilldesc2Zero = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "[어시스트]: 태그후 3초동안 어시스트 스킬을 사용하여 공격 지원";
            break;
        case 1:
            rep = "온오프형, 디바인 스위프트와 함께 사용할 수 없다.";
            break;
        case 2:
            rep = "온오프형, 디바인 포스와 함께 사용할 수 없다.";
            break;
        case 3:
            rep = "1레벨 마스터라 컴뱃 오더스의 효과를 받지 못한다.";
            break;
        case 4:
            rep = "제로의 스토리 진행에 따라 능력치가 증가하는 패시브";
            break;
        case 5:
            rep = "제로의 링크 스킬";
            break;
        case 6:
            rep = "C : 피어스 쓰러스트 / A : 어퍼 슬래시";
            break;
        case 7:
            rep = "C : 쉐도우 스트라이크 / A : 파워 스텀프";
            break;
        case 8:
            rep = "A : 어퍼 슬래시 / 검기를 발생시켜 추가로 공격할 수 있다.";
            break;
        case 9:
            rep = "C : 스핀 커터 / A : 프론트 슬래시";
            break;
        case 10:
            rep = "A : 스로잉 웨폰";
            break;
        case 11:
            rep = "A : 스로잉 웨폰 / 검기를 발생시켜 추가로 공격한다.";
            break;
        case 12:
            rep = "C : 롤링 어썰터 / A : 터닝 드라이브";
            break;
        case 13:
            rep = "C : 롤링 어썰터 / A : 터닝 드라이브 / 검기 발생 추가 공격";
            break;
        case 14:
            rep = "A : 터닝 드라이브 / 경로 내 적들을 밀면서 공격한다.";
            break;
        case 15:
            rep = "A : 터닝 드라이브 / ←↑→ 방향으로 관통하는 검기를 발생";
            break;
        case 16:
            rep = "C : 윈드 스트라이크 / A : 기가 크래시 / 쿨 15초";
            break;
        case 17:
            rep = "C : 스톰 브레이크 / A : 점핑 크래시";
            break;
        case 18:
            rep = "A : 어스 브레이크 / 소용돌이를 생성시켜 추가 공격";
            break;
        case 19:
            rep = "A : 어스 브레이크/소용돌이생성/[전기지역]:8명,3초동안 1초간격,230%도트뎀";
            break;
        case 20:
            rep = "타임포스 회복 보조 패시브.";
            break;
        case 21:
            rep = "스탠스 100% 증가";
            break;
        case 22:
            rep = "공격시 15% 확률로 최대 HP의 5%만큼 HP 회복";
            break;
        case 23:
            rep = "C : 파워 스텀프 / A : 문 스트라이크";
            break;
        case 24:
            rep = "A : 피어스 쓰러스트 / 이동스킬 봉인시 사용할 수 없음";
            break;
        case 25:
            rep = "A : 피어스 쓰러스트 / 검기 뒤에 충격파를 발생";
            break;
        case 26:
            rep = "C : 스로잉 웨폰 / A : 플래시 어썰터";
            break;
        case 27:
            rep = "A : 스핀 커터 / 이동 선상에 있는 적을 모두 공격한다.";
            break;
        case 28:
            rep = "A : 스핀 커터 / 적을 밀어내는 효과가 추가된다.";
            break;
        case 29:
            rep = "C : 휠 윈드 / A : 롤링 커브";
            break;
        case 30:
            rep = "A : 롤링 어썰터 / 휠 윈드 상태에서는 ←,→를 입력하여 이동가능";
            break;
        case 31:
            rep = "A : 롤링 어썰터 / 주변에 있는 적을 끌고오는 효과가 추가 된다.";
            break;
        case 32:
            rep = "C : 점핑 크래시 / A : 윈드 커터";
            break;
        case 33:
            rep = "C : 어스 브레이크 / A : 윈드 스트라이크 / 충격파 추가 공격";
            break;
        case 34:
            rep = "A : 스톰 브레이크 / 충격파가 일어나 추가로 공격한다.";
            break;
        case 35:
            rep = "A : 스톰 브레이크 / [전기지역]:6명,5초동안 1초간격 340%도트데미지";
            break;
        case 36:
            rep = "HP를 증가시키는 효과가 없어서 베타의 HP 총량은 알파보다도 낮다.";
            break;
        case 37:
            rep = "최대 5번 중첩 / 다단히트 스킬로 공격할수록 중첩을 쉽게 쌓을 수 있다";
            break;
        case 38:
            rep = "보호막이 생성되는 순간에는 데미지를 받지 않는다.";
            break;
        case 39:
            rep = "35초 동안 크리티컬 바인드 스킬에 저항 / 출혈효과 폭발";
            break;
        case 40:
            rep = "[디텍트]:알파공격시크확2%/[스트렝스]:베타공격시데미지1%/20초,10회중첩";
            break;
        case 41:
            rep = "[자신,파티원]:4초마다 마법무효화,상태이상해제, 공속1단계증가/쿨240초";
            break;
        case 42:
            rep = "제로가 200레벨 이상일 경우 사용 후 90초 동안 데미지 10% 증가";
            break;
        case 43:
            rep = "재사용 대기시간 1800초";
            break;
        case 44:
            rep = "발동 중 무적이 아님";
            break;
        case 45:
            rep = "공속2단계증가,최종뎀36%증가,슬로우/종료시15명,1430%,12번충격,6번";
            break;
        case 46:
            rep = "[협력공격]:1980%,15번,3회/방무100%추가/시전중 무적/ 쿨120초";
            break;
        case 47:
            rep = "설치형 순간이동 및 광범위 공격기 / 알파 베타 쿨타임 별도 적용";
            break;
        case 48:
            rep = "설치형 순간이동 및 광범위 공격기 / 알파 베타 쿨타임 별도 적용";
            break;
        case 49:
            rep = "제로의 공격스킬 적중시 발동 / 알파 베타 쿨타임 별도 적용";
            break;
        case 50:
            rep = "제로의 공격스킬 적중시 발동 / 알파 베타 쿨타임 별도 적용";
            break;
        case 51:
            rep = "45초동안 공100증가, 래피드타임중첩시 적에게 275%,5번공격 버프지급";
            break;
    }
    return rep;
};
skz.getskillimage1Zero = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "";
            break;
        case 1:
            rep = "https://i.imgur.com/kv7xYPr.png";
            break;
        case 2:
            rep = "https://i.imgur.com/7B2BL2I.png";
            break;
        case 3:
            rep = "https://i.imgur.com/YzcUbz3.png";
            break;
        case 4:
            rep = "";
            break;
        case 5:
            rep = "";
            break;
        case 6:
            rep = "https://i.imgur.com/5SP8sNh.png";
            break;
        case 7:
            rep = "https://i.imgur.com/2CvnHmW.png";
            break;
        case 8:
            rep = "https://i.imgur.com/PKVJ4Uu.png";
            break;
        case 9:
            rep = "https://i.imgur.com/ErKNPsJ.png";
            break;
        case 10:
            rep = "https://i.imgur.com/691Urrl.png";
            break;
        case 11:
            rep = "https://i.imgur.com/HCC76Vf.png";
            break;
        case 12:
            rep = "https://i.imgur.com/iV0dJxF.png";
            break;
        case 13:
            rep = "https://i.imgur.com/mFftnro.png";
            break;
        case 14:
            rep = "https://i.imgur.com/VXiFp63.png";
            break;
        case 15:
            rep = "https://i.imgur.com/fGjVdB8.png";
            break;
        case 16:
            rep = "https://i.imgur.com/n75ee2A.png";
            break;
        case 17:
            rep = "https://i.imgur.com/nL9PAwe.png";
            break;
        case 18:
            rep = "https://i.imgur.com/gFFgJxh.png";
            break;
        case 19:
            rep = "https://i.imgur.com/dgZKFJE.png";
            break;
        case 20:
            rep = "https://i.imgur.com/lxpHRyS.png";
            break;
        case 21:
            rep = "";
            break;
        case 22:
            rep = "https://i.imgur.com/eVRD9ii.png";
            break;
        case 23:
            rep = "https://i.imgur.com/SMtK9To.png";
            break;
        case 24:
            rep = "https://i.imgur.com/Ke85pEO.png";
            break;
        case 25:
            rep = "https://i.imgur.com/U39r3UQ.png";
            break;
        case 26:
            rep = "https://i.imgur.com/ocegP5F.png";
            break;
        case 27:
            rep = "https://i.imgur.com/yK63SOJ.png";
            break;
        case 28:
            rep = "https://i.imgur.com/uw767Ni.png";
            break;
        case 29:
            rep = "https://i.imgur.com/88ZV5rS.png";
            break;
        case 30:
            rep = "https://i.imgur.com/cM7W66x.png";
            break;
        case 31:
            rep = "https://i.imgur.com/9KkXKgJ.png";
            break;
        case 32:
            rep = "https://i.imgur.com/Pd76c0N.png";
            break;
        case 33:
            rep = "https://i.imgur.com/uQsPbD2.png";
            break;
        case 34:
            rep = "https://i.imgur.com/qdLWh34.png";
            break;
        case 35:
            rep = "https://i.imgur.com/UcugI99.png";
            break;
        case 36:
            rep = "";
            break;
        case 37:
            rep = "https://i.imgur.com/QEeafF5.png";
            break;
        case 38:
            rep = "https://i.imgur.com/y2h57B7.png";
            break;
        case 39:
            rep = "https://i.imgur.com/cvkzwZD.png";
            break;
        case 40:
            rep = "";
            break;
        case 41:
            rep = "https://i.imgur.com/S5IzUSV.png";
            break;
        case 42:
            rep = "https://i.imgur.com/KcooQ5r.png";
            break;
        case 43:
            rep = "https://i.imgur.com/E8U7oIe.png";
            break;
        case 44:
            rep = "https://i.imgur.com/LswBP6Q.png";
            break;
        case 45:
            rep = "https://i.imgur.com/v4V7Ys6.png";
            break;
        case 46:
            rep = "https://i.imgur.com/JQMaham.png";
            break;
        case 47:
            rep = "https://i.imgur.com/bqhvZPc.png";
            break;
        case 48:
            rep = "https://i.imgur.com/qWQO3Dz.png";
            break;
        case 49:
            rep = "https://i.imgur.com/y4RlfXn.png";
            break;
        case 50:
            rep = "https://i.imgur.com/aIdqEM0.png";
            break;
        case 51:
            rep = "https://i.imgur.com/PwzKUNp.png";
            break;
    }
    return rep;
};
skz.getskillimage2Zero = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "https://i.imgur.com/Pu5Yi2c.png";
            break;
        case 1:
            rep = "https://i.imgur.com/xOQ72Rb.png";
            break;
        case 2:
            rep = "https://i.imgur.com/r0bGmc8.png";
            break;
        case 3:
            rep = "https://i.imgur.com/QLLWx3I.png";
            break;
        case 4:
            rep = "https://i.imgur.com/7dHpSed.png";
            break;
        case 5:
            rep = "https://i.imgur.com/X83kv8c.png";
            break;
        case 6:
            rep = "https://i.imgur.com/HTBmboq.png";
            break;
        case 7:
            rep = "https://i.imgur.com/TFqgG4W.png";
            break;
        case 8:
            rep = "https://i.imgur.com/SNK9Z52.png";
            break;
        case 9:
            rep = "https://i.imgur.com/L5FILG0.png";
            break;
        case 10:
            rep = "https://i.imgur.com/30ldTc6.png";
            break;
        case 11:
            rep = "https://i.imgur.com/J2UHyZ0.png";
            break;
        case 12:
            rep = "https://i.imgur.com/cW5JBKn.png";
            break;
        case 13:
            rep = "https://i.imgur.com/uLj6XUb.png";
            break;
        case 14:
            rep = "https://i.imgur.com/5HjNAMK.png";
            break;
        case 15:
            rep = "https://i.imgur.com/RZnKJZF.png";
            break;
        case 16:
            rep = "https://i.imgur.com/mwSU744.png";
            break;
        case 17:
            rep = "https://i.imgur.com/ewIAgzQ.png";
            break;
        case 18:
            rep = "https://i.imgur.com/YkySrbr.png";
            break;
        case 19:
            rep = "https://i.imgur.com/PRMd6Tk.png";
            break;
        case 20:
            rep = "https://i.imgur.com/oFCxyKK.png";
            break;
        case 21:
            rep = "https://i.imgur.com/vKTocvj.png";
            break;
        case 22:
            rep = "https://i.imgur.com/Qj4eyGq.png";
            break;
        case 23:
            rep = "https://i.imgur.com/qRZuao7.png";
            break;
        case 24:
            rep = "https://i.imgur.com/yUFhHAu.png";
            break;
        case 25:
            rep = "https://i.imgur.com/xBOpMsp.png";
            break;
        case 26:
            rep = "https://i.imgur.com/IawRL1q.png";
            break;
        case 27:
            rep = "https://i.imgur.com/TRabYNl.png";
            break;
        case 28:
            rep = "https://i.imgur.com/NUdbByC.png";
            break;
        case 29:
            rep = "https://i.imgur.com/YFGb6I4.png";
            break;
        case 30:
            rep = "https://i.imgur.com/0FdBZ4O.png";
            break;
        case 31:
            rep = "https://i.imgur.com/l1W9ZFY.png";
            break;
        case 32:
            rep = "https://i.imgur.com/3oOkT9L.png";
            break;
        case 33:
            rep = "https://i.imgur.com/ZQ5OWuZ.png";
            break;
        case 34:
            rep = "https://i.imgur.com/9ygDGCH.png";
            break;
        case 35:
            rep = "https://i.imgur.com/M7SckcJ.png";
            break;
        case 36:
            rep = "https://i.imgur.com/64ursak.png";
            break;
        case 37:
            rep = "https://i.imgur.com/2CdEC32.png";
            break;
        case 38:
            rep = "https://i.imgur.com/auj6oC4.png";
            break;
        case 39:
            rep = "https://i.imgur.com/edVORet.png";
            break;
        case 40:
            rep = "https://i.imgur.com/rpJjcrc.png";
            break;
        case 41:
            rep = "https://i.imgur.com/qsv6yLM.png";
            break;
        case 42:
            rep = "https://i.imgur.com/yR946rV.png";
            break;
        case 43:
            rep = "https://i.imgur.com/9IMCBIK.png";
            break;
        case 44:
            rep = "https://i.imgur.com/ILOum5S.png";
            break;
        case 45:
            rep = "https://i.imgur.com/WNnyLxg.png";
            break;
        case 46:
            rep = "https://i.imgur.com/Ly7Ogxs.png";
            break;
        case 47:
            rep = "https://i.imgur.com/9Jn9Gls.png";
            break;
        case 48:
            rep = "https://i.imgur.com/P6SDCBb.png";
            break;
        case 49:
            rep = "https://i.imgur.com/Z9dZ0yu.png";
            break;
        case 50:
            rep = "https://i.imgur.com/bSqVRAI.png";
            break;
        case 51:
            rep = "https://i.imgur.com/nOxzyiR.png";
            break;
    }
    return rep;
};

module.exports = skz;