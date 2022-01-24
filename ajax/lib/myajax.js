function my_ajax(option) {
    var xhr = new XMLHttpRequest()


    var qs = resolveData(option.data)
    console.log(qs)
    if (option.type.toUpperCase() === 'GET') {
        var url = option.url + '?' + qs
        xhr.open(option.type, url)
        xhr.send()
    } else if (option.type.toUpperCase() === 'POST') {
        xhr.open(option.type, option.url)
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')
        xhr.send(resolveData(option.data))
    } else return alert('type error')

    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            console.log(xhr.responseText)

            var res = JSON.parse(xhr.responseText)
            option.success(res)
        }
    }
    var type = option['type']


    // xhr.open(type, qs)
    // var qs = option['type']
    // var url = option['url']



    // console.log(url)
    // console.log(option['data'])
}

function resolveData(data) {
    var arr = []
    for (var k in data) {
        var str = k + '=' + data[k]
        arr.push(str)
        console.log(arr)

    }
    return arr.join('&')
}