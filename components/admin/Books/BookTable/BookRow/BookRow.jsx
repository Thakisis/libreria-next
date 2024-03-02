import BCell from '../BookCells'

function BookRow({ row }) {


    const rowsBooks = Object.entries(row).map(([field, fieldValue]) => <BCell key={field} id={row.id} field={field} fieldValue={fieldValue} type={field === "id" && "r"} />)
    return (<tr
        className="relative bg-white border-b dark:bg-gray-800 dark:border-gray-700 rowbook"
    >{rowsBooks} </tr>)

}

export default BookRow