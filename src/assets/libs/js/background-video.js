jQuery(document).ready(function() {
  checkVideoContainer();
});

function checkVideoContainer () {
  if($('#intro').is(':visible')){
      var mp4 = $(window).width() < 431 ? "ALOE_PLUS_LANZAROTE_small.mp4" : "ALOE_PLUS_LANZAROTE_desktop.mp4";
      $('#intro').vide({
        mp4: "assets/video/" + mp4,
        poster: "assets/img/bg-fallback-1.png"
      }, {
        posterType: 'png'
      });
      $("video[autoplay]").each(function(){ this.play(); });
  } else {
    setTimeout(checkVideoContainer, 50);
  }
}
