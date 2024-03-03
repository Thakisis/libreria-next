"use client"


import { createContext, useContext, useState, useTransition } from "react"
import { save } from '@/Actions'
const BooksContext = createContext()




export const BookProvider = ({ children }) => {
    const [Books, setBook] = useState({})
    const addDirtyBook = ({ id, field, newValue }) => {
        setBook((prevbooks) => ({ ...prevbooks, [id]: Object.assign({}, { ...prevbooks[id] }, { [field]: newValue }) }))
    }
    const [isPending, startTransition] = useTransition()

    console.log(Books)
    const someDirty = Object.keys(Books).length > 0
    const onSave = () => {
        setBook({})
        startTransition(() => {
            save(Books)
        })
    }
    return (
        <BooksContext.Provider value={{ someDirty, saveChanges: onSave, Books, addDirtyBook }} >

            {children}

        </BooksContext.Provider>
    )
}

export function useBooks() {
    const context = useContext(BooksContext)
    if (!context)
        console.log('error ')
    return context
}
