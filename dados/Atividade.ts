export class Atividade{
	codigo: number;
	horario: string;
	nome: string;
	duracao: number;
	constructor(codigo: number, horario: string, nome: string, duracao: number){
		this.codigo = codigo;
		this.horario = horario;
		this.nome = nome;
		this.duracao = duracao;
	}
}