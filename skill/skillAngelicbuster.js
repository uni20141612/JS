const skab = {};

skab.getskillAngelicbuster = function (skillname){
    var abret = -1;
    switch(skillname){
        case "에너지 버스트":
        case "에너지버스트":
        case "에버":
            abret = 0;
            break;
        case "스포트라이트":
        case "스포트☆라이트":
        case "스포트★라이트":
        case "Spot☆Light":
        case "Spot★Light":
        case "Spotlight":
            abret = 1;
            break;
        case "마스코트 패밀리어":
        case "마스코트패밀리어":
        case "마스코트":
        case "패밀리어":
        case "마패":
            abret = 2;
            break;
        case "트리니티 퓨전":
        case "트리니티퓨전":
        case "트퓨":
            abret = 3;
            break;
        /*case "":
            abret = 4;
            break;
        case "":
            abret = 5;
            break;
        case "":
            abret = 6;
            break;
        case "":
            abret = 7;
            break;
        case "":
            abret = 8;
            break;
        case "":
            abret = 9;
            break;
        case "":
            abret = 10;
            break;
        case "":
            abret = 11;
            break;
        case "":
            abret = 12;
            break;
        case "":
            abret = 13;
            break;
        case "":
            abret = 14;
            break;
        case "":
            abret = 15;
            break;
        case "":
            abret = 16;
            break;
        case "":
            abret = 17;
            break;
        case "":
            abret = 18;
            break;
        case "":
            abret = 19;
            break;*/
    }
    return abret;
};
skab.getskillnameAngelicbuster = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "에너지 버스트";
            break;
        case 1:
            rep = "스포트라이트";
            break;
        case 2:
            rep = "마스코트 패밀리어";
            break;
        case 3:
            rep = "트리니티 퓨전";
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
skab.getskilldesc1Angelicbuster = function (skillcode){
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
skab.getskilldesc2Angelicbuster = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "광범위 공격기 겸 무적기";
            break;
        case 1:
            rep = "광범위 공격기 겸 액티브 버프";
            break;
        case 2:
            rep = "최소 61600% ~ 최대 123200%";
            break;
        case 3:
            rep = "트리니티의 강화판이자 다수 공격기";
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
skab.getskilldesc3Angelicbuster = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "미지의 힘을 담은 에너지체를 소환한다.\n\n소환 후 30초가 지나거나 스킬을 다시 사용하면 폭발하여 최대 15명의 적을 990%의 데미지로 15번 공격하고 6초 동안 무적 버프를 주는 에너지체 소환\n\n석세서를 제외한 공격 스킬로 적을 공격하여 나오는 미지의 힘으로 에너지체의 위력과 무적 버프의 지속시간을 최대 2단계 증가시킬 수 있으며 단계마다 최종 데미지 100%, 무적 버프 지속시간 2초 증가\n\n재사용 대기시간 : 120초";
            break;
        case 1:
            rep = "슈퍼스타만을 따라다니는 화려한 조명을 설치한다. 슈퍼스타만이 조명 아래 서는 것이 허락되므로 조명 안의 적은 피해를 입고 슈퍼스타의 능력은 강화된다. 공격 반사 상태의 적을 공격해도 피해를 입지 않는다.\n\n30초 동안 엔젤릭버스터를 비추는 조명 3개 설치, 각 조명은 일정 주기마다 영역 안에 있는 최대 15명의 적을 880%의 데미지로 3번 공격\n영역 안에 엔젤릭버스터가 있다면 상태 이상 내성 26, 크리티컬 확률 16%, 스탠스 20%, 최종 데미지 6% 증가\n버프는 각 조명마다 별도로 적용되어 최대 3회까지 중첩 가능\n\n재사용 대기시간 120초\n\n시간을 멈출 수는 없지만\n언제나 함께 할 수 있어\n지나가 버린 시간이라도\n영원히 기억할 거야\n\nSpread your Wings and Fly Away\n날개를 활짝 펴고(Dress☆UP!)\nSpread your Wings and Fly Away\n이 세상 다하는 그날까지...\nDress☆UP";
            break;
        case 2:
            rep = "에스카다를 마법소녀의 필수 요소인 마스코트 캐릭터로 강제 변신시킨다. 공격 반사 상태의 적을 공격해도 피해를 입지 않는다.\n\n36초 동안 지속되며 리차지가 성공했을 때 최대 6명의 적을 1320%의 데미지로 5번 공격하는 트윙클 스타 혹은 매지컬 벌룬 사용, 이미 다른 행동을 하고 있다면 사용하지 않음\n\n트윙클 스타나 매지컬 버블 사용 혹은 8초마다 매지컬 버블을 1개 획득하고 최대 8개까지 소지 가능\n스킬을 한번 더 사용하면 3초 동안 최대 10명의 적을 550%의 데미지로 8번 공격하는 샤이니 버블 브레스 시전, 사용 시 매지컬 버블을 모두 소모하며 버블 1개당 지속시간 0.4초 증가, 소환 중 1회만 사용가능하고 시전 중 소환 지속시간이 종료되었어도 끝까지 사용한 후 소멸\n\n재사용 대기시간 120초";
            break;
        case 3:
            rep = "에스카다의 응축된 힘을 일시에 분출한다. 아래 방향키와 함께 트리니티를 사용하면 발동할 수 있고 트리니티 사용 중에도 발동할 수 있다.\n시전 동작 중 어떠한 공격에도 밀려나지 않으며 피격 데미지가 감소한다. 트리니티 퓨전은 공격 반사 상태의 적을 공격해도 피해를 입지 않고 트리니티 적중 시 중첩되는 데미지 증가 및 방어율 무시 버프가 적용된다.\n\n최대 8명의 적을 360%의 데미지로 3번 공격하는 용의 기운 9번 발동\n시전 동작 중 최대 HP의 일정 비율로 피해를 입히는 공격을 포함한 피격 데미지의 20% 감소\n\n재사용 대기시간 : 13초\n[패시브 효과 : 민첩 40 증가]";
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
skab.getskillimage1Angelicbuster = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "https://i.imgur.com/UeHyf4A.png";
            break;
        case 1:
            rep = "https://i.imgur.com/ljTcRlw.png";
            break;
        case 2:
            rep = "https://i.imgur.com/7bRKYZq.png";
            break;
        case 3:
            rep = "https://i.imgur.com/X55PFGK.png";
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
skab.getskillimage2Angelicbuster = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "https://i.imgur.com/pjAhXer.png";
            break;
        case 1:
            rep = "https://i.imgur.com/pe7wn8b.png";
            break;
        case 2:
            rep = "https://i.imgur.com/ItKID3a.png";
            break;
        case 3:
            rep = "https://i.imgur.com/PBJOjR6.png";
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

module.exports = skab;