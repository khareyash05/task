import { Module } from '@nestjs/common';
import { AppController } from './sample.controller';
import { AppService } from './sample.service';

@Module({
  controllers: [AppController],
  providers: [AppService],
})
export class CSVModule {}
