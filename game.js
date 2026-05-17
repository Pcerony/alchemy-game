const stages = [
  {
    key: "break",
    title: "バキバキ分解",
    goal: "古いスマホの外側を壊して、中にある緑色の電子基板を取り出そう！",
    hint: "スマホのカバーはとってもかたいんだ。重くて頑丈な道具で叩き割る必要があるよ。",
    initial: "古いスマホ",
    result: "電子基板",
    itemClass: "phone-item",
    resultClass: "board-item",
    shake: "スマホを激しく左右にシェイクしよう",
    choices: [
      { label: "ハンマー", icon: "icon-hammer", correct: true },
      { label: "安全ハサミ", icon: "icon-scissors", feedback: "うわぁ！安全ハサミは優しすぎて、かたいスマホのカバーには歯が立たないよ。もっと力強い道具を選んでね！" }
    ],
    explanation: "大成功！スマホの外側や画面には金は含まれていないんだ。僕たちが探している金は、この緑色の電子基板のすきまに隠されているよ！"
  },
  {
    key: "mill",
    title: "こなごなクラッシュ",
    goal: "このかたい電子基板を、細かくてサラサラな粉にしよう。",
    hint: "本物の工場では、かたいボールと基板を一緒の箱に入れて激しく揺らすんだ。",
    initial: "電子基板",
    result: "ミックス金属粉",
    itemClass: "board-item",
    resultClass: "powder-item",
    shake: "一定の強さでシェイクし続けよう",
    choices: [
      { label: "研磨用スチールボール", icon: "icon-ball", correct: true },
      { label: "ふわふわ綿毛", icon: "icon-cotton", feedback: "綿毛は柔らかすぎて、基板を守るクッションになっちゃうよ！もっと硬い相棒を入れよう！" }
    ],
    explanation: "シェイクして粉々にできたね！粉にすると、この後使う薬が金にたくさん触れて反応しやすくなるんだ。"
  },
  {
    key: "magnet",
    title: "じしゃくでキャッチ",
    goal: "粉に混ざっている鉄くずやネジを吸い取ろう。金は吸い取られないから安心してね！",
    hint: "触らなくても、鉄だけをピタッとくっつける不思議な道具があるよ。",
    initial: "ミックス金属粉",
    result: "非鉄金属粉",
    itemClass: "powder-item",
    resultClass: "noniron-item",
    shake: "優しくゆっくりシェイクしよう",
    choices: [
      { label: "強力磁石", icon: "icon-magnet", correct: true },
      { label: "虫眼鏡", icon: "icon-loupe", feedback: "虫眼鏡は鉄を大きく見ることはできても、吸い取ることはできないよ！鉄を引き寄せる道具を選ぼう！" }
    ],
    explanation: "そっとシェイクして粉を浮かせてみよう。鉄くずだけが磁石に吸い付いたね！金は磁石にくっつかずに残るんだ。"
  },
  {
    key: "acid",
    title: "まほうの酸シャワー",
    goal: "固体の金を溶かして、他のゴミと完全に分けられるようにしよう。",
    hint: "金は金属の王様。水やジュースじゃびくともしない。二つの強い酸を混ぜた特別な液体を選ぼう。",
    initial: "非鉄金属粉",
    result: "金イオン溶液",
    itemClass: "noniron-item",
    resultClass: "solution-item",
    shake: "リズムよく左右にシェイクしよう",
    safety: true,
    choices: [
      { label: "王水", icon: "icon-acid", correct: true },
      { label: "ただの水道水", icon: "icon-water", feedback: "お水で金が溶けちゃったら、雨の日にスマホが使えなくなっちゃうね！もっと強力な酸のパワーが必要だよ！" }
    ],
    explanation: "普通の酸じゃ金は眠ったままだよ！王水と金をしっかり触れ合わせて、金を水に溶けた金イオンに変身させたんだ。"
  },
  {
    key: "reduce",
    title: "おうごんの雨",
    goal: "緑色の液体に隠れている金を集めて、雪のように降らせよう！",
    hint: "金イオンに電子というプレゼントを渡して、元の金に戻してくれる魔法の粉が必要だ！",
    initial: "金イオン溶液",
    result: "海綿金（茶色い金泥）",
    itemClass: "solution-item",
    resultClass: "mud-item",
    shake: "素早くシェイクして薬を混ぜ合わせよう",
    choices: [
      { label: "ひみつの還元剤", icon: "icon-reducer", correct: true },
      { label: "食卓塩", icon: "icon-salt", feedback: "お塩を入れてもスープがしょっぱくなるだけだよ！化学変化を起こす特別な薬を選ぼう！" }
    ],
    explanation: "電子をもらった金イオンが、金のつぶになって雪のように降ってきたね！まだ粒が細かすぎるから、コーヒー色の泥みたいに見えるんだ。"
  },
  {
    key: "fire",
    title: "ごうごんファイヤー",
    goal: "バラバラの金粉を熱で溶かして、ピカピカな金の粒にまとめよう！",
    hint: "金を溶かすには 1064℃ もの熱さが必要。魔法の白い粉と熱い力を一緒に使おう。",
    initial: "海綿金（茶色い金泥）",
    result: "純金のつぶ",
    itemClass: "mud-item",
    resultClass: "gold-item",
    shake: "優しく円を描くようにシェイクしよう",
    safety: true,
    choices: [
      { label: "炎 ＋ ホウ砂", icon: "icon-fire", correct: true },
      { label: "氷 ＋ 重曹", icon: "icon-ice", feedback: "冷たい氷じゃ金が冷えちゃうよ！もっとメラメラと燃えるものを選ぼう！" }
    ],
    explanation: "本物の金は、どれだけ燃やしても平気なんだ！小さな金のしずくどうしが合体して、ついにキラキラな姿を見せてくれたね！"
  }
];

const app = document.querySelector(".app-shell");
const startScreen = document.getElementById("startScreen");
const gameScreen = document.getElementById("gameScreen");
const clearScreen = document.getElementById("clearScreen");
const startButton = document.getElementById("startButton");
const restartButton = document.getElementById("restartButton");
const playAgainButton = document.getElementById("playAgainButton");
const progressStrip = document.getElementById("progressStrip");
const stageStep = document.getElementById("stageStep");
const stageTitle = document.getElementById("stageTitle");
const stageGoal = document.getElementById("stageGoal");
const stageHint = document.getElementById("stageHint");
const doctorAvatar = document.getElementById("doctorAvatar");
const choices = document.getElementById("choices");
const tubeDropZone = document.getElementById("tubeDropZone");
const testTube = document.getElementById("testTube");
const tubeContent = document.getElementById("tubeContent");
const tubeParticles = document.getElementById("tubeParticles");
const tubeLabel = document.getElementById("tubeLabel");
const dropHelp = document.getElementById("dropHelp");
const shakePanel = document.getElementById("shakePanel");
const shakeInstruction = document.getElementById("shakeInstruction");
const shakeMode = document.getElementById("shakeMode");
const shakeFill = document.getElementById("shakeFill");
const motionButton = document.getElementById("motionButton");
const manualShakeButton = document.getElementById("manualShakeButton");
const modal = document.getElementById("messageModal");
const modalKicker = document.getElementById("modalKicker");
const modalTitle = document.getElementById("modalTitle");
const modalText = document.getElementById("modalText");
const modalButton = document.getElementById("modalButton");

const state = {
  stageIndex: 0,
  selectedCorrect: false,
  reactionProgress: 0,
  modalAction: null,
  lastMotion: 0,
  drag: null
};

function setView(view) {
  app.dataset.view = view;
  startScreen.hidden = view !== "start";
  gameScreen.hidden = view !== "game";
  clearScreen.hidden = view !== "clear";
}

function startGame() {
  state.stageIndex = 0;
  setView("game");
  renderStage();
}

function renderProgress() {
  progressStrip.innerHTML = "";
  stages.forEach((_, index) => {
    const dot = document.createElement("span");
    dot.className = "progress-dot";
    if (index < state.stageIndex) dot.classList.add("is-done");
    if (index === state.stageIndex) dot.classList.add("is-current");
    progressStrip.appendChild(dot);
  });
}

function renderStage() {
  const stage = stages[state.stageIndex];
  state.selectedCorrect = false;
  state.reactionProgress = 0;
  app.className = `app-shell stage-${state.stageIndex + 1}`;
  app.dataset.view = "game";
  testTube.classList.remove("is-shaking", "tube-cracked");
  tubeDropZone.classList.remove("is-ready");
  shakePanel.hidden = true;
  shakeFill.style.width = "0%";
  doctorAvatar.classList.toggle("is-safe", Boolean(stage.safety));
  stageStep.textContent = `ステップ ${state.stageIndex + 1} / ${stages.length}`;
  stageTitle.textContent = stage.title;
  stageGoal.textContent = stage.goal;
  stageHint.textContent = stage.hint;
  tubeLabel.textContent = stage.initial;
  dropHelp.textContent = "えらんだアイテムを試験管へ";
  renderProgress();
  renderTubeItem(stage.itemClass);
  renderParticles();
  renderChoices(stage);

  if (stage.safety) {
    showModal({
      kicker: "安全のおやくそく",
      title: "おうちでは絶対にまねしないでね",
      text: "これはとっても危ないお薬や炎を使う作業のシミュレーションです。工場の大人たちは、特別な準備と守られたお部屋で安全にお仕事をしているんだよ。",
      button: "わかった"
    });
  }
}

function renderTubeItem(className) {
  tubeContent.innerHTML = "";
  const item = document.createElement("div");
  item.className = `tube-item ${className}`;
  tubeContent.appendChild(item);
}

function renderParticles() {
  tubeParticles.innerHTML = "";
  for (let index = 0; index < 18; index += 1) {
    const particle = document.createElement("span");
    particle.className = "particle";
    particle.style.left = `${22 + Math.random() * 56}%`;
    particle.style.top = `${18 + Math.random() * 62}%`;
    particle.style.setProperty("--x", `${-54 + Math.random() * 108}px`);
    particle.style.setProperty("--y", `${-72 + Math.random() * 126}px`);
    particle.style.animationDelay = `${Math.random() * -1.4}s`;
    tubeParticles.appendChild(particle);
  }
}

function renderChoices(stage) {
  choices.innerHTML = "";
  stage.choices.forEach((choice, index) => {
    const card = document.createElement("button");
    card.type = "button";
    card.className = "choice-card";
    card.dataset.choiceIndex = String(index);
    card.innerHTML = `<span class="choice-icon ${choice.icon}" aria-hidden="true"></span><span>${choice.label}</span>`;
    card.addEventListener("click", () => handleChoice(choice));
    card.addEventListener("pointerdown", (event) => beginDrag(event, card, choice));
    choices.appendChild(card);
  });
}

function beginDrag(event, card, choice) {
  if (state.selectedCorrect) return;
  card.setPointerCapture(event.pointerId);
  card.classList.add("is-dragging");
  state.drag = {
    card,
    choice,
    startX: event.clientX,
    startY: event.clientY,
    moved: false
  };
}

window.addEventListener("pointermove", (event) => {
  if (!state.drag) return;
  const dx = event.clientX - state.drag.startX;
  const dy = event.clientY - state.drag.startY;
  if (Math.abs(dx) + Math.abs(dy) > 8) state.drag.moved = true;
  state.drag.card.style.transform = `translate(${dx}px, ${dy}px) scale(1.03)`;
});

window.addEventListener("pointerup", (event) => {
  if (!state.drag) return;
  const { card, choice, moved } = state.drag;
  card.classList.remove("is-dragging");
  card.style.transform = "";
  const zone = tubeDropZone.getBoundingClientRect();
  const inside = event.clientX >= zone.left && event.clientX <= zone.right && event.clientY >= zone.top && event.clientY <= zone.bottom;
  state.drag = null;
  if (moved && inside) handleChoice(choice);
});

function handleChoice(choice) {
  if (state.selectedCorrect) return;
  if (!choice.correct) {
    showModal({
      kicker: "博士のツッコミ",
      title: "ちょっとちがうみたい",
      text: choice.feedback,
      button: "えらびなおす"
    });
    return;
  }
  state.selectedCorrect = true;
  [...choices.children].forEach((card) => card.setAttribute("aria-disabled", "true"));
  tubeDropZone.classList.add("is-ready");
  dropHelp.textContent = "よし、反応スタート！";
  startReaction();
}

function startReaction() {
  const stage = stages[state.stageIndex];
  app.classList.add("reaction-active");
  testTube.classList.add("is-shaking");
  if (state.stageIndex === 0) testTube.classList.add("tube-cracked");
  shakeInstruction.textContent = stage.shake;
  shakeMode.textContent = "スマホをふるか、ボタンを押して反応を進めよう";
  shakePanel.hidden = false;
}

function addProgress(amount) {
  if (!state.selectedCorrect) return;
  state.reactionProgress = Math.min(100, state.reactionProgress + amount);
  shakeFill.style.width = `${state.reactionProgress}%`;
  if (state.reactionProgress >= 100) finishReaction();
}

function finishReaction() {
  const stage = stages[state.stageIndex];
  state.selectedCorrect = false;
  app.classList.remove("reaction-active");
  testTube.classList.remove("is-shaking", "tube-cracked");
  shakePanel.hidden = true;
  tubeDropZone.classList.remove("is-ready");
  tubeLabel.textContent = stage.result;
  dropHelp.textContent = "反応せいこう";
  renderTubeItem(stage.resultClass);
  showModal({
    kicker: "博士のプチ解説",
    title: "大成功！",
    text: stage.explanation,
    button: state.stageIndex === stages.length - 1 ? "結果を見る" : "つぎのステップへ",
    onClose: () => {
      state.stageIndex += 1;
      if (state.stageIndex >= stages.length) {
        setView("clear");
      } else {
        renderStage();
      }
    }
  });
}

function showModal({ kicker, title, text, button, onClose }) {
  state.modalAction = onClose || null;
  modalKicker.textContent = kicker;
  modalTitle.textContent = title;
  modalText.textContent = text;
  modalButton.textContent = button;
  if (typeof modal.showModal === "function") {
    modal.showModal();
  } else {
    modal.setAttribute("open", "");
  }
}

function closeModal() {
  if (modal.open) modal.close();
  const action = state.modalAction;
  state.modalAction = null;
  if (action) action();
}

function handleMotion(event) {
  const now = Date.now();
  if (now - state.lastMotion < 120) return;
  const acc = event.accelerationIncludingGravity;
  if (!acc) return;
  const power = Math.abs(acc.x || 0) + Math.abs(acc.y || 0) + Math.abs(acc.z || 0);
  if (power > 22) {
    state.lastMotion = now;
    addProgress(Math.min(13, (power - 18) * 0.65));
  }
}

async function enableMotion() {
  try {
    if (typeof DeviceMotionEvent !== "undefined" && typeof DeviceMotionEvent.requestPermission === "function") {
      const permission = await DeviceMotionEvent.requestPermission();
      if (permission !== "granted") {
        shakeMode.textContent = "動きセンサーが使えないので、ボタンでシェイクしよう";
        return;
      }
    }
    window.addEventListener("devicemotion", handleMotion);
    shakeMode.textContent = "スマホの動きで反応中";
  } catch {
    shakeMode.textContent = "動きセンサーが使えないので、ボタンでシェイクしよう";
  }
}

startButton.addEventListener("click", startGame);
restartButton.addEventListener("click", startGame);
playAgainButton.addEventListener("click", startGame);
modalButton.addEventListener("click", closeModal);
motionButton.addEventListener("click", enableMotion);
manualShakeButton.addEventListener("click", () => addProgress(14));

tubeDropZone.addEventListener("pointermove", (event) => {
  if (!state.selectedCorrect || !event.buttons) return;
  addProgress(0.9);
});

setView("start");
