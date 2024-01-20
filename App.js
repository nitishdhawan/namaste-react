const heading = React.createElement('h1', { id: 'heading' }, [
  React.createElement('div', { id: 'child1' }, 'I am first Child'),
  React.createElement('div', { id: 'child2' }, 'I am second child'),
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(heading);
