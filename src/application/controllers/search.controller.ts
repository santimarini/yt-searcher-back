import {
  LoggerService,
  Context,
} from '@domain/services/logger.service';
import { Controller, Get, Query, UseInterceptors } from '@nestjs/common';
import { YoutubeService } from '@domain/services/youtube.service';
import { LoggingInterceptor } from '@application/interceptors/logging.interceptor';

// UserController
@Controller()
@UseInterceptors(LoggingInterceptor)
export class SearchController {
  private Log: LoggerService = new LoggerService('createOperation');
  constructor(private readonly youtubeService: YoutubeService) { }

  @Get('/search')
  getYoutubeSearch(@Query('q') q: string, @Query('nextPageToken') nextPageToken: string = '') {
    console.log('page ,', nextPageToken)
    const context: Context = { module: 'SearchController', method: 'search' };
    this.Log.logger('GET', context);

    return this.youtubeService.search(q, nextPageToken);
  }
}
