const experimentConfigs={
  text:{title:"文本基线",subtitle:"最低成本对照组",chip:"BASELINE",recall:"基础",cost:"低",complexity:"低",insight:"文本与标题能够覆盖显式表达，但对画面文字、截图内容和依赖视频语境的隐晦表达召回不足。它适合作为成本基线，不足以独立承担评论区氛围识别。"},
  ocr:{title:"OCR 方案",subtitle:"当前首期落地配置",chip:"SELECTED",recall:"最优",cost:"中",complexity:"低",insight:"OCR 对视频画面中的标题、截图文字和隐晦指代提供关键补充，在召回增益与调用成本之间最平衡，因此进入首期方案。"},
  asr:{title:"OCR + ASR",subtitle:"语音上下文增强方案",chip:"POSITIVE",recall:"明显增益",cost:"中高",complexity:"中",insight:"ASR 能补充口播语境，对需要理解视频立场的 Case 有明显收益。首期暂不全量接入，后续在高价值候选池中验证增量收益。"},
  frame:{title:"视频抽帧",subtitle:"跨模态探索方案",chip:"EXPLORING",recall:"有增益",cost:"高",complexity:"高",insight:"视频抽帧对文图关联和视觉隐喻有增益，但增加推理成本、时延和工程复杂度。当前作为重点难例的增强能力，而非全量默认输入。"}
};
const query=(selector,root=document)=>root.querySelector(selector);
const queryAll=(selector,root=document)=>[...root.querySelectorAll(selector)];
queryAll("[data-view]").forEach(button=>button.addEventListener("click",()=>{
  queryAll("[data-view]").forEach(item=>item.classList.toggle("active",item===button));
  queryAll("[data-section]").forEach(section=>section.classList.toggle("active",section.dataset.section===button.dataset.view));
  window.scrollTo({top:0,behavior:"smooth"});
}));
queryAll("[data-config]").forEach(button=>button.addEventListener("click",()=>{
  const config=experimentConfigs[button.dataset.config];
  queryAll("[data-config]").forEach(item=>item.classList.toggle("active",item===button));
  query("#config-title").textContent=config.title;
  query("#config-subtitle").textContent=config.subtitle;
  query("#config-chip").textContent=config.chip;
  query("#config-chip").className=`result-chip ${button.dataset.config==="ocr"?"success":""}`;
  query("#config-recall").textContent=config.recall;
  query("#config-cost").textContent=config.cost;
  query("#config-complexity").textContent=config.complexity;
  query("#config-insight").textContent=config.insight;
}));
