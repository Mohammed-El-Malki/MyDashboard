import { Component } from '@angular/core';
import { HistoryService } from './history.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'MyDashboard';

  constructor() {}

  ngOnInit() {}

  // Example method to toggle warnRefreshCache
  toggleWarnRefreshCache() {
    HistoryService.warnRefreshCache = !HistoryService.warnRefreshCache;
  }

  get warnRefreshCache() {
    return HistoryService.warnRefreshCache;
  }
}
