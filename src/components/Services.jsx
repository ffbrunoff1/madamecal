import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Star, Heart, Sparkles, Crown } from 'lucide-react'

export default function Services() {
  const products = [
    {
      id: 1,
      name: 'Salto Alto',
      image: 'https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/imagens.website.creation/ad5c31a2-f045-4f97-a0ab-2d4f0e6a69e7/imagem_1754263370804_0.png',
      description: 'Descubra a elegância e sofisticação dos nossos saltos altos. Projetados para proporcionar conforto e estilo, eles são perfeitos para qualquer ocasião. Com uma variedade de cores e designs, cada par é cuidadosamente confeccionado para garantir a máxima durabilidade. Surpreenda-se com a leveza e estabilidade, que permitem um caminhar confiante e glamuroso. Transforme seu visual e sinta-se poderosa ao adicionar um toque de classe e modernidade aos seus trajes.',
      icon: Crown,
      gradient: 'from-primary-500 to-primary-600',
      accent: 'primary'
    },
    {
      id: 2,
      name: 'Salto Médio',
      image: 'https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/imagens.website.creation/ad5c31a2-f045-4f97-a0ab-2d4f0e6a69e7/imagem_1754263370804_1.png',
      description: 'O salto médio é a escolha perfeita para quem busca equilíbrio entre conforto e elegância. Ideal para o uso diário, oferece a altura ideal que adiciona sofisticação ao visual sem sacrificar o bem-estar dos pés. Disponível em diversas cores e materiais, é versátil o suficiente para combinar com diferentes estilos de roupa, tornando-se um item indispensável no guarda-roupa. Descubra a conveniência e o estilo de nossos sapatos de salto médio.',
      icon: Star,
      gradient: 'from-purple-500 to-purple-600',
      accent: 'purple'
    },
    {
      id: 3,
      name: 'Rasteirinha Verão',
      image: 'https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/imagens.website.creation/ad5c31a2-f045-4f97-a0ab-2d4f0e6a69e7/imagem_1754263370804_2.png',
      description: 'As rasteirinhas verão são a escolha perfeita para quem busca conforto e estilo nos dias quentes. Feitas com materiais de alta qualidade, elas oferecem leveza e durabilidade ideais para passeios à beira-mar ou momentos descontraídos na cidade. Disponíveis em diversas cores e estampas, combinam facilmente com diferentes looks garantindo um visual moderno e despojado. Com sola antiderrapante e design ergonômico são a opção certa para manter seus pés frescos.',
      icon: Heart,
      gradient: 'from-pink-500 to-pink-600',
      accent: 'pink'
    },
    {
      id: 4,
      name: 'Rasteirinha Outono',
      image: 'https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/imagens.website.creation/ad5c31a2-f045-4f97-a0ab-2d4f0e6a69e7/imagem_1754263370804_3.png',
      description: 'Descubra o charme e conforto da Rasteirinha Outono a opção perfeita para deixar seus dias mais estilosos. Com design moderno e cores inspiradas na estação nossas rasteirinhas proporcionam conforto e elegância em cada passo. Feitas com materiais de alta qualidade são ideais para acompanhar você em qualquer ocasião casual ou até em um passeio ao ar livre. Adicione um toque de sofisticação ao seu guarda-roupa e aproveite o melhor do outono com estilo e praticidade.',
      icon: Sparkles,
      gradient: 'from-orange-500 to-orange-600',
      accent: 'orange'
    }
  ]

  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const getAccentColor = (accent) => {
    const colors = {
      primary: 'text-primary-500',
      purple: 'text-purple-500',
      pink: 'text-pink-500',
      orange: 'text-orange-500'
    }
    return colors[accent] || 'text-primary-500'
  }

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-white via-primary-25 to-white overflow-hidden">
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
            Nossa{' '}
            <span className="text-gradient">
              Coleção
            </span>
          </motion.h2>
          
          <motion.p
            className="text-xl md:text-2xl text-gray-600 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
          >
            Descubra o par perfeito para cada estação e ocasião. Elegância, conforto e qualidade em cada detalhe.
          </motion.p>
        </motion.div>

        <div className="space-y-20">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              className={`grid md:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'md:grid-flow-col-dense' : ''
              }`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
            >
              
              <motion.div
                className={`relative ${index % 2 === 1 ? 'md:col-start-2' : ''}`}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className={`absolute -inset-4 bg-gradient-to-r ${product.gradient} rounded-3xl blur-2xl opacity-20`}
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.2, 0.3, 0.2],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                
                <motion.img
                  src={product.image}
                  alt={product.name}
                  className="relative z-10 w-full h-auto rounded-3xl shadow-2xl"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                  viewport={{ once: true }}
                />
                
                <motion.div
                  className="absolute -top-4 -right-4 bg-white rounded-2xl p-3 shadow-xl border border-primary-100"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <product.icon className={`h-6 w-6 ${getAccentColor(product.accent)}`} />
                </motion.div>
              </motion.div>

              <motion.div
                className={`flex flex-col justify-center space-y-6 ${
                  index % 2 === 1 ? 'md:col-start-1' : ''
                }`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                viewport={{ once: true }}
              >
                <motion.div
                  className="flex items-center space-x-3"
                  whileInView={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <motion.div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-r ${product.gradient} flex items-center justify-center`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <product.icon className="h-6 w-6 text-white" />
                  </motion.div>
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
                    {product.name}
                  </h3>
                </motion.div>

                <motion.p
                  className="text-lg text-gray-600 leading-relaxed"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  {product.description}
                </motion.p>

                <motion.div
                  className="flex flex-col sm:flex-row gap-4 mt-auto"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <motion.button
                    onClick={scrollToContact}
                    className={`group bg-gradient-to-r ${product.gradient} text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1 flex items-center justify-center space-x-2`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span>Saiba Mais</span>
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </motion.button>

                  <motion.button
                    onClick={scrollToContact}
                    className={`border-2 text-gray-700 hover:text-white hover:bg-gradient-to-r ${product.gradient} border-gray-300 hover:border-transparent px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Encomendar
                  </motion.button>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="bg-gradient-to-r from-primary-500 to-primary-600 rounded-3xl p-12 text-white relative overflow-hidden"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <motion.h3
              className="text-3xl md:text-4xl font-bold mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              viewport={{ once: true }}
            >
              Pronta para Dar o Próximo Passo?
            </motion.h3>
            
            <motion.p
              className="text-xl mb-8 opacity-90"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              viewport={{ once: true }}
            >
              Encontre seu estilo exclusivo na Madame Cal e transforme cada passo em uma declaração de elegância.
            </motion.p>
            
            <motion.button
              onClick={scrollToContact}
              className="bg-white text-primary-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Fale Conosco Agora
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}