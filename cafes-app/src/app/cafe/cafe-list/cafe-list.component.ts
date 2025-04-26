import { Component, OnInit } from '@angular/core';
import { CafeService } from '../cafe.service';
import { Cafe } from '../cafe';

@Component({
  selector: 'app-cafe-list',
  templateUrl: './cafe-list.component.html',
  styleUrls: ['./cafe-list.component.css'],
  standalone: false
})
export class CafeListComponent implements OnInit {

  cafes: Array<Cafe> = [];
  cafeTypes: Map<string, number> = new Map();

  constructor(private cafeService: CafeService ) { }

  getCafes(): void {
    this.cafeService.getCafes().subscribe(
      (cafes) => {
        this.cafes = cafes;
        this.getCafeOrigen();
        this.getCafeBlend();
      },
      (error) => {
        console.error('Error fetching cafes:', error);
      }
    );
  }

  getCafeOrigen(): void {
    const count = this.cafes.filter(cafe => cafe.tipo === 'Café de Origen').length;
    this.cafeTypes.set('origen', count);
  }

  getCafeBlend(): void {
    const count = this.cafes.filter(cafe => cafe.tipo === 'Blend').length;
    this.cafeTypes.set('blend', count);
  }

  ngOnInit() {
    this.getCafes();
  }

}
