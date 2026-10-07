const filter = document.querySelector('#project-filter');
filter?.addEventListener('change', () => {
  document.querySelectorAll('.project').forEach(project => {
    project.hidden = filter.value !== 'all' && project.dataset.category !== filter.value;
  });
});
