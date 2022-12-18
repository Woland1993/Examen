import { Component, OnInit } from '@angular/core';
import { Empresa } from 'src/app/domain/empresa';
import { EmpresaService } from 'src/app/service/empresa.service';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  providers: [MessageService,ConfirmationService]
})
export class TableComponent implements OnInit {

  empresas!: Empresa[];
  empresa!: Empresa;
  cols!: any[];
  constructor(private empresaService: EmpresaService, private messageService: MessageService, private confirmationService: ConfirmationService,private router: Router) {
    this.empresas = [];
    this.empresa=new Empresa(0);
    
  }

  ngOnInit() {
    this.empresaService.getAll().subscribe(
      (result: any) => {
        for (let i = 0; i < result.length; i++) {
          let empresa = result[i] as Empresa;
          this.empresas.push(empresa);
        }
        console.log(this.empresas);
      },
      error => {
        console.log(error);
      }
    );
    this.cols = [
      { field: 'id', header: 'No.' },
      { field: 'nombre_comercial', header: 'Nombre' },
      { field: 'correo', header: 'E-mail' },
      { field: 'nit', header: 'NIT' },
  ];
  }

  eliminarEmpresa(e:Empresa){
    console.log(e);
  
    this.confirmationService.confirm({
      
      message: '¿Está seguro de que desea eliminar ' + e.nombre_comercial + '?',
      header: 'Confirmar',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
          this.empresas = this.empresas.filter(val => val.id !== e.id);
          this.empresaService.delete(e.id).subscribe(
            (result: any) => {
             console.log(result);
            },
            error => {
              console.log(error);
            }
          );
          this.empresa = new Empresa(0);
          this.messageService.add({severity:'success', summary: 'Successful', detail: 'Empresa Deleted', life: 3000});
      }
  });
  }

  editarEmpresa(e:Empresa){
    this.router.navigateByUrl('editar/'+e.id+'/'+e.nombre_comercial+"/"+e.razon_social+"/"+e.telefono+"/"+e.correo+"/"+e.nit+"/"+e.estado+"/"+e.direccion);
  }
}
