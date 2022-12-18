import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Empresa } from '../domain/empresa';
import { EmpresaService } from '../service/empresa.service';

@Component({
  selector: 'app-formulario-crear',
  templateUrl: './formulario-crear.component.html',
  styleUrls: ['./formulario-crear.component.css']
})
export class FormularioCrearComponent {
  disabled: boolean = false;
  empresa!: Empresa;
  
  EmpresaForm: FormGroup = this.fb.group({
    nombreComercial: ['', Validators.required],
    razonSocial: ['', Validators.required],
    telefono: ['', [
      Validators.required,
      Validators.pattern("^[0-9]*$"),
      Validators.minLength(8),
      Validators.maxLength(8),
    ]],
    correo: ['', [
      Validators.required,
      Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"),
    ]],
    nit: ['', [Validators.required,Validators.pattern("^[0-9]{5}[\-][0-9]$")]],
    estado: ['', [Validators.required,Validators.pattern("^activo|inactivo$")]],
    direccion: ['', Validators.required]

  });
  
  constructor(private fb: FormBuilder,
    private empresaService: EmpresaService, private messageService: MessageService,
    private confirmationService: ConfirmationService, private router: Router,private route:ActivatedRoute) {
    this.empresa = new Empresa(0);
  }

  editEmpresa() {
    console.log();
    this.empresa=new Empresa(
      this.EmpresaForm.value.id,
      this.EmpresaForm.value.nombreComercial,
      this.EmpresaForm.value.razonSocial,
      this.EmpresaForm.value.telefono,
      this.EmpresaForm.value.correo,
      this.EmpresaForm.value.nit,
      this.EmpresaForm.value.direccion,
      this.EmpresaForm.value.estado,
      
);
    this.confirmationService.confirm({
      message: '¿Está seguro de que desea Crear la nueva empresa con el correo electronico ' + this.empresa.correo + '?',
      header: 'Confirmar',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.empresaService.post(this.empresa).subscribe(
          (result: any) => {
            console.log(result);
            this.home();
          },
          error => {
            console.log(error);
          }
        );
        this.empresa = new Empresa(0);
        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Empresa modificada', life: 3000 });
      }
    });
  }
  home() {
    this.router.navigateByUrl('');
  }
}
