import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Empresa } from '../domain/empresa';
import { EmpresaService } from '../service/empresa.service';

@Component({
  selector: 'app-formulario-editar',
  templateUrl: './formulario-editar.component.html',
  styleUrls: ['./formulario-editar.component.css']
})
export class FormularioEditarComponent  implements OnInit {

  disabled: boolean = false;
  empresa!: Empresa;
  /*createAt:string="";
  updateAt:string="";
  id:number=0;
  nombreComercial:string="";
  razonSocial:string="";
  telefono:string="";
  corre:string="";
  nit:string="";
  estado:string="";
  direccion:string="";
  */
  EmpresaForm: FormGroup = this.fb.group({
    createAt: [''],
    updateAt: [''],
    id: [],
    nombreComercial: ['', Validators.required],
    razonSocial: ['', Validators.required],
    telefono: ['', [
      Validators.required,
      Validators.pattern("^[0-9]*$"),
      Validators.minLength(8),
      Validators.maxLength(8),
    ]],
    correo: [{ value: '', disabled: "disabled" }, [
      Validators.required,
      Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"),
    ]],
    nit: ['',[Validators.required,Validators.pattern("^[0-9]{5}[\-][0-9]$")]],
    estado: ['',[Validators.required,Validators.pattern("^activo|inactivo$")]],
    direccion: ['', Validators.required]

  });
  constructor(private fb: FormBuilder,
    private empresaService: EmpresaService, private messageService: MessageService,
    private confirmationService: ConfirmationService, private router: Router,private route:ActivatedRoute) {
    this.empresa = new Empresa(0);
  }

  ngOnInit() {
    this.EmpresaForm=this.fb.group({
      createAt: [''],
      updateAt: [''],
      id: [this.route.snapshot.paramMap.get("id")],
      nombreComercial: [this.route.snapshot.paramMap.get("nombreComercial"), Validators.required],
      razonSocial: [this.route.snapshot.paramMap.get("razonSocial"), Validators.required],
      telefono: [this.route.snapshot.paramMap.get("telefono"), [
        Validators.required,
        Validators.pattern("^[0-9]*$"),
        Validators.minLength(8),
        Validators.maxLength(8),
      ]],
      correo: [{ value: this.route.snapshot.paramMap.get("correo"), disabled: "disabled" }, [
        Validators.required,
        Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"),
      ]],
      nit: [this.route.snapshot.paramMap.get("nit"), [Validators.required,Validators.pattern("^[0-9]{5}[\-][0-9]$")]],
      estado: [this.route.snapshot.paramMap.get("estado"), [Validators.required,Validators.pattern("^activo|inactivo$")]],
      direccion: [this.route.snapshot.paramMap.get("direccion"), Validators.required]
  
    });
  }

  editEmpresa() {
    console.log();
    this.empresa=new Empresa(
      this.EmpresaForm.value.id,
      this.EmpresaForm.value.nombreComercial,
      this.EmpresaForm.value.razonSocial,
      this.EmpresaForm.value.telefono,
      this.EmpresaForm.get("correo")?.value,
      this.EmpresaForm.value.nit,
      this.EmpresaForm.value.direccion,
      this.EmpresaForm.value.estado,
      
);
    this.confirmationService.confirm({
      message: '¿Está seguro de que desea Modificar ' + this.empresa.correo + '?',
      header: 'Confirmar',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.empresaService.put(this.empresa).subscribe(
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
