
function Jari(level){
 var ret = "";
 if(level < 10000){
   ret = level + "";
 }
 else if(level < 100000000 && level >= 10000)
 {
   ret = parseInt(level / 10000) + "만 " + parseInt(level % 10000);
 }
 else if(level < 1000000000000 && level >= 100000000)
 {
   ret = parseInt(level / 100000000) + "억 " + parseInt((level % 100000000) / 10000) + "만 " + level % 10000;
 }
 else if(level < 10000000000000000 & level >= 1000000000000)
 {
   ret = parseInt(level / 1000000000000) + "조 " + parseInt((level % 1000000000000) / 100000000) + "억 " + parseInt((level % 100000000) / 10000) + "만 " + level % 10000;
 }
 else if(level < 100000000000000000000 & level >= 1000000000000)
 {
     ret = parseInt(level / 10000000000000000) + "경 " + parseInt((level % 10000000000000000) / 1000000000000) + "조 " + parseInt((level % 1000000000000) / 100000000) + "억 " + parseInt((level % 100000000) / 10000) + "만 " + level % 10000; 
 }
 else{
   ret = level;
 }
 return ret;
}


function Jari2(level){
  var ret = "";
  if(level < 10000){
    ret = level + "";
  }
  else if(level < 100000000 && level >= 10000)
  {
    ret = parseInt(level / 10000) + "만 " + parseInt(level % 10000);
  }
  else if(level < 1000000000000 && level >= 100000000)
  {
    ret = parseInt(level / 100000000) + "억 " + parseInt((level % 100000000) / 10000) + "만 ";
  }
  else if(level < 10000000000000000 & level >= 1000000000000)
  {
    ret = parseInt(level / 1000000000000) + "조 " + parseInt((level % 1000000000000) / 100000000) + "억 ";
  }
  else if(level < 100000000000000000000 & level >= 1000000000000)
  {
      ret = parseInt(level / 10000000000000000) + "경 " + parseInt((level % 10000000000000000) / 1000000000000) + "조 " + parseInt((level % 1000000000000) / 100000000) + "억 "; 
  }
  else{
    ret = level;
  }
  return ret;
}

exports.Jari = Jari;
exports.Jari2 = Jari2;