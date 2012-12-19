/*global jQuery */
/*!
* ScrollTable.js 1.0
*
* Copyright 2012, AJ Webb http://ajwebb.me
* Released under the MIT license
* http://opensource.org/licenses/MIT
*
* @link https://github.com/webbushka/scrollTable
*
*/

(function($) {

	var scrollbarWidth = 0;

	// http://jdsharp.us/jQuery/minute/calculate-scrollbar-width.php
	function getScrollbarWidth() {
		if (scrollbarWidth) return scrollbarWidth;
		var div = $('<div style="width:50px;height:50px;overflow:hidden;position:absolute;top:-200px;left:-200px;"><div style="height:100px;"></div></div>');
		$('body').append(div);
		var w1 = $('div', div).innerWidth();
		div.css('overflow-y', 'auto');
		var w2 = $('div', div).innerWidth();
		$(div).remove();
		scrollbarWidth = (w1 - w2);
		return scrollbarWidth;
	}

	$.fn.scrollTable = function(options) {
		
		var settings = $.extend({
			headerClass: 'scrollHeader',
			headerHeight: $(this).find('thead').height() || $(this).find('tr:eq(0)').height(),
			scrollBar: true,
			scrollClass: 'scrollArea',
			scrollHeight: 300
		}, options);

		settings.tableWidth = $(this).width();
		settings.scrollBarWidth = getScrollbarWidth();

		console.log(settings.tableWidth);
		
		return this.each(function() {

			var $this = $(this);
			var clone = $this.clone().css({
				'margin-top': - settings.headerHeight
			});

			$this.wrap($('<div />', {
				'class': settings.headerClass
			}).css({
				height: settings.headerHeight,
				overflow: 'hidden',
				width: settings.tableWidth
			}));

			$this.parent('.'+settings.headerClass).after($('<div />', {
				'class': settings.scrollClass
			}).append(clone).css({
				'max-height': settings.scrollHeight,
				overflow: 'auto',
				width: (settings.scrollBar)? settings.tableWidth + settings.scrollBarWidth : settings.tableWidth
			}));

		});
	};

})(jQuery);