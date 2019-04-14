
drop table if exists students;
drop table if exists campus_data;


create table campus_data
(
    campus text primary key
,
    program varchar(64) not null
,
    campus_phone text not null
);

insert into campus_data
    (campus, program, campus_phone)
values
    ('phoenix', 'web', '867-5309')
    ,
    ('provo', 'web', '666-6666')
    ,
    ('dallas', 'ios', '555-5555');

create table students
(
    id serial primary key
,
    name text not null
,
    cohort integer not null
,
    campus text references campus_data(campus)
);

insert into students
    (name, cohort, campus)
values('spencer', 3, 'phoenix')
,
    ('rebecca', 3, 'phoenix')
,
    ('ryan', 7, 'phoenix')
,
    ('gary', 7, 'phoenix')
,
    ('gina', 4, 'phoenix')
,
    ('john', 3, 'dallas')
,
    ('sarah', 5, 'provo')
,
    ('sam', 5, 'provo');