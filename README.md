# StreamOneProject - C Edney Builders Website

## Project Brief

I was asked by one of my work colleagues to build a small website for his dads business, C Edney Builders. He has been trading for many years, but currently has no online presence. He requested a simple 5 page site, so prospective clients can find out some information about the company, the various services that they offer, a place where he could showcase some of the work he has completed and a page to display contact information and provide a contact form for clients to contact him by.

He also requested a simple Quote Calculator be constructed to give prospective clients a rough idea of what they might pay for his services. The calculator would pose a few questions for the client to answer and derive a price form their responses.

He would also like to show links to his social media on the website to promote his online presence more.

The images and the text content will be provided by the client.

The website will contain the following pages:

1. Home Page
2. About Us
3. Services
4. Quote Calculator
5. Portfolio
6. Contact Us

## Technologies Used

* HTML5
* CSS3
	* Bootstrap 3.3.7
* Fonts
	* Open Sans - [https://fonts.google.com/specimen/Open+Sans](https://fonts.google.com/specimen/Open+Sans)
	* Righteous - [https://fonts.google.com/specimen/Righteous](https://fonts.google.com/specimen/Righteous)
	* Font Awesome - [https://fontawesome.com](https://fontawesome.com)
* jQuery 3.3.1
* AngularJS 1.6.5
	* Angular Route 1.6.8
	* Angular Messages 1.6.9
* Bootstrap
	* The website will be constructed using HTML5 and the Bootstrap Framework to provide a responsive layout. 
	* A custom theme will be written in CSS3 to give the site its colour scheme and look and feel. 
	* The carousel from Bootstrap will be used on the Portfolio page to showcase images, custom CSS will be added to change the look.
	* The Quote Calculator is made using Bootstrap collapse panels in an accordion style.
* AngularJS is used to create the website:
	* Routes is used to create a single page website.
	* Form validation is handled via Angular and Messages is used to display custom error messages under form fields.
	* The Quote Calculator makes use of Angular form validation, an API call to [Ideal Postcodes](http:/www.ideal-postcodes.co.uk) to find address details, Angular Switch statements to control what fields are shown based on user selections.
* GoogleMaps will be used on the contact us page to show the office location.

## Testing

The website was tested on various devices (desktop, iPhone and iPad) to check layout and style is correct on all resolutions. Responsive Design Mode in the browser Safari was also used to check the responsive layout.

## Deployment

The finished project will be deployed on the clients website [http://www.cedneybuilders.com](http://www.cedneybuilders.com) using FTP.
