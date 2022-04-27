const skwd = {};

skwd.getskillWild = function (skillname){
    var wdret = -1;
    switch(skillname){
        case "재규어 스톰":
        case "재규어스톰":
        case "스톰":
        case "재스":
            wdret = 0;
            break;
        case "재규어 맥시멈":
        case "재규어맥시멈":
        case "맥시멈":
        case "재맥":
            wdret = 1;
            break;
        case "와일드 그레네이드":
        case "와일드 그리네이드":
        case "와일드그레네이드":
        case "와일드그리네이드":
        case "그레네이드":
        case "그리네이드":
        case "와그":
            wdret = 2;
            break;
        case "와일드 발칸 Type X":
        case "와일드발칸TypeX":
        case "TypeX":
        case "타입엑스":
        case "타입":
        case "엑스":
        case "와발엑":
            wdret = 3;
            break;
        case "포획":
            wdret = 4;
            break;
        case "헌터의 부름":
        case "헌터의부름":
        case "헌부":
            wdret = 5;
            break;
        case "더블 점프":
        case "더블점프":
        case "덥점":
        case "트리플 점프":
        case "트리플점프":
        case "트점":
            wdret = 6;
            break;
        case "재규어 라이딩":
        case "재규어라이딩":
        case "재규어 타기":
        case "재규어타기":
        case "라이딩":
            wdret = 7;
            break;
        case "서먼 재규어":
        case "서먼재규어":
        case "재규어 소환":
        case "재규어소환":
        case "서먼":
            wdret = 8;
            break;
        case "클로우 컷":
        case "클로우컷":
            wdret = 9;
            break;
        case "프로보크":
            wdret = 10;
            break;
        case "오토매틱 슈팅 디바이스":
        case "오토매틱 슈팅디바이스":
        case "오토매틱슈팅디바이스":
        case "오슈디":
            wdret = 11;
            break;
        case "재규어 매니지먼트":
        case "재규어매니지먼트":
        case "매니지먼트":
            wdret = 12;
            break;
        case "크로스 로드":
        case "크로스로드":
            wdret = 13;
            break;
        case "소울 애로우 : 석궁":
        case "소울애로우 : 석궁":
        case "소울애로우:석궁":
        case "소울 애로우 석궁":
        case "소울애로우 석궁":
        case "소울애로우석궁":
        case "소울 애로우":
        case "소울애로우":
            wdret = 14;
            break;
        case "하울링":
        case "와헌버프":
        case "버프":
            wdret = 15;
            break;
        case "소닉 붐":
        case "소닉붐":
            wdret = 16;
            break;
        case "화이트 히트 러쉬":
        case "화이트 히트러쉬":
        case "화이트히트러쉬":
        case "화히러":
            wdret = 17;
            break;
        case "어시스턴트 헌팅 유닛":
        case "어시스턴트 헌팅유닛":
        case "어시스턴트헌팅유닛":
        case "어헌유":
        case "설치기":
            wdret = 18;
            break;
        case "비스트 폼":
        case "비스트폼":
        case "날개":
            wdret = 19;
            break;
        case "드로우 백":
        case "드로우백":
        case "뒷걸음질":
        case "뒷걸음":
            wdret = 20;
            break;
        case "플러리":
            wdret = 21;
            break;
        case "재규어 링크":
        case "재규어링크":
        case "링크":
            wdret = 22;
            break;
        case "와일드 발칸":
        case "와일드발칸":
        case "와발":
            wdret = 23;
            break;
        case "와일드 발칸 Type-P":
        case "와일드발칸 Type-P":
        case "와일드발칸Type-P":
        case "와발P":
            wdret = 24;
            break;
        case "재규어 소울":
        case "재규어소울":
        case "소울":
            wdret = 25;
            break;
        case "드릴 컨테이너":
        case "드릴컨테이너":
        case "드컨":
            wdret = 26;
            break;
        case "익스텐트 매거진":
        case "익스텐트매거진":
        case "익스텐트":
        case "매거진":
        case "익매":
            wdret = 27;
            break;
        case "와일드 인스팅트":
        case "와일드인스팅트":
        case "인스팅트":
        case "와인":
            wdret = 28;
            break;
        case "네이처 포스":
        case "네이처포스":
            wdret = 29;
            break;
        case "사일런트 램피지":
        case "사일런트램피지":
        case "사램":
            wdret = 30;
            break;
        case "램피지 애즈 원":
        case "램피지 애즈원":
        case "램피지애즈원":
        case "램애원":
            wdret = 31;
            break;
        case "플래쉬 레인":
        case "플래쉬레인":
        case "플레":
            wdret = 32;
            break;
        case "":
            wdret = 33;
            break;
    }
    return wdret;
};
skwd.getskillnameWild = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "재규어 스톰";
            break;
        case 1:
            rep = "재규어 맥시멈";
            break;
        case 2:
            rep = "와일드 그레네이드";
            break;
        case 3:
            rep = "와일드 발칸 Type X";
            break;
        case 4:
            rep = "포획";
            break;
        case 5:
            rep = "헌터의 부름";
            break;
        case 6:
            rep = "더블 점프";
            break;
        case 7:
            rep = "재규어 라이딩";
            break;
        case 8:
            rep = "서먼 재규어";
            break;
        case 9:
            rep = "클로우 컷";
            break;
        case 10:
            rep = "프로보크";
            break;
        case 11:
            rep = "오토매틱 슈팅 디바이스";
            break;
        case 12:
            rep = "재규어 매니지먼트";
            break;
        case 13:
            rep = "크로스 로드";
            break;
        case 14:
            rep = "소울 애로우 : 석궁";
            break;
        case 15:
            rep = "하울링";
            break;
        case 16:
            rep = "소닉 붐";
            break;
        case 17:
            rep = "화이트 히트 러쉬";
            break;
        case 18:
            rep = "어시스턴트 헌팅 유닛";
            break;
        case 19:
            rep = "비스트 폼";
            break;
        case 20:
            rep = "드로우 백";
            break;
        case 21:
            rep = "플러리";
            break;
        case 22:
            rep = "재규어 링크";
            break;
        case 23:
            rep = "와일드 발칸";
            break;
        case 24:
            rep = "와일드 발칸 Type-P";
            break;
        case 25:
            rep = "재규어 소울";
            break;
        case 26:
            rep = "드릴 컨테이너";
            break;
        case 27:
            rep = "익스텐드 매거진";
            break;
        case 28:
            rep = "와일드 인스팅트";
            break;
        case 29:
            rep = "네이처 포스";
            break;
        case 30:
            rep = "사일런트 램피지";
            break;
        case 31:
            rep = "램피지 애즈 원";
            break;
        case 32:
            rep = "플래쉬 레인";
            break;
        case 33:
            rep = "";
            break;
    }
    return rep;
};
skwd.getskilldesc1Wild = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "40초간 7마리소환/최종뎀반영90%, 일몹뎀150%,바이트확률50%";
            break;
        case 1:
            rep = "11초간무적/15명,740%,12번,9회/990%,15번,4회마무리공격/크확,방무100%";
            break;
        case 2:
            rep = "폭발시 8명,1320%,5번 공격/ 4.5초당 1개준비,최대8개/ 쿨0.5초";
            break;
        case 3:
            rep = "7.2초간 키다운가능,8명,1260%,5번 공격/ 방무 20%추가/ 쿨120초";
            break;
        case 4:
            rep = "몬스터의 HP를 90% 이하로 떨어뜨린 후, 몬스터를 포획할 수 있다";
            break;
        case 5:
            rep = "하단 참조";
            break;
        case 6:
            rep = "재규어를 탑승한 상태일 경우 트리플 점프로 스킬이 변경된다";
            break;
        case 7:
            rep = "하단 참조";
            break;
        case 8:
            rep = "하단 참조";
            break;
        case 9:
            rep = "하단 참조";
            break;
        case 10:
            rep = "재규어가 최대 10명의 적을 10초 동안 도발 / 쿨20초";
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
            rep = "";
            break;
        case 16:
            rep = "";
            break;
        case 17:
            rep = "";
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
            rep = "";
            break;
        case 22:
            rep = "";
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
            rep = "";
            break;
        case 33:
            rep = "";
            break;
    }
    return rep;
};
skwd.getskilldesc2Wild = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "↓키함께사용시 재규어3마리소환/최종뎀반영률210%/[패시브:공65]/쿨120초";
            break;
        case 1:
            rep = "스킬다시사용시 마무리공격, 100%확률로 바이트최대중첩/ 쿨120초";
            break;
        case 2:
            rep = "와일드 발칸, 와일드 발칸 Type X 도중 사용 시 시전 동작 없음";
            break;
        case 3:
            rep = "초당 타수 45타";
            break;
        case 4:
            rep = "몬스터 포획. 최대 다섯 종류 포획 가능. / 쿨10초";
            break;
        case 5:
            rep = "투명도 영향 받지 않음";
            break;
        case 6:
            rep = "재규어를 탑승하지 않은 상태일 경우 더블 점프로 스킬이 변경된다.";
            break;
        case 7:
            rep = "온오프형 모드 전환기";
            break;
        case 8:
            rep = "온오프형 대인 모드 전환기";
            break;
        case 9:
            rep = "첫 번째 어나더 바이트 디버프공격기";
            break;
        case 10:
            rep = "[재규어 스킬] 보스에게는 지속시간이 절반으로 감소.";
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
            rep = "";
            break;
        case 16:
            rep = "";
            break;
        case 17:
            rep = "";
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
            rep = "";
            break;
        case 22:
            rep = "";
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
            rep = "";
            break;
        case 33:
            rep = "";
            break;
    }
    return rep;
};
skwd.getskilldesc3Wild = function (skillcode){
    rep = "";
    switch(skillcode){
        case 5:
            rep = "자신이 포획한 몬스터 중 재규어를 제외한 몬스터를 랜덤으로 소환한다.\n재사용 대기시간 초기화의 효과를 받지 않고 몬스터의 공격은 공격 반사 상태의 적을 공격해도 피해를 입지 않는다.\n\nMP 10 소비, 60초 동안 몬스터 소환\n몬스터는 2초마다 200% + 몬스터 레벨당 1%의 데미지로 공격\n\n재사용 대기시간 : 30초";
            break;
        case 7:
            rep = "잘 길들여진 재규어를 소환하여 올라탄다. 재규어에 탑승 시 이동속도와 스탠스 확률이 증가한다. 서먼 재규어를 사용하거나 재규어 스킬을 사용하면 재규어에서 내려 같이 다닐 수 있다. 단, 재규어 스톰으로 소환된 재규어가 있다면 재규어 스킬 사용 시 재규어에서 내려지지 않고 재규어 스킬이 발동된다\n\nMP 20 소비, 탑승 시 이동속도 40, 스탠스 확률 50% 증가\n\n재사용 대기시간 1초";
            break;
        case 8:
            rep = "재규어를 소환하여 함께 싸운다. 재규어는 캐릭터가 공격하는 적을 우선해서 공격한다. 재규어에게 [재규어 스킬]을 사용하도록 지시할 수 있다. 재규어 스킬은 범위 내의 최대 HP가 높은 보스 몬스터를 우선 공격한다. 보스 몬스터가 없다면 캐릭터가 보는 방향으로 공격한다.\n재규어가 소환된 상태에서 아래 방향키와 함께 스킬을 재사용하여 메인 재규어를 해당 위치에 고정되어 전투하도록 지시할 수 있다. 고정된 재규어는 공격 범위 내의 최대 HP가 높은 보스 몬스터 쪽을 우선하여 공격하며 캐릭터와 일정 거리 이상 멀어지면 다시 캐릭터 위치로 이동한다.\n재규어 라이딩을 사용하면 재규어를 탑승할 수 있다.\n\nMP 20 소비, 최대 6명의 적을 140% + 자신의 레벨당 1% 데미지로 공격하는 재규어 소환.\n재규어가 공격 시 15% 확률로 최대 3회까지 중첩되고 15초 동안 지속되는 디버프 발생.\n\n어나더 바이트 : [파이널 어택류 스킬] 디버프에 걸린 적을 석궁을 사용하는 스킬로 공격하면 중첩당 60% + 자신의 레벨 3당 1% 데미지의 추가 공격.\n재규어 소환 시 크리티컬 데미지 8%, 상태 이상 내성 30 증가\n\n재사용 대기시간 1초";
            break;
        case 9:
            rep = "[재규어 스킬] 재규어의 앞발로 전방의 적 다수를 연속 공격한다. 클로우 컷은 적을 공격하면 HP를 회복하며 공격 반사 상태의 적을 공격해도 피해를 입지 않는다.\n\nMP 30 소비, 최대 8명의 적을 200% + 자신의 레벨당 1% 데미지로 4번 공격.\n어나더 바이트 디버프가 없는 적 공격 시 100% 확률로 디버프 발생, 이후 공격 시 30% 확률로 어나더 바이트 디버프 추가 발생.\n공격 시 최대 HP의 7% 회복.\n\n재사용 대기시간 5초";
            break;
        case 10:
            rep = "";
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
            rep = "";
            break;
        case 16:
            rep = "";
            break;
        case 17:
            rep = "";
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
            rep = "";
            break;
        case 22:
            rep = "";
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
            rep = "";
            break;
        case 33:
            rep = "";
            break;
    }
    return rep;
};
skwd.getskillimage1Wild = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "https://i.imgur.com/lRUeLkH.png";
            break;
        case 1:
            rep = "https://i.imgur.com/optOXWJ.png";
            break;
        case 2:
            rep = "https://i.imgur.com/c37k9kz.png";
            break;
        case 3:
            rep = "https://i.imgur.com/uTi22Hb.png";
            break;
        case 4:
            rep = "";
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
            rep = "";
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
            rep = "";
            break;
        case 16:
            rep = "";
            break;
        case 17:
            rep = "";
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
            rep = "";
            break;
        case 22:
            rep = "";
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
            rep = "";
            break;
        case 33:
            rep = "";
            break;
    }
    return rep;
};
skwd.getskillimage2Wild = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "https://i.imgur.com/iTeujsw.png";
            break;
        case 1:
            rep = "https://i.imgur.com/3pNoT0X.png";
            break;
        case 2:
            rep = "https://i.imgur.com/gavX7n4.png";
            break;
        case 3:
            rep = "https://i.imgur.com/VG22it3.png";
            break;
        case 4:
            rep = "";
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
            rep = "";
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
            rep = "";
            break;
        case 16:
            rep = "";
            break;
        case 17:
            rep = "";
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
            rep = "";
            break;
        case 22:
            rep = "";
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
            rep = "";
            break;
        case 33:
            rep = "";
            break;
    }
    return rep;
};

module.exports = skwd;