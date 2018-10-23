# Vanilla JavaScript Workshop

## DOM Manipulation

DOM is a node-tree. 
	
Getting an HTML Element
	* document.getElementById
	* document.querySelector[All]

Setting inline-styles
	* element.style.[style-name] = [string-value]
	
Event Listeners
	* element.addEventListener([type], [function])
	* element.removeEventListener([type], [function])

Setting Text Content
	* element.textContent = [string]
Setting HTML Content
	* element.innerHTML = [string]

Creating HTML Elements
	* document.createElement([tag-name])
	* create an element on the shapes demo, apply styles and put it into the dom
	* brian code challenge: https://codepen.io/nate_08/pen/rrPNOK
Place Element on DOM
	* element.appendChild([element])
Open modal by applying class to body (see demos)

Patterns
	* `main` function in document.body DOMContentLoaded event listener

See Demos

MISC:
	* window.scrollTo({top:[number],left:[number],behavior:'smooth'})