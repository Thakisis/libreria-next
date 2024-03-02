import BRow from './BookRow'
import { getBooks } from "@/lib/Queries"
import ResetDirty from './ResetDirty'



async function BookTable() {
    const { data, fields } = await getBooks()

    const headers = fields.map(field => <th scope="col" className="px-6 py-3" key={field}>{field}</th>)
    const body = data.map(row => <BRow row={row} key={row.id} />)
    return (
        <>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            {headers}
                        </tr>
                    </thead>
                    <tbody>
                        {body}
                    </tbody>
                </table>
            </div>
            <ResetDirty data={data}></ResetDirty>
        </>
    )
}

export default BookTable