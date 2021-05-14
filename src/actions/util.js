import Api from '../api';

// This is a file of common behaviors in actions.

export function getAll(route, action) {
    return dispatch => {
        Api.get(`${route}/all`).then(res => {
            dispatch({
                type: action,
                payload: res.data
            });
        });
    }
}

export function getId(route, action, id) {
    return dispatch => {
        Api.get(`${route}/${id}`).then(res => {
            dispatch({
                type: action,
                payload: res.data
            });
        });
    }
}

export function getAllId(route, action, id) {
    return dispatch => {
        Api.get(`${route}/${id}/all`).then(res => {
            dispatch({
                type: action,
                payload: res.data
            });
        });
    }
}

export function create(route, action, data) {
    return dispatch => {
        Api.post(route, data).then(res => {
            dispatch({
                type: action,
                payload: res.data
            });
        });
    }
}

export function update(route, action, id, data) {
    return dispatch => {
        Api.put(`${route}/${id}`, data).then(res => {
            dispatch({
                type: action,
                payload: res.data
            });
        });
    }
}

export function del(route, action, id) {
    return dispatch => {
        Api.del(`${route}/${id}`).then(res => {
            dispatch({
                type: action,
                payload: id
            });
        });
    }
}