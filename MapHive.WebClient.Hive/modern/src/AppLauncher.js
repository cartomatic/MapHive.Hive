//Disable some of the JSLint warnings
/*global Ext,console,MapHive,mh*/
(function(){
    //Make sure strict mode is on
    'use strict';
    
    /**
     * Created by domin on 4/14/2016.
     */
    Ext.define('Hive.AppLauncher', {

        requires: [
            'Hive.view.main.Viewport'
        ],

        constructor: function(config){

            //Do whatever the customisation are required - running in an iframe vs standalone...

            //init the GUI
            Ext.create('Hive.view.main.Viewport');
        }
    });
}());