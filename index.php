<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
		<meta name="description" content="  " />
		<meta name="generator" content="Studio 3 http://aptana.com/" />
		<meta name="author" content="Jordan Adams" />
		<meta name="viewport" content="width=device-width; initial-scale=1.0" />

		<title>Forrst Snap Grid</title>
		<link href="css/reset.css" rel="stylesheet" />
		<link href="css/style.css" rel="stylesheet" />
		<link href="css/forrstsnapgrid.css" rel="stylesheet" />
		<script src="http://code.jquery.com/jquery.min.js"></script>
		<script src="js/forrstsnapgrid.js"></script>
		<script>
			
			$(document).ready(function() {
				
				$('#gridWrap').forrstSG(
					$('#username').val()
				);
				
				$('#username').keyup(function(key) {
				
					if(key.which === 13) {
					
						$('#gridWrap').forrstSG(
							$(this).val()
						);
					
					}
				
				});
				
			});
			
		</script>
	</head>

	<body>
		
		<h1>Forrst Snap Grid</h1>
		
		<label>User: </label><input type="text" value="JordanAdams" id="username"></input>
		
		<div id="gridWrap"></div>
		
		<footer>by, Jordan Adams<br />@JordanCallumA</footer>
		
	</body>
</html>