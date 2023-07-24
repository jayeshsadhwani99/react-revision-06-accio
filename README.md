# React Revision 06

This is the AccioJob session for react revision

## Topics covered in the session

I have divided the lecture into multiple parts

### Part-1

Basic react hooks revision:
`useState`, `useEffect` and `useRef`

- what are they
- how are they used
- implmentation

### Part-2

Introduction to custom hooks.

- What are they
- Why are they used
- Basic Example

### Part-3

Creating our first hook:
`useLocalStorageWithExpiry`.

#### Explanation

This hook is used to store key-value pairs in the browser's local storage that expire after a certain time. It's great for things like session data that should be cleared after the user leaves, even if they didn't manually log out.

### Part-4

Creating our first hook:
`usePrevious`.

#### Explanation

This hook is used to keep track of the previous value of a state or prop. It can be useful in effects where you want to compare the current props with the previous ones to decide whether to perform an action.

### Part-5

Creating our first hook:
`useOnlineStatus`.

#### Explanation

This hook tracks whether the user is currently online or offline. It can be used to handle things like caching data for offline use, or showing a warning when the user loses their internet connection.

### Part-6

Creating our first hook:
`useIdle`.

#### Explanation

This hook checks if the user is idle, based on mouse and keyboard activity. It's useful for things like auto-saving or auto-logging out after a certain period of inactivity.
