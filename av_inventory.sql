CREATE TABLE `av_inventory` (
  `owner` varchar(255) NOT NULL,
  `type` varchar(128) NOT NULL,
  `inventorydata` longtext NOT NULL DEFAULT '[]'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

ALTER TABLE `av_inventory`
  ADD PRIMARY KEY (`owner`);
COMMIT;