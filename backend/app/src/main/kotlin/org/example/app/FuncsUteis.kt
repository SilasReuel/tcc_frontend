package org.example.app

import java.sql.DriverManager
import java.sql.Connection
import java.sql.Statement

class FuncsUteis{
    companion object{
        val url = "jdbc:postgresql://localhost:5432/TCCDB"
        val user = "postgres"
        val password = ""
        val connection: Connection? = DriverManager.getConnection(url, user, password)
        // As constantes acima devem ser globais na classe pois serão usadas em várias outras funções

        // Função de connexão com o banco de dados
        fun databaseConnection(){
            try{
                connection
                println("Conectado!")
            }catch(e: Exception){
                e.printStackTrace()
                println("Conexão recusada!")
            }
        }

        // Função de inserção de usuário, o SQL é montado com base em variáveis
        fun insereUsuario(nome: String, senha: String, email: String, user_git: String){//Função recebe valores a partir do forms de registro

            var sql = "INSERT INTO usuarios (nome, senha, email, user_git) VALUES ('"+nome+"', '"+senha+"' , '"+email+"', '"+user_git+"');"
            
            val query = connection?.prepareStatement(sql)
            query?.executeQuery()

            //Manter a ? pois isso permite que entre valores nulos, ou vai retornar um belo de um erro pois está usando variáveis nulas teoricamente
        }

        //Selecionar todos os usuários
        fun selectTodosOsUsuarios(){
            val sql = "SELECT * FROM usuarios;"
            val query = connection?.prepareStatement(sql)
            var resultado = query?.executeQuery()

            while(resultado!!.next()){
                val id = resultado.getInt(1)
                val nome = resultado.getString(2)
                val senha = resultado.getString(3)
                val email = resultado.getString(4)
                val user_git = resultado.getString(5)

                println("ID: "+id+"\tNOME: "+nome+"\tSENHA: "+senha+"\tEMAIL: "+email+"\tUSUARIO GIT: "+user_git)
            }

        }

        // Selecionar um usuário específico
        fun selectUsuarioEspecifico(nome_input: String){ //O nome vem do form
            val sql = "SELECT * FROM usuarios WHERE nome = '"+nome_input+"';"
            val query = connection?.prepareStatement(sql)
            val resultado = query?.executeQuery()

            if(resultado!!.next()){
                val id = resultado.getInt(1)
                val nome = resultado.getString(2)
                val senha = resultado.getString(3)
                val email = resultado.getString(4)
                val user_git = resultado.getString(5)

                println("ID: "+id+"\tNOME: "+nome+"\tSENHA: "+senha+"\tEMAIL: "+email+"\tUSUARIO GIT: "+user_git)
            }else{
                println("Nenhum usuário encontrado")
            }
        }
    }
}