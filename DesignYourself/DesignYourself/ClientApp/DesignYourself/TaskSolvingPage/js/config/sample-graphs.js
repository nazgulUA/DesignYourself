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

    App.config.sampleGraphs = {

        // credit goes to `http://www.continuitycentral.com/`
        emergencyProcedure: '{"cells":[{"type":"uml.Class","name":"Class","attributes":["+attr1"],"methods":["-setAttr1()"],"position":{"x":130,"y":380},"size":{"width":90,"height":60},"angle":0,"id":"a77f977b-c0e5-41c6-8ee3-8e0cb5d6c67a","z":1,"attrs":{".uml-class-name-rect":{"stroke":"#f6f6f6","stroke-width":1,"fill":"#61549c","top":2,"rx":8,"ry":8,"height":40,"transform":"translate(0,0)"},".uml-class-attrs-rect":{"stroke":"#f6f6f6","stroke-width":1,"fill":"#61549c","top":2,"rx":8,"ry":8,"height":40,"transform":"translate(0,40)"},".uml-class-methods-rect":{"stroke":"#f6f6f6","stroke-width":1,"fill":"#61549c","top":2,"rx":8,"ry":8,"height":40,"transform":"translate(0,80)"},".uml-class-name-text":{"font-weight":"Normal","fill":"#f6f6f6","font-size":11,"font-family":"Roboto Condensed","text":"Class"},".uml-class-attrs-text":{"ref-y":0.5,"fill":"#f6f6f6","font-size":11,"font-family":"Roboto Condensed","y-alignment":"middle","font-weight":"Normal","text":"+attr1"},".uml-class-methods-text":{"ref-y":0.5,"fill":"#f6f6f6","font-size":11,"font-family":"Roboto Condensed","y-alignment":"middle","font-weight":"Normal","text":"-setAttr1()"},"root":{"dataTooltipPosition":"left","dataTooltipPositionSelector":".joint-stencil"}}},{"type":"uml.Implementation","source":{"id":"a77f977b-c0e5-41c6-8ee3-8e0cb5d6c67a"},"target":{"id":"27b77a50-7ae0-4ac5-a03d-4ada2c620562"},"id":"6852bb62-3acf-4d9b-9aeb-8234d13e9ae6","z":2,"vertices":[{"x":370,"y":410},{"x":440,"y":410}],"attrs":{".marker-target":{"d":"M 20 0 L 0 10 L 20 20 z","fill":"white"},".connection":{"stroke-dasharray":"3,3"}}},{"type":"uml.Class","name":"Class","attributes":["+attr1"],"methods":["-setAttr1()"],"position":{"x":590,"y":410},"size":{"width":90,"height":60},"angle":0,"id":"27b77a50-7ae0-4ac5-a03d-4ada2c620562","z":3,"attrs":{".uml-class-name-rect":{"stroke":"#f6f6f6","stroke-width":1,"fill":"#61549c","top":2,"rx":8,"ry":8,"height":40,"transform":"translate(0,0)"},".uml-class-attrs-rect":{"stroke":"#f6f6f6","stroke-width":1,"fill":"#61549c","top":2,"rx":8,"ry":8,"height":40,"transform":"translate(0,40)"},".uml-class-methods-rect":{"stroke":"#f6f6f6","stroke-width":1,"fill":"#61549c","top":2,"rx":8,"ry":8,"height":40,"transform":"translate(0,80)"},".uml-class-name-text":{"font-weight":"Normal","fill":"#f6f6f6","font-size":11,"font-family":"Roboto Condensed","text":"Class"},".uml-class-attrs-text":{"ref-y":0.5,"fill":"#f6f6f6","font-size":11,"font-family":"Roboto Condensed","y-alignment":"middle","font-weight":"Normal","text":"+attr1"},".uml-class-methods-text":{"ref-y":0.5,"fill":"#f6f6f6","font-size":11,"font-family":"Roboto Condensed","y-alignment":"middle","font-weight":"Normal","text":"-setAttr1()"},"root":{"dataTooltipPosition":"left","dataTooltipPositionSelector":".joint-stencil"}}},{"type":"uml.Class","name":"Class","attributes":["+attr1"],"methods":["-setAttr1()"],"position":{"x":420,"y":510},"size":{"width":90,"height":60},"angle":0,"id":"fb3adc0a-2c81-4b38-b3f7-c75cc115bcd1","z":4,"attrs":{".uml-class-name-rect":{"stroke":"#f6f6f6","stroke-width":1,"fill":"#61549c","top":2,"rx":8,"ry":8,"height":40,"transform":"translate(0,0)"},".uml-class-attrs-rect":{"stroke":"#f6f6f6","stroke-width":1,"fill":"#61549c","top":2,"rx":8,"ry":8,"height":40,"transform":"translate(0,40)"},".uml-class-methods-rect":{"stroke":"#f6f6f6","stroke-width":1,"fill":"#61549c","top":2,"rx":8,"ry":8,"height":40,"transform":"translate(0,80)"},".uml-class-name-text":{"font-weight":"Normal","fill":"#f6f6f6","font-size":11,"font-family":"Roboto Condensed","text":"Class"},".uml-class-attrs-text":{"ref-y":0.5,"fill":"#f6f6f6","font-size":11,"font-family":"Roboto Condensed","y-alignment":"middle","font-weight":"Normal","text":"+attr1"},".uml-class-methods-text":{"ref-y":0.5,"fill":"#f6f6f6","font-size":11,"font-family":"Roboto Condensed","y-alignment":"middle","font-weight":"Normal","text":"-setAttr1()"},"root":{"dataTooltipPosition":"left","dataTooltipPositionSelector":".joint-stencil"}}},{"type":"uml.Association","source":{"id":"fb3adc0a-2c81-4b38-b3f7-c75cc115bcd1"},"target":{"id":"27b77a50-7ae0-4ac5-a03d-4ada2c620562"},"id":"c7bfacf0-452f-467c-be1d-63913535c97e","z":5,"attrs":{}},{"type":"uml.Generalization","source":{"id":"fb3adc0a-2c81-4b38-b3f7-c75cc115bcd1"},"target":{"id":"a77f977b-c0e5-41c6-8ee3-8e0cb5d6c67a"},"id":"bd691a94-cd44-47ad-afa3-3c55586617a1","z":6,"vertices":[{"x":330,"y":480}],"attrs":{".marker-target":{"d":"M 20 0 L 0 10 L 20 20 z","fill":"white"},".connection":{"stroke-dasharray":"0"}}}]}'
    };

})();
