# node-loggerizer
Small and short logger, allows to manipulate with levels

# Description

Allows to manipulate logging by levels. Here are only 5 levels such as:
<b>"ERROR","WARNING","INFO","NOTICE","DEBUG"</b> associated with levels by numbers like:
0,1,2,3,4. 

Means if "2" is defined - console logging will show ERROR,WARNINIG and INFO levels.

# Usage

IT is really easy to use. Just create new loggerizer object

````javascript
  const Loggerizer 	= require('loggerizer');
  const loggerizer 	= new Logger(4); 
````
And use:
````javascript
loggerizer.print("INFO","We are started here");
loggerizer.print("DEBUG","Hewston - We have a trouble");
````
