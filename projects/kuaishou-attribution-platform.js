const cases = {
  "CMT-DEMO-240918-A": {
    type: "comment", result: "初筛漏放", resultClass: "", title: "候选池未覆盖隐晦表达",
    summary: "单条内容未呈现显式风险，但聚合上下文已形成一致指向；候选分流只依赖显式词信号，导致后续模型与策略均未被触发。",
    domain: "评论区氛围", layer: "候选分流", confidence: 91, evidenceScore: 86,
    nodes: [
      ["对象召回","pass","对象与上下文已拉取","评论文本、所属视频与 Top15 上下文获取成功。","source: object_snapshot"],
      ["候选分流","fail","上下文信号未召回","分流规则未覆盖依赖聚合语境才能成立的隐晦表达。","source: routing_log"],
      ["初筛判断","skip","未进入初筛","上游未召回，初筛模型没有收到本条对象。","source: screening_event"],
      ["粗筛词库","skip","未执行词库核验","未进入粗筛，因此没有产生词库命中记录。","source: lexicon_trace"],
      ["机审判断","skip","机审未执行","没有生成模型分数、标签或豁免结果。","source: model_event"],
      ["策略匹配","skip","无候选策略","上游信号缺失，未进入策略白盒匹配。","source: policy_trace"],
      ["处置执行","pass","默认放行","没有风险结果，系统按默认路径放行。","source: action_receipt"]
    ],
    evidence: [["事件表","对象被默认放行，未发现初筛调用记录",96],["评论区上下文","Top15 中多条内容形成一致语义指向",88],["候选分流日志","显式词规则均未命中",92],["策略白盒","后续策略具备覆盖能力但未被触发",74]],
    fields: [["问题域","评论区氛围","评论区氛围","match"],["识别对象","单条评论 + Top15","评论区整体","mismatch"],["管控条件","无显式风险词","聚集语境达到阈值","mismatch"],["识别信号","单条文本","文本 + 上下文聚合","mismatch"],["模型 / 策略版本","demo-routing-v2","demo-routing-v2","match"],["风险等级","未生成","中风险","unknown"],["策略结果","未命中","应进入模型精判","mismatch"],["处置动作","默认放行","送机审 / 待复核","mismatch"],["生效范围","演示流量桶","演示流量桶","match"]],
    actions: [["01 / RECALL","补充语境召回","将聚集表达与上下文组合特征加入候选分流，不直接扩大单词黑名单。"],["02 / SAMPLE","建设难例样本","补充“单条安全、聚合有害”正负样本，覆盖相似但正常的讨论。"],["03 / KNOWLEDGE","迭代语境知识","将新出现的隐晦表达及适用语境纳入周级知识更新。"],["04 / VALIDATE","执行圈定验证","先比较召回增益、误伤率与新增机审成本，再决定是否灰度。"]]
  },
  "IMG-DEMO-240918-B": {
    type: "image", result: "机审误伤", resultClass: "", title: "科普图像被错误识别为风险",
    summary: "图像模型捕获到高相似视觉特征，但未结合视频的医学科普语境；豁免样本与主体关系规则不足，最终把正常内容升级为风险。",
    domain: "图文安全", layer: "机审判断", confidence: 88, evidenceScore: 82,
    nodes: [["对象召回","pass","图评对象已拉取","图片、评论文本与所属视频信息完整。","source: object_snapshot"],["候选分流","pass","高危视觉信号召回","相似库与文本信号使对象进入精判池。","source: routing_log"],["初筛判断","pass","进入图文联合精判","粗召结果满足精判门槛。","source: screening_event"],["粗筛词库","pass","文本未单独触发","评论文本本身不足以判定风险。","source: lexicon_trace"],["机审判断","fail","图文主体关系误判","模型忽略科普语境，把被讨论对象误识别为发布者意图。","source: model_event"],["策略匹配","pass","高风险策略被触发","机审高分触发拦截策略，豁免规则未命中。","source: policy_trace"],["处置执行","pass","执行折叠与送审","系统执行了策略配置动作，执行本身无异常。","source: action_receipt"]],
    evidence: [["多模态输入","OCR 与图片可用，视频语境未参与联合判断",89],["机审结果","视觉风险分高，但文本风险分低",93],["人工复核","确认属于医学科普而非风险表达",95],["豁免策略","现有豁免样本未覆盖该主体关系",67]],
    fields: [["问题域","图文安全","图文安全","match"],["识别对象","评论图片","图评 + 所属视频","mismatch"],["管控条件","视觉相似度超阈值","意图与主体同时成立","mismatch"],["识别信号","图片 + OCR","图片 + 文本 + 视频语境","mismatch"],["模型 / 策略版本","demo-mm-v5","demo-mm-v5","match"],["风险等级","高风险","正常科普","mismatch"],["策略结果","命中","应豁免","mismatch"],["处置动作","折叠 + 送审","放行","mismatch"],["生效范围","演示流量桶","演示流量桶","match"]],
    actions: [["01 / SAMPLE","补充豁免样本","增加医学科普、求助与新闻讨论的难负样本。"],["02 / PROMPT","强化主体判断","加入“谁在表达、讨论谁、目的是什么”的三步判定。"],["03 / MODEL","拆分联合目标","将风险类型与主体意图分开评测，避免多目标相互放大。"],["04 / VALIDATE","回放误伤集合","在历史误伤集与新增随机集上同时验证精度和召回。"]]
  },
  "VID-DEMO-240918-C": {
    type: "video", result: "处置不一致", resultClass: "", title: "识别正确，但风险等级与动作断层",
    summary: "模型与策略均正确识别风险，策略白盒中的风险等级为中风险，但下游动作映射读取了旧版本配置，导致实际处置强度偏高。",
    domain: "行为与内容", layer: "策略匹配", confidence: 94, evidenceScore: 93,
    nodes: [["对象召回","pass","视频对象已拉取","视频文本、OCR、ASR 与账户信息可用。","source: object_snapshot"],["候选分流","pass","多信号进入候选池","对象满足候选池规则。","source: routing_log"],["初筛判断","pass","风险概率超过门槛","进入机审与策略匹配。","source: screening_event"],["粗筛词库","pass","组合信号命中","命中的是组合信号而非单词触发。","source: lexicon_trace"],["机审判断","pass","风险类型识别正确","模型标签与人工复核一致。","source: model_event"],["策略匹配","fail","版本映射不一致","白盒为中风险，处置映射仍引用上一版本高风险动作。","source: policy_trace"],["处置执行","pass","按收到的动作执行","执行引擎准确执行了错误的上游动作。","source: action_receipt"]],
    evidence: [["模型结果","风险类型与人工复核一致",97],["策略白盒","当前版本要求中风险处置",96],["动作回执","执行动作来自上一版本映射",94],["版本记录","配置切换时存在短时版本不一致",85]],
    fields: [["问题域","行为与内容","行为与内容","match"],["识别对象","视频","视频","match"],["管控条件","组合信号成立","组合信号成立","match"],["识别信号","文本 + OCR + ASR","文本 + OCR + ASR","match"],["模型 / 策略版本","模型 v3 / 动作 v2","模型 v3 / 动作 v3","mismatch"],["风险等级","中风险","中风险","match"],["策略结果","命中","命中","match"],["处置动作","高强度拦截","折叠 + 送审","mismatch"],["生效范围","演示流量桶","演示流量桶","match"]],
    actions: [["01 / CONFIG","修正版本绑定","让策略版本与动作映射以同一发布单元原子切换。"],["02 / GUARD","增加一致性校验","上线前自动检查风险等级与处置动作是否符合映射表。"],["03 / MONITOR","配置回执监控","监测策略结果与执行回执的异常组合并及时告警。"],["04 / GRAY","分桶灰度验证","用小流量验证动作分布稳定后再扩大范围。"]]
  },
  "USR-DEMO-240918-D": {
    type: "user", result: "链路正确", resultClass: "success", title: "全链路正确完成识别与处置",
    summary: "召回、机审、策略与处置回执一致，证据链完整。该 Case 可作为后续策略回归测试中的正向基准样本。",
    domain: "用户行为", layer: "无异常", confidence: 97, evidenceScore: 96,
    nodes: [["对象召回","pass","用户与关联对象完整","账户、内容与行为信号拉取成功。","source: object_snapshot"],["候选分流","pass","行为组合信号召回","组合行为达到候选分流门槛。","source: routing_log"],["初筛判断","pass","初筛结果有效","初筛模型输出稳定且证据完整。","source: screening_event"],["粗筛词库","pass","辅助信号命中","词库仅作为辅助信号，没有单独决定结果。","source: lexicon_trace"],["机审判断","pass","机审与复核一致","模型标签、置信度与人工复核一致。","source: model_event"],["策略匹配","pass","策略条件全部满足","版本、范围、等级与动作映射一致。","source: policy_trace"],["处置执行","pass","执行回执正常","处置完成且回执状态与预期一致。","source: action_receipt"]],
    evidence: [["行为序列","多个关联行为形成稳定风险模式",98],["模型结果","模型与人工复核标签一致",97],["策略白盒","九字段完整匹配",96],["执行回执","预期动作已正确执行",95]],
    fields: [["问题域","用户行为","用户行为","match"],["识别对象","用户 + 关联内容","用户 + 关联内容","match"],["管控条件","组合行为成立","组合行为成立","match"],["识别信号","行为 + 内容 + 画像","行为 + 内容 + 画像","match"],["模型 / 策略版本","demo-user-v4","demo-user-v4","match"],["风险等级","中风险","中风险","match"],["策略结果","命中","命中","match"],["处置动作","限制 + 送审","限制 + 送审","match"],["生效范围","演示流量桶","演示流量桶","match"]],
    actions: [["01 / BASELINE","固化基准样本","将该 Case 加入固定回归集，防止后续版本性能退化。"],["02 / TRACE","保存完整 Trace","保留输入、版本、输出与动作回执，支持确定性回放。"],["03 / MONITOR","持续观察漂移","跟踪相似场景的置信度和处置分布变化。"],["04 / REVIEW","周期人工抽检","按周期抽样复核，验证模型与策略没有产生新偏差。"]]
  }
};

const typeLabel = { comment: "评论", image: "图评", video: "视频", user: "用户" };
const statusLabel = { match: "一致", mismatch: "不一致", unknown: "待确认" };
let currentId = "CMT-DEMO-240918-A";
let selectedNode = 1;

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

function renderCase(id) {
  const item = cases[id];
  if (!item) return;
  currentId = id;
  selectedNode = Math.max(0, item.nodes.findIndex(node => node[1] === "fail"));
  if (selectedNode < 0) selectedNode = item.nodes.length - 1;
  $("#query-type").value = item.type;
  $("#query-input").value = id;
  $("#result-chip").textContent = item.result;
  $("#result-chip").className = `result-chip ${item.resultClass}`;
  $("#verdict-title").textContent = item.title;
  $("#verdict-summary").textContent = item.summary;
  $("#verdict-domain").textContent = item.domain;
  $("#verdict-layer").textContent = item.layer;
  $("#verdict-layer").className = item.resultClass ? "" : "red";
  $("#verdict-confidence").textContent = `${item.confidence}%`;
  $("#confidence-value").textContent = `${item.confidence}%`;
  $("#evidence-value").textContent = `${item.evidenceScore}%`;
  $("#confidence-ring").style.setProperty("--value", `${item.confidence}%`);
  $("#evidence-ring").style.setProperty("--value", `${item.evidenceScore}%`);
  $$("[data-case]").forEach(button => button.classList.toggle("active", button.dataset.case === id));

  $("#rcp-path").innerHTML = item.nodes.map((node, index) => `<button class="rcp-node ${node[1]} ${index === selectedNode ? "active" : ""}" data-node="${index}"><em>0${index + 1}</em><b>${node[0]}</b><small>${node[2]}</small></button>`).join("");
  $$(".rcp-node").forEach(button => button.addEventListener("click", () => renderNode(Number(button.dataset.node))));
  renderNode(selectedNode);

  $("#evidence-stack").innerHTML = item.evidence.map(([name, detail, score]) => `<div class="evidence-item"><small><span>${name}</span><b>${score}%</b></small><p>${detail}</p><div class="confidence-bar"><i style="width:${score}%"></i></div></div>`).join("");
  $("#whitebox-body").innerHTML = item.fields.map(([field, actual, expected, status]) => `<tr><td>${field}</td><td>${actual}</td><td>${expected}</td><td><span class="field-status ${status}">${statusLabel[status]}</span></td></tr>`).join("");
  const mismatch = item.fields.filter(row => row[3] !== "match").length;
  $("#whitebox-result").textContent = mismatch ? `${mismatch} 项待处理` : "九字段一致";
  $("#whitebox-result").className = `result-chip ${mismatch ? "" : "success"}`;

  const trace = [
    ["解析治理对象", `识别为${typeLabel[item.type]}对象并校验演示 ID`, "DONE"],
    ["拉取事件与证据", `聚合 ${item.evidence.length} 类关键证据`, "DONE"],
    ["回放 RCP 决策树", `逐层检查 ${item.nodes.length} 个节点`, "DONE"],
    ["召回候选策略", `按问题域与对象筛选候选策略`, "DONE"],
    ["执行白盒核验", `发现 ${mismatch} 个不一致或待确认字段`, "DONE"],
    ["生成结论与动作", `输出“${item.result}”及四类闭环建议`, "DONE"]
  ];
  $("#agent-trace").innerHTML = trace.map(([title, detail, state]) => `<div class="trace-step"><div><b>${title}</b><p>${detail}</p></div><code>${state}</code></div>`).join("");
  $("#action-grid").innerHTML = item.actions.map(([tag, title, detail]) => `<article class="action-card"><small>${tag}</small><h3>${title}</h3><p>${detail}</p><button class="action-button">加入演示任务</button></article>`).join("");
  $$(".action-button").forEach(button => button.addEventListener("click", () => {
    button.textContent = "已加入演示任务 ✓";
    button.classList.add("done");
    showToast("已加入演示验证任务 · 不会连接真实业务系统");
  }));
}

function renderNode(index) {
  const node = cases[currentId].nodes[index];
  selectedNode = index;
  $$(".rcp-node").forEach((button, i) => button.classList.toggle("active", i === index));
  const prefix = node[1] === "fail" ? "异常节点" : node[1] === "skip" ? "未执行节点" : "正常节点";
  $("#node-status").textContent = `${prefix} · ${node[0]}`;
  $("#node-detail").textContent = node[3];
  $("#node-source").textContent = node[4];
}

function loadCase(id) {
  $("#query-error").textContent = "";
  $("#loading-mask").classList.add("active");
  $("#analysis-content").classList.add("loading");
  window.setTimeout(() => {
    renderCase(id);
    $("#loading-mask").classList.remove("active");
    $("#analysis-content").classList.remove("loading");
  }, 420);
}

function showToast(message) {
  const toast = $("#toast");
  toast.textContent = message;
  toast.classList.add("show");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => toast.classList.remove("show"), 2200);
}

$("#query-form").addEventListener("submit", event => {
  event.preventDefault();
  const id = $("#query-input").value.trim().toUpperCase();
  const item = cases[id];
  if (!item) {
    $("#query-error").textContent = "未找到该演示 ID。请点击下方四个脱敏案例体验。";
    return;
  }
  if (item.type !== $("#query-type").value) {
    $("#query-error").textContent = `对象类型不一致：该 ID 属于${typeLabel[item.type]}对象。`;
    return;
  }
  loadCase(id);
});

$$("[data-case]").forEach(button => button.addEventListener("click", () => loadCase(button.dataset.case)));
$$("[data-view]").forEach(button => button.addEventListener("click", () => {
  $$("[data-view]").forEach(item => item.classList.toggle("active", item === button));
  $$("[data-section]").forEach(section => section.classList.toggle("active", section.dataset.section === button.dataset.view));
  window.scrollTo({ top: 0, behavior: "smooth" });
}));

renderCase(currentId);
