const url ="https://recipe-puppy.p.rapidapi.com/?p=1"
var settings = {
	"async": true,
	"crossDomain": true,
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "recipe-puppy.p.rapidapi.com",
		"x-rapidapi-key": "d13c7f3e13msh1a4343ebe32f69ep154877jsn03ae256573ef"
	}
}

fetch(url, settings)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(e => console.error(e))

$.ajax(settings).done(function (response) {
	console.log(response);
});