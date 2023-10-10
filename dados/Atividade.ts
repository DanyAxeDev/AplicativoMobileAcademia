export class Atividade{
	codigo: number;
	horario: string;
	nome: string;
	duracao: string;
	constructor(codigo: number, horario: string, nome: string, duracao: string){
		this.codigo = codigo;
		this.horario = horario;
		this.nome = nome;
		this.duracao = duracao;
	}
}