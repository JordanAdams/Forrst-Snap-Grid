$(document).ready(function() {
	
	function updateGrid(username) {
		
		url = 'http://api.forrst.com/api/v2/users/posts/?username=' + username + '&type=snap&limit=4&callback=?';
		
		$.getJSON(url, function(data) {
			
			$('#snapGrid').html('');
			
			var i;
			for(i = 0; i < 4; i = i + 1) {
				
				var imgUrl = data.resp[i].snaps.large_url;
				var postUrl = data.resp[i].post_url;
				
				var html = '<a href="' + postUrl + '"><article style="background-image: url(\'' + imgUrl + '\');"><div class="overlay"></div></article></a>';
				
				$('#snapGrid').append(html);
				
			}
			
		});
		
	}
	
	updateGrid($('#username').val());
	
	$('#username').keyup(function(e) {
		
		if(e.which === 13) {
			
			updateGrid($(this).val());
			
		}
		
	});
	
	$('#snapGrid a').live({
		
		mouseenter : function() {
			
			$(this).children('article').children('.overlay').stop().fadeTo(250, 1.0);
			
		},
		
		mouseleave : function() {
			
			$(this).children('article').children('.overlay').stop().fadeTo(250, 0.0);
			
		}
		
	});
	
});









