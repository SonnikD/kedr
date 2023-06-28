//Определены переменные, которые получают ссылки на различные элементы страницы
const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');
const image = document.getElementById('image');
const name = document.getElementById('name');
const text = document.getElementById('text');
const item1 = document.getElementById('item1');
const item2 = document.getElementById('item2');
const item3 = document.getElementById('item3');
const item4 = document.getElementById('item4');
const img1 = document.getElementById('img1');
const img2 = document.getElementById('img2');
const img3 = document.getElementById('img3');
const img4 = document.getElementById('img4');
const wood = document.getElementById('wood');

//Добавлен обработчик событий (по кнопке, происходит соответствующая функция)
button1.addEventListener('click', function() {
  //Добавлен класс к 1 кнопке
  button1.classList.add('active');
  //Удален класс у 2 кнопки (позволяет визуально выделить активную кнопку)
  button2.classList.remove('active');
  // Присвоение атрибутам соответсвующие элементы
  image.src = '/images/кедр.png';
  name.textContent = 'Фурако из сибирского кедра';
  text.textContent = 'Кедровая древесина обладает антибактериальными свойствами, благодаря которым купели Фурако из кедра не только оздоравливают, но и очищают кожу от болезнетворных микроорганизмов.';
  img1.src = '/images/icon1.png';
  img2.src = '/images/icon2.png';
  img3.src = '/images/icon3.png';
  img4.src = '/images/icon4.png';
  item1.textContent = 'Снимает напряжение в мышцах';
  item2.textContent = 'Улучшает кровообращение и обмен веществ';
  item3.textContent = 'Повышает иммунитет';
  item4.textContent = 'Укрепляет нервную систему';
  wood.src = '/images/кедр-д.png';
});
//Выполняет аналогичные действия, но для сосновой купели
button2.addEventListener('click', function() {
  button1.classList.remove('active');
  button2.classList.add('active');
  image.src = '/images/сосна.png';
  name.textContent = 'Фурако из кировской сосны';
  text.textContent = 'Натуральные эфирные масла сосны, выделяемые при нагревании, оказывают лечебный эффект на дыхательную и кровеносную системы организма.';
  img1.src = '/images/s-1.png';
  img2.src = '/images/s-2.png';
  img3.src = '/images/s-3.png';
  img4.src = '/images/s-4.png';
  item1.textContent = 'Улучшает состояние дыхательных путей';
  item2.textContent = 'Снимает воспаление и отеки';
  item3.textContent = 'Расширяет сосуды и улучшает кровообращение';
  item4.textContent = 'Повышает общую устойчивость организма';
  wood.src = '/images/сосна-д.png';
});

//Кнопки реагируют на клики пользователя и динамически обновляют
//содержимое элементов страницы в зависимости от выбранной кнопки