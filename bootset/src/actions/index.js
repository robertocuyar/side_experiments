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