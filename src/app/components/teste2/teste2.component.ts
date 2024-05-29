import { Component, OnInit } from '@angular/core';
import { ApiBrasilService } from 'src/app/services/api-brasil.service';

@Component({
  selector: 'app-teste2',
  templateUrl: './teste2.component.html',
  styleUrls: ['./teste2.component.scss'],
})
export class Teste2Component  implements OnInit {

  cnpj: string = '' // Digitar um CNPJ
  dadosCnpj: any;

  constructor(private apiBrasilService: ApiBrasilService) { }

  ngOnInit() {
    this.carregarDadosCnpj(this.cnpj);
  }

  carregarDadosCnpj(cnpj: string) {
    this.apiBrasilService.getCnpjInfo(cnpj).subscribe(response => {
      this.dadosCnpj = response;
      console.log(this.dadosCnpj);
    }, error => {
      console.error(error);
    });
  }

}
