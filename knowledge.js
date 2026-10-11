const copyButtons = document.querySelectorAll('[data-copy-target]');
const toast = document.querySelector('.copy-toast');
let toastTimer;

copyButtons.forEach(button => {
  button.addEventListener('click', async () => {
    const target = document.getElementById(button.dataset.copyTarget);
    if (!target) return;
    try {
      await navigator.clipboard.writeText(target.textContent.trim());
      button.textContent = '已复制';
      toast?.classList.add('visible');
      clearTimeout(toastTimer);
      toastTimer = setTimeout(() => {
        toast?.classList.remove('visible');
        button.textContent = '复制';
      }, 1800);
    } catch {
      button.textContent = '请手动复制';
    }
  });
});
