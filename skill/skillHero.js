const skh = {};

skh.getskillHero = function (skillname){
    var hret = -1;
    switch(skillname){
        case "소드 오브 버닝 소울":
        case "소드오브버닝소울":
        case "버닝소울":
        case "소오버소":
            hret = 0;
            break;
        case "콤보 데스폴트":
        case "콤보데스폴트":
        case "데스폴트":
        case "데폴":
        case "콤데":
            hret = 1;
            break;
        case "콤보 인스팅트":
        case "콤보인스팅트":
        case "인스팅트":
        case "인팅":
        case "콤인":
            hret = 2;
            break;
        case "소드 일루전":
        case "소드일루전":
        case "일루전":
        case "소일":
            hret = 3;
            break;
        case "어퍼 차지":
        case "어퍼차지":
        case "어퍼":
        case "윗점":
            hret = 4;
            break;
        case "리프 어택":
        case "리프어택":
        case "리프":
        case "하강":
            hret = 5;
            break;
        case "플래시 슬래시":
        case "플래시슬래시":
        case "플슬":
        case "벽력일섬":
            hret = 6;
            break;
        case "콤보 어택":
        case "콤보어택":
        case "콤보":
            hret = 7;
            break;
        case "스피릿 블레이드":
        case "스피릿블레이드":
        case "스블":
        case "분노":
            hret = 8;
            break;
        case "오라 블레이드":
        case "오라블레이드":
        case "오블":
        case "샤우트":
            hret = 9;
            break;
        case "돌진":
            hret = 10;
            break;
        case "스카링 소드":
        case "스카링소드":
        case "스카링":
            hret = 11;
            break;
        case "콤보 시너지":
        case "콤보시너지":
        case "시너지":
            hret = 12;
            break;
        case "찬스 어택":
        case "찬스어택":
        case "찬스":
            hret = 13;
            break;
        case "레이징 블로우":
        case "레이징블로우":
        case "레블":
        case "오징어":
            hret = 14;
            break;
        case "인사이징":
        case "인사":
            hret = 15;
            break;
        case "매직 크래쉬":
        case "매직크래쉬":
        case "크래쉬":
        case "매크":
            hret = 16;
            break;
        case "인레이지":
        case "인레":
            hret = 17;
            break;
        case "어드밴스드 콤보":
        case "어드밴스드콤보":
        case "어콤보":
        case "어콤":
            hret = 18;
            break;
        case "컴뱃 마스터리":
        case "컴뱃마스터리":
        case "컴마":
            hret = 19;
            break;
        case "스탠스":
            hret = 20;
            break;
        case "발할라":
            hret = 21;
            break;
        case "레이지 업라이징":
        case "레이지업라이징":
        case "레업라":
        case "레업":
            hret = 22;
            break;
        case "":
            hret = 23;
            break;
        case "":
            hret = 24;
            break;
    }
    return hret;
};
skh.getskillnameHero = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "소드 오브 버닝 소울";
            break;
        case 1:
            rep = "콤보 데스폴트";
            break;
        case 2:
            rep = "콤보 인스팅트";
            break;
        case 3:
            rep = "소드 일루전";
            break;
        case 4:
            rep = "어퍼 차지";
            break;
        case 5:
            rep = "리프 어택";
            break;
        case 6:
            rep = "플래시 슬래시";
            break;
        case 7:
            rep = "콤보 어택";
            break;
        case 8:
            rep = "스피릿 블레이드";
            break;
        case 9:
            rep = "오라 블레이드";
            break;
        case 10:
            rep = "돌진";
            break;
        case 11:
            rep = "스카링 소드";
            break;
        case 12:
            rep = "콤보 시너지";
            break;
        case 13:
            rep = "찬스 어택";
            break;
        case 14:
            rep = "레이징 블로우";
            break;
        case 15:
            rep = "인사이징";
            break;
        case 16:
            rep = "매직 크래쉬";
            break;
        case 17:
            rep = "인레이지";
            break;
        case 18:
            rep = "어드밴스드 콤보";
            break;
        case 19:
            rep = "컴뱃 마스터리";
            break;
        case 20:
            rep = "스탠스";
            break;
        case 21:
            rep = "발할라";
            break;
        case 22:
            rep = "레이지 업라이징";
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
    }
    return rep;
};
skh.getskilldesc1Hero = function (skillcode){
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
            rep = "최대 5명의 적을 304% 데미지로 공격/ 커맨드잠금 : 우클릭";
            break;
        case 5:
            rep = "하단 참조";
            break;
        case 6:
            rep = "적에게 돌진하여 최대 6명의 적을 145%의 데미지로 5번 공격";
            break;
        case 7:
            rep = "활성화시 공격마다 40%확률 콤보카운트 누적/ 온오프스킬";
            break;
        case 8:
            rep = "200초 동안 자신을 포함한 파티원의 공격력 30 증가";
            break;
        case 9:
            rep = "8명,180%,5번 공격하는 검기 8방향 발사/ 쿨 7초";
            break;
        case 10:
            rep = "305% 데미지로 최대 12명의 적을 공격하며 이동";
            break;
        case 11:
            rep = "200초간 지속, 공격 적중 시 100%의 확률로 자상을 새김";
            break;
        case 12:
            rep = "80%의 확률로 콤보카운트 누적. 카운트 당 최종뎀 5% 증가";
            break;
        case 13:
            rep = "자상, 행동 불가 상태의 적 공격 시 최종 데미지 25% 증가";
            break;
        case 14:
            rep = "하단 참조";
            break;
        case 15:
            rep = "하단 참조";
            break;
        case 16:
            rep = "100%확률 일부 버프해제, 22초간 10명의 적의 버프효과 제한";
            break;
        case 17:
            rep = "최종 데미지 25%, 크리티컬 데미지 20% 증가";
            break;
        case 18:
            rep = "콤보 카운터 개 당 최종 데미지 증가량 10%, 최대10개";
            break;
        case 19:
            rep = "몬스터의 물리 방어율 50% 무시";
            break;
        case 20:
            rep = "스탠스 확률 60% 증가";
            break;
        case 21:
            rep = "하단 참조";
            break;
        case 22:
            rep = "10명의 적에게 500% 데미지로 8번 공격ㄴ";
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
    }
    return rep;
};
skh.getskilldesc2Hero = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "-";
            break;
        case 1:
            rep = "모든 것을 담아서!";
            break;
        case 2:
            rep = "극딜 버프";
            break;
        case 3:
            rep = "속사형 공격기";
            break;
        case 4:
            rep = "위 방향키와 공격키를 함께 눌러서도 사용가능하다.";
            break;
        case 5:
            rep = "공중 강하형 다수 공격기";
            break;
        case 6:
            rep = "재사용 대기시간 4초/ 시전 동작 중 슈퍼스탠스";
            break;
        case 7:
            rep = "콤보 카운터당 공격력 2 증가, 최대 콤보 카운트 5";
            break;
        case 8:
            rep = "(자신만)피격 데미지 30% 감소 후 500% 증폭시켜 반사";
            break;
        case 9:
            rep = "일반 몬스터 공격 시 데미지 180%p 증가";
            break;
        case 10:
            rep = "체공 판정";
            break;
        case 11:
            rep = "자상을 입은 적은 20초 동안 명중률 20% 공격력 30% 감소";
            break;
        case 12:
            rep = "카운트간 합적용, 피격 시 30% 확률로 콤보 카운트 충전";
            break;
        case 13:
            rep = "크리티컬 확률 20% 증가";
            break;
        case 14:
            rep = "콤보가 모두 쌓이면 강화";
            break;
        case 15:
            rep = "디버프 겸 다수 공격기";
            break;
        case 16:
            rep = "재사용 대기시간 60초/ 이미 걸려있어도 해제 가능";
            break;
        case 17:
            rep = "공격 스킬 최대 공격 가능한 몬스터 수 1/3로 감소/ 최소3명";
            break;
        case 18:
            rep = "80%확률로 콤보 2개씩 충전, 무기 숙련도 증가량 70%로 증가";
            break;
        case 19:
            rep = "히어로는 유일하게 50%";
            break;
        case 20:
            rep = "모험가 전사 공통";
            break;
        case 21:
            rep = "-";
            break;
        case 22:
            rep = "재사용 대기시간 10초";
            break;
        case 23:
            rep = "";
            break;
        case 24:
            rep = "";
            break;
    }
    return rep;
};
skh.getskilldesc3Hero = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "불타는 영혼을 검의 형상으로 만들어낸다. 공격 반사 상태의 적을 공격해도 피해를 입지 않는다.\n\nMP 350 소비, 시전 시 콤보를 최대치로 완충하며 75초 동안 자신의 주위에 영혼의 검을 생성, 스킬을 다시 사용하여 그 자리에 검을 고정 가능, 고정 상태에서 스킬 재사용 시 검이 자신에게로 복귀\n자신의 공격 스킬 사용 시 1초마다 최대 8명의 적을 6번 공격, 추가 크리티컬 확률 50%\n일반 상태 : 680%의 데미지, 인레이지 상태일 경우 770%의 데미지\n고정 상태 : 620%의 데미지, 인레이지 상태일 경우 675%의 데미지\n\n재사용 대기시간 120초";
            break;
        case 1:
            rep = "검으로 공간을 가른다.\n\nMP 500, 최대 15명의 적을 880%의 데미지로 14번 공격, 시전 동작 중 무적\n\n재사용 대기시간 25초";
            break;
        case 2:
            rep = "콤보 카운터를 무의식의 영역으로 받아들여 잠재된 본능의 힘까지 이끌어낸다. 콤보 카운터로 얻은 능력이 증가하고 레이징 블로우 사용 시 공간에 상처를 남길 수 있게 된다. 공간의 상처는 공격 반사 상태의 적을 공격해도 피해를 입지 않는다.\n\n콤보 카운터가 1개라도 있어야 사용 가능, MP 1000 소비, 20초 동안 지속\n콤보 카운터로 증가하는 최종 데미지, 보스 몬스터 공격 시 데미지, 공격력 20% 증가\n콤보 카운터가 충전될 확률 50% 감소\n공간의 상처 : 일정 시간마다 최대 6명의 적을 355%의 데미지로 6번 공격하는 균열 3회 발동, 공간의 상처로는 콤보 카운터 충전 불가\n\n재사용 대기시간 120초";
            break;
        case 3:
            rep = "콤보 카운터의 힘을 폭발시키며 눈에 보이지 않는 속도로 전방을 무수히 벤다. 소드 일루전은 공격 반사 상태의 적을 공격해도 피해를 입지 않는다.\n\nMP 700 소비, 최대 8명의 적을 275%의 데미지로 4번 공격하는 참격 12회 발동 후 550%의 데미지로 5번 공격하는 폭발 5회 발동\n콤보 어택 활성화 중 사용 시 8초 동안 6개의 콤보 카운터가 증가시키는 최종 데미지와 같은 수치의 최종 데미지 증가, 콤보 카운터가 증가시키는 최종 데미지와 합 적용\n\n재사용 대기시간 30초";
            break;
        case 5:
            rep = "공중에서 지상으로 급강하하여 적을 습격한다.\n아래 방향으로 일정 범위 안에 발판이 있어야 사용 가능하고 스킬 사용 시 바로 아래, 앞 방향키와 함께 사용하면 대각선으로 강하한다.\n스킬 대신 아래 방향키/앞 방향키와 공격키를 같이 눌러서도 사용 가능하다.\n\nMP 5 소비, 최대 4명의 적에게 90%의 데미지로 2번 공격";
            break;
        case 14:
            rep = "[검술] 전방의 적 다수를 순식간에 여러 번 베어낸다. 마지막 공격은 반드시 크리티컬로 적용된다. 콤보가 완충되면 스킬이 강화된다. 추가로 오라 블레이드를 강화한다.\n\nMP 40 소비, 최대 8명의 적을 320% 데미지로 4번 공격하고 마지막 공격은 크리티컬 판정\n강화 레이징 블로우 : 344%의 데미지로 4번 공격, 마지막 두 번의 공격은 크리티컬 판정\n[패시브 효과 : 오라 블레이드의 데미지 70%p 증가]";
            break;
        case 15:
            rep = "[검술] 정신을 집중하여 전방으로 검을 크게 내리긋는다. 궁극의 검술로 영혼에 새겨진 검이 실체화되어 공격하는 것처럼 보인다. 공격 당한 적은 상처를 입어 일정 시간 동안 도트 데미지를 입고, 도트 데미지를 입는 동안 크리티컬에 의한 피해량이 증가한다.\n\nMP 36 소비, 8명의 적에게 400%의 데미지로 4번 공격, 일반 몬스터 공격 시 데미지 50% 증가\n공격당한 적은 100% 확률로 60초 동안 2초마다 165%의 피해를 입으며 크리티컬에 한해 데미지 25% 증가, 파티원이 공격 시 10% 증가";
            break;
        case 21:
            rep = "고대 전사들의 의지가 깃들어 강력한 힘을 발휘한다. 히어로가 검술 스킬 사용 시 일정 시간마다 공격이 발생한 위치에 검격이 잔상처럼 남아 적을 추가 공격한다. 공용 스킬, 5차 스킬에 의해서는 검격이 발생하지 않는다.\n\nMP 300 소비, 30초 동안 적의 어떠한 공격에도 밀려나지 않고 콤보 최대치로 완충\n버프 지속 중 공격력 50, 크리티컬 확률 30%, 상태 이상 내성 100, 모든 속성 내성 100% 증가\n일정 시간마다 최대 6명의 적을 370%의 데미지로 2번 공격하는 검격 3개씩 발생, 검격은 최대 12회까지 발생하며 검격이 모두 발생하면 더 이상 발생하지 않음\n\n재사용 대기시간 120초";
            break;
    }
    return rep;
};
skh.getskillimage1Hero = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "https://i.imgur.com/u26MmIm.png";
            break;
        case 1:
            rep = "https://i.imgur.com/vGZS6gB.png";
            break;
        case 2:
            rep = "https://i.imgur.com/0HauOad.png";
            break;
        case 3:
            rep = "https://i.imgur.com/aa5yhaM.png";
            break;
        case 4:
            rep = "https://i.imgur.com/Z2FrDmA.png";
            break;
        case 5:
            rep = "https://i.imgur.com/QCo7Y2e.png";
            break;
        case 6:
            rep = "https://i.imgur.com/hiVTFQA.png";
            break;
        case 7:
            rep = "https://i.imgur.com/vBbUdGh.png";
            break;
        case 8:
            rep = "https://i.imgur.com/9OiHO3s.png";
            break;
        case 9:
            rep = "https://i.imgur.com/XMlLHEs.png";
            break;
        case 10:
            rep = "https://i.imgur.com/KlIA1fn.png";
            break;
        case 11:
            rep = "https://i.imgur.com/RdiWHJp.png";
            break;
        case 12:
            rep = "";
            break;
        case 13:
            rep = "";
            break;
        case 14:
            rep = "https://i.imgur.com/gFTVGWl.png";
            break;
        case 15:
            rep = "https://i.imgur.com/zjvHOPz.png";
            break;
        case 16:
            rep = "https://i.imgur.com/0RR1Xbw.png";
            break;
        case 17:
            rep = "https://i.imgur.com/MQnVHza.png";
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
            rep = "https://i.imgur.com/SDo8j70.png";
            break;
        case 22:
            rep = "https://i.imgur.com/FIBDBy3.png";
            break;
        case 23:
            rep = "";
            break;
        case 24:
            rep = "";
            break;
    }
    return rep;
};
skh.getskillimage2Hero = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "https://i.imgur.com/IIrYQWB.png";
            break;
        case 1:
            rep = "https://i.imgur.com/wb0wHVN.png";
            break;
        case 2:
            rep = "https://i.imgur.com/nCVLAVz.png";
            break;
        case 3:
            rep = "https://i.imgur.com/4jgEsPk.png";
            break;
        case 4:
            rep = "https://i.imgur.com/kUpLj5V.png";
            break;
        case 5:
            rep = "https://i.imgur.com/QvZZwOm.png";
            break;
        case 6:
            rep = "https://i.imgur.com/N34w3M3.png";
            break;
        case 7:
            rep = "https://i.imgur.com/25hsdSg.png";
            break;
        case 8:
            rep = "https://i.imgur.com/hLY7cpX.png";
            break;
        case 9:
            rep = "https://i.imgur.com/aIb565c.png";
            break;
        case 10:
            rep = "https://i.imgur.com/NK51JgX.png";
            break;
        case 11:
            rep = "https://i.imgur.com/RXDvA1z.png";
            break;
        case 12:
            rep = "https://i.imgur.com/swR23cd.png";
            break;
        case 13:
            rep = "https://i.imgur.com/uKaTByn.png";
            break;
        case 14:
            rep = "https://i.imgur.com/1KtnUSW.png";
            break;
        case 15:
            rep = "https://i.imgur.com/1CjVEcw.png";
            break;
        case 16:
            rep = "https://i.imgur.com/yjZ7bVb.png";
            break;
        case 17:
            rep = "https://i.imgur.com/4lOXsh1.png";
            break;
        case 18:
            rep = "https://i.imgur.com/mi59Y9N.png";
            break;
        case 19:
            rep = "https://i.imgur.com/8v7mdWC.png";
            break;
        case 20:
            rep = "https://i.imgur.com/cYYX9Uv.png";
            break;
        case 21:
            rep = "https://i.imgur.com/gBD5ipj.png";
            break;
        case 22:
            rep = "https://i.imgur.com/meDmVUK.png";
            break;
        case 23:
            rep = "";
            break;
        case 24:
            rep = "";
            break;
    }
    return rep;
};

module.exports = skh;