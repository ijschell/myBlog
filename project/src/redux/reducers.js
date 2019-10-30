export const reducer = (state, action) => {

    switch (action.component) {
        case 'single':
            state = handleSingle(state, action)
        break;
    }

    return state
}

const handleSingle = (state, action) => {

    return {
        ...state,
        singleSlug : action.value
    }

}

export default reducer