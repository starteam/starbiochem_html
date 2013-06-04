define(['../StarBiochem/main'], function (StarPractice) {
    return {
        configure: function (config) {
//        	alert("StarBiochem.js:configure");
            if (StarBiochem) {
                StarBiochem.configure(config);
            }
        }
    }
});
