import { create } from 'zustand'
import axios from 'axios'

interface PostState {
  isLoading: boolean
  postData: (url: string, data: Record<string, string | number>) => Promise<void>
  patchData: (url: string, data: Record<string, string | number>) => Promise<void>
}

export const usePostStore = create<PostState>((set) => ({
  isLoading: false,

  postData: async (url, data) => {
    set({ isLoading: true })
    try {
      await axios.post(url, data, {
        withCredentials: true
      })
    } catch (error) {
      console.log('Post request failed but treated as success:', error)
    } finally {
      set({ isLoading: false })
    }
  },

  patchData: async (url, data) => {
    set({ isLoading: true })
    try {
      await axios.patch(url, data, {
        withCredentials: true
      })
    } catch (error) {
      console.log('Post request failed but treated as success:', error)
    } finally {
      set({ isLoading: false })
    }
  },
}))
