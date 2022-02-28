const skab = {};

skab.getskillAngelicbuster = function (skillname){
    var abret = -1;
    switch(skillname){
        case "에너지 버스트":
        case "에너지버스트":
        case "에버":
            abret = 0;
            break;
        case "스포트라이트":
        case "스포트☆라이트":
        case "스포트★라이트":
        case "Spot☆Light":
        case "Spot★Light":
        case "Spotlight":
            abret = 1;
            break;
        case "마스코트 패밀리어":
        case "마스코트패밀리어":
        case "마스코트":
        case "패밀리어":
        case "마패":
            abret = 2;
            break;
        case "트리니티 퓨전":
        case "트리니티퓨전":
        case "트퓨":
            abret = 3;
            break;
        case "석세서":
        case "평타":
        case "기본공격":
            abret = 4;
            break;
        case "매지컬 리프트":
        case "매지컬리프트":
        case "리프트":
        case "매리":
        case "로프 커넥트":
        case "로프커넥트":
            abret = 5;
            break;
        case "소울 컨트랙트":
        case "소울컨트랙트":
        case "엔버링크":
        case "링크 스킬":
        case "링크스킬":
        case "링크":
            abret = 6;
            break;
        case "매지컬 시프트":
        case "매지컬시프트":
        case "더블 점프":
        case "더블점프":
        case "윗점":
            abret = 7;
            break;
        case "어피니티 I":
        case "어피니티I":
        case "어피 I":
        case "어피I":
        case "어피니티 1":
        case "어피니티1":
        case "어피 1":
        case "어피1":
            abret = 8;
            break;
        case "핑크 스커드":
        case "핑크스커드":
        case "핑스":
        case "밀격":
            abret = 9;
            break;
        case "파워 트랜스퍼":
        case "파워트랜스퍼":
        case "파트":
            abret = 10;
            break;
        case "어피니티 II":
        case "어피니티II":
        case "어피 II":
        case "어피II":
        case "어피니티 2":
        case "어피니티2":
        case "어피 2":
        case "어피2":
            abret = 11;
            break;
        case "소울 시커":
        case "소울시커":
        case "소시":
        case "시커":
            abret = 12;
            break;
        case "아이언 로터스":
        case "아이언로터스":
        case "로터스":
        case "아로":
        case "연꽃":
            abret = 13;
            break;
        case "콜 오브 에인션트":
        case "콜오브 에인션트":
        case "콜오브에인션트":
        case "콜오에":
            abret = 14;
            break;
        case "이너 피스":
        case "이너피스":
            abret = 15;
            break;
        case "어피니티 III":
        case "어피니티III":
        case "어피 III":
        case "어피III":
        case "어피니티 3":
        case "어피니티3":
        case "어피 3":
        case "어피3":
            abret = 16;
            break;
        case "프라이멀 로어":
        case "프라이멀로어":
        case "로어":
        case "프로":
            abret = 17;
            break;
        case "트리니티":
        case "트리":
            abret = 18;
            break;
        case "피니투라 페투치아":
        case "피니투라페투치아":
        case "피니페투":
        case "피투페치":
        case "피페":
        case "피니투라":
        case "페투치아":
            abret = 19;
            break;
        case "소울 레조넌스":
        case "소울레조넌스":
        case "레조넌스":
        case "레조":
        case "소레":
            abret = 20;
            break;
        case "소울 게이즈":
        case "소울게이즈":
        case "게이즈":
        case "소게":
            abret = 21;
            break;
        case "어피니티 IV":
        case "어피니티IV":
        case "어피 IV":
        case "어피IV":
        case "어피니티 4":
        case "어피니티4":
        case "어피 4":
        case "어피4":
            abret = 22;
            break;
        case "소울 시커 엑스퍼트":
        case "소울시커 엑스퍼트":
        case "소울시커엑스퍼트":
        case "시커 엑스퍼트":
        case "시커엑스퍼트":
        case "소시엑":
            abret = 23;
            break;
        case "소울 익절트":
        case "소울익절트":
        case "익절트":
        case "소익":
            abret = 24;
            break;
        case "슈퍼 노바":
        case "슈퍼노바":
        case "슈노":
            abret = 25;
            break;
        case "파이널 컨트랙트":
        case "파이널컨트랙트":
        case "파컨":
            abret = 26;
            break;
        case "":
            abret = 27;
            break;
        case "":
            abret = 28;
            break;
        case "":
            abret = 29;
            break;
    }
    return abret;
};
skab.getskillnameAngelicbuster = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "에너지 버스트";
            break;
        case 1:
            rep = "스포트라이트";
            break;
        case 2:
            rep = "마스코트 패밀리어";
            break;
        case 3:
            rep = "트리니티 퓨전";
            break;
        case 4:
            rep = "석세서";
            break;
        case 5:
            rep = "매지컬 리프트";
            break;
        case 6:
            rep = "소울 컨트랙트";
            break;
        case 7:
            rep = "매지컬 시프트";
            break;
        case 8:
            rep = "어피니티 I";
            break;
        case 9:
            rep = "핑크 스커드";
            break;
        case 10:
            rep = "파워 트랜스퍼";
            break;
        case 11:
            rep = "어피니티 II";
            break;
        case 12:
            rep = "소울 시커";
            break;
        case 13:
            rep = "아이언 로터스";
            break;
        case 14:
            rep = "콜 오브 에인션트";
            break;
        case 15:
            rep = "이너 피스";
            break;
        case 16:
            rep = "어피니티 III";
            break;
        case 17:
            rep = "프라이멀 로어";
            break;
        case 18:
            rep = "트리니티";
            break;
        case 19:
            rep = "피니투라 페투치아";
            break;
        case 20:
            rep = "소울 레조넌스";
            break;
        case 21:
            rep = "소울 게이즈";
            break;
        case 22:
            rep = "어피니티 IV";
            break;
        case 23:
            rep = "소울 시커 엑스퍼트";
            break;
        case 24:
            rep = "소울 익절트";
            break;
        case 25:
            rep = "슈퍼 노바";
            break;
        case 26:
            rep = "파이널 컨트랙트";
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
    }
    return rep;
};
skab.getskilldesc1Angelicbuster = function (skillcode){
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
            rep = "공격 키를 누르고 있으면 지속적으로 공격이 가능";
            break;
        case 5:
            rep = "사용 시 가장 가까운 위쪽 지형으로 이동";
            break;
        case 6:
            rep = "발동 시 10초 동안 스킬 데미지 90% 증가";
            break;
        case 7:
            rep = "발동 중 좌우 원하는 방향으로 한 번 더 시전 가능";
            break;
        case 8:
            rep = "리차지 확률이 30% 만큼 증가";
            break;
        case 9:
            rep = "12명의 적을 480% 데미지로 1번 공격하며 이동";
            break;
        case 10:
            rep = "180초간 데미지 1% 흡수, 50%만큼 보호막 생성";
            break;
        case 11:
            rep = "적을 10마리 처치할 때마다 100% 확률로 리차지 성공";
            break;
        case 12:
            rep = "하단 참조";
            break;
        case 13:
            rep = "스탠스 확률 40% 증가, 민첩 20 증가";
            break;
        case 14:
            rep = "공격력 40 증가";
            break;
        case 15:
            rep = "최대 HP 1000, 방어력 1000 증가";
            break;
        case 16:
            rep = "리차지 연속 2번 실패시 다음 리차지 성공 확률 100% 증가";
            break;
        case 17:
            rep = "8명의 적을 580% 데미지로 4번 공격/ 리차지 성공 확률 40%";
            break;
        case 18:
            rep = "하단 참조";
            break;
        case 19:
            rep = "하단 참조";
            break;
        case 20:
            rep = "하단 참조";
            break;
        case 21:
            rep = "180초 동안 크리티컬 데미지 45% 증가.";
            break;
        case 22:
            rep = "리차지 실패 시 한 번 더 시도(시도할 확률 100%)";
            break;
        case 23:
            rep = "하단 참조";
            break;
        case 24:
            rep = "30초 동안 방어무시비율 30%, 보스몬스터공격 시 데미지 20%";
            break;
        case 25:
            rep = "12초간 매 공격마다 15명, 600%의 데미지로 3번 공격";
            break;
        case 26:
            rep = "30초간 공격력 50, 크리티컬 확률 30%, 상태 이상 내성 100";
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
    }
    return rep;
};
skab.getskilldesc2Angelicbuster = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "광범위 공격기 겸 무적기";
            break;
        case 1:
            rep = "광범위 공격기 겸 액티브 버프";
            break;
        case 2:
            rep = "최소 61600% ~ 최대 123200%";
            break;
        case 3:
            rep = "트리니티의 강화판이자 다수 공격기";
            break;
        case 4:
            rep = "3명의 적에게 60% 데미지로 공격/ 리차지 성공 확률 20%";
            break;
        case 5:
            rep = "이동 도중 점프 키를 눌러 캔슬 가능";
            break;
        case 6:
            rep = "재사용 대기시간 90초. 링크 스킬로 사용 시 효과가 절반";
            break;
        case 7:
            rep = "위 방향키와 함께 사용해 위 방향으로도 이동할 수 있다.";
            break;
        case 8:
            rep = "이동속도 40, 점프력 20 증가. 이동속도 제한 25만큼 증가.";
            break;
        case 9:
            rep = "리차지 성공 확률 20%";
            break;
        case 10:
            rep = "시전 시 1000의 보호막 생성/ 최대치 99999";
            break;
        case 11:
            rep = "상태 이상 내성 40, 모든 속성 내성 40% 증가";
            break;
        case 12:
            rep = "시커 원킬 시 압도적인 사냥 성능";
            break;
        case 13:
            rep = "-";
            break;
        case 14:
            rep = "-";
            break;
        case 15:
            rep = "스탠스 60% 증가";
            break;
        case 16:
            rep = "민첩 40, 데미지 20% 증가";
            break;
        case 17:
            rep = "공격 당한 적은 90% 확률로 3초 동안 기절";
            break;
        case 18:
            rep = "\"셋이 모여 백만 파워!\"";
            break;
        case 19:
            rep = "\"사랑과 정의의 리본으로!\"";
            break;
        case 20:
            rep = "무적을 겸함 지속형 공격기";
            break;
        case 21:
            rep = "-";
            break;
        case 22:
            rep = "리차지 성공시 50%확률 데미지30% 버프 5초간 유지";
            break;
        case 23:
            rep = "온오프 스킬";
            break;
        case 24:
            rep = "소울 시커 엑스퍼트 발동확률 15% 증가/ 쿨120초";
            break;
        case 25:
            rep = "재사용 대기시간 60초/ 설치형";
            break;
        case 26:
            rep = "모든 속성 내성 100% 증가/ 재사용 대기시간 120초";
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
    }
    return rep;
};
skab.getskilldesc3Angelicbuster = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "미지의 힘을 담은 에너지체를 소환한다.\n\n소환 후 30초가 지나거나 스킬을 다시 사용하면 폭발하여 최대 15명의 적을 990%의 데미지로 15번 공격하고 6초 동안 무적 버프를 주는 에너지체 소환\n\n석세서를 제외한 공격 스킬로 적을 공격하여 나오는 미지의 힘으로 에너지체의 위력과 무적 버프의 지속시간을 최대 2단계 증가시킬 수 있으며 단계마다 최종 데미지 100%, 무적 버프 지속시간 2초 증가\n\n재사용 대기시간 : 120초";
            break;
        case 1:
            rep = "슈퍼스타만을 따라다니는 화려한 조명을 설치한다. 슈퍼스타만이 조명 아래 서는 것이 허락되므로 조명 안의 적은 피해를 입고 슈퍼스타의 능력은 강화된다. 공격 반사 상태의 적을 공격해도 피해를 입지 않는다.\n\n30초 동안 엔젤릭버스터를 비추는 조명 3개 설치, 각 조명은 일정 주기마다 영역 안에 있는 최대 15명의 적을 880%의 데미지로 3번 공격\n영역 안에 엔젤릭버스터가 있다면 상태 이상 내성 26, 크리티컬 확률 16%, 최종 데미지 6% 증가\n버프는 각 조명마다 별도로 적용되어 최대 3회까지 중첩 가능하며 중첩되는 조명의 최종 데미지 간에는 합적용\n\n재사용 대기시간 120초\n\n시간을 멈출 수는 없지만\n언제나 함께 할 수 있어\n지나가 버린 시간이라도\n영원히 기억할 거야\n\nSpread your Wings and Fly Away\n날개를 활짝 펴고(Dress☆UP!)\nSpread your Wings and Fly Away\n이 세상 다하는 그날까지...\nDress☆UP";
            break;
        case 2:
            rep = "에스카다를 마법소녀의 필수 요소인 마스코트 캐릭터로 강제 변신시킨다. 공격 반사 상태의 적을 공격해도 피해를 입지 않는다.\n\n36초 동안 지속되며 리차지가 성공했을 때 최대 6명의 적을 1320%의 데미지로 5번 공격하는 트윙클 스타 혹은 매지컬 벌룬 사용, 이미 다른 행동을 하고 있다면 사용하지 않음\n\n트윙클 스타나 매지컬 버블 사용 혹은 8초마다 매지컬 버블을 1개 획득하고 최대 8개까지 소지 가능\n스킬을 한번 더 사용하면 3초 동안 최대 10명의 적을 550%의 데미지로 8번 공격하는 샤이니 버블 브레스 시전, 사용 시 매지컬 버블을 모두 소모하며 버블 1개당 지속시간 0.4초 증가, 소환 중 1회만 사용가능하고 시전 중 소환 지속시간이 종료되었어도 끝까지 사용한 후 소멸\n\n재사용 대기시간 120초";
            break;
        case 3:
            rep = "에스카다의 응축된 힘을 일시에 분출한다. 아래 방향키와 함께 트리니티를 사용하면 발동할 수 있고 트리니티 사용 중에도 발동할 수 있다.\n시전 동작 중 어떠한 공격에도 밀려나지 않으며 피격 데미지가 감소한다. 트리니티 퓨전은 공격 반사 상태의 적을 공격해도 피해를 입지 않고 트리니티 적중 시 중첩되는 데미지 증가 및 방어율 무시 버프가 적용된다.\n\n최대 8명의 적을 360%의 데미지로 3번 공격하는 용의 기운 9번 발동\n시전 동작 중 최대 HP의 일정 비율로 피해를 입히는 공격을 포함한 피격 데미지의 20% 감소\n\n재사용 대기시간 : 13초\n[패시브 효과 : 민첩 40 증가]";
            break;
        case 12:
            rep = "에스카다가 가진 힘의 정수를 뽑아 적에게 날린다. 힘의 정수는 최대 횟수를 채우거나 사라지기 전까지 적에게 지속적으로 피해를 입힌다.\n소울 시커는 공격 반사 상태의 적을 공격해도 피해를 입지 않으며 최대 HP가 높은 보스 몬스터를 우선 추적한다.\n\n2개의 정수가 생성되어 범위 내 2명의 적을 랜덤하게 타격. 각 정수 당 320%의 데미지로 1번 공격. 85% 확률로 정수가 재생성되고 최대 7번까지 공격. 소울 리차지 스킬. 리차지 성공 확률 30%";
            break;
        case 18:
            rep = "에스카다의 힘을 응축하여 한 명의 적을 연속적으로 휩쓴다. 추가로 데미지와 방어율 무시가 증가한다.\n\n1명의 적에게 720% 데미지로 2번 공격. 이후 추가 조작으로 최대 3타까지 공격 가능하고 2타는 3번, 3타는 4번 공격.\n트리니티 적중 시 트리니티와 트리니티 퓨전의 데미지 및 방어율 무시 10% 증가 버프가 최대 3회 중첩. 소울 리차지 스킬. 리차지 성공 확률 50%\n\n[패시브 효과 : 최종 데미지 25% 증가, 방어율 무시 15% 증가]";
            break;
        case 19:
            rep = "사랑과 정의의 힘이 담긴 리본을 휘둘러 주변의 모든 적을 휘몰아친다.\n\n10명의 적에게 400% 데미지로 10번 공격. 공격 당한 적에게 20초 동안 엔젤릭버스터의 최종 데미지 25%, 다른 직업 파티원의 데미지 20% 증가하는 디버프 발생\n재사용 대기시간 40초. 리차지 성공 확률 50%";
            break;
        case 20:
            rep = "에스카다의 영혼과 공명하여 그 모습을 현실로 드러낸다. 공명을 시작한 후 완성되기 전까지는 에스카다의 가호로 어떠한 피해도 입지 않는다. 소울 레조넌스를 취소하면 무적 효과는 사라진다. 소울 레조넌스를 시전하는 동안에는 적의 어떠한 공격에도 밀려나지 않는다.\n\n키다운 스킬. 시전 후 2초 동안 무적. 최대 10명의 적에게 146% 데미지로 5번 지속 공격. 최대 8초 동안 키다운 가능. 지속 시간에 비례하여 최대 600%의 데미지로 5번 공격하는 피니시 공격. 보스 몬스터 공격 시 데미지 50% 증가\n사용 중 최대 HP의 일정 비율로 피해를 입히는 공격을 포함한 피격 데미지 35% 감소\n\n재사용 대기시간 60초.";
            break;
        case 23:
            rep = "석세서, 소울 시커 및 소환수를 제외한 자신의 공격 스킬 적중 시 일정 확률로 소울 시커가 소환된다.\n소울 시커는 최대 HP가 높은 보스 몬스터를 우선 추적한다.\n\n석세서와 소울 시커를 제외한 엔젤릭버스터의 스킬로 공격 시 35% 확률로 소울 시커가 소환됨. 프라이멀 로어 사용 시 발동 확률 15% 추가.\n소환된 소울 시커는 직접 사용할 때와 비교하여 75%의 공격력만 가짐.";
            break;
        case 9:
            rep = "";
            break;
    }
    return rep;
};
skab.getskillimage1Angelicbuster = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "https://i.imgur.com/UeHyf4A.png";
            break;
        case 1:
            rep = "https://i.imgur.com/ljTcRlw.png";
            break;
        case 2:
            rep = "https://i.imgur.com/7bRKYZq.png";
            break;
        case 3:
            rep = "https://i.imgur.com/X55PFGK.png";
            break;
        case 4:
            rep = "https://i.imgur.com/xkdbk0P.png";
            break;
        case 5:
            rep = "https://i.imgur.com/8V9nKut.png";
            break;
        case 6:
            rep = "https://i.imgur.com/fYuxVqt.png";
            break;
        case 7:
            rep = "https://i.imgur.com/XigXzpx.png";
            break;
        case 8:
            rep = "";
            break;
        case 9:
            rep = "https://i.imgur.com/8XCSdMa.png";
            break;
        case 10:
            rep = "https://i.imgur.com/zDvuSde.png";
            break;
        case 11:
            rep = "";
            break;
        case 12:
            rep = "https://i.imgur.com/l18jOIH.png";
            break;
        case 13:
            rep = "https://i.imgur.com/El8j6NV.png";
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
            rep = "https://i.imgur.com/nedkxcV.png";
            break;
        case 18:
            rep = "https://i.imgur.com/CKO2kIt.png";
            break;
        case 19:
            rep = "https://i.imgur.com/bxChXh0.png";
            break;
        case 20:
            rep = "https://i.imgur.com/6slSbtF.png";
            break;
        case 21:
            rep = "https://i.imgur.com/EnMXeiQ.png";
            break;
        case 22:
            rep = "";
            break;
        case 23:
            rep = "";
            break;
        case 24:
            rep = "https://i.imgur.com/QGKiEeI.png";
            break;
        case 25:
            rep = "https://i.imgur.com/Vs9Fl7Q.png";
            break;
        case 26:
            rep = "https://i.imgur.com/OpFu50m.png";
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
    }
    return rep;
};
skab.getskillimage2Angelicbuster = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "https://i.imgur.com/pjAhXer.png";
            break;
        case 1:
            rep = "https://i.imgur.com/pe7wn8b.png";
            break;
        case 2:
            rep = "https://i.imgur.com/ItKID3a.png";
            break;
        case 3:
            rep = "https://i.imgur.com/PBJOjR6.png";
            break;
        case 4:
            rep = "https://i.imgur.com/eTRcftO.png";
            break;
        case 5:
            rep = "https://i.imgur.com/o5RfnpP.png";
            break;
        case 6:
            rep = "https://i.imgur.com/gfZgvSs.png";
            break;
        case 7:
            rep = "https://i.imgur.com/44SvBWP.png";
            break;
        case 8:
            rep = "https://i.imgur.com/YGEB27G.png";
            break;
        case 9:
            rep = "https://i.imgur.com/x3klMKB.png";
            break;
        case 10:
            rep = "https://i.imgur.com/Bd3gt9j.png";
            break;
        case 11:
            rep = "https://i.imgur.com/8PWwmQ5.png";
            break;
        case 12:
            rep = "https://i.imgur.com/nPUzBHp.png";
            break;
        case 13:
            rep = "https://i.imgur.com/bErMQDv.png";
            break;
        case 14:
            rep = "https://i.imgur.com/dfm4EjW.png";
            break;
        case 15:
            rep = "https://i.imgur.com/QRpM0Pc.png";
            break;
        case 16:
            rep = "https://i.imgur.com/TjYfAEp.png";
            break;
        case 17:
            rep = "https://i.imgur.com/keVTEYy.png";
            break;
        case 18:
            rep = "https://i.imgur.com/gzTOev0.png";
            break;
        case 19:
            rep = "https://i.imgur.com/KI0DmTu.png";
            break;
        case 20:
            rep = "https://i.imgur.com/gFMskKz.png";
            break;
        case 21:
            rep = "https://i.imgur.com/OVQvsrL.png";
            break;
        case 22:
            rep = "https://i.imgur.com/6sxlnF6.png";
            break;
        case 23:
            rep = "https://i.imgur.com/GALX7sT.png";
            break;
        case 24:
            rep = "https://i.imgur.com/gMNanZQ.png";
            break;
        case 25:
            rep = "https://i.imgur.com/9ds9mm0.png";
            break;
        case 26:
            rep = "https://i.imgur.com/GWxxC4h.png";
            break;
        case 28:
            rep = "";
            break;
        case 29:
            rep = "";
            break;
    }
    return rep;
};

module.exports = skab;