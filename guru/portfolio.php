<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
	<link rel="stylesheet" href="css/styles.css">
	<link rel="stylesheet" href="css/portfolio.css">
</head>
<body class="page__portfolio">
<div class="header">
	<div class="wp">
		<div class="menu">
		<a href="/" class="active">О нас</a>
		<a href="/portfolio.html">Портфолио</a>
		<a href="/order.html">Заказать</a>
		</div>
	<div class="title_block">
			<h1>ПОРТФОЛИО</h1>
			<p>Лучше один раз увидеть, чем сто раз услышать. <br>
Наши клиенты заботятся о своем имидже — станьте одним из них!</p>
		</div>
	</div>
</div>
<div class="sct_portfolio">
	<div class="wp">
	<div class="boundingBox" id="content">
<ul id="portfolio-filter">
<li><a href="#Все" title="">Все</a></li>
<li><a href="#Ветки" title="" rel="branches">Ветки</a></li>
<li><a href="#Баннеры" title="" rel="banners">Баннеры</a></li>
<li><a href="#Сайты" title="" rel="sites">Сайты</a></li>
<li><a href="#Другое" title="" rel="other">Другое</a></li>
</ul>
<ul id="portfolio-list">

<?php
    $host="localhost";
    $user="root";
    $pass=""; //установленный вами пароль
    $db_name="joom";
    $link=mysql_connect($host,$user,$pass);
    mysql_select_db($db_name,$link);
?>
<?php
    $sql = mysql_query("SELECT `id_p`, `Name`, `tags`, `images` FROM `products`", $link);
    while ($result = mysql_fetch_array($sql)) {
        echo "<li class='".$result['tags']."'>
<a href='' title=''>
<img src='".$result['images']."' alt=''></a>
<h1>".$result['Name']."</h1>
<p>".$result['tags']."</p>
</li>";
    }
?>


<li style="overflow: hidden; clear: both; height: 0px; position: relative; float: none; display: block;"></li>
</ul>
</div>
</div>
	</div>
</div>

<div class="footer">
	<div class="wp">
		<div class="title_block">
			<h1>ГУРУ ДИЗАЙНА</h1>
		</div>
		<div class="text_footer_b">
			Первое впечатление — самое сильное. <br>
Используйте это, чтобы продавать и влиять.
<p><img src="img/lrc.png" alt=""><img src="img/partners.png" alt=""></p>
		</div>
	</div>
</div>

<script type="text/javascript" src="//code.jquery.com/jquery-1.11.0.min.js"></script>
<script src="js/filterable.pack.js" type="text/javascript" charset="utf-8"></script>
</body>
</html>