const skp = {};

skp.getskillPaladin = function (skillname){
    var pret = -1;
    switch(skillname){
        case "홀리 유니티":
        case "홀리유니티":
        case "홀유":
        case "유니티":
        case "결속":
            pret = 0;
            break;
        case "블래스드 해머":
        case "블래스드해머":
        case "블해":
        case "해머":
            pret = 1;
            break;
        case "그랜드 크로스":
        case "그랜드크로스":
        case "그크":
        case "크로스":
            pret = 2;
            break;
        case "마이티 묠니르":
        case "마이티묠니르":
        case "묠니르":
        case "마묠":
            pret = 3;
            break;
        case "어퍼 차지":
        case "어퍼차지":
        case "어차":
        case "윗점":
            pret = 4;
            break;
        case "리프 어택":
        case "리프어택":
        case "리프":
        case "하강":
            pret = 5;
            break;
        case "홀리 차지":
        case "홀리차지":
        case "홀차":
            pret = 6;
            break;
        case "페이지 오더":
        case "페이지오더":
        case "페오":
        case "끌격":
            pret = 7;
            break;
        case "스탠스":
            pret = 8;
            break;
        case "리스토네이션":
        case "리토":
            pret = 9;
            break;
        case "디바인 차지":
        case "디바인차지":
        case "디차":
            pret = 10;
            break;
        case "돌진":
        case "밀격":
            pret = 11;
            break;
        case "노블 디맨드":
        case "노블디맨드":
        case "디맨드":
        case "노디":
        case "위협":
            pret = 12;
            break;
        case "파라쇼크 가드":
        case "파라쇼크가드":
        case "파라쇼크":
        case "파가":
            pret = 13;
            break;
        case "컴뱃 오더스":
        case "컴뱃오더스":
        case "컴뱃":
        case "오더":
            pret = 14;
            break;
        case "실드 마스터리":
        case "실드마스터리":
        case "실마":
            pret = 15;
            break;
        case "아킬레스":
        case "아킬":
            pret = 16;
            break;
        case "블레싱 아머":
        case "블레싱아머":
        case "블아":
            pret = 17;
            break;
        case "디바인 스티그마":
        case "디바인스티그마":
        case "스티그마":
        case "디스":
            pret = 18;
            break;
        case "블래스트":
        case "블래":
            pret = 19;
            break;
        case "디바인 저지먼트":
        case "디바인저지먼트":
        case "저지먼트":
        case "디저":
            pret = 20;
            break;
        case "매직 크래쉬":
        case "매직크래쉬":
        case "매직 크래시":
        case "매직크래시":
            pret = 21;
            break;
        case "생츄어리":
        case "생츄":
            pret = 22;
            break;
        case "디바인 블레싱":
        case "디바인블레싱":
        case "블레싱":
        case "디블":
            pret = 23;
            break;
        case "가디언 스피릿":
        case "가디언스피릿":
        case "스피릿":
        case "가스":
        case "부활":
            pret = 24;
            break;
        case "팔라딘 엑스퍼트":
        case "팔라딘엑스퍼트":
        case "엑스퍼트":
            pret = 25;
            break;
        case "어드밴스드 홀리 차지":
        case "어드밴스드 홀리차지":
        case "어드밴스드홀리차지":
        case "어홀차":
            pret = 26;
            break;
        case "새크로생티티":
        case "새크로 생티티":
        case "생티티":
            pret = 27;
            break;
        case "스마이트":
        case "스마":
        case "바인드":
            pret = 28;
            break;
        case "":
            pret = 29;
            break;
    }
    return pret;
};
skp.getskillnamePaladin = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "홀리 유니티";
            break;
        case 1:
            rep = "블래스드 해머";
            break;
        case 2:
            rep = "그랜드 크로스";
            break;
        case 3:
            rep = "마이티 묠니르";
            break;
        case 4:
            rep = "어퍼 차지";
            break;
        case 5:
            rep = "리프 어택";
            break;
        case 6:
            rep = "홀리 차지";
            break;
        case 7:
            rep = "페이지 오더";
            break;
        case 8:
            rep = "스탠스";
            break;
        case 9:
            rep = "리스토네이션";
            break;
        case 10:
            rep = "디바인 차지";
            break;
        case 11:
            rep = "돌진";
            break;
        case 12:
            rep = "노블 디맨드";
            break;
        case 13:
            rep = "파라쇼크 가드";
            break;
        case 14:
            rep = "컴뱃 오더스";
            break;
        case 15:
            rep = "실드 마스터리";
            break;
        case 16:
            rep = "아킬레스";
            break;
        case 17:
            rep = "블레싱 아머";
            break;
        case 18:
            rep = "디바인 스티그마";
            break;
        case 19:
            rep = "블래스트";
            break;
        case 20:
            rep = "디바인 저지먼트";
            break;
        case 21:
            rep = "매직 크래쉬";
            break;
        case 22:
            rep = "생츄어리";
            break;
        case 23:
            rep = "디바인 블레싱";
            break;
        case 24:
            rep = "가디언 스피릿";
            break;
        case 25:
            rep = "팔라딘 엑스퍼트";
            break;
        case 26:
            rep = "어드밴스드 홀리 차지";
            break;
        case 27:
            rep = "새크로생티티";
            break;
        case 28:
            rep = "스마이트";
            break;
        case 29:
            rep = "";
            break;
        case 30:
            rep = "";
            break;
    }
    return rep;
};
skp.getskilldesc1Paladin = function (skillcode){
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
            rep = "최대 5명의 적을 304% 데미지로 공격";
            break;
        case 5:
            rep = "최대 4명의 적에게 90%의 데미지로 2번 공격";
            break;
        case 6:
            rep = "하단 참조";
            break;
        case 7:
            rep = "8명, 125%의 데미지로 2번 데미지를 입히며 자신에게로 당긴 후";
            break;
        case 8:
            rep = "스탠스 확률 60% 증가";
            break;
        case 9:
            rep = "MP 40 소비, 최대 HP의 50% 즉시 회복";
            break;
        case 10:
            rep = "최대 8명의 적에게 310%의 데미지로 4번 공격";
            break;
        case 11:
            rep = "305% 데미지로 최대 12명의 적을 공격하며 이동";
            break;
        case 12:
            rep = "100% 확률로 80초 동안 최대 6명의 적";
            break;
        case 13:
            rep = "자신을 제외한 주위 파티원 피격 시 데미지 20% 감소";
            break;
        case 14:
            rep = "하단 참조";
            break;
        case 15:
            rep = "방패 혹은 로자리오 착용 시 상태이상내성 40, 모든속성내성 40%";
            break;
        case 16:
            rep = "적에게 입는 데미지 30% 감소";
            break;
        case 17:
            rep = "하단 참조";
            break;
        case 18:
            rep = "하단 참조";
            break;
        case 19:
            rep = "[홀리 포스] 최대 3명의 적을 291% 데미지로 10번 공격";
            break;
        case 20:
            rep = "하단 참조";
            break;
        case 21:
            rep = "100% 확률로 일부 버프 해제, 22초 동안 버프 효과 제한";
            break;
        case 22:
            rep = "15명의 적을 580% 데미지로 8번 공격";
            break;
        case 23:
            rep = "MP 30 소비, 206초 동안 최종 데미지 21% 증가";
            break;
        case 24:
            rep = "가장 가까운 파티원 부활 후 10초 동안 무적";
            break;
        case 25:
            rep = "하단 참조";
            break;
        case 26:
            rep = "하단 참조";
            break;
        case 27:
            rep = "30초 동안 무적 상태 / 재사용 대기시간 300초";
            break;
        case 28:
            rep = "최대 15명의 적을 500% 데미지로 6번 공격";
            break;
        case 29:
            rep = "";
            break;
    }
    return rep;
};
skp.getskilldesc2Paladin = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "1인 집중 지원 및 강화형 버프";
            break;
        case 1:
            rep = "자동 공격기";
            break;
        case 2:
            rep = "속사형 극딜기";
            break;
        case 3:
            rep = "오브젝트 사출형 다수 공격기";
            break;
        case 4:
            rep = "위 방향키와 공격키를 함께 눌러서도 사용가능하다.";
            break;
        case 5:
            rep = "아래 방향키/앞 방향키와 공격키를 같이 눌러서도 사용 가능";
            break;
        case 6:
            rep = "팔라딘의 특성화 스킬";
            break;
        case 7:
            rep = "6초 동안 이동속도 -20 및 80% 확률로 4초 동안 기절";
            break;
        case 8:
            rep = "2차 스킬";
            break;
        case 9:
            rep = "15초 내 연속 사용 시 10%씩 회복량 감소, 최소 회복량 10%";
            break;
        case 10:
            rep = "100% 확률로 10초 동안 침묵";
            break;
        case 11:
            rep = "모험가 전사 공통 밀격기";
            break;
        case 12:
            rep = "공격력, 방어율 50%, 8초 동안 명중치 50% 만큼 감소";
            break;
        case 13:
            rep = "및 가드 확률 20% 증가, 자신의 공격력 20 증가/ 온오프스킬";
            break;
        case 14:
            rep = "팔라딘의 4차 스킬은 32렙 기준으로 서술";
            break;
        case 15:
            rep = "방250%, 공10 증가, 40% 확률로 가드, 성공 시 60%의 확률로 기절";
            break;
        case 16:
            rep = "고정 피해와 최대 HP 비례 피해 제외";
            break;
        case 17:
            rep = "비숍의 홀리 매직쉘과 같은 판정";
            break;
        case 18:
            rep = "디바인 차지의 강화 패시브";
            break;
        case 19:
            rep = "보스기/ 범위가 보이는 것보다 상하로 좁음";
            break;
        case 20:
            rep = "블래스트 스택";
            break;
        case 21:
            rep = "재사용 대기시간 60초";
            break;
        case 22:
            rep = "보스몬스터 공격시 데미지 30% 증가. 재사용 대기시간 14초";
            break;
        case 23:
            rep = "신성한 축복을 받아 일정 시간 동안 최종 데미지가 증가한다.";
            break;
        case 24:
            rep = "재사용 대기시간 560초/ 벞지 미적용";
            break;
        case 25:
            rep = "보통 두손검을 쓴다";
            break;
        case 26:
            rep = "홀리 차지 강화 패시브";
            break;
        case 27:
            rep = "팔라딘은 스킬종료시 남은 지속시간 5초마다 쿨 45초 감소";
            break;
        case 28:
            rep = "10초간 바인드 / 재사용 대기시간 120초";
            break;
        case 29:
            rep = "";
            break;
    }
    return rep;
};
skp.getskilldesc3Paladin = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "신성한 힘으로 자신 근처의 파티원 1명과 자신을 결속시킨다.\n자신의 일부 공격 스킬과 버프 스킬 사용 시 결속된 파티원에 함께 사용되고 결속된 파티원이 없는 상태에서 자신의 근처에 파티원이 접근하면 해당 파티원과 자동 결속된다.\n파티원이 자신으로부터 일정 범위를 벗어나거나 홀리 유니티가 해제되면 결속이 해제되어 파티원에게 적용된 팔라딘의 버프가 함께 해제된다. 팔라딘이나 이미 다른 팔라딘과 결속된 파티원과는 결속할 수 없다.\n스킬 지속 중 스킬을 다시 사용하면 숫자키로 결속할 파티원을 선택할 수 있다. 파티UI에서의 위치에 따라 각 파티원에 숫자가 부여되며 자신, 이미 결속된 파티원, 결속할 수 없는 파티원은 선택할 수 없다.\n\nMP 1000 소비, 45초 동안 최종 데미지 75% 증가\n파티원과 결속 : 시전되는 공격 스킬의 최종 데미지 40% 반영, 파티원에게 사용되는 버프 스킬의 지속시간 65% + 자신의 힘 1000당 1% 반영되어 최대 100%까지 반영\n\n재사용 대기시간 : 90초";
            break;
        case 1:
            rep = "축복받은 망치를 소환하여 주변의 적을 공격한다. 스킬을 다시 사용하면 공격을 중지할 수 있다. 망치는 공격 반사 상태의 적을 공격해도 피해를 입지 않는다.\n\n패시브 효과 : 홀리 차지가 충전될 때마다 팔라딘 주위를 회전하는 망치 1개 자동 생성, 최대 5개까지 생성 가능하고 홀리 차지와 유지시간 공유\n액티브 효과 : MP 1000 소비, 30초 동안 망치가 최대 8명의 적을 1155%의 데미지로 4번 자동 공격, 망치의 수가 늘어날 때마다 공격 속도 증가\n\n재사용 대기시간 60초";
            break;
        case 2:
            rep = "숭고한 희생을 상징하는 거대한 빛의 십자가를 구현한다. 느린 속도로 이동하며 계속해서 공격할 수 있고 희생을 지속하면 더 큰 힘을 얻을 수 있다. 시전하는 동안에는 적의 어떠한 공격에도 밀려나지 않으며 기절 상태 이상을 무시한다.\n\n초당 최대 HP의 2% 소비, 키다운 동안 최대 12명의 적을 660%의 데미지로 연속해서 12번 공격\n일정 시간 이상 지속했다면 십자가의 크기가 커져 공격 속도가 증가하고 1150%의 데미지로 공격\n최대 키다운 시간 6초, 추가 크리티컬 확률 100%, 몬스터 방어율 100% 추가 무시\n키다운 중 받는 최대 HP의 일정 비율로 피해를 입히는 공격을 포함한 피격 데미지의 50% 감소\n\n재사용 대기시간 180초";
            break;
        case 3:
            rep = "적을 추적하여 공격하는 고대 신의 망치를 소환하여 던진다.\n4방향으로 던질 수 있어 방향키와 함께 사용하면 해당 방향에 있는 적을 목표로 삼아 공격하고 목표인 적을 공격한 후 강력한 충격파가 발생한다.\n망치는 직전 공격한 적을 제외한 최대 HP가 가장 높은 적을 우선적으로 추적한다. 망치의 모든 공격은 공격 반사 상태의 적을 공격해도 피해를 입지 않는다.\n\nMP 400 소비, 목표로 한 적 1명을 395%의 데미지로 6번 공격, 추가 크리티컬 확률 50%, 첫 공격을 포함하여 최대 4명의 적을 목표로 추적\n추적한 적 공격 후 충격파가 발생하여 최대 6명의 적을 440%의 데미지로 9번 추가 공격\n망치는 12초마다 1개씩 준비되며 최대 3개까지 소지 가능\n\n재사용 대기시간 : 2.5초";
            break;
        case 6:
            rep = "홀리 포스 스킬 사용 시 신성한 빛의 힘을 충전하여 자신을 강화할 수 있다.\n\n홀리 포스 스킬 사용 시 30초 동안 홀리 차지 1개 충전, 최대 5개 충전 가능\n충전한 홀리 차지 1개당 데미지 및 물약을 제외한 치유량 2%, 공격력 8, 상태 이상 내성 2 증가, 최대 HP의 일정 비율로 피해를 입히는 공격을 포함한 피격 데미지 2% 감소";
            break;
        case 14:
            rep = "일정 시간 동안 자신을 포함한 파티원 전원의 모든 스킬 레벨을 증가시켜준다. 각 직업군의 4차 스킬에 한해 마스터 레벨 이상으로 증가시킬 수 있으며 그 외 스킬은 마스터 레벨까지만 올려줄 수 있다.\n예외적으로 일부 특별한 스킬과 초보자 스킬, 컴뱃 오더스, 하이퍼 스킬, 5차 스킬의 스킬 레벨은 올려줄 수 없다.\n\nMP 36 소비, 200초 동안 모든 스킬 레벨 2 증가";
            break;
        case 17:
            rep = "피격 시 일정 확률로 개인 보호막이 생성되어 90초 동안 최대 10번의 피해를 방어하고 캐릭터의 공격력을 증가시킨다. 한 번 발동되면 일정 시간 동안 재생성되지 않고, 피해를 모두 방어한 후에도 공격력 증가 효과는 유지된다.\n\n피격 시 100% 확률로 개인 보호막 생성, 90초 동안 공격력이 20 증가하며 최대 10번의 피해를 방어\n단, 최대 HP의 일정 비율로 피해를 입히는 공격에 한해 피해 25% 감소\n발동 시 30초 동안 보호막 재생성 불가";
            break;
        case 18:
            rep = "[홀리 포스]\n더욱 강력한 신성한 망치를 소환할 수 있게 된다. 디바인 차지의 데미지와 범위가 한 층 강화되며 일정 시간마다 디바인 스티그마를 사용할 수 있게 된다. 디바인 스티그마 사용 시 공격한 자리에 빛의 성흔을 새기며 일정 시간 뒤 성흔이 폭발하며 넓은 범위의 적을 공격한다. 성흔 폭발은 일반 몬스터에게 추가 데미지를 입힌다. 홀리 유니티로 결속된 파티원이 사용하는 경우에는 성흔 폭발이 일어나지 않는다.\n\n디바인 스티그마 : MP 57 소비, 재발동 대기시간 : 7초, 최대 10명의 적을 428%의 데미지로 7번 공격하며 공격한 자리에 일정 시간 뒤 폭발하는 빛의 성흔을 새김\n성흔 폭발 : 최대 10명의 적을 296%의 데미지로 5번 공격, 일반 몬스터 공격 시 30% 추가 데미지\n\n[패시브 효과 : 디바인 차지의 데미지 104%p 증가, 범위 강화]";
            break;
        case 20:
            rep = "블래스트에 신성한 낙인을 담아 공격할 수 있게 된다. 블래스트로 적을 공격하면 적에게 신성 낙인이 중첩되며, 일정 중첩 수에서 블래스트로 다시 공격 시 낙인이 폭발하며 추가 데미지를 입히며 몬스터의 방어율을 일정 수준 무시한다. 홀리 유니티로 결속된 파티원이 사용하는 블래스트는 낙인이 중첩되지 않는다.\n\n블래스트로 공격한 적에게 신성 낙인을 새김\n신성 낙인 : 최대 30초 동안 유지, 5번까지 중첩 시 낙인이 폭발하며 1명의 적을 506%의 데미지로 10번 공격, 몬스터 방어율 20% 추가 무시";
            break;
        case 25:
            rep = "팔라딘으로서 익혀야 할 모든 것을 깨우쳐 무기 숙련도와 방어력, 크리티컬 확률, 크리티컬 데미지, 방어율 무시, 최종 데미지가 증가하고, 착용한 무기 종류에 따라 데미지, 방어율 무시, 숙련도가 증가한다.\n\n숙련도 증가량 71%로 증가, 방어력 420, 크리티컬 확률 42%, 크리티컬 데미지 15%, 방어율 무시 31%, 최종 데미지 42% 증가\n\n한손검 착용 시 크리티컬 데미지 6%, 숙련도 3% 증가\n두손검 착용 시 크리티컬 데미지 5% 증가\n한손둔기 착용 시 크리티컬 데미지 5%, 방어율 무시 10%, 숙련도 3% 증가\n두손둔기 착용 시 크리티컬 데미지 5%, 방어율 무시 10% 증가";
            break;
        case 26:
            rep = "홀리 차지를 최대로 연마하여 중첩당 효과를 극대화시키며 디바인 차지의 최대 공격 가능한 몬스터 수와 공격횟수, 블래스트의 공격 횟수를 증가시킨다. 홀리 포스의 효과를 덮어 쓴다.\n\n디바인 차지의 최대 공격 가능한 몬스터 수 3 증가, 블래스트와 디바인 차지의 공격 횟수 1회 증가\n충전한 홀리 차지 1개당 데미지 및 물약을 제외한 치유량 5%, 공격력 12, 상태 이상 내성 2 증가, 최대 HP의 일정 비율로 피해를 입히는 공격을 포함한 피격 데미지 2% 감소로 변경";
            break;
        case 29:
            rep = "";
            break;
    }
    return rep;
};
skp.getskillimage1Paladin = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "https://i.imgur.com/wqIs1kM.png";
            break;
        case 1:
            rep = "https://i.imgur.com/4ll8NzB.png";
            break;
        case 2:
            rep = "https://i.imgur.com/gO30Zox.png";
            break;
        case 3:
            rep = "https://i.imgur.com/aY05a8B.png";
            break;
        case 4:
            rep = "https://i.imgur.com/toAkaPq.png";
            break;
        case 5:
            rep = "https://i.imgur.com/MYexEDI.png";
            break;
        case 6:
            rep = "";
            break;
        case 7:
            rep = "https://i.imgur.com/cwurQ92.png";
            break;
        case 8:
            rep = "";
            break;
        case 9:
            rep = "https://i.imgur.com/sV8Fflm.png";
            break;
        case 10:
            rep = "https://i.imgur.com/1Cua0B0.png";
            break;
        case 11:
            rep = "https://i.imgur.com/MFkowug.png";
            break;
        case 12:
            rep = "https://i.imgur.com/drZaMzA.png";
            break;
        case 13:
            rep = "https://i.imgur.com/m0Tv2BN.png";
            break;
        case 14:
            rep = "https://i.imgur.com/hEmloJ3.png";
            break;
        case 15:
            rep = "";
            break;
        case 16:
            rep = "";
            break;
        case 17:
            rep = "https://i.imgur.com/FDD7lio.png";
            break;
        case 18:
            rep = "https://i.imgur.com/dyvazoi.png";
            break;
        case 19:
            rep = "https://i.imgur.com/cJMyv6D.png";
            break;
        case 20:
            rep = "https://i.imgur.com/HueRGqT.png";
            break;
        case 21:
            rep = "https://i.imgur.com/fGuk7nr.png";
            break;
        case 22:
            rep = "https://i.imgur.com/n30him7.png";
            break;
        case 23:
            rep = "https://i.imgur.com/NCbpd7a.png";
            break;
        case 24:
            rep = "https://i.imgur.com/BqzDbzj.png";
            break;
        case 25:
            rep = "";
            break;
        case 26:
            rep = "";
            break;
        case 27:
            rep = "https://i.imgur.com/JL8EDBa.png";
            break;
        case 28:
            rep = "https://i.imgur.com/XS1XoNc.png";
            break;
        case 29:
            rep = "";
            break;
    }
    return rep;
};
skp.getskillimage2Paladin = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "https://i.imgur.com/D6F2axJ.png";
            break;
        case 1:
            rep = "https://i.imgur.com/milUjVm.png";
            break;
        case 2:
            rep = "https://i.imgur.com/fRUrPtZ.png";
            break;
        case 3:
            rep = "https://i.imgur.com/PuFMzlb.png";
            break;
        case 4:
            rep = "https://i.imgur.com/sRxnfA5.png";
            break;
        case 5:
            rep = "https://i.imgur.com/rXyvG3K.png";
            break;
        case 6:
            rep = "https://i.imgur.com/HgAAUiy.png";
            break;
        case 7:
            rep = "https://i.imgur.com/tg6tdPc.png";
            break;
        case 8:
            rep = "https://i.imgur.com/VYD1KcR.png";
            break;
        case 9:
            rep = "https://i.imgur.com/7QCMkcz.png";
            break;
        case 10:
            rep = "https://i.imgur.com/dNNwUdK.png";
            break;
        case 11:
            rep = "https://i.imgur.com/IeXz7Hg.png";
            break;
        case 12:
            rep = "https://i.imgur.com/xUmlXbQ.png";
            break;
        case 13:
            rep = "https://i.imgur.com/CKacQHB.png";
            break;
        case 14:
            rep = "https://i.imgur.com/3R2TC1s.png";
            break;
        case 15:
            rep = "https://i.imgur.com/Od1Gr3o.png";
            break;
        case 16:
            rep = "https://i.imgur.com/oSLID5G.png";
            break;
        case 17:
            rep = "https://i.imgur.com/rs6rUCd.png";
            break;
        case 18:
            rep = "https://i.imgur.com/AsdwSRh.png";
            break;
        case 19:
            rep = "https://i.imgur.com/6msEYAJ.png";
            break;
        case 20:
            rep = "https://i.imgur.com/l9834yo.png";
            break;
        case 21:
            rep = "https://i.imgur.com/bFsFhFx.png";
            break;
        case 22:
            rep = "https://i.imgur.com/geXZHqA.png";
            break;
        case 23:
            rep = "https://i.imgur.com/LrgZIxf.png";
            break;
        case 24:
            rep = "https://i.imgur.com/L82mwoD.png";
            break;
        case 25:
            rep = "https://i.imgur.com/a398gYt.png";
            break;
        case 26:
            rep = "https://i.imgur.com/UvplQGT.png";
            break;
        case 27:
            rep = "https://i.imgur.com/YgQ6Jzk.png";
            break;
        case 28:
            rep = "https://i.imgur.com/4QTTIkx.png";
            break;
        case 29:
            rep = "";
            break;
    }
    return rep;
};

module.exports = skp;