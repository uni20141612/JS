const skk = {};

skk.getskillKaiser = function (skillname){
    var kret = -1;
    switch(skillname){
        case "가디언 오브 노바":
        case "가디언오브노바":
        case "가디언":
        case "가오노":
            kret = 0;
            break;
        case "윌 오브 소드 : 스트라이크":
        case "윌오브소드 : 스트라이크":
        case "윌오브소드:스트라이크":
        case "윌 오브 소드 스트라이크":
        case "윌오브소드 스트라이크":
        case "윌오브소드스트라이크":
        case "윌오소스":
        case "윌오스":
        case "윌스":
            kret = 1;
            break;
        case "드라코 슬래셔":
        case "드라코슬래셔":
        case "드슬":
            kret = 2;
            break;
        case "드래곤 블레이즈":
        case "드래곤블레이즈":
        case "드블":
            kret = 3;
            break;
        case "리셔플스위치: 방어모드":
        case "리셔플스위치:방어모드":
        case "리셔플스위치 방어모드":
        case "리셔플스위치방어모드":
        case "방어 모드":
        case "방어모드":
            kret = 4;
            break;
        case "리셔플스위치: 공격모드":
        case "리셔플스위치:공격모드":
        case "리셔플스위치 공격모드":
        case "리셔플스위치공격모드":
        case "공격 모드":
        case "공격모드":
            kret = 5;
            break;
        case "버티컬 커넥트":
        case "버티컬커넥트":
        case "버티컬":
        case "로프 커넥트":
        case "로프커넥트":
        case "로프":
        case "커넥트":
            kret = 6;
            break;
        case "트랜스피규레이션":
        case "피규레이션":
        case "게이지":
        case "모프 게이지":
        case "모프게이지":
            kret = 7;
            break;
        case "커맨드":
            kret = 8;
            break;
        case "드래곤슬래시":
        case "드슬":
        case "평타":
            kret = 9;
            break;
        case "플레임 샷":
        case "플레임샷":
        case "플샷":
            kret = 10;
            break;
        case "더블 리프":
        case "더블리프":
        case "리프":
        case "더블점프":
        case "윗점":
            kret = 11;
            break;
        case "스킨 프로텍션":
        case "스킨프로텍션":
            kret = 12;
            break;
        case "드래곤슬래시 1차 강화":
        case "드래곤슬래시 1차강화":
        case "드래곤슬래시1차강화":
        case "드슬1차강화":
        case "평타1차강화":
        case "드래곤슬래시 2":
        case "드래곤슬래시2":
            kret = 13;
            break;
        case "임팩트 웨이브":
        case "임팩트웨이브":
        case "임팩트":
        case "웨이브":
        case "임웨":
            kret = 14;
            break;
        case "피어스 러쉬":
        case "피어스러쉬":
        case "피어스":
        case "피러":
        case "밀격기":
        case "밀격":
            kret = 15;
            break;
        case "윌 오브 소드":
        case "윌오브 소드":
        case "윌오브소드":
        case "윌오소":
            kret = 16;
            break;
        case "블레이즈 업":
        case "블레이즈업":
        case "블업":
            kret = 17;
            break;
        case "이너 블레이즈":
        case "이너블레이즈":
        case "이블":
            kret = 18;
            break;
        case "방어모드 1차 강화":
        case "방어모드 1차강화":
        case "방어모드1차강화":
        case "방어모드 2":
        case "방어모드2":
            kret = 19;
            break;
        case "공격모드 1차 강화":
        case "공격모드 1차강화":
        case "공격모드1차강화":
        case "공격모드 2":
        case "공격모드2":
            kret = 20;
            break;
        case "드래곤슬래시 2차 강화":
        case "드래곤슬래시 2차강화":
        case "드래곤슬래시2차강화":
        case "드슬2차강화":
        case "평타2차강화":
        case "드래곤슬래시 3":
        case "드래곤슬래시3":
            kret = 21;
            break;
        case "윙비트":
            kret = 22;
            break;
        case "체인풀링":
        case "체풀":
        case "끌격기":
        case "끌격":
            kret = 23;
            break;
        case "파이널 피규레이션":
        case "파이널피규레이션":
        case "파피":
        case "변신":
            kret = 24;
            break;
        case "페트리파이드":
        case "페트리":
        case "페파":
        case "패트리파이드":
        case "패트리":
        case "패파":
            kret = 25;
            break;
        case "리게인 스트렝스":
        case "리게인스트렝스":
        case "리게인":
            kret = 26;
            break;
        case "카탈라이즈":
        case "카탈":
            kret = 27;
            break;
        case "셀프 리커버리":
        case "셀프리커버리":
        case "리커버리":
            kret = 28;
            break;
        case "어드밴스드 이너 블레이즈":
        case "어드밴스드 이너블레이즈":
        case "어드밴스드이너블레이즈":
        case "어이블":
            kret = 29;
            break;
        case "방어모드 2차 강화":
        case "방어모드 2차강화":
        case "방어모드2차강화":
        case "방어모드 3":
        case "방어모드3":
            kret = 30;
            break;
        case "공격모드 2차 강화":
        case "공격모드 2차강화":
        case "공격모드2차강화":
        case "공격모드 3":
        case "공격모드3":
            kret = 31;
            break;
        case "드래곤슬래시 3차 강화":
        case "드래곤슬래시 3차강화":
        case "드래곤슬래시3차강화":
        case "드슬3차강화":
        case "평타3차강화":
        case "드래곤슬래시 4":
        case "드래곤슬래시4":
            kret = 32;
            break;
        case "기가 슬래셔":
        case "기가슬래셔":
        case "기가":
        case "기슬":
            kret = 33;
            break;
        case "블루 스트릭":
        case "블루스트릭":
        case "블스":
            kret = 34;
            break;
        case "소드 스트라이크":
        case "소드스트라이크":
        case "소스":
            kret = 35;
            break;
        case "인퍼널 브레스":
        case "인퍼널브레스":
        case "인퍼널":
        case "장판기":
            kret = 36;
            break;
        case "어드밴스드 윌 오브 소드":
        case "어드밴스드 윌오브 소드":
        case "어드밴스드 윌오브소드":
        case "어드밴스드윌오브소드":
        case "어윌오소":
            kret = 37;
            break;
        case "로버스트 아머":
        case "로버스트아머":
        case "로버스트":
        case "로아":
            kret = 38;
            break;
        case "언플리칭 커리지":
        case "언플리칭커리지":
        case "언플리칭":
        case "언커":
            kret = 39;
            break;
        case "방어모드 3차 강화":
        case "방어모드 3차강화":
        case "방어모드3차강화":
        case "방어모드 4":
        case "방어모드4":
            kret = 40;
            break;
        case "공격모드 3차 강화":
        case "공격모드 3차강화":
        case "공격모드3차강화":
        case "공격모드 4":
        case "공격모드4":
            kret = 41;
            break;
        case "마제스티 오브 카이저":
        case "마제스티오브 카이저":
        case "마제스티오브카이저":
        case "마제스티":
        case "마오카":
            kret = 42;
            break;
        case "프로미넌스":
        case "프넌":
        case "디럭스봄바":
        case "디럭스봄버":
            kret = 43;
            break;
        case "파이널 트랜스":
        case "파이널트랜스":
        case "파이널":
        case "파트":
            kret = 44;
            break;
        case "":
            kret = 45;
            break;
    }
    return kret;
};
skk.getskillnameKaiser = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "가디언 오브 노바";
            break;
        case 1:
            rep = "윌 오브 소드 : 스트라이크";
            break;
        case 2:
            rep = "드라코 슬래셔";
            break;
        case 3:
            rep = "드래곤 블레이즈";
            break;
        case 4:
            rep = "리셔플스위치: 방어모드";
            break;
        case 5:
            rep = "리셔플스위치: 공격모드";
            break;
        case 6:
            rep = "버티컬 커넥트";
            break;
        case 7:
            rep = "트랜스피규레이션";
            break;
        case 8:
            rep = "커맨드";
            break;
        case 9:
            rep = "드래곤슬래시";
            break;
        case 10:
            rep = "플레임 샷";
            break;
        case 11:
            rep = "더블 리프";
            break;
        case 12:
            rep = "스킨 프로텍션";
            break;
        case 13:
            rep = "드래곤슬래시 1차 강화";
            break;
        case 14:
            rep = "임팩트 웨이브";
            break;
        case 15:
            rep = "피어스 러쉬";
            break;
        case 16:
            rep = "윌 오브 소드";
            break;
        case 17:
            rep = "블레이즈 업";
            break;
        case 18:
            rep = "이너 블레이즈";
            break;
        case 19:
            rep = "방어모드 1차 강화";
            break;
        case 20:
            rep = "공격모드 1차 강화";
            break;
        case 21:
            rep = "드래곤슬래시 2차 강화";
            break;
        case 22:
            rep = "윙비트";
            break;
        case 23:
            rep = "체인풀링";
            break;
        case 24:
            rep = "파이널 피규레이션";
            break;
        case 25:
            rep = "패트리파이드";
            break;
        case 26:
            rep = "리게인 스트렝스";
            break;
        case 27:
            rep = "카탈라이즈";
            break;
        case 28:
            rep = "셀프 리커버리";
            break;
        case 29:
            rep = "어드밴스드 이너 블레이즈";
            break;
        case 30:
            rep = "방어모드 2차 강화";
            break;
        case 31:
            rep = "공격모드 2차 강화";
            break;
        case 32:
            rep = "드래곤슬래시 3차 강화";
            break;
        case 33:
            rep = "기가 슬래셔";
            break;
        case 34:
            rep = "블루 스트릭";
            break;
        case 35:
            rep = "소드 스트라이크";
            break;
        case 36:
            rep = "인퍼널 브레스";
            break;
        case 37:
            rep = "어드밴스드 윌 오브 소드";
            break;
        case 38:
            rep = "로버스트 아머";
            break;
        case 39:
            rep = "언플리칭 커리지";
            break;
        case 40:
            rep = "방어모드 3차 강화";
            break;
        case 41:
            rep = "공격모드 3차 강화";
            break;
        case 42:
            rep = "마제스티 오브 카이저";
            break;
        case 43:
            rep = "프로미넌스";
            break;
        case 44:
            rep = "파이널 트랜스";
            break;
        case 45:
            rep = "";
            break;
    }
    return rep;
};
skk.getskilldesc1Kaiser = function (skillcode){
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
            rep = "방어력 200 / 온오프스킬";
            break;
        case 5:
            rep = "공 5, 크확 3%, 보공 3% 증가 / 온오프스킬";
            break;
        case 6:
            rep = "하늘 높이 로프를 던져 빠르게 이동한다.";
            break;
        case 7:
            rep = "1단계: 공속 1단계, 이속5, 점프력10, 스탠스 20%";
            break;
        case 8:
            rep = "하단 참조";
            break;
        case 9:
            rep = "하단 참조";
            break;
        case 10:
            rep = "최대 6명의 적에게 170% 데미지로 2번 공격";
            break;
        case 11:
            rep = "일정 거리 점프, 최대 이동속도 20, 이동속도 20 증가";
            break;
        case 12:
            rep = "방어력 200, 스탠스 확률 40% 증가";
            break;
        case 13:
            rep = "드래곤슬래시의 데미지 40% 추가 강화";
            break;
        case 14:
            rep = "270%의 데미지로 8명의 적에게 2번 공격";
            break;
        case 15:
            rep = "최대 12명의 적을 밀어내며 250%의 데미지로 공격";
            break;
        case 16:
            rep = "하단 참조";
            break;
        case 17:
            rep = "240초 동안 공격력 20, 공격 속도 2단계 증가";
            break;
        case 18:
            rep = "힘 20, HP 20% 증가";
            break;
        case 19:
            rep = "방어력 200 추가 증가";
            break;
        case 20:
            rep = "공 10, 크확 2%, 보공 5% 추가 증가";
            break;
        case 21:
            rep = "드래곤슬래시의 데미지 70% 추가 강화";
            break;
        case 22:
            rep = "하단 참조";
            break;
        case 23:
            rep = "전방 최대 8명의 적 관통하고 당기면서 280%, 2번 공격";
            break;
        case 24:
            rep = "하단 참조";
            break;
        case 25:
            rep = "60초 동안 용의 화신 소환 / 75% 확률로 3초 동안 슬로우";
            break;
        case 26:
            rep = "240초 동안 상태이상내성 60, 모든속성내성 60% 증가";
            break;
        case 27:
            rep = "공격력 30%, 크리티컬 확률 20%";
            break;
        case 28:
            rep = "4초마다 HP/MP 5% 회복";
            break;
        case 29:
            rep = "힘 30, HP 30% 증가";
            break;
        case 30:
            rep = "방어력 200 추가 증가 / 커맨드스킬 사용시 HP3% 회복";
            break;
        case 31:
            rep = "공15, 크확5%, 보공5% / 커맨드스킬 사용시 최종뎀 5%";
            break;
        case 32:
            rep = "드래곤슬래시의 데미지 90% 추가 강화";
            break;
        case 33:
            rep = "하단 참조";
            break;
        case 34:
            rep = "12명, 550%, 7번 공격/ 쿨타임 5초";
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
            rep = "하단 참조";
            break;
        case 39:
            rep = "몬스터 방어율 40% 무시";
            break;
        case 40:
            rep = "방200 / 파이널피규레이션 시 체비례포함 피격데미지 5%감소";
            break;
        case 41:
            rep = "공15, 크확10%, 보공5% / 파이널피규레이션시 보공10%";
            break;
        case 42:
            rep = "하단 참조";
            break;
        case 43:
            rep = "최대 15명의 적 1000% 데미지로 15번 공격";
            break;
        case 44:
            rep = "하단 참조";
            break;
        case 45:
            rep = "";
            break;
    }
    return rep;
};
skk.getskilldesc2Kaiser = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "반고정형 소환수 스킬";
            break;
        case 1:
            rep = "드라코 슬래셔를 강화하는 광범위 공격기";
            break;
        case 2:
            rep = "베는 이펙트와 캐릭터 사이에 간격안에 있는 몬스터는 피격X";
            break;
        case 3:
            rep = "자동 공격형 광범위 공격기이자 극딜기";
            break;
        case 4:
            rep = "공격모드와 동시에 사용할 수 없다.";
            break;
        case 5:
            rep = "방어모드와 동시에 사용할 수 없다.";
            break;
        case 6:
            rep = "올라가는 도중에 스킬키를 다시 누르면 캔슬 가능";
            break;
        case 7:
            rep = "2단계: 공속 1단계, 이속10, 점프력20, 스탠스 40% 증가";
            break;
        case 8:
            rep = "개선 1순위";
            break;
        case 9:
            rep = "꾹 누르면 1타만 나간다";
            break;
        case 10:
            rep = "커맨드 스킬 : 공격 도중 + 커맨드";
            break;
        case 11:
            rep = "위 방향키와 함께 사용해 위 방향으로도 이동할 수 있다.";
            break;
        case 12:
            rep = "-";
            break;
        case 13:
            rep = "-";
            break;
        case 14:
            rep = "커맨드 스킬 : 공격 도중 + ↑커맨드";
            break;
        case 15:
            rep = "공격받은 몬스터는 80% 확률로 2초 동안 기절";
            break;
        case 16:
            rep = "캐릭터가 착용한 검의 외형";
            break;
        case 17:
            rep = "-";
            break;
        case 18:
            rep = "-";
            break;
        case 19:
            rep = "총 방어력 400";
            break;
        case 20:
            rep = "총 공 15, 크확 5%, 보공 8% ";
            break;
        case 21:
            rep = "-";
            break;
        case 22:
            rep = "추적 기능 없음";
            break;
        case 23:
            rep = "95%의 확률로 대상 기절";
            break;
        case 24:
            rep = "버프 지속시간 증가 영향받음";
            break;
        case 25:
            rep = "8명의 적에게 400%의 데미지로 공격";
            break;
        case 26:
            rep = "상태 이상에 걸린 몬스터를 공격할 때 최종 데미지 15% 증가";
            break;
        case 27:
            rep = "최종 데미지 32% 증가";
            break;
        case 28:
            rep = "전투중에도 회복된다.";
            break;
        case 29:
            rep = "-";
            break;
        case 30:
            rep = "총 방어력 600";
            break;
        case 31:
            rep = "총 공 30, 크확 10%, 보공 13%";
            break;
        case 32:
            rep = "-";
            break;
        case 33:
            rep = "보스 주력기";
            break;
        case 34:
            rep = "파이널 피규레이션 : 12명, 550%, 9번 공격";
            break;
        case 35:
            rep = "주력 다수공격기";
            break;
        case 36:
            rep = "장판기";
            break;
        case 37:
            rep = "검 개수 증가";
            break;
        case 38:
            rep = "액티브 버프";
            break;
        case 39:
            rep = "-";
            break;
        case 40:
            rep = "총 방어력 800";
            break;
        case 41:
            rep = "총 공 45, 크확 20%, 보공 18%";
            break;
        case 42:
            rep = "재사용 대기시간 초기화";
            break;
        case 43:
            rep = "시전 동작 중 무적 / 재사용 대기시간 60초";
            break;
        case 44:
            rep = "즉시 변신 액티브 버프";
            break;
        case 45:
            rep = "";
            break;
    }
    return rep;
};
skk.getskilldesc3Kaiser = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "고대 카이저들의 영혼을 소환하여 함께 싸운다. 공격 반사 상태의 적을 공격해도 피해를 입지 않는다.\n\nMP 1000 소비, 45초 동안 고대 카이저의 영혼 3명을 소환, 소환된 카이저들은 자신의 주변 일정 범위를 벗어나지 않음. 소환된 카이저가 존재할 때 스킬을 다시 사용하면 자신이 있는 위치를 기준으로 재소환하며 10초마다 1번 사용가능\n\n6대 카이저 : 최대 10명의 적을 900%로 4번 공격\n15대 카이저 : 최대 10명의 적을 550%로 6번 공격\n27대 카이저 : 최대 10명의 적을 1950%로 2번 공격\n\n재사용 대기시간 : 120초";
            break;
        case 1:
            rep = "윌 오브 소드가 적을 공격하고 바닥에 꽂힌 후 강력한 불길이 발생되어 주변 적을 불태운다. 모든 윌 오브 소드가 바닥에 꽂힌 후 스킬을 한번 더 사용하여 불길을 강제로 발생시킬 수 있다. 불길이 적에게 적중하면 드라코 슬래셔의 재강화 대기시간이 즉시 초기화되고 재강화 대기시간이 일정 횟수 적용되지 않는다. 해당 강화는 윌 오브 소드 : 스트라이크의 재사용 대기시간 동안 유지된다. 윌 오브 소드가 소환된 상태에서만 사용할 수 있고 공격 반사 상태의 적을 공격해도 피해를 입지 않는다.\n\nMP 1000 소비, 각각의 무기가 적에게 날아가 1100%로 4번 공격하고 바닥에 꽂힌 후 2초 뒤 불길 발생\n불길은 최대 12명의 적을 1540%의 데미지로 6번 공격하며 바닥에 꽂혔던 시간에 비례하여 2200%까지 증가\n\n드라코 슬래셔의 재강화 대기시간 3회 무시\n재사용 대기시간 : 30초\n\n파이널 피규레이션 : 윌 오브 소드 및 불길의 공격횟수 1회 증가";
            break;
        case 2:
            rep = "고대 용의 기운으로 강화된 기가 슬래셔를 사용한다. 용의 기운은 전방으로 뿜여져 나가 적을 추가 공격한다. 사용 후 재강화 되는 데 시간이 필요하다.\n보스를 포함한 모든 적은 드라코 슬래셔를 맞을 때 슬로우 상태가 되고 용의 기운은 공격 반사 상태의 적을 공격해도 피해를 입지 않는다.\n[커맨드 스킬 : 공격 도중 + 기가 슬래셔]\n\nMP 60 소비, 최대 8명의 적을 650%의 데미지로 10번 공격 후, 최대 8명의 적에게 650%의 데미지로 6번 공격하는 용의 기운 발사, 추가 크리티컬 확률 100%, 몬스터 방어율 50% 추가 무시\n\n파이널 피규레이션 : 드라코 슬래셔의 모든 공격 횟수 2번 증가\n기가 슬래셔 사용 시 발동\n\n재강화 대기시간 : 5초";
            break;
        case 3:
            rep = "화염의 화신이 된 고대 용의 힘을 빌려 화염 그 자체가 된다.\n화염을 몸 주위에 둘러 주변 적을 공격하고 지나간 자리에 불의 기운을 남긴다. 자신의 공격 스킬이 적중하면 불의 기운이 폭발하여 광역 피해를 준다. 스킬을 재사용하여 즉시 종료시킬 수 있다.\n드래곤 블레이즈 지속 중이 아닌 재사용 대기시간 동안 자신의 공격 스킬 적중 시 화염구가 생성되어 추가 공격한다. 드래곤 블레이즈의 모든 공격은 공격 반사 상태의 적을 공격해도 피해를 입지 않는다.\n화염구 생성 온오프 : 마우스 우클릭\n\nMP 1000 소비, 20초 동안 몸 주위의 화염이 일정 주기마다 주변에 있는 최대 8명의 적을 550%의 데미지로 6번 자동 공격\n\n불의 기운 : 5초 동안 유지, 폭발 시 불의 기운 및 카이저 주변이 폭발하여 최대 10명의 적을 825%의 데미지로 5번 공격, 재폭발 대기시간 3.6초\n화염구 : 770%의 데미지로 3번 공격하는 화염구가 6개 생성, 재생성 대기시간 10초\n\n재사용 대기시간 : 120초";
            break;
        case 8:
            rep = "드래곤슬래시에 이어서 특정 공격 스킬을 발동시키고, 특별 효과를 받을 수 있다.\n\n더 많은 모프 게이지를 채울 수 있고 커맨드를 통해 발동시킨 공격 스킬과 다음에 사용하는 카이저 공격 스킬의 최종 데미지가 15% 증가된다. 다음 공격 최종 데미지 증가 버프는 어떤 스킬이든 사용하면 소멸하고 윙비트에는 적용되지 않는다.\n\n무조건 드래곤슬래시를 사용해야만 발동할 수 있는데 정작 4차 이후로는 드래곤슬래시를 안 쓴다.\n발동하고 난 후 쓰는 공격 스킬 1회에만 적용된다. 아란이나 데몬슬레이어의 리메인타임 리인포스와 달리 일정 시간 지속이 아니다.\n드래곤슬래시는 평타 판정이라서 최종 데미지 증가 효과를 받지 못한다.\n특정 스킬을 커맨드로 발동할 시 부득이하게 섞어 써야 하지만 그 스킬들은 대부분 4차부터 사용하지 않는다.\n파이널 피규레이션 상태에서는 사용 불가.\n윙비트에는 최종 데미지가 적용되지 않는다. 윙비트를 연속으로, 빠르게 쓰기 위해서는 커맨드 연계를 쓰는 게 제격인데, 정작 커맨드 연계를 써야 할 스킬에 적용되지 않는다.";
            break;
        case 9:
            rep = "공격키를 연타하여 전방 다수의 적을 연속 공격한다. 최대 3타까지 공격 가능하며, 파이널 피규레이션 상태에서 기본 공격키로 사용할 수 있다.\n\n1타 : 최대 8명의 적을 70%의 데미지로 3번 공격\n2타 : 최대 6명의 적을 50%의 데미지로 5번 공격\n3타 : 최대 6명의 적을 60%의 데미지로 5번 공격\n파이널 피규레이션 : 최대 8명의 적을 160% 데미지로 5번 공격, 4차 이후 최대 10명의 적을 6번 공격";
            break;
        case 16:
            rep = "사용하고 있는 검을 3개 소환한다. 소환된 검은 궤적을 그리며 몬스터를 찾아가 타격한다. 검은 최대 HP가 가장 높은 적을 우선하여 추적한다.\n\nMP 30 소비, 장비중인 무기의 분신 3개 소환, 소환 후 한 번 더 스킬 사용 시 각각의 무기는 적에게 날아가 꽂히며 300%의 데미지로 3번 공격\n재사용 대기시간 10초\n파이널 피규레이션 : 공격횟수 1회 증가";
            break;
        case 22:
            rep = "회오리 바람을 일으켜 지정된 횟수만큼 몬스터가 사망할때 까지 타격한다. 일정 거리 이상 이동하거나 일정 시간 이상 유지되면 소멸한다.\n윙비트는 공격 반사 상태의 적을 공격해도 피해를 입지 않는다. 최대 2개까지 존재할 수 있다.\n\nMP 35 소비, 200%의 데미지로 40번 공격, 타격받은 몬스터에게 40% 확률로 슬로우\n공격 횟수를 모두 채우거나 일정 거리를 이동 또는 일정 시간(15초)이 지나면 소멸한다.";
            break;
        case 24:
            rep = "카이저 전사로 각성한다. 모프 게이지가 가득 차 있어야 사용할 수 있다.\n파이널 피규레이션 상태에서는 공격 무시 및 공격 반사 상태의 적에게도 피해를 입힐 수 있으며 파이널 피규레이션 스킬을 다시 사용하여 텔레포트 스킬을 사용할 수 있다. 파이널 피규레이션 상태가 종료될 때 모프 게이지를 모두 소비한다.\n\nMP 40 소비, 60초 동안 최종 데미지 10%, 스탠스 확률 100% 증가. 공격 무시 및 공격 반사 상태의 적에게도 피해를 입힘\n4차 전직 이후 변경점 : 최종 데미지 증가량 15%로 증가";
            break;
        case 33:
            rep = "빠르게 검을 휘둘러 검기를 방출하여 적을 공격한다. 보스를 포함한 모든 적은 기가슬래셔에 맞을 때 슬로우 상태가 된다.\n커맨드 스킬 : 공격 도중 + 기가 슬래셔\n\nMP 50 소비, 1명의 적을 360% 데미지로 9번 공격\n파이널 피규레이션 : MP 60 소비, 3명의 적을 360% 데미지로 11번 공격";
            break;
        case 35:
            rep = "여러 개의 검을 소환하여 내려꽂으면서 적을 공격한다. 검들은 폭발하여 추가로 공격한다.\n커맨드 스킬 : 공격 도중 + ↓커맨드\n\nMP 45 소비, 최대 12명의 적을 300% 데미지로 5번 공격. 추가로 검들이 폭발하면서 12명의 적을 225% 데미지로 4번 추가 공격";
            break;
        case 36:
            rep = "고대의 용을 불러내서 화염을 쏟아내 강력한 공격을 하고 화염 불길에 남아 있는 몬스터는 지속적으로 데미지를 받는다. 화염 불길은 공격 반사 상태의 적을 공격해도 피해를 입지 않는다.\n\nMP 70 소비, 최대 15명의 적에게 300% 데미지로 8번 공격 후 화염 불길 수개 생성\n화염 불길은 20초 동안 일정 간격으로 최대 6명의 적을 200% 데미지로 공격\n\n재사용 대기시간 20초";
            break;
        case 37:
            rep = "윌 오브 소드 스킬을 강화한다. 사용하고 있는 검을 5개 소환하고, 소환된 검은 궤적을 그리며 몬스터를 찾아가 타격한다. 추가로 영구히 공격력을 증가시킨다.\n\nMP 60 소비, 장비중인 무기의 분신 5개 소환, 소환 후 한 번 더 스킬 사용 시 각각의 무기는 적에게 날아가 꽂히며 450%의 데미지로 4번 공격\n재사용 대기시간 10초\n영구적으로 공격력 20 증가\n파이널 피규레이션 : 공격횟수 1회 증가";
            break;
        case 38:
            rep = "튼튼한 무형의 갑옷을 생성해 피해를 감소시킨다. 로버스트 아머는 버프 지속시간 증가 및 재사용 대기시간 초기화의 효과를 받지 않는다.\n\n최대 MP의 10% 소비, 15초 동안 최대 HP의 일정 비율로 피해를 입히는 공격을 포함한 피격 데미지 12% 감소\n재사용 대기시간 120초\n\n[패시브 효과 : 피격 데미지 20% 감소, 스탠스 60% 증가]";
            break;
        case 42:
            rep = "선대 카이저가 용기와 의지를 북돋아주어 재사용 대기시간이 초기화되면서 공격 속도와 공격력이 증가하고, 공격 무시 및 공격 반사 상태의 적에게도 피해를 입히는 상태가 된다.\n\nMP 300 소비, 재사용 대기시간 초기화. 30초 동안 공격력 30, 공격 속도 1단계 증가. 공격 무시 및 공격 반사 상태의 적에게도 피해를 입힘\n재사용 대기시간 90초. 하이퍼 스킬의 재사용 시간은 초기화되지 않음.";
            break;
        case 44:
            rep = "사용하는 즉시 모프 게이지를 가득 채우며 파이널 피규레이션 상태로 변신한다.\n파이널 트랜스로 변신한 파이널 피규레이션 상태가 종료될 때 변신하기 전 보유했던 만큼 모프 게이지가 회복된다.\n파이널 트랜스로 변신한 파이널 피규레이션 상태는 버프 지속 시간 증가 효과의 영향을 받지 않는다.\n\nMP 300 소비, 60초 동안 파이널 피규레이션 상태로 변신\n재사용 대기시간 300초";
            break;
        case 45:
            rep = "";
            break;
    }
    return rep;
};
skk.getskillimage1Kaiser = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "https://i.imgur.com/O5rvqYW.png";
            break;
        case 1:
            rep = "https://i.imgur.com/xSHnygV.png";
            break;
        case 2:
            rep = "https://i.imgur.com/B6ArNlv.png";
            break;
        case 3:
            rep = "https://i.imgur.com/Iu6GeYB.png";
            break;
        case 4:
            rep = "";
            break;
        case 5:
            rep = "";
            break;
        case 6:
            rep = "https://i.imgur.com/FjgQ7i7.png";
            break;
        case 7:
            rep = "https://i.imgur.com/iMK9HWr.png";
            break;
        case 8:
            rep = "https://i.imgur.com/P5fDeD5.png";
            break;
        case 9:
            rep = "https://i.imgur.com/8QTo8Yz.png";
            break;
        case 10:
            rep = "https://i.imgur.com/Bd6ZgjH.png";
            break;
        case 11:
            rep = "https://i.imgur.com/U0GnpG2.png";
            break;
        case 12:
            rep = "";
            break;
        case 13:
            rep = "https://i.imgur.com/2XxDnCZ.png";
            break;
        case 14:
            rep = "https://i.imgur.com/VmGKzzU.png";
            break;
        case 15:
            rep = "https://i.imgur.com/fLULv5e.png";
            break;
        case 16:
            rep = "https://i.imgur.com/4mAgBKw.png";
            break;
        case 17:
            rep = "https://i.imgur.com/mDaYQfr.png";
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
            rep = "https://i.imgur.com/T7nZeSS.png";
            break;
        case 22:
            rep = "https://i.imgur.com/Xiblh8z.png";
            break;
        case 23:
            rep = "https://i.imgur.com/nfqZkie.png";
            break;
        case 24:
            rep = "https://i.imgur.com/ZBVMM5Q.png";
            break;
        case 25:
            rep = "https://i.imgur.com/V5ijd4x.png";
            break;
        case 26:
            rep = "https://i.imgur.com/wKUiLdi.png";
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
            rep = "https://i.imgur.com/TP6zMzi.png";
            break;
        case 33:
            rep = "https://i.imgur.com/8Hk8ffL.png";
            break;
        case 34:
            rep = "https://i.imgur.com/8ApUZzN.png";
            break;
        case 35:
            rep = "https://i.imgur.com/D1KTNSU.png";
            break;
        case 36:
            rep = "https://i.imgur.com/hgMJwsL.png";
            break;
        case 37:
            rep = "";
            break;
        case 38:
            rep = "https://i.imgur.com/sv19KGn.png";
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
            rep = "https://i.imgur.com/XD73WML.png";
            break;
        case 43:
            rep = "https://i.imgur.com/ZQP612i.png";
            break;
        case 44:
            rep = "https://i.imgur.com/h9ZH5aO.png";
            break;
        case 45:
            rep = "";
            break;
    }
    return rep;
};
skk.getskillimage2Kaiser = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "https://i.imgur.com/Z2n9OVl.png";
            break;
        case 1:
            rep = "https://i.imgur.com/VSYO6r8.png";
            break;
        case 2:
            rep = "https://i.imgur.com/k0bhwea.png";
            break;
        case 3:
            rep = "https://i.imgur.com/YflkwNg.png";
            break;
        case 4:
            rep = "https://i.imgur.com/Op8yvjV.png";
            break;
        case 5:
            rep = "https://i.imgur.com/pp26VHo.png";
            break;
        case 6:
            rep = "https://i.imgur.com/Bhgpbf1.png";
            break;
        case 7:
            rep = "https://i.imgur.com/i3wA6nF.png";
            break;
        case 8:
            rep = "https://i.imgur.com/QClOpN7.png";
            break;
        case 9:
            rep = "https://i.imgur.com/YiMdDMx.png";
            break;
        case 10:
            rep = "https://i.imgur.com/CIy9tLT.png";
            break;
        case 11:
            rep = "https://i.imgur.com/ga2PaJl.png";
            break;
        case 12:
            rep = "https://i.imgur.com/npIhf5m.png";
            break;
        case 13:
            rep = "https://i.imgur.com/vft7f6l.png";
            break;
        case 14:
            rep = "https://i.imgur.com/tZtO7vr.png";
            break;
        case 15:
            rep = "https://i.imgur.com/e8RVcFl.png";
            break;
        case 16:
            rep = "https://i.imgur.com/X4dWclx.png";
            break;
        case 17:
            rep = "https://i.imgur.com/UDIfX67.png";
            break;
        case 18:
            rep = "https://i.imgur.com/pnlfGGy.png";
            break;
        case 19:
            rep = "https://i.imgur.com/QvRDeXz.png";
            break;
        case 20:
            rep = "https://i.imgur.com/FmguI86.png";
            break;
        case 21:
            rep = "https://i.imgur.com/ofsXoZD.png";
            break;
        case 22:
            rep = "https://i.imgur.com/JTthCdu.png";
            break;
        case 23:
            rep = "https://i.imgur.com/rpxp5uH.png";
            break;
        case 24:
            rep = "https://i.imgur.com/uEiw14I.png";
            break;
        case 25:
            rep = "https://i.imgur.com/8xeeqVg.png";
            break;
        case 26:
            rep = "https://i.imgur.com/DYj3Eck.png";
            break;
        case 27:
            rep = "https://i.imgur.com/dVBsD87.png";
            break;
        case 28:
            rep = "https://i.imgur.com/CuZX5xA.png";
            break;
        case 29:
            rep = "https://i.imgur.com/UQyZF6j.png";
            break;
        case 30:
            rep = "https://i.imgur.com/8zxhylM.png";
            break;
        case 31:
            rep = "https://i.imgur.com/8ZHr3Bx.png";
            break;
        case 32:
            rep = "https://i.imgur.com/wvOH5qt.png";
            break;
        case 33:
            rep = "https://i.imgur.com/04cA4pX.png";
            break;
        case 34:
            rep = "https://i.imgur.com/1oqyxep.png";
            break;
        case 35:
            rep = "https://i.imgur.com/sAf3Q3k.png";
            break;
        case 36:
            rep = "https://i.imgur.com/YArUXnd.png";
            break;
        case 37:
            rep = "https://i.imgur.com/acH9Vtx.png";
            break;
        case 38:
            rep = "https://i.imgur.com/KqboWy6.png";
            break;
        case 39:
            rep = "https://i.imgur.com/epm95la.png";
            break;
        case 40:
            rep = "https://i.imgur.com/TqwzJR5.png";
            break;
        case 41:
            rep = "https://i.imgur.com/2AgOmYv.png";
            break;
        case 42:
            rep = "https://i.imgur.com/KbKjYOB.png";
            break;
        case 43:
            rep = "https://i.imgur.com/DRt3FQp.png";
            break;
        case 44:
            rep = "https://i.imgur.com/IOY6EBi.png";
            break;
        case 45:
            rep = "";
            break;
    }
    return rep;
};

module.exports = skk;