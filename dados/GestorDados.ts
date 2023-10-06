import AsyncStorage from '@react-native-async-storage/async-storage';
import {Atividade} from './Atividade';

const salvarAtividade = async (key: string, value: any) => {
	try{
		const jsonValue = JSON.stringify(value);
		await AsyncStorage.setItem(key, jsonValue);
	}catch(e){}
}
const removerAtividade = async (key: string): Promise<void> => {
    try{
      await AsyncStorage.removeItem(key);
    } catch(e) {}
  }
  
const obterAtividadeJSON = async () => {
	try{
		let keys: Array<string> = []
        keys = [...await AsyncStorage.getAllKeys()];
		return await AsyncStorage.multiGet(keys);
	}catch(e){return [];}
}
const obterAtividades = async () => {
    try {
      let objetos: Atividade[] = []; // Anotação de tipo adicionada
      let objJSON = await obterAtividadeJSON();
      if (objJSON != null && objJSON.length > 0) {
        objJSON.forEach(element => {
          if (element[1] !== null) {
            let atividade: Atividade = JSON.parse(element[1]);
            objetos.push(atividade);
          }
        });
      }
      return objetos;
    } catch (e) {
      return [];
    }
}

class GestorDados{
    public async remover(chave: number){
        await removerAtividade(chave.toString());
    }      
	public async adicionar(atividade: Atividade){
		salvarAtividade(atividade.codigo.toString(), atividade);
	}
	public async obterTodos(): Promise<Array<Atividade>>{
		let lista: Array<Atividade> = await obterAtividades();
		return lista;
	}
}

export default GestorDados;