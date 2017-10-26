import createStore from 'redux-zero';

let comments = [
    {
        userName: "Luisa Gonzales",
        userComment: "Excellent content"
    },
    {
        userName: "Kely Vargaya",
        userComment: "I like this page"
    },
    {
        userName: "Alejandra Adrián",
        userComment: "Like this ..."
    }
];

const initialState = {
    comments: comments,
}

const store = createStore(initialState);
export default store; 