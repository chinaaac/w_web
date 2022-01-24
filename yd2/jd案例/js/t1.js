window.addEventListener('load', function() {
    var suo = document.querySelector('.search-wrap')
    var sw = suo.offsetTop
    document.addEventListener('scroll',
        function() {
            var j = document.documentElement.scrollTop
            if (j > sw) {
                suo.style.position = 'fixed'
                suo.style.top = 0


            } else {
                suo.style.position = 'absolute'
                suo.style.top = 50 + 'px'
            }
        })
})