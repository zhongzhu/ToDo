/*
 * File: app/view/MainView.js
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

Ext.define('ToDo.view.MainView', {
    extend: 'Ext.tab.Panel',
    alias: 'widget.mainView',

    requires: [
        'Ext.tab.Bar',
        'Ext.navigation.View',
        'Ext.dataview.List',
        'Ext.XTemplate',
        'Ext.navigation.Bar',
        'Ext.Button'
    ],

    config: {
        fullscreen: true,
        tabBar: {
            docked: 'bottom'
        },
        items: [
            {
                xtype: 'navigationview',
                title: 'ToDo',
                iconCls: 'home',
                itemId: 'todoNavigationView',
                items: [
                    {
                        xtype: 'list',
                        title: 'Things to do',
                        itemId: 'todoList',
                        itemTpl: [
                            '<div>P{priority}. {name}</div>'
                        ],
                        store: 'TaskStore',
                        onItemDisclosure: false
                    }
                ],
                navigationBar: {
                    docked: 'top',
                    itemId: 'todoNavBar',
                    items: [
                        {
                            xtype: 'button',
                            align: 'right',
                            itemId: 'addButton',
                            iconCls: 'add'
                        }
                    ]
                }
            },
            {
                xtype: 'navigationview',
                title: 'Done',
                iconCls: 'organize',
                itemId: 'doneNavigationView',
                items: [
                    {
                        xtype: 'list',
                        title: 'What\'s done',
                        itemId: 'doneList',
                        itemTpl: [
                            '<div>P{priority}. {name}</div>'
                        ],
                        store: 'CompletedStore'
                    }
                ],
                navigationBar: {
                    docked: 'top',
                    itemId: 'doneNavBar',
                    items: [
                        {
                            xtype: 'button',
                            align: 'right',
                            itemId: 'clearAllButton',
                            iconCls: 'delete'
                        }
                    ]
                }
            }
        ]
    }

});