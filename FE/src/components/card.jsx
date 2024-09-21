"use client"
import Image from "next/image"
import { Discount } from "./discount"

export const Card = ({ imageSrc, mainPrice, discountPercent, foodName, alt }) => {
    return <div className="inline-flex flex-col items-start gap-[14px] justify-self-center w-full">
        <div className="relative justify-center items-center flex w-full h-[186px]">
            <Image
                src={imageSrc}
                fill={true}
                sizes="(max-width: 282px)"
                className="rounded-2xl z-10 shadow-md object-cover object-center"
                alt={alt}
                priority={true}
            />

            {discountPercent >= 0 ? <Discount percent={discountPercent} /> : <></>}
        </div>

        <div className="flex w-[282px] flex-col items-start gap-[2px]">
            <p className="self-stretch text-xl font-semibold">{foodName}</p>
            <div className="flex items-start gap-4">
                {discountPercent ? (
                    <p className="text-[#18BA51] text-lg font-semibold">{mainPrice - (mainPrice * discountPercent) / 100}₮</p>
                ) : (
                    <p className="text-[#18BA51] text-lg font-semibold">{mainPrice}₮</p>
                )}
                {discountPercent && <p className="text-[#171717] text-lg line-through">{mainPrice}₮</p>}
            </div>
        </div>
    </div>
}