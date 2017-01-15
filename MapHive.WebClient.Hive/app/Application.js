(function(){
    //Make sure strict mode is on
    'use strict';
    
    /**
     * Created by domin on 15.01.2017.
     */
    Ext.define('Hive.Application', {
        extend: 'mh.Application',

        requires: [
            'Hive.AppLauncher'
        ],

        name: 'Hive',

        // //global shared controllers - they fire up automatically
        controllers: [
            //use the customised Root
            'Hive.controller.Root',

            //use the default auth
            'mh.controller.Auth',

            'mh.controller.Splash'
        ],

        //custom launcher class. this is where most app customisations take place
        appLauncher: 'Hive.AppLauncher',

        onLaunchApp: function(){

            //first make sure the base does what's required!

            //note: need to drilldown 2 levels, as in fact, this will be an instance of the app defined and launched in the app.js!
            //this is needed, as the core funtionality is borrowed from the generic mh.Application
            this.superclass.superclass.onLaunchApp.call(this);


            //the default mh.Application simply hides the splash screen, creates an instance of appLauncher and fires mhapp::loaded when ready
            //so at this stage our host application UI should be fully created


            //Looks like we're ready to go now - host app is loaded,
            //so need to trigger loading of a hosted application.
            this.fireGlobal('root::loadhostedapp');

            //start the external route watcher - this will watch changes advised by a child, and pass own changes to a child
            this.fireGlobal('root::watchexternalroutes', {hosted: true});
        }
    });
    
}());