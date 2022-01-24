$(function() {
    var timer = null;
    var i = 0;
    cacheobj = {}

    function fd(nr) {

        timer = setTimeout(() => {
            console.log(++i)
            getda(nr)
        }, 500);
    }

    $('.ipt').on('keyup', function() {
        var nr = $(this).val().trim()
        console.log(nr)
        clearTimeout(timer)
        if (nr.length > 0) {
            $('.sug').empty().show()
            if (cacheobj[nr]) {
                return xr(cacheobj[nr])
            }
            fd(nr)
        } else {
            $('.sug').empty().hide()
        }



    })

    function getda(nr) {
        $.ajax({
            url: 'https://suggest.taobao.com/sug?q=' + nr,
            dataType: 'jsonp',
            success: function(res) {
                xr(res)
            }
        })
    }


    function xr(res) {
        if (res.result <= 0) {
            return $('.sug').empty().hide()
        }
        var sj = template('tpl', res)

        $('.sug').empty().html(sj)

        var k = $('.ipt').val().trim()
        cacheobj[k] = res
        console.log(cacheobj)
    }



})