MOBILE

	->pasta main/factories: linha 1 -> mudar url para sup.alpha ou beta conforme o upgrade


	->index.html:linha 142 
		if(location.href.split("/")[3] !== "#!") {
			window.location.href = "http://m.dev.centroproduto.com/#!/"; - comentar sempre para upgrade
			//window.location.href = "http://m.alpha.centroproduto.com/#!/"; - descomentar caso alpha
			//lwindow.location.href= "http://m.centroproduto.com/#!/"; - descomentar caso real
		}
	
	-> pasta main/controllers/main_controller: linha 62
		$scope.domain_url_desktop = 'http://m.dev.centroproduto.com/site/centroproduto'; //comentar sempre para upgrade
		//$scope.domain_url_desktop = 'http://m.alpha.centroproduto.com/site/centroproduto'; // descomentar caso alpha
		//$scope.domain_url_desktop = 'http://www.centroproduto.com'; //descomentar caso real
		
		
	
DESKTOP 

	->pasta /site/centroproduto/main/factories: linha 1 -> mudar url para sup.alpha ou beta conforme o upgrade


	->index.html:linha 142 - substituir o seguinte codigo conforme alpha ou real
		ALPHA
		if(location.href.split("/")[5] !== "#!") {
			window.location.href = "http://m.alpha.centroproduto.com/#!/site/centroproduto/";
		}
		REAL
		if(location.href.split("/")[3] !== "#!") {
			window.location.href = "http://www.centroproduto.com/#!/"; 
		}
	
	-> pasta /site/centroproduto/main/controllers/main_controller: linha 62
		$scope.domain_url_mobile = 'http://m.dev.centroproduto.com';  - comentar sempre para upgrade 
		//$scope.domain_url_mobile = 'http://m.alpha.centroproduto.com';  - descomentar caso alpha
		//$scope.domain_url_mobile = 'http://m.centroproduto.com'; - descomentar caso real
	
	
	-> pasta /site/centroproduto/edit_actor/partials/files_items_manager
		linha 66 (substituir um URL conforme upgrade)
		http://sup.dev.centroproduto.com/pt/easy_xls/upload/ - caso DEV	
		http://sup.alpha.centroproduto.com/pt/easy_xls/upload/ - caso ALPHA
		http://sup.beta.centroproduto.com/pt/easy_xls/upload/ - caso REAL
		
		linha 73 (substitui um URL conforme upgrade
		http://sup.dev.centroproduto.com/pt/fileupload/file_upload_bank/ - caso DEV
		http://sup.alpha.centroproduto.com/pt/fileupload/file_upload_bank/ - caso ALPHA
		http://sup.beta.centroproduto.com/pt/fileupload/file_upload_bank/ - caso REAL
	
	