/*
 * File: app/view/AddTaskView.js
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

Ext.define('ToDo.view.AddTaskView', {
    extend: 'Ext.form.Panel',
    alias: 'widget.addTaskView',

    requires: [
        'Ext.form.FieldSet',
        'Ext.field.TextArea',
        'Ext.field.Select',
        'Ext.Button'
    ],

    config: {
        itemId: 'saveButton',
        items: [
            {
                xtype: 'fieldset',
                items: [
                    {
                        xtype: 'textfield',
                        itemId: 'name',
                        label: 'Name',
                        name: 'name',
                        required: true
                    },
                    {
                        xtype: 'textareafield',
                        itemId: 'description',
                        label: 'Description',
                        name: 'description'
                    },
                    {
                        xtype: 'selectfield',
                        itemId: 'priority',
                        label: 'Priority',
                        name: 'priority',
                        options: [
                            {
                                text: 'High',
                                value: 1
                            },
                            {
                                text: 'Medium',
                                value: 2
                            },
                            {
                                text: 'Low',
                                value: 3
                            }
                        ]
                    }
                ]
            },
            {
                xtype: 'button',
                itemId: 'saveButton',
                margin: 10,
                ui: 'action-round',
                text: 'Save'
            }
        ]
    }

});