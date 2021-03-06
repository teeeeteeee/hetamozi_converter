$(function() {
	var map = new Map([["key1", 1000], [5, "value"]]);
  const converte_words = new Map ([
  //hiragana
    [ "い",  "ぃ"] ,
    [ "う",  "ぅ"] ,
    [ "あ",  "ぁ"] ,
    [ "え",  "ぇ"] ,
    [ "お",  "ぉ"] ,
    [ "か",  "ゕ"] ,
    [ "き",  "₹"] ,
    [ "く", "ㄑ"] ,
    [ "け",  "ゖ"] ,
    [ "こ",  "こ"] ,	
    [ "さ",  "ㄜ"] ,
    [ "し",  "ᒐ"] ,
    [ "す",  "व"] ,
    [ "せ",  "ㄝ"] ,
    [ "そ",  "そ"] ,
//   [ "た",  "ƒ ̵̲"] ,
    [ "ち",  "ㄘ"] ,
    [ "つ",  "っ"] ,
    [ "て",  "て"],
    [ "と",  "೬"] ,
    [ "な",  "な"] ,
    [ "に",  "(ﾆ"] ,
    [ "ぬ",  "ゐ"] ,
    [ "ね",  "ね"] ,
    [ "の",  "၈"] ,
    [ "は",  "は"] ,
    [ "ひ",  "Ʊ "] ,
    [ "ふ",  "ふ"] ,
    [ "へ",  "ㇸ"] ,
    [ "ほ",  "ほ"] ,
    [ "ま",  "ま"] ,
    [ "み",  "み"] ,
    [ "む",  "む"] ,
    [ "め",  "め"] ,
    [ "も",  "₺"] ,
    [ "や",  "ゃ"] ,
    [ "ゆ",  "ゅ"] ,
    [ "よ",  "ょ"] ,
    [ "ら",  "ʖˋ"] ,
    [ "り",  "ιյ "] ,
    [ "る",  "ʓ"] ,
    [ "れ",  "れ"] ,
    [ "ろ",  "ㄋ"] ,
    [ "わ",  "ゎ"] ,
    [ "を",  "を"] ,
	[ "ん",  "ƕ"] ,	
	//katakana
    [ "ア",  "ァ"] ,
    [ "イ",  "ィ"] ,
    [ "ウ",  "ゥ"] ,
    [ "エ",  "ェ"] ,
    [ "オ",  "ォ"] ,
    [ "カ",  "ヵ"] ,
    [ "キ",  "ｷ"] ,
    [ "ク",  "ㇰ"] ,
    [ "ケ",  "ヶ"] ,
    [ "コ",  "⊃"],
    [ "ｻ",  "ｻ"] ,
    [ "シ",  "ㇱ"] ,
    [ "ス",  "ㇲ"] ,
    [ "セ",  "ㄝ"] ,
    [ "ソ",  "`ﾉ"] ,
    [ "タ",  "夕"] ,
    [ "チ",  "千"] ,
    [ "ツ",  "ッ"] ,
    [ "テ",  "〒"] ,
    [ "ト",  "ㇳ"] ,
    [ "ナ",  "𠂇"] ,
    [ "ニ",  "二"] ,
    [ "ヌ",  "ㇴ"] ,
    [ "ネ",  "礻"] ,
    [ "ノ",  "丿"] ,
    [ "ハ",  "ㇵ"] ,
    [ "ヒ",  "ㇶ"] ,
    [ "フ",  "ㇷ"] ,
    [ "ヘ",  "ㇸ"] ,
    [ "ホ",  "ㇹ"] ,
    [ "マ",  "龴"] ,
    [ "ミ",  "ﾐ"] ,
    [ "ム",  "ㇺ"] ,
    [ "メ",  "ㄨ"] ,
    [ "モ",  "ﾓ"] ,
    [ "ヤ",  "ャ"] ,
    [ "ユ",  "ュ"] ,
    [ "ヨ",  "ョ"] ,
    [ "ラ",  "ㇻ"] ,
    [ "リ",  "ㇼ"] ,
    [ "ル",  "ㇽ"] ,
    [ "レ",  "ㇾ"] ,
    [ "ロ",  "ㇿ"] ,
    [ "ワ",  "ヮ"] ,
    [ "ヲ",  "ｦ"] ,
	[ "ン",  "冫"] ,	
	
	//end_row
    [ "",  ""]]);

  const dakuten_words = new Map ([
    [ "が",  "ゕ\""] ,
	[ "ぎ",  "₹\""] ,	
	[ "ぐ",  "ㄑ\""] ,	
	[ "げ",  "ゖ\""] ,	
	[ "ご",  "こ\""] ,	
	[ "ざ",  "ㄜ\""] ,	
	[ "じ",  "ᒐ\""] ,	
	[ "ず",  "व\""] ,	
	[ "ぜ",  "ㄝ\""] ,	
	[ "ぞ",  "そ\""] ,	
	[ "だ",  "た\""] ,	
	[ "ぢ",  "ㄘ\""] ,	
	[ "づ",  "っ\""] ,	
	[ "で",  "て\""] ,	
	[ "ど",  "೬\""] ,	
	[ "ば",  "は\""] ,	
	[ "び",  "Ʊ\""] ,	
	[ "ぶ",  "ふ\""] ,	
	[ "べ",  "ㇸ\""] ,	
	[ "ぼ",  "ほ\""] ,	
	[ "ぱ",  "ぱ"] ,	
	[ "ぴ",  "Ʊ゜"] ,	
	[ "ぷ",  "ぷ"] ,	
	[ "ぺ",  "ㇸ゜"] ,	
	[ "ぽ",  "ぽ"] ,	
	[ "ガ",  "ヵ\""] ,	
	[ "ギ",  "ｷ\""] ,	
	[ "グ",  "ㇰ\""] ,	
	[ "ゲ",  "ヶ\""] ,	
	[ "ゴ",  "⊃\""] ,	
	[ "ザ",  "サ\""] ,	
	[ "ジ",  "ㇱ\""] ,	
	[ "ズ",  "ㇲ\""] ,	
	[ "ゼ",  "ㄝ\""] ,	
	[ "ゾ",  "`ﾉ\""] ,	
	[ "ダ",  "夕\""] ,	
	[ "ヂ",  "千\""] ,	
	[ "ヅ",  "ッ\""] ,	
	[ "デ",  "〒\""] ,	
	[ "ド",  "ㇳ\""] ,	
	[ "バ",  "ㇵ\""] ,	
	[ "ビ",  "ㇶ\""] ,	
	[ "ブ",  "ㇷ\""] ,	
	[ "ベ",  "ㇸ\""] ,	
	[ "ボ",  "ㇹ\""] ,	
	[ "パ",  "ㇵﾟ"] ,	
	[ "ピ",  "ㇶﾟ"] ,	
	[ "プ",  "ㇷﾟ"] ,	
	[ "ペ",  "ㇸﾟ"] ,	
	[ "ポ",  "ㇹﾟ"] ,		
	//end_row
    [ "",  ""]]);  
  $("#convert").on("click", function() {
    const input_word = $("#input_word").val()
    const words = input_word.split('')
	let output_word = ""
	
	const is_dakuten = $("#check_dakuten").prop("checked")
	words.forEach(function(word, index, array) {
      const searched_converte_word = converte_words.get(word)
	  let work_word = searched_converte_word == undefined ? word:searched_converte_word
	  	  	  
	  if(is_dakuten) {
		  const searched_dakuten_word = dakuten_words.get(word)
		  work_word = searched_dakuten_word == undefined ? work_word:searched_dakuten_word
	  }	  
	  output_word += work_word
	})

	$("#output_word").val(output_word)
  });
});