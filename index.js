'use strict';

function getMultipleDogImages(breed) {
    fetch(`https://dog.ceo/api/breed/${breed}/images/random`) 
        .then(response => response.json())
        .then(responseJson => displayImg(responseJson))
        .catch(error => alert('Something went wront. Try again later.'));
}

function displayImg(responseJson) {
    console.log(responseJson);

    if (responseJson.message == 'Breed not Found') {
        alert('Breed not Found, Try Again.');
    } else {
        $('.results').html(`<h2>Look!</h2>`);

    let splitUrl = responseJson.message.split('/');
    let breedName = splitUrl[4];
    $('.results').append(`<h3>${breedName}</h3>`);
    $('.results').append(`<img src="${responseJson.message}" class="results-img" width="300" height="auto">`);
    $('.results').removeClass('hidden');
    }
}

function watchForm() {
    $('form').submit(event => {
        event.preventDefault();
        let dogBreed = $('input[name="dogBreed"]').val()
        getMultipleDogImages(dogBreed);
    });
}

$(function() {
    console.log('Waiting for submit.')
    watchForm();
});