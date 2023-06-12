## Two pointers

- `i`: moves from left to right
- `left`: throw `0` here if `i` encounters `0`
- `right`: throw `2` here if `i` encounters `2`

- Edge case

```
     _     _
[0,1,2,0,1,0]
   L
           R
     i
```

```
     _     _
[0,1,0,0,1,2]
   L
           R
     i
```

```
     _     _
[0,1,0,0,1,2]
   L
         R
       i
```
