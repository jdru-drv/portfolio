angular.module('portfolios'[]).controller(control, function($scope){
	$scope.works=[{
		id:'work-1'
		name:'Tribute page',
		pic:'img/tribute-mod.png',
		caption:'Tribute page exercise developed in FreeCodeCamp.com',
		objective:'Create a tribute page about a famous person. Task from FreeCodeCamp.',
		year:'2016',
		summary:'A static website about Elon Musk. It shows who he is, there is information about his family as well as some of his achievements. Also, there is a link in case visitors would like to get more information.',
		status:'Completed',
		skills:'Html5, Css3, Bootstrap',
		link:'/tribute/'
		},{
		id:'work-2'
		name:'Personal site',
		pic:'img/mySite-mod.png',
		caption:'Personal site, currently under construction.',
		objective:'Build a complete website about the authors personal life.',
		year:'2016',
		summary:'A complete website about the author. It contains information about himself such as education, hobbies, work experience and life in general.',
		status:'Completed',
		skills:'Html5, Css3, Javascript, Bootstrap',
		link:'/personalSite/'
		},{
		id:'work-3'
		name:'Mockup Page',
		pic:'img/mockup-mod.png',
		caption:'Mockup page made from scratch based on a template.',
		objective:'Build a landing page from scratch based on a template.',
		year:'2016',
		summary:'A landing page based on a template a friend provided (the author is unknown). The site was made completed from scratch, no libraries were used except for one external plugin for the image slider.',
		status:'Completed',
		skills:'Html5, Css3, external plugin in jQuery',
		link:'/mockup/'
	}]
	
});

