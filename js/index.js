window.addEventListener('load', function () {
    var jd = new JD();
    jd.searchGradual();
    jd.downTime();
    jd.slide()
})



// 创建JD对象
var JD = function () {

};

// 原型中添加方法
JD.prototype = {
    // 顶部收索框的渐变功能
    searchGradual: function () {
        // 1.给滚动条添加事件
        window.addEventListener('scroll', scrollFun);
        scrollFun();

        function scrollFun() {
            // 2.获取滚动条距离
            var scroolTop = document.body.scrollTop || document.documentElement.scrollTop;
            //console.log(scroolTop);
            // 获取轮播图的高度
            var slideHeight = document.querySelector('#slide').offsetHeight;
            //console.log(slideHeight);
            var opacity = 0;
            // 当小于高度时
            if (scroolTop < slideHeight) {
                opacity = scroolTop / slideHeight;
                //console.log(opacity);
            } else {
                opacity = 1;
            }
            document.querySelector('#header').style.backgroundColor = 'rgba(222,24,27,' + opacity + ')';
        }
    },

    // 倒计时的功能
    downTime: function () {
        // 获取未来时间   就是需倒计时的终点时间
        var futureTime = new Date(2018, 8, 1, 14, 00, 00);
        //console.log(futureTime);

        // 获取当前时间
        var nowTime = new Date();
        //console.log(nowTime);
        // 求出未来时间-当前时间的时间差的秒数（默认是毫秒数）
        var time = Math.floor((futureTime - nowTime) / 1000)
        // 获取所有的span标签
        var spans = document.querySelectorAll('.seckill-time span')

        // 设置一个定时器
        var timeId = setInterval(function () {
            // 每次让毫秒数减一
            time--;
            if (time <= 0) {
                time = 0;
                clearInterval(timeId);
            }
            // 时间
            var hour = Math.floor(time / 3600);
            // 分钟
            var minute = Math.floor(time % 3600 / 60);
            // 秒
            var secound = Math.floor(time % 60);
            // 展示在界面上
            spans[0].innerHTML = Math.floor(hour / 10);
            spans[1].innerHTML = Math.floor(hour % 10);
            spans[3].innerHTML = Math.floor(minute / 10);
            spans[4].innerHTML = Math.floor(minute % 10);
            spans[6].innerHTML = Math.floor(secound / 10);
            spans[7].innerHTML = Math.floor(secound % 10);
        }, 1000)

    },
    // 轮播图的功能
    slide: function () {
        var mySwiper = new Swiper('.swiper-container', {
            //自动轮播图的参数
            autoplay: {
                //自动轮播图的间隔时间
                delay: 1000,
                //在手指滑动后是否要再次开启自动轮播图
                disableOnInteraction: false,
            },
            //无缝轮播图参数
            loop: true,
            //初始化小圆点 注意页面需要有这个容器
            pagination: {
                el: '.swiper-pagination',
            }
        })
    }


}