<?php
// $filename = './Python/README.md'; // 输入文件名
// $file = fopen($filename, 'r'); // 打开文件

// if ($file) {
//   while (($line = fgets($file)) !== false) {
//     $md_filename = trim($line) . '.md'; // 创建.md文件名
//     $md_file = fopen($md_filename, 'w'); // 创建.md文件
//     $md_title = '# ' . pathinfo($md_filename, PATHINFO_FILENAME); // 标题内容
//     fwrite($md_file, $md_title . "\n"); // 将标题写入文件
//     fclose($md_file); // 关闭.md文件
//   }
//   fclose($file); // 关闭输入文件
//   echo "成功创建了以每行内容命名的.md文件！";
// } else {
//   echo "无法打开文件。";
// }

$dir = "云计算"; // 输入目录名
$output = array(); // 初始化输出数组

// 打开目录并循环读取文件和子目录
if (is_dir($dir)) {
  if ($dh = opendir($dir)) {
    while (($file = readdir($dh)) !== false) {
      if ($file != '.' && $file != '..') { // 忽略 "." 和 ".." 目录
        if (is_dir($dir . '/' . $file)) { // 如果是子目录
          $subdir = '/' . $file . '/'; // 子目录的路径
          $output[$dir . $subdir] = array("", ""); // 添加到输出数组
        } else { // 如果是文件
            $filename = pathinfo($file, PATHINFO_FILENAME); // 去掉文件名的后缀
            $output[$dir][] = $filename; // 添加到输出数组
        }
      }
    }
    closedir($dh); // 关闭目录
  }
}

// 输出格式化后的结果
echo json_encode($output, JSON_UNESCAPED_UNICODE|JSON_PRETTY_PRINT);
?>
