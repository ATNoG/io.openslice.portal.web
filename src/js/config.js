var appConfig = angular.module('portalwebapp.config',[]);


appConfig.factory('APIEndPointService', function() {
	  return {	      
		TITLE: "Openslice",
		WIKI: "ROOTURL",
		BUGZILLA: "ROOTURL/bugzilla/",
		STATUS: "ROOTURL/status/",
		APIURL: "ROOTURL",
		WEBURL: "ROOTURL/nfvportal",
		APIOAUTHURL: "ROOTURL/auth/realms/openslice",
		APITMFURL: "ROOTURL/tmf-api/serviceCatalogManagement/v4"
		
	  };
});
