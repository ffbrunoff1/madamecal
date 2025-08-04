import React from 'react'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, Heart, ArrowUp } from 'lucide-react'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: 'Início', section: 'hero' },
    { name: 'Sobre Nós', section: 'about' },
    { name: 'Produtos', section: 'services' },
    { name: 'Contato', section: 'contact' }
  ]

  const products = [
    { name: 'Salto Alto', section: 'services' },
    { name: 'Salto Médio', section: 'services' },
    { name: 'Rasteirinha Verão', section: 'services' },
    { name: 'Rasteirinha Outono', section: 'services' }
  ]

  const contactInfo = [
    {
      icon: MapPin,
      label: 'Padre Lebret 801 G05 Bloco 03'
    },
    {
      icon: Phone,
      label: '+55 44 99104-0774',
      link: 'tel:+5544991040774'
    },
    {
      icon: Mail,
      label: 'ffbrunoff@yahoo.com.br',
      link: 'mailto:ffbrunoff@yahoo.com.br'
    },
    {
      icon: Clock,
      label: 'Seg - Sáb: 9:00 - 18:00'
    }
  ]

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-500 to-primary-600"></div>

      <div className="relative z-10">
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img 
                  src="https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/user-files/ad5c31a2-f045-4f97-a0ab-2d4f0e6a69e7/1754269877209_51dhmzr4s7w_Captura_de_Tela_2025-08-03_a_s_22.10.03-removebg-preview.png"
                  alt="Madame Cal"
                  className="h-16 w-auto filter invert brightness-0 contrast-100"
                />
              </motion.div>
              
              <p className="text-gray-300 text-lg leading-relaxed">
                Transformando sonhos em passos seguros. Elegância, conforto e qualidade em cada detalhe.
              </p>
              
              <motion.div
                className="flex items-center space-x-2 text-primary-400"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Heart className="h-5 w-5" />
                <span className="text-sm font-medium">Feito com amor para mulheres especiais</span>
              </motion.div>
            </motion.div>

            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold text-white mb-6">Links Rápidos</h3>
              <nav className="space-y-3">
                {quickLinks.map((link, index) => (
                  <motion.button
                    key={link.name}
                    onClick={() => scrollToSection(link.section)}
                    className="block text-gray-300 hover:text-primary-400 transition-colors duration-300 text-left"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                    viewport={{ once: true }}
                    whileHover={{ x: 10 }}
                  >
                    {link.name}
                  </motion.button>
                ))}
              </nav>
            </motion.div>

            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold text-white mb-6">Nossos Produtos</h3>
              <nav className="space-y-3">
                {products.map((product, index) => (
                  <motion.button
                    key={product.name}
                    onClick={() => scrollToSection(product.section)}
                    className="block text-gray-300 hover:text-primary-400 transition-colors duration-300 text-left"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                    viewport={{ once: true }}
                    whileHover={{ x: 10 }}
                  >
                    {product.name}
                  </motion.button>
                ))}
              </nav>
            </motion.div>

            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold text-white mb-6">Contato</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start space-x-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                    viewport={{ once: true }}
                    whileHover={{ x: 5 }}
                  >
                    <motion.div
                      className="w-6 h-6 flex items-center justify-center mt-1"
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <info.icon className="h-5 w-5 text-primary-400" />
                    </motion.div>
                    
                    {info.link ? (
                      <motion.a
                        href={info.link}
                        className="text-gray-300 hover:text-primary-400 transition-colors duration-300 flex-1"
                        whileHover={{ scale: 1.02 }}
                        target={info.link.startsWith('tel') ? '_self' : '_blank'}
                        rel={info.link.startsWith('tel') ? '' : 'noopener noreferrer'}
                      >
                        {info.label}
                      </motion.a>
                    ) : (
                      <span className="text-gray-300 flex-1">{info.label}</span>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div
          className="border-t border-gray-800"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <motion.div
                className="text-gray-400 text-center md:text-left"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <p>© {currentYear} Madame Cal. Todos os direitos reservados.</p>
                <p className="text-sm mt-1">Desenvolvido com ❤️ para mulheres que amam estilo.</p>
              </motion.div>

              <motion.button
                onClick={scrollToTop}
                className="bg-gradient-to-r from-primary-500 to-primary-600 text-white p-3 rounded-full hover:from-primary-600 hover:to-primary-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <ArrowUp className="h-6 w-6" />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}