drop table if exists reviews;
create table reviews (
    id integer primary key autoincrement,
    latitude real not null,
    longitude real not null,
    review text not null,
    ranking integer not null
);
