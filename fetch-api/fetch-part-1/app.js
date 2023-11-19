async function logMovies() {
    const response = await fetch(" https://jsonplaceholder.typicode.com/posts");
    const movies = await response.json();
    console.log(movies);

    movies.forEach(element => {
        // console.log(element.title);
        const box = document.createElement('div');

        const o_id = document.createElement('span');


        const id = document.createElement('span');

        const title = document.createElement('span');


        id.innerText = 'userId: ' + element.userId;

        title.innerText = 'title: ' + element.title;
        
        o_id.innerText = 'id: ' + element.id;

        box.appendChild(o_id);


        box.appendChild(id);

        box.appendChild(title);


        document.body.appendChild(box);

        box.className = 'list';


    });


}


logMovies();