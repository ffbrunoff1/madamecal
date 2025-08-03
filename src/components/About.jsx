import React from 'react'
import { motion } from 'framer-motion'
import { Heart, Star, Award, Users, Sparkles, Crown } from 'lucide-react'

export default function About() {
  const features = [
    {
      icon: Heart,
      title: 'Paixão pela Moda',
      description: 'Cada sapato é selecionado com carinho e dedicação para proporcionar o máximo de estilo e conforto.',
      color: 'text-pink-500'
    },
    {
      icon: Star,
      title: 'Qualidade Premium',
      description: 'Utilizamos apenas materiais de primeira qualidade, garantindo durabilidade e sofisticação.',
      color: 'text-yellow-500'
    },
    {
      icon: Award,
      title: 'Design Exclusivo',
      description: 'Modelos únicos e tendências atuais para mulheres que não abrem mão da elegância.',
      color: 'text-primary-500'
    },
    {
      icon: Users,
      title: 'Atendimento Personalizado',
      description: 'Nossa equipe está pronta para ajudar você a encontrar o sapato perfeito para cada ocasião.',
      color: 'text-purple-500'
    }
  ]

  const stats = [
    { number: '1000+', label: 'Clientes Felizes', icon: Heart },
    { number: '500+', label: 'Modelos Exclusivos', icon: Crown },
    { number: '5', label: 'Anos de Experiência', icon: Star },
    { number: '98%', label: 'Satisfação', icon: Sparkles }
  ]

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white via-primary-25 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div
          className="text-center max-w-4xl mx-auto mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
          >
            Sobre a{' '}
            <span className="text-gradient">
              Madame Cal
            </span>
          </motion.h2>
          
          <motion.p
            className="text-xl md:text-2xl text-gray-600 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
          >
            Transformamos sonhos em passos seguros. Na Madame Cal, acreditamos que cada mulher merece se sentir poderosa, elegante e confiante. Nossa missão é oferecer sapatos que não apenas complementam seu estilo, mas elevam sua autoestima a cada passo.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-primary-100 group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <motion.div
                className={`w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <feature.icon className={`h-8 w-8 ${feature.color}`} />
              </motion.div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors duration-300">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="bg-gradient-to-r from-primary-500 to-primary-600 rounded-3xl p-12 text-center text-white relative overflow-hidden"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-primary-400/20 to-primary-700/20"></div>
          
          <motion.h3
            className="text-3xl md:text-4xl font-bold mb-8 relative z-10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            viewport={{ once: true }}
          >
            Números que Falam por Si
          </motion.h3>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1 }}
              >
                <motion.div
                  className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <stat.icon className="h-8 w-8 text-white" />
                </motion.div>
                
                <motion.div
                  className="text-4xl md:text-5xl font-bold mb-2"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.5 + index * 0.1, duration: 1 }}
                  viewport={{ once: true }}
                >
                  {stat.number}
                </motion.div>
                
                <div className="text-white/90 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.p
            className="text-lg text-gray-600 max-w-3xl mx-auto italic"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            "Na Madame Cal, não vendemos apenas sapatos. Criamos experiências, construímos confiança e celebramos a individualidade de cada mulher. Porque acreditamos que quando você se sente bem, pode conquistar o mundo."
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}