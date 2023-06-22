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
        loginUser: (state, action) => {
            state.forEach((state) => {
                return (state.username === action.payload.username && state.password === action.payload.password)
            })
        }
    }
})

export const { registerUsers, loginUser } = userSlice.actions

export default userSlice.reducer