// Переключение табов
document.querySelectorAll('.calc-form-tabs').forEach(tabBlock => {
 const tabs = tabBlock.querySelectorAll('.calc-form-tab-button');

 tabs.forEach(tab => {
   tab.addEventListener('click', () => {
     tabs.forEach(t => t.classList.remove('active'));

     const formContainer = tabBlock.closest('.calc-form-wrapper');
     const parent = formContainer.parentElement;

     // Скрываем все формы
     parent.querySelectorAll('.calc-form').forEach(f => {
       f.classList.remove('active');

       // Сбрасываем шаги: показываем 1-й, скрываем 2-й
       f.querySelector('[data-step="1"]').classList.remove('hidden');
       f.querySelector('[data-step="2"]').classList.add('hidden');
     });

     // Активируем таб и нужную форму
     tab.classList.add('active');
     document.getElementById(tab.dataset.form).classList.add('active');

     // Показываем табы, если вдруг были скрыты
     formContainer.querySelector('.calc-form-tabs').style.display = 'flex';
   });
 });
});

// Переходы между шагами
document.querySelectorAll('.calc-form-next').forEach(button => {
 button.addEventListener('click', () => {
   const form = button.closest('.calc-form');
   form.querySelector('[data-step="1"]').classList.add('hidden');
   form.querySelector('[data-step="2"]').classList.remove('hidden');
  form.closest('.calc-form-wrapper').querySelector('.calc-form-tabs').style.display = 'none';
  form.closest('.calc-form-wrapper').querySelector('.calc-form-title').style.display = 'none';
 });
});

document.querySelectorAll('.calc-form-prev').forEach(button => {
 button.addEventListener('click', () => {
   const form = button.closest('.calc-form');
   form.querySelector('[data-step="2"]').classList.add('hidden');
   form.querySelector('[data-step="1"]').classList.remove('hidden');
  form.closest('.calc-form-wrapper').querySelector('.calc-form-tabs').style.display = 'flex';
  form.closest('.calc-form-wrapper').querySelector('.calc-form-title').style.display = 'flex';
 });
});
