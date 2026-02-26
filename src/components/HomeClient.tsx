'use client';

import { Logo } from '@/components/Logo';
import { ScrollVideo } from '@/components/ScrollVideo';
import { MobileMenu } from '@/components/MobileMenu';
import { Mail, Phone, MapPin, Wrench, Settings, Zap } from 'lucide-react';
import { motion } from 'motion/react';

/**
 * A wrapper component that ensures all children have consistent internal padding
 * and don't touch the container edges.
 */
const ContentWrapper = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
    <div className={`p-8 md:p-10 lg:p-12 flex flex-col gap-6 ${className}`}>
        {children}
    </div>
);

interface HomeClientProps {
    siteData: any;
}

export function HomeClient({ siteData }: HomeClientProps) {
    const headerGlow = {
        fontFamily: "'Orbitron', sans-serif",
        fontWeight: 300,
        textShadow: '0 0 4px #e6000b, 0 0 8px #e6000b, 0 0 16px rgba(230, 0, 11, 0.4)',
        color: '#e6000b'
    };

    const IconComponent = ({ index }: { index: number }) => {
        switch (index) {
            case 0: return <Wrench className="w-8 h-8 md:w-10 md:h-10" />;
            case 1: return <Settings className="w-8 h-8 md:w-10 md:h-10" />;
            case 2: return <Zap className="w-8 h-8 md:w-10 md:h-10" />;
            default: return <Wrench className="w-8 h-8 md:w-10 md:h-10" />;
        }
    };

    return (
        <div className="min-h-screen bg-transparent text-white overflow-x-hidden relative z-10" style={{ fontFamily: "'Orbitron', sans-serif" }}>
            <ScrollVideo />
            <MobileMenu />

            {/* Hero Section */}
            <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center pt-24 px-6 md:px-12">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2 }}
                    className="text-center z-10 flex flex-col items-center pb-24 md:pb-32"
                >
                    <div className="mb-4 scale-[0.8] md:scale-100">
                        <Logo />
                    </div>

                    <div className="mt-8 relative">
                        <h1 className="leading-[0.75] px-4" style={{ fontFamily: 'Altruism, sans-serif', fontWeight: 300, letterSpacing: '-0.06em' }}>
                            <span className="text-white px-1" style={{ textShadow: '0 0 4px #ffffff, 0 0 8px #ffffff, 0 0 16px rgba(255,255,255,0.4)' }}>
                                {siteData.hero.title.goat}
                            </span>
                            <motion.span
                                className="text-[#e6000b] px-1"
                                style={{ textShadow: '0 0 4px #e6000b, 0 0 8px #e6000b, 0 0 16px rgba(230,0,11,0.4)' }}
                                animate={{
                                    opacity: [1, 0.75, 1],
                                    textShadow: [
                                        '0 0 4px #e6000b, 0 0 8px #e6000b, 0 0 16px rgba(230,0,11,0.4)',
                                        '0 0 8px #e6000b, 0 0 16px #e6000b, 0 0 24px rgba(230,0,11,0.6)',
                                        '0 0 4px #e6000b, 0 0 8px #e6000b, 0 0 16px rgba(230,0,11,0.4)'
                                    ]
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                            >
                                {siteData.hero.title.driver}
                            </motion.span>
                        </h1>
                    </div>

                    <div className="mt-6 text-[8px] md:text-[9px] tracking-[0.4em] uppercase text-gray-400 space-x-6 font-bold opacity-70 p-2">
                        <span className="px-2">{siteData.hero.services_label}</span>
                        <span className="px-2">{siteData.hero.name_label}</span>
                    </div>
                </motion.div>

                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ repeat: Infinity, duration: 2.5 }}
                    className="absolute bottom-8 text-[#e6000b]"
                >
                    <div className="text-[8px] tracking-[0.2em] font-black p-2">{siteData.hero.scroll_label}</div>
                    <div className="w-px h-10 bg-gradient-to-b from-[#e6000b] via-[#e6000b] to-transparent mx-auto mt-2 shadow-[0_0_6px_#e6000b]" />
                </motion.div>
            </section>

            {/* O MNIE */}
            <section id="about" className="relative min-h-screen flex items-center justify-center px-8 py-24 overflow-hidden">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto w-full"
                >
                    <h2 className="mb-10 tracking-tighter uppercase text-center md:text-left p-4" style={headerGlow}>
                        {siteData.about.title}
                    </h2>
                    <div
                        className="relative rounded-[20px] overflow-hidden backdrop-blur-3xl"
                        style={{
                            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.03))',
                            border: '1px solid rgba(255, 255, 255, 0.12)',
                            boxShadow: '0 20px 50px rgba(0, 0, 0, 0.5)',
                        }}
                    >
                        <div
                            className="absolute top-0 left-0 right-0 h-[1px]"
                            style={{
                                background: 'linear-gradient(90deg, transparent, #e6000b, transparent)',
                                boxShadow: '0 0 15px #e6000b',
                            }}
                        />

                        <ContentWrapper>
                            {siteData.about.content.map((item: any, idx: number) => (
                                <p
                                    key={idx}
                                    className={item.type === 'highlight'
                                        ? "text-base md:text-[18px] text-gray-100 leading-[1.3] font-black italic tracking-tight m-0 p-0"
                                        : "text-xs md:text-sm text-gray-400 leading-[1.7] font-medium opacity-80 m-0 p-0"}
                                >
                                    {item.text}
                                </p>
                            ))}
                        </ContentWrapper>
                    </div>
                </motion.div>
            </section>

            {/* MOJE USŁUGI */}
            <section id="services" className="relative min-h-screen flex items-center justify-center px-8 py-24">
                <div className="max-w-[1100px] mx-auto w-full">
                    <motion.h2
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                        className="mb-16 tracking-tighter text-center uppercase p-4"
                        style={headerGlow}
                    >
                        {siteData.services.title}
                    </motion.h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
                        {siteData.services.items.map((service: any, index: number) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: index * 0.15 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -8, scale: 1.01 }}
                                className="relative rounded-[20px] overflow-hidden backdrop-blur-3xl transition-all duration-700 group"
                                style={{
                                    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.03))',
                                    border: '1px solid rgba(255, 255, 255, 0.1)',
                                    boxShadow: '0 12px 30px rgba(0, 0, 0, 0.3)',
                                }}
                            >
                                <div
                                    className="absolute top-0 left-0 right-0 h-[1.5px] opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                                    style={{
                                        background: '#e6000b',
                                        boxShadow: '0 0 10px #e6000b',
                                    }}
                                />

                                <ContentWrapper className="gap-5">
                                    <div className="text-[#e6000b] scale-90 group-hover:scale-105 transition-transform duration-700 drop-shadow-[0_0_8px_rgba(230,0,11,0.4)] flex justify-center md:justify-start">
                                        <IconComponent index={index} />
                                    </div>
                                    <h3 className="text-lg md:text-xl font-black text-white group-hover:text-[#e6000b] transition-colors tracking-tighter leading-tight m-0 p-0">
                                        {service.title}
                                    </h3>
                                    <p className="text-[11px] md:text-xs text-gray-400 leading-[1.7] font-medium opacity-80 group-hover:opacity-100 transition-opacity m-0 p-0">
                                        {service.description}
                                    </p>
                                </ContentWrapper>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* PROJEKTY */}
            <section id="projects" className="relative min-h-screen flex items-center justify-center px-8 py-24">
                <div className="max-w-[1100px] mx-auto w-full">
                    <motion.h2
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                        className="mb-20 tracking-tighter text-center uppercase p-4"
                        style={headerGlow}
                    >
                        {siteData.projects.title}
                    </motion.h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {siteData.projects.items.map((project: any, index: number) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.98 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.8, delay: index * 0.15 }}
                                viewport={{ once: true }}
                                className="group relative overflow-hidden rounded-[20px] h-[400px] cursor-pointer"
                            >
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent flex flex-col justify-end transform translate-y-6 group-hover:translate-y-0 transition-transform duration-700">
                                    <ContentWrapper className="gap-2">
                                        <h3 className="text-lg md:text-xl font-black text-[#e6000b] tracking-tighter drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)] leading-tight m-0 p-0">
                                            {project.title}
                                        </h3>
                                        <p className="text-gray-100 text-[11px] md:text-xs font-medium leading-[1.5] opacity-90 m-0 p-0">
                                            {project.description}
                                        </p>
                                    </ContentWrapper>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* OPINIE */}
            <section id="reviews" className="relative min-h-screen flex items-center justify-center px-8 py-24">
                <div className="max-w-[1100px] mx-auto w-full">
                    <motion.h2
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                        className="mb-16 tracking-tighter text-center uppercase p-4"
                        style={headerGlow}
                    >
                        {siteData.reviews.title}
                    </motion.h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
                        {siteData.reviews.items.map((review: any, index: number) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: index * 0.2 }}
                                viewport={{ once: true }}
                                className="relative rounded-[20px] overflow-hidden backdrop-blur-3xl"
                                style={{
                                    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.03))',
                                    border: '1px solid rgba(255, 255, 255, 0.1)',
                                    boxShadow: '0 12px 30px rgba(0, 0, 0, 0.3)',
                                }}
                            >
                                <div
                                    className="absolute top-0 left-0 right-0 h-[1.5px]"
                                    style={{
                                        background: '#e6000b',
                                        boxShadow: '0 0 6px #e6000b',
                                    }}
                                />

                                <ContentWrapper className="gap-5">
                                    <div className="flex gap-1">
                                        {[...Array(review.rating)].map((_, i) => (
                                            <span key={i} className="text-[#e6000b] text-base md:text-lg drop-shadow-[0_0_6px_#e6000b] m-0 p-0">★</span>
                                        ))}
                                    </div>
                                    <p className="text-gray-100 text-sm md:text-base italic font-medium leading-[1.7] tracking-tight m-0 p-0">
                                        &quot;{review.text}&quot;
                                    </p>
                                    <p className="text-[#e6000b] font-black text-lg tracking-tighter drop-shadow-lg uppercase m-0 p-0">
                                        - {review.name}
                                    </p>
                                </ContentWrapper>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* KONTAKT */}
            <section id="contact" className="relative min-h-screen flex items-center justify-center px-8 py-24">
                <div className="max-w-4xl mx-auto w-full">
                    <motion.h2
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                        className="mb-16 tracking-tighter text-center uppercase p-4"
                        style={headerGlow}
                    >
                        {siteData.contact.title}
                    </motion.h2>

                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                        className="bg-black/90 border-2 border-white/5 rounded-[28px] backdrop-blur-3xl relative"
                        style={{ boxShadow: '0 25px 70px rgba(0,0,0,1)' }}
                    >
                        <div
                            className="absolute inset-0 opacity-10 pointer-events-none rounded-[28px]"
                            style={{
                                backgroundImage: 'radial-gradient(circle at top right, #e6000b, transparent 50%)'
                            }}
                        />

                        <ContentWrapper className="relative z-10 gap-10">
                            <div className="flex items-center gap-6 group cursor-pointer">
                                <div className="p-3.5 rounded-full bg-white/5 border border-white/10 text-[#e6000b] group-hover:scale-105 group-hover:bg-[#e6000b]/20 group-hover:border-[#e6000b]/40 transition-all duration-700 shadow-[0_0_15px_rgba(0,0,0,0.8)]">
                                    <Phone className="w-6 h-6 md:w-8 md:h-8" />
                                </div>
                                <div>
                                    <p className="text-gray-500 text-[8px] uppercase tracking-[0.3em] font-black mb-1.5 opacity-60 m-0 p-0">Telefon</p>
                                    <p className="text-lg md:text-[30px] text-white font-black tracking-tighter group-hover:text-[#e6000b] transition-all duration-500 leading-none m-0 p-0">
                                        {siteData.contact.phone}
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center gap-6 group cursor-pointer">
                                <div className="p-3.5 rounded-full bg-white/5 border border-white/10 text-[#e6000b] group-hover:scale-105 group-hover:bg-[#e6000b]/20 group-hover:border-[#e6000b]/40 transition-all duration-700 shadow-[0_0_15px_rgba(0,0,0,0.8)]">
                                    <Mail className="w-6 h-6 md:w-8 md:h-8" />
                                </div>
                                <div>
                                    <p className="text-gray-500 text-[8px] uppercase tracking-[0.3em] font-black mb-1.5 opacity-60 m-0 p-0">Email</p>
                                    <p className="text-base md:text-[28px] text-white font-black tracking-tighter group-hover:text-[#e6000b] transition-all duration-500 leading-none break-all uppercase m-0 p-0">
                                        {siteData.contact.email}
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center gap-6 group cursor-pointer">
                                <div className="p-3.5 rounded-full bg-white/5 border border-white/10 text-[#e6000b] group-hover:scale-105 group-hover:bg-[#e6000b]/20 group-hover:border-[#e6000b]/40 transition-all duration-700 shadow-[0_0_15px_rgba(0,0,0,0.8)]">
                                    <MapPin className="w-6 h-6 md:w-8 md:h-8" />
                                </div>
                                <div>
                                    <p className="text-gray-500 text-[8px] uppercase tracking-[0.3em] font-black mb-1.5 opacity-60 m-0 p-0">Adres</p>
                                    <div className="space-y-1.5">
                                        <p className="text-lg md:text-[30px] text-white font-black tracking-tighter group-hover:text-[#e6000b] transition-all duration-500 leading-none uppercase m-0 p-0">
                                            {siteData.contact.address.street}
                                        </p>
                                        <p className="text-base md:text-[24px] text-gray-400 font-bold tracking-tighter leading-none uppercase opacity-80 m-0 p-0">
                                            {siteData.contact.address.city}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-6 pt-8 border-t border-white/10 text-center w-full">
                                <p className="text-gray-400 text-[10px] md:text-sm tracking-[0.2em] font-medium italic m-0 p-0">
                                    Godziny otwarcia: <span className="text-white font-black not-italic ml-2">{siteData.contact.hours}</span>
                                </p>
                            </div>
                        </ContentWrapper>
                    </motion.div>
                </div>
            </section>

        </div>
    );
}
