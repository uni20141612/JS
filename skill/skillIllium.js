const ski = {};

ski.getskillIllium = function (skillname){
    var iret = -1;
    switch(skillname){
        case "크리스탈 이그니션":
        case "크리스탈이그니션":
        case "이그니션":
        case "크이":
            iret = 0;
            break;
        case "리액션:스펙트럼":
        case "리액션 스펙트럼":
        case "스펙트럼":
        case "리스":
            iret = 1;
            break;
        case "그람홀더":
        case "그홀":
            iret = 2;
            break;
        case "소울 오브 크리스탈":
        case "소울오브 크리스탈":
        case "소울오브크리스탈":
        case "소오크":
        case "소크":
            iret = 3;
            break;
        case "크리스탈 게이트":
        case "크리스탈게이트":
        case "게이트":
        case "크게":
            iret = 4;
            break;
        case "매직 서킷":
        case "매직서킷":
            iret = 5;
            break;
        case "크래프트:자벨린":
        case "크래프트 자벨린":
        case "크래프트자벨린":
        case "자벨린":
        case "크자":
            iret = 6;
            break;
        case "크래프트:오브":
        case "크래프트 오브":
        case "크래프트오브":
        case "오브":
        case "크오":
            iret = 7;
            break;
        case "리요":
        case "엑스":
        case "소환수1":
            iret = 8;
            break;
        case "크리스탈 포탈":
        case "크리스탈포탈":
        case "크포":
        case "포탈":
        case "텔레포트":
        case "텔포":
        case "근두운":
            iret = 9;
            break;
        case "블레스 마크":
        case "블레스마크":
        case "블마":
            iret = 10;
            break;
        case "크리스탈 차지":
        case "크리스탈차지":
        case "차지":
        case "크차":
            iret = 11;
            break;
        case "크리스탈 컨트롤":
        case "크리스탈컨트롤":
        case "컨트롤":
        case "크컨":
            iret = 12;
            break;
        case "리액션:디스트럭션":
        case "리액션 디스트럭션":
        case "리액션디스트럭션":
        case "디스트럭션":
        case "리디":
            iret = 13;
            break;
        case "리액션:도미네이션":
        case "리액션 도미네이션":
        case "리액션도미네이션":
        case "도미네이션":
        case "리도":
            iret = 14;
            break;
        case "크리스탈 스킬:모탈스윙":
        case "크리스탈스킬:모탈스윙":
        case "크리스탈 스킬 모탈스윙":
        case "크리스탈스킬 모탈스윙":
        case "크리스탈스킬모탈스윙":
        case "모탈 스윙":
        case "모탈스윙":
        case "탈모스윙":
            iret = 15;
            break;
        case "마키나":
        case "소환수2":
            iret = 16;
            break;
        case "디바인 실드":
        case "디바인실드":
        case "디바인":
            iret = 17;
            break;
        case "커스 마크":
        case "커스마크":
        case "커마":
            iret = 18;
            break;
        case "크리스탈 차지 숙련":
        case "크리스탈차지 숙련":
        case "크리스탈차지숙련":
        case "크리스탈 차지 2":
        case "크리스탈차지 2":
        case "크리스탈차지2":
        case "크차숙":
        case "크차2":
            iret = 19;
            break;
        case "리액션:디스트럭션 II":
        case "리액션:디스트럭션II":
        case "리액션 디스트럭션 II":
        case "리액션디스트럭션 II":
        case "리액션디스트럭션II":
        case "디스트럭션 II":
        case "디스트럭션II":
        case "리디II":
        case "리액션:디스트럭션 2":
        case "리액션:디스트럭션2":
        case "리액션 디스트럭션 2":
        case "리액션디스트럭션 2":
        case "리액션디스트럭션2":
        case "디스트럭션 2":
        case "디스트럭션2":
        case "리디2":
            iret = 20;
            break;
        case "리액션:도미네이션 II":
        case "리액션:도미네이션II":
        case "리액션 도미네이션 II":
        case "리액션도미네이션 II":
        case "리액션도미네이션II":
        case "도미네이션 II":
        case "도미네이션II":
        case "리도II":
        case "리액션:도미네이션 2":
        case "리액션:도미네이션2":
        case "리액션 도미네이션 2":
        case "리액션도미네이션 2":
        case "리액션도미네이션2":
        case "도미네이션 2":
        case "도미네이션2":
        case "리도2":
            iret = 21;
            break;
        case "크리스탈 스킬:글로리 윙":
        case "크리스탈스킬:글로리 윙":
        case "크리스탈 스킬:글로리윙":
        case "크리스탈스킬:글로리윙":
        case "크리스탈 스킬 글로리 윙":
        case "크리스탈스킬 글로리 윙":
        case "크리스탈 스킬 글로리윙":
        case "크리스탈스킬 글로리윙":
        case "크리스탈스킬글로리윙":
        case "글로리 윙":
        case "글로리윙":
        case "똥파리":
            iret = 22;
            break;
        case "글로리 윙:자벨린":
        case "글로리윙:자벨린":
        case "글로리 윙 자벨린":
        case "글로리윙 자벨린":
        case "글로리윙자벨린":
        case "글자":
        case "윙자":
            iret = 23;
            break;
        case "크리스탈 스킬:하모니 링크":
        case "크리스탈스킬:하모니 링크":
        case "크리스탈 스킬:하모니링크":
        case "크리스탈스킬:하모니링크":
        case "크리스탈 스킬 하모니 링크":
        case "크리스탈스킬 하모니 링크":
        case "크리스탈 스킬 하모니링크":
        case "크리스탈스킬 하모니링크":
        case "크리스탈스킬하모니링크":
        case "하모니 링크":
        case "하모니링크":
        case "하링":
            iret = 24;
            break;
        case "크리스탈 포탈 부스트":
        case "크리스탈포탈 부스트":
        case "크리스탈포탈부스트":
        case "텔레포트 부스트":
        case "텔레포트부스트":
        case "텔포부스트":
        case "크포부":
            iret = 25;
            break;
        case "블레스 마크 숙련":
        case "블레스마크 숙련":
        case "블레스마크숙련":
        case "블마숙련":
        case "블레스 마크 2":
        case "블레스마크 2":
        case "블레스마크2":
        case "블마2":
            iret = 26;
            break;
        case "커스 마크 숙련":
        case "커스마크 숙련":
        case "커스마크숙련":
        case "커마숙련":
        case "커스 마크 2":
        case "커스마크 2":
        case "커스마크2":
        case "커마2":
            iret = 27;
            break;
        case "운명 개척":
        case "운명개척":
            iret = 28;
            break;
        case "끊임없는 연구":
        case "끊임없는연구":
        case "연구":
            iret = 29;
            break;
        case "크리스탈 차지 완성":
        case "크리스탈차지 완성":
        case "크리스탈차지완성":
        case "크차완성":
        case "크리스탈 차지 3":
        case "크리스탈차지 3":
        case "크리스탈차지3":
        case "크차3":
            iret = 30;
            break;
        case "크래프트:자벨린 II":
        case "크래프트:자벨린II":
        case "크래프트 자벨린 II":
        case "크래프트자벨린 II":
        case "크래프트자벨린II":
        case "크래프트:자벨린 2":
        case "크래프트:자벨린2":
        case "크래프트 자벨린 2":
        case "크래프트자벨린 2":
        case "크래프트자벨린2":
        case "자벨린 II":
        case "자벨린II":
        case "자벨린 2":
        case "자벨린2":
            iret = 31;
            break;
        case "크래프트:오브 II":
        case "크래프트:오브II":
        case "크래프트 오브 II":
        case "크래프트오브 II":
        case "크래프트오브II":
        case "크래프트:오브 2":
        case "크래프트:오브2":
        case "크래프트 오브 2":
        case "크래프트오브2":
        case "오브 II":
        case "오브II":
        case "오브 2":
        case "오브2":
            iret = 32;
            break;
        case "크래프트:롱기누스":
        case "크래프트 롱기누스":
        case "크래프트롱기누스":
        case "롱기누스":
            iret = 33;
            break;
        case "크리스탈 스킬:데우스":
        case "크리스탈스킬:데우스":
        case "크리스탈 스킬 데우스":
        case "크리스탈스킬 데우스":
        case "크리스탈스킬데우스":
        case "데우스":
        case "소환수3":
            iret = 34;
            break;
        case "글로리 윙:모탈 윙비트":
        case "글로리 윙:모탈윙비트":
        case "글로리윙:모탈 윙비트":
        case "글로리윙:모탈윙비트":
        case "글로리 윙 모탈 윙비트":
        case "글로리윙 모탈 윙비트":
        case "글로리 윙 모탈윙비트":
        case "글로리윙 모탈윙비트":
        case "글로리윙모탈윙비트":
        case "모탈 윙비트":
        case "모탈윙비트":
        case "탈모윙비트":
        case "윙비트":
        case "모윙":
            iret = 35;
            break;
        case "글로리 윙:하모니 윙비트":
        case "글로리윙:하모니 윙비트":
        case "글로리 윙:하모니윙비트":
        case "글로리윙:하모니윙비트":
        case "글로리 윙 하모니 윙비트":
        case "글로리윙 하모니 윙비트":
        case "글로리 윙 하모니윙비트":
        case "글로리윙 하모니윙비트":
        case "글로리윙하모니윙비트":
        case "하모니 윙비트":
        case "하모니윙비트":
        case "하윙":
            iret = 36;
            break;
        case "패스트 차지":
        case "패스트차지":
        case "패차":
            iret = 37;
            break;
        case "블레스 마크 완성":
        case "블레스마크 완성":
        case "블레스마크완성":
        case "블레스 마크 3":
        case "블레스마크 3":
        case "블레스마크3":
        case "블마완성":
        case "블마3":
            iret = 38;
            break;
        case "커스 마크 완성":
        case "커스마크 완성":
        case "커스마크완성":
        case "커스 마크 3":
        case "커스마크 3":
        case "커스마크3":
        case "커마완성":
        case "커마3":
            iret = 39;
            break;
        case "크리스탈의 비밀":
        case "크리스탈의비밀":
        case "크리스탈비밀":
        case "비밀":
            iret = 40;
            break;
        case "프라이멀 프로텍션":
        case "프라이멀프로텍션":
        case "프라이멀":
        case "프로텍션":
        case "프프":
            iret = 41;
            break;
        case "롱기누스 존":
        case "롱기누스존":
        case "롱존":
            iret = 42;
            break;
    }
    return iret;
};
ski.getskillnameIllium = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "크리스탈 이그니션";
            break;
        case 1:
            rep = "리액션:스펙트럼";
            break;
        case 2:
            rep = "그람홀더";
            break;
        case 3:
            rep = "소울 오브 크리스탈";
            break;
        case 4:
            rep = "크리스탈 게이트";
            break;
        case 5:
            rep = "매직 서킷";
            break;
        case 6:
            rep = "크래프트:자벨린";
            break;
        case 7:
            rep = "크래프트:오브";
            break;
        case 8:
            rep = "리요";
            break;
        case 9:
            rep = "크리스탈 포탈";
            break;
        case 10:
            rep = "블레스 마크";
            break;
        case 11:
            rep = "크리스탈 차지";
            break;
        case 12:
            rep = "크리스탈 컨트롤";
            break;
        case 13:
            rep = "리액션:디스트럭션";
            break;
        case 14:
            rep = "리액션:도미네이션";
            break;
        case 15:
            rep = "크리스탈 스킬:모탈스윙";
            break;
        case 16:
            rep = "마키나";
            break;
        case 17:
            rep = "디바인 실드";
            break;
        case 18:
            rep = "커스 마크";
            break;
        case 19:
            rep = "크리스탈 차지 숙련";
            break;
        case 20:
            rep = "리액션:디스트럭션 II";
            break;
        case 21:
            rep = "리액션:도미네이션 II";
            break;
        case 22:
            rep = "크리스탈 스킬:글로리 윙";
            break;
        case 23:
            rep = "글로리 윙:자벨린";
            break;
        case 24:
            rep = "크리스탈 스킬:하모니 링크";
            break;
        case 25:
            rep = "크리스탈 포탈 부스트";
            break;
        case 26:
            rep = "블레스 마크 숙련";
            break;
        case 27:
            rep = "커스 마크 숙련";
            break;
        case 28:
            rep = "운명 개척";
            break;
        case 29:
            rep = "끊임없는 연구";
            break;
        case 30:
            rep = "크리스탈 차지 오나성";
            break;
        case 31:
            rep = "크래프트:자벨린 II";
            break;
        case 32:
            rep = "크래프트:오브 II";
            break;
        case 33:
            rep = "크래프트:롱기누스";
            break;
        case 34:
            rep = "크리스탈 스킬:데우스";
            break;
        case 35:
            rep = "글로리 윙:모탈 윙비트";
            break;
        case 36:
            rep = "글로리 윙:하모니 윙비트";
            break;
        case 37:
            rep = "패스트 차지";
            break;
        case 38:
            rep = "블레스 마크 완성";
            break;
        case 39:
            rep = "커스 마크 완성";
            break;
        case 40:
            rep = "크리스탈의 비밀";
            break;
        case 41:
            rep = "프라이멀 프로텍션";
            break;
        case 42:
            rep = "롱기누스 존";
            break;
        case 43:
            rep = "";
            break;
    }
    return rep;
};
ski.getskilldesc1Illium = function (skillcode){
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
            rep = "";
            break;
        case 6:
            rep = "";
            break;
        case 7:
            rep = "";
            break;
        case 8:
            rep = "";
            break;
        case 9:
            rep = "";
            break;
        case 10:
            rep = "";
            break;
        case 11:
            rep = "";
            break;
        case 12:
            rep = "";
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
            rep = "";
            break;
        case 17:
            rep = "";
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
            rep = "";
            break;
        case 22:
            rep = "";
            break;
        case 23:
            rep = "";
            break;
        case 24:
            rep = "";
            break;
        case 25:
            rep = "";
            break;
        case 26:
            rep = "";
            break;
        case 27:
            rep = "";
            break;
        case 28:
            rep = "";
            break;
        case 29:
            rep = "";
            break;
        case 30:
            rep = "";
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
    }
    return rep;
};
ski.getskilldesc2Illium = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "총 타수 248타";
            break;
        case 1:
            rep = "크리스탈 이그니션의 리액션 스킬";
            break;
        case 2:
            rep = "4번째 소환수 스킬";
            break;
        case 3:
            rep = "버프 프리저가 적용되지 않는다.";
            break;
        case 4:
            rep = "3개까지 설치할 수 있고, 2개가 설치되면 작동하기 시작";
            break;
        case 5:
            rep = "";
            break;
        case 6:
            rep = "";
            break;
        case 7:
            rep = "";
            break;
        case 8:
            rep = "";
            break;
        case 9:
            rep = "";
            break;
        case 10:
            rep = "";
            break;
        case 11:
            rep = "";
            break;
        case 12:
            rep = "";
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
            rep = "";
            break;
        case 17:
            rep = "";
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
            rep = "";
            break;
        case 22:
            rep = "";
            break;
        case 23:
            rep = "";
            break;
        case 24:
            rep = "";
            break;
        case 25:
            rep = "";
            break;
        case 26:
            rep = "";
            break;
        case 27:
            rep = "";
            break;
        case 28:
            rep = "";
            break;
        case 29:
            rep = "";
            break;
        case 30:
            rep = "";
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
    }
    return rep;
};
ski.getskilldesc3Illium = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "모든 것을 불태우는 강력한 에너지 기운을 전방으로 내뿜는다. 키다운으로 최대 10초까지 스킬을 유지할 수 있으며 좌, 우로 이동할 수 있다. 공격 적중 시 블레스 마크의 지속시간이 갱신된다.\n\nMP 30 소비, 일정 간격으로 최대 15명의 적을 1650%의 데미지로 4번 공격, 보스 몬스터 공격 시 데미지 20% 증가\n재사용 대기시간 180초";
            break;
        case 1:
            rep = "크리스탈이 크리스탈 이그니션에 닿으면 그 힘을 강화시켜 반대 방향으로 3줄기의 강력한 빛을 내뿜는다. 글로리 윙 사용 중에는 크리스탈에 닿지 않아도 자동으로 발동된다. 크리스탈 이그니션과 스킬 레벨 공유.\n\n최대 15명의 적을 2200%의 데미지로 5번 공격, 보스 몬스터 공격 시 데미지 20% 증가\n재발동 대기시간 1초";
            break;
        case 2:
            rep = "신계의 무기 그람을 사용하는 기계 전사를 소환한다. 그람홀더는 일리움이 있는 방향으로 공격을 준비하며, 공격할 때 까지 방향을 바꾸지 않는다. 공격을 준비하는 동안 크리스탈 차지가 일정 이상 이뤄지면 더 강력한 검기를 발사한다. 그림홀더는 공격 반사 상태의 적을 공격해도 피해를 입지 않는다.\n\nMP 200 소비, 40초 동안 일정 간격으로 최대 12명의 적을 1100%의 데미지로 12번 공격\n공격 준비 중 크리스탈 차지가 3 이상 충전되거나 글로리 윙 상태라면 최종 데미지 2배로 증가\n\n재사용 대기시간 180초";
            break;
        case 3:
            rep = "크리스탈의 힘을 모방하여 영혼의 크리스탈을 창조한다. 영혼의 크리스탈로 리액션 스킬을 발동시킬 수 있다.\n크래프트:자벨린이 닿았을 때 공격 가능한 적 수를 소모하지 않는다.\n글로리 윙 사용 중에는 사용할 수 없다.\n\nMP 500, 크리스탈 조각 1개 소비\n\n크리스탈이 있는 위치에 30초 동안 영혼의 크리스탈 창조\n영혼의 크리스탈로 발동되는 리액션 스킬의 최종 데미지는 80%만 반영. 단, 리액션 스킬이 5차 스킬일 경우 100% 반영\n영혼의 크리스탈로 발동되는 리액션 스킬은 재사용 대기시간 초기화의 효과를 받지 않음\n글로리 윙 사용 시 소환된 영혼의 크리스탈이 소멸하며 남은 지속시간 동안 소멸한 영혼의 크리스탈 1개당 데미지 35% 증가\n크리스탈 조각은 20초마다 1개씩 준비되며 최대 2개까지 준비 가능\n\n재사용 대기시간 2.5초\n[패시브 효과 : 마력 65 증가]";
            break;
        case 4:
            rep = "크리스탈 기술을 발전시켜 자유롭게 이동할 수 있는 통로를 설치한다.\n작동을 시작한 자신의 크리스탈 게이트에서 위쪽 방향키를 누르면 해당 크리스탈 다음에 설치한 크리스탈 게이트로 이동할 수 있고 마지막에 설치한 크리스탈 게이트를 사용하면 처음 설치한 크리스탈 게이트로 이동한다.\n1회 사용 후 다시 이용하기 위해 충전 시간이 필요하고 직접 사용한 크리스탈 게이트는 충전 시간이 더 길다. 크리스탈 게이트 주변에서 강화 및 공격 지원 버프를 받을 수 있고 공중에도 설치할 수 있다.\n크리스탈 게이트는 버프 프리저의 효과를 받지 않고 통로를 사용한 이동은 전투의 흐름 발동에 필요한 이동 거리에 포함된다.\n\nMP 500 소비, 160초 동안 최대 3개의 크리스탈 게이트 설치 가능, 2개 이상 설치 시 작동 시작, 설치 가능한 시간과 크리스탈 게이트의 지속 시간 동일\n1회 이용 후 모든 크리스탈 게이트 2초 이용 불가, 직접 사용한 크리스탈 게이트 5초 이용 불가\n크리스탈 게이트 주변에서 일정 간격으로 25초 동안 지속되는 마력 65 증가 버프 획득\n\n버프 지속 중 직접 공격하는 스킬 적중 시 크리스탈 게이트를 통해 최대 3명의 적을 990%의 데미지로 공격하는 폭격 5번 발생, 재발동 대기시간 1.5초\n\n재사용 대기시간 : 180초";
            break;
        case 5:
            rep = "";
            break;
        case 6:
            rep = "";
            break;
        case 7:
            rep = "";
            break;
        case 8:
            rep = "";
            break;
        case 9:
            rep = "";
            break;
        case 20:
            rep = "";
            break;
        case 21:
            rep = "";
            break;
        case 22:
            rep = "";
            break;
        case 23:
            rep = "";
            break;
        case 24:
            rep = "";
            break;
        case 25:
            rep = "";
            break;
        case 26:
            rep = "";
            break;
        case 27:
            rep = "";
            break;
        case 28:
            rep = "";
            break;
        case 29:
            rep = "";
            break;
        case 30:
            rep = "";
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
    }
    return rep;
};
ski.getskillimage1Illium = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "https://i.imgur.com/3ec4v95.png";
            break;
        case 1:
            rep = "https://i.imgur.com/w6uKe3A.png";
            break;
        case 2:
            rep = "https://i.imgur.com/GPQT0OO.png";
            break;
        case 3:
            rep = "https://i.imgur.com/AoFlb9Q.png";
            break;
        case 4:
            rep = "https://i.imgur.com/ePeMChb.png";
            break;
        case 5:
            rep = "";
            break;
        case 6:
            rep = "";
            break;
        case 7:
            rep = "";
            break;
        case 8:
            rep = "";
            break;
        case 9:
            rep = "";
            break;
        case 10:
            rep = "";
            break;
        case 11:
            rep = "";
            break;
        case 12:
            rep = "";
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
            rep = "";
            break;
        case 17:
            rep = "";
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
            rep = "";
            break;
        case 22:
            rep = "";
            break;
        case 23:
            rep = "";
            break;
        case 24:
            rep = "";
            break;
        case 25:
            rep = "";
            break;
        case 26:
            rep = "";
            break;
        case 27:
            rep = "";
            break;
        case 28:
            rep = "";
            break;
        case 29:
            rep = "";
            break;
        case 30:
            rep = "";
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
    }
    return rep;
};
ski.getskillimage2Illium = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "https://i.imgur.com/LFoAcTe.png";
            break;
        case 1:
            rep = "https://i.imgur.com/poKTMxD.png";
            break;
        case 2:
            rep = "https://i.imgur.com/mSYBezs.png";
            break;
        case 3:
            rep = "https://i.imgur.com/w7M53ms.png";
            break;
        case 4:
            rep = "https://i.imgur.com/5DE6bvt.png";
            break;
        case 5:
            rep = "";
            break;
        case 6:
            rep = "";
            break;
        case 7:
            rep = "";
            break;
        case 8:
            rep = "";
            break;
        case 9:
            rep = "";
            break;
        case 10:
            rep = "";
            break;
        case 11:
            rep = "";
            break;
        case 12:
            rep = "";
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
            rep = "";
            break;
        case 17:
            rep = "";
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
            rep = "";
            break;
        case 22:
            rep = "";
            break;
        case 23:
            rep = "";
            break;
        case 24:
            rep = "";
            break;
        case 25:
            rep = "";
            break;
        case 26:
            rep = "";
            break;
        case 27:
            rep = "";
            break;
        case 28:
            rep = "";
            break;
        case 29:
            rep = "";
            break;
        case 30:
            rep = "";
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
    }
    return rep;
};

module.exports = ski;