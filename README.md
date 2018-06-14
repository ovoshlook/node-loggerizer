# node-loggerizer
Small and short logger, allows to manipulate with levels

<H1>Description</H1>

Allows to manipulate logging by levels. Here are only 5 levels such as:
<b>"ERROR","WARNING","INFO","NOTICE","DEBUG"</b> associated with levels by numbers like:
1,2,3,4,5. 

Means if "3" is defined - console logging will show ERROR,WARNINIG and INFO levels.

<H1>Usage</H1>

IT is really easy to use. Just create new loggerizer object
<p>
<code>
const Loggerizer 	= require('loggerizer');
</code>
<code>
const loggerizer 	= new Logger(5); 
</code>

And use:
<p>
<code>
loggerizer.print("INFO","We are started here");
</code>
<code>
loggerizer.print("DEBUG","Hewston - We have a trouble");
</code>
