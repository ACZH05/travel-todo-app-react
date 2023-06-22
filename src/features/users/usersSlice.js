import { createSlice } from '@reduxjs/toolkit'
// import useLocalStorage from 'use-local-storage'
import { checklist } from '../../checklist'

const initialState = checklist

const userSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        registerUsers: () => {
                console.log("clicked")
        }
    }
})

export const { registerUsers } = userSlice.actions

export default userSlice.reducer