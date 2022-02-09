var that
class Tab {

    constructor(id) {
        this.i = 3
        that = this
        this.main = document.querySelector(id)

        this.add = this.main.querySelector('.tabadd')
        this.init()

    }
    init() {
        this.updateNode()
        this.add.onclick = this.addTab

        for (var i = 0; i < this.lis.length; i++) {
            this.lis[i].index = i
            this.lis[i].onclick = this.toggleTab
            this.remove[i].onclick = this.removeTab
            this.spans[i].ondblclick = this.editTab
            this.sections[i].ondblclick = this.editTab
        }
    }

    // 添加元素后需要调用
    updateNode() {
        this.lis = this.main.querySelectorAll('li')
        this.sections = this.main.querySelectorAll('section')
        this.remove = this.main.querySelectorAll('.icon-guanbi')
        this.spans = this.main.querySelectorAll('.fisrstnav li span:first-child')

    }
    toggleTab() {
        that.clearClass()
        this.className = 'liactive'
        that.sections[this.index].className = 'conactive'

    }
    clearClass() {
        for (var i = 0; i < this.lis.length; i++) {
            this.lis[i].className = ''
            this.sections[i].className = ''
        }
    }

    addTab() {
        that.updateNode()
        that.clearClass()
            // 创建 li和section
        var li = `<li class="liactive"><span>测试${++that.i}</span><span class="iconfont icon-guanbi"></span></li>`
        document.querySelector('.fisrstnav ul').insertAdjacentHTML('beforeend', li)

        var nr = `<section class="conactive"">测试${that.i}</section>`
        document.querySelector('.tabscon').insertAdjacentHTML('beforeend', nr)
        that.init()


    }



    removeTab(e) {
        // 防止冒泡
        e.stopPropagation()
        var index = this.parentNode.index
        console.log(index)
        that.lis[index].remove()
        that.sections[index].remove()
        that.init()
            //删除选择li的时候选中前一个li
            // 删除不是选中状态的li原来的选中内容不变
            // if (document.querySelector('.liactive')) { return } else {
            //     index--
            //     that.lis[index] && that.lis[index].click()


        // }





        index == 0 ? index : index--
            document.querySelector('.liactive') ? 0 : that.lis[index] && that.lis[index].click()





    }

    editTab(e) {
        var tmp = this.innerText
            // 禁止双击
        window.getSelection ? window.getSelection().removeAllRanges() : document.getSelection.empty()

        this.innerHTML = `<input type="text" />`
        var input = this.children[0]
        input.value = tmp
            // 默认选中全部文字
        input.select()

        // 离开文本框赋值
        input.onblur = function() {
                this.parentNode.innerText = this.value
            }
            // 按下回车赋值

        input.onkeyup = function(e) {
            if (e.keyCode === 13) {
                this.blur()
            }
        }

    }
}


var tab = new Tab('#tab')