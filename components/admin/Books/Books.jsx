import BookTable from "./BookTable"
import './utils.css'
import { BookProvider } from "@/Hooks/"
import SaveButton from "./SaveButton"
export function Books(props) {


    return (
        <BookProvider>

            <div className="flex flex-col py-10">
                <SaveButton></SaveButton>
                <BookTable ></BookTable>
            </div>

        </BookProvider>
    )
}

