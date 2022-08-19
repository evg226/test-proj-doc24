export const REQUEST_LIST = 'REQUEST_LIST';
export const REQUEST_LIST_SUCCESS = 'REQUEST_LIST_SUCCESS';
export const REQUEST_LIST_ERROR = 'REQUEST_LIST_ERROR';
export const FETCH_LIST = 'FETCH_LIST';
export const LIKE_SET = 'LIKE_SET';
export const LIST_ITEM_REMOVE = 'LIST_ITEM_REMOVE';

export const requestList = () => {
    return {
        type: REQUEST_LIST,
    }
}

export const requestListSuccess = (data) => {
    return {
        type: REQUEST_LIST_SUCCESS,
        payload: data
    }
}

export const requestListError = (error) => {
    return {
        type: REQUEST_LIST_ERROR,
        payload: error
    }
}

export const fetchList = () => {
    return {
        type: FETCH_LIST,
    }
}

export const likeSet = (itemId) => {
    return {
        type: LIKE_SET,
        payload: itemId
    }
}

export const listItemRemove = (itemId) => {
    return {
        type: LIST_ITEM_REMOVE,
        payload: itemId
    }
}
