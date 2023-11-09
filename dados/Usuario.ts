export class Usuario{
    codigoUser: number
    email: string;
    senha: string;
    constructor(codigoUser: number, email: string, senha: string){
        this.codigoUser = codigoUser;
        this.email = email;
        this.senha = senha;
    }
}