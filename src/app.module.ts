import {
  Module,
  NestModule,
  MiddlewareConsumer,
  HttpModule,
} from '@nestjs/common';
import { LoggerMiddleware } from '@application/middlewere/logger.middleware';
import { TerminusModule } from '@nestjs/terminus';
import { TerminusOptionsService } from '@infrastructure/health/terminus-options.check';
import { SearchController } from '@application/controllers/search.controller';
import { YoutubeService } from '@domain/services/youtube.service';

const HealthModule = TerminusModule.forRootAsync({
  useClass: TerminusOptionsService,
});

@Module({
  imports: [HealthModule, HttpModule],
  controllers: [SearchController],
  providers: [YoutubeService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes(SearchController);
  }
}
