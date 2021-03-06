Equation Simplification

You will be given a JSON file as an input. This file will contain a equation in a structured format

like this:
{
"op": "equal",
"lhs": {
"op": "add",
"lhs": 1,
"rhs": {
"op": "multiply",
"lhs": "x",
"rhs": 10
}
},
"rhs": 21
}

This particular example represents this equation:
1 + (x \* 10) = 21
Your goal is to:

1. Parse the JSON into a structured format, and ​ write a function to pretty-print the parsed
   equation​ , in a single line with brackets, like the below example. (​ You can use a JSON
   parsing library ​ )
   1 + (x \* 10) = 21
2. Transform the expression so that you have ‘x’ on one side​ , and all the operations on the
   other side. In this example, a transformed expression can be: x = (21 − 1) / 10
   You should then print this simplified expression
3. Bonus:​ ​ Evaluate the expression on the other side and find the value of ‘x’.
   For our input files, assume that ‘x’ is always solvable.Notes:
   ● The operations possible are: ​ add​ , ​ subtract​ , ​ multiply​ , ​ divide​ , and ​ equal
   ● Each operation will have a LHS and a RHS. The LHS / RHS of a operation can be:
   ○ another operation,
   ○ Or a fixed number,
   ○ Or a variable reference
   ● The input files will be limited to have the following characteristics:
   ○ Top level operation will always be ‘equal’
   ○ RHS will always be a fixed number
   ○ LHS can be complex. ​ But there will only be a single variable reference (x)​ that
   occurs somewhere in the LHS. All other leaf nodes will be fixed numbers.
