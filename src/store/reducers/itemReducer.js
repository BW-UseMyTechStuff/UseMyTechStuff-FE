import {FETCH_START, FETCH_SUCCESS, FETCH_FAILURE, ADD_START, EDIT_START, ITEM_DETAIL_START, ITEM_DETAIL_SUCCESS, DELETE_ITEM_START, DELETE_ITEM_SUCCESS, SEARCH_ITEM} from '../actions';

export const initialState = {
    data: [],
    error:'',
    fetchingData:false,
    deletingItem: false,    
}

export const itemReducer =(state = initialState, action) => {
    switch (action.type) {
        case FETCH_START:
            return{...state, fetching:true};
        case ADD_START:
            return{...state, fetching:true};
        case EDIT_START:
            return{...state, fetching:true};
        case DELETE_ITEM_START:
            return{...state, deletingItem:true};
        case DELETE_ITEM_SUCCESS:
            return{...state, deletingItem: false, error: '', message: action.payload}
        case ITEM_DETAIL_START:
            return{...state, fetching:true};
        case ITEM_DETAIL_SUCCESS:
            return{...state, data:action.payload, fetching:false};
        case FETCH_SUCCESS:
            return{...state, data:action.payload, fetching:false};
        case FETCH_FAILURE:
            return{...state, error:action.payload, fetching:false};
        case SEARCH_ITEM:
            return {
                ...state,
                filteredItems: action.payload
            }
        default:
            return state
    }
}