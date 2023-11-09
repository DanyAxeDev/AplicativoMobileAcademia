import { Atividade } from "./Atividade";
import { Usuario } from "./Usuario";
import api from "./ApiService";

class GestorDados{
    public async remover(codigo: string){
        await api.delete('/remove/' + codigo);
    }
    public async removerUsuario(codigoUser: number){
        await api.delete('users/remove/' + codigoUser);
    }
    public async adicionar(atividade: Atividade){
        await api.post('/new', atividade);
    }
    public async adicionarUsuario(usuario: Usuario){
        await api.post('/newuser', usuario);
    }
    public async obterTodos(): Promise<Array<Atividade>>{
        let resposta = await api.get('/');
        if(resposta.data === undefined){
            return [];
        }else{
            return resposta.data
        }
    }
    public async obterPorDiaSemana(diaSemana: string): Promise<Array<Atividade>> {
        try{
            // Obter todas as atividades do banco de dados
            const todasAtividades = await this.obterTodos();
    
            // Filtrar as atividades para o dia da semana especificado
            if(Array.isArray(todasAtividades)){
                const atividadesPorDiaSemana = todasAtividades.filter(atividade => atividade.dia === diaSemana);

                return atividadesPorDiaSemana;
            }else{
                console.error('A resposta não é um array:', todasAtividades);
            }
        }catch(error){
            console.error("erro ao obter atividades: ", error)
        }
    }
    public async obterUsuarios(): Promise<Array<Usuario>>{
        let resposta = await api.get('/users');
        if(resposta.data === undefined){
            return [];
        }else{
            return resposta.data
        }
    }
}

export default GestorDados;