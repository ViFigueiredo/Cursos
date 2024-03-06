-- public.users definition

-- Drop table

-- DROP TABLE public.users;

CREATE TABLE users (
	id SERIAL NOT NULL,
	name VARCHAR(255) NULL,
	email VARCHAR(255) NOT NULL,
	password VARCHAR(255) NOT NULL,
	role INT NOT NULL,
	PRIMARY KEY (id),
	UNIQUE (email)
);
