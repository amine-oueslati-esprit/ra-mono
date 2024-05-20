import { Component } from '@angular/core';

@Component({
  selector: 'app-adminview-ressource-humaine',
  standalone: true,
  imports: [],
  templateUrl: './adminview-ressource-humaine.component.html',
  styleUrl: './adminview-ressource-humaine.component.css'
})
export class AdminviewRessourceHumaineComponent {

}
import { Component } from '@angular/core';
  
import { PostService } from '../post.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from '../post';
  
@Component({
  selector: 'app-view',
  standalone: true,
  imports: [],
  templateUrl: './view.component.html',
  styleUrl: './view.component.css'
})
export class ViewComponent {
  
  id!: number;
  post!: Post;
      
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(
    public postService: PostService,
    private route: ActivatedRoute,
    private router: Router
   ) { }
      
  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    this.id = this.route.snapshot.params['postId'];
          
    this.postService.find(this.id).subscribe((data: Post)=>{
      this.post = data;
    });
  }
  
}