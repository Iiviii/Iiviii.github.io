AOS.init({
    offset: 200,
    duration: 900
});
var search = document.getElementById('search')
search.addEventListener('click', () =>{
    var searchArea = document.getElementById('search-area')
    searchArea.classList.toggle('show');
})