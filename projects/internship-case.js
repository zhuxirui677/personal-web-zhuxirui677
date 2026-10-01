document.querySelectorAll('[data-tabs]').forEach(group=>{
  const triggers=[...group.querySelectorAll('.tab-trigger')];
  const panels=[...group.querySelectorAll('.product-panel')];
  triggers.forEach(trigger=>trigger.setAttribute('aria-selected',String(trigger.classList.contains('active'))));
  triggers.forEach(trigger=>trigger.addEventListener('click',()=>{
    triggers.forEach(item=>{const active=item===trigger;item.classList.toggle('active',active);item.setAttribute('aria-selected',String(active));});
    panels.forEach(panel=>panel.classList.toggle('active',panel.dataset.panel===trigger.dataset.target));
  }));
});

document.querySelectorAll('[data-architecture]').forEach(group=>{
  const title=group.querySelector('[data-detail-title]');
  const body=group.querySelector('[data-detail-body]');
  group.querySelectorAll('.architecture-node').forEach(node=>node.addEventListener('click',()=>{
    group.querySelectorAll('.architecture-node').forEach(item=>{const active=item===node;item.classList.toggle('active',active);item.setAttribute('aria-pressed',String(active));});
    title.textContent=node.dataset.title;
    body.textContent=node.dataset.body;
  }));
});

document.querySelectorAll('[data-attribution]').forEach(group=>{
  const title=group.querySelector('[data-case-title]');
  const status=group.querySelector('[data-case-status]');
  const summary=group.querySelector('[data-case-summary]');
  const path=group.querySelector('[data-case-path]');
  group.querySelectorAll('.detail-trigger').forEach(trigger=>trigger.addEventListener('click',()=>{
    group.querySelectorAll('.detail-trigger').forEach(item=>{const active=item===trigger;item.classList.toggle('active',active);item.setAttribute('aria-pressed',String(active));});
    title.textContent=trigger.dataset.title;
    status.textContent=trigger.dataset.status;
    summary.textContent=trigger.dataset.summary;
    const hit=Number(trigger.dataset.hit);
    [...path.children].forEach((node,index)=>node.classList.toggle('path-hit',index===hit));
  }));
});
