if (typeof Object.create !== 'function') {
    Object.create = function (o) {
        function F() {}
        F.prototype = o;
        return new F();
    };
}

(function(document, window, undefined){

	var _Youtube = Object.create({
		init: function( params ){
			console.log("Created");
			if( typeof params === "object" ){
				this.settings.clientID = params.client_id,
				this.settings.redirectURI = params.redirect_uri,
				this.settings.responseType = params.response_type,
				this.settings.scope = params.scope,
				this.settings.approvalPrompt = params.approval_prompt,
				this.settings.state = params.state
			}
		},
		settings: {
			client_id 			: "",
			redirectURI 		: "",
			responseType 		: "",
			scope 				: "",
			approvalPrompt		: "",
			state 				: ""
		},
		apis: {
			authorize		: "https://accounts.google.com/o/oauth2/auth"
		}
	})

	function Youtube( params ){
		var obj = _Youtube;
		obj.init( params );
		return obj;
	}

	if( typeof window === "object" ){
		window.Youtube = Youtube;
	}

})(document, window);