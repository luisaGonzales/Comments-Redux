import createStore from 'redux-zero';

let comments = [
    {
        userName: "Luisa Gonzales",
        userComment: "Excellent content"
    },
    {
        userName: "Kely Vargaya",
        userComment: "I like this page"
    }
];

const initialState = {
    comments: comments,
    inputName: "",
    inputComment: ""
}

const store = createStore(initialState);

export default store; 