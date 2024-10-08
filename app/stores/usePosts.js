import { create } from 'zustand'

export default create(
  (set) => {
    return {
      displayInfo: false,
      // Values
      author: '',
      date: '',
      description: '',
      tags: [],
      image: '',

      // Actions
      setPostInfo: (author, date, description, tags) => {
        set(() => {
          return {
            author,
            date,
            description,
            tags
          }
        })
      },

      showInfo: (value) => {
        set(() => {
          return { displayInfo: value }
        })
      }
    }
  }
)
