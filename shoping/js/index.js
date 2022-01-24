window.addEventListener('load', function() {
    var zuo = document.querySelector('.zuo')
    var you = document.querySelector('.you')

    var tp = document.querySelector('.foucs')
    var zdw = tp.querySelector('ul li')

    tp.addEventListener('mouseleave', function() {
        zuo.style.display = 'none'
        you.style.display = 'none'

    })
    tp.addEventListener('mouseenter', function() {
        zuo.style.display = 'block'
        you.style.display = 'block'
    })

    var ul = tp.querySelector('ul')
    var ol = tp.querySelector('ol')

    function dd() {
        ulen = ul.children.length
        console.log(ulen)
        for (var i = 0; i < ulen; i++) {
            li = document.createElement('li')
                //获得索引号给点击圆圈用
            li.index = i

            ol.appendChild(li)

            li.addEventListener('click', bs)


        }
        ol.children[0].className = 'red'
    }

    function bs() {

        for (var i = 0; i < ulen; i++) {
            ol.children[i].className = ''
        }
        this.className = 'red'
        n = yq = this.index
        if (1) {
            animate(ul, -this.index * tp.offsetWidth)
        }

    }
    var n = 0
    dd();
    //控制圆圈
    var yq = 0
        //克隆第一张图片放到ul最后
    var first = ul.children[0].cloneNode(1)

    ul.appendChild(first)
        //节流阀
    var fl = 1
    zuo.addEventListener('click', function() {
        // console.log(ulen)
        if (fl) {

            //关闭节流阀,动画结束才能继续执行播放下一张图
            fl = 0
            if (n == 0) {
                n = ulen
                ul.style.left = -n * tp.offsetWidth + 'px'


            }
            animate(ul, - --n * tp.offsetWidth, function() { fl = 1 })
            yq--
            //清除其他圆圈
            for (var i = 0; i < ulen; i++) {
                ol.children[i].className = ''
            }
            // console.log(yq)
            if (yq < 0) yq = ulen - 1
            console.log(yq)
            ol.children[yq].className = 'red'
            console.log(yq)
        }
    })


    you.addEventListener('click', function() {
        // console.log(ulen)
        if (fl) {
            fl = 0
            if (n == ulen) {
                ul.style.left = 0
                n = 0

            }
            animate(ul, - ++n * tp.offsetWidth, function() {
                fl = 1
                    //打开节流阀
            })
            yq++
            //清除其他圆圈
            for (var i = 0; i < ulen; i++) {
                ol.children[i].className = ''
            }
            if (yq == ulen) yq = 0
            ol.children[yq].className = 'red'
            console.log(yq)
        }
    })

    // var lb = setInterval(() => {
    //     you.click();
    // }, 3000);
    // tp.addEventListener('mouseenter', function() {
    //     clearInterval(lb);
    //     lb = null
    // })
    // tp.addEventListener('mouseleave', function() {
    //     lb = setInterval(() => {
    //         you.click();
    //     }, 2000);
    // })
})