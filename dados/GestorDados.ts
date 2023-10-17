
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
  }catch(e) {}
}
  
const obterAtividadesJSON = async () => {
	try{
		let keys: Array<string> = []
        keys = [...await AsyncStorage.getAllKeys()];
		return await AsyncStorage.multiGet(keys);
	}catch(e){return [];}
}
const obterAtividades = async (dia) => {
    try {
      let objetos: Atividade[] = [];
      let objJSON = await obterAtividadesJSON();
      if (objJSON != null && objJSON.length > 0) {
        objJSON.forEach(element => {
          if (element[1] !== null) {
            let Atividade: Atividade = JSON.parse(element[1]);
            if(Atividade.dia === dia){
              objetos.push(Atividade);
            }
          }
        });
      }
      return objetos;
    } catch (e) {
      console.error(e)
      return [];
    }
}

class GestorDados{
	public async remover(chave: number){
		await removerAtividade(chave.toString());
  }      
	public async adicionar(Atividade: Atividade){
    try{
      await salvarAtividade(Atividade.codigo.toString(), Atividade);
    }catch(error){
      console.error(error);
    }
	}
	public async obterTodos(dia: string): Promise<Array<Atividade>>{
		let lista: Array<Atividade> = await obterAtividades(dia);
		return lista;
	}
}

export default GestorDados;