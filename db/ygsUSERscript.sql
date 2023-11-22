create user 'adminYGS'@'localhost' identified by 'adminYGS';

grant all privileges on yourgamerside.* to 'adminYGS'@'localhost';

flush privileges;