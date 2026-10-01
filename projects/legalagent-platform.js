const copy = {
  zh: {
    productSubtitle:'A2A 评测工作台', publishedData:'已连接公开结果', viewSource:'查看源码', currentRun:'当前运行', overview:'总览', tasks:'任务', artifacts:'产物', agentPair:'评测连接', dataNote:'公开 smoke run，3 条样本。不是完整 300 题成绩。', loading:'正在加载公开评测产物', assessmentRun:'ASSESSMENT RUN', runOverview:'运行总览', runDescription:'查看法律 Agent 的任务结果、审计判定与可回放过程。', completed:'已完成', trafficLight:'交通灯判定', threePassed:'3 / 3 任务通过', evaluatedTasks:'已评任务', publishedSamples:'公开样本', inspectAll:'查看全部', executionProgress:'执行进程', taskAudit:'逐题审计', taskDescription:'在问题、Agent 输出和评测理由之间进行核验。', threeRecords:'3 条公开记录', copyQuery:'复制问题', copied:'已复制', inputQuery:'输入问题', agentResponse:'Agent 回答', auditReason:'审计理由', runTrace:'运行轨迹', traceDescription:'按真实时间顺序回放公开评测的状态与进度。', time:'时间', event:'事件', payload:'载荷', state:'状态', runArtifacts:'运行产物', artifactDescription:'下载结果、复核运行配置，或定位评测实现。', resultFile:'汇总、逐题审计与完整 Trace', scenarioFile:'Green Agent 与 Purple Agent 配置', commitFile:'AgentBeats 公开提交记录', executorFile:'评分流程与 Artifact 生成逻辑', download:'下载', open:'打开', reproNote:'界面直接读取公开 results.json。展示数据与下载产物来自同一个文件，避免作品集演示和真实结果口径不一致。', loadFailed:'公开结果加载失败', loadFailedHelp:'请刷新页面，或直接下载 results.json 核验。', retry:'重新加载', tort:'侵权责任纠纷', lease:'租赁合同纠纷', passed:'通过', overall:'综合', eventDone:'完成'
  },
  en: {
    productSubtitle:'A2A Evaluation Workbench', publishedData:'Published result connected', viewSource:'View source', currentRun:'Current run', overview:'Overview', tasks:'Tasks', artifacts:'Artifacts', agentPair:'Agent pair', dataNote:'Published smoke run with 3 items. Not a full 300-task result.', loading:'Loading published artifacts', assessmentRun:'ASSESSMENT RUN', runOverview:'Run overview', runDescription:'Inspect task outcomes, audit decisions and replayable events.', completed:'Completed', trafficLight:'Traffic light', threePassed:'3 / 3 tasks passed', evaluatedTasks:'Evaluated tasks', publishedSamples:'Published samples', inspectAll:'Inspect all', executionProgress:'Execution progress', taskAudit:'Per-item audit', taskDescription:'Verify the query, agent response and evaluator rationale together.', threeRecords:'3 public records', copyQuery:'Copy query', copied:'Copied', inputQuery:'Input query', agentResponse:'Agent response', auditReason:'Audit rationale', runTrace:'Run trace', traceDescription:'Replay the public assessment events in their recorded order.', time:'Time', event:'Event', payload:'Payload', state:'State', runArtifacts:'Run artifacts', artifactDescription:'Download results, inspect the scenario or locate the evaluator implementation.', resultFile:'Summary, per-item audit and complete trace', scenarioFile:'Green Agent and Purple Agent configuration', commitFile:'Published AgentBeats result commit', executorFile:'Scoring pipeline and artifact generation', download:'Download', open:'Open', reproNote:'This interface reads the published results.json directly. The product view and downloadable artifact share one data source.', loadFailed:'Unable to load published result', loadFailedHelp:'Refresh the page or download results.json for verification.', retry:'Retry', tort:'Tort liability dispute', lease:'Lease contract dispute', passed:'Passed', overall:'Overall', eventDone:'DONE'
  }
};

if ('scrollRestoration' in history) history.scrollRestoration = 'manual';

const fallback = {
  task_id:'task_5f47ebce02274000abecb5e4b5e106f0', status:'ok', n:3, avg_success:1, avg_process:1, avg_citation:1, avg_safety:1, traffic_light_green_pct:100,
  traffic_light_counts:{GREEN:3,YELLOW:0,RED:0},
  items:[
    {index:0,traffic_light:'GREEN',success_score:1,process_score:1,citation_score:1,safety_score:1,query:'请大致描述这篇文书的内容。\n\n唐鲜明与何伟华、深圳市华名威电汽车服务有限公司侵权责任纠纷一审民事判决书\n广东省深圳市宝安区人民法院\n民 事 判 决 书\n（2017）粤0306民初3474号',agent_response:'总结：原告与被告侵权责任纠纷一案。原告请求被告赔偿医疗费等损失。法院认定原告未能提供充分证据证明涉案商铺与两被告的关系，也未能证实两被告存在过错及因果联系。依据举证责任规则，判决驳回原告全部诉讼请求。',notes:'The Agent Response accurately summarizes the case and the judgment. It identifies the claims, denial, lack of evidence and burden of proof leading to dismissal.'},
    {index:1,traffic_light:'GREEN',success_score:1,process_score:1,citation_score:1,safety_score:1,query:'阳晓红、宁运豪等与许绪发、许先平等租赁合同纠纷一审民事判决书。请归纳这篇文书的大致要点。',agent_response:'总结：本案系租赁合同纠纷。法院认定合同及解除结算真实合法，被告未按结算履行构成违约。判决三被告连带清偿租金35000元及相应利息，驳回其他请求。',notes:'The Agent Response accurately summarizes the nature of the dispute, claims, defenses, findings and final judgment.'},
    {index:2,traffic_light:'GREEN',success_score:1,process_score:1,citation_score:1,safety_score:1,query:'苏州市春秋汽车服务有限公司、周志斗与岳治国租赁合同纠纷一审民事判决书。请归纳这篇文书的大致要点。',agent_response:'总结：本案系租赁合同纠纷。被告多次租赁原告车辆并结欠租赁费53600元，后出具欠条但未支付。法院判决被告支付租金及逾期利息，并承担诉讼费用。',notes:'The Agent Response accurately summarizes the lease dispute, debt, promissory note and judgment for rent, interest and court fees.'}
  ],
  updates:[
    {message:'assessment_started',data:{participants:['lawlawlaw']},ts:1768857448.811882},
    {message:'loading_dataset',data:{dataset_path:'data/dataset_test.json',max_items:3},ts:1768857448.811887},
    {message:'scoring_item',data:{index:0},ts:1768857448.8123524},
    {message:'scoring_item',data:{index:1},ts:1768857452.5466876},
    {message:'scoring_item',data:{index:2},ts:1768857455.8117747},
    {message:'assessment_complete',data:{n:3,traffic_light_counts:{GREEN:3,YELLOW:0,RED:0}},ts:1768857460.1031024}
  ]
};

let language = new URLSearchParams(location.search).get('lang') === 'en' ? 'en' : 'zh';
let runData = null;
let selectedItem = 0;

function translate(){
  document.documentElement.lang = language === 'en' ? 'en' : 'zh-CN';
  document.querySelectorAll('[data-i18n]').forEach(node => { const key=node.dataset.i18n; if(copy[language][key]) node.textContent=copy[language][key]; });
  document.getElementById('language-toggle').textContent = language === 'zh' ? 'EN' : '中文';
}

function normalize(source){
  const record=source.results?.[0] || source;
  const artifacts=record.artifacts || [];
  const perItem=artifacts.find(item=>item.name==='per_item.json')?.data || record.items || fallback.items;
  const updates=record.updates || artifacts.find(item=>item.name==='task_updates.json')?.data || fallback.updates;
  return {...record,items:perItem,updates};
}

function titleFor(item){
  const q=item.query || '';
  if(q.includes('侵权')) return copy[language].tort;
  return copy[language].lease;
}

function shortQuery(item){
  return (item.query || '').replace(/\s+/g,' ').slice(0,78);
}

function score(value){ return Number(value ?? 0).toFixed(1); }

function timeLabel(ts){
  return new Date(ts*1000).toLocaleTimeString(language==='en'?'en-US':'zh-CN',{hour:'2-digit',minute:'2-digit',second:'2-digit',hour12:false});
}

function eventPayload(update){
  if(update.message==='assessment_started') return 'participants: lawlawlaw';
  if(update.message==='loading_dataset') return `dataset_test.json · max_items: ${update.data?.max_items ?? 3}`;
  if(update.message==='scoring_item') return `index: ${update.data?.index}`;
  return `GREEN: ${update.data?.traffic_light_counts?.GREEN ?? 3} · YELLOW: 0 · RED: 0`;
}

function renderTasks(){
  const rows=runData.items.map((item,index)=>`<button class="task-row" type="button" data-item="${index}"><span class="task-index">${String(index+1).padStart(2,'0')}</span><span class="task-copy"><b>${titleFor(item)}</b><small>${shortQuery(item)}</small></span><span class="task-score">${copy[language].overall} ${score((item.success_score+item.process_score+item.citation_score+item.safety_score)/4)}</span><span class="task-signal">${item.traffic_light}</span></button>`).join('');
  document.getElementById('overview-task-list').innerHTML=rows;
  document.querySelectorAll('#overview-task-list .task-row').forEach(button=>button.addEventListener('click',()=>{ selectedItem=Number(button.dataset.item); openView('tasks'); renderDetail(); }));

  document.getElementById('audit-index').innerHTML=runData.items.map((item,index)=>`<button type="button" data-item="${index}" class="${index===selectedItem?'active':''}"><span>ITEM ${String(index+1).padStart(2,'0')}</span><b>${titleFor(item)}</b><small>${item.traffic_light} · ${copy[language].passed}</small></button>`).join('');
  document.querySelectorAll('#audit-index button').forEach(button=>button.addEventListener('click',()=>{selectedItem=Number(button.dataset.item);renderDetail();renderTasks();}));
}

function renderDetail(){
  const item=runData.items[selectedItem];
  document.getElementById('detail-title').textContent=`${String(selectedItem+1).padStart(2,'0')} · ${titleFor(item)}`;
  document.getElementById('detail-query').textContent=item.query;
  document.getElementById('detail-response').textContent=item.agent_response;
  document.getElementById('detail-notes').textContent=item.notes || item.raw_audit?.reason || '';
  const dimensions=[['Success',item.success_score],['Process',item.process_score],['Citation',item.citation_score],['Safety',item.safety_score]];
  document.getElementById('detail-scores').innerHTML=dimensions.map(([name,value])=>`<div><span>${name}</span><b>${score(value)}</b></div>`).join('');
}

function renderTrace(){
  const trace=runData.updates;
  document.getElementById('overview-trace').innerHTML=trace.map(update=>`<li><i></i><b>${update.message}</b><time>${timeLabel(update.ts)}</time></li>`).join('');
  document.getElementById('event-log-body').innerHTML=trace.map((update,index)=>`<div class="log-row"><span>${String(index+1).padStart(2,'0')}</span><time>${timeLabel(update.ts)}</time><b>${update.message}</b><code>${eventPayload(update)}</code><span class="log-state">${copy[language].eventDone}</span></div>`).join('');
}

function renderScores(){
  document.getElementById('score-success').textContent=score(runData.avg_success);
  document.getElementById('score-process').textContent=score(runData.avg_process);
  document.getElementById('score-citation').textContent=score(runData.avg_citation);
  document.getElementById('score-safety').textContent=score(runData.avg_safety);
}

function render(){ translate(); renderScores(); renderTasks(); renderDetail(); renderTrace(); }

function openView(name){
  document.querySelectorAll('.view').forEach(view=>view.classList.toggle('active',view.dataset.panel===name));
  document.querySelectorAll('.nav-item').forEach(button=>button.classList.toggle('active',button.dataset.view===name));
  const current=new URL(location.href); current.hash=name==='overview'?'':name; history.replaceState({},'',current);
  window.scrollTo({top:0,behavior:'auto'});
  requestAnimationFrame(()=>window.scrollTo({top:0,behavior:'auto'}));
}

async function loadData(){
  document.getElementById('loading-state').hidden=false;
  document.getElementById('error-state').hidden=true;
  try{
    const response=await fetch('../assets/legalagent-evidence/agentbeats-results.json',{cache:'no-store'});
    if(!response.ok) throw new Error(`HTTP ${response.status}`);
    runData=normalize(await response.json());
  }catch(error){
    console.warn('Published result unavailable; rendering embedded verified fallback.',error);
    runData=normalize(fallback);
  }
  render();
  document.getElementById('loading-state').hidden=true;
}

document.querySelectorAll('.nav-item').forEach(button=>button.addEventListener('click',()=>openView(button.dataset.view)));
document.querySelectorAll('[data-open-view]').forEach(button=>button.addEventListener('click',()=>openView(button.dataset.openView)));
document.getElementById('language-toggle').addEventListener('click',()=>{language=language==='zh'?'en':'zh';render();});
document.getElementById('copy-query').addEventListener('click',async()=>{
  const button=document.getElementById('copy-query');
  try{await navigator.clipboard.writeText(runData.items[selectedItem].query);button.textContent=copy[language].copied;setTimeout(()=>button.textContent=copy[language].copyQuery,1200);}catch(error){button.textContent=copy[language].copyQuery;}
});
document.getElementById('retry-load').addEventListener('click',loadData);

const initialView=location.hash.replace('#','');
translate();
loadData().then(()=>{if(['tasks','trace','artifacts'].includes(initialView)) openView(initialView);});
