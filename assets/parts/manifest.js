// 部品画像マニフェスト（file:// では parts.json を fetch できないため JS で列挙）。PNG を追加・改名したら再生成:
// (cd assets/parts && printf '// 自動生成\nwindow.PART_IMAGES=[%s];\n' "$(ls *.png | grep -v preview | sed 's/\.png$//;s/.*/"&"/' | paste -sd,)" > manifest.js)
window.PART_IMAGES=["arm_arare","arm_kamaitachi","arm_tsutsu","body_iwao","body_nagi","body_tsubame","equip_homura","equip_ikazuchi","equip_kamenoko","equip_mimizuku","equip_taketonbo_1","equip_taketonbo_2","head_hitomi","head_mejiro","head_onibi","head_tonbo_1","head_tonbo_2","leg_doroashi","leg_hashiri","leg_kagerou"];
