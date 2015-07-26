(function($){
  $.fn.extend({
    stickyalert: function(options) {
      var defaults = {
            barColor: '#000',
            barFontColor: '#FFF',
            barFontSize: '1.1rem',
            barText: 'Welcome to my website',
            barTextLink: '',
			cookieRememberDays: '2'
      };
      var options = $.extend(defaults, options);
      return this.each(function() {
          if (document.cookie.indexOf("jqsa") >= 0) {
            $('.alert-box').remove();
          }
          else {
          $('<div class="alert-box" style="background-color:' + options.barColor + '"><a href="' + options.barTextLink + '" style="color:' + options.barFontColor + '; font-size:' + options.barFontSize + '">' + options.barText + '</a><a href="" class="close">&#10006;</a></div>').appendTo(this);
          $(".alert-box").delegate("a.close", "click", function(event) {
            event.preventDefault();
            $(this).closest(".alert-box").fadeOut(function(event){
              $(this).remove();
              // set a new cookie
              if (options.cookieRememberDays === 0) {
                // do nothing
              }
              else {
                var hidefor =  60 * 60 * 24 * options.cookieRememberDays;
                document.cookie = "jqsa=closed;max-age=" + hidefor;
              }
            });
          });
        }
      });
    }
  });
})(jQuery);