import { FaTooth, FaTeeth, FaSmileBeam, FaSyringe, FaUserNurse, FaStethoscope, FaCapsules, FaSmile } from 'react-icons/fa';
import { MdCleaningServices } from 'react-icons/md';

export const services = [
  {
    id: 'cleaning',
    title: 'Teeth Cleaning',
    short: 'Routine cleaning and polish to keep your smile healthy.',
    icon: MdCleaningServices,
  },
  {
    id: 'root-canal',
    title: 'Root Canal Treatment',
    short: 'Pain-free treatment to save a damaged tooth.',
    icon: FaTooth,
  },
  {
    id: 'orthodontics',
    title: 'Orthodontics',
    short: 'Alignment and braces for straight teeth.',
    icon: FaSmileBeam,
  },
  {
    id: 'fillings',
    title: 'Dental Fillings',
    short: 'Restore damaged teeth with durable fillings.',
    icon: FaTeeth,
  },
  {
    id: 'extractions',
    title: 'Tooth Extractions',
    short: 'Safe and gentle removal of problematic teeth.',
    icon: FaSyringe,
  },
  {
    id: 'pediatric-dentistry',
    title: 'Pediatric Dentistry',
    short: 'Special dental care for children.',
    icon: FaUserNurse,
  },
  {
    id: 'periodontics',
    title: 'Periodontal Treatment',
    short: 'Treat gum disease and maintain oral health.',
    icon: FaStethoscope,
  },
  {
    id: 'dental-implants',
    title: 'Dental Implants',
    short: 'Permanent solution to replace missing teeth.',
    icon: FaCapsules,
  },
  {
    id: 'cosmetic-dentistry',
    title: 'Cosmetic Dentistry',
    short: 'Improve your smile with whitening and veneers.',
    icon: FaSmile,  // Changed here
  }
];
