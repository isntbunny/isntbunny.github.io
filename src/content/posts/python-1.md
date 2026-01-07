---
title: "python学习"
date: 2025-06-07
categories: [notes]
tags: [Python]
---

# python基础
## 变数的命
- 数字 大小写字中文
- 第一个字母不能是数字
- 英文字母大小写视为不同变数名
- 不能是程式保留字
## 指定变数
- age,name=18,"lindashan"
- del age
## 资料型别
int float bool str
\脱逸字
\n 换行
\t tab
\a 响铃
\f 换页
\r 游标移到列首
\v 垂直定位
\b backspace
\x 6进位表示字元
\o 进位表示字元
## type（项目）会取得项目的资料型别
## print
```py
print(项目1[,项目2,…sep=分隔字元,end=结束字元])
```
sep预设值为一个空白字元（""
end预设值为一个换列字元（"\n"

```py
print(100,"eat",60,sep"&",end="")
```
### print中的参数格式

#### %
%s 字串
%d 整数
%f 浮点

%5d 固定列印5个字元（少于5位数会在数字左方填入空白字元，大于则全部列印
%5s 固定列印5个字元（少于5个字元会在字串左方填入空白字元，大于则全部列印）
%8.2f 固定列印8个字元（含小数点
小数固定列印2位数（若整数少于5位数-3=5）会在数字左方填入空白字
若小数少位数，会在数字右方填字元

price=23.8
print("price is%8.2f"%price) →价格为   23.80
3左方个空白字元）

#### format()
print(字串.format(参数)

```py
name="lin"
score=80
print("{}'s score is{}".format(name,score))
```


# 串列list
```py
listname=[element1,element2,...]
list1=[1,"banana",True]
```
the method to get element value is to 将索引值置于中括号
# tkinter
## 导入-import模组
### 1
模组中有许多函数供设计者使用，如randint\random\choice
```py
import random
random.randint(参数)
```
### 2
不必输入模组名称，直接使用函数
```py
from tkinter import * 
root = Tk(className='root') 
root.mainloop()
```
### 3 
如果两个模组具有相同名称的函数，使用时可能造成错误

所以可以为每个模组的名称另取一个简短的别名
```py
import tkinter as tk
root=tk.Tk(className='root')
root.mainloop()
```
## 窗体与控
### 窗体的属
- Keeping the mainloop method running
lets you keep the program running
it lets the window keep in the screen, if there's no mainloop, window will disappear as soon as the script stops running. 
### 都有啥控件widgets
- Toplevel widget 
- Label widget 
- Button widget
- Canvas widget 
- Checkbutton widget 
- Entry widget
- Frame widget 
- LabelFrame widget 
- Listbox widget
- Menu widget 
- Menubutton widget 
- Message widget
- OptionMenu widget 
- PanedWindow widget 
- Radiobutton widget
- Scale widget 
- Scrollbar widget 
- Spinbox widget
- Text widget 
- Bitmap Class widget 
- Image Class widget



There are many useful subclasses of **Variable** already defined: StringVar, IntVar, DoubleVar, and BooleanVar. To read the current value of such a variable, call the get() method on it, and to change its value you call the set() method. If you follow this protocol, the widget will always track the value of the variable, with no further intervention on your part.

*A **variable** is a factor that can change in quality, quantity, or size, which you have to take into account in a situation.*


### three geometry managers
 If you describe a task or problem as **tricky**, you mean that it is **difficult** to do or deal with


- **pack** 
- **side**: LEFT, TOP, RIGHT, and BOTTOM
decide the **alignment** of  the widget
- fill: X, Y, BOTH, and NONE (these decide whether the widget can grow in size) 
- expand: Boolean values such as tkinter.YES/tkinter.NO, 1/0, True/ False 
- anchor: NW, N, NE, E, SE, S, SW, W, and CENTER (corresponding to the  cardinal directions) 
- Internal padding (ipadx and ipady) for the padding inside widgets and external padding (padx and pady), which all default to a value of zero

if frame is itself packed with a plain pack() method with no mention of a pack option,
it will take the minimum space required to accommodate all of its child widgets.

- **grid**
 *the most commonly used geometry manager*
 


- **place**
