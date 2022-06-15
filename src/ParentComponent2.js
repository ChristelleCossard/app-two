//Nom du fichier : src/pages/ParentComponent.js
import React from 'react';
//import './AboutPage.css';
import Tabs from './Tabs';

const ParentComponent2 = () => {
  const tabs = [
    {
      id: 1,
      label: 'The Pacific Crest Trail (US)'
    },
    {
      id: 2,
      label: 'The Great Divide Trail (Canada)'
    },
    {
      id: 3,
      label: 'Camino de Santiago (Spain)'
    }
  ];

  return (
    <>
      <div className="wrapper">
        <Tabs tabs={tabs}>
          <div id="1">
            <p>The Pacific Crest Trail (PCT), officially designated as the Pacific Crest National Scenic Trail, is a long-distance hiking and equestrian trail closely aligned with the highest portion of the Cascade and Sierra Nevada mountain ranges, which lie 100 to 150 miles (160 to 240 km) east of the U.S. Pacific coast. The trail's southern terminus is just south of Campo, California by the U.S. border with Mexico, and its northern terminus is on the Canada–US border on the edge of Manning Park in British Columbia; it passes through the states of California, Oregon, and Washington.</p>
            <p>The Pacific Crest Trail is 2,653 mi (4,270 km) long and ranges in elevation from just above sea level at the Oregon–Washington border to 13,153 feet (4,009 m) at Forester Pass in the Sierra Nevada. The route passes through 25 national forests and 7 national parks. Its midpoint is near Chester, California (near Mt. Lassen), where the Sierra and Cascade mountain ranges meet.</p>
            
          </div>
          <div id="2">
            <p>The Great Divide Trail (GDT) is a wilderness hiking trail in the Canadian Rockies. The GDT closely follows the continental divide between Alberta and British Columbia, crossing the divide no fewer than 30 times. It begins in Waterton Lakes National Park at the Canada-US border (where it connects with the Continental Divide Trail) and ends 1,123 kilometres to the north in Kakwa Provincial Park.</p>
         
          </div>
          <div id="3">
            <p>The Camino de Santiago (Latin: Peregrinatio Compostellana, "Pilgrimage of Compostela"; Galician: O Camiño de Santiago), known in English as the Way of St. James, is a network of pilgrims' ways or pilgrimages leading to the shrine of the apostle Saint James the Great in the cathedral of Santiago de Compostela in Galicia in northwestern Spain, where tradition has it that the remains of the saint are buried. Many follow its routes as a form of spiritual path or retreat for their spiritual growth. It is also popular with hiking and cycling enthusiasts and organized tour groups, and can be seen within the context of Christian colonization and Christianization.</p>
           
          </div>
        </Tabs>
      </div>
    </>
  );
}

export default ParentComponent2;