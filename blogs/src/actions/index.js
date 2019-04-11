import _ from "lodash";
import jsonPlaceholder from "../apis/jsonPlaceholder";

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  await dispatch(fetchPosts());

  //  using lodash uniq and map functions to
  //  find all the unique ids in the array
  /*
    const userIds = _.uniq(_.map(getState().posts, "userId"));
    userIds.forEach(id => dispatch(fetchUser(id)));
  */

  // lodash function to chain on multiple functions
  //  back to back. We run value at the end so that
  //  the function executes on its own
  _.chain(getState().posts)
    .map("userId")
    .uniq()
    .forEach(id => dispatch(fetchUser(id)))
    .value();
};

export const fetchPosts = () => async dispatch => {
  const response = await jsonPlaceholder.get("/posts");
  dispatch({
    type: "FETCH_POSTS",
    payload: response.data
  });
};

export const fetchUser = id => async dispatch => {
  const res = await jsonPlaceholder.get(`/users/${id}`);
  dispatch({
    type: "FETCH_USER",
    payload: res.data
  });
};

/*** LODASH MEMOIZED VERSION ***/
// export const fetchUser = id => dispatch => _fetchUser(id, dispatch);

// //  _ implies that this is a Private function

// const _fetchUser = _.memoize(async (id, dispatch) => {
//   //  We use the lodash memoize fucntion to cache
//   //  the user info, so we don't call it 100 times
//   const res = await jsonPlaceholder.get(`/users/${id}`);
//   dispatch({
//     type: "FETCH_USER",
//     payload: res.data
//   });
// });

/*** LODASH MEMOIZED VERSION ***/
