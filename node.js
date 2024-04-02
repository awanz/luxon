const { DateTime, Info } = require("luxon");

const infoFeature = Info.features(); // { relative: true, localeWeek: true }
const now = DateTime.now(); // DateTime { ts: 2024-04-02T06:54:08.705+07:00, zone: Asia/Jakarta, locale: en-ID }
const nowToUnixInteger = DateTime.now().toUnixInteger(); // 1712015791
const nowToJsDate = DateTime.now().toJSDate(); // 2024-04-01T23:57:12.038Z
const setZoneNY = DateTime.now().setZone('America/New_York'); // DateTime { ts: 2024-04-01T20:25:02.184-04:00, zone: America/New_York, locale: en-ID }
const setZoneNYStartOf = DateTime.now().setZone('America/New_York').startOf('day'); // DateTime { ts: 2024-04-01T00:00:00.000-04:00, zone: America/New_York, locale: en-ID }
const nowPlusMS = DateTime.now().plus({minutes: 15, seconds: 8}); // DateTime { ts: 2024-04-02T07:40:10.195+07:00, zone: Asia/Jakarta, locale: en-ID }
const nowPlusD = DateTime.now().plus({days: 6}); // DateTime { ts: 2024-04-08T07:25:02.198+07:00, zone: Asia/Jakarta, locale: en-ID }
const nowMinusD = DateTime.now().minus({days: 6}); // DateTime { ts: 2024-03-27T07:25:02.198+07:00, zone: Asia/Jakarta, locale: en-ID }
const nowDiffWithLocalMilis = DateTime.now().diff(DateTime.local(1982, 5, 25)).milliseconds; // 1320909902199
const nowToObject = DateTime.now().toObject(); /* 
                                                {
                                                  year: 2024,
                                                  month: 4,
                                                  day: 2,
                                                  hour: 7,
                                                  minute: 25,
                                                  second: 2,
                                                  millisecond: 201
                                                }
                                              */
const utcToIso = DateTime.utc().toISO(); // 2024-04-02T00:25:02.202Z
const utcWithDateTime = DateTime.utc(2017, 5, 15, 17, 36); // DateTime { ts: 2017-05-15T17:36:00.000Z, zone: UTC, locale: en-ID }
const utcWithDateTimeToLocal = DateTime.utc(2017, 5, 15, 17, 36).toLocal(); // DateTime { ts: 2017-05-16T00:36:00.000+07:00, zone: Asia/Jakarta, locale: en-ID }
const localWithDateTime = DateTime.local(2017, 5, 15, 17, 36); // DateTime { ts: 2017-05-15T17:36:00.000+07:00, zone: Asia/Jakarta, locale: en-ID }
const localWithDateTimeToUtc = DateTime.local(2017, 5, 15, 17, 36).toUTC(); // DateTime { ts: 2017-05-15T10:36:00.000Z, zone: UTC, locale: en-ID }
const fromObject = DateTime.fromObject({ year: 2017, month: 5, day: 15, hour: 17, minute: 36 }); // DateTime { ts: 2017-05-15T17:36:00.000+07:00, zone: Asia/Jakarta, locale: en-ID }
const fromObjectWithZoneNY = DateTime.fromObject({ year: 2017, month: 5, day: 15, hour: 17, minute: 36 }, { zone: 'America/New_York' }); // DateTime { ts: 2017-05-15T17:36:00.000-04:00, zone: America/New_York, locale: en-ID }
const fromObjectWithZoneSG = DateTime.fromObject({ year: 2017, month: 5, day: 15, hour: 17, minute: 36 }, { zone: 'Asia/Singapore' }); // DateTime { ts: 2017-05-15T17:36:00.000+08:00, zone: Asia/Singapore, locale: en-ID }

console.log(infoFeature);
console.log(now);
console.log(nowToUnixInteger);
console.log(nowToJsDate);
console.log(setZoneNY);
console.log(setZoneNYStartOf);
console.log(nowPlusMS);
console.log(nowPlusD);
console.log(nowMinusD);
console.log(nowDiffWithLocalMilis);
console.log(nowToObject);
console.log(utcToIso);
console.log(utcWithDateTime);
console.log(utcWithDateTimeToLocal);
console.log(localWithDateTime);
console.log(localWithDateTimeToUtc);
console.log(fromObject);
console.log(fromObjectWithZoneNY);
console.log(fromObjectWithZoneSG);


const nowDiffWithLocalDays = DateTime.now().diff(DateTime.local(1982, 5, 25), 'days').days; // 15288.342339375
const nowDiffWithLocalDaysHours = DateTime.now().diff(DateTime.local(1982, 5, 25), ['days', 'hours']); // Duration { values: {"days":15288,"hours":8.216145277777779} }
const nowToLocalString = DateTime.now().toLocaleString(); // 4/2/2024
const nowSetLocalToLocalString = DateTime.now().setLocale('zh').toLocaleString(); // 2024/4/2
const nowToLocalStringDateMed = DateTime.now().toLocaleString(DateTime.DATE_MED); // Apr 2, 2024
const nowSetLocalToLocalStringDateMed = DateTime.now().setLocale('zh').toLocaleString(DateTime.DATE_MED); // 2024年4月2日
const nowSetLocalToLocalStringDateFull = DateTime.now().setLocale('fr').toLocaleString(DateTime.DATE_FULL); // 2 avril 2024
const fromISO = DateTime.fromISO('2017-05-15'); // DateTime { ts: 2017-05-15T00:00:00.000+07:00, zone: Asia/Jakarta, locale: en-ID }
const fromISO2 = DateTime.fromISO('2017-05-15T17:36'); // DateTime { ts: 2017-05-15T17:36:00.000+07:00, zone: Asia/Jakarta, locale: en-ID }
const fromISO3 = DateTime.fromISO('2017-W33-4')	; // DateTime { ts: 2017-08-17T00:00:00.000+07:00, zone: Asia/Jakarta, locale: en-ID }
const fromISO4 = DateTime.fromISO('2017-W33-4T04:45:32.343'); // DateTime { ts: 2017-08-17T04:45:32.343+07:00, zone: Asia/Jakarta, locale: en-ID }
const fromFormat = DateTime.fromFormat('12-16-2017', 'MM-dd-yyyy'); // DateTime { ts: 2017-12-16T00:00:00.000+07:00, zone: Asia/Jakarta, locale: en-ID }
const nowToFormatMMddYYYY = DateTime.now().toFormat('MM-dd-yyyy'); // 04-02-2024
const nowToFormatMMMMddyyyy = DateTime.now().toFormat('MMMM dd, yyyy'); // April 02, 2024
const nowSetLocalToFormatMMMMddYYYY = DateTime.now().setLocale('fr').toFormat('MMMM dd, yyyy'); //avril 02, 2024
const fromFormat2 = DateTime.fromFormat('May 25, 1982', 'MMMM dd, yyyy'); //DateTime { ts: 1982-05-25T00:00:00.000+07:00, zone: Asia/Jakarta, locale: en-ID }
const fromFormat3 = DateTime.fromFormat('mai 25, 1982', 'MMMM dd, yyyy', { locale: 'fr' }); // DateTime { ts: 1982-05-25T00:00:00.000+07:00, zone: Asia/Jakarta, locale: fr }
const nowPlusToRelativeCalendar = DateTime.now().plus({ days: 1 }).toRelativeCalendar(); // tomorrow
const nowPlusToRelativeCalendar2 = DateTime.now().plus({ days: -1 }).toRelativeCalendar(); // yesterday
const nowPlusToRelativeCalendar3 = DateTime.now().plus({ months: 1 }).toRelativeCalendar(); // next month
const nowSetLocalPlusToRelativeCalendar = DateTime.now().setLocale('id').plus({ days: 1 }).toRelativeCalendar(); // besok
const nowSetLocalPlusToRelativeCalendar2 = DateTime.now().setLocale('id').plus({ days: -1 }).toRelativeCalendar(); // kemarin
const nowSetLocalPlusToRelativeCalendar3 = DateTime.now().setLocale('id').plus({ months: 1 }).toRelativeCalendar(); // bulan depan

console.log(nowDiffWithLocalDays);
console.log(nowDiffWithLocalDaysHours);
console.log(nowToLocalString);
console.log(nowSetLocalToLocalString);
console.log(nowToLocalStringDateMed);
console.log(nowSetLocalToLocalStringDateMed);
console.log(nowSetLocalToLocalStringDateFull);
console.log(fromISO);
console.log(fromISO2);
console.log(fromISO3);
console.log(fromISO4);
console.log(fromFormat);
console.log(nowToFormatMMddYYYY);
console.log(nowToFormatMMMMddyyyy);
console.log(nowSetLocalToFormatMMMMddYYYY);
console.log(fromFormat2);
console.log(fromFormat3);
console.log(nowPlusToRelativeCalendar);
console.log(nowPlusToRelativeCalendar2);
console.log(nowPlusToRelativeCalendar3);
console.log(nowSetLocalPlusToRelativeCalendar);
console.log(nowSetLocalPlusToRelativeCalendar2);
console.log(nowSetLocalPlusToRelativeCalendar3);
