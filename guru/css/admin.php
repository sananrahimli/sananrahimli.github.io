<?php 
// пробегаем по содержимому
$all_files = scandir('pages');
// в цикле перебираем файлы
foreach($all_files as $one_file){
// проверяем не директория ли
    if(!is_dir($one_file)){
        // проверяем расширение
        if(pathinfo($one_file, PATHINFO_EXTENSION) == 'html'){
        // выполняем вывод списка
        $file_name = explode('.', $one_file); // получаем имя
        echo '<a href="?edit_page='.$file_name[0].'">'.$file_name[0].'</a><br/>';
        }
    }
}
 
if(!empty($_GET['edit_page']))
{
    $content = file_get_contents('pages/'.$_GET['edit_page'].'.html');
}
// сохранение изменений
if(!empty($_POST['newd']) and isset($_POST['save']))
{
    $file = fopen ('pages/'.$_GET['edit_page'].'.html', 'w+');
    if (!$file )
    echo("Ошибка открытия файла");
    else
    fputs ($file, $_POST['newd']);
    fclose ($file);
}
// Выводим его содержимое
echo '
<form action="" method="post"> 
<textarea name="newd">'.$content.'</textarea>
<br><input type="submit" name="save" value="Сохранить"> 
</form> 
';
 ?>