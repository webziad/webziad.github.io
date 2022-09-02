document.querySelector('#search').addEventListener('input', firstList);
function firstList() {
     const searchInput = document.querySelector('#search');
     const filter = searchInput.value.toLowerCase();

     const listItem = document.querySelectorAll('.item');
     listItem.forEach((item) => {
          let text = item.textContent;
          if (text.toLowerCase().includes(filter.toLowerCase())) {
               item.style.display = "";
          } else {
               item.style.display = "none";
          }
     })
}