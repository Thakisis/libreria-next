import BookCellClient from "./BookCellClient"
function BCell({ fieldValue, field, id, type = "r", setter }) {
    const Cell = type === "r" ? Br : Bh
    if (field !== "sinopsis")
        return (

            <Cell><BookCellClient id={id} fieldValue={fieldValue} field={field} /></Cell>
        )
    return <Sinopsis></Sinopsis>
}

export default BCell

function Br({ children, props }) {
    return (<th scope="row" className="font-medium text-gray-900 whitespace-nowrap dark:text-white">
        {children}
    </th>)

}
function Bh({ children, props }) {

    return (<td className="px-6 py-4">
        {children}
    </td>)
}

function Sinopsis() {

    return (<td className="px-6 py-4">

        <button type="button" className="px-3 py-2 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">view/edit</button>
    </td>)
}