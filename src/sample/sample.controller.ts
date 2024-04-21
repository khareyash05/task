// src/app.controller.ts

import { Controller, Get, Res } from '@nestjs/common';
import { AppService } from './sample.service';
import { Response } from 'express';

@Controller('api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('download-excel')
  async downloadExcel(@Res() res: Response) {
    const data = await this.appService.fetchData();
    const buffer = await this.appService.convertCsvToExcel(data);

    res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
    res.setHeader('Content-Disposition', 'attachment; filename="data.xlsx"');

    res.end(buffer);
  }
}
