(function($){
    $.fn.tablehover = function(css) {
	  var style = css || 'active';
      $('td:parent').hover(
      function() {
          $(this).parent().addClass(style);
      },
      function() {
          $(this).parent().removeClass(style);
      });
    }
})(jQuery);
