import { addDays } from "./date";
import moment from "moment";

const modalListData = [
  {
    id: 1,
    todayFollowers: 3,
  },
  {
    id: 2,
    todayFollowers: 2,
  },
  {
    id: 3,
    todayFollowers: 6,
  },
  {
    id: 4,
    todayFollowers: 8,
  },
  {
    id: 5,
    todayFollowers: 9,
  },
  {
    id: 6,
    todayFollowers: 10,
  },
  {
    id: 7,
    todayFollowers: 9,
  },
  {
    id: 8,
    todayFollowers: 10,
  },
  {
    id: 9,
    todayFollowers: 12,
  },
  {
    id: 10,
    todayFollowers: 12,
  },
];

const currentDate = new Date();

export const data = [
  {
    date: moment(addDays(currentDate, 0)).format("ll"),
    todayFollowers: modalListData[0].todayFollowers,
  },
  {
    date: moment(addDays(currentDate, 7)).format("ll"),
    todayFollowers: modalListData[1].todayFollowers,
  },
  {
    date: moment(addDays(currentDate, 14)).format("ll"),
    todayFollowers: modalListData[2].todayFollowers,
  },
  {
    date: moment(addDays(currentDate, 21)).format("ll"),
    todayFollowers: modalListData[3].todayFollowers,
  },
  {
    date: moment(addDays(currentDate, 28)).format("ll"),
    todayFollowers: modalListData[4].todayFollowers,
  },
  {
    date: moment(addDays(currentDate, 35)).format("ll"),
    todayFollowers: modalListData[5].todayFollowers,
  },
  {
    date: moment(addDays(currentDate, 42)).format("ll"),
    todayFollowers: modalListData[6].todayFollowers,
  },
  {
    date: moment(addDays(currentDate, 49)).format("ll"),
    todayFollowers: modalListData[7].todayFollowers,
  },
  {
    date: moment(addDays(currentDate, 56)).format("ll"),
    todayFollowers: modalListData[8].todayFollowers,
  },
  {
    date: moment(addDays(currentDate, 63)).format("ll"),
    todayFollowers: modalListData[9].todayFollowers,
  },
];
