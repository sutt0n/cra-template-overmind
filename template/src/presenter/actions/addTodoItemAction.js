export const addTodoItemAction = ({ state, effects: applicationContext, ...rest }) => {
  const { todoTitle: title, todoDescription: description } = state;
  const todos = applicationContext.getUseCases().addTodoItemInteractor({
    applicationContext,
    title,
    description
  });

  state.todos = todos;
}