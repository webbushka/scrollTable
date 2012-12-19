Scroll Table
===========

Version: 1.0.1
Requires: [jQuery](http://jquery.com)	
Demo: [jsfiddle](http://jsfiddle.net/aFMaJ/1/)  
Git: [https://github.com/webbushka/scrollTable](https://github.com/webbushka/scrollTable)

Description
-----------
A simple jQuery plugin to create a scrollable table. Please feel free to fork and contribute!

Example
-------

	$('table').scrollTable({  
		scrollBar: true,
		scrollHeight: 200
	});

Options
-------

###headerClass
*type: string*  
*default: scrollHeader*  
The class applied to the header element

###headerHeight
*type: number*  
*default: height of either thead or first tr*  
the height of the header (automatically calculated but available to tweak)

###scrollBar 
*type: boolean*  
*default: true*  
Whether or not to account for the scroll bar (if false the scrollbar overlaps the content)

###scrollClass 
*type: string*  
*default: scrollArea*  
The class applied to the scroll area

###scrollHeight
*type: number*  
*default: 300*  
The max height of the scroll area

Changelog
---------
* v1.1 - Reworked the table header to be the clone  
* v1.0.2 - Bug fixes on accounting for the scrollbar.
* v1.0.1 - Remove the padding and margin from the table to ensure the scrollArea and headerHeight are accurate  
* v1.0 - Inital Commit	

Credit
------
[Jonathan Sharp](http://jdsharp.us/jQuery/minute/calculate-scrollbar-width.php) Calculating The Browser Scrollbar Width.

<br /><br />
Copyright 2012 (c), AJ Webb [https://github.com/webbushka/](https://github.com/webbushka/)   
Licensed under
[MIT](https://github.com/webbushka/scrollTable/master/MIT-LICENSE.txt)