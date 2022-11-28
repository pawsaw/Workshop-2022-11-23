import { EntityState } from '@ngrx/entity';
import { Book } from '../models';

export const bookCollectionSliceName = 'bookCollection';

export interface BookCollectionSlice extends EntityState<Book> {}
