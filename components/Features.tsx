'use client'

import { FaRocket, FaGem, FaCar, FaFire } from 'react-icons/fa'

const features = [
  {
    icon: FaRocket,
    title: 'Moon Mission',
    description: "From rags to riches, we're heading straight to the moon. No stops.",
  },
  {
    icon: FaGem,
    title: 'Diamond Hands',
    description: "Built by holders, for holders. We don't fold under pressure.",
  },
  {
    icon: FaCar,
    title: 'Lambo Dreams',
    description: 'Your ticket from public transport to private jets. Live the meme.',
  },
  {
    icon: FaFire,
    title: 'Community First',
    description: 'Join the movement. Together we rise, together we thrive.',
  },
]

export default function Features() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4 my-16">
      {features.map((feature, index) => (
        <div
          key={index}
          className="bg-poorless-mint/10 border-2 border-poorless-mint rounded-2xl p-8 text-center 
                     backdrop-blur-sm transition-all duration-300 hover:-translate-y-3 
                     hover:border-poorless-gold hover:shadow-[0_15px_40px_rgba(95,206,167,0.3)]"
        >
          <feature.icon className="text-6xl text-poorless-gold mb-4 mx-auto" />
          <h3 className="text-xl font-bold text-poorless-mint mb-3">{feature.title}</h3>
          <p className="text-gray-400 leading-relaxed">{feature.description}</p>
        </div>
      ))}
    </div>
  )
}

