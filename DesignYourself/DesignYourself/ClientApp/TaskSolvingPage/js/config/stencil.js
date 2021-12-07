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
        uml: { index: 0, label: 'UML' }
    };
    App.config.stencil.shapes={}
    App.config.stencil.shapes.uml={};
    //App.config.stencil.shapes.uml = JSON.parse('[{"type":"uml.Class","name":"Class","attributes":["\u002Battr1"],"methods":["-setAttr1()"],"position":{"x":160,"y":300},"size":{"width":90,"height":60},"angle":0,"id":"a77f977b-c0e5-41c6-8ee3-8e0cb5d6c67a","z":1,"attrs":{".uml-class-name-rect":{"stroke":"#f6f6f6","stroke-width":1,"fill":"#61549c","top":2,"rx":8,"ry":8,"height":40,"transform":"translate(0,0)"},".uml-class-attrs-rect":{"stroke":"#f6f6f6","stroke-width":1,"fill":"#61549c","top":2,"rx":8,"ry":8,"height":40,"transform":"translate(0,40)"},".uml-class-methods-rect":{"stroke":"#f6f6f6","stroke-width":1,"fill":"#61549c","top":2,"rx":8,"ry":8,"height":40,"transform":"translate(0,80)"},".uml-class-name-text":{"font-weight":"Normal","fill":"#f6f6f6","font-size":11,"font-family":"Roboto Condensed","text":"Class"},".uml-class-attrs-text":{"ref-y":0.5,"fill":"#f6f6f6","font-size":11,"font-family":"Roboto Condensed","y-alignment":"middle","font-weight":"Normal","text":"\u002Battr1"},".uml-class-methods-text":{"ref-y":0.5,"fill":"#f6f6f6","font-size":11,"font-family":"Roboto Condensed","y-alignment":"middle","font-weight":"Normal","text":"-setAttr1()"},"root":{"dataTooltipPosition":"left","dataTooltipPositionSelector":".joint-stencil"}}},{"type":"uml.Class","name":"Class","attributes":["\u002Battr1"],"methods":["-setAttr1()"],"position":{"x":610,"y":350},"size":{"width":90,"height":60},"angle":0,"id":"27b77a50-7ae0-4ac5-a03d-4ada2c620562","z":3,"attrs":{".uml-class-name-rect":{"stroke":"#f6f6f6","stroke-width":1,"fill":"#61549c","top":2,"rx":8,"ry":8,"height":40,"transform":"translate(0,0)"},".uml-class-attrs-rect":{"stroke":"#f6f6f6","stroke-width":1,"fill":"#61549c","top":2,"rx":8,"ry":8,"height":40,"transform":"translate(0,40)"},".uml-class-methods-rect":{"stroke":"#f6f6f6","stroke-width":1,"fill":"#61549c","top":2,"rx":8,"ry":8,"height":40,"transform":"translate(0,80)"},".uml-class-name-text":{"font-weight":"Normal","fill":"#f6f6f6","font-size":11,"font-family":"Roboto Condensed","text":"Class"},".uml-class-attrs-text":{"ref-y":0.5,"fill":"#f6f6f6","font-size":11,"font-family":"Roboto Condensed","y-alignment":"middle","font-weight":"Normal","text":"\u002Battr1"},".uml-class-methods-text":{"ref-y":0.5,"fill":"#f6f6f6","font-size":11,"font-family":"Roboto Condensed","y-alignment":"middle","font-weight":"Normal","text":"-setAttr1()"},"root":{"dataTooltipPosition":"left","dataTooltipPositionSelector":".joint-stencil"}}},{"type":"uml.Class","name":"Class","attributes":["\u002Battr1"],"methods":["-setAttr1()"],"position":{"x":420,"y":510},"size":{"width":90,"height":60},"angle":0,"id":"fb3adc0a-2c81-4b38-b3f7-c75cc115bcd1","z":4,"attrs":{".uml-class-name-rect":{"stroke":"#f6f6f6","stroke-width":1,"fill":"#61549c","top":2,"rx":8,"ry":8,"height":40,"transform":"translate(0,0)"},".uml-class-attrs-rect":{"stroke":"#f6f6f6","stroke-width":1,"fill":"#61549c","top":2,"rx":8,"ry":8,"height":40,"transform":"translate(0,40)"},".uml-class-methods-rect":{"stroke":"#f6f6f6","stroke-width":1,"fill":"#61549c","top":2,"rx":8,"ry":8,"height":40,"transform":"translate(0,80)"},".uml-class-name-text":{"font-weight":"Normal","fill":"#f6f6f6","font-size":11,"font-family":"Roboto Condensed","text":"Class"},".uml-class-attrs-text":{"ref-y":0.5,"fill":"#f6f6f6","font-size":11,"font-family":"Roboto Condensed","y-alignment":"middle","font-weight":"Normal","text":"\u002Battr1"},".uml-class-methods-text":{"ref-y":0.5,"fill":"#f6f6f6","font-size":11,"font-family":"Roboto Condensed","y-alignment":"middle","font-weight":"Normal","text":"-setAttr1()"},"root":{"dataTooltipPosition":"left","dataTooltipPositionSelector":".joint-stencil"}}}]');
  /* App.config.stencil.shapes.uml = [
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
        },
    ];*/
})();
