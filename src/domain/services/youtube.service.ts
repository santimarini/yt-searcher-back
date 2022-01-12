import { YOUTUBE_API_KEY, YOUTUBE_BASE_URL } from '@constants';
import { HttpService, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

import { map } from 'rxjs/operators';

@Injectable()
export class YoutubeService {
  constructor(private readonly httpService: HttpService) { }
  search(q: string = '', nextPageToken: string = '', limit: number = 10): Observable<any> {
    return this.httpService
      .get(
        `${YOUTUBE_BASE_URL}/search?key=${YOUTUBE_API_KEY}&q=${q}&part=snippet&pageToken=${nextPageToken}&maxResults=${limit}&type=video`,
      )
      .pipe(map(res => res.data));
  }
}
