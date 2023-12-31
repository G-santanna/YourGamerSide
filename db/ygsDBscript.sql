create database yourgamerside;

use yourgamerside;

create table usuario(
	idUser int primary key auto_increment,
    username varchar(45) unique,
    email varchar(45) unique,
    senha varchar(45)
);

create table puzzle(
	idPuzzle int auto_increment primary key,
    puzzleTitle varchar(45)
);

create table question(
	idQuestion int primary key auto_increment,
    question varchar(100)
);

create table answer(
	fkUser int,
    fkQuestion int,
    primary key (fkUser, fkQuestion),
    foreign key (fkUser) references usuario(idUser),
    foreign key (fkQuestion) references question(idQuestion),
    answer varchar(100)
);

create table statistic(
	idStatistic int auto_increment,
	fkUser int,
    fkPuzzle int,
    primary key (idStatistic, fkUser, fkPuzzle),
    foreign key (fkUser) references usuario(idUser),
    foreign key (fkPuzzle) references puzzle(idPuzzle),
    runTime time
);