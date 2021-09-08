const skpf = {};

skpf.getskillPathfinder = function (skillname){
    var pfret = -1;
    switch(skillname){
        case "얼티밋 블래스트":
        case "얼티밋블래스트":
        case "얼블":
        case "얼티밋":
            pfret = 0;
            break;
        case "레이븐 템페스트":
        case "레이븐템페스트":
        case "템페스트":
        case "레템":
            pfret = 1;
            break;
        case "옵시디언 배리어":
        case "옵시디언배리어":
        case "옵시디언":
        case "배리어":
        case "옵배":
            pfret = 2;
            break;
        case "옵시디언 배리어(디스차지)":
        case "옵시디언배리어(디스차지)":
        case "옵시디언배리어디스차지":
        case "옵시디언배리어디":
        case "배리어 디스차지":
        case "배리어디스차지":
        case "옵시디언 디스차지":
        case "옵시디언디스차지":
        case "옵배디":
            pfret = 3;
            break;
        case "옵시디언 배리어(블래스트)":
        case "옵시디언배리어(블래스트)":
        case "옵시디언배리어블래스트":
        case "옵시디언배리어블":
        case "배리어 블래스트":
        case "배리어블래스트":
        case "옵시디언 블래스트":
        case "옵시디언블래스트":
        case "옵배블":
            pfret = 4;
            break;
        case "옵시디언 배리어(트랜지션)":
        case "옵시디언배리어(트랜지션)":
        case "옵시디언배리어트랜지션":
        case "옵시디언배리어트":
        case "배리어 트랜지션":
        case "배리어트랜지션":
        case "옵시디언 트랜지션":
        case "옵시디언트랜지션":
        case "옵배트":
            pfret = 5;
            break;
        case "렐릭 언바운드":
        case "렐릭언바운드":
        case "언바운드":
        case "렐언":
            pfret = 6;
            break;
        case "렐릭 언바운드(디스차지)":
        case "렐릭언바운드(디스차지)":
        case "렐릭언바운드디스차지":
        case "언바운드 디스차지":
        case "언바운드디스차지":
        case "언바운드디":
        case "렐언디":
            pfret = 7;
            break;
        case "렐릭 언바운드(블래스트)":
        case "렐릭언바운드(블래스트)":
        case "렐릭언바운드블래스트":
        case "언바운드 블래스트":
        case "언바운드블래스트":
        case "언바운드블":
        case "렐언블":
            pfret = 8;
            break;
        case "렐릭 언바운드(트랜지션)":
        case "렐릭언바운드(트랜지션)":
        case "렐릭언바운드트랜지션":
        case "언바운드 트랜지션":
        case "언바운드트랜지션":
        case "언바운드트":
        case "렐언트":
            pfret = 9;
            break;
        /*case "":
            pfret = 10;
            break;
        case "":
            pfret = 11;
            break;
        case "":
            pfret = 12;
            break;
        case "":
            pfret = 13;
            break;
        case "":
            pfret = 14;
            break;
        case "":
            pfret = 15;
            break;
        case "":
            pfret = 16;
            break;
        case "":
            pfret = 17;
            break;
        case "":
            pfret = 18;
            break;
        case "":
            pfret = 19;
            break;*/
    }
    return pfret;
};
skpf.getskillnamePathfinder = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "얼티밋 블래스트";
            break;
        case 1:
            rep = "레이븐 템페스트";
            break;
        case 2:
            rep = "옵시디언 배리어";
            break;
        case 3:
            rep = "옵시디언 배리어(디스차지)";
            break;
        case 4:
            rep = "옵시디언 배리어(블래스트)";
            break;
        case 5:
            rep = "옵시디언 배리어(트랜지션)";
            break;
        case 6:
            rep = "렐릭 언바운드";
            break;
        case 7:
            rep = "렐릭 언바운드(디스차지)";
            break;
        case 8:
            rep = "렐릭 언바운드(블래스트)";
            break;
        case 9:
            rep = "렐릭 언바운드(트랜지션)";
            break;
        /*case 10:
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
            break;*/
    }
    return rep;
};
skpf.getskilldesc1Pathfinder = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "모든게이지소모/ 15명,1000%, 15번공격 6번/ 시전동작중 무적";
            break;
        case 1:
            rep = "25초간 12명,1000%,5번 공격/ 방향전환쿨 2초/ 쿨120초";
            break;
        case 2:
            rep = "16초지속/ 피격데미지 20%감소/ 일정주기 8명,760%,4번 공격";
            break;
        case 3:
            rep = "16초지속/ 피격데미지 40%감소/ 보호막 개인화/ 쿨200초";
            break;
        case 4:
            rep = "16초지속/ 피격데미지 40%감소/ 보호막크기 증가/ 쿨200초";
            break;
        case 5:
            rep = "16초지속/ 피격데미지 40%감소/ 2초마다 재설치가능/ 쿨200초";
            break;
        case 6:
            rep = "공격형 렐릭 설치, 문양 없다면 사용불가/ 공격적중시 반응";
            break;
        case 7:
            rep = "22초간 일정간격마다 1100%의 데미지로 공격하는 화살 연속 발사";
            break;
        case 8:
            rep = "10초간 일정간격마다 10명,1375%, 8번공격 4회, 최대4발";
            break;
        case 9:
            rep = "40초간 일정간격마다 6명,1540%, 5번공격 최대3개 설치";
            break;
        /*case 10:
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
            break;*/
    }
    return rep;
};
skpf.getskilldesc2Pathfinder = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "[에인션트 포스] 게이지 25%씩 증가시 최종뎀 25%씩 증가/ 쿨120초";
            break;
        case 1:
            rep = "[에인션트 포스] 적을 찾아 이동, 스킬키 눌러서 진행방향 바꿀수 있음";
            break;
        case 2:
            rep = "[인챈트 포스] 보호받는파티원 디버프적 공격시 크뎀상승/ 쿨200초";
            break;
        case 3:
            rep = "[인챈트 포스] 공격능력X/ 일반공격 무시불가";
            break;
        case 4:
            rep = "[인챈트 포스] 일정주기 10명,1040%,4번 공격/ 일반공격 무시";
            break;
        case 5:
            rep = "[인챈트 포스] 일정주기 10명,1040%,4번 공격/ 일반공격 무시";
            break;
        case 6:
            rep = "[인챈트 포스] 게이지 250소비/ 선호도 블래스트≥디스차지>트랜지션";
            break;
        case 7:
            rep = "[인챈트 포스] 방향전환 불가능/ 쿨120초";
            break;
        case 8:
            rep = "[인챈트 포스] 지속시간 가장짧음/ 쿨120초";
            break;
        case 9:
            rep = "[인챈트 포스] 지속시간 가장김/ 설치랜덤/ 쿨120초";
            break;
        /*case 10:
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
            break;*/
    }
    return rep;
};
skpf.getskillimage1Pathfinder = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "https://i.imgur.com/AK5eyLw.png";
            break;
        case 1:
            rep = "https://i.imgur.com/ARuAplY.png";
            break;
        case 2:
            rep = "";
            break;
        case 3:
            rep = "https://i.imgur.com/X2pvXac.png";
            break;
        case 4:
            rep = "https://i.imgur.com/pILn3lg.png";
            break;
        case 5:
            rep = "https://i.imgur.com/fpKfsv4.png";
            break;
        case 6:
            rep = "https://i.imgur.com/uriXTro.png";
            break;
        case 7:
            rep = "https://i.imgur.com/r5HESwr.png";
            break;
        case 8:
            rep = "https://i.imgur.com/8uhnN7e.png";
            break;
        case 9:
            rep = "https://i.imgur.com/4xYF6KX.png";
            break;
        /*case 10:
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
            break;*/
    }
    return rep;
};
skpf.getskillimage2Pathfinder = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "https://i.imgur.com/9yyK58U.png";
            break;
        case 1:
            rep = "https://i.imgur.com/plm5DBp.png";
            break;
        case 2:
            rep = "https://i.imgur.com/myG7VPt.png";
            break;
        case 3:
            rep = "https://i.imgur.com/Mu602TF.png";
            break;
        case 4:
            rep = "https://i.imgur.com/OzRwtlW.png";
            break;
        case 5:
            rep = "https://i.imgur.com/KPXIXLB.png";
            break;
        case 6:
            rep = "https://i.imgur.com/l02BMPn.png";
            break;
        case 7:
            rep = "https://i.imgur.com/MSSIMgN.png";
            break;
        case 8:
            rep = "https://i.imgur.com/pvaMm2L.png";
            break;
        case 9:
            rep = "https://i.imgur.com/QtfcD9f.png";
            break;
        /*case 10:
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
            break;*/
    }
    return rep;
};

module.exports = skpf;