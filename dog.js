var image = $('#image-container');
var dropdown = $("#breed");
var breed;
var allowSubmit = true;

$.get('https://dog.ceo/api/breeds/list/all', function(data, status){
    let dogBreeds = data.message;
    for(let breed in dogBreeds){
        dropdown.append('<option value = "' + breed + '">' + breed + '</option');
    }
});

dropdown.change(function(){
    allowSubmit = true;
})

$("#btn-image").click(function(){
    if(allowSubmit){
        breed = dropdown.val();
        console.log(breed);
        displayDog(breed);
        allowSubmit = false;
    }
});

$("#btn-next").click(function(){
    if(breed !== undefined){
        displayDog(breed);
    }
});

function displayDog(data, status){
    let url = "https://dog.ceo/api/breed/" + breed + "/images/random";

    $("#image-container img").remove();

    $.get(url, function(data, status){
        let imageUrl = data.message;
        image.append('<img src = "' + imageUrl + '" alt = "' + breed + '">');
    });
}