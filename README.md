starbiochem_html
=================

StarBiochem is an educational tool that uses JSmol visualization for molecules and a modest UI based on concepts from structural biology to drive JSmol. 
The intent is to provide students and other users with a relatively easy way to select components of a molecule and modify their appearance to make exploring the molecule easier.

To use starx you need the following (StarBiochem example):

	index.html is a minimal standalone version of StarPractice and is an example of how to use StarPractice in other html contexts.

	StarX contains the essential StarX components:
		- require.js contain the define, require functions needed by starx.js
		- starx.js loads StarX widgets from the {[...]} StarX widget tag description.
		- StarBiochem.js (tells StarX where the StarBiochem main.js is located) 
		- (other StarX widgets similar in form to StarBiochem.js)
	
	StarBiochem (JavaScript for creating StarBiochem, UI)
		- main.js
		- other supporting js files for StarBiochem
		
	TODO: StarBiochem functionality needed:
		- UI based on the java version of StarBiochem
		- UI modification based on new UI design.


Techniques:

DEBUGGING:

Used to determine if the starx configuration was loading StarPractice
$('#' + config.element_id).html(StarPractice ? "Loading StarPractice" : "Failed initializing StarPractice");


CODING CONVENTIONS:

http://javascript.crockford.com/code.html (not a perfect coding style, but a start)
This example can be used in Star<widget>/main.js. Note use of try/catch
	function parse(str)
	{
		try {
			var json = "{" + str.substr(2,str.length-4) + "}" ;
			var data = JSON.parse(json);
			console.info( data ) ;  
		} catch(e) {
			return "STARX: ERROR PARSING: " + str.substr(2,str.length-4) + ":ERROR PARSING :STARX" ;
		}
	}
			
			
THINGS TO EXPLORE

1. PhoneGap Build
	http://phonegap.com/blog/2013/02/18/getting-started-with-phonegap-and-phonegap-build/
	http://tv.adobe.com/watch/building-mobile-apps-with-phonegap-build/introduction-to-phonegap-build-building-your-first-app/
2. Cordova in Eclipse
	http://cordova.apache.org/docs/en/2.5.0/guide_getting-started_android_index.md.html#Getting%20Started%20with%20Android
3a. Sending Text Messages from your StarPractice to yourself w/ phone# and carrier
	http://benchmarkreviews.com/?id=21269&Itemid=38&option=com_content&task=view 
	http://www.daniweb.com/web-development/coldfusion/threads/16344/send-a-text-message-to-your-phone-from-your-site
	http://www.livejournal.com/tools/textmessage.bml?mode=details
	http://stackoverflow.com/questions/4367225/sending-sms-to-mobile-phones-via-javascript
3b. Sending email from phonegap
	http://stackoverflow.com/questions/14040371/sending-email-using-phonegap
3c. Notification services
	http://stackoverflow.com/questions/13506899/custom-push-notification-to-mobile-devices
	android: http://developer.android.com/google/gcm/index.html
	ios: http://developer.apple.com/library/mac/#documentation/NetworkingInternet/Conceptual/RemoteNotificationsPG/Introduction.html
	http://twitter.github.io/bootstrap/
4. Running apps in both desktop browsers and mobile devices
	http://stackoverflow.com/questions/6159712/phonegap-web-app-in-regular-desktop-browsers
	http://bricklin.com/html5gap.htm - "no UI"
5. UI Frameworks (JQuery Mobile and Sencha Touch)
	JQuery Plugin: http://twitter.github.io/bootstrap/
6. UI requirements (Apple App Store)
7. UI Widgets
	time:  			http://www.simile-widgets.org/ (Timeline - not sure how to use this, but it is a scaffold for memorization.)
	space: 			Map of where things happened.
	concepts:		Named things to be remembered
	concept map:	How named things are related
	
	StarORF
		
