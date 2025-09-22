import { Component } from '@angular/core';
import {ArticleService} from '../../services/article.service';

@Component({
  selector: 'app-article-list',
  imports: [],
  templateUrl: './article-list.component.html',
  styleUrl: './article-list.component.scss'
})
export class ArticleListComponent {

  articles : any[] = []

  constructor(private articleService: ArticleService) {

  }

  callApi() {
    // Récupérer le JSON via l'api
    this.articleService.getArticles().subscribe({
      next: (json) => {
        console.log(json);
        //mettre l'atribut data de notre json dans la liste article angular
        this.articles = json.data;
      },
      error: (err) => {}
    })
    // Mapper/Hydrater/Convertir le json articles dans
    // la variable articles
  }


}
