import React from 'react';
import Image from 'next/image';

const TeamCards = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-foreground to-background">
      {/*Contenedor de las dos tarjetas*/}
      <div className="flex flex-wrap justify-center gap-8 max-w-4xl">
        {/*Tarjeta 1*/}
        <div className="w-full sm:w-80 bg-white rounded-lg overflow-hidden shadow-lg">
          <div className="h-32 bg-background relative">
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
              <div className="relative h-50 w-50 rounded-full border-4 border-white shadow-md overflow-hidden">
                <Image
                  src="/imagen1.jpg"
                  alt="Christian Jeria"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full"
                />
              </div>
            </div>
          </div>

          <div className="p-6 pt-30 text-center"> 
            <div className="mb-4">
              <h2 className="text-2xl font-bold text-background">Christian Jeria</h2>
              <p className="text-lg text-background">Designer</p>
            </div>

            <p className="text-sm text-gray-600">
              Christian contributes a unique sense of design and style to MochaLeaf. 
              He enjoys art, photography, front-end web development, and building clean user interfaces.
            </p>
          </div>

          <div className="flex border-t border-gray-200">
            <div className="w-1/2 p-2 flex items-center justify-center">
              <div className="h-10 w-full flex items-center justify-center">
                <div className="relative h-8 w-8 rounded-full shadow-md overflow-hidden">
                <Image
                  src="/imagen3.jpg"
                  alt="Christian Jeria"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full"
                />
              </div>
              </div>
            </div>
            
            <div className="w-1/2 p-2 flex items-center justify-center">
              <div className="h-10 w-full flex items-center justify-center">
                <div className="relative h-8 w-8 rounded-full shadow-md overflow-hidden">
                <Image
                  src="/imagen2.jpg"
                  alt="Christian Jeria"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full"
                />
              </div>
              </div>
            </div>
          </div>
        </div>

        {/*Tarjeta 2*/}
        <div className="w-full h-82 sm:w-110 bg-white rounded-lg overflow-hidden shadow-lg">
          <div className="h-32 bg-background relative">

            <div className="mb-4 flex flex-col place-items-end-safe p-9">
              <div>
                <h2 className="text-2xl font-bold text-white">Christian Jeria</h2>
                <p className="text-lg text-white">Designer</p>
              </div>
              
            </div>
            <div className="absolute bottom-0 left-1/4 transform -translate-x-1/2 translate-y-1/2">
              <div className="relative h-40 w-40 rounded-full border-4 border-white shadow-md overflow-hidden">
                <Image
                  src="/imagen1.jpg"
                  alt="Christian Jeria"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full"
                />
              </div>
            </div>
          </div>

          <div className="flex justify-end border-t border-gray-200 p-3"> 
            <div className="flex space-x-3"> 
              <div className="h-8 w-8 rounded-full shadow-md overflow-hidden">
                <Image
                  src="/imagen3.jpg"
                  alt="Icono 1"
                  width={32}
                  height={32}
                  className="object-cover"
                />
              </div>
              <div className="h-8 w-8 rounded-full shadow-md overflow-hidden">
                <Image
                  src="/imagen2.jpg"
                  alt="Icono 2"
                  width={32}
                  height={32}
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          <div className="p-6 pt-12 text-clip justify-center"> 
            
            <p className="text-sm text-gray-600">
              Christian contributes a unique sense of design and style to MochaLeaf. 
              He enjoys art, photography, front-end web development, and building clean user interfaces.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default TeamCards;