$(function() {

    getdata()

    function getdata() {
        $.ajax({
            type: 'get',
            url: 'http://www.liulongbin.top:3006/api/news',
            success: function(res) {
                console.log(res)
                if (res.status != 200) return alert('数据获取失败')
                    // 改造字符串成数组
                for (var i = 0; i < res.data.length; i++) {
                    res.data[i].tags = res.data[i].tags.split(',')
                }
                var htmlStr = template('t1', res)
                $('#news-list').html(htmlStr)

            }
        })

        template.defaults.imports.ftime = function(data) {
            var dt = new Date(data)
            var y = dt.getFullYear()
            var m = padZero(dt.getMonth() + 1)
            var d = padZero(dt.getDay() + 1)
            var h = padZero(dt.getHours())
            var min = padZero(dt.getMinutes())
            var sec = padZero(dt.getSeconds())
            var z = y + '-' + m + '-' + d + ' ' + h + ':' + min + ':' + sec
            return z

        }

        function padZero(n) {
            if (n < 10) return '0' + n;
            else return n
        }


    }
})