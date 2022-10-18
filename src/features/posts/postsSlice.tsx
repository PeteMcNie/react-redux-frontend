import { createSlice } from '@reduxjs/toolkit'
// import type { RootState } from '../../store'

interface InitialStateItem {
  id: string
  title: string
  content: string
}

interface InitialState extends Array<InitialStateItem>{}

const initialState = [
    { id: '1', title: 'First Post!', content: 'Hello!' },
    { id: '2', title: 'Second Post', content: 'More text' }
  ]
  
  const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {}
  })
  
  export default postsSlice.reducer
