const fa = {};

fa.getFarm = function(msg){
    var rep = "";
    var farmOper1 = msg.split(" ")[1];
    if(farmOper1 == undefined){ rep = "농장 명령어를 입력하세요.\n\n명령어 : 조합식, 검색, 목록\n\n조합식 (몬스터이름) : 해당 몬스터의 조합식이나 해당 몬스터를 재료로 하는 조합식을 보여줍니다.\n검색 (몬스터이름) : 띄어쓰기를 하지 않은 몬스터이름 또는 줄임말, 별명의 정확한 몬스터 이름을 보여줍니다.\n목록 (몬스터이름) : 해당 몬스터를 보유하고 있는 농장의 마리수 기준 TOP5를 농장명, 마리수, 유효기간을 보여줍니다.";}
    else{
        if(farmOper1 == "조합식"){
            var farmMonname = msg.slice(8, msg.length);
            if(farmMonname == undefined){ rep = "조합식을 알고싶은 몬스터 이름을 입력하세요.";}
            else{
                var dFarm = getFarmfomula(farmMonname);
                var jFarm = JSON.parse(dFarm);
                var farmlen = jFarm.length;

                for(var i = 0; i < farmlen; ++i){
                    if(jFarm[i].type == "child"){
                        rep += jFarm[i].child + " (" + jFarm[i].c_grade + ") [" + jFarm[i].c_effect + " " + jFarm[i].c_effect_value + "] =\n";
                        rep += jFarm[i].mom + " (" + jFarm[i].m_species + " " + jFarm[i].m_grade + ") + \n";
                        rep += jFarm[i].dad + " (" + jFarm[i].d_species + " " + jFarm[i].d_grade + ")";
                    }
                    else{
                        if(jFarm[i].mom == farmMonname){
                            rep += jFarm[i].mom + " (" + jFarm[i].m_species + " " + jFarm[i].m_grade + ") + \n";
                            rep += jFarm[i].dad + " (" + jFarm[i].d_species + " " + jFarm[i].d_grade + ")\n";                    
                        }
                        else{
                            rep += jFarm[i].dad + " (" + jFarm[i].d_species + " " + jFarm[i].d_grade + ") + \n";
                            rep += jFarm[i].mom + " (" + jFarm[i].m_species + " " + jFarm[i].m_grade + ")\n";
                        }
                        rep += "= " + jFarm[i].child + " (" + jFarm[i].c_grade + ") [" + jFarm[i].c_effect + " " + jFarm[i].c_effect_value + "]";
                    }
                    rep += "\n\n";
                }
                if(rep.length > 2){
                rep = rep.slice(0, rep.length-2);
                }
                else{
                    rep = "해당 몬스터는 조합식이 검색되지 않았습니다.";
                }
            }
        }
        else if(farmOper1 == "검색"){
            farmMonname = msg.split(" ")[2];
            if(farmMonname == undefined){ rep = "검색하고 싶은 몬스터 이름을 입력하세요.";}
            else{
                dFarm = getFarmSearch(farmMonname);
                if(dFarm == "false"){ rep = "검색결과가 없거나 띄어쓰기가 포함된 이름을 검색하셨습니다. 띄어쓰기없이 입력해주세요.";}
                else{
                    rep = farmMonname + " 에 대한 검색 결과 : [" + dFarm + "]";
                }
            }
        }
        else if(farmOper1 == "목록"){
            var nameA = [], cntA = [], dateA = [];
            farmMonname = msg.slice(7, msg.length);
            if(farmMonname == undefined){ rep = "목록을 알고싶은 몬스터 이름을 입력하세요.";}
            else{
                var farmchk = getFarmList(farmMonname, nameA, cntA, dateA);
                if(farmchk == "error"){ rep = "몬스터 이름이 잘못되었습니다. 확인 후 다시 입력해주세요.";}
                else{
                    rep = farmMonname + " 보유 농장 목록(보유 수 기준 TOP 5)\n\n";
                    var farmN = nameA.length;
                    for(i = 0; i < farmN; ++i){
                        rep += "[농장명] : " + nameA[i];
                        rep += " [마리수] : " + cntA[i];
                        rep += " [유효기간] : " + dateA[i];
                        rep += "\n";
                    }
                    rep = rep.slice(0, rep.length-1);
                }
            }
        }
        else{
            rep = "명령어가 잘못되었습니다. 확인 후 다시 입력해주세요.\n\n명령어 : 조합식, 검색, 목록\n\n조합식 (몬스터이름) : 해당 몬스터의 조합식이나 해당 몬스터를 재료로 하는 조합식을 보여줍니다.\n검색 (몬스터이름) : 띄어쓰기를 하지 않은 몬스터이름 또는 줄임말, 별명의 정확한 몬스터 이름을 보여줍니다.\n목록 (몬스터이름) : 해당 몬스터를 보유하고 있는 농장의 마리수 기준 TOP5를 농장명, 마리수, 유효기간을 보여줍니다.";
        }
    }



    return rep;
};

function getFarmfomula(monname){
    var datafarm = org.jsoup.Jsoup.connect("http://wachan.me/farm_sex.php").data("monster", monname).ignoreHttpErrors(true).ignoreContentType(true).post().text();
    datafarm = datafarm.toString();

    return datafarm;
};
function getFarmSearch(monname){
    datafarm = org.jsoup.Jsoup.connect("http://wachan.me/farm_monster.php").data("monster", monname).ignoreHttpErrors(true).ignoreContentType(true).post().text();
    datafarm = datafarm.toString();

    return datafarm;
}
function getFarmList(monname, namearr, cntarr, datearr){
    try{
    datafarm = org.jsoup.Jsoup.connect("https://meso.kr/monster.php?n=" + monname).get();
    datafarm = datafarm.toString();
    datafarm = datafarm.split("<tbody>")[1].split("</tbody>")[0];
    var farmnum = datafarm.split("<tr>").length;
    for(i = 1; i < farmnum; ++i){
        var farmtemp = datafarm.split("<tr>")[i].split("</tr>")[0];
        var nametemp = farmtemp.split("</button> ")[1].split("</b>")[0];
        var cnttemp = farmtemp.split("<td>")[1].split("</td>")[0];
        var datetemp = farmtemp.split("<td>")[2].split("</td>")[0];
        
        namearr.push(nametemp);
        cntarr.push(cnttemp);
        datearr.push(datetemp);
    }
    } catch(error){
        namearr.push(error);
        return "error";
    }
    return farmnum;
}

module.exports = fa;