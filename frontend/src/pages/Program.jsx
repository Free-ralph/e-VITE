import React from 'react'
import Navbar from '../components/Navbar'

const Program = () => {
  return (
    <>
        <Navbar color = 'bg-primary' burgerColor = 'text-secondary'/>
        <div className='h-screen w-screen bg-secondary overflow-scroll'>
            <div className='flex flex-col items-center mt-20 h-full w-full'>
                <h2 className='text-4xl md:text-5xl font-bold mb-5 font-cursive'>Our Wedding Party</h2>
                <div className='font-cursive'>
                    <p className='text-center text-3xl'>Officiant</p>
                    <p className='text-center text-2xl font-display capitalize font-medium tracking-tighter'>Pastor Dwayne(the Rock)Johnson</p>
                    <p className='text-center text-3xl mt-4'>Parents of the Bride</p>
                    <p className='text-center text-2xl font-display capitalize font-medium tracking-tighter'>Mr and Mrs Smith</p>
                    <p className='text-center text-3xl mt-4'>Parents of the Groom</p>
                    <p className='text-center text-2xl font-display capitalize font-medium tracking-tighter'>Mr and Mrs SpongeBob</p>
                </div>
                <div className='font-cursive mt-6'>
                    <p className='text-center text-3xl'>Maid of Honor</p>
                    <div className='md:text-2xl font-display capitalize flex justify-between tracking-tighter text-sm font-medium'><p>Harley Queen</p><span className='tracking-tighter'>........................................</span><p>Best Friend of the Bride</p></div>
                    <p className='text-center text-3xl'>Bridemaids</p>
                    <div className='text-sm md:text-2xl font-medium font-display capitalize flex justify-between tracking-tighter'><p>Tems baby</p><span className=''>........................................</span><p>Niece of the Bride</p></div>
                    <div className='text-sm md:text-2xl font-medium font-display capitalize flex justify-between tracking-tighter'><p>Temi Otedola</p><span className=''>........................................</span><p>Ex-wife of the Groom</p></div>
                    <div className='text-sm md:text-2xl font-medium font-display capitalize flex justify-between tracking-tighter'><p>Bobrisky</p><span className=''>........................................</span><p>Dear freind of the Groom</p></div>
                    <p className='text-center text-3xl'>Flower Girls</p>
                    <div className='text-sm md:text-2xl font-medium font-display capitalize flex justify-between tracking-tighter'><p>princess</p><span className=''>........................................</span><p>Niece of the Bride</p></div>
                    <div className='text-sm md:text-2xl font-medium font-display capitalize flex justify-between tracking-tighter'><p>little one</p><span className=''>........................................</span><p>Niece of the Groom</p></div>
                    <div className='text-sm md:text-2xl font-medium font-display capitalize flex justify-between tracking-tighter'><p>love</p><span className=''>........................................</span><p>Niece of the Groom's Ex</p></div>
                    <p className='text-center text-3xl'>Best Man</p>
                    <div className='text-sm md:text-2xl font-medium font-display capitalize flex justify-between tracking-tighter'><p>Steve Rogers</p><span className=''>........................................</span><p>captain America</p></div>
                    <p className='text-center text-3xl'>Grooms Men</p>
                    <div className='text-sm md:text-2xl font-medium font-display capitalize flex justify-between tracking-tighter'><p>Jack Reacher</p><span className=''>........................................</span><p>Dear Friend of groom</p></div>
                    <div className='text-sm md:text-2xl font-medium font-display capitalize flex justify-between tracking-tighter'><p>Sheldon Cooper</p><span className=''>........................................</span><p>Noble price winner</p></div>
                </div>
                <div className='font-cursive mt-5'>
                    <p className='text-center text-3xl'>Wedding Cordinator</p>
                    <p className='text-center text-2xl font-display capitalize font-medium tracking-tighter'>Okosa Chidera</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default Program