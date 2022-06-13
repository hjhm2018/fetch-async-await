let array;

let container = document.getElementById('container');

let drawComments = () => {

    array.forEach(item => {

        container.innerHTML += `
            <div class="box">
                <p class="name"><b>${item.name.charAt(0).toUpperCase()}${item.name.slice(1)}</b></p>
                <small class="email">${item.email}</small>
                <p class="comment">${item.body.charAt(0).toUpperCase()}${item.body.slice(1)}</p>
            </div>
        `
    });
}

let ajax = async () => {

    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/comments');

        let data = await response.json();

        data.splice(10);

        array = data;

        drawComments();

    } catch (error) {
        console.log(error);
    }
}

ajax();


