fetch('https://swapi.co/api/peopl')
.then((response) => {
    console.log(response.status);
    if(response.status !== 200) {
        throw new Error("Data kunne ikke hentes");
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
        element.films.forEach(function(films) {
            containerList.innerHTML += '<a href="'+ films + '">'+ index +'</a>';
        }, this);
        console.log(json.results.status);
    });
    console.log(json);
}).catch(function(errorMsg) {
    containerName.innerHTML = errorMsg;
    containerList.innerHTML = errorMsg;
});

//basic fetch layout
// //fetch(url).then((response) => {
//     if (response.ok) {
//         return response.json();
//       } else {
//         throw new Error('Something went wrong');
//       }
//     })
//     .then((responseJson) => {
//       // Do something with the response
//     })
//     .catch((error) => {
//       console.log(error)
//     });