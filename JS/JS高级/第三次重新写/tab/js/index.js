if (1) {
    init()
    var addd = document.querySelector('.add')
    var tt = document.querySelector('.tt')
    var cc = document.querySelector('.content')


    addd.addEventListener('click', function() {
        var ls = document.createElement('div')
        var span1 = document.createElement('span')
        span1.innerText = '新标签'
        var span2 = document.createElement('span')
        span2.innerText = 'x'
        ls.className = 'gz'
        ls.append(span1)
        ls.append(span2)
            // ls.innerText = '123'

        tt.append(ls)
        con = '<div class="c">123</div>'
        cc.insertAdjacentHTML('beforeend', con)
        console.log(cc)
        init()

    })

    function init() {
        var tabs = document.querySelectorAll('.tt>div')

        dj(tabs)
        sc(tabs)

    }

    function dj(tabs) {

        for (var i = 0; i < tabs.length; i++) {
            tabs[i].index = i
            tabs[i].onclick = function() {
                for (var i = 0; i < tabs.length; i++) {
                    tabs[i].className = 'gz'

                }
                this.className = 'gz ac'
                console.log(this.index)
                var crs = cc.querySelectorAll('.c')
                for (var i = 0; i < crs.length; i++) {
                    crs[i].className = 'c'

                }
                console.log(tabs.length)
                console.log(crs.length)
                crs[this.index].className = 'c cs'
            }

        }
    }

    function sc(tabs) {
        for (var i = 0; i < tabs.length; i++) {
            tabs[i].querySelector('span:nth-child(2)').addEventListener('click', function() {
                console.log(this.parentNode.remove())
            })
        }
    }
}

if (0) {
    var that

    class Tab {
        constructor(cls) {
            // 获取元素
            that = this

            this.main = document.querySelector(cls)
            this.tabs = this.main.querySelectorAll('.tt .gz')
            this.tabadd = this.main.querySelector('.add')
            this.div = this.main.querySelector('.tt')
            this.init()

        }

        init() {
            this.tabadd.onclick = this.add;
            for (var i = 0; i < this.tabs.length; i++) {
                this.tabs[i].index = i
                this.tabs[i].onclick = function() {
                    for (var i = 0; i < that.tabs.length; i++) {
                        that.tabs[i].className = 'gz'
                    }
                    this.className = 'gz ac'
                }
            }

        }

        add() {
            var div = ' <div class="gz"> <span> 新标签 </span> <span> x </span> </div>'
                // that.main.querySelector('.tt').insertAdjacentHtml('afterend', div)
            console.log(that.main.querySelector('.tt'))
            console.log(that.div)
            that.div.insertAdjacentHTML('beforeend', div)

        }

        toggle() {

        }
        remove() {

        }
        edit() {

        }
    }

    new Tab('.kk')
        // var tab = new Tab('.kk')
        // tab.init()
}