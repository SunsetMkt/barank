let ResourceData = [
// [連番,"名前","二つ名","","所属グループ1文字を並べたもの"]
["001","空崎ヒナ","日奈","-","a"]
,["002","天雨アコ","亚子","-","a"]
,["003","銀鏡イオリ","伊织","-","a"]
,["004","火宫チナツ","千夏","-","a"]
,["005","棗イロハ","伊吕波","-","a"]
,["006","陸八魔アル","阿露","-","a"]
,["007","浅黄ムツキ","睦月","-","a"]
,["008","鬼方カヨコ","佳代子","-","a"]
,["009","伊草ハルカ","遥香","-","a"]
,["010","黒舘ハルナ","晴奈","-","a"]
,["011","赤司ジュンコ","淳子","-","a"]
,["012","鰐渕アカリ","明里","-","a"]
,["013","獅子堂イズミ","泉","-","a"]
,["014","愛清フウカ","枫香","-","a"]
,["015","牛牧ジュリ","朱莉","-","a"]
,["016","氷室セナ","濑名","-","a"]
,["017","下倉メグ","惠","-","a"]
,["018","早瀬ユウカ","优香","-","b"]
,["019","生塩ノア","诺亚","-","b"]
,["020","黒崎コユキ","小雪","-","b"]
,["021","美甘ネル","尼禄","-","b"]
,["022","一之瀬アスナ","明日奈","-","b"]
,["023","角楯カリン","花凛","-","b"]
,["024","室笠アカネ","朱音","-","b"]
,["025","飛鳥馬トキ","时","-","b"]
,["026","白石ウタハ","歌原","-","b"]
,["027","猫塚ヒビキ","响","-","b"]
,["028","豊見コトリ","柯托莉","-","b"]
,["029","花岡ユズ","柚子","-","b"]
,["030","才羽モモイ","桃井","-","b"]
,["031","才羽ミドリ","绿","-","b"]
,["032","天童アリス","爱丽丝","-","b"]
,["033","各務チヒロ","千寻","-","b"]
,["034","小塗マキ","真纪","-","b"]
,["035","小鈎ハレ","晴","-","b"]
,["036","音瀬コタマ","小玉","-","b"]
,["037","明星ヒマリ","日鞠","-","b"]
,["038","和泉元エイミ","艾米","-","b"]
,["039","乙花スミレ","菫","-","b"]
,["040","聖園ミカ","未花","-","c"]
,["041","桐藤ナギサ","渚","-","c"]
,["042","剣先ツルギ","鹤城","-","c"]
,["043","羽川ハスミ","莲见","-","c"]
,["044","静山マシロ","真白","-","c"]
,["045","歌住サクラコ","樱子","-","c"]
,["046","伊落マリー","玛丽","-","c"]
,["047","若葉ヒナタ","日向","-","c"]
,["048","蒼森ミネ","美祢","-","c"]
,["049","鷲見セリナ","芹娜","-","c"]
,["050","朝顔ハナエ","花江","-","c"]
,["051","阿慈谷ヒフミ","日富美","-","c"]
,["052","白洲アズサ","梓","-","c"]
,["053","下江コハル","小春","-","c"]
,["054","浦和ハナコ","花子","-","c"]
,["055","柚鳥ナツ","夏","-","c"]
,["056","杏山カズサ","和纱","-","c"]
,["057","伊原木ヨシミ","好美","-","c"]
,["058","栗村アイリ","爱莉","-","c"]
,["059","守月スズミ","铃美","-","c"]
,["060","宇沢レイサ","玲纱","-","c"]
,["061","古関ウイ","忧","-","c"]
,["062","円堂シミコ","志美子","-","c"]
,["063","錠前サオリ","纱织","-","h"]
,["064","秤アツコ","亚津子","-","h"]
,["065","戒野ミサキ","美咲","-","h"]
,["066","槌永ヒヨリ","日和","-","h"]
,["067","小鳥遊ホシノ","星野","-","l"]
,["068","砂狼シロコ","白子","-","l"]
,["069","十六夜ノノミ","野宫","-","l"]
,["070","黒見セリカ","芹香","-","l"]
,["071","奥空アヤネ","绫音","-","l"]
,["072","狐坂ワカモ","若藻","-","d"]
,["073","桑上カホ","果穗","-","d"]
,["074","和楽チセ","千世","-","d"]
,["075","千鳥ミチル","满","-","d"]
,["076","大野ツクヨ","月咏","-","d"]
,["077","久田イズナ","泉奈","-","d"]
,["078","河和シズコ","静子","-","d"]
,["079","朝比奈フィーナ","菲娜","-","d"]
,["080","春日ツバキ","椿","-","d"]
,["081","水羽ミモリ","三森","-","d"]
,["082","勇美カエデ","枫","-","d"]
,["083","近衛ミナ","南","-","e"]
,["084","朱城ルミ","瑠美","-","e"]
,["085","春原シュン","瞬","-","e"]
,["086","春原シュン（幼女）","瞬（幼女）","-","e"]
,["087","春原ココナ","心奈","-","e"]
,["088","薬子サヤ","纱绫","-","e"]
,["089","連河チェリノ","切里诺","-","f"]
,["090","佐城トモエ","巴","-","f"]
,["091","池倉マリナ","玛丽娜","-","f"]
,["092","天見ノドカ","和香","-","f"]
,["093","間宵シグレ","时雨","-","f"]
,["094","安守ミノリ","实梨","-","f"]
,["095","姫木メル","梅露","-","f"]
,["096","秋泉モミジ","红叶","-","f"]
,["097","尾刃カンナ","康娜","-","g"]
,["098","中務キリノ","桐乃","-","g"]
,["099","合歓垣フブキ","吹雪","-","g"]
,["100","月雪ミヤコ","宫子","-","g"]
,["101","空井サキ","咲","-","g"]
,["102","風倉モエ","萌绘","-","g"]
,["103","霞沢ミユ","美游","-","g"]
,["104","鬼怒川カスミ","霞","-","a"]
,["105","仲正イチカ","一花","-","c"]
,["106","初音ミク","初音未来","-","i"]
,["107","御坂美琴","御坂美琴","-","i"]
,["108","食蜂操祈","食蜂操祈","-","i"]
,["109","佐天涙子","佐天泪子","-","i"]
,["110","勘解由小路ユカリ","缘里","-","d"]
,["111","不破レンゲ","莲华","-","d"]
,["112","桐生キキョウ","桔梗","-","d"]
,["701","ビナー","大蛇","-","z"]
,["702","ケセド","球","-","z"]
,["703","ゴズ","GOZ","-","z"]
,["704","グレゴリオ","格里高利","-","z"]
,["705","ヒエロニムス","主教","-","z"]
,["706","ホド","HOD","-","z"]
,["707","KAITEN FX Mk.0","寿司人","-","z"]
,["708","クロカゲ","黑影","-","z"]
,["709","ペロロジラ","佩洛洛斯拉","-","z"]
,["710","シロ＆クロ","黑白","-","z"]
,["711","ホバークラフト","船藻","-","z"]
,["801","羽沼マコト","真琴","-","a"]
,["802","丹花イブキ","伊吹","-","a"]
,["803","サツキ","皐月","-","a"]
,["804","旗見エリカ","绘里香","-","a"]
,["805","夜桜キララ","绮良","-","a"]
,["806","調月リオ","莉音","-","b"]
,["807","百合園セイア","圣娅","-","c"]
,["808","竜華キサキ","妃咲","-","e"]
,["809","鹿山レイジョ","丽情","-","e"]
,["810","クズノハ","葛叶","-","d"]
,["811","御稜ナグサ","名草","-","d"]
,["812","天地ニヤ","妮娅","-","d"]
,["813","里浜ウミカ","海香","-","d"]
,["814","七度ユキノ","雪乃","-","g"]
,["815","ニコ","妮可","-","g"]
,["816","クルミ","胡桃","-","g"]
,["817","オトギ","音葵","-","g"]
,["818","川流シノン","志乃","-","k"]
,["819","風巻マイ","麦","-","k"]
,["820","河駒風ラブ","兰舞","-","i"]
,["821","シロコ＊テラー","白子（恐怖）","-","l"]
,["822","ケイ","key","-","b"]
,["823","清澄アキラ","晶","-","i"]
,["824","申谷カイ","廻","-","e"]
,["825","三善タカネ","贵音","-","f"]
,["826","荒槇ヤクモ","八云","-","f"]
,["827","箭吹シュロ","棕榈","-","d"]
,["828","アラタ","新","-","d"]
,["829","コクリコ","虞美人","-","d"]
,["830","野正レイ","丽","-","b"]
,["831","元宮チアキ","千秋","-","a"]
,["832","梔子ユメ","梦","-","l"]
,["833","小鳥遊ホシノ（1年生）","星野（1年级）","-","l"]
,["834","小鳥遊ホシノ（2年生）","星野（2年级）","-","l"]
,["835","十六夜ノノミ（1年生）","野宫（1年级）","-","l"]
,["836","朝霧スオウ","周防","-","n"]
,["837","橘ヒカリ","光明","-","n"]
,["838","橘ノゾミ","希望","-","n"]
,["839","椎名ツムギ","䌷","-","o"]
,["840","コノカ","木乃香","-","g"]
,["841","砂狼シロコ（1年生）","白子（1年级）","-","l"]
,["842","栗浜アケミ","明美","-","i"]
,["843","ホシノ＊テラー","星野（恐怖）","-","l"]
,["844","ニヤニヤ教授","眯眯眼教授","-","i"]
,["901","アロナ","阿罗娜","-","j"]
,["902","プラナ","普拉娜","-","j"]
,["903","ソラ","空","-","j"]
,["904","七神リン","凛","-","j"]
,["905","由良木モモカ","桃香","-","j"]
,["906","不知火カヤ","花耶","-","j"]
,["907","岩櫃アユム","步美","-","j"]
,["908","扇喜アオイ","葵","-","j"]
,["909","スモモ","李","-","j"]
,["910","ハイネ","灰音","-","j"]
,["911","連邦生徒会長","会长","-","j"]
,["912","アイン","无","-","m"]
,["913","オウル","光","-","m"]
,["914","ソフ","限","-","m"]
];

/** 重複データを見つけると警告する（管理者用） */
function detectDup(){
	for( let i = ResourceData.length -1; i>=0; i-- ){
		let found = false;
		for(let j = ResourceData.length -1; j>=0; j--){
			if(i == j){
				continue;
			}
			if( ResourceData[i][0] == ResourceData[j][0] ){
				alert( "Detected duplicated key @ " + ResourceData[j][0] );
				found = true;
				break;
			}
		}
		if(found){
			break;
		}
	}
}
//detectDup();
