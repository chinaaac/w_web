$(function() {
    $('.tabs a').on('click', function() {
        $(this).css('color', '#fff').siblings().css('color', 'skyblue')
        $('.monitor .content').eq($(this).index()).show().siblings('.content').hide()
    })


    $('.marquee-view .marquee').each(function() {
        // console.log($(this))

        var rows = $(this).children().clone()

        $(this).append(rows)
    })

    var bt = echarts.init(document.querySelector('.pie'))
    option = {
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        series: [{
            name: '点位模式',
            type: 'pie',
            radius: [20, 80],
            center: ['50%', '50%'],
            roseType: 'raduis',
            itemStyle: {
                borderRadius: 5
            },
            data: [
                { value: 30, name: '北京' },
                { value: 28, name: '江苏' },
                { value: 26, name: '河南' },
                { value: 24, name: '上海' },
                { value: 22, name: '山东' },
                { value: 20, name: '湖南' },
                { value: 18, name: '陕西' },
                { value: 16, name: '重庆' }
            ],
            lable: {
                fontSize: 10
            },
            labelLine: {
                length: 6,
                length2: 8
            }
        }]


    };

    bt.setOption(option)

    window.addEventListener('resize', function() {
        bt.resize()
        tx.resize()
        sales.resize()
        ld.resize()
        xs.resize()
    })

    var items = {
        name: '',
        value: '1200',
        itemStyle: {
            color: 'red'
        },
        emphasis: {
            itemStyle: {
                color: 'green'
            }
        },
        // 鼠标经过，不显示提示框
        tooltip: {
            extraCssText: "opacity:0"
        }
    }

    optionts = {
        // color: ['skyblue'],
        color: new echarts.graphic.LinearGradient(
            0, 0, 0, 1, [
                { offset: 0, color: '#00fffb' },
                { offset: 1, color: '#0061ce' }
            ]
        ),
        tooltip: {
            // 放到轴上才有提示
            trigger: 'item'
        },
        grid: {
            left: '0%',
            right: '3%',
            bottom: '3%',
            top: '3%',
            containLabel: true,
            show: 'true',
            borderColor: 'skyblue'
        },
        xAxis: [{
            type: 'category',
            data: ['北京', '上海', '江苏', '湖南', '湖北', '重庆', '浙江'],
            axisTick: {
                // alignWithLabel: true,
                show: false
            },
            axisLabel: {
                color: 'skyblue'
            },
            axisLine: {
                lineStyle: {
                    color: 'skyblue'
                }
            }
        }],
        yAxis: [{
            type: 'value',
            axisTick: {
                // alignWithLabel: true,
                show: false
            },
            axisLabel: {
                color: 'skyblue'
            },
            axisLine: {
                lineStyle: {
                    color: 'skyblue'
                }
            },
            splitLine: {
                lineStyle: {
                    // 使用深浅的间隔色
                    color: 'skyblue'
                }
            }
        }],
        series: [{
            name: 'Direct',
            type: 'bar',
            barWidth: '60%',
            data: [10, 52, 200, items, 390, 330, 220]
        }]
    };
    var tx = echarts.init(document.querySelector('.bar'))
    tx.setOption(optionts)
    $('.filter').on('click', 'a', function() {
        $(this).addClass('active').siblings('a').removeClass('active')
    })


    var sales = echarts.init(document.querySelector('.line'))
    var data = {
        year: [
            [120, 132, 101, 134, 90, 230, 210, 80, 0, 50, 250, 20],
            [220, 182, 191, 234, 290, 330, 310, 70, 50, 0, 20, 300]
        ],
        qq: [
            [100, 182, 80, 234, 0, 200, 30, 70, 50, 0, 20, 300],
            [100, 182, 191, 234, 290, 100, 310, 0, 50, 80, 20, 300]
        ],
        mon: [
            [0, 182, 91, 234, 40, 200, 310, 70, 50, 0, 20, 100],
            [200, 182, 91, 234, 40, 100, 310, 48, 50, 0, 20, 100]
        ],
        wek: [
            [50, 182, 91, 24, 40, 200, 310, 70, 50, 0, 20, 30],
            [0, 182, 80, 234, 40, 200, 60, 70, 50, 0, 20, 100]
        ]
    }
    optionsa = {
        color: ['#00f2f1', '#ed3f35'],
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            //如果下面有name可以省略下行
            data: ['预期销售额', '实际销售额'],
            right: 0,
            textStyle: {
                color: 'skyblue'
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '0%',
            top: '20%',
            containLabel: true,
            show: 'true',
            borderColor: 'skyblue'
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
            axisTick: {
                // alignWithLabel: true,
                show: false
            },
            boundaryGap: 0,
            axisLine: {

                show: 0
            },
            axisLabel: {
                color: 'skyblue'

            }
        },
        yAxis: {
            type: 'value',
            axisLine: {
                lineStyle: {
                    color: 'skyblue'
                }
            },
            splitLine: {
                lineStyle: {
                    // 使用深浅的间隔色
                    color: '#012f4a'
                }
            }

        },
        series: [{
                name: '预期销售额',
                type: 'line',
                // stack: 'Total',
                data: data.year[0],
                smooth: true
            },
            {
                name: '实际销售额',
                type: 'line',
                // stack: 'Total',
                data: data.year[1],
                smooth: true
            }
        ]
    };
    var index = 0
    sales.setOption(optionsa)
        // 点击切换效果
    $('.caption').on('click', 'a', function() {
            $(this).addClass('active').siblings('a').removeClass('active')
                // 注意索引号问题，他前面还有一个H3
            index = $(this).index() - 1

            // 两种办法或租自定义属性
            // console.log(this.dataset.type)

            // console.log($(this).attr('data-type'))

            // 不能使用
            // data[ls]，因为ls是字符串，不支持该操作
            // console.log(data[$(this).attr('data-type')])
            // 根据拿到的数据重新渲染data值
            optionsa.series[0].data = data[$(this).attr('data-type')][0]
            optionsa.series[1].data = data[$(this).attr('data-type')][1]
            sales.setOption(optionsa)
        })
        // 开启定时器
    var as = $('.caption a')
    var dsq = setInterval(() => {

        as.eq(index).click();
        index++;
        index == as.length ? index = 0 : 0;
    }, 1000);
    $('.sales ').hover(function() {
        clearInterval(dsq)
    }, function() {
        clearInterval(dsq)

        dsq = setInterval(() => {

            as.eq(index).click();
            index++;
            index == as.length ? index = 0 : 0;
        }, 1000);
    })

    //
    // 雷达图
    // Schema:
    // date,AQIindex,PM2.5,PM10,CO,NO2,SO2
    const dataBJ = [
        [50, 100, 30, 3, 10, 30]
    ];
    const lineStyle = {
        width: 1,
        opacity: 0.5
    };
    optionld = {
        // backgroundColor: '#161627',
        radar: {
            // 修改雷达图大小
            radius: '65%',
            indicator: [
                { name: '火车', max: 300 },
                { name: '飞机', max: 250 },
                { name: '汽车', max: 300 },
                { name: '商场', max: 5 },
                { name: '地铁', max: 200 },
                { name: '火箭', max: 100 }
            ],
            shape: 'circle',
            // 分割的圆圈个数（外环）
            splitNumber: 4,
            axisName: {
                color: "red"
            },

            // 分割的圆圈线条的样式
            splitLine: {
                lineStyle: {
                    color: 'rgba(255,255,255,0.5)'
                }
            },
            splitArea: {
                show: false
            },
            // 修改坐标轴线颜色
            axisLine: {
                lineStyle: {
                    color: 'rgba(255,255,255,0.5)'
                }
            }
        },
        // 修改雷达图颜色
        // name: {
        //     textStyle: {
        //         color: 'blue'
        //     }
        // },
        series: [{
            name: '北京',
            type: 'radar',
            lineStyle: lineStyle,
            data: dataBJ,
            // 设置小圆点显示标志
            symbol: 'circle',
            symbolSize: 5,
            //设置小圆点颜色
            itemStyle: {
                color: '#fff'
            },
            // 修改填充区域的背景色
            areaStyle: {
                color: 'yellow'
            },
            // 小圆点显示数据
            lable: {
                show: true,
                fontSize: 10

            }
        }],
        tooltip: {
            show: true,
            position: ['60%', '10%']
        }
    };

    var ld = echarts.init(document.querySelector('.radar'))
    ld.setOption(optionld)

    optionsxs = {
        series: [{
            name: '销售进度',
            type: 'pie',
            radius: ['40%', '70%'],
            labelLine: {
                show: false
            },
            // 鼠标经过图表不偏移

            hoverOffset: 0,
            data: [{
                    value: 100,
                    itemStyle: {
                        color: new echarts.graphic.LinearGradient(
                            0, 0, 0, 1, [{
                                offset: 0,
                                color: '#00c9e0'
                            }, {
                                offset: 1,
                                color: '#005fc1'
                            }]
                        )
                    }
                },
                {
                    value: 100,
                    itemStyle: {
                        color: new echarts.graphic.LinearGradient(
                            0, 0, 0, 1, [{
                                offset: 0,
                                color: '#12274d'
                            }]
                        )
                    }
                },
                // 修改颜色为透明
                {
                    value: 200,
                    itemStyle: {
                        color: 'transparent'
                    }
                }
            ],
            //旋转角度，默认为90度
            startAngle: 180,
            radius: ["130%", "150%"],
            center: ['48%', '80%']
        }]

    };

    var xs = echarts.init(document.querySelector('.gauge'))
    xs.setOption(optionsxs)

    var hotData = [{
            city: "北京", // 城市
            sales: "25, 179", // 销售额
            flag: true, //  上升还是下降
            brands: [
                //  品牌种类数据
                { name: "可爱多", num: "9,086", flag: true },
                { name: "娃哈哈", num: "8,341", flag: true },
                { name: "喜之郎", num: "7,407", flag: false },
                { name: "八喜", num: "6,080", flag: false },
                { name: "小洋人", num: "6,724", flag: false },
                { name: "好多鱼0", num: "2,170", flag: true }
            ]
        },
        {
            city: "河北",
            sales: "23,252",
            flag: false,
            brands: [
                { name: "可爱多", num: "3,457", flag: false },
                { name: "娃哈哈", num: "2,124", flag: true },
                { name: "喜之郎", num: "8,907", flag: false },
                { name: "八喜", num: "6,080", flag: true },
                { name: "小洋人", num: "1,724", flag: false },
                { name: "好多鱼1", num: "1,170", flag: false }
            ]
        },
        {
            city: "上海",
            sales: "20,760",
            flag: true,
            brands: [
                { name: "可爱多", num: "2,345", flag: true },
                { name: "娃哈哈", num: "7,109", flag: true },
                { name: "喜之郎", num: "3,701", flag: false },
                { name: "八喜", num: "6,080", flag: false },
                { name: "小洋人", num: "2,724", flag: false },
                { name: "好多鱼2", num: "2,998", flag: true }
            ]
        },
        {
            city: "江苏",
            sales: "23,252",
            flag: false,
            brands: [
                { name: "可爱多", num: "2,156", flag: false },
                { name: "娃哈哈", num: "2,456", flag: true },
                { name: "喜之郎", num: "9,737", flag: true },
                { name: "八喜", num: "2,080", flag: true },
                { name: "小洋人", num: "8,724", flag: true },
                { name: "好多鱼3", num: "1,770", flag: false }
            ]
        },
        {
            city: "山东",
            sales: "20,760",
            flag: true,
            brands: [
                { name: "可爱多", num: "9,567", flag: true },
                { name: "娃哈哈", num: "2,345", flag: false },
                { name: "喜之郎", num: "9,037", flag: false },
                { name: "八喜", num: "1,080", flag: true },
                { name: "小洋人", num: "4,724", flag: false },
                { name: "好多鱼4", num: "9,999", flag: true }
            ]
        }
    ];

    // 根据数据渲染模块
    // 遍历数据

    var supHtml = ''

    $.each(hotData, function(k, v) {

        supHtml += `<li><span>${v.city}</span>
        <span>${v.sales} <s class=${v.flag?'icon-up':'icon-down'}></s></span>
        </li>
        `
    })

    $('.sup').html(supHtml)

    $('.sup').on('mouseenter', 'li', function() {

            var index = $(this).index()
                // console.log(index)
            $(this).addClass('active').siblings().removeClass('active')

            var subhtml = ''
                // for (var i = 0; i < hotData[index].brands.length; i++) {

            //     subhtml += `<li><span>${hotData[index].brands[i].name}</span><span> <s class=${hotData[index].brands[i].flag?'icon-up':'icon-down'}></s></span></li>`

            // }

            $.each(hotData[index].brands, function(k, v) {

                subhtml += `<li><span>${v.name}</span><span> ${v.num}<s class=${v.flag?'icon-up':'icon-down'}></s></span></li>`
            })
            $('.sub').html(subhtml)
            tindex = index

        })
        // 设置第一个li为鼠标经过状态
    var lis = $('.sup li')
    lis.eq(0).mouseenter();
    // 使用mouseenter会冲突



    // var tindex = 0
    // var ti = setInterval(() => {
    //     tindex >= 5 ? tindex = 0 : tindex++;
    //     lis.eq(tindex).mouseenter();
    //     console.log(tindex)
    // }, 2000);
    // $('.sup').hover(
    //     function() {
    //         clearInterval(ti)
    //     },
    //     function() {
    //         clearInterval(ti)
    //         ti = setInterval(() => {
    //             tindex >= 5 ? tindex = 0 : tindex++;
    //             lis.eq(tindex).mouseenter();
    //             console.log(tindex)
    //         }, 2000);
    //     }
    // )

    var tindex = 0
    var ti = setInterval(() => {
        rander()

    }, 2000);
    $('.sup').hover(function() {
        clearInterval(ti)

    }, function() {
        clearInterval(ti)
        ti = setInterval(() => {
            rander()
        }, 2000);
    })

    // 提取渲染函数
    function rander() {
        tindex > 3 ? tindex = 0 : tindex++;


        var index = lis.eq(tindex)

        index.addClass('active').siblings().removeClass('active')

        var subhtml = ''

        $.each(hotData[tindex].brands, function(k, v) {

            subhtml += `<li><span>${v.name}</span><span> ${v.num}<s class=${v.flag?'icon-up':'icon-down'}></s></span></li>`

            $('.sub').html(subhtml)

        })
    }


})