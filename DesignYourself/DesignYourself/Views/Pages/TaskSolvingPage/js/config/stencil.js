/*! Rappid v3.4.1 - HTML5 Diagramming Framework - TRIAL VERSION

Copyright (c) 2021 client IO
 2021-11-18
This Source Code Form is subject to the terms of the Rappid Trial License
, v. 2.0. If a copy of the Rappid License was not distributed with this
file, You can obtain one at http://jointjs.com/license/rappid_v2.txt
 or from the Rappid archive as was distributed by client IO. See the LICENSE file.*/
var App = App || {};
App.config = App.config || {};
(function() {
    'use strict';

    App.config.stencil = {};
    App.config.stencil.groups = {
        uml: { index: 5, label: 'UML' }
    };
    App.config.stencil.shapes = {};
    App.config.stencil.shapes.uml = [

        {
            type: 'uml.Class',
            name: 'Class',
            attributes: ['+attr1'],
            methods: ['-setAttr1()'],
            size: {
                width: 150,
                height: 100
            },
            attrs: {
                root: {
                    dataTooltip: 'Class',
                    dataTooltipPosition: 'left',
                    dataTooltipPositionSelector: '.joint-stencil'
                },
                '.uml-class-name-rect': {
                    top: 2,
                    fill: '#61549c',
                    stroke: '#f6f6f6',
                    'stroke-width': 1,
                    rx: 8,
                    ry: 8
                },
                '.uml-class-attrs-rect': {
                    top: 2,
                    fill: '#61549c',
                    stroke: '#f6f6f6',
                    'stroke-width': 1,
                    rx: 8,
                    ry: 8
                },
                '.uml-class-methods-rect': {
                    top: 2,
                    fill: '#61549c',
                    stroke: '#f6f6f6',
                    'stroke-width': 1,
                    rx: 8,
                    ry: 8
                },
                '.uml-class-name-text': {
                    ref: '.uml-class-name-rect',
                    'ref-y': 0.5,
                    'y-alignment': 'middle',
                    fill: '#f6f6f6',
                    'font-family': 'Roboto Condensed',
                    'font-weight': 'Normal',
                    'font-size': 11
                },
                '.uml-class-attrs-text': {
                    ref: '.uml-class-attrs-rect',
                    'ref-y': 0.5,
                    'y-alignment': 'middle',
                    fill: '#f6f6f6',
                    'font-family': 'Roboto Condensed',
                    'font-weight': 'Normal',
                    'font-size': 11
                },
                '.uml-class-methods-text': {
                    ref: '.uml-class-methods-rect',
                    'ref-y': 0.5,
                    'y-alignment': 'middle',
                    fill: '#f6f6f6',
                    'font-family': 'Roboto Condensed',
                    'font-weight': 'Normal',
                    'font-size': 11
                }
            }
        },
        {
            type: 'uml.Interface',
            name: 'Interface',
            attributes: ['+attr1'],
            methods: ['-setAttr1()'],
            size: {
                width: 150,
                height: 100
            },
            attrs: {
                root: {
                    dataTooltip: 'Interface',
                    dataTooltipPosition: 'left',
                    dataTooltipPositionSelector: '.joint-stencil'
                },
                '.uml-class-name-rect': {
                    fill: '#fe854f',
                    stroke: '#f6f6f6',
                    'stroke-width': 1,
                    rx: 8,
                    ry: 8
                },
                '.uml-class-attrs-rect': {
                    fill: '#fe854f',
                    stroke: '#f6f6f6',
                    'stroke-width': 1,
                    rx: 8,
                    ry: 8
                },
                '.uml-class-methods-rect': {
                    fill: '#fe854f',
                    stroke: '#f6f6f6',
                    'stroke-width': 1,
                    rx: 8,
                    ry: 8
                },
                '.uml-class-name-text': {
                    ref: '.uml-class-name-rect',
                    'ref-y': 0.5,
                    'y-alignment': 'middle',
                    fill: '#f6f6f6',
                    'font-family': 'Roboto Condensed',
                    'font-weight': 'Normal',
                    'font-size': 11
                },
                '.uml-class-attrs-text': {
                    ref: '.uml-class-attrs-rect',
                    'ref-y': 0.5,
                    'y-alignment': 'middle',
                    fill: '#f6f6f6',
                    'font-family': 'Roboto Condensed',
                    'font-size': 11
                },
                '.uml-class-methods-text': {
                    ref: '.uml-class-methods-rect',
                    'ref-y': 0.5,
                    'y-alignment': 'middle',
                    fill: '#f6f6f6',
                    'font-family': 'Roboto Condensed',
                    'font-weight': 'Normal',
                    'font-size': 11
                }
            }
        },
        {
            type: 'uml.Abstract',
            name: 'Abstract',
            attributes: ['+attr1'],
            methods: ['-setAttr1()'],
            size: {
                width: 150,
                height: 100
            },
            attrs: {
                root: {
                    dataTooltip: 'Abstract',
                    dataTooltipPosition: 'left',
                    dataTooltipPositionSelector: '.joint-stencil'
                },
                '.uml-class-name-rect': {
                    fill: '#6a6c8a',
                    stroke: '#f6f6f6',
                    'stroke-width': 1,
                    rx: 8,
                    ry: 8
                },
                '.uml-class-attrs-rect': {
                    fill: '#6a6c8a',
                    stroke: '#f6f6f6',
                    'stroke-width': 1,
                    rx: 8,
                    ry: 8
                },
                '.uml-class-methods-rect': {
                    fill: '#6a6c8a',
                    stroke: '#f6f6f6',
                    'stroke-width': 1,
                    rx: 8,
                    ry: 8
                },
                '.uml-class-name-text': {
                    ref: '.uml-class-name-rect',
                    'ref-y': 0.5,
                    'y-alignment': 'middle',
                    fill: '#f6f6f6',
                    'font-family': 'Roboto Condensed',
                    'font-weight': 'Normal',
                    'font-size': 11
                },
                '.uml-class-attrs-text': {
                    ref: '.uml-class-attrs-rect',
                    'ref-y': 0.5,
                    'y-alignment': 'middle',
                    fill: '#f6f6f6',
                    'font-family': 'Roboto Condensed',
                    'font-weight': 'Normal',
                    'font-size': 11
                },
                '.uml-class-methods-text': {
                    ref: '.uml-class-methods-rect',
                    'ref-y': 0.5,
                    'y-alignment': 'middle',
                    fill: '#f6f6f6',
                    'font-family': 'Roboto Condensed',
                    'font-weight': 'Normal',
                    'font-size': 11
                }
            }
        },

        {
            type: 'uml.State',
            name: 'State',
            events: ['entry/', 'create()'],
            size: {
                width: 150,
                height: 100
            },
            attrs: {
                root: {
                    dataTooltip: 'State',
                    dataTooltipPosition: 'left',
                    dataTooltipPositionSelector: '.joint-stencil'
                },
                '.uml-state-body': {
                    fill: '#feb663',
                    stroke: '#f6f6f6',
                    'stroke-width': 1,
                    rx: 8,
                    ry: 8,
                    'stroke-dasharray': '0'
                },
                '.uml-state-separator': {
                    stroke: '#f6f6f6',
                    'stroke-width': 1,
                    'stroke-dasharray': '0'
                },
                '.uml-state-name': {
                    fill: '#f6f6f6',
                    'font-size': 11,
                    'font-family': 'Roboto Condensed',
                    'font-weight': 'Normal'
                },
                '.uml-state-events': {
                    fill: '#f6f6f6',
                    'font-size': 11,
                    'font-family': 'Roboto Condensed',
                    'font-weight': 'Normal'
                }
            }
        }
    ];
})();
