import { AnyAction } from "redux"

const demoReducer = (state = [], action: AnyAction) => {
    switch (action.type) {
        default:
            return state
    }
}

export default demoReducer