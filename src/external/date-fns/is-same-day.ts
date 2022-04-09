import { ICompareDate } from '@/domain/contracts/repository/date-fns';
import { isSameDay, isSameMonth, isSameYear } from 'date-fns';

export class CompareDate implements ICompareDate {
  isSameDate(dateNow: any, DateToCompare: Date): boolean {
    const sameDay = isSameDay(dateNow, DateToCompare);
    const sameMonth = isSameMonth(dateNow, DateToCompare);
    const sameYear = isSameYear(dateNow, DateToCompare);
    if (sameDay && sameMonth && sameYear) {
      return true;
    }
    return false;
  }
}
