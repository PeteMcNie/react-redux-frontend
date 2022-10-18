import { createSlice } from '@reduxjs/toolkit'

// const initialState = [
//     { id: '1', title: 'First Post!', content: 'Hello!' },
//     { id: '2', title: 'Second Post', content: 'More text' }
//   ]

const initialState = {
  data: [ { id: 1, title: 'hello', content: 'test here' } ],
  status: null,
}
  
  const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
      postAdded(state, action) {
        state.data.push(action.payload)
      }
    }
  })
  
  export const { postAdded } = postsSlice.actions
  export default postsSlice.reducer
