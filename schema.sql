CREATE TABLE notes (
    id int NOTT NULL AUTO_INCREMENT,
    uuid varchar(255) NOT NULL UNIQUE,
    title varchar(255) NOT NULL,
    content text NOT NULL,
    updated date NOT NULL,
    PRIMARY KEY (id)
);