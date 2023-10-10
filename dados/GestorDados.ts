import { Atividade } from "./Atividade";
import api from "./ApiService";

class GestorDados{
    public async remover(codigo: string){
        await api.delete('/remove/' + codigo);
    }
    public async adicionar(atividade: Atividade){
        await api.post('/new', atividade);
    }
    public async obterTodos(): Promise<Array<Atividade>>{
        let resposta = await api.get('/');
        return resposta.data;
    }
}

export default GestorDados;