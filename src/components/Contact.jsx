import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Send,
  MessageSquare
} from 'lucide-react';
import Button from './ui/Button';
import Card from './ui/Card';
import { personalData } from '../data/personalData';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { delayChildren: 0.2, staggerChildren: 0.1 }
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ name: '', email: '', message: '' });
      alert('Thank you for your message! I will get back to you soon.');
    }, 2000);
  };

  const glassClass =
    'bg-black border border-purple-600/20';

  const inputClass =
    'w-full px-2.5 py-2 rounded-md text-xs text-off-white ' +
    'bg-black/50 backdrop-blur-md border border-purple-600/20 ' +
    'focus:border-purple-400/50 focus:ring-1 focus:ring-purple-600/20 ' +
    'transition-all duration-200';

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: personalData.email,
      href: `mailto:${personalData.email}`
    },
    {
      icon: Phone,
      label: 'Phone',
      value: personalData.phone,
      href: `tel:${personalData.phone}`
    },
    {
      icon: MapPin,
      label: 'Location',
      value: personalData.location,
      href: null
    }
  ];

  const socialLinks = [
    { icon: Github, href: personalData.github, label: 'GitHub' },
    { icon: Linkedin, href: personalData.linkedin, label: 'LinkedIn' }
  ];

  return (
    <section id="contact" className="py-12 relative bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <motion.div
          className="text-center mb-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-2">
            <span className="gradient-text">Get In Touch</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-600 to-purple-400 mx-auto rounded-full" />
          <p className="text-soft-gray/70 mt-2 max-w-xl mx-auto text-sm">
            Interested in new opportunities or collaborations? Reach out!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6">

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card
              className={`${glassClass} h-full p-3 rounded-md
                hover:border-purple-400/50
                hover:shadow-lg hover:shadow-purple-600/25
                transition-all duration-300 group`}
              whileHover={{ 
                scale: 1.02,
                boxShadow: '0 15px 30px rgba(147, 51, 234, 0.25)'
              }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex items-center mb-2.5">
                <div className="p-1 rounded-md bg-black/50 border border-purple-600/20 mr-2">
                  <MessageSquare className="w-3.5 h-3.5 text-purple-400" />
                </div>
                <h3 className="text-sm font-semibold text-off-white">
                  Send a Message
                </h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-3">
                <div>
                  <label className="block text-xs text-soft-gray mb-0.5">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={inputClass}
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-xs text-soft-gray mb-0.5">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={inputClass}
                    placeholder="you@example.com"
                  />
                </div>

                <div>
                  <label className="block text-xs text-soft-gray mb-0.5">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows={3}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className={`${inputClass} resize-none`}
                    placeholder="Your message..."
                  />
                </div>

                <Button
                  type="submit"
                  size="sm"
                  className="w-full bg-gradient-to-r from-purple-600 to-purple-400 text-white
                    hover:shadow-lg hover:shadow-purple-600/40 transition-all duration-300"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    'Sending...'
                  ) : (
                    <>
                      <Send size={16} className="mr-1.5" />
                      Send
                    </>
                  )}
                </Button>
              </form>
            </Card>
          </motion.div>

          {/* Info Cards */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, x: 15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {/* Contact Info */}
            <Card className={`${glassClass} p-3 rounded-md
              hover:border-purple-400/50
              hover:shadow-lg hover:shadow-purple-600/25
              transition-all duration-300 group`}
              whileHover={{ 
                scale: 1.02,
                boxShadow: '0 15px 30px rgba(147, 51, 234, 0.25)'
              }}
              whileTap={{ scale: 0.98 }}
            >
              <h3 className="text-sm font-semibold text-off-white mb-2">
                Contact Info
              </h3>
              <div className="space-y-2.5">
                {contactInfo.map((info, i) => (
                  <a
                    key={i}
                    href={info.href ?? '#'}
                    className="flex items-center p-1.5 rounded-md
                      bg-black/50 backdrop-blur-sm border border-purple-600/20
                      hover:border-purple-400/50 transition-all duration-200"
                  >
                    <div className="p-1 rounded-md bg-black/50 border border-purple-600/20 mr-2">
                      <info.icon className="w-3 h-3 text-purple-400" />
                    </div>
                    <div>
                      <div className="text-[10px] text-soft-gray/70">
                        {info.label}
                      </div>
                      <div className="text-xs text-off-white">
                        {info.value}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </Card>

            {/* Social */}
            <Card className={`${glassClass} p-3 rounded-md
              hover:border-purple-400/50
              hover:shadow-lg hover:shadow-purple-600/25
              transition-all duration-300 group`}
              whileHover={{ 
                scale: 1.02,
                boxShadow: '0 15px 30px rgba(147, 51, 234, 0.25)'
              }}
              whileTap={{ scale: 0.98 }}
            >
              <h3 className="text-sm font-semibold text-off-white mb-2">
                Connect With Me
              </h3>
              <div className="grid grid-cols-2 gap-2.5">
                {socialLinks.map((social, i) => (
                  <a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center p-1.5 rounded-md
                      bg-black/50 backdrop-blur-sm border border-purple-600/20
                      hover:border-purple-400/50 transition-all duration-200"
                  >
                    <social.icon className="w-3 h-3 mr-1 text-purple-400" />
                    <span className="text-[10px] text-off-white">
                      {social.label}
                    </span>
                  </a>
                ))}
              </div>
            </Card>

            {/* Availability */}
            <Card className={`${glassClass} p-3 text-center rounded-md`}>
              <div className="inline-flex items-center justify-center w-8 h-8
                bg-green-500/20 backdrop-blur-md rounded-full mb-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              </div>
              <h4 className="text-sm font-semibold text-off-white mb-0.5">
                Available for Opportunities
              </h4>
              <p className="text-[10px] text-soft-gray/70">
                Open to full-time & freelance roles
              </p>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
