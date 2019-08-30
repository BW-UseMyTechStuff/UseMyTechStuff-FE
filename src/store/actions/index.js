import axiosWithAuth from '../../utils/axiosWithAuth';
import axios from 'axios';

//Login Action

export const LOGIN_START ="LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const login = (username, password) => dispatch => {
    dispatch({ type: LOGIN_START });
    return axiosWithAuth()
      .post(`https://use-my-techstuff.herokuapp.com/api/auth/login`, {
        username: username,
        password: password
      })
      .then(res => {
        // localStorage.setItem('token',res.data.token);
        dispatch({ type: LOGIN_SUCCESS, payload: res.data });
        return true
      })
      .catch(res => {
        dispatch({
          
          type: LOGIN_FAILURE,
          payload: res.data
        });
      });
  };

  //Logout
  // export const LOGOUT_START = 'LOGOUT_START';
  // export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
  // export const LOGOUT_FAILURE = 'LOGOUT_FAILURE';

  // export const logout = 

  //Register Actions

export const REGISTRATION_START = 'REGISTRATION_START';
export const REGISTRATION_SUCCESS = 'REGISTRATION_SUCCESS';
export const REGISTRATION_FAILURE = 'REGISTRATION_FAILURE';

export const addUser = (user) => dispatch => {
  dispatch({ type: REGISTRATION_START });
  axios
  .post(`https://use-my-techstuff.herokuapp.com/api/auth/register`, {
      username: user.username,
      password: user.password,
      email: user.email,
      birthday: user.birthday
    })
    .then(res => {
      // localStorage.setItem('token', res.data.token);
      console.log(res.data)
      dispatch({ type: REGISTRATION_SUCCESS, payload: res.data });
      return true;
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: REGISTRATION_FAILURE, payload: err.response });
    });
}

// Get Item

export const FETCH_START = "FETCH_START";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAILURE = "FETCH_FAILURE";

export const fetchItem = getStuff =>dispatch => {
  dispatch({ type: FETCH_START});
  axiosWithAuth()
    .get(`techstuff/items`, getStuff )
    .then(res => {
      console.log('fetched items', res)
      dispatch({type:FETCH_SUCCESS, payload:res.data})
    })
    .catch(err => {
      dispatch({type: FETCH_FAILURE, payload: err.response})
    });
}

// Add Action
export const ADD_START ="ADD_START";

export const addItem = addStuff => dispatch => {
  dispatch({ type: ADD_START });
  axiosWithAuth()
  .post(`techstuff/newItem`, addStuff)
  .then(res => {
    console.log('added item', res.data)
    dispatch({type: FETCH_SUCCESS, payload: res.data})
    return true
  })
  .catch (err =>{
    console.log(err)
    dispatch({type: FETCH_FAILURE})
  });
}

//Edit Action
export const EDIT_START="EDIT_START"

export const updateItem = (id) => dispatch => {
  dispatch({ type: EDIT_START })
  axiosWithAuth()
  .put(`techstuff/${id}`)
  .then(res => {
    dispatch({ type: FETCH_SUCCESS, payload: res.data})
  })
  .catch(err => {
    dispatch({ type: FETCH_FAILURE, payload: err.response})
  });
}

export const ITEM_DETAIL_START = 'ITEM_DETAIL_START';
export const ITEM_DETAIL_SUCCESS = 'ITEM_DETAIL_SUCCESS';

export const itemDetail = id => dispatch => {
    dispatch ({type: ITEM_DETAIL_START});
    axiosWithAuth()
    .get(`techstuff/items/${id}`)
    .then(res => {
        // console.log(res)
        dispatch({type: ITEM_DETAIL_SUCCESS, payload: res.data})
    })
}

//Delete Action
export const DELETE_ITEM_START = "DELETE_ITEM_START";
export const DELETE_ITEM_SUCCESS = "DELETE_ITEM_SUCCESS";
export const DELETE_ITEM_FAILURE = "DELETE_ITEM_FAILURE";

export const deleteItem = id => dispatch => {
  dispatch({ type: DELETE_ITEM_START });
  axiosWithAuth()
    .delete(`techstuff/${id}`)
    .then(res => {
        console.log(res.data.message)
       dispatch({ type: DELETE_ITEM_SUCCESS, payload: res.data });
      //  window.location.reload()
    })
    .catch(err => {
      console.log(err)
      dispatch({ type: DELETE_ITEM_FAILURE, payload: err });
    });
};
const itemsToFilter = []
// Search Action
export const SEARCH_ITEM = 'SEARCH_ITEM';
export const search = searchString => {
  searchString= searchString.toLowerCase();
  let filteredItems = itemsToFilter[0].data.filter(data => data.item.toLowerCase().includes(searchString))

  return {
      type: SEARCH_ITEM,
      payload: filteredItems
  }
}