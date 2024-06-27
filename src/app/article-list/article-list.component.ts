import { Component } from '@angular/core';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent {
  articles = [
    { id: 1, name: 'Crticle 1', price: 100 },
    { id: 2, name: 'Article 2', price: 200 },
    { id: 3, name: 'Brticle 3', price: 300 }
  ];

  sortColumn = 'id';
  sortDirection: 'asc' | 'desc' = 'asc';

  sort(column: string) {
    if (this.sortColumn === column) {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortColumn = column;
      this.sortDirection = 'asc';
    }
  }

  get sortedArticles() {
    return this.articles.slice().sort((a, b) => {
      const isAsc = this.sortDirection === 'asc';
      switch (this.sortColumn) {
        case 'id': return this.compare(a.id, b.id, isAsc);
        case 'name': return this.compare(a.name, b.name, isAsc);
        case 'price': return this.compare(a.price, b.price, isAsc);
        default: return 0;
      }
    });
  }

  compare(a: any, b: any, isAsc: boolean) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }
}
