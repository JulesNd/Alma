var instaFeed = new Instafeed({
  get: 'user',
  userId: 1478649889,
  accessToken: '1478649889.8cc9a6f.f3bee637abf54ca9a35ff74c87017e4a',
  target: 'instafeed',
  sortBy: 'most-recent',
  limit: 32,
  resolution: 'standard_resolution',
  template: '<a rel="fancybox-thumb" data-title-id="title-1" class="fancybox-thumb" title="{{caption}}" href="{{image}}"><img src="{{image}}" /><div id="filter">{{model.filter}}</div><div class="info"><p id="title-1" class="location"><i class="icon-location"></i>{{location}}</p><p><i class="icon-comment"></i>{{caption}}</p><br><ul id="title-2"><li class="icon-heart" >{{likes}} likes<li class="icon-chat">{{comments}} comments</ul></div></a>'
}).run();

$.fn.extend({
  matchHeight: function(data){
    var maxHeight = 0;
    $(this).each(function() {
      maxHeight = maxHeight > $(this).height() ? maxHeight : $(this).height();
    });
    $(this).height(maxHeight);
  }
});

// Make fancybox work
$(document).ready(function() {
  $(".fancybox-thumb").fancybox({
    prevEffect	: 'elastic',
    nextEffect	: 'elastic',
    helpers	: {
      title	: {
        type: 'outside'
      },
      thumbs	: {
        width	: 50,
        height	: 50
      }
    }
  });
});
