import { Component } from '@angular/core';
import { HistoryService } from './history.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'MyDashboard';

  constructor(public historyService: HistoryService) {}

  ngOnInit() {}

  // Example method to toggle warnRefreshCache
  toggleWarnRefreshCache() {
    this.historyService.warnRefreshCache = !this.historyService.warnRefreshCache;
  }
}
