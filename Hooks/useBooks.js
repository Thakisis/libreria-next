import { useState } from 'react'
export function useDirtyBooks() {
    const [books, setBooks] = useState([1, 2, 3, 4])
    const setDirtyBook = () => {

    }

    return { dirtyBooks: books, setDirtyBook }
}
