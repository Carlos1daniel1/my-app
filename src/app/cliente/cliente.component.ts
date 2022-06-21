import { Component, OnInit } from '@angular/core';

import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  constructor(private http:HttpClient) { }

  clientes:any=[];

  modalTitle ="";
  idClientes= 0;
  Nombre= "";
  RFC= "";
  Calle="";
  CP= 0;
  Ciudad= "";
  Estado= "";
  Pais= "";
  
  ngOnInit(): void {
    this.refreshList()
  }

  refreshList(){
    this.http.get<any>(environment.API_URL+'cliente')
    .subscribe(data=>{
      this.clientes=data;
    });
  }

  addClick(){
    this.modalTitle="Agregar cliente";
    this.idClientes= 0;
    this.Nombre= "";
    this.RFC= "";
    this.Calle="";
    this.CP= 0;
    this.Ciudad= "";
    this.Estado= "";
    this.Pais= "";
  }

  editClick(cli:any){
    this.modalTitle="Editar cliente";
    this.idClientes= cli.idClientes;
    this.Nombre= cli.Nombre;
    this.RFC= cli.RFC;
    this.Calle= cli.Calle;
    this.CP= cli.CP;
    this.Ciudad= cli.Ciudad;
    this.Estado= cli.Estado;
    this.Pais= cli.Pais;
  }

 createClick(){
    var val={
      idClientes:this.idClientes,
      Nombre:this.Nombre,
      RFC:this.RFC,
      Calle:this.Calle,
      CP:this.CP,
      Ciudad:this.Ciudad,
      Estado:this.Estado,
      Pais:this.Pais
    };

    this.http.post(environment.API_URL+'cliente',val)
    .subscribe(res=>{
      alert(res.toString());
      this.refreshList();
    });
  }

  updateClick(){
    var val={
      idClientes:this.idClientes,
      Nombre:this.Nombre,
      RFC:this.RFC,
      Calle:this.Calle,
      CP:this.CP,
      Ciudad:this.Ciudad,
      Estado:this.Estado,
      Pais:this.Pais
    };

    this.http.put(environment.API_URL+'cliente',val)
    .subscribe(res=>{
      alert(res.toString());
      this.refreshList();
    });
  }

  deleteClick(id:any){
    if(confirm('Estas seguro?')){
    this.http.delete(environment.API_URL+'cliente/'+id)
    .subscribe(res=>{
      alert(res.toString());
      this.refreshList();
    });
  }
  }
}
