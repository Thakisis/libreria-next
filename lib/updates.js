import { db } from "./db"

export async function BulkUpdate(data) {

    const updatePromises = data.map(({ id, newValues }) => {


        updateRecord("libros", id, newValues)
    }
    )

    const result = await Promise.all(updatePromises)
    console.log(result)
}

async function updateRecord(table, id, newValues) {


    return db.updateTable(table)
        .set(newValues)
        .where('id', '=', id)
        .execute()

}

