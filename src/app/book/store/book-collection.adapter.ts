import { createEntityAdapter } from '@ngrx/entity';
import { Book } from '../models';

export const bookCollectionAdapter = createEntityAdapter<Book>();
