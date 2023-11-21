create user 'adminYGS'@'localhost' identified by 'adminYGS';

grant INSERT on yourgamerside.* to 'adminYGS'@'localhost';

flush privileges;
