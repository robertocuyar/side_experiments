export const selectTool = tool => {
    return {
        type: 'TOOL_SELECTED',
        payload: tool
    }
}
export const selectNavBarChange = navChange => {
    return {
        type: 'TOOL_CHANGE_SELECTED',
        payload: navChange
    }
}