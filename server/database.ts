import { connect } from 'mongoose'

export const startConnection = async () => {
    try {
        const db = await connect('mongodb://localhost:27018/mevn-database')
    console.log(db.connection.name)            
    } catch (error) {
        console.log(error)
    }
}