import type { Profile } from '../gallery.tsx';

export const MockData = [
  {
    "id":1,
    "name": "Maria Skłodowska-Curie",
    "imageId": "szV5sdG",
    "details": [
      { "label": "Profession", "value": "physicist and chemist" },
      { "label": "Awards: 4", "value": "(Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal)" },
      { "label": "Discovered", "value": "polonium (chemical element)" }
    ]
  },
  {
    "id":2,
    "name": "Katsuko Saruhashi",
    "imageId": "YfeOqp2",
    "details": [
      { "label": "Profession", "value": "geochemist" },
      { "label": "Awards: 2", "value": "(Miyake Prize for geochemistry, Tanaka Prize)" },
      { "label": "Discovered", "value": "a method for measuring carbon dioxide in seawater" }
    ]
  }
] satisfies Profile[];