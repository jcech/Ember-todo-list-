Todos.Todo = DS.Model.extend ({
  title: DS.attr('string'),
  isCompleted: DS.attr('boolean')
});

Todos.Todo.FIXTURES = [
  {
    id: 1,
    title: 'Learn Ember Epicodus',
    isCompleted: true
  },
  {
    id: 2,
    title: 'LEARN LEARN LEARN',
    isCompleted: false
  },
  {
    id: 3,
    title: 'Profit??',
    isCompleted: false
  }
];
