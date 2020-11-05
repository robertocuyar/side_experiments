export const selectTool = tool => {
    return {
        type: 'TOOL_SELECTED',
        payload: tool
    }
}