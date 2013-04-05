/*jslint indent: 2, nomen: true, maxlen: 100, white: true, plusplus: true, unparam: true */
/*global require, applicationContext */

////////////////////////////////////////////////////////////////////////////////
/// @brief An example Foxx-Application for ArangoDB
///
/// @file
///
/// DISCLAIMER
///
/// Copyright 2010-2013 triagens GmbH, Cologne, Germany
///
/// Licensed under the Apache License, Version 2.0 (the "License");
/// you may not use this file except in compliance with the License.
/// You may obtain a copy of the License at
///
///     http://www.apache.org/licenses/LICENSE-2.0
///
/// Unless required by applicable law or agreed to in writing, software
/// distributed under the License is distributed on an "AS IS" BASIS,
/// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
/// See the License for the specific language governing permissions and
/// limitations under the License.
///
/// Copyright holder is triAGENS GmbH, Cologne, Germany
///
/// @author Jan Steemann
/// @author Copyright 2011-2013, triAGENS GmbH, Cologne, Germany
////////////////////////////////////////////////////////////////////////////////

(function() {
  "use strict";

  // Initialise a new FoxxApplication.
  var FoxxApplication = require("org/arangodb/foxx").Application,
  app = new FoxxApplication();

  // install route
  app.get('/random', function (req, res) {
    var gods = [
      "CentzonTotochtin",
      "Chalchihuitlicue",
      "Chantico",
      "Chicomecoatl",
      "Cihuacoatl",
      "Cinteotl",
      "Coatlicue",
      "Coyolxauhqui",
      "Huehuecoyotl",
      "Huitzilopochtli",
      "Ilamatecuhtli",
      "Itzcoliuhqui",
      "Itzpaplotl",
      "Mayauel",
      "Meztli",
      "Mictlantecuhtli",
      "Mixcoatl",
      "Quetzalcoatl",
      "Tezcatlipoca",
      "Tialoc",
      "Tlauixcalpantecuhtli",
      "Tlazolteotl",
      "Tonatiuh",
      "Tozi",
      "XipeTotec",
      "Xochiquetzal",
      "Xolotl",
      "Yacatecuhtli"
    ];

    var idx = Math.round(Math.random() * (gods.length - 1));
    res.json({ name: gods[idx] });
  });

  // Remember to give the applicationContext.
  app.start(applicationContext);
}());

