$(document).ready(function() {
  $('.carousel').carousel({
    interval: 2000
  })
});
$(document).ready(function() {
  // PC端导航栏效果
  $(".shade").click(function(){
    $(".shade").hide()
    $("#nav .toggle").hide()
    $(".navbar-nav > li > a").css("border-bottom","0");
  })

  $(".shade").hover(function(){
    // $(".navbar-nav > li > a").css("border-bottom","0");
    // $(this).css("border-bottom","1px solid #5ab530");
    $(".toggle").hide(300)
    $(".shade").hide()
    $(".navbar-nav > li > a").css("border-bottom","0");
  },function(){
    // $(this).css("border-bottom","0");
  })

  $(".toggle").hide()
  $("#index").hover(function(){
    $(".navbar-nav > li > a").css("border-bottom","0");
    $(this).css("border-bottom","1px solid #5ab530");
    $(".toggle").hide()
    $(".shade").hide()
  },function(){
    $(this).css("border-bottom","0");
  })

  $("#about").hover(function(){
    $(".navbar-nav > li > a").css("border-bottom","0");
    $(this).css("border-bottom","1px solid #5ab530");
    $(".toggle").hide()
    $(".shade").show()
    $("#nav .about").fadeIn()
  },function(){
    $(this).css("border-bottom","1px solid #5ab530");
  })
  $("#pro").hover(function(){
    $(".navbar-nav > li > a").css("border-bottom","0");
    $(this).css("border-bottom","1px solid #5ab530");
    $(".toggle").hide()
    $(".shade").show()
    $("#nav .pro").fadeIn()
  },function(){
    $(this).css("border-bottom","1px solid #5ab530");
  })
  $("#brand").hover(function(){
    $(".navbar-nav > li > a").css("border-bottom","0");
    $(this).css("border-bottom","1px solid #5ab530");
    $(".toggle").hide()
    $(".shade").hide()
  },function(){
    $(this).css("border-bottom","0");
  })
  $("#join").hover(function(){
    $(".navbar-nav > li > a").css("border-bottom","0");
    $(this).css("border-bottom","1px solid #5ab530");
    $(".toggle").hide()
    $(".shade").show()
    $("#nav .join").fadeIn()
  },function(){
    $(this).css("border-bottom","1px solid #5ab530");
  })
  $("#contactus").hover(function(){
    $(".navbar-nav > li > a").css("border-bottom","0");
    $(this).css("border-bottom","1px solid #5ab530");
    $(".toggle").hide()
    $(".shade").hide()
  },function(){
    $(this).css("border-bottom","0");
  })
  $("#storeshow").hover(function(){
    $(".navbar-nav > li > a").css("border-bottom","0");
    $(this).css("border-bottom","1px solid #5ab530");
    $(".toggle").hide()
    $(".shade").show()
    $("#nav .storeshow").fadeIn()
  },function(){
    $(this).css("border-bottom","1px solid #5ab530");
  })
  $("#favourable").hover(function(){
    $(".navbar-nav > li > a").css("border-bottom","0");
    $(this).css("border-bottom","1px solid #5ab530");
    $(".toggle").hide()
    $(".shade").hide()
  },function(){
    $(this).css("border-bottom","0");
  })
  
  // 明星产品选项卡效果
  $(".pro-tab li a").click(function(){
    $(".pro-tab li a").removeClass("ac-tab")
    $(this).addClass("ac-tab")
  })
  $(".pro-content").hide()
  $(".pro-content:first-child").show()

  $(function(){
    $(".content:eq .pro-content:not(:first)").hide();
    $(".pro-tab li a").each(function(index){
    $(this).click(
      function(){
        $(".content .pro-content:visible").hide();
        $(".content .pro-content:eq(" + index + ")").slideToggle(500);
        return true;
      })
    })
  })

  // 品牌资讯选项卡效果
  $(".news-tab > a").click(function(){
    $(".news-tab > a").removeClass("act-tab")
    $(this).addClass("act-tab")
  })
  $(".news-list").hide()
  $(".news-list:first-child").show()

  $(function(){
    $("#news:eq .news-list:not(:first)").fadeOut();
    $(".tabs").each(function(index){
    $(this).click(
      function(){
        $("#news .news-list:visible").fadeOut();
        $("#news .news-list:eq(" + index + ")").fadeToggle(500);
        return true;
      })
    })
  })

  // 店面展示选项卡效果
  $(".store-tab > a").click(function(){
    $(".store-tab > a").removeClass("act-tab")
    $(this).addClass("act-tab")
  })
  $(".shows").hide()
  $(".shows:first-child").show()

  $(function(){
    $("#store-show:eq .shows:not(:first)").fadeOut();
    $(".tabs").each(function(index){
    $(this).click(
      function(){
        $("#store-show .shows:visible").fadeOut();
        $("#store-show .shows:eq(" + index + ")").fadeToggle(500);
        return true;
      })
    })
  })

  $(".us-tab > a").click(function(){
    $(".us-tab > a").removeClass("act-tab")
    $(this).addClass("act-tab")
  })
  $(".maincontent").hide()
  $(".maincontent:first-child").show()

  $(function(){
    $("#contentpic:eq .maincontent:not(:first)").fadeOut();
    $(".tabs").each(function(index){
    $(this).click(
      function(){
        $("#contentpic .maincontent:visible").fadeOut();
        $("#contentpic .maincontent:eq(" + index + ")").fadeToggle(500);
        return true;
      })
    })
  })

  $(document).ready(function(){
    var $backToTop = $(".returntop a");
    /* 隐藏回顶部按钮 */
    $backToTop.hide();

    $(window).on('scroll', function() {
      if ($(this).scrollTop() > 1000) { /* 返回顶部按钮将在用户向下滚动100像素后出现 */
      $backToTop.fadeIn();
      } else {
      $backToTop.fadeOut();
      }
    });

    $backToTop.on('click', function(e) {
      $("html, body").animate({scrollTop: 0}, 500);
    });
  })

})

$(document).ready(function(){
  $("ul.submenu").hide();
  $("nav ul.ph li").click(function(){
    $("ul.submenu").slideUp();
    if($(this).children("ul.submenu").is(":hidden")) {
      $(this).children("ul.submenu").slideDown();
    } else {
      $(this).children("ul.submenu").slideUp();
    }
  })
})