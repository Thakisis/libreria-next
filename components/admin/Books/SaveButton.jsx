"use client"

import { useBooks } from "@/Hooks/BookProvider"






function SaveButton(props) {
    const { someDirty, saveChanges } = useBooks()


    return (
        <button className="m-10" disabled={!someDirty} onClick={saveChanges}>
            {someDirty ? "Save" : "no changes made"}
        </button>
    )
}

export default SaveButton