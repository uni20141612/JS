const skb = {};

skb.getskillBlaster = function (skillname){
    var bret = -1;
    switch(skillname){
        case "벙커 버스터":
        case "벙커버스터":
        case "벙커":
        case "벙버":
            bret = 0;
            break;
        case "발칸 펀치":
        case "발칸펀치":
        case "발칸":
            bret = 1;
            break;
        case "버닝 브레이커":
        case "버닝브레이커":
        case "버브":
        case "버닝":
            bret = 2;
            break;
        case "애프터이미지 쇼크":
        case "애프터이미지쇼크":
        case "애프터이미지":
        case "애프터":
        case "애이쇼":
        case "애쇼":
            bret = 3;
            break;
        case "매그넘 펀치":
        case "매그넘펀치":
        case "매펀":
        case "펀치":
        case "매그넘":
            bret = 4;
            break;
        case "리볼빙 캐논":
        case "리볼빙캐논":
        case "리볼빙":
        case "리캐":
            bret = 5;
            break;
        case "릴리즈 파일 벙커":
        case "릴리즈 파일벙커":
        case "릴리즈파일 벙커":
        case "릴리즈파일벙커":
        case "릴파벙":
            bret = 6;
            break;
        case "더블 점프":
        case "더블점프":
        case "더점":
        case "덥점":
            bret = 7;
            break;
        case "익스플로젼 무브":
        case "익스플로젼무브":
        case "익스플로젼":
        case "윗점":
            bret = 8;
            break;
        case "인듀어런스 실드":
        case "인듀어런스실드":
        case "인듀어런스":
        case "인실":
        case "실드":
            bret = 9;
            break;
        case "더블 팡":
        case "더블팡":
        case "덥팡":
        case "팡":
            bret = 10;
            break;
        case "더킹":
        case "덬":
        case "덕":
            bret = 11;
            break;
        case "차지 마스터리":
        case "차지마스터리":
        case "차마":
            bret = 12;
            break;
        case "리볼빙 캐논 업그레이드":
        case "리볼빙캐논 업그레이드":
        case "리볼빙캐논업그레이드":
        case "리캐업":
            bret = 13;
            break;
        case "해머 스매시":
        case "해머스매시":
        case "해스":
        case "해머":
        case "스매시":
            bret = 14;
            break;
        case "스웨이":
            bret = 15;
            break;
        case "리프트 프레스":
        case "리프트프레스":
        case "리프트":
        case "프레스":
        case "잡기":
        case "돌진기":
        case "돌진":
            bret = 16;
            break;
        case "매그넘 캐논":
        case "매그넘캐논":
        case "매캐":
            bret = 17;
            break;
        case "리볼빙 캐논 업그레이드 II":
        case "리볼빙캐논 업그레이드 II":
        case "리볼빙캐논업그레이드 II":
        case "리볼빙캐논업그레이드II":
        case "리캐업II":
        case "리볼빙 캐논 업그레이드 2":
        case "리볼빙캐논 업그레이드 2":
        case "리볼빙캐논업그레이드 2":
        case "리볼빙캐논업그레이드2":
        case "리캐업2":
            bret = 18;
            break;
        case "인듀어런스 트레이닝":
        case "인듀어런스트레이닝":
        case "인트":
            bret = 19;
            break;
        case "콤비네이션 트레이닝":
        case "콤비네이션트레이닝":
        case "콤비네이션":
        case "콤트":
            bret = 20;
            break;
        case "쇼크 웨이브 펀치":
        case "쇼크웨이브 펀치":
        case "쇼크웨이브펀치":
        case "쇼웨펀":
        case "쇽웨펀":
        case "숔웨펀":
        case "숔펀":
        case "쇽펀":
            bret = 21;
            break;
        case "플래시 무브":
        case "플래시무브":
        case "플래시":
        case "무브":
            bret = 22;
            break;
        case "허리케인 믹서":
        case "허리케인믹서":
        case "허리케인":
        case "믹서":
        case "허믹":
            bret = 23;
            break;
        case "리볼빙 벙커":
        case "리볼빙벙커":
        case "리벙":
        case "바인드":
        case "셀프바인드":
            bret = 24;
            break;
        case "슈퍼 인듀어런스":
        case "슈퍼인듀어런스":
        case "슈인":
            bret = 25;
            break;
        case "리볼빙 캐논 업그레이드 III":
        case "리볼빙캐논 업그레이드 III":
        case "리볼빙캐논업그레이드 III":
        case "리볼빙캐논업그레이드III":
        case "리캐업III":
        case "리볼빙 캐논 업그레이드 3":
        case "리볼빙캐논 업그레이드 3":
        case "리볼빙캐논업그레이드 3":
        case "리볼빙캐논업그레이드3":
        case "리캐업3":
            bret = 26;
            break;
        case "인듀어런스 트레이닝 II":
        case "인듀어런스트레이닝 II":
        case "인듀어런스트레이닝II":
        case "인트II":
        case "인듀어런스 트레이닝 2":
        case "인듀어런스트레이닝 2":
        case "인듀어런스트레이닝2":
        case "인트2":
            bret = 27;
            break;
        case "어드밴스드 차지 마스터리":
        case "어드밴스드차지 마스터리":
        case "어드밴스드차지마스터리":
        case "어차마":
            bret = 28;
            break;
        case "콤비네이션 트레이닝 II":
        case "콤비네이션트레이닝 II":
        case "콤비네이션트레이닝II":
        case "콤트II":
        case "콤비네이션 트레이닝 2":
        case "콤비네이션트레이닝 2":
        case "콤비네이션트레이닝2":
        case "콤트2":
            bret = 29;
            break;
        case "맥시마이즈 캐논":
        case "맥시마이즈캐논":
        case "맥마캐":
        case "맥캐":
            bret = 30;
            break;
        case "하이퍼 매그넘 펀치":
        case "하이퍼 매그넘펀치":
        case "하이퍼매그넘펀치":
        case "하매펀":
            bret = 31;
            break;
        case "":
            bret = 32;
            break;
    }
    return bret;
};
skb.getskillnameBlaster = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "벙커 버스터";
            break;
        case 1:
            rep = "발칸 펀치";
            break;
        case 2:
            rep = "버닝 브레이커";
            break;
        case 3:
            rep = "애프터이미지 쇼크";
            break;
        case 4:
            rep = "매그넘 펀치";
            break;
        case 5:
            rep = "리볼빙 캐논";
            break;
        case 6:
            rep = "릴리즈 파일 벙커";
            break;
        case 7:
            rep = "더블 점프";
            break;
        case 8:
            rep = "익스플로젼 무브";
            break;
        case 9:
            rep = "인듀어런스 실드";
            break;
        case 10:
            rep = "더블 팡";
            break;
        case 11:
            rep = "더킹";
            break;
        case 12:
            rep = "차지 마스터리";
            break;
        case 13:
            rep = "리볼빙 캐논 업그레이드";
            break;
        case 14:
            rep = "해머 스매시";
            break;
        case 15:
            rep = "스웨이";
            break;
        case 16:
            rep = "리프트 프레스";
            break;
        case 17:
            rep = "매그넘 캐논";
            break;
        case 18:
            rep = "리볼빙 캐논 업그레이드 II";
            break;
        case 19:
            rep = "인듀어런스 트레이닝";
            break;
        case 20:
            rep = "콤비네이션 트레이닝";
            break;
        case 21:
            rep = "쇼크 웨이브 펀치";
            break;
        case 22:
            rep = "플래시 무브";
            break;
        case 23:
            rep = "허리케인 믹서";
            break;
        case 24:
            rep = "리볼빙 벙커";
            break;
        case 25:
            rep = "슈퍼 인듀어런스";
            break;
        case 26:
            rep = "리볼빙 캐논 업그레이드 III";
            break;
        case 27:
            rep = "인듀어런스 트레이닝 II";
            break;
        case 28:
            rep = "어드밴스드 차지 마스터리";
            break;
        case 29:
            rep = "콤비네이션 트레이닝 II";
            break;
        case 30:
            rep = "맥시마이즈 캐논";
            break;
        case 31:
            rep = "하이퍼 매그넘 펀치";
            break;
        case 32:
            rep = "";
            break;
    }
    return rep;
};
skb.getskilldesc1Blaster = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "45초간 5차스킬제외 직접공격에 리볼빙캐논 자동발동/ 쿨120초";
            break;
        case 1:
            rep = "하단 참조";
            break;
        case 2:
            rep = "하단 참조";
            break;
        case 3:
            rep = "[액] : 180초간 공격시 990%,5번 공격 잔상발생/ 최대99번/ 재발생0.1초";
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
    }
    return rep;
};
skb.getskilldesc2Blaster = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "강화된 공격은 10명,390%,8번 공격/ 방무100%";
            break;
        case 1:
            rep = "키다운을 유지할 시 30레벨 기준 192,720%";
            break;
        case 2:
            rep = "동작의 액션 딜레이가 굉장히 길다.";
            break;
        case 3:
            rep = "쿨 동언 공격시 7명,1100%,3번 잔상발생/ 재발생6초/ 쿨240초";
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
    }
    return rep;
};
skb.getskilldesc3Blaster = function (skillcode){
    rep = "";
    switch(skillcode){
        case 1:
            rep = "전방으로 무수한 펀치를 빠르게 내지른다. 사용 중에는 가드 판정을 받고 적의 어떠한 공격에도 밀려나지 않으며 피격 횟수에 비례해 최종 데미지가 증가한다.\n\nMP 60 소비, 최대 10명의 적을 1100%의 데미지로 12번 공격, 키다운을 유지하면 최대 4초 동안 935%의 데미지로 연속해서 8번 공격\n\n사용 중 차지 마스터리 수치에 의한 가드 판정을 받고 콤비네이션 트레이닝 최대 단계로 유지\n사용 중 피격 시 마다 스킬의 최종 데미지 10% 증가, 피격으로 인한 최종 데미지는 최대 100%까지 증가\n\n재사용 대기시간 60초";
            break;
        case 2:
            rep = "불릿의 폭발력을 건틀렛 리볼버에 저장한 후 돌진하며 일시에 방출한다. 돌진 및 폭발은 공격 반사 상태의 적에게도 피해를 입힌다. 돌진 동작은 차지 스킬로 취소할 수 없으며 키다운 종료 시 아래 방향키를 누르고 있으면 돌진하지 않고 제자리에서 공격한다.\n\nMP 1000, 불릿 1개 소비\n\n최대 5초 동안 준비 가능하고 리볼빙 캐논을 사용하여 최대 5까지 불릿 추가 소모 가능, 키다운 종료 시 돌진하고 사용한 불릿 수에 비례한 폭발 방출. 준비 및 돌진 동작 중 무적, 스킬 시전 동작 중 콤비네이션 트레이닝 최대 단계로 유지\n\n돌진 : 최대 12명의 적을 3300%의 데미지로 15번 공격\n폭발 : 최대 12명의 적을 2640%의 데미지로 15번 공격\n\n모든 공격은 추가 크리티컬 확률 100% , 몬스터 방어율 100% 추가 무시\n재사용 대기시간 100초";
            break;
        case 3:
            rep = "";
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
    }
    return rep;
};
skb.getskillimage1Blaster = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "https://i.imgur.com/1RiT1UQ.png";
            break;
        case 1:
            rep = "https://i.imgur.com/nlRgGY1.png";
            break;
        case 2:
            rep = "https://i.imgur.com/A1LPQpC.png";
            break;
        case 3:
            rep = "https://i.imgur.com/IDkM6vf.png";
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
    }
    return rep;
};
skb.getskillimage2Blaster = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "https://i.imgur.com/aVTXEjJ.png";
            break;
        case 1:
            rep = "https://i.imgur.com/iNHzwVw.png";
            break;
        case 2:
            rep = "https://i.imgur.com/OK8REGm.png";
            break;
        case 3:
            rep = "https://i.imgur.com/vVXW0VR.png";
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
    }
    return rep;
};

module.exports = skb;