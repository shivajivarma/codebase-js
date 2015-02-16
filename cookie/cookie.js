var cookieFunctions = {

	/* Function to set JSON Object as cookie */
	setObjectCookie : function (object) {
		createCookie('jsoncookie', JSON.stringify(cookie), 1);
	},

	/* Function to retrieve and reconstruct Object cookie */
	getObjectCookie : function () {
		cookie = JSON.parse(readCookie('jsoncookie'));
		return cookie;
	},

	/* Function to set cookie */
	setCookie : function (name, value, days) {
		if (days) {
			var date = new Date();
			date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
			var expires = "; expires=" + date.toGMTString();
		} else
			var expires = "";
		document.cookie = escape(name) + "=" + escape(value) + expires + "; path=/";
	},
	
	/* Function to get cookie */
	getCookie : function (name) {
		var nameEQ = escape(name) + "=";
		var ca = document.cookie.split(';');
		for (var i = 0; i < ca.length; i++) {
			var c = ca[i];
			while (c.charAt(0) == ' ')
				c = c.substring(1, c.length);
			if (c.indexOf(nameEQ) == 0)
				return unescape(c.substring(nameEQ.length, c.length));
		}
		return null;
	},
	
	/* Function to delete cookie */
	eraseCookie : function (name) {
		createCookie(name, "", -1);
	}
}
