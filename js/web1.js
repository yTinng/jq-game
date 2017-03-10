/**
 * Created by THINKPAD on 2016/11/21.
 */
$(document).ready(function () {
    alert("请试着点击导航栏-游戏介绍")
    for (var i = 0; i < 4; i++) {
        var li = $("<li></li>");
        var span = $("<span></span>")
        $(span).addClass("span" + i);
        $(li).append(span);
        var div = $("<div></div>")
        $(div).addClass("div" + i);
        $(li).append(div);
        $(li).addClass("li" + i);
        $(".games").append(li);
    }
    var $lis = $(".games li");
    $(".li0").width(719);
    $(".span0").hide();
    $lis.mouseenter(function () {
        var $this = $(this);
        $this.children("span").hide();
        $this.siblings().children("span").show();
    })
    $(".games li").mouseenter(function () {
        $(this).css("width","719px").siblings().css("width", "152px");
        // $(this).stop().animate({width: "719px"},10).siblings().stop().animate({width: "152px"}, 100)
    });




    //nav_bar
    var $ui = $("#u-i");
    $ui.mouseenter(function () {
        $("#s-menu").css("visibility", "visible")
    })
    $ui.mouseleave(function () {
        $("#s-menu").css("visibility", "hidden")

    })



    //web2
    // part1
    $(".btn1 li").mouseenter(function () {
        var $index=$(".btn1 li").index($(this));
        var $big=$(".big")
        $(".part1 .lisul1").animate({"marginLeft":-$index*$big.width()},50);
    })
    //part2
    $(".btn2 li").mouseenter(function () {
        var $index=$(".btn2 li").index($(this));
        var $big=$(".big")
        $(".part1 .lisul2").animate({"marginLeft":-$index*$big.width()},50);
    });
    //part3
    $(".btn3 li").mouseenter(function () {
        var $index=$(".btn3 li").index($(this));
        var $big=$(".big")
        $(".part1 .lisul3").animate({"marginLeft":-$index*$big.width()},50);
    });
    //part4
    $(".btn4 li").mouseenter(function () {
        var $index=$(".btn4 li").index($(this));
        var $big=$(".big")
        $(".part1 .lisul4").animate({"marginLeft":-$index*$big.width()},50);
    });
    //图片缩放
    console.log($(".lisul img"));

    $(".big .lis img").mouseenter(function () {
        $(this).stop().animate({"width":"640px",
                          "height":"385px",
                          "marginLeft":"-30px",
                          "marginTop":"-30px"},1000)
    })
    $(".big .lis img").mouseleave(function () {
        $(this).stop().animate({"width":"581px",
            "height":"325px",
            "marginLeft":"0px",
            "marginTop":"0px"},800)
    })
});

