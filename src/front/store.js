export const initialStore = () => {
  return {
    message: null,
    todos: [
      {
        id: 1,
        title: "Make the bed",
        background: null,
      },
      {
        id: 2,
        title: "Do my homework",
        background: null,
      }
    ],
    token: sessionStorage.getItem("token") || null, // 🔹 Guarda el token si ya existe
    user: null // 🔹 Puedes agregar más datos del usuario si los necesitas
  };
};

export default function storeReducer(store, action = {}) {
  switch (action.type) {
    case 'set_hello':
      return {
        ...store,
        message: action.payload
      };

    case 'add_task':
      const { id, color } = action.payload;
      return {
        ...store,
        todos: store.todos.map((todo) =>
          todo.id === id ? { ...todo, background: color } : todo
        )
      };

    case "LOGIN_SUCCESS":
      sessionStorage.setItem("token", action.payload); // 🔹 Guarda el token en sessionStorage
      return { ...store, token: action.payload };

    case "LOGOUT":
      sessionStorage.removeItem("token"); // 🔹 Elimina el token al cerrar sesión
      return { ...store, token: null, user: null };

    default:
      throw Error('Unknown action.');
  }
}