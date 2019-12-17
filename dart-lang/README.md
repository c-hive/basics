# Dart Language features

Use https://dartpad.dartlang.org

### Everyhting is an Object (primitives start with lowercase)

```dart
void main() {
  print(int is Object);
  // => true
}
```

### Primitives are passed by value

```dart
void main() {
  int a = 1;
  int b = a;
  a = 2;
  print(a);
  // => 2
  print(b);
  // => 1
}
```

### Non-primitives are passed by reference

```dart
void main() {
  List<int> list = [1, 2];
  print(list);
  // => [1, 2]
  List<int> list2 = list;
  list.add(3);
  print(list2);
  // => [1, 2, 3]
}
```

### Final variables are still copied by reference

```dart
void main() {
  final List<int> list = [1, 2];
  print(list);
  // => [1, 2]
  final List<int> list2 = list;
  list.add(3);
  print(list2);
  // => [1, 2, 3]
}
```

### Typed variables raise type errors

```dart
void main() {
  var typed1 = 1;
  // typed1 = '2'; // Compilation error
  int typed2;
  // typed2 = '2'; // Compilation error
}
```

### Dynamic types don't raise type errors

```dart
void main() {
  var a;
  a = 1;
  print(a);
  // => 1
  a = 'we';
  print(a);
  // => we
}
```

### The `..` operator can be used to return the object on which the method is executed (e.g. if method returns `void`)

```dart
void main() {
  [].addAll([1, 2]); // => void
  print([]..addAll([1, 2]));
  // => [1, 2]
}
```

### Null aware assignment

```dart
void main() {
  String equalsIfNotNull;
  equalsIfNotNull ??= 'it works';
  print(equalsIfNotNull);
  // => works
}
```

### Underscores are valid variable names

```dart
void main() {
  var _ = 'underscore';
  print(_);
  // => underscore
}
```
