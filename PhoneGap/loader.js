$(function() {
var config = {
    "molecule":"StarBiochem/data/1EBM.pdb",
    "element_id": "test"
};

var base_url = "";

requirejs.config({
                    baseUrl: base_url,
                    paths: {
                        "jquery": base_url + "libs/jquery-1.10.1.min",
                        "jquery-ui": base_url + "libs/jquery-1.10.3.ui.min",
                        "jquery-ui-css": "http://code.jquery.com/ui/1.10.3/themes/smoothness/jquery-ui"
                    },
                    map: {
                        '*': {
                            'css': 'StarX/css'
                        }
                    }
                });

require(['StarBiochem/main'], function(project){
    project.configure(config);
});
});