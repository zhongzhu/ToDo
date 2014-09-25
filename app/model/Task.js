/*
 * File: app/model/Task.js
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

Ext.define('ToDo.model.Task', {
    extend: 'Ext.data.Model',
    alias: 'model.task',

    requires: [
        'Ext.data.Field'
    ],

    config: {
        fields: [
            {
                name: 'name',
                type: 'string'
            },
            {
                name: 'description'
            },
            {
                name: 'create',
                type: 'date'
            },
            {
                name: 'completed',
                type: 'date'
            },
            {
                name: 'priority',
                type: 'int'
            },
            {
                name: 'isCompleted',
                type: 'boolean'
            }
        ]
    }
});