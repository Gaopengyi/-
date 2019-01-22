$(function () {
    var map = L.map('map');
    var baseLayers = {
        "高德地图": L.tileLayer('http://webrd0{s}.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=8&x={x}&y={y}&z={z}', {
            subdomains: "1234"
        }).addTo(map),
        '高德影像': L.layerGroup([L.tileLayer('http://webst0{s}.is.autonavi.com/appmaptile?style=6&x={x}&y={y}&z={z}', {
            subdomains: "1234"
        }), L.tileLayer('http://t{s}.tianditu.cn/DataServer?T=cta_w&X={x}&Y={y}&L={z}', {
            subdomains: "1234"
        })])
    };
    L.tileLayer('https://a.tiles.mapbox.com/v3/foursquare.map-0y1jh28j/{z}/{x}/{y}.png', {
        attribution: 'Map &copy; Pacific Rim Coordination Center (PRCC).  Certain data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
        key: 'BC9A493B41014CAABB98F0471D759707',
        styleId: 22677
    });
    var layercontrol = L.control.layers(baseLayers,{}, {
        position: "topleft"
    }).addTo(map);
    map.setView(L.latLng(37.550339, 104.114129), 4);
    var overlay = new L.echartsLayer3(map, echarts);
    var chartsContainer = overlay.getEchartsContainer();
    var myChart = overlay.initECharts(chartsContainer,'dark');
    var geoCoordMap = {
        '上海': [121.4453, 31.2234],
        '齐齐哈尔': [123.9179, 47.3543],
        '洮南': [122.7863, 45.3355],
        '山海关': [119.7600, 40.0109],
        '喜峰口': [118.3552, 40.4173],
        '承德市': [117.9634, 40.9515],
        '呼和浩特': [111.7519, 40.8414],
        '卢沟桥': [116.2251, 39.8514],
        '台儿庄': [117.3219, 34.8107],
        '兰考县': [114.8211, 34.8223],
        '德安县': [115.7560, 29.3134],
        '广东': [113.2662, 23.1317],
        '南昌': [115.8579, 28.6820],
        '随县': [113.2999, 31.8538],
        '钦州': [108.6492, 21.9379],
        '枣阳': [112.7739, 32.1283],
        '宜昌': [111.2864, 30.6918],
        '光山县': [114.9187, 32.0099],
        '上高县': [114.9248, 28.2333],
        '衡阳': [112.5719, 26.8932],
        '桂林': [110.2900, 25.2736],
        '巴达布朗族哈尼族乡': [100.0589, 21.8551],
        '缅甸北部': [99.8382, 21.7748],
        '缅甸密支那': [97.1081, 25.1104],
        '腾冲': [98.4909,  25.0205],
        '新野县': [112.3626, 32.5074],
        '襄阳': [112.1813, 31.9428],
        '怀化': [110.0170, 27.3717],
        '龙州县': [106.8545, 22.3426],
        '南丹县': [107.5422, 24.9753],
        '全州县': [111.0730, 25.9286],
        '南阳': [112.5460, 32.9735],
        '贵阳': [106.6755, 26.6183],
        '韶关': [113.5742, 24.8141],
        '东莞': [113.8953, 22.901],
        '东营': [118.7073, 37.5513],
        '中山': [113.4229, 22.478],
        '临汾': [111.4783, 36.1615],
        '临沂': [118.3118, 35.2936],
        '丹东': [124.541, 40.4242],
        '丽水': [119.5642, 28.1854],
        '乌鲁木齐': [87.9236, 43.5883],
        '佛山': [112.8955, 23.1097],
        '保定': [115.0488, 39.0948],
        '兰州': [103.5901, 36.3043],
        '包头': [110.3467, 41.4899],
        '北京': [116.3974, 39.9088],
        '北海': [109.314, 21.6211],
        '南京': [118.8062, 31.9208],
        '南宁': [108.479, 23.1152],
        '南昌': [116.0046, 28.6633],
        '南通': [121.1023, 32.1625],
        '厦门': [118.1689, 24.6478],
        '台州': [121.1353, 28.6688],
        '合肥': [117.29, 32.0581],
        '呼和浩特': [111.4124, 40.4901],
        '咸阳': [108.4131, 34.8706],
        '哈尔滨': [127.9688, 45.368],
        '唐山': [118.4766, 39.6826],
        '嘉兴': [120.9155, 30.6354],
        '大同': [113.7854, 39.8035],
        '大连': [122.2229, 39.4409],
        '天津': [117.4219, 39.4189],
        '太原': [112.3352, 37.9413],
        '常德': [111.6985, 29.0315],
        '宁波': [121.5967, 29.6466],
        '宝鸡': [107.1826, 34.3433],
        '宿迁': [118.5535, 33.7775],
        '常州': [119.4543, 31.5582],
        '广州': [113.5107, 23.2196],
        '廊坊': [116.521, 39.0509],
        '延安': [109.1052, 36.4252],
        '张家口': [115.1477, 40.8527],
        '徐州': [117.5208, 34.3268],
        '德州': [116.6858, 37.2107],
        '惠州': [114.6204, 23.1647],
        '成都': [103.9526, 30.7617],
        '扬州': [119.4653, 32.8162],
        '承德': [117.5757, 41.4075],
        '昆明': [102.9199, 25.4663],
        '杭州': [119.5313, 29.8773],
        '枣庄': [117.323, 34.8926],
        '柳州': [109.3799, 24.9774],
        '株洲': [113.5327, 27.0319],
        '武汉': [114.3896, 30.6628],
        '汕头': [117.1692, 23.3405],
        '江门': [112.6318, 22.1484],
        '沈阳': [123.1238, 42.1216],
        '沧州': [116.8286, 38.2104],
        '淮安': [118.927, 33.4039],
        '温州': [120.498, 27.8119],
        '玉溪': [101.9312, 23.8898],
        '珠海': [113.7305, 22.1155],
        '盐城': [120.2234, 33.5577],
        '石家庄': [114.4995, 38.1006],
        '福州': [119.4543, 25.9222],
        '长沙': [112.9388, 28.2277],
        '绍兴': [120.5643, 29.7565],
        '舟山': [122.2559, 30.2234],
        '苏州': [120.6519, 31.3989],
        '衡水': [115.8838, 37.7161],
        '衢州': [118.6853, 28.8666],
        '西宁': [101.4038, 36.8207],
        '西安': [109.1162, 34.2004],
        '贵阳': [106.6992, 26.7682],
        '邢台': [114.8071, 37.2821],
        '邯郸': [114.4775, 36.535],
        '郑州': [113.4668, 34.6234],
        '韶关': [113.7964, 24.7028],
        '运城': [111.0069, 35.0262],
        '衡阳': [112.5719, 26.8932],
        '东京湾': [139.7815, 35.4414]
    };
    // console.log(jsonData);
    // var BJData = [
    //     [{name: '东京湾'}, {name: '上海', value: 50}],
    //     [{name: '东京湾'}, {name: '包头', value: 50}],
    //     [{name: '北京'}, {name: '上海', value: 50}],
    //     [{name: '北京'}, {name: '包头', value: 50}]
    // ];
    //
    // var SHData = [
    //     [{name: '上海'}, {name: '包头', value: 95}],
    // ];
    //
    // var GZData = [
    //     [{name: '广州'}, {name: '福州', value: 95}],
    // ];

    // var planePath = 'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z';
    // var planePath = 'path://M1136.047896 339.882267C1112.706905 143.149344 1017.345943-0.2756 900.268988 0.0004L358.6862 1.290399c-117.106954 0.276-211.762917 144.067944-234.275909 340.954867C42.146324 391.197247-0.27366 490.974208 0.00134 606.394163c0.184 85.699967 24.016991 162.533937 69.902973 216.394916l0.46 191.364925 212.804916-0.49-0.276-112.077956 697.337728-1.687 0.276 112.076957 212.805917-0.521-0.46-191.364925c45.639982-54.014979 69.134973-131.001949 68.919973-216.700916-0.245-115.205955-43.185983-214.890916-125.725951-263.506897zM358.9312 74.320371l541.583788-1.289c75.392971-0.184 141.491945 101.98596 166.489935 240.563907-11.532995-2.299999-23.648991-3.709999-36.193986-4.446999 0-0.307 0.338-0.92 0.062-0.889999-101.89396 0.246-70.055973 0.154-141.799944 0.337999s-46.559982 0.092-118.118954 0.276l-523.669796 1.257c-19.016993 0.031-36.990986 2.085999-53.983979 5.551998C217.807255 176.920331 283.538229 74.473371 358.9312 74.320371zM218.298255 702.030126c-46.590982 0.092-84.317967-42.787983-84.440967-95.973963-0.123-53.093979 37.419985-96.249962 83.980967-96.372962 46.376982-0.092 84.103967 42.879983 84.256967 95.974962 0.123 53.277979-37.389985 96.249962-83.796967 96.371963z m656.972743-18.126993l-488.365809 0.583c-76.12997 0.184-77.78597-131.124949-0.307-131.308949l488.366809-1.166c71.219972-0.184 71.527972 131.707949 0.306 131.891949z m168.667934 16.133994c-46.468982 0.122-84.195967-42.757983-84.318967-95.943963-0.122-53.093979 37.419985-96.279962 83.858967-96.372962 46.499982-0.122 84.256967 42.849983 84.379967 95.973962 0.03 53.278979-37.450985 96.280962-83.919967 96.342963z';
    var planePath = 'triangle';
    // var planePath = 'arrow';

    var convertData = function (data) {
        var res = [];
        for (var i = 0; i < data.length; i++) {
            var dataItem = data[i];
            var fromCoord = geoCoordMap[dataItem[0].name];
            var toCoord = geoCoordMap[dataItem[1].name];
            if (fromCoord && toCoord) {
                res.push([{
                    coord: fromCoord
                }, {
                    coord: toCoord
                }]);
            }
        }
        return res;
    };
    var color = ['#C81610', '#ffa022', '#46bee9'];
    var series = [];
    var myIcon = {
        'China': './img/China.png',
        'peace': './img/peace.png',
        'Japanese': './img/Japanese.png'
    };
    // 地图数据的制作
    var dataList = [];
    // var s = [["北京", [[{name:"北京"},{name:"",value:90}],[{name:"北京"},{name:"武汉",value:90}]]],[]];
    var oN = {name: ""};
    var oNV = {name: "", value: ""};
    var iOlist = [];
    var iLlist = [];
    var secondList = [];
    for (var c = 0; c < jsonData.length-1; c++) {
        secondList = [];
        iLlist = [];
        var site = jsonData[c].site;
        var nextSite = jsonData[c+1].site;
        if ($.isArray(site)) {
            for (var d = 0; d < site.length; d++) {
                if ($.isArray(nextSite)){
                    for (var e = 0; e < nextSite.length; e++) {
                        // 多对多
                        iOlist = [];
                        oN = {};
                        oNV = {};
                        oN['name'] = site[d];
                        oNV['name'] = nextSite[e];
                        oNV['value'] = 90;
                        iOlist.push(oN);
                        iOlist.push(oNV);
                        iLlist.push(iOlist);
                    }
                } else {
                    // 多对一
                    iOlist = [];
                    oN = {};
                    oNV = {};
                    oN['name'] = site[d];
                    oNV['name'] = nextSite;
                    oNV['value'] = 90;
                    iOlist.push(oN);
                    iOlist.push(oNV);
                    iLlist.push(iOlist);
                }
            }
        } else {
            if ($.isArray(nextSite)){
                for (var e = 0; e < nextSite.length; e++) {
                    // 一对多
                    iOlist = [];
                    oN = {};
                    oNV = {};
                    oN['name'] = site;
                    oNV['name'] = nextSite[e];
                    oNV['value'] = 90;
                    iOlist.push(oN);
                    iOlist.push(oNV);
                    iLlist.push(iOlist);
                }
            } else{
                // 一对一
                iOlist = [];
                oN = {};
                oNV = {};
                oN['name'] = site;
                oNV['name'] = nextSite;
                oNV['value'] = 90;
                iOlist.push(oN);
                iOlist.push(oNV);
                iLlist.push(iOlist);
            }
        }
        // iLlist.push(iOlist);
        secondList.push(site);
        secondList.push(iLlist);
        dataList.push(secondList);
    }
    dataList.unshift(["东京湾",[[{name:"东京湾"},{name:"齐齐哈尔", value: 90}]]]);
    var serice = [["东京湾",[[{name:"东京湾"},{name:"齐齐哈尔", value: 90}]]]];
    // 地图的所有数据的循环生成
    for (var i = 0; i < jsonData.length; i++) {
        var contents = jsonData[i].content;
        for (var j = 0; j < contents.length ; j++) {
            if (j >0 && j / 25 ==0){
                contents[j] = contents[j] + "\n";
            }
        }
    }


    option = {
        baseOption:{
            timeline: {
                axisType: 'category',
                orient: 'vertical',
                autoPlay: true,
                inverse: true,
                playInterval: 2500,
                left: null,
                right: 20,
                top: 20,
                bottom: 20,
                width: 55,
                height: null,
                label: {
                    normal: {
                        textStyle: {
                            color: '#999'
                        }
                    },
                    emphasis: {
                        textStyle: {
                            color: '#fff'
                        }
                    }
                },
                symbol: 'none',
                lineStyle: {
                    color: '#555'
                },
                checkpointStyle: {
                    color: '#bbb',
                    borderColor: '#777',
                    borderWidth: 2
                },
                controlStyle: {
                    showNextBtn: false,
                    showPrevBtn: false,
                    normal: {
                        color: '#666',
                        borderColor: '#666'
                    },
                    emphasis: {
                        color: '#aaa',
                        borderColor: '#aaa'
                    }
                },
                data: []
            },
            title: [],
            // grid: [
            //     {
            //         width: 800,
            //         height: 800,
            //         top: 100,
            //         containLabel: true,
            //         left: 20
            //     },
            //     {
            //         width: 800,
            //         height: 800,
            //         top: 100,
            //         containLabel: true,
            //         left: 20
            //     },{
            //         width: 800,
            //         height: 800,
            //         top: 100,
            //         containLabel: true,
            //         left: 20
            //     },{
            //         width: 500,
            //         height: 500,
            //         top: 100,
            //         containLabel: true,
            //         right: 800
            //     },
            //     {
            //         width: 500,
            //         height: 500,
            //         top: 100,
            //         containLabel: true,
            //         right: 800
            //     }
            // ],
            grid: [
                {x2: '7%', y: '65%', width: '18%', height: '18%'},
                // {x2: '7%', y: '65%', width: '18%', height: '18%'},
                // {x2: '7%', y: '65%', width: '18%', height: '18%'},
                // {x2: '7%', y: '15%', width: '18%', height: '18%'},
                {x2: '7%', y: '15%', width: '18%', height: '18%'},
                {x: '5%', y: '70%', width: '90%', height: '20%'}

                // {x: '17%', y: '55%', width: '18%', height: '18%'},
            ],
            // toolbox: {
            //     show : true,
            //     feature : {
            //         dataView : {show: true, readOnly: false},
            //         magicType : {show: true, type: ['line', 'bar']},
            //         restore : {show: true},
            //         saveAsImage : {show: true}
            //     }
            // },
            calculable : true,
            xAxis : [
                {
                    gridIndex: 0,
                    type : 'category',
                    data :['中国胜 ', '平', '日本胜']
                },
                {
                    gridIndex: 1,
                    type : 'category',
                    data : ['中国','日本']
                },
                {
                    gridIndex: 2,
                    type : 'category',
                    data: []
                }

            ],
            yAxis : [
                {
                    gridIndex: 0,
                    // 控制时间轴刻度没有小数点
                    minInterval:1,
                    type : 'value',
                },
                {
                    gridIndex: 1,
                    // 控制时间轴刻度没有小数点
                    minInterval:1,
                    type : 'value',
                },
                {
                    gridIndex: 2,
                    // 控制时间轴刻度没有小数点
                    minInterval:1,
                    type : 'value',
                }
            ],
            label: [
                {
                    normal: {
                        show: true,
                        position: 'inside',
                        color: "#000"
                    }
                },
                {
                    normal: {
                        show: true,
                        position: 'inside',
                        color: "#000"
                    }
                }
            ],
            barWidth:20,
            tooltip: {
                trigger: 'item'
            },
            geo: {
                map: '',
                label: {
                    emphasis: {
                        show: true
                    }
                },
                width:200,
                height: 400,
                roam: true,
                itemStyle: {
                    normal: {
                        areaColor: '#323c48',
                        borderColor: '#404a59'
                    },
                    emphasis: {
                        areaColor: '#2a333d'
                    }
                }
            },
            legend: [
                {
                    orient: 'vertical',
                    right: 500,
                    top: 550,
                    data:['中国胜','平','日本胜']
                },
                {
                    orient: 'horizontal',
                    right: 100,
                    top: 80,
                    data:['总兵力','伤亡数量']
                },
                {
                    orient: 'vertical',
                    left: 100,
                    bottom: 200,
                    data:['中国总伤亡数','日本总伤亡数']
                },

            ],
            series: []
        },
        options: []
    };
    var ChinaLoser = 0;
    var JapaneseLoser = 0;
    var CList = [];
    var JList = [];
    var timeDataList = [];
    for (var z = 0; z < jsonData.length; z++) {
        option.baseOption.timeline.data = timeDataList;
        option.baseOption.xAxis[2].data = timeDataList;
        ChinaLoser += parseInt(jsonData[z].ChinaLosses);

        JapaneseLoser += parseInt(jsonData[z].JapLosses);
        CList.push(ChinaLoser);
        JList.push(JapaneseLoser);
        timeDataList.push(jsonData[z].startTime);

        option.options.push({

            title: [{
                textAlign: 'center',
                text: "中国" + "   " + "平" + "   " + "日本",
                left: '83%',
                top: '55%',
                textStyle: {
                    fontFamily: 'KaiTi',
                    fontSize: 30,
                    color: '#3239ff'
                }
            },
                {
                    textAlign: 'center',
                    left: '83%',
                    top: '60%',
                    textStyle: {
                        fontFamily: 'KaiTi',
                        fontSize: 30,
                        color: '#FF243B'
                    },
                    show: true,
                    text: jsonData[z].china + '     '+ jsonData[z].peace + '     ' + jsonData[z].Japanese
                },
                {
                    textAlign: 'center',
                    left: '50%',
                    top: '15%',
                    textStyle: {
                        fontSize: 30,
                        color: '#000000'
                    },
                    show: true,
                    text: "胜方" + ":" +jsonData[z].winner + ''
                },
                {
                    textAlign: 'center',
                    left: '50%',
                    top: '5%',
                    show: true,
                    textStyle: {
                        fontFamily: 'KaiTi',
                        fontSize: 50,
                        color: 'rgba(255, 2, 2, 0.8)'
                    },
                    'text': jsonData[z].warname + ''
                },
                {
                    // textAlign: 'center',
                    left: '5%',
                    top: '7%',
                    width: 300,
                    show: true,
                    // backgroundColor: 'rgba(128, 106, 12, 0.4)',
                    textStyle: {
                        fontSize: 15,
                        fontFamily: 'KaiTi',
                        color: 'rgba(34, 85, 255, 0.8)'
                    },
                    'text': jsonData[z].content + ''
                },
                {
                    // textAlign: 'center',
                    left: '16%',
                    top: '3%',
                    width: 300,
                    show: true,
                    // backgroundColor: 'rgba(128, 106, 12, 0.4)',
                    textStyle: {
                        fontSize: 15,
                        fontFamily: 'KaiTi',
                        color: 'rgba(0, 0, 0, 0.8)'
                    },
                    text: '战争简介' + ''
                },
                // {
                //     // textAlign: 'center',
                //     left: '15%',
                //     top: '80%',
                //     width: 300,
                //     show: true,
                //     // backgroundColor: 'rgba(128, 106, 12, 0.4)',
                //     textStyle: {
                //         fontSize: 90,
                //         // fontFamily: 'KaiTi',
                //         color: 'rgba(0, 0, 0, 0.6)'
                //     },
                //     text: jsonData[z].startTime + ''
                // }
            ],
            series:[
                // 线下的轨迹配置
                {
                name: dataList[z][0] + ' ',
                type: 'lines',
                zlevel: 1,
                effect: {
                    show: true,
                    period: 2.5,
                    trailLength: 0.7,
                    color: '#ff243b',
                    symbolSize: 8
                },
                lineStyle: {
                    normal: {
                        color: color[0],
                        width: 0,
                        curveness: 0.2
                    }
                },
                data: convertData(dataList[z][1])
            },
                // 小箭头的配置
                {
                    name: dataList[z][0] + '',
                    type: 'lines',
                    zlevel: 2,
                    effect: {
                        show: true,
                        period: 2.5,
                        trailLength: 0,
                        symbol: planePath,
                        symbolSize: 15
                    },
                    lineStyle: {
                        normal: {
                            color: color[0],
                            width: 1,
                            opacity: 0.4,
                            curveness: 0.2
                        }
                    },
                    data: convertData(dataList[z][1])
                },
                // 配置地区名称
                {
                    name: jsonData[z].warname,
                    // name: dataItem[1].name.name,
                    type: 'effectScatter',
                    coordinateSystem: 'geo',
                    zlevel: 2,
                    rippleEffect: {
                        brushType: 'stroke'
                    },
                    label: {
                        normal: {
                            show: true,
                            position: 'right',
                            formatter: '{b}'
                        }
                    },
                    symbolSize: function (val) {
                        return val[2] / 8;
                    },
                    itemStyle: {
                        normal: {
                            color: color[0]
                        }
                    },
                    data: dataList[z][1].map(function (dataItem) {
                        return {
                            name: dataItem[1].name,
                            value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
                        };
                    }),
                    // data :{
                    //     name: jsonData[z].warname,
                    //     value: geoCoordMap[dataList[z][1][1].name].concat([dataList[z][1][1].value])
                    // }
                },
                {
                    name:'中国胜',
                    type:'bar',
                    xAxisIndex: 0,
                    yAxisIndex: 0,
                    data: [jsonData[z].china, 0, 0],
                    itemStyle: {
                        normal: {
                            barBorderRadius:[5, 0, 0, 5],
                            //这里用函数控制柱子颜色，定义一个list，然后根据所以取得不同的值
                            color: '#f00a10'
                        }
                    }
                },
                {
                    name:'平',
                    type:'bar',
                    xAxisIndex: 0,
                    yAxisIndex: 0,
                    data: [0, jsonData[z].peace, 0],
                    itemStyle: {
                        normal: {
                            barBorderRadius:[5, 0, 0, 5],
                            //这里用函数控制柱子颜色，定义一个list，然后根据所以取得不同的值
                            color: '#09f02f'
                        }
                    }
                },
                {
                    name:'日本胜',
                    type:'bar',
                    xAxisIndex: 0,
                    yAxisIndex: 0,
                    data: [0, 0, jsonData[z].Japanese],
                    itemStyle: {
                        normal: {
                            barBorderRadius:[5, 0, 0, 5],
                            //这里用函数控制柱子颜色，定义一个list，然后根据所以取得不同的值
                            color: "#221eff"

                        }
                    }
                },

                {
                    name:'总兵力',
                    type:'bar',
                    xAxisIndex: 1,
                    yAxisIndex: 1,
                    data: [jsonData[z].ChinaCount, jsonData[z].JapCount],
                    itemStyle: {
                        normal: {
                            barBorderRadius:[5, 0, 0, 5],
                            //这里用函数控制柱子颜色，定义一个list，然后根据所以取得不同的值
                            color: '#188df0'
                        }
                    }
                },
                {
                    name:'伤亡数量',
                    type:'bar',
                    xAxisIndex: 1,
                    yAxisIndex: 1,
                    data: [jsonData[z].ChinaLosses, jsonData[z].JapLosses],
                    itemStyle: {
                        normal: {
                            // 柱形图圆角，初始化效果
                            barBorderRadius:[5, 0, 0, 5],
                            //这里用函数控制柱子颜色，定义一个list，然后根据所以取得不同的值
                            color: '#f00a10'
                        }
                    },
                },
                {
                    name:"中国总伤亡数",
                    data: CList,
                    type: 'line',
                    xAxisIndex: 2,
                    yAxisIndex: 2,
                    // smooth: true,
                    itemStyle: {
                        normal: {
                            //这里用函数控制柱子颜色，定义一个list，然后根据所以取得不同的值
                            color: '#f00300'
                        }
                    }
                },
                {
                    name: "日本总伤亡数",
                    data: JList,
                    type: 'line',
                    xAxisIndex: 2,
                    yAxisIndex: 2,
                    // smooth: true,
                    itemStyle: {
                        normal: {
                            //这里用函数控制柱子颜色，定义一个list，然后根据所以取得不同的值
                            color: '#3836f0'
                        }
                    }
                },
            ]
        });
    }
    console.log(timeDataList);

    $("#map").hide();
    $("#open").click(function () {
        $("#open").animate({
            "width":'200%',
            "opacity": 0
        },10,function () {
            $("#open").hide();
            $("#map").fadeIn(800);

            // 使用刚指定的配置项和数据显示图表。
            myChart.setOption(option, true);
        });
    });





    // ==========================================================


})