'use server'
import { BulkUpdate } from '@/lib/updates'
import { revalidatePath } from 'next/cache'

export async function save(newData) {


    const removeEmpty = Object.entries(newData).map(([key, newValues]) => ({ id: key, newValues }))
        .filter(({ newValues }) => Object.keys(newValues).length > 0)


    await BulkUpdate(removeEmpty)
    revalidatePath('/admin', 'page')
}
