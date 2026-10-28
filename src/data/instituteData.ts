import { Course, Testimonial, FaqItem, GalleryItem } from '../types';

export const INSTITUTE_INFO = {
  name: {
    en: 'BYD Technical & Training Institute',
    hi: 'बी.वाई.डी. टेक्निकल एंड ट्रेनिंग इंस्टीट्यूट',
  },
  shortName: 'BYD Institute',
  tagline: {
    en: 'Because Learning Has No Borders • 100% Practical Technical Skills',
    hi: 'सीखने की कोई सीमा नहीं • 100% प्रैक्टिकल तकनीकी हुनर और रोजगार',
  },
  logoUrl: '/assets/aistudio/image_581635be.png',
  remoteLogoUrl: 'https://instagram.famd4-1.fna.fbcdn.net/v/t51.82787-19/780551073_17879389515685779_5575352620554364322_n.jpg?_nc_cat=104&_nc_map=urlgen_bucketless&ig_cache_key=GKFDhi6TH_LENYU-AKKlrz2roV9NbmNDAQAB0j-ccb7-5&ccb=7-5&_nc_sid=669407&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLnd3dy4xMDgwLkMzIn0%3D&_nc_ohc=HYkVc9vZ6McQ7kNvwEUkuce&_nc_oc=AdqlEPq3nNtE_DQU8J8qQh3qcKRP1Ld1VKS-HC0JeU1CXTboffzevKjf1DmzSO929Nzjwl5a4bycB6VhUQeeK7zL&_nc_zt=24&_nc_ht=instagram.famd4-1.fna&_nc_gid=0mtYhYkFDN5I8E51vU19Ww&_nc_ss=7b6a8&oh=00_AQNgHBGp38iARhII_xx5Hck7N0vF4hcy33bmZ4_H9wPiCQ&oe=6ADFB881',
  location: {
    en: 'Tragad, Chandkheda, Ahmedabad, Gujarat, India',
    hi: 'त्रागड़, चांदखेड़ा, अहमदाबाद, गुजरात, भारत',
  },
  address: {
    en: 'Shop No 1, Samanvay Glorious, Sneh Plaza Rd, opp. Kilo Kulture, near Bank of Baroda, Tragad, Chandkheda, Ahmedabad, Gujarat',
    hi: 'शॉप नं. 1, समन्वय ग्लोरियस, स्नेह प्लाजा रोड, किलो कल्चर के सामने, बैंक ऑफ बड़ौदा के पास, त्रागड़, चांदखेड़ा, अहमदाबाद, गुजरात',
  },
  email: 'info.vinayakamin@gmail.com',
  phone: '+91 76230 62070',
  phoneDisplay: '+91 76230 62070',
  alternatePhone: '+91 76230 62070',
  whatsappNumber: '917623062070',
  whatsappMessage: 'Hello BYD Technical Institute, I am interested in joining a practical technical training course. Please share admission details.',
  whatsappMessageHi: 'नमस्ते बीवाईडी टेक्निकल इंस्टीट्यूट, मुझे प्रैक्टिकल टेक्निकल ट्रेनिंग कोर्स में एडमिशन लेना है। कृपया कोर्स और फीस की जानकारी भेजें।',
  socialLinks: {
    facebook: 'https://www.facebook.com/profile.php?id=61594472231987',
    facebookHandle: 'BYD Technical Institute-Chandkheda',
    instagram: 'https://www.instagram.com/byd_technical_institute',
    instagramHandle: '@byd_technical_institute',
    googleBusiness: 'https://share.google/jWrTONm30Hw14iIfc',
    googleMapsEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14678.966767571348!2d72.5854!3d23.1118!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e839e5593c66f%3A0x6b77c5fb9a28723c!2sChandkheda%2C%20Ahmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin',
  },
  hours: {
    en: 'Monday - Saturday: 8:00 AM - 7:00 PM | Sunday: 9:00 AM - 2:00 PM',
    hi: 'सोमवार - शनिवार: सुबह 8:00 से शाम 7:00 | रविवार: सुबह 9:00 से दोपहर 2:00',
  },
  stats: {
    studentsTrained: '2,800+',
    placementRate: '98%',
    practicalPercentage: '100%',
    rating: '4.9',
    reviewCount: '450+',
    yearsExperience: '10+',
  },
};

export const COURSES: Course[] = [
  {
    id: 'ac-inverter-master',
    title: {
      en: 'Advanced AC Technician & Inverter PCB Master Course',
      hi: 'एडवांस्ड एसी टेक्नीशियन एवं इन्वर्टर पीसीबी मास्टर कोर्स',
    },
    category: 'ac-hvac',
    duration: {
      en: '2 Months (Fast-Track 1 Month Available)',
      hi: '2 महीने (फास्ट-ट्रैक 1 महीना भी उपलब्ध)',
    },
    level: {
      en: 'Beginner to Advanced Master',
      hi: 'शुरुआती से लेकर एडवांस्ड मास्टर',
    },
    badge: {
      en: 'Most In-Demand (High Earning)',
      hi: 'सबसे ज्यादा मांग वाला कोर्स',
    },
    shortDesc: {
      en: 'Complete practical mastery of Split AC, Window AC, Inverter AC, VRV/VRF systems, gas charging (R32, R410A), flaring, leak detection, and PCB circuit repair.',
      hi: 'स्प्लिट एसी, विंडो एसी, 5-स्टार इन्वर्टर एसी, गैस चार्जिंग (R32, R410A), लीकेज टेस्टिंग, फ्लेयरिंग और पीसीबी फॉल्ट रिपेयरिंग की 100% प्रैक्टिकल ट्रेनिंग।',
    },
    iconName: 'Wind',
    practicalPercent: 100,
    expectedSalary: {
      en: '₹28,000 - ₹55,000 / month (or ₹60,000+ in own business)',
      hi: '₹28,000 - ₹55,000 / महीना (खुद की दुकान में ₹60,000+)',
    },
    businessPotential: {
      en: 'Average ₹800 - ₹2,500 service visit charges in peak summer season',
      hi: 'गर्मी के सीजन में प्रति विजिट ₹800 से ₹2,500 तक की कमाई',
    },
    keyTopics: {
      en: [
        'Window & Split AC Installation & Uninstallation',
        'Inverter AC Dual Inverter Compressor & DC Motor Testing',
        'Refrigerant Charging: R-32, R-410A, R-22 with Vacuuming',
        'Copper Brazing, Swaging, Flaring & Pressure Testing',
        'Indoor & Outdoor PCB Board Tracing & Sensor Testing',
        'Error Code Decoding & Live Fault Troubleshooting',
      ],
      hi: [
        'विंडो और स्प्लिट एसी की पूरी फिटिंग और सर्विसिंग',
        'इन्वर्टर एसी कंप्रेसर और डीसी फैन मोटर की टेस्टिंग',
        'R-32, R-410A, R-22 गैस चार्जिंग और वैक्यूमिंग प्रोसेस',
        'कॉपर पाइप ब्रेजिंग, फ्लेयरिंग एवं नाइट्रोजन प्रेशर टेस्टिंग',
        'इंडोर और आउटडोर पीसीबी बोर्ड ट्रेसिंग और सेंसर चेकिंग',
        'सभी कंपनियों के एरर कोड और लाइव फॉल्ट सोल्यूशन',
      ],
    },
    syllabus: [
      {
        module: { en: 'Module 1: Refrigeration Cycle & Thermodynamics', hi: 'मॉड्यूल 1: रेफ्रिजरेशन सायकल और मूल सिद्धांत' },
        topics: {
          en: ['Principles of cooling', 'Vapor compression cycle', 'Compressor types & working', 'Condenser & Evaporator operation'],
          hi: ['कूलिंग के मूल सिद्धांत', 'वेपर कंप्रेशन सायकल', 'कंप्रेसर के प्रकार व कार्यप्रणाली', 'कंडेंसर और इवैपोरेटर की कार्यशैली'],
        },
      },
      {
        module: { en: 'Module 2: Copper Pipe Mechanical Works', hi: 'मॉड्यूल 2: कॉपर पाइपिंग एवं ब्रेजिंग वर्क' },
        topics: {
          en: ['Flaring & Swaging with precision tools', 'Oxygen-LPG/Acetylene copper brazing', 'Leak testing with soapy water & nitrogen', 'Vacuum pump operation & gauge manifolds'],
          hi: ['फ्लेयरिंग और स्वाइजिंग टूल्स का सही उपयोग', 'ऑक्सीजन-एलपीजी गैस ब्रेजिंग तकनीक', 'नाइट्रोजन से लीकेज ढूंढना', 'वैक्यूम पंप और गेज मैनिफोल्ड का उपयोग'],
        },
      },
      {
        module: { en: 'Module 3: Inverter AC & Electrical Control', hi: 'मॉड्यूल 3: इन्वर्टर एसी और इलेक्ट्रिकल कंट्रोल' },
        topics: {
          en: ['Non-inverter vs Inverter AC comparison', 'IPM module & BLDC motor control', 'Indoor display & outdoor motherboard wiring', 'Electronic Expansion Valve (EEV) troubleshooting'],
          hi: ['साधारण एसी बनाम 5-स्टार इन्वर्टर एसी', 'आईपीएम मॉड्यूल और बीएलडीसी मोटर चेकिंग', 'मदरबोर्ड और सेंसर वायरिंग कनेक्शन', 'इलेक्ट्रॉनिक एक्सपेंशन वाल्व (EEV) चेकिंग'],
        },
      },
      {
        module: { en: 'Module 4: Installation & Field Practical', hi: 'मॉड्यूल 4: फील्ड इंस्टॉलेशन एवं बिजनेस गाइडेंस' },
        topics: {
          en: ['Wall bracket mounting & core drilling safety', 'Drain line setup without water dripping', 'Jet pump chemical washing & servicing', 'How to quote customers and partner with Urban Company'],
          hi: ['दीवार ब्रैकेट फिटिंग और कोर कटिंग', 'ड्रेन पाइप का सही स्लोप ताकि पानी न टपके', 'जेट पंप केमिकल वॉश और डीप क्लीनिंग', 'कस्टमर को बिलिंग और अर्बन कंपनी में जॉइनिंग'],
        },
      },
    ],
    toolsLearned: {
      en: ['Digital Manifold Gauge', 'Micron Vacuum Pump', 'Flaring & Swaging Kit', 'Brazing Torch', 'Digital Clamp Meter', 'Leak Detector Spray', 'High Pressure Jet Pump'],
      hi: ['डिजिटल मैनिफोल्ड गेज', 'माइक्रोन वैक्यूम पंप', 'फ्लेयरिंग और स्वाइजिंग टूलकिट', 'गैस ब्रेजिंग टॉर्च', 'डिजिटल क्लैम्प मीटर', 'लीक डिटेक्टर', 'हाई प्रेशर जेट पंप'],
    },
    image: '/assets/aistudio/image_e10e3466.png',
  },
  {
    id: 'refrigerator-deep-freezer',
    title: {
      en: 'Refrigerator & Deep Freezer Master Technician Course',
      hi: 'रेफ्रिजरेटर एवं डीप फ्रीजर मास्टर टेक्नीशियन कोर्स',
    },
    category: 'refrigeration',
    duration: {
      en: '1.5 Months (Practical Lab)',
      hi: '1.5 महीने (प्रैक्टिकल लैब)',
    },
    level: {
      en: 'Beginner to Professional',
      hi: 'शुरुआती से लेकर प्रोफेशनल',
    },
    badge: {
      en: 'Year-Round Demand',
      hi: '12 महीने चलने वाला काम',
    },
    shortDesc: {
      en: 'Hands-on practical training on Single Door, Double Door Frost-Free, Side-by-Side & Commercial Deep Freezers. Inverter compressor testing, gas charging (R600a, R134a) & defrost timers.',
      hi: 'सिंगल डोर, डबल डोर फ्रॉस्ट-फ्री और साइड-बाय-साइड फ्रिज की ट्रेनिंग। इन्वर्टर कंप्रेसर टेस्टिंग, R600a व R134a गैस चार्जिंग, बायमेटल, टाइमर और हीटर रिपेयरिंग।',
    },
    iconName: 'Refrigerator',
    practicalPercent: 100,
    expectedSalary: {
      en: '₹25,000 - ₹45,000 / month',
      hi: '₹25,000 - ₹45,000 / महीना',
    },
    businessPotential: {
      en: 'Every household has a fridge; constant repair demand in every town & village',
      hi: 'हर घर में फ्रिज है; गांव और शहर दोनों में सालभर लगातार काम मिलता है',
    },
    keyTopics: {
      en: [
        'Single Door Direct Cool Refrigerator Cycle',
        'Double Door Frost-Free Mechanism & Defrost System',
        'Inverter Compressor Driver Circuit & Testing',
        'Gas Charging with Flammable R-600a Safety Guidelines',
        'Thermostat, Defrost Timer, Bimetal & Heater Diagnosis',
        'Capillary Tube Choking, Flushing & Filter Drier Replacement',
      ],
      hi: [
        'सिंगल डोर डायरेक्ट कूल फ्रिज का पूरा सर्किट',
        'डबल डोर फ्रॉस्ट फ्री सिस्टम और ऑटोमैटिक डिफ्रॉस्ट',
        'इन्वर्टर कंप्रेसर ड्राइवर सर्किट और मल्टीमीटर टेस्टिंग',
        'R-600a गैस की सुरक्षित चार्जिंग के नियम',
        'थर्मोस्टैट, डिफ्रॉस्ट टाइमर, बायमेटल और हीटर रिपेयर',
        'कैपिलरी ट्यूब चोकिंग दूर करना, फ्लशिंग और ड्रायर बदलना',
      ],
    },
    syllabus: [
      {
        module: { en: 'Module 1: Electrical & Refrigeration Basics', hi: 'मॉड्यूल 1: इलेक्ट्रिकल और कूलिंग बेसिक्स' },
        topics: {
          en: ['Relay, OLP, Capacitor & Thermostat testing', 'Wiring diagram tracing', 'Capillary sizing and oil contamination check'],
          hi: ['रिले, ओएलपी, कैपेसिटर और थर्मोस्टैट चेकिंग', 'वायरिंग डायग्राम पढ़ना', 'कैपिलरी साइज और कंप्रेसर ऑयल चेकिंग'],
        },
      },
      {
        module: { en: 'Module 2: Frost-Free Defrost Circuit', hi: 'मॉड्यूल 2: फ्रॉस्ट-फ्री डिफ्रॉस्ट सर्किट' },
        topics: {
          en: ['Why ice blocks cooling in lower cabin', 'Bimetal sensor and thermal fuse check', 'Defrost timer mechanical vs electronic PCB'],
          hi: ['नीचे ठंडक न होने की वजह और समाधान', 'बायमेटल सेंसर और थर्मल फ्यूज की जांच', 'डिफ्रॉस्ट टाइमर और सेंसर आधारित पीसीबी'],
        },
      },
      {
        module: { en: 'Module 3: Gas Charging & System Flushing', hi: 'मॉड्यूल 3: गैस चार्जिंग और सिस्टम फ्लशिंग' },
        topics: {
          en: ['R-134a vs R-600a isobutane properties', 'Anti-moisture flushing with CTC/Thinner/Nitrogen', 'Weight-based charging with digital weighing scale'],
          hi: ['R-134a और R-600a आइसोब्यूटेन गैस के नियम', 'मॉइस्चर चोकिंग हटाने के लिए फ्लशिंग', 'डिजिटल तराजू से सही ग्राम में गैस भरना'],
        },
      },
    ],
    toolsLearned: {
      en: ['Pinching Pliers', 'Digital Weighing Scale', 'Capillary Cutter', 'Safety Charging Valve', 'Digital Multimeter', 'Gas Can Tap Valve'],
      hi: ['पिंचिंग प्लायर', 'डिजिटल वेट स्केल (वजन कांटा)', 'कैपिलरी कटर', 'सेफ्टी चार्जिंग वाल्व', 'डिजिटल मल्टीमीटर', 'कैन वॉल्व'],
    },
    image: '/assets/aistudio/image_222fe3ed.png',
  },
  {
    id: 'washing-machine-specialist',
    title: {
      en: 'Automatic Washing Machine Repair Specialist',
      hi: 'ऑटोमैटिक वॉशिंग मशीन रिपेयर स्पेशलिस्ट कोर्स',
    },
    category: 'appliances',
    duration: {
      en: '1 Month Intensive Hands-On',
      hi: '1 महीना गहन प्रैक्टिकल ट्रेनिंग',
    },
    level: {
      en: 'Beginner to Expert',
      hi: 'शुरुआती से लेकर एक्सपर्ट',
    },
    badge: {
      en: 'Fast Learning • Quick Earnings',
      hi: 'जल्दी सीखें • तुरंत कमाई शुरू',
    },
    shortDesc: {
      en: 'Master Semi-Automatic, Fully Automatic Top-Load, and Front-Load machines. Learn gearbox, direct drive inverter motor, water level sensor, drain motor, and error codes (dE, IE, OE, UE, PE).',
      hi: 'सेमी-ऑटोमैटिक, फुली ऑटोमैटिक टॉप लोड और फ्रंट लोड मशीनों की ट्रेनिंग। गियरबॉक्स, डायरेक्ट ड्राइव इन्वर्टर मोटर, प्रेशर सेंसर और एरर कोड (dE, IE, OE, UE, PE) ठीक करना।',
    },
    iconName: 'Sparkles',
    practicalPercent: 100,
    expectedSalary: {
      en: '₹22,000 - ₹42,000 / month',
      hi: '₹22,000 - ₹42,000 / महीना',
    },
    businessPotential: {
      en: 'Spare parts profit margin is 40-60%; service charge ₹500 - ₹1,500 per repair',
      hi: 'स्पेयर पार्ट्स पर 40-60% मुनाफा; हर मशीन रिपेयर पर ₹500 से ₹1,500 सर्विस चार्ज',
    },
    keyTopics: {
      en: [
        'Semi-Automatic Wash & Spin Motor, Gearbox & Brake Assembly',
        'Fully Automatic Top Load Mechanism & Pulsator Removal',
        'Front Load Suspension Springs, Spider Arm & Drum Bearing Replacement',
        'Inverter Direct Drive (DD) Motor & Hall Sensor Testing',
        'Pressure Sensor (Water Level) & Inlet Solenoid Valve',
        'Drain Pump, Door Lock Sensor & Motherboard Error Decoding',
      ],
      hi: [
        'सेमी ऑटोमैटिक वॉश और स्पिन मोटर, गियरबॉक्स और ब्रेक असेंबली',
        'टॉप लोड ऑटोमैटिक मशीन का ड्रम और पल्सेटर खोलना',
        'फ्रंट लोड सस्पेंशन स्प्रिंग, स्पाइडर आर्म और बेयरिंग बदलना',
        'डायरेक्ट ड्राइव (DD) इन्वर्टर मोटर और हॉल सेंसर की चेकिंग',
        'प्रेशर सेंसर (वाटर लेवल) और इनलेट सोलेनोइड वाल्व रिपेयर',
        'ड्रेन मोटर, डोर लॉक स्विच और मदरबोर्ड एरर कोड समाधान',
      ],
    },
    syllabus: [
      {
        module: { en: 'Module 1: Semi-Automatic Machines', hi: 'मॉड्यूल 1: सेमी-ऑटोमैटिक मशीन' },
        topics: {
          en: ['Wash timer & spin timer internal contact repair', 'Spin buffer seal replacement to prevent motor burning', 'Buzzer, selector switch & capacitor wiring'],
          hi: ['वॉश टाइमर और स्पिन टाइमर रिपेयर', 'स्पिन बफर सील बदलना ताकि मोटर में पानी न जाए', 'बजर, सेलेक्टर स्विच और कैपेसिटर कनेक्शन'],
        },
      },
      {
        module: { en: 'Module 2: Top Load Fully Automatic', hi: 'मॉड्यूल 2: टॉप लोड फुली ऑटोमैटिक' },
        topics: {
          en: ['Clutch assembly and gear reduction', 'Drain motor pull mechanism and brake release', 'Unbalance switch and vibration damper rod adjustment'],
          hi: ['क्लच असेंबली और गियर सिस्टम', 'ड्रेन मोटर और ब्रेक रिलीज सिस्टम', 'वाइब्रेशन रॉड और अनबैलेंस स्विच ठीक करना'],
        },
      },
      {
        module: { en: 'Module 3: Front Load Inverter Technology', hi: 'मॉड्यूल 3: फ्रंट लोड इन्वर्टर टेक्नोलॉजी' },
        topics: {
          en: ['BLDC inverter drive motor testing with multimeter', 'Door safety interlock PTC switch tracing', 'Heater rod and NTC temperature sensor replacement'],
          hi: ['बीएलडीसी इन्वर्टर मोटर टेस्टिंग', 'डोर इंटरलॉक स्विच और पीटीसी कॉइल ट्रेसिंग', 'पानी गर्म करने वाला हीटर रॉड और एनटीसी सेंसर'],
        },
      },
    ],
    toolsLearned: {
      en: ['Drum Puller Tool', 'Bearing Puller', 'Multi-Pin Probe Meter', 'Spring Clamping Pliers', 'Pressure Gauge Simulator'],
      hi: ['ड्रम पुलर टूल', 'बेयरिंग पुलर', 'मल्टीमीटर प्रोब', 'स्प्रिंग क्लैम्प प्लायर', 'प्रेशर गेज सिम्युलेटर'],
    },
    image: 'https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'ro-water-purifier',
    title: {
      en: 'Domestic & Commercial RO Purifier Technician Course',
      hi: 'डोमेस्टिक एवं कमर्शियल आरओ वाटर प्यूरीफायर कोर्स',
    },
    category: 'appliances',
    duration: {
      en: '15 Days Crash Course / 1 Month Master',
      hi: '15 दिन क्रैश कोर्स / 1 महीना मास्टर',
    },
    level: {
      en: 'All Levels (Quickest to start earning)',
      hi: 'सभी के लिए (सबसे जल्दी कमाई शुरू)',
    },
    badge: {
      en: 'Year-Round AMC Business',
      hi: 'सालाना AMC से फिक्स कमाई',
    },
    shortDesc: {
      en: 'Complete practical knowledge of RO, UV, UF, Alkaline, and TDS controller purifiers. Booster pump repair, SMPS adapter, membrane replacement, filter housing, and annual maintenance contract (AMC) business.',
      hi: 'आरओ, यूवी, यूएफ, अल्कलाइन और टीडीएस कंट्रोलर की संपूर्ण ट्रेनिंग। बूस्टर पंप रिपेयरिंग, एसएमपीएस, मेम्ब्रेन चेंज, पाइपिंग और सालाना एएमसी (AMC) बिजनेस मॉडल।',
    },
    iconName: 'Droplets',
    practicalPercent: 100,
    expectedSalary: {
      en: '₹20,000 - ₹38,000 / month',
      hi: '₹20,000 - ₹38,000 / महीना',
    },
    businessPotential: {
      en: 'Sign 100-200 AMCs per year = ₹20,000 - ₹50,000 fixed recurring monthly profit',
      hi: 'हर साल 100-200 परिवारों का AMC लें = हर महीने ₹20,000 से ₹50,000 की बंधी कमाई',
    },
    keyTopics: {
      en: [
        'Water Chemistry: TDS, pH, Hardness & Filtration Stages',
        'Booster Pump Pressure Testing (PSI) & Diaphragm Kit Replacement',
        'SMPS Power Supply (24V/36V DC) & Float Switch Wiring',
        'RO Membrane (75/80/100 GPD) Flow & Rejection Ratio Tuning',
        'Sediment, Pre-Carbon, Post-Carbon & Mineral Alkaline Filters',
        'TDS Adjuster Valve & Auto Flush Solenoid Valve (SV)',
      ],
      hi: [
        'पानी की जांच: टीडीएस (TDS), पीएच (pH), खारापन और फिल्टर स्टेजेस',
        'बूस्टर पंप प्रेशर चेकिंग और डायाफ्राम किट बदलना',
        'एसएमपीएस पावर सप्लाई (24V/36V) और फ्लोट स्विच कनेक्शन',
        'आरओ मेम्ब्रेन (75/80/100 GPD) इंस्टॉलेशन और वेस्ट वाटर रेशियो',
        'सेडिमेंट, कार्बन और मिनरल अल्कलाइन कॉपर फिल्टर लगाना',
        'टीडीएस एडजेस्टर वाल्व और ऑटो फ्लश सोलेनोइड वाल्व (SV) सेटिंग',
      ],
    },
    syllabus: [
      {
        module: { en: 'Module 1: RO Pipeline & Filter Stages', hi: 'मॉड्यूल 1: आरओ पाइपलाइन और फिल्ट्रेशन' },
        topics: {
          en: ['Pre-filter bowl mounting and spanner usage', 'Push-fit elbow, tee & check valve connections', 'TDS meter calibration and water testing'],
          hi: ['प्री-फिल्टर बाउल फिटिंग और स्पैनर का उपयोग', 'पुश-फिट एल्बो, टी और चेक वाल्व कनेक्शन', 'डिजिटल टीडीएस मीटर से पानी चेक करना'],
        },
      },
      {
        module: { en: 'Module 2: Electrical Controls & Pump', hi: 'मॉड्यूल 2: इलेक्ट्रिकल कंट्रोल और बूस्टर पंप' },
        topics: {
          en: ['Low Pressure Switch (LPS) and High Pressure Switch (HPS)', 'Solenoid valve coil testing with 24V supply', 'Booster pump head repair and carbon brush servicing'],
          hi: ['लो प्रेशर स्विच (LPS) और हाई प्रेशर स्विच (HPS)', 'सोलेनोइड वाल्व कॉइल टेस्टिंग', 'बूस्टर पंप हेड खोलकर डायाफ्राम बदलना'],
        },
      },
    ],
    toolsLearned: {
      en: ['Digital TDS Meter', 'Water Pressure Gauge', 'Filter Spanner Set', 'Tube Cutter', 'pH Test Liquid Kit'],
      hi: ['डिजिटल टीडीएस मीटर', 'वाटर प्रेशर गेज', 'फिल्टर हाउसिंग स्पैनर', 'ट्यूब कटर', 'पीएच टेस्ट किट'],
    },
    image: 'https://images.unsplash.com/photo-1548839140-29a749e1bc4e?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'geyser-water-heater',
    title: {
      en: 'Electric & Gas Geyser Technician Course',
      hi: 'इलेक्ट्रिक एवं गैस गीजर टेक्नीशियन कोर्स',
    },
    category: 'appliances',
    duration: {
      en: '15 Days Crash Course / 1 Month',
      hi: '15 दिन क्रैश कोर्स / 1 महीना',
    },
    level: {
      en: 'Beginner Friendly',
      hi: 'शुरुआती छात्रों के लिए आसान',
    },
    badge: {
      en: 'High Winter Demand',
      hi: 'सर्दियों में भारी कमाई',
    },
    shortDesc: {
      en: 'Practical repair of Instant & Storage electric geysers, heating elements, thermostat calibration, thermal cutout, magnesium anode, and gas geyser pulse igniters and gas valves.',
      hi: 'इंस्टेंट और स्टोरेज गीजर, हीटिंग एलिमेंट, थर्मोस्टैट, थर्मल कटआउट, मैग्नीशियम एनोड रॉड और गैस गीजर के पल्स इग्नाइटर व गैस वाल्व की संपूर्ण रिपेयरिंग।',
    },
    iconName: 'Flame',
    practicalPercent: 100,
    expectedSalary: {
      en: '₹20,000 - ₹35,000 / month',
      hi: '₹20,000 - ₹35,000 / महीना',
    },
    businessPotential: {
      en: 'Average repair charge ₹500 - ₹1,200 per geyser; high volume during winter season',
      hi: 'प्रति गीजर ₹500 से ₹1,200 तक की कमाई; सर्दियों में हर रोज 5-10 कॉल आसानी से',
    },
    keyTopics: {
      en: [
        'Storage Geyser Heating Element (2kW/3kW) & Gasket Replacement',
        'Stem Thermostat & Preset Safety Cutout Testing',
        'Multi-function Safety Valve (PRV/NRV) & Pressure Tank Descaling',
        'Magnesium Anode Rod Replacement to Prevent Tank Corrosion',
        'Gas Geyser Micro-Switch, Water Diaphragm & Solenoid Valve',
        'Pulse Igniter, Spark Electrode & Flame Sensor Safety',
      ],
      hi: [
        'स्टोरेज गीजर हीटिंग एलिमेंट (2kW/3kW) और गैसकेट बदलना',
        'स्टेम थर्मोस्टैट और प्रीसेट सेफ्टी कटआउट की जांच',
        'मल्टीफंक्शन सेफ्टी वाल्व (PRV/NRV) और टैंक डीस्केलिंग',
        'टैंक को जंग से बचाने वाला मैग्नीशियम एनोड रॉड बदलना',
        'गैस गीजर माइक्रो-स्विच, वाटर डायाफ्राम और सोलेनोइड वाल्व',
        'पल्स इग्नाइटर, स्पार्क इलेक्ट्रोड और फ्लेम सेंसर चेकिंग',
      ],
    },
    syllabus: [
      {
        module: { en: 'Module 1: Electric Storage & Instant Geyser', hi: 'मॉड्यूल 1: इलेक्ट्रिक स्टोरेज व इंस्टेंट गीजर' },
        topics: {
          en: ['Earthing safety & current leakage testing', 'Element resistance calculation using Ohm’s law', 'Thermostat cut-off temperature adjustment (55°C - 75°C)'],
          hi: ['अर्थिंग सुरक्षा और करंट लीकेज चेक करना', 'मल्टीमीटर से एलिमेंट का ओह्म रेजिस्टेंस नापना', 'थर्मोस्टैट कट-ऑफ तापमान सेटिंग'],
        },
      },
      {
        module: { en: 'Module 2: Gas Geyser Safety & Ignition', hi: 'मॉड्यूल 2: गैस गीजर सुरक्षा एवं इग्निशन सिस्टम' },
        topics: {
          en: ['Gas pipeline connection & leak testing', 'Water flow sensor & battery compartment wiring', 'Solenoid coil and burner flame tuning'],
          hi: ['गैस पाइपलाइन कनेक्शन और लीकेज सेफ्टी टेस्ट', 'वाटर फ्लो सेंसर और 3V बैटरी कनेक्शन', 'सोलेनोइड कॉइल और बर्नर फ्लेम सेटिंग'],
        },
      },
    ],
    toolsLearned: {
      en: ['Digital Multimeter', 'Element Box Spanner', 'Descaling Pump', 'Gas Leak Detector', 'Water Pressure Tester'],
      hi: ['डिजिटल मल्टीमीटर', 'एलिमेंट बॉक्स स्पैनर', 'डीस्केलिंग पंप', 'गैस लीक डिटेक्टर', 'प्रेशर टेस्टर'],
    },
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'pcb-circuit-inverter',
    title: {
      en: 'AC, Fridge & Washing Machine Inverter PCB Board Repairing',
      hi: 'एसी, फ्रिज व वॉशिंग मशीन इन्वर्टर पीसीबी कार्ड रिपेयरिंग',
    },
    category: 'electronics',
    duration: {
      en: '2 Months Advanced Laboratory',
      hi: '2 महीने एडवांस्ड इलेक्ट्रॉनिक्स लैब',
    },
    level: {
      en: 'Advanced Electronics & Card Level',
      hi: 'एडवांस्ड इलेक्ट्रॉनिक्स एवं कार्ड लेवल',
    },
    badge: {
      en: 'Highest Profit Margin (Sit & Earn)',
      hi: 'सबसे ज्यादा मार्जिन (बैठे-बैठे कमाई)',
    },
    shortDesc: {
      en: 'Become a certified PCB card specialist. Learn SMPS power supply troubleshooting, IPM module testing, microcontroller signals, SMD soldering, optocoupler tracing, and EEPROM resetting.',
      hi: 'पीसीबी कार्ड विशेषज्ञ बनें। एसएमपीएस पावर सप्लाई, आईपीएम (IPM) मॉड्यूल, माइक्रोकंट्रोलर सिग्नल्स, एसएमडी सोल्डरिंग, ऑप्टोकपलर और ईईप्रोम रीसेट की 100% प्रैक्टिकल ट्रेनिंग।',
    },
    iconName: 'Cpu',
    practicalPercent: 100,
    expectedSalary: {
      en: '₹35,000 - ₹70,000 / month (Technicians bring boards to you)',
      hi: '₹35,000 - ₹70,000 / महीना (अन्य मिस्त्री बोर्ड आपके पास रिपेयर करवाने लाएंगे)',
    },
    businessPotential: {
      en: 'New Inverter PCB costs ₹4,000 - ₹8,000; repair cost is ₹800 - ₹2,500 with parts cost under ₹150!',
      hi: 'नया इन्वर्टर पीसीबी ₹4,000-₹8,000 का आता है; रिपेयरिंग का चार्ज ₹800-₹2,500 मिलता है जबकि पार्ट्स का खर्च केवल ₹100-₹150 आता है!',
    },
    keyTopics: {
      en: [
        'Electronics Components: Resistors, SMD Capacitors, Diodes, Zener, MOSFETs, IGBTs',
        'SMPS Switching Power Supply Circuit Tracing (VIPer, TOP, LNK ICs)',
        'Inverter AC Intelligent Power Module (IPM) 6-Channel PWM Testing',
        'DC Motor Driver Circuit (FG feedback & Vsp speed control)',
        'Microcontroller 5V/3.3V Reset, Crystal Oscillator & EEPROM Data',
        'Hot Air SMD Rework Station & Micro Soldering Technique',
      ],
      hi: [
        'इलेक्ट्रॉनिक्स कंपोनेंट्स: रेजिस्टर, एसएमडी कैपेसिटर, डायोड, मॉस्फेट, आईजीबीटी',
        'एसएमपीएस स्विचिंग पावर सप्लाई सर्किट ट्रेसिंग (VIPer, TOP, LNK ICs)',
        'इन्वर्टर एसी इंटेलिजेंट पावर मॉड्यूल (IPM) 6-चैनल पीडब्लूएम टेस्टिंग',
        'डीसी मोटर ड्राइवर सर्किट (FG फीडबैक और स्पीड कंट्रोल)',
        'माइक्रोकंट्रोलर 5V/3.3V रिसेट, क्रिस्टल ऑसिलेटर और डाटा पिन',
        'एसएमडी हॉट एयर ब्लोअर और माइक्रो सोल्डरिंग तकनीक',
      ],
    },
    syllabus: [
      {
        module: { en: 'Module 1: Passive & Active Components', hi: 'मॉड्यूल 1: बेसिक इलेक्ट्रॉनिक्स कंपोनेंट्स' },
        topics: {
          en: ['SMD code decoding and multimeter diode testing', 'Capacitor ESR checking and bulging issues', 'Optocoupler 817 and TL431 precision shunt regulator'],
          hi: ['एसएमडी कोड पढ़ना और डायोड मोड में कंपोनेंट चेक करना', 'कैपेसिटर ईएसआर और लीकेज चेक करना', 'ऑप्टोकपलर 817 और TL431 रेगुलेटर टेस्टिंग'],
        },
      },
      {
        module: { en: 'Module 2: Inverter Driver & IPM Architecture', hi: 'मॉड्यूल 2: इन्वर्टर ड्राइवर एवं IPM सेक्शन' },
        topics: {
          en: ['High voltage 300V DC bus filter capacitor check', '6-step PWM signal tracing from MCU to IPM', 'Current sensing shunt resistor and OCP fault trigger'],
          hi: ['हाई वोल्टेज 300V डीसी फिल्टर कैपेसिटर चेकिंग', 'एमसीयू से आईपीएम तक जाने वाले 6 पीडब्लूएम सिग्नल्स', 'करंट सेंसिंग शंट रेजिस्टर और ओवर करंट प्रोटेक्शन'],
        },
      },
    ],
    toolsLearned: {
      en: ['Digital Storage Oscilloscope (DSO)', 'SMD Hot Air Rework Station', 'Digital Multimeter with True RMS', 'Component Tester LCR-T4', 'Variable DC Bench Power Supply'],
      hi: ['डिजिटल ऑसिलोस्कोप (DSO)', 'एसएमडी हॉट एयर रिवर्क स्टेशन', 'डिजिटल मल्टीमीटर True RMS', 'एलसीआर कंपोनेंट टेस्टर', 'वेरिएबल डीसी पावर सप्लाई'],
    },
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'house-wiring-electrical',
    title: {
      en: 'House Wiring & Industrial Electrical Technician Course',
      hi: 'हाउस वायरिंग एवं इंडस्ट्रियल इलेक्ट्रिकल टेक्नीशियन कोर्स',
    },
    category: 'electrical',
    duration: {
      en: '1.5 Months Practical',
      hi: '1.5 महीने प्रैक्टिकल',
    },
    level: {
      en: 'Beginner to Professional Contractor',
      hi: 'शुरुआती से लेकर बिजली ठेकेदार स्तर',
    },
    badge: {
      en: 'Government & Private Jobs',
      hi: 'सरकारी एवं प्राइवेट नौकरी व ठेकेदारी',
    },
    shortDesc: {
      en: 'Single & Three Phase wiring, MCB / RCCB / ELCB distribution box design, Inverter & UPS connection, staircase & godown wiring, conduit piping, earthing pit, and electrical contractor skills.',
      hi: 'सिंगल व थ्री फेज वायरिंग, एमसीबी/आरसीसीबी डिस्ट्रीब्यूशन बॉक्स, इन्वर्टर-यूपीएस कनेक्शन, सीढ़ी व गोदाम वायरिंग, पाइपिंग, अर्थिंग और बिजली ठेकेदारी के गुर।',
    },
    iconName: 'Zap',
    practicalPercent: 100,
    expectedSalary: {
      en: '₹24,000 - ₹50,000 / month',
      hi: '₹24,000 - ₹50,000 / महीना',
    },
    businessPotential: {
      en: 'Per flat house wiring contract pays ₹15,000 - ₹35,000 in labour charges alone',
      hi: 'एक नए मकान या फ्लैट की वायरिंग का लेबर चार्ज ₹15,000 से ₹35,000 मिलता है',
    },
    keyTopics: {
      en: [
        'Single Phase & 3-Phase 415V Load Distribution & Phase Balancing',
        'MCB, RCCB, MCCB & Isolator Sizing Calculation as per Wattage',
        'Staircase, Corridor, Master Bed Two-Way Switch Wiring',
        'Inverter, Battery Setup & Changeover Switch Connections',
        'Plate & Pipe Chemical Earthing Pit Construction & Megger Testing',
        'Conduit Pipe Laying, Chipping & Modular Switchboard Fitting',
      ],
      hi: [
        'सिंगल फेज और 3-फेज 415V लोड डिस्ट्रीब्यूशन और फेज बैलेंसिंग',
        'लोड के हिसाब से एमसीबी, आरसीसीबी और आइसोलेटर का चुनाव',
        'टू-वे स्विच, सीढ़ी और कॉरिडोर वायरिंग के आसान तरीके',
        'इन्वर्टर और बैटरी का सही कनेक्शन और चेंजर स्विच',
        'केमिकल अर्थिंग गड्ढा तैयार करना और मेगर से अर्थ रेजिस्टेंस चेक करना',
        'दीवार झिरी कटिंग, पाइपिंग और मॉड्युलर स्विचबोर्ड की फिटिंग',
      ],
    },
    syllabus: [
      {
        module: { en: 'Module 1: Electrical Safety & Distribution Board', hi: 'मॉड्यूल 1: इलेक्ट्रिकल सुरक्षा एवं डीबी ड्रेसिंग' },
        topics: {
          en: ['Ohm’s law and cable ampacity selection (1.5, 2.5, 4, 6 sq mm)', 'RCCB trip testing for shock protection (30mA)', 'Neat DB dressing with ferrule numbers'],
          hi: ['तारों की क्षमता चुनना (1.5, 2.5, 4, 6 sq mm)', 'करंट के झटके से बचाने वाला आरसीसीबी (30mA) टेस्ट', 'डीबी बॉक्स की सुंदर और सुरक्षित ड्रेसिंग'],
        },
      },
      {
        module: { en: 'Module 2: Modular Fitting & Inverter Wiring', hi: 'मॉड्यूल 2: मॉड्युलर फिटिंग एवं इन्वर्टर वायरिंग' },
        topics: {
          en: ['Modular plate cutting and switch-socket wiring', 'Dedicated inverter return wire installation', 'Earth loop impedance test'],
          hi: ['मॉड्युलर प्लेट और स्विच-सॉकेट फिटिंग', 'इन्वर्टर की अलग रिटर्न न्यूट्रल/फेज वायरिंग', 'अर्थिंग लूप टेस्ट'],
        },
      },
    ],
    toolsLearned: {
      en: ['Digital Earth Megger Tester', 'Wire Stripper & Crimper', 'Wall Chaser Groove Cutter', 'Digital Clamp Meter', 'Insulated VDE Pliers Set'],
      hi: ['डिजिटल अर्थ मेगर टेस्टर', 'वायर स्ट्रिपर और क्रिम्पर', 'दीवार झिरी कटर मशीन', 'डिजिटल क्लैम्प मीटर', 'इंसुलेटेड प्लायर सेट'],
    },
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'microwave-oven-repair',
    title: {
      en: 'Commercial & Domestic Microwave Oven Repair Course',
      hi: 'कमर्शियल एवं डोमेस्टिक माइक्रोवेव ओवन रिपेयर कोर्स',
    },
    category: 'appliances',
    duration: {
      en: '20 Days Practical',
      hi: '20 दिन प्रैक्टिकल',
    },
    level: {
      en: 'Beginner to Intermediate',
      hi: 'शुरुआती से मध्यम स्तर',
    },
    badge: {
      en: 'Add-On Skill with High Margins',
      hi: 'एक्स्ट्रा कमाई कराने वाला कोर्स',
    },
    shortDesc: {
      en: 'Learn Magnetron emission testing, High Voltage (HV) Transformer, 2100V HV Capacitor safety discharging, high voltage diode, turntable motor, and touch keypad membrane repair.',
      hi: 'मैग्नेट्रॉन चेकिंग, हाई वोल्टेज ट्रांसफार्मर (2000V), एचवी कैपेसिटर डिस्चार्जिंग सेफ्टी, डायोड, टर्नटेबल मोटर और टच मेम्ब्रेन की संपूर्ण प्रैक्टिकल रिपेयरिंग।',
    },
    iconName: 'Radio',
    practicalPercent: 100,
    expectedSalary: {
      en: '₹20,000 - ₹35,000 / month',
      hi: '₹20,000 - ₹35,000 / महीना',
    },
    businessPotential: {
      en: 'Service charge ₹400 - ₹1,000; Magnetron replacement brings ₹800+ pure profit',
      hi: 'सर्विस चार्ज ₹400-₹1,000; नया मैग्नेट्रॉन बदलने पर ₹800+ का सीधा मुनाफा',
    },
    keyTopics: {
      en: [
        'High Voltage Safety & Bleeder Resistor Capacitor Discharging',
        'Magnetron Filament Resistance & Internal Short-to-Ground Check',
        'High Voltage Diode (HV05-12) & 2.1kV Transformer Secondary Coil',
        'Primary, Secondary & Monitor Door Safety Interlock Micro-Switches',
        'Turntable Synchronous Motor & Mica Waveguide Cover Replacement',
        'Touch Membrane Keypad Tracing & PCB Relay Triggering',
      ],
      hi: [
        'हाई वोल्टेज सुरक्षा और कैपेसिटर को सुरक्षित डिस्चार्ज करने की विधि',
        'मैग्नेट्रॉन फिलामेंट और बॉडी शॉर्ट चेक करने का सही तरीका',
        'हाई वोल्टेज डायोड और 2.1kV ट्रांसफार्मर सेकेंडरी वाइंडिंग चेकिंग',
        'डोर सेफ्टी इंटरलॉक माइक्रो-स्विच की सही सेटिंग',
        'टर्नटेबल मोटर और माइका शीट (वेवगाइड कवर) बदलना',
        'टच पैड मेम्ब्रेन रिपेयरिंग और रिले ड्राइवर सर्किट',
      ],
    },
    syllabus: [
      {
        module: { en: 'Module 1: High Voltage Circuit & Safety', hi: 'मॉड्यूल 1: हाई वोल्टेज सर्किट एवं सुरक्षा' },
        topics: {
          en: ['Microwave radiation principles and leak prevention', 'Capacitor discharge tool usage before touch', 'Magnetron cooling fan and thermal protector switch'],
          hi: ['माइक्रोवेव रेडिएशन सिद्धांत और बॉडी लीकेज टेस्ट', 'हाथ लगाने से पहले कैपेसिटर डिस्चार्ज करना', 'कूलिंग फैन और थर्मल प्रोटेक्टर स्विच'],
        },
      },
    ],
    toolsLearned: {
      en: ['High Voltage Probe', 'Digital Multimeter', 'Capacitor Discharge Tool', 'Soldering Station', 'Radiation Meter'],
      hi: ['हाई वोल्टेज प्रोब', 'डिजिटल मल्टीमीटर', 'कैपेसिटर डिस्चार्ज टूल', 'सोल्डरिंग स्टेशन', 'रेडिएशन टेस्टर'],
    },
    image: 'https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?auto=format&fit=crop&w=800&q=80',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Rahul Prajapati',
    role: { en: 'Service Center Owner', hi: 'स्वयं के सर्विस सेंटर के मालिक' },
    city: 'Ahmedabad, Gujarat',
    rating: 5,
    review: {
      en: 'Before coming to BYD Technical Institute, I had zero electrical knowledge. Here sir gave 100% hands-on live training on Inverter AC and Fridge. Today I run my own shop in Chandkheda and earn ₹50,000+ every month. Best institute in Gujarat!',
      hi: 'BYD इंस्टीट्यूट आने से पहले मुझे बिजली का कोई ज्ञान नहीं था। यहाँ सर ने इनवर्टर एसी और फ्रिज पर 100% लाइव प्रैक्टिकल कराया। आज मैं चांदखेड़ा में अपनी खुद की रिपेयर शॉप चला रहा हूँ और महीने के ₹50,000+ कमा रहा हूँ।',
    },
    courseTaken: { en: 'Advanced AC Technician & PCB Course', hi: 'एडवांस्ड एसी टेक्नीशियन एवं पीसीबी कोर्स' },
    currentStatus: { en: 'Owns "Prajapati Cool Service"', hi: 'खुद की दुकान: प्रजापति कूल सर्विस' },
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
    date: '1 month ago',
    source: 'google',
  },
  {
    id: 't2',
    name: 'Mohammad Farooq',
    role: { en: 'HVAC Technician in Dubai', hi: 'दुबई में एचवीएसी टेक्नीशियन' },
    city: 'Surat (Now in UAE)',
    rating: 5,
    review: {
      en: 'The practical training with R32 gas and VRV at BYD helped me clear the Dubai Gulf company technical interview in one attempt! The live test benches and mentor guidance gave me solid hands-on confidence. Thank you BYD team.',
      hi: 'R32 गैस और इन्वर्टर एसी की 100% प्रैक्टिकल नॉलेज की वजह से मुझे दुबई की कंपनी में एक ही बार में अच्छी नौकरी मिल गई। चांदखेड़ा में लाइव लैब्स और अनुभवी ट्रेनर्स का मार्गदर्शन बहुत शानदार रहा। थैंक यू BYD टीम।',
    },
    courseTaken: { en: 'Diploma in AC & Refrigeration', hi: 'डिप्लोमा इन एसी एवं रेफ्रिजरेशन' },
    currentStatus: { en: 'Working with Gulf HVAC Group', hi: 'दुबई में नौकरी: 3,200 AED वेतन' },
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80',
    date: '2 months ago',
    source: 'google',
  },
  {
    id: 't3',
    name: 'Vikramsinh Vaghela',
    role: { en: 'Appliance Repair Entrepreneur', hi: 'होम अप्लायंसेज उद्यमी' },
    city: 'Mehsana, Gujarat',
    rating: 5,
    review: {
      en: 'The faculty is exceptionally patient. They let us dismantle and reassemble washing machines and fridges until every single sensor and error code is understood. Lifetime backup support is genuine!',
      hi: 'यहाँ के सर बहुत प्यार से सिखाते हैं। जब तक हमें एक-एक वायर और एरर कोड समझ नहीं आ जाता, तब तक मशीन पर प्रैक्टिकल करवाते हैं। कोर्स खत्म होने के बाद भी जब फील्ड में दिक्कत आती है तो फोन पर तुरंत सपोर्ट मिलता है।',
    },
    courseTaken: { en: 'Washing Machine & RO Purifier Course', hi: 'वॉशिंग मशीन एवं आरओ प्यूरीफायर कोर्स' },
    currentStatus: { en: 'Serving 200+ AMC clients in Mehsana', hi: 'मेहसाणा में 200+ घरों की एएमसी सर्विस' },
    avatar: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=150&q=80',
    date: '3 weeks ago',
    source: 'google',
  },
  {
    id: 't4',
    name: 'Sunil Kumar Yadav',
    role: { en: 'PCB Repair Expert', hi: 'पीसीबी रिपेयरिंग एक्सपर्ट' },
    city: 'Varanasi, UP (Came to Ahmedabad)',
    rating: 5,
    review: {
      en: 'I traveled from UP specifically because of the practical reels on Instagram. Learning on live circuit boards, DSO testing, and SMD stations was exceptional. Today other mechanics bring damaged AC circuit boards to me for soldering and testing.',
      hi: 'मैं इंस्टाग्राम पर रील्स देखकर खास तौर पर यूपी से अहमदाबाद आया था। लाइव सर्किट बोर्ड और डीएसओ टेस्टिंग पर सीखना बहुत शानदार रहा। आज बाकी एसी वाले मिस्त्री खराब कार्ड रिपेयर करवाने मेरे पास आते हैं।',
    },
    courseTaken: { en: 'Inverter PCB Board Repairing', hi: 'इन्वर्टर पीसीबी बोर्ड रिपेयरिंग' },
    currentStatus: { en: 'Card Repairing Lab in Varanasi', hi: 'खुद की पीसीबी लैब चला रहे हैं' },
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=150&q=80',
    date: '4 months ago',
    source: 'instagram',
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g1',
    title: { en: 'Live AC Gas Charging Lab', hi: 'लाइव एसी गैस चार्जिंग एवं वैक्यूमिंग लैब' },
    category: 'lab',
    image: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=800&q=80',
    description: { en: 'Students practicing manifold gauge vacuuming and R32 charging.', hi: 'छात्र मैनिफोल्ड गेज और वैक्यूम पंप से लाइव गैस चार्जिंग सीखते हुए।' },
  },
  {
    id: 'g2',
    title: { en: 'Inverter PCB Testing Station', hi: 'इन्वर्टर पीसीबी कंपोनेंट एवं डीएसओ टेस्टिंग' },
    category: 'lab',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
    description: { en: 'Oscilloscope signal tracking on inverter AC motherboards.', hi: 'ऑसिलोस्कोप से पीसीबी मदरबोर्ड पर पीडब्लूएम सिग्नल चेक करते हुए।' },
  },
  {
    id: 'g3',
    title: { en: 'Automatic Washing Machine Drum Lab', hi: 'ऑटोमैटिक वॉशिंग मशीन ड्रम व गियरबॉक्स लैब' },
    category: 'lab',
    image: 'https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?auto=format&fit=crop&w=800&q=80',
    description: { en: 'Direct drive inverter motor and clutch assembly practical.', hi: 'डायरेक्ट ड्राइव मोटर और क्लच असेंबली की प्रैक्टिकल ट्रेनिंग।' },
  },
  {
    id: 'g4',
    title: { en: 'Student Batch Practical Workshop', hi: 'विद्यार्थी बैच प्रैक्टिकल वर्कशॉप' },
    category: 'students',
    image: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=800&q=80',
    description: { en: 'Hands-on live problem solving with experienced trainers.', hi: 'अनुभवी ट्रेनर की देखरेख में लाइव फॉल्ट ठीक करते छात्र।' },
  },
  {
    id: 'g5',
    title: { en: 'Modern Toolkits & Diagnostic Gear', hi: 'आधुनिक टूल्स एवं डायग्नोस्टिक किट' },
    category: 'tools',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
    description: { en: 'Digital multimeters, manifold gauges, flaring tools, and vacuum testing stations.', hi: 'डिजिटल मल्टीमीटर, मैनिफोल्ड गेज, फ्लेयरिंग टूल्स और वैक्यूम टेस्टिंग स्टेशन।' },
  },
  {
    id: 'g6',
    title: { en: 'Course Completion Certification', hi: 'कोर्स समापन एवं प्रमाण पत्र वितरण' },
    category: 'certificates',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80',
    description: { en: 'Proud students receiving their recognized vocational diplomas.', hi: 'सफलतापूर्वक कोर्स पूरा करने पर मान्यता प्राप्त सर्टिफिकेट प्राप्त करते छात्र।' },
  },
];

export const FAQS: FaqItem[] = [
  {
    id: 'faq-1',
    category: 'admission',
    question: {
      en: 'What is the educational qualification required to join BYD Technical Institute?',
      hi: 'BYD टेक्निकल इंस्टीट्यूट में एडमिशन लेने के लिए कितनी पढ़ाई जरूरी है?',
    },
    answer: {
      en: 'No high educational degree is required! Anyone who has completed 8th, 10th, 12th, ITI, Diploma or wants to learn technical skills can join. Our training starts from absolute basics and focuses 100% on practical hands-on work.',
      hi: 'कोई बड़ी डिग्री की जरूरत नहीं है! अगर आपने 8वीं, 10वीं, 12वीं या आईटीआई की है, या बिना किसी डिग्री के भी हाथ का हुनर सीखना चाहते हैं, तो आप जुड़ सकते हैं। हम बिल्कुल जीरो लेवल से प्रैक्टिकल सिखाते हैं।',
    },
  },
  {
    id: 'faq-2',
    category: 'course',
    question: {
      en: 'What kind of practical tools and machines will I learn to operate?',
      hi: 'ट्रेनिंग में मुझे कौन-से टूल्स और मशीनों पर काम सीखने को मिलेगा?',
    },
    answer: {
      en: 'You will work hands-on with digital manifold gauges, micron vacuum pumps, DSO oscilloscopes, SMD rework stations, leak detectors, flaring kits, and high-pressure jet pumps.',
      hi: 'आप डिजिटल मैनिफोल्ड गेज, वैक्यूम पंप, डीएसओ ऑसिलोस्कोप, एसएमडी रिवर्क स्टेशन, लीक डिटेक्टर और हाई प्रेशर जेट पंप पर स्वयं काम करना सीखेंगे।',
    },
  },
  {
    id: 'faq-3',
    category: 'placement',
    question: {
      en: 'Do you provide job placement or assistance in starting our own business?',
      hi: 'क्या कोर्स के बाद नौकरी या खुद की दुकान खोलने में मदद मिलती है?',
    },
    answer: {
      en: 'Yes, 100%! We provide direct placement interviews with authorized service centers (LG, Samsung, Daikin, Voltas, Urban Company). If you wish to start your own repair shop or service center, we guide you on tool procurement at wholesale rates, spare parts dealer contacts, and customer acquisition.',
      hi: 'जी हाँ, 100%! हम बड़ी कंपनियों और सर्विस सेंटर्स (जैसे LG, सैमसंग, डाइकिन, वोल्टास, अर्बन कंपनी) में इंटरव्यू करवाते हैं। अगर आप अपनी दुकान या सर्विस सेंटर खोलना चाहते हैं, तो होलसेल टूल्स, स्पेयर पार्ट्स के डीलर और ग्राहक पाने की पूरी ट्रेनिंग दी जाती है।',
    },
  },
  {
    id: 'faq-4',
    category: 'course',
    question: {
      en: 'How much percentage of the training is practical?',
      hi: 'ट्रेनिंग में कितने प्रतिशत प्रैक्टिकल कराया जाता है?',
    },
    answer: {
      en: 'Our training is 100% practical in live workshops. You do not just sit with notebooks; you work directly on real split ACs, inverter refrigerators, washing machines, and PCB circuit boards with real tools.',
      hi: 'हमारी पूरी ट्रेनिंग 100% प्रैक्टिकल है। सिर्फ किताबों में नहीं, बल्कि असली स्प्लिट एसी, इन्वर्टर फ्रिज, वॉशिंग मशीन और पीसीबी बोर्ड को अपने हाथों से खोलकर, फॉल्ट ढूंढकर रिपेयर करना सिखाया जाता है।',
    },
  },
  {
    id: 'faq-5',
    category: 'support',
    question: {
      en: 'What if I face a problem while repairing a customer appliance after course completion?',
      hi: 'कोर्स पूरा होने के बाद अगर किसी ग्राहक के घर फॉल्ट समझ न आए तो क्या सहायता मिलेगी?',
    },
    answer: {
      en: 'Every BYD student gets Lifetime Technical Backup Support. You can make a video call or send photos to our faculty trainers directly from the field, and our master engineers will guide you step-by-step.',
      hi: 'हमारे सभी छात्रों को लाइफटाइम टेक्निकल बैकअप सपोर्ट मिलता है। फील्ड में काम करते समय कोई नया या कठिन फॉल्ट आए, तो आप सीधे हमारे सीनियर ट्रेनर्स को वीडियो कॉल या फोटो भेजकर तुरंत समाधान ले सकते हैं।',
    },
  },
  {
    id: 'faq-6',
    category: 'fee',
    question: {
      en: 'Can I pay course fees in installments?',
      hi: 'क्या कोर्स की फीस किस्तों (Installments) में दी जा सकती है?',
    },
    answer: {
      en: 'Yes, flexible installment options are available so that financial difficulty does not stop any hardworking student from learning high-income technical skills.',
      hi: 'हाँ, छात्रों की सुविधा के लिए आसान किस्तों की व्यवस्था उपलब्ध है ताकि पैसे की वजह से किसी भी मेहनती छात्र की पढ़ाई न रुके।',
    },
  },
];

export const PLACEMENT_PARTNERS = [
  'Voltas',
  'Daikin',
  'LG Electronics',
  'Samsung',
  'Blue Star',
  'Godrej',
  'Whirlpool',
  'Urban Company',
  'Haier',
  'Hitachi',
  'Carrier',
  'Lloyd',
];
