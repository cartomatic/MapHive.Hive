(function(){
    //Make sure strict mode is on
    'use strict';
    
    /**
     * Created by domin on 15.01.2017.
     */
    Ext.define('Hive.controller.Root', {
        extend: 'mh.controller.Root',

        /**
         * Called when the view is created
         */
        init: function(){
            //first make sure to init the base stuff!
            this.superclass.init.call(this);
        },

        /**
         * A simple override - host does not use a standard cfg, so needs to suppress the default cfg call
         */
        getUserConfiguration: function(){
            this.fireGlobal('root::launchapp');
        }
    });
    
}());

