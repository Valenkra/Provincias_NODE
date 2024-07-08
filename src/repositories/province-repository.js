import DBConfig from "../configs/db-config.js"
import pkg from 'pg';

const { Client, Pool } = pkg;
export default class ProvinceRepository {
    getAllAsync = async () => {
        let returnArray = null;
        const client = new Client(DBConfig);
        try {
            await client.connect();
            let sql = `SELECT * FROM Provinces PP`;
            const result = await client.query(sql);
            await client.end();
            returnArray = result.rows;
        } catch (error) {
            console.log(error);
        }
        return returnArray;
    }

    getById = async (id) => {
        let returnArray = null;
        const client = new Client(DBConfig);
        try {
            await client.connect();
            let sql = `SELECT * FROM Provinces PP
                        WHERE PP.id = ${id}`;
            const result = await client.query(sql);
            await client.end();
            returnArray = result.rows;
        } catch (error) {
            console.log(error);
        }
        return returnArray;
    }

    insertAsync = async (name, fName, latitude, longitude, dOrder) => {
        let returnArray = null;
        const client = new Client(DBConfig);
        try {
            await client.connect();
            let sql = `INSERT INTO public.provinces(
                name, full_name, latitude, longitude, display_order)
                VALUES (${name}, ${fName}, ${latitude}, ${longitude}, ${dOrder});
                `;
            const result = await client.query(sql);
            await client.end();
            returnArray = result.rows;
        } catch (error) {
            console.log(error);
        }
        return returnArray;
    }

    
    updateByIdAsync = async (data) => {
        let returnArray = null;
        const client = new Client(DBConfig);
        try {
            await client.connect();
            let querys = "";
            for (let i = 0; i < data.length - 1; i++) {
                querys += (i != data.length - 1) ? data[i] + ", " : data[i];
            }
            let sql = `UPDATE public.provinces
                SET ${querys}
                WHERE ${data[data.length - 1]}`;
            const result = await client.query(sql);
            await client.end();
            returnArray = result.rows;
        } catch (error) {
            console.log(error);
        }
        return returnArray;
    }

    deleteByIdAsync = async (id) => {
        let returnArray = null;
        const client = new Client(DBConfig);
        try {
            await client.connect();
            let sql = `DELETE FROM Provinces
            WHERE id = ${id}`;
            const result = await client.query(sql);
            await client.end();
            returnArray = result.rows;
        } catch (error) {
            console.log(error);
        }
        return returnArray;
    }

}