const sks = {};

sks.getskillShadower = function (skillname){
    var cret = -1;
    switch(skillname){
        case "쉐도우 어썰트":
        case "쉐도우어썰트":
        case "어썰트":
        case "쉐어":
            cret = 0;
            break;
        case "절개":
            cret = 1;
            break;
        case "소닉 블로우":
        case "소닉블로우":
        case "소블":
        case "소닉":
            cret = 2;
            break;
        case "멸귀참영진":
        case "멸귀":
        case "멸참":
            cret = 3;
            break;
        case "크루얼 스탭":
        case "크루얼스탭":
        case "크스":
            cret = 4;
            break;
        case "다크 사이트":
        case "다크사이트":
        case "닼사":
            cret = 5;
            break;
        case "크리티컬 엣지":
        case "크리티컬엣지":
        case "엣지":
        case "크엣":
            cret = 6;
            break;
        case "스틸":
            cret = 7;
            break;
        case "카르마":
            cret = 8;
            break;
        case "실드 마스터리":
        case "실드마스터리":
        case "실마":
            cret = 9;
            break;
        case "시프 어질리티":
        case "시프어질리티":
        case "어질리티":
        case "윗점":
            cret = 10;
            break;
        case "무스펠 하임":
        case "무스펠하임":
        case "무스펠":
        case "무하":
        case "밀격기":
        case "밀격":
            cret = 11;
            break;
        case "메소 익스플로젼":
        case "메소익스플로젼":
        case "메익":
            cret = 12;
            break;
        case "메소 익스플로젼(블러디 파킷)":
        case "메소익스플로젼(블러디 파킷)":
        case "메소익스플로젼(블러디파킷)":
        case "메소 익스플로젼 블러디 파킷":
        case "메소익스플로젼 블러디 파킷":
        case "메소익스플로젼 블러디파킷":
        case "메소익스플로젼블러디파킷":
        case "메소 익스플로젼 블러디":
        case "메소익스플로젼 블러디":
        case "메소익스플로젼블러디":
        case "메익 블러디":
        case "메익블러디":
        case "메익블":
        case "블러디 익스플로젼":
        case "블러디익스플로젼":
        case "블익":
            cret = 13;
            break;
        case "다크 플레어":
        case "다크플레어":
        case "다플":
        case "닼플":
            cret = 14;
            break;
        case "픽 파킷":
        case "픽파킷":
            cret = 15;
            break;
        case "쉐도우 파트너":
        case "쉐도우파트너":
        case "쉐파":
        case "분신":
            cret = 16;
            break;
        case "어드밴스드 다크 사이트":
        case "어드밴스드 다크사이트":
        case "어드밴스드다크사이트":
        case "어닼사":
            cret = 17;
            break;
        case "인투 다크니스":
        case "인투다크니스":
            cret = 18;
            break;
        case "베놈":
            cret = 19;
            break;
        case "그리드":
            cret = 20;
            break;
        case "래디컬 다크니스":
        case "래디컬다크니스":
        case "래디컬":
            cret = 21;
            break;
        case "암살":
            cret = 22;
            break;
        case "블러디 파킷":
        case "블러디파킷":
        case "블파킷":
        case "블파":
            cret = 23;
            break;
        case "써든레이드":
        case "써든 레이드":
        case "서든 레이드":
        case "서든레이드":
        case "써레":
        case "서레":
            cret = 24;
            break;
        case "연막탄":
        case "연막":
            cret = 25;
            break;
        case "섀도어 인스팅트":
        case "섀도어인스팅트":
        case "인스팅트":
        case "섀인팅":
            cret = 26;
            break;
        case "페이크":
            cret = 27;
            break;
        case "페이탈 베놈":
        case "페이탈베놈":
        case "페이탈":
            cret = 28;
            break;
        case "플립 더 코인":
        case "플립 더코인":
        case "플립더 코인":
        case "플립더코인":
        case "플더코":
        case "플립":
            cret = 29;
            break;
        case "베일 오브 섀도우":
        case "베일오브 섀도우":
        case "베일오브섀도우":
        case "베일":
        case "베오섀":
            cret = 30;
            break;
    }
    return cret;
};
sks.getskillnameShadower = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "쉐도우 어썰트";
            break;
        case 1:
            rep = "절개";
            break;
        case 2:
            rep = "소닉 블로우";
            break;
        case 3:
            rep = "멸귀참영진";
            break;
        case 4:
            rep = "크루얼 스탭";
            break;
        case 5:
            rep = "다크 사이트";
            break;
        case 6:
            rep = "크리티컬 엣지";
            break;
        case 7:
            rep = "스틸";
            break;
        case 8:
            rep = "카르마";
            break;
        case 9:
            rep = "실드 마스터리";
            break;
        case 10:
            rep = "시프 어질리티";
            break;
        case 11:
            rep = "무스펠 하임";
            break;
        case 12:
            rep = "메소 익스플로젼";
            break;
        case 13:
            rep = "메소 익스플로젼(블러디 파킷)";
            break;
        case 14:
            rep = "다크 플레어";
            break;
        case 15:
            rep = "픽 파킷";
            break;
        case 16:
            rep = "쉐도우 파트너";
            break;
        case 17:
            rep = "어드밴스드 다크 사이트";
            break;
        case 18:
            rep = "인투 다크니스";
            break;
        case 19:
            rep = "베놈";
            break;
        case 20:
            rep = "그리드";
            break;
        case 21:
            rep = "래디컬 다크니스";
            break;
        case 22:
            rep = "암살";
            break;
        case 23:
            rep = "블러디 파킷";
            break;
        case 24:
            rep = "써든레이드";
            break;
        case 25:
            rep = "연막탄";
            break;
        case 26:
            rep = "섀도어 인스팅트";
            break;
        case 27:
            rep = "페이크";
            break;
        case 28:
            rep = "페이탈 베놈";
            break;
        case 29:
            rep = "플립 더 코인";
            break;
        case 30: 
            rep = "베일 오브 섀도우";
            break;
    }
    return rep;
};
sks.getskilldesc1Shadower = function (skillcode){
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
            rep = "MP 40 소비, 8명의 적에게 250% 데미지로 6번 공격";
            break;
        case 5:
            rep = "하단 참조";
            break;
        case 6:
            rep = "크리티컬 확률 25%, 크리티컬 데미지 5% 증가";
            break;
        case 7:
            rep = "하단 참조";
            break;
        case 8:
            rep = "공격력 30, 스탠스 확률 40% 증가";
            break;
        case 9:
            rep = "방패 혹은 단검용 검집 착용 시 방어력 110% 추가 증가";
            break;
        case 10:
            rep = "위 방향으로 플래시 점프 사용 가능";
            break;
        case 11:
            rep = "420% 데미지로 최대 8명의 적을 2번 공격";
            break;
        case 12:
            rep = "동전 1개당 1명의 적을 100% 데미지로 2번 공격";
            break;
        case 13:
            rep = "하단 참조";
            break;
        case 14:
            rep = "60초 동안 거대한 단검 소환/ 재사용 대기시간 60초";
            break;
        case 15:
            rep = "공격 시 30% 확률로 동전이 떨어짐, 최대 15개";
            break;
        case 16:
            rep = "200초간 최종데미지 70%로 추가 타격하는 그림자동료 소환";
            break;
        case 17:
            rep = "하단 참조";
            break;
        case 18:
            rep = "범위 내에 적에게 이동 후 다크 사이트 상태가 됨";
            break;
        case 19:
            rep = "공격 시 30% 확률";
            break;
        case 20:
            rep = "공격력 25, 몬스터가 드롭하는 메소의 획득량 20% 증가";
            break;
        case 21:
            rep = "최대 HP 20%, 상태 이상 내성 30";
            break;
        case 22:
            rep = "하단 참조";
            break;
        case 23:
            rep = "하단 참조";
            break;
        case 24:
            rep = "최대 15명의 적에게 494% 데미지로 7번 공격";
            break;
        case 25:
            rep = "하단 참조";
            break;
        case 26:
            rep = "공격력 50, 최종 데미지 15%, 방어율 무시 20% 증가";
            break;
        case 27:
            rep = "45% 확률로 추가 회피, 스탠스 확률 60% 증가";
            break;
        case 28:
            rep = "공격 시 50% 확률, 3회 중첩 가능";
            break;
        case 29:
            rep = "크리티컬공격 발생시 데미지5%, 크확 5% 버프 획득";
            break;
        case 30: 
            rep = "범위내 15명, 800% 데미지로 12초 동안 지속 공격";
            break;
    }
    return rep;
};
sks.getskilldesc2Shadower = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "텔레포트 판정";
            break;
        case 1:
            rep = "몬스터리젠시 판정이 전 직업 핑스킬 중 가장 빠르다";
            break;
        case 2:
            rep = "공격 도중 슈퍼스탠스";
            break;
        case 3:
            rep = "설치형 광범위 공격기";
            break;
        case 4:
            rep = "[패시브 효과 : 최종 데미지 25% 증가]";
            break;
        case 5:
            rep = "지속중 다른스킬 사용, 스킬키 한번더 눌러 상태 해제가능";
            break;
        case 6:
            rep = "-";
            break;
        case 7:
            rep = "온오프 스킬";
            break;
        case 8:
            rep = "-";
            break;
        case 9:
            rep = "회피율 20%, 공격력 15 증가, 피격 데미지 60% 감소";
            break;
        case 10:
            rep = "도약 이후 플래시 점프를 다시 쓸 수는 없다";
            break;
        case 11:
            rep = "눈앞의 적들에게 접근해 피해를 입히고 밀어낸다";
            break;
        case 12:
            rep = "최대 10마리, 한 번에 최대 15개의 동전 사용 가능";
            break;
        case 13:
            rep = "블러디 파킷 활성화시 변경";
            break;
        case 14:
            rep = "일정 주기로 주위의 적 3명을 360%의 데미지로 공격";
            break;
        case 15:
            rep = "도트데미지로는 X, 타수마다 적용";
            break;
        case 16:
            rep = "메소 익스플로젼에는 미적용";
            break;
        case 17:
            rep = "자동 습득";
            break;
        case 18:
            rep = "재사용 대기시간을 다크 사이트와 공유/ 가장 멀리있는 적";
            break;
        case 19:
            rep = "6초 동안 1초당 90% 데미지의 도트 데미지 추가";
            break;
        case 20:
            rep = "메소 익스플로젼 개당 폭발 데미지 20%p 증가";
            break;
        case 21:
            rep = "모든 속성 내성 30% 증가";
            break;
        case 22:
            rep = "보스전 주력 공격기";
            break;
        case 23:
            rep = "온오프 스킬";
            break;
        case 24:
            rep = "10초 동안 1초당 210%의 도트 데미지, 쿨 30초";
            break;
        case 25:
            rep = "설치기";
            break;
        case 26:
            rep = "-";
            break;
        case 27:
            rep = "회피하면 웃음";
            break;
        case 28:
            rep = "8초 동안 1초당 160% 데미지의 도트 데미지 추가";
            break;
        case 29:
            rep = "최대 5번 중첩 가능/ 온오프 스킬";
            break;
        case 30: 
            rep = "재사용 대기시간 60초";
            break;
    }
    return rep;
};
sks.getskilldesc3Shadower = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "순식간에 이동하여 벤다.\n\nMP 300 소비, 돌진하면서 최대 12명의 적을 1320%의 데미지로 6번 공격, 추가 크리티컬 확률 25%, 몬스터 방어율 100% 추가 무시\n함께 사용한 방향키 방향으로 이동하며 공격, 4타까지 사용 가능\n1타 사용 후 재사용 대기시간 60초 적용되나 2~4타까지 사용 가능";
            break;
        case 1:
            rep = "패시브 효과 : 암살의 마지막 공격이 적중한 적에게 10초 동안 최대 3회까지 중첩되는 상처 디버프를 남김, 상처 디버프는 오직 1명의 적에게만 남길 수 있어 새로운 적에게 디버프를 남기면 이전에 남긴 디버프는 소멸\n\n액티브 효과 : MP 650 소비, 숨어 있던 동료들을 소환하여 최대 10명의 적을 1210%의 데미지로 5번 공격\n\n상처 디버프가 최대치인 적이 있다면 암살의 마지막 공격에서 연계하여 사용할 수 있고 해당 적의 뒤로 이동하여 1045%의 데미지로 7번 공격하는 참격 4번 발생, 추가 크리티컬 확률 100%, 몬스터 방어율 100% 추가 무시, 공격 후 1초 동안 무적\n\n재사용 대기시간 14초";
            break;
        case 2:
            rep = "보이지 않을 만큼 빠른 속도로 움직이며 연속 공격한다. 소닉 블로우의 모든 공격은 적중한 대상 중 최대 HP가 가장 높은 적에게 상처 디버프를 남긴다. 쉐도우 어썰트 또는 범위 내 상처 중첩이 최대인 대상이 있는 상태에서 절개를 사용하여 소닉 블로우를 즉시 취소할 수 있으며, 남은 공격 횟수에 비례하여 재사용 대기시간이 감소한다. 소닉 블로우를 시전하는 동안에는 적의 어떠한 공격에도 밀려나지 않는다.\n\nMP 1000 소비, 2.5초 동안 일정 시간마다 최대 8명의 적을 1100%의 데미지로 7번 연속 공격, 몬스터 방어율 100% 추가 무시\n소닉 블로우의 모든 공격은 적중한 대상 중 최대 HP가 가장 높은 적에게 상처 디버프를 3개 중첩\n재사용 대기시간 45초\n공격 중 상처 중첩이 최대치인 적이 있다면 절개를 사용하여 공격을 중단할 수 있으며, 남은 공격 횟수 1회당 재사용 대기시간 2.5초 감소";
            break;
        case 3:
            rep = "어둠의 협력자들과 특수한 진형으로 협동 공격을 한다. 암살, 크루얼 스탭 사용 중에 사용하면 시전 동작 없이 사용할 수 있다. 멸귀참영진은 공격 반사 상태의 적을 공격해도 피해를 입지 않고 쉐도우 파트너의 효과를 받지 않는다. 발동 중 스킬을 다시 사용하여 우두머리를 즉시 불러낼 수 있다.\n\nMP 1200 소비, 최대 6명의 적을 935%의 데미지로 8번 공격하는 협력자가 12번 출현한 후 우두머리 등장, 협력자 및 우두머리의 공격은 방어율 100% 추가 무시\n우두머리 : 최대 8명의 적을 1375%의 데미지로 15번 공격하는 참격 4번 발동\n\n재사용 대기시간 : 90초";
            break;
        case 5:
            rep = "MP 5 소비, 200초 동안 그림자에 몸을 숨김\n최대 HP의 일정 비율로 피해를 입히는 공격을 회피하였을 경우 다크 사이트가 해제되었을 때 회피한 횟수당 재사용 대기시간 3초 적용, 최대 5번까지 중첩\n\n매그너스의 운석과 수면가스\n블러디 퀸의 불꽃 도트 데미지\n벨룸의 종유석, 피에르의 모자\n반반의 시계\n스우의 낙하물\n우르스의 불꽃파편\n데미안의 불꽃구체와 석화, 돌진\n윌의 심연의 장벽\n파풀라투스의 시간의 틈 장판과 저주, 태엽(알람패턴 한정)\n진 힐라 잡몹 시체\n듄켈의 낙하물\n더스크의 운석\n검은 마법사의 붉은번개, 모닝 스타폴, 다크 폴링, 창조의 권능";
            break;
        case 7:
            rep = "자신의 공격 스킬로 적을 공격했을 때 일정 확률로 HP나 MP를 즉시 회복할 수 있는 물약을 훔쳐낸다.\n하나의 적에게 물약은 한 번만 훔칠 수 있으며, 성공할 때까지 계속 시도할 수 있다. 보스에게서 훔친 물약을 먹으면 HP와 MP가 가득 채워지고, 일정 시간 동안 공격력이 증가한다.\n\n10% 확률로 스틸, 훔친 물약 복용 시 HP/MP 회복, 보스에게 훔친 물약 복용 시 HP/MP 회복 및 3분 동안 공격력 30 증가 버프 발동";
            break;
        case 13:
            rep = "블러디 파킷으로 떨어진 동전을 움직여 적을 공격한다. 시전 시 다음 암살의 마무리 일격을 강화하는 살의 버프를 획득한다. 최대 HP가 높은 적을 우선적으로 추적하여 공격한다.\n\nMP 30 소비, 동전 1개당 1명의 적을 100% 데미지로 2번 공격, 최대 10마리의 적을 공격하며 한 번에 최대 15개의 동전 사용 가능, 보스 몬스터 공격 시 데미지 30% 증가\n시전 시 살의 버프 획득";
            break;
        case 17:
            rep = "은신기술을 연마하여 다크 사이트 중 공격 혹은 스킬 사용 시 일정 확률로 다크 사이트가 해제되지 않도록 해준다. 또한 피격 시 일정 확률로 다크 사이트가 자동 발동되며 다크 사이트 중 공격 시 최종 데미지 증가한다.\n단, 피격시 발동되는 다크사이트로 최대 HP의 일정 비율로 피해를 입히는 공격을 회피하였을 경우 재사용 대기시간이 적용되지 않지만 다크 사이트의 지속 시간이 감소된다.\n\n다크 사이트 중 공격 및 스킬 사용 시 15% 확률로 은신이 해제되지 않음. 자신의 연막탄 및 베일 오브 섀도우 내부에서는 확률 100%로 증가\n피격 시 15% 확률로 다크 사이트 자동 발동, 다크 사이트 중 공격 시 최종 데미지 15% 증가\n피격 시 발동되는 다크 사이트로 최대 HP의 일정 비율로 피해를 입히는 공격을 회피하였을 경우 다크 사이트의 남은 지속 시간이 최대치의 20% 만큼 감소";
            break;
        case 22:
            rep = "적의 급소를 연속 공격하여 엄청난 데미지를 준다. 처음 공격 후 암살 스킬을 한 번 더 시전하여 강력한 마무리 일격을 할 수 있다. 마무리 일격 후 은신 상태가 해제된다. 추가로, 살의 버프를 보유한 상태에서 더욱 강한 암살의 마무리 일격을 사용할 수 있으며 적에게 명중 시 살의 버프를 소모한다. 암살은 최대 HP가 가장 높은 적을 우선적으로 공격하며, 시전하는 동안에는 적의 어떠한 공격에도 밀려나지 않는다.\n\nMP 44 소비, 270% 데미지로 6번 연속 공격, 스킬 키를 한 번 더 눌러 490%의 데미지로 6번 공격하는 마무리 일격 시전\n살의 버프를 소모하여 사용한 마무리 일격은 최종 데미지 50% 증가";
            break;
        case 23:
            rep = "암살자의 표식이 새겨진 동전이 떨어지도록 하여 메소 익스플로젼을 강화한다. 강화된 메소 익스플로젼 사용 시 다음 암살의 마무리 일격을 강화하는 살의 버프를 획득한다. 픽 파킷과 블러디 파킷은 동시에 사용할 수 없다. 추가로 행운과 크리티컬 데미지가 영구적으로 증가한다. 컴뱃 오더스가 적용되지 않는다.\n\n공격 시 30% 확률로 동전이 떨어짐, 동전의 최대 생성 제한 15개\n베놈과 써든레이드로 인한 도트 데미지로는 동전이 떨어지지 않음\n블러디 파킷 적용 중 메소 익스플로젼 시전 시 살의 버프 획득, 메소 익스플로젼으로 보스 몬스터 공격 시 데미지 30% 증가 및 최대 HP가 가장 높은 적을 우선적으로 추적\n\n[패시브 효과 : 행운 10, 크리티컬 데미지 20% 증가]";
            break;
        case 25:
            rep = "자신의 주변에 연막탄을 뿌린다. 연막탄 범위 내의 모든 파티원은 지속 시간 동안 데미지를 입지 않으며, 최대 HP의 일정 비율로 피해를 입히는 공격의 경우 피해를 감소시킨다. 또 자신의 연막탄 범위 내에 있으면 어드밴스드 다크 사이트의 확률이 증가한다.\n추가로 연막탄에 들어온 적은 크리티컬 피해가 증가한다.\n연막탄을 시전하는 동안에는 적의 어떠한 공격에도 밀려나지 않으며 시전 시 다크 사이트가 해제되지 않는다.\n\nMP 46 소비, 연막탄 내부에서 적이 받는 크리티컬 데미지 20%만큼 증가, 받는 최대 HP의 일정 비율 피해 10% 감소\n30초 동안 지속, 재사용 대기시간 150초";
            break;
        case 9:
            rep = "";
            break;
    }
    return rep;
};
sks.getskillimage1Shadower = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "https://i.imgur.com/cpqwGAw.png";
            break;
        case 1:
            rep = "https://i.imgur.com/ANoitnf.png";
            break;
        case 2:
            rep = "https://i.imgur.com/DNDB7aL.png";
            break;
        case 3:
            rep = "https://i.imgur.com/Ew2lf8i.png";
            break;
        case 4:
            rep = "https://i.imgur.com/PZMnBP8.png";
            break;
        case 5:
            rep = "https://i.imgur.com/HfHP27z.png";
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
            rep = "https://i.imgur.com/N6kHOkS.png";
            break;
        case 11:
            rep = "https://i.imgur.com/zugHoDO.png";
            break;
        case 12:
            rep = "https://i.imgur.com/UlAkcPt.png";
            break;
        case 13:
            rep = "https://i.imgur.com/xO3vrsZ.png";
            break;
        case 14:
            rep = "https://i.imgur.com/BZ3bzoL.png";
            break;
        case 15:
            rep = "";
            break;
        case 16:
            rep = "https://i.imgur.com/4aFj3eX.png";
            break;
        case 17:
            rep = "";
            break;
        case 18:
            rep = "https://i.imgur.com/c4uGiza.png";
            break;
        case 19:
            rep = "https://i.imgur.com/1OoKet6.png";
            break;
        case 20:
            rep = "";
            break;
        case 21:
            rep = "";
            break;
        case 22:
            rep = "https://i.imgur.com/zG9eJOa.png";
            break;
        case 23:
            rep = "";
            break;
        case 24:
            rep = "https://i.imgur.com/igQoYAs.png";
            break;
        case 25:
            rep = "https://i.imgur.com/O9iSGzN.png";
            break;
        case 26:
            rep = "";
            break;
        case 27:
            rep = "https://i.imgur.com/gw2G1IP.png";
            break;
        case 28:
            rep = "https://i.imgur.com/JelwnAt.png";
            break;
        case 29:
            rep = "https://i.imgur.com/ezxHaJP.png";
            break;
        case 30: 
            rep = "https://i.imgur.com/WBx55vH.png";
            break;
    }
    return rep;
};
sks.getskillimage2Shadower = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "https://i.imgur.com/ysSHCa4.png";
            break;
        case 1:
            rep = "https://i.imgur.com/W9jouGj.png";
            break;
        case 2:
            rep = "https://i.imgur.com/P3ZkVS3.png";
            break;
        case 3:
            rep = "https://i.imgur.com/4bkZZoF.png";
            break;
        case 4:
            rep = "https://i.imgur.com/VQyLUDf.png";
            break;
        case 5:
            rep = "https://i.imgur.com/21Q1Hej.png";
            break;
        case 6:
            rep = "https://i.imgur.com/xKoUoH7.png";
            break;
        case 7:
            rep = "https://i.imgur.com/1imEHmf.png";
            break;
        case 8:
            rep = "https://i.imgur.com/pTByknv.png";
            break;
        case 9:
            rep = "https://i.imgur.com/T7Fd96v.png";
            break;
        case 10:
            rep = "https://i.imgur.com/uobqPcy.png";
            break;
        case 11:
            rep = "https://i.imgur.com/hxeOFzQ.png";
            break;
        case 12:
            rep = "https://i.imgur.com/eNgDgeD.png";
            break;
        case 13:
            rep = "https://i.imgur.com/9qi2iN1.png";
            break;
        case 14:
            rep = "https://i.imgur.com/UApv5VI.png";
            break;
        case 15:
            rep = "https://i.imgur.com/oRjmTUa.png";
            break;
        case 16:
            rep = "https://i.imgur.com/czJRQAf.png";
            break;
        case 17:
            rep = "https://i.imgur.com/U7fpuQS.png";
            break;
        case 18:
            rep = "https://i.imgur.com/2vGPHqR.png";
            break;
        case 19:
            rep = "https://i.imgur.com/ZqKXW6k.png";
            break;
        case 20:
            rep = "https://i.imgur.com/jlADG9V.png";
            break;
        case 21:
            rep = "https://i.imgur.com/AR38tHz.png";
            break;
        case 22:
            rep = "https://i.imgur.com/tFDRWde.png";
            break;
        case 23:
            rep = "https://i.imgur.com/KAwNIk1.png";
            break;
        case 24:
            rep = "https://i.imgur.com/A3zHONK.png";
            break;
        case 25:
            rep = "https://i.imgur.com/ApsESB6.png";
            break;
        case 26:
            rep = "https://i.imgur.com/gwOMCxi.png";
            break;
        case 27:
            rep = "https://i.imgur.com/i6AmQkC.png";
            break;
        case 28:
            rep = "https://i.imgur.com/J2P7vFj.png";
            break;
        case 29:
            rep = "https://i.imgur.com/mQKJPKV.png";
            break;
        case 30: 
            rep = "https://i.imgur.com/dPaDbQf.png";
            break;
    }
    return rep;
};

module.exports = sks;