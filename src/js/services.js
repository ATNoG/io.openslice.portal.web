var appServices = angular.module('portalapp.services',[]);

//PortalUser Resource
appServices.factory('PortalUser', function($resource, APIEndPointService) {
	return $resource(APIEndPointService.APIURL+"admin/users/:id", 
			{ id: '@id' }, {
	    update: {
	        method: 'PUT' // this method issues a PUT request
        	
	      }
	});
});

//MentorUser Resource
appServices.factory('MentorUser', function($resource, APIEndPointService) {
	return $resource(APIEndPointService.APIURL+"admin/users/mentors/:id", 
			{ id: '@id' }, {
	    update: {
	        method: 'PUT' // this method issues a PUT request
      	
	      }
	});
})

appServices.factory('SessionService', function($resource, APIEndPointService) {
	return $resource(APIEndPointService.APIURL+"sessions/");
});


appServices.service('popupService',function($window){
    this.showPopup=function(message){
        return $window.confirm(message);
    }
});






appServices.factory('formDataObject', function() {
	return function(data) {
		var fd = new FormData();
		angular.forEach(data, function(value, key) {
			if (value){
				fd.append(key, value);
				//console.log("key="+key+", value="+value);
			}else{
				fd.append(key, "");
			}
				
		});
		return fd;
	};
});

//SubscribedResource Resource
appServices.factory('SubscribedResource', function($resource, APIEndPointService) {
	return $resource(APIEndPointService.APIURL+"admin/subscribedresources/:id", 
			{ id: '@id' }, {
	    update: {
	        method: 'PUT' // this method issues a PUT request
        	
	      }
	});
});


//Category Resource
appServices.factory('AdminCategory', function($resource, APIEndPointService) {
	return $resource(APIEndPointService.APIURL+"admin/categories/:id", 
			{ id: '@id' }, {
	    update: {
	        method: 'PUT' // this method issues a PUT request
        	
	      }
	});
});


//Category Resource
appServices.factory('Category', function($resource, APIEndPointService) {
	return $resource(APIEndPointService.APIURL+"categories/:id", 
			{ id: '@id' }, {
	    update: {
	        method: 'PUT' // this method issues a PUT request
        	
	      }
	});
});

//experiments Resource
appServices.factory('ExperimentMetadata', function($resource, APIEndPointService) {
	
	return $resource(APIEndPointService.APIURL+"experiments/:id", 
			{ id: '@id' }, {				
		
		    update: {
		        method: 'PUT' // this method issues a PUT request      	
		      	}
	});
	
});


//Admin experiments Resource
appServices.factory('AdminExperimentMetadata', function($resource, APIEndPointService) {
	
	return $resource(APIEndPointService.APIURL+"admin/experiments/:id", 
			{ id: '@id' }, {				
		
		    update: {
		        method: 'PUT' // this method issues a PUT request      	
		      	}
	});
	
});



//experiments Resource
appServices.factory('DeployableExperimentMetadata', function($resource, APIEndPointService) {
	
	return $resource(APIEndPointService.APIURL+"admin/experiments/deployable", 
			{ id: '@id' }, {				
		
		    update: {
		        method: 'PUT' // this method issues a PUT request      	
		      	}
	});
	
});


appServices.factory('Container', function() {
	
	var container = function(id, aName) {
	       
	    this.id = id;
	     
	    this.name = aName;
	    this.deployArtifacts = [];
	 
	    this.isObject = function(object) {
	        return object instanceof Object;
	    };
	 
	};
	
	return container;
	
});


appServices.factory('DeployContainer', function() {
	
	var container = function(id, aName) {
	       
	    this.id = id;

	    this.name = aName;
	    //this.targetResource = {};
	    this.deployArtifacts = [];
	 
	    this.isObject = function(object) {
	        return object instanceof Object;
	    };
	 
	};
	
	return container;
	
});


appServices.factory('DeployArtifact', function() {
	
	var dep = function(id, uuid, name, artifactURL, artifactPackageURL, depextensions) {
	       
	    this.id = id;	     
	    this.name = name; 
	    this.uuid = uuid; 
	    this.artifactURL = artifactURL; 
	    this.artifactPackageURL = artifactPackageURL;
	    
	    
	    var exs=[];
	    angular.forEach ( depextensions, function(extension, categkey) {
	    	 var e={};
			 e.name = extension.name;
			 e.value = extension.value;
			 exs.push(e);
		 });

	    this.extensions = exs;
	    
	    this.isObject = function(object) {
	        return object instanceof Object;
	    };
	 
	};
	
	return dep;
	
	
});


//DeploymentDescriptor Resource
appServices.factory('DeploymentDescriptor', function($resource, APIEndPointService) {
	return $resource(APIEndPointService.APIURL+"admin/deployments/:id", 
		{id : "@id"	}, {
		"update" : {
			method : "PUT"
		}

	});
});



appServices.factory('formDataObject', function() {
	return function(data) {
		var fd = new FormData();
		angular.forEach(data, function(value, key) {
			if (value){
				fd.append(key, value);
				//console.log("key="+key+", value="+value);
			}else{
				fd.append(key, "");
			}
				
		});
		return fd;
	};
});


appServices.factory('VxFMetadata', function($resource, APIEndPointService) {
	return $resource(APIEndPointService.APIURL+"vxfs/:id", 
		{id : "@id"	}, {
		"update" : {
			method : "PUT"
		}

	});
});

appServices.factory('AdminVxFMetadata', function($resource, APIEndPointService) {
	return $resource(APIEndPointService.APIURL+"admin/vxfs/:id", 
		{id : "@id"	}, {
		"update" : {
			method : "PUT"
		}

	});
});

//ComputeEndpoint
appServices.factory('ComputeEndpoint', function($resource, APIEndPointService) {
	return $resource(APIEndPointService.APIURL+"fiware/computeendpoints", 
		{id : "@id"	}, {
		"update" : {
			method : "PUT"
		}

	});
});

//FIWAREServers
appServices.factory('FIWAREServers', function($resource, APIEndPointService) {
	return $resource(APIEndPointService.APIURL+"fiware/servers", 
		{id : "@id"	}, {
		"update" : {
			method : "PUT"
		}

	});
});



//MANO platform Resource
appServices.factory('AdminMANOplatform', function($resource, APIEndPointService) {
	return $resource(APIEndPointService.APIURL+"admin/manoplatforms/:id", 
			{ id: '@id' }, {
	    update: {
	        method: 'PUT' // this method issues a PUT request
      	
	      }
	});
});


//MANO provider Resource
appServices.factory('AdminMANOprovider', function($resource, APIEndPointService) {
	return $resource(APIEndPointService.APIURL+"admin/manoproviders/:id", 
			{ id: '@id' }, {
	    update: {
	        method: 'PUT' // this method issues a PUT request
      	
	      }
	});
});


appServices.factory('VxFOnBoardedDescriptor', function($resource, APIEndPointService) {
	console.log(" =====> IN appServices.factory('VxFOnBoardedDescriptor' <=========");
	return $resource(APIEndPointService.APIURL+"admin/vxfobds/:id", 
			{ id: '@id' }, {
	    update: {
	        method: 'PUT' // this method issues a PUT request
      	
	      }
	});
});

appServices.factory('ExperimentOnBoardDescriptor', function($resource, APIEndPointService) {
	console.log(" =====> IN appServices.factory('ExperimentOnBoardDescriptor' <=========");
	return $resource(APIEndPointService.APIURL+"admin/experimentobds/:id", 
			{ id: '@id' }, {
	    update: {
	        method: 'PUT' // this method issues a PUT request
      	
	      }
	});
});


//Property Resource
appServices.factory('PortalProperty', function($resource, APIEndPointService) {
	return $resource(APIEndPointService.APIURL+"admin/properties/:id", 
			{ id: '@id' }, {
	    update: {
	        method: 'PUT' // this method issues a PUT request
        	
	      }
	});
});



//Infrastructure
appServices.factory('Infrastructure', function($resource, APIEndPointService) {
	return $resource(APIEndPointService.APIURL+"admin/infrastructures/:id", 
			{ id: '@id' }, {
	    update: {
	        method: 'PUT' // this method issues a PUT request
      	
	      }
	});
});




//Infrastructure
appServices.factory('VFImage', function($resource, APIEndPointService) {
	return $resource(APIEndPointService.APIURL+"admin/vfimages/:id", 
			{ id: '@id' }, {
	    update: {
	        method: 'PUT' // this method issues a PUT request
    	
	      }
	});
});

