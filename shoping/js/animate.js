function animate(obj, target, callback) {
    // console.log(callback)
    //执行前清除定时器防止多次执行同一个定时器,保持只有一个定时器执行
    clearInterval(obj.time)
        //给不同的元素上了不同的定时器
    obj.time = setInterval(() => {
        //设置步长,不要小数取整数
        // var step = Math.ceil((target - obj.offsetLeft) / 10)
        var step = (target - obj.offsetLeft) / 10
        step = step > 0 ? Math.ceil(step) : Math.floor(step)
        if (obj.offsetLeft == target) {
            clearInterval(obj.time)

            //回调函数写在定时器结束
            callback && callback();
        }
        obj.style.left = obj.offsetLeft + step + 'px'
    }, 30);

}