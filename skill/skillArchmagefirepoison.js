const skfp = {};

skfp.getskillArchmagefirepoison = function (skillname){
    var fpret = -1;
    switch(skillname){
        case "도트 퍼니셔":
        case "도트퍼니셔":
        case "퍼니셔":
        case "도퍼":
            fpret = 0;
            break;
        case "포이즌 노바":
        case "포이즌노바":
        case "포노":
        case "노바":
            fpret = 1;
            break;
        case "퓨리 오브 이프리트":
        case "퓨리오브이프리트":
        case "퓨오이":
        case "퓨리":
            fpret = 2;
            break;
        case "포이즌 체인":
        case "포이즌체인":
        case "체인":
        case "포체":
            fpret = 3;
            break;
        case "마나 웨이브":
        case "마나웨이브":
        case "마웨":
        case "체공":
            fpret = 4;
            break;
        case "엘리멘탈 드레인":
        case "엘리멘탈드레인":
        case "드레인":
        case "엘드":
            fpret = 5;
            break;
        case "메디테이션":
        case "메디":
            fpret = 6;
            break;
        case "이그나이트":
        case "이그":
            fpret = 7;
            break;
        case "MP 이터":
        case "MP이터":
        case "엠피 이터":
        case "엠피이터":
            fpret = 8;
            break;
        case "포이즌 미스트":
        case "포이즌미스트":
        case "미스트":
        case "독안개":
            fpret = 9;
            break;
        case "포이즌 리젼":
        case "포이즌리젼":
        case "포이즌 리전":
        case "포이즌리전":
            fpret = 10;
            break;
        case "엘리멘탈 어뎁팅(불,독)":
        case "엘리멘탈어뎁팅(불,독)":
        case "엘리멘탈 어뎁팅":
        case "엘리멘탈어뎁팅":
        case "어뎁팅":
        case "내성":
            fpret = 11;
            break;
        case "텔레포트 마스터리":
        case "텔레포트마스터리":
        case "텔포 마스터리":
        case "텔포마스터리":
        case "텔마":
            fpret = 12;
            break;
        case "텔레포트 부스트":
        case "텔레포트부스트":
        case "텔포 부스트":
        case "텔포부스트":
        case "텔부":
            fpret = 13;
            break;
        case "엘리멘탈 리셋":
        case "엘리멘탈리셋":
        case "리셋":
            fpret = 14;
            break;
        case "엘리먼트 앰플리피케이션":
        case "엘리먼트앰플리피케이션":
        case "앰플리피케이션":
        case "앰플":
            fpret = 15;
            break;
        case "익스트림 매직(불,독)":
        case "익스트림매직(불,독)":
        case "익스트림 매직":
        case "익스트림매직":
        case "익스트림":
            fpret = 16;
            break;
        case "플레임 스윕":
        case "플레임스윕":
        case "스윕":
        case "패럴라이즈":
        case "페럴라이즈":
        case "패럴":
        case "페럴":
            fpret = 17;
            break;
        case "미스트 이럽션":
        case "미스트이럽션":
        case "이럽션":
        case "폭발":
            fpret = 18;
            break;
        case "퍼번트 드레인":
        case "퍼번트드레인":
        case "퍼번트":
        case "퍼드":
            fpret = 19;
            break;
        case "메테오":
            fpret = 20;
            break;
        case "플레임 헤이즈":
        case "플레임헤이즈":
        case "헤이즈":
        case "몸박무시":
        case "몸박":
            fpret = 21;
            break;
        case "인피니티":
        case "인피":
            fpret = 22;
            break;
        case "이프리트":
        case "소환수":
            fpret = 23;
            break;
        case "파이어 오라":
        case "파이어오라":
        case "오라":
            fpret = 24;
            break;
        case "메기도 플레임":
        case "메기도플레임":
        case "메기도":
        case "메플":
            fpret = 25;
            break;
        case "":
            fpret = 26;
            break;
        case "":
            fpret = 27;
            break;
        case "":
            fpret = 28;
            break;
        case "":
            fpret = 29;
            break;
    }
    return fpret;
};
skfp.getskillnameArchmagefirepoison = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "도트 퍼니셔";
            break;
        case 1:
            rep = "포이즌 노바";
            break;
        case 2:
            rep = "퓨리 오브 이프리트";
            break;
        case 3:
            rep = "포이즌 체인";
            break;
        case 4:
            rep = "마나 웨이브";
            break;
        case 5:
            rep = "엘리멘탈 드레인";
            break;
        case 6:
            rep = "메디테이션";
            break;
        case 7:
            rep = "이그나이트";
            break;
        case 8:
            rep = "MP 이터";
            break;
        case 9:
            rep = "포이즌 미스트";
            break;
        case 10:
            rep = "포이즌 리젼";
            break;
        case 11:
            rep = "엘리멘탈 어뎁팅(불,독)";
            break;
        case 12:
            rep = "텔레포트 마스터리";
            break;
        case 13:
            rep = "텔레포트 부스트";
            break;
        case 14:
            rep = "엘리멘탈 리셋";
            break;
        case 15:
            rep = "엘리먼트 앰플리피케이션";
            break;
        case 16:
            rep = "익스트림 매직(불,독)";
            break;
        case 17:
            rep = "플레임 스윕";
            break;
        case 18:
            rep = "미스트 이럽션";
            break;
        case 19:
            rep = "퍼번트 드레인";
            break;
        case 20:
            rep = "메테오";
            break;
        case 21:
            rep = "플레임 헤이즈";
            break;
        case 22:
            rep = "인피니티";
            break;
        case 23:
            rep = "이프리트";
            break;
        case 24:
            rep = "파이어 오라";
            break;
        case 25:
            rep = "메기도 플레임";
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
    }
    return rep;
};
skfp.getskilldesc1Archmagefirepoison = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "하단 참조";
            break;
        case 1:
            rep = "하단 참조";
            break;
        case 2:
            rep = "3초간 12명,440%,6번 지속 공격/ 쿨75초";
            break;
        case 3:
            rep = "하단 참조";
            break;
        case 4:
            rep = "사용후 키다운시 느리게 하강가능, 최대 5초까지 하강";
            break;
        case 5:
            rep = "자신의 스킬의 도트 데미지당 최종 데미지 3%";
            break;
        case 6:
            rep = "MP 16 소비, 240초 동안 파티원의 마력 30 증가";
            break;
        case 7:
            rep = "화염 마법 시전 시 50% 확률로 불의 벽 생성/ 6초 지속";
            break;
        case 8:
            rep = "마법 공격 시 30% 확률로 적의 최대 MP의 5% 흡수";
            break;
        case 9:
            rep = "15초 동안 270% 데미지의 독 안개 생성";
            break;
        case 10:
            rep = "하단 참조";
            break;
        case 11:
            rep = "MP 2% 소비, 상태이상 100%확률 방어, 최대 10번 재생성";
            break;
        case 12:
            rep = "최대 6명의 적에게 272% 데미지, 80% 확률로 4초 동안 기절";
            break;
        case 13:
            rep = "텔레포트 이동 거리 좌우 65, 상하 25 증가";
            break;
        case 14:
            rep = "공격 속성 내성 10% 감소, 최종 데미지 40% 증가";
            break;
        case 15:
            rep = "소비 MP 50% 증가, 공격 마법의 데미지 50% 증가";
            break;
        case 16:
            rep = "도트, 기절, 빙결, 암흑, 마비 상태 적 공격시 최종뎀 20%";
            break;
        case 17:
            rep = "최대 8명의 적에게 220% 데미지로 7번 공격";
            break;
        case 18:
            rep = "하단 참조";
            break;
        case 19:
            rep = "자신의 스킬의 도트 데미지당 최종 데미지 5%";
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
            rep = "3초마다 주위의 적들을 400%의 데미지로 2번 공격";
            break;
        case 25:
            rep = "하단 참조";
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
    }
    return rep;
};
skfp.getskilldesc2Archmagefirepoison = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "잡몹 소환이나 공격 분산 패턴에 취약";
            break;
        case 1:
            rep = "크기가 큰 보스가 아니면 효율이 상당히 떨어진다";
            break;
        case 2:
            rep = "퍼번트 드레인 1개 당 0.6초 증가/ 이프리트 소환상태에서만";
            break;
        case 3:
            rep = "전이형 광범위 공격기";
            break;
        case 4:
            rep = "모험가 마법사 공통 상향 및 완강 이동기";
            break;
        case 5:
            rep = "최대 5개 적용, 엘리멘탈 드레인간에는 합 적용.";
            break;
        case 6:
            rep = "마력을 증가시키는 액티브 파티 버프";
            break;
        case 7:
            rep = "일정 간격으로 최대 8명의 적에게 40%의 데미지로 3번 공격";
            break;
        case 8:
            rep = "보스 몬스터에게는 최대 MP의 3% 흡수";
            break;
        case 9:
            rep = "중독 시 6초 동안 1초당 240%의 도트 데미지";
            break;
        case 10:
            rep = "설치 및 화염마법 연계형 공격기";
            break;
        case 11:
            rep = "쿨 240초/ [패시브 효과 : 상태 이상 및 모든 속성 내성 20% 증가]";
            break;
        case 12:
            rep = "4초 동안 2초마다 98% 데미지/ [패시브 효과 : 스탠스 40% 증가]";
            break;
        case 13:
            rep = "온오프 스킬";
            break;
        case 14:
            rep = "-";
            break;
        case 15:
            rep = "공격 스킬 이외의 스킬의 MP 소모량도 증가";
            break;
        case 16:
            rep = "도트 데미지 적용 시간 100% 증가";
            break;
        case 17:
            rep = "5초 동안 화상을 입으며 1초당 240%의 도트 데미지";
            break;
        case 18:
            rep = "보스전 주력기";
            break;
        case 19:
            rep = "엘리멘탈 드레인 강화";
            break;
        case 20:
            rep = "광역 공격기 겸 파이널 어택";
            break;
        case 21:
            rep = "이럽션과 함께 보스전 주력 콤보";
            break;
        case 22:
            rep = "모법 공통 점진적 최종데미지 증가 버프";
            break;
        case 23:
            rep = "숙련도 증가를 겸함";
            break;
        case 24:
            rep = "30초 동안 1초 마다 500%의 도트 데미지/ 온오프 스킬";
            break;
        case 25:
            rep = "투사체 사출형 공격기";
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
    }
    return rep;
};
skfp.getskilldesc3Archmagefirepoison = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "MP 500 소비, 20초 동안 적을 찾아 850% 데미지로 5번 공격하는 화염구 15개 생성\n\n일정 범위 내에 적이 입고 있는 지속 피해 중첩 1당 1개 추가 소환, 화염구는 최대 25개까지 소환 가능\n\n여러 개의 화염구가 하나의 몬스터를 공격하면 2번째 화염구부터 최종 데미지 45% 감소\n\n화염구에 공격당한 적은 8초 동안 1초당 290%의 지속 피해\n\n재사용 대기시간 : 25초";
            break;
        case 1:
            rep = "MP 500 소비, 독구름 수개 생성, 독구름은 닿은 적에게 550%의 데미지로 12번 공격 후 10초 동안 1초 간격으로 660%의 지속 데미지를 줌\n\n하나의 독구름에게 피해를 받은 적은 다른 독구름에 닿더라도 피해를 받지 않음\n\n독구름이 생성된 후 2초가 지나면 미스트 이럽션을 사용하여 독구름을 폭발시킬 수 있고 폭파 시 최대 12명의 적에게 495%의 데미지로 12번 공격, 폭파 데미지는 여러 개의 독구름이 중첩되어 적용될 수 있으나 하나의 적에게 3개를 초과하여 적용될 경우 초과한 폭파의 최종 데미지 50% 감소\n\n재사용 대기시간 25초";
            break;
        case 3:
            rep = "적을 연쇄적으로 전염시키는 치명적인 독을 발산한다. 중독된 적은 일정 시간마다 폭발하여 피해를 받고 주변 적에게 독을 전염시킨다.\n폭발에서 살아남더라도 독이 축적되어 점차 폭발의 위력이 강해진다. 폭발 발생 전에 적이 죽거나 사라졌다면 즉시 주변의 적에게 전염되고 전염시킬 적이 없다면 일정 시간 동안 결정으로 남아 주변의 적을 전염시키고 사라진다. 최대 폭발할 수 있는 제한을 초과하면 중독되었던 모든 적에게 걸린 독이 제거된다.\n포이즌 체인은 엘리멘탈 드레인을 활성화시키지 않고 전염된 독은 공격 반사 상태의 적을 공격해도 피해를 입지 않는다.\n\nMP 1000 소비, 2명의 적을 550%의 데미지로 4번 공격한 후 최대 20초간 지속되는 독에 중독시킴, 중독된 적에게서 일정 시간마다 330%의 데미지로 5번 공격하는 폭발 발생 후 주변의 중독되지 않은 적 3명에게 전염\n주변에 전염시킬 적이 없다면 5초 동안 지속되는 독 결정 생성\n독 결정은 주변의 적 1명을 전염시킨 후 소멸되나 지속시간이 다 되면 전염시키지 않아도 자연 소멸, 맵 내에 최대 3개 생성 가능\n\n독은 최대 5번까지 축적 가능, 축적된 독에 비례해 폭발의 데미지 60%p씩 증가\n1명의 적에게 최대 9번, 모든 적을 합하여 최대 17번까지 폭발 발동 가능\n폭발 발동 가능 횟수 소모로 인해 종료되었다면 모든 독이 제거되며 폭발 1회 추가 발생\n\n재사용 대기시간 25초";
            break;
        case 10:
            rep = "주변을 맹독 지대로 만드는 독 마법진을 설치한다. 마법진에서 지속적으로 맹독이 생성되어 점차 맹독 지대가 좌우로 번진다. 맹독 지대는 발판에 끝에 다다르면 더 이상 번지지 않으며, 맹독 지대의 독은 인화성으로 생성 후 일정 시간이 지난 후 맹독 지대 위에서 화염 마법을 사용하거나 화염 마법에 피격되면 강력한 폭발을 일으킨다. 폭발도 주변의 맹독 지대를 폭발시킬 수 있다. 독 속성의 공격이다.\n\nMP 54 소비, 60초 동안 지속되는 오브제 설치\n오브제는 일정 시간마다 주변을 맹독 지대로 만들며 맹독지대 위의 적에게 10초 동안 1초마다 204%의 도트 데미지\n맹독 지대 폭발 : MP 60 소비, 맹독 지대 폭발에 의한 폭발은 MP 소비하지 않음, 생성 후 1.5초 후부터 폭발 가능, 최대 10명의 적을 200%의 데미지로 4번 공격, 폭발에 의해서도 맹독 지대 폭발 가능\n하나의 몬스터가 0.4초 이내에 폭발에 연속으로 맞으면 두번째 폭발부터 최종 데미지 50% 감소\n일반 몬스터 공격 시 데미지 50% 증가\n\n재사용 대기시간 30초";
            break;
        case 18:
            rep = "영구적으로 포이즌 미스트의 도트 데미지를 증가시킬 수 있으며 스킬 사용 시 주변에 설치된 포이즌 미스트들을 폭발시켜 적에게 치명적인 독 속성 데미지를 준다. 대상에게 적용된 도트의 수가 많을수록 더 큰 피해를 줄 수 있으며 다른 사람이 설치한 미스트는 폭발시킬 수 없다.\n재사용 대기시간 초기화의 효과를 받지 않고 미스트 폭발에 성공하면 플레임 헤이즈의 재사용 대기시간이 초기화된다.\n\nMP 100 소비, 최대 12명의 적에게 125% 데미지로 10번 공격하는 폭발 2번 발생, 몬스터의 방어율을 40% 무시\n대상에게 적용된 도트의 개수가 2개일 때 20%, 3개일 때 45%, 4개일 때 80%, 5개일 때 125%만큼 폭발의 최종 데미지 증가\n최대 6개의 미스트 동시 폭발 가능\n재사용 대기시간 10초\n\n도트가 5개 이상 적용된 적에게 미스트 이럽션을 적중시키면 미스트 이럽션의 재사용 대기시간 2초 감소, 도트 5중첩으로 인한 재사용 대기시간 감소는 다른 재사용 대기시간 감소 기능보다 먼저 적용\n[패시브 효과 : 영구적으로 포이즌 미스트의 도트 데미지 300%로 증가]";
            break;
        case 20:
            rep = "하늘로부터 운석을 소환하여 다수의 적에게 강력한 화염 공격을 가한다. 또한 영구히 파이어 오라를 제외한 스킬로 공격 시 일정 확률로 단일 적에게 운석이 떨어져 피해를 입힌다.\nMP 300 소비, 최대 15명의 적에게 315% 데미지로 12번 공격, 재사용 대기시간 45초\n\n[패시브 효과 : [파이널 어택류 스킬] 직접 공격하는 공격 스킬 사용 시 60% 확률로 단일 적에게 220%의 데미지로 공격하는 메테오를 떨어뜨림]";
            break;
        case 21:
            rep = "적을 타오르는 독안개로 감싸 부딪히지 않는 상태로 만들고 도트 데미지를 입히며 느려지게 만든다. 추가로, 적에게 명중하면 해당 위치에 포이즌 미스트가 생성되며, 적을 맞추지 못하면 현재 자신이 서 있는 위치에 포이즌 미스트가 생성된다.\n\nMP 70 소비, 단일 적 202% 데미지로 15번 공격, 100% 확률로 10초 동안 200% 도트 데미지를 주며[6] 부딪히지 않는 상태 지속 및 -50% 감속, 적 명중 시 포이즌 미스트 적 위치 생성, 맞은 적이 없을 경우 자신 위치에 포이즌 미스트 생성\n\n재사용 대기시간 10초";
            break;
        case 22:
            rep = "정신을 집중하여 무한한 마나를 이끌어내 일정 시간 동안 MP 소비없이 스킬을 사용할 수 있게 된다. 또한 지속적으로 자신의 HP와 MP가 회복되고 모든 공격 마법의 피해가 증가한다.\n재사용 대기시간 초기화의 효과를 받지 않는다.\n\nMP 80 소비, 40초 동안 지속, 일정 시간마다 순수 HP와 MP 10%씩 회복\n버프 지속 중 최종 데미지 70% 증가, 일정 시간마다 최종 데미지 3% 추가 증가, 최대 115%까지 증가 가능\n인피니티로 증가하는 최종 데미지는 합 적용\n버프 지속 시간 증가량을 반영한 지속 시간 기준 지속 시간이 30% 남았을 때 캐릭터 주위로 마나가 휘몰아침\n\n재사용 대기시간 180초";
            break;
        case 23:
            rep = "일정 시간 동안 불 속성을 지닌 이프리트를 소환한다. 이프리트는 다수의 적을 동시에 공격할 수 있으며 이프리트 스킬을 배우면 영구적으로 숙련도가 증가한다. 이프리트의 공격은 공격반사 상태의 적을 공격해도 피해를 입지 않는다.\n\nMP 120 소비, 260초 동안 이프리트 소환\n이프리트는 150% 데미지로 최대 3명의 적을 3번 공격하며 2초 동안 1초 간격으로 140%의 도트 데미지\n\n[패시브 효과 : 영구적으로 숙련도 증가량 70%로 증가]";
            break;
        case 25:
            rep = "상대의 영혼까지 태워버리는 푸른 불꽃을 날려 적을 소멸시킨다. 푸른 불꽃은 적을 태운 후 일정 횟수까지 재생성된다. 불꽃은 범위 내의 보스 몬스터를 우선하여 추적하며, 보스 몬스터가 여럿일 경우 최대 HP가 가장 높은 보스 몬스터를 우선하여 추적한다. 공격 무시 및 공격 반사 상태의 적에게도 피해를 입힌다.\n\nMP 500 소비, 푸른 불꽃 3개 생성\n불꽃은 380%의 데미지로 4번 공격하며 적에게 적중 후 분열하여 자신 외에 1개가 추가로 생성, 처음 생성된 불꽃을 포함하여 최대 11개까지 생성될 수 있으며 최대 개수까지 생성되면 더 이상 재생성되지 않음\n여러 개의 불꽃이 하나의 적을 공격하면 2번째 불꽃부터 최종 데미지 55% 감소\n불꽃이 태운 적은 30초 동안 1초마다 700%의 도트 데미지\n\n재사용 대기시간 50초";
            break;
    }
    return rep;
};
skfp.getskillimage1Archmagefirepoison = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "https://i.imgur.com/dPZx8du.png";
            break;
        case 1:
            rep = "https://i.imgur.com/S0HJlla.png";
            break;
        case 2:
            rep = "https://i.imgur.com/FSXi0Tk.png";
            break;
        case 3:
            rep = "https://i.imgur.com/b7qLYID.png";
            break;
        case 4:
            rep = "https://i.imgur.com/jNWrFER.png";
            break;
        case 5:
            rep = "";
            break;
        case 6:
            rep = "https://i.imgur.com/S6xwnnM.png";
            break;
        case 7:
            rep = "https://i.imgur.com/xsKVu2r.png";
            break;
        case 8:
            rep = "";
            break;
        case 9:
            rep = "https://i.imgur.com/udTDoKc.png";
            break;
        case 10:
            rep = "https://i.imgur.com/hIWlQVo.png";
            break;
        case 11:
            rep = "https://i.imgur.com/kNMxM7w.png";
            break;
        case 12:
            rep = "https://i.imgur.com/gSZAYq0.png";
            break;
        case 13:
            rep = "https://i.imgur.com/IHJ7639.png";
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
            rep = "https://i.imgur.com/plgjjOB.png";
            break;
        case 18:
            rep = "https://i.imgur.com/Vk7PZk7.png";
            break;
        case 19:
            rep = "";
            break;
        case 20:
            rep = "https://i.imgur.com/znSzeRY.png";
            break;
        case 21:
            rep = "https://i.imgur.com/o2RTinN.png";
            break;
        case 22:
            rep = "https://i.imgur.com/yaUhaQJ.png";
            break;
        case 23:
            rep = "https://i.imgur.com/m4Zl1bi.png";
            break;
        case 24:
            rep = "https://i.imgur.com/pI7XyZP.png";
            break;
        case 25:
            rep = "https://i.imgur.com/zTXnQPR.png";
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
    }
    return rep;
};
skfp.getskillimage2Archmagefirepoison = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "https://i.imgur.com/VBoYZtn.png";
            break;
        case 1:
            rep = "https://i.imgur.com/rjryqvp.png";
            break;
        case 2:
            rep = "https://i.imgur.com/ohUVIN3.png";
            break;
        case 3:
            rep = "https://i.imgur.com/nDdJyc0.png";
            break;
        case 4:
            rep = "https://i.imgur.com/zbMu5Sz.png";
            break;
        case 5:
            rep = "https://i.imgur.com/myLhZs8.png";
            break;
        case 6:
            rep = "https://i.imgur.com/ppWMPkq.png";
            break;
        case 7:
            rep = "https://i.imgur.com/9fTlNda.png";
            break;
        case 8:
            rep = "https://i.imgur.com/teIdTAP.png";
            break;
        case 9:
            rep = "https://i.imgur.com/yVQUeoP.png";
            break;
        case 10:
            rep = "https://i.imgur.com/fTYFJiF.png";
            break;
        case 11:
            rep = "https://i.imgur.com/MxKNWx1.png";
            break;
        case 12:
            rep = "https://i.imgur.com/vX1CPOK.png";
            break;
        case 13:
            rep = "https://i.imgur.com/U6XVHMP.png";
            break;
        case 14:
            rep = "https://i.imgur.com/812xQUb.png";
            break;
        case 15:
            rep = "https://i.imgur.com/1TThDAx.png";
            break;
        case 16:
            rep = "https://i.imgur.com/3KfLYsD.png";
            break;
        case 17:
            rep = "https://i.imgur.com/0mvULcF.png";
            break;
        case 18:
            rep = "https://i.imgur.com/bmbz23s.png";
            break;
        case 19:
            rep = "https://i.imgur.com/vBuFC3Y.png";
            break;
        case 20:
            rep = "https://i.imgur.com/66mUsSd.png";
            break;
        case 21:
            rep = "https://i.imgur.com/lRU0fEn.png";
            break;
        case 22:
            rep = "https://i.imgur.com/ha2nIEx.png";
            break;
        case 23:
            rep = "https://i.imgur.com/lWnu0iy.png";
            break;
        case 24:
            rep = "https://i.imgur.com/SFA1E6z.png";
            break;
        case 25:
            rep = "https://i.imgur.com/RrDmswY.png";
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
    }
    return rep;
};

module.exports = skfp;