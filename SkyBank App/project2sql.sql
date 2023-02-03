drop table if exists income;
drop table if exists expenses;
drop table if exists transactions;
drop table if exists accounts;
drop table if exists account_type;
drop table if exists messages;
drop table if exists users;

create table project2.users (
id serial primary key not null,
first_name varchar (50) not null,
middle_initial varchar (2) not null,
last_name varchar (50) not null,
ssn varchar(15) not null unique,
email varchar(50) not null,
phone_number varchar(15) not null,
country varchar (50) not null,
state varchar (50) not null,
city varchar(50) not null,
zipcode varchar(15) not null,
username varchar (100) not null unique,
password varchar (100) not null
);

--insert into project2.users (id, first_name, middle_initial, last_name, ssn, email, phone_number, country, state, city, zipcode, username, password) values (1, 'Thom', 'M', 'Brosini', '7419365973', 'tbrosini0@sfgate.com', '8584436728', 'Argentina', 'Florida', 'Gualeguaychú', '1987497771', 'tbrosini0', 'cLRoL2Brni');
--insert into project2.users (id, first_name, middle_initial, last_name, ssn, email, phone_number, country, state, city, zipcode, username, password) values (2, 'Timothy', 'M', 'Labusch', '2604923690', 'tlabusch1@mashable.com', '3792751624', 'Madagascar', 'Florida', 'Ambato Boeny', '9463983409', 'tlabusch1', 'eJBSzQMbWz1N');
--insert into project2.users (id, first_name, middle_initial, last_name, ssn, email, phone_number, country, state, city, zipcode, username, password) values (3, 'Jayson', 'M', 'Simioli', '5513195456', 'jsimioli2@springer.com', '8204497289', 'Sweden', 'Gävleborg', 'Gävle', '6832297501', 'jsimioli2', 'A4MIXSA2h');
--insert into project2.users (id, first_name, middle_initial, last_name, ssn, email, phone_number, country, state, city, zipcode, username, password) values (4, 'Jessie', 'F', 'Batte', '1924802861', 'jbatte3@blogspot.com', '7972711538', 'Brazil', 'Florida', 'Nossa Senhora da Glória', '2731085955', 'jbatte3', '3mMcLVSjDQ');
--insert into project2.users (id, first_name, middle_initial, last_name, ssn, email, phone_number, country, state, city, zipcode, username, password) values (5, 'Michal', 'M', 'Anelay', '9273051720', 'manelay4@wikimedia.org', '5773722901', 'Ivory Coast', 'Florida', 'Soubré', '7798553529', 'manelay4', 'hS8RTxvEshv');

create table project2.messages(
id serial primary key not null,
fk_user_id integer not null,
postedTime timestamp not null default(current_timestamp),
message varchar(100),
foreign key (fk_user_id) references project2.users(id)
);

create table project2.account_type(
id serial primary key,
type varchar (50)
);

create table project2.accounts (
id serial primary key,
balance numeric,
nickname varchar(50),
fk_account_type integer not null,
fk_users_id integer not null,
foreign key (fk_account_type) references project2.account_type(id),
foreign key (fk_users_id) references project2.users(id)
);
insert into project2.account_type (type) values ('Savings'), ('Checking'), ('Credit');
--insert into project2.accounts (id, balance, nickname, fk_account_type, fk_users_id) values (1, 38151, 'Gabvine', 2, 3);
--insert into project2.accounts (id, balance, nickname, fk_account_type, fk_users_id) values (2, 77522, 'Jatri', 2, 4);
--insert into project2.accounts (id, balance, nickname, fk_account_type, fk_users_id) values (3, 41463, 'Devpulse', 1, 2);
--insert into project2.accounts (id, balance, nickname, fk_account_type, fk_users_id) values (4, 67520, 'Jabbersphere', 2, 3);
--insert into project2.accounts (id, balance, nickname, fk_account_type, fk_users_id) values (5, 94098, 'Avamba', 1, 2);
--insert into project2.accounts (id, balance, nickname, fk_account_type, fk_users_id) values (6, 32676, 'Demimbu', 1, 3);
--insert into project2.accounts (id, balance, nickname, fk_account_type, fk_users_id) values (7, 2822, 'Feedmix', 1, 4);
--insert into project2.accounts (id, balance, nickname, fk_account_type, fk_users_id) values (8, 877, 'Twinte', 2, 2);
--insert into project2.accounts (id, balance, nickname, fk_account_type, fk_users_id) values (9, 33473, 'Photobug', 1, 4);
--insert into project2.accounts (id, balance, nickname, fk_account_type, fk_users_id) values (10, 56731, 'Twiyo', 2, 2);

update project2.accounts set balance = 656 where nickname = 'Jatri';


create table project2.transactions(
id serial primary key,
date timestamp not null,
from_account_id integer not null,
to_account_id integer not null,
total_amount numeric not null,
note varchar (500),
foreign key (from_account_id) references project2.accounts(id),
foreign key (to_account_id) references project2.accounts(id)
);

create table project2.income(
id serial primary key,
date timestamp not null,
entity varchar(100) not null,
total_amount numeric not null,
fk_account_id integer not null,
foreign key (fk_account_id) references project2.accounts(id)
);

create table project2.expenses(
id serial primary key,
date timestamp not null,
entity varchar(100) not null,
total_amount numeric not null,
fk_account_id integer not null,
foreign key (fk_account_id) references project2.accounts(id)
);

--select * from users;
--select * from accounts;
----To see all sent transactions
--select * from project2.transactions t where from_account_id = 4;
----To see all recieved tranasactions
--select * from project2.transactions t where from_account_id = 4;
--
--select * from users join accounts a on users.id = a.fk_users_id where users.id = 4;
--
--select * from allTransactions(4);

------------------Functions, Queries, and Procedures-------------------
--To transfer money between accounts
--create or replace
drop procedure if exists transfer(amount numeric, sending_acc integer, receiving_acc integer, message varchar(500), sending_user integer);

create procedure transfer(amount numeric, sending_acc integer, receiving_acc integer, message varchar(500), sending_user integer)
language plpgsql
as $$
declare pre_transaction numeric;
declare receiving_person integer; --accounts%rowtype

declare messageString varchar(500):= 'You transferred $'|| amount || ' from account: ' || sending_acc ||' to ' || 'account: ' || receiving_acc;

begin
	select balance from accounts into pre_transaction where id = sending_acc;
	select id from accounts into receiving_person where id = receiving_acc;
	if not found then 
		raise 'No such account exists';
	elseif pre_transaction - amount < 0 then raise 'Insufficient Funds';
		else 
			update accounts set balance = balance - amount where id = sending_acc;
			update accounts set balance = balance + amount where id = receiving_acc;
			insert into transactions (date, from_account_id, to_account_id, total_amount, note) values (current_timestamp, sending_acc, receiving_acc, amount, message);
			insert into messages (fk_user_id, postedTime, message) values (sending_user, current_timestamp, messageString);
	end if;
	commit;
end;
$$;

--See all transactions for a user
drop function if exists allTransactions(user_id integer);

create function allTransactions(user_id integer)
returns table
(id integer,
date timestamp,
from_account_id integer,
to_account_id integer,
total_amount numeric,
note varchar (500) )
language plpgsql
as 
$$
begin
	return query SELECT t.id, t.date, t.from_account_id, t.to_account_id, t.total_amount, t.note  FROM transactions t join accounts a on a.id = t.from_account_id join users u on u.id = a.fk_users_id where u.id = user_id;

end;
$$;

--Income
drop procedure if exists income(person varchar(100), amount numeric, acc integer);

create procedure income(person varchar(100), amount numeric, acc integer)
language plpgsql
as $$

begin 
			update accounts set balance = balance + amount where id = acc;
			insert into income (date, entity, total_amount, fk_account_id) values (current_timestamp, person, amount, acc);
	commit;
end;
$$;

--Expense
drop procedure if exists expenses(person varchar(100), total_amount numeric, acc integer);

create procedure expenses(person varchar(100), amount numeric, acc integer)
language plpgsql
as $$

declare pre_transaction numeric;

begin 
			select balance from accounts into pre_transaction where id = acc;
		if pre_transaction - amount < 0 then raise 'Insufficient Funds';
	else
			update accounts set balance = balance - amount where id = acc;
			insert into expenses (date, entity, total_amount, fk_account_id) values (current_timestamp, person, amount, acc);
		end if;
	commit;
end;
$$;

--See all income
drop function if exists allIncome(user_id integer);

create function allIncome(user_id integer)
returns table
(id integer,
date timestamp,
entity varchar(100),
total_amount numeric,
fk_account_id integer
)
language plpgsql
as 
$$
begin
	return query SELECT i.id, i.date, i.entity, i.total_amount, i.fk_account_id  FROM income i join accounts a on a.id = i.fk_account_id  join users u on u.id = a.fk_users_id where u.id = user_id;

end;
$$;

--See all expenses
drop function if exists allExpenses(user_id integer);

create function allExpenses(user_id integer)
returns table
(id integer,
date timestamp,
entity varchar(100),
total_amount numeric,
fk_account_id integer
)
language plpgsql
as 
$$
begin
	return query SELECT e.id, e.date, e.entity, e.total_amount, e.fk_account_id  FROM expenses e join accounts a on a.id = e.fk_account_id  join users u on u.id = a.fk_users_id where u.id = user_id;

end;
$$;

-- call income('My Job', 1000, 2);
-- call expenses('Mcdonalds', 100, 4);

--To see all accounts, their type, and their balances for a customer
select accounts.balance, account_type.type from accounts join account_type on account_type.id = accounts.fk_account_type join users on users.id = accounts.fk_users_id where users.id = 1;

--To see all income
select transactions.date, total_amount as amount, from_account_id as from, note from transactions join accounts on transactions.from_account_id = accounts.id where to_account_id = 1;

--To see all expenses
select transactions.date, total_amount as amount, to_account_id as to, note from transactions join accounts on transactions.from_account_id = accounts.id where from_account_id = 1;


