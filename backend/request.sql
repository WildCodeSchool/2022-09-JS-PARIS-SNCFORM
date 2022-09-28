
  -- list of category
SELECT * FROM category
ORDER BY category.title;

-- list one categorie
SELECT * FROM category
WHERE category.title = 'Informatique';

-- list of all Formations & all categories
 --*title.learning & title.category
SELECT category.title AS title_category, learning.title AS title_learning  
FROM learning 
INNER JOIN learning_category ON learning.id = learning_id 
RIGHT JOIN category ON category.id = category_id
ORDER BY category.title;

-- list of all categories & all formations 
 --*by title_formation,type,duration,instructor,capacity_learners,start_registration,end_registration & title_category
SELECT category.title AS title_category, learning.title AS title_learning, 
type, duration, instructor, capacity_learner AS nbr_learn, start_registration, end_registration 
FROM learning 
INNER JOIN learning_category ON learning.id = learning_id 
RIGHT JOIN category ON category.id = category_id
ORDER BY category.title;


--list of all formations & one category 'Informatique'
SELECT category.title AS title_category, learning.title AS title_learning,
type, duration, instructor, capacity_learner,start_registration, end_registration  
FROM learning
INNER JOIN learning_category ON learning.id = learning_category.learning_id
RIGHT JOIN category ON category.id = learning_category.category_id 
WHERE category.title = 'Informatique';

-- *securite
SELECT learning.title AS title_learning,                                           
type, duration, instructor, capacity_learner,start_registration, end_registration, category.title AS title_category
FROM learning
INNER JOIN learning_category ON learning.id = learning_category.learning_id
RIGHT JOIN category ON category.id = learning_category.category_id
WHERE category.title = 'Securite';

-- *Ethique
SELECT learning.title AS title_learning,
type, duration, instructor, capacity_learner,start_registration, end_registration, category.title AS title_category
FROM learning
INNER JOIN learning_category ON learning.id = learning_category.learning_id
RIGHT JOIN category ON category.id = learning_category.category_id
WHERE category.title = 'Ethique';
-- *Commercial
 SELECT learning.title AS title_learning,
 type, duration, instructor, capacity_learner,start_registration, end_registration, category.title AS title_category
FROM learning
INNER JOIN learning_category ON learning.id = learning_category.learning_id
RIGHT JOIN category ON category.id = learning_category.category_id
WHERE category.title = 'Commercial';
-- *Traction
SELECT learning.title AS title_learning,
type, duration, instructor, capacity_learner,start_registration, end_registration, category.title AS title_category
FROM learning
INNER JOIN learning_category ON learning.id = learning_category.learning_id
RIGHT JOIN category ON category.id = learning_category.category_id
WHERE category.title = 'Traction';
-- *Ressources Humaines
 SELECT learning.title AS title_learning,
 type, duration, instructor, capacity_learner,start_registration, end_registration, category.title AS title_category
FROM learning
INNER JOIN learning_category ON learning.id = learning_category.learning_id
RIGHT JOIN category ON category.id = learning_category.category_id
WHERE category.title = 'Ressources Humaines';
-- *Maintenance
SELECT learning.title AS title_learning,
type, duration, instructor, capacity_learner,start_registration, end_registration, category.title AS title_category
FROM learning
INNER JOIN learning_category ON learning.id = learning_category.learning_id
RIGHT JOIN category ON category.id = learning_category.category_id
WHERE category.title = 'Maintenance';
-- *Comptabilite
SELECT learning.title AS title_learning,
type, duration, instructor, capacity_learner,start_registration, end_registration, category.title AS title_category
FROM learning
INNER JOIN learning_category ON learning.id = learning_category.learning_id
RIGHT JOIN category ON category.id = learning_category.category_id
WHERE category.title = 'Comptabilite';
-- *Logistique
SELECT learning.title AS title_learning,
type, duration, instructor, capacity_learner,start_registration, end_registration, category.title AS title_category
FROM learning
INNER JOIN learning_category ON learning.id = learning_category.learning_id
RIGHT JOIN category ON category.id = learning_category.category_id
WHERE category.title = 'Logistique';
-- *Immobilier
SELECT learning.title AS title_learning,
type, duration, instructor, capacity_learner,start_registration, end_registration, category.title AS title_category
FROM learning
INNER JOIN learning_category ON learning.id = learning_category.learning_id
RIGHT JOIN category ON category.id = learning_category.category_id
WHERE category.title = 'Immobilier';

-- List of all formations & all grades
SELECT learning.title AS title_learning,
grade.name AS number_of_grade
FROM learning
INNER JOIN learning_grade ON learning.id = learning_grade.learning_id
LEFT JOIN grade ON grade.id = learning_grade.grade_id;

-- List of all formations & all categories & all job_type & all grades
SELECT job_type.name AS job, grade.name AS grade, learning.title AS title_learning, category.title AS category 
FROM learning
INNER JOIN job_type_learning ON job_type_learning.learning_id = learning.id
INNER JOIN learning_grade ON learning_grade.learning_id = learning.id
INNER JOIN learning_category ON learning_category.learning_id = learning.id
WHERE job_type_learning.job_type_id BETWEEN '1' AND '10'
AND learning_grade.grade_id BETWEEN '1' AND '8'
AND learning_category.category_id BETWEEN '1' AND '10'
ORDER BY learning.title;

-- list of all formations for one job_type, one grade, one category
SELECT learning.* 
FROM learning
INNER JOIN job_type_learning ON job_type_learning.learning_id = learning.id
INNER JOIN learning_grade ON learning_grade.learning_id = learning.id
INNER JOIN learning_category ON learning_category.learning_id = learning.id
WHERE job_type_learning.job_type_id = '10'
AND learning_grade.grade_id = '7'
AND learning_category.category_id = '1'
ORDER BY learning.title;


-- list of formations by all categories & all grades
SELECT learning.title AS title_learning, type, duration, instructor, capacity_learner,start_registration, end_registration, category.title AS title_category, grade.name AS number_of_grade
FROM learning
INNER JOIN learning_grade ON learning.id = learning_grade.learning_id
LEFT JOIN grade ON grade.id = learning_grade.grade_id
INNER JOIN learning_category ON learning.id = learning_category.learning_id 
RIGHT JOIN category ON category.id = category_id;

-- list of all formations one category & all grades
SELECT learning.title AS title_learning, type, duration, instructor, capacity_learner,start_registration, end_registration, category.title AS title_category, grade.name AS number_of_grade
FROM learning
INNER JOIN learning_grade ON learning.id = learning_grade.learning_id
LEFT JOIN grade ON grade.id = learning_grade.grade_id
INNER JOIN learning_category ON learning.id = learning_category.learning_id 
RIGHT JOIN category ON category.id = category_id
WHERE category.title = 'Informatique';

-- list of all formations one category one grade
SELECT learning.title AS title_learning, type, duration, instructor, capacity_learner,start_registration, end_registration, category.title AS title_category, grade.name AS number_of_grade
FROM learning
INNER JOIN learning_grade ON learning.id = learning_grade.learning_id
LEFT JOIN grade ON grade.id = learning_grade.grade_id
INNER JOIN learning_category ON learning.id = learning_category.learning_id 
RIGHT JOIN category ON category.id = category_id
WHERE category.title = 'Informatique' AND grade.name = '2';

-- List of all formations all categories by grade 1
SELECT learning.title AS title_learning, type, duration, instructor, capacity_learner,start_registration, end_registration, category.title AS title_category, grade.name AS number_of_grade
FROM learning
INNER JOIN learning_grade ON learning.id = learning_grade.learning_id
LEFT JOIN grade ON grade.id = learning_grade.grade_id
INNER JOIN learning_category ON learning.id = learning_category.learning_id 
RIGHT JOIN category ON category.id = category_id
WHERE grade.name = '1';

-- *2

-- *3

-- *4

-- *5

-- *6

-- *7

-- *8


-- List of formations by category 'Informatique' by grade 1
SELECT learning.title AS title_learning, type, duration, instructor, capacity_learner,start_registration, end_registration, category.title AS title_category, grade.name AS number_of_grade
FROM learning
INNER JOIN learning_grade ON learning.id = learning_grade.learning_id
LEFT JOIN grade ON grade.id = learning_grade.grade_id
INNER JOIN learning_category ON learning.id = learning_category.learning_id 
RIGHT JOIN category ON category.id = category_id
WHERE grade.name = '1'
WHERE category.title = 'Informatique';


--**List of formations by category informatique & grades**
   -- *infomartique grade 1
   SELECT learning.title AS title_learning, 
   type, duration, instructor, capacity_learner,start_registration, end_registration, category.title AS title_category, grade.name AS number_of_grade 
   FROM learning 
   INNER JOIN learning_grade ON learning.id = learning_grade.learning_id 
   LEFT JOIN grade ON grade.id = learning_grade.grade_id 
   INNER JOIN learning_category ON learning.id = learning_category.learning_id  
   RIGHT JOIN category ON category.id = category_id 
   WHERE category.title = 'Informatique' AND grade.name = '1';

     -- *infomartique grade 2
   SELECT learning.title AS title_learning, 
   type, duration, instructor, capacity_learner,start_registration, end_registration, category.title AS title_category, grade.name AS number_of_grade 
   FROM learning 
   INNER JOIN learning_grade ON learning.id = learning_grade.learning_id 
   LEFT JOIN grade ON grade.id = learning_grade.grade_id 
   INNER JOIN learning_category ON learning.id = learning_category.learning_id  
   RIGHT JOIN category ON category.id = category_id 
   WHERE category.title = 'Informatique' AND grade.name = '2';
     -- *infomartique grade 3

     -- *infomartique grade 4

     -- *infomartique grade 5

     -- *infomartique grade 6

     -- *infomartique grade 7

     -- *infomartique grade 8

-- list of all formations by all job_type
SELECT learning.title AS title_learning, 
type, duration, instructor, capacity_learner,start_registration, end_registration, category.title AS title_category 
FROM learning 
INNER JOIN learning_category ON learning.id = learning_id 
RIGHT JOIN category ON category.id = category_id
INNER JOIN job_type_category ON job_type_category.job_type_id =job_type.id 
INNER JOIN job_type ON job_type.id = user.job_type_id
INNER JOIN user ON user.job_type_id = job_type.id;

-- list of formations by job_type


-- list of all formations & one job_type & grades

-- list of all users &- all job-type & all grades
SELECT first_name, last_name, cp_number, job_type.name AS job, grade.name AS number_of_grade
 FROM user
 LEFT JOIN job_type ON job_type.id = user.job_type_id
 INNER JOIN grade ON grade.id = user.grade_id;

-- list of all users & one job_type & all grades
SELECT first_name, last_name, cp_number, job_type.name AS job, grade.name AS number_of_grade  
FROM user 
LEFT JOIN job_type ON job_type.id = user.job_type_id 
INNER JOIN grade ON grade.id = user.grade_id 
WHERE job_type.name = 'Production ferroviaire';

-- list of all users & one job_type & one grade
SELECT first_name, last_name, cp_number, job_type.name AS job, grade.name AS number_of_grade  
FROM user 
LEFT JOIN job_type ON job_type.id = user.job_type_id 
INNER JOIN grade ON grade.id = user.grade_id 
WHERE job_type.name = 'Production ferroviaire' AND grade.name = '7';

 -- *Conduite et manoeuvre grade 1
 SELECT first_name, last_name, cp_number, job_type.name AS job, grade.name AS number_of_grade 
  FROM user 
  LEFT JOIN job_type ON job_type.id = user.job_type_id 
  INNER JOIN grade ON grade.id = user.grade_id
  WHERE job_type.name = 'Conduite et manoeuvre' AND grade.name = '1';

  -- list of one user & one job_type & one grade
  SELECT first_name, last_name, cp_number, job_type.name AS job, grade.name AS number_of_grade   
  FROM user  
  LEFT JOIN job_type ON job_type.id = user.job_type_id  
  INNER JOIN grade ON grade.id = user.grade_id  
  WHERE user.first_name = 'Baxter';

-- list of all user all formations all job-type all grades
SELECT user.first_name, user.last_name, learning.title AS title_learning, learning.type, learning.duration, learning.instructor, learning.capacity_learner, learning.start_registration, learning.end_registration, job_type.name AS job, grade.name AS grade, learning.id    
FROM user 
INNER JOIN user_learning ON user_learning.user_id = user.id
INNER JOIN job_type ON job_type.id = user.job_type_id 
INNER JOIN grade ON grade.id = user.grade_id  
RIGHT JOIN learning ON learning.id = user_learning.learning_id
ORDER BY user.first_name;

-- list all formations & one user (for id 4)
SELECT user.first_name, user.last_name, learning.title AS title_learning, learning.type, 
learning.duration, learning.instructor, learning.capacity_learner, learning.start_registration, 
learning.end_registration, job_type.name AS job, grade.name AS grade   
FROM user 
INNER JOIN user_learning ON user_learning.user_id = user.id
INNER JOIN job_type ON job_type.id = user.job_type_id 
INNER JOIN grade ON grade.id = user.grade_id  
RIGHT JOIN learning ON learning.id = user_learning.learning_id
INNER JOIN job_type_learning ON job_type_learning.job_type_id = job_type.id
WHERE user.id = '4';



-- list of all formations one user 'Shellie"  (all job-type all grades)
SELECT user.first_name, user.last_name, learning.title AS title_learning, 
learning.type, learning.duration, learning.instructor, learning.capacity_learner, 
learning.start_registration, learning.end_registration, job_type.name AS job, grade.name AS grade, 
user.id AS id_u,user_learning.user_id AS id_u_l     
FROM user  
INNER JOIN user_learning ON user_learning.user_id = user.id 
INNER JOIN job_type ON job_type.id = user.job_type_id  
INNER JOIN grade ON grade.id = user.grade_id  
INNER JOIN learning ON learning.id = user_learning.learning_id 
WHERE first_name = 'Shellie';



--  SELECT user.first_name, user.last_name, learning.title AS title_learning, 
--  learning.type, learning.duration, learning.instructor, learning.capacity_learner, learning.start_registration, 
--  learning.end_registration, job_type.name AS job, grade.name AS grade 
--  FROM user  
--  INNER JOIN user_learning ON user_learning.user_id = user.id 
--  INNER JOIN job_type ON job_type.id = user.job_type_id  
--  INNER JOIN grade ON grade.id = user.grade_id  
--  INNER JOIN learning ON learning.id = learning_grade.learning_id 
--  INNER JOIN learning_grade ON learning.id =learning_grade.learning_id 
--  ORDER BY user.first_name;

-- list of all users & one formation & all job-type & all grades
-- SELECT user.first_name, user.last_name, learning.title AS title_learning, learning.type, learning.duration, learning.instructor, learning.capacity_learner, learning.start_registration, learning.end_registration, job_type.name AS job, grade.name AS grade  
-- FROM user 
-- INNER JOIN user_learning 
-- INNER JOIN job_type ON job_type.id = user.job_type_id 
-- INNER JOIN grade ON grade.id = user.grade_id  
-- RIGHT JOIN learning ON learning.id = user_learning.learning_id 
-- WHERE learning.title = 'aliquet. Proin velit.';

-- list all user all formations for one job_type all grades
-- SELECT user.first_name, user.last_name, learning.title AS title_learning, learning.type, learning.duration, learning.instructor, learning.capacity_learner, learning.start_registration, learning.end_registration, job_type.name AS job, grade.name AS grade  
-- FROM user 
-- INNER JOIN user_learning 
-- INNER JOIN job_type ON job_type.id = user.job_type_id 
-- INNER JOIN grade ON grade.id = user.grade_id  
-- RIGHT JOIN learning ON learning.id = user_learning.learning_id 
-- WHERE job_type.name = 'Commercial';

-- list all user all formations for one job_type and one grade
-- SELECT user.first_name, user.last_name, learning.title AS title_learning, learning.type, learning.duration, learning.instructor, learning.capacity_learner, learning.start_registration, learning.end_registration, job_type.name AS job, grade.name AS grade  
-- FROM user 
-- INNER JOIN user_learning 
-- INNER JOIN job_type ON job_type.id = user.job_type_id 
-- INNER JOIN grade ON grade.id = user.grade_id  
-- RIGHT JOIN learning ON learning.id = user_learning.learning_id 
-- WHERE job_type.name = 'Commercial' AND grade.name = '2';


-- list one user one job_type one grade all formations
 SELECT user.first_name, user.last_name, learning.title AS title_learning, learning.type, learning.duration, learning.instructor, learning.capacity_learner, learning.start_registration, learning.end_registration, job_type.name AS job, grade.name AS grade   
 FROM user  
 INNER JOIN user_learning ON user_learning.user_id = user.id
 INNER JOIN job_type ON job_type.id = user.job_type_id  
 INNER JOIN grade ON grade.id = user.grade_id   
 INNER JOIN learning ON learning.id = user_learning.learning_id  
 WHERE user.first_name = 'Baxter';

 SELECT user.first_name, user.last_name, user.cp_number, job_type.name AS job, grade.name AS number_of_grade, learning.title AS title_learning, category.title AS title_learning  
 FROM user  
 INNER JOIN user_learning ON user_learning.user_id = user.id
 INNER JOIN learning ON learning.id = user_learning.learning_id 
 INNER JOIN grade ON grade.id = user.grade_id 
 INNER JOIN learning_grade ON learning_grade.learning_id = learning.id
 INNER JOIN job_type ON job_type.id = user.job_type_id
 INNER JOIN job_type_learning ON job_type_learning.learning_id = learning.id
 INNER JOIN job_type_category ON job_type_category.job_type_id = job_type.id
 INNER JOIN category ON category.id = job_type_category.category_id
 INNER JOIN learning_category ON learning_category.category_id = category.id
--  WHERE job_type_learning.job_type_id = 10 AND learning_grade.grade_id = 7; 

-- list all formations & one user 
 SELECT user.first_name, user.last_name, user.cp_number, job_type.name AS job, grade.name AS number_of_grade, learning.title AS title_learning, category.title AS title_category
 FROM learning  
 INNER JOIN user_learning ON user_learning.learning_id = learning.id
 INNER JOIN user ON user.id = user_learning.user_id
 INNER JOIN grade ON grade.id = user.grade_id 
 INNER JOIN learning_grade ON learning_grade.learning_id = learning.id
 INNER JOIN job_type ON job_type.id = user.job_type_id
 INNER JOIN job_type_learning ON job_type_learning.learning_id = learning.id
 INNER JOIN job_type_category ON job_type_category.job_type_id = job_type.id
 INNER JOIN category ON category.id = job_type_category.category_id
 INNER JOIN learning_category ON learning_category.category_id = category.id
 WHERE user.id = '4' AND job_type.id = 10 AND grade.id = '7';

-- list all formations for one user this job_type and this grade all categories
-- SELECT learning.*
--  FROM learning
--  INNER JOIN user_learning ON user_learning.learning_id = learning.id
--  INNER JOIN job_type_learning ON job_type_learning.learning_id = learning.id
--  INNER JOIN learning_grade ON learning_grade.learning_id = learning.id
--  INNER JOIN learning_category ON learning_category.learning_id = learning.id
--  WHERE user_learning.user_id = 'user.id'
--  AND job_type_learning.job_type_id = 'job_type.id'
--  AND learning_grade.grade_id = 'grade.id'
--  ORDER BY learning.title;


SELECT learning.title
 FROM learning
 INNER JOIN user_learning ON user_learning.learning_id = learning.id
 INNER JOIN job_type_learning ON job_type_learning.learning_id = learning.id
 INNER JOIN learning_grade ON learning_grade.learning_id = learning.id
 INNER JOIN learning_category ON learning_category.learning_id = learning.id
 WHERE user_learning.user_id = '4'
 AND job_type_learning.job_type_id = '10'
 AND learning_grade.grade_id = '7'
 AND learning_category.category_id = ''
 ORDER BY learning.title;
 --(learning_id = '6')




-- nbr of users group by each formations
-- SELECT learning.title AS title_learning, COUNT(user.first-name) AS nb_learners
--  FROM learning
--  INNER JOIN user_learning ON learning.id = user_learning.learning_id
--  INNER JOIN user ON user_id = user.id
--  GROUP BY user_id;
 




 SELECT user.first_name, user.last_name, learning.title AS title_learning, learning.type, learning.duration, 
 learning.instructor, learning.capacity_learner, learning.start_registration, learning.end_registration, job_type.name AS job, grade.name AS grade
  FROM user
  INNER JOIN user_learning
  INNER JOIN job_type ON job_type.id = user.job_type_id
  INNER JOIN grade ON grade.id = user.grade_id
  RIGHT JOIN learning ON learning.id = user_learning.learning_id
  ORDER BY user.first_name;

-- list all formations & one user & one job-type & grade
-- SELECT * FROM learning_grade
-- INNER JOIN learning  ON learning_grade.learning_id = learning.id
-- INNER JOIN learning_category ON learning.id = learning_category.learning_id
-- INNER JOIN category ON learning_category.category_id = category.id
-- INNER JOIN job_type_category ON category.id = job_type_category.category_id
-- INNER JOIN job_type ON job_type_category.id = job_type.id
-- WHERE learning_grade.grade_id = user.grade_id AND Job_type.id = user.job_type_id;
 ||
 ||
SELECT * FROM learning
INNER JOIN learning  ON learning_grade.learning_id = learning.id
INNER JOIN job_type ON job_type_category.id = job_type.id
WHERE learning_grade.grade_id = 7 AND Job_type.id = 10;


-- list of all formations 
-- SELECT learning.* FROM learning
-- INNER JOIN job_type_learning 
-- ON job_type_learning.learning_id = learning.id
-- INNER JOIN learning_grade
-- ON learning_grade.learning_id = learning.id
-- where job_type_learning.job_type_id = job_type.id AND learning_grade.grade_id = grade.id;

-- list of all formations & one job_type & one grade
 -- *model:
-- SELECT learning.* FROM learning
-- INNER JOIN job_type_learning 
-- ON job_type_learning.learning_id = learning.id
-- INNER JOIN learning_grade
-- ON learning_grade.learning_id = learning.id
-- where job_type_learning.job_type_id = hob_type.id AND learning_grade.grade_id = grade.id;

 -- * list of all formations & job_type 'commercial' & grade '2' :
SELECT learning.* FROM learning
INNER JOIN job_type_learning 
ON job_type_learning.learning_id = learning.id
INNER JOIN learning_grade
ON learning_grade.learning_id = learning.id
WHERE job_type_learning.job_type_id = '2' AND learning_grade.grade_id = '2';

-- list of formations for one job_type & one grade
SELECT learning.title



UPDATE learning_grade
SET learning_id = '6'
WHERE grade_id = 7;