import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-delete-book',
  templateUrl: './delete-book.component.html',
  styleUrls: ['./delete-book.component.css']
})
export class DeleteBookComponent implements OnInit {
  books : any ;
  constructor(private http:HttpClient , private route:ActivatedRoute ,private router:Router) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    console.log(id);
    let del = this.http.delete(`http://localhost:3000/api/${id}`).subscribe((data)=>{
      this.books=data
    })
    if(del){
      this.router.navigateByUrl('/home');
    }


  }

}
