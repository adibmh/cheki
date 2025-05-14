const totalImages = 107; // Ganti sesuai jumlah gambar di folder album/
let currentIndex = 1;

const descriptions = {
  1: 'Ini pertama kali aku cheki sama kamu, jadi inget dulu kamu bilang gini. "kamu pertamakali ya?", "kenalin ya aku dea"',
  2: 'Ini cheki kedua ku sama kamu,saat itu kamu agak lupa" aku njir, tpi ggp bru 2x xixixi',
  3: "ini waktu kamu udah mulai ngeh sama aku gegara bbrp x cheki all mem, tpi km ngeh nya aku org pendiem yg sama rheza trs njir",
  4: 'disini kamu udh bener" ngeh aku, di event ini juga kamu akhirnya ngefollback aku yey',
  5: "dulu aku sempet bimbang beli cheki ini ga ya, tapi akhirnya aku beli gegara aku suka chara nao",
  6: "waktu itu sejujurnya aku ga pengen absen nonton ini, cuma hari seninnya aku utbk njir akhirnya aku nitip ke rheza",
  7: "seminggu setelah utbk akhirnya aku nonton kohi lagi, dan aku bingung harus pose apa waktu itu",
  8: "waktu di event ini kamu sempet kaget aku dateng gegara eventnya bukan di jogja, dan sebenernya event ini bertepatan sama ultahku hehe",
  9: "besoknya kamu kosple bjir tidak ekspek, tapi aku tetep beli wleee :p",
  10: '"mau pose apa dib?", "formal formal"',
  11: "mokan makan mulu sampe diomongin njir di stage, nyoh pose makan",
  12: 'aniv dealovaaaaa, waktu itu kamu tiba" nyuapin aku gegara pas ditanyain udh makan apa blm kujawab belum',
  13: "dulu kepikiran buat dateng njir tapi gabisa gegara ospek, makanya nitip daffa",
  14: "ini di mall ga sih tapi aku lupa di mall mana, keknya sch deh yg ada mlnya. kuping kamu gede bgt kapan mau dipake lagi >//<",
  15: "ini kenapa bisa pose gini yh, jujurly aku lupa, yg kuinget keknya ini otsuru deh kyknya sik",
  16: "event di sma 3 waw, ini pertamakali aku cheki lebih dari 1 ke 1 orang njir",
  17: "kyknya waktu itu vins cerita klo pas cheki iris aku pernah pose gini deh, anjing melet tulisannya kumaha barudak",
  18: 'yogyakomtek, banyak hal berbekas sih di event ini apalagi kamu tampil 3x, tpi yg paling kuinget dc malem" saat itu',
  19: "kyknya ini waktu kita sering dc dan nongki, dan saat aku banyak tugas",
  20: "2 cheki itu nyatir sik, tapi woi ini pertamakali aku away jauh pake kereta njir",
  21: "beberapa hari sebelum ini aku sakit deh, sampe waktu itu agenda nonton aku gajadi ikut, dan kyknya ini event terakhir kohi di 7sky sblm tutup ya",
  22: "event di pasty, kejadian dwi kyk taik tpi ytta wleee",
  23: "event di lpp, waktu itu aku habis potong trus km bilang rambutku kayak mangkok berak ya kamu",
  24: "dulu pose kek gini gegara dwi minum depan stage pas ada yg jaga, padahal udh dibilangin deket stage gaboleh minum",
  25: "hiks aku skip event gegara ada pesantrenisasi di uii",
  26: "yg ini jujur aku nyesel ga bolos kuliah sih gegara pas kuliah cuma ngulang materi minggu lalu",
  27: "ini kita pose nyatir juga gasih tapi aku lupa siapa yg kita satirin",
  28: "ukdw dulu aku sempet mikir aku ketinggalan ds tapi ternyata aku tetep lebih cepet mwehehe",
  29: "ukdw dulu aku sempet mikir aku ketinggalan ds tapi ternyata aku tetep lebih cepet mwehehe",
  30: 'ini pas kamu menang idol tergemesh kan, siapa hayo "X"',
  31: "ishou abu abu, nyesel njir ga cheki kamu solo, aku kurang yg itu doang. jadi kapan dipake lagi?",
  32: "event basah basahan njir, waktu itu wotagei lagu romance no start",
  33: "besoknya sugar rush, agak taik ya kamu narik aku ke panggung",
  34: "njir cheki lama, aku lupa deh kamu ngasih apa aku beli yak",
  35: "kediri berak musim hujan tapi event outdoor, tapi makasih ya masih mau perform walau disuruh bolak balik panitia",
  36: "karawang tapi aku skip hehe",
  37: "dulu sempet rame yg helcurt sm esme kalo kamu inget",
  38: "open po cheki valentine tentu saja kubeli :D",
  39: "surabaya, disini aku kaget sih pas balik ngevent kamu nge vc, akhirnya kita vc trus cerita cerita bertiga sama syam",
  40: "bandung lagi dan pertama kali bawain ternyata kamu trus kurukuru juga",
  41: "akhirnya di 7sky lagi walau cuma sesaat hiks",
  42: "ini event h-2 apa h-1 puasa gitu kalo aku gasalah inget",
  43: 'bukber kohi waktu itu njir :"',
  44: "ini event waktu puasa, sempet gerimis kecil juga waktu itu, btw aku suka rambut kamu kyk gini",
  45: "bukber dealovaaa, waktu itu aku dateng duluan terus ngangkat meja kursi beberapa kali sendiri njir gegara pada blm brgkt",
  46: "hanaya(?) yg dibandara itu, lantai nya licin bgt njir",
  47: "event di mall lagi dan pake ishou biru, btw yg kanan cheki fav ku, sampe kutaro di dompet",
  48: "palembang, kalo kamu inget pulangnya aku jemput kamu terus kita makan ramen",
  49: "ini di wonogiri, hasil cheki nya bagus bagus njir",
  50: "ini event evos ga sih, waktu itu aku nyuruh km bikin video aneh apa gitu lupa klo cheki 15, tpi akhirnya gajadi gegara aku sengaja chekinya 14",
  51: "waku waku, ini waktu antri belakangku akai penghancur crowd berisik bgt njir, oiya waktu ini aku nge gift kamu tpi sambil malu malu hehe",
  52: "event blitar tpi aku ga dateng jadi nitip ke syam",
  53: "aniv kohi, waktu itu dapet mug dari event ini",
  54: "udinus njir, waktu itu hujan tapi aku gaikut hujan hujanan",
  55: "bekasiiii, waktu itu kyknya km khawatir gegara aku away sendirian",
  56: "neocon kamu ngece rambutku berak juga ya, oiya waktu itu aku kesel gegara tesar nyerobot antrian buat bikin video",
  57: "setelah sekian lama kamu ga cosplay akhirnya cosplay lagi di event ini",
  58: "cheki hbd km yg ke 24 njir jadi ruby",
  59: "aniv dealova, jujur aku terharu pas kamu bilang oran orang yg ngebantu trus nyebut namaku",
  60: "event di 7sky tapi bukan lippo awkoakowakowk",
  61: "ancol, malem sblm event aku kesasar sama nanda njir smpe hrus muter balik jauh",
  62: "event yg ini niatnya aku ga dateng, tapi akhirnya H-1 aku ngechat satru dan akhirnya berangkat",
  63: "utsuru yg malemnya lanjut wotagei, aku nambah beberapa kenalan disini njir",
  64: "event kamu jadi dj jeb ajeb ajeb, trus aku pacaran sm rheza :v",
  65: "revolution yang waktu itu aku wotagei di reff 1",
  66: "yogyakomtek make baju freak yg dikasih dwi, tpi aku cape njir di event ini soalnya balik kuliah langsung kesini",
  67: "yogyakomtek lagi dan akhirnya ishou biru lagi mwehehehe",
  68: "eh ketinggalan cheki matanya",
  69: "event cangkringan :v waktu pulang kita makan bareng sama soang",
  70: "bandung njir tpi aku sibuk kuliah",
  71: "ini juga aku niatnya dateng tpi H-1 apa H-2 gitu tiba tiba aku ada kerja kelompok",
  72: "surabayaa aku nitip syam lagi, ini waktu aku masih sering ngirim kamu gambar tupai ga sih",
  73: "solooo, aku deg degan takut ketinggalan gegara aku msh kuliah smpe jam 5 trus baru berangkat, disini juga aku remake cheki pertama gegara hampir 2 tahun dan kamu pake ishou yg itu",
  74: "femonema, yg ini sih akhirnya di 7sky yg aseli no fek",
  75: "kamu jadi maid, makasih ya udh bawain lagu yg ku req hehe",
  76: "pantai dan yamie panda, cheki nya bagus bagus aku sukak",
  77: "padang njir, kamu ketemu member idol yg mukanya mirip kamu",
  78: "mangdu, ini aku dijemput arya dari stasiun njir, disini juga aku jujurly cape berdiri gegara bantu bagiin freebies, pas makan malah divideoin arya lagi berak ya",
  79: "jepanggg, aku turut seneng kamu bisa ngewujudin impian kamu ke jepang",
  80: "event ini kamu keliatan masih capek gegara baru pulang dari jepang, apalagi hbs itu km hrus ke jkt",
  81: "igf njir, trus kamu extend apa ya soalnya member kohi pada mau ikut perform weekday",
  82: "srawung tapi kali ini kamu gaikut idol tergemesh gegara udh pasti menang gasi bro",
  83: "mizu, ini waktu berangkat aku kecemplung got depan mizu nya njir, hujan lagi berak",
  84: "comipara yang rame banget itu, rame bgt bro asli tpi ikut seneng gegara yg nonton rame",
  85: "ini pertama kali kamu make ishou yg ini ga sih, eventnya di utara uii dikit",
  86: 'sch, event penutup tahun 2024 :"D',
  87: "ini pas apasih bahasanya makrab(?) ya pokoknya itu deh, aku kalah adu suit di semifinal njir, terus ini lanjut ke pantai",
  88: "beberapa hari setelahnya kita karaoke sama dealova",
  89: "bandung dan aku skip lagi, waktu itu aku kyknya habis beli skin jadinya ga ada uang buat away deh",
  90: "pakuwon yang panggungnya 360°, makasih ya udah mau direpotin cheki naga",
  91: "lumajang kota plosok yg susah dijangkau, gada stasiun ga sih disana",
  92: "tahun baru china cheki kamu skin china juga",
  93: "event mizu, aku dikasih parfum di event ini :D",
  94: "ini pas kamu take lagu pinku rimu, makasih ya udah ngasih tau kalo buka cheki",
  95: "karawang lagii, rambut kamu lucu asli ga boong",
  96: "bogorrr, akhirnya aku away lagi bro, dikota kelahiranku lagi xixixi",
  97: "ini cheki wide, gausah sok tinggi deh, tinggi aku dek",
  98: "niat cheki dikit disini malah khilaf gegara kamu bilang kalo bakal pake ishou biru, tapi aku ga nyesel kamun imut bgt hasil chekinya juga bagus bagus",
  99: "nah kan dibilang aku lebih tinggi",
  100: "cheki muka cengoh lagi gegara lucu malah akhirnya keterusan sampe sekarang, cheki madep pohonnya juga bagus aku suka",
  101: "cheki jepang lagi yey, aslinya mau ambil yg km pake jaket tpi yg ini lebih bagus jadi milihnya yg ini hehe",
  102: "bukber kohi dan melanjutkan tren cheki yg ini xixixi, klo yg pegangan tangan pertama kali disini",
  103: "lanjut cheki kyk gini lagi dan cheki perang bantal di bukber dealova",
  104: "solooo, aku compe gmw tw pokony ak mw compe",
  105: "ternyata ada yg ketinggalan, ini event tgl 25 desember trus ini pertama kali aku pake kaos dealova, disini kohi juga pertamakali bawain christmas lane kan",
  106: "cheki karawang tapi kamu freak bgt takut",
  107: "mandalaaaa, cheki yg bianglala bagus banget jujur sukakk >///<",
};

function updateImage() {
  const img = document.getElementById("image");
  const desc = document.getElementById("description");
  img.src = `album/${currentIndex}.jpg`;
  desc.textContent = descriptions[currentIndex] || `Cheki ke-${currentIndex}`;
}

function prevImage() {
  currentIndex = currentIndex - 1 < 1 ? totalImages : currentIndex - 1;
  updateImage();
}

function nextImage() {
  currentIndex = currentIndex + 1 > totalImages ? 1 : currentIndex + 1;
  updateImage();
}

// Musik
const music = document.getElementById("bgMusic");
const toggleBtn = document.getElementById("toggleMusic");
let isPlaying = false;

toggleBtn.addEventListener("click", () => {
  if (isPlaying) {
    music.pause();
    toggleBtn.textContent = "Biar ga sunyi🎵";
  } else {
    music.play();
    toggleBtn.textContent = "Stop⏸️";
  }
  isPlaying = !isPlaying;
});
