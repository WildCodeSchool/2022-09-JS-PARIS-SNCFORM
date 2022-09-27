-- En titre l'aboutissement de la requete
--   modele avec les champs à remplir 
--   exemple avec les champs visés remplient 

-- List of all formations & all categories & all job_type & all grades
SELECT job_type.name AS job, grade.name AS grade, learning.title AS title_learning, category.title AS category 
FROM learning
INNER JOIN job_type_learning ON job_type_learning.learning_id = learning.id
INNER JOIN learning_grade ON learning_grade.learning_id = learning.id
INNER JOIN learning_category ON learning_category.learning_id = learning.id
WHERE job_type_learning.job_type_id BETWEEN 'job_type.id' AND 'job_type.id'
AND learning_grade.grade_id BETWEEN 'grade.id' AND 'grade.id'
AND learning_category.category_id BETWEEN 'category.id' AND 'category.id'
ORDER BY learning.title;

SELECT learning.* 
FROM learning
INNER JOIN job_type_learning ON job_type_learning.learning_id = learning.id
INNER JOIN learning_grade ON learning_grade.learning_id = learning.id
INNER JOIN learning_category ON learning_category.learning_id = learning.id
WHERE job_type_learning.job_type_id BETWEEN '1' AND '10'
AND learning_grade.grade_id BETWEEN '1' AND '8'
AND learning_category.category_id BETWEEN '1' AND '10'
ORDER BY learning.title;

-- list of all formations for one job-type, one grade
SELECT learning.* 
FROM learning
INNER JOIN job_type_learning ON job_type_learning.learning_id = learning.id
INNER JOIN learning_grade ON learning_grade.learning_id = learning.id
WHERE job_type_learning.job_type_id = 'job_type.id'
AND learning_grade.grade_id = 'grade.id'
ORDER BY learning.title;

SELECT learning.title AS title_learning
FROM learning
INNER JOIN job_type_learning ON job_type_learning.learning_id = learning.id
INNER JOIN learning_grade ON learning_grade.learning_id = learning.id
WHERE job_type_learning.job_type_id = '10'
AND learning_grade.grade_id = '7'
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

SELECT learning.* 
FROM learning
INNER JOIN job_type_learning ON job_type_learning.learning_id = learning.id
INNER JOIN learning_grade ON learning_grade.learning_id = learning.id
INNER JOIN learning_category ON learning_category.learning_id = learning.id
WHERE job_type_learning.job_type_id = '10'
AND learning_grade.grade_id = '7'
ORDER BY learning.title;

-- list all formations for one user this job_type, this grade all categories


-- list formations pour un user lié a son métier, son grade filtrer par categorie


-- list of all formations one job_type, one grade = one user & status = cours

-- list of all formations one job_type, one grade = one user & status = fini

-- nbr d'apprenants pour une formation



