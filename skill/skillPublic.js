const skp = {};

skp.getskillPublic = function (skillname){
    var pret = -1;
    switch(skillname){
        case "메이플 용사":
        case "메이플용사":
        case "메용":
        case "용사":
        case "시그너스 나이츠":
        case "시그너스나이츠":
        case "노바의 용사":
        case "노바의용사":
        case "레프의 용사":
        case "레프의용사":
        case "아니마의 용사":
        case "아니마의용사":
        case "륀느의 가호":
        case "륀느의가호":
        case "이계의 용사":
        case "이계의용사":
            pret = 0;
            break;
        case "용사의 의지":
        case "용사의의지":
        case "의지":
        case "데몬즈 윌":
        case "데몬즈윌":
        case "시그너스 기사단의 의지":
        case "시그너스기사단의의지":
        case "노바 용사의 의지":
        case "노바용사의의지":
        case "레프 용사의 의지":
        case "레프용사의의지":
        case "아니마 용사의 의지":
        case "아니마용사의의지":
        case "초월자의 의지":
        case "초월자의의지":
        case "정신정화":
            pret = 1;
            break;
        case "영웅의 메아리":
        case "영웅의메아리":
        case "영메":
        case "익스클루시브 스펠":
        case "익스클루시브스펠":
        case "인탠시브 타임":
        case "인탠시브타임":
            pret = 2;
            break;
        case "로프 커넥트":
        case "로프커넥트":
        case "로프":
        case "로커":
            pret = 3;
            break;
        case "블링크":
        case "체공":
            pret = 4;
            break;
        case "에르다 노바":
        case "에르다노바":
        case "노바":
        case "바인드":
            pret = 5;
            break;
        case "에르다의 의지":
        case "에르다의의지":
        case "에르다의지":
            pret = 6;
            break;
        case "에르다 샤워":
        case "에르다샤워":
        case "샤워":
        case "광역기":
            pret = 7;
            break;
        case "쓸만한 미스틱 도어":
        case "쓸만한미스틱도어":
        case "쓸도어":
        case "도어":
            pret = 8;
            break;
        case "쓸만한 샤프 아이즈":
        case "쓸만한샤프아이즈":
        case "쓸만한 샤프아이즈":
        case "쓸샾":
        case "샤프":
        case "샤프 아이즈":
        case "샤프아이즈":
            pret = 9;
            break;
        case "쓸만한 하이퍼 바디":
        case "쓸만한하이퍼바디":
        case "쓸만한 뻥":
        case "쓸만한뻥":
        case "쓸뻥":
        case "뻥":
            pret = 10;
            break;
        case "쓸만한 컴뱃 오더스":
        case "쓸만한컴뱃오더스":
        case "쓸컴뱃":
        case "컴뱃":
        case "컴뱃 오더스":
        case "컴뱃오더스":
            pret = 11;
            break;
        case "쓸만한 어드밴스드 블레스":
        case "쓸만한어드밴스드블레스":
        case "쓸어블":
        case "어블":
        case "어드밴스드 블레스":
        case "어드밴스드블레스":
            pret = 12;
            break;
        case "쓸만한 윈드 부스터":
        case "쓸만한윈드부스터":
        case "쓸윈부":
        case "윈부":
        case "윈드 부스터":
        case "윈드부스터":
            pret = 13;
            break;
        case "쓸만한 홀리 심볼":
        case "쓸만한홀리심볼":
        case "쓸심":
        case "심":
        case "홀리 심볼":
        case "홀리심볼":
        case "심볼":
            pret = 14;
            break;
        case "스파이더 인 미러":
        case "스파이더인미러":
        case "스인미":
            pret = 15;
            break;
        case "크레스트 오브 더 솔라":
        case "크레스트오브더솔라":
        case "크오솔":
        case "세렌":
            pret = 16;
            break;
    }
    return pret;
};
skp.getskillnamePublic = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "용사류 스킬";
            break;
        case 1:
            rep = "의지류 스킬";
            break;
        case 2:
            rep = "영웅의 메아리류 스킬";
            break;
        case 3:
            rep = "로프 커넥트";
            break;
        case 4:
            rep = "블링크";
            break;
        case 5:
            rep = "에르다 노바";
            break;
        case 6:
            rep = "에르다의 의지";
            break;
        case 7:
            rep = "에르다 샤워";
            break;
        case 8:
            rep = "쓸만한 미스틱 도어";
            break;
        case 9:
            rep = "쓸만한 샤프 아이즈";
            break;
        case 10:
            rep = "쓸만한 하이퍼 바디";
            break;
        case 11:
            rep = "쓸만한 컴뱃 오더스";
            break;
        case 12:
            rep = "쓸만한 어드밴스드 블레스";
            break;
        case 13:
            rep = "쓸만한 윈드 부스터";
            break;
        case 14:
            rep = "쓸만한 홀리 심볼";
            break;
        case 15:
            rep = "스파이더 인 미러";
            break;
        case 16:
            rep = "크레스트 오브 더 솔라";
            break;
    }
    return rep;
};
skp.getskilldesc1Public = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "MP 70 소비, 900초 동안 AP를 직접 투자한 모든 능력치 15% 증가";
            break;
        case 1:
            rep = "상태 이상으로부터 벗어난다. 사용 후 3초 동안 상태 이상 면역.";
            break;
        case 2:
            rep = "MP 30 소비하여 40분간 공격력, 마력 4% 증가";
            break;
        case 3:
            rep = "하늘 높이 로프를 던져 빠르게 이동한다. / 쿨 3초";
            break;
        case 4:
            rep = " HP 3%, 랜덤위치 순간이동 / 공중 키다운시 최대5초동안 부유";
            break;
        case 5:
            rep = "HP 15%, 10명,330%,5번 공격하고 10초 동안 행동 불가 상태";
            break;
        case 6:
            rep = "상태 이상으로부터 벗어난다. 사용 후 3초 동안 상태 이상 면역";
            break;
        case 7:
            rep = "HP 3000 소비, 최대 15명의 적을 900%의 데미지로 6번 공격,";
            break;
        case 8:
            rep = "HP 5%, 마법의 돌 2개 소비, 90초 동안 포탈 지속";
            break;
        case 9:
            rep = "HP 5%, 270초 동안 크리티컬 확률 10%, 크리티컬 데미지 8% 증가";
            break;
        case 10:
            rep = "HP 5%, 270초 동안 최대 HP 40%, 최대 MP 40% 증가";
            break;
        case 11:
            rep = "HP 5%, 270초 동안 모든 스킬 레벨 1 증가";
            break;
        case 12:
            rep = "HP 5%, 270초동안 공20, 마20, 방425, HP475, MP475 증가";
            break;
        case 13:
            rep = "HP 5%, 270초 동안 공격 속도 증가";
            break;
        case 14:
            rep = "HP 3400, 270초 동안 획득 경험치 35%, 드롭률 24% 증가";
            break;
        case 15:
            rep = "HP 15%/ 15명,990%15번/ 50초 지속 385%,8번,10회/ 재돌입대기 3초";
            break;
        case 16:
            rep = "HP 15%/ 15명,1650%,12번/ 51초 지속 2.1초마다 2명,440%,6번";
            break;
    }
    return rep;
};
skp.getskilldesc2Public = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "자원이나 이름에서 직업별로 몇가지 차이 / 스킬간 중첩 비허용";
            break;
        case 1:
            rep = "MP 30 소비, 재사용 대기시간 360초";
            break;
        case 2:
            rep = "재사용 대기시간 : 2시간 / 재사용 초기화가능";
            break;
        case 3:
            rep = "[패시브 효과 : 올스탯 30 증가]";
            break;
        case 4:
            rep = "[패시브 효과 : 공격력, 마력 30 증가]";
            break;
        case 5:
            rep = "재사용 대기시간 100초";
            break;
        case 6:
            rep = "최대 HP의 5% 소비, 재사용 대기시간 330초";
            break;
        case 7:
            rep = "공격한 적당 재사용 대기시간 1초 감소 / 재사용 대기시간 45초";
            break;
        case 8:
            rep = "[패시브 효과 : 올스탯 6 증가] / 재사용 대기시간 130초";
            break;
        case 9:
            rep = "[패시브 효과 : 올스탯 6 증가] / 재사용 대기시간 180초";
            break;
        case 10:
            rep = "[패시브 효과 : 올스탯 6 증가] / 재사용 대기시간 180초";
            break;
        case 11:
            rep = "[패시브 효과 : 상태 이상 내성 6 증가]";
            break;
        case 12:
            rep = "재사용 대기시간 180초";
            break;
        case 13:
            rep = "[패시브 효과 : 올스탯 6 증가] / 재사용 대기시간 180초";
            break;
        case 14:
            rep = "재사용 대기시간 180초";
            break;
        case 15:
            rep = "재사용 대기시간 : 250초";
            break;
        case 16:
            rep = "재사용 대기시간 : 250초 / 1명을 공격할 경우 605%로 공격";
            break;
    }
    return rep;
};
skp.getskillimage1Public = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "https://i.imgur.com/yyznvm6.png";
            break;
        case 1:
            rep = "https://i.imgur.com/fGlleLQ.png";
            break;
        case 2:
            rep = "https://i.imgur.com/UZ0eXHA.png";
            break;
        case 3:
            rep = "https://i.imgur.com/XGCAanf.png";
            break;
        case 4:
            rep = "https://i.imgur.com/9ZT5hQE.png";
            break;
        case 5:
            rep = "https://i.imgur.com/lZ8tzSK.png";
            break;
        case 6:
            rep = "https://i.imgur.com/HIaZ1Y2.png";
            break;
        case 7:
            rep = "https://i.imgur.com/egMLkwu.png";
            break;
        case 8:
            rep = "https://i.imgur.com/s61ufUn.png";
            break;
        case 9:
            rep = "https://i.imgur.com/pbSFpfb.png";
            break;
        case 10:
            rep = "https://i.imgur.com/OleWL4L.png";
            break;
        case 11:
            rep = "https://i.imgur.com/ZdupD3I.png";
            break;
        case 12:
            rep = "https://i.imgur.com/cymB2Du.png";
            break;
        case 13:
            rep = "https://i.imgur.com/GFfN3Jg.png";
            break;
        case 14:
            rep = "https://i.imgur.com/iGTWaNo.png";
            break;
        case 15:
            rep = "https://i.imgur.com/Z4ePkVB.png";
            break;
        case 16:
            rep = "https://i.imgur.com/Qr3IhF1.png";
            break;
    }
    return rep;
};
skp.getskillimage2Public = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "https://i.imgur.com/hASl2jR.png";
            break;
        case 1:
            rep = "https://i.imgur.com/7E2wh6E.png";
            break;
        case 2:
            rep = "https://i.imgur.com/468cck8.png";
            break;
        case 3:
            rep = "https://i.imgur.com/YxWGFcJ.png";
            break;
        case 4:
            rep = "https://i.imgur.com/oBtK7SL.png";
            break;
        case 5:
            rep = "https://i.imgur.com/9XE4uso.png";
            break;
        case 6:
            rep = "https://i.imgur.com/hSYTGf6.png";
            break;
        case 7:
            rep = "https://i.imgur.com/6F2D8Cf.png";
            break;
        case 8:
            rep = "https://i.imgur.com/VsLq1hy.png";
            break;
        case 9:
            rep = "https://i.imgur.com/xkhLzwr.png";
            break;
        case 10:
            rep = "https://i.imgur.com/Ws9SsLD.png";
            break;
        case 11:
            rep = "https://i.imgur.com/FifBPE1.png";
            break;
        case 12:
            rep = "https://i.imgur.com/wQfmG1H.png";
            break;
        case 13:
            rep = "https://i.imgur.com/qXcYNkB.png";
            break;
        case 14:
            rep = "https://i.imgur.com/orVzSXP.png";
            break;
        case 15:
            rep = "https://i.imgur.com/l2TFFIi.png";
            break;
        case 16:
            rep = "https://i.imgur.com/bofZQlP.png";
            break;
    }
    return rep;
};

module.exports = skp;