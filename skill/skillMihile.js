const skm = {};

skm.getskillMihile = function (skillname){
    var mret = -1;
    switch(skillname){
        case "로얄 가드":
        case "로얄가드":
        case "로얄":
            mret = 0;
            break;
        case "로 아이아스":
        case "로아이아스":
        case "로아":
            mret = 1;
            break;
        case "클라우 솔라스":
        case "클라우솔라스":
        case "클라우":
        case "솔라스":
        case "클솔":
            mret = 2;
            break;
        case "소드 오브 소울 라이트":
        case "소드오브소울라이트":
        case "소울라이트":
        case "소오소라":
        case "소소라":
            mret = 3;
            break;
        case "라이트 오브 커리지":
        case "라이트오브커리지":
        case "라오커":
            mret = 4;
            break;
        case "여제의 기도":
        case "여제의기도":
        case "영메":
        case "미하일영메":
            mret = 5;
            break;
        case "빛의 수호":
        case "빛의수호":
        case "링크스킬":
        case "링크":
            mret = 6;
            break;
        case "소울 점프":
        case "소울점프":
        case "더블 점프":
        case "더블점프":
        case "덥점":
            mret = 7;
            break;
        case "소울 실드":
        case "소울실드":
        case "실드":
            mret = 8;
            break;
        case "소울 어택":
        case "소울어택":
        case "어택":
            mret = 9;
            break;
        case "샤이닝 체이스":
        case "샤이닝체이스":
        case "샤체":
        case "돌진기":
        case "돌진":
        case "밀격기":
        case "밀격":
            mret = 10;
            break;
        case "버티컬 샤이닝 체이스":
        case "버티컬 샤이닝체이스":
        case "버티컬샤이닝체이스":
        case "버샤체":
        case "윗점":
            mret = 11;
            break;
        case "인커리지":
        case "분노":
            mret = 12;
            break;
        case "매직 크래쉬":
        case "매직크래쉬":
            mret = 13;
            break;
        case "소울 링크":
        case "소울링크":
            mret = 14;
            break;
        case "어드밴스드 로얄 가드":
        case "어드밴스드 로얄가드":
        case "어드밴스드로얄가드":
            mret = 15;
            break;
        case "로얄 오쓰":
        case "로얄오쓰":
        case "오쓰":
            mret = 16;
            break;
        case "어드밴스드 소울 어택":
        case "어드밴스드 소울어택":
        case "어드밴스드소울어택":
            mret = 17;
            break;
        case "오펜시브 디펜스":
        case "오펜시브디펜스":
        case "오디":
            mret = 18;
            break;
        case "샤이닝 크로스":
        case "샤이닝크로스":
        case "샤크":
        case "크로스":
            mret = 19;
            break;
        case "샤이닝 크로스-어썰트":
        case "샤이닝크로스-어썰트":
        case "어썰트":
            mret = 20;
            break;
        case "소울 레이지":
        case "소울레이지":
        case "레이지":
            mret = 21;
            break;
        case "인스톨 실드":
        case "인스톨실드":
        case "인스톨":
        case "인실":
        case "설치기":
            mret = 22;
            break;
        case "어드밴스드 오펜시브 디펜스":
        case "어드밴스드 오펜시브디펜스":
        case "어드밴스드오펜시브디펜스":
        case "어드밴스드오디":
        case "어오디":
            mret = 23;
            break;
        case "어드밴스드 소울 실드":
        case "어드밴스드 소울실드":
        case "어드밴스드소울실드":
            mret = 24;
            break;
        case "컴뱃 마스터리":
        case "컴뱃마스터리":
        case "컴마":
            mret = 25;
            break;
        case "스탠스":
            mret = 26;
            break;
        case "소울 마제스티":
        case "소울마제스티":
        case "마제스티":
        case "마제":
        case "소마제":
        case "소마":
            mret = 27;
            break;
        case "데들리 차지":
        case "데들리차지":
        case "데차":
            mret = 28;
            break;
        case "퀸 오브 투모로우":
        case "퀸오브 투모로우":
        case "퀸오브투모로우":
            mret = 29;
            break;
        case "":
            mret = 30;
            break;
    }
    return mret;
};
skm.getskillnameMihile = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "로얄 가드";
            break;
        case 1:
            rep = "로 아이아스";
            break;
        case 2:
            rep = "클라우 솔라스";
            break;
        case 3:
            rep = "소드 오브 소울 라이트";
            break;
        case 4:
            rep = "라이트 오브 커리지";
            break;
        case 5:
            rep = "여제의 기도";
            break;
        case 6:
            rep = "빛의 수호";
            break;
        case 7:
            rep = "소울 점프";
            break;
        case 8:
            rep = "소울 실드";
            break;
        case 9:
            rep = "소울 어택";
            break;
        case 10:
            rep = "샤이닝 체이스";
            break;
        case 11:
            rep = "버티컬 샤이닝 체이스";
            break;
        case 12:
            rep = "인커리지";
            break;
        case 13:
            rep = "매직 크래쉬";
            break;
        case 14:
            rep = "소울 링크";
            break;
        case 15:
            rep = "어드밴스드 로얄 가드";
            break;
        case 16:
            rep = "로얄 오쓰";
            break;
        case 17:
            rep = "어드밴스드 소울 어택";
            break;
        case 18:
            rep = "오펜시브 디펜스";
            break;
        case 19:
            rep = "샤이닝 크로스";
            break;
        case 20:
            rep = "샤이닝 크로스-어썰트";
            break;
        case 21:
            rep = "소울 레이지";
            break;
        case 22:
            rep = "인스톨 실드";
            break;
        case 23:
            rep = "어드밴스드 오펜시브 디펜스";
            break;
        case 24:
            rep = "어드밴스드 소울 실드";
            break;
        case 25:
            rep = "컴뱃 마스터리";
            break;
        case 26:
            rep = "스탠스";
            break;
        case 27:
            rep = "소울 마제스티";
            break;
        case 28:
            rep = "데들리 차지";
            break;
        case 29:
            rep = "퀸 오브 투모로우";
            break;
        case 30:
            rep = "";
            break;
    }
    return rep;
};
skm.getskilldesc1Mihile = function (skillcode){
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
            rep = "25초간 데미지 25%/ 파티효과: 자신포함 파티원 체력 300% 해당 보호막 생성";
            break;
        case 5:
            rep = "하단 참조";
            break;
        case 6:
            rep = "하단 참조";
            break;
        case 7:
            rep = "MP 20 소비, 일정 거리 점프";
            break;
        case 8:
            rep = "방어력 200, 최대 HP 20%";
            break;
        case 9:
            rep = "이동속도 25, 점프력 20";
            break;
        case 10:
            rep = "최대 6명의 적을 400%의 데미지로 공격하며 이동";
            break;
        case 11:
            rep = "최대 6명의 적을 400%의 데미지로 공격하며 이동";
            break;
        case 12:
            rep = "180초 동안 공격력 30 증가";
            break;
        case 13:
            rep = "100% 확률로 일부 버프 해제, 재사용 대기시간 60초";
            break;
        case 14:
            rep = "하단 참조";
            break;
        case 15:
            rep = "하단 참조";
            break;
        case 16:
            rep = "힘 60, 크리티컬 확률 20%";
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
            rep = "하단 참조";
            break;
        case 25:
            rep = "적 방어율 40% 무시";
            break;
        case 26:
            rep = "스탠스 확률 60% 증가";
            break;
        case 27:
            rep = "하단 참조";
            break;
        case 28:
            rep = "하단 참조";
            break;
        case 29:
            rep = "하단 참조";
            break;
        case 30:
            rep = "";
            break;
    }
    return rep;
};
skm.getskilldesc2Mihile = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "미하일의 상징";
            break;
        case 1:
            rep = "넉백에 취약, 자신이 밀려나서 파티원들이 죽을수 있음";
            break;
        case 2:
            rep = "공격 판정은 로얄 가드보다 위에 있다.";
            break;
        case 3:
            rep = "사용 시 기본 공격 키에 소울 라이트 슬래시 배정";
            break;
        case 4:
            rep = "보호막 12초간 유지, 초당 최대치 7% 감소/ 쿨90초";
            break;
        case 5:
            rep = "미하일 버전 영메";
            break;
        case 6:
            rep = "링크스킬과는 다른 효과";
            break;
        case 7:
            rep = "더블 점프";
            break;
        case 8:
            rep = "스탠스 확률 40% 증가";
            break;
        case 9:
            rep = "최대 이동속도 10 증가";
            break;
        case 10:
            rep = "돌진기";
            break;
        case 11:
            rep = "상향 이동기";
            break;
        case 12:
            rep = "[패시브 효과 : 로얄 가드 1, 2, 3단계 반격 데미지 70%p 증가]";
            break;
        case 13:
            rep = "22초 동안 10명의 적의 버프 효과 제한";
            break;
        case 14:
            rep = "오라 형태 / 온오프 스킬";
            break;
        case 15:
            rep = "로얄가드 강화 패시브";
            break;
        case 16:
            rep = "최종 데미지 18%, 공격 속도 1단계 증가";
            break;
        case 17:
            rep = "소울 어택 강화 패시브";
            break;
        case 18:
            rep = "로얄 가드 후속타 패시브";
            break;
        case 19:
            rep = "[소울 라이트 스킬]";
            break;
        case 20:
            rep = "[소울 라이트 스킬]";
            break;
        case 21:
            rep = "온오프 스킬";
            break;
        case 22:
            rep = "설치형 공격기";
            break;
        case 23:
            rep = "오펜시브 디펜스 강화 패시브";
            break;
        case 24:
            rep = "소울 실드 패시브";
            break;
        case 25:
            rep = "방무 패시브";
            break;
        case 26:
            rep = "스탠스 패시브";
            break;
        case 27:
            rep = "극딜 버프";
            break;
        case 28:
            rep = "[소울 라이트 스킬] 디버프 / 광범위 공격기";
            break;
        case 29:
            rep = "데미지 증가 버프";
            break;
        case 30:
            rep = "";
            break;
    }
    return rep;
};
skm.getskilldesc3Mihile = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "소울 실드로 적의 공격을 완벽하게 방어하여 피해를 무효화하고 적에게 반격한다. 반격은 공격 무시 및 공격 반사 상태의 적에게도 피해를 입힐 수 있다. 무적 효과 및 공격력 증가 버프는 버프 지속시간 증가의 효과를 받지 않는다.\n자신의 스킬 사용 중에도 방어할 수 있다.\n\nMP 20 소비, 사용 후 일정 시간 안에 적의 공격을 받으면 4초 동안 무적이 되어 피해를 무효화하고 반격, 반격 후 20초 동안 공격력 증가\n공격력 증가 버프가 있는 상태에서 방어에 성공하면 반격의 데미지와 공격 범위, 공격력 증가량이 점차 증가하나 방어 가능한 시간이 점차 감소\n[1회] : 최대 6명의 적을 305%의 데미지로 4번 공격 후 공격력 10 증가\n[2회] : 최대 7명의 적을 370%의 데미지로 5번 공격 후 공격력 15 증가\n[3회] : 최대 8명의 적을 470%의 데미지로 6번 공격 후 공격력 20 증가\n\n재사용 대기시간 6초";
            break;
        case 1:
            rep = "적들의 공격으로부터 동료를 지키는 방패가 된다.\n방패를 들고 있는 동안 샤이닝 체이스를 제외한 이동 스킬을 사용할 수 없다.\n\nMP 1000 소비, 25초 동안 방패를 들어 자신과 파티원이 해당 영역에서 받는 최대 HP의 일정 비율로 피해를 입히는 공격을 포함한 피격 데미지 89% 감소\n\n방패는 적의 공격을 막을수록 3단계에 걸쳐 부서지며 각 단계당 10, 10, 13회씩 방어 가능\n\n방패 소멸 시 자신의 최종 데미지가 99초 동안 증가하고 남은 방어 횟수 1회당 1% 증가\n\n스킬을 다시 사용하여 방패 수동 소멸 가능\n재사용 대기시간 : 180초";
            break;
        case 2:
            rep = "소울 실드의 힘을 검에 집중해 전설로 내려오는 빛의 검을 구현하여 적을 공격한다. 재사용 대기시간 중 미하일의 스킬로 적을 직접 공격하면 빛의 검이 추가로 구현되어 피해를 입히며 해당 공격은 공격 반사 상태의 적을 공격해도 피해를 입지 않는다.\n\nMP 800 소비, 최대 12명의 적을 7번 공격\n로얄 가드의 공격력 증가 버프 중첩에 따라 데미지 증가\n사용 후 로얄 가드의 공격력 증가 버프 유지시간 6초 증가. 단, 최대치를 초과하지 못함.\n\n[0, 1회] : 950%의 데미지\n[2회] : 1020%의 데미지\n[3회] : 1110%의 데미지\n[4회] : 1320%의 데미지\n[5회] : 1540%의 데미지\n\n재사용 대기시간 12초\n재사용 대기시간 중 공격 시 5초마다 [1회]의 공격 발동, 해당 공격은 스킬 사용 후 5초 이후부터 발동하고 로얄 가드의 버프 유지시간을 증가시키지 않음\n\n모든 공격은 100% 확률로 암흑 공격, 암흑은 10초 동안 지속되며 대상의 명중률 30% 감소, 보스에게는 지속시간이 절반으로 감소.";
            break;
        case 3:
            rep = "소울의 힘을 검에 집중하여 영혼의 빛이 검에 깃들게 한다. 빛의 검 장착 중에는 일반 공격으로 소울 라이트 슬래시를 사용할 수 있고 커스텀 커맨드를 사용하면 일반 공격 또는 소울 어썰트로 소울 라이트 슬래시를 사용할 수 있다. 스킬을 재사용하여 강렬한 빛을 방출하는 라이트 포스레이를 1회 사용할 수 있다. 검의 잔상은 공격 반사 상태의 적을 공격해도 피해를 입지 않는다.\n\nMP 1200 소비\n35초 동안 빛의 검을 장착하여 공격력 30%, 크리티컬 확률 100%, 적 방어율 무시 100% 증가, 로얄 가드의 방어 가능한 시간 0.5초로 증가, 검의 잔상이 일정 시간마다 최대 4명에 적에게 떨어져 990%의 데미지로 5번 공격\n\n소울 라이트 슬래시 : MP 100 소비, 최대 8명의 적을 880%의 데미지로 12번 공격\n\n라이트 포스레이 : 최대 8명의 적을 1870%의 데미지로 12번 공격하는 빛이 6번 발생\n\n재사용 대기시간 180초";
            break;
        case 5:
            rep = "2시간 동안 공격력과 마력이 일시적으로 증가하며, 평소보다 레벨이 높은 몬스터에게도 공격이 가능하다. 또한 캐릭터 사망시에도 유지된다. 영웅의 메아리와 중첩되지 않으며 여제의 기도 지속시간 중에는 영웅의 메아리 효과를 받을 수 없다.\n재사용 대기시간 : 1일\n재사용 대기시간 초기화와 버프 지속시간 증가의 효과를 받지 않는다.\n\nMP 30 소비, 공격력, 마력 4% 증가";
            break;
        case 6:
            rep = "빛의 수호를 받아 일정 시간 동안 적에게서 받는 피해를 방어하고 데미지가 증가한다. 링크 스킬로 사용 시 일정 시간 상태 이상 내성이 증가한다.\n\n30초 동안 보호막이 생성, 최대 6번의 피해를 방어, 데미지 20% 증가\n단, 최대 HP의 일정 비율로 피해를 입히는 공격에 한해 피해 20% 감소\n\n재사용 대기시간 180초";
            break;
        case 14:
            rep = "주변의 동료들과 영혼을 공명하여 강력한 힘을 발휘한다. 소울 링크 활성화 중 일정 주기마다 소울 링크 범위 내의 파티원을 강화하고, 로얄 가드의 반격에 성공할 때 소울 링크 범위 내의 파티원을 보호한다.";
            break;
        case 15:
            rep = "로얄 가드를 강화하여 연속 방어 시 더 강력한 반격을 할 수 있게 된다. 소울 실드를 더 잘 다룰 수 있게 되어 적의 공격을 견디는 능력이 강화된다.\n\n[4회] : 최대 10명의 적에게 580%의 데미지로 7번 공격 후 공격력 30 증가\n[5회] : 최대 15명의 적에게 665%의 데미지로 9번 공격 후 공격력 45 증가\n\n[패시브 효과 : 방어력 100%, 상태이상 내성 60, 모든 속성 내성 60% 증가]";
            break;
        case 17:
            rep = "소울 어택의 효과를 강화하여 빛의 힘으로 적에게 더욱 치명적인 피해를 입힌다.\n\n암흑, 행동 불가, 오펜시브 디펜스 버프, 데들리 차지 디버프에 걸린 적 공격 시 최종 데미지 15%, 크리티컬 확률 10% 추가 증가\n소울 어택으로 증가하는 효과와 합 적용";
            break;
        case 18:
            rep = "여제를 지키는 방패의 힘이 적을 미하일의 소울 라이트에 취약한 상태로 만든다. 로얄 가드의 반격에 적중된 적에게 디버프를 새기고 디버프에 걸린 적을 소울 라이트 스킬로 공격 시 빛의 충격파가 발생하여 적을 추가 공격한다.\n빛의 충격파는 소울 라이트 스킬에 타격된 적 중 최대 HP가 높은 보스 몬스터의 중심에서 발생하여, 보스 몬스터가 없다면 적중한 적 중 가장 가까운 몬스터의 중심에서 발생한다.\n\n로얄 가드의 반격 적중 시 적중한 적에게 20초 동안 유지되는 오펜시브 디펜스 디버프 발생\n디버프에 걸린 적에 소울 라이트 스킬 적중 시 타격된 적의 중심에서 빛의 충격파 발생, 빛의 충격파에 적중한 적은 오펜시브 디펜스 디버프 소멸\n빛의 충격파 : 최대 6명의 적을 350%의 데미지로 5번 공격\n\n재발동 대기시간 12초";
            break;
        case 19:
            rep = "빛과 함께 전방을 십자로 베어 공격한다. 소울 레이지 지속 중에는샤이닝 크로스-어썰트로 강화된다.\n\nMP 70 소비, 최대 7명의 적을 530%의 데미지로 4번 공격\n공격 시 30%의 확률로 암흑 적용, 암흑은 10초 동안 지속되며 대상의 명중률 30% 감소";
            break;
        case 20:
            rep = "빛의 힘을 날카롭게 응축하여 전방을 사선으로 베어 공격한다.\n\nMP 70 소비, 최대 12명의 적을 326%의 데미지로 10번 공격\n공격 시 30%의 확률로 암흑 적용, 암흑은 10초 동안 지속되며 대상의 명중률 30% 감소";
            break;
        case 21:
            rep = "소울의 힘을 검과 방패에 벼려 적을 집중 공격할 수 있는 상태가 되며 모든 소울 라이트 스킬의 암흑 적용 확률이 증가한다. 또, 미하일의 공격 능력이 비약적으로 증가한다.\n\nMP 50 소비, 최종 데미지 30%, 크리티컬 데미지 10% 증가\n소울 라이트 스킬의 암흑 적용 확률 100%로 증가\n일부 소환수를 제외한 자신의 모든 공격 스킬 최대 공격 가능한 몬스터 수 1/3로 감소, 1명만 공격 가능한 스킬이 아닌 스킬의 최소치 2명";
            break;
        case 22:
            rep = "빛의 힘을 머금은 소울 실드를 소환한다. 소울 실드는 공중에도 설치 가능하며 일정 주기마다 빛을 내뿜어 적을 공격한다.\n\nMP 80 소비, 60초 동안 지속\n일정 주기마다 최대 6명의 적을 225%의 데미지로 4번 공격\n일반 몬스터 공격 시 데미지 60% 증가\n\n재사용 대기시간 40초";
            break;
        case 23:
            rep = "적에게 꺾이지 않는 굳건한 방패를 세워 오펜시브 디펜스와 로얄 가드의 반격을 강화한다.\n\n오펜시브 디펜스의 빛의 충격파 데미지 250%p 증가\n빛의 충격파 재발동 대기시간 10초로 감소\n로얄 가드 모든 단계 반격 데미지 200%p 증가";
            break;
        case 24:
            rep = "강화된 소울 실드의 힘으로 로얄 가드를 강화한다. 또한 적에게 입는 피해를 영구적으로 감소시키며 최대 HP를 증가시킨다.\n\n로얄 가드 성공시 15초 동안 최대 HP의 일정 비율로 피해를 입히는 공격의 피해 5% 감소\n영구적으로 10%의 피해 감소, 최대 HP 20% 증가";
            break;
        case 27:
            rep = "여제와 아군을 수호하고자 하는 굳건한 신념을 가다듬어 소울 실드와 소울 라이트 스킬이 더 강력한 힘을 발휘하게 된다. 지속 중 데미지가 증가하여 어드밴스드 소울 실드의 효과가 강화된다.\n또한 인스톨 실드가 오펜시브 디펜스 디버프를 남기게 되고, 오펜시브 디펜스가 강화된다.\n\nMP 200 소비, 25초 동안 지속, 데미지 15% 증가\n지속 중 어드밴스드 소울 실드의 로얄 가드 성공 시 피해 감소 효과의 피해 감소량 5% 증가, 증가되는 피해 감소량은 어드밴스드 소울 실드의 효과에 합 적용\n지속 중 인스톨 실드에 의해 오펜시브 디펜스 디버프 발생, 오펜시브 디펜스 빛의 충격파 재발동 대기시간 2초로 감소\n오펜시브 디펜스의 빛의 충격파 발생 시 빛의 파동이 추가로 발생\n빛의 파동 : 최대 8명의 적을 700%의 데미지로 6번 공격\n\n재사용 대기시간 180초";
            break;
        case 28:
            rep = "소울의 힘을 사용할 수 있는 빛의 기사를 소환하여 치명적인 돌격을 감행한다.\n\nMP 300 소비, 최대 15명의 적을 825%의 데미지로 10번 공격\n공격에 적중한 적에게 60초 동안 자신을 포함한 파티원의 데미지 10%가 증가하는 상태 이상 디버프 발생\n공격 시 50%의 확률로 암흑 적용, 암흑은 10초 동안 지속되며 대상의 명중률 30% 감소\n\n재사용 대기시간 15초";
            break;
        case 29:
            rep = "여제의 축복을 받아 데미지를 증가시킨다.\n\nMP 100 소비, 60초 동안 데미지 10% 증가\n파티원 중 시그너스 직업군과 미하일에만 효과\n\n재사용 대기시간 120초";
            break;
        case 30:
            rep = "";
            break;
    }
    return rep;
};
skm.getskillimage1Mihile = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "https://i.imgur.com/SOsD8O3.png";
            break;
        case 1:
            rep = "https://i.imgur.com/NVECM98.png";
            break;
        case 2:
            rep = "https://i.imgur.com/0WBw6r7.png";
            break;
        case 3:
            rep = "https://i.imgur.com/MQJiKKh.png";
            break;
        case 4:
            rep = "https://i.imgur.com/u3Zgubm.png";
            break;
        case 5:
            rep = "";
            break;
        case 6:
            rep = "https://i.imgur.com/Y1TGhzO.png";
            break;
        case 7:
            rep = "https://i.imgur.com/qh361jy.png";
            break;
        case 8:
            rep = "";
            break;
        case 9:
            rep = "";
            break;
        case 10:
            rep = "https://i.imgur.com/UPfYWYu.png";
            break;
        case 11:
            rep = "https://i.imgur.com/1DwjEMT.png";
            break;
        case 12:
            rep = "https://i.imgur.com/SLgxyk4.png";
            break;
        case 13:
            rep = "https://i.imgur.com/1FuN8DX.png";
            break;
        case 14:
            rep = "https://i.imgur.com/XQGjWxD.png";
            break;
        case 15:
            rep = "https://i.imgur.com/0mWl0sz.png";
            break;
        case 16:
            rep = "";
            break;
        case 17:
            rep = "";
            break;
        case 18:
            rep = "https://i.imgur.com/ZZ90rRC.png";
            break;
        case 19:
            rep = "https://i.imgur.com/D4MmB0N.png";
            break;
        case 20:
            rep = "https://i.imgur.com/WA58wKE.png";
            break;
        case 21:
            rep = "https://i.imgur.com/T51TiI1.png";
            break;
        case 22:
            rep = "https://i.imgur.com/3RUcixu.png";
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
            rep = "https://i.imgur.com/pVxbarU.png";
            break;
        case 28:
            rep = "https://i.imgur.com/YN1DE2O.png";
            break;
        case 29:
            rep = "https://i.imgur.com/j91kX3V.png";
            break;
        case 30:
            rep = "";
            break;
    }
    return rep;
};
skm.getskillimage2Mihile = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "https://i.imgur.com/xlGCJO8.png";
            break;
        case 1:
            rep = "https://i.imgur.com/YMNwckG.png";
            break;
        case 2:
            rep = "https://i.imgur.com/VVvs6qz.png";
            break;
        case 3:
            rep = "https://i.imgur.com/3miQJ9w.png";
            break;
        case 4:
            rep = "https://i.imgur.com/J5GaBjr.png";
            break;
        case 5:
            rep = "https://i.imgur.com/anEsX3q.png";
            break;
        case 6:
            rep = "https://i.imgur.com/fcvknWJ.png";
            break;
        case 7:
            rep = "https://i.imgur.com/JPH4m1Q.png";
            break;
        case 8:
            rep = "https://i.imgur.com/Gtn4rcK.png";
            break;
        case 9:
            rep = "https://i.imgur.com/EIymSjB.png";
            break;
        case 10:
            rep = "https://i.imgur.com/XxlzkY9.png";
            break;
        case 11:
            rep = "https://i.imgur.com/WfEslSv.png";
            break;
        case 12:
            rep = "https://i.imgur.com/KT5pKLI.png";
            break;
        case 13:
            rep = "https://i.imgur.com/wLFaq7l.png";
            break;
        case 14:
            rep = "https://i.imgur.com/rlgyzDo.png";
            break;
        case 15:
            rep = "https://i.imgur.com/JXVIGQL.png";
            break;
        case 16:
            rep = "https://i.imgur.com/CRftkdP.png";
            break;
        case 17:
            rep = "https://i.imgur.com/c8soOSo.png";
            break;
        case 18:
            rep = "https://i.imgur.com/p7zHyVQ.png";
            break;
        case 19:
            rep = "https://i.imgur.com/LjMMEIn.png";
            break;
        case 20:
            rep = "https://i.imgur.com/jdJAP1j.png";
            break;
        case 21:
            rep = "https://i.imgur.com/Ks47yoA.png";
            break;
        case 22:
            rep = "https://i.imgur.com/Fa4x2hL.png";
            break;
        case 23:
            rep = "https://i.imgur.com/WJzU4OI.png";
            break;
        case 24:
            rep = "https://i.imgur.com/7KCfzCe.png";
            break;
        case 25:
            rep = "https://i.imgur.com/QDMb1AQ.png";
            break;
        case 26:
            rep = "https://i.imgur.com/kqrFzdB.png";
            break;
        case 27:
            rep = "https://i.imgur.com/nDsXCWq.png";
            break;
        case 28:
            rep = "https://i.imgur.com/JOVwRA5.png";
            break;
        case 29:
            rep = "https://i.imgur.com/dUQVuiq.png";
            break;
        case 30:
            rep = "";
            break;
    }
    return rep;
};

module.exports = skm;