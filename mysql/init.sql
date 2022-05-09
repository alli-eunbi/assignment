CREATE TABLE `Resource` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `type` varchar(255),
  `name` varchar(255),
  `metadata_id` int
);

CREATE TABLE `Link` (
  `id` int PRIMARY KEY,
  `document_id` int,
  `content_id` int
);

CREATE TABLE `Metadata` (
  `id` int PRIMARY KEY,
  `name` varchar(255),
  `path` varchar(255),
  `creator` varchar(255),
  `origin` varchar(255),
  `mimetype` varchar(255),
  `size` varchar(255)
);

ALTER TABLE `Resource` ADD FOREIGN KEY (`metadata_id`) REFERENCES `Metadata` (`id`);

ALTER TABLE `Link` ADD FOREIGN KEY (`document_id`) REFERENCES `Resource` (`id`);

ALTER TABLE `Link` ADD FOREIGN KEY (`content_id`) REFERENCES `Resource` (`id`);
