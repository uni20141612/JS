const sksm = {};

sksm.getskillSoulmaster = function (skillname){
    var smret = -1;
    switch(skillname){
        case "엘리멘트 : 소울":
        case "엘리멘트소울":
        case "엘리멘트":
        case "소울":
        case "소환수":
            smret = 0;
            break;
        case "소드 오브 라이트":
        case "소드오브라이트":
            smret = 1;
            break;
        case "이너 보이스":
        case "이너보이스":
            smret = 2;
            break;
        case "폴링 문":
        case "폴링문":
        case "문":
        case "달":
        case "루나":
            smret = 3;
            break;
        case "님블 핑거":
        case "님블핑거":
            smret = 4;
            break;
        case "이너 트러스트":
        case "이너트러스트":
            smret = 5;
            break;
        case "바디 앤 소울":
        case "바디앤소울":
            smret = 6;
            break;
        case "라이징 선":
        case "라이징선":
        case "선":
        case "해":
        case "솔라":
            smret = 7;
            break;
        case "트루 사이트":
        case "트루 싸이트":
        case "트루사이트":
        case "트루싸이트":
        case "트루":
        case "트사":
        case "트싸":
            smret = 8;
            break;
        case "소울 가디언":
        case "소울가디언":
            smret = 9;
            break;
        case "윌 오브 스틸":
        case "윌오브스틸":
            smret = 10;
            break;
        case "이너 샤우트":
        case "이너샤우트":
            smret = 11;
            break;
        case "댄스 오브 문":
        case "댄스오브문":
        case "댄오문":
            smret = 12;
            break;
        case "스피딩 선셋":
        case "스피딩선셋":
        case "스피딩":
        case "선셋":
        case "스선":
            smret = 13;
            break;
        case "크레센트 디바이드":
        case "크레센트디바이드":
        case "크레센트":
        case "디바이드":
        case "크디":
            smret = 14;
            break;
        case "솔라 피어스":
        case "솔라피어스":
        case "피어스":
        case "솔피":
            smret = 15;
            break;
        case "소울 페네트레이션":
        case "소울페네트레이션":
        case "페네트레이션":
        case "소페":
        case "바인드":
            smret = 16;
            break;
        case "솔루나 타임":
        case "솔루나타임":
        case "솔루나":
        case "솔탐":
        case "솔타":
            smret = 17;
            break;
        case "솔루나 슬래시":
        case "솔루나슬래시":
        case "솔슬":
            smret = 18;
            break;
        case "소울 플레지":
        case "소울플레지":
        case "플레지":
        case "소플":
            smret = 19;
            break;
        case "언포시어블":
            smret = 20;
            break;
        case "마스터 오브 더 소드":
        case "마스터오브더소드":
        case "마스터":
            smret = 21;
            break;
        case "소울 포지":
        case "소울포지":
        case "포지":
            smret = 22;
            break;
        case "크로스 더 스틱스":
        case "크로스더스틱스":
        case "크로스":
        case "스틱스":
            smret = 23;
            break;
        case "셀레스티얼 댄스":
        case "셀레스티얼댄스":
        case "셀레스티얼":
        case "댄스":
        case "셀댄":
            smret = 24;
            break;
        case "엘리시온":
            smret = 25;
            break;
        case "소울 이클립스":
        case "소울이클립스":
        case "이클립스":
        case "솔루나 디바이드":
        case "솔루나디바이드":
            smret = 26;
            break;
        case "플레어 슬래시":
        case "플레어슬래시":
        case "슬래시":
            smret = 27;
            break;
    }
    return smret;
};
sksm.getskillnameSoulmaster = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "엘리멘트 : 소울";
            break;
        case 1:
            rep = "소드 오브 라이트";
            break;
        case 2:
            rep = "이너 보이스";
            break;
        case 3:
            rep = "폴링 문";
            break;
        case 4:
            rep = "님블 핑거";
            break;
        case 5:
            rep = "이너 트러스트";
            break;
        case 6:
            rep = "바디 앤 소울";
            break;
        case 7:
            rep = "라이징 선";
            break;
        case 8:
            rep = "트루 사이트";
            break;
        case 9:
            rep = "소울 가디언";
            break;
        case 10:
            rep = "윌 오브 스틸";
            break;
        case 11:
            rep = "이너 샤우트";
            break;
        case 12:
            rep = "댄스 오브 문";
            break;
        case 13:
            rep = "스피딩 선셋";
            break;
        case 14:
            rep = "크레센트 디바이드";
            break;
        case 15:
            rep = "솔라 피어스";
            break;
        case 16:
            rep = "소울 페네트레이션";
            break;
        case 17:
            rep = "솔루나 타임";
            break;
        case 18:
            rep = "솔루나 슬래시";
            break;
        case 19:
            rep = "소울 플레지";
            break;
        case 20:
            rep = "언포시어블";
            break;
        case 21:
            rep = "마스터 오브 더 소드";
            break;
        case 22:
            rep = "소울 포지";
            break;
        case 23:
            rep = "크로스 더 스틱스";
            break;
        case 24:
            rep = "셀레스티얼 댄스";
            break;
        case 25:
            rep = "엘리시온";
            break;
        case 26:
            rep = "소울 이클립스";
            break;
        case 27:
            rep = "플레어 슬래시";
            break;
    }
    return rep;
};
sksm.getskilldesc1Soulmaster = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "모든 공격에 80% 확률로 2초의 경직을 발생시키는 디버프 추가";
            break;
        case 1:
            rep = "공격력 20 증가";
            break;
        case 2:
            rep = "최대 HP 20%, 방어력 1000, 이동속도 40, 점프력 20";
            break;
        case 3:
            rep = "크확 20%/ 공격횟수 2배(15번 초과X)/ 최종데미지 60%로 감소";
            break;
        case 4:
            rep = "180초 동안 공격 속도 2단계 증가";
            break;
        case 5:
            rep = "공격력 20 증가";
            break;
        case 6:
            rep = "영구적으로 힘 40, 민첩 20 만큼 증가";
            break;
        case 7:
            rep = "최종 데미지 15% 및 공격 속도 1단계 증가.";
            break;
        case 8:
            rep = "30초간 범위내 적방어율 10%감소, 적이 받는 최종뎀 5% 증가";
            break;
        case 9:
            rep = "최대 HP 2000, 방어력 1500 증가";
            break;
        case 10:
            rep = "내성 30, 속성내성 30%, 피격 데미지 25% 감소";
            break;
        case 11:
            rep = "공격력 30, 힘 40 증가";
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
    }
    return rep;
};
sksm.getskilldesc2Soulmaster = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "[패시브 효과 : 몬스터 방어율 10% 무시]/ 온오프스킬";
            break;
        case 1:
            rep = "자신의 혼을 무기에 담아 벼린다.";
            break;
        case 2:
            rep = "최대 이동속도 20만큼 증가";
            break;
        case 3:
            rep = "라이징 선과 같이 사용 불가";
            break;
        case 4:
            rep = "이름이 ~부스터가 아닌 공속증가 스킬";
            break;
        case 5:
            rep = "흔들리지 않는 믿음으로 정확한 일격을 가한다.";
            break;
        case 6:
            rep = "특이하게도 힘 30, 민첩 30이 아닌 힘을 10 더 올려준다.";
            break;
        case 7:
            rep = "폴링 문과 같이 사용 불가";
            break;
        case 8:
            rep = "하이퍼패시브 : 속성내성 10% 감소, 방어율 10% 추가감소";
            break;
        case 9:
            rep = "고대의 영혼으로부터 힘을 빌려 자신을 지킨다.";
            break;
        case 10:
            rep = "4초마다 HP 5%씩 회복";
            break;
        case 11:
            rep = "정신을 집중하여 전신에 활력을 불어넣는다.";
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
    }
    return rep;
};
sksm.getskillimage1Soulmaster = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "https://i.imgur.com/AkYGdYy.png";
            break;
        case 1:
            rep = "";
            break;
        case 2:
            rep = "";
            break;
        case 3:
            rep = "https://i.imgur.com/5OG9Qkg.png";
            break;
        case 4:
            rep = "https://i.imgur.com/Rl350oi.png";
            break;
        case 5:
            rep = "";
            break;
        case 6:
            rep = "";
            break;
        case 7:
            rep = "https://i.imgur.com/MvSA08I.png";
            break;
        case 8:
            rep = "https://i.imgur.com/d1tsUSZ.png";
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
            rep = "https://i.imgur.com/LodCxNL.png";
            break;
        case 13:
            rep = "https://i.imgur.com/XF11MiN.png";
            break;
        case 14:
            rep = "https://i.imgur.com/UxQ9Dpv.png";
            break;
        case 15:
            rep = "https://i.imgur.com/Y7hvnFT.png";
            break;
        case 16:
            rep = "https://i.imgur.com/m7801HK.png";
            break;
        case 17:
            rep = "https://i.imgur.com/Yzdlldb.png";
            break;
        case 18:
            rep = "https://i.imgur.com/WTNeJH0.png";
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
            rep = "https://i.imgur.com/iFyTEmp.png";
            break;
        case 23:
            rep = "https://i.imgur.com/pIdvSPh.png";
            break;
        case 24:
            rep = "https://i.imgur.com/gp3vwgO.png";
            break;
        case 25:
            rep = "https://i.imgur.com/NmrUPRi.png";
            break;
        case 26:
            rep = "https://i.imgur.com/wMNfQff.png";
            break;
        case 27:
            rep = "https://i.imgur.com/YT7UmTK.png";
            break;
    }
    return rep;
};
sksm.getskillimage2Soulmaster = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "https://i.imgur.com/AVnvqea.png";
            break;
        case 1:
            rep = "https://i.imgur.com/V6xXSnY.png";
            break;
        case 2:
            rep = "https://i.imgur.com/EJG3gxu.png";
            break;
        case 3:
            rep = "https://i.imgur.com/XWnLuiA.png";
            break;
        case 4:
            rep = "https://i.imgur.com/GxEdY8J.png";
            break;
        case 5:
            rep = "https://i.imgur.com/DAdb8h2.png";
            break;
        case 6:
            rep = "https://i.imgur.com/vRF5X82.png";
            break;
        case 7:
            rep = "https://i.imgur.com/ExcW8At.png";
            break;
        case 8:
            rep = "https://i.imgur.com/205BMyF.png";
            break;
        case 9:
            rep = "https://i.imgur.com/infhv7t.png";
            break;
        case 10:
            rep = "https://i.imgur.com/ZdLDgzB.png";
            break;
        case 11:
            rep = "https://i.imgur.com/s9hUOWq.png";
            break;
        case 12:
            rep = "https://i.imgur.com/gdrvsnA.png";
            break;
        case 13:
            rep = "https://i.imgur.com/qZZwZZW.png";
            break;
        case 14:
            rep = "https://i.imgur.com/9Qs6Dd1.png";
            break;
        case 15:
            rep = "https://i.imgur.com/S9CVQWx.png";
            break;
        case 16:
            rep = "https://i.imgur.com/Ys3BuAQ.png";
            break;
        case 17:
            rep = "https://i.imgur.com/kBw05zr.png";
            break;
        case 18:
            rep = "https://i.imgur.com/Khn5xWf.png";
            break;
        case 19:
            rep = "https://i.imgur.com/kNzS2Xv.png";
            break;
        case 20:
            rep = "https://i.imgur.com/Z35JfdK.png";
            break;
        case 21:
            rep = "https://i.imgur.com/UfoR1EI.png";
            break;
        case 22:
            rep = "https://i.imgur.com/hT3oTWi.png";
            break;
        case 23:
            rep = "https://i.imgur.com/oEoGnFx.png";
            break;
        case 24:
            rep = "https://i.imgur.com/ZmeDm9X.png";
            break;
        case 25:
            rep = "https://i.imgur.com/FBaMLbo.png";
            break;
        case 26:
            rep = "https://i.imgur.com/8BtkRtu.png";
            break;
        case 27:
            rep = "https://i.imgur.com/cV26HMN.png";
            break;
    }
    return rep;
};

module.exports = sksm;