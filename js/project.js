var filter = false
function showFilterHandler() {
    filterSearch = document.getElementById('filter-search')
    !filter ? (filter = true, filterSearch.classList.add('animate-filter')) : (filter = false, filterSearch.classList.remove('animate-filter'))
}