const sd = {};

sd.getSeed = function(msg){
    rep = "";

    var seedind = msg.split(" ")[1];
    if(seedind == undefined){
        rep = "시드링 상자 종류가 입력되지 않았습니다.\n\n!시드링 (상자 종류) (횟수) : 시드링 상자 개봉 시뮬레이션을 보여줍니다. 횟수는 1이상 500이하 숫자만 가능합니다.\n(상자 종류) 목록\n1 : 알리샤의 반지 상자(1급)\n2 : 알리샤의 반지 상자(2급)\n3 : 숨겨진 반지 상자\n4 : 빛나는 반지 상자\n\n(횟수) 생략시 각 상자의 확률표를 보여줍니다.";
    }
    else if(seedind > 0 && seedind < 5 && seedind % 1 === 0){
        var seedCnt = msg.split(" ")[2];
        if(seedCnt == undefined){
            var ringN = []; var ringR = [];
            this.getSeedNR(seedind, ringN, ringR);
            switch(parseInt(seedind)){
                case 1:
                    rep += "알리샤의 반지 상자(1급)의 아이템 획득 확률\n\n";
                    break;
                case 2:
                    rep += "알리샤의 반지 상자(2급)의 아이템 획득 확률\n\n"
                    break;
                case 3:
                    rep += "숨겨진 반지 상자의 아이템 획득 확률\n\n"
                    break;
                case 4:
                    rep += "빛나는 반지 상자의 아이템 획득 확률\n\n"
                    break;
            }
            for(i = 0; i < ringN.length; ++i){
                rep += ringN[i] + " : ";
                rep += ringR[i] + "%\n";
            }
            rep = rep.slice(0, rep.length-1);
        }
        else{
            if(seedCnt == "1"){
                rep = this.getSeedOne(seedind);
            }
            else if(seedCnt > 1 && seedCnt < 501 && seedind % 1 === 0){
                ringN = []; ringR = [];
                this.getSeedNR(seedind, ringN, ringR);
                rep = this.getSeedMany(seedind, parseInt(seedCnt), ringN, ringR)
            }
            else{
                rep = "횟수는 1이상 500이하의 정수로 입력해주세요.";
            }
        }
    }
    else{
        var ringind = getSeedcode(seedind);
        if(ringind == -1){
            rep = "상자 종류를 숫자(1,2,3,4 중 하나)로 입력해주세요.\n\n!시드링 (상자 종류) (횟수) : 시드링 상자 개봉 시뮬레이션을 보여줍니다. 횟수는 1이상 500이하 숫자만 가능합니다.\n(상자 종류) 목록\n1 : 알리샤의 반지 상자(1급)\n2 : 알리샤의 반지 상자(2급)\n3 : 숨겨진 반지 상자\n4 : 빛나는 반지 상자\n\n(횟수) 생략시 각 상자의 확률표를 보여줍니다.";
        }
        else if(ringind == 99){
            rep = "시드링 목록\n\n";
            for(i = 0; i < 25; ++i){
                rep += getSeedname(i) + "\n";
            }
            rep = rep.slice(0, rep.length-1);
        }
        else{
            rep = "★" + getSeedname(ringind) + "★" + getSeeddesc1(ringind) + "★" + getSeeddesc2(ringind) + "★" + getSeedEffect(ringind) + "★" + getSeedImage(ringind);
        }
    }

    return rep;
};
sd.getSeedNR = function(ind, ringName, ringRate){
    var seedinfor = "";
    if(ind == 1 || ind == 2){
        var dataSeed = org.jsoup.Jsoup.connect("https://maplestory.nexon.com/Guide/OtherProbability/ringBox/aliciaRingBox").get();
        dataSeed = dataSeed.toString();

        if(ind == 1){
            seedinfor = dataSeed.split("알리샤의 반지 상자(1급)")[1].split("</table>")[0];
        }
        else{
            seedinfor = dataSeed.split("알리샤의 반지 상자(2급)")[1].split("</table>")[0];
        }
    }
    else if(ind == 3){
        dataSeed = org.jsoup.Jsoup.connect("https://maplestory.nexon.com/Guide/OtherProbability/ringBox/hideRingBox").get();
        dataSeed = dataSeed.toString(); 
        seedinfor = dataSeed.split("숨겨진 반지 상자 아이템 획득 확률")[1].split("</table>")[0];
    }
    else{
        dataSeed = org.jsoup.Jsoup.connect("https://maplestory.nexon.com/Guide/OtherProbability/ringBox/shineRingBox").get();
        dataSeed = dataSeed.toString(); 
        seedinfor = dataSeed.split("빛나는 반지 상자 아이템 획득 확률")[1].split("</table>")[0];
    }
    for(var jj = 1; jj < seedinfor.split("<td>").length; ++jj){
        var nametemp = seedinfor.split("<td>")[jj++].split("</td>")[0];
        var ratetemp = seedinfor.split("<td>")[jj].split("%</td>")[0];
        this.splitfour(ringName, ringRate, nametemp, ratetemp, ind);
    }
};
sd.getSeedOne = function(ind){
    rep = "";
    var ringN = ["-"];
    var ringR = [0.0];
    this.getSeedNR(ind, ringN, ringR);
    switch(parseInt(ind)){
        case 1:
            rep += "알리샤의 반지 상자(1급) 개봉 결과\n\n";
            break;
        case 2:
            rep += "알리샤의 반지 상자(2급) 개봉 결과\n\n"
            break;
        case 3:
            rep += "숨겨진 반지 상자 개봉 결과\n\n"
            break;
        case 4:
            rep += "빛나는 반지 상자 개봉 결과\n\n"
            break;
    }
    var seedrand = Math.random() * 100;
    for(i = 1; i < ringR.length; ++i){
        if(seedrand >= cumulate(ringR, i-1) && seedrand < cumulate(ringR, i)){
            rep += ringN[i];
            break;
        }
    }
    return rep;
};
sd.getSeedMany = function(ind, n, ringN, ringR){
    rep = "";
    switch(parseInt(ind)){
        case 1:
            rep += "알리샤의 반지 상자(1급) " + n + "회 개봉 결과\n\n";
            break;
        case 2:
            rep += "알리샤의 반지 상자(2급) " + n + "회 개봉 결과\n\n"
            break;
        case 3:
            rep += "숨겨진 반지 상자 " + n + "회 개봉 결과\n\n"
            break;
        case 4:
            rep += "빛나는 반지 상자 " + n + "회 개봉 결과\n\n"
            break;
    }
    var seedmcnt = [];
    for(i = 0; i < ringN.length+1; ++i){seedmcnt.push(parseInt(0));}

    for(i = 0; i < n; ++i){
        seedrand = Math.random() * 100;
        seedrand = seedrand.toFixed(6);
        for(var j = 0; j < ringN.length; ++j){
            if(seedrand >= cumulate(ringR, j - 1) && seedrand < cumulate(ringR, j)){
                seedmcnt[j]++;
                break;
            }
        }
    }
    for(i = 0; i < ringN.length; ++i){
        if(seedmcnt[i] != 0){        rep += ringN[i] + " : " + seedmcnt[i] + "개\n";     }
    }
    rep = rep.slice(0, rep.length-1);
    return rep;
};
sd.splitfour = function(rName, rRate, rN, rR, rind){
    var newrN = "";
    var newrR = 0.0;
    if(rind != 4){
        if(rN == "오션 글로우 이어링" || rN == "깨진 상자 조각 5개" || rN == "시드 포인트 보따리 5개" || rN == "경험치 2배 쿠폰(15분) 3개"){
            newrN = rN;
            newrR = rR;
            rName.push(newrN);
            rRate.push(parseFloat(newrR));
        }
        else{
            newrN = "";
            newrR = 0.0;
            for(i = 0; i < 4; ++i){
                newrN = rN + " " + (i+1) + "레벨";
                newrR = rR * (ringlevel[i] / 100);
                newrR = newrR.toFixed(6);
                rName.push(newrN);
                rRate.push(parseFloat(newrR));
            }
        }
    }
    else{
        newrN = "";
        newrR = 0.0;
        newrN = rN + " 3 레벨";
        newrR = rR * 0.75; 
        rName.push(newrN);
        rRate.push(parseFloat(newrR));
        newrN = rN + " 4 레벨";
        newrR = rR * 0.25; 
        rName.push(newrN);
        rRate.push(parseFloat(newrR));
    }
};
sd.getSeedInfo = function(msg){
    rep = "";

    var seedFirst = msg.split(" ")[1];
    if(seedFirst == undefined){ rep = "정보를 알고싶은 층수를 입력하세요.\n\n!시드 (층수) : 더 시드 컨텐츠의 해당 층수의 정보를 보여줍니다."; }
    else{
        var seedRound = parseInt(seedFirst);
        if(isNaN(seedRound)){ rep = seedFirst + " >> 숫자로 층수를 입력해주세요."; }
        else if(seedRound < 1 || seedRound > 50){ rep = "층수는 1이상 50이하의 숫자로 입력해주세요."; }
        else{
            rep = seedRound + "층 정보 : \n" + seedTitle[seedRound];
        }
    }

    return rep;
};

var ringlevel = [41, 28, 20, 11];
var i;
function getSeedcode(sname){
    ret = -1;
    switch(sname){
        case "리스트레인트링":
        case "리스트레인트":
        case "리레링":
        case "리레":
            ret = 0;
            break;
        case "리스트테이커링":
        case "리스트테이커":
        case "리테링":
        case "리테":
            ret = 1;
            break;
        case "크라이시스-HM링":
        case "크라이시스-HM":
        case "크라이시스HM":
        case "HM링":
        case "HM":
            ret = 2;
            break;
        case "웨폰퍼프링":
        case "웨폰퍼프":
        case "웨펖링":
        case "웨펖":
            ret = 3;
            break;
        case "레벨퍼프링":
        case "레벨퍼프":
        case "레펖링":
        case "레펖":
            ret = 4;
            break;
        case "링오브썸":
        case "링썸링":
        case "링썸":
            ret = 5;
            break;
        case "듀라빌리티링":
        case "듀라빌리티":
        case "듀라링":
        case "듀라":
            ret = 6;
            break;
        case "얼티메이덤링":
        case "얼티메이덤":
        case "얼티링":
        case "얼티":
            ret = 7;
            break;
        case "크리데미지링":
        case "크리데미지":
        case "크뎀링":
        case "크뎀":
            ret = 8;
            break;
        case "크라이시스-H링":
        case "크라이시스-H":
        case "크라이시스H링":
        case "크라이시스H":
        case "H링":
        case "H":
            ret = 9;
            break;
        case "크라이시스-M링":
        case "크라이시스-M":
        case "크라이시스M링":
        case "크라이시스M":
        case "M링":
        case "M":
            ret = 10;
            break;
        case "크리디펜스링":
        case "크리디펜스":
        case "크디링":
        case "크디":
            ret = 11;
            break;
        case "스위프트링":
        case "스위프트":
        case "스윞링":
        case "스윞":
            ret = 12;
            break;
        case "헬스컷링":
        case "헬스컷":
        case "헬링":
        case "헬":
            ret = 13;
            break;
        case "마나컷링":
        case "마나컷":
        case "마링":
        case "마나링":
        case "마나":
        case "마컷링":
        case "마컷":
        case "마":
            ret = 14;
            break;
        case "리밋링":
        case "리밋":
            ret = 15;
            break;
        case "실드스와프링":
        case "실드스와프":
        case "실스링":
        case "실스":
            ret = 16;
            break;
        case "크리쉬프트링":
        case "크리쉬프트":
        case "크쉬링":
        case "크쉬":
            ret = 17;
            break;
        case "스탠스쉬프트링":
        case "스탠스쉬프트":
        case "스쉬링":
        case "스쉬":
            ret = 18;
            break;
        case "타워인헨스링":
        case "타워인헨스":
        case "타워링":
        case "타워":
        case "타인링":
        case "타인":
            ret = 19;
            break;
        case "오버패스링":
        case "오버패스":
        case "오버링":
        case "오버":
        case "오패링":
        case "오패":
            ret = 20;
            break;
        case "리플렉티브링":
        case "리플렉티브":
        case "리플링":
        case "리플":
        case "리렉링":
        case "리렉":
            ret = 21;
            break;
        case "버든리프트링":
        case "버든리프트":
        case "버든링":
        case "버든":
        case "버리링":
        case "버리":
            ret = 22;
            break;
        case "리커버디펜스링":
        case "리커버디펜스":
            ret = 23;
            break;
        case "리커버스탠스링":
        case "리커버스탠스":
            ret = 24;
            break;
        case "목록":
            ret = 99;
            break;
        default:
            ret = -1;
            break;
    }
    return ret;
};
function getSeedname(ringInd){
    rep = "";
    switch(ringInd){
        case 0:
            rep = "리스트레인트 링";
            break;
        case 1:
            rep = "리스크테이커 링";
            break;
        case 2:
            rep = "크라이시스-HM링";
            break;
        case 3:
            rep = "웨폰퍼프-S/D/I/L링";
            break;
        case 4:
            rep = "레벨퍼프-S/D/I/L링";
            break;
        case 5:
            rep = "링 오브 썸";
            break;
        case 6:
            rep = "듀라빌리티 링";
            break;
        case 7:
            rep = "얼티메이덤 링";
            break;
        case 8:
            rep = "크리데미지 링";
            break;
        case 9:
            rep = "크라이시스-H링";
            break;
        case 10:
            rep = "크라이시스-M링";
            break;
        case 11:
            rep = "크리디펜스 링";
            break;
        case 12:
            rep = "스위프트 링";
            break;
        case 13:
            rep = "헬스컷 링";
            break;
        case 14:
            rep = "마나컷 링";
            break;
        case 15:
            rep = "리밋 링";
            break;
        case 16:
            rep = "실드스와프 링";
            break;
        case 17:
            rep = "크리쉬프트 링";
            break;
        case 18:
            rep = "스탠스쉬프트 링";
            break;
        case 19:
            rep = "타워인헨스 링";
            break;
        case 20:
            rep = "오버패스 링";
            break;
        case 21:
            rep = "리플렉티브 링";
            break;
        case 22:
            rep = "버든리프트 링";
            break;
        case 23:
            rep = "리커버디펜스 링";
            break;
        case 24:
            rep = "리커버스탠스 링";
            break;
    }
    return rep;
};
function getSeeddesc1(ringInd){
    rep = "";
    switch(ringInd){
        case 0:
            rep = "일정 시간 동안 생성되는 영역 안에서 자신의 공격력과 마력을 증가";
            break;
        case 1:
            rep = "일정 시간 동안 공격력과 마력이 일정량 증가";
            break;
        case 2:
            rep = "자신의 HP와 MP가 모두 일정량 이하로 하락 한 경우 발동";
            break;
        case 3:
            rep = "일정 시간 동안 주무기 공격력의 일부값 만큼 스텟 증가";
            break;
        case 4:
            rep = "일정 시간 동안 현재 캐릭터 레벨의 일정량 만큼 스텟 증가";
            break;
        case 5:
            rep = "일정 시간 동안 총 스탯을 모두 합한 값의 일부만큼 자신의 주스탯이 증가";
            break;
        case 6:
            rep = "일정 시간 동안 최대 HP가 2배로 증가";
            break;
        case 7:
            rep = "일정 시간 유저의 최대 스탯 공격력을 200만으로 고정";
            break;
        case 8:
            rep = "일정 시간 동안 크리티컬 데미지가 증가";
            break;
        case 9:
            rep = "자신의 HP가 일정량 이하로 하락 한 경우 발동";
            break;
        case 10:
            rep = "자신의 MP가 일정량 이하로 하락 한 경우 발동";
            break;
        case 11:
            rep = "일정 시간 동안 자신의 크리티컬 확률의 일정량 만큼 적의 방어율을 무시";
            break;
        case 12:
            rep = "일정 시간 동안 공격 속도가 증가";
            break;
        case 13:
            rep = "일정 시간 동안 최대 HP를 낮추고 보스 몬스터 공격 시 데미지를 증가";
            break;
        case 14:
            rep = "일정 시간 동안 최대 MP를 낮추고 방어율을 일정 수준 무시";
            break;
        case 15:
            rep = "일정 시간 동안 최대 MP를 500으로 고정하고 보스 몬스터 공격 시 데미지를 증가";
            break;
        case 16:
            rep = "공격 시 일정 시간 동안 적의 방어율을 일정량 무시";
            break;
        case 17:
            rep = "일정 시간 동안 크리티컬 확률이 AP를 직접 투자한 주스탯의 일부 값으로 대체";
            break;
        case 18:
            rep = "일정 시간 동안 스탠스 확률이 AP를 직접 투자한 주스탯의 일부 값으로 대체";
            break;
        case 19:
            rep = "The Seed 컨텐츠 이용 중, 특정 스테이지를 클리어 했을 경우";
            break;
        case 20:
            rep = "일정시간동안 공격 시 공격무시 및 공격반사 상태의 적도 피해를 입힐 수 있다.";
            break;
        case 21:
            rep = "일정 시간 동안 자신이 받는 데미지를 일정량 증폭시켜서 반사";
            break;
        case 22:
            rep = "일정 확률로 모든 상태 이상을 해지";
            break;
        case 23:
            rep = "상태 이상에서 회복된 직후 발동하며, 일정 시간 동안 상태 이상 내성이 증가";
            break;
        case 24:
            rep = "상태 이상에서 회복된 직후 발동하며, 일정 시간 동안 스탠스 확률이 증가";
            break;
    }
    return rep;
};
function getSeeddesc2(ringInd){
    rep = "";
    switch(ringInd){
        case 0:
            rep = "영역을 벗어나면 영역이 소멸한다. 쿨타임초기화의 효과를 받지 않는다.";
            break;
        case 1:
            rep = "단, 피격 시 버프가 해제되고 쿨타임초기화의 효과를 받지 않는다.";
            break;
        case 2:
            rep = "MP를 사용하지 않는 직업군은 해당 스킬을 사용할 수 없다.";
            break;
        case 3:
            rep = "재사용 대기시간 초기화의 효과를 받지 않는다.";
            break;
        case 4:
            rep = "재사용 대기시간 초기화의 효과를 받지 않는다.";
            break;
        case 5:
            rep = "제논의 경우 가장 높은 스탯, 데몬어벤져의 경우 HP배수를 곱한 수치";
            break;
        case 6:
            rep = "재사용 대기시간 초기화의 효과를 받지 않는다.";
            break;
        case 7:
            rep = "재사용 대기시간 초기화의 효과를 받지 않는다.";
            break;
        case 8:
            rep = "재사용 대기시간 초기화의 효과를 받지 않는다.";
            break;
        case 9:
            rep = "일정 시간 동안 방어력이 증가";
            break;
        case 10:
            rep = "일정 시간 동안 방어력이 증가";
            break;
        case 11:
            rep = "재사용 대기시간 초기화의 효과를 받지 않는다.";
            break;
        case 12:
            rep = "재사용 대기시간 초기화의 효과를 받지 않는다.";
            break;
        case 13:
            rep = "재사용 대기시간 초기화의 효과를 받지 않는다.";
            break;
        case 14:
            rep = "MP를 사용하지 않는 직업군은 사용할 수 없다.";
            break;
        case 15:
            rep = "MP를 사용하지 않는 직업군은 사용할 수 없다.";
            break;
        case 16:
            rep = "자신의 방어력도 일정량 감소";
            break;
        case 17:
            rep = "재사용 대기시간 초기화의 효과를 받지 않는다.";
            break;
        case 18:
            rep = "재사용 대기시간 초기화의 효과를 받지 않는다.";
            break;
        case 19:
            rep = "일정 비율의 시드 포인트를 추가로 획득할 수 있다.";
            break;
        case 20:
            rep = "재사용 대기시간 초기화의 효과를 받지 않는다.";
            break;
        case 21:
            rep = "재사용 대기시간 초기화의 효과를 받지 않는다.";
            break;
        case 22:
            rep = "재사용 대기시간 초기화의 효과를 받지 않는다.";
            break;
        case 23:
            rep = "재사용 대기시간 초기화의 효과를 받지 않는다.";
            break;
        case 24:
            rep = "재사용 대기시간 초기화의 효과를 받지 않는다.";
            break;
    }
    return rep;
};
function getSeedEffect(ringInd){
    rep = "";
    switch(ringInd){
        case 0:
            rep = "1: HP 1200 소비, 9초 동안 생성되는 영역 안에서 자신의 공격력이 25%, 마력이 25% 증가.\n2: HP 1000 소비, 11초 동안 생성되는 영역 안에서 자신의 공격력이 50%, 마력이 50% 증가.\n3: HP 800 소비, 13초 동안 생성되는 영역 안에서 자신의 공격력이 75%, 마력이 75% 증가.\n4: HP 600 소비, 15초 동안 생성되는 영역 안에서 자신의 공격력이 100%, 마력이 100% 증가.\n재사용 대기시간 180초";
            break;
        case 1:
            rep = "1: HP 1200 소비, 12초 동안 공격력 20%, 마력 20% 증가. 단, 피해 입을 시 버프 해제.\n2: HP 1000 소비, 18초 동안 공격력 30%, 마력 30% 증가. 단, 피해 입을 시 버프 해제.\n3: HP 800 소비, 24초 동안 공격력 40%, 마력 40% 증가. 단, 피해 입을 시 버프 해제.\n4: HP 600 소비, 30초 동안 공격력 50%, 마력 50% 증가. 단, 피해 입을 시 버프 해제.\n재사용 대기시간 180초";
            break;
        case 2:
            rep = "1: 자신의 HP와 MP가 모두 5% 미만일 경우 발동. 9초 동안 공격력과 마력 25% 증가.\n2: 자신의 HP와 MP가 모두 5% 미만일 경우 발동. 11초 동안 공격력과 마력 50% 증가.\n3: 자신의 HP와 MP가 모두 5% 미만일 경우 발동. 13초 동안 공격력과 마력 75% 증가.\n4: 자신의 HP와 MP가 모두 5% 미만일 경우 발동. 15초 동안 공격력과 마력 100% 증가.\n재사용 대기시간 180초";
            break;
        case 3:
            rep = "1: HP 1200 소비, 9초 동안 장착중인 주무기의 기본 공격력의 100%만큼 STR/DEX/INT/LUK 증가. 데몬 어벤져는 해당 수치의 17.5배만큼 HP 증가. (주무기의 공격력과 마력 중 높은 것으로 적용.)\n2: HP 1000 소비, 11초 동안 장착중인 주무기의 기본 공격력의 200%만큼 STR/DEX/INT/LUK 증가. 데몬 어벤져는 해당 수치의 17.5배만큼 HP 증가. (주무기의 공격력과 마력 중 높은 것으로 적용.)\n3: HP 800 소비, 13초 동안 장착중인 주무기의 기본 공격력의 300%만큼 STR/DEX/INT/LUK 증가. 데몬 어벤져는 해당 수치의 17.5배만큼 HP 증가. (주무기의 공격력과 마력 중 높은 것으로 적용.)\n4: HP 600 소비, 15초 동안 장착중인 주무기의 기본 공격력의 400%만큼 STR/DEX/INT/LUK 증가. 데몬 어벤져는 해당 수치의 17.5배만큼 HP 증가. (주무기의 공격력과 마력 중 높은 것으로 적용.)\n재사용 대기시간 180초";
            break;
        case 4:
            rep = "1: HP 1200 소비, 9초 동안 캐릭터 레벨의 90%만큼 STR/DEX/INT/LUK 증가. 데몬 어벤져는 해당 수치의 17.5배만큼 HP 증가.\n2: HP 1000 소비, 11초 동안 캐릭터 레벨의 160%만큼 STR/DEX/INT/LUK 증가. 데몬 어벤져는 해당 수치의 17.5배만큼 HP 증가.\n3: HP 800 소비, 13초 동안 캐릭터 레벨의 230%만큼 STR/DEX/INT/LUK 증가. 데몬 어벤져는 해당 수치의 17.5배만큼 HP 증가.\n4: HP 600 소비, 15초 동안 캐릭터 레벨의 300%만큼 STR/DEX/INT/LUK 증가. 데몬 어벤져는 해당 수치의 17.5배만큼 HP 증가.\n재사용 대기시간 180초";
            break;
        case 5:
            rep = "1: HP 1200 소비, 9초 동안 총 스탯을 모두 합한 값의 1%만큼 자신의 주스탯 증가. 데몬 어벤져는 해당 수치의 17.5배만큼 HP 증가.\n2: HP 1000 소비, 11초 동안 총 스탯을 모두 합한 값의 1%만큼 자신의 주스탯 증가. 데몬 어벤져는 해당 수치의 17.5배만큼 HP 증가.\n3: HP 800 소비, 13초 동안 총 스탯을 모두 합한 값의 2%만큼 자신의 주스탯 증가. 데몬 어벤져는 해당 수치의 17.5배만큼 HP 증가.\n4: HP 600 소비, 15초 동안 총 스탯을 모두 합한 값의 2%만큼 자신의 주스탯 증가. 데몬 어벤져는 해당 수치의 17.5배만큼 HP 증가.\n재사용 대기시간 180초";
            break;
        case 6:
            rep = "1: HP 1200 소비, 12초 동안 HP 100% 증가.\n2: HP 1000 소비, 18초 동안 HP 100% 증가.\n3: HP 800 소비, 24초 동안 HP 100% 증가.\n4: HP 600 소비, 30초 동안 HP 100% 증가.\n재사용 대기시간 180초";
            break;
        case 7:
            rep = "1: HP 1200 소비, 9초 동안 유저의 최대 스탯 공격력을 2000000로 설정.\n2: HP 1000 소비, 11초 동안 유저의 최대 스탯 공격력을 2000000로 설정.\n3: HP 800 소비, 13초 동안 유저의 최대 스탯 공격력을 2000000로 설정.\n4: HP 600 소비, 15초 동안 유저의 최대 스탯 공격력을 2000000로 설정.\n재사용 대기시간 180초";
            break;
        case 8:
            rep = "1: HP 1200 소비, 9초 동안 크리티컬 데미지 7% 증가.\n2: HP 1000 소비, 11초 동안 크리티컬 데미지 14% 증가.\n3: HP 800 소비, 13초 동안 크리티컬 데미지 21% 증가.\n4: HP 600 소비, 15초 동안 크리티컬 데미지 28% 증가.\n재사용 대기시간 180초";
            break;
        case 9:
            rep = "1: 자신의 HP가 5% 이하일 경우 발동. 9초 동안 방어력 4% 증가.\n2: 자신의 HP가 10% 이하일 경우 발동. 11초 동안 방어력 6% 증가.\n3: 자신의 HP가 15% 이하일 경우 발동. 13초 동안 방어력 8% 증가.\n4: 자신의 HP가 20% 이하일 경우 발동. 15초 동안 방어력 10% 증가.\n재사용 대기시간 180초";
            break;
        case 10:
            rep = "1: 자신의 MP가 5% 이하일 경우 발동. 9초 동안 방어력 4% 증가.\n2: 자신의 MP가 10% 이하일 경우 발동. 11초 동안 방어력 6% 증가.\n3: 자신의 MP가 15% 이하일 경우 발동. 13초 동안 방어력 8% 증가.\n4: 자신의 MP가 20% 이하일 경우 발동. 15초 동안 방어력 10% 증가.\n재사용 대기시간 180초";
            break;
        case 11:
            rep = "1: HP 1200 소비, 9초 동안 자신의 크리티컬 확률의 25%만큼 방어율 무시 증가.\n2: HP 1000 소비, 11초 동안 자신의 크리티컬 확률의 50%만큼 방어율 무시 증가.\n3: HP 800 소비, 13초 동안 자신의 크리티컬 확률의 75%만큼 방어율 무시 증가.\n4: HP 600 소비, 15초 동안 자신의 크리티컬 확률의 100%만큼 방어율 무시 증가.\n재사용 대기시간 180초";
            break;
        case 12:
            rep = "1: HP 1200 소비, 9초 동안 공격 속도 2단계 증가.\n2: HP 1000 소비, 11초 동안 공격 속도 2단계 증가.\n3: HP 800 소비, 13초 동안 공격 속도 2단계 증가.\n4: HP 600 소비, 15초 동안 공격 속도 2단계 증가.\n재사용 대기시간 180초";
            break;
        case 13:
            rep = "1: HP 1200 소비, 9초 동안 최대 HP를 70% 낮추고 보스 몬스터 공격 시 데미지 4% 증가.\n2: HP 1000 소비, 11초 동안 최대 HP를 70% 낮추고 보스 몬스터 공격 시 데미지 6% 증가.\n3: HP 800 소비, 13초 동안 최대 HP를 70% 낮추고 보스 몬스터 공격 시 데미지 8% 증가.\n4: HP 600 소비, 15초 동안 최대 HP를 70% 낮추고 보스 몬스터 공격 시 데미지 10% 증가.\n재사용 대기시간 180초";
            break;
        case 14:
            rep = "1: HP 1200 소비, 9초 동안 최대 MP를 70% 낮추고 방어율 4% 무시.\n2: HP 1000 소비, 11초 동안 최대 MP를 70% 낮추고 방어율 6% 무시.\n3: HP 800 소비, 13초 동안 최대 MP를 70% 낮추고 방어율 8% 무시.\n4: HP 600 소비, 15초 동안 최대 MP를 70% 낮추고 방어율 10% 무시.\n재사용 대기시간 180초";
            break;
        case 15:
            rep = "1: HP 1200 소비, 9초 동안 최대 MP를 500로 고정. 보스 몬스터 공격 시 데미지 4% 증가.\n2: HP 1000 소비, 11초 동안 최대 MP를 500로 고정. 보스 몬스터 공격 시 데미지 6% 증가.\n3: HP 800 소비, 13초 동안 최대 MP를 500로 고정. 보스 몬스터 공격 시 데미지 8% 증가.\n4: HP 600 소비, 15초 동안 최대 MP를 500로 고정. 보스 몬스터 공격 시 데미지 10% 증가.\n재사용 대기시간 180초";
            break;
        case 16:
            rep = "1: HP 1200 소비, 공격 시 9초 동안 적의 방어율 20% 무시, 자신의 방어력 -50% 감소.\n2: HP 1000 소비, 공격 시 11초 동안 적의 방어율 30% 무시, 자신의 방어력 -50% 감소.\n3: HP 800 소비, 공격 시 13초 동안 적의 방어율 40% 무시, 자신의 방어력 -50% 감소.\n4: HP 600 소비, 공격 시 15초 동안 적의 방어율 50% 무시, 자신의 방어력 -50% 감소.\n재사용 대기시간 180초";
            break;
        case 17:
            rep = "1: HP 1200 소비, 9초 동안 크리티컬 확률이 주스탯의 9%의 값으로 대체. (스킬 사용 시, 크리티컬 확률이 낮아질 수도 있음)\n2: HP 1000 소비, 11초 동안 크리티컬 확률이 주스탯의 9%의 값으로 대체. (스킬 사용 시, 크리티컬 확률이 낮아질 수도 있음)\n3: HP 800 소비, 13초 동안 크리티컬 확률이 주스탯의 10%의 값으로 대체. (스킬 사용 시, 크리티컬 확률이 낮아질 수도 있음)\n4: HP 600 소비, 15초 동안 크리티컬 확률이 주스탯의 10%의 값으로 대체. (스킬 사용 시, 크리티컬 확률이 낮아질 수도 있음)\n재사용 대기시간 180초";
            break;
        case 18:
            rep = "1: HP 1200 소비, 9초 동안 주스탯의 9% 만큼 스탠스 확률로 대체. (스킬 사용 시, 스탠스 확률이 낮아질 수도 있음)\n2: HP 1000 소비, 11초 동안 주스탯의 9% 만큼 스탠스 확률로 대체. (스킬 사용 시, 스탠스 확률이 낮아질 수도 있음)\n3: HP 800 소비, 13초 동안 주스탯의 10% 만큼 스탠스 확률로 대체. (스킬 사용 시, 스탠스 확률이 낮아질 수도 있음)\n4: HP 600 소비, 15초 동안 주스탯의 10% 만큼 스탠스 확률로 대체. (스킬 사용 시, 스탠스 확률이 낮아질 수도 있음)\n재사용 대기시간 180초";
            break;
        case 19:
            rep = "1: 해저의 탑 특정 스테이지에서 25% 만큼의 시드 포인트 추가 획득\n2: 해저의 탑 특정 스테이지에서 50% 만큼의 시드 포인트 추가 획득\n3: 해저의 탑 특정 스테이지에서 75% 만큼의 시드 포인트 추가 획득\n4: 해저의 탑 특정 스테이지에서 100% 만큼의 시드 포인트 추가 획득\n해저의 탑 7층, 9층, 10층, 13층, 18층, 19층, 20층, 28층, 29층, 30층, 32층, 33층, 38층, 40층, 47층, 48층, 49층, 50층에서 적용";
            break;
        case 20:
            rep = "1: HP 1200 소비, 9초 동안 공격 무시 및 공격 반사 상태의 적에게도 피해를 입힘. 적에게 100%의 데미지로 공격 가능.\n2: HP 1000 소비, 11초 동안 공격 무시 및 공격 반사 상태의 적에게도 피해를 입힘. 적에게 100%의 데미지로 공격 가능.\n3: HP 800 소비, 13초 동안 공격 무시 및 공격 반사 상태의 적에게도 피해를 입힘. 적에게 100%의 데미지로 공격 가능.\n4: HP 600 소비, 15초 동안 공격 무시 및 공격 반사 상태의 적에게도 피해를 입힘. 적에게 100%의 데미지로 공격 가능.\n재사용 대기시간 180초";
            break;
        case 21:
            rep = "1: HP 1200 소비, 9초 동안 자신이 받는 데미지를 600% 증가시켜 반사.\n2: HP 1000 소비, 11초 동안 자신이 받는 데미지를 900% 증가시켜 반사.\n3: HP 800 소비, 13초 동안 자신이 받는 데미지를 1200% 증가시켜 반사.\n4: HP 600 소비, 15초 동안 자신이 받는 데미지를 1500% 증가시켜 반사.\n재사용 대기시간 180초";
            break;
        case 22:
            rep = "1: HP 1200 소비, 85% 확률로 모든 상태 이상 해지 및 사용 후 3초 동안 상태 이상 면역. 상태 이상 중이 아닐 경우에도 사용은 가능하나 혜택은 미적용.\n2: HP 1000 소비, 90% 확률로 모든 상태 이상 해지 및 사용 후 3초 동안 상태 이상 면역. 상태 이상 중이 아닐 경우에도 사용은 가능하나 혜택은 미적용.\n3: HP 800 소비, 95% 확률로 모든 상태 이상 해지 및 사용 후 3초 동안 상태 이상 면역. 상태 이상 중이 아닐 경우에도 사용은 가능하나 혜택은 미적용.\n4: HP 600 소비, 100% 확률로 모든 상태 이상 해지 및 사용 후 3초 동안 상태 이상 면역. 상태 이상 중이 아닐 경우에도 사용은 가능하나 혜택은 미적용.\n재사용 대기시간 180초";
            break;
        case 23:
            rep = "1: 상태 이상에서 회복 된 직후 발동. 9초 동안 상태 이상 내성 10 증가.\n2: 상태 이상에서 회복 된 직후 발동. 11초 동안 상태 이상 내성 20 증가.\n3: 상태 이상에서 회복 된 직후 발동. 13초 동안 상태 이상 내성 30 증가.\n4: 상태 이상에서 회복 된 직후 발동. 15초 동안 상태 이상 내성 40 증가.\n재사용 대기시간 180초";
            break;
        case 24:
            rep = "1: 상태 이상에서 회복 된 직후 발동. 9초 동안 스탠스 확률 10% 증가. (단, 최대치 100)\n2: 상태 이상에서 회복 된 직후 발동. 11초 동안 스탠스 확률 20% 증가. (단, 최대치 100)\n3: 상태 이상에서 회복 된 직후 발동. 13초 동안 스탠스 확률 30% 증가. (단, 최대치 100)\n4: 상태 이상에서 회복 된 직후 발동. 15초 동안 스탠스 확률 40% 증가. (단, 최대치 100)\n재사용 대기시간 180초";
            break;
    }
    return rep;
};
function getSeedImage(ringInd){
    rep = "";
    switch(ringInd){
        case 0:
            rep = "https://i.imgur.com/ynQNblP.png";
            break;
        case 1:
            rep = "https://i.imgur.com/OsqPoYC.png";
            break;
        case 2:
            rep = "https://i.imgur.com/d9jd1Ru.png";
            break;
        case 3:
            rep = "https://i.imgur.com/9pQNlFC.png";
            break;
        case 4:
            rep = "https://i.imgur.com/hhqQIwr.png";
            break;
        case 5:
            rep = "https://i.imgur.com/m9wNTmx.png";
            break;
        case 6:
            rep = "https://i.imgur.com/SU4zVJP.png";
            break;
        case 7:
            rep = "https://i.imgur.com/v6HPZFV.png";
            break;
        case 8:
            rep = "https://i.imgur.com/KsbblwP.png";
            break;
        case 9:
            rep = "https://i.imgur.com/uVHFriR.png";
            break;
        case 10:
            rep = "https://i.imgur.com/chFhA2I.png";
            break;
        case 11:
            rep = "https://i.imgur.com/7ejawk5.png";
            break;
        case 12:
            rep = "https://i.imgur.com/Mlyb9rL.png";
            break;
        case 13:
            rep = "https://i.imgur.com/DIoYjv3.png";
            break;
        case 14:
            rep = "https://i.imgur.com/3Z0here.png";
            break;
        case 15:
            rep = "https://i.imgur.com/AI9cBCf.png";
            break;
        case 16:
            rep = "https://i.imgur.com/pO5PbyP.png";
            break;
        case 17:
            rep = "https://i.imgur.com/ByFEWF6.png";
            break;
        case 18:
            rep = "https://i.imgur.com/17P1CL7.png";
            break;
        case 19:
            rep = "https://i.imgur.com/8EgFwa7.png";
            break;
        case 20:
            rep = "https://i.imgur.com/2QD4Xmz.png";
            break;
        case 21:
            rep = "https://i.imgur.com/1sqQVbl.png";
            break;
        case 22:
            rep = "https://i.imgur.com/dP2OPCr.png";
            break;
        case 23:
            rep = "https://i.imgur.com/orYYBFL.png";
            break;
        case 24:
            rep = "https://i.imgur.com/mgYfWQW.png";
            break;
    }
    return rep;
};
function cumulate(arr, ind) {
    var ret = 0.0;
    for(var ii = 0; ii < ind+1; ++ii){
      ret += arr[ii];
    }
    return ret;
};
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //최댓값은 제외, 최솟값은 포함
};
var seedTitle = [
    "", //0
    "고대 슬라임 100마리 퇴치 혹은 고대 킹슬라임 처치", //1
    "결계의 숫자보다 높은 숫자의 카드를 획득해 결계를 속이기", //2
    "고대 거북이를 퇴치하여 고대 거북의 알 1000개 모으기", //3
    "좌우의 몬스터 수를 퇴치하며 균형 점수 300점 누적하기", //4
    "쉼터 / [The Seed 뉴비]", //5
    "슬라임 300마리 퇴치하기", //6
    "루팡의 바나나를 피하여 꼭대기까지 올라가기", //7
    "화산벌레 100마리 퇴치하기", //8
    "맞는 포탈만을 찾아 다음 층의 입구까지 내려가기", //9
    "보스 스테이지: 거대 거미 퇴치하기", //10
    "플라워 골렘 300마리 퇴치하기", //11
    "장애물과 함정을 피해 다음 층의 입구까지 돌파하기", //12
    "운석을 피하면서 몬스터로부터 마력석을 지키기", //13
    "샷건으로 버섯 박쥐 15마리 사격하기", //14
    "쉼터 / [The Seed 비기너]", //15
    "리게이터 혹은 크로코를 200마리 퇴치하기", //16
    "자신의 주위를 빼고 어두운 상태에서 다음 층의 입구까지 돌파하기", //17
    "상자나 나무를 일반 공격해 코코넛 열매 10개 수확하기", //18
    "플레타를 호위하며 다음 층의 입구까지 돌파하기", //19
    "보스 스테이지: 양철 나무꾼 퇴치하기", //20
    "엘리쟈를 소환하고 퇴치하기", //21
    "구름을 밟고 다음 층의 입구까지 돌파하기", //22
    "투명 발판을 밟아 다음 층의 입구까지 돌파하기", //23
    "배경음악을 듣고 마을 이름 맞추기", //24
    "쉼터 / [The Seed 트레블러]", //25
    "오렌지 슬라임을 퇴치하여 액체를 10개 모은 후 제단을 클릭해 더 많은 오렌지 슬라임을 소환해 오렌지 슬라임 300마리 퇴치하기", //26
    "장애물과 함정을 피해 다음 층의 입구까지 돌파하기", //27
    "도마뱀 굴을 일반 공격으로 공격해 벨라모아와 프릴드를 불러내고 각각 20마리 퇴치하기", //28
    "모래 난쟁이들을 사냥해가면서 모래 결정을 얻은 뒤 오른쪽 나무에 모래 결정을 1~4개 떨궈 모래 바람에 가린 노을을 되찾기", //29
    "보스 스테이지: 겁에 질린 사자 퇴치하기", //30
    "식충 슬라임 200마리 퇴치하기", //31
    "가시 덤불을 밟아 점프하면서 상단부의 블루 고대 슬라임을 모두 퇴치하기", //32
    "오른쪽 가장 아래의 포탈까지 돌파하기", //33
    "하단에서 옐로우 컬리 카우를 퇴치해 옐로우 레더 10개를 모아 상단으로 가는 포탈을 탄 뒤 상단에서 퍼플 컬리 카우를 퇴치해 퍼플 레더 10개 획득하기", //34
    "쉼터 / [The Seed 엑스퍼트]", //35
    "암호에 따라 순서대로 몬스터를 일반 공격하기", //36
    "미요캐츠, 키요, 모래 두더지, 스콜피언 각각 100마리 퇴치하기", //37
    "어둠과 싸우는 자가 제시하는 몬스터를 사냥하며 어둠의 기운 없애기", //38
    "퀴즈광이 내는 퀴즈 모두 맞추기", //39
    "보스 스테이지: 허수아비 퇴치하기", //40
    "장애물을 피해 다음 층의 입구까지 돌파하기", //41
    "몬스터를 각각 30마리씩 퇴치하면서 장애물을 피해 다음 층의 입구까지 돌파하기", //42
    "플레타의 시험으로 장애물을 피해 다음 층의 입구까지 돌파하기", //43
    "장애물을 피해 다음 층의 입구까지 돌파하기", //44
    "쉼터 / [The Seed 마스터]", //45
    "와이번 200마리 퇴치하기", //46
    "\"여ㄱ...ㅡ 내 힘이 닿 ... ㄲ... 길을 알..ㅁ.. 죽... 안 보...\" - 알리샤의 사념", //47
    "길잡이 플레타를 호위하며 투명 발판을 밟으며 다음 층의 입구까지 돌파하기", //48
    "도로시의 분신에게 도로시를 만날 자격이 있는지 시험받기", //49
    "보스 스테이지: 도로시와 토토 퇴치하기"  //50
];
module.exports = sd;