# Memoization in hooks and contexts

### Usage:

https://codesandbox.io/s/github/c-hive/basics/tree/master/react-hook-context-memo

### Notable effects:

- Setters and Objects from `useState` have static references, as a re-render triggered by the parent re-renders the children but doesn't cause their `useEffect` to re-run.
- Objects in the dependency array are shallow compared. They will cause `useEffect` to re-run when their reference changes. This can be avoided by something like [`use-deep-compare-effect`](https://github.com/kentcdodds/use-deep-compare-effect).
- The context provider's value field doesn't act like a dependency array. When provided with an array, that will be created with a new reference upon every render. `useMemo` can be used to counteract this.
- Re-renders can be avoided via wrapping the components with `React.memo`.
