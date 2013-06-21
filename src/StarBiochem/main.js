define([
    'jquery'
], function ($) {
    var starbiochem_state;
    function init_starbiochem_state() {
        var state = {
        };
        state.width = 300;
        state.height = 300;
        state.color = "green";
        state.debug = false;
        state.addSelectionOptions = false;
        state.serverURL = "http://chemapps.stolaf.edu/jmol/jsmol/jsmol.php";
        state.use = "HTML5";
        state.j2sPath = "src/StarBiochem/jsmol/j2s";
        state.readyFunction = jmol_isReady;
        state.script = "set antialiasDisplay;load jsmol/data/caffeine.mol;";
        state.disableJ2SLoadMonitor = true;
        state.disableInitialConsole = true;
        state.toggle = true;
        state.element_id = "StarX_";
        state.element_id_starbiochem = state.element_id + "_starbiochem";
        state.element_id_starbiochem_jmol = state.element_id + "_starbiochem_jmol";
        state.element_id_starbiochem_ui = state.element_id + "_starbiochem_ui";
        state.element_id_starbiochem_ui_button = state.element_id + "_starbiochem_ui_button";
        return state;
    }
    function parse_config(config_obj) {
        starbiochem_state = init_starbiochem_state();
        if(starbiochem_state) {
            starbiochem_state.element_id = config_obj.element_id;
            starbiochem_state.height = config_obj.height ? config_obj.height : 300;
            starbiochem_state.width = starbiochem_state.height;
            starbiochem_state.color = config_obj.background ? config_obj.background : "green";
            starbiochem_state.script = config_obj.molecule ? "set antialiasDisplay;load " + config_obj.molecule + ";" : "set antialiasDisplay;load jsmol/data/caffeine.mol;";
            starbiochem_state.debug = false;
            alert("main.parse_config molecule: " + config_obj.molecule + " script: " + starbiochem_state.script);
        } else {
            console.log("starbiochem_state is not initialized by parse_config");
        }
    }
    function jmol_isReady(applet) {
        if(starbiochem_state) {
            var ui = $('#' + starbiochem_state.element_id_starbiochem_ui);
            ui.append(" <button id='" + starbiochem_state.element_id_starbiochem_ui_button + "'>starbiochem_button</button>");
            initialize_starbiochem_UI_Behavior();
            initialize_starbiochem_UI_LAF();
        } else {
            console.log("starbiochem_state is not initialized");
        }
    }
    function initialize_starbiochem_UI_Behavior() {
        var button = $('#' + starbiochem_state.element_id_starbiochem_ui_button);
        button.click(function () {
            var viewer = starbiochem_state.jsmol;
            if(starbiochem_state.toggle) {
                starbiochem_state.toggle = false;
                Jmol.script(viewer, "select *; rotate;");
                Jmol.script(viewer, "select *; isosurface vdw;");
            } else {
                starbiochem_state.toggle = true;
                Jmol.script(viewer, "select *; rotate 0;");
                Jmol.script(viewer, "select *; isosurface DELETE;");
            }
            ;
        });
    }
    function initialize_starbiochem_UI_LAF() {
        var viewer = starbiochem_state.jsmol;
        var button_addr = '#' + starbiochem_state.element_id_starbiochem_ui_button;
        var button = $(button_addr);
        var starbiochem_addr = '#' + starbiochem_state.element_id_starbiochem;
        var starbiochem = $(starbiochem_addr);
        starbiochem.append("<style>" + starbiochem_addr + " {border:'1px blue solid';}</style>");
        var ui = $('#' + starbiochem_state.element_id_starbiochem_ui);
        ui.append("<style>" + button_addr + " {background-color:rgba(0,122,0,0.6); position:absolute; top:10px; left:10px;}</style>");
    }
    function initialize_UI() {
        var element = $('#' + starbiochem_state.element_id);
        var default_height_html = " height=" + starbiochem_state.height + " ";
        element.append("<span id='" + starbiochem_state.element_id_starbiochem + "' " + default_height_html + "></span>");
        var starbiochem = $('#' + starbiochem_state.element_id_starbiochem);
        starbiochem.data("starbiochem_state", starbiochem_state);
        starbiochem.append('<script type="text/javascript" src="src/StarBiochem/jsmol/js/JSmoljQuery.js"></script> <script type="text/javascript" src="src/StarBiochem/jsmol/js/JSmolCore.js"></script> <script type="text/javascript" src="src/StarBiochem/jsmol/js/JSmol.js"></script> <script type="text/javascript" src="src/StarBiochem/jsmol/js/JSmolApplet.js"></script> <script type="text/javascript" src="src/StarBiochem/jsmol/js/JSmolControls.js"></script> <script type="text/javascript" src="src/StarBiochem/jsmol/js/JSmolApi.js"></script> <script type="text/javascript" src="src/StarBiochem/jsmol/js/j2sjmol.js"></script>');
        starbiochem.append("<span id='" + starbiochem_state.element_id_starbiochem_jmol + "' " + default_height_html + "></span>");
        starbiochem.append("<span id='" + starbiochem_state.element_id_starbiochem_ui + "' " + default_height_html + "></span>");
        Jmol.setXHTML(starbiochem_state.element_id_starbiochem_jmol);
        starbiochem_state.jsmol = Jmol.getApplet(starbiochem_state.element_id_jmol, starbiochem_state);
    }
    return {
        configure: function (config) {
            parse_config(config);
            initialize_UI();
        }
    };
});
//@ sourceMappingURL=main.js.map
