const skn = {};

skn.getskillNightlord = function (skillname){
    var nret = -1;
    switch(skillname){
        case "스프레드 스로우":
        case "스프레드스로우":
        case "스프레드":
        case "스프":
            nret = 0;
            break;
        case "풍마수리검":
        case "풍마":
        case "풍수":
            nret = 1;
            break;
        case "다크로드의 비전서":
        case "다크로드의비전서":
        case "다크로드":
        case "비전서":
        case "비전":
            nret = 2;
            break;
        case "스로우 블래스팅":
        case "스로우블래스팅":
        case "블래스팅":
        case "스블":
            nret = 3;
            break;
        case "다크 사이트":
        case "다크사이트":
        case "닼사":
        case "닼싸":
        case "투명":
            nret = 4;
            break;
        case "윈드 탈리스만":
        case "윈드탈리스만":
        case "탈리스만":
        case "윈탈":
        case "밀격":
            nret = 5;
            break;
        case "마크 오브 어쌔신":
        case "마크오브 어쌔신":
        case "마크오브어쌔신":
        case "마크 오브 어썌신":
        case "마크오브 어썌신":
        case "마크오브어썌신":
        case "마오어":
            nret = 6;
            break;
        case "쉐도우 러쉬":
        case "쉐도우러쉬":
        case "쉐러":
        case "러쉬":
        case "돌진기":
            nret = 7;
            break;
        case "쉐도우 리프":
        case "쉐도우리프":
        case "쉐리":
        case "리프":
        case "윗점":
            nret = 8;
            break;
        case "다크 플레어":
        case "다크플레어":
        case "다플":
        case "닼플":
        case "플레어":
            nret = 9;
            break;
        case "쉐도우 파트너":
        case "쉐도우파트너":
        case "쉐파":
        case "분신":
            nret = 10;
            break;
        case "스피릿 자벨린":
        case "스피릿자벨린":
        case "스피릿":
            nret = 11;
            break;
        case "래디컬 다크니스":
        case "래디컬다크니스":
        case "래디컬":
        case "래다":
            nret = 12;
            break;
        case "베놈":
            nret = 13;
            break;
        case "숙련된 표창술":
        case "숙련된표창술":
        case "숙련표창술":
        case "숙련":
        case "숙표":
            nret = 14;
            break;
        case "아드레날린":
        case "아드":
            nret = 15;
            break;
        case "쿼드러플 스로우":
        case "쿼드러플스로우":
        case "쿼드":
        case "쿼스":
            nret = 16;
            break;
        case "쇼다운 챌린지":
        case "쇼다운챌린지":
        case "쇼다":
        case "쇼챌":
            nret = 17;
            break;
        case "마크 오브 나이트로드":
        case "마크오브 나이트로드":
        case "마크오브나이트로드":
        case "마오나":
            nret = 18;
            break;
        case "써든레이드":
        case "서든레이드":
        case "써든 레이드":
        case "서든 레이드":
        case "써든":
        case "서든":
        case "써레":
        case "서레":
            nret = 19;
            break;
        case "퍼지 에어리어":
        case "퍼지에어리어":
        case "퍼지":
        case "퍼에":
            nret = 20;
            break;
        case "다크 세레니티":
        case "다크세레니티":
        case "세레니티":
            nret = 21;
            break;
        case "페이크":
            nret = 22;
            break;
        case "페이탈 베놈":
        case "페이탈베놈":
        case "페이탈":
            nret = 23;
            break;
        case "블리딩 톡신":
        case "블리딩톡신":
        case "블리딩":
        case "블톡":
            nret = 24;
            break;
        case "포 시즌":
        case "포시즌":
        case "포시":
            nret = 25;
            break;
        case "":
            nret = 26;
            break;
        case "":
            nret = 27;
            break;
        case "":
            nret = 28;
            break;
        case "":
            nret = 29;
            break;
    }
    return nret;
};
skn.getskillnameNightlord = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "스프레드 스로우";
            break;
        case 1:
            rep = "풍마수리검";
            break;
        case 2:
            rep = "다크로드의 비전서";
            break;
        case 3:
            rep = "스로우 블래스팅";
            break;
        case 4:
            rep = "다크 사이트";
            break;
        case 5:
            rep = "윈드 탈리스만";
            break;
        case 6:
            rep = "마크 오브 어쌔신";
            break;
        case 7:
            rep = "쉐도우 러쉬";
            break;
        case 8:
            rep = "쉐도우 리프";
            break;
        case 9:
            rep = "다크 플레어";
            break;
        case 10:
            rep = "쉐도우 파트너";
            break;
        case 11:
            rep = "스피릿 자벨린";
            break;
        case 12:
            rep = "래디컬 다크니스";
            break;
        case 13:
            rep = "베놈";
            break;
        case 14:
            rep = "숙련된 표창술";
            break;
        case 15:
            rep = "아드레날린";
            break;
        case 16:
            rep = "쿼드러플 스로우";
            break;
        case 17:
            rep = "쇼다운 챌린지";
            break;
        case 18:
            rep = "마크 오브 나이트로드";
            break;
        case 19:
            rep = "써든레이드";
            break;
        case 20:
            rep = "퍼지 에어리어";
            break;
        case 21:
            rep = "다크 세레니티";
            break;
        case 22:
            rep = "페이크";
            break;
        case 23:
            rep = "페이탈 베놈";
            break;
        case 24:
            rep = "블리딩 톡신";
            break;
        case 25:
            rep = "포 시즌";
            break;
        case 26:
            rep = "";
            break;
        case 27:
            rep = "";
            break;
        case 28:
            rep = "";
            break;
        case 29:
            rep = "";
            break;
    }
    return rep;
};
skn.getskilldesc1Nightlord = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "50초간 스로우류 스킬사용시 여러 방향으로 던짐/ 쿨180초";
            break;
        case 1:
            rep = "하단 참조";
            break;
        case 2:
            rep = "하단 참조";
            break;
        case 3:
            rep = "하단 참조";
            break;
        case 4:
            rep = "하단 참조";
            break;
        case 5:
            rep = "최대 6명의 적에게 245% 데미지를 주며 350 거리만큼 밀어냄";
            break;
        case 6:
            rep = "40% 확률로 표식, 다시공격시 30% + 레벨당 1% 데미지 표창2개 생성";
            break;
        case 7:
            rep = "하단 참조";
            break;
        case 8:
            rep = "MP 16 소비, 일정 거리 도약";
            break;
        case 9:
            rep = "MP 100 소비, 60초 동안 거대한 수리검 소환, 쿨 60초";
            break;
        case 10:
            rep = "200초간 모든공격에 최종뎀 70%로 추가타격 하는 그림자동료 소환";
            break;
        case 11:
            rep = "공격력 10 증가, 표창 소비 없이 공격 가능";
            break;
        case 12:
            rep = "최대 HP 20%, 상태 이상 내성 30, 모든 속성 내성 30% 증가";
            break;
        case 13:
            rep = "공격 시 30% 확률로, 6초 동안 1초당 90% 데미지의 도트 데미지 추가";
            break;
        case 14:
            rep = "최종 데미지 25% 증가, 크리티컬 확률 20% 증가";
            break;
        case 15:
            rep = "회복아이템 회복량 170% 증가, 크뎀 10%, 스탠스 40%";
            break;
        case 16:
            rep = "MP 26 소비, 표창 4개 소비, 470% 데미지로 4번 공격";
            break;
        case 17:
            rep = "하단 참조";
            break;
        case 18:
            rep = "60% 확률로 표식, 다시공격시 60% + 레벨당 1% 데미지 표창3개 생성";
            break;
        case 19:
            rep = "표창 1개 소비, 최대 15명의 적에게 494% 데미지로 7번 공격";
            break;
        case 20:
            rep = "40초간 결계안의 (보스몬스터 제외) 적 공격력,방어율 30% 감소, 이속 -60";
            break;
        case 21:
            rep = "공격력 40, 몬스터 방어율 무시 30% 증가";
            break;
        case 22:
            rep = "45% 확률로 추가 회피, 스탠스 확률 60% 증가";
            break;
        case 23:
            rep = "공격시 50%확률, 8초간 초당 160% 도트 데미지, 3회 중첩 가능";
            break;
        case 24:
            rep = "80초 동안 공격력 60, 공격시 100%확률 초당 1000% 3초간 출혈효과 발생";
            break;
        case 25:
            rep = "표창 1개 소비, 주위의 8명의 적에게 358% 데미지로 7번 공격";
            break;
        case 26:
            rep = "";
            break;
        case 27:
            rep = "";
            break;
        case 28:
            rep = "";
            break;
        case 29:
            rep = "";
            break;
    }
    return rep;
};
skn.getskilldesc2Nightlord = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "쿼드러플 스로우 : 3방향 추가, 최종뎀 20%감소";
            break;
        case 1:
            rep = "멈추는 위치를 잘 조절하는 것이 중요";
            break;
        case 2:
            rep = "사출되는 표창의 수는 적의 수에 비례해 증가";
            break;
        case 3:
            rep = "투명도를 최대한 낮춰도 이펙트가 보스를 가림";
            break;
        case 4:
            rep = "지속중 다른스킬 사용, 스킬키 한번더 눌러 상태 해제가능";
            break;
        case 5:
            rep = "MP 17 소비, 표창 2개 소비";
            break;
        case 6:
            rep = "온오프 스킬";
            break;
        case 7:
            rep = "전진 이동기";
            break;
        case 8:
            rep = "공중으로 도약한다.";
            break;
        case 9:
            rep = "일정 주기로 주위의 적 3명을 360%의 데미지로 공격";
            break;
        case 10:
            rep = "소환 스킬, 전직업 공용 5차 스킬 및 일부 스킬에는 적용되지 않는다.";
            break;
        case 11:
            rep = "인벤토리 내 표창 중 가장 앞에 있는 표창의 공격력이 적용";
            break;
        case 12:
            rep = "-";
            break;
        case 13:
            rep = "카데나의 링크 스킬과 궁합이 좋다.";
            break;
        case 14:
            rep = "-";
            break;
        case 15:
            rep = "단, 엘릭서와 같이 %로 회복시켜 주는 아이템에는 적용되지 않는다";
            break;
        case 16:
            rep = "대상 지정형 투사체 스킬";
            break;
        case 17:
            rep = "공격 당한 적은 몸통박치기 판정이 삭제";
            break;
        case 18:
            rep = "표식을 남길 확률이 60%이지, 마크의 사출 확률이 60%가 아님";
            break;
        case 19:
            rep = "10초 동안 1초당 210%의 도트 데미지, 재사용 대기시간 30초";
            break;
        case 20:
            rep = "[패시브 효과 : 보스 몬스터 공격 시 데미지 10% 증가]";
            break;
        case 21:
            rep = "-";
            break;
        case 22:
            rep = "-";
            break;
        case 23:
            rep = "베놈 강화 패시브";
            break;
        case 24:
            rep = "재사용 대기시간 180초";
            break;
        case 25:
            rep = "재사용 대기시간 14초";
            break;
        case 26:
            rep = "";
            break;
        case 27:
            rep = "";
            break;
        case 28:
            rep = "";
            break;
        case 29:
            rep = "";
            break;
    }
    return rep;
};
skn.getskilldesc3Nightlord = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "";
            break;
        case 1:
            rep = "MP 800 소비, 일정 주기마다 최대 6명의 적을 550%의 데미지로 5번 공격하는 거대 수리검 투척\n\n거대 수리검은 일정거리 날아간 후 제자리에 2초 동안 머물며 추가 공격하고 소멸, 수리검이 날아갈 때 스킬을 재사용하면 즉시 현재 자리에서 멈춤\n\n풍마수리검으로는 마크 오브 어쌔신 공격 발동 확률 기존의 40%만 적용\n\n재사용 대기시간 25초";
            break;
        case 2:
            rep = "MP 1000 소비, 12초 동안 최대 7명의 적에게 770%의 데미지를 주는 표창 적 1명 당 5개 사출\n\n표창 7개가 적의 수와 관계 없이 추가 사출\n\n보스 몬스터 공격 시 데미지 30% 증가\n\n지속 시간 종료 시 두루마리가 폭발하며 최대 12명의 적을 1980%의 데미지로 10번 추가 공격\n\n재사용 대기시간 60초";
            break;
        case 3:
            rep = "폭발 부적 : 수리검을 던지는 공격 스킬이 적중한 적 주위에서 최대 6명의 적을 1045%의 데미지로 5번 공격하는 폭발 발생\n\n패시브 효과 : 10초마다 폭발 부적이 1개 준비되고 발동, 액티브 효과와 패시브 효과는 동시에 발동되지 않음\n\n액티브 효과 : MP 1000 소비, 90초 동안 68개의 폭발 부적 사용 가능, 공격 스킬 1회당 최소 2개에서 최대 4개의 부적 사용, 재사용 대기시간 : 180초";
            break;
        case 4:
            rep = "MP 5 소비, 200초 동안 그림자에 몸을 숨김\n최대 HP의 일정 비율로 피해를 입히는 공격을 회피하였을 경우 다크 사이트가 해제되었을 때 회피한 횟수당 재사용 대기시간 3초 적용, 최대 5번까지 중첩\n\n매그너스의 운석과 수면가스\n블러디 퀸의 불꽃 도트 데미지\n벨룸의 종유석, 피에르의 모자\n반반의 시계\n스우의 낙하물\n우르스의 불꽃파편\n데미안의 불꽃구체와 석화, 돌진\n윌의 심연의 장벽\n파풀라투스의 시간의 틈 장판과 저주, 태엽(알람패턴 한정)\n진 힐라 잡몹 시체\n듄켈의 낙하물\n더스크의 운석\n검은 마법사의 붉은번개, 모닝 스타폴, 다크 폴링, 창조의 권능";
            break;
        case 5:
            rep = "";
            break;
        case 6:
            rep = "";
            break;
        case 7:
            rep = "그림자와 하나가 되어 전방으로 신속하게 이동한다. 암살자의 표식이 있는 적을 공격할 때마다 그림자의 힘을 얻어 더욱 빠르게 재사용할 수 있다.\n자신의 공격 스킬 사용 중에도 이동할 수 있다.\n\nMP 35 소비, 일정 거리 이동, 돌진 중 다크사이트\n재사용 대기시간 5초\n마크 오브 어쌔신, 마크 오브 나이트로드의 암살자의 표식이 새겨진 적을 공격할 때마다 재사용 대기시간 1초 감소";
            break;
        case 17:
            rep = "최대 6명의 적을 공격하며 도발하여 부딪히지 않는 상태로 만든다. 도발당한 적은 경험치 획득량과 아이템 드롭율도 함께 증가하며 보스에게도 절반의 효과가 적용된다.\n부적이 폭발할 때 어둠의 수리검이 생성되어 주변의 적을 추적하여 공격한다. 어둠의 수리검은 공격반사 상태의 적을 공격해도 피해를 입지 않는다.\n\nMP 50, 표창 3개 소비\n최대 6명의 적 708% 데미지로 2번 공격하고 6개의 수리검을 생성하며 도발\n도발당한 적은 부딪히지 않은 상태 지속. 140초 동안 획득 경험치, 아이템 드롭률 5% 증가, 보스일 경우 효과 절반\n수리검은 24% 데미지로 6번 공격을 하며 한 명의 적이 여러 개의 수리검에 맞을 경우 두번째 수리검부터 최종 데미지 50% 감소, 일반 몬스터 공격 시 데미지 200% 증가\n\n수리검 생성 후 재생성까지 대기시간 5초";
            break;
        case 9:
            rep = "";
            break;
    }
    return rep;
};
skn.getskillimage1Nightlord = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "https://i.imgur.com/gggwFLD.png";
            break;
        case 1:
            rep = "https://i.imgur.com/Q4hit45.png";
            break;
        case 2:
            rep = "https://i.imgur.com/O4KfPxS.png";
            break;
        case 3:
            rep = "https://i.imgur.com/zytyfO6.png";
            break;
        case 4:
            rep = "https://i.imgur.com/y41oEJP.png";
            break;
        case 5:
            rep = "https://i.imgur.com/6A9mlHk.png";
            break;
        case 6:
            rep = "https://i.imgur.com/zDHSru5.png";
            break;
        case 7:
            rep = "https://i.imgur.com/jY8DDPJ.png";
            break;
        case 8:
            rep = "https://i.imgur.com/o72vDkI.png";
            break;
        case 9:
            rep = "https://i.imgur.com/hunyKCH.png";
            break;
        case 10:
            rep = "https://i.imgur.com/BKMmDQw.png";
            break;
        case 11:
            rep = "";
            break;
        case 12:
            rep = "";
            break;
        case 13:
            rep = "https://i.imgur.com/61Ls605.png";
            break;
        case 14:
            rep = "";
            break;
        case 15:
            rep = "";
            break;
        case 16:
            rep = "https://i.imgur.com/MQlhJqs.png";
            break;
        case 17:
            rep = "https://i.imgur.com/NdekLLx.png";
            break;
        case 18:
            rep = "https://i.imgur.com/qEj2kI5.png";
            break;
        case 19:
            rep = "https://i.imgur.com/AxZCmNw.png";
            break;
        case 20:
            rep = "https://i.imgur.com/Ed9947X.png";
            break;
        case 21:
            rep = "";
            break;
        case 22:
            rep = "https://i.imgur.com/1SCWP5x.png";
            break;
        case 23:
            rep = "https://i.imgur.com/CfJxNXR.png";
            break;
        case 24:
            rep = "https://i.imgur.com/rcF2Aul.png";
            break;
        case 25:
            rep = "https://i.imgur.com/rTgWpcq.png";
            break;
        case 26:
            rep = "";
            break;
        case 27:
            rep = "";
            break;
        case 28:
            rep = "";
            break;
        case 29:
            rep = "";
            break;
    }
    return rep;
};
skn.getskillimage2Nightlord = function (skillcode){
    rep = "";
    switch(skillcode){
        case 0:
            rep = "https://i.imgur.com/8zkgrAs.png";
            break;
        case 1:
            rep = "https://i.imgur.com/lysGbbK.png";
            break;
        case 2:
            rep = "https://i.imgur.com/JRSezkU.png";
            break;
        case 3:
            rep = "https://i.imgur.com/pmDKhbM.png";
            break;
        case 4:
            rep = "https://i.imgur.com/EnMGhIf.png";
            break;
        case 5:
            rep = "https://i.imgur.com/kjf3e8r.png";
            break;
        case 6:
            rep = "https://i.imgur.com/MLHklxt.png";
            break;
        case 7:
            rep = "https://i.imgur.com/K1GScFu.png";
            break;
        case 8:
            rep = "https://i.imgur.com/3NNB4fV.png";
            break;
        case 9:
            rep = "https://i.imgur.com/OuArJpT.png";
            break;
        case 10:
            rep = "https://i.imgur.com/XX1ysRc.png";
            break;
        case 11:
            rep = "https://i.imgur.com/RJpXUBz.png";
            break;
        case 12:
            rep = "https://i.imgur.com/Uoa5Rem.png";
            break;
        case 13:
            rep = "https://i.imgur.com/Q19AqHz.png";
            break;
        case 14:
            rep = "https://i.imgur.com/OkMtt7e.png";
            break;
        case 15:
            rep = "https://i.imgur.com/vV3lzeY.png";
            break;
        case 16:
            rep = "https://i.imgur.com/o0h8uGi.png";
            break;
        case 17:
            rep = "https://i.imgur.com/643jwdV.png";
            break;
        case 18:
            rep = "https://i.imgur.com/XhvRcl2.png";
            break;
        case 19:
            rep = "https://i.imgur.com/WvxrD5e.png";
            break;
        case 20:
            rep = "https://i.imgur.com/FGNVTYD.png";
            break;
        case 21:
            rep = "https://i.imgur.com/S1QoTWI.png";
            break;
        case 22:
            rep = "https://i.imgur.com/p3ZSEA9.png";
            break;
        case 23:
            rep = "https://i.imgur.com/kzA6RKu.png";
            break;
        case 24:
            rep = "https://i.imgur.com/TJswi0E.png";
            break;
        case 25:
            rep = "https://i.imgur.com/ojgv9ku.png";
            break;
        case 26:
            rep = "";
            break;
        case 27:
            rep = "";
            break;
        case 28:
            rep = "";
            break;
        case 29:
            rep = "";
            break;
    }
    return rep;
};

module.exports = skn;