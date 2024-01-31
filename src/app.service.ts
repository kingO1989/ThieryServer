import { Injectable } from '@nestjs/common';
import { AnyFilesInterceptor } from '@nestjs/platform-express';
import { open } from 'node:fs/promises';
import { max } from 'rxjs';
import supabase from './SBClient.js';

type TransitNoiseData = {
  date: Date;
  hour: number;
  db: number;
  label: string;
  score: number;
  carNumber: number;
  mark: number;
  file: string;
  surveyId: string;
  timeStamp: Date;
};

class Decibel {
  constructor(sample: TransitNoiseData) {}
}

@Injectable()
export class AppService {
  async getAllData(): Promise<any> {
    let file;
    let csv: Array<TransitNoiseData> = new Array<TransitNoiseData>();

    let allDecibels = [];
    let allHours = [];
    let allDates = [];
    let csvColumns = {};

    try {
      const { data, error }: any = await supabase.from('all_decibel').select();
      if (error) console.log(error);
      if (data) console.log(data);

      for (const item of data) {
        allDecibels.push(item.db);
        allDates.push(item.timestamp);
        allHours.push(item.hour);
      }
    } catch (e) {}

    //console.log(csvColumns);

    // return csv;

    return {
      dbs: allDecibels,
      dates: allDates,
      hours: allHours,
    };
    //return csvColumns;
  }

  async filterByCarType(car: number): Promise<any> {
    let file;
    let csv: Array<TransitNoiseData> = new Array<TransitNoiseData>();

    let allDecibels = [];
    let allHours = [];
    let allDates = [];
    let csvColumns = {};

    try {
      const { data, error }: any = await supabase
        .from('all_decibel')
        .select()
        .eq('car_number', car);
      if (error) console.log(error);
      if (data) console.log(data);

      for (const item of data) {
        allDecibels.push(item.db);
        allDates.push(item.timestamp);
        allHours.push(item.hour);
      }
    } catch (e) {}

    //console.log(csvColumns);

    // return csv;

    return {
      dbs: allDecibels,
      dates: allDates,
      hours: allHours,
    };
    //return csvColumns;
  }

  async filterbyDateRange(datetofilter: string): Promise<any> {
    let file;

    let dateclicked = new Date(datetofilter);
    let dateclicked2 = new Date(datetofilter);
    //setDate(today.getDate() + 1);

    let tempstring = new Date(datetofilter).toLocaleString('en-Us', {
      timeZone: 'PST',
    });
    let tempDate = new Date(tempstring);
    console.log(tempDate);
    let maxdate: any = dateclicked.setHours(dateclicked.getHours() + 1);

    maxdate = new Date(maxdate);
    let mindate: any = dateclicked2.setHours(dateclicked2.getHours() - 6);
    mindate = new Date(mindate);
    console.log(dateclicked);
    console.log(dateclicked2);
    console.log(maxdate);
    console.log(mindate);

    let allDecibels = [];
    let allHours = [];
    let allDates = [];
    let dateRange = {};
    let csvColumns = {};

    try {
      const { data, error }: any = await supabase.from('all_decibel').select();
      if (error) console.log(error);
      if (data) console.log(data);

      for (const item of data) {
        let tempdate = new Date(item.timestamp);

        if (tempdate < maxdate && tempdate > mindate) {
          allDecibels.push(item.db);
          allDates.push(item.timestamp);
          allHours.push(item.hour);
        }
      }

      dateRange['max'] = maxdate;
      dateRange['min'] = mindate;
    } catch (e) {}

    return {
      dbs: allDecibels,
      dates: allDates,
      hours: allHours,
      dateRange,
    };
    //return csvColumns;
  }
}
