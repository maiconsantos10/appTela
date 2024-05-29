import { Component, OnInit } from '@angular/core';
import { ApiBrasilService } from 'src/app/services/api-brasil.service';

@Component({
  selector: 'app-teste1',
  templateUrl: './teste1.component.html',
  styleUrls: ['./teste1.component.scss'],
})
export class Teste1Component  implements OnInit {

  cep: string = ''
  dadosCep: any;

  constructor(private apiBrasilService: ApiBrasilService) { }

  ngOnInit() {
    this.carregarDadosCep(this.cep);
  }

  carregarDadosCep(cep: string) {
    this.apiBrasilService.getCepInfo(cep).subscribe(response => {
      this.dadosCep = response;
      console.log(this.dadosCep);
    }, error => {
      console.error(error);
    });
  }

}
