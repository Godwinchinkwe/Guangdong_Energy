import img2 from "./images/gen.jpeg";
import img3 from "./images/transf.jpeg";
import img4 from "./images/coil.jpeg";
import img5 from "./images/oil.jpeg";
// import img2 from "./images/gen.jpeg";

export const products = [
  {
    slug: 'oil-immersed-transformers',
    name: 'Oil-Immersed Transformers',
    cn: '油浸式变压器',
    category: 'Power Distribution',
    image: img3,
    fallback: 'Transformer image placeholder',
    description: 'Industrial transformer solutions designed for dependable power distribution and demanding operating environments.',
    specs: [['Product type','Oil-immersed transformer'],['Application','Power distribution and industrial systems'],['Configuration','Customizable to project requirements'],['Market','Dealer and distributor supply']],
  },
  {
    slug: 'generator-engines',
    name: 'Generator Engines',
    cn: '发电机组发动机',
    category: 'Power Generation',
    image: img2,
    fallback: 'Generator engine image placeholder',
    description: 'Engine solutions for generator applications, with configurations supporting power-generation projects in the 100–500 kVA range.',
    specs: [['Product type','Generator engine'],['Power range','100–500 kVA applications'],['Application','Industrial and commercial power generation'],['Market','Dealer and distributor supply']],
  },
  
    {
    slug: 'cable-wires',
    name: 'Cable Wires',
    cn: '电缆线',
    category: 'Transformer Part',
    image: img4,
    fallback: 'Cable wire image placeholder',
    description: 'High-quality cable wires for transformer applications, ensuring reliable electrical connections.',
    specs: [['Product type','Cable wire'],['Application','Transformer installations'],['Configuration','Customizable to project requirements'],['Market','Dealer and distributor supply']],
  },

    {
    slug: 'oil-filtration',
    name: 'Oil Filtration Systems',
    cn: '油过滤系统',
    category: 'Transformer Maintenance',
    image: img5,
    fallback: 'Oil filtration image placeholder',
    description: 'Advanced oil filtration systems for maintaining transformer performance and longevity.',
    specs: [['Product type','Oil filtration system'],['Application','Transformer maintenance'],['Configuration','Customizable to project requirements'],['Market','Dealer and distributor supply']],
  },
];
