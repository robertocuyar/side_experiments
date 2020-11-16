export const selectTool = tool => {
    return {
        type: 'TOOL_SELECTED',
        payload: tool
    }
}
export const selectNavChange = change => {
    return {
        type: 'NAV_CHANGE_SELECTED',
        payload: change
    }
}
export const selectJumboChange = change => {
    return {
        type: 'JUMBO_CHANGE_SELECTED',
        payload: change
    }
}
export const selectFormChange = change => {
    return {
        type: 'FORM_CHANGE_SELECTED',
        payload: change
    }
}
export const selectListChange = change => {
    return {
        type: 'LIST_CHANGE_SELECTED',
        payload: change
    }
}
export const inputNavColor = color => {
    return {
        type: 'NAV_COLOR_CHANGE',
        payload: color
    }
}
export const inputJumboColor = color => {
    return {
        type: 'JUMBO_COLOR_CHANGE',
        payload: color
    }
}
export const inputFormColor = color => {
    return {
        type: 'FORM_COLOR_CHANGE',
        payload: color
    }
}
export const inputListColor = color => {
    return {
        type: 'LIST_COLOR_CHANGE',
        payload: color
    }
}
export const inputBodyColor = color => {
    return{
        type: 'BODY_COLOR_CHANGE',
        payload: color
    }
}