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
        /*case "":
            bret = 4;
            break;
        case "":
            bret = 5;
            break;
        case "":
            bret = 6;
            break;
        case "":
            bret = 7;
            break;
        case "":
            bret = 8;
            break;
        case "":
            bret = 9;
            break;
        case "":
            bret = 10;
            break;
        case "":
            bret = 11;
            break;
        case "":
            bret = 12;
            break;
        case "":
            bret = 13;
            break;
        case "":
            bret = 14;
            break;
        case "":
            bret = 15;
            break;
        case "":
            bret = 16;
            break;
        case "":
            bret = 17;
            break;
        case "":
            bret = 18;
            break;
        case "":
            bret = 19;
            break;*/
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
    }
    return rep;
};

module.exports = skb;