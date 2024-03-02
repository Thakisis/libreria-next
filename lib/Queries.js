"use server"
import { db } from "./db"

export async function getBooks() {
    try {
        console.log("query")
        const data = await db.selectFrom("libros").selectAll().orderBy('id').execute()
        const fields = ['id', 'titulo', 'autor', 'isbn', 'id_editorial', ' edicion', 'formato', 'imagen', 'sinopsis', 'genero']
        return { data, fields }
    } catch (error) {
        return "Error getting Books"
    }
}