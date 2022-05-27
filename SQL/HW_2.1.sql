drop table employees; -- удаление таблицы сотрудники
create table employees( --создание таблицы сотрудники
	id serial primary key,
	employee_name varchar(50) not null
);

insert into employees(id, employee_name)
	values 
	       (default, 'Vasya'),
	       (default, 'Petya'),
	   	   (default, 'Grisha'),
	       (default, 'Olya'),
	       (default, 'Vitya'),
	       (default, 'Kolya'),
	       (default, 'Vadim'),
	       (default, 'Misha'),
	       (default, 'Ilya'),
	       (default, 'Yulya'),
	       (default, 'Marina'),
	       (default, 'Anna'),
	       (default, 'Dasha'),
	       (default, 'Tima'),
	       (default, 'Klava'),
	       (default, 'Venya'),
	       (default, 'Liana'),
	       (default, 'Vera'),
	       (default, 'Sonya'),
	       (default, 'Nina'),
	       (default, 'Lena'),
	       (default, 'Galya'),
	       (default, 'Fedya'),
	       (default, 'Mila'),
	       (default, 'Slava'),
	       (default, 'Gena'),
	       (default, 'Lama'),
	       (default, 'Alex'),
	       (default, 'Dima'),
	       (default, 'Kirill'),
	       (default, 'Roma'),
	       (default, 'Egor'),
	       (default, 'Mamed'),
	       (default, 'Anar'),
	       (default, 'Janna'),
	       (default, 'Andrey'),
	       (default, 'Igor'),
	       (default, 'Ira'),
	       (default, 'Polya'),
	       (default, 'Rita'),
	       (default, 'Katya'),
	       (default, 'Nadya'),
	       (default, 'Ykov'),
	       (default, 'Era'),
	       (default, 'Lada'),
	       (default, 'Avram'),
	       (default, 'Alina'),
	       (default, 'Maxim'),
	       (default, 'Zahar'),
	       (default, 'Ekim'),
	       (default, 'Artur'),
	       (default, 'David'),
	       (default, 'Vlad'),
	       (default, 'Linda'),
	       (default, 'Demid'),
	       (default, 'Gleb'),
	       (default, 'Artur'),
	       (default, 'Barbara'),
	       (default, 'Diana'),
	       (default, 'Mark'),
	       (default, 'Danya'),
	       (default, 'Kai'),
	       (default, 'Osip'),
	       (default, 'Nazar'),
	       (default, 'Luka'),
	       (default, 'Pasha'),
	       (default, 'Kurt'),
	       (default, 'Ipat'),
	       (default, 'Zoya'),
	       (default, 'Bella'
	      );
select * from employees;
drop table salary; -- удаление таблицы зарплата

create table salary( --создание таблицы зарплата
	id serial primary key,
	monthly_salary int not null
	);
insert into salary(id, monthly_salary) --внесение данных в таблицу зарплата: колонку ID и monthly_salary
	values 
	       (default, 1000),
	       (default, 1100),
	       (default, 1200),
	       (default, 1300),
	       (default, 1400),
	       (default, 1500),
	       (default, 1600),
	       (default, 1700),
	       (default, 1800),
	       (default, 1900),
	       (default, 2000),
	       (default, 2100),
	       (default, 2200),
	       (default, 2300),
	       (default, 2400),
	       (default, 2500);
select * from salary;

drop table employees_salary; -- удаление таблицы зарплаты сотрудников
	
	create table employees_salary( --создание таблицы зарплата сотрудника
	id serial primary key,
	employee_id int not null unique,
	salary_id int not null
	);
	select * from employees_salary;
	
	insert into employees_salary(id, employee_id, salary_id)
  values
        (default, 77, 10),
		(default, 3, 2),
		(default, 1, 11),
		(default, 6, 16),
		(default, 59, 8),
		(default, 73, 9),
		(default, 25, 4),
		(default, 82, 7),
		(default, 35, 1),
		(default, 92, 3),
		(default, 58, 13),
		(default, 27, 9),
		(default, 22, 3),
		(default, 51, 8),
		(default, 83, 10),
		(default, 70, 2),
		(default, 19, 14),
		(default, 47, 6),
		(default, 67, 4),
		(default, 50, 10),
		(default, 33, 7),
		(default, 9, 5),
		(default, 71, 1),
		(default, 68, 2),
		(default, 24, 13),
		(default, 57, 16),
		(default, 18, 3),
		(default, 20, 11),
		(default, 44, 2),
		(default, 99, 4),
		(default, 81, 6),
		(default, 29, 7),
		(default, 94, 12),
		(default, 55, 14),
		(default, 8, 9),
		(default, 54, 5),
		(default, 76, 8),
		(default, 69, 10),
		(default, 7, 15),
	    (default, 15, 5);
	select * from employees_salary;		 

drop table roles;
create table roles( --создание таблицы должность
id serial primary key,
role_name int not null unique);
select * from roles;

ALTER TABLE roles
drop column	role_name;
ALTER TABLE roles
add role_name varchar(30) not null unique;
select * from roles;

	insert into roles (id, role_name)
  values
  (default, 'Junior Python developer'),
  (default, 'Middle Python developer'),
  (default, 'Senior Python developer'),
  (default, 'Junior Java developer'),
  (default, 'Middle Java developer'),
  (default, 'Senior Java developer'),
  (default, 'Junior JavaScript developer'),
  (default, 'Middle JavaScript developer'),
  (default, 'Senior JavaScript developer'),
  (default, 'Junior Manual QA engineer'),
  (default, 'Middle Manual QA engineer'),
  (default, 'Senior Manual QA engineer'),
  (default, 'Project Manager'),
  (default, 'Designer'),
  (default, 'HR'),
  (default, 'CEO'),
  (default, 'Sales manager'),
  (default, 'Junior Automation QA engineer'),
  (default, 'Middle Automation QA engineer'),
  (default, 'Senior Automation QA engineer');
  
  select * from roles;
 
 drop table roles_employee;
 create table roles_employee(
 id serial primary key,
 employee_id int not null unique,
 role_id int not null,
 foreign key employee_id
 	references employees(id),
 foreign key role_id
 	references roles(id)
 );
 select * from roles_employee;
 
insert into roles_employee(employee_id, role_id)
values
		(1, 3),
		(3, 4),
		(4, 12),
		(7, 10),
		(10, 9),
		(11, 8),
		(15, 13),
		(18, 19),
		(19, 14),
		(21, 18),
		(25, 15),
		(23, 7),
		(27, 6),
		(28, 1),
		(29, 7),
		(31, 2),
		(33, 20),
		(34, 17),
		(35, 9),
		(37, 16),
		(38, 4),
		(39, 8),
		(44, 5),
		(45, 11),
		(47, 12),
		(50, 14),
		(52, 3),
		(55, 15),
		(57, 16),
		(58, 20),
		(59, 19),
		(62, 17),
		(60, 1),
		(61, 13),
		(67, 10),
		(65, 2),
		(68, 6),
		(64, 4),
		(63, 7),
		(70, 5);
select * from roles_employee;
