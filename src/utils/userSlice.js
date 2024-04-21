import { createSlice } from '@reduxjs/toolkit'



export const userSlice = createSlice({
    name: 'users',
    initialState : null,
    reducers: {
     addUser : (state , action) => {
        return action.payload
      },
      removeUser: (state , action) => {
        return null
      }
    },
  })

  export const { increment, removeUser } = userSlice.actions
  export default userSlice.reducer