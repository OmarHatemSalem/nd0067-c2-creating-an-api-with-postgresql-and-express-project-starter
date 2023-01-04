import Client from "../database";
import bcrypt from 'bcrypt'

export type User = {
    id?: number;
    firstName: string;
    lastName: string;
    password: string;
}

export class UserStore {
  async index(): Promise<User[]> {
    try {
      // @ts-ignore
      const conn = await Client.connect()
      const sql = 'SELECT * FROM users'

      const result = await conn.query(sql)

      conn.release()

      return result.rows 
    } catch (err) {
      throw new Error(`Could not get Users. Error: ${err}`)
    }
  }

  async show(id: string): Promise<User> {
    try {
    const sql = 'SELECT * FROM users WHERE id=($1)'
    // @ts-ignore
    const conn = await Client.connect()

    const result = await conn.query(sql, [id])

    conn.release()

    return result.rows[0]
    } catch (err) {
        throw new Error(`Could not find User ${id}. Error: ${err}`)
    }
  }

  async create(b: User): Promise<User> {
      try {
    const sql = 'INSERT INTO users (firstName, lastName, password) VALUES($1, $2, $3) RETURNING *'
    // @ts-ignore
    const conn = await Client.connect()
    
    const hash = bcrypt.hashSync(
      b.password + process.env.pepper,
      Number(process.env.saltRounds)
    );

    const result = await conn
        .query(sql, [b.firstName, b.lastName, hash])

    const user = result.rows[0]

    conn.release()

    return user
      } catch (err) {
          throw new Error(`Could not add new User ${b.firstName}. Error: ${err}`)
      }
  }

  async delete(id: string): Promise<User> {
      try {
    const sql = 'DELETE FROM users WHERE id=($1)'
    // @ts-ignore
    const conn = await Client.connect()

    const result = await conn.query(sql, [id])

    const user = result.rows[0]

    conn.release()

    return user
      } catch (err) {
          throw new Error(`Could not delete User ${id}. Error: ${err}`)
      }
  }

  async authenticate(username: string, password: string): Promise<User | null> {
    // @ts-ignore
    const conn = await client.connect()
    const sql = 'SELECT password_digest FROM users WHERE username=($1)'

    const result = await conn.query(sql, [username])

    console.log(password+process.env.pepper)

    if(result.rows.length) {

      const user = result.rows[0]

      console.log(user)

      if (bcrypt.compareSync(password+process.env.pepper, user.password_digest)) {
        return user
      }
    }

    return null
  }
}

