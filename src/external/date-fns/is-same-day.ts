import { ICompareDate } from '@/domain/contracts/repository/date-fns';
import { isSameDay, isSameMonth, isSameYear } from 'date-fns';

export class CompareDate implements ICompareDate {
  isSameDate(dateNow: any, DateToCompare: Date): boolean {
    const sameDay = isSameDay(new Date(dateNow), new Date(DateToCompare));
    const sameMonth = isSameMonth(new Date(dateNow), new Date(DateToCompare));
    const sameYear = isSameYear(new Date(dateNow), new Date(DateToCompare));
    if (sameDay && sameMonth && sameYear) {
      return true;
    }
    return false;
  }
}
