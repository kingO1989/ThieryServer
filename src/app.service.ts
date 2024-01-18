import { Injectable } from '@nestjs/common';
import { AnyFilesInterceptor } from '@nestjs/platform-express';
import { open } from 'node:fs/promises';
import { max } from 'rxjs';

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
      file = await open(__dirname + '\\..\\data\\noise_new.csv');

      let cntforheader = 0;

      for await (const line of file.readLines()) {
        if (cntforheader === 0) {
          let columns = line.split(',');
          let columnCounter = 0;
          for await (const column of columns) {
            csvColumns[column] = columnCounter;
            columnCounter++;
          }
          cntforheader++;

          continue;
        }

        let datecolumn = csvColumns['date'];

        let linesplit = line.split(',');

        let year = linesplit[datecolumn].substring(0, 4);
        let month = linesplit[datecolumn].substring(4, 6);
        let day = linesplit[datecolumn].substring(6, 8);
        let date = year + '-' + month + '-' + day;

        let temp: TransitNoiseData = {
          date: new Date(datecolumn), //new Date(date),
          hour: Number(linesplit[csvColumns['hour']]),
          db: Number(linesplit[csvColumns['db']]),
          label: linesplit[csvColumns['label']],
          score: Number(linesplit[csvColumns['score']]),
          carNumber: Number(linesplit[csvColumns['car_number']]),
          mark: Number(linesplit[csvColumns['mark']]),
          file: linesplit[csvColumns['file']],
          surveyId: linesplit[csvColumns['survey_id']],
          timeStamp: linesplit[csvColumns['timestamp']], //new Date(linesplit[csvColumns['timestamp']]),
        };
        allDecibels.push(Number(linesplit[csvColumns['db']]));
        allDates.push(linesplit[csvColumns['timestamp']]);
        allHours.push(Number(linesplit[csvColumns['hour']]));
        csv.push(temp);
      }
    } catch (e) {
      return 'error with file';
    }

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
      file = await open(__dirname + '\\..\\data\\noise_new.csv');

      let cntforheader = 0;

      for await (const line of file.readLines()) {
        if (cntforheader === 0) {
          let columns = line.split(',');
          let columnCounter = 0;
          for await (const column of columns) {
            csvColumns[column] = columnCounter;
            columnCounter++;
          }
          cntforheader++;

          continue;
        }

        let linesplit = line.split(',');

        /* 
        let temp: TransitNoiseData = {
          date: new Date(datecolumn), //new Date(date),
          hour: Number(linesplit[csvColumns['hour']]),
          db: Number(linesplit[csvColumns['db']]),
          label: linesplit[csvColumns['label']],
          score: Number(linesplit[csvColumns['score']]),
          carNumber: Number(linesplit[csvColumns['car_number']]),
          mark: Number(linesplit[csvColumns['mark']]),
          file: linesplit[csvColumns['file']],
          surveyId: linesplit[csvColumns['survey_id']],
          timeStamp: linesplit[csvColumns['timestamp']], //new Date(linesplit[csvColumns['timestamp']]),
        }; */

        let tempdate = new Date(linesplit[csvColumns['timestamp']]);

        if (tempdate < maxdate && tempdate > mindate) {
          allDecibels.push(Number(linesplit[csvColumns['db']]));
          allDates.push(linesplit[csvColumns['timestamp']]);
          allHours.push(Number(linesplit[csvColumns['hour']]));
        }
      }

      dateRange['max'] = maxdate;
      dateRange['min'] = mindate;
    } catch (e) {
      return e;
    }

    //console.log(csvColumns);

    // return csv;

    return {
      dbs: allDecibels,
      dates: allDates,
      hours: allHours,
      dateRange,
    };
    //return csvColumns;
  }
}
