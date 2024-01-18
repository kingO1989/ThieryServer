import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { query } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getAllData(): Promise<any> {
    return await this.appService.getAllData();
  }

  @Get('filterbydate')
  async flterByDate(@Query() query: any): Promise<any> {
    console.log(query);
    return await this.appService.filterbyDateRange(query.selecteddate);
  }
}