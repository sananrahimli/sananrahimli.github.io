<?php 
 
$sendto   = "info@vr-direct.ru"; // почта, на которую будет приходить письмо
$username = $_POST['name'];   // сохраняем в переменную данные полученные из поля c именем
$usertel = $_POST['telephone']; // сохраняем в переменную данные полученные из поля c телефонным номером
$theme = $_POST['formData']; // сохраняем в переменную данные полученные из поля c адресом электронной почты
$textarea = $_POST['comm']; // сохраняем в переменную данные полученные из поля c адресом электронной почты
 
// Формирование заголовка письма
$subject  = "".$theme."";
$headers  = "From: " . strip_tags($usermail) . "\r\n";
$headers .= "Reply-To: ". strip_tags($usermail) . "\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html;charset=utf-8 \r\n";
 
// Формирование тела письма
$msg .= "".$theme."\r\n";
$msg .= "От кого: ".$username."\r\n";
$msg .= "Телефон: ".$usertel."\r\n";
$msg .= "Комментарий: ".$textarea."\r\n";
 
// отправка сообщения
if(@mail($sendto, $subject, $msg, $headers)) {
    echo '<center><br/><h1>Спасибо, заявка принята!</h1></center>    <META HTTP-EQUIV="REFRESH" CONTENT="1; URL=/">';
} else {
    echo "<center><br/><h1>Ошибка!</h1></center>";
}
 
?>