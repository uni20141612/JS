const skcs = {};

skcs.getskillCannonshooter = function (skillname){
    var csret = -1;
    switch(skillname){
        case "빅 휴즈 기간틱 캐논볼":
        case "빅휴즈기간틱캐논볼":
        case "빅휴즈":
        case "기간틱캐논볼":
        case "빅휴":
        case "기간틱":
        case "캐논볼":
            csret = 0;
            break;
        case "ICBM":
        case "icbm":
        case "아씨비엠":
        case "아이씨비엠":
            csret = 1;
            break;
        case "스페셜 몽키 에스코트":
        case "스페셜몽키에스코트":
        case "스페셜몽키":
        case "에스코트":
        case "스몽에":
        case "스몽":
            csret = 2;
            break;
        case "풀 메이커":
        case "풀메이커":
        case "풀메":
            csret = 3;
            break;
        case "기간틱 백스텝":
        case "기간틱백스텝":
        case "기간틱":
        case "백스텝":
            csret = 4;
            break;
        case "캐논 리프":
        case "캐논리프":
        case "더블 점프":
        case "더블점프":
            csret = 5;
            break;
        case "몽키와 함께라면!":
        case "몽키와함께라면!":
        case "몽키와 함께라면":
        case "몽키와함께라면":
        case "몽키":
            csret = 6;
            break;
        case "캐논 점프":
        case "캐논점프":
        case "윗점":
            csret = 7;
            break;
        case "몽키 러쉬붐":
        case "몽키러쉬붐":
        case "러쉬붐":
            csret = 8;
            break;
        case "몽키 매직":
        case "몽키매직":
        case "몽매":
        case "매직":
            csret = 9;
            break;
        case "크리티컬 파이어":
        case "크리티컬파이어":
            csret = 10;
            break;
        case "미니 캐논볼":
        case "미니캐논볼":
        case "미니":
            csret = 11;
            break;
        case "몽키 퓨리어스":
        case "몽키퓨리어스":
        case "몽퓨":
        case "퓨리어스":
            csret = 12;
            break;
        case "오크통 룰렛":
        case "오크통룰렛":
        case "오크통":
        case "룰렛":
            csret = 13;
            break;
        case "럭키 다이스":
        case "럭키다이스":
        case "다이스":
        case "럭다":
            csret = 14;
            break;
        case "리인포스 캐논":
        case "리인포스캐논":
        case "리인포스":
        case "리캐":
            csret = 15;
            break;
        case "바이탈 익스트림":
        case "바이탈익스트림":
        case "바이탈":
        case "익스트림":
            csret = 16;
            break;
        case "반격의 슈터":
        case "반격의슈터":
        case "반격":
            csret = 17;
            break;
        case "캐논 바주카":
        case "캐논바주카":
        case "바주카":
        case "캐바":
            csret = 18;
            break;
        case "캐논 버스터":
        case "캐논버스터":
        case "버스터":
        case "캐버":
            csret = 19;
            break;
        case "마그네틱 앵커":
        case "마그네틱앵커":
        case "앵커":
        case "마앵":
            csret = 20;
            break;
        case "서포트 몽키 트윈스":
        case "서포트 몽키트윈스":
        case "서포트몽키트윈스":
        case "트윈스":
        case "서포트":
        case "서몽트":
            csret = 21;
            break;
        case "전함 노틸러스":
        case "전함노틸러스":
        case "노틸러스":
        case "전노":
            csret = 22;
            break;
        case "오버버닝 캐논":
        case "오버버닝캐논":
        case "오버버닝":
        case "오캐":
            csret = 23;
            break;
        case "하이퍼 몽키 스펠":
        case "하이퍼 몽키스펠":
        case "하이퍼몽키스펠":
        case "스펠":
        case "하몽스":
            csret = 24;
            break;
        case "더블 럭키 다이스":
        case "더블 럭키다이스":
        case "더블럭키다이스":
        case "더럭다":
            csret = 25;
            break;
        case "파이렛 스피릿":
        case "파이렛스피릿":
        case "스피릿":
        case "파스":
            csret = 26;
            break;
        case "벅 샷":
        case "벅샷":
            csret = 27;
            break;
        case "롤링 캐논 레인보우":
        case "롤링캐논 레인보우":
        case "롤링캐논레인보우":
        case "레인보우":
        case "롤캐레":
            csret = 28;
            break;
        case "":
            csret = 29;
            break;
    }
    return csret;
};
skcs.getskillnameCannonshooter = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "빅 휴즈 기간틱 캐논볼";
            break;
        case 1:
            rep = "ICBM";
            break;
        case 2:
            rep = "스페셜 몽키 에스코트";
            break;
        case 3:
            rep = "풀 메이커";
            break;
        case 4:
            rep = "기간틱 백스텝";
            break;
        case 5:
            rep = "캐논 리프";
            break;
        case 6:
            rep = "몽키와 함께라면!";
            break;
        case 7:
            rep = "캐논 점프";
            break;
        case 8:
            rep = "몽키 러쉬붐";
            break;
        case 9:
            rep = "몽키 매직";
            break;
        case 10:
            rep = "크리티컬 파이어";
            break;
        case 11:
            rep = "미니 캐논볼";
            break;
        case 12:
            rep = "몽키 퓨리어스";
            break;
        case 13:
            rep = "오크통 룰렛";
            break;
        case 14:
            rep = "럭키 다이스";
            break;
        case 15:
            rep = "리인포스 캐논";
            break;
        case 16:
            rep = "바이탈 익스트림";
            break;
        case 17:
            rep = "반격의 슈터";
            break;
        case 18:
            rep = "캐논 바주카";
            break;
        case 19:
            rep = "캐논 버스터";
            break;
        case 20:
            rep = "마그네틱 앵커";
            break;
        case 21:
            rep = "서포트 몽키 트윈스";
            break;
        case 22:
            rep = "전함 노틸러스";
            break;
        case 23:
            rep = "오버버닝 캐논";
            break;
        case 24:
            rep = "하이퍼 몽키 스펠";
            break;
        case 25:
            rep = "더블 럭키 다이스";
            break;
        case 26:
            rep = "파이렛 스피릿";
            break;
        case 27:
            rep = "벅 샷";
            break;
        case 28:
            rep = "롤링 캐논 레인보우";
            break;
        case 29:
            rep = "";
            break;
    }
    return rep;
};
skcs.getskilldesc1Cannonshooter = function (skillcode){
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
            rep = "225% 데미지로 3명의 적 공격";
            break;
        case 5:
            rep = "MP 10 소비, 일정 거리 점프";
            break;
        case 6:
            rep = "캐논슈터의 든든한 조력자 몽키 소환";
            break;
        case 7:
            rep = "290% 데미지로 최대 6명의 적을 공격하며 점프";
            break;
        case 8:
            rep = "70% 데미지로 최대 8명의 적을 3번 공격";
            break;
        case 9:
            rep = "180초 동안 HP 400, MP 400, 올스탯 30";
            break;
        case 10:
            rep = "크리티컬 확률 20%, 크리티컬 데미지 5% 증가";
            break;
        case 11:
            rep = "하단 참조";
            break;
        case 12:
            rep = "하단 참조";
            break;
        case 13:
            rep = "하단 참조";
            break;
        case 14:
            rep = "하단 참조";
            break;
        case 15:
            rep = "최종 데미지 5%, 공격력 40, 공격 속도 1단계 증가";
            break;
        case 16:
            rep = "HP 20%, 방어력 50%";
            break;
        case 17:
            rep = "최종 데미지 5% 증가";
            break;
        case 18:
            rep = "545%의 데미지로 최대 8명의 적을 4번 공격";
            break;
        case 19:
            rep = "MP 63 소비, 750% 데미지로 4번 공격";
            break;
        case 20:
            rep = "60초간, 주기적으로 460%의 데미지, 끌어당김";
            break;
        case 21:
            rep = "60초 동안 소환, 각각 295% 데미지로 공격";
            break;
        case 22:
            rep = "510% 데미지로 최대 15명의 적을 5번 공격";
            break;
        case 23:
            rep = "최종 데미지 30%, 공격 속도 1단계 증가";
            break;
        case 24:
            rep = "(몽키매직 대체) 180초 동안 HP 1000, MP 1000";
            break;
        case 25:
            rep = "하단 참조";
            break;
        case 26:
            rep = "스탠스 확률 80% 증가, 반격확률 15%";
            break;
        case 27:
            rep = "하단 참조";
            break;
        case 28:
            rep = "설치형 스킬/ 범위 내 10명의 적에게 600% 데미지로";
            break;
        case 29:
            rep = "";
            break;
    }
    return rep;
};
skcs.getskilldesc2Cannonshooter = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "설치형 광범위 공격기";
            break;
        case 1:
            rep = "포탄의 공격 판정은 1초에 걸쳐 6회 연속으로 발생한다";
            break;
        case 2:
            rep = "-";
            break;
        case 3:
            rep = "보조 공격기";
            break;
        case 4:
            rep = "55% 확률로 4초 동안 대상의 이동속도 -45";
            break;
        case 5:
            rep = "더블 점프";
            break;
        case 6:
            rep = "온오프 스킬";
            break;
        case 7:
            rep = "공격스킬이 제한되는 곳에서는 쓸 수 없음";
            break;
        case 8:
            rep = "100%확률 밀림, 일정거리 이동 후 370%의 데미지로 폭발";
            break;
        case 9:
            rep = "이동속도 10, 점프력 5 증가";
            break;
        case 10:
            rep = "-";
            break;
        case 11:
            rep = "상향 범위 공격기";
            break;
        case 12:
            rep = "데미지 증가 디버프기";
            break;
        case 13:
            rep = "랜덤 액티브 버프";
            break;
        case 14:
            rep = "모험가 해적 공통 액티브 버프";
            break;
        case 15:
            rep = "-";
            break;
        case 16:
            rep = "상태 이상 내성 20 증가, 스탠스 20% 증가";
            break;
        case 17:
            rep = "20% 확률로 적의 공격을 막아 200% 데미지로 반격";
            break;
        case 18:
            rep = "효과음이 크다";
            break;
        case 19:
            rep = "추가 크리티컬 확률 15%, 적 방어력 무시 20%";
            break;
        case 20:
            rep = "지속시간 경과 시 625%의 데미지로 공격하며 소멸";
            break;
        case 21:
            rep = "재사용 대기시간 10초";
            break;
        case 22:
            rep = "재사용 대기시간 30초";
            break;
        case 23:
            rep = "숙련도 증가량 70%로 증가. 몬스터 방어율 20% 무시";
            break;
        case 24:
            rep = "올스탯 60, 이동속도 15, 점프력 10 증가";
            break;
        case 25:
            rep = "럭키 다이스의 강화 패시브";
            break;
        case 26:
            rep = "보스 몬스터 공격 시 데미지 40% 증가";
            break;
        case 27:
            rep = "공속 및 타수증가";
            break;
        case 28:
            rep = "3번씩 12초 동안 공격/ 재사용 대기시간 90초";
            break;
        case 29:
            rep = "";
            break;
    }
    return rep;
};
skcs.getskilldesc3Cannonshooter = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "매우 거대한 포탄을 발사한다. 공격 반사 상태의 적을 공격해도 피해를 입지 않는다. 아래 방향키와 함께 사용하면 가지고 있는 모든 포탄을 한 번에 발사할 수 있다.\n감속 모드에서는 포탄이 몹에게 충돌할 때 비행 속도가 반감된다.\n감속 모드 온오프 : 마우스 우클릭\n\nMP 500 소비, 일정 시간마다 최대 15명의 적에게 900% 데미지로 4번 공격하는 충돌이 발생하는 거대 포탄 발사\n한명의 적에게는 최대 40번까지만 충돌 발생\n거대 포탄은 25초마다 1개씩 준비되며 최대 3개까지 준비 가능\n\n재사용 대기시간 : 0.5초";
            break;
        case 1:
            rep = "탄도 미사일을 곡사로 발사하여 넓은 범위의 적을 공격한다. 스킬 키를 누른 상태에서 ↑, ↓ 화살표 키를 이용해 발사 각도를 조절한 후 스킬 키를 놓으면 발사된다. 미사일은 적을 직접 공격하지 않으며 떨어지면서 발판에 부딪혀야 폭발하여 피해를 준다. 조준하는 동안 적의 어떠한 공격에도 밀려나지 않고 준비 동작과 발사 후 동작은 무적이다.\n\nMP 1000 소비, 최대 5초 동안 조준 가능, 조준 가능 시간을 초과하면 스킬 취소, 미사일이 발판에 부딪히면 1초 동안 일정 간격으로 최대 15명의 적을 1760%의 데미지로 5번 공격하는 폭발 발생\n\n폭발한 후 공격범위 안의 가장 낮은 곳에 있는 발판에 최대 10명의 적에게 1100%의 데미지로 공격하는 오염 지역을 15초 동안 생성\n\n재사용 대기시간 30초";
            break;
        case 2:
            rep = "전투를 도와줄 특별한 챔피언 몽키 소대를 소환한다. 몽키 소대는 기본의 로이, 속사의 맥시, 폭발의 카키 3명으로 구성되며 공격 반사 상태의 적을 공격해도 피해를 입지 않는다.\n\nMP 1000 소비, 35초 동안 몽키 캐논과 몽키 봄을 사용하는 챔피언 몽키 소대 소환\n\n몽키 캐논 : 최대 3명의 적을 660%로 4번 공격\n몽키 봄 : 최대 12명의 적을 990%의 데미지로 7번 공격, 몬스터 방어율 100% 추가 무시\n기본의 로이 : 1초마다 몽키 캐논, 6초마다 몽키 봄 사용\n속사의 맥시 : 0.7초마다 몽키 캐논, 30초마다 몽키 봄 사용\n폭발의 카키 : 2.5초마다 몽키 캐논, 3초마다 몽키 봄 사용\n\n재사용 대기시간 90초";
            break;
        case 3:
            rep = "지형에 다수의 크레이터를 만들 만한 포격을 연사한다. 포격은 잠시 후 캐논슈터 주위의 적에게 떨어지며 최대 HP가 가장 높은 보스 몬스터 및 이전 포격에서 살아남은 적에게 우선적으로 떨어진다. 첫 번째 포격과 마지막 포격에 자신을 포함한 파티원이 사용할 수 있는 보급품이 함께 투하된다.\n포격이 떨어질 발판이 없거나 매달리면 떨어지지 않고 포격 발생 횟수가 남아있는 상태에서 맵을 이동하거나 재사용 대기시간이 초기화되면 스킬이 종료된다.\n포격은 공격 반사 상태의 적을 공격해도 피해를 입지 않고 보급품에 다가가서 위쪽 화살표 키를 누르면 사용할 수 있다.\n\nMP 1000 소비, 최대 8명의 적을 1540%의 데미지로 3번 공격하는 포격 최대 20회 발생\n보급품 : 20초 동안 유지, 사용 시 최대 HP의 20% 회복 후 20초 동안 유지되는 데미지 30% 증가 버프 획득, 보급품은 맵 상에 2개까지만 존재 가능\n\n재사용 대기시간 : 60초";
            break;
        case 11:
            rep = "몽키와 함께 일정 거리를 상승한 후 폭발하는 미니 캐논볼을 날린다. 미니 캐논볼은 일정 시간마다 1개씩 충전된다.\n자동 사용 모드에서는 캐논 바주카, 캐논 버스터가 적중할 때마다 충전 개수를 소모하여 적중 위치에서 폭발을 일으킨다.\n자동 사용 모드 온오프 : 마우스 우클릭\n\nMP 36 소비, 최대 8명의 적을 360%의 데미지로 5번 공격\n폭탄은 4초마다 1개씩 준비되며 최대 5개까지 소지 가능\n재사용 대기시간 0.5초\n캐논 바주카 도중 사용 시 시전 동작 없음";
            break;
        case 12:
            rep = "전방에 특수 제작된 고탄성 포탄을 발사하여 부딪히는 모든 적에게 화약을 묻혀 일정 시간 동안 데미지를 주며 캐논슈터 공격의 효과를 크게 강화시킨다.\n\nMP 62 소비, 180% 데미지로 10명의 적을 3회 공격, 100% 확률로 60초 동안 초당 200% 데미지, 해당 적에게 데미지 40% 증가, 재사용 대기시간 10초, 적중한 적이 없다면 재사용 대기시간 5초 감소";
            break;
        case 13:
            rep = "오크통을 폭발시켜 랜덤 버프를 받는다. 얼음 이외의 버프 당첨 시 재사용 대기시간이 반으로 줄어든다.\n\nMP 70 소비, 220초 동안 랜덤한 버프 적용\n\n번개 : [파이널 어택류 스킬] 직접 공격하는 공격 스킬 사용 시 6명의 적을 175%의 데미지로 추가 공격\n얼음 : 크리티컬 데미지 5% 증가\n슬로우 : 공격 시 55%의 확률로 슬로우 상태 이상이 보스를 포함한 모든 적에게 5초 동안 적용\n해골 : 공격 시 5초 동안 1초당 225%의 도트 데미지\n\n재사용 대기시간 60초 단, 얼음 제외 버프 당첨 시 절반 적용\n[패시브 효과 : 최종 데미지 10% 증가, 크리티컬 데미지 10% 증가, 크리티컬 확률 20% 증가]";
            break;
        case 14:
            rep = "주사위를 던져 자신의 행운을 시험한다. 주사위의 결과에 따라 일정 시간 동안 랜덤 버프를 획득할 수 있지만, 1이 나올 경우에는 버프를 획득할 수 없고 럭키 다이스의 재사용 대기시간이 감소한다.\n\nMP 60 소비, 주사위 버프 지속시간 180초, 재사용 대기시간 60초\n\n1 : 럭키 다이스 재사용 대기시간 50% 감소\n2 : 방어력 30% 증가\n3 : 공격력 15 증가\n4 : 크리티컬 확률 15% 증가\n5 : 데미지 20% 증가\n6 : 획득 경험치 30% 증가";
            break;
        case 25:
            rep = "일정 확률로 주사위 2개를 동시에 던져 자신의 행운을 시험한다. 주사위의 눈이 같을 경우에는 보다 강력한 버프 효과가 적용된다.\n\nMP 60 소비, 50% 확률로 럭키 다이스 사용 시, 더블 럭키 다이스 발동, 주사위 버프 지속시간 180초\n재사용 대기시간 60초\n\n1,1 : 럭키 다이스 재사용 대기시간 50% 감소\n2,2 : 방어력 40% 증가\n3,3 : 공격력 25 증가\n4,4 : 크리티컬 확률 25% 증가\n5,5 : 데미지 30% 증가\n6,6 : 획득 경험치 40% 증가";
            break;
        case 27:
            rep = "캐논슈터가 사용하는 탄환에 특별한 산탄 기술을 적용시킨다. 소환 스킬, 전직업 공용 5차 스킬 및 일부 스킬에는 적용되지 않는다.\n스킬 사용 시 효과가 활성화되고 재사용 시 비활성화되는 온오프 스킬\n\nMP 300 소비, 공격 속도 1단계 증가, 자신의 공격 스킬 공격 횟수 3배로 증가, 최종 데미지 45%로 감소\n단, 스킬의 공격 횟수는 15번을 초과할 수 없음.";
            break;
    }
    return rep;
};
skcs.getskillimage1Cannonshooter = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "https://i.imgur.com/IeybJwL.png";
            break;
        case 1:
            rep = "https://i.imgur.com/D7ng08O.png";
            break;
        case 2:
            rep = "https://i.imgur.com/tN4DbSU.png";
            break;
        case 3:
            rep = "https://i.imgur.com/MOF5jRS.png";
            break;
        case 4:
            rep = "https://i.imgur.com/Ag0LHS7.png";
            break;
        case 5:
            rep = "https://i.imgur.com/SanTUVF.png";
            break;
        case 6:
            rep = "https://i.imgur.com/HRrQay3.png";
            break;
        case 7:
            rep = "https://i.imgur.com/DcGmESE.png";
            break;
        case 8:
            rep = "https://i.imgur.com/bm7KOQX.png";
            break;
        case 9:
            rep = "https://i.imgur.com/CViaA67.png";
            break;
        case 10:
            rep = "";
            break;
        case 11:
            rep = "https://i.imgur.com/TjVHuS3.png";
            break;
        case 12:
            rep = "https://i.imgur.com/NRYKcTd.png";
            break;
        case 13:
            rep = "https://i.imgur.com/beOkzsT.png";
            break;
        case 14:
            rep = "https://i.imgur.com/jUOEyhA.png";
            break;
        case 15:
            rep = "";
            break;
        case 16:
            rep = "";
            break;
        case 17:
            rep = "https://i.imgur.com/NTjio8r.png";
            break;
        case 18:
            rep = "https://i.imgur.com/ZrWLb8q.png";
            break;
        case 19:
            rep = "https://i.imgur.com/7Iq4cVc.png";
            break;
        case 20:
            rep = "https://i.imgur.com/MUYW7Jw.png";
            break;
        case 21:
            rep = "https://i.imgur.com/yyQUPNs.png";
            break;
        case 22:
            rep = "https://i.imgur.com/GG3ipD5.png";
            break;
        case 23:
            rep = "";
            break;
        case 24:
            rep = "";
            break;
        case 25:
            rep = "https://i.imgur.com/FHxGN2J.png";
            break;
        case 26:
            rep = "";
            break;
        case 27:
            rep = "https://i.imgur.com/JdT4M75.png";
            break;
        case 28:
            rep = "https://i.imgur.com/1XST7en.png";
            break;
        case 29:
            rep = "";
            break;
    }
    return rep;
};
skcs.getskillimage2Cannonshooter = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "https://i.imgur.com/9H1lkqM.png";
            break;
        case 1:
            rep = "https://i.imgur.com/JyaeyMg.png";
            break;
        case 2:
            rep = "https://i.imgur.com/xlRyayT.png";
            break;
        case 3:
            rep = "https://i.imgur.com/Tg2uuZd.png";
            break;
        case 4:
            rep = "https://i.imgur.com/kx3gYNu.png";
            break;
        case 5:
            rep = "https://i.imgur.com/YICHhl5.png";
            break;
        case 6:
            rep = "https://i.imgur.com/WJJnxJV.png";
            break;
        case 7:
            rep = "https://i.imgur.com/iiQtVkj.png";
            break;
        case 8:
            rep = "https://i.imgur.com/tTfyCao.png";
            break;
        case 9:
            rep = "https://i.imgur.com/9mwRorG.png";
            break;
        case 10:
            rep = "https://i.imgur.com/MX1AjjT.png";
            break;
        case 11:
            rep = "https://i.imgur.com/vSJeD2E.png";
            break;
        case 12:
            rep = "https://i.imgur.com/NYqQljW.png";
            break;
        case 13:
            rep = "https://i.imgur.com/hLw9W9q.png";
            break;
        case 14:
            rep = "https://i.imgur.com/hzNxW6q.png";
            break;
        case 15:
            rep = "https://i.imgur.com/C5EStz5.png";
            break;
        case 16:
            rep = "https://i.imgur.com/1XK4TkP.png";
            break;
        case 17:
            rep = "https://i.imgur.com/MgVaPv8.png";
            break;
        case 18:
            rep = "https://i.imgur.com/BwBZc0z.png";
            break;
        case 19:
            rep = "https://i.imgur.com/TbzfHke.png";
            break;
        case 20:
            rep = "https://i.imgur.com/lhskwMa.png";
            break;
        case 21:
            rep = "https://i.imgur.com/cFdOx18.png";
            break;
        case 22:
            rep = "https://i.imgur.com/mbiSVpB.png";
            break;
        case 23:
            rep = "https://i.imgur.com/Bq5OolL.png";
            break;
        case 24:
            rep = "https://i.imgur.com/2xEMUPr.png";
            break;
        case 25:
            rep = "https://i.imgur.com/sXJxOK6.png";
            break;
        case 26:
            rep = "https://i.imgur.com/JvL59ie.png";
            break;
        case 27:
            rep = "https://i.imgur.com/Mkkv7l1.png";
            break;
        case 28:
            rep = "https://i.imgur.com/eum0T5E.png";
            break;
        case 29:
            rep = "";
            break;
    }
    return rep;
};

module.exports = skcs;