//画像のオブジェクト。
//number:画像の連番,answer:答え,path:画像の相対パス,janre:ジャンル
class generatedImg{
    constructor(number, answer, path, janre){
        this.number = Number(number);
        this.answer = answer;
        this.path = path;
        this.janre = janre;
    }
}

//問題に使われる画像オブジェクトを定義
const img01 = new generatedImg(1, ['犬も歩けば棒に当たる', 'いぬもあるけばぼうにあたる'], 'image/InumoArukebaBouniataru.jpg', 'ことわざ');
const img02 = new generatedImg(2, ['一石二鳥', 'いっせきにちょう'], 'image/IssekiNityou.jpg', 'ことわざ');
const img03 = new generatedImg(3, ['壁に耳あり障子に目あり', 'かべにみみありしょうじにめあり'], 'image/KabenimimiariSyouzinimeari.jpg', 'ことわざ');
const img04 = new generatedImg(4, ['光陰矢の如し', 'こういんやのごとし'], 'image/KouinYanogotoshi.jpg', 'ことわざ');
const img05 = new generatedImg(5, ['泣きっ面に蜂', 'なきっつらにはち'], 'image/NakitturaniHachi_2.jpg', 'ことわざ');
const img06 = new generatedImg(6, ['猫に小判', 'ねこにこばん'], 'image/NekoniKoban_2.jpg', 'ことわざ');
const img07 = new generatedImg(7, ['猿も木から落ちる', 'さるもきからおちる'], 'image/SarumoKikaraOtiru_2.jpg', 'ことわざ');
const img08 = new generatedImg(8, ['時は金なり', 'ときはかねなり'], 'image/TokihaKanenari.jpg', 'ことわざ');
const img09 = new generatedImg(9, ['豚に真珠', 'ぶたにしんじゅ'], 'image/ButaniShinzyu_2.jpg', 'ことわざ');
const img10 = new generatedImg(10, ['井の中の蛙大海を知らず', 'いのなかのかわずたいかいをしらず'], 'image/InonakanoKaeru.jpg', 'ことわざ');
const img11 = new generatedImg(11, ['鬼に金棒', 'おににかなぼう'], 'image/OniniKanabou.jpg', 'ことわざ');
const img12 = new generatedImg(12, ['焼け石に水', 'やけいしにみず'], 'image/YakeishiniMizu.jpg', 'ことわざ');
const img13 = new generatedImg(13, ['名探偵コナン', 'めいたんていこなん'], 'image/MeitanteiKonan.jpg', '漫画、アニメ');
const img14 = new generatedImg(14, ['桃太郎', 'ももたろう'], 'image/Momotaro.jpg', '物語');
const img15 = new generatedImg(15, ['白雪姫', 'しらゆきひめ'], 'image/ShirayukiHime_2.jpg', '物語');
const img16 = new generatedImg(16, ['赤ずきん', 'あかずきん'], 'image/Akazukin.jpg', '物語');
const img17 = new generatedImg(17, ['飼い犬に手を嚙まれる', 'かいぬしにてをかまれる'], 'image/BittenByDog.jpg', 'ことわざ');
const img18 = new generatedImg(18, ['チェーンソーマン', 'ちぇーんそーまん'], 'image/ChainsawMan.jpg', '漫画、アニメ');
const img19 = new generatedImg(19, ['シンデレラ', 'しんでれら'], 'image/Cinderella.jpg', '物語');
const img20 = new generatedImg(20, ['デビルマン', 'でびるまん'], 'image/Devilman.jpg', '漫画、アニメ');
const img21 = new generatedImg(21,[ 'どんぐりの背比べ', 'どんぐりのせくらべ'], 'image/Dongurinoseikurabe.jpg', 'ことわざ');
const img22 = new generatedImg(22, ['ドラえもん', 'どらえもん'], 'image/Doraemon.jpg', '漫画、アニメ');
const img23 = new generatedImg(23, ['塵も積もれば山となる', 'ちりもつもればやまとなる'], 'image/DustMountain.jpg', 'ことわざ');
const img24 = new generatedImg(24, ['鋼の錬金術師', 'はがねのれんきんじゅつし'], 'image/HaganenoRenkinjutsushi.jpg', '漫画、アニメ');
const img25 = new generatedImg(25, ['ハンターハンター', 'はんたーはんたー'], 'image/HunterHunter.jpg', '漫画、アニメ');
const img26 = new generatedImg(26, ['ジョジョの奇妙な冒険', 'じょじょのきみょうなぼうけん'], 'image/JoJo.jpg', '漫画、アニメ');
const img27 = new generatedImg(27, ['鬼滅の刃', 'きめつのやいば'], 'image/Kimetsunoyaiba.jpg', '漫画、アニメ');
const img28 = new generatedImg(28, ['君の名は。', 'きみのなは'], 'image/Kiminonawa.jpg', '漫画、アニメ');
const img29 = new generatedImg(29, ['金太郎', 'きんたろう'], 'image/Kintaro.jpg', '物語');
const img30 = new generatedImg(30, ['ルパン三世', 'るぱんさんせい'], 'image/LupinTheThird.jpg', '漫画、アニメ');
const img31 = new generatedImg(31, ['七つの大罪', 'ななつのたいざい'], 'image/NanatsunoTaizai.jpg', '漫画、アニメ');
const img32 = new generatedImg(32, ['プリキュア', 'ぷりきゅあ'], 'image/PrettyCure.jpg', '漫画、アニメ');
const img33 = new generatedImg(33, ['うさぎとかめ'], 'image/RabitTurtle.jpg', '物語');
const img34 = new generatedImg(34, ['天空の城ラピュタ', 'てんくうのしろらぴゅた'], 'image/Rapyuta.jpg', '漫画、アニメ');
const img35 = new generatedImg(35, ['千と千尋の神隠し', 'せんとちひろのかみかくし'], 'image/SentoChihironoKamikakushi.jpg', '漫画、アニメ');
const img36 = new generatedImg(36, ['進撃の巨人', 'しんげきのきょじん'], 'image/ShingekinoKyojin.jpg', '漫画、アニメ');
const img37 = new generatedImg(37, ['三匹の子豚', 'さんびきのこぶた', 'さんひきのこぶた'], 'image/ThreePigs.jpg', '物語');
const img38 = new generatedImg(38, ['灯台下暗し', 'とうだいもとくらし'], 'image/Toudaimotokurashi.jpg', 'ことわざ');
const img39 = new generatedImg(39, ['二階から目薬', 'にかいからめぐすり'], 'image/EyeDrop.jpg', 'ことわざ');
const img40 = new generatedImg(40, ['火のない所に煙は立たぬ', 'ひのないところにけむりはたたぬ'], 'image/FireSmoke.jpg', 'ことわざ');
const img41 = new generatedImg(41, ['能ある鷹は爪を隠す', 'のうあるたかはつめをかくす'], 'image/HawkClaws.jpg', 'ことわざ');
const img42 = new generatedImg(42, ['下手な鉄砲数撃ちゃ当たる', 'へたなてっぽうかずうちゃあたる'], 'image/HetanaTeppou.jpg', 'ことわざ');
const img43 = new generatedImg(43, ['可愛い子には旅をさせよ', 'かわいいこにはたびをさせよ'], 'image/LoveYourChild.jpg', 'ことわざ');
const img44 = new generatedImg(44, ['海老で鯛を釣る', 'えびでたいをつる'], 'image/ShrimpFish.jpg', 'ことわざ');


//リストに格納
const img_list = [img01, img02,img03, img04, img05, img06, img07, img08, img09, img10, img11, img12, img13, img14, img15, img16, img17, img18, img19, img20, img21, img22, img23, img24, img25, img26, img27, img28, img29, img30, img31, img32, img33, img34, img35, img36, img37, img38, img39, img40, img41, img42, img43, img44];
const used_img = [];

//正答数
let score = 0;

//ゲームが始まる前に、カウントダウンをするメソッド
//id_name:カウントダウンを表示するタグのid,count:カウントダウンの数字
function count_down(id_name, count){
    let display = document.getElementById(id_name);
    
    if(count == 0){
        display.innerHTML = "Start!";
    }else{
        display.innerHTML = count;
        count--;
        setTimeout(() => {
            count_down(id_name, count);
        },1000)
    }
}

//ゲームの始まるタイマーをスタートさせるメソッド
//timelimitには、制限時間（秒数）を入れる
//id_name:タイマーを表示するタグのid,timelimit:制限時間
function timer(id_name, timelimit){
    let display = document.getElementById(id_name);
    if(timelimit == 0){
        display.innerHTML = "Stop!";
    }else{
        if((timelimit * 100) % 10 == 0){
            display.innerHTML = timelimit + "0";
        }else if((timelimit * 100) % 100 == 0){
            display.innerHTML = timelimit + "00";
        }else{
            display.innerHTML = timelimit;
        }
        timelimit = Math.floor((timelimit * 100 -1)) / 100;
        setTimeout(() => {
            timer(id_name, timelimit);
        }, 10);
    }
}

//指定されたジャンルごとに画像をまとめるメソッド
function make_junre_list(){
    let junre = getParam("junre");
    let junre_list = [];
    if(junre == "anime_manga"){
        img_list.forEach((value) => {
            if(value.janre == "漫画、アニメ" || value.janre == "物語"){
                junre_list.push(value);
            }
        })
    }else if(junre == "kotowaza"){
        img_list.forEach((value) => {
            if(value.junre == "ことわざ"){
                junre_list.push(value);
            }
        })
    }else{
        junre_list = img_list;
    }
    return junre_list;
}

//画面に問題文と画像を表示し、ユーザーの操作を処理するメソッド
//input_id:テキストボックスのid,btn_id:送信ボタンのid,skip_btn_id:スキップボタンのid,display_id:画像を表示するタグのid,message_id:正解、不正解のメッセージを表示するid,question_id:問題文を表示するid,score_id:スコアを表示するid
function game_playing(input_id, btn_id, skip_btn_id, display_id, message_id, question_id, score_id){
    //ドキュメントの部品のelementを取得
    let input = document.getElementById(input_id);
    let btn = document.getElementById(btn_id);
    let skip_btn = document.getElementById(skip_btn_id);
    let display = document.getElementById(display_id);
    let message = document.getElementById(message_id);
    let question = document.getElementById(question_id);

    //問題に使用するリストを作成
    let list = make_junre_list();

    //画像オブジェクトを生成
    let img_obj = img_apperance(list);

    //画像と問題文を表示
    display.innerHTML = '<img src=' + img_obj.path + ' width=100%/>';
    // question.innerHTML = 'この画像が意味する' + img_obj.janre + 'は？';
    question.innerHTML = 'What is the prompt？';

    //スコアを表示
    document.getElementById(score_id).innerHTML = score;

    //送信ボタンを押したときの処理
    btn.addEventListener('click', () => {
        if(img_obj.answer.includes(input.value)){
            message.innerHTML = "正解！"
            score++;
            document.getElementById(score_id).innerHTML = score;
            used_img.push(img_obj);
            game_playing(input_id, btn_id, skip_btn_id, display_id, message_id, question_id, score_id);
        }else{
            message.innerHTML = "ちがいます。"
        }
        input.value = "";
    })

    //エンターキーを押したときの処理
    window.document.onkeydown = function(event){
        if (event.key === 'Enter') {
            if(img_obj.answer.includes(input.value)){
                message.innerHTML = "正解！";
                score++;
                document.getElementById(score_id).innerHTML = score;
                used_img.push(img_obj);
                game_playing(input_id, btn_id, skip_btn_id, display_id, message_id, question_id, score_id);
            }else{
                message.innerHTML = "ちがいます。";
            }
            input.value = "";
        }
        
    }

    //スキップボタンを押したときの処理
    skip_btn.addEventListener('click', () => {
        img_obj = img_apperance(list);
        display.innerHTML = '<img src=' + img_obj.path + ' width=100%/>';
        // question.innerHTML = 'この画像が意味する' + img_obj.janre + 'は？';
        question.innerHTML = 'What is the prompt？';
    })

}

//ランダムな数字を元に、画像オブジェクトを返すメソッド。
//used_imgに含まれるものは返さない。
function img_apperance(list){
    let img_obj;
    do{
        let random = Math.random();
        let random_num = Math.round((list.length - 1) * random);
        img_obj = list[random_num];
    }while(used_img.includes(img_obj))
    return img_obj;
}

//urlからクエリを取得するメソッド
//name:クエリの名前,url:特に入れる必要はない。
function getParam(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

//ゲームの結果を発表するメソッド
//score_display:スコアを表示するタグのid,comment_display:コメントを表示するタグのid,img_display:解いた問題の画像を表示するタグのid
function result_announcement(score_display, comment_display, img_display){
    let result_score = Number(getParam("score"));
    let img_array = getParam("array").split(",");
    let result_message;
    if(result_score < 4){
        result_message = "まだまだできるはず！";
    }else if(result_score < 8){
        result_message = "なかなかやるね！";
    }else{
        result_message = "すごい！高得点だ！";
    }
    
    let result_img = "";
    if(img_array[0] != "undefined"){
        let img;
        img_list.forEach((value) => {
            if(value.number == Number(img_array[0])){
                img = value;
            }
        });
        result_img = "<div class='col-3 mt-1 mb-1'><img src=" + img.path + " width=100%><div>" + img.answer + "</div></div>";
        for(let i = 1; i < img_array.length; i++){
            img_list.forEach((value) => {
                if(value.number == Number(img_array[i])){
                    img = value;
                }
            });
            result_img += "<div class='col-3 mt-1 mb-1'><img src=" + img.path + " width=100%><div>" + img.answer + "</div></div>";
        }
    }
    
    document.getElementById(score_display).innerHTML = result_score;
    document.getElementById(img_display).innerHTML = result_img;
    document.getElementById(comment_display).innerHTML = result_message;
}