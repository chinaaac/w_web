## 标签规则

### 成对出现

<body></bdoy>

### 单个出现

<br />





## 1.2 标签的关系

### 包含关系

<head>
    <title> </title>
</head>

### 并列关系

<body></body>

""<title></title>



# 3.网页开发工具



## 3.1 文档类型声明标签

* </!doctype>

<!DOCTYPE>文档类型声明，作用就是告诉浏览器使用哪种html版本来显示网页

"<!DOCTYPE html>

告诉浏览器当前使用的是HTML5

* <html lang="en">

声明网页语言，提倡使用zh-CN

* <meta charset="UTF-8">

设置字符集UTF-8

*    <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">

  移动端用

# HTML常用标签

## 4.1 标签语义

根据标签的语义，在合适的地方添加标签

## 4.2

“<h1> - <h6>共6级标签”

作为标题使用h1最大，h6最小

> 特点

加了标题的文字会加粗，字号依次变大

一个标题独占一行

## 4.3段落标签和换行标签

"<p></p>" 段落

> 段落会跟随网页大小自动换行

> 段落间有段落空隙

* <br />

换行

换行不分段落不会产生缝隙

## 4.4文本格式化标签

加粗、斜体、下划线等效果

"<strong></strong>"或者"<b></b>" 加粗

"<em></em>"或者<i></i>	斜体

"<del></del>"或者<s></s>删除线

"<ins></ins>"或者<u></u>	下划线

## 4.5<div>和<span>

div和span没有语义，他们就是一个盒子，用来装内容

![image-20210627234731568](C:\Users\a1524\AppData\Roaming\Typora\typora-user-images\image-20210627234731568.png)

div表示分割，分区。span表示跨度、跨距

div用来布局，一行只能放一个

span一行可以放多个

## 图像标签和路径

### 图像标签

<img src="图片url" />

单标签

<img src="a.jpg" />



图像标签其他属性

src	图片路径	必须属性

alt	文本			替换文本，图片不能显示的文字

title	文本			提示文本，鼠标放图片上显示

width	像素	设置宽度

height	像素	设置图片高度

border	像素	设置图片边框粗细

