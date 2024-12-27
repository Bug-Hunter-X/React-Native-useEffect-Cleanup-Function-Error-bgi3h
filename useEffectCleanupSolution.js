```javascript
useEffect(() => {
  const subscription = someDataStream.subscribe(data => {
    // ... handle data
  });

  return () => {
    if (subscription) {
      subscription.unsubscribe();
    }
  };
}, []);
```

This improved cleanup function ensures that the `unsubscribe` method is only called if the `subscription` is valid, avoiding the error.