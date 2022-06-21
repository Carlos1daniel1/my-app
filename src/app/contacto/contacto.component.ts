import { Component, OnInit } from '@angular/core';

import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  constructor(private http:HttpClient) { }

  contactos:any=[];
  clientes:any=[];

  modalTitle ="";
  idContactos=0;
   Nombres="";
   Ap_mat="";
   Ap_pat="";
   email="";
   telefono="";
   Cliente="";


  ngOnInit(): void {
    this.refreshList();
  }

  refreshList(){
    this.http.get<any>(environment.API_URL+'contacto')
    .subscribe(data=>{
      this.contactos=data;
    });

    this.http.get<any>(environment.API_URL+'cliente')
    .subscribe(data=>{
      this.clientes=data;
    });
  }

  addClick(){
    this.modalTitle="Agregar contacto";
    this.idContactos= 0;
    this.Nombres= "";
    this.Ap_mat= "";
    this.Ap_pat= "";
    this.email= "";
    this.telefono= "";
    this.Cliente= "";

  }

  editClick(con:any){
    this.modalTitle="Editar contacto";
    this.idContactos= con.idContactos;
    this.Nombres= con.Nombres;
    this.Ap_mat= con.Ap_mat;
    this.Ap_pat= con.Ap_pat;
    this.email= con.email;
    this.telefono= con.telefono;
    this.Cliente= con.Cliente;
    
  }

 createClick(){
    var val={
      idContactos:this.idContactos,
      Nombres:this.Nombres,
      Ap_mat:this.Ap_mat,
      Ap_pat:this.Ap_pat,
      email:this.email,
      telefono:this.telefono,
      Cliente:this.Cliente

    };

    this.http.post(environment.API_URL+'contacto',val)
    .subscribe(res=>{
      alert(res.toString());
      this.refreshList();
    });
  }

  updateClick(){
    var val={
      idContactos:this.idContactos,
      Nombres:this.Nombres,
      Ap_mat:this.Ap_mat,
      Ap_pat:this.Ap_pat,
      email:this.email,
      telefono:this.telefono,
      Cliente:this.Cliente

    };

    this.http.put(environment.API_URL+'contacto',val)
    .subscribe(res=>{
      alert(res.toString());
      this.refreshList();
    });
  }

  deleteClick(id:any){
    if(confirm('Estas seguro?')){
    this.http.delete(environment.API_URL+'contacto/'+id)
    .subscribe(res=>{
      alert(res.toString());
      this.refreshList();
    });
  }
  }
}
