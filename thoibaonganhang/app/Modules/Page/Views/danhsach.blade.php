@extends('page.master')
@section('title','Danh sách')

@section('content')
<main id="list-page">
    <style>
        .wrapper{position: relative;}

        /* to make the height of col300 equal to wrapper container */
        .wrapper .w300 {
            bottom: 0;
            position: absolute;
            right: 0;
            top: 0;
        }
        .main-content{padding: 30px 0;}
        .clear-paging a,
        .clear-paging span:last-child,
        .clear-paging span.current {
            display: inline-block;
            width: 30px;
            height: 28px;
            /* background-color: #c2c2c2; */
            line-height: 28px;
            color: #999;
            text-align: center;
            cursor: pointer;
            border: 1px solid #999;
        }

        .clear-paging span.current,
        .clear-paging span:last-child,
        .clear-paging a:hover {
            background-color: red;
            color: #fff;
        }

        .__MB_ARTICLE_PAGING {
            float: right;
            margin-top: 40px;
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
            <div class="w867 left">
                                <ul class="list-news layout1">
                                        <li>
                                                <a href="https://thoibaonganhang.vn/bao-cao-tai-chinh-hop-nhat-2020-flc-lai-tren-420-ty-dong-vuot-xa-ke-hoach-nam-112427.html" class="box-img" title="Báo cáo tài chính hợp nhất 2020: FLC lãi trên 420 tỷ đồng, vượt xa kế hoạch năm">
                            <img src="https://thoibaonganhang.vn/stores/news_dataimages/minhvl/032021/11/14/medium/4444_11_Copy.jpg" alt="Báo cáo tài chính hợp nhất 2020: FLC lãi trên 420 tỷ đồng, vượt xa kế hoạch năm">
                        </a>
                                                <div class="box-text">
                            <div class="box-title">
                                <a href="https://thoibaonganhang.vn/bao-cao-tai-chinh-hop-nhat-2020-flc-lai-tren-420-ty-dong-vuot-xa-ke-hoach-nam-112427.html" class="title" title="Báo cáo tài chính hợp nhất 2020: FLC lãi trên 420 tỷ đồng, vượt xa kế hoạch năm">
                                    Báo cáo tài chính hợp nhất 2020: FLC lãi trên 420 tỷ đồng, vượt xa kế hoạch năm                                                                    </a>
                            </div>
                            <div class="box-meta">
                                <span class="publish-time"><i class="far fa-clock"></i> <span class="format_time">11/03/2021 15:47</span></span>
                            </div>
                        </div>
                    </li>
                                        <li>
                                                <a href="https://thoibaonganhang.vn/nganh-thue-tap-trung-kiem-tra-phat-hien-va-xu-ly-cac-vi-pham-phap-luat-ve-hoa-don-112426.html" class="box-img" title="Ngành Thuế tập trung kiểm tra, phát hiện và xử lý các vi phạm pháp luật về hóa đơn">
                            <img src="https://thoibaonganhang.vn/stores/news_dataimages/minhvl/032021/11/14/medium/4154_tu-van-phap-luat.jpg" alt="Ngành Thuế tập trung kiểm tra, phát hiện và xử lý các vi phạm pháp luật về hóa đơn">
                        </a>
                                                <div class="box-text">
                            <div class="box-title">
                                <a href="https://thoibaonganhang.vn/nganh-thue-tap-trung-kiem-tra-phat-hien-va-xu-ly-cac-vi-pham-phap-luat-ve-hoa-don-112426.html" class="title" title="Ngành Thuế tập trung kiểm tra, phát hiện và xử lý các vi phạm pháp luật về hóa đơn">
                                    Ngành Thuế tập trung kiểm tra, phát hiện và xử lý các vi phạm pháp luật về hóa đơn                                                                    </a>
                            </div>
                            <div class="box-meta">
                                <span class="publish-time"><i class="far fa-clock"></i> <span class="format_time">11/03/2021 15:45</span></span>
                            </div>
                        </div>
                    </li>
                                        <li>
                                                <a href="https://thoibaonganhang.vn/kinh-te-phat-trien-ben-vung-phai-dua-vao-doi-ngu-doanh-nghiep-dan-toc-112366.html" class="box-img" title="Kinh tế phát triển bền vững: Phải dựa vào đội ngũ doanh nghiệp dân tộc">
                            <img src="https://thoibaonganhang.vn/stores/news_dataimages/khaitq/032021/11/10/medium/5406_nha-may-o-to-viet-nam.jpg" alt="Kinh tế phát triển bền vững: Phải dựa vào đội ngũ doanh nghiệp dân tộc">
                        </a>
                                                <div class="box-text">
                            <div class="box-title">
                                <a href="https://thoibaonganhang.vn/kinh-te-phat-trien-ben-vung-phai-dua-vao-doi-ngu-doanh-nghiep-dan-toc-112366.html" class="title" title="Kinh tế phát triển bền vững: Phải dựa vào đội ngũ doanh nghiệp dân tộc">
                                    Kinh tế phát triển bền vững: Phải dựa vào đội ngũ doanh nghiệp dân tộc                                                                    </a>
                            </div>
                            <div class="box-meta">
                                <span class="publish-time"><i class="far fa-clock"></i> <span class="format_time">11/03/2021 07:52</span></span>
                            </div>
                        </div>
                    </li>
                                        <li>
                                                <a href="https://thoibaonganhang.vn/thay-doi-chinh-sach-ho-tro-khoi-nghiep-112367.html" class="box-img" title="Thay đổi chính sách hỗ trợ khởi nghiệp">
                            <img src="https://thoibaonganhang.vn/stores/news_dataimages/minhvl/032021/09/20/medium/3915_muon-khoi-nghiep-hay-danh-5-phut-doc-bai-viet-nay.jpg" alt="Thay đổi chính sách hỗ trợ khởi nghiệp">
                        </a>
                                                <div class="box-text">
                            <div class="box-title">
                                <a href="https://thoibaonganhang.vn/thay-doi-chinh-sach-ho-tro-khoi-nghiep-112367.html" class="title" title="Thay đổi chính sách hỗ trợ khởi nghiệp">
                                    Thay đổi chính sách hỗ trợ khởi nghiệp                                                                    </a>
                            </div>
                            <div class="box-meta">
                                <span class="publish-time"><i class="far fa-clock"></i> <span class="format_time">11/03/2021 07:52</span></span>
                            </div>
                        </div>
                    </li>
                                        <li>
                                                <a href="https://thoibaonganhang.vn/de-xuat-7-doanh-nghiep-nha-nuoc-ty-usd-cho-vai-tro-chim-dau-dan-112402.html" class="box-img" title="Đề xuất 7 doanh nghiệp nhà nước " tỷ="" usd"="" cho="" vai="" trò="" "chim="" đầu="" đàn""="">
                            <img src="https://thoibaonganhang.vn/stores/news_dataimages/canhnq/032021/10/16/medium/5956_IMG-4814.jpg" alt="Đề xuất 7 doanh nghiệp nhà nước " tỷ="" usd"="" cho="" vai="" trò="" "chim="" đầu="" đàn""="">
                        </a>
                                                <div class="box-text">
                            <div class="box-title">
                                <a href="https://thoibaonganhang.vn/de-xuat-7-doanh-nghiep-nha-nuoc-ty-usd-cho-vai-tro-chim-dau-dan-112402.html" class="title" title="Đề xuất 7 doanh nghiệp nhà nước " tỷ="" usd"="" cho="" vai="" trò="" "chim="" đầu="" đàn""="">
                                    Đề xuất 7 doanh nghiệp nhà nước "tỷ USD" cho vai trò "chim đầu đàn"                                                                    </a>
                            </div>
                            <div class="box-meta">
                                <span class="publish-time"><i class="far fa-clock"></i> <span class="format_time">10/03/2021 17:02</span></span>
                            </div>
                        </div>
                    </li>
                                        <li>
                                                <a href="https://thoibaonganhang.vn/nhap-sieu-chi-460-trieu-usd-trong-thang-hai-112396.html" class="box-img" title="Nhập siêu chỉ 460 triệu USD trong tháng Hai">
                            <img src="https://thoibaonganhang.vn/stores/news_dataimages/quanva/032021/10/14/medium/3018_1.png" alt="Nhập siêu chỉ 460 triệu USD trong tháng Hai">
                        </a>
                                                <div class="box-text">
                            <div class="box-title">
                                <a href="https://thoibaonganhang.vn/nhap-sieu-chi-460-trieu-usd-trong-thang-hai-112396.html" class="title" title="Nhập siêu chỉ 460 triệu USD trong tháng Hai">
                                    Nhập siêu chỉ 460 triệu USD trong tháng Hai                                                                    </a>
                            </div>
                            <div class="box-meta">
                                <span class="publish-time"><i class="far fa-clock"></i> <span class="format_time">10/03/2021 14:34</span></span>
                            </div>
                        </div>
                    </li>
                                        <li>
                                                <a href="https://thoibaonganhang.vn/doanh-nghiep-fast500-thach-thuc-tang-truong-va-co-hoi-vuot-len-112393.html" class="box-img" title="Doanh nghiệp FAST500: Thách thức tăng trưởng và cơ hội vượt lên">
                            <img src="https://thoibaonganhang.vn/stores/news_dataimages/quanva/032021/10/10/medium/5140_image001.jpg" alt="Doanh nghiệp FAST500: Thách thức tăng trưởng và cơ hội vượt lên">
                        </a>
                                                <div class="box-text">
                            <div class="box-title">
                                <a href="https://thoibaonganhang.vn/doanh-nghiep-fast500-thach-thuc-tang-truong-va-co-hoi-vuot-len-112393.html" class="title" title="Doanh nghiệp FAST500: Thách thức tăng trưởng và cơ hội vượt lên">
                                    Doanh nghiệp FAST500: Thách thức tăng trưởng và cơ hội vượt lên                                                                    </a>
                            </div>
                            <div class="box-meta">
                                <span class="publish-time"><i class="far fa-clock"></i> <span class="format_time">10/03/2021 11:04</span></span>
                            </div>
                        </div>
                    </li>
                                        <li>
                                                <a href="https://thoibaonganhang.vn/co-gi-trong-giai-phap-dinh-danh-dien-tu-ekyc-tu-kms-112390.html" class="box-img" title="Có gì trong giải pháp định danh điện tử eKYC từ KMS?">
                            <img src="https://thoibaonganhang.vn/stores/news_dataimages/quanva/032021/10/09/medium/4733_image_3_2.png" alt="Có gì trong giải pháp định danh điện tử eKYC từ KMS?">
                        </a>
                                                <div class="box-text">
                            <div class="box-title">
                                <a href="https://thoibaonganhang.vn/co-gi-trong-giai-phap-dinh-danh-dien-tu-ekyc-tu-kms-112390.html" class="title" title="Có gì trong giải pháp định danh điện tử eKYC từ KMS?">
                                    Có gì trong giải pháp định danh điện tử eKYC từ KMS?                                                                    </a>
                            </div>
                            <div class="box-meta">
                                <span class="publish-time"><i class="far fa-clock"></i> <span class="format_time">10/03/2021 09:50</span></span>
                            </div>
                        </div>
                    </li>
                                        <li>
                                                <a href="https://thoibaonganhang.vn/doanh-nghiep-bao-lo-nhung-lai-mo-rong-kinh-doanh-112379.html" class="box-img" title="Doanh nghiệp báo lỗ nhưng lại mở rộng kinh doanh">
                            <img src="https://thoibaonganhang.vn/stores/news_dataimages/minhvl/032021/09/18/medium/1528_14a30_Copy.jpg" alt="Doanh nghiệp báo lỗ nhưng lại mở rộng kinh doanh">
                        </a>
                                                <div class="box-text">
                            <div class="box-title">
                                <a href="https://thoibaonganhang.vn/doanh-nghiep-bao-lo-nhung-lai-mo-rong-kinh-doanh-112379.html" class="title" title="Doanh nghiệp báo lỗ nhưng lại mở rộng kinh doanh">
                                    Doanh nghiệp báo lỗ nhưng lại mở rộng kinh doanh                                                                    </a>
                            </div>
                            <div class="box-meta">
                                <span class="publish-time"><i class="far fa-clock"></i> <span class="format_time">10/03/2021 09:00</span></span>
                            </div>
                        </div>
                    </li>
                                        <li>
                                                <a href="https://thoibaonganhang.vn/doanh-nghiep-nganh-thep-can-nhung-chinh-sach-ho-tro-bo-sung-112371.html" class="box-img" title="Doanh nghiệp ngành thép: Cần những chính sách hỗ trợ bổ sung">
                            <img src="https://thoibaonganhang.vn/stores/news_dataimages/minhvl/032021/09/18/medium/1550_8c-30_Copy.jpg" alt="Doanh nghiệp ngành thép: Cần những chính sách hỗ trợ bổ sung">
                        </a>
                                                <div class="box-text">
                            <div class="box-title">
                                <a href="https://thoibaonganhang.vn/doanh-nghiep-nganh-thep-can-nhung-chinh-sach-ho-tro-bo-sung-112371.html" class="title" title="Doanh nghiệp ngành thép: Cần những chính sách hỗ trợ bổ sung">
                                    Doanh nghiệp ngành thép: Cần những chính sách hỗ trợ bổ sung                                                                    </a>
                            </div>
                            <div class="box-meta">
                                <span class="publish-time"><i class="far fa-clock"></i> <span class="format_time">10/03/2021 08:56</span></span>
                            </div>
                        </div>
                    </li>
                                        <li>
                                                <a href="https://thoibaonganhang.vn/doanh-nghiep-do-phu-nu-lam-chu-vuon-tam-cao-moi-112380.html" class="box-img" title="Doanh nghiệp do phụ nữ làm chủ vươn tầm cao mới">
                            <img src="https://thoibaonganhang.vn/stores/news_dataimages/minhvl/032021/09/18/medium/1520_88.jpg" alt="Doanh nghiệp do phụ nữ làm chủ vươn tầm cao mới">
                        </a>
                                                <div class="box-text">
                            <div class="box-title">
                                <a href="https://thoibaonganhang.vn/doanh-nghiep-do-phu-nu-lam-chu-vuon-tam-cao-moi-112380.html" class="title" title="Doanh nghiệp do phụ nữ làm chủ vươn tầm cao mới">
                                    Doanh nghiệp do phụ nữ làm chủ vươn tầm cao mới                                                                    </a>
                            </div>
                            <div class="box-meta">
                                <span class="publish-time"><i class="far fa-clock"></i> <span class="format_time">10/03/2021 08:50</span></span>
                            </div>
                        </div>
                    </li>
                                        <li>
                                                <a href="https://thoibaonganhang.vn/viet-nam-co-ty-le-lanh-dao-nu-nganh-thuong-mai-dien-tu-cao-nhat-dong-nam-a-112350.html" class="box-img" title="Việt Nam có tỷ lệ lãnh đạo nữ ngành thương mại điện tử cao nhất Đông Nam Á">
                            <img src="https://thoibaonganhang.vn/stores/news_dataimages/quanva/032021/09/14/medium/2455_1.png" alt="Việt Nam có tỷ lệ lãnh đạo nữ ngành thương mại điện tử cao nhất Đông Nam Á">
                        </a>
                                                <div class="box-text">
                            <div class="box-title">
                                <a href="https://thoibaonganhang.vn/viet-nam-co-ty-le-lanh-dao-nu-nganh-thuong-mai-dien-tu-cao-nhat-dong-nam-a-112350.html" class="title" title="Việt Nam có tỷ lệ lãnh đạo nữ ngành thương mại điện tử cao nhất Đông Nam Á">
                                    Việt Nam có tỷ lệ lãnh đạo nữ ngành thương mại điện tử cao nhất Đông Nam Á                                                                    </a>
                            </div>
                            <div class="box-meta">
                                <span class="publish-time"><i class="far fa-clock"></i> <span class="format_time">09/03/2021 14:37</span></span>
                            </div>
                        </div>
                    </li>
                                        <li>
                                                <a href="https://thoibaonganhang.vn/pakistan-khoi-xuong-dieu-tra-cbpg-doi-voi-thep-can-nguoi-cua-viet-nam-112343.html" class="box-img" title="Pakistan khởi xướng điều tra CBPG đối với thép cán nguội của Việt Nam">
                            <img src="https://thoibaonganhang.vn/stores/news_dataimages/quanva/032021/09/10/medium/5933_1.jpg" alt="Pakistan khởi xướng điều tra CBPG đối với thép cán nguội của Việt Nam">
                        </a>
                                                <div class="box-text">
                            <div class="box-title">
                                <a href="https://thoibaonganhang.vn/pakistan-khoi-xuong-dieu-tra-cbpg-doi-voi-thep-can-nguoi-cua-viet-nam-112343.html" class="title" title="Pakistan khởi xướng điều tra CBPG đối với thép cán nguội của Việt Nam">
                                    Pakistan khởi xướng điều tra CBPG đối với thép cán nguội của Việt Nam                                                                    </a>
                            </div>
                            <div class="box-meta">
                                <span class="publish-time"><i class="far fa-clock"></i> <span class="format_time">09/03/2021 11:05</span></span>
                            </div>
                        </div>
                    </li>
                                        <li>
                                                <a href="https://thoibaonganhang.vn/nhieu-dia-phuong-dieu-chinh-bang-gia-dat-lam-tang-chi-phi-doi-voi-doanh-nghiep-112330.html" class="box-img" title="Nhiều địa phương điều chỉnh bảng giá đất làm tăng chi phí đối với doanh nghiệp">
                            <img src="https://thoibaonganhang.vn/stores/news_dataimages/canhnq/032021/09/07/medium/552c1b1c0c4af614af5b20210309074556.6100600.jpg" alt="Nhiều địa phương điều chỉnh bảng giá đất làm tăng chi phí đối với doanh nghiệp">
                        </a>
                                                <div class="box-text">
                            <div class="box-title">
                                <a href="https://thoibaonganhang.vn/nhieu-dia-phuong-dieu-chinh-bang-gia-dat-lam-tang-chi-phi-doi-voi-doanh-nghiep-112330.html" class="title" title="Nhiều địa phương điều chỉnh bảng giá đất làm tăng chi phí đối với doanh nghiệp">
                                    Nhiều địa phương điều chỉnh bảng giá đất làm tăng chi phí đối với doanh nghiệp                                                                    </a>
                            </div>
                            <div class="box-meta">
                                <span class="publish-time"><i class="far fa-clock"></i> <span class="format_time">09/03/2021 07:50</span></span>
                            </div>
                        </div>
                    </li>
                                        <li>
                                                <a href="https://thoibaonganhang.vn/quang-ninh-su-than-tinh-thu-tuc-nhanh-chong-la-dong-luc-hoi-tu-doanh-nghiep-lon-112319.html" class="box-img" title="Quảng Ninh: Sự thân tình, thủ tục nhanh chóng là động lực hội tụ doanh nghiệp lớn">
                            <img src="https://thoibaonganhang.vn/stores/news_dataimages/minhvl/032021/08/15/medium/3404_image001.jpg" alt="Quảng Ninh: Sự thân tình, thủ tục nhanh chóng là động lực hội tụ doanh nghiệp lớn">
                        </a>
                                                <div class="box-text">
                            <div class="box-title">
                                <a href="https://thoibaonganhang.vn/quang-ninh-su-than-tinh-thu-tuc-nhanh-chong-la-dong-luc-hoi-tu-doanh-nghiep-lon-112319.html" class="title" title="Quảng Ninh: Sự thân tình, thủ tục nhanh chóng là động lực hội tụ doanh nghiệp lớn">
                                    Quảng Ninh: Sự thân tình, thủ tục nhanh chóng là động lực hội tụ doanh nghiệp lớn                                                                    </a>
                            </div>
                            <div class="box-meta">
                                <span class="publish-time"><i class="far fa-clock"></i> <span class="format_time">08/03/2021 15:47</span></span>
                            </div>
                        </div>
                    </li>
                                        <li>
                                                <a href="https://thoibaonganhang.vn/vuc-day-nganh-cong-nghiep-co-khi-112298.html" class="box-img" title="Vực dậy ngành công nghiệp cơ khí">
                            <img src="https://thoibaonganhang.vn/stores/news_dataimages/minhvl/032021/08/09/medium/5643_at8b_Copy.jpg" alt="Vực dậy ngành công nghiệp cơ khí">
                        </a>
                                                <div class="box-text">
                            <div class="box-title">
                                <a href="https://thoibaonganhang.vn/vuc-day-nganh-cong-nghiep-co-khi-112298.html" class="title" title="Vực dậy ngành công nghiệp cơ khí">
                                    Vực dậy ngành công nghiệp cơ khí                                                                    </a>
                            </div>
                            <div class="box-meta">
                                <span class="publish-time"><i class="far fa-clock"></i> <span class="format_time">08/03/2021 10:02</span></span>
                            </div>
                        </div>
                    </li>
                                        <li>
                                                <a href="https://thoibaonganhang.vn/ban-quan-ly-khu-cong-nghe-cao-tp-hcm-nhieu-giai-phap-hieu-qua-de-thu-hut-fdi-112297.html" class="box-img" title="Ban quản lý Khu Công nghệ cao TP. HCM: Nhiều giải pháp hiệu quả để thu hút FDI">
                            <img src="https://thoibaonganhang.vn/stores/news_dataimages/minhvl/032021/08/09/medium/5647_at8_Copy.jpg" alt="Ban quản lý Khu Công nghệ cao TP. HCM: Nhiều giải pháp hiệu quả để thu hút FDI">
                        </a>
                                                <div class="box-text">
                            <div class="box-title">
                                <a href="https://thoibaonganhang.vn/ban-quan-ly-khu-cong-nghe-cao-tp-hcm-nhieu-giai-phap-hieu-qua-de-thu-hut-fdi-112297.html" class="title" title="Ban quản lý Khu Công nghệ cao TP. HCM: Nhiều giải pháp hiệu quả để thu hút FDI">
                                    Ban quản lý Khu Công nghệ cao TP. HCM: Nhiều giải pháp hiệu quả để thu hút FDI                                                                    </a>
                            </div>
                            <div class="box-meta">
                                <span class="publish-time"><i class="far fa-clock"></i> <span class="format_time">08/03/2021 10:00</span></span>
                            </div>
                        </div>
                    </li>
                                        <li>
                                                <a href="https://thoibaonganhang.vn/pho-chu-tich-thuong-truc-hdbank-nguyen-thi-phuong-thao-doi-moi-trong-linh-vuc-ngan-hang-thanh-toan-tao-dot-pha-cho-nen-kinh-te-so-112278.html" class="box-img" title="Phó Chủ tịch thường trực HDBank Nguyễn Thị Phương Thảo: “Đổi mới trong lĩnh vực ngân hàng, thanh toán tạo đột phá cho nền kinh tế số”">
                            <img src="https://thoibaonganhang.vn/stores/news_dataimages/thanhlm/032021/06/19/medium/3305_Hinh_A2.jpg" alt="Phó Chủ tịch thường trực HDBank Nguyễn Thị Phương Thảo: “Đổi mới trong lĩnh vực ngân hàng, thanh toán tạo đột phá cho nền kinh tế số”">
                        </a>
                                                <div class="box-text">
                            <div class="box-title">
                                <a href="https://thoibaonganhang.vn/pho-chu-tich-thuong-truc-hdbank-nguyen-thi-phuong-thao-doi-moi-trong-linh-vuc-ngan-hang-thanh-toan-tao-dot-pha-cho-nen-kinh-te-so-112278.html" class="title" title="Phó Chủ tịch thường trực HDBank Nguyễn Thị Phương Thảo: “Đổi mới trong lĩnh vực ngân hàng, thanh toán tạo đột phá cho nền kinh tế số”">
                                    Phó Chủ tịch thường trực HDBank Nguyễn Thị Phương Thảo: “Đổi mới trong lĩnh vực ngân hàng, thanh toán tạo đột phá cho nền kinh tế số”                                                                    </a>
                            </div>
                            <div class="box-meta">
                                <span class="publish-time"><i class="far fa-clock"></i> <span class="format_time">06/03/2021 19:44</span></span>
                            </div>
                        </div>
                    </li>
                                        <li>
                                                <a href="https://thoibaonganhang.vn/tap-doan-hoa-sen-vu-chay-nha-may-binh-duong-khong-anh-huong-den-san-xuat-kinh-doanh-112276.html" class="box-img" title="Tập đoàn Hoa Sen: Vụ cháy nhà máy Bình Dương không ảnh hưởng đến sản xuất kinh doanh">
                            <img src="https://thoibaonganhang.vn/stores/news_dataimages/quanva/032021/06/18/medium/5832_Hinh_2.jpg" alt="Tập đoàn Hoa Sen: Vụ cháy nhà máy Bình Dương không ảnh hưởng đến sản xuất kinh doanh">
                        </a>
                                                <div class="box-text">
                            <div class="box-title">
                                <a href="https://thoibaonganhang.vn/tap-doan-hoa-sen-vu-chay-nha-may-binh-duong-khong-anh-huong-den-san-xuat-kinh-doanh-112276.html" class="title" title="Tập đoàn Hoa Sen: Vụ cháy nhà máy Bình Dương không ảnh hưởng đến sản xuất kinh doanh">
                                    Tập đoàn Hoa Sen: Vụ cháy nhà máy Bình Dương không ảnh hưởng đến sản xuất kinh doanh                                                                    </a>
                            </div>
                            <div class="box-meta">
                                <span class="publish-time"><i class="far fa-clock"></i> <span class="format_time">06/03/2021 19:00</span></span>
                            </div>
                        </div>
                    </li>
                                        <li>
                                                <a href="https://thoibaonganhang.vn/nganh-ban-le-vung-vang-tang-truong-bat-chap-dich-benh-112273.html" class="box-img" title="Ngành bán lẻ vững vàng tăng trưởng bất chấp dịch bệnh">
                            <img src="https://thoibaonganhang.vn/stores/news_dataimages/thaiha/122020/27/19/medium/0945_0-1606694759_750x0.jpg" alt="Ngành bán lẻ vững vàng tăng trưởng bất chấp dịch bệnh">
                        </a>
                                                <div class="box-text">
                            <div class="box-title">
                                <a href="https://thoibaonganhang.vn/nganh-ban-le-vung-vang-tang-truong-bat-chap-dich-benh-112273.html" class="title" title="Ngành bán lẻ vững vàng tăng trưởng bất chấp dịch bệnh">
                                    Ngành bán lẻ vững vàng tăng trưởng bất chấp dịch bệnh                                                                    </a>
                            </div>
                            <div class="box-meta">
                                <span class="publish-time"><i class="far fa-clock"></i> <span class="format_time">06/03/2021 17:58</span></span>
                            </div>
                        </div>
                    </li>
                                        <li>
                                                <a href="https://thoibaonganhang.vn/deloitte-viet-nam-va-ctcp-dong-luc-hop-tac-chien-luoc-giai-doan-2021-2025-112268.html" class="box-img" title="Deloitte Việt Nam và CTCP Động Lực hợp tác chiến lược giai đoạn 2021 - 2025">
                            <img src="https://thoibaonganhang.vn/stores/news_dataimages/thanhlm/032021/06/10/medium/5831_LY_ky_kYt_thYa_thuYn_hYp_tac_giYa_YYng_LYc_va_Deloitte_ViYt_Nam_3.jpg" alt="Deloitte Việt Nam và CTCP Động Lực hợp tác chiến lược giai đoạn 2021 - 2025">
                        </a>
                                                <div class="box-text">
                            <div class="box-title">
                                <a href="https://thoibaonganhang.vn/deloitte-viet-nam-va-ctcp-dong-luc-hop-tac-chien-luoc-giai-doan-2021-2025-112268.html" class="title" title="Deloitte Việt Nam và CTCP Động Lực hợp tác chiến lược giai đoạn 2021 - 2025">
                                    Deloitte Việt Nam và CTCP Động Lực hợp tác chiến lược giai đoạn 2021 - 2025                                                                    </a>
                            </div>
                            <div class="box-meta">
                                <span class="publish-time"><i class="far fa-clock"></i> <span class="format_time">06/03/2021 11:23</span></span>
                            </div>
                        </div>
                    </li>
                                        <li>
                                                <a href="https://thoibaonganhang.vn/giai-phap-nao-de-doanh-nghiep-tu-nhan-thanh-dan-rong-viet-112252.html" class="box-img" title="Giải pháp nào để doanh nghiệp tư nhân thành " đàn="" rồng="" việt"?"="">
                            <img src="https://thoibaonganhang.vn/stores/news_dataimages/minhvl/032021/05/16/medium/1745_image001.jpg" alt="Giải pháp nào để doanh nghiệp tư nhân thành " đàn="" rồng="" việt"?"="">
                        </a>
                                                <div class="box-text">
                            <div class="box-title">
                                <a href="https://thoibaonganhang.vn/giai-phap-nao-de-doanh-nghiep-tu-nhan-thanh-dan-rong-viet-112252.html" class="title" title="Giải pháp nào để doanh nghiệp tư nhân thành " đàn="" rồng="" việt"?"="">
                                    Giải pháp nào để doanh nghiệp tư nhân thành "đàn rồng Việt"?                                                                    </a>
                            </div>
                            <div class="box-meta">
                                <span class="publish-time"><i class="far fa-clock"></i> <span class="format_time">05/03/2021 16:38</span></span>
                            </div>
                        </div>
                    </li>
                                        <li>
                                                <a href="https://thoibaonganhang.vn/central-retail-cam-ket-phat-trien-moi-truong-ben-vung-voi-nang-luong-tai-tao-112253.html" class="box-img" title="Central Retail cam kết phát triển môi trường bền vững với năng lượng tái tạo">
                            <img src="https://thoibaonganhang.vn/stores/news_dataimages/minhvl/032021/05/16/medium/3245_Hinh_1_hY_thYng_YiYn_mYt_trYi_mai_nha_tYi_trung_tam_thYYng_mYi_GO_QuYng_Ngai_YYa_vao_vYn_hanh_tY_thang_7_nYm_2020_Copy.jpg" alt="Central Retail cam kết phát triển môi trường bền vững với năng lượng tái tạo">
                        </a>
                                                <div class="box-text">
                            <div class="box-title">
                                <a href="https://thoibaonganhang.vn/central-retail-cam-ket-phat-trien-moi-truong-ben-vung-voi-nang-luong-tai-tao-112253.html" class="title" title="Central Retail cam kết phát triển môi trường bền vững với năng lượng tái tạo">
                                    Central Retail cam kết phát triển môi trường bền vững với năng lượng tái tạo                                                                    </a>
                            </div>
                            <div class="box-meta">
                                <span class="publish-time"><i class="far fa-clock"></i> <span class="format_time">05/03/2021 16:36</span></span>
                            </div>
                        </div>
                    </li>
                                        <li>
                                                <a href="https://thoibaonganhang.vn/doanh-nghiep-det-may-day-manh-thi-truong-noi-dia-112235.html" class="box-img" title="Doanh nghiệp dệt may: Đẩy mạnh thị trường nội địa">
                            <img src="https://thoibaonganhang.vn/stores/news_dataimages/minhvl/032021/05/10/medium/3353_8c-28_Copy.jpg" alt="Doanh nghiệp dệt may: Đẩy mạnh thị trường nội địa">
                        </a>
                                                <div class="box-text">
                            <div class="box-title">
                                <a href="https://thoibaonganhang.vn/doanh-nghiep-det-may-day-manh-thi-truong-noi-dia-112235.html" class="title" title="Doanh nghiệp dệt may: Đẩy mạnh thị trường nội địa">
                                    Doanh nghiệp dệt may: Đẩy mạnh thị trường nội địa                                                                    </a>
                            </div>
                            <div class="box-meta">
                                <span class="publish-time"><i class="far fa-clock"></i> <span class="format_time">05/03/2021 10:39</span></span>
                            </div>
                        </div>
                    </li>
                                    </ul>
                <div class="clear-paging">
                                        <div class="grNextPage __MB_ARTICLE_PAGING">
                        <span style=""></span> <span class="current next">|&lt;</span> <span class="current">&lt;</span> <span class="current">1</span> <a rel="nofollow" href="https://thoibaonganhang.vn/doanh-nghiep-doanh-nhan&amp;s_cond=&amp;BRSR=24" onmouseout="window.status=''; return true;" onmouseover="window.status='2'; return true;" title="2">2</a> <a rel="nofollow" href="https://thoibaonganhang.vn/doanh-nghiep-doanh-nhan&amp;s_cond=&amp;BRSR=48" onmouseout="window.status=''; return true;" onmouseover="window.status='3'; return true;" title="3">3</a> <a rel="nofollow" href="https://thoibaonganhang.vn/doanh-nghiep-doanh-nhan&amp;s_cond=&amp;BRSR=72" onmouseout="window.status=''; return true;" onmouseover="window.status='4'; return true;" title="4">4</a> <a rel="nofollow" href="https://thoibaonganhang.vn/doanh-nghiep-doanh-nhan&amp;s_cond=&amp;BRSR=96" onmouseout="window.status=''; return true;" onmouseover="window.status='5'; return true;" title="5">5</a> <a rel="nofollow" href="https://thoibaonganhang.vn/doanh-nghiep-doanh-nhan&amp;s_cond=&amp;BRSR=24" onmouseout="window.status=''; return true;" onmouseover="window.status='24'; return true;" title="24">&gt;</a> <a rel="nofollow" href="https://thoibaonganhang.vn/doanh-nghiep-doanh-nhan&amp;s_cond=&amp;BRSR=12912" onmouseout="window.status=''; return true;" onmouseover="window.status=''; return true;" title="">&gt;|</a>                     </div>
                                    </div>
                
                <div class="clearfix"></div>
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
<!-- TO BE CONTINUED --><!-- tin đọc nhiều, đặt cuối cùng, sticky khi scroll -->    
    <div id="docnhieu" class="sticky-div category">
        @include('page.tindocnhieu')
    </div>
    </div>        </div>
    </div>
    </main>
@endsection