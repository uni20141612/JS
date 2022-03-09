const skda = {};

skda.getskillDemonavenger = function (skillname){
    var daret = -1;
    switch(skillname){
        case "데몬 프렌지":
        case "데몬프렌지":
        case "프렌지":
        case "데프":
            daret = 0;
            break;
        case "블러드 피스트":
        case "블러드피스트":
        case "블피":
            daret = 1;
            break;
        case "디멘션 소드":
        case "디멘션소드":
        case "디멘션":
        case "디소":
            daret = 2;
            break;
        case "레버넌트":
        case "레버":
            daret = 3;
            break;
        case "데몬 점프":
        case "데몬점프":
        case "더블점프":
        case "윗점":
        case "글라이드":
            daret = 4;
            break;
        case "데모닉 블러드":
        case "데모닉블러드":
            daret = 5;
            break;
        case "익시드":
            daret = 6;
            break;
        case "하이 이피션시":
        case "하이이피션시":
        case "이피션시":
            daret = 7;
            break;
        case "컨버전 스타포스":
        case "컨버전스타포스":
        case "컨버전":
        case "스타포스":
            daret = 8;
            break;
        case "블러드 컨트랙트":
        case "블러드컨트랙트":
            daret = 9;
            break;
        case "릴리즈 오버로드":
        case "릴리즈오버로드":
        case "릴리스 오버로드":
        case "릴리스오버로드":
        case "오버로드":
            daret = 10;
            break;
        case "앱졸브 라이프":
        case "앱졸브라이프":
        case "앱졸브":
        case "피흡":
            daret = 11;
            break;
        case "데모닉 샤프니스":
        case "데모닉샤프니스":
        case "샤프니스":
            daret = 12;
            break;
        case "익시드 : 데몬 스트라이크":
        case "익시드 : 데몬스트라이크":
        case "익시드:데몬스트라이크":
        case "익시드 데몬 스트라이크":
        case "익시드 데몬스트라이크":
        case "익시드데몬스트라이크":
        case "데몬 스트라이크":
        case "데몬스트라이크":
        case "데스":
            daret = 13;
            break;
        case "배츠 스웜":
        case "배츠스웜":
        case "스웜":
        case "박쥐":
            daret = 14;
            break;
        case "어비셜 레이지":
        case "어비셜레이지":
        case "어비셜":
        case "어레":
            daret = 15;
            break;
        case "이너 스트렝스":
        case "이너스트렝스":
        case "스트렝스":
            daret = 16;
            break;
        case "익시드 : 문라이트 슬래시":
        case "익시드 : 문라이트슬래시":
        case "익시드:문라이트슬래시":
        case "익시드 문라이트 슬래시":
        case "익시드 문라이트슬래시":
        case "익시드문라이트슬래시":
        case "문라이트 슬래시":
        case "문라이트슬래시":
        case "문라이트":
        case "슬래시":
        case "문슬":
            daret = 17;
            break;
        case "인헤일 바이탈러티":
        case "인헤일바이탈러티":
        case "인헤일":
        case "바이탈러티":
        case "인바":
            daret = 18;
            break;
        case "실드 차지":
        case "실드차지":
        case "실차":
        case "밀격기":
        case "밀격":
            daret = 19;
            break;
        case "리프랙트 이블":
        case "리프랙트이블":
        case "리프랙트":
            daret = 20;
            break;
        case "디아볼릭 리커버리":
        case "디아볼릭리커버리":
        case "디아볼릭":
            daret = 21;
            break;
        case "이즈 익시드 페인":
        case "이즈 익시드페인":
        case "이즈익시드페인":
        case "이익페":
            daret = 22;
            break;
        case "어드밴스드 앱졸브 라이프":
        case "어드밴스드 앱졸브라이프":
        case "어드밴스드앱졸브라이프":
        case "어앱라":
            daret = 23;
            break;
        case "익시드 : 엑스큐션":
        case "익시드:엑스큐션":
        case "익시드 엑스큐션":
        case "익시드엑스큐션":
        case "엑스큐션":
            daret = 24;
            break;
        case "실드 체이싱":
        case "실드체이싱":
        case "실체":
        case "쉴드 체이싱":
        case "쉴드체이싱":
        case "쉴체":
            daret = 25;
            break;
        case "아머 브레이크":
        case "아머브레이크":
        case "아브":
            daret = 26;
            break;
        case "블러디 임프리즌":
        case "블러디임프리즌":
        case "블임":
        case "블러디":
        case "임프리즌":
        case "바인드":
            daret = 27;
            break;
        case "오버휄밍 파워":
        case "오버휄밍파워":
        case "오버웰밍 파워":
        case "오버웰밍파워":
            daret = 28;
            break;
        case "디펜스 엑스퍼타이즈":
        case "디펜스엑스퍼타이즈":
            daret = 29;
            break;
        case "인핸스드 익시드":
        case "인핸스드익시드":
            daret = 30;
            break;
        case "포비든 컨트랙트":
        case "포비든컨트랙트":
        case "포비든":
        case "포컨":
            daret = 31;
            break;
        case "사우전드 소드":
        case "사우전드소드":
        case "사우전드":
        case "사소":
            daret = 32;
            break;
    }
    return daret;
};
skda.getskillnameDemonavenger = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "데몬 프렌지";
            break;
        case 1:
            rep = "블러드 피스트";
            break;
        case 2:
            rep = "디멘션 소드";
            break;
        case 3:
            rep = "레버넌트";
            break;
        case 4:
            rep = "데몬 점프";
            break;
        case 5:
            rep = "데모닉 블러드";
            break;
        case 6:
            rep = "익시드";
            break;
        case 7:
            rep = "하이 이피션시";
            break;
        case 8:
            rep = "컨버전 스타포스";
            break;
        case 9:
            rep = "블러드 컨트랙트";
            break;
        case 10:
            rep = "릴리즈 오버로드";
            break;
        case 11:
            rep = "앱졸브 라이프";
            break;
        case 12:
            rep = "데모닉 샤프니스";
            break;
        case 13:
            rep = "익시드 : 데몬 스트라이크";
            break;
        case 14:
            rep = "배츠 스웜";
            break;
        case 15:
            rep = "어비셜 레이지";
            break;
        case 16:
            rep = "이너 스트렝스";
            break;
        case 17:
            rep = "익시드 : 문라이트 슬래시";
            break;
        case 18:
            rep = "인헤일 바이탈러티";
            break;
        case 19:
            rep = "실드 차지";
            break;
        case 20:
            rep = "리프랙트 이블";
            break;
        case 21:
            rep = "디아볼릭 리커버리";
            break;
        case 22:
            rep = "이즈 익시드 페인";
            break;
        case 23:
            rep = "어드밴스드 앱졸브 라이프";
            break;
        case 24:
            rep = "익시드 : 엑스큐션";
            break;
        case 25:
            rep = "실드 체이싱";
            break;
        case 26:
            rep = "아머 브레이크";
            break;
        case 27:
            rep = "블러디 임프리즌";
            break;
        case 28:
            rep = "오버휄밍 파워";
            break;
        case 29:
            rep = "디펜스 엑스퍼타이즈";
            break;
        case 30:
            rep = "인핸스드 익시드";
            break;
        case 31:
            rep = "포비든 컨트랙트";
            break;
        case 32:
            rep = "사우전드 소드";
            break;
    }
    return rep;
};
skda.getskilldesc1Demonavenger = function (skillcode){
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
            rep = "의지 20레벨, 카리스마 20레벨";
            break;
        case 6:
            rep = "하단 참조";
            break;
        case 7:
            rep = "포션의 회복량 200%";
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
            rep = "공격 적중 시 100% 확률로 최대 HP의 5% 회복";
            break;
        case 12:
            rep = "영구적으로 이동속도 45, 최대 이동속도 20 증가";
            break;
        case 13:
            rep = "최대 10명의 적을 125%의 데미지로 4번 공격";
            break;
        case 14:
            rep = "최대 HP의 1% 소비, 200%의 데미지로 총 40번 공격.";
            break;
        case 15:
            rep = "공격력 40 증가";
            break;
        case 16:
            rep = "영구적으로 최대 HP 600";
            break;
        case 17:
            rep = "최대 10명의 적을 300%의 데미지로 3번 공격";
            break;
        case 18:
            rep = "하단 참조";
            break;
        case 19:
            rep = "하단 참조";
            break;
        case 20:
            rep = "HP 900 소비, 180초 동안 모든 속성 내성 50%";
            break;
        case 21:
            rep = "HP 900 소비, 180초 동안 최대 HP가 25% 증가";
            break;
        case 22:
            rep = "오버로드 수치로 인해 감소되는 HP 흡수량 2% 감소";
            break;
        case 23:
            rep = "앱졸브 라이프의 흡수량 10%(최대 HP의 %)";
            break;
        case 24:
            rep = "최대 2명의 적을 540%의 데미지로 4번 공격 / 방무 30%";
            break;
        case 25:
            rep = "하단 참조";
            break;
        case 26:
            rep = "하단 참조";
            break;
        case 27:
            rep = "최대 14명의 적을 800% 데미지로 3번 공격, 10초간 바인드";
            break;
        case 28:
            rep = "최종 데미지 15%, 데미지 30%";
            break;
        case 29:
            rep = "방무 30%, 실드 차지, 실드 체이싱의 공격력 20% 증가";
            break;
        case 30:
            rep = "[파이널 어택류 스킬] 익시드 공격 이후 70% 확률";
            break;
        case 31:
            rep = "30초 동안 데미지 10% 증가, 스킬 사용 시 HP 소비 없음";
            break;
        case 32:
            rep = "오버로드 5 증가, 14명의 적 500% 데미지로 8번 공격";
            break;
    }
    return rep;
};
skda.getskilldesc2Demonavenger = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "최대 HP에 비해 현재 HP가 적을수록 최종 데미지가 증가한다.";
            break;
        case 1:
            rep = "회복 제한 디버프 무시, 무조건 최대 HP가 일정 비율로 회복";
            break;
        case 2:
            rep = "통상 모드 - 회전 모드";
            break;
        case 3:
            rep = "불사 상태에 돌입하는 액티브 버프";
            break;
        case 4:
            rep = "이동기";
            break;
        case 5:
            rep = "스탠스 확률 100% 증가.";
            break;
        case 6:
            rep = "익시드 상태에서는 HP 소모가 증가한다";
            break;
        case 7:
            rep = "엘릭서류 아이템은 해당사항이 없다.";
            break;
        case 8:
            rep = "질보다 양";
            break;
        case 9:
            rep = "HP비례 스공";
            break;
        case 10:
            rep = "시전 동작이 없음";
            break;
        case 11:
            rep = "공격 대상 1명당 5%";
            break;
        case 12:
            rep = "점프력 20, 크리티컬 확률 20%가 증가.";
            break;
        case 13:
            rep = "HP 1%, 최종 단계에 이르면 돌진 범위가 증가한다.";
            break;
        case 14:
            rep = "스킬 키를 다시 누르면 진행 방향이 바뀜";
            break;
        case 15:
            rep = "-";
            break;
        case 16:
            rep = "방어력 500 증가";
            break;
        case 17:
            rep = "HP 3%, 최종 단계에 이르면 공격 범위가 증가한다.";
            break;
        case 18:
            rep = "키다운형 체력 회복기";
            break;
        case 19:
            rep = "돌진형 밀격기";
            break;
        case 20:
            rep = "상태 이상 내성 50 증가, 받는 데미지 30% 감소";
            break;
        case 21:
            rep = "4초 주기로 최대 HP의 5%를 회복.";
            break;
        case 22:
            rep = "익시드 스킬의 데미지 20% 증가";
            break;
        case 23:
            rep = "릴리즈 오버로드의 최종 데미지 증가량 25%로 증가";
            break;
        case 24:
            rep = "HP 4%, 최종 단계에 이르면 2번 더 공격한다.";
            break;
        case 25:
            rep = "사출기";
            break;
        case 26:
            rep = "방깎 디버프기";
            break;
        case 27:
            rep = "HP 5000, 재사용 대기시간 120초";
            break;
        case 28:
            rep = "공격 속도 1단계 증가";
            break;
        case 29:
            rep = "실드 차지, 실드 체이싱은 적 방어력을 2배 더 무시";
            break;
        case 30:
            rep = "200%의 데미지로 2명의 적을 2번 추가 공격";
            break;
        case 31:
            rep = "HP 5000, 재사용 대기시간 75초";
            break;
        case 32:
            rep = "최대 HP의 15%, 재사용 대기시간 8초";
            break;
    }
    return rep;
};
skda.getskilldesc3Demonavenger = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "끝없는 복수심에 자신의 몸을 태워 힘을 얻는다. 마족의 피로 공격 반사 및 공격 무시 상태의 적에게도 피해를 줄 수 있다.\n\n최대 HP의 20% 소비, 초당 HP 6000 소비, 회복 아이템 및 스킬의 회복량 최대 HP의 2%까지로 제한, 최대 HP의 일정 비율로 피해를 입히는 포함한 모든 피격 데미지 30% 감소\n\n최대 HP 대비 소모된 HP 2%당 최종 데미지 1% 증가하여 최대 35%까지 증가, 복수심에 타오르는 마족의 피가 주위를 맴돌며 최대 10명의 적을 일정 주기마다 840%로 3번 공격\n최대 HP의 30% 이하에서는 데몬 프렌지로 HP를 소모하지 않고 회복량 제한도 받지 않음\n재사용 시 스킬 비활성화\n\n재사용 대기시간 1초";
            break;
        case 1:
            rep = "마족의 피를 응축시킨 후 폭발하듯 퍼뜨려 주변 적을 공격한다. 스킬 사용 중에도 사용할 수 있고 공격으로 적을 해치우거나 보스 몬스터를 공격했을 경우 체력이 회복되고 데몬 프렌지의 회복량 감소 상태나 고스트파크를 제외한 특정한 회복 불가 상황에서도 회복 할 수 있다.\n\n최대 HP의 3% 소비, 최대 8명의 적을 1595%의 데미지로 12번 공격, 공격 동작 중 최대 HP의 일정 비율로 피해를 입히는 공격을 포함한 피격 데미지 30% 감소\n최대 HP의 25% 회복, 추가 크리티컬 확률 100%, 몬스터 방어율 100% 추가 무시\n\n재사용 대기시간 12초";
            break;
        case 2:
            rep = "데스페라도의 힘을 증폭시켜 다른 차원의 무형검을 현현시킨다. 무형검이 회전할 때의 공격은 공격 반사 상태의 적에게도 피해를 입힌다.\n\n최대 HP의 20% 소비, 40초 동안 3초마다 최대 8명의 적을 1870%의 데미지로 8번 공격하는 무형검 소환\n소환 중 스킬을 한번 더 사용하면 남은 지속시간이 1/5이 되지만 무형검이 주위를 빠르게 회전하며 일정 시간마다 최대 8명의 적을 660%의 데미지로 6번 공격\n\n디멘션 소드의 모든 공격은 몬스터 방어율 100% 추가 무시\n\n재사용 대기시간 120초";
            break;
        case 3:
            rep = "끝없는 분노로 인해 삶과 죽음의 경계를 넘은 망령이 된다.\n지속 중 피격 데미지로 인해 HP가 1 미만이 되지 않고 치명적 상태이상에 걸리지 않으며 받았던 데미지가 분노로 저장된다. 저장된 분노는 가시로 표출되어 주변을 공격하지만 스킬 종료 후 쌓였던 분노로 인해 지속적으로 고통을 받게 된다.\n지속 중 스킬을 한 번 더 사용해서 해제할 수 있고 분노의 가시는 공격 무시 및 공격 반사 상태의 적에게도 피해를 입힐 수 있으나 반사 피해를 무시하지 못한다.\n레버넌트 지속 중 및 분노로 인한 지속 피해를 받을 때 전투 상태가 유지된다.\n\n최대 HP의 25% 소비, 30초 동안 지속\n\n익시드 스킬 적중 시 최대 5명의 적을 660%의 데미지로 9번 공격하는 분노의 가시 발동, 몬스터 방어율 30% 추가 무시, 재발동 대기시간 4초\n받은 피해를 최대 HP의 200%에 해당하는 수치까지 분노로 저장하고 저장량에 비례해 분노의 가시 재발동 대기시간 감소, 일정 시간마다 현재 쌓인 분노의 7% 감소\n스킬 종료 후 일정 간격마다 저장된 분노와 최대 HP의 1%에 해당하는 피해를 합쳐 25번에 나누어 받음, 해당 피해로 사망하지 않음\n\n재사용 대기시간 : 240초";
            break;
        case 4:
            rep = "마족의 날개를 이용한 여러가지 점프 스킬을 사용할 수 있다. 글라이드 커맨드 잠금 : 마우스 우클릭, 글라이드 커맨드 잠금 중에는 점프 중 점프키를 사용 시 더블 점프 발동\n\n하이점프 : 점프 중 ↑↑\n더블점프 : 점프 중 →→ 또는 ←←\n글라이드 : 점프키 (누르기 유지)";
            break;
        case 6:
            rep = "익시드 공격 스킬은 사용할 수록 공격이 빨라지거나 강력해지지만 몸에 무리가 가서 앱졸브 라이프로 흡수할 수있는 HP 수치가 감소하고, 스킬로 소비되는 HP가 증가한다.\n익시드 스킬의 최종단계에 이르면 스킬의 특성이 바뀌며, 다른 익시드 스킬을 사용하면 오버로드가 추가로 증가한다.\n\n익시드 오버로드 최대 수치 20, 오버로드가 2만큼 누적될 때마다 앱졸브 라이프 흡수율 1%p 감소\n익시드 스킬 사용 중 다른 익시드 스킬을 사용하면 오버로드 1 추가 증가\n릴리즈 오버로드 사용 시 익시드 단계 절반으로 감소";
            break;
        case 8:
            rep = "장비에 부여된 별의 힘을 자신의 것으로 변환시킨다. 장착한 장비의 스타포스 강화 정도에 따라 최대 HP가 증가하며 1성당 HP 증가량은 장착한 모든 장비의 스타포스 합이 높을수록 증가한다. 훈장과 칭호의 스타포스 강화 및 길드 스킬로 증가하는 스타포스는 컨버전 스타포스의 효과를 받을 수 없다\n\n장착한 장비의 스타포스에 비례해 최대 HP 증가";
            break;
        case 9:
            rep = "피의 계약을 통해 자신의 HP를 공격력으로 환산한다. 이 계약은 전사 방어구 및 데몬어벤져 전용 장비의 착용 요구 스탯을 무시하게 해준다. 데몬어벤져의 스킬로 인한 HP 회복은 회복 스킬 효율 증가의 효과가 적용되지 않으며 특정한 회복 불가 상황에서는 1~4차 스킬로 인한 HP소모가 감소된다.\n\n최대 HP를 기준으로 스탯 공격력이 결정.\n장비로 증가하는 추가 HP는 일정 비율만 반영\n장비 및 스킬로 인한 추가 HP는 순수 HP보다 스탯 공격력 증가량이 낮음\n전사 방어구, 데몬어벤져 전용 장비 착용 시 스탯 요구치 무시\n특수한 회복 불가 상황에서는 1~4차 스킬로 인한 HP소모 90% 감소";
            break;
        case 10:
            rep = "익시드를 사용해서 쌓인 오버로드 디버프를 해제하여 최종 데미지를 증가시킨다.\n오버로드 최대 수치가 아닐 때 사용하면 현재 수치와 최대 수치의 비율만큼 HP 회복량과 최종 데미지 증가 수치가 변동된다.\n\n오버로드 디버프를 0으로 초기화, 60초 동안 최종 데미지 15% 증가. 최대 HP의 100% 회복.\n데몬 프렌지의 회복량 감소 상태, 고스트파크가 아닌 특정한 회복 불가 상황에서도 전체 회복량의 20%는 회복";
            break;
        case 18:
            rep = "키다운을 하는 동안 적들을 타격하면 데스페라도로 생명력을 흡수한다. 생명력 흡수는 몬스터 수나 언데드 상태 이상과 무관하게 흡수한다. 키다운이 끝나면 폭발을 일으키며 추가 공격을 한다.\n\nHP 100 소비, 키다운 동안 12명의 적을 300%의 데미지로 공격하고 최대 HP의 10%를 회복.\n키다운 종료 시, 1000%의 데미지로 추가 공격\n재사용 대기시간 12초";
            break;
        case 19:
            rep = "방패를 세워 전방의 적들을 밀어내며 돌진한다. 돌진이 끝난 후에 방패에서 힘을 방출하여 추가로 적들을 밀어내고 기절시킨다. 일부 몬스터는 저항하여 밀리지 않고 기절하지 않는다.\n\n최대 HP의 2% 소비. 전방으로 최대 12명의 적을 200%의 데미지로 2번 공격하며 밀어내면서 이동함. 이동이 난 다음 12명의 적을 200%의 데미지로 공격하면서 추가로 밀어냄";
            break;
        case 25:
            rep = "적들을 추적하는 방패를 던진다. 던져진 방패는 목표를 맞춘 다음, 주변의 적을 쫓아 간다. 주변에 적이 없을 경우 동일한 적을 다시 공격한다. 실드 체이싱은 최대 HP가 높은 보스 몬스터를 우선 추적하며 공격 반사 상태의 적을 공격해도 피해를 입지 않는다.\n\n최대 HP의 8% 소비, 2개의 방패를 적에게 던져서 500% 데미지로 2번 공격. 방패 1개당 최대 8번 공격\n재사용 대기시간 6초\n\n[패시브 효과 : 익시드 : 문라이트 슬래시의 데미지 330%p 증가]";
            break;
        case 26:
            rep = "전방의 적들을 공격하여 갑옷을 찢는다. 공격 당한 적들은 일정 시간 방어율이 감소하는 디버프에 걸린다.\n\nHP 1000 소비, 최대 12명의 적을 350%의 데미지로 4번 공격. 공격당한 적의 방어율이 30초 동안 30% 감소\n\n[패시브 효과 : 익시드 : 데몬 스트라이크의 스킬 데미지 155%p 증가]";
            break;
        case 32:
            rep = "";
            break;
    }
    return rep;
};
skda.getskillimage1Demonavenger = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "https://i.imgur.com/xM99yOr.png";
            break;
        case 1:
            rep = "https://i.imgur.com/cG6lrtQ.png";
            break;
        case 2:
            rep = "https://i.imgur.com/Oh91QIE.png";
            break;
        case 3:
            rep = "https://i.imgur.com/VmRqQzB.png";
            break;
        case 4:
            rep = "https://i.imgur.com/UuVCvPM.png";
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
            rep = "https://i.imgur.com/d2a4G02.png";
            break;
        case 11:
            rep = "";
            break;
        case 12:
            rep = "";
            break;
        case 13:
            rep = "https://i.imgur.com/RzH6pfi.png";
            break;
        case 14:
            rep = "https://i.imgur.com/uNclPIH.png";
            break;
        case 15:
            rep = "";
            break;
        case 16:
            rep = "";
            break;
        case 17:
            rep = "https://i.imgur.com/gSiO5Bv.png";
            break;
        case 18:
            rep = "https://i.imgur.com/I0RxCGA.png";
            break;
        case 19:
            rep = "https://i.imgur.com/BH3Py4J.png";
            break;
        case 20:
            rep = "https://i.imgur.com/giADrzM.png";
            break;
        case 21:
            rep = "https://i.imgur.com/ydnB79L.png";
            break;
        case 22:
            rep = "";
            break;
        case 23:
            rep = "";
            break;
        case 24:
            rep = "https://i.imgur.com/1VoN8Zx.png";
            break;
        case 25:
            rep = "https://i.imgur.com/KLAiNIH.png";
            break;
        case 26:
            rep = "https://i.imgur.com/Hu2UCKH.png";
            break;
        case 27:
            rep = "https://i.imgur.com/GW0CbM6.png";
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
            rep = "https://i.imgur.com/aMfDD76.png";
            break;
        case 32:
            rep = "https://i.imgur.com/0CaWC3O.png";
            break;
    }
    return rep;
};
skda.getskillimage2Demonavenger = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "https://i.imgur.com/dA7QYRd.png";
            break;
        case 1:
            rep = "https://i.imgur.com/besnY3D.png";
            break;
        case 2:
            rep = "https://i.imgur.com/YMSzcgm.png";
            break;
        case 3:
            rep = "https://i.imgur.com/1uDpV1B.png";
            break;
        case 4:
            rep = "https://i.imgur.com/m7vasm9.png";
            break;
        case 5:
            rep = "https://i.imgur.com/wdJUKtt.png";
            break;
        case 6:
            rep = "https://i.imgur.com/VMWDYGj.png";
            break;
        case 7:
            rep = "https://i.imgur.com/9ElIph1.png";
            break;
        case 8:
            rep = "https://i.imgur.com/W16cp8C.png";
            break;
        case 9:
            rep = "https://i.imgur.com/CGM6moM.png";
            break;
        case 10:
            rep = "https://i.imgur.com/ANiSn4m.png";
            break;
        case 11:
            rep = "https://i.imgur.com/0ST9aCy.png";
            break;
        case 12:
            rep = "https://i.imgur.com/9sQqZpf.png";
            break;
        case 13:
            rep = "https://i.imgur.com/wo21GzM.png";
            break;
        case 14:
            rep = "https://i.imgur.com/WpBfqYR.png";
            break;
        case 15:
            rep = "https://i.imgur.com/G6KNJCN.png";
            break;
        case 16:
            rep = "https://i.imgur.com/w5KF6CT.png";
            break;
        case 17:
            rep = "https://i.imgur.com/SJ0RAa7.png";
            break;
        case 18:
            rep = "https://i.imgur.com/7VTGet6.png";
            break;
        case 19:
            rep = "https://i.imgur.com/qiyHkun.png";
            break;
        case 20:
            rep = "https://i.imgur.com/XgnzWZ2.png";
            break;
        case 21:
            rep = "https://i.imgur.com/gAYPVs8.png";
            break;
        case 22:
            rep = "https://i.imgur.com/H9QBMZE.png";
            break;
        case 23:
            rep = "https://i.imgur.com/T1F6FVM.png";
            break;
        case 24:
            rep = "https://i.imgur.com/4d9OXXX.png";
            break;
        case 25:
            rep = "https://i.imgur.com/yo6Uh2R.png";
            break;
        case 26:
            rep = "https://i.imgur.com/0qcBZTQ.png";
            break;
        case 27:
            rep = "https://i.imgur.com/o3tw8Zl.png";
            break;
        case 28:
            rep = "https://i.imgur.com/2MOuDgI.png";
            break;
        case 29:
            rep = "https://i.imgur.com/QHGmUY8.png";
            break;
        case 30:
            rep = "https://i.imgur.com/eYqwSKA.png";
            break;
        case 31:
            rep = "https://i.imgur.com/iMVmGQU.png";
            break;
        case 32:
            rep = "https://i.imgur.com/IoxpNDb.png";
            break;
    }
    return rep;
};

module.exports = skda;