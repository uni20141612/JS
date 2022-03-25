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
            rep = "크리스탈 차지 완성";
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
            rep = "무기제외 장비의 공격력 중 50%를 마력으로 전환";
            break;
        case 6:
            rep = "최대 4명의 적을 100%의 데미지로 2번 공격";
            break;
        case 7:
            rep = "최대 3명의 적을 50%의 데미지로 1번 공격";
            break;
        case 8:
            rep = "하단 참조";
            break;
        case 9:
            rep = "좌우 195만큼, 상하 275만큼 순간이동";
            break;
        case 10:
            rep = "최대 3회 중첩 가능, 지속시간 10초/ 중첩당 공마2";
            break;
        case 11:
            rep = "크리스탈 차지 최대치: 30";
            break;
        case 12:
            rep = "하단 참조";
            break;
        case 13:
            rep = "최대 9명의 적을 400%의 데미지로 4번 공격";
            break;
        case 14:
            rep = "최대 9명의 적을 400%의 데미지로 1번 공격";
            break;
        case 15:
            rep = "최대 12명의 적을 500%의 데미지로 10번 공격";
            break;
        case 16:
            rep = "하단 참조";
            break;
        case 17:
            rep = "피격 시 블레스 마크 1개를 소모하여 피격 데미지 50% 감소";
            break;
        case 18:
            rep = "하단 참조";
            break;
        case 19:
            rep = "크리스탈 차지 최대치: 150";
            break;
        case 20:
            rep = "하단 참조";
            break;
        case 21:
            rep = "하단 참조";
            break;
        case 22:
            rep = "하단 참조";
            break;
        case 23:
            rep = "최대 5명을 300% 데미지로 6번 공격";
            break;
        case 24:
            rep = "하단 참조";
            break;
        case 25:
            rep = "크리스탈 포탈의 이동 거리 좌우 60, 상하 45 증가";
            break;
        case 26:
            rep = "하단 참조";
            break;
        case 27:
            rep = "하단 참조";
            break;
        case 28:
            rep = "지력 40, 마력 10% 증가";
            break;
        case 29:
            rep = "마력 50, 크리티컬 데미지 30%";
            break;
        case 30:
            rep = "크리스탈 차지 최대치: 150";
            break;
        case 31:
            rep = "하단 참조";
            break;
        case 32:
            rep = "최대 공격 가능 몬스터 수 2명, 데미지 260% 증가";
            break;
        case 33:
            rep = "최대 10명의 적을 950%의 데미지로 8번 공격";
            break;
        case 34:
            rep = "하단 참조";
            break;
        case 35:
            rep = "하단 참조";
            break;
        case 36:
            rep = "하단 참조";
            break;
        case 37:
            rep = "MP 100 소비, 크리스탈 즉시 완충";
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
            rep = "자신과 파티원 4초 무적 / 쿨 180초";
            break;
        case 42:
            rep = "최대 12명, 1500%, 3번 공격하는 폭발이 4번 발동";
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
            rep = "착용 중인 무기 순수 마력의 20%까지 전환 가능.";
            break;
        case 6:
            rep = "일반 몬스터 공격 시 데미지 20% 증가/ 오브와 연계가능";
            break;
        case 7:
            rep = "사용 후 2초 동안 크래프트:자벨린의 데미지 15% 증가";
            break;
        case 8:
            rep = "공허 포격기";
            break;
        case 9:
            rep = "공중에서 키다운으로 짧은 시간 자유롭게 비행할 수 있다.";
            break;
        case 10:
            rep = "[패시브 효과 : 최대 HP, 최대 MP 10% 증가, 데미지 10% 증가]";
            break;
        case 11:
            rep = "크래프트:자벨린 차지량 1 / 크래프트:오브 차지량 2";
            break;
        case 12:
            rep = "일리움 운용의 핵심";
            break;
        case 13:
            rep = "재발동 대기시간 6초";
            break;
        case 14:
            rep = "재발동 대기시간 6초 / 커스 마크를 새김";
            break;
        case 15:
            rep = "필요 크리스탈 차지 30 이상 / 차지 초기화후 재사용가능";
            break;
        case 16:
            rep = "크리스탈이 소환된 상태에서만 사용할 수 있다.";
            break;
        case 17:
            rep = "발동 시 스탠스 100% / *절대 배우면 안되는 스킬";
            break;
        case 18:
            rep = "리액션:도미네이션에 적용";
            break;
        case 19:
            rep = "크래프트:자벨린 차지량 1 / 크래프트:오브 차지량 2";
            break;
        case 20:
            rep = "디스트럭션 강화 패시브";
            break;
        case 21:
            rep = "도미네이션 강화 패시브";
            break;
        case 22:
            rep = "https://youtu.be/W_7Rx3xW7as";
            break;
        case 23:
            rep = "적을 자동으로 추적하여 폭발하며 막대한 피해를 입힌다";
            break;
        case 24:
            rep = "파티 버프 겸 디버프기";
            break;
        case 25:
            rep = "온오프 스킬";
            break;
        case 26:
            rep = "블레스 마크 강화";
            break;
        case 27:
            rep = "커스 마크 강화";
            break;
        case 28:
            rep = "-";
            break;
        case 29:
            rep = "크리티컬 확률 20% 증가";
            break;
        case 30:
            rep = "크래프트:롱기누스 차지량 3";
            break;
        case 31:
            rep = "크래프트:자벨린 강화";
            break;
        case 32:
            rep = "크래프트:오브 강화";
            break;
        case 33:
            rep = "보공 20%, 추가크확 100% / 쿨 15초";
            break;
        case 34:
            rep = "집정관(아칸)";
            break;
        case 35:
            rep = "단 1회!";
            break;
        case 36:
            rep = "-";
            break;
        case 37:
            rep = "재사용 대기시간 180초";
            break;
        case 38:
            rep = "블레스 마크 최종강화";
            break;
        case 39:
            rep = "커스 마크 최종강화";
            break;
        case 40:
            rep = "컴뱃오더스 미적용";
            break;
        case 41:
            rep = "블레스 마크 중첩당 0.6초 증가";
            break;
        case 42:
            rep = "재사용 대기시간 120초 / 시전 중 무적";
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
            rep = "모든 것을 불태우는 강력한 에너지 기운을 전방으로 내뿜는다. 키다운으로 최대 10초까지 스킬을 유지할 수 있으며 좌, 우로 이동할 수 있다. 공격 적중 시 블레스 마크의 지속시간이 갱신된다.\n\nMP 30 소비, 일정 간격으로 최대 15명의 적을 1540%의 데미지로 5번 공격, 보스 몬스터 공격 시 데미지 20% 증가\n재사용 대기시간 180초";
            break;
        case 1:
            rep = "크리스탈이 크리스탈 이그니션에 닿으면 그 힘을 강화시켜 반대 방향으로 3줄기의 강력한 빛을 내뿜는다. 글로리 윙 사용 중에는 크리스탈에 닿지 않아도 자동으로 발동된다. 크리스탈 이그니션과 스킬 레벨 공유.\n\n최대 15명의 적을 2090%의 데미지로 6번 공격, 보스 몬스터 공격 시 데미지 20% 증가\n재발동 대기시간 1초";
            break;
        case 2:
            rep = "신계의 무기 그람을 사용하는 기계 전사를 소환한다. 그람홀더는 공격 범위 내의 최대 HP가 높은 보스 몬스터가 있는 방향을 우선하여 공격을 준비한다. 공격 범위 내에 보스 몬스터가 없다면 공격할 수 있는 적이 많은 방향으로 공격을 준비한다.\n좌우가 동일한 우선 순위를 가지고 있다면 일리움이 있는 방향으로 공격을 준비하며 공격이 준비되면 공격할 때까지 방향을 바꾸지 않는다.\n공격을 준비하는 동안 크리스탈 차지가 일정 이상 이뤄지면 더 강력한 검기를 발사한다. 그림홀더는 공격 반사 상태의 적을 공격해도 피해를 입지 않는다.\n\nMP 200 소비, 40초 동안 일정 간격으로 최대 12명의 적을 1100%의 데미지로 12번 공격\n공격 준비 중 크리스탈 차지가 3 이상 충전되거나 글로리 윙 상태라면 최종 데미지 2배로 증가\n\n재사용 대기시간 180초";
            break;
        case 3:
            rep = "크리스탈의 힘을 모방하여 영혼의 크리스탈을 창조한다. 영혼의 크리스탈로 리액션 스킬을 발동시킬 수 있다.\n크래프트:자벨린이 닿았을 때 공격 가능한 적 수를 소모하지 않는다.\n글로리 윙 사용 중에는 사용할 수 없다.\n\nMP 500, 크리스탈 조각 1개 소비\n\n크리스탈이 있는 위치에 30초 동안 영혼의 크리스탈 창조\n영혼의 크리스탈로 발동되는 리액션 스킬의 최종 데미지는 80%만 반영. 단, 리액션 스킬이 5차 스킬일 경우 100% 반영\n영혼의 크리스탈로 발동되는 리액션 스킬은 재사용 대기시간 초기화의 효과를 받지 않음\n글로리 윙 사용 시 소환된 영혼의 크리스탈이 소멸하며 남은 지속시간 동안 소멸한 영혼의 크리스탈 1개당 데미지 35% 증가\n크리스탈 조각은 20초마다 1개씩 준비되며 최대 2개까지 준비 가능\n\n재사용 대기시간 2.5초\n[패시브 효과 : 마력 65 증가]";
            break;
        case 4:
            rep = "크리스탈 기술을 발전시켜 자유롭게 이동할 수 있는 통로를 설치한다.\n작동을 시작한 자신의 크리스탈 게이트에서 위쪽 방향키를 누르면 해당 크리스탈 다음에 설치한 크리스탈 게이트로 이동할 수 있고 마지막에 설치한 크리스탈 게이트를 사용하면 처음 설치한 크리스탈 게이트로 이동한다.\n1회 사용 후 다시 이용하기 위해 충전 시간이 필요하고 직접 사용한 크리스탈 게이트는 충전 시간이 더 길다. 크리스탈 게이트 주변에서 강화 및 공격 지원 버프를 받을 수 있고 공중에도 설치할 수 있다.\n크리스탈 게이트는 버프 프리저의 효과를 받지 않고 통로를 사용한 이동은 전투의 흐름 발동에 필요한 이동 거리에 포함된다.\n\nMP 500 소비, 160초 동안 최대 3개의 크리스탈 게이트 설치 가능, 2개 이상 설치 시 작동 시작, 설치 가능한 시간과 크리스탈 게이트의 지속 시간 동일\n1회 이용 후 모든 크리스탈 게이트 2초 이용 불가, 직접 사용한 크리스탈 게이트 5초 이용 불가\n크리스탈 게이트 주변에서 일정 간격으로 25초 동안 지속되는 마력 65 증가 버프 획득\n\n버프 지속 중 직접 공격하는 스킬 적중 시 크리스탈 게이트를 통해 최대 3명의 적을 990%의 데미지로 공격하는 폭격 5번 발생, 재발동 대기시간 1.5초\n\n재사용 대기시간 : 180초";
            break;
        case 8:
            rep = "든든한 기계친구 리요를 소환한다.\n리요는 한 명의 적에게 일정 시간 공격을 하며 시간에 비례해 공격력이 점차 증가한다.\n리요는 공격 반사 상태의 적을 공격해도 피해를 입지 않는다.\n\nMP 90 소비, 180초 동안 소환, 공격 목표에게 이동하여 일정 간격으로 공격하며 일정 횟수 공격하면 공격력 증가.\n1단계:60%의 데미지로 공격, 10회 공격 시 공격력 강화\n2단계:100%의 데미지로 공격, 10회 공격 시 공격력 강화\n3단계:200%의 데미지로 공격, 20회 공격 시 공격 종료";
            break;
        case 12:
            rep = "고대의 신비를 간직한 크리스탈을 소환하여 자유롭게 조작한다.\n스킬 사용 시 크리스탈을 소환하고, 크리스탈이 소환된 상태에서는 자신의 전방 일정 지점으로 이동시킨다.\n↓방향키와 함께 사용하면 자신의 전방 일정 지점으로 ↑방향키와 함께 사용하면 자신의 현재 위치로 크리스탈을 순간이동 시킨다.\n\n크리스탈 차지가 완료되면 300초 후 크리스탈 차지가 '0'으로 초기화 된다.";
            break;
        case 16:
            rep = "기계친구 마키나를 소환한다.\n마키나는 크리스탈 근처에 소환되어 크리스탈을 수호하며 적을 끌어모은다.\n크리스탈이 이동하면 함께 이동하며 경로상의 적들을 공격하나 공격 횟수가 1로 감소한다.\n마키나는 공격 반사 상태의 적을 공격해도 피해를 입지 않는다.\n\nMP 100 소비, 180초 동안 소환\n최대 5명의 적을 250%의 데미지로 4번 공격";            
            break;
        case 18:
            rep = "대상의 힘을 빼앗고 약화시키는 저주의 표식을 새긴다.\n커스 마크가 새겨진 적은 방어율이 감소되고 크래프트:오브를 제외한 일리움의 공격에 추가 타격을 받는다.\n\n지속시간 10초, 방어율 4% 감소\n마크가 새겨진 적을 일리움이 공격하면 20% 데미지의 추가 타격 발생";
            break;
        case 20:
            rep = "리액션:디스트럭션을 강화시킨다.\n크리스탈이 크래프트:자벨린 또는 크래프트:롱기누스에 닿으면 공명하여 크리스탈 주변의 적들에게 파괴적인 기운을 2차례 내뿜는다.\n\nMP 130 소비, 최대 9명의 적을 610%의 데미지로 4번 공격하는 기운이 2번 발동, 보스 몬스터 공격 시 데미지 20% 증가\n재발동 대기시간 4초";
            break;
        case 21:
            rep = "리액션:도미네이션을 강화시킨다\n크리스탈이 크래프트:오브에 닿으면 공명하여 크리스탈 주변의 적들을 공격하고 공격한 적에게 커스 마크를 새긴다.\n\nMP 50 소비, 최대 12명의 적을 610%의 데미지로 2번 공격\n재발동 대기시간 4초";
            break;
        case 22:
            rep = "크리스탈에 가득찬 마법의 힘을 날개에 깃들게 한다. 크래프트:자벨린이 글로리 윙:자벨린으로 강화되어 적을 추적하여 폭발한다.\n글로리 윙 중에는 방향키와 함께 크리스탈 포탈을 사용하면 해당 방향으로 빠르게 순간이동 할 수 있고 스킬을 재사용하여 바로 스킬을 종료할 수 있다.\n글로리 윙은 버프 지속 시간 증가 효과를 받지 않고 종료 시 크리스탈과 마키나가 자동 소환된다.\n필요 크리스탈 차지: 150\n\n지속시간 20초\n최종 데미지 25%, 스탠스 100%, 보스 몬스터 공격 시 데미지 30% 증가\n글로리 윙:자벨린 : 명중 시 폭발하며 최대 5명의 적을 300%의 데미지로 6번 공격, 일반 몬스터 공격 시 데미지 20% 증가\n공격 받는 적이 스킬의 최대 공격 가능한 몬스터의 수보다 적을 때 1명당 최종 데미지 10% 증가, 최종 데미지는 최대 40%까지 증가";
            break;
        case 24:
            rep = "크리스탈과 일리움이 축복의 기운으로 연결된다. 기운은 일리움과 기운에 닿은 파티원에게 블레스 마크를 남기고 체력을 회복시키며, 적에게는 커스 마크를 남긴다.\n필요 크리스탈 차지 60 이상\n※사용 후 크리스탈 차지가 초기화 돼야 재사용 가능\n\nMP 200 소비, 15번 기운으로 연결, 기운이 연결될 때마다 블레스 마크를 얻고 최대 HP의 10% 회복\n[패시브 효과 : 상태 이상 내성 30, 모든 속성 내성 30% 증가]";
            break;
        case 26:
            rep = "강력해진 블레스 마크를 남긴다.\n\n최대 6회 중첩 가능, 지속 시간 10초\n각 중첩의 수치가 모두 더해짐\n1~3중첩:공격력/마력 2 증가\n4~6중첩:공격력/마력 4 증가\n\n[패시브 효과 : 크래프트:자벨린 데미지 200%p 증가]";
            break;
        case 27:
            rep = "강력해진 커스 마크를 새긴다.\n\n최대 3회 중첩 가능, 지속시간 10초\n방어율 감소는 각 중첩의 수치가 모두 더해짐\n1중첩:방어율 4% 감소\n2~3중첩:방어율 4%감소\n마크가 새겨진 적을 일리움이 공격하면 30% 데미지의 추가 타격 발생\n커스 마크 중첩에 비례하여 추가 타격의 최종 데미지 3배까지 증가";
            break;
        case 31:
            rep = "크래프트:자벨린을 강화시킨다. 크래프트:자벨린이 적을 명중하면 작은 파편으로 갈라져 추가 공격한다.\n크래프트:오브와 연계하여 사용 가능하고 다수 공격 스킬의 공격 대상 증가 효과를 받지 않는다.\n\nMP 소비량 6, 최대 공격 가능한 몬스터 수 1명, 데미지 95%p, 공격 횟수 1번 증가\n명중 시 130%의 데미지를 입히는 파편 2개 생성,\n글로리 윙:자벨린을 사용했을 때는 파편 대신 적을 추적하여 250%의 데미지로 3번 공격하는 매직 미사일 3개 생성\n\n[패시브 효과 : 글로리 윙:자벨린의 데미지 200%p 증가]";
            break;
        case 34:
            rep = "리요와 마키나의 힘을 하나로 합쳐 최강의 소환수 데우스를 불러낸다. 데우스는 주변의 적을 추적하여 공격하는 위성을 최대 5기 까지 소환한다.\n필요 크리스탈 차지 90 이상\n※사용 후 크리스탈 차지가 초기화 돼야 재사용 가능\n\nMP 300 소비, 30초 동안 소환\n최대 10명의 적을 500%의 데미지로 5번 공격, 위성의 공격력은 리요와 동일\n\n[패시브 효과 : 리요의 데미지 100%p 증가]";
            break;
        case 35:
            rep = "모든 마력을 날개 끝에 집중한 뒤 빠르게 회전하며 주변을 휩쓴다.\n글로리 윙 중 1회 사용 가능.\n\nMP 200 소비, 최대 12명의 적을 1070%의 데미지로 15번 공격\n[패시브 효과 : 리액션:디스트럭션Ⅱ과 리액션:도미네이션Ⅱ의 데미지 135%p 증가]";
            break;
        case 36:
            rep = "글로리 윙 중 자동 발동\n강력한 기운을 내뿜어 적에게는 커스 마크를 새기고 파티원에게는 블레스 마크를 남긴다.\n\n최대 12명의 적과 파티원에게 각각 커스마크와 블레스 마크를 남김.\n[패시브 효과 : 크리스탈 스킬: 모탈스윙 데미지 100%p 증가]";
            break;
        case 38:
            rep = "완벽한 블레스 마크를 남긴다.\n\n최대 10회 중첩 가능, 지속 시간 10초\n각 중첩의 수치가 모두 더해짐\n1~3중첩:공격력/마력 2 증가\n4~6중첩:공격력/마력 4 증가\n7~9중첩:공격력/마력 6 증가\n10중첩:공격력/마력 10 증가\n\n[패시브 효과 : 마키나 데미지 100%p 증가]";
            break;
        case 39:
            rep = "완벽한 커스 마크를 새긴다.\n\n최대 5회 중첩 가능, 지속시간 10초\n방어율 감소는 각 중첩의 수치가 모두 더해짐\n1중첩:방어율 4% 감소\n2~3중첩:방어율 4%감소\n4~5중첩:방어율 4%감소\n\n마크가 새겨진 적을 일리움이 공격하면 40% 데미지의 추가 타격 발생, 커스 마크 중첩에 비례하여 추가 타격의 최종 데미지 5배까지 증가";
            break;
        case 40:
            rep = "고대 크리스탈의 힘을 완전히 파악하여 강력한 전투력을 이끌어 낸다.\n\n매직 건틀렛의 숙련도 70%로 증가\n공격 속도 1단계, 스탠스 60% 증가\n보스 몬스터 공격 시 데미지 30%, 방어율 무시 25%, 최종 데미지 40% 증가";
            break;
        case 41:
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
            rep = "https://i.imgur.com/xEptkjB.png";
            break;
        case 7:
            rep = "https://i.imgur.com/0XC5Ez7.png";
            break;
        case 8:
            rep = "https://i.imgur.com/biB6YRG.png";
            break;
        case 9:
            rep = "https://i.imgur.com/h0t6zdl.png";
            break;
        case 10:
            rep = "https://i.imgur.com/M9B96hZ.png";
            break;
        case 11:
            rep = "https://i.imgur.com/N0sijKj.png";
            break;
        case 12:
            rep = "";
            break;
        case 13:
            rep = "https://i.imgur.com/fm0ENKH.png";
            break;
        case 14:
            rep = "https://i.imgur.com/HeiXyrn.png";
            break;
        case 15:
            rep = "https://i.imgur.com/5KNJSaj.png";
            break;
        case 16:
            rep = "https://i.imgur.com/U9Hz4IT.png";
            break;
        case 17:
            rep = "https://i.imgur.com/yWI6LXl.png";
            break;
        case 18:
            rep = "https://i.imgur.com/lAbhABD.png";
            break;
        case 19:
            rep = "https://i.imgur.com/Yp0qNxw.png";
            break;
        case 20:
            rep = "https://i.imgur.com/zgGNBML.png";
            break;
        case 21:
            rep = "https://i.imgur.com/yz7C280.png";
            break;
        case 22:
            rep = "https://i.imgur.com/5aMdjE4.png";
            break;
        case 23:
            rep = "https://i.imgur.com/wHTa3O7.png";
            break;
        case 24:
            rep = "https://i.imgur.com/hdiTpbM.png";
            break;
        case 25:
            rep = "https://i.imgur.com/EgGGanX.png";
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
            rep = "https://i.imgur.com/rg0fa0d.png";
            break;
        case 32:
            rep = "https://i.imgur.com/vdwOhNl.png";
            break;
        case 33:
            rep = "https://i.imgur.com/ZsAUatX.png";
            break;
        case 34:
            rep = "https://i.imgur.com/TevEL5s.png";
            break;
        case 35:
            rep = "https://i.imgur.com/DKvHwS2.png";
            break;
        case 36:
            rep = "https://i.imgur.com/VerMNGo.png";
            break;
        case 37:
            rep = "https://i.imgur.com/pvm5XJs.png";
            break;
        case 38:
            rep = "https://i.imgur.com/blUsAuN.png";
            break;
        case 39:
            rep = "";
            break;
        case 40:
            rep = "";
            break;
        case 41:
            rep = "https://i.imgur.com/PSwVCeW.png";
            break;
        case 42:
            rep = "https://i.imgur.com/QXUDGc8.png";
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
            rep = "https://i.imgur.com/U8QiBoz.png";
            break;
        case 6:
            rep = "https://i.imgur.com/R5f7klG.png";
            break;
        case 7:
            rep = "https://i.imgur.com/RY9vvLu.png";
            break;
        case 8:
            rep = "https://i.imgur.com/EM0lheJ.png";
            break;
        case 9:
            rep = "https://i.imgur.com/rQfvU2g.png";
            break;
        case 10:
            rep = "https://i.imgur.com/F3Upy3H.png";
            break;
        case 11:
            rep = "https://i.imgur.com/Y3J1p1g.png";
            break;
        case 12:
            rep = "https://i.imgur.com/GK8j1x2.png";
            break;
        case 13:
            rep = "https://i.imgur.com/TZCxqtz.png";
            break;
        case 14:
            rep = "https://i.imgur.com/fS5awmv.png";
            break;
        case 15:
            rep = "https://i.imgur.com/doN0Vj2.png";
            break;
        case 16:
            rep = "https://i.imgur.com/DcNELXg.png";
            break;
        case 17:
            rep = "https://i.imgur.com/VL650Wa.png";
            break;
        case 18:
            rep = "https://i.imgur.com/BHsr4qB.png";
            break;
        case 19:
            rep = "https://i.imgur.com/oSzGuB0.png";
            break;
        case 20:
            rep = "https://i.imgur.com/xcFkvYe.png";
            break;
        case 21:
            rep = "https://i.imgur.com/ryiA1Xz.png";
            break;
        case 22:
            rep = "https://i.imgur.com/O506Gxp.png";
            break;
        case 23:
            rep = "https://i.imgur.com/3nnfmGB.png";
            break;
        case 24:
            rep = "https://i.imgur.com/1LqzAj2.png";
            break;
        case 25:
            rep = "https://i.imgur.com/tluctEF.png";
            break;
        case 26:
            rep = "https://i.imgur.com/aHUVuDs.png";
            break;
        case 27:
            rep = "https://i.imgur.com/JdLHvma.png";
            break;
        case 28:
            rep = "https://i.imgur.com/jKLERXy.png";
            break;
        case 29:
            rep = "https://i.imgur.com/hdPL8ia.png";
            break;
        case 30:
            rep = "https://i.imgur.com/e6QnIUa.png";
            break;
        case 31:
            rep = "https://i.imgur.com/tsqil0m.png";
            break;
        case 32:
            rep = "https://i.imgur.com/rEaXdDZ.png";
            break;
        case 33:
            rep = "https://i.imgur.com/FO29cPC.png";
            break;
        case 34:
            rep = "https://i.imgur.com/oCVYCqd.png";
            break;
        case 35:
            rep = "https://i.imgur.com/NOeo8PG.png";
            break;
        case 36:
            rep = "https://i.imgur.com/NBBQaDY.png";
            break;
        case 37:
            rep = "https://i.imgur.com/qMr0oPB.png";
            break;
        case 38:
            rep = "https://i.imgur.com/HBOI0Vo.png";
            break;
        case 39:
            rep = "https://i.imgur.com/yoV3Qb1.png";
            break;
        case 40:
            rep = "https://i.imgur.com/9VSSdzr.png";
            break;
        case 41:
            rep = "https://i.imgur.com/VNnN78R.png";
            break;
        case 42:
            rep = "https://i.imgur.com/2FnxWPR.png";
            break;
        case 43:
            rep = "";
            break;
    }
    return rep;
};

module.exports = ski;