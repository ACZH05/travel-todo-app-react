import { createSlice } from '@reduxjs/toolkit'
import { checklist } from '../../checklist'

let initialState = [checklist]

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
        homeCheckbox: (state, action) => {
          const filterUser = state.filter((user) => user.username === action.payload.token)[0].checklist
          const userChecklist = filterUser.filter((user) => user.item === action.payload.value)[0]
          userChecklist.homeCheckStatus = action.payload.checked
        }
    }
})

export const { registerUsers, homeCheckbox } = userSlice.actions

export default userSlice.reducer