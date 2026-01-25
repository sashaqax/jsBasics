class ApiService {
    fetchTodo() {
        return fetch("https://jsonplaceholder.typicode.com/todos/1")
            .then(res => res.json());
    }

    fetchUser() {
        return fetch("https://jsonplaceholder.typicode.com/users/1")
            .then(res => res.json());
    }
}

class ApiServiceAsync {
    async fetchTodo() {
        const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");

        return res.json();
    }

    async fetchUser() {
        const res = await fetch("https://jsonplaceholder.typicode.com/users/1");
        return res.json();
    }
}

//test..

const api = new ApiServiceAsync();


api.fetchTodo().then(console.log);
api.fetchUser().then(console.log);
