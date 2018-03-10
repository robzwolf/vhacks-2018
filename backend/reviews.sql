drop table if exists reviews;
create table reviews (
    id integer primary key autoincrement,
    review text not null,
    ranking integer not null,
    latitude real not null,
    longitude real not null
);
