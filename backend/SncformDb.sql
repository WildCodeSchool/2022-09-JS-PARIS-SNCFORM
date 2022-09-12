DROP TABLE IF EXISTS user_notification;

DROP TABLE IF EXISTS notification;

DROP TABLE IF EXISTS user_learning;

DROP TABLE IF EXISTS user;

DROP TABLE IF EXISTS learning_category;

DROP TABLE IF EXISTS job_type_category;

DROP TABLE IF EXISTS category;

DROP TABLE IF EXISTS job_type_learning;

DROP TABLE IF EXISTS job_type;

DROP TABLE IF EXISTS learning_grade;

DROP TABLE IF EXISTS grade;

DROP TABLE IF EXISTS learning;

CREATE TABLE grade (
  id INT NOT NULL AUTO_INCREMENT,
  name INT,
  PRIMARY KEY (id)
);

CREATE TABLE job_type (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(150),
  PRIMARY KEY (id)
);

CREATE TABLE user (
  id INT NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(150),
  last_name VARCHAR(150),
  cp_number VARCHAR(8),
  email VARCHAR(255),
  password VARCHAR(255),
  role VARCHAR(20),
  genre VARCHAR(20),
  avatar BLOB,
  manager_id INT,
  grade_id INT NOT NULL,
  job_type_id INT NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (grade_id) REFERENCES grade(id),
  FOREIGN KEY (job_type_id) REFERENCES job_type(id)
);

ALTER TABLE
  user
ADD
  CONSTRAINT fk_user_manager_id FOREIGN KEY(manager_id) REFERENCES user(id);

CREATE TABLE learning (
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(255),
  description VARCHAR(10000),
  type VARCHAR(50),
  duration INT,
  instructor VARCHAR(150),
  capacity_learner INT,
  start_registration DATE,
  end_registration DATE,
  PRIMARY KEY (id)
);

CREATE TABLE category (
  id INT NOT NULl AUTO_INCREMENT,
  title VARCHAR(150),
  PRIMARY KEY (id)
);

CREATE TABLE notification (
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(255),
  description VARCHAR(10000),
  date DATE,
  PRIMARY KEY (id)
);

INSERT INTO
  notification (title, description, date)
VALUES
  (
    'Inscription confirmée',
    'Votre manager a confirmé votre inscription',
    '2022-02-13'
  ),
  (
    'Inscription non confirmée',
    'Votre manager a refusé votre inscription',
    '2022-12-13'
  ),
  (
    'Nouvelle formation disponible',
    'Une nouvelle formation pour votre métier vous est proposé',
    '2023-07-19'
  ),
  (
    'Avertissement',
    'Votre formation arrive à échéance',
    '2023-05-03'
  ),
  (
    'Avertissement',
    'Votre formation débute',
    '2021-12-29'
  ),
  (
    'Avertissement',
    'Votre formation en cours arrive à échéance',
    '2023-07-17'
  );

CREATE TABLE user_learning (
  id INT NOT NULL AUTO_INCREMENT,
  user_id INT NOT NULL,
  learning_id INT NOT NULL,
  status VARCHAR(150),
  start_learning DATE,
  PRIMARY KEY (id),
  FOREIGN KEY (user_id) REFERENCES user(id),
  FOREIGN KEY (learning_id) REFERENCES learning(id)
);

CREATE TABLE learning_category (
  id INT NOT NULL AUTO_INCREMENT,
  category_id INT NOT NULL,
  learning_id INT NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (category_id) REFERENCES category(id),
  FOREIGN KEY (learning_id) REFERENCES learning(id)
);

INSERT INTO learning_category (category_id, learning_id)
VALUES 
(1,15),
(2,14),
(3,13),
(4,12),
(4,11),
(6,10),
(7,9),
(8,8),
(9,7),
(1,6),
(9,4),
(8,3),
(7,2),
(6,1),
(5,1);

CREATE TABLE job_type_category (
  id INT NOT NULL AUTO_INCREMENT,
  job_type_id INT NOT NULL,
  category_id INT NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (job_type_id) REFERENCES job_type(id),
  FOREIGN KEY (category_id) REFERENCES category(id)
);

INSERT INTO
  job_type_category (job_type_id, category_id)
VALUES
  (1, 10),
  (2, 9),
  (3, 8),
  (4, 7),
  (5, 6),
  (6, 5),
  (7, 4),
  (8, 3),
  (9, 2),
  (10, 1);

  CREATE TABLE job_type_learning (
    job_type_id INT NOT NULL,
    learning_id INT NOT NULL,
    FOREIGN KEY (job_type_id) REFERENCES job_type(id),
    FOREIGN KEY (learning_id) REFERENCES learning(id)
  );

INSERT INTO
  job_type_learning (job_type_id, learning_id)
VALUES
  (1, 15),
  (2, 14),
  (3, 13),
  (4, 12),
  (5, 11),
  (6, 10),
  (7, 9),
  (8, 8),
  (9, 7),
  (10, 6),
  (1, 5),
  (2, 4),
  (3, 3),
  (4, 2),
  (5, 1);

CREATE TABLE learning_grade (
  id INT NOT NULL AUTO_INCREMENT,
  learning_id INT NOT NULL,
  grade_id INT NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (learning_id) REFERENCES learning(id),
  FOREIGN KEY (grade_id) REFERENCES grade(id)
);

-- Fake learning table
-- INSERT INTO table1 (field1, field2) VALUES (value1, value2);
INSERT INTO
  learning_grade (grade_id, learning_id)
VALUES
  (1, 15),
  (2, 14),
  (3, 13),
  (4, 12),
  (5, 11),
  (6, 10),
  (7, 9),
  (8, 8),
  (1, 7),
  (2, 6),
  (3, 5),
  (4, 4),
  (5, 3),
  (6, 2),
  (7, 1);

CREATE TABLE user_notification (
  id INT NOT NULL AUTO_INCREMENT,
  user_id INT NOT NULL,
  status VARCHAR (150),
  notifications_id INT NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (user_id) REFERENCES user(id),
  FOREIGN KEY (notifications_id) REFERENCES notification(id)
);

-- Fake status in user_notification table
-- INSERT INTO table1 (field1, field2) VALUES (value1, value2);
INSERT INTO
  user_notification (status, user_id, notifications_id)
VALUES
  ("Non lu", 1, 1),
  ("Lu", 2, 2),
  ("Non lu", 3, 3),
  ("Lu", 4, 4),
  ("Non lu", 5, 5),
  ("Lu", 6, 6),
  ("Non lu", 7, 1),
  ("Lu", 8, 2),
  ("Non lu", 9, 3),
  ("Lu", 10, 4);

INSERT INTO
  job_type (name)
VALUES
  ("Conduite et manoeuvre"),
  ("Commercial"),
  ("Surete"),
  ("Maintenance"),
  ("Medical et social"),
  ("Fonctions transverses"),
  ("Gestion fonciere et immobiliere"),
  ("Systeme d'information et digital"),
  ("Production ferroviaire"),
  ("Marketing");

INSERT INTO
  grade (name)
VALUES
  (1),
  (2),
  (3),
  (4),
  (5),
  (6),
  (7),
  (8);

INSERT INTO
  user (
    first_name,
    last_name,
    email,
    cp_number,
    password,
    role,
    genre,
    avatar,
    grade_id,
    job_type_id,
    manager_id
  )
VALUES
  (
    "Shellie",
    "Castillo",
    "tincidunt.adipiscing@sncf.fr",
    "8725952A",
    "AEL51RPM2IQ",
    "Manager",
    "Femme",
    "https://yahoo.com",
    6,
    9,
    NULL
  ),
  (
    "Bernard",
    "Olson",
    "non@sncf.fr",
    "8713031L",
    "OXD53AIM7MV",
    "Manager",
    "Femme",
    "http://walmart.com",
    8,
    8,
    NULL
  ),
  (
    "Eliana",
    "Garcia",
    "erat@sncf.fr",
    "8131677K",
    "AEJ81TKK5MI",
    "Manager",
    "Homme",
    "https://nytimes.com",
    2,
    6,
    NULL
  ),
  (
    "Thor",
    "Kline",
    "ultricies.ornare.elit@sncf.fr",
    "8569764N",
    "WPI18OSZ1JW",
    "Agent",
    "Femme",
    "https://youtube.com",
    7,
    10,
    1
  ),
  (
    "Jordan",
    "Ortega",
    "auctor.velit.aliquam@sncf.fr",
    "8543474K",
    "HJM86HGH8JN",
    "Agent",
    "Homme",
    "https://zoom.us",
    7,
    3,
    3
  ),
  (
    "Hiram",
    "Anderson",
    "placerat.augue@sncf.fr",
    "8485620W",
    "FLQ79RJF4UR",
    "Agent",
    "Femme",
    "http://ebay.com",
    5,
    3,
    2
  ),
  (
    "Francesca",
    "Bailey",
    "ut.sem@sncf.fr",
    "8648226J",
    "PBQ52LGR5FQ",
    "Agent",
    "Femme",
    "http://whatsapp.com",
    3,
    5,
    1
  ),
  (
    "Zeph",
    "Guthrie",
    "vitae.velit.egestas@sncf.fr",
    "8475896C",
    "LYJ64HBL2MB",
    "Agent",
    "Femme",
    "https://guardian.co.uk",
    7,
    10,
    1
  ),
  (
    "Cody",
    "Patton",
    "a.nunc.in@sncf.fr",
    "8838875T",
    "PRP41FII2TG",
    "Agent",
    "Homme",
    "https://netflix.com",
    5,
    2,
    3
  ),
  (
    "Kylie",
    "Burris",
    "nullam@sncf.fr",
    "8225130H",
    "XRE79KMG8MU",
    "Agent",
    "Femme",
    "http://reddit.com",
    8,
    8,
    2
  ),
  (
    "Beverly",
    "Good",
    "felis.ullamcorper.viverra@sncf.fr",
    "8221315J",
    "UNS42MKH5YN",
    "Agent",
    "Femme",
    "http://bbc.co.uk",
    6,
    4,
    2
  ),
  (
    "Kathleen",
    "Bruce",
    "arcu@sncf.fr",
    "8674531K",
    "KHT48BNM5ER",
    "Agent",
    "Homme",
    "https://baidu.com",
    7,
    3,
    3
  ),
  (
    "Baxter",
    "Bowen",
    "viverra.maecenas.iaculis@sncf.fr",
    "8135787S",
    "YIX69MTQ5FW",
    "Agent",
    "Femme",
    "http://facebook.com",
    2,
    2,
    1
  ),
  (
    "Nyssa",
    "Downs",
    "nunc.pulvinar@sncf.fr",
    "8651542F",
    "TGV38UKB6RP",
    "Agent",
    "Femme",
    "https://facebook.com",
    7,
    9,
    1
  ),
  (
    "Holly",
    "Yang",
    "in@sncf.fr",
    "8433321I",
    "ZKG58XQM2YY",
    "Agent",
    "Homme",
    "https://naver.com",
    2,
    6,
    1
  );

INSERT INTO
  category (title)
VALUES
  ("Informatique"),
  ("Securite"),
  ("Ethique"),
  ("Commercial"),
  ("Traction"),
  ("Ressources Humaines"),
  ("Maintenance"),
  ("Comptabilite"),
  ("Logistique"),
  ("Immobilier");

INSERT INTO
  learning (
    title,
    description,
    type,
    duration,
    instructor,
    capacity_learner,
    start_registration,
    end_registration
  )
VALUES
  (
    "nec tempus scelerisque, lorem",
    "lacinia mattis. Integer eu lacus. Quisque imperdiet, erat nonummy ultricies ornare, elit elit fermentum risus, at fringilla purus mauris a nunc. In at pede. Cras vulputate velit eu sem. Pellentesque ut ipsum ac mi eleifend egestas. Sed pharetra, felis eget varius ultrices, mauris ipsum porta elit, a feugiat tellus lorem eu metus. In lorem. Donec elementum, lorem ut aliquam iaculis, lacus pede sagittis augue, eu tempor erat neque non quam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam fringilla cursus purus. Nullam scelerisque neque sed sem egestas blandit. Nam nulla magna, malesuada vel, convallis in, cursus et, eros. Proin ultrices. Duis volutpat nunc sit amet metus. Aliquam erat volutpat. Nulla facilisis. Suspendisse commodo tincidunt nibh. Phasellus nulla. Integer vulputate, risus a ultricies adipiscing, enim mi tempor lorem, eget mollis lectus pede et risus. Quisque libero lacus, varius et, euismod et, commodo at, libero. Morbi accumsan laoreet ipsum. Curabitur consequat, lectus sit amet luctus vulputate, nisi sem semper erat, in consectetuer ipsum nunc id enim. Curabitur massa. Vestibulum accumsan neque et nunc. Quisque ornare tortor at risus. Nunc ac sem ut dolor dapibus gravida. Aliquam tincidunt,",
    "presentiel",
    45,
    "Leslie Dawson",
    31,
    "2023-03-19",
    "2024-04-10"
  ),
  (
    "vitae, sodales at,",
    "accumsan convallis, ante lectus convallis est, vitae sodales nisi magna sed dui. Fusce aliquam, enim nec tempus scelerisque, lorem ipsum sodales purus, in molestie tortor nibh sit amet orci. Ut sagittis lobortis mauris. Suspendisse aliquet molestie tellus. Aenean egestas hendrerit neque. In ornare sagittis felis. Donec tempor, est ac mattis semper, dui lectus rutrum urna, nec luctus felis purus ac tellus. Suspendisse sed dolor. Fusce mi lorem, vehicula et, rutrum eu, ultrices sit amet, risus. Donec nibh enim, gravida sit amet, dapibus id, blandit at, nisi. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus",
    "presentiel",
    10,
    "Jonas Bailey",
    115,
    "2023-06-13",
    "2023-10-3"
  ),
  (
    "Cras vulputate velit eu",
    "Etiam ligula tortor, dictum eu, placerat eget, venenatis a, magna. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Etiam laoreet, libero et tristique pellentesque, tellus sem mollis dui, in sodales elit erat vitae risus. Duis a mi fringilla mi lacinia mattis. Integer eu lacus. Quisque imperdiet, erat nonummy ultricies ornare, elit elit fermentum risus, at fringilla purus mauris a nunc. In at pede. Cras vulputate velit eu sem. Pellentesque ut ipsum ac mi eleifend egestas. Sed pharetra, felis eget varius ultrices, mauris ipsum porta elit, a feugiat tellus lorem eu metus. In lorem. Donec elementum, lorem ut aliquam iaculis, lacus pede sagittis augue, eu tempor erat neque non quam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam fringilla cursus purus. Nullam scelerisque neque sed sem egestas blandit. Nam nulla magna, malesuada vel, convallis in, cursus et, eros. Proin ultrices. Duis volutpat nunc sit amet metus. Aliquam erat volutpat. Nulla facilisis. Suspendisse commodo tincidunt nibh. Phasellus",
    "distanciel",
    18,
    "Rinah Stanton",
    150,
    "2023-01-24",
    "2023-12-18"
  ),
  (
    "non, dapibus rutrum, justo.",
    "dapibus gravida. Aliquam tincidunt, nunc ac mattis ornare, lectus ante dictum mi, ac mattis velit justo nec ante. Maecenas mi felis, adipiscing fringilla, porttitor vulputate, posuere vulputate, lacus. Cras interdum. Nunc sollicitudin commodo ipsum. Suspendisse non leo. Vivamus nibh dolor, nonummy ac, feugiat non, lobortis quis, pede. Suspendisse dui. Fusce diam nunc, ullamcorper eu, euismod ac, fermentum vel, mauris. Integer sem elit, pharetra ut, pharetra sed, hendrerit a, arcu. Sed et",
    "presentiel",
    15,
    "Davis Estrada",
    89,
    "2022-01-9",
    "2023-12-26"
  ),
  (
    "sagittis augue, eu",
    "pede nec ante blandit viverra. Donec tempus, lorem fringilla ornare placerat, orci lacus vestibulum lorem, sit amet ultricies sem magna nec quam. Curabitur vel lectus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec dignissim magna a tortor. Nunc commodo auctor velit. Aliquam nisl. Nulla eu neque pellentesque massa lobortis ultrices. Vivamus rhoncus. Donec est. Nunc ullamcorper, velit in aliquet lobortis, nisi nibh",
    "presentiel",
    14,
    "Roary Leonard",
    97,
    "2023-06-10",
    "2024-01-22"
  ),
  (
    "aliquet. Proin velit.",
    "Morbi metus. Vivamus euismod urna. Nullam lobortis quam a felis ullamcorper viverra. Maecenas iaculis aliquet diam. Sed diam lorem, auctor quis, tristique ac, eleifend vitae, erat. Vivamus nisi. Mauris nulla. Integer urna. Vivamus molestie dapibus ligula. Aliquam erat volutpat. Nulla dignissim. Maecenas ornare egestas ligula. Nullam feugiat placerat velit. Quisque varius. Nam porttitor scelerisque neque. Nullam nisl. Maecenas malesuada fringilla est. Mauris eu turpis. Nulla aliquet. Proin velit. Sed malesuada",
    "distanciel",
    12,
    "Calista Hardy",
    97,
    "2022-10-4",
    "2023-12-18"
  ),
  (
    "Nulla tincidunt, neque",
    "vitae dolor. Donec fringilla. Donec feugiat metus sit amet ante. Vivamus non lorem vitae odio sagittis semper. Nam tempor diam dictum sapien. Aenean massa. Integer vitae nibh. Donec est mauris, rhoncus id, mollis nec, cursus a, enim. Suspendisse aliquet, sem ut cursus luctus, ipsum leo elementum sem, vitae aliquam eros turpis non enim. Mauris quis turpis vitae purus gravida sagittis. Duis gravida. Praesent eu nulla at sem molestie sodales. Mauris blandit enim consequat purus. Maecenas libero est, congue a, aliquet vel, vulputate eu, odio. Phasellus at augue id ante",
    "distanciel",
    18,
    "Abdul Kirkland",
    109,
    "2022-05-19",
    "2023-12-14"
  ),
  (
    "mus.",
    "urna suscipit nonummy. Fusce fermentum fermentum arcu. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae Phasellus ornare. Fusce mollis. Duis sit amet diam eu dolor egestas rhoncus. Proin nisl sem, consequat nec, mollis vitae, posuere at, velit. Cras lorem lorem, luctus ut, pellentesque eget, dictum placerat, augue. Sed molestie. Sed id risus quis",
    "distanciel",
    11,
    "Solomon Neal",
    63,
    "2021-10-21",
    "2023-12-17"
  ),
  (
    "eu tellus. Phasellus elit",
    "tempor lorem, eget mollis lectus pede et risus. Quisque libero lacus, varius et, euismod et, commodo at, libero. Morbi accumsan laoreet ipsum. Curabitur consequat, lectus sit amet luctus vulputate, nisi sem semper erat, in consectetuer ipsum nunc id enim. Curabitur massa. Vestibulum accumsan neque et nunc. Quisque ornare tortor at risus. Nunc ac sem ut dolor dapibus gravida. Aliquam tincidunt, nunc ac",
    "presentiel",
    19,
    "Galena Henry",
    98,
    "2021-12-1",
    "2024-01-7"
  ),
  (
    "tortor. Nunc",
    "tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam fringilla cursus purus. Nullam scelerisque neque sed sem egestas blandit. Nam nulla magna, malesuada vel, convallis in, cursus et, eros. Proin ultrices. Duis volutpat nunc sit amet metus. Aliquam erat volutpat. Nulla facilisis. Suspendisse commodo tincidunt nibh. Phasellus nulla. Integer vulputate, risus a ultricies adipiscing, enim mi tempor lorem, eget mollis lectus pede et risus. Quisque libero lacus, varius et, euismod et, commodo at, libero. Morbi accumsan laoreet ipsum. Curabitur consequat, lectus sit amet luctus vulputate, nisi sem semper erat, in consectetuer ipsum nunc id enim. Curabitur massa. Vestibulum accumsan neque et nunc. Quisque ornare tortor at risus. Nunc ac sem ut dolor dapibus gravida. Aliquam tincidunt, nunc ac mattis ornare, lectus ante dictum mi, ac mattis velit justo nec ante. Maecenas mi felis, adipiscing fringilla, porttitor vulputate, posuere vulputate, lacus. Cras interdum. Nunc sollicitudin commodo ipsum. Suspendisse non leo. Vivamus nibh dolor, nonummy ac, feugiat non, lobortis quis, pede. Suspendisse dui. Fusce diam nunc, ullamcorper eu, euismod ac, fermentum vel, mauris. Integer sem elit, pharetra ut, pharetra sed,",
    "distanciel",
    6,
    "Carol James",
    173,
    "2023-05-20",
    "2023-11-22"
  ),
  (
    "parturient montes,",
    "consequat nec, mollis vitae, posuere at, velit. Cras lorem lorem, luctus ut, pellentesque eget, dictum placerat, augue. Sed molestie. Sed id risus quis diam luctus lobortis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. Mauris ut quam vel sapien imperdiet ornare. In faucibus. Morbi vehicula. Pellentesque tincidunt tempus risus. Donec egestas. Duis ac arcu. Nunc mauris. Morbi non sapien molestie orci tincidunt adipiscing. Mauris molestie pharetra nibh. Aliquam ornare, libero at auctor ullamcorper,",
    "presentiel",
    33,
    "Xanthus Cooper",
    60,
    "2021-12-26",
    "2023-11-17"
  ),
  (
    "vulputate, lacus.",
    "a nunc. In at pede. Cras vulputate velit eu sem. Pellentesque ut ipsum ac mi eleifend egestas. Sed pharetra, felis eget varius ultrices, mauris ipsum porta elit, a feugiat tellus lorem eu metus. In lorem. Donec elementum, lorem ut aliquam iaculis, lacus pede sagittis augue, eu tempor erat neque non quam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam fringilla cursus purus. Nullam scelerisque",
    "distanciel",
    27,
    "Yen Nguyen",
    186,
    "2022-03-7",
    "2023-12-13"
  ),
  (
    "nulla",
    "vitae, erat. Vivamus nisi. Mauris nulla. Integer urna. Vivamus molestie dapibus ligula. Aliquam erat volutpat. Nulla dignissim. Maecenas ornare egestas ligula. Nullam feugiat placerat velit. Quisque varius. Nam porttitor scelerisque neque. Nullam nisl. Maecenas malesuada fringilla est. Mauris eu turpis. Nulla aliquet. Proin velit. Sed malesuada augue ut lacus. Nulla tincidunt, neque vitae semper egestas, urna justo faucibus lectus, a sollicitudin orci sem eget massa. Suspendisse eleifend. Cras sed leo. Cras vehicula aliquet libero. Integer in magna. Phasellus dolor elit, pellentesque a, facilisis non, bibendum sed, est. Nunc laoreet lectus quis massa. Mauris vestibulum, neque sed dictum eleifend, nunc risus varius orci, in consequat enim diam vel arcu. Curabitur ut odio vel est tempor bibendum. Donec felis orci, adipiscing non, luctus sit amet, faucibus ut, nulla. Cras eu tellus eu augue porttitor interdum. Sed auctor odio a purus. Duis elementum,",
    "presentiel",
    45,
    "Victor Scott",
    64,
    "2022-06-20",
    "2023-12-8"
  ),
  (
    "malesuada fames",
    "Duis ac arcu. Nunc mauris. Morbi non sapien molestie orci tincidunt adipiscing. Mauris molestie pharetra nibh. Aliquam ornare, libero at auctor ullamcorper, nisl arcu iaculis enim, sit amet ornare lectus justo eu arcu. Morbi sit amet massa. Quisque porttitor eros nec tellus. Nunc lectus pede, ultrices a, auctor non, feugiat nec, diam. Duis mi",
    "distanciel",
    15,
    "Delilah Miles",
    197,
    "2021-10-7",
    "2024-02-17"
  ),
  (
    "orci lacus vestibulum",
    "metus eu erat semper rutrum. Fusce dolor quam, elementum at, egestas a, scelerisque sed, sapien. Nunc pulvinar arcu et pede. Nunc sed orci lobortis augue scelerisque mollis. Phasellus libero mauris, aliquam eu, accumsan sed, facilisis vitae, orci. Phasellus dapibus quam quis diam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce aliquet magna a neque. Nullam ut nisi a odio semper cursus. Integer mollis. Integer tincidunt aliquam arcu. Aliquam ultrices iaculis odio. Nam interdum enim non nisi. Aenean eget metus. In nec orci. Donec nibh. Quisque nonummy ipsum non arcu. Vivamus sit amet risus. Donec egestas. Aliquam nec enim. Nunc ut erat. Sed nunc est, mollis non, cursus non, egestas a, dui. Cras pellentesque. Sed dictum. Proin",
    "distanciel",
    38,
    "Carissa Garner",
    57,
    "2022-11-11",
    "2024-03-29"
  );

/*test requête user_learning
 SELECT
 first_name,
 last_name,
 title
 FROM
 user
 INNER JOIN user_learning ON user.id = user_learning.user_id
 INNER JOIN learning ON user_learning.learning_id = learning.id
 WHERE
 user_id = 4;
 */
/* fake user_learning table
 INSERT INTO
 user_learning (user_id, learning_id, status, start_learning)
 VALUES
 (4, 6, "in progress", "2022-11-25"),
 (8, 1, "in progress", "2022-11-25"),
 (5, 2, "in progress", "2022-11-25"),
 (4, 5, "in progress", "2022-11-25"),
 (4, 9, "in progress", "2022-11-25"),
 (10, 6, "in progress", "2022-11-25"),
 (9, 6, "in progress", "2022-11-25"),
 (7, 6, "in progress", "2022-11-25");
 */
/* fake notification table
 INSERT INTO
 notification (title, description, date)
 VALUES
 (
 'Inscription confirmée',
 'Votre manager a confirmé votre inscription',
 '2022-02-13'
 ),
 (
 'Inscription non confirmée',
 'Votre manager a refusé votre inscription',
 '2022-12-13'
 ),
 (
 'Nouvelle formation disponible',
 'Une nouvelle formation pour votre métier vous est proposé',
 '2023-07-19'
 ),
 (
 'Nouvelle formation disponible',
 'Une nouvelle formation pour votre métier vous est proposé',
 '2022-11-17'
 ),
 (
 'Nouvelle formation disponible',
 'Une nouvelle formation pour votre métier vous est proposé',
 '2021-11-20'
 ),
 (
 'Nouvelle formation disponible',
 'Une nouvelle formation pour votre métier vous est proposé',
 '2022-01-09'
 ),
 (
 'Nouvelle formation disponible',
 'Une nouvelle formation pour votre métier vous est proposé',
 '2022-07-19'
 ),
 (
 'Avertissement',
 'Votre formation arrive à échéance',
 '2023-05-03'
 ),
 (
 'Avertissement',
 'Votre formation arrive à échéance',
 '2022-12-29'
 ),
 (
 'Avertissement',
 'Votre formation arrive à échéance',
 '2023-08-28'
 ),
 (
 'Inscription confirmée',
 'Une nouvelle formation pour votre métier vous est proposé',
 '2021-10-04'
 ),
 (
 'Inscription confirmée',
 'Une nouvelle formation pour votre métier vous est proposé',
 '2022-07-29'
 ),
 (
 'Inscription non confirmée',
 'Votre manager a refusé votre inscription',
 '2022-10-17'
 ),
 (
 'Inscription non confirmée',
 'Votre manager a refusé votre inscription',
 '2023-07-17'
 ),
 (
 'Avertissement',
 'Votre formation débute',
 '2021-12-29'
 );
 */