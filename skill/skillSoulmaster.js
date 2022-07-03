const sksm = {};

sksm.getskillSoulmaster = function (skillname){
    var smret = -1;
    switch(skillname){
        case "라이징 선":
        case "라이징선":
        case "라이징 썬":
        case "라이징썬":
        case "라선":
        case "라썬":
            smret = 0;
            break;
        case "폴링 문":
        case "폴링문":
        case "폴문":
            smret = 1;
            break;
        case "솔라 슬래시":
        case "솔라슬래시":
            smret = 2;
            break;
        case "루나 디바이드":
        case "루나디바이드":
        case "디바이드":
        case "루디":
            smret = 3;
            break;
        case "엘리멘트 : 소울":
        case "엘리멘트:소울":
        case "엘리멘트소울":
        case "소울":
            smret = 4;
            break;
        case "소울 가디언":
        case "소울가디언":
        case "가디언":
        case "소가":
            smret = 5;
            break;
        case "이너 보이스":
        case "이너보이스":
            smret = 6;
            break;
        case "소울 리프":
        case "소울리프":
        case "리프":
        case "더블 점프":
        case "더블점프":
        case "덥점":
        case "윗점":
            smret = 7;
            break;
        case "셀레스티얼 비전":
        case "셀레스티얼비전":
        case "비전":
        case "셀비":
            smret = 8;
            break;
        case "코스믹 매터":
        case "코스믹매터":
        case "매터":
        case "코매":
            smret = 9;
            break;
        case "솔루나 타임":
        case "솔루나타임":
        case "솔타":
        case "솔탐":
            smret = 10;
            break;
        case "소울 블레싱":
        case "소울블레싱":
        case "블레싱":
        case "소블":
            smret = 11;
            break;
        case "님블 핑거":
        case "님블핑거":
        case "핑거":
            smret = 12;
            break;
        case "이너 트러스트":
        case "이너트러스트":
        case "트러스트":
            smret = 13;
            break;
        case "셀레스티얼 비전 II":
        case "셀레스티얼비전 II":
        case "셀레스티얼비전II":
        case "셀레스티얼 비전 2":
        case "셀레스티얼비전 2":
        case "셀레스티얼비전2":
        case "비전2":
        case "셀비2":
            smret = 14;
            break;
        case "코스믹 샤워":
        case "코스믹샤워":
        case "샤워":
        case "코샤":
            smret = 15;
            break;
        case "라우드 러쉬":
        case "라우드러쉬":
        case "라러":
        case "러쉬":
        case "태양밀격":
            smret = 16;
            break;
        case "사일런트 무브":
        case "사일런트무브":
        case "무브":
        case "달밀격":
            smret = 17;
            break;
        case "트루 사이트":
        case "트루 싸이트":
        case "트루사이트":
        case "트루싸이트":
        case "트사":
        case "트싸":
            smret = 18;
            break;
        case "소울 블레싱 II":
        case "소울블레싱 II":
        case "소울블레싱II":
        case "소울 블레싱 2":
        case "소울블레싱 2":
        case "소울블레싱2":
        case "블레싱2":
        case "소블2":
            smret = 19;
            break;
        case "솔루나 마스터리":
        case "솔루나마스터리":
            smret = 20;
            break;
        case "윌 오브 스틸":
        case "윌오브 스틸":
        case "윌오브스틸":
        case "윌오스":
            smret = 21;
            break;
        case "이너 샤우트":
        case "이너샤우트":
        case "샤우트":
            smret = 22;
            break;
        case "셀레스티얼 비전 III":
        case "셀레스티얼비전 III":
        case "셀레스티얼비전III":
        case "셀레스티얼 비전 3":
        case "셀레스티얼비전 3":
        case "셀레스티얼비전3":
        case "비전3":
        case "셀비3":
            smret = 23;
            break;
        case "코스믹 버스트":
        case "코스믹버스트":
        case "버스트":
        case "코버":
            smret = 24;
            break;
        case "솔루나 슬래시":
        case "솔루나슬래시":
        case "솔슬":
            smret = 25;
            break;
        case "소울 페네트레이션":
        case "소울페네트레이션":
        case "페네트레이션":
        case "소페":
        case "바인드":
            smret = 26;
            break;
        case "소울 블레싱 III":
        case "소울블레싱 III":
        case "소울블레싱III":
        case "소울 블레싱 3":
        case "소울블레싱 3":
        case "소울블레싱3":
        case "블레싱3":
        case "소블3":
            smret = 27;
            break;
        case "소울 플레지":
        case "소울플레지":
        case "플레지":
            smret = 28;
            break;
        case "인포시어블":
        case "인포":
            smret = 29;
            break;
        case "마스터 오브 더 소드":
        case "마스터 오브 더소드":
        case "마스터오브 더소드":
        case "마스터오브더소드":
        case "마오소":
            smret = 30;
            break;
        case "코스믹 포지":
        case "코스믹포지":
        case "포지":
        case "코포":
            smret = 31;
            break;
        case "블레이징 어썰트":
        case "블레이징어썰트":
        case "어썰트":
        case "블어":
        case "태양무적":
            smret = 32;
            break;
        case "러스터 차지":
        case "러스터차지":
        case "러차":
        case "달무적":
            smret = 33;
            break;
        case "코스모스":
        case "코스":
        case "코모":
            smret = 34;
            break;
        case "엘리시온":
        case "엘리":
            smret = 35;
            break;
        case "소울 이클립스":
        case "소울이클립스":
        case "이클립스":
        case "이클":
        case "소이":
            smret = 36;
            break;
        case "플레어 슬래시":
        case "플레어슬래시":
        case "플슬":
            smret = 37;
            break;
        case "":
            smret = 38;
            break;
        case "":
            smret = 39;
            break;
    }
    return smret;
};
sksm.getskillnameSoulmaster = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "라이징 선";
            break;
        case 1:
            rep = "폴링 문";
            break;
        case 2:
            rep = "솔라 슬래시";
            break;
        case 3:
            rep = "루나 디바이드";
            break;
        case 4:
            rep = "엘리멘트 : 소울";
            break;
        case 5:
            rep = "소울 가디언";
            break;
        case 6:
            rep = "이너 보이스";
            break;
        case 7:
            rep = "소울 리프";
            break;
        case 8:
            rep = "셀레스티얼 비전";
            break;
        case 9:
            rep = "코스믹 매터";
            break;
        case 10:
            rep = "솔루나 타임";
            break;
        case 11:
            rep = "소울 블레싱";
            break;
        case 12:
            rep = "님블 핑거";
            break;
        case 13:
            rep = "이너 트러스트";
            break;
        case 14:
            rep = "셀레스티얼 비전 II";
            break;
        case 15:
            rep = "코스믹 샤워";
            break;
        case 16:
            rep = "라우드 러쉬";
            break;
        case 17:
            rep = "사일런트 무브";
            break;
        case 18:
            rep = "트루 사이트";
            break;
        case 19:
            rep = "소울 블레싱 II";
            break;
        case 20:
            rep = "솔루나 마스터리";
            break;
        case 21:
            rep = "윌 오브 스틸";
            break;
        case 22:
            rep = "이너 샤우트";
            break;
        case 23:
            rep = "셀레스티얼 비전 III";
            break;
        case 24:
            rep = "코스믹 버스트";
            break;
        case 25:
            rep = "솔루나 슬래시";
            break;
        case 26:
            rep = "소울 페네트레이션";
            break;
        case 27:
            rep = "소울 블레싱 III";
            break;
        case 28:
            rep = "소울 플레지";
            break;
        case 29:
            rep = "인포시어블";
            break;
        case 30:
            rep = "마스터 오브 더 소드";
            break;
        case 31:
            rep = "코스믹 포지";
            break;
        case 32:
            rep = "블레이징 어썰트";
            break;
        case 33:
            rep = "러스터 차지";
            break;
        case 34:
            rep = "코스모스";
            break;
        case 35:
            rep = "엘리시온";
            break;
        case 36:
            rep = "소울 이클립스";
            break;
        case 37:
            rep = "플레어 슬래시";
            break;
        case 38:
            rep = "";
            break;
        case 39:
            rep = "";
            break;
    }
    return rep;
};
sksm.getskilldesc1Soulmaster = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "하단 참조";
            break;
        case 1:
            rep = "하단 참조";
            break;
        case 2:
            rep = "[솔라] 최대 5명의 적을 150%의 데미지로 2번 공격";
            break;
        case 3:
            rep = "[루나] 최대 5명의 적에게 300%의 데미지로 1번 공격하는 달의 파편 발사";
            break;
        case 4:
            rep = "하단 참조";
            break;
        case 5:
            rep = "최대 HP 1500, 방어력 750";
            break;
        case 6:
            rep = "이동속도 40, 점프력 20";
            break;
        case 7:
            rep = "MP 5 소비, 일정 거리 점프";
            break;
        case 8:
            rep = "하단 참조";
            break;
        case 9:
            rep = "하단 참조";
            break;
        case 10:
            rep = "하단 참조";
            break;
        case 11:
            rep = "엘리멘트:소울의 코스믹오브 생성확률 15%, 최대 개수 1개 증가";
            break;
        case 12:
            rep = "공격 속도 2단계, 힘 20 증가";
            break;
        case 13:
            rep = "공격력 20 증가";
            break;
        case 14:
            rep = "하단 참조";
            break;
        case 15:
            rep = "하단 참조";
            break;
        case 16:
            rep = "[솔라] 최대 7명의 적을 170%의 데미지로 2번 공격하며 이동";
            break;
        case 17:
            rep = "[루나] 최대 7명의 적을 170%의 데미지로 2번 공격하며 이동";
            break;
        case 18:
            rep = "30초간 범위 내 최대 10명의 적의 방어율 10% 감소";
            break;
        case 19:
            rep = "엘리멘트:소울의 코스믹오브 생성확률 15%, 최대 개수 1개 증가";
            break;
        case 20:
            rep = "하단 참조";
            break;
        case 21:
            rep = "상태 이상 내성 30, 모든 속성 내성 30% 증가";
            break;
        case 22:
            rep = "공격력 30, 힘 40 증가";
            break;
        case 23:
            rep = "하단 참조";
            break;
        case 24:
            rep = "하단 참조";
            break;
        case 25:
            rep = "최대 7명의 적을 240%의 데미지로 6번 공격 / 쿨5초";
            break;
        case 26:
            rep = "하단 참조";
            break;
        case 27:
            rep = "엘리멘트:소울의 코스믹오브 생성확률 20%, 최대 개수 1개 증가";
            break;
        case 28:
            rep = "모든 능력치 30, 크리티컬 확률 10%";
            break;
        case 29:
            rep = "몬스터 방어율 30% 무시";
            break;
        case 30:
            rep = "하단 참조";
            break;
        case 31:
            rep = "하단 참조";
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
            rep = "하단 참조";
            break;
        case 37:
            rep = "하단 참조";
            break;
        case 38:
            rep = "";
            break;
        case 39:
            rep = "";
            break;
    }
    return rep;
};
sksm.getskilldesc2Soulmaster = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "태양";
            break;
        case 1:
            rep = "달";
            break;
        case 2:
            rep = "태양 주력기";
            break;
        case 3:
            rep = "달 주력기";
            break;
        case 4:
            rep = "온오프 스킬";
            break;
        case 5:
            rep = "스탠스 확률 40% 증가";
            break;
        case 6:
            rep = "최대 이동속도 20 증가";
            break;
        case 7:
            rep = "위 방향키와 함께 사용해 위 방향으로도 이동할 수 있다.";
            break;
        case 8:
            rep = "1차 강화";
            break;
        case 9:
            rep = "[코스믹]";
            break;
        case 10:
            rep = "온오프 스킬";
            break;
        case 11:
            rep = "코스믹 오브 생성 시 공격력 30 추가 증가";
            break;
        case 12:
            rep = "-";
            break;
        case 13:
            rep = "-";
            break;
        case 14:
            rep = "2차 강화";
            break;
        case 15:
            rep = "[코스믹]";
            break;
        case 16:
            rep = "밀격 / 일부 몬스터는 저항하여 밀리지 않는다.";
            break;
        case 17:
            rep = "밀격 / 일부 몬스터는 저항하여 밀리지 않는다.";
            break;
        case 18:
            rep = "적이 받는 최종 데미지 5% 증가";
            break;
        case 19:
            rep = "코스믹 오브 생성 시 공격력 30 추가 증가";
            break;
        case 20:
            rep = "라이징 선, 폴링 문의 효과를 덮어쓴다.";
            break;
        case 21:
            rep = "피격 데미지 25% 감소, 4초마다 최대 HP의 5%씩 회복";
            break;
        case 22:
            rep = "-";
            break;
        case 23:
            rep = "3차 강화";
            break;
        case 24:
            rep = "[코스믹]";
            break;
        case 25:
            rep = "자신의 스킬 사용 중에도 사용할 수 있다.";
            break;
        case 26:
            rep = "바인드";
            break;
        case 27:
            rep = "코스믹 오브 생성 시 최종 데미지 10% 추가 증가";
            break;
        case 28:
            rep = "스탠스 확률 60% 증가";
            break;
        case 29:
            rep = "보스 몬스터 공격 시 데미지 15% 증가";
            break;
        case 30:
            rep = "라이징 선, 폴링 문의 효과를 덮어쓴다.";
            break;
        case 31:
            rep = "-";
            break;
        case 32:
            rep = "[솔라]";
            break;
        case 33:
            rep = "[루나]";
            break;
        case 34:
            rep = "[코스믹]";
            break;
        case 35:
            rep = "코로스 더 스틱스 사용가능";
            break;
        case 36:
            rep = "-";
            break;
        case 37:
            rep = "-";
            break;
        case 38:
            rep = "";
            break;
        case 39:
            rep = "";
            break;
    }
    return rep;
};
sksm.getskilldesc3Soulmaster = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "햇빛의 힘을 검에 담아 올려 솔라 계열 스킬을 사용할 수 있는 상태가 된다.\n스킬 사용 시 효과가 활성화되고 재사용 시 비활성화되는 온오프 스킬\n\n최종 데미지 10%, 공격 속도 1단계 증가\n폴링 문과 동시에 사용 불가";
            break;
        case 1:
            rep = "달빛의 힘을 검에 받아 내려 루나 계열 기술을 사용할 수 있는 상태가 된다. 소환 스킬, 전직업 공용 5차 스킬을 포함한 일부 스킬에는 적용되지 않는다. SP를 투자하지 않는 스킬이며 라이징 선의 스킬 레벨을 따라간다.\n스킬 사용 시 효과가 활성화되고 재사용 시 비활성화되는 온오프 스킬\n\n크리티컬 확률 10% 증가\n자신의 공격 스킬 공격 횟수 2배로 증가, 최종 데미지 55%로 감소\n단, 스킬의 공격 횟수는 15번을 초과할 수 없음\n라이징 선과 동시에 사용 불가";
            break;
        case 4:
            rep = "영혼의 엘리멘트를 소환하여 그 힘을 얻는다. 직전에 사용한 스킬과 반대 계열의 솔라/루나 스킬이 명중했을 때 일정 확률로 코스믹 오브를 획득한다. 코스믹 오브가 생성되면 일정 시간 동안 공격력이 증가한다.\n\n직전에 사용한 스킬의 반대 계열의 솔라/루나 스킬 명중 시 50% 확률로 30초간 지속되는 코스믹 오브 1개 생성\n코스믹 오브 최대 2개 누적 가능, 생성 시 모든 코스믹 오브의 지속 시간 갱신\n코스믹 오브 생성 시 30초간 공격력 20 증가\n\n[패시브 효과 : 몬스터 방어율 10% 무시]";
            break;
        case 8:
            rep = "천체의 기운을 받아들여 한 층 강화된 검술을 구사한다.\n\n솔라 슬래시 : MP 14 소비, 최대 6명의 적을 150%의 데미지로 4번 공격\n루나 디바이드 : MP 14 소비, 최대 6명의 적에게 190%의 데미지로 3번 공격하는 달의 파편 발사";
            break;
        case 9:
            rep = "응축된 암흑 물질을 전방에 발사한다. 암흑 물질은 공격 가능한 대상을 모두 공격하거나 최대 사거리에 도달하면 폭발하여 범위의 적을 공격한다. 사용 시 모든 코스믹 오브를 소모하며 소모한 코스믹 오브의 개수에 따라 더 강력한 데미지를 준다.\n\nMP 25 소비, 모든 코스믹 오브를 소비하여 암흑 물질 발사\n암흑 물질 : 최대 8명의 적을 관통하며 160%의 데미지로 2번 공격, 폭발 시 최대 8명의 적을 220%의 데미지로 3번 공격\n소모한 코스믹 오브 1개당 암흑 물질의 데미지 20%p 증가\n\n재사용 대기시간 15초";
            break;
        case 10:
            rep = "해와 달의 주기에 따라 시간의 흐름을 받아들여 솔라/루나 스킬 사용 시 자세가 자동으로 변하는 상태가 된다. 추가로 라이징 선, 폴링 문의 효과가 강화된다. 라이징 선, 폴링 문의 효과를 덮어쓴다.\n\nMP 35 소비, 솔라/루나 계열 스킬을 사용할 때마다 자세가 변환\n라이징 선 : 최종 데미지 15%, 공격 속도 1단계 증가\n폴링 문 : 크리티컬 확률 15% 증가, 자신의 공격 스킬 공격 횟수 2배로 증가, 최종 데미지 60% 감소\n\n단, 스킬의 공격 횟수는 15번을 초과할 수 없음";
            break;
        case 14:
            rep = "천체의 검술을 더욱 연마하여 솔라 슬래시와 루나 디바이드를 강화한다.\n\n솔라 슬래시 : MP 19 소비, 최대 6명의 적을 225%의 데미지로 5번 공격\n루나 디바이드 : MP 19 소비, 최대 6명의 적에게 180%의 데미지로 5번 공격하는 달의 파편 발사";
            break;
        case 15:
            rep = "오브에 잠재된 힘으로 일정 시간 동안 주변을 계속해서 공격하는 유성우 지대를 생성한다. 사용 시 모든 코스믹 오브를 소모하며 소모한 코스믹 오브의 개수에 따라 지속 시간이 증가한다. 솔라 슬래시, 루나 디바이드, 크로스 더 스틱스 사용 중에는 코스믹 샤워를 시전 동작 없이 사용할 수 있다. 코스믹 샤워는 소환수 지속시간 증가로 지속시간이 증가하지 않고 공격 반사 상태의 적을 공격해도 피해를 입지 않는다.\n\nMP 45 소비, 모든 코스믹 오브를 소비하여 유성우 지대 생성\n유성우 지대 : 45초 동안 최대 6명의 적을 210%의 데미지로 3번 공격\n소모한 코스믹 오브 1개당 유성우의 지속 시간 3초 증가\n일반 몬스터 공격 시 데미지 50% 증가\n\n재사용 대기시간 30초";
            break;
        case 20:
            rep = "태양과 달의 검술을 단련하여 라이징 선과 폴링 문의 효과를 강화한다. 라이징 선, 폴링 문의 효과를 덮어쓴다.\n\n라이징 선 : 최종 데미지 20%, 공격 속도 1단계 증가\n폴링 문 : 크리티컬 확률 20% 증가, 자신의 공격 스킬 공격 횟수 2배로 증가, 최종 데미지 75%로 감소\n단, 스킬의 공격 횟수는 15번을 초과할 수 없음";
            break;
        case 23:
            rep = "완벽한 천체의 검술을 구사하여 솔라 슬래시와 루나 디바이드를 강화한다.\n\n솔라 슬래시 : MP 24 소비, 최대 7명의 적을 485%의 데미지로 6번 공격\n\n루나 디바이드 : MP 24 소비, 최대 7명의 적에게 485%의 데미지로 6번 공격하는 달의 파편 발사";
            break;
        case 24:
            rep = "코스믹 오브를 방출하여 공격한다. 사용 시 모든 코스믹 오브를 소모하며 소모한 코스믹 오브의 개수에 따라 재사용 대기시간이 감소한다. 솔라 슬래시, 루나 디바이드, 크로스 더 스틱스 사용 중에는 코스믹 버스트를 시전 동작 없이 사용할 수 있다. 방출된 코스믹 오브는 최대 HP가 높은 보스 몬스터를 우선 추적하며 공격 반사 상태의 적을 공격해도 피해를 입지 않는다. 코스믹 버스트는 재사용 대기시간 감소, 재사용 대기시간 초기화 효과를 받지 않는다.\n\n자동 사용 모드에서는 코스믹 오브 최대 상태에서 재사용 대기시간이 아닐 때 솔라 슬래시, 루나 디바이드, 크로스 더 스틱스 적중 시 자동으로 코스믹 버스트가 사용된다.\n\nMP 50 소비, 모든 코스믹 오브를 소비하여 코스믹 오브 방출\n방출된 코스믹 오브는 각각 1명의 적을 추적하여 적을 400%의 데미지로 4번 공격\n1명의 적이 코스믹 오브를 여러 번 맞을 경우 두 번째 오브부터 최종 데미지 30% 감소\n소모한 코스믹 오브 1개당 재사용 대기시간 1초 감소\n\n재사용 대기시간 15초\n[패시브 효과 : 코스믹 샤워의 데미지 60% 증가]";
            break;
        case 26:
            rep = "영혼의 힘으로 소환한 검들이 떨어지는 별처럼 적들을 꿰뚫어 지면에 고정시킨다. 소울 페네트레이션은 보스에도 동일하게 적용된다.\n\nMP 100 소비, 최대 15명의 적을 500%의 데미지로 3번 공격, 공격당한 적은 100% 확률로 10초 동안 행동 불가\n소울 페네트레이션으로 적에게 준 데미지에 따라 행동 불가 지속시간 최대 100% 증가\n디버프 해제 시 300%의 데미지로 3번 공격하는 추가 데미지 발생\n\n재사용 대기시간 180초";
            break;
        case 30:
            rep = "검술의 끝에 도달하여 형식의 구분을 잊는다. 라이징 선과 폴링 문의 효과가 추가로 강화되고 솔루나 타임 적용 중에 라이징 선과 폴링 문의 효과가 동시에 발동된다. 라이징 선, 폴링 문의 효과를 덮어쓴다.\n\n솔루나 타임 적용 중 라이징 선, 폴링 문의 효과 동시에 적용\n라이징 선 : 최종 데미지 25%, 공격 속도 2단계 증가\n폴링 문 : 크리티컬 확률 35% 증가, 자신의 공격 스킬 공격 횟수 2배로 증가, 최종 데미지 90%로 감소\n\n단, 스킬의 공격 횟수는 15번을 초과할 수 없음";
            break;
        case 31:
            rep = "천체의 힘을 날카롭게 벼려 일정 시간 동안 전투 능력이 극대화되고 한 번에 코스믹 오브를 더 많이 다룰 수 있게 된다. 재사용 대기시간 초기화의 효과를 받지 않는다.\n\nMP 150 소비, 60초 동안 데미지 10%, 최대 누적 가능한 코스믹 오브 수 5개 증가\n사용 시 코스믹 오브 최대로 생성\n\n재사용 대기시간 180초";
            break;
        case 32:
            rep = "태양의 불길을 휘감은 검으로 순식간에 적을 베며 이동한다. 사용 시 일정 시간 동안 무적 상태가 된다. 러스터 차지와 재사용 대기시간을 공유하며 시전 후 일정 시간 이내로 자세와 무관하게 러스터 차지를 1회 연계하여 사용할 수 있다. 러스터 차지에서 연계하여 사용되었다면 다시 러스터 차지로 연계할 수 없으며 솔루나 타임으로 인해 자세가 변환되지 않는다.\n\nMP 100 소비, 최대 10명의 적을 400%의 데미지로 6번 공격\n시전 후 1.8초 동안 무적 및 5초 이내로 러스터 차지로 연계 가능\n\n재사용 대기시간 45초";
            break;
        case 33:
            rep = "차가운 달의 정기가 깃든 검으로 순식간에 적을 베며 이동한다. 사용 시 일정 시간 동안 무적 상태가 된다. 블레이징 어썰트와 재사용 대기시간을 공유하며 시전 후 일정 시간 이내로 자세와 무관하게 블레이징 어썰트를 1회 연계하여 사용할 수 있다. 블레이징 어썰트에서 연계하여 사용되었다면 다시 블레이징 어썰트로 연계할 수 없으며 솔루나 타임으로 인해 자세가 변환되지 않는다.\n\nMP 100 소비, 최대 10명의 적을 400%의 데미지로 6번 공격\n시전 후 1.8초 동안 무적 및 5초 이내로 블레이징 어썰트로 연계 가능\n\n재사용 대기시간 45초";
            break;
        case 34:
            rep = "자신의 주위를 소용돌이치는 완전한 은하를 전개한다. 코스모스는 공격 반사 상태의 적을 공격해도 피해를 입지 않는다.\n\nMP 500 소비, 모든 코스믹 오브를 소비하여 은하 전개\n은하 전개 : 15초 동안 일정 주기마다 최대 12명의 적을 990%의 데미지로 5번 공격\n소비한 코스믹 오브 1개당 공격 주기 감소\n\n재사용 대기시간 90초";
            break;
        case 35:
            rep = "산 자와 죽은 자를 가르는 경계를 넘은 곳으로 적을 보낸다. 엘리시온 중에는 일반 공격으로 크로스 더 스틱스를 사용할 수 있고 커스텀 커맨드를 사용하면 일반 공격 또는 솔라 슬래시/루나 디바이드로 크로스 더 스틱스를 사용할 수 있다. 크로스 더 스틱스와 균열로 인한 공격은 공격 시 공격 무시 및 공격 반사 상태의 적에게도 피해를 입힐 수 있다.\n\nMP 1000 소비, 사용 시 코스믹 오브 최대치로 생성, 40초 동안 크로스 더 스틱스 사용 가능\n\n크로스 더 스틱스 : 최대 15명의 적을 830%의 데미지로 5번 공격하는 참격이 5번 발생, 몬스터 방어율 20% 추가 무시 및 명중 시 코스믹 오브 최대치로 생성 및 솔루나 타임으로 인한 자세 변환 발생\n크로스 더 스틱스로 공격 시 공간을 베어 10초 동안 균열을 남김\n\n균열 : 균열을 크로스 더 스틱스로 계속 공격하면 균열이 점차 커지며 마지막에 최대 15명의 적을 1150%의 데미지로 6번 공격하는 폭발 5번 발동\n균열은 동시에 2개 이상 생성되지 않고 폭발 후 5초 후에 재생성 가능, 균열의 지속시간이 지나면 소멸하며 즉시 폭발하나 데미지 감소\n\n재사용 대기시간 180초";
            break;
        case 36:
            rep = "영혼의 힘을 집중해 해와 달이 겹쳐지는 일식을 구현한다. 해와 달이 완전히 겹쳐진 후 스킬을 한번 더 사용하여 솔루나 디바이드를 사용할 수 있다. 솔루나 디바이드는 솔라 슬래시, 루나 디바이드, 크로스 더 스틱스 공격 중에도 사용할 수 있다. 일식은 공격 반사 상태의 적을 공격해도 피해를 입지 않는다.\n\nMP 1000 소비, 40초 동안 최대 15명의 적을 990%의 데미지로 7번 지속 공격하는 일식 구현, 시전 동작 중 무적\n\n솔루나 디바이드 : 일식이 소멸하며 일정 시간마다 최대 15명의 적을 2750%의 데미지로 15번 공격하는 폭발이 5번 발동, 시전 동작 중 무적, 공중에서 사용 시 체공하며 자신의 공격 스킬 사용 중 사용가능\n\n재사용 대기시간 180초";
            break;
        case 37:
            rep = "벼려진 영혼의 기운을 폭발적으로 분출한다. 폴링 문 및 라이징 선 자세에서 자신의 공격 스킬 적중 시 발동하고 솔루나 타임으로 자세가 변환될 때, 크로스 더 스틱스가 적중될 때 재발동 대기시간이 감소한다. 플레어 슬래시는 공격 반사 상태의 적을 공격해도 피해를 입지 않으며 재사용 대기시간 감소 효과의 영향을 받지 않는다.\n\nMP 80 소비, 최대 10명의 적을 1210%의 데미지로 7번 공격\n\n재발동 대기시간 12초, 솔루나 타임으로 자세 변환 시 0.8초 감소, 크로스 더 스틱스 적중 시 1.5배로 감소";
            break;
        case 38:
            rep = "";
            break;
        case 39:
            rep = "";
            break;
    }
    return rep;
};
sksm.getskillimage1Soulmaster = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "https://i.imgur.com/gkbHO4F.png";
            break;
        case 1:
            rep = "https://i.imgur.com/cZiZiuB.png";
            break;
        case 2:
            rep = "https://i.imgur.com/pp0Yfqv.png";
            break;
        case 3:
            rep = "https://i.imgur.com/2XkTq7E.png";
            break;
        case 4:
            rep = "https://i.imgur.com/5S7XSVr.png";
            break;
        case 5:
            rep = "";
            break;
        case 6:
            rep = "";
            break;
        case 7:
            rep = "https://i.imgur.com/WJMvwfN.png";
            break;
        case 8:
            rep = "";
            break;
        case 9:
            rep = "https://i.imgur.com/CTUyEy9.png";
            break;
        case 10:
            rep = "https://i.imgur.com/eiSIVkW.png";
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
            rep = "https://i.imgur.com/2k9n5fC.png";
            break;
        case 16:
            rep = "https://i.imgur.com/xSXCz5k.png";
            break;
        case 17:
            rep = "https://i.imgur.com/4yFXK5t.png";
            break;
        case 18:
            rep = "https://i.imgur.com/Y6q0gcJ.png";
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
            rep = "https://i.imgur.com/ckyGpIK.png";
            break;
        case 24:
            rep = "https://i.imgur.com/5Umtyf0.png";
            break;
        case 25:
            rep = "https://i.imgur.com/ycgdBCT.png";
            break;
        case 26:
            rep = "https://i.imgur.com/D8HtBgp.png";
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
            rep = "https://i.imgur.com/StHgcXU.png";
            break;
        case 32:
            rep = "https://i.imgur.com/9YwdAQ7.png";
            break;
        case 33:
            rep = "https://i.imgur.com/9743X7G.png";
            break;
        case 34:
            rep = "https://i.imgur.com/q5AsvkB.png";
            break;
        case 35:
            rep = "https://i.imgur.com/HZjz7Cw.png";
            break;
        case 36:
            rep = "https://i.imgur.com/Wgn9FBF.png";
            break;
        case 37:
            rep = "https://i.imgur.com/fHGIkTN.png";
            break;
        case 38:
            rep = "";
            break;
        case 39:
            rep = "";
            break;
    }
    return rep;
};
sksm.getskillimage2Soulmaster = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "https://i.imgur.com/DNxLdAv.png";
            break;
        case 1:
            rep = "https://i.imgur.com/u5gesyX.png";
            break;
        case 2:
            rep = "https://i.imgur.com/SEqvR7j.png";
            break;
        case 3:
            rep = "https://i.imgur.com/KkezCVi.png";
            break;
        case 4:
            rep = "https://i.imgur.com/cgQsWD0.png";
            break;
        case 5:
            rep = "https://i.imgur.com/vFys3gm.png";
            break;
        case 6:
            rep = "https://i.imgur.com/zGkSY5G.png";
            break;
        case 7:
            rep = "https://i.imgur.com/086yWqk.png";
            break;
        case 8:
            rep = "https://i.imgur.com/PqTR4Df.png";
            break;
        case 9:
            rep = "https://i.imgur.com/kYbzVim.png";
            break;
        case 10:
            rep = "https://i.imgur.com/tqZbeVb.png";
            break;
        case 11:
            rep = "https://i.imgur.com/B7xB3Bb.png";
            break;
        case 12:
            rep = "https://i.imgur.com/wlhYEKL.png";
            break;
        case 13:
            rep = "https://i.imgur.com/zNKGGz5.png";
            break;
        case 14:
            rep = "https://i.imgur.com/4lvqxAS.png";
            break;
        case 15:
            rep = "https://i.imgur.com/fRH9Ats.png";
            break;
        case 16:
            rep = "https://i.imgur.com/GQnz1X9.png";
            break;
        case 17:
            rep = "https://i.imgur.com/XHc4OXk.png";
            break;
        case 18:
            rep = "https://i.imgur.com/c6KUOYT.png";
            break;
        case 19:
            rep = "https://i.imgur.com/MSU4Sby.png";
            break;
        case 20:
            rep = "https://i.imgur.com/xXV4H6W.png";
            break;
        case 21:
            rep = "https://i.imgur.com/nGxyLCe.png";
            break;
        case 22:
            rep = "https://i.imgur.com/7RH9rze.png";
            break;
        case 23:
            rep = "https://i.imgur.com/8mgrG8G.png";
            break;
        case 24:
            rep = "https://i.imgur.com/Ap1aoEV.png";
            break;
        case 25:
            rep = "https://i.imgur.com/Mswti4T.png";
            break;
        case 26:
            rep = "https://i.imgur.com/jnNR20D.png";
            break;
        case 27:
            rep = "https://i.imgur.com/HYVLVYD.png";
            break;
        case 28:
            rep = "https://i.imgur.com/RmJq5mI.png";
            break;
        case 29:
            rep = "https://i.imgur.com/AWLIoWF.png";
            break;
        case 30:
            rep = "https://i.imgur.com/OQHgjlU.png";
            break;
        case 31:
            rep = "https://i.imgur.com/Lxp8a0O.png";
            break;
        case 32:
            rep = "https://i.imgur.com/PBumt0x.png";
            break;
        case 33:
            rep = "https://i.imgur.com/vkgbLxX.png";
            break;
        case 34:
            rep = "https://i.imgur.com/054w3mq.png";
            break;
        case 35:
            rep = "https://i.imgur.com/TbEk8XV.png";
            break;
        case 36:
            rep = "https://i.imgur.com/PxBg5pk.png";
            break;
        case 37:
            rep = "https://i.imgur.com/jdyzBx2.png";
            break;
        case 38:
            rep = "";
            break;
        case 39:
            rep = "";
            break;
    }
    return rep;
};

module.exports = sksm;