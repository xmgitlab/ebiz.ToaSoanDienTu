@extends('page.master')
@section('title','Trang chủ')

@section('content')
<main id="index-page">
    <script>
        $(document).ready(function(){
            // Remove breadcrumb in home page
            $('.breadcrumb').remove();
            $('.coverage .older-news').each(function () {
                $(this).find('.item:eq(1)').addClass('second');
                $(this).find('.item:eq(2)').addClass('third');
            });
            var divs = $(".coverage .older-news .item");
            for (var i = 0; i < divs.length; i += 2) {
                divs.slice(i, i + 2).wrapAll("<div class='group'></div>");
            }

            $('.coverage .older-news .box-img img').each(function(){
                var getImgSrc = $(this).attr('src');
                var x = getImgSrc.replace('/thumbnail','');
                $(this).attr('src',x)
            })

            $('.layout1').each(function () {
                $(this).find('li:eq(6)').addClass('fifth');
                $(this).find('li:eq(7)').addClass('sixth');
            });
            $('.layout3').each(function () {
                $(this).find('li:eq(2)').addClass('third');
                $(this).find('li:eq(3)').addClass('forth');
            });

            $('.author .cat-body').bxSlider({
                minSlides: 1,
                maxSlides: 1,
                pager: false,
                moveSlides: 1,
                auto: true,
                pause: 8000,
                nextText: '<i class="fas fa-angle-right"></i>',
                prevText: '<i class="fas fa-angle-left"></i>',
                autoHover: true,
                touchEnabled: false
            });

            if ($('#my-video').length !== 0){
                var myPlayer = videojs('my-video');
            }

            // Nếu người dùng muốn cố ý tạm dừng video
            $('.video-js').click(function(){
                $(this).addClass('vjs-forcedPause')
            })
            $('.vjs-play-control').click(function(){
                $(this).parent().parent().addClass('vjs-forcedPause')
            })

            $(window).scroll(function () {
                if ($('.vjs-forcedPause').length == 0) { // Kiểm tra nếu người dùng có cố ý muốn dừng video không

                    if ($(this).scrollTop() + window.visualViewport.height > ($("#video-title").offset().top)) {

                        if (!myPlayer.hasStarted()) { // Nếu player đc khởi tạo lần đầu thì dùng hàm autoplay()
                            myPlayer.autoplay('muted');
                        } else { // Còn player đã từng đc khởi tạo thì dùng hàm play();
                            myPlayer.play();
                        }
                    } else {
                        myPlayer.pause();
                    }

                    if ($(this).scrollTop() > ($("#my-video").offset().top)) {
                        myPlayer.pause();
                    }
                }
            });

            // Tạo thanh Title Bar
            // Lấy base class Component từ thư viện
            var Component = videojs.getComponent('Component');

            // Từ base vừa lấy, extend ra một thành phần là TitleBar
            var TitleBar = videojs.extend(Component, {
                constructor: function(player, options) {
                    Component.apply(this, arguments);

                    if (options.text) {
                        this.updateTextContent(options.text);
                    }
                },
                createEl: function(){
                    return videojs.createEl('div', {
                        className: 'vjs-title-bar'
                    });
                },
                updateTextContent: function(text){
                    // Nếu title không được cung cấp, thì mặc định title là Unknown
                    if (typeof text !== 'string') {
                        text = 'Title Unknown';
                    }

                    // Use Videojs DOM
                    videojs.emptyEl(this.el());
                    videojs.appendContent(this.el(), text);
                }
            });

            // Đăng ký component vừa tạo ra với VideoJS để sử dụng trong Player
            videojs.registerComponent('TitleBar', TitleBar);

            myPlayer.addChild('TitleBar', {text: $('#video-title').text()});
        })
    </script>
    <div class="main-content">
    <style>
    .banner-top-main-content{
        text-align: center;
        margin-top: -15px;
    }
    </style>
    <div class="banner banner-top-main-content">
        <div class="wrapper">
            <div class="banner-item">
                <a href="https://thoibaonganhang.vn/adsfw/1/0/MTEy&amp;mode=default&amp;zone=banner-top-main-content" class="__ads_click" target="_blank">
                <img border="0" src="https://thoibaonganhang.vn/stores/ads_data/thanhlm/032021/05/08/3657_Baner_70_nam_TBNH_OK_2.png" alt="banner-tet" style="vertical-align:middle;" width="1190" height="90"></a>      
            </div>
        </div>
    </div>
    <div class="main-cate coverage">
        <div class="wrapper">
            <ul class="list-news main-news">
                <li>
                    <a href="https://thoibaonganhang.vn/thuong-truc-chinh-phu-thong-nhat-phan-bo-von-ngan-sach-trung-han-112423.html" class="box-img" title="Thường trực Chính phủ thống nhất phân bổ vốn ngân sách trung hạn">
                    <img src="https://thoibaonganhang.vn/stores/news_dataimages/canhnq/032021/11/14/thuong-truc-chinh-phu-thong-nhat-phan-bo-von-ngan-sach-trung-han-05-.1311.JPG" alt="Thường trực Chính phủ thống nhất phân bổ vốn ngân sách trung hạn">
                    <span class="category-name">Sự kiện</span>
                    </a>
                    <div class="box-title">
                        <a href="https://thoibaonganhang.vn/thuong-truc-chinh-phu-thong-nhat-phan-bo-von-ngan-sach-trung-han-112423.html" class="title" title="Thường trực Chính phủ thống nhất phân bổ vốn ngân sách trung hạn">
                        Thường trực Chính phủ thống nhất phân bổ vốn ngân sách trung hạn                            </a>
                    </div>
                </li>
            </ul>
            <div class="list-news older-news clearfix">
                <div class="group">
                    <div class="item"> 
                        <a href="https://thoibaonganhang.vn/kinh-te-phat-trien-ben-vung-phai-dua-vao-doi-ngu-doanh-nghiep-dan-toc-112366.html" class="box-img" title="Kinh tế phát triển bền vững: Phải dựa vào đội ngũ doanh nghiệp dân tộc">
                        <img src="https://thoibaonganhang.vn/stores/news_dataimages/khaitq/032021/11/10/5406_nha-may-o-to-viet-nam.jpg" alt="Kinh tế phát triển bền vững: Phải dựa vào đội ngũ doanh nghiệp dân tộc">
                        <span class="category-name">Doanh nghiệp - doanh nhân</span>
                        </a>
                        <div class="box-title">
                            <a href="https://thoibaonganhang.vn/kinh-te-phat-trien-ben-vung-phai-dua-vao-doi-ngu-doanh-nghiep-dan-toc-112366.html" class="title" title="Kinh tế phát triển bền vững: Phải dựa vào đội ngũ doanh nghiệp dân tộc">
                            Kinh tế phát triển bền vững: Phải dựa vào đội ngũ doanh nghiệp dân tộc                            </a>
                        </div>
                    </div>
                    <div class="item second"> 
                        <a href="https://thoibaonganhang.vn/hsbc-lam-phat-nam-2021-se-quanh-muc-3-112417.html" class="box-img" title="HSBC: Lạm phát năm 2021 sẽ quanh mức 3%">
                        <img src="https://thoibaonganhang.vn/stores/news_dataimages/minhvl/032021/11/09/2924_image001.jpg" alt="HSBC: Lạm phát năm 2021 sẽ quanh mức 3%">
                        <span class="category-name">Sự kiện</span>
                        </a>
                        <div class="box-title">
                            <a href="https://thoibaonganhang.vn/hsbc-lam-phat-nam-2021-se-quanh-muc-3-112417.html" class="title" title="HSBC: Lạm phát năm 2021 sẽ quanh mức 3%">
                            HSBC: Lạm phát năm 2021 sẽ quanh mức 3%                            </a>
                        </div>
                    </div>
                </div>
                <div class="group">
                    <div class="item"> 
                        <a href="https://thoibaonganhang.vn/kinh-te-phat-trien-ben-vung-phai-dua-vao-doi-ngu-doanh-nghiep-dan-toc-112366.html" class="box-img" title="Kinh tế phát triển bền vững: Phải dựa vào đội ngũ doanh nghiệp dân tộc">
                        <img src="https://thoibaonganhang.vn/stores/news_dataimages/khaitq/032021/11/10/5406_nha-may-o-to-viet-nam.jpg" alt="Kinh tế phát triển bền vững: Phải dựa vào đội ngũ doanh nghiệp dân tộc">
                        <span class="category-name">Doanh nghiệp - doanh nhân</span>
                        </a>
                        <div class="box-title">
                            <a href="https://thoibaonganhang.vn/kinh-te-phat-trien-ben-vung-phai-dua-vao-doi-ngu-doanh-nghiep-dan-toc-112366.html" class="title" title="Kinh tế phát triển bền vững: Phải dựa vào đội ngũ doanh nghiệp dân tộc">
                            Kinh tế phát triển bền vững: Phải dựa vào đội ngũ doanh nghiệp dân tộc                            </a>
                        </div>
                    </div>
                    <div class="item second"> 
                        <a href="https://thoibaonganhang.vn/hsbc-lam-phat-nam-2021-se-quanh-muc-3-112417.html" class="box-img" title="HSBC: Lạm phát năm 2021 sẽ quanh mức 3%">
                        <img src="https://thoibaonganhang.vn/stores/news_dataimages/minhvl/032021/11/09/2924_image001.jpg" alt="HSBC: Lạm phát năm 2021 sẽ quanh mức 3%">
                        <span class="category-name">Sự kiện</span>
                        </a>
                        <div class="box-title">
                            <a href="https://thoibaonganhang.vn/hsbc-lam-phat-nam-2021-se-quanh-muc-3-112417.html" class="title" title="HSBC: Lạm phát năm 2021 sẽ quanh mức 3%">
                            HSBC: Lạm phát năm 2021 sẽ quanh mức 3%                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="main-cate list-cate clearfix" style="margin-bottom: 20px;">
        <div class="wrapper">
            <div class="w300 left">
                <div class="category banner300">
                    <div class="banner-item">
                        <a href="https://thoibaonganhang.vn/adsfw/1/0/MTAz&amp;mode=default&amp;zone=banner-300px-tin-doc-nhieu" class="__ads_click" target="_blank"><img border="0" src="https://thoibaonganhang.vn/stores/ads_data/thanhlm/122019/11/07/2628_Logo-Co-opBank-quy-chuan.jpg" alt="coopbank" style="vertical-align:middle;" width="300" height="120"></a>                        </div>
                    <div class="banner-item">
                        <a href="https://thoibaonganhang.vn/adsfw/1/0/ODU=&amp;mode=default&amp;zone=banner-300px-tin-doc-nhieu" class="__ads_click" target="_blank"><img border="0" src="https://thoibaonganhang.vn/stores/ads_data/thanhlm/052018/15/09/b143d67ca0682f62e28adf2ce1160ec9_Vietcombank_moi.jpg" alt="vietcombank-300x120" style="vertical-align:middle;" width="300" height="130"></a>                        </div>
                    <div class="banner-item">
                        <a href="https://thoibaonganhang.vn/adsfw/1/0/NjU=&amp;mode=default&amp;zone=banner-300px-tin-doc-nhieu" class="__ads_click" target="_blank"><img border="0" src="https://thoibaonganhang.vn/stores/ads_data/thanhlm/092016/30/16/3f742596a51393b11527436841397162_Logo_BIDV_300_x_120.gif" alt="logo-bidv-300x120" style="vertical-align:middle;" width="300" height="130"></a>                        </div>
                </div>
                <div class="category">
                @include('page.tindocnhieu')
                </div>
                <div class="author">
                    <div class="cat-head">
                        <span class="cat-name">Góc nhìn chuyên gia</span>
                    </div>
                    <div class="bx-wrapper" style="max-width: 100%;">
                        <div class="bx-viewport" aria-live="polite" style="width: 100%; overflow: hidden; position: relative; height: 355px;">
                            <div class="cat-body list-news" style="width: 5215%; position: relative; transition-duration: 0s; transform: translate3d(-300px, 0px, 0px);">
                                <div class="author-item bx-clone" style="float: left; list-style: none; position: relative; width: 300px;" aria-hidden="true">
                                    <a class="author-img" href="https://thoibaonganhang.vn/dat-nuoc-can-nhung-nguoi-dam-nghi-dam-lam-108645.html" title="Đất nước cần những người dám nghĩ, dám làm" style="display:block; width:100%">
                                        <img src="https://thoibaonganhang.vn/stores/news_dataimages/minhvl/112020/13/09/4423_3a183_Copy.jpg" alt="Đất nước cần những người dám nghĩ, dám làm" style="width:100%">
                                    </a>
                                    <div class="pad">
                                        <span class="text">
                                            <img class="open" src="{{asset('page/images/open.png')}}" alt="">
                                            <img class="close" src="{{asset('page/images/close.png')}}" alt="">
                                            Nguồn nhân lực tới đây còn phải là những con người hành động, dám nghĩ, dám làm
                                        </span>                                  
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="bx-controls bx-has-controls-direction">
                        <div class="bx-controls-direction">
                        <a class="bx-prev" href=""><i class="fas fa-angle-left"></i></a>
                        <a class="bx-next" href=""><i class="fas fa-angle-right"></i></a>
                        </div>
                        </div>
                    </div>
                </div>
                <div class="category banner300" style="margin-bottom: 0;">
                    <div class="banner-item" style="margin-bottom: 0;">
                    <a href="https://thoibaonganhang.vn/adsfw/1/0/MTI2&amp;mode=default&amp;zone=qc-tu-van-tai-chinh" class="__ads_click" target="_blank"><img border="0" src="https://thoibaonganhang.vn/stores/ads_data/thanhlm/122020/11/15/2811_PwC_banner_-_FS_column.jpg" alt="pwc" style="vertical-align:middle;" width="300" height="120"></a>                        </div>
                </div>
            </div>
            <div class="w559 left">
                <ul class="list-news layout1">
                    <li>
                        <a href="https://thoibaonganhang.vn/tp-ho-chi-minh-tin-dung-thuc-tang-truong-112362.html" class="box-img" title="TP. Hồ Chí Minh: Tín dụng thúc tăng trưởng&nbsp;">
                            <img src="https://thoibaonganhang.vn/stores/news_dataimages/minhvl/032021/09/20/medium/1936_1732981uhua_SJKH.jpg" alt="TP. Hồ Chí Minh: Tín dụng thúc tăng trưởng&nbsp;">
                        </a>
                        <div class="box-text">
                            <div class="box-title">
                                <a href="https://thoibaonganhang.vn/tp-ho-chi-minh-tin-dung-thuc-tang-truong-112362.html" class="title" title="TP. Hồ Chí Minh: Tín dụng thúc tăng trưởng&nbsp;">
                                TP. Hồ Chí Minh: Tín dụng thúc tăng trưởng&nbsp;                                                                            </a>
                            </div>
                            <div class="box-meta">
                                <a href="https://thoibaonganhang.vn/tai-chinh-tien-te" class="category-name">Tài chính - Tiền tệ</a><span class="publish-time"><i class="far fa-clock"></i> <span class="format_time"> 1 giờ 26 phút</span></span>
                            </div>
                        </div>
                    </li>
                    <li>
                        <a href="https://thoibaonganhang.vn/dau-tu-san-bay-can-co-trong-diem-112372.html" class="box-img" title="Đầu tư sân bay cần có trọng điểm">
                            <img src="https://thoibaonganhang.vn/stores/news_dataimages/minhvl/032021/09/18/medium/1547_8b-30_Copy.jpg" alt="Đầu tư sân bay cần có trọng điểm">
                        </a>
                        <div class="box-text">
                            <div class="box-title">
                                <a href="https://thoibaonganhang.vn/dau-tu-san-bay-can-co-trong-diem-112372.html" class="title" title="Đầu tư sân bay cần có trọng điểm">
                                    Đầu tư sân bay cần có trọng điểm                                                                            </a>
                            </div>
                            <div class="box-meta">
                                <a href="https://thoibaonganhang.vn/van-hoa-xa-hoi" class="category-name">Văn hóa - xã hội</a><span class="publish-time"><i class="far fa-clock"></i> <span class="format_time"> 1 giờ 27 phút</span></span>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="w300 right">
                <div class="category banner300">
                    <div class="banner banner-item">
                    <a href="https://thoibaonganhang.vn/adsfw/1/0/NzM=&amp;mode=default&amp;zone=banner-300px-main-cate-right" class="__ads_click" target="_blank"><img border="0" src="https://thoibaonganhang.vn/stores/ads_data/thanhlm/052017/23/14/aa19037c445c3b4258dfe7b7ccb0f455_banner.jpg" alt="sun-group" style="vertical-align:middle;" width="300" height="200"></a>                        </div>
                    <div class="banner banner-item">
                    <a href="https://thoibaonganhang.vn/adsfw/1/0/MTA4&amp;mode=default&amp;zone=banner-300px-main-cate-right" class="__ads_click" target="_blank"><img border="0" src="https://thoibaonganhang.vn/stores/ads_data/thanhlm/082020/25/10/4604_google_ad_300x250.png" alt="ban-viet" style="vertical-align:middle;" width="300" height="250"></a>                        </div>
                    <div class="banner banner-item">
                    <a href="https://thoibaonganhang.vn/adsfw/1/0/NTc=&amp;mode=default&amp;zone=banner-300px-main-cate-right" class="__ads_click" target="_blank"><img border="0" src="https://thoibaonganhang.vn/stores/ads_data/thanhlm/012021/06/15/5319_QC_CTKM_Nhan_uu_dai_Gianh_thanh_cong.jpg" alt="bac-a-bank-center" style="vertical-align:middle;" width="300" height="250"></a>                        </div>
                    <div class="banner banner-item">
                    <a href="https://thoibaonganhang.vn/adsfw/1/0/NzI=&amp;mode=default&amp;zone=banner-300px-main-cate-right" class="__ads_click" target="_blank"><img border="0" src="https://thoibaonganhang.vn/stores/ads_data/thanhlm/072020/28/11/5706_Vfresh_Kv_mixfruit_FA_11.2018_900x900.jpg" alt="vinamilk" style="vertical-align:middle;" width="300" height="250"></a>                        </div>
                </div>@include('page.tigia')
            </div>           
        </div>
    </div>
    <div class="main-cate banner980" style="margin-bottom: 20px;">
        <div class="wrapper"></div>
    </div>
    <div class="main-cate video">
            <div class="wrapper">
                <div class="cat-head">
                    <a href="https://thoibaonganhang.vn/video" title="Video" class="cat-name">Video</a>
                </div>
                <div class="cat-body clearfix">
                    <ul class="main-news list-news">
                                                <li class="item">
                            <div class="video-frame">
                                                                <div poster="https://thoibaonganhang.vn/stores/video_data/thanhlm/032021/04/14/TB_PHUONG_41.jpg" id="my-video" class="video-js my-video-dimensions vjs-controls-enabled vjs-workinghover vjs-v7 vjs-has-started vjs-paused vjs-user-inactive" tabindex="-1" role="region" lang="vi" aria-label="Video Player"><video class="vjs-tech" id="my-video_html5_api" poster="https://thoibaonganhang.vn/stores/video_data/thanhlm/032021/04/14/TB_PHUONG_41.jpg" tabindex="-1" role="application" muted="muted">
                                    <source src="https://thoibaonganhang.vn/stores/video_data/thanhlm/032021/04/14/TB_PHUONG.mp4" type="video/mp4">
                                    <source src="https://thoibaonganhang.vn/stores/video_data/thanhlm/032021/04/14/TB_PHUONG.mp4" type="video/mov">
                                    <p class="vjs-no-js">
                                        Để xem video này, vui lòng bật JavaScript trên trình duyệt của bạn hoặc sử dụng trình duyệt khác
                                        <a href="https://videojs.com/html5-video-support/" target="_blank" class="vjs-hidden" hidden="hidden">hỗ trợ HTML5 video</a>
                                    </p>
                                </video><div class="vjs-poster" tabindex="-1" aria-disabled="false" style="background-image: url(&quot;https://thoibaonganhang.vn/stores/video_data/thanhlm/032021/04/14/TB_PHUONG_41.jpg&quot;);"></div><div class="vjs-text-track-display" aria-live="off" aria-atomic="true"><div style="position: absolute; inset: 0px; margin: 1.5%;"></div></div><div class="vjs-loading-spinner" dir="ltr"><span class="vjs-control-text">Video Player is loading.</span></div><button class="vjs-big-play-button" type="button" title="Play Video" aria-disabled="false"><span aria-hidden="true" class="vjs-icon-placeholder"></span><span class="vjs-control-text" aria-live="polite">Play Video</span></button><div class="vjs-control-bar" dir="ltr"><button class="vjs-play-control vjs-control vjs-button vjs-paused" type="button" title="Play" aria-disabled="false"><span aria-hidden="true" class="vjs-icon-placeholder"></span><span class="vjs-control-text" aria-live="polite">Play</span></button><div class="vjs-volume-panel vjs-control vjs-volume-panel-horizontal"><button class="vjs-mute-control vjs-control vjs-button vjs-vol-0" type="button" title="Unmute" aria-disabled="false"><span aria-hidden="true" class="vjs-icon-placeholder"></span><span class="vjs-control-text" aria-live="polite">Unmute</span></button><div class="vjs-volume-control vjs-control vjs-volume-horizontal"><div tabindex="0" class="vjs-volume-bar vjs-slider-bar vjs-slider vjs-slider-horizontal" role="slider" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" aria-label="Volume Level" aria-live="polite" aria-valuetext="0%"><div class="vjs-volume-level" style="width: 0%;"><span class="vjs-control-text"></span></div></div></div></div><div class="vjs-current-time vjs-time-control vjs-control"><span class="vjs-control-text" role="presentation">Current Time&nbsp;</span><span class="vjs-current-time-display" aria-live="off" role="presentation">0:00</span></div><div class="vjs-time-control vjs-time-divider" aria-hidden="true"><div><span>/</span></div></div><div class="vjs-duration vjs-time-control vjs-control"><span class="vjs-control-text" role="presentation">Duration&nbsp;</span><span class="vjs-duration-display" aria-live="off" role="presentation">2:40</span></div><div class="vjs-progress-control vjs-control"><div tabindex="0" class="vjs-progress-holder vjs-slider vjs-slider-horizontal" role="slider" aria-valuenow="0.00" aria-valuemin="0" aria-valuemax="100" aria-label="Progress Bar" aria-valuetext="0:00 of 2:40"><div class="vjs-load-progress" style="width: 8.24863%;"><span class="vjs-control-text"><span>Loaded</span>: <span class="vjs-control-text-loaded-percentage">8.25%</span></span><div style="left: 0%; width: 100%;"></div></div><div class="vjs-mouse-display"><div class="vjs-time-tooltip" aria-hidden="true"></div></div><div class="vjs-play-progress vjs-slider-bar" aria-hidden="true" style="width: 0%;"><div class="vjs-time-tooltip" aria-hidden="true" style="right: -17.7375px;">0:00</div></div></div></div><div class="vjs-live-control vjs-control vjs-hidden"><div class="vjs-live-display" aria-live="off"><span class="vjs-control-text">Stream Type&nbsp;</span>LIVE</div></div><button class="vjs-seek-to-live-control vjs-control vjs-at-live-edge" type="button" title="Seek to live, currently playing live" aria-disabled="true"><span aria-hidden="true" class="vjs-icon-placeholder"></span><span class="vjs-control-text" aria-live="polite">Seek to live, currently playing live</span><span class="vjs-seek-to-live-text" aria-hidden="true">LIVE</span></button><div class="vjs-remaining-time vjs-time-control vjs-control"><span class="vjs-control-text" role="presentation">Remaining Time&nbsp;</span><span aria-hidden="true">-</span><span class="vjs-remaining-time-display" aria-live="off" role="presentation">2:40</span></div><div class="vjs-custom-control-spacer vjs-spacer ">&nbsp;</div><div class="vjs-playback-rate vjs-menu-button vjs-menu-button-popup vjs-control vjs-button vjs-hidden"><button class="vjs-playback-rate vjs-menu-button vjs-menu-button-popup vjs-button" type="button" aria-disabled="false" title="Playback Rate" aria-haspopup="true" aria-expanded="false"><span aria-hidden="true" class="vjs-icon-placeholder"></span><span class="vjs-control-text" aria-live="polite">Playback Rate</span></button><div class="vjs-menu"><ul class="vjs-menu-content" role="menu"></ul></div><div class="vjs-playback-rate-value">1x</div></div><div class="vjs-chapters-button vjs-menu-button vjs-menu-button-popup vjs-control vjs-button vjs-hidden"><button class="vjs-chapters-button vjs-menu-button vjs-menu-button-popup vjs-button" type="button" aria-disabled="false" title="Chapters" aria-haspopup="true" aria-expanded="false"><span aria-hidden="true" class="vjs-icon-placeholder"></span><span class="vjs-control-text" aria-live="polite">Chapters</span></button><div class="vjs-menu"><ul class="vjs-menu-content" role="menu"><li class="vjs-menu-title" tabindex="-1">Chapters</li></ul></div></div><div class="vjs-descriptions-button vjs-menu-button vjs-menu-button-popup vjs-control vjs-button vjs-hidden"><button class="vjs-descriptions-button vjs-menu-button vjs-menu-button-popup vjs-button" type="button" aria-disabled="false" title="Descriptions" aria-haspopup="true" aria-expanded="false"><span aria-hidden="true" class="vjs-icon-placeholder"></span><span class="vjs-control-text" aria-live="polite">Descriptions</span></button><div class="vjs-menu"><ul class="vjs-menu-content" role="menu"><li class="vjs-menu-item vjs-selected" tabindex="-1" role="menuitemradio" aria-disabled="false" aria-checked="true"><span class="vjs-menu-item-text">descriptions off</span><span class="vjs-control-text" aria-live="polite">, selected</span></li></ul></div></div><div class="vjs-subs-caps-button vjs-menu-button vjs-menu-button-popup vjs-control vjs-button vjs-hidden"><button class="vjs-subs-caps-button vjs-menu-button vjs-menu-button-popup vjs-button" type="button" aria-disabled="false" title="Subtitles" aria-haspopup="true" aria-expanded="false"><span aria-hidden="true" class="vjs-icon-placeholder"></span><span class="vjs-control-text" aria-live="polite">Subtitles</span></button><div class="vjs-menu"><ul class="vjs-menu-content" role="menu"><li class="vjs-menu-item vjs-texttrack-settings" tabindex="-1" role="menuitem" aria-disabled="false"><span class="vjs-menu-item-text">subtitles settings</span><span class="vjs-control-text" aria-live="polite">, opens subtitles settings dialog</span></li><li class="vjs-menu-item vjs-selected" tabindex="-1" role="menuitemradio" aria-disabled="false" aria-checked="true"><span class="vjs-menu-item-text">subtitles off</span><span class="vjs-control-text" aria-live="polite">, selected</span></li></ul></div></div><div class="vjs-audio-button vjs-menu-button vjs-menu-button-popup vjs-control vjs-button vjs-hidden"><button class="vjs-audio-button vjs-menu-button vjs-menu-button-popup vjs-button" type="button" aria-disabled="false" title="Audio Track" aria-haspopup="true" aria-expanded="false"><span aria-hidden="true" class="vjs-icon-placeholder"></span><span class="vjs-control-text" aria-live="polite">Audio Track</span></button><div class="vjs-menu"><ul class="vjs-menu-content" role="menu"></ul></div></div><button class="vjs-picture-in-picture-control vjs-control vjs-button" type="button" title="Picture-in-Picture" aria-disabled="false"><span aria-hidden="true" class="vjs-icon-placeholder"></span><span class="vjs-control-text" aria-live="polite">Picture-in-Picture</span></button><button class="vjs-fullscreen-control vjs-control vjs-button" type="button" title="Fullscreen" aria-disabled="false"><span aria-hidden="true" class="vjs-icon-placeholder"></span><span class="vjs-control-text" aria-live="polite">Fullscreen</span></button></div><div class="vjs-error-display vjs-modal-dialog vjs-hidden " tabindex="-1" aria-describedby="my-video_component_404_description" aria-hidden="true" aria-label="Modal Window" role="dialog"><p class="vjs-modal-dialog-description vjs-control-text" id="my-video_component_404_description">This is a modal window.</p><div class="vjs-modal-dialog-content" role="document"></div></div><div class="vjs-modal-dialog vjs-hidden  vjs-text-track-settings" tabindex="-1" aria-describedby="my-video_component_410_description" aria-hidden="true" aria-label="Caption Settings Dialog" role="dialog"><p class="vjs-modal-dialog-description vjs-control-text" id="my-video_component_410_description">Beginning of dialog window. Escape will cancel and close the window.</p><div class="vjs-modal-dialog-content" role="document"><div class="vjs-track-settings-colors"><fieldset class="vjs-fg-color vjs-track-setting"><legend id="captions-text-legend-my-video_component_410">Text</legend><label id="captions-foreground-color-my-video_component_410" class="vjs-label">Color</label><select aria-labelledby="captions-text-legend-my-video_component_410 captions-foreground-color-my-video_component_410"><option id="captions-foreground-color-my-video_component_410-White" value="#FFF" aria-labelledby="captions-text-legend-my-video_component_410 captions-foreground-color-my-video_component_410 captions-foreground-color-my-video_component_410-White">White</option><option id="captions-foreground-color-my-video_component_410-Black" value="#000" aria-labelledby="captions-text-legend-my-video_component_410 captions-foreground-color-my-video_component_410 captions-foreground-color-my-video_component_410-Black">Black</option><option id="captions-foreground-color-my-video_component_410-Red" value="#F00" aria-labelledby="captions-text-legend-my-video_component_410 captions-foreground-color-my-video_component_410 captions-foreground-color-my-video_component_410-Red">Red</option><option id="captions-foreground-color-my-video_component_410-Green" value="#0F0" aria-labelledby="captions-text-legend-my-video_component_410 captions-foreground-color-my-video_component_410 captions-foreground-color-my-video_component_410-Green">Green</option><option id="captions-foreground-color-my-video_component_410-Blue" value="#00F" aria-labelledby="captions-text-legend-my-video_component_410 captions-foreground-color-my-video_component_410 captions-foreground-color-my-video_component_410-Blue">Blue</option><option id="captions-foreground-color-my-video_component_410-Yellow" value="#FF0" aria-labelledby="captions-text-legend-my-video_component_410 captions-foreground-color-my-video_component_410 captions-foreground-color-my-video_component_410-Yellow">Yellow</option><option id="captions-foreground-color-my-video_component_410-Magenta" value="#F0F" aria-labelledby="captions-text-legend-my-video_component_410 captions-foreground-color-my-video_component_410 captions-foreground-color-my-video_component_410-Magenta">Magenta</option><option id="captions-foreground-color-my-video_component_410-Cyan" value="#0FF" aria-labelledby="captions-text-legend-my-video_component_410 captions-foreground-color-my-video_component_410 captions-foreground-color-my-video_component_410-Cyan">Cyan</option></select><span class="vjs-text-opacity vjs-opacity"><label id="captions-foreground-opacity-my-video_component_410" class="vjs-label">Transparency</label><select aria-labelledby="captions-text-legend-my-video_component_410 captions-foreground-opacity-my-video_component_410"><option id="captions-foreground-opacity-my-video_component_410-Opaque" value="1" aria-labelledby="captions-text-legend-my-video_component_410 captions-foreground-opacity-my-video_component_410 captions-foreground-opacity-my-video_component_410-Opaque">Opaque</option><option id="captions-foreground-opacity-my-video_component_410-SemiTransparent" value="0.5" aria-labelledby="captions-text-legend-my-video_component_410 captions-foreground-opacity-my-video_component_410 captions-foreground-opacity-my-video_component_410-SemiTransparent">Semi-Transparent</option></select></span></fieldset><fieldset class="vjs-bg-color vjs-track-setting"><legend id="captions-background-my-video_component_410">Background</legend><label id="captions-background-color-my-video_component_410" class="vjs-label">Color</label><select aria-labelledby="captions-background-my-video_component_410 captions-background-color-my-video_component_410"><option id="captions-background-color-my-video_component_410-Black" value="#000" aria-labelledby="captions-background-my-video_component_410 captions-background-color-my-video_component_410 captions-background-color-my-video_component_410-Black">Black</option><option id="captions-background-color-my-video_component_410-White" value="#FFF" aria-labelledby="captions-background-my-video_component_410 captions-background-color-my-video_component_410 captions-background-color-my-video_component_410-White">White</option><option id="captions-background-color-my-video_component_410-Red" value="#F00" aria-labelledby="captions-background-my-video_component_410 captions-background-color-my-video_component_410 captions-background-color-my-video_component_410-Red">Red</option><option id="captions-background-color-my-video_component_410-Green" value="#0F0" aria-labelledby="captions-background-my-video_component_410 captions-background-color-my-video_component_410 captions-background-color-my-video_component_410-Green">Green</option><option id="captions-background-color-my-video_component_410-Blue" value="#00F" aria-labelledby="captions-background-my-video_component_410 captions-background-color-my-video_component_410 captions-background-color-my-video_component_410-Blue">Blue</option><option id="captions-background-color-my-video_component_410-Yellow" value="#FF0" aria-labelledby="captions-background-my-video_component_410 captions-background-color-my-video_component_410 captions-background-color-my-video_component_410-Yellow">Yellow</option><option id="captions-background-color-my-video_component_410-Magenta" value="#F0F" aria-labelledby="captions-background-my-video_component_410 captions-background-color-my-video_component_410 captions-background-color-my-video_component_410-Magenta">Magenta</option><option id="captions-background-color-my-video_component_410-Cyan" value="#0FF" aria-labelledby="captions-background-my-video_component_410 captions-background-color-my-video_component_410 captions-background-color-my-video_component_410-Cyan">Cyan</option></select><span class="vjs-bg-opacity vjs-opacity"><label id="captions-background-opacity-my-video_component_410" class="vjs-label">Transparency</label><select aria-labelledby="captions-background-my-video_component_410 captions-background-opacity-my-video_component_410"><option id="captions-background-opacity-my-video_component_410-Opaque" value="1" aria-labelledby="captions-background-my-video_component_410 captions-background-opacity-my-video_component_410 captions-background-opacity-my-video_component_410-Opaque">Opaque</option><option id="captions-background-opacity-my-video_component_410-SemiTransparent" value="0.5" aria-labelledby="captions-background-my-video_component_410 captions-background-opacity-my-video_component_410 captions-background-opacity-my-video_component_410-SemiTransparent">Semi-Transparent</option><option id="captions-background-opacity-my-video_component_410-Transparent" value="0" aria-labelledby="captions-background-my-video_component_410 captions-background-opacity-my-video_component_410 captions-background-opacity-my-video_component_410-Transparent">Transparent</option></select></span></fieldset><fieldset class="vjs-window-color vjs-track-setting"><legend id="captions-window-my-video_component_410">Window</legend><label id="captions-window-color-my-video_component_410" class="vjs-label">Color</label><select aria-labelledby="captions-window-my-video_component_410 captions-window-color-my-video_component_410"><option id="captions-window-color-my-video_component_410-Black" value="#000" aria-labelledby="captions-window-my-video_component_410 captions-window-color-my-video_component_410 captions-window-color-my-video_component_410-Black">Black</option><option id="captions-window-color-my-video_component_410-White" value="#FFF" aria-labelledby="captions-window-my-video_component_410 captions-window-color-my-video_component_410 captions-window-color-my-video_component_410-White">White</option><option id="captions-window-color-my-video_component_410-Red" value="#F00" aria-labelledby="captions-window-my-video_component_410 captions-window-color-my-video_component_410 captions-window-color-my-video_component_410-Red">Red</option><option id="captions-window-color-my-video_component_410-Green" value="#0F0" aria-labelledby="captions-window-my-video_component_410 captions-window-color-my-video_component_410 captions-window-color-my-video_component_410-Green">Green</option><option id="captions-window-color-my-video_component_410-Blue" value="#00F" aria-labelledby="captions-window-my-video_component_410 captions-window-color-my-video_component_410 captions-window-color-my-video_component_410-Blue">Blue</option><option id="captions-window-color-my-video_component_410-Yellow" value="#FF0" aria-labelledby="captions-window-my-video_component_410 captions-window-color-my-video_component_410 captions-window-color-my-video_component_410-Yellow">Yellow</option><option id="captions-window-color-my-video_component_410-Magenta" value="#F0F" aria-labelledby="captions-window-my-video_component_410 captions-window-color-my-video_component_410 captions-window-color-my-video_component_410-Magenta">Magenta</option><option id="captions-window-color-my-video_component_410-Cyan" value="#0FF" aria-labelledby="captions-window-my-video_component_410 captions-window-color-my-video_component_410 captions-window-color-my-video_component_410-Cyan">Cyan</option></select><span class="vjs-window-opacity vjs-opacity"><label id="captions-window-opacity-my-video_component_410" class="vjs-label">Transparency</label><select aria-labelledby="captions-window-my-video_component_410 captions-window-opacity-my-video_component_410"><option id="captions-window-opacity-my-video_component_410-Transparent" value="0" aria-labelledby="captions-window-my-video_component_410 captions-window-opacity-my-video_component_410 captions-window-opacity-my-video_component_410-Transparent">Transparent</option><option id="captions-window-opacity-my-video_component_410-SemiTransparent" value="0.5" aria-labelledby="captions-window-my-video_component_410 captions-window-opacity-my-video_component_410 captions-window-opacity-my-video_component_410-SemiTransparent">Semi-Transparent</option><option id="captions-window-opacity-my-video_component_410-Opaque" value="1" aria-labelledby="captions-window-my-video_component_410 captions-window-opacity-my-video_component_410 captions-window-opacity-my-video_component_410-Opaque">Opaque</option></select></span></fieldset></div><div class="vjs-track-settings-font"><fieldset class="vjs-font-percent vjs-track-setting"><legend id="captions-font-size-my-video_component_410" class="">Font Size</legend><select aria-labelledby="captions-font-size-my-video_component_410"><option id="captions-font-size-my-video_component_410-50" value="0.50" aria-labelledby="captions-font-size-my-video_component_410 captions-font-size-my-video_component_410-50">50%</option><option id="captions-font-size-my-video_component_410-75" value="0.75" aria-labelledby="captions-font-size-my-video_component_410 captions-font-size-my-video_component_410-75">75%</option><option id="captions-font-size-my-video_component_410-100" value="1.00" aria-labelledby="captions-font-size-my-video_component_410 captions-font-size-my-video_component_410-100">100%</option><option id="captions-font-size-my-video_component_410-125" value="1.25" aria-labelledby="captions-font-size-my-video_component_410 captions-font-size-my-video_component_410-125">125%</option><option id="captions-font-size-my-video_component_410-150" value="1.50" aria-labelledby="captions-font-size-my-video_component_410 captions-font-size-my-video_component_410-150">150%</option><option id="captions-font-size-my-video_component_410-175" value="1.75" aria-labelledby="captions-font-size-my-video_component_410 captions-font-size-my-video_component_410-175">175%</option><option id="captions-font-size-my-video_component_410-200" value="2.00" aria-labelledby="captions-font-size-my-video_component_410 captions-font-size-my-video_component_410-200">200%</option><option id="captions-font-size-my-video_component_410-300" value="3.00" aria-labelledby="captions-font-size-my-video_component_410 captions-font-size-my-video_component_410-300">300%</option><option id="captions-font-size-my-video_component_410-400" value="4.00" aria-labelledby="captions-font-size-my-video_component_410 captions-font-size-my-video_component_410-400">400%</option></select></fieldset><fieldset class="vjs-edge-style vjs-track-setting"><legend id="my-video_component_410" class="">Text Edge Style</legend><select aria-labelledby="my-video_component_410"><option id="my-video_component_410-None" value="none" aria-labelledby="my-video_component_410 my-video_component_410-None">None</option><option id="my-video_component_410-Raised" value="raised" aria-labelledby="my-video_component_410 my-video_component_410-Raised">Raised</option><option id="my-video_component_410-Depressed" value="depressed" aria-labelledby="my-video_component_410 my-video_component_410-Depressed">Depressed</option><option id="my-video_component_410-Uniform" value="uniform" aria-labelledby="my-video_component_410 my-video_component_410-Uniform">Uniform</option><option id="my-video_component_410-Dropshadow" value="dropshadow" aria-labelledby="my-video_component_410 my-video_component_410-Dropshadow">Dropshadow</option></select></fieldset><fieldset class="vjs-font-family vjs-track-setting"><legend id="captions-font-family-my-video_component_410" class="">Font Family</legend><select aria-labelledby="captions-font-family-my-video_component_410"><option id="captions-font-family-my-video_component_410-ProportionalSansSerif" value="proportionalSansSerif" aria-labelledby="captions-font-family-my-video_component_410 captions-font-family-my-video_component_410-ProportionalSansSerif">Proportional Sans-Serif</option><option id="captions-font-family-my-video_component_410-MonospaceSansSerif" value="monospaceSansSerif" aria-labelledby="captions-font-family-my-video_component_410 captions-font-family-my-video_component_410-MonospaceSansSerif">Monospace Sans-Serif</option><option id="captions-font-family-my-video_component_410-ProportionalSerif" value="proportionalSerif" aria-labelledby="captions-font-family-my-video_component_410 captions-font-family-my-video_component_410-ProportionalSerif">Proportional Serif</option><option id="captions-font-family-my-video_component_410-MonospaceSerif" value="monospaceSerif" aria-labelledby="captions-font-family-my-video_component_410 captions-font-family-my-video_component_410-MonospaceSerif">Monospace Serif</option><option id="captions-font-family-my-video_component_410-Casual" value="casual" aria-labelledby="captions-font-family-my-video_component_410 captions-font-family-my-video_component_410-Casual">Casual</option><option id="captions-font-family-my-video_component_410-Script" value="script" aria-labelledby="captions-font-family-my-video_component_410 captions-font-family-my-video_component_410-Script">Script</option><option id="captions-font-family-my-video_component_410-SmallCaps" value="small-caps" aria-labelledby="captions-font-family-my-video_component_410 captions-font-family-my-video_component_410-SmallCaps">Small Caps</option></select></fieldset></div><div class="vjs-track-settings-controls"><button type="button" class="vjs-default-button" title="restore all settings to the default values">Reset<span class="vjs-control-text"> restore all settings to the default values</span></button><button type="button" class="vjs-done-button">Done</button></div></div><button class="vjs-close-button vjs-control vjs-button" type="button" aria-disabled="false" title="Close Modal Dialog"><span aria-hidden="true" class="vjs-icon-placeholder"></span><span class="vjs-control-text" aria-live="polite">Close Modal Dialog</span></button><p class="vjs-control-text">End of dialog window.</p></div><div class="vjs-title-bar">
                                Các ngân hàng tăng cường giao dịch trực tuyến trong bối cảnh dịch COVID-19
                            </div></div>
                                                                                            </div>
                            <div id="video-title" class="box-title" style="margin-top: 10px">
                                <a href="https://thoibaonganhang.vn/cac-ngan-hang-tang-cuong-giao-dich-truc-tuyen-trong-boi-canh-dich-covid-19.media" class="title">Các ngân hàng tăng cường giao dịch trực tuyến trong bối cảnh dịch COVID-19</a>
                            </div>
                        </li>
                                            </ul>

                                        <ul class="older-news list-news list-vt img-float img-left mCustomScrollbar _mCS_1"><div id="mCSB_1" class="mCustomScrollBox mCS-light mCSB_vertical mCSB_inside" style="max-height: none;" tabindex="0"><div id="mCSB_1_container" class="mCSB_container" style="position:relative; top:0; left:0;" dir="ltr">
                                                <li class="clearfix">
                                                        <a href="https://thoibaonganhang.vn/bo-ke-hoach-va-dau-tu-se-tong-hop-bao-cao-chinh-phu-ve-goi-ho-tro-cho-doanh-nghiep-nguoi-dan.media" class="box-img" title="Bộ Kế hoạch và Đầu tư sẽ tổng hợp, báo cáo Chính phủ về gói hỗ trợ cho doanh nghiệp, người dân">
                                <img src="https://thoibaonganhang.vn/stores/video_data/thanhlm/032021/04/14/BO_KHDT_11.jpg" alt="Bộ Kế hoạch và Đầu tư sẽ tổng hợp, báo cáo Chính phủ về gói hỗ trợ cho doanh nghiệp, người dân" class="mCS_img_loaded">
                                <img class="ico ico-small mCS_img_loaded" src="/modules/frontend/themes/thoibaonganhang/images/play-big.png" alt="" width="54" height="54">
                            </a>
                                                        <div class="box-title">
                                <a href="https://thoibaonganhang.vn/bo-ke-hoach-va-dau-tu-se-tong-hop-bao-cao-chinh-phu-ve-goi-ho-tro-cho-doanh-nghiep-nguoi-dan.media" title="" class="title">
                                    Bộ Kế hoạch và Đầu tư sẽ tổng hợp, báo cáo Chính phủ về gói hỗ trợ cho doanh nghiệp, người dân                                </a>
                            </div>
                        </li>
                                                <li class="clearfix">
                                                        <a href="https://thoibaonganhang.vn/ngan-hang-cat-giam-loi-nhuan-de-ho-tro-khach-hang-bi-anh-huong-boi-dich-covid-19.media" class="box-img" title="Ngân hàng cắt giảm lợi nhuận để hỗ trợ khách hàng bị ảnh hưởng bởi dịch COVID-19">
                                <img src="https://thoibaonganhang.vn/stores/video_data/thanhlm/012021/08/14/0701_NGAN_HANG_51.jpg" alt="Ngân hàng cắt giảm lợi nhuận để hỗ trợ khách hàng bị ảnh hưởng bởi dịch COVID-19" class="mCS_img_loaded">
                                <img class="ico ico-small mCS_img_loaded" src="/modules/frontend/themes/thoibaonganhang/images/play-big.png" alt="" width="54" height="54">
                            </a>
                                                        <div class="box-title">
                                <a href="https://thoibaonganhang.vn/ngan-hang-cat-giam-loi-nhuan-de-ho-tro-khach-hang-bi-anh-huong-boi-dich-covid-19.media" title="" class="title">
                                    Ngân hàng cắt giảm lợi nhuận để hỗ trợ khách hàng bị ảnh hưởng bởi dịch COVID-19                                </a>
                            </div>
                        </li>
                                                <li class="clearfix">
                                                        <a href="https://thoibaonganhang.vn/du-bao-mat-bang-lai-suat-co-the-tiep-tuc-giam-trong-nam-2021.media" class="box-img" title="Dự báo mặt bằng lãi suất có thể tiếp tục giảm trong năm 2021">
                                <img src="https://thoibaonganhang.vn/stores/video_data/thanhlm/012021/05/15/0501_LAI_SUAT_31.jpg" alt="Dự báo mặt bằng lãi suất có thể tiếp tục giảm trong năm 2021" class="mCS_img_loaded">
                                <img class="ico ico-small mCS_img_loaded" src="/modules/frontend/themes/thoibaonganhang/images/play-big.png" alt="" width="54" height="54">
                            </a>
                                                        <div class="box-title">
                                <a href="https://thoibaonganhang.vn/du-bao-mat-bang-lai-suat-co-the-tiep-tuc-giam-trong-nam-2021.media" title="" class="title">
                                    Dự báo mặt bằng lãi suất có thể tiếp tục giảm trong năm 2021                                </a>
                            </div>
                        </li>
                                                <li class="clearfix">
                                                        <a href="https://thoibaonganhang.vn/thu-tuong-nguyen-xuan-phuc-dien-dam-voi-tong-thong-my-donald-trump.media" class="box-img" title="Thủ tướng Nguyễn Xuân Phúc điện đàm với Tổng thống Mỹ Donald Trump">
                                <img src="https://thoibaonganhang.vn/stores/video_data/thanhlm/122020/24/15/TTCP_41.jpg" alt="Thủ tướng Nguyễn Xuân Phúc điện đàm với Tổng thống Mỹ Donald Trump" class="mCS_img_loaded">
                                <img class="ico ico-small mCS_img_loaded" src="/modules/frontend/themes/thoibaonganhang/images/play-big.png" alt="" width="54" height="54">
                            </a>
                                                        <div class="box-title">
                                <a href="https://thoibaonganhang.vn/thu-tuong-nguyen-xuan-phuc-dien-dam-voi-tong-thong-my-donald-trump.media" title="" class="title">
                                    Thủ tướng Nguyễn Xuân Phúc điện đàm với Tổng thống Mỹ Donald Trump                                </a>
                            </div>
                        </li>
                                                <li class="clearfix">
                                                        <a href="https://thoibaonganhang.vn/savills-canh-bao-dau-tu-dat-nen-o-tp-ha-noi.media" class="box-img" title="Savills cảnh báo đầu tư đất nền ở TP. Hà Nội">
                                <img src="https://thoibaonganhang.vn/stores/video_data/thanhlm/122020/16/15/1612_SAVILLS_21.jpg" alt="Savills cảnh báo đầu tư đất nền ở TP. Hà Nội" class="mCS_img_loaded">
                                <img class="ico ico-small mCS_img_loaded" src="/modules/frontend/themes/thoibaonganhang/images/play-big.png" alt="" width="54" height="54">
                            </a>
                                                        <div class="box-title">
                                <a href="https://thoibaonganhang.vn/savills-canh-bao-dau-tu-dat-nen-o-tp-ha-noi.media" title="" class="title">
                                    Savills cảnh báo đầu tư đất nền ở TP. Hà Nội                                </a>
                            </div>
                        </li>
                                                <li class="clearfix">
                                                        <a href="https://thoibaonganhang.vn/nhnn-ap-dung-cong-nghe-moi-de-tao-dieu-kien-thuan-loi-cho-nguoi-dan-doanh-nghiep-va-cac-co-quan.media" class="box-img" title="NHNN: Áp dụng công nghệ mới để tạo điều kiện thuận lợi cho người dân, doanh nghiệp và các cơ quan">
                                <img src="https://thoibaonganhang.vn/stores/video_data/thanhlm/122020/08/16/0712_NHNN_TB_31.jpg" alt="NHNN: Áp dụng công nghệ mới để tạo điều kiện thuận lợi cho người dân, doanh nghiệp và các cơ quan" class="mCS_img_loaded">
                                <img class="ico ico-small mCS_img_loaded" src="/modules/frontend/themes/thoibaonganhang/images/play-big.png" alt="" width="54" height="54">
                            </a>
                                                        <div class="box-title">
                                <a href="https://thoibaonganhang.vn/nhnn-ap-dung-cong-nghe-moi-de-tao-dieu-kien-thuan-loi-cho-nguoi-dan-doanh-nghiep-va-cac-co-quan.media" title="" class="title">
                                    NHNN: Áp dụng công nghệ mới để tạo điều kiện thuận lợi cho người dân, doanh nghiệp và các cơ quan                                </a>
                            </div>
                        </li>
                                                <li class="clearfix">
                                                        <a href="https://thoibaonganhang.vn/nhnn-da-dat-duoc-nhieu-ket-qua-tich-cuc-ve-cai-cach-hanh-chinh-trong-10-nam-qua.media" class="box-img" title="NHNN đã đạt được nhiều kết quả tích cực về cải cách hành chính trong 10 năm qua">
                                <img src="https://thoibaonganhang.vn/stores/video_data/thanhlm/122020/08/16/0712_NHNN_OFF_51.jpg" alt="NHNN đã đạt được nhiều kết quả tích cực về cải cách hành chính trong 10 năm qua" class="mCS_img_loaded">
                                <img class="ico ico-small mCS_img_loaded" src="/modules/frontend/themes/thoibaonganhang/images/play-big.png" alt="" width="54" height="54">
                            </a>
                                                        <div class="box-title">
                                <a href="https://thoibaonganhang.vn/nhnn-da-dat-duoc-nhieu-ket-qua-tich-cuc-ve-cai-cach-hanh-chinh-trong-10-nam-qua.media" title="" class="title">
                                    NHNN đã đạt được nhiều kết quả tích cực về cải cách hành chính trong 10 năm qua                                </a>
                            </div>
                        </li>
                                                <li class="clearfix">
                                                        <a href="https://thoibaonganhang.vn/nhnn-tien-gui-vao-he-thong-ngan-hang-van-tang-manh.media" class="box-img" title="NHNN: Tiền gửi vào hệ thống ngân hàng vẫn tăng mạnh">
                                <img src="https://thoibaonganhang.vn/stores/video_data/thanhlm/122020/04/09/NHNN-_TIYN_GYI_VAO_HY_THYNG_NGAN_HANG_VYN_TYNG_MYNH_21.jpg" alt="NHNN: Tiền gửi vào hệ thống ngân hàng vẫn tăng mạnh" class="mCS_img_loaded">
                                <img class="ico ico-small mCS_img_loaded" src="/modules/frontend/themes/thoibaonganhang/images/play-big.png" alt="" width="54" height="54">
                            </a>
                                                        <div class="box-title">
                                <a href="https://thoibaonganhang.vn/nhnn-tien-gui-vao-he-thong-ngan-hang-van-tang-manh.media" title="" class="title">
                                    NHNN: Tiền gửi vào hệ thống ngân hàng vẫn tăng mạnh                                </a>
                            </div>
                        </li>
                                                <li class="clearfix">
                                                        <a href="https://thoibaonganhang.vn/75-doanh-nghiep-da-duoc-vay-goi-16000-ty-dong-lai-suat-0.media" class="box-img" title="75 doanh nghiệp đã được vay gói 16.000 tỷ đồng lãi suất 0%">
                                <img src="https://thoibaonganhang.vn/stores/video_data/thanhlm/122020/01/10/75_DOANH_NGHIYP_YA_YYYC_VAY_GOI_16.000_TY_YYNG_LAI_SUYT_0_21.jpg" alt="75 doanh nghiệp đã được vay gói 16.000 tỷ đồng lãi suất 0%" class="mCS_img_loaded">
                                <img class="ico ico-small mCS_img_loaded" src="/modules/frontend/themes/thoibaonganhang/images/play-big.png" alt="" width="54" height="54">
                            </a>
                                                        <div class="box-title">
                                <a href="https://thoibaonganhang.vn/75-doanh-nghiep-da-duoc-vay-goi-16000-ty-dong-lai-suat-0.media" title="" class="title">
                                    75 doanh nghiệp đã được vay gói 16.000 tỷ đồng lãi suất 0%                                </a>
                            </div>
                        </li>
                                                <li class="clearfix">
                                                        <a href="https://thoibaonganhang.vn/ngan-hang-nha-nuoc-gan-9-trieu-ty-dong-da-duoc-bom-ra-nen-kinh-te.media" class="box-img" title="Ngân hàng Nhà nước: Gần 9 triệu tỷ đồng đã được bơm ra nền kinh tế">
                                <img src="https://thoibaonganhang.vn/stores/video_data/thanhlm/112020/25/10/NHNN-_GYN_9_TRIYU_TY_YYNG_YA_YYYC_BYM_RA_NYN_KINH_TY_41.jpg" alt="Ngân hàng Nhà nước: Gần 9 triệu tỷ đồng đã được bơm ra nền kinh tế" class="mCS_img_loaded">
                                <img class="ico ico-small mCS_img_loaded" src="/modules/frontend/themes/thoibaonganhang/images/play-big.png" alt="" width="54" height="54">
                            </a>
                                                        <div class="box-title">
                                <a href="https://thoibaonganhang.vn/ngan-hang-nha-nuoc-gan-9-trieu-ty-dong-da-duoc-bom-ra-nen-kinh-te.media" title="" class="title">
                                    Ngân hàng Nhà nước: Gần 9 triệu tỷ đồng đã được bơm ra nền kinh tế                                </a>
                            </div>
                        </li>
                                            </div><div id="mCSB_1_scrollbar_vertical" class="mCSB_scrollTools mCSB_1_scrollbar mCS-light mCSB_scrollTools_vertical" style="display: block;"><div class="mCSB_draggerContainer"><div id="mCSB_1_dragger_vertical" class="mCSB_dragger" style="position: absolute; min-height: 30px; display: block; height: 113px; max-height: 370px; top: 0px;" oncontextmenu="return false;"><div class="mCSB_dragger_bar" style="line-height: 30px;"></div></div><div class="mCSB_draggerRail"></div></div></div></div></ul>
                                    </div>
            </div>
    </div>
    <div id="goi-y" class="main-cate goi-y">
        <div class="wrapper">
            <div class="cat-head">
                <span class="cat-name">Gợi ý của tòa soạn</span>
            </div>
            <div class="cat-body">
                <ul class="list-news layout3 clearfix">
                    <li>
                        <a href="https://thoibaonganhang.vn/ngan-hang-lai-ban-khoan-thu-ho-thue-112290.html" class="box-img" title="Ngân hàng lại băn khoăn thu hộ thuế">
                            <img src="https://thoibaonganhang.vn/stores/news_dataimages/minhvl/032021/08/09/1015_at4_Copy.jpg" alt="Ngân hàng lại băn khoăn thu hộ thuế">
                            <span class="category-name">Tài chính - Tiền tệ</span>
                        </a>
                        <div class="box-title">
                            <a href="https://thoibaonganhang.vn/ngan-hang-lai-ban-khoan-thu-ho-thue-112290.html" class="title" title="Ngân hàng lại băn khoăn thu hộ thuế">
                            Ngân hàng lại băn khoăn thu hộ thuế                                </a>
                        </div>
                    </li>
                    <li>
                        <a href="https://thoibaonganhang.vn/tiep-tuc-thao-go-kho-khan-cho-khach-hang-112311.html" class="box-img" title="Tiếp tục tháo gỡ khó khăn cho khách hàng">
                            <img src="https://thoibaonganhang.vn/stores/news_dataimages/minhvl/032021/08/11/2243_1aa29_Copy.jpg" alt="Tiếp tục tháo gỡ khó khăn cho khách hàng">
                            <span class="category-name">Tài chính - Tiền tệ</span>
                        </a>
                        <div class="box-title">
                            <a href="https://thoibaonganhang.vn/tiep-tuc-thao-go-kho-khan-cho-khach-hang-112311.html" class="title" title="Tiếp tục tháo gỡ khó khăn cho khách hàng">
                            Tiếp tục tháo gỡ khó khăn cho khách hàng                                </a>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <div class="main-cate list-cate clearfix">
        <div class="wrapper">
            <div class="w300 left">
                 <div class="banner-grid banner-grid-1 clearfix">
                    <div class="banner-item">
                        <a href="https://thoibaonganhang.vn/adsfw/1/0/NDM=&amp;mode=default&amp;zone=banner-grid-1" class="__ads_click" target="_blank"><img border="0" src="https://thoibaonganhang.vn/stores/ads_data/thanhlm/042020/23/10/3655_0002.jpg" alt="logo-ocb" style="vertical-align:middle;" width="160" height="150"></a>                        </div>
                    <div class="banner-item">
                        <a href="https://thoibaonganhang.vn/adsfw/1/0/NjM=&amp;mode=default&amp;zone=banner-grid-1" class="__ads_click" target="_blank"><img border="0" src="https://thoibaonganhang.vn/stores/ads_data/thanhlm/082016/24/10/18a2e0bc21eb981b2f170559ef87b8b5_180x180.jpg" alt="seabank-180x180" style="vertical-align:middle;" width="180" height="180"></a>                        </div>
                    <div class="banner-item">
                        <a href="https://thoibaonganhang.vn/adsfw/1/0/NTU=&amp;mode=default&amp;zone=banner-grid-1" class="__ads_click" target="_blank"><img border="0" src="https://thoibaonganhang.vn/stores/ads_data/thanhlm/072020/16/11/1351_thoi_bao_ngan_hang_300_x_250.jpg" alt="pvcombank" style="vertical-align:middle;" width="180" height="180"></a>                        </div>
                    <div class="banner-item">
                        <a href="https://thoibaonganhang.vn/adsfw/1/0/NTY=&amp;mode=default&amp;zone=banner-grid-1" class="__ads_click" target="_blank"><img border="0" src="https://thoibaonganhang.vn/stores/ads_data/thanhlm/102016/26/08/694f172859d5319ae3e670b100f74dfc_180x180.jpg" alt="bao-hiem-tien-gui" style="vertical-align:middle;" width="180" height="180"></a>                        </div>
                </div>
                <div class="banner-grid banner-grid-2 clearfix">
                    <div class="banner-item">
                        <a href="https://thoibaonganhang.vn/adsfw/1/0/ODQ=&amp;mode=default&amp;zone=banner-grid-2" class="__ads_click" target="_blank"><img border="0" src="https://thoibaonganhang.vn/stores/ads_data/thanhlm/042020/17/14/5452_agribank.png" alt="agribank-180x300" style="vertical-align:middle;" width="180" height="300"></a>                        </div>
                    <div class="banner-item">
                        <a href="https://thoibaonganhang.vn/adsfw/1/0/MTEw&amp;mode=default&amp;zone=banner-grid-2" class="__ads_click" target="_blank"><img border="0" src="https://thoibaonganhang.vn/stores/ads_data/thanhlm/122019/25/16/1953_180x300.jpg" alt="nhcsxh" style="vertical-align:middle;" width="180" height="300"></a>                        </div>
                    <div class="banner-item">
                        <a href="https://thoibaonganhang.vn/adsfw/1/0/ODg=&amp;mode=default&amp;zone=banner-grid-2" class="__ads_click" target="_blank"><img border="0" src="https://thoibaonganhang.vn/stores/ads_data/thanhlm/122019/24/10/4937_4201_image001.jpg" alt="mb-147x245" style="vertical-align:middle;" width="147" height="245"></a>                        </div>
                    <div class="banner-item">
                        <a href="https://thoibaonganhang.vn/adsfw/1/0/MTA5&amp;mode=default&amp;zone=banner-grid-2" class="__ads_click" target="_blank"><img border="0" src="https://thoibaonganhang.vn/stores/ads_data/thanhlm/122019/21/22/4546_namabank.png" alt="nam-a-bank" style="vertical-align:middle;" width="180" height="300"></a>                        </div>
                </div>
                <div class="category">
                    <div class="cat-head style1">
                        <a href="https://thoibaonganhang.vn/bao-giay" class="cat-name">Đọc báo giấy</a>
                    </div>
                    <div class="cat-body banner300" style="border: 1px solid #ebebeb">
                        <a href="https://thoibaonganhang.vn/bao-giay/so-30-ra-ngay-1032021.paper" title="Số 30 ra ngày 10/3/2021">
                        <img style="width: 100%;" src="https://thoibaonganhang.vn/stores/newspaper_data/thanhlm/032021/10/16/1855_t1_30.jpg" alt="Số 30 ra ngày 10/3/2021">
                        </a>
                    </div>
                </div>
                <div class="banner300">
                    <div class="banner-item">
                        <img src="https://thoibaonganhang.vn/stores/ads_data/thanhlm/122020/10/17/2715_logo_MeliaBaViMountainRetreat_C_1.png" style="vertical-align:middle;" alt="melia" width="300" height="120">                        </div>
                    <div class="banner-item">
                    <a href="https://thoibaonganhang.vn/adsfw/1/0/OTY=&amp;mode=default&amp;zone=banner-300px-bottom-bao-giay" class="__ads_click" target="_blank">
                    <img border="0" src="https://thoibaonganhang.vn/stores/ads_data/thanhlm/012019/18/14/e735d2289ba86639e0837fef575e2a13_Untitled.png" alt="sunshine" style="vertical-align:middle;" width="300" height="200"></a>                        </div>
                </div>
            </div>
            <div class="w559 left">
                <ul class="list-news layout1">
                    <li>
                        <a href="https://thoibaonganhang.vn/bua-sang-cua-me-112376.html" class="box-img" title="Bữa sáng của mẹ…">
                        <img src="https://thoibaonganhang.vn/stores/news_dataimages/minhvl/032021/09/18/medium/1533_11-30_Copy.jpg" alt="Bữa sáng của mẹ…">
                        </a>
                        <div class="box-text">
                            <div class="box-title">
                                <a href="https://thoibaonganhang.vn/bua-sang-cua-me-112376.html" class="title" title="Bữa sáng của mẹ…">
                                Bữa sáng của mẹ…                                                                            </a>
                            </div>
                            <div class="box-meta">
                                <a href="https://thoibaonganhang.vn/van-hoa-xa-hoi" class="category-name">Văn hóa - xã hội</a><span class="publish-time"><i class="far fa-clock"></i> <span class="format_time"> 1 giờ 27 phút</span></span>
                            </div>
                        </div>
                    </li>
                    <li>
                        <a href="https://thoibaonganhang.vn/bua-sang-cua-me-112376.html" class="box-img" title="Bữa sáng của mẹ…">
                        <img src="https://thoibaonganhang.vn/stores/news_dataimages/minhvl/032021/09/18/medium/1533_11-30_Copy.jpg" alt="Bữa sáng của mẹ…">
                        </a>
                        <div class="box-text">
                            <div class="box-title">
                                <a href="https://thoibaonganhang.vn/bua-sang-cua-me-112376.html" class="title" title="Bữa sáng của mẹ…">
                                Bữa sáng của mẹ…                                                                            </a>
                            </div>
                            <div class="box-meta">
                                <a href="https://thoibaonganhang.vn/van-hoa-xa-hoi" class="category-name">Văn hóa - xã hội</a><span class="publish-time"><i class="far fa-clock"></i> <span class="format_time"> 1 giờ 27 phút</span></span>
                            </div>
                        </div>
                    </li>
                 </ul>
            </div>
            <div class="w300 right">
                <div class="category banner300">
                    <div class="banner-item">
                        <a href="https://thoibaonganhang.vn/adsfw/1/0/MTE1&amp;mode=default&amp;zone=banner-300px-main-cate-right-2" class="__ads_click" target="_blank">
                        <img border="0" src="https://thoibaonganhang.vn/stores/ads_data/thanhlm/122020/04/10/4906_DSNV-NLTA_-_300_x_250_KV.jpg" alt="sacombank-300x250" style="vertical-align:middle;" width="300" height="250"></a>                      
                    </div>
                </div>	
                @include('page.laixuat')                   
                <div class="banner300">
                                        <div class="banner-item">
                    <a href="https://thoibaonganhang.vn/adsfw/1/0/MTIx&amp;mode=default&amp;zone=banner-300px-bottom-thong-tin-chung-khoan" class="__ads_click" target="_blank"><img border="0" src="https://thoibaonganhang.vn/stores/ads_data/minhvl/072020/29/16/1540_0505_hung-thinh_1.png" alt="hung-thinh" style="vertical-align:middle;" width="300" height="250"></a>                        </div>
                                        <div class="banner-item">
                    <a href="https://thoibaonganhang.vn/adsfw/1/0/MTEz&amp;mode=default&amp;zone=banner-300px-bottom-thong-tin-chung-khoan" class="__ads_click" target="_blank"><img border="0" src="https://thoibaonganhang.vn/stores/ads_data/thanhlm/012021/21/15/5950_AIA-Nhan_loc_vang_-_tet_binh_an_-_bao_ThYi_bao_ngan_hang.png" alt="nh-kien-long" style="vertical-align:middle;" width="300" height="180"></a>                        </div>
                                        <div class="banner-item">
                    <a href="https://thoibaonganhang.vn/adsfw/1/0/MTA3&amp;mode=default&amp;zone=banner-300px-bottom-thong-tin-chung-khoan" class="__ads_click" target="_blank"><img border="0" src="https://thoibaonganhang.vn/stores/ads_data/thanhlm/122019/25/10/4257_THANK_PARTY_300_x_250_1.png" alt="dat-xanh-mien-trung" style="vertical-align:middle;" width="300" height="180"></a>                        </div>
                                        <div class="banner-item">
                    <a href="https://thoibaonganhang.vn/adsfw/1/0/MTIy&amp;mode=default&amp;zone=banner-300px-bottom-thong-tin-chung-khoan" class="__ads_click" target="_blank"><img border="0" src="https://thoibaonganhang.vn/stores/ads_data/thanhlm/012021/19/14/0735_300x250-tien-gui-tiet-kiem-.png" alt="vietinbank-300x250" style="vertical-align:middle;" width="300" height="250"></a>                        </div>
                                        <div class="banner-item">
                    <a href="https://thoibaonganhang.vn/adsfw/1/0/MTI3&amp;mode=default&amp;zone=banner-300px-bottom-thong-tin-chung-khoan" class="__ads_click" target="_blank"><img border="0" src="https://thoibaonganhang.vn/stores/ads_data/thanhlm/012021/09/17/3851_Banner_Thoi_Bao_Ngan_Hang.jpg" alt="him-lam" style="vertical-align:middle;" width="300" height="120"></a>                        </div>
                </div>
            </div>
        </div>
    </div>
    <div class="main-cate banner-four clearfix">
        <div class="wrapper"></div>
    </div>
    <div class="main-cate goi-y">
        <div class="wrapper">
            <div class="cat-head">
                <span class="cat-name">Doanh nghiệp - sản phẩm tiêu biểu</span>
            </div>
            <div class="cat-body">
                <ul class="list-news layout3 pr clearfix">
                    <li>
                        <a href="https://thoibaonganhang.vn/dien-thoai-viet-len-ke-tai-my-kiem-chung-nang-luc-san-xuat-cong-nghe-viet-nam-111924.html" class="box-img" title="Điện thoại Việt 'lên kệ' tại Mỹ: Kiểm chứng năng lực sản xuất công nghệ Việt Nam">
                            <img src="https://thoibaonganhang.vn/stores/news_dataimages/khaitq/022021/24/11/2527_01.jpg" alt="Điện thoại Việt 'lên kệ' tại Mỹ: Kiểm chứng năng lực sản xuất công nghệ Việt Nam">
                            <span class="category-name">Thông tin thị trường</span>
                        </a>
                        <div class="box-title">
                            <a href="https://thoibaonganhang.vn/dien-thoai-viet-len-ke-tai-my-kiem-chung-nang-luc-san-xuat-cong-nghe-viet-nam-111924.html" class="title" title="Điện thoại Việt 'lên kệ' tại Mỹ: Kiểm chứng năng lực sản xuất công nghệ Việt Nam">
                                Điện thoại Việt 'lên kệ' tại Mỹ: Kiểm chứng năng lực sản xuất công nghệ Việt Nam                                </a>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <div class="banner-bottom-main-content">
        <div class="wrapper" style="text-align: center"></div>
    </div>
</div>
</main>
@endsection