import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/model/cliente';
import { ClienteService } from 'src/app/service/cliente.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {
  listaClientes: Cliente[] = [];
  sobre: any[] = [];
  cliente: Cliente = new Cliente(0,'', 0, ''); // Modifique de acordo com a estrutura do objeto Cliente
  selectedSobreId: number | null = null;
  selectedStatus: string | null = null;
  clienteSelecionado: Cliente | null = null;
  clienteEmEdicao: Cliente | null = null;
  modoEdicao: boolean = false;



  constructor(private clienteService: ClienteService, private http: HttpClient) { }

  ngOnInit(): void {
    this.listar();
    this.carregarSobre();
  }

  listar() {
    this.clienteService.listar().subscribe(clientes => {
      this.listaClientes = clientes;
    });
  }

  inserir() {
    const novoCliente = {
      nome: this.cliente.nome,
      sobreId: this.selectedSobreId,
      status: this.selectedStatus
    };

    this.http.post('http://localhost:3000/cliente', novoCliente)
      .subscribe((response: any) => {
        this.listar(); // Atualize a lista de clientes após cadastrar um novo cliente
        this.cliente = new Cliente(0, '', 0, ''); // Limpa os campos do formulário
        this.selectedSobreId = null;
        this.selectedStatus = null;

      });
  }

  remover(id: number) {
    this.clienteService.excluir(id).subscribe(() => {
      this.listar();
    });
  }

  editarCliente(cliente: Cliente) {
    this.clienteEmEdicao = { ...cliente };
    this.modoEdicao = true;
  }




  salvarEdicao() {
    if (this.clienteEmEdicao) {
      this.clienteService.atualizar(this.clienteEmEdicao).subscribe(() => {
        this.clienteEmEdicao = null;
        this.listar();
      });
    }
  }

  cancelarEdicao() {
    this.clienteEmEdicao = null;
    this.modoEdicao = false;
  }

  carregarSobre() {
    this.http.get<any>('http://localhost:3000/sobre').subscribe(data => {
      this.sobre = data;
    });
  }

  getNomeSobre(sobreId: number): string {
    const genero = this.sobre.find(item => item.id === sobreId);
    return genero ? genero.nome : '';
  }

  cancelar() {
    this.cliente = new Cliente(0, '', 0, ''); // Modifique de acordo com a estrutura do objeto Cliente
    this.selectedSobreId = null;
    this.selectedStatus = null;


  }


}
