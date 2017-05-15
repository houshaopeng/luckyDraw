<template>
    <div id="wrapper" >
        <div id="scroller">
            <p v-for='list in prizeList'>
                <span >
                    {{list.name}}
                </span>
                <span >
                    {{list.num}}
                </span>
                <span >
                    {{list.time | timeFilter}}
                </span>
            </p>
        </div>
    </div>
</template>
<script>
import IScroll from 'VENDOR/iScroll/iscroll.js'

export default {
    name: 'hello',
    data() {
        return {
            msg: 'Welcome to Your Vue.js App',
            prizeList: [{
                name: '积分3分',
                num: '1',
                time: "1489468393"
            }, {
                name: '小狐狸的飞吻',
                num: '1',
                time: "1489468393"
            }, {
                name: '积分5分',
                num: '1',
                time: "1489468393"
            }, {
                name: '游戏礼包',
                num: '1',
                time: "1489468393"
            }, {
                name: '激活码',
                num: '1',
                time: "1489468393"
            }, {
                name: '积分10分',
                num: '1',
                time: "1489468393"
            }, {
                name: '门叔的问候',
                num: '1',
                time: "1489468393"
            }, {
                name: '10元京东券',
                num: '1',
                time: "1489468393"
            }, {
                name: '门叔的问候',
                num: '1',
                time: "4545"
            }, {
                name: 'fdasf',
                num: '1',
                time: "4545"
            }, {
                name: '积分10分',
                num: '1',
                time: "4545"
            }, {
                name: 'fdasf',
                num: '1',
                time: "4545"
            }, {
                name: 'fdasf',
                num: '1',
                time: "4545"
            }, {
                name: 'fdasf',
                num: '1',
                time: "4545"
            }, ],
        }
    },
     /*定义时间过滤器*/
    filters: {
        timeFilter(tim) {
            var oDate = new Date(tim * 1000);
            var getMonth = oDate.getMonth() + 1;
            getMonth = getMonth > 9 ? getMonth : '0' + getMonth;
            var getDate = oDate.getDate() > 9 ? oDate.getDate() : '0' + oDate.getDate();
            return oDate.getFullYear() + "-" + getMonth + "-" + getDate;
        }
    },
    methods: {

        test: function() {

        },
    },
    mounted: function() {
        var myScroll = new IScroll('#wrapper');
        document.addEventListener('touchmove', function(e) {
            console.log('getit');
            e.preventDefault();
        }, false);
    },
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss' >
/* 弹出层start*/
body {
    /* On modern browsers, prevent the whole page to bounce */
    overflow: hidden;
}

#wrapper {
    position: relative;
    width: 300px;
    height: 100px;
    overflow: hidden;

    /* Prevent native touch events on Windows */
    -ms-touch-action: none;

    /* Prevent the callout on tap-hold and text selection */
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;

    /* Prevent text resize on orientation change, useful for web-apps */
    -webkit-text-size-adjust: none;
    -moz-text-size-adjust: none;
    -ms-text-size-adjust: none;
    -o-text-size-adjust: none;
    text-size-adjust: none;
}

#scroller {
    position: absolute;

    /* Prevent elements to be highlighted on tap */
    -webkit-tap-highlight-color: rgba(0,0,0,0);

    /* Put the scroller into the HW Compositing layer right from the start */
    -webkit-transform: translateZ(0);
    -moz-transform: translateZ(0);
    -ms-transform: translateZ(0);
    -o-transform: translateZ(0);
    transform: translateZ(0);
}
/* 弹出层end*/
</style>
