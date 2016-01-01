# JSfadeinout
Pure JavaScript function for chained fade in and out or vice versa

This function can be used to perform following actions

- Fade in and out
- Fade out and in
 - Fade in
- Fade out

The function accepts following parameters

- type  - accepts string value of 'in' or 'out'. 
- ms - fade delay in miliseconds
- el - object of element for first action (fade in or out)
- callback (Optional) - pass the 'fade' function as this parameter if chained action required
- cel - object of element for second chained action (mandatory if callback function is passed)

