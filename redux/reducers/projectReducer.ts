import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  projects: [] as any
}

const projectSlice = createSlice({
  name: 'project',
  initialState,
  reducers: {
    setProjects: (state, action) => {
      state.projects = action.payload
    },
    updateProjects: (state, action) => {
      state.projects = [action.payload, ...state.projects]
    }
  }
})

export const { setProjects, updateProjects } = projectSlice.actions
export default projectSlice.reducer