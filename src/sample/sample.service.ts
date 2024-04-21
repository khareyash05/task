// src/app.service.ts

import { Injectable } from '@nestjs/common';
import * as ExcelJS from 'exceljs';

@Injectable()
export class AppService {
  async fetchData(): Promise<any[]> {
    // Your data fetching logic here...
    return [
      { id: 1, name: 'John Doe', email: 'john@example.com' },
      // Additional data rows...
    ];
  }

  async convertCsvToExcel(data: any[]): Promise<ExcelJS.Buffer> {
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet('Data');

    // Define columns
    worksheet.columns = [
      { header: 'Id', key: 'id', width: 10 },
      { header: 'Name', key: 'name', width: 30 },
      { header: 'Email', key: 'email', width: 30 },
    ];

    // Add rows
    worksheet.addRows(data);

    // Write to buffer
    const buffer = await workbook.xlsx.writeBuffer();
    return buffer;
  }
}
