$(function () {

  // 字体设置
  (function ($) {
    var isMac = /^Mac/.test(navigator.platform);
    if (!isMac) {
      $("body")[0].setAttribute("style", "font-family: 'Microsoft YaHei'");
    }
  })($);


  // 首页黄点特效
  (function ($) {
    var $nav = $("#index .nav1");
    var $lis = $("#index .nav1 li");
    $lis.each(function (index, item) {
      if (index == 0) {
        item.addEventListener("mouseover", function () {
          $nav.css({
            "background-position-x": "0px"
          })
        })
      }
      if (index == 1) {
        item.addEventListener("mouseover", function () {
          $nav.css({
            "background-position-x": "90px"
          })
        })
      }
      if (index == 2) {
        item.addEventListener("mouseover", function () {
          $nav.css({
            "background-position-x": "180px"
          })
        })
      }
      if (index == 4) {
        item.addEventListener("mouseover", function () {
          $nav.css({
            "background-position-x": "367px"
          })
        })
      }
      if (index == 5) {
        item.addEventListener("mouseover", function () {
          $nav.css({
            "background-position-x": "457px"
          })
        })
      }
      if (index == 6) {
        item.addEventListener("mouseover", function () {
          $nav.css({
            "background-position-x": "547px"
          })
        })
      }
    });
    $nav.on("mouseout", function () {
      $nav.css({
        "background-position-x": "0px"
      })
    });
    $(".more-lan").on("mouseenter", function () {
      $(".more").stop().animate({opacity: 1}, 300);
    })
    $(".more-lan").on("mouseleave", function () {
      $(".more").stop().animate({opacity: 0}, 300);
    })
  })($);


  // 第三页点击特效
  (function ($) {
    var $dt1 = $("#roadmap .dt-wallet");
    var $dt2 = $("#roadmap .dt-ico");
    var $dt3 = $("#roadmap .dt-im");
    var $dt4 = $("#roadmap .dt-vc");
    var $dt5 = $("#roadmap .dt-trade");

    var $ls1 = $("#icon_wallet");
    var $ls2 = $("#icon_ico");
    var $ls3 = $("#icon_im");
    var $ls4 = $("#icon_vc");
    var $ls5 = $("#icon_trade");

    var canCl = true;

    var $fa = $("#roadmap .detail");

    $ls1.click(function () {
      if (canCl) {
        canCl = false;
        $("#roadmap .list")[0].className = "list am-wallet"
        $fa.stop(1, 0).animate({opacity: 0}, 250, function () {
          $dt1.removeClass("des").siblings(".detail").addClass("des");
          $fa.animate({opacity: 1}, 250, function () {
            canCl = true;
          })
        })
      }
    });

    $ls2.click(function () {
      if (canCl) {
        canCl = false;
        $("#roadmap .list")[0].className = "list am-ico"
        $fa.stop(1, 0).animate({opacity: 0}, 250, function () {
          $dt2.removeClass("des").siblings(".detail").addClass("des");
          $fa.animate({opacity: 1}, 250, function () {
            canCl = true;
          })
        })
      }
    });

    $ls3.click(function () {
      if (canCl) {
        canCl = false;
        $("#roadmap .list")[0].className = "list am-im"
        $fa.stop(1, 0).animate({opacity: 0}, 250, function () {
          $dt3.removeClass("des").siblings(".detail").addClass("des");
          $fa.animate({opacity: 1}, 250, function () {
            canCl = true;
          })
        })
      }
    });

    $ls4.click(function () {
      if (canCl) {
        canCl = false;
        $("#roadmap .list")[0].className = "list am-vc"
        $fa.stop(1, 0).animate({opacity: 0}, 250, function () {
          $dt4.removeClass("des").siblings(".detail").addClass("des");
          $fa.animate({opacity: 1}, 250, function () {
            canCl = true;
          })
        })
      }
    });

    $ls5.click(function () {
      if (canCl) {
        canCl = false;
        $("#roadmap .list")[0].className = "list am-trade"
        $fa.stop(1, 0).animate({opacity: 0}, 250, function () {
          $dt5.removeClass("des").siblings(".detail").addClass("des");
          $fa.animate({opacity: 1}, 250, function () {
            canCl = true;
          })
        })
      }
    });


  })($);


  // 阶段特效
  (function ($) {
    //left: 631px;
    //left: 378px;
    //left: 123px;
    var $sel1 = $(".sel1");
    var $sel2 = $(".sel2");
    var $sel3 = $(".sel3");

    var tri = $(".tri")[0];

    $sel1.click(function () {
      // 上
      $sel1.addClass("active").removeClass("sil").siblings().addClass("sil").removeClass("active");

      // 中
      tri.style.left = "123px";

      // 下
      // tx 里的div消失
      $("#roadmap .text div").fadeOut(300);
      $("#roadmap .container").animate({height: "128px"}, 300);
      $("#roadmap .t1").show().siblings().hide();
      // 过了300ms 点击文字的div显示
      setTimeout(function () {
        $("#roadmap .t1 div").fadeIn(300);
      }, 300);
    });

    $sel2.click(function () {
      // 上
      $sel2.addClass("active").removeClass("sil").siblings().addClass("sil").removeClass("active");

      // 中
      tri.style.left = "378px";

      // 下
      $("#roadmap .text div").fadeOut(300);
      $("#roadmap .container").animate({height: "128px"}, 300);
      $("#roadmap .t2").show().siblings().hide();
      // 过了300ms 点击文字的div显示
      setTimeout(function () {
        $("#roadmap .t2 div").fadeIn(300);
      }, 300);
    });

    $sel3.click(function () {
      // 上
      $sel3.addClass("active").removeClass("sil").siblings().addClass("sil").removeClass("active");

      // 中
      tri.style.left = "631px";

      // 下
      $("#roadmap .text div").fadeOut(300);
      $("#roadmap .container").animate({height: "242px"}, 300);
      $("#roadmap .t3").show().siblings().hide();
      // 过了300ms 点击文字的div显示
      setTimeout(function () {
        $("#roadmap .t3 div").fadeIn(300);
      }, 300);
    });


  })($);


  // 首页倒计时
  (function ($) {
    // $.ajax({
    //     type: "OPTIONS", url: "/", complete: function (x) {
    //         var reg = /\w+, (\d+) (\w+) (\d+) (\d+):(\d+):(\d+) GMT/;
    //         var time = x.getResponseHeader("Date").match(reg)
    //         var yyyy = +time[3];
    //         var hh = +time[4];
    //         var mm = time[5];
    //         var ss = +time[6];
    //         var month_t = time[2];
    //         var month;
    //         var dd = +time[1];
    //         if (/oct/i.test(month_t)) {
    //             month = 9;
    //         }
    //         if (/nov/i.test(month_t)) {
    //             month = 10;
    //         }
    //         if (/dec/i.test(month_t)) {
    //             month = 11;
    //         }
    //         var now = new Date(yyyy, month, dd, hh, mm, ss);
    //         setInterval(function () {
    //             now = new Date(yyyy, month, dd, hh, mm, ++ss);
    //         }, 1000);
    //
    //         // 第二阶段结束定时器
    //         var dom1 = {
    //             d: '#index .st2 .day',
    //             h: '#index .st2 .hour',
    //             m: '#index .st2 .min',
    //             s: '#index .st2 .sec'
    //         };
    //         var cb1 = function () {
    //             // 显示切换
    //             $('#index .buy li').removeClass('active');
    //             $('#index .buy .buy3').addClass('active');
    //             $('#index .st').addClass('hide');
    //             $('#index .st3').removeClass('hide');
    //
    //             // tab2切换至status4
    //             $('#index .st2>div').addClass('hide');
    //             $('#index .st2 .status4').removeClass('hide');
    //
    //             // tab3切换至status2
    //             $('#index .st3>div').addClass('hide');
    //             $('#index .st3 .status2').removeClass('hide');
    //
    //             $('body').addClass('body-status3');
    //         };
    //         ShowCountDown(2017, 11, 1, dom1, timer1, cb1);
    //         var timer1 = setInterval(function () {
    //             ShowCountDown(2017, 11, 1, dom1, timer1, cb1);
    //         }, 1000);
    //
    //         // 第三阶段开始定时器
    //         var dom2 = {
    //             d: '#index .st3 .status1 .day',
    //             h: '#index .st3 .status1 .hour',
    //             m: '#index .st3 .status1 .min',
    //             s: '#index .st3 .status1 .sec'
    //         };
    //         ShowCountDown(2017, 11, 1, dom2);
    //         var timer2 = setInterval(function () {
    //             ShowCountDown(2017, 11, 1, dom2, timer2);
    //         }, 1000);
    //
    //
    //         $('.sbb').removeClass('hide');
    //         // 第三阶段结束定时器
    //         var dom3 = {
    //             d: '#index .st3 .status2 .day,#index .st3 .status3 .day',
    //             h: '#index .st3 .status2 .hour,#index .st3 .status3 .hour',
    //             m: '#index .st3 .status2 .min,#index .st3 .status3 .min',
    //             s: '#index .st3 .status2 .sec,#index .st3 .status3 .sec'
    //         };
    //         ShowCountDown(2017, 12, 1, dom3, timer3, cb2);
    //         var timer3 = setInterval(function () {
    //             ShowCountDown(2017, 12, 1, dom3, timer3, cb2);
    //         }, 1000);
    //
    //         function cb2() {
    //             $('#index .st3 .status2').addClass('hide');
    //             $('#index .st3 .status3').addClass('hide');
    //             $('#index .st3 .status4').removeClass('hide');
    //         }
    //
    //         function ShowCountDown(year, month, day, obj, timer, cb) {
    //             // now = new Date();
    //             var endDate = new Date(year, month - 1, day);
    //             var leftTime = endDate.getTime() - now.getTime();
    //             var leftsecond = parseInt(leftTime / 1000);
    //             var day1 = Math.floor(leftsecond / (60 * 60 * 24));
    //             var hour = Math.floor((leftsecond - day1 * 24 * 60 * 60) / 3600);
    //             var minute = Math.floor((leftsecond - day1 * 24 * 60 * 60 - hour * 3600) / 60);
    //             var second = Math.floor(leftsecond - day1 * 24 * 60 * 60 - hour * 3600 - minute * 60);
    //             day1 = day1 < 10 ? "0" + day1 : day1;
    //             hour = hour < 10 ? "0" + hour : hour;
    //             minute = minute < 10 ? "0" + minute : minute;
    //             second = second < 10 ? "0" + second : second;
    //             $(obj.d).text(day1);
    //             $(obj.h).text(hour);
    //             $(obj.m).text(minute);
    //             $(obj.s).text(second);
    //             if (leftsecond <= 0) {
    //                 if (timer) {
    //                     clearInterval(timer);
    //                 }
    //                 cb && cb();
    //             }
    //         }
    //
    //     }
    // })


    var $bt1 = $("#index .buyBtn1 .b1");
    var $bt2 = $("#index .b2");
    $bt2.click(function () {
      location.href = "#page1";
      // $(".next").click();
    });
    $bt1.click(function () {
      // window.open("https://t.me/happylele");
      location.href = "page1";
    });
  })($);


  // 首页点击效果
  (function ($) {
    var $lis = $("#index .buy li");
    var $st = $("#index .st")
    $lis.click(function () {
      var data = $(this).data("type");
      var dur = 300;
      if ($(".buy" + data).hasClass("active")) {
        return;
      }
      $(this).addClass("active").siblings().removeClass("active");
      $st.stop(1, 1).animate({opacity: 0}, dur, function () {
        $st.addClass("hide");
        $(".st" + data).removeClass("hide");
        $st.stop(1, 1).animate({opacity: 1}, dur);
      })

    });

    var $bin = $("#index .buy-now");
    $bin.click(function () {
      $(".buy2").click();
    });
  })($);


  // 第二页点击特效
  (function ($) {
    $r1 = $("#projectInfo .r1");
    $r2 = $("#projectInfo .r2");
    $r3 = $("#projectInfo .r3");
    $r4 = $("#projectInfo .r4");
    $r5 = $("#projectInfo .r5");

    var dur = 300;
    $r1.click(function () {
      window.stFlag = "ig";
      $("#roadmap .dt-im").removeClass("des").siblings(".detail").addClass("des");
      $("#roadmap .list").addClass("am-im");
      $("#roadmap").css({zIndex: 3}).animate({opacity: 1}, dur);
    });

    $r2.click(function () {
      window.stFlag = "ig";
      $("#roadmap .dt-trade").removeClass("des").siblings(".detail").addClass("des");
      $("#roadmap .list").addClass("am-trade");
      $("#roadmap").css({zIndex: 3}).animate({opacity: 1}, dur);
    });

    $r3.click(function () {
      window.stFlag = "ig";
      $("#roadmap .dt-vc").removeClass("des").siblings(".detail").addClass("des");
      $("#roadmap .list").addClass("am-vc");
      $("#roadmap").css({zIndex: 3}).animate({opacity: 1}, dur);
    });

    $r4.click(function () {
      window.stFlag = "ig";
      $("#roadmap .dt-wallet").removeClass("des").siblings(".detail").addClass("des");
      $("#roadmap .list").addClass("am-wallet");
      $("#roadmap").css({zIndex: 3}).animate({opacity: 1}, dur);
    });

    $r5.click(function () {
      window.stFlag = "ig";
      $("#roadmap .dt-ico").removeClass("des").siblings(".detail").addClass("des");
      $("#roadmap .list").addClass("am-ico");
      $("#roadmap").css({zIndex: 3}).animate({opacity: 1}, dur);
    });
  })($);

  // next
  (function ($) {
    function setHashChange() {
      var hash = location.hash;

      if (hash == "#page1/3" || hash == "#page1/2" || hash == "#page6" || hash == "#page7" || hash == "#page4/1" || hash == "#page4/2") {
        $("._next").addClass("wi")
        $("#fullPage-nav").addClass("wp");
      } else {
        $("._next").removeClass("wi")
        $("#fullPage-nav").removeClass("wp");
      }
      // chart
      // if (hash == "#page1/3") {
      //     $("._next").css({"z-index": -1});
      // } else {
      //     $("._next").css({"z-index": 999});
      // }
    }

    window.onhashchange = function () {
      setHashChange();
    };
    setHashChange();
  })($);

  $(".lele").on("click", function () {
    window.open("https://t.me/gameico")
  });


  // 交互
  (function ($) {

    // 复制
    function setClipboardText(event, value) {
      if (event.clipboardData) {
        return event.clipboardData.setData("text/plain", value);
      } else if (window.clipboardData) {
        return window.clipboardData.setData("text", value);
      }
    };
    $(".lele ,.slack").on("click", function () {
      window.open("https://t.me/gameico")
    });
    $(".cpBtn").on("click", function () {
      var clipBoardContent = $("#wl_add").text();

      function copyToClipboard(elementId) {
        // 创建元素用于复制
        var aux = document.createElement("input");

        // 获取复制内容
        var content = document.getElementById(elementId).innerHTML || document.getElementById(elementId).value;

        // 设置元素内容
        aux.setAttribute("value", content);

        // 将元素插入页面进行调用
        document.body.appendChild(aux);

        // 复制内容
        aux.select();

        // 将内容复制到剪贴板
        document.execCommand("copy");

        // 删除创建元素
        document.body.removeChild(aux);
      }

      copyToClipboard("wl_add");
      $(".ok").fadeIn(300).delay(2000).fadeOut(300);
    });


    $(".btn-now1").on("click", function () {
      $("#index .canvas-content,#index .agree").animate({opacity: 0}, 300, function () {
        $("#index .canvas-content").addClass("hide");
        $("#index .agree").removeClass("hide");
        $("#index .canvas-content,#index .agree").animate({opacity: 1}, 300);
        $("#index .agree .close").off("click").on("click", function () {
          $("#index .canvas-content,#index .agree").animate({opacity: 0}, 100, function () {
            $("#index .canvas-content").removeClass("hide");
            $("#index .agree").addClass("hide");
            $("#index .canvas-content,#index .agree").animate({opacity: 1}, 100);
          })
        });
      })
    });
    var showTip = function (tip) {
      let msg = tip || "您已成功订阅G币的ICO消息";
      $(".agree .form-tip").text(msg).stop(1, 1).fadeIn(300).delay(3000).fadeOut(300);
    }


    // 验证
    $("#agree").on("submit", function () {
      var canSub = 1;
      let errArr = [];
      let isCk = 1;
      let eth_address = $(".eth_address").val();
      let email = $(".email").val();
      if (!/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(email)) {
        // errArr.push("Email");
        // canSub = 0;
      }
      if (!/^0[xX][0-9a-fA-F]{40}$/.test(eth_address)) {
        // errArr.push("Ether Address");
        // canSub = 0;
      }
      if (!$("input[type='checkbox']").is(':checked')) {
        canSub = 0;
        isCk = 0;
      }

      if (canSub) {
        subSuccess();
      } else {
        var tips = "";
        var str = "";
        if (!isCk) {
          tips += "Please accept the Terms and Conditions to continue. ";
        }
        str = errArr.join(" and ")
        if (str != "") {
          tips += "Please fill in correct " + str + "."
        }
        showTip(tips);
      }
      return false;
    });

    function subSuccess() {
      let data = $("#agree").serialize();
      // dev
      // let PORT = "119.254.97.86";
      let PORT = "https://tp.game.com";
      let api = "/ico/subscribe/icoinfo"
      $.ajax({
        url: PORT + api,
        data: data,
        type: "get",
        dataType: "json"
      });
      $(".canvas-content,.agree").animate({opacity: 0}, 400, function () {
        $(".agree").addClass("hide");
        $(".canvas-content").removeClass("hide");
        if ($('body').hasClass('body-status3')) {
          $(".canvas-content .st.st3 >div").addClass("hide");
          $(".canvas-content .st3 .status3").removeClass("hide");
          $(".canvas-content,.agree").animate({opacity: 1}, 400);
        } else {
          $(".canvas-content .st.st2 >div").addClass("hide");
          $(".canvas-content .st2 .status3").removeClass("hide");
          $(".canvas-content,.agree").animate({opacity: 1}, 400);
        }

      })
    }
  })($);

});