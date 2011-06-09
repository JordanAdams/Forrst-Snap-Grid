(function($) {
	
	$.fn.forrstSG = function(username) {
		
		var url = 'http://api.forrst.com/api/v2/users/posts/?username=' + username + '&type=snap&limit=4&callback=?';
		var elem = this;
		
		$.getJSON(url, function(data) {
			
			var i;
			var html = '';
			var htmlStart = '<div id="snapGrid">';
			var htmlEnd = '</div>';
			
			for(i = 0; i < 4; i = i + 1) {
				
				var imgUrl = data.resp[i].snaps.large_url;
				var postUrl = data.resp[i].post_url;
				
				html += '<a href="' + postUrl + '"><article style="background-image: url(\'' + imgUrl + '\');"><div class="overlay"></div></article></a>';
				
			}
			
			var html = htmlStart + html + htmlEnd;
			
			elem.html(html);
			
			$(elem).children('#snapGrid').children('a').bind('mouseenter', function() {
				
				$(this).children('article').children('.overlay').stop().fadeTo(250, 1.0);
				
			});
			
			$(elem).children('#snapGrid').children('a').bind('mouseleave', function() {
				
				$(this).children('article').children('.overlay').stop().fadeTo(250, 0);
				
			});
			
		});
		
	};
	
})(jQuery);
