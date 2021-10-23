export const updateObjectInArray = (items, itemsId, objPropName, newObjProps) => {
    return items.map(u => {
        if (u[objPropName] === itemsId) {
            return {
                ...u,
                ...newObjProps
            }
        } else {
            return u
        }
    })
}
/*state.users.map(u => {
                if (u.id === action.userId) {
                    return {
                        ...u,
                        followed: false
                    }
                } else {
                    return u
                }
            })*/