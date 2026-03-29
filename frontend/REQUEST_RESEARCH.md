# REQUEST_RESEARCH.md

## 1. Libraries for Managing React State and HTTP Requests

### a) React Query (TanStack Query)
- React Query helps manage data coming from a backend API.
- It automatically handles fetching, caching, and updating data.
- You can use `useQuery` to get data and `useMutation` to add, update, or delete data.
- It reduces the need to manually manage `useState` and `useEffect` for every request.

### b) Redux Toolkit Query (RTK Query)
- RTK Query is part of Redux Toolkit.
- It simplifies making API calls and storing the responses in a central store.
- It is useful if your app already uses Redux for global state management.
- Handles caching, updates, and error states automatically.

---

## 2. Trade-offs of Using a Library
- **Pros:**
  - Less manual work for managing state and HTTP requests.
  - Built-in caching, loading, and error handling.
  - Easier to scale as the app grows.
- **Cons:**
  - Adds an external dependency to your project.
  - Requires learning how the library works.
- Using `useState` + `axios` manually works, but you need to write more code for updates, caching, and errors.

---

## 3. What Needs to Change in Our Project
- Replace `useState` + `useEffect` + `axios` with library hooks like `useQuery` and `useMutation`.
- The movie list component:
  - Fetch movies with `useQuery`.
  - Add and remove movies using `useMutation` instead of `axios` calls.
- Remove manual error handling and loading states, letting the library manage it.

---

## 4. Recommendation
- **React Query** is recommended because:
  - Easy to implement in this project.
  - Reduces boilerplate code.
  - Handles caching and updates automatically.
  - Keeps code cleaner and easier to maintain.

---

## 5. References
- [React Query Documentation](https://tanstack.com/query/latest)
- [Redux Toolkit Query Documentation](https://redux-toolkit.js.org/rtk-query/overview)