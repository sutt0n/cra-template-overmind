import { applicationContext } from '../applicationContext'

export const state = {
  todos: applicationContext.getPersistence().getItem({ key: "todos" }) || [],
  greeting: "Hello World!",
};