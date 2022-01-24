$(function() {
    $('.input_sub').on('click', function() {
        var nn = $('.input_txt').val().trim()

        if (nn.length);
        else {
            $('.input_txt').val('')
            return alert('内容不能为空')
        }
        var nr = `<li class="right_word"><img src="img/person02.png" /> <span>${$('.input_txt').val()}</span> </li>`
        $('.talk_list').append(nr)
        $('.input_txt').val('')
        resetui()
        getmes(nn)
    })

    $('.input_txt').on('keyup', function(e) {
        console.log(e.keyCode)
        if (e.keyCode == 13) {
            // console.log(11)
            $('.input_sub').click()
        }

    })

    function getmes(nr) {
        $.ajax({
            type: 'get',
            url: 'http://ajax.frontend.itheima.net:3006/api/robot',
            data: {
                spoken: nr
            },
            success: function(res) {
                console.log(res)
            }
        })
    }

    // 初始化右侧滚动条
    // 这个方法定义在scroll.js中

})