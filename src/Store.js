import createStore from 'redux-zero';

const initialState = {
    comments: [],
    inputName: "",
    inputComment: ""
}

const store = createStore(initialState);

export default store; 