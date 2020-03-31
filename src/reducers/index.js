const initialState = {
    books: []
};

const reducer = (state = initialState, action) => {

    if (action.type === 'BOOKS_LOADED') {
        return {
            books: action.payload
        };
    } else {
        return state;
    }
    return state;
};

export default reducer;
