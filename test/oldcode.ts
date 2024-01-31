/* 
    try {
      file = await open(__dirname + '/../data/noise_new.csv');

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
        }; 

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
    } */

/* 
    try {
      file = await open(__dirname + '/../data/noise_new.csv');

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
      return e;
    }
 */
