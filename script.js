  const questions = [
    { question: "What is the capital of Afghanistan?", options: ["Kabul", "Tehran", "Islamabad", "Dhaka"], answer: "Kabul" },
    { question: "What is the capital of Albania?", options: ["Tirana", "Athens", "Rome", "Sofia"], answer: "Tirana" },
    { question: "What is the capital of Algeria?", options: ["Algiers", "Cairo", "Rabat", "Tunis"], answer: "Algiers" },
    { question: "What is the capital of Andorra?", options: ["Andorra la Vella", "Barcelona", "Madrid", "Lisbon"], answer: "Andorra la Vella" },
    { question: "What is the capital of Angola?", options: ["Luanda", "Kinshasa", "Lusaka", "Harare"], answer: "Luanda" },
    { question: "What is the capital of Antigua and Barbuda?", options: ["Saint John's", "Bridgetown", "Port of Spain", "Castries"], answer: "Saint John's" },
    { question: "What is the capital of Argentina?", options: ["Buenos Aires", "Santiago", "Montevideo", "Asunción"], answer: "Buenos Aires" },
    { question: "What is the capital of Armenia?", options: ["Yerevan", "Tbilisi", "Baku", "Bishkek"], answer: "Yerevan" },
    { question: "What is the capital of Australia?", options: ["Canberra", "Sydney", "Melbourne", "Brisbane"], answer: "Canberra" },
    { question: "What is the capital of Austria?", options: ["Vienna", "Zurich", "Bern", "Munich"], answer: "Vienna" },
    { question: "What is the capital of Azerbaijan?", options: ["Baku", "Tbilisi", "Yerevan", "Astana"], answer: "Baku" },
    { question: "What is the capital of Bahamas?", options: ["Nassau", "Havana", "Port of Spain", "Kingston"], answer: "Nassau" },
    { question: "What is the capital of Bahrain?", options: ["Manama", "Doha", "Abu Dhabi", "Muscat"], answer: "Manama" },
    { question: "What is the capital of Bangladesh?", options: ["Dhaka", "New Delhi", "Colombo", "Kathmandu"], answer: "Dhaka" },
    { question: "What is the capital of Barbados?", options: ["Bridgetown", "Port of Spain", "Castries", "Kingstown"], answer: "Bridgetown" },
    { question: "What is the capital of Belarus?", options: ["Minsk", "Kiev", "Vilnius", "Warsaw"], answer: "Minsk" },
    { question: "What is the capital of Belgium?", options: ["Brussels", "Amsterdam", "Luxembourg", "Paris"], answer: "Brussels" },
    { question: "What is the capital of Belize?", options: ["Belmopan", "San Salvador", "Tegucigalpa", "Managua"], answer: "Belmopan" },
    { question: "What is the capital of Benin?", options: ["Porto-Novo", "Cotonou", "Lomé", "Accra"], answer: "Porto-Novo" },
    { question: "What is the capital of Bhutan?", options: ["Thimphu", "Kathmandu", "New Delhi", "Dhaka"], answer: "Thimphu" },
    { question: "What is the capital of Bolivia?", options: ["Sucre", "La Paz", "Santa Cruz", "Cochabamba"], answer: "Sucre" },
    { question: "What is the capital of Bosnia and Herzegovina?", options: ["Sarajevo", "Belgrade", "Zagreb", "Podgorica"], answer: "Sarajevo" },
    { question: "What is the capital of Botswana?", options: ["Gaborone", "Harare", "Lusaka", "Windhoek"], answer: "Gaborone" },
    { question: "What is the capital of Brazil?", options: ["Brasilia", "Rio de Janeiro", "São Paulo", "Salvador"], answer: "Brasilia" },
    { question: "What is the capital of Brunei?", options: ["Bandar Seri Begawan", "Kuala Lumpur", "Singapore", "Manila"], answer: "Bandar Seri Begawan" },
    { question: "What is the capital of Bulgaria?", options: ["Sofia", "Athens", "Bucharest", "Belgrade"], answer: "Sofia" },
    { question: "What is the capital of Burkina Faso?", options: ["Ouagadougou", "Accra", "Lomé", "Bamako"], answer: "Ouagadougou" },
    { question: "What is the capital of Burundi?", options: ["Gitega", "Bujumbura", "Kigali", "Dodoma"], answer: "Gitega" },
    { question: "What is the capital of Cabo Verde?", options: ["Praia", "Mindelo", "Banjul", "Dakar"], answer: "Praia" },
    { question: "What is the capital of Cambodia?", options: ["Phnom Penh", "Vientiane", "Bangkok", "Hanoi"], answer: "Phnom Penh" },
    { question: "What is the capital of Cameroon?", options: ["Yaoundé", "Douala", "N'Djamena", "Libreville"], answer: "Yaoundé" },
    { question: "What is the capital of Canada?", options: ["Ottawa", "Toronto", "Vancouver", "Montreal"], answer: "Ottawa" },
    { question: "What is the capital of Central African Republic?", options: ["Bangui", "N'Djamena", "Libreville", "Yaoundé"], answer: "Bangui" },
    { question: "What is the capital of Chad?", options: ["N'Djamena", "Brazzaville", "Kinshasa", "Bujumbura"], answer: "N'Djamena" },
    { question: "What is the capital of Chile?", options: ["Santiago", "Buenos Aires", "Lima", "Bogotá"], answer: "Santiago" },
    { question: "What is the capital of China?", options: ["Beijing", "Shanghai", "Hong Kong", "Guangzhou"], answer: "Beijing" },
    { question: "What is the capital of Colombia?", options: ["Bogotá", "Medellín", "Cali", "Cartagena"], answer: "Bogotá" },
    { question: "What is the capital of Comoros?", options: ["Moroni", "Port Louis", "Antananarivo", "Victoria"], answer: "Moroni" },
    { question: "What is the capital of Congo, Democratic Republic of the?", options: ["Kinshasa", "Brazzaville", "Libreville", "Yaoundé"], answer: "Kinshasa" },
    { question: "What is the capital of Congo, Republic of the?", options: ["Brazzaville", "Kinshasa", "Libreville", "Yaoundé"], answer: "Brazzaville" },
    { question: "What is the capital of Costa Rica?", options: ["San José", "Panama City", "Managua", "Honduras"], answer: "San José" },
    { question: "What is the capital of Croatia?", options: ["Zagreb", "Dubrovnik", "Split", "Osijek"], answer: "Zagreb" },
    { question: "What is the capital of Cuba?", options: ["Havana", "Santiago de Cuba", "Camagüey", "Holguín"], answer: "Havana" },
    { question: "What is the capital of Cyprus?", options: ["Nicosia", "Limassol", "Larnaca", "Famagusta"], answer: "Nicosia" },
    { question: "What is the capital of Czech Republic?", options: ["Prague", "Brno", "Ostrava", "Plzeň"], answer: "Prague" },
    { question: "What is the capital of Denmark?", options: ["Copenhagen", "Aarhus", "Odense", "Aalborg"], answer: "Copenhagen" },
    { question: "What is the capital of Djibouti?", options: ["Djibouti", "Addis Ababa", "Kismayo", "Mogadishu"], answer: "Djibouti" },
    { question: "What is the capital of Dominica?", options: ["Roseau", "Kingston", "Port of Spain", "Bridgetown"], answer: "Roseau" },
    { question: "What is the capital of Dominican Republic?", options: ["Santo Domingo", "San Juan", "Port au Prince", "Havana"], answer: "Santo Domingo" },
    { question: "What is the capital of East Timor?", options: ["Dili", "Bali", "Manila", "Jakarta"], answer: "Dili" },
    { question: "What is the capital of Ecuador?", options: ["Quito", "Guayaquil", "Cuenca", "Machala"], answer: "Quito" },
    { question: "What is the capital of Egypt?", options: ["Cairo", "Alexandria", "Giza", "Luxor"], answer: "Cairo" },
    { question: "What is the capital of El Salvador?", options: ["San Salvador", "Santa Ana", "Sonsonate", "Ahuachapan"], answer: "San Salvador" },
    { question: "What is the capital of Equatorial Guinea?", options: ["Malabo", "Bata", "Evinayong", "Luba"], answer: "Malabo" },
    { question: "What is the capital of Eritrea?", options: ["Asmara", "Keren", "Mekele", "Massawa"], answer: "Asmara" },
    { question: "What is the capital of Estonia?", options: ["Tallinn", "Tartu", "Narva", "Pärnu"], answer: "Tallinn" },
    { question: "What is the capital of Eswatini?", options: ["Mbabane", "Manzini", "Lobamba", "Siteki"], answer: "Mbabane" },
    { question: "What is the capital of Ethiopia?", options: ["Addis Ababa", "Dire Dawa", "Mekelle", "Bahir Dar"], answer: "Addis Ababa" },
    { question: "What is the capital of Fiji?", options: ["Suva", "Nadi", "Lautoka", "Labasa"], answer: "Suva" },
    { question: "What is the capital of Finland?", options: ["Helsinki", "Tampere", "Oulu", "Turku"], answer: "Helsinki" },
    { question: "What is the capital of France?", options: ["Paris", "London", "Berlin", "Madrid"], answer: "Paris" },
    { question: "What is the capital of Gabon?", options: ["Libreville", "Port-Gentil", "Franceville", "Makokou"], answer: "Libreville" },
    { question: "What is the capital of Gambia?", options: ["Banjul", "Serrekunda", "Brikama", "Makasutu"], answer: "Banjul" },
    { question: "What is the capital of Georgia?", options: ["Tbilisi", "Batumi", "Kutaisi", "Zugdidi"], answer: "Tbilisi" },
    { question: "What is the capital of Germany?", options: ["Berlin", "Munich", "Frankfurt", "Hamburg"], answer: "Berlin" },
    { question: "What is the capital of Ghana?", options: ["Accra", "Kumasi", "Takoradi", "Tamale"], answer: "Accra" },
    { question: "What is the capital of Greece?", options: ["Athens", "Thessaloniki", "Patras", "Heraklion"], answer: "Athens" },
    { question: "What is the capital of Grenada?", options: ["St. George's", "Gouyave", "Sauteurs", "Grenville"], answer: "St. George's" },
    { question: "What is the capital of Guatemala?", options: ["Guatemala City", "Antigua", "Quetzaltenango", "Escuintla"], answer: "Guatemala City" },
    { question: "What is the capital of Guinea?", options: ["Conakry", "Kankan", "Nzérékoré", "Labe"], answer: "Conakry" },
    { question: "What is the capital of Guinea-Bissau?", options: ["Bissau", "Bafatá", "Gabú", "Cacheu"], answer: "Bissau" },
    { question: "What is the capital of Guyana?", options: ["Georgetown", "New Amsterdam", "Linden", "Bartica"], answer: "Georgetown" },
    { question: "What is the capital of Haiti?", options: ["Port-au-Prince", "Cap-Haïtien", "Jacmel", "Les Cayes"], answer: "Port-au-Prince" },
    { question: "What is the capital of Honduras?", options: ["Tegucigalpa", "San Pedro Sula", "La Ceiba", "Choluteca"], answer: "Tegucigalpa" },
    { question: "What is the capital of Hungary?", options: ["Budapest", "Debrecen", "Szeged", "Pécs"], answer: "Budapest" },
    { question: "What is the capital of Iceland?", options: ["Reykjavik", "Akureyri", "Hafnarfjordur", "Selfoss"], answer: "Reykjavik" },
    { question: "What is the capital of India?", options: ["New Delhi", "Mumbai", "Bangalore", "Chennai"], answer: "New Delhi" },
    { question: "What is the capital of Indonesia?", options: ["Jakarta", "Bali", "Surabaya", "Bandung"], answer: "Jakarta" },
    { question: "What is the capital of Iran?", options: ["Tehran", "Isfahan", "Shiraz", "Tabriz"], answer: "Tehran" },
    { question: "What is the capital of Iraq?", options: ["Baghdad", "Basra", "Erbil", "Mosul"], answer: "Baghdad" },
    { question: "What is the capital of Ireland?", options: ["Dublin", "Cork", "Galway", "Limerick"], answer: "Dublin" },
    { question: "What is the capital of Israel?", options: ["Jerusalem", "Tel Aviv", "Haifa", "Beersheba"], answer: "Jerusalem" },
    { question: "What is the capital of Italy?", options: ["Rome", "Milan", "Naples", "Florence"], answer: "Rome" },
    { question: "What is the capital of Jamaica?", options: ["Kingston", "Montego Bay", "Negril", "Ocho Rios"], answer: "Kingston" },
    { question: "What is the capital of Japan?", options: ["Tokyo", "Osaka", "Kyoto", "Nagoya"], answer: "Tokyo" },
    { question: "What is the capital of Jordan?", options: ["Amman", "Zarqa", "Irbid", "Aqaba"], answer: "Amman" },
    { question: "What is the capital of Kazakhstan?", options: ["Astana", "Almaty", "Shymkent", "Aktobe"], answer: "Astana" },
    { question: "What is the capital of Kenya?", options: ["Nairobi", "Mombasa", "Kisumu", "Eldoret"], answer: "Nairobi" },
    { question: "What is the capital of Kiribati?", options: ["Tarawa", "Kiritimati", "Banaba", "Abemama"], answer: "Tarawa" },
    { question: "What is the capital of Korea, North?", options: ["Pyongyang", "Hamhung", "Nampo", "Wonsan"], answer: "Pyongyang" },
    { question: "What is the capital of Korea, South?", options: ["Seoul", "Busan", "Incheon", "Gwangju"], answer: "Seoul" },
    { question: "What is the capital of Kosovo?", options: ["Pristina", "Mitrovica", "Ferizaj", "Gjakova"], answer: "Pristina" },
    { question: "What is the capital of Kuwait?", options: ["Kuwait City", "Jahra", "Ahmadi", "Salmiya"], answer: "Kuwait City" },
    { question: "What is the capital of Kyrgyzstan?", options: ["Bishkek", "Osh", "Jalalabad", "Batken"], answer: "Bishkek" },
    { question: "What is the capital of Laos?", options: ["Vientiane", "Luang Prabang", "Pakse", "Savannakhet"], answer: "Vientiane" },
    { question: "What is the capital of Latvia?", options: ["Riga", "Daugavpils", "Liepaja", "Jelgava"], answer: "Riga" },
    { question: "What is the capital of Lebanon?", options: ["Beirut", "Tripoli", "Sidon", "Tyre"], answer: "Beirut" },
    { question: "What is the capital of Lesotho?", options: ["Maseru", "Leribe", "Berea", "Maputsoe"], answer: "Maseru" },
    { question: "What is the capital of Liberia?", options: ["Monrovia", "Gbarnga", "Buchanan", "Zwedru"], answer: "Monrovia" },
    { question: "What is the capital of Libya?", options: ["Tripoli", "Benghazi", "Misrata", "Tobruk"], answer: "Tripoli" },
    { question: "What is the capital of Liechtenstein?", options: ["Vaduz", "Schaan", "Balzers", "Eschen"], answer: "Vaduz" },
    { question: "What is the capital of Lithuania?", options: ["Vilnius", "Kaunas", "Klaipeda", "Šiauliai"], answer: "Vilnius" },
    { question: "What is the capital of Luxembourg?", options: ["Luxembourg City", "Esch-sur-Alzette", "Differdange", "Echternach"], answer: "Luxembourg City" },
    { question: "What is the capital of Madagascar?", options: ["Antananarivo", "Toamasina", "Antsiranana", "Fianarantsoa"], answer: "Antananarivo" },
    { question: "What is the capital of Malawi?", options: ["Lilongwe", "Blantyre", "Mzuzu", "Zomba"], answer: "Lilongwe" },
    { question: "What is the capital of Malaysia?", options: ["Kuala Lumpur", "George Town", "Malacca", "Kota Kinabalu"], answer: "Kuala Lumpur" },
    { question: "What is the capital of Maldives?", options: ["Malé", "Hinnavaru", "Thulusdhoo", "Maafushi"], answer: "Malé" },
    { question: "What is the capital of Mali?", options: ["Bamako", "Sikasso", "Koutiala", "Mopti"], answer: "Bamako" },
    { question: "What is the capital of Malta?", options: ["Valletta", "Sliema", "Birkirkara", "St. Julian's"], answer: "Valletta" },
    { question: "What is the capital of Marshall Islands?", options: ["Majuro", "Ebeye", "Kwajalein", "Jabor"], answer: "Majuro" },
    { question: "What is the capital of Mauritania?", options: ["Nouakchott", "Nouadhibou", "Atar", "Kiffa"], answer: "Nouakchott" },
    { question: "What is the capital of Mauritius?", options: ["Port Louis", "Curepipe", "Quatre Bornes", "Mahebourg"], answer: "Port Louis" },
    { question: "What is the capital of Mexico?", options: ["Mexico City", "Guadalajara", "Monterrey", "Cancún"], answer: "Mexico City" },
    { question: "What is the capital of Micronesia?", options: ["Palikir", "Yap", "Chuuk", "Pohnpei"], answer: "Palikir" },
    { question: "What is the capital of Moldova?", options: ["Chișinău", "Bălți", "Bender", "Rîbnița"], answer: "Chișinău" },
    { question: "What is the capital of Monaco?", options: ["Monaco", "Monte Carlo", "La Condamine", "Menton"], answer: "Monaco" },
    { question: "What is the capital of Mongolia?", options: ["Ulaanbaatar", "Erdenet", "Darkhan", "Mörön"], answer: "Ulaanbaatar" },
    { question: "What is the capital of Montenegro?", options: ["Podgorica", "Nikšić", "Herceg Novi", "Bijelo Polje"], answer: "Podgorica" },
    { question: "What is the capital of Morocco?", options: ["Rabat", "Casablanca", "Marrakech", "Tangier"], answer: "Rabat" },
    { question: "What is the capital of Mozambique?", options: ["Maputo", "Beira", "Nampula", "Tete"], answer: "Maputo" },
    { question: "What is the capital of Myanmar?", options: ["Naypyidaw", "Yangon", "Mandalay", "Bagan"], answer: "Naypyidaw" },
    { question: "What is the capital of Namibia?", options: ["Windhoek", "Swakopmund", "Luderitz", "Oshakati"], answer: "Windhoek" },
    { question: "What is the capital of Nauru?", options: ["Yaren", "Ainmara", "Buada", "Denigomodu"], answer: "Yaren" },
    { question: "What is the capital of Nepal?", options: ["Kathmandu", "Pokhara", "Biratnagar", "Lalitpur"], answer: "Kathmandu" },
    { question: "What is the capital of Netherlands?", options: ["Amsterdam", "Rotterdam", "The Hague", "Utrecht"], answer: "Amsterdam" },
    { question: "What is the capital of New Zealand?", options: ["Wellington", "Auckland", "Christchurch", "Hamilton"], answer: "Wellington" },
    { question: "What is the capital of Nicaragua?", options: ["Managua", "León", "Granada", "Masaya"], answer: "Managua" },
    { question: "What is the capital of Niger?", options: ["Niamey", "Zinder", "Maradi", "Agadez"], answer: "Niamey" },
    { question: "What is the capital of Nigeria?", options: ["Abuja", "Lagos", "Kano", "Port Harcourt"], answer: "Abuja" },
    { question: "What is the capital of North Macedonia?", options: ["Skopje", "Bitola", "Ohrid", "Tetovo"], answer: "Skopje" },
    { question: "What is the capital of Norway?", options: ["Oslo", "Bergen", "Stavanger", "Trondheim"], answer: "Oslo" },
    { question: "What is the capital of Oman?", options: ["Muscat", "Salalah", "Sohar", "Ibri"], answer: "Muscat" },
    { question: "What is the capital of Pakistan?", options: ["Islamabad", "Karachi", "Lahore", "Rawalpindi"], answer: "Islamabad" },
    { question: "What is the capital of Palau?", options: ["Ngerulmud", "Koror", "Melekeok", "Peleliu"], answer: "Ngerulmud" },
    { question: "What is the capital of Panama?", options: ["Panama City", "Colón", "David", "La Chorrera"], answer: "Panama City" },
    { question: "What is the capital of Papua New Guinea?", options: ["Port Moresby", "Lae", "Mount Hagen", "Madang"], answer: "Port Moresby" },
    { question: "What is the capital of Paraguay?", options: ["Asunción", "Ciudad del Este", "Encarnación", "Pedro Juan Caballero"], answer: "Asunción" },
    { question: "What is the capital of Peru?", options: ["Lima", "Arequipa", "Cusco", "Trujillo"], answer: "Lima" },
    { question: "What is the capital of Philippines?", options: ["Manila", "Quezon City", "Cebu City", "Davao City"], answer: "Manila" },
    { question: "What is the capital of Poland?", options: ["Warsaw", "Kraków", "Wrocław", "Gdańsk"], answer: "Warsaw" },
    { question: "What is the capital of Portugal?", options: ["Lisbon", "Porto", "Coimbra", "Braga"], answer: "Lisbon" },
    { question: "What is the capital of Qatar?", options: ["Doha", "Al Wakrah", "Al Khor", "Umm Salal"], answer: "Doha" },
    { question: "What is the capital of Romania?", options: ["Bucharest", "Cluj-Napoca", "Timișoara", "Iași"], answer: "Bucharest" },
    { question: "What is the capital of Russia?", options: ["Moscow", "Saint Petersburg", "Novosibirsk", "Yekaterinburg"], answer: "Moscow" },
    { question: "What is the capital of Rwanda?", options: ["Kigali", "Butare", "Gisenyi", "Musanze"], answer: "Kigali" },
    { question: "What is the capital of Saint Kitts and Nevis?", options: ["Basseterre", "Charlestown", "Nisbet", "Sandy Point"], answer: "Basseterre" },
    { question: "What is the capital of Saint Lucia?", options: ["Castries", "Gros Islet", "Vieux Fort", "Soufrière"], answer: "Castries" },
    { question: "What is the capital of Saint Vincent and the Grenadines?", options: ["Kingstown", "Bequia", "Union Island", "Barrouallie"], answer: "Kingstown" },
    { question: "What is the capital of Samoa?", options: ["Apia", "Savaii", "Asau", "Mulifanua"], answer: "Apia" },
    { question: "What is the capital of San Marino?", options: ["San Marino", "Serravalle", "Borgo Maggiore", "Faetano"], answer: "San Marino" },
    { question: "What is the capital of Sao Tome and Principe?", options: ["São Tomé", "Principe", "Santana", "Neves"], answer: "São Tomé" },
    { question: "What is the capital of Saudi Arabia?", options: ["Riyadh", "Jeddah", "Mecca", "Dammam"], answer: "Riyadh" },
    { question: "What is the capital of Senegal?", options: ["Dakar", "Thiès", "Saint-Louis", "Kaolack"], answer: "Dakar" },
    { question: "What is the capital of Serbia?", options: ["Belgrade", "Novi Sad", "Niš", "Kragujevac"], answer: "Belgrade" },
    { question: "What is the capital of Seychelles?", options: ["Victoria", "Beau Vallon", "Anse Royale", "La Digue"], answer: "Victoria" },
    { question: "What is the capital of Sierra Leone?", options: ["Freetown", "Bo", "Kenema", "Makeni"], answer: "Freetown" },
    { question: "What is the capital of Singapore?", options: ["Singapore", "Sentosa", "Jurong", "Changi"], answer: "Singapore" },
    { question: "What is the capital of Slovakia?", options: ["Bratislava", "Košice", "Nitra", "Trnava"], answer: "Bratislava" },
    { question: "What is the capital of Slovenia?", options: ["Ljubljana", "Maribor", "Celje", "Kranj"], answer: "Ljubljana" },
    { question: "What is the capital of Solomon Islands?", options: ["Honiara", "Gizo", "Auki", "Noro"], answer: "Honiara" },
    { question: "What is the capital of Somalia?", options: ["Mogadishu", "Hargeisa", "Bosaso", "Kismayo"], answer: "Mogadishu" },
    { question: "What is the capital of South Africa?", options: ["Pretoria", "Cape Town", "Durban", "Johannesburg"], answer: "Pretoria" },
    { question: "What is the capital of South Sudan?", options: ["Juba", "Malakal", "Wau", "Bor"], answer: "Juba" },
    { question: "What is the capital of Spain?", options: ["Madrid", "Barcelona", "Valencia", "Seville"], answer: "Madrid" },
    { question: "What is the capital of Sri Lanka?", options: ["Colombo", "Kandy", "Galle", "Jaffna"], answer: "Colombo" },
    { question: "What is the capital of Sudan?", options: ["Khartoum", "Omdurman", "Port Sudan", "Nyala"], answer: "Khartoum" },
    { question: "What is the capital of Suriname?", options: ["Paramaribo", "Nickerie", "Albina", "Moengo"], answer: "Paramaribo" },
    { question: "What is the capital of Sweden?", options: ["Stockholm", "Gothenburg", "Malmö", "Uppsala"], answer: "Stockholm" },
    { question: "What is the capital of Switzerland?", options: ["Bern", "Zurich", "Geneva", "Basel"], answer: "Bern" },
    { question: "What is the capital of Syria?", options: ["Damascus", "Aleppo", "Homs", "Latakia"], answer: "Damascus" },
    { question: "What is the capital of Taiwan?", options: ["Taipei", "Kaohsiung", "Taichung", "Tainan"], answer: "Taipei" },
    { question: "What is the capital of Tajikistan?", options: ["Dushanbe", "Khujand", "Kurgan-Tyube", "Isfara"], answer: "Dushanbe" },
    { question: "What is the capital of Tanzania?", options: ["Dodoma", "Dar es Salaam", "Arusha", "Mbeya"], answer: "Dodoma" },
    { question: "What is the capital of Thailand?", options: ["Bangkok", "Chiang Mai", "Phuket", "Khon Kaen"], answer: "Bangkok" },
    { question: "What is the capital of Timor-Leste?", options: ["Dili", "Baucau", "Viqueque", "Lautem"], answer: "Dili" },
    { question: "What is the capital of Togo?", options: ["Lomé", "Kara", "Sokodé", "Atakpamé"], answer: "Lomé" },
    { question: "What is the capital of Tonga?", options: ["Nukuʻalofa", "Neiafu", "Haveluliku", "Kolonga"], answer: "Nukuʻalofa" },
    { question: "What is the capital of Trinidad and Tobago?", options: ["Port of Spain", "San Fernando", "Scarborough", "Arima"], answer: "Port of Spain" },
    { question: "What is the capital of Tunisia?", options: ["Tunis", "Sfax", "Sousse", "Kairouan"], answer: "Tunis" },
    { question: "What is the capital of Turkey?", options: ["Ankara", "Istanbul", "Izmir", "Antalya"], answer: "Ankara" },
    { question: "What is the capital of Turkmenistan?", options: ["Ashgabat", "Turkmenabat", "Mary", "Dashoguz"], answer: "Ashgabat" },
    { question: "What is the capital of Tuvalu?", options: ["Funafuti", "Vaiaku", "Nukufetau", "Nukulaelae"], answer: "Funafuti" },
    { question: "What is the capital of Uganda?", options: ["Kampala", "Entebbe", "Jinja", "Mbarara"], answer: "Kampala" },
    { question: "What is the capital of Ukraine?", options: ["Kyiv", "Kharkiv", "Odessa", "Dnipro"], answer: "Kyiv" },
    { question: "What is the capital of United Arab Emirates?", options: ["Abu Dhabi", "Dubai", "Sharjah", "Ajman"], answer: "Abu Dhabi" },
    { question: "What is the capital of United Kingdom?", options: ["London", "Edinburgh", "Cardiff", "Belfast"], answer: "London" },
    { question: "What is the capital of United States?", options: ["Washington, D.C.", "New York City", "Los Angeles", "Chicago"], answer: "Washington, D.C." },
    { question: "What is the capital of Uruguay?", options: ["Montevideo", "Salto", "Paysandú", "Maldonado"], answer: "Montevideo" },
    { question: "What is the capital of Uzbekistan?", options: ["Tashkent", "Samarkand", "Bukhara", "Fergana"], answer: "Tashkent" },
    { question: "What is the capital of Vanuatu?", options: ["Port Vila", "Luganville", "Norsup", "Sola"], answer: "Port Vila" },
    { question: "What is the capital of Vatican City?", options: ["Vatican City", "Rome", "Florence", "Milan"], answer: "Vatican City" },
    { question: "What is the capital of Venezuela?", options: ["Caracas", "Maracaibo", "Valencia", "Barquisimeto"], answer: "Caracas" },
    { question: "What is the capital of Vietnam?", options: ["Hanoi", "Ho Chi Minh City", "Da Nang", "Hue"], answer: "Hanoi" },
    { question: "What is the capital of Yemen?", options: ["Sana'a", "Aden", "Taiz", "Hodeidah"], answer: "Sana'a" },
    { question: "What is the capital of Zambia?", options: ["Lusaka", "Ndola", "Kitwe", "Livingstone"], answer: "Lusaka" },
    { question: "What is the capital of Zimbabwe?", options: ["Harare", "Bulawayo", "Gweru", "Mutare"], answer: "Harare" },

// Add more questions as needed
];



let currentQuestionIndex = 0;

function showQuestion() {
    const question = questions[currentQuestionIndex];
    document.getElementById('question').textContent = question.question;
    const optionsContainer = document.getElementById('options');
    optionsContainer.innerHTML = '';
    question.options.forEach(option => {
        const button = document.createElement('button');
        button.textContent = option;
        button.className = 'option-button';
        button.onclick = () => checkAnswer(option);
        optionsContainer.appendChild(button);
    });
    document.getElementById('next-button').style.display = 'none'; // Hide "Next" button initially
}

function checkAnswer(selectedOption) {
    const correctAnswer = questions[currentQuestionIndex].answer;
    if (selectedOption === correctAnswer) {
        document.getElementById('result').textContent = 'Correct!';
    } else {
        document.getElementById('result').textContent = 'Wrong! The correct answer is ' + correctAnswer + '.';
    }
    document.getElementById('next-button').style.display = 'block'; // Show "Next" button
}

function showNextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
        document.getElementById('result').textContent = '';
        document.getElementById('next-button').style.display = 'none'; // Hide "Next" button
    } else {
        document.getElementById('result').textContent = 'Quiz completed!';
        document.getElementById('next-button').style.display = 'none'; // Hide "Next" button at the end
    }
}

document.getElementById('next-button').onclick = showNextQuestion;

showQuestion();
