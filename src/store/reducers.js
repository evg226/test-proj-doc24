import {
    LIKE_SET,
    LIST_ITEM_REMOVE,
    REQUEST_LIST,
    REQUEST_LIST_ERROR,
    REQUEST_LIST_SUCCESS
} from "./actions";

const initialList = {
    loading: false,
    error: false,
    data: []
}
export const reducerList = (state = initialList, action) => {
    switch (action.type) {
        case(REQUEST_LIST):
            return {loading: true, error: false, data: []}
        case(REQUEST_LIST_SUCCESS):
            const data = action.payload.map(item => {
                return {...item, like: false}
            });
            return {loading: false, error: false, data}
        case(REQUEST_LIST_ERROR):
            return {loading: false, error: action.payload, data: []}
        case(LIST_ITEM_REMOVE):
            return {
                ...state,
                data: state.data.filter(item => item._id !== action.payload)
            }
        default:
            return state
    }
}

export const reducerLikes = (state = {}, action) => {
    switch (action.type) {
        case(LIKE_SET):
            return {
                ...state,
                [action.payload]: !state[action.payload]
            }
        default:
            return state
    }
}