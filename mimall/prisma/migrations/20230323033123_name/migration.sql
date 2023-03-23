/*
  Warnings:

  - You are about to drop the column `closingTime` on the `Branch` table. All the data in the column will be lost.
  - You are about to drop the column `openingTime` on the `Branch` table. All the data in the column will be lost.
  - Added the required column `nationality` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `Branch` DROP FOREIGN KEY `Branch_shopId_fkey`;

-- DropForeignKey
ALTER TABLE `Product` DROP FOREIGN KEY `Product_shopId_fkey`;

-- DropForeignKey
ALTER TABLE `Shop` DROP FOREIGN KEY `Shop_ownerId_fkey`;

-- AlterTable
ALTER TABLE `Branch` DROP COLUMN `closingTime`,
    DROP COLUMN `openingTime`;

-- AlterTable
ALTER TABLE `Shop` ADD COLUMN `alternateNumber` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `User` ADD COLUMN `alternateNumber` VARCHAR(191) NULL,
    ADD COLUMN `cardNumber` VARCHAR(191) NULL,
    ADD COLUMN `cardType` VARCHAR(191) NULL,
    ADD COLUMN `level` ENUM('LEVEL_ONE', 'LEVEL_TWO', 'LEVEL_THREE', 'SUPER_USER') NULL,
    ADD COLUMN `nationality` VARCHAR(191) NOT NULL;

-- AddForeignKey
ALTER TABLE `Shop` ADD CONSTRAINT `Shop_ownerId_fkey` FOREIGN KEY (`ownerId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Branch` ADD CONSTRAINT `Branch_shopId_fkey` FOREIGN KEY (`shopId`) REFERENCES `Shop`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Product` ADD CONSTRAINT `Product_shopId_fkey` FOREIGN KEY (`shopId`) REFERENCES `Shop`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
