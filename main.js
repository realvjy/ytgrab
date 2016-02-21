// Function that control grab
$(function() {
  $("#btn-grab").one("click",function(){
    var yURL = $("#urlTxt").val();
    var imgURL = "http://img.youtube.com/vi";
    var count = 1;
    // Get Youtube ID
    if (validURL(yURL)==1) {
      var vdoID = youtube_ID(yURL);
      // youtube img url
      $("#youtube").attr("src","https://www.youtube.com/embed/"+vdoID+"?autoplay=1");
      var zero0 = imgURL+"/"+vdoID+"/0.jpg";
      var one1 = imgURL+"/"+vdoID+"/1.jpg";
      var two2 = imgURL+"/"+vdoID+"/2.jpg";
      var three3 = imgURL+"/"+vdoID+"/3.jpg";
      var defaultImg = imgURL+"/"+vdoID+"/default.jpg";
      var hqDefault = imgURL+"/"+vdoID+"/hqdefault.jpg";
      var mqDefault = imgURL+"/"+vdoID+"/mqdefault.jpg";
      var sdDefault = imgURL+"/"+vdoID+"/sddefault.jpg";
      var maxDefault = imgURL+"/"+vdoID+"/maxresdefault.jpg";

      $(".list-inline").append("<li><a href='"+zero0+"' download='0.jpg'>0</a></li>"+
                    "<li><a href='"+one1+"' download='1.jpg'>1</a></li>"+
                    "<li><a href='"+two2+"' download='2.jpg'>2</a></li>"+
                    "<li><a href='"+three3+"' download='3.jpg'>3</a></li>"+
                    "<li><a href='"+defaultImg+"' download='defaultImg.jpg'>Default</a></li>"+
                    "<li><a href='"+sdDefault+"' download='sdqdefault.jpg'>Standard</a></li>"+
                    "<li><a href='"+mqDefault+"' download='mqdefault.jpg'>Medium</a></li>"+
                    "<li><a href='"+hqDefault+"' download='hqdefault.jpg'>HQ</a></li>"+
                    "<li><a href='"+maxDefault+"' download='maxdefault.jpg'>Max Res.</a></li>"
      );

      $("#select").css("display","block");
      $("select").change(function()
      {
          var dwImg = $( "#select option:selected" ).val();
          var dwTxt = $( "#select option:selected" ).text();
          $("#dwn").attr({href:dwImg,download:dwTxt});
      });
    } else {
      $("#select").fadeIn("slow");
      $("#youtube").removeAttr("src");
    }
  });
});

// Get youtube ID
function youtube_ID(url){
    var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
    var match = url.match(regExp);
    return (match&&match[7].length==11)? match[7] : false;
}

// validate url
function validURL(yurl) {
  var myVariable = yurl;
   if(/^(http|https|ftp):\/\/[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/i.test(myVariable)) {
     return 1;
   } else {
     return -1;
   }
}
