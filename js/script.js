
let ajax = async () => {

    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/comments');

        let data = await response.json();

        console.log(data);


    } catch (error) {
        console.log(error);
    }
}

ajax();


