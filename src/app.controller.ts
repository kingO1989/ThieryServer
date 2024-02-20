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
  @Get('mod')
  async getAllDatamod(): Promise<any> {
    return await this.appService.getAllDataMod();
  }

  @Get('filterbydate')
  async flterByDate(@Query() query: any): Promise<any> {
    console.log(query);
    return await this.appService.filterbyDateRange(query.selecteddate);
  }

  @Get('filterbyCar')
  async filterbyCar(@Query() query: any): Promise<any> {
    // console.log(query);
    if (query.car === 'all') return await this.appService.getAllData();
    else return await this.appService.filterByCarType(query.car);
  }
}
