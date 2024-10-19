import { Component, OnInit } from '@angular/core';
import { ColDef } from 'ag-grid-community';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit {

 
  imageUrl1 = 'assets/Events/Event_1.png';
  imageUrl2 = 'assets/Events/Event_2.png';
  imageUrl3 = 'assets/Events/Event_3.png';
  imageUrl4 = 'assets/Events/Event_4.png';
  imageUrl5 = 'assets/Events/Event_5.png';
  imageUrl6 = 'assets/Events/Event_6.png';
  imageUrl7 = 'assets/Events/Event_7.png';
  imageUrl8 = 'assets/Events/Event_8.png';
  imageUrl9 = 'assets/Events/Event_9.png';
  imageUrl10 = 'assets/Events/Event_10.png';
  imageUrl11 = 'assets/Events/Event_11.png';
  imageUrl12 = 'assets/Events/Event_12.png';
  imageUrl13 = 'assets/Events/Event_13.png';
  imageUrl14 = 'assets/Events/Event_14.png';

  products = [
    {
      alt: 'Event image of doctors at a press conference',
     
      src: this.imageUrl1,
      height: 200,
      width: 300
    },
    {
      alt: 'Event image of doctors at a press conference',
      src: this.imageUrl2,
      height: 200,
      width: 300
    },
    {
      alt: 'Event image of doctors at a press conference',
      src: this.imageUrl3,
      height: 200,
      width: 300
    },
    {
      alt: 'Event image of doctors at a press conference',
      src: this.imageUrl4,
      height: 200,
      width: 300
    },
    {
      alt: 'Event image of doctors at a press conference',
      src: this.imageUrl5,
      height: 200,
      width: 300
    },
    {
      alt: 'Event image of doctors at a press conference',
      src: this.imageUrl6,
      height: 200,
      width: 300
    },
    {
      alt: 'Event image of doctors at a press conference',
      src: this.imageUrl7,
      height: 200,
      width: 300
    },
    {
      alt: 'Event image of doctors at a press conference',
      src: this.imageUrl8,
      height: 200,
      width: 300
    },
    {
      alt: 'Event image of doctors at a press conference',
      src: this.imageUrl9,
      height: 200,
      width: 300
    },
    {
      alt: 'Event image of doctors at a press conference',
      src: this.imageUrl10,
      height: 200,
      width: 300
    },
    {
      alt: 'Event image of doctors at a press conference',
      src: this.imageUrl11,
      height: 200,
      width: 300
    },
    {
      alt: 'Event image of doctors at a press conference',
      src: this.imageUrl12,
      height: 200,
      width: 300
    },
    {
      alt: 'Event image of doctors at a press conference',
      src: this.imageUrl13,
      height: 200,
      width: 300
    },
    {
      alt: 'Event image of doctors at a press conference',
      src: this.imageUrl14,
      height: 200,
      width: 300
    },
  ];


  ngOnInit(): void {

  }


}
