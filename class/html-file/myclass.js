let arrow = document.getElementById('arrow');
let lesson = document.querySelector('.lesson');
let frame = document.querySelector('#iframe');
let firstLesson = document.getElementsByTagName('li');

firstLesson[0].addEventListener("click", () => {
     /* اینجا محل قرار دادن لینک سورس ویدئوهای شماست */
     frame.src = "";
})

arrow.addEventListener('click', () => {
     lesson.classList.toggle('active');
     frame.classList.toggle('active');
     arrow.classList.toggle('active');
})
