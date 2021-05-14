import _ from 'lodash';

// Common reducer functions

export function getAll(state, field, payload) {
    return { ...state, [field]: payload };
}

export function getId(state, field, payload) {
    return { ...state, [field]: payload };
}

export function getAllId(state, field, payload) {
    return getAll(state, field, payload);
}

export function create(state, field, payload) {
    const create = state[field];
    return { ...state, [field]: [...create, payload] };
}

export function update(state, field, payload) {
    const update = state[field].map(item => item.id === payload.id ? payload : item);
    return { ...state, [field]: update };
}

export function del(state, field, payload) {
    const del = state[field].filter(item => item.id !== payload);
    return { ...state, [field]: del };
}