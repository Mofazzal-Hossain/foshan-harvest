<?php include 'inc/header.php'; ?>

<!-- Hero Banner Section Start -->
<div class="hero-banner">
    <img src="assets/images/news-banner.jpg" alt="News banner image">
    <h3><span data-aos="fade-up">News</span></h3>
    <div class="bg"></div>
</div>
<!-- Hero Banner Section End -->

<!-- Breadcrumb Section Start -->
<div class="breadcrumb-wrapper bg-white">
    <div class="breadcrumb-inner center" data-aos="fade-up">
        <div class="nav">
            <p>Location：</p>
            <a href="index.php">Home</a>
            <span>I</span>
            <a href="javascript: void(0);">News</a>
        </div>
        <div class="right">
            <a href="news.php">Industry News</a>
            <a href="company-news.php" class="active">Company News</a>
        </div>
    </div>
</div>
<!-- Breadcrumb Section End -->

<!-- News List Section Start -->
<div class="news-list-wrapper">
    <div class="news-list-content center">
        <ul class="news-lists" data-aos="fade-up">
            <!-- news item -->
            <li class="news-item">
                <a href="single-news.php">
                    <div class="left">
                        <div class="time">05-15</div>
                        <div class="icon"><i class="el-icon-right"></i></div>
                    </div>
                    <div class="mide"></div>
                    <div class="right">
                        <div class="txt">
                            <h3>Is the ultrasonic dishwasher useful? What is the working principle?</h3>
                            <h6>The ultrasonic dishwasher is very user-friendly! Not only does it have strong cleaning ability,
                                but it also has a very wide cleaning range. All kinds of tableware and cookware can be cleaned, and
                                it can also wash vegetables! The key is also very affordabl</h6>
                        </div>
                        <img src="assets/images/news-img-1.png" alt="news image">
                    </div>
                </a>
            </li>
        </ul>
        <!-- pagination -->
        <div class="product-list-pagination" data-aos="fade-up">
            <div class="el-pagination">
                <button type="button" disabled="disabled" class="btn-prev">first</button>
                <ul class="el-pager">
                    <li class="number active">1</li>
                </ul>
                <button type="button" class="btn-next">last</button>
            </div>
        </div>
    </div>
</div>
<!-- News List Section End -->
<?php include 'inc/footer.php'; ?>