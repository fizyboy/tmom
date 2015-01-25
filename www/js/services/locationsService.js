angular.module('tmomApp').factory('LocationsService', [ function() {

  var locationsObj = {};

  locationsObj.savedLocations = [
    
    {
      name : "My Home",
      lat : 2.8761792823,
      lng : 101.87587738
    },
    {
      name : "London, England",
      lat : 51.500152,
      lng : -0.126236
    },
    {
      name : "Paris, France",
      lat : 48.864716,
      lng : 2.349014
    },
    {
      name : "Rio de Janeiro, Brazil",
      lat : -22.970722,
      lng : -43.182365
    },
    {
      name : "Sydney, Australia",
      lat : -33.865143,
      lng : 151.209900
    }

  ];

  return locationsObj;

}]);