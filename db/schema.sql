DROP DATABASE IF EXISTS burgers_db;

CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers(
    id INT AUTO_INCREMENT NOT NULL,
    burger_name VARCHAR(200) NOT NULL,
    devoured BOOLEAN default 0,
    PRIMARY KEY (id)
);


-- seed data input with some traditional hamburgers

INSERT burgers(burger_name, devoured) VALUES
("Hamburger, 8 oz. Angus",false),
("Cheeseburger, 10 oz. Angus",false),
("Bacon Cheesburger, 10 oz. Angus",false),
("Mushroom Bacon Cheeseburger, 10 oz. Angus",false),
("Double Cheeder Bacon Mushroom Burger, 12 oz. Angus",false),
("Classic 10 oz. Steak Burger w or w/o cheese",false);

SELECT * FROM burgers;