create database if not exists streaming;
use streaming;

create table catalogo (
    id int primary key auto_increment,
    nome varchar(255),
    genero varchar(255),
    ano int,
    descricao varchar(1000),
    pais varchar(255),
    nota_imdb decimal(10,2),
    tipo varchar(20),
    imagem varchar(255)
);

INSERT INTO filmes 
(id, nome, genero, ano, descricao, pais, nota_imdb, tipo, imagem)
VALUES
(
    1,
    'The Shawshank Redemption',
    'Drama',
    1994,
    'Dois homens presos se reúnem ao longo de vários anos, encontrando consolo e eventual redenção através de atos de decência comum.',
    'Estados Unidos',
    9.3,
    'Filme',
    'https://image.tmdb.org/t/p/original/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg'
);

INSERT INTO filmes 
(id, nome, genero, ano, descricao, pais, nota_imdb, tipo, imagem)
VALUES
(
    2,
    'Breaking Bad',
    'Crime, Drama, thriller',
    2008,
    'Um professor de química do ensino médio diagnosticado com câncer de pulmão inoperável se volta para a fabricação e venda de metanfetamina.',
    'Estados Unidos',
    9.5,
    'Série',
    'https://image.tmdb.org/t/p/original/ggFHVNu6YYI5L9pCfOacjizRGt.jpg'
);

INSERT INTO filmes 
(id, nome, genero, ano, descricao, pais, nota_imdb, tipo, imagem)
VALUES
(
    3,
    'O Auto da Compadecida',
    'Comédia, Aventura',
    2000,
    'As aventuras dos nordestinos João Grilo e Chicó, que vivem enganando a todos para sobreviver.',
    'Brasil',
    8.6,
    'Filme',
    'https://upload.wikimedia.org/wikipedia/pt/b/bf/O_auto_da_compadecida.jpg?20241011010846'
);

INSERT INTO filmes 
(id, nome, genero, ano, descricao, pais, nota_imdb, tipo, imagem)
VALUES
(
    4,
    'Parasite',
    'Comédia, Drama, Thriller',
    2019,
    'A ganância e a discriminação de classe ameaçam o relacionamento recém-formado entre a rica família Park e o clã Kim.',
    'Coreia do Sul',
    8.5,
    'Filme',
    'https://upload.wikimedia.org/wikipedia/pt/thumb/b/be/Parasite_poster.jpg/250px-Parasite_poster.jpg'
);

INSERT INTO filmes 
(id, nome, genero, ano, descricao, pais, nota_imdb, tipo, imagem)
VALUES
(
    5,
    'Dark',
    'Sci-fi, Mistério, Thriller',
    2017,
    'Uma saga familiar com um toque sobrenatural, ambientada em uma cidade alemã onde o desaparecimento de duas crianças expõe as relações duplas entre quatro famílias.',
    'Alemanha',
    8.7,
    'Série',
    'https://upload.wikimedia.org/wikipedia/pt/thumb/f/f6/Dark_%28s%C3%A9rie%29.jpg/250px-Dark_%28s%C3%A9rie%29.jpg'
);

INSERT INTO filmes 
(id, nome, genero, ano, descricao, pais, nota_imdb, tipo, imagem)
VALUES
(
    6,
    'Inception',
    'Sci-fi, Ação',
    2010,
    'Um ladrão que rouba segredos corporativos através do uso de tecnologia de compartilhamento de sonhos recebe a tarefa inversa de plantar uma ideia na mente de um C.E.O',
    'Estados Unidos',
    8.8,
    'Filme',
    'https://upload.wikimedia.org/wikipedia/pt/thumb/8/84/AOrigemPoster.jpg/250px-AOrigemPoster.jpg'
);

INSERT INTO filmes 
(id, nome, genero, ano, descricao, pais, nota_imdb, tipo, imagem)
VALUES
(
    7,
    'Stranger Things',
    'Sci-fi, Terror, Drama',
    2016,
    'Quando um jovem garoto desaparece, uma pequena cidade descobre um mistério envolvendo experimentos secretos e forças sobrenaturais aterrorizantes.',
    'Estados Unidos',
    8.7,
    'Série',
    'https://upload.wikimedia.org/wikipedia/pt/thumb/e/e6/Stranger_Things_1_poster.jpg/250px-Stranger_Things_1_poster.jpg'
);

INSERT INTO filmes 
(id, nome, genero, ano, descricao, pais, nota_imdb, tipo, imagem)
VALUES
(
    8,
    'Cidade de Deus',
    'Crime, Drama',
    2002,
    'Nas favelas do Rio de Janeiro, dois rapazes seguem caminhos diferentes: um se torna fotógrafo e o outro um traficante de drogas.',
    'Brasil',
    8.6,
    'Filme',
    'https://upload.wikimedia.org/wikipedia/pt/thumb/1/10/CidadedeDeus.jpg/250px-CidadedeDeus.jpg'
);

INSERT INTO filmes 
(id, nome, genero, ano, descricao, pais, nota_imdb, tipo, imagem)
VALUES
(
    9,
    'The Godfather',
    'Crime, Drama',
    1972,
    'O patriarca idoso de uma dinastia do crime organizado transfere o controle de seu império clandestino para seu filho relutante.',
    'Estados Unidos',
    9.2,
    'Filme',
    'https://upload.wikimedia.org/wikipedia/pt/thumb/d/de/Godfather_1972.jpg/250px-Godfather_1972.jpg'
);

INSERT INTO filmes 
(id, nome, genero, ano, descricao, pais, nota_imdb, tipo, imagem)
VALUES
(
    10,
    'Succession',
    'Drama',
    2018,
    'Acompanha a família Roy, que controla o maior conglomerado de mídia e entretenimento do mundo, enquanto lutam pelo controle da empresa.',
    'Estados Unidos',
    8.9,
    'Série',
    'https://upload.wikimedia.org/wikipedia/pt/thumb/0/07/Succession.png/250px-Succession.png'
);

INSERT INTO filmes 
(id, nome, genero, ano, descricao, pais, nota_imdb, tipo, imagem)
VALUES
(
    11,
    'Spirited Away',
    'Animação, Aventura, Fantasia',
    2001,
    'Durante a mudança de sua família para o subúrbio, uma garota de 10 anos vagueia por um mundo governado por deuses, bruxas e espíritos.',
    'Japão',
    8.6,
    'Filme',
    'https://upload.wikimedia.org/wikipedia/pt/thumb/3/3b/A_Viagem_de_Chihiro.JPG/250px-A_Viagem_de_Chihiro.JPG'
);

INSERT INTO filmes 
(id, nome, genero, ano, descricao, pais, nota_imdb, tipo, imagem)
VALUES
(
    12,
    'The Last of Us',
    'Ação, Adventure, Drama',
    2023,
    'Após uma pandemia global destruir a civilização, um sobrevivente endurecido assume a responsabilidade de uma garota de 14 anos que pode ser a última esperança da humanidade.',
    'Estados Unidos',
    8.8,
    'Série',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/The_Last_of_Us_vertical_logo.svg/250px-The_Last_of_Us_vertical_logo.svg.png'
);

INSERT INTO filmes 
(id, nome, genero, ano, descricao, pais, nota_imdb, tipo, imagem)
VALUES
(
    13,
    'Pulp Fiction',
    'Crime, Drama',
    1994,
    'As vidas de dois assassinos da máfia, um boxeador, a esposa de um gângster e dois bandidos se entrelaçam em quatro histórias de violência e redenção.',
    'Estados Unidos',
    8.9,
    'Filme',
    'https://upload.wikimedia.org/wikipedia/pt/thumb/8/82/Pulp_Fiction_cover.jpg/250px-Pulp_Fiction_cover.jpg'
);