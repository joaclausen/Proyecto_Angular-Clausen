import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Estudiante } from './clase_estudiantes.component';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-estudiantes',
  templateUrl: './estudiantes.component.html',
  styleUrls: ['./estudiantes.component.css']
})
export class EstudiantesComponent implements OnInit, AfterViewInit {

  estudiantes: Estudiante[] = [
    {
      nombre: 'Joaquin',
      correo: 'jlclausen99@gmail.com',
      comision: '3333',
      estado: true,
    },
    {
      nombre: 'Emanuel',
      correo: 'ema99@gmail.com',
      comision: '3444',
      estado: false,
    }
  ];

  columnas: string [] = ['nombre', 'correo', 'comision', 'estado', 'acciones'];

  dataSource: MatTableDataSource<Estudiante> = new MatTableDataSource<Estudiante>(this.estudiantes);

  constructor() { }

  ngOnInit(): void {
    console.log(this.dataSource);
  }

  ngAfterViewInit(): void {
    
  }

}
