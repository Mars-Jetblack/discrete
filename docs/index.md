* {
font-family: 'Istok Web', sans-serif;
  padding:  0px;

}

body{
	
	overflow-x:hidden;
	background-size: cover;
	background-repeat:  no-repeat;
	background-position: center center;
	animation-duration:  2s;
	background-attachment: fixed;
	text-align: center;

}

h2{
	color:  #ffffff;
}



.wrap{
	position:  unset !important;
	overflow-y:  scroll;
}

#main{
	background:  #0d0d0d;
}

a:visited { 

	 text-decoration: overline;
	 font-style: normal;
	 color: orange;
}

a:link, a:visited {

		filter:  grayscale(100%);
  color: white;

  text-decoration: none;
  display: inline-block;

}

a:hover {

	filter:  grayscale(100%);
	animation-name:  hover-animation;
	animation-fill-mode:  forwards;
	animation-duration:  0.29s;

}

a:active{
	background-color:  orange;
}

.gallery__grid-item-description{
	display:  none;
}

.gallery__grid-item-header{

	font-size:  20px;
}

.gallery__grid-item-header:hover + .gallery__grid-item-description{


	margin:  0 auto;
	display:  block;
	font-size: 15px;
	width: 270px;
}

.up{

	position:  absolute;
}

.header{
	animation-name: main-animation;
	animation-duration:  2s;
	position:  absolute;
	display:  block;
	text-align: center;
	right: 0;
	left:   0;
}

.content{
	position: absolute;
	width:  100%;
	height:  720px;
	text-align: center;
	font-size: 1em;
	color: white;
	animation-name: main-animation;
	animation-duration:  2s;
	bottom: 0;
	right: 0;
	left: 0;
}

.blank-space{
	margin:  -10px;
	height:  150px;
		text-align: center;
	right: 0;
	left:   0;
	background:  #0d0d0d;
}

.article{
	width:  1000px;
}

html::-webkit-scrollbar {
    width: 16px;
    height: 16px;
}

html::-webkit-scrollbar-thumb {
    background: #ffff;
    border-radius: 16px;
    box-shadow: inset 2px 2px 2px hsla(0,0%,100%,.25),inset -2px -2px 2px rgba(0,0,0,.25);
}

html::-webkit-scrollbar-thumb:hover {
    background: green
}
html::-webkit-scrollbar-track {
    background: #000000;
}

.disclaimer{

	background:  #0d0d0d;
	margin:  -10px;
	text-align: center;
/* these values are going to descentrilaze the container
	width:  550px;
	height:  550px;
	*/
}

.header__uptext__containter{
	background:  black;
	margin: -10px;
	padding:  20px 55px;
}

.header__uptext{
	text-align: left;
	font-size: 0.5em;
}

.header__uptext__menu-grid-container{
	display:  grid;
	grid-template-columns: repeat(5, 5em);
	align-items:  left;
	margin:  -10px;
}

.header__uptext__menu-grid-item{
	font-size:  10px;
	padding:  0px;
}


.header__title{
	font-size: 2.5em;
	color:  white;
}

.header__subtitle{
	font-size: 1.5em;
}

.gallery{
	margin: -10px;
	background: #0d0d0d;
	padding:  0px;
}

.gallery__grid-container{
	display:  grid;
	margin:  -90px;
	grid-template-columns: repeat(4, 0.2fr);
	grid-template-rows:  290px 290px;
	justify-content: center;
	align-items:  center;
}

.gallery__grid-item{
	width:  190px;
	height: 190px;
	font-size:  10px;
	margin:  0 auto;
	font-style:  italic;
	  padding:  15px;
}

.images{
	width:90;
}

@media screen and (min-width:  4200px){
	.content{
		flex-direction:  row;
	}
}

@media screen and (max-width:  2500px){
	.gallery__grid-container{
		grid-template-columns: repeat(2, 1fr);
		grid-template-rows:  290px 290px;
	}
}

/* animations */

@keyframes hover-animation{
 100%{

	filter:  grayscale(0%);
	background-color: green;
 }
}

@keyframes gallery-item-description-hover-animation{
 100%{
	background-color: green;
 }
}

@keyframes main-animation{

 0%{

 	background-blend-mode:  color;
	filter: brightness(0%);
 }
 100%{
	filter: none;
 }
}

/*news section*/

.article__title{
	font-size: 1.5em;
}


