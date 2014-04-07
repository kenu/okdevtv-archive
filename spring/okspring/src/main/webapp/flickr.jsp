<!DOCTYPE html>
<html>
<head>
  <style>img{ height: 100px; float: left; }</style>
  <script src="http://code.jquery.com/jquery-latest.js"></script>
</head>
<body>
  <div id="images">

</div>
<script>
$.getJSON("http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?",
  {
    tags: "snsd",
    tagmode: "any",
    format: "json"
  },
  function(data) {
    $.each(data.items, function(i,item){
      $("<img/>").attr("src", item.media.m).appendTo("#images");
      if ( i == 3 ) return false;
    });
  });</script>

</body>
</html>