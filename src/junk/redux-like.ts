import { Book } from '../app/book/models';

export interface State {
  books: Book[];
}

export const initialState: State = {
  books: [],
};

interface CreateBookAction {
  type: 'CreateBookAction';
  book: Book;
}

interface RenameBookAction {
  type: 'RenameBookAction';
  isbn: string;
  title: string;
}

interface RemoveBookAction {
  type: 'RemoveBookAction';
  isbn: string;
}

export type AllActions = CreateBookAction | RenameBookAction | RemoveBookAction;

function reduceA(state: State = initialState, action: AllActions): State {
  switch (action.type) {
    case 'CreateBookAction':
      return {
        ...state,
        books: [...state.books, action.book],
      };
  }

  return state;
}

function reduceB(state: State = initialState, action: AllActions): State {
  return state;
}

function rootReducer(state: State = initialState, action: AllActions): State {
  let newState = reduceA(state, action);
  newState = reduceB(newState, action);
  return newState;
}
