<!doctype html>
<html lang="ru">
<head>
<title>Админ-панель</title>
<style>
	html {
		background-color: #333333;
		color: #fff;
		font-size: 16px;
	}
	body {
		width: 60%;
		margin: 5px auto;
		height: auto;
		overflow: hidden;
		border: 2px solid #222;
		padding: 15px;
		border-radius: 15px;
		background-color: #666;
		display: table;		
	}
	.ptf_goo {
		float: left;
		margin: 10px;
		width: 30%;
		padding: 5px;
		height: 282px;
		overflow: hidden;
		border: 1px solid #999;
		border-radius: 10px
	}
</style>
</head>
<body>
<?php
    $host="localhost";
    $user="root";
    $pass=""; //установленный вами пароль
    $db_name="joom";
    $link=mysql_connect($host,$user,$pass);
    mysql_select_db($db_name,$link);
    
?>
<table>
<form action="" method="post">

    <tr>
        <td>Наименование:</td>
        <td><input type="text" name="Name"></td>
    </tr>
    <tr>
        <td>Цена:</td>
        <td>
        <select name="tags">
          <option value="Вce">Вce</option>
          <option value="Ветки">Ветки</option>
          <option value="Баннеры">Баннеры</option>
          <option value="Сайты">Сайты</option>
          <option value="Другое">Другое</option>
      </select>
    </tr>
        <tr>
        <td>Images:</td>
        <td><input type="text" name="images"></td>

    </tr>
    <tr>
        <td colspan="2"><input type="submit" value="OK"></td>
    </tr>
</form>
</table>
<?php
echo"<a href='add_images_form.php' class='add_images'>
<div class='add_images_text'>ДОБАВИТЬ КАРТИНКУ</div>
</a><br><br>";
    $host="localhost";
    $user="root";
    $pass=""; //установленный вами пароль
    $db_name="joom";
    $link=mysql_connect($host,$user,$pass);
    mysql_select_db($db_name,$link);

$sql = mysql_query("SELECT id, img FROM 3_images"); 
// Выбор из базы данных полей id и img

if (!$sql)
{
exit();
}
if (mysql_num_rows($sql) > 0)
{

@$row=mysql_fetch_array($sql);

$i=1;

do
{
echo "<table><tr><td valign='top'>";
echo $i++;
echo "<td>";
echo "<img src='img/$row[img]' class='img'/>";
echo "</td></tr></table><br>";
}
while (@$row = mysql_fetch_array($sql));
}
else
{
echo "<label class='label'>В базе данных нет 
добавленных картинок!</label>";
exit();
}
?>
<?php
//Если переменная Name передана
if (isset($_POST["Name"])) {
    //Вставляем данные, подставляя их в запрос
    $sql = mysql_query("INSERT INTO `products` (`Name`, `tags`, `images`) 
                        VALUES ('".$_POST['Name']."','".$_POST['tags']."','".$_POST['images']."')");
    //Если вставка прошла успешно
    if ($sql) {
        echo "<p>Данные успешно добавлены в таблицу.</p>";
    } else {
        echo "<p>Произошла ошибка.</p>";
    }
}
?>
<?php
//Получаем данные
$sql = mysql_query('SELECT `id_p`, `Name`, `images`, `tags` FROM `products`');
while ($result = mysql_fetch_array($sql)) {
    echo "<div class='ptf_goo'><img src='".$result['images']."' alt=''><span>".$result['Name']."</span>
<p>Тэги: ".$result['tags']."</p><a href='?del=".$result['id_p']."'>Удалить</a></div>";
}
?>
<?php
//Удаляем, если что
if (isset($_GET['del'])) {
    $sql = mysql_query('DELETE FROM `products` WHERE `id_p` = "'.$_GET['del'].'"');
    if ($sql) {
        echo "<p>Товар удален.</p>";
    } else {
        echo "<p>Произошла ошибка.</p>";
    }
}

?>

</body>