const abil = {};

abil.getAbil = function(msg){
    //!어빌 패시브 1 (상추뎀 7) (크 20)
    var rep = "";

    var firstAbil = msg.split(" ")[1];
    if(firstAbil == undefined){rep = "어빌리티 목록중 하나와 수치를 입력하여주세요.\n\n목록 : 보공, 패시브, 다수, 일몹뎀, 상추뎀, 아획, 메획, 크확, 공속, 재사용, 벞지";}
    else{
        var fnum = msg.split(" ")[2];
        var firstAbilnum = parseInt(fnum);
        var nameA = [], rareA = [], epicA = [], uniqueA = [], legendA = [];
        getAbilRate1(nameA, rareA, epicA, uniqueA, legendA);
        if(fnum == undefined){
            var tempA = this.getAbilcode(firstAbil);
            if(tempA == 11 || tempA == 12 || tempA == 13 || tempA == 14){
                var temparr = [];
                if(tempA == 11){temparr = rareA; rep += "어빌리티 레어 등급 확률표\n\n"}
                if(tempA == 12){temparr = epicA; rep += "어빌리티 에픽 등급 확률표\n\n"}
                if(tempA == 13){temparr = uniqueA; rep += "어빌리티 유니크 등급 확률표\n\n"}
                if(tempA == 14){temparr = legendA; rep += "어빌리티 레전드리 등급 확률표\n\n"}

                for(i = 0; i < nameA.length; ++i){
                    rep += nameA[i] + " : " + temparr[i] + "%\n";
                }
                rep = rep.slice(0, rep.length-1);
            }
            else if(tempA == -1){ rep = firstAbil + " >> 해당 어빌리티는 목록에 없습니다.\n\n목록 : 보공, 패시브, 다수, 일몹뎀, 상추뎀, 아획, 메획, 크확, 공속, 재사용, 벞지";}
            else{
                rep = "첫번째 어빌리티 수치가 입력되지 않았습니다.";
            }
        }
        else if(isNaN(firstAbilnum)){rep = "첫번째 어빌리티 수치가 숫자가 아닙니다.";}
        else if(firstAbilnum < 0 || fnum % 1 != 0){rep = "첫번째 어빌리티 수치는 소수나 음수가 될 수 없습니다.";}
        else{
            var firstAbilcode = this.getAbilcode(firstAbil);
            if(firstAbilcode == -1){rep = firstAbil + " >> 해당 어빌리티는 목록에 없습니다.\n\n목록 : 보공, 패시브, 다수, 일몹뎀, 상추뎀, 아획, 메획, 크확, 공속, 재사용, 벞지";}
            else{
                var firstAbilname = this.getAbilname(firstAbilcode);
                var firstNum = -1, firstRate = 0.0;
                for(i = 0; i < nameA.length; ++i){
                    if(nameA[i] == firstAbilname){
                        firstNum = i;
                        firstRate = legendA[i];
                    }
                }
                var firstNum2 = -1, firstRate2 = 0.0;
                if(firstAbilnum >= legendB[firstAbilcode][0]){
                    for(i = 0; i < 6; ++i){
                        if(firstAbilnum <= legendB[firstAbilcode][i]){
                            firstNum2 = i;
                            firstRate2 += abilRate[i]; 
                        }
                    }
                }
                if(firstRate2 > 1){firstRate2 = 1.0;}

                if(firstNum2 == -1){
                    rep = "첫번째 줄에서 " + firstAbilname + " 옵션의 해당 수치 " + firstAbilnum + " 이상이 나올 확률이 0입니다. 확인 후 다시 입력해주세요.";
                }
                else{
                    var firstRate3 =  (firstRate * firstRate2).toFixed(3);
                    firstRate2 *= 100;
                    rep = "첫번째 줄에서 " + firstAbilname + " 옵션의 해당 " + firstAbilnum + " 수치 이상 나올 확률은\n\n" + firstRate + "% (해당 옵션이 나올 확률) * " + firstRate2 + "% (해당 수치가 나올 확률) = " + firstRate3 +  "% 입니다.";
                }

                var secondAbil = msg.split(" ")[3];
                if(secondAbil != undefined){
                    var snum = msg.split(" ")[4];
                    var secondAbilnum = parseInt(snum);
                    var secondgrade = -1;
                    if(snum == undefined){
                        rep += "\n\n두번째 어빌리티 수치가 입력되지 않았습니다.";
                    }
                    else if(isNaN(secondAbilnum)){ rep += "\n\n두번째 어빌리티 수치가 숫자가 아닙니다."; }
                    else if(secondAbilnum < 0 || snum % 1 != 0){ rep += "\n\n두번째 어빌리티 수치는 소수나 음수가 될 수 없습니다."; }
                    else{
                        var secondAbilcode = this.getAbilcode(secondAbil);
                        if(secondAbilcode == -1){ rep += "\n\n" + secondAbil + " >> 해당 어빌리티는 목록에 없습니다.\n\n목록 : 보공, 패시브, 다수, 일몹뎀, 상추뎀, 아획, 메획, 크확, 공속, 재사용, 벞지"; }
                        else{
                            var secondAbilname = this.getAbilname(secondAbilcode);
                            var secondNum = -1, secondRate = 0.0;
                            for(i = 0; i < nameA.length; ++i){
                                if(nameA[i] == secondAbilname){
                                    secondNum = i;
                                    secondRate = uniqueA[i];
                                }
                            }
                            var secondNum2 = -1; secondRate2 = 0.0;
                            if(secondAbilnum >= uniqueB[secondAbilcode][0]){
                                for(i = 0; i < 6; ++i){
                                    if(secondAbilnum <= uniqueB[secondAbilcode][i]){
                                        secondNum2 = i;
                                        secondRate2 += abilRate[i];
                                    }
                                }
                            }
                            if(secondRate2 > 1){secondRate2 = 1.0; }
                            if(secondNum2 != -1){
                                var secondRate3 = (secondRate * secondRate2).toFixed(3);
                                secondRate2 *= 100;
                                secondgrade = 0;
                                rep += "\n\n두번째 줄에서 " + secondAbilname + " 옵션의 해당 " + secondAbilnum + " 수치 이상 나올 확률은\n\n" + secondRate + "% (해당 옵션이 나올 확률) * " + secondRate2 + "% (해당 수치가 나올 확률) = " + secondRate3 + "% 입니다.";
                                rep += "\n해당 옵션은 유니크 옵션이며 해당 등급 확률은 " + gradeRate[secondgrade] + "% 입니다.";
                            }
                            else{
                                secondNum = -1, secondRate = 0.0;
                                for(i = 0; i < nameA.length; ++i){
                                    if(nameA[i] == secondAbilname){
                                        secondNum = i;
                                        secondRate = epicA[i];
                                    }
                                }
                                secondNum2 = -1; secondRate2 = 0.0;
                                if(secondAbilnum >= epicB[secondAbilcode][0]){
                                    for(i = 0; i < 6; ++i){
                                        if(secondAbilnum <= epicB[secondAbilcode][i]){
                                            secondNum2 = i;
                                            secondRate2 += abilRate[i];
                                        }
                                    }
                                }
                                if(secondRate2 > 1){secondRate2 = 1.0; }
                                if(secondNum2 != -1){
                                    secondRate3 = (secondRate * secondRate2).toFixed(3);
                                    secondRate2 *= 100;
                                    secondgrade = 1;
                                    rep += "\n\n두번째 줄에서 " + secondAbilname + " 옵션의 해당 " + secondAbilnum + " 수치 이상 나올 확률은\n\n" + secondRate + "% (해당 옵션이 나올 확률) * " + secondRate2 + "% (해당 수치가 나올 확률) = " + secondRate3 + "% 입니다.";
                                    rep += "\n해당 옵션은 에픽 옵션이며 해당 등급 확률은 " + gradeRate[secondgrade] + "% 입니다.";
                                }
                                else{
                                    secondNum = -1, secondRate = 0.0;
                                    for(i = 0; i < nameA.length; ++i){
                                        if(nameA[i] == secondAbilname){
                                            secondNum = i;
                                            secondRate = rareA[i];
                                        }
                                    }
                                    secondNum2 = -1; secondRate2 = 0.0;
                                    if(secondAbilnum >= rareB[secondAbilcode][0]){
                                        for(i = 0; i < 6; ++i){
                                            if(secondAbilnum <= rareB[secondAbilcode][i]){
                                                secondNum2 = i;
                                                secondRate2 += abilRate[i];
                                            }
                                        }
                                    }
                                    if(secondRate2 > 1){secondRate2 = 1.0; }
                                    if(secondNum2 != -1){
                                        secondRate3 = (secondRate * secondRate2).toFixed(3);
                                        secondRate2 *= 100;
                                        secondgrade = 2;
                                        rep += "\n\n두번째 줄에서 " + secondAbilname + " 옵션의 해당 " + secondAbilnum + " 수치 이상 나올 확률은\n\n" + secondRate + "% (해당 옵션이 나올 확률) * " + secondRate2 + "% (해당 수치가 나올 확률) = " + secondRate3 + "% 입니다.";
                                        rep += "\n해당 옵션은 레어 옵션이며 해당 등급 확률은 " + gradeRate[secondgrade] + "% 입니다.";
                                    }
                                    else{
                                        rep += "\n\n두번째 줄에서 " + secondAbilname + " 옵션의 해당 " + secondAbilnum + " 수치 이상 나올 확률이 0입니다. 확인 후 다시 입력해주세요.";
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    return rep;
};
abil.getAbilcode = function(abil){
    var ret = -1;
    switch(abil){
        case "보공":
        case "보뎀":
        case "보스공격력":
        case "보스데미지":
            ret = 0;
            break;
        case "패시브":
        case "패십":
        case "패":
        case "패시브스킬":
        case "패시브스킬레벨":
        case "패시브레벨":
            ret = 1;
            break;
        case "다수":
            ret = 2;
            break;
        case "일몹뎀":
        case "일몹":
        case "일반몹뎀":
        case "일반몬스터데미지":
            ret = 3;
            break;
        case "상추뎀":
        case "상태이상":
            ret = 4;
            break;
        case "아이템드롭률":
        case "아이템드랍률":
        case "드롭률":
        case "드랍률":
        case "드롭":
        case "드랍":
        case "드":
        case "아획":
        case "아":
            ret = 5;
            break;
        case "메소획득량":
        case "메소획득":
        case "메획":
        case "메소":
        case "메":
            ret = 6;
            break;
        case "크리티컬확률":
        case "크확":
        case "크리":
        case "크리티컬":
            ret = 7;
            break;
        case "공격속도":
        case "공속":
            ret = 8;
            break;
        case "재사용":
        case "쿨초":
            ret = 9;
            break;
        case "벞지":
        case "버프지속시간":
        case "버프지속":
        case "버프스킬지속시간":
        case "버프":
            ret = 10;
            break;
        case "레어":
            ret = 11;
            break;
        case "에픽":
            ret = 12;
            break;
        case "유니크":
        case "유닉":
        case "유닠":
            ret = 13;
            break;
        case "레전드리":
        case "레전":
            ret = 14;
            break;
    }
    return ret;
};
abil.getAbilname = function(abilcode){
    rep = "";
    switch(abilcode){
        case 0:
            rep = "보스 몬스터 공격 시 데미지 % 증가";
            break;
        case 1:
            rep = "패시브 스킬 레벨 증가";
            break;
        case 2:
            rep = "다수 공격 스킬의 공격 대상 증가";
            break;
        case 3:
            rep = "일반 몬스터 공격 시 데미지 % 증가";
            break;
        case 4:
            rep = "상태 이상에 걸린 대상 공격 시 데미지 % 증가";
            break;
        case 5:
            rep = "아이템 드롭률 % 증가";
            break;
        case 6:
            rep = "메소 획득량 % 증가";
            break;
        case 7:
            rep = "크리티컬 확률 % 증가";
            break;
        case 8:
            rep = "공격 속도 단계 증가";
            break;
        case 9:
            rep = "스킬 사용 시 % 확률로 재사용 대기시간이 미적용";
            break;
        case 10:
            rep = "버프 스킬의 지속 시간 % 증가";
            break;
    }
    return rep;
};

function getAbilRate1(name, rare, epic, unique, legend){
    var dataAbil1 = org.jsoup.Jsoup.connect("https://maplestory.nexon.com/Guide/OtherProbability/ability/reputevalue").get();
    dataAbil1 = dataAbil1.toString();
    dataAbil1 = dataAbil1.split("옵션 등급별 확률")[1].split("<tbody>")[1].split("</tbody")[0];
    for(var i = 1; i < dataAbil1.split("<tr>").length; ++i){
        var Abiltemp = dataAbil1.split("<tr>")[i].split("</tr>")[0];
        var nametemp = Abiltemp.split("<td>")[1].split("</td>")[0];
        var raretemp = Abiltemp.split("<td>")[2].split("</td>")[0];
        var epictemp = Abiltemp.split("<td>")[3].split("</td>")[0];
        var uniquetemp = Abiltemp.split("<td>")[4].split("</td>")[0];
        var legendtemp = Abiltemp.split("<td>")[5].split("</td>")[0];

        name.push(nametemp);
        if(raretemp == "-"){rare.push(0.0);}else{rare.push(parseFloat(raretemp));}
        if(epictemp == "-"){epic.push(0.0);}else{epic.push(parseFloat(epictemp));}
        if(uniquetemp == "-"){unique.push(0.0);}else{unique.push(parseFloat(uniquetemp));}
        if(legendtemp == "-"){legend.push(0.0);}else{legend.push(parseFloat(legendtemp));}
    }
};

var legendB = [
    [15, 16, 17, 18, 19, 20],   //보공 0
    [1, 1, 1, 1, 1, 1],         //패시브 1
    [1, 1, 1, 1, 1, 1],         //다수 2
    [9, 9, 10, 10, 10, 10],     //일몹뎀 3
    [9, 9, 10, 10, 10, 10],     //상추뎀 4
    [18, 18, 19, 19, 20, 20],   //아획 5
    [18, 18, 19, 19, 20, 20],   //메획 6
    [25, 26, 27, 28, 29, 30],   //크확 7
    [1, 1, 1, 1, 1, 1],         //공속 8
    [15, 16, 17, 18, 19, 20],   //재사용 9
    [44, 45, 47, 48, 49, 50]    //벞지 10
];  
var uniqueB = [
    [5, 6, 7, 8, 9, 10],   //보공 0
    [0, 0, 0, 0, 0, 0],         //패시브 1
    [0, 0, 0, 0, 0, 0],         //다수 2
    [7, 7, 7, 7, 8, 8],     //일몹뎀 3
    [7, 7, 7, 7, 8, 8],     //상추뎀 4
    [13, 13, 14, 14, 15, 15],   //아획 5
    [13, 13, 14, 14, 15, 15],   //메획 6
    [15, 16, 17, 18, 19, 20],   //크확 7
    [0, 0, 0, 0, 0, 0],         //공속 8
    [5, 6, 7, 8, 9, 10],   //재사용 9
    [32, 33, 34, 35, 37, 38]    //벞지 10
];
var epicB = [
    [0, 0, 0, 0, 0, 0],   //보공 0
    [0, 0, 0, 0, 0, 0],         //패시브 1
    [0, 0, 0, 0, 0, 0],         //다수 2
    [4, 4, 5, 5, 5, 5],     //일몹뎀 3
    [4, 4, 5, 5, 5, 5],     //상추뎀 4
    [8, 8, 9, 9, 10, 10],   //아획 5
    [8, 8, 9, 9, 10, 10],   //메획 6
    [5, 6, 7, 8, 9, 10],   //크확 7
    [0, 0, 0, 0, 0, 0],         //공속 8
    [0, 0, 0, 0, 0, 0],   //재사용 9
    [19, 20, 22, 23, 24, 25]    //벞지 10
];
var rareB = [
    [0, 0, 0, 0, 0, 0],   //보공 0
    [0, 0, 0, 0, 0, 0],         //패시브 1
    [0, 0, 0, 0, 0, 0],         //다수 2
    [2, 2, 2, 2, 3, 3],     //일몹뎀 3
    [2, 2, 2, 2, 3, 3],     //상추뎀 4
    [3, 3, 4, 4, 5, 5],   //아획 5
    [3, 3, 4, 4, 5, 5],   //메획 6
    [0, 0, 0, 0, 0, 0],   //크확 7
    [0, 0, 0, 0, 0, 0],         //공속 8
    [0, 0, 0, 0, 0, 0],   //재사용 9
    [7, 8, 9, 10, 12, 13]    //벞지 10
];

var gradeRate = [10, 40, 50];
var abilRate = [0.2, 0.2, 0.2, 0.15, 0.15, 0.1];
var resetCost = [8000, 11000, 16000];
module.exports = abil;