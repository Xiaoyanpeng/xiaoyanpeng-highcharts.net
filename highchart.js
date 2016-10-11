$(function () {
    $('#container').highcharts({
        chart: {
            type: 'spline'
        },
        title: {
            text: '',
            x: -20 //center
        },
        // subtitle: {
        //     text: 'Source: WorldClimate.com',
        //     x: -20
        // },
        xAxis: {
            title: {
                text: '2016年', 
                style:{ color:'#666',fontSize:'12px' },
                y:-24,
                x:-385,
            },
            type: 'datetime',
            categories: ['10月1日','10月2日', '10月3日','10月4日','10月5日','10月6日','10月7日'],
            tickmarkPlacement: 'on',
            labels:{
                y:26,
                style:{ color:'#666' }
            }
        },
        yAxis: {
            title: {
                text: ''
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        tooltip: {
            valueSuffix: ' 单'
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle',
            borderWidth: 0,
            itemMarginBottom:10,
        },
        series: [{
            name: '机票订单',
            data: [8,18,2,27,13,16,8]
        }, {
            name: '酒店订单',
            data: [2,12,17,6,23,11,18]
        }, {
            name: '租车订单',
            data: [0,0,0,0,0,0,0]
        }, {
            name: '签证订单',
            data: [2,5,0,6,1,3,2]
        },{
            name: '度假订单',
            data: [0,6,4,2,0,0,1]
        }]
    });
});