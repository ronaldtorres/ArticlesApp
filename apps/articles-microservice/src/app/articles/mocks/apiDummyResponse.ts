import { AxiosResponse } from 'axios';

export const mockArticlesData = [
  {
    id: 16869,
    title: 'Crew-4 returns to Earth',
    url: 'https://spacenews.com/crew-4-returns-to-earth/',
    imageUrl:
      'https://spacenews.com/wp-content/uploads/2022/10/crew4-splashdown.jpg',
    newsSite: 'SpaceNews',
    summary:
      'SpaceX completed its fourth operational commercial crew mission to the International Space Station Oct. 14 with the safe return of a Crew Dragon spacecraft with four American and European astronauts on board.',
    publishedAt: '2022-10-14T23:10:43.000Z',
    updatedAt: '2022-10-15T08:14:16.838Z',
    featured: false,
    launches: [
      {
        id: 'd786d8fc-862b-45bf-8f7b-9ad862883f67',
        provider: 'Launch Library 2',
      },
    ],
    events: [
      {
        id: 367,
        provider: 'Launch Library 2',
      },
    ],
  },
  {
    id: 16868,
    title:
      'SpaceX launch to deploy first in new generation of Airbus-built satellites',
    url: 'https://spaceflightnow.com/2022/10/14/spacex-launch-to-deploy-first-in-new-generation-of-airbus-built-satellites/',
    imageUrl:
      'https://spaceflightnow.com/wp-content/uploads/2022/10/20221014hotbird13f-1.jpg',
    newsSite: 'Spaceflight Now',
    summary:
      'The first in a new line of Airbus-built communications satellites is stowed for launch on a SpaceX Falcon 9 rocket Friday night from Cape Canaveral, ready for a mission to beam hundreds of TV channels to Eutelsat customers across Europe, the Middle East, and North Africa.',
    publishedAt: '2022-10-14T22:30:15.000Z',
    updatedAt: '2022-10-15T08:14:23.189Z',
    featured: false,
    launches: [
      {
        id: '13977bd5-45d2-4ed1-9a4a-9fefeee0723a',
        provider: 'Launch Library 2',
      },
    ],
    events: [],
  },
  {
    id: 16866,
    title: 'NASA’s SpaceX Crew-4 Astronauts Safely Splash Down in Atlantic',
    url: 'http://www.nasa.gov/press-release/nasa-s-spacex-crew-4-astronauts-safely-splash-down-in-atlantic',
    imageUrl:
      'https://www.nasa.gov/sites/default/files/thumbnails/image/crew-4_splashdown.jpg?itok=XDwjAbTZ',
    newsSite: 'NASA',
    summary:
      'NASA’s SpaceX Crew-4 astronauts aboard the Dragon spacecraft safely splashed down Friday off the coast of Jacksonville, Florida, completing the agency’s fourth commercial crew mission to the International Space Station. The international crew of four spent 170 days in orbit.',
    publishedAt: '2022-10-14T22:01:00.000Z',
    updatedAt: '2022-10-15T08:14:32.239Z',
    featured: false,
    launches: [
      {
        id: 'd786d8fc-862b-45bf-8f7b-9ad862883f67',
        provider: 'Launch Library 2',
      },
    ],
    events: [
      {
        id: 367,
        provider: 'Launch Library 2',
      },
    ],
  },
  {
    id: 16865,
    title:
      'Since Crew Dragon’s debut, SpaceX has flown more astronauts than anyone',
    url: 'https://arstechnica.com/science/2022/10/since-crew-dragons-debut-spacex-has-flown-more-astronauts-than-anyone/',
    imageUrl:
      'https://cdn.arstechnica.net/wp-content/uploads/2022/10/52427279092_82fad265ef_k.jpg',
    newsSite: 'Arstechnica',
    summary:
      '"Thank you for an incredible ride up to orbit and an incredible ride home."',
    publishedAt: '2022-10-14T21:57:35.000Z',
    updatedAt: '2022-10-15T08:14:46.466Z',
    featured: false,
    launches: [
      {
        id: 'd786d8fc-862b-45bf-8f7b-9ad862883f67',
        provider: 'Launch Library 2',
      },
    ],
    events: [
      {
        id: 367,
        provider: 'Launch Library 2',
      },
    ],
  },
  {
    id: 16864,
    title: 'Merging Earth observation remains messy, time-consuming',
    url: 'https://spacenews.com/earth-observation-interoperability/',
    imageUrl:
      'https://spacenews.com/wp-content/uploads/2022/10/rsz_img_0478.jpg',
    newsSite: 'SpaceNews',
    summary:
      'In spite of progress, various Earth observation systems are not yet able to exchange information easily.',
    publishedAt: '2022-10-14T21:20:35.000Z',
    updatedAt: '2022-10-14T21:20:35.813Z',
    featured: false,
    launches: [],
    events: [],
  },
  {
    id: 16857,
    title: 'SpaceX Crew-4 returns to Earth with Atlantic splashdown',
    url: 'https://www.nasaspaceflight.com/2022/10/crew-4-return/',
    imageUrl:
      'https://www.nasaspaceflight.com/wp-content/uploads/2022/10/splashed-1170x613.jpg',
    newsSite: 'NASASpaceflight',
    summary:
      'After living and working aboard the International Space Station (ISS) for close to six months, Crew-4 and its crew of international astronauts have undocked from the orbiting laboratory and made their return to Earth.',
    publishedAt: '2022-10-14T21:05:19.000Z',
    updatedAt: '2022-10-14T21:11:28.095Z',
    featured: false,
    launches: [
      {
        id: 'd786d8fc-862b-45bf-8f7b-9ad862883f67',
        provider: 'Launch Library 2',
      },
    ],
    events: [
      {
        id: 367,
        provider: 'Launch Library 2',
      },
      {
        id: 366,
        provider: 'Launch Library 2',
      },
    ],
  },
  {
    id: 16862,
    title: 'Amazon to link Kuiper satellites to DoD’s mesh network in space',
    url: 'https://spacenews.com/amazon-to-link-kuiper-satellites-to-dods-mesh-network-in-space/',
    imageUrl: 'https://spacenews.com/wp-content/uploads/2022/10/90.webp',
    newsSite: 'SpaceNews',
    summary:
      'Amazon’s Project Kuiper will install DoD-compliant laser communications terminals on its internet satellites so they can transfer data from remote-sensing satellites directly into the military’s mesh network in low Earth orbit.',
    publishedAt: '2022-10-14T20:40:36.000Z',
    updatedAt: '2022-10-14T20:40:36.561Z',
    featured: false,
    launches: [],
    events: [],
  },
  {
    id: 16861,
    title: 'Hotbird-13F launches aboard Falcon 9 from Cape Canaveral',
    url: 'https://www.nasaspaceflight.com/2022/10/hotbird-13f/',
    imageUrl:
      'https://www.nasaspaceflight.com/wp-content/uploads/2022/10/FfFn-slXoAA_lSJ-1170x780.jpg',
    newsSite: 'NASASpaceflight',
    summary:
      'The Eutelsat Hotbird-13F geostationary communications satellite launched atop a SpaceX Falcon 9 out of Cape Canaveral, Florida. The Falcon 9 booster 1069-3, which had flown the CRS-24 and Starlink 4-23 missions, launched the Hotbird satellite to geostationary transfer orbit.',
    publishedAt: '2022-10-14T19:24:54.000Z',
    updatedAt: '2022-10-15T06:01:03.606Z',
    featured: false,
    launches: [
      {
        id: '13977bd5-45d2-4ed1-9a4a-9fefeee0723a',
        provider: 'Launch Library 2',
      },
    ],
    events: [],
  },
  {
    id: 16860,
    title: 'Viasat’s Inmarsat takeover faces delay as UK expands merger review',
    url: 'https://spacenews.com/viasats-inmarsat-takeover-faces-delay-as-uk-expands-merger-review/',
    imageUrl:
      'https://spacenews.com/wp-content/uploads/2022/09/Inmarsat_HQ_in_London_-_credit_Inmarsat.jpeg',
    newsSite: 'SpaceNews',
    summary:
      'The U.K launched an in-depth probe Oct. 14 that will likely delay Viasat’s plan to buy Inmarsat, following concerns it could harm competition in the fledgling inflight connectivity market.',
    publishedAt: '2022-10-14T17:50:32.000Z',
    updatedAt: '2022-10-14T17:50:32.326Z',
    featured: false,
    launches: [],
    events: [],
  },
  {
    id: 16856,
    title: 'Commercial space station developers seek clarity on regulations',
    url: 'https://spacenews.com/commercial-space-station-developers-seek-clarity-on-regulations/',
    imageUrl:
      'https://spacenews.com/wp-content/uploads/2022/10/axiommodule.jpg',
    newsSite: 'SpaceNews',
    summary:
      'Companies working on commercial space stations intended to succeed the International Space Station say they need more clarity from the federal government on who will regulate them and how.',
    publishedAt: '2022-10-14T12:10:31.000Z',
    updatedAt: '2022-10-14T12:10:31.580Z',
    featured: false,
    launches: [],
    events: [],
  },
  {
    id: 16855,
    title:
      'Rocket Report: Amazing view of Falcon 9 landing, spaceport suit Down Under',
    url: 'https://arstechnica.com/science/2022/10/rocket-report-amazing-view-of-falcon-9-landing-spaceport-suit-down-under/',
    imageUrl:
      'https://cdn.arstechnica.net/wp-content/uploads/2022/10/50219312327_0f936ebfd8_k.jpg',
    newsSite: 'Arstechnica',
    summary:
      '"We remain confident of achieving our objective of a full vertical orbital launch."',
    publishedAt: '2022-10-14T11:30:24.000Z',
    updatedAt: '2022-10-14T14:45:42.986Z',
    featured: false,
    launches: [
      {
        id: '03ee73b8-a553-4575-8dfa-d0da4e7939e9',
        provider: 'Launch Library 2',
      },
    ],
    events: [],
  },
  {
    id: 16852,
    title: 'NASA Invites Media to Launch of Water-Monitoring Satellite',
    url: 'http://www.nasa.gov/press-release/nasa-invites-media-to-launch-of-water-monitoring-satellite',
    imageUrl:
      'https://www.nasa.gov/sites/default/files/thumbnails/image/swot.jpg?itok=z2NRCJ2x',
    newsSite: 'NASA',
    summary:
      'Media accreditation is now open for the upcoming launch of the Surface Water and Ocean Topography (SWOT) satellite, a pathfinder mission about Earth’s water that will use new technology to address climate change and its impact on our environment.',
    publishedAt: '2022-10-13T22:10:00.000Z',
    updatedAt: '2022-10-14T07:55:13.932Z',
    featured: false,
    launches: [
      {
        id: '8226d219-b612-4797-a9d2-c5ca7ab0b076',
        provider: 'Launch Library 2',
      },
    ],
    events: [],
  },
  {
    id: 16851,
    title: 'Astra’s strategy to address NASDAQ warning',
    url: 'https://spacenews.com/astras-strategy-to-address-nasdaq-warning/',
    imageUrl:
      'https://spacenews.com/wp-content/uploads/2022/10/rsz_img_0433_1.jpg',
    newsSite: 'SpaceNews',
    summary: '',
    publishedAt: '2022-10-13T21:40:09.000Z',
    updatedAt: '2022-10-13T21:40:09.866Z',
    featured: false,
    launches: [],
    events: [],
  },
  {
    id: 16850,
    title: 'Starlink’s market dominance affecting DoD’s hybrid network plans',
    url: 'https://spacenews.com/starlinks-market-dominance-affecting-dods-hybrid-network-plans/',
    imageUrl:
      'https://spacenews.com/wp-content/uploads/2022/10/220929a-008.jpg',
    newsSite: 'SpaceNews',
    summary:
      'As SpaceX’s Starlink continues to gain military customers, the Pentagon worries that the company’s use of proprietary technology will make it difficult to integrate into a hybrid architecture that DoD hopes to build',
    publishedAt: '2022-10-13T21:00:11.000Z',
    updatedAt: '2022-10-13T21:00:12.088Z',
    featured: false,
    launches: [],
    events: [],
  },
  {
    id: 16849,
    title: 'Starlink kicks off Asia expansion in search of more subscribers',
    url: 'https://spacenews.com/starlink-kicks-off-asia-expansion-in-search-of-more-subscribers/',
    imageUrl:
      'https://spacenews.com/wp-content/uploads/2022/05/Starlink-RV.jpg',
    newsSite: 'SpaceNews',
    summary:
      'Starlink is deepening its foothold in Japan as SpaceX’s satellite broadband service looks to expand elsewhere in Asia, which will be critical for generating much-needed revenues.',
    publishedAt: '2022-10-13T21:00:11.000Z',
    updatedAt: '2022-10-13T21:00:12.093Z',
    featured: false,
    launches: [],
    events: [],
  },
  {
    id: 16848,
    title:
      'NASA Awards Contract for Facilities Operations, Maintenance Service',
    url: 'http://www.nasa.gov/press-release/nasa-awards-contract-for-facilities-operations-maintenance-service',
    imageUrl:
      'https://www.nasa.gov/sites/default/files/thumbnails/image/nasa-logo-web-rgb_0.jpg?itok=mrBnB_c9',
    newsSite: 'NASA',
    summary:
      'NASA has selected TBP & JJ Worldwide Services of Leesburg, Virginia, to provide facilities operations and maintenance service for the agency’s Armstrong Flight Research Center in Edwards, California.',
    publishedAt: '2022-10-13T20:20:00.000Z',
    updatedAt: '2022-10-13T20:20:26.003Z',
    featured: false,
    launches: [],
    events: [],
  },
  {
    id: 16847,
    title: 'Phase Four adopts iodine for next-gen Max-V engine',
    url: 'https://spacenews.com/phase-four-adopts-iodine-for-next-gen-max-v-engine/',
    imageUrl:
      'https://spacenews.com/wp-content/uploads/2022/02/rsz_iodine_1st_ignition.jpg',
    newsSite: 'SpaceNews',
    summary:
      'Propulsion startup Phase Four is expanding its Maxwell plasma propulsion line by offering Max-V, an iodine-fueled engine.',
    publishedAt: '2022-10-13T18:40:10.000Z',
    updatedAt: '2022-10-13T18:40:10.537Z',
    featured: false,
    launches: [],
    events: [],
  },
  {
    id: 16858,
    title: 'NASA targets Nov. 14 for next Artemis launch attempt',
    url: 'https://spaceflightnow.com/2022/10/13/nasa-targets-nov-14-for-next-artemis-launch-attempt/',
    imageUrl:
      'https://spaceflightnow.com/wp-content/uploads/2022/10/20221013slsvab.jpg',
    newsSite: 'Spaceflight Now',
    summary:
      'The next launch attempt for the NASA’s Artemis 1 moon rocket is scheduled just after midnight Nov. 14 after a hydrogen leak and Hurricane Ian thwarted tries to launch the unpiloted test flight to the moon in August and September, space agency officials announced this week.',
    publishedAt: '2022-10-13T13:50:21.000Z',
    updatedAt: '2022-10-14T14:45:53.059Z',
    featured: false,
    launches: [
      {
        id: '65896761-b6ca-4df3-9699-e077a360c52a',
        provider: 'Launch Library 2',
      },
    ],
    events: [],
  },
  {
    id: 16844,
    title: 'Artemis 1, ispace lander set November launch dates',
    url: 'https://spacenews.com/artemis-1-ispace-lander-set-november-launch-dates/',
    imageUrl: 'https://spacenews.com/wp-content/uploads/2022/10/m1-lander.jpg',
    newsSite: 'SpaceNews',
    summary:
      'NASA’s Artemis 1 mission and a Japanese lander are set to launch to the moon from Florida within days of each other in November.',
    publishedAt: '2022-10-13T10:20:10.000Z',
    updatedAt: '2022-10-13T13:36:10.831Z',
    featured: false,
    launches: [
      {
        id: '2306e0bc-e1a3-4a4a-9285-e1a94073655e',
        provider: 'Launch Library 2',
      },
      {
        id: '65896761-b6ca-4df3-9699-e077a360c52a',
        provider: 'Launch Library 2',
      },
    ],
    events: [],
  },
  {
    id: 16843,
    title: 'China launches radar satellite for environmental monitoring',
    url: 'https://spacenews.com/china-launches-radar-satellite-for-environmental-monitoring/',
    imageUrl:
      'https://spacenews.com/wp-content/uploads/2022/10/huanjing-2E-CZ2C-TSLC-12oct2022-Ourspace-CNSA-1.jpg',
    newsSite: 'SpaceNews',
    summary:
      'China launched a 5-meter-resolution synthetic aperture radar satellite late Wednesday, continuing a period of intense Chinese launch activity.',
    publishedAt: '2022-10-13T10:00:10.000Z',
    updatedAt: '2022-10-13T13:38:49.178Z',
    featured: false,
    launches: [
      {
        id: 'bd4426e1-3b12-426e-95b6-7eea6d76ae3b',
        provider: 'Launch Library 2',
      },
    ],
    events: [],
  },
];

export const responseMock: AxiosResponse = {
  data: mockArticlesData,
  config: {},
  headers: {},
  statusText: '',
  status: 200,
};
