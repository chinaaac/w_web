var that
class Tab {
    constructor(id) {
        that = this
        this.main = document.getElementById(id)


        this.add = document.getElementsByTagName('span')[6]

        this.ul = document.getElementsByTagName('ul')[0]
        this.rems = this.main.querySelectorAll('.icon-guanbi')
            // this.spans = this.main.querySelector('li span:first-child')
            // console.log(this.spans)
        this.tabscon = document.getElementsByClassName('tabscon')[0]
        this.sx = document.getElementById('sx')
        this.init()
    }
    init() {
        this.updateNode()
        this.add.onclick = this.addt
        for (var i = 0; i < this.lis.length; i++) {
            this.lis[i].index = i
            this.lis[i].onclick = this.sw
            this.rems[i].onclick = this.re;
            this.spans[i].ondblclick = this.mod;

            this.sec[i].ondblclick = this.mod;
        }
    }

    //获取所有的li和section元素
    updateNode() {
        this.lis = this.main.getElementsByTagName('li')

        this.sec = this.main.getElementsByTagName('section')

        this.rems = this.main.querySelectorAll('.icon-guanbi')
        this.spans = this.main.querySelectorAll('.fisrstnav li span:first-child')
            // console.log(this.spans)
    }
    clearclass() {
        for (var i = 0; i < that.lis.length; i++) {
            that.lis[i].className = ''
            that.sec[i].className = ''
            that.lis[i].style.color = ''

        }
    }
    addt() {
        var random = Math.random()
        that.clearclass()
        var li = '<li class="liactive" style="color:red"><span>测试</span><span class="iconfont icon-guanbi"></span></li>'
        var sec = '<section class="conactive">测试' + random + '</section>'
        that.ul.insertAdjacentHTML('beforeend', li);
        that.tabscon.insertAdjacentHTML('beforeend', sec);
        that.init()

    }
    sw() {
        that.clearclass()
        this.className = 'liactive'
        that.sec[this.index].className = 'conactive'
        this.style.color = 'red'



    }

    //添加事件对象e
    re(e) {
        //停止双重出发li和guanbi的onclick
        e.stopPropagation()
        var index = this.parentNode.index

        console.log(that.lis[index])

        //删除指定元素
        that.lis[index].remove()
        that.sec[index].remove()
        that.init()
            //删除选定状态li让前一个li选定
            //如果选定的是第一个则点击前移一个

        // if (index==0) index
        // else index--
        index == 0 ? index : index--

            // console.log(that.lis[index])

            //判断选定状态
            // if (document.querySelector('.liactive')){

            // }
            // else
            // that.lis[index]&& that.lis[index].click()

            document.querySelector('.liactive') ? 0 : that.lis[index] && that.lis[index].click()
    }

    mod() {

        var str = this.innerHTML;
        //禁止双击选中文字
        window.getSelection ? window.getSelection().removeAllRanges() : document.getSelection.empty();
        // console.log(window.getSelection)
        // console.log('wo 双击了'+this.index)
        // console.log(this.querySelector('span'))

        this.innerHTML = "<input type='texe' />";

        var input = this.children[0];
        // console.log(this)
        // console.log(input)
        input.value = str;
        // console.log(this)

        //文字处于选定状态
        input.select();

        input.onblur = function() {
            this.parentNode.innerHTML = this.value
        }

        //按下回车也能完成输入结束
        input.onkeyup = function(e) {
            e.keyCode === 13 ? this.blur() : 0;
            // if (e.keycode === 13) this.onblur
            // else
        }
    }

}

var tab = new Tab('tab')

// that.sx.onclick=that('tab')