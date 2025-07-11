const questions = [
  {
    id: 1,
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
    correctAnswer: "Paris",
    marks: 2
  },
  {
    id: 2,
    question: "Which is the largest ocean on Earth?",
    options: ["Atlantic Ocean", "Indian Ocean", "Pacific Ocean", "Arctic Ocean"],
    correctAnswer: "Pacific Ocean",
    marks: 2
  },
  {
    id: 3,
    question: "What is the name of the largest desert in the world?",
    options: ["Gobi Desert", "Sahara Desert", "Kalahari Desert", "Arabian Desert"],
    correctAnswer: "Sahara Desert",
    marks: 2
  },
  {
    id: 4,
    question: "What is the chemical symbol for gold?",
    options: ["Ag", "Au", "Gd", "Go"],
    correctAnswer: "Au",
    marks: 2
  },
  {
    id: 5,
    question: "What is the hardest natural substance on Earth?",
    options: ["Diamond", "Quartz", "Iron", "Granite"],
    correctAnswer: "Diamond",
    marks: 2
  },
  {
    id: 6,
    question: "Which planet is known as the 'Red Planet'?",
    options: ["Earth", "Venus", "Mars", "Jupiter"],
    correctAnswer: "Mars",
    marks: 2
  },
  {
    id: 7,
    question: "What is the name of the tallest mountain in the world?",
    options: ["K2", "Mount Everest", "Kangchenjunga", "Makalu"],
    correctAnswer: "Mount Everest",
    marks: 2
  },
  {
    id: 8,
    question: "What is the process of liquid water turning into vapor called?",
    options: ["Condensation", "Evaporation", "Sublimation", "Precipitation"],
    correctAnswer: "Evaporation",
    marks: 2
  },
  {
    id: 9,
    question: "What gas do plants absorb from the atmosphere?",
    options: ["Oxygen", "Carbon monoxide", "Carbon dioxide", "Nitrogen"],
    correctAnswer: "Carbon dioxide",
    marks: 2
  },
  {
    id: 10,
    question: "What is the name of the closest star to Earth?",
    options: ["Proxima Centauri", "Alpha Centauri", "The Sun", "Sirius"],
    correctAnswer: "The Sun",
    marks: 2
  },
  {
    id: 11,
    question: "Who is known as the 'Father of the Nation' in India?",
    options: ["Jawaharlal Nehru", "B.R. Ambedkar", "Subhas Chandra Bose", "Mahatma Gandhi"],
    correctAnswer: "Mahatma Gandhi",
    marks: 2
  },
  {
    id: 12,
    question: "What year did World War II end?",
    options: ["1945", "1939", "1941", "1950"],
    correctAnswer: "1945",
    marks: 2
  },
  {
    id: 13,
    question: "Who painted the Mona Lisa?",
    options: ["Vincent van Gogh", "Leonardo da Vinci", "Pablo Picasso", "Michelangelo"],
    correctAnswer: "Leonardo da Vinci",
    marks: 2
  },
  {
    id: 14,
    question: "Who was the first woman to win a Nobel Prize?",
    options: ["Marie Curie", "Rosalind Franklin", "Mother Teresa", "Ada Lovelace"],
    correctAnswer: "Marie Curie",
    marks: 2
  },
  {
    id: 15,
    question: "What is the name of the famous clock tower in London?",
    options: ["London Eye", "Tower Bridge", "Big Ben", "Buckingham Clock"],
    correctAnswer: "Big Ben",
    marks: 2
  },
  {
    id: 16,
    question: "Which ancient civilization built the pyramids?",
    options: ["Mesopotamians", "Romans", "Greeks", "Egyptians"],
    correctAnswer: "Egyptians",
    marks: 2
  },
  {
    id: 17,
    question: "In what year did India gain independence?",
    options: ["1950", "1947", "1945", "1930"],
    correctAnswer: "1947",
    marks: 2
  },
  {
    id: 18,
    question: "Who is considered the father of the Indian Constitution?",
    options: ["Mahatma Gandhi", "B.R. Ambedkar", "Sardar Patel", "Jawaharlal Nehru"],
    correctAnswer: "B.R. Ambedkar",
    marks: 2
  },
  {
    id: 19,
    question: "What is the name of the famous Roman amphitheater?",
    options: ["Pantheon", "The Colosseum", "Forum", "Palatine Hill"],
    correctAnswer: "The Colosseum",
    marks: 2
  },
  {
    id: 20,
    question: "Which Indian state is known as the 'Land of the Rising Sun'?",
    options: ["Sikkim", "Nagaland", "Arunachal Pradesh", "Assam"],
    correctAnswer: "Arunachal Pradesh",
    marks: 2
  },
  {
    id: 21,
    question: "Who wrote the play 'Romeo and Juliet'?",
    options: ["Charles Dickens", "William Shakespeare", "Jane Austen", "George Bernard Shaw"],
    correctAnswer: "William Shakespeare",
    marks: 2
  },
  {
    id: 22,
    question: "What is the name of the famous ballet about a swan?",
    options: ["The Nutcracker", "Swan Lake", "Giselle", "Coppélia"],
    correctAnswer: "Swan Lake",
    marks: 2
  },
  {
    id: 23,
    question: "Which painting by Van Gogh shows a night sky?",
    options: ["Sunflowers", "The Starry Night", "Irises", "Cafe Terrace at Night"],
    correctAnswer: "The Starry Night",
    marks: 2
  },
  {
    id: 24,
    question: "Who is the famous detective in novels by Arthur Conan Doyle?",
    options: ["Hercule Poirot", "Sherlock Holmes", "Miss Marple", "James Bond"],
    correctAnswer: "Sherlock Holmes",
    marks: 2
  },
  {
    id: 25,
    question: "Which opera is about a tragic love story?",
    options: ["La Traviata", "Carmen", "Don Giovanni", "The Magic Flute"],
    correctAnswer: "La Traviata",
    marks: 2
  },
  {
    id: 26,
    question: "Who has won the most Grand Slam titles in tennis (men's)?",
    options: ["Roger Federer", "Rafael Nadal", "Novak Djokovic", "Pete Sampras"],
    correctAnswer: "Novak Djokovic",
    marks: 2
  },
  {
    id: 27,
    question: "What is the name of the oldest football competition?",
    options: ["La Liga", "FA Cup", "Serie A", "Bundesliga"],
    correctAnswer: "FA Cup",
    marks: 2
  },
  {
    id: 28,
    question: "Which country hosted the 2016 Summer Olympics?",
    options: ["China", "Brazil", "UK", "Russia"],
    correctAnswer: "Brazil",
    marks: 2
  },
  {
    id: 29,
    question: "What is the nickname of Michael Jordan?",
    options: ["The Flash", "His Airness", "MJ23", "Sky Walker"],
    correctAnswer: "His Airness",
    marks: 2
  },
  {
    id: 30,
    question: "How many players are in a cricket team?",
    options: ["9", "10", "11", "12"],
    correctAnswer: "11",
    marks: 2
  },
  {
    id: 31,
    question: "What is the currency of Japan?",
    options: ["Yuan", "Won", "Dollar", "Yen"],
    correctAnswer: "Yen",
    marks: 2
  },
  {
    id: 32,
    question: "Which is the smallest country in the world?",
    options: ["Monaco", "San Marino", "Vatican City", "Liechtenstein"],
    correctAnswer: "Vatican City",
    marks: 2
  },
  {
    id: 33,
    question: "Which is the longest river in the world?",
    options: ["Amazon", "Yangtze", "Nile", "Mississippi"],
    correctAnswer: "Nile",
    marks: 2
  },
  {
    id: 34,
    question: "Which is the largest country by area?",
    options: ["China", "Canada", "Russia", "USA"],
    correctAnswer: "Russia",
    marks: 2
  },
  {
    id: 35,
    question: "Which is the world's largest coral reef system?",
    options: ["Red Sea Coral Reef", "New Caledonia Barrier Reef", "The Great Barrier Reef", "Florida Reef"],
    correctAnswer: "The Great Barrier Reef",
    marks: 2
  },
  {
    id: 36,
    question: "Where does the President of India reside?",
    options: ["India Gate", "Parliament", "Red Fort", "Rashtrapati Bhavan"],
    correctAnswer: "Rashtrapati Bhavan",
    marks: 2
  },
  {
    id: 37,
    question: "What is the national animal of India?",
    options: ["Lion", "Tiger", "Elephant", "Leopard"],
    correctAnswer: "Tiger",
    marks: 2
  },
  {
    id: 38,
    question: "What is the national flower of India?",
    options: ["Rose", "Lily", "Lotus", "Sunflower"],
    correctAnswer: "Lotus",
    marks: 2
  },
  {
    id: 39,
    question: "What is the national sport of India?",
    options: ["Cricket", "Field hockey", "Kabaddi", "Badminton"],
    correctAnswer: "Field hockey",
    marks: 2
  },
  {
    id: 40,
    question: "What is the highest civilian award in India?",
    options: ["Padma Shri", "Padma Bhushan", "Bharat Ratna", "Gallantry Award"],
    correctAnswer: "Bharat Ratna",
    marks: 2
  },
  {
    id: 41,
    question: "What is the primary ingredient in absinthe?",
    options: ["Barley", "Wormwood", "Juniper", "Anise"],
    correctAnswer: "Wormwood",
    marks: 2
  },
  {
    id: 42,
    question: "Who invented the telephone?",
    options: ["Thomas Edison", "Nikola Tesla", "Alexander Graham Bell", "Isaac Newton"],
    correctAnswer: "Alexander Graham Bell",
    marks: 2
  },
  {
    id: 43,
    question: "What is the name of the car in 'Knight Rider'?",
    options: ["Optimus", "KITT", "Herbie", "Speedster"],
    correctAnswer: "KITT",
    marks: 2
  },
  {
    id: 44,
    question: "Who is the famous pirate from Disney movies?",
    options: ["Blackbeard", "Captain Hook", "Captain Jack Sparrow", "Davy Jones"],
    correctAnswer: "Captain Jack Sparrow",
    marks: 2
  },
  {
    id: 45,
    question: "Which social media was created by Mark Zuckerberg?",
    options: ["Instagram", "Twitter", "Facebook", "Snapchat"],
    correctAnswer: "Facebook",
    marks: 2
  },
  {
    id: 46,
    question: "What is the name of the highest waterfall in the world?",
    options: ["Niagara Falls", "Angel Falls", "Iguazu Falls", "Victoria Falls"],
    correctAnswer: "Angel Falls",
    marks: 2
  },
  {
    id: 47,
    question: "Who discovered penicillin?",
    options: ["Alexander Fleming", "Marie Curie", "Isaac Newton", "Louis Pasteur"],
    correctAnswer: "Alexander Fleming",
    marks: 2
  },
  {
    id: 48,
    question: "Which bird is known for mimicking sounds?",
    options: ["Crow", "Parrot", "Peacock", "Sparrow"],
    correctAnswer: "Parrot",
    marks: 2
  },
  {
    id: 49,
    question: "Which organ purifies blood in the human body?",
    options: ["Liver", "Heart", "Lungs", "Kidneys"],
    correctAnswer: "Kidneys",
    marks: 2
  },
  {
    id: 50,
    question: "Which continent has the most countries?",
    options: ["Asia", "Europe", "Africa", "South America"],
    correctAnswer: "Africa",
    marks: 2
  }
];

export default questions;
