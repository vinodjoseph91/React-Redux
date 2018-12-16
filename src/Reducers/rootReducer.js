const initState = {
    posts: [
        { id: '1', title: "first title", body: "quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto" },
        { id: '2', title: "second title", body: "quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto" },
        { id: '3', title: "third title", body: "quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto" }
    ]
};

const rootReducer = (state = initState, action) => {
    if (action.type === 'DELETE_POST') {
        let newPosts = state.posts.filter(post => {
            return post.id !== action.id;
        });
        return {
            ...state,
            posts: newPosts
        };
    }
    return state;
}



export default rootReducer;