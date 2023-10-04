export class Cliente {
  id: number;
  nome: string;
  sobreId: number;
  status: string; // Adicione a propriedade 'status' à classe

  constructor(id: number, nome: string, sobreId: number, status: string) {
    this.id = id;
    this.nome = nome;
    this.sobreId = sobreId;
    this.status = status; // Inicialize a propriedade 'status'
  }
}
