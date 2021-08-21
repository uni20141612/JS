const add = {};

add.addgetResult = function (addition, addLevel, addList, addResult){
    var addSTR = 0, addDEX = 0, addINT = 0, addLUK = 0, addHP = 0, addMP = 0, addAll = 0, addATK = 0, addMagic = 0, addMove = 0, addJump = 0, addDEF = 0, addDR = 0;
  
    if(addLevel == 150){
      for(var i = 0; i < addList.length; ++i){
      var addList_one = addList[i];
      switch(addList_one){
        case 0:
          addSTR += add150[addition[i] + (5 * addList_one)];
          break;
        case 1:
          addDEX += add150[addition[i] + (5 * addList_one)];
          break;
        case 2:
          addINT += add150[addition[i] + (5 * addList_one)];
          break;
        case 3:
          addLUK += add150[addition[i] + (5 * addList_one)];
          break;
        case 4:
          addSTR += add150[addition[i] + (5 * addList_one)];
          addDEX += add150[addition[i] + (5 * addList_one)];
          break;
        case 5:
          addSTR += add150[addition[i] + (5 * addList_one)];
          addINT += add150[addition[i] + (5 * addList_one)];
          break;
        case 6:        
          addSTR += add150[addition[i] + (5 * addList_one)];
          addLUK += add150[addition[i] + (5 * addList_one)];
          break;
        case 7:
          addDEX += add150[addition[i] + (5 * addList_one)];
          addINT += add150[addition[i] + (5 * addList_one)];
          break;
        case 8:
          addDEX += add150[addition[i] + (5 * addList_one)];
          addLUK += add150[addition[i] + (5 * addList_one)];
          break;
        case 9:        
          addINT += add150[addition[i] + (5 * addList_one)];
          addLUK += add150[addition[i] + (5 * addList_one)];
          break;
        case 10:
          addHP += add150[addition[i] + (5 * addList_one)];
          break;
        case 11:
          addMP += add150[addition[i] + (5 * addList_one)];
          break;
        case 12:
          addAll += add150[addition[i] + (5 * addList_one)];
          break;
        case 13:
          addATK += add150[addition[i] + (5 * addList_one)];
          break;
        case 14:
          addMagic += add150[addition[i] + (5 * addList_one)];
          break;
        case 15:
          addMove += add150[addition[i] + (5 * addList_one)];
          break;
        case 16:
          addJump += add150[addition[i] + (5 * addList_one)];
          break;
        case 17:
          addDEF += add150[addition[i] + (5 * addList_one)];
          break;
        case 18:
          addDR += add150[addition[i] + (5 * addList_one)];
          break;
      }
    }
    }
    else if(addLevel == 160){
    for(i = 0; i < addList.length; ++i){
      addList_one = addList[i];
      switch(addList_one){
        case 0:
          addSTR += add160[addition[i] + (5 * addList_one)];
          break;
        case 1:
          addDEX += add160[addition[i] + (5 * addList_one)];
          break;
        case 2:
          addINT += add160[addition[i] + (5 * addList_one)];
          break;
        case 3:
          addLUK += add160[addition[i] + (5 * addList_one)];
          break;
        case 4:
          addSTR += add160[addition[i] + (5 * addList_one)];
          addDEX += add160[addition[i] + (5 * addList_one)];
          break;
        case 5:
          addSTR += add160[addition[i] + (5 * addList_one)];
          addINT += add160[addition[i] + (5 * addList_one)];
          break;
        case 6:        
          addSTR += add160[addition[i] + (5 * addList_one)];
          addLUK += add160[addition[i] + (5 * addList_one)];
          break;
        case 7:
          addDEX += add160[addition[i] + (5 * addList_one)];
          addINT += add160[addition[i] + (5 * addList_one)];
          break;
        case 8:
          addDEX += add160[addition[i] + (5 * addList_one)];
          addLUK += add160[addition[i] + (5 * addList_one)];
          break;
        case 9:        
          addINT += add160[addition[i] + (5 * addList_one)];
          addLUK += add160[addition[i] + (5 * addList_one)];
          break;
        case 10:
          addHP += add160[addition[i] + (5 * addList_one)];
          break;
        case 11:
          addMP += add160[addition[i] + (5 * addList_one)];
          break;
        case 12:
          addAll += add160[addition[i] + (5 * addList_one)];
          break;
        case 13:
          addATK += add160[addition[i] + (5 * addList_one)];
          break;
        case 14:
          addMagic += add160[addition[i] + (5 * addList_one)];
          break;
        case 15:
          addMove += add160[addition[i] + (5 * addList_one)];
          break;
        case 16:
          addJump += add160[addition[i] + (5 * addList_one)];
          break;
        case 17:
          addDEF += add160[addition[i] + (5 * addList_one)];
          break;
        case 18:
          addDR += add160[addition[i] + (5 * addList_one)];
          break;
      }
    }
    }
    else if(addLevel == 200){
    for(i = 0; i < addList.length; ++i){
      addList_one = addList[i];
      switch(addList_one){
        case 0:
          addSTR += add200[addition[i] + (5 * addList_one)];
          break;
        case 1:
          addDEX += add200[addition[i] + (5 * addList_one)];
          break;
        case 2:
          addINT += add200[addition[i] + (5 * addList_one)];
          break;
        case 3:
          addLUK += add200[addition[i] + (5 * addList_one)];
          break;
        case 4:
          addSTR += add200[addition[i] + (5 * addList_one)];
          addDEX += add200[addition[i] + (5 * addList_one)];
          break;
        case 5:
          addSTR += add200[addition[i] + (5 * addList_one)];
          addINT += add200[addition[i] + (5 * addList_one)];
          break;
        case 6:        
          addSTR += add200[addition[i] + (5 * addList_one)];
          addLUK += add200[addition[i] + (5 * addList_one)];
          break;
        case 7:
          addDEX += add200[addition[i] + (5 * addList_one)];
          addINT += add200[addition[i] + (5 * addList_one)];
          break;
        case 8:
          addDEX += add200[addition[i] + (5 * addList_one)];
          addLUK += add200[addition[i] + (5 * addList_one)];
          break;
        case 9:        
          addINT += add200[addition[i] + (5 * addList_one)];
          addLUK += add200[addition[i] + (5 * addList_one)];
          break;
        case 10:
          addHP += add200[addition[i] + (5 * addList_one)];
          break;
        case 11:
          addMP += add200[addition[i] + (5 * addList_one)];
          break;
        case 12:
          addAll += add200[addition[i] + (5 * addList_one)];
          break;
        case 13:
          addATK += add200[addition[i] + (5 * addList_one)];
          break;
        case 14:
          addMagic += add200[addition[i] + (5 * addList_one)];
          break;
        case 15:
          addMove += add200[addition[i] + (5 * addList_one)];
          break;
        case 16:
          addJump += add200[addition[i] + (5 * addList_one)];
          break;
        case 17:
          addDEF += add200[addition[i] + (5 * addList_one)];
          break;
        case 18:
          addDR += add200[addition[i] + (5 * addList_one)];
          break;
      }
    }
    }
  
    if(addSTR != 0){
      addResult += "STR : +";
      addResult += addSTR;
      addResult += "\n";
    }
    if(addDEX != 0){
      addResult += "DEX : +";
      addResult += addDEX;
      addResult += "\n";
    }
    if(addINT != 0){
      addResult += "INT : +";
      addResult += addINT;
      addResult += "\n";
    }
    if(addLUK != 0){
      addResult += "LUK : +";
      addResult += addLUK;
      addResult += "\n";
    }
    if(addHP != 0){
      addResult += "최대 HP : +";
      addResult += addHP;
      addResult += "\n";
    }
    if(addMP != 0){
      addResult += "최대 MP : +";
      addResult += addMP;
      addResult += "\n";
    }
    if(addATK != 0){
      addResult += "공격력 : +";
      addResult += addATK;
      addResult += "\n";
    }
    if(addMagic != 0){
      addResult += "마력 : +";
      addResult += addMagic;
      addResult += "\n";
    }
    if(addDEF != 0){
      addResult += "방어력 : +";
      addResult += addDEF;
      addResult += "\n";
    }
    if(addMove != 0){
      addResult += "이동속도 : +";
      addResult += addMove;
      addResult += "\n";
    }
    if(addJump != 0){
      addResult += "점프력 : +";
      addResult += addJump;
      addResult += "\n";
    }
    if(addAll != 0){
      addResult += "올스탯 : +";
      addResult += addAll;
      addResult += "%\n";
    }
    if(addDR != 0){
      addResult += "착용 레벨 감소 : ";
      addResult += addDR;
      addResult += "\n";
    }
    return addResult;
};
add.addEternal = function (addition){  
    for(var i = 0; i < 4; ++i){
      var ranA = getRandomInt(1, 101);
  
      if(ranA < 30){ addition.push(1);}
      else if(ranA >= 30 && ranA < 75){ addition.push(2);}
      else if(ranA >= 75 && ranA < 100){ addition.push(3);}
      else {addition.push(4);}
    }
};
add.addStrong = function (addition){  
    for(var i = 0; i < 4; ++i){
      var ranA = getRandomInt(1, 101);
  
      if(ranA < 21){ addition.push(0);}
      else if(ranA >= 21 && ranA < 51){ addition.push(1);}
      else if(ranA >= 51 && ranA < 87){ addition.push(2);}
      else {addition.push(3);}
    }
};
add.isSameadd = function (n, addList){
    for(var i = 0; i < addList.length; ++i){
      if(n === addList[i]){
        return true;
      }
    }
    return false;
};
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //최댓값은 제외, 최솟값은 포함
}
var add150 = [
    24, 32, 40, 48, 56, //STR 0-4
    24, 32, 40, 48, 56, //DEX 5-9
    24, 32, 40, 48, 56, //INT 10-14
    24, 32, 40, 48, 56, //LUK 15-19
    12, 16, 20, 24, 28, //STR + DEX 20-24
    12, 16, 20, 24, 28, //STR + INT 25-29
    12, 16, 20, 24, 28, //STR + LUK 30-34
    12, 16, 20, 24, 28, //DEX + INT 35-39
    12, 16, 20, 24, 28, //DEX + LUK 40-44
    12, 16, 20, 24, 28, //INT + LUK 45-49
    1350, 1800, 2250, 2700, 3150, //HP 50-54
    1350, 1800, 2250, 2700, 3150, //MP 55-59
    3, 4, 5, 6, 7,  //ALLStat 60-64
    3, 4, 5, 6, 7,  //ATK 65-69
    3, 4, 5, 6, 7,  //Magic 70-74
    3, 4, 5, 6, 7,  //Move 75-79
    3, 4, 5, 6, 7,  //Jump 80-84
    24, 32, 40, 48, 56, //DEF 85-89
    -15, -20, -25, -30, -35 //Decrease Restrict 90-94
  ];
var add160 = [
    27, 36, 45, 54, 63, //STR 0-4
    27, 36, 45, 54, 63, //DEX 5-9
    27, 36, 45, 54, 63, //INT 10-14
    27, 36, 45, 54, 63, //LUK 15-19
    15, 20, 25, 30, 35, //STR + DEX 20-24
    15, 20, 25, 30, 35, //STR + INT 25-29
    15, 20, 25, 30, 35, //STR + LUK 30-34
    15, 20, 25, 30, 35, //DEX + INT 35-39
    15, 20, 25, 30, 35, //DEX + LUK 40-44
    15, 20, 25, 30, 35, //INT + LUK 45-49
    1440, 1920, 2400, 2880, 3360, //HP 50-54
    1440, 1920, 2400, 2880, 3360, //MP 55-59
    3, 4, 5, 6, 7,  //ALLStat 60-64
    3, 4, 5, 6, 7,  //ATK 65-69
    3, 4, 5, 6, 7,  //Magic 70-74
    3, 4, 5, 6, 7,  //Move 75-79
    3, 4, 5, 6, 7,  //Jump 80-84
    27, 36, 45, 54, 63, //DEF 85-89
    -15, -20, -25, -30, -35 //Decrease Restrict 90-94
];
var add200 = [
    33, 44, 55, 66, 77, //STR 0-4
    33, 44, 55, 66, 77, //DEX 5-9
    33, 44, 55, 66, 77, //INT 10-14
    33, 44, 55, 66, 77, //LUK 15-19
    18, 24, 30, 36, 42, //STR + DEX 20-24
    18, 24, 30, 36, 42, //STR + INT 25-29
    18, 24, 30, 36, 42, //STR + LUK 30-34
    18, 24, 30, 36, 42, //DEX + INT 35-39
    18, 24, 30, 36, 42, //DEX + LUK 40-44
    18, 24, 30, 36, 42, //INT + LUK 45-49
    1800, 2400, 3000, 3600, 4200, //HP 50-54
    1800, 2400, 3000, 3600, 4200, //MP 55-59
    3, 4, 5, 6, 7,  //ALLStat 60-64
    3, 4, 5, 6, 7,  //ATK 65-69
    3, 4, 5, 6, 7,  //Magic 70-74
    3, 4, 5, 6, 7,  //Move 75-79
    3, 4, 5, 6, 7,  //Jump 80-84
    33, 44, 55, 66, 77, //DEF 85-89
    -15, -20, -25, -30, -35 //Decrease Restrict 90-94
];
module.exports = add;