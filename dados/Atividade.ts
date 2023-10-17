export class Atividade{
	codigo: number;
	horario: string;
	nome: string;
	duracao: string;
	dia: string
	constructor(codigo: number, horario: string, nome: string, duracao: string, dia: string){
		this.codigo = codigo;
		this.horario = horario;
		this.nome = nome;
		this.duracao = duracao;
		this.dia = dia;
	}
}