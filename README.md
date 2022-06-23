<h1 align="center">Kekstagram - image viewing service.</h1>

<p align="left">
  <img src="https://img.shields.io/badge/made%20by-ivanel-red.svg">
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/ivan-el/kekstagram?color=red">
  <img alt="GitHub commit activity" src="https://img.shields.io/github/commit-activity/y/ivan-el/kekstagram?color=red">
</p>

<img src="build/img/kekstagram-preview.png" width="100%">

<h2>Description</h2>
<p>Kekstagram users are given the opportunity to upload their own photos or view photos uploaded earlier by other users.</p>
<p>Images from other users are downloaded immediately after the page is opened from a remote server. To request data, I used Fetch API.</p>

<img src="build/img/data-preview.png" width="100%">

<p>If a request error occurred while downloading data from the server, a warning message and temporary data are displayed.</p>

<img src="build/img/data-error-preview.png" width="100%">

<p>After the successful completion of uploading all the photos, it becomes possible to filter them:</p>
<ul>
  <li>"Default" — photos in the original order from the server;</li>
  <li>"Random" — 10 random, non-repeating photos;</li>
  <li>"Discussed" — photos sorted in descending order of the number of comments.</li>
</ul>

<img src="build/img/filter-preview.gif" width="100%">

<p>When you click on any of the thumbnails, a full-screen image with comments.</p>

<img src="build/img/fullscreen-preview.gif" width="100%">

<p>Uploading image is done using the standard file upload control, which is stylized as the letter "O" in the logo. After uploading the image, you can view its preview and edit it. For example:</p>

<p>Adjust zoom.</p>

<img src="build/img/scale-preview.gif" width="100%">

<p>Apply an effect and adjust the Intensity of the effect by moving the track in the slider.</p>

<img src="build/img/effect-preview.gif" width="100%">

<p>Add hash tags and comment. When you write a hash tag or comment, a validation hint appears</p>

<img src="build/img/validation-preview.gif" width="100%">

<p>After filling in all the fields, data from the form, including images, is sent to the server using fetch.</p>

<img src="build/img/send-preview.png" width="100%">

<h3>About the project.</h3>

<p>Kekstagram is my first project in which I wrote only javaScript code.</p> 

<p>In this project, I used the main features of Javascript. Used built-in objects and functions. I got acquainted with the DRY principle and modules. Worked with DOM and events. I got acquainted with external APIs and third-party libraries. Interacted with the network considered the HTTP protocol, the JSON data format. I worked with asynchrony and achieved it with the help of promises. Created a simple build on webpack.</p>

<h3>Technologies.</h3>

<ul>
  <li>JavaScript ES6+</li>
  <li>Chrome DevTools</li>
  <li>Webpack 5</li>  
</ul>

