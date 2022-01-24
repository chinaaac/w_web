var that;
class Tab {
    // windows.getSelection ? window.getSelection().removeAllRanges();
    // document.selection.empty();
    constructor(id) {
        //获取元素
        that = this;
        this.main = document.querySelector(id);

        this.add = this.main.querySelector('.tabadd')
        this.ul = this.main.querySelector('.fisrstnav ul:first-child')
        this.fsection = this.main.querySelector('.tabscon')


        this.init();
        this.updateNode();
    }
    init() {
        this.updateNode();
        this.add.onclick = this.addtab;
        for (var i = 0; i < this.lis.length; i++) {
            this.lis[i].index = i;
            this.lis[i].onclick = this.toggletab;
            // console.log(this.remove)
            this.remove[i].onclick = this.removetab;
            this.spns[i].ondblclick = this.edittab;
        }
    }

    //获取所有的li和section
    updateNode() {
        this.lis = this.main.querySelectorAll('li');
        this.sections = this.main.querySelectorAll('section');
        this.remove = this.main.querySelectorAll('.icon-guanbi');
        this.spns = this.main.querySelectorAll('.fisrstnav li span:nth-child(1)')
    }
    toggletab() {
        // console.log(this.index);
        that.clearClass();
        this.className = 'liactive'
        that.sections[this.index].className = 'conactive'
    }

    clearClass() {
        for (var i = 0; i < this.lis.length; i++) {
            this.lis[i].className = ''
            this.sections[i].className = ''
                // console.log(this.sections.length)
        }
        // for (var i = 0; i < this.lis.length; i++) {
        //     this.lis[i].className = ''
        //     this.sections[i].className = ''
        // }
    }

    addtab() {
        that.updateNode();
        that.clearClass();
        //创建li元素section
        //追加到父元素里

        var random = Math.random();
        var li = '<li class="liactive"><span>新选项卡</span><span class="iconfont icon-guanbi">x</span></li>'
        var section = '<section class="conactive">' + random + '</section>'
        that.ul.insertAdjacentHTML('beforeend', li)
        that.fsection.insertAdjacentHTML('beforeend', section)
        that.init();
    }

    removetab(e) {
        //防止触发冒泡点击到标签

        e.stopPropagation();
        var index = this.parentNode.index;
        console.log(index)
        that.lis[index].remove(); //删除指定元素
        that.sections[index].remove();
        that.init();
        //当删掉第n个元素偶n-1个处于选择状态
        if (document.querySelector('.liactive')) return;

        //当不是删除选的的li时，不关闭原来的选定

        that.lis[--index] && that.lis[index].click();
        // this.lis[index--].onclick = this.toggletab();

    }

    edittab() {
        window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();
        this.innerHTML = '<input type="text" />'
            // alert(1)
    }
}

var tab = new Tab('#tab');
// tab.init()