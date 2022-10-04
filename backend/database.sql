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

DROP TABLE IF EXISTS token_blacklist;

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
  email VARCHAR(255) NOT NULL,
  hashedPassword VARCHAR(255) NOT NULL,
  role VARCHAR(20) NOT NULL,
  genre VARCHAR(20) NOT NULL,
  avatar BLOB,
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

CREATE TABLE notification (
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  date DATE,
  PRIMARY KEY (id)
);

CREATE TABLE user_notification (
  id INT NOT NULL AUTO_INCREMENT,
  user_id INT NOT NULL,
  notification_id INT NOT NULL,
  status VARCHAR(50) NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (user_id) REFERENCES user(id),
  FOREIGN KEY (notification_id) REFERENCES notification(id)
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
  token VARCHAR(755) NOT NULL,
  PRIMARY KEY (token)
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

Pour vous, c'est plutôt positif, négatif ou les deux ? 

 La digitalisation apporte de nombreux avantages : 

- elle permet de fluidifier les process ; 
- d'organiser plus efficacement ses projets et ses journées ;
- de mieux communiquer avec son équipe malgré la distance
Mais aussi d’accroître largement les possibilités offertes aux collaborateurs de communiquer, de développer leurs compétences et d’évoluer! Bien accompagné, le numérique peut donc être un vrai vecteur de bien être au travail

Mais attention à ne pas se laisser dépasser par la multiplicité de ces usages ! 

Comment la transformation digitale impacte-t-elle le bien-être au travail ? 
De mon côté, quelles bonnes pratiques puis-je mettre en place pour préserver ma charge mentale digitale ?

Nous avons conçu ce parcours de formation pour répondre à la prise de conscience collective de ces problématiques. L'objectif est de vous aider à vous adapter à des modes de travail qui intègrent de plus en plus le numérique tout en préservant votre charge mentale digitale. C'est parti !

Ce parcours de formation contient :

 - Une introduction interactive
 - 4 vidéos courtes avec des quiz, des jeux, des bonnes pratiques téléchargeables
 A la fin de ce parcours, vous serez en mesure de :  

- Définir le concept de charge mentale digitale ;
- Réaliser un auto positionnement par rapport à son usage du numérique ;
- Evaluer son bien être numérique au travail ;
- Comprendre le rôle des outils numériques et leurs impacts sur la charge mentale digitale ;
- Mettre en place des bonnes pratiques numériques pour préserver sa charge mentale digitale ;
- Comprendre l'importance du droit à la déconnexion.",
 
    "Distanciel",
    20,
    "Pas d'instructeur",
    100,
    "2022-09-25",
    "2024-04-10"
  ),
  (
    "ProDIVERSITÉ, le jeu", -- ETHIQUE
    "ProDIVERSITÉ est un jeu pédagogique en ligne conçu par SNCF.

Son objectif est de sensibiliser et de former aux enjeux de la diversité de manière ludique et concrète.

Le jeu est constitué de sept séquences, reflétant sept critères de discrimination : religion, sexe, orientation sexuelle, origine, handicap, âge et appartenance syndicale .

Chacune des séquences est clôturée par un quiz. 
Deux parcours de jeux sont proposés : 
- celui-ci destiné à tous les salariés, traitant quatre critères de discrimination 
- un parcours spécifique aux managers accessible via ce lien.",
    "Distanciel",
    60,
    "Pas d'instructeur",
    115,
    "2022-11-13",
    "2023-10-3"
  ),
  (
    "Mieux comprendre la rémunération chez SNCF", -- RH
    "Approfondissez vos connaissances en rémunération !

Ce module vous permettra de :

- Connaître les enjeux et les composantes du package de rémunération
- Savoir parler de rémunération
- Valoriser le package de rémunération de SNCF",
    "Distanciel",
    30,
    "Pas d'instructeur",
    500,
    "2023-01-24",
    "2023-12-18"
  ),
  (
    "Manager de secteur", -- MANAGEMENT
    "Le manager de secteur (M2) a pour mission de diriger un secteur gares. Il met en œuvre les orientations stratégiques de l’Établissement, en lien avec le contrat Île-de-France Mobilités, pour satisfaire les clients et améliorer la qualité de service sur son secteur (accueil, ventes, gestion de site et lutte anti-fraude). Il assure l’engagement de ses équipes et la sécurité des clients, des agents et des prestataires.

Il manage et anime une équipe composée de 1 ou 2 Adjoints (M2A), 1 ou 2 Référents Animation et Vie des Gares (RAVG) et de plusieurs chefs d’équipe (M1).",
    "Présentiel",
    4, -- 4 mois
    "Pas d'instructeur",
    5,
    "2023-01-24",
    "2023-06-18"
  ),
  (
    "Agent de Manœuvre Logistique", -- CIRCULATION
    "La formation a pour but de former l'agent sur ces différentes activités : 
- Se présente au GEOPS à chaque prise de service et prend connaissance des
conditions de circulations (travaux,…) sur le site.
- Annonce chaque manoeuvre au COM et respecte les règles de communication.
- Réalise les déplacements des engins sur le site.
- Remplit les réservoirs de combustibles, complète les sablières, huile et liquide de
refroidissement.
- Participe à la mise en place et à la sortie des engins pour la maintenance.
- Réalise les mises en UM
- Réalise les mises en véhicule
- Réalise les essais de frein
- Réalise le relevé des bandes graphiques et des enregistrements ATESS
- Participe au nettoyage et graissage des aiguilles // Protection des graisseurs
- Monte, démonte et range l'attelage de secours (si nécessaire).
- Participe au déploiement de la démarche d'amélioration continue de l'établissement.
- Prend connaissance des différentes notes de service, REX, AT et autres document
mis à sa disposition dans le classeur présent à la feuille.
- Participe aux points 5'
- A connaissance des risques liés à son poste de travail, applique les règles de
sécurité et porte les « E.P.I. »
- Remonte les incidents, accidents, anomalies et toutes informations utiles à son DPX
ou au GEOPS.",
    "Présentiel",
    2, -- 2 mois
    "Roary Leonard",
    50,
    "2022-06-10",
    "2023-01-22"
  ),
  (
    "DPX traction", --  CIRCULATION ET MANAGEMENT
    "- Management d'une équipe de conducteurs(trices)
- Veille et controle
- Audits internes/ externes
- Analyse des évènements/ enquêtes
- Management de la documentation sécurité
- SST
- Suivi ressources effectuant des tâches de sécurité
- Management des situations perturbées et des urgences
- Missions reprises dans l'annexe DC4 de l'EP TER OC 20001
- Conducteur occasionnel",
    "Présentiel",
    6, -- 6 mois
    "Calista Hardy",
    10,
    "2022-10-4",
    "2023-04-18"
  ),
  (
    "Surveillant de travaux maintenance", -- MAINTENANCE
    "Appuie le conducteur de travaux sur le terrain : prépare les chantiers, prend des mesures, fait les marquages terrain, fait des visites terrain entreprises…
    La formation a pour but de former l'agent afin qu'il puisse exercer ces activités : 
- Réaliser la préparation opérationnelle des chantiers : préparer les opérations de remplacement de ½ ferrures, cœurs, libérations, marquages divers
- Faire les demandes de matières
- Réceptionner les approvisionnements des chantiers concernés (matières, en-gins…)
- Diffuser et commenter les informations d'organisation à l'agent en charge du chantier (ex : commentaire de CTX) en remplacement du conducteur de travaux
- Assurer une présence sur les chantiers qui lui sont confiés si besoin
- Assurer si nécessaire des missions opérationnelles ou sécurité sur les chantiers : RPTx, HMT, surveillant travaux, agent d'activité…",
    "Présentiel",
    1, -- 1 mois
    "Abdul Kirkland",
    25,
    "2022-05-19",
    "2023-12-14"
  ),
  (
    "Chef de projet digital et SI", -- MANAGEMENT ET INFORMATIQUE
    "Les domaines d'activité des projets sont très variés :


- Gestion Commerciale, portail client : dématérialisation des commandes, prévision de plan de transport, traçabilité des livraisons, outil de relation client et commerciaux
- Production ferroviaire/Optimisation de plan de transport 

- Applications de gestion pour les fonctions Finance, Ressources Humaines
- Décisionnel, Outil de pilotage de l'entreprise
- Innovation : digitalisation, mobilité, big data, dématérialisation, objets connectés,

 


Les projets SI sont au coeur de la transformation de l'entreprise.

Le chef de projet est au coeur des relations internes stratégiques et opérationnelles : directeurs, les métiers opérationnels FRET et fonctions support, les unités et plateformes ferroviaires et les partenaires technologiques.",
    "Présentiel",
    4, -- 4 mois
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
    20,
    "Pas d'instructeur",
    500,
    "2021-12-1",
    "2024-01-7"
  ),
  (
    "Excellence SST Manager", -- MANAGEMENT
    "Nous vous proposons cinq modules de 20 à 30 minutes  chacun  pour vous familiariser avec les notions de base et les procédures en matières de management de la Santé Sécurité au Travail (SST) :

1. La culture sécurité  de l'entreprise, ses ambitions et ses méthodes 
2. Les obligations légales
3. La gestion d'un accident du travail pour réparer et prévenir
4. Les actions à mettre en place pour évaluer et réduire les risques
5. Le management de l'excellence pour la SST",
    "Distanciel",
    90,
    "Pas d'instructeur",
    500,
    "2023-05-20",
    "2023-11-22"
  ),
  (
    "4 conseils pour un télétravail efficace", -- INFORMATIQUE
    "Cette vidéo vous présente 4 conseils pour un télétravail efficace avec un lien vers le site dédié aux services digitaux.",
    "Distanciel",
    10,
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
La formation vous permet de répondre à ces questions, en trois chapitres. C’est court, rythmé, ludique, avec un cas pratique et des quiz !

Si vous êtes déjà à l'aise avec certaines notions, gagnez du temps et allez directement au chapitre qui vous intéresse :

 

Chapitre 1 - Handicap et égalité des chances

- Représentations et stéréotypes courants

- Le handicap, de quoi parle-t-on ?

- Egalité des chances et compensation du handicap  

 

Chapitre 2 - Une personne en situation de handicap arrive dans mon équipe, comment l'accueillir ?

- L’entretien d’intégration ou comment fixer les règles du jeu

- La communication auprès du collectif de travail

- Cas pratique : accueillir Stéphanie

 

Chapitre 3 - Manager au quotidien

- Le suivi managérial au quotidien

- Le cas du salarié qui abuse de son handicap

- L’ouverture au maintien dans l’emploi

 

N'oubliez pas de valider votre formation avec le quiz final.

Vous pourrez aussi télécharger l'annuaire des correspondants handicap et emploi.

 

Bonne formation !",
    "Distanciel",
    60,
    "Pas d'instructeur",
    500,
    "2022-03-7",
    "2023-12-13"
  ),
  (
    "Osez décider... même dans l'incertitude", -- MANAGEMENT
    "Les objectifs de la formation :

- Définir les composantes de la décision 

- Agir même dans un monde incertain 

- Accompagner sa décision ",
    "Distanciel",
    45,
    "Pas d'instructeur",
    500,
    "2022-06-20",
    "2023-12-8"
  ),
  (
    "Travailler ensemble sans préjugés", -- ETHIQUE
    "Les préjugés sont un obstacle puissant au vivre ensemble. Ils peuvent créer des situations de conflit, de mal-être et d’exclusion.

 Ce module a pour objectif de permettre, grâce à des cas concrets illustrés ou filmés, de détecter l’expression d’un préjugé et de savoir y réagir efficacement.

Il invite à la réflexion en faisant écho à des situations déjà vécues, anodines au premier abord. Il montre l'impact d’un préjugé en faisant connaitre les différents points de vue et notamment celui des personnes ciblées. Par l'expérience virtuelle de réactions plus ou moins efficaces face à un préjugé, il aide à réagir en situation réelle.

Ce module s’adresse à tous les salariés SNCF, y compris les personnes qui ne sont pas ciblées par les préjugés et qui peuvent être des alliés essentiels pour favoriser l'inclusion.

La durée du module est en moyenne de 25 minutes. Il est entièrement sous-titré et une version accessible aux personnes malvoyantes, basée sur une navigation au clavier, est proposée.",
    "Distanciel",
    25,
    "Pas d'instructeur",
    500,
    "2021-10-7",
    "2024-02-17"
  ),
  (
    "Le fonctionnement du COEG : acteurs et missions", -- MANAGEMENT
    "Dans ce parcours, vous allez découvrir ce qu'est un Centre Opérationnel Exploitation Gare.

- Comment et pourquoi nous sommes passés d'un COE à un COEG.
- Quels sont les acteurs et les missions d'un COEG.
- Comment se coordonne l'ensemble des différents acteurs.
- Les outils à disposition.

Vous testerez ensuite vos connaissances puis vous nous donnerez votre avis sur le parcours.",
    "Distanciel",
    30,
    "Pas d'instructeur",
    500,
    "2022-11-11",
    "2024-03-29"
  ),
    (
    "Digidoc Nomade", -- INFORMATIQUE
    "Grâce à ce rapide module de formation, découvrez ce qu'est Digidoc Nomade et comment le mettre en place.",
    "Distanciel",
    10,
    "Pas d'instructeur",
    500,
    "2021-11-11",
    "2024-03-29"
  ),
    (
    "SOLAR : Introduction à l’outil", -- INFORMATIQUE
    "Bienvenue dans le module « SOLAR : Introduction à l’outil» !

Ce module vous permettra de :

- Découvrir le projet : enjeux, ambitions, planning
- Prendre connaissance d’informations pratiques concernant l’outil",
    "Distanciel",
    15,
    "Pas d'instructeur",
    500,
    "2022-09-11",
    "2024-03-29"
  ),
    (
    "Climat-Énergie", -- ETHIQUE
    "Bienvenue dans le module Climat-Énergie.

 Ce module va vous permettre de :

- Prendre conscience des enjeux du dérèglement climatique
- Découvrir les actions engagées par TGV-INTERCITES pour réduire ses consommations d’énergie et son bilan carbone
- Identifier les bons réflexes à adopter à la maison et au travail pour réduire efficacement ses émissions de CO2",
    "Distanciel",
    60,
    "Pas d'instructeur",
    500,
    "2021-12-04",
    "2024-12-29"
  ),
    (
    "Concevoir une stratégie", -- MANAGEMENT
    "OBJECTIFS DE LA FORMATION :

- concevoir les étapes d’une stratégie 

- développer une posture d’ouverture 

- appliquer une méthode de déploiement structurée  ",
    "Distanciel",
    20,
    "Pas d'instructeur",
    500,
    "2020-02-11",
    "2024-05-05"
  ),
    (
    "Adjoint.e Responsable des Ressources Humaines", -- RH
    "L'adjoint.e RH est en soutien à la Responsable des Ressources Humaines dans le déploiement et le pilotage local des politiques RH sur le périmètre de l’établissement NOUVELLE-AQUITAINE.

Il participe activement à la GPEC de l’établissement en anticipant les besoins et en développant des parcours professionnels.
Il renseigne les salariés sur les questions RH en étroite collaboration avec le Centre de Service Mutualisé RH (CSMRH).
Il remplace la RRH pendant ses absences.",
    "Présentiel",
    3, -- 3 mois
    "Carissa Garner",
    5,
    "2022-11-11",
    "2024-03-29"
  ),
    (
    "Opérateur / Opératrice Voie Géométrie", -- MAINTENANCE
    "La formation a pour but de former l'agent afin qu'il puisse effectuer les tâches suivantes : 
    - Réalise principalement des reprises de Nivellement manuel avec son équipe
    - Est sous la responsabilité du CEV de l'équipe Géométrie et /ou ATEN de l'équipe.",
    "Présentiel",
    1, -- 1 mois
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

INSERT INTO
  learning_category (category_id, learning_id)
VALUES
 (1, 1),
 (3, 2),
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

-- INSERT INTO
--   job_type_learning (job_type_id, learning_id)
-- VALUES
--   (1, 15),
--   (2, 14),
--   (3, 13),
--   (4, 12),
--   (5, 11),
--   (6, 10),
--   (7, 9),
--   (8, 8),
--   (9, 7),
--   (10, 6),
--   (1, 5),
--   (2, 4),
--   (3, 3),
--   (4, 2),
--   (5, 1);

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

INSERT INTO
  user_notification (status, user_id, notification_id)
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