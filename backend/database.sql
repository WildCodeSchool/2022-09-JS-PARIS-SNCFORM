SET NAMES 'utf8';

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

DROP TABLE IF EXISTS token_blacklist;

SET @@auto_increment_increment=1;

CREATE TABLE grade (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(255),
  PRIMARY KEY (id)
);

CREATE TABLE job_type (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(255),
  PRIMARY KEY (id)
);

CREATE TABLE user (
  id INT NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(255) NOT NULL,
  last_name VARCHAR(255) NOT NULL,
  cp_number VARCHAR(8) NOT NULL UNIQUE,
  email VARCHAR(255) NOT NULL UNIQUE,
  hashedPassword VARCHAR(255) NOT NULL,
  role VARCHAR(20) NOT NULL,
  genre VARCHAR(20) NOT NULL,
  avatar VARCHAR(255),
  background_profil VARCHAR(255),
  bio TEXT,
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
  title VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  type VARCHAR(50) NOT NULL,
  duration INT NOT NULL,
  instructor VARCHAR(255) NOT NULL,
  capacity_learner INT,
  start_registration DATE,
  end_registration DATE,
  PRIMARY KEY (id)
);

CREATE TABLE category (
  id INT NOT NULl AUTO_INCREMENT,
  title VARCHAR(255) NOT NULL,
  PRIMARY KEY (id)
);


CREATE TABLE user_learning (
  id INT NOT NULL AUTO_INCREMENT,
  user_id INT NOT NULL,
  learning_id INT NOT NULL,
  status VARCHAR(255) NOT NULL,
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

CREATE TABLE job_type_category (
  id INT NOT NULL AUTO_INCREMENT,
  job_type_id INT NOT NULL,
  category_id INT NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (job_type_id) REFERENCES job_type(id),
  FOREIGN KEY (category_id) REFERENCES category(id)
);

CREATE TABLE job_type_learning (
  job_type_id INT NOT NULL,
  learning_id INT NOT NULL,
  FOREIGN KEY (job_type_id) REFERENCES job_type(id),
  FOREIGN KEY (learning_id) REFERENCES learning(id)
);

CREATE TABLE learning_grade (
  id INT NOT NULL AUTO_INCREMENT,
  learning_id INT NOT NULL,
  grade_id INT NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (learning_id) REFERENCES learning(id),
  FOREIGN KEY (grade_id) REFERENCES grade(id)
);

CREATE TABLE token_blacklist (
  id INT NOT NULL AUTO_INCREMENT,
  token VARCHAR(755) NOT NULL,
  PRIMARY KEY (id)
);

INSERT INTO
  job_type (name)
VALUES
  ("Conduite et manoeuvre"),
  ("Commercial"),
  ("Sûreté"),
  ("Maintenance"),
  ("Médical et social"),
  ("Fonctions transverses"),
  ("Gestion foncière et immobilière"),
  ("Système d'information et digital"),
  ("Production ferroviaire"),
  ("Marketing");

INSERT INTO
  grade (name)
VALUES
  ("1"),
  ("2"),
  ("3"),
  ("4"),
  ("5"),
  ("6"),
  ("7"),
  ("8");

INSERT INTO
  user (
    first_name,
    last_name,
    email,
    cp_number,
    hashedPassword,
    role,
    genre,
    avatar,
    background_profil,
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
    "https://naver.com",
    2,
    6,
    1
  );

INSERT INTO
  category (title)
VALUES
  ("Informatique"),
  ("Ethique"),
  ("Circulation"),
  ("Ressources Humaines"),
  ("Maintenance"),
  ("Management");

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
    "Numérique et bien-être au travail", -- INFORMATIQUE
    "Avez-vous réfléchi aux impacts du numérique sur votre travail ? 
 La digitalisation apporte de nombreux avantages : elle permet de fluidifier les process, d'organiser plus efficacement ses projets et ses journées, de mieux communiquer avec son équipe malgré la distance, mais aussi d’accroître largement les possibilités offertes aux collaborateurs de communiquer, de développer leurs compétences et d’évoluer!
Mais attention à ne pas se laisser dépasser par la multiplicité de ces usages ! 
Nous avons conçu ce parcours de formation pour répondre à la prise de conscience collective de ces problématiques. L'objectif est de vous aider à vous adapter à des modes de travail qui intègrent de plus en plus le numérique tout en préservant votre charge mentale digitale. C'est parti !",
    "Distanciel",
    1,
    "Pas d'instructeur",
    500,
    "2022-09-25",
    "2024-04-10"
  ),
  (
    "ProDIVERSITÉ, le jeu", -- ETHIQUE
    "ProDIVERSITÉ est un jeu pédagogique en ligne conçu par SNCF.

Son objectif est de sensibiliser et de former aux enjeux de la diversité de manière ludique et concrète.

Le jeu est constitué de sept séquences, reflétant sept critères de discrimination : religion, sexe, orientation sexuelle, origine, handicap, âge et appartenance syndicale.

Chacune des séquences est clôturée par un quiz. 
Deux parcours de jeux sont proposés : 
celui-ci destiné à tous les salariés, traitant quatre critères de discrimination et un parcours spécifique aux managers accessible via ce lien.",
    "Distanciel",
    1,
    "Pas d'instructeur",
    115,
    "2022-11-13",
    "2023-10-03"
  ),
  (
    "Mieux comprendre la rémunération chez SNCF", -- RH
    "Approfondissez vos connaissances en rémunération !

Ce module vous permettra de :
Connaître les enjeux et les composantes du package de rémunération,
Savoir parler de rémunération,
Valoriser le package de rémunération de SNCF",
    "Distanciel",
    1,
    "Pas d'instructeur",
    500,
    "2023-01-24",
    "2023-12-18"
  ),
  (
    "Manager de secteur", -- MANAGEMENT
    "Le manager de secteur (M2) a pour mission de diriger un secteur gares. Il met en œuvre les orientations stratégiques de l’Établissement pour satisfaire les clients et améliorer la qualité de service sur son secteur (accueil, ventes, gestion de site et lutte anti-fraude). Il assure l’engagement de ses équipes et la sécurité des clients, des agents et des prestataires.

Il manage et anime une équipe composée de 1 ou 2 Adjoints (M2A), 1 ou 2 Référents Animation et Vie des Gares (RAVG) et de plusieurs chefs d’équipe (M1).",
    "Présentiel",
    60, 
    "Pas d'instructeur",
    5,
    "2023-01-24",
    "2023-06-18"
  ),
  (
    "Agent de Manœuvre Logistique", -- CIRCULATION
    "La formation a pour but de former l'agent sur différentes activités comme : 
se présenter au GEOPS à chaque prise de service et prendre connaissance des
conditions de circulations (travaux,…) sur le site,
annoncer chaque manoeuvre au COM et respecter les règles de communication,
réaliser les déplacements des engins sur le site,
remplir les réservoirs de combustibles, complèter les sablières, huile et liquide de
refroidissement,
participer à la mise en place et à la sortie des engins pour la maintenance,...",
    "Présentiel",
    30, 
    "Roary Leonard",
    50,
    "2022-06-10",
    "2023-01-22"
  ),
  (
    "DPX traction", --  CIRCULATION ET MANAGEMENT
    "La formation a pour but de : 
   manager une équipe de conducteurs(trices),
   veille et contrôle,
   audits internes/ externes,
   analyser des évènements/ enquêtes,
   suivi des ressources effectuant des tâches de sécurité",
    "Présentiel",
    120,
    "Calista Hardy",
    10,
    "2022-10-04",
    "2023-04-18"
  ),
  (
    "Surveillant de travaux maintenance", -- MAINTENANCE
    "Appuie le conducteur de travaux sur le terrain : prépare les chantiers, prend des mesures, fait les marquages terrain, fait des visites terrain entreprises…
    La formation a pour but de former l'agent afin qu'il puisse exercer ces activités : 
réaliser la préparation opérationnelle des chantiers : préparer les opérations de remplacement de ½ ferrures, cœurs, libérations, marquages divers,
faire les demandes de matières,
réceptionner les approvisionnements des chantiers concernés (matières, en-gins…), ...",
    "Présentiel",-
    30, 
    "Abdul Kirkland",
    25,
    "2022-05-19",
    "2023-12-14"
  ),
  (
    "Chef de projet digital et SI", -- MANAGEMENT ET INFORMATIQUE
    "Les domaines d'activité des projets sont très variés :
gestion commerciale,
production ferroviaire/optimisation de plan de transport, 
applications de gestion pour les fonctions Finance, Ressources Humaines,
décisionnel, Outil de pilotage de l'entreprise,
innovation.
Les projets SI sont au coeur de la transformation de l'entreprise.
Le chef de projet est au coeur des relations internes stratégiques et opérationnelles : directeurs, les métiers opérationnels, unités et plateformes ferroviaires et les partenaires technologiques.",
    "Présentiel",
    90,
    "Solomon Neal",
    5,
    "2022-10-21",
    "2022-12-17"
  ),
  (
    "Les 10 CybeRéflexes", -- INFORMATIQUE 
    "Bienvenue dans ce parcours de formation sur les bons réflexes en matière de Cybersécurité.

Venez découvrir les aventures de la famille Cyberflexe et apprenez à déjouer les pièges tendus par les cyberattaquants.

Saurez-vous répondre au challenge final et ainsi devenir les Cyber-héros de l’entreprise ?",
    "Distanciel",
    1,
    "Pas d'instructeur",
    500,
    "2021-12-01",
    "2024-01-07"
  ),
  (
    "Excellence SST Manager", -- MANAGEMENT
    "Nous vous proposons cinq modules de 20 à 30 minutes  chacun  pour vous familiariser avec les notions de base et les procédures en matières de management de la Santé Sécurité au Travail (SST) :

La culture sécurité  de l'entreprise, ses ambitions et ses méthodes,
Les obligations légales,
La gestion d'un accident du travail pour réparer et prévenir,
Les actions à mettre en place pour évaluer et réduire les risques,
Le management de l'excellence pour la SST",
    "Distanciel",
    2,
    "Pas d'instructeur",
    500,
    "2023-05-20",
    "2023-11-22"
  ),
  (
    "4 conseils pour un télétravail efficace", -- INFORMATIQUE
    "Cette vidéo vous présente 4 conseils pour un télétravail efficace avec un lien vers le site dédié aux services digitaux.",
    "Distanciel",
    1,
    "Pas d'instructeur",
    500,
    "2021-12-26",
    "2023-11-17"
  ),
  (
    "Handicap et bonnes pratiques managériales", -- MANAGEMENT ET ETHIQUE
    "Vous êtes manager, tuteur, acteur RH ?

Vous avez des questions sur des situations concrètes concernant le handicap au travail de vos collaborateurs, comme par exemple :

Ai-je  le droit de fixer des objectifs ambitieux à une personne en situation de handicap ?
Comment mettre en place des aménagements de poste sans faire du favoritisme ?  
Une personne en situation de handicap dans mon équipe arrive en retard depuis quelques temps. Est-ce que c’est vraiment à cause de son handicap ? Comment j’aborde le sujet avec elle ?
Comment je peux trouver les coordonnées du Correspondant Handicap & Emploi de mon périmètre ?
La formation vous permet de répondre à ces questions, en trois chapitres.
",
    "Distanciel",
    1,
    "Pas d'instructeur",
    500,
    "2022-03-07",
    "2023-12-13"
  ),
  (
    "Osez décider... même dans l'incertitude", -- MANAGEMENT
    "Les objectifs de la formation :
définir les composantes de la décision,

agir même dans un monde incertain,

accompagner sa décision ",
    "Distanciel",
    2,
    "Pas d'instructeur",
    500,
    "2022-06-20",
    "2023-12-08"
  ),
  (
    "Travailler ensemble sans préjugés", -- ETHIQUE
    "Les préjugés sont un obstacle puissant au vivre ensemble. Ils peuvent créer des situations de conflit, de mal-être et d’exclusion.

 Ce module a pour objectif de permettre, grâce à des cas concrets illustrés ou filmés, de détecter l’expression d’un préjugé et de savoir y réagir efficacement.

Il invite à la réflexion en faisant écho à des situations déjà vécues, anodines au premier abord. Il montre l'impact d’un préjugé en faisant connaitre les différents points de vue et notamment celui des personnes ciblées.",
    "Distanciel",
    1,
    "Pas d'instructeur",
    500,
    "2021-10-07",
    "2024-02-17"
  ),
  (
    "Le fonctionnement du COEG : acteurs et missions", -- MANAGEMENT
    "Dans ce parcours, vous allez découvrir ce qu'est un Centre Opérationnel Exploitation Gare.

Comment et pourquoi nous sommes passés d'un COE à un COEG ?
Quels sont les acteurs et les missions d'un COEG ?
Comment se coordonne l'ensemble des différents acteurs  ?
Les outils à disposition ?",
    "Distanciel",
    1,
    "Pas d'instructeur",
    500,
    "2022-11-11",
    "2024-03-29"
  ),
    (
    "Digidoc Nomade", -- INFORMATIQUE
    "Grâce à ce rapide module de formation, découvrez ce qu'est Digidoc Nomade et comment le mettre en place.",
    "Distanciel",
    1,
    "Pas d'instructeur",
    500,
    "2021-11-11",
    "2024-03-29"
  ),
    (
    "SOLAR : Introduction à l’outil", -- INFORMATIQUE
    "Bienvenue dans le module « SOLAR : Introduction à l’outil» !

Ce module vous permettra de :

Découvrir le projet (enjeux, ambitions, planning, ...) et de prendre connaissance d’informations pratiques concernant l’outil",
    "Distanciel",
    1,
    "Pas d'instructeur",
    500,
    "2022-09-11",
    "2024-03-29"
  ),
    (
    "Climat-Énergie", -- ETHIQUE
    "Bienvenue dans le module Climat-Énergie.

 Ce module va vous permettre de :

prendre conscience des enjeux du dérèglement climatique,
découvrir les actions engagées par TGV-INTERCITES pour réduire ses consommations d’énergie et son bilan carbone,
identifier les bons réflexes à adopter à la maison et au travail pour réduire efficacement ses émissions de CO2",
    "Distanciel",
    3,
    "Pas d'instructeur",
    500,
    "2021-12-04",
    "2024-12-29"
  ),
    (
    "Concevoir une stratégie", -- MANAGEMENT
    "OBJECTIFS DE LA FORMATION :

concevoir les étapes d’une stratégie, développer une posture d’ouverture, appliquer une méthode de déploiement structurée  ",
    "Distanciel",
    2,
    "Pas d'instructeur",
    500,
    "2020-02-11",
    "2024-05-05"
  ),
    (
    "Adjoint.e Responsable des Ressources Humaines", -- RH
    "L'adjoint.e RH est en soutien à la Responsable des Ressources Humaines dans le déploiement et le pilotage local des politiques RH.

Il participe activement à la GPEC de l’établissement en anticipant les besoins et en développant des parcours professionnels.
Il renseigne les salariés sur les questions RH en étroite collaboration avec le Centre de Service Mutualisé RH (CSMRH).
Il remplace la RRH pendant ses absences.",
    "Présentiel",
    90, 
    "Carissa Garner",
    5,
    "2022-11-11",
    "2024-03-29"
  ),
    (
    "Opérateur / Opératrice Voie Géométrie", -- MAINTENANCE
    "La formation a pour but de former l'agent afin qu'il puisse effectuer les tâches suivantes : 
    réaliser principalement des reprises de Nivellement manuel avec son équipe, 
    agir sous la responsabilité du CEV de l'équipe Géométrie et /ou ATEN de l'équipe.",
    "Présentiel",
    30, 
    "Carissa Garner",
    15,
    "2021-11-11",
    "2022-12-29"
  );

INSERT INTO
  user_learning (user_id, learning_id, status, start_learning)
VALUES
  (4, 6, "pending", "2022-11-25"),
  (8, 1, "pending", "2022-11-25"),
  (5, 2, "pending", "2022-11-25"),
  (4, 5, "pending", "2022-11-25"),
  (4, 9, "pending", "2022-11-25"),
  (10, 6, "pending", "2022-11-25"),
  (9, 6, "pending", "2022-11-25"),
  (7, 6, "pending", "2022-11-25");

INSERT INTO
  learning_category (category_id, learning_id)
VALUES
 (1, 1),
 (2, 2),
 (4, 3),
 (6, 4),
 (3, 5),
 (3, 6),
 (6, 6),
 (5, 7),
 (6, 8),
 (1, 8),
 (1, 9),
 (6, 10),
 (1, 11),
 (6, 12),
 (2, 12),
 (6, 13),
 (2, 14),
 (6, 15),
 (1, 16),
 (1, 17),
 (2, 18),
 (6, 19),
 (4, 20),
 (5, 21);

INSERT INTO
  job_type_category (job_type_id, category_id)
VALUES
  (1, 1),
  (1, 2),
  (1, 3),
  (1, 6),
  (2, 1),
  (2, 2),
  (2, 3),
  (2, 6),
  (3, 1),
  (3, 2),
  (3, 3),
  (3, 6),
  (4, 1),
  (4, 2),
  (4, 5),
  (4, 6),
  (5, 1),
  (5, 2),
  (6, 1),
  (6, 2),
  (6, 4),
  (6, 6),
  (7, 1),
  (7, 2),
  (7, 6),
  (8, 1),
  (8, 2),
  (8, 6),
  (9, 1),
  (9, 2),
  (9, 3),
  (9, 5),
  (9, 6),
  (10, 1),
  (10, 2),
  (10, 6);

INSERT INTO
  job_type_learning (job_type_id, learning_id)
VALUES
 (1, 1),
 (1, 2),
 (1, 4),
 (1, 5),
 (1, 6),
 (1, 8),
 (1, 9),
 (1, 10),
 (1, 11),
 (1, 12),
 (1, 13),
 (1, 14),
 (1, 15),
 (1, 16),
 (1, 17),
 (1, 18),
 (1, 19),
 (2, 1),
 (2, 2),
 (2, 4),
 (2, 5),
 (2, 6),
 (2, 8),
 (2, 9),
 (2, 10),
 (2, 11),
 (2, 12),
 (2, 13),
 (2, 14),
 (2, 15),
 (2, 16),
 (2, 17),
 (2, 18),
 (2, 19),
 (3, 1),
 (3, 2),
 (3, 4),
 (3, 5),
 (3, 6),
 (3, 8),
 (3, 9),
 (3, 10),
 (3, 11),
 (3, 12),
 (3, 13),
 (3, 14),
 (3, 15),
 (3, 16),
 (3, 17),
 (3, 18),
 (3, 19),
 (4, 1),
 (4, 2),
 (4, 4),
 (4, 6),
 (4, 7),
 (4, 8),
 (4, 9),
 (4, 10),
 (4, 11),
 (4, 12),
 (4, 13),
 (4, 14),
 (4, 15),
 (4, 16),
 (4, 17),
 (4, 18),
 (4, 19),
 (4, 21),
 (5, 1),
 (5, 2),
 (5, 8),
 (5, 9),
 (5, 11),
 (5, 12),
 (5, 14),
 (5, 16),
 (5, 17),
 (5, 18),
 (6, 1),
 (6, 2),
 (6, 3),
 (6, 4),
 (6, 6),
 (6, 8),
 (6, 9),
 (6, 10),
 (6, 11),
 (6, 12),
 (6, 13),
 (6, 14),
 (6, 15),
 (6, 16),
 (6, 17),
 (6, 18),
 (6, 19),
 (6, 20),
 (7, 1),
 (7, 2),
 (7, 4),
 (7, 6),
 (7, 8),
 (7, 9),
 (7, 10),
 (7, 11),
 (7, 12),
 (7, 13),
 (7, 14),
 (7, 15),
 (7, 16),
 (7, 17),
 (7, 18),
 (7, 19),
 (8, 1),
 (8, 2),
 (8, 4),
 (8, 6),
 (8, 8),
 (8, 9),
 (8, 10),
 (8, 11),
 (8, 12),
 (8, 13),
 (8, 14),
 (8, 15),
 (8, 16),
 (8, 17),
 (8, 18),
 (8, 19),
 (9, 1),
 (9, 2),
 (9, 4),
 (9, 5),
 (9, 6),
 (9, 7),
 (9, 8),
 (9, 9),
 (9, 10),
 (9, 11),
 (9, 12),
 (9, 13),
 (9, 14),
 (9, 15),
 (9, 16),
 (9, 17),
 (9, 18),
 (9, 19), 
 (9, 21),
 (10, 1),
 (10, 2),
 (10, 4),
 (10, 6),
 (10, 8),
 (10, 9),
 (10, 10),
 (10, 11),
 (10, 12),
 (10, 13),
 (10, 14),
 (10, 15),
 (10, 16),
 (10, 17),
 (10, 18),
 (10, 19);

INSERT INTO
  learning_grade (grade_id, learning_id)
VALUES
  (1, 1),
  (1, 2),
  (1, 9),
  (1, 11),
  (1, 14),
  (1, 16),
  (1, 17),
  (1, 18),
  (2, 1),
  (2, 2),
  (2, 5),
  (2, 9),
  (2, 11),
  (2, 14),
  (2, 16),
  (2, 17),
  (2, 18),
  (2, 21),
  (3, 1),
  (3, 2),
  (3, 5),
  (3, 9),
  (3, 11),
  (3, 12),
  (3, 14),
  (3, 16),
  (3, 17),
  (3, 18),
  (3, 21),
  (4, 1),
  (4, 2),
  (4, 5),
  (4, 7),
  (4, 9),
  (4, 11),
  (4, 12),
  (4, 13),
  (4, 14),
  (4, 15),
  (4, 16),
  (4, 17),
  (4, 18),
  (4, 21),
  (5, 1),
  (5, 2),
  (5, 3),
  (5, 5),
  (5, 7),
  (5, 9),
  (5, 11),
  (5, 12),
  (5, 13),
  (5, 14),
  (5, 15),
  (5, 16),
  (5, 17),
  (5, 18),
  (5, 19),
  (5, 21),
  (6, 1),
  (6, 2),
  (6, 3),
  (6, 4),
  (6, 5),
  (6, 6),
  (6, 7),
  (6, 8),
  (6, 9),
  (6, 10),
  (6, 11),
  (6, 12),
  (6, 13),
  (6, 14),
  (6, 15),
  (6, 16),
  (6, 17),
  (6, 18),
  (6, 19),
  (6, 20),
  (6, 21),
  (7, 1),
  (7, 2),
  (7, 3),
  (7, 4),
  (7, 5),
  (7, 6),
  (7, 7),
  (7, 8),
  (7, 9),
  (7, 10),
  (7, 11),
  (7, 12),
  (7, 13),
  (7, 14),
  (7, 15),
  (7, 16),
  (7, 17),
  (7, 18),
  (7, 19),
  (7, 20),
  (7, 21),
  (8, 1),
  (8, 2),
  (8, 3),
  (8, 4),
  (8, 5),
  (8, 6),
  (8, 7),
  (8, 8),
  (8, 9),
  (8, 10),
  (8, 11),
  (8, 12),
  (8, 13),
  (8, 14),
  (8, 15),
  (8, 16),
  (8, 17),
  (8, 18),
  (8, 19),
  (8, 20),
  (8, 21);

