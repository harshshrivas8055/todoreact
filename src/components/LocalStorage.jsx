export const savetodo = (todos) => {
    localStorage.setItem('mytodolist', JSON.stringify(todos));
};

export const loadtodos = () => {
    const stored = localStorage.getItem('mytodolist');
    return stored?JSON.parse(stored) : [];
};