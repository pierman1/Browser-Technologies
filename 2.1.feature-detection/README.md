# Feature detection

## HTML5

### Feature 1 - Picture element

Het [Picture](https://developer.mozilla.org/en/docs/Web/HTML/Element/picture) element is een container die wordt gebruikt om
 meerdere `<source>` elementen te specificeren voor een specifieke `<img>`.
 Ook is het een nieuw HTML element en wordt niet door alle browsers ondersteund.
 
 - Als de browser de picture tag support, dan wordt er 1 van de drie afbeeldingen in een van de `<source>` elementen getoond. Dit
 opbasis van dew grote van je scherm (hoge, medium en lage kwaliteit).
 
 [CAN I USE THE PICTURE ELEMENT?](http://caniuse.com/picture)
 
 
 ### Feature 2 - Video element
 
```
<!-- first try HTML5 playback: if serving as XML, expand `controls` to `controls="controls"` and autoplay likewise -->
<!-- warning: playback does not work on iOS3 if you include the poster attribute! fixed in iOS4.0 -->
<video width="640" height="360" controls>
	<!-- MP4 must be first for iPad! -->
	<source src="__VIDEO__.MP4" type="video/mp4" /><!-- Safari / iOS video    -->
	<source src="__VIDEO__.OGV" type="video/ogg" /><!-- Firefox / Opera / Chrome10 -->
	<!-- fallback to Flash: -->
	<object width="640" height="360" type="application/x-shockwave-flash" data="__FLASH__.SWF">
		<!-- Firefox uses the `data` attribute above, IE/Safari uses the param below -->
		<param name="movie" value="__FLASH__.SWF" />
		<param name="flashvars" value="controlbar=over&amp;image=__POSTER__.JPG&amp;file=__VIDEO__.MP4" />
		<!-- fallback image. note the title field below, put the title of the video there -->
		<img src="__VIDEO__.JPG" width="640" height="360" alt="__TITLE__"
		     title="No video playback capabilities, please download the video below" />
	</object>
</video>
<!-- you *must* offer a download link as they may be able to play the file locally. customise this bit all you want -->
<p>	<strong>Download Video:</strong>
	Closed Format:	<a href="__VIDEO__.MP4">"MP4"</a>
	Open Format:	<a href="__VIDEO__.OGV">"Ogg"</a>
</p>
```
 
 ## CSS
 
 ### Feature 1 - Gradients
 
 CSS [Gradients](https://css-tricks.com/css3-gradients/) worden door de meeste browsers wel ondersteund of gedeeltelijk ondersteund.
 Alleen opera mini support het helemaal niet. Hieronder is rekening gehouden met de verschillende browsers die dit niet, of gedeeltelijk
 ondersteunen.
 
 Voorbeeld 1:
 
 ```
 .gradient {
      
      /* Fallback (could use .jpg/.png alternatively) */
      background-color: red;
    
      /* SVG fallback for IE 9 (could be data URI, or could use filter) */
      background-image: url(fallback-gradient.svg); 
    
      /* Safari 4, Chrome 1-9, iOS 3.2-4.3, Android 2.1-3.0 */
      background-image:
        -webkit-gradient(linear, left top, right top, from(red), to(#f06d06));
      
      /* Safari 5.1, iOS 5.0-6.1, Chrome 10-25, Android 4.0-4.3 */
      background-image:
        -webkit-linear-gradient(left, red, #f06d06);
    
      /* Firefox 3.6 - 15 */
      background-image:
        -moz-linear-gradient(left, red, #f06d06);
    
      /* Opera 11.1 - 12 */
      background-image:
        -o-linear-gradient(left, red, #f06d06);
    
      /* Opera 15+, Chrome 25+, IE 10+, Firefox 16+, Safari 6.1+, iOS 7+, Android 4.4+ */
      background-image:
        linear-gradient(to right, red, #f06d06);
    
    }
    
```

Voorbeeld 2:

```
.gradient-bg {
  background-color: #1a82f7; /* uses a solid color at worst */
  background-image: url('http://media02.hongkiat.com/code-fallback-methods/fallback-gradient.png');
  background-image: -webkit-gradient(linear, 0% 0%, 0% 100%, from(#2F2727), to(#1a82f7));
  background-image: -webkit-linear-gradient(top, #2F2727, #1a82f7);
  background-image: -moz-linear-gradient(top, #2F2727, #1a82f7);
  background-image: -ms-linear-gradient(top, #2F2727, #1a82f7);
  background-image: -o-linear-gradient(top, #2F2727, #1a82f7);
}
```

[CAN I USE GRADIENTS](http://caniuse.com/#search=gradients)

### Feature 2 - Calc()

## JavaScript

### Feature 1 - Geo location

### Feature 2 - Web notifications



