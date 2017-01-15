//Disable some of the JSLint warnings
/*global Ext,console,MapHive,mh*/
(function(){
    //Make sure strict mode is on
    'use strict';

    Ext.define('Hive.view.main.Viewport', {
        extend: 'Ext.panel.Panel',

        requires: [
            'Ext.plugin.Viewport',
            'Hive.view.main.ViewportController'
        ],

        plugins: 'viewport',

        border: false,


        xtype: 'main-view',

        controller: 'main-view',

        layout: 'fit'
    });

}());