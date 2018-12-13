    var container=document.getElementById("container");
    //#imgs img
    var oPic=document.getElementById("pic");
    var oImg=oPic.getElementsByTagName("img");
    var oUl= document.getElementById("nav");
    var oLi=oUl.getElementsByTagName("li");
    var now = 0;//动态控制(图片/li)数组下标,完成图片切换
    var timer = null;
    //鼠标经过li按钮组时 切换图片
    for(var i=0; i<oLi.length; i++){//li按钮组切换图片
        oLi[i].index = i;
        oLi[i].onmouseover = function(){
        now = this.index;//建立li按钮组与图片组之间 一一对应的关系
          play();
        }
    }
    function play(){
         show(); 
        now++;
        if(now == oImg.length) now = 0;
    }
    
    function show(){//实现图片/li按钮切换功能
        for(var i=0; i<oImg.length; i++){
            oImg[i].className = ""; //图片
            oLi[i].className = ""; //li
        }
        oImg[now].className = "open";
        oLi[now].className = "open";
    }
    
    function go(){//主函数
        timer=setInterval(play, 2000);
    }
    go();
    
    // //鼠标经过时停止, 离开后继续
    // container.onmouseover = function(){
    //     clearInterval(timer);
    // }
    
    // container.onmouseout = function(){
    //     go();
    // }