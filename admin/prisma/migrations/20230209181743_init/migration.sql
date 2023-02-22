/*
  Warnings:

  - You are about to alter the column `category` on the `Product` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Enum(EnumId(1))`.
  - Added the required column `closingTime` to the `Shop` table without a default value. This is not possible if the table is not empty.
  - Added the required column `openingTime` to the `Shop` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Product` MODIFY `category` ENUM('ACCOMMODATIONS_AND_BUILDING', 'FASHION_AND_WEARS', 'FOOD', 'FURNITURE', 'GROCERY_AND_GENERAL', 'HEALTH_AND_WELLNESS', 'HOME_AND_ELECTRICALS', 'MONEY_AND_ENERGY', 'PERSONAL_CARE_AND_BEAUTY', 'RECREATION', 'STATIONERY_AND_PRINTING', 'TECH', 'TRANSPORT_AND_MACHINE') NOT NULL;

-- AlterTable
ALTER TABLE `Shop` ADD COLUMN `closingTime` VARCHAR(191) NOT NULL,
    ADD COLUMN `facebookHandle` VARCHAR(191) NULL,
    ADD COLUMN `instagramHandle` VARCHAR(191) NULL,
    ADD COLUMN `openingTime` VARCHAR(191) NOT NULL,
    ADD COLUMN `whatsappNumber` VARCHAR(191) NULL,
    MODIFY `address` VARCHAR(191) NULL;

-- CreateTable
CREATE TABLE `Branch` (
    `id` VARCHAR(191) NOT NULL,
    `location` VARCHAR(191) NOT NULL,
    `address` VARCHAR(191) NULL,
    `phoneNumber` VARCHAR(191) NOT NULL,
    `openingTime` VARCHAR(191) NOT NULL,
    `closingTime` VARCHAR(191) NOT NULL,
    `shopId` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Branch` ADD CONSTRAINT `Branch_shopId_fkey` FOREIGN KEY (`shopId`) REFERENCES `Shop`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
