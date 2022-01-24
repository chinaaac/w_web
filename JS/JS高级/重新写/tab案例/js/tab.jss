var that
var num = 1
class Tab {

    constructor(id) {
        //获取元素
        that = this
        this.main = document.getElementById(id)
        this.lis = this.main.querySelectorAll('li')
        this.sections = this.main.querySelectorAll('section')

        this.tabadd = document.getElementsByClassName('tabadd')
            // this.ul = this.main.querySelectorAll('.firstvav ul:first-child')
        this.ul = document.getElementsByTagName('ul')[0]
        this.sec = document.getElementsByClassName('tabscon')[0]
        console.log(this.sec)
        this.init()
    }

    init() {
        //init 让相关的元素绑定事件
        this.tabadd[0].onclick = this.add
        for (var i = 0; i < this.lis.length; i++) {

            this.lis[i].index = i;
            this.lis[i].onclick = this.swtab

        }
    }
    swtab() {

        that.clearclass()
        this.className = 'liactive';
        that.sections[this.index].className = 'conactive'
    }
    clearclass() {
        for (var i = 0; i < this.lis.length; i++) {
            this.lis[i].className = ''
            this.sections[i].className = ''
        }
    }
    add() {
        var li = '<li class="liactive"><span>测试' + num++ + '</span><span class="iconfont icon-guanbi"></span></li>'
        var sec = '<section class="conactive">测试' + num++ + '</section>'
            //添加到li的父元素的最后一个

        that.ul.insertAdjacentHTML('beforeend', li)
        that.sec.insertAdjacentHTML('beforeend', sec)
    }
    retab() {}

    edittab() {}
}

var tab = new Tab('tab');