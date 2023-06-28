//Определены переменные, которые получают ссылки на различные элементы страницы
const slider = document.getElementsByClassName('c-slider')[0];
const timeline = new TimelineLite();
const info = document.getElementsByClassName('c-drag')[0];

let canMove = false;
let touchDown = 0;
let prevX = 0;
let slides = document.getElementsByClassName('c-slide');
const slideWidth = slides[0].offsetWidth + 20;
let currentIndex = 0;

//Функция добавляет обработчики событий для мыши и сенсорного ввода на слайдер
const init = () => {
  slider.addEventListener('mousedown', handleMouse);
  slider.addEventListener('mouseup', handleMouse);
  slider.addEventListener('mousemove', handleMove);

  slider.addEventListener('touchstart', handleTouch);
  slider.addEventListener('touchmove', handleTouchMove);
};

//Функция проверяет, была ли нажата или отпущена кнопка мыши
const handleMouse = e => {
  if (e.type === 'mouseup') {
    canMove = false;
  } else {
    canMove = true;
  }
};
//Функция сравнивает текущую позицию мыши с предыдущей позицией и определяет,
// в каком направлении происходит движение, в зависимости от этого движения вызываются функции
const handleMove = e => {
  if (e.pageX < prevX && canMove) {
    handleSwipeLeft();
    canMove = false;
  } else if (e.pageX > prevX && canMove) {
    handleSwipeRight();
    canMove = false;
  }

  prevX = e.pageX;
};
//Обработчики событий для сенсорного ввода!
//Функция сохраняет начальную позицию касания на экране
const handleTouch = e => {
  touchDown = e.touches[0].clientX;
};

//Функция обрабатывает движение пальца по экрану
//Она сравнивает начальную позицию касания с текущей позицией и вызывает соответствующую функцию 
const handleTouchMove = e => {
  if (!touchDown) {
    return;
  }

  const touchUp = e.touches[0].clientX;
  const touchDiff = touchDown - touchUp;

  if (touchDiff > 0) {
    handleSwipeLeft();
  } else {
    handleSwipeRight();
  }

  touchDown = null;
};

//Две функции в зависимости от текущего индекса слайда изменяют позицию слайдера с помощью анимации, используя библиотеку TweenMax
const handleSwipeLeft = () => {
  if (currentIndex === slides.length - 2) {
    // Достигнут конец слайдера, возвращаемся к предыдущим слайдам
    currentIndex--;
    timeline.to(slider, 0.5, {
      x: `-${currentIndex * slideWidth}px`,
      ease: Power4.easeOut
    });
  } else if (currentIndex < slides.length - 1) {
    // Прокручиваем слайдер влево
    currentIndex++;
    timeline.to(slider, 0.5, {
      x: `-${currentIndex * slideWidth}px`,
      //Эффект смягчения, плавного перехода
      ease: Power4.easeOut
    });
  }
};


const handleSwipeRight = () => {
  if (currentIndex === 0) {
    // Достигнуто начало слайдера, возвращаемся к следующим слайдам
    currentIndex++;
    timeline.to(slider, 0.5, {
      x: `-${currentIndex * slideWidth}px`,
      ease: Power4.easeOut
    });
  } else if (currentIndex > 0) {
    // Прокручиваем слайдер вправо
    currentIndex--;
    timeline.to(slider, 0.5, {
      x: `-${currentIndex * slideWidth}px`,
      ease: Power4.easeOut
    });
  }
};
//Функция вызывается для инициализации слайдера, добавляя обработчики событий для мыши и сенсорного ввода
init();

// Добавляем обработчики событий для сенсорных устройств
slider.addEventListener('touchstart', handleTouch);
slider.addEventListener('touchmove', handleTouchMove);
