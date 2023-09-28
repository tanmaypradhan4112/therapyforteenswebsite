import React from 'react'

export const About = () => {
    return (
        <div className="relative isolate py-10 sm:py-32">
            <div className="hidden overflow-hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl" aria-hidden="true">
                <div className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"></div>
            </div>
            <div className="mx-auto max-w-4xl  px-6 lg:px-8">
                <div className="mx-auto text-center max-w-4xl lg:mx-0">
                    <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">About Us</h2>
                    <p className="mt-6 text-lg leading-8 text-gray-900">Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.</p>
                </div>
                <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
                    <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
                        <div className="flex flex-col-reverse">
                            <dt className="text-base leading-7 text-gray-900">Offices worldwide</dt>
                            <dd className="text-2xl font-bold leading-9 tracking-tight text-black">12</dd>
                        </div>
                        <div className="flex flex-col-reverse">
                            <dt className="text-base leading-7 text-gray-900">Full-time colleagues</dt>
                            <dd className="text-2xl font-bold leading-9 tracking-tight text-white">300+</dd>
                        </div>
                        <div className="flex flex-col-reverse">
                            <dt className="text-base leading-7 text-gray-900">Hours per week</dt>
                            <dd className="text-2xl font-bold leading-9 tracking-tight text-white">40</dd>
                        </div>
                        <div className="flex flex-col-reverse">
                            <dt className="text-base leading-7 text-gray-900">Paid time off</dt>
                            <dd className="text-2xl font-bold leading-9 tracking-tight text-white">Unlimited</dd>
                        </div>
                    </dl>
                </div>
            </div>
            <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-50 sm:-z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">
                <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"></div>
            </div>
        </div>
    )
}
