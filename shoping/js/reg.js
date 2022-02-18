window.onload = function() {
    var tel = /^1[3|4|5|7|8|9]\d{9}$/
    var tell = document.querySelector('.tel')
    var tips = document.querySelector('.sj')

    var regqq = /^[1-9]\d{4,9}/

    tell.onblur = function() {
        if (tel.test(tell.value)) {
            this.nextElementSibling.className = 'green'
            tips.innerText = '输入格式正确'
        } else {
            tips.innerText = '输入格式不正确'
        }
    }

}