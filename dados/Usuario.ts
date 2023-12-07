export class Usuario{
    codigoUser: number
    email: string;
    senha: string;
    tipoUsuario: string;
    constructor(codigoUser: number, email: string, senha: string, tipoUsuario: string){
        this.codigoUser = codigoUser;
        this.email = email;
        this.senha = senha;
        this.tipoUsuario = tipoUsuario;
    }
}