SELECT 
   table_name, 
   column_name, 
   data_type 
FROM 
   information_schema.columns
WHERE 
   table_name = 'items';

SELECT * FROM public.items;

INSERT INTO items (description) 
VALUES 
('item 1'),
('item 2'),
('item 3'),
('item 4'),
('item 5'),
('item 6'),
('item 7'),
('item 8'),
('item 9'),
('item 10'),
('item 11'),
('item 12'),
('item 13'),
('item 14'),
('item 15'),
('item 16'),
('item 17'),
('item 18'),
('item 19'),
('item 20'),
('item 21'),
('item 22'),
('item 23'),
('item 24'),
('item 25'),
('item 26'),
('item 27'),
('item 28'),
('item 29'),
('item 30')