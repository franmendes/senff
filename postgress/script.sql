-- 1) Criar a tabela
DROP TABLE IF EXISTS test_client;
CREATE TABLE test_client (
  id          SERIAL PRIMARY KEY,
  test_users  TEXT        NOT NULL,         
  test_address TEXT,                        
  test_mails  VARCHAR(255) NOT NULL UNIQUE, 
  test_age    INT CHECK (test_age BETWEEN 0 AND 130) 
);

-- 2) Popular com 10 usuários
INSERT INTO test_client (test_users, test_address, test_mails, test_age) VALUES
('Ana Souza',      'Rua Augusta, 1000 - Consolação - São Paulo - SP',          'ana.souza@example.com',       29),
('Bruno Lima',     'Av. Paulista, 1500 - Bela Vista - São Paulo - SP',         'bruno.lima@example.com',      41),
('Carla Pereira',  'Rua da Bahia, 500 - Centro - Belo Horizonte - MG',         'carla.pereira@example.com',   35),
('Diego Santos',   'Av. Sete de Setembro, 2000 - Centro - Curitiba - PR',      'diego.santos@example.com',    22),
('Elisa Rocha',    'Av. Afonso Pena, 3200 - Centro - Belo Horizonte - MG',     'elisa.rocha@example.com',     47),
('Fábio Almeida',  'Rua dos Andradas, 300 - Centro - Porto Alegre - RS',       'fabio.almeida@example.com',   58),
('Gabriela Nunes', 'Rua Sapucaí, 120 - Floresta - Belo Horizonte - MG',        'gabriela.nunes@example.com',  33),
('Henrique Costa', NULL,                                                        'henrique.costa@example.com',  81), 
('Isabela Martins','Rua Oscar Freire, 2300 - Jardins - São Paulo - SP',        'isabela.martins@example.com', 76),
('João Barros',    '',                                                          'joao.barros@example.com',     74); 

-- ============================
-- CONSULTAS SOLICITADAS
-- ============================

-- 1. Selecionar todos os usuários cujo endereço contenha "São Paulo"
SELECT *
FROM test_client
WHERE test_address ILIKE '%São Paulo%';

-- 2. Atualizar o e-mail de um usuário específico 
UPDATE test_client
SET test_mails = 'novo.email@example.com'
WHERE id = 3;  

-- 3. Excluir todos os usuários sem endereço definido e com mais de 75 anos
DELETE FROM test_client
WHERE (test_address IS NULL OR btrim(test_address) = '')
  AND test_age > 75;

-- 4. Calcular a média de idade dos usuários que moram em "Belo Horizonte"
SELECT ROUND(AVG(test_age)::numeric, 2) AS media_idade_bh
FROM test_client
WHERE test_address ILIKE '%Belo Horizonte%';