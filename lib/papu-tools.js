//Copyright (c) 2015 Benjamin Vellacott
//
//Permission is hereby granted, free of charge, to any person obtaining a copy of
//this software and associated documentation files (the "Software"), to deal in
//the Software without restriction, including without limitation the rights to
//use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
//of the Software, and to permit persons to whom the Software is furnished to do
//so, subject to the following conditions:
//
//The above copyright notice and this permission notice shall be included in all
//copies or substantial portions of the Software.
//
//THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
//IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
//FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
//AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
//LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
//OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
//SOFTWARE.

// Check for dependencies
if(!$)
	throw "jQuery required";
var Papu = {
	// A general mehod to check if a value is defined
    defined : function(val) { return (typeof val !== 'undefined' && val != undefined); },
    // A method to request a handlebars/htmlbars template fileand register it under a 
    // list of names
    requireTemplate : function(url, names) {
  	   $.ajax({url: url,
  	       async: false,
  	       success: function(templateText) {
  	           var compiledTemplate = Ember.HTMLBars.compile(templateText);
  	           for(var i = 0; i < names.length; i++)
  	        	   Ember.TEMPLATES[names[i]] = compiledTemplate
  	       }
  	   });
  	},
    getFileContents : function(url, cb) {
  	   $.ajax({url: url,
  	       async: false,
  	       success: function(txt) { cb(txt); }
  	   });
  	},
};
