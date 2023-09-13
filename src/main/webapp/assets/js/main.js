const tracks = [
  {
    "trackname": "falling",
    "bpm": "100",
    "key": "E min",
    "genre": "Drum and bass",
    "detail": "gannamma unna manasil ninikwen parvey faradi pennae",
    "price": "29",
    "songId": "765e29c3-eb22-497f-bbc5-0cf496286d11",
    "daw": "FL",
    "lyrics": "gannamma unna manasil ninikwen\nparvey faradi pennae\nyennennemo konji pech tutireen\nneum fachina khanne\ngannamma unna manasil ninikwen\nparvey faradi pennae\nyennennemo konji pech tutireen\nneum fa",
    "UserEmail": "thamim@gmail.com",
    "artistName": "Thamim Inba"
  },
  {
    "trackname": "Inba the mass",
    "bpm": "176",
    "key": "A #",
    "genre": "Reggae",
    "detail": "HI buy one get me free yay...... have a great day.",
    "price": "200",
    "songId": "78de1d5e-bc99-4699-a45f-7294c5ad0507",
    "daw": "logic",
    "lyrics": "moongil dhottam mooliky vasam\nneranch maunam nee paadum keetam\npaurnami iravu paurnami iravu bani villum kadu bani villum kadu\nottayati paat un kooda poti nada\nidhu podhum enakku idhu podhume\nvellenna venum nee podhume\nidhu podhum enakku idhu podhume\nvellenna venum nee podhume\nmoongil dhottam mooliky vasam\nneranch maunam nee paadum keetam\nkulttang karaiyil kulikkum packvaik\nsinku ulakkume tulik thericume\nmun kobham vidudhu mundane edudhu\nnee mella tutik naan onna anaikk\nidhu podhum enakku idhu podhume",
    "UserEmail": "sharmimansoor@gmail.com",
    "artistName": "Inba the star"
  },
  {
    "trackname": "NO BOO",
    "bpm": "200",
    "key": "G min",
    "genre": "RAP",
    "detail": "Some people under estimate me but I'm the god bruh trust me : ) ",
    "price": "100",
    "songId": "29a8c091-a02d-4971-8daa-2e0cc9c7f56c",
    "daw": "Logic",
    "lyrics": "",
    "UserEmail": "thamim@gmail.com",
    "artistName": "Thamim Inba"
  },
  {
    "trackname": "W rizz",
    "bpm": "89",
    "key": "E",
    "genre": "Afro beat",
    "detail": "Afro which is chick magnetm you buy this track and start attracting chicks like me duw, Have great day.",
    "price": "200",
    "songId": "3e837ed1-29f0-4574-abc9-4f4ab2640837",
    "daw": "Ableton",
    "lyrics": "",
    "UserEmail": "thamim@gmail.com",
    "artistName": "Thamim Inba"
  },
  {
    "trackname": "Tommy",
    "bpm": "200",
    "key": "G min",
    "genre": "Pop",
    "detail": "Never let them know your next move. Okay I'm dead guys have fun.",
    "price": "20",
    "songId": "d33a8cb0-9365-4a9d-ba7a-7354be402f7c",
    "daw": "FL",
    "lyrics": "",
    "UserEmail": "thamim@gmail.com",
    "artistName": "Thamim Inba"
  }
];

const track = JSON.parse(localStorage.getItem("trackName"));

if (!track) {
  localStorage.setItem("trackName", JSON.stringify(tracks));
}
