import { addTodoItemInteractor } from './business/useCases/addTodoItemInteractor';
import { getItem } from './persistence/getItem';
import { setItem } from './persistence/setItem';
import { deleteItem } from './persistence/deleteItem';

export const applicationContext = {
  getUseCases: () => ({
    addTodoItemInteractor,
  }),
  getPersistence: () => ({
    getItem,
    setItem,
    deleteItem,
  }),
};
