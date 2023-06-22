import { createSlice } from '@reduxjs/toolkit'
import { checklist } from '../../checklist'

const initialState = [checklist]

const userSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        registerUsers: (state, action) => {
            const newUser = {
                username: action.payload.username,
                password: action.payload.password,
                checklist: checklist.checklist,
                bucketlist: checklist.bucketlist
            }
            state.push(newUser)
        },
    }
})

export const { registerUsers } = userSlice.actions

export default userSlice.reducer