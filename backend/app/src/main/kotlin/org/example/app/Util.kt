package org.example.app

import java.sql.DriverManager
import java.sql.Connection
import java.sql.Statement

class Util{
    companion object{
        val url = "jdbc:postgresql://localhost:5432/TCCDB"
        val user = "postgres"
        val password = ""
        val connection: Connection? = DriverManager.getConnection(url, user, password)
        fun databaseConnection(){
            try{
                connection
                println("Conectado!")
            }catch(e: Exception){
                e.printStackTrace()
                println("Conexão recusada!")
            }
        }

        fun execQuery(sql: String){
            val query = connection?.prepareStatement(sql)
            query?.execute()
        }

        fun insereUsuario(){
            val sql = "INSERT INTO usuarios (nome, senha, email, user_git) VALUES ('Nome', 123, 'emailteste@gmail.com', 'testegit')"
            
            val query = connection?.prepareStatement(sql)
            query?.execute()
        }
    }
}