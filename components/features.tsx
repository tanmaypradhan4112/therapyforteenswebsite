"use client"
import React from 'react'
import { Card, CardHeader, CardBody, CardFooter, Image, Button } from "@nextui-org/react";

export const Features = () => {
    const list = [
        {
            title: "Emotional Support",
            img: ""
        },
        {
            title: "Mental Support",
            img: ""
        },
        {
            title: "Coping Skills",
            img: ""
        },
        {
            title: "Healthy Lifestyle",
            img: ""
        },
    ];

    return (
        <div className='py-10 sm:py-10'>
            <div className='mx-auto max-w-6xl px-6 lg:px-8'>
                <div className="mx-auto text-center lg:mx-0">
                    <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">What do we focus on?</h2>
                    <p className="mt-6 text-lg leading-8 text-gray-900">Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.</p>
                </div>

                <div className='mx-auto mt-10 lg:mx-0 lg:max-w-none'>
                    <dl className='mt-16 grid grid-cols-1 gap-6 sm:mt-20 sm:grid-cols-1 lg:grid-cols-4'>
                        {
                            list.map((item,title) => (

                            <div>
                                <Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-7">
                                    <Image
                                        removeWrapper
                                        alt="Relaxing app background"
                                        className="z-0 w-full h-full object-cover"
                                        src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.niNk6bxxw24c8uc7onyiMQHaHa%26pid%3DApi&f=1&ipt=10ba2667f05ebbf7b5cd65bdafa6a48ba3b6addc6d4f9019a921e4b9bdb3866c&ipo=images"
                                    />
                                    <CardFooter className="absolute bg-black bg-opacity-40 backdrop-blur-2xl rounded drop-shadow-2xl bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
                                        <div className="flex flex-grow gap-2 items-center">
                                            <h4 className="text-white/90 font-medium text-xl">{item.title}</h4>
                                        </div>
                                    </CardFooter>
                                </Card>
                            </div>

                            ))}

                    </dl>
                </div>

            </div>
        </div>
    )
}
