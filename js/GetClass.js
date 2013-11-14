// JavaScript Document
//一下在chrome浏览器控制台document.getElementsByClassName的模拟
//网页为我自己的写的三级导航网页


//定义一个对象GetName
var GetName = document.getElementsByClassName("up");
//然后输出GetName
GetName
//结果如下
/*

<li class="up" >
                    	<a href="#">二级导航</a>
                        <ul >
                        	<li ><a href="#">三级导航</a></li>
                            <li><a href="#">三级导航</a></li>
                        </ul>
                    </li>
            	</ul>
            </li>
			
*/



//定义一个对象GetClass
var GetClass = document.getElementsByClassName("down");
//然后输出GetClass
//结果如下
/*

[
<li class=​"down">​…​</li>​
, 
<li class=​"down">​…​</li>​
, 
<li class=​"down">​…​</li>​
, 
<li class=​"down">​…​</li>​
, 
<li class=​"down">​…​</li>​
, 
<li class=​"down">​…​</li>​
, 
<li class=​"down">​…​</li>​
, 
<li class=​"down">​…​</li>​
]

*/