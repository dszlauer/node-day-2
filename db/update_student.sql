update students
set cohort = $2
where id = $1;

select *
from students;