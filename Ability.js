const abil = {};

abil.getAbil = function(msg){
    //!어빌 패시브 1 (상추뎀 7) (크 20)
    var rep = "";

    var firstAbil = msg.split(" ")[1];
    if(firstAbil == undefined){rep = "어빌리티 목록중 하나를 입력하여주세요.\n\n목록 : 보공, 패시브, 다수, 일몹뎀, 상추뎀, 아획, 메획, 크확, 공속, 재사용, 벞지";}
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
            else{
                rep = "첫번째 어빌리티 수치가 입력되지 않았습니다.";
            }
        }
        else if(isNaN(firstAbilnum)){rep = "첫번째 어빌리티 수치가 숫자가 아닙니다.";}
        else if(firstAbilnum < 0 || fnum % 1 != 0){rep = "첫번째 어빌리티 수치는 소수나 음수가 될 수 없습니다.";}
        else{
            var firstAbilcode = this.getAbilcode(firstAbil);
            if(firstAbilcode == -1){rep = firstAbill + " >> 해당 어빌리티는 목록에 없습니다.\n\n목록 : 보공, 패시브, 다수, 일몹뎀, 상추뎀, 아획, 메획, 크확, 공속, 재사용, 벞지"}
            else{
                rep = firstAbilcode + " " + firstAbilnum;
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
            ret = 5;
            break;
        case "메소획득량":
        case "메소획득":
        case "메획":
        case "메소":
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
        legend.push(parseFloat(legendtemp));
    }
};

var gradeRate = [10, 40, 50];
var resetCost = [8000, 11000, 16000];
module.exports = abil;