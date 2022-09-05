const ske = {};

ske.getskillEvan = function (skillname){
    var eret = -1;
    switch(skillname){
        case "엘리멘탈 블래스트":
        case "엘리멘탈블래스트":
        case "블래스트":
        case "엘블":
            eret = 0;
            break;
        case "드래곤 브레이크":
        case "드래곤브레이크":
        case "드브":
            eret = 1;
            break;
        case "브레이크-돌아와!":
        case "브레이크돌아와!":
        case "브레이크-돌아와":
        case "브레이크돌아와":
        case "브돌":
            eret = 2;
            break;
        case "임페리얼 브레스":
        case "임페리얼브레스":
        case "임브":
            eret = 3;
            break;
        case "조디악 레이":
        case "조디악레이":
        case "조디악":
        case "조레":
            eret = 4;
            break;
        case "스파이럴 오브 마나":
        case "스파이럴오브마나":
        case "스오마":
        case "스파이럴":
            eret = 5;
            break;
        case "서클 오브 마나 I":
        case "서클오브 마나 I":
        case "서클오브마나 I":
        case "서클오브마나I":
        case "서클 오브 마나 1":
        case "서클오브 마나 1":
        case "서클오브마나 1":
        case "서클오브마나1":
        case "서오마 1":
        case "서오마1":
        case "서오마 I":
        case "서오마I":
            eret = 6;
            break;
        case "드래곤 소울":
        case "드래곤소울":
        case "소울":
        case "드소":
            eret = 7;
            break;
        case "링크드 매직":
        case "링크드매직":
        case "링매":
            eret = 8;
            break;
        case "드래곤 스파킹":
        case "드래곤스파킹":
        case "파이널어택":
        case "파택":
            eret = 9;
            break;
        case "서클 오브 마나 II":
        case "서클오브 마나 II":
        case "서클오브마나 II":
        case "서클오브마나II":
        case "서클 오브 마나 2":
        case "서클오브 마나 2":
        case "서클오브마나 2":
        case "서클오브마나2":
        case "서오마 2":
        case "서오마2":
        case "서오마 II":
        case "서오마II":
            eret = 10;
            break;
        case "서클 오브 윈드":
        case "서클오브 윈드":
        case "서클오브윈드":
        case "서오윈":
        case "윈드":
            eret = 11;
            break;
        case "드래곤 스위프트":
        case "드래곤스위프트":
        case "스위프트":
        case "드스":
            eret = 12;
            break;
        case "스위프트 오브 윈드":
        case "스위프트오브 윈드":
        case "스위프트오브윈드":
        case "스오윈":
            eret = 13;
            break;
        case "스위프트-돌아와!":
        case "스위프트-돌아와":
        case "스위프트돌아와":
        case "스위프트 돌아와":
        case "스돌":
            eret = 14;
            break;
        case "돌아와!":
        case "돌아와":
            eret = 15;
            break;
        case "윈드 점프":
        case "윈드점프":
        case "윈점":
        case "윗점":
            eret = 16;
            break;
        case "교감":
            eret = 17;
            break;
        case "어드밴스 드래곤 스파킹":
        case "어드밴스 드래곤스파킹":
        case "어드밴스드래곤스파킹":
        case "어드스":
        case "어파택":
            eret = 18;
            break;
        case "서클 오브 마나 III":
        case "서클오브 마나 III":
        case "서클오브마나 III":
        case "서클오브마나III":
        case "서클 오브 마나 3":
        case "서클오브 마나 3":
        case "서클오브마나 3":
        case "서클오브마나3":
        case "서오마 3":
        case "서오마3":
        case "서오마 III":
        case "서오마III":
            eret = 19;
            break;
        case "서클 오브 썬더":
        case "서클오브 썬더":
        case "서클오브썬더":
        case "서오썬":
        case "썬더":
            eret = 20;
            break;
        case "드래곤 다이브":
        case "드래곤다이브":
        case "다이브":
        case "드다":
            eret = 21;
            break;
        case "다이브-돌아와!":
        case "다이브-돌아와":
        case "다이브돌아와":
        case "다돌":
            eret = 22;
            break;
        case "다이브 오브 썬더":
        case "다이브오브 썬더":
        case "다이브오브썬더":
        case "다오썬":
            eret = 23;
            break;
        case "스위프트 오브 썬더":
        case "스위프트오브 썬더":
        case "스위프트오브썬더":
        case "스오썬":
            eret = 24;
            break;
        case "마법 잔해":
        case "마법잔해":
        case "잔해":
        case "마잔":
            eret = 25;
            break;
        case "엘리멘탈 리셋":
        case "엘리멘탈리셋":
        case "리셋":
            eret = 26;
            break;
        case "크리티컬 매직":
        case "크리티컬매직":
        case "크리":
            eret = 27;
            break;
        case "매직 레지스턴스":
        case "매직레지스턴스":
        case "레지스턴스":
        case "레지":
        case "내성":
            eret = 28;
            break;
        case "매직 앰플리피케이션":
        case "매직앰플리피케이션":
        case "앰플리피케이션":
        case "앰플":
            eret = 29;
            break;
        case "드래곤 포텐셜":
        case "드래곤포텐셜":
        case "포텐셜":
        case "드포":
            eret = 30;
            break;
        case "서클 오브 마나 IV":
        case "서클오브 마나 IV":
        case "서클오브마나 IV":
        case "서클오브마나IV":
        case "서클 오브 마나 4":
        case "서클오브 마나 4":
        case "서클오브마나 4":
        case "서클오브마나4":
        case "서오마 4":
        case "서오마4":
        case "서오마 4":
        case "서오마4":
        case "서오마":
            eret = 31;
            break;
        case "서클 오버 어스":
        case "서클오버 어스":
        case "서클오버어스":
        case "서오어":
        case "어스":
            eret = 32;
            break;
        case "드래곤 브레스":
        case "드래곤브레스":
        case "브레스":
            eret = 33;
            break;
        case "브레스 오브 윈드":
        case "브레스오브 윈드":
        case "브레스오브윈드":
        case "브오윈":
            eret = 34;
            break;
        case "브레스 오브 어스":
        case "브레스오브 어스":
        case "브레스오브어스":
        case "브오어":
            eret = 35;
            break;
        case "브레스-돌아와!":
        case "브레스-돌아와":
        case "브레스돌아와":
            eret = 36;
            break;
        case "다이브 오브 어스":
        case "다이브오브 어스":
        case "다이브오브어스":
        case "다오어":
            eret = 37;
            break;
        case "다크 포그":
        case "다크포그":
        case "다포":
            eret = 38;
            break;
        case "오닉스의 축복":
        case "오닉스의축복":
        case "오축":
        case "축복":
            eret = 39;
            break;
        case "강화된 마법 잔해":
        case "강화된 마법잔해":
        case "강화된마법잔해":
        case "강화마법잔해":
        case "강마잔":
            eret = 40;
            break;
        case "오닉스의 의지":
        case "오닉스의의지":
        case "오의":
            eret = 41;
            break;
        case "드래곤 퓨리":
        case "드래곤퓨리":
        case "퓨리":
        case "드퓨":
            eret = 42;
            break;
        case "하이 드래곤 포텐셜":
        case "하이 드래곤포텐셜":
        case "하이드래곤포텐셜":
        case "하드포":
            eret = 43;
            break;
        case "서먼 오닉스 드래곤":
        case "서먼 오닉스드래곤":
        case "서먼오닉스드래곤":
        case "오닉스 드래곤":
        case "오닉스드래곤":
        case "서오드":
            eret = 44;
            break;
        case "드래곤 마스터":
        case "드래곤마스터":
        case "마스터":
        case "드마":
            eret = 45;
            break;
        case "":
            eret = 46;
            break;
    }
    return eret;
};
ske.getskillnameEvan = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "엘리멘탈 블래스트";
            break;
        case 1:
            rep = "드래곤 브레이크";
            break;
        case 2:
            rep = "브레이크-돌아와!";
            break;
        case 3:
            rep = "임페리얼 브레스";
            break;
        case 4:
            rep = "조디악 레이";
            break;
        case 5:
            rep = "스파이럴 오브 마나";
            break;
        case 6:
            rep = "서클 오브 마나 I";
            break;
        case 7:
            rep = "드래곤 소울";
            break;
        case 8:
            rep = "링크드 매직";
            break;
        case 9:
            rep = "드래곤 스파킹";
            break;
        case 10:
            rep = "서클 오브 마나 II";
            break;
        case 11:
            rep = "서클 오브 윈드";
            break;
        case 12:
            rep = "드래곤 스위프트";
            break;
        case 13:
            rep = "스위프트 오브 윈드";
            break;
        case 14:
            rep = "스위프트-돌아와!";
            break;
        case 15:
            rep = "돌아와!";
            break;
        case 16:
            rep = "윈드 점프";
            break;
        case 17:
            rep = "교감";
            break;
        case 18:
            rep = "어드밴스 드래곤 스파킹";
            break;
        case 19:
            rep = "서클 오브 마나 III";
            break;
        case 20:
            rep = "서클 오브 썬더";
            break;
        case 21:
            rep = "드래곤 다이브";
            break;
        case 22:
            rep = "다이브-돌아와!";
            break;
        case 23:
            rep = "다이브 오브 썬더";
            break;
        case 24:
            rep = "스위프트 오브 썬더";
            break;
        case 25:
            rep = "마법 잔해";
            break;
        case 26:
            rep = "엘리멘탈 리셋";
            break;
        case 27:
            rep = "크리티컬 매직";
            break;
        case 28:
            rep = "매직 레지스턴스";
            break;
        case 29:
            rep = "매직 앰플리피케이션";
            break;
        case 30:
            rep = "드래곤 포텐셜";
            break;
        case 31:
            rep = "서클 오브 마나 IV";
            break;
        case 32:
            rep = "서클 오브 어스";
            break;
        case 33:
            rep = "드래곤 브레스";
            break;
        case 34:
            rep = "브레스 오브 윈드";
            break;
        case 35:
            rep = "브레스 오브 어스";
            break;
        case 36:
            rep = "브레스-돌아와!";
            break;
        case 37:
            rep = "다이브 오브 어스";
            break;
        case 38:
            rep = "다크 포그";
            break;
        case 39:
            rep = "오닉스의 축복";
            break;
        case 40:
            rep = "강화된 마법 잔해";
            break;
        case 41:
            rep = "오닉스의 의지";
            break;
        case 42:
            rep = "드래곤 퓨리";
            break;
        case 43:
            rep = "하이 드래곤 포텐셜";
            break;
        case 44:
            rep = "서먼 오닉스 드래곤";
            break;
        case 45:
            rep = "드래곤 마스터";
            break;
        case 46:
            rep = "";
            break;
    }
    return rep;
};
ske.getskilldesc1Evan = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "하단 참조";
            break;
        case 1:
            rep = "12명,1045%,7번 공격, 2.5초간 지속/ 쿨 20초";
            break;
        case 2:
            rep = "하단 참조";
            break;
        case 3:
            rep = "12명, 1320%, 7번 공격/ 4초 지속";
            break;
        case 4:
            rep = "하단 참조";
            break;
        case 5:
            rep = "하단 참조";
            break;
        case 6:
            rep = "최대 4명의 적을 150%의 데미지로 2번 공격";
            break;
        case 7:
            rep = "영구적으로 방어력 145 증가, 이동속도 10 증가";
            break;
        case 8:
            rep = "영구적으로 최대 MP 20% 증가";
            break;
        case 9:
            rep = "40% 확률로 100% 데미지의 드래곤 스파킹 발동";
            break;
        case 10:
            rep = "최대 5명의 적을 130%의 데미지로 3번 공격";
            break;
        case 11:
            rep = "하단 참조";
            break;
        case 12:
            rep = "[미르 스킬] 8명의 적을 95%의 데미지로 4번 공격";
            break;
        case 13:
            rep = "하단 참조";
            break;
        case 14:
            rep = "하단 참조";
            break;
        case 15:
            rep = "공격 중인 미르 즉시 소환";
            break;
        case 16:
            rep = "MP 18 소비, 점프 중 위로 한 번 더 점프";
            break;
        case 17:
            rep = "미르가 공격중일 때 에반의 데미지 20% 증가";
            break;
        case 18:
            rep = "100% 확률로 150% 데미지의 드래곤 스파킹 발동";
            break;
        case 19:
            rep = "최대 6명의 적을 150%의 데미지로 4번 공격";
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
            rep = "하단 참조";
            break;
        case 24:
            rep = "지점별 충돌시마다 8명, 150%로 6번 공격";
            break;
        case 25:
            rep = "하단 참조";
            break;
        case 26:
            rep = "180초 동안 공격 속성 내성 10% 감소";
            break;
        case 27:
            rep = "크리티컬 공격 확률 30% 증가";
            break;
        case 28:
            rep = "영구적으로 상태 이상 내성 20 증가";
            break;
        case 29:
            rep = "소비 MP 130%로 증가";
            break;
        case 30:
            rep = "영구적으로 방어율 무시 20% 증가";
            break;
        case 31:
            rep = "[1타]: 8명의 적을 290%의 데미지로 4번 공격";
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
            rep = "15명, 400% 데미지로 6번 공격/ 크확20%/ 쿨40초";
            break;
        case 39:
            rep = "180초 동안 방어력 600, 마력 80 증가";
            break;
        case 40:
            rep = "하단 참조";
            break;
        case 41:
            rep = "영구적으로 피격 데미지의 20% 감소";
            break;
        case 42:
            rep = "드래곤의 집중력이 강해지며 마력이 증가한다.";
            break;
        case 43:
            rep = "영구적으로 보스 몬스터 공격 시 데미지 20% 증가.";
            break;
        case 44:
            rep = "하단 참조";
            break;
        case 45:
            rep = "10초 동안 미르에 탑승, 탑승 중 무적/ 쿨 240초";
            break;
        case 46:
            rep = "";
            break;
    }
    return rep;
};
ske.getskilldesc2Evan = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "광범위 공격기";
            break;
        case 1:
            rep = "다이브와 달리 지형에 구애받지 않는다";
            break;
        case 2:
            rep = "드래곤 브레이크, 임페리얼 브레스 도중 돌아와!를 사용할 시 발동";
            break;
        case 3:
            rep = "드래곤 브레이크 사용중 엘리멘탈 블래스트 사용하면 발동";
            break;
        case 4:
            rep = "이 스킬은 소환수로 취급되어 오버로드 마나의 효과를 받지 않음";
            break;
        case 5:
            rep = "설치형 공격기";
            break;
        case 6:
            rep = "4단계까지 강화됨";
            break;
        case 7:
            rep = "-";
            break;
        case 8:
            rep = "레벨당 MP 120만큼 증가, 마력 20 증가";
            break;
        case 9:
            rep = "[파이널 어택류 스킬]/ 에반 스킬에만 적용";
            break;
        case 10:
            rep = "2단계";
            break;
        case 11:
            rep = "스위프트, 브레스와 융합 가능";
            break;
        case 12:
            rep = "3.5초 동안 지속, 재사용 대기시간 8초";
            break;
        case 13:
            rep = "[융합 스킬]";
            break;
        case 14:
            rep = "[융합 스킬]";
            break;
        case 15:
            rep = "현재 미르가 수행중인 공격에 따라 다양한 추가 효과가 발동된다";
            break;
        case 16:
            rep = "점프 중 윗 방향키와 함께 점프를 입력하면 높게 도약한다.";
            break;
        case 17:
            rep = "[패시브 효과 : 스탠스 확률 30% 증가]";
            break;
        case 18:
            rep = "[파이널 어택류 스킬]";
            break;
        case 19:
            rep = "3단계";
            break;
        case 20:
            rep = "스위프트, 다이브와 융합 가능";
            break;
        case 21:
            rep = "[미르 스킬] 썬더, 어스와 융합 가능";
            break;
        case 22:
            rep = "[융합 스킬]";
            break;
        case 23:
            rep = "[융합 스킬]";
            break;
        case 24:
            rep = "[융합 스킬] 드래곤다이브 사용중 서클오브썬더 사용시 발동";
            break;
        case 25:
            rep = "고스펙용 사냥기로도 활용 가능";
            break;
        case 26:
            rep = "[패시브 효과: 최종 데미지 15% 증가]";
            break;
        case 27:
            rep = "크리티컬 데미지 20% 증가";
            break;
        case 28:
            rep = "속성 내성 25% 증가";
            break;
        case 29:
            rep = "공격 마법의 최종 데미지 30% 증가";
            break;
        case 30:
            rep = "-";
            break;
        case 31:
            rep = "[2타]: 8명의 적을 330%의 데미지로 4번 공격";
            break;
        case 32:
            rep = "다이브, 브레스와 융합 가능";
            break;
        case 33:
            rep = "[미르 스킬] 어스, 윈드와 융합 가능";
            break;
        case 34:
            rep = "[융합 스킬]";
            break;
        case 35:
            rep = "[융합 스킬]";
            break;
        case 36:
            rep = "[융합 스킬]";
            break;
        case 37:
            rep = "[융합 스킬]";
            break;
        case 38:
            rep = "마법 잔해의 데미지 20% 증가";
            break;
        case 39:
            rep = "개인 버프";
            break;
        case 40:
            rep = "마법 잔해 강화 패시브";
            break;
        case 41:
            rep = "스탠스 확률 70% 증가";
            break;
        case 42:
            rep = "마력 35% 증가";
            break;
        case 43:
            rep = "-";
            break;
        case 44:
            rep = "소환수 스킬";
            break;
        case 45:
            rep = "0.3초 간격으로 10명의 적에게 450%로 7번 공격";
            break;
        case 46:
            rep = "";
            break;
    }
    return rep;
};
ske.getskilldesc3Evan = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "여러 속성의 강력한 마법을 연달아 사용한다. 각각의 공격을 명중시키면 일정 시간 새로운 힘을 얻을 수 있다. 공격 반사 상태의 적을 공격해도 피해를 입지 않는다.\n\nMP 1000 소비, 최대 15명의 적을 1430%의 데미지로 8번 공격하는 마법을 4연속 사용, 추가 크리티컬 확률 100%\n공격 후 명중한 속성마다 10초 동안 최종 데미지 5%씩 증가\n재사용 대기시간 60초\n\n미르 스킬을 사용한 후 서클 오브 마나 사용 중 혹은 앉은 상태에서 엘리멘탈 블래스트를 사용하면 엘리멘탈 블래스트가 발동되지 않고 융합 스킬을 발동할 수 있지만 엘리멘탈 블래스트에 재사용 대기시간이 적용되고 소비 MP가 2배로 증가";
            break;
        case 2:
            rep = "[융합 스킬] 미르가 즉시 공격을 중단하고 에반의 곁으로 복귀한다. 문장의 힘으로 주변 적에게 피해를 입히는 무의 영역을 생성한다.\n브레이크-돌아와!는 드래곤 브레이크의 스킬 레벨에 따라 함께 성장한다.\n\n최대 12명의 적에게 330%의 데미지로 3번 공격하는 무의 영역 생성, 5초 지속";
            break;
        case 4:
            rep = "마력을 충전하여 성좌의 힘을 해방시키는 마법진을 설치한다. 스파이럴 오브 마나를 제외한 에반의 마법을 적중시키면 마법진에 마력이 충전되고 가득 차면 기동한다. 공격 반사 상태의 적을 공격해도 피해를 입지 않는다. 엘리멘탈 블래스트는 첫 공격만 속성이 적용된다.\n\nMP 1000 소비, 12초 동안 마법진 설치, 마력이 25 충전되면 해방이 시작되어 12초 동안 최대 12명의 적을 1045%의 데미지로 8번 지속 공격, 몬스터 방어율 100% 추가 무시\n속성이 있는 스킬 적중 시 마력이 3 충전되지만 스킬당 1회만 충전 가능, 속성이 없는 스킬 적중 시 마력이 1 충전되고 제한 없음\n\n재사용 대기시간 180초\n\n서클 오브 마나 : 1, 2타가 전부 적중해야 1충전\n스위프트, 다이브, 브레이크 : 1타당 1씩 충전\n마법 잔해 : 잔해 생성 위치에서 타겟과의 거리가 다를 경우 개당 1씩 충전\n브레스, 윈드, 썬더, 어스, 다크 포그, 드래곤 마스터, 모든 융합 스킬 : 스킬 최초 적중 1회에 한해 3충전\n브레스-돌아와 : 1회에 한해 3 충전\n엘리멘탈 블래스트 : 순서대로 3, 1, 1, 1 충전\n서먼 오닉스 드래곤, 드래곤 스파킹 : 충전 불가\n\n가장 많이 쓰이는 방법은 드래곤 브레스(3/3) → 서클 오브 윈드(캔슬) → 브레스 오브 윈드(3/6) → 브레스-돌아와(3/9) → 마법 잔해(1/10) → 드래곤 스위프트(1/11) → 서클 오브 윈드(3/14) → 스위프트 오브 윈드(3/17) → 돌아와 → 마법 잔해(1/18) → 드래곤 다이브(1/19) → 서클 오브 어스(3/22) → 다이브 오브 어스(3/25)(출처:나무위키)";
            break;
        case 5:
            rep = "서클 오브 마나의 마법진을 응용해 마나체가 스스로 회오리처럼 휘몰아치게 한다. 서클 오브 마나Ⅳ 사용 중 1타 발동 후 아래 방향키와 함께 서클 오브 마나를 한번 더 사용하여 발동 가능하다.\n스파이럴 오브 마나는 1개만 존재할 수 있고 지속 중 서클 오브 마나Ⅳ를 사용하면 일정 시간 스파이럴 오브 마나의 공격 횟수가 감소한다. 스파이럴 오브 마나는 공격 반사 상태의 적을 공격해도 피해를 입지 않는다.\n\nMP 240 소비, 7초 동안 일정 간격마다 최대 6명의 적을 265%의 데미지로 6번 공격\n서클 오브 마나Ⅳ 사용 시 1초 동안 스파이럴 오브 마나의 공격 횟수 3번 감소\n재사용 대기시간 3.5초\n\n[패시브 효과 : 마력 35 증가]";
            break;
        case 11:
            rep = "전방에 휘몰아치는 돌풍을 만들어 적을 밀어내며 충격을 입힌다. 일부 몬스터는 저항하여 밀리지 않는다.\n\nMP 40 소비, 6명의 적을 108%의 데미지로 5번 공격하며 밀어냄\n미르 스킬을 사용한 후 서클 오브 마나 사용 중 혹은 엎드린 상태에서 서클 오브 윈드를 사용하면 서클 오브 윈드가 발동되지 않고 융합 스킬을 발동할 수 있지만 소비 MP가 3배로 증가";
            break;
        case 13:
            rep = "미르가 드래곤 스위프트 공격 중 에반의 마법과 공명해 일정 시간 기류를 폭주 시켜 날카로운 바람 칼날을 발사 한다. 스위프트 오브 윈드는 드래곤 스위프트의 스킬 레벨에 따라 함께 성장하며, 공격 반사 상태의 적을 공격해도 피해를 입지 않는다.\n미르가 드래곤 스위프트 사용 중, 에반이 서클 오브 윈드 마법을 사용하면 발동된다.\n\nMP 60 소비, 최대 3명의 적에게 55%의 데미지로 2번 공격하는 바람 칼날 3개 발사, 3.5초 지속\n여러 개의 바람 칼날이 1명의 적을 공격하면 바람 칼날의 최종 데미지 35% 감소.";
            break;
        case 14:
            rep = "미르가 즉시 공격을 중단하고 에반의 곁으로 복귀한다. 문장의 힘으로 주변의 적에게 저주를 건다. 저주에 걸린 적은 일정 시간 동안 더 많은 피해를 받는다.\n스위프트-돌아와! 는 드래곤 스위프트의 스킬 레벨에 따라 함께 성장한다.\n미르가 드래곤 스위프트, 스위프트 오브 윈드, 스위프트 오브 썬더를 시전 중, 에반이 [돌아와]를 사용하면 발동된다.\n\n범위내 최대 8명의 적에게 60초 동안 10% 만큼 받는 공격 마법 스킬의 최종 데미지를 증폭시키는 저주 시전";
            break;
        case 20:
            rep = "번개의 마법진을 생성해 주변의 적을 섬멸한다.\n\nMP 48 소비, 최대 8명의 적을 170%의 데미지로 5번 공격\n미르 스킬을 사용한 후 서클 오브 마나 사용 중 혹은 엎드린 상태에서 서클 오브 썬더를 사용하면 서클 오브 썬더가 발동 되지 않고 융합 스킬을 발동할 수 있지만 소비 MP가 3배로 증가";
            break;
        case 21:
            rep = "미르가 에반 전방에 강하게 충돌한 후 날갯짓으로 충격파를 발생시킨다. 드래곤 다이브는 공격 반사 상태의 적을 공격해도 피해를 입지 않는다.\n미르 스킬과 융합 스킬은 공격 속도 증가의 효과를 받지 않는다.\n\nMP 70 소비, 최대 6명의 적을 130%의 데미지로 3번 공격, 3.5초 지속\n재사용 대기시간 8초\n\n[서클 오브 윈드]의 데미지가 62%p만큼 증가\n[드래곤 스위프트]의 데미지가 50%p만큼 증가\n[스위프트 오브 윈드]의 데미지가 30%p만큼 증가\n[스위프트 오브 썬더]의 데미지가 80%p만큼 증가";    
            break;
        case 22:
            rep = "미르가 즉시 공격을 중단하고 에반의 곁으로 복귀하며 문장의 힘으로 자신을 포함한 주변 파티원의 공격 속도를 1단계 증가 시킨다. 다이브-돌아와! 는 드래곤 다이브의 스킬 레벨에 따라 함께 성장한다. 미르가 드래곤 다이브, 다이브 오브 썬더, 다이브 오브 어스를 시전 중, 에반이 [돌아와]를 사용하면 발동된다.\n\n60초 동안 자신을 포함한 주변 파티원 공격 속도 1단계 증가";
            break;
        case 23:
            rep = "미르가 드래곤 다이브 공격중 에반의 마법과 공명해 일정 시간 온몸에서 지면을 타고 흐르는 강력한 전기 구체들을 만들어 낸다. 다이브 오브 썬더는 드래곤 다이브의 스킬 레벨에 따라 함께 성장하며, 공격 반사 상태의 적을 공격해도 피해를 입지 않는다.\n미르가 드래곤 다이브 사용 중, 에반이 서클 오브 썬더 마법을 사용하면 발동된다.\n\nMP 70 소비, 최대 1명의 적을 135%의 데미지로 1번 공격하는 4개의 전기 구체 생성, 4초 지속, 전기 구체는 적을 타격하거나 일정 시간이 지나면 소멸";
            break;
        case 25:
            rep = "융합 스킬에 피격 당한 적의 주변에 마법 잔해를 생성한다. 생성된 마법 잔해를 발동시켜 에반 주변의 적에게 피해를 입힐 수 있으며 한번에 발동된 마법 잔해의 수가 많을수록 더 많은 피해를 입힐 수 있다.\n자동 사용 모드에서는 마법 잔해가 일정 개수 생성될 때마다 자동으로 발동된다.\n자동 사용 모드 온오프 : 마우스 우클릭\n\n융합 스킬에 피격 당한 적 근처에서 마법 잔해 1개 생성, 재생성 대기시간 0.5초, 최대 생성 제한 15개, 발동 시 MP 100 소비, 최대 15명에게 분산되어 발사, 70%의 데미지로 1번 공격, 마법 잔해 5개당 데미지 40%p 증가, 생성된 마법 잔해는 사용하지 않고 일정 시간이 지나면 소멸\n자동 사용 모드에서는 마법 잔해가 10개 생성될 때마다 발동";
            break;
        case 32:
            rep = "불규칙한 마법진을 생성해 전방의 지면을 들어 올려 적을 강타 한다.\n\nMP 58 소비, 최대 8명의 적을 320%의 데미지로 5번 공격\n미르 스킬을 사용한 후 서클 오브 마나 사용 중 혹은 엎드린 상태에서 서클 오브 어스를 사용하면 서클 오브 어스가 발동 되지 않고 융합 스킬을 발동할 수 있지만 소비 MP가 3배로 증가";
            break;
        case 33:
            rep = "미르가 전방에 타오르는 화염을 뿜어내 모든 적을 불태운다. 드래곤 브레스는 공격 반사 상태의 적을 공격해도 피해를 입지 않는다.\n드래곤 브레스의 패시브 효과로 적용되는 스킬의 데미지 증가량은 드래곤 다이브의 데미지 증가량을 덮어 쓴다.\n미르 스킬과 융합 스킬은 공격 속도 증가의 효과를 받지 않는다\n\nMP 80 소비, 최대 8명의 적을 240%의 데미지로 5번 공격, 3초 지속\n재사용 대기시간 10초\n\n[서클 오브 윈드]의 데미지가 212%p만큼 증가\n[드래곤 스위프트]의 데미지가 320%p만큼 증가\n[스위프트 오브 윈드]의 데미지가 160%p만큼 증가\n[스위프트 오브 썬더]의 데미지가 300%p만큼 증가\n[서클 오브 썬더]의 데미지가 150%p만큼 증가\n[드래곤 다이브]의 데미지가 195%p만큼 증가\n[다이브 오브 썬더]의 데미지가 210%p만큼 증가\n[다이브 오브 어스]의 데미지가 420%p만큼 증가";
            break;
        case 34:
            rep = "미르가 드래곤 브레스 공격 중 에반의 마법과 공명해 적의 숨결을 끊어 놓을 강력한 화염 돌풍 브레스를 발사한다. 브레스 오브 윈드는 드래곤 브레스의 스킬 레벨에 따라 함께 성장하며, 공격 반사 상태의 적을 공격해도 피해를 입지 않는다.\n미르가 드래곤 브레스 사용 중, 에반이 서클 오브 윈드 마법을 사용하면 발동된다.\n\nMP 80 소비, 최대 8명의 적을 215%의 데미지로 5번 공격, 3.5초 지속, HP가 30% 이하로 남은 적에게 데미지 65%p 증가";
            break;
        case 35:
            rep = "미르가 드래곤 브레스 공격 중 에반의 마법과 공명해 대지를 딛고 올라서 다수의 적을 추적하는 화염 브레스를 발사한다. 브레스 오브 어스는 드래곤 브레스의 스킬 레벨에 따라 함께 성장하며, 공격 반사 상태의 적을 공격해도 피해를 입지 않는다. 미르가 드래곤 브레스 사용 중, 에반이 서클 오브 어스 마법을 사용하면 발동된다.\n\nMP 80 소비, 최대 4명의 적을 280%의 데미지로 5번 공격";
            break;
        case 36:
            rep = "미르가 즉시 공격을 중단하고 에반의 곁으로 복귀한다. 문장의 힘으로 타오르는 화염 장막을 생성한다. 브레스-돌아와! 는 드래곤 브레스의 스킬 레벨에 따라 함께 성장한다. 미르가 드래곤 브레스, 브레스 오브 윈드, 브레스 오브 어스를 시전 중, 에반이 [돌아와]를 사용하면 발동된다.\n\n최대 8명의 적에게 150%의 피해를 입히는 화염 장막 시전, 30초 지속";
            break;
        case 37:
            rep = "미르가 드래곤 다이브 공격 중 에반의 마법과 공명해 전방에 솟아오른 바위를 파쇄하며 주변에 강력한 피해를 입힌다. 다이브 오브 어스는 드래곤 다이브의 스킬 레벨에 따라 함께 성장하며, 공격 반사 상태의 적을 공격해도 피해를 입지 않는다. 미르가 드래곤 다이브 사용 중, 에반이 서클 오브 어스 마법을 사용하면 발동된다.\n\nMP 70 소비, 바위를 형성하고 공격한 후 세 지점 충돌하여 공격, 공격 시마다 최대 6명의 적을 190%의 데미지로 6번 공격";
            break;
        case 40:
            rep = "한층 더 강화된 마법 잔해를 생성한다. 생성된 마법 잔해를 발동시켜 에반 주변의 적에게 피해를 입힐 수 있으며 한번에 발동된 마법 잔해의 수가 많을수록 더 많은 피해를 입힐 수 있다.\n\n융합 스킬에 피격당한 적 근처에서 마법 잔해 1개 생성, 재생성 대기시간 0.4초, 최대 생성 제한 15개, 발동 시 MP 140 소비, 최대 15명의 적에게 분산되어 발사, 110%의 데미지로 1번 공격, 마법 잔해 5개당 데미지 100%p 증가, 생성된 마법 잔해는 사용하지 않고 일정 시간이 지나면 소멸";
            break;
        case 44:
            rep = "고대 오닉스 드래곤을 소환하여 전투를 돕도록 시킨다. 서먼 오닉스 드래곤은 공격 반사 상태의 적을 공격해도 피해를 입지 않는다.\n\nMP 600 소비, 40초 동안 고대 오닉스 드래곤 주변의 8명의 적에게 550% 데미지로 2번 공격. 고대 오닉스 드래곤이 소환되어 있는 동안 자신의 상태 이상 내성 80 증가\n\n재사용 대기시간 80초";
            break;
        case 28:
            rep = "";
            break;
        case 24:
            rep = "";
            break;
    }
    return rep;
};
ske.getskillimage1Evan = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "https://i.imgur.com/O5VKtcw.png";
            break;
        case 1:
            rep = "https://i.imgur.com/IlP7USt.png";
            break;
        case 2:
            rep = "https://i.imgur.com/GtWAbDh.png";
            break;
        case 3:
            rep = "https://i.imgur.com/IsEcTgq.png";
            break;
        case 4:
            rep = "https://i.imgur.com/SXOSwmD.png";
            break;
        case 5:
            rep = "https://i.imgur.com/Ko2ovGO.png";
            break;
        case 6:
            rep = "https://i.imgur.com/jrYHpPE.png";
            break;
        case 7:
            rep = "";
            break;
        case 8:
            rep = "";
            break;
        case 9:
            rep = "https://i.imgur.com/4CSgmUH.png";
            break;
        case 10:
            rep = "https://i.imgur.com/ho0F2if.png";
            break;
        case 11:
            rep = "https://i.imgur.com/7esFjOp.png";
            break;
        case 12:
            rep = "https://i.imgur.com/4yxpjRB.png";
            break;
        case 13:
            rep = "https://i.imgur.com/n96Y9IM.png";
            break;
        case 14:
            rep = "https://i.imgur.com/FXMD1SW.png";
            break;
        case 15:
            rep = "";
            break;
        case 16:
            rep = "https://i.imgur.com/YYUNPOM.png";
            break;
        case 17:
            rep = "";
            break;
        case 18:
            rep = "";
            break;
        case 19:
            rep = "https://i.imgur.com/1nERqfU.png";
            break;
        case 20:
            rep = "https://i.imgur.com/SjqupCO.png";
            break;
        case 21:
            rep = "https://i.imgur.com/ppGoXfc.png";
            break;
        case 22:
            rep = "https://i.imgur.com/G2P1SOQ.png";
            break;
        case 23:
            rep = "https://i.imgur.com/pzxba0Q.png";
            break;
        case 24:
            rep = "https://i.imgur.com/KLlq7zK.png";
            break;
        case 25:
            rep = "https://i.imgur.com/J05D8IP.png";
            break;
        case 26:
            rep = "https://i.imgur.com/OPN4aPB.png";
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
            rep = "https://i.imgur.com/SiJzvUI.png";
            break;
        case 32:
            rep = "https://i.imgur.com/JL1qEUT.png";
            break;
        case 33:
            rep = "https://i.imgur.com/vSAn5UR.png";
            break;
        case 34:
            rep = "https://i.imgur.com/nYRY43V.png";
            break;
        case 35:
            rep = "https://i.imgur.com/PVvr6Y8.png";
            break;
        case 36:
            rep = "https://i.imgur.com/6yCbgj4.png";
            break;
        case 37:
            rep = "https://i.imgur.com/0Vxj47Q.png";
            break;
        case 38:
            rep = "https://i.imgur.com/jPkA6XM.png";
            break;
        case 39:
            rep = "https://i.imgur.com/pYBj5mv.png";
            break;
        case 40:
            rep = "https://i.imgur.com/8TReiUX.png";
            break;
        case 41:
            rep = "";
            break;
        case 42:
            rep = "https://i.imgur.com/WUPoGgd.png";
            break;
        case 43:
            rep = "";
            break;
        case 44:
            rep = "https://i.imgur.com/8XIKgdB.png";
            break;
        case 45:
            rep = "https://i.imgur.com/PPhq6am.png";
            break;
        case 46:
            rep = "";
            break;
    }
    return rep;
};
ske.getskillimage2Evan = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "https://i.imgur.com/NNbG0wS.png";
            break;
        case 1:
            rep = "https://i.imgur.com/aw505X4.png";
            break;
        case 2:
            rep = "https://i.imgur.com/sJ06nCD.png";
            break;
        case 3:
            rep = "https://i.imgur.com/dFSxw30.png";
            break;
        case 4:
            rep = "https://i.imgur.com/YpX4JYl.png";
            break;
        case 5:
            rep = "https://i.imgur.com/3yKTGFO.png";
            break;
        case 6:
            rep = "https://i.imgur.com/kYBEPxA.png";
            break;
        case 7:
            rep = "https://i.imgur.com/gp7rVWn.png";
            break;
        case 8:
            rep = "https://i.imgur.com/el9A0Q5.png";
            break;
        case 9:
            rep = "https://i.imgur.com/TQdeiSe.png";
            break;
        case 10:
            rep = "https://i.imgur.com/Miu2Uml.png";
            break;
        case 11:
            rep = "https://i.imgur.com/vttTP4B.png";
            break;
        case 12:
            rep = "https://i.imgur.com/0615yfn.png";
            break;
        case 13:
            rep = "https://i.imgur.com/KokmInV.png";
            break;
        case 14:
            rep = "https://i.imgur.com/XoDmg2H.png";
            break;
        case 15:
            rep = "https://i.imgur.com/iR4YtNk.png";
            break;
        case 16:
            rep = "https://i.imgur.com/JQbhJnY.png";
            break;
        case 17:
            rep = "https://i.imgur.com/O68BsQZ.png";
            break;
        case 18:
            rep = "https://i.imgur.com/Po9PkAp.png";
            break;
        case 19:
            rep = "https://i.imgur.com/4UrsNYl.png";
            break;
        case 20:
            rep = "https://i.imgur.com/mIxdsAY.png";
            break;
        case 21:
            rep = "https://i.imgur.com/t6zgnr3.png";
            break;
        case 22:
            rep = "https://i.imgur.com/lJtucYf.png";
            break;
        case 23:
            rep = "https://i.imgur.com/NU33P1A.png";
            break;
        case 24:
            rep = "https://i.imgur.com/GBeoGNu.png";
            break;
        case 25:
            rep = "https://i.imgur.com/SuDBFsw.png";
            break;
        case 26:
            rep = "https://i.imgur.com/Sp7Sf5j.png";
            break;
        case 27:
            rep = "https://i.imgur.com/TOD55CA.png";
            break;
        case 28:
            rep = "https://i.imgur.com/761Cyw1.png";
            break;
        case 29:
            rep = "https://i.imgur.com/o01v05B.png";
            break;
        case 30:
            rep = "https://i.imgur.com/nfPJRvY.png";
            break;
        case 31:
            rep = "https://i.imgur.com/RC7p75V.png";
            break;
        case 32:
            rep = "https://i.imgur.com/bmeK2Qt.png";
            break;
        case 33:
            rep = "https://i.imgur.com/ZwJQqRi.png";
            break;
        case 34:
            rep = "https://i.imgur.com/CIPnIck.png";
            break;
        case 35:
            rep = "https://i.imgur.com/pbdVgaN.png";
            break;
        case 36:
            rep = "https://i.imgur.com/ejwLEyY.png";
            break;
        case 37:
            rep = "https://i.imgur.com/QKyf65t.png";
            break;
        case 38:
            rep = "https://i.imgur.com/3FwEhIi.png";
            break;
        case 39:
            rep = "https://i.imgur.com/17ToLTF.png";
            break;
        case 40:
            rep = "https://i.imgur.com/8XvfgSS.png";
            break;
        case 41:
            rep = "https://i.imgur.com/6w4Ybdz.png";
            break;
        case 42:
            rep = "https://i.imgur.com/Yachr2y.png";
            break;
        case 43:
            rep = "https://i.imgur.com/q9nqTSF.png";
            break;
        case 44:
            rep = "https://i.imgur.com/ic63OWW.png";
            break;
        case 45:
            rep = "https://i.imgur.com/AZTJuYf.png";
            break;
        case 46:
            rep = "";
            break;
    }
    return rep;
};

module.exports = ske;