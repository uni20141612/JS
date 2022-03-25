const crs = {};

crs.crystalprice = [
    [125938, 124631, 123560, 122689, 121987, 121426, 120983, 120637, 120371],   //이지 자쿰 0
    [385682, 381680, 378401, 375735, 373585, 371868, 370511, 369452, 388637], //노멀 자쿰 1
    [431017, 426545, 422881, 419901, 417498, 415579, 414063, 412879, 411968], //이지 파풀라투스 2
    [454631, 449914, 446049, 442906, 440372, 438348, 436749, 435501, 434540], //이지 매그너스 3
    [503750, 498523, 494240, 490757, 487949, 485706, 483934, 482551, 481486], //노멀 힐라 4
    [555384, 549621, 544899, 541059, 537963, 535490, 533536, 532011, 530837], //이지 혼테일 5
    [609535, 603210, 598028, 593814, 590416, 587702, 585558, 583884, 582596], //노멀 반반 6
    [609535, 603210, 598028, 593814, 590416, 587702, 585558, 583884, 582596], //노멀 피에르 7
    [609535, 603210, 598028, 593814, 590416, 587702, 585558, 583884, 582596], //노멀 블러디 퀸 8
    [609535, 603210, 598028, 593814, 590416, 587702, 585558, 583884, 582596], //노멀 벨룸 9
    [637555, 630940, 625520, 621112, 617558, 614720, 612477, 610726, 609378], //노멀 혼테일 10
    [666206, 659293, 653629, 649023, 645309, 642343, 639999, 638170, 636762], //이지 반레온 11
    [725395, 717868, 711701, 706686, 702642, 699412, 696860, 694868, 693335], //이지 아카이럼 12
    [787106, 778939, 772247, 766805, 762417, 758913, 756144, 753983, 752319], //노멀 카웅 13
    [851334, 842500, 835262, 829376, 824630, 820840, 817845, 815507, 813708], //카오스 혼테일 14
    [884392, 875215, 867696, 861582, 856652, 852715, 849604, 847176, 845307], //노멀 핑크빈 15
    [918081, 908555, 900750, 894403, 889285, 885198, 881968, 879447, 877507], //노멀 반레온 16
    [1542729, 1526722, 1513606, 1502940, 1494340, 1487472, 1482045, 1477809, 1474548], //하드 반레온 17
    [1587122, 1570654, 1557161, 1546188, 1537341, 1530275, 1524692, 1520334, 1516979], //노멀 아카이럼 18
    [1632142, 1615207, 1601331, 1590047, 1580949, 1573683, 1567942, 1563460, 1560010], //노멀 매그너스 19
    [1677794, 1660385, 1646121, 1634522, 1625169, 1617699, 1611797, 1607190, 1603644], //노멀 파풀라투스 20
    [5766335, 5707542, 5659439, 5620385, 5588951, 5563895, 5544142, 5528762, 5516957], //이지 시그너스 21
    [7248704, 7179852, 7123852, 7078684, 7042594, 7014061, 6991771, 6974595, 6961568], //하드 힐라 22
    [8277079, 8198879, 8135305, 8084054, 8043127, 8010790, 7985546, 7966109, 7951381], //카오스 핑크빈 23
    [9432017, 9344646, 9273736, 9216678, 9171207, 9135363, 9107455, 9086031, 9069853], //노멀 시그너스 24
    [10229381, 10124452, 10038559, 9968785, 9912590, 9867768, 9832404, 9804845, 9783671], //카오스 자쿰 25
    [10293794, 10190723, 10106520, 10038270, 9983438, 9939822, 9905515, 9878873, 9858485], //카오스 반반 26
    [10313974, 10210950, 10126802, 10058612, 10003842, 9960288, 9926040, 9899453, 9879115], //카오스 피에르 27
    [10287243, 10183404, 10098516, 10029660, 9974296, 9930217, 9895510, 9868525, 9847847], //카오스 블러디 퀸 28
    [12127081, 12007659, 11910234, 11831389, 11768153, 11717949, 11678544, 11648017, 11624721], //하드 매그너스 29
    [13231251, 13093962, 12981474, 12890000, 12816243, 12757336, 12710792, 12674461, 12646496], //카오스 벨룸 30
    [26763659, 26762278, 26756078, 26748817, 26748707, 26764409, 26740959, 26739383, 26738281], //카오스 파풀라투스 31
    [33961301, 33956225, 33955273, 33955102, 33951746, 33948821, 33945597, 33943099, 33939658], //노멀 스우 32
    [35513435, 35515223, 35515750, 35508937, 35513060, 35514893, 35520449, 35521692, 35518199], //노멀 데미안 33
    [46979490, 46961639, 46961602, 46960086, 46963583, 46970570, 46969749, 46967738, 46961100], //노멀 가디언 엔젤 슬라임 34
    [48060518, 48074602, 48075311, 48070660, 48073070, 48064176, 48067295, 48063148, 48059431], //이지 루시드 35
    [52078505, 52121179, 52138448, 52142148, 52139172, 52138008, 52129563, 52126554, 52136402], //이지 윌 36
    [57409149, 57467217, 57492861, 57500594, 57499163, 57498118, 57501344, 57505876, 57513174], //노멀 루시드 37
    [66184350, 66271385, 66315603, 66334181, 66338315, 66334841, 66326401, 66316457, 66303325], //노멀 윌 38
    [70910104, 71006517, 71055962, 71077140, 71082302, 71078971, 71065921, 71636669, 71056788], //노멀 더스크 39
    [76346334, 76481344, 76558341, 76597878, 76614366, 76617395, 76613000, 76601185, 76611577], //노멀 듄켈 40
    [111391647, 111787599, 112064317, 112251133, 112371919, 112445522, 112486373, 112505177, 112509618], //하드 데미안 41
    [117134241, 117542904, 117827730, 118019390, 118142788, 118217537, 118258615, 118277100, 118280918], //하드 스우 42
    [128865517, 129463873, 129928203, 130282284, 130547052, 130740590, 130878223, 130972701, 131034436], //하드 루시드 43
    [142496456, 143172832, 143698963, 144101245, 144402972, 144624313, 144782404, 144891539, 144963422], //하드 윌 44
    [144841428, 145619265, 146243841, 146738635, 147124901, 147421559, 147645180, 147810054, 147927313], //노말 진힐라 45
    [150492837, 151483698, 152317582, 153013075, 153587678, 154057642, 154437861, 154741816, 154981566], //카오스 가디언 엔젤 슬라임 46
    [154253315, 155314233, 156228860, 157011916, 157677508, 158238996, 158708887, 159098768, 159419267], //카오스 더스크 47
    [162141614, 163320410, 164334086, 165197092, 165926113, 166536932, 167044294, 167461819, 167801950], //하드 듄켈 48
    [183366017, 184591724, 185646175, 186546919, 187310727, 187953437, 188489836, 188933586, 189297187], //하드 진 힐라 49
    [188790737, 190166745, 191364875, 192404428, 193300776, 194068645, 194721994, 195273920, 195736599], //노말 선택받은 세렌 50
    [256269439, 258177400, 259852008, 261313478, 262581502, 263675044, 264612177, 265409954, 266084324], //하드 선택받은 세렌 51
    [1333569255, 1373936474, 1406233780], //하드 검은 마법사 52
    [300000000, 300000000], //카오스 감시자 칼로스 53
    [0, 0], //피아누스 54
    [0, 0], //불꽃늑대 55
    [0, 0], //도로시 56
    [0, 0], //우르스 57
    [0, 0], //아르카누스 58
    [0, 0], //마왕발록 55
];

crs.crystalpriceOld14 = [
    [186971, 183731, 180489, 177241, 173984, 170715, 167434, 164141, 160837, 157524, 154205, 150885, 147568, 144261, 140969, 137698, 134455, 131721, 129431, 127522],   //이지 자쿰 0
    [572600, 562677, 552747, 542799, 532823, 522813, 512765, 502680, 492561, 482414, 472250, 462082, 451925, 441796, 431714, 421697, 411765, 403393, 396381, 390534], //노멀 자쿰 1
    [904942, 889260, 873567, 857845, 842079, 826259, 810380, 794441, 778448, 762412, 746349, 730279, 714226, 698218, 682284, 666453, 650756, 637525, 626444, 617203], //노멀 반반 3
    [904942, 889260, 873567, 857845, 842079, 826259, 810380, 794441, 778448, 762412, 746349, 730279, 714226, 698218, 682284, 666453, 650756, 637525, 626444, 617203], //노멀 피에르 4 
    [904942, 889260, 873567, 857845, 842079, 826259, 810380, 794441, 778448, 762412, 746349, 730279, 714226, 698218, 682284, 666453, 650756, 637525, 626444, 617203], //노멀 블러디 퀸 5
    [639909, 628820, 617723, 606606, 595458, 584271, 573042, 561771, 550462, 539122, 527763, 516399, 505048, 493728, 482460, 471266, 460166, 450810, 442947, 436439], //이지 파풀라투스 6
    [674966, 663270, 651565, 639838, 628079, 616279, 604435, 592547, 580618, 568657, 556676, 544690, 532717, 520777, 508892, 497084, 485376, 475508, 467243, 467243], //이지 매그너스 7
    [747886, 734926, 721957, 708964, 695934, 682860, 669797, 656564, 643347, 630094, 616819, 603538, 590271, 577041, 563872, 550789, 537816, 526882, 517724, 510087], //노멀 힐라 8
    [904942, 889260, 873567, 857845, 842079, 826259, 810380, 794441, 778448, 762412, 746349, 730279, 714226, 698218, 682284, 666453, 650756, 637525, 626444, 617203], //노멀 벨룸 9
    [989079, 971939, 954787, 937603, 920371, 903080, 885724, 868303, 850823, 833296, 815739, 798175, 780630, 763134, 745718, 728415, 711259, 696798, 684686, 674586], //이지 반레온 10
    [824544, 810256, 795957, 781632, 767267, 752853, 738384, 723861, 709289, 694678, 680042, 763850, 650773, 636187, 621668, 607244, 592942, 580887, 570790, 562370], //이지 혼테일 11
    [1168571, 1148321, 1128057, 1107755, 1087396, 1066967, 1046462, 1025880, 1005228, 984520, 963777, 943025, 922296, 901624, 881048, 860605, 840335, 823250, 808940, 797007], //노멀 카웅 12
    [1076955, 1058293, 1039617, 1020906, 1002143, 983316, 964418, 945450, 926417, 907333, 888126, 869091, 849987, 830936, 811973, 793133, 774452, 758706, 745518, 734520], //이지 아카이럼 13
    [946543, 930140, 913726, 897281, 880790, 864243, 847634, 830962, 814234, 797491, 780659, 763850, 747059, 730315, 713648, 697090, 680671, 666832, 655241, 645575, ], //노멀 혼테일 14
    [2423149, 2381159, 2339139, 2297040, 2254824, 2212463, 2169943, 2127264, 2084440, 2041501, 1998488, 1955457, 1912473, 1869608, 1826941, 1784551, 1742519, 1707091, 1677418, 1652673], //노멀 매그너스 15
    [1363021, 1339401, 1315765, 1292085, 1268338, 1244510, 1220593, 1196586, 1172498, 1148345, 1124150, 1099945, 1075766, 1051655, 1027655, 1003811, 980168, 960240, 908925, 929630], //노멀 반레온 16
    [1313006, 1290253, 1267484, 1244672, 1221797, 1198843, 1175803, 1152677, 1129473, 1106206, 1082899, 1059582, 1036291, 1013064, 989944, 966975, 944200, 925003, 908925, 895517], //노멀 핑크빈 17
    [2290398, 2250708, 2210990, 2171198, 2131295, 2091255, 2051064, 2010723, 1970245, 1929658, 1889002, 1848329, 1807700, 1767184, 1726854, 1686787, 1647058, 1613571, 1585524, 1562135], //하드 반레온 18
    [8525720, 8379661, 8233738, 8086881, 7939852, 7792254, 7644037, 7495200, 7345793, 7195919, 7045727, 6895411, 6745199, 6595348, 6446133, 6297838, 6150747, 6027202, 5923824, 5837705], //이지 시그너스 19
    [2356306, 2315474, 2274613, 2233676, 2192624, 2151432, 2110085, 2068583, 2026941, 1985186, 1943360, 1901516, 1859718, 1818036, 1776546, 1735326, 1694454, 1660004, 1631150, 1607087], //노멀 아카이럼 20
    [2490926, 2447761, 2404565, 2361289, 2317892, 2274346, 2230637, 2186764, 2142742, 2098602, 2054386, 2010152, 1965966, 1921902, 1878041, 1834466, 1791259, 1754840, 1724337, 1698900], //노멀 파풀라투스 21
    [10556166, 10382856, 10209089, 10034651, 9859371, 9683127, 9505854, 9327550, 9148275, 8968155, 8787374, 8606172, 8424834, 8243681, 8063057, 7883319, 7704825, 7557454, 7434619, 7332734], //하드 힐라 22
    [126392, 1242024, 1220106, 1198147, 1176127, 1154031, 1131852, 1109590, 1087253, 1064856, 1042420, 1019975, 997554, 975196, 952941, 930830, 908906, 890427, 874950, 862043], //카오스 혼테일 23
    [13590657, 13375374, 13159247, 12972000, 12723409, 12503315, 12281623, 12058353, 11833555, 11607397, 11380117, 11152022, 10923481, 10694909, 10466753, 10239477, 10013547, 9825299, 9668613, 9538852], //노멀 시그너스 24
    [15172134, 14915975, 14659396, 14402092, 14143818, 13884401, 13623749, 13361860, 13098824, 12834822, 12570120, 12305062, 12040057, 11775562, 11512070, 11250088, 10990125, 10772486, 10590579, 10439229], //카오스 피에르 25
    [15151312, 14890388, 14629221, 14367507, 14105002, 13841533, 13577012, 13311437, 13044899, 12777579, 12509743, 12241734, 11973959, 11706873, 11440965, 11176738, 10914695, 10694542, 10510267, 10356699], //카오스 자쿰 26
    [15166577, 14909145, 14651341, 14392859, 14133454, 13872954, 13611267, 13348392, 13084419, 12879529, 12553988, 12288140, 12022392, 11757203, 11493062, 11230477, 10969955, 10752352, 10570451, 10419084], //카오스 반반 27
    [17810250, 17510550, 17210324, 16909213, 16606928, 16303266, 15998120, 15691487, 15383472, 15074288, 14764247, 14453753, 14143285, 13833381, 13524620, 13217598, 12912913, 12659701, 12448226, 12272428], //하드 매그너스 28
    [15165882, 14908291, 14650333, 14391703, 14132157, 13871521, 13609705, 13346707, 13082617, 12817616, 12551970, 12286023, 12020183, 11754907, 11490685, 11228025, 10967434, 10748666, 10565710, 10413390], //카오스 블러디 퀸 29
    [19643675, 19303272, 18962628, 18621348, 18279117, 17935712, 17591017, 17245031, 16897897, 16549777, 16201089, 15852252, 15503794, 15156304, 14810414, 14466775, 14126039, 13838838, 13598292, 13397691], //카오스 벨룸 30
    [12018555, 11823201, 11627261, 11430493, 11232700, 11033744, 10833549, 10632112, 10429502, 10225861, 10021399, 9816390, 9611158, 9406068, 9201514, 8997903, 8795644, 8628030, 8488346, 8372556], //카오스 핑크빈 31
    [26544293, 26566248, 26587376, 26607589, 26626804, 26644945, 26661949, 26677764, 26692354, 26705700, 26717800, 26728670, 26738341, 26746862, 26754293, 26760707, 26766185, 26768583, 26767809, 26763701], //카오스 파풀라투스 32
    [34294236, 34410286, 34522351, 34629940, 34732588, 34829867, 34921406, 35006900, 35086126, 35158948, 35225324, 35285307, 35339042, 35386757, 35428757, 35465409, 35497126, 35508742, 35512840, 35512501], //노멀 데미안 35
    [32951702, 33054130, 33152671, 33246858, 33336246, 33420430, 33499057, 33571839, 33638567, 33699116, 33753451, 33801628, 33843790, 33880162, 33911040, 33936778, 33957778, 33964972, 33966410, 33964571], //노멀 스우 36
    [37727524, 38392165, 39058746, 39725947, 40392439, 41056919, 41718153, 42375887, 43018466, 43643968, 44250325, 44835305, 45396478, 45931180, 46436455, 46908975, 47344922, 47713127, 47916109, 48017081], //이지 루시드 38
    [43871949, 44704803, 45542092, 46382292, 47223857, 48065266, 48905070, 49742960, 50565244, 51369594, 52153501, 52914246, 53648865, 54354099, 55026327, 55661468, 56254837, 56767483, 57096739, 57296328], //노멀 루시드 39
    [50299425, 51268058, 52242298, 53220402, 54200599, 55181144, 56160375, 57137935, 58098095, 59038166, 59955248, 60846197, 61707583, 62535634, 63326156, 64074423, 64775007, 65373040, 65773732, 66029711], //노멀 윌 40
    [53694979, 54740010, 55791451, 56847443, 57906097, 58965551, 60024029, 61081148, 62120094, 63137981, 64131694, 65097855, 66032778, 66932407, 67792233, 68607171, 69371382, 70022021, 70459382, 70739863], //노멀 더스크 41
    [57265913, 58407916, 59557830, 60713682, 61873463, 63035188, 64196960, 65358369, 66501422, 67623004, 68719747, 69787996, 70823758, 71822636, 72779739, 73869548, 74545724 ,75273344, 75782565, 76125425], //노멀 듄켈 42
    [82299318, 84400730, 86512844, 88629294, 90743500, 92848857, 94938942, 97004422, 99042445, 101046774, 103010657, 104926751, 106787033, 108582674, 110303867, 111939583, 113477204, 114770728, 115793089, 116565104], //하드 스우 43
    [78109210, 80111246, 82123825, 84140907, 98600471, 88163570, 90156779, 92127007, 94071536, 95984438, 97859288, 99689100, 101466238, 103182298, 104827644, 106392674, 107864471, 109112410, 110096791, 110841503], //하드 데미안 44
    [89130421, 91481668, 93848382, 96223692, 98600471, 100971542, 103329903, 105665361, 107974747, 110251195, 112487251, 114674792, 116804924, 118867843, 120852642, 122747038, 124536965, 125990318, 127158495, 128106668, ], //하드 루시드 45
    [103602500, 106490486, 109404780, 112337470, 115280302, 118224913, 121163095, 124082853, 126980368, 129847451, 132675172, 135453762, 138172483, 140819457, 143381430, 145843440, 148188316, 150012410, 151631799, 153030957, ], //카오스 더스크 46
    [98313870, 100919599, 103543030, 106176587, 108812410, 111442580, 114059366, 116651513, 119215513, 121743775, 124228055, 126659366, 129027866, 131322701, 133531794, 135641543, 137636367, 139260609, 140573180, 141640524, ], //하드 윌 47
    [108543954, 111586849, 114658258, 117749902, 120853138, 123959206, 127059500, 130141439, 133201009, 136229609, 139217857, 142155482, 145031192, 147832491, 150545430, 153154258, 155640894, 157567692, 159279074, 160799140], //하드 듄켈 48
    [123664001, 127082964, 130531775, 134000973, 137480698, 140960968, 144431996, 147879488, 151298907, 154680513, 158013694, 161286846, 164487223, 167600733, 170611660, 173502266, 176252206, 178390305, 180282233, 181943770], //하드 진 힐라 49
    [169929802, 174778540, 179676680, 184611320, 189568961, 194535892, 199498621, 204437385, 209345842, 214210427, 219016321, 223747278, 228385412, 232910905, 237301617, 241532508, 245574836, 248788252, 251623371, 254107643], //하드 선택받은 세렌 50
    [500000000, 1000000000, 1135054402, 1228367353, 1287331395], //하드 검은 마법사 51
    [36878151, 37527829, 38831584, 39483071, 41421865, 42049977, 43825912, 44347451, 44897115, 45391014, 45852896, 46279028, 46626983, 46816921, 46910177], //노멀 가디언 엔젤 슬라임 53
    [101207148, 104028362, 109740159, 112614951, 121213982, 124044504, 132321987, 134977846, 137563623, 140066362, 142471448, 144762109, 146481885, 147999505, 149331446], //카오스 가디언 엔젤 슬라임 54
    [51138596, 51138596, 51564832, 51833056, 51991665], //이지 윌 56
    [139668296, 139668296, 141325952, 142722440, 143884856], //노말 진힐라 57
    [181116193, 181116193, 183392062, 185403557, 187198193], //노말 선택받은 세렌 58
    [0, 0], //- 2
    [0, 0], //- 33
    [0, 0], //- 34
    [0, 0], //- 37
    [0, 0], //- 52
    [0, 0], //- 55
];

module.exports = crs;