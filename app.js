// --- SAIZERIYA MENU DATABASE (Expanded to 82 items matching Spring/Summer 2026 Grand Menu) ---
const MENU_DATABASE = [
  // Appetizers & Sides (前菜・サイド・パンライス・トッピング) - Category: appetizer
  { name: "辛味チキン", price: 300, code: "1401", category: "appetizer", description: "マイルドな辛さでジューシーな、不動の人気No.1サイドメニュー。" },
  { name: "アロスティチーニ", price: 400, code: "1402", category: "appetizer", description: "ラム肉の旨味を特製スパイスで引き立てたイタリア風串焼き。" },
  { name: "ほうれん草のソテー", price: 200, code: "1403", category: "appetizer", description: "ほうれん草をオリーブオイル and ソルトでシンプルにソテー。" },
  { name: "ポップコーンシュリンプ", price: 300, code: "1404", category: "appetizer", description: "サクサク食感のひと口小エビフライ。オーロラソースを添えて。" },
  { name: "エスカルゴのオーブン焼き", price: 400, code: "1405", category: "appetizer", description: "ヨーロッパ産エスカルゴをガーリックバターで香ばしく焼き上げ。" },
  { name: "小エビのカクテル", price: 280, code: "1406", category: "appetizer", description: "プリプリの小エビを特製オーロラソースでいただく冷たい前菜。" },
  { name: "チョリソー", price: 400, code: "1407", category: "appetizer", description: "ピリッとスパイシーでジューシーな本格ポークソーセージ。" },
  { name: "蒸し鶏の香味ソース", price: 280, code: "1408", category: "appetizer", description: "しっとり蒸し鶏に、ネギと醤油ベースの特製香味ソース。" },
  { name: "ムール貝のガーリック焼き", price: 400, code: "1410", category: "appetizer", description: "旨味たっぷりのムール貝にガーリックバターと野菜ペーストをのせて。" },
  { name: "アスパラガスの温サラダ", price: 300, code: "1411", category: "appetizer", description: "茹でたてのアスパラガスに濃厚なチーズをふりかけた一品。" },
  { name: "爽やかにんじんサラダ", price: 200, code: "1413", category: "appetizer", description: "細切りにんじんにオレンジ風味を効かせた爽やか前菜。" },
  { name: "モッツァレラトマト", price: 430, code: "1414", category: "appetizer", description: "イタリア直輸入の水牛モッツァレラとトマトの定番前菜。" },
  { name: "カリッとポテト", price: 280, code: "1415", category: "appetizer", description: "オリーブオイルでカリッと香ばしく焼き上げたポテト。" },
  { name: "ポテトのグリル", price: 280, code: "1416", category: "appetizer", description: "ハッシュドポテトをふっくら香ばしく焼き上げました。" },
  { name: "バッファローモッツァレラのカプレーゼ", price: 300, code: "1417", category: "appetizer", description: "水牛モッツァレラとトマトをシンプルに楽しむ冷菜。" },
  { name: "ハモン・セラーノ", price: 320, code: "1422", category: "appetizer", description: "スペイン産の熟成プロシュート（生ハム）をそのままスライス。" },
  { name: "生ハムとバッファローモッツァレラの盛合せ", price: 500, code: "1423", category: "appetizer", description: "旨味の強い生ハムと濃厚水牛モッツァレラの贅沢プレート。" },
  { name: "柔らか青豆の温サラダ", price: 200, code: "1425", category: "appetizer", description: "甘みの強い最高級ベビーピーに温玉とチーズをトッピング。" },
  { name: "スイートコーン", price: 200, code: "1435", category: "appetizer", description: "コーン本来の甘みを楽しめるシンプルな温かいサイドメニュー。" },
  { name: "アロスティチーニ(Wサイズ)", price: 800, code: "1452", category: "appetizer", description: "人気のラム串焼きがたっぷり4本入ったダブルサイズ。" },
  { name: "ライス", price: 150, code: "3101", category: "appetizer", description: "ふっくら美味しく炊き上げた通常サイズのライス。" },
  { name: "ラージライス", price: 200, code: "3102", category: "appetizer", description: "たっぷり食べたいときの大盛りサイズのライス。" },
  { name: "スモールライス", price: 100, code: "3103", category: "appetizer", description: "少し控えめにしたい時の小盛りライス。" },
  { name: "プチフォッカ", price: 150, code: "3106", category: "appetizer", description: "焼きたてもっちもちの自家製イタリアンブレッド。" },
  { name: "ミニフィセル", price: 150, code: "3108", category: "appetizer", description: "外はサクッ、中はもっちりしたミニサイズのフランスパン。" },
  { name: "ガーリックトースト", price: 200, code: "3109", category: "appetizer", description: "ガーリックバターを塗って香ばしく焼き上げたパン。" },
  { name: "トッピング半熟卵", price: 50, code: "4301", category: "appetizer", description: "いろんな料理に合わせられるとろ〜り半熟卵。" },
  { name: "野菜ペースト", price: 100, code: "4304", category: "appetizer", description: "ハンバーグやチキンにぴったりの特製野菜ソース。" },
  { name: "トッピング粉チーズ", price: 100, code: "4307", category: "appetizer", description: "イタリア直輸入の濃厚ペコリーノ・ロマーノ粉チーズ。" },

  // Salads & Soups (サラダ・スープ) - Category: salad
  { name: "小エビのサラダ", price: 350, code: "1202", category: "salad", description: "ぷりぷりの甘エビがのった看板サラダ。" },
  { name: "わかめのサラダ", price: 350, code: "1205", category: "salad", description: "三陸産わかめのシャキシャキサラダ。" },
  { name: "モッツァレラのサラダ", price: 400, code: "1207", category: "salad", description: "水牛モッツァレラとトマトのサラダ。" },
  { name: "グリーンサラダ", price: 350, code: "1208", category: "salad", description: "シンプルなルッコラとレタスのサラダ。" },
  { name: "チキンのサラダ", price: 350, code: "1209", category: "salad", description: "柔らかい鶏ささみをトッピングしたサラダ。" },
  { name: "コーンクリームスープ", price: 150, code: "1301", category: "salad", description: "コーンの甘みを生かしたクリーミースープ。" },
  { name: "田舎風ミネストローネ", price: 300, code: "1305", category: "salad", description: "野菜がたっぷり溶け込んだイタリアン野菜スープ。" },
  { name: "たまねぎのズッパ", price: 300, code: "1307", category: "salad", description: "じっくり炒めたたまねぎとチーズのスープ。" },
  { name: "冷たいパンプキンスープ", price: 180, code: "1025", category: "salad", description: "夏にぴったり、ひんやり甘いパンプキンスープ。" },

  // Pizzas & Pastas (パスタ・ピザ) - Category: pasta
  { name: "マルゲリータピザ", price: 400, code: "2201", category: "pasta", description: "トマトソースとモッツァレラのシンプルピザ。" },
  { name: "バッファローモッツァレラのマルゲリータピザ", price: 400, code: "2203", category: "pasta", description: "水牛モッツァレラを贅沢に使ったマルゲリータ。" },
  { name: "野菜ときのことのピザ", price: 400, code: "2204", category: "pasta", description: "野菜ペーストとキノコをトッピングしたヘルシーピザ。" },
  { name: "たっぷりコーンのピザ", price: 400, code: "2206", category: "pasta", description: "甘いコーン and ホワイトソースのピザ。" },
  { name: "ソーセージピザ", price: 400, code: "2208", category: "pasta", description: "ポークソーセージをトッピングしたピザ。" },
  { name: "タラコソースシシリー風", price: 400, code: "2301", category: "pasta", description: "たらこと生クリームのマイルドソース。" },
  { name: "ペペロンチーノ", price: 300, code: "2303", category: "pasta", description: "オリーブオイル、ニンニク、唐辛子の味。" },
  { name: "パルマ風スパゲティ", price: 400, code: "2304", category: "pasta", description: "イタリア産トマトとパンチェッタのパスタ。" },
  { name: "カルボナーラ", price: 500, code: "2305", category: "pasta", description: "濃厚な卵と生クリームの特製ソース。" },
  { name: "ミートソースボロニア風", price: 400, code: "2306", category: "pasta", description: "牛肉のコク深い味わいのミートソース。" },
  { name: "半熟卵のミートソースボロニア風", price: 450, code: "2307", category: "pasta", description: "ミートソースに半熟卵をトッピング。" },
  { name: "スープ入り塩味ボンゴレ", price: 500, code: "2310", category: "pasta", description: "アサリの旨味が溶け込んだスープ仕立て。" },
  { name: "半熟卵のミートソースボロニア風(2316)", price: 450, code: "2316", category: "pasta", description: "ミートソースに半熟卵をトッピング。(2316)" },
  { name: "半熟卵のペペロンチーノ", price: 350, code: "2317", category: "pasta", description: "ペペロンチーノに半熟卵をのせたパスタ。" },
  { name: "小エビのタラコソース", price: 540, code: "2320", category: "pasta", description: "タラコソースに小エビをトッピング。" },
  { name: "きのことほうれん草のクリームスパゲッティ", price: 600, code: "2321", category: "pasta", description: "きのことほうれん草が入ったクリームスパゲッティ。" },
  { name: "ペンネアラビアータ(全粒粉)", price: 400, code: "2325", category: "pasta", description: "唐辛子のピリッとした辛さがきいたトマトペンネ。" },
  { name: "イカの墨入りセピアソース", price: 500, code: "2328", category: "pasta", description: "イカの旨味が凝縮された真っ黒なパスタ。" },

  // Dorias & Meats (ドリア・グラタン・肉料理) - Category: doria
  { name: "ミラノ風ドリア", price: 300, code: "2101", category: "doria", description: "創業以来一番人気のミートソースドリア。" },
  { name: "半熟卵のミラノ風ドリア", price: 350, code: "2103", category: "doria", description: "ミラノ風ドリアにとろ〜り半熟卵。" },
  { name: "タラコとエビのドリア", price: 400, code: "2106", category: "doria", description: "たらこクリームにプリプリのエビをトッピング。" },
  { name: "焼チーズ ミラノ風ドリア", price: 350, code: "2108", category: "doria", description: "チーズをのせて香ばしく焼き上げました。" },
  { name: "エビとタラコのクリームグラタン(全粒粉)", price: 400, code: "2109", category: "doria", description: "エビとタラコの旨味がきいたグラタン。" },
  { name: "若鶏のディアボラ風", price: 500, code: "2402", category: "doria", description: "ジューシーなチキンに特製野菜ソース。" },
  { name: "イタリアンハンバーグ", price: 500, code: "2403", category: "doria", description: "とろけるチーズとトマトソースのハンバーグ。" },
  { name: "柔らかチキンのチーズ焼き", price: 500, code: "2404", category: "doria", description: "チキンステーキに濃厚なチーズとトマトソース。" },
  { name: "ハンバーグステーキ", price: 400, code: "2406", category: "doria", description: "ジューシーなハンバーグとポテト。" },
  { name: "ディアボラ風ハンバーグ", price: 500, code: "2407", category: "doria", description: "ハンバーグに特製野菜ソースとポテト。" },
  { name: "ラムのランプステーキ", price: 1000, code: "2411", category: "doria", description: "ジューシーで肉厚なラム肉のステーキ。" },
  { name: "ラムと野菜のグリル", price: 870, code: "2413", category: "doria", description: "ラム肉に野菜ペーストやコーンを添えて。" },
  { name: "ミックスグリル", price: 650, code: "2418", category: "doria", description: "ハンバーグ、チキン、ポップコーンシュリンプの盛合せ。" },

  // Desserts (デザート) - Category: dessert
  { name: "ティラミス クラシコ", price: 300, code: "3201", category: "dessert", description: "しっとりとしたスポンジとマスカルポーネ。" },
  { name: "プリンとティラミス クラシコ", price: 500, code: "3202", category: "dessert", description: "プリンとティラミスの豪華盛り合わせ。" },
  { name: "ジェラート＆シナモンプチフォッカ", price: 450, code: "3204", category: "dessert", description: "シナモンプチフォッカにミルクジェラートをのせて。" },
  { name: "イタリアンジェラート", price: 250, code: "3205", category: "dessert", description: "ミルクの自然な風味のさっぱりジェラート。" },
  { name: "イタリアンプリン", price: 250, code: "3206", category: "dessert", description: "濃厚でねっとりした食感の定番プリン。" },
  { name: "チョコレートケーキ", price: 300, code: "3207", category: "dessert", description: "なめらかなチョコレートクリームケーキ。" },
  { name: "プリンとティラミスクラシコ盛合せ", price: 500, code: "3212", category: "dessert", description: "プリンとティラミスの盛り合わせプレート。" },
  { name: "トリフアイスクリーム", price: 350, code: "3213", category: "dessert", description: "中にソースが入った濃厚ドームチョコアイス。" },
  { name: "コーヒーゼリー＆イタリアンジェラート", price: 350, code: "3215", category: "dessert", description: "ほろ苦いコーヒーゼリー and ミルクジェラート。" },

  // Desserts (食後に) - Category: dessert
  { name: "ティラミス クラシコ (食後)", price: 300, code: "3901", category: "dessert", description: "【食後にお届け】しっとりティラミス。" },
  { name: "ジェラート＆シナモンプチフォッカ (食後)", price: 450, code: "3904", category: "dessert", description: "【食後にお届け】シナモンフォッカ and ジェラート。" },
  { name: "イタリアンジェラート (食後)", price: 250, code: "3905", category: "dessert", description: "【食後にお届け】さっぱりミルクジェラート。" },
  { name: "イタリアンプリン (食後)", price: 250, code: "3906", category: "dessert", description: "【食後にお届け】ねっとり濃厚カスタードプリン。" },
  { name: "チョコレートケーキ (食後)", price: 300, code: "3907", category: "dessert", description: "【食後にお届け】なめらかチョコケーキ。" },
  { name: "プリンとティラミスクラシコ盛合せ (食後)", price: 500, code: "3912", category: "dessert", description: "【食後にお届け】プリン and ティラミスの盛り合わせ。" },
  { name: "トリフアイスクリーム (食後)", price: 350, code: "3913", category: "dessert", description: "【食後にお届け】濃厚トリフアイスドーム。" },
  { name: "コーヒーゼリー＆イタリアンジェラート (食後)", price: 350, code: "3915", category: "dessert", description: "【食後にお届け】コーヒーゼリー and ジェラート。" },

  // Drinks & Alcohol (ドリンク・アルコール) - Category: drink
  { name: "セットドリンクバー", price: 200, code: "5101", category: "drink", description: "お食事やデザートとセットでお得なドリンクバー。" },
  { name: "キッズドリンクバー", price: 100, code: "5102", category: "drink", description: "小学生以下のお子様用のドリンクバー。" },
  { name: "単品ドリンクバー", price: 300, code: "5103", category: "drink", description: "ドリンクバーのみご利用のお客様。" },
  { name: "生ビール ジョッキ", price: 400, code: "3301", category: "drink", description: "キリン一番搾りのキンキン生ビール。" },
  { name: "生ビール グラスビール", price: 300, code: "3302", category: "drink", description: "少しだけ飲みたいときにぴったりのグラスビール。" },
  { name: "ノンアルコールビール", price: 250, code: "3303", category: "drink", description: "アサヒドライゼロのノンアルコール。" },
  { name: "氷結レモン", price: 350, code: "3304", category: "drink", description: "キリン 氷結 缶レモンサワー。" },
  { name: "グラッパ (30ml)", price: 300, code: "3306", category: "drink", description: "ブドウの搾りかすから作られたイタリア産ブランデー。" },
  { name: "グラスワイン 赤", price: 100, code: "3401", category: "drink", description: "グラスで手軽に飲めるフレッシュなハウス赤ワイン。" },
  { name: "グラスワイン 白", price: 100, code: "3402", category: "drink", description: "すっきり飲みやすいフレッシュなハウス白ワイン。" },
  { name: "デカンタ赤 (250ml)", price: 200, code: "3403", category: "drink", description: "フレッシュなハウスワイン赤（デカンタ小サイズ）。" },
  { name: "デカンタ白 (250ml)", price: 200, code: "3404", category: "drink", description: "フレッシュなハウスワイン白（デカンタ小サイズ）。" },
  { name: "デカンタ赤 (500ml)", price: 400, code: "3405", category: "drink", description: "フレッシュなハウスワイン赤（デカンタ大サイズ）。" },
  { name: "デカンタ白 (500ml)", price: 400, code: "3406", category: "drink", description: "フレッシュなハウスワイン白（デカンタ大サイズ）。" },
  { name: "マグナム 赤 (1500ml)", price: 1100, code: "3407", category: "drink", description: "パーティーや大人数に、大容量 of ボトル赤ワイン。" },
  { name: "マグナム 白 (1500ml)", price: 1100, code: "3408", category: "drink", description: "パーティーや大人数に、大容量 of ボトル白ワイン。" },
  { name: "ランブルスコ ロゼ", price: 1100, code: "3412", category: "drink", description: "微発泡 of 爽やかで華やかな甘口ロゼスパークリングボトル。" },
  { name: "ドン ラファエロ", price: 1100, code: "3413", category: "drink", description: "すっきりとしたキレ of 良い味わい of 辛口白スパークリングボトル。" },
  { name: "ランブルスコ セッコ", price: 1100, code: "3414", category: "drink", description: "微発泡で渋みが少なくすっきりした辛口赤スパークリングボトル。" },
  { name: "ベルディッキオ", price: 1100, code: "3415", category: "drink", description: "イタリア直輸入 of キリッとした辛口白ワインボトル。" },
  { name: "キャンティ", price: 1100, code: "3416", category: "drink", description: "トスカーナ産 of 豊かな香りとまろやかな辛口赤ワインボトル。" },
  { name: "キャンティ ルフィナ リゼルバ", price: 2200, code: "3419", category: "drink", description: "木樽で長期熟成されたコク深く芳醇な味わい of 最高級赤ワインボトル。" }
];

// --- AUDIO SYNTHESIZER (WEB AUDIO API) ---
class SoundEffects {
  constructor() {
    this.ctx = null;
    this.enabled = true;
  }

  init() {
    if (!this.ctx) {
      this.ctx = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  playClick() {
    if (!this.enabled) return;
    this.init();
    
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    
    osc.type = 'sine';
    osc.frequency.setValueAtTime(800, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(100, this.ctx.currentTime + 0.05);
    
    gain.gain.setValueAtTime(0.08, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.05);
    
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    
    osc.start();
    osc.stop(this.ctx.currentTime + 0.05);
  }

  playCorrect(combo = 0) {
    if (!this.enabled) return;
    this.init();

    const now = this.ctx.currentTime;
    
    // Pitch rises slightly with combo
    const factor = Math.min(1 + combo * 0.03, 1.6);
    const baseFreq1 = 523.25 * factor; // C5
    const baseFreq2 = 659.25 * factor; // E5
    
    // Tone 1
    const osc1 = this.ctx.createOscillator();
    const gain1 = this.ctx.createGain();
    osc1.type = 'triangle';
    osc1.frequency.setValueAtTime(baseFreq1, now);
    gain1.gain.setValueAtTime(0.12, now);
    gain1.gain.exponentialRampToValueAtTime(0.01, now + 0.15);
    osc1.connect(gain1);
    gain1.connect(this.ctx.destination);
    
    // Tone 2 (slight delay for chime effect)
    const osc2 = this.ctx.createOscillator();
    const gain2 = this.ctx.createGain();
    osc2.type = 'sine';
    osc2.frequency.setValueAtTime(baseFreq2, now + 0.05);
    gain2.gain.setValueAtTime(0.0, now);
    gain2.gain.setValueAtTime(0.12, now + 0.05);
    gain2.gain.exponentialRampToValueAtTime(0.01, now + 0.25);
    osc2.connect(gain2);
    gain2.connect(this.ctx.destination);
    
    osc1.start(now);
    osc1.stop(now + 0.2);
    
    osc2.start(now);
    osc2.stop(now + 0.3);
  }

  playWrong() {
    if (!this.enabled) return;
    this.init();
    
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(150, now);
    osc.frequency.linearRampToValueAtTime(80, now + 0.25);
    
    gain.gain.setValueAtTime(0.15, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.25);
    
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    
    osc.start();
    osc.stop(now + 0.3);
  }

  playVictory() {
    if (!this.enabled) return;
    this.init();
    
    const now = this.ctx.currentTime;
    const notes = [523.25, 587.33, 659.25, 783.99, 1046.50]; // C5, D5, E5, G5, C6
    const duration = 0.1;
    
    notes.forEach((freq, idx) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, now + idx * 0.08);
      
      gain.gain.setValueAtTime(0.1, now + idx * 0.08);
      gain.gain.exponentialRampToValueAtTime(0.01, now + idx * 0.08 + 0.2);
      
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      
      osc.start(now + idx * 0.08);
      osc.stop(now + idx * 0.08 + 0.25);
    });
  }

  playGameOver() {
    if (!this.enabled) return;
    this.init();
    
    const now = this.ctx.currentTime;
    const notes = [392.00, 349.23, 329.63, 261.63]; // G4, F4, E4, C4
    
    notes.forEach((freq, idx) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(freq, now + idx * 0.12);
      
      gain.gain.setValueAtTime(0.1, now + idx * 0.12);
      gain.gain.exponentialRampToValueAtTime(0.01, now + idx * 0.12 + 0.3);
      
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      
      osc.start(now + idx * 0.12);
      osc.stop(now + idx * 0.12 + 0.35);
    });
  }
}

const sounds = new SoundEffects();

// --- CONFETTI PARTICLE SYSTEM ---
class ConfettiEffect {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    this.ctx = this.canvas.getContext('2d');
    this.particles = [];
    this.active = false;
    this.colors = [
      '#e63946', // Red
      '#2a9d8f', // Green
      '#e9c46a', // Yellow
      '#f4a261', // Orange
      '#ffffff'  // White
    ];
    
    window.addEventListener('resize', () => this.resizeCanvas());
    this.resizeCanvas();
  }

  resizeCanvas() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  spawn(count = 100) {
    this.particles = [];
    this.active = true;
    for (let i = 0; i < count; i++) {
      this.particles.push({
        x: Math.random() * this.canvas.width,
        y: Math.random() * -this.canvas.height - 20,
        size: Math.random() * 8 + 6,
        color: this.colors[Math.floor(Math.random() * this.colors.length)],
        speedX: Math.random() * 4 - 2,
        speedY: Math.random() * 5 + 4,
        rotation: Math.random() * 360,
        rotationSpeed: Math.random() * 4 - 2
      });
    }
    
    this.animate();
  }

  animate() {
    if (!this.active) return;
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    
    let alive = false;
    this.particles.forEach(p => {
      p.y += p.speedY;
      p.x += p.speedX;
      p.rotation += p.rotationSpeed;
      
      if (p.y < this.canvas.height) {
        alive = true;
        this.ctx.save();
        this.ctx.translate(p.x, p.y);
        this.ctx.rotate(p.rotation * Math.PI / 180);
        this.ctx.fillStyle = p.color;
        this.ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
        this.ctx.restore();
      }
    });

    if (alive) {
      requestAnimationFrame(() => this.animate());
    } else {
      this.active = false;
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
  }
}

let confetti;

// --- STATE MANAGEMENT ---
let gameState = {
  // Config
  format: 'timeattack', // timeattack | survival | practice
  categories: ['all'],
  
  // Game Session
  questions: [],
  currentIndex: 0,
  typedBuffer: [],
  
  // Metrics
  score: 0,
  combo: 0,
  maxCombo: 0,
  correctCount: 0,
  wrongCount: 0,
  totalKeystrokes: 0,
  wrongKeystrokes: 0,
  
  // Timers
  timerId: null,
  timeLeft: 0,       // For survival countdown
  elapsedTime: 0,    // For timeattack stopwatch (ms)
  startTime: null,
  questionStartTime: null,
  questionTimeLeft: 10, // Remaining time for current question (sec)
  questionLimit: 10,    // Total limit per question (sec)
  
  // Log for breakdown
  history: [], // { item, timeTaken, correct, status }
  
  // Control
  blockInput: false
};

// --- DOM ELEMENTS ---
const screens = {
  start: document.getElementById('screen-start'),
  play: document.getElementById('screen-play'),
  results: document.getElementById('screen-results')
};

const elements = {
  // Config
  startBtn: document.getElementById('start-game-btn'),
  soundToggleBtn: document.getElementById('sound-toggle-btn'),
  categorySelectors: document.getElementById('category-selectors'),
  
  // Gameplay
  progressLabel: document.getElementById('progress-label'),
  progressValue: document.getElementById('progress-value'),
  timerBar: document.getElementById('timer-bar'),
  timerText: document.getElementById('timer-text'),
  comboValue: document.getElementById('combo-value'),
  comboBubble: document.querySelector('.combo-bubble'),
  targetCard: document.getElementById('target-menu-card'),
  categoryTag: document.getElementById('menu-category-tag'),
  displayName: document.getElementById('menu-display-name'),
  displayPrice: document.getElementById('menu-display-price'),
  hintBox: document.getElementById('hint-box'),
  hintContent: document.getElementById('hint-content'),
  inputSlots: document.getElementById('input-slots'),
  virtualKeypad: document.getElementById('virtual-keypad'),
  giveUpBtn: document.getElementById('give-up-btn'),
  passBtn: document.getElementById('pass-btn'),
  revealHintBtn: document.getElementById('reveal-hint-btn'),
  questionTimerBar: document.getElementById('question-timer-bar'),
  
  // Results
  rankBadge: document.getElementById('rank-badge'),
  receiptDate: document.getElementById('receipt-date'),
  receiptId: document.getElementById('receipt-id'),
  receiptItems: document.getElementById('receipt-items'),
  receiptCorrectCount: document.getElementById('receipt-correct-count'),
  receiptWrongCount: document.getElementById('receipt-wrong-count'),
  receiptMaxCombo: document.getElementById('receipt-max-combo'),
  receiptAccuracy: document.getElementById('receipt-accuracy'),
  receiptTotalPrice: document.getElementById('receipt-total-price'),
  resultTime: document.getElementById('result-time'),
  resultSpeed: document.getElementById('result-speed'),
  analysisFastest: document.getElementById('analysis-fastest'),
  analysisSlowest: document.getElementById('analysis-slowest'),
  shareBtn: document.getElementById('share-twitter-btn'),
  retryBtn: document.getElementById('retry-btn'),
  backHomeBtn: document.getElementById('back-home-btn'),
  reviewList: document.getElementById('review-list')
};

// --- INITIALIZATION ---
document.addEventListener('DOMContentLoaded', () => {
  confetti = new ConfettiEffect('confetti-canvas');
  initEventListeners();
  setupCategoryChips();
});

// Sound button setup
function updateSoundButtonUI() {
  const onIcon = elements.soundToggleBtn.querySelector('.sound-on-icon');
  const offIcon = elements.soundToggleBtn.querySelector('.sound-off-icon');
  if (sounds.enabled) {
    onIcon.classList.remove('hidden');
    offIcon.classList.add('hidden');
  } else {
    onIcon.classList.add('hidden');
    offIcon.classList.remove('hidden');
  }
}

function initEventListeners() {
  // Sound toggle
  elements.soundToggleBtn.addEventListener('click', () => {
    sounds.enabled = !sounds.enabled;
    updateSoundButtonUI();
    if (sounds.enabled) {
      sounds.init();
      sounds.playClick();
    }
  });

  // Start game
  elements.startBtn.addEventListener('click', () => {
    sounds.init();
    startGame();
  });

  // Gameplay actions
  elements.giveUpBtn.addEventListener('click', () => {
    sounds.playClick();
    endGame(false);
  });

  elements.passBtn.addEventListener('click', () => {
    sounds.playClick();
    handlePass();
  });

  elements.revealHintBtn.addEventListener('click', () => {
    sounds.playClick();
    revealHint();
  });

  // Results actions
  elements.retryBtn.addEventListener('click', () => {
    sounds.playClick();
    startGame();
  });

  elements.backHomeBtn.addEventListener('click', () => {
    sounds.playClick();
    switchScreen('start');
  });

  elements.shareBtn.addEventListener('click', () => {
    sounds.playClick();
    copyResultsToClipboard();
  });

  // Keyboard input listener
  window.addEventListener('keydown', handlePhysicalKeyboardInput);
}

// Category checkbox chip interaction
function setupCategoryChips() {
  const chips = elements.categorySelectors.querySelectorAll('.chip-option');
  chips.forEach(chip => {
    const input = chip.querySelector('input');
    
    // Initial state matching
    if (input.checked) {
      chip.classList.add('checked');
    }

    input.addEventListener('change', () => {
      // If "All" is selected, deselect others, or vice versa
      if (input.value === 'all') {
        if (input.checked) {
          chips.forEach(c => {
            const innerInput = c.querySelector('input');
            if (innerInput.value !== 'all') {
              innerInput.checked = false;
              c.classList.remove('checked');
            }
          });
        } else {
          // Prevent deselecting All if nothing else is selected
          const checkedCount = elements.categorySelectors.querySelectorAll('input:checked').length;
          if (checkedCount === 0) {
            input.checked = true;
            chip.classList.add('checked');
            return;
          }
        }
      } else {
        if (input.checked) {
          // Deselect All
          const allChip = elements.categorySelectors.querySelector('input[value="all"]');
          allChip.checked = false;
          allChip.parentElement.classList.remove('checked');
        } else {
          // If everything is deselected, auto-select All
          const checkedCount = elements.categorySelectors.querySelectorAll('input:checked').length;
          if (checkedCount === 0) {
            const allChip = elements.categorySelectors.querySelector('input[value="all"]');
            allChip.checked = true;
            allChip.parentElement.classList.add('checked');
          }
        }
      }
      
      // Update visual states for all
      chips.forEach(c => {
        const inner = c.querySelector('input');
        if (inner.checked) {
          c.classList.add('checked');
        } else {
          c.classList.remove('checked');
        }
      });
    });
  });
}

// --- SCREEN NAVIGATION ---
function switchScreen(targetScreenName) {
  Object.keys(screens).forEach(name => {
    if (name === targetScreenName) {
      screens[name].classList.add('active');
    } else {
      screens[name].classList.remove('active');
    }
  });
}

// --- GAME LOGIC ---
function startGame() {
  // 1. Gather config
  const formatVal = document.querySelector('input[name="game-format"]:checked').value;
  const selectedCats = Array.from(elements.categorySelectors.querySelectorAll('input:checked'))
                            .map(input => input.value);

  // 2. Build questions pool
  let pool = [];
  if (selectedCats.includes('all')) {
    pool = [...MENU_DATABASE];
  } else {
    pool = MENU_DATABASE.filter(item => selectedCats.includes(item.category));
  }

  // Fallback in case of some weird state
  if (pool.length === 0) {
    pool = [...MENU_DATABASE];
  }

  // Shuffle pool
  shuffleArray(pool);

  // Set up game session state
  gameState.format = formatVal;
  gameState.categories = selectedCats;
  
  if (formatVal === 'timeattack') {
    // Exactly 10 questions (or max pool size if smaller)
    gameState.questions = pool.slice(0, Math.min(10, pool.length));
  } else {
    // Survival / Practice goes on, so store the whole pool
    gameState.questions = pool;
  }
  
  gameState.currentIndex = 0;
  gameState.typedBuffer = [];
  gameState.score = 0;
  gameState.combo = 0;
  gameState.maxCombo = 0;
  gameState.correctCount = 0;
  gameState.wrongCount = 0;
  gameState.totalKeystrokes = 0;
  gameState.wrongKeystrokes = 0;
  gameState.history = [];
  gameState.blockInput = false;
  
  // Set up timer / stats bar
  if (gameState.format === 'timeattack') {
    elements.progressLabel.textContent = '問題';
    elements.progressValue.textContent = `1/${gameState.questions.length}`;
    
    gameState.elapsedTime = 0;
    elements.timerText.textContent = '0.0秒';
    elements.timerBar.style.width = '0%';
  } else if (gameState.format === 'survival') {
    elements.progressLabel.textContent = 'スコア';
    elements.progressValue.textContent = '0点';
    
    gameState.timeLeft = 30; // 30 seconds to start
    elements.timerText.textContent = '30.0秒';
    elements.timerBar.style.width = '100%';
  } else {
    // Practice
    elements.progressLabel.textContent = '練習数';
    elements.progressValue.textContent = '0';
    
    elements.timerText.textContent = '無限';
    elements.timerBar.style.width = '100%';
  }
  
  elements.comboValue.textContent = '0';
  elements.comboBubble.classList.remove('pop');

  // Question timer settings
  gameState.questionLimit = 10;
  gameState.questionTimeLeft = 10;

  // Render Virtual Keypad (numeric only)
  renderKeypad();

  // Show screen
  switchScreen('play');
  
  // Start clocks
  gameState.startTime = Date.now();
  startTimer();

  // Load first item
  loadQuestion();
}

function startTimer() {
  if (gameState.timerId) clearInterval(gameState.timerId);

  const tickTime = 100; // ms
  gameState.timerId = setInterval(() => {
    // 1. Overall Game Timers
    if (gameState.format === 'timeattack') {
      gameState.elapsedTime += tickTime;
      const totalSec = gameState.elapsedTime / 1000;
      elements.timerText.textContent = totalSec.toFixed(1) + '秒';
      
      const ratio = (gameState.currentIndex / gameState.questions.length) * 100;
      elements.timerBar.style.width = `${ratio}%`;
    } else if (gameState.format === 'survival') {
      gameState.timeLeft -= (tickTime / 1000);
      
      if (gameState.timeLeft <= 0) {
        gameState.timeLeft = 0;
        elements.timerText.textContent = '0.0秒';
        elements.timerBar.style.width = '0%';
        clearInterval(gameState.timerId);
        endGame(true); // Times up!
        return;
      }
      
      elements.timerText.textContent = gameState.timeLeft.toFixed(1) + '秒';
      const ratio = Math.min((gameState.timeLeft / 30) * 100, 100);
      elements.timerBar.style.width = `${ratio}%`;
      
      if (gameState.timeLeft < 5) {
        elements.timerBar.style.backgroundColor = 'var(--accent-red)';
      } else {
        elements.timerBar.style.backgroundColor = '';
      }
    }

    // 2. Per-Question Time Limit Timer (Disabled in Practice mode)
    if (gameState.format !== 'practice' && !gameState.blockInput) {
      gameState.questionTimeLeft -= (tickTime / 1000);
      if (gameState.questionTimeLeft <= 0) {
        gameState.questionTimeLeft = 0;
        updateQuestionTimerUI();
        handleTimeout();
      } else {
        updateQuestionTimerUI();
      }
    } else if (gameState.format === 'practice') {
      elements.questionTimerBar.style.width = '100%';
      elements.questionTimerBar.style.backgroundColor = 'var(--accent-green)';
    }
  }, tickTime);
}

function updateQuestionTimerUI() {
  const ratio = Math.max((gameState.questionTimeLeft / gameState.questionLimit) * 100, 0);
  elements.questionTimerBar.style.width = `${ratio}%`;
  
  if (gameState.questionTimeLeft < 3) {
    elements.questionTimerBar.style.backgroundColor = 'var(--accent-red)';
  } else if (gameState.questionTimeLeft < 6) {
    elements.questionTimerBar.style.backgroundColor = 'var(--accent-yellow)';
  } else {
    elements.questionTimerBar.style.backgroundColor = '';
  }
}

function loadQuestion() {
  // If we reach the end of the pool, reload
  if (gameState.currentIndex >= gameState.questions.length) {
    if (gameState.format === 'timeattack') {
      endGame(true);
      return;
    } else {
      let pool = [];
      if (gameState.categories.includes('all')) {
        pool = [...MENU_DATABASE];
      } else {
        pool = MENU_DATABASE.filter(item => gameState.categories.includes(item.category));
      }
      shuffleArray(pool);
      gameState.questions = gameState.questions.concat(pool);
    }
  }

  const currentItem = gameState.questions[gameState.currentIndex];
  
  // Set category tag
  elements.categoryTag.textContent = getCategoryJapaneseName(currentItem.category);
  elements.categoryTag.className = `menu-badge badge-${currentItem.category}`;

  // Update card text
  elements.displayName.textContent = currentItem.name;
  elements.displayPrice.textContent = `¥${currentItem.price}`;

  // Reset hint
  if (gameState.format === 'practice') {
    revealHint(true);
  } else {
    elements.hintBox.classList.add('hidden');
  }

  // Clear slots
  gameState.typedBuffer = [];
  updateInputSlots();

  // Reset question timer
  gameState.questionTimeLeft = gameState.questionLimit;
  updateQuestionTimerUI();
  
  gameState.questionStartTime = Date.now();
  gameState.blockInput = false;
}

function updateInputSlots() {
  const slots = elements.inputSlots.querySelectorAll('.input-slot');
  
  slots.forEach((slot, index) => {
    slot.className = 'input-slot'; // reset classes
    
    if (gameState.typedBuffer[index] !== undefined) {
      slot.textContent = gameState.typedBuffer[index];
      slot.classList.add('filled');
    } else {
      slot.textContent = '';
      if (index === gameState.typedBuffer.length) {
        slot.classList.add('active');
      }
    }
  });
}

function handleInputCharacter(char) {
  if (gameState.blockInput) return;

  if (gameState.typedBuffer.length < 4) {
    gameState.typedBuffer.push(char);
    gameState.totalKeystrokes++;
    
    sounds.playClick();
    updateInputSlots();
    highlightVirtualKey(char);

    // Evaluate if full
    if (gameState.typedBuffer.length === 4) {
      evaluateAnswer();
    }
  }
}

// Backspace
function handleBackspace() {
  if (gameState.blockInput) return;

  if (gameState.typedBuffer.length > 0) {
    gameState.typedBuffer.pop();
    sounds.playClick();
    updateInputSlots();
    highlightVirtualKey('BACKSPACE');
  }
}

// Clear
function handleClear() {
  if (gameState.blockInput) return;

  if (gameState.typedBuffer.length > 0) {
    gameState.typedBuffer = [];
    sounds.playClick();
    updateInputSlots();
    highlightVirtualKey('CLEAR');
  }
}

function evaluateAnswer() {
  gameState.blockInput = true;
  const currentItem = gameState.questions[gameState.currentIndex];
  const targetCode = currentItem.code;
  const typedCode = gameState.typedBuffer.join('');
  const responseTime = (Date.now() - gameState.questionStartTime) / 1000;

  const slots = elements.inputSlots.querySelectorAll('.input-slot');

  if (typedCode === targetCode) {
    // CORRECT!
    gameState.correctCount++;
    gameState.combo++;
    gameState.maxCombo = Math.max(gameState.maxCombo, gameState.combo);
    
    sounds.playCorrect(gameState.combo);
    slots.forEach(slot => slot.classList.add('flash-green'));
    
    elements.comboValue.textContent = gameState.combo;
    if (gameState.combo > 1) {
      elements.comboBubble.classList.remove('pop');
      void elements.comboBubble.offsetWidth; // Trigger reflow
      elements.comboBubble.classList.add('pop');
    }

    // Time bonus for Survival
    if (gameState.format === 'survival') {
      gameState.timeLeft += 3; // +3 seconds
      gameState.score += (100 + gameState.combo * 10);
      elements.progressValue.textContent = `${gameState.score}点`;
    } else if (gameState.format === 'timeattack') {
      elements.progressValue.textContent = `${gameState.currentIndex + 1}/${gameState.questions.length}`;
    } else {
      elements.progressValue.textContent = `${gameState.currentIndex + 1}`;
    }

    // Store in history log
    gameState.history.push({
      item: currentItem,
      timeTaken: responseTime,
      correct: true,
      status: 'correct'
    });

    // Advance after brief delay
    setTimeout(() => {
      gameState.currentIndex++;
      loadQuestion();
    }, 180);

  } else {
    // WRONG!
    gameState.wrongCount++;
    gameState.wrongKeystrokes += 4;
    gameState.combo = 0;
    elements.comboValue.textContent = '0';
    elements.comboBubble.classList.remove('pop');

    sounds.playWrong();

    // Visual shake and red flash
    elements.inputSlots.classList.add('shake-element');
    slots.forEach(slot => slot.classList.add('flash-red'));

    // Deduct time for survival
    if (gameState.format === 'survival') {
      gameState.timeLeft = Math.max(0, gameState.timeLeft - 5);
    }

    // Clean up error state after animation finishes
    setTimeout(() => {
      elements.inputSlots.classList.remove('shake-element');
      slots.forEach(slot => {
        slot.classList.remove('flash-red');
      });
      
      gameState.typedBuffer = [];
      updateInputSlots();
      gameState.blockInput = false;
    }, 350);
  }
}

// Pass / Skip question
function handlePass() {
  if (gameState.blockInput) return;
  gameState.blockInput = true;

  const currentItem = gameState.questions[gameState.currentIndex];
  gameState.combo = 0;
  elements.comboValue.textContent = '0';
  elements.comboBubble.classList.remove('pop');

  const slots = elements.inputSlots.querySelectorAll('.input-slot');
  slots.forEach(slot => slot.classList.add('flash-red'));

  gameState.history.push({
    item: currentItem,
    timeTaken: 0,
    correct: false,
    status: 'passed'
  });

  let timeOutForSurvival = false;
  if (gameState.format === 'survival') {
    gameState.timeLeft = Math.max(0, gameState.timeLeft - 3);
    if (gameState.timeLeft <= 0) {
      gameState.timeLeft = 0;
      elements.timerText.textContent = '0.0秒';
      elements.timerBar.style.width = '0%';
      if (gameState.timerId) clearInterval(gameState.timerId);
      timeOutForSurvival = true;
    }
  }

  if (gameState.format === 'timeattack') {
    elements.progressValue.textContent = `${gameState.currentIndex + 1}/${gameState.questions.length}`;
  } else if (gameState.format === 'practice') {
    elements.progressValue.textContent = `${gameState.currentIndex + 1}`;
  }

  setTimeout(() => {
    slots.forEach(slot => slot.classList.remove('flash-red'));
    if (timeOutForSurvival) {
      endGame(true);
    } else {
      gameState.currentIndex++;
      loadQuestion();
    }
  }, 200);
}

// Question timeout (automatic skip)
function handleTimeout() {
  gameState.blockInput = true;

  const currentItem = gameState.questions[gameState.currentIndex];
  gameState.wrongCount++;
  gameState.combo = 0;
  elements.comboValue.textContent = '0';
  elements.comboBubble.classList.remove('pop');

  sounds.playWrong();

  elements.inputSlots.classList.add('shake-element');
  const slots = elements.inputSlots.querySelectorAll('.input-slot');
  slots.forEach(slot => slot.classList.add('flash-red'));

  if (gameState.format === 'survival') {
    gameState.timeLeft = Math.max(0, gameState.timeLeft - 5);
  } else if (gameState.format === 'timeattack') {
    elements.progressValue.textContent = `${gameState.currentIndex + 1}/${gameState.questions.length}`;
  }

  gameState.history.push({
    item: currentItem,
    timeTaken: gameState.questionLimit,
    correct: false,
    status: 'timeout'
  });

  setTimeout(() => {
    elements.inputSlots.classList.remove('shake-element');
    slots.forEach(slot => slot.classList.remove('flash-red'));
    gameState.currentIndex++;
    loadQuestion();
  }, 400);
}

function revealHint(autoPractice = false) {
  const currentItem = gameState.questions[gameState.currentIndex];
  const targetCode = currentItem.code;
  const hintStr = targetCode.substring(0, 2) + '••';

  elements.hintContent.textContent = hintStr;
  elements.hintBox.classList.remove('hidden');

  if (!autoPractice) {
    sounds.playClick();
  }
}

function endGame(completed = true) {
  if (gameState.timerId) clearInterval(gameState.timerId);

  // Play audio
  if (completed && (gameState.correctCount > 0)) {
    sounds.playVictory();
  } else {
    sounds.playGameOver();
  }

  // Calculate statistics
  const totalItemsCount = gameState.currentIndex;
  const timeSec = (Date.now() - gameState.startTime) / 1000;
  
  let timeStr = '00:00.0';
  if (gameState.format === 'timeattack') {
    const min = Math.floor(gameState.elapsedTime / 60000);
    const sec = ((gameState.elapsedTime % 60000) / 1000).toFixed(1);
    timeStr = `${min.toString().padStart(2, '0')}:${sec.padStart(4, '0')}`;
  } else {
    const min = Math.floor(timeSec / 60);
    const sec = (timeSec % 60).toFixed(1);
    timeStr = `${min.toString().padStart(2, '0')}:${sec.padStart(4, '0')}`;
  }

  // Accuracy calculation
  const idealKeys = gameState.correctCount * 4;
  const errorKeys = gameState.wrongCount * 4;
  const accuracy = idealKeys + errorKeys > 0 
    ? ((idealKeys / (idealKeys + errorKeys)) * 100).toFixed(1) 
    : '0.0';

  // Speed: Average response time per correct item
  const speed = gameState.correctCount > 0 
    ? (timeSec / gameState.correctCount).toFixed(2) 
    : '0.00';

  // Rank / Grade Determination
  const rank = calculateRank(gameState.correctCount, timeSec, parseFloat(accuracy));
  elements.rankBadge.textContent = rank;
  
  elements.rankBadge.className = 'rank-badge glow';
  if (rank === 'サイゼ神') {
    elements.rankBadge.style.background = 'linear-gradient(135deg, #ff007f 0%, #ffb703 100%)';
  } else if (rank === 'サイゼ魔人') {
    elements.rankBadge.style.background = 'linear-gradient(135deg, var(--accent-red) 0%, #ff007f 100%)';
  } else if (rank === 'サイゼ通') {
    elements.rankBadge.style.background = 'linear-gradient(135deg, var(--accent-green) 0%, var(--accent-yellow) 100%)';
  } else {
    elements.rankBadge.style.background = '';
  }

  elements.resultTime.textContent = gameState.format === 'survival' 
    ? `生存時間: ${timeStr}` 
    : gameState.format === 'practice'
    ? `練習時間: ${timeStr}`
    : `タイム: ${timeStr}`;

  elements.resultSpeed.textContent = `${speed}秒 / 個`;

  // Order analysis: fastest vs slowest
  if (gameState.history.length > 0) {
    const correctHistory = gameState.history.filter(h => h.correct);
    if (correctHistory.length > 0) {
      const sorted = [...correctHistory].sort((a, b) => a.timeTaken - b.timeTaken);
      elements.analysisFastest.textContent = `${sorted[0].item.name} (${sorted[0].timeTaken.toFixed(1)}秒)`;
      elements.analysisSlowest.textContent = `${sorted[sorted.length - 1].item.name} (${sorted[sorted.length - 1].timeTaken.toFixed(1)}秒)`;
    } else {
      elements.analysisFastest.textContent = 'なし';
      elements.analysisSlowest.textContent = 'なし';
    }
  } else {
    elements.analysisFastest.textContent = 'なし';
    elements.analysisSlowest.textContent = 'なし';
  }

  // --- RENDER MOCK RECEIPT ---
  const dateObj = new Date();
  const dateStr = `${dateObj.getFullYear()}/${(dateObj.getMonth() + 1).toString().padStart(2, '0')}/${dateObj.getDate().toString().padStart(2, '0')} ${dateObj.getHours().toString().padStart(2, '0')}:${dateObj.getMinutes().toString().padStart(2, '0')}`;
  elements.receiptDate.textContent = dateStr;
  elements.receiptId.textContent = `${Math.floor(1000 + Math.random() * 9000)}-${Math.floor(1000 + Math.random() * 9000)}`;

  elements.receiptItems.innerHTML = '';
  let totalPrice = 0;
  
  gameState.history.forEach(log => {
    if (log.correct) {
      const row = document.createElement('tr');
      
      const nameCol = document.createElement('td');
      nameCol.textContent = log.item.name;
      
      const codeCol = document.createElement('td');
      codeCol.className = 'font-numeric text-right';
      codeCol.textContent = log.item.code;
      
      const priceCol = document.createElement('td');
      priceCol.className = 'font-numeric text-right';
      priceCol.textContent = `¥${log.item.price}`;
      
      row.appendChild(nameCol);
      row.appendChild(codeCol);
      row.appendChild(priceCol);
      elements.receiptItems.appendChild(row);
      
      totalPrice += log.item.price;
    }
  });

  if (gameState.correctCount === 0) {
    const row = document.createElement('tr');
    row.innerHTML = `<td colspan="3" style="text-align:center;color:#888;">正解アイテムなし</td>`;
    elements.receiptItems.appendChild(row);
  }

  elements.receiptCorrectCount.textContent = `${gameState.correctCount}点`;
  elements.receiptWrongCount.textContent = `${gameState.wrongCount}回`;
  elements.receiptMaxCombo.textContent = `${gameState.maxCombo} Combo`;
  elements.receiptAccuracy.textContent = `${accuracy}%`;
  elements.receiptTotalPrice.textContent = `¥${totalPrice.toLocaleString()}`;

  // --- RENDER REVIEW ANSWERS ---
  elements.reviewList.innerHTML = '';
  const failedItems = gameState.history.filter(h => !h.correct);
  
  if (failedItems.length > 0) {
    failedItems.forEach(log => {
      const itemRow = document.createElement('div');
      itemRow.className = `review-item ${log.status === 'passed' ? 'passed' : ''}`;
      
      const nameSpan = document.createElement('span');
      nameSpan.className = 'review-item-name';
      nameSpan.textContent = log.item.name;
      
      const detailsDiv = document.createElement('div');
      detailsDiv.className = 'review-item-details';
      
      const codeSpan = document.createElement('span');
      codeSpan.className = 'review-item-code font-numeric';
      codeSpan.textContent = log.item.code;
      
      const statusSpan = document.createElement('span');
      statusSpan.className = `review-item-status ${log.status === 'passed' ? 'status-passed' : 'status-timeout'}`;
      statusSpan.textContent = log.status === 'passed' ? 'パス' : '時間切れ';
      
      detailsDiv.appendChild(codeSpan);
      detailsDiv.appendChild(statusSpan);
      itemRow.appendChild(nameSpan);
      itemRow.appendChild(detailsDiv);
      elements.reviewList.appendChild(itemRow);
    });
  } else if (gameState.correctCount > 0) {
    const emptyMsg = document.createElement('div');
    emptyMsg.className = 'review-empty-message';
    emptyMsg.textContent = '全問正解！サイゼマスターです！💮';
    elements.reviewList.appendChild(emptyMsg);
  } else {
    const emptyMsg = document.createElement('div');
    emptyMsg.className = 'review-empty-message';
    emptyMsg.style.color = 'var(--text-muted)';
    emptyMsg.textContent = '正解した問題はありませんでした。';
    elements.reviewList.appendChild(emptyMsg);
  }

  switchScreen('results');

  // Trigger confetti
  if (gameState.correctCount > 0 && parseFloat(accuracy) >= 90) {
    confetti.spawn(120);
  }
}

function calculateRank(correct, timeSec, accuracy) {
  if (correct === 0) return '初来店';

  if (gameState.format === 'timeattack') {
    if (correct >= 10 && timeSec < 15 && accuracy >= 95) return 'サイゼ神';
    if (correct >= 10 && timeSec < 25 && accuracy >= 80) return 'サイゼ魔人';
    if (correct >= 10 && timeSec < 45 && accuracy >= 70) return 'サイゼ通';
    return '一般客';
  } else if (gameState.format === 'survival') {
    if (correct >= 35) return 'サイゼ神';
    if (correct >= 20) return 'サイゼ魔人';
    if (correct >= 10) return 'サイゼ通';
    return '一般客';
  } else {
    // Practice Mode
    if (correct >= 30) return 'サイゼ魔人';
    if (correct >= 15) return 'サイゼ通';
    return '一般客';
  }
}

function getCategoryJapaneseName(cat) {
  const map = {
    appetizer: "前菜・サイド",
    salad: "サラダ・スープ",
    pasta: "パスタ・ピザ",
    doria: "ドリア・肉料理",
    dessert: "デザート",
    drink: "ドリンク・お酒"
  };
  return map[cat] || "メニュー";
}

// --- KEYBOARD RENDERING & INPUT HANDLING ---
function renderKeypad() {
  elements.virtualKeypad.innerHTML = '';
  elements.virtualKeypad.className = 'keypad-grid numeric-layout';
  
  const keys = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'CLR', '0', '⌫'];
  keys.forEach(key => {
    const btn = document.createElement('button');
    btn.className = 'keypad-btn';
    btn.textContent = key;
    btn.setAttribute('data-key', key === '⌫' ? 'BACKSPACE' : key === 'CLR' ? 'CLEAR' : key);
    
    if (key === '⌫') {
      btn.classList.add('control-key', 'backspace-key');
    } else if (key === 'CLR') {
      btn.classList.add('control-key', 'clear-key');
    }
    
    btn.addEventListener('click', () => handleVirtualKeyPress(key));
    elements.virtualKeypad.appendChild(btn);
  });
}

function handleVirtualKeyPress(key) {
  if (key === '⌫') {
    handleBackspace();
  } else if (key === 'CLR') {
    handleClear();
  } else {
    handleInputCharacter(key);
  }
}

function handlePhysicalKeyboardInput(e) {
  if (!screens.play.classList.contains('active')) return;

  const key = e.key.toUpperCase();
  
  if (key === 'BACKSPACE') {
    e.preventDefault();
    handleBackspace();
  } else if (key === 'ESCAPE' || key === 'DELETE') {
    e.preventDefault();
    handleClear();
  } else if (key === ' ' || key === 'SPACEBAR') {
    e.preventDefault();
    handlePass();
  } else {
    // Numbers only
    if (/^[0-9]$/.test(key)) {
      handleInputCharacter(key);
    }
  }
}

function highlightVirtualKey(key) {
  const btn = elements.virtualKeypad.querySelector(`.keypad-btn[data-key="${key}"]`);
  if (btn) {
    btn.classList.add('pressed');
    setTimeout(() => {
      btn.classList.remove('pressed');
    }, 100);
  }
}

// --- UTILITIES ---
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// Result clipboard format
function copyResultsToClipboard() {
  const rank = elements.rankBadge.textContent;
  const time = elements.resultTime.textContent;
  const correct = gameState.correctCount;
  const wrong = gameState.wrongCount;
  const acc = elements.receiptAccuracy.textContent;
  const maxCombo = gameState.receiptMaxCombo.textContent;
  const formatText = gameState.format === 'timeattack' ? 'タイムアタック' : gameState.format === 'survival' ? 'サバイバル' : '練習モード';
  const totalSaved = elements.receiptTotalPrice.textContent;

  const text = `【サイゼリヤ注文コードタイピング】
形式: ${formatText}
称号: ${rank}
結果: ${correct}品オーダー成功 (ミス/パス/時間切れ: ${wrong}回)
最高コンボ: ${maxCombo}
入力精度: ${acc}
想定会計: ${totalSaved}
${time}

#サイゼリヤタイピング #サイゼリヤ
https://github.com/google-deepmind/antigravity`;

  navigator.clipboard.writeText(text).then(() => {
    const origText = elements.shareBtn.querySelector('span').textContent;
    elements.shareBtn.querySelector('span').textContent = 'コピー完了！';
    elements.shareBtn.style.background = 'linear-gradient(135deg, var(--accent-green) 0%, hsl(142, 60%, 35%) 100%)';
    
    setTimeout(() => {
      elements.shareBtn.querySelector('span').textContent = origText;
      elements.shareBtn.style.background = '';
    }, 2000);
  }).catch(err => {
    console.error('Clipboard copy failed', err);
  });
}
