import { Injectable } from '@nestjs/common';
import { AnyFilesInterceptor } from '@nestjs/platform-express';
import { open } from 'node:fs/promises';
import { max, min } from 'rxjs';
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
      const { data, error }: any = await supabase
        .from('all_decibelv2')
        .select();
      if (error)
        if (data)
          // console.log(error);
          //console.log(data);

          for (const item of data) {
            allDecibels.push(item.db);
            allDates.push(item.timestamp);
            allHours.push(item.hour);
          }
    } catch (e) {}

    let testarr = [];

    let testcnt = 0;

    let minhour = Math.min(...allHours);
    // console.log(minhour);

    let maxhour = Math.max(...allHours);
    // console.log(maxhour);
    let hoursfromMax = [];
    while (minhour <= maxhour) {
      let overallcnt = -1;
      testarr.push([]);
      for (const item of allDates) {
        overallcnt++;

        if (allDates[overallcnt] === item) {
          testarr[testcnt].push(allDecibels[overallcnt]);
          continue;
        } else testarr[testcnt].push(0);
      }

      testcnt++;
      minhour++;
      hoursfromMax.push(minhour);
    }

    return {
      dbs: allDecibels,
      hdbs: testarr,
      dates: allDates,
      hours: hoursfromMax,
    };
    //return csvColumns;
  }

  async getAllDataMod(): Promise<any> {
    let file;
    let csv: Array<TransitNoiseData> = new Array<TransitNoiseData>();

    let allDecibels = [];
    let allHours = [];
    let allDates = [];
    let csvColumns = {};

    let hour1 = [];
    let hour2 = [];
    let hour3 = [];
    let hour4 = [];
    let hour5 = [];
    let hour6 = [];
    let hour7 = [];
    let hour8 = [];
    let hour9 = [];
    let hour10 = [];
    let hour11 = [];
    let hour12 = [];
    let hour13 = [];
    let hour14 = [];
    let hour15 = [];
    let hour16 = [];
    let hour17 = [];
    let hour18 = [];
    let hour19 = [];
    let hour20 = [];
    let hour21 = [];
    let hour22 = [];
    let hour23 = [];
    let hour24 = [];

    try {
      const { data, error }: any = await supabase
        .from('all_decibelv2')
        .select();
      if (error)
        if (data)
          //console.log(error);
          //console.log(data);

          for (const item of data) {
            allDecibels.push(item.db);
            allDates.push(item.timestamp);
            allHours.push(item.hour);
          }
    } catch (e) {}

    /* if (allHours[overallcnt] < 1.1 && allHours[overallcnt] > 0.09) {
          testarr[testcnt].push(allDecibels[overallcnt]);
          hour1.push(allDecibels[overallcnt]);
          continue;
        } else {
          hour1.push(null);
        }
        if (allHours[overallcnt] < 2.1 && allHours[overallcnt] > 0.9) {
          testarr[testcnt].push(allDecibels[overallcnt]);
          hour2.push(allDecibels[overallcnt]);
          continue;
        } else {
          hour2.push(null);
        }
        if (allHours[overallcnt] < 3.1 && allHours[overallcnt] > 1.9) {
          testarr[testcnt].push(allDecibels[overallcnt]);
          hour3.push(allDecibels[overallcnt]);
          continue;
        } else {
          hour3.push(null);
        }
        if (allHours[overallcnt] < 4.1 && allHours[overallcnt] > 2.9) {
          testarr[testcnt].push(allDecibels[overallcnt]);
          hour4.push(allDecibels[overallcnt]);
          continue;
        } else {
          hour4.push(null);
        }
        if (allHours[overallcnt] < 5.1 && allHours[overallcnt] > 3.9) {
          testarr[testcnt].push(allDecibels[overallcnt]);
          hour5.push(allDecibels[overallcnt]);
          continue;
        } else {
          hour5.push(null);
        }
        if (allHours[overallcnt] < 6.1 && allHours[overallcnt] > 4.9) {
          testarr[testcnt].push(allDecibels[overallcnt]);
          hour6.push(allDecibels[overallcnt]);
          continue;
        } else {
          hour6.push(null);
        }
        if (allHours[overallcnt] < 7.1 && allHours[overallcnt] > 5.9) {
          testarr[testcnt].push(allDecibels[overallcnt]);
          hour7.push(allDecibels[overallcnt]);
          continue;
        } else {
          hour7.push(null);
        }
        if (allHours[overallcnt] < 8.1 && allHours[overallcnt] > 6.9) {
          testarr[testcnt].push(allDecibels[overallcnt]);
          hour8.push(allDecibels[overallcnt]);
          continue;
        } else {
          hour8.push(null);
        }
        if (allHours[overallcnt] < 9.1 && allHours[overallcnt] > 7.9) {
          testarr[testcnt].push(allDecibels[overallcnt]);
          hour9.push(allDecibels[overallcnt]);
          continue;
        } else {
          hour9.push(null);
        }
        if (allHours[overallcnt] < 10.1 && allHours[overallcnt] > 8.9) {
          testarr[testcnt].push(allDecibels[overallcnt]);
          hour10.push(allDecibels[overallcnt]);
          continue;
        } else {
          hour10.push(null);
        }
        if (allHours[overallcnt] < 11.1 && allHours[overallcnt] > 9.9) {
          testarr[testcnt].push(allDecibels[overallcnt]);
          hour11.push(allDecibels[overallcnt]);
          continue;
        } else {
          hour11.push(null);
        }
        if (allHours[overallcnt] < 12.1 && allHours[overallcnt] > 10.9) {
          testarr[testcnt].push(allDecibels[overallcnt]);
          hour12.push(allDecibels[overallcnt]);
          continue;
        } else {
          hour12.push(null);
        }
        if (allHours[overallcnt] < 13.1 && allHours[overallcnt] > 11.9) {
          testarr[testcnt].push(allDecibels[overallcnt]);
          hour13.push(allDecibels[overallcnt]);
          continue;
        } else {
          hour13.push(null);
        }
        if (allHours[overallcnt] < 14.1 && allHours[overallcnt] > 12.9) {
          testarr[testcnt].push(allDecibels[overallcnt]);
          hour14.push(allDecibels[overallcnt]);
          continue;
        } else {
          hour14.push(null);
        }
        if (allHours[overallcnt] < 15.1 && allHours[overallcnt] > 13.9) {
          testarr[testcnt].push(allDecibels[overallcnt]);
          hour15.push(allDecibels[overallcnt]);
          continue;
        } else {
          hour15.push(0);
        }
        if (allHours[overallcnt] < 16.1 && allHours[overallcnt] > 14.9) {
          testarr[testcnt].push(allDecibels[overallcnt]);
          hour16.push(allDecibels[overallcnt]);
          continue;
        } else {
          hour16.push(0);
        }
        if (allHours[overallcnt] < 17.1 && allHours[overallcnt] > 15.9) {
          testarr[testcnt].push(allDecibels[overallcnt]);
          hour17.push(allDecibels[overallcnt]);
          continue;
        } else {
          hour17.push(0);
        }
        if (allHours[overallcnt] < 18.1 && allHours[overallcnt] > 16.9) {
          testarr[testcnt].push(allDecibels[overallcnt]);
          hour18.push(allDecibels[overallcnt]);
          continue;
        } else {
          hour18.push(null);
        }
        if (allHours[overallcnt] < 19.1 && allHours[overallcnt] > 17.9) {
          testarr[testcnt].push(allDecibels[overallcnt]);
          hour19.push(allDecibels[overallcnt]);
          continue;
        } else {
          hour19.push(null);
        }
        if (allHours[overallcnt] < 20.1 && allHours[overallcnt] > 18.9) {
          testarr[testcnt].push(allDecibels[overallcnt]);
          hour20.push(allDecibels[overallcnt]);
          continue;
        } else {
          hour20.push(null);
        }
        if (allHours[overallcnt] < 21.1 && allHours[overallcnt] > 19.9) {
          testarr[testcnt].push(allDecibels[overallcnt]);
          hour21.push(allDecibels[overallcnt]);
          continue;
        } else {
          hour21.push(null);
        }
        if (allHours[overallcnt] < 22.1 && allHours[overallcnt] > 20.9) {
          testarr[testcnt].push(allDecibels[overallcnt]);
          hour22.push(allDecibels[overallcnt]);
          continue;
        } else {
          hour22.push(null);
        }
        if (allHours[overallcnt] < 23.1 && allHours[overallcnt] > 21.9) {
          testarr[testcnt].push(allDecibels[overallcnt]);
          hour23.push(allDecibels[overallcnt]);
          continue;
        } else {
          hour23.push(null);
        }
        if (allHours[overallcnt] < 24.1 && allHours[overallcnt] > 22.9) {
          testarr[testcnt].push(allDecibels[overallcnt]);
          hour24.push(allDecibels[overallcnt]);
          continue;
        } else {
          hour24.push(null);
        }
      */
    let testarr = [];

    let testcnt = 0;

    let minhour = Math.min(...allHours);
    // console.log(minhour);

    let maxhour = Math.max(...allHours);
    // console.log(maxhour);
    let hoursfromMax = [];
    while (minhour <= maxhour) {
      let overallcnt = -1;
      testarr.push([]);
      for (const item of allDates) {
        overallcnt++;

        if (allDates[overallcnt] === item) {
          testarr[testcnt].push(allDecibels[overallcnt]);
          continue;
        } else testarr[testcnt].push(0);
      }

      testcnt++;
      minhour++;
      hoursfromMax.push(minhour);
    }

    return {
      dbs: testarr,
      dates: allDates,
      hours: hoursfromMax, //allHours,
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
        .from('all_decibelv2')
        .select()
        .eq('car_number', car);
      if (error)
        if (data)
          //console.log(error);
          //console.log(data);

          for (const item of data) {
            allDecibels.push(item.db);
            allDates.push(item.timestamp);
            allHours.push(item.hour);
          }
    } catch (e) {}

    //console.log(csvColumns);

    // return csv;
    let testarr = [];

    let testcnt = 0;

    let minhour = Math.min(...allHours);
    //  console.log(minhour);

    let maxhour = Math.max(...allHours);
    //console.log(maxhour);
    let hoursfromMax = [];
    while (minhour <= maxhour) {
      let overallcnt = -1;
      testarr.push([]);
      for (const item of allDates) {
        overallcnt++;

        if (allDates[overallcnt] === item) {
          testarr[testcnt].push(allDecibels[overallcnt]);
          continue;
        } else testarr[testcnt].push(0);
      }

      testcnt++;
      minhour++;
      hoursfromMax.push(minhour);
    }

    return {
      hdbs: testarr,
      dbs: allDecibels,
      dates: allDates,
      hours: hoursfromMax, //allHours,
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
    //console.log(tempDate);
    let maxdate: any = dateclicked.setHours(dateclicked.getHours() + 1);

    maxdate = new Date(maxdate);
    let mindate: any = dateclicked2.setHours(dateclicked2.getHours() - 6);
    mindate = new Date(mindate);
    // console.log(dateclicked);
    //console.log(dateclicked2);
    //console.log(maxdate);
    //console.log(mindate);

    let allDecibels = [];
    let allHours = [];
    let allDates = [];
    let dateRange = {};
    let csvColumns = {};

    try {
      const { data, error }: any = await supabase
        .from('all_decibelv2')
        .select();
      if (error)
        if (data)
          //console.log(error);
          //console.log(data);

          for (const item of data) {
            let tempdate = new Date(item.timestamp);

            if (tempdate < maxdate && tempdate > mindate) {
              allDecibels.push(item.db);
              allDates.push(item.timestamp);
              allHours.push(item.hourminute);
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

/*
        if (allDates[overallcnt] === item) {
          if (minhour === allHours[overallcnt])
            testarr[testcnt].push(allDecibels[overallcnt]);
          else testarr[testcnt].push(0);
          continue;
        } else testarr[testcnt].push(0);

*/
