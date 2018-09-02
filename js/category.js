window.addEventListener('load', function () {
    var jd = new JD()
    jd.categoryLeftSwiper()
    jd.categoryLeftClick()
    jd.categoryRightSwiper()
})

var JD = function () {

}

JD.prototype = {
    // 左侧的滑动事件
    categoryLeftSwiper: function () {
        var swiper = new Swiper('.category-left .swiper-container', {
            //垂直方向滑动
            direction: 'vertical',
            //支持多个子元素一起滑动
            slidesPerView: 'auto',
            // 一次性滑动多个子元素
            freeMode: true,

            //支持鼠标滚轮
            mousewheel: true
        });
    },
    // 左侧分类的点击事件
    categoryLeftClick: function () {
        // 获取元素
        var slideUl = document.querySelector('.category-left .swiper-slide');
        // 2.给所有的li添加一个索引
        var lis = slideUl.children;
        for (var i = 0; i < lis.length; i++) {
            lis[i].index = i;
        }
        // 1.给li添加点击事件
        slideUl.addEventListener('click', function (e) {
            // console.log(e);
            //   3.给所有的li删除active类名
            for (var i = 0; i < lis.length; i++) {
                lis[i].classList.remove('active');
            }
            // 当前事件添加类名
            e.target.parentNode.classList.add('active');
            // 获取当前点击li的索引和高度
            var liHeight = e.target.parentNode.offsetHeight;
            var liIndex = e.target.parentNode.index;
            // console.log(liHeight);
            // console.log(liIndex);
            // 计算当前要位移的距离
            var tranlateY = -liIndex * liHeight;
            // 计算最大位移的距离   父元素固定高度 - 子元素不固定高度
            var maxTranslateY = document.querySelector('.category-left').offsetHeight - slideUl.offsetHeight;

            // 判断如果当前位移的距离小于了最大位移的距离   就设置最大的位移距离
            if (tranlateY < maxTranslateY) {
                tranlateY = maxTranslateY
            }
            // 把位移距离设置到滑动的swiper-wrapper身上
            document.querySelector('.category-left .swiper-wrapper').style.transform = 'translate3d(0px,' + tranlateY + 'px,0px)';

            // 吸顶的时候添加过渡效果
            document.querySelector('.category-left .swiper-wrapper').style.transition = 'all 0.3s';
        })

    },
    // 右侧的滑动事件
    categoryRightSwiper: function () {
        var swiper = new Swiper('.category-right .swiper-container', {
            //垂直方向滑动
            direction: 'vertical',
            //支持多个子元素一起滑动
            slidesPerView: 'auto',
            // 一次性滑动多个子元素
            freeMode: true,

            //支持鼠标滚轮
            mousewheel: true
        });
    }

}