// data/content.js
export const languages = [
  { code: 'es', name: 'Spanish', flag: '🇪🇸' },
  { code: 'fr', name: 'French', flag: '🇫🇷' },
  { code: 'de', name: 'German', flag: '🇩🇪' },
  { code: 'it', name: 'Italian', flag: '🇮🇹' },
  { code: 'pt', name: 'Portuguese', flag: '🇵🇹' }
];

export const lessons = {
  es: [
    {
      id: 1,
      title: "Basic Greetings",
      content: "Let's learn how to greet people in Spanish!",
      vocabulary: [
        { word: "Hola", translation: "Hello", pronunciation: "OH-lah" },
        { word: "Buenos días", translation: "Good morning", pronunciation: "BWAY-nohs DEE-ahs" },
        { word: "Buenas tardes", translation: "Good afternoon", pronunciation: "BWAY-nahs TAR-dehs" },
        { word: "Buenas noches", translation: "Good evening", pronunciation: "BWAY-nahs NOH-chehs" },
        { word: "Adiós", translation: "Goodbye", pronunciation: "ah-DYOHS" }
      ],
      exercises: [
        {
          type: "multiple_choice",
          question: "How do you say 'Good morning' in Spanish?",
          options: ["Hola", "Buenos días", "Buenas noches", "Adiós"],
          correct: 1
        },
        {
          type: "fill_blank",
          question: "Complete: '_____ tardes' (Good afternoon)",
          answer: "Buenas"
        }
      ]
    },
    {
      id: 2,
      title: "Numbers 1-10",
      content: "Let's count from 1 to 10 in Spanish!",
      vocabulary: [
        { word: "uno", translation: "one", pronunciation: "OO-noh" },
        { word: "dos", translation: "two", pronunciation: "dohs" },
        { word: "tres", translation: "three", pronunciation: "trehs" },
        { word: "cuatro", translation: "four", pronunciation: "KWAH-troh" },
        { word: "cinco", translation: "five", pronunciation: "SEEN-koh" },
        { word: "seis", translation: "six", pronunciation: "says" },
        { word: "siete", translation: "seven", pronunciation: "see-EH-teh" },
        { word: "ocho", translation: "eight", pronunciation: "OH-choh" },
        { word: "nueve", translation: "nine", pronunciation: "NWAY-veh" },
        { word: "diez", translation: "ten", pronunciation: "dee-EHS" }
      ],
      exercises: [
        {
          type: "multiple_choice",
          question: "What number is 'tres'?",
          options: ["2", "3", "4", "5"],
          correct: 1
        },
        {
          type: "fill_blank",
          question: "Complete the sequence: uno, dos, _____, cuatro",
          answer: "tres"
        }
      ]
    },
    {
      id: 3,
      title: "Family Members",
      content: "Learn how to talk about your family in Spanish!",
      vocabulary: [
        { word: "familia", translation: "family", pronunciation: "fah-MEE-lee-ah" },
        { word: "padre", translation: "father", pronunciation: "PAH-dreh" },
        { word: "madre", translation: "mother", pronunciation: "MAH-dreh" },
        { word: "hermano", translation: "brother", pronunciation: "ehr-MAH-noh" },
        { word: "hermana", translation: "sister", pronunciation: "ehr-MAH-nah" },
        { word: "hijo", translation: "son", pronunciation: "EE-hoh" },
        { word: "hija", translation: "daughter", pronunciation: "EE-hah" }
      ],
      exercises: [
        {
          type: "multiple_choice",
          question: "How do you say 'sister' in Spanish?",
          options: ["hermano", "hermana", "madre", "hija"],
          correct: 1
        },
        {
          type: "fill_blank",
          question: "Mi _____ es muy inteligente (My father is very intelligent)",
          answer: "padre"
        }
      ]
    }
  ],
  fr: [
    {
      id: 1,
      title: "Basic Greetings",
      content: "Learn how to greet people in French!",
      vocabulary: [
        { word: "Bonjour", translation: "Hello/Good morning", pronunciation: "bon-ZHOOR" },
        { word: "Bonsoir", translation: "Good evening", pronunciation: "bon-SWAHR" },
        { word: "Salut", translation: "Hi/Bye (informal)", pronunciation: "sah-LU" },
        { word: "Au revoir", translation: "Goodbye", pronunciation: "oh ruh-VWAHR" },
        { word: "Bonne nuit", translation: "Good night", pronunciation: "bun NWEE" }
      ],
      exercises: [
        {
          type: "multiple_choice",
          question: "How do you say 'Good evening' in French?",
          options: ["Bonjour", "Bonsoir", "Salut", "Au revoir"],
          correct: 1
        },
        {
          type: "fill_blank",
          question: "_____ ! Comment allez-vous? (Hello! How are you?)",
          answer: "Bonjour"
        }
      ]
    }
  ],
  de: [
    {
      id: 1,
      title: "Basic Greetings",
      content: "Learn how to greet people in German!",
      vocabulary: [
        { word: "Hallo", translation: "Hello", pronunciation: "HAH-loh" },
        { word: "Guten Morgen", translation: "Good morning", pronunciation: "GOO-ten MOR-gen" },
        { word: "Guten Tag", translation: "Good day", pronunciation: "GOO-ten TAHK" },
        { word: "Guten Abend", translation: "Good evening", pronunciation: "GOO-ten AH-bent" },
        { word: "Auf Wiedersehen", translation: "Goodbye", pronunciation: "owf VEE-der-zayn" }
      ],
      exercises: [
        {
          type: "multiple_choice",
          question: "How do you say 'Good morning' in German?",
          options: ["Hallo", "Guten Morgen", "Guten Abend", "Auf Wiedersehen"],
          correct: 1
        },
        {
          type: "fill_blank",
          question: "_____ ! Wie geht es Ihnen? (Good day! How are you?)",
          answer: "Guten Tag"
        }
      ]
    }
  ],
  it: [
    {
      id: 1,
      title: "Basic Greetings",
      content: "Learn how to greet people in Italian!",
      vocabulary: [
        { word: "Ciao", translation: "Hello/Goodbye (informal)", pronunciation: "chow" },
        { word: "Buongiorno", translation: "Good morning/day", pronunciation: "bwohn-JOR-noh" },
        { word: "Buonasera", translation: "Good evening", pronunciation: "bwoh-nah-SEH-rah" },
        { word: "Buonanotte", translation: "Good night", pronunciation: "bwoh-nah-NOT-teh" },
        { word: "Arrivederci", translation: "Goodbye (formal)", pronunciation: "ah-ree-veh-DER-chee" }
      ],
      exercises: [
        {
          type: "multiple_choice",
          question: "How do you say 'Good evening' in Italian?",
          options: ["Ciao", "Buongiorno", "Buonasera", "Arrivederci"],
          correct: 2
        },
        {
          type: "fill_blank",
          question: "_____ ! Come stai? (Hello! How are you?)",
          answer: "Ciao"
        }
      ]
    }
  ],
  pt: [
    {
      id: 1,
      title: "Basic Greetings",
      content: "Learn how to greet people in Portuguese!",
      vocabulary: [
        { word: "Olá", translation: "Hello", pronunciation: "oh-LAH" },
        { word: "Bom dia", translation: "Good morning", pronunciation: "bom DEE-ah" },
        { word: "Boa tarde", translation: "Good afternoon", pronunciation: "BOH-ah TAR-deh" },
        { word: "Boa noite", translation: "Good evening/night", pronunciation: "BOH-ah NOY-teh" },
        { word: "Tchau", translation: "Bye", pronunciation: "chow" }
      ],
      exercises: [
        {
          type: "multiple_choice",
          question: "How do you say 'Good morning' in Portuguese?",
          options: ["Olá", "Bom dia", "Boa tarde", "Tchau"],
          correct: 1
        },
        {
          type: "fill_blank",
          question: "_____ ! Como você está? (Hello! How are you?)",
          answer: "Olá"
        }
      ]
    }
  ]
};