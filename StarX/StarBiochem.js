define(['StarBiochem/main'], function (StarBiochem) {
    return {
        configure: function (config) {
//        	alert("StarBiochem.js:configure");
            if (StarBiochem) {
                StarBiochem.configure(config);
            }
        }
    }
});
