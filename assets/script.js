let getFrontCover = function(cover) {

    let apiUrl = 'https://books.google.com/books?id=Py8u3Obs4f4C&printsec=frontcover';

    fetch(apiUrl).then(function(response) {
        response.json().then(function(data) {
            console.log(data);
        });
    });
};

getFrontCover();