
export const getPosts = (page) => async (dispatch) => {
    try {
        dispatch({type: START_LOADING});
        const { data } = await api.fetchPosts(page);

        dispatch({ type: FETCH_ALL, payload: data });
        dispatch({type: END_LOADING});
    } catch (error) {
        console.log(error.message);
    }
};