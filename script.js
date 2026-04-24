// 題庫與選項權重設定：
// 每個選項會為某些水晶加分，最後依總分最高對應結果。
const QUESTIONS = [
  {
    title: "當你感到疲憊時，你最想去哪裡恢復能量？",
    options: [
      { text: "安靜臥室裡獨處，聽舒緩音樂", weights: { rose: 2, clear: 1 } },
      { text: "海邊散步，讓風吹散思緒", weights: { aquamarine: 2, amethyst: 1 } },
      { text: "山林夜空下冥想，感受宇宙呼吸", weights: { labradorite: 2, amethyst: 1 } },
      { text: "人群之外的安全角落，先把自己保護好", weights: { obsidian: 2, clear: 1 } },
    ],
  },
  {
    title: "你更容易被哪種顏色吸引？",
    options: [
      { text: "柔和粉與暖白", weights: { rose: 2 } },
      { text: "純淨透明與銀白光", weights: { clear: 2 } },
      { text: "神秘紫與星雲藍", weights: { amethyst: 2, labradorite: 1 } },
      { text: "深黑與金色反光", weights: { obsidian: 2, labradorite: 1 } },
    ],
  },
  {
    title: "面對關係中的矛盾，你通常會？",
    options: [
      { text: "先同理對方，再表達自己的感受", weights: { rose: 2 } },
      { text: "保持清晰，理性分析問題", weights: { clear: 2 } },
      { text: "需要空間沉澱直覺，再做決定", weights: { amethyst: 2, labradorite: 1 } },
      { text: "迅速立邊界，避免被消耗", weights: { obsidian: 2 } },
    ],
  },
  {
    title: "你當前最想強化的能量是？",
    options: [
      { text: "愛與療癒，讓內心柔軟又有力量", weights: { rose: 2 } },
      { text: "專注與淨化，讓目標更明確", weights: { clear: 2 } },
      { text: "靈感與洞察，讓答案自己浮現", weights: { amethyst: 2, labradorite: 1 } },
      { text: "防護與穩定，隔絕外界噪音", weights: { obsidian: 2 } },
    ],
  },
  {
    title: "理想週末夜晚，你會選擇？",
    options: [
      { text: "蠟燭、香氛、手寫日記", weights: { rose: 2, amethyst: 1 } },
      { text: "整理空間，清空雜念", weights: { clear: 2 } },
      { text: "看星空或神祕學內容，記錄靈感", weights: { labradorite: 2, amethyst: 1 } },
      { text: "關機斷聯，徹底休息", weights: { obsidian: 2, aquamarine: 1 } },
    ],
  },
  {
    title: "如果用一句話形容你內在的聲音，它更像？",
    options: [
      { text: "「請溫柔地擁抱自己。」", weights: { rose: 2 } },
      { text: "「回到本質，一切都會清晰。」", weights: { clear: 2 } },
      { text: "「相信直覺，你正在被引導。」", weights: { amethyst: 2, labradorite: 1 } },
      { text: "「守住邊界，保護你的能量場。」", weights: { obsidian: 2 } },
    ],
  },
];

const CRYSTALS = {
  rose: {
    name: "粉晶 Rose Quartz",
    tags: ["療癒", "愛", "溫柔連結"],
    desc: "你的靈魂像晨霧裡的玫瑰光，敏感而真誠。粉晶提醒你，真正的強大來自允許自己被愛、也先學會自我安撫。在關係裡，你擁有讓傷口慢慢發光的能力。",
    image:
      "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1200&q=80",
  },
  clear: {
    name: "白水晶 Clear Quartz",
    tags: ["淨化", "專注", "放大能量"],
    desc: "你像一束被打磨後的白光，清澈且堅定。白水晶對應你的理性與執行力，它幫助你過濾雜訊，讓你回到目標本身，把分散的意念聚成行動。",
    image:
      "https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?auto=format&fit=crop&w=1200&q=80",
  },
  amethyst: {
    name: "紫水晶 Amethyst",
    tags: ["直覺", "平靜", "精神成長"],
    desc: "你的心靈天線一直在線，常能捕捉細膩而深層的訊號。紫水晶代表你的洞察與寧靜，它讓你在混沌中保持清明，聽見內在真正的答案。",
    image:
      "https://images.unsplash.com/photo-1518895949257-7621c3c786d7?auto=format&fit=crop&w=1200&q=80",
  },
  obsidian: {
    name: "黑曜石 Obsidian",
    tags: ["避邪", "邊界", "穩固防護"],
    desc: "你擁有強大的自我保護本能，也擅長在風暴中保持腳下踏實。黑曜石與你共振，幫助你清理消耗性關係，守護能量邊界，讓安全感從內在升起。",
    image:
      "https://images.unsplash.com/photo-1533158326339-7f3cf2404354?auto=format&fit=crop&w=1200&q=80",
  },
  aquamarine: {
    name: "海藍寶 Aquamarine",
    tags: ["溝通", "流動", "釋壓"],
    desc: "你像海潮一樣，外表溫和卻擁有深遠力量。海藍寶支持你表達真實、釋放壓抑情緒，讓語言與心意重新流動，帶來輕盈而持久的平衡感。",
    image:
      "https://images.unsplash.com/photo-1613145993486-6c9b053f59f0?auto=format&fit=crop&w=1200&q=80",
  },
  labradorite: {
    name: "拉長石 Labradorite",
    tags: ["覺察", "轉化", "靈感"],
    desc: "你的能量帶著神祕的變彩，在不同階段持續蛻變。拉長石象徵你對未知的勇氣，它會陪你穿越迷霧，把每次不確定都轉化為更高維度的自我理解。",
    image:
      "https://images.unsplash.com/photo-1519730722595-a5ff788dea4d?auto=format&fit=crop&w=1200&q=80",
  },
};

const state = {
  currentIndex: 0,
  scores: {},
};

const views = {
  welcome: document.getElementById("view-welcome"),
  quiz: document.getElementById("view-quiz"),
  result: document.getElementById("view-result"),
};

const startBtn = document.getElementById("start-btn");
const restartBtn = document.getElementById("restart-btn");
const questionTitle = document.getElementById("question-title");
const optionsContainer = document.getElementById("options");
const progressText = document.getElementById("progress-text");
const progressBar = document.getElementById("progress-bar");

const resultImage = document.getElementById("result-image");
const resultName = document.getElementById("result-name");
const resultTags = document.getElementById("result-tags");
const resultDesc = document.getElementById("result-desc");

function initScores() {
  state.scores = Object.keys(CRYSTALS).reduce((acc, key) => {
    acc[key] = 0;
    return acc;
  }, {});
}

function setActiveView(viewName) {
  Object.entries(views).forEach(([key, element]) => {
    if (key === viewName) {
      element.classList.remove("hidden");
      requestAnimationFrame(() => {
        element.classList.add("active");
      });
    } else {
      element.classList.remove("active");
      setTimeout(() => element.classList.add("hidden"), 260);
    }
  });
}

function renderQuestion() {
  const question = QUESTIONS[state.currentIndex];
  questionTitle.textContent = question.title;
  progressText.textContent = `第 ${state.currentIndex + 1} / ${QUESTIONS.length} 題`;
  progressBar.style.width = `${((state.currentIndex + 1) / QUESTIONS.length) * 100}%`;

  optionsContainer.innerHTML = "";
  question.options.forEach((option) => {
    const button = document.createElement("button");
    button.className = "option-btn";
    button.textContent = option.text;
    button.addEventListener("click", () => {
      // 記錄目前選項對應的權重
      Object.entries(option.weights).forEach(([crystalKey, score]) => {
        state.scores[crystalKey] += score;
      });
      goNext();
    });
    optionsContainer.appendChild(button);
  });
}

function goNext() {
  state.currentIndex += 1;
  if (state.currentIndex < QUESTIONS.length) {
    renderQuestion();
    return;
  }
  showResult();
}

function getFinalCrystalKey() {
  let winnerKey = "clear";
  let maxScore = -Infinity;

  Object.entries(state.scores).forEach(([key, score]) => {
    if (score > maxScore) {
      maxScore = score;
      winnerKey = key;
    }
  });

  return winnerKey;
}

function showResult() {
  const key = getFinalCrystalKey();
  const crystal = CRYSTALS[key];

  resultImage.src = crystal.image;
  resultImage.alt = crystal.name;
  resultName.textContent = crystal.name;
  resultTags.textContent = crystal.tags.map((tag) => `#${tag}`).join("  ");
  resultDesc.textContent = crystal.desc;

  setActiveView("result");
}

function startQuiz() {
  state.currentIndex = 0;
  initScores();
  setActiveView("quiz");
  renderQuestion();
}

startBtn.addEventListener("click", startQuiz);
restartBtn.addEventListener("click", () => {
  setActiveView("welcome");
});
