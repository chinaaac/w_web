var iptnr
$(function() {

    //1.定义延时器
    var time = null
        // 定义全局缓存对象
    var cacheobj = {}
        // 2 定义防抖函数
    function fd(kw) {
        time = setTimeout(function() {

            getSuggetList(kw)
        }, 500)

    }
    $('.ipt').on('keyup', function() {
        console.log(cacheobj)
        var iptnr = $(this).val().trim()
        if (iptnr.length <= 0) {
            return $('.sug').empty().hide()
        }
        $('.sug').show()

        // 清空定时器
        clearTimeout(time)
            // 判断内容在缓存里有没有
        if (cacheobj[iptnr]) {
            console.log('you' + cacheobj)
            console.log('obj')
            console.log(cacheobj)
            return xuanran(cacheobj, iptnr)

        }

        fd(iptnr)

    })


    function getSuggetList(kw) {
        $.ajax({
            url: 'https://suggest.taobao.com/sug?q=' + kw,
            dataType: 'jsonp',
            success: function(res) {
                // 渲染数据
                console.log('res')
                console.log(res)
                xuanran(res, kw)
                if (0) {
                    $('.sug').empty()
                    $.each(res.result, function(k, v) {

                        console.log(v[0])
                        li = `<li><a href='javascript:;'>${v[0]}</a></li>`
                        $('.sug').append(li)
                    })
                }

            }
        })
    }

    function xuanran(obj, kw) {
        // 渲染数据

        var mb = template('tpl', obj)
        $('.sug').show().empty().html(mb)
            // 获取用户输入的内容作为key，返回为value

        cacheobj[kw] = obj
        console.log(cacheobj)
    }

})