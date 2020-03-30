const initialState = {
    books: [
        {
            id: 1,
            title: 'Production-Ready Microservices',
            author: 'Susan J. Fowler'
        },
        {
            id: 2,
            title: 'Release It!',
            author: 'Michael T. Nygard'
        }
    ]
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
