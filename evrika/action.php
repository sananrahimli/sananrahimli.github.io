<?php
	$msg_box = ""; // в этой переменной будем хранить сообщения формы
	$errors = array(); // контейнер для ошибок
	// проверяем корректность полей
	if($_POST['user_name'] == "") 	 $errors[] = "Поле 'Ваше Ф.И.О' не заполнено!";
	if($_POST['user_phone'] == "") 	 $errors[] = "Поле 'Телефон' не заполнено!";
	if($_POST['text_comment'] == "") $errors[] = "Поле 'Сообщение' не заполнено!";

	// если форма без ошибок
	if(empty($errors)){		
		// собираем данные из формы
		$message  = "Ф.И.О: " . $_POST['user_name'] . "<br/>";
		$message .= "Телефон: " . $_POST['user_phone'] . "<br/>";
		$message .= "Площадь: " . $_POST['text_area'] . "<br/>";
		$message .= "Текст письма: " . $_POST['text_comment'];		
		send_mail($message); // отправим письмо
		// выведем сообщение об успехе
		$msg_box = "<span style='color: #fff;font-size:18px;text-align:center'>Сообщение успешно отправлено!</span>";
	}else{
		// если были ошибки, то выводим их
		$msg_box = "";
		foreach($errors as $one_error){
			$msg_box .= "<span style='color: #fff;font-size:15px;'>$one_error</span><br/>";
		}
	}

	// делаем ответ на клиентскую часть в формате JSON
	echo json_encode(array(
		'result' => $msg_box
	));
	
	
	// функция отправки письма
	function send_mail($message){
		// почта, на которую придет письмо
		$mail_to = "zakaz@e-vrika.ru"; 
		// тема письма
		$subject = "Письмо с обратной связи";
		
		// заголовок письма
		    $domain = "webinside.ru";
$from = "no-reply@". $domain;
$headers = "From: " . $from . "\r\n";
$headers .= "Reply-To: ". $from . "\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=UTF-8\r\n";
		
		// отправляем письмо 
		mail($mail_to, $subject, $message, $headers);
	}
	
