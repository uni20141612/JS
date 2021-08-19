const gB = {};
gB.getBoss = function (boss){
  var rep = "-";
  var chkboss = -1;
      switch(boss)
      {
        case "목록":
          rep = FileStream.read("storage/emulated/0/kakao/Bots/보마봇/boss.txt");    
          rep.toString();
          rep = rep.replace(/ㅁ/g, '\n');      
          chkboss = 1000;
          break;
        case "이지자쿰":
          chkboss = 0;
          break;
        case "노말자쿰":
        case "자쿰":
          chkboss = 1;
          break;
        case "피아누스":
          chkboss = 2;
          break;
        case "노말반반":
        case "반반":
          chkboss = 3;
          break;
        case "노말피에르":
        case "노말삐에르":
        case "피에르":
        case "삐에르":
          chkboss = 4;
          break;
        case "노말블러디퀸":
        case "노블퀸":
        case "블러디퀸":
        case "블퀸":
          chkboss = 5;
          break;
        case "이지파풀라투스":
        case "이지파풀":
          chkboss = 6;
          break;
        case "이지매그너스":
        case "이지매그":
          chkboss = 7;
          break;
        case "노말힐라":
        case "힐라":
          chkboss = 8;
          break;
        case "노말벨룸":
        case "벨룸":
          chkboss = 9;
          break;
        case "이지반레온":
        case "이지반래온":
          chkboss = 10;
          break;
        case "이지혼테일":
        case "이지혼텔":
          chkboss = 11;
          break;
        case "카웅":
          chkboss = 12;
          break;
        case "이지아카이럼":
          chkboss = 13;
          break;
        case "노말혼테일":
        case "노말혼텔":
        case "혼테일":
        case "혼텔":
          chkboss = 14;
          break;
        case "노말매그너스":
        case "매그너스":
        case "노매그":
        case "매그":
          chkboss = 15;
          break;
        case "노말반레온":
        case "노말반래온":
        case "반레온":
        case "반래온":
          chkboss = 16;
          break;
        case "노말핑크빈":
        case "노핑":
        case "핑크빈":
          chkboss = 17;
          break;
        case "하드반레온":
        case "하드반래온":
          chkboss = 18;
          break;
        case "이지시그너스":
        case "이시그":
          chkboss = 19;
          break;
        case "노말아카이럼":
        case "아카이럼":
          chkboss = 20;
          break;
        case "노말파풀라투스":
        case "노말파풀":
        case "파풀라투스":
        case "파풀":
          chkboss = 21;
          break;
        case "하드힐라":
        case "하힐":
          chkboss = 22;
          break;
        case "카오스혼테일":
        case "카텔":
        case "카혼텔":
          chkboss = 23;
          break;
        case "노말시그너스":
        case "노말시그":
        case "노시그":
        case "시그너스":
        case "시그":
          chkboss = 24;
          break;
        case "카오스피에르":
        case "카오스삐에르":
        case "카피":
        case "카삐":
          chkboss = 25;
          break;
        case "카오스자쿰":
        case "카쿰":
          chkboss = 26;
          break;
        case "카오스반반":
        case "카반반":
        case "카반":
          chkboss = 27;
          break;
        case "하드매그너스":
        case "하매그":
        case "하매":
          chkboss = 28;
          break;
        case "카오스블러디퀸":
        case "카블퀸":
          chkboss = 29;
          break;
        case "카오스벨룸":
        case "카벨룸":
        case "카벨":
          chkboss = 30;
          break;
        case "카오스핑크빈":
        case "카핑빈":
        case "카핑":
          chkboss = 31;
          break;
        case "카오스파풀라투스":
        case "카파풀":
          chkboss = 32;
          break;
        case "불꽃늑대":
        case "불늑":
          chkboss = 33;
          break;
        case "도로시":
        case "시드":
          chkboss = 34;
          break;
        case "노말데미안":
        case "노데미":
        case "데미안":
        case "데미":
          chkboss = 35;
          break;
        case "노말스우":
        case "노스우":
        case "스우":
          chkboss = 36;
          break;        
        case "우르스":
        case "우루스":
          chkboss = 37;
          break;
        case "이지루시드":
        case "이루시":
          chkboss = 38;
          break;
        case "노말루시드":
        case "노루시":
        case "루시드":
        case "루시":
          chkboss = 39;
          break;
        case "노말윌":
        case "노윌":
        case "윌":
          chkboss = 40;
          break;
        case "노말거대괴수더스크":
        case "노말더스크":
        case "노더스크":
        case "노더":
        case "거대괴수더스크":
        case "더스크":
          chkboss = 41;
          break;
        case "노말친위대장듄켈":
        case "노말듄켈":
        case "노듄켈":
        case "노듄":
        case "친위대장듄켈":
        case "듄켈":
          chkboss = 42;
          break;
        case "하드스우":
        case "하스우":
          chkboss = 43;
          break;
        case "하드데미안":
        case "하데미":
          chkboss = 44;
          break;
        case "하드루시드":
        case "하루시":
          chkboss = 45;
          break;
        case "카오스거대괴수더스크":
        case "카오스더스크":
        case "카더스크":
        case "카더":
          chkboss = 46;
          break;
        case "하드윌":
        case "하윌":
          chkboss = 47;
          break;
        case "하드친위대장듄켈":
        case "하드듄켈":
        case "하듄켈":
        case "하듄":
          chkboss = 48;
          break;
        case "진힐라":
        case "진힐":
          chkboss = 49;
          break;
        case "선택받은세렌":
        case "세렌":
          chkboss = 50;
          break;
        case "검은마법사":
        case "검마":
        case "검멘":
          chkboss = 51;
          break;
        case "아르카누스":
        case "수로":
        case "길드":          
          chkboss = 52;
          break;
        case "가디언엔젤슬라임":
        case "가엔슬":
        case "슬라임":
        case "노말가디언엔젤슬라임":
        case "노말가엔슬":
        case "노말슬라임":
          chkboss = 53;
          break;
        case "카오스가디언엔젤슬라임":
        case "카가엔슬":
        case "카오스슬라임":
        case "카슬":
          chkboss = 54;
          break;
        default:
          rep = "그런 보스는 없습니다.";
          chkboss = -1;
      }
      if(rep == "-" && boss != "목록"){return chkboss;}
      else{return rep;}
};
gB.getBossimage = function (ind){
    rep = "";
    switch(ind){
      case 0:
      case 1:
      case 26:
        rep = "https://ww.namu.la/s/c1f2c962039400c56031de42b64ecbf64eee95542994b5e39a0e9e5aa3c282bbf40867d40f2226734ac9357d55fe343149eee69d990b81a63cb910a051287ea3a090660960f6da430dcb049b5f632e6f0b71e01b6a04ccefe59ac7d66891b14f";
        break;
      case 2:
        rep = "https://ww.namu.la/s/377303eec49d736d574f7ff91f41176d46518ff0ea67dd95c27c6dcf4f4729c8fc0b800c4172f8dff635638d2b23345b955f7bc22a3e905ed1ba56c280c655999bbe4a4dd8643913b31009654510c1f98607a61142010174f24db0936750684f";
        break;
      case 3:
      case 27:
        rep = "https://ww.namu.la/s/722e514c404916c5b7a0971d74247391f2ec8f1e27b01d202ab155c073c0dc3b4373f1261766fa28420fc28f5d7c9e9b5e4788ae5259615cdf402853c53bfc46f8e1549cbe750b4c4e02a53a684e2004526a6cfd1f14f6af033e436d9002211d";
        break;
      case 4:
      case 25:
        rep = "https://w.namu.la/s/3e157db9dfe54ef1fc92c83914d99a4ac95d06369d9e713f93d9fec0e6382d7c4ce30225af402484fbe1e3cca5b57a4cd4df9370790f093ea973e695fc051e8109312c54e4fff52b2d068f27b749aba13050b54e7437e1b0c8d5d4a9957e258d";
        break;
      case 5:
      case 29:
        rep = "https://w.namu.la/s/c5b7e7e2d11451550bc13b70e11b1c3dd5ad9a85837c2d38bd9670176a7d5c423943bca807b841839c10f6a7310bfcf20b358d084175529eee7521e0408aee16d90d89cd4042f0a1524d9843383d9ab4eda382d77a0f99ef45f275c2a3fe1d9e";
        break;
      case 6:
      case 21:
      case 32:
        rep = "https://w.namu.la/s/e2802bf19462e4cefb4b7c3e32a7feb95deda730a54960c7114ed18783fc8e4757755df1deec15596f276f17d3165eeba1496300327d37a2bd43f33d9a9da0f5f2433fb5a853fd285ed02e3ab4ac2cad1c59c33beb81a126cdad596f83bf3be3";
        break;
      case 7:
      case 15:
      case 28:
        rep = "https://w.namu.la/s/767fdcbfb8754974694817d5f82fefd41296a7b1994a0e945bd6599732250271e2f03509e190f4f6c10509767ffbbb988f522e951c3ffb067cc0a484a8354f24aae97375000e29564c102d191caca2b8ee58a5842c05a79a1402d78e9589079f";
        break;
      case 8:
      case 22:
        rep = "https://w.namu.la/s/ce192667d7351bb01ad50a2db28703fcfb3c3835092ac58096062027a28f9c82c9a42fc9b7e16cc0a28d69a350813856fd7c6659288088a73c7dc4463e2d313ddf08d97bf5417eb953eba0fd36f54bb5617e8b96ab664285d4c97c5420dbef25";
        break;
      case 9:
      case 30:
        rep = "https://ww.namu.la/s/ca7c1e12362057357414a9f64a7965a411a9cbf96ac8e637cb0830954017269c381a873bd02ef41b2e3154a389d961370cbfaa04302cdbd364c9aa29413f919ec14f2f74dc27f415240972d71e702cf31ed8d7af3baa1c2fda94f6213f39def3";
        break;
      case 10:
      case 16:
      case 18:
        rep = "https://w.namu.la/s/6323fd3b8ef2d475289fb19ecda35e291ed43f399f59fc5610a5c60c944c1e8844aea0c3b929df8a4cecab4b65565eba015a72ad7c7471ae7ee75a9301090573fd12841c6698281620d66dd204a349c4c4040662bb5518a879068dab380c28f8";
        break;
      case 11:
      case 14:
      case 23:
        rep = "https://ww.namu.la/s/897a6c291fd033e8afc661c8b944c0e1cfab12c4be04add3676d17bc4d61379b199b4086a1596f48b245b252131e3a510105bc9b9387cfb7a7075c7963e0d08135d9837cba9f7720d215c9d42a2aff78201e9cc7dbad672471d032039a5d2727";
        break;
      case 12:
        rep = "https://ww.namu.la/s/8dbd2652864b3059634eca2c765b410f6688c62e984b24840e46a0b2c1274af28e8d9cf77fed4124d7834655a87699e03ee35a13b70a841c57ca1bb7a9549c35b3a2ae4c334aab10685ec9f9f052982ee823166d4ca03c95f2a1fc1fe36c3580";
        break;    
      case 13:
      case 20:
        rep = "https://ww.namu.la/s/d906a3913407734957a24ceee54fc972eeacaeae23c1dc0bffd9149dd73154ec92ec6e94e6df1dc3743c417625a43bb4cbc402956dc0976fe99c06034ab3531ac1beb33d387068644367f82a2b10329c5905f5d687822cd68fceb8259b186cdb";
        break;
      case 17:
      case 31:
        rep = "https://ww.namu.la/s/308fb8682aa92c0683f81959ec244d0cd1a4573b86b573f59efa4eb8b83a5bf9b9b128fc3ff71301acf6cbf1bfa7c5fed5a5d46359271297fad568d1fbabb109f97f33d1f269b1efded42349a4845dc113f480edbc56fb4b468c909d993128d7";
        break;
      case 19:
      case 24:
        rep = "https://w.namu.la/s/88dc6f4e3f9689457f4ffb4ab0e6985dd319431b1a7ba8309da60316abf24587ebc9c84ba08b5a0cb0b9a94d77725a4f82f2f83f4039e7bf2ef28b3058b13d611ccb49f59f984da57a93d065ded6e0a8e112d272ad6826634aac35dc54421b56";
        break;
      case 33:
        rep = "https://ww.namu.la/s/c0e0e2374319649f9a1f76455ff822f07aa8c56baa7225eff42e65bce90b593288383b34ace3ad3a95fbf52eb2417a82c544df1141e7e18fdb5883c47dd0942f8bdc805717839b4e72dc0840c44b795dcb85f918ea00717314c9b3fcc2d9530d";
        break;
      case 34:
        rep = "https://ww.namu.la/s/7a13d680e165c75b928d9389dd68253e829320cf600d5c8a6737968112b4139ad4cc9f0ea12cd88bbd55f795b4b121d20d2fda050d4de521da9a9acd076d18131d11f4ea34b28850005d5879974992a88096c85eb5762a42a230a411923decf89daef31414e3f48846fd8179b974315c";
        break;
      case 35:
      case 44:
        rep = "https://w.namu.la/s/bf657beb32c44af1ff19915bbe3ea6a8b47b4822a050a9e62cc5c30500da3d4552462a83c822c9ab54cb096ec64c11a72b69164fd21f6bec072cf1c175b114ac2bfa5e33e898d2c0d0d1ef7c392a8ecc466b895c46dbe17002966e06e33a899d";
        break;
      case 36:
      case 43:
        rep = "https://ww.namu.la/s/622d50d562fdecb4a0dddb4101fae424f482cb33d588f43965df49da5718e65993bf6222ed27648bb009bbee2b8552687ce30e850c3eeeddaa1837941312b0b3114e0eda45ca3eb94f31a83bbd514cd3141e3d0b13db4afd11b37b59ef93399b";
        break;
      case 37:
        rep = "https://w.namu.la/s/7cc69b1ec64ce373487191e1e53fd19b2382b04f73e95fa6630fd452b701c2e43934febf9ab621980b2678c47bea1630ea37343e7c3113d0687639cfa99cd36e9714ef3afd3f73c7cb312ecfedac6e133789be2286f76b56f44918eda1acc483";
        break;
      case 38:
      case 39:
      case 45:
        rep = "https://w.namu.la/s/9af69355d0af6bc2e1fd4284e433090317c1aeb21c43d87658bd071ac759a09971ee9957326e0978d2eef0bbd2ad969566df0f5251327999bd873327562e86eb70ea870b8ab1681664331e88511e918cdb054bc0163fa61a292c946e399ae4ff";
        break;
      case 40:
      case 47:
        rep = "https://w.namu.la/s/29c4036a996a6bb507664e7a63d78dc7a98aa7a6c03aef579e8378bf73de021318de85ed5eaaa9f1dccd50e4d77298539ca4b5b865da1bc30d4f972c0f035142023d8e81dd00a6e16f047ce594d0a621e546cd41478f9297d6da8656bb03f4f2";
        break;
      case 41:
      case 46:
        rep = "https://ww.namu.la/s/7fde8ab44b1723399824fe6dc17fcdeea219d9917c09aa51c5c8ae64062991f75c4aebca9497c9c9b8eec6a74c7ac8366ec37df7f8e731a1769d2c951551f6a944e9839158d1b5fdc5ebab0d6391d474214306e9733549752668cf6f16928187";
        break;
      case 42:
      case 48:
        rep = "https://ww.namu.la/s/43626905051437a851f2fe6763459485f5a9a98cf02ca7923510173a14fec637a4717b44582d8f982b8fa08f0ecece436794e7c5a58f0fcf64cbbbd016bb33aaad6761ce5580db1fe3891f5922e8ef2694b899bc1fe5df6d1dbdde605d3e6cac";
        break;
      case 49:
        rep = "https://ww.namu.la/s/00ce833b6b4c2957e4d6ef7829ec65931e938b7ad5d9106882836b37a41be4c0d8d307c8a07407e53ee9d049539a2fbf1f308d68da7c5d104bcb81a8afce7e91c153b77cbfd72defb43126964dcc6cf7eafeef404154d1bb491192afd7dd3d8b";
        break;
      case 50:
        rep = "https://w.namu.la/s/0d2e1bd829471ab9683ce0953281e3cf87f61e0ac868d0a9da5109904ad629beb61ae7cef63648ebdb03bdc90e6698c9dd16a3f5be48b201a9f3fed02188c51b63fa111bb9cdcf6b6e75a0565b347a430a6d879a2257feb04b20296d9e0486c5";
        break;
      case 51:
        rep = "https://ww.namu.la/s/dec0777badbae3afa5e0424c2ead2e67184401f5028f5a6339b0ddae14405093a236897d3838d9e7864107ee00fead2753030487691b09435b06f056e7d373057be0dd1fa608129b4b7571056784748f22f0bc4769bfa0412d8aa1d60fce545c";
        break;
      case 52:
        rep = "https://ww.namu.la/s/17680b1d36a817f7ad004dab94026df4a7cdbf226c8afb683fcd539d03dd8456c583e238f69fb0df28355c0008335d95937dd0e66a77317484bdadde028e3b6569c02b95d7820a424f17a769e34cd1b5c3cf8681aab189e0f72e532f0845a6c4";
        break;
      case 53:
      case 54:
        rep = "https://w.namu.la/s/0ffcf0bdcf9de5ae55bf583d7ffe5288e39cd2e2a180c52a86e39ad2730eb686a1419b01ecfea46d0fc80385aa68581844f476a15075a7680c8941fe2e919d296bab32a0a63bc8a12341ba589d1a53234952a1d00ef8857acc95ecf6c57d83c6";
        break;
    }
    return rep;
  };
gB.getBossimage2 = function (ind){
    rep = "";
    switch(ind){
      case 0:
      case 1:
      case 26:
        rep = "https://w.namu.la/s/090ff57b0231b7f99dacf268c555bf66d809ec091bdf192fc499ce5f0cb2c7036acebc6c6ee31fdbcfb6c379973a2f5b65067edd886c82dcebcea2857c3a58970879e1f7223bf3ba3416021d33d0fef0f7e54a07e7deb94e944cbed923941c2c";
        break;
      case 2:
        rep = "https://w.namu.la/s/69147d527fff1af2d44ecd120d0f48bdf5c9309765d79afabb710fd040a597ffd221bad7e821cbe921b88e8515cf2c0780f30b1b11bad61d51322445dc58e827b033d530ed212abeb44bd998b23f1348f9d9ac4a24aacd70070dcfdf2e37005f";
        break;
      case 3:
      case 27:
        rep = "https://w.namu.la/s/778d361ff0379dc8dd7b136f07aeaa4f6d5363102ef44cee7e3c16a6384f11fb8b41a8928060fd2fee3c566e748431b938b52a2557249caded8a62ea8ad95ef6a4859ac4dd8978a2ead8c0b0d324aaa2e0a37aed63db146ea3d23d54722272c3";
        break;
      case 4:
      case 25:
        rep = "https://w.namu.la/s/2242fe098ea8ed99eb5e8c9e7fb31bff59676cb4df965fc45a2ced80e55b83a0ace5edfba628550eb7d93b3d810a056a5c6b50019523032a87a3d8137db3595a5cc025f850b26c82a3b9ea71ecb74955e7dabcc5894e21e2b10f023f9b68d43e";
        break;
      case 5:
      case 29:
        rep = "https://w.namu.la/s/4a54593871bf154492592a642bb579fd52529fba4ce2627288a348efe7fcc5beafbea2f4421ba405bccc32cccacc55da35a7586d7e1bf556fe857fad33e8ba228027f8675245e697c5bac59bd45114333273621cab202b0ae9277e1696ae820f";
        break;
      case 6:
      case 21:
      case 32:
        rep = "https://w.namu.la/s/96e83289ca314c17b4bf076c0e829561a57b954735659a41fead16339bb387a574cbb45e6de34665a6c414580e6ef2fdb620f773d340aeed1368852e847844d885f4e99a9e42b01e2434f65003e96a7f88a50b7649e1ff0362334db1fc1570ef";
        break;
      case 7:
      case 15:
      case 28:
        rep = "https://w.namu.la/s/3c1721a53565880e2ceef6c3f2f4b4ed07c6a44590d9c82d51bf06ded1c3759e19a8eb4d84dd4b5638e4c06aaa7b30069231022f62b4d6e0d1ddb62712437624ec990fe24469a0b5c3750778d2e2c8ac1e56bc553f08422b7c054db3ed132258";
        break;
      case 8:
      case 22:
        rep = "https://w.namu.la/s/7d7e02c63799302620883d4705c1f826181a6211d86b72bbce63121d29ff7b84ce67d92e55643410fbd2ea6a1b1a7a5ba629aa6df280cf9852ac3c852f959341a21370b8e5ce77b205f220ef98e80d2ac95f89ab66dfa3639d8f6afe717d8e4a";
        break;
      case 9:
      case 30:
        rep = "https://w.namu.la/s/936186fcfa9759dec7bb0b20d740b439c69301d2017a6528797349785bcf51bcdeaaa3f58be24b5702dbe08863f6b7332b1021241931f73dd427a2d7700085c8a649c70b34bf1c549ef439fe9e516460d97145dba17a6f3bda3bdb7cfc0765d4";
        break;
      case 10:
      case 16:
      case 18:
        rep = "https://w.namu.la/s/a9f9ab771428a2589144f3f6ae30bfa9e3b8278a222d281c61278bced129d935b5e49bd53beec3c50b0db6220402934d75898985bfd5e1451f396d751ddde916ea232dbddd48f0a96c5670c82fe5eda6af63a7410a6b711f1786458d519f60f9";
        break;
      case 11:
      case 14:
      case 23:
        rep = "https://w.namu.la/s/077988e3e366056fa3f3a70863b8f94e236f5f8eb882b85dfd74105c688863d5ad2360bfd28f64ba0db23802fb1aeaef8e6ae59f4eaa22d2624e9a079bc2c3555aa64de6cec7673b5002640e5fae3eb97888e947ca216d1c5fc23d2b6a413797";
        break;
      case 12:
        rep = "https://w.namu.la/s/f2529f5415fe828f66b8aa1965ed27e6e080cebd0085186e4246e33b476d0008d6e2a3cfa1a1fd0b157732112949ad4a472711108111af0fe261d3025c860b598c9f186ff98ace6f0580a186bcf11807762e39736981bc761c8d3d392d5e5f87";
        break;    
      case 13:
      case 20:
        rep = "https://w.namu.la/s/6d33a5e0898526d843a1a496a01fa0152e3975265350e90483814386b5613a6ecd6d6d4d421fc3b8f366c9f6c04e3de31585bcab15f7b1ee9cd0bd887e35586fa03f541aebfa7c6401d5971182a35b2974d0a2f4acb4a842398d0d8027c7c808";
        break;
      case 17:
      case 31:
        rep = "https://w.namu.la/s/0106ca52ce4cb296fad1e373e49a4c3b6e39ac87efe0e537d60520fefb49988fdcbe3ab32385627d2a9f0dcce369e363df58f6f95df60229e3e6d6e5761f9350e08cc6bdd266c669e063a848061b6752a78322f2193615163242d669619421e1";
        break;
      case 19:
      case 24:
        rep = "https://w.namu.la/s/05b53b15f006f9f19f2f285e23da033f7f441702f4c7a2e4391acf9ffb0bb17ffae8b479002646f8cabecbbc0f1b2372eb2c61634e63b8ea0f62766607d3e67d06ac5b59e106890c63412b132c8483c1c5f0ffadfd2851009e3795b0a4c4d481";
        break;
      case 33:
        rep = "https://w.namu.la/s/c32dc39188d079e9b2059dda71f9fd3c90f4aa3147addde32c9e16dfc0a652630b8f118165b490b62c1ee992de4add20792a9821ac85d679b68f4a9bd84a7194a1058df2a51ee348feb3286e86a5977dfaa7b283c44bfd533b2a6bf864c9f968";
        break;
      case 34:
        rep = "https://w.namu.la/s/6aebf141ecec2a1bb90e66f7dbc21cd82ea3744cbbc3f8741c145ed989591edb99f1649ced4c98772ef3ad2205743462a2fe7f31311d579dcb436a60f624a575ee5cb80a76ad0ac1f8b081357f583a8b162d7c6a1f3f3ce617471e9ac86b16e6";
        break;
      case 35:
      case 44:
        rep = "https://w.namu.la/s/850e49f69988bb2e92cf5ec68b7636589bb6cdac520493ad6e74b0bdb202cbec7db4dd020021b2d8bbfe52dd1ea32f1a0338bf31b009ddebec0da949c32b9550c5747e4c176ddab8e59dfa2c38122e0e929b6e647d2421dd57519d40ade92d1e";
        break;
      case 36:
      case 43:
        rep = "https://w.namu.la/s/5ae7e49182494b98ea4c902c545578094b121a729259e0fde10013ca26b2b320eee71daa0876856304d8496165b8ac326273dda92106f025e1eac4718c63778b0a1f15f57bf694b656c48ceba48fee2071f5a3f17ff8bb0c6e1dfb0cd405d2fb";
        break;
      case 37:
        rep = "https://w.namu.la/s/32237499eba38764b23b6a534af3ed028c48cb08bf5252a358b547bd7f508dab952ef9f9af4cff67965453c802dcd493e8145eb80f4244d562113203a14cbcbccfa52a92ebe47096041112836213c19531ec963b69c414cb9e639b0171ff0e7e";
        break;
      case 38:
      case 39:
      case 45:
        rep = "https://w.namu.la/s/36cfdb29d107094761dff53b65caee88936cd4d767321015a2f39670b7f72179158ff88b984134aa9b2efcfe6623c60b8b1ee0d7d2ba426c6f357b16a61381b59ff8ea37fa489c6225d6789139ac7a4070cbcd437ee223a348b784ef7664ba8f";
        break;
      case 40:
      case 47:
        rep = "https://w.namu.la/s/a4d183afe48280120721012e55d1203b1a88f8cb1a5b5418160a54c4ff76fa37395ffa2aaf579e8f94cef686bfbf046c764c395401bd2ad224af0114c83be907aa018f06f5e075dd91e4c46e4b6c41e06e43393db86525b67663c20d00212293";
        break;
      case 41:
      case 46:
        rep = "https://w.namu.la/s/752e5c8b6e26ca9a982d36b9741efeb2b577c357502c1a988600ec96befae149c0178547e7dcf794b136db84b08034ce0f265501d36db3298cea6dcc8218133a5429d827243df9dc69e554e789e1a5f798f7a0ae9e7d52457f4ad5e49968b655";
        break;
      case 42:
      case 48:
        rep = "https://w.namu.la/s/32628157d3854774fdfac5800636d936b8a7629e4304b6865d702857d4fc65f997c66beb751e4980b4a52f73b99ca2f7265abfbc41201c1d3f1c123ac9bb8a708da6a06e7aca33ea6fcfb497d0b4196dcc6f14c4cb7706ae1e5a1f7ac0c35ae3";
        break;
      case 49:
        rep = "https://w.namu.la/s/66eb0bf1c7c3274f19d3a5d1844703aca8cb77af5b6d96f4823ac2eb7462925768a6fe248df0445eae1d35eea92130c2add7e2d6d90996bb2b9c8f346d7cc359e63b1bd426200ef671644847193228f7bf27119fb4b8d9f6a8056aa8fefee699";
        break;
      case 50:
        rep = "https://w.namu.la/s/b5d38c0b3e13a838fce64168be2fb1c1a2a8d04e12f0b73eb31ae0ca5a95d62a8de0fe2711e7c605efd5a6b77af628a63536c6e655202279e32f19b471c4611c970d1c735d75e9ebe1d40d6cb048c235fb802b1f50f57ef1ce4109519d7bd109";
        break;
      case 51:
        rep = "https://w.namu.la/s/ad9f5a15864fbdccfa85f4a24269ecc62fb1e110b1255e2df29d399b7ffaea445d77eb42da46994aee10b1033f57f55dc3b90e67efae48f84bd56ed6d3cb9ce6d474873148e5fbf8cab9170fc79032582bf5e5b4b8bcf5a5aa0e4da366bfc77a";
        break;
      case 52:
        rep = "https://w.namu.la/s/9649d6aa2c246a756a303d8b331115a2cc79ac1aca42b6d4c89e3a81c1f9780d84fade9e5bc3df078f20d4b27d3a8a18dfdb4cd35c9361e87a6a5a09b27d47a0daca99aa4e3b52f4802f90d4066cd1f0af43fb0edd808dc78d956bffec980489";
        break;
      case 53:
      case 54:
        rep = "https://w.namu.la/s/47de7633c0ec1f0fda571c52c7bef8c87e17a2319430a0de8258920d2e097a37eebf0d7032ba48b87a78d325e73b314dac23b764a98c6c902dc7e0e2b684a6b77742db427be057bde5ab507106475d8e133124fd5ebc20484a96ba93753e8ac7";
        break;
    }
    return rep;
  };
gB.getBossHP = function (ind){
    rep = "";
    switch(ind){
      case 0:
        rep = "220만 / 200,000메소";  //이지 자쿰
        break;
      case 1:
        rep = "700만 / 612,500메소";  //노말 자쿰
        break;
      case 2:
        rep = "좌:2400만 / 우:3000만";  //피아누스
        break;
      case 3:
        rep = "3.15억 / 968,000메소"; //노말 반반
        break;
      case 4:
        rep = "3.15억 / 968,000메소"; //노말 피에르
        break;
      case 5:
        rep = "3.15억 / 968,000메소"; //노말 블러디 퀸
        break;
      case 6:
        rep = "4억 / 684,500메소";  //이지 파풀라투스
        break;
      case 7:
        rep = "4억 / 684,500메소";  //이지 매그너스
        break;
      case 8:
        rep = "5억 / 800,000메소";  //노말 힐라
        break;
      case 9:
        rep = "5.5억 / 968,500메소";  //노말 벨룸
        break;
      case 10:
        rep = "7억 / 1,058,000메소";  //이지 반 레온
        break;
      case 11:
        rep = "10.18억 / 882,000메소";  //이지 혼테일
        break;
      case 12:
        rep = "16.8억 / 1,250,000메소"; //카웅
        break;
      case 13:
        rep = "21억 / 1,152,000메소"; //이지 아카이럼
        break;
      case 14:
        rep = "27.5억 / 1,012,500메소"; //노말 혼테일
        break;
      case 15:
        rep = "60억 / 2,592,000메소"; //노말 매그너스
        break;
      case 16:
        rep = "63억 / 1,458,000메소"; //노말 반 레온
        break;
      case 17:
        rep = "76.5억 / 1,404,000메소"; //노말 핑크빈
        break;
      case 18:
        rep = "105억 / 2,450,000메소";  //하드 반 레온
        break;
      case 19:
        rep = "105억 9,112,500메소";  //이지 시그너스
        break;
      case 20:
        rep = "126억 / 2,520,000메소";  //노말 아카이럼
        break;
      case 21:
        rep = "166억 / 2,664,500메소";  //노말 파풀라투스
        break;
      case 22:
        rep = "168억 / 11,250,000메소"; //하드 힐라
        break;
      case 23:
        rep = "266억 / 1,352,000메소";  //카오스 혼테일
        break;
      case 24:
        rep = "630억 / 14,450,000메소"; //노말 시그너스
        break;
      case 25:
        rep = "800억 / 16,200,000메소"; //카오스 피에르
        break;
      case 26:
        rep = "840억 / 16,200,000메소"; //카오스 자쿰
        break;
      case 27:
        rep = "1000억 / 16,200,000메소";  //카오스 반반
        break;
      case 28:
        rep = "1200억 / 19,012,500메소";  //하드 매그너스
        break;
      case 29:
        rep = "1400억 / 16,200,000메소";  //카오스 블러디 퀸
        break;
      case 30:
        rep = "2000억 / 21,012,500메소";  //카오스 벨룸
        break;
      case 31:
        rep = "2037억 / 12,800,000메소";  //카오스 핑크빈
        break;
      case 32:
        rep = "5040억 / 26,450,000메소";  //카오스 파풀라투스
        break;
      case 33:
        rep = "6000억"; //불꽃늑대
        break;
      case 34:
        rep = "8400억"; //도로시
        break;
      case 35:
        rep = "8400억ㆍ3600억 / 33,800,000메소";  //노말 데미안
        break;
      case 36:
        rep = "4000억ㆍ4000억ㆍ7000억 / 32,512,500메소";  //노말 스우
        break;
      case 37:
        rep = "2.62조"; //우르스
        break;
      case 38:
        rep = "6조ㆍ6조 / 35,112,500메소";  //이지 루시드
        break;
      case 39:
        rep = "12조ㆍ12조 / 40,612,000메소";  //노말 루시드
        break;
      case 40:
        rep = "8.4조ㆍ6.3조ㆍ10.5조 / 46,512,500메소";  //노말 윌
        break;
      case 41:
        rep = "26조 / 49,612,500메소";  //노말 거대 괴수 더스크
        break;
      case 42:
        rep = "26조 / 52,812,500메소";  //노말 친위대장 듄켈
        break;
      case 43:
        rep = "1.7조ㆍ7조ㆍ24조 / 74,112,000메소";  //하드 스우
        break;
      case 44:
        rep = "25.2조ㆍ10.8조 / 70,312,500메소";  //하드 데미안
        break;
      case 45:
        rep = "41조ㆍ41조ㆍ12조 / 80,000,000메소";  //하드 루시드
        break;
      case 46:
        rep = "126조 / 92,450,000메소"; //카오스 거대 괴수 더스크
        break;
      case 47:
        rep = "42조ㆍ31.5조ㆍ52.5조 / 88,200,000메소";  //하드 윌
        break;
      case 48:
        rep = "155조 / 96,800,000메소"; //하드 친위대장 듄켈
        break;
      case 49:
        rep = "176조 / 110,450,000메소";  //진 힐라
        break;
      case 50:
        rep = "132조ㆍ???조 / 151,250,000메소"; //선택받은 세렌
        break;
      case 51:
        rep = "63조ㆍ115.5조ㆍ157.5조ㆍ150조 / 500,000,000메소";  //검은 마법사
        break;
      case 52:
        rep = "60억ㆍ150억ㆍ1500억ㆍ1.5조ㆍ10.5조ㆍ900조";  //아르카누스
        break;
      case 53:
        rep = "5조 / 34,422,000메소"; //노말 가디언 엔젤 슬라임
        break;
      case 54:
        rep = "115.5조 / 90,312,500메소"; //카오스 가디언 엔젤 슬라임
        break;
    }
    return rep;
  };
gB.getBossname = function (ind){
    rep = "";
    rep = bossList[ind].split("\n")[0];
    return rep;
  };
gB.getBossinfo = function (ind){
    rep = "";
    switch(ind){
        case 0:
          rep = "30%, 반감";
          break;
        case 1:
          rep = "40%, 반감";
          break;
        case 2:
          rep = "비반감";
          break;
        case 3:
          rep = "50%, 반감";
          break;
        case 4:
          rep = "50%, 반감";
          break;
        case 5:
          rep = "50%, 반감";
          break;
        case 6:
          rep = "50%, 반감";
          break;
        case 7:
          rep = "50%, 반감";
          break;
        case 8:
          rep = "50%, 반감";
          break;
        case 9:
          rep = "55%, 반감";
          break;
        case 10:
          rep = "50%, 비반감";
          break;
        case 11:
          rep = "40%, 비반감";
          break;
        case 12:
          rep = "40%, 반감";
          break;
        case 13:
          rep = "60%, 비반감";
          break;
        case 14:
          rep = "40%, 비반감";
          break;
        case 15:
          rep = "50%, 반감";
          break;
        case 16:
          rep = "80%, 비반감";
          break;
        case 17:
          rep = "70%, 일부속성 반감";
          break;
        case 18:
          rep = "80%, 비반감";
          break;
        case 19:
          rep = "100%, 반감";
          break;
        case 20:
          rep = "90%, 비반감";
          break;
        case 21:
          rep = "90%, 반감";
          break;
        case 22:
          rep = "100%, 반감";
          break;
        case 23:
          rep = "50%, 비반감";
          break;
        case 24:
          rep = "100%, 반감";
          break;
        case 25:
          rep = "80%, 반감";
          break;
        case 26:
          rep = "100%, 반감";
          break;
        case 27:
          rep = "100%, 반감";
          break;
        case 28:
          rep = "120%, 반감";
          break;
        case 29:
          rep = "120%, 반감";
          break;
        case 30:
          rep = "200%, 반감";
          break;
        case 31:
          rep = "100%, 일부속성 반감";
          break;
        case 32:
          rep = "250%, 반감";
          break;
        case 33:
          rep = "90%, 반감";
          break;
        case 34:
          rep = "250%, 비반감";
          break;
        case 35:
          rep = "300%, 반감, 수에큐 3개";
          break;
        case 36:
          rep = "300%, 반감, 수에큐 3개";
          break;
        case 37:
          rep = "10%, 부위별 뎀감";
          break;
        case 38:
          rep = "300%, 반감, 포스 360, 수에큐 3개";
          break;
        case 39:
          rep = "300%, 반감, 포스 360, 수에큐 4개";
          break;
        case 40:
          rep = "300%, 반감, 포스 760, 수에큐 5개";
          break;
        case 41:
          rep = "300%, 반감, 포스 730, 수에큐 6개";
          break;
        case 42:
          rep = "300%, 반감, 포스 850, 수에큐 6개";
          break;
        case 43:
          rep = "300%, 반감, 수에큐 8개";
          break;
        case 44:
          rep = "300%, 반감, 수에큐 7개";
          break;
        case 45:
          rep = "300%, 반감, 포스 360, 수에큐 9개";
          break;
        case 46:
          rep = "300%, 반감, 포스 730, 수에큐 10개";
          break;
        case 47:
          rep = "300%, 반감, 포스 760, 수에큐 9개";
          break;
        case 48:
          rep = "300%, 반감, 포스 850, 수에큐 10개";
          break;
        case 49:
          rep = "300%, 반감, 포스 900, 수에큐 10개";
          break;
        case 50:
          rep = "380%, 반감, 어센틱포스 150ㆍ200, 수에큐 ?개";
          break;
        case 51:
          rep = "300%, 반감, 포스 1320, 수에큐 30개";
          break;
        case 52:
          rep = "50%ㆍ100%ㆍ150%ㆍ200%ㆍ250%ㆍ300%, 반감";
          break;
        case 53:
          rep = "300%, 반감, 상시 피해감소 30%, 수에큐 3개";
          break;
        case 54:
          rep = "300%, 반감, 상시 피해감소 30%, 수에큐 10개";
          break;
    }
    return rep;
  };

var bossList = [
    "이지 자쿰 Lv.50\n220만, 30%, 반감\n200,000메소", //0
    "노말 자쿰 Lv.110\n700만, 40%, 반감\n612,500메소", //1
    "피아누스 Lv.110\n좌 : 2400만, 비반감\n우 : 3000만, 비반감", //2
    "노말 반반 Lv.120\n3억 1500만, 50%, 반감\n968,000메소", //3
    "노말 피에르 Lv.120\n3억 1500만, 50%, 반감\n968,000메소", //4
    "노말 블러디 퀸 Lv.120\n3억 1500만, 50%, 반감\n968,000메소", //5
    "이지 파풀라투스 Lv.125\n4억, 50%, 반감\n684,500메소", //6
    "이지 매그너스 Lv.110\n4억, 50%, 반감\n684,500메소", //7
    "노말 힐라 Lv.110\n5억, 50%, 반감\n800,000메소", //8
    "노말 벨룸 Lv.130\n5억 5000만, 55%, 반감\n968,000메소", //9
    "이지 반 레온 Lv.120\n7억, 50%, 비반감\n1,058,000메소", //10
    "이지 혼테일 Lv.130\n10억 1760만, 40%, 비반감\n882,000메소", //11
    "카웅 Lv.180\n16억 8000만, 40%, 반감\n1,250,000메소", //12
    "이지 아카이럼 Lv.130\n21억, 60%, 비반감\n1,152,000메소", //13
    "노말 혼테일 Lv.160\n27억 5000만, 40%, 비반감\n1,012,500메소", //14
    "노말 매그너스 Lv.130\n60억, 50%, 반감\n2,592,000메소", //15
    "노말 반 레온 Lv.130\n63억, 80%, 비반감\n1,458,000메소", //16
    "노말 핑크빈 Lv.180\n76억 5000만(총합), 70%, 일부반감\n1,404,500메소", //17
    "하드 반 레온 Lv.140\n105억, 80%, 비반감\n2,450,000메소", //18
    "이지 시그너스 Lv.140\n105억, 100%, 반감\n9,112,500메소", //19
    "노말 아카이럼 Lv.170\n126억, 90%, 비반감\n2,520,000메소", //20
    "노말 파풀라투스 Lv.155\n166억, 90%, 반감\n2,664,500메소", //21
    "하드 힐라 Lv.190\n168억, 100%, 반감\n11,250,000메소", //22
    "카오스 혼테일 Lv.160\n266억, 50%, 비반감\n1,352,000메소", //23
    "노말 시그너스 Lv.190\n630억, 100%, 반감\n14,450,000메소", //24
    "카오스 피에르 Lv.190\n800억, 80%, 반감\n16,200,000메소", //25
    "카오스 자쿰 Lv.180\n840억, 100%, 반감 (팔 당 105억)\n16,200,000메소", //26
    "카오스 반반 Lv.190\n1000억, 100%, 반감\n16,200,000메소", //27
    "하드 매그너스 Lv.190\n1200억, 120%, 반감\n19,012,500메소", //28
    "카오스 블러디 퀸 Lv.190\n1400억, 120%, 반감\n16,200,000메소", //29
    "카오스 벨룸 Lv.190\n2000억, 200%, 반감\n21,012,500메", //30
    "카오스 핑크빈 Lv.190\n2037억(총합), 100%, 일부반감\n12,800,000메소", //31
    "카오스 파풀라투스 Lv.190\n5040억, 250%, 반감\n26,450,000메소", //32
    "불꽃늑대 Lv.1\n6000억, 90%, 반감", //33
    "도로시 Lv.210\n8400억, 250%, 비반감", //34
    "노말 데미안 Lv.210\n8400억ㆍ3600억\n300%, 반감\n33,800,000메소", //35
    "노말 스우 Lv.210\n4000억ㆍ4000억ㆍ7000억\n300%, 반감\n32,512,500메소", //36
    "우르스  Lv,130\n2조 6252억 2362만 4000, 10%", //37
    "이지 루시드 Lv.230\n6조ㆍ6조, 300%, 반감, 포스 360\n35,112,500메소", //38
    "노말 루시드 Lv.230\n12조ㆍ12조, 300%, 반감, 포스 360\n40,612,000메소", //39
    "노말 윌 Lv.250\n8.4조ㆍ6.3조ㆍ10.5조\n300%, 반감, 포스 760\n46,512,500메소", //40
    "노말 거대 괴수 더스크 Lv.255\n26조, 300%, 반감, 포스 730\n49,612,500메소", //41
    "노말 친위대장 듄켈 Lv.265\n26조, 300%, 반감, 포스 850\n52,812,500메소", //42
    "하드 스우 Lv.210\n1.7조ㆍ7조ㆍ24조\n300%, 반감\n74,112,000메소", //43
    "하드 데미안 Lv.210\n25.2조ㆍ10.8조\n300%, 반감\n70,312,500메소", //44
    "하드 루시드 Lv.230\n41.04조ㆍ41.04조ㆍ11.97조\n300%, 반감, 포스 360\n80,000,000메소", //45
    "카오스 거대 괴수 더스크 Lv.255\n126조, 300%, 반감, 포스 730\n92,450,000메소", //46
    "하드 윌 Lv.250\n42조ㆍ31.5조ㆍ52.5조\n300%, 반감, 포스 760\n88,200,000메소", //47
    "하드 친위대장 듄켈 Lv.265\n155조, 300%, 반감, 포스 850\n96,800,000메소", //48
    "진 힐라 Lv.250\n176조, 300%, 반감, 포스 900\n110,450,000메소", //49
    "선택받은 세렌 Lv.275\n132조ㆍ???조\n380%, 반감, 포스 150ㆍ200\n151,250,000메소", //50
    "검은 마법사 Lv.275\n63조ㆍ115.5조ㆍ157.5조ㆍ150조\n300%, 반감, 포스 1320\n500,000,000메소", //51
    "아르카누스 Lv.101\n60억ㆍ150억ㆍ1500억ㆍ1.5조ㆍ10.5조ㆍ900조\n50%ㆍ100%ㆍ150%ㆍ200%ㆍ250%ㆍ300%, 반감", //52
    "노말 가디언 엔젤 슬라임 Lv.220\n5조, 300%, 반감\n34,422,000메소", //53
    "카오스 가디언 엔젤 슬라임 LV.250\n115.5조, 300%, 반감\n90,312,500메소" //54
];

module.exports = gB;