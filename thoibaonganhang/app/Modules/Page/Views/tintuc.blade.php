@extends('page.master')
@section('title','Trang chủ')

@section('content')
<main id="detail-page">
    <script>
        window.fbAsyncInit = function() {
          FB.init({
            appId      : '2238083709563533',
            cookie     : true,
            xfbml      : true,
            version    : 'v8.0'
          });
            
          FB.AppEvents.logPageView();   
            
        };
      
        (function(d, s, id){
           var js, fjs = d.getElementsByTagName(s)[0];
           if (d.getElementById(id)) {return;}
           js = d.createElement(s); js.id = id;
           js.src = "https://connect.facebook.net/vi_VN/sdk.js";
           fjs.parentNode.insertBefore(js, fjs);
         }(document, 'script', 'facebook-jssdk'));
      </script>

    <script>
        $(document).ready(function () {
            $('p > iframe').parent().addClass('iframe-container');
            $('.detail-subtitle').each(function () {
                if($(this).text() == ''){
                    $(this).hide();
                }
            });
           
            $('#theo .artSource').each(function(){
                if ($(this).text() == ""){
                    $(this).parent().parent().remove();
                }
            });

            // VIDEOJS CUSTOMIZE
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
    <style>
        .wrapper, #stick_wrap_1{position: relative;}

        /* to make the height of col300, col160 equal to parent container */
        .wrapper .w300, 
        .wrapper .w160 {
            bottom: 0;
            position: absolute;
            right: 0;
            top: 0;
        }
        .list-hr li{
            margin-bottom: 0;
        }
        .w160 li{
            padding-bottom: 10px!important;
            margin-bottom: 10px!important;
        }
        .w160 li:last-child{
            padding-bottom: 0!important;
            margin-bottom: 0!important;
        }

        /* tỉ lệ khi nhúng URL youtube */
        p.iframe-container{
            position: relative;
            height: 0;
            width: 100%;
            height: 0;
            padding-top: 56.25%;
        }
        p.iframe-container iframe{
            position: absolute;
            height: 100%;
            width: 100%;
            top: 0;
            left: 0;
        }
    </style>
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
            <a href="https://thoibaonganhang.vn/adsfw/1/0/MTEy&amp;mode=default&amp;zone=banner-top-main-content" class="__ads_click" target="_blank"><img border="0" src="https://thoibaonganhang.vn/stores/ads_data/thanhlm/032021/05/08/3657_Baner_70_nam_TBNH_OK_2.png" alt="banner-tet" style="vertical-align:middle;" width="1190" height="90"></a>        </div>
            </div>
</div>
        <div class="wrapper clearfix">
            <div class="w867 left clearfix">
                <div id="stick_wrap_1" class="clearfix">
                    <div class="w693 detail-article left">
                                                <p class="detail-subtitle" style="display: none;"></p>
                        <h1 class="detail-title">Doanh nghiệp báo lỗ nhưng lại mở rộng kinh doanh</h1>

                        <div id="mobifone" class="clearfix" style="margin-top: 10px;">
                                                        <span id="tts" class="left">
                                <audio controls="" src="https://thoibaonganhang.vn/stores/article_t2v/112379.mp3"></audio>
                            </span>
                                                        <div class="meta right" style="margin-top: 15px; font-size: 16px;">
                                <span class="datetime"><i class="far fa-clock"></i> <span class="format_time">09:00</span> | <span class="format_date">10/03/2021</span></span>
                                <span class="printEmail" style="margin-left: 10px;">
                                    <a class="button print" href="https://thoibaonganhang.vn/apicenter@/print_article&amp;i=112379" target="_blank" rel="nofollow" title="In bài viết này"><i class="fa fa-print"></i></a>
                                    <span class="button email" onclick="return addthis_sendto('email');" onblur="if(_ate.maf.key==9){_ate.maf.key=null;}else{_ate.maf.key=null;addthis_close();}" onkeydown="if(!e){var e = window.event||event;}if(e.keyCode){_ate.maf.key=e.keyCode;}else{if(e.which){_ate.maf.key=e.which;}}" onkeypress="if(!e){var e = window.event||event;}if(e.keyCode){_ate.maf.key=e.keyCode;}else{if(e.which){_ate.maf.key=e.which;}}" href="javascript:void();" title="Email bài viết này cho bạn bè"><i class="fa fa-envelope"></i></span>
                                    <script type="text/javascript" src="/modules/frontend/themes/thoibaonganhang/js/addthis_widget.js#pubid=xa-52303bc5679229f6"></script>
                                </span>
                            </div>
                        </div>
                        <div class="clearfix splitter"></div>
                        <p class="detail-sapo">Kiến nghị Bộ Công thương xem xét trình Chính phủ sửa đổi, bổ sung, thay thế Luật Thương mại 2005 hoặc Nghị định số 09/2018/NĐ-CP nhằm tạo cơ sở pháp lý để khắc phục tình trạng “vốn mỏng” và hiện trạng doanh nghiệp hoạt động thua lỗ nhưng không ngừng mở rộng hoạt động kinh doanh</p>
                        <div class="category article-content __MASTERCMS_CONTENT __MB_CONTENT_FOR_PRINTER">
                            <div class="__MB_MASTERCMS_EL item-content" id="__MB_MASTERCMS_EL_3">
                                <p style="text-align: justify;">Sở Công thương TP.HCM vừa kiến nghị Bộ Công thương cụ thể hóa, hoàn thiện đầy đủ các thể chế, chính sách, nâng cao chất lượng, hiệu quả hợp tác đầu tư nước ngoài đến năm 2030, nhằm tạo cơ sở pháp lý để khắc phục tình trạng “vốn mỏng” và hiện trạng doanh nghiệp hoạt động thua lỗ nhưng không ngừng mở rộng hoạt động kinh doanh. Điều này nhằm mục đích bảo vệ thị trường phân phối trong nước, tạo điều kiện cho doanh nghiệp trong nước phát triển và phù hợp với các cam kết quốc tế.</p>

<table border="0" cellpadding="0" cellspacing="0" class="MASTERCMS_TPL_TABLE" style="width: 100%;">
	<tbody>
		<tr>
			<td><img alt="doanh nghiep bao lo nhung lai mo rong kinh doanh" border="0/" class="__img_mastercms" src="https://thoibaonganhang.vn/stores/news_dataimages/minhvl/032021/09/18/1528_14a30_Copy.jpg" style="max-width: 100%; padding: 0px; margin: 0px; width: 100%;" title="Doanh nghiệp báo lỗ nhưng lại mở rộng kinh doanh"></td>
		</tr>
		<tr>
			<td>Công ty TNHH Grab hiện vẫn báo lỗ</td>
		</tr>
	</tbody>
</table>

<p style="text-align: justify;">Lãnh đạo Sở Công thương TP.HCM cho biết, báo cáo tài chính của các doanh nghiệp cho thấy, 88/145 doanh nghiệp có mức lỗ lũy kế nhiều tỷ đồng, trong đó có 10 doanh nghiệp lỗ lũy kế trên 100 tỷ đồng. Đặc biệt, Công ty TNHH Grab có tổng doanh thu trên 3.380 tỷ đồng nhưng lỗ lũy kế trên 4.300 tỷ đồng, âm vốn chủ sở hữu 4.290 tỷ đồng. Trong khi đó, trong năm chỉ có 31 doanh nghiệp thực hiện thủ tục điều chỉnh tăng vốn góp, vốn điều lệ để duy trì, mở rộng hoạt động kinh doanh. Về quy mô đầu tư, trong 149 doanh nghiệp nộp hồ sơ đề nghị cấp Giấy phép kinh doanh (tại Sở Công thương trong năm 2020), thì có 97 dự án có vốn đầu tư dưới 500 ngàn USD; trong đó có 53 dự án vốn đầu tư dưới 100 ngàn USD, đặc biệt có 10 dự án đăng ký vốn đầu tư dưới 10 ngàn USD. Hầu hết các doanh nghiệp trên được thành lập chỉ để hoạt động trong lĩnh vực thương mại, dịch vụ đơn thuần, không gắn với hoạt động đầu tư cơ sở vật chất kỹ thuật.</p>

<p style="text-align: justify;">Theo lãnh đạo Sở Công thương TP.HCM, không ít trường hợp doanh nghiệp có “vốn mỏng” hoặc đang trong tình trạng thua lỗ mà vẫn đăng ký (mới hoặc bổ sung) kinh doanh đa chủng loại hàng hóa, dịch vụ (bao gồm những thiết bị máy móc kỹ thuật và dịch vụ đòi hỏi nguồn vốn lớn như thương mại điện tử) với nguồn vốn hoạt động chủ yếu dựa vào nhà đầu tư.</p>

<p style="text-align: justify;">Hiện Sở Công thương đã có báo cáo, xin ý kiến Bộ Công thương đối với từng hồ sơ cụ thể. Điều này cũng ảnh hưởng đến kết quả hoạt động kinh doanh và thực hiện nghĩa vụ thuế thu nhập doanh nghiệp, nộp ngân sách Nhà nước của doanh nghiệp và chất lượng, hiệu quả hợp tác, đầu tư nước ngoài trên lĩnh vực mua bán hàng hóa và các hoạt động liên quan trực tiếp đến mua bán hàng hóa của Việt Nam.</p>

<p style="text-align: justify;">Trên thực tế, đa số các doanh nghiệp có vốn đầu tư nước ngoài nghiêm chỉnh chấp hành quy định pháp luật Việt Nam. Tuy nhiên, một số doanh nghiệp chuyển đổi từ doanh nghiệp 100% vốn trong nước thành doanh nghiệp có vốn đầu tư nước ngoài thường chậm trễ hoặc không chủ động thực hiện thủ tục cấp Giấy phép kinh doanh, Giấy phép lập cơ sở bán lẻ cho phép cơ sở bán lẻ được tiếp tục hoạt động... Nhưng Nghị định 09/2018/NĐ-CP không quy định cụ thể thời hạn thực hiện thủ tục nên không đủ cơ sở pháp lý để xử phạt và ngăn chặn. Tương tự, hiện cũng không có quy định các doanh nghiệp đã hoàn tất thủ tục đăng ký sàn/ứng dụng cung cấp dịch vụ thương mại điện tử phải ngừng hoạt động khi chưa được cấp Giấy phép kinh doanh.</p>

<p style="text-align: justify;">Có một số trường hợp, cơ quan quản lý chỉ có thể ban hành quyết định xử phạt vi phạm hành chính đối với hành vi hoạt động cơ sở bán lẻ khi chưa được cấp giấy phép.</p>

<p style="text-align: justify;">Trong năm 2020, Thanh tra Sở Công thương đã kiểm tra 13 doanh nghiệp có vốn đầu tư nước ngoài hoạt động trong lĩnh vực mua bán hàng hóa và các hoạt động liên quan trực tiếp đến mua bán hàng hóa trên địa bàn. Thanh tra Sở Công thương đã ban hành 10 quyết định xử phạt vi phạm hành chính trong lĩnh vực mua bán hàng hóa và các hoạt động liên quan trực tiếp đến mua bán hàng hóa của nhà đầu tư nước ngoài, tổ chức kinh tế có vốn đầu tư nước ngoài tại Việt Nam với tổng tiền phạt là 401.000.000 đồng. Các vi phạm bị phạt là do các doanh nghiệp chưa thực hiện đúng quy định pháp luật như không thực hiện thủ tục điều chỉnh Giấy phép kinh doanh theo quy định khi thay đổi một trong các nội dung ghi trong Giấy phép kinh doanh; hoạt động khi không có Giấy phép kinh doanh, Giấy phép lập cơ sở bán lẻ; không thực hiện thủ tục thông báo/đăng ký website thương mại điện tử theo Nghị định số 52/2013/NĐ-CP...</p>

<p style="text-align: justify;">“Kiến nghị Bộ Công thương xem xét trình Chính phủ sửa đổi, bổ sung, thay thế Luật Thương mại 2005 hoặc Nghị định số 09/2018/NĐ-CP nhằm tạo cơ sở pháp lý để khắc phục tình trạng “vốn mỏng” và hiện trạng doanh nghiệp hoạt động thua lỗ nhưng không ngừng mở rộng hoạt động kinh doanh; Quy định cụ thể trình tự, thủ tục cấp Giấy phép kinh doanh, Giấy phép lập cơ sở bán lẻ (bao gồm Giấy phép lập cơ sở bán lẻ cho phép cơ sở bán lẻ tiếp tục hoạt động) đối với các tổ chức kinh tế có vốn đầu tư nước ngoài hình thành thông qua hình thức nhà đầu tư nước ngoài góp vốn, mua cổ phần, phần vốn góp của tổ chức kinh tế trong nước…”, Phó Giám đốc Sở Công thương TP.HCM, Lê Huỳnh Minh Tú đề xuất.</p>                            </div>
                            <p align="right">
                                <strong>Ngọc Hậu</strong>
                            </p>
                            
                            <div style="clear: both;"></div>
                            <p class="fb-like fb_iframe_widget" data-href="" data-layout="button_count" data-action="like" data-size="small" data-show-faces="true" data-share="true" fb-xfbml-state="rendered" fb-iframe-plugin-query="action=like&amp;app_id=2238083709563533&amp;container_width=693&amp;href=https%3A%2F%2Fthoibaonganhang.vn%2Fdoanh-nghiep-bao-lo-nhung-lai-mo-rong-kinh-doanh-112379.html&amp;layout=button_count&amp;locale=vi_VN&amp;sdk=joey&amp;share=true&amp;show_faces=true&amp;size=small"><span style="vertical-align: bottom; width: 150px; height: 28px;"><iframe name="f1096b79f761c64" width="1000px" height="1000px" data-testid="fb:like Facebook Social Plugin" title="fb:like Facebook Social Plugin" frameborder="0" allowtransparency="true" allowfullscreen="true" scrolling="no" allow="encrypted-media" src="https://www.facebook.com/v8.0/plugins/like.php?action=like&amp;app_id=2238083709563533&amp;channel=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Df3ab517cf9f5c%26domain%3Dthoibaonganhang.vn%26origin%3Dhttps%253A%252F%252Fthoibaonganhang.vn%252Ff2598a1fb0a33e4%26relation%3Dparent.parent&amp;container_width=693&amp;href=https%3A%2F%2Fthoibaonganhang.vn%2Fdoanh-nghiep-bao-lo-nhung-lai-mo-rong-kinh-doanh-112379.html&amp;layout=button_count&amp;locale=vi_VN&amp;sdk=joey&amp;share=true&amp;show_faces=true&amp;size=small" style="border: none; visibility: visible; width: 150px; height: 28px;" class=""></iframe></span></p>
                            <iframe rel="nofollow" src="https://thoibaonganhang.vn/widgets@/article_statistic&amp;aid=MTEyMzc5&amp;sid=k3ir3cjs9h7tadmakpmtoir3u6" width="0" height="0" scrolling="no" frameborder="0"></iframe>                            <input type="hidden" name="__printURL" value="https://thoibaonganhang.vn/doanh-nghiep-bao-lo-nhung-lai-mo-rong-kinh-doanh-112379.html">
                            <input type="hidden" name="__PARAMS_ID_WIDGET" class="__PARAMS_ID_WIDGET" data-type="user_comments" value="MTEyMzc5">
                        </div>
                        <div class="main-cate tags clearfix">
                                                        <span>Tags:</span>
                                                        <a href="https://thoibaonganhang.vn/tag/doanh-nghiep-7.tag" title="doanh nghiệp">doanh nghiệp</a>
                                                        <a href="https://thoibaonganhang.vn/tag/kinh-doanh-422.tag" title="Kinh doanh">Kinh doanh</a>
                                                    </div>
                                                <div class="main-cate">
                            <div class="cat-head no-border clearfix">
                                <div class="inner"><span class="cat-name">Có liên quan</span></div>
                            </div>
                            <ul class="list-news list-hr list-hr3 clearfix">
                                                                <li>
                                                                                <a href="https://thoibaonganhang.vn/de-xuat-7-doanh-nghiep-nha-nuoc-ty-usd-cho-vai-tro-chim-dau-dan-112402.html" title="Đề xuất 7 doanh nghiệp nhà nước " tỷ="" usd"="" cho="" vai="" trò="" "chim="" đầu="" đàn""="" class="box-img">
                                        <img src="https://thoibaonganhang.vn/stores/news_dataimages/canhnq/032021/10/16/5956_IMG-4814.jpg" alt="de xuat 7 doanh nghiep nha nuoc ty usd cho vai tro chim dau dan">
                                    </a>
                                                                        <div class="box-title">
                                        <a class="title" href="https://thoibaonganhang.vn/de-xuat-7-doanh-nghiep-nha-nuoc-ty-usd-cho-vai-tro-chim-dau-dan-112402.html" title="Đề xuất 7 doanh nghiệp nhà nước " tỷ="" usd"="" cho="" vai="" trò="" "chim="" đầu="" đàn""="">
                                            Đề xuất 7 doanh nghiệp nhà nước "tỷ USD" cho vai trò "chim đầu đàn"                                        </a>
                                                                            </div>
                                </li>
                                                                <li>
                                                                                <a href="https://thoibaonganhang.vn/seabank-va-nhung-loi-the-de-but-pha-112381.html" title="SeABank và những lợi thế để bứt phá" class="box-img">
                                        <img src="https://thoibaonganhang.vn/stores/news_dataimages/minhvl/032021/09/18/1523_15a-30_Copy.jpg" alt="seabank va nhung loi the de but pha">
                                    </a>
                                                                        <div class="box-title">
                                        <a class="title" href="https://thoibaonganhang.vn/seabank-va-nhung-loi-the-de-but-pha-112381.html" title="SeABank và những lợi thế để bứt phá">
                                            SeABank và những lợi thế để bứt phá                                        </a>
                                                                            </div>
                                </li>
                                                                <li>
                                                                                <a href="https://thoibaonganhang.vn/doanh-nghiep-do-phu-nu-lam-chu-vuon-tam-cao-moi-112380.html" title="Doanh nghiệp do phụ nữ làm chủ vươn tầm cao mới" class="box-img">
                                        <img src="https://thoibaonganhang.vn/stores/news_dataimages/minhvl/032021/09/18/1520_88.jpg" alt="doanh nghiep do phu nu lam chu vuon tam cao moi">
                                    </a>
                                                                        <div class="box-title">
                                        <a class="title" href="https://thoibaonganhang.vn/doanh-nghiep-do-phu-nu-lam-chu-vuon-tam-cao-moi-112380.html" title="Doanh nghiệp do phụ nữ làm chủ vươn tầm cao mới">
                                            Doanh nghiệp do phụ nữ làm chủ vươn tầm cao mới                                        </a>
                                                                            </div>
                                </li>
                                                            </ul>
                        </div>
                            
                        <div class="main-cate before-after clearfix">
                                                        <div class="before left">
                                <div class="label">Bài trước đó</div>
                                                                <div class="link">
                                    <a href="https://thoibaonganhang.vn/nganh-thue-tap-trung-kiem-tra-phat-hien-va-xu-ly-cac-vi-pham-phap-luat-ve-hoa-don-112426.html">Ngành Thuế tập trung kiểm tra, phát hiện và xử lý các vi phạm pháp luật về hóa đơn</a>
                                                                    </div>
                                                            </div>
                                                        <div class="after right">
                                <div class="label">Bài sau đó</div>
                                                                <div class="link">
                                    <a href="https://thoibaonganhang.vn/bao-cao-tai-chinh-hop-nhat-2020-flc-lai-tren-420-ty-dong-vuot-xa-ke-hoach-nam-112427.html">Báo cáo tài chính hợp nhất 2020: FLC lãi trên 420 tỷ đồng, vượt xa kế hoạch năm</a>
                                                                    </div>
                                                            </div>
                                                    </div>
                        
                                                <div id="user-comment" class="main-cate clearfix">
                                                        <div class="__API_WIDGET" data-type="user_comments" data-url="https://thoibaonganhang.vn/apicenter@/user_comments&amp;tpl_gui=tpl_member_comments_file_1&amp;sidinfo=51&amp;secure_token=01f218d1cb50a792441c784ab176c9d0"><script language="javascript">

$(document).ready(function() {						
	
	$('.__MB_ACTION_POST_COMMENT').click(function(){			
		var getFormID			=	$(this).attr('data-item');
		var checkContent		=	$('#__MB_ARTICLE_COMMENTS_FORM'+getFormID+' textarea[name="__comment"]').val();				
		if (checkContent==''){
			$('#__MB_ARTICLE_COMMENTS_FORM'+getFormID+' #__MB_CONTENT_EMPTY_ROOT').html('Nội dung không được để trống!');
			return false;
		}			
		if (checkContent.length<30){
			$('#__MB_ARTICLE_COMMENTS_FORM'+getFormID+' #__MB_CONTENT_EMPTY_ROOT').html('Nội dung phải dài tối thiểu 10 từ!');
			return false;
		}
		mastercms_confirmation_box($(this).attr('href')+'&randTime='+genTime(),'90%','auto',true,'#TITLE_HOLDER','Comment','#TEXTDATA_HOLDER',$('#__MB_ARTICLE_COMMENTS_FORM'+getFormID+' .__comment').val());			
		return false;			
	});	
	
	
	$('textarea[name="__comment"]').click(function(){
		$('.__MB_CONTENT_EMPTY').html('');
	});
		
	$('.__MB_ACTION_POST_COMMENT-SUB').click(function(){			
		var getFormID			=	$(this).attr('data-item');
		var getFormHref			=	$(this).attr('href');
		var checkContent		=	$('#__MB_ARTICLE_COMMENTS_FORM'+getFormID+' textarea[name="__comment"]').val();				
		if (checkContent==''){
			$('#__MB_CONTENT_EMPTY_'+getFormID).html('Nội dung không được để trống!');
			return false;
		}
		
		if (checkContent.length<30){
			$('#__MB_CONTENT_EMPTY_'+getFormID).html('Nội dung phải dài tối thiểu 10 từ !');
			return false;
		}			
		mastercms_confirmation_box($(this).attr('href')+'&randTime='+genTime(),'90%','auto',true,'#TITLE_HOLDER','Reply','#TEXTDATA_HOLDER',checkContent);			 						
		return false;			
	});
		
	
	$('ul.comments li .comment-actions a.btnReply').click(function(){
		if($(this).next().next().next('.reply').is(':hidden')){
			$(this).next().next().next('.reply').show();
		}else{$(this).next().next().next('.reply').hide();}
	});
	
	$('.order a.orderbyimportance').click(function(){
		$(this).addClass('current');
		$('.order a.orderbytime').removeClass('current');
		//$('.cm-newest').hide();	
		//$('.cm-hotest').show();
	});
	
	$('.order a.orderbytime').click(function(){
		$(this).addClass('current');
		$('.order a.orderbyimportance').removeClass('current');
		//$('.cm-hotest').hide();	
		//$('.cm-newest').show();
	});
	
	$('.__MB_LIKE_ACT,.__MB_DISLIKE_ACT').click(function(){		
		var getDataItem			=	$(this).attr('data-item');
		var getDataType			=	$(this).attr('data-type');		
		submit_comments_social_form($(this),'#__MB_ARTICLE_COMMENTS_FORM'+getDataItem,getDataType);		
		return false;		
	});	
	check_socialitem();	
	$('.__MB_FILTER_COMMENT').click(function(){
		comment_filter('&set_cm_order_by='+$(this).attr('data-param'));
	});
	
	$('.__MB_CM_PAGING a').click(function(){
		//$(document).scrollTo('#commnet-top');
		$('body,html').animate({
			scrollTop: $("#commnet-top").offset().top
		}, 900);
		comment_filter($(this).attr('href'));		
		return false;
	});	
});
function comment_filter(more_param){
	var getCmUrl				=	$('.__API_WIDGET[data-type="user_comments"]').attr('data-url');
	if(getCmUrl!='' && getCmUrl!=undefined){
		var checkValidApiParamsWidgets	=	$('input[name="__PARAMS_ID_WIDGET"]').size();
		if (checkValidApiParamsWidgets>0){
			var setValidApiParamsWidgets	=	'';
			$('input[name="__PARAMS_ID_WIDGET"]').each(function(index, element) {
				setValidApiParamsWidgets=	'&params['+$(this).attr('data-type')+']='+$(this).val();						
			});
			var getCheckedFilterValue		=	$('.current').attr('data-param');
			var getCheckedFilterValueSql	=	'';
			if(getCheckedFilterValue!='' && getCheckedFilterValue!=undefined){
				getCheckedFilterValueSql	=	'&set_cm_order_by='+getCheckedFilterValue;
			}
			$('.__API_WIDGET[data-type="user_comments"]').load(getCmUrl+setValidApiParamsWidgets+getCheckedFilterValueSql+more_param,'',function(){
					var getCheckedFilter	=	$('input[name="__CHECKED_FILTER"]').val();
					$('.__MB_FILTER_COMMENT').each(function(index, element) {
                        if(getCheckedFilter==$(this).attr('data-param')){
							$(this).addClass('current');
						}else{
							$(this).removeClass('current');
						}
                    });		
			});

		}
		
	}
}
</script>
<div class="box-reply clearfix">
    <a name="view_comments"></a>	
    <form id="__MB_ARTICLE_COMMENTS_FORM9ccb03ca571e5f4de19d99a78d19650c" name="__MB_ARTICLE_COMMENTS_FORM"> 
        <div class="article-comment clearfix">
        	<div class="title">
                <span>Comments</span>
            </div>
            <div class="box-comment clearfix">
                <p class="content">
                    <textarea name="__comment" class="__comment" placeholder="Nhập tối thiểu 10 từ, chúng tôi giữ toàn quyền kiểm duyệt trước khi đăng tải."></textarea>
                </p>
                 <a class="__MB_ACTION_POST_COMMENT" data-type="user_comments" data-item="9ccb03ca571e5f4de19d99a78d19650c" href="https://thoibaonganhang.vn/apicenter@/user_comments&amp;tpl_gui=tpl_comment_confirm_box&amp;sidinfo=2&amp;article_id=MTEyMzc5">Send</a>
                <div class="__MB_CONTENT_EMPTY" id="__MB_CONTENT_EMPTY_ROOT" style="color:#FF3300;"></div>
            </div>
        </div>
    </form>      
      
         
</div></div>                                                    </div>
                                            </div>
                    <div class="w160 right">
                                                <div class="sticky-div category banner160">
                                                        <div class="banner banner-item">
                                <a href="https://thoibaonganhang.vn/adsfw/1/0/NDM=&amp;mode=default&amp;zone=banner-w160px-chi-tiet" class="__ads_click" target="_blank"><img border="0" src="https://thoibaonganhang.vn/stores/ads_data/thanhlm/042020/23/10/3655_0002.jpg" alt="logo-ocb" style="vertical-align:middle;" width="160" height="150"></a>                            </div>
                                                    </div>
                                            </div>
                </div>
                @include('page.tinnoibat')
                @include('page.video')
                            </div>
            <div class="w300 right">

    <!-- banner 300px -->    <div class="category banner300">
                <div class="banner-item">
            <a href="https://thoibaonganhang.vn/adsfw/1/0/NzM=&amp;mode=default&amp;zone=banner-300px-liet-ke-chi-tiet" class="__ads_click" target="_blank"><img border="0" src="https://thoibaonganhang.vn/stores/ads_data/thanhlm/052017/23/14/aa19037c445c3b4258dfe7b7ccb0f455_banner.jpg" alt="sun-group" style="vertical-align:middle;" width="300" height="200"></a>        </div>
                <div class="banner-item">
            <a href="https://thoibaonganhang.vn/adsfw/1/0/MTIy&amp;mode=default&amp;zone=banner-300px-liet-ke-chi-tiet" class="__ads_click" target="_blank"><img border="0" src="https://thoibaonganhang.vn/stores/ads_data/thanhlm/012021/19/14/0735_300x250-tien-gui-tiet-kiem-.png" alt="vietinbank-300x250" style="vertical-align:middle;" width="300" height="250"></a>        </div>
                <div class="banner-item">
            <a href="https://thoibaonganhang.vn/adsfw/1/0/MTI0&amp;mode=default&amp;zone=banner-300px-liet-ke-chi-tiet" class="__ads_click" target="_blank"><img border="0" src="https://thoibaonganhang.vn/stores/ads_data/thanhlm/122020/10/10/1757_Banner.png" alt="shb" style="vertical-align:middle;" width="300" height="250"></a>        </div>
            </div>
    <!-- widget số liệu -->
    <div class="clearfix">
        <div class="wiget_index infor_ck" style="border: 1px solid #ddd;box-shadow: 3px 3px 3px -5px;">
    <h2>Thông tin chứng khoán</h2>
    <ul class="__MB_NEWS_TAB1 nav nav-tabs clearfix">
        <li class="first active">
            <a id="1" href="javascript:void(0)">VN-INDEX</a>
        </li>
        <li>
            <a id="2" href="javascript:void(0)">HNX-INDEX</a>
        </li>
    </ul>
    <div class="ck_img active __MB_CONTAINER_READ1 __MB_CONTAINER_READ1_1">
        <div class="QuoteRightChart_first"><img style="border-width: 0px;" alt="Cập nhật ảnh..." src="https://stockbiz.vn/Charts/HOSERealtimeChart.aspx?w=299&amp;h=170&amp;l=12&amp;t=633946588043750000" id="ctl00_webPartManager_wp241180730_wp2082923397_hoseChart_imgChart" width="270" height="170/"></div>
        <span class="source_stock" style="color:#999; float: right;margin: 10px;">Nguồn : stockbiz.vn</span>
    </div>
    <div class="ck_img active __MB_CONTAINER_READ1 __MB_CONTAINER_READ1_2" style="display:none;">
        <div class="QuoteRightChart_first"><img style="border-width: 0px;" alt="Cập nhật ảnh..." src="https://stockbiz.vn/Charts/HASTCRealtimeChart.aspx?w=299&amp;h=170&amp;l=12&amp;t=633946594225312500" id="ctl00_webPartManager_wp241180730_wp2082923397_hastcChart_imgChart" width="270" height="170/"></div>
        <span class="source_stock" style="color:#999; float: right;margin: 10px;">Nguồn : stockbiz.vn</span>
    </div>
</div>
    <script language="javascript">
	    $(document).ready(function() {	
			$('._MB_COL_INDEX').each(function(index, element) {
				var getColIndex			=	$(this).attr('index_value');
				
				var max = 0;
				$('.__MB_RATE_VALUE[index_value="'+getColIndex+'"]').each(function()
				{
				   var getText			=	$(this).text();
				   var res				= 	getText.replace(",", "");
				   if(res=='NaN') res	=	0;	
				   $this = parseInt( res);
				   if ($this > max) max = $this;				   
				});	

				 var max2				=	0;
				$('.__MB_RATE_VALUE[index_value="'+getColIndex+'"]').each(function()
				{
				   var getText			=	$(this).text();
				   var res				= 	getText.replace(",", "");
				   if(res=='NaN') res	=	0;	
				   $this = parseInt( res);
				   if ($this > max2) max2 = $this;				   
				 	 if(max2==max){														
						$(this).attr('max_value',max);					
					} 				   
				});
				
				$('.__MB_RATE_VALUE[index_value="'+getColIndex+'"]').each(function()
				{				   
				   var getText			=	$(this).text();
				   var res				= 	getText.replace(",", "");
				   if(res=='NaN') res	=	0;	
				   $this = parseInt( res);
				   
				   if($(this).attr('max_value')!=undefined && $this==$(this).attr('max_value')){
					 $(this).css('background-color','#F30');				
				   }				   
				});
				


				//alert(max)		
				//return false;
				
			});
		});
	</script>	
    @include('page.laixuat')
    @include('page.tigia')
   </div>

    <!-- liệt kê các bài của danh mục con --><div style="margin-top: 20px;"></div>
    <!-- TO BE CONTINUED --><!-- tin đọc nhiều, đặt cuối cùng, sticky khi scroll -->    <div id="docnhieu" class="sticky-div category">
        @include('page.tindocnhieu')
    </div>        </div>

        <div class="clearfix"></div>
            </div>
</main>
@endsection