function my_template(id, data) {
    var str = document.getElementById(id).innerHTML
    pattern = /{{\s*([a-zA-Z]+)\s*}}/
    var patres = null
    while (patres = pattern.exec(str)) {
        str = str.replace(patres[0], data[patres[1]])
    }
    return str;
}