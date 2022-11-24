import { Book } from '../models';

export const bookCollectionSliceName = 'bookCollection';

export interface BookCollectionSlice {
  books: Book[];
}
