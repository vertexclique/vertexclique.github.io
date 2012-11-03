$(function(){
  $('[rel="tooltip"]').tooltip();

  if ( window.location.pathname == '/' ) {
    $('[rel="tooltip"]').hover(
      function () {
        $('.tooltip.top').addClass("home");
      }
    );
  }

  $(".tweet").tweet({
    username: 'vertexclique',
    join_text: "auto",
    avatar_size: 32,
    count: 3,
    loading_text: "loading tweets...",
    auto_join_text_default: "",
    auto_join_text_ed: "",
    auto_join_text_ing: "",
    auto_join_text_reply: "",
    auto_join_text_url: "",
    loading_text: "loading tweets..."
  });

  $(".instagram").instagram({
    userId: 2415870,
    //hash: 'love',
    clientId: '20774615ce1941d5a3ffad5365b9bdab',
    accessToken: '2415870.2077461.6a9162bd43c44bfcab004834c191cd66',
    show: 4,
    onComplete: function(photos, data) {
      insta_next_url = data.pagination.next_url;
    }
  });
  $('#instabutton').on('click', function(){
    var button = $(this);
    var text = button.text();
    var insta_container = $(".instagram");
    button.addClass('disabled');

    if (button.text() != 'Loading…') {
      button.text('Loading…');
      insta_container.instagram({
          userId: 145937522,
          clientId: '1234',
          accessToken: '5678',
          next_url : insta_next_url,
          show : 4,
          onComplete : function(photos, data) {
            console.log(data);
            insta_next_url = data.pagination.next_url;
            button.text(text);
            button.removeClass('disabled');
          }
      });
    }
  });

});
