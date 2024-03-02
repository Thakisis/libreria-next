"use client"

import React, { useEffect } from 'react'
import { useBooks } from "@/Hooks/BookProvider"



function ResetDirty(data) {
    const { addDirtyBook } = useBooks()
    useEffect(() => {
        console.log(data[1])
    }, [data])
    return (
        <div>

        </div>
    )
}

export default ResetDirty