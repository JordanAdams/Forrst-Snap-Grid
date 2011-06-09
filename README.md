	/** When adding the data **/
	
	$passRaw = $_POST['password'];
	$pass = md5($passRaw . sha1($passRaw)); //Hash of raw password + salt
	
	//Send $pass to the database
	
	
	/*************************************/
	
	
	/** When checking against record **/
	//$PassRecordRaw = database record
	
	$passInputRaw = $_POST['password'];
	$passInput = md5($passInputRaw . sha1($passInputRaw));
	
	if($passInput == $passRecord) {
	
		//Valid password
		
	} else {
	
		//Invalid password
	
	}