$(function() {
  $("#btn-grab").click(function(){
    var yURL = $("#urlTxt").val();
    // Get Youtube ID
    var vdoID = youtube_ID(yURL);
    // youtube img url
    var imgURL = "http://img.youtube.com/vi";
    $("#youtube").attr("src","https://www.youtube.com/embed/"+vdoID+"?autoplay=1");
    $("#dw-opt").append("<option value='"+imgURL+"/"+vdoID+"/0.jpg'>0</option>"+
      "<option value='"+imgURL+"/"+vdoID+"/1.jpg'>1</option>"+
      "<option value='"+imgURL+"/"+vdoID+"/2.jpg'>2</option>"+
      "<option value='"+imgURL+"/"+vdoID+"/3.jpg'>3</option>"+
      "<option value='"+imgURL+"/"+vdoID+"/default.jpg'>default</option>"+
      "<option value='"+imgURL+"/"+vdoID+"/hqdefault.jpg'>hqdefault</option>"+
      "<option value='"+imgURL+"/"+vdoID+"/mqdefault.jpg'>mqdefault</option>"+
      "<option value='"+imgURL+"/"+vdoID+"/sddefault.jpg'>sddefault</option>"+
      "<option value='"+imgURL+"/"+vdoID+"/maxresdefault.jpg'>maxresdefault</option>"
    );
  });
});

// Get youtube ID
function youtube_ID(url){
    var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
    var match = url.match(regExp);
    return (match&&match[7].length==11)? match[7] : false;
}
