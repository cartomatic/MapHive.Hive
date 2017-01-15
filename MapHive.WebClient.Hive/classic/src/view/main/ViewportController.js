//Disable some of the JSLint warnings
/*global window,console,Ext*/
(function(){
    //Make sure strict mode is on
    'use strict';

    /**
     * Created by domin on 4/15/2016.
     */
    Ext.define('Hive.view.main.ViewportController', {

        extend: 'Ext.app.ViewController',
        alias: 'controller.main-view',

        requires: [
        ],

        mixins: [
            'mh.communication.MsgBus'
        ],

        /**
         * Called when the view is created; need to create the iframe to host the configured apps
         */
        init: function() {

            var iframeId = 'hosted-apps-iframe';

            this.getView().add(
                [
                    {
                        flex: 1,
                        xtype: 'container',
                        reference: 'appContainer',
                        html: '<iframe id="' + iframeId + '" src="about:blank" style="width:100%;height:100%;border:none;">'
                    }
                ]
            );

            //iframe has been set up, so just notify whoever cares about it - app reloader module in thi case
            this.fireGlobal('root::setuphostiframe', iframeId);


            //since this view is a host for the iframed apps, some of them may require own splashscreen, for others customised load mask can be provided
            this.watchGlobal('root::appreloadstart', this.onAppReloadStart, this);
            this.watchGlobal('mhapp::loaded', this.unmask, this);
            this.watchGlobal('mhapp::hidehostmask', this.unmask, this);

        },

        onAppReloadStart: function(app){
            //use own load mask if the app specifically does not require using own splashscreen
            if(!app.get('useSplashscreen')){
                this.lookupReference('appContainer').mask('Application is loading...');
            }
        },

        unmask: function(){
            this.lookupReference('appContainer').unmask();
        }
    });

}());