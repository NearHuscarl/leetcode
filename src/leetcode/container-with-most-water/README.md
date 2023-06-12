## Two pointers

### Proof

```
[8,9,6,2,5,4,8,99,7]
 L
                  R
```

- Moving shorter column will make:

  - width smaller
  - height smaller/equal
  - => area smaller

```
[8,9,6,2,5,4,8,99,7]
   L
                  R
```

- Moving higher column will make:
  - width smaller
  - height smaller/equal/or bigger
  - => area could be larger

```
[8,9,6,2,5,4,8,99,7]
 L
                R
```
