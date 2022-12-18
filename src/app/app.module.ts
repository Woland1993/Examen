import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BanerComponent } from './gestion-empresas-table/baner/baner.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ToolbarModule} from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { TabViewModule } from 'primeng/tabview';
import { SplitButtonModule } from 'primeng/splitbutton';
import { CommonModule } from '@angular/common';
import { GestionEmpresasTableComponent } from './gestion-empresas-table/gestion-empresas-table.component';
import {CardModule} from 'primeng/card';
import { TableComponent } from './gestion-empresas-table/table/table.component';
import {TableModule} from 'primeng/table';
import { HttpClientModule } from '@angular/common/http';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ConfirmationService, MessageService} from 'primeng/api';
import { FormularioEditarComponent } from './formulario-editar/formulario-editar.component';
import {AutoCompleteModule} from 'primeng/autocomplete';
import {InputNumberModule} from 'primeng/inputnumber';
import {InputTextModule} from 'primeng/inputtext';
import { ReactiveFormsModule } from '@angular/forms';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import { FormularioCrearComponent } from './formulario-crear/formulario-crear.component';







@NgModule({
  declarations: [
    AppComponent,
    BanerComponent,
    GestionEmpresasTableComponent,
    TableComponent,
    FormularioEditarComponent,
    FormularioCrearComponent,
      ],
  imports: [
    ReactiveFormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToolbarModule,
    CommonModule,  ToolbarModule, ButtonModule, SplitButtonModule,
     TabViewModule,CardModule,TableModule,
     ConfirmDialogModule,AutoCompleteModule,
     InputNumberModule,InputTextModule,
     MessagesModule,MessageModule
  ],
  providers: [ConfirmationService,MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
