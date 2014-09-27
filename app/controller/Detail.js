/*
 * File: app/controller/Detail.js
 *
 * This file was generated by Sencha Architect version 3.1.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.3.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.3.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('ToDo.controller.Detail', {
    extend: 'Ext.app.Controller',

    requires: [
        'ToDo.view.DetailView',
        'ToDo.view.MainView'
    ],

    config: {
        refs: {
            todoView: 'mainView #todoNavigationView',
            detailView: 'detailView'
        },

        control: {
            "detailView #saveButton": {
                tap: 'onSaveButtonTap'
            },
            "detailView #deleteButton": {
                tap: 'onDeleteButtonTap'
            }
        }
    },

    onSaveButtonTap: function(button, e, eOpts) {
        var detailView = this.getDetailView(),
            values = detailView.getValues(),
            record = detailView.getRecord(),
            store = Ext.getStore('TaskStore');
        record.setData(values);
        record.setDirty();

        if (record.isCompleted) {
            var completedStore = Ext.getStore('CompletedStore');
            completedStore.add(record);
        }

        store.sync();
        console.log(store);

        this.getTodoView().pop();
    },

    onDeleteButtonTap: function(button, e, eOpts) {
        var detailView = this.getDetailView(),
            record = detailView.getRecord(),
            store = Ext.getStore('TaskStore');
        store.remove(record);
        store.sync();

        this.getTodoView().pop();
    }

});