var app = angular.module("myApp", ['me-lazyload']);

app.controller("myPhotoCtrl2", function($scope,$http) {
	$scope.records = [{name:"Nikesh",image:"images/friends/nikesh.jpg",message:" Hi Nikesh please attend my wedding"}
	,{name:"Aabhishek",image:"images/friends/aabhishek.jpg",message:" Hi Aabhishek please attend my wedding"}
	,{name:"Abhijeet Das",image:"images/friends/abhijeet_das.jpg",message:" Hi Abhijeet Das please attend my wedding"}
	,{name:"Abhijit Das",image:"images/friends/abhijit_das.jpg",message:" Hi Abhijit Das please attend my wedding"}
	,{name:"Ajay Jha",image:"images/friends/ajay_jha.jpg",message:" Hi Ajay Jha please attend my wedding"}
	,{name:"Akshay",image:"images/friends/akshay.jpg",message:" Hi Akshay please attend my wedding"}
	,{name:"Amit",image:"images/friends/amit.jpg",message:" Hi Amit please attend my wedding"}
	,{name:"Amit ",image:"images/friends/amit_.jpg",message:" Hi Amit  please attend my wedding"}
	,{name:"Anup Kumar",image:"images/friends/anup_kumar.jpg",message:" Hi Anup Kumar please attend my wedding"}
	,{name:"Anup Sharma",image:"images/friends/anup_sharma.jpg",message:" Hi Anup Sharma please attend my wedding"}
	,{name:"Arun",image:"images/friends/arun.jpg",message:" Hi Arun please attend my wedding"}
	,{name:"Arun Prasad",image:"images/friends/arun_prasad.jpg",message:" Hi Arun Prasad please attend my wedding"}
	,{name:"Ashish",image:"images/friends/ashish.jpg",message:" Hi Ashish please attend my wedding"}
	,{name:"Avijeet",image:"images/friends/avijeet.jpg",message:" Hi Avijeet please attend my wedding"}
	,{name:"Ayan",image:"images/friends/ayan.jpg",message:" Hi Ayan please attend my wedding"}
	,{name:"Bajrangi",image:"images/friends/bajrangi.jpg",message:" Hi Bajrangi please attend my wedding"}
	,{name:"Bijay",image:"images/friends/bijay.jpg",message:" Hi Bijay please attend my wedding"}
	,{name:"Chandan",image:"images/friends/chandan.jpg",message:" Hi Chandan please attend my wedding"}
	,{name:"Debasmita",image:"images/friends/debasmita.jpg",message:" Hi Debasmita please attend my wedding"}
	,{name:"Deepak Singh",image:"images/friends/deepak_singh.jpg",message:" Hi Deepak Singh please attend my wedding"}
	,{name:"Deepali",image:"images/friends/deepali.jpg",message:" Hi Deepali please attend my wedding"}
	,{name:"Dinabanshu",image:"images/friends/dinabanshu.jpg",message:" Hi Dinabanshu please attend my wedding"}
	,{name:"Gawaskar",image:"images/friends/gawaskar.jpg",message:" Hi Gawaskar please attend my wedding"}
	,{name:"Himanshu",image:"images/friends/himanshu.jpg",message:" Hi Himanshu please attend my wedding"}
	,{name:"Indrajit",image:"images/friends/indrajit.jpg",message:" Hi Indrajit please attend my wedding"}
	,{name:"Jay",image:"images/friends/jay.jpg",message:" Hi Jay please attend my wedding"}
	,{name:"Kamat",image:"images/friends/kamat.jpg",message:" Hi Kamat please attend my wedding"}
	,{name:"Kaushal",image:"images/friends/kaushal.jpg",message:" Hi Kaushal please attend my wedding"}
	,{name:"Kingshuk",image:"images/friends/kingshuk.jpg",message:" Hi Kingshuk please attend my wedding"}
	,{name:"Mayuri",image:"images/friends/mayuri.jpg",message:" Hi Mayuri please attend my wedding"}
	,{name:"Pallavi",image:"images/friends/pallavi.jpg",message:" Hi Pallavi please attend my wedding"}
	,{name:"Pankaj",image:"images/friends/pankaj.jpg",message:" Hi Pankaj please attend my wedding"}
	,{name:"Pankaj Prajapati",image:"images/friends/pankaj_prajapati.jpg",message:" Hi Pankaj Prajapati please attend my wedding"}
	,{name:"Prabhat",image:"images/friends/prabhat.jpg",message:" Hi Prabhat please attend my wedding"}
	,{name:"Pushpak",image:"images/friends/pushpak.jpg",message:" Hi Pushpak please attend my wedding"}
	,{name:"Quazi",image:"images/friends/quazi.jpg",message:" Hi Quazi please attend my wedding"}
	,{name:"Rajeev",image:"images/friends/rajeev.jpg",message:" Hi Rajeev please attend my wedding"}
	,{name:"Rakesh",image:"images/friends/rakesh.jpg",message:" Hi Rakesh please attend my wedding"}
	,{name:"Richa",image:"images/friends/richa.jpg",message:" Hi Richa please attend my wedding"}
	,{name:"Riya",image:"images/friends/riya.jpg",message:" Hi Riya please attend my wedding"}
	,{name:"Robin",image:"images/friends/robin.jpg",message:" Hi Robin please attend my wedding"}
	,{name:"Rohit",image:"images/friends/rohit.jpg",message:" Hi Rohit please attend my wedding"}
	,{name:"Ronnie Da",image:"images/friends/ronnie_da.jpg",message:" Hi Ronnie Da please attend my wedding"}
	,{name:"Rupak",image:"images/friends/rupak.jpg",message:" Hi Rupak please attend my wedding"}
	,{name:"Sandip",image:"images/friends/sandip.jpg",message:" Hi Sandip please attend my wedding"}
	,{name:"Sanjay",image:"images/friends/sanjay.jpg",message:" Hi Sanjay please attend my wedding"}
	,{name:"Satyendra",image:"images/friends/satyendra.jpg",message:" Hi Satyendra please attend my wedding"}
	,{name:"Souvik",image:"images/friends/souvik.jpg",message:" Hi Souvik please attend my wedding"}
	,{name:"Subhadeep",image:"images/friends/subhadeep.jpg",message:" Hi Subhadeep please attend my wedding"}
	,{name:"Subhajit",image:"images/friends/subhajit.jpg",message:" Hi Subhajit please attend my wedding"}
	,{name:"Subhankar",image:"images/friends/subhankar.jpg",message:" Hi Subhankar please attend my wedding"}
	,{name:"Suvra",image:"images/friends/suvra.jpg",message:" Hi Suvra please attend my wedding"}
	,{name:"Swagnika",image:"images/friends/swagnika.jpg",message:" Hi Swagnika please attend my wedding"}
	,{name:"Tapas",image:"images/friends/tapas.jpg",message:" Hi Tapas please attend my wedding"}
	,{name:"Tina",image:"images/friends/Tina.jpg",message:" Hi Tina please attend my wedding"}
	,{name:"Vijaya Laxmi",image:"images/friends/vijaya_laxmi.jpg",message:" Hi Vijaya Laxmi please attend my wedding"}
	,{name:"Vikash",image:"images/friends/vikash.jpg",message:" Hi Vikash please attend my wedding"}
	,{name:"Vikash Keshri",image:"images/friends/vikash_keshri.jpg",message:" Hi Vikash Keshri please attend my wedding"}
	,{name:"Vyom",image:"images/friends/vyom.jpg",message:" Hi Vyom please attend my wedding"}
	];
/*$http.get('js/friends.json').
	success(function(data, status, headers, config) {
		$scope.records = data;
	}).
	error(function(data, status, headers, config) {
      // log error
  });*/
});
app.controller("myPhotoCtrl", function($scope,$http) {

	$scope.ourphotos = [{category:"selfie",image:"images/us/us10_selfie.jpg"}
	,{category:"selfie",image:"images/us/us11_selfie.jpg"}
	,{category:"selfie",image:"images/us/us12_selfie.jpg"}
	,{category:"selfie",image:"images/us/us13_selfie.jpg"}
	,{category:"selfie",image:"images/us/us14_selfie.jpg"}
	,{category:"romantic",image:"images/us/us15_romantic.jpg"}
	,{category:"romantic",image:"images/us/us16_romantic.jpg"}
	,{category:"selfie",image:"images/us/us17_selfie.jpg"}
	,{category:"selfie",image:"images/us/us18_selfie.jpg"}
	,{category:"beach",image:"images/us/us1_beach.jpg"}
	,{category:"beach",image:"images/us/us2_beach.jpg"}
	,{category:"beach",image:"images/us/us3_beach.jpg"}
	,{category:"beach",image:"images/us/us4_beach.jpg"}
	,{category:"beach",image:"images/us/us5_beach.jpg"}
	,{category:"beach",image:"images/us/us6_beach.jpg"}
	,{category:"beach",image:"images/us/us7_beach.jpg"}
	,{category:"romantic",image:"images/us/us8_romantic.jpg"}
	,{category:"selfie",image:"images/us/us9_selfie.jpg"}
	];

	/*$http.get('js/us.json').
	success(function(data, status, headers, config) {
		$scope.ourphotos = data;
	}).
	error(function(data, status, headers, config) {
      // log error
  });
  */
  
});
