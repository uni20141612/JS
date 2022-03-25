const skpf = {};

skpf.getskillPathfinder = function (skillname){
    var pfret = -1;
    switch(skillname){
        case "얼티밋 블래스트":
        case "얼티밋블래스트":
        case "얼블":
        case "얼티밋":
            pfret = 0;
            break;
        case "레이븐 템페스트":
        case "레이븐템페스트":
        case "템페스트":
        case "레템":
            pfret = 1;
            break;
        case "옵시디언 배리어":
        case "옵시디언배리어":
        case "옵시디언":
        case "배리어":
        case "옵배":
            pfret = 2;
            break;
        case "옵시디언 배리어(디스차지)":
        case "옵시디언배리어(디스차지)":
        case "옵시디언배리어디스차지":
        case "옵시디언배리어디":
        case "배리어 디스차지":
        case "배리어디스차지":
        case "옵시디언 디스차지":
        case "옵시디언디스차지":
        case "옵배디":
            pfret = 3;
            break;
        case "옵시디언 배리어(블래스트)":
        case "옵시디언배리어(블래스트)":
        case "옵시디언배리어블래스트":
        case "옵시디언배리어블":
        case "배리어 블래스트":
        case "배리어블래스트":
        case "옵시디언 블래스트":
        case "옵시디언블래스트":
        case "옵배블":
            pfret = 4;
            break;
        case "옵시디언 배리어(트랜지션)":
        case "옵시디언배리어(트랜지션)":
        case "옵시디언배리어트랜지션":
        case "옵시디언배리어트":
        case "배리어 트랜지션":
        case "배리어트랜지션":
        case "옵시디언 트랜지션":
        case "옵시디언트랜지션":
        case "옵배트":
            pfret = 5;
            break;
        case "렐릭 언바운드":
        case "렐릭언바운드":
        case "언바운드":
        case "렐언":
            pfret = 6;
            break;
        case "렐릭 언바운드(디스차지)":
        case "렐릭언바운드(디스차지)":
        case "렐릭언바운드디스차지":
        case "언바운드 디스차지":
        case "언바운드디스차지":
        case "언바운드디":
        case "렐언디":
            pfret = 7;
            break;
        case "렐릭 언바운드(블래스트)":
        case "렐릭언바운드(블래스트)":
        case "렐릭언바운드블래스트":
        case "언바운드 블래스트":
        case "언바운드블래스트":
        case "언바운드블":
        case "렐언블":
            pfret = 8;
            break;
        case "렐릭 언바운드(트랜지션)":
        case "렐릭언바운드(트랜지션)":
        case "렐릭언바운드트랜지션":
        case "언바운드 트랜지션":
        case "언바운드트랜지션":
        case "언바운드트":
        case "렐언트":
            pfret = 9;
            break;
        case "고대의 저주":
        case "고대의저주":
        case "저주":
            pfret = 10;
            break;
        case "커스 위크닝 I":
        case "커스위크닝 I":
        case "커스위크닝I":
        case "커스 위크닝 1":
        case "커스위크닝 1":
        case "커스위크닝1":
        case "커스1":
            pfret = 11;
            break;
        case "카디널 디스차지":
        case "카디널디스차지":
        case "디스차지":
        case "카디":
            pfret = 12;
            break;
        case "렐릭 차지 I":
        case "렐릭차지 I":
        case "렐릭차지I":
        case "렐릭 차지 1":
        case "렐릭차지 1":
        case "렐릭차지1":
        case "렐차1":
            pfret = 13;
            break;
        case "커스 위크닝 II":
        case "커스위크닝 II":
        case "커스위크닝II":
        case "커스 위크닝 2":
        case "커스위크닝 2":
        case "커스위크닝2":
        case "커스2":
            pfret = 14;
            break;
        case "카디널 디스차지 강화":
        case "카디널디스차지 강화":
        case "카디널디스차지강화":
        case "디스차지 강화":
        case "디스차지강화":
        case "카디강화":
            pfret = 15;
            break;
        case "카디널 블래스트":
        case "카디널블래스트":
        case "블래스트":
        case "카블":
            pfret = 16;
            break;
        case "스플릿 미스텔":
        case "스플릿미스텔":
        case "스플릿":
        case "미스텔":
        case "스미":
            pfret = 17;
            break;
        case "에디셔널 디스차지":
        case "에디셔널디스차지":
            pfret = 18;
            break;
        case "커스 위크닝 III":
        case "커스위크닝 III":
        case "커스위크닝III":
        case "커스 위크닝 3":
        case "커스위크닝 3":
        case "커스위크닝3":
        case "커스3":
            pfret = 19;
            break;
        case "카디널 블래스트 강화":
        case "카디널블래스트 강화":
        case "카디널블래스트강화":
        case "블래스트 강화":
        case "블래스트강화":
        case "카블강화":
            pfret = 20;
            break;
        case "카디널 트랜지션":
        case "카디널트랜지션":
        case "트랜지션":
        case "카트":
            pfret = 21;
            break;
        case "트리플 임팩트":
        case "트리플임팩트":
        case "임팩트":
        case "트임":
            pfret = 22;
            break;
        case "레이븐":
        case "소환수":
            pfret = 23;
            break;
        case "커스 톨러런스":
        case "커스톨러런스":
        case "톨러런스":
        case "커톨":
            pfret = 24;
            break;
        case "에인션트 가이던스":
        case "에인션트가이던스":
        case "가이던스":
        case "에가":
            pfret = 25;
            break;
        case "에디셔널 블래스트":
        case "에디셔널블래스트":
            pfret = 26;
            break;
        case "에센스 오브 아처":
        case "에센스오브 아처":
        case "에센스오브아처":
        case "에센스":
            pfret = 27;
            break;
        case "렐릭 차지 II":
        case "렐릭차지 II":
        case "렐릭차지II":
        case "렐릭 차지 2":
        case "렐릭차지 2":
        case "렐릭차지2":
        case "렐차2":
            pfret = 28;
            break;
        case "커스 트랜지션":
        case "커스트랜지션":
        case "커트":
            pfret = 29;
            break;
        case "어드밴스드 카디널 포스":
        case "어드밴스드 카디널포스":
        case "어드밴스드카디널포스":
        case "어카포":
            pfret = 30;
            break;
        case "엣지 오브 레조넌스":
        case "엣지오브 레조넌스":
        case "엣지오브레조넌스":
        case "레조넌스":
        case "엣오레":
            pfret = 31;
            break;
        case "콤보 어썰트":
        case "콤보어썰트":
        case "어썰트":
        case "콤어":
            pfret = 32;
            break;
        case "콤보 어썰트 디스차지":
        case "콤보어썰트 디스차지":
        case "콤보어썰트디스차지":
        case "어썰트 디스차지":
        case "어썰트디스차지":
        case "어썰트디":
        case "콤어디":
            pfret = 33;
            break;
        case "콤보 어썰트 블래스트":
        case "콤보어썰트 블래스트":
        case "콤보어썰트블래스트":
        case "어썰트 블래스트":
        case "어썰트블래스트":
        case "어썰트블":
        case "콤어블":
            pfret = 34;
            break;
        case "콤보 어썰트 트랜지션":
        case "콤보어썰트 트랜지션":
        case "콤보어썰트트랜지션":
        case "어썰트 트랜지션":
        case "어썰트트랜지션":
        case "어썰트트":
        case "콤어트":
            pfret = 35;
            break;
        case "에디셔널 트랜지션":
        case "에디셔널트랜지션":
            pfret = 36;
            break;
        case "에인션트 아처리":
        case "에인션트아처리":
        case "아처리":
            pfret = 37;
            break;
        case "렐릭 에볼루션":
        case "렐릭에볼루션":
        case "에볼루션":
        case "렐에":
            pfret = 38;
            break;
        case "에인션트 아스트라":
        case "에인션트아스트라":
        case "아스트라":
        case "에아":
            pfret = 39;
            break;
        case "에인션트 아스트라 디스차지":
        case "에인션트아스트라 디스차지":
        case "에인션트아스트라디스차지":
        case "아스트라 디스차지":
        case "아스트라디스차지":
        case "아스트라디":
        case "에아디":
            pfret = 40;
            break;
        case "에인션트 아스트라 블래스트":
        case "에인션트아스트라 블래스트":
        case "에인션트아스트라블래스트":
        case "아스트라 블래스트":
        case "아스트라블래스트":
        case "아스트라블":
        case "에아블":
            pfret = 41;
            break;
        case "에인션트 아스트라 트랜지션":
        case "에인션트아스트라 트랜지션":
        case "에인션트아스트라트랜지션":
        case "아스트라 트랜지션":
        case "아스트라트랜지션":
        case "아스트라트":
        case "에아트":
            pfret = 42;
            break;
        case "":
            pfret = 43;
            break;
        case "":
            pfret = 44;
            break;
        case "":
            pfret = 45;
            break;
    }
    return pfret;
};
skpf.getskillnamePathfinder = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "얼티밋 블래스트";
            break;
        case 1:
            rep = "레이븐 템페스트";
            break;
        case 2:
            rep = "옵시디언 배리어";
            break;
        case 3:
            rep = "옵시디언 배리어(디스차지)";
            break;
        case 4:
            rep = "옵시디언 배리어(블래스트)";
            break;
        case 5:
            rep = "옵시디언 배리어(트랜지션)";
            break;
        case 6:
            rep = "렐릭 언바운드";
            break;
        case 7:
            rep = "렐릭 언바운드(디스차지)";
            break;
        case 8:
            rep = "렐릭 언바운드(블래스트)";
            break;
        case 9:
            rep = "렐릭 언바운드(트랜지션)";
            break;
        case 10:
            rep = "고대의 저주";
            break;
        case 11:
            rep = "커스 위크닝 I";
            break;
        case 12:
            rep = "카디널 디스차지";
            break;
        case 13:
            rep = "렐릭 차지 I";
            break;
        case 14:
            rep = "커스 위크닝 II";
            break;
        case 15:
            rep = "카디널 디스차지 강화";
            break;
        case 16:
            rep = "카디널 블래스트";
            break;
        case 17:
            rep = "스플릿 미스텔";
            break;
        case 18:
            rep = "에디셔널 디스차지";
            break;
        case 19:
            rep = "커스 위크닝 III";
            break;
        case 20:
            rep = "카디널 블래스트 강화";
            break;
        case 21:
            rep = "카디널 트랜지션";
            break;
        case 22:
            rep = "트리플 임팩트";
            break;
        case 23:
            rep = "레이븐";
            break;
        case 24:
            rep = "커스 톨러런스";
            break;
        case 25:
            rep = "에인션트 가이던스";
            break;
        case 26:
            rep = "에디셔널 블래스트";
            break;
        case 27:
            rep = "에센스 오브 아처";
            break;
        case 28:
            rep = "렐릭 차지 II";
            break;
        case 29:
            rep = "커스 트랜지션";
            break;
        case 30:
            rep = "어드밴스드 카디널 포스";
            break;
        case 31:
            rep = "엣지 오브 레조넌스";
            break;
        case 32:
            rep = "콤보 어썰트";
            break;
        case 33:
            rep = "콤보 어썰트(디스차지)";
            break;
        case 34:
            rep = "콤보 어썰트(블래스트)";
            break;
        case 35:
            rep = "콤보 어썰트(트랜지션)";
            break;
        case 36:
            rep = "에디셔널 트랜지션";
            break;
        case 37:
            rep = "에인션트 아처리";
            break;
        case 38:
            rep = "렐릭 에볼루션";
            break;
        case 39:
            rep = "에인션트 아스트라";
            break;
        case 40:
            rep = "에인션트 아스트라(디스차지)";
            break;
        case 41:
            rep = "에인션트 아스트라(블래스트)";
            break;
        case 42:
            rep = "에인션트 아스트라(트랜지션)";
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
    }
    return rep;
};
skpf.getskilldesc1Pathfinder = function (skillcode){
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
            rep = "16초지속/ 피격데미지 40%감소/ 보호막 개인화/ 쿨120초";
            break;
        case 4:
            rep = "16초지속/ 피격데미지 40%감소/ 보호막크기 증가/ 쿨120초";
            break;
        case 5:
            rep = "16초지속/ 피격데미지 40%감소/ 2초마다 재설치가능/ 쿨120초";
            break;
        case 6:
            rep = "하단 참조";
            break;
        case 7:
            rep = "22초간 일정간격마다 1100%의 데미지로 공격하는 화살 연속 발사";
            break;
        case 8:
            rep = "10초간 일정간격마다 10명,1375%, 8번공격 4회, 최대4발";
            break;
        case 9:
            rep = "40초간 일정간격마다 6명,1540%, 5번공격 최대3개 설치";
            break;
        case 10:
            rep = "하단 참조";
            break;
        case 11:
            rep = "카디널 포스 스킬로 공격 시 발동/ 최대 10단계";
            break;
        case 12:
            rep = "[카디널 포스] 최대 4명의 적에게 90%의 데미지로 4번 공격";
            break;
        case 13:
            rep = "하단 참조";
            break;
        case 14:
            rep = "카디널 포스 스킬로 공격 시 발동/ 최대 10단계";
            break;
        case 15:
            rep = "[카디널 포스] 최대 5명의 적에게 200%의 데미지로 4번 공격";
            break;
        case 16:
            rep = "[카디널 포스] 최대 4명의 적을 200%의 데미지로 4번 공격";
            break;
        case 17:
            rep = "하단 참조";
            break;
        case 18:
            rep = "디스차지일 때 블래스트 사용시 40%확률 3개 마법화살 생성";
            break;
        case 19:
            rep = "카디널 포스 스킬로 공격 시 발동/ 최대 10단계";
            break;
        case 20:
            rep = "[카디널 포스] 최대 5명의 적을 300%의 데미지로 4번 공격";
            break;
        case 21:
            rep = "하단 참조";
            break;
        case 22:
            rep = "[에인션트 포스] 4명의 적을 400%의 데미지로 5번 공격";
            break;
        case 23:
            rep = "220초 동안 레이븐 소환/ 390%, 4명의 적을 동시에 공격";
            break;
        case 24:
            rep = "하단 참조";
            break;
        case 25:
            rep = "하단 참조";
            break;
        case 26:
            rep = "블래스트일 때 디스차지 사용시 40%확률 2개 마법화살 생성";
            break;
        case 27:
            rep = "크리티컬 확률 10%, 데미지 10%";
            break;
        case 28:
            rep = "하단 참조";
            break;
        case 29:
            rep = "하단 참조";
            break;
        case 30:
            rep = "하단 참조";
            break;
        case 31:
            rep = "게이지 100, 최대 8명의 적을 800%의 데미지로 6번 공격";
            break;
        case 32:
            rep = "하단 참조";
            break;
        case 33:
            rep = "하단 참조";
            break;
        case 34:
            rep = "하단 참조";
            break;
        case 35:
            rep = "하단 참조";
            break;
        case 36:
            rep = "트랜지션일 때 디,블 스킬로 적 공격 시";
            break;
        case 37:
            rep = "하단 참조";
            break;
        case 38:
            rep = "하단 참조";
            break;
        case 39:
            rep = "하단 참조";
            break;
        case 40:
            rep = "하단 참조";
            break;
        case 41:
            rep = "하단 참조";
            break;
        case 42:
            rep = "하단 참조";
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
    }
    return rep;
};
skpf.getskilldesc2Pathfinder = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "[에인션트 포스]";
            break;
        case 1:
            rep = "[에인션트 포스]";
            break;
        case 2:
            rep = "[인챈트 포스]";
            break;
        case 3:
            rep = "[인챈트 포스] 공격능력X/ 일반공격 무시불가";
            break;
        case 4:
            rep = "[인챈트 포스] 일정주기 10명,1040%,4번 공격/ 일반공격 무시";
            break;
        case 5:
            rep = "[인챈트 포스] 일정주기 10명,1040%,4번 공격/ 일반공격 무시";
            break;
        case 6:
            rep = "[인챈트 포스]";
            break;
        case 7:
            rep = "[인챈트 포스] 방향전환 불가능/ 쿨120초";
            break;
        case 8:
            rep = "[인챈트 포스] 지속시간 가장짧음/ 쿨120초";
            break;
        case 9:
            rep = "[인챈트 포스] 지속시간 가장김/ 설치랜덤/ 쿨120초";
            break;
        case 10:
            rep = "자체 디버프 패시브";
            break;
        case 11:
            rep = "단계마다 크리티컬 확률 2% 증가/ 1차때만";
            break;
        case 12:
            rep = "디스차지 문양 / HP 높은 적 추적";
            break;
        case 13:
            rep = "게이지 관련 패시브";
            break;
        case 14:
            rep = "단계마다 방어력 2% 증가/ 2차때만";
            break;
        case 15:
            rep = "공격 범위 내 보스 몬스터 존재 시 1개의 화살 추가발사";
            break;
        case 16:
            rep = "블래스트 문양";
            break;
        case 17:
            rep = "[에인션트 포스]";
            break;
        case 18:
            rep = "2초 동안 주위의 적을 추적(HP↑)하여 100%의 데미지로 3번 공격";
            break;
        case 19:
            rep = "단계마다 상태 이상 내성 2 증가/ 3차때만";
            break;
        case 20:
            rep = "최대 공격가능 수보다 적을 때 1명당 최종 데미지 10%";
            break;
        case 21:
            rep = "[카디널 포스] / 트랜지션 문양";
            break;
        case 22:
            rep = "렐릭 게이지 50 소비/ 재사용 대기시간 10초/ 도약";
            break;
        case 23:
            rep = "[패시브 효과 : 방어력 30% 증가]";
            break;
        case 24:
            rep = "내성 버프";
            break;
        case 25:
            rep = "조건부 최종데미지 패시브";
            break;
        case 26:
            rep = "2초간 적을 추적(HP↑)하여 폭발, 4명, 150%, 3번 공격";
            break;
        case 27:
            rep = "방어율 무시 30% 증가";
            break;
        case 28:
            rep = "렐릭 차지 강화";
            break;
        case 29:
            rep = "중첩마다 이펙트 다름";
            break;
        case 30:
            rep = "카디널 포스 계열 스킬 강화";
            break;
        case 31:
            rep = "[에인션트 포스] 디버프 중첩당 최종뎀10%, 쿨15초";
            break;
        case 32:
            rep = "[인챈트 포스]";
            break;
        case 33:
            rep = "[인챈트 포스]";
            break;
        case 34:
            rep = "[인챈트 포스]";
            break;
        case 35:
            rep = "[인챈트 포스]";
            break;
        case 36:
            rep = "7초간 최대6회 공격 40%확률 디버프 1개 중첩/ 공20%증가";
            break;
        case 37:
            rep = "-";
            break;
        case 38:
            rep = "[MapleStory BGM] Pathfinder: Relic Evolution";
            break;
        case 39:
            rep = "[인챈트 포스]";
            break;
        case 40:
            rep = "[인챈트 포스]";
            break;
        case 41:
            rep = "[인챈트 포스]";
            break;
        case 42:
            rep = "[인챈트 포스]";
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
    }
    return rep;
};
skpf.getskilldesc3Pathfinder = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "렐릭 게이지를 모두 소모하여 모든 것을 꿰뚫는 강력한 화살을 날린다.\n소모한 렐릭 게이지에 비례하여 화살의 위력이 강해진다.\n\n스킬 사용을 위해 렐릭 게이지 200 이상 필요, 사용 시 현재 보유한 모든 렐릭 게이지를 소모하여 최대 15명의 적을 1000% 데미지로 15번 공격하는 폭발 6번 발생. 시전 동작 중 무적.\n소모한 렐릭 게이지가 25%/50%/75%/100% 이상일 때 최종 데미지 25%/50%/75%/100% 증가, 몬스터 방어율 100% 추가 무시\n\n재사용 대기시간 120초";
            break;
        case 1:
            rep = "렐릭의 힘을 이용하여 모든 것을 파괴하는 레이븐의 진정한 모습을 불러낸다. 이볼브가 소환되어 있는 상태에서 아래 방향키와 함께 레이븐 템페스트를 사용하면 더욱 빠르게 휘몰아치는 이볼브 템페스트가 발동한다.\n소환된 레이븐/이볼브는 적을 찾아 이동하며, 스킬 키를 눌러서 레이븐/이볼브의 진행 방향을 바꿀 수 있다.\n커스텀 커맨드를 사용하면 이볼브 소환 중 레이븐 템페스트와 이볼브 템페스트의 발동 커맨드를 바꿀 수 있다.\n레이븐/이볼브가 소환되어 있을 때만 사용 가능하며, 레이븐 템페스트 및 이볼브 템페스트는 공격 반사 상태의 적을 공격해도 피해를 입지 않는다.\n\n렐릭 게이지 300 소비\n레이븐 템페스트 : 27초 동안 최대 12명의 적을 1000%의 데미지로 5번 공격\n이볼브 템페스트 : 10초 동안 최대 12명의 적을 1000%의 데미지로 6번 공격\n공격 시 렐릭 게이지 20 충전\n\n방향 전환 대기시간 2초, 재사용 대기시간 120초";
            break;
        case 2:
            rep = "렐릭의 힘을 증폭하여 자신과 파티원을 보호한다.\n보호의 힘을 받는 파티원은 고대의 저주 디버프가 걸린 적 공격 시 크리티컬 데미지 상승 효과를 받을 수 있다.\n옵시디언 배리어의 공격은 공격 반사 상태의 적을 공격해도 피해를 입지 않는다.\n디스차지 강화/주위 파티원에게 개인 보호막을 걸어준다.\n블래스트 강화/보호막 크기가 커진다.\n트랜지션 강화/보호막을 재설치할 수 있다.\n\n렐릭 게이지 300 소비, 지속 시간 12초, 최대 HP의 일정 비율로 피해를 입히는 공격에 피격 시 20% 피해 감소\n일정 주기로 보호막 범위 내 최대 8명의 적을 760%의 데미지로 4번 공격\n\n재사용 대기시간 120초";
            break;
        case 6:
            rep = "렐릭의 힘을 완전히 해방시켜 공격형 렐릭을 설치한다. 패스파인더의 공격 적중 시 설치된 렐릭이 공명하여 문양에 맞는 공격을 날린다. 렐릭의 문양이 없다면 사용 할 수 없다.\n디스차지 강화/전방의 적에게 화살을 빠르게 난사하는 렐릭을 설치한다.\n블래스트 강화/적중 시 강력한 폭발이 발생하는 화살을 투사하는 렐릭을 설치한다.\n트랜지션 강화/일정 범위의 적을 동시 공격하는 렐릭을 여러 개 설치한다.\n\n렐릭 게이지 250 소비\n디스차지 강화 : 22초 동안 일정 간격마다 1100%의 데미지로 공격하는 화살 연속 발사\n블래스트 강화 : 10초 동안 일정 간격마다 명중한 곳에서 최대 10명의 적을 1375%의 데미지로 8번 공격하는 폭발이 4회 발생하는 화살 발사, 최대 4발까지 발사 가능\n트랜지션 강화 : 40초 동안 일정 간격마다 최대 6명의 적을 1540%의 데미지로 5번 공격하는 렐릭 최대 3개 설치\n\n재사용 대기시간 : 120초";
            break;
        case 10:
            rep = "알 수 없는 저주의 영향으로 각종 능력치가 하락한다.\n저주의 영향으로 전용 무기인 에인션트 보우만을 착용할 수 있으며, 착용한 렐릭의 힘이 강해질수록 저주의 영향력은 약해진다.\n에인션트 보우로 사용하는 기술은 별도의 화살을 소모하지 않는다.\n\n1레벨 - 크리티컬 확률 -20%, 방어력 -20%, 상태 이상 내성 -20\n2레벨 - 방어력 -20%, 상태 이상 내성 -20\n3레벨 - 상태 이상 내성 -20\n4레벨 - 고대의 저주를 이겨내고 전투에 활용할 수 있게 됨";
            break;
        case 13:
            rep = "착용한 렐릭에 에너지를 모아 전투에 활용할 수 있다.\n카디널 포스 스킬을 사용하면 렐릭의 문양이 변하고, 공격 적중 시 게이지가 충전된다.\n충전한 게이지는 강력한 에인션트 포스 스킬을 사용하는데 소비된다. 카디널 포스 사용 후 다른 카디널 포스 및 에인션트 포스를 연계하여 빠르게 사용할 수 있다.\n\n최대 충전 가능 렐릭 게이지 1000\n카디널 포스 스킬로 적 공격 시 렐릭 게이지 10 충전, 카디널 디스차지는 적에게 명중한 유도 화살 1개당 5 충전\n직전과 다른 카디널 포스 스킬 사용 시 5차 스킬을 제외한 에인션트 포스 스킬 재사용 대기시간 0.5초 감소";
            break;
        case 17:
            rep = "렐릭의 힘으로 신비한 기운이 담긴 화살을 만들어 발사한다. 발사된 화살이 적을 관통할 때마다 추가 마법 화살이 생성되어 근처의 적을 공격한다.\n\n렐릭 게이지 50 소비, 최대 8명의 적을 200%의 데미지로 4번 공격하며 관통. 적을 관통할 때마다 100%의 데미지로 4번 공격하는 마법 화살 2개 생성\n\n재사용 대기시간 10초";
            break;
        case 21:
            rep = "이동을 수반하는 궁술로, 무기에 저장된 신속의 기운을 활성화시켜서 빠르게 이동 후 도착 지점에서 무기를 휘둘러 주위의 적을 공격한다.\n함께 사용한 방향키에 따라 캐릭터 전방 혹은 위로 이동할 수 있으며, 방향키를 사용하지 않으면 제자리에서 무기를 휘두른다.\n\nMP 20, 신속의 기운 1개 소비\n도착 지점 주위 최대 6명의 적을 400%의 데미지로 5번 공격\n신속의 기운은 7초마다 1개씩 준비되며 최대 5개까지 저장 가능";
            break;
        case 24:
            rep = "저주에 대한 내성을 바탕으로 일정 시간 동안 각종 상태 이상에 더 잘 저항할 수 있게 된다.\n버프 지속 시간 중 상태 이상에 걸리면 추가로 상태 이상 저항이 증가하며, 영구히 상태 이상 내성 및 모든 속성 내성이 증가한다.\n\nMP 58 소비, 300초 동안 상태 이상 내성 30 증가. 버프 지속 시간 중 상태 이상에 걸릴 경우 상태 이상 내성이 20만큼 추가 증가하며, 최대 5회 중첩\n[패시브 효과 : 상태 이상 내성 30, 모든 속성 내성 30% 증가]";
            break;
        case 25:
            rep = "렐릭 게이지를 일정량 채울 때마다 렐릭으로부터 강력한 힘이 흘러나와 패스파인더의 전투 능력을 강화한다.\n렐릭의 활성화 상태는 렐릭 게이지 주변에 표시되며, 게이지가 가득 차 있을 때는 렐릭의 활성화 수치가 증가하지 않는다.\n\n렐릭 게이지를 1000만큼 채울 때마다 40초 동안 최종 데미지 5% 증가\n발동 시 최대 HP/MP 8% 회복\n\n[패시브 효과 : 최대 HP 50%, 최종 데미지 20% 증가]";
            break;
        case 26:
            rep = "완전해진 렐릭의 힘으로 에너지 순환이 원활해지고 인챈트 포스에 카디널 포스의 힘을 담아 강화시킬 수 있다.\n렐릭의 문양에 따라 인챈트 포스의 특성이 달라지며, 인챈트 포스 사용 후 렐릭의 문양은 초기화된다.\n카디널 포스 사용 후 인챈트 포스를 연계하여 빠르게 사용할 수 있다.\n\n카디널 포스 스킬로 적 공격 시 렐릭 게이지 20 충전, 카디널 디스차지는 적에게 명중한 화살당 10 충전\n레이븐이 적을 공격할 경우 렐릭 게이지 10 충전\n직전과 다른 카디널 포스 스킬 사용 시 5차 스킬을 제외한 에인션트 포스/인챈트 포스 스킬 재사용 대기시간 1초 감소";
            break;
        case 29:
            rep = "고대의 저주를 이겨내고 전투에 저주를 활용할 수 있게 되었다.\n활대를 활용한 공격 및 특수 공격으로 적에게 저주를 전이시킬 수 있으며, 소환된 레이븐은 디버프에 걸린 적을 우선 공격한다.\n\n특정 스킬로 적 공격 시 최대 5회까지 중첩되고 15초 동안 지속되는 고대의 저주 디버프 발생\n디버프에 걸린 적을 에인션트 보우를 사용하는 스킬로 공격하면 중첩 당 크리티컬 데미지가 4% 증가";
            break;
        case 30:
            rep = "완전해진 렐릭의 힘으로 모든 카디널 포스 스킬을 강화한다.\n\n카디널 포스 스킬 사용 시 MP 30 소비\n\n카디널 디스차지\n최대 6명의 적에게 300%의 데미지로 4번 공격하는 화살 발사, 공격 범위 내 보스 몬스터 존재 시 1개의 화살 추가 발사\n\n카디널 블래스트\n화살 폭발 시 최대 6명의 적을 400%의 데미지로 4번 공격\n공격 받는 적이 최대 공격 가능한 몬스터 수보다 적을 때 1명 당 최종 데미지 10% 증가\n\n카디널 트랜지션\n신속의 기운 1개 소비. 도착 지점 주위 최대 7명의 적을 540%의 데미지로 5번 공격\n신속의 기운은 7초마다 1개씩 준비되며 최대 5개까지 저장 가능\n스킬을 시전하는 동안 적의 어떠한 공격에도 밀려나지 않으며, 피격당한 적은 고대의 저주 디버프 1개 중첩";
            break;
        case 32:
            rep = "활대로 가까운 적을 공격 후 공간을 날아다니는 화살을 쏘아 넓은 범위의 적들을 공격한다.\n디스차지 강화\n화살이 더 넓은 범위의 적들을 공격한다.\n블래스트 강화\n활대로 적 1인에게 강력한 일격을 가한다.\n트랜지션 강화\n활대 공격에 피격당한 적에게 고대의 저주 디버프를 크게 중첩시킨다.\n\n렐릭 게이지 150 소비, 활대 공격은 최대 4명의 적을 500%의 데미지로 7번 공격, 피격 당한 적은 고대의 저주 디버프 1개 중첩\n화살 공격은 최대 10명의 적을 550%의 데미지로 5번 공격\n\n재사용 대기시간 20초";
            break;
        case 33:
            rep = "활대로 가까운 적을 공격 후 공간을 날아다니는 화살을 쏘아 넓은 범위의 적들을 공격한다.\n화살이 더 넓은 범위의 적들을 공격한다.\n\n렐릭 게이지 150 소비, 활대 공격은 최대 5명의 적을 600%의 데미지로 7번 공격, 피격 당한 적은 고대의 저주 디버프 1개 중첩\n화살 공격은 최대 12명의 적을 650%의 데미지로 5번 공격\n\n재사용 대기시간 20초";
            break;
        case 34:
            rep = "활대로 가까운 적을 공격 후 공간을 날아다니는 화살을 쏘아 넓은 범위의 적들을 공격한다.\n활대에 힘을 실어 더욱 강력한 일격을 가한다.\n\n렐릭 게이지 150 소비, 활대 공격은 최대 1명의 적을 600%의 데미지로 8번 공격, 피격 당한 적은 고대의 저주 디버프 1개 중첩\n화살 공격은 최대 10명의 적을 600%의 데미지로 5번 공격\n\n재사용 대기시간 20초";
            break;
        case 35:
            rep = "활대로 가까운 적을 공격 후 공간을 날아다니는 화살을 쏘아 넓은 범위의 적들을 공격한다.\n활대에 저주의 힘을 집중하여 피격당한 적에게 치명적인 저주를 전이시킨다.\n\n렐릭 게이지 150 소비, 활대 공격은 최대 4명의 적을 600%의 데미지로 7번 공격, 피격 당한 적은 고대의 저주 디버프 5개 중첩\n화살 공격은 최대 10명의 적을 650%의 데미지로 5번 공격\n\n재사용 대기시간 20초";
            break;
        case 36:
            rep = "";
            break;
        case 37:
            rep = "고대의 궁술을 수련하여 전투 능력을 강화한다.\n\n에디셔널 디스차지 데미지 50%p 증가, 에디셔널 블래스트 데미지 50%p 증가\n스플릿 미스텔 최초 화살 데미지 350%p 증가, 추가 마법 화살 데미지 200%p 증가, 트리플 임팩트 폭발 데미지 200%p 증가.\n에인션트 포스/인챈트 포스 스킬의 최종 데미지 10% 증가, 보스 몬스터 공격 시 데미지 50% 증가";
            break;
        case 38:
            rep = "렐릭으로부터 숨겨진 고대의 힘을 이끌어낸다.재사용 대기시간 초기화(초월룬 포함)의 효과를 받지 않는다.\n\nMP 300 소비, 사용 즉시 렐릭 게이지 최대치로 충전, 충전량은 렐릭의 활성화 수치에 반영됨\n30초 동안 에디셔널 디스차지와 에디셔널 블래스트 발동 시 마법 화살이 1개 추가 생성되고 신속의 기운 준비시간 3초로 감소\n\n재사용 대기시간 120초";
            break;
        case 39:
            rep = "전설 속에 전해지는 화살을 실체화 하여 적들에게 강력한 공격을 퍼붓는다.\n디스차지 강화/피격당한 적에게서 추가 마법 화살 생성이 생성된다.\n블래스트 강화/적을 조준하여 파괴력이 극대화된 화살을 발사한다.\n트랜지션 강화/이동하면서 적들을 공격할 수 있다.\n\n1초당 렐릭 게이지 65 소비, 키다운하여 사용하면 전방 7명의 적을 320%의 데미지로 6번 연속 공격\n재사용 대기시간 60초";
            break;
        case 40:
            rep = "전설 속에 전해지는 화살을 실체화 하여 적들에게 강력한 공격을 퍼붓는다.\n피격당한 적에게서 일정 확률로 마법 화살이 생성되어 근처의 적을 공격한다. 마법 화살은 최대 HP가 가장 높은 보스 몬스터를 우선 추적한다.\n\n1초당 렐릭 게이지 65 소비, 키다운하여 사용하면 전방 7명의 적을 400%의 데미지로 6번 연속 공격. 공격한 적 1명당 30% 확률로 240% 데미지로 2번 공격하는 마법 화살 2개 생성\n시전 중 최대 HP의 일정 비율로 피해를 입히는 공격을 포함한 피격 데미지 60% 감소\n\n재사용 대기시간 60초";
            break;
        case 41:
            rep = "전설 속에 전해지는 화살을 실체화 하여 적들에게 강력한 공격을 퍼붓는다.\n↑, ↓ 화살표 키를 이용해 발사 각도를 조절할 수 있으며, 발사된 화살은 적에게 닿거나 사정거리 끝에서 폭발한다.\n\n1초당 렐릭 게이지 65 소비, 키다운하여 사용하면 일정 주기마다 지정한 각도로 화살 발사. 화살 폭발 시 최대 12명의 적을 1440%의 데미지로 10번 공격. 최초 발사 화살은 각도를 조절할 수 없고 정면으로 발사\n시전 중 최대 HP의 일정 비율로 피해를 입히는 공격을 포함한 피격 데미지 60% 감소\n\n재사용 대기시간 60초";
            break;
        case 42:
            rep = "전설 속에 전해지는 화살을 실체화 하여 적들에게 강력한 공격을 퍼붓는다.\n공격 중 방향키를 이용해 앞, 뒤로 이동할 수 있다.\n\n초당 렐릭 게이지 65 소비, 키다운하여 사용하면 전방 4명의 적을 360%의 데미지로 6번 연속 공격\n시전 중 최대 HP의 일정 비율로 피해를 입히는 공격을 포함한 피격 데미지 60% 감소\n\n재사용 대기시간 60초";
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
    }
    return rep;
};
skpf.getskillimage1Pathfinder = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "https://i.imgur.com/AK5eyLw.png";
            break;
        case 1:
            rep = "https://i.imgur.com/ARuAplY.png";
            break;
        case 2:
            rep = "";
            break;
        case 3:
            rep = "https://i.imgur.com/X2pvXac.png";
            break;
        case 4:
            rep = "https://i.imgur.com/pILn3lg.png";
            break;
        case 5:
            rep = "https://i.imgur.com/fpKfsv4.png";
            break;
        case 6:
            rep = "https://i.imgur.com/uriXTro.png";
            break;
        case 7:
            rep = "https://i.imgur.com/r5HESwr.png";
            break;
        case 8:
            rep = "https://i.imgur.com/8uhnN7e.png";
            break;
        case 9:
            rep = "https://i.imgur.com/4xYF6KX.png";
            break;
        case 10:
            rep = "";
            break;
        case 11:
            rep = "";
            break;
        case 12:
            rep = "https://i.imgur.com/sbVzM7H.png";
            break;
        case 13:
            rep = "";
            break;
        case 14:
            rep = "";
            break;
        case 15:
            rep = "";
            break;
        case 16:
            rep = "https://i.imgur.com/5Cp6MxH.png";
            break;
        case 17:
            rep = "https://i.imgur.com/x9uja2E.png";
            break;
        case 18:
            rep = "https://i.imgur.com/OG2CNAS.png";
            break;
        case 19:
            rep = "";
            break;
        case 20:
            rep = "";
            break;
        case 21:
            rep = "https://i.imgur.com/bGF67If.png";
            break;
        case 22:
            rep = "https://i.imgur.com/dlVqO36.png";
            break;
        case 23:
            rep = "https://i.imgur.com/YwyJMKr.png";
            break;
        case 24:
            rep = "https://i.imgur.com/6Awur3p.png";
            break;
        case 25:
            rep = "https://i.imgur.com/Dbq1F8y.png";
            break;
        case 26:
            rep = "https://i.imgur.com/mgQvsLT.png";
            break;
        case 27:
            rep = "";
            break;
        case 28:
            rep = "";
            break;
        case 29:
            rep = "https://i.imgur.com/dmJ1P1V.png";
            break;
        case 30:
            rep = "";
            break;
        case 31:
            rep = "https://i.imgur.com/7CBGXMT.png";
            break;
        case 32:
            rep = "";
            break;
        case 33:
            rep = "https://i.imgur.com/AihQG8o.png";
            break;
        case 34:
            rep = "https://i.imgur.com/h5pkQZv.png";
            break;
        case 35:
            rep = "https://i.imgur.com/MES5Y5p.png";
            break;
        case 36:
            rep = "";
            break;
        case 37:
            rep = "";
            break;
        case 38:
            rep = "https://i.imgur.com/yuNcxrW.png";
            break;
        case 39:
            rep = "";
            break;
        case 40:
            rep = "https://i.imgur.com/Ozl4OEP.png";
            break;
        case 41:
            rep = "https://i.imgur.com/8CquOw0.png";
            break;
        case 42:
            rep = "https://i.imgur.com/nfvVqer.png";
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
    }
    return rep;
};
skpf.getskillimage2Pathfinder = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "https://i.imgur.com/9yyK58U.png";
            break;
        case 1:
            rep = "https://i.imgur.com/plm5DBp.png";
            break;
        case 2:
            rep = "https://i.imgur.com/myG7VPt.png";
            break;
        case 3:
            rep = "https://i.imgur.com/Mu602TF.png";
            break;
        case 4:
            rep = "https://i.imgur.com/OzRwtlW.png";
            break;
        case 5:
            rep = "https://i.imgur.com/KPXIXLB.png";
            break;
        case 6:
            rep = "https://i.imgur.com/l02BMPn.png";
            break;
        case 7:
            rep = "https://i.imgur.com/MSSIMgN.png";
            break;
        case 8:
            rep = "https://i.imgur.com/pvaMm2L.png";
            break;
        case 9:
            rep = "https://i.imgur.com/QtfcD9f.png";
            break;
        case 10:
            rep = "https://i.imgur.com/cogQzJh.png";
            break;
        case 11:
            rep = "https://i.imgur.com/g8YOaWw.png";
            break;
        case 12:
            rep = "https://i.imgur.com/vpPgVHF.png";
            break;
        case 13:
            rep = "https://i.imgur.com/PTEnw6i.png";
            break;
        case 14:
            rep = "https://i.imgur.com/kZyKOAF.png";
            break;
        case 15:
            rep = "https://i.imgur.com/6ERU1K7.png";
            break;
        case 16:
            rep = "https://i.imgur.com/n40XsA7.png";
            break;
        case 17:
            rep = "https://i.imgur.com/QPcPC18.png";
            break;
        case 18:
            rep = "https://i.imgur.com/tFSqffY.png";
            break;
        case 19:
            rep = "https://i.imgur.com/DazvUm5.png";
            break;
        case 20:
            rep = "https://i.imgur.com/hafuTrc.png";
            break;
        case 21:
            rep = "https://i.imgur.com/opgMana.png";
            break;
        case 22:
            rep = "https://i.imgur.com/l0bDQ4D.png";
            break;
        case 23:
            rep = "https://i.imgur.com/Bokt3Mm.png";
            break;
        case 24:
            rep = "https://i.imgur.com/zHwAr9F.png";
            break;
        case 25:
            rep = "https://i.imgur.com/atUDlsf.png";
            break;
        case 26:
            rep = "https://i.imgur.com/c0PyOFw.png";
            break;
        case 27:
            rep = "https://i.imgur.com/C54qZbs.png";
            break;
        case 28:
            rep = "https://i.imgur.com/EHQs9bf.png";
            break;
        case 29:
            rep = "https://i.imgur.com/pSDdtO6.png";
            break;
        case 30:
            rep = "https://i.imgur.com/OZGmXYQ.png";
            break;
        case 31:
            rep = "https://i.imgur.com/Y1RcCdZ.png";
            break;
        case 32:
            rep = "https://i.imgur.com/R9h4uY0.png";
            break;
        case 33:
            rep = "https://i.imgur.com/qV8smRH.png";
            break;
        case 34:
            rep = "https://i.imgur.com/cpRTFnC.png";
            break;
        case 35:
            rep = "https://i.imgur.com/X2rilZk.png";
            break;
        case 36:
            rep = "https://i.imgur.com/FSSTIRY.png";
            break;
        case 37:
            rep = "https://i.imgur.com/r5Kqc3i.png";
            break;
        case 38:
            rep = "https://i.imgur.com/IhqwHhm.png";
            break;
        case 39:
            rep = "https://i.imgur.com/lCLrus0.png";
            break;
        case 40:
            rep = "https://i.imgur.com/g1zZyK5.png";
            break;
        case 41:
            rep = "https://i.imgur.com/OIU0C2w.png";
            break;
        case 42:
            rep = "https://i.imgur.com/9Gjfrtq.png";
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
    }
    return rep;
};

module.exports = skpf;