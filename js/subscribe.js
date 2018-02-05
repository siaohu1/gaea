    var config = {
        authDomain: "wd0546077296hshewg.wilddog.com",
        syncURL: "https://wd0546077296hshewg.wilddogio.com/"
    };
    wilddog.initializeApp(config);
    var ref = wilddog.sync().ref();
    //访问量
    var caution=false
      function setCookie(name,value,expires,path,domain,secure)
      {
        var curCookie=name+"="+escape(value) +
          ((expires)?";expires="+expires.toGMTString() : "") +
          ((path)?"; path=" + path : "") +
          ((domain)? "; domain=" + domain : "") +
          ((secure)?";secure" : "")
        if(!caution||(name + "=" + escape(value)).length <= 4000)
        {
          document.cookie = curCookie
        }
        else if(confirm("Cookie exceeds 4KB and will be cut!"))
        {
          document.cookie = curCookie
        }
      }
      function getCookie(name)
      {
        var prefix = name + "="
        var cookieStartIndex = document.cookie.indexOf(prefix)
        if (cookieStartIndex == -1)
        {
          return null
        }
        var cookieEndIndex=document.cookie.indexOf(";",cookieStartIndex+prefix.length)
        if(cookieEndIndex == -1)
        {
          cookieEndIndex = document.cookie.length
        }
        return unescape(document.cookie.substring(cookieStartIndex+prefix.length,cookieEndIndex))
      }
      function deleteCookie(name, path, domain)
      {
        if(getCookie(name))
        {
          document.cookie = name + "=" +
            ((path) ? "; path=" + path : "") +
            ((domain) ? "; domain=" + domain : "") +
            "; expires=Thu, 01-Jan-70 00:00:01 GMT"
        }
      }
      function fixDate(date)
      {
        var base=new Date(0)
        var skew=base.getTime()
        if(skew>0)
        {
          date.setTime(date.getTime()-skew)
        }
      }
      var now=new Date()
      fixDate(now)
      now.setTime(now.getTime()+365 * 24 * 60 * 60 * 1000)
      var visits = getCookie("counter")
      if(!visits)
      {
        visits=1;
      }
      else
      {
        visits=parseInt(visits)+1;
      }
      setCookie("counter", visits, now)
      // if (condition) {
        
      // }
      ref.child("visitnum").set(visits)
      var childref = wilddog.sync().ref("visitnum");
      childref.on('value',function(data) {
        visitnum = data.val();
        visitnumup = visitnum + 1;
      });
      ref.child("visitnum").set(visitnumup);
      console.log(visitnumup)
 
    //邮箱订阅
    $('#subscribeBTN').click(function(){
        //获取邮箱地址
        var emailaddressval = $('#emailaddress').val();
        //邮箱验证
        var emailrule = /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,5}$/;
        if (emailrule.test(emailaddressval)) {
            ref.child("email").push(emailaddressval); //将数据写入云端数据库
            alert("订阅成功！");
            console.log(ref.child("email"))
        } else {
            alert('请输入正确的邮箱地址')
            return false;
            
        }
        
    })
    
   

    


