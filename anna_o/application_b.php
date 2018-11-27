<?php 
 
$sendto   = "waysay@inbox.ru"; // почта, на которую будет приходить письмо
$username = $_POST['name'];   // сохраняем в переменную данные полученные из поля c именем
$usertel = $_POST['telephone']; // сохраняем в переменную данные полученные из поля c телефонным номером
$usermail = $_POST['email']; // сохраняем в переменную данные полученные из поля c адресом электронной почты
 
// Формирование заголовка письма
$subject  = "Прайс";
$headers  = "From: " . strip_tags($usermail) . "\r\n";
$headers .= "Reply-To: ". strip_tags($usermail) . "\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html;charset=utf-8 \r\n";
 
// Формирование тела письма
$msg  = "<html><body style='font-family:Arial,sans-serif;'>";
$msg .= "<h2 style='font-weight:bold;border-bottom:1px dotted #ccc;'>Выслать прайс</h2>\r\n";
$msg .= "<p><strong>От кого:</strong> ".$username."</p>\r\n";
$msg .= "<p><strong>Почта:</strong> ".$usermail."</p>\r\n";
$msg .= "<p><strong>Телефон:</strong> ".$usertel."</p>\r\n";
$msg .= "</body></html>";
$msgfile .= "<html><body style='font-family:Arial,sans-serif;'>";
$msgfile .= "<h2 style='font-weight:bold;border-bottom:1px dotted #ccc;'>Прайс с сайта</h2>\r\n";
$msgfile .= "<h3><a href='https://waysay.ru/price.pdf' downloand> Скачать</a></h3>";
$msgfile .= "</body></html>";

// отправка сообщения
if(@mail($sendto, $subject, $msg, $headers)) {
    echo '<center><br/><h1>Спасибо, заявка принята!</h1></center>    <META HTTP-EQUIV="REFRESH" CONTENT="5; URL=/">';
} else {
    echo "<center><br/><h1>Ошибка!</h1></center>";
}
if(@mail($usermail, $subject, $msgfile, $headers)) {}
else {}
?>