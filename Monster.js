const mon = {};

mon.getMonster = function (msg){
    var rep = "";
    var monarea = msg.split(" ")[1];
    if(monarea == undefined){
        rep = "지역이 입력되지 않았습니다.\n\n!몬스터/!몹/!체력 (지역이름) (몬스터번호) [리부트여부] : 해당 지역의 해당 몬스터의 체력과 경험치 정보를 보여줍니다. 아케인리버와 그란디스 260레벨이상 지역에 한정하며, 몬스터는 번호로 입력할 수 있습니다. 리부트월드는 몬스터번호 뒤에 한칸 띄우고 아무글자나 입력하면 리부트월드의 해당 몬스터 체력과 경험치 배율을 곱한 값을 보여줍니다.\n\n몬스터 이름을 생략하면 해당 지역의 몬스터 목록을 보여줍니다.\n몬스터 이름에 (플)이 붙은 몬스터는 해당 지역의 플라잉 몬스터입니다. 피격시 물약 봉인과 HP비례 10%의 데미지를 입습니다.";
    }
    else{
        var monareanum = this.getArea(monarea);
        var monnamechk = msg.split(" ")[2];
        var isReboot = msg.split(" ")[3];
        if(monareanum == -1){
            rep = "잘못된 지역을 입력하셨습니다. 지역은 아케인리버와 그란디스 260레벨이상 지역에 한정하며, 1부터 13까지의 정수로도 입력하실 수 있습니다.";
        }
        else if(monnamechk == undefined){
            if(monareanum < 15 && monareanum > -1){
                rep = this.getMonlist(monareanum);
            }
            else{
                rep = "개발중";
            }
        }
        else{
            rep = "☆";
            if(isNaN(monnamechk) || monnamechk % 1 != 0){
                rep = "몬스터번호는 정수로 입력하셔야 합니다.";
            }
            else{
                const JariMm = require('Jari');
                var monnum = parseInt(monnamechk);
                if(monareanum == 0){    //여로
                    if(monnum < 1 || monnum > 14){
                        rep = "범위를 초과하였습니다. 다시 확인하여주세요.";
                    }
                    else{
                        rep += getMonname0[monnum] + "★";
                        rep += getMonimage0[monnum] + "★";
                        if(isReboot == undefined){ rep += "HP : " + JariMm.Jari(Math.round(getMonHP0[monnum])) + "★"; rep += "경험치 : " + JariMm.Jari(getMonEXP0[monnum]) + "★"; }
                        else{ rep += "HP : " + JariMm.Jari(Math.round(getMonHP0[monnum] * 2.1)) + " (리)★"; rep += "경험치 : " + JariMm.Jari(getMonEXP0[monnum] * 2.3) + " (리)★"; }
                        rep += this.getAreaIcon(monareanum);
                    }
                }
                else if(monareanum == 1){    //츄츄
                    if(monnum < 1 || monnum > 17){
                        rep = "범위를 초과하였습니다. 다시 확인하여주세요.";
                    }
                    else{
                        rep += getMonname1[monnum] + "★";
                        rep += getMonimage1[monnum] + "★";
                        if(isReboot == undefined){ rep += "HP : " + JariMm.Jari(Math.round(getMonHP1[monnum])) + "★"; rep += "경험치 : " + JariMm.Jari(getMonEXP1[monnum]) + "★"; }
                        else{ rep += "HP : " + JariMm.Jari(Math.round(getMonHP1[monnum] * 1.8)) + " (리)★"; rep += "경험치 : " + JariMm.Jari(getMonEXP1[monnum] * 2.3) + " (리)★"; }
                        rep += this.getAreaIcon(monareanum);
                    }
                }
                else if(monareanum == 2){    //레헬른
                    if(monnum < 1 || monnum > 14){
                        rep = "범위를 초과하였습니다. 다시 확인하여주세요.";
                    }
                    else{
                        rep += getMonname2[monnum] + "★";
                        rep += getMonimage2[monnum] + "★";
                        if(isReboot == undefined){ rep += "HP : " + JariMm.Jari(Math.round(getMonHP2[monnum])) + "★"; rep += "경험치 : " + JariMm.Jari(getMonEXP2[monnum]) + "★"; }
                        else{ rep += "HP : " + JariMm.Jari(Math.round(getMonHP2[monnum] * 1.5)) + " (리)★"; rep += "경험치 : " + JariMm.Jari(getMonEXP2[monnum] * 2.3) + " (리)★"; }
                        rep += this.getAreaIcon(monareanum);
                    }
                }
                else if(monareanum == 3){    //아르카나
                    if(monnum < 1 || monnum > 13){
                        rep = "범위를 초과하였습니다. 다시 확인하여주세요.";
                    }
                    else{
                        rep += getMonname3[monnum] + "★";
                        rep += getMonimage3[monnum] + "★";
                        if(isReboot == undefined){ rep += "HP : " + JariMm.Jari(Math.round(getMonHP3[monnum])) + "★"; rep += "경험치 : " + JariMm.Jari(getMonEXP3[monnum]) + "★"; }
                        else{ rep += "HP : " + JariMm.Jari(Math.round(getMonHP3[monnum] * 1.4)) + " (리)★"; rep += "경험치 : " + JariMm.Jari(getMonEXP3[monnum] * 2.3) + " (리)★"; }
                        rep += this.getAreaIcon(monareanum);
                    }
                }
                else if(monareanum == 4){    //모라스
                    if(monnum < 1 || monnum > 17){
                        rep = "범위를 초과하였습니다. 다시 확인하여주세요.";
                    }
                    else{
                        rep += getMonname4[monnum] + "★";
                        rep += getMonimage4[monnum] + "★";
                        if(isReboot == undefined){ rep += "HP : " + JariMm.Jari(Math.round(getMonHP4[monnum])) + "★"; rep += "경험치 : " + JariMm.Jari(getMonEXP4[monnum]) + "★"; }
                        else{ rep += "HP : " + JariMm.Jari(Math.round(getMonHP4[monnum] * 1.4)) + " (리)★"; rep += "경험치 : " + JariMm.Jari(getMonEXP4[monnum] * 2.3) + " (리)★"; }
                        rep += this.getAreaIcon(monareanum);
                    }
                }
                else if(monareanum == 5){    //에스페라
                    if(monnum < 1 || monnum > 12){
                        rep = "범위를 초과하였습니다. 다시 확인하여주세요.";
                    }
                    else{
                        rep += getMonname5[monnum] + "★";
                        rep += getMonimage5[monnum] + "★";
                        if(isReboot == undefined){ rep += "HP : " + JariMm.Jari(Math.round(getMonHP5[monnum])) + "★"; rep += "경험치 : " + JariMm.Jari(getMonEXP5[monnum]) + "★"; }
                        else{ rep += "HP : " + JariMm.Jari(Math.round(getMonHP5[monnum] * 1.4)) + " (리)★"; rep += "경험치 : " + JariMm.Jari(getMonEXP5[monnum] * 2.3) + " (리)★"; }
                        rep += this.getAreaIcon(monareanum);
                    }
                }
                else if(monareanum == 6){    //세르니움
                    if(monnum < 1 || monnum > 16){
                        rep = "범위를 초과하였습니다. 다시 확인하여주세요.";
                    }
                    else{
                        rep += getMonname6[monnum] + "★";
                        rep += getMonimage6[monnum] + "★";
                        if(isReboot == undefined){ rep += "HP : " + JariMm.Jari(Math.round(getMonHP6[monnum])) + "★"; rep += "경험치 : " + JariMm.Jari(getMonEXP6[monnum]) + "★"; }
                        else{ rep += "HP : " + JariMm.Jari(Math.round(getMonHP6[monnum] * 1.4)) + " (리)★"; rep += "경험치 : " + JariMm.Jari(getMonEXP6[monnum] * 2.3) + " (리)★"; }
                        rep += this.getAreaIcon(monareanum);
                    }
                }
                else if(monareanum == 7){    //아르크스
                    if(monnum < 1 || monnum > 7){
                        rep = "범위를 초과하였습니다. 다시 확인하여주세요.";
                    }
                    else{
                        rep += getMonname7[monnum] + "★";
                        rep += getMonimage7[monnum] + "★";
                        if(isReboot == undefined){ rep += "HP : " + JariMm.Jari(Math.round(getMonHP7[monnum])) + "★"; rep += "경험치 : " + JariMm.Jari(getMonEXP7[monnum]) + "★"; }
                        else{ rep += "HP : " + JariMm.Jari(Math.round(getMonHP7[monnum] * 1.4)) + " (리)★"; rep += "경험치 : " + JariMm.Jari(getMonEXP7[monnum] * 2.3) + " (리)★"; }
                        rep += this.getAreaIcon(monareanum);
                    }
                }
                else if(monareanum == 8){    //리버스시티
                    if(monnum < 1 || monnum > 15){
                        rep = "범위를 초과하였습니다. 다시 확인하여주세요.";
                    }
                    else{
                        rep += getMonname8[monnum] + "★";
                        rep += getMonimage8[monnum] + "★";
                        if(isReboot == undefined){ rep += "HP : " + JariMm.Jari(Math.round(getMonHP8[monnum])) + "★"; rep += "경험치 : " + JariMm.Jari(getMonEXP8[monnum]) + "★"; }
                        else{ if(getMonname8[monnum][8] == "강"){ rep += "HP : " + JariMm.Jari(Math.round(getMonHP8[monnum] * 1.8)) + " (리)★"; }else{ rep += "HP : " + JariMm.Jari(Math.round(getMonHP8[monnum] * 2.1)) + " (리)★"; } rep += "경험치 : " + JariMm.Jari(getMonEXP8[monnum] * 2.3) + " (리)★"; }
                        rep += this.getAreaIcon(monareanum);
                    }
                }
                else if(monareanum == 9){    //얌얌아일랜드
                    if(monnum < 1 || monnum > 15){
                        rep = "범위를 초과하였습니다. 다시 확인하여주세요.";
                    }
                    else{
                        rep += getMonname9[monnum] + "★";
                        rep += getMonimage9[monnum] + "★";
                        if(isReboot == undefined){ rep += "HP : " + JariMm.Jari(Math.round(getMonHP9[monnum])) + "★"; rep += "경험치 : " + JariMm.Jari(getMonEXP9[monnum]) + "★"; }
                        else{ if(getMonname9[monnum][8] == "강"){ rep += "HP : " + JariMm.Jari(Math.round(getMonHP9[monnum] * 1.5)) + " (리)★"; }else{ rep += "HP : " + JariMm.Jari(Math.round(getMonHP9[monnum] * 1.8)) + " (리)★"; } rep += "경험치 : " + JariMm.Jari(getMonEXP9[monnum] * 2.3) + " (리)★"; }
                        rep += this.getAreaIcon(monareanum);
                    }
                }
                else if(monareanum == 10){    //셀라스
                    if(monnum < 1 || monnum > 10){
                        rep = "범위를 초과하였습니다. 다시 확인하여주세요.";
                    }
                    else{
                        rep += getMonname10[monnum] + "★";
                        rep += getMonimage10[monnum] + "★";
                        if(isReboot == undefined){ rep += "HP : " + JariMm.Jari(Math.round(getMonHP10[monnum])) + "★"; rep += "경험치 : " + JariMm.Jari(getMonEXP10[monnum]) + "★"; }
                        else{ rep += "HP : " + JariMm.Jari(Math.round(getMonHP10[monnum] * 1.4)) + " (리)★"; rep += "경험치 : " + JariMm.Jari(getMonEXP10[monnum] * 2.3) + " (리)★"; }
                        rep += this.getAreaIcon(monareanum);
                    }
                }
                else if(monareanum == 11){    //문브릿지
                    if(monnum < 1 || monnum > 7){
                        rep = "범위를 초과하였습니다. 다시 확인하여주세요.";
                    }
                    else{
                        rep += getMonname11[monnum] + "★";
                        rep += getMonimage11[monnum] + "★";
                        if(isReboot == undefined){ rep += "HP : " + JariMm.Jari(Math.round(getMonHP11[monnum])) + "★"; rep += "경험치 : " + JariMm.Jari(getMonEXP11[monnum]) + "★"; }
                        else{ rep += "HP : " + JariMm.Jari(Math.round(getMonHP11[monnum] * 1.4)) + " (리)★"; rep += "경험치 : " + JariMm.Jari(getMonEXP11[monnum] * 2.3) + " (리)★"; }
                        rep += this.getAreaIcon(monareanum);
                    }
                }
                else if(monareanum == 12){    //미궁
                    if(monnum < 1 || monnum > 16){
                        rep = "범위를 초과하였습니다. 다시 확인하여주세요.";
                    }
                    else{
                        rep += getMonname12[monnum] + "★";
                        rep += getMonimage12[monnum] + "★";
                        if(isReboot == undefined){ rep += "HP : " + JariMm.Jari(Math.round(getMonHP12[monnum])) + "★"; rep += "경험치 : " + JariMm.Jari(getMonEXP12[monnum]) + "★"; }
                        else{ rep += "HP : " + JariMm.Jari(Math.round(getMonHP12[monnum] * 1.4)) + " (리)★"; rep += "경험치 : " + JariMm.Jari(getMonEXP12[monnum] * 2.3) + " (리)★"; }
                        rep += this.getAreaIcon(monareanum);
                    }
                }
                else if(monareanum == 13){    //리멘
                    if(monnum < 1 || monnum > 10){
                        rep = "범위를 초과하였습니다. 다시 확인하여주세요.";
                    }
                    else{
                        rep += getMonname13[monnum] + "★";
                        rep += getMonimage13[monnum] + "★";
                        if(isReboot == undefined){ rep += "HP : " + JariMm.Jari(Math.round(getMonHP13[monnum])) + "★"; rep += "경험치 : " + JariMm.Jari(getMonEXP13[monnum]) + "★"; }
                        else{ rep += "HP : " + JariMm.Jari(Math.round(getMonHP13[monnum] * 1.4)) + " (리)★"; rep += "경험치 : " + JariMm.Jari(getMonEXP13[monnum] * 2.3) + " (리)★"; }
                        rep += this.getAreaIcon(monareanum);
                    }
                }
                else if(monareanum == 14){    //오디움
                    if(monnum < 1 || monnum > 12){
                        rep = "범위를 초과하였습니다. 다시 확인하여주세요.";
                    }
                    else{
                        rep += getMonname14[monnum] + "★";
                        rep += getMonimage14[monnum] + "★";
                        if(isReboot == undefined){ rep += "HP : " + JariMm.Jari(Math.round(getMonHP14[monnum])) + "★"; rep += "경험치 : " + JariMm.Jari(getMonEXP14[monnum]) + "★"; }
                        else{ rep += "HP : " + JariMm.Jari(Math.round(getMonHP14[monnum] * 1.4)) + " (리)★"; rep += "경험치 : " + JariMm.Jari(getMonEXP14[monnum] * 2.3) + " (리)★"; }
                        rep += this.getAreaIcon(monareanum);
                    }
                }
                else{
                    rep = "개발중";
                }
            }
        }
    }

    return rep;
};

mon.getArea = function(area){
    var ret = -1;
    switch(area){
        case "소멸의여로":
        case "소멸":
        case "여로":
        case "에르다스펙트럼":
        case "스펙트럼":
        case "1":
            ret = 0;
            break;
        case "츄츄아일랜드":
        case "츄츄":
        case "배고픈무토":
        case "무토":
        case "2":
            ret = 1;
            break;
        case "꿈의도시레헬른":
        case "레헬른":
        case "레헬":
        case "드림브레이커":
        case "드브":
        case "3":
            ret = 2;
            break;
        case "신비의숲아르카나":
        case "아르카나":
        case "알카":
        case "스피릿세이비어":
        case "스세":
        case "4":
            ret = 3;
            break;
        case "기억의늪모라스":
        case "모라스":
        case "엔하임디펜스":
        case "디펜스":
        case "5":
            ret = 4;
            break;
        case "태초의바다에스페라":
        case "에스페라":
        case "에페":
        case "프로텍트에스페라":
        case "프로텍트":
        case "6":
            ret = 5;
            break;
        case "신의도시세르니움":
        case "세르니움":
        case "세르":
        case "전르니움":
        case "전르":
        case "후르니움":
        case "후르":
        case "세전":
        case "세후":
        case "7":
            ret = 6;
            break;
        case "호텔아르크스":
        case "아르크스":
        case "호텔":
        case "8":
            ret = 7;
            break;
        case "리버스시티":
        case "리버스":
        case "9":
            ret = 8;
            break;
        case "얌얌아일랜드":
        case "얌얌":
        case "10":
            ret = 9;
            break;
        case "셀라스,별이잠긴곳":
        case "셀라스별이잠긴곳":
        case "셀라스":
        case "11":
            ret = 10;
            break;
        case "문브릿지":
        case "문브":
        case "12":
            ret = 11;
            break;
        case "고통의미궁":
        case "미궁":
        case "13":
            ret = 12;
            break;
        case "리멘":
        case "14":
            ret = 13;
            break;
        case "눈을뜬실험실오디움":
        case "오디움":
        case "15":
            ret = 14;
            break;
        default:
            ret = -1;
            break;
    }
    return ret;
};

mon.getAreaIcon = function(areanum){
    rep = "";
    
    switch(areanum){
        case 0:
            rep = "https://i.imgur.com/HQg3VKs.png";
            break;  
        case 1:
            rep = "https://i.imgur.com/P11N36f.png";
            break;
        case 2:
            rep = "https://i.imgur.com/wzYswa8.png";
            break;
        case 3:
            rep = "https://i.imgur.com/sb8sYSn.png";
            break;
        case 4:
            rep = "https://i.imgur.com/E3oL6Yc.png";
            break;
        case 5:
            rep = "https://i.imgur.com/iWNW0Qc.png";
            break;
        case 6:
            rep = "https://i.imgur.com/UMxaotp.png";
            break;
        case 7:
            rep = "https://i.imgur.com/ZrVtVhN.png";
            break;
        case 8:
            rep = "https://i.imgur.com/9e1YyYF.png";
            break;
        case 9:
            rep = "https://i.imgur.com/RJisgit.png";
            break;
        case 10:
            rep = "https://i.imgur.com/5EDc01O.png";
            break;
        case 11:
            rep = "https://i.imgur.com/rnWnkGO.png";
            break;
        case 12:
            rep = "https://i.imgur.com/I9jX3nE.png";
            break;
        case 13:
            rep = "https://i.imgur.com/zubYIYk.png";
            break;
        case 14:
            retp = "";
            break;     
    }    
    return rep;
};

mon.getMonlist = function(areanum){
    rep = "";
    switch(areanum){
        case 0:
            rep = "소멸의 여로\n\n1. 에르다스의 등불(플라잉)\n2. 기쁨의 에르다스\n3. 분노의 에르다스\n4. 슬픔의 에르다스\n5. 즐거움의 에르다스\n\n6. 암석의 에르다스\n7. 화염의 에르다스\n8. 강인한 영혼의 에르다스\n\n9. 안식의 에르다스\n10. 에르다스의 등불\n11. 아르마의 부하\n\n12. 즐거움의 에르다스(숨)\n13. 강인한 영혼의 에르다스(숨)\n14. 아르마의 부하(숨)";
            break;
        case 1:
            rep = "츄츄 아일랜드\n\n1. 버샤크(플라잉)\n2. 파인디어\n3. 큰뿔 파인디어\n4. 유나나\n5. 램나나\n6. 플리온\n7. 성난 플리온\n8. 설익은 울프룻\n9. 잘익은 울프룻\n\n10. 그린 캣피쉬\n11. 블루 캣피쉬\n12. 라이터틀\n13. 대장 라이터틀\n\n14. 크릴라\n15. 족장 크릴라\n16. 버샤크\n17. 족장 버샤크";
            break;
        case 2:
            rep = "꿈의 도시 레헬른\n\n1. 붉은 눈의 가고일(플라잉)\n2. 종이봉투 뒷골목주민\n3. 나무판자 뒷골목주민\n\n4. 갈리나\n5. 갈루스\n6. 성난 우승접시\n7. 비뚤어진 우승접시\n\n8. 성난 무도회주민\n9. 광기의 무도회주민\n10. 약화된 클리너\n11. 춤추는 빨간구두\n\n12. 클리너\n13. 푸른 눈의 가고일\n14. 붉은 눈의 가고일";
            break;
        case 3:
            rep = "신비의 숲 아르카나\n\n1. 정령의 잔해(플라잉)\n2. 물의 정령\n3. 햇살의 정령\n4. 흙의 정령\n\n5. 서리구름의 정령\n6. 번개구름의 정령\n7. 맹독의 정령\n8. 폭발의 정령\n\n9. 혼돈의 정령\n10. 절망의 정령\n11. 비탄의 정령\n12. 부조화의 정령\n\n13. 속박된 돌의 정령";
            break;
        case 4:
            rep = "기억의 늪 모라스\n\n1. 기억속의 제네로이드A형\n2. 기억속의 제네로이드B형\n3. 기억속의 제네로이드 C형(플라잉)\n\n4. 이름 모를 비둘기(플라잉)\n5. 이름 모를 고양이\n6. 힘센 형님\n7. 강한 형님\n\n8. 부유하는 철퇴(플라잉)\n9. 푸른 그림자\n10. 붉은 그림자\n11. 실험의 부산물 A\n12. 실험의 부산물B\n\n13. 의식에 휘말린 잔해(플라잉)\n14. 의식에 휘말린 근위병\n15. 의식에 휘말린 망치병\n16. 의식에 휘말린 마법사\n17. 의식에 휘말린 궁병";
            break;
        case 5:
            rep = "태초의 바다 에스페라\n\n1. 태초를 지키는 무언가(플라잉)\n2. 신전을 지키는 무언가(플라잉)\n\n3. 아투인\n4. 아투스\n5. 벨라리온\n6. 벨라리스\n\n7. 아라냐\n8. 아라네아\n9. 빛의 주시자\n10. 어둠의 주시자\n\n11. 빛의 집행자\n12. 어둠의 집행자";
            break;
        case 6:
            rep = "신의 도시 세르니움\n\n1. 우두머리 괴물 갈매기(플라잉)\n2. 흑태양 보병\n3. 흑태양 궁병\n4. 괴물 갈매기\n5. 화염 정령\n6. 유령 들린 서적(플라잉)\n7. 떠도는 학자 유령\n8. 호기심 많은 학자 유령\n\n불타는 세르니움\n\n9. 분노한 화염 정령(플라잉)\n10. 레프 보병\n11. 레프 법사\n12. 레프 암살자\n13. 레프 기갑병\n14. 불타는 서적(플라잉)\n15. 흑태양 폭탄병\n16. 흑태양 법사";
            break;
        case 7:
            rep = "호텔 아르크스\n\n1. 스톤키위(플라잉)\n2. 모래칼날 약탈꾼\n3. 무쇠탄환 학살꾼\n\n4. 탐색하는 폭실리언\n5. 고물수집가 폭실리언\n\n6. 엄격한 역무원\n7. 주인잃은 왓치독";
            break;
        case 8:
            rep = "리버스 시티\n\n1. 수색형 T드론 A2형(플라잉)\n2. 트라\n3. 몬토\n4. 수색형 T드론 A형\n5. 수색형 T드론 B형\n\n6. 전투형 T드론 A형\n7. 전투형 T드론 B형\n8. 섬멸형 T드론 A형\n9. 섬멸형 T드론 B형\n\n10. 강력한 수색형 T드론 A형\n11. 강력한 수색형 T드론 B형\n12. 강력한 전투형 T드론 A형\n13. 강력한 전투형 T드론 B형\n14. 강력한 섬멸형 T드론 A형\n15. 강력한 섬멸형 T드론 B형";
            break;
        case 9:
            rep = "얌얌 아일랜드\n\n1. 주황 피아비(플라잉)\n2. 노란 피아비(플라잉)\n3. 보라 피아비(플라잉)\n\n4. 몽키록\n5. 버쉬룸\n\n6. 라이톤\n7. 스톤피\n8. 쿰파이더\n9. 다람뇽\n\n10. 강력한 몽키록\n11. 강력한 버쉬룸\n12. 강력한 라이톤\n13. 강력한 스톤피\n14. 강력한 쿰파이더\n15. 강력한 다람뇽";
            break;
        case 10:
            rep = "셀라스, 별이 잠긴 곳\n\n1. 평화로운 이마고(플라잉)\n2. 추락하는 이마고(플라잉)\n3. 잠겨가는 이마고(플라잉)\n\n4. 베리타테\n5. 뽈라르\n6. 바다렐이\n\n7. 히아데스\n8. 데네볼라\n\n9. 릴리 보레아\n10. 안젤루스";
            break;
        case 11:
            rep = "문브릿지\n\n1. 방황하는 그레이더스트(플라잉)\n2. 혼돈의 피조물\n3. 파괴의 피조물\n\n4. 엄습하는 공포\n5. 주시하는 공포\n\n6. 공허의 하수인\n7. 황혼의 하수인";
            break;
        case 12:
            rep = "고통의 미궁\n\n1. 날아드는 공포(플라잉)\n2. 날아드는 절망(플라잉)\n3. 날아드는 고통(플라잉)\n\n4. 뒤엉킨 파편\n5. 복종하는 파편\n6. 어둠의 실패작\n7. 어둠의 피조물\n\n8. 절망의 날개(플라잉)\n9. 절망의 칼날(플라잉)\n10. 침묵의 기사\n11. 침묵의 정찰자\n12. 침묵의 방랑자\n\n13. 침묵의 감시자\n14. 침묵의 암살자\n15. 절망에 빠진 자\n16. 절망에 매인 자";
            break;
        case 13:
            rep = "리멘\n\n1. 터비온(플라잉)\n2. 디스터비온(플라잉)\n\n3. 안세스티온\n4. 트랜센디온\n5. 어센시온\n\n6. 포어베리온\n7. 엠브리온\n\n8. 강력한 어센시온\n9. 강력한 포어베리온\n10. 강력한 엠브리온";
            break;
        case 14:
            rep = "눈을 뜬 실험실 오디움\n\n1. 오디움의 척후병(플라잉)\n2. 망가진 오디움의 척후병(플라잉)\n\n3. 강화형 파수꾼 산호\n4. 강화형 파수꾼 감람\n5. 강화형 파수꾼 금강\n\n6. 앵글러 로봇 A형\n7. 앵글러 로봇 B형\n8. 앵글러 로봇 C형\n\n9. 경비병 강옥\n10. 경비병 마노\n\n11. 무너지는 실험체\n12. 실패한 피험체";
            break;
    }
    return rep;
};

var getMonname = [    //
    "", //0
    "Lv. 2",   //1
    "Lv. 2",   //2
    "Lv. 2",   //3
    "Lv. 2",   //4
    "Lv. 2",   //5
    "Lv. 2",   //6
    "Lv. 2",   //7
    "Lv. 2",   //8
    "Lv. 2",   //9
    "Lv. 2",   //10
    "Lv. 2",   //11
    "Lv. 2",   //12
    "Lv. 2",   //13
    "Lv. 2",   //14
    "Lv. 2",   //15
    "Lv. 2",   //16
    "Lv. 2",   //17
    "Lv. 2",   //18
];
var getMonname0 = [    //여로
    "", //0
    "Lv. 208 에르다스의 등불(플)", //1
    "Lv. 200 기쁨의 에르다스", //2
    "Lv. 201 분노의 에르다스", //3
    "Lv. 202 슬픔의 에르다스", //4
    "Lv. 203 즐거움의 에르다스", //5
    "Lv. 204 암석의 에르다스", //6
    "Lv. 205 화염의 에르다스", //7
    "Lv. 206 강인한 영혼의 에르다스", //8
    "Lv. 207 안식의 에르다스 ", //9
    "Lv. 208 에르다스의 등불", //10
    "Lv. 209 아르마의 부하", //11
    "Lv. 209 즐거움의 에르다스(숨)", //12
    "Lv. 209 강인한 영혼의 에르다스(숨)", //13
    "Lv. 209 아르마의 부하(숨)", //14
];
var getMonname1 = [    //츄츄
    "", //0
    "Lv. 218 버샤크(플)",   //1
    "Lv. 210 파인디어",   //2
    "Lv. 211 큰뿔 파인디어",   //3
    "Lv. 210 유나나",   //4
    "Lv. 211 램나나",   //5
    "Lv. 212 플리온",   //6
    "Lv. 213 성난 플리온",   //7
    "Lv. 212 설익은 울프룻",   //8
    "Lv. 213 잘익은 울프룻",   //9
    "Lv. 214 그린 캣피쉬",   //10
    "Lv. 216 블루 캣피쉬",   //11
    "Lv. 215 라이터틀",   //12
    "Lv. 216 대장 라이터틀",   //13
    "Lv. 217 크릴라",   //14
    "Lv. 219 족장 크릴라",   //15
    "Lv. 218 버샤크",   //16
    "Lv. 219 족장 버샤크",   //17
];
var getMonname2 = [    //레헬른
    "", //0
    "Lv. 228 붉은 눈의 가고일(플)",   //1
    "Lv. 220 종이봉투 뒷골목주민",   //2
    "Lv. 221 나무판자 뒷골목주민",   //3
    "Lv. 221 갈리나",   //4
    "Lv. 222 갈루스",   //5
    "Lv. 222 성난 우승접시",   //6
    "Lv. 223 비뚤어진 우승접시",   //7
    "Lv. 223 성난 무도회주민",   //8
    "Lv. 224 광기의 무도회주민",   //9
    "Lv. 224 약화된 클리너",   //10
    "Lv. 225 춤추는 빨간구두",   //11
    "Lv. 226 클리너",   //12
    "Lv. 227 푸른 눈의 가고일",   //13
    "Lv. 228 붉은 눈의 가고일",   //14
];
var getMonname3 = [    //아르카나
    "", //0
    "Lv. 230 정령의 잔해(플)",   //1
    "Lv. 230 물의 정령",   //2
    "Lv. 231 햇살의 정령",   //3
    "Lv. 232 흙의 정령",   //4
    "Lv. 233 서리구름의 정령",   //5
    "Lv. 234 번개구름의 정령",   //6
    "Lv. 235 맹독의 정령",   //7
    "Lv. 236 폭발의 정령",   //8
    "Lv. 237 혼돈의 정령",   //9
    "Lv. 238 절망의 정령",   //10
    "Lv. 239 비탄의 정령",   //11
    "Lv. 240 부조화의 정령",   //12
    "Lv. 225 속박된 돌의 정령",   //13
];
var getMonname4 = [    //모라스
    "", //0
    "Lv. 236 기억속의 제네로이드A형",   //1
    "Lv. 236 기억속의 제네로이드B형",   //2
    "Lv. 236 기억속의 제네로이드 C형(플)",   //3
    "Lv. 236 이름 모를 비둘기(플)",   //4
    "Lv. 237 이름 모를 고양이",   //5
    "Lv. 238 힘센 형님",   //6
    "Lv. 238 강한 형님",   //7
    "Lv. 236 부유하는 철퇴(플)",   //8
    "Lv. 239 푸른 그림자",   //9
    "Lv. 240 붉은 그림자",   //10
    "Lv. 241 실험의 부산물A",   //11
    "Lv. 241 실험의 부산물B",   //12
    "Lv. 236 의식에 휘말린 잔해(플)",   //13
    "Lv. 242 의식에 휘말린 근위병",   //14
    "Lv. 243 의식에 휘말린 망치병",   //15
    "Lv. 244 의식에 휘말린 마법사",   //16
    "Lv. 245 의식에 휘말린 궁병",   //17
];
var getMonname5 = [    //에스페라
    "", //0
    "Lv. 240 태초를 지키는 무언가",   //1
    "Lv. 240 신전을 지키는 무언가",   //2
    "Lv. 240 아투인",   //3
    "Lv. 241 아투스",   //4
    "Lv. 242 벨라리온",   //5
    "Lv. 243 벨라리스",   //6
    "Lv. 244 아라냐",   //7
    "Lv. 245 아라네아",   //8
    "Lv. 246 빛의 주시자",   //9
    "Lv. 247 어둠의 주시자",   //10
    "Lv. 248 빛의 집행자",   //11
    "Lv. 249 어둠의 집행자",   //12
];
var getMonname6 = [    //세르니움
    "", //0
    "Lv. 260 우두머리 괴물 갈매기(플)", //1
    "Lv. 260 흑태양 보병", //2
    "Lv. 260 흑태양 궁병", //3
    "Lv. 261 괴물 갈매기", //4
    "Lv. 262 화염 정령", //5
    "Lv. 260 유령 들린 서적(플)", //6
    "Lv. 263 떠도는 학자 유령", //7
    "Lv. 264 호기심 많은 학자 유령", //8
    "Lv. 265 분노한 화염 정령(플)", //9
    "Lv. 265 레프 보병", //10
    "Lv. 265 레프 법사", //11
    "Lv. 266 레프 암살자", //12
    "Lv. 267 레프 기갑병", //13
    "Lv. 265 불타는 서적(플)", //14
    "Lv. 268 흑태양 폭탄병", //15
    "Lv. 269 흑태양 법사", //16
];
var getMonname7 = [    //아르크스
    "", //0
    "Lv. 270 스톤키위",   //1
    "Lv. 270 모래칼날 약탈꾼",   //2
    "Lv. 270 무쇠탄환 학살꾼",   //3
    "Lv. 271 탐색하는 폭실리언",   //4
    "Lv. 272 고물수집가 폭실리언",   //5
    "Lv. 273 엄격한 역무원",   //6
    "Lv. 274 주인잃은 왓치독",   //7
];
var getMonname8 = [    //리버스시티
    "", //0
    "Lv. 208 수색형 T드론 A2형(플)",   //1
    "Lv. 205 트라",   //2
    "Lv. 205 몬토",   //3
    "Lv. 206 수색형 T드론 A형",   //4
    "Lv. 206 수색형 T드론 B형",   //5
    "Lv. 207 전투형 T드론 A형",   //6
    "Lv. 208 전투형 T드론 B형",   //7
    "Lv. 209 섬멸형 T드론 A형",   //8
    "Lv. 209 섬멸형 T드론 B형",   //9
    "Lv. 210 강력한 수색형 T드론 A형",   //10
    "Lv. 210 강력한 수색형 T드론 B형",   //11
    "Lv. 211 강력한 전투형 T드론 A형",   //12
    "Lv. 212 강력한 전투형 T드론 B형",   //13
    "Lv. 213 강력한 섬멸형 T드론 A형",   //14
    "Lv. 213 강력한 섬멸형 T드론 B형",   //15
];
var getMonname9 = [    //얌얌아일랜드
    "", //0
    "Lv. 215 주황 피아비(플)",   //1
    "Lv. 215 노란 피아비(플)",   //2
    "Lv. 215 보라 피아비(플)",   //3
    "Lv. 215 몽키록",   //4
    "Lv. 216 버쉬룸",   //5
    "Lv. 217 라이톤",   //6
    "Lv. 218 스톤피",   //7
    "Lv. 219 쿰파이더",   //8
    "Lv. 219 다람뇽",   //9
    "Lv. 220 강력한 몽키록",   //10
    "Lv. 220 강력한 버쉬룸",   //11
    "Lv. 220 강력한 라이톤",   //12
    "Lv. 220 강력한 스톤피",   //13
    "Lv. 220 강력한 쿰파이더",   //14
    "Lv. 220 강력한 다람뇽",   //15
];
var getMonname10 = [    //셀라스
    "", //0
    "Lv. 245 평화로운 이마고(플)",   //1
    "Lv. 245 추락하는 이마고(플)",   //2
    "Lv. 245 잠겨가는 이마고(플)",   //3
    "Lv. 245 베리타테",   //4
    "Lv. 246 뽈라르",   //5
    "Lv. 247 바다렐이",   //6
    "Lv. 248 히아데스",   //7
    "Lv. 249 데네볼라",   //8
    "Lv. 250 릴리 보레아",   //9
    "Lv. 251 안젤루스",   //10
];
var getMonname11 = [    //문브릿지
    "", //0
    "Lv. 250 방황하는 그레이더스트(플)",   //1
    "Lv. 250 혼돈의 피조물",   //2
    "Lv. 251 파괴의 피조물",   //3
    "Lv. 252 엄습하는 공포",   //4
    "Lv. 253 주시하는 공포",   //5
    "Lv. 254 공허의 하수인",   //6
    "Lv. 254 황혼의 하수인",   //7
];
var getMonname12 = [    //미궁
    "", //0
    "Lv. 255 날아드는 공포(플)",   //1
    "Lv. 255 날아드는 절망(플)",   //2
    "Lv. 255 날아드는 고통(플)",   //3
    "Lv. 255 뒤엉킨 파편",   //4
    "Lv. 255 복종하는 파편",   //5
    "Lv. 256 어둠의 실패작",   //6
    "Lv. 256 어둠의 피조물",   //7
    "Lv. 257 절망의 날개(플)",   //8
    "Lv. 257 절망의 칼날(플)",   //9
    "Lv. 258 침묵의 기사",   //10
    "Lv. 258 침묵의 정찰자",   //11
    "Lv. 258 침묵의 방랑자",   //12
    "Lv. 259 침묵의 감시자",   //13
    "Lv. 259 침묵의 암살자",   //14
    "Lv. 259 절망에 빠진 자",   //15
    "Lv. 259 절망에 매인 자",   //16
];
var getMonname13 = [    //리멘
    "", //0
    "Lv. 260 터비온(플)",   //1
    "Lv. 260 디스터비온(플)",   //2
    "Lv. 260 안세스티온",   //3
    "Lv. 261 트랜센디온",   //4
    "Lv. 262 어센시온",   //5
    "Lv. 263 포어베리온",   //6
    "Lv. 264 엠브리온",   //7
    "Lv. 262 강력한 어센시온",   //8
    "Lv. 263 강력한 포어베리온",   //9
    "Lv. 264 강력한 엠브리온",   //10
];
var getMonname14 = [    //오디움
    "", //0
    "Lv. 275 오디움의 척후병(플)",   //1
    "Lv. 278 망가진 오디움의 척후병(플)",   //2
    "Lv. 275 강화형 파수꾼 산호",   //3
    "Lv. 275 강화형 파수꾼 감람",   //4
    "Lv. 275 강화형 파수꾼 금강",   //5
    "Lv. 276 앵글러 로봇 A형",   //6
    "Lv. 276 앵글러 로봇 B형",   //7
    "Lv. 276 앵글러 로봇 C형",   //8
    "Lv. 277 경비병 강옥",   //9
    "Lv. 277 경비병 마노",   //10
    "Lv. 278 무너지는 실험체",   //11
    "Lv. 279 실패한 피험체",   //12
];


var getMonimage = [    //
    "", //0
    "", //1
    "", //2
    "", //3
    "", //4
    "", //5
    "", //6
    "", //7
    "", //8
    "", //9
    "", //10
    "", //11
    "", //12
    "", //13
    "", //14
    "", //15
    "", //16
    "", //17
    "", //18
];
var getMonimage0 = [    //여로
    "", //0
    "https://i.imgur.com/AcU36Bq.png", //1
    "https://i.imgur.com/QGatzce.png", //2
    "https://i.imgur.com/mkm9eH2.png", //3
    "https://i.imgur.com/EwaHx2C.png", //4
    "https://i.imgur.com/vmyv9qY.png", //5
    "https://i.imgur.com/HCDbtCd.png", //6
    "https://i.imgur.com/WExXUg3.png", //7
    "https://i.imgur.com/FoRWAjr.png", //8
    "https://i.imgur.com/pWnMt4j.png", //9
    "https://i.imgur.com/zxARVFG.png", //10
    "https://i.imgur.com/86RstvQ.png", //11
    "https://i.imgur.com/6EzF7bq.png", //12
    "https://i.imgur.com/xJCfysG.png", //13
    "https://i.imgur.com/CFLNGR4.png", //14
];
var getMonimage1 = [    //츄츄
    "", //0
    "https://i.imgur.com/oG0oAO5.png", //1
    "https://i.imgur.com/0ZZG966.png", //2
    "https://i.imgur.com/Y6iks6i.png", //3
    "https://i.imgur.com/MZ2u8Av.png", //4
    "https://i.imgur.com/GZuwDda.png", //5
    "https://i.imgur.com/A018xPe.png", //6
    "https://i.imgur.com/2fB7D4H.png", //7
    "https://i.imgur.com/4sF41Ul.png", //8
    "https://i.imgur.com/bDmJgGQ.png", //9
    "https://i.imgur.com/pRgP8uS.png", //10
    "https://i.imgur.com/If9HNGr.png", //11
    "https://i.imgur.com/2DB1BE4.png", //12
    "https://i.imgur.com/lcsaGGK.png", //13
    "https://i.imgur.com/OHnQ6pv.png", //14
    "https://i.imgur.com/L4n4iFG.png", //15
    "https://i.imgur.com/OYy39Us.png", //16
    "https://i.imgur.com/GRiINY7.png", //17
];
var getMonimage2 = [    //레헬른
    "", //0
    "https://i.imgur.com/gsbkUI4.png", //1
    "https://i.imgur.com/6XYLU76.png", //2
    "https://i.imgur.com/h0QVrfE.png", //3
    "https://i.imgur.com/Bvqve2J.png", //4
    "https://i.imgur.com/nhvTXCZ.png", //5
    "https://i.imgur.com/LIwA0C8.png", //6
    "https://i.imgur.com/p9GefJl.png", //7
    "https://i.imgur.com/jCBYAMa.png", //8
    "https://i.imgur.com/T6PWlxp.png", //9
    "https://i.imgur.com/G8TZSsN.png", //10
    "https://i.imgur.com/V1Z2kMq.png", //11
    "https://i.imgur.com/ktLbsvv.png", //12
    "https://i.imgur.com/b8TikAo.png", //13
    "https://i.imgur.com/xC7mIc0.png", //14
];
var getMonimage3 = [    //아르카나
    "", //0
    "https://i.imgur.com/SYO7Dw8.png", //1
    "https://i.imgur.com/pfIUESq.png", //2
    "https://i.imgur.com/jO4rkFn.png", //3
    "https://i.imgur.com/CB5Qw3g.png", //4
    "https://i.imgur.com/hnOt5sR.png", //5
    "https://i.imgur.com/B2ym1Dx.png", //6
    "https://i.imgur.com/jE0cYpu.png", //7
    "https://i.imgur.com/UmdKDA7.png", //8
    "https://i.imgur.com/vyKrL2z.png", //9
    "https://i.imgur.com/8sm6Jxc.png", //10
    "https://i.imgur.com/z5hUWQv.png", //11
    "https://i.imgur.com/SFYqQGc.png", //12
    "https://i.imgur.com/Pv6DWHK.png", //13
];
var getMonimage4 = [    //모라스
    "", //0
    "https://i.imgur.com/Ykf9IHX.png", //1
    "https://i.imgur.com/laPqUur.png", //2
    "https://i.imgur.com/nSx9UYH.png", //3
    "https://i.imgur.com/zS22Apn.png", //4
    "https://i.imgur.com/4c1XTEJ.png", //5
    "https://i.imgur.com/eLSM0Be.png", //6
    "https://i.imgur.com/npqf3le.png", //7
    "https://i.imgur.com/YFHuthu.png", //8
    "https://i.imgur.com/FZo2ZfS.png", //9
    "https://i.imgur.com/qHpUS1o.png", //10
    "https://i.imgur.com/uByyQkK.png", //11
    "https://i.imgur.com/5IwK4dn.png", //12
    "https://i.imgur.com/iRmhhdw.png", //13
    "https://i.imgur.com/tnzqLbX.png", //14
    "https://i.imgur.com/BZ9bLD8.png", //15
    "https://i.imgur.com/ZiG8c0C.png", //16
    "https://i.imgur.com/V0GAxaa.png", //17
];
var getMonimage5 = [    //에스페라
    "", //0
    "https://i.imgur.com/wfAVqt8.png", //1
    "https://i.imgur.com/Pvbymfq.png", //2
    "https://i.imgur.com/YcR2bSx.png", //3
    "https://i.imgur.com/KxgrScR.png", //4
    "https://i.imgur.com/1dXeaqi.png", //5
    "https://i.imgur.com/u2efHje.png", //6
    "https://i.imgur.com/qGElAyc.png", //7
    "https://i.imgur.com/jPgkN9Z.png", //8
    "https://i.imgur.com/NU3FPZh.png", //9
    "https://i.imgur.com/Exs3hpe.png", //10
    "https://i.imgur.com/WoQlMor.png", //11
    "https://i.imgur.com/CDzEMC1.png", //12
];
var getMonimage6 = [    //세르니움
    "", //0
    "https://i.imgur.com/Scq7p9H.png", //1
    "https://i.imgur.com/7HVEbLX.png", //2
    "https://i.imgur.com/6TLi8kK.png", //3
    "https://i.imgur.com/HQRiquR.png", //4
    "https://i.imgur.com/dccjQab.png", //5
    "https://i.imgur.com/VZ7kfli.png", //6
    "https://i.imgur.com/REwusUP.png", //7
    "https://i.imgur.com/dG3of8V.png", //8
    "https://i.imgur.com/OXwgjOq.png", //9
    "https://i.imgur.com/bBq7wS3.png", //10
    "https://i.imgur.com/jRPYiC2.png", //11
    "https://i.imgur.com/X5HUuEf.png", //12
    "https://i.imgur.com/emFrMkc.png", //13
    "https://i.imgur.com/L02QlZu.png", //14
    "https://i.imgur.com/aS3KwI9.png", //15
    "https://i.imgur.com/BGgR2VA.png", //16
];
var getMonimage7 = [    //아르크스
    "", //0
    "https://i.imgur.com/LpeB2Xu.png", //1
    "https://i.imgur.com/6EBGF1a.png", //2
    "https://i.imgur.com/OmQl3J3.png", //3
    "https://i.imgur.com/liOzMCP.png", //4
    "https://i.imgur.com/fcNiaul.png", //5
    "https://i.imgur.com/DP3Cnbu.png", //6
    "https://i.imgur.com/vb7oZtO.png", //7
];
var getMonimage8 = [    //리버스시티
    "", //0
    "https://i.imgur.com/GdGx3UV.png", //1
    "https://i.imgur.com/JmPSi8p.png", //2
    "https://i.imgur.com/Oy3GXMF.png", //3
    "https://i.imgur.com/owQtf5z.png", //4
    "https://i.imgur.com/tIInbDg.png", //5
    "https://i.imgur.com/Es379Gn.png", //6
    "https://i.imgur.com/1Ajl8Im.png", //7
    "https://i.imgur.com/vE3dCLL.png", //8
    "https://i.imgur.com/amuITf6.png", //9
    "https://i.imgur.com/n155Rym.png", //10
    "https://i.imgur.com/1KhPynT.png", //11
    "https://i.imgur.com/sJJ0z1X.png", //12
    "https://i.imgur.com/kzXYUmJ.png", //13
    "https://i.imgur.com/kBwAWS3.png", //14
    "https://i.imgur.com/FiNB0PA.png", //15
];
var getMonimage9 = [    //얌얌아일랜드
    "", //0
    "https://i.imgur.com/FgMvtYl.png", //1
    "https://i.imgur.com/30rJ5E9.png", //2
    "https://i.imgur.com/4mYT8C3.png", //3
    "https://i.imgur.com/KeLBxVA.png", //4
    "https://i.imgur.com/nPiecVL.png", //5
    "https://i.imgur.com/E13qXlM.png", //6
    "https://i.imgur.com/kvTo0RP.png", //7
    "https://i.imgur.com/dqlOOsu.png", //8
    "https://i.imgur.com/tkj6IKz.png", //9
    "https://i.imgur.com/yFpwZqk.png", //10
    "https://i.imgur.com/yDoVJrJ.png", //11
    "https://i.imgur.com/xj1bo13.png", //12
    "https://i.imgur.com/PGngzAf.png", //13
    "https://i.imgur.com/ofcmpLh.png", //14
    "https://i.imgur.com/U5AtUQ3.png", //15
];
var getMonimage10 = [    //셀라스
    "", //0
    "https://i.imgur.com/cRVk5rW.png", //1
    "https://i.imgur.com/pFWRRNt.png", //2
    "https://i.imgur.com/BPCeKAf.png", //3
    "https://i.imgur.com/MXs1XSw.png", //4
    "https://i.imgur.com/cU7EvcW.png", //5
    "https://i.imgur.com/1LaLKSy.png", //6
    "https://i.imgur.com/Xl3C1DU.png", //7
    "https://i.imgur.com/qbJs3M2.png", //8
    "https://i.imgur.com/GhppsLb.png", //9
    "https://i.imgur.com/5mXxDz4.png", //10
];
var getMonimage11 = [    //문브
    "", //0
    "https://i.imgur.com/pyfWlzq.png", //1
    "https://i.imgur.com/Lxndouj.png", //2
    "https://i.imgur.com/Sk49F6L.png", //3
    "https://i.imgur.com/GrMoDxF.png", //4
    "https://i.imgur.com/k6Gf8RB.png", //5
    "https://i.imgur.com/O8DHjUw.png", //6
    "https://i.imgur.com/7vgZwlX.png", //7
];
var getMonimage12 = [    //미궁
    "", //0
    "https://i.imgur.com/30T3rpm.png", //1
    "https://i.imgur.com/GU1Nq4O.png", //2
    "https://i.imgur.com/GpbF8oT.png", //3
    "https://i.imgur.com/5hN37Y8.png", //4
    "https://i.imgur.com/57W3Rsu.png", //5
    "https://i.imgur.com/N0KWd4c.png", //6
    "https://i.imgur.com/Ukphti1.png", //7
    "https://i.imgur.com/Ox28c66.png", //8
    "https://i.imgur.com/uIqHCgv.png", //9
    "https://i.imgur.com/sLSeNuB.png", //10
    "https://i.imgur.com/8e068tC.png", //11
    "https://i.imgur.com/dj6V2b0.png", //12
    "https://i.imgur.com/MNJaZEL.png", //13
    "https://i.imgur.com/gTQkfkF.png", //14
    "https://i.imgur.com/RsRlGZX.png", //15
    "https://i.imgur.com/Egqea20.png", //16
];
var getMonimage13 = [    //리멘
    "", //0
    "https://i.imgur.com/iFyzmHN.png", //1
    "https://i.imgur.com/LyZrESf.png", //2
    "https://i.imgur.com/89JouFg.png", //3
    "https://i.imgur.com/Usy5EJt.png", //4
    "https://i.imgur.com/Vo0GzNh.png", //5
    "https://i.imgur.com/iiEHFbL.png", //6
    "https://i.imgur.com/fZ90TVc.png", //7
    "https://i.imgur.com/NfKkSxc.png", //8
    "https://i.imgur.com/I4YwWHf.png", //9
    "https://i.imgur.com/zkR4ZLO.png", //10
];
var getMonimage14 = [    //오디움
    "", //0
    "https://i.imgur.com/QmNYHzo.png", //1
    "https://i.imgur.com/8SJ8a6T.png", //2
    "https://i.imgur.com/Y7S5RYq.png", //3
    "https://i.imgur.com/dqMhqt9.png", //4
    "https://i.imgur.com/eilPjRg.png", //5
    "https://i.imgur.com/aw5nqwQ.png", //6
    "https://i.imgur.com/y6OpwZ0.png", //7
    "https://i.imgur.com/77BRemY.png", //8
    "https://i.imgur.com/3aLDKzO.png", //9
    "https://i.imgur.com/sPGde5S.png", //10
    "https://i.imgur.com/e1yrh99.png", //11
    "https://i.imgur.com/zlNly5r.png", //12
];

var getMonHP = [   //
    0,  //0
    0,  //1
    0,  //2
    0,  //3
    0,  //4
    0,  //5
    0,  //6
    0,  //7
    0,  //8
    0,  //9
    0,  //10
    0,  //11
    0,  //12
    0,  //13
    0,  //14
    0,  //15
    0,  //16
    0,  //17
    0,  //18
];
var getMonHP0 = [   //여로
    0,  //0
    56571000,  //1
    44640000,  //2
    46056000,  //3
    47491200,  //4
    48975600,  //5
    50419200,  //6
    51973800,  //7
    53487000,  //8
    55019400,  //9
    56571000,  //10
    58208400,  //11
    100894560,  //12
    100894560,  //13
    100894560,  //14
];
var getMonHP1 = [   //츄츄
    0,  //0
    147060000,  //1
    119599200,  //2
    122820000,  //3
    119599200,  //4
    122820000,  //5
    126219600,  //6
    129519600,  //7
    126219600,  //8
    129519600,  //9
    133003200,  //10
    139950000,  //11
    136530000,  //12
    139950000,  //13
    143560800,  //14
    150754800,  //15
    147060000,  //16
    150754800,  //17
];
var getMonHP2 = [   //레헬른
    0,  //0
    221273220,  //1
    187966240,  //2
    192566700,  //3
    192566700,  //4
    197219720,  //5
    197219720,  //6
    201925300,  //7
    201925300,  //8
    206683440,  //9
    206683440,  //10
    211494140,  //11
    216357400,  //12
    221273220,  //13
    226241600,  //14
];
var getMonHP3 = [   //아르카나
    0,  //0
    258998400,  //1
    258998400,  //2
    264716000,  //3
    270291200,  //4
    276278400,  //5
    282072000,  //6
    288184000,  //7
    294096000,  //8
    300065600,  //9
    306363200,  //10
    312451200,  //11
    318873600,  //12
    500000000,  //13
];
var getMonHP4 = [   //모라스
    0,  //0
    294096000,  //1
    294096000,  //2
    294096000,  //3
    294096000,  //4
    300065600,  //5
    306363200,  //6
    306363200,  //7
    294096000,  //8
    312451200,  //9
    318873600,  //10
    406700000,  //11
    406700000,  //12
    294096000,  //13
    414534000,  //14
    422798000,  //15
    431142000,  //16
    439566000,  //17
];
var getMonHP5 = [   //에스페라
    0,  //0
    318873600,  //1
    318873600,  //2
    318873600,  //3
    406700000,  //4
    414534000,  //5
    422798000,  //6
    431142000,  //7
    439566000,  //8
    447700000,  //9
    456280000,  //10
    464940000,  //11
    473680000,  //12
];
var getMonHP6 = [   //세르니움
    0,  //0
    3743688000,  //1
    3743688000,  //2
    3743688000,  //3
    3806790000,  //4
    3873233000,  //5
    3743688000,  //6
    3937401000,  //7
    4004962000,  //8
    5295023500,  //9
    5295023500,  //10
    5295023500,  //11
    5380537500,  //12
    5470563800,  //13
    5295023500,  //14
    5557463600,  //15
    5648943300,  //16
];
var getMonHP7 = [   //아르크스
    0,  //0
    6257531880,  //1
    6257531880,  //2
    6257531880,  //3
    6884227530,  //4
    6994855920,  //5
    7828987530,  //6
    7952744540,  //7
];
var getMonHP8 = [   //리버스시티
    0,  //0
    56571000,  //1
    51973800,  //2
    51973800,  //3
    53487000,  //4
    53487000,  //5
    55019400,  //6
    56571000,  //7
    58208400,  //8
    58208400,  //9
    119599200,  //10
    119599200,  //11
    122820000,  //12
    126219600,  //13
    129519600,  //14
    129519600,  //15
];
var getMonHP9 = [   //얌얌아일랜드
    0,  //0
    136530000,  //1
    136530000,  //2
    136530000,  //3
    136530000,  //4
    139950000,  //5
    143560800,  //6
    147060000,  //7
    150754800,  //8
    150754800,  //9
    187966240,  //10
    187966240,  //11
    187966240,  //12
    187966240,  //13
    187966240,  //14
    187966240,  //15
];
var getMonHP10 = [   //셀라스
    0,  //0
    439566000,  //1
    439566000,  //2
    439566000,  //3
    439566000,  //4
    447700000,  //5
    456280000,  //6
    464940000,  //7
    473680000,  //8
    530750000,  //9
    540540000,  //10
];
var getMonHP11 = [   //문브
    0,  //0
    530750000,  //1
    530750000,  //2
    540540000,  //3
    550418000,  //4
    560384000,  //5
    570438000,  //6
    570438000,  //7
];
var getMonHP12 = [   //미궁
    0,  //0
    581026600,  //1
    581026600,  //2
    581026600,  //3
    581026600,  //4
    581026600,  //5
    591261000,  //6
    591261000,  //7
    601583400,  //8
    601583400,  //9
    611993800,  //10
    611993800,  //11
    611993800,  //12
    622956400,  //13
    622956400,  //14
    622956400,  //15
    622956400,  //16
];
var getMonHP13 = [   //리멘
    0,  //0
    633547200,  //1
    633547200,  //2
    633547200,  //3
    644226000,  //4
    655470200,  //5
    666329400,  //6
    677762800,  //7
    1310940400,  //8
    1332658800,  //9
    1355525600,  //10
];
var getMonHP14 = [   //오디움
    0,  //0
    10500341040,  //1
    10994286240,  //2
    10500341040,  //3
    10500341040,  //4
    10500341040,  //5
    10663732800,  //6
    10663732800,  //7
    10663732800,  //8
    10828381200,  //9
    10828381200,  //10
    10994286240,  //11
    11161447920,  //12
];

var getMonEXP = [   //
    0,  //0
    0,  //1
    0,  //2
    0,  //3
    0,  //4
    0,  //5
    0,  //6
    0,  //7
    0,  //8
    0,  //9
    0,  //10
    0,  //11
    0,  //12
    0,  //13
    0,  //14
    0,  //15
    0,  //16
    0,  //17
    0,  //18
];
var getMonEXP0 = [   //여로
    0,  //0
    121453,  //1
    98708,  //2
    101389,  //3
    104101,  //4
    107125,  //5
    109886,  //6
    112662,  //7
    115470,  //8
    118598,  //9
    121453,  //10
    124322,  //11
    207204,  //12
    207204,  //13
    207204,  //14
];
var getMonEXP1 = [   //츄츄
    0,  //0
    296653,  //1
    248003,  //2
    253673,  //3
    248003,  //4
    253673,  //5
    260047,  //6
    265808,  //7
    260047,  //8
    265808,  //9
    271621,  //10
    284043,  //11
    278138,  //12
    284043,  //13
    290679,  //14
    303394,  //15
    296653,  //16
    303394,  //17
];
var getMonEXP2 = [   //레헬른
    0,  //0
    356216,  //1
    309470,  //2
    316316,  //3
    316316,  //4
    322473,  //5
    322473,  //6
    329417,  //7
    329417,  //8
    335675,  //9
    335675,  //10
    342720,  //11
    349836,  //12
    356216,  //13
    363430,  //14
];
var getMonEXP3 = [   //아르카나
    0,  //0
    393361,  //1
    393361,  //2
    401055,  //3
    408778,  //4
    415702,  //5
    423542,  //6
    431459,  //7
    439402,  //8
    446505,  //9
    454564,  //10
    462670,  //11
    470824,  //12
    1,  //13
];
var getMonEXP4 = [   //모라스
    0,  //0
    439402,  //1
    439402,  //2
    439402,  //3
    439402,  //4
    446505,  //5
    454564,  //6
    454564,  //7
    439402,  //8
    462670,  //9
    470824,  //10
    485614,  //11
    485614,  //12
    439402,  //13
    494006,  //14
    501461,  //15
    509964,  //16
    518511,  //17
];
var getMonEXP5 = [   //에스페라
    0,  //0
    470824,  //1
    470824,  //2
    470824,  //3
    485614,  //4
    494006,  //5
    501461,  //6
    509964,  //7
    518511,  //8
    527106,  //9
    535749,  //10
    544459,  //11
    553217,  //12
];
var getMonEXP6 = [   //세르니움
    0,  //0
    1725461,  //1
    1725461,  //2
    1725461,  //3
    1750290,  //4
    1775159,  //5
    1725461,  //6
    1800203,  //7
    1828409,  //8
    2056974,  //9
    2056974,  //10
    2056974,  //11
    2085219,  //12
    2113572,  //13
    2056974,  //14
    2145596,  //15
    2174274,  //16
];
var getMonEXP7 = [   //아르크스
    0,  //0
    2274336,  //1
    2274336,  //2
    2274336,  //3
    2382248,  //4
    2413256,  //5
    2546149,  //6
    2582906,  //7
];
var getMonEXP8 = [   //리버스시티
    0,  //0
    121453,  //1
    112662,  //2
    112662,  //3
    115470,  //4
    115470,  //5
    118598,  //6
    121453,  //7
    124322,  //8
    124322,  //9
    248003,  //10
    248003,  //11
    253673,  //12
    260047,  //13
    265808,  //14
    265808,  //15
];
var getMonEXP9 = [   //얌얌아일랜드
    0,  //0
    278138,  //1
    278138,  //2
    278138,  //3
    278138,  //4
    284043,  //5
    290679,  //6
    296653,  //7
    303394,  //8
    303394,  //9
    309470,  //10
    309470,  //11
    309470,  //12
    309470,  //13
    309470,  //14
    309470,  //15
];
var getMonEXP10 = [   //셀라스
    0,  //0
    518511,  //1
    518511,  //2
    518511,  //3
    518511,  //4
    527106,  //5
    535749,  //6
    544459,  //7
    553217,  //8
    584807,  //9
    594040,  //10
];
var getMonEXP11 = [   //문브릿지
    0,  //0
    584807,  //1
    584807,  //2
    594040,  //3
    603318,  //4
    612643,  //5
    622041,  //6
    622041,  //7
];
var getMonEXP12 = [   //미궁
    0,  //0
    631458,  //1
    631458,  //2
    631458,  //3
    631458,  //4
    631458,  //5
    640971,  //6
    640971,  //7
    650504,  //8
    650504,  //9
    661261,  //10
    661261,  //11
    661261,  //12
    670940,  //13
    670940,  //14
    670940,  //15
    670940,  //16
];
var getMonEXP13 = [   //리멘
    0,  //0
    680638,  //1
    680638,  //2
    680638,  //3
    690432,  //4
    700242,  //5
    710121,  //6
    721247,  //7
    840290,  //8
    852145,  //9
    865496,  //10
];
var getMonEXP14 = [   //오디움
    0,  //0
    2903024,  //1
    3017988,  //2
    2903024,  //3
    2903024,  //4
    2903024,  //5
    2939616,  //6
    2939616,  //7
    2939616,  //8
    2981010,  //9
    2981010,  //10
    3017988,  //11
    3059716,  //12
];

module.exports = mon;