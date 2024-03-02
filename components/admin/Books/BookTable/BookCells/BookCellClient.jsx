"use client"
import { useState, useRef, useEffect } from 'react'

import { useBooks } from "@/Hooks/BookProvider"

function BookCellClient({ id, fieldValue: initialValue, field }) {

    const [valueField, setValuefield] = useState(initialValue)
    const [isEdit, setEdit] = useState(false)
    const [isDirty, setDirty] = useState(false)
    const inputRef = useRef()
    const { addDirtyBook } = useBooks()

    useEffect(() => {
        setDirty(false)
    }, [initialValue])
    const editHandler = () => {
        setEdit(true)



    }
    const changeHandler = (e) => {
        setValuefield(e.target.value)
    }
    const focusHandler = (e) => {
        setEdit(false)
        if (initialValue !== valueField) {
            setDirty(true)

            addDirtyBook({ id, field, newValue: valueField })
        }
        if (initialValue === valueField) {
            setDirty(false)
            addDirtyBook({ id, field, newValue: undefined })
        }

    }
    useEffect(() => {
        if (inputRef.current)
            inputRef.current.focus
    }, [inputRef])

    if (!isEdit)
        return (
            <div onClick={editHandler}
                className={`flex px-6 py-4  h-full w-full relative ${isDirty && " dirty"}`}
            >
                {valueField}
            </div>
        )
    return (<input
        type="text"
        autoFocus
        ref={inputRef}
        onChange={changeHandler}
        onBlur={focusHandler}
        value={valueField}
        className={`flex px-6 py-4  h-full w-full relative ${isDirty && " dirty"}  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white `} />)

}

export default BookCellClient