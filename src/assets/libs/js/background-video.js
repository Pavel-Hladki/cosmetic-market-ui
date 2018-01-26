jQuery(document).ready(function() {
  checkVideoContainer();
});

function checkVideoContainer () {
  if($('#intro').is(':visible')){
      $('#intro').vide({
        mp4: "assets/video/ALOE_PLUS_LANZAROTE_desctop.mp4",
        poster: "assets/img/bg-fallback-1.png"
      }, {
        posterType: 'png'
      });
  } else {
    setTimeout(checkVideoContainer, 50);
  }
}
