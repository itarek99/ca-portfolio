import clipping_path_complicated from '../assets/services/Complex_Clipping_Path.png';
import clipping_path_medium from '../assets/services/Medium_Clipping_Path.png';
import clipping_path_basic from '../assets/services/Simple_Clipping_Path.png';

import multi_clipping_path_complicated from '../assets/services/Complex_Multi_Clipping_Path.png';
import multi_clipping_path_medium from '../assets/services/Medium_Multi_Clipping_Path.png';
import multi_clipping_path_basic from '../assets/services/Simple_Multi_Clipping_Path.png';

import background_removal_complicated from '../assets/services/Complex_Background_Removal_Service.png';
import background_removal_medium from '../assets/services/Medium_Background_Removal_Service.png';
import background_removal_basic from '../assets/services/Simple_Background_Removal_Service.png';

import image_masking_complicated from '../assets/services/Complex-Image-Masking-Service.png';
import image_masking_medium from '../assets/services/Medium-Image-Masking-Service.png';
import image_masking_basic from '../assets/services/Simple-Image-Masking-Service.png';

import photoshop_shadow_complicated from '../assets/services/Complex-Photoshop-Shadow-Services.png';
import photoshop_shadow_medium from '../assets/services/Medium-Photoshop-Shadow-Services.png';
import photoshop_shadow_basic from '../assets/services/Simple-Photoshop-Shadow-Services.png';

import photo_retouching_complicated from '../assets/services/Complex-Phot-Retouching-Service.png';
import photo_retouching_medium from '../assets/services/Medium-Phot-Retouching-Service.png';
import photo_retouching_basic from '../assets/services/Simple-Phot-Retouching-Service.png';

import ghost_mannequin_complicated from '../assets/services/Complex-Ghost-Mannequin-Service.png';
import ghost_mannequin_medium from '../assets/services/Medium-Ghost-Mannequin-Service.png';
import ghost_mannequin_basic from '../assets/services/Simple-Ghost-Mannequin-Service.png';

import color_correction_complicated from '../assets/services/Complex-Color-Correction-Services.png';
import color_correction_medium from '../assets/services/Medium-Color-Correction-Services.png';
import color_correction_basic from '../assets/services/Simple-Color-Correction-Services.png';

const services = [
  {
    name: 'Clipping Path Service',
    difficulty: {
      basic: {
        thumbnail: clipping_path_basic,
        pricing: [
          { time: 'This Week (96+ hrs)', price: 0.22 },
          { time: '72 hrs', price: 0.25 },
          { time: '48 hrs', price: 0.27 },
          { time: '24 hrs', price: 0.29 },
          { time: '12 hrs', price: 0.49 },
          { time: '6 hrs', price: 0.99 },
        ],
      },
      medium: {
        thumbnail: clipping_path_medium,
        pricing: [
          { time: 'This Week (96+ hrs)', price: 1.15 },
          { time: '72 hrs', price: 1.25 },
          { time: '48 hrs', price: 1.29 },
          { time: '24 hrs', price: 1.39 },
          { time: '12 hrs', price: 2.99 },
          { time: '6 hrs', price: 4.5 },
        ],
      },
      complicated: {
        thumbnail: clipping_path_complicated,
        pricing: [
          { time: 'This Week (96+ hrs)', price: 6.0 },
          { time: '72 hrs', price: 6.25 },
          { time: '48 hrs', price: 6.5 },
          { time: '24 hrs', price: 6.75 },
          { time: '12 hrs', price: 10.5 },
          { time: '6 hrs', price: 12.99 },
        ],
      },
    },
  },
  {
    name: 'Multi-Clipping Path',
    difficulty: {
      basic: {
        thumbnail: multi_clipping_path_basic,
        pricing: [
          { time: 'This Week (96+ hrs)', price: 1.0 },
          { time: '72 hrs', price: 1.05 },
          { time: '48 hrs', price: 1.1 },
          { time: '24 hrs', price: 1.15 },
          { time: '12 hrs', price: 1.49 },
          { time: '6 hrs', price: 2.19 },
        ],
      },
      medium: {
        thumbnail: multi_clipping_path_medium,
        pricing: [
          { time: 'This Week (96+ hrs)', price: 2.15 },
          { time: '72 hrs', price: 2.2 },
          { time: '48 hrs', price: 2.25 },
          { time: '24 hrs', price: 2.29 },
          { time: '12 hrs', price: 3.0 },
          { time: '6 hrs', price: 5.5 },
        ],
      },
      complicated: {
        thumbnail: multi_clipping_path_complicated,
        pricing: [
          { time: 'This Week (96+ hrs)', price: 6.25 },
          { time: '72 hrs', price: 6.79 },
          { time: '48 hrs', price: 7.5 },
          { time: '24 hrs', price: 9.5 },
          { time: '12 hrs', price: 12.99 },
          { time: '6 hrs', price: 15.99 },
        ],
      },
    },
  },
  {
    name: 'Background Removal Service',
    difficulty: {
      basic: {
        thumbnail: background_removal_basic,
        pricing: [
          { time: 'This Week (96+ hrs)', price: 0.22 },
          { time: '72 hrs', price: 0.25 },
          { time: '48 hrs', price: 0.27 },
          { time: '24 hrs', price: 0.29 },
          { time: '12 hrs', price: 0.49 },
          { time: '6 hrs', price: 0.99 },
        ],
      },
      medium: {
        thumbnail: background_removal_medium,
        pricing: [
          { time: 'This Week (96+ hrs)', price: 1.15 },
          { time: '72 hrs', price: 1.25 },
          { time: '48 hrs', price: 1.29 },
          { time: '24 hrs', price: 1.39 },
          { time: '12 hrs', price: 2.99 },
          { time: '6 hrs', price: 4.5 },
        ],
      },
      complicated: {
        thumbnail: background_removal_complicated,
        pricing: [
          { time: 'This Week (96+ hrs)', price: 6.0 },
          { time: '72 hrs', price: 6.25 },
          { time: '48 hrs', price: 6.5 },
          { time: '24 hrs', price: 6.75 },
          { time: '12 hrs', price: 10.5 },
          { time: '6 hrs', price: 12.99 },
        ],
      },
    },
  },
  {
    name: 'Image Masking Service',
    difficulty: {
      basic: {
        thumbnail: image_masking_basic,
        pricing: [
          { time: 'This Week (96+ hrs)', price: 0.49 },
          { time: '72 hrs', price: 0.5 },
          { time: '48 hrs', price: 0.55 },
          { time: '24 hrs', price: 0.59 },
          { time: '12 hrs', price: 1.19 },
          { time: '6 hrs', price: 1.5 },
        ],
      },
      medium: {
        thumbnail: image_masking_medium,
        pricing: [
          { time: 'This Week (96+ hrs)', price: 1.0 },
          { time: '72 hrs', price: 1.1 },
          { time: '48 hrs', price: 1.15 },
          { time: '24 hrs', price: 1.19 },
          { time: '12 hrs', price: 1.69 },
          { time: '6 hrs', price: 2.39 },
        ],
      },
      complicated: {
        thumbnail: image_masking_complicated,
        pricing: [
          { time: 'This Week (96+ hrs)', price: 2.0 },
          { time: '72 hrs', price: 2.25 },
          { time: '48 hrs', price: 2.39 },
          { time: '24 hrs', price: 2.49 },
          { time: '12 hrs', price: 4.5 },
          { time: '6 hrs', price: 8.99 },
        ],
      },
    },
  },
  {
    name: 'Photoshop Shadow Services',
    difficulty: {
      basic: {
        thumbnail: photoshop_shadow_basic,
        pricing: [
          { time: 'This Week (96+ hrs)', price: 0.23 },
          { time: '72 hrs', price: 0.25 },
          { time: '48 hrs', price: 0.27 },
          { time: '24 hrs', price: 0.29 },
          { time: '12 hrs', price: 0.39 },
          { time: '6 hrs', price: 0.99 },
        ],
      },
      medium: {
        thumbnail: photoshop_shadow_medium,
        pricing: [
          { time: 'This Week (96+ hrs)', price: 0.39 },
          { time: '72 hrs', price: 0.4 },
          { time: '48 hrs', price: 0.45 },
          { time: '24 hrs', price: 0.49 },
          { time: '12 hrs', price: 0.99 },
          { time: '6 hrs', price: 1.29 },
        ],
      },
      complicated: {
        thumbnail: photoshop_shadow_complicated,
        pricing: [
          { time: 'This Week (96+ hrs)', price: 0.55 },
          { time: '72 hrs', price: 0.6 },
          { time: '48 hrs', price: 0.65 },
          { time: '24 hrs', price: 0.69 },
          { time: '12 hrs', price: 1.29 },
          { time: '6 hrs', price: 2.99 },
        ],
      },
    },
  },
  {
    name: 'Photo Retouching Service',
    difficulty: {
      basic: {
        thumbnail: photo_retouching_basic,
        pricing: [
          { time: 'This Week (96+ hrs)', price: 0.49 },
          { time: '72 hrs', price: 0.5 },
          { time: '48 hrs', price: 0.55 },
          { time: '24 hrs', price: 0.59 },
          { time: '12 hrs', price: 0.89 },
          { time: '6 hrs', price: 1.19 },
        ],
      },
      medium: {
        thumbnail: photo_retouching_medium,
        pricing: [
          { time: 'This Week (96+ hrs)', price: 1.15 },
          { time: '72 hrs', price: 1.2 },
          { time: '48 hrs', price: 1.25 },
          { time: '24 hrs', price: 1.29 },
          { time: '12 hrs', price: 2.5 },
          { time: '6 hrs', price: 3.0 },
        ],
      },
      complicated: {
        thumbnail: photo_retouching_complicated,
        pricing: [
          { time: 'This Week (96+ hrs)', price: 4.85 },
          { time: '72 hrs', price: 5.0 },
          { time: '48 hrs', price: 5.15 },
          { time: '24 hrs', price: 5.29 },
          { time: '12 hrs', price: 7.5 },
          { time: '6 hrs', price: 10.0 },
        ],
      },
    },
  },
  {
    name: 'Ghost Mannequin Service',
    difficulty: {
      basic: {
        thumbnail: ghost_mannequin_basic,
        pricing: [
          { time: 'This Week (96+ hrs)', price: 0.5 },
          { time: '72 hrs', price: 0.55 },
          { time: '48 hrs', price: 0.57 },
          { time: '24 hrs', price: 0.59 },
          { time: '12 hrs', price: 0.79 },
          { time: '6 hrs', price: 1.0 },
        ],
      },
      medium: {
        thumbnail: ghost_mannequin_medium,
        pricing: [
          { time: 'This Week (96+ hrs)', price: 0.69 },
          { time: '72 hrs', price: 0.75 },
          { time: '48 hrs', price: 0.8 },
          { time: '24 hrs', price: 0.85 },
          { time: '12 hrs', price: 1.69 },
          { time: '6 hrs', price: 2.79 },
        ],
      },
      complicated: {
        thumbnail: ghost_mannequin_complicated,
        pricing: [
          { time: 'This Week (96+ hrs)', price: 1.29 },
          { time: '72 hrs', price: 1.35 },
          { time: '48 hrs', price: 1.4 },
          { time: '24 hrs', price: 1.49 },
          { time: '12 hrs', price: 2.5 },
          { time: '6 hrs', price: 3.49 },
        ],
      },
    },
  },
  {
    name: 'Color Correction Services',
    difficulty: {
      basic: {
        thumbnail: color_correction_basic,
        pricing: [
          { time: 'This Week (96+ hrs)', price: 0.79 },
          { time: '72 hrs', price: 0.85 },
          { time: '48 hrs', price: 0.9 },
          { time: '24 hrs', price: 0.95 },
          { time: '12 hrs', price: 1.19 },
          { time: '6 hrs', price: 1.79 },
        ],
      },
      medium: {
        thumbnail: color_correction_medium,
        pricing: [
          { time: 'This Week (96+ hrs)', price: 1.5 },
          { time: '72 hrs', price: 1.69 },
          { time: '48 hrs', price: 1.79 },
          { time: '24 hrs', price: 1.89 },
          { time: '12 hrs', price: 2.25 },
          { time: '6 hrs', price: 2.89 },
        ],
      },
      complicated: {
        thumbnail: color_correction_complicated,
        pricing: [
          { time: 'This Week (96+ hrs)', price: 2.0 },
          { time: '72 hrs', price: 2.29 },
          { time: '48 hrs', price: 2.4 },
          { time: '24 hrs', price: 2.49 },
          { time: '12 hrs', price: 3.0 },
          { time: '6 hrs', price: 3.5 },
        ],
      },
    },
  },
  {
    name: 'Photo Restoration Services',
  },
  {
    name: 'E-Commerce Photo Editing',
  },
  {
    name: 'Wedding Photo Editing',
  },
  {
    name: 'Real Estate Photo Editing',
  },
  {
    name: 'Image Manipulation',
  },
  {
    name: 'Raster to Vector Conversion',
  },
  {
    name: 'Other Services',
  },
];

export default services;
