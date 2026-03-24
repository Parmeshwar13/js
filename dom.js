//innertext and textcontent
//innerText gives the visible text of an element, while textContent gives all the text,
//  including hidden elements. 
// innerText is affected by CSS styles, 
// while textContent is not. 
// innerText triggers a reflow to get the visible text, while textContent does not.
//  innerText is slower than textContent because it has to calculate the visible text, 
// while textContent simply returns the text content of the element.

//innerHTML
//method is used to get or set the HTML content of an element
//syntax
// element.innerHTML
// element.innerHTML=html
// document.getElementById('title').innerHTML
//output=Hello World<span id="span">I am a span</span>
// document.getElementById('title').innerHTML='<h2> Hello World </h2>'
//output=Hello World is replaced by Hello World in h2 tag

//getElementById
//method is used to access an element by its id attribute
//syntax
// document.getElementById(id)

// const title=document.getElementById('title')
// console.log(title)
//document.getElementById('title').id
//output=title
//document.getElementById('title').innerText
//output=Hello World
//document.getElementById('title').textContent
//output=Hello World



//document.getElementById('title').className
//output=text-white

//style property
//method is used to access the style of an element
//syntax
// element.style.property
// document.getElementById('title').style.color
//output=white
// document.getElementById('title').style.fontSize
//output=undefined

//we can also set the style of an element using the style property
// document.getElementById('title').style.color='red'
// document.getElementById('title').style.fontSize='30px'

//getElementsByClassName