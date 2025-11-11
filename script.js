
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.toggle-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('project-controls');
      const details = document.getElementById(id);
      if (!details) return;

      details.classList.toggle('is-hidden');
      const isOpen = !details.classList.contains('is-hidden');
      btn.setAttribute('project-expanded', String(isOpen));
      btn.textContent = isOpen ? 'Hide Details' : 'Show Details';
    });
  });
});