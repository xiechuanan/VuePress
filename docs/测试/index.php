<?php
$filename = 'README.md'; // 输入文件名
$file = fopen($filename, 'r'); // 打开文件

if ($file) {
  while (($line = fgets($file)) !== false) {
    $md_filename = trim($line) . '.md'; // 创建.md文件名
    $md_file = fopen($md_filename, 'w'); // 创建.md文件
    $md_title = '# ' . pathinfo($md_filename, PATHINFO_FILENAME); // 标题内容
    fwrite($md_file, $md_title . "\n"); // 将标题写入文件
    fclose($md_file); // 关闭.md文件
  }
  fclose($file); // 关闭输入文件
  echo "成功创建了以每行内容命名的.md文件！";
} else {
  echo "无法打开文件。";
}
?>
