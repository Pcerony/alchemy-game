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
    toolClass: "icon-hammer",
    toolCount: 5,
    colors: ["#74d39d", "#a9e6c4", "#24a574"],
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
    toolClass: "icon-ball",
    toolCount: 8,
    colors: ["#74d39d", "#c8d2e0", "#b8a3d6"],
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
    toolClass: "icon-magnet",
    toolCount: 6,
    colors: ["#c8d2e0", "#88c8ee", "#f2ce61"],
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
    toolClass: "icon-acid",
    toolCount: 7,
    colors: ["#d4e3e7", "#8bdc68", "#6d6731"],
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
    toolClass: "icon-reducer",
    toolCount: 8,
    colors: ["#4e925a", "#9ccf82", "#8c5a3c"],
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
    toolClass: "icon-fire",
    toolCount: 7,
    colors: ["#8c5a3c", "#ff7369", "#f5b82e"],
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
const hintToggle = document.getElementById("hintToggle");
const currentMaterial = document.getElementById("currentMaterial");
const doctorAvatar = document.getElementById("doctorAvatar");
const choices = document.getElementById("choices");
const tubeDropZone = document.getElementById("tubeDropZone");
const testTube = document.getElementById("testTube");
const tubeLiquid = document.getElementById("tubeLiquid");
const tubeContent = document.getElementById("tubeContent");
const physicsLayer = document.getElementById("physicsLayer");
const tubeParticles = document.getElementById("tubeParticles");
const tubeLabel = document.getElementById("tubeLabel");
const shakePanel = document.getElementById("shakePanel");
const shakeInstruction = document.getElementById("shakeInstruction");
const shakeMode = document.getElementById("shakeMode");
const shakeFill = document.getElementById("shakeFill");
const modal = document.getElementById("messageModal");
const modalKicker = document.getElementById("modalKicker");
const modalTitle = document.getElementById("modalTitle");
const modalText = document.getElementById("modalText");
const modalButton = document.getElementById("modalButton");
const resultPreview = document.getElementById("resultPreview");
const resultArt = document.getElementById("resultArt");
const resultName = document.getElementById("resultName");

const state = {
  stageIndex: 0,
  selectedCorrect: false,
  reactionProgress: 0,
  modalAction: null,
  lastMotion: 0,
  drag: null,
  bodies: [],
  animationId: null,
  impulse: 0,
  gravityX: 0,
  audioContext: null,
  motionListening: false,
  lastFeedback: 0,
  lastSound: 0,
  shakeDirection: 1
};

function setView(view) {
  app.dataset.view = view;
  startScreen.hidden = view !== "start";
  gameScreen.hidden = view !== "game";
  clearScreen.hidden = view !== "clear";
}

function startGame() {
  unlockAudio();
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
  stopPhysics();
  app.className = `app-shell stage-${state.stageIndex + 1}`;
  app.dataset.view = "game";
  testTube.classList.remove("is-shaking", "tube-cracked");
  tubeDropZone.classList.remove("is-ready");
  shakePanel.hidden = true;
  shakeFill.style.width = "0%";
  updateReactionLook(0);
  doctorAvatar.classList.toggle("is-safe", Boolean(stage.safety));
  stageStep.textContent = `ステップ ${state.stageIndex + 1} / ${stages.length}`;
  stageTitle.textContent = stage.title;
  stageGoal.textContent = stage.goal;
  stageHint.textContent = stage.hint;
  stageHint.hidden = true;
  hintToggle.setAttribute("aria-expanded", "false");
  hintToggle.textContent = "ヒントを見る";
  tubeLabel.textContent = stage.initial;
  currentMaterial.textContent = stage.initial;
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
  physicsLayer.innerHTML = "";
  const item = document.createElement("div");
  item.className = `tube-item subject-item ${className}`;
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
    playTone("wrong");
    buzz(30);
    showModal({
      kicker: "博士のツッコミ",
      title: "ちょっとちがうみたい",
      text: choice.feedback,
      button: "えらびなおす"
    });
    return;
  }
  unlockAudio();
  state.selectedCorrect = true;
  [...choices.children].forEach((card) => card.setAttribute("aria-disabled", "true"));
  tubeDropZone.classList.add("is-ready");
  startReaction();
}

function startReaction() {
  const stage = stages[state.stageIndex];
  app.classList.add("reaction-active");
  testTube.classList.add("is-shaking");
  if (state.stageIndex === 0) testTube.classList.add("tube-cracked");
  shakeInstruction.textContent = stage.shake;
  shakeMode.textContent = "端末をふるか、試験管をタップして反応を進めよう";
  shakePanel.hidden = false;
  createPhysicsBodies(stage);
  startPhysics();
  startMotionDetection();
  playTone("start");
  buzz(25);
}

function addProgress(amount) {
  if (!state.selectedCorrect) return;
  state.reactionProgress = Math.min(100, state.reactionProgress + amount);
  shakeFill.style.width = `${state.reactionProgress}%`;
  updateReactionLook(state.reactionProgress);
  if (state.reactionProgress >= 100) finishReaction();
}

function manualShake() {
  if (!state.selectedCorrect) return;
  unlockAudio();
  shakeBurst(18, Math.random() > 0.5 ? 1 : -1);
  addProgress(10);
  feedback("shake");
}

function shakeBurst(power, direction) {
  const burst = Math.max(5, power);
  state.shakeDirection = direction || state.shakeDirection * -1;
  state.impulse = Math.max(state.impulse, burst);
  state.gravityX += state.shakeDirection * burst * 0.08;
  state.bodies.forEach((body, index) => {
    const subjectScale = body.kind === "subject" ? 0.58 : 1;
    const side = state.shakeDirection * (4.2 + Math.random() * 5.2) * subjectScale;
    const lift = (11 + Math.random() * 10 + Math.min(10, burst * 0.45)) * subjectScale;
    body.vx += side + Math.sin(index * 1.7) * 1.8;
    body.vy -= lift;
    body.hit = 2;
  });
}

function finishReaction() {
  const stage = stages[state.stageIndex];
  state.selectedCorrect = false;
  stopPhysics();
  app.classList.remove("reaction-active");
  testTube.classList.remove("is-shaking", "tube-cracked");
  shakePanel.hidden = true;
  tubeDropZone.classList.remove("is-ready");
  tubeLabel.textContent = stage.result;
  currentMaterial.textContent = stage.result;
  renderTubeItem(stage.resultClass);
  playTone("success");
  buzz([35, 30, 55]);
  showModal({
    kicker: "博士のプチ解説",
    title: `${stage.result}をゲット！`,
    text: stage.explanation,
    button: state.stageIndex === stages.length - 1 ? "結果を見る" : "つぎのステップへ",
    result: {
      name: stage.result,
      className: stage.resultClass
    },
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

function showModal({ kicker, title, text, button, result, onClose }) {
  state.modalAction = onClose || null;
  modalKicker.textContent = kicker;
  modalTitle.textContent = title;
  modalText.textContent = text;
  modalButton.textContent = button;
  if (result) {
    resultPreview.hidden = false;
    resultName.textContent = result.name;
    resultArt.className = `result-art ${result.className}`;
  } else {
    resultPreview.hidden = true;
    resultName.textContent = "";
    resultArt.className = "result-art";
  }
  if (typeof modal.showModal === "function") {
    modal.showModal();
  } else {
    modal.setAttribute("open", "");
  }
}

function updateReactionLook(progress) {
  const stage = stages[state.stageIndex] || stages[0];
  const ratio = progress / 100;
  const first = blend(stage.colors[0], stage.colors[1], Math.min(1, ratio * 1.35));
  const second = blend(stage.colors[1], stage.colors[2], Math.max(0, ratio - 0.26) / 0.74);
  tubeLiquid.style.background = `linear-gradient(180deg, ${first}, ${second})`;
  tubeLiquid.style.height = `${30 + ratio * 34}%`;
  tubeLiquid.style.opacity = `${0.5 + ratio * 0.4}`;
  testTube.style.setProperty("--react-p", ratio.toFixed(2));
}

function blend(a, b, ratio) {
  const start = hexToRgb(a);
  const end = hexToRgb(b);
  const mix = start.map((value, index) => Math.round(value + (end[index] - value) * ratio));
  return `rgb(${mix[0]}, ${mix[1]}, ${mix[2]})`;
}

function hexToRgb(hex) {
  return hex
    .replace("#", "")
    .match(/.{2}/g)
    .map((part) => parseInt(part, 16));
}

function createPhysicsBodies(stage) {
  physicsLayer.innerHTML = "";
  const bounds = testTube.getBoundingClientRect();
  const width = Math.max(110, bounds.width - 36);
  const height = Math.max(190, bounds.height - 54);
  const subjectSize = subjectDimensions(stage.itemClass);
  const subject = makeBody({
    kind: "subject",
    className: stage.itemClass,
    width: subjectSize.width,
    height: subjectSize.height,
    x: width * 0.5,
    y: height - subjectSize.height / 2,
    mass: 2.2
  });
  const tools = Array.from({ length: stage.toolCount }, (_, index) => {
    const toolSize = stage.toolClass === "icon-ball" ? 28 : 34;
    return makeBody({
      kind: "tool",
      className: stage.toolClass,
      width: toolSize,
      height: toolSize,
      x: 24 + Math.random() * (width - 48),
      y: height - toolSize / 2,
      vx: 0,
      vy: 0,
      phase: index * 0.7
    });
  });
  state.bodies = [subject, ...tools];
  state.bodies.forEach((body) => physicsLayer.appendChild(body.el));
}

function subjectDimensions(className) {
  if (className === "phone-item") return { width: 54, height: 86 };
  if (className === "board-item") return { width: 76, height: 56 };
  if (className === "solution-item") return { width: 62, height: 62 };
  if (className === "gold-item") return { width: 58, height: 44 };
  return { width: 70, height: 42 };
}

function makeBody({ kind, className, width, height, x, y, vx = 0, vy = 0, mass = 1, phase = 0 }) {
  const el = document.createElement("span");
  el.className = kind === "subject" ? `physics-body physics-subject ${className}` : `physics-body physics-tool ${className}`;
  if (kind === "tool") {
    el.classList.add(toolShapeClass(className));
    el.innerHTML = toolMarkup(className);
  }
  el.style.width = `${width}px`;
  el.style.height = `${height}px`;
  return { el, kind, className, width, height, radius: Math.max(width, height) / 2, x, y, vx, vy, mass, phase, hit: 0 };
}

function toolShapeClass(className) {
  return className.replace("icon-", "tool-");
}

function toolMarkup(className) {
  const kind = toolShapeClass(className);
  if (kind === "tool-hammer") return '<span class="tool-head"></span><span class="tool-handle"></span>';
  if (kind === "tool-magnet") return '<span class="tool-magnet-arc"></span>';
  if (kind === "tool-acid" || kind === "tool-water") return '<span class="tool-bottle"></span>';
  if (kind === "tool-fire") return '<span class="tool-flame"></span>';
  if (kind === "tool-reducer" || kind === "tool-salt") return '<span class="tool-powder"></span>';
  if (kind === "tool-ice") return '<span class="tool-cube"></span>';
  return '<span class="tool-ball-core"></span>';
}

function startPhysics() {
  if (state.animationId) cancelAnimationFrame(state.animationId);
  const tick = () => {
    stepPhysics();
    state.animationId = requestAnimationFrame(tick);
  };
  tick();
}

function stopPhysics() {
  if (state.animationId) cancelAnimationFrame(state.animationId);
  state.animationId = null;
  state.bodies = [];
  physicsLayer.innerHTML = "";
}

function stepPhysics() {
  const bounds = physicsLayer.getBoundingClientRect();
  const width = Math.max(110, bounds.width);
  const height = Math.max(180, bounds.height);
  const subject = state.bodies[0];
  if (!subject) return;

  const shake = Math.min(12, state.impulse);
  state.impulse *= 0.92;
  state.gravityX *= 0.82;
  const active = shake > 0.45;

  state.bodies.forEach((body, index) => {
    const massDrag = body.kind === "subject" ? 0.72 : 1;
    if (active) {
      body.vx += (state.gravityX + (Math.random() - 0.5) * shake * 0.24) / body.mass;
      body.vy += ((Math.random() - 0.5) * shake * 0.12) / body.mass;
    }
    body.vy += 0.34;
    body.x += body.vx;
    body.y += body.vy;

    const radius = body.radius;
    if (body.x < radius) {
      body.x = radius;
      body.vx = Math.abs(body.vx) * 0.78;
    }
    if (body.x > width - radius) {
      body.x = width - radius;
      body.vx = -Math.abs(body.vx) * 0.78;
    }
    if (body.y < radius) {
      body.y = radius;
      body.vy = Math.abs(body.vy) * 0.76;
    }
    if (body.y > height - radius) {
      body.y = height - radius;
      if (active && Math.abs(body.vy) > 1.3) {
        body.vy = -Math.abs(body.vy) * 0.68;
      } else {
        body.vy = 0;
      }
      body.vx *= active ? 0.88 : 0.72;
    }
    if (!active) {
      body.vx *= 0.92 * massDrag;
      body.vy *= 0.96;
    }

    if (body.kind !== "subject" && active) {
      const dx = body.x - subject.x;
      const dy = body.y - subject.y;
      const distance = Math.hypot(dx, dy);
      const hitDistance = body.radius * 0.62 + subject.radius * 0.62;
      if (distance < hitDistance) {
        const nx = dx / (distance || 1);
        const ny = dy / (distance || 1);
        const push = (hitDistance - distance) * 0.5;
        body.x += nx * push;
        body.y += ny * push;
        subject.x -= nx * push * 0.28;
        subject.y -= ny * push * 0.28;
        body.vx = nx * (4.4 + shake * 0.24);
        body.vy = ny * (4.4 + shake * 0.24);
        subject.vx -= nx * (1.3 + shake * 0.08);
        subject.vy -= ny * (1.3 + shake * 0.08);
        body.hit = 5;
        subject.hit = 4;
        feedback("hit");
        if (state.selectedCorrect) addProgress(0.15);
      }
    }

    const spin = body.vx * (body.kind === "subject" ? 2.6 : 8) + body.vy * 2 + index * 11;
    body.el.style.transform = `translate(${body.x - body.width / 2}px, ${body.y - body.height / 2}px) rotate(${spin}deg)`;
    body.el.classList.toggle("is-hit", body.hit > 0);
    if (body.hit > 0) body.hit -= 1;
  });
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
    shakeBurst(Math.min(16, power - 10), (acc.x || state.shakeDirection) >= 0 ? 1 : -1);
    addProgress(Math.min(13, (power - 18) * 0.65));
    feedback("shake");
  }
}

async function startMotionDetection() {
  if (state.motionListening) return;
  try {
    if (typeof DeviceMotionEvent === "undefined") {
      shakeMode.textContent = "この端末はゆれセンサーがないので、試験管をタップして進めよう";
      return;
    }
    if (typeof DeviceMotionEvent !== "undefined" && typeof DeviceMotionEvent.requestPermission === "function") {
      const permission = await DeviceMotionEvent.requestPermission();
      if (permission !== "granted") {
        shakeMode.textContent = "ゆれセンサーが使えないので、試験管をタップして進めよう";
        return;
      }
    }
    window.addEventListener("devicemotion", handleMotion);
    state.motionListening = true;
    shakeMode.textContent = "ゆれを自動で見ているよ。試験管タップでも進むよ";
  } catch {
    shakeMode.textContent = "ゆれセンサーが使えないので、試験管をタップして進めよう";
  }
}

function feedback(type) {
  const now = Date.now();
  if (now - state.lastFeedback > 70) {
    buzz(type === "hit" ? 12 : 22);
    state.lastFeedback = now;
  }
  if (now - state.lastSound > 95) {
    playTone(type);
    state.lastSound = now;
  }
}

function buzz(pattern) {
  if ("vibrate" in navigator) navigator.vibrate(pattern);
}

function unlockAudio() {
  const AudioCtx = window.AudioContext || window.webkitAudioContext;
  if (!AudioCtx) return;
  if (!state.audioContext) state.audioContext = new AudioCtx();
  if (state.audioContext.state === "suspended") state.audioContext.resume();
}

function playTone(type) {
  const ctx = state.audioContext;
  if (!ctx) return;
  const now = ctx.currentTime;
  if (type === "shake") {
    [0, 0.045, 0.09].forEach((offset, index) => {
      scheduleTone(ctx, now + offset, 280 + index * 85 + Math.random() * 35, 0.04, "triangle", 0.025);
    });
    return;
  }
  if (type === "hit") {
    scheduleTone(ctx, now, 520 + Math.random() * 180, 0.035, "square", 0.018, 260);
    scheduleTone(ctx, now + 0.018, 980 + Math.random() * 260, 0.045, "sine", 0.02, 620);
    return;
  }
  if (type === "success") {
    [523, 659, 784, 1046].forEach((freq, index) => {
      scheduleTone(ctx, now + index * 0.065, freq, 0.12, "sine", 0.035);
    });
    return;
  }
  if (type === "wrong") {
    scheduleTone(ctx, now, 180, 0.14, "sawtooth", 0.026, 90);
    scheduleTone(ctx, now + 0.08, 110, 0.11, "triangle", 0.018, 70);
    return;
  }
  scheduleTone(ctx, now, 440, 0.05, "sine", 0.03, 660);
}

function scheduleTone(ctx, start, freq, duration, wave, volume, endFreq) {
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.type = wave;
  osc.frequency.setValueAtTime(freq, start);
  if (endFreq) osc.frequency.exponentialRampToValueAtTime(Math.max(1, endFreq), start + duration);
  gain.gain.setValueAtTime(0.0001, start);
  gain.gain.exponentialRampToValueAtTime(volume, start + 0.008);
  gain.gain.exponentialRampToValueAtTime(0.0001, start + duration);
  osc.connect(gain);
  gain.connect(ctx.destination);
  osc.start(start);
  osc.stop(start + duration + 0.03);
}

startButton.addEventListener("click", startGame);
restartButton.addEventListener("click", startGame);
playAgainButton.addEventListener("click", startGame);
modalButton.addEventListener("click", closeModal);
hintToggle.addEventListener("click", () => {
  const expanded = hintToggle.getAttribute("aria-expanded") === "true";
  hintToggle.setAttribute("aria-expanded", String(!expanded));
  stageHint.hidden = expanded;
  hintToggle.textContent = expanded ? "ヒントを見る" : "ヒントをかくす";
});

tubeDropZone.addEventListener("pointermove", (event) => {
  if (!state.selectedCorrect || !event.buttons) return;
  addProgress(0.9);
});

testTube.addEventListener("pointerdown", manualShake);
tubeDropZone.addEventListener("click", (event) => {
  if (!testTube.contains(event.target)) manualShake();
});

setView("start");
