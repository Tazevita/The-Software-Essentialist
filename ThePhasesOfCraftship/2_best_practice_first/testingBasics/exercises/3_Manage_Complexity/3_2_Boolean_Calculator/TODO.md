# Doings

- Caclulates a string of Booleans to be either true or false

# Knowings

- "NOT" makes a boolean becme the oppisite of what is was
- "AND" only returns true when what it's comparing is both true
- "OR" returns true if either of what it is comparing returns true
- Boolean strings within parenthesis are calculated first
- The order of operations should be "NOT" -> "AND" -> "OR"

# Examples

1. Single values

"TRUE" -> true "FALSE" -> false

2. NOT operator

"NOT TRUE" -> false

3. AND operator

"TRUE AND FALSE" -> false
"TRUE AND TRUE" -> true

4. OR operator

"TRUE OR FALSE" -> true
"FALSE OR FALSE" -> false

5. Combination of operators w/ precedence

"TRUE OR TRUE OR TRUE AND FALSE" -> true
"TRUE OR FALSE AND NOT FALSE" -> true

6. Parenthesis

"(TRUE OR TRUE OR TRUE) AND FALSE" -> false
"NOT (TRUE AND TRUE)" -> false

while (booleanString.indexOf("(") && booleanString.indexOf(")")) {

}
