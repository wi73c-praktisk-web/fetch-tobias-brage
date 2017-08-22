fetch('https://swapi.co/api/people')
.then((response) => {
    console.log(response.status);
    if(response.status !== 200) {
        throw "Data kunne ikke hentes";
    } else {
        return response.json();
    }
})
.then((json) => {
   var containerName = document.getElementById('containerName');
   var containerList = document.getElementById('containerList');
   containerName.innerHTML = '<h1>' + json.results[0].name + '</h1>';
   containerName.innerHTML += '<h1>' + json.results[1].height + '</h1>';
   containerName.innerHTML += '<h1>' + json.results[2].name + '</h1>';
   containerName.innerHTML += '<h1>' + json.results[3].name + '</h1>';
   containerName.innerHTML += '<h1>' + json.results[4].name + '</h1>';
   containerList.innerHTML = '';
   json.results.forEach(function(element) {
        containerList.innerHTML += '<li>' + element.name + '</li>';
        console.log(json.results.status);
    });
    console.log(json);
}).catch(function(errorMsg) {
    containerName.innerHTML = errorMsg;
    containerList.innerHTML = errorMsg;
});