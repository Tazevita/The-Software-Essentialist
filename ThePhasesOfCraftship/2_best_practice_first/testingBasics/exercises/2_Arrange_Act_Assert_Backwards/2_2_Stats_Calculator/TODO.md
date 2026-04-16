# Stats Calculator

## What it does

- Gets lowest number in list
- Gets greatest number in list
- Gets number of elements in the list
- Gets the average value of the elements in the list
- Blocks calculation if there are any errors

## What it knows

- The list should only have numbers
- Cannot use Math library functions
- Average is sum of all divided by list size
- This list should have at least 1 element

## Examples

```typescript
 const listExample = [2, 4, 21, -8, 53, 40];

 const output = {
    min: -8,
    max: 53,
    totalElements: 6,
    avgValue: 18.666666666667
 }

// ---
 const listExample = []

 throw new Error('EmptyList')
 // ---
const listExample = ["string1", "string2", "string3"]

 throw new Error('EmptyList')
 // ---
`
```
