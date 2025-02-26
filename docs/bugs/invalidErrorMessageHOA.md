
## Incorrect error message logic for HOA field 

### Description
The current error message logic for the all fields numeric fields is:
'chat input for number field' is not a valid number // which displays inputted value at the start of the error message


But for the HOA field the error message is:
'HOA' is not a valid number // for all char-typed values being passed to the field

Severity: Low
Priority: Medium

### Steps to Reproduce
1. Open the Zillow Mortgage Calculator
2. Click / Tap on the "HOA" field
3. Enter any char-typed value
4. Click / Tap on the "Enter" button


### Expected Result
The error message should be: 'Passed to the field  char-typed value' is not a valid number // for all char-typed values being passed to the field

### Actual Result
The error message is: 'HOA' is not a valid number // for all char-typed values being passed to the field


#### Attachment
https://drive.google.com/file/d/1dGBu9LWlPBz5xnd9pnATgK_ZxNa9VF95/view?usp=sharing