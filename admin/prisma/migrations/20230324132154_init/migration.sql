/*
  Warnings:

  - You are about to drop the column `images` on the `Product` table. All the data in the column will be lost.
  - The values [ACCOMMODATIONS_AND_BUILDING,FURNITURE,HOME_AND_ELECTRICALS,MONEY_AND_ENERGY,PERSONAL_CARE_AND_BEAUTY,RECREATION,STATIONERY_AND_PRINTING,TRANSPORT_AND_MACHINE] on the enum `Product_category` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterTable
ALTER TABLE `Product` DROP COLUMN `images`,
    MODIFY `category` ENUM('FOOD', 'FASHION_AND_WEARS', 'GROCERY_AND_GENERAL', 'HEALTH_AND_WELLNESS', 'HOME_AND_ELECTRICAL_APPLIANCES', 'PERSONAL_SERVICES', 'PRINTING_AND_STATIONERY', 'TECH') NOT NULL;

-- CreateTable
CREATE TABLE `Image` (
    `id` VARCHAR(191) NOT NULL,
    `public_id` VARCHAR(191) NOT NULL,
    `secure_url` VARCHAR(191) NOT NULL,
    `productId` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Image` ADD CONSTRAINT `Image_productId_fkey` FOREIGN KEY (`productId`) REFERENCES `Product`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
