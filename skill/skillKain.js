const skk = {};

skk.getskillKain = function (skillname){
    var kret = -1;
    switch(skillname){
        case "[발현] 드래곤 버스트":
        case "[발현]드래곤버스트":
        case "드래곤버스트":
        case "드버":
        case "발현5차":
            kret = 0;
            break;
        case "[처형] 페이탈 블리츠":
        case "[처형]페이탈블리츠":
        case "페이탈블리츠":
        case "페이탈":
        case "블리츠":
        case "페블":
        case "처형5차":
            kret = 1;
            break;
        case "타나토스디센트":
        case "타나토스":
        case "디센트":
        case "타디":
            kret = 2;
            break;
        case "그립 오브 애거니":
        case "그립오브애거니":
        case "그립":
        case "애거니":
        case "예거니":
            kret = 3;
            break;
        case "스트라이크 애로우":
        case "스트라이크애로우":
        case "스애":
        case "애로우":
        case "평타":
        case "주력기":
            kret = 4;
            break;
        case "쉐도우 스텝":
        case "쉐도우스텝":
        case "쉐텝":
        case "쉐스":
        case "쉐도우 스탭":
        case "쉐도우스탭":
        case "쉐탭":
        case "돌진기":
        case "돌진":
            kret = 5;
            break;
        case "그래플링 와이어":
        case "그래플링와이어":
        case "와이어":
        case "로프 커넥트":
        case "로프커넥트":
        case "로프":
            kret = 6;
            break;
        case "쉐도우 스위프트":
        case "쉐도우스위프트":
        case "스위프트":
        case "더블 점프":
        case "더블점프":
        case "윗점":
            kret = 7;
            break;
        case "히트맨":
            kret = 8;
            break;
        case "커버트":
            kret = 9;
            break;
        case "포제션":
        case "맬리스 스톤":
        case "맬리스스톤":
        case "맬리스":
        case "게이지":
            kret = 10;
            break;
        case "드래곤 팡":
        case "드래곤팡":
        case "드팡":
            kret = 11;
            break;
        case "스트라이크 애로우 II":
        case "스트라이크애로우 II":
        case "스트라이크애로우II":
        case "애로우 II":
        case "애로우II":
        case "스애 II":
        case "스애II":
        case "스트라이크 애로우 2":
        case "스트라이크애로우 2":
        case "스트라이크애로우2":
        case "애로우 2":
        case "애로우2":
        case "스애 2":
        case "스애2":
            kret = 12;
            break;
        case "[발현] 스트라이크 애로우":
        case "[발현] 스트라이크애로우":
        case "[발현]스트라이크애로우":
        case "발현 스트라이크 애로우":
        case "발현 스트라이크애로우":
        case "발현스트라이크애로우":
        case "발현 애로우":
        case "발현애로우":
        case "발현스애":
        case "발스애":
        case "스트라이크 애로우 발현":
        case "스트라이크애로우 발현":
        case "스트라이크애로우발현":
        case "애로우 발현":
        case "애로우발현":
        case "스애발현":
            kret = 13;
            break;
        case "스캐터링 샷":
        case "스캐터링샷":
        case "스샷":
            kret = 14;
            break;
        case "[발현] 스캐터링 샷":
        case "[발현] 스캐터링샷":
        case "[발현]스캐터링샷":
        case "발현 스캐터링 샷":
        case "발현 스캐터링샷":
        case "발현스캐터링샷":
        case "발현스샷":
        case "발스샷":
        case "스캐터링 샷 발현":
        case "스캐터링샷 발현":
        case "스캐터링샷발현":
        case "스샷발현":
            kret = 15;
            break;
        case "스트라이크 애로우 III":
        case "스트라이크애로우 III":
        case "스트라이크애로우III":
        case "애로우 III":
        case "애로우III":
        case "스애 III":
        case "스애III":
        case "스트라이크 애로우 3":
        case "스트라이크애로우 3":
        case "스트라이크애로우3":
        case "애로우 3":
        case "애로우3":
        case "스애 3":
        case "스애3":
            kret = 16;
            break;
        case "데스 블레싱":
        case "데스블레싱":
        case "데블":
            kret = 17;
            break;
        case "샤프트 브레이크":
        case "샤프트브레이크":
        case "샤브":
        case "샤프트":
            kret = 18;
            break;
        case "[발현] 샤프트 브레이크":
        case "[발현] 샤프트브레이크":
        case "[발현]샤프트브레이크":
        case "발현 샤프트 브레이크":
        case "발현 샤프트브레이크":
        case "발현샤프트브레이크":
        case "발현샤브":
        case "발샤브":
        case "샤프트 브레이크 발현":
        case "샤프트브레이크 발현":
        case "샤프트브레이크발현":
        case "샤프트발현":
        case "샤브발현":
            kret = 19;
            break;
        case "[처형] 팬텀 블레이드":
        case "[처형] 팬텀블레이드":
        case "[처형]팬텀블레이드":
        case "처형 팬텀 블레이드":
        case "처형 팬텀블레이드":
        case "처형팬텀블레이드":
        case "처형팬블":
        case "팬텀 블레이드":
        case "팬텀블레이드":
        case "팬블":
            kret = 20;
            break;
        case "[처형] 테어링 나이프":
        case "[처형] 테어링나이프":
        case "[처형]테어링나이프":
        case "처형 테어링 나이프":
        case "처형 테어링나이프":
        case "처형테어링나이프":
        case "처형나이프":
        case "처형테어링":
        case "처형테나":
        case "테어링 나이프":
        case "테어링나이프":
        case "테어링":
        case "나이프":
        case "테나":
            kret = 21;
            break;
        case "리메인 인센스":
        case "리메인인센스":
        case "인센스":
            kret = 22;
            break;
        case "내츄럴 본 인스팅트":
        case "내츄럴본 인스팅트":
        case "내츄럴본인스팅트":
        case "인스팅트":
            kret = 23;
            break;
        case "그라인딩":
            kret = 24;
            break;
        case "포제션 II":
        case "포제션II":
        case "포제션 2":
        case "포제션2":
            kret = 25;
            break;
        case "어드밴스드 데스 블레싱":
        case "어드밴스드 데스블레싱":
        case "어드밴스드데스블레싱":
        case "어데블":
            kret = 26;
            break;
        case "폴링 더스트":
        case "폴링더스트":
        case "더스트":
        case "폴더":
            kret = 27;
            break;
        case "[발현] 폴링 더스트":
        case "[발현] 폴링더스트":
        case "[발현]폴링더스트":
        case "발현 폴링 더스트":
        case "발현 폴링더스트":
        case "발현폴링더스트":
        case "발현더스트":
        case "발현폴더":
        case "발폴더":
        case "폴링 더스트 발현":
        case "폴링더스트 발현":
        case "폴링더스트발현":
        case "더스트발현":
        case "폴더발현":
            kret = 28;
            break;
        case "[처형] 체인 시클":
        case "[처형] 체인시클":
        case "[처형]체인시클":
        case "처형 체인 시클":
        case "처형 체인시클":
        case "처형체인시클":
        case "처형체인":
        case "처형체시":
        case "체인 시클":
        case "체인시클":
        case "체시":
        case "체인":
            kret = 29;
            break;
        case "[처형] 포이즌 니들":
        case "[처형] 포이즌니들":
        case "[처형]포이즌니들":
        case "처형 포이즌 니들":
        case "처형 포이즌니들":
        case "처형포이즌니들":
        case "처형니들":
        case "처형포니":
        case "포이즌 니들":
        case "포이즌니들":
        case "니들":
        case "포니":
            kret = 30;
            break;
        case "드래곤 스케일":
        case "드래곤스케일":
        case "드스":
        case "스케일":
        case "무적기":
            kret = 31;
            break;
        case "그라인딩 II":
        case "그라인딩II":
        case "그라인딩 2":
        case "그라인딩2":
            kret = 32;
            break;
        case "도그마":
            kret = 33;
            break;
        case "어댑트 투 데스":
        case "어댑트 투데스":
        case "어댑트투데스":
        case "어투데":
            kret = 34;
            break;
        case "체이싱 샷":
        case "체이싱샷":
        case "체이싱":
        case "체샷":
            kret = 35;
            break;
        case "스니키 스나이핑":
        case "스니키스나이핑":
        case "스나이핑":
        case "스스나":
        case "스스":
            kret = 36;
            break;
        case "[발현/처형] 스니키 스나이핑":
        case "[발현/처형] 스니키스나이핑":
        case "[발현/처형]스니키스나이핑":
        case "발현/처형 스니키 스나이핑":
        case "발현/처형 스니키스나이핑":
        case "발현/처형스니키스나이핑":
        case "발현처형 스니키 스나이핑":
        case "발현처형 스니키스나이핑":
        case "발현처형스니키스나이핑":
        case "발현 스니키 스나이핑":
        case "발현 스니키스나이핑":
        case "발현스니키스나이핑":
        case "발현스나이핑":
        case "발현스스나":
        case "발현스나":
        case "발현스스":
        case "처형 스니키 스나이핑":
        case "처형 스니키스나이핑":
        case "처형스니키스나이핑":
        case "처형스나이핑":
        case "처형스스나":
        case "처형스나":
        case "처형스스":
        case "스니키 스나이핑 발현":
        case "스니키스나이핑 발현":
        case "스니키스나이핑발현":
        case "스나이핑발현":
        case "스스나발현":
        case "스나발현":
        case "스스발현":
        case "스니키 스나이핑 처형":
        case "스니키스나이핑 처형":
        case "스니키스나이핑처형":
        case "스나이핑처형":
        case "스스나처형":
        case "스나처형":
        case "스스처형":
        case "스니키 스나이핑 발현 처형":
        case "스니키 스나이핑 발현처형":
        case "스니키스나이핑 발현 처형":
        case "스니키스나이핑 발현처형":
        case "스니키스나이핑발현처형":
        case "스나이핑발현처형":
        case "스스나발현처형":
        case "스나발현처형":
        case "스스발현처형":
        case "스스발처":
        case "스나발처":
            kret = 37;
            break;
        case "인카네이션":
        case "인카":
            kret = 38;
            break;
        case "":
            kret = 39;
            break;
    }
    return kret;
};
skk.getskillnameKain = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "[발현] 드래곤 버스트";
            break;
        case 1:
            rep = "[처형] 페이탈 블리츠";
            break;
        case 2:
            rep = "타나토스 디센트";
            break;
        case 3:
            rep = "그립 오브 애거니";
            break;
        case 4:
            rep = "스트라이크 애로우";
            break;
        case 5:
            rep = "쉐도우 스텝";
            break;
        case 6:
            rep = "그래플링 와이어";
            break;
        case 7:
            rep = "쉐도우 스위프트";
            break;
        case 8:
            rep = "히트맨";
            break;
        case 9:
            rep = "커버트";
            break;
        case 10:
            rep = "포제션";
            break;
        case 11:
            rep = "드래곤 팡";
            break;
        case 12:
            rep = "스트라이크 애로우 II";
            break;
        case 13:
            rep = "[발현] 스트라이크 애로우";
            break;
        case 14:
            rep = "스캐터링 샷";
            break;
        case 15:
            rep = "[발현] 스캐터링 샷";
            break;
        case 16:
            rep = "스트라이크 애로우 III";
            break;
        case 17:
            rep = "데스 블레싱";
            break;
        case 18:
            rep = "샤프트 브레이크";
            break;
        case 19:
            rep = "[발현] 샤프트 브레이크";
            break;
        case 20:
            rep = "[처형] 팬텀 블레이드";
            break;
        case 21:
            rep = "[처형] 테어링 나이프";
            break;
        case 22:
            rep = "리메인 인센스";
            break;
        case 23:
            rep = "내츄럴 본 인스팅트";
            break;
        case 24:
            rep = "그라인딩";
            break;
        case 25:
            rep = "포제션 II";
            break;
        case 26:
            rep = "어드밴스드 데스 블레싱";
            break;
        case 27:
            rep = "폴링 더스트";
            break;
        case 28:
            rep = "[발현] 폴링 더스트";
            break;
        case 29:
            rep = "[처형] 체인 시클";
            break;
        case 30:
            rep = "[처형] 포이즌 니들";
            break;
        case 31:
            rep = "드래곤 스케일";
            break;
        case 32:
            rep = "그라인딩 II";
            break;
        case 33:
            rep = "도그마";
            break;
        case 34:
            rep = "어댑트 투 데스";
            break;
        case 35:
            rep = "체이싱 샷";
            break;
        case 36:
            rep = "스니키 스나이핑";
            break;
        case 37:
            rep = "[발현/처형] 스니키 스나이핑";
            break;
        case 38:
            rep = "인카네이션";
            break;
        case 39:
            rep = "";
            break;
    }
    return rep;
};
skk.getskilldesc1Kain = function (skillcode){
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
            rep = "최대 6명의 적을 70% 데미지로 5번 공격";
            break;
        case 5:
            rep = "하단 참조";
            break;
        case 6:
            rep = "하단 참조";
            break;
        case 7:
            rep = "더블 점프, 일정 거리 점프";
            break;
        case 8:
            rep = "공격력 40, 크리티컬 확률 35%, 스탠스 확률 50%";
            break;
        case 9:
            rep = "회피율 25%, 이동속도 20";
            break;
        case 10:
            rep = "하단 참조";
            break;
        case 11:
            rep = "하단 참조";
            break;
        case 12:
            rep = "최대 6명의 적을 160%로 5번 공격";
            break;
        case 13:
            rep = "최대 6명의 적을 200% 데미지로 8번 공격";
            break;
        case 14:
            rep = "하단 참조";
            break;
        case 15:
            rep = "하단 참조";
            break;
        case 16:
            rep = "하단 참조";
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
            rep = "최대 4명의 적을 155% 데미지로 6번 공격";
            break;
        case 21:
            rep = "최대 4명의 적을 210% 데미지로 7번 공격/ 쿨4.5초";
            break;
        case 22:
            rep = "하단 참조";
            break;
        case 23:
            rep = "최종 데미지 24%, 공격력 40, 크리티컬 확률 20%";
            break;
        case 24:
            rep = "하단 참조";
            break;
        case 25:
            rep = "일정 시간마다 맬리스 30, 스킬적중시 18로 증가";
            break;
        case 26:
            rep = "하단 참조";
            break;
        case 27:
            rep = "최대 12명의 적을 451% 데미지로 8번 공격";
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
            rep = "초당 최대MP 8% 소비, 최대 3.4초간 키다운 가능";
            break;
        case 32:
            rep = "하단 참조";
            break;
        case 33:
            rep = "최종 데미지 20%, 크리티컬 데미지 20%";
            break;
        case 34:
            rep = "데미지 10%, 보공 10%, 최대 HP 20% 증가";
            break;
        case 35:
            rep = "최대 8명 추적, 352%로 6번 공격하는 화살 3번 발사";
            break;
        case 36:
            rep = "하단 참조";
            break;
        case 37:
            rep = "하단 참조";
            break;
        case 38:
            rep = "하단 참조";
            break;
        case 39:
            rep = "";
            break;
    }
    return rep;
};
skk.getskilldesc2Kain = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "속사형 극딜기";
            break;
        case 1:
            rep = "다단히트형 극딜기";
            break;
        case 2:
            rep = "극딜 보조용 액티브 버프";
            break;
        case 3:
            rep = "설치형 다수 공격기";
            break;
        case 4:
            rep = "화살 파편 : 적중되지 않은 적 2명 55%로 5번 공격";
            break;
        case 5:
            rep = "돌진기";
            break;
        case 6:
            rep = "상향 이동기, 카데나의 체이스와 유사";
            break;
        case 7:
            rep = "위 방향키와 함께 사용해 위 방향으로도 이동할 수 있다.";
            break;
        case 8:
            rep = "최대 HP 15%, 방어력 200 증가, 피격 데미지 15% 감소";
            break;
        case 9:
            rep = "최대 이동속도 20, 점프력 10 증가";
            break;
        case 10:
            rep = "4차 이전까지 최대 3개, 이후 5개";
            break;
        case 11:
            rep = "온오프 스킬";
            break;
        case 12:
            rep = "[패시브: 스트라이크애로우 89%p, 화살파편 85%p 증가]";
            break;
        case 13:
            rep = "[발현 스킬] 재발현 대기시간 1초";
            break;
        case 14:
            rep = "화살이 각각 개별 판정";
            break;
        case 15:
            rep = "[발현 스킬]";
            break;
        case 16:
            rep = "스트라이크 애로우 후속 연계기";
            break;
        case 17:
            rep = "최대 15중첩";
            break;
        case 18:
            rep = "다수 끌격기";
            break;
        case 19:
            rep = "[발현 스킬]";
            break;
        case 20:
            rep = "[처형 스킬]";
            break;
        case 21:
            rep = "[처형 스킬] / 적 처치시 쉐도우스텝 쿨 초기화";
            break;
        case 22:
            rep = "온오프 스킬";
            break;
        case 23:
            rep = "방어율 무시 10%, 상태 이상 내성 30, 모든 속성 내성 30% 증가";
            break;
        case 24:
            rep = "-";
            break;
        case 25:
            rep = "맬리스 스톤 최대 소지 4개로 증가";
            break;
        case 26:
            rep = "-";
            break;
        case 27:
            rep = "카트리지 10초마다 1개씩 준비, 최대 2개까지 소지 가능";
            break;
        case 28:
            rep = "[발현 스킬]";
            break;
        case 29:
            rep = "[처형 스킬]";
            break;
        case 30:
            rep = "[처형 스킬]";
            break;
        case 31:
            rep = "쿨40초 / [패시브 효과 : 추가 회피 확률 30% 증가]";
            break;
        case 32:
            rep = "-";
            break;
        case 33:
            rep = "방어율 무시 30% 증가";
            break;
        case 34:
            rep = "피격 데미지 15% 감소, 스탠스 50% 증가";
            break;
        case 35:
            rep = "일몹뎀 30%, 재사용 대기시간 25초";
            break;
        case 36:
            rep = "키다운 시 전방 범위 증가";
            break;
        case 37:
            rep = "[발현/처형 스킬]";
            break;
        case 38:
            rep = "추가타는 전분에서 파티원 개개인의 지분으로 들어감";
            break;
        case 39:
            rep = "";
            break;
    }
    return rep;
};
skk.getskilldesc3Kain = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "[발현 스킬]\n브레스 슈터를 통해 내재된 힘을 끌어내 전방으로 뿜어낸다. 포제션 상태가 되지 않아도 사용할 수 있고 포제션 상태를 해제시키지도 않는다. 드래곤 버스트의 모든 공격에서 데스 블레싱으로 인한 죽음의 축복을 내릴 수 있다.\n\nMP 750 소비, 최대 5초 동안 키다운 가능, 최대 12명의 적을 880% 데미지로 12번 연속 공격, 최대 15회까지 공격 발동 가능, 공격 발동 횟수 모두 소모 시 즉시 종료\n방향 전환 가능하나 전환 후 0.5초 뒤에 재전환 가능\n재사용 대기시간 90초";
            break;
        case 1:
            rep = "[처형 스킬]\n신속하게 움직이며 전방의 적에게 치명적인 일격을 연속하여 날린다. [처형] 페이탈 블리츠로 적을 처치하면 쉐도우 스텝의 재사용 대기시간이 초기화된다.\n\nMP 750 소비, 2초 동안 최대 8명의 적을 660% 데미지로 12번 연속 공격, 최대 14회까지 공격 발동 가능, 공격 발동 횟수 모두 소모 시 즉시 종료\n재사용 대기시간 90초";
            break;
        case 2:
            rep = "마룡 사티라스와 동화되어 악의와 죽음을 지상에 강림시킨다.\n스킬을 한 번 더 사용하면 거대한 악의를 쏘아올려 주변을 죽음의 영역으로 만들고 적들에게 피할 수 없는 죽음을 선사한다. 죽음의 화살은 공격이 적중한 적 중 최대 HP가 가장 높은 적에게 우선 발사되고 죽음의 영역은 일부 스킬 사용 중에도 사용할 수 있다. 타나토스 디센트로 발동되는 모든 공격은 공격 반사 상태의 적을 공격해도 피해를 입지 않는다.\n\nMP 1000 소비, 35초 동안 데미지 45% 증가\n일정 시간마다 생성되는 맬리스 40, 브레스 슈터 사용 스킬 적중 시 생성되는 맬리스 35로 증가\n자신의 공격 스킬이 적중하면 715% 데미지로 3번 공격하는 죽음의 화살 6개 발사, 일반 몬스터 공격 시 데미지 25% 증가, 재발동 대기시간 3초\n스킬 재사용 시 즉시 종료되며 최대 15명의 적을 1430% 데미지로 15번 연속 공격하는 죽음의 영역 발동, 죽음의 영역 시전 동작 중 무적\n죽음의 영역 발동 시 타나토스 디센트의 남은 지속 시간만큼 데미지 증가 버프 유지\n\n재사용 대기시간 : 180초";
            break;
        case 3:
            rep = "적의 단말마를 제물로 마룡 사티라스가 가진 고통의 손을 소환한다. 고통의 손은 공격 반사 상태의 적을 공격해도 피해를 입지 않는다.\n\n패시브 효과 : 적 30명 처치 시 혹은 보스 몬스터 25번 공격 시 단말마 1개 수확, 단말마는 최대 5개까지 수확 가능\n액티브 효과 : MP 600 소비, 단말마 최소 1개 필요\n수확한 단말마를 모두 소모하여 5초 동안 최대 12명의 적을 1100% 데미지로 8번 지속 공격하는 고통의 손 소환, 추가 소모한 단말마 1개당 유지 시간 1초 증가\n\n재사용 대기시간 : 90초";
            break;
        case 5:
            rep = "어둠에 몸을 숨겨 빠르게 이동한다. 4방향으로 사용할 수 있어 방향키와 함께 사용하면 해당 방향으로 이동할 수 있고 일부 스킬 사용 중에도 사용할 수 있다.\n이동 중 다크 사이트 상태가 되어 적에게 부딪히지 않고 지상에서 좌우 방향으로 사용했을 경우 스킬을 재사용하여 급정지할 수 있다.\n\nMP 30 소비\n재사용 대기시간 10초\n[패시브 효과 : 이동속도 10 증가]";
            break;
        case 6:
            rep = "드라카즈의 기술력이 가미된 특수 와이어를 발사한다. 스킬 사용 시 와이어를 발사하여 발판에 걸고 스킬을 재사용하여 와이어를 타고 이동할 수 있다. 이동 중 스킬키를 다시 누르면 이동이 취소된다. 방향키와 함께 스킬 사용 시 해당 방향의 45° 각도로 발사한다. 공중에서도 사용할 수 있으며 공중에서 사용 시 짧은 시간 체공할 수 있다. 와이어를 발판에 건 후 일정 시간 이상 사용하지 않으면 자동으로 회수된다.\n\nMP 21 소비, 발판에 와이어를 발사한 후 스킬을 재사용하여 와이어를 타고 이동\n[패시브 효과 : 점프력 10 증가]";
            break;
        case 10:
            rep = "자신의 능력을 깨닫고 내재된 마룡 사티라스의 힘을 일정 부분 제어할 수 있게 된다.\n브레스 슈터를 사용하는 스킬 적중, 혹은 일정 시간마다 자신의 악의를 통해 맬리스를 생성할 수 있으며 일정량 이상이면 맬리스 스톤을 하나씩 얻는다. 맬리스 스톤을 소모해 사티라스의 악의를 발현할 수 있는 포제션 상태로 돌입한다.\n포제션 상태에서는 일부 스킬을 제외한 브레스 슈터 스킬이 발현 스킬로 강화되며 발현 스킬을 1회 사용 시 해제된다. 발현 스킬은 기존 스킬의 남은 카트리지 및 재사용 대기시간을 무시하며 사용 후 재발현 대기시간이 적용된다. 포제션 상태에서는 포제션을 사용할 수 없고 자신의 공격 스킬 사용 중 사용하면 포제션의 시전 동작을 하지 않고 포제션 상태가 될 수 있다.\n힘을 제어하게 되어 스트라이크 애로우 사용 시 제어하지 못한 맬리스가 발현되는 일이 사라진다.\n\n일정 시간마다 20의 맬리스 생성\n브레스 슈터 사용 스킬 적중 시 13의 맬리스 생성\n맬리스 스톤을 얻기 위해 100의 맬리스 필요, 맬리스 스톤은 최대 2개까지 소지 가능\n스킬 사용 시 맬리스 스톤 1개 혹은 맬리스 100 소모 후 15초 동안 포제션 상태 돌입\n\n재사용 대기시간 0.3초";
            break;
        case 11:
            rep = "죽음의 향기에 이끌린 마룡의 잔재가 이빨로 실체화되어 더 많은 죽음을 흩뿌린다, 드래곤 팡은 카인이 직접 공격하는 스킬이 일정 횟수 이상 적중되었을 때 소환되며 공격 반사 상태의 적을 공격해도 피해를 입지 않고 최대 HP가 가장 높은 적을 우선하여 공격한다.\n맵 이동 시 소멸하나 남은 지속시간에 비례해 생성에 필요한 공격 적중 횟수가 부여된다.\n\n40초 동안 소환\n카인이 직접 공격하는 스킬 적중 시 공격 모드가 되어 목표한 적에게 이동 후 100% 데미지로 4번 공격하는 드래곤 바이트 발동, 공격 모드 발동 후 최대 7번 드래곤 바이트 시전 후 복귀, 일반 몬스터 공격 시 데미지 50% 증가\n최대 3개까지 소환 가능\n\n공격 모드 발동 대기시간 3초";
            break;
        case 14:
            rep = "여러 방향으로 화살을 흩뿌려 넓은 범위를 공격한다.\n\nMP 35 소비, 120% 데미지로 4번 공격하는 화살 5개 발사, 화살 당 최대 2명의 적 공격 가능, 일반 몬스터 공격 시 데미지 30% 증가\n1명의 적이 여러 개의 화살을 동시에 맞을 경우 2번째 화살부터 최종 데미지 50% 감소\n스캐터링 샷 카트리지는 6초마다 1개씩 준비되며 최대 3개까지 소지 가능";
            break;
        case 15:
            rep = "악의가 담긴 화살이 목표를 추적하게 된다. 최대 HP가 가장 높은 적을 우선하여 추적하며 공격 반사 상태의 적을 공격해도 피해를 입지 않는다.\n\nMP 35 소비, 135% 데미지로 4번 공격하는 화살 6개 발사, 일반 몬스터 공격 시 데미지 30% 증가\n1명의 적이 여러 개의 화살을 동시에 맞을 경우 2번째 화살부터 최종 데미지 50% 감소\n\n재발현 대기시간 6초";
            break;
        case 16:
            rep = "스트라이크 애로우 II 사용 후 연속해서 화살을 발사하여 더 효율적으로 적을 제압한다. 스트라이크 애로우 II 사용 후 일정 시간 안에 해당 스킬을 재사용하여 사용할 수 있으며 스트라이크 애로우와 동일하게 화살 파편이 발동된다.\n\nMP 10 소비, 최대 6명의 적을 240%로 5번 공격\n[패시브 효과 : 스트라이크 애로우의 데미지 79%p, 스트라이크 애로우 II의 데미지 79%p, [발현] 스트라이크 애로우의 데미지 80%p, 화살 파편의 데미지 60%p 증가]";
            break;
        case 17:
            rep = "악의에 노출된 적에게 죽음의 축복을 내린다. 발현 스킬 중 특정한 공격 및 타나토스 디센트로 인한 죽음의 영역에 적중한 적에게 축복이 내려지며 해당 적을 처형 스킬로 공격하면 축복이 실현되어 적을 내부로부터 파괴한다. 축복이 실현되었을 때 그 공로로 일정 시간 죽음의 축복 및 처형 스킬이 강화되고 쉐도우 스텝의 재사용 대기시간이 초기화된다.\n죽음의 축복은 공격 무시 및 공격 반사 상태의 적에게도 피해를 입히고 [발현/처형] 스니키 스나이핑은 공로 버프의 효과를 받지 않는다.\n\n최대 90초 동안 유지 및 15번까지 중첩 가능\n축복 실현 : 죽음의 축복 소모 후 140% 데미지로 10번 공격 후 공로 버프 획득\n공로 버프 : 5초 동안 죽음의 축복/처형 스킬 최종 데미지 10% 증가, 축복 실현시킬 수 있는 처형 스킬 적중 시 10의 맬리스 생성";
            break;
        case 18:
            rep = "적을 관통한 후 통과하여 폭발하는 화살을 발사한다. 화살이 붕괴하기 전 적을 끌어당기며 일정 수 이상의 적을 관통하거나 보스 몬스터 공격, 사정거리 끝에 도달 시 붕괴한다. 폭발은 공격 반사 상태의 적을 공격해도 피해를 입지 않는다.\n\nMP 67 소비, 최대 3명의 적을 184% 데미지로 3번 관통 공격\n붕괴 시 최대 7명을 끌어당긴 후 폭발. 폭발은 10명의 적을 140% 데미지로 10번 공격\n샤프트 브레이크 카트리지는 8초마다 1개씩 준비되며 최대 3개까지 소지 가능";
            break;
        case 19:
            rep = "화살이 폭발한 후 악의가 회오리처럼 남아 적을 괴롭힌다. 폭발에서만 데스 블레싱으로 인한 죽음의 축복이 내려지고 폭발 및 회오리는 공격 반사 상태의 적을 공격해도 피해를 입지 않는다.\n\nMP 67 소비, 최대 3명의 적을 184% 데미지로 3번 관통 공격\n붕괴 시 최대 7명을 끌어당긴 후 폭발, 폭발은 최대 10명의 적을 224% 데미지로 10번 공격\n회오리는 최대 10명의 적을 40%의 데미지로 3번 지속 공격\n\n재발현 대기시간 11초";
            break;
        case 22:
            rep = "발현된 악의가 모여 결정화된다. 생성된 결정 주변에서 카인이 직접 공격하는 스킬이 적중되었을 때 활성화되어 주변의 적을 공격하고 공격 반사 상태의 적을 공격해도 피해를 입지 않는다.\n\n발현 스킬 및 타나토스 디센트로 인한 죽음의 영역 발동 시 10초 동안 유지되는 결정 생성, 사용한 스킬에 따라 생성 개수 변경\n활성화 시 결정마다 1명의 적을 90% 데미지로 4번 공격, 일반 몬스터 공격 시 데미지 100% 증가\n\n재생성 대기시간 0.3초";
            break;
        case 24:
            rep = "자신을 날카롭게 갈고 닦는다.\n\n최대 MP 20%, 방어력 20% 증가\n스캐터링 샷의 데미지 75%p 증가\n[발현] 스캐터링 샷의 데미지 80%p 증가\n드래곤 팡의 데미지 60%p 증가";
            break;
        case 26:
            rep = "더 짙어진 악의를 통해 죽음의 축복을 강화하고 적의 죽음과 공포를 자신의 힘으로 할 수 있게 된다.\n\n50명의 적 처치 시 최대 HP 5% 회복\n보스 몬스터에게 죽음의 축복 실현 시 최대 HP의 3% 회복\n죽음의 축복 : 데미지 163%p 증가\n공로 버프 : 죽음의 축복/처형 스킬 최종 데미지 증가량 18%p, 축복 실현 시킬 수 있는 처형 스킬 적중 시 맬리스 생성량 2 증가";
            break;
        case 28:
            rep = "충격파가 발생한 이후 거대한 악의가 한 번 더 적을 덮친다. 충격파에서만 데스 블레싱으로 인한 죽음의 축복이 내려지고 악의는 공격 반사 상태의 적을 공격해도 피해를 입지 않는다.\n\nMP 95 소비, 최대 12명의 적을 462% 데미지로 8번 공격 후 악의가 분출되어 최대 15명의 적을 264% 데미지로 15번 추가 공격\n\n재발현 대기시간 14초";
            break;
        case 29:
            rep = "사슬에 연결된 낫을 던져 전방으로 크게 휘두른 뒤 돌아오는 사슬을 강하게 감아 위에서 크게 내리찍는다. 휘두르는 공격에서만 데스 블레싱으로 인한 죽음의 축복을 실현시킬 수 있다. [처형] 체인 시클로 적을 처치하면 쉐도우 스텝의 재사용 대기시간이 초기화된다.\n\nMP 95 소비, 최대 5명의 적을 220% 데미지로 6번 공격한 후 최대 5명의 적을 242% 데미지로 12번 공격하는 마무리 일격\n\n재사용 대기시간 7초";
            break;
        case 30:
            rep = "전방으로 크게 회전하여 적을 베어낸 후, 공중제비를 돌며 사방으로 독침을 사출한다. 공중에서 사용 시 독침을 사출하는 동안 체공할 수 있으며 공격 속도 증가 버프의 영향을 받지 않는다. 베어 내는 공격에서만 데스 블레싱으로 인한 죽음의 축복을 실형시킬 수 있다. [처형] 포이즌 니들로 적을 처치하면 쉐도우 스텝의 재사용 대기시간이 초기화된다.\n\nMP 105 소비, 최대 6명의 적을 275% 데미지로 8번 공격 후 최대 6명의 적을 209% 데미지로 8번 연속 공격, 연속 공격에 맞은 적은 12초 동안 초당 290%의 도트 데미지\n\n재사용 대기시간 15초";
            break;
        case 32:
            rep = "자신을 더욱 갈고 닦아 완성도를 극한으로 끌어올린다.\n\n공격력 30 증가\n\n스트라이크 애로우, 스트라이크 애로우 II, 스트라이크 애로우 III, 화살 파편 데미지 134%p 증가\n[발현] 스트라이크 애로우 데미지 122%p 증가\n스캐터링 샷 데미지 102%p 증가\n[발현] 스캐터링 샷 데미지 110%p 증가\n드래곤 팡 데미지 93%p 증가\n샤프트 브레이크 화살 및 폭발 공격 데미지 80%p 증가\n[발현] 샤프트 브레이크 화살 및 폭발 공격 데미지 117%p, 회오리 공격 데미지 21%p증가\n[처형] 팬텀 블레이드 데미지 142%p 증가\n[처형] 테어링 나이프 데미지 148%p 증가\n리메인 인센스 데미지 75%p 증가";
            break;
        case 36:
            rep = "정신을 집중하여 은밀히 적을 조준한 후 저격한다. 키다운하여 조준을 지속할수록 공격 범위가 변경되고 키다운 종료 시 보이지 않는 충격이 발동된다. 공격 속도 증가 버프의 영향을 받지 않고 사용 중 스탠스가 100%로 적용된다.\n\nMP 350 소비, 최대 1.4초까지 키다운 가능, 최대 12명의 적을 193% 데미지로 10번 공격하는 충격 5회 발생\n스니키 스나이핑 카트리지는 40초마다 1개씩 준비되며 최대 1개까지 소지 가능";
            break;
        case 37:
            rep = "악의를 응축시킨 화살로 적을 저격한다. 키다운하여 조준을 지속할수록 공격 범위가 증가하고 키다운 종료 시 거대한 화살이 관통하며 치명적인 일격을 가한다. [발현/처형] 스니키 스나이핑으로 적을 처치하면 쉐도우 스텝의 재사용 대기시간이 초기화된다.\n\nMP 350 소비, 최대 1.6초까지 키다운 가능, 최대 12명의 적을 220% 데미지로 12번 공격하는 충격 5회 발생\n\n재발현 대기시간 60초";
            break;
        case 38:
            rep = "악의의 화신이 되어 다른 자에게 죽음의 축복을 사용할 수 있는 능력을 하사한다. 재사용 대기시간 초기화의 영향을 받지 않고 파티원의 공격으로 발동하는 죽음의 축복은 공격 반사 상태의 적을 공격해도 피해를 입지 않는다.\n\nMP 500 소비, 40초 동안 데미지 15%, 공격력 15%\n데스 블레싱으로 인한 죽음의 축복 공격 횟수 13번으로 증가\n카인 주변 파티원의 공격이 적중했을 때 150%로 6번 공격하는 죽음의 축복이 발생하는 오라 발생, 죽음의 축복 재발동 대기시간 3초\n\n재사용 대기시간 180초";
            break;
    }
    return rep;
};
skk.getskillimage1Kain = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "https://i.imgur.com/cv6PzfR.png";
            break;
        case 1:
            rep = "https://i.imgur.com/Vitr0kx.png";
            break;
        case 2:
            rep = "https://i.imgur.com/zaUqVun.png";
            break;
        case 3:
            rep = "https://i.imgur.com/8M3LTMa.png";
            break;
        case 4:
            rep = "https://i.imgur.com/5Z5LTSS.png";
            break;
        case 5:
            rep = "https://i.imgur.com/b4cOD1o.png";
            break;
        case 6:
            rep = "https://i.imgur.com/brX66g5.png";
            break;
        case 7:
            rep = "https://i.imgur.com/D8L3a3C.png";
            break;
        case 8:
            rep = "";
            break;
        case 9:
            rep = "";
            break;
        case 10:
            rep = "https://i.imgur.com/ff1F1Wa.png";
            break;
        case 11:
            rep = "https://i.imgur.com/JLkJLU5.png";
            break;
        case 12:
            rep = "https://i.imgur.com/0Lcn6kl.png";
            break;
        case 13:
            rep = "https://i.imgur.com/KFSilBS.png";
            break;
        case 14:
            rep = "https://i.imgur.com/Ej9GJR8.png";
            break;
        case 15:
            rep = "https://i.imgur.com/tLZ3crz.png";
            break;
        case 16:
            rep = "https://i.imgur.com/0mj1TBD.png";
            break;
        case 17:
            rep = "https://i.imgur.com/RGJ03UJ.png";
            break;
        case 18:
            rep = "https://i.imgur.com/kDgElzt.png";
            break;
        case 19:
            rep = "https://i.imgur.com/OOdzasA.png";
            break;
        case 20:
            rep = "https://i.imgur.com/0aAqR5w.png";
            break;
        case 21:
            rep = "https://i.imgur.com/8xplZUb.png";
            break;
        case 22:
            rep = "https://i.imgur.com/N5LXmfL.png";
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
            rep = "https://i.imgur.com/huYXDqL.png";
            break;
        case 28:
            rep = "https://i.imgur.com/1DfCku1.png";
            break;
        case 29:
            rep = "https://i.imgur.com/Ih8O7OL.png";
            break;
        case 30:
            rep = "https://i.imgur.com/Sxk2F5p.png";
            break;
        case 31:
            rep = "https://i.imgur.com/CRktjqr.png";
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
            rep = "https://i.imgur.com/7QvpMHz.png";
            break;
        case 36:
            rep = "https://i.imgur.com/0jfPeUk.png";
            break;
        case 37:
            rep = "https://i.imgur.com/7KDR3WA.png";
            break;
        case 38:
            rep = "https://i.imgur.com/1BrOPVE.png";
            break;
        case 39:
            rep = "";
            break;
    }
    return rep;
};
skk.getskillimage2Kain = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "https://i.imgur.com/ckgvfKo.png";
            break;
        case 1:
            rep = "https://i.imgur.com/f9ipVcS.png";
            break;
        case 2:
            rep = "https://i.imgur.com/930dsZ7.png";
            break;
        case 3:
            rep = "https://i.imgur.com/0AIT3Es.png";
            break;
        case 4:
            rep = "https://i.imgur.com/8s0yaZ9.png";
            break;
        case 5:
            rep = "https://i.imgur.com/en2i0bH.png";
            break;
        case 6:
            rep = "https://i.imgur.com/t66htb5.png";
            break;
        case 7:
            rep = "https://i.imgur.com/ikpy0sp.png";
            break;
        case 8:
            rep = "https://i.imgur.com/8ItyUGK.png";
            break;
        case 9:
            rep = "https://i.imgur.com/H1PDwi4.png";
            break;
        case 10:
            rep = "https://i.imgur.com/BFD7l7X.png";
            break;
        case 11:
            rep = "https://i.imgur.com/kohXv94.png";
            break;
        case 12:
            rep = "https://i.imgur.com/sfx5gd9.png";
            break;
        case 13:
            rep = "https://i.imgur.com/fGF4AQa.png";
            break;
        case 14:
            rep = "https://i.imgur.com/mpSxiSs.png";
            break;
        case 15:
            rep = "https://i.imgur.com/TtxCoY7.png";
            break;
        case 16:
            rep = "https://i.imgur.com/ObYHlCv.png";
            break;
        case 17:
            rep = "https://i.imgur.com/rK5mSIS.png";
            break;
        case 18:
            rep = "https://i.imgur.com/xIkTPj2.png";
            break;
        case 19:
            rep = "https://i.imgur.com/kHgvyAO.png";
            break;
        case 20:
            rep = "https://i.imgur.com/ubE6Q56.png";
            break;
        case 21:
            rep = "https://i.imgur.com/hHsiK1Y.png";
            break;
        case 22:
            rep = "https://i.imgur.com/yZ6CoJP.png";
            break;
        case 23:
            rep = "https://i.imgur.com/GGbz6o6.png";
            break;
        case 24:
            rep = "https://i.imgur.com/r4lnBLR.png";
            break;
        case 25:
            rep = "https://i.imgur.com/WP8k2GU.png";
            break;
        case 26:
            rep = "https://i.imgur.com/5lfBhTf.png";
            break;
        case 27:
            rep = "https://i.imgur.com/jdX8jq3.png";
            break;
        case 28:
            rep = "https://i.imgur.com/YLfVAKl.png";
            break;
        case 29:
            rep = "https://i.imgur.com/PUekhWK.png";
            break;
        case 30:
            rep = "https://i.imgur.com/ES4FgvB.png";
            break;
        case 31:
            rep = "https://i.imgur.com/LgDig2L.png";
            break;
        case 32:
            rep = "https://i.imgur.com/xy8ctIP.png";
            break;
        case 33:
            rep = "https://i.imgur.com/1VtRITL.png";
            break;
        case 34:
            rep = "https://i.imgur.com/pyWSCNA.png";
            break;
        case 35:
            rep = "https://i.imgur.com/42srUAQ.png";
            break;
        case 36:
            rep = "https://i.imgur.com/Nvfhtrp.png";
            break;
        case 37:
            rep = "https://i.imgur.com/FNzTqa7.png";
            break;
        case 38:
            rep = "https://i.imgur.com/MVZ6Cyc.png";
            break;
        case 39:
            rep = "";
            break;
    }
    return rep;
};

module.exports = skk;