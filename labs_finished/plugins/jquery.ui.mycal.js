(function($){
    $.fn.mycal = function() {
	   var mycalDefaults = {
					showAnim: "drop",
					showButtonPanel: true
                };
	   $(this).datepicker(mycalDefaults);
    }
})(jQuery);
