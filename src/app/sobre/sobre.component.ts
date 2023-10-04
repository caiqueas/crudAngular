import { Component, OnInit } from '@angular/core';
import { Sobre } from 'src/app/model/sobre';
import { SobreService } from 'src/app/service/sobre.service';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.css']
})
export class SobreComponent implements OnInit {

  listaSobre: Sobre[] = [];
  sobre = new Sobre();
  estaEditando = false;

  constructor(private sobreService: SobreService) { }

  ngOnInit(): void {
    this.carregarDados();
  }

  carregarDados(): void {
    this.sobreService.listar().subscribe(sobre => {
      this.listaSobre = sobre;
    });
  }

  inserir() {
    this.sobreService.inserir(this.sobre).subscribe(() => {
      this.listar();
    });
  }

  remover(id: number) {
    this.sobreService.excluir(id).subscribe(() => {
      this.listar();
    });
  }

  atualizar() {
    this.sobreService.atualizar(this.sobre).subscribe(() => {
      this.listar();
    });
  }

  salvar() {
    if (this.estaEditando) {
      this.atualizar();
    } else {
      this.inserir();
    }
  }

  listar() {
    this.sobreService.listar().subscribe(sobre => {
      this.listaSobre = sobre;
    });
  }

  selecionar(sobre: Sobre) {
    this.sobre = sobre;
    this.estaEditando = true;
  }

  cancelar() {
    this.estaEditando = false;
    this.sobre = new Sobre();
  }
}
