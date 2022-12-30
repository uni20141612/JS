const skc = {};

skc.getskillCaptain = function (skillname){
    var cret = -1;
    switch(skillname){
        case "불릿 파티":
        case "불릿파티":
        case "불파":
        case "파티":
            cret = 0;
            break;
        case "데드아이":
        case "데아":
            cret = 1;
            break;
        case "노틸러스 어썰트":
        case "노틸러스어썰트":
        case "어썰트":
            cret = 2;
            break;
        case "데스 트리거":
        case "데스트리거":
        case "트리거":
            cret = 3;
            break;
        case "파이렛 리프":
        case "파이렛리프":
        case "더블 점프":
        case "더블점프":
            cret = 4;
            break;
        case "대쉬":
        case "대시":
        case "대쉬기":
            cret = 5;
            break;
        case "서먼 크루":
        case "서먼크루":
        case "서먼":
            cret = 6;
            break;
        case "백스텝샷":
        case "백스텝 샷":
        case "백스탭샷":
        case "백스탭 샷":
        case "백스텝":
        case "백스탭":
            cret = 7;
            break;
        case "윙즈":
        case "윗점":
        case "체공":
            cret = 8;
            break;
        case "인피닛 불릿":
        case "인피닛불릿":
            cret = 9;
            break;
        case "불릿 스매시":
        case "불릿스매시":
        case "밀격":
            cret = 10;
            break;
        case "시즈 봄버":
        case "시즈봄버":
        case "옥타 쿼터덱":
        case "옥타쿼터덱":
        case "시봄":
            cret = 11;
            break;
        case "럭키 다이스":
        case "럭키다이스":
        case "럭다":
        case "다이스":
            cret = 12;
            break;
        case "할로포인트 불릿":
        case "할로포인트불릿":
        case "할로포인트":
            cret = 13;
            break;
        case "발키리 페이션트":
        case "발키리페이션트":
        case "발키리":
            cret = 14;
            break;
        case "풀메탈 자켓":
        case "풀메탈자켓":
        case "풀메탈":
        case "풀자":
            cret = 15;
            break;
        case "어셈블 크루":
        case "어셈블크루":
        case "어셈블":
        case "어크":
            cret = 16;
            break;
        case "래피드 파이어":
        case "래피드파이어":
        case "레피드 파이어":
        case "레피드파이어":
        case "래파":
        case "속사기":
            cret = 17;
            break;
        case "헤드 샷":
        case "헤드샷":
            cret = 18;
            break;
        case "퍼실레이드":
        case "퍼실":
            cret = 19;
            break;
        case "퀵 드로우":
        case "퀵드로우":
        case "퀵드":
            cret = 20;
            break;
        case "배틀쉽 봄버":
        case "배틀쉽봄버":
        case "배틀쉽":
            cret = 21;
            break;
        case "사인 오브 봄바드":
        case "사인오브 봄바드":
        case "사인오브봄바드":
        case "봄바드":
        case "사오봄":
            cret = 22;
            break;
        case "컨티뉴얼 에이밍":
        case "컨티뉴얼에이밍":
        case "에이밍":
        case "호밍":
            cret = 23;
            break;
        case "전함 노틸러스":
        case "전함노틸러스":
        case "광역기":
            cret = 24;
            break;
        case "파이렛 스타일":
        case "파이렛스타일":
            cret = 25;
            break;
        case "오펜스 폼":
        case "오펜스폼":
        case "오펜스":
        case "카운터어택":
            cret = 26;
            break;
        case "더블 럭키 다이스":
        case "더블럭키다이스":
        case "더블":
            cret = 27;
            break;
        case "크루 커맨더십":
        case "크루커맨더십":
            cret = 28;
            break;
        case "캡틴 디그니티":
        case "캡틴디그니티":
        case "디그니티":
            cret = 29;
            break;
        case "언위어링 넥타":
        case "언위어링넥타":
        case "넥타":
            cret = 30;
            break;
        case "스트레인지 봄":
        case "스트레인지봄":
        case "스봄":
            cret = 31;
            break;
        case "":
            cret = 32;
            break;
    }
    return cret;
};
skc.getskillnameCaptain = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "불릿 파티";
            break;
        case 1:
            rep = "데드아이";
            break;
        case 2:
            rep = "노틸러스 어썰트";
            break;
        case 3:
            rep = "데스 트리거";
            break;
        case 4:
            rep = "파이렛 리프";
            break;
        case 5:
            rep = "대쉬";
            break;
        case 6:
            rep = "서먼 크루";
            break;
        case 7:
            rep = "백스텝샷";
            break;
        case 8:
            rep = "윙즈";
            break;
        case 9:
            rep = "인피닛 불릿";
            break;
        case 10:
            rep = "불릿 스매시";
            break;
        case 11:
            rep = "시즈 봄버";
            break;
        case 12:
            rep = "럭키 다이스";
            break;
        case 13:
            rep = "할로포인트 불릿";
            break;
        case 14:
            rep = "발키리 페이션트";
            break;
        case 15:
            rep = "풀메탈 자켓";
            break;
        case 16:
            rep = "어셈블 크루";
            break;
        case 17:
            rep = "래피드 파이어";
            break;
        case 18:
            rep = "헤드 샷";
            break;
        case 19:
            rep = "퍼실레이드";
            break;
        case 20:
            rep = "퀵 드로우";
            break;
        case 21:
            rep = "배틀쉽 봄버";
            break;
        case 22:
            rep = "사인 오브 봄바드";
            break;
        case 23:
            rep = "컨티뉴얼 에이밍";
            break;
        case 24:
            rep = "전함 노틸러스";
            break;
        case 25:
            rep = "파이렛 스타일";
            break;
        case 26:
            rep = "오펜스 폼";
            break;
        case 27:
            rep = "더블 럭키 다이스";
            break;
        case 28:
            rep = "크루 커맨더십";
            break;
        case 29:
            rep = "캡틴 디그니티";
            break;
        case 30:
            rep = "언위어링 넥타";
            break;
        case 31:
            rep = "스트레인지 봄";
            break;
        case 32:
            rep = "";
            break;
        case 33:
            rep = "";
            break;
    }
    return rep;
};
skc.getskilldesc1Captain = function (skillcode){
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
            rep = "MP 10 소비, 일정 거리 점프";
            break;
        case 5:
            rep = "하단 참조";
            break;
        case 6:
            rep = "120초간 적을 150%로 3번 공격하는 탄환을 2개 발사하는 선원 소환";
            break;
        case 7:
            rep = "MP 15 소비, 210% 데미지";
            break;
        case 8:
            rep = "하단 참조";
            break;
        case 9:
            rep = "공격력 10 증가, 불릿 소비 없이 공격 가능";
            break;
        case 10:
            rep = "불릿 1개 소비, 최대 6명의 적에게 734% 데미지";
            break;
        case 11:
            rep = "MP 18 소비, 60초 동안 300% 공격력의 대포 소환";
            break;
        case 12:
            rep = "하단 참조";
            break;
        case 13:
            rep = "공격력 60 증가";
            break;
        case 14:
            rep = "방어력 20% 증가, 최대 HP 및 MP 600 만큼 증가";
            break;
        case 15:
            rep = "최종 데미지 20%, 크리티컬 확률 30% 증가";
            break;
        case 16:
            rep = "하단 참조";
            break;
        case 17:
            rep = "발 당 375% 데미지, 지속 중 이동속도 120으로 고정";
            break;
        case 18:
            rep = "880%의 데미지로 13번 연속 크리티컬 공격";
            break;
        case 19:
            rep = "불릿 4개 소비, 649% 데미지로 최대 8명의 적 4번 공격";
            break;
        case 20:
            rep = "공격 시 8% 확률로 퀵 드로우 효과 발동 / 발동 후 사용하는";
            break;
        case 21:
            rep = "하단 참조";
            break;
        case 22:
            rep = "하단 참조";
            break;
        case 23:
            rep = "610% 데미지, 호밍 중인 몬스터 공격 시 최종 데미지 25% 증가";
            break;
        case 24:
            rep = "440% 데미지로 최대 15명의 적을 7번 공격 / 쿨 30초";
            break;
        case 25:
            rep = "180초 동안 공격력 20%, 상태 이상 내성 30, 모든 속성 내성 30%";
            break;
        case 26:
            rep = "공격적중시 10초간 데미지 15% 증가 / [패시브효과 : 받는피해 15% 감소]";
            break;
        case 27:
            rep = "하단 참조";
            break;
        case 28:
            rep = "하단 참조";
            break;
        case 29:
            rep = "숙련도 증가량 70%로 증가, 최종 데미지 8% 증가, 공격력 30 증가";
            break;
        case 30:
            rep = "하단 참조";
            break;
        case 31:
            rep = "최대 15명의 적을 400% 데미지로 12번 공격";
            break;
        case 32:
            rep = "";
            break;
        case 33:
            rep = "";
            break;
    }
    return rep;
};
skc.getskilldesc2Captain = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "사용중 이동,점프가능, 활강 불가능/ 재사용시 즉시 취소";
            break;
        case 1:
            rep = "시전 동작 중 무적";
            break;
        case 2:
            rep = "전함 노틸러스로 노틸러스가 등장하고 있을 때는 사용할 수 없다.";
            break;
        case 3:
            rep = "전이형 광범위 공격기";
            break;
        case 4:
            rep = "2차 전직후 검은색 이펙트 추가";
            break;
        case 5:
            rep = "이동 보조기";
            break;
        case 6:
            rep = "재사용 대기시간 45초 / 최대 HP가 가장 높은 적을 우선하여 공격";
            break;
        case 7:
            rep = "후방 이동기 겸 공중 제동기";
            break;
        case 8:
            rep = "상향 이동 겸 활공기";
            break;
        case 9:
            rep = "인벤토리 내 불릿 중 가장 앞에 있는 불릿의 공격력이 적용";
            break;
        case 10:
            rep = "400 거리만큼 밀어냄";
            break;
        case 11:
            rep = "사정거리 내 최대 HP가 가장 높은 적을 우선하여 공격";
            break;
        case 12:
            rep = "모험가 해적 공통 액티브 버프";
            break;
        case 13:
            rep = "불릿에 흠집을 내어 파괴력이 한층 강화된 불릿을 사용한다.";
            break;
        case 14:
            rep = "상태 이상 내성 및 모든 속성 내성 15% 증가, 스탠스 40% 증가";
            break;
        case 15:
            rep = "몬스터 방어율 20% 무시";
            break;
        case 16:
            rep = "서먼 크루의 강화 패시브";
            break;
        case 17:
            rep = "폭풍의 시와 동일한 8.33타(120ms)";
            break;
        case 18:
            rep = "몬스터 방어율 60% 무시 / 재사용 대기시간 5초";
            break;
        case 19:
            rep = "[패시브 효과 : 전함 노틸러스의 스킬 데미지 130%p 증가]";
            break;
        case 20:
            rep = "헤드샷, 스트레인지봄, 전함노틸러스, 데드아이 최종 데미지 25% 증가";
            break;
        case 21:
            rep = "설치형 소환수 스킬";
            break;
        case 22:
            rep = "배틀쉽 봄버의 보조 스킬";
            break;
        case 23:
            rep = "[패시브 효과 : 크리티컬 데미지 20% 증가]";
            break;
        case 24:
            rep = "[패시브 효과 : 캡틴 디그니티의 최종 데미지 30% 증가]";
            break;
        case 25:
            rep = "[패시브 : 스탠스 확률 60% 증가], 회피율 300 감소";
            break;
        case 26:
            rep = "버프 지속 중 공격 적중 시 지속 시간 갱신 가능";
            break;
        case 27:
            rep = "럭키 다이스의 강화 패시브";
            break;
        case 28:
            rep = "서먼 크루의 최종 강화 패시브";
            break;
        case 29:
            rep = "[파이널 어택류 스킬] 탄환 발사 공격 시 275%의 폭발 데미지 추가";
            break;
        case 30:
            rep = "긴급 회복기 겸 소환수 강화 버프";
            break;
        case 31:
            rep = "재사용 대기시간 15초";
            break;
        case 32:
            rep = "";
            break;
        case 33:
            rep = "";
            break;
    }
    return rep;
};
skc.getskilldesc3Captain = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "모든 방향으로 총을 난사한다. 불릿 파티 중에는 윙즈로 활강을 할 수 없고 공중에서 윙즈를 사용할 수 없다.\n\nMP 500 소비, 6초 동안 일정 시간마다 주변의 최대 15명의 적에게 660% 데미지로 7번 공격\n지속 시간 동안 이동 및 점프 가능하며 스킬 재사용 시 즉시 취소\n\n재사용 대기시간 75초";
            break;
        case 1:
            rep = "집중하여 적을 조준한 다음 총을 꺼내어 빠르게 사격한다. 시전 동작 중 무적이다.\n\n패시브 효과 : 데드아이가 재사용 대기시간이 아니라면 사정거리 내의 최대 12명을 각기 조준하기 시작, 정확히 조준되었을 때 데드아이를 사용하지 않으면 조준이 풀리고 잠시 후 다시 조준 시작\n액티브 효과 : MP 850 소비, 조준하고 있는 적을 992%의 데미지로 15번 공격, 추가 크리티컬 확률 100%\n정확히 조준될수록 더 큰 피해를 줄 수 있으며 최대 3배까지 증가\n\n재사용 대기시간 30초";
            break;
        case 2:
            rep = "MP 1500 소비, 최대 15명의 적을 공격, 시전 동작 중 무적\n\n선체 공격 : 일정 시간마다 1320%의 데미지로 6번 공격하는 선체 공격이 7번 발동\n\n일제 사격 : 일정 시간마다 660%의 데미지로 12번 공격하는 일제 사격이 36번 발동\n\n재사용 대기시간 180초\n\n전함 노틸러스/노틸러스 어썰트 중 어느 하나의 스킬 사용 시 다른 스킬에 재사용 대기시간 8초 적용. 해당 시간보다 긴 재사용 대기시간이 적용 중일 경우 적용되지 않음.";
            break;
        case 3:
            rep = "적을 관통하여 죽음으로 인도하는 탄환을 발사한다. 탄환은 목표를 향해 나아가며 관통 공격을 한 후 공격할 수 있는 적 수가 남아있다면 주변의 적에게 튕기며 경로의 적을 공격한다.\n공격할 적이 1명밖에 없다면 해당 적 공격 후 허공에서 튕겨 다시 공격하고 컨티뉴얼 에이밍이 적용 중인 적이 있다면 첫 탄환 발사 시 모든 탄환이 해당 적을 목표로 하고 이후 튕길 때도 우선적으로 목표로 하게 된다. 튕긴 탄환은 공격 반사 상태의 적을 공격해도 피해를 입지 않는다.\n\nMP 750 소비, 최대 7명의 적을 715%의 데미지로 7번 공격하는 탄환 7개 발사\n재사용 대기시간 : 45초, 탄환이 튕기지 못한 횟수당 재사용 대기시간 0.5초 감소";
            break;
        case 4:
            rep = "";
            break;
        case 5:
            rep = "좌우 방향키 중 하나를 두 번 연타한 후 키다운하여 사용한다. 사용 중 이동속도, 점프력, 스탠스 확률이 증가되며 해당 효과는 대쉬가 종료될 때 사라진다.\n버프 지속시간 증가의 효과를 받지 않지만 공중에서도 발동 시킬 수 있다.\n[대쉬 발동 : 방향키 →→ 또는 ←←]\n커맨드 잠금 : 마우스 우클릭\n\nMP 1 소비, 최대 10초 동안 이동속도 50, 점프력 20, 스탠스 확률 100% 증가하며 대쉬";
            break;
        case 8:
            rep = "발 밑으로 사격을 한 반동으로 높이 점프한다. 공중에서는 점프력이 감소하고 1번만 사용할 수 있으며 지상에서 윙즈를 사용해 점프했다면 공중에서 사용할 수 없다.\n윙즈를 사용해 점프를 한 후 스킬키를 다시 누르고 있으면 천천히 하강하며 활공하고, 키를 떼면 정상 속도로 하강한다.\n\nMP 10 소비";
            break;
        case 12:
            rep = "주사위를 던져 자신의 행운을 시험한다. 주사위의 결과에 따라 일정 시간 동안 랜덤 버프를 획득할 수 있지만, 1이 나올 경우에는 버프를 획득할 수 없고 럭키 다이스의 재사용 대기시간이 감소한다.\n\nMP 60 소비, 주사위 버프 지속시간 180초, 재사용 대기시간 60초\n\n1 : 럭키 다이스 재사용 대기시간 50% 감소\n2 : 방어력 30% 증가\n3 : 공격력 15 증가\n4 : 크리티컬 확률 15% 증가\n5 : 데미지 20% 증가\n6 : 획득 경험치 30% 증가";
            break;
        case 16:
            rep = "서먼 크루를 강화하여 두 명의 강인한 선원을 소환한다. 소환된 선원은 자유롭게 적들을 공격하며, 치명적인 상태 이상 공격에 자신을 희생하여 보호한다. 선원들은 사정거리 내 최대 HP가 가장 높은 적을 우선하여 공격한다.\n\nMP 40 소비, 전투를 도와주는 용맹한 선원 두 명 소환\n명사수 크루: 170%의 데미지로 4명의 적을 4번 공격하는 폭탄 발사\n쌍권총 크루: 탄환의 데미지 200% 증가\n상태 이상 공격을 당하면 선원 중 한 명이 상태 이상을 막아주며 상태 이상을 한 번 막은 선원은 재소환될 때까지 상태 이상을 막을 수 없음\n\n선원 유지 시간 120초, 재사용 대기시간 45초";
            break;
        case 21:
            rep = "노틸러스 호의 배틀쉽을 소환한다. 배틀쉽의 포탄 공격은 공격 반사 상태의 적을 공격해도 피해를 입지 않는다. 일정 영역 내에 사인 오브 봄바드를 설치하면 해당 위치에 폭격을 일으킨다.\n\nMP 150 소비, 60초 동안 소환되어 일정 간격으로 포탄 발사, 발사된 포탄은 적에게 닿으면 폭발하여 400%의 데미지로 최대 6명의 적을 3번 공격, 최대 2대까지 소환가능, 사인 오브 봄바드 설치 시 400%의 데미지로 최대 6명의 적을 3번 공격하는 폭격 발생, 재사용 대기시간 0.5초";
            break;
        case 22:
            rep = "캡틴의 표식을 설치하여 배틀쉽 봄버에게 폭격을 내릴 위치를 지시한다. 설치 중 아래 방향키와 함께 사용하면 설치된 표식이 소멸된다. 자동 사용 모드에서는 컨티뉴얼 에이밍이 적중할 때마다 적중 위치에 사인 오브 봄바드가 설치된다.\n자동 사용 모드 온오프 : 마우스 우클릭\nSP를 투자하지 않는 스킬이며 배틀쉽 봄버의 스킬 레벨을 따라간다.\n\nMP 40 소비, 60초 동안 설치\n최대 1개 설치 가능";
            break;
        case 27:
            rep = "일정 확률로 주사위 2개를 동시에 던져 자신의 행운을 시험한다. 주사위의 눈이 같을 경우에는 보다 강력한 버프 효과가 적용된다.\n\nMP 60 소비, 50% 확률로 럭키 다이스 사용 시, 더블 럭키 다이스 발동, 주사위 버프 지속시간 180초\n재사용 대기시간 60초\n\n1,1 : 럭키 다이스 재사용 대기시간 50% 감소\n2,2 : 방어력 40% 증가\n3,3 : 공격력 25 증가\n4,4 : 크리티컬 확률 25% 증가\n5,5 : 데미지 30% 증가\n6,6 : 획득 경험치 40% 증가";
            break;
        case 28:
            rep = "특유의 통솔력으로 어셈블 크루로 소환되는 선원들의 능력을 강화한다. 캡틴의 위엄으로 최대 HP와 크리티컬 데미지가 증가하며 선원 소환 시 별도의 추가 패시브 효과를 받는다. 크루 커맨더십 스킬을 익히면 배틀쉽 봄버를 사용할 수 있다.\n\n소환된 선원의 최종 데미지 15% 증가, 선원이 소환되어 있을 경우 공격력 45, 크리티컬 데미지 5%, 크리티컬 확률 10%, 이동속도 30 증가 및 받는 피해 15% 감소\n\n[패시브 효과 : 최대 HP 5000 증가, 크리티컬 데미지 25% 증가]";
            break;
        case 30:
            rep = "함장의 기개로 캡틴의 육체를 고양시키고 소환수들을 일시적으로 강화하고 공격 속도를 증가시킨다.\n재사용 대기시간 초기화의 효과를 받지 않는다\n\nMP 300 소비, 사용 시 최대 HP의 99% 회복 후 20초 동안 피격 데미지 15% 감소하고 소환수 강화\n\n쌍권총 크루 : 285%의 데미지로 3번 공격\n명사수 크루 : 220%의 데미지로 4번 공격\n시즈 봄버 : 450%의 데미지로 공격\n배틀쉽 봄버 : 500%의 데미지로 3번 공격\n\n재사용 대기시간 90초";
            break;
    }
    return rep;
};
skc.getskillimage1Captain = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "https://i.imgur.com/iet1vYQ.png";
            break;
        case 1:
            rep = "https://i.imgur.com/OnPxfUn.png";
            break;
        case 2:
            rep = "https://i.imgur.com/47MVOtL.png";
            break;
        case 3:
            rep = "https://i.imgur.com/FQpbfvn.png";
            break;
        case 4:
            rep = "https://i.imgur.com/sHuQkZ5.png";
            break;
        case 5:
            rep = "https://i.imgur.com/VmBPWJC.png";
            break;
        case 6:
            rep = "https://i.imgur.com/9XvwYEF.png";
            break;
        case 7:
            rep = "https://i.imgur.com/mKmavcA.png";
            break;
        case 8:
            rep = "https://i.imgur.com/NPI1RGv.png";
            break;
        case 9:
            rep = "";
            break;
        case 10:
            rep = "https://i.imgur.com/osvwEPq.png";
            break;
        case 11:
            rep = "https://i.imgur.com/pim09xr.png";
            break;
        case 12:
            rep = "https://i.imgur.com/hHjindn.png";
            break;
        case 13:
            rep = "";
            break;
        case 14:
            rep = "";
            break;
        case 15:
            rep = "";
            break;
        case 16:
            rep = "https://i.imgur.com/DCdcmeY.png";
            break;
        case 17:
            rep = "https://i.imgur.com/OpukJsJ.png";
            break;
        case 18:
            rep = "https://i.imgur.com/LxlnaGB.png";
            break;
        case 19:
            rep = "https://i.imgur.com/rU6xgno.png";
            break;
        case 20:
            rep = "https://i.imgur.com/SsvHkq0.png";
            break;
        case 21:
            rep = "https://i.imgur.com/YxKUI6K.png";
            break;
        case 22:
            rep = "https://i.imgur.com/EP77OeD.png";
            break;
        case 23:
            rep = "https://i.imgur.com/fMJyRMS.png";
            break;
        case 24:
            rep = "https://i.imgur.com/463aI27.png";
            break;
        case 25:
            rep = "https://i.imgur.com/jPBM0sf.png";
            break;
        case 26:
            rep = "https://i.imgur.com/H8sSuNy.png";
            break;
        case 27:
            rep = "https://i.imgur.com/lCO0zu3.png";
            break;
        case 28:
            rep = "https://i.imgur.com/oj2LSmN.png";
            break;
        case 29:
            rep = "https://i.imgur.com/PZcm7hw.png";
            break;
        case 30:
            rep = "https://i.imgur.com/BFfUJZb.png";
            break;
        case 31:
            rep = "https://i.imgur.com/zgiQVed.png";
            break;
        case 32:
            rep = "";
            break;
        case 33:
            rep = "";
            break;
    }
    return rep;
};
skc.getskillimage2Captain = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "https://i.imgur.com/ANlmTZ9.png";
            break;
        case 1:
            rep = "https://i.imgur.com/zk4TDHI.png";
            break;
        case 2:
            rep = "https://i.imgur.com/EbD2W4D.png";
            break;
        case 3:
            rep = "https://i.imgur.com/d8IZ8vo.png";
            break;
        case 4:
            rep = "https://i.imgur.com/CouOrhd.png";
            break;
        case 5:
            rep = "https://i.imgur.com/j96exuC.png";
            break;
        case 6:
            rep = "https://i.imgur.com/Y35wfqp.png";
            break;
        case 7:
            rep = "https://i.imgur.com/ZS420Jj.png";
            break;
        case 8:
            rep = "https://i.imgur.com/JbVCOyb.png";
            break;
        case 9:
            rep = "https://i.imgur.com/UPZPXCG.png";
            break;
        case 10:
            rep = "https://i.imgur.com/gSS9Z87.png";
            break;
        case 11:
            rep = "https://i.imgur.com/hoX0XzK.png";
            break;
        case 12:
            rep = "https://i.imgur.com/hUuBeRH.png";
            break;
        case 13:
            rep = "https://i.imgur.com/4Thi1LV.png";
            break;
        case 14:
            rep = "https://i.imgur.com/invAfkU.png";
            break;
        case 15:
            rep = "https://i.imgur.com/oCoWwBn.png";
            break;
        case 16:
            rep = "https://i.imgur.com/v4BRXNF.png";
            break;
        case 17:
            rep = "https://i.imgur.com/oLasSdg.png";
            break;
        case 18:
            rep = "https://i.imgur.com/uFQqSGZ.png";
            break;
        case 19:
            rep = "https://i.imgur.com/OSOMZ7Z.png";
            break;
        case 20:
            rep = "https://i.imgur.com/b1HJKbc.png";
            break;
        case 21:
            rep = "https://i.imgur.com/tacrav0.png";
            break;
        case 22:
            rep = "https://i.imgur.com/dYmhVdI.png";
            break;
        case 23:
            rep = "https://i.imgur.com/9LwjkYk.png";
            break;
        case 24:
            rep = "https://i.imgur.com/ipQSlfC.png";
            break;
        case 25:
            rep = "https://i.imgur.com/6yEVBC6.png";
            break;
        case 26:
            rep = "https://i.imgur.com/94LZfIB.png";
            break;
        case 27:
            rep = "https://i.imgur.com/gRG8mHl.png";
            break;
        case 28:
            rep = "https://i.imgur.com/GGCfOgD.png";
            break;
        case 29:
            rep = "https://i.imgur.com/jkGEppa.png";
            break;
        case 30:
            rep = "https://i.imgur.com/5Ta45KX.png";
            break;
        case 31:
            rep = "https://i.imgur.com/RxEcIS8.png";
            break;
        case 32:
            rep = "";
            break;
        case 33:
            rep = "";
            break;
    }
    return rep;
};

module.exports = skc;