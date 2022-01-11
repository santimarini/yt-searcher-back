// Se inyecta el repo en el servicio
import { YOUTUBE_API_KEY, YOUTUBE_BASE_URL } from '@constants';
import { HttpService, Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class YoutubeService {
  constructor(private readonly httpService: HttpService) { }

  search(q: string, nextPageToken: string, limit: number = 20) {
    return this.httpService
      .get(
        `${YOUTUBE_BASE_URL}/search?key=${YOUTUBE_API_KEY}&q=${q}&part=snippet&nextPageToken=${nextPageToken}&maxResults=${limit}`,
      )
      .pipe(map(res => res.data));
  }
}
