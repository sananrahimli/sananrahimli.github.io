﻿<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title>
Бегущие строки, светодиодные табло, LED экраны
    </title>
<link href="css/bootstrap.css" rel="stylesheet">
<link href="css/bootstrap-theme.css" rel="stylesheet">
<link href="css/font-awesome.min.css" rel="stylesheet">
	<!--[if lt IE 9]>
		<script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>a
	<![endif]-->
	<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
	<script type="text/javascript" src="js/jquery.mixitup.min.js"></script>
	<script type="text/javascript">
	$(function () {
		var filterList = {
			init: function () {
				$('#portfoliolist').mixitup({
					targetSelector: '.portfolio',
					filterSelector: '.filter',
					effects: ['fade'],
					easing: 'snap',
					// call the hover effect
					onMixEnd: filterList.hoverEffect()
				});				
			},
			hoverEffect: function () {
				$('#portfoliolist .portfolio').hover(
					function () {
						$(this).find('.label').stop().animate({bottom: 0}, 200, 'easeOutQuad');
						$(this).find('img').stop().animate({top: -30}, 500, 'easeOutQuad');				
					},
					function () {
						$(this).find('.label').stop().animate({bottom: -40}, 200, 'easeInQuad');
						$(this).find('img').stop().animate({top: 0}, 300, 'easeOutQuad');								
					}		
				);				
			
			}

		};
		filterList.init();	
	});	
	</script>
</head>
<body>
<section id="sp-top">
<div class="container">
<div class="row">
<div class="col-md-12 col-lg-12 col-sm-12 col-xs-12" style="padding-right: 0;">
<ul id="sp-p2top">
<li><i class="fa fa-envelope-o" aria-hidden="true"></i> info@lnc-effect.ru</li>
<li><i class="fa fa-phone" aria-hidden="true"></i> +7 (495) 777-67-13   +7 (925) 101-17-15</li>
<li><i class="fa fa-clock-o" aria-hidden="true"></i> Время:Mon-Sat: 10.00-17.00</li>
</ul>
</div>
</div>
</div>
</section>


<div class="container">
<div class="row">
<div class="col-md-5 col-lg-5 col-sm-12 col-xs-12 font_logo logo_cont">
<h1><img src="img/logo.png"> LDC</h1>
<h2>Эффективные решения для бизнес-продвижения! LNC-Effect.ru</h2>
</div>
<div class="col-md-7 col-lg-7 col-sm-12 col-xs-12" style="padding-left: 0;">
<div class="mar_bg_ldc">
<marquee behavior="scroll" direction="left">
<span>Бегущие строки, светодиодные табло, LED-экраны от производителя!</span>
</marquee>
</div>

<div class="col-md-7 col-lg-7 col-sm-12 col-xs-12 inf_g_t">Бегущие строки, светодиодные табло, LED-экраны от производителя!</div>
<div class="col-md-5 col-lg-5 col-sm-12 col-xs-12"><a href="#vmodal" class="back_a">Обратная Связь</a></div>
</div>
</div>
</div>
<nav>
<div class="container">
<div class="row">
<div class="col-md-9 col-lg-9 col-sm-12 col-xs-12">
<div class="menu">
<div class="nav">
<ul class="topnav">
  <li><a href="#home">Наша продукция</a></li>
  <li><a href="#news">Почему мы</a></li>
  <li><a href="#contact">5 Проблем</a></li>
  <li><a href="#about">Гарантии</a></li>
  <li><a href="#about">Как мы работаем</a></li>
  <li><a href="#about">Отзывы</a></li>
  <li><a href="#about">Контакты</a></li>
  <li class="icon">
    <a href="javascript:void(0);" onclick="myFunction()">&#9776;</a>
  </li>
</ul>
</div>
</div>
</div>

<div class="col-md-3 col-lg-3 col-sm-12 col-xs-12 calc_but">
<a href="#"><i class="fa fa-calculator" aria-hidden="true"></i> Калькулятор</a>
</div>
</div>
</div>
</nav>


<div class="container-fluid slider-padd">
<div class="row">
<div class="col-md-12 col-lg-12 col-sm-12 col-xs-12">
 <div class="Modern-Slider">
  <div class="item">
    <div class="img-fill">
      <img src="img/slid1.jpg" alt="">
      <div class="info">
        <div>
          <h3>LDC</h3>
          <h5>Эффективные решения для бизнес-продвижения! LNC-Effect.ru</h5>
        </div>
      </div>
    </div>
  </div>
  <div class="item">
    <div class="img-fill">
      <img src="img/slid2.jpg" alt="">
      <div class="info">
        <div>
          <h3>LDC</h3>
          <h5>Эффективные решения для бизнес-продвижения! LNC-Effect.ru</h5>
        </div>
      </div>
    </div>
  </div>
  <div class="item">
    <div class="img-fill">
      <img src="img/slid3.jpg" alt="">
      <div class="info">
        <div>
          <h3>LDC</h3>
          <h5>Эффективные решения для бизнес-продвижения! LNC-Effect.ru</h5>
        </div>
      </div>
    </div>
  </div>
  <div class="item">
    <div class="img-fill">
      <img src="img/slid4.jpg" alt="">
      <div class="info">
        <div>
          <h3>LDC</h3>
          <h5>Эффективные решения для бизнес-продвижения! LNC-Effect.ru</h5>
        </div>
      </div>
    </div>
  </div>
</div>

</div>
</div>
</div>

<section id="works">
<div class="container">
<div class="row">
<div class="col-md-12 col-lg-12 col-sm-12 col-xs-12">
<ul id="filters" class="clearfix">
			<li><span class="filter active" data-filter="nasa works avto">Все</span></li>
			<li><span class="filter" data-filter="nasa">Наша продукция</span></li>
			<li><span class="filter" data-filter="works">Выполненные работы</span></li>
			<li><span class="filter" data-filter="avto">Автомобильные</span></li>
		</ul>

		<div id="portfoliolist">
			
			<div class="portfolio nasa" data-cat="nasa">
				<div class="portfolio-wrapper">				
				<img src="portf/bs4.jpg" alt="" />
					<div class="label">
						<div class="label-text">
							<a class="text-title">Красное свечение от 5043 руб</a>
							<span class="text-category">Наша продукция</span>
						</div>
						<div class="label-bg"></div>
					</div>
				</div>
			</div>	
			
			<div class="portfolio nasa avto" data-cat="nasa avto">
				<div class="portfolio-wrapper">				
					 <img src="portf/bs5.jpg" alt="" />
					<div class="label">
						<div class="label-text">
							<a class="text-title">Автомобильные 101х21 см 5950 руб.</a>
							<span class="text-category">Наша продукция</span>
						</div>
						<div class="label-bg"></div>
					</div>
				</div>
			</div>	
			
			<div class="portfolio nasa" data-cat="nasa">
				<div class="portfolio-wrapper">				
					 <img src="portf/bs3.jpg" alt="" />
					<div class="label">
						<div class="label-text">
							<a class="text-title">Полноцвет от 9660 руб.</a>
							<span class="text-category">Наша продукция</span>
						</div>
						<div class="label-bg"></div>
					</div>
				</div>
			</div>
			
			<div class="portfolio nasa" data-cat="nasa">
				<div class="portfolio-wrapper">				
					 <img src="portf/bs6.jpg" alt="" />
					<div class="label">
						<div class="label-text">
							<a class="text-title">Белый от 5478 руб.</a>
							<span class="text-category">Наша продукция</span>
						</div>
						<div class="label-bg"></div>
					</div>
				</div>
			</div>
			
			<div class="portfolio nasa" data-cat="nasa">
				<div class="portfolio-wrapper">				
					 <img src="portf/bs7.jpg" alt="" />
					<div class="label">
						<div class="label-text">
							<a class="text-title">Красный</a>
							<span class="text-category">Наша продукция</span>
						</div>
						<div class="label-bg"></div>
					</div>
				</div>
			</div>
			
			<div class="portfolio nasa" data-cat="nasa">
				<div class="portfolio-wrapper">				
					 <img src="portf/bs8.jpg" alt="" />
					<div class="label">
						<div class="label-text">
							<a class="text-title">Желтый</a>
							<span class="text-category">Наша продукция</span>
						</div>
						<div class="label-bg"></div>
					</div>
				</div>
			</div>
			
			<div class="portfolio nasa" data-cat="nasa">
				<div class="portfolio-wrapper">				
					 <img src="portf/bs9.jpg" alt="" />
					<div class="label">
						<div class="label-text">
							<a class="text-title">Зеленый</a>
							<span class="text-category">Наша продукция</span>
						</div>
						<div class="label-bg"></div>
					</div>
				</div>
			</div>	
			
			<div class="portfolio nasa" data-cat="nasa">
				<div class="portfolio-wrapper">				
					 <img src="portf/bs10.jpg" alt="" />
					<div class="label">
						<div class="label-text">
							<a class="text-title">Синий</a>
							<span class="text-category">Наша продукция</span>
						</div>
						<div class="label-bg"></div>
					</div>
				</div>
			</div>
			
			<div class="portfolio works" data-cat="works">
				<div class="portfolio-wrapper">				
					 <img src="portf/tv5.jpg" alt="" />
					<div class="label">
						<div class="label-text">
							<a class="text-title">805х85 см белая</a>
							<span class="text-category">Выполненные работы</span>
						</div>
						<div class="label-bg"></div>
					</div>
				</div>
			</div>	
			
			<div class="portfolio works" data-cat="works">
				<div class="portfolio-wrapper">				
					 <img src="portf/tv1.jpg" alt="" />
					<div class="label">
						<div class="label-text">
							<a class="text-title">197х37 см белая</a>
							<span class="text-category">Выполненные работы</span>
						</div>
						<div class="label-bg"></div>
					</div>
				</div>
			</div>	
			
			<div class="portfolio works" data-cat="works">
				<div class="portfolio-wrapper">				
					 <img src="portf/tv2.jpg" alt="" />
					<div class="label">
						<div class="label-text">
							<a class="text-title">293х37 см красная</a>
							<span class="text-category">Выполненные работы</span>
						</div>
						<div class="label-bg"></div>
					</div>
				</div>
			</div>	
			
			<div class="portfolio works" data-cat="works">
				<div class="portfolio-wrapper">				
					 <img src="portf/tv5.jpg" alt="" />
					<div class="label">
						<div class="label-text">
							<a class="text-title">805х85 см белая</a>
							<span class="text-category">Выполненные работы</span>
						</div>
						<div class="label-bg"></div>
					</div>
				</div>
			</div>
			
			<div class="portfolio works" data-cat="works">
				<div class="portfolio-wrapper">				
					 <img src="portf/tv3.jpg" alt="" />
					<div class="label">
						<div class="label-text">
							<a class="text-title">933х101 см красная</a>
							<span class="text-category">Выполненные работы</span>
						</div>
						<div class="label-bg"></div>
					</div>
				</div>
			</div>
			
			<div class="portfolio avto" data-cat="avto">
				<div class="portfolio-wrapper">				
					 <img src="portf/av1.png" alt="" />
					<div class="label">
						<div class="label-text">
							<a class="text-title">Авто 1</a>
							<span class="text-category">Автомобильные</span>
						</div>
						<div class="label-bg"></div>
					</div>
				</div>
			</div>				

			
			<div class="portfolio avto" data-cat="avto">
				<div class="portfolio-wrapper">				
					 <img src="portf/av2.png" alt="" />
					<div class="label">
						<div class="label-text">
							<a class="text-title">Авто 2</a>
							<span class="text-category">Автомобильные</span>
						</div>
						<div class="label-bg"></div>
					</div>
				</div>
			</div>		
			
			<div class="portfolio avto" data-cat="avto">
				<div class="portfolio-wrapper">				
					 <img src="portf/av3.jpg" alt="" />
					<div class="label">
						<div class="label-text">
							<a class="text-title">Авто 3</a>
							<span class="text-category">Автомобильные</span>
						</div>
						<div class="label-bg"></div>
					</div>
				</div>
			</div>			
			
			<div class="portfolio avto" data-cat="avto">
				<div class="portfolio-wrapper">				
					 <img src="portf/av4.jpg" alt="" />
					<div class="label">
						<div class="label-text">
							<a class="text-title">Авто 4</a>
							<span class="text-category">Автомобильные</span>
						</div>
						<div class="label-bg"></div>
					</div>
				</div>
			</div>				

			
		</div>	
</div>
</div>
</div>
<br/></section>
<section id="w2">
<div class="container">
<div class="row">
<span class="hrst_top">Наши гарантии</span>
<hr class="hrsty hrsty3"/>
<div class="col-md-6 col-lg-6 col-sm-12 col-xs-12 info_w2">
На сегодняшний день ^ один из самых эффективных способов разместить информацию о ваших товарах или услугах - это светодиодный 1£0-экром - "БЕГУЩАЯ

СТРОКА'1. Токое устройство, как "Бегущая строка" всегда привлекает внимание человена за счет своих динамических свойств. Обратив свое еиимание на 1ЕО-экран "Бегущая строка", человек в 70 % случаях дочитает текст до конца. Одноцветная 

Бегущая страна" это наиболее распространеиный вид светодиодных экранов. Она 

является наиболее энономичным вариантом^ если вы хотите недорогую, но качественную и крайне информативную вывеску. Монохромная светодиодная 

бегущая строка - это светодиодное табло одного цвета свечения/ Кроеного, белого, 

Зеленого, Синего или Желтого. Прямое назначение светодиодной бегущей строки ~ выполнение функции донесение до потребителя максимального объема информации, используя при этом минимум рекламной площади. Ее преимущество заключается в гармоничном сочетании следующих свойств:
<br/><br/><div class="row">
<div class="col-md-6 col-lg-6 col-sm-6 col-xs-6">
<img src="img/2986.jpg">
</div>
<div class="col-md-6 col-lg-6 col-sm-6 col-xs-6">
 энергонезависимая памать 500 кбайт;
 •размеры видимой области 76мм х 700мм
</div>
</div>
<hr class="w2h"/><div class="row">
<div class="col-md-6 col-lg-6 col-sm-6 col-xs-6">
разрешение 16 х 144 точек ; •угол обзора 120 градусов ; * возможности операм йеной замены траислируелюы информации ;
</div>
<div class="col-md-6 col-lg-6 col-sm-6 col-xs-6">
<img src="img/image_6.jpg">
</div>
</div>
<hr class="w2h"/><div class="row">
<div class="col-md-6 col-lg-6 col-sm-6 col-xs-6">
<img src="img/1243.jpg">
</div>
<div class="col-md-6 col-lg-6 col-sm-6 col-xs-6">
•более I О-ти стандартных шрифтов + анишфованпыс символы , встрипшые 

часы, мишшальнын объём шугребляемой энер! ни, 11и^кая себссгонмость ; •простота управления;
</div>
</div><br/>
<div class="col-md-12 col-lg-12 col-sm-6 col-xs-6">
7^Гт^Т1р1шсочета'отсяа монох^^ б.г^ей сжро^е С^имосп,ь и ^ ':. .^ 

бегущей строки невысона, а если сравнить ее с з^номичесни^ ^ффентом от э^уа^и» про у^о» лрив^е.ии кл^ов. то ре^обель»о7тТт^го"^Во 
</div>
</div>
</div>
</div>
</div>
</section>
<section id="w3">
<div class="container">
<div class="row">
<span class="hrst_top">8 причин выбрать нас прямо сейчас</span>
<hr class="hrsty"/>
<div class="col-md-3 col-lg-3 col-sm-12 col-xs-12 block_8">
<i class="fa fa-star-o" aria-hidden="true"></i>
<h3>Гарантия на всю продукцию</h3>
</div>
<div class="col-md-3 col-lg-3 col-sm-12 col-xs-12 block_8">
<i class="fa fa-line-chart" aria-hidden="true"></i>
<h3>Гарантия увеличения прибыли на 20%</h3>
</div>
<div class="col-md-3 col-lg-3 col-sm-12 col-xs-12 block_8">
<i class="fa fa-refresh" aria-hidden="true"></i>
<h3>Время обработки заявки до 20 минут</h3>
</div>
<div class="col-md-3 col-lg-3 col-sm-12 col-xs-12 block_8">
<i class="fa fa-clock-o" aria-hidden="true"></i>
<h3>Срок исполнения от 1 дня до 2 недель</h3>
</div>
<div class="col-md-3 col-lg-3 col-sm-12 col-xs-12 block_8">
<i class="fa fa-cubes" aria-hidden="true"></i>
<h3>Индивидуальный подход</h3>
</div>
<div class="col-md-3 col-lg-3 col-sm-12 col-xs-12 block_8">
<i class="fa fa-users" aria-hidden="true"></i>
<h3>В 85% случаев к нам обращаются повторно</h3>
</div>
<div class="col-md-3 col-lg-3 col-sm-12 col-xs-12 block_8">
<i class="fa fa-truck" aria-hidden="true"></i>
<h3>Бесплатная доставка до вашего объекта</h3>
</div>
<div class="col-md-3 col-lg-3 col-sm-12 col-xs-12 block_8">
<i class="fa fa-bullhorn" aria-hidden="true"></i>
<h3>Эффективная настройка рекламы</h3>
</div>
</div>
</div>
</section>
<section class="pro5">
<div class="container">
<div class="row">
<span class="hrst_top hrst_top2">5 проблем, от которых мы вас оградим</span>
<hr class="hrsty hrsty2"/>
<div class="col-md-5 col-lg-5 col-sm-12 col-xs-12 prob_5">
<h2><i class="fa fa-calendar-times-o" aria-hidden="true"></i> Срывы сроков выполнения заказа</h2>

Основным требованием при выборе поставщика является срок
выполнения заказа, ведь чем раньше реклама начнет работать
на вас, тем быстрее о вас узнают. Недобросовестные 
поставщики умышленно занижают сроки поставки и 
впоследствии их не выдерживают.
<div class="ot_pr_5"> Объективные сроки</div> 
</div>
<div class="col-md-5 col-lg-5 col-sm-12 col-xs-12 prob_5">
<h2><i class="fa fa-money" aria-hidden="true"></i> Занижение цены, демпинг</h2>

Не для кого не секрет , что при выборе товара цена 
является наиболее важным фактором. Как правило 
необоснованное занижение цены, влечет за собой снижени 
качества и не соответствие заявленным характеристикам.
<div class="ot_pr_5"> Мы не занижаем
цены</div> 
</div>
<div class="col-md-5 col-lg-5 col-sm-12 col-xs-12 prob_5">
<h2><i class="fa fa-volume-control-phone" aria-hidden="true"></i> Низкая скорость обработки заявок</h2>

При обращении к поставщику, заказчик заинтересован
в максимально быстрой обработке своей заявки. Но не
все поставщики справляются с этой задачей, что приводит
к ненужной потери времени.
<div class="ot_pr_5"> Персональный
менеджер</div> 
</div>
<div class="col-md-5 col-lg-5 col-sm-12 col-xs-12 prob_5">
<h2><i class="fa fa-briefcase" aria-hidden="true"></i> Отсутствие юридической ответственности</h2>

В настоящие время на рынке стало очень много предложений
от лиц не несущих никакой ответственности, что ведет за 
собой ряд проблем.
<div class="ot_pr_5"> Законно и 
официально</div> 
</div>
<center><div class="col-md-5 col-lg-5 col-sm-12 col-xs-12 prob_5" style="clear:both;">
<h2><i class="fa fa-comments-o" aria-hidden="true"></i> Отсутствие сервиса</h2>
Зачастую задача некоторых фирм - только получение прибыли,
т.е. выполнить единовременно заказ, получить деньги и 
полностью переключится на нового покупателя, не отвечая
по запросу на сервис, от предыдущего клиента.
<div class="ot_pr_5"> Долгосрочное 
сотрудничество</div> 
</div></center>
</div>
</div>

</section>

<div class="container kak">
<div class="row">
<div class="col-md-12 col-lg-12 col-sm-12 col-xs-12">
<span class="hrst_top hrst_top2">Как мы работаем</span>
<hr class="hrsty hrsty2"/>
<img src="img/kak.jpg">
</div>
</div>
</div>
<section id="garant">
<div class="container">
<div class="row">
<span class="hrst_top">Наши гарантии</span>
<hr class="hrsty"/>
<div class="col-md-4 col-lg-4 col-sm-12 col-xs-12 garant_o">
<img src="img/garant1.png"><hr/>
Гарантия окупаемости при правильном алгоритме.
Мы вернем вам деньги, если не будет результата.</div>
<div class="col-md-4 col-lg-4 col-sm-12 col-xs-12 garant_o">
<img src="img/garant2.png"><hr/>
Гарантия качества на продукцию.
Тщательная проверка каждого товара перед отправкой клиенту.</div>
<div class="col-md-4 col-lg-4 col-sm-12 col-xs-12 garant_o">
<img src="img/garant3.png"><hr/>
Гарантия бесплатной доставки
По России.</div>
</div>
</div>
</section>
<div class="container">
<div class="row">
<span class="hrst_top hrst_top2">Отзывы</span>
<hr class="hrsty hrsty2"/>
<div class="col-md-6 col-lg-6 col-sm-12 col-xs-12 otzivi">
<div class="left">
<h2>Узнали эту компанию
по рекомендации</h2>
Позвонил в компанию , ответил дружелюбный молодой человек , грамотно проконсультировал. Договорились о встрече. Утром приехали два приятных парня , все установили и подключили. Привлекла внимание низкая цена , были сомнения из-за качества продукции , но когда привезли и установили, сомнения тут же развеялись. Очень доволен качеством и скоростью выполнения работ! Вот уже 2 месяца безотказной работы ! Молодцы ребята , так держать. 
</div>
<div class="right">
<img src="http://www.kino-teatr.ru/acter/album/10244/359511.jpg"><hr/>
Вячеслав, «ХозТорг»
</div>
</div>
<div class="col-md-6 col-lg-6 col-sm-12 col-xs-12 otzivi">
<div class="left">
<h2>Понравились условия
и уровень компании</h2>
Знаком с этой компанией с самого начала их работы т.к. стал одним из первых клиентов. Приобрел бегущую строку размером 135*20, с настройкой помогли быстро разобратся. Профессионализм и отзывчивость сотрудников а также цены реально лучшие на рынке и все всегда в срок - это если вкратце ! Спасибо команде из LNC. </div>
<div class="right">
<div class="img_ot"><img src="http://cs622431.vk.me/v622431657/1da35/1u674p9xUjI.jpg"></div><hr/>
Ильнур Саловатович, «ИП Гафатуллина П.В.» г. Подольск
</div>
</div>
</div>
</div>
<section id="back">
<div class="container">
<div class="row">
<div class="col-md-9 col-lg-9 col-sm-12 col-xs-12">
Получите максимум эффекта от заметной рекламы
</div>
<div class="col-md-3 col-lg-3 col-sm-12 col-xs-12">
<a href="#vmodal" class="biliboard electronic">Оставить заявку</a>
<div class="body-page">
</div>
<div id="vmodal">
  
  <p class="parrafo col-md-6 col-lg-6 col-sm-12 col-xs-12">
  <a class="cerrar" href="#cerrar"><i class="fa fa-times-circle-o" aria-hidden="true"></i></a>
  <span class="dolor">Заполните форму и мы обязательно
вам перезвоним</span>
ddd

  </p>
</div>
</div>
</div>
</div>
</section>
<div class="container-fluid slider-padd">
<div class="row">
<div id="map_i">
<div class="col-md-12 col-lg-12 col-sm-12 col-xs-12">
<script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?sid=aEyGv_VRi07kPdxQ1lpv9ezP4JEELLHK&width=100%&height=400&lang=ru_RU&sourceType=constructor&scroll=true"></script>
</div>
<div class="col-md-3 col-lg-3 col-sm-12 col-xs-12 map_info">
<h2>Как нас найти</h2>
<i class="fa fa-map-marker" aria-hidden="true"></i> г.Москва,ТРЦ "Лужайка" 
внешняя сторона МКАД, 32 км.<br/>
<i class="fa fa-volume-control-phone" aria-hidden="true"></i> Тел: 8 (495) 777 67 13<br/>
<i class="fa fa-envelope-o" aria-hidden="true"></i> Email: lnfo@lnc-effect.ru<br/>
<i class="fa fa-globe" aria-hidden="true"></i> Веб: lnc-effect.ru<br/>
</div>
</div>
</div>
</div>
<footer>
<div class="container">
<div class="row">
<div class="col-md-7 col-lg-7 col-sm-12 col-xs-12">ООО «Премьер-форм» 
   ОГРН 1095074007269 
   ИНН 5036100270 
   КПП 503601001 
   Адрес юридический и фактический: 
   142119, Московская область, г.Подольск, 
   Красногрвардейский б-р, д.23, 179 
   р/с 40702810902090000045 
   Банк: АО «АЛЬФА-БАНК» 
   к/с 30101810200000000593 
   БИК 044525593</div>
<div class="col-md-5 col-lg-5 col-sm-12 col-xs-12" style="text-align:right"><div style="display:inline-table">© «LNC-effect.ru», 2014<br/>22</div>
<a href="#top" class="top_b"><i class="fa fa-chevron-up" aria-hidden="true"></i></a>
</div>
</div>
</div>
</footer>
<script src='http://kenwheeler.github.io/slick/slick/slick.js'></script>
<script src="js/index.js"></script>
<script>
function myFunction() {
    document.getElementsByClassName("topnav")[0].classList.toggle("responsive");
}
</script>
</body>
</html>