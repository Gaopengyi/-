$(function () {
    // 最大的List    [["北京", [[{name:"北京"},{name:"",value:90}],]],[]]
    // var dataList = [];
    // // var s = [["北京", [[{name:"北京"},{name:"",value:90}],[{name:"北京"},{name:"武汉",value:90}]]],[]];
    // var oN = {name: ""};
    // var oNV = {name: "", value: ""};
    // var iOlist = [];
    // var iLlist = [];
    // var secondList = [];
    // for (var c = 0; c < jsonData.length-1; c++) {
    //     secondList = [];
    //     iLlist = [];
    //     var site = jsonData[c].site;
    //     var nextSite = jsonData[c+1].site;
    //     if ($.isArray(site)) {
    //         for (var d = 0; d < site.length; d++) {
    //             if ($.isArray(nextSite)){
    //                 for (var e = 0; e < nextSite.length; e++) {
    //                     // 多对多
    //                     iOlist = [];
    //                     oN = {};
    //                     oNV = {};
    //                     oN['name'] = site[d];
    //                     oNV['name'] = nextSite[e];
    //                     oNV['value'] = 90;
    //                     iOlist.push(oN);
    //                     iOlist.push(oNV);
    //                     iLlist.push(iOlist);
    //                 }
    //             } else {
    //                 // 多对一
    //                 iOlist = [];
    //                 oN = {};
    //                 oNV = {};
    //                 oN['name'] = site[d];
    //                 oNV['name'] = nextSite;
    //                 oNV['value'] = 90;
    //                 iOlist.push(oN);
    //                 iOlist.push(oNV);
    //                 iLlist.push(iOlist);
    //             }
    //         }
    //     } else {
    //         if ($.isArray(nextSite)){
    //             for (var e = 0; e < nextSite.length; e++) {
    //                 // 一对多
    //                 iOlist = [];
    //                 oN = {};
    //                 oNV = {};
    //                 oN['name'] = site;
    //                 oNV['name'] = nextSite[e];
    //                 oNV['value'] = 90;
    //                 iOlist.push(oN);
    //                 iOlist.push(oNV);
    //                 iLlist.push(iOlist);
    //             }
    //         } else{
    //             // 一对一
    //             iOlist = [];
    //             oN = {};
    //             oNV = {};
    //             oN['name'] = site;
    //             oNV['name'] = nextSite;
    //             oNV['value'] = 90;
    //             iOlist.push(oN);
    //             iOlist.push(oNV);
    //             iLlist.push(iOlist);
    //         }
    //     }
    //     // iLlist.push(iOlist);
    //     secondList.push(site);
    //     secondList.push(iLlist);
    //     dataList.push(secondList);
    // }
    // console.log(dataList);

    var data = $.extend(true, strs);
    console.log(data);
    // console.log("aaaa" + "bbb");
    // for (var i = 0; i < strs.length; i++) {
    //     // var contents = data[i].content;
    //
    //     for (var j = 0; j < data[i].content.length ; j++) {
    //         // console.log(j);
    //         if (j >0 && parseInt(j % 24) ==0){
    //             // console.log(contents[j]);
    //             data[i].content[j] =  data[i].content[j] + "asdfasf";
    //             console.log(data[i].content[j]);
    //         }
    //     }
    //     // data[i].contents = data[i].content;
    // }

    for (var i = 0; i < data.length; i++) {
        // var contents = data[i].content;

        for (var j = 0; j < data[i].content.length ; j++) {
            // console.log(j);
            if (j >0 && parseInt(j % 24) ==0){
                // console.log(contents[j]);
                data[i].content[j] =  data[i].content[j] + "asdfasf";
                console.log(data[i].content[j]);
            }
        }
        // data[i].contents = data[i].content;
    }
    console.log(data[0].content);

});