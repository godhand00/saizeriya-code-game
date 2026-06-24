// --- SAIZERIYA MENU DATABASE (59 items) ---
const MENU_DATABASE = [
  // Appetizers & Sides (前菜・おつまみ・パンライス) - Category: appetizer
  { name: "辛味チキン", price: 300, code: "1401", category: "appetizer", description: "ジューシーでスパイシーな大人気の手羽先唐揚げ。" },
  { name: "アロスティチーニ", price: 400, code: "1402", category: "appetizer", description: "ラム肉（羊肉）の串焼き。特製スパイスを添えて。" },
  { name: "ほうれん草のソテー", price: 200, code: "1403", category: "appetizer", description: "ほうれん草をオリーブオイルとソルトでソテー。" },
  { name: "ポップコーンシュリンプ", price: 300, code: "1404", category: "appetizer", description: "サクサクの小エビのフライ。オーロラソースで。" },
  { name: "エスカルゴのオーブン焼き", price: 400, code: "1405", category: "appetizer", description: "ガーリックバターが香る本格エスカルゴ料理。" },
  { name: "チョリソー", price: 400, code: "1407", category: "appetizer", description: "ピリッと辛いジューシーなソーセージ。" },
  { name: "カリッとポテト", price: 280, code: "1415", category: "appetizer", description: "オリーブオイルでカリッと焼き上げたポテト。" },
  { name: "バッファローモッツァレラ", price: 300, code: "1416", category: "appetizer", description: "ミルキーでフレッシュな水牛モッツァレラチーズ。" },
  { name: "柔らか青豆の温サラダ", price: 200, code: "1425", category: "appetizer", description: "甘みの強い青豆に半熟卵とチーズ。" },
  { name: "ライス", price: 150, code: "3101", category: "appetizer", description: "ふっくら炊き上げたおいしいご飯。" },
  { name: "スモールライス", price: 100, code: "3102", category: "appetizer", description: "少し控えめな少なめサイズのご飯。" },
  { name: "ラージライス", price: 200, code: "3103", category: "appetizer", description: "たっぷり大盛りサイズのご飯。" },
  { name: "プチフォッカ", price: 150, code: "3104", category: "appetizer", description: "もっちり食感が美味しいセットパン。" },
  { name: "ガーリックトースト", price: 200, code: "3107", category: "appetizer", description: "ガーリックバターを塗って香ばしく焼いたパン。" },
  { name: "トッピング半熟卵", price: 50, code: "4301", category: "appetizer", description: "いろんな料理に合わせられるとろとろ半熟卵。" },
  { name: "野菜ペースト", price: 100, code: "4304", category: "appetizer", description: "ハンバーグやチキンにぴったりの特製野菜ソース。" },

  // Salads & Soups (サラダ・スープ) - Category: salad
  { name: "小エビのサラダ", price: 350, code: "1202", category: "salad", description: "ぷりぷりの甘エビがのった看板サラダ。" },
  { name: "わかめのサラダ", price: 350, code: "1205", category: "salad", description: "三陸産わかめのシャキシャキサラダ。" },
  { name: "モッツァレラのサラダ", price: 400, code: "1207", category: "salad", description: "水牛モッツァレラとトマトのサラダ。" },
  { name: "グリーンサラダ", price: 350, code: "1208", category: "salad", description: "シンプルなルッコラとレタスのサラダ。" },
  { name: "チキンのサラダ", price: 350, code: "1209", category: "salad", description: "柔らかい鶏ささみをトッピング。" },
  { name: "コーンクリームスープ", price: 150, code: "1301", category: "salad", description: "コーンの甘みを生かしたクリーミースープ。" },
  { name: "田舎風ミネストローネ", price: 300, code: "1305", category: "salad", description: "野菜がたっぷり溶け込んだイタリアン野菜スープ。" },
  { name: "たまねぎのズッパ", price: 300, code: "1307", category: "salad", description: "じっくり炒めたたまねぎとチーズのスープ。" },

  // Pizzas & Pastas (パスタ・ピザ) - Category: pasta
  { name: "マルゲリータピザ", price: 400, code: "2201", category: "pasta", description: "トマトソースとモッツァレラのシンプルピザ。" },
  { name: "バッファローモッツァレラのマルゲリータピザ", price: 500, code: "2203", category: "pasta", description: "水牛モッツァレラを贅沢に使ったマルゲリータ。" },
  { name: "たっぷりコーンのピザ", price: 400, code: "2206", category: "pasta", description: "甘いコーンとホワイトソースのピザ。" },
  { name: "ソーセージピザ", price: 400, code: "2208", category: "pasta", description: "ポークソーセージをトッピングしたピザ。" },
  { name: "タラコソースシシリー風", price: 400, code: "2301", category: "pasta", description: "たらこと生クリームのマイルドソース。" },
  { name: "ペペロンチーノ", price: 300, code: "2303", category: "pasta", description: "オリーブオイル、ニンニク、唐辛子の味。" },
  { name: "パルマ風スパゲッティ", price: 400, code: "2304", category: "pasta", description: "イタリア産トマトとパンチェッタのパスタ。" },
  { name: "カルボナーラ", price: 500, code: "2305", category: "pasta", description: "濃厚な卵と生クリームの特製ソース。" },
  { name: "ミートソースボロニア風", price: 400, code: "2306", category: "pasta", description: "牛肉のコク深い味わいのミートソース。" },
  { name: "半熟卵のミートソースボロニア風", price: 450, code: "2307", category: "pasta", description: "ミートソースに半熟卵をトッピング。" },
  { name: "スープ入り塩味ボンゴレ", price: 500, code: "2310", category: "pasta", description: "アサリの旨味が溶け込んだスープ仕立て。" },
  { name: "イカの墨入りセピアソース", price: 500, code: "2328", category: "pasta", description: "イカの旨味が凝縮された真っ黒なパスタ。" },

  // Dorias & Meats (ドリア・グラタン・肉料理) - Category: doria
  { name: "ミラノ風ドリア", price: 300, code: "2101", category: "doria", description: "創業以来一番人気のミートソースドリア。" },
  { name: "半熟卵のミラノ風ドリア", price: 350, code: "2103", category: "doria", description: "ミラノ風ドリアにとろ〜り半熟卵。" },
  { name: "タラコとエビのドリア", price: 400, code: "2105", category: "doria", description: "たらこクリームにプリプリのエビをトッピング。" },
  { name: "焼チーズミラノ風ドリア", price: 350, code: "2108", category: "doria", description: "チーズをのせて香ばしく焼き上げました。" },
  { name: "エビクリームグラタン", price: 400, code: "2109", category: "doria", description: "エビの旨味がきいたペンネのグラタン。" },
  { name: "若鶏のディアボラ風", price: 500, code: "2402", category: "doria", description: "ジューシーなチキンに特製野菜ソース。" },
  { name: "イタリアンハンバーグ", price: 500, code: "2403", category: "doria", description: "とろけるチーズとトマトソースのハンバーグ。" },
  { name: "ハンバーグステーキ", price: 400, code: "2406", category: "doria", description: "ジューシーなハンバーグとポテト。" },
  { name: "ディアボラ風ハンバーグ", price: 500, code: "2407", category: "doria", description: "ハンバーグに特製野菜ソースとポテト。" },
  { name: "ラムのランプステーキ", price: 1000, code: "2411", category: "doria", description: "ジューシーなラム肉のステーキ。" },

  // Desserts (デザート) - Category: dessert
  { name: "ティラミス クラシコ", price: 300, code: "3201", category: "dessert", description: "しっとりとしたスポンジとマスカルポーネ。" },
  { name: "プリンとティラミス クラシコ", price: 500, code: "3202", category: "dessert", description: "プリンとティラミスの豪華盛り合わせ。" },
  { name: "ミルクジェラート", price: 200, code: "3205", category: "dessert", description: "ミルクの自然な風味のさっぱりジェラート。" },
  { name: "イタリアンプリン", price: 250, code: "3206", category: "dessert", description: "濃厚でねっとりした食感の定番プリン。" },
  { name: "チョコレートケーキ", price: 300, code: "3207", category: "dessert", description: "なめらかなチョコレートクリームケーキ。" },
  { name: "すっきりレモンのシャーベット", price: 200, code: "3209", category: "dessert", description: "シチリア産レモンのすっきりデザート。" },
  { name: "シナモンプチフォッカ", price: 170, code: "3106", category: "dessert", description: "プチフォッカにシナモンシュガー。" },

  // Drinks & Alcohol (ドリンク・アルコール) - Category: drink
  { name: "セットドリンクバー", price: 200, code: "5101", category: "drink", description: "お食事やデザートとセットでお得なドリンクバー。" },
  { name: "単品ドリンクバー", price: 300, code: "5103", category: "drink", description: "ドリンクバーのみご利用のお客様。" },
  { name: "生ビール ジョッキ", price: 400, code: "3301", category: "drink", description: "キリン一番搾りのキンキン生ビール。" },
  { name: "生ビール グラスビール", price: 300, code: "3302", category: "drink", description: "少しだけ飲みたいときにぴったりのグラスビール。" },
  { name: "グラスワイン 赤", price: 100, code: "3401", category: "drink", description: "グラスで手軽に飲めるフレッシュなハウス赤ワイン。" },
  { name: "グラスワイン 白", price: 100, code: "3402", category: "drink", description: "すっきり飲みやすいフレッシュなハウス白ワイン。" },
  { name: "デカンタ赤 (250ml)", price: 200, code: "3403", category: "drink", description: "フレッシュなハウスワイン赤（たっぷりデカンタ小サイズ）。" },
  { name: "デカンタ白 (250ml)", price: 200, code: "3404", category: "drink", description: "フレッシュなハウスワイン白（たっぷりデカンタ小サイズ）。" },
  { name: "デカンタ赤 (500ml)", price: 400, code: "3405", category: "drink", description: "フレッシュなハウスワイン赤（たっぷりデカンタ大サイズ）。" },
  { name: "デカンタ白 (500ml)", price: 400, code: "3406", category: "drink", description: "フレッシュなハウスワイン白（たっぷりデカンタ大サイズ）。" }
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
  
  // Log for breakdown
  history: [], // { name, code, timeTaken, correct }
  
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
  revealHintBtn: document.getElementById('reveal-hint-btn'),
  
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
  backHomeBtn: document.getElementById('back-home-btn')
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
    elements.timerText.textContent = '00:00.0';
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
  
  // Clean classes
  elements.comboBubble.classList.remove('pop');

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

  if (gameState.format === 'timeattack') {
    const tickTime = 100; // ms
    gameState.timerId = setInterval(() => {
      gameState.elapsedTime += tickTime;
      // Update text
      const totalSec = gameState.elapsedTime / 1000;
      elements.timerText.textContent = totalSec.toFixed(1) + '秒';
      
      // Progress bar tracks completion based on question number rather than time limit
      const ratio = (gameState.currentIndex / gameState.questions.length) * 100;
      elements.timerBar.style.width = `${ratio}%`;
    }, tickTime);
  } else if (gameState.format === 'survival') {
    const tickTime = 100; // ms
    const initialTime = 30;
    gameState.timerId = setInterval(() => {
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
      // Bar shrinks from 100% (or capped above initial)
      const ratio = Math.min((gameState.timeLeft / initialTime) * 100, 100);
      elements.timerBar.style.width = `${ratio}%`;
      
      // Flash red when time is low (< 5s)
      if (gameState.timeLeft < 5) {
        elements.timerBar.style.backgroundColor = 'var(--accent-red)';
      } else {
        elements.timerBar.style.backgroundColor = '';
      }
    }, tickTime);
  }
}

function loadQuestion() {
  // If we reach the end of the pool in survival/practice, shuffle and reload pool
  if (gameState.currentIndex >= gameState.questions.length) {
    if (gameState.format === 'timeattack') {
      endGame(true);
      return;
    } else {
      // Loop list: Reshuffle and start list over
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
  
  // Set category tag text and color
  elements.categoryTag.textContent = getCategoryJapaneseName(currentItem.category);
  elements.categoryTag.className = `menu-badge badge-${currentItem.category}`;

  // Update card text
  elements.displayName.textContent = currentItem.name;
  elements.displayPrice.textContent = `¥${currentItem.price}`;

  // If practice, or if hint is pressed, display it
  if (gameState.format === 'practice') {
    revealHint(true);
  } else {
    elements.hintBox.classList.add('hidden');
  }

  // Clear slots
  gameState.typedBuffer = [];
  updateInputSlots();
  
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

    // Trigger key press visual on virtual keyboard if clicked
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
    
    // Play sounds & visuals
    sounds.playCorrect(gameState.combo);
    
    slots.forEach(slot => slot.classList.add('flash-green'));
    
    // Combo text animation
    elements.comboValue.textContent = gameState.combo;
    if (gameState.combo > 1) {
      elements.comboBubble.classList.remove('pop');
      void elements.comboBubble.offsetWidth; // Trigger reflow
      elements.comboBubble.classList.add('pop');
    }

    // Time bonus for Survival
    if (gameState.format === 'survival') {
      gameState.timeLeft += 3; // +3 seconds
      gameState.score += (100 + gameState.combo * 10); // score system
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
      wrongCount: 0
    });

    // Advance after brief delay so user can see correct flash
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
      gameState.timeLeft = Math.max(0, gameState.timeLeft - 5); // -5 seconds
    }

    // Clean up error state after animation finishes
    setTimeout(() => {
      elements.inputSlots.classList.remove('shake-element');
      slots.forEach(slot => {
        slot.classList.remove('flash-red');
      });
      
      // Clear buffer so they can re-try
      gameState.typedBuffer = [];
      updateInputSlots();
      gameState.blockInput = false;
    }, 350);
  }
}

function revealHint(autoPractice = false) {
  const currentItem = gameState.questions[gameState.currentIndex];
  const targetCode = currentItem.code;
  
  // Format hint: show first 2 digits + bullet marks (e.g. 21••)
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

  // Accuracy calculation: correct key presses vs total key presses
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
  
  // Render Stats in UI
  elements.rankBadge.textContent = rank;
  
  // Style rank badge dynamically based on title
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
    const sorted = [...gameState.history].sort((a, b) => a.timeTaken - b.timeTaken);
    elements.analysisFastest.textContent = `${sorted[0].item.name} (${sorted[0].timeTaken.toFixed(1)}秒)`;
    elements.analysisSlowest.textContent = `${sorted[sorted.length - 1].item.name} (${sorted[sorted.length - 1].timeTaken.toFixed(1)}秒)`;
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
  });

  if (gameState.history.length === 0) {
    const row = document.createElement('tr');
    row.innerHTML = `<td colspan="3" style="text-align:center;color:#888;">正解アイテムなし</td>`;
    elements.receiptItems.appendChild(row);
  }

  elements.receiptCorrectCount.textContent = `${gameState.correctCount}点`;
  elements.receiptWrongCount.textContent = `${gameState.wrongCount}回`;
  elements.receiptMaxCombo.textContent = `${gameState.maxCombo} Combo`;
  elements.receiptAccuracy.textContent = `${accuracy}%`;
  elements.receiptTotalPrice.textContent = `¥${totalPrice.toLocaleString()}`;

  // Switch to results screen
  switchScreen('results');

  // Trigger confetti for achievements
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

// Category badges mapping
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
  
  // Keys layout: standard telephone/POS keypad
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
  // Only accept keyboard inputs when play screen is active
  if (!screens.play.classList.contains('active')) return;

  const key = e.key.toUpperCase();
  
  if (key === 'BACKSPACE') {
    e.preventDefault();
    handleBackspace();
  } else if (key === 'ESCAPE' || key === 'DELETE') {
    e.preventDefault();
    handleClear();
  } else {
    // Numbers only
    if (/^[0-9]$/.test(key)) {
      handleInputCharacter(key);
    }
  }
}

// Animate virtual key cap press
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
結果: ${correct}品オーダー成功 (ミス: ${wrong}回)
最高コンボ: ${maxCombo}
入力精度: ${acc}
想定会計: ${totalSaved}
${time}

#サイゼリヤタイピング #サイゼリヤ
https://github.com/google-deepmind/antigravity`;

  navigator.clipboard.writeText(text).then(() => {
    // Visual indicator on copy
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
