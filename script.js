// 题库与选项权重配置：
// 每个选项会给某些水晶增加分数，最后按总分最高匹配结果。
const QUESTIONS = [
  {
    title: "当你感到疲惫时，你最想去哪里恢复能量？",
    options: [
      { text: "安静卧室里独处，听舒缓音乐", weights: { rose: 2, clear: 1 } },
      { text: "海边散步，让风吹散思绪", weights: { aquamarine: 2, amethyst: 1 } },
      { text: "山林夜空下冥想，感受宇宙呼吸", weights: { labradorite: 2, amethyst: 1 } },
      { text: "人群之外的安全角落，先把自己保护好", weights: { obsidian: 2, clear: 1 } },
    ],
  },
  {
    title: "你更容易被哪种颜色吸引？",
    options: [
      { text: "柔和粉与暖白", weights: { rose: 2 } },
      { text: "纯净透明与银白光", weights: { clear: 2 } },
      { text: "神秘紫与星云蓝", weights: { amethyst: 2, labradorite: 1 } },
      { text: "深黑与金色反光", weights: { obsidian: 2, labradorite: 1 } },
    ],
  },
  {
    title: "面对关系中的矛盾，你通常会？",
    options: [
      { text: "先共情对方，再表达自己的感受", weights: { rose: 2 } },
      { text: "保持清晰，理性分析问题", weights: { clear: 2 } },
      { text: "需要空间沉淀直觉，再做决定", weights: { amethyst: 2, labradorite: 1 } },
      { text: "迅速立边界，避免被消耗", weights: { obsidian: 2 } },
    ],
  },
  {
    title: "你当前最想强化的能量是？",
    options: [
      { text: "爱与疗愈，让内心柔软又有力量", weights: { rose: 2 } },
      { text: "专注与净化，让目标更明确", weights: { clear: 2 } },
      { text: "灵感与洞察，让答案自己浮现", weights: { amethyst: 2, labradorite: 1 } },
      { text: "防护与稳定，屏蔽外界噪音", weights: { obsidian: 2 } },
    ],
  },
  {
    title: "理想周末夜晚，你会选择？",
    options: [
      { text: "烛光、香薰、手写日记", weights: { rose: 2, amethyst: 1 } },
      { text: "整理空间，清空杂念", weights: { clear: 2 } },
      { text: "看星空或神秘学内容，记录灵感", weights: { labradorite: 2, amethyst: 1 } },
      { text: "关机断联，彻底休息", weights: { obsidian: 2, aquamarine: 1 } },
    ],
  },
  {
    title: "如果用一句话形容你内在的声音，它更像？",
    options: [
      { text: "“请温柔地拥抱自己。”", weights: { rose: 2 } },
      { text: "“回到本质，一切会清晰。”", weights: { clear: 2 } },
      { text: "“相信直觉，你正在被引导。”", weights: { amethyst: 2, labradorite: 1 } },
      { text: "“守住边界，保护你的能量场。”", weights: { obsidian: 2 } },
    ],
  },
];

const CRYSTALS = {
  rose: {
    name: "粉晶 Rose Quartz",
    tags: ["疗愈", "爱", "温柔链接"],
    desc: "你的灵魂像晨雾里的玫瑰光，敏感而真诚。粉晶提醒你，真正的强大来自允许自己被爱、也先学会自我安抚。在关系里，你拥有让伤口慢慢发光的能力。",
    image:
      "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1200&q=80",
  },
  clear: {
    name: "白水晶 Clear Quartz",
    tags: ["净化", "专注", "放大能量"],
    desc: "你像一束被打磨后的白光，清澈且坚定。白水晶对应你的理性与执行力，它帮助你过滤杂讯，让你回到目标本身，把分散的意念聚成行动。",
    image:
      "https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?auto=format&fit=crop&w=1200&q=80",
  },
  amethyst: {
    name: "紫水晶 Amethyst",
    tags: ["直觉", "平静", "精神成长"],
    desc: "你的心灵天线一直在线，常能捕捉细腻而深层的讯号。紫水晶代表你的洞察与宁静，它让你在混沌中保持清明，听见内在真正的答案。",
    image:
      "https://images.unsplash.com/photo-1518895949257-7621c3c786d7?auto=format&fit=crop&w=1200&q=80",
  },
  obsidian: {
    name: "黑曜石 Obsidian",
    tags: ["避邪", "边界", "稳固防护"],
    desc: "你拥有强大的自我保护本能，也擅长在风暴中保持脚下踏实。黑曜石与你共振，帮助你清理消耗性关系，守护能量边界，让安全感从内在升起。",
    image:
      "https://images.unsplash.com/photo-1533158326339-7f3cf2404354?auto=format&fit=crop&w=1200&q=80",
  },
  aquamarine: {
    name: "海蓝宝 Aquamarine",
    tags: ["沟通", "流动", "释压"],
    desc: "你像海潮一样，外表温和却拥有深远力量。海蓝宝支持你表达真实、释放压抑情绪，让语言与心意重新流动，带来轻盈而持久的平衡感。",
    image:
      "https://images.unsplash.com/photo-1613145993486-6c9b053f59f0?auto=format&fit=crop&w=1200&q=80",
  },
  labradorite: {
    name: "拉长石 Labradorite",
    tags: ["觉察", "转化", "灵感"],
    desc: "你的能量带着神秘的变彩，在不同阶段持续蜕变。拉长石象征你对未知的勇气，它会陪你穿越迷雾，把每次不确定都转化为更高维度的自我理解。",
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
  progressText.textContent = `第 ${state.currentIndex + 1} / ${QUESTIONS.length} 题`;
  progressBar.style.width = `${((state.currentIndex + 1) / QUESTIONS.length) * 100}%`;

  optionsContainer.innerHTML = "";
  question.options.forEach((option) => {
    const button = document.createElement("button");
    button.className = "option-btn";
    button.textContent = option.text;
    button.addEventListener("click", () => {
      // 记录当前选项对应的权重
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
