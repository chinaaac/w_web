window.addEventListener('load', function() {
    var mask = document.querySelector('.mask')
    var cpt = this.document.querySelector('.cpt')
    var big = this.document.querySelector('.big')

    cpt.addEventListener('mouseover', function() {
        mask.style.display = 'block'
        big.style.display = 'block'
    })
    cpt.addEventListener('mouseout', function() {
        mask.style.display = 'none'
        big.style.display = 'none'
    })
    cpt.addEventListener('mousemove', function(e) {
        var x = e.pageX - this.offsetLeft
        var y = e.pageY - this.offsetTop
        console.log(x + "," + y)
            // mask.style.top = y - mask.offsetHeight / 2 + 'px'
            // mask.style.left = x - mask.offsetWidth / 2 + 'px'
        var mx = x - mask.offsetWidth / 2
        var my = y - mask.offsetHeight / 2
        if (mx <= 0) mx = 0
        else if (mx >= cpt.offsetWidth - mask.offsetWidth) {
            mx = 100
        }
        if (my <= 0) my = 0
        else if (my >= cpt.offsetHeight - mask.offsetHeight) {
            my = cpt.offsetHeight - mask.offsetHeight
        }

        // if ()
        mask.style.top = my + 'px'
        mask.style.left = mx + 'px'

        var maskMax = cpt.offsetWidth - mask.offsetWidth
        var bigimg = document.querySelector('.bigimg')
        var bigmax = bigimg.offsetWidth - big.offsetWidth

        var bigx = mx - bigmax / maskMax;
        var bigy = my - bigmax / maskMax;
        bigimg.style.left = -bigx + 'px'
        bigimg.style.left = -bigy + 'px'

    })
})