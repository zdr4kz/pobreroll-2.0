import { createPool } from "mysql2"
import mysql from "mysql2/promise"
import env from "dotenv/config"

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_NAME,
    connectionLimit: 10,
    waitForConnections: true,
    queueLimit: 0
})

async function getConnection() {
  return pool.getConnection()
}    

async function read(table, where = null){
    const connection = await getConnection()
    try{
        let sql = `SELECT * FROM ${table}`
        if(where){
            sql += ` WHERE ${where}`
        }
        const [rows] = await connection.execute(sql)
        return rows 

    } finally{
        connection.release()
    }
}

async function create(table, data) {
    const connection = await getConnection()

    try{
        const columns = Object.keys(data).join(', ')
        const placeholders = Array(Object.keys(data).length).fill('?').join(', ')
        const sql = `INSERT INTO ${table} (${columns}) VALUES (${placeholders})`
        const values = Object.values(data)
        const [result] = await connection.execute(sql, values)
        return result.insertId
    } finally {
        connection.release()
    }
}

async function update(table, data, where){
    const connection = await getConnection()
    try{
        const set = Object.keys(data).map(column => `${column} = ?`).join(', ')
        const sql = `UPDATE ${table} SET ${set} WHERE ${where}`
        const values = Object.values(data)
        const [result] = await connection.execute(sql, values)
        return result.affectedRows
    } finally {
        connection.release()
    }
}

async function deleteRecord(table, where){
    const connection = await getConnection()
    try{
        let sql = `DELETE ${table} WHERE ${where} `
        const [rows] = connection.execute(sql)
        return rows.affectedRows
    } finally {
        connection.release()
    }
}

export {
    read,
    create,
    update,
    deleteRecord,
    getConnection
}